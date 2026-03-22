const CardTitle = ({ cardtitle, className }) => {
  return (
    <h3
      className={` uppercase text-lg md:text-[20px]/[22px] tracking-tighter ${className} font-semibold select-none `}
    >
      {cardtitle}
    </h3>
  );
};

export default CardTitle;
