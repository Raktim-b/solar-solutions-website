const MainTitle = ({ maintitle, className }) => {
  return (
    <h1
      className={`font-semibold select-none text-4xl/[36px] sm:text-[50px]/[48px] lg:text-[66px]/[60px] xl:text-[90px]/[90px] ${className} tracking-tight relative z-2`}
    >
      {maintitle}
    </h1>
  );
};

export default MainTitle;
