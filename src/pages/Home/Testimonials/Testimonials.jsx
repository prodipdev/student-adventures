import styles from "./Testimonials.module.css";
import img4 from "../../../assets/avatar/avatar4.png";
import img5 from "../../../assets/avatar/avatar5.png";
import img6 from "../../../assets/avatar/avatar6.png";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    name: "Corey Korsgaard",
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: img4,
  },
  {
    name: "Jakob Aminoff",
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: img5,
  },
  {
    name: "Carla Press",
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: img6,
  },
];
const Testimonials = () => {
  return (
    <section>
      <h2>Testimonials</h2>
      <div className={styles.testimonialsContainer}>
        {testimonialsData.map((item, index) => (
          <TestimonialCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
