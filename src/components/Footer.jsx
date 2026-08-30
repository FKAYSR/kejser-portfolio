import logoSmall from "../assets/icons/logo-small.svg";
import github from "../assets/icons/github-contact.svg";
import linkedin from "../assets/icons/linkedin-contact.svg";
import mail from "../assets/icons/mail-contact.svg";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brandGroup}>
        <img className={styles.logo} alt="FK Logo" src={logoSmall} />
        <span className={styles.copyright}>© 2026 Freja Kejser</span>
      </div>

      <div className={styles.contactGroup}>
        <a href="mailto:kejserfreja@gmail.com" className={styles.mailLink}>
          <img className={styles.icon} alt="Mail" src={mail} />
          <span>kejserfreja@gmail.com</span>
        </a>

        <a
          className={styles.socialLink}
          href="https://www.linkedin.com/in/freja-kejser-00605b383"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className={styles.icon} alt="LinkedIn" src={linkedin} />
        </a>

        <a
          className={styles.socialLink}
          href="https://github.com/FKAYSR"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className={styles.icon} alt="GitHub" src={github} />
        </a>
      </div>
    </footer>
  );
}
