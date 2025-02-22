// src/components/Gallery.js
import React, { useState, useRef } from 'react';
import './Gallery.css';
import galleryImg1 from '../assets/gallery_img_1.jpg';
import galleryImg2 from '../assets/gallery_img_2.jpg';
import galleryImg3 from '../assets/gallery_img_3.jpg';
import galleryImg4 from '../assets/gallery_img_4.jpg';
import galleryImg5 from '../assets/gallery_img_5.jpg';
import galleryVideo1 from '../assets/gallery_video_1.mp4';
import galleryVideo2 from '../assets/gallery_video_2.mp4';

const galleryItems = [
  { id: 1, type: 'image', src: galleryImg1 },
  { id: 2, type: 'image', src: galleryImg2 },
  { id: 3, type: 'image', src: galleryImg3 },
  { id: 4, type: 'image', src: galleryImg4 },
  { id: 5, type: 'image', src: galleryImg5 },
  { id: 6, type: 'video', src: galleryVideo1 },
  { id: 7, type: 'video', src: galleryVideo2 },
];

const Gallery = ({ onClose, onItemSelect }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const videoRef = useRef(null);

  const openViewer = (item) => {
    setSelectedItem(item);
    onItemSelect(item.id); // Pass the item ID to IPhoneFrame when selected
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.play();
    }
  };

  const closeViewer = () => {
    if (selectedItem?.type === 'video' && videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedItem(null);
    onItemSelect(null); // Reset currentGalleryItemId when closed
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="gallery-app">
      <header className="gallery-header">
        <button onClick={onClose} className="back-button">&#x21A9;</button>
        <h2>Gallery</h2>
      </header>

      {selectedItem ? (
        <div className="gallery-viewer" onClick={closeViewer}>
          {selectedItem.type === 'image' ? (
            <img src={selectedItem.src} alt="Gallery" className="full-media" />
          ) : (
            <video
              ref={videoRef}
              src={selectedItem.src}
              className="full-media"
              onClick={(e) => {
                e.stopPropagation();
                handleVideoClick();
              }}
              loop
              playsInline
              muted={false}
            />
          )}
        </div>
      ) : (
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-item" onClick={() => openViewer(item)}>
              {item.type === 'image' ? (
                <img src={item.src} alt="Gallery" className="gallery-thumbnail" />
              ) : (
                <video className="gallery-thumbnail" loop muted playsInline>
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
