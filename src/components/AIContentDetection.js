import React, { useState } from 'react';
import './AIContentDetection.css';

const AIContentDetection = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [detectionMessage, setDetectionMessage] = useState("");

  const handleFileUpload = () => {
    setFileUploaded(true);
    setDetectionMessage(""); // Reset the message when a new file is uploaded
  };

  const handleDetectClick = () => {
    setDetectionMessage("AI content detected, likely made by OpenAI Software.");
  };

  return (
    <div className="ai-content-detection">
      <h2>AI Content Detection</h2>
      <p>Upload a file to detect AI-generated content:</p>

      {!fileUploaded ? (
        <label className="file-upload-label">
          Choose File
          <input type="file" onChange={handleFileUpload} className="file-input" />
        </label>
      ) : (
        <button onClick={handleDetectClick} className="detect-button">
          Detect
        </button>
      )}

      {detectionMessage && <p className="detection-message">{detectionMessage}</p>}
    </div>
  );
};

export default AIContentDetection;
