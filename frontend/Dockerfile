FROM node:17-alpine

ENV NODE_VERSION 16.14.0

RUN npm install -g @angular/cli

WORKDIR /frontendcode

COPY package*.json ./
RUN npm install
