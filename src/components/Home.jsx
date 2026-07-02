import { useEffect } from "react";
import "../style/Home.scss";
import IntroSlider from "./IntroSlider";
import FeatureStrip from "./FeatureStrip";
import Products from "./Products";
import StatsSection from "./StatsSection";
import DistributorBanner from "./DistributorBanner";
import Testimonials from "./Testimonials";

function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // 👈 EXIT animation
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <IntroSlider />
      
      <FeatureStrip />
      {/* <div className="bg-circle bg-circle-1"></div> */}
      {/* <div className="bg-circle bg-circle-2"></div> */}
      
      <Products />

      <StatsSection />
      <DistributorBanner />
      <Testimonials />
    </>
  );
}

export default Home;
