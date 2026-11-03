import type { AboutAchievement } from "@/types/about";

type AchievementCardProps = {
  achievement: AboutAchievement;
  index: number;
};

export default function AchievementCard({
  achievement,
  index,
}: AchievementCardProps) {
  return (
    <article className="group">
      <div className="relative flex justify-center overflow-hidden bg-paper p-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={achievement.image}
          alt={achievement.imageAlt}
          loading="lazy"
          decoding="async"
          className="block h-auto w-auto max-w-full transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>

      <div className="mt-6">
        <p className="editorial-label text-terracotta">
          Recognition {String(index + 1).padStart(2, "0")}
          {achievement.year && ` / ${achievement.year}`}
        </p>

        <div className="mt-3 flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-2xl leading-tight sm:text-3xl">
              {achievement.title}
            </h3>
          </div>

          {achievement.badge && (
            <div className="w-10 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={achievement.badge}
                alt="Annie Sloan badge"
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
          )}
        </div>

        <p className="mt-5 text-sm leading-7 text-muted">
          {achievement.description}
        </p>
      </div>
    </article>
  );
}
