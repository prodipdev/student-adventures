import Navbar from "../../Shared/Navbar/Navbar";
import Adventures from "../Adventures/Adventures";
import Destinations from "../Destinations/Destinations";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Adventures />
      <Destinations />
    </>
  );
};

export default Home;
