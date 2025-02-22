import React, { useState } from 'react';
import './iPhoneScreen.css';
import MainInterface from './MainInterface';
import appLogo from './assets/appLogo.png';

const iPhoneScreen = () => {
  const [isAppOpen, setIsAppOpen] = useState(false);

  const openApp = () => setIsAppOpen(true);

  return (
    <div className="iphone-screen">
      {!isAppOpen && (
        <div className="home-screen">
          <img src={appLogo} alt="App Icon" className="app-icon" onClick={openApp} />
        </div>
      )}
      {isAppOpen && <MainInterface />}
    </div>
  );
};

export default iPhoneScreen;
