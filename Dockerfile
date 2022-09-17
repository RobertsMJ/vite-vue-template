FROM node:lts-alpine as base

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

FROM base as code-builder

COPY . .

RUN npm run build

FROM nginx:alpine as prod

COPY --from=code-builder /app/dist /usr/share/nginx/html