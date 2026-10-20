function AwardCard({ title, org, date, description }) {
  return (
    <article className="rounded-xl border border-[#F3F4F6] bg-white p-6 shadow-sm md:p-7">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-lg leading-7 text-[#101828]">{title}</h3>
        <span className="shrink-0 pt-1 font-normal text-sm leading-5 text-[#99A1AF]">{date}</span>
      </div>
      <p className="pt-1 font-medium text-sm leading-5 text-[#FF5F22]">{org}</p>
      <p className="pt-3 font-normal text-base leading-6.5 text-[#6A7282]">{description}</p>
    </article>
  );
}

export default AwardCard;
