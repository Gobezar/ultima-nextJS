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

# Timeweb берёт HEALTHCHECK из Dockerfile и игнорирует путь из панели.
# node:20-alpine без curl; localhost на Alpine резолвится в ::1, а Next слушает 0.0.0.0.
HEALTHCHECK --interval=10s --timeout=5s --start-period=20s --retries=5 \
  CMD ["node", "-e", "fetch('http://127.0.0.1:3000/health').then((r)=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"]

CMD ["node", "server.js"]