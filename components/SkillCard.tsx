import type { SkillGroup } from "@/data/skills";

type SkillCardProps = {
  group: SkillGroup;
};

export function SkillCard({ group }: SkillCardProps) {
  const pillClass =
    group.variant === "accent" ? "pill pill-accent" : "pill";

  return (
    <article className="skill-card">
      <h3>{group.title}</h3>
      <div className="skill-pills">
        {group.skills.map((skill) => (
          <span key={skill} className={pillClass}>
            {skill}
          </span>
        ))}
      </div>
      {group.note ? <p className="skill-note">{group.note}</p> : null}
    </article>
  );
}
