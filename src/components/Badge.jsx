function Badge({ leading, title }) {
  let textColor, paddingY, paddingX, borderColor, bgColor, textSize;
  if (leading === 4) {
    textSize = "text-xs";
    textColor = "text-[#4A5565]";
    paddingY = "py-1";
    paddingX = "px-2.5";
    borderColor = "border-[#E5E7EB]";
    bgColor = "bg-[#F9FAFB]";
  } else {
    textSize = "text-sm";
    textColor = "text-[#FF5F22]";
    paddingY = "py-2";
    paddingX = "px-4";
    borderColor = "border-[#FFF3EE]";
    bgColor = "bg-[#FFF3EE]";
  }
  return <p className={`font-medium ${textSize} leading-${leading} tracking-normal ${textColor} rounded-full ${paddingY} ${paddingX} border-t-[0.77px] md:border-t-[1.08px] ${borderColor} ${bgColor}`}>{title}</p>;
}

export default Badge;
