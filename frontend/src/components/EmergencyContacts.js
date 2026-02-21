import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiPlus, FiTrash2, FiCheck } from 'react-icons/fi'; // Removed FiEdit2 (unused)
import '../styles/EmergencyContacts.css';

const EmergencyContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', relationship: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddContact = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/contacts/${editingId}`, formData);
        setEditingId(null);
      } else {
        await axios.post('http://localhost:5000/api/contacts', formData);
      }
      setFormData({ name: '', phone: '', relationship: '' });
      setShowForm(false);
      fetchContacts();
    } catch (error) {
      console.error('Error saving contact:', error);
      alert('Failed to save contact');
    }
  };

  const handleDeleteContact = async (id) => {
    if (window.confirm('Delete this contact?')) {
      try {
        await axios.delete(`http://localhost:5000/api/contacts/${id}`);
        fetchContacts();
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  const handleSetPrimary = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/contacts/${id}/primary`);
      fetchContacts();
    } catch (error) {
      console.error('Error setting primary contact:', error);
    }
  };

  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h2>👥 Emergency Contacts</h2>
        <button 
          className="add-button" 
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
            setFormData({ name: '', phone: '', relationship: '' });
          }}
        >
          <FiPlus /> Add Contact
        </button>
      </div>

      {showForm && (
        <form className="contact-form" onSubmit={handleAddContact}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="relationship"
            placeholder="Relationship (e.g., Mother, Friend)"
            value={formData.relationship}
            onChange={handleInputChange}
          />
          <div className="form-actions">
            <button type="submit" className="save-button">Save</button>
            <button type="button" onClick={() => setShowForm(false)} className="cancel-btn">Cancel</button>
          </div>
        </form>
      )}

      <div className="contacts-list">
        {contacts.length === 0 ? (
          <p className="no-contacts">No emergency contacts added yet. Add one to get started!</p>
        ) : (
          contacts.map((contact) => (
            <div key={contact.id} className={`contact-card ${contact.is_primary ? 'primary' : ''}`}>
              <div className="contact-info">
                <h3>{contact.name}</h3>
                <p className="phone">{contact.phone}</p>
                <p className="relationship">{contact.relationship || 'Contact'}</p>
              </div>
              <div className="contact-actions">
                <button 
                  className="primary-btn"
                  onClick={() => handleSetPrimary(contact.id)}
                  title="Set as primary"
                >
                  {contact.is_primary ? <FiCheck color="green" /> : '◌'}
                </button>
                <button 
                  className="delete-btn"
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EmergencyContacts;
