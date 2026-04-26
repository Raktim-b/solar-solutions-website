import React, { useRef } from "react";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import Container from "../../Components/Container/Container";
import SubTitle from "../../Services/Title/SubTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Banner = ({ service }) => {
  const bannerRef = useRef(null);
  useGSAP(() => {
    if (window.innerWidth < 768) return;
    gsap.fromTo(
      bannerRef.current,
      {
        scale: 1.4,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        delay: 1,
        ease: "power3.out",
      },
    );
    gsap.from(".banner-btn", {
      x: 180,
      opacity: 0,
      duration: 1.3,
      delay: 1.6,
      ease: "power3.out",
    });
  });

  const { imgSrc2, heading } = service;
  return (
    <section
      ref={bannerRef}
      className="min-h-screen bg-cover bg-top sticky top-0 flex items-end justify-center pb-20 md:pb-10 z-8"
      style={{
        backgroundImage: `url(${imgSrc2})`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/30 to-black/80"></div>
      <Container>
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-7.5 ">
          <div className=" max-w-190 relative z-10">
            <SubTitle
              className="text-white "
              subtitle={[heading]}
              animateOnScroll={false}
            />
          </div>
          <div className="lg:self-end banner-btn relative z-11">
            <SecondaryButton content={"Back To Service"} path="/service" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
