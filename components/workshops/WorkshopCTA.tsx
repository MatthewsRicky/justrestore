export default function WorkshopCTA() {
  return (
    <section className="bg-maroon-deep text-ivory">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <p className="editorial-label text-safari-gold">Let's get creative</p>

          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Ready to create something beautiful?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-ivory/75 sm:text-base">
            Whether you're interested in a group workshop or a personalized
            masterclass, get in touch to find out more.
          </p>

          <a
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 border border-safari-gold px-7 py-4 text-sm font-medium text-safari-gold transition-colors hover:bg-safari-gold hover:text-maroon-deep"
          >
            Get in touch
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
