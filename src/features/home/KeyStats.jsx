function KeyStats({ statName, statAbout }) {
  return (
    <div>
      <p className="font-bold text-2xl leading-8 tracking-normal text-[#101828]">{statName}</p>
      <p className="p-0.5 font-normal text-sm  leading-5 tracking-normal text-[#6A7282]">{statAbout}</p>
    </div>
  );
}

export default KeyStats;
