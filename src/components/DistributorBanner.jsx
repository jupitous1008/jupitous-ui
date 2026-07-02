import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/DistributorBanner.scss";
import handshakeImg from "../assets/handshake.png";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import brochurePdf from "../assets/Temp_Broucher.pdf";




const DistributorBanner = () => {

     const navigate = useNavigate();

    const handleDownload = () => {
  const link = document.createElement("a");
  link.href = brochurePdf;
  link.download = "JUPITOUS-Brochure.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
    
  return (
    <section className="distributor-banner">
      <div className="banner-card">
        {/* Left Section */}
        <div className="banner-section left-section">
          <div className="icon">
            <HandshakeOutlinedIcon fontSize="60"/>
          </div>
          <div className="content">
            <h3>Our Distribution Network</h3>
            <p>
              Serving customers through a growing
              network of distributors and dealers across India.
            </p>
            <button className="primary-btn" onClick={() => navigate("/distributors")}>
              Know More <span>→</span>
            </button>
          </div>
        </div>

        {/* Center Image */}
        <div className="image-section">
          <img src={handshakeImg} alt="Handshake" />
        </div>

        {/* Right Section */}
        <div className="banner-section right-section">
          <div className="icon">
            <FileDownloadOutlinedIcon fontSize="60"/>
          </div>
          <div className="content">
            <h3>Download Resources</h3>
            <p>
              Access detailed product information<br />
              and technical specifications.
            </p>
            <button className="primary-btn" onClick={handleDownload}>
              Download Brochure <span>↓</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default DistributorBanner;
