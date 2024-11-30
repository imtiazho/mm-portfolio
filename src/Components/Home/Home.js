import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Intro from "../Intro/Intro";
import Footer from "../Footer/Footer";
import HelmetHook from "../../Hooks/HelmetHook";
import Aos from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaInfoCircle } from "react-icons/fa";

Aos.init();

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: "0.5rem",
    });
  }, []);

  return (
    <div>
      <HelmetHook pageName={"Mahmida - Home"} />
      <NavBar />
      <Intro />
      <Footer />
    </div>
  );
};

export default Home;
