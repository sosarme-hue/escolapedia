// Ayudas de los temas de Historia del Mundo Contemporáneo (1º de Bachillerato, nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza los dibujos de 260×180 de _eso4L4.js (texto partido en líneas) y la figura resumen de _bach1L1.js.
const { mapa: mapaBase } = require("./_util");
const { txt, marco, partir, linea, cajas, flujo, barras, versus, piramide, rueda } = require("./_eso4L4");
const { fig } = require("./_bach1L1");

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)", "var(--inf)", "var(--soc, #c2410c)"];

// Bloque: título numerado, html, dibujo y vídeo opcional.
const B = (h, html, svg, video) => ({ html: `<h3>${h}</h3>${html}`, svg, ...(video ? { video } : {}) });

// Pregunta de 4 opciones: la correcta va primera en el fichero y aquí cambia de sitio (patrón fijo).
const PATRON = [2, 0, 3, 1, 1, 3, 0, 2, 3, 2, 0, 1];
const QS = (xs, desfase = 0) => xs.map(([q, o, e], i) => {
  const k = PATRON[(i + desfase) % PATRON.length] % o.length;
  const op = o.slice(1);
  op.splice(k, 0, o[0]);
  return { q, o: op, a: k, e };
});

// Ejercicios por niveles: listas de [enunciado, solución].
const EJ = (bas, med, av) => [
  ...bas.map(([q, sol]) => ({ nivel: "básico", q, sol })),
  ...med.map(([q, sol]) => ({ nivel: "medio", q, sol })),
  ...av.map(([q, sol]) => ({ nivel: "avanzado", q, sol })),
];

const EX = (enunciado, pasos, resultado) => ({ enunciado, pasos, resultado });
const V = (id, titulo, canal, vistas, busqueda) => ({ id, titulo, canal, vistas, busqueda });

// Tabla dibujada: filas de celdas (la primera es la cabecera); el texto se parte en líneas.
function cuadro(t, filas) {
  const top = t ? 14 + 14 * partir(t, 42).length : 10;
  const nf = filas.length, nc = filas[0].length, W = 240 / nc, H = (172 - top) / nf;
  let s = t ? txt(t, 130, top / 2 + 2, 236, 12, 'font-weight="700"') : "";
  filas.forEach((f, i) => f.forEach((v, j) => {
    const x = 10 + j * W, y = top + i * H;
    s += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${W.toFixed(1)}" height="${H.toFixed(1)}" fill="${i === 0 ? "var(--pen)" : j === 0 ? "var(--card)" : "var(--paper)"}" stroke="var(--line)" stroke-width="1"/>`;
    s += txt(v, x + W / 2, y + H / 2, W - 6, i === 0 ? 10 : 9, i === 0 ? 'font-weight="700" fill="#fff"' : j === 0 ? 'font-weight="700"' : "");
  }));
  return marco(`${t || "Cuadro"}: ${filas.map((f) => f.join(", ")).join("; ")}`, s);
}

// Mapa esquemático: zonas [x, y, rx, ry, nombre] y flechas [[x1, y1, x2, y2, color]] sobre un fondo de mar.
let kf = 0;
function mapa(t, zonas, flechas = [], nota = "") {
  const id = `hm${++kf}`;
  const top = t ? 14 + 14 * partir(t, 42).length : 8;
  let s = `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="context-stroke"/></marker></defs>`;
  s += `<rect x="8" y="${top}" width="244" height="${(nota ? 150 : 166) - top}" rx="10" fill="var(--inf)" fill-opacity=".10" stroke="var(--line)"/>`;
  s += t ? txt(t, 130, top / 2 + 2, 236, 12, 'font-weight="700"') : "";
  zonas.forEach(([x, y, rx, ry, n], i) => {
    const c = COL[i % COL.length];
    s += `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${c}" fill-opacity=".22" stroke="${c}" stroke-width="2"/>` + txt(n, x, y, Math.max(40, rx * 2 - 4), 9, 'font-weight="700"');
  });
  flechas.forEach(([x1, y1, x2, y2, c = "var(--red)"]) => {
    s += `<path d="M${x1} ${y1} L ${x2} ${y2}" stroke="${c}" stroke-width="2.4" fill="none" marker-end="url(#${id})"/>`;
  });
  if (nota) s += txt(nota, 130, 164, 236, 8.5, 'fill="var(--muted)"');
  return marco(`Mapa esquemático: ${t}. ${zonas.map((z) => z[4]).join(", ")}`, s);
}

// Línea del tiempo larga (6 a 8 hitos) en dos filas alternas.
function crono(t, hitos) {
  const top = t ? 14 + 14 * partir(t, 42).length : 8, n = hitos.length, x0 = 22, x1 = 238, st = (x1 - x0) / (n - 1), ym = top + (172 - top) / 2;
  let s = t ? txt(t, 130, top / 2 + 2, 236, 12, 'font-weight="700"') : "";
  s += `<path d="M12 ${ym} H 248" stroke="var(--ink)" stroke-width="3"/>`;
  const w = Math.min(70, st * 1.9);
  hitos.forEach(([f, d], i) => {
    const x = x0 + st * i, up = i % 2 === 0, c = COL[i % COL.length], xc = Math.min(256 - w / 2, Math.max(w / 2 + 4, x));
    s += `<circle cx="${x.toFixed(1)}" cy="${ym}" r="5" fill="${c}"/><path d="M${x.toFixed(1)} ${up ? ym - 5 : ym + 5} V ${up ? ym - 14 : ym + 14}" stroke="${c}" stroke-width="2"/>`;
    s += txt(f, xc, up ? ym - 22 : ym + 22, w, 10.5, `font-weight="700" fill="${c}"`);
    const ld = partir(d, Math.floor(w / (8.5 * 0.56))).length;
    s += txt(d, xc, up ? ym - 34 - (ld - 1) * 5 : ym + 34 + (ld - 1) * 5, w, 8.5, 'fill="var(--muted)"');
  });
  return marco(`Línea del tiempo: ${t}. ${hitos.map((h) => h.join(" ")).join("; ")}`, s);
}

// Mapa mental final.
const MAPA = (centro, ramas) => mapaBase(centro, "var(--soc, #c2410c)", ramas.map(([t, d], i) => [t, d, ["var(--leaf)", "var(--pen)", "var(--sun)", "var(--red)"][i]]));

const SIT = (titulo, reto, pasos, producto, evaluacion) => ({ titulo, reto, pasos, producto, evaluacion });

const RD = { t: "Real Decreto 243/2022, estructura y enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" };
const DC = { t: "Decret 171/2022, d'ordenació dels ensenyaments del batxillerat (Catalunya)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928552.pdf" };
const WIKI = (t, slug) => ({ t: `${t}, Wikipedia en español`, url: `https://es.wikipedia.org/wiki/${slug}` });
const SAB = (s) => `${s} (RD 243/2022, Historia del Mundo Contemporáneo, 1º de Bachillerato: saberes básicos «Sociedades en el tiempo», «Retos del mundo actual» y «Compromiso cívico»; en Cataluña, Decret 171/2022, Història del Món Contemporani).`;

module.exports = { linea, cajas, flujo, barras, versus, piramide, rueda, cuadro, mapa, crono, fig, B, QS, EJ, EX, V, MAPA, SIT, RD, DC, WIKI, SAB };
