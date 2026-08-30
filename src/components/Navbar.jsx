import styles from "../components/Navbar.module.css";
import { NavLink, Link } from "react-router";
import name from "../assets/images/full-name.svg";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className="FREJA-KEJSER">
        <img src={name} alt="Freja Kejser" />
      </Link>

      <div className={styles.links}>
        <NavLink to="/" className={styles.textWrapper} alt="Home">
          Home
        </NavLink>
        <NavLink to="/overview" className={styles.textWrapper} alt="Project overview">
          Projects
        </NavLink>
        <NavLink to="/about" className={styles.textWrapper} alt="About me">
          About me
        </NavLink>
        <NavLink to="/contact" className={styles.textWrapper} alt="Contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};