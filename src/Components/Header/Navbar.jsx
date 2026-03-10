import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import PrimaryBtn from "../Buttons/PrimaryBtn";
import Hamburger from "../Buttons/Hamburger";
import { navLinks } from "../../Services/JSON/Navbar";
import Container from "../Container/Container";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    }
    
  }, [open]);

  return (
    <header className="py-5 fixed z-2 w-full">
      <Container>
        <nav className="flex items-center justify-between md:justify-normal">
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
                      `text-3xl md:text-[16px] uppercase  font-semibold md:font-medium transition-colors duration-300 ${
                        isActive ? "text-green-500" : "text-white"
                      } hover:text-green-500`
                    }
                  >
                    {name}
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
