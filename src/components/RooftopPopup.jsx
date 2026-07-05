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
    faScrewdriverWrench,
    faTemperatureHigh,
    faShieldHalved,
    faLeaf,
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


const RooftopPopup = ({ onClose }) => {
    return (
        <div className="battery-overlay">
            <div className="battery-container">
                <button className="close-btn" onClick={onClose}>
                    <X size={28} />
                </button>

                {/* Hero */}
                <div className="hero">
                    <h1>ROOFTOP SOLAR PANEL</h1>
                    <div className="tagline">MAXIMUM EFFICIENCY. LASTING PERFORMANCE.</div>
                    <div className="pop-title-line"></div>

                    <div className="hero-grid">
                        <div className="intro">
                            <p className="description_pop">
                                {solarProducts[2].description}
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
                            <h2>WHY CHOOSE JUPITOUS ROOFTOP SOLAR PANEL?</h2>
                            <div className="pop-title-line"></div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faBolt} size="lg" /> <div><h4>High Energy Generation</h4><p>Engineered to maximize solar power generation, helping reduce electricity costs and improve energy independence.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faHouse} size="lg" /> <div><h4>Efficient Rooftop Performance</h4><p>Optimized for residential, commercial, and industrial rooftops to deliver consistent power throughout the year.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faShieldHalved} size="lg" /> <div><h4>Durable & Weather Resistant</h4><p>Built with premium tempered glass and corrosion-resistant aluminum frames to withstand harsh weather conditions.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faAward} size="lg" /> <div><h4>Reliable Long-Term Output</h4><p>Designed to provide dependable energy generation with minimal performance degradation over an extended service life.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faScrewdriverWrench} size="lg" /> <div><h4>Low Maintenance Design</h4><p>Requires minimal maintenance while delivering reliable and efficient performance year after year.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faLeaf} size="lg" /> <div><h4>Sustainable & Cost-Effective Solution</h4><p>Generates clean, renewable energy, reducing carbon emissions and providing long-term savings on electricity bills.</p></div>
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
                                <FontAwesomeIcon icon={faSolarPanel} size="lg" /> Rooftop Solar Installations
                            </li>
                        </ul>
                    </div>

                    <div className="card">
                        <div className="card-header">KEY FEATURES</div>
                        <div className="features-grid">
                            <div><CheckCircle size={18} /> High Energy Generation</div>
                            <div><CheckCircle size={18} /> High Conversion Efficiency</div>
                            <div><CheckCircle size={18} /> Durable Tempered Glass Construction</div>
                            <div><CheckCircle size={18} /> Corrosion-Resistant Aluminum Frame</div>
                            <div><CheckCircle size={18} /> Excellent Weather Resistance</div>
                            <div><CheckCircle size={18} /> High Mechanical Load Capacity</div>
                            <div><CheckCircle size={18} /> Long Service Life</div>
                            <div><CheckCircle size={18} /> Low Maintenance Design</div>
                            <div><CheckCircle size={18} /> Reliable Power Generation</div>
                            <div><CheckCircle size={18} /> Sustainable & Eco-Friendly Solution</div>
                        </div>
                    </div>

                    <div className="highlight">
                        <h3>BUILT FOR EVERY JOURNEY</h3>
                        <p className="description_pop">
                            From residential homes to commercial and industrial buildings,
                            our Rooftop Solar Panels are engineered to deliver reliable energy
                            generation and outstanding performance across a wide range of applications.
                        </p>
                        <p>
                            Built with advanced solar technology and durable weather-resistant
                            materials, they provide clean, renewable energy while helping reduce
                            electricity costs and support a more sustainable future.
                        </p>
                        <div className="commitment">
                            <h4>OUR COMMITMENT</h4>
                            <p>
                                At Jupitous, we are committed to delivering high-quality Rooftop
                                Solar Panels that combine advanced technology, exceptional durability,
                                and reliable performance. Every panel is engineered to maximize solar
                                energy generation, reduce electricity costs, and provide clean,
                                sustainable power for homes, businesses, and industries
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

export default RooftopPopup;
