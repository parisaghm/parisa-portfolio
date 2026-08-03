import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export function WorkSection() {
  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <div className="wrap">
        <SectionHeading
          id="work-heading"
          label="01 — Work"
          title="Selected work"
          description="A selection of products and engineering projects focused on usability, maintainability and reliable delivery."
        />
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
