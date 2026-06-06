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
  faCar,
  faTaxi,
  faTruckPickup,
  faTruck,
  faTractor,
  faVanShuttle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../style/AutomotiveBatteryPopup.scss";
import { batteryProducts } from "../data/batteryData";


const HomeInverterBatteryPopup = ({ onClose }) => {
  return (
    <div className="battery-overlay">
      <div className="battery-container">
        <button className="close-btn" onClick={onClose}>
          <X size={28} />
        </button>

        {/* Hero */}
        <div className="hero">
          <h1>HOME INVERTER BATTERIES</h1>
          <div className="tagline">POWER YOU CAN TRUST, DAY AND NIGHT</div>
          <div className="pop-title-line"></div>

          <div className="hero-grid">
            <div className="intro">
              <p className="description">
                {batteryProducts[0].description}
              </p>
            
            </div>

            <div className="why">
              <h2>WHY CHOOSE OUR HOME INVERTER BATTERIES?</h2>
              <div className="pop-title-line"></div>
              <div className="feature">
                <Zap /> <div><h4>Long Backup Duration</h4><p>Provides uninterrupted power for extended periods.</p></div>
              </div>
              <div className="feature">
                <Shield /> <div><h4>Fast Charging Technology</h4><p>Recharges quickly to stay ready for the next outage.</p></div>
              </div>
              <div className="feature">
                <Droplets /> <div><h4>Low Maintenance</h4><p>Designed for hassle-free operation and easy upkeep.</p></div>
              </div>
              <div className="feature">
                <Truck /> <div><h4>High Efficiency Performance</h4><p>Delivers consistent power with minimal energy loss.</p></div>
              </div>
              <div className="feature">
                <Zap /> <div><h4>Durable Construction</h4><p>Built to withstand frequent charge-discharge cycles.</p></div>
              </div>
              <div className="feature">
                <Shield /> <div><h4>Safe & Reliable Design</h4><p>Enhanced safety features ensure dependable operation.</p></div>
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
    <FontAwesomeIcon icon={faCar} size="lg" /> Residential Homes
  </li>
  <li>
    <FontAwesomeIcon icon={faTaxi} size="lg" /> Apartments & Flats
  </li>
  <li>
    <FontAwesomeIcon icon={faCar} size="lg" /> Home Offices
  </li>
  <li>
    <FontAwesomeIcon icon={faTruckPickup} size="lg" /> Small Shops & Retail Stores
  </li>
  <li>
    <FontAwesomeIcon icon={faTruck} size="lg" /> Educational Institutions
  </li>
  <li>
    <FontAwesomeIcon icon={faTractor} size="lg" /> Clinics & Healthcare Centers
  </li>
  <li>
    <FontAwesomeIcon icon={faVanShuttle} size="lg" /> Computers & Networking Equipment
  </li>
</ul>
          </div>

          <div className="card">
            <div className="card-header">KEY FEATURES</div>
            <div className="features-grid">
              <div><CheckCircle size={18}/> Long Backup Support</div>
              <div><CheckCircle size={18}/> Fast Charging Acceptance</div>
              <div><CheckCircle size={18}/> High Energy Efficiency</div>
              <div><CheckCircle size={18}/> Low Water Loss</div>
              <div><CheckCircle size={18}/> Low Self-Discharge Rate</div>
              <div><CheckCircle size={18}/> Durable Plate Design</div>
              <div><CheckCircle size={18}/> Reliable Performance</div>
              <div><CheckCircle size={18}/> Corrosion Resistant Components</div>
              <div><CheckCircle size={18}/> Enhanced Safety Standards</div>
              <div><CheckCircle size={18}/> Eco-Friendly Operation</div>
            </div>
          </div>

          <div className="highlight">
            <h3>BUILT FOR EVERY HOME</h3>
            <p>
              From daily household needs to emergency power requirements, 
              our Home Inverter Batteries are designed to deliver dependable 
              backup power across a wide range of applications. Their robust construction 
              and efficient energy storage capabilities ensure smooth operation and peace of 
              mind during power interruptions.
            </p>
            <div className="commitment">
              <h4>OUR COMMITMENT</h4>
              <p>
                At Jupitous, we are committed to delivering reliable, 
                high-quality inverter batteries that meet the highest 
                standards of performance, safety, and durability. Every 
                battery is engineered to provide consistent power backup, 
                ensuring customer satisfaction and long-term value.
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

export default HomeInverterBatteryPopup;
