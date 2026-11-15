// Ayudas para Lengua Castellana y Literatura I (1º de Bachillerato) a nivel libro.
// Cada tema se escribe con tema({...}): aquí se numeran los apartados (1.1, 1.2, 2.1…), se reparten las
// respuestas del cuestionario y se comprueba que el tema llega al formato «nivel libro».
// Los dibujos son SVG propios: los de _lenguas.js (que ajustan la letra) y «capas», para el análisis sintáctico.
const { mapa, F } = require("./_util");
const L = require("./_lenguas");
const { palabras, RAE, ORTO, DLE, CERVANTES } = require("./_eso3L2");

const C = { pen: "var(--pen)", red: "var(--red)", leaf: "var(--leaf)", inf: "var(--inf)", sun: "var(--sun)", muted: "var(--muted)", ink: "var(--ink)", bac: "var(--bac)" };
const COL = [C.pen, C.red, C.leaf, C.inf];
const NIV = { b: "básico", m: "medio", a: "avanzado" };

// Ancho aproximado de un texto (el mismo criterio que _lenguas.js).
const ancho = (s, fs, bold) => [...String(s)].reduce((a, ch) => a + (/[A-ZÁÉÍÓÚÑÇÀÈÒÜ0-9]/.test(ch) ? 0.66 : /[ .,;:'’·il]/.test(ch) ? 0.32 : 0.5), 0) * fs * (bold ? 1.12 : 1);

// Análisis sintáctico por capas (260 × 180): una frase troceada en palabras y, debajo, corchetes por niveles.
// palabras: ["El", "perro", "ladra"]; niveles: [[[desde, hasta, "etiqueta", color], ...], ...] (índices de palabra, ambos incluidos).
function capas(label, pals, niveles, nota) {
  const gap = 5, base = pals.map((p) => ancho(p, 15, true) + 10);
  const total = base.reduce((a, b) => a + b, 0) + gap * (pals.length - 1);
  const k = Math.min(1, 232 / total), fs = +(15 * k).toFixed(1);
  if (fs < 9.5) console.warn(`[len 1º Bach] frase larga en «${label}» (${fs} px)`);
  const ws = base.map((w) => w * k), g = gap * k;
  const x0 = 130 - (ws.reduce((a, b) => a + b, 0) + g * (pals.length - 1)) / 2;
  const xs = []; let x = x0;
  ws.forEach((w) => { xs.push(x); x += w + g; });
  // Se centra el conjunto (palabras + corchetes) en el alto disponible.
  const n = niveles.length, alto = nota ? 150 : 172, paso = Math.min(40, (alto - 70) / Math.max(1, n - 1));
  const h = 30 + 12 + (n - 1) * paso + 22, top = Math.max(10, (alto - h) / 2);
  let out = pals.map((p, i) => `<rect x="${xs[i].toFixed(1)}" y="${top.toFixed(1)}" width="${ws[i].toFixed(1)}" height="30" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="1.5"/>
      <text x="${(xs[i] + ws[i] / 2).toFixed(1)}" y="${(top + 20).toFixed(1)}" text-anchor="middle" font-size="${fs}" font-weight="700" fill="var(--ink)">${p}</text>`).join("");
  niveles.forEach((fila, j) => {
    const y = +(top + 46 + j * paso).toFixed(1);
    fila.forEach(([a, b, t, c = COL[j % 4]]) => {
      const xa = xs[a] + 1, xb = xs[b] + ws[b] - 1, w = xb - xa;
      const f = Math.min(12, +(12 * (w - 2) / Math.max(1, ancho(t, 12, true))).toFixed(1));
      if (f < 8) console.warn(`[len 1º Bach] etiqueta «${t}» no cabe en «${label}»`);
      out += `<path d="M${xa.toFixed(1)} ${y - 6} V ${y} H ${xb.toFixed(1)} V ${y - 6}" fill="none" stroke="${c}" stroke-width="2"/>
        <text x="${((xa + xb) / 2).toFixed(1)}" y="${y + 14}" text-anchor="middle" font-size="${f}" font-weight="700" fill="${c}">${t}</text>`;
    });
  });
  if (nota) out += `<text x="130" y="168" text-anchor="middle" font-size="${L.fz(nota, 12, 236)}" fill="var(--muted)">${nota}</text>`;
  return L.marco(label, out);
}

// Esquema en árbol (260 × 180): una raíz y 2-4 ramas [título, detalle, color].
function arbol(label, raiz, ramas) {
  const n = ramas.length, w = (236 - (n - 1) * 6) / n;
  let out = `<rect x="70" y="12" width="120" height="34" rx="10" fill="${C.pen}"/><text x="130" y="34" text-anchor="middle" font-size="${L.fz(raiz, 14, 110, true)}" font-weight="700" fill="#fff">${raiz}</text>`;
  ramas.forEach(([t, d, c0], i) => {
    const c = c0 || COL[i % 4], x = 12 + i * (w + 6), cx = x + w / 2;
    out += `<path d="M130 46 L ${cx.toFixed(1)} 76" stroke="var(--line)" stroke-width="2.5"/>
      <rect x="${x.toFixed(1)}" y="76" width="${w.toFixed(1)}" height="92" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/>
      <text x="${cx.toFixed(1)}" y="100" text-anchor="middle" font-size="${L.fz(t, 13, w - 8, true)}" font-weight="700" fill="${c}">${t}</text>`;
    const ls = Array.isArray(d) ? d : [d];
    ls.forEach((l, k) => { out += `<text x="${cx.toFixed(1)}" y="${124 + k * 18}" text-anchor="middle" font-size="${L.fz(l, 11.5, w - 8)}" fill="var(--ink)">${l}</text>`; });
  });
  return L.marco(label, out);
}

// La respuesta correcta va en una posición que sigue un patrón variado; las demás opciones conservan su orden.
// Cada pregunta: [q, [correcta, otra, otra, otra], explicación].
const PATRON = [1, 3, 0, 2, 2, 0, 3, 1, 0, 2, 1, 3];
function reparte([q, o, e], i) {
  const p = PATRON[i % PATRON.length], resto = o.slice(1);
  return { q, o: [...resto.slice(0, p), o[0], ...resto.slice(p)], a: p, e };
}

const RD = { t: "Real Decreto 243/2022, estructura y enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" };
const DECRET = { t: "Decret 171/2022, d'ordenació dels ensenyaments del batxillerat (DOGC)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928552.pdf" };
const saberes = (s) => `${s} (RD 243/2022, Lengua Castellana y Literatura I, saberes básicos de 1º de Bachillerato; en Cataluña, Decret 171/2022, de 20 de setembre, Llengua Castellana i Literatura I).`;
const vid = (id, titulo, canal, vistas) => ({ id, titulo, canal, vistas, megusta: 0 });
const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

function tema(o) {
  const T = {
    materia: "Lengua Castellana y Literatura I",
    curso: "1-bachillerato",
    titulo: o.titulo,
    minutos: o.minutos || 110,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: { texto: o.pregunta[0], respuesta: o.pregunta[1] },
    lectura: { titulo: o.lectura[0], html: o.lectura[1] },
    bloques: o.bloques.map(([h, html, svg, video]) => ({ html: `<h3>${h}</h3>${html}`, svg, ...(video ? { video } : {}) })),
    figura: { titulo: o.figura[0], svg: L.columnas(o.figura[0], o.figura[1].map((c, i) => [...c, COL[i % 4]])) },
    video: o.video,
    quiz: o.quiz.map(reparte),
    examen: o.examen.map((x, i) => reparte(x, i + 5)),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], C.bac, o.mapa[1].map(([t, d], i) => [t, d, COL[i]]), o.mapa[2] || 250),
    tarjetas: o.tarjetas,
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    errores: o.errores,
    ejercicios: o.ejercicios.map(([n, q, sol]) => ({ q, sol, nivel: NIV[n] })),
    glosario: o.glosario,
    situacion: o.situacion,
    familias: o.familias,
    profesores: { saberes: saberes(o.saberes), ideas: o.ideas },
    fuentes: [RD, DECRET, ...(o.fuentes || [])],
    revisado: "2026-11-14",
  };
  // Numeración 1.1, 1.2, 2.1…
  const sec = o.secciones;
  if (sec.reduce((a, b) => a + b, 0) !== T.bloques.length) throw new Error(`tema: secciones ${sec} no suman ${T.bloques.length} en «${T.titulo}»`);
  let k = 0;
  sec.forEach((n, s) => { for (let j = 1; j <= n; j++, k++) T.bloques[k].html = T.bloques[k].html.replace(/<h3>/, `<h3>${s + 1}.${j} `); });
  // Comprobaciones del formato «nivel libro».
  const av = [];
  const w = T.bloques.reduce((a, b) => a + palabras(b.html), 0);
  if (w < 2000 || w > 2900) av.push(`${w} palabras`);
  if (T.bloques.length < 10 || T.bloques.length > 14) av.push(`${T.bloques.length} bloques`);
  if (T.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  if (T.bloques.filter((b) => b.video).length < 2) av.push("menos de 2 vídeos de bloque");
  const c = (n) => T.ejercicios.filter((e) => e.nivel === n).length;
  if (T.ejercicios.length < 30 || T.ejercicios.length > 40) av.push(`${T.ejercicios.length} ejercicios (${c("básico")}/${c("medio")}/${c("avanzado")})`);
  if (T.quiz.length !== 20 || T.quiz.some((q) => q.o.length !== 4)) av.push(`quiz ${T.quiz.length}`);
  if (T.examen.length !== 8 || T.examen.some((q) => q.o.length !== 4)) av.push(`examen ${T.examen.length}`);
  if (T.tarjetas.length !== 12) av.push(`tarjetas ${T.tarjetas.length}`);
  if (T.ejemplos.length !== 6 || T.errores.length !== 6) av.push(`ejemplos ${T.ejemplos.length} errores ${T.errores.length}`);
  if (T.glosario.length < 14 || T.glosario.length > 18) av.push(`glosario ${T.glosario.length}`);
  if (T.objetivos.length !== 6) av.push(`objetivos ${T.objetivos.length}`);
  if (T.situacion.pasos.length < 4 || T.situacion.pasos.length > 6 || T.situacion.evaluacion.length < 3 || T.situacion.evaluacion.length > 4) av.push("situación");
  const lw = palabras(T.lectura.html);
  if (lw < 150 || lw > 250) av.push(`lectura ${lw} palabras`);
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[len 1º Bach] ${T.titulo}: ${av.join(", ")}`);
  return T;
}

module.exports = { tema, capas, arbol, vid, C, L, tb: L.tb, RAE, ORTO, DLE, CERVANTES, F, strip };
