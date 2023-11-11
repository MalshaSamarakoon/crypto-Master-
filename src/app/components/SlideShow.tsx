import React, { useState, useEffect } from 'react';

const SlideShow = () => {
  const images = [
    '/images/service1.svg',
    '/images/service2.svg',
    '/images/service3.svg',
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
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />
    </div>
  );
};

export default SlideShow;