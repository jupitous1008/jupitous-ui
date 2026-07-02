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
import InverterProducts from "./InverterProducts";
import SolarPanelProducts from "./SolarPanelProducts";

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

  const closeMenu = () => {
  setMenuOpen(false);
  setProductMenuOpen(false);
};

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
  {menuOpen ? "✕" : "☰"}
</div>

        {/* MENU */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>

  <Link to="/" onClick={closeMenu}>Home</Link>

  <Link to="/about-us" onClick={closeMenu}>About Us</Link>

  <div className="nav-dropdown">

    <div
      className="dropdown-trigger"
      onClick={() => setProductMenuOpen(!productMenuOpen)}
    >
      <span>Products</span>

      <ChevronDown
        size={18}
        className={`dropdown-arrow ${
          productMenuOpen ? "rotate" : ""
        }`}
      />
    </div>

    <div className={`dropdown-menu ${productMenuOpen ? "show" : ""}`}>

      <Link to="/batteries" onClick={closeMenu}>
        Batteries
      </Link>

      <Link to="/inverters" onClick={closeMenu}>
        Inverters
      </Link>

      <Link to="/solars" onClick={closeMenu}>
        Solar Panels
      </Link>

    </div>

  </div>

  <Link to="/distributors" onClick={closeMenu}>
    Distributors
  </Link>

  <Link to="/contact" onClick={closeMenu}>
    Contact Us
  </Link>

</nav>

        {/* TOLL FREE SECTION */}
        <div className="call-section">
          <div className="call-icon-wrapper">
            <Phone size={22} className="call-icon" />
          </div>

          <div className="call-text">
            <span>Call Anytime</span>
            <h4 className="phone-number">+91 8600 898959</h4>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;