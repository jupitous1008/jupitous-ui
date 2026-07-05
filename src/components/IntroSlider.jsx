import React, { useState, useEffect, useRef } from "react";
import "../style/IntroSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

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
      alignment: "left",
      title: (
        <>
          <span className="title-white">POWERING</span>
          <span className="title-blue"> EVERY HOME</span>
          <br />
          <div className="title-center">
            <span className="title-white">WITH SMART&nbsp;</span>
            <span className="title-green">ENERGY</span>
          </div>
        </>
      ),
      description: (
        <span className="title-blue_description">Smart energy solutions with advanced battery technology.</span>
      ),
      image: img4,

    },
    {
      id: 2,
      alignment: "right",
      title: (
        <span className="single-line"><span className="title-white">LONG BACKUP</span> <span className="title-green">RELIABLE PERFORMANCE</span></span>
      ),
      description:
        "From Homes to Highways, Reliable Power for Every Journey.",
      image: img2,
    },
    {
      id: 3,
      alignment: "right",
      title:(
        <>
        <span className="title-white">INTELLIGENT</span> <span className="title-green">POWER BACKUP</span>
        </>
      ),
      description:
        "Power Through Every Moment with Smart Backup Solutions.",
      image: img3,
    },
    {
      id: 4,
      alignment: "left",
        title: (
        <>
          <span className="title-white">HARNESS THE</span>
          <span className="title-blue"> SUN</span>
          <br />
          <div className="title-center">
            <span className="title-white">POWER YOUR&nbsp;</span>
            <span className="title-green">FUTURE</span>
          </div>
        </>
      ),
      description:(
        <span className="title-blue_description">Clean Solar Energy for Homes, Businesses & a Sustainable Tomorrow.</span>
      ),

      image: img1,
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
              <div className={`overlay ${slide.alignment === "right" ? "overlay-right" : "overlay-left"}`}>
                <div className={`content ${slide.alignment === "right" ? "content-right" : "content-left"}`}>
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>

                  {/* <button
                    onMouseEnter={() => sliderRef.current?.slickPause()}
                    onMouseLeave={() => sliderRef.current?.slickPlay()}>
                    Explore More
                  </button> */}
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