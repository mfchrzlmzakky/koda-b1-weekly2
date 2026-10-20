function EducationCard({ title, place, date, description }) {
  return (
    <div className="relative pl-12">
      <span className="absolute left-3 top-1 size-2 bg-[#111111]" />
      <article className="rounded-xl border border-[#F3F4F6] bg-white p-6 shadow-sm md:p-7">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] md:gap-x-4">
          <h3 className="md:col-start-1 font-semibold text-base leading-6 text-[#101828]">{title}</h3>
          <p className="md:col-start-1 pt-1 font-medium text-sm leading-5 text-[#FF5F22]">{place}</p>
          <span className="mt-3 w-fit rounded-full bg-[#FFF3EE] px-3 py-1 font-medium text-xs leading-4 text-[#FF5F22] md:col-start-2 md:row-start-1 md:mt-0 md:justify-self-end">{date}</span>
        </div>
        <p className="pt-3 font-normal text-sm leading-[22.75px] text-[#6A7282]">{description}</p>
      </article>
    </div>
  );
}

export default EducationCard;
