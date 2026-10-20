import { Link } from "react-router";
import { RiArrowUpLine } from "@remixicon/react";

const socials = [
  { label: "GitHub", href: "https://github.com/mfchrzlmzakky/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mochammadfachrizalmuzakky/" },
  { label: "Twitter", href: "https://github.com/mfchrzlmzakky/" },
];
const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-14 bg-[#101828]">
      <div className="max-w-334.5 mx-auto px-6 lg:px-29.25">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="font-bold text-xl leading-7 text-white">Alex Carter</h2>
            <p className="pt-3 font-normal text-sm leading-[22.75px] text-[#99A1AF]">Full-stack software developer based in San Francisco, CA. Building thoughtful web experiences one commit at a time.</p>
            <div className="pt-6 flex gap-3">
              {socials.map((item) => (
                <a key={item.label} href={item.href} target="_blank" className="rounded-md py-1.5 px-3 bg-[#1E2939] font-medium text-xs leading-4 text-[#99A1AF] transition-colors hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm leading-5 tracking-[0.7px] uppercase text-white">Quick Links</h3>
            <div className="pt-5 grid gap-3">
              {quickLinks.map((item) => (
                <Link key={item.label} to={item.to} className="w-fit font-normal text-sm leading-5 text-[#99A1AF] transition-colors hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm leading-5 tracking-[0.7px] uppercase text-white">Contact</h3>
            <div className="pt-5 flex flex-col gap-3">
              <p className="font-normal text-sm leading-5 text-[#99A1AF]">alex.carter@email.com</p>
              <p className="font-normal text-sm leading-5 text-[#99A1AF]">+1 (415) 555-0192</p>
              <p className="font-normal text-sm leading-5 text-[#99A1AF]">San Francisco, CA 94105</p>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-[#1E2939] flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
          <p className="font-normal text-sm leading-5 text-[#6A7282]">© 2026 Alex Carter. All rights reserved.</p>
          <button type="button" onClick={scrollToTop} className="flex items-center gap-2 font-normal text-sm leading-5 text-[#99A1AF] transition-colors hover:text-white">
            Back to Top
            <RiArrowUpLine size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
