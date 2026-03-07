import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import PrimaryBtn from "../Buttons/PrimaryBtn";
import Hamburger from "../Buttons/Hamburger";
import { navLinks } from "../../Services/JSON/Navbar";

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
    <header className="py-2.5">
      <div className="max-w-330 w-full mx-auto px-3.5">
        <nav className="flex items-center justify-between sm:justify-normal">
          <div className="nav-logo max-w-24">
            <Link to="/" className="w-full h-full">
              <img
                src="/Images/Logo.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </Link>
          </div>

          <div
            className={`nav-collapsed z-40 flex flex-col sm:flex-row justify-normal sm:justify-between
bg-white/20 backdrop-blur-xl border-l border-white/30 shadow-xl
sm:bg-transparent sm:backdrop-blur-none sm:border-0 sm:shadow-none
min-h-screen sm:min-h-auto w-[60%] sm:w-auto items-start sm:items-center
flex-1 fixed sm:static right-0 top-0 py-30 sm:py-0 px-10 sm:px-0
transition-transform duration-300
${open ? "translate-x-0" : "translate-x-full"} sm:translate-x-0`}
          >
            <ul className="flex flex-col sm:flex-row items-start sm:items-center mx-0 sm:mx-auto">
              {navLinks.map(({ id, name, path }) => (
                <li
                  key={id}
                  className="mb-4.5 sm:mb-0 mr-0 sm:mr-5.5 md:mr-7.5 last:mr-0"
                >
                  <NavLink
                    to={path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-3xl sm:text-[16px] md:text-lg font-semibold sm:font-medium transition-colors duration-300 ${
                        isActive ? "text-[#429200]" : "text-[#242424]"
                      } hover:text-[#429200]`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="nav-btn flex mt-3 sm:mt-0">
              <PrimaryBtn />
            </div>
          </div>

          <Hamburger open={open} setOpen={setOpen} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
