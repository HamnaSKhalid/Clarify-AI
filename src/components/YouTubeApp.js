// src/components/YouTubeApp.js
import React, { useEffect, useRef, useState } from 'react';
import './YouTubeApp.css';
import ytShort1 from '../assets/yt_short_1.mp4';
import ytShort2 from '../assets/yt_short_2.mp4';
import ytShort3 from '../assets/yt_short_3.mp4';
import ytShort4 from '../assets/yt_short_4.mp4';
import ytShort5 from '../assets/yt_short_5.mp4';
import likeIcon from '../assets/likeIcon.png';
import dislikeIcon from '../assets/dislikeIcon.png';
import commentIcon from '../assets/commentIcon.png';
import shareIcon from '../assets/shareIcon.png';

const shortsData = [
  { video: ytShort1, channelName: "Channel_1", id: "yt_short_1", likes: "3.2K", comments: "26" },
  { video: ytShort2, channelName: "Channel_2", id: "yt_short_2", likes: "5.8K", comments: "41" },
  { video: ytShort3, channelName: "Channel_3", id: "yt_short_3", likes: "2.1K", comments: "15" },
  { video: ytShort4, channelName: "Channel_4", id: "yt_short_4", likes: "8.4K", comments: "50" },
  { video: ytShort5, channelName: "Channel_5", id: "yt_short_5", likes: "7.6K", comments: "33" }
];

const YouTubeApp = ({ onVideoChange }) => {
  const videoRefs = useRef([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const videoElement = entry.target;
          if (entry.isIntersecting) {
            videoElement.play();
            setCurrentVideo(videoElement);

            // Update the current video ID based on the intersecting video
            const currentVideoIndex = videoRefs.current.indexOf(videoElement);
            const currentVideoId = shortsData[currentVideoIndex].id;
            onVideoChange(currentVideoId);
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach(video => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, [onVideoChange]);

  const togglePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
      setCurrentVideo(video);
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    if (currentVideo) {
      currentVideo.muted = !currentVideo.muted;
      setIsMuted(currentVideo.muted);
    }
  };

  return (
    <div className="youtube-app">
      <h1>YouTube Shorts</h1>
      <div className="shorts-container">
        {shortsData.map((short, index) => (
          <div className="short-video" key={index} onClick={() => togglePlayPause(index)}>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={short.video}
              loop
              className="video-player"
              playsInline
              muted={isMuted} // Controls mute/unmute
            />

            <div className="video-details">
              <div className="channel-info">
                <p className="channel-name">{short.channelName}</p>
              </div>
              <p className="video-description">Sample description for {short.channelName}</p>
              <div className="video-actions">
                <div className="action">
                  <img src={likeIcon} alt="Like" />
                  <span>{short.likes}</span>
                </div>
                <div className="action">
                  <img src={dislikeIcon} alt="Dislike" />
                  <span>Dislike</span>
                </div>
                <div className="action">
                  <img src={commentIcon} alt="Comment" />
                  <span>{short.comments}</span>
                </div>
                <div className="action">
                  <img src={shareIcon} alt="Share" />
                  <span>Share</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button className="mute-button" onClick={toggleMute}>
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>
    </div>
  );
};

export default YouTubeApp;
