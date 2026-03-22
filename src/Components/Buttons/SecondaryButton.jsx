import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SecondaryButton = ({ content, className, path }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className={`flex items-center cursor-pointer gap-3 md:gap-4 bg-[#EDEDED] text-black rounded-lg py-1 md:py-1.25 pl-1 md:pl-1.5 pr-4 md:pr-6 group transition ${className}`}
    >
      {/* Icon Box */}
      <span className="bg-black text-white p-2 md:p-2.75 rounded-lg flex items-center justify-center">
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>

      {/* Text */}
      <span className="font-medium text-base md:text-lg">{content}</span>
    </button>
  );
};

export default SecondaryButton;

// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// const SecondaryButton = ({ content, className, path }) => {
//   const navigate = useNavigate();

//   return (
//     <button
//       onClick={() => navigate(path)}
//       className={`flex items-center cursor-pointer gap-4 relative bg-[#EDEDED] text-black rounded-lg py-1.25 pl-1.5 pr-6 group w-50 h-13 transition ${className}`}
//     >
//       {/* Icon Box */}
//       <span className="bg-black w-1/4 h-11.5 absolute left-1.5 text-white p-2.75 rounded-lg flex items-center justify-center group-hover:w-47 z-10 duration-500">
//         <ArrowRight
//           size={18}
//           className="transition-transform duration-300 group-hover:translate-x-1"
//         />
//       </span>

//       {/* Text */}
//       <span className="font-medium text-lg translate-x-15">{content}</span>
//     </button>
//   );
// };

// export default SecondaryButton;
