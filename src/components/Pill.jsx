function Pill({ children, size = "md" }) {
  const spacing = size === "lg" ? "py-2.5 px-5" : "py-2 px-4";
  return <span className={`inline-block rounded-full border border-[#E5E7EB] bg-[#F9FAFB] font-medium text-sm leading-5 text-[#4A5565] ${spacing}`}>{children}</span>;
}

export default Pill;
