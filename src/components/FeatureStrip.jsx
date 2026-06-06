import {
  ShieldCheck,
  Zap,
  Leaf,
  Headphones,
} from "lucide-react";

import "../style/FeatureStrip.scss";

const features = [
  {
    icon: ShieldCheck,
    title: "Reliable & Safe",
    desc: "High quality products for long lasting usage.",
    color: "#22c55e",
  },
  {
    icon: Zap,
    title: "High Performance",
    desc: "Advanced technology for maximum efficiency.",
    color: "#2563eb",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    desc: "Clean energy solutions for a better tomorrow.",
    color: "#22c55e",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "24/7 support for all your needs.",
    color: "#2563eb",
  },
];

export default function FeatureStrip() {
  const circleStyle = { top: "50px" };

  return (
    <div className="feature-strip-wrapper">
      <div className="feature-strip-card">
        <div className="feature-strip-container">
          <div className="bg-circle bg-circle-1" style={circleStyle}></div>

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`feature-item ${
                  index !== features.length - 1 ? "border-right" : ""
                }`}
              >
                {/* ICON */}
                <div className="feature-icon-box">
                  <Icon
                    size={30}
                    color={item.color}
                    strokeWidth={2}
                  />
                </div>

                {/* TEXT */}
                <div className="feature-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}