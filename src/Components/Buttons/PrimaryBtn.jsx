import React from "react";

const PrimaryBtn = () => {
  return (
    <div>
      <button
        className="group relative overflow-hidden cursor-pointer bg-[#429200] text-white text-sm sm:text-[16px] md:text-lg/4 font-medium rounded-lg py-2 sm:py-3.5 md:py-[23.5px] px-5 sm:px-8 md:px-[52.5px] 
  transition-all ease-in-out duration-800 hover:scale-105 hover:shadow-lg"
      >
        <span
          className="absolute inset-0 bg-linear-to-r from-[#58b300] to-[#8ddc3a]
    -translate-x-full transition-transform duration-500 ease-in-out
    group-hover:translate-x-0"
        ></span>

        <span className="relative z-10">Free Call</span>
      </button>
    </div>
  );
};

export default PrimaryBtn;
