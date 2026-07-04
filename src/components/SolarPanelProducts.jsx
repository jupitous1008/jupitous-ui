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
  CalendarCheck,
  SolarPanel
} from "lucide-react";

import {
    faSolarPanel,
    faSun,
    faHouseChimney

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../style/BatteryProducts.scss";
import solarBG from "../assets/solarProductBackground.png";
import monoPerc from "../assets/mono_perc.png";
import polycrystalline from "../assets/polycrystalline.png";
import rooftop from "../assets/rooftop.png";
import { solarProducts } from "../data/solarData";
import PolycrystallinePopup from "./PolycrystallinePopup";
import MonoPERCPopup from "./MonoPERCPopup";
import RooftopPopup from "./RooftopPopup";


const SolarPanelProducts = () => {

  const [polycrystallinePopup, setPolycrystallinePopup] = useState(false);
  const [monoPercShowPopup, setMonoPercShowPopup] = useState(false);
  const [rooftopPopup, setRooftopPopup] = useState(false);
  const solarPanelRef = useRef(null);


  const scrollToSolarPanels = () => {
    const element = solarPanelRef.current;
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
                <img className="img_hero" src={solarBG} alt="Solar Panel Background" />
      
                <div className="container">
                <div className="hero-left hero-text-box">
                  <h1>Our Solar Panel Range</h1>
                  <p>
                    Efficient solar panels engineered for maximum power, 
                    long-lasting performance, and sustainable energy.
                  </p>
                 
                </div>
                  <a href="#" className="btn-hero" onClick={scrollToSolarPanels}>
                    Explore Our Solar Panels
                    <span className="arrow">→</span>
                  </a>
              </div>
              
            </section>




      {/* HOME INVERTER */}
      <section className="product-section" ref={solarPanelRef}>
        <div className="product-image">
          <img
            src={monoPerc}
            alt=""
          />
        </div>

        <div className="product-content">
          <div className="title-row">
            <div className="section-icon">
              <FontAwesomeIcon icon={faSolarPanel} size="lg" />
            </div>

            <h2>{solarProducts[0].title}</h2>
          </div>
          <p className="description">
            {solarProducts[0].description}
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

          <button className="secondary-btn" onClick={() => setMonoPercShowPopup(true)}>
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

            <h2>{solarProducts[1].title}</h2>
          </div>

          <p className="description">
            {solarProducts[1].description}
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
            onClick={() => setPolycrystallinePopup(true)}>
            Read More →
          </button>
        </div>

        {polycrystallinePopup && (
          <PolycrystallinePopup
            onClose={() => setPolycrystallinePopup(false)}
          />
        )}

        {monoPercShowPopup && (
          <MonoPERCPopup
            onClose={() => setMonoPercShowPopup(false)}
          />
        )}

        {rooftopPopup && (
          <RooftopPopup
            onClose={() => setRooftopPopup(false)}
          />
        )}

        <div className="product-image">
          <img
            src={polycrystalline}
            alt=""
          />
        </div>
      </section>

      {/* E-RICKSHAW */}
      <section className="product-section">

        <div className="product-image">
          <img
            src={rooftop}
            alt=""
          />
        </div>

        <div className="product-content">

          <div className="title-row">
            <div className="section-icon">
              <FontAwesomeIcon icon={faHouseChimney} size="lg" />
            </div>

            <h2>{solarProducts[2].title}</h2>
          </div>

          <p className="description">
            {solarProducts[2].description}
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

          <button className="secondary-btn" onClick={() => setRooftopPopup(true)}>
            Read More →
          </button>

        </div>
      </section>

    </div>
  );
};

export default SolarPanelProducts;