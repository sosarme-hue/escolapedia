// Ayudas del lote 13 de 4º ESO (Artes Escénicas y Danza, Educación Física) a nivel libro.
// El fichero empieza por «_», así que build.js no lo trata como tema.
const { F, D } = require("./_util");
const { caja, esc } = require("./_hum");

// Bloque: título numerado, html y dibujo (y vídeo opcional).
const B = (h, html, svg, video) => ({ html: `<h3>${h}</h3>${html}`, ...(svg ? { svg } : {}), ...(video ? { video } : {}) });

// Pregunta de 4 opciones: la correcta va primera en el fichero y aquí se coloca en una posición que varía.
let nq = 0;
const Q = ([q, o, e]) => {
  const k = (nq++ * 7 + q.length) % 4;
  const op = o.slice(1);
  op.splice(k, 0, o[0]);
  return { q, o: op, a: k, e };
};
const QS = (xs) => xs.map(Q);

// Ejercicios por niveles: listas de [enunciado, solución].
const EJ = (bas, med, av) => [
  ...bas.map(([q, sol]) => ({ nivel: "básico", q, sol })),
  ...med.map(([q, sol]) => ({ nivel: "medio", q, sol })),
  ...av.map(([q, sol]) => ({ nivel: "avanzado", q, sol })),
];

// Ejemplo resuelto.
const EX = (enunciado, pasos, resultado) => ({ enunciado, pasos, resultado });

// Muñeco esquemático: cabeza, cuello, cadera, brazos [[codo, mano] ×2] desde el cuello y piernas [[rodilla, pie] ×2] desde la cadera.
const POSES = {
  "de pie": [[0, -62], [0, -50], [0, -16], [[[-10, -34], [-14, -18]], [[10, -34], [14, -18]]], [[[-6, 2], [-8, 22]], [[6, 2], [8, 22]]]],
  brazos: [[0, -62], [0, -50], [0, -16], [[[-12, -62], [-16, -76]], [[12, -62], [16, -76]]], [[[-6, 2], [-8, 22]], [[6, 2], [8, 22]]]],
  cruz: [[0, -62], [0, -50], [0, -16], [[[-18, -50], [-34, -50]], [[18, -50], [34, -50]]], [[[-6, 2], [-8, 22]], [[6, 2], [8, 22]]]],
  sentadilla: [[6, -42], [4, -30], [-12, -4], [[[14, -28], [26, -28]], [[14, -26], [26, -24]]], [[[8, -2], [6, 22]], [[10, 2], [10, 22]]]],
  zancada: [[0, -60], [0, -48], [0, -14], [[[-10, -32], [-12, -16]], [[10, -32], [12, -16]]], [[[16, 0], [18, 22]], [[-12, 8], [-30, 22]]]],
  salto: [[0, -72], [0, -60], [0, -26], [[[-14, -72], [-22, -86]], [[14, -72], [22, -86]]], [[[-12, -8], [-16, 8]], [[12, -8], [16, 8]]]],
  plancha: [[-38, -10], [-28, -6], [14, 2], [[[-28, 8], [-28, 20]], [[-24, 8], [-22, 20]]], [[[30, 10], [44, 18]], [[30, 12], [46, 20]]]],
  tumbado: [[-42, 12], [-32, 14], [6, 16], [[[-18, 18], [-4, 20]], [[-20, 14], [-6, 16]]], [[[24, 18], [42, 20]], [[20, 6], [34, 20]]]],
  sentado: [[-20, -30], [-20, -18], [-18, 14], [[[-8, -4], [4, 8]], [[-6, -2], [6, 10]]], [[[6, 16], [32, 20]], [[6, 18], [32, 22]]]],
  giro: [[0, -62], [0, -50], [0, -16], [[[-16, -58], [-32, -66]], [[16, -44], [30, -36]]], [[[-4, 4], [-6, 22]], [[10, -2], [2, 4]]]],
  inclinado: [[-22, -40], [-14, -32], [6, -12], [[[-20, -16], [-26, -2]], [[-12, -16], [-16, 0]]], [[[4, 4], [0, 22]], [[10, 4], [14, 22]]]],
  rodillas: [[0, -46], [0, -34], [0, -2], [[[-8, -18], [-10, -4]], [[8, -18], [10, -4]]], [[[2, 20], [-22, 21]], [[4, 20], [-20, 22]]]],
};
function muneco(x, y, pose, c = "var(--ink)") {
  const [[hx, hy], [nx, ny], [cx, cy], brazos, piernas] = POSES[pose] || POSES["de pie"];
  const s = `stroke="${c}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
  const seg = (o, [[ax, ay], [bx, by]]) => `M${o[0]} ${o[1]} L ${ax} ${ay} L ${bx} ${by}`;
  return `<g transform="translate(${x} ${y})"><circle cx="${hx}" cy="${hy}" r="8.5" fill="${c}"/><path d="M${nx} ${ny} L ${cx} ${cy} ${brazos.map((b) => seg([nx, ny], b)).join(" ")} ${piernas.map((p) => seg([cx, cy], p)).join(" ")}" ${s}/></g>`;
}

// De 1 a 4 muñecos con su rótulo: [[pose, rótulo, color], ...].
function poses(label, xs) {
  const w = 260 / xs.length;
  return caja(label, xs.map(([p, t, c], i) => `${muneco(w * i + w / 2, 106, p, c)}<text x="${w * i + w / 2}" y="160" text-anchor="middle" font-size="${String(t).length > 11 ? 10.5 : 12}" font-weight="700" fill="${c}" ${F}>${esc(t)}</text>`).join("") + `<path d="M12 128 H 248" stroke="var(--line)" stroke-width="2"/>`);
}

// Planta del escenario en 9 zonas vista desde arriba; marca: {"centro-centro": color, ...}.
function escenario(label, marca = {}, nota = "") {
  const fil = ["foro", "centro", "proscenio"], col = ["derecha", "centro", "izquierda"];
  const ab = { foro: "F", centro: "C", proscenio: "P", derecha: "D", izquierda: "I" };
  let r = "";
  fil.forEach((f, i) => col.forEach((k, j) => {
    const m = marca[`${f}-${k}`];
    r += `<rect x="${40 + j * 62}" y="${18 + i * 36}" width="58" height="32" rx="6" fill="${m || "var(--card)"}" fill-opacity="${m ? 0.8 : 1}" stroke="var(--line)" stroke-width="2"/><text x="${69 + j * 62}" y="${39 + i * 36}" text-anchor="middle" font-size="11.5" font-weight="700" fill="${m ? "#fff" : "var(--muted)"}" ${F}>${ab[f]}${ab[k]}</text>`;
  }));
  return caja(label, `${r}<path d="M36 130 H 224" stroke="var(--red)" stroke-width="4"/><text x="130" y="150" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>público</text>${nota ? `<text x="130" y="170" text-anchor="middle" font-size="10.5" fill="var(--muted)" ${F}>${esc(nota)}</text>` : ""}`);
}

// Curva sencilla: puntos [[x 0-1, y 0-1], ...], etiquetas de ejes y notas [[x, y, texto, color]].
function curva(label, pts, ejeX, ejeY, notas = [], color = "var(--pen)") {
  const X = (v) => 34 + v * 206, Y = (v) => 146 - v * 120;
  return caja(label, `<path d="M34 146 H 244 M34 146 V 18" stroke="var(--muted)" stroke-width="2"/>
    <path d="M${pts.map(([a, b]) => `${X(a).toFixed(1)} ${Y(b).toFixed(1)}`).join(" L ")}" fill="none" stroke="${color}" stroke-width="3.5" stroke-linejoin="round"/>
    <text x="244" y="164" text-anchor="end" font-size="11" fill="var(--muted)" ${F}>${esc(ejeX)} →</text>
    <text x="22" y="82" text-anchor="middle" font-size="11" fill="var(--muted)" transform="rotate(-90 22 82)" ${F}>${esc(ejeY)}</text>
    ${notas.map(([a, b, t, c]) => `<circle cx="${X(a)}" cy="${Y(b)}" r="4" fill="${c}"/><text x="${Math.min(Math.max(X(a), 70), 200)}" y="${Y(b) - 9}" text-anchor="middle" font-size="10.5" font-weight="700" fill="${c}" ${F}>${esc(t)}</text>`).join("")}`);
}

// Bandas apiladas de abajo arriba (zonas, escalas): [[texto, color], ...] (máx. 5).
function zonas(label, xs, pie = "") {
  const h = Math.floor(132 / xs.length);
  return caja(label, xs.map(([t, c], i) => `<rect x="30" y="${150 - (i + 1) * h}" width="200" height="${h - 4}" rx="6" fill="${c}"/><text x="130" y="${150 - (i + 1) * h + h / 2 + 2}" text-anchor="middle" font-size="${t.length > 28 ? 10 : 11.5}" font-weight="700" fill="#fff" ${F}>${esc(t)}</text>`).join("") + (pie ? `<text x="130" y="168" text-anchor="middle" font-size="10.5" fill="var(--muted)" ${F}>${esc(pie)}</text>` : ""));
}

// Pista vista desde arriba con red (raqueta) o porterías (invasión); jugadores [[x, y, color]].
function pista(label, tipo, jug = [], nota = "") {
  const red = tipo === "red";
  return caja(label, `<rect x="24" y="22" width="212" height="118" rx="4" fill="var(--leaf)" fill-opacity=".18" stroke="var(--leaf)" stroke-width="2.5"/>
    ${red ? `<path d="M130 16 V 146" stroke="var(--ink)" stroke-width="4" stroke-dasharray="3 3"/><path d="M24 81 H 236" stroke="var(--leaf)" stroke-width="1.5"/>` : `<path d="M130 22 V 140" stroke="var(--leaf)" stroke-width="2"/><circle cx="130" cy="81" r="18" fill="none" stroke="var(--leaf)" stroke-width="2"/><rect x="16" y="64" width="8" height="34" fill="var(--ink)"/><rect x="236" y="64" width="8" height="34" fill="var(--ink)"/>`}
    ${jug.map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="7" fill="${c}" stroke="#fff" stroke-width="1.5"/>`).join("")}
    ${nota ? `<text x="130" y="166" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>${esc(nota)}</text>` : ""}`);
}

// Tarjetas en rejilla 2×2 o 2×3: [[título, texto], ...] con un color cada una.
function rejilla(label, xs, cols = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--bac)", "var(--inf)", "var(--sun)"]) {
  const n = xs.length, fi = n > 4 ? 3 : 2, h = n > 4 ? 46 : 70, y0 = n > 4 ? 12 : 14;
  return caja(label, xs.map(([t, d], i) => {
    const x = 14 + (i % 2) * 120, y = y0 + Math.floor(i / 2) * (h + 6), c = cols[i % cols.length];
    return `<rect x="${x}" y="${y}" width="112" height="${h}" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="${x + 56}" y="${y + (n > 4 ? 19 : 28)}" text-anchor="middle" font-size="${t.length > 13 ? 11 : 12.5}" font-weight="700" fill="${c}" ${D}>${esc(t)}</text><text x="${x + 56}" y="${y + (n > 4 ? 36 : 50)}" text-anchor="middle" font-size="${d.length > 19 ? 9.5 : 10.5}" fill="var(--ink)" ${F}>${esc(d)}</text>`;
  }).join("") + (fi ? "" : ""));
}

// Pirámide escalonada (trapecios): el nivel de arriba también tiene sitio para su rótulo.
function escalon(label, niveles) {
  const n = niveles.length, top = 18, base = 164, h = (base - top) / n;
  return caja(label, niveles.map(([t, c], i) => {
    const y0 = top + i * h, y1 = y0 + h, w0 = 110 + (i / n) * 120, w1 = 110 + ((i + 1) / n) * 120;
    const fs = Math.min(11.5, ((w0 + w1) / 2 - 14) / (String(t).length * 0.6)).toFixed(1);
    return `<path d="M${130 - w0 / 2} ${y0} H ${130 + w0 / 2} L ${130 + w1 / 2} ${y1} H ${130 - w1 / 2} Z" fill="${c}" stroke="var(--ink)" stroke-width="2"/><text x="130" y="${(y0 + h / 2 + 4).toFixed(1)}" text-anchor="middle" font-size="${fs}" font-weight="700" fill="var(--ink)" ${F}>${esc(t)}</text>`;
  }).join(""));
}

const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };
const DEC_CAT = { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (DOGC)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928817.pdf" };

module.exports = { escalon, B, Q, QS, EJ, EX, muneco, poses, escenario, curva, zonas, pista, rejilla, RD, DEC_CAT };
