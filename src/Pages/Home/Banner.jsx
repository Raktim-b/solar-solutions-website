import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../../Components/Buttons/PrimaryBtn";

import Container from "../../Components/Container/Container";
import MainTitle from "../../Services/Title/MainTitle";
import SecondaryBtn from "../../Components/Buttons/SecondaryBtn";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="banner-sec min-h-screen sm:min-h-screen flex justify-center pt-40 sm:pt-0 items-center text-center">
      <Container>
        <div className="flex flex-col items-center text-center">
          <MainTitle
            maintitle={
              <>
                Advanced Solar Solutions for Modern{" "}
                <span className="text-green-500">Living</span>
              </>
            }
          />
          <p className="text-[16px]/[20px] md:text-lg/[24px] lg:text-xl/[28px] xl:text-2xl/[30px] text-[#f8f5ec] relative z-2 pt-3.5 lg:pt-4 xl:pt-5 pb-5 xl:pb-7.5">
            Our solar solutions are designed to deliver reliable, clean energy
            while reducing your electricity costs. By harnessing the power of
            the sun, we help homes and businesses move toward a sustainable
            future with efficient, long-lasting technology you can trust.
          </p>

          <SecondaryBtn
            name="Contact Now"
            onclick={() => navigate("/Contact")}
          />
        </div>
      </Container>
    </section>
  );
};

export default Banner;
