import Container from "../../Components/Container/Container";
import Accordion from "../../Services/Accordian/Accordian";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";

const QuestionAnswer = () => {
  return (
    <section className="bg-[#f3f3f3] min-h-screen relative z-10 py-10 sm:py-20">
      <Container>
        <div className="text-center">
          <PriTitle
            prititle="FREQUENTLY ASKED QUESTIONS"
            className="text-green-400"
          />
          <SubTitle
            subtitle="Things you need to know and we know your’s"
            className="text-[#242424]"
          />
        </div>
        <div>
          <Accordion />
        </div>
      </Container>
    </section>
  );
};

export default QuestionAnswer;
