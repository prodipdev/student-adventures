import rightImg from "../../../assets/Group 172.png";
import styles from "./Discounts.module.css";
import Subtract from "../../../assets/icon/SubtractOrange.svg";
import Ellipse from "../../../assets/icon/Ellipse 53.svg";

const Discounts = () => {
  return (
    <section className={styles.discountsInfo}>
      <div className={styles.leftSide}>
        <div className={styles.leftSvg}>
          <img src={Ellipse} alt="" />
          <img src={Subtract} alt="" />
        </div>
        <p>Get 20% off for student</p>
        <h3>
          Student discounts available.
          <br />
          <span>Get ready for some fun in the sun!</span>
        </h3>

        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Massa quis natoque sit quam</li>
          <li>Eros non pellentesque elit </li>
          <li>Tortor id euismod habitant</li>
          <li>Sed suspendisse id in ultrices</li>
        </ul>
        <button className="primary_btn">Explore More</button>
      </div>
      <div className={styles.rightSide}>
        <img src={rightImg} alt="" />
      </div>
    </section>
  );
};

export default Discounts;
