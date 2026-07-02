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
    faBolt,
    faCoins,
    faScrewdriverWrench,
    faShieldHalved,
    faSun,
    faAward,

    faHouse,
    faBuilding,
    faStore,
    faIndustry,
    faTractor,
    faSchool,
    faHospital,
    faHotel,
    faSolarPanel,
    faShop
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../style/AutomotiveBatteryPopup.scss";
import { solarProducts } from "../data/solarData";


const PolycrystallinePopup = ({ onClose }) => {
    return (
        <div className="battery-overlay">
            <div className="battery-container">
                <button className="close-btn" onClick={onClose}>
                    <X size={28} />
                </button>

                {/* Hero */}
                <div className="hero">
                    <h1>POLYCRYSTALLINE PANEL</h1>
                    <div className="tagline">RELIABLE SOLAR. LASTING VALUE.</div>
                    <div className="pop-title-line"></div>

                    <div className="hero-grid">
                        <div className="intro">
                            <p className="description_pop">
                                {solarProducts[1].description}
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
                            <h2>WHY CHOOSE JUPITOUS POLYCRYSTALLINE PANEL?</h2>
                            <div className="pop-title-line"></div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faBolt} size="lg" /> <div><h4>High Energy Efficiency</h4><p>Advanced polycrystalline cell technology delivers reliable power generation with excellent overall performance.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faSun} size="lg" /> <div><h4>Consistent Power Output</h4><p>Produces stable and dependable energy throughout the day under varying sunlight conditions.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faShieldHalved} size="lg" /> <div><h4>Durable & Weather Resistant</h4><p>Manufactured with tempered glass and corrosion-resistant aluminum frames to withstand harsh environmental conditions.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faAward} size="lg" /> <div><h4>Excellent Long-Term Performance</h4><p>Designed to provide reliable energy generation with minimal degradation over its service life.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faScrewdriverWrench} size="lg" /> <div><h4>Low Maintenance Design</h4><p>Engineered for hassle-free operation with minimal maintenance requirements and dependable performance.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faCoins} size="lg" /> <div><h4>Cost-Effective Solar Solution</h4><p>Offers an economical and sustainable way to generate clean energy while reducing electricity costs.</p></div>
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
                                <FontAwesomeIcon icon={faBuilding} size="lg" /> Apartments & Residential Complexes
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faShop} size="lg" /> Retail Shops & Showrooms
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faIndustry} size="lg" /> Industrial Facilities
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faTractor} size="lg" /> Farmhouses & Agricultural Applications
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faSchool} size="lg" /> Schools & Educational Institutions
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faHospital} size="lg" /> Hospitals & Healthcare Centers
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faHotel} size="lg" /> Hotels & Hospitality
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faSolarPanel} size="lg" /> Rooftop & On-Grid Solar Installations
                            </li>
                        </ul>
                    </div>

                    <div className="card">
                        <div className="card-header">KEY FEATURES</div>
                        <div className="features-grid">
                            <div><CheckCircle size={18} /> High Energy Conversion Efficiency</div>
                            <div><CheckCircle size={18} /> Advanced Polycrystalline Cell Technology</div>
                            <div><CheckCircle size={18} /> Reliable Power Generation</div>
                            <div><CheckCircle size={18} /> Excellent Weather Resistance</div>
                            <div><CheckCircle size={18} /> Durable Tempered Glass Construction</div>
                            <div><CheckCircle size={18} /> Corrosion-Resistant Aluminum Frame</div>
                            <div><CheckCircle size={18} /> High Mechanical Load Capacity</div>
                            <div><CheckCircle size={18} /> Long Service Life</div>
                            <div><CheckCircle size={18} /> Low Maintenance Design</div>
                            <div><CheckCircle size={18} /> Cost-Effective Solar Solution</div>
                        </div>
                    </div>

                    <div className="highlight">
                        <h3>BUILT FOR EVERY JOURNEY</h3>
                        <p className="description_pop">
                            From residential homes to commercial and industrial installations,
                            our Polycrystalline Solar Panels are designed to deliver dependable
                            power generation and long-lasting performance across a wide range of
                            applications.
                        </p>
                        <p>
                            Built with advanced polycrystalline cell technology and durable
                            weather-resistant materials, they provide reliable clean energy,
                            helping reduce electricity costs while supporting a greener and
                            more sustainable future.
                        </p>
                        <div className="commitment">
                            <h4>OUR COMMITMENT</h4>
                            <p>
                                At Jupitous, we are committed to delivering high-quality
                                Polycrystalline Solar Panels that offer reliable performance,
                                exceptional durability, and long-term value. Every panel is
                                engineered to provide consistent energy generation, withstand
                                diverse weather conditions, and help customers transition to
                                clean, sustainable, and cost-effective solar energy with confidence.
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

export default PolycrystallinePopup;
