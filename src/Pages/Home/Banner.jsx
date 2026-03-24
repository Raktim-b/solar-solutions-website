import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Container from "../../Components/Container/Container";
import MainTitle from "../../Services/Title/MainTitle";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import { useRef } from "react";

const Banner = () => {
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
  return (
    <section
      ref={bannerRef}
      className="banner-sec sticky top-0 min-h-screen flex items-end pb-20 z-8"
    >
      <Container>
        <div className="grid lg:grid-cols-[1fr_auto] items-center gap-7.5 ">
          <div className="max-w-250 ">
            <MainTitle
              className="text-white"
              maintitle={[
                <>Solar Solutions for </>,
                <>
                  Modern <span className="text-green-500">Living</span>
                </>,
              ]}
            />

            <p className="text-[16px]/[22px] md:text-lg/[26px] lg:text-xl/[30px] text-[#f8f5ec] font-medium pt-5 relative z-2">
              Our solar solutions are designed to deliver reliable, clean energy
              while reducing your electricity costs. By harnessing the power of
              the sun, we help homes and businesses move toward a sustainable
              future with efficient, long-lasting technology you can trust.
            </p>
          </div>

          <div className="lg:self-end banner-btn relative z-11">
            <SecondaryButton content="Contact Now" path="/contact" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
