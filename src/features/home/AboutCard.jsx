function AboutCard({ title, description }) {
  return (
    <div className="rounded-xl border-[0.77px] md:border-[1.08px] border-[#F3F4F6] p-7 bg-[#FFFFFF] shadow-sm">
      <h3 className="font-semibold text-lg leading-7 tracking-normal text-[#101828]">{title}</h3>
      <p className="pt-3 font-normal text-sm leading-[22.75px] tracking-normal text-[#6A7282]">{description}</p>
    </div>
  );
}

export default AboutCard;
