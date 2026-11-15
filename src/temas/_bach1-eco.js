// Ayudas de los temas de Economía (1º de Bachillerato, nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza las ayudas de Historia del Mundo Contemporáneo (_bach1-hmc.js: cajas, flujo, barras, cuadro, crono...)
// y añade gráficas económicas propias (oferta y demanda, FPP, costes, curvas) en lienzos de 260×180.
const H = require("./_bach1-hmc");
const { txt, marco, partir } = require("./_eso4L4");

const n2 = (v) => +(+v).toFixed(1);

// Gráfica económica en el primer cuadrante.
// o: { x: "Q", y: "P", x1: 10, y1: 10 } (dominio de 0 a x1 y de 0 a y1).
// els: lista de elementos:
//   { l: [[x, y], ...], c, lab, dash, lp }   línea poligonal (o recta si son dos puntos), con rótulo al final (o en lp = [x, y])
//   { f: (x) => y, a, b, c, lab, dash }      curva y = f(x) entre a y b
//   { p: [x, y], c, lab, guia, xl, yl }      punto (con guías discontinuas a los ejes y sus rótulos)
//   { area: [[x, y], ...], c }               zona sombreada
//   { t: [x, y, "texto"], c, s }             texto en coordenadas de la gráfica
//   { fl: [x1, y1, x2, y2], c }              flecha
let kf = 0;
function eco(titulo, o, els) {
  const { x = "Q", y = "P", x1 = 10, y1 = 10 } = o;
  const L0 = o.ejes === false ? 12 : 34;
  const top = titulo ? 12 + 14 * partir(titulo, 42).length : 12;
  const L = L0, R = o.ejes === false ? 248 : 236, T = top + 6, Bm = 150;
  const X = (v) => n2(L + (v / x1) * (R - L));
  const Y = (v) => n2(Bm - (v / y1) * (Bm - T));
  if (o.ejes === false) { /* sin ejes: el lienzo entero */ }
  const id = `ec${++kf}`;
  let s = `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="context-stroke"/></marker></defs>`;
  s += titulo ? txt(titulo, 130, top / 2 + 2, 236, 12, 'font-weight="700"') : "";
  if (o.ejes !== false) s += `<path d="M${L} ${T - 4} V ${Bm} H ${R + 8}" fill="none" stroke="var(--ink)" stroke-width="2"/>`;
  s += `<text x="${L - 4}" y="${T + 2}" text-anchor="end" font-size="10.5" font-weight="700" fill="var(--muted)">${y.length > 4 ? "" : y}</text>`;
  if (y.length > 4) s += `<text x="${L + 4}" y="${T - 6}" text-anchor="start" font-size="9.5" font-weight="700" fill="var(--muted)">${y}</text>`;
  s += `<text x="${R + 8}" y="${Bm + 14}" text-anchor="end" font-size="10.5" font-weight="700" fill="var(--muted)">${x}</text>`;
  const rot = (px, py, lab, c, fs = 10) => {
    const w = lab.length * fs * 0.56;
    const ax = px + 4 + w > 254 ? "end" : "start";
    const xx = ax === "end" ? Math.min(px - 4, 254) : px + 4;
    return `<text x="${n2(xx)}" y="${n2(Math.max(10, Math.min(176, py)))}" text-anchor="${ax}" font-size="${fs}" font-weight="700" fill="${c}">${lab}</text>`;
  };
  for (const e of els) {
    const c = e.c || "var(--pen)";
    const dash = e.dash ? ' stroke-dasharray="5 4"' : "";
    if (e.area) s += `<path d="M${e.area.map(([a, b]) => `${X(a)} ${Y(b)}`).join(" L ")} Z" fill="${c}" fill-opacity=".2" stroke="none"/>`;
    if (e.l || e.f) {
      let pts = e.l;
      if (e.f) { pts = []; const a = e.a ?? 0, b = e.b ?? x1; for (let i = 0; i <= 60; i++) { const xx = a + ((b - a) * i) / 60, yy = e.f(xx); if (isFinite(yy) && yy >= -0.01 && yy <= y1 * 1.02) pts.push([xx, yy]); } }
      s += `<path d="M${pts.map(([a, b]) => `${X(a)} ${Y(b)}`).join(" L ")}" fill="none" stroke="${c}" stroke-width="${e.w || 2.8}" stroke-linejoin="round"${dash}/>`;
      if (e.lab) { const [a, b] = e.lp || pts[pts.length - 1]; s += rot(X(a), Y(b) + (e.dy || 0), e.lab, c); }
    }
    if (e.p) {
      const [a, b] = e.p;
      if (e.guia !== false) s += `<path d="M${X(a)} ${Bm} V ${Y(b)} H ${L}" fill="none" stroke="var(--muted)" stroke-width="1.3" stroke-dasharray="3 3"/>`;
      s += `<circle cx="${X(a)}" cy="${Y(b)}" r="4" fill="${c}"/>`;
      if (e.lab) s += rot(X(a) + 2, Y(b) - 6, e.lab, c);
      if (e.xl) s += `<text x="${X(a)}" y="${Bm + 12}" text-anchor="middle" font-size="9.5" fill="var(--muted)">${e.xl}</text>`;
      if (e.yl) s += `<text x="${L - 3}" y="${Y(b) + 3}" text-anchor="end" font-size="9.5" fill="var(--muted)">${e.yl}</text>`;
    }
    if (e.t) { const [a, b, q] = e.t; s += `<text x="${X(a)}" y="${Y(b)}" text-anchor="${e.a || "middle"}" font-size="${e.s || 9.5}" ${e.b === false ? "" : 'font-weight="700"'} fill="${e.c || "var(--ink)"}">${q}</text>`; }
    if (e.fl) { const [a, b, cc, d] = e.fl; s += `<path d="M${X(a)} ${Y(b)} L ${X(cc)} ${Y(d)}" stroke="${c}" stroke-width="2.2" fill="none" marker-end="url(#${id})"/>`; }
  }
  return marco(`Gráfica: ${titulo || ""}. Eje horizontal ${x}, eje vertical ${y}`, s);
}


// Barras con valores positivos y negativos: [[etiqueta, valor], ...] (2 a 8).
function barrasSig(titulo, datos, unidad = "") {
  const top = titulo ? 14 + 14 * partir(titulo, 42).length : 10;
  const max = Math.max(...datos.map((d) => d[1]), 0), min = Math.min(...datos.map((d) => d[1]), 0);
  const y0 = top + 12, y1 = 150, k = (y1 - y0) / (max - min || 1), Y0 = y0 + max * k, n = datos.length, W = 224 / n;
  let s = titulo ? txt(titulo, 130, top / 2 + 2, 236, 12, 'font-weight="700"') : "";
  s += `<path d="M16 ${n2(Y0)} H 244" stroke="var(--ink)" stroke-width="1.6"/>`;
  datos.forEach(([e, v], i) => {
    const x = 18 + i * W, h = Math.abs(v) * k, c = v < 0 ? "var(--red)" : "var(--pen)";
    s += `<rect x="${n2(x + W * 0.18)}" y="${n2(v < 0 ? Y0 : Y0 - h)}" width="${n2(W * 0.64)}" height="${n2(Math.max(h, 1))}" rx="2" fill="${c}"/>`;
    const lab = `${String(v).replace(".", ",").replace("-", "−")}${unidad}`;
    s += `<text x="${n2(x + W / 2)}" y="${n2(v < 0 ? Y0 + h + 11 : Y0 - h - 4)}" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink)">${lab}</text>`;
    s += `<text x="${n2(x + W / 2)}" y="${n2(v < 0 ? Y0 - 4 : Math.min(176, Y0 + 12))}" text-anchor="middle" font-size="8.5" fill="var(--muted)">${e}</text>`;
  });
  return marco(`Gráfico: ${titulo}. ${datos.map((d) => `${d[0]} ${d[1]}${unidad}`).join(", ")}`, s);
}

// Rectas de oferta y demanda habituales en el dominio 0-10.
const D = (k = 0) => ({ l: [[1 + k, 9], [9 + k, 1]], c: "var(--pen)", lab: k ? "D'" : "D" });
const S = (k = 0) => ({ l: [[1 + k, 1], [9 + k, 9]], c: "var(--red)", lab: k ? "S'" : "S" });

const SAB = (s) => `${s} (RD 243/2022, Economía, 1º de Bachillerato: saberes básicos «Las decisiones económicas», «La realidad económica. Herramientas para entender el mundo», «Los mercados y la economía», «La macroeconomía» y «Los retos de la economía española en un contexto globalizado»; en Cataluña, Decret 171/2022, Economia).`;

const INE = { t: "Instituto Nacional de Estadística (INE): PIB, IPC y Encuesta de Población Activa", url: "https://www.ine.es/" };
const BDE = { t: "Banco de España: informes, proyecciones y Portal Educativo", url: "https://www.bde.es/" };
const BCE = { t: "Banco Central Europeo: política monetaria explicada", url: "https://www.ecb.europa.eu/ecb-and-you/explainers/html/index.es.html" };
const EUROSTAT = { t: "Eurostat: estadísticas económicas de la Unión Europea", url: "https://ec.europa.eu/eurostat" };
const ECONO = (t, slug) => ({ t: `${t}, Economipedia`, url: `https://economipedia.com/definiciones/${slug}.html` });

module.exports = { ...H, eco, barrasSig, D, S, SAB, INE, BDE, BCE, EUROSTAT, ECONO };
