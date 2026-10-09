// EL CEREBRO — Portafolio de Carlos Reyes, Software Developer.
// Todo el contenido vive aquí. Sin emojis en títulos, sin humo, solo hechos.

export interface AIProject {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  highlight: string;
  stack: string[];
  demoUrl: string;
  repoUrl: string;
}

export interface Concept {
  business: string;
  industry: string;
  type: string;
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
  role: "Software Developer",
  tagline:
    "Construyo y despliego software que funciona. Del prompt al deploy, sin excusas.",
  badge: "Disponible para trabajo remoto",
  ctas: [
    { label: "Ver proyectos", href: "#proyectos" },
    { label: "GitHub", href: "https://github.com/carlosreyesafk" },
  ],
  stats: [
    { value: 6, suffix: "", label: "Apps IA en producción" },
    { value: 2, suffix: "", label: "Productos en vivo" },
    { value: 12, suffix: "", label: "Tecnologías dominadas" },
    { value: 100, suffix: "%", label: "Client-side, cero servidores" },
  ],
};

// ─── PROYECTOS IA (6) ──────────────────────────────────
export const aiProjects: AIProject[] = [
  {
    name: "AI Landing Generator",
    slug: "ai-landing-generator",
    tagline: "Describe tu negocio, recibe una landing completa en segundos",
    description:
      "Generador de landing pages con motor de plantillas por industria y tono. Hero, features, testimonios, pricing y CTA coherentes con el negocio. Exporta HTML listo para publicar.",
    highlight: "10 industrias × 3 tonos · HTML exportable · sin IA en runtime",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    demoUrl:
      "https://ai-landing-generator-qnl2djir0-carlosreyesafks-projects.vercel.app",
    repoUrl: "https://github.com/carlosreyesafk/ai-landing-generator",
  },
  {
    name: "Smart Doc Chat",
    slug: "smart-doc-chat",
    tagline: "Sube PDFs y conversa con tus documentos",
    description:
      "Chat con documentos usando PDF.js, chunking y búsqueda semántica TF-IDF. Respuestas extractivas con citas de página. Todo procesado en tu navegador.",
    highlight: "RAG 100% local · citas por página · privacidad total",
    stack: ["Next.js", "TypeScript", "PDF.js"],
    demoUrl:
      "https://smart-doc-chat-6uxe4ybq0-carlosreyesafks-projects.vercel.app",
    repoUrl: "https://github.com/carlosreyesafk/smart-doc-chat",
  },
  {
    name: "Voice to Action",
    slug: "voice-to-action",
    tagline: "Graba tu voz, recibe resumen y tareas accionables",
    description:
      "Grabación con visualizador en tiempo real, transcripción con Whisper corriendo localmente y extracción automática de resumen, tareas y puntos clave.",
    highlight: "Whisper vía Transformers.js · sin API keys · sin cuentas",
    stack: ["Next.js", "TypeScript", "Transformers.js"],
    demoUrl: "https://voice-to-action-chachi.vercel.app",
    repoUrl: "https://github.com/carlosreyesafk/voice-to-action",
  },
  {
    name: "Data Talk",
    slug: "data-talk",
    tagline: "Sube un CSV y pregúntale en lenguaje natural",
    description:
      "Analiza datos tabulares con preguntas en español o inglés. Detección automática de tipos de columna, agregaciones y gráficos generados al vuelo.",
    highlight: "NLU por patrones ES/EN · gráficos automáticos",
    stack: ["Next.js", "TypeScript", "Recharts"],
    demoUrl: "https://data-talk-chachi.vercel.app",
    repoUrl: "https://github.com/carlosreyesafk/data-talk",
  },
  {
    name: "Code Sensei",
    slug: "code-sensei",
    tagline: "Pega código y recibe análisis de nivel senior",
    description:
      "Motor de análisis estático construido desde cero. Detecta bugs comunes, calcula complejidad ciclomática por función y entrega score 0–100 con desglose.",
    highlight: "15+ patrones de bugs · JS, TS y Python · análisis propio",
    stack: ["Next.js", "TypeScript", "Prism"],
    demoUrl:
      "https://code-sensei-rlkhu3q52-carlosreyesafks-projects.vercel.app",
    repoUrl: "https://github.com/carlosreyesafk/code-sensei",
  },
  {
    name: "Site Auditor AI",
    slug: "site-auditor-ai",
    tagline: "Pega una URL y recibe una auditoría profesional",
    description:
      "18 verificaciones reales en 4 categorías: SEO, accesibilidad, performance y buenas prácticas. Scores por categoría y recomendaciones priorizadas.",
    highlight: "18 checks reales · sin backend · resultados en segundos",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    demoUrl:
      "https://site-auditor-7r3a4uln6-carlosreyesafks-projects.vercel.app",
    repoUrl: "https://github.com/carlosreyesafk/site-auditor-ai",
  },
];

// ─── CASO DE ESTUDIO: COBRAYA ──────────────────────────
export const caseStudy = {
  product: "CobraYa",
  tagline: "SaaS de cobranza para pymes dominicanas",
  url: "https://cobraya-xi.vercel.app",
  status: "MVP v0.1.0 en vivo",
  problem:
    "Las pymes dominicanas pierden miles cada mes en facturas sin cobrar. Perseguir deudores por WhatsApp, a mano, no escala — y contratar un cobrador sale más caro que la deuda.",
  build:
    "Dashboard de deudores con antigüedad de saldos, CRUD completo de deudas, historial de pagos y recordatorio en 1 clic vía wa.me. Backend en Supabase con Row Level Security. Desplegado en Vercel.",
  validation:
    "Estrategia de validación: 5 pilotos gratis de 30 días con negocios reales. Meta: 2 convertidos a pago.",
  stack: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
  pricing: "RD$1,495/mes · Pro RD$2,495/mes",
};

// ─── PRODUCTOS ─────────────────────────────────────────
export const products = [
  {
    name: "Vigía Web",
    tagline: "Monitoreo de uptime y certificados SSL",
    description:
      "Vigila sitios 24/7: detecta caídas, anticipa vencimientos de SSL y envía alertas. Infraestructura propia corriendo en serverless.",
    url: "https://github.com/carlosreyesafk/vigia-web",
    stack: ["Next.js", "TypeScript", "Vercel Cron"],
  },
];

// ─── CONCEPTOS ─────────────────────────────────────────
// Exploraciones de diseño no solicitadas. Ejercicio de velocidad y criterio,
// no trabajo contratado.
export const concepts: Concept[] = [
  { business: "Restaurante El Conuco", industry: "Gastronomía", type: "Restaurante", description: "Menú digital, reservaciones y ambiente dominicano." },
  { business: "Guaro Pilates Studio", industry: "Fitness", type: "Estudio de Pilates", description: "Clases, horarios de Reformer y reserva en línea." },
  { business: "Sarah Restaurante", industry: "Gastronomía", type: "Restaurante", description: "Landing premium para propuesta gastronómica de alto nivel." },
  { business: "Bizcochos del Patio", industry: "Gastronomía", type: "Repostería", description: "Catálogo de bizcochos y pedidos para eventos." },
  { business: "Barbería Nader", industry: "Belleza", type: "Barbería", description: "Servicios, galería de cortes y booking." },
  { business: "Taller Erimaldi", industry: "Automotriz", type: "Mecánica y repuestos", description: "Servicios del taller y catálogo de repuestos." },
  { business: "The Power Box", industry: "Fitness", type: "Gimnasio", description: "Planes, entrenadores y rediseño de alto voltaje." },
  { business: "Dra. María Nolasco", industry: "Salud", type: "Clínica dental", description: "Servicios, confianza y citas en línea." },
  { business: "Clínica Sonrisas", industry: "Salud", type: "Clínica dental", description: "Tratamientos odontológicos y captación de pacientes." },
  { business: "Manos Sanadoras Spa", industry: "Bienestar", type: "Spa", description: "Terapias, ambiente zen y reservas." },
  { business: "Yeneys Studio", industry: "Belleza", type: "Estudio de belleza", description: "Portafolio de trabajos y citas." },
  { business: "D' Mirian Salón", industry: "Belleza", type: "Salón de belleza", description: "Servicios del salón y reserva de citas." },
  { business: "Tres Jollie Beauty Center", industry: "Belleza", type: "Centro de belleza", description: "Centro integral de belleza y estética." },
];

// ─── TIMELINE ──────────────────────────────────────────
export const timeline: TimelineEvent[] = [
  {
    date: "2024",
    title: "Código en producción",
    description:
      "Construyendo plataformas y sistemas en producción: portales web, infraestructura con Docker, marketplaces completos.",
  },
  {
    date: "Jul 2026",
    title: "Ingeniero en Sistemas y Computación",
    description:
      "Graduado, Universidad Dominicana O&M. El título que respalda lo que ya sabía hacer.",
    highlight: true,
  },
  {
    date: "Oct 2026",
    title: "CobraYa — MVP en vivo",
    description:
      "Mi primer SaaS: cobranza automatizada para pymes dominicanas. De idea a producción en días.",
    highlight: true,
  },
  {
    date: "Oct 2026",
    title: "6 aplicaciones IA",
    description:
      "Diseñadas, construidas y desplegadas. Todas con demo en vivo y código abierto.",
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

// ─── TIENDA (mínima) ───────────────────────────────────
export const store = {
  note: "También empaqueto conocimiento en productos digitales.",
  label: "Ver tienda en Gumroad",
  url: "https://chachiafk.gumroad.com",
};

// ─── CONTACTO ──────────────────────────────────────────
export const contact = {
  headline: "Hablemos.",
  description:
    "Trabajo remoto, ~4h/día. Construyo web apps, SaaS e integraciones IA — y las pongo en producción. Sin humo, solo lo que domino.",
  email: "carlosreyesafk@gmail.com",
  links: [
    { label: "Upwork", url: "https://www.upwork.com/freelancers/~015fcb17ba7d725843" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/carlosreyesafk" },
    { label: "GitHub", url: "https://github.com/carlosreyesafk" },
  ],
};

export const nav = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Caso de estudio", href: "#caso" },
  { label: "Productos", href: "#productos" },
  { label: "Conceptos", href: "#conceptos" },
  { label: "Historia", href: "#historia" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contacto" },
];
