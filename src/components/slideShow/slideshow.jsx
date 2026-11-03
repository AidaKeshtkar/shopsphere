import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideshow.css";

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-item">
          <img src="/profile.webp" alt="Slide 1" />
        </div>
        <div className="slide-item">
          <img src="/profile.webp" alt="Slide 2" />
        </div>
        <div className="slide-item">
          <img src="/profile.webp" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
