import styles from "./Hero.module.css";
import heroLogo from "../../../assets/Group 171.png";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.leftSide}>
        <p>Discover the beauty of the tropics</p>
        <div>
          <span>Tropical Destinations</span> For Student
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
          integer rutrum nisi. A nec nisl vitae{" "}
        </p>
        <button className="primary_btn">SIGN UP</button>
      </div>
      <div className={styles.rightSide}>
        <img src={heroLogo} alt="" />
      </div>
    </section>
  );
};

export default Hero;
