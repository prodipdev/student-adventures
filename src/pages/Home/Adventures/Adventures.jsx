import avatar1 from "../../../assets/avatar/avatar1.png";
import avatar2 from "../../../assets/avatar/avatar2.png";
import avatar3 from "../../../assets/avatar/avatar3.png";
import AdventureCard from "./AdventureCard";
import Subtract from "../../../assets/icon/Subtract.svg";
import Ellipse from "../../../assets/icon/Ellipse 56.svg";
import styles from "./Adventures.module.css";

const Adventures = () => {
  const adventuresData = [
    {
      name: "Jenny Wilson",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing...",
      image: avatar1,
    },
    {
      name: "Adiba Roy",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing...",
      image: avatar2,
    },
    {
      name: "Prodip Dev",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing...",
      image: avatar3,
    },
  ];
  return (
    <section className={styles.adventures}>
      <div className={styles.leftSide}>
        {adventuresData.map((item) => (
          <AdventureCard key={item.name} data={item} />
        ))}
      </div>
      <div className={styles.rightSide}>
        <div className={styles.subtractIcon}>
          <img src={Subtract} alt="icon" />
        </div>
        <div className={styles.ellipseIcon}>
          <img src={Ellipse} alt="icon" />
        </div>

        <h3>
          Tropical Adventure <br /> <span>for Students.</span>
        </h3>
        <p>Student Tropical Vacation: Relax and Recharge</p>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Massa quis natoque sit quam</li>
          <li>Eros non pellentesque elit </li>
          <li>Tortor id euismod habitant</li>
          <li>Sed suspendisse id in ultrices</li>
        </ul>
        <button className="primary_btn">Explore More</button>
      </div>
    </section>
  );
};

export default Adventures;
