# Stage 1: Build the React app
FROM node:16-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve app with `serve`
FROM node:16-alpine

WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy build artifacts
COPY --from=builder /app/build ./build

# Cloud Run expects app to listen on $PORT
ENV PORT 8080
EXPOSE 8080

# Serve static build files
CMD ["serve", "-s", "build", "-l", "8080"]
