import arrow from "../assets/icons/arrow-bg-middle.svg";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={styles.scrollButton}
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <img src={arrow} alt="" aria-hidden="true" />
    </button>
  );
}
