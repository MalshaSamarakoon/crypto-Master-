import React, { useState, useEffect } from 'react';

const SlideShow = () => {
  const images = [
    '/images/service1.png',
    '/images/service2.png',
    '/images/service3.png',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image in the array
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change slide every 2 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run the effect only once

  const currentImage = images[currentImageIndex];

  return (
    <div className="slideshow-container">
      <img
        className="slide"
        src={currentImage}
        alt={`Slide ${currentImageIndex + 1}`}
        style={{ width: '100%', height: '600px', objectFit: 'cover' }}
      />
    </div>
  );
};

export default SlideShow;