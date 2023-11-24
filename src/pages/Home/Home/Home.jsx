import Footer from "../../Shared/Footer/Footer";
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
      {/* Start Main Content of Home page */}
      <main>
        <Hero />
        <Adventures />
        <Destinations />
        <Discounts />
        <BookNow />
        <Testimonials />
      </main>
      {/* End Main Content of Home page */}
      <Footer />
    </>
  );
};

export default Home;
