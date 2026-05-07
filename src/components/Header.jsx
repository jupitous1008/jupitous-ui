import { useEffect, useState } from "react";
import "../style/Header.scss";
import logo from "../assets/jupitous_logo.png";
import { Mail } from "lucide-react";

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
          <Mail size={18} />
          <span>info@jupitous.com</span>
        </div>

        {/* RIGHT */}
        <div className="topbar-right">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-youtube"></i>
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
      </header>
    </>
  );
}

export default Header;