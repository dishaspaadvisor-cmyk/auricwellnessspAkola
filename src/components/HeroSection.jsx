// src/components/HeroSection.jsx

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import {
  Phone,
  ChevronDown,
} from "lucide-react";

import { siteData } from "../data/data";


export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = siteData.hero.slides;

  /*
   * CHANGE SLIDE
   *
   * Every 5 seconds the hero text changes.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        return (prev + 1) % slides.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const current = slides[currentSlide];

  /*
   * WHATSAPP MESSAGE
   */
  const whatsappMessage =
    "Hi, I am visiting the Aris Wellness Spa website. I would like to know about your spa services and today's availability.";

  const whatsappUrl = `${
    siteData.whatsappUrl
  }?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  /*
   * SCROLL
   */
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  /*
   * MANUAL SLIDE
   */
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="home-main-hero">

      {/* =====================================
          HERO CONTENT
      ====================================== */}

      <div className="home-hero-content">

        {/* EYEBROW */}

        <div className="home-hero-eyebrow">
          <span />

          {siteData.hero.eyebrow}

          <span />
        </div>


        {/* =====================================
            ANIMATED TITLE
        ====================================== */}

        <div
          className="home-hero-title-wrapper"
          key={currentSlide}
        >

          <h1 className="home-hero-title">

            <span className="hero-title-main">
              {current.title}
            </span>

            <strong className="hero-title-highlight">
              {current.highlight}
            </strong>

          </h1>


          {/* DESCRIPTION */}

       

        </div>


        {/* =====================================
            BUTTONS
        ====================================== */}

        <div className="home-hero-buttons">

          {/* CALL */}

          <a
            href={siteData.phoneUrl}
            className="hero-call-button"
          >
            <Phone size={18} />

            <span>
              Call Now
            </span>
          </a>


          {/* WHATSAPP */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hero-whatsapp-button"
          >
            <FaWhatsapp size={18} />

            <span>
              WhatsApp
            </span>
          </a>

        </div>


        {/* =====================================
            SLIDE INDICATORS
        ====================================== */}

        <div className="hero-slide-indicators">

          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              className={
                currentSlide === index
                  ? "hero-slide-dot active"
                  : "hero-slide-dot"
              }
              onClick={() =>
                goToSlide(index)
              }
            />
          ))}

        </div>

      </div>


      {/* =====================================
          EXPLORE BUTTON
      ====================================== */}

      <button
        type="button"
        className="hero-scroll-button"
        onClick={scrollToContent}
      >
        <span>
          Explore
        </span>

        <ChevronDown size={20} />
      </button>

    </section>
  );
}