import type { ExperienceRole } from "@/data/experience";

type ExperienceItemProps = {
  role: ExperienceRole;
};

export function ExperienceItem({ role }: ExperienceItemProps) {
  return (
    <article className="experience-item">
      <span
        className={`experience-marker${role.current ? " is-current" : ""}`}
        aria-hidden="true"
      />
      <div className="experience-head">
        <h3>
          {role.title} — {role.company}
        </h3>
        <p className="experience-date">{role.date}</p>
      </div>
      {role.description ? (
        <p className="experience-desc">{role.description}</p>
      ) : null}
      <ul className="experience-bullets">
        {role.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {role.badge ? (
        <p className="experience-badge">{role.badge}</p>
      ) : null}
    </article>
  );
}
