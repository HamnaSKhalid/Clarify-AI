// src/components/ContextInsights.js
import React, { useState } from 'react';
import './ContextInsights.css';
import saveIcon from '../assets/saveIcon.png';
import unsaveIcon from '../assets/unsaveIcon.png';
import infoIcon from '../assets/infoIcon.png';  // Add this to assets

const ContextInsights = () => {
  const [contextInfo, setContextInfo] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const sampleData = {
    who: "This is an image of a black hole, a region of spacetime where gravity is so strong that nothing, not even light, can escape.",
    where: "This particular black hole was observed in the galaxy M87, about 55 million light-years from Earth.",
    what: "Black holes are formed when massive stars collapse at the end of their life cycle. They are known for their intense gravitational pull."
  };

  const handleFileUpload = () => {
    setFileUploaded(true);
    setContextInfo(null);
  };

  const handleButtonClick = (type) => {
    setContextInfo(sampleData[type]);
  };

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="context-insights">
      <h2>Context Insights</h2>
      <p>Get more information about the media you're viewing:</p>

      {!fileUploaded ? (
        <label className="file-upload-label">
          Choose File
          <input type="file" onChange={handleFileUpload} className="file-input" />
        </label>
      ) : (
        <div className="context-buttons">
          <button onClick={() => handleButtonClick('who')}>Who?</button>
          <button onClick={() => handleButtonClick('where')}>Where?</button>
          <button onClick={() => handleButtonClick('what')}>What?</button>
        </div>
      )}

      {contextInfo && (
        <>
          <p className="context-info">{contextInfo}</p>
          <div className="extra-buttons">
            <button className="more-info-button">
              <img src={infoIcon} alt="Info" className="info-icon" />
              More Info
            </button>
            <button
              className={`save-button ${isSaved ? 'saved' : ''}`}
              onClick={handleSaveClick}
            >
              <img src={isSaved ? saveIcon : unsaveIcon} alt="Save" className="save-icon" />
              <span>{isSaved ? "Saved" : "Save"}</span>
            </button>
          </div>
        </>
      )}
      <button className="back-button">&#x21A9;</button>
    </div>
  );
};

export default ContextInsights;
