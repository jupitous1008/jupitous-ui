import React from "react";
import {
    CheckCircle,
    X
} from "lucide-react";

import {
    faHouse,
    faBuilding,
    faLaptop,
    faStore,
    faGraduationCap,
    faHospital,
    faDesktop,
    faBatteryFull,
    faBolt,
    faScrewdriverWrench,
    faGaugeHigh,
    faAward,
    faShieldHalved,
    faWaveSquare,
    faBatteryHalf,
    faGear

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../style/AutomotiveBatteryPopup.scss";
import { inverterProducts } from "../data/inverterData";


const HomeInverterPopup = ({ onClose }) => {
    return (
        <div className="battery-overlay">
            <div className="battery-container">
                <button className="close-btn" onClick={onClose} aria-label="Close popup">
                    <X size={24} />
                </button>

                {/* Hero */}
                <div className="hero">
                    <h1>HOME UPS / INVERTER</h1>
                    <div className="tagline">POWER YOU CAN TRUST, DAY AND NIGHT</div>
                    <div className="pop-title-line"></div>

                    <div className="hero-grid">
                        <div className="intro">
                            <p className="description_pop">
                                {inverterProducts[0].description}
                            </p>

                        </div>

                        <div className="why">
                            <h2>WHY CHOOSE OUR HOME UPS / INVERTERS?</h2>
                            <div className="pop-title-line"></div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faBolt} size="lg" /> <div><h4>Instant Power Backup</h4><p>Automatically switches to backup power during outages for uninterrupted operation.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faWaveSquare} size="lg" /> <div><h4>Pure Sine Wave Output</h4><p>Delivers clean and stable power, making it safe for sensitive electronic devices.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faGaugeHigh} size="lg" /> <div><h4>High Energy Efficiency</h4><p>Optimized performance minimizes power loss and helps reduce electricity consumption.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faBatteryHalf} size="lg" /> <div><h4>Intelligent Battery Management</h4><p>Advanced charging technology enhances battery life and ensures reliable performance.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faShieldHalved} size="lg" /> <div><h4>Advanced Safety Protection</h4><p>Equipped with overload, short-circuit, overcharge, and low-voltage protection for safe operation.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faGear} size="lg" /> <div><h4>Reliable & Durable Design</h4><p>Built with premium-quality components to provide long-lasting, dependable performance.</p></div>
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
                                <FontAwesomeIcon icon={faBuilding} size="lg" /> Apartments & Flats
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faLaptop} size="lg" /> Home Offices
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faStore} size="lg" /> Small Shops & Retail Stores
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faGraduationCap} size="lg" /> Educational Institutions
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faHospital} size="lg" /> Clinics & Healthcare Centers
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faDesktop} size="lg" /> Computers & Networking Equipment
                            </li>
                        </ul>
                    </div>

                    <div className="card">
                        <div className="card-header">KEY FEATURES</div>
                        <div className="features-grid">
                            <div><CheckCircle size={18} /> Pure Sine Wave Technology</div>
                            <div><CheckCircle size={18} /> Instant Power Backup</div>
                            <div><CheckCircle size={18} /> Intelligent Battery Charging</div>
                            <div><CheckCircle size={18} /> Fast Automatic Switching</div>
                            <div><CheckCircle size={18} /> High Conversion Efficiency</div>
                            <div><CheckCircle size={18} /> Wide Input Voltage Range</div>
                            <div><CheckCircle size={18} /> Advanced Protection System</div>
                            <div><CheckCircle size={18} /> LCD / LED Status Display</div>
                            <div><CheckCircle size={18} /> Silent Operation</div>
                            <div><CheckCircle size={18} /> Long Service Life</div>
                        </div>
                    </div>

                    <div className="highlight">
                        <h3>BUILT FOR EVERY HOME</h3>
                        <p>
                            From everyday household activities to unexpected power outages,
                            our Home UPS / Inverters are designed to provide instant and
                            reliable backup power for a wide range of applications. With
                            advanced inverter technology, intelligent power management, and
                            high energy efficiency, they ensure uninterrupted operation of
                            essential appliances, keeping your home and workspace powered
                            whenever you need it.
                        </p>
                        <div className="commitment">
                            <h4>OUR COMMITMENT</h4>
                            <p>
                                At Jupitous, we are committed to delivering reliable, high-quality
                                Home UPS / Inverters that meet the highest standards of performance,
                                efficiency, and safety. Every inverter is engineered with advanced
                                technology to provide seamless power backup, stable performance,
                                and long-lasting reliability, ensuring customer satisfaction and
                                exceptional value.
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

export default HomeInverterPopup;
