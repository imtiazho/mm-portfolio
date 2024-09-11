import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Intro from "../Intro/Intro";
import Footer from "../Footer/Footer";
import HelmetHook from "../../Hooks/HelmetHook";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: "2rem",
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
