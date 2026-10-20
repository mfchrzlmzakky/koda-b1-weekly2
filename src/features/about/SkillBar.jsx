function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between font-medium text-sm leading-5">
        <span className="text-[#364153]">{name}</span>
        <span className="text-[#FF5F22]">{level}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-[#E5E7EB]">
        <div className="h-full rounded-full bg-[#111111]" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export default SkillBar;
