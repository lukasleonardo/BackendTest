
FROM node:latest

RUN mkdir -p /usr/node/
WORKDIR /usr/node/
COPY package.json .
RUN npm install
COPY . .