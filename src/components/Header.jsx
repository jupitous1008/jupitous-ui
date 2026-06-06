import { useEffect, useState } from "react";
import "../style/Header.scss";
import logo from "../assets/jupitous_logo.png";
import { Mail, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import BatteryProducts from "./BatteryProducts";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);

  // SCROLL EFFECT
  useEffect(() => {

  const handleScroll = () => {

    if (window.scrollY > 80) {
      setShowStickyHeader(true);
    } else {
      setShowStickyHeader(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

}, []);

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">

        {/* LEFT */}
        <div className="topbar-left">
          <Mail className="mail-icon" size={18} />
          <span className="mail-text">contact@jupitous.com</span>
        </div>

        {/* RIGHT */}
        <div className="topbar-right">

          {/* SOCIAL ICONS */}
          <FaInstagram size={18} className="instagram-icon" />
          <FaFacebookF size={18} className="facebook-icon" />
          <FaLinkedinIn size={18} className="linkedin-icon" />
          <FaYoutube size={18} className="youtube-icon" />
        </div>
      </div>

      {/* HEADER */}
      <header className={`header ${showStickyHeader ? "show-header" : ""}`}>

        {/* LOGO */}
        <div className="header-left">
          <img src={logo} alt="logo" className="logo-img" />
        </div>


        {/* HAMBURGER */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* MENU */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>

          <Link to="/">Home</Link>

          <Link to="/about-us">About Us</Link>

          {/* <Link to="/products">Products</Link> */}
          <div
  className="nav-dropdown"
  onMouseEnter={() => setProductMenuOpen(true)}
  onMouseLeave={() => setProductMenuOpen(false)}
>
  <div className="dropdown-trigger">

    <span>Products</span>

    <ChevronDown
      size={18}
      className={`dropdown-arrow ${
        productMenuOpen ? "rotate" : ""
      }`}
    />

  </div>

  <div
    className={`dropdown-menu ${
      productMenuOpen ? "show" : ""
    }`}
  >
    <Link to="/battery" onClick={BatteryProducts}>Battery</Link>

    <Link to="/inverter">Inverter</Link>

    <Link to="/solar">Solar</Link>
  </div>
</div>

          <Link to="/distributors">Distributors</Link>

          <Link to="/contact">Contact</Link>

        </nav>

        {/* TOLL FREE SECTION */}
        <div className="call-section">
          <div className="call-icon-wrapper">
            <Phone size={22} className="call-icon" />
          </div>

          <div className="call-text">
            <span>Call Anytime</span>
            <h4 className="phone-number">+91 79882 00917</h4>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;