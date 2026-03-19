import Container from "../../Components/Container/Container";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";
import { serviceCard } from "../../Services/JSON/ServiceCard";
import CardTitle from "../../Services/Title/CardTitle";
import ViewMore from "../../Components/Buttons/ViewMore";
import Autoscroll from "../../Components/AutoScroll/Autoscroll";

const Service = () => {
  return (
    <section className="py-10 sm:py-20 overflow-hidden min-h-screen relative z-10 bg-black">
      <div
        className="absolute inset-0 opacity-10 
        bg-[radial-gradient(#ffffff_1px,transparent_1px)] 
        bg-size-[20px_20px]"
      />
      <Container>
        <PriTitle prititle="OUR SERVICES" className="text-[#FFFCF3]" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <SubTitle
            subtitle={
              <>
                Making the Solar Switch{" "}
                <span className="text-green-400">Easy and Affordable</span>
              </>
            }
            className="text-white"
          />
          <ViewMore className="self-end md:self-center " contnt="View More" />
        </div>
        <div className="mt-10 sm:mt-15 grid grid-cols-1 lg:grid-cols-2 gap-2.5 relative z-11">
          {serviceCard.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 group text-white"
            >
              <figure className="h-50 sm:h-80 w-full overflow-hidden rounded-sm">
                <img
                  src={item.imgSrc}
                  alt={item.heading}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </figure>

              <div className="flex servcice-card-desc h-50 sm:h-80 w-full sm:w-auto flex-col justify-between p-3.5 sm:p-6 bg-[#171717] mt-2.5 sm:mt-0 ml-0 sm:ml-2.5 rounded-sm">
                <div>
                  <p className="text-sm text-white font-semibold mb-2">
                    {item.id}
                  </p>

                  <CardTitle cardtitle={item.heading} className="text-white" />
                </div>
                <p className="service-card-para text-[16px] sm:text-lg text-[#FFFCF37A]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-0 sm:mt-10">
          <Autoscroll />
        </div>
      </Container>
    </section>
  );
};

export default Service;
