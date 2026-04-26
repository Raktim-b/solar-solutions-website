import React, { useEffect } from "react";
import Banner from "./Banner";
import Stats from "./Stats";
import ServiceSec from "./ServiceSec";
import Pricing from "./Pricing";
import ContactSec from "./ContactSec";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <Stats />
      <ServiceSec />
      <Pricing />
      <ContactSec />
    </>
  );
};

export default Service;
