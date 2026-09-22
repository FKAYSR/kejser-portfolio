import logoSmall from "../assets/icons/logo-small.svg";
import github from "../assets/icons/github-contact.svg";
import linkedin from "../assets/icons/linkedin-contact.svg";
import mail from "../assets/icons/mail-contact.svg";
import styles from "./Footer.module.css";
import LinkBtn from "../components/LinkBtn";
import cv from "../assets/cv.pdf";

export default function Footer() {
  return (
    <footer className={`${styles.footer} text-style-body-text`}>
      <div className={styles.brandGroup}>
        <img className={styles.logo} alt="FK Logo" src={logoSmall} />
        <span className={styles.copyright}>© 2026 Freja Kejser</span>
      </div>

      <address className={styles.contactGroup}>
        <div className={styles.cvContainer}>
          <LinkBtn
            href={cv}
            variant="external"
            target="_blank"
            className={styles.cvButton}
          >
            Download full CV (PDF)
          </LinkBtn>
        </div>

        <span className={styles.separator} aria-hidden="true">
          •
        </span>
        <a href="mailto:freja.kaysr@gmail.com" className={styles.mailLink}>
          <img className={styles.icon} alt="Mail" src={mail} />
          <span>freja.kaysr@gmail.com</span>
        </a>

        <span className={styles.separator} aria-hidden="true">
          •
        </span>
        <div className={styles.socialLinks}>
          <a
            className={styles.socialLink}
            href="https://www.linkedin.com/in/freja-kejser-00605b383"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className={styles.icon} alt="LinkedIn" src={linkedin} />
          </a>

          <span className={styles.separator} aria-hidden="true">
            •
          </span>
          <a
            className={styles.socialLink}
            href="https://github.com/FKAYSR"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className={styles.icon} alt="GitHub" src={github} />
          </a>
        </div>
      </address>
    </footer>
  );
}
