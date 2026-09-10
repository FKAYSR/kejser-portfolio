import styles from "./Hero.module.css";
import LinkBtn from "./LinkBtn.jsx";

export default function Hero({
  image,
  imageAlt = "",
  title,
  subtitle,
  ctaLabel,
  ctaHref,
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
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
        {ctaLabel && (
          ctaHref ? (
            <LinkBtn href={ctaHref} variant="internal">
              {ctaLabel}
            </LinkBtn>
          ) : (
            <button className={styles.CTA} onClick={onCtaClick} type="button">
              <span className={styles[`text-wrapper`]}>{ctaLabel}</span>
            </button>
          )
        )}
      </div>
    </section>
  );
}
