import React from 'react';
import { FiHome, FiUsers, FiClipboard } from 'react-icons/fi';
import '../styles/Navigation.css';

const Navigation = ({ currentPage, onPageChange }) => {
  return (
    <nav className="navigation">
      <button
        className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
        onClick={() => onPageChange('home')}
      >
        <FiHome size={24} />
        <span>SOS</span>
      </button>
      <button
        className={`nav-item ${currentPage === 'contacts' ? 'active' : ''}`}
        onClick={() => onPageChange('contacts')}
      >
        <FiUsers size={24} />
        <span>Contacts</span>
      </button>
      <button
        className={`nav-item ${currentPage === 'history' ? 'active' : ''}`}
        onClick={() => onPageChange('history')}
      >
        <FiClipboard size={24} />
        <span>History</span>
      </button>
    </nav>
  );
};

export default Navigation;
