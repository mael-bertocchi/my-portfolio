FROM node:20-alpine AS dependencies
WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* ./

RUN apk add --no-cache git python3 build-base

FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=dependencies /app /app
COPY . .

RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install; fi
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
