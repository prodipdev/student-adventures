import Navbar from "../../Shared/Navbar/Navbar";
import Adventures from "../Adventures/Adventures";
import Destinations from "../Destinations/Destinations";
import Discounts from "../Discounts/Discounts";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Adventures />
      <Destinations />
      <Discounts />
    </>
  );
};

export default Home;
