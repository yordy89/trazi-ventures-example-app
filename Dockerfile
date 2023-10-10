FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5555

CMD [ "npm", "run", "start:dev" ]
