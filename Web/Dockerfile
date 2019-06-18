FROM node:8.11.3
# Create app directory
# RUN mkdir -p /usr/src/app
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

ENV NUXT_PORT=3333
ENV NUXT_HOST='0.0.0.0'

# Copying source files
COPY . .

# Bundle app source
RUN npm run build
ENV HOST 0.0.0.0
# Running the app
CMD [ "npm", "start" ]
EXPOSE 3333














# FROM node:8.11.1
# MAINTAINER abc

# ENV NODE_ENV dev
# WORKDIR /app
# COPY ["package.json", "package-lock.json*", "./"]
# RUN npm i
# COPY . .
# RUN npm run build
# EXPOSE 80