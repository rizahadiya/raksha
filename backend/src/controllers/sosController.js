const { v4: uuidv4 } = require('uuid');
const db = require('../database');

exports.triggerSOS = async (req, res) => {
  try {
    const { latitude, longitude, triggerType } = req.body;
    const alertId = uuidv4();

    const mapsLink = `https://google.com/maps?q=${latitude},${longitude}`;

    // Insert alert
    await db.run(
      `INSERT INTO sos_alerts (id, trigger_type, latitude, longitude, maps_link) 
       VALUES (?, ?, ?, ?, ?)`,
      [alertId, triggerType || 'button', latitude, longitude, mapsLink]
    );

    // Get all primary contacts
    const contacts = await db.all(
      `SELECT * FROM emergency_contacts WHERE is_primary = 1`
    );

    // Record alert recipients
    for (const contact of contacts) {
      await db.run(
        `INSERT INTO alert_recipients (alert_id, contact_id) VALUES (?, ?)`,
        [alertId, contact.id]
      );
    }

    res.json({
      success: true,
      alertId,
      mapsLink,
      contactsNotified: contacts.length,
      message: `🚨 SOS triggered! ${contacts.length} contacts notified.`
    });
  } catch (error) {
    console.error('Error triggering SOS:', error);
    res.status(500).json({ error: 'Failed to trigger SOS' });
  }
};

exports.getSOSHistory = async (req, res) => {
  try {
    const alerts = await db.all(
      `SELECT * FROM sos_alerts ORDER BY created_at DESC LIMIT 20`
    );
    res.json(alerts);
  } catch (error) {
    console.error('Error fetching SOS history:', error);
    res.status(500).json({ error: 'Failed to fetch history' });
  }
};

exports.cancelSOS = async (req, res) => {
  try {
    const { id } = req.params;
    await db.run(
      `UPDATE sos_alerts SET status = 'cancelled' WHERE id = ?`,
      [id]
    );
    res.json({ success: true, message: 'SOS cancelled' });
  } catch (error) {
    console.error('Error cancelling SOS:', error);
    res.status(500).json({ error: 'Failed to cancel SOS' });
  }
};
