FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Прокидываем переменную прямо в процесс сборки
ENV POSTGRES_URL="postgresql://neondb_owner:npg_ZM2GrezLsR8A@ep-cold-voice-a46lxw91-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"

RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# КРИТИЧЕСКИ ВАЖНО ДЛЯ DOCKER:
ENV PORT 3000
ENV HOSTNAME "0.0.0.0" 

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# Запускаем через node
CMD ["node", "server.js"]