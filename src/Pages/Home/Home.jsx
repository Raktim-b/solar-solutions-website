import React from "react";
import Banner from "./Banner";
import About from "./About";
import Service from "./Service";
import Steps from "./Steps";
// import Step from "./Step";
import Autoscroll from "../../Components/AutoScroll/Autoscroll";
import Work from "./Work";
import Testimonials from "./Testimonials";
import Accordion from "../../Services/Accordian/Accordian";
import QuestionAnswer from "./QuestionAnswer";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Service />
      <Steps />
      {/* <Step /> */}
      <Work />
      <Testimonials />
      <Autoscroll />
      <QuestionAnswer />
    </>
  );
};

export default Home;
