import Badge from "../../components/Badge";

function ProjectDetailCard({ title, category, description, image, tags, github, demo }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#F3F4F6] bg-white shadow-sm">
      <div className="aspect-video bg-[#F3F4F6]">{image && <img src={image} alt={title} className="h-full w-full object-cover" />}</div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-semibold text-lg leading-7 text-[#101828]">{title}</h3>
          <span className="shrink-0 rounded-full bg-[#FFF3EE] px-3 py-1 font-medium text-xs leading-4 text-[#FF5F22]">{category}</span>
        </div>
        <p className="flex-1 pt-3 font-normal text-sm leading-[22.75px] text-[#6A7282]">{description}</p>
        <div className="pt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} leading={4} title={tag} />
          ))}
        </div>
        <div className="pt-6 flex gap-3">
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-lg border border-[#E5E7EB] bg-white py-3 text-center font-medium text-sm leading-5 text-[#364153] transition-colors hover:bg-[#F9FAFB]">
            GitHub
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-lg bg-[#111111] py-3 text-center font-medium text-sm leading-5 text-white transition-colors hover:bg-black">
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectDetailCard;
