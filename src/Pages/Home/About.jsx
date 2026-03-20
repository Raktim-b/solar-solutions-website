import { stats } from "../../Services/JSON/About";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Container from "../../Components/Container/Container";
import SubTitle from "../../Services/Title/SubTitle";
import PriTitle from "../../Services/Title/PriTitle";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
    rootMargin: "-80px 0px",
  });

  return (
    <section
      ref={ref}
      className="py-10 sm:py-20 min-h-auto lg:min-h-screen relative z-10 bg-[#f2f2f2]"
    >
      <Container>
        <div>
          <PriTitle prititle="About us" className="text-green-500" />

          <SubTitle
            className="text-[#272628]"
            subtitle={
              <>
                The Future of Energy Starts Here,Turn{" "}
                <span className="text-green-500">Sunlight into Savings</span>
              </>
            }
          />

          <p className="text-[16px]/[22px] md:text-lg/[26px] lg:text-xl/[30px] tracking-tighter text-[#545454]/70 mb-5">
            Our solar panel solutions provide efficient, reliable, and
            eco-friendly energy for homes and businesses. By converting sunlight
            into sustainable power, we help reduce electricity costs while
            supporting a cleaner, greener planet for future generations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-2.5 mt-10 sm:mt-15 h-full">
          {/* LEFT: STACKED STATS */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2.5 h-full">
            {stats.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg h-40 md:h-60 bg-gray-200 flex flex-col justify-between"
              >
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold ">
                  {inView && (
                    <>
                      <CountUp end={parseInt(item.number)} duration={3} />
                      {item.number.includes("+") && "+"}
                      {item.number.includes("%") && "%"}
                    </>
                  )}
                </h3>

                <p className="opacity-80 text-[16px] sm:text-lg font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="grid grid-cols-2 col-span-2 gap-2.5 mt-2.5 md:mt-0">
            <div className="h-70 sm:h-90 md:h-122.5">
              <img
                src="/Images/about-img1.jpg" // replace with your image
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* RIGHT IMAGE */}
            <div className="h-70 sm:h-90 md:h-122.5">
              <img
                src="/Images/about-img2.jpg" // replace with your image
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
