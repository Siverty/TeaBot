FROM node:17.9.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV TOKEN=$TOKEN
ENV TENORKEY=$TENORKEY

CMD [ "node", "index.js" ]