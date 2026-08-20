// src/components/ReviewSection.jsx

import {
  Star,
  Quote,
  MapPin,
  BadgeCheck,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";

/* =========================================
   REVIEW DATA
========================================= */



const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Mumbai, Maharashtra",
    avatar: "/reviews/1.avif",
    rating: 5,
    date: "2 weeks ago",
    review:
      "A very relaxing experience. The ambience was peaceful, the place was clean and the service was professional. A good place to unwind after a busy week.",
  },

  {
    id: 2,
    name: "Amit Patil",
    location: "Pune, Maharashtra",
    avatar: "/reviews/2.avif",
    rating: 5,
    date: "3 weeks ago",
    review:
      "Really enjoyed the peaceful atmosphere and overall experience. The staff was polite and everything was well maintained. Would definitely visit again.",
  },

  {
    id: 3,
    name: "Abhishek Nair",
    location: "Bengaluru, Karnataka",
    avatar: "/reviews/3.jpg",
    rating: 5,
    date: "1 month ago",
    review:
      "Beautiful ambience with a comfortable and relaxing environment. The entire experience felt calm and refreshing from beginning to end.",
  },
];

/* =========================================
   REVIEW CARD
========================================= */

function ReviewCard({
  name,
  location,
  avatar,
  rating,
  date,
  review,
}) {
  return (
    <article className="premium-review-card">

      {/* TOP */}

      <div className="premium-review-top">
        <div className="premium-review-user">
          <div className="premium-review-avatar">
            <img
              src={avatar}
              alt={name}
              loading="lazy"
            />
          </div>

          <div className="premium-review-user-info">
            <div className="premium-review-name">
              <h3>{name}</h3>

              <BadgeCheck
                size={15}
                className="premium-review-verified"
              />
            </div>

            <div className="premium-review-location">
              <MapPin size={11} />

              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* GOOGLE */}

        <div className="premium-review-google">
          <FcGoogle size={27} />
        </div>
      </div>

      {/* RATING */}

      <div className="premium-review-rating-row">
        <div className="premium-review-stars">
          {Array.from({
            length: rating,
          }).map((_, index) => (
            <Star
              key={index}
              size={16}
              fill="currentColor"
            />
          ))}
        </div>

        <span className="premium-review-date">
          {date}
        </span>
      </div>

      {/* REVIEW */}

      <div className="premium-review-text">
        <Quote
          size={24}
          className="premium-review-quote"
        />

        <p>
          {review}
        </p>
      </div>

      {/* BOTTOM */}

      <div className="premium-review-bottom">
        <div className="premium-review-google-text">
          <FcGoogle size={16} />

          <span>Google Review</span>
        </div>

        <span className="premium-review-verified-text">
          Verified Guest
        </span>
      </div>

    </article>
  );
}

/* =========================================
   REVIEW SECTION
========================================= */

export default function ReviewSection() {
  return (
    <>
      <section className="premium-reviews-section">

        <div className="premium-reviews-decoration premium-reviews-decoration-one" />

        <div className="premium-reviews-decoration premium-reviews-decoration-two" />

        <div className="premium-reviews-container">

          {/* HEADING */}

          <div className="premium-reviews-heading">
            <div className="premium-reviews-eyebrow">
              <span />

              Guest Experiences

              <span />
            </div>

            <h2>
              What Our Guests
              <strong> Say</strong>
            </h2>

            <p>
              Discover what guests appreciate about their
              relaxing spa experiences, peaceful ambience
              and professional service.
            </p>

            {/* GOOGLE SUMMARY */}

            <div className="premium-google-summary">
              <div className="premium-google-logo">
                <FcGoogle size={28} />
              </div>

              <div>
                <div className="premium-google-rating">
                  <strong>5.0</strong>

                  <div>
                    {[1, 2, 3, 4, 5].map(
                      (star) => (
                        <Star
                          key={star}
                          size={14}
                          fill="currentColor"
                        />
                      )
                    )}
                  </div>
                </div>

                <span>
                  Guest Reviews
                </span>
              </div>
            </div>
          </div>

          {/* 6 REVIEWS */}

          <div className="premium-reviews-grid">
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                {...review}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =====================================
          CSS
      ====================================== */}

      <style>{`

        /* =========================================
           REVIEW SECTION
        ========================================= */

        .premium-reviews-section {
          position: relative;
          overflow: hidden;

          padding: 110px 0 120px;

          background:
            linear-gradient(
              135deg,
              rgba(251, 246, 239, 0.97),
              rgba(243, 232, 218, 0.97)
            );

          backdrop-filter: blur(5px);
        }

        .premium-reviews-container {
          position: relative;
          z-index: 2;

          width: min(
            1240px,
            calc(100% - 48px)
          );

          margin: 0 auto;
        }


        /* =========================================
           DECORATION
        ========================================= */

        .premium-reviews-decoration {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;
        }

        .premium-reviews-decoration-one {
          width: 450px;
          height: 450px;

          top: -230px;
          right: -180px;

          border:
            1px solid
            rgba(168, 113, 50, 0.12);
        }

        .premium-reviews-decoration-one::before {
          content: "";

          position: absolute;

          inset: 55px;

          border:
            1px solid
            rgba(168, 113, 50, 0.08);

          border-radius: 50%;
        }

        .premium-reviews-decoration-two {
          width: 350px;
          height: 350px;

          left: -170px;
          bottom: -180px;

          background:
            radial-gradient(
              circle,
              rgba(180, 120, 52, 0.11),
              transparent 70%
            );
        }


        /* =========================================
           HEADING
        ========================================= */

        .premium-reviews-heading {
          max-width: 760px;

          margin: 0 auto 65px;

          text-align: center;
        }

        .premium-reviews-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 12px;

          margin-bottom: 16px;

          color: #9d682f;

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 3px;

          text-transform: uppercase;
        }

        .premium-reviews-eyebrow span {
          width: 34px;
          height: 1px;

          background: #c39156;
        }

        .premium-reviews-heading h2 {
          margin: 0;

          color: #392c23;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(
              42px,
              5vw,
              62px
            );

          font-weight: 400;

          line-height: 1.08;
        }

        .premium-reviews-heading h2 strong {
          color: #ad7536;

          font-weight: 400;

          font-style: italic;
        }

        .premium-reviews-heading > p {
          max-width: 620px;

          margin: 19px auto 0;

          color: #74695f;

          font-size: 15px;

          line-height: 1.8;
        }


        /* =========================================
           GOOGLE SUMMARY
        ========================================= */

        .premium-google-summary {
          width: fit-content;

          margin:
            26px
            auto
            0;

          padding:
            10px
            18px
            10px
            10px;

          display: flex;
          align-items: center;

          gap: 11px;

          border:
            1px solid #e1cfb9;

          border-radius: 999px;

          background:
            rgba(255, 255, 255, 0.78);

          box-shadow:
            0
            10px
            30px
            rgba(81, 50, 27, 0.07);
        }

        .premium-google-logo {
          width: 42px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: white;

          box-shadow:
            0
            4px
            15px
            rgba(0, 0, 0, 0.08);
        }

        .premium-google-rating {
          display: flex;
          align-items: center;

          gap: 8px;
        }

        .premium-google-rating strong {
          color: #33271f;

          font-size: 15px;
        }

        .premium-google-rating > div {
          display: flex;

          gap: 2px;

          color: #e6a43a;
        }

        .premium-google-summary > div:last-child > span {
          display: block;

          margin-top: 2px;

          color: #938579;

          font-size: 10px;

          text-align: left;
        }


        /* =========================================
           GRID
        ========================================= */

        .premium-reviews-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 22px;
        }


        /* =========================================
           REVIEW CARD
        ========================================= */

        .premium-review-card {
          position: relative;

          min-height: 330px;

          padding:
            28px
            27px
            24px;

          display: flex;
          flex-direction: column;

          border:
            1px solid
            rgba(197, 159, 116, 0.28);

          border-radius: 22px;

          background:
            rgba(255, 255, 255, 0.88);

          box-shadow:
            0
            16px
            45px
            rgba(80, 49, 28, 0.075);

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .premium-review-card:hover {
          transform:
            translateY(-8px);

          border-color:
            rgba(184, 124, 56, 0.55);

          box-shadow:
            0
            28px
            60px
            rgba(80, 49, 28, 0.14);
        }


        /* =========================================
           TOP
        ========================================= */

        .premium-review-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 15px;
        }

        .premium-review-user {
          min-width: 0;

          display: flex;
          align-items: center;

          gap: 12px;
        }


        /* =========================================
           CIRCLE AVATAR IMAGE
        ========================================= */

        .premium-review-avatar {
          width: 55px;
          height: 55px;

          flex-shrink: 0;

          overflow: hidden;

          padding: 2px;

          border:
            1px solid #c8975e;

          border-radius: 50%;

          background: white;
        }

        .premium-review-avatar img {
          width: 100%;
          height: 100%;

          display: block;

          border-radius: 50%;

          object-fit: cover;
          object-position: center;
        }


        /* =========================================
           USER
        ========================================= */

        .premium-review-name {
          display: flex;
          align-items: center;

          gap: 5px;
        }

        .premium-review-name h3 {
          margin: 0;

          overflow: hidden;

          color: #392d24;

          font-size: 14px;
          font-weight: 700;

          text-overflow: ellipsis;

          white-space: nowrap;
        }

        .premium-review-verified {
          flex-shrink: 0;

          color: #4385f4;
        }

        .premium-review-location {
          margin-top: 5px;

          display: flex;
          align-items: center;

          gap: 4px;

          color: #988a7d;
        }

        .premium-review-location span {
          overflow: hidden;

          font-size: 10px;

          text-overflow: ellipsis;

          white-space: nowrap;
        }


        /* =========================================
           GOOGLE
        ========================================= */

        .premium-review-google {
          width: 39px;
          height: 39px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            1px solid #eee7de;

          border-radius: 50%;

          background: white;

          box-shadow:
            0
            5px
            15px
            rgba(0, 0, 0, 0.06);
        }


        /* =========================================
           RATING
        ========================================= */

        .premium-review-rating-row {
          margin-top: 22px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 15px;
        }

        .premium-review-stars {
          display: flex;

          gap: 3px;

          color: #e6a43a;
        }

        .premium-review-date {
          color: #a09286;

          font-size: 10px;
        }


        /* =========================================
           REVIEW
        ========================================= */

        .premium-review-text {
          position: relative;

          flex: 1;

          margin-top: 19px;
        }

        .premium-review-quote {
          position: absolute;

          top: -3px;
          right: 0;

          color:
            rgba(174, 117, 53, 0.14);
        }

        .premium-review-text p {
          margin: 0;

          padding-right: 15px;

          color: #665b52;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 14px;

          line-height: 1.78;
        }


        /* =========================================
           BOTTOM
        ========================================= */

        .premium-review-bottom {
          margin-top: 23px;

          padding-top: 17px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;

          border-top:
            1px solid #eee2d4;
        }

        .premium-review-google-text {
          display: flex;
          align-items: center;

          gap: 6px;
        }

        .premium-review-google-text span {
          color: #766a60;

          font-size: 10px;
          font-weight: 600;
        }

        .premium-review-verified-text {
          color: #a57742;

          font-size: 9px;
          font-weight: 700;

          letter-spacing: 0.5px;

          text-transform: uppercase;
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 950px) {

          .premium-reviews-container {
            width:
              calc(100% - 36px);
          }

          .premium-reviews-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 650px) {

          .premium-reviews-section {
            padding:
              75px
              0
              80px;
          }

          .premium-reviews-container {
            width:
              calc(100% - 28px);
          }

          .premium-reviews-heading {
            margin-bottom: 45px;
          }

          .premium-reviews-eyebrow {
            gap: 8px;

            font-size: 9px;

            letter-spacing: 2px;
          }

          .premium-reviews-eyebrow span {
            width: 24px;
          }

          .premium-reviews-heading h2 {
            font-size: 39px;
          }

          .premium-reviews-heading > p {
            font-size: 14px;

            line-height: 1.7;
          }

          .premium-reviews-grid {
            grid-template-columns: 1fr;

            gap: 16px;
          }

          .premium-review-card {
            min-height: auto;

            padding:
              25px
              21px
              22px;
          }

          .premium-review-avatar {
            width: 51px;
            height: 51px;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 380px) {

          .premium-review-bottom {
            align-items: flex-start;

            flex-direction: column;
          }

          .premium-google-summary {
            padding-right: 13px;
          }

        }

      `}</style>
    </>
  );
}