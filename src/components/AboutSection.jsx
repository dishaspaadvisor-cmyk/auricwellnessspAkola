// src/components/AboutSection.jsx

import {
  Flower2,
  Sparkles,
  Heart,
} from "lucide-react";

import { aboutData } from "../data/data";

const icons = [
  Flower2,
  Sparkles,
  Heart,
];

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-section-container">

        {/* LEFT CONTENT */}

        <div className="about-section-content">
          <span className="about-small-title">
            {aboutData.smallTitle}
          </span>

          <h2>
            {aboutData.title}
          </h2>

          <p>
            {aboutData.description1}
          </p>

          <p>
            {aboutData.description2}
          </p>

          <div className="about-values">
            {aboutData.values.map(
              (value) => (
                <span key={value}>
                  {value}
                </span>
              )
            )}
          </div>
        </div>

        {/* RIGHT CARD */}

        <div className="about-feature-box">
          <div className="about-feature-inner">
            <img
              src="/service/31.png"
              alt="Aris Wellness Spa"
              className="about-feature-image"
            />
          </div>
        </div>
      </div>

      {/* HIGHLIGHTS */}

      <div className="about-highlights-container">
        <div className="about-highlights-grid">
          {aboutData.highlights.map(
            (item, index) => {
              const Icon =
                icons[index];

              return (
                <article
                  key={item.id}
                  className="about-highlight-card"
                >
                  <span className="about-highlight-number">
                    {item.number}
                  </span>

                  <div className="about-highlight-icon">
                    <Icon size={28} />
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {
                      item.description
                    }
                  </p>
                </article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}