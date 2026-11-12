// Utilidades de los temas de 2º de ESO (lote C: Matemáticas, Música, Educación Física y Valores).
// Reutiliza las de 3º de ESO y cambia el curso. Dibujos propios en SVG.
const base = require("./_eso3");
const { F, D, t } = base;

const C = "2-eso";
const REV = "2026-11-12";

// Recta numérica de a a b (enteros) en un lienzo de ancho w; marcas: [[valor, etiqueta, color]].
const recta = (a, b, y, x0, x1, marcas = [], o = {}) => {
  const k = (x1 - x0) / (b - a);
  const X = (v) => +(x0 + (v - a) * k).toFixed(1);
  let s = `<path d="M${x0 - 8} ${y} H ${x1 + 8}" stroke="var(--muted)" stroke-width="2"/>`;
  for (let v = a; v <= b; v++) s += `<path d="M${X(v)} ${y - 5} V ${y + 5}" stroke="var(--muted)" stroke-width="${v === 0 ? 2.5 : 1.5}"/>${o.num === false ? "" : t(X(v), y + 18, String(v).replace("-", "−"), { c: v === 0 ? "var(--ink)" : "var(--muted)", s: o.s || 10 })}`;
  for (const [v, txt, c] of marcas) s += `<circle cx="${X(v)}" cy="${y}" r="5" fill="${c}"/>${txt ? t(X(v), y - 11, txt, { c, s: 11 }) : ""}`;
  return { s, X };
};

// Pentagrama de 5 líneas desde (x0, y0) con separación g. nota(x, paso): paso 0 = 1.ª línea (mi), 1 = 1.er espacio (fa)…
const penta = (x0, x1, y0, g = 10) => {
  let s = "";
  for (let i = 0; i < 5; i++) s += `<path d="M${x0} ${y0 + i * g} H ${x1}" stroke="var(--ink)" stroke-width="1.2" opacity=".75"/>`;
  const Y = (paso) => y0 + 4 * g - (paso * g) / 2;
  const nota = (x, paso, o = {}) => {
    const y = Y(paso), c = o.c || "var(--ink)";
    let n = `<ellipse cx="${x}" cy="${y}" rx="${g * 0.62}" ry="${g * 0.45}" transform="rotate(-20 ${x} ${y})" fill="${o.blanca ? "var(--paper)" : c}" stroke="${c}" stroke-width="1.8"/>`;
    if (o.plica !== false && !o.redonda) n += paso < 4 ? `<path d="M${x + g * 0.58} ${y} V ${y - g * 3.4}" stroke="${c}" stroke-width="1.6"/>` : `<path d="M${x - g * 0.58} ${y} V ${y + g * 3.4}" stroke="${c}" stroke-width="1.6"/>`;
    if (o.corchea) n += paso < 4 ? `<path d="M${x + g * 0.58} ${y - g * 3.4} q ${g * 0.9} ${g * 1} ${g * 0.6} ${g * 2.2}" fill="none" stroke="${c}" stroke-width="1.6"/>` : `<path d="M${x - g * 0.58} ${y + g * 3.4} q ${g * 0.9} ${-g * 1} ${g * 0.6} ${-g * 2.2}" fill="none" stroke="${c}" stroke-width="1.6"/>`;
    if (paso <= -2) for (let p = -2; p >= paso; p -= 2) n += `<path d="M${x - g} ${Y(p)} H ${x + g}" stroke="var(--ink)" stroke-width="1.2"/>`;
    return n;
  };
  const barra = (x) => `<path d="M${x} ${y0} V ${y0 + 4 * g}" stroke="var(--ink)" stroke-width="1.4"/>`;
  return { s, Y, nota, barra };
};

// Tarjetas apiladas para un lienzo de 260: [titulo, texto, color].
const chips = (rows, y0 = 16, h = 44) => rows.map(([n, d, c], i) => `<rect x="14" y="${y0 + i * (h + 8)}" width="232" height="${h}" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${t(26, y0 + i * (h + 8) + Math.round(h * 0.43), n, { c, s: 13, a: "start" })}${t(26, y0 + i * (h + 8) + Math.round(h * 0.8), d, { s: 11, a: "start", w: 400 })}`).join("");

// Muñeco esquemático (cabeza en x, y) para Educación Física y Valores.
const persona = (x, y, c = "var(--pen)", o = {}) => {
  const b = o.brazos || [[-16, 12], [16, 12]], p = o.piernas || [[-10, 26], [10, 26]];
  return `<g stroke="${c}" stroke-width="3.2" stroke-linecap="round" fill="none"><circle cx="${x}" cy="${y}" r="7" fill="${c}" fill-opacity=".2"/><path d="M${x} ${y + 7} V ${y + 30}"/><path d="M${x} ${y + 14} l ${b[0][0]} ${b[0][1]} M${x} ${y + 14} l ${b[1][0]} ${b[1][1]}"/><path d="M${x} ${y + 30} l ${p[0][0]} ${p[0][1]} M${x} ${y + 30} l ${p[1][0]} ${p[1][1]}"/></g>`;
};

module.exports = { ...base, C, REV, recta, penta, chips, persona, F, D };
