import Container from "../../Components/Container/Container";
import SubTitle from "../../Services/Title/SubTitle";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ServiceAbout = ({ details }) => {
  const imageContainerRef = useRef(null);
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const el = imageContainerRef.current;

    gsap.fromTo(
      el,
      {
        y: 100,
        opacity: 0,
        filter: "blur(8px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);
  const {
    title,
    description,
    subTitle,
    subDescription,
    features,
    imgSrc,
    imgSrc2,
  } = details;
  const isMobile = window.innerWidth < 768;
  return (
    <section className="bg-[#f5f5f5] py-10 md:py-20 relative z-10">
      <Container>
        <div className="text-center">
          <SubTitle
            subtitle={
              isMobile
                ? [
                    <>
                      <span>{title}</span>
                    </>,
                  ]
                : [<span>{title}</span>]
            }
          />
        </div>
        <p className="text-base sm:text-lg text-black font-medium mt-10">
          {description}
        </p>
        <div
          ref={imageContainerRef}
          className="flex gap-5 my-15 w-full md:w-5/6 mx-auto"
        >
          <div className="w-1/2 h-75 sm:h-100 md:h-145">
            <img
              src={imgSrc}
              alt={title}
              className="w-full rounded-lg h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-75 sm:h-100 md:h-145">
            <img
              src={imgSrc2}
              alt={title}
              className="w-full rounded-lg h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center">
          <SubTitle
            subtitle={
              isMobile
                ? [
                    <>
                      <span>{subTitle}</span>
                    </>,
                  ]
                : [<span>{subTitle}</span>]
            }
          />
        </div>
        <p className="text-base sm:text-lg text-black font-medium my-10">
          {subDescription}
        </p>
        <div className="ml-5">
          {features.map((item, index) => (
            <li
              key={index}
              className="text-base sm:text-lg text-black font-medium"
            >
              {item}
            </li>
          ))}
        </div>
      </Container>
      <div className="w-full md:max-w-1/2 mx-auto mt-10">
        <img
          src="/Images/ServiceDetails/ServiceAbout-img.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ServiceAbout;
