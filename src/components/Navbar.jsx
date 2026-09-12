import styles from "../components/Navbar.module.css";
import { NavLink, Link, useLocation } from "react-router";
import name from "../assets/images/full-name.svg";

export default function Navbar() {
  const location = useLocation();

  const handleLogoClick = (e) => {

    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" onClick={handleLogoClick} className="FREJA-KEJSER">
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