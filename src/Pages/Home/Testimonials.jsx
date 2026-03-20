import React from "react";
import SubTitle from "../../Services/Title/SubTitle";
import PriTitle from "../../Services/Title/PriTitle";
import ViewMore from "../../Components/Buttons/ViewMore";

import { test } from "../../Services/JSON/Testimonial";
import { Star } from "lucide-react";
import Container from "../../Components/Container/Container";

const Testimonials = () => {
  const leftCards = test.slice(0, 3);
  const rightCards = test.slice(3, 6);
  return (
    <section className="relative min-h-auto md:min-h-[230vh] z-20 bg-[#f6f7f9] grid grid-cols-1 md:grid-cols-3 pt-10 pb-10 md:pb-20 md:pt-0">
      {/* LEFT CARDS */}
      <div className="flex flex-col items-center md:items-end gap-5 sm:gap-10 md:gap-20 md:pt-[100vh] md:pr-6 order-2 md:order-1 mt-10 md:mt-0">
        {leftCards.map((item, index) => (
          <div
            key={index}
            className="max-w-70 md:max-w-100 h-70 md:h-80 bg-white rounded-lg sm:rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col justify-between"
          >
            {/* Top */}
            <div className="flex justify-between items-start">
              <img src={item.imgSrc} className="w-10 sm:w-14" />

              <div className="flex text-orange-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} />
                ))}
              </div>
            </div>

            <p className="text-gray-500 text-sm sm:text-[16px] leading-relaxed">{item.desc}</p>

            <div className="flex items-center gap-3">
              <figure className="w-12.5 h-12.5 rounded-full overflow-hidden">
                <img
                  src={item.imgSrc2}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-gray-400 text-sm">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CENTER TEXT */}
      <div className="md:sticky md:top-0 md:h-screen flex justify-center items-center order-1 md:order-2">
        <Container>
          <div className="flex flex-col items-start md:items-center text-start md:text-center">
            <PriTitle prititle="Testimonials" className="text-green-500" />

            <SubTitle subtitle="Let’s See What Our Client Say" />

            <ViewMore contnt="View More" className="text-black" />
          </div>
        </Container>
      </div>

      {/* RIGHT CARDS */}
      <div className="hidden md:flex flex-col items-center md:items-start gap-10 md:gap-20 md:pt-[80vh] md:pl-6 order-3 mt-10 md:mt-0">
        {rightCards.map((item, index) => (
          <div
            key={index}
            className="max-w-75 md:max-w-100 h-80 bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between"
          >
            {/* Top */}
            <div className="flex justify-between items-start">
              <img src={item.imgSrc} className="w-14" />

              <div className="flex text-orange-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} />
                ))}
              </div>
            </div>

            <p className="text-gray-500 text-sm sm:text-[16px] leading-relaxed">{item.desc}</p>

            <div className="flex items-center gap-3">
              <figure className="w-12.5 h-12.5 rounded-full overflow-hidden">
                <img
                  src={item.imgSrc2}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-gray-400 text-sm">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
