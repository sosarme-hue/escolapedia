// Ayudas de Geografía de 2º de Bachillerato (nivel libro, mismo montaje que Ciencias de la Tierra y del Medio Ambiente).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Dibujos de 260 × 180: esquemas de _bach1-fil (→ _bach1-hmc → _eso4L4), mapa esquemático (esq) y mapa de España (espana).
// tema({...}) numera los apartados (1.1, 1.2, 2.1…), baraja las opciones del quiz, monta figura y mapa y comprueba el formato.
const h = require("./_bach1-fil");
const { linea, cajas, flujo, barras, versus, piramide, rueda, cuadro, crono, fig, QS, EX, MAPA, SIT, RD, DC, WIKI } = h;
const esq = h.mapa;
const { txt, marco, partir } = require("./_eso4L4");

const VID = require("./_bach2-geo-videos");
const V = (k, titulo) => {
  if (!VID[k]) throw new Error(`vídeo ${k} no encontrado`);
  const { id, canal, vistas, q } = VID[k];
  return { id, canal, vistas, titulo, megusta: 0, busqueda: q };
};

const COLM = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)", "var(--inf)", "var(--soc, #c2410c)"];

// ---------- Mapa de España (península, Baleares y recuadro de Canarias) ----------
// Coordenadas geográficas (longitud, latitud) → dibujo de 260 × 180. Proyección sencilla, a escala de la latitud 40°.
const X = (lon) => 34 + (lon + 9.6) * 13.6;
const Y = (lat, top) => top + (43.85 - lat) * (17.8 * (180 - top - 6) / 140);
const COSTA = [[-7.9, 43.77], [-7.0, 43.56], [-5.7, 43.58], [-4.4, 43.42], [-3.8, 43.48], [-2.9, 43.42], [-2.0, 43.32], [-1.78, 43.37], [-1.4, 43.05], [-0.7, 42.85], [0.7, 42.85], [1.7, 42.5], [3.17, 42.43], [3.32, 42.32], [3.2, 41.95], [2.6, 41.6], [2.17, 41.38], [1.2, 41.1], [0.87, 40.7], [0.2, 40.0], [-0.33, 39.47], [-0.1, 38.95], [0.23, 38.73], [-0.48, 38.34], [-0.69, 37.63], [-1.3, 37.55], [-2.19, 36.72], [-3.0, 36.75], [-4.42, 36.72], [-5.3, 36.15], [-5.6, 36.0], [-6.3, 36.53], [-6.95, 37.2], [-7.9, 37.0], [-8.99, 37.02], [-8.8, 38.0], [-9.2, 38.4], [-9.5, 38.75], [-9.38, 39.36], [-8.9, 40.2], [-8.67, 41.15], [-8.87, 41.87], [-8.85, 42.2], [-9.27, 42.88], [-8.4, 43.37], [-7.9, 43.77]];
const PORTUGAL = [[-8.87, 41.87], [-8.2, 42.1], [-7.5, 41.85], [-6.2, 41.6], [-6.9, 41.0], [-6.85, 40.25], [-7.0, 39.65], [-7.3, 39.0], [-7.0, 38.2], [-7.45, 37.55], [-7.4, 37.2]];
const ISLAS = [ // Baleares (contorno simplificado)
  [[2.35, 39.6], [3.1, 39.95], [3.45, 39.7], [3.2, 39.35], [2.7, 39.45]],
  [[3.8, 40.0], [4.3, 39.95], [4.2, 39.85], [3.85, 39.92]],
  [[1.25, 38.97], [1.6, 39.1], [1.55, 38.88], [1.35, 38.85]],
];
const RIOS = {
  Miño: [[-7.6, 43.2], [-7.86, 42.34], [-8.87, 41.87]],
  Duero: [[-2.7, 41.95], [-4.7, 41.65], [-5.75, 41.5], [-6.9, 41.0], [-8.67, 41.14]],
  Tajo: [[-1.7, 40.35], [-3.0, 40.2], [-3.6, 40.03], [-4.02, 39.86], [-6.0, 39.7], [-7.0, 39.65], [-9.1, 38.7]],
  Guadiana: [[-2.9, 39.0], [-3.9, 39.1], [-5.5, 38.95], [-6.97, 38.88], [-7.4, 37.2]],
  Guadalquivir: [[-2.9, 37.9], [-3.8, 37.98], [-4.78, 37.88], [-5.98, 37.38], [-6.36, 36.8]],
  Ebro: [[-4.1, 43.0], [-2.4, 42.47], [-0.88, 41.65], [0.5, 41.0], [0.87, 40.72]],
  Júcar: [[-1.9, 40.4], [-2.1, 40.07], [-1.6, 39.2], [-0.25, 39.17]],
  Segura: [[-2.6, 38.1], [-1.13, 38.0], [-0.65, 38.1]],
};
// Canarias en recuadro (abajo a la derecha), longitudes −18,2 a −13,4 y latitudes 27,6 a 29,5.
const CANARIAS = [[-18.0, 27.75, 0.2], [-17.2, 28.1, 0.15], [-17.85, 28.65, 0.22], [-16.6, 28.3, 0.38], [-15.6, 28.0, 0.33], [-14.0, 28.4, 0.45], [-13.6, 29.0, 0.35]];

// espana(título, { zonas: [[lon, lat, rx, ry, texto, color]], sierras: [[[lon, lat]…], texto, [lon, lat]?]], puntos: [[lon, lat, texto, lado i|d|c|b]],
//   textos: [[lon, lat, texto, color]], rios: true | ["Ebro", …], lineas: [[[lon, lat]…], color, flecha]], canarias: false, nota })
let km = 0;
function espana(t, o = {}) {
  const top = t ? 14 + 14 * partir(t, 42).length : 6;
  const id = `ge${++km}`;
  const P = (pts) => pts.map(([lo, la], i) => `${i ? "L" : "M"}${X(lo).toFixed(1)} ${Y(la, top).toFixed(1)}`).join(" ");
  let s = `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="context-stroke"/></marker></defs>`;
  s += t ? txt(t, 130, top / 2 + 2, 236, 12, 'font-weight="700"') : "";
  s += `<rect x="8" y="${top}" width="244" height="${172 - top}" rx="10" fill="var(--inf)" fill-opacity=".12"/>`;
  s += `<path d="${P(COSTA)} Z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.4" stroke-linejoin="round"/>`;
  s += `<path d="${P(PORTUGAL)}" fill="none" stroke="var(--muted)" stroke-width="1" stroke-dasharray="3 2"/>`;
  s += ISLAS.map((p) => `<path d="${P(p)} Z" fill="var(--card)" stroke="var(--ink)" stroke-width="1"/>`).join("");
  if (o.canarias !== false) {
    const cy0 = 172 - 30, cx0 = 180;
    s += `<rect x="${cx0 - 4}" y="${cy0}" width="66" height="26" rx="4" fill="var(--inf)" fill-opacity=".08" stroke="var(--muted)" stroke-width=".8"/>`;
    s += CANARIAS.map(([lo, la, r]) => `<ellipse cx="${(cx0 + (lo + 18.2) * 12.5).toFixed(1)}" cy="${(cy0 + 4 + (29.5 - la) * 10).toFixed(1)}" rx="${(r * 12.5).toFixed(1)}" ry="${(r * 8).toFixed(1)}" fill="var(--card)" stroke="var(--ink)" stroke-width=".8"/>`).join("");
  }
  if (o.rios) {
    const ks = o.rios === true ? Object.keys(RIOS) : o.rios;
    s += ks.map((k) => `<path d="${P(RIOS[k])}" fill="none" stroke="var(--inf)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`).join("");
  }
  const HALO = 'font-weight="700" stroke="var(--card)" stroke-width="2.6" paint-order="stroke" stroke-linejoin="round"';
  (o.zonas || []).forEach(([lo, la, rx, ry, n, c], i) => {
    const col = c || COLM[i % COLM.length], x = X(lo), y = Y(la, top);
    s += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${rx}" ry="${ry}" fill="${col}" fill-opacity=".28" stroke="${col}" stroke-width="1.6"/>`;
  });
  (o.sierras || []).forEach(([pts, n, pos, c = "var(--soc, #c2410c)"]) => {
    s += `<path d="${P(pts)}" fill="none" stroke="${c}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>`;
  });
  (o.lineas || []).forEach(([pts, c = "var(--red)", flecha]) => {
    s += `<path d="${P(pts)}" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round"${flecha ? ` marker-end="url(#${id})"` : ""}/>`;
  });
  (o.zonas || []).forEach(([lo, la, rx, ry, n]) => { s += txt(n, X(lo).toFixed(1), Y(la, top), Math.max(rx * 2, 58), 8, HALO); });
  (o.sierras || []).forEach(([pts, n, pos]) => {
    const [lo, la] = pos || pts[Math.floor(pts.length / 2)];
    s += txt(n, X(lo).toFixed(1), Y(la, top), 70, 7.5, HALO);
  });
  (o.textos || []).forEach(([lo, la, n, c]) => { s += txt(n, X(lo).toFixed(1), Y(la, top), 64, 7.5, HALO + (c ? ` fill="${c}"` : "")); });
  (o.puntos || []).forEach(([lo, la, n, lado], i) => {
    const x = X(lo), y = Y(la, top), c = COLM[(i + 1) % COLM.length];
    const w = Math.min(70, n.length * 4.6 + 6), dx = lado === "i" ? -w / 2 - 4 : lado === "c" || lado === "b" ? 0 : w / 2 + 4, dy = lado === "c" ? -8 : lado === "b" ? 8 : 0;
    s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.8" fill="${c}" stroke="var(--card)" stroke-width=".8"/>` + txt(n, (x + dx).toFixed(1), y + dy, w, 8, HALO);
  });
  if (o.nota) s += txt(o.nota, 225, top + (172 - top) * 0.62, 54, 7.5, 'fill="var(--muted)" ' + HALO.replace('font-weight="700" ', ""));
  return marco(`Mapa de España: ${t || ""}. ${[...(o.zonas || []).map((z) => z[4]), ...(o.puntos || []).map((p) => p[2])].join(", ")}`, s);
}

// Climograma sencillo: temperaturas (línea) y precipitaciones (barras) de 12 meses.
function climograma(t, temp, prec) {
  const top = t ? 14 + 14 * partir(t, 42).length : 8, base = 150, x0 = 30, W = 200 / 12;
  const maxP = Math.max(100, Math.ceil(Math.max(...prec) / 20) * 20), maxT = maxP / 2, minT = Math.min(0, Math.floor(Math.min(...temp) / 5) * 5);
  const yP = (p) => base - (p / maxP) * (base - top - 6), yT = (v) => base - ((v - minT) / (maxT - minT)) * (base - top - 6);
  let s = t ? txt(t, 130, top / 2 + 2, 236, 12, 'font-weight="700"') : "";
  s += prec.map((p, i) => `<rect x="${(x0 + i * W + 2).toFixed(1)}" y="${yP(p).toFixed(1)}" width="${(W - 4).toFixed(1)}" height="${(base - yP(p)).toFixed(1)}" fill="var(--inf)" opacity=".75"/>`).join("");
  s += `<path d="${temp.map((v, i) => `${i ? "L" : "M"}${(x0 + i * W + W / 2).toFixed(1)} ${yT(v).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--red)" stroke-width="2.4"/>`;
  s += `<path d="M${x0} ${base} H ${x0 + 200} M${x0} ${top} V ${base} M${x0 + 200} ${top} V ${base}" stroke="var(--ink)" stroke-width="1.2" fill="none"/>`;
  s += "EFMAMJJASOND".split("").map((m, i) => txt(m, x0 + i * W + W / 2, base + 8, 12, 8, 'fill="var(--muted)"')).join("");
  s += txt(`${maxP} mm`, 15, top + 3, 30, 7, 'fill="var(--inf)"') + txt(`${maxT} °C`, 245, top + 3, 30, 7, 'fill="var(--red)"');
  const tm = (temp.reduce((a, b) => a + b, 0) / 12).toFixed(1).replace(".", ","), pt = prec.reduce((a, b) => a + b, 0);
  s += txt(`Media ${tm} °C · ${pt} mm al año`, 130, 174, 230, 8.5, 'font-weight="700"');
  return marco(`Climograma: ${t}. Temperatura media ${tm} °C, precipitación ${pt} mm`, s);
}

// Pirámide de población: [[edad, hombres %, mujeres %], …] de la más joven a la más vieja.
function piramidePob(t, filas) {
  const top = t ? 14 + 14 * partir(t, 42).length : 8, n = filas.length, H = (162 - top) / n, max = Math.max(...filas.flatMap((f) => [f[1], f[2]]));
  let s = t ? txt(t, 130, top / 2 + 2, 236, 12, 'font-weight="700"') : "";
  filas.forEach(([e, hm, mj], i) => {
    const y = 162 - (i + 1) * H, wh = (hm / max) * 96, wm = (mj / max) * 96;
    s += `<rect x="${(112 - wh).toFixed(1)}" y="${y.toFixed(1)}" width="${wh.toFixed(1)}" height="${(H - 1).toFixed(1)}" fill="var(--pen)" opacity=".8"/>`;
    s += `<rect x="148" y="${y.toFixed(1)}" width="${wm.toFixed(1)}" height="${(H - 1).toFixed(1)}" fill="var(--red)" opacity=".8"/>`;
    s += txt(e, 130, y + H / 2, 34, Math.min(8, H * 0.8), 'fill="var(--muted)"');
  });
  s += txt("Hombres", 60, 171, 80, 8.5, 'font-weight="700" fill="var(--pen)"') + txt("Mujeres", 200, 171, 80, 8.5, 'font-weight="700" fill="var(--red)"');
  return marco(`Pirámide de población: ${t}`, s);
}

const SABER = {
  A: "«A. España, Europa y la globalización»",
  B: "«B. La sostenibilidad del medio físico de España»",
  C: "«C. La ordenación del territorio en el marco de la globalización»",
};
const PROFE = (b, s) => `Geografía es materia de modalidad del Bachillerato de Humanidades y Ciencias Sociales en 2º curso (RD 243/2022, BOE-A-2022-5521). Este tema corresponde ${[...b].length > 1 ? "a los bloques de saberes básicos" : "al bloque de saberes básicos"} ${[...b].map((x) => SABER[x]).join(" y ")}: ${s} En Cataluña se ajusta a la materia Geografia del Decret 171/2022. Es materia de la PAU, con preguntas de conceptos, desarrollo de temas y prácticas con mapas, gráficos e imágenes.`;
const PAU = { t: "Modelos y exámenes de Geografía de la PAU (CRUE y universidades)", url: "https://www.crue.org/" };
const IGN = { t: "Instituto Geográfico Nacional (IGN): Atlas Nacional de España", url: "https://www.ign.es/web/ign/portal/ane-area-ane" };

const COL = ["var(--leaf)", "var(--pen)", "var(--red)", "var(--sun)"];
const NIV = { b: "básico", m: "medio", a: "avanzado" };
const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

function tema(o) {
  const T_ = {
    materia: "Geografía",
    curso: "2-bachillerato",
    titulo: o.titulo,
    minutos: o.minutos || 120,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: o.pregunta,
    lectura: o.lectura,
    bloques: o.bloques.map((b) => ({ html: `<h3>${b.h}</h3>${b.p.map((x) => `<p>${x}</p>`).join("")}${b.extra || ""}`, svg: b.svg, ...(b.v ? { video: V(b.v[0], b.v[1]) } : {}) })),
    figura: fig(o.figura.titulo, o.figura.aria || o.figura.titulo, o.figura.cols.map(([cab, ls], i) => [cab, ls, COL[i % 4]])),
    video: V(o.video[0], o.video[1]),
    quiz: QS(o.quiz, 1),
    examen: QS(o.examen, 5),
    feynman: o.feynman,
    mapa: MAPA(o.mapa[0], o.mapa[1]),
    tarjetas: o.tarjetas,
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => EX(enunciado, pasos, resultado)),
    errores: o.errores,
    ejercicios: ["b", "m", "a"].flatMap((n) => o.ejercicios[n].map(([q, sol]) => ({ q, sol, nivel: NIV[n] }))),
    glosario: o.glosario,
    situacion: o.situacion,
    familias: o.familias,
    profesores: { saberes: PROFE(o.bloque, o.saberes), ideas: o.ideas },
    fuentes: [RD, DC, PAU, IGN, ...(o.fuentes || [])],
    revisado: o.revisado || "2026-11-21",
  };
  const sec = o.secciones;
  if (sec.reduce((a, b) => a + b, 0) !== T_.bloques.length) throw new Error(`tema: secciones ${sec} no suman ${T_.bloques.length} en «${T_.titulo}»`);
  let k = 0;
  sec.forEach((n, s) => { for (let j = 1; j <= n; j++, k++) T_.bloques[k].html = T_.bloques[k].html.replace(/<h3>/, `<h3>${s + 1}.${j} `); });
  const av = [];
  const w = T_.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 2000 || w > 3300) av.push(`${w} palabras`);
  if (T_.bloques.length < 10 || T_.bloques.length > 14) av.push(`${T_.bloques.length} bloques`);
  if (T_.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  const c = (n) => T_.ejercicios.filter((e) => e.nivel === n).length;
  if (T_.ejercicios.length < 30) av.push(`${T_.ejercicios.length} ejercicios (${c("básico")}/${c("medio")}/${c("avanzado")})`);
  if (T_.quiz.length !== 20 || T_.quiz.some((q) => q.o.length !== 4)) av.push(`quiz ${T_.quiz.length}`);
  if (T_.examen.length !== 8 || T_.examen.some((q) => q.o.length !== 4)) av.push(`examen ${T_.examen.length}`);
  if (T_.tarjetas.length !== 12) av.push(`tarjetas ${T_.tarjetas.length}`);
  if (T_.ejemplos.length !== 6 || T_.errores.length !== 6) av.push(`ejemplos ${T_.ejemplos.length} errores ${T_.errores.length}`);
  if (T_.glosario.length < 14 || T_.glosario.length > 18) av.push(`glosario ${T_.glosario.length}`);
  if (T_.objetivos.length !== 6) av.push(`objetivos ${T_.objetivos.length}`);
  if (T_.situacion.pasos.length < 4 || T_.situacion.pasos.length > 6 || T_.situacion.evaluacion.length < 3 || T_.situacion.evaluacion.length > 4) av.push("situación");
  const lw = strip(T_.lectura.html).split(" ").length;
  if (lw < 150 || lw > 250) av.push(`lectura ${lw} palabras`);
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro] ${T_.titulo}: ${av.join(", ")}`);
  return T_;
}

module.exports = { tema, V, linea, cajas, flujo, barras, versus, piramide, rueda, cuadro, crono, esq, espana, climograma, piramidePob, SIT, WIKI };
