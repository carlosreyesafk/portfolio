"use client";

import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import ProjectShot from "@/components/ProjectShot";
import {
  hero,
  aiProjects,
  caseStudy,
  products,
  concepts,
  timeline,
  stack,
  store,
  contact,
  nav,
} from "@/data/brain";

function SectionHead({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="mb-12">
      <p className="text-sm font-semibold tracking-[0.25em] uppercase text-violet-400 mb-3">
        {kicker}
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">
        {title}
      </h2>
      {sub && <p className="text-gray-400 max-w-2xl text-lg">{sub}</p>}
    </Reveal>
  );
}

export default function Home() {
  return (
    <main className="relative">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#050508]/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center font-display font-bold text-sm text-white">
              CR
            </span>
            <span className="font-display font-bold tracking-wide">
              CARLOS REYES
            </span>
          </a>
          <div className="hidden lg:flex gap-6 text-sm text-gray-400">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="hover:text-white transition-colors"
              >
                {n.label}
              </a>
            ))}
          </div>
          <a href="#contacto" className="btn-primary !py-2 !px-4 text-sm">
            Contacto
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-violet-600 -top-40 -left-40" />
        <div className="glow-orb w-[400px] h-[400px] bg-cyan-500 top-20 right-0" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-center mb-16">
            <Reveal>
              <span className="badge mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                {hero.badge}
              </span>
              <h1 className="font-display font-bold text-6xl md:text-7xl leading-[1.05] mb-6 tracking-tight">
                {hero.name.split(" ")[0]}{" "}
                <span className="gradient-text">{hero.name.split(" ")[1]}</span>
              </h1>
              <p className="font-display text-xl md:text-2xl text-cyan-300 mb-6">
                {hero.role}
              </p>
              <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10">
                {hero.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                {hero.ctas.map((c, i) => (
                  <a
                    key={c.href}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener" : undefined}
                    className={i === 0 ? "btn-primary" : "btn-ghost"}
                  >
                    {c.label} {i === 0 ? "→" : ""}
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150} className="hidden lg:block">
              <div className="photo-frame">
                <div className="photo-inner">
                  <span className="font-display font-bold text-7xl gradient-text">
                    CR
                  </span>
                  <span className="text-xs text-gray-500 mt-4 tracking-[0.2em] uppercase">
                    Foto próximamente
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {hero.stats.map((s) => (
                <div key={s.label} className="card p-6">
                  <div className="font-display text-4xl font-bold gradient-text mb-1">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-sm text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROYECTOS IA */}
      <section id="proyectos" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="Portafolio"
            title="Proyectos de IA"
            sub="Seis aplicaciones diseñadas, construidas y desplegadas. Todas corren en el navegador — sin API keys, sin servidores."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {aiProjects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 100}>
                <article className="card overflow-hidden h-full flex flex-col">
                  <ProjectShot slug={p.slug} name={p.name} />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-2xl font-bold mb-2 tracking-tight">
                      {p.name}
                    </h3>
                    <p className="text-cyan-300 text-sm mb-3 font-medium">
                      {p.tagline}
                    </p>
                    <p className="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">
                      {p.description}
                    </p>
                    <p className="text-xs text-violet-300/90 mb-4 font-mono">
                      ▸ {p.highlight}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noopener"
                        className="btn-primary !py-2.5 !px-5 text-sm"
                      >
                        Demo en vivo →
                      </a>
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noopener"
                        className="btn-ghost !py-2.5 !px-5 text-sm"
                      >
                        Código
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASO DE ESTUDIO */}
      <section id="caso" className="py-24 px-6 bg-[#0a0a12]/50">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="Producto real"
            title="Caso de estudio"
            sub="Un producto completo: del problema al pricing real."
          />
          <Reveal>
            <div className="case-panel">
              <div className="grid lg:grid-cols-[1fr_320px] gap-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="font-display text-3xl font-bold tracking-tight">
                      {caseStudy.product}
                    </h3>
                    <span className="badge">{caseStudy.status}</span>
                  </div>
                  <p className="text-cyan-300 font-medium mb-8">
                    {caseStudy.tagline}
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-violet-400 mb-2">
                        El problema
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {caseStudy.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-violet-400 mb-2">
                        La construcción
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {caseStudy.build}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm tracking-[0.2em] uppercase text-violet-400 mb-2">
                        Validación
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {caseStudy.validation}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="case-facts">
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-2">
                      Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.stack.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-2">
                      Pricing real
                    </p>
                    <p className="font-display font-bold text-lg text-cyan-300">
                      {caseStudy.pricing}
                    </p>
                  </div>
                  <a
                    href={caseStudy.url}
                    target="_blank"
                    rel="noopener"
                    className="btn-primary w-full justify-center !py-3 text-sm"
                  >
                    Ver producto en vivo →
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="En producción"
            title="Productos"
            sub="Software corriendo hoy, no slides."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener"
                  className="card p-8 h-full flex flex-col block"
                >
                  <h3 className="font-display text-2xl font-bold mb-2 tracking-tight">
                    {p.name}
                  </h3>
                  <p className="text-violet-300 text-sm mb-3 font-medium">
                    {p.tagline}
                  </p>
                  <p className="text-gray-400 text-sm mb-5 flex-1 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">Ver →</span>
                  </div>
                </a>
              </Reveal>
            ))}
            <Reveal delay={100}>
              <a href="#caso" className="card p-8 h-full flex flex-col justify-center block">
                <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-3">
                  También
                </p>
                <h3 className="font-display text-2xl font-bold mb-2 tracking-tight">
                  {caseStudy.product}
                </h3>
                <p className="text-gray-400 text-sm mb-5">
                  {caseStudy.tagline} — ver caso de estudio completo.
                </p>
                <span className="text-sm text-cyan-300 font-medium">
                  Leer caso de estudio →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONCEPTOS */}
      <section id="conceptos" className="py-24 px-6 bg-[#0a0a12]/50">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="Exploración"
            title="Conceptos"
            sub="Exploraciones de diseño no solicitadas para negocios locales. Ejercicio de velocidad y criterio — no trabajo contratado."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {concepts.map((c, i) => (
              <Reveal key={c.business} delay={(i % 3) * 60}>
                <div className="card p-5">
                  <span className="badge mb-3">{c.industry}</span>
                  <h3 className="font-display text-base font-bold mb-1">
                    {c.business}
                  </h3>
                  <p className="text-cyan-300/80 text-xs mb-2">{c.type}</p>
                  <p className="text-gray-500 text-sm">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section id="historia" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHead
            kicker="Trayectoria"
            title="Historia"
            sub="Hechos, no narrativa."
          />
          <div className="relative">
            <div className="timeline-line" />
            {timeline.map((t) => (
              <Reveal key={t.title} className="relative mb-8 pl-14">
                <div
                  className={`card p-6 ${
                    t.highlight ? "!border-violet-500/50" : ""
                  }`}
                >
                  <span className="font-display font-bold text-sm gradient-text">
                    {t.date}
                  </span>
                  <h3 className="font-display text-xl font-bold mt-1 mb-2">
                    {t.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t.description}
                  </p>
                </div>
                <div
                  className="absolute top-7 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400"
                  style={{ left: "1.25rem", transform: "translateX(-50%)" }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="py-24 px-6 bg-[#0a0a12]/50">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="Arsenal"
            title="Stack tecnológico"
            sub="Sin humo, solo lo que domino."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {stack.map((t, i) => (
              <Reveal key={t.name} delay={(i % 4) * 60}>
                <div className="card p-5 text-center">
                  <div className="font-display font-bold text-lg mb-1">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500">{t.category}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIENDA — mención mínima */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="store-strip">
              <p className="text-gray-400 text-sm">{store.note}</p>
              <a
                href={store.url}
                target="_blank"
                rel="noopener"
                className="text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors whitespace-nowrap"
              >
                {store.label} →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 px-6 relative overflow-hidden">
        <div className="glow-orb w-[600px] h-[400px] bg-violet-600 bottom-0 left-1/4" />
        <div className="max-w-3xl mx-auto text-center relative">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-violet-400 mb-3">
              Contacto
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              {contact.headline}
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              {contact.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {contact.links.map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noopener"
                  className="btn-ghost"
                >
                  {l.label} →
                </a>
              ))}
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="font-display text-lg gradient-text font-semibold"
            >
              {contact.email}
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span className="font-display font-bold tracking-wide">
            CARLOS REYES
          </span>
          <span>Del prompt al deploy. © 2026</span>
        </div>
      </footer>
    </main>
  );
}
