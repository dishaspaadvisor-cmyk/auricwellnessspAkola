// src/components/ServiceCard.jsx

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { siteData } from "../data/data";

export default function ServiceCard({
  image,
  title,
  description,
}) {
  const whatsappMessage = `Hi, I am visiting the Aris Wellness Spa website. I would like to know more about ${title}. Please share details and today's availability.`;

  const whatsappUrl = `${siteData.whatsappUrl}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <article className="service-card">
      <div className="service-card-image-wrap">
        <img
          src={image}
          alt={`${title} at Aris Wellness Spa Akola`}
          className="service-card-image"
          loading="lazy"
        />
      </div>

      <div className="service-card-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="service-card-actions">
          <a
            href={siteData.phoneUrl}
            className="service-card-call-btn"
            aria-label={`Call for ${title}`}
          >
            <Phone size={17} />
            <span>Call Now</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="service-card-whatsapp-btn"
            aria-label={`WhatsApp for ${title}`}
          >
            <FaWhatsapp size={19} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}