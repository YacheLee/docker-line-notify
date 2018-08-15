FROM mhart/alpine-node:8

# Set the working directory to /app
WORKDIR /app

#Install useful tools
RUN apk add --no-cache curl
RUN apk add --no-cache nano

# Set the log level for container
RUN npm config set loglevel warn

# Install app dependencies
COPY package.json .
RUN yarn --production

COPY . .
CMD npm start
EXPOSE 3000