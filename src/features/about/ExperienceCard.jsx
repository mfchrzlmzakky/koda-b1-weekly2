import Badge from "../../components/Badge";

function ExperienceCard({ role, company, date, points }) {
  return (
    <article className="rounded-xl border border-[#F3F4F6] bg-white p-6 shadow-sm md:p-7">
      <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] md:gap-x-4">
        <h3 className="md:col-start-1 font-semibold text-lg leading-7 text-[#101828]">{role}</h3>
        <p className="md:col-start-1 pt-1 font-medium text-sm leading-5 text-[#101828]">{company}</p>
        <div className="mt-3 w-fit md:col-start-2 md:row-start-1 md:mt-0 md:justify-self-end">
          <Badge leading={4} title={date} />
        </div>
      </div>

      <ul className="pt-4 grid gap-2">
        {points.map((point) => (
          <li key={point} className="flex gap-3 font-normal text-sm leading-[22.75px] text-[#6A7282]">
            <span className="mt-2.5 size-1 shrink-0 rounded-full bg-[#FF5F22]" />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
