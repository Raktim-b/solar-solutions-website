import React from "react";
import { Link } from "react-router-dom";

const PrimaryBtn = () => {
  return (
    <div>
      <Link
        to="/contact"
        className="bg-[#429200] text-white text-[16px] md:text-lg/3 font-medium py-3.5 md:py-[23.5px] px-8 md:px-[52.5px] transition-colors duration-300 hover:text-[#429200] hover:bg-white hover:border-[#429200]"
      >
        Free Call
      </Link>
    </div>
  );
};

export default PrimaryBtn;
