// Ayudas de dibujo para el lote 4 de 3º ESO nivel libro (Biología y Geología).
// Todos los dibujos miden 260 × 180, como los bloques del resto de temas.
const { F, D, flecha } = require("./_util");

const C = ["var(--pen)", "var(--leaf)", "var(--red)", "var(--sun)", "var(--inf)", "var(--water)"];
const fondo = '<rect width="260" height="180" rx="14" fill="var(--paper)"/>';
const esc = (s) => String(s).replace(/&(?![a-z#0-9]+;)/g, "&amp;").replace(/</g, "&lt;");

// Parte un texto en líneas de como mucho n caracteres.
function partir(t, n) {
  const out = [];
  let l = "";
  for (const w of String(t).split(/\s+/)) {
    if (l && (l + " " + w).length > n) { out.push(l); l = w; } else l = l ? l + " " + w : w;
  }
  if (l) out.push(l);
  return out;
}
// Texto de varias líneas centrado verticalmente en y.
function txt(x, y, t, { n = 30, fs = 11, fill = "var(--ink)", anchor = "middle", bold = true, lh = 1.25 } = {}) {
  const ls = partir(t, n);
  const y0 = y - ((ls.length - 1) * fs * lh) / 2 + fs * 0.35;
  return `<text x="${x}" y="${y0}" text-anchor="${anchor}" font-size="${fs}"${bold ? ' font-weight="700"' : ""} fill="${fill}" ${F}>${ls.map((s, i) => `<tspan x="${x}" dy="${i ? fs * lh : 0}">${esc(s)}</tspan>`).join("")}</text>`;
}
const pie = (t, color = "var(--muted)") => (t ? txt(130, 168, t, { n: 44, fs: 11, fill: color }) : "");
const svg = (label, inner, id) => `<svg viewBox="0 0 260 180" role="img" aria-label="${esc(label)}"><defs>${flecha(id || "e3l4f", "var(--muted)")}</defs>${fondo}${inner}</svg>`;
let nid = 0;
const uid = () => `e3l4f${++nid}`;

// Pasos en vertical con flechas: pasos = ["texto", …] (2 a 4).
function flujo(label, pasos, titulo) {
  const id = uid();
  const top = titulo ? 30 : 12, n = pasos.length, gap = 12;
  const h = Math.min(36, (180 - top - 10 - gap * (n - 1)) / n);
  let s = titulo ? txt(130, 16, titulo, { n: 40, fs: 12, fill: "var(--ink)" }) : "";
  pasos.forEach((p, i) => {
    const y = top + i * (h + gap), c = C[i % C.length];
    s += `<rect x="22" y="${y}" width="216" height="${h}" rx="9" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2"/>`;
    const fs = h < 30 ? 10 : 11;
    s += txt(130, y + h / 2, p, { n: fs === 10 ? 37 : 34, fs, lh: 1.15 });
    if (i < n - 1) s += `<path d="M130 ${y + h + 1} V ${y + h + gap - 2}" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#${id})"/>`;
  });
  return svg(label, s, id);
}

// Dos columnas que se comparan: [titulo, color, [rasgos]] (hasta 4 rasgos cortos).
function compara(label, a, b, abajo) {
  const col = (x, [t, c, items]) => {
    const fs = 10.5, lh = 13, alto = abajo ? 136 : 156;
    const ls = items.map((it) => partir(it, 19).length);
    const total = ls.reduce((s, n) => s + n * lh, 0), hueco = Math.max(6, (alto - 40 - total) / (items.length + 1));
    let y = 42 + hueco, out = "";
    items.forEach((it, i) => { const h = ls[i] * lh; out += txt(x + 57, y + h / 2 - 2, it, { n: 19, fs, bold: false, lh: lh / fs }); y += h + hueco; });
    return `<rect x="${x}" y="12" width="114" height="${alto}" rx="10" fill="${c}" fill-opacity=".1" stroke="${c}" stroke-width="2"/>
    <rect x="${x}" y="12" width="114" height="30" rx="10" fill="${c}"/>${txt(x + 57, 27, t, { n: 18, fs: 12, fill: "#fff" })}${out}`;
  };
  return svg(label, col(10, a) + col(136, b) + pie(abajo));
}

// Ciclo: etapas alrededor de un centro (3 a 6).
function ciclo(label, centro, etapas, color = "var(--leaf)") {
  const id = uid(), n = etapas.length, cx = 130, cy = 88, R = 64, RX = n >= 5 ? 86 : R;
  let s = `<ellipse cx="${cx}" cy="${cy}" rx="${RX}" ry="${R}" fill="none" stroke="var(--line)" stroke-width="3" stroke-dasharray="6 5"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="27" fill="${color}"/>` + txt(cx, cy, centro, { n: 9, fs: 10, fill: "#fff" });
  etapas.forEach((e, i) => {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / n, x = cx + RX * Math.cos(a), y = cy + R * Math.sin(a), c = C[i % C.length];
    const a2 = a + Math.PI / n, x2 = cx + RX * Math.cos(a2), y2 = cy + R * Math.sin(a2);
    s += `<path d="M${(x2 - 6 * Math.sin(a2)).toFixed(1)} ${(y2 + 6 * Math.cos(a2)).toFixed(1)} l ${(3 * -Math.sin(a2)).toFixed(1)} ${(3 * Math.cos(a2)).toFixed(1)}" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#${id})"/>`;
    s += `<rect x="${(x - 40).toFixed(1)}" y="${(y - 14).toFixed(1)}" width="80" height="28" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2"/>`;
    s += txt(x, y, e, { n: 14, fs: 9.5, fill: c });
  });
  return svg(label, s, id);
}

// Línea del tiempo: hitos = [[fecha, texto], …] (3 a 5).
function linea(label, hitos, titulo) {
  const n = hitos.length, x0 = 38, x1 = 222, y = 92;
  let s = titulo ? txt(130, 16, titulo, { n: 40, fs: 12 }) : "";
  s += `<path d="M${x0 - 8} ${y} H ${x1 + 8}" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>`;
  hitos.forEach(([f, t], i) => {
    const x = n === 1 ? 130 : x0 + ((x1 - x0) * i) / (n - 1), c = C[i % C.length], arriba = i % 2 === 0;
    s += `<circle cx="${x}" cy="${y}" r="7" fill="${c}" stroke="var(--paper)" stroke-width="2"/>`;
    s += `<path d="M${x} ${arriba ? y - 8 : y + 8} V ${arriba ? y - 18 : y + 18}" stroke="${c}" stroke-width="2"/>`;
    s += txt(x, arriba ? y - 28 : y + 28, f, { n: 12, fs: 11, fill: c });
    s += txt(x, arriba ? y - 52 : y + 52, t, { n: 12, fs: 9.5, bold: false });
  });
  const ok = hitos.every(([, t]) => partir(t, 13).length <= 2);
  return svg(label, ok ? s : s, uid());
}

// Barras horizontales: datos = [[etiqueta, valor, texto del valor], …] (hasta 5).
function barras(label, datos, titulo, maximo) {
  const max = maximo || Math.max(...datos.map((d) => d[1]));
  const top = titulo ? 30 : 14, h = Math.min(24, (150 - top) / datos.length - 6);
  let s = titulo ? txt(130, 16, titulo, { n: 40, fs: 12 }) : "";
  datos.forEach(([e, v, vt], i) => {
    const y = top + i * (h + 8), w = Math.max(4, (130 * v) / max), c = C[i % C.length];
    s += txt(78, y + h / 2, e, { n: 14, fs: 10, anchor: "end" });
    s += `<rect x="84" y="${y}" width="${w.toFixed(1)}" height="${h}" rx="5" fill="${c}"/>`;
    s += `<text x="${(88 + w).toFixed(1)}" y="${y + h / 2 + 4}" font-size="10" font-weight="700" fill="var(--ink)" ${F}>${esc(vt ?? v)}</text>`;
  });
  return svg(label, s + pie(""), uid());
}

// Capas apiladas de arriba abajo: [[texto, color, alto], …].
function capas(label, cs, titulo) {
  const top = titulo ? 30 : 12, total = cs.reduce((a, c) => a + (c[2] || 1), 0), H = 158 - top;
  let y = top, s = titulo ? txt(130, 16, titulo, { n: 40, fs: 12 }) : "";
  cs.forEach(([t, c, k = 1]) => {
    const h = (H * k) / total;
    s += `<rect x="20" y="${y.toFixed(1)}" width="220" height="${(h - 2).toFixed(1)}" rx="6" fill="${c}" fill-opacity=".85"/>`;
    s += txt(130, y + h / 2 - 1, t, { n: 36, fs: 10.5, fill: "#fff" });
    y += h;
  });
  return svg(label, s, uid());
}

// Pirámide de niveles (de la base a la cúspide): [[texto, color], …] (3 a 5).
function piramide(label, niveles, pieTxt) {
  const n = niveles.length, base = 232, top = 14, H = pieTxt ? 136 : 152, h = H / n;
  let s = "";
  niveles.forEach(([t, c], i) => {
    const y = top + H - (i + 1) * h, wB = base - (base - 50) * (i / n), wT = base - (base - 50) * ((i + 1) / n);
    s += `<path d="M${130 - wB / 2} ${y + h} L ${130 - wT / 2} ${y + 1} H ${130 + wT / 2} L ${130 + wB / 2} ${y + h} Z" fill="${c}" fill-opacity=".85" stroke="var(--paper)" stroke-width="2"/>`;
    s += txt(130, y + h / 2 + 1, t, { n: Math.max(10, Math.round(wT / 7)), fs: 10, fill: "#fff" });
  });
  return svg(label, s + pie(pieTxt), uid());
}

// Concepto central con ramas: ramas = ["texto", …] (4 o 6).
function radial(label, centro, ramas, color = "var(--pen)") {
  const pos = ramas.length > 4 ? [[56, 30], [204, 30], [45, 90], [215, 90], [56, 150], [204, 150]] : [[60, 36], [200, 36], [60, 144], [200, 144]];
  let s = pos.slice(0, ramas.length).map(([x, y]) => `<path d="M130 90 L ${x} ${y}" stroke="var(--line)" stroke-width="2.5"/>`).join("");
  s += `<ellipse cx="130" cy="90" rx="${ramas.length > 4 ? 42 : 54}" ry="24" fill="${color}"/>` + txt(130, 90, centro, { n: 12, fs: 11, fill: "#fff" });
  ramas.forEach((r, i) => {
    const [x, y] = pos[i], c = C[(i + 1) % C.length], w = ramas.length > 4 ? (i === 2 || i === 3 ? 78 : 84) : 104;
    s += `<rect x="${x - w / 2}" y="${y - 15}" width="${w}" height="30" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"/>`;
    s += txt(x, y, r, { n: ramas.length > 4 ? 13 : 18, fs: 9.5, fill: c });
  });
  return svg(label, s, uid());
}

// Cita o texto destacado en un pergamino: texto, referencia.
function cita(label, texto, ref, color = "var(--sun)") {
  let s = `<path d="M30 22 H 230 Q 242 22 242 34 V 136 Q 242 148 230 148 H 30 Q 18 148 18 136 V 34 Q 18 22 30 22 Z" fill="${color}" fill-opacity=".14" stroke="${color}" stroke-width="2.5"/>`;
  s += `<text x="34" y="54" font-size="40" fill="${color}" ${D}>“</text>`;
  s += txt(132, 82, texto, { n: 30, fs: 11.5, bold: false, lh: 1.35 });
  s += txt(130, 166, ref, { n: 42, fs: 11, fill: color });
  return svg(label, s, uid());
}

// Tabla sencilla: cabecera y filas (hasta 5 filas, 2 o 3 columnas).
function tabla(label, cab, filas) {
  const nc = cab.length, w = 236 / nc, top = 12, h = Math.min(28, 156 / (filas.length + 1));
  let s = cab.map((t, j) => `<rect x="${12 + j * w}" y="${top}" width="${w - 2}" height="${h}" rx="5" fill="${C[j % C.length]}"/>${txt(12 + j * w + w / 2 - 1, top + h / 2, t, { n: Math.floor(w / 6.5), fs: 10.5, fill: "#fff" })}`).join("");
  filas.forEach((f, i) => {
    const y = top + (i + 1) * (h + 2);
    f.forEach((t, j) => { s += `<rect x="${12 + j * w}" y="${y}" width="${w - 2}" height="${h}" rx="4" fill="var(--card)" stroke="var(--line)"/>` + txt(12 + j * w + w / 2 - 1, y + h / 2, t, { n: Math.floor(w / 5.6), fs: 9.5, bold: j === 0 }); });
  });
  return svg(label, s, uid());
}

module.exports = { F, D, C, txt, partir, flujo, compara, ciclo, linea, barras, capas, piramide, radial, cita, tabla, svg, fondo };
