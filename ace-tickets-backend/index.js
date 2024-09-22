const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const { passport, authenticateJWT } = require('./middleware/auth'); // Import the middleware

dotenv.config(); // Load environment variables from .env

const app = express();

// Connect to MongoDB
connectDB(
  mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
);

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://acetickets.vercel.com',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true, // Allow cookies and credentials
}));
app.use(passport.initialize()); // Initialize Passport

// Routes
app.use('/api/auth', require('./routes/auth')); // Authentication routes

app.get('/api/protected', authenticateJWT, (req, res) => {
  res.send('This is a protected route');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
