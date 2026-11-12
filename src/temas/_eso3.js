// Utilidades compartidas por los temas de 3º de ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

const C = "3-eso";
const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };

// Lienzo estándar de 260 × 180 (o alto h) con fondo.
const svg = (aria, inner, h = 180, w = 260) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${aria}"><rect width="${w}" height="${h}" rx="14" fill="var(--paper)"/>${inner}</svg>`;

// Texto: t(x, y, "texto", { c: color, s: tamaño, a: "middle" | "start" | "end", w: peso, d: true para la fuente de títulos })
const t = (x, y, txt, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || "middle"}" font-size="${o.s || 12}" font-weight="${o.w || 700}" fill="${o.c || "var(--ink)"}" ${o.d ? D : F}>${txt}</text>`;

// Caja con texto centrado.
const caja = (x, y, w, h, txt, c = "var(--pen)", o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 10}" fill="${o.fill || c}" fill-opacity="${o.op ?? 0.14}" stroke="${c}" stroke-width="2.5"/>${t(x + w / 2, y + h / 2 + (o.s || 12) * 0.36, txt, { c: o.tc || c, s: o.s || 12 })}`;

// Tabla HTML con el estilo de la web.
const tabla = (cab, filas) => `<table class="tb"><thead><tr>${cab.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${filas.map((f) => `<tr>${f.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

// Figura grande de filas: [nombre, texto, color]
const filas = (aria, rows, x2 = 230) => `<svg viewBox="0 0 640 ${rows.length * 50 + 20}" role="img" aria-label="${aria}">
  <rect width="640" height="${rows.length * 50 + 20}" rx="16" fill="var(--paper)"/>
  ${rows.map(([n, d, c], i) => `<rect x="20" y="${12 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${39 + i * 50}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="${x2}" y="${39 + i * 50}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
</svg>`;

// Ejes cartesianos: origen (ox, oy), escala k píxeles por unidad, rango de x e y en unidades.
const ejes = (ox, oy, k, [x0, x1], [y0, y1], o = {}) => {
  let s = "";
  if (o.rejilla !== false) {
    for (let i = x0; i <= x1; i++) s += `<path d="M${ox + i * k} ${oy - y1 * k} V ${oy - y0 * k}" stroke="var(--line)" stroke-width="1"/>`;
    for (let j = y0; j <= y1; j++) s += `<path d="M${ox + x0 * k} ${oy - j * k} H ${ox + x1 * k}" stroke="var(--line)" stroke-width="1"/>`;
  }
  s += `<path d="M${ox + x0 * k} ${oy} H ${ox + x1 * k} M${ox} ${oy - y0 * k} V ${oy - y1 * k}" stroke="var(--muted)" stroke-width="2"/>`;
  s += t(ox + x1 * k - 4, oy - 6, "x", { c: "var(--muted)", s: 11, a: "end" }) + t(ox + 8, oy - y1 * k + 10, "y", { c: "var(--muted)", s: 11, a: "start" });
  return s;
};

// Coloca la respuesta correcta en posiciones variadas (patrón fijo, siempre igual en cada build).
const PATRON = [1, 2, 0, 2, 1, 0, 1, 2, 0, 1, 2, 0, 1];
const mezcla = (qs) => qs.map((q, i) => {
  const dest = PATRON[i % PATRON.length] % q.o.length;
  const otras = q.o.filter((_, j) => j !== q.a);
  const o = [...otras.slice(0, dest), q.o[q.a], ...otras.slice(dest)];
  return { ...q, o, a: dest };
});

module.exports = { F, D, mapa, flecha, C, RD, svg, t, caja, tabla, filas, ejes, mezcla };
