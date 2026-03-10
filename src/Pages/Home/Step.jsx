import Container from "../../Components/Container/Container";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";
import { steps } from "../../Services/JSON/Step";
import CardTitle from "../../Services/Title/CardTitle";

const Step = () => {
  return (
    <section className="py-10 sm:py-15 min-h-screen relative z-10 bg-[#F7F2EB]">
      <Container>
        <div>
          <PriTitle prititle="OUR WORKING steps" className="text-[#2C5E44]" />
          <SubTitle
            className="text-[#242424]"
            subtitle={
              <>
                The Way We
                <span className="text-green-500"> Work</span>
              </>
            }
          />
          <p className="text-[16px]/[22px] md:text-lg/[26px] lg:text-xl/[30px] text-[#242424]/70 mt-4 ">
            Our installation process begins with a detailed consultation to
            understand your energy needs, followed by a core system design
            tailored for maximum efficiency. Once approved, we proceed with
            setup and launch, ensuring everything is installed and tested
            properly, while our operations watch continuously monitors
            performance for long-term reliability.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-0 sm:grid-cols-4 min-h-auto md:min-h-[220vh] border-0 md:border-l my-10 sm:my-15 border-gray-300">
          {steps.map((item, index) => (
            <div
              key={index}
              style={{ height: `${25 * (steps.length - index)}%` }}
              className="border-r last:border-0 border-gray-300
             md:border-r
             border-0"
            >
              {/* card */}
              <div
                className="
      relative md:sticky md:top-40
      flex flex-col justify-center items-center
      px-6 text-center
      h-[260px]
      bg-white md:bg-transparent
      rounded-xl md:rounded-none
      shadow-md md:shadow-none
      p-6
    "
              >
                <p className="text-sm text-gray-500 mb-4">{item.stepno}</p>

                <CardTitle cardtitle={item.heading} />

                <p className="text-[16px] sm:text-lg mt-5 text-[#242424]/70">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <figure className="w-full h-70 sm:h-100 ">
          <img
            src={"Images/Step-img.gif"}
            alt="Stepimg"
            className="w-full h-full object-cover rounded-xl"
          />
        </figure>
      </Container>
    </section>
  );
};

export default Step;
