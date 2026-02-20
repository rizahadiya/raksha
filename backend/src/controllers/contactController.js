const db = require('../database');

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await db.all(
      `SELECT * FROM emergency_contacts ORDER BY is_primary DESC, created_at DESC`
    );
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

exports.addContact = async (req, res) => {
  try {
    const { name, phone, relationship } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }

    const result = await db.run(
      `INSERT INTO emergency_contacts (name, phone, relationship) 
       VALUES (?, ?, ?)`,
      [name, phone, relationship || '']
    );

    res.json({
      success: true,
      id: result.id,
      message: '✅ Contact added successfully'
    });
  } catch (error) {
    console.error('Error adding contact:', error);
    res.status(500).json({ error: 'Failed to add contact' });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone, relationship } = req.body;

    await db.run(
      `UPDATE emergency_contacts SET name = ?, phone = ?, relationship = ? WHERE id = ?`,
      [name, phone, relationship, id]
    );

    res.json({ success: true, message: 'Contact updated' });
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ error: 'Failed to update contact' });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    await db.run(`DELETE FROM emergency_contacts WHERE id = ?`, [id]);
    res.json({ success: true, message: 'Contact deleted' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ error: 'Failed to delete contact' });
  }
};

exports.setPrimaryContact = async (req, res) => {
  try {
    const { id } = req.params;

    // Remove primary from all contacts
    await db.run(`UPDATE emergency_contacts SET is_primary = 0`);

    // Set new primary
    await db.run(
      `UPDATE emergency_contacts SET is_primary = 1 WHERE id = ?`,
      [id]
    );

    res.json({ success: true, message: 'Primary contact set' });
  } catch (error) {
    console.error('Error setting primary contact:', error);
    res.status(500).json({ error: 'Failed to set primary contact' });
  }
};
