FROM node:18-alpine
WORKDIR /server
COPY package*.json /server/
COPY . /server
RUN npm install