# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the Docker container
COPY package*.json ./

# Install the project dependencies inside the Docker container
RUN npm install

# Copy the rest of the project files into the Docker container
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the application
CMD [ "node", "src/server.js" ]