import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Container from "../../Components/Container/Container";
import MainTitle from "../../Services/Title/MainTitle";
import { useRef } from "react";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
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
      className="service-banner-sec sticky top-0 min-h-screen flex items-center md:items-end pb-0 md:pb-10 z-8"
    >
      <Container>
        <div className="grid lg:grid-cols-[1fr_auto] items-center gap-7.5 ">
          <div className=" max-w-190">
            <MainTitle className="text-white " maintitle={["Our Service"]} />
            <p className="text-[16px]/[22px] md:text-lg/[26px] lg:text-xl/[30px] text-[#f8f5ec] font-medium pt-5 relative z-2">
              Clean and efficient solar solutions for homes and businesses
              helping you reduce electricity costs and move toward sustainable
              energy.
            </p>
          </div>
          <div className="lg:self-end banner-btn relative z-11">
            <SecondaryButton
              content={"Get Free Consultation"}
              path="/contact"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
