FROM mhart/alpine-node:latest
RUN mkdir -p /usr/src/app -p /usr/src/node_modules
ENV NODE_PATH=/usr/src/node_modules
WORKDIR /usr/src/app
COPY ./package.json ./yarn.lock ./
RUN yarn install
COPY ./ ./
