const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const { passport, authenticateJWT } = require('./middleware/auth'); // Import the middleware

dotenv.config(); // Load environment variables from .env

const app = express();

// Connect to MongoDB
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('MongoDB URI is not defined in .env');
  process.exit(1); // Stop the application
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the application on database connection failure
  });

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://ace-tickets-app-gen.vercel.app/', // Double-check your frontend domain
  methods: 'GET,POST,PUT,DELETE',
  credentials: true, // Allow cookies and credentials
}));

// Initialize Passport
app.use(passport.initialize()); 

// Routes
app.use('/api/auth', require('./routes/auth')); // Authentication routes

// Protected route example
app.get('/api/protected', authenticateJWT, (req, res) => {
  res.send('This is a protected route');
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
