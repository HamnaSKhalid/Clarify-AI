import React from 'react';
import './HomeScreen.css';
import StatusBar from './StatusBar';
import appLogo from '../assets/appLogo.png';
import youtubeIcon from '../assets/youtubeIcon.png';
import settingsIcon from '../assets/settingsIcon.png';
import cameraIcon from '../assets/cameraIcon.png';
import phoneIcon from '../assets/phoneIcon.png';
import messagesIcon from '../assets/messagesIcon.png';
import musicIcon from '../assets/musicIcon.png';
import instagramIcon from '../assets/instagramIcon.png';
import galleryIcon from '../assets/galleryIcon.png';

const HomeScreen = ({ openApp }) => {
  return (
    <div className="home-screen">
      <StatusBar />

      <div className="dynamic-island"></div>

      <div className="power-button"></div>

      <div className="volume-buttons">
        <div className="volume-up"></div>
        <div className="volume-down"></div>
      </div>

      <div className="app-icons-row">
        <div className="app-icon-container" onClick={() => openApp('clarifyAI')}>
          <img src={appLogo} alt="Clarify AI" className="app-icon" />
          <p>Clarify AI</p>
        </div>
        <div className="app-icon-container" onClick={() => openApp('youtube')}>
          <img src={youtubeIcon} alt="YouTube" className="app-icon" />
          <p>YouTube</p>
        </div>
        <div className="app-icon-container">
          <img src={settingsIcon} alt="Settings" className="app-icon" />
          <p>Settings</p>
        </div>
        <div className="app-icon-container">
          <img src={cameraIcon} alt="Camera" className="app-icon" />
          <p>Camera</p>
        </div>
        <div className="app-icon-container">
          <img src={phoneIcon} alt="Phone" className="app-icon" />
          <p>Phone</p>
        </div>
        <div className="app-icon-container">
          <img src={messagesIcon} alt="Messages" className="app-icon" />
          <p>Messages</p>
        </div>
        <div className="app-icon-container">
          <img src={musicIcon} alt="Music" className="app-icon" />
          <p>Music</p>
        </div>
        <div className="app-icon-container" onClick={() => openApp('instagram')}>
          <img src={instagramIcon} alt="Instagram" className="app-icon" />
          <p>Instagram</p>
        </div>
        <div className="app-icon-container" onClick={() => openApp('gallery')}>
          <img src={galleryIcon} alt="Gallery" className="app-icon" />
          <p>Gallery</p>
        </div>
      </div>
    </div>
  );
};


export default HomeScreen;
