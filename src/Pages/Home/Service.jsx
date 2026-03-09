import Container from "../../Components/Container/Container";
import { serviceCard } from "../../Services/JSON/ServiceCard";
import CardTitle from "../../Services/Title/CardTitle";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";

const Service = () => {
  return (
    <>
      <section className="service-sec min-h-135 pt-10 sm:pt-15">
        <Container>
          <div className="text-center">
            <PriTitle prititle="OUR SERVICES" />
            <SubTitle subtitle="Making the Solar Switch Easy and Affordable" />
          </div>
        </Container>
      </section>
      <div className="-mt-95 sm:-mt-90 pb-10 sm:pb-15">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-3 sm:p-5 lg:p-7.5 bg-white gap-3 sm:gap-5 lg:gap-7.5 shadow-[0px_4px_8.1px_0px_rgba(0,0,0,0.25)]  ">
            {serviceCard.map((item, index) => (
              <div
                key={index}
                className="group relative md:top-auto cursor-pointer min-h-75 w-full bg-cover bg-center flex flex-col items-center justify-center text-white overflow-hidden"
                style={{ backgroundImage: `url(${item.imgSrc})` }}
              >
                <div className="absolute inset-0 bg-black/75 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-500"></div>
                <div className="relative z-10 flex flex-col items-center transform translate-y-0 opacity-100 sm:translate-y-10 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition duration-500">
                  <CardTitle cardtitle={item.heading} />
                  <img src={item.icon} alt="" className="w-25 h-25 mt-10" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Service;
