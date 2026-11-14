// Ayudas para los temas de 1º ESO a nivel libro (lote 2: Matemáticas y Programación y robótica).
// Reutiliza las ayudas de dibujo de 3º/4º (lienzo de 260 de ancho, letra que se ajusta al hueco),
// los vídeos de 1º (_eso1c-videos.js) y añade bloques de Scratch y diagramas de flujo.
const base = require("./_eso3L1");
const { tx, lienzo, COL, D } = base;
const { vb, vg } = require("./_eso1c");

const C = "1-eso";
const REV = "2026-11-14";

// Colores de las categorías de bloques de Scratch.
const CAT = {
  eventos: "#d9a400", movimiento: "#4c97ff", apariencia: "#9966ff", sonido: "#cf63cf", control: "#e8901a",
  sensores: "#4aa8cc", operadores: "#4fae4f", variables: "#ee7d16", lapiz: "#0fa37f", bloques: "#ff6680", robot: "#0e9aa7",
};

// Pila de bloques de Scratch: filas = [[texto, categoría, sangría]]. Las filas de «control»
// seguidas de filas con más sangría se dibujan como bloque en C que las abraza.
function scratch(label, filas, titulo = "") {
  const top = titulo ? 30 : 14, paso = 27, x0 = 16, dent = 16;
  const extra = filas.reduce((s, f, i) => s + (cierra(filas, i) ? 1 : 0), 0);
  const h = Math.max(150, top + (filas.length + extra) * paso + 12);
  let g = titulo ? tx(130, 21, titulo, { fs: 13, c: "var(--muted)" }) : "";
  let y = top, ys = [];
  filas.forEach(([s, cat, n = 0], i) => {
    ys[i] = y;
    y += paso;
    for (let k = 0; k < cierra(filas, i); k++) y += paso;
  });
  // Primero los brazos de los bloques en C, para que queden debajo.
  filas.forEach(([s, cat, n = 0], i) => {
    const j = ultimoDentro(filas, i);
    if (j > i) {
      const c = CAT[cat] || "var(--pen)", x = x0 + n * dent, fin = ys[j] + paso;
      g += `<rect x="${x}" y="${ys[i]}" width="12" height="${fin - ys[i] + 16}" fill="${c}"/><rect x="${x}" y="${fin}" width="${Math.min(120, 226 - x)}" height="16" rx="4" fill="${c}"/>`;
    }
  });
  filas.forEach(([s, cat, n = 0], i) => {
    const c = CAT[cat] || "var(--pen)", x = x0 + n * dent, w = 228 - n * dent;
    const sombrero = cat === "eventos" && i === 0;
    g += `<rect x="${x}" y="${ys[i]}" width="${w}" height="23" rx="${sombrero ? 10 : 5}" fill="${c}"/>${tx(x + 9, ys[i] + 16, s, { fs: 11.5, c: "#fff", a: "start", max: w - 16 })}`;
  });
  return lienzo(label, g, h);
}
function ultimoDentro(filas, i) {
  const [, cat, n = 0] = filas[i];
  if (cat !== "control" && cat !== "robot") return i;
  let j = i;
  while (j + 1 < filas.length && (filas[j + 1][2] || 0) > n) j++;
  return j;
}
// Número de pies de bloque en C que se cierran justo después de la fila i.
function cierra(filas, i) {
  let k = 0;
  for (let a = 0; a <= i; a++) if (ultimoDentro(filas, a) === i && ultimoDentro(filas, a) > a) k++;
  return k;
}

// Diagrama de flujo vertical: nodos = [[texto, tipo]], tipo: ini | proc | dec | es.
// En un nodo «dec» se puede dar [texto, "dec", "sí →", "no ↓"] y se marca la salida lateral.
function flujo(label, nodos, titulo = "", o = {}) {
  const top = titulo ? 30 : 12, paso = 40, alto = 28;
  const h = Math.max(150, top + nodos.length * paso + 4);
  let g = titulo ? tx(130, 21, titulo, { fs: 13, c: "var(--muted)" }) : "";
  nodos.forEach(([s, tipo, si, no], i) => {
    const y = top + i * paso, cx = 110, c = COL[i % COL.length];
    if (i > 0) g += `<path d="M${cx} ${y - paso + alto} V${y}" stroke="var(--muted)" stroke-width="2"/><path d="M${cx - 4} ${y - 6} L${cx} ${y} L${cx + 4} ${y - 6}" fill="none" stroke="var(--muted)" stroke-width="2"/>`;
    if (tipo === "ini") g += `<rect x="${cx - 60}" y="${y}" width="120" height="${alto}" rx="14" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.4"/>`;
    else if (tipo === "dec") g += `<polygon points="${cx},${y - 2} ${cx + 78},${y + alto / 2} ${cx},${y + alto + 2} ${cx - 78},${y + alto / 2}" fill="var(--card)" stroke="var(--sun)" stroke-width="2.4"/>`;
    else if (tipo === "es") g += `<polygon points="${cx - 58},${y} ${cx + 70},${y} ${cx + 58},${y + alto} ${cx - 70},${y + alto}" fill="var(--card)" stroke="var(--inf)" stroke-width="2.4"/>`;
    else g += `<rect x="${cx - 70}" y="${y}" width="140" height="${alto}" rx="4" fill="var(--card)" stroke="${c}" stroke-width="2.2"/>`;
    g += tx(cx, y + 18, s, { fs: 11.5, max: tipo === "dec" ? 112 : 130 });
    if (tipo === "dec" && si) g += `<path d="M${cx + 78} ${y + alto / 2} H${244}" stroke="var(--muted)" stroke-width="2"/>${tx(216, y + alto / 2 - 5, si, { fs: 10, c: "var(--leaf)", max: 54 })}`;
    if (tipo === "dec" && no) g += tx(cx + 22, y + alto + 11, no, { fs: 10, c: "var(--red)", max: 40 });
  });
  // Flecha de vuelta (bucle) por la izquierda: del nodo a al nodo b.
  if (o.vuelta) {
    const [a, b] = o.vuelta, ya = top + a * paso + alto / 2, yb = top + b * paso + alto / 2, xb = nodos[b][1] === "dec" ? 32 : 40;
    g += `<path d="M40 ${ya} H18 V${yb} H${xb}" fill="none" stroke="var(--pen)" stroke-width="2"/><path d="M${xb - 6} ${yb - 4} L${xb} ${yb} L${xb - 6} ${yb + 4}" fill="none" stroke="var(--pen)" stroke-width="2"/>`;
  }
  return lienzo(label, g, h);
}

// Escenario de Scratch (480 × 360 a escala) con ejes y puntos [[x, y, texto, color]].
function escenario(label, puntos = [], o = {}) {
  const L = 22, T = 14, W = 216, H = 162, sx = (x) => L + ((x + 240) / 480) * W, sy = (y) => T + ((180 - y) / 360) * H;
  let g = `<rect x="${L}" y="${T}" width="${W}" height="${H}" rx="6" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>`;
  g += `<path d="M${L} ${sy(0)} H${L + W} M${sx(0)} ${T} V${T + H}" stroke="var(--line)" stroke-width="1.4" stroke-dasharray="4 3"/>`;
  g += tx(L + W - 4, sy(0) - 4, "x", { fs: 10, c: "var(--muted)", a: "end" }) + tx(sx(0) + 5, T + 11, "y", { fs: 10, c: "var(--muted)", a: "start" });
  if (o.marcas !== false) g += tx(L + 2, sy(0) + 12, "−240", { fs: 9, c: "var(--muted)", a: "start", w: 400 }) + tx(L + W - 2, sy(0) + 12, "240", { fs: 9, c: "var(--muted)", a: "end", w: 400 }) + tx(sx(0) + 4, T + H - 4, "−180", { fs: 9, c: "var(--muted)", a: "start", w: 400 }) + tx(sx(0) + 4, T + 22, "180", { fs: 9, c: "var(--muted)", a: "start", w: 400 });
  for (const [x, y, t, c] of puntos) g += `<circle cx="${sx(x).toFixed(1)}" cy="${sy(y).toFixed(1)}" r="5" fill="${c || "var(--red)"}"/>${t ? tx(sx(x) + (x > 120 ? -7 : 7), sy(y) - 7, t, { fs: 10.5, c: c || "var(--red)", a: x > 120 ? "end" : "start", max: 100 }) : ""}`;
  for (const [x1, y1, x2, y2, c] of o.flechas || []) g += `<path d="M${sx(x1).toFixed(1)} ${sy(y1).toFixed(1)} L${sx(x2).toFixed(1)} ${sy(y2).toFixed(1)}" stroke="${c || "var(--pen)"}" stroke-width="2.4" marker-end="url(#fl1L2)"/>`;
  const defs = `<defs><marker id="fl1L2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="var(--pen)"/></marker></defs>`;
  return lienzo(label, defs + g, 190);
}

// Ventana de código o pseudocódigo: lineas = [[texto, sangría, color]].
function codigo(label, lineas, titulo = "") {
  const top = titulo ? 30 : 14, paso = 18, h = Math.max(150, top + lineas.length * paso + 26);
  let g = titulo ? tx(130, 21, titulo, { fs: 13, c: "var(--muted)" }) : "";
  g += `<rect x="12" y="${top}" width="236" height="${lineas.length * paso + 16}" rx="8" fill="#1e293b"/>`;
  lineas.forEach(([s, n = 0, c = "#e2e8f0"], i) => { g += tx(24 + n * 18, top + 20 + i * paso, s, { fs: 11, c, a: "start", fam: "ui-monospace,Menlo,Consolas,monospace", max: 216 - n * 18 }); });
  return lienzo(label, g, h);
}
const PS = { clave: "#fcd34d", ini: "#93c5fd", ok: "#86efac", mal: "#fca5a5", txt: "#e2e8f0", com: "#94a3b8" };
const { wiki } = require("./_eso2a");

const DECRET_MAT = base.DECRET;
// Figura resumen con la columna de texto más ancha.
const resumen = (label, rows, x2 = 160) => base.resumen(label, rows, x2);

module.exports = { ...base, C, REV, vb, vg, CAT, scratch, flujo, escenario, codigo, PS, wiki, resumen, DECRET: DECRET_MAT, D };
