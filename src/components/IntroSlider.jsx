import React, { useState, useEffect, useRef } from "react";
import "../style/IntroSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

import Slider from "react-slick";



const IntroSlider = () => {

  const sliderRef = useRef(null);

 const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover: false,
  fade: true,
};

  const slides = [
    {
      id: 1,
      title: "Welcome to Jupitous",
      description:
        "Smart energy solutions with advanced battery technology.",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    },
    {
      id: 2,
      title: "High Performance Batteries",
      description:
        "Reliable, durable and efficient batteries for every need.",
      image:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
    },
    {
      id: 3,
      title: "Power Your Future",
      description:
        "Innovative solar and battery systems for sustainable growth.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
    },
  ];

  return (
    <div className="intro-slider-container">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="overlay">
                <div className="content">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>

                  <button
                    onMouseEnter={() => sliderRef.current?.slickPause()}
                    onMouseLeave={() => sliderRef.current?.slickPlay()}>
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default IntroSlider;