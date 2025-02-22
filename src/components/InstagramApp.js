// src/components/InstagramApp.js
import React, { useState } from 'react';
import './InstagramApp.css';
import profilePic from '../assets/profilePic.png';
import instaPost1 from '../assets/insta_post_1.jpg';
import instaPost2 from '../assets/insta_post_2.jpg';
import instaPost3 from '../assets/insta_post_3.jpg';
import instaPost4 from '../assets/insta_post_4.jpg';
import instaPost5 from '../assets/insta_post_5.jpg';
import instaPost6 from '../assets/insta_post_6.jpg';
import instaPost7 from '../assets/insta_post_7.jpg';
import instaPost8 from '../assets/insta_post_8.jpg';
import instaPost9 from '../assets/insta_post_9.jpg';
import instaPost10 from '../assets/insta_post_10.jpg';

const posts = [
  instaPost1, instaPost2, instaPost3, instaPost4, instaPost5,
  instaPost6, instaPost7, instaPost8, instaPost9, instaPost10,
];

const InstagramApp = ({ onClose, onPostOpen }) => {
  const [selectedPostIndex, setSelectedPostIndex] = useState(null); // Track index of the selected post

  const openPost = (index) => {
    setSelectedPostIndex(index); // Set the index of the selected post
    if (onPostOpen) {
      onPostOpen(index + 1); // Pass post ID (1-based index)
    }
  };

  const closePost = () => {
    setSelectedPostIndex(null);
    if (onPostOpen) {
      onPostOpen(null); // Reset when closing post
    }
  };

  return (
    <div className="instagram-app">
      <header className="insta-header">
        <button onClick={onClose} className="back-button">&#x21A9;</button>
        <h2>Profile</h2>
        <button className="refresh-button">&#x21bb;</button>
      </header>

      {selectedPostIndex !== null ? ( // Opened image in a modal
        <div className="post-viewer" onClick={closePost}>
          <img src={posts[selectedPostIndex]} alt={`Post ${selectedPostIndex + 1}`} className="full-post" />
        </div>
      ) : (
        <div className="profile-section">
          <div className="profile-info">
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <div className="stats">
              <p><strong>10</strong> posts</p>
              <p><strong>1003</strong> followers</p>
              <p><strong>37</strong> following</p>
            </div>
          </div>
          <button className="edit-profile">Edit Profile</button>

          <div className="post-grid">
            {posts.map((post, index) => (
              <img
                key={index}
                src={post}
                alt={`Post ${index + 1}`}
                className="post-thumbnail"
                onClick={() => openPost(index)}
              />
            ))}
          </div>

          <nav className="bottom-nav">
            <button className="nav-icon home-icon"></button>
            <button className="nav-icon search-icon"></button>
            <button className="nav-icon add-icon"></button>
            <button className="nav-icon heart-icon"></button>
            <button className="nav-icon profile-icon"></button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default InstagramApp;
