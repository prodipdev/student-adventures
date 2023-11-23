import { navLinks } from "../../../constants";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navLink}>
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
