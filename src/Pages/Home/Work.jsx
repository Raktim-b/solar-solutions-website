import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";
import { workCard } from "../../Services/JSON/Home/Work";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import CardTitle from "../../Services/Title/CardTitle";
import Container from "../../Components/Container/Container"; // ✅ added

const Work = () => {
  const leftCards = workCard.slice(0, 2);
  const rightCards = workCard.slice(2, 4);

  const leftRefs = useRef([]);
  const rightRefs = useRef([]);
  const isMobile = window.innerWidth < 768;
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      leftRefs.current.forEach((el) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            y: 150,
            x: 250,
            opacity: 0,
            filter: "blur(8px)",
            scale: 0.9,
          },
          {
            y: 0,
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 20%",
              scrub: 1.5,
            },
          },
        );
      });

      rightRefs.current.forEach((el) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            y: 150,
            x: -250,
            opacity: 0,
            filter: "blur(4px)",
            scale: 0.9,
          },
          {
            y: 0,
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 25%",
              scrub: 1.5,
            },
          },
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="relative md:min-h-screen z-20 bg-[#faf8f4] py-10 md:py-30">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* LEFT CARDS */}
          <div className="flex flex-col items-center md:items-end gap-4 md:gap-[30vh] md:pt-[100vh] md:pr-6 order-2 md:order-1 mt-3 md:mt-0">
            {leftCards.map((item, index) => (
              <div
                key={index}
                ref={(el) => (leftRefs.current[index] = el)}
                className="w-full  h-80 md:h-140 cursor-pointer rounded-lg group overflow-hidden"
              >
                <div className="w-full h-full relative">
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-1 md:p-3 translate-y-0 md:translate-y-full transition-transform duration-300 ease-linear group-hover:translate-y-0 bg-[#f5f5f5] text-black">
                    <CardTitle cardtitle={item.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER TEXT */}
          <div
            className="flex justify-start md:justify-center items-center 
             order-1 md:order-2 mb-10 md:mb-0 
             md:sticky md:top-0 md:h-screen"
          >
            <div className="flex flex-col items-start md:items-center text-start md:text-center max-w-2xl">
              <PriTitle prititle="Our Work" />
              <SubTitle
                subtitle={
                  isMobile
                    ? ["Recently Completed, Projects"]
                    : [<>Recently Completed </>, <span className="text-green-500">Projects</span>]
                }
              />
              <SecondaryButton
                content="View More"
                className="bg-gray-300 mt-4"
                path="/project"
              />
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="flex md:flex flex-col items-center md:items-start gap-4 md:gap-[30vh] md:pt-[80vh] md:pl-6 order-3 mt-4 md:mt-0">
            {rightCards.map((item, index) => (
              <div
                key={index}
                ref={(el) => (rightRefs.current[index] = el)}
                className="w-full h-80 md:h-140 cursor-pointer rounded-lg group overflow-hidden"
              >
                <div className="w-full h-full relative">
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-1 md:p-3 translate-y-0 md:translate-y-full transition-transform duration-300 ease-linear group-hover:translate-y-0 bg-[#f5f5f5] text-black">
                    <CardTitle cardtitle={item.name} />
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

export default Work;
