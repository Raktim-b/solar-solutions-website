import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SubTitle = ({ subtitle = [], className = "" }) => {
  const rightRef = useRef([]);

  useGSAP(() => {
    if (window.innerWidth < 768) return;
    if (!rightRef.current.length) return;

    gsap.fromTo(
      rightRef.current,
      {
        y: 100,
        opacity: 0,
        filter: "blur(4px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current[0],
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <h2
      className={`select-none text-3xl sm:text-5xl lg:text-[54px] font-semibold text-gray-900 leading-tight my-3 tracking-tighter sm:my-5 ${className}`}
    >
      {subtitle.map((line, index) => (
        <span
          key={index}
          ref={(el) => (rightRef.current[index] = el)}
          className="block overflow-hidden"
        >
          {line}
        </span>
      ))}
    </h2>
  );
};

export default SubTitle;
