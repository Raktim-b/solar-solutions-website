import { useNavigate } from "react-router-dom";
import Container from "../../Components/Container/Container";
import MainTitle from "../../Services/Title/MainTitle";
import SecondaryBtn from "../../Components/Buttons/SecondaryBtn";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="banner-sec sticky top-0 min-h-screen flex items-center z-0">
      <Container>
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-7.5">
          <div className="max-w-187.5">
            <MainTitle
              className="text-white"
              maintitle={
                <>
                  Advanced Solar Solutions for Modern{" "}
                  <span className="text-green-500">Living</span>
                </>
              }
            />

            <p className="text-[16px]/[22px] md:text-lg/[26px] lg:text-xl/[30px] text-[#f8f5ec] font-medium pt-5 relative z-2">
              Our solar solutions are designed to deliver reliable, clean energy
              while reducing your electricity costs. By harnessing the power of
              the sun, we help homes and businesses move toward a sustainable
              future with efficient, long-lasting technology you can trust.
            </p>
          </div>

          <div className="lg:self-end">
            <SecondaryBtn
              name="Contact Now"
              onclick={() => navigate("/Contact")}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
