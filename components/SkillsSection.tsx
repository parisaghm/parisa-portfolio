import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";

export function SkillsSection() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="wrap">
        <SectionHeading
          id="skills-heading"
          label="03 — Skills"
          title="Technologies I work with"
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
