function ExperienceHeading({ label, title }) {
  return (
    <div>
      <p className="font-semibold text-xs leading-4 tracking-[1.2px] uppercase text-[#FF5F22]">{label}</p>
      <h2 className="pt-2 font-bold text-2xl leading-8 text-[#101828] md:text-3xl md:leading-9">{title}</h2>
      <div className="mt-4 h-1 w-12 rounded-full bg-[#111111]" />
    </div>
  );
}

export default ExperienceHeading;
