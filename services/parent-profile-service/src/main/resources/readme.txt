// Create a docker network
docker network create netKiddoKare

// Create a mongo database for parent profile service (temp)
docker run -d -p 27017:27017 --name ParentProfileMongoDB --net netKiddoKare mongo:latest

// JSON for fruit (name, desc, origin, and isGMO are needed for creation of fruit)
{
    "parentUUID": "",
    "name": "",
    "password": "",
    "email": "",
    "address": "",
    "creationDate": ""
}