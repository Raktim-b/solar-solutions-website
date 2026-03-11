import React from "react";
import Banner from "./Banner";
import About from "./About";
import Service from "./Service";
import Process from "./Process";
import Step from "./Step";
import Autoscroll from "../../Components/AutoScroll/Autoscroll";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Service />
      <Process />
      <Autoscroll />
      <Step />
    </>
  );
};

export default Home;
