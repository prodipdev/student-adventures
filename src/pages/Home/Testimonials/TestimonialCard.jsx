/* eslint-disable react/prop-types */
import styles from "./Testimonials.module.css";

const TestimonialCard = ({ data }) => {
  const { name, bio, image } = data;
  return (
    <div className={styles.cardBody}>
      <img src={image} alt="avatar" />
      <h5>{name}</h5>
      <div className={styles.hr}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="126"
          height="2"
          viewBox="0 0 126 2"
          fill="none"
        >
          <path d="M0 1H126" stroke="#A0CD9E" />
        </svg>
      </div>
      <p>{bio}</p>
    </div>
  );
};

export default TestimonialCard;
