// Ayudas del lote 9 de 2º ESO (Educación Física y Religión), nivel libro.
// Cada tema nuevo parte de su versión anterior (_eso2L9-previo-*.js, conservada tal cual) y la amplía:
// lectura inicial, apartados numerados, más ejemplos, ejercicios por niveles, glosario y situación de aprendizaje.
// El fichero empieza por «_», así que build.js no lo trata como tema.
const L = require("./_eso3L4");

const PATRON = [1, 2, 0, 3, 2, 0, 3, 1, 0, 2, 3, 1, 2, 0, 3, 1];
// Pregunta nueva: [q, [correcta, ...otras 3], explicación]; la correcta se coloca en una posición que varía.
const preg = (qs, desde = 0) => qs.map(([q, o, e], i) => {
  const dest = PATRON[(i + desde) % PATRON.length] % o.length;
  const otras = o.slice(1);
  return { q, o: [...otras.slice(0, dest), o[0], ...otras.slice(dest)], a: dest, e };
});
// Añade una cuarta opción (distractor) a las preguntas antiguas, que solo tenían tres.
const cuarta = (qs, extra, desde = 0) => qs.map((q, i) => {
  if (q.o.length >= 4) return q;
  const pos = (i * 3 + 1 + desde) % 4;
  const o = [...q.o.slice(0, pos), extra[i], ...q.o.slice(pos)];
  return { ...q, o, a: q.a >= pos ? q.a + 1 : q.a };
});

const NIV = { b: "básico", m: "medio", a: "avanzado" };
const SIT = (titulo, reto, pasos, producto, evaluacion) => ({ titulo, reto, pasos, producto, evaluacion });
const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };
const DEC = { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (Catalunya)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928919.pdf" };
const WIKI = (t, slug) => ({ t: `${t}, Wikipedia en español`, url: `https://es.wikipedia.org/wiki/${slug}` });
const V = (id, titulo, canal, vistas, megusta = 0) => ({ id, titulo, canal, vistas, megusta });

// libro(base, x): devuelve el tema ampliado.
// x.dibujos: {índice del apartado antiguo: svg} para los que no tenían dibujo.
// x.mas: {índice del apartado antiguo: html que se añade al final} para alargar apartados.
// x.nuevos: [posición, título, html, svg, vídeo?] apartados nuevos insertados en esa posición (0 = primero).
// x.grupos: tamaños de los grupos de apartados (1.x, 2.x…).
// x.ejercicios: [nivel b|m|a, q, sol]; x.quiz / x.examen: [q, [correcta, ...otras], explicación]; x.q4 / x.e4: cuarta opción de las antiguas.
function libro(base, x) {
  const T = { ...base };
  const bl = base.bloques.map((b, i) => ({ ...b, ...(!b.svg && x.dibujos && x.dibujos[i] ? { svg: x.dibujos[i] } : {}) }));
  Object.entries(x.mas || {}).forEach(([i, h]) => { bl[i].html += h; });
  [...(x.nuevos || [])].sort((a, b) => a[0] - b[0]).forEach(([pos, h, html, svg, video]) => {
    bl.splice(pos, 0, { html: `<h3>${h}</h3>${html}`, ...(svg ? { svg } : {}), ...(video ? { video } : {}) });
  });
  const grupos = x.grupos || [bl.length];
  let n = 0;
  const num = [];
  grupos.forEach((g, gi) => { for (let k = 1; k <= g; k++) num[n++] = `${gi + 1}.${k}`; });
  if (n !== bl.length) throw new Error(`${base.titulo}: grupos suman ${n} y hay ${bl.length} apartados`);
  T.bloques = bl.map((b, i) => ({ ...b, html: b.html.replace(/<h3>/, `<h3>${num[i]} `) }));
  T.lectura = { titulo: x.lectura[0], html: x.lectura[1] };
  T.minutos = x.minutos || 100;
  T.objetivos = [...base.objetivos, ...(x.objetivos || [])];
  T.claves = [...new Set([...base.claves, ...(x.claves || [])])];
  const nb = base.ejercicios.length;
  const niv = (i) => (i < nb * 0.4 ? "b" : i < nb * 0.8 ? "m" : "a");
  T.ejercicios = [
    ...base.ejercicios.map((e, i) => ({ nivel: NIV[niv(i)], ...e })),
    ...(x.ejercicios || []).map(([nv, q, sol]) => ({ nivel: NIV[nv], q, sol })),
  ];
  T.ejemplosTitulo = "Casos resueltos paso a paso";
  T.ejemplos = [...base.ejemplos, ...(x.ejemplos || []).map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado }))];
  T.errores = [...base.errores, ...(x.errores || [])];
  T.quiz = [...cuarta(base.quiz, x.q4 || []), ...preg(x.quiz || [], base.quiz.length)];
  T.examen = [...cuarta(base.examen, x.e4 || [], 1), ...preg(x.examen || [], base.quiz.length + 4)];
  T.tarjetas = [...base.tarjetas, ...(x.tarjetas || [])];
  T.glosario = x.glosario;
  T.situacion = x.situacion;
  T.familias = [...base.familias, ...(x.familias || [])];
  T.profesores = { ...base.profesores, ideas: [...base.profesores.ideas, ...(x.ideas || [])] };
  if (x.fuentes) T.fuentes = [...base.fuentes, ...x.fuentes];
  if (x.videos) T.bloques.forEach((b, i) => { if (x.videos[i] && !b.video) b.video = x.videos[i]; });
  T.revisado = "2026-11-14";
  return T;
}

module.exports = { libro, SIT, RD, DEC, WIKI, V, L };
