import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SOSButton from './components/SOSButton';
import EmergencyContacts from './components/EmergencyContacts';
import SOSHistory from './components/SOSHistory';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    requestUserLocation();
  }, []);

  const requestUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          setLocationError('Location access denied. Please enable location in browser settings.');
          console.error('Geolocation error:', error);
        },
        { enableHighAccuracy: true, maximumAge: 5000 }
      );
    } else {
      setLocationError('Geolocation not supported in this browser');
    }
  };

  const handleSOSTriggered = () => {
    setCurrentPage('home');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚨 Raksha</h1>
        <p>Women Safety Platform</p>
      </header>

      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

      <main className="app-main">
        {currentPage === 'home' && (
          <SOSButton 
            userLocation={userLocation} 
            locationError={locationError}
            onSOSTriggered={handleSOSTriggered}
          />
        )}

        {currentPage === 'contacts' && <EmergencyContacts />}

        {currentPage === 'history' && <SOSHistory />}
      </main>

      <footer className="app-footer">
        <p>Stay Safe. Stay Connected. 💪</p>
      </footer>
    </div>
  );
}

export default App;
