import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ChevronRight,
  Map
} from "lucide-react";
import indiaMap from "../assets/india.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import logo from "../assets/jupitous_logo.png";
import "../style/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-column company">
          <img src={logo} alt="JUPITOUS" className="footer-logo" />

          <p className="about">
           JUPITOUS POWERTECH LLP is committed to delivering reliable and innovative power solutions across India. Our range of batteries, inverters, and solar products is designed to provide long-lasting performance, energy efficiency, and dependable backup for homes, businesses, and industrial applications.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <ChevronRight size={18} />
              Home
            </li>

            <li>
              <ChevronRight size={18} />
              About Us
            </li>

            <li>
              <ChevronRight size={18} />
              Products
            </li>

            <li>
              <ChevronRight size={18} />
              Distributors
            </li>

            <li>
              <ChevronRight size={18} />
              Contact Us
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer-column">
          <h3>Our Products</h3>

          <ul>
            <li>
              <ChevronRight size={18} />
              Home Inverter Batteries
            </li>

            <li>
              <ChevronRight size={18} />
              Automotive Batteries
            </li>

            <li>
              <ChevronRight size={18} />
              E-Rickshaw Batteries
            </li>

            <li>
              <ChevronRight size={18} />
              Home UPS / Inverters
            </li>

            <li>
              <ChevronRight size={18} />
              Solar Inverters
            </li>

             <li>
              <ChevronRight size={18} />
              Hybrid Inverters
            </li>

             <li>
              <ChevronRight size={18} />
              Mono PERC Panels
            </li>
            <li>
              <ChevronRight size={18} />
              Polycrystalline Panels
            </li>
            <li>
              <ChevronRight size={18} />
              Rooftop Solar Panels
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <MapPin size={20} />
            <div>
              <strong>JUPITOUS POWERTECH LLP</strong>
              <p className="address">
                Plot No. 559, Patel Nagar,
                <br />
                Gonda, Uttar Pradesh, India
              </p>
            </div>
          </div>

          <div className="contact-item">
            <Phone size={20} />
            <span>+91 8600 898959</span>
          </div>

          <div className="contact-item">
            <Mail size={20} />
            <span>contact@jupitous.com</span>
          </div>

          <div className="contact-item">
            <Globe size={20} />
            <span>www.jupitous.com</span>
          </div>

          <div className="divider"></div>


          <div className="contact-item">
            <img
              src={indiaMap}
              alt="India map"
              width={24}
              height={24}
            />
            <p className="address">Serving Customers Across India</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p className="light-text">
          © {new Date().getFullYear()} JUPITOUS POWERTECH LLP.
          All Rights Reserved.
        </p>

        <div className="footer-links">
          <a href="/" className="light-text">Privacy Policy</a>
          <span>|</span>
          <a href="/" className="light-text">Terms & Conditions</a>
        </div>

        <div className="social-icons">
          <a href="/">
            <FaFacebookF size={18} />
          </a>

          <a href="/">
            <FaInstagram size={18} />
          </a>

          <a href="/">
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;