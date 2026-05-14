import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";
import { projectCard } from "../../Services/JSON/Project/projectCard";
import CardTitle from "../../Services/Title/CardTitle";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectSec = () => {
  const imageContainerRef = useRef(null);

  const isMobile = window.innerWidth < 768;

  const [visibleCount, setVisibleCount] = useState(
    window.innerWidth < 640 ? 4 : 6,
  );
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Domestic", "Commercial", "Industrial"];

  /* FILTERED DATA */
  const filteredProjects =
    activeFilter === "All"
      ? projectCard
      : projectCard.filter((item) => item.type === activeFilter);

  /* GSAP ANIMATION */

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      gsap.set(".project-card", {
        y: 80,
        opacity: 0,
        filter: "blur(6px)",
      });

      ScrollTrigger.batch(".project-card", {
        start: "top 85%",

        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            overwrite: true,
          });
        },

        once: true,
      });

      ScrollTrigger.refresh();
    }, imageContainerRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section className="bg-[#faf8f4] py-10 sm:py-30 overflow-hidden min-h-auto relative z-10">
      <Container>
        {/* HEADING */}
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

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(window.innerWidth < 640 ? 4 : 6);
              }}
              className={`px-3 sm:px-4 py-1.5 text-sm sm:text-base text-gray-800 transition-all duration-300 border-2 cursor-pointer
                ${
                  activeFilter === filter
                    ? " border-gray-600 bg-green-500 font-semibold"
                    : " border-gray-600 hover:bg-green-500 font-semibold"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECTS */}
        <div ref={imageContainerRef} className="flex flex-col gap-4">
          {Array.from(
            { length: Math.ceil(visibleCount / 2) },
            (_, rowIndex) => {
              const rowItems = filteredProjects.slice(
                rowIndex * 2,
                rowIndex * 2 + 2,
              );

              return (
                <div
                  key={rowIndex}
                  className="project-row grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {rowItems.map((item, index) => (
                    <Link
                      to={`/projects/${item.slug}`}
                      key={index}
                      className="block"
                    >
                      <div className="project-card group relative overflow-hidden cursor-pointer">
                        {/* IMAGE */}
                        <div className="relative h-80 sm:h-160 overflow-hidden">
                          <img
                            src={item.imgSrc}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />

                          {/* OVERLAY */}
                          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.12)_35%,rgba(0,0,0,0.08)_55%,rgba(0,0,0,0.75)_100%)]"></div>

                          {/* TOP CONTENT */}
                          <div className="absolute top-6 left-6 z-10 max-w-65">
                            <p className="text-[11px] sm:text-xs text-white/80 font-medium mb-2">
                              {item.type}
                            </p>

                            <CardTitle
                              cardtitle={item.name}
                              className="text-white"
                            />
                          </div>

                          {/* BOTTOM CONTENT */}
                          <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                            <p className="text-white/90 text-xs sm:text-sm font-medium">
                              {item.location}
                            </p>

                            <span className="text-white/90 text-xs sm:text-sm font-medium">
                              {item.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              );
            },
          )}
        </div>

        {/* LOAD MORE */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-10">
            <SecondaryButton
              onClick={() => setVisibleCount(filteredProjects.length)}
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
