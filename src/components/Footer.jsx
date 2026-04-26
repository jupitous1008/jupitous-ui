import "../style/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1 */}
        <div className="footer-col">
          <h3>MyCompany</h3>
          <p>
            We build modern web experiences with smooth animations and
            scalable architecture. Focused on performance and design.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Frontend Development</li>
            <li>Backend APIs</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: support@mycompany.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;