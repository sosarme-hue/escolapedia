// Ayudas del lote 11 de 4º ESO (Digitalización y Tecnología) para pasar los temas a nivel libro.
// Uso al final de un tema (después de la «Ampliación»):
//   require("./_eso4L11").libro(module.exports, {
//     lectura: { titulo, html },
//     svgs: { "Título h3 existente": svg },   // dibujo para los bloques que no lo tenían
//     tras: { "Título h3": [bloque, ...] }, final: [bloque, ...],
//     videos: { "Título h3": video },         // vídeo de bloque
//     secciones: [4, 5, 6],                   // cuántos apartados tiene cada epígrafe (1.x, 2.x, 3.x)
//     niveles: "bbmm…",                       // nivel de los ejercicios que ya había (b, m, a)
//     ejercicios, ejemplos, errores, cuarta: [...], quiz, cuartaEx: [...], examen, tarjetas,
//     glosario, situacion, fuentes, minutos, objetivos,
//   });
// Los dibujos (260 × 180) ajustan solos el tamaño de la letra para que nunca se salga.
const { F, D } = require("./_util");

const W = 260, H = 180;
const ancho = (s, fs, bold) => [...String(s)].length * fs * (bold ? 0.6 : 0.56);
// Texto que cabe en maxW: reduce la letra y, si hace falta, comprime.
function tx(x, y, s, { fs = 12, maxW = 120, bold = false, color = "var(--ink)", anchor = "middle", font = F } = {}) {
  let size = fs;
  const est = ancho(s, size, bold);
  if (est > maxW) size = Math.max(8, (maxW / est) * size);
  const fin = ancho(s, size, bold);
  const comp = fin > maxW ? ` textLength="${maxW.toFixed(0)}" lengthAdjust="spacingAndGlyphs"` : "";
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size.toFixed(1)}"${bold ? ' font-weight="700"' : ""} fill="${color}" ${font}${comp}>${s}</text>`;
}
// Varias líneas separadas por «|».
const lineas = (x, y, s, o = {}) => String(s).split("|").map((l, i) => tx(x, y + i * ((o.fs || 12) + 3), l, o)).join("");
const marco = (aria, cuerpo) => `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${aria}">
  <rect width="${W}" height="${H}" rx="14" fill="var(--paper)"/>${cuerpo}</svg>`;
const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)", "var(--inf)", "var(--eso)"];
const titulo = (t) => (t ? tx(130, 20, t, { fs: 13, maxW: 236, bold: true, color: "var(--ink)", font: D }) : "");

// Cuadrícula de tarjetas: items [titulo, texto] (texto con «|» para dos líneas).
function cajas(aria, items, { t = "", cols = 2 } = {}) {
  const top = t ? 30 : 12, filas = Math.ceil(items.length / cols);
  const bw = (W - 16 - (cols - 1) * 8) / cols, bh = (H - top - 10 - (filas - 1) * 8) / filas;
  return marco(aria, titulo(t) + items.map(([a, b], i) => {
    const x = 8 + (i % cols) * (bw + 8), y = top + Math.floor(i / cols) * (bh + 8), c = COL[i % COL.length];
    const n = b ? String(b).split("|").length : 0, fsb = 10.5, alto = 14 + n * (fsb + 3);
    const y0 = y + (bh - alto) / 2 + 12;
    return `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
      ${tx(x + bw / 2, y0, a, { fs: 12.5, maxW: bw - 12, bold: true, color: c })}${b ? lineas(x + bw / 2, y0 + 15, b, { fs: fsb, maxW: bw - 12 }) : ""}`;
  }).join(""));
}

// Pasos en cadena con flechas (vertical si hay más de 4, si no horizontal en zigzag de 2 filas).
function flujo(aria, pasos, { t = "" } = {}) {
  const top = t ? 30 : 10, n = pasos.length, gap = 10, bh = (H - top - 8 - (n - 1) * gap) / n;
  return marco(aria, titulo(t) + `<defs><marker id="fl${aria.length}${n}" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>` +
    pasos.map((p, i) => {
      const y = top + i * (bh + gap), c = COL[i % COL.length];
      const fl = i < n - 1 ? `<path d="M130 ${y + bh + 1} V ${y + bh + gap - 1}" stroke="var(--muted)" stroke-width="2" marker-end="url(#fl${aria.length}${n})"/>` : "";
      return `<rect x="20" y="${y}" width="220" height="${bh}" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"/>
        <circle cx="36" cy="${y + bh / 2}" r="${Math.min(10, bh / 2 - 1)}" fill="${c}"/>${tx(36, y + bh / 2 + 4, i + 1, { fs: 11, maxW: 14, bold: true, color: "#fff" })}
        ${tx(141, y + bh / 2 + 4, p, { fs: 11.5, maxW: 186 })}${fl}`;
    }).join(""));
}

// Ciclo: elementos alrededor de un centro.
function ciclo(aria, centro, items) {
  const n = items.length, bw = n > 4 ? 80 : 96, cx = 130, cy = 92, rx = 122 - bw / 2, ry = 64;
  const pos = items.map((_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
  return marco(aria, `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="var(--line)" stroke-width="3" stroke-dasharray="6 5"/>
    <circle cx="${cx}" cy="${cy}" r="26" fill="var(--eso)"/>${tx(cx, cy + 4, centro, { fs: 10.5, maxW: 46, bold: true, color: "#fff" })}` +
    items.map((s, i) => { const [x, y] = pos[i], c = COL[i % COL.length];
      return `<rect x="${(x - bw / 2).toFixed(1)}" y="${(y - 13).toFixed(1)}" width="${bw}" height="26" rx="13" fill="var(--card)" stroke="${c}" stroke-width="2"/>${tx(x.toFixed(1), (y + 4).toFixed(1), s, { fs: 10.5, maxW: bw - 10, bold: true, color: c })}`; }).join(""));
}

// Barras horizontales: datos [etiqueta, valor]; texto opcional de unidad.
function barras(aria, datos, { t = "", unidad = "" } = {}) {
  const top = t ? 32 : 14, n = datos.length, max = Math.max(...datos.map((d) => d[1]));
  const bh = Math.min(22, (H - top - 10) / n - 6);
  return marco(aria, titulo(t) + datos.map(([e, v], i) => {
    const y = top + i * (bh + 6), w = Math.max(4, (v / max) * 110), c = COL[i % COL.length];
    return `${tx(86, y + bh / 2 + 4, e, { fs: 10.5, maxW: 80, anchor: "end" })}<rect x="92" y="${y}" width="${w.toFixed(1)}" height="${bh}" rx="4" fill="${c}"/>
      ${tx(96 + w, y + bh / 2 + 4, `${String(v).replace(".", ",")}${unidad}`, { fs: 10.5, maxW: 252 - 96 - w, anchor: "start", bold: true, color: c })}`;
  }).join(""));
}

// Dos columnas comparadas: [titulo, [frases]].
function comparar(aria, [ta, la], [tb, lb]) {
  const col = (x, t, l, c) => `<rect x="${x}" y="12" width="118" height="156" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
    <rect x="${x}" y="12" width="118" height="28" rx="12" fill="${c}"/>${tx(x + 59, 31, t, { fs: 12.5, maxW: 108, bold: true, color: "#fff" })}
    ${l.map((s, i) => tx(x + 59, 62 + i * Math.min(24, 98 / Math.max(1, l.length - 1)), s, { fs: 10.5, maxW: 106 })).join("")}`;
  return marco(aria, col(8, ta, la, "var(--pen)") + col(134, tb, lb, "var(--red)"));
}

// Capas apiladas (de arriba abajo): items [titulo, texto].
function capas(aria, items, { t = "" } = {}) {
  const top = t ? 30 : 10, n = items.length, gap = 5, bh = (H - top - 8 - (n - 1) * gap) / n;
  return marco(aria, titulo(t) + items.map(([a, b], i) => {
    const y = top + i * (bh + gap), m = 8 + i * 6, c = COL[i % COL.length];
    return `<rect x="${m}" y="${y}" width="${W - 2 * m}" height="${bh}" rx="7" fill="${c}" fill-opacity=".16" stroke="${c}" stroke-width="2"/>
      ${tx(m + 8, y + bh / 2 + 4, a, { fs: 11.5, maxW: 88, bold: true, color: c, anchor: "start" })}${b ? tx(W - m - 8, y + bh / 2 + 4, b, { fs: 10.5, maxW: W - 2 * m - 112, anchor: "end" }) : ""}`;
  }).join(""));
}

// Estrella: un centro con 4 a 6 ideas alrededor.
function estrella(aria, centro, items) {
  const n = items.length, pos = items.map((_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return [130 + 92 * Math.cos(a), 92 + 64 * Math.sin(a)]; });
  return marco(aria, pos.map(([x, y]) => `<path d="M130 92 L ${x.toFixed(1)} ${y.toFixed(1)}" stroke="var(--line)" stroke-width="2.5"/>`).join("") +
    `<rect x="82" y="76" width="96" height="32" rx="16" fill="var(--eso)"/>${tx(130, 96, centro, { fs: 11.5, maxW: 86, bold: true, color: "#fff" })}` +
    items.map((s, i) => { const [x, y] = pos[i], c = COL[i % COL.length];
      return `<rect x="${(x - 42).toFixed(1)}" y="${(y - 12).toFixed(1)}" width="84" height="24" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"/>${tx(x.toFixed(1), (y + 4).toFixed(1), s, { fs: 10.5, maxW: 76, bold: true, color: c })}`; }).join(""));
}

// Tabla dentro del dibujo: cabecera y filas cortas.
function rejilla(aria, cab, filas, { t = "" } = {}) {
  const top = t ? 30 : 10, nc = cab.length, cw = (W - 16) / nc, rh = Math.min(24, (H - top - 8) / (filas.length + 1));
  const celda = (s, x, y, o) => tx(x + cw / 2, y + rh / 2 + 4, s, { fs: 10.5, maxW: cw - 8, ...o });
  return marco(aria, titulo(t) + `<rect x="8" y="${top}" width="${W - 16}" height="${rh}" rx="6" fill="var(--eso)"/>` +
    cab.map((c, j) => celda(c, 8 + j * cw, top, { bold: true, color: "#fff" })).join("") +
    filas.map((f, i) => { const y = top + (i + 1) * rh;
      return `<rect x="8" y="${y}" width="${W - 16}" height="${rh}" fill="${i % 2 ? "var(--card)" : "var(--paper)"}" stroke="var(--line)"/>` + f.map((c, j) => celda(c, 8 + j * cw, y, { bold: j === 0, color: j === 0 ? "var(--pen)" : "var(--ink)" })).join(""); }).join(""));
}

// --- Montaje del tema a nivel libro ---
const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const palabras = (T) => T.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
const buscar = (T, t) => { const i = T.bloques.findIndex((b) => b.html.includes(`<h3>${t}</h3>`)); if (i < 0) throw new Error(`libro: no encuentro «${t}» en «${T.titulo}»`); return i; };
const conVideo = (b) => (b.video ? { ...b, video: { megusta: 0, ...b.video } } : b);
const NIV = { b: "básico", m: "medio", a: "avanzado" };
// Un texto con saltos de línea es código: se muestra en <pre> conservando la sangría.
const codigo = (s) => (typeof s === "string" && s.includes("\n") ? `<pre>${s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>` : s);

function libro(T, o) {
  if (o.lectura) T.lectura = o.lectura;
  for (const [t, svg] of Object.entries(o.svgs || {})) { const b = T.bloques[buscar(T, t)]; if (b.svg) throw new Error(`libro: «${t}» ya tenía dibujo`); b.svg = svg; }
  for (const [t, v] of Object.entries(o.videos || {})) T.bloques[buscar(T, t)].video = { megusta: 0, ...v };
  const tras = Object.entries(o.tras || {}).map(([t, nuevos]) => [buscar(T, t), nuevos]).sort((a, b) => b[0] - a[0]);
  for (const [i, nuevos] of tras) T.bloques.splice(i + 1, 0, ...nuevos.map(conVideo));
  if (o.final) T.bloques.push(...o.final.map(conVideo));
  // Numeración 1.1, 1.2, 2.1…
  const sec = o.secciones || [T.bloques.length];
  if (sec.reduce((a, b) => a + b, 0) !== T.bloques.length) throw new Error(`libro: secciones ${sec} no suman ${T.bloques.length} en «${T.titulo}»`);
  let k = 0;
  sec.forEach((n, s) => { for (let j = 1; j <= n; j++, k++) T.bloques[k].html = T.bloques[k].html.replace(/<h3>/, `<h3>${s + 1}.${j} `); });
  // Ejercicios por niveles.
  if (o.niveles) T.ejercicios.forEach((e, i) => { e.nivel = NIV[o.niveles[i]]; });
  if (o.ejercicios) T.ejercicios.push(...o.ejercicios.map((e) => ({ ...e, sol: codigo(e.sol) })));
  if (o.ejemplos) T.ejemplos.push(...o.ejemplos.map((e) => ({ ...e, resultado: codigo(e.resultado) })));
  if (o.errores) T.errores.push(...o.errores);
  // Cuarta opción en las preguntas que tenían tres: se coloca en distinta posición para no dar pistas.
  const cuarta = (lista, extra) => (extra || []).forEach((op, i) => { const q = lista[i], p = (i * 3 + 1) % 4; q.o.splice(p, 0, op); if (p <= q.a) q.a++; });
  cuarta(T.quiz, o.cuarta); cuarta(T.examen, o.cuartaEx);
  if (o.quiz) T.quiz.push(...o.quiz);
  if (o.examen) T.examen.push(...o.examen);
  if (o.tarjetas) T.tarjetas.push(...o.tarjetas);
  for (const k2 of ["glosario", "situacion", "minutos", "revisado"]) if (o[k2]) T[k2] = o[k2];
  if (o.objetivos) T.objetivos.push(...o.objetivos);
  if (o.fuentes) T.fuentes.push(...o.fuentes);
  if (o.familias) T.familias.push(...o.familias);
  if (o.ideas) T.profesores.ideas.push(...o.ideas);
  if (o.saberes) T.profesores.saberes = o.saberes;
  // Comprobaciones del formato.
  const cuenta = (n) => T.ejercicios.filter((e) => e.nivel === n).length;
  const avisos = [];
  const w = palabras(T);
  if (w < 2000 || w > 3000) avisos.push(`${w} palabras`);
  if (T.bloques.length < 10 || T.bloques.length > 16) avisos.push(`${T.bloques.length} bloques`);
  if (T.bloques.some((b) => !b.svg)) avisos.push("bloques sin dibujo");
  if (T.ejercicios.length < 30 || T.ejercicios.length > 40 || T.ejercicios.some((e) => !e.nivel)) avisos.push(`${T.ejercicios.length} ejercicios (${cuenta("básico")}/${cuenta("medio")}/${cuenta("avanzado")})`);
  if (T.quiz.length !== 20 || T.quiz.some((q) => q.o.length !== 4)) avisos.push(`quiz ${T.quiz.length}`);
  if (T.examen.length !== 8) avisos.push(`examen ${T.examen.length}`);
  if (T.tarjetas.length !== 12) avisos.push(`tarjetas ${T.tarjetas.length}`);
  if (T.ejemplos.length !== 6 || T.errores.length !== 6) avisos.push(`ejemplos ${T.ejemplos.length} errores ${T.errores.length}`);
  if (!T.glosario || T.glosario.length < 12 || T.glosario.length > 20) avisos.push("glosario");
  if (avisos.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro] ${T.titulo}: ${avisos.join(", ")}`);
  return T;
}

module.exports = { libro, palabras, tx, cajas, flujo, ciclo, barras, comparar, capas, estrella, rejilla, NIV };
