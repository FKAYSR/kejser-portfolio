import { useState } from "react";
import { Link } from "react-router";
import styles from "./PolaroidCard.module.css";
import arrow from "../assets/icons/arrow-accent-middle.svg";

function PolaroidCard({
  project,
  images,
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

  // Keep track of which image is currently shown
  const [currentImage, setCurrentImage] = useState(0);

  const hasMultipleImages = polaroidImages.length > 1;

  function nextImage(event) {
    event.preventDefault();
    event.stopPropagation();

    setCurrentImage((current) =>
      current === polaroidImages.length - 1 ? 0 : current + 1,
    );
  }

  function previousImage(event) {
    event.preventDefault();
    event.stopPropagation();

    setCurrentImage((current) =>
      current === 0 ? polaroidImages.length - 1 : current - 1,
    );
  }

  // Change the rotation when the image changes
  const tiltClass = `polaroid--tilt-${currentImage % 3}`;

  const polaroidContent = (
    <>
      <div className={styles.polaroidImageContainer}>
        {polaroidImages.length > 0 && (
          <img
            src={polaroidImages[currentImage]}
            alt={polaroidTitle || ""}
            className={styles.polaroidImage}
          />
        )}
      </div>

      {(polaroidTitle || polaroidDescription) && (
        <div className={styles.polaroidContent}>
          {polaroidTitle && (
            <h3 className={`${styles.polaroidTitle} text-style-h3`}>{polaroidTitle}</h3>
          )}

          {polaroidDescription && (
            <p className={styles.polaroidDescription}>{polaroidDescription}</p>
          )}
        </div>
      )}
    </>
  );

  return (
    <div
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

      {hasMultipleImages && (
        <div className={styles.polaroidNavigation}>
          <button
            type="button"
            className={`${styles.polaroidArrow} ${styles.polaroidArrowPrevious}`}
            onClick={previousImage}
            aria-label="Previous image"
          >
            <img src={arrow} alt="" />
          </button>

          <button
            type="button"
            className={`${styles.polaroidArrow} ${styles.polaroidArrowNext}`}
            onClick={nextImage}
            aria-label="Next image"
          >
            <img src={arrow} alt="" />
          </button>
        </div>
      )}
    </div>
  );
}

export default PolaroidCard;