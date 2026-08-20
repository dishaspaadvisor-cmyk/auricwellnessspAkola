// src/components/OfferCard.jsx

import {
  Phone,

  
  ArrowRight,
} from "lucide-react";

import { siteData } from "../data/data";
import { FaWhatsapp } from "react-icons/fa";

export default function OfferCard({
  image,
  badge,
  title,
  offerText,
  description,
  whatsappMessage,
}) {
  const whatsappUrl =
    `${siteData.whatsappUrl}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  return (
    <article className="premium-offer-card">

      {/* IMAGE */}
      <div className="premium-offer-image-area">

        <img
          src={image}
          alt={title}
          className="premium-offer-image"
          loading="lazy"
        />

        <div className="premium-offer-image-overlay" />

        {badge && (
          <span className="premium-offer-badge">
            {badge}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="premium-offer-content">

   

        {/* BUTTONS */}
        <div className="premium-offer-actions">

          <a
            href={siteData.phoneUrl}
            className="premium-offer-call"
          >
            <Phone size={17} />
            Call Now
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="premium-offer-whatsapp"
          >
            <FaWhatsapp size={17} />
            WhatsApp
          </a>

        </div>



      </div>

    </article>
  );
}