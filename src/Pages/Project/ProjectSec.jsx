import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";
import { projectCard } from "../../Services/JSON/Project/projectCard";
import CardTitle from "../../Services/Title/CardTitle";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectSec = () => {
  const imageContainerRef = useRef(null);
  const isMobile = window.innerWidth < 768;
  const [visibleCount, setVisibleCount] = useState(6);
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const rows = imageContainerRef.current.querySelectorAll(".project-row");

    rows.forEach((row) => {
      const cards = row.querySelectorAll(".project-card");

      gsap.fromTo(
        cards,
        {
          y: 100,
          opacity: 0,
          filter: "blur(6px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.35,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 35%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);
  return (
    <section className="bg-[#faf8f4] py-10 sm:py-30 overflow-hidden min-h-auto relative z-10">
      <Container>
        <div className="mb-8 sm:mb-16 md:mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 md:gap-10">
            {/* LEFT */}
            <div className="lg:w-[25%]">
              <PriTitle
                prititle="Our works"
                className="text-gray-600 flex items-center gap-2"
              />
            </div>

            {/* RIGHT */}
            <div className="lg:w-[75%]">
              <SubTitle
                subtitle={
                  isMobile
                    ? [
                        <>
                          <span className="ml-10 sm:ml-20">
                            Projects We’re Proud Of
                          </span>{" "}
                          — real solar work that{" "}
                          <span className="text-green-500">
                            delivers results.
                          </span>
                        </>,
                      ]
                    : [
                        <span className="ml-40">
                          Projects We’re Proud Of — real
                        </span>,
                        <>
                          {" "}
                          solar work that{" "}
                          <span className="text-green-500">
                            delivers results.
                          </span>
                        </>,
                      ]
                }
              />
            </div>
          </div>
        </div>
        <div ref={imageContainerRef} className="flex flex-col gap-6">
          {Array.from(
            { length: Math.ceil(visibleCount / 2) },
            (_, rowIndex) => {
              const rowItems = projectCard.slice(
                rowIndex * 2,
                rowIndex * 2 + 2,
              );

              return (
                <div
                  key={rowIndex}
                  className="project-row grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {rowItems.map((item, index) => (
                    <div
                      key={index}
                      className="group project-card cursor-pointer mb-2"
                    >
                      {/* IMAGE */}
                      <div className="relative overflow-hidden group">
                        <img
                          src={item.imgSrc}
                          alt={item.name}
                          className="w-full h-62.5 sm:h-110 object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-500"></div>
                      </div>

                      {/* CONTENT */}
                      <div className="flex justify-between items-center mt-3">
                        <CardTitle
                          cardtitle={item.name}
                          className="text-gray-800"
                        />
                        <span className="text-xs sm:text-sm font-medium text-gray-500">
                          {item.date}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm font-medium text-gray-400 mt-1">
                        {item.location}
                      </p>
                    </div>
                  ))}
                </div>
              );
            },
          )}
        </div>
        {visibleCount < projectCard.length && (
          <div className="flex justify-center mt-10">
            <SecondaryButton
              onClick={() => setVisibleCount(projectCard.length)}
              className="bg-gray-300"
              content="Load More"
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProjectSec;
