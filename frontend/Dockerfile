FROM node:20-alpine3.17

# set working directory
WORKDIR /frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /frontend/node_modules/.bin:$PATH

RUN apk add iputils curl

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

# RUN npm install --silent
RUN npm cache clean --force
RUN npm install
RUN npm install react-scripts@5.0.1 -g --silent
RUN npm install react-bootstrap bootstrap 

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]
