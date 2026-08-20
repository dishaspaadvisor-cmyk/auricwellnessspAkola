// src/components/FloatingButtons.jsx

import {
  Phone,
  Share2,
} from "lucide-react";

import {
  FaWhatsapp,
} from "react-icons/fa";

import { siteData } from "../data/data";

export default function FloatingButtons() {
  const contact = siteData.contact;

  const whatsappMessage =
    "Hi, I am visiting the Aris Wellness Spa website. I would like to know more about your spa services and today's availability.";

  const whatsappUrl = `${
    contact?.whatsappUrl ||
    siteData.whatsappUrl
  }?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleShare = async () => {
    const shareData = {
      title: siteData.name,
      text:
        "Check out Aris Wellness Spa for premium spa and wellness services.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(
          shareData
        );
      } else {
        await navigator.clipboard.writeText(
          window.location.href
        );

        alert(
          "Website link copied!"
        );
      }
    } catch (error) {
      console.log(
        "Share cancelled:",
        error
      );
    }
  };

  return (
    <div className="floating-action-wrapper">

      {/* CALL */}

      <a
        href={
          contact?.phoneUrl ||
          siteData.phoneUrl
        }
        className="
          floating-action-item
          floating-call
        "
        aria-label="Call Aris Wellness Spa"
      >
        <span className="floating-action-label">
          Call Now
        </span>

        <span className="floating-action-button">
          <Phone size={21} />
        </span>
      </a>

      {/* WHATSAPP */}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="
          floating-action-item
          floating-whatsapp
          floating-pulse
        "
        aria-label="WhatsApp Aris Wellness Spa"
      >
        <span className="floating-action-label">
          WhatsApp
        </span>

        <span className="floating-action-button">
          <FaWhatsapp size={23} />
        </span>
      </a>

      {/* SHARE */}

      <button
        type="button"
        onClick={handleShare}
        className="
          floating-action-item
          floating-share
        "
        aria-label="Share Aris Wellness Spa"
      >
        <span className="floating-action-label">
          Share
        </span>

        <span className="floating-action-button">
          <Share2 size={20} />
        </span>
      </button>

    </div>
  );
}