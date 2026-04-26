import React, { useState, useEffect } from "react";
import "../style/IntroSlider.scss";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const slides = [
  {
    title: "Powering Your Home",
    subtitle: "Reliable Energy Solutions",
    image: img1,
  },
  {
    title: "Reliable Power Backup",
    subtitle: "High performance inverters",
    image: img2,
  },
  {
    title: "Smart Appliances",
    subtitle: "Future-ready homes",
    image: img3,
  },
];

export default function IntroSlider() {
  const [index, setIndex] = useState(0);

  // ✅ Auto Slide (optional but added)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getClass = (i) => {
    if (i === index) return "card active";

    if (i === (index - 1 + slides.length) % slides.length)
      return "card prev";

    if (i === (index + 1) % slides.length)
      return "card next";

    return "card hidden";
  };

  return (
    <div className="slider">
      {/* <button className="nav left" onClick={() =>
        setIndex((prev) => (prev - 1 + slides.length) % slides.length)
      }>
        ‹
      </button> */}

      <div className="slider-track">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={getClass(i)}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>

              <div className="buttons">
                <button className="blue">Explore Products</button>
                <button className="green">Get Quote</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <button className="nav right" onClick={() =>
        setIndex((prev) => (prev + 1) % slides.length)
      }>
        ›
      </button> */}
    </div>
  );
}