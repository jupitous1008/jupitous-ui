// Products.jsx

import React from "react";
import Slider from "react-slick";

import "../style/products.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bgImage from "../assets/battery_bg.png";
import centerBattery from "../assets/center_battery.png";
import leftBattery from "../assets/left_battery.png";
import rightBattery from "../assets/right_battery.png";
import inverterBg from "../assets/inverter_bg.png";
import inverterImage from "../assets/inverters_image.png";
import solarBg from "../assets/solar_bg.png";
import solarImage from "../assets/solar_img.png";

import {
  BatteryCharging,
  Cpu,
  ArrowRight,
  CircleArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* NEXT ARROW */
function NextArrow(props) {
  const { onClick } = props;

  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <ChevronRight size={26} />
    </div>
  );
}

/* PREV ARROW */
function PrevArrow(props) {
  const { onClick } = props;

  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <ChevronLeft size={26} />
    </div>
  );
}

function Products() {

  /* SLIDER SETTINGS */
  const settings = {

    dots: false,

    infinite: true,

    speed: 700,

    slidesToShow: 2,

    slidesToScroll: 1,

    autoplay: true,

    autoplaySpeed: 2500,

    arrows: true,

    centerMode: false,

    variableWidth: false,

    adaptiveHeight: false,

    nextArrow: <NextArrow />,

    prevArrow: <PrevArrow />,

    responsive: [

      {
        breakpoint: 992,

        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,

        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (

    <section className="products-section">

      {/* BACKGROUND */}
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>

      {/* HEADING */}
      <div className="products-heading">

        <span className="products-tag">
          OUR PRODUCTS
        </span>

        <h1>
          Reliable Power Solutions
          <br />
          For Every Need
        </h1>

        <p>
          Explore our premium range of batteries,
          inverters and solar products designed
          for durability and long-lasting backup.
        </p>

      </div>

      {/* SLIDER */}
      <div className="products-slider-wrapper">

        <Slider {...settings}>

          {/* BATTERY CARD */}
          <div>

            <div
              className="product-card battery-card"
              style={{
                backgroundImage: `url(${bgImage})`,
              }}
            >

              <div className="product-top">

                <div className="icon-circle">
                  <BatteryCharging size={34} />
                </div>

                <div>
                  <h2>Batteries</h2>
                  <div className="title-line"></div>
                </div>

              </div>

              <ul>

                <li>
                  <CircleArrowRight size={28} />
                  Home Inverter Batteries
                </li>

                <li>
                  <CircleArrowRight size={28} />
                  Automotive Batteries
                </li>

                <li>
                  <CircleArrowRight size={28} />
                  E-Rickshaw Batteries
                </li>

              </ul>

              {/* BATTERY SHOWCASE */}
              <div className="battery-showcase">

                <div className="battery-item left-item">
                  <img
                    src={leftBattery}
                    alt="Left Battery"
                    className="battery-img left_battery"
                  />
                </div>

                <div className="battery-item center-item">
                  <img
                    src={centerBattery}
                    alt="Center Battery"
                    className="battery-img center-battery"
                  />
                </div>

                <div className="battery-item right-item">
                  <img
                    src={rightBattery}
                    alt="Right Battery"
                    className="battery-img right-battery"
                  />
                </div>

              </div>

              <button className="view-btn">
                VIEW MORE
                <div className="title-line"></div>
              </button>



            </div>

          </div>

          {/* INVERTER CARD */}
          <div>
            <div
              className="product-card inverter-card"
              style={{
                backgroundImage: `url(${inverterBg})`,
              }}
            >

              {/* <div className="product-card inverter-card"> */}

              <div className="product-top">

                <div className="icon-circle">
                  <Cpu size={34} />
                </div>

                <div>
                  <h2 className="inverter-heading">Inverters</h2>
                  <div className="title-line"></div>
                </div>

              </div>

              <ul>

                <li className="inverter">
                  <CircleArrowRight size={28} />
                  Home UPS / Inverters
                </li>

                <li className="inverter">
                  <CircleArrowRight size={28} />
                  Solar Inverters
                </li>

                <li className="inverter">
                  <CircleArrowRight color="#182a5b"
                    size={28}
                  />
                  Hybrid Inverters
                </li>

              </ul>

              {/* Inverter SHOWCASE */}

              <div className="inverter-item">
                <img
                  src={inverterImage}
                  alt="Inverter"
                  className="inverter-img"
                />


              </div>



              <button className="view-btn">
                VIEW MORE
              </button>

            </div>

          </div>

          {/* SOLAR CARD */}
        
          <div>
            <div
              className="product-card solar-card"
              style={{
                backgroundImage: `url(${solarBg})`,
              }}
            >

              <div className="product-top">

                <div className="icon-circle">
                  <Cpu size={34} />
                </div>

                <div>
                  <h2>Solar Panels</h2>
                  <div className="title-line"></div>
                </div>

              </div>

              <ul>

                <li>
                  <ArrowRight size={18} />
                  Mono PERC Panels
                </li>

                <li>
                  <ArrowRight size={18} />
                  Polycrystalline Panels
                </li>

                <li>
                  <ArrowRight size={18} />
                  Rooftop Solar Systems
                </li>

              </ul>

              <button className="view-btn">
                VIEW MORE
              </button>

            </div>

          </div>

        </Slider>

      </div>

    </section>
  );
}

export default Products;