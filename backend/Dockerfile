FROM node:12.20.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
#COPY wait-for-it.sh ./
RUN npm install
# If you are building your code for production
# RUN npm install --only=production
ENV PORT=8080
# Bundle app source
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]