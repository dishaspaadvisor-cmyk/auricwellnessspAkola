// src/components/FaqSection.jsx

import { useState } from "react";
import {
  ChevronDown,
  Sparkles,
} from "lucide-react";

const faqData = [
  {
    question: "What spa services are available at Aris Wellness Spa?",
    answer:
      "Aris Wellness Spa offers a range of wellness and massage services including full body massage, Thai massage, deep tissue massage, Swedish massage, hot oil massage, aromatherapy massage, Balinese massage, foot reflexology, couple spa and other relaxing therapies.",
  },
  {
    question: "Where is Aris Wellness Spa located in Akola?",
    answer:
      "Aris Wellness Spa is located at Shop Nos. TD-19, TD-20 & TD-21, Third Floor, Bill Mart Commercial Complex, Washim Bypass Chowk, Balapur Road, Shivsena Nagar (Nafees Bagh), Akola - 444002, Maharashtra, India.",
  },
  {
    question: "What are the opening hours?",
    answer:
      "Aris Wellness Spa is open Monday to Sunday from 10:00 AM to 11:00 PM. You can call or WhatsApp us to check today's availability.",
  },
  {
    question: "Do I need to book an appointment?",
    answer:
      "Booking in advance is recommended, especially during evenings and weekends. You can contact us by phone or WhatsApp to check availability before visiting.",
  },
  {
    question: "Do you offer full body massage in Akola?",
    answer:
      "Yes. We offer full body massage and several other wellness therapies designed for relaxation, stress relief and overall comfort.",
  },
  {
    question: "Do you offer Thai and deep tissue massage?",
    answer:
      "Yes. Thai massage and deep tissue massage are among the massage therapies available at Aris Wellness Spa. You can contact us for current service availability.",
  },
  {
    question: "Are couple spa services available?",
    answer:
      "Yes, couple spa options may be available. Please call or WhatsApp us to confirm the current packages, timings and availability.",
  },
  {
    question: "How can I book a spa service?",
    answer:
      "You can book or enquire by calling Aris Wellness Spa or sending a WhatsApp message. Our team can share service details, current offers and available time slots.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(
      activeIndex === index
        ? null
        : index
    );
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* HEADING */}
        <div className="faq-heading">
          <span>
            <Sparkles size={14} />
            Frequently Asked Questions
          </span>

          <h2>
            Everything You Need to Know
            <strong> Before You Relax</strong>
          </h2>

          <p>
            Find quick answers about our spa
            services, location, timings and
            bookings at Aris Wellness Spa Akola.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="faq-list">
          {faqData.map(
            (faq, index) => {
              const isOpen =
                activeIndex === index;

              return (
                <article
                  className={`faq-item ${
                    isOpen
                      ? "active"
                      : ""
                  }`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() =>
                      toggleFaq(index)
                    }
                    aria-expanded={
                      isOpen
                    }
                  >
                    <span>
                      {faq.question}
                    </span>

                    <span className="faq-icon">
                      <ChevronDown
                        size={20}
                      />
                    </span>
                  </button>

                  <div
                    className="faq-answer-wrap"
                  >
                    <div className="faq-answer">
                      <p>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>

      <style>{`
        /* =========================================
           FAQ SECTION
        ========================================= */

        .faq-section {
          position: relative;

          padding: 90px 20px;

          background: none;
        }

        .faq-container {
          width: min(
            1000px,
            100%
          );

          margin: 0 auto;
        }


        /* =========================================
           FAQ HEADING
        ========================================= */

        .faq-heading {
          max-width: 760px;

          margin: 0 auto 48px;

          text-align: center;
        }

        .faq-heading > span {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          margin-bottom: 14px;

          color: #eac28a;

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 2.5px;

          text-transform: uppercase;
        }

        .faq-heading h2 {
          margin: 0;

          color: #fff5e8;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(
            38px,
            5vw,
            58px
          );

          font-weight: 400;

          line-height: 1.1;
        }

        .faq-heading h2 strong {
          color: #e4b774;

          font-weight: 400;

          font-style: italic;
        }

        .faq-heading p {
          max-width: 620px;

          margin:
            18px auto 0;

          color:
            rgba(
              255,
              245,
              235,
              0.78
            );

          font-size: 15px;

          line-height: 1.8;
        }


        /* =========================================
           FAQ LIST
        ========================================= */

        .faq-list {
          display: flex;
          flex-direction: column;

          gap: 14px;
        }

        .faq-item {
          position: relative;

          overflow: hidden;

          border:
            1px solid
            rgba(
              235,
              194,
              137,
              0.18
            );

          border-radius: 20px;

          background:
            linear-gradient(
              135deg,
              rgba(
                255,
                255,
                255,
                0.11
              ),
              rgba(
                255,
                255,
                255,
                0.035
              )
            );

          box-shadow:
            0 15px 40px
            rgba(
              0,
              0,
              0,
              0.12
            );

          backdrop-filter:
            blur(12px);

          -webkit-backdrop-filter:
            blur(12px);

          transition:
            border-color
              0.35s ease,
            box-shadow
              0.35s ease,
            transform
              0.35s ease;
        }

        .faq-item:hover {
          transform:
            translateY(-2px);

          border-color:
            rgba(
              235,
              194,
              137,
              0.4
            );

          box-shadow:
            0 20px 48px
            rgba(
              0,
              0,
              0,
              0.18
            );
        }

        .faq-item.active {
          border-color:
            rgba(
              235,
              194,
              137,
              0.48
            );
        }


        /* =========================================
           QUESTION
        ========================================= */

        .faq-question {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content:
            space-between;

          gap: 20px;

          padding:
            22px 24px;

          border: 0;

          background:
            transparent;

          color: #fff3e5;

          text-align: left;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 18px;
          font-weight: 500;

          line-height: 1.4;

          cursor: pointer;
        }

        .faq-question > span:first-child {
          flex: 1;
        }


        /* =========================================
           ICON
        ========================================= */

        .faq-icon {
          width: 38px;
          height: 38px;

          flex-shrink: 0;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(
              232,
              189,
              131,
              0.38
            );

          border-radius: 50%;

          background:
            rgba(
              232,
              189,
              131,
              0.08
            );

          color: #ebc38d;

          transition:
            transform
              0.35s ease,
            background
              0.35s ease,
            color
              0.35s ease;
        }

        .faq-item.active
        .faq-icon {
          transform:
            rotate(180deg);

          color: #2d1d15;

          background:
            linear-gradient(
              135deg,
              #f4d7ab,
              #dca65f
            );
        }


        /* =========================================
           ANSWER ANIMATION
        ========================================= */

        .faq-answer-wrap {
          display: grid;

          grid-template-rows: 0fr;

          transition:
            grid-template-rows
              0.4s ease;
        }

        .faq-item.active
        .faq-answer-wrap {
          grid-template-rows: 1fr;
        }

        .faq-answer {
          overflow: hidden;
        }

        .faq-answer p {
          margin: 0;

          padding:
            0 24px 24px;

          color:
            rgba(
              255,
              242,
              230,
              0.78
            );

          font-size: 14px;

          line-height: 1.85;
        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (
          max-width: 650px
        ) {
          .faq-section {
            padding:
              65px 15px;
          }

          .faq-heading {
            margin-bottom:
              35px;
          }

          .faq-heading h2 {
            font-size: 36px;
          }

          .faq-heading p {
            font-size: 14px;
          }

          .faq-list {
            gap: 11px;
          }

          .faq-item {
            border-radius:
              16px;
          }

          .faq-question {
            gap: 14px;

            padding:
              18px 17px;

            font-size: 16px;
          }

          .faq-icon {
            width: 34px;
            height: 34px;
          }

          .faq-answer p {
            padding:
              0 17px 19px;

            font-size: 13px;

            line-height: 1.75;
          }
        }
      `}</style>
    </section>
  );
}