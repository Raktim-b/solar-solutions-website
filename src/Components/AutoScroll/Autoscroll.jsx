import { Zap, Leaf, Globe, Sun, Wind, BatteryCharging } from "lucide-react";

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
    <div className="w-full border-y border-gray-200 bg-white overflow-hidden mask-fade">
      <div className="relative h-20 md:h-30 flex items-center">
        <div className="animate-scroll flex gap-6 sm:gap-10 md:gap-20 whitespace-nowrap items-center">
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 md:gap-3 text-gray-500 text-xl md:text-2xl font-medium min-w-50 justify-center"
            >
              <span className="text-3xl md:text-4xl opacity-70">{item.icon}</span>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScroll;
