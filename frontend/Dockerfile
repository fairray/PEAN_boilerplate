FROM node:9-alpine
RUN mkdir -p /usr/src/app
RUN npm install -g @angular/cli
WORKDIR /usr/src/app
COPY ./package.json ./yarn.lock ./
RUN yarn install
COPY ./ ./
