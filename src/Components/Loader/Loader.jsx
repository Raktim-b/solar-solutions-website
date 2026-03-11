import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Loader = () => {
  const currentPath = useLocation().pathname;
  const stairParent = useRef(null);

  useGSAP(() => {
    const gsapTL = gsap.timeline();
    gsapTL.to(stairParent.current, {
      display: "block",
    });
    gsapTL.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.3,
      },
    });
    gsapTL.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    gsapTL.to(stairParent.current, {
      // display: "none",
      autoAlpha: 0,
    });
    gsapTL.to(".stair", {
      y: "0%",
    });
    gsap.from(".page-content", {
      opacity: 0,
      scale: 1.3,
      y: 40,
      duration: 1,
      delay: 1.2,
      ease: "power3.out",
    });
  }, [currentPath]);

  return (
    <div
      ref={stairParent}
      className="fixed top-0 left-0 w-full h-screen z-9999 pointer-events-none overflow-hidden "
    >
      <div className="flex w-full h-full">
        <div className="stair w-1/5 h-full bg-black"></div>
        <div className="stair w-1/5 h-full bg-black"></div>
        <div className="stair w-1/5 h-full bg-black"></div>
        <div className="stair w-1/5 h-full bg-black"></div>
        <div className="stair w-1/5 h-full bg-black"></div>
      </div>
    </div>
  );
};

export default Loader;
