// Products.jsx

//import React, { useRef, useEffect } from "react";
//import Slider from "react-slick";

import React from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "../style/Products.scss";

//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";


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
  Sun,
  Zap,
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
  const navigate = useNavigate();
  const circleStyle = { top: "50px" };

  const handleViewMore = (path) => {
    navigate(path);
  };

  //   const sliderRef = useRef(null);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (sliderRef.current) {
  //       sliderRef.current.slickGoTo(
  //         sliderRef.current.innerSlider.state.currentSlide
  //       );
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  /* SLIDER SETTINGS */
  //  const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 700,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2500,
  //   arrows: true,
  //   centerMode: false,
  //   variableWidth: false,
  //   adaptiveHeight: false,

  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,

  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         centerMode: false,
  //         variableWidth: false,
  //       },
  //     },
  //   ],
  // };

  return (

    <section className="products-section">

      {/* BACKGROUND */}
      {/* <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div> */}

      {/* HEADING */}
      <div className="products-heading">
                  <div className="bg-circle bg-circle-1" style={circleStyle}></div>


        <p className="products-tag">
          OUR PRODUCTS
        </p>

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

        {/* Custom Arrows */}
        <div className="custom-arrow prev-arrow">
          <ChevronLeft size={24} />
        </div>

        <div className="custom-arrow next-arrow">
          <ChevronRight size={24} />
        </div>

        {/* <Slider ref={sliderRef} {...settings}> */}

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".prev-arrow",
            nextEl: ".next-arrow",
          }}
          loop={true}
          spaceBetween={25}
          autoplay={{
            delay: 2500, 
            disableOnInteraction: false,
          }}
          breakpoints={{
            // Mobile
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },

            // Tablet
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            // Laptop/Desktop
            992: {
              slidesPerView: 2,
              spaceBetween: 25,
            },

            // Large Desktop
            1200: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >

          {/* BATTERY CARD */}
          <SwiperSlide>

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

              <button className="view-btn" onClick={() => handleViewMore("/batteries")}>
                VIEW MORE
                <div className="title-line"></div>
              </button>



            </div>

          </SwiperSlide>

          {/* INVERTER CARD */}
          <SwiperSlide>
            <div
              className="product-card inverter-card"
              style={{
                backgroundImage: `url(${inverterBg})`,
              }}
            >

              {/* <div className="product-card inverter-card"> */}

              <div className="product-top">

                <div className="icon-circle">
                  <Zap size={34} />
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

              <button className="view-btn" onClick={() => handleViewMore("/inverters")}>
                VIEW MORE
                <div className="title-line"></div>
              </button>

            </div>

          </SwiperSlide>

          {/* SOLAR CARD */}

          <SwiperSlide>
            <div
              className="product-card solar-card"
              style={{
                backgroundImage: `url(${solarBg})`,
              }}
            >

              <div className="product-top">

                <div className="icon-circle">
                  <Sun size={34} />
                </div>

                <div>
                  <h2 className="solar-heading">Solar Panels</h2>
                  <div className="title-line"></div>
                </div>

              </div>

              <ul>

                <li className="solar">
                  <CircleArrowRight size={28} />
                  Mono PERC Panels
                </li>

                <li className="solar">
                  <CircleArrowRight size={28} />
                  Polycrystalline Panels
                </li>

                <li className="solar">
                  <CircleArrowRight size={28} />
                  Rooftop Solar Systems
                </li>

              </ul>

              <button className="view-btn" onClick={() => handleViewMore("/solars")}>
                VIEW MORE
                <div className="title-line"></div>
              </button>

            </div>

          </SwiperSlide>

          {/* </Slider> */}
        </Swiper>

      </div>

    </section>
  );
}

export default Products;