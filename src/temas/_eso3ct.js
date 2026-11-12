// Ayudas compartidas por los temas de 3º de ESO (ciencias y tecnología).
const { F, D, mapa } = require("./_util");

// Fondo de un dibujo de bloque (260 x 180).
const BG = `<rect width="260" height="180" rx="14" fill="var(--paper)"/>`;

// Texto SVG. o: { size, color, anchor, weight, font }
const t = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.anchor || "middle"}" font-size="${o.size || 12}" font-weight="${o.weight || 700}" fill="${o.color || "var(--ink)"}" ${o.font || F}>${s}</text>`;

// Flecha recta de (x1, y1) a (x2, y2) con punta.
const fl = (x1, y1, x2, y2, c = "var(--muted)", w = 2.5) => {
  const a = Math.atan2(y2 - y1, x2 - x1), p = 7;
  const l = [a + 2.6, a - 2.6].map((b) => `${(x2 + p * Math.cos(b)).toFixed(1)} ${(y2 + p * Math.sin(b)).toFixed(1)}`);
  return `<path d="M${x1} ${y1} L ${x2} ${y2}" stroke="${c}" stroke-width="${w}" fill="none"/><path d="M${l[0]} L ${x2} ${y2} L ${l[1]}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linejoin="round"/>`;
};

// Caja con texto centrado.
const caja = (x, y, w, h, s, c = "var(--pen)", o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 8}" fill="${o.fill || c}" fill-opacity="${o.op ?? 0.14}" stroke="${c}" stroke-width="2"/>${t(x + w / 2, y + h / 2 + (o.size || 12) * 0.36, s, { size: o.size || 12, color: o.color || "var(--ink)" })}`;

const tabla = (cab, filas) => `<table class="tb"><thead><tr>${cab.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${filas.map((f) => `<tr>${f.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };
const wiki = (titulo, pagina) => ({ t: `${titulo}, Wikipedia en español`, url: `https://es.wikipedia.org/wiki/${pagina}` });

module.exports = { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki };
