import { NavLink, Link, useLocation } from "react-router";
import name from "../assets/icons/full-name.svg";
import styles from "./Navbar.module.css";
 
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/overview", label: "Projects" },
  { to: "/about", label: "About me" },
  { to: "/contact", label: "Contact" },
];
 
export default function Navbar() {
  const { pathname } = useLocation();
 
  const handleLogoClick = (event) => {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
 
  return (
    <nav className={styles.navbar} aria-label="Main">
      <div className={`page ${styles.navbarInner}`}>
        <Link to="/" onClick={handleLogoClick} className={styles.logo}>
          <img src={name} alt="Freja Kejser" />
        </Link>
 
        <ul className={styles.links}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={styles.link}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}