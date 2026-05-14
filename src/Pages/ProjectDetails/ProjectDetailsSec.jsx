import React from "react";
import Container from "../../Components/Container/Container";
import SubTitle from "../../Services/Title/SubTitle";
const ProjectDetailsSec = ({ project }) => {
  const details = [
    {
      label: "Project Type",
      value: project?.category,
    },
    {
      label: "Location",
      value: project?.location,
    },
    {
      label: "Capacity",
      value: project?.capacity,
    },
    {
      label: "Client",
      value: project?.client,
    },
    {
      label: "Budget",
      value: project?.budget,
    },
  ];
  const isMobile = window.innerWidth < 768;
  return (
    <section className="bg-[#f5f5f5] py-10 md:py-20 relative z-10">
      <Container>
        <div className="text-center mb-20">
          <SubTitle
            subtitle={
              isMobile
                ? [
                    <>
                      <span>Behind The Project</span>
                    </>,
                  ]
                : [<span>Behind The Project</span>]
            }
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-15 items-start">
          {/* LEFT CONTENT  */}
          <div className="lg:sticky lg:top-20 h-fit">
            <div className="flex flex-col">
              {/* Summary */}
              <p className="text-base sm:text-lg text-black font-medium">
                {project?.summary}
              </p>

              {/* Details */}
              <div className="mt-8 md:mt-14 border-t border-gray-300">
                {details.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-5 border-b border-gray-300 gap-5"
                  >
                    <h3 className="text-sm font-medium text-black">
                      {item.label}
                    </h3>
                    <p className="text-sm text-gray-700 text-right">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES SCROLL */}
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="w-full h-80 md:h-[120vh] overflow-hidden">
              <img
                src={project?.imgSrc}
                alt={project?.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="w-full h-80 md:h-[120vh] overflow-hidden rounded-xl">
              <img
                src={project?.imgSrc2}
                alt={project?.title}
                className="w-full h-full object-cover"
              />
            </div>
             <div className="w-full h-80 md:h-[120vh] overflow-hidden rounded-xl">
              <img
                src={project?.imgSrc3}
                alt={project?.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectDetailsSec;
