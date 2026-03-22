import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SecondaryButton = ({ content, className, path }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)} // ✅ dynamic
      className={`flex items-center cursor-pointer gap-2 md:gap-4 bg-[#EDEDED] text-black rounded-lg py-1 md:py-1.25 pl-1 md:pl-1.5 pr-4 md:pr-6 group hover:bg-white transition ${className}`}
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
