function CertificationCard({ code, title, issuer, date }) {
  return (
    <article className="flex items-center gap-4 rounded-xl border border-[#F3F4F6] bg-white p-6 shadow-sm">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[#FFF3EE] font-bold text-sm leading-5 text-[#FF5F22]">{code}</div>
      <div>
        <h3 className="font-semibold text-base leading-6 text-[#101828]">{title}</h3>
        <p className="pt-0.5 font-medium text-sm leading-5 text-[#FF5F22]">{issuer}</p>
        <p className="pt-0.5 font-normal text-xs leading-4 text-[#99A1AF]">{date}</p>
      </div>
    </article>
  );
}

export default CertificationCard;
