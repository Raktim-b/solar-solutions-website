import React from "react";
import PrimaryBtn from "../../Components/Buttons/PrimaryBtn";

const Banner = () => {
  return (
    <section className="banner-sec min-h-[90vh] sm:min-h-screen flex justify-center items-center text-center">
      <div className="max-w-330 w-full mx-auto px-3.5">
        <div className="">
          <h1 className="font-semibold text-[19px] sm:text-[28px] md:text-[34px] lg:text-[46px] xl:text-[60px] text-white">
            Advanced Solar Solutions for Modern Living
          </h1>
          <p className="text-sm/[20px] md:text-lg/[24px] lg:text-xl/[28px] xl:text-2xl/[30px] text-white/70 pt-3.5 lg:pt-4 xl:pt-5 pb-5 xl:pb-7.5">
            Our solar solutions are designed to deliver reliable, clean energy
            while reducing your electricity costs. By harnessing the power of
            the sun, we help homes and businesses move toward a sustainable
            future with efficient, long-lasting technology you can trust.
          </p>
          <PrimaryBtn />
        </div>
      </div>
    </section>
  );
};

export default Banner;
