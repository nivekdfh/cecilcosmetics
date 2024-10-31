FROM node:lts-alpine

# Set environment to production
ENV NODE_ENV=production

# Set the working directory to /app
WORKDIR /cecil-app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --production --silent

# Copy all files to the working directory /app
COPY . .

# Expose the correct port for your server
EXPOSE 5005

# Start the application with server.js in /app
CMD ["node", "server.js"]
