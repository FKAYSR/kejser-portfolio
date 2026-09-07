import Polaroid from "./PolaroidCard.jsx";
import styles from "./OverviewCard.module.css";

export default function OverviewCard({ project }) {
  return (
    <article className={styles.overviewCard}>
      {/* Left column - text */}
      <div className={styles.textContent}>
        <h2 className="text-style-h2">{project.title}</h2>

        {/* Tags */}
        <ul className={styles.tagList}>
          {project.tags.map((tag, index) => (
            <li key={index} className={styles.tagItem}>
              {tag}
            </li>
          ))}
        </ul>

        <p className={styles.description}>{project.overviewDescription}</p>

        <button className={styles.viewButton} disabled>
          View project <span> → </span>
        </button>
      </div>

      {/* Right column - polaroid component */}
      <div className={styles.polaroidWrapper}>
        <Polaroid
          images={project.images}
          title={project.polaroidTitle}
          size="medium"
          tilt={project.tiltClass}
        />
      </div>
    </article>
  );
}
