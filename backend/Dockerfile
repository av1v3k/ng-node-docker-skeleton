FROM node:17-alpine

WORKDIR /backendcode

COPY package*.json /backendcode

RUN npm install

COPY . /backendcode

CMD ["npm", "start"]
