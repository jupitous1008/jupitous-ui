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
  faCloudSun,
  faTemperatureHigh,
  faShieldHalved,
  faCheckDouble,
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


const MonoPERCPopup = ({ onClose }) => {
    return (
        <div className="battery-overlay">
            <div className="battery-container">
                <button className="close-btn" onClick={onClose}>
                    <X size={28} />
                </button>

                {/* Hero */}
                <div className="hero">
                    <h1>MONO PERC PANEL</h1>
                    <div className="tagline">MAXIMUM EFFICIENCY. LASTING PERFORMANCE.</div>
                    <div className="pop-title-line"></div>

                    <div className="hero-grid">
                        <div className="intro">
                            <p className="description_pop">
                                {solarProducts[0].description}
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
                            <h2>WHY CHOOSE JUPITOUS MONO PERC PANEL?</h2>
                            <div className="pop-title-line"></div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faBolt} size="lg" /> <div><h4>High Conversion Efficiency</h4><p>Advanced Mono PERC cell technology captures more sunlight and delivers higher power output.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faCloudSun} size="lg" /> <div><h4>Excellent Low-Light Performance</h4><p>Generates reliable energy even during cloudy weather, early mornings, and late evenings.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faTemperatureHigh} size="lg" /> <div><h4>Superior Temperature Performance</h4><p>Maintains high efficiency with minimal power loss in hot weather conditions.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faShieldHalved} size="lg" /> <div><h4>Durable & Weather Resistant</h4><p>Built with high-quality tempered glass and corrosion-resistant aluminum frames for long-lasting durability.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faCheckDouble} size="lg" /> <div><h4>PID & LID Resistant</h4><p>Engineered to minimize potential-induced degradation (PID) and light-induced degradation (LID) for consistent long-term performance.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faAward} size="lg" /> <div><h4>Long-Term Reliability</h4><p>Designed to provide dependable clean energy with minimal maintenance and an extended service life.</p></div>
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
                            <div><CheckCircle size={18} /> High Conversion Efficiency</div>
                            <div><CheckCircle size={18} /> Advanced Mono PERC Cell Technology</div>
                            <div><CheckCircle size={18} /> Excellent Low-Light Performance</div>
                            <div><CheckCircle size={18} /> Superior Temperature Coefficient</div>
                            <div><CheckCircle size={18} /> PID & LID Resistant</div>
                            <div><CheckCircle size={18} /> Anti-Reflective Tempered Glass</div>
                            <div><CheckCircle size={18} /> Corrosion-Resistant Aluminum Frame</div>
                            <div><CheckCircle size={18} /> High Mechanical Load Capacity</div>
                            <div><CheckCircle size={18} /> Long Service Life</div>
                        </div>
                    </div>

                    <div className="highlight">
                        <h3>BUILT FOR EVERY JOURNEY</h3>
                        <p className="description_pop">
                            From residential homes to commercial and industrial installations,
                            our Mono PERC Panels are engineered to deliver maximum energy output
                            and exceptional efficiency in every environment.
                        </p>
                        <p>
                            With advanced Mono PERC cell technology, superior low-light performance,
                            and durable weather-resistant construction, they provide reliable clean
                            energy, helping reduce electricity costs while supporting a sustainable future.
                        </p>
                        <div className="commitment">
                            <h4>OUR COMMITMENT</h4>
                            <p>
                               At Jupitous, we are committed to delivering high-quality Mono PERC Solar
                               Panels that combine advanced technology, superior efficiency, and
                               long-lasting durability. Every panel is engineered to maximize energy
                               generation, provide reliable performance, and help customers embrace
                               clean, sustainable energy with confidence.
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

export default MonoPERCPopup;
