// src/pages/GalleryPage.jsx

import { Helmet } from "react-helmet-async";

import PageHero from "../components/PageHero";
import GalleryCard from "../components/GalleryCard";

import { galleryData } from "../data/data";

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>
          Aris Wellness Spa Gallery Akola | Luxury Spa, Massage & Wellness
          Ambience
        </title>

        <meta
          name="description"
          content="Explore the Aris Wellness Spa gallery at Bill Mart Commercial Complex, Washim Bypass Chowk, Balapur Road, Shivsena Nagar, Akola. Discover our relaxing spa ambience, premium massage rooms, luxury wellness spaces and peaceful environment."
        />

        <meta
          name="keywords"
          content="
            Aris Wellness Spa gallery,
            Aris Wellness Spa Akola gallery,
            spa gallery in Akola,
            spa in Akola,
            best spa in Akola,
            spa near me,
            massage near me,

            spa near Balapur Road Akola,
            spa near Washim Bypass Akola,
            spa near Washim Bypass Chowk Akola,
            spa near Shivsena Nagar Akola,
            spa near Nafees Bagh Akola,
            spa near Bill Mart Commercial Complex Akola,

            luxury spa in Akola,
            luxury spa near me,
            wellness spa in Akola,
            wellness center in Akola,
            spa wellness center near me,

            full body massage in Akola,
            full body massage near me,

            Thai massage in Akola,
            Thai massage near Balapur Road Akola,
            Thai massage near Washim Bypass Akola,
            Thai massage near me,

            deep tissue massage in Akola,
            deep tissue massage near Balapur Road Akola,
            deep tissue massage near Washim Bypass Akola,

            Swedish massage in Akola,
            Swedish massage near Balapur Road Akola,
            Swedish massage near Washim Bypass Akola,

            hot oil massage in Akola,
            hot oil massage near Balapur Road Akola,
            hot oil massage near Washim Bypass Akola,

            body spa in Akola,
            body spa near me,

            massage spa in Akola,
            massage spa near Balapur Road Akola,
            massage spa near Washim Bypass Akola,
            massage spa near me,

            couple spa in Akola,
            couple spa near me,
            couple massage in Akola,
            romantic couple massage,

            day spa in Akola,
            day spa near me,
            nearest day spa,

            relaxation spa in Akola,
            relaxation massage in Akola,
            relaxation massage near me,

            spa experience in Akola,
            luxury spa experience,
            premium spa experience,

            spa ambience in Akola,
            luxury spa ambience,
            relaxing spa ambience,
            peaceful spa environment,

            spa rooms in Akola,
            massage rooms in Akola,
            luxury massage rooms in Akola,
            premium spa rooms in Akola,

            spa interior in Akola,
            luxury spa interior in Akola,
            wellness spa interior in Akola,

            spa photos Akola,
            massage spa photos,
            luxury spa photos,
            wellness spa gallery,

            aromatherapy massage in Akola,
            Balinese massage in Akola,
            Ayurvedic massage in Akola,
            Hot oil Massage in Akola,

            head massage in Akola,
            back massage in Akola,
            neck and shoulder massage in Akola,

            stress relief massage in Akola,
            pain relief massage in Akola,
            spa therapy in Akola,
            massage therapy in Akola,

            professional massage therapist in Akola,
            premium massage services in Akola,
            spa and massage services in Akola,

            best spa near me,
            best massage spa near me,
            best body massage near me,
            best body spa near me,

            massage center in Akola,
            massage center near me,

            nearest spa centre,
            nearest spa center,
            nearby spa massage,
            nearby spa center,
            nearby massage center,

            local spa treatments near me,

            luxury massage spa in Akola,
            luxury massage spa near me,

            spa packages in Akola,
            spa packages near me
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
          content="Aris Wellness Spa Gallery Akola | Luxury Spa & Wellness Experience"
        />

        <meta
          property="og:description"
          content="View the Aris Wellness Spa gallery at Bill Mart Commercial Complex, Washim Bypass Chowk, Balapur Road, Akola, featuring relaxing spa ambience, premium massage rooms and peaceful wellness spaces."
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
          content="Aris Wellness Spa Gallery Akola | Luxury Spa & Massage"
        />

        <meta
          name="twitter:description"
          content="Explore Aris Wellness Spa's relaxing ambience, massage rooms and premium wellness spaces at Bill Mart Commercial Complex, Balapur Road, Akola."
        />
      </Helmet>

      <PageHero
        title="Our Gallery"
        description="Explore Aris Wellness Spa at Bill Mart Commercial Complex, Washim Bypass Chowk, Balapur Road, Shivsena Nagar, Akola and discover our relaxing spa ambience, premium wellness spaces and peaceful environment."
      />

      <section className="gallery-main-section">
        <div className="gallery-main-container">
          <div className="gallery-main-heading">
            <span>
              Discover Our Space
            </span>

            <h2>
              A Glimpse Into
              <strong> Relaxation</strong>
            </h2>

            <p>
              Explore the relaxing atmosphere of Aris Wellness Spa in Akola,
              located at Bill Mart Commercial Complex near Washim Bypass
              Chowk, Balapur Road, Shivsena Nagar. Our wellness spaces are
              designed to provide comfort, calmness and a refreshing spa
              experience.
            </p>
          </div>

          <div className="gallery-main-grid">
            {galleryData.map((item) => (
              <GalleryCard
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}