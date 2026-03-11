FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Устанавливаем зависимости
RUN npm ci
COPY . .
# Собираем проект (standalone уже включен в твоем next.config.ts)
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Копируем необходимые файлы из сборщика
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# Запускаем сервер напрямую через node
CMD ["node", "server.js"]