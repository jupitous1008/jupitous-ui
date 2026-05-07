import { useEffect, useState } from "react";
import "../style/Header.scss";
import logo from "../assets/jupitous_logo.png";
import { Mail, Phone } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopbar, setShowTopbar] = useState(true);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowTopbar(false);
      } else {
        setShowTopbar(true);
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
      <div className={`topbar ${showTopbar ? "show" : "hide"}`}>
        
        {/* LEFT */}
        <div className="topbar-left">
          <Mail className="mail-icon" size={18} />
          <span className="mail-text">info@jupitous.com</span>
        </div>

        {/* RIGHT */}
        <div className="topbar-right">

          {/* TOLL FREE SECTION
          <div className="call-section">
            <div className="call-icon-wrapper">
              <Phone size={22} className="call-icon" />
            </div>

            <div className="call-text">
              <span>Call Anytime (Indian Toll Free)</span>
              <h4>1800 120 5676</h4>
            </div>
          </div> */}

          {/* SOCIAL ICONS */}
          <FaInstagram size={18} className="instagram-icon" />
          <FaFacebookF size={18} className="facebook-icon" />
          <FaLinkedinIn size={18} className="linkedin-icon" />
          <FaYoutube size={18} className="youtube-icon" />
        </div>
      </div>

      {/* HEADER */}
      <header className={`header ${showTopbar ? "" : "sticky-header"}`}>
        
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
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
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