import Badge from "../../components/Badge";

function ProjectCard({ title, description, image, tags }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#F3F4F6] bg-white shadow-sm">
      <img src={image} alt={title} className="h-45 w-full object-cover md:h-50" />
      <div className="p-6">
        <h3 className="font-semibold text-lg leading-7 text-[#101828]">{title}</h3>
        <p className="pt-2 font-normal text-sm leading-[22.75px] text-[#6A7282]">{description}</p>
        <div className="pt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} leading={4} title={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
