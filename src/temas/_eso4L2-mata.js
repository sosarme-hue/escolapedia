// Ayudas de dibujo para los temas de Matemáticas A de 4º ESO a nivel libro (lote 2).
// Todos los dibujos son de 260 de ancho, como el resto de bloques, y ajustan la letra
// al espacio disponible para que ningún texto se salga del dibujo.
const { F, D, mapa } = require("./_util");

const tabla = (cab, filas) => `<table class="tb"><thead><tr>${cab.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${filas.map((f) => `<tr>${f.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

const W = 260;
const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--inf)", "var(--bac)", "var(--sun)"];
const esc = (s) => String(s).replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Texto con letra que se reduce si no cabe en «max» unidades de ancho.
function tx(x, y, s, o = {}) {
  const { fs = 12, c = "var(--ink)", a = "middle", w = 700, max = 236, fam = F } = o;
  const largo = [...String(s)].length || 1;
  const f = Math.max(7.5, Math.min(fs, max / (largo * 0.6))).toFixed(1);
  return `<text x="${x}" y="${y}" text-anchor="${a}" font-size="${f}" font-weight="${w}" fill="${c}" ${fam}>${esc(s)}</text>`;
}

const lienzo = (label, cuerpo, h = 180) => `<svg viewBox="0 0 ${W} ${h}" role="img" aria-label="${esc(label)}"><rect width="${W}" height="${h}" rx="14" fill="var(--paper)"/>${cuerpo}</svg>`;

// Pasos de un procedimiento, uno debajo de otro.
function pasos(label, items, titulo = "") {
  const top = titulo ? 30 : 12;
  const h = Math.max(150, top + items.length * 34 + 8);
  const cuerpo = (titulo ? tx(130, 21, titulo, { fs: 13, c: "var(--muted)" }) : "") + items.map((s, i) => {
    const y = top + i * 34, c = COL[i % COL.length];
    return `<rect x="12" y="${y}" width="236" height="28" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"/><circle cx="28" cy="${y + 14}" r="10" fill="${c}"/>${tx(28, y + 18, i + 1, { fs: 12, c: "#fff" })}${tx(44, y + 18, s, { fs: 12, a: "start", max: 198 })}`;
  }).join("");
  return lienzo(label, cuerpo, h);
}

// Tarjetas en rejilla (2 columnas): [título, texto, color?].
function cajas(label, items, titulo = "") {
  const top = titulo ? 30 : 12;
  const filas = Math.ceil(items.length / 2);
  const hc = items.length <= 2 ? 120 : filas >= 3 ? 46 : 64;
  const h = top + filas * (hc + 8) + 4;
  const cuerpo = (titulo ? tx(130, 21, titulo, { fs: 13, c: "var(--muted)" }) : "") + items.map(([t, d, c], i) => {
    c = c || COL[i % COL.length];
    const x = 12 + (i % 2) * 122, y = top + Math.floor(i / 2) * (hc + 8);
    const lineas = [].concat(d || []);
    return `<rect x="${x}" y="${y}" width="114" height="${hc}" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/>${tx(x + 57, y + (lineas.length ? 20 : hc / 2 + 5), t, { fs: 13, c, max: 104 })}${lineas.map((l, k) => tx(x + 57, y + 38 + k * 15 + (hc > 90 ? 10 : 0), l, { fs: 11, w: 400, max: 104 })).join("")}`;
  }).join("");
  return lienzo(label, cuerpo, Math.max(150, h));
}

// Fórmula grande y líneas de explicación debajo.
function formula(label, f, lineas = [], c = "var(--pen)") {
  const cuerpo = `<rect x="14" y="20" width="232" height="62" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${tx(130, 59, f, { fs: 22, c, max: 216, fam: D })}` +
    lineas.map((l, i) => tx(130, 108 + i * 20, l, { fs: 12.5, w: i ? 400 : 700, c: i ? "var(--ink)" : "var(--muted)" })).join("");
  return lienzo(label, cuerpo, Math.max(150, 100 + lineas.length * 20 + 10));
}

// Ejes de coordenadas con cuadrícula, curvas, puntos y segmentos.
// o = { x: [a, b], y: [c, d], curvas: [{ f, c, de, a, t, tx, ty }], puntos: [[x, y, etiqueta, color]], segs: [[x1, y1, x2, y2, color, discontinuo]], zonas: [{ de, a, c }], paso }
let nClip = 0;
function ejes(label, o) {
  o = { ...o, id: o.id || `m4c${++nClip}` };
  const [x0, x1] = o.x, [y0, y1] = o.y;
  const L = 22, R = 248, T = 12, B = (o.h || 180) - 16;
  const sx = (x) => L + ((x - x0) / (x1 - x0)) * (R - L);
  const sy = (y) => B - ((y - y0) / (y1 - y0)) * (B - T);
  const px = o.paso || 1, py = o.pasoY || px;
  let g = "";
  for (let x = Math.ceil(x0 / px) * px; x <= x1 + 1e-9; x += px) g += `<path d="M${sx(x).toFixed(1)} ${T} V${B}" stroke="var(--grid, var(--line))" stroke-width="0.7"/>`;
  for (let y = Math.ceil(y0 / py) * py; y <= y1 + 1e-9; y += py) g += `<path d="M${L} ${sy(y).toFixed(1)} H${R}" stroke="var(--grid, var(--line))" stroke-width="0.7"/>`;
  const ax = x0 <= 0 && x1 >= 0 ? sx(0) : L, ay = y0 <= 0 && y1 >= 0 ? sy(0) : B;
  g += `<path d="M${L} ${ay.toFixed(1)} H${R} M${ax.toFixed(1)} ${T} V${B}" stroke="var(--muted)" stroke-width="1.6"/>`;
  g += tx(R - 4, ay - 4, o.ex || "x", { fs: 11, c: "var(--muted)", a: "end" }) + tx(ax + 5, T + 9, o.ey || "y", { fs: 11, c: "var(--muted)", a: "start" });
  if (o.marcas !== false) {
    const mx = o.marcasX || [], my = o.marcasY || [];
    g += mx.map((x) => tx(sx(x), ay + 12, x, { fs: 9.5, c: "var(--muted)", w: 400 })).join("");
    g += my.map((y) => tx(ax - 4, sy(y) + 3.5, y, { fs: 9.5, c: "var(--muted)", w: 400, a: "end" })).join("");
  }
  for (const z of o.zonas || []) g += `<path d="M${sx(z.de).toFixed(1)} ${T} H${sx(z.a).toFixed(1)} V${B} H${sx(z.de).toFixed(1)} Z" fill="${z.c}" fill-opacity=".14"/>`;
  for (const cv of o.curvas || []) {
    const de = cv.de ?? x0, a = cv.a ?? x1, n = 120;
    let d = "", pen = false;
    for (let i = 0; i <= n; i++) {
      const x = de + ((a - de) * i) / n, y = cv.f(x);
      if (!isFinite(y) || y < y0 - (y1 - y0) || y > y1 + (y1 - y0)) { pen = false; continue; }
      d += `${pen ? "L" : "M"}${sx(x).toFixed(1)} ${sy(Math.max(y0 - 0.5, Math.min(y1 + 0.5, y))).toFixed(1)} `;
      pen = true;
    }
    g += `<path d="${d}" fill="none" stroke="${cv.c || "var(--pen)"}" stroke-width="${cv.w || 2.6}"${cv.disc ? ' stroke-dasharray="5 4"' : ""} clip-path="url(#${o.id || "cl"})"/>`;
    if (cv.t) g += tx(sx(cv.tx), sy(cv.ty), cv.t, { fs: 11.5, c: cv.c || "var(--pen)", a: cv.ta || "middle", max: 120 });
  }
  for (const [xa, ya, xb, yb, c, disc] of o.segs || []) g += `<path d="M${sx(xa).toFixed(1)} ${sy(ya).toFixed(1)} L${sx(xb).toFixed(1)} ${sy(yb).toFixed(1)}" stroke="${c || "var(--muted)"}" stroke-width="2"${disc ? ' stroke-dasharray="4 3"' : ""}/>`;
  for (const [x, y, t, c, pos, hueco] of o.puntos || []) {
    const X = sx(x), Y = sy(y);
    g += `<circle cx="${X.toFixed(1)}" cy="${Y.toFixed(1)}" r="4" fill="${hueco ? "var(--paper)" : c || "var(--red)"}" stroke="${c || "var(--red)"}" stroke-width="2"/>`;
    if (t) {
      const [dx, dy, an] = { n: [0, -8, "middle"], s: [0, 15, "middle"], e: [7, 4, "start"], o: [-7, 4, "end"], ne: [5, -6, "start"], no: [-5, -6, "end"], se: [5, 13, "start"], so: [-5, 13, "end"] }[pos || "ne"];
      g += tx(X + dx, Y + dy, t, { fs: 10.5, c: c || "var(--red)", a: an, max: 110 });
    }
  }
  for (const [x, y, t, c, a] of o.textos || []) g += tx(sx(x), sy(y), t, { fs: 11, c: c || "var(--ink)", a: a || "middle", max: 140 });
  const clip = `<defs><clipPath id="${o.id || "cl"}"><rect x="${L}" y="${T}" width="${R - L}" height="${B - T}"/></clipPath></defs>`;
  return lienzo(label, clip + g, o.h || 180);
}

// Recta numérica con marcas, puntos y tramos (intervalos).
// o = { r: [a, b], marcas: [...], tramos: [{ de, a, c, ci, ca, t }], puntos: [{ x, t, c, abierto }], titulo }
function recta(label, o) {
  const [a, b] = o.r, L = 20, R = 240, y = o.y || 100;
  const s = (x) => L + ((x - a) / (b - a)) * (R - L);
  let g = (o.titulo ? tx(130, 26, o.titulo, { fs: 13, c: "var(--muted)" }) : "") + `<path d="M${L - 8} ${y} H${R + 10}" stroke="var(--ink)" stroke-width="2"/><path d="M${R + 10} ${y} l-7 -4 v8 z" fill="var(--ink)"/>`;
  for (const m of o.marcas || []) {
    const [v, t] = Array.isArray(m) ? m : [m, m];
    g += `<path d="M${s(v).toFixed(1)} ${y - 5} V${y + 5}" stroke="var(--ink)" stroke-width="1.5"/>${tx(s(v), y + 20, t, { fs: 11, w: 400, max: 40 })}`;
  }
  (o.tramos || []).forEach((tr, i) => {
    const c = tr.c || COL[i % COL.length], yy = y - 16 - i * 26;
    const xa = tr.de === -Infinity ? L - 8 : s(tr.de), xb = tr.a === Infinity ? R + 8 : s(tr.a);
    g += `<path d="M${xa.toFixed(1)} ${yy} H${xb.toFixed(1)}" stroke="${c}" stroke-width="5" stroke-linecap="round" opacity=".85"/>`;
    if (tr.de !== -Infinity) g += `<circle cx="${xa.toFixed(1)}" cy="${yy}" r="5" fill="${tr.ci === false ? "var(--paper)" : c}" stroke="${c}" stroke-width="2.5"/>`;
    if (tr.a !== Infinity) g += `<circle cx="${xb.toFixed(1)}" cy="${yy}" r="5" fill="${tr.ca === false ? "var(--paper)" : c}" stroke="${c}" stroke-width="2.5"/>`;
    if (tr.t) g += tx((Math.max(L, xa) + Math.min(R, xb)) / 2, yy - 9, tr.t, { fs: 11.5, c, max: 150 });
  });
  for (const p of o.puntos || []) {
    const c = p.c || "var(--red)";
    g += `<circle cx="${s(p.x).toFixed(1)}" cy="${y}" r="5" fill="${p.abierto ? "var(--paper)" : c}" stroke="${c}" stroke-width="2.5"/>`;
    if (p.t) g += tx(s(p.x), p.abajo ? y + 36 : y - 12, p.t, { fs: 11.5, c, max: 70 });
  }
  if (o.pie) g += tx(130, (o.h || 160) - 14, o.pie, { fs: 12, c: "var(--muted)" });
  return lienzo(label, g, o.h || 160);
}

// Diagrama de barras: datos = [[etiqueta, valor, color?]].
function barras(label, datos, o = {}) {
  const h = o.h || 180, B = h - 26, T = o.titulo ? 34 : 18, max = o.max || Math.max(...datos.map((d) => d[1]));
  const n = datos.length, ancho = (220 / n) * 0.7, paso = 220 / n;
  let g = (o.titulo ? tx(130, 20, o.titulo, { fs: 12.5, c: "var(--muted)" }) : "") + `<path d="M20 ${B} H244" stroke="var(--muted)" stroke-width="1.6"/>`;
  datos.forEach(([t, v, c], i) => {
    const x = 24 + i * paso + (paso - ancho) / 2, hh = ((B - T - 14) * v) / max;
    c = c || o.c || "var(--pen)";
    g += `<rect x="${x.toFixed(1)}" y="${(B - hh).toFixed(1)}" width="${ancho.toFixed(1)}" height="${hh.toFixed(1)}" rx="3" fill="${c}"${o.pegadas ? "" : ""}/>${tx(x + ancho / 2, B - hh - 4, o.fmt ? o.fmt(v) : v, { fs: 10.5, c: "var(--ink)", max: paso })}${tx(x + ancho / 2, B + 14, t, { fs: 10, c: "var(--muted)", w: 400, max: paso + 2 })}`;
  });
  return lienzo(label, g, h);
}

// Diagrama de sectores: datos = [[etiqueta, valor, color?]].
function sectores(label, datos, o = {}) {
  const tot = datos.reduce((s, d) => s + d[1], 0), cx = 80, cy = 92, r = 64;
  let ang = -Math.PI / 2, g = o.titulo ? tx(130, 18, o.titulo, { fs: 12.5, c: "var(--muted)" }) : "";
  datos.forEach(([t, v, c], i) => {
    c = c || COL[i % COL.length];
    const a2 = ang + (2 * Math.PI * v) / tot, big = a2 - ang > Math.PI ? 1 : 0;
    g += `<path d="M${cx} ${cy} L${(cx + r * Math.cos(ang)).toFixed(1)} ${(cy + r * Math.sin(ang)).toFixed(1)} A${r} ${r} 0 ${big} 1 ${(cx + r * Math.cos(a2)).toFixed(1)} ${(cy + r * Math.sin(a2)).toFixed(1)} Z" fill="${c}" stroke="var(--paper)" stroke-width="2"/>`;
    g += `<rect x="160" y="${36 + i * 22}" width="12" height="12" rx="3" fill="${c}"/>${tx(178, 46 + i * 22, `${t}: ${o.fmt ? o.fmt(v, tot) : v}`, { fs: 11, a: "start", max: 76 })}`;
    ang = a2;
  });
  return lienzo(label, g, 180);
}

// Diagrama de árbol de dos etapas: ramas = [[etiqueta, prob, [[etiqueta, prob], ...]], ...].
function arbol(label, ramas, o = {}) {
  const n1 = ramas.length, hojas = ramas.reduce((s, r) => s + r[2].length, 0), h = Math.max(180, hojas * 24 + 24);
  let g = `<circle cx="18" cy="${h / 2}" r="5" fill="var(--ink)"/>`, k = 0;
  ramas.forEach(([t, p, sub], i) => {
    const y1 = ((i + 0.5) * h) / n1, c = COL[i % COL.length];
    g += `<path d="M18 ${h / 2} L92 ${y1}" stroke="${c}" stroke-width="2"/>${tx(55, (h / 2 + y1) / 2 - 5, p, { fs: 10.5, c, max: 46 })}<rect x="92" y="${y1 - 11}" width="44" height="22" rx="6" fill="var(--card)" stroke="${c}" stroke-width="2"/>${tx(114, y1 + 4, t, { fs: 11.5, c, max: 40 })}`;
    sub.forEach(([t2, p2, fin]) => {
      const y2 = 12 + (k + 0.5) * ((h - 24) / hojas);
      g += `<path d="M136 ${y1} L176 ${y2}" stroke="var(--muted)" stroke-width="1.6"/>${tx(160, (y1 + y2) / 2 - 4, p2, { fs: 9.5, c: "var(--muted)", max: 34, a: "end" })}${tx(180, y2 + 4, t2, { fs: 11, a: "start", c: "var(--ink)", max: 34 })}${fin ? tx(250, y2 + 4, fin, { fs: 10, a: "end", c: "var(--red)", max: 40 }) : ""}`;
      k++;
    });
  });
  return lienzo(label, g, h);
}

// Dos (o tres) columnas que se comparan: [[título, [líneas], color]].
function comparar(label, cols, titulo = "") {
  const n = cols.length, top = titulo ? 32 : 14, w = (236 - (n - 1) * 8) / n, nl = Math.max(...cols.map((c) => c[1].length));
  const h = Math.max(150, top + 34 + nl * 18 + 14);
  const g = (titulo ? tx(130, 21, titulo, { fs: 13, c: "var(--muted)" }) : "") + cols.map(([t, ls, c], i) => {
    c = c || COL[i % COL.length];
    const x = 12 + i * (w + 8);
    return `<rect x="${x}" y="${top}" width="${w}" height="${h - top - 12}" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/><rect x="${x}" y="${top}" width="${w}" height="28" rx="10" fill="${c}"/>${tx(x + w / 2, top + 19, t, { fs: 12.5, c: "#fff", max: w - 10 })}${ls.map((l, k) => tx(x + w / 2, top + 48 + k * 18, l, { fs: 11.5, w: 400, max: w - 10 })).join("")}`;
  }).join("");
  return lienzo(label, g, h);
}

// Ecuación tipo balanza: [izquierda, derecha].
function balanza(label, izq, der, pie = "") {
  const g = `<path d="M130 40 V140 M100 150 H160" stroke="var(--muted)" stroke-width="4" stroke-linecap="round"/><path d="M30 60 H230" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/><path d="M40 60 L22 104 H96 L78 60 M182 60 L164 104 H238 L220 60" fill="none" stroke="var(--muted)" stroke-width="1.5"/><polygon points="130,32 122,46 138,46" fill="var(--ink)"/>
    <rect x="18" y="104" width="82" height="26" rx="6" fill="var(--pen)"/><rect x="160" y="104" width="82" height="26" rx="6" fill="var(--red)"/>${tx(59, 122, izq, { fs: 13, c: "#fff", max: 76 })}${tx(201, 122, der, { fs: 13, c: "#fff", max: 76 })}${pie ? tx(130, 168, pie, { fs: 12, c: "var(--muted)" }) : ""}`;
  return lienzo(label, g, 180);
}

module.exports = { F, D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, recta, barras, sectores, arbol, comparar, balanza, COL };
