import { Link } from "react-router";
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

        <Link to={`/project/${project.id}`} className={styles.viewButton}>
          View project <span> → </span>
        </Link>
      </div>

      {/* Right column - polaroid component */}
      <div className={styles.polaroidWrapper}>
        <Polaroid
          images={project.thumbnail ? [project.thumbnail] : []}
          imageAlt={project.thumbnailAlt}
          title={project.title}
          size="medium"
          tilt={project.tiltClass}
        />
      </div>
    </article>
  );
}
