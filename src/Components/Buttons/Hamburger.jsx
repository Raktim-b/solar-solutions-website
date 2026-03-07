const Hamburger = ({ open, setOpen }) => {
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`flex flex-col sm:hidden relative z-50 ml-auto text-xl cursor-pointer ${
          open ? "tilted" : ""
        }`}
        id="toggler-btn"
      >
        <span className="inline-block toggle-line1 bg-[#242424] h-1 w-8 mb-1.5"></span>
        <span className="inline-block toggle-line2 bg-[#242424] h-1 w-4.5 self-end"></span>
      </button>
    </div>
  );
};

export default Hamburger;
