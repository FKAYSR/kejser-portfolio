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

  const handleCtaClick = (e) => {
    if (ctaHref && ctaHref.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(ctaHref);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (onCtaClick) {
      onCtaClick(e);
    }
  };

  return (
    <section className={`${styles.hero} hero-full-bleed`}>
      <img
        className={`${styles.image} ${styles[imageFit]}`}
        src={image}
        alt={imageAlt}
      />
      <div className={styles.frame}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {ctaLabel &&
          (ctaHref ? (
            <LinkBtn href={ctaHref} variant="internal" onClick={handleCtaClick}>
              {ctaLabel}
            </LinkBtn>
          ) : (
            <button className={styles.CTA} onClick={onCtaClick} type="button">
              <span className={styles[`text-wrapper`]}>{ctaLabel}</span>
            </button>
          ))}
      </div>
    </section>
  );
}
