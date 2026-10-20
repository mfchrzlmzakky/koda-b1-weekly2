function Badge({ leading, title }) {
  const styles = leading === 4 ? "py-1 px-2.5 text-xs leading-4 text-[#4A5565] border-[#E5E7EB] bg-[#F9FAFB]" : "py-2 px-4 text-sm leading-5 text-[#FF5F22] border-[#FFF3EE] bg-[#FFF3EE]";

  return <span className={`inline-block rounded-full border font-medium ${styles}`}>{title}</span>;
}

export default Badge;
