import React from "react";
import Banner from "./Banner";
import About from "./About";
import Service from "./Service";
import Process from "./Process";
import Step from "./Step";
import Autoscroll from "../../Components/AutoScroll/Autoscroll";
import Work from "./Work";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Service />
      <Process />
      <Autoscroll />
      <Step />
      <Work />
      <Testimonials />
    </>
  );
};

export default Home;
