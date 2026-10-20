import { RiArrowRightLine } from "@remixicon/react";
import { onlineLinks } from "../../utils/contact";

function OnlineLinksCard() {
  return (
    <div className="rounded-2xl border border-[#F3F4F6] bg-[#F9FAFB] p-6 md:p-8">
      <h3 className="font-semibold text-xl leading-7 text-[#101828]">Find Me Online</h3>
      <ul className="mt-4">
        {onlineLinks.map((link) => (
          <li key={link.name} className="border-b border-[#F3F4F6] last:border-b-0">
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 py-3 transition-opacity hover:opacity-70">
              <span className="font-medium text-base leading-6 text-[#101828]">{link.name}</span>
              <span className="flex items-center gap-1 text-sm leading-5 text-[#99A1AF]">
                {link.handle}
                <RiArrowRightLine size={14} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OnlineLinksCard;
