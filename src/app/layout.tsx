import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlos Reyes — Software Developer",
  description:
    "Carlos Reyes, Software Developer. 6 aplicaciones IA en producción, SaaS en vivo, código abierto. Sin humo, solo lo que domino.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
