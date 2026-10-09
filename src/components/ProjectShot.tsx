"use client";

import { useState } from "react";

/**
 * Muestra la captura real del proyecto (/screenshots/<slug>.png).
 * Si aún no existe la captura real, usa el identificador visual SVG.
 * Para reemplazar: subir el PNG con el mismo nombre y listo, sin tocar código.
 */
export default function ProjectShot({
  slug,
  name,
}: {
  slug: string;
  name: string;
}) {
  const [src, setSrc] = useState(`/screenshots/${slug}.png`);
  return (
    <div className="shot-frame">
      <img
        src={src}
        onError={() => {
          if (src.endsWith(".png")) setSrc(`/screenshots/${slug}.svg`);
        }}
        alt={`Captura de ${name} en vivo`}
        loading="lazy"
        className="shot-img"
      />
    </div>
  );
}
