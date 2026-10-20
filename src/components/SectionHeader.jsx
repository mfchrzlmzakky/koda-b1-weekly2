import Divider from "./Divider";

function SectionHeader({ label, title, description }) {
  return (
    <div className="text-center">
      <p className="font-semibold text-xs leading-4 tracking-[1.2px] uppercase text-[#FF5F22]">{label}</p>
      <h2 className="pt-3 font-bold text-3xl leading-9 text-[#101828] md:text-4xl md:leading-10">{title}</h2>
      {description && <p className="pt-4 mx-auto max-w-xs md:max-w-xl font-normal text-base leading-6.5 text-[#6A7282]">{description}</p>}
      <Divider />
    </div>
  );
}

export default SectionHeader;
