import KeyStats from "./KeyStats";

const stats = [
  { name: "20+", about: "Projects" },
  { name: "3+", about: "Years Exp." },
  { name: "15+", about: "Happy Clients" },
];

function HeroSection() {
  return (
    <section className="flex items-center py-20 md:py-32 lg:min-h-[744.67px] lg:py-24">
      <div className="w-full max-w-334.5 mx-auto px-6 lg:px-29.25 grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="font-semibold text-sm leading-5 tracking-[1.4px] uppercase text-[#FF5F22]">available for hire</p>
          <h1 className="pt-5 font-extrabold text-5xl leading-tight text-[#111111] lg:text-7xl">
            Hi, I'm <br />
            Alex Carter
          </h1>
          <p className="pt-5 font-medium text-xl leading-7 text-[#4A5565]">Full-Stack Software Developer</p>
          <p className="pt-4 max-w-lg font-normal text-base leading-6.5 text-[#6A7282]">I build fast, accessible, and beautifully designed web applications. With 3+ years of experience across the full stack, I turn complex problems into elegant digital products.</p>
          <div className="pt-8 flex gap-4">
            <button type="button" className="rounded-lg bg-[#111111] py-3.5 px-7 font-semibold text-base leading-6 text-white transition-colors hover:bg-black">
              View My Work
            </button>
            <button type="button" className="rounded-lg border-[1.5px] border-[#111111] py-3.5 px-7 font-semibold text-base leading-6 text-[#111111] transition-colors hover:bg-[#111111] hover:text-white">
              Contact Me
            </button>
          </div>
          <div className="pt-10 flex gap-10">
            {stats.map((s) => (
              <KeyStats key={s.about} statName={s.name} statAbout={s.about} />
            ))}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 lg:w-88 lg:h-88">
            <img src="/images/heroImage.jpg" alt="Alex Carter" className="w-full h-full object-cover rounded-2xl shadow-xl" />
            <span className="absolute -top-3 -right-2 rounded-xl border-[1.08px] border-[#F3F4F6] bg-white py-2 px-3 font-medium text-xs leading-4 text-[#364153] shadow-xl">San Francisco, CA</span>
            <span className="absolute -bottom-3 -left-4 rounded-xl bg-[#FF5F22] py-2 px-4 font-semibold text-sm leading-5 text-white shadow-xl">Open to work</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
