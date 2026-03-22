const SubTitle = ({ subtitle, className = " " }) => {
  return (
    <h2
      className={` select-none text-3xl sm:text-5xl lg:text-[54px] font-semibold text-gray-900 leading-tight my-3 tracking-tighter sm:my-5 ${className}`}
    >
      {subtitle}
    </h2>
  );
};

export default SubTitle;
