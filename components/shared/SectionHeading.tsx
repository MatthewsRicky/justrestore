type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <p className="editorial-label mb-5 text-terracotta">{eyebrow}</p>
      )}

      <h2 className="font-display text-balance text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
