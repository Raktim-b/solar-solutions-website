import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";
import { serviceStats } from "../../Services/JSON/Service/Stats";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const Stats = () => {
  const { ref: counterRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  return (
    <section
      ref={counterRef}
      className="bg-gray-100 py-10 md:py-20 z-10 min-h-auto relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-col items-start md:items-center text-start md:text-center ">
          <PriTitle prititle="Our Impact in Numbers" />
          <SubTitle
            subtitle={[
              <> Delivering measurable </>,
              <span className="text-green-500">impact</span>,
            ]}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x-2 divide-gray-200 mt-10">
          {serviceStats.map((stat, index) => (
            <div key={index} className="px-6 mb-8 md:mb-0">
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-bold text-green-500">
                {inView && (
                  <>
                    <CountUp end={parseInt(stat.number)} duration={3} />
                    {stat.number.includes("+") && "+"}
                    {stat.number.includes("%") && "%"}
                  </>
                )}
              </h3>
              <p className="text-gray-600 mt-2">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
