import Container from "../../Components/Container/Container";
import { processCard } from "../../Services/JSON/Process";
import CardTitle from "../../Services/Title/CardTitle";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";

const Process = () => {
  return (
    <section className="py-10 sm:py-15 min-h-screen relative z-10 bg-[#F8FBF5]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7.5 items-start">
          <div className="relative sm:sticky top-0 sm:top-15">
            <PriTitle
              prititle="OUR WORKING PROCESS"
              className="text-green-500"
            />
            <SubTitle
              className="text-[#242424]"
              subtitle={
                <>
                  Experience, Innovation, and
                  <span className="text-green-500"> Reliability</span>
                </>
              }
            />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:gap-62.5 w-full">
            {processCard.map((item, index) => (
              <div
                key={index}
                style={{ top: `${60 + index * 70}px` }}
                className={`${
                  index % 2 === 0 ? "bg-black" : "bg-[#1e1e1e]"
                } static sm:sticky w-full h-60 sm:h-70 text-white p-8 rounded-2xl flex flex-col justify-between `}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle cardtitle={item.heading} />
                  </div>
                  <span className="text-gray-400 text-lg font-medium">
                    {item.id}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex justify-between ">
                  <p className="text-[12px] sm:text-[16px] text-[#fffcf3ce] max-w-65 ">
                    {item.desc}
                  </p>
                  <img
                    src={item.imageSrc}
                    alt={item.heading}
                    className="w-12 h-12"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;
