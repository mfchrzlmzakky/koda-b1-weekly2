function Navbar() {
  return (
    <header className="sticky top-0 z-99">
      <div className="h-16 px-6 flex justify-between items-center bg-white shadow-2xs border border-[#F3F4F6] max-w-6xl">
        <div className="capitalize text-lg font-bold">alex carter</div>
        <button>
          <img src="/images/hamburgerIcon.png" alt="" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
