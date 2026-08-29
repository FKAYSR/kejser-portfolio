import styles from "../components/Navbar.module.css";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className="FREJA-KEJSER">
        <img src="/fulde-navn.svg" alt="Freja Kejser" />
      </Link>

      <div className={styles.links}>
        <Link to="/" className="text-wrapper">
          Home
        </Link>
        <Link to="/overview" className="text-wrapper">
          Projects
        </Link>
        <Link to="/about" className="text-wrapper">
          About me
        </Link>
        <Link to="/contact" className="text-wrapper">
          Contact
        </Link>
      </div>
    </nav>
  );
};