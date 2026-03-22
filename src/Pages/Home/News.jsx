import { useNavigate } from "react-router-dom";
import Container from "../../Components/Container/Container";
import SubTitle from "../../Services/Title/SubTitle";
import PriTitle from "../../Services/Title/PriTitle";
import { newsCard } from "../../Services/JSON/News";
import CardTitle from "../../Services/Title/CardTitle";
import { ArrowUpRight } from "lucide-react";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
const News = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 sm:py-30 overflow-hidden min-h-auto lg:min-h-screen relative z-10 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-start  justify-between">
          <PriTitle prititle="Our Blog" className="w-full md:w-1/2" />
          <SubTitle
            subtitle={
              <>
                <span className="ml-20 md:ml-30">Our Most Recent</span> Posts, Stories,
                and Expert Insights
              </>
            }
            className="text-[#242424] w-full md:w-1/2 mt-10! md:my-0!"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-20">
          {newsCard.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => navigate("/blog")}
            >
              {/* Image */}
              <div className="overflow-hidden relative h-55 sm:h-90 lg:h-140 w-full rounded-md">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  onClick={() => navigate("/blog")}
                  className="absolute top-1/2 right-1/2 transform translate-x-1/2 w-12 h-12 rounded-full bg-green-400 flex items-center justify-center opacity-0  opacity-0 scale-75
             transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                >
                  <ArrowUpRight size={35} />
                </button>
              </div>

              <div className="flex items-center gap-4 text-gray-400 text-sm my-4">
                <p>{item.date}</p>
                <span>|</span>
                <p>{item.timetake}</p>
              </div>
              {/* Title */}
              <CardTitle cardtitle={item.title} />
              {/* Description */}
              <p className="text-gray-500 mt-2 font-medium text-base sm:text-lg/snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20 flex justify-end">
          <SecondaryButton content="Learn More" className="bg-gray-300" />
        </div>
      </Container>
    </section>
  );
};

export default News;
