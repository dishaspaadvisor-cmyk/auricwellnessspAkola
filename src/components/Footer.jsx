// src/components/Footer.jsx

import { Link } from "react-router-dom";

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";

import {
  siteData,
  footerData,
} from "../data/data";

export default function Footer() {
  const contact = siteData.contact;

  const whatsappMessage =
    "Hi, I am visiting the Aris Wellness Spa website. I would like to know more about your spa services and today's availability.";

  const whatsappUrl = `${contact.whatsappUrl
    }?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  return (
    <footer className="site-footer">
      {/* DECORATION */}
      <div className="footer-decoration footer-decoration-one" />
      <div className="footer-decoration footer-decoration-two" />

      <div className="footer-container">
        {/* =============================
            MAIN FOOTER
        ============================== */}

        <div className="footer-main-grid">
          {/* BRAND */}

          <div className="footer-brand-column">
         


             <Link
              to="/"
              className="main-logo"
              aria-label={`${siteData.name} - Spa in Akola`}
            >
              <img
                src="/logo/favicon.png"
                alt={`${siteData.name} Spa in Akola`}
                className="main-logo-image"
              />
            </Link> 

            <p className="footer-description">
              {footerData.description}
            </p>

            {/* SOCIAL */}

            <div className="footer-socials">
              <a
                href={footerData.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Aris Wellness Spa Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href={footerData.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Aris Wellness Spa Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href={footerData.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="Aris Wellness Spa YouTube"
              >
                <FaYoutube />
              </a>

              <a
                href={footerData.socialLinks.pinterest}
                target="_blank"
                rel="noreferrer"
                aria-label="Aris Wellness Spa Pinterest"
              >
                <FaPinterestP />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Contact Aris Wellness Spa on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* SERVICES */}

          <div className="footer-column">
            <span className="footer-column-small">
              Wellness
            </span>

            <h3>
              Our Services
            </h3>

            <ul className="footer-link-list">
              {footerData.services.map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      aria-label={`${service} in Akola`}
                    >
                      <ArrowRight size={13} />

                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* QUICK LINKS */}

          <div className="footer-column">
            <span className="footer-column-small">
              Explore
            </span>

            <h3>
              Quick Links
            </h3>

            <ul className="footer-link-list">
              {footerData.quickLinks.map(
                (link) => (
                  <li key={link.path}>
                    <Link to={link.path}>
                      <ArrowRight size={13} />

                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}

          <div className="footer-column footer-contact-column">
            <span className="footer-column-small">
              Contact
            </span>

            <h3>
              Visit Aris Wellness Spa in , Akola
            </h3>

            <div className="footer-contact-list">
              {/* ADDRESS */}

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <MapPin size={18} />
                </div>

                <div>
                  <span>
                    Address
                  </span>

                  <p>
                    {contact.address}
                  </p>
                </div>
              </div>

              {/* PHONE */}

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Phone size={18} />
                </div>

                <div>
                  <span>
                    Call Us
                  </span>

                  <a href={contact.phoneUrl}>
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* EMAIL */}

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Mail size={18} />
                </div>

                <div>
                  <span>
                    Email
                  </span>

                  <a href={contact.emailUrl}>
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* HOURS */}

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Clock3 size={18} />
                </div>

                <div>
                  <span>
                    Opening Hours
                  </span>

                  <p>
                    {contact.days}
                    <br />
                    {contact.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =============================
            LOCAL SEO CONTENT
        ============================== */}

        <div className="footer-seo-content">
          <h2>
            Spa & Massage Services in , Akola
          </h2>

          <p>
            Aris Wellness Spa in  Akola offers
            premium wellness and massage services including{" "}
            <strong>full body massage</strong>,{" "}
            <strong>Thai massage</strong>,{" "}
            <strong>deep tissue massage</strong>,{" "}
            <strong>Swedish massage</strong>,{" "}
            <strong>hot oil massage</strong>,{" "}


            <strong>foot reflexology</strong> and relaxing
            spa therapies.
          </p>

          <p>
            If you are searching for a{" "}
            <strong>spa near me</strong>,{" "}
            <strong>massage near me</strong>,{" "}
            <strong>body massage in Akola</strong>,{" "}
            <strong>luxury spa in Akola</strong> or a{" "}
            <strong>massage spa in Akola</strong>,
            connect with Aris Wellness Spa for service information
            and today's availability.
          </p>
        </div>

        {/* =============================
            WHATSAPP CTA
        ============================== */}

        <div className="footer-contact-cta">
          <div>
            <span>
              Need Help Choosing A Service?
            </span>

            <h3>
              Speak With Our Team Today
            </h3>
          </div>

          <div className="footer-cta-buttons">
            <a
              href={contact.phoneUrl}
              className="footer-call-button"
              aria-label="Call Aris Wellness Spa Akola"
            >
              <Phone size={17} />
              Call Now
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp-button"
              aria-label="WhatsApp Aris Wellness Spa Akola"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* =============================
            COPYRIGHT
        ============================== */}

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()}{" "}
            {siteData.name}. All rights reserved.
          </p>

          <div>
            <span>
              Relax
            </span>

            <i />

            <span>
              Refresh
            </span>

            <i />

            <span>
              Rejuvenate
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}