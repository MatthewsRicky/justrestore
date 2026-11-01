import HomeHero from "@/components/home/HomeHero";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <SectionHeading
              eyebrow="The art of transformation"
              title="Not just furniture. A canvas for creativity."
            />

            <div className="max-w-lg lg:ml-auto">
              <p className="text-sm leading-8 text-muted sm:text-base">
                Every piece has potential. Through colour, imagination and
                artistic expression, furniture can become something entirely
                unexpected.
              </p>

              <p className="mt-5 text-sm leading-8 text-muted sm:text-base">
                At JustRestore, the aim is to create pieces that are as
                individual as the people who live with them.
              </p>

              <Button href="/about-me" variant="secondary" className="mt-7">
                Discover the artist
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-paper">
        <Container>
          <SectionHeading
            eyebrow="Explore JustRestore"
            title="A world of colour, character and creativity."
            description="Discover the transformations, creative experiences and bespoke possibilities behind JustRestore."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "The Gallery",
                description:
                  "Explore an evolving collection of furniture transformations.",
                href: "/gallery",
              },
              {
                number: "02",
                title: "Commissions",
                description:
                  "Give an existing piece a completely new identity.",
                href: "/commission",
              },
              {
                number: "03",
                title: "Workshops",
                description:
                  "Discover creative opportunities to learn and experiment.",
                href: "/workshops",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group flex min-h-[270px] flex-col justify-between border border-ink/15 p-7 transition-colors duration-300 hover:border-terracotta hover:bg-ivory sm:p-9"
              >
                <span className="editorial-label text-terracotta">
                  {item.number}
                </span>

                <div>
                  <h3 className="font-display text-4xl">{item.title}</h3>

                  <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
                    {item.description}
                  </p>

                  <Button href={item.href} variant="secondary" className="mt-7">
                    Explore
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
