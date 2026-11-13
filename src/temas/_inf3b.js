// Ayudas de dibujo para los temas de Infantil 3 años (lote B: comunicación, inglés, catalán y religión).
// No es un tema: empieza por "_". Dibujos propios en SVG, grandes y alegres.
const { F, D } = require("./_util");
const { ic, marco } = require("./_peque");
const { fz } = require("./_lenguas");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", S = "var(--sun)", W = "var(--water)";

const titulo = (t, y = 22) => t ? `<text x="130" y="${y}" text-anchor="middle" font-size="${fz(t, 15, 236, true)}" font-weight="700" fill="var(--muted)">${t}</text>` : "";
const texto = (x, y, t, color = "var(--ink)", size = 16, max = 236) =>
  `<text x="${x}" y="${y}" text-anchor="middle" font-size="${fz(t, size, max, true)}" font-weight="800" fill="${color}" ${D}>${t}</text>`;

// Escena libre: [dibujo, x, y, escala] o ["t", x, y, texto, color, tamaño].
function escena(label, items, { titulo: t, nota } = {}) {
  let out = titulo(t);
  for (const it of items) {
    if (it[0] === "t") out += texto(it[1], it[2], it[3], it[4], it[5]);
    else if (it[0] === "svg") out += it[1];
    else out += ic(it[0], it[1], it[2], it[3] || 1);
  }
  if (nota) out += texto(130, 168, nota, "var(--ink)", 15);
  return marco(label, out);
}

// Ondas de sonido junto a un punto (x, y), hacia la derecha o la izquierda.
const ondas = (x, y, color = A, izq = false) => [10, 18, 26].map((r) =>
  `<path d="M${x} ${y - r * 0.7} A ${r} ${r} 0 0 ${izq ? 0 : 1} ${x} ${y + r * 0.7}" transform="translate(${izq ? -r * 0.3 : r * 0.3} 0)" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>`).join("");

// Cosas que suenan: [dibujo, sonido, color]. El dibujo con ondas y el sonido debajo. Hasta 4.
function suenan(label, items, { titulo: t } = {}) {
  const w = 248 / items.length;
  let out = titulo(t);
  items.forEach(([d, s, c], i) => {
    const x = 130 + (i - (items.length - 1) / 2) * w, y = t ? 76 : 70;
    out += ic(d, x - 8, y, 1.25) + ondas(x + 16, y, c) + texto(x, y + 62, s, c, 19, w - 6);
  });
  return marco(label, out);
}

// Trazos: filas [tipo, color]. Tipos: garabato, recta, ondas, zigzag, espiral, puntos, circulo.
function linea(tipo, x0, y, ancho, color) {
  const c = `fill="none" stroke="${color}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"`;
  if (tipo === "recta") return `<path d="M${x0} ${y} H ${x0 + ancho}" ${c}/>`;
  if (tipo === "ondas") { let d = `M${x0} ${y}`; for (let x = x0; x + 30 <= x0 + ancho; x += 30) d += ` q 7.5 -16 15 0 q 7.5 16 15 0`; return `<path d="${d}" ${c}/>`; }
  if (tipo === "zigzag") { let d = `M${x0} ${y + 10}`; for (let x = x0; x + 24 <= x0 + ancho; x += 24) d += ` l 12 -20 l 12 20`; return `<path d="${d}" ${c}/>`; }
  if (tipo === "puntos") return [...Array(Math.floor(ancho / 22) + 1)].map((_, i) => `<circle cx="${x0 + i * 22}" cy="${y}" r="5" fill="${color}"/>`).join("");
  if (tipo === "circulo") return [...Array(Math.floor(ancho / 40))].map((_, i) => `<circle cx="${x0 + 16 + i * 40}" cy="${y}" r="13" ${c}/>`).join("");
  if (tipo === "espiral") {
    const cx = x0 + ancho / 2; let d = "";
    for (let a = 0; a < Math.PI * 6; a += 0.2) { const r = 2 + a * 2.2; d += `${d ? "L" : "M"}${(cx + Math.cos(a) * r).toFixed(1)} ${(y + Math.sin(a) * r * 0.55).toFixed(1)} `; }
    return `<path d="${d}" ${c}/>`;
  }
  // garabato: vueltas libres.
  let d = `M${x0} ${y}`;
  for (let i = 0; i < 9; i++) d += ` q ${8 + (i % 3) * 4} ${i % 2 ? 26 : -26} ${16 + (i % 2) * 4} ${i % 2 ? -4 : 4}`;
  return `<path d="${d}" ${c}/>`;
}
function trazos(label, filas, { titulo: t, lapiz = true } = {}) {
  const top = t ? 40 : 16, h = (168 - top) / filas.length;
  let out = titulo(t);
  filas.forEach(([tipo, color], i) => {
    const y = top + h * (i + 0.5);
    out += linea(tipo, 26, y, lapiz ? 170 : 208, color);
    if (lapiz) out += `<g transform="translate(222 ${y - 4}) rotate(-35)"><rect x="-22" y="-5" width="34" height="10" rx="2" fill="${color}"/><path d="M12 -5 L22 0 L12 5z" fill="#f2c79e"/><path d="M19 -1.5 L22 0 L19 1.5z" fill="${color}"/></g>`;
  });
  return marco(label, out);
}

// Pintura con los dedos: un dibujo hecho con huellas de dedo (círculos) y una mano.
function huellas(label, cual, { titulo: t } = {}) {
  const dedo = (x, y, c, r = 9) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 1.2}" fill="${c}" opacity=".9"/>`;
  let out = titulo(t);
  if (cual === "arbol") {
    out += `<rect x="86" y="104" width="16" height="52" rx="4" fill="#a0703c"/>`;
    [[94, 60], [74, 72], [114, 72], [80, 92], [108, 92], [94, 80], [62, 90], [126, 90], [94, 44], [76, 50], [112, 50]].forEach(([x, y], i) => { out += dedo(x, y, i % 3 ? V : R); });
  } else if (cual === "oruga") {
    [0, 1, 2, 3, 4, 5].forEach((i) => { out += dedo(42 + i * 22, 100 + (i % 2) * -8, [V, S, R, A, N, W][i], 12); });
    out += `<circle cx="157" cy="88" r="3" fill="#2a2a2a"/>`;
  } else if (cual === "sol") {
    out += dedo(94, 92, S, 22);
    for (let i = 0; i < 10; i++) { const a = (i * Math.PI) / 5; out += dedo(94 + Math.cos(a) * 44, 92 + Math.sin(a) * 44, S, 7); }
  } else {
    // flores
    [[56, 96, R], [100, 80, N], [140, 100, A]].forEach(([x, y, c]) => {
      out += `<path d="M${x} ${y} V 156" stroke="var(--leaf)" stroke-width="4"/>`;
      for (let i = 0; i < 5; i++) { const a = (i * 2 * Math.PI) / 5; out += dedo(x + Math.cos(a) * 12, y + Math.sin(a) * 12, c, 7); }
      out += `<circle cx="${x}" cy="${y}" r="6" fill="var(--sun)"/>`;
    });
  }
  out += ic("mano", 214, 112, 1.6) + `<circle cx="210" cy="78" r="6" fill="${R}"/>`;
  return marco(label, out);
}

// El portal de Belén: estrella, José, María y el niño Jesús en la cuna.
function belen(label, { titulo: t, nota } = {}) {
  let out = titulo(t);
  out += `<path d="M50 150 V 78 L 130 38 L 210 78 V 150" fill="var(--card)" stroke="#a0703c" stroke-width="5" stroke-linejoin="round"/>
    <path d="M36 82 L130 30 L224 82" fill="none" stroke="#a0703c" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M40 152 H220" stroke="#a0703c" stroke-width="4"/>`;
  out += ic("estrella", 130, 17, 0.7) + `<path d="M130 26 L 130 40" stroke="var(--sun)" stroke-width="3" stroke-dasharray="3 4"/>`;
  out += ic("papa", 82, 108, 1.15) + ic("mama", 178, 108, 1.15);
  out += `<path d="M110 146 L 116 128 H 144 L 150 146z" fill="#a0703c"/><path d="M114 128 q16 -6 32 0" stroke="var(--sun)" stroke-width="4" fill="none"/>` + ic("bebe", 130, 120, 0.7);
  if (nota) out += texto(130, 172, nota, "var(--ink)", 14);
  return marco(label, out);
}

// Datos del currículo de Infantil.
const PROF = (saberes, ideas) => ({ saberes: `${saberes} (RD 95/2022, segundo ciclo de Educación Infantil).`, ideas });
const FUENTES = [{ t: "Real Decreto 95/2022, ordenación y enseñanzas mínimas de la Educación Infantil (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-1654" }];

module.exports = { R, A, V, N, S, W, escena, ondas, suenan, trazos, huellas, belen, texto, PROF, FUENTES };
