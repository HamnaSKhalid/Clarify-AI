// src/components/MainInterface.js
import React, { useState } from 'react';
import './MainInterface.css';
import ContextInsights from './ContextInsights';
import MisinformationPrevention from './MisinformationPrevention';
import Recommendations from './Recommendations';
import AIContentDetection from './AIContentDetection';
import FloatingFreeModeIcon from './FloatingFreeModeIcon';
import { useFreeMode } from '../FreeModeContext';

const MainInterface = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const { freeModeEnabled, toggleFreeMode } = useFreeMode();

  return (
    <div className="main-interface">
      <div className="main-container">
        {!selectedFeature && (
          <>
            <h1>Welcome to Clarify AI</h1>
            <p>Select a feature to get started or try Free Mode:</p>
            <div className="feature-buttons">
              <button onClick={() => setSelectedFeature('contextInsights')}>Context Insights</button>
              <button onClick={() => setSelectedFeature('misinformationPrevention')}>Misinformation Prevention</button>
              <button onClick={() => setSelectedFeature('recommendations')}>Recommendations</button>
              <button onClick={() => setSelectedFeature('aiContentDetection')}>AI Content Detection</button>
            </div>
            <button className="original-free-mode-button" onClick={toggleFreeMode}>
              {freeModeEnabled ? 'Disable Free Mode' : 'Enable Free Mode'}
            </button>
            {freeModeEnabled && <FloatingFreeModeIcon />}
          </>
        )}
        {selectedFeature === 'contextInsights' && <ContextInsights />}
        {selectedFeature === 'misinformationPrevention' && <MisinformationPrevention />}
        {selectedFeature === 'recommendations' && <Recommendations />}
        {selectedFeature === 'aiContentDetection' && <AIContentDetection />}
        {selectedFeature && (
          <button onClick={() => setSelectedFeature(null)} className="back-button">
             &#x21A9;
          </button>
        )}
      </div>
    </div>
  );
};

export default MainInterface;
