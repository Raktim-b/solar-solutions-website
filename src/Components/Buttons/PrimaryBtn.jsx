import { ArrowRight } from "lucide-react";

const PrimaryBtn = ({ name, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="group flex items-center gap-3 cursor-pointer
      border-2 border-green-500 rounded-full relative z-2
      py-3 px-6
      text-[16px] font-medium
      transition-all duration-300
      hover:bg-black text-white"
    >
      {name}

      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
};

export default PrimaryBtn;
