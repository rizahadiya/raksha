const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Get all contacts
router.get('/', contactController.getAllContacts);

// Add contact
router.post('/', contactController.addContact);

// Update contact
router.put('/:id', contactController.updateContact);

// Delete contact
router.delete('/:id', contactController.deleteContact);

// Set primary contact
router.post('/:id/primary', contactController.setPrimaryContact);

module.exports = router;
