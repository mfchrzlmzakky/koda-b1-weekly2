import Container from "../../components/Container";
import ExperienceHeading from "./ExperienceHeading";
import { workHistory } from "../../utils/experience";

function WorkHistorySection() {
  return (
    <section className="py-10 md:py-12">
      <Container>
        <ExperienceHeading label="Work History" title="Professional Experience" />

        <div className="mt-10 overflow-hidden rounded-xl border border-[#F3F4F6] bg-white shadow-sm">
          <table className="w-full text-left text-sm leading-5">
            <thead className="bg-[#111111] text-white">
              <tr>
                <th className="px-4 py-4 font-semibold md:px-7">Company</th>
                <th className="px-4 py-4 font-semibold md:px-7">Position</th>
                <th className="hidden px-4 py-4 font-semibold md:table-cell md:px-7">Duration</th>
                <th className="hidden px-4 py-4 font-semibold lg:table-cell md:px-7">Location</th>
                <th className="hidden px-4 py-4 font-semibold lg:table-cell md:px-7">Type</th>
              </tr>
            </thead>
            <tbody>
              {workHistory.map((job) => (
                <tr key={job.company} className="border-b border-[#F3F4F6] last:border-b-0">
                  <td className="px-4 py-4 font-medium text-[#101828] md:px-7">{job.company}</td>
                  <td className="px-4 py-4 text-[#4A5565] md:px-7">{job.position}</td>
                  <td className="hidden px-4 py-4 text-[#6A7282] md:table-cell md:px-7">{job.duration}</td>
                  <td className="hidden px-4 py-4 text-[#6A7282] lg:table-cell md:px-7">{job.location}</td>
                  <td className="hidden px-4 py-4 lg:table-cell md:px-7">
                    <span className="rounded-full bg-[#FFF3EE] px-3 py-1 font-medium text-xs leading-4 text-[#FF5F22]">{job.type}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

export default WorkHistorySection;
