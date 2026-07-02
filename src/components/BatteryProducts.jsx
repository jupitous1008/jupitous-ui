import React, { useState } from "react";
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

import { faCarBattery, faCarSide, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../style/BatteryProducts.scss";
//import batteryBG from "../assets/battery_detail_bg.png";
import batteryBG from "../assets/battery_product_background.png";
import inverterBattery from "../assets/battery_image.png";
import automotiveBattery from "../assets/automotive_battery.png";
import eRickshawBattery from "../assets/e_rickshaw_battery.png";
import { batteryProducts } from "../data/batteryData";
import AutomotiveBatteryPopup from "./AutomotiveBatteryPopup";
import HomeInverterBatteryPopup from "./HomeInverterBatteryPopup";
import E_RickshawPopup from "./E_RickshawPopup";
import CenterBattery from "../assets/center_battery.png";
import LeftBattery from "../assets/left_battery.png";
import RightBattery from "../assets/right_battery.png";

const BatteryProducts = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [homeShowPopup, setHomeShowPopup] = useState(false);
  const [eRickshawShowPopup, setERickshawShowPopup] = useState(false);
  return (
    <div className="battery-page">

      {/* HERO SECTION */}

      {/* 1. HERO SECTION */}
      <section className="battery-hero">
        <img className="img_hero" src={batteryBG} alt="Battery Background" />

        <div className="container">
          <div className="hero-left hero-text-box">
            <h1>Our Battery Range</h1>
            <p>
              High performance, long life & reliable batteries designed for every need.
              Choose the right battery that matches your power requirements.
            </p>
          </div>
           <a href="#" className="btn-hero">
              Explore Our Batteries
              <span className="arrow">→</span>
            </a>
        </div>
      </section>

      {/* HOME INVERTER */}
      <section className="product-section">
        <div className="product-image">
          <img
            src={inverterBattery}
            alt=""
          />
        </div>

        <div className="product-content">
          <div className="title-row">
            <div className="section-icon">
              <FontAwesomeIcon icon={faCarBattery} />
            </div>

            <h2>Home Inverter Batteries</h2>
          </div>
          <p className="description">
            {batteryProducts[0].description}
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

          <button className="secondary-btn" onClick={() => setHomeShowPopup(true)}>
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
              <FontAwesomeIcon icon={faCarSide} />
            </div>

            <h2>Automotive Batteries</h2>
          </div>

          <p className="description">
            {batteryProducts[1].description}
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
          <AutomotiveBatteryPopup
            onClose={() => setShowPopup(false)}
          />
        )}

        {homeShowPopup && (
          <HomeInverterBatteryPopup
            onClose={() => setHomeShowPopup(false)}
          />
        )}

        {eRickshawShowPopup && (
          <E_RickshawPopup
            onClose={() => setERickshawShowPopup(false)}
          />
        )}

        <div className="product-image">
          <img
            src={automotiveBattery}
            alt=""
          />
        </div>
      </section>

      {/* E-RICKSHAW */}
      <section className="product-section">

        <div className="product-image">
          <img
            src={eRickshawBattery}
            alt=""
          />
        </div>

        <div className="product-content">

          <div className="title-row">
            <div className="section-icon">
              <FontAwesomeIcon icon={faTaxi} />
            </div>

            <h2>E-Rickshaw Batteries</h2>
          </div>

          <p className="description">
            {batteryProducts[2].description}
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

          <button className="secondary-btn" onClick={() => setERickshawShowPopup(true)}>
            Read More →
          </button>

        </div>
      </section>

      {/* BOTTOM FEATURES */}

      {/* <section className="bottom-features">

        <div className="feature-box">
          <Shield />
          <div>
            <h4>High Performance</h4>
            <p>Reliable & Powerful</p>
          </div>
        </div>

        <div className="feature-box">
          <CalendarCheck />
          <div>
            <h4>Long Lasting</h4>
            <p>Built to Last Longer</p>
          </div>
        </div>

        <div className="feature-box">
          <Users />
          <div>
            <h4>Trusted by Thousands</h4>
            <p>Quality You Can Trust</p>
          </div>
        </div>

        <div className="feature-box">
          <Headphones />
          <div>
            <h4>Expert Support</h4>
            <p>We are here to help</p>
          </div>
        </div>

      </section> */}

    </div>
  );
};

export default BatteryProducts;