import Container from "../../Components/Container/Container";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";
import { serviceCard } from "../../Services/JSON/ServiceCard";
import CardTitle from "../../Services/Title/CardTitle";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";

const Service = () => {
  return (
    <section className="bg-[#101010] py-10 sm:py-30 overflow-hidden min-h-screen relative z-10 ">
      <img
        src="/Images/Sec-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Container>
        {/* Title */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5 md:gap-10">
          {/* LEFT SMALL TITLE */}
          <div className="lg:w-[25%]">
            <PriTitle
              prititle="Our services"
              className="text-gray-400 flex items-center gap-2"
            />
          </div>

          {/* RIGHT BIG TEXT */}
          <div className="lg:w-[75%]">
            <SubTitle
              className="text-white "
              subtitle={
                <>
                  <span className="ml-40">
                    Making the Solar Switch Easy and Affordable —{" "}
                  </span>
                  helping you transition to clean, renewable energy with
                  reliable solutions that reduce costs and power a sustainable
                  future.
                </>
              }
            />
          </div>
        </div>
        {/* Cards */}
        <div className="mt-10 sm:mt-15 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-3">
          {serviceCard.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden h-75 sm:h-120 shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={item.imgSrc}
                alt={item.heading}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-3 sm:p-6 text-white">
                {/* ID */}
                <p className="text-sm font-semibold text-green-400 -mb-8 group-hover:mb-2 md:mb-0.5">
                  {item.id}
                </p>

                {/* HEADING (always visible, stays low) */}
                <div className="translate-y-10 md:translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <CardTitle
                    cardtitle={item.heading}
                    className="text-white/80 mix-blend-overlay"
                  />
                </div>

                {/* HIDDEN CONTENT */}
                <div className="overflow-hidden">
                  <div className="-mt-5 group-hover:mt-2 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150">
                    <p className="text-base! sm:text-lg/snug! font-semibold! text-gray-200!">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:justify-end mt-10 md:mt-20">
          <SecondaryButton content="Learn more" path="/service" />
        </div>
      </Container>
    </section>
  );
};

export default Service;
