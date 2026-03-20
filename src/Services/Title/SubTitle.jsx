const SubTitle = ({ subtitle, className = " " }) => {
  return (
    <h2
      className={`font-bold text-2xl/[28px] uppercase select-none sm:text-3xl md:text-[36px] lg:text-[40px]/[46px] xl:text-[44px]/[46px] my-3 tracking-tight sm:my-5 ${className}`}
    >
      {subtitle}
    </h2>
  );
};

export default SubTitle;
