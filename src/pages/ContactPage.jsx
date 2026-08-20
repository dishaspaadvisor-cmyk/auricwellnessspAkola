// src/pages/ContactPage.jsx

import { Helmet } from "react-helmet-async";

import PageHero from "../components/PageHero";
import ContactCard from "../components/ContactCard";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>
          Contact Aris Wellness Spa Akola | Spa Near Me, Massage Near Me & Full
          Body Massage
        </title>

        <meta
          name="description"
          content="Contact Aris Wellness Spa at Bill Mart Commercial Complex, Washim Bypass Chowk, Balapur Road, Shivsena Nagar, Akola for full body massage, Thai massage, deep tissue massage, Swedish massage, couple spa, luxury spa, wellness treatments, special offers and today's availability."
        />

        <meta
          name="keywords"
          content="
            Aris Wellness Spa,
            contact Aris Wellness Spa,
            Aris Wellness Spa Akola,

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

            full body massage in Akola,
            full body massage near me,

            Thai massage in Akola,
            Thai massage near Balapur Road Akola,
            Thai massage near Washim Bypass Akola,

            deep tissue massage in Akola,
            deep tissue massage near Balapur Road Akola,
            deep tissue massage near Washim Bypass Akola,

            Swedish massage in Akola,
            Swedish massage near Balapur Road Akola,

            couple spa in Akola,
            couple spa near me,

            luxury spa in Akola,
            luxury spa near me,

            wellness spa in Akola,
            wellness spa near me,

            day spa in Akola,
            day spa near me,

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
            wellness center in Akola,

            couple massage in Akola,
            romantic couple massage,
            couple romantic massage,
            spa packages in Akola,

            four hand massage in Akola,
            hot oil massage in Akola,
            Jacuzzi massage in Akola,
            foot reflexology in Akola,

            body massage in Akola,
            body massage near me,

            body spa in Akola,
            body spa near me,

            massage spa in Akola,
            massage spa near me,

            massage center in Akola,
            massage center near me,

            best massage spa near me,
            best body massage near me,
            luxury massage spa in Akola,
            luxury massage spa near me,

            spa contact near me,
            massage booking near me,
            spa booking near me,
            massage availability near me,
            spa offers near me,
            massage offers near me,

            nearby spa massage,
            nearby massage center,
            nearest spa centre,
            nearest massage center
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
          content="Contact Aris Wellness Spa Akola | Spa, Massage & Wellness Services"
        />

        <meta
          property="og:description"
          content="Connect with Aris Wellness Spa at Bill Mart Commercial Complex, Washim Bypass Chowk, Balapur Road, Akola for full body massage, Thai massage, deep tissue massage, Swedish massage, luxury spa services, special offers and availability."
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
          content="Contact Aris Wellness Spa Akola | Full Body Massage & Luxury Spa"
        />

        <meta
          name="twitter:description"
          content="Contact Aris Wellness Spa at Bill Mart Commercial Complex, Balapur Road, Akola for premium massage therapies, wellness services, special offers and today's availability."
        />
      </Helmet>

      <PageHero
        title="Contact Us"
        description="Connect with Aris Wellness Spa at Shop Nos. TD-19, TD-20 & TD-21, Third Floor, Bill Mart Commercial Complex, Washim Bypass Chowk, Balapur Road, Shivsena Nagar (Nafees Bagh), Akola - 444002, Maharashtra, India for premium wellness services, special offers and today's availability."
      />

      <ContactCard />
    </>
  );
}