// src/components/FloatingFreeModeIcon.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './FloatingFreeModeIcon.css';
import floatLogo from '../assets/floatLogo.png';

const FloatingFreeModeIcon = ({ activeApp, currentVideoId, currentGalleryItemId, currentInstagramPostId }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [outputMessage, setOutputMessage] = useState('');
    const [showFullMessage, setShowFullMessage] = useState(false); // Sidebar state
    const iconRef = useRef(null);
    const draggingRef = useRef(false);
    const [position, setPosition] = useState({ x: 100, y: 100 });

    const toggleMenu = () => setMenuVisible(!menuVisible);

    const appDetectedMessage = activeApp === 'youtube'
        ? 'App Detected: YouTube'
        : activeApp === 'gallery'
        ? 'App Detected: Gallery'
        : activeApp === 'instagram'
        ? 'App Detected: Instagram'
        : 'No App Detected';

    const handleOptionClick = (option) => {
        if (activeApp === 'youtube' && currentVideoId) {
            const youtubeMessages = {
                yt_short_1: {
                    'Context Insights': 'The brachistochrone curve is the path that a frictionless object will take to slide from one point to another in the shortest amount of time under the influence of gravity.',
                    'Misinformation Prevention': 'The information and visual look correct.',
                    'Recommendation': 'Book - Cousins of the Brachistochrone: The 100 Yard Dash in Mathematics.',
                    'AI Content Detection': 'Video is Original.'
                },
                yt_short_2: {
                    'Context Insights': 'SpaceX catches giant Starship booster on historic Flight 5 rocket launch and landing.',
                    'Misinformation Prevention': 'The information and visual look correct.',
                    'Recommendation': 'https://www.spacex.com/',
                    'AI Content Detection': 'Video is Original.'
                },
                yt_short_3: {
                    'Context Insights': 'Cesium is considered a highly reactive metal, meaning it readily reacts with other substances, particularly air and water, often causing explosive reactions due to its extreme tendency to lose electrons; it is considered the most reactive metal on the periodic table.',
                    'Misinformation Prevention': 'The information and visual look correct.',
                    'Recommendation': 'https://chemistrytalk.org/cesium-element/',
                    'AI Content Detection': 'Video is Original.'
                },
                yt_short_4: {
                    'Context Insights': 'The Martian Movie youtube edit. Walkthrough of best moments in the movie, The Martian.',
                    'Misinformation Prevention': 'The information and visuals look correct from the movie "The Martian".',
                    'Recommendation': 'Watch "The Martian" on Amazon Prime',
                    'AI Content Detection': 'Video is edited but no AI in use.'
                },
                yt_short_5: {
                    'Context Insights': 'AI video Generator - "Model Sora", by OpenAI. Shows multiple Sora Model generation video samples.',
                    'Misinformation Prevention': 'The information and visuals are verified from OpenAI and are accurate.',
                    'Recommendation': 'https://openai.com/index/sora/',
                    'AI Content Detection': 'Video is edited, not original, and AI is used.'
                }
            };
            setOutputMessage(youtubeMessages[currentVideoId]?.[option] || 'No information available');
        } else if (activeApp === 'gallery' && currentGalleryItemId) {
            const galleryMessages = {
                1: {
                    'Context Insights': 'This is a cheesecake, commonly served as dessert.',
                    'Misinformation Prevention': 'It is a cheesecake on a blue dish, accurate description.',
                    'Recommendation': 'Cheesecake recipe - https://sallysbakingaddiction.com/classic-cheesecake/',
                    'AI Content Detection': 'Image is not AI-generated.'
                },
                2: {
                    'Context Insights': 'This is a British Shorthair cat, known for its dense fur and distinct round face.',
                    'Misinformation Prevention': 'A cat image with grey fur and orange eyes, accurate description.',
                    'Recommendation': 'https://en.wikipedia.org/wiki/British_Shorthair',
                    'AI Content Detection': 'Image is not AI-generated.'
                },
                3: {
                    'Context Insights': 'This is an AI-generated image of a small child with a natural background.',
                    'Misinformation Prevention': 'A small girl smiling while someone is taking her photo, accurate description.',
                    'Recommendation': 'https://openai.com/index/dall-e-2/',
                    'AI Content Detection': 'Image is AI-generated, likely from DALL-E.'
                },
                4: {
                    'Context Insights': 'This image features an AI-generated car model resembling a toy.',
                    'Misinformation Prevention': 'A toy car with headlights on, accurate description.',
                    'Recommendation': 'https://openai.com/index/dall-e-2/',
                    'AI Content Detection': 'Image is AI-generated, likely from DALL-E.'
                },
                5: {
                    'Context Insights': 'This is a screenshot of a mobile interface showcasing various apps.',
                    'Misinformation Prevention': 'A screenshot of this phone, accurate description.',
                    'Recommendation': 'N/A',
                    'AI Content Detection': 'Image is not AI-generated.'
                },
                6: {
                    'Context Insights': 'This video is a tutorial on using various modes in the iPhone camera app.',
                    'Misinformation Prevention': 'Information given in video is accurate.',
                    'Recommendation': 'Visit Apple\'s website for more camera tutorials.',
                    'AI Content Detection': 'Video is not AI-generated.'
                },
                7: {
                    'Context Insights': 'This video showcases a peaceful beach lake, likely located in the United States.',
                    'Misinformation Prevention': 'The information is accurate and visually correct.',
                    'Recommendation': 'Explore other scenic beach videos for relaxation.',
                    'AI Content Detection': 'Video is not AI-generated.'
                }
            };
            setOutputMessage(galleryMessages[currentGalleryItemId]?.[option] || 'No information available');
        } else if (activeApp === 'instagram' && currentInstagramPostId) {
            const instagramMessages = {
                1: {
                    'Context Insights': 'A humorous meme showing animated characters with simple designs who evoke strong emotions in viewers.',
                    'Misinformation Prevention': 'The image accurately represents the meme format and character design.',
                    'Recommendation': 'Explore similar animated character studies in Pixar’s ‘Up’ and ‘The Incredibles.’',
                    'AI Content Detection': 'This image is not AI-generated.'
                },
                2: {
                    'Context Insights': 'A relatable childhood meme about pretending to sleep to be carried inside.',
                    'Misinformation Prevention': 'The content accurately reflects a common experience.',
                    'Recommendation': 'Check out nostalgic childhood memes on platforms like Reddit.',
                    'AI Content Detection': 'This image appears to be original, not AI-generated.'
                },
                3: {
                    'Context Insights': 'A popular trade meme format featuring a cat ‘offering’ belly rubs in exchange for scratches.',
                    'Misinformation Prevention': 'The meme follows the original format accurately.',
                    'Recommendation': 'Explore animal-themed memes on Instagram meme pages.',
                    'AI Content Detection': 'Image appears to be original.'
                },
                4: {
                    'Context Insights': 'A humorous image captioned ‘Branch manager and assistant,’ showing two dogs holding a large branch.',
                    'Misinformation Prevention': 'The caption and image content are accurate.',
                    'Recommendation': 'Explore similar pet humor on popular social media pet pages.',
                    'AI Content Detection': 'Original image, not AI-generated.'
                },
                5: {
                    'Context Insights': 'Poster for the movie ‘Interstellar’ featuring Matthew McConaughey.',
                    'Misinformation Prevention': 'This is an accurate movie poster.',
                    'Recommendation': 'Watch ‘Interstellar’ directed by Christopher Nolan.',
                    'AI Content Detection': 'Original poster, not AI-generated.'
                },
                6: {
                    'Context Insights': 'Astronaut Sunita Williams inside the International Space Station.',
                    'Misinformation Prevention': 'This image is a real NASA photograph.',
                    'Recommendation': 'Learn more about NASA astronauts on their official site.',
                    'AI Content Detection': 'Authentic image, not AI-generated.'
                },
                7: {
                    'Context Insights': 'An ancient mosaic of Alexander the Great in battle.',
                    'Misinformation Prevention': 'This is an authentic historical artifact.',
                    'Recommendation': 'Read more on ancient Greek history and mosaics.',
                    'AI Content Detection': 'Original artwork, not AI-generated.'
                },
                8: {
                    'Context Insights': 'A simple Java code snippet printing ‘Clarify AI’.',
                    'Misinformation Prevention': 'Code accurately represents basic Java syntax.',
                    'Recommendation': 'Learn Java basics through online tutorials like Codecademy.',
                    'AI Content Detection': 'Original code snippet.'
                },
                9: {
                    'Context Insights': 'Image of the James Webb Space Telescope in NASA’s lab.',
                    'Misinformation Prevention': 'This image accurately depicts the telescope in construction.',
                    'Recommendation': 'Visit NASA’s website for updates on the James Webb Telescope.',
                    'AI Content Detection': 'Original NASA image, not AI-generated.'
                },
                10: {
                    'Context Insights': 'An image of a historical sheet of music by Mozart.',
                    'Misinformation Prevention': 'This is an original musical score.',
                    'Recommendation': 'Explore classical music collections online.',
                    'AI Content Detection': 'Original historical document, not AI-generated.'
                }
            };
            setOutputMessage(instagramMessages[currentInstagramPostId]?.[option] || 'No information available');
        }
    };

    const handleMouseMove = useCallback((event) => {
        if (draggingRef.current) {
            const frameBounds = document.querySelector('.iphone-frame').getBoundingClientRect();
            const iconBounds = iconRef.current.getBoundingClientRect();
            
            const newX = Math.max(frameBounds.left, Math.min(event.clientX - iconBounds.width / 2, frameBounds.right - iconBounds.width));
            const newY = Math.max(frameBounds.top, Math.min(event.clientY - iconBounds.height / 2, frameBounds.bottom - iconBounds.height));

            setPosition({ x: newX - frameBounds.left, y: newY - frameBounds.top });
        }
    }, []);

    const startDragging = () => {
        draggingRef.current = true;
        document.addEventListener('mousemove', handleMouseMove);
    };

    const stopDragging = () => {
        draggingRef.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
    };

    useEffect(() => {
        document.addEventListener('mouseup', stopDragging);
        return () => document.removeEventListener('mouseup', stopDragging);
    }, []);

    const truncatedMessage = outputMessage.length > 60 ? `${outputMessage.substring(0, 60)}...` : outputMessage;

    return (
        <div
            className="floating-icon-container"
            style={{ top: `${position.y}px`, left: `${position.x}px` }}
            onDoubleClick={toggleMenu}
            onMouseDown={startDragging}
            ref={iconRef}
        >
            <img src={floatLogo} alt="Free Mode Icon" className="floating-icon" />
            {menuVisible && (
                <div className="floating-menu">
                    <p>{appDetectedMessage}</p>
                    <p className="truncated-message" onClick={() => setShowFullMessage(true)}>
                        {truncatedMessage}
                    </p>
                    <button onClick={() => handleOptionClick('Context Insights')}>Context Insights</button>
                    <button onClick={() => handleOptionClick('Misinformation Prevention')}>Misinformation Prevention</button>
                    <button onClick={() => handleOptionClick('Recommendation')}>Recommendation</button>
                    <button onClick={() => handleOptionClick('AI Content Detection')}>AI Content Detection</button>
                </div>
            )}

            {/* Sidebar on the left side of the screen for full message */}
            {showFullMessage && (
                <div className="sidebar-overlay" onClick={() => setShowFullMessage(false)}>
                    <div className="sidebar-text">
                        <p>{outputMessage}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloatingFreeModeIcon;
