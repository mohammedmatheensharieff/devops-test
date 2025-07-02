# Stage 1: Node with React dev server
FROM node:16-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose the port React uses
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
