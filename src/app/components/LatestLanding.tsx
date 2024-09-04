import React, { useState, useRef, useEffect } from "react";
import "./FeedbacksLanding.css";

export default function LatestLanding() {
  const images = [
    "/images/update-3.jpg",
    "/images/update-2.jpg",
    "/images/update-1.jpg",
    "/images/update-3.jpg",
    "/images/update-2.jpg",
    "/images/update-1.jpg",
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isUserInteracting && containerRef.current) {
        if (
          containerRef.current.scrollLeft + containerRef.current.offsetWidth >=
          containerRef.current.scrollWidth
        ) {
          containerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          containerRef.current.scrollBy({
            left: 300, // Adjust the scroll amount to your preference
            behavior: "smooth",
          });
        }
      }
    }, 3000); // Adjust the interval duration to your preference

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      setIsUserInteracting(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!startX || !containerRef.current) return;

    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the multiplier for the desired scrolling speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsUserInteracting(false);
    if (containerRef.current) {
      setStartX(0);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    handleMouseUp();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      setIsUserInteracting(true);
      handleMouseDown(e.touches[0] as unknown as React.MouseEvent<HTMLDivElement>);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMouseMove(e.touches[0] as unknown as React.MouseEvent<HTMLDivElement>);
    }
  };

  const handleTouchEnd = () => {
    setIsUserInteracting(false);
    handleMouseUp();
  };

  return (
    <section className="relative">
      <div className="layout items-center">
        <div className="h-full w-full layout lg:px-0 pt-0">
          <h2 style={{ color: "#01162d" }} className="text-2xl md:text-3xl sm:mx-0 lg:mx-0 mb-10">
            Latest Updates
          </h2>
        </div>
        <div className="layout flex flex-col lg:p-0 sm:p-0">
          <div
            ref={containerRef}
            className="h-full w-full overflow-x-auto custom-scrollbar"
            style={{ display: "flex" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  minWidth: "300px",
                  marginRight: "30px",
                }}
              >
                <img
                  src={image}
                  alt={`Update ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
