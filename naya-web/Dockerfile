FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Set backend API URL (you can override this in Cloud Run too)
ENV REACT_APP_API_URL=https://naya-backend-trgtymzruq-uc.a.run.app

EXPOSE 8080
CMD ["npm", "start"]
