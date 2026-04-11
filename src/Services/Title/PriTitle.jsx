import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PriTitle = ({ prititle, className }) => {
  const smallhdrRef = useRef(null);
  const charsRef = useRef([]);

  useGSAP(() => {
    if (window.innerWidth < 768) return;
    if (!charsRef.current.length) return;

    gsap.fromTo(
      charsRef.current,
      {
        x: -200,
        // y: 100,
        opacity: 0,
        filter: "blur(4px)",
      },
      {
        x: 0,
        // y: 0,
        opacity: 1,
        duration: 0.6,
        filter: "blur(0px)",
        stagger: -0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: smallhdrRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <h4
      ref={smallhdrRef}
      className={`flex items-center gap-2 capitalize select-none font-bold text-[16px] md:text-lg ${className}`}
    >
      <span className="w-3 h-3 bg-green-400 rounded-full inline-block"></span>

      {/* 🔥 Split characters */}
      <span>
        {prititle.split("").map((char, index) => (
          <span
            key={index}
            ref={(el) => (charsRef.current[index] = el)}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </h4>
  );
};

export default PriTitle;
