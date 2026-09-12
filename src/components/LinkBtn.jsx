import styles from "./LinkBtn.module.css";
import { Link } from "react-router";
import arrowAccent from "../assets/icons/arrow-accent-middle.svg";
import arrowBg from "../assets/icons/arrow-bg-middle.svg";

export default function LinkBtn({
  href,
  to,
  children = "Visit live site",
  variant = "internal",
  icon,
  onClick,
}) {
  const className = `${styles.linkButton} ${styles[`linkButton--${variant}`]}`;
  const iconMarkup = icon
    ?.replaceAll("#513238", "var(--icon-fill)")
    .replaceAll("#F6F3EE", "var(--icon-stroke)");

  const arrow = (
    <span className={styles.arrow} aria-hidden="true">
      <img src={arrowAccent} alt="" className={styles.arrowAccent} />
      <img src={arrowBg} alt="" className={styles.arrowBg} />
    </span>
  );

  const content = (
    <>
      {variant === "external" && icon && (
        <span
          className={styles.icon}
          dangerouslySetInnerHTML={{ __html: iconMarkup }}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
      {variant === "internal" && arrow}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={variant === "external" ? "_blank" : undefined}
      rel={variant === "external" ? "noopener noreferrer" : undefined}
      className={className}
      onClick={onClick}
    >
      {content}
    </a>
  );
}
