import Image from "next/image";

type EditorialImageProps = {
  src?: string;
  alt: string;
  label: string;
  aspectRatio?: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
  showImage?: boolean;
  fit?: "cover" | "contain";
};

export default function EditorialImage({
  src,
  alt,
  label,
  aspectRatio = "4 / 5",
  className = "",
  priority = false,
  objectPosition = "center",
  showImage = false,
  fit = "cover",
}: EditorialImageProps) {
  const displayImage = showImage && Boolean(src);

  return (
    <div
      className={`relative isolate overflow-hidden bg-paper ${className}`}
      style={{ aspectRatio }}
    >
      {displayImage ? (
        <Image
          src={src!}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          className={`transition-transform duration-700 ${
            fit === "contain"
              ? "object-contain"
              : "object-cover hover:scale-[1.035]"
          }`}
          style={{ objectPosition }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-[#e8dfd1] p-6 text-center">
          <div className="absolute -right-12 -top-12 size-48 rounded-full bg-terracotta/10" />
          <div className="absolute -bottom-16 -left-12 size-56 rounded-full bg-sage/15" />

          <div className="relative">
            <span className="font-display text-5xl italic text-terracotta/70">
              JustRestore
            </span>

            <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-muted">
              Artwork photography
            </p>

            <p className="mt-2 max-w-[200px] text-xs leading-5 text-muted">
              {label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
