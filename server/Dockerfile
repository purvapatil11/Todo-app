FROM node:18-alphine

# set working directory
WORKDIR /app

# copy .json file
COPY package*.json ./
RUN npm install

#copy  rest of the code
COPY . .
  
#start the backend application
CMD [ "nodemon","app.js"]
