const PriTitle = ({ prititle, className = "" }) => {
  return (
    <h4
      className={`uppercase select-none font-bold text-[16px] md:text-lg ${className}`}
    >
      {prititle}
    </h4>
  );
};

export default PriTitle;
