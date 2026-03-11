const items = ["Renewable Energy", "Smart Energy", "Renewable Energy"];
const Autoscroll = () => {
  return (
    <section className="bg-black py-3 select-none sm:py-6 lg:py-9 relative z-10 overflow-hidden">
      <div className="relative w-full flex">
        {/* scrolling wrapper */}
        <div className="flex whitespace-nowrap animate-ticker">
          {[...items, ...items].map((text, i) => (
            <div key={i} className="flex items-center gap-6 px-6 ">
              <span className="text-stroke text-[80px] font-semibold">
                {text}
              </span>
              <div className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full text-black text-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Autoscroll;
