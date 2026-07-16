import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p
      ? `${p.title} — Case Study`
      : "Case Study";
    const description = p?.summary ?? "Project case study.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(p ? [{ property: "og:image", content: p.cover }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="display text-4xl mb-6">Project not found</h1>
        <Link to="/" className="nav-link text-foreground hover:text-primary">
          ← Back to portfolio
        </Link>
      </div>
    </main>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const currentIdx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIdx + 1) % projects.length];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl tracking-tight">
            Engineer<span className="text-primary">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" hash="work" className="nav-link">Work</Link>
            <Link to="/" hash="about" className="nav-link">About</Link>
            <Link to="/" hash="contact" className="nav-link">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Link to="/" hash="work" className="nav-link inline-flex items-center gap-2 mb-12">
            <span aria-hidden>←</span> All Work
          </Link>
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-9">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs text-primary">{project.index}</span>
                <span className="hairline w-16" />
                <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
              </div>
              <h1 className="display text-5xl sm:text-6xl md:text-7xl mb-6 rise-in">
                {project.title}
                <span className="text-primary">.</span>
              </h1>
              {project.subtitle && (
                <p className="text-xl md:text-2xl text-muted-foreground font-serif italic max-w-3xl">
                  {project.subtitle}
                </p>
              )}
            </div>
            <div className="md:col-span-3 space-y-4">
              <MetaRow label="Role" value={project.role} />
              {project.client && <MetaRow label="Client" value={project.client} />}
              <MetaRow label="Year" value={project.year} />
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="relative py-12 md:py-16 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="relative overflow-hidden rounded-sm border border-border">
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      {project.problem && (
        <section className="relative py-24 md:py-32 border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <SectionBlock label="Problem" title="The brief.">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                {project.problem}
              </p>
            </SectionBlock>
          </div>
        </section>
      )}


      {/* Approach */}
      {project.approach.length > 0 && (
        <section className="relative py-24 md:py-32 border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <SectionBlock label="Approach" title="What I did.">
              <ol className="space-y-6">
                {project.approach.map((step, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-6 md:gap-8 items-start">
                    <span className="font-mono text-xs text-primary mt-1.5 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-foreground/90 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </SectionBlock>
          </div>
        </section>
      )}

      {/* Sections (interleaved subheadings + inline images) */}
      {project.sections && project.sections.length > 0 && (
        <section className="relative py-24 md:py-32 border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <SectionBlock label={project.approachHeading ?? "Approach"} title="What I did.">
              <div className="space-y-16">
                {project.sections.map((s, i) => (
                  <div key={i} className="space-y-6">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-primary tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="display text-2xl md:text-3xl">
                        {s.heading}
                        <span className="text-primary">.</span>
                      </h3>
                    </div>
                    <div className="space-y-5 pl-0 md:pl-10">
                      {s.body.map((p, j) => (
                        <p key={j} className="text-foreground/90 leading-relaxed">
                          {p}
                        </p>
                      ))}
                      {s.image && (
                        <figure className="pt-4">
                          <div className="relative overflow-hidden rounded-sm border border-border">
                            <img
                              src={s.image.src}
                              alt={s.image.caption ?? s.heading}
                              loading="lazy"
                              className="w-full h-auto object-cover"
                            />
                          </div>
                          {s.image.caption && (
                            <figcaption className="mt-3 font-mono text-xs text-muted-foreground tracking-wide">
                              {s.image.caption}
                            </figcaption>
                          )}
                        </figure>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </SectionBlock>
          </div>
        </section>
      )}


      {/* Specs */}
      {project.specs.length > 0 && (
        <section className="relative py-24 md:py-32 border-b border-border bg-card/40">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <SectionBlock label="Key Specs" title="The numbers.">
              <ul className="divide-y divide-border border-y border-border">
                {project.specs.map((s) => (
                  <li
                    key={s.label}
                    className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 py-5"
                  >
                    <span className="eyebrow md:col-span-1">{s.label}</span>
                    <span className="md:col-span-2 text-foreground/90">{s.value}</span>
                  </li>
                ))}
              </ul>
            </SectionBlock>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="relative py-24 md:py-32 border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <SectionBlock label="Gallery" title="In detail.">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {project.gallery.map((item, i) => (
                  <figure key={i} className="space-y-3">
                    <div className="relative overflow-hidden rounded-sm border border-border">
                      <img
                        src={item.src}
                        alt={item.caption}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <figcaption className="font-mono text-xs text-muted-foreground tracking-wide">
                      {String(i + 1).padStart(2, "0")} — {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </SectionBlock>
          </div>
        </section>
      )}

      {/* Video */}
      {project.video && (
        <section className="relative py-24 md:py-32 border-b border-border bg-card/40">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <SectionBlock label="Assembly" title="Full build in motion.">
              <div className="relative aspect-video overflow-hidden rounded-sm border border-border bg-black">
                <iframe
                  src={project.video.embedUrl}
                  title={project.video.caption}
                  allow="autoplay; fullscreen"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <p className="mt-4 font-mono text-xs text-muted-foreground tracking-wide">
                {project.video.caption}
              </p>
            </SectionBlock>
          </div>
        </section>
      )}

      {/* Status */}
      {project.status && (
        <section className="relative py-24 md:py-32 border-b border-border bg-card/40">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <SectionBlock label="Status" title="Where it stands.">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                {project.status}
              </p>
            </SectionBlock>
          </div>
        </section>
      )}

      {/* Outcome */}
      {project.outcome.length > 0 && (
        <section className="relative py-24 md:py-32 border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <SectionBlock label="Outcome" title="Result.">
              <ul className="space-y-5">
                {project.outcome.map((o, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-5 items-start">
                    <span className="text-primary mt-2.5 leading-none" aria-hidden>
                      ●
                    </span>
                    <p className="text-lg text-foreground/90 leading-relaxed">{o}</p>
                  </li>
                ))}
              </ul>
            </SectionBlock>
          </div>
        </section>
      )}

      {/* Skills Demonstrated */}
      {project.skills && project.skills.length > 0 && (
        <section className="relative py-24 md:py-32 border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <SectionBlock label="Skills Demonstrated" title="What it took.">
              <ul className="divide-y divide-border border-y border-border">
                {project.skills.map((s, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-6 py-5 items-baseline">
                    <span className="font-mono text-xs text-primary tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground/90">{s}</span>
                  </li>
                ))}
              </ul>
            </SectionBlock>
          </div>
        </section>
      )}


      {/* Next project */}
      <section className="relative py-24 md:py-32 border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow mb-6">Next Project</p>
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group grid md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-7 relative overflow-hidden rounded-sm border border-border">
              <img
                src={next.cover}
                alt={next.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
              />
            </div>
            <div className="md:col-span-5">
              <p className="font-mono text-xs text-primary mb-3">{next.index}</p>
              <h3 className="display text-3xl md:text-5xl mb-4 transition-colors group-hover:text-primary">
                {next.title}
              </h3>
              <span className="nav-link text-foreground group-hover:text-primary inline-flex items-center gap-3">
                Read Case Study <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-10 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <p className="font-mono text-xs text-muted-foreground tracking-[0.18em] uppercase">
            © {new Date().getFullYear()} — Engineer
          </p>
          <Link to="/" hash="contact" className="nav-link">
            Get in touch
          </Link>
        </div>
      </footer>
    </main>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="eyebrow mb-1">{label}</p>
      <p className="text-sm text-foreground/90">{value}</p>
    </div>
  );
}

function SectionBlock({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-12 gap-8 md:gap-12">
      <div className="md:col-span-3">
        <p className="eyebrow mb-2">{label}</p>
        <h2 className="display text-3xl md:text-4xl">
          {title.replace(/\.$/, "")}
          <span className="text-primary">.</span>
        </h2>
      </div>
      <div className="md:col-span-8 md:col-start-5">{children}</div>
    </div>
  );
}
