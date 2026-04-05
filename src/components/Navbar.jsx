import React from "react";
import logo from "../assets/jupitous_logo.png";

const Navbar = () => {
  return (
    <header className="jupitous-header">
      <div className="__logo">
        <img className="jupitous-header__logo-img" src={logo} alt="Logo" />
      </div>

      {/* Center - Menu */}
      <nav className="menu">
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">COMPANIES</a>
        <a href="#">PEOPLE</a>
        <a href="#">CAREERS</a>
        <a href="#">CONTACT</a>
      </nav>
    </header>
  );
};

export default Navbar;
