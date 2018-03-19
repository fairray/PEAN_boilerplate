FROM node:9-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json .
RUN npm i
RUN npm i -g knex
RUN npm i -g nodemon
COPY ./ ./