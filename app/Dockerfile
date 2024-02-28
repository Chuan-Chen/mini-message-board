# Use official Node.js image as base
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Clone the required Git repository
RUN git clone https://github.com/Chuan-Chen/mini-message-board.git .

WORKDIR /usr/src/app/app

# Install dependencies
RUN npm install

# Expose the port your app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
