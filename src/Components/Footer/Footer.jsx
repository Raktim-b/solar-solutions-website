import { useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../../Services/JSON/Navbar";
import Container from "../Container/Container";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PriTitle from "../../Services/Title/PriTitle";
import { workCard } from "../../Services/JSON/Home/Work";

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
      className="bg-[#101010] text-white min-h-auto md:min-h-[80vh] relative py-10 sm:py-20  overflow-hidden z-7"
    >
      <Container>
        {/* TOP GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-16 text-white relative z-11">
          {/* CONTACT */}
          <div className="col-span-1 xl:col-span-2">
            <div className=" mb-6 flex items-center gap-1">
              <span className="w-2.5 h-2.5 bg-[#a1a1a1] rounded-full inline-block"></span>
              <p className="text-[#a1a1a1] leading-tight font-bold">CONTACT</p>
            </div>
            <h3 className="text-[32px] leading-tight font-semibold">
              123 Design , <span className="block">Avenue Downtown </span>
              <span className="block">XYZ, India</span>
            </h3>

            <div className="mt-6 text-gray-400 space-y-2 text-sm">
              <p>HELLO@Abc.COM</p>
              <p>+01 123456789</p>
            </div>
          </div>

          {/* SITEMAP */}
          <div>
            <div className=" mb-7.5 flex items-center gap-1">
              <span className="w-2.5 h-2.5 bg-[#a1a1a1] rounded-full inline-block"></span>
              <p className="text-[#a1a1a1] leading-tight font-bold">SITEMAP</p>
            </div>

            <div className="flex flex-col gap-1.25">
              {navLinks.map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className="relative w-fit overflow-hidden cursor-pointer group"
                >
                  <span className="block text-[32px] leading-tight tracking-tighter font-semibold transition-transform duration-300 group-hover:-translate-y-full">
                    {item.name}
                  </span>

                  <span className="absolute left-0 top-0 block text-[32px] leading-tight tracking-tighter font-semibold translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-gray-400">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <div className=" mb-7.5 flex items-center gap-1">
              <span className="w-2.5 h-2.5 bg-[#a1a1a1] rounded-full inline-block"></span>
              <p className="text-[#a1a1a1] leading-tight font-bold">PROJECT</p>
            </div>

            <div className="flex flex-col gap-1.25 text-2xl font-semibold">
              {workCard.map((project, index) => (
                <div
                  key={index}
                  className="relative w-fit overflow-hidden cursor-pointer group"
                >
                  <span className="block text-[32px] leading-tight font-semibold transition-transform duration-300 group-hover:-translate-y-full">
                    {project.name.split(" ")[0]}
                  </span>

                  <span className="absolute left-0 top-0 block text-[32px] leading-tight font-semibold translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-gray-400">
                    {project.name.split(" ")[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-20 text-white text-sm relative z-11">
          {/* SOCIAL */}
          <div className="flex gap-8 uppercase font-semibold">
            <span className="cursor-pointer hover:text-white">Instagram</span>
            <span className="cursor-pointer hover:text-white">Twitter(X)</span>
            <span className="cursor-pointer hover:text-white">LinkedIn</span>
          </div>

          {/* COPYRIGHT */}
          <p className="mt-6 md:mt-0 font-semibold">
            © 2026 All rights reserved.
          </p>

          {/* TEMPLATE */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
