import React, { useState } from 'react';
import './Recommendations.css';

const Recommendations = () => {
  const [showRecommendations, setShowRecommendations] = useState(false);

  const recommendations = {
    Movies: [
      { title: "Inception", availableOn: "Netflix" },
      { title: "Interstellar", availableOn: "Amazon Prime" },
      { title: "The Matrix", availableOn: "HBO Max" }
    ],
    Books: [
      { title: "1984 by George Orwell", availableOn: "Kindle" },
      { title: "Sapiens by Yuval Noah Harari", availableOn: "Google Books" },
      { title: "The Great Gatsby by F. Scott Fitzgerald", availableOn: "Apple Books" }
    ],
    Music: [
      { title: "Bohemian Rhapsody by Queen", availableOn: "Spotify" },
      { title: "Imagine by John Lennon", availableOn: "Apple Music" },
      { title: "Hotel California by Eagles", availableOn: "Amazon Music" }
    ],
    Podcasts: [
      { title: "The Daily by The New York Times", availableOn: "Spotify" },
      { title: "How I Built This by NPR", availableOn: "Apple Podcasts" },
      { title: "Science Vs by Gimlet", availableOn: "Google Podcasts" }
    ],
    Articles: [
      { title: "The Rise of AI", availableOn: "Medium" },
      { title: "Climate Change Impact", availableOn: "The Guardian" },
      { title: "The Future of Work", availableOn: "Forbes" }
    ]
  };

  const getRandomRecommendation = (category) => {
    const items = recommendations[category];
    return items[Math.floor(Math.random() * items.length)];
  };

  const handleGetRecommendations = () => {
    setShowRecommendations(true);
  };

  return (
    <div className="recommendations">
      <h2>Recommendations</h2>
      <p>Get personalized recommendations based on your interests:</p>
      
      {!showRecommendations ? (
        <button onClick={handleGetRecommendations} className="get-recommendation-button">
          Get Recommendations
        </button>
      ) : (
        <div className="recommendation-list">
          {Object.keys(recommendations).map((category, index) => {
            const { title, availableOn } = getRandomRecommendation(category);
            return (
              <div key={index} className="recommendation-item">
                <strong>{category}:</strong> {title}
                <p className="availability">Available on: {availableOn}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
