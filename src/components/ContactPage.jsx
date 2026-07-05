import React, { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Calendar,
  CheckCircle,
  ShieldCheck,
  Truck,
  Headset,
  Plus
} from 'lucide-react';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';


import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import '../style/ContactPage.scss';

const customMarker = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function ContactPage() {

  /* =========================
     FAQ ACCORDION STATE
  ========================= */

  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqData = [
    {
      question: "How quickly do you respond?",
      answer:
        "Our support team responds within 24 hours to all customer inquiries."
    },
    {
      question: "Do you deliver nationwide?",
      answer:
        "Yes, we provide delivery services across multiple cities and regions."
    },
    {
      question: "Do you offer warranty on batteries?",
      answer:
        "Yes, all Jupitous batteries come with manufacturer warranty coverage."
    },
    {
      question: "Can I get a custom energy solution?",
      answer:
        "Absolutely. We provide customized energy solutions for homes and industries."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  /* =========================
     CALENDLY
  ========================= */

  useEffect(() => {
    const link = document.createElement('link');

    link.href =
      "https://assets.calendly.com/assets/external/widget.css";

    link.rel = "stylesheet";

    document.head.appendChild(link);

    const script = document.createElement('script');

    script.src =
      "https://assets.calendly.com/assets/external/widget.js";

    script.type = "text/javascript";
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  const handleCalendlyPopup = (e) => {
    // e.preventDefault();

    // if (window.Calendly) {

    //   window.Calendly.initPopupWidget({
    //     url: 'https://calendly.com/jupitous1008/30min'
    //   });

    // } else {

    //   alert(
    //     "Booking system is loading, please try again in a moment!"
    //   );
    // }

    e.preventDefault();

    const calendlyUrl =
      "https://calendly.com/jupitous1008/30min";

    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: calendlyUrl,
      });
    } else {
      // Fallback: open booking page in new tab
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    }
  };

  const contactUSRef = useRef(null);


  const scrollToContactUS = () => {
    const element = contactUSRef.current;
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY - 100;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1500; // Slower scroll (1.5 seconds)
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, startPosition + distance * easeOutCubic);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="contact-container">

      {/* =========================
          HERO SECTION
      ========================= */}

      {/* 1. HERO SECTION */}
      <section className="about-hero">
        <div className="hero-container">
          {/* <span className="section-badge">ABOUT US</span> */}
          <h1>Contact Jupitous</h1>
          <p>
            We are here to help you with reliable energy solutions.
          </p>
          {/* <button className="btn-hero">
            Explore Our Journey <ArrowRight size={16} />
          </button> */}

          <a href="#" className="btn-hero" onClick={scrollToContactUS}>
            Let's Connect
            <span className="arrow">→</span>
          </a>
        </div>
      </section>

      {/* <header className="contact-hero">

        <div className="hero-overlay">

          <div className="hero-content">

            <h1>Contact Jupitous</h1>

            <p>
              We are here to help you with reliable energy solutions.
            </p>

            <a
              href="#support-channels"
              className="btn-primary"
            >
              Let's Connect
              <span className="arrow">→</span>
            </a>

          </div>
        </div>
      </header> */}

      {/* =========================
          MAIN SECTION
      ========================= */}

      <main
        ref={contactUSRef}
        id="support-channels"
        className="main-content"
      >

        <div className="grid-layout">

          {/* LEFT PANEL */}

          <section className="info-panel card">

            <h2>Get In Touch</h2>

            <div className="divider"></div>

            <div className="info-list">

              {/* ADDRESS */}

              <div className="info-item">

                <div className="icon-wrapper">
                  <MapPin />
                </div>

                <div>
                  <h3>Address</h3>

                  <p>
                    Plot No. 559, Patel Nagar, Gonda,
                    <br />
                    Uttar Pradesh, India, 271001
                  </p>
                </div>

              </div>

              {/* PHONE */}

              <div className="info-item">

                <div className="icon-wrapper">
                  <Phone />
                </div>

                <div>
                  <h3>Phone</h3>

                  <p>
                    <a href="tel:+918600898959">
                      +91 8600-898959
                    </a>
                  </p>
                </div>

              </div>

              {/* EMAIL */}

              <div className="info-item">

                <div className="icon-wrapper">
                  <Mail />
                </div>

                <div>
                  <h3>Email</h3>

                  <p>
                    <a href="mailto:contact@jupitous.com">
                      contact@jupitous.com
                    </a>
                  </p>
                </div>

              </div>

            </div>

            {/* SOCIAL LINKS */}

            <div className="social-box">

              <h4>Follow Us</h4>

              <div className="social-links">

                <a
                  className="social-icon"
                  href="https://www.linkedin.com/company/jupitous/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  className="social-icon"
                  href="https://www.instagram.com/life.with.jupitous/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="social-icon"
                >
                  <FaFacebookF />
                </a>

                <a
                  className="social-icon"
                  href="https://www.youtube.com/@life.with.jupitous"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>

              </div>
            </div>

            {/* MAP */}

            <div className="contact-map-wrapper">
              <MapContainer
                center={[27.133659, 81.969206]}
                zoom={15}
                dragging={false}
                touchZoom={false}
                doubleClickZoom={false}
                scrollWheelZoom={false}
                boxZoom={false}
                keyboard={false}
                zoomControl={false}
                attributionControl={false}
                className="contact-map"
              >

                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                  position={[27.133659, 81.969206]}
                  icon={customMarker}
                >

                  <Popup>
                    <strong>Jupitous Office</strong>
                    <br />
                    Plot No. 559, Patel Nagar,
                    Gonda, Uttar Pradesh, 271001
                  </Popup>

                </Marker>

              </MapContainer>
            </div>

          </section>

          {/* RIGHT PANEL */}

          <section className="channels-panel card">

            <h2>Our Support Channels</h2>

            <div className="divider"></div>

            <div className="channels-grid">

              {/* EMAIL */}

              <a
                href="mailto:contact@jupitous.com"
                className="channel-card"
              >

                <div className="channel-icon">
                  <Mail />
                </div>

                <h3>Direct Email</h3>

                <p>
                  Email us at contact@jupitous.com
                </p>

              </a>

              {/* PHONE */}

              <a
                href="tel:+918600898959"
                className="channel-card"
              >

                <div className="channel-icon">
                  <Phone />
                </div>

                <h3>Call Support</h3>

                <p>
                  Speak to an expert
                  +91 8600-898959
                </p>

              </a>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/918600898959"
                target="_blank"
                rel="noreferrer"
                className="channel-card"
              >

                <div className="channel-icon">
                  <MessageSquare />
                </div>

                <h3>WhatsApp Chat</h3>

                <p>Chat with us instantly</p>

              </a>

              {/* CALENDLY */}

              {/* <a
                className="channel-card functional-action"
                onClick={handleCalendlyPopup}
              >

                <div className="channel-icon">
                  <Calendar />
                </div>

                <h3>Book a Consultation</h3>

                <p>
                  Schedule a virtual meeting
                </p>

              </a> */}

              <button
                type="button"
                className="channel-card functional-action"
                onClick={handleCalendlyPopup}
              >

                <div className="channel-icon">
                  <Calendar />
                </div>

                <h3>Book a Free Consultation</h3>

                <p>
                  Speak with our energy experts and get the right solution for your needs.
                </p>

              </button>

            </div>
          </section>
        </div>
      </main>

      {/* =========================
          FEATURES SECTION
      ========================= */}

      <section className="features-section">

        <h2>Why Contact Jupitous?</h2>

        <div className="features-divider"></div>

        <div className="features-grid">

          <div className="feature-item">

            <div className="f-icon">
              <Headset />
            </div>

            <div>
              <h4>Fast Support</h4>

              <p>
                We respond within 24 hours
                to all inquiries.
              </p>
            </div>

          </div>

          <div className="feature-item">

            <div className="f-icon">
              <ShieldCheck />
            </div>

            <div>
              <h4>Trusted Quality</h4>

              <p>
                Premium quality batteries
                you can rely on.
              </p>
            </div>

          </div>

          <div className="feature-item">

            <div className="f-icon">
              <Truck />
            </div>

            <div>
              <h4>Nationwide Delivery</h4>

              <p>
                Delivering power solutions
                across India.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          FAQ SECTION
      ========================= */}

      <section className="faq-product-section">

        <div className="faq-layout">

          {/* FAQ BLOCK */}

          <div className="faq-block">

            <h2>
              Frequently Asked Questions
            </h2>

            <div className="faq-list">

              {faqData.map((item, idx) => (

                <div
                  key={idx}
                  className={`faq-item ${activeFAQ === idx
                    ? "active"
                    : ""
                    }`}
                >

                  {/* QUESTION */}

                  <div
                    className="faq-question"
                    onClick={() =>
                      toggleFAQ(idx)
                    }
                  >

                    <span>
                      {item.question}
                    </span>

                    <Plus
                      size={18}
                      className={
                        activeFAQ === idx
                          ? "rotate-icon"
                          : ""
                      }
                    />

                  </div>

                  {/* ANSWER */}

                  <div
                    className={`faq-answer ${activeFAQ === idx
                      ? "show-answer"
                      : ""
                      }`}
                  >

                    <p>{item.answer}</p>

                  </div>

                </div>

              ))}

            </div>
          </div>

          {/* PRODUCT SIDE */}

          <div className="product-showcase">

            <div className="product-card-wrapper">

              <div className="product-image-mock"></div>

              <div className="badge-trusted">

                <CheckCircle
                  size={32}
                  color="#0da85f"
                />

              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}