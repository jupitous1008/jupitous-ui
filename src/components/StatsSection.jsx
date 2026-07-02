import React from "react";
import "../style/home.scss";
import { statsData } from "../data/statsData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((item) => {
          const Icon = item.icon;

          return (
            <div className="stat-card" key={item.id}>
              <div className="icon">
                <FontAwesomeIcon icon={item.icon} size="lg" />
              </div>

              <div className="content">
                {item.value && <h3>{item.value}</h3>}
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;