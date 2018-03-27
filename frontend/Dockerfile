FROM node:9-alpine
RUN apk update \
  && apk upgrade \
  && apk add --update ca-certificates \
  && apk add --no-cache chromium udev ttf-freefont \
  && apk add --update alpine-sdk python \
  && yarn global add @angular/cli \
  && ng set --global packageManager=yarn \
  && apk del alpine-sdk python \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache clean --force \
  && yarn cache clean \
#install chromium for headless browser tests
RUN 
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json ./yarn.lock ./
RUN yarn
COPY ./ ./
