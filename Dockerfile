FROM node:18-alpine AS Build
WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY craco.config.js .
RUN yarn install
COPY . .
RUN yarn build

