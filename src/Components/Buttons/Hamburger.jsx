const Hamburger = ({ open, setOpen, scrolled }) => {
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`flex flex-col md:hidden relative z-50 ml-auto text-xl cursor-pointer ${
          open ? "tilted" : ""
        }`}
        id="toggler-btn"
      >
        <span
          className={`inline-block toggle-line1 h-1 w-8 mb-1.5 ${
            scrolled ? "bg-black" : "bg-[#f8f5ec]"
          }`}
        ></span>

        <span
          className={`inline-block toggle-line2 h-1 w-4.5 self-end ${
            scrolled ? "bg-black" : "bg-[#f8f5ec]"
          }`}
        ></span>
      </button>
    </div>
  );
};

export default Hamburger;
