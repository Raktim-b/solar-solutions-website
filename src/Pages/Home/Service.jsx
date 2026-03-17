import Container from "../../Components/Container/Container";
import PriTitle from "../../Services/Title/PriTitle";
import SubTitle from "../../Services/Title/SubTitle";
import { serviceCard } from "../../Services/JSON/ServiceCard";
import CardTitle from "../../Services/Title/CardTitle";
import ViewMore from "../../Components/Buttons/ViewMore";

const Service = () => {
  return (
    <section className="py-10 sm:py-20 overflow-hidden min-h-screen relative z-10 bg-black">
      <div className="absolute -top-5 right-0 grayscale-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="272"
          height="272"
          fill="none"
        >
          <g clip-path="url(#a)" opacity=".2">
            <path
              fill="#011A14"
              d="M-.142 217.576v54.428h54.428v-54.428H-.142Z"
              opacity=".498"
            />
            <path
              fill="#C8F69B"
              d="M-.142 163.146v54.428h54.428v-54.428H-.142Z"
              opacity=".579"
            />
            <path
              fill="#011A14"
              d="M-.142 108.716v54.429h54.428v-54.429H-.142Z"
              opacity=".66"
            />
            <path
              fill="#011A14"
              d="M-.142 54.286v54.429h54.428V54.286H-.142Z"
              opacity=".739"
            />
            <path
              fill="#C8F69B"
              d="M-.142-.143v54.428h54.428V-.143H-.142Z"
              opacity=".816"
            />
            <path
              fill="#011A14"
              d="M54.287 217.576v54.428h54.428v-54.428H54.287Z"
              opacity=".478"
            />
            <path
              fill="#011A14"
              d="M54.287 163.146v54.428h54.428v-54.428H54.287Z"
              opacity=".556"
            />
            <path
              fill="#011A14"
              d="M54.287 108.716v54.429h54.428v-54.429H54.287Z"
              opacity=".631"
            />
            <path
              fill="#C8F69B"
              d="M54.287 54.286v54.429h54.428V54.286H54.287Z"
              opacity=".703"
            />
            <path
              fill="#C8F69B"
              d="M54.287-.147V54.28h54.428V-.147H54.287Z"
              opacity=".767"
            />
            <path
              fill="#C8F69B"
              d="M108.715 217.576v54.428h54.428v-54.428h-54.428Z"
              opacity=".447"
            />
            <path
              fill="#C8F69B"
              d="M108.715 163.146v54.428h54.428v-54.428h-54.428Z"
              opacity=".519"
            />
            <path
              fill="#011A14"
              d="M108.715 108.716v54.429h54.428v-54.429h-54.428Z"
              opacity=".588"
            />
            <path
              fill="#C8F69B"
              d="M108.715 54.286v54.429h54.428V54.286h-54.428Z"
              opacity=".65"
            />
            <path
              fill="#011A14"
              d="M108.715-.147V54.28h54.428V-.147h-54.428Z"
              opacity=".703"
            />
            <path
              fill="#011A14"
              d="M163.143 217.576v54.428h54.428v-54.428h-54.428Z"
              opacity=".405"
            />
            <path
              fill="#011A14"
              d="M163.143 163.146v54.428h54.428v-54.428h-54.428Z"
              opacity=".472"
            />
            <path
              fill="#011A14"
              d="M163.143 108.716v54.429h54.428v-54.429h-54.428Z"
              opacity=".533"
            />
            <path
              fill="#011A14"
              d="M163.143 54.286v54.429h54.428V54.286h-54.428Z"
              opacity=".588"
            />
            <path
              fill="#C8F69B"
              d="M163.143-.147V54.28h54.428V-.147h-54.428Z"
              opacity=".631"
            />
            <path
              fill="#011A14"
              d="M217.572 217.576v54.428H272v-54.428h-54.428Z"
              opacity=".356"
            />
            <path
              fill="#C8F69B"
              d="M217.572 163.146v54.428H272v-54.428h-54.428Z"
              opacity=".417"
            />
            <path
              fill="#C8F69B"
              d="M217.572 108.716v54.429H272v-54.429h-54.428Z"
              opacity=".472"
            />
            <path
              fill="#C8F69B"
              d="M217.572 54.286v54.429H272V54.286h-54.428Z"
              opacity=".519"
            />
            <path
              fill="#011A14"
              d="M217.572-.147V54.28H272V-.147h-54.428Z"
              opacity=".556"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 271.996v-272h272v272z" />
            </clipPath>
          </defs>
        </svg>
      </div>
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
        <div className="mt-10 sm:mt-15 grid grid-cols-1 lg:grid-cols-2 gap-2.5">
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
      </Container>
    </section>
  );
};

export default Service;
