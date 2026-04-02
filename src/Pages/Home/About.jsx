import { stats } from "../../Services/JSON/Home/About";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Container from "../../Components/Container/Container";
import SubTitle from "../../Services/Title/SubTitle";
import PriTitle from "../../Services/Title/PriTitle";
import AutoScroll from "../../Components/AutoScroll/Autoscroll";

const About = () => {
  const isMobile = window.innerWidth < 768;
  const { ref: counterRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section
      ref={counterRef}
      className="pt-10 sm:pt-30 bg-white z-10 min-h-auto md:min-h-screen relative overflow-hidden"
    >
      <Container>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="h-full w-full md:w-[45%] ">
            <PriTitle prititle="About Us" />
            <div className=" h-full w-full  pointer-events-none mt-5 md:mt-10">
              <img
                src="/Images/Home/about-img1.png" // use your line-art image
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-[65%] lg:flex-row justify-between gap-10">
            <div className="">
              <SubTitle
                subtitle={
                  isMobile
                    ? [
                        <>
                          <span className="ml-20">
                            The Future of Energy Starts
                          </span>{" "}
                          Here — Turn Sunlight into Savings and power your home
                          with clean and{" "}
                          <span className="text-green-500">
                            sustainable solar solutions.
                          </span>
                        </>,
                      ]
                    : [
                        <span className="ml-32">
                          The Future of Energy Starts
                        </span>,
                        <> Here — Turn Sunlight into Savings</>,
                        <> and power your home with clean</>,
                        <>
                          and{" "}
                          <span className="text-green-500">
                            sustainable solar solutions.
                          </span>
                        </>,
                      ]
                }
              />

              {/* Description */}
              <p className="mt-10 font-semibold text-[#0000009e] text-base sm:text-lg/snug max-w-xl">
                A multidisciplinary practice focused on thoughtful design,
                sustainable materials, and high-quality execution. From
                residential builds to large commercial projects, we shape
                environments with clarity, and purpose.
              </p>

              {/* STATS */}
              <div className="mt-14 grid grid-cols-3 gap-10">
                {stats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-green-500">
                      {inView && (
                        <>
                          <CountUp end={parseInt(item.number)} duration={3} />
                          {item.number.includes("+") && "+"}
                          {item.number.includes("%") && "%"}
                        </>
                      )}
                    </h3>

                    <p className="mt-2 text-gray-600 text-sm sm:text-base">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-20">
          <AutoScroll />
        </div>
      </Container>
    </section>
  );
};

export default About;
