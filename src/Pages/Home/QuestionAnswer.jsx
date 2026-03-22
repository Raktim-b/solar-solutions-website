import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import Container from "../../Components/Container/Container";
import Accordion from "../../Services/Accordian/Accordian";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";

const QuestionAnswer = () => {
  return (
    <section className="bg-[#f5f5f5] py-10 min-h-auto md:min-h-screen md:py-30 relative z-10">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 md:gap-15">
          {/* LEFT SIDE */}
          <div className="flex w-full md:w-1/3 flex-col">
            <div>
              <PriTitle prititle="Frequently Asked Questions" />

              <SubTitle
                subtitle={
                  <>
                    <span className="ml-10">Answering your questions</span>{" "}
                    clearly and efficiently
                  </>
                }
              />
            </div>

            {/* Bottom CTA */}
            <div className="mt-5 md:mt-30">
              <p className="font-semibold text-black text-base sm:text-lg/snug">
                STILL LOOKING FOR ANSWERS?
              </p>

              <p className="font-semibold text-[#0000009e] text-base sm:text-lg/snug mt-5 mb-8">
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
