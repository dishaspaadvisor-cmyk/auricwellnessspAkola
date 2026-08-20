// src/pages/ServicesPage.jsx

import { Helmet } from "react-helmet-async";

import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";

import { servicesData } from "../data/data";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>
          Best Spa in Akola | Full Body Massage & Thai Massage
        </title>

        <meta
          name="description"
          content="Visit Aris Wellness Spa at Bill Mart Commercial Complex, Washim Bypass Chowk, Balapur Road, Shivsena Nagar, Akola for full body massage, Body to Body Massage, Nuru Massage, deep tissue massage, Sandwich Massage, couple spa and premium wellness therapies."
        />

        <meta
          name="keywords"
          content="
            Aris Wellness Spa,
            Aris Wellness Spa Akola,

            spa in Akola,
            best spa in Akola,
            massage spa in Akola,

            spa near Balapur Road Akola,
            spa near Washim Bypass Akola,
            spa near Washim Bypass Chowk Akola,
            spa near Shivsena Nagar Akola,
            spa near Nafees Bagh Akola,
            spa near Bill Mart Commercial Complex Akola,

            full body massage in Akola,
            full body massage near Akola,
            full body massage near me,

            Thai massage in Akola,
            Thai massage near Balapur Road Akola,
            Thai massage near Washim Bypass Akola,
            Thai massage near me,

            deep tissue massage in Akola,
            deep tissue massage near Balapur Road Akola,
            deep tissue massage near Washim Bypass Akola,
            deep tissue massage near me,

            Swedish massage in Akola,
            Swedish massage near Balapur Road Akola,
            Swedish massage near me,

            hot oil massage in Akola,
            hot oil massage near me,

            four hand massage in Akola,
            female to male massage in Akola,

            body massage in Akola,
            body massage near me,

            body spa in Akola,
            body spa near me,

            luxury spa in Akola,
            luxury spa near me,

            wellness spa in Akola,
            wellness center in Akola,

            day spa in Akola,
            day spa near me,

            couple spa in Akola,
            couple spa near me,

            couple massage in Akola,
            romantic couple massage in Akola,
            couple romantic massage in Akola,

            aromatherapy massage in Akola,
            reflexology in Akola,
            Ayurvedic massage in Akola,
            head massage in Akola,
            foot massage in Akola,
            back massage in Akola,

            stress relief massage in Akola,
            pain relief massage in Akola,
            spa therapy in Akola,
            neck and shoulder massage in Akola,
            Balinese massage in Akola,
            Hot oil Massage in Akola,

            professional massage therapist in Akola,
            spa packages in Akola,

            spa near me,
            massage near me,
            massage spa near me,
            massage center near me,

            best massage spa near me,
            best body massage near me,
            best body spa near me,

            nearest spa center,
            nearby spa massage
          "
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta
          property="og:title"
          content="Aris Wellness Spa Akola | Full Body Massage & Spa Services"
        />

        <meta
          property="og:description"
          content="Discover premium massage services at Aris Wellness Spa, Bill Mart Commercial Complex, Washim Bypass Chowk, Balapur Road, Akola including full body massage, Thai massage, deep tissue massage, Swedish massage and wellness therapies."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="Aris Wellness Spa"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Aris Wellness Spa Akola | Massage & Wellness"
        />

        <meta
          name="twitter:description"
          content="Explore full body massage, Thai massage, deep tissue massage, Swedish massage and premium spa services at Bill Mart Commercial Complex, Balapur Road, Akola."
        />
      </Helmet>

      <PageHero
        title="Our Services"
        description="Explore premium spa and massage services at Aris Wellness Spa, Bill Mart Commercial Complex, Washim Bypass Chowk, Balapur Road, Shivsena Nagar (Nafees Bagh), Akola - 444002, Maharashtra, including full body massage, Sandwich Massage, Nuru Massage, Body to Body Massage, Swedish massage, hot oil massage, aromatherapy massage, Balinese massage, foot reflexology, couple spa, female to male massage and relaxing spa packages."
      />

      <section className="services-main-section">
        <div className="services-main-container">
          <div className="services-main-grid">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}