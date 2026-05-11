FROM node:24.14.0 AS builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:24.14.0-slim
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/public ./public
COPY .env ./

RUN npm ci --omit=dev

EXPOSE 3002
CMD ["npm", "run", "start"]
