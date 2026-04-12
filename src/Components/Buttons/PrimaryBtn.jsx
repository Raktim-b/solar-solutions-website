import { ArrowRight } from "lucide-react";

const PrimaryBtn = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between cursor-pointer bg-black text-white rounded-lg py-1 pr-1.5 pl-6 w-fit group hover:bg-[#1a1a1a] transition"
    >
      {/* Text */}
      <span className="font-semibold text-base md:text-lg">{name}</span>

      {/* Icon Box */}
      <span className="ml-6 bg-green-500 p-2.5 rounded-md flex items-center justify-center  ">
        <ArrowRight
          size={20}
          strokeWidth={3}
          className="text-white transition group-hover:translate-x-1"
        />
      </span>
    </button>
  );
};

export default PrimaryBtn;
