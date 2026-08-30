import github from "../assets/icons/github-contact.svg";
import linkedin from "../assets/icons/linkedin-contact.svg";
import mail from "../assets/icons/mail-contact.svg";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contactContainer}>
        <h1 className={styles.heading}>want to explore together?</h1>
        <a href="mailto:kejserfreja@gmail.com" className={styles.mailLink}>
          <img className={styles.mailIcon} alt="Mail" src={mail} />
          <span>kejserfreja@gmail.com</span>
        </a>

        <div className={styles.socialGroup}>
          <a
            className={styles.socialLink}
            href="https://www.linkedin.com/in/freja-kejser-00605b383"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className={styles.socialIcon} alt="LinkedIn" src={linkedin} />
          </a>

          <a
            className={styles.socialLink}
            href="https://github.com/FKAYSR/portfolio-freja-kejser"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className={styles.socialIcon} alt="GitHub" src={github} />
          </a>
        </div>
      </div>
    </div>
  );
}
