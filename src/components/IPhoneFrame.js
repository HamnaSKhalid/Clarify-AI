// src/components/IPhoneFrame.js
import React, { useState, useEffect } from 'react';
import './IPhoneFrame.css';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import MainInterface from './MainInterface';
import YouTubeApp from './YouTubeApp';
import InstagramApp from './InstagramApp';
import Gallery from './Gallery';
import FloatingFreeModeIcon from './FloatingFreeModeIcon';
import { useFreeMode } from '../FreeModeContext';
import appLogo from '../assets/appLogo.png';
import youtubeLogo from '../assets/youtubeIcon.png';
import instagramIcon from '../assets/instagramIcon.png';
import galleryIcon from '../assets/galleryIcon.png';
import homeLogo from '../assets/home.png';

const IPhoneFrame = () => {
  const [activeApp, setActiveApp] = useState('home');
  const [showSplash, setShowSplash] = useState(true);
  const [showAppSwitcher, setShowAppSwitcher] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const [currentGalleryItemId, setCurrentGalleryItemId] = useState(null); // Track gallery item ID
  const { freeModeEnabled, toggleFreeMode } = useFreeMode();

  const apps = [
    { name: 'Clarify AI', icon: appLogo, appName: 'clarifyAI' },
    { name: 'YouTube', icon: youtubeLogo, appName: 'youtube' },
    { name: 'Instagram', icon: instagramIcon, appName: 'instagram' },
    { name: 'Gallery', icon: galleryIcon, appName: 'gallery' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const openApp = (appName) => {
    setActiveApp(appName);
    setShowAppSwitcher(false);
  };

  const handleSwipeUp = () => {
    setShowAppSwitcher(!showAppSwitcher);
  };

  const handleVideoChange = (videoId) => {
    setCurrentVideoId(videoId);
  };

  const handleGalleryItemSelect = (itemId) => {
    setCurrentGalleryItemId(itemId);
  };

  return (
    <div className="iphone-container">
      <div className="iphone-frame">
        <div className="dynamic-island"></div>
        <div className="side-buttons">
          <div className="volume-buttons">
            <div className="volume-up"></div>
            <div className="volume-down"></div>
          </div>
          <div className="power-button"></div>
        </div>
        {showSplash ? (
          <SplashScreen />
        ) : showAppSwitcher ? (
          <div className="app-switcher">
            {apps.map((app, index) => (
              <div key={index} className="app-thumbnail" onClick={() => openApp(app.appName)}>
                <img src={app.icon} alt={app.name} className="app-logo" />
                <p>{app.name}</p>
              </div>
            ))}
            <div className="home-thumbnail" onClick={() => openApp('home')}>
              <img src={homeLogo} alt="Home" className="home-logo" />
              <p>Home</p>
            </div>
          </div>
        ) : (
          <>
            {activeApp === 'home' && <HomeScreen openApp={openApp} />}
            {activeApp === 'clarifyAI' && <MainInterface />}
            {activeApp === 'youtube' && (
              <YouTubeApp onVideoChange={handleVideoChange} />
            )}
            {activeApp === 'instagram' && <InstagramApp onClose={() => setActiveApp('home')} />}
            {activeApp === 'gallery' && (
              <Gallery onClose={() => setActiveApp('home')} onItemSelect={handleGalleryItemSelect} />
            )}
            <div className="swipe-bar" onClick={handleSwipeUp}></div>
          </>
        )}
        {freeModeEnabled && activeApp !== 'clarifyAI' && (
          <FloatingFreeModeIcon activeApp={activeApp} currentVideoId={currentVideoId} currentGalleryItemId={currentGalleryItemId} />
        )}
        <button className="toggle-free-mode" onClick={toggleFreeMode}>
          {freeModeEnabled ? 'Disable Free Mode' : 'Enable Free Mode'}
        </button>
      </div>
    </div>
  );
};

export default IPhoneFrame;
