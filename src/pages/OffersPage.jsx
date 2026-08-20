// src/pages/OffersPage.jsx

import { Helmet } from "react-helmet-async";

import PageHero from "../components/PageHero";
import OfferCard from "../components/OfferCard";

import { offersData } from "../data/data";

export default function OffersPage() {
  return (
    <>
      <Helmet>
        <title>
          Spa Offers in Akola | Massage Offers | Aris Wellness Spa
        </title>

        <meta
          name="description"
          content="Discover special spa offers in Akola at Aris Wellness Spa, Bill Mart Commercial Complex, Washim Bypass Chowk, Balapur Road, Shivsena Nagar. Explore full body massage, Thai massage, deep tissue massage, Swedish massage, couple spa and luxury wellness packages."
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

            spa near me,
            massage near me,

            full body massage in Akola,
            full body massage near me,

            Thai massage in Akola,
            Thai massage near Balapur Road Akola,
            Thai massage near Washim Bypass Akola,

            deep tissue massage in Akola,
            deep tissue massage near Balapur Road Akola,

            Swedish massage in Akola,
            Swedish massage near Balapur Road Akola,

            hot oil massage in Akola,
            four hand massage in Akola,
            female to male massage in Akola,

            couple spa in Akola,
            couple spa near me,

            couple massage in Akola,
            romantic couple massage in Akola,
            couple romantic massage in Akola,

            luxury spa in Akola,
            luxury spa near me,

            wellness spa in Akola,
            wellness center in Akola,

            day spa in Akola,
            day spa near me,

            body massage in Akola,
            body massage near me,

            body spa in Akola,
            body spa near me,

            massage center in Akola,
            massage center near me,

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
            spa packages near me,

            spa offers in Akola,
            massage offers in Akola,
            wellness packages in Akola,

            special spa offers Akola,
            best spa offers Akola,
            massage packages Akola,
            luxury spa packages Akola,

            spa offers near Balapur Road Akola,
            massage offers near Balapur Road Akola,
            spa packages near Washim Bypass Akola,
            massage packages near Washim Bypass Akola,

            nearby spa massage,
            nearby massage center,
            nearest spa center,
            best massage spa near me
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
          content="Spa Offers in Akola | Aris Wellness Spa"
        />

        <meta
          property="og:description"
          content="Explore exclusive spa and massage offers at Aris Wellness Spa, Bill Mart Commercial Complex, Washim Bypass Chowk, Balapur Road, Shivsena Nagar, Akola."
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
          content="Spa Offers in Akola | Aris Wellness Spa"
        />

        <meta
          name="twitter:description"
          content="Discover massage offers, spa packages and wellness treatments at Aris Wellness Spa, Bill Mart Commercial Complex, Balapur Road, Akola."
        />
      </Helmet>

      <PageHero
        title="Special Offers"
        description="Discover exclusive spa offers and wellness packages at Aris Wellness Spa, Shop Nos. TD-19, TD-20 & TD-21, Third Floor, Bill Mart Commercial Complex, Washim Bypass Chowk, Balapur Road, Shivsena Nagar (Nafees Bagh), Akola - 444002, Maharashtra."
      />

      <section className="premium-offers-section">
        <div className="premium-offers-container">

          {/* HEADING */}
          <div className="premium-offers-heading">
            <span>
              Exclusive Wellness Offers
            </span>

            <h2>
              Relax More.
              <strong>
                {" "}Enjoy More.
              </strong>
            </h2>

            <p>
              Choose from our selected spa offers and
              discover the perfect wellness experience
              for yourself or someone special.
            </p>
          </div>

          {/* CARDS */}
          <div className="premium-offers-grid">
            {offersData.map((offer) => (
              <OfferCard
                key={offer.id}
                {...offer}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}