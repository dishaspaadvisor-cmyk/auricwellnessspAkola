// src/components/ContactCard.jsx

import { useState } from "react";

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import { siteData } from "../data/data";

export default function ContactCard() {
  const contact = siteData.contact;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  // ============================================================
  // HANDLE INPUT CHANGE
  // ============================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Phone number: allow numbers only
    if (name === "phone") {
      const onlyNumbers = value
        .replace(/\D/g, "")
        .slice(0, 10);

      setFormData((previous) => ({
        ...previous,
        phone: onlyNumbers,
      }));

      return;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };


  // ============================================================
  // SUBMIT FORM - MASTER CALL API
  // ============================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate phone number
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://apibackend.mastercall.in/api/v1/web-leads/submit/",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            form_key: "frm_ariswellnessspa_553566",
            name: formData.name,
            phone: formData.phone,
            address: formData.address,
            notes: formData.notes,
            submitted_from_url: window.location.href,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            data?.error ||
            "Unable to submit your request."
        );
      }

      // Success
      alert("Message sent successfully!");

      // Reset form
      setFormData({
        name: "",
        phone: "",
        address: "",
        notes: "",
      });

    } catch (error) {
      console.error(
        "Mastercall Contact API Error:",
        error
      );

      alert(
        error.message ||
          "Unable to submit your request. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };


  // ============================================================
  // WHATSAPP MESSAGE
  // ============================================================

  const whatsappMessage =
    "Hi, I am visiting the Aris Wellness Spa website. I would like to know about your spa services and today's availability.";

  const whatsappUrl = `${
    contact.whatsappUrl
  }?text=${encodeURIComponent(whatsappMessage)}`;


  // ============================================================
  // PAGE
  // ============================================================

  return (
    <section className="contact-redesign-section">

      <div className="contact-redesign-container">


        {/* ====================================================== */}
        {/* HEADING */}
        {/* ====================================================== */}

        <div className="contact-redesign-heading">

          <span>
            Get In Touch
          </span>

          <h2>
            Plan Your
            <strong>
              {" "}Relaxing Visit
            </strong>
          </h2>

          <p>
            Contact Aris Wellness Spa for services,
            special offers and today's availability.
          </p>

        </div>


        {/* ====================================================== */}
        {/* MAIN GRID */}
        {/* ====================================================== */}

        <div className="contact-redesign-grid">


          {/* ==================================================== */}
          {/* LEFT - CONTACT INFORMATION */}
          {/* ==================================================== */}

          <div className="contact-redesign-info">

            <span className="contact-info-small">
              Aris Wellness Spa
            </span>

            <h3>
              We Are Here To Help You Relax
            </h3>

            <p>
              Call, WhatsApp or send us a message and
              our team will help you with spa service
              details and availability.
            </p>


            {/* CONTACT LIST */}

            <div className="contact-redesign-info-list">


              {/* ================================================= */}
              {/* PHONE */}
              {/* ================================================= */}

              <a
                href={contact.phoneUrl}
                className="contact-redesign-info-item"
              >

                <div className="contact-redesign-icon">
                  <Phone size={21} />
                </div>

                <div>
                  <span>
                    Call Us
                  </span>

                  <strong>
                    {contact.phone}
                  </strong>
                </div>

              </a>


              {/* ================================================= */}
              {/* WHATSAPP */}
              {/* ================================================= */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-redesign-info-item"
              >

                <div className="contact-redesign-icon">
                  <FaWhatsapp size={21} />
                </div>

                <div>
                  <span>
                    WhatsApp
                  </span>

                  <strong>
                    Chat With Us
                  </strong>
                </div>

              </a>


              {/* ================================================= */}
              {/* EMAIL */}
              {/* ================================================= */}

              <a
                href={contact.emailUrl}
                className="contact-redesign-info-item"
              >

                <div className="contact-redesign-icon">
                  <Mail size={21} />
                </div>

                <div>
                  <span>
                    Email
                  </span>

                  <strong>
                    {contact.email}
                  </strong>
                </div>

              </a>


              {/* ================================================= */}
              {/* OPENING HOURS */}
              {/* ================================================= */}

              <div className="contact-redesign-info-item">

                <div className="contact-redesign-icon">
                  <Clock3 size={21} />
                </div>

                <div>

                  <span>
                    Opening Hours
                  </span>

                  <strong>
                    {contact.days}
                    <br />
                    {contact.time}
                  </strong>

                </div>

              </div>

            </div>

          </div>


          {/* ==================================================== */}
          {/* RIGHT - CONTACT FORM */}
          {/* ==================================================== */}

          <div className="contact-redesign-form-card">

            <span className="contact-form-small">
              Send A Message
            </span>

            <h3>
              Tell Us What You Are Looking For
            </h3>


            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="contact-redesign-form"
            >


              {/* ================================================= */}
              {/* FULL NAME */}
              {/* ================================================= */}

              <div className="contact-redesign-field">

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />

              </div>


              {/* ================================================= */}
              {/* PHONE */}
              {/* ================================================= */}

              <div className="contact-redesign-field">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  required
                />

              </div>


              {/* ================================================= */}
              {/* LOCATION */}
              {/* ================================================= */}

              <div className="contact-redesign-field">

                <label htmlFor="address">
                  Location
                </label>

                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your area or location"
                  autoComplete="address-level2"
                />

              </div>


              {/* ================================================= */}
              {/* MESSAGE */}
              {/* ================================================= */}

              <div className="contact-redesign-field">

                <label htmlFor="notes">
                  Message
                </label>

                <textarea
                  id="notes"
                  name="notes"
                  rows={5}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us which service you are interested in..."
                  required
                />

              </div>


              {/* ================================================= */}
              {/* SUBMIT BUTTON */}
              {/* ================================================= */}

              <button
                type="submit"
                className="contact-redesign-submit"
                disabled={loading}
              >

                <Send size={18} />

                {loading
                  ? "Sending..."
                  : "Send Message"}

              </button>

            </form>

          </div>

        </div>


        {/* ====================================================== */}
        {/* MAP */}
        {/* ====================================================== */}

        <div className="contact-redesign-map">

          <iframe
            src={contact.mapUrl}
            title={`${siteData.name} location`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />


          {/* MAP LOCATION CARD */}

          <div className="contact-redesign-map-card">

            <MapPin size={23} />

            <div>

              <span>
                Visit Aris Wellness Spa
              </span>

              <strong>
                {contact.address}
              </strong>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}