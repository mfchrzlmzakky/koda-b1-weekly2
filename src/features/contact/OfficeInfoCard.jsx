import { officeInfo } from "../../utils/contact";

function OfficeInfoCard() {
  return (
    <div className="rounded-2xl border border-[#F3F4F6] bg-[#F9FAFB] p-6 md:p-8">
      <h3 className="font-semibold text-xl leading-7 text-[#101828]">Office Information</h3>
      <ul className="mt-6 grid gap-5">
        {officeInfo.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label} className="flex gap-4">
              <Icon size={20} className={`mt-0.5 shrink-0 ${item.color}`} />
              <div>
                <p className="font-medium text-base leading-6 text-[#101828]">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-base leading-6 text-[#FF5F22] hover:underline">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-base leading-6 text-[#4A5565]">{item.value}</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OfficeInfoCard;
