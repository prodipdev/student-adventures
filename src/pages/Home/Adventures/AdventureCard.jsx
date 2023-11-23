/* eslint-disable react/prop-types */
import styles from "./Adventures.module.css";
const AdventureCard = ({ data }) => {
  const { name, description, image } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt="avatar" />
      <div>
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AdventureCard;
