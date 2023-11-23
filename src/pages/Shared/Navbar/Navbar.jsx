import styles from "./Navbar.module.css";

const Navbar = () => {
  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/schedules", name: "Schedules" },
    { path: "/membership", name: "Membership" },
    { path: "/pricing", name: "Pricing" },
  ];

  return (
    <nav>
      <ul className={styles.navLink}>
        {links.map((link, index) => (
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
