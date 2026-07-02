import React from "react";
import {
    Zap,
    Shield,
    Droplets,
    Truck,
    Car,
    Tractor,
    CheckCircle,
    X,
} from "lucide-react";

import {
     faHouse,
  faBuilding,
  faStore,
  faTractor,
  faGraduationCap,
  faHospital,
  faHotel,

    faSolarPanel,
  faMicrochip,
  faWaveSquare,
  faShieldHalved,
  faDisplay,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../style/AutomotiveBatteryPopup.scss";
import { inverterProducts } from "../data/inverterData";


const SolarInverterPopup = ({ onClose }) => {
    return (
        <div className="battery-overlay">
            <div className="battery-container">
                <button className="close-btn" onClick={onClose}>
                    <X size={28} />
                </button>

                {/* Hero */}
                <div className="hero">
                    <h1>SOLAR INVETER</h1>
                    <div className="tagline">HARNESS THE SUN. POWER YOUR FUTURE</div>
                    <div className="pop-title-line"></div>

                    <div className="hero-grid">
                        <div className="intro">
                            <p className="description_pop">
                                {inverterProducts[1].description}
                            </p>

                            {/* <p>
                In today’s fast-moving world, vehicles are more than just a mode of transportation—they are an essential part of daily life, business operations, agriculture, logistics, and industrial activities. At the heart of every vehicle lies a dependable power source that ensures smooth engine starts, supports critical electrical systems, and delivers uninterrupted performance in every condition. Jupitous Automotive Batteries are designed to meet these demands with exceptional reliability, durability, and efficiency.
              </p>
              <p>
                Engineered using advanced battery technology and premium-quality materials, Jupitous Automotive Batteries provide the power needed to keep vehicles running at their best. Whether it is a passenger car navigating city roads, a commercial truck covering long distances, a tractor operating in demanding agricultural environments, or a utility vehicle performing essential tasks, Jupitous batteries deliver consistent and dependable performance every time.
              </p>
              <p>
                Jupitous Automotive Batteries are manufactured with a focus on quality, innovation, and performance. Every battery is built to provide high cranking power, ensuring quick and reliable engine starts even in challenging weather conditions. From scorching summers to cold winter mornings, our batteries are designed to perform efficiently and consistently.
              </p> */}
                        </div>

                        <div className="why">
                            <h2>WHY CHOOSE JUPITOUS SOLAR INVETER?</h2>
                            <div className="pop-title-line"></div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faSolarPanel} size="lg" /> <div><h4>High Conversion Efficiency</h4><p>Advanced MPPT technology maximizes solar energy generation and power output.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faMicrochip} size="lg" /> <div><h4>Intelligent Energy Management</h4><p>Smart power distribution ensures optimal performance and energy savings.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faWaveSquare} size="lg" /> <div><h4>Pure Sine Wave Output</h4><p>Provides clean, stable power for sensitive home and office appliances.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faShieldHalved} size="lg" /> <div><h4>Advanced Safety Protection</h4><p>Integrated protection against overload, short circuit, over-voltage, overheating, and reverse polarity.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faDisplay} size="lg" /> <div><h4>Smart Monitoring</h4><p>Real-time system status with intuitive LED/LCD indicators for easy operation.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faGear} size="lg" /> <div><h4>Durable & Reliable Performance</h4><p>Engineered with premium components for long-lasting performance in diverse weather conditions.</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="bottom-grid">
                    <div className="card">
                        <div className="card-header">SUITABLE APPLICATIONS</div>
                        <ul className="list">
                            <li>
                                <FontAwesomeIcon icon={faHouse} size="lg" /> Residential Homes
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBuilding} size="lg" /> Offices & Commercial Spaces
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faStore} size="lg" /> Retail Shops & Showrooms
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faTractor} size="lg" /> Farmhouses & Agricultural Applications
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faGraduationCap} size="lg" /> Schools & Educational Institutions
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faHospital} size="lg" /> Clinics & Healthcare Centers
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faHotel} size="lg" /> Hotels & Hospitality
                            </li>
                        </ul>
                    </div>

                    <div className="card">
                        <div className="card-header">KEY FEATURES</div>
                        <div className="features-grid">
                            <div><CheckCircle size={18} /> Advanced MPPT Technology</div>
                            <div><CheckCircle size={18} /> High Conversion Efficiency</div>
                            <div><CheckCircle size={18} /> Pure Sine Wave Output</div>
                            <div><CheckCircle size={18} /> Intelligent Battery Management</div>
                            <div><CheckCircle size={18} /> Smart LCD Display & LED Indicators</div>
                            <div><CheckCircle size={18} /> Multiple Safety Protections</div>
                            <div><CheckCircle size={18} /> Wide Input Voltage Range</div>
                            <div><CheckCircle size={18} /> Silent Operation</div>
                            <div><CheckCircle size={18} /> High Compatibility</div>
                        </div>
                    </div>

                    <div className="highlight">
                        <h3>BUILT FOR EVERY JOURNEY</h3>
                        <p className="description_pop">
                            From residential rooftops to commercial solar installations, 
                            Jupitous Solar Inverters are engineered to deliver maximum efficiency 
                            and reliable performance in every environment.
                        </p>
                        <p>
                            With intelligent energy management, advanced safety features, and seamless solar power conversion, 
                            they provide uninterrupted clean energy, helping you reduce electricity costs while powering a sustainable future.
                        </p>
                        <div className="commitment">
                            <h4>OUR COMMITMENT</h4>
                            <p>
                               At Jupitous, we are committed to delivering innovative and reliable 
                               solar energy solutions. Our Solar Inverters are engineered for
                                high efficiency, intelligent performance, and dependable power you can trust.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                {/* <div className="footer">
          ⚡ JUPITOUS AUTOMOTIVE BATTERIES – RELIABLE POWER FOR EVERY DRIVE.
        </div> */}
            </div>
        </div>
    );
};

export default SolarInverterPopup;
