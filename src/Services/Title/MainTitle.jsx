const MainTitle = ({ maintitle, className }) => {
  return (
    <h1
      className={`font-semibold select-none text-[30px]/[34px] lg:text-[46px] xl:text-[64px]/[60px] ${className} relative z-2`}
    >
      {maintitle}
    </h1>
  );
};

export default MainTitle;
