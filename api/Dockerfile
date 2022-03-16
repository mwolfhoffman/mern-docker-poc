FROM node:16

WORKDIR /api

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

ENV PORT=5000

CMD [ "npm", "dev" ]
