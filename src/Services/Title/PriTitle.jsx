const PriTitle = ({ prititle, className = "" }) => {
  return (
    <h4
      className={`flex items-center gap-2 select-none font-bold text-[16px] md:text-lg ${className}`}
    >
      <span className="w-3 h-3 bg-green-400 rounded-full inline-block"></span>
      {prititle}
    </h4>
  );
};

export default PriTitle;
