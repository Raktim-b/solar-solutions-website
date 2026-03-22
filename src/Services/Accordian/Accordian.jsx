import { useState } from "react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { accor } from "../JSON/Accordian";

export default function Accordion() {
  const [expanded, setExpanded] = useState(accor[0].id);

  const handleChange = (id) => (event, isExpanded) => {
    setExpanded(isExpanded ? id : null);
  };

  return (
    <div className="w-full h-full border-l border-gray-300 pt-2">
      {accor.map((item) => (
        <MuiAccordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          className="shadow-none! bg-transparent! border-b border-gray-300 before:hidden!"
        >
          <AccordionSummary
            expandIcon={
              <AddIcon className="text-gray-600 text-2xl! sm:text-3xl! md:text-4xl!" />
            }
          >
            <Typography className="text-lg! sm:text-[22px]! lg:text-2xl!  font-medium! ">
              {item.title}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography className="font-semibold text-[#0000009e] text-base sm:text-lg/snug">
              {item.desc}
            </Typography>
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
}
