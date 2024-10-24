FROM node:18-alpine

RUN apk add --no-cache curl

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]