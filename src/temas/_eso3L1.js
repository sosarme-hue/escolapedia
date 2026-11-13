// Ayudas de dibujo para los temas de Matemáticas de 3º ESO a nivel libro (lote 1).
// Reutiliza las ayudas de 4º (lienzo de 260 de ancho, letra que se ajusta al hueco)
// y añade algunas propias de 3º: figura resumen grande, polígonos y cuerpos con rótulos.
const base = require("./_eso4L2-mata");
const { F, D, tx, lienzo, COL } = base;

const C = "3-eso";
const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };
const DECRET = { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (DOGC)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928889.pdf" };

// Figura resumen ancha (640): filas [nombre, texto, color].
function resumen(label, rows, x2 = 210) {
  const h = rows.length * 50 + 20;
  return `<svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}"><rect width="640" height="${h}" rx="16" fill="var(--paper)"/>${rows.map(([n, d, c], i) => {
    c = c || COL[i % COL.length];
    const fs = Math.min(15, (600 - x2) / (d.length * 0.55)).toFixed(1);
    return `<rect x="20" y="${12 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="36" y="${39 + i * 50}" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text><text x="${x2}" y="${39 + i * 50}" font-size="${fs}" fill="var(--ink)" ${F}>${d}</text>`;
  }).join("")}</svg>`;
}

// Polígono con puntos [[x, y], ...] y rótulos opcionales [[x, y, texto, color]].
function poli(pts, o = {}) {
  const c = o.c || "var(--pen)";
  return `<polygon points="${pts.map((p) => p.join(",")).join(" ")}" fill="${o.fill || c}" fill-opacity="${o.op ?? 0.14}" stroke="${c}" stroke-width="${o.sw || 2.5}"${o.disc ? ' stroke-dasharray="5 4"' : ""}/>`;
}
const rot = (items, fs = 11.5) => items.map(([x, y, s, c, a]) => tx(x, y, s, { fs, c: c || "var(--ink)", a: a || "middle", max: 120 })).join("");
const linea = (x1, y1, x2, y2, c = "var(--ink)", o = {}) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="${o.w || 2}"${o.disc ? ' stroke-dasharray="4 3"' : ""} fill="none"/>`;
const punto = (x, y, c = "var(--red)", r = 4) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;

module.exports = { ...base, C, RD, DECRET, resumen, poli, rot, linea, punto };
