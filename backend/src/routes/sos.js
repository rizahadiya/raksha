const express = require('express');
const router = express.Router();
const sosController = require('../controllers/sosController');

// Trigger SOS
router.post('/trigger', sosController.triggerSOS);

// Get SOS history
router.get('/history', sosController.getSOSHistory);

// Cancel SOS
router.post('/cancel/:id', sosController.cancelSOS);

module.exports = router;
