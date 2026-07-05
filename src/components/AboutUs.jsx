import React, { useRef } from 'react';
import {
  ShieldCheck, Zap, Leaf, Headset,
  BatteryCharging, Cpu, Globe, Award,
  Sun, HardDrive, Factory, House, Home, Lightbulb,
  ArrowRight, CheckCircle2, ChevronRight,
  ClipboardCheck, Clock, BadgeCheck, Handshake 
} from 'lucide-react';
import '../style/AboutUs.scss';

export default function AboutUs() {
  const aboutUsRef = useRef(null);

  const scrollToAboutUS = () => {
    const element = aboutUsRef.current;
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
    <div className="about-page">

      {/* 1. HERO SECTION */}
      <section className="about-hero">
        <div className="hero-container">
          {/* <span className="section-badge">ABOUT US</span> */}
          <h1>About Jupitous</h1>
          <p>
            We are committed to delivering reliable, efficient and innovative energy
            solutions that power a better tomorrow for everyone.
          </p>
          {/* <button className="btn-hero">
            Explore Our Journey <ArrowRight size={16} />
          </button> */}

          <a href="#" className="btn-hero" onClick={scrollToAboutUS}>
            Explore Our Journey
            <span className="arrow">→</span>
          </a>
        </div>
      </section>

      {/* 2. CORE PILLARS */}
      <section className="core-pillars" id='our-story' ref={aboutUsRef}>
        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="icon-box"><BadgeCheck /></div>
            <h3>Quality First</h3>
            <p>High performance products built with strict quality standards.</p>
          </div>
          <div className="pillar-card">
            <div className="icon-box"><Cpu /></div>
            <h3>Innovative Solutions</h3>
            <p>Advanced technology providing smarter and efficient energy.</p>
          </div>
          <div className="pillar-card">
            <div className="icon-box"><Leaf /></div>
            <h3>Sustainable Future</h3>
            <p>Eco-friendly approach towards a cleaner and greener tomorrow.</p>
          </div>
          <div className="pillar-card">
            <div className="icon-box"><Handshake /></div>
            <h3>Customer Support</h3>
            <p>Dedicated support to help you at every step of the way.</p>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY SECTION + HORIZONTAL BADGE STRIP */}
      <section className="our-story-section">
        <div className="story-container">
          <div className="story-visuals">
            <div className="circle-bg-graphic">
              {/* <div className="battery-display tall">
                <div className="battery-head"><span></span><span></span><span></span></div>
                <div className="battery-main-body">
                  <div className="brand-text">⚡ JUPITOUS</div>
                  <small>TUBULAR BATTERY</small>
                </div>
              </div> */}
              {/* <div className="battery-display short-dark">
                <div className="battery-main-body">
                  <div className="brand-text">JUPITOUS</div>
                </div>
              </div>
              <div className="badge-energy-pulse">⚡</div> */}
            </div>
          </div>

          <div className="story-content" id='story-content'>
            <span className="sub-badge">OUR STORY</span>
            <h2>Powering Possibilities With <span className="highlight_energy">Reliable Energy</span></h2>
            <p>
              Jupitous was founded with a vision to make powerful and reliable energy solutions
              accessible to every home, business and industry.
            </p>
            <p>
              We focus on delivering high performance batteries and energy products that ensure
              long backup, efficiency and peace of mind. Our mission is to combine innovation,
              quality and trust to create energy solutions that support a better and more sustainable future.
            </p>
          </div>
        </div>

        {/* --- HORIZONTAL FEATURES STRIP (image_153006.png Integration) --- */}
        <div className="horizontal-metrics-strip">
          <div className="metric-strip-item">
            <div className="metric-icon-box">
              <ShieldCheck strokeWidth={1.5} />
            </div>
            <span className="metric-label">Reliable Performance</span>
          </div>

          <div className="metric-strip-item">
            <div className="metric-icon-box">
              <BatteryCharging strokeWidth={1.5} />
            </div>
            <span className="metric-label">Long Lasting Backup</span>
          </div>

          <div className="metric-strip-item">
            <div className="metric-icon-box">
              <Cpu strokeWidth={1.5} />
            </div>
            <span className="metric-label">Advanced Technology</span>
          </div>

          <div className="metric-strip-item">
            <div className="metric-icon-box">
              <Leaf strokeWidth={1.5} />
            </div>
            <span className="metric-label">Better For The Planet</span>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US VALUE TILES */}
      <section className="why-choose-section">
        <span className="sub-badge centered">WHY CHOOSE JUPITOUS</span>
        <h2 className="section-title centered">Energy Solutions You Can Count On</h2>


        <div className="values-grid">
          <div className="value-tile">
            <ShieldCheck className="tile-icon" />
            <h4>High Performance</h4>
            <p>Built for consistent power and maximum efficiency.</p>
          </div>
          <div className="value-tile">
            <BatteryCharging className="tile-icon" />
            <h4>Long Battery Life</h4>
            <p>Designed to deliver longer life and superior backup.</p>
          </div>
          <div className="value-tile">
            <Leaf className="tile-icon" />
            <h4>Energy Efficient</h4>
            <p>Optimized technology that saves energy and reduces waste.</p>
          </div>
          <div className="value-tile">
            <Cpu className="tile-icon" />
            <h4>Advanced Technology</h4>
            <p>Smart features for better safety, performance and durability.</p>
          </div>
          <div className="value-tile">
            <Headset className="tile-icon" />
            <h4>Dedicated Support</h4>
            <p>We are always here to support you whenever needed.</p>
          </div>
        </div>
      </section>

      {/* 5. EXPERTISE & APPLICATIONS */}
      <section className="expertise-section">
        <span className="sub-badge centered">OUR EXPERTISE</span>
        <h2 className="section-title centered">Areas Where We Make An Impact</h2>

        <div className="expertise-row">
          <div className="expert-item">
            <div className="exp-icon"><Sun /></div>
            <h5>Solar Energy Solutions</h5>
          </div>
          <div className="expert-item">
            <div className="exp-icon"><BatteryCharging /></div>
            <h5>Battery Technology</h5>
          </div>
          <div className="expert-item">
            <div className="exp-icon"><Cpu /></div>
            <h5>Power Backup Solutions</h5>
          </div>
          <div className="expert-item">
            <div className="exp-icon"><Factory /></div>
            <h5>Industrial Applications</h5>
          </div>
          <div className="expert-item">
            <div className="exp-icon"><House /></div>
            <h5>Home Energy Solutions</h5>
          </div>
          <div className="expert-item">
            <div className="exp-icon"><Zap /></div>
            <h5>Smart Energy Innovation</h5>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BLOCK */}
      <section className="cta-banner-section">
        <div className="cta-card">
          <div className="cta-text-side">
            <h2>Let's Build A Brighter And Greener Tomorrow</h2>
            <p>Join hands with Jupitous and experience reliable energy solutions that empower your world.</p>
            <button onClick={() => window.location.href = '/contact'} className="btn-white">Get In Touch <ArrowRight size={16} /></button>
          </div>
          <div className="cta-graphic-side">
            {/* <div className="battery-standalone">
              <div className="caps"><span></span><span></span><span></span></div>
              <div className="body">
                <div className="logo-text">⚡ JUPITOUS</div>
                <div className="badge-glow">⚡</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="trust-footer-strip">
          <div className="strip-item">
            <CheckCircle2 size={18} /> <span>Safe & Reliable Products</span>
          </div>
          <div className="strip-item">
            <CheckCircle2 size={18} /> <span>Trusted By Customers</span>
          </div>
          <div className="strip-item">
            <CheckCircle2 size={18} /> <span>Quality You Can Count On</span>
          </div>
          <div className="strip-item">
            <CheckCircle2 size={18} /> <span>Always Here To Support</span>
          </div>
        </div>
      </section>

    </div>
  );
}