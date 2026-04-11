import Container from "../../Components/Container/Container";
import SubTitle from "../../Services/Title/SubTitle";
import PriTitle from "../../Services/Title/PriTitle";
import ServiceAccordian from "../../Services/Accordian/ServiceAccordian";

const ServiceSec = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <section className="bg-[#faf8f4] py-10 sm:py-30 overflow-hidden min-h-auto relative z-10">
      <Container>
        {/* Header */}
        <div className="mb-8 sm:mb-16 md:mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 md:gap-10">
            {/* LEFT */}
            <div className="lg:w-[25%]">
              <PriTitle
                prititle="Our services"
                className="text-gray-600 flex items-center gap-2"
              />
            </div>

            {/* RIGHT */}
            <div className="lg:w-[75%]">
              <SubTitle
                subtitle={
                  isMobile
                    ? [
                        <>
                          <span className="ml-10 sm:ml-20">
                            Making the Solar Switch Easy
                          </span>{" "}
                          and Affordable — helping you transition to clean,
                          renewable energy with reliable solutions that reduce
                          costs and{" "}
                          <span className="text-green-500">
                            power a sustainable future.
                          </span>
                        </>,
                      ]
                    : [
                        <span className="ml-40">
                          Making the Solar Switch Easy and
                        </span>,
                        <>Affordable — helping you transition to clean,</>,
                        <> renewable energy with reliable solutions that</>,
                        <>
                          {" "}
                          reduce costs and{" "}
                          <span className="text-green-500">
                            power a sustainable future.
                          </span>
                        </>,
                      ]
                }
              />
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <ServiceAccordian />
      </Container>
    </section>
  );
};

export default ServiceSec;
