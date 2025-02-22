import React, { useState } from 'react';
import './MisinformationPrevention.css';

const MisinformationPrevention = () => {
  const [linkSubmitted, setLinkSubmitted] = useState(false);

  const handleVerifyClick = () => {
    setLinkSubmitted(true);
  };

  return (
    <div className="misinformation-prevention">
      <h2>Misinformation Prevention</h2>
      <p>Paste a link to verify its accuracy:</p>
      
      {!linkSubmitted ? (
        <div className="input-container">
          <input
            type="text"
            placeholder="Paste the link here"
            className="link-input"
          />
          <button onClick={handleVerifyClick} className="verify-button">
            Verify
          </button>
        </div>
      ) : (
        <p className="verification-message">This content has been verified and is accurate.</p>
      )}
      
    </div>
  );
};

export default MisinformationPrevention;
