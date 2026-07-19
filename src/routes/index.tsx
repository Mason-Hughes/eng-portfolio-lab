/* =========================================================================
 * HOMEPAGE — this is the DEFAULT / MAIN PAGE of the site.
 *
 * URL:   "/"  (e.g. https://yourdomain.com/  →  renders this file)
 * File:  src/routes/index.tsx
 *
 * TanStack Router uses file-based routing:
 *   - src/routes/index.tsx        →  "/"          (this file, the landing page)
 *   - src/routes/work.$slug.tsx   →  "/work/:slug" (individual project pages)
 *
 * If your custom domain shows "no main page", the fix is almost always
 * DNS / publishing (not code): make sure the domain's A record points to
 * Lovable (185.158.133.1) and that you clicked "Update" in the Publish
 * dialog after connecting the domain.
 * ========================================================================= */
import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpg";
import { projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/")({

  head: () => ({
    meta: [
      { title: "Mechanical Design Engineer — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of a mechanical design engineer specializing in robotics and industrial systems. Selected projects, capabilities, and contact.",
      },
      { property: "og:title", content: "Mechanical Design Engineer — Portfolio" },
      {
        property: "og:description",
        content:
          "Selected work in robotics and industrial mechanical systems — concept, design, fabrication.",
      },
    ],
  }),
  component: Portfolio,
});

const NAME = "T. Mason Hughes";
const TAGLINE = "Mechanical Design Engineer";


const capabilities = [
  { label: "PROGRAMS", value: "SolidWorks · Onshape" },
  { label: "PROGRAMS", value: "ANSYS (FEA & CFD) · MasterCAM ·\u00a0MATLAB ·\u00a0C++ ·\u00a0Arduino" },
  { label: "MACHINERY", value: "CNC (5 axis & 3 axis)\u00a0·\u00a0Lathe ·\u00a0Thermoformer · 3D Printer" },
  { label: "MACHINERY", value: "DFM · DFA · Parametric design · GD&T · Tolerance stack-up analysis" },
];

function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Mission />
      <Projects />
      <Capabilities />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl tracking-tight">
          {NAME}
          <span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          <a href="#work" className="nav-link">Work</a>
          <a href="#capabilities" className="nav-link">Capabilities</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, transparent, oklch(0.13 0.005 60) 75%), linear-gradient(180deg, oklch(0.13 0.005 60 / 0.6), oklch(0.13 0.005 60 / 0.95))",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 w-full pt-32 pb-24">
        <div className="max-w-3xl">
          <p className="eyebrow fade-in">Portfolio — 2026</p>
          <h1 className="display text-5xl sm:text-7xl md:text-8xl mt-6 rise-in">
            T. Mason Hughes
            <br />
            <em className="italic text-primary/90 text-4xl sm:text-6xl md:text-7xl">Mechanical Design Engineer</em>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed fade-in-slow">
            Mechanical Design Engineer&nbsp;developing novel hardware at the intersection of robotics and additive manufacturing, from first concept sketches to production-ready hardware.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-in-slow">
        <span className="w-px h-10 bg-border" />
      </div>

    </section>
  );
}

function SectionHeading({ label, title }: { label?: string; title: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
      {label ? (
        <div className="md:col-span-3">
          <p className="eyebrow">{label}</p>
        </div>
      ) : null}
      <div className={label ? "md:col-span-9" : "md:col-span-12"}>
        {title ? (
          <h2 className="display text-4xl sm:text-5xl md:text-6xl max-w-3xl">
            {title}
          </h2>
        ) : null}
      </div>
    </div>
  );
}


function Mission() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading
          title={
            <>
              Projects,
              <br />
              <em className="italic text-muted-foreground">from 0 to 1</em>
            </>
          }
        />
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-6 md:col-start-4">
            <p className="text-muted-foreground leading-relaxed mb-6">
              While starting out in electric vehicles and robotics, I honed my skills developing a novel metal 3D printing process to build rocket engines and satellite cooling components. The technology leverages rapid (20kg/h), high-precision (&lt;1mm), solid-state bonding of dissimilar metals to create complex geometries. The printing process is enabled by high performance subsystems, which under a constrained budget, had to be designed and manufactured in house.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The projects showcased below are examples of subsystems built to support the printing process, as well as projects from earlier work in the area of electric vehicle and robotics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="relative py-20 md:py-24 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="space-y-32 md:space-y-48">
          {projects.map((p, i) => (
            <ProjectRow key={p.index} project={p} flipped={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}


function ProjectRow({ project, flipped }: { project: Project; flipped: boolean }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="block group"
    >
      <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div
          className={`md:col-span-7 ${flipped ? "md:order-2" : ""} relative overflow-hidden rounded-sm border border-border`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
          <img
            src={project.cover}
            alt={project.title}
            width={1400}
            height={1050}
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          />
        </div>
        <div className={`md:col-span-5 ${flipped ? "md:order-1 md:pr-8" : "md:pl-4"}`}>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-xs text-primary">{project.index}</span>
            <span className="hairline flex-1" />
            <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
          </div>
          <h3 className="display text-3xl md:text-4xl mb-4 transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="eyebrow mb-6">{project.role}</p>
          <p className="text-muted-foreground leading-relaxed mb-8">{project.summary}</p>
          <ul className="flex flex-wrap gap-x-3 gap-y-2 mb-8">
            {project.tags.map((t) => (
              <li
                key={t}
                className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground border border-border px-3 py-1.5"
              >
                {t}
              </li>
            ))}
          </ul>
          <span className="inline-flex items-center gap-3 nav-link text-foreground group-hover:text-primary">
            View Case Study <span aria-hidden>→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading title={<>The toolbox</>} />
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-9 md:col-start-2">
            <ul className="divide-y divide-border border-y border-border">
              {capabilities.map((c) => (
                <li key={c.label} className="grid grid-cols-3 gap-6 py-6">
                  <span className="eyebrow col-span-1">{c.label}</span>
                  <span className="col-span-2 text-foreground/90">{c.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading title={<>This is me :)</>} />

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-sm border border-border">
              <img
                src={portrait}
                alt="Portrait"
                width={900}
                height={1100}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6">
            <p className="text-lg leading-relaxed whitespace-pre-line">
              I like building things that don't exist yet. Right now I'm the founding mechanical design engineer at DISC Alloys, a pre-seed startup building a novel metal 3D printing process. Before that, I built a 9-DOF robot at UBC that won the department's Excellence in Design award and optimized the cooling system for UBC's Formula Electric race car.
              {"\n"}I'm looking for my next role, doing hands-on engineering on cutting edge technology, in service of a mission I truly believe in!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <h2 className="display text-5xl sm:text-7xl md:text-8xl max-w-4xl">
          Contacts
        </h2>

        <div className="mt-16 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <p className="eyebrow mb-3">Email</p>
            <a
              href="mailto:mason@hughes.ca"
              className="text-2xl md:text-3xl font-serif hover:text-primary transition-colors"
            >
              mason@hughes.ca
            </a>
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow mb-3">LinkedIn</p>
            <a href="https://www.linkedin.com/in/mason-hughes-5795731b6" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">
              www.linkedin.com/in/mason-hughes-5795731b6
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-10 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <p className="font-mono text-xs text-muted-foreground tracking-[0.18em] uppercase">
          © {new Date().getFullYear()} — {NAME}
        </p>
        <p className="font-mono text-xs text-muted-foreground tracking-[0.18em] uppercase">
          Designed &amp; built by hand
        </p>
      </div>
    </footer>
  );
}
