import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const ViewMore = ({ className }) => {
  return (
    <Link
      to="/Service"
      className={`relative inline-flex items-center gap-2 text-[#FFFCF3] font-semibold text-lg group hover:text-green-400 ${className}`}
    >
      View More
      <MoveRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
      <span
        className="absolute left-0 -bottom-1 h-px w-full bg-green-400
    scale-x-0 origin-left transition-transform duration-300
    group-hover:scale-x-100
    group-hover:origin-left
    group-not-[&:hover]:origin-right"
      />
    </Link>
  );
};

export default ViewMore;
