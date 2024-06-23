# Stage 1: Build React app and install dependencies
FROM node:14 as build

WORKDIR /app

# Copy the package.json and package-lock.json for both frontend and backend
COPY package*.json ./
COPY frontend/package*.json ./frontend/

# Install dependencies and build the React app
RUN npm run build

# Stage 2: Setup backend and serve built React app
FROM node:14

WORKDIR /app

# Copy the backend-specific files
COPY package*.json ./
COPY backend ./backend
COPY .env ./

# Install backend dependencies
RUN npm install

# Copy built React app from Stage 1
COPY --from=build /app/frontend/build ./frontend/build

# Expose the backend port
EXPOSE 5000

# Run the backend server
CMD ["node", "backend/server.js"]
