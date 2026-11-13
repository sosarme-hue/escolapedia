// Ayudas del lote 4 de 4º ESO (Geografía e Historia, nivel libro).
// Dibujos SVG de 260×180 generados a partir de datos, con el texto partido en líneas para que nunca se salga.
const { F, D } = require("./_util");

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)", "var(--inf)", "var(--soc, #c2410c)"];
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Parte un texto en líneas de como mucho n caracteres.
function partir(t, n) {
  const out = [];
  let l = "";
  for (const w of String(t).split(/\s+/)) {
    if (!l) l = w;
    else if ((l + " " + w).length <= n) l += " " + w;
    else { out.push(l); l = w; }
  }
  if (l) out.push(l);
  return out;
}
// Ancho aproximado de un carácter según el tamaño de letra.
const cw = (fs) => fs * 0.56;
// Texto en varias líneas centrado en (x, y) dentro de un ancho w.
function txt(t, x, y, w, fs = 11, extra = "") {
  const ls = partir(t, Math.max(4, Math.floor(w / cw(fs))));
  const y0 = y - ((ls.length - 1) * fs * 1.15) / 2;
  return ls.map((l, i) => `<text x="${x}" y="${(y0 + i * fs * 1.15 + fs * 0.35).toFixed(1)}" text-anchor="middle" font-size="${fs}" ${extra}>${esc(l)}</text>`).join("");
}
const marco = (aria, body) => `<svg viewBox="0 0 260 180" role="img" aria-label="${esc(aria)}"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g ${F} fill="var(--ink)">${body}</g></svg>`;
const titulo = (t) => (t ? txt(t, 130, 9 + 7 * partir(t, Math.floor(236 / cw(12))).length, 236, 12, `font-weight="700" ${D}`) : "");
// Altura que ocupa el título (para colocar debajo el resto).
const alto = (t, sin = 10) => (t ? 14 + 14 * partir(t, Math.floor(236 / cw(12))).length : sin);

// Línea del tiempo: [[fecha, texto], ...] (2 a 5 hitos).
function linea(t, hitos) {
  const n = hitos.length, x0 = 28, x1 = 232, step = n > 1 ? (x1 - x0) / (n - 1) : 0;
  const w = Math.min(96, (x1 - x0) / Math.max(1, n - 1) * 1.7);
  const body = hitos.map(([f, d], i) => {
    const x = n > 1 ? x0 + step * i : 130, up = i % 2 === 0, c = COL[i % COL.length];
    const xc = Math.min(260 - w / 2 - 4, Math.max(w / 2 + 4, x));
    return `<circle cx="${x}" cy="98" r="6" fill="${c}"/><path d="M${x} ${up ? 92 : 104} V ${up ? 78 : 118}" stroke="${c}" stroke-width="2"/>`
      + txt(f, xc, up ? 68 : 128, w, 12, `font-weight="700" ${D}`) + txt(d, xc, up ? 48 : 150, w, 9.5, 'fill="var(--muted)"');
  }).join("");
  return marco(`Línea del tiempo: ${t}`, `<path d="M14 98 H 246" stroke="var(--ink)" stroke-width="3"/>${body}${t && n < 5 ? "" : ""}`);
}

// Cajas: 2 a 6 conceptos [título, texto]. Se colocan en rejilla.
function cajas(t, items) {
  const n = items.length, cols = n <= 2 ? n : n <= 4 ? 2 : 3, rows = Math.ceil(n / cols);
  const top = alto(t), gap = 8, W = (240 - gap * (cols - 1)) / cols, H = (180 - top - 10 - gap * (rows - 1)) / rows;
  const body = items.map(([a, b], i) => {
    const r = Math.floor(i / cols), c = i % cols, x = 10 + c * (W + gap), y = top + r * (H + gap), col = COL[i % COL.length];
    const fs = W < 90 ? 9 : 10;
    const la = partir(a, Math.floor((W - 8) / cw(11))).length;
    return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${W.toFixed(1)}" height="${H.toFixed(1)}" rx="9" fill="var(--card)" stroke="${col}" stroke-width="2"/>`
      + txt(a, x + W / 2, y + 8 + la * 6.5, W - 8, 11, `font-weight="700" fill="${col}"`)
      + (b ? txt(b, x + W / 2, y + 12 + la * 13 + (H - 16 - la * 13) / 2, W - 10, fs) : "");
  }).join("");
  return marco(`${t || "Esquema"}: ${items.map((x) => x[0]).join(", ")}`, titulo(t) + body);
}

// Cadena de causas y consecuencias, de arriba abajo: ["paso", ...] (3 a 5).
function flujo(t, pasos) {
  const n = pasos.length, top = alto(t, 8), H = (172 - top - (n - 1) * 10) / n;
  const body = pasos.map((p, i) => {
    const y = top + i * (H + 10), c = COL[i % COL.length];
    return `<rect x="30" y="${y.toFixed(1)}" width="200" height="${H.toFixed(1)}" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"/>` + txt(p, 130, y + H / 2, 188, H < 26 ? 9.5 : 10.5)
      + (i < n - 1 ? `<path d="M130 ${(y + H + 1).toFixed(1)} v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/>` : "");
  }).join("");
  return marco(`${t || "Proceso"}: ${pasos.join(" → ")}`, titulo(t) + body);
}

// Gráfico de barras: [[etiqueta, valor], ...] (2 a 7). unidad se añade al número.
function barras(t, datos, unidad = "") {
  const n = datos.length, max = Math.max(...datos.map((d) => d[1])), top = alto(t) + 8, base = 146, W = 220 / n;
  const body = datos.map(([e, v], i) => {
    const h = (v / max) * (base - top - 14), x = 20 + i * W, c = COL[i % COL.length];
    return `<rect x="${(x + W * 0.15).toFixed(1)}" y="${(base - h).toFixed(1)}" width="${(W * 0.7).toFixed(1)}" height="${h.toFixed(1)}" rx="3" fill="${c}"/>`
      + txt(`${v.toLocaleString("es-ES")}${unidad}`, x + W / 2, base - h - 7, W + 6, 9.5, 'font-weight="700"')
      + txt(e, x + W / 2, base + 14, W - 2, n > 5 ? 8.5 : 9.5, 'fill="var(--muted)"');
  }).join("");
  return marco(`Gráfico: ${t}. ${datos.map((d) => `${d[0]} ${d[1]}${unidad}`).join(", ")}`, titulo(t) + `<path d="M16 ${base} H 244" stroke="var(--ink)" stroke-width="2"/>` + body);
}

// Comparación en dos columnas: [títuloA, [puntos]], [títuloB, [puntos]].
function versus(t, [ta, a], [tb, b]) {
  const top = alto(t, 8);
  const col = (x, tt, xs, c) => {
    const H = (172 - top - 26) / Math.max(xs.length, 1);
    return `<rect x="${x}" y="${top}" width="114" height="${172 - top}" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/>` + txt(tt, x + 57, top + 13, 106, 11, `font-weight="700" fill="${c}"`)
      + xs.map((p, i) => txt(p, x + 57, top + 26 + H * i + H / 2, 104, 9.5)).join("");
  };
  return marco(`${t || "Comparación"}: ${ta} frente a ${tb}`, titulo(t) + col(10, ta, a, "var(--pen)") + col(136, tb, b, "var(--red)"));
}

// Pirámide de grupos sociales (de arriba abajo): [[nombre, nota], ...].
function piramide(t, capas) {
  const n = capas.length, top = alto(t, 12), H = (170 - top) / n;
  const body = capas.map(([a, b], i) => {
    const y = top + i * H, w0 = 40 + (i * 200) / n, w1 = 40 + ((i + 1) * 200) / n, c = COL[i % COL.length];
    return `<path d="M${130 - w0 / 2} ${y.toFixed(1)} H ${130 + w0 / 2} L ${130 + w1 / 2} ${(y + H).toFixed(1)} H ${130 - w1 / 2} Z" fill="${c}" opacity=".22" stroke="${c}" stroke-width="2"/>`
      + txt(b ? `${a}: ${b}` : a, 130, y + H / 2, Math.max(60, w0 + 10), 9.5, 'font-weight="700"');
  }).join("");
  return marco(`${t || "Pirámide"}: ${capas.map((c) => c[0]).join(", ")}`, titulo(t) + body);
}

// Centro y ramas (2 a 6): rueda de ideas alrededor de un concepto.
function rueda(centro, ramas) {
  const n = ramas.length;
  const pos = ramas.map((_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return [130 + Math.cos(a) * 88, 92 + Math.sin(a) * 62]; });
  const body = pos.map(([x, y], i) => `<path d="M130 92 L ${x.toFixed(1)} ${y.toFixed(1)}" stroke="var(--line)" stroke-width="2.5"/>`).join("")
    + `<ellipse cx="130" cy="92" rx="48" ry="24" fill="var(--pen)"/>` + txt(centro, 130, 92, 86, 10.5, 'font-weight="700" fill="#fff"')
    + pos.map(([x, y], i) => { const c = COL[(i + 1) % COL.length]; const xc = Math.min(212, Math.max(48, x)); const yc = Math.min(160, Math.max(20, y)); return `<rect x="${(xc - 40).toFixed(1)}" y="${(yc - 15).toFixed(1)}" width="80" height="30" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"/>` + txt(ramas[i], xc, yc, 74, 9); }).join("");
  return marco(`${centro}: ${ramas.join(", ")}`, body);
}

module.exports = { partir, txt, marco, linea, cajas, flujo, barras, versus, piramide, rueda };
