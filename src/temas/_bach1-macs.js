// Ayudas para Matemáticas Aplicadas a las Ciencias Sociales I (1º de Bachillerato) a nivel libro.
// Cada tema se escribe con tema({...}); aquí se monta, se numeran los apartados (n.1, n.2…) y se comprueba el formato.
// Los dibujos de bloque (260 × 180) reutilizan las ayudas de _bach1L1 / _eso4L3 y _eso3L4, más unas pocas propias
// que ajustan el tamaño de la letra al hueco disponible para que ningún texto se salga.
const B = require("./_bach1L1");
const { lienzo, t, graf, recta, arbol, nube, reparte, mapa, fig, n2, num, flecha } = B;
const { flujo, compara, linea: crono, ciclo, radial } = require("./_eso3L4");

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"];
const NIV = { b: "básico", m: "medio", a: "avanzado" };

// Tamaño de letra que hace caber el texto s en un ancho w (como mucho fs).
const cabe = (s, w, fs = 12) => n2(Math.max(7.5, Math.min(fs, w / (String(s).length * 0.56))));
// Texto que se encoge si no cabe en el ancho w.
const ft = (x, y, s, w, o = {}) => t(x, y, s, { ...o, s: cabe(s, w, o.s || 12) });

// Ficha de fórmulas: título y varias líneas (texto o [texto, color, negrita]).
function ficha(aria, titulo, ls, color = "var(--pen)") {
  const dy = Math.min(26, 120 / Math.max(1, ls.length));
  const cuerpo = ls.map((l, i) => {
    const [s, c = "var(--ink)", b = 1] = Array.isArray(l) ? l : [l];
    return ft(130, 48 + (120 - ls.length * dy) / 2 + dy * (i + 0.5), s, 220, { c, s: 13, b });
  }).join("");
  return lienzo(aria, `<rect x="10" y="10" width="240" height="160" rx="12" fill="var(--card)" stroke="${color}" stroke-width="2.5"/>
    <rect x="10" y="10" width="240" height="30" rx="12" fill="${color}"/><rect x="10" y="28" width="240" height="12" fill="${color}"/>
    ${ft(130, 30, titulo, 226, { c: "#fff", s: 14, b: 1 })}${cuerpo}`);
}

// Tabla: filas de celdas; la primera fila es la cabecera. o.marca = [[fila, col], …] resalta celdas.
function tabla(aria, filas, o = {}) {
  const { w = 260, h = 180, x0 = 10, y0 = 12, cab = "var(--pen)", marca = [], titulo = "" } = o;
  const top = titulo ? y0 + 20 : y0;
  const nf = filas.length, nc = Math.max(...filas.map((f) => f.length)), cw = (w - 2 * x0) / nc, ch = (h - top - y0) / nf;
  let s = titulo ? ft(w / 2, y0 + 10, titulo, w - 20, { s: 12, b: 1 }) : "";
  filas.forEach((f, i) => f.forEach((v, j) => {
    const x = x0 + j * cw, y = top + i * ch, m = marca.some(([a, b]) => a === i && b === j);
    s += `<rect x="${n2(x)}" y="${n2(y)}" width="${n2(cw)}" height="${n2(ch)}" fill="${i === 0 ? cab : m ? "var(--sun)" : "var(--card)"}" fill-opacity="${i === 0 ? 0.9 : m ? 0.35 : 1}" stroke="var(--line)" stroke-width="1"/>`;
    s += ft(x + cw / 2, y + ch / 2 + 4, v, cw - 6, { c: i === 0 ? "#fff" : "var(--ink)", s: 11, b: i === 0 || j === 0 ? 1 : 0 });
  }));
  return lienzo(aria, s, w, h);
}

// Gráfica estándar 260 × 180 (atajo de graf).
const G = (aria, o, fn) => graf(aria, { w: 260, h: 180, ...o }, fn);

// Barras verticales: datos = [[etiqueta, valor, color?]], con eje en 0.
function columnas(aria, datos, o = {}) {
  const { max = Math.max(...datos.map((d) => d[1])), titulo = "", unidad = "" } = o;
  const top = titulo ? 34 : 18, base = 150, n = datos.length, gap = 10, bw = (220 - gap * (n - 1)) / n;
  let s = titulo ? ft(130, 18, titulo, 236, { s: 12, b: 1 }) : "";
  s += `<path d="M18 ${base} H 244" stroke="var(--muted)" stroke-width="1.6"/>`;
  datos.forEach(([e, v, c = COL[0]], i) => {
    const x = 22 + i * (bw + gap), hh = ((base - top - 14) * v) / max;
    s += `<rect x="${n2(x)}" y="${n2(base - hh)}" width="${n2(bw)}" height="${n2(hh)}" rx="4" fill="${c}"/>`;
    s += ft(x + bw / 2, base - hh - 4, `${typeof v === "number" ? num(v) : v}${unidad}`, bw + gap - 2, { s: 10, b: 1 });
    s += ft(x + bw / 2, base + 14, e, bw + gap - 2, { s: 10, c: "var(--muted)" });
  });
  return lienzo(aria, s);
}

// Cajas en fila unidas por flechas (proceso horizontal): pasos = ["texto", …] (2 a 4), con pie opcional.
let kfl = 0;
function cadena(aria, pasos, pie = "", arriba = "") {
  const id = `mcf${++kfl}`, n = pasos.length, gap = 16, bw = (236 - gap * (n - 1)) / n;
  let s = `<defs>${flecha(id, "var(--muted)")}</defs>` + (arriba ? ft(130, n === 4 ? 20 : 26, arriba, 236, { s: 12, b: 1 }) : "");
  if (n === 4) {
    // Cuatro pasos en U: arriba de izquierda a derecha, abajo de derecha a izquierda.
    const pos = [[14, 32], [140, 32], [140, 100], [14, 100]], w = 106, h = 54;
    pasos.forEach((p, i) => {
      const [x, y] = pos[i], c = COL[i % 4], ls = Array.isArray(p) ? p : [p];
      s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2"/>`;
      ls.forEach((l, j) => { s += ft(x + w / 2, y + h / 2 + 4 + (j - (ls.length - 1) / 2) * 16, l, w - 10, { s: 11.5, b: j === 0 ? 1 : 0 }); });
    });
    s += `<path d="M122 59 H 136" stroke="var(--muted)" stroke-width="2.2" marker-end="url(#${id})"/><path d="M193 88 V 96" stroke="var(--muted)" stroke-width="2.2" marker-end="url(#${id})"/><path d="M138 127 H 124" stroke="var(--muted)" stroke-width="2.2" marker-end="url(#${id})"/>`;
    if (pie) s += ft(130, 170, pie, 236, { s: 11.5, b: 1, c: "var(--red)" });
    return lienzo(aria, s);
  }
  pasos.forEach((p, i) => {
    const x = 12 + i * (bw + gap), c = COL[i % 4];
    const ls = Array.isArray(p) ? p : [p];
    s += `<rect x="${n2(x)}" y="52" width="${n2(bw)}" height="70" rx="10" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2"/>`;
    ls.forEach((l, j) => { s += ft(x + bw / 2, 87 + (j - (ls.length - 1) / 2) * 16, l, bw - 8, { s: 11, b: j === 0 ? 1 : 0 }); });
    if (i < n - 1) s += `<path d="M${n2(x + bw + 2)} 87 H ${n2(x + bw + gap - 4)}" stroke="var(--muted)" stroke-width="2.2" marker-end="url(#${id})"/>`;
  });
  if (pie) s += ft(130, 152, pie, 236, { s: 11.5, b: 1, c: "var(--red)" });
  return lienzo(aria, s);
}

// Recta real con intervalos: tramos = [[a, b, ca, cb, color]] y etiqueta.
function intervalos(aria, v0, v1, tramos, o = {}) {
  const { paso = 1, titulo = "", pie = "" } = o;
  const R = recta(v0, v1, 96, { paso });
  return lienzo(aria, (titulo ? ft(130, 30, titulo, 236, { s: 12, b: 1 }) : "") + R.svg + tramos.map(([a, b, ca, cb, c = "var(--pen)"], i) => R.intervalo(a, b, ca, cb, c, tramos.length > 1 ? -28 + i * 14 : -14)).join("") + (pie ? ft(130, 150, pie, 236, { s: 12, b: 1, c: "var(--red)" }) : ""));
}

// Campana de Gauss N(μ, σ) con zona sombreada [a, b] (±Infinity permitido).
function campana(aria, mu, sg, a, b, o = {}) {
  const { et = [], titulo = "", color = "var(--pen)" } = o;
  const f = (x) => Math.exp(-(((x - mu) / sg) ** 2) / 2);
  return G(aria, { x0: mu - 3.6 * sg, x1: mu + 3.6 * sg, y0: -0.12, y1: 1.25, paso: sg, pasoY: 2, etiquetas: false }, (E) => {
    const A = Math.max(a, mu - 3.6 * sg), Bb = Math.min(b, mu + 3.6 * sg), pts = [[A, 0]];
    for (let i = 0; i <= 60; i++) { const x = A + ((Bb - A) * i) / 60; pts.push([x, f(x)]); }
    pts.push([Bb, 0]);
    let s = E.area(pts, color, 0.3) + E.curva(f, color) + `<path d="M${E.X(mu - 3.6 * sg)} ${E.Y(0)} H ${E.X(mu + 3.6 * sg)}" stroke="var(--ink)" stroke-width="1.6"/>`;
    for (let k = -3; k <= 3; k++) s += t(E.X(mu + k * sg), E.Y(0) + 13, num(mu + k * sg), { s: 9, c: "var(--muted)" });
    s += et.map(([x, y, l, c = "var(--ink)", al = "middle"]) => ft(E.X(x), E.Y(y), l, 120, { s: 11, b: 1, c, a: al })).join("");
    if (titulo) s += ft(130, 24, titulo, 236, { s: 12, b: 1 });
    return s;
  });
}

const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const RD = { t: "Real Decreto 243/2022, estructura y enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" };
const CAT = { t: "Decret 171/2022, d'ordenació dels ensenyaments del batxillerat (DOGC)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928552.pdf" };
const wiki = (t, pag) => ({ t: `${t}, Wikipedia en español`, url: `https://es.wikipedia.org/wiki/${encodeURIComponent(pag.replace(/ /g, "_"))}` });

function tema(o) {
  // En quiz y examen la opción correcta se escribe la primera; reparte() la cambia de sitio.
  const preg = (qs, k) => reparte(qs.map(([q, op, e]) => ({ q, o: op, a: 0, e })), k);
  const T = {
    materia: "Matemáticas Aplicadas a las Ciencias Sociales I",
    curso: "1-bachillerato",
    titulo: o.titulo,
    minutos: o.minutos || 110,
    objetivos: o.objetivos,
    claves: o.claves,
    lectura: o.lectura,
    pregunta: o.pregunta,
    bloques: o.bloques.map((b, i) => ({ html: `<h3>${o.n}.${i + 1} ${b.h}</h3>${b.html}`, svg: b.svg, ...(b.video ? { video: b.video } : {}) })),
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    errores: o.errores,
    ejercicios: ["b", "m", "a"].flatMap((n) => o.ejercicios[n].map(([q, sol]) => ({ nivel: NIV[n], q, sol }))),
    quiz: preg(o.quiz, 0),
    examen: preg(o.examen, 2),
    feynman: o.feynman,
    glosario: o.glosario,
    situacion: o.situacion,
    figura: fig(o.figura[0], o.figura[1], o.figura[2].map(([c, ls], i) => [c, ls, COL[i % 4]])),
    video: o.video,
    mapa: mapa(o.mapa[0], "var(--bac)", o.mapa[1].map(([a, d], i) => [a, d, COL[i]]), o.mapa[2] || 270),
    tarjetas: o.tarjetas,
    familias: o.familias,
    profesores: { saberes: o.saberes, ideas: o.ideas },
    fuentes: [RD, CAT, ...(o.fuentes || [])],
    revisado: "2026-11-14",
  };
  // Comprobaciones del formato «nivel libro».
  const av = [];
  const w = T.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 2000 || w > 2800) av.push(`${w} palabras en bloques`);
  if (T.bloques.length < 10 || T.bloques.length > 14) av.push(`${T.bloques.length} bloques`);
  if (T.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  if (T.bloques.filter((b) => b.video).length < 2) av.push("faltan vídeos de bloque");
  const c = (n) => T.ejercicios.filter((e) => e.nivel === n).length;
  if (T.ejercicios.length < 30) av.push(`${T.ejercicios.length} ejercicios (${c("básico")}/${c("medio")}/${c("avanzado")})`);
  if (T.quiz.length !== 20 || T.quiz.some((q) => q.o.length !== 4)) av.push(`quiz ${T.quiz.length}`);
  if (T.examen.length !== 8 || T.examen.some((q) => q.o.length !== 4)) av.push(`examen ${T.examen.length}`);
  if (T.tarjetas.length !== 12) av.push(`tarjetas ${T.tarjetas.length}`);
  if (T.ejemplos.length !== 6 || T.errores.length !== 6) av.push(`ejemplos ${T.ejemplos.length} errores ${T.errores.length}`);
  if (T.glosario.length < 14 || T.glosario.length > 18) av.push(`glosario ${T.glosario.length}`);
  if (T.objetivos.length !== 6) av.push(`objetivos ${T.objetivos.length}`);
  if (T.situacion.pasos.length < 4 || T.situacion.pasos.length > 6 || T.situacion.evaluacion.length < 3 || T.situacion.evaluacion.length > 4) av.push("situación");
  const lw = strip(T.lectura.html).split(" ").length;
  if (lw < 150 || lw > 250) av.push(`lectura ${lw} palabras`);
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro] ${T.titulo}: ${av.join(", ")}`);
  return T;
}

module.exports = { ...B, tema, ficha, tabla, G, columnas, cadena, intervalos, campana, ft, cabe, flujo, compara, crono, ciclo, radial, arbol, nube, recta, RD, CAT, wiki, COL };
