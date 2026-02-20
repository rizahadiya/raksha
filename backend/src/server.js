const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./database');
const sosRoutes = require('./routes/sos');
const contactRoutes = require('./routes/contacts');
const locationRoutes = require('./routes/location');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize database
db.initializeDatabase();

// Routes
app.use('/api/sos', sosRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/location', locationRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Raksha Backend is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚨 Raksha Backend running on port ${PORT}`);
});

module.exports = app;
