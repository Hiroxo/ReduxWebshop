# base image
FROM node:10


# install and cache app dependencies
COPY src /src
COPY public /public
COPY package.json .
RUN npm install

# start App
CMD ["npm", "start"]
