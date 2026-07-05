import React from "react";
import {
    CheckCircle,
    X
} from "lucide-react";

import {
    faMicrochip,
  faBolt,
  faWaveSquare,
  faSolarPanel,
  faBatteryHalf,
  faShieldHalved,
  faHouse,
  faBuilding,
  faBriefcase,
  faStore,
  faGraduationCap,
  faHospital,
  faTractor,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../style/AutomotiveBatteryPopup.scss";
import { inverterProducts } from "../data/inverterData";


const HybridInverterPopup = ({ onClose }) => {
    return (
        <div className="battery-overlay">
            <div className="battery-container">
                <button className="close-btn" onClick={onClose}>
                    <X size={28} />
                </button>

                {/* Hero */}
                <div className="hero">
                    <h1>HYBRID INVERTER</h1>
                    <div className="tagline">SMART POWER. ALWAYS ON.</div>
                    <div className="pop-title-line"></div>

                    <div className="hero-grid">
                        <div className="intro">
                            <p className="description_pop">
                                {inverterProducts[2].description}
                            </p>

                        </div>

                        <div className="why">
                            <h2>WHY CHOOSE OUR HYBRID INVERTERS?</h2>
                            <div className="pop-title-line"></div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faMicrochip} size="lg" /> <div><h4>Intelligent Energy Management</h4><p>Automatically manages power from solar panels, batteries, and the utility grid for maximum efficiency.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faBolt} size="lg" /> <div><h4>Seamless Power Backup</h4><p>Instantly switches between energy sources to ensure uninterrupted power during outages.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faWaveSquare} size="lg" /> <div><h4>Pure Sine Wave Output</h4><p>Delivers clean and stable power, making it safe for sensitive household and commercial appliances.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faSolarPanel} size="lg" /> <div><h4>Advanced MPPT Technology</h4><p>Maximizes solar energy harvesting for higher efficiency and improved energy production.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faBatteryHalf} size="lg" /> <div><h4>Smart Battery Management</h4><p>Optimizes battery charging and discharging to extend battery life and enhance overall performance.</p></div>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faShieldHalved} size="lg" /> <div><h4>Advanced Safety Protection</h4><p>Integrated protection against overload, short circuit, over-voltage, overheating, and reverse polarity for safe and reliable operation.</p></div>
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
                                <FontAwesomeIcon icon={faBuilding} size="lg" /> Apartments & Villas
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBriefcase} size="lg" /> Offices & Commercial Spaces
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faStore} size="lg" /> Retail Shops & Showrooms
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faGraduationCap} size="lg" /> Schools & Educational Institutions
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faHospital} size="lg" /> Clinics & Healthcare Centers
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faTractor} size="lg" /> Farmhouses & Agricultural Applications
                            </li>
                        </ul>
                    </div>

                    <div className="card">
                        <div className="card-header">KEY FEATURES</div>
                        <div className="features-grid">
                            <div><CheckCircle size={18} /> Intelligent Hybrid Power Management</div>
                            <div><CheckCircle size={18} /> Advanced MPPT Technology</div>
                            <div><CheckCircle size={18} /> Pure Sine Wave Output</div>
                            <div><CheckCircle size={18} /> High Conversion Efficiency</div>
                            <div><CheckCircle size={18} /> Smart Battery Management</div>
                            <div><CheckCircle size={18} /> Fast Automatic Switching</div>
                            <div><CheckCircle size={18} /> Real-Time LCD / LED Monitoring</div>
                            <div><CheckCircle size={18} /> Wide Input Voltage Range</div>
                            <div><CheckCircle size={18} /> Advanced Protection System</div>
                            <div><CheckCircle size={18} /> Silent & Efficient Operation</div>
                        </div>
                    </div>

                    <div className="highlight">
                        <h3>BUILT FOR SMART ENERGY</h3>
                        <p>
                            From everyday household needs to advanced solar power systems, our Hybrid 
                            Inverters are designed to intelligently manage energy from solar panels, batteries, 
                            and the utility grid. With seamless power switching, advanced energy management, and 
                            high conversion efficiency, they ensure uninterrupted power, maximize solar utilization, 
                            and deliver reliable performance for homes and businesses.
                        </p>
                        <div className="commitment">
                            <h4>OUR COMMITMENT</h4>
                            <p>
                                At Jupitous, we are committed to delivering innovative Hybrid Inverters that combine 
                                advanced technology, superior efficiency, and dependable performance. Designed to optimize 
                                solar energy utilization and provide seamless power management, every inverter is built to 
                                deliver reliable operation, enhanced safety, and long-term value, empowering customers with 
                                a smarter and more sustainable energy solution.
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

export default HybridInverterPopup;
