function AboutCard({ title, description }) {
  return (
    <div className="rounded-xl border border-[#F3F4F6] bg-white p-7 shadow-sm">
      <h3 className="font-semibold text-lg leading-7 text-[#101828]">{title}</h3>
      <p className="pt-3 font-normal text-sm leading-[22.75px] text-[#6A7282]">{description}</p>
    </div>
  );
}

export default AboutCard;
