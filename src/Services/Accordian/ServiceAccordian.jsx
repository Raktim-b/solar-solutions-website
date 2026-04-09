import { useState } from "react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import { serviceCard } from "../JSON/Service/ServiceCard";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";

const ServiceAccordian = () => {
  const [expanded, setExpanded] = useState([0]);

  const handleChange = (index) => () => {
    setExpanded((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };
  return (
    <div className="w-full text-white border-t border-neutral-700">
      {serviceCard.map((item, index) => (
        <MuiAccordion
          key={index}
          expanded={expanded.includes(index)}
          onChange={handleChange(index)}
          className="bg-transparent! shadow-none! border-b border-neutral-700 before:hidden!"
        >
          {/* HEADER */}
          <AccordionSummary
            expandIcon={<AddIcon className="text-white text-3xl! " />}
            className="px-0! sm:px-4!"
          >
            <div className="flex items-start sm:items-center w-full justify-between">
              {/* NUMBER */}
              <span className="text-neutral-400 text-lg sm:text-xl md:text-2xl font-bold w-12 sm:w-20 lg:w-45  xl:w-58 shrink-0">
                {String(index + 1).padStart(3, "0")}
              </span>

              {/* TITLE */}
              <div className="flex items-start sm:items-center flex-1 justify-between">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                  {item.heading}
                </h2>
                <AddIcon
                  className={`text-2xl! sm:text-3xl! md:text-4xl! transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
                    expanded.includes(index) ? "rotate-225" : "rotate-0"
                  }`}
                />
              </div>
            </div>
          </AccordionSummary>

          {/* CONTENT */}
          <AccordionDetails className="pb-12 pt-6">
            <div className="w-full lg:w-5/6 ml-auto">
              <div className="w-full max-w-120 h-75 sm:h-90 md:h-120 ">
                <img
                  src={item.imgSrc}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>

              {/* TEXT SECTION */}

              {/* WHAT WE DO */}
              <div className="w-full lg:w-4/5 mt-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                  What We Do
                </h3>

                <p className="font-medium text-gray-500 text-base sm:text-lg/snug">
                  {item.desc}
                </p>
               <div className="mt-10">
                    <SecondaryButton content="Veiw More" className="bg-gray-300" />
               </div>
              </div>
            </div>
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
};

export default ServiceAccordian;
