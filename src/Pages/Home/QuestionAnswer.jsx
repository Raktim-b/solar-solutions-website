import Container from "../../Components/Container/Container";
import Accordion from "../../Services/Accordian/Accordian";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";

const QuestionAnswer = () => {
  return (
    <section className="bg-black min-h-auto lg:min-h-screen relative z-10 py-10 sm:py-20">
      
      <Container>
        <div className="text-center">
          <PriTitle
            prititle="FREQUENTLY ASKED QUESTIONS"
            className="text-green-500"
          />
          <SubTitle
            subtitle="Things you need to know and we know your’s"
            className="text-[#fff]"
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
