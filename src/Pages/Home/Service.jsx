import Container from "../../Components/Container/Container";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";
import { serviceCard } from "../../Services/JSON/ServiceCard";
import CardTitle from "../../Services/Title/CardTitle";
import ViewMore from "../../Components/Buttons/ViewMore";

const Service = () => {
  return (
    <section className="py-10 sm:py-15 min-h-screen relative z-10 bg-[#212122]">
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
            className="text-[#FFFCF3]"
          />
          <ViewMore className="self-end md:self-center "/>
        </div>
        <div className="mt-10 sm:mt-15 grid grid-cols-1 lg:grid-cols-2 gap-2.5">
          {serviceCard.map((item, index) => (
            <div key={index} className="grid grid-cols-2 group text-[#FFFCF3]">
              {/* Image */}
              <figure className="h-50 sm:h-80 w-full overflow-hidden rounded-sm">
                <img
                  src={item.imgSrc}
                  alt={item.heading}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </figure>

              <div className="flex servcice-card-desc h-50 sm:h-80 flex-col justify-between p-3.5 sm:p-6 bg-[#FFFCF314] ml-2.5 rounded-sm">
                <div>
                  <p className="text-sm text-[#FFFCF3] font-semibold mb-2">
                    {item.id}
                  </p>

                  <CardTitle
                    cardtitle={item.heading}
                    className="text-[#FFFCF3]"
                  />
                </div>
                <p className="service-card-para text-[12px] sm:text-[16px] text-[#FFFCF37A]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Service;
