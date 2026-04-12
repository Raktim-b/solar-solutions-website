import React from "react";
import Container from "../../Components/Container/Container";
import SubTitle from "../../Services/Title/SubTitle";
import PriTitle from "../../Services/Title/PriTitle";
import { priceCard } from "../../Services/JSON/Service/PricingCard";
import CardTitle from "../../Services/Title/CardTitle";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const Pricing = () => {
  const isMobile = window.innerWidth < 768;
  const cardsRef = useRef([]);
  useGSAP(() => {
    if (window.innerWidth < 768) return;
    cardsRef.current.forEach((card, index) => {
      if (!card || index === cardsRef.current.length - 1) return;

      gsap.to(card, {
        backgroundColor: "#d4d4d4", // darker gray
        ease: "none",
        scrollTrigger: {
          trigger: cardsRef.current[index + 1],
          start: "top 80%", // next card hits 50% of viewport
          end: "top 20%",
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <section className="bg-[#f5f5f5] py-10 sm:py-30 min-h-auto md:min-h-screen relative z-10">
      <Container>
        <div className="mb-8 sm:mb-16 md:mb-20">
          <div className="flex flex-col mb-8 md:mb-16 lg:flex-row justify-between items-start gap-5 md:gap-10">
            {/* LEFT */}
            <div className="lg:w-[25%]">
              <PriTitle prititle="Pricing and plans" className="" />
            </div>

            {/* RIGHT */}
            <div className="lg:w-[75%]">
              <SubTitle
                subtitle={
                  isMobile
                    ? [
                        <>
                          <span className="ml-10 sm:ml-20">
                            Affordable, Reliable Solar Energy
                          </span>{" "}
                          Solutions for{" "}
                          <span className="text-green-500">
                            Homes and Businesses
                          </span>
                        </>,
                      ]
                    : [
                        <span className="ml-40">
                          Affordable, Reliable Solar Energy
                        </span>,
                        <>
                          Solutions for{" "}
                          <span className="text-green-500">
                            Homes and Businesses
                          </span>
                        </>,
                      ]
                }
                // className="text-white"
              />
            </div>
          </div>
          <div className="relative mt-7 md:mt-10">
            {priceCard.map((item, index) => (
              <div
                key={index}
                className="static md:sticky bg-[#f5f5f5] transition-colors duration-300"
                ref={(el) => (cardsRef.current[index] = el)}
                style={{
                  top: `${80 + index * 10}px`,
                  zIndex: index + 1,
                }}
              >
                <div className="w-full py-0 md:py-10 px-0 md:px-5 mb-10 md:mb-0">
                  <div className="grid lg:grid-cols-5 gap-5 md:gap-10 items-start">
                    {/* LEFT NUMBER */}
                    <div className="col-span-2">
                      <span className="text-2xl md:text-6xl tracking-tight font-bold leading-none">
                        {String(index + 1).padStart(2, "0")}/
                      </span>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="col-span-3">
                      {/* TITLE */}
                      <CardTitle
                        cardtitle={item.heading}
                        className="texr-xl! md:text-4xl/[50px]! font-bold! tracking-tight!"
                      />

                      {/* DESCRIPTION */}
                      <p className="mt-3 md:mt-6 font-medium text-gray-800 text-base sm:text-lg/snug max-w-130">
                        {item.desc}
                      </p>

                      {/* IMAGE */}
                      <div className="mt-10 w-full md:w-5/6 h-70 md:h-110 overflow-hidden">
                        <img
                          src={item.imgSrc}
                          alt={item.heading}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SecondaryButton content="View more" />
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
