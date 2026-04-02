import Container from "../../Components/Container/Container";
// import { processCard } from "../../Services/JSON/Process";
import { steps } from "../../Services/JSON/Home/Step";
import CardTitle from "../../Services/Title/CardTitle";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";

const Steps = () => {
  return (
    <section className="py-10 sm:py-30 min-h-screen relative z-10 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 sm:gap-25 items-start">
          <div className="relative  sm:sticky top-0 sm:top-15 w-full md:w-[65%]">
            <PriTitle prititle="Our steps" />
            <SubTitle
              className="text-[#242424] mt-5"
              subtitle={[
                <span className="ml-20 md:ml-40">
                  {" "}
                  Experience, Innovation,{" "}
                </span>,
                <> and Reliability — Delivering</>,
                <>
                  {" "}
                  Advanced{" "}
                  <span className="text-green-500">
                    Solar Solutions You Can Trust
                  </span>
                </>,
              ]}
            />
            <p className="font-semibold text-[#0000009e] text-base sm:text-lg/snug mt-10 md:mt-15 max-w-lg">
              Our solar installation process is designed to be simple,
              transparent, and efficient. From consultation to final activation,
              our experts ensure every step delivers reliable renewable energy
              tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:gap-85 w-full md:w-[45%]">
            {steps.map((item, index) => (
              <div
                key={index}
                style={{ top: `${110 + index * 10}px` }}
                className={`${
                  index % 2 === 0
                    ? "bg-black rotate-0 md:-rotate-2"
                    : "bg-[#212121] rotate-0 md:rotate-2"
                } static sm:sticky w-full h-55 mt-0 sm:mt-10 sm:h-70 text-white p-5 sm:p-8 rounded-xl flex flex-col justify-between `}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle cardtitle={item.heading} />
                  </div>
                  <span className="text-gray-400 text-2xl font-bold">
                    {item.id}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex justify-between ">
                  <p className="text-[16px] sm:text-lg text-[#fffcf3ce] max-w-90 ">
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

export default Steps;
