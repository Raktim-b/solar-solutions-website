const MainTitle = ({ maintitle, className }) => {
  return (
    <h1
      className={`font-bold select-none uppercase text-[40px]/[44px] sm:text-[50px]/[48px] lg:text-[66px]/[60px] xl:text-[72px]/[76px] tracking-tighter ${className}  relative z-2`}
    >
      {maintitle}
    </h1>
  );
};

export default MainTitle;
