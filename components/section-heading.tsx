export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-blue">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-primary-text md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-secondary-text md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
