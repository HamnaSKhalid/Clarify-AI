// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import IPhoneFrame from './components/IPhoneFrame';
import { FreeModeProvider } from './FreeModeContext';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <FreeModeProvider>
      <IPhoneFrame />
    </FreeModeProvider>
  );
}

export default App;
