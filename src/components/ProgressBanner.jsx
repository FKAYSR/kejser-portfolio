import styles from "./ProgressBanner.module.css";

export default function ProgressBanner() {
  return (
    <div className={styles.banner} role="status">
      <span className={styles.bannerContent}>
        <span>Portfolio still under construction</span>
        <span className={styles.dots} aria-label="">
          <span className={styles.dot} aria-hidden="true">.</span>
          <span className={styles.dot} aria-hidden="true">.</span>
          <span className={styles.dot} aria-hidden="true">.</span>
        </span>
      </span>
    </div>
  );
} 

// Live Portfolio — New features in development
// Portfolio '26 — Work in Progress
