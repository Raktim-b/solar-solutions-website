import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "../../Components/Container/Container";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import SubTitle from "../../Services/Title/SubTitle";
import PriTitle from "../../Services/Title/PriTitle";
import ServiceAccordian from "../../Services/Accordian/ServiceAccordian";

gsap.registerPlugin(ScrollTrigger);

const ServiceSec = () => {
  const isMobile = window.innerWidth < 768;
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const textRef = useRef([]);
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const imgWrapper = card.querySelector(".service-img-wrapper");

      const isEven = index % 2 === 0;

      gsap.fromTo(
        imgWrapper,
        {
          clipPath: isEven
            ? "inset(0 100% 0 0 round 16px)"
            : "inset(0 0 0 100% round 16px)",
          opacity: 0,
        },
        {
          clipPath: "inset(0 0% 0 0% round 16px)",
          opacity: 1,
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        },
      );
      textRef.current.forEach((text) => {
        gsap.fromTo(
          text,
          {
            y: 50,
            opacity: 0,
            filter: "blur(4px)",
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#faf8f4] py-10 sm:py-20 overflow-hidden min-h-auto relative z-10"
    >
      <Container>
        {/* Header */}
        <div className="mb-8 sm:mb-16 md:mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 md:gap-10">
            {/* LEFT */}
            <div className="lg:w-[25%]">
              <PriTitle
                prititle="Our services"
                className="text-gray-600 flex items-center gap-2"
              />
            </div>

            {/* RIGHT */}
            <div className="lg:w-[75%]">
              <SubTitle
                subtitle={
                  isMobile
                    ? [
                        <>
                          <span className="ml-10 sm:ml-20">
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
              />
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <ServiceAccordian />
      </Container>
    </section>
  );
};

export default ServiceSec;
