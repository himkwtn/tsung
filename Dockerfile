FROM node:12
WORKDIR /app
COPY ./app.js .
COPY package.json .
RUN npm i
CMD npm start