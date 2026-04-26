import { useState } from "react";
import "../style/Header.scss";
import logo from "../assets/jupitous_logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="logo" className="logo-img" />
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menu */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;