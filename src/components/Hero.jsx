import styles from "./Hero.module.css";

export default function Hero({
  image,
  imageAlt = "",
  title,
  subtitle,
  ctaLabel,
  onCtaClick,
  imageFit = "cover",
}) {
  return (
    <section className={styles.hero}>
      <img
        className={`${styles.image} ${styles[imageFit]}`}
        src={image}
        alt={imageAlt}
      />
      <div className={styles.frame}>
        {title}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {ctaLabel && (
          <button className={styles.CTA} onClick={onCtaClick} type="button">
            <span className={styles[`text-wrapper`]}>{ctaLabel}</span>
          </button>
        )}
      </div>
    </section>
  );
}
