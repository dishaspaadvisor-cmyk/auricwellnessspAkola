// src/components/OfferPopup.jsx

import { useEffect, useState } from "react";
import {
  X,
  Sparkles,
  Phone,
  Clock3,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import { siteData } from "../data/data";

export default function OfferPopup() {
  const [isVisible, setIsVisible] =
    useState(false);

  const [timeLeft, setTimeLeft] =
    useState(5 * 60);

  const contact = siteData.contact;

  /* =========================================
     SHOW POPUP AFTER 30 SECONDS
  ========================================= */

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setTimeLeft(5 * 60);
      setIsVisible(true);
    }, 30000);

    return () => {
      clearTimeout(popupTimer);
    };
  }, []);

  /* =========================================
     5 MINUTE COUNTDOWN
  ========================================= */

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    if (timeLeft <= 0) {
      setIsVisible(false);
      return;
    }

    const countdown = setInterval(() => {
      setTimeLeft((previousTime) => {
        if (previousTime <= 1) {
          clearInterval(countdown);

          return 0;
        }

        return previousTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [isVisible, timeLeft]);

  /* =========================================
     FORMAT TIMER
  ========================================= */

  const minutes = Math.floor(
    timeLeft / 60
  );

  const seconds = timeLeft % 60;

  const formattedTime = `${String(
    minutes
  ).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  /* =========================================
     CLOSE POPUP
  ========================================= */

  const handleClose = () => {
    setIsVisible(false);
  };

  /* =========================================
     WHATSAPP
  ========================================= */

  const whatsappMessage =
    "Hi, I am visiting the Aris Wellness Spa website. I would like to book the ₹1,999 special spa offer. Please share today's availability.";

  const whatsappUrl = `${
    contact.whatsappUrl
  }?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="offer-popup-overlay">
        <div className="offer-popup-card">

          {/* CLOSE */}

          <button
            type="button"
            className="offer-popup-close"
            onClick={handleClose}
            aria-label="Close offer popup"
          >
            <X size={20} />
          </button>

          {/* =================================
              OFFER IMAGE
          ================================= */}

          <div className="offer-popup-image-wrapper">
            <img
              src="/heroimage/1d.jpg"
              alt="Aris Wellness Spa ₹1499 special spa offer in Akola"
              className="offer-popup-image"
            />

            <div className="offer-image-overlay" />

            <div className="offer-image-badge">
              <Sparkles size={13} />

              Special Offer
            </div>
          </div>

          {/* =================================
              CONTENT
          ================================= */}

          <div className="offer-popup-content">

            <span className="offer-popup-small-title">
              Aris Wellness Spa
            </span>
            {/* =================================
                COUNTDOWN TIMER
            ================================= */}

            <div className="offer-countdown-box">
              <div className="offer-countdown-icon">
                <Clock3 size={19} />
              </div>

              <div>
                <span>
                  Offer Ends In
                </span>

                <strong>
                  {formattedTime}
                </strong>
              </div>
            </div>

            {/* PRICE */}

            <div className="offer-popup-price">
              <div className="offer-price-label">
                LIMITED TIME PRICE
              </div>

              <div className="offer-price-main">
                <span>
                  ONLY
                </span>

                <strong>
                  ₹1,999
                </strong>
              </div>

              <p>
                Limited slots available today
              </p>
            </div>

            {/* FEATURES */}


            {/* BUTTONS */}

            <div className="offer-popup-actions">
              <a
                href={contact.phoneUrl}
                className="offer-popup-call"
              >
                <Phone size={18} />

                Call Now
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="offer-popup-whatsapp"
              >
                <FaWhatsapp size={19} />

                Book Offer
              </a>
            </div>


          </div>
        </div>
      </div>

      {/* =====================================
          CSS
      ===================================== */}

      <style>{`

        .offer-popup-overlay {
          position: fixed;
          inset: 0;

          z-index: 99999;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 18px;

          background:
            rgba(20, 13, 10, 0.72);

          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);

          animation:
            offerOverlayFade 0.35s ease;
        }


        /* =====================================
           POPUP CARD
        ===================================== */

        .offer-popup-card {
          position: relative;

          width: min(
            100%,
            430px
          );

          max-height: 94vh;

          overflow-y: auto;

          background:
            #fffaf3;

          border:
            1px solid
            rgba(
              201,
              149,
              86,
              0.3
            );

          border-radius: 26px;

          box-shadow:
            0 30px 90px
            rgba(
              0,
              0,
              0,
              0.35
            );

          animation:
            offerPopupShow
            0.45s ease;

          scrollbar-width: none;
        }

        .offer-popup-card::-webkit-scrollbar {
          display: none;
        }


        /* =====================================
           CLOSE
        ===================================== */

        .offer-popup-close {
          position: absolute;

          top: 12px;
          right: 12px;

          z-index: 10;

          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 0;

          color: #33231b;

          background:
            rgba(
              255,
              255,
              255,
              0.94
            );

          border: none;

          border-radius: 50%;

          box-shadow:
            0 5px 18px
            rgba(
              0,
              0,
              0,
              0.15
            );

          cursor: pointer;

          transition:
            transform
            0.25s ease;
        }

        .offer-popup-close:hover {
          transform:
            rotate(90deg);
        }


        /* =====================================
           IMAGE
        ===================================== */

        .offer-popup-image-wrapper {
          position: relative;

          width: 100%;
          height: 220px;

          overflow: hidden;

          border-radius:
            25px
            25px
            0
            0;
        }

        .offer-popup-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
          object-position: center;
        }

        .offer-image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(
                34,
                20,
                14,
                0.45
              ),
              transparent 65%
            );
        }

        .offer-image-badge {
          position: absolute;

          left: 18px;
          bottom: 16px;

          display: inline-flex;
          align-items: center;

          gap: 6px;

          padding:
            8px 13px;

          color: #56381f;

          background:
            rgba(
              255,
              247,
              234,
              0.95
            );

          border-radius:
            50px;

          font-size: 10px;
          font-weight: 700;

          letter-spacing:
            1px;

          text-transform:
            uppercase;
        }


        /* =====================================
           CONTENT
        ===================================== */

        .offer-popup-content {
          padding:
            26px
            28px
            27px;

          text-align: center;
        }

        .offer-popup-small-title {
          display: block;

          margin-bottom: 8px;

          color: #aa7941;

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 4px;
        }

        .offer-popup-content h2 {
          margin: 0;

          color: #35241c;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(
              29px,
              5vw,
              39px
            );

          font-weight: 400;

          line-height: 1.08;
        }

        .offer-popup-content h2 strong {
          display: block;

          margin-top: 7px;

          color: #c28745;

          font-weight: 400;
          font-style: italic;
        }

        .offer-popup-description {
          max-width: 340px;

          margin:
            14px auto
            18px;

          color: #76675e;

          font-size: 13px;

          line-height: 1.7;
        }


        /* =====================================
           COUNTDOWN
        ===================================== */

        .offer-countdown-box {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 12px;

          margin-bottom: 17px;

          padding:
            13px 18px;

          background:
            #fff;

          border:
            1px solid
            rgba(
              189,
              135,
              72,
              0.22
            );

          border-radius: 15px;
        }

        .offer-countdown-icon {
          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #bd8140;

          background:
            #fff2e1;

          border-radius: 50%;
        }

        .offer-countdown-box > div:last-child {
          display: flex;
          align-items: center;

          gap: 12px;
        }

        .offer-countdown-box span {
          color: #716258;

          font-size: 11px;
          font-weight: 600;

          text-transform:
            uppercase;

          letter-spacing:
            1px;
        }

        .offer-countdown-box strong {
          color: #bd7438;

          font-size: 25px;
          font-weight: 700;

          letter-spacing:
            2px;

          font-variant-numeric:
            tabular-nums;
        }


        /* =====================================
           PRICE
        ===================================== */

        .offer-popup-price {
          margin-bottom: 18px;

          padding:
            18px
            16px;

          color: white;

          background:
            linear-gradient(
              135deg,
              #332219,
              #4d3426
            );

          border-radius: 18px;
        }

        .offer-price-label {
          margin-bottom: 6px;

          color: #e7bc85;

          font-size: 9px;
          font-weight: 700;

          letter-spacing:
            2px;
        }

        .offer-price-main {
          display: flex;
          align-items: flex-end;
          justify-content: center;

          gap: 9px;
        }

        .offer-price-main span {
          margin-bottom: 7px;

          color: #d4c0b1;

          font-size: 9px;
          font-weight: 700;

          letter-spacing:
            1px;
        }

        .offer-price-main strong {
          color: #fff5e8;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 43px;
          font-weight: 400;

          line-height: 1;
        }

        .offer-popup-price p {
          margin:
            8px 0 0;

          color: #dbcbbb;

          font-size: 10px;
        }


        /* =====================================
           FEATURES
        ===================================== */

        .offer-popup-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          gap: 7px;

          margin-bottom: 19px;
        }

        .offer-popup-features span {
          padding:
            7px
            10px;

          color: #72523d;

          background: white;

          border:
            1px solid
            rgba(
              181,
              128,
              71,
              0.18
            );

          border-radius:
            50px;

          font-size: 9px;
          font-weight: 600;
        }


        /* =====================================
           BUTTONS
        ===================================== */

        .offer-popup-actions {
          display: grid;

          grid-template-columns:
            1fr 1.25fr;

          gap: 10px;
        }

        .offer-popup-actions a {
          min-height: 48px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 7px;

          padding:
            11px 12px;

          border-radius:
            13px;

          font-size: 12px;
          font-weight: 700;

          text-decoration: none;

          transition:
            transform
            0.25s ease;
        }

        .offer-popup-actions a:hover {
          transform:
            translateY(-2px);
        }

        .offer-popup-call {
          color: #38271e;

          background: #f6e9d8;

          border:
            1px solid
            rgba(
              180,
              127,
              73,
              0.25
            );
        }

        .offer-popup-whatsapp {
          color: #fff;

          background: #25d366;
        }

        .offer-popup-note {
          display: block;

          margin-top: 12px;

          color: #a09187;

          font-size: 8px;
        }


        /* =====================================
           ANIMATION
        ===================================== */

        @keyframes offerOverlayFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes offerPopupShow {
          from {
            opacity: 0;

            transform:
              translateY(25px)
              scale(0.96);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }
        }


        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 520px) {

          .offer-popup-overlay {
            padding: 12px;
          }

          .offer-popup-card {
            max-height: 96vh;

            border-radius: 21px;
          }

          .offer-popup-image-wrapper {
            height: 180px;

            border-radius:
              20px
              20px
              0
              0;
          }

          .offer-popup-content {
            padding:
              21px
              17px
              20px;
          }

          .offer-popup-content h2 {
            font-size: 29px;
          }

          .offer-countdown-box {
            padding:
              11px
              13px;
          }

          .offer-countdown-box strong {
            font-size: 22px;
          }

          .offer-price-main strong {
            font-size: 38px;
          }

          .offer-popup-actions {
            grid-template-columns: 1fr;
          }

          .offer-popup-actions a {
            width: 100%;
          }
        }

      `}</style>
    </>
  );
}