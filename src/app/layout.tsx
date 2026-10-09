import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlos Reyes — Software Developer · AI Builder",
  description:
    "El cerebro de Carlos Reyes: proyectos IA, SaaS, productos digitales y conceptos web. Del prompt al deploy.",
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
