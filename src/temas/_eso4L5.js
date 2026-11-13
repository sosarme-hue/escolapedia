// Ayudas para Física y Química de 4º ESO (nivel libro, lote 5).
// Dibujos SVG sencillos y claros de 260 × 180 que ajustan el tamaño de letra para no salirse.
const { F, D, mapa, flecha } = require("./_util");
const { tabla } = require("./_amplia");
const BASE = require("./_eso4L5-base");

const W = 260, H = 180;
// Tamaño de letra para que un texto de n caracteres quepa en «ancho» píxeles.
const fit = (txt, ancho, max = 14, bold = false) => {
  const n = String(txt).replace(/<[^>]+>/g, "").length || 1;
  return Math.max(8, Math.min(max, ancho / (n * (bold ? 0.62 : 0.57)))).toFixed(1);
};
const esc = (s) => String(s).replace(/&(?!\w+;|#\d+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const marco = (aria, inner, defs = "") => `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(aria)}">${defs ? `<defs>${defs}</defs>` : ""}
  <rect width="${W}" height="${H}" rx="14" fill="var(--paper)"/>${inner}</svg>`;
const T = (x, y, txt, { fs = 13, c = "var(--ink)", a = "middle", b = false, f = F } = {}) =>
  `<text x="${x}" y="${y}" text-anchor="${a}" font-size="${fs}"${b ? ' font-weight="700"' : ""} fill="${c}" ${f}>${esc(txt)}</text>`;
let nid = 0;
const uid = (p) => `${p}${++nid}`;

// Ficha: título arriba y de 2 a 5 líneas (fórmulas o ideas clave).
function ficha(aria, titulo, lineas, c = "var(--pen)") {
  const n = lineas.length, top = 58, paso = Math.min(28, (H - top - 12) / n);
  const maxL = Math.max(...lineas.map((l) => String(l).length));
  const fs = Math.min(15, Number(fit("x".repeat(maxL), W - 40, 15, true)), paso * 0.62);
  return marco(aria, `<rect x="10" y="10" width="${W - 20}" height="36" rx="10" fill="${c}"/>
  ${T(W / 2, 34, titulo, { fs: fit(titulo, W - 40, 16, true), c: "#fff", b: true, f: D })}
  ${lineas.map((l, i) => `<rect x="18" y="${top + i * paso}" width="${W - 36}" height="${paso - 5}" rx="7" fill="var(--card)" stroke="${c}" stroke-width="1.2"/>${T(W / 2, top + i * paso + (paso - 5) / 2 + fs * 0.36, l, { fs: fs.toFixed(1), b: i === 0 && n > 1 ? false : false })}`).join("")}`);
}

// Pasos: cajas numeradas de arriba abajo unidas por flechas (3 a 5).
function pasos(aria, items, c = "var(--leaf)") {
  const n = items.length, h = (H - 20 - (n - 1) * 8) / n;
  const id = uid("ps");
  return marco(aria, items.map((t, i) => {
    const y = 10 + i * (h + 8);
    return `<rect x="12" y="${y}" width="${W - 24}" height="${h}" rx="9" fill="var(--card)" stroke="${c}" stroke-width="2"/>
    <circle cx="${12 + h / 2 + 4}" cy="${y + h / 2}" r="${Math.min(11, h / 2 - 3)}" fill="${c}"/>${T(12 + h / 2 + 4, y + h / 2 + 4.5, i + 1, { fs: 12, c: "#fff", b: true })}
    ${T(30 + h / 2 + 4, y + h / 2 + 4.5, t, { fs: Math.max(8, Math.min(13, (W - 66 - h / 2) / (String(t).length * 0.5))).toFixed(1), a: "start" })}
    ${i < n - 1 ? `<path d="M${W - 30} ${y + h} V ${y + h + 7}" stroke="${c}" stroke-width="2.5" marker-end="url(#${id})"/>` : ""}`;
  }).join(""), flecha(id, c));
}

// Comparación en dos columnas: [título, [líneas]] a cada lado.
function compara(aria, [t1, l1], [t2, l2], c1 = "var(--pen)", c2 = "var(--red)") {
  const col = (x, t, ls, c) => {
    const paso = Math.min(26, 118 / ls.length), maxL = Math.max(...ls.map((s) => String(s).length));
    const fs = Math.min(13, Number(fit("x".repeat(maxL), 104, 13)), paso * 0.6);
    return `<rect x="${x}" y="12" width="116" height="156" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
    <rect x="${x}" y="12" width="116" height="32" rx="12" fill="${c}"/>${T(x + 58, 34, t, { fs: fit(t, 104, 15, true), c: "#fff", b: true, f: D })}
    ${ls.map((s, i) => T(x + 58, 66 + i * paso, s, { fs: fs.toFixed(1) })).join("")}`;
  };
  return marco(aria, col(10, t1, l1, c1) + col(134, t2, l2, c2));
}

// Gráfica con ejes. Cada serie: { p: [[x, y], ...] con x, y entre 0 y 1, c, t (etiqueta), dash }.
function graf(aria, ex, ey, series, extra = "") {
  const x0 = 40, y0 = 145, w = 200, h = 115;
  const px = (x) => (x0 + x * w).toFixed(1), py = (y) => (y0 - y * h).toFixed(1);
  return marco(aria, `<path d="M${x0} ${y0 - h - 6} V ${y0} H ${x0 + w + 8}" fill="none" stroke="var(--muted)" stroke-width="2"/>
  ${T(x0 + w + 6, y0 + 18, ex, { fs: fit(ex, 120, 12), a: "end", c: "var(--muted)" })}${T(x0 - 4, y0 - h - 12, ey, { fs: fit(ey, 140, 12), a: "start", c: "var(--muted)" })}
  ${series.map((s) => `<polyline points="${s.p.map(([x, y]) => `${px(x)},${py(y)}`).join(" ")}" fill="none" stroke="${s.c}" stroke-width="3.2" stroke-linejoin="round"${s.dash ? ' stroke-dasharray="6 4"' : ""}/>
    ${s.t ? T(Number(px(s.p[s.p.length - 1][0])) - 4, Number(py(s.p[s.p.length - 1][1])) - 7, s.t, { fs: fit(s.t, 110, 12, true), c: s.c, b: true, a: "end" }) : ""}`).join("")}${extra}`);
}

// Barras horizontales: [[etiqueta, valor, color, textoValor?], ...].
function barras(aria, titulo, items) {
  const max = Math.max(...items.map((i) => i[1])), n = items.length, paso = (H - 44) / n, bw = 120;
  return marco(aria, `${T(W / 2, 24, titulo, { fs: fit(titulo, W - 24, 14, true), b: true, f: D, c: "var(--ink)" })}
  ${items.map(([l, v, c, tv], i) => { const y = 38 + i * paso, hh = Math.min(20, paso - 6), len = Math.max(3, (v / max) * bw); return `${T(84, y + hh / 2 + 4.5, l, { fs: fit(l, 76, 12), a: "end" })}<rect x="90" y="${y}" width="${len.toFixed(1)}" height="${hh}" rx="4" fill="${c}"/>${T(94 + len, y + hh / 2 + 4.5, tv ?? v, { fs: fit(tv ?? v, W - 100 - len, 12, true), a: "start", b: true, c })}`; }).join("")}`);
}

// Ciclo: de 3 a 6 nodos en círculo con flechas.
function ciclo(aria, items, c = "var(--pen)", centro = "") {
  const n = items.length, cx = W / 2, cy = H / 2 + 2, rx = 92, ry = 62, id = uid("cy");
  const pos = items.map((_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
  const arcs = pos.map(([x, y], i) => { const [x2, y2] = pos[(i + 1) % n]; const mx = (x + x2) / 2, my = (y + y2) / 2; const k = 0.25; return `<path d="M${(x + (x2 - x) * k).toFixed(1)} ${(y + (y2 - y) * k).toFixed(1)} L ${(x + (x2 - x) * (1 - k)).toFixed(1)} ${(y + (y2 - y) * (1 - k)).toFixed(1)}" stroke="${c}" stroke-width="2.2" marker-end="url(#${id})" opacity=".8"/>`; }).join("");
  return marco(aria, `${arcs}${centro ? T(cx, cy + 5, centro, { fs: fit(centro, 90, 14, true), b: true, f: D, c }) : ""}
  ${pos.map(([x, y], i) => `<rect x="${(x - 46).toFixed(1)}" y="${(y - 13).toFixed(1)}" width="92" height="26" rx="13" fill="var(--card)" stroke="${c}" stroke-width="2"/>${T(x.toFixed(1), (y + 4.5).toFixed(1), items[i], { fs: fit(items[i], 84, 12, true), b: true })}`).join("")}`, flecha(id, c));
}

// Escala horizontal con flecha: [[etiqueta arriba, etiqueta abajo, color], ...].
function escala(aria, titulo, items, izq = "", der = "") {
  const n = items.length, x0 = 22, x1 = W - 22, id = uid("es"), paso = (x1 - x0) / n;
  return marco(aria, `${T(W / 2, 26, titulo, { fs: fit(titulo, W - 24, 14, true), b: true, f: D })}
  <path d="M${x0} 100 H ${x1}" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#${id})"/>
  ${items.map(([a, b, c], i) => { const x = x0 + paso * (i + 0.5); return `<circle cx="${x.toFixed(1)}" cy="100" r="9" fill="${c || "var(--pen)"}"/>${T(x.toFixed(1), 78, a, { fs: fit(a, paso - 4, 12, true), b: true, c: c || "var(--pen)" })}${b ? T(x.toFixed(1), 126, b, { fs: fit(b, paso - 4, 11) }) : ""}`; }).join("")}
  ${izq ? T(x0, 158, izq, { fs: fit(izq, 110, 11), a: "start", c: "var(--muted)" }) : ""}${der ? T(x1, 158, der, { fs: fit(der, 110, 11), a: "end", c: "var(--muted)" }) : ""}`, flecha(id, "var(--muted)"));
}

// Cuerpo (caja) con vectores: [[ángulo en grados (0 = derecha, 90 = arriba), longitud, etiqueta, color], ...].
function fuerzas(aria, cuerpo, vectores, suelo = true) {
  const cx = 130, cy = suelo ? 106 : 92, id = uid("fz");
  const cols = [...new Set(vectores.map((v) => v[3]))];
  const defs = cols.map((c, i) => flecha(`${id}${i}`, c)).join("");
  return marco(aria, `${suelo ? `<path d="M20 131 H 240" stroke="var(--muted)" stroke-width="2.5"/><path d="M20 131 l-6 8 M40 131 l-6 8 M60 131 l-6 8 M80 131 l-6 8 M100 131 l-6 8 M120 131 l-6 8 M140 131 l-6 8 M160 131 l-6 8 M180 131 l-6 8 M200 131 l-6 8 M220 131 l-6 8 M240 131 l-6 8" stroke="var(--line)" stroke-width="1.5"/>` : ""}
  <rect x="${cx - 26}" y="${cy - 25}" width="52" height="50" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${T(cx, cy + 5, cuerpo, { fs: fit(cuerpo, 46, 13, true), b: true })}
  ${vectores.map(([ang, len, lab, c]) => { const r = (ang * Math.PI) / 180, dx = Math.cos(r), dy = -Math.sin(r); const sx = cx + dx * 28, sy = cy + dy * 27; const ex = sx + dx * len, ey = sy + dy * len; const vert = Math.abs(dx) < 0.3; const lx = vert ? ex + 14 : ex + dx * 14, ly = vert ? ey + (dy > 0 ? -2 : 10) : ey + dy * 12 + 4; return `<path d="M${sx.toFixed(1)} ${sy.toFixed(1)} L ${ex.toFixed(1)} ${ey.toFixed(1)}" stroke="${c}" stroke-width="3.5" marker-end="url(#${id}${cols.indexOf(c)})"/>${T(Math.max(24, Math.min(236, lx)).toFixed(1), Math.max(14, Math.min(172, ly)).toFixed(1), lab, { fs: fit(lab, 70, 13, true), b: true, c })}`; }).join("")}`, defs);
}

// Tabla dentro de un dibujo: cabecera y filas (máximo 5 filas y 3 columnas).
function rejilla(aria, cab, filas, c = "var(--pen)") {
  const nc = cab.length, cw = (W - 20) / nc, rh = Math.min(26, (H - 50) / filas.length);
  const fsC = (t) => fit(t, cw - 8, 13);
  return marco(aria, `<rect x="10" y="10" width="${W - 20}" height="30" rx="8" fill="${c}"/>
  ${cab.map((t, j) => T(10 + cw * j + cw / 2, 30, t, { fs: fit(t, cw - 8, 13, true), b: true, c: "#fff" })).join("")}
  ${filas.map((f, i) => `<rect x="10" y="${44 + i * rh}" width="${W - 20}" height="${rh - 3}" rx="5" fill="${i % 2 ? "var(--paper)" : "var(--card)"}" stroke="var(--line)"/>${f.map((t, j) => T(10 + cw * j + cw / 2, 44 + i * rh + rh / 2 + 3, t, { fs: fsC(t), b: j === 0 })).join("")}`).join("")}`);
}

// Átomo o modelo de capas: núcleo con texto y capas con número de electrones.
function capas(aria, nucleo, electrones, c = "var(--pen)", pie = "") {
  const cx = 130, cy = pie ? 82 : 90;
  return marco(aria, `${electrones.map((n, i) => { const r = 30 + i * 18; return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--line)" stroke-width="1.6"/>${Array.from({ length: n }, (_, k) => { const a = (k * 2 * Math.PI) / n - Math.PI / 2 + i * 0.4; return `<circle cx="${(cx + r * Math.cos(a)).toFixed(1)}" cy="${(cy + r * Math.sin(a)).toFixed(1)}" r="4.2" fill="${c}"/>`; }).join("")}`; }).join("")}
  <circle cx="${cx}" cy="${cy}" r="20" fill="var(--red)"/>${T(cx, cy + 4.5, nucleo, { fs: fit(nucleo, 34, 12, true), b: true, c: "#fff" })}
  ${pie ? T(cx, 172, pie, { fs: fit(pie, W - 20, 13, true), b: true }) : ""}`);
}

// Montaje de bloque: { h (título con número), p: [párrafos], svg, video, extra (html tras los párrafos) }.
const bloque = ({ h, p, svg, video, extra = "" }) => ({ html: `<h3>${h}</h3>${p.map((x) => `<p>${x}</p>`).join("")}${extra}`, ...(svg ? { svg } : {}), ...(video ? { video: { megusta: 0, ...video } } : {}) });
const formula = (f) => `<div class="formula"><span>${f}</span></div>`;
const ej = (nivel) => (q, sol) => ({ nivel, q, sol });
const B = ej("básico"), M = ej("medio"), A = ej("avanzado");
const q4 = (q, o, a, e) => ({ q, o, a, e });

const PROFE = "Saberes básicos de Física y Química de 4º de ESO (RD 217/2022, BOE-A-2022-4975)";
const FUENTE_RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };
const FUENTE_CAT = { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (DOGC)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/9483/1928414.pdf" };

module.exports = { F, D, mapa, flecha, tabla, BASE, fit, marco, T, ficha, pasos, compara, graf, barras, ciclo, escala, fuerzas, rejilla, capas, bloque, formula, B, M, A, q4, PROFE, FUENTE_RD, FUENTE_CAT };
