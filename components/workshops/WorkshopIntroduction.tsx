export default function WorkshopIntroduction() {
  return (
    <section className="section-padding bg-paper">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="editorial-label text-terracotta">
              Create something extraordinary
            </p>

            <h1 className="mt-6 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
              JustRestore
              <br />
              <span className="italic text-terracotta">Workshops</span>
            </h1>

            <p className="mt-7 text-sm leading-8 text-muted sm:text-base">
              Ever wanted to give old furniture a fresh new look but didn’t know
              where to start? Our hands-on workshops are the perfect way to
              unleash your creativity, learn new painting techniques, and have a
              great time in the process! Whether you’re a total beginner or a
              DIY enthusiast, you’ll get to experiment with chalk paint, special
              finishes, and creative effects—all in a fun, relaxed setting.
            </p>

            <p className="mt-5 text-sm leading-8 text-muted sm:text-base">
              Come solo or bring a friend, and let’s turn ordinary furniture
              into something extraordinary. No experience needed, just a love
              for color and a little curiosity! It’s all about having fun and
              making something beautiful you can be proud of.
            </p>

            <a
              href="#workshop-list"
              className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-terracotta transition-colors hover:text-ink"
            >
              Explore the workshops
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            {/* Replace with the confirmed introduction image path */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/workshops/workshop-1.avif"
              alt="Creative furniture painting and restoration"
              className="block h-auto w-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
