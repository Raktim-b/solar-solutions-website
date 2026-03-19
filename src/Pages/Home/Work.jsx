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
          <div
        className="absolute inset-0 opacity-10 
        bg-[radial-gradient(#ffffff_1px,transparent_1px)] 
        bg-size-[20px_20px]"
      />
          <div className="text-center">
            <PriTitle prititle="Our Works" className="text-green-400" />
            <SubTitle
              subtitle="Recently Completed Projects"
              className="text-white"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 sm:mt-20">
            {workCard.map(({ type, name, imgSrc }, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden h-55 sm:h-90 lg:h-115 xl:h-135 rounded-sm cursor-pointer
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
