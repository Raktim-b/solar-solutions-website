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
      className=" py-10 sm:py-20 min-h-[95vh] sm:min-h-screen relative z-10 bg-[#F8FBF5]"
    >
      <Container>
        <div className="grid grid-cols-1 items-center lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-2 ">
          <figure className="max-w-80 sm:max-w-100 lg:max-w-135 h-full lg:h-155 mx-auto lg:mx-0 ">
            <img
              src={"Images/About-img.avif"}
              alt="About-img"
              className="h-full w-full object-cover rounded-lg "
            />
          </figure>
          <div className="px-0 lg:px-7.5">
            <PriTitle prititle="About us" className="text-green-500" />
            <SubTitle
              className="text-[#242424]"
              subtitle={
                <>
                  The Future of Energy Starts Here;Turn{" "}
                  <span className="text-green-500">Sunlight into Savings</span>
                </>
              }
            />
            <p className="text-[16px]/[22px] md:text-lg/[26px] lg:text-xl/[30px] text-[#242424]/70 mb-2 sm:mb-5">
              Our solar panel solutions provide efficient, reliable, and
              eco-friendly energy for homes and businesses. By converting
              sunlight into sustainable power, we help reduce electricity costs
              while supporting a cleaner, greener planet for future generations.
            </p>
            <div className="grid grid-cols-3 pt-5 pb-5 sm:pb-7.5 border-b border-green-500">
              {stats.map((item, index) => (
                <div key={index}>
                  <h3 className="text-green-500 text-[22px]/[26px] sm:text-2xl md:text-[28px] lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-3">
                    {inView && (
                      <>
                        <CountUp end={parseInt(item.number)} duration={3} />
                        {item.number.includes("+") && "+"}
                        {item.number.includes("%") && "%"}
                      </>
                    )}
                  </h3>
                  <p className="text-sm md:text-[16px]/[20px] lg:text-lg/[28px] xl:text-xl/[30px] text-[#242424]/70 max-w-28  md:max-w-31.25">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 mt-2 sm:mt-5">
              <div className="flex items-center gap-5 border-r border-green-500 pl-2.5 py-3.75">
                <figure className="w-12.5 h-12.5 rounded-full overflow-hidden">
                  <img
                    src={"Images/Founder-img.avif"}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="">
                  <p className="capitalize text-sm md:text-[16px]/[20px] lg:text-lg/[28px] xl:text-xl text-[#242424] ">
                    name Surname
                  </p>
                  <p className="text-sm md:text-[16px]/[20px] lg:text-lg/[28px] xl:text-xl text-[#242424]/70">
                    Founder
                  </p>
                </div>
              </div>
              <div className="py-[38.5px] pl-7.5">
                <div className="max-w-34.5">
                  <img
                    src={"Images/Sign-img.png"}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
