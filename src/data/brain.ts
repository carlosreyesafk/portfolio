// 🧠 EL CEREBRO — Todo el contenido del portafolio vive aquí.
// Actualiza este archivo y todo el sitio se actualiza solo.

export interface AIProject {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  demoUrl: string;
  repoUrl: string;
  emoji: string;
}

export interface Product {
  name: string;
  tagline: string;
  description: string;
  url: string;
  price?: string;
  emoji: string;
  badge?: string;
}

export interface GumroadProduct {
  name: string;
  price: string;
  url: string;
  tag: string;
}

export interface ClientConcept {
  business: string;
  type: string;
  industry: string;
  description: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface Tech {
  name: string;
  category: string;
}

// ─── HERO ──────────────────────────────────────────────
export const hero = {
  name: "Carlos Reyes",
  role: "Software Developer · AI Builder",
  tagline:
    "Construyo productos web con IA que salen a producción. Del prompt al deploy, sin excusas.",
  ctas: [
    { label: "Ver proyectos", href: "#proyectos-ia" },
    { label: "Contrátame", href: "#contacto" },
  ],
  stats: [
    { value: 25, suffix: "+", label: "Proyectos construidos" },
    { value: 12, suffix: "", label: "Tecnologías dominadas" },
    { value: 10, suffix: "", label: "Productos digitales" },
    { value: 13, suffix: "", label: "Conceptos para clientes" },
  ],
};

// ─── PROYECTOS IA (6) ──────────────────────────────────
// TODO: llenar cuando estén listos los 6 proyectos IA.
// Cada entrada: { name, tagline, description, stack, demoUrl, repoUrl, emoji }
export const aiProjects: AIProject[] = [
  // TODO: ai-landing-generator — describe tu negocio → landing page completa
  // TODO: smart-doc-chat — sube PDFs → chatea con tus documentos
  // TODO: voice-to-action — graba voz → transcripción + resumen + tareas
  // TODO: data-talk — sube un CSV → pregúntale en lenguaje natural
  // TODO: code-sensei — pega código → análisis de senior developer
  // TODO: site-auditor-ai — pega una URL → auditoría pro instantánea
];

// ─── PRODUCTOS ─────────────────────────────────────────
export const products: Product[] = [
  {
    name: "CobraYa",
    tagline: "SaaS de cobranza para pymes",
    description:
      "Dashboard de deudores, recordatorios por WhatsApp en 1 clic, historial de pagos. Tus clientes te deben → tú cobras sin perseguir a nadie.",
    url: "https://cobraya-xi.vercel.app",
    price: "RD$1,495/mes",
    emoji: "💰",
    badge: "En vivo",
  },
  {
    name: "Vigia Web",
    tagline: "Monitoreo uptime + SSL",
    description:
      "Vigila tus webs 24/7: caídas, certificados SSL por vencer, alertas. Con cobro en crypto (USDT).",
    url: "https://github.com/carlosreyesafk/vigia-web",
    emoji: "📡",
  },
  {
    name: "Bot Calificador",
    tagline: "Pay-per-lead para clínicas",
    description:
      "Bot que califica pacientes antes de agendar. Las clínicas pagan por lead calificado, no por clics.",
    url: "https://srv01-payperlead-chachi-8dka1hqgz-carlosreyesafks-projects.vercel.app",
    emoji: "🤖",
    badge: "Servicio",
  },
  {
    name: "Moderación Crypto",
    tagline: "Modera tu comunidad",
    description:
      "Servicio de moderación para comunidades crypto: anti-spam, reglas claras, ambiente sano.",
    url: "https://srv02-moderacion-chachi-atapdvw64-carlosreyesafks-projects.vercel.app",
    emoji: "🛡️",
    badge: "Servicio",
  },
  {
    name: "Transcripción IA",
    tagline: "Audio → texto perfecto",
    description:
      "Transcripción de audio y video con IA: rápida, precisa, con capítulos y formato listo para publicar.",
    url: "https://srv03-transcripcion-chachi-me4jr4woj-carlosreyesafks-projects.vercel.app",
    emoji: "🎙️",
    badge: "Servicio",
  },
  {
    name: "Email Copy",
    tagline: "Emails que venden",
    description:
      "Copywriting de emails con IA + revisión humana. Secuencias que abren, hacen clic y convierten.",
    url: "https://srv04-emailcopy-chachi-9arzghdjy-carlosreyesafks-projects.vercel.app",
    emoji: "✉️",
    badge: "Servicio",
  },
];

// ─── TIENDA DIGITAL (Gumroad) ──────────────────────────
const G = "https://chachiafk.gumroad.com";
export const gumroadProducts: GumroadProduct[] = [
  { name: "70 Prompts IA para Agentes Inmobiliarios", price: "US$19", url: `${G}/l/dxbma`, tag: "Prompts IA" },
  { name: "Calendario de Contenido 365", price: "US$19", url: `${G}/l/dvgsrh`, tag: "Marketing" },
  { name: "Subtítulos + Capítulos + SEO", price: "US$49", url: `${G}/l/subtitulos-capitulos-seo`, tag: "Video" },
  { name: "Pack 15 Emails para Clínicas Dentales", price: "US$39", url: `${G}/l/pack-emails-clinicas-dentales`, tag: "Copywriting" },
  { name: "Kit QuéHaySD", price: "US$29", url: `${G}/l/njugpk`, tag: "Negocios RD" },
  { name: "Secuencia de Lanzamiento para Infoproductores", price: "US$49", url: `${G}/l/secuencia-lanzamiento`, tag: "Copywriting" },
  { name: "80 Prompts IA para Contadores", price: "US$19", url: `${G}/l/prompts-contador-rd`, tag: "Prompts IA" },
  { name: "10 Lead Magnets listos para usar", price: "US$19", url: `${G}/l/fywdvi`, tag: "Marketing" },
  { name: "Facturación Electrónica DGII", price: "Gratis", url: `${G}/l/zpjmgv`, tag: "Negocios RD" },
  { name: "50 Prompts IA para Freelancers", price: "US$12", url: `${G}/l/kblfnd`, tag: "Prompts IA" },
];
export const gumroadStoreUrl = "https://chachiafk.gumroad.com";

// ─── CONCEPTOS PARA CLIENTES ───────────────────────────
export const clientConcepts: ClientConcept[] = [
  { business: "Restaurante El Conuco", type: "Restaurante", industry: "Gastronomía", description: "Concepto de rediseño web: menú digital, reservaciones y ambiente dominicano." },
  { business: "Guaro Pilates Studio", type: "Estudio de Pilates", industry: "Fitness", description: "Concepto de web: clases, horarios de Reformer y reserva en línea." },
  { business: "Sarah Restaurante", type: "Restaurante", industry: "Gastronomía", description: "Landing premium: propuesta gastronómica de alto nivel en Santo Domingo." },
  { business: "Bizcochos del Patio", type: "Repostería", industry: "Gastronomía", description: "Concepto de tienda: catálogo de bizcochos y pedidos para eventos." },
  { business: "Barbería Nader", type: "Barbería", industry: "Belleza", description: "Concepto de web: servicios, galería de cortes y booking." },
  { business: "Taller Erimaldi", type: "Mecánica y repuestos", industry: "Automotriz", description: "Concepto de web: servicios del taller y catálogo de repuestos." },
  { business: "The Power Box", type: "Gimnasio", industry: "Fitness", description: "Concepto de rediseño: planes, entrenadores y energía de alto voltaje." },
  { business: "Dra. María Nolasco", type: "Clínica dental", industry: "Salud", description: "Landing para clínica dental: servicios, confianza y citas en línea." },
  { business: "Clínica Sonrisas", type: "Clínica dental", industry: "Salud", description: "Concepto de web odontológica: tratamientos y captación de pacientes." },
  { business: "Manos Sanadoras Spa", type: "Spa", industry: "Bienestar", description: "Concepto de web: terapias, ambiente zen y reservas." },
  { business: "Yeneys Studio", type: "Estudio de belleza", industry: "Belleza", description: "Landing de estudio: portafolio de trabajos y citas." },
  { business: "D' Mirian Salón", type: "Salón de belleza", industry: "Belleza", description: "Concepto de web: servicios del salón y reserva de citas." },
  { business: "Tres Jollie Beauty Center", type: "Centro de belleza", industry: "Belleza", description: "Concepto premium: centro integral de belleza y estética." },
];

// ─── TIMELINE ──────────────────────────────────────────
export const timeline: TimelineEvent[] = [
  {
    date: "2024",
    title: "Dev real, clientes reales",
    description:
      "Años construyendo plataformas en producción: portales, sistemas con Docker, marketplaces. El código que nadie ve pero todo el mundo usa.",
  },
  {
    date: "Jul 2026",
    title: "Ingeniero en Sistemas 🎓",
    description:
      "Graduado en Ingeniería en Sistemas y Computación, Universidad Dominicana O&M. El título que respalda lo que ya sabía hacer.",
    highlight: true,
  },
  {
    date: "Oct 2026",
    title: "CobraYa MVP 🚀",
    description:
      "Lanzo mi primer SaaS: cobranza automatizada para pymes dominicanas. De idea a producción en días.",
    highlight: true,
  },
  {
    date: "Oct 2026",
    title: "Operación Sitios",
    description:
      "Outbound con demos personalizadas: webs concepto para negocios reales de Santo Domingo. Volumen, velocidad, iteración.",
  },
  {
    date: "Oct 2026",
    title: "Productos digitales",
    description:
      "10 productos en Gumroad: prompts IA, copywriting, marketing. Del conocimiento al ingreso.",
  },
  {
    date: "Oct 2026",
    title: "Proyectos IA 🤖",
    description:
      "6 aplicaciones con inteligencia artificial corriendo en el navegador. El siguiente nivel.",
    highlight: true,
  },
];

// ─── STACK ─────────────────────────────────────────────
export const stack: Tech[] = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Lenguaje" },
  { name: "Next.js", category: "Framework" },
  { name: "Supabase", category: "Backend" },
  { name: "PostgreSQL", category: "Base de datos" },
  { name: "Node.js", category: "Backend" },
  { name: "Tailwind CSS", category: "Estilos" },
  { name: "Vercel", category: "Deploy" },
  { name: "Docker", category: "Infraestructura" },
  { name: "Flutter", category: "Móvil" },
  { name: "Expo", category: "Móvil" },
  { name: "Python", category: "Lenguaje" },
];

// ─── CONTACTO ──────────────────────────────────────────
export const contact = {
  headline: "¿Construimos algo?",
  description:
    "Disponible para trabajo remoto part-time (~4h/día). Web apps, SaaS, integraciones IA, landing pages que convierten.",
  email: "carlosreyesafk@gmail.com",
  links: [
    { label: "Upwork", url: "https://www.upwork.com/freelancers/~015fcb17ba7d725843" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/carlosreyesafk" },
    { label: "GitHub", url: "https://github.com/carlosreyesafk" },
  ],
};

export const nav = [
  { label: "Proyectos IA", href: "#proyectos-ia" },
  { label: "Productos", href: "#productos" },
  { label: "Tienda", href: "#tienda" },
  { label: "Clientes", href: "#clientes" },
  { label: "Historia", href: "#historia" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contacto" },
];
