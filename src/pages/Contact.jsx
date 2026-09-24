import github from "../assets/icons/github-contact.svg";
import linkedin from "../assets/icons/linkedin-contact.svg";
import mail from "../assets/icons/mail-contact.svg";
import styles from "./Contact.module.css";
import LinkBtn from "../components/LinkBtn";
import cv from "../assets/cv.pdf";

export default function Contact() {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.contactContainer}>
        <h1 className={styles.heading}>Let's explore together</h1>
        <a href="mailto:freja.kaysr@gmail.com" className={styles.mailLink}>
          <img className={styles.mailIcon} alt="Mail" src={mail} />
          <span>freja.kaysr@gmail.com</span>
        </a>

        <div className={styles.socialGroup} aria-label="Social links">
          <a
            className={styles.socialLink}
            href="https://www.linkedin.com/in/freja-kejser"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className={styles.socialIcon} alt="LinkedIn" src={linkedin} />
          </a>

          <a
            className={styles.socialLink}
            href="https://github.com/FKAYSR"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className={styles.socialIcon} alt="GitHub" src={github} />
          </a>
        </div>

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
      </div>
    </main>
  );
}
