const express = require('express');
const router = express.Router();
const {
  submitContact,
  getAllContacts,
  updateContactStatus,
} = require('../controllers/contactController');

// Submit contact form
router.post('/submit', submitContact);

// Get all contacts (admin only - would need authentication middleware)
router.get('/all', getAllContacts);

// Update contact status (admin only - would need authentication middleware)
router.patch('/:id/status', updateContactStatus);

module.exports = router;
