import { useNavigate } from "react-router-dom";
import Container from "../../Components/Container/Container";
import SubTitle from "../../Services/Title/SubTitle";
import PriTitle from "../../Services/Title/PriTitle";
import ViewMore from "../../Components/Buttons/ViewMore";
import { newsCard } from "../../Services/JSON/News";
import CardTitle from "../../Services/Title/CardTitle";
const News = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 sm:py-20 overflow-hidden min-h-auto lg:min-h-screen relative z-10 bg-[#f6f7f9]">
      <Container>
        <PriTitle prititle="OUR SERVICES" className="text-green-400" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <SubTitle
            subtitle={
              <>
                Our Most Recent <span className="text-green-400">Posts</span>
              </>
            }
            className="text-[#242424]"
          />
          <ViewMore
            className="self-end md:self-center text-[#242424]! hover:text-green-400!"
            contnt="View More"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 mt-10">
          {newsCard.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => navigate("/blog")}
            >
              {/* Image */}
              <div className="overflow-hidden h-55 sm:h-90 lg:h-120 w-full rounded-xl">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center gap-4 text-gray-400 text-sm my-4">
                <p>{item.date}</p>
                <span>|</span>
                <p>{item.timetake}</p>
              </div>
              {/* Title */}
              <CardTitle cardtitle={item.title} />
              {/* Description */}
              <p className="text-gray-500 mt-2  leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default News;
