const SubTitle = ({ subtitle, className = " " }) => {
  return (
    <h2
      className={`font-semibold text-[22px]/[26px] select-none sm:text-2xl md:text-[28px] lg:text-3xl xl:text-4xl/tight my-3 sm:my-5 ${className}`}
    >
      {subtitle}
    </h2>
  );
};

export default SubTitle;
