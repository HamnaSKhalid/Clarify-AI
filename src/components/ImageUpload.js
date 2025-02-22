import React, { useState } from 'react';
import './ImageUpload.css';

const ImageUpload = () => {
  const [uploadResult, setUploadResult] = useState('');

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.name === '1.png') setUploadResult('This is a sample upload result for 1.png');
      else if (file.name === '2.png') setUploadResult('This is a sample upload result for 2.png');
      else setUploadResult('Unrecognized file uploaded.');
    }
  };

  return (
    <div className="image-upload">
      <input type="file" onChange={handleUpload} />
      {uploadResult && <p className="upload-result">{uploadResult}</p>}
    </div>
  );
};

export default ImageUpload;
