import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";

const MainTitle = ({ maintitle = [], className }) => {
  const mainRef = useRef([]);
  const location = useLocation();
  useGSAP(() => {
    if (window.innerWidth < 768) return;
    if (!mainRef.current.length) return;
    gsap.fromTo(
      mainRef.current,
      {
        y: 50,
        opacity: 0,
        filter: "blur(15px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.25,
        delay: 1.6,
        ease: "power3.out",
        // scrollTrigger: {
        //   trigger: mainRef.current[0],
        //   start: "top 70%",
        //   toggleActions: "play none none reverse",
        // },
      },
    );
  }, [location.pathname]);
  return (
    <h1
      className={`font-semibold select-none text-[40px]/[44px] sm:text-[50px]/[48px] lg:text-[66px]/[60px] xl:text-[92px]/[90px] tracking-tight ${className}  relative z-2`}
    >
      {maintitle.map((line, index) => (
        <span
          key={index}
          ref={(el) => (mainRef.current[index] = el)}
          className="block overflow-hidden last:pb-2"
        >
          {line}
        </span>
      ))}
    </h1>
  );
};

export default MainTitle;
