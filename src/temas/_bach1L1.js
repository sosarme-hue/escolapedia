// Ayudas de dibujo para los temas de 1º de Bachillerato a nivel libro (lote 1: Matemáticas I).
// Todo son dibujos propios en SVG; los colores salen de las variables del tema (claro y oscuro).
const base = require("./_eso4L3");
const { lienzo, t, graf, n2, flecha, F } = base;

// Segmento suelto y arco de ángulo (centro, radio, ángulos en grados).
const linea = (P, Q, c = "var(--ink)", w = 2.4, extra = "") => `<path d="M${n2(P[0])} ${n2(P[1])} L ${n2(Q[0])} ${n2(Q[1])}" stroke="${c}" stroke-width="${w}" fill="none" ${extra}/>`;
const arco = (cx, cy, r, a0, a1, c = "var(--red)") => {
  const p = (a) => [cx + r * Math.cos((a * Math.PI) / 180), cy - r * Math.sin((a * Math.PI) / 180)].map(n2);
  const [x0, y0] = p(a0), [x1, y1] = p(a1);
  return `<path d="M${x0} ${y0} A ${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 0 ${x1} ${y1}" fill="none" stroke="${c}" stroke-width="2.2"/>`;
};

// Flecha (vector) dentro de unos ejes E, de (xa, ya) a (xb, yb).
let kf = 0;
const vec = (E, xa, ya, xb, yb, c = "var(--pen)", lab = "", dx = 6, dy = -6) => {
  const id = `fb${++kf}`;
  return `<defs>${flecha(id, c)}</defs><path d="M${E.X(xa)} ${E.Y(ya)} L ${E.X(xb)} ${E.Y(yb)}" stroke="${c}" stroke-width="2.6" fill="none" marker-end="url(#${id})"/>${lab ? t(E.X(xb) + dx, E.Y(yb) + dy, lab, { c, s: 12, b: 1, a: dx < 0 ? "end" : "start" }) : ""}`;
};

// Circunferencia goniométrica con el ángulo a (grados) y su seno (rojo) y coseno (verde).
const gonio = (a, aria, extra = () => "") => graf(aria, { x0: -1.4, x1: 1.4, y0: -1.2, y1: 1.2, paso: 0.5, etiquetas: false, w: 260, h: 180 }, (E) => {
  const r = E.X(1) - E.X(0), c = Math.cos((a * Math.PI) / 180), s = Math.sin((a * Math.PI) / 180);
  return `<circle cx="${E.X(0)}" cy="${E.Y(0)}" r="${r}" fill="none" stroke="var(--pen)" stroke-width="2"/>${E.seg(0, 0, c, s, "var(--ink)", 2.4)}${E.seg(c, 0, c, s, "var(--red)", 3)}${E.seg(0, 0, c, 0, "var(--leaf)", 3)}${arco(E.X(0), E.Y(0), 18, 0, a)}${E.punto(c, s, "var(--ink)")}${extra(E, r)}`;
});

// Figura resumen (640 × 220): columnas [titulo, [líneas], color].
function fig(titulo, aria, cols) {
  const n = cols.length, gap = 14, w = (640 - 2 * 20 - (n - 1) * gap) / n;
  const cajas = cols.map(([cab, ls, c], i) => {
    const x = 20 + i * (w + gap), cx = x + w / 2;
    return `<rect x="${n2(x)}" y="20" width="${n2(w)}" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
      <rect x="${n2(x)}" y="20" width="${n2(w)}" height="34" rx="14" fill="${c}"/><rect x="${n2(x)}" y="40" width="${n2(w)}" height="14" fill="${c}"/>
      ${t(cx, 43, cab, { c: "#fff", s: 14, b: 1 })}${ls.map((l, j) => t(cx, 80 + j * 24, l, { s: Math.min(12.5, (w - 14) / (l.length * 0.56)), b: j === 0 ? 1 : 0 })).join("")}`;
  }).join("");
  return { titulo, svg: `<svg viewBox="0 0 640 220" role="img" aria-label="${aria}"><rect width="640" height="220" rx="16" fill="var(--paper)"/>${cajas}</svg>` };
}

// Tabla sencilla para dibujos: filas de celdas centradas.
function rejilla(aria, filas, o = {}) {
  const { w = 260, h = 180, x0 = 14, y0 = 16, cab = "var(--pen)" } = o;
  const nf = filas.length, nc = filas[0].length, cw = (w - 2 * x0) / nc, ch = (h - 2 * y0) / nf;
  let s = "";
  filas.forEach((f, i) => f.forEach((v, j) => {
    const x = x0 + j * cw, y = y0 + i * ch;
    s += `<rect x="${n2(x)}" y="${n2(y)}" width="${n2(cw)}" height="${n2(ch)}" fill="${i === 0 ? cab : "var(--card)"}" fill-opacity="${i === 0 ? 0.9 : 1}" stroke="var(--line)" stroke-width="1"/>`;
    s += t(x + cw / 2, y + ch / 2 + 4, v, { c: i === 0 ? "#fff" : "var(--ink)", s: 11, b: i === 0 ? 1 : 0 });
  }));
  return lienzo(aria, s, w, h);
}

const RD = { t: "Real Decreto 243/2022, estructura y enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" };

module.exports = { ...base, linea, arco, vec, gonio, fig, rejilla, RD, F };
