import styles from "./Navbar.module.css";
import { useState } from "react";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("hero/cross.png")
              : getImageUrl("hero/menu.png")
          }
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          alt="menu btn"
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="mailto:kanika.mahindroo@gmail.com">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
