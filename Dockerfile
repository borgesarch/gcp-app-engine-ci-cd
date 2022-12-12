FROM node:16-alpine AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm install --silent --force
EXPOSE 8000
CMD npm run start