Then run these two command in command line

docker network create netPRO290

docker run -d -p 26017:27017 --name mongoSitter --net netPRO290 mongo:latest
