import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/SOSHistory.css';

const SOSHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/sos/history');
      setHistory(response.data);
    } catch (error) {
      console.error('Error fetching history:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="history-container">
      <div className="history-header">
        <h2>📋 SOS Alert History</h2>
        <button onClick={fetchHistory} className="refresh-btn">Refresh</button>
      </div>

      {loading ? (
        <p className="loading">Loading history...</p>
      ) : history.length === 0 ? (
        <p className="no-history">No SOS alerts yet.</p>
      ) : (
        <div className="history-list">
          {history.map((alert) => (
            <div key={alert.id} className={`history-card status-${alert.status}`}>
              <div className="history-content">
                <h3>{alert.trigger_type === 'button' ? '🔴 Manual SOS' : '🔄 Shake Triggered'}</h3>
                <p className="timestamp">{formatDate(alert.created_at)}</p>
                <p className="coords">
                  📍 {alert.latitude?.toFixed(4)}°, {alert.longitude?.toFixed(4)}°
                </p>
                <a href={alert.maps_link} target="_blank" rel="noopener noreferrer" className="maps-link">
                  View Location
                </a>
              </div>
              <div className="status-badge">
                {alert.status === 'active' ? '🔔 Active' : '✅ Resolved'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SOSHistory;
