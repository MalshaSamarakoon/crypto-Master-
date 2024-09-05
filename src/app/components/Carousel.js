import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const Carousel = () => {
  const [images] = React.useState([
    "/images/hero1.png",
    "/images/hero2.png",
  ]);

  const settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        margin: "0",
        maxWidth: "100vw",
        overflow: "hidden", // Prevents overflow causing scrollbars
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`banner${index + 1}`}
              style={{
                width: "100vw", // Ensures full-width of the viewport
                objectFit: "cover", // Ensures image covers container without stretching
              }}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
