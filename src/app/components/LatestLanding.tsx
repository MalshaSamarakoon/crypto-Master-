// LatestLanding.tsx
import React, { useState, useRef } from "react";
import AccentTeal from "./AccentTeal";
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

  const containerRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setStartX(e.pageX - containerRef.current.offsetLeft);
  };

  const handleMouseMove = (e) => {
    if (!startX) return;

    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the multiplier for the desired scrolling speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setStartX(0);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    handleMouseUp();
  };

  return (
    <section className="relative ">
      <div className=" layout bg-neutral-700 items-center rounded-2xl">
        <div className="h-full w-full layout lg:px-20 pt-10">
          <h2 className="text-4xl md:text-6xl sm:mx-10 lg:mx-0 mb-10">
            <AccentTeal className="inline decoration-clone leading-snug dark:leading-none ">
              Latest Updates
            </AccentTeal>
          </h2>
        </div>
        <div className="layout flex flex-col lg:p-10 sm:p-0">
          <div
            ref={containerRef}
            className="h-full w-full overflow-x-auto custom-scrollbar"
            style={{ display: "flex" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={(e) => handleMouseDown(e.touches[0])}
            onTouchMove={(e) => handleMouseMove(e.touches[0])}
            onTouchEnd={handleMouseUp}
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
