import { Link } from "react-router";

function Footer() {
  return (
    <footer className="py-14 px-6 bg-[#101828]">
      <div className="grid gap-10">
        <div>
          <h2 className="font-bold text-xl leading-7 tracking-normal text-[#FFFFFF]">Alex Carter</h2>
          <p className="pt-3 font-normal text-sm leading-[22.75px] tracking-normal text-[#99A1AF]">Full-stack software developer based in San Francisco, CA. Building thoughtful web experiences one commit at a time.</p>
          <div className="pt-6 flex gap-3">
            <div className="rounded-md py-1.5 px-3 bg-[#1E2939]">
              <p className="font-medium text-xs leading-4 tracking-normal text-[#99A1AF]">GitHub</p>
            </div>
            <div className="rounded-md py-1.5 px-3 bg-[#1E2939]">
              <p className="font-medium text-xs leading-4 tracking-normal text-[#99A1AF]">LinkedIn</p>
            </div>
            <div className="rounded-md py-1.5 px-3 bg-[#1E2939]">
              <p className="font-medium text-xs leading-4 tracking-normal text-[#99A1AF]">Twitter</p>
            </div>
          </div>
        </div>
        <div className="grid">
          <h3 className="font-semibold text-sm leading-5 tracking-[0.7px] uppercase text-[#FFFFFF]">Quick Links</h3>
          <div className="pt-5 grid gap-3">
            <Link to="/" className="font-normal text-sm leading-5 tracking-normal text-[#99A1AF] mt-0.75">
              Home
            </Link>
            <Link to="/" className="font-normal text-sm leading-5 tracking-normal text-[#99A1AF] mt-0.75">
              About
            </Link>
            <Link to="/" className="font-normal text-sm leading-5 tracking-normal text-[#99A1AF] mt-0.75">
              Projects
            </Link>
            <Link to="/" className="font-normal text-sm leading-5 tracking-normal text-[#99A1AF] mt-0.75">
              Experience
            </Link>
            <Link to="/" className="font-normal text-sm leading-5 tracking-normal text-[#99A1AF] mt-0.75">
              Contact
            </Link>
          </div>
        </div>
        <div className="grid">
          <h3 className="font-semibold text-sm leading-5 tracking-[0.7px] uppercase text-[#FFFFFF]">Contact</h3>
          <div className="pt-5 flex flex-col gap-3">
            <p className="font-normal text-sm leading-5 tracking-normal text-[#99A1AF]">alex.carter@email.com</p>
            <p className="font-normal text-sm leading-5 tracking-normal text-[#99A1AF]">+1 (415) 555-0192</p>
            <p className="font-normal text-sm leading-5 tracking-normal text-[#99A1AF]">San Francisco, CA 94105</p>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="border-t-[0.77px] border-[#1E2939] flex flex-col justify-between pt-6 items-center">
          <p className="font-normal text-sm leading-5 tracking-normal text-[#6A7282]">© 2026 Alex Carter. All rights reserved.</p>
          <button className="flex gap-2 font-normal text-sm leading-5 tracking-normal text-center items-center text-[#99A1AF] pt-3">
            Back to Top
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4.5">
              <path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
