import Banner from "./Banner";
import About from "./About";
import Service from "./Service";
import Steps from "./Steps";
import Work from "./Work";
import Testimonials from "./Testimonials";
import QuestionAnswer from "./QuestionAnswer";
import News from "./News";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <About />
      <Service />
      <Steps />
      <Work />
      <Testimonials />
      <QuestionAnswer />
      <News />
    </>
  );
};

export default Home;
