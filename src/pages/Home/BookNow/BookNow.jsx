import styles from "./BookNow.module.css";
import leftImg from "../../../assets/Group 173.png";
import BookNowForm from "./BookNowForm";

const BookNow = () => {
  return (
    <section className={styles.bookNow}>
      <div>
        <img src={leftImg} alt="left image" />
      </div>
      <div>
        <BookNowForm />
      </div>
    </section>
  );
};

export default BookNow;
