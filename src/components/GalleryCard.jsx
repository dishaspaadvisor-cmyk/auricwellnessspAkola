import { useState } from "react";
import { Maximize2, X } from "lucide-react";

export default function GalleryCard({
  image,
  title,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article
        className="gallery-image-card"
        onClick={() => setIsOpen(true)}
      >
        <div className="gallery-image-wrapper">
          <img
            src={image}
            alt={title}
            className="gallery-card-image"
            loading="lazy"
          />

          <div className="gallery-card-overlay" />

          <div className="gallery-card-icon">
            <Maximize2 size={19} />
          </div>

          <div className="gallery-card-content">
            <span>Our Gallery</span>

            <h3>{title}</h3>
          </div>
        </div>
      </article>

      {isOpen && (
        <div
          className="gallery-lightbox"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close image"
          >
            <X size={26} />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image}
              alt={title}
              className="gallery-lightbox-image"
            />

            <h3>{title}</h3>
          </div>
        </div>
      )}
    </>
  );
}