import { Link } from "react-router-dom";
import { FaShoppingBag, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">⚡ PowerMax</div>

        {/* Navigation */}
        <nav className="nav-links">
          <Link to="/">Homeowners</Link>
          <Link to="/">Business Owners</Link>
          <Link to="/">Installers</Link>
          <Link to="/">Store</Link>
          <Link to="/">Support</Link>
        </nav>

        {/* Right Section */}
        <div className="right-section">
          <button className="cta-btn">Get Started</button>
          <FaShoppingBag className="icon" />
          <FaSearch className="icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
