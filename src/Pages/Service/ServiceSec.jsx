import { ContainerIcon } from "lucide-react";
import React from "react";

import Container from "../../Components/Container/Container";
import { serviceCard } from "../../Services/JSON/Service/ServiceCard";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import SubTitle from "../../Services/Title/SubTitle";
import PriTitle from "../../Services/Title/PriTitle";

const ServiceSec = () => {
    const isMobile = window.innerWidth < 768;
  return (
    <section className="bg-[#faf8f4] py-10 sm:py-20 overflow-hidden min-h-auto relative z-10">
      <Container>
        <div className="mb-10 md:mb-20">
             <div className="flex flex-col lg:flex-row justify-between items-start gap-5 md:gap-10">
          {/* LEFT SMALL TITLE */}
          <div className="lg:w-[25%]">
            <PriTitle
              prititle="Our services"
              className="text-gray-600 flex items-center gap-2"
            />
          </div>

          {/* RIGHT BIG TEXT */}
          <div className="lg:w-[75%]">
            <SubTitle
              subtitle={ 
                isMobile
                  ? [
                      <>
                        <span className="ml-20">
                          Making the Solar Switch Easy
                        </span>{" "}
                        and Affordable — helping you transition to clean,
                        renewable energy with reliable solutions that reduce
                        costs and{" "}
                        <span className="text-green-500">
                          power a sustainable future.
                        </span>
                      </>,
                    ]
                  : [
                      <span className="ml-40">
                        Making the Solar Switch Easy and
                      </span>,
                      <>Affordable — helping you transition to clean,</>,
                      <> renewable energy with reliable solutions that</>,
                      <>
                        {" "}
                        reduce costs and{" "}
                        <span className="text-green-500">
                          power a sustainable future.
                        </span>
                      </>,
                    ]
              }
              className=""
            />
          </div>
        </div>
        </div>
    {serviceCard.map((service, index) => (
  <div
    key={index}
    className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-20"
  >
    {/* Image */}
    <div
      className={`h-100 sm:h-120 md:h-160 w-full 
      ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}
    >
      <img
        src={service.imgSrc}
        alt={service.heading}
        className="rounded-xl w-full h-full object-cover"
      />
    </div>

    {/* Text */}
    <div
      className={`${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}
    >
      <h2 className="text-2xl md:text-[44px] font-medium tracking-tight text-gray-900">
        {service.heading}
      </h2>

      <p className="font-semibold text-[#0000009e] text-base sm:text-lg/snug mt-3 md:mt-5 mb-8 md:mb-10">
        {service.desc}
      </p>

      <SecondaryButton content="Learn More" className="bg-gray-300" />
    </div>
  </div>
))}
      </Container>
    </section>
  );
};

export default ServiceSec;
