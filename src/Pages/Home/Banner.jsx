import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../../Components/Buttons/PrimaryBtn";
import Title from "../../Components/Title/Title";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="banner-sec min-h-[90vh] sm:min-h-screen flex justify-center items-center text-center">
      <div className="max-w-330 w-full mx-auto px-3.5">
        <div className="">
          <Title title="Advanced Solar Solutions for Modern Living" />
          <p className="text-[16px]/[20px] md:text-lg/[24px] lg:text-xl/[28px] xl:text-2xl/[30px] text-white/70 pt-3.5 lg:pt-4 xl:pt-5 pb-5 xl:pb-7.5">
            Our solar solutions are designed to deliver reliable, clean energy
            while reducing your electricity costs. By harnessing the power of
            the sun, we help homes and businesses move toward a sustainable
            future with efficient, long-lasting technology you can trust.
          </p>
          <PrimaryBtn name="Contact Now" onclick={() => navigate("/Contact")} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
