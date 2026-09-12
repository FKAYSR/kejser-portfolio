import styles from "../components/Navbar.module.css";
import { NavLink, Link } from "react-router";
import name from "../assets/images/full-name.svg";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className="FREJA-KEJSER">
        <img src={name} alt="Freja Kejser" />
      </Link>

      <ul className={styles.links}>
        <li><NavLink to="/" className={styles.textWrapper}>Home</NavLink></li>
        <li><NavLink to="/overview" className={styles.textWrapper}>Projects</NavLink></li>
        <li><NavLink to="/about" className={styles.textWrapper}>About me</NavLink></li>
        <li><NavLink to="/contact" className={styles.textWrapper}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};