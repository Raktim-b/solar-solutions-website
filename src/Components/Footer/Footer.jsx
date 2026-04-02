import { Link, useLocation, useNavigate } from "react-router-dom";
import { FacebookOutlined } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { navLinks } from "../../Services/JSON/Navbar";
import SecondaryButton from "../Buttons/SecondaryButton";
import Container from "../Container/Container";
import SubTitle from "../../Services/Title/SubTitle";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const footerRef = useRef(null);
  useGSAP(() => {
    if (window.innerWidth < 768) return;
    gsap.fromTo(
      footerRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2.4,
      },
    );
  }, [location.pathname]);
  return (
    <footer
      ref={footerRef}
      className="bg-[#101010] text-white  relative py-10 sm:py-20  overflow-hidden z-7"
    >
      <img
        src="/Images/Home/Sec-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Container>
        <div className="max-w-15 relative z-11 mx-auto mb-8">
          <Link to="/" className="w-full h-full">
            <img
              src={"Images/Home/Logo.png"}
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
        <div className="text-center max-w-full md:max-w-150 mx-auto">
          <SubTitle
            subtitle={[
              <>Power Your Home With</>,
              <span className="text-green-500">Smarter Energy</span>,
            ]}
            className="text-white"
          />
          <p className="text-gray-400 font-semibold text-base sm:text-lg/snug mt-4">
            Switch to clean, affordable solar solutions and start saving today.
          </p>
        </div>
        <div className="flex items-center relative z-11 justify-center mt-5 sm:mt-8">
          <SecondaryButton
            content="Contact Now"
            path="/contact"
            className="text-black "
          />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 mt-8 text-gray-300 relative z-11">
          {navLinks.map((item, index) => (
            <div key={item.id} className="flex items-center gap-3">
              <span
                onClick={() => navigate(item.path)}
                className="cursor-pointer hover:text-green-400 transition text-sm md:text-[16px] uppercase font-medium"
              >
                {item.name}
              </span>

              {/* Dot separator */}
              {index !== navLinks.length - 1 && <span>•</span>}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-8 text-green-400 relative z-11">
          <FacebookOutlined
            size={20}
            className="cursor-pointer hover:scale-110 transition"
          />
          <TwitterIcon
            size={20}
            className="cursor-pointer hover:scale-110 transition"
          />

          <LinkedInIcon
            size={20}
            className="cursor-pointer hover:scale-110 transition"
          />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
