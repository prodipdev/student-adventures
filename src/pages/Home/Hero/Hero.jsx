import styles from "./Hero.module.css";
import heroLogo from "../../../assets/Group 171.png";
import ellipse from "../../../assets/icon/Ellipse 46.svg";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.leftSide}>
        <img src={ellipse} alt="svg" />
        <p className={styles.subTitle}>Discover the beauty of the tropics</p>
        <div className={styles.title}>
          <span>Tropical Destinations</span> <br /> For Student
        </div>
        <p className={styles.details}>
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
