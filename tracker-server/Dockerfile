#Defining the docker image
FROM node:latest

#Defining the working directory of the app
WORKDIR /app

#copying the package json to the working directory(/app) 
COPY ./package*.json ./

#Run and install all dependencies 
RUN npm install

#copy code over to the working directory 
COPY . .

#set container port for listening 
ENV PORT=8080

EXPOSE 8080

#Excecution command in exec form 
CMD ["npm", "start"] 


#Running docker instruction
# To connect to local mysql database from docker container, change the HOST in .env from "localhost" to "host.docker.internal"
# build image: docker build -t heedoms6/trackerserver:1.0 ./directory
# to run locally: docker run --env-file .env -p 8000:8080 [tagname or imageID] *check by using docker images
  # -p flag for port fowarding to access the container locally