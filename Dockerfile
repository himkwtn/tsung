FROM node:12
WORKDIR /app
COPY package.json .
RUN npm i
COPY ./app.js .
CMD npm start