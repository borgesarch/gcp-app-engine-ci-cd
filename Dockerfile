FROM node:12.13.0 AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm install --silent --force
CMD npm run build && npm run watch