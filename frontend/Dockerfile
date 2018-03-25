FROM node:9-alpine
ARG DEBIAN_FRONTEND=noninteractive
RUN apk update && apk add chromium
ENV CHROME_BIN=chromium
RUN mkdir -p /usr/src/app
RUN npm install -g @angular/cli
WORKDIR /usr/src/app
COPY ./package.json ./yarn.lock ./
RUN yarn
COPY ./ ./
