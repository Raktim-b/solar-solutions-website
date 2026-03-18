import { Leaf, Zap, Sun, Wind, BatteryCharging, Globe } from "lucide-react";
import { cloneElement } from "react";

const items = [
  { name: "Save Energy", icon: <Zap /> },
  { name: "Net-Zero Future", icon: <Leaf /> },
  { name: "Low-Carbon Solutions", icon: <Globe /> },
  { name: "Sustainable Energy", icon: <Sun /> },
  { name: "Renewable Power", icon: <Wind /> },
  { name: "Clean Energy", icon: <BatteryCharging /> },
];

const AutoScroll = () => {
  return (
    <div
      className="relative w-full overflow-hidden bg-black pt-6 select-none
      mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
      [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="relative w-full">
          <div className="absolute flex gap-4 animate-scroll">
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 border border-[#1a1a1a] bg-[#050505] rounded-md shrink-0"
              >
                {cloneElement(item.icon, {
                  className: "w-4 h-4 text-green-400",
                })}
                <p className="text-white text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoScroll;
