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
  faRecycle,
  faRoad,
  faBolt,
  faScrewdriverWrench,
  faTruckFast,
  faShieldHalved,
  faTaxi,
  faBox,
  faTruck,
  faWarehouse,
  faLeaf
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../style/AutomotiveBatteryPopup.scss";
import { batteryProducts } from "../data/batteryData";


const E_RickshawPopup = ({ onClose }) => {
  return (
    <div className="battery-overlay">
      <div className="battery-container">
        <button className="close-btn" onClick={onClose}>
          <X size={28} />
        </button>

        {/* Hero */}
        <div className="hero">
          <h1>E-RICKSHAW BATTERIES</h1>
          <div className="tagline">POWER THAT DRIVES EVERY MILE</div>
          <div className="pop-title-line"></div>

          <div className="hero-grid">
            <div className="intro">
              <p className="description_pop">
                {batteryProducts[2].description}
              </p>
            
            </div>

            <div className="why">
              <h2>WHY CHOOSE OUR E-RICKSHAW BATTERIES?</h2>
              <div className="pop-title-line"></div>
              <div className="feature">
                <FontAwesomeIcon icon={faRecycle} size="lg" /> <div><h4>High Deep Cycle Performance</h4><p>Engineered to withstand repeated charge-discharge cycles for reliable daily operation.</p></div>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon={faRoad} size="lg" /> <div><h4>Long Running Backup</h4><p>Delivers extended operating hours, helping you cover more distance on every charge.</p></div>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon={faBolt} size="lg" /> <div><h4>Fast Charging Technology</h4><p>Charges efficiently to minimize downtime and maximize productivity.</p></div>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon={faScrewdriverWrench} size="lg" /> <div><h4>Low Maintenance</h4><p>Designed for hassle-free operation with minimal servicing requirements.</p></div>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon={faTruckFast} size="lg" /> <div><h4>Rugged & Vibration Resistant</h4><p>Built to perform reliably on rough roads and in demanding driving conditions.</p></div>
              </div>
              <div className="feature">
                <FontAwesomeIcon icon={faShieldHalved} size="lg" /> <div><h4>Safe & Reliable Design</h4><p>Advanced safety features ensure dependable performance and long-lasting durability.</p></div>
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
    <FontAwesomeIcon icon={faTaxi} size="lg" /> Passenger E-Rickshaws
  </li>
  <li>
    <FontAwesomeIcon icon={faBox} size="lg" /> Cargo E-Rickshaws
  </li>
  <li>
    <FontAwesomeIcon icon={faBolt} size="lg" /> Electric Loaders
  </li>
  <li>
    <FontAwesomeIcon icon={faTruck} size="lg" /> Electric Utility Vehicles
  </li>
  <li>
    <FontAwesomeIcon icon={faTruckFast} size="lg" /> Last-Mile Delivery Vehicles
  </li>
  <li>
    <FontAwesomeIcon icon={faWarehouse} size="lg" /> Commercial Fleet Operations
  </li>
  <li>
    <FontAwesomeIcon icon={faLeaf} size="lg" /> Electric Mobility Solutions
  </li>
</ul>
          </div>

          <div className="card">
            <div className="card-header">KEY FEATURES</div>
            <div className="features-grid">
              <div><CheckCircle size={18}/> High Energy Efficiency</div>
              <div><CheckCircle size={18}/> Low Maintenance Design</div>
              <div><CheckCircle size={18}/> Vibration Resistant Construction</div>
              <div><CheckCircle size={18}/> Long Cycle Life</div>
              <div><CheckCircle size={18}/> Eco-Friendly Operation</div>
              <div><CheckCircle size={18}/> Enhanced Safety Standards</div>
              <div><CheckCircle size={18}/> Fast Recharge Acceptance</div>
              <div><CheckCircle size={18}/> Heavy-Duty Plate Construction</div>
              <div><CheckCircle size={18}/> Reliable Performance</div>
              <div><CheckCircle size={18}/> Extended Driving Range</div>
            </div>
          </div>

          <div className="highlight">
            <h3>BUILT FOR EVERY JOURNEY</h3>
            <p>
              From city streets to rural routes, our E-Rickshaw Batteries are built to provide reliable and
              consistent power for demanding electric mobility applications. Designed with advanced deep-cycle 
              technology, durable construction, and fast charging capabilities, they deliver extended running time, 
              dependable performance, and lower operating costs for drivers and fleet operators alike.
            </p>
            <div className="commitment">
              <h4>OUR COMMITMENT</h4>
              <p>
                At Jupitous, we are committed to powering the future of electric mobility 
                with high-quality E-Rickshaw Batteries designed for exceptional reliability, 
                long service life, and superior performance. Engineered using advanced technology 
                and premium materials, our batteries deliver consistent power, enhanced efficiency, 
                and dependable operation, enabling drivers and fleet operators to travel farther with confidence.
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

export default E_RickshawPopup;
