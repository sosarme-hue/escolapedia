// Ayudas del lote 3 de 2º ESO nivel libro (Física y Química).
// Reutiliza los esquemas de 3º ESO (_eso3L4: flujo, compara, ciclo, linea, barras, capas, piramide, radial, cita, tabla)
// y los dibujos y vídeos de la versión anterior de cada tema (_eso2L3-previo), para no perder los dibujos hechos a mano.
const L = require("./_eso3L4");
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");
const P = require("./_eso2L3-previo");

const CURSO = "2-eso";
const REV = "2026-11-14";
const DEC = { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (Catalunya)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928919.pdf" };
const MATERIA = "Física y Química";

// Dibujo de un bloque de la versión anterior: viejo("fyq-energia", 3).
const viejo = (slug, i) => {
  const s = P[slug] && P[slug].svg[i];
  if (!s) throw new Error(`_eso2L3: no hay dibujo previo ${slug} ${i}`);
  return s;
};
// Figura y vídeo general de la versión anterior.
const figura = (slug) => P[slug].fig;
const video = (slug) => P[slug].video;
// Vídeos de bloque de la versión anterior, en orden.
const videos = (slug) => Object.values(P[slug].vid);

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

// Gráfica sencilla. ejes = [eje x, eje y]; series = [[[x, y], …], color, rótulo] con x e y entre 0 y 1.
function grafica(label, ejes, series, titulo) {
  const x0 = 40, x1 = 236, y0 = 140, y1 = titulo ? 34 : 18;
  const X = (v) => (x0 + (x1 - x0) * v).toFixed(1), Y = (v) => (y0 - (y0 - y1) * v).toFixed(1);
  let s = titulo ? L.txt(130, 16, titulo, { n: 40, fs: 12 }) : "";
  s += fl(x0, y0, x1 + 8, y0, "var(--ink)", 2) + fl(x0, y0 + 4, x0, y1 - 8, "var(--ink)", 2);
  s += L.txt(x1 + 6, y0 + 14, ejes[0], { n: 14, fs: 10, anchor: "end" }) + `<text x="${x0 + 6}" y="${y1 - 2}" font-size="10" font-weight="700" fill="var(--ink)" ${F}>${ejes[1]}</text>`;
  series.forEach(([pts, c, r], i) => {
    s += `<path d="M${pts.map(([a, b]) => `${X(a)} ${Y(b)}`).join(" L ")}" stroke="${c}" stroke-width="3" fill="none" stroke-linejoin="round"/>`;
    if (r) s += `<rect x="${44 + i * 66}" y="160" width="10" height="10" rx="2" fill="${c}"/><text x="${58 + i * 66}" y="169" font-size="9.5" font-weight="700" fill="var(--ink)" ${F}>${r}</text>`;
  });
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

module.exports = { ...L, F, D, mapa, BG, t, fl, caja, tablaH: tabla, RD, wiki, DEC, CURSO, REV, MATERIA, viejo, figura, video, videos, formula, grafica, niveles, test };
