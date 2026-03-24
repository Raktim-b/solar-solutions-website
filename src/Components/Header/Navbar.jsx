import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import Hamburger from "../Buttons/Hamburger";
import { navLinks } from "../../Services/JSON/Navbar";
import Container from "../Container/Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    open
      ? (document.body.classList.add("overflow-hidden"),
        document.documentElement.classList.add("overflow-hidden"))
      : (document.body.classList.remove("overflow-hidden"),
        document.documentElement.classList.remove("overflow-hidden"));
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [open]);
  // useGSAP(() => {
  //   gsap.from(".navbar", {
  //     y: -80,
  //     opacity: 0,
  //     duration: 1,
  //     delay: 1, // slightly more than loader time
  //     ease: "power3.out",
  //   });
  // });
  useGSAP(() => {
    if (window.innerWidth < 768) return;
    gsap.fromTo(
      navRef.current,
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 1.8,
        ease: "power3.out",
      },
    );
  });
  return (
    <header className="py-5 navbar fixed z-9 w-full ">
      <Container>
        <nav
          ref={navRef}
          className="flex items-center justify-between md:justify-normal"
        >
          <div className="nav-logo max-w-15 relative z-2">
            <Link to="/" className="w-full h-full">
              <img
                src={"Images/Logo.png"}
                alt=""
                className="w-full h-full object-cover"
              />
            </Link>
          </div>

          <div
            className={`nav-collapsed z-40 flex flex-col md:flex-row justify-normal md:justify-between
bg-white/10 backdrop-blur-3xl border-l border-white/30 shadow-xl
md:bg-transparent md:backdrop-blur-none md:border-0 md:shadow-none
min-h-screen md:min-h-auto w-[70%] md:w-auto items-start md:items-center
flex-1 fixed md:static right-0 top-0 py-30 md:py-0 pr-10 pl-20 md:pl-0 md:pr-0
transition-transform duration-300
${open ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
          >
            <ul className="flex flex-col md:flex-row items-start md:items-center mx-0 md:mx-auto">
              {navLinks.map(({ id, name, path }) => (
                <li
                  key={id}
                  className="mb-4.5 md:mb-0 mr-0 md:mr-5.5 lg:mr-7.5 last:mr-0"
                >
                  <NavLink
                    to={path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `relative inline-block overflow-hidden group ${
                        isActive ? "text-green-500" : "text-white"
                      }`
                    }
                  >
                    <span className="block text-3xl md:text-[16px] uppercase  font-semibold md:font-medium transition-transform duration-300 group-hover:-translate-y-full">
                      {name}
                    </span>
                    <span className="absolute text-3xl md:text-[16px] uppercase  font-semibold md:font-medium left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-green-500">
                      {name}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="nav-btn flex mt-3 md:mt-0">
              <PrimaryBtn name="Free Call" />
            </div>
          </div>
          <Hamburger open={open} setOpen={setOpen} />
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
