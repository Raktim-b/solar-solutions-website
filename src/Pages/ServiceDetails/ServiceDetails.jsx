import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { serviceCard } from "../../Services/JSON/Service/ServiceCard";
import Banner from "./Banner";
import { serviceDetails } from "../../Services/JSON/ServiceDetails/ServiceDetails";
import ServiceAbout from "./ServiceAbout";
import Testimonial from "../Home/Testimonials";
import ContactSec from "../Service/ContactSec";

const ServiceDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { slug } = useParams();

  const service = serviceCard.find((item) => item.slug === slug);
  const details = serviceDetails.find((item) => item.slug === slug);

  if (!service || !details) return <h2>Service not found</h2>;

  return (
    <>
      <Banner service={service} />
      <ServiceAbout details={details} />
      <Testimonial />
      <ContactSec />
    </>
  );
};

export default ServiceDetails;
