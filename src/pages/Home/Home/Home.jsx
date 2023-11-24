import Navbar from "../../Shared/Navbar/Navbar";
import Adventures from "../Adventures/Adventures";
import BookNow from "../BookNow/BookNow";
import Destinations from "../Destinations/Destinations";
import Discounts from "../Discounts/Discounts";
import Hero from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Adventures />
      <Destinations />
      <Discounts />
      <BookNow />
      <Testimonials />
    </>
  );
};

export default Home;
