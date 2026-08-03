import Image from "next/image";
import type { Project } from "@/data/projects";
import {
  ArrowUpRightIcon,
  CheckIcon,
  CodeIcon,
} from "@/components/icons/Icons";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-content">
        <span className="pill pill-accent project-category">
          {project.category}
        </span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>

        <p className="project-contrib-label">Key contributions</p>
        <ul className="project-contribs">
          {project.contributions.map((item) => (
            <li key={item}>
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="project-actions">
          <a
            className="btn btn-dark"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
            <ArrowUpRightIcon />
          </a>
          {project.codeUrl ? (
            <a
              className="btn btn-outline"
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View code
              <CodeIcon />
            </a>
          ) : null}
        </div>
      </div>

      <div className="project-visual">
        <div className="project-visual-inner">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1040}
            height={715}
            sizes="(max-width: 960px) 100vw, 520px"
          />
        </div>
      </div>
    </article>
  );
}
