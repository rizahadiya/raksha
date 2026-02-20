const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Get Google Maps link
router.post('/maps-link', locationController.getMapsLink);

module.exports = router;
