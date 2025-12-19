FROM node:18-alphine

WORKDIR /app

COPY package*json ./
RUN npm ci 

COPY . .
