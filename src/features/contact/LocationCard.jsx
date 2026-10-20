import { RiMapPin2Fill } from "@remixicon/react";

function LocationCard() {
  return (
    <div className="rounded-2xl border border-[#FFE8DD] bg-[#FFF3EE] px-6 py-10 text-center">
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#111111] text-white">
        <RiMapPin2Fill size={20} />
      </div>
      <p className="mt-4 font-semibold text-lg leading-7 text-[#FF5F22]">San Francisco, CA</p>
      <p className="text-sm leading-5 text-[#FF5F22]/80">United States</p>
      <p className="mt-3 text-xs leading-4 text-[#FF5F22]/50">37.7749° N, 122.4194° W</p>
    </div>
  );
}

export default LocationCard;
