// Ayudas del lote 6 de 1º ESO (Oratoria y debate, Francés y Educación Física), nivel libro.
// Cada tema nuevo parte de su versión anterior (_eso1L6-base-*.js, conservada tal cual) y la amplía:
// lectura inicial, apartados numerados, más ejemplos, ejercicios por niveles, glosario y situación de aprendizaje.
// El fichero empieza por «_», así que build.js no lo trata como tema.
const L = require("./_eso1b");

const PATRON = [1, 2, 0, 2, 1, 0, 1, 2, 0, 1, 2, 0, 1];
// Pregunta: [correcta, ...otras] se coloca en una posición que varía.
const preg = (qs, desde = 0) => qs.map(([q, o, e], i) => {
  const dest = PATRON[(i + desde) % PATRON.length] % o.length;
  const otras = o.slice(1);
  return { q, o: [...otras.slice(0, dest), o[0], ...otras.slice(dest)], a: dest, e };
});

const NIV = { b: "básico", m: "medio", a: "avanzado" };
const SIT = (titulo, reto, pasos, producto, evaluacion) => ({ titulo, reto, pasos, producto, evaluacion });
const RD = L.BOE;
const WIKI = (t, slug) => ({ t: `${t}, Wikipedia en español`, url: `https://es.wikipedia.org/wiki/${slug}` });

// libro(base, extra): devuelve el tema ampliado.
// extra.grupos: tamaños de los grupos de apartados (1.x, 2.x…); extra.nuevos: [posición, título, html, svg?, vídeo?].
function libro(base, x) {
  const T = { ...base };
  const bl = base.bloques.map((b) => ({ ...b }));
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
  T.minutos = x.minutos || 90;
  T.objetivos = [...base.objetivos, ...(x.objetivos || [])];
  T.claves = [...new Set([...base.claves, ...(x.claves || [])])];
  const nb = base.ejercicios.length;
  const niv = (i) => (i < nb * 0.4 ? "b" : i < nb * 0.8 ? "m" : "a");
  T.ejercicios = [
    ...base.ejercicios.map((e, i) => ({ nivel: NIV[(x.niveles || "")[i] || niv(i)], ...e })),
    ...(x.ejercicios || []).map(([nv, q, sol]) => ({ nivel: NIV[nv], q, sol })),
  ];
  T.ejemplos = [...base.ejemplos, ...(x.ejemplos || []).map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado }))];
  T.errores = [...base.errores, ...(x.errores || [])];
  T.quiz = [...base.quiz, ...preg(x.quiz || [], base.quiz.length)];
  T.examen = [...base.examen, ...preg(x.examen || [], base.quiz.length + 4)];
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

module.exports = { libro, SIT, RD, WIKI, V: L.V, L };
