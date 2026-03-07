import React from "react";

const SecTitle = ({secTitle}) => {
  return (
    <h2 className="font-semibold text-[22px]/[26px] sm:text-2xl md:text-[28px] lg:text-3xl xl:text-4xl/tight text-[#242424] my-3 sm:my-5">
     {secTitle}
    </h2>
  );
};

export default SecTitle;
