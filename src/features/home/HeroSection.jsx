import KeyStats from "./KeyStats";

function HeroSection() {
  return (
    <section className="grid lg:grid-cols-2 max-w-6xl min-h-195 md:min-h[1067px] lg:min-h-[744.67px] py-20 px-6 gap-16 lg:text[#FFFFFF] items-center mx-auto">
      <div className="md:py-[36.42px] lg:px-23.25">
        <p className="font-semibold text-sm leading-5 tracking-[1.4px] uppercase text-[#FF5F22]">available for hire</p>
        <h1 className="font-extrabold text-5xl pt-5 leading-15 tracking-normal">
          Hi, I'm <br />
          Alex Carter
        </h1>
        <p className="pt-5 font-medium text-xl leading-7 tracking-normal text-[#4A5565]">Full-Stack Software Developer</p>
        <p className="pt-4 font-normal text-base leading-6.5 tracking-normal text-[#6A7282]">I build fast, accessible, and beautifully designed web applications. With 3+ years of experience across the full stack, I turn complex problems into elegant digital products.</p>
        <div className="pt-8 flex gap-4">
          <button className="bg-[#111111] text-white rounded-lg py-3.5 px-7 font-semibold text-base leading-6 tracking-normal">View My Work</button>
          <button className="rounded-lg border-[1.53px] md:border-[1.08px] border-[#111111] py-3.5 px-7 font-semibold text-base leading-6 tracking-normal text-[#111111]">Contact Me</button>
        </div>
        <div className="pt-10 flex gap-10">
          <KeyStats statName={"20+"} statAbout={"Projects"} />
          <KeyStats statName={"3+"} statAbout={"Years Exp."} />
          <KeyStats statName={"15+"} statAbout={"Happy Clients"} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative w-72 h-72">
          <div className="">
            <img src="/images/heroImage.png" alt="Hero Image" className="rounded-2xl place-self-center shadow-xl" />
          </div>
          <div className=" absolute -bottom-3 -left-4">
            <span className="font-semibold text-sm text-white rounded-xl py-2 px-4 leading-5 tracking-normal bg-[#FF5F22] shadow-xl">Open to Work</span>
          </div>
          <div className=" absolute -top-3 -right-4">
            <span className="font-medium text-xs text-[#364153] rounded-xl py-2 px-4 md:px-3 leading-4 bg-[#FFFFFF] border-[1.08px] border-[#F3F4F6] shadow-xl">San Fransisco, CA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
