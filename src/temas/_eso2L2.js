// Ayudas para los temas de Matemáticas de 2º ESO a nivel libro (lote 2).
// Reutiliza las ayudas de dibujo de 3º/4º (lienzo de 260 de ancho, letra que se ajusta al hueco),
// el diagrama de flujo de 1º y los dibujos y vídeos de la versión anterior (_eso2L2-previo.js).
const base = require("./_eso3L1");
const { tx, lienzo, COL, D } = base;
const { flujo } = require("./_eso1L2");
const P = require("./_eso2L2-previo");

const C = "2-eso";
const REV = "2026-11-14";

// Svg y vídeo de un bloque de la versión anterior: prev("fracciones", 1).
const psvg = (tema, i) => { const s = P[tema].bloques[i].svg; if (!s) throw new Error(`_eso2L2: ${tema}[${i}] no tiene dibujo`); return s; };
const pvid = (tema, i) => { const v = P[tema].bloques[i].video; if (!v) throw new Error(`_eso2L2: ${tema}[${i}] no tiene vídeo`); return v; };
const pvg = (tema) => P[tema].video;

// Barra dividida en n partes con k coloreadas, en (x, y) con ancho w.
const barra = (x, y, w, n, k, c = "var(--pen)", h = 24) => [...Array(n)].map((_, i) => `<rect x="${(x + (i * w) / n).toFixed(1)}" y="${y}" width="${(w / n).toFixed(1)}" height="${h}" fill="${i < k ? c : "var(--card)"}" fill-opacity="${i < k ? 0.5 : 1}" stroke="var(--ink)" stroke-width="1.3"/>`).join("");

// Tabla de valores dibujada: cab = [x, y], filas = [[a, b], ...] en horizontal (dos filas).
function tablaSvg(label, filas, o = {}) {
  const n = filas[0].length, top = o.titulo ? 34 : 20, w = Math.min(44, 180 / (n - 1)), x0 = 130 - ((n - 1) * w + 56) / 2;
  let g = o.titulo ? tx(130, 22, o.titulo, { fs: 13, c: "var(--muted)" }) : "";
  filas.forEach((f, j) => {
    const c = COL[j % COL.length];
    f.forEach((v, i) => {
      const x = i === 0 ? x0 : x0 + 56 + (i - 1) * w, ww = i === 0 ? 56 : w;
      g += `<rect x="${x.toFixed(1)}" y="${top + j * 30}" width="${ww.toFixed(1)}" height="30" fill="${i === 0 ? c : "var(--card)"}" fill-opacity="${i === 0 ? 0.85 : 1}" stroke="var(--ink)" stroke-width="1.2"/>${tx(x + ww / 2, top + j * 30 + 20, v, { fs: 12, c: i === 0 ? "#fff" : "var(--ink)", max: ww - 4 })}`;
    });
  });
  for (const [k, l] of (o.notas || []).entries()) g += tx(130, top + filas.length * 30 + 26 + k * 18, l, { fs: 12, c: k ? "var(--muted)" : "var(--red)", w: k ? 400 : 700 });
  return lienzo(label, g, Math.max(150, top + filas.length * 30 + 20 + (o.notas || []).length * 18 + 8));
}

// Triángulo rectángulo con catetos a (horizontal) y b (vertical) y rótulos.
function trirect(label, o = {}) {
  const { x = 50, y = 150, a = 150, b = 110, ta = "a", tb = "b", tc = "c", c = "var(--pen)", extra = "" } = o;
  const g = `<polygon points="${x},${y} ${x + a},${y} ${x},${y - b}" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2.4"/><path d="M${x} ${y - 14} H${x + 14} V${y}" fill="none" stroke="var(--ink)" stroke-width="1.5"/>${tx(x + a / 2, y + 17, ta, { fs: 13, c: "var(--leaf)", max: 120 })}${tx(x - 8, y - b / 2 + 4, tb, { fs: 13, c: "var(--leaf)", a: "end", max: 44 })}${tx(x + a / 2 + 12, y - b / 2 - 6, tc, { fs: 13, c: "var(--red)", a: "start", max: 100 })}${extra}`;
  return lienzo(label, g, o.h || 180);
}

// Reparte la posición de la respuesta correcta (rotando las opciones) para que no esté siempre en el mismo sitio.
const baraja = (qs, sem = 0) => qs.map((q, i) => {
  const k = (i * 3 + sem + Math.floor(i / 4)) % q.o.length, d = (k - q.a + q.o.length) % q.o.length;
  return { ...q, o: q.o.map((_, j) => q.o[(j - d + q.o.length) % q.o.length]), a: k };
});

module.exports = { ...base, baraja, C, REV, P, psvg, pvid, pvg, flujo, barra, tablaSvg, trirect, tx, lienzo, COL, D };
