import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import Container from "../../Components/Container/Container";
import Accordion from "../../Services/Accordian/Accordian";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";

const QuestionAnswer = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <section className="bg-[#f5f5f5] py-10 md:py-30 relative z-10">
      <Container>
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          {/* LEFT SIDE */}
          <div className="w-full md:w-1/3 md:sticky md:top-24 h-fit">
            <PriTitle prititle="Frequently Asked Questions" />

            <SubTitle
              subtitle={
                isMobile
                  ? [
                      <>
                        <span className="ml-10">Answering your </span>
                        questions{" "}
                        <span className="text-green-500">
                          clearly and efficiently
                        </span>
                      </>,
                    ]
                  : [
                      <span className="ml-10">Answering your </span>,
                      <>
                        questions{" "}
                        <span className="text-green-500">clearly</span>
                      </>,
                      <span className="text-green-500"> and efficiently</span>,
                    ]
              }
            />

            {/* Bottom CTA */}
            <div className="mt-10 md:mt-32">
              <p className="font-semibold text-black text-base sm:text-lg">
                STILL LOOKING FOR ANSWERS?
              </p>

              <p className="font-medium text-gray-500 text-base sm:text-lg mt-5 mb-8">
                Get in touch via our contact form and we'll help you answer them
              </p>

              <SecondaryButton content="Get In Touch" className="bg-gray-300" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-2/3">
            <Accordion />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QuestionAnswer;
