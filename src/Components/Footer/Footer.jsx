import { Link, useNavigate } from "react-router-dom";
import { FacebookOutlined } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { navLinks } from "../../Services/JSON/Navbar";
import SecondaryBtn from "../Buttons/SecondaryBtn";
import Container from "../Container/Container";
import SubTitle from "../../Services/Title/SubTitle";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white relative py-10 sm:py-20 overflow-hidden z-10">
      <div
        className="absolute inset-0 opacity-10 
        bg-[radial-gradient(#ffffff_1px,transparent_1px)] 
        bg-size-[20px_20px]"
      />
      <Container>
        <div className="max-w-15 relative z-2 mx-auto mb-8">
          <Link to="/" className="w-full h-full">
            <img
              src={"Images/Logo.png"}
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
        <div className="text-center max-w-full md:max-w-150 mx-auto">
          <SubTitle
            subtitle={
              <>
                Power Your Home With{" "}
                <span className="text-green-500">Smarter Energy</span>
              </>
            }
          />
          <p className="text-gray-400 mt-4">
            Switch to clean, affordable solar solutions and start saving today.
          </p>
        </div>
        <div className="flex items-center justify-center mt-5 sm:mt-8">
          <SecondaryBtn
            name="Contact Now"
            onclick={() => navigate("/contact")}
            className="text-black hover:text-white"
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
