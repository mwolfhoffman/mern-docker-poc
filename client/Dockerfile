FROM node:16-alpine

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

ENV PORT=3000

COPY package*.json ./

RUN npm install --silent

COPY ./ ./

CMD ["npm", "./bin/www"]