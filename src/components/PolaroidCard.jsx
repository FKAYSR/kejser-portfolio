import { useState } from "react";
import { Link } from "react-router";
import styles from "./PolaroidCard.module.css";

function PolaroidCard({
  project,
  images,
  imageAlt,
  title,
  description,
  size = "medium",
  link,
}) {

  const polaroidImages =
    images ||
    project?.images ||
    (project?.thumbnail ? [project.thumbnail] : []);

  const polaroidTitle = title ?? project?.title;
  const polaroidDescription = description ?? project?.homeDescription;
  const polaroidImageAlt = imageAlt ?? project?.thumbnailAlt ?? polaroidTitle ?? "";

  // Keep track of which image is currently shown
  const [currentImage, setCurrentImage] = useState(0);

  const [touchStartX, setTouchStartX] = useState(null);

  const hasMultipleImages = polaroidImages.length > 1;

  function nextImage(event) {
    if (event) {
    event.preventDefault();
    event.stopPropagation();
    }
    
    setCurrentImage((current) =>
      current === polaroidImages.length - 1 ? 0 : current + 1,
    );
  }

  function previousImage(event) {
    if (event) {
    event.preventDefault();
    event.stopPropagation();
    }

    setCurrentImage((current) =>
      current === 0 ? polaroidImages.length - 1 : current - 1,
    );
  }

  function selectImage(index, event) {
    event.preventDefault();
    event.stopPropagation();
    setCurrentImage(index);
  }

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;

    // Minimum 40px movement to register as a swipe
    if (diffX > 40) {
      nextImage();
    } else if (diffX < -40) {
      previousImage();
    }

    setTouchStartX(null);
  };

  // Change the rotation when the image changes
  const tiltClass = `polaroid--tilt-${currentImage % 4}`;

  const polaroidContent = (
    <>
      <div
        className={styles.polaroidImageContainer}
        onTouchStart={hasMultipleImages ? handleTouchStart : undefined}
        onTouchEnd={hasMultipleImages ? handleTouchEnd : undefined}
      >
        {polaroidImages.length > 0 && (
          <img
            src={polaroidImages[currentImage]}
            alt={polaroidImageAlt}
            className={styles.polaroidImage}
          />
        )}

        {hasMultipleImages && (
          <>
            <div
              className={styles.clickZoneLeft}
              onClick={previousImage}
              aria-label="Previous image"
            />
            <div
              className={styles.clickZoneRight}
              onClick={nextImage}
              aria-label="Next image"
            />
          </>
        )}
      </div>

      <figcaption className={styles.polaroidContent}>
        {/* Pagination-dots at the bottom over the text */}
        {hasMultipleImages && (
          <div className={styles.polaroidDots}>
            {polaroidImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`${styles.dot} ${
                  index === currentImage ? styles.activeDot : ""
                }`}
                onClick={(e) => selectImage(index, e)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {polaroidTitle && (
          <h3 className={`${styles.polaroidTitle} text-style-h3`}>
            {polaroidTitle}
          </h3>
        )}

        {polaroidDescription && (
          <p className={styles.polaroidDescription}>{polaroidDescription}</p>
        )}
      </figcaption>
    </>
  );

  return (
    <figure
      className={`${styles.polaroid} ${
        styles[`polaroid--${size}`]
      } ${styles[tiltClass]}`}
    >
      {link ? (
        <Link to={link} className={styles.polaroidLink}>
          {polaroidContent}
        </Link>
      ) : (
        polaroidContent
      )}
    </figure>
  );
}

export default PolaroidCard;