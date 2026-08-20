// src/pages/HomePage.jsx

import { Link } from "react-router-dom";

import {
    ArrowRight,
    Phone,
    MessageCircle,
} from "lucide-react";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceCard from "../components/ServiceCard";
import OfferCard from "../components/OfferCard";
import GalleryCard from "../components/GalleryCard";

import PageHero from "../components/PageHero";
import ContactCard from "../components/ContactCard";
import ReviewSection from "../components/ReviewSection";

import {
    siteData,
    servicesData,
    offersData,
    galleryData,
} from "../data/data";
import FaqSection from "../components/FaqSection";

export default function HomePage() {
    // Show selected cards on homepage
    const homeServices = servicesData.slice(0, 6);
    const homeOffers = offersData.slice(0, 3);
    const homeGallery = galleryData.slice(0, 6);

    return (
        <>
            {/* =====================================
          HERO
      ====================================== */}

            <HeroSection />

            {/* =====================================
          ABOUT
      ====================================== */}

            <AboutSection />

            {/* =====================================
          SERVICES
      ====================================== */}
            <section className="home-services-section">
                <div className="home-services-decoration home-services-decoration-one" />
                <div className="home-services-decoration home-services-decoration-two" />

                <div className="home-container">

                    {/* HEADING */}
                    <div className="home-services-heading">
                        <div className="home-services-eyebrow">
                            <span />
                            Premium Treatments
                            <span />
                        </div>

                        <h2>
                            <strong> Our Services</strong>
                        </h2>

                        <p>
                            Thoughtfully selected spa treatments designed to
                            relax your body, calm your mind and give you a
                            refreshing wellness experience.
                        </p>
                    </div>

                    {/* SERVICES GRID */}
                    <div className="home-services-grid-wrapper">
                        <div className="services-main-grid">
                            {homeServices.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    {...service}
                                />
                            ))}
                        </div>
                    </div>

                    {/* VIEW ALL */}
                    <div className="home-services-footer">
                        <div className="home-services-footer-line" />

                        <Link
                            to="/services"
                            className="home-services-view-button"
                        >
                            <span>
                                Explore All Services
                            </span>

                            <span className="home-services-button-icon">
                                <ArrowRight size={17} />
                            </span>
                        </Link>

                        <div className="home-services-footer-line" />
                    </div>

                </div>
            </section>

            {/* =====================================
          OFFERS
      ====================================== */}

             <section className="home-offers-section">
                <div className="home-container">
                    <div className="home-section-heading text-white">
                        <span className="home-section-eyebrow text">
                            Exclusive Wellness
                        </span>

                        <h2>
                            Special
                            <strong> Offers</strong>
                        </h2>

                        <p>
                            Explore our exclusive spa offers for couples,
                            wellness services and members.
                        </p>
                    </div>

                    <div className="premium-offers-grid">
                        {homeOffers.map((offer) => (
                            <OfferCard
                                key={offer.id}
                                {...offer}
                            />
                        ))}
                    </div>

                </div>
            </section> 

            {/* =====================================
          GALLERY
      ====================================== */}

            <section className="home-gallery-section">
                <div className="home-container">
                    <div className="home-section-heading">
                        <span>
                            Our Spa
                        </span>

                        <h2>
                            Explore Our
                            <strong> Gallery</strong>
                        </h2>

                        <p>
                            Take a look at our relaxing spa ambience,
                            wellness rooms and premium environment.
                        </p>
                    </div>

                    <div className="gallery-main-grid">
                        {homeGallery.map((item) => (
                            <GalleryCard
                                key={item.id}
                                {...item}
                            />
                        ))}
                    </div>

                </div>
            </section>

            <ContactCard />
            <FaqSection />

                 
           {/* REVIEWS */}
           <ReviewSection />

            {/* =====================================
          FINAL CTA
      ====================================== */}


      

        </>
    );
}