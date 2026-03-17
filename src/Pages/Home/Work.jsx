import React from "react";
import Container from "../../Components/Container/Container";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";
import { workCard } from "../../Services/JSON/Work";
import CardTitle from "../../Services/Title/CardTitle";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <section className="bg-[#101010] relative z-10 px-0 sm:px-5 md:px-10 lg:px-15 xl:px-25">
      <Container>
        <div className="py-10 md:py-20 min-h-screen relative overflow-hidden bg-black px-5">
          <div className="absolute -top-5 right-0 grayscale-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="272"
              height="272"
              fill="none"
            >
              <g clip-path="url(#a)" opacity=".2">
                <path
                  fill="#011A14"
                  d="M-.142 217.576v54.428h54.428v-54.428H-.142Z"
                  opacity=".498"
                />
                <path
                  fill="#C8F69B"
                  d="M-.142 163.146v54.428h54.428v-54.428H-.142Z"
                  opacity=".579"
                />
                <path
                  fill="#011A14"
                  d="M-.142 108.716v54.429h54.428v-54.429H-.142Z"
                  opacity=".66"
                />
                <path
                  fill="#011A14"
                  d="M-.142 54.286v54.429h54.428V54.286H-.142Z"
                  opacity=".739"
                />
                <path
                  fill="#C8F69B"
                  d="M-.142-.143v54.428h54.428V-.143H-.142Z"
                  opacity=".816"
                />
                <path
                  fill="#011A14"
                  d="M54.287 217.576v54.428h54.428v-54.428H54.287Z"
                  opacity=".478"
                />
                <path
                  fill="#011A14"
                  d="M54.287 163.146v54.428h54.428v-54.428H54.287Z"
                  opacity=".556"
                />
                <path
                  fill="#011A14"
                  d="M54.287 108.716v54.429h54.428v-54.429H54.287Z"
                  opacity=".631"
                />
                <path
                  fill="#C8F69B"
                  d="M54.287 54.286v54.429h54.428V54.286H54.287Z"
                  opacity=".703"
                />
                <path
                  fill="#C8F69B"
                  d="M54.287-.147V54.28h54.428V-.147H54.287Z"
                  opacity=".767"
                />
                <path
                  fill="#C8F69B"
                  d="M108.715 217.576v54.428h54.428v-54.428h-54.428Z"
                  opacity=".447"
                />
                <path
                  fill="#C8F69B"
                  d="M108.715 163.146v54.428h54.428v-54.428h-54.428Z"
                  opacity=".519"
                />
                <path
                  fill="#011A14"
                  d="M108.715 108.716v54.429h54.428v-54.429h-54.428Z"
                  opacity=".588"
                />
                <path
                  fill="#C8F69B"
                  d="M108.715 54.286v54.429h54.428V54.286h-54.428Z"
                  opacity=".65"
                />
                <path
                  fill="#011A14"
                  d="M108.715-.147V54.28h54.428V-.147h-54.428Z"
                  opacity=".703"
                />
                <path
                  fill="#011A14"
                  d="M163.143 217.576v54.428h54.428v-54.428h-54.428Z"
                  opacity=".405"
                />
                <path
                  fill="#011A14"
                  d="M163.143 163.146v54.428h54.428v-54.428h-54.428Z"
                  opacity=".472"
                />
                <path
                  fill="#011A14"
                  d="M163.143 108.716v54.429h54.428v-54.429h-54.428Z"
                  opacity=".533"
                />
                <path
                  fill="#011A14"
                  d="M163.143 54.286v54.429h54.428V54.286h-54.428Z"
                  opacity=".588"
                />
                <path
                  fill="#C8F69B"
                  d="M163.143-.147V54.28h54.428V-.147h-54.428Z"
                  opacity=".631"
                />
                <path
                  fill="#011A14"
                  d="M217.572 217.576v54.428H272v-54.428h-54.428Z"
                  opacity=".356"
                />
                <path
                  fill="#C8F69B"
                  d="M217.572 163.146v54.428H272v-54.428h-54.428Z"
                  opacity=".417"
                />
                <path
                  fill="#C8F69B"
                  d="M217.572 108.716v54.429H272v-54.429h-54.428Z"
                  opacity=".472"
                />
                <path
                  fill="#C8F69B"
                  d="M217.572 54.286v54.429H272V54.286h-54.428Z"
                  opacity=".519"
                />
                <path
                  fill="#011A14"
                  d="M217.572-.147V54.28H272V-.147h-54.428Z"
                  opacity=".556"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 271.996v-272h272v272z" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-center">
            <PriTitle prititle="Our Works" className="text-green-400" />
            <SubTitle
              subtitle="Recently Completed Projects"
              className="text-white"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
            {workCard.map(({ type, name, imgSrc }, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden sm:h-90 lg:h-115 xl:h-135 rounded-sm cursor-pointer
                ${index === 0 ? "md:col-span-2" : "md:col-span-1"}`}
              >
                <img
                  src={imgSrc}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 z-10 text-white ">
                  <CardTitle cardtitle={name} />
                </div>

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div
                  className="absolute top-2 left-6 flex flex-col justify-center 
                opacity-0 group-hover:opacity-100 transition duration-500"
                >
                  <p className="text-green-400 ">{type}</p>

                  <h3 className="text-white text-2xl font-semibold">{name}</h3>
                </div>
                <div className="absolute top-0 right-0 h-7 md:h-9 rounded-tr-sm w-1/4 bg-black flex items-center justify-center transform translate-y-0 md:-translate-y-20 group-hover:translate-y-0 transition duration-500">
                  <Link
                    to="/Project"
                    className="text-white text-[12px] md:text-sm uppercase font-bold tracking-tight"
                  >
                    Learn More
                  </Link>
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
