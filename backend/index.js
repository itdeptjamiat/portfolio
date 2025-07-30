const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    console.log('Continuing with in-memory storage for contacts');
  }
};

// Connect to MongoDB
connectDB();

// In-memory storage for contacts (fallback when MongoDB is not available)
let contacts = [];

// Import routes
const projectsRouter = require('./routes/projects');

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the Portfolio API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      api: '/api',
      contact: '/api/contact',
      projects: '/api/projects',
    },
  });
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // Create new contact submission
    const contact = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // Store in memory
    contacts.push(contact);

    console.log('Contact submission received:', contact);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: contact,
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.',
    });
  }
});

// Get all contacts (admin endpoint)
app.get('/api/contacts', async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts',
    });
  }
});

// Use projects routes
app.use('/api/projects', projectsRouter);

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`API available at http://localhost:${PORT}`);
      console.log('Contact form submissions will be stored in memory');
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
