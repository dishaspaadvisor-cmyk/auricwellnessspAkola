// src/components/PageHero.jsx

export default function PageHero({
  title,
  description,
}) {
  return (
    <section className="common-page-hero">
      <div className="common-page-content">
        <span className="common-page-small">
          Aris Wellness Spa
        </span>

        <h1>
          {title}
        </h1>

        {description && (
          <p>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}