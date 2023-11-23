import DestinationsCard from "./DestinationsCard";
import styles from "./Destinations.module.css";
import leftArrow from "../../../assets/icon/left-arrow.svg";
import leftArrowActive from "../../../assets/icon/left-arrow-active.svg";
import rightArrow from "../../../assets/icon/right-arrow.svg";
import rightArrowActive from "../../../assets/icon/right-arrow-active.svg";
import img1 from "../../../assets/card-image-1.png";
import img2 from "../../../assets/card-image-2.png";
import img4 from "../../../assets/card-image.png";
import { useState } from "react";

// dummy data for testing purposes
const destinationsData = [
  {
    university: "Harvard University",
    location: "Cambridge, Massachusetts, UK",
    image: img1,
  },
  {
    university: "Oxford University",
    location: "Oxford, England",
    image: img2,
  },
  {
    university: "Stanford University",
    location: "Cambridge, Massachusetts, UK",
    image: img4,
  },
  {
    university: "Nanyang",
    location: "Cambridge, Massachusetts, UK",
    image: img1,
  },
  {
    university: "Harvard University",
    location: "Cambridge, Massachusetts, UK",
    image: img1,
  },
  {
    university: "Oxford University",
    location: "Oxford, England",
    image: img2,
  },
  {
    university: "Stanford University",
    location: "Cambridge, Massachusetts, UK",
    image: img4,
  },
  {
    university: "Nanyang",
    location: "Cambridge, Massachusetts, UK",
    image: img1,
  },
];
const Destinations = () => {
  const [currentCards, setCurrentCards] = useState(0);
  const [leftArrowActiveState, setLeftArrowActiveState] = useState(false);
  const [rightArrowActiveState, setRightArrowActiveState] = useState(true);

  const visibleDestinations = destinationsData.slice(
    currentCards,
    currentCards + 4
  );

  const moveLeft = () => {
    if (currentCards > 0) {
      setCurrentCards(currentCards - 1);
      setLeftArrowActiveState(true);
      setRightArrowActiveState(false);
    }
    if (currentCards === 1) {
      setLeftArrowActiveState(false);
    }
  };

  const moveRight = () => {
    if (currentCards < destinationsData.length - 4) {
      setCurrentCards(currentCards + 1);
      setLeftArrowActiveState(false);
      setRightArrowActiveState(true);
    }
    if (currentCards === destinationsData.length - 5) {
      setRightArrowActiveState(false);
    }
  };

  return (
    <section className={styles.destinations}>
      <h3>Our Destinations</h3>
      <div className={`${styles.cardGroup}`}>
        {visibleDestinations.map((item) => (
          <DestinationsCard key={item.university} data={item} />
        ))}
      </div>
      <div className={styles.arrow}>
        <img
          src={leftArrowActiveState ? leftArrowActive : leftArrow}
          alt="left arrow"
          onClick={moveLeft}
          style={{ cursor: "pointer" }}
        />
        <div>
          <span>{currentCards + 1}</span> /{" "}
          <span>{destinationsData.length - 3}</span>
        </div>
        <img
          src={rightArrowActiveState ? rightArrowActive : rightArrow}
          alt="right arrow"
          onClick={moveRight}
          style={{ cursor: "pointer" }}
        />
      </div>
    </section>
  );
};

export default Destinations;
