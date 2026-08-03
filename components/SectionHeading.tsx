type SectionHeadingProps = {
  id?: string;
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <span className="section-label">{label}</span>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}
