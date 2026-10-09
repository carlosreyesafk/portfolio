"use client";

import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import {
  hero,
  aiProjects,
  products,
  gumroadProducts,
  gumroadStoreUrl,
  clientConcepts,
  timeline,
  stack,
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
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
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
          <a href="#top" className="font-display font-bold text-lg">
            🧠 <span className="gradient-text">EL CEREBRO</span>
          </a>
          <div className="hidden md:flex gap-6 text-sm text-gray-400">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
          </div>
          <a href="#contacto" className="btn-primary !py-2 !px-4 text-sm">
            Contrátame
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-violet-600 -top-40 -left-40" />
        <div className="glow-orb w-[400px] h-[400px] bg-cyan-500 top-20 right-0" />
        <div className="max-w-6xl mx-auto relative">
          <Reveal>
            <span className="badge mb-6">● Disponible para proyectos</span>
            <h1 className="font-display font-bold text-6xl md:text-8xl leading-[1.05] mb-6">
              {hero.name.split(" ")[0]}{" "}
              <span className="gradient-text">{hero.name.split(" ")[1]}</span>
            </h1>
            <p className="font-display text-xl md:text-2xl text-cyan-300 mb-6">
              {hero.role}
            </p>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
              {hero.tagline}
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              {hero.ctas.map((c, i) => (
                <a key={c.href} href={c.href} className={i === 0 ? "btn-primary" : "btn-ghost"}>
                  {c.label} {i === 0 ? "→" : ""}
                </a>
              ))}
            </div>
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
      <section id="proyectos-ia" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="Inteligencia Artificial"
            title="Proyectos IA 🤖"
            sub="Aplicaciones con IA corriendo 100% en el navegador. Sin API keys, sin servidores, pura ingeniería."
          />
          {aiProjects.length === 0 ? (
            <Reveal>
              <div className="card p-12 text-center relative overflow-hidden">
                <div className="glow-orb w-72 h-72 bg-violet-600 top-0 left-1/3" />
                <div className="relative">
                  <div className="text-6xl mb-4">🔬</div>
                  <h3 className="font-display text-2xl font-bold mb-3">
                    Laboratorio en construcción
                  </h3>
                  <p className="text-gray-400 max-w-xl mx-auto">
                    6 aplicaciones IA están en el horno ahora mismo: generador de
                    landings, chat con documentos, voz a acción, análisis de datos,
                    revisor de código y auditor web. Vuelve pronto.
                  </p>
                </div>
              </div>
            </Reveal>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiProjects.map((p, i) => (
                <Reveal key={p.name} delay={i * 80}>
                  <div className="card p-6 h-full flex flex-col">
                    <div className="text-4xl mb-4">{p.emoji}</div>
                    <h3 className="font-display text-xl font-bold mb-2">{p.name}</h3>
                    <p className="text-cyan-300 text-sm mb-3">{p.tagline}</p>
                    <p className="text-gray-400 text-sm mb-4 flex-1">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.stack.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={p.demoUrl} target="_blank" rel="noopener" className="btn-primary !py-2 !px-4 text-sm">
                        Demo →
                      </a>
                      <a href={p.repoUrl} target="_blank" rel="noopener" className="btn-ghost !py-2 !px-4 text-sm">
                        Código
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="py-24 px-6 bg-[#0a0a12]/50">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="Lo que vendo"
            title="Productos & Servicios"
            sub="Software real, en producción, generando valor. No demos de juguete."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80}>
                <a href={p.url} target="_blank" rel="noopener" className="card p-6 h-full flex flex-col block">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{p.emoji}</div>
                    {p.badge && <span className="badge">{p.badge}</span>}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-1">{p.name}</h3>
                  <p className="text-violet-300 text-sm mb-3">{p.tagline}</p>
                  <p className="text-gray-400 text-sm mb-4 flex-1">{p.description}</p>
                  <div className="flex items-center justify-between">
                    {p.price && (
                      <span className="font-display font-bold text-cyan-300">{p.price}</span>
                    )}
                    <span className="text-sm text-gray-500">Ver →</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIENDA */}
      <section id="tienda" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="Productos digitales"
            title="La Tienda 🛒"
            sub="Conocimiento empaquetado: prompts IA, copywriting, marketing. Descarga inmediata en Gumroad."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {gumroadProducts.map((p, i) => (
              <Reveal key={p.url} delay={(i % 3) * 60}>
                <a href={p.url} target="_blank" rel="noopener" className="card p-5 flex items-center justify-between gap-4">
                  <div>
                    <span className="badge mb-2">{p.tag}</span>
                    <h3 className="font-display font-bold">{p.name}</h3>
                  </div>
                  <span className="font-display font-bold text-lg gradient-text whitespace-nowrap">
                    {p.price}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center">
            <a href={gumroadStoreUrl} target="_blank" rel="noopener" className="btn-primary">
              Ver tienda completa →
            </a>
          </Reveal>
        </div>
      </section>

      {/* CLIENTES */}
      <section id="clientes" className="py-24 px-6 bg-[#0a0a12]/50">
        <div className="max-w-6xl mx-auto">
          <SectionHead
            kicker="Portafolio comercial"
            title="Conceptos para clientes 💼"
            sub="Demos web personalizadas para negocios reales de Santo Domingo. Cada una es una pieza de diseño lista para despegar."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientConcepts.map((c, i) => (
              <Reveal key={c.business} delay={(i % 3) * 60}>
                <div className="card p-6">
                  <span className="badge mb-3">{c.industry}</span>
                  <h3 className="font-display text-lg font-bold mb-1">{c.business}</h3>
                  <p className="text-cyan-300 text-sm mb-3">{c.type}</p>
                  <p className="text-gray-400 text-sm">{c.description}</p>
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
            kicker="El journey"
            title="Mi historia 📖"
            sub="De escribir código en las sombras a construir en público."
          />
          <div className="relative">
            <div className="timeline-line" />
            {timeline.map((t) => (
              <Reveal key={t.title} className="relative mb-8 pl-14 md:pl-0">
                <div className="md:grid md:grid-cols-2 md:gap-16">
                  <div className="md:col-start-1 md:text-right">
                    <div className={`card p-6 inline-block text-left w-full ${t.highlight ? "!border-violet-500/50" : ""}`}>
                      <span className="font-display font-bold text-sm gradient-text">{t.date}</span>
                      <h3 className="font-display text-xl font-bold mt-1 mb-2">{t.title}</h3>
                      <p className="text-gray-400 text-sm">{t.description}</p>
                    </div>
                  </div>
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
            title="Stack tecnológico ⚙️"
            sub="Las herramientas con las que construyo. Sin humo, solo lo que domino."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {stack.map((t, i) => (
              <Reveal key={t.name} delay={(i % 4) * 60}>
                <div className="card p-5 text-center">
                  <div className="font-display font-bold text-lg mb-1">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.category}</div>
                </div>
              </Reveal>
            ))}
          </div>
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
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              {contact.headline}
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              {contact.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {contact.links.map((l) => (
                <a key={l.label} href={l.url} target="_blank" rel="noopener" className="btn-ghost">
                  {l.label} →
                </a>
              ))}
            </div>
            <a href={`mailto:${contact.email}`} className="font-display text-lg gradient-text font-semibold">
              {contact.email}
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span className="font-display">🧠 EL CEREBRO — Carlos Reyes</span>
          <span>Del prompt al deploy. © 2026</span>
        </div>
      </footer>
    </main>
  );
}
