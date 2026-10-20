import { useState } from "react";
import { NavLink } from "react-router";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import { navItems } from "../utils/navigation";

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#F3F4F6] shadow-2xs">
      <div className="h-16 max-w-334.5 mx-auto px-6 lg:px-29.25 flex items-center justify-between">
        <NavLink to="/" onClick={close} className="capitalize text-lg font-bold leading-7 text-[#111111]">
          alex carter
        </NavLink>
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} end={item.to === "/"} className={({ isActive }) => `rounded-md py-2 px-4 text-sm font-medium leading-5 transition-colors ${isActive ? "bg-[#F3F4F6] text-[#111111]" : "text-[#4A5565] hover:text-[#111111]"}`}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="ml-4 rounded-lg bg-[#111111] py-2.5 px-5 text-sm font-semibold leading-5 text-white transition-colors hover:bg-black">
            Hire Me
          </NavLink>
        </nav>
        <button type="button" className="p-2 -mr-2 lg:hidden text-[#4A5565]" onClick={() => setOpen((v) => !v)}>
          {open ? <RiCloseLine size={20} className="text-[#111111]" /> : <RiMenuLine size={20} />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden px-6 pb-6 pt-1 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} end={item.to === "/"} onClick={close} className={({ isActive }) => `rounded-md py-2.5 px-4 text-sm font-medium leading-5 ${isActive ? "bg-[#F3F4F6] text-[#111111]" : "text-[#4A5565]"}`}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={close} className="mt-3 rounded-lg bg-[#111111] py-3 text-center text-sm font-medium leading-5 text-white">
            Hire Me
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
