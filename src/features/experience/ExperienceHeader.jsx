import { RiDownloadLine } from "@remixicon/react";
import Container from "../../components/Container";

function ExperienceHeader() {
  return (
    <section className="bg-[#F9FAFB] py-12 md:py-16">
      <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-xs leading-4 tracking-[1.2px] uppercase text-[#FF5F22]">Career History</p>
          <h1 className="pt-3 font-extrabold text-4xl leading-tight text-[#101828] md:text-5xl">Experience</h1>
          <p className="pt-3 font-normal text-base leading-6.5 text-[#6A7282]">My professional journey, credentials, and recognition.</p>
        </div>

        <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-lg bg-[#111111] py-3.5 px-6 font-semibold text-base leading-6 text-white transition-colors hover:bg-black">
          <RiDownloadLine size={18} />
          Download Resume
        </a>
      </Container>
    </section>
  );
}

export default ExperienceHeader;
