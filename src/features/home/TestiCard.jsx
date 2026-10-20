function TestiCard({ name, role, image, quote }) {
  return (
    <div className="rounded-xl border border-[#F3F4F6] bg-[#F9FAFB] p-7">
      <p className="font-normal italic text-sm leading-[22.75px] text-[#4A5565]">“{quote}”</p>
      <div className="pt-6 flex items-center gap-4">
        <img src={image} alt={name} className="size-12 shrink-0 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-sm leading-5 text-[#101828]">{name}</p>
          <p className="font-normal text-xs leading-4 text-[#6A7282]">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestiCard;
