// Utilidades de los temas de 1º de ESO (lote C: Matemáticas, Educación Plástica, Música y Educación Física).
// Reutiliza las de 2º de ESO (lote C) y cambia el curso. Dibujos propios en SVG.
const base = require("./_eso2c");
const { t } = base;

const C = "1-eso";
const VID = require("./_eso1c-videos");

// Vídeo general del tema (vg) o de un bloque (vb), por clave de _eso1c-videos.js.
const vb = (k) => { const v = VID[k]; if (!v) throw new Error(`_eso1c: falta el vídeo ${k}`); return { id: v[0], titulo: v[1], canal: v[2], vistas: v[3] }; };
const vg = (k) => ({ ...vb(k), megusta: 0, busqueda: VID[k][4] });
const REV = "2026-11-12";

// Rejilla de cuadrados de lado l con n columnas y m filas, empezando en (x, y).
const rejilla = (x, y, n, m, l, c = "var(--line)") => {
  let s = "";
  for (let i = 0; i <= n; i++) s += `<path d="M${x + i * l} ${y} V ${y + m * l}" stroke="${c}" stroke-width="1"/>`;
  for (let j = 0; j <= m; j++) s += `<path d="M${x} ${y + j * l} H ${x + n * l}" stroke="${c}" stroke-width="1"/>`;
  return s;
};

// Arco de ángulo en (x, y) de a1 a a2 grados (sentido antihorario, eje y hacia arriba), radio r.
const arco = (x, y, r, a1, a2, c = "var(--sun)") => {
  const P = (a) => [+(x + r * Math.cos((a * Math.PI) / 180)).toFixed(1), +(y - r * Math.sin((a * Math.PI) / 180)).toFixed(1)];
  const [x1, y1] = P(a1), [x2, y2] = P(a2);
  return `<path d="M${x1} ${y1} A ${r} ${r} 0 ${a2 - a1 > 180 ? 1 : 0} 0 ${x2} ${y2}" fill="none" stroke="${c}" stroke-width="2.2"/>`;
};

// Polígono regular de n lados con centro (x, y) y radio r; giro en grados.
const poligono = (x, y, r, n, o = {}) => {
  const g = ((o.giro ?? -90) * Math.PI) / 180;
  const pts = [...Array(n)].map((_, i) => `${(x + r * Math.cos(g + (2 * Math.PI * i) / n)).toFixed(1)},${(y + r * Math.sin(g + (2 * Math.PI * i) / n)).toFixed(1)}`).join(" ");
  return `<polygon points="${pts}" fill="${o.fill || "none"}" fill-opacity="${o.op ?? 0.2}" stroke="${o.c || "var(--pen)"}" stroke-width="${o.sw || 2.2}"/>`;
};

// Barras verticales: datos [[etiqueta, valor, color]], base y, alto máximo h para el valor máx.
const barras = (x0, y, w, h, datos, max) => {
  const m = max || Math.max(...datos.map((d) => d[1]));
  const paso = w / datos.length;
  return datos.map(([e, v, c], i) => {
    const alto = (v / m) * h, x = x0 + i * paso + paso * 0.18;
    return `<rect x="${x.toFixed(1)}" y="${(y - alto).toFixed(1)}" width="${(paso * 0.64).toFixed(1)}" height="${alto.toFixed(1)}" rx="3" fill="${c}" fill-opacity=".55" stroke="${c}" stroke-width="1.5"/>${t(x + paso * 0.32, y + 14, e, { s: 10 })}${t(x + paso * 0.32, y - alto - 5, String(v), { s: 10, c })}`;
  }).join("") + `<path d="M${x0} ${y} H ${x0 + w}" stroke="var(--muted)" stroke-width="2"/>`;
};

module.exports = { ...base, C, REV, vb, vg, rejilla, arco, poligono, barras };
