import React, { useState, useRef } from "react";
import {
  Home,
  Car,
  Truck,
  Shield,
  Clock3,
  Zap,
  BadgeCheck,
  BatteryCharging,
  Users,
  Headphones,
  CalendarCheck
} from "lucide-react";

import {
    faSolarPanel,
    faSun,
    faPlug

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../style/BatteryProducts.scss";
import homeInverter from "../assets/homeInverter.png";
import solarInverter from "../assets/solarInverter.png";
import hybridInverter from "../assets/hybridInverter.png";
import { inverterProducts } from "../data/inverterData";
import SolarInverterPopup from "./SolarInverterPopup";
import HomeInverterPopup from "./HomeInverterPopup";
import HybridInverterPopup from "./HybridInverterPopup";
import inverterBG from "../assets/inverter_product_background.png";


const InverterProducts = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [homeInverterShowPopup, setHomeInverterShowPopup] = useState(false);
  const [hybridInverterShowPopup, setHybridInverterShowPopup] = useState(false);
  const homeInverterRef = useRef(null);

const scrollToHomeInverter = () => {
    const element = homeInverterRef.current;
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY - 100;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1500; // Slower scroll (1.5 seconds)
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      window.scrollTo(0, startPosition + distance * easeOutCubic);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };




  return (
    <div className="battery-page">

      {/* HERO SECTION */}

      {/* 1. HERO SECTION */}
      <section className="battery-hero">
          <img className="img_hero" src={inverterBG} alt="Inverter Background" />

          <div className="container">
          <div className="hero-left hero-text-box">
            <h1>Our Inverter Range</h1>
            <p>
               High-performance, energy-efficient, and reliable inverters designed to
               deliver uninterrupted power for homes, businesses, and solar applications.
            </p>
           
          </div>
            <a href="#" className="btn-hero" onClick={scrollToHomeInverter}>
              Explore Our Inverters
              <span className="arrow">→</span>
            </a>
        </div>
        
      </section>



      {/* HOME INVERTER */}
      <section className="product-section" ref={homeInverterRef}>
        <div className="product-image">
          <img
            src={homeInverter}
            alt=""
          />
        </div>

        <div className="product-content">
          <div className="title-row">
            <div className="section-icon">
              <FontAwesomeIcon icon={faPlug} size="lg" />

            </div>

            <h2>{inverterProducts[0].title}</h2>
          </div>
          <p className="description">
            {inverterProducts[0].description}
          </p>

          {/* <div className="feature-grid">

            <div>
              <Clock3 />
              <span>Longer Backup</span>
            </div>

            <div>
              <BatteryCharging />
              <span>Low Maintenance</span>
            </div>

            <div>
              <Zap />
              <span>Fast Charging</span>
            </div>

            <div>
              <Shield />
              <span>High Reliability</span>
            </div>

          </div> */}

          <button className="secondary-btn" onClick={() => setHomeInverterShowPopup(true)}>
            Read More →
          </button>
        </div>
      </section>

      {/* AUTOMOTIVE */}
      <section className="product-section reverse">

        <div className="product-content">

          {/* <div className="section-icon">
            <Car size={42} />
          </div>

          <h2>Automotive Batteries</h2> */}

          <div className="title-row">
            <div className="section-icon">
              <FontAwesomeIcon icon={faSun} size="lg" />
            </div>

            <h2>{inverterProducts[1].title}</h2>
          </div>

          <p className="description">
            {inverterProducts[1].description}
          </p>

          {/* <div className="feature-grid">

            <div>
              <Zap />
              <span>High Cranking Power</span>
            </div>

            <div>
              <Shield />
              <span>Vibration Resistant</span>
            </div>

            <div>
              <BadgeCheck />
              <span>Maintenance Free</span>
            </div>

            <div>
              <Clock3 />
              <span>Long Service Life</span>
            </div>

          </div> */}

          <button className="secondary-btn"
            onClick={() => setShowPopup(true)}>
            Read More →
          </button>
        </div>

        {showPopup && (
          <SolarInverterPopup
            onClose={() => setShowPopup(false)}
          />
        )}

        {homeInverterShowPopup && (
          <HomeInverterPopup
            onClose={() => setHomeInverterShowPopup(false)}
          />
        )}

        {hybridInverterShowPopup && (
          <HybridInverterPopup
            onClose={() => setHybridInverterShowPopup(false)}
          />
        )}

        <div className="product-image">
          <img
            src={solarInverter}
            alt=""
          />
        </div>
      </section>

     
      <section className="product-section">

        <div className="product-image">
          <img
            src={hybridInverter}
            alt=""
          />
        </div>

        <div className="product-content">

          <div className="title-row">
            <div className="section-icon">
              <FontAwesomeIcon icon={faSolarPanel} size="lg" />
            </div>

            <h2>{inverterProducts[2].title}</h2>
          </div>

          <p className="description">
            {inverterProducts[2].description}
          </p>

          {/* <div className="feature-grid">

            <div>
              <BadgeCheck />
              <span>More Mileage</span>
            </div>

            <div>
              <Zap />
              <span>Fast Charging</span>
            </div>

            <div>
              <BatteryCharging />
              <span>Deep Cycle Life</span>
            </div>

            <div>
              <Shield />
              <span>Rugged Design</span>
            </div>

          </div> */}

          <button className="secondary-btn" onClick={() => setHybridInverterShowPopup(true)}>
            Read More →
          </button>

        </div>
      </section>

    </div>
  );
};

export default InverterProducts;