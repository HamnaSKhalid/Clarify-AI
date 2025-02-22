import React, { useState } from 'react';
import './HelpButton.css';

const HelpButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleHelpClick = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="help-button-container">
      <button onClick={handleHelpClick} className="help-button">?</button>
      {showTooltip && (
        <div className="tooltip">
          This app provides context, detects misinformation, recommends content, and checks if media is AI-generated.
        </div>
      )}
    </div>
  );
};

export default HelpButton;
