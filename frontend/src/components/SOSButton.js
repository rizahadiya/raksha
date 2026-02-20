import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiAlertCircle, FiCheck, FiX } from 'react-icons/fi';
import '../styles/SOSButton.css';

const SOSButton = ({ userLocation, locationError, onSOSTriggered }) => {
  const [countdown, setCountdown] = useState(0);
  const [sosTriggered, setSOSTriggered] = useState(false);
  const [mapsLink, setMapsLink] = useState('');
  const [message, setMessage] = useState('');
  const [lastAlertId, setLastAlertId] = useState(null);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0 && sosTriggered && lastAlertId) {
      // Countdown finished, alert is confirmed
    }
    return () => clearTimeout(timer);
  }, [countdown, sosTriggered, lastAlertId]);

  const handleSOSPress = async () => {
    if (!userLocation) {
      alert('⚠️ Waiting for location access... Please enable location services.');
      return;
    }

    try {
      // Trigger SOS
      const sosResponse = await axios.post('http://localhost:5000/api/sos/trigger', {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        triggerType: 'button'
      });

      setLastAlertId(sosResponse.data.alertId);

      // Get maps link
      const locationResponse = await axios.post('http://localhost:5000/api/location/maps-link', {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude
      });

      setMapsLink(locationResponse.data.mapsLink);
      setMessage(locationResponse.data.message);
      setSOSTriggered(true);
      setCountdown(10);

      // Trigger intense vibration
      if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200, 100, 200]);
      }

      alert(sosResponse.data.message);
    } catch (error) {
      console.error('Error triggering SOS:', error);
      alert('❌ Failed to trigger SOS. Please try again.');
    }
  };

  const handleCancelSOS = async () => {
    if (lastAlertId) {
      try {
        await axios.post(`http://localhost:5000/api/sos/cancel/${lastAlertId}`);
        setSOSTriggered(false);
        setCountdown(0);
        setMapsLink('');
        setMessage('');
        setLastAlertId(null);
        alert('✅ SOS cancelled');
      } catch (error) {
        console.error('Error cancelling SOS:', error);
      }
    }
  };

  return (
    <div className="sos-container">
      {!sosTriggered ? (
        <div className="sos-idle">
          <button 
            className="sos-button" 
            onClick={handleSOSPress}
            title="Press for emergency alert"
          >
            <FiAlertCircle size={80} />
            <span>SOS</span>
          </button>
          <p className="sos-text">Press the button in case of emergency</p>
          {locationError && <p className="location-error">⚠️ {locationError}</p>}
          {userLocation && (
            <p className="location-status">
              ✅ Location: {userLocation.latitude.toFixed(4)}°, {userLocation.longitude.toFixed(4)}°
            </p>
          )}
        </div>
      ) : (
        <div className="sos-active">
          <div className="countdown-display">
            <p className="countdown-text">Alert confirmed in</p>
            <div className="countdown-number">{countdown}</div>
            <p className="countdown-label">seconds</p>
          </div>

          {mapsLink && (
            <div className="alert-details">
              <h3>📍 Your Location</h3>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="maps-link">
                View on Google Maps
              </a>
              <p className="message-preview">{message}</p>
            </div>
          )}

          <div className="sos-actions">
            <button 
              className="cancel-button" 
              onClick={handleCancelSOS}
            >
              <FiX size={24} /> Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SOSButton;
