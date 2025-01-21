const express = require('express');
const cors = require('cors');
const connectDB = require('./server/connection'); // MongoDB connection setup
const userRoutes = require('./routes/userRoutes'); // User routes
const downloaderRoutes = require('./routes/downloader'); // Downloader routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON in request bodies

// Connect to MongoDB
connectDB();

// Register routes
app.use('/api/users', userRoutes); // Register user routes with base path /api/users
app.use('/api/download', downloaderRoutes); // Register downloader routes with base path /api/download

// Start the server
const PORT = process.env.PORT || 5000; // Default to port 5000 if not set in environment variables
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
