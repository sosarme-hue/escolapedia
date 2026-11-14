// Ayudas del lote 7 de 2º ESO nivel libro (Tecnología y Digitalización).
// Reutiliza los esquemas de 3º ESO (_eso3L4: flujo, compara, ciclo, linea, barras, capas, piramide, radial, cita, tabla)
// y los dibujos y vídeos de la versión anterior de cada tema (_eso2L7-previo), para no perder los dibujos hechos a mano.
const L = require("./_eso3L4");
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");
const P = require("./_eso2L7-previo");

const CURSO = "2-eso";
const REV = "2026-11-14";
const DEC = { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (Catalunya)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928919.pdf" };
const MATERIA = "Tecnología y Digitalización";

// Dibujo de un bloque de la versión anterior: viejo("tyd-circuitos", 3).
const viejo = (slug, i) => {
  const s = P[slug] && P[slug].svg[i];
  if (!s) throw new Error(`_eso2L7: no hay dibujo previo ${slug} ${i}`);
  return s;
};
// Figura y vídeo general de la versión anterior.
const figura = (slug) => P[slug].fig;
const video = (slug) => P[slug].video;
// Vídeo de bloque de la versión anterior (por el índice del bloque antiguo).
const vid = (slug, i) => {
  const v = P[slug] && P[slug].vid[i];
  if (!v) throw new Error(`_eso2L7: no hay vídeo previo ${slug} ${i}`);
  return v;
};

// Fórmula destacada: título arriba, fórmula grande en un recuadro y hasta 3 notas debajo.
function formula(label, titulo, f, notas = [], color = "var(--pen)") {
  let s = L.txt(130, 18, titulo, { n: 40, fs: 12 });
  s += `<rect x="20" y="32" width="220" height="62" rx="12" fill="${color}" fill-opacity=".12" stroke="${color}" stroke-width="2.5"/>`;
  s += L.txt(130, 63, f, { n: 22, fs: 20, fill: color });
  let y = 108;
  notas.slice(0, 3).forEach((n, i) => {
    const k = L.partir(n, 44).length, h = k * 13;
    s += L.txt(130, y + h / 2, n, { n: 44, fs: 10.5, bold: i === 0, fill: i === 0 ? "var(--ink)" : "var(--muted)" });
    y += h + 8;
  });
  return L.svg(label, s);
}

// Programa en bloques al estilo de Scratch: lineas = [[texto, color, sangría 0|1|2], …] (hasta 8).
// Colores habituales: eventos "var(--sun)", movimiento "var(--pen)", control "#d9902b", apariencia "var(--inf)", sensores "var(--water)", variables "var(--red)".
function programa(label, lineas, titulo) {
  const top = titulo ? 30 : 12, n = lineas.length, h = Math.min(22, (166 - top) / n - 2);
  let s = titulo ? L.txt(130, 16, titulo, { n: 40, fs: 12 }) : "";
  lineas.forEach(([tx, c, k = 0], i) => {
    const y = top + i * (h + 2), x = 24 + k * 18, w = 212 - k * 18;
    s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${c}" fill-opacity=".9"/>`;
    s += `<text x="${x + 8}" y="${y + h / 2 + 4}" font-size="${h < 18 ? 9.5 : 10.5}" font-weight="700" fill="#fff" ${F}>${String(tx).replace(/&(?![a-z#0-9]+;)/g, "&amp;").replace(/</g, "&lt;")}</text>`;
    if (k > 0) s += `<rect x="${24 + (k - 1) * 18}" y="${y - 2}" width="18" height="${h + 4}" fill="${lineas.slice(0, i).reverse().find((l) => (l[2] || 0) === k - 1)?.[1] || "#d9902b"}" fill-opacity=".9"/>`;
  });
  return L.svg(label, s);
}

// Circuito sencillo: tipo "serie" o "paralelo" con n bombillas (1 a 3) y una pila; notas abajo.
function circuito(label, tipo, n = 2, nota = "") {
  const pila = (x, y) => `<path d="M${x - 4} ${y - 14} v 28 M${x + 4} ${y - 8} v 16" stroke="var(--ink)" stroke-width="3"/><rect x="${x - 3}" y="${y - 16}" width="6" height="32" fill="var(--paper)" opacity="0"/>`;
  const bomb = (x, y) => `<circle cx="${x}" cy="${y}" r="11" fill="#ffe27a" stroke="var(--ink)" stroke-width="2"/><path d="M${x - 7.5} ${y - 7.5} L ${x + 7.5} ${y + 7.5} M${x + 7.5} ${y - 7.5} L ${x - 7.5} ${y + 7.5}" stroke="var(--ink)" stroke-width="1.5"/>`;
  const w = "var(--ink)";
  let s = "";
  if (tipo === "serie") {
    s += `<path d="M40 40 H 220 V 130 H 136 M124 130 H 40 V 40" stroke="${w}" stroke-width="2.5" fill="none"/>`;
    s += `<rect x="122" y="118" width="16" height="24" fill="var(--paper)"/>` + pila(130, 130);
    const xs = n === 1 ? [130] : n === 2 ? [95, 165] : [80, 130, 180];
    xs.forEach((x) => { s += `<rect x="${x - 13}" y="28" width="26" height="24" fill="var(--paper)"/>` + bomb(x, 40); });
  } else {
    const xs = n === 1 ? [130] : n === 2 ? [110, 190] : [90, 145, 200];
    s += `<path d="M40 40 H ${xs[xs.length - 1]} M40 130 H ${xs[xs.length - 1]} M40 40 V 130" stroke="${w}" stroke-width="2.5" fill="none"/>`;
    xs.forEach((x) => { s += `<path d="M${x} 40 V 130" stroke="${w}" stroke-width="2.5"/><rect x="${x - 13}" y="72" width="26" height="26" fill="var(--paper)"/>` + bomb(x, 85); });
    s += `<rect x="28" y="73" width="24" height="24" fill="var(--paper)"/><g transform="rotate(90 40 85)">${pila(40, 85)}</g>`;
  }
  s += L.txt(130, 160, nota || (tipo === "serie" ? "En serie: un solo camino" : "En paralelo: varios caminos"), { n: 44, fs: 11, fill: "var(--pen)" });
  return L.svg(label, s);
}

// Ejercicios por niveles a partir de tres listas de pares [pregunta, solución].
const niveles = (b, m, a) => [
  ...b.map(([q, sol]) => ({ nivel: "básico", q, sol })),
  ...m.map(([q, sol]) => ({ nivel: "medio", q, sol })),
  ...a.map(([q, sol]) => ({ nivel: "avanzado", q, sol })),
];
// Preguntas tipo test: [pregunta, [correcta, otra, otra, otra], explicación].
// La correcta se escribe primero y se coloca en una posición que va cambiando.
const test = (l, sem = 0) => l.map(([q, o, e], i) => {
  const k = (i * 3 + sem + Math.floor(i / 4)) % o.length;
  const op = o.slice(1);
  op.splice(k, 0, o[0]);
  return { q, o: op, a: k, e };
});

module.exports = { ...L, F, D, mapa, BG, t, fl, caja, tablaH: tabla, RD, wiki, DEC, CURSO, REV, MATERIA, viejo, figura, video, vid, formula, programa, circuito, niveles, test };
