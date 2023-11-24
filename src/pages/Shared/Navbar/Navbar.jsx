import { useState } from "react";
import { navLinks } from "../../../constants";
import styles from "./Navbar.module.css";
import hamburgerButton from "../../../assets/icon/hamburder.svg";
import closeButton from "../../../assets/icon/close.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // toggle navbar button for mobile devices
  const isMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav>
      <div className={styles.menu} onClick={isMenu}>
        <img src={isMenuOpen ? closeButton : hamburgerButton} alt="" />
      </div>
      <ul className={isMenuOpen ? styles.hamburgerNav : styles.navLink}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a to={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className={styles.navBtn}>
        <div>Offer</div>
        <button className="primary_btn">Courses</button>
      </div>
    </nav>
  );
};

export default Navbar;
