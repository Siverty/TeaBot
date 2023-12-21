FROM node:20.10.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV TOKEN=$TOKEN
ENV TENORKEY=$TENORKEY

CMD [ "node", "index.js" ]