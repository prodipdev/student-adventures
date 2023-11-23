/* eslint-disable react/prop-types */
import styles from "./Destinations.module.css";

const DestinationsCard = ({ data }) => {
  const { university, location, image } = data;
  return (
    <div className={styles.card}>
      <img src={image} />
      <div className={styles.cardInfo}>
        <h4>{university}</h4>
        <div>
          <p>{location}</p> <button>•••</button>
        </div>
      </div>
    </div>
  );
};

export default DestinationsCard;
