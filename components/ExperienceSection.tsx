import { experience } from "@/data/experience";
import { ExperienceItem } from "@/components/ExperienceItem";
import { SectionHeading } from "@/components/SectionHeading";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <div className="wrap">
        <SectionHeading
          id="experience-heading"
          label="02 — Experience"
          title="Experience"
        />
        <div className="timeline">
          {experience.map((role) => (
            <ExperienceItem key={role.id} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
}
