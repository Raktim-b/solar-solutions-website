import React from "react";
import Container from "../../Components/Container/Container";
import SubTitle from "../../Services/Title/SubTitle";
import PriTitle from "../../Services/Title/PriTitle";
import { priceCard } from "../../Services/JSON/Service/PricingCard";
import CardTitle from "../../Services/Title/CardTitle";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";

const Pricing = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <section className="bg-[#101010] py-10 sm:py-30 min-h-auto md:min-h-screen relative z-10">
      <img
        src="/Images/Home/Sec-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Container>
        <div className="mb-8 sm:mb-16 md:mb-20">
          <div className="flex flex-col mb-8 md:mb-16 lg:flex-row justify-between items-start gap-5 md:gap-10">
            {/* LEFT */}
            <div className="lg:w-[25%]">
              <PriTitle
                prititle="Pricing and plans"
                className="text-gray-400 flex items-center gap-2"
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
                className="text-white"
              />
            </div>
          </div>
          <div className="relative">
            {priceCard.map((item, index) => (
              <div
                key={index}
                className="static md:sticky"
                style={{
                  top: `${100 + index * 10}px`,
                  zIndex: index + 1,
                }}
              >
                <div className="bg-[#232323] rounded-md md:rounded-xl p-5 md:p-12 flex flex-col lg:flex-row items-center gap-5 md:gap-12 max-w-full sm:max-w-[75%] mx-auto mb-10 shadow-xl">
                  {/* IMAGE */}
                  <div className="w-full max-w-full sm:max-w-88.5 h-60 md:h-90 rounded-md md:rounded-xl overflow-hidden">
                    <img
                      src={item.imgSrc}
                      alt={item.heading}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col justify-center">
                    {/* NUMBER */}
                    <span className="text-3xl md:text-[64px] font-bold text-green-500 mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* TITLE */}
                    <CardTitle
                      cardtitle={item.heading}
                      className="text-white"
                    />

                    {/* DESCRIPTION */}
                    <p className="font-medium text-gray-400 text-base sm:text-lg/snug mt-3 md:mt-5">
                      {item.desc}
                    </p>
                    <div className="mt-5 md:mt-10">
                      <SecondaryButton content="Learn More" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
