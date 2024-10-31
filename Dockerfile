FROM node:lts-alpine

# Set environment to production
ENV NODE_ENV=production

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and lock files
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Install dependencies and move node_modules to root
RUN npm install --production --silent && mv node_modules ../

# Copy all remaining files
COPY . .

# Expose the port your app will run on (change to the correct one)
EXPOSE 5005

# Change ownership to node user
RUN chown -R node /usr/src/app

# Use the non-root user
USER node

# Run the app using server.js as the entry point
CMD ["node", "server.js"]
