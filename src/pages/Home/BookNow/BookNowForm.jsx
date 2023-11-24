import styles from "./BookNow.module.css";

const BookNowForm = () => {
  return (
    <div className={styles.formContainer}>
      <h3>Book Now</h3>
      <p className={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.city}>
        <h5>CITY</h5>
        <input type="text" placeholder="Placeholder" />
      </div>
      <div className={styles.arrivalDeparture}>
        <div className={styles.arrival}>
          <h5>ARRIVAL</h5>
          <input type="text" value="10 October" />
        </div>
        <div className={styles.departure}>
          <h5>DEPARTURE</h5>
          <input type="text" value="11 October" />
        </div>
      </div>
      <div className={styles.starRoom}>
        <div>
          <h5>STAR</h5>
          <div className={styles.buttonGroup}>
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M9.27259 0.591553H6.47103V6.19467H0.86792V8.99622H6.47103V14.5993H9.27259V8.99622H14.8757V6.19467H9.27259V0.591553Z"
                  fill="black"
                />
              </svg>
            </button>
            <input type="number" defaultValue={4} min="1" maxLength={5} />
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="5"
                viewBox="0 0 15 5"
                fill="none"
              >
                <path
                  d="M14.1364 0.844482V4.34625H0.128586V0.844482H14.1364Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <h5>ROOM</h5>
          <div className={styles.buttonGroup}>
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M9.27259 0.591553H6.47103V6.19467H0.86792V8.99622H6.47103V14.5993H9.27259V8.99622H14.8757V6.19467H9.27259V0.591553Z"
                  fill="black"
                />
              </svg>
            </button>
            <input type="number" defaultValue="4" min="1" />
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="5"
                viewBox="0 0 15 5"
                fill="none"
              >
                <path
                  d="M14.1364 0.844482V4.34625H0.128586V0.844482H14.1364Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <button className={styles.submitBtn} type="submit">
        BOOK NOW
      </button>
    </div>
  );
};

export default BookNowForm;
