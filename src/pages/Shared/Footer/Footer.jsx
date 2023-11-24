import { footerShortLinks } from "../../../constants";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>Student Special: Discounted rates on tropical getaways!</h2>
      <p>
        Let’s embody your beautiful ideas together, simplify the way you
        visualize your next big things.
      </p>
      <ul className={styles.shortLinks}>
        {footerShortLinks.map(({ name, path }, index) => (
          <li
            key={name}
            className={index >= 4 && index <= 8 ? styles.boldLink : ""}
          >
            <a href={path}>{name}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
