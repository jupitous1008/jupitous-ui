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


const AutomotiveBatteryPopup = ({ onClose }) => {
    return (
        <div className="battery-overlay">
            <div className="battery-container">
                <button className="close-btn" onClick={onClose}>
                    <X size={28} />
                </button>

                {/* Hero */}
                <div className="hero">
                    <h1>AUTOMOTIVE BATTERIES</h1>
                    <div className="tagline">POWER THAT DRIVES EVERY JOURNEY</div>
                    <div className="pop-title-line"></div>

                    <div className="hero-grid">
                        <div className="intro">
                            <p className="description">
                                {batteryProducts[1].description}
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
                            <h2>WHY CHOOSE JUPITOUS AUTOMOTIVE BATTERIES?</h2>
                            <div className="pop-title-line"></div>
                            <div className="feature">
                                <Zap /> <div><h4>High Cranking Power</h4><p>Delivers instant starting power for quick and reliable ignition.</p></div>
                            </div>
                            <div className="feature">
                                <Shield /> <div><h4>Long Service Life</h4><p>Advanced grid technology ensures extended battery life.</p></div>
                            </div>
                            <div className="feature">
                                <Droplets /> <div><h4>Low Maintenance</h4><p>Designed to minimize water loss and upkeep.</p></div>
                            </div>
                            <div className="feature">
                                <Truck /> <div><h4>Vibration Resistant</h4><p>Built to withstand rough roads and movement.</p></div>
                            </div>
                            <div className="feature">
                                <Zap /> <div><h4>Fast Recharge Acceptance</h4><p>Efficient charging restores power quickly.</p></div>
                            </div>
                            <div className="feature">
                                <Shield /> <div><h4>Leak-Proof & Safe Design</h4><p>Engineered for dependable performance and protection.</p></div>
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
                                <FontAwesomeIcon icon={faCar} size="lg" /> Passenger Cars
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faTaxi} size="lg" /> Taxis & Fleet Vehicles
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCar} size="lg" /> SUVs & MUVs
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faTruckPickup} size="lg" /> Light Commercial Vehicles
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faTruck} size="lg" /> Heavy Commercial Vehicles
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faTractor} size="lg" /> Tractors & Agricultural Equipment
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faVanShuttle} size="lg" /> Utility & Delivery Vehicles
                            </li>
                        </ul>
                    </div>

                    <div className="card">
                        <div className="card-header">KEY FEATURES</div>
                        <div className="features-grid">
                            <div><CheckCircle size={18} /> High Starting Power</div>
                            <div><CheckCircle size={18} /> Superior Charge Retention</div>
                            <div><CheckCircle size={18} /> Long Operational Life</div>
                            <div><CheckCircle size={18} /> Low Self-Discharge Rate</div>
                            <div><CheckCircle size={18} /> Rugged Construction</div>
                            <div><CheckCircle size={18} /> Corrosion Resistant Plates</div>
                            <div><CheckCircle size={18} /> Reliable Performance</div>
                            <div><CheckCircle size={18} /> Low Maintenance Design</div>
                            <div><CheckCircle size={18} /> Enhanced Safety Standards</div>
                        </div>
                    </div>

                    <div className="highlight">
                        <h3>BUILT FOR EVERY JOURNEY</h3>
                        <p>
                            From city traffic to long highway journeys, Jupitous Automotive
                            Batteries are designed to perform efficiently across diverse
                            driving conditions.
                        </p>
                        <p>
                            Their rugged construction and dependable power output ensure smooth
                            operation and peace of mind wherever the road takes you.
                        </p>
                        <div className="commitment">
                            <h4>OUR COMMITMENT</h4>
                            <p>
                                At Jupitous, we focus on delivering quality, reliability, and
                                performance. Every automotive battery is manufactured to meet
                                stringent standards, ensuring customers receive dependable power
                                and lasting value.
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

export default AutomotiveBatteryPopup;
