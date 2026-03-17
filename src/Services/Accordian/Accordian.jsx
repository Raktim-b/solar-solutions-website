import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { accor } from "../JSON/Accordian";

export default function Accordion() {
  return (
    <div className="max-w-full lg:max-w-1/2 mx-auto mt-12">
      {accor.map((item) => (
        <MuiAccordion
          key={item.id}
          className="shadow-none! bg-[#F9FAFB]! py-1.5! border-3! border-[#ececec]! rounded-2xl! mt-4 before:hidden!"
        >
          <AccordionSummary
            expandIcon={
              <AddIcon className="transition-transform duration-300" />
            }
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
            className=""
          >
            <Typography
              component="span"
              className="font-semibold! font-['Syne']! text-[16px] md:text-xl leading-6!"
            >
              {item.title}
            </Typography>
          </AccordionSummary>

          <AccordionDetails className="px-6 pb-5">
            <Typography className="text-gray-600 font-['Outfit']!">
              {item.desc}
            </Typography>
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
}
