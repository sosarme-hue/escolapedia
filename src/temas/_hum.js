// Dibujos parametrizables para los temas de humanidades de 4º ESO (Geografía e Historia, Economía, Latín, Religión, FOPP).
// Cada tema les pasa sus propios datos; el fichero empieza por «_», así que build.js no lo trata como tema.
const { F, D } = require("./_util");

const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const caja = (label, inner, vb = "0 0 260 180") => {
  const [, , w, h] = vb.split(" ");
  return `<svg viewBox="${vb}" role="img" aria-label="${esc(label)}">
    <rect width="${w}" height="${h}" rx="14" fill="var(--paper)"/>
    ${inner}
  </svg>`;
};

// Línea de tiempo pequeña: items [[año, texto], ...] (máx. 4).
function linea(label, items, color = "var(--red)") {
  const n = items.length, x0 = 34, x1 = 226, paso = n > 1 ? (x1 - x0) / (n - 1) : 0;
  return caja(label, `<path d="M18 90 H 242" stroke="var(--ink)" stroke-width="3"/>
    ${items.map(([y, t], i) => {
      const x = x0 + i * paso, up = i % 2 === 0;
      const lines = String(t).split("|");
      const [tx, an] = n > 1 && i === 0 ? [x - 20, "start"] : n > 1 && i === n - 1 ? [x + 20, "end"] : [x, "middle"];
      return `<circle cx="${x}" cy="90" r="7" fill="${color}"/><text x="${x}" y="${up ? 62 : 126}" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${D}>${y}</text>${lines.map((l, j) => `<text x="${tx}" y="${(up ? 30 : 144) + j * 14}" text-anchor="${an}" font-size="11" fill="var(--muted)" ${F}>${esc(l)}</text>`).join("")}`;
    }).join("")}`);
}

// Comparación en dos columnas: [titulo, [líneas], color].
function dos(label, a, b) {
  const col = ([t, ls, c], x) => `<rect x="${x}" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
    <text x="${x + 55}" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="${c}" ${D}>${esc(t)}</text>
    ${ls.map((l, i) => `<text x="${x + 55}" y="${68 + i * 22}" text-anchor="middle" font-size="${l.length > 17 ? 11 : 12}" fill="var(--ink)" ${F}>${esc(l)}</text>`).join("")}`;
  return caja(label, col(a, 14) + col(b, 136));
}

// Centro con satélites: items [[texto, color], ...] (máx. 6).
function rueda(label, centro, items, colorCentro = "var(--pen)") {
  const pos = items.length === 4 ? [[56, 34], [204, 34], [56, 156], [204, 156]] : items.length === 5 ? [[56, 30], [204, 30], [54, 110], [206, 110], [130, 162]] : [[56, 30], [204, 30], [54, 96], [206, 96], [56, 160], [204, 160]];
  const c = String(centro).split("|");
  return caja(label, `<g ${F} font-size="11.5" font-weight="700" text-anchor="middle">
    ${items.map(([t, col], i) => { const [x, y] = pos[i]; return `<path d="M${x} ${y} L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="${x - 48}" y="${y - 13}" width="96" height="24" rx="12" fill="var(--card)" stroke="${col}" stroke-width="2"/><text x="${x}" y="${y + 4}" fill="var(--ink)"${t.length > 12 ? ' font-size="10.5"' : ""}>${esc(t)}</text>`; }).join("")}
    <circle cx="130" cy="96" r="34" fill="${colorCentro}"/>
    ${c.map((l, i) => `<text x="130" y="${100 - (c.length - 1) * 7 + i * 14}" fill="#fff" font-size="${Math.max(...c.map((x) => x.length)) > 8 ? 9.5 : 11}">${esc(l)}</text>`).join("")}
  </g>`);
}

// Filas apiladas: [[etiqueta corta, texto, color], ...] (máx. 5).
function filas(label, rows) {
  const h = Math.min(30, Math.floor(150 / rows.length) - 4);
  return caja(label, `<g ${F}>${rows.map(([k, t, c], i) => {
    const y = 14 + i * (h + 4) + (150 - rows.length * (h + 4)) / 2;
    return `<rect x="14" y="${y}" width="232" height="${h}" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"/><rect x="14" y="${y}" width="80" height="${h}" rx="8" fill="${c}"/><text x="54" y="${y + h / 2 + 4}" text-anchor="middle" font-size="${k.length > 11 ? 10.5 : 11.5}" font-weight="700" fill="#fff">${esc(k)}</text><text x="102" y="${y + h / 2 + 4}" font-size="${t.length > 26 ? 9.5 : t.length > 22 ? 10.5 : 11.5}" fill="var(--ink)">${esc(t)}</text>`;
  }).join("")}</g>`);
}

// Pirámide de niveles, de arriba abajo: [[texto, color], ...] (3 o 4).
function piramide(label, niveles) {
  const n = niveles.length, top = 18, base = 164, h = (base - top) / n;
  return caja(label, `${niveles.map(([t, c], i) => {
    const y0 = top + i * h, y1 = y0 + h, w0 = (i / n) * 220, w1 = ((i + 1) / n) * 220;
    return `<path d="M${130 - w0 / 2} ${y0} H ${130 + w0 / 2} L ${130 + w1 / 2} ${y1} H ${130 - w1 / 2} Z" fill="${c}" stroke="var(--ink)" stroke-width="2"/><text x="130" y="${y0 + h / 2 + (i === 0 ? 10 : 5)}" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)" ${F}>${esc(t)}</text>`;
  }).join("")}`);
}

// Cadena de pasos con flechas en zigzag: ["paso", ...] (máx. 6).
function flujo(label, pasos, color = "var(--pen)") {
  const pos = pasos.length <= 3 ? pasos.map((_, i) => [44 + i * 86, 90]) : pasos.map((_, i) => [48 + (i % 3) * 82, i < 3 ? 52 : 128]);
  return caja(label, `<defs><marker id="fl-${label.length}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>
    <g ${F} text-anchor="middle" font-size="11" font-weight="700">
    ${pos.slice(1).map(([x, y], i) => { const [px, py] = pos[i]; return py === y ? `<path d="M${px + 36} ${y} H ${x - 38}" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl-${label.length})"/>` : `<path d="M${px} ${py + 20} C ${px} ${py + 46}, ${x} ${y - 46}, ${x} ${y - 22}" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl-${label.length})"/>`; }).join("")}
    ${pasos.map((p, i) => { const [x, y] = pos[i]; const ls = String(p).split("|"); return `<rect x="${x - 36}" y="${y - 18}" width="72" height="36" rx="10" fill="var(--card)" stroke="${color}" stroke-width="2"/><circle cx="${x - 36}" cy="${y - 18}" r="10" fill="${color}"/><text x="${x - 36}" y="${y - 14.5}" fill="#fff" font-size="10">${i + 1}</text>${ls.map((l, j) => `<text x="${x}" y="${y + 4 - (ls.length - 1) * 6 + j * 12}" fill="var(--ink)">${esc(l)}</text>`).join("")}`; }).join("")}
  </g>`);
}

// Barras horizontales: [[etiqueta, valor, color, texto valor], ...] (máx. 5).
function barras(label, rows, max) {
  const m = max || Math.max(...rows.map((r) => r[1]));
  const h = Math.min(24, Math.floor(140 / rows.length) - 8);
  return caja(label, `<g ${F} font-size="11.5">${rows.map(([k, v, c, tv], i) => {
    const y = 20 + i * (h + 8) + (140 - rows.length * (h + 8)) / 2, w = (v / m) * 120;
    return `<text x="84" y="${y + h / 2 + 4}" text-anchor="end" font-weight="700" fill="var(--ink)">${esc(k)}</text><rect x="92" y="${y}" width="${w}" height="${h}" rx="5" fill="${c}"/><text x="${96 + w}" y="${y + h / 2 + 4}" fill="var(--ink)">${esc(tv ?? v)}</text>`;
  }).join("")}</g>`);
}

// Figura grande de línea de tiempo: [[x, año, texto, arriba?], ...] y tramos [[x0, x1, texto, color]].
function figLinea(label, hitos, tramos = []) {
  return `<svg viewBox="0 0 680 200" role="img" aria-label="${esc(label)}">
    <rect width="680" height="200" rx="16" fill="var(--paper)"/>
    <path d="M30 100 H 650" stroke="var(--line)" stroke-width="4"/>
    ${tramos.map(([a, b, t, c]) => `<rect x="${a}" y="92" width="${b - a}" height="16" rx="8" fill="${c}" opacity=".75"/><text x="${(a + b) / 2}" y="${126}" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${esc(t)}</text>`).join("")}
    ${hitos.map(([x, y, t, up]) => { const [tx, an] = x < 90 ? [Math.max(x - 20, 14), "start"] : x > 590 ? [Math.min(x + 20, 666), "end"] : [x, "middle"]; return `<path d="M${x} 100 V ${up ? 62 : 140}" stroke="var(--ink)" stroke-width="1.5"/><circle cx="${x}" cy="100" r="5" fill="var(--ink)"/><text x="${x}" y="${up ? 36 : 164}" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" ${D}>${y}</text><text x="${tx}" y="${up ? 54 : 182}" text-anchor="${an}" font-size="11" fill="var(--muted)" ${F}>${esc(t)}</text>`; }).join("")}
  </svg>`;
}

// Figura grande en columnas: [[titulo, [líneas], color], ...] (3 o 4 columnas).
function figCols(label, cols) {
  const n = cols.length, w = (640 - (n - 1) * 14) / n;
  return `<svg viewBox="0 0 680 200" role="img" aria-label="${esc(label)}">
    <rect width="680" height="200" rx="16" fill="var(--paper)"/>
    <g ${F} text-anchor="middle">
    ${cols.map(([t, ls, c], i) => { const x = 20 + i * (w + 14); return `<rect x="${x}" y="16" width="${w}" height="168" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><rect x="${x}" y="16" width="${w}" height="36" rx="12" fill="${c}"/><text x="${x + w / 2}" y="40" font-size="15" font-weight="700" fill="#fff" ${D}>${esc(t)}</text>${ls.map((l, j) => `<text x="${x + w / 2}" y="${76 + j * 24}" font-size="13" fill="var(--ink)">${esc(l)}</text>`).join("")}`; }).join("")}
    </g>
  </svg>`;
}

// Árbol: raíces con dos ramas cada una: [[raíz, [rama A, rama B], color, [etiqueta A, etiqueta B]], ...] (1 o 2 raíces).
function arbol(label, raices) {
  const n = raices.length, ancho = 260 / n;
  return caja(label, `<g ${F} text-anchor="middle">${raices.map(([r, [a, b], c, et = []], i) => {
    const cx = ancho * i + ancho / 2, xa = cx - ancho / 4, xb = cx + ancho / 4, w = Math.min(ancho / 2 - 4, 104);
    return `<path d="M${cx} 52 L ${xa} 112 M${cx} 52 L ${xb} 112" stroke="var(--line)" stroke-width="2.5"/>
      <rect x="${cx - 48}" y="24" width="96" height="30" rx="15" fill="${c}"/><text x="${cx}" y="44" font-size="13" font-weight="700" fill="#fff">${esc(r)}</text>
      ${[[xa, a, et[0]], [xb, b, et[1]]].map(([x, t, e]) => `<rect x="${x - w / 2}" y="112" width="${w}" height="30" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/><text x="${x}" y="132" font-size="${String(t).length * 7.4 > w ? 10.5 : 12.5}" font-weight="700" fill="var(--ink)">${esc(t)}</text>${e ? `<text x="${x}" y="160" font-size="10.5" fill="var(--muted)">${esc(e)}</text>` : ""}`).join("")}`;
  }).join("")}</g>`);
}


// Tabla sencilla con el estilo de la web.
const tabla = (cab, filas) => `<div style="overflow-x:auto;-webkit-overflow-scrolling:touch"><table class="tb"><thead><tr>${cab.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${filas.map((f) => `<tr>${f.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

// Ampliación a nivel de libro de texto. a = { minutos, objetivos, bloques: [{ tras, html, svg, video }], ejemplos, errores, ejercicios, quiz, tarjetas }.
// Cada bloque nuevo va detrás del bloque cuyo html contiene «tras» (y de los nuevos que ya se pusieron ahí); sin «tras», al final.
function ampliar(T, a) {
  if (a.minutos) T.minutos = a.minutos;
  if (a.objetivos) T.objetivos.push(...a.objetivos);
  const puestos = new Set();
  for (const { tras, ...b } of a.bloques || []) {
    let i = tras ? T.bloques.findIndex((x) => x.html.includes(tras)) : T.bloques.length - 1;
    if (i < 0) throw new Error(`ampliar: no encuentro «${tras}» en ${T.titulo}`);
    while (i + 1 < T.bloques.length && puestos.has(T.bloques[i + 1])) i++;
    T.bloques.splice(i + 1, 0, b);
    puestos.add(b);
  }
  if (a.ejemplos) T.ejemplos = a.ejemplos;
  if (a.errores) T.errores = a.errores;
  if (a.ejercicios) T.ejercicios = a.ejercicios;
  if (a.quiz) T.quiz.push(...a.quiz);
  if (a.tarjetas) T.tarjetas.push(...a.tarjetas);
  return T;
}

module.exports = { tabla, ampliar, caja, linea, dos, rueda, filas, piramide, flujo, barras, figLinea, figCols, arbol, esc };
