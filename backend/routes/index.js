const express = require('express');
const router = express.Router();
const contactRoutes = require('./contact');

// Health check route
router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// API routes
router.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the Portfolio API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      api: '/api',
      contact: '/api/contact',
    },
  });
});

// Contact routes
router.use('/api/contact', contactRoutes);

// 404 handler for unmatched routes
router.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = router;
