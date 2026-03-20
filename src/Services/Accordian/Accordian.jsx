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
          className="shadow-none! bg-white/10! backdrop-blur-md! py-1!  rounded-md! mt-2 before:hidden!"
        >
          <AccordionSummary
            expandIcon={
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-green-400">
                <AddIcon className="text-black text-sm" />
              </div>
            }
            aria-controls={`panel${item.id}-content`}
            id={`panel${item.id}-header`}
            className=""
          >
            <Typography
              component="span"
              className="font-semibold! font-['Inter']! text-[16px] md:text-xl leading-6! text-white"
            >
              {item.title}
            </Typography>
          </AccordionSummary>

          <AccordionDetails className="px-6 pb-5">
            <Typography className="text-gray-200 font-['Outfit']!">
              {item.desc}
            </Typography>
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
}
