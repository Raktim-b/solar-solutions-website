import Container from "../../Components/Container/Container";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";
import { steps } from "../../Services/JSON/Step";
import CardTitle from "../../Services/Title/CardTitle";

const Step = () => {
  return (
    <section className="py-10 sm:py-25 relative z-10 bg-[#F8FBF5]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] md:gap-10 lg:gap-20 ">
          <div className="flex flex-col gap-10 order-2 md:order-1">
            {steps.map((item, index) => (
              <div
                key={index}
                className="bg-[#FDF8F2]  shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),inset_0px_3px_1px_0px_rgb(255,255,255)] p-5 lg:p-8 rounded-xl border text-[#1d3d3e] border-gray-100"
              >
                <p className="text-[44px] font-semibold ">{item.stepno}</p>
                <CardTitle cardtitle={item.heading} />
                <div className="h-px bg-gray-200 my-4"></div>
                <p className="text-[#242424]/70 text-[16px] leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="max-w-full order-1 md:order-2 relative md:sticky mb-10 md:mb-0 top-0 md:top-20 self-start">
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

            <p className="text-[16px]/[22px] md:text-lg/[26px] lg:text-xl/[30px] text-[#242424]/70 mt-4">
              Our installation process begins with a detailed consultation to
              understand your energy needs, followed by a core system design
              tailored for maximum efficiency.
            </p>
            <figure className="w-full mt-10 h-55 sm:h-87.5 overflow-hidden">
              <img
                src="/Images/Process.avif"
                alt="Stepimg"
                className="w-full h-full object-cover relative rounded-lg"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-lg bg-linear-to-t from-black/70 to-transparent"></div>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Step;
