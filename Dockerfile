FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package*.json ./
RUN npm ci
COPY . .

ENV POSTGRES_URL="postgresql://neondb_owner:npg_ZM2GrezLsR8A@ep-cold-voice-a46lxw91-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"

RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

RUN apk add --no-cache libc6-compat

ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1
ENV POSTGRES_URL="postgresql://neondb_owner:npg_ZM2GrezLsR8A@ep-cold-voice-a46lxw91-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# Не задаём HEALTHCHECK: Timeweb бесконечно ждёт Docker-статус starting.
# HOSTNAME нельзя ставить через ENV — Docker подменяет его на ID контейнера.
CMD ["sh", "-c", "HOSTNAME=0.0.0.0 exec node server.js"]
