import { MoveRight } from "lucide-react";

const SecondaryBtn = ({ name, onclick, className }) => {
  return (
    <>
      <button
        onClick={onclick}
        className={`group flex items-center gap-2 cursor-pointer
       bg-green-500 rounded-full relative z-2
      py-3 px-6
      text-[16px] font-medium
      transition-all duration-300 hover:outline-2
    hover:outline-green-500 hover:bg-black ${className}`}
      >
        {name}

        <MoveRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </>
  );
};

export default SecondaryBtn;
