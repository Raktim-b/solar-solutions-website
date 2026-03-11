const SubTitle = ({ subtitle, className = " " }) => {
  return (
    <h2
      className={`font-semibold text-2xl/[28px] select-none sm:text-3xl md:text-[36px] lg:text-[40px]/[46px] xl:text-[52px]/[60px] my-3 tracking-tighter sm:my-5 ${className}`}
    >
      {subtitle}
    </h2>
  );
};

export default SubTitle;
