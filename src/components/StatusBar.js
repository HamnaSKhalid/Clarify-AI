import React, { useState, useEffect } from 'react';
import './StatusBar.css';

const StatusBar = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
      const minutes = now.getMinutes().toString().padStart(2, '0'); // Add leading zero
      const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
      setCurrentTime(`${hours}:${minutes} ${ampm}`);
    };

    updateClock(); // Initial call to set time immediately
    const timer = setInterval(updateClock, 60000); // Update time every 60 seconds

    return () => clearInterval(timer); // Clear interval on component unmount
  }, []);

  return (
    <div className="status-bar">
      <div className="status-time">{currentTime}</div>
      <div className="status-icons">
        {/* Network Signal */}
        <div className="network-icon">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
          <div className="bar bar4"></div>
        </div>

        {/* Wi-Fi */}
        <div className="wifi-icon">
          <div className="wifi-arc wifi1"></div>
          <div className="wifi-arc wifi2"></div>
          <div className="wifi-arc wifi3"></div>
        </div>

        {/* Battery */}
        <div className="battery-icon">
          <div className="battery-body">
            <div className="battery-level"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
