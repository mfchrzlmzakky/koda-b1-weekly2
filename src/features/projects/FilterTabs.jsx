function FilterTabs({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button key={category} type="button" onClick={() => onChange(category)} className={`rounded-full border py-2.5 px-5 font-medium text-sm leading-5 transition-colors ${active === category ? "border-[#111111] bg-[#111111] text-white" : "border-[#F3F4F6] bg-white text-[#4A5565] hover:bg-[#F9FAFB]"}`}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
