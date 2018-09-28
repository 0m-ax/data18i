FROM node:10
ADD . /app
WORKDIR /app
RUN npm install
RUN mkdir /app/db
CMD node index.js