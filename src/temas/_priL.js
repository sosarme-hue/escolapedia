// Tema nivel libro de 5º y 6º de Primaria (README, «Tema nivel libro de 5º y 6º de Primaria»).
// Se amplía el tema que ya existe sin reescribirlo: al final del fichero del tema se llama a
//   require("./_priL").libro(module.exports, { ... })
// y se añaden la lectura inicial, apartados nuevos (con dibujo), ejercicios por niveles, más preguntas,
// glosario y situación de aprendizaje. Todos los apartados se numeran (1., 2., …) en el orden final.
const { palabras } = require("./_eso3L2");

const NIV = { b: "básico", m: "medio", a: "avanzado" };
// Posición de la respuesta correcta (se escribe siempre la primera en los datos).
const PATRON = [2, 0, 1, 1, 2, 0, 2, 1, 0, 0, 1, 2, 1, 0, 2];
const reparte = (qs, desde = 0) => qs.map(([q, o, e], i) => {
  const d = PATRON[(i + desde) % PATRON.length] % o.length, r = o.slice(1);
  return { q, o: [...r.slice(0, d), o[0], ...r.slice(d)], a: d, e };
});
const vid = (v) => (v ? { id: v[0], titulo: v[1], canal: v[2], vistas: v[3], megusta: 0 } : undefined);
// Apartado nuevo: [título, html, svg, vídeo?] (vídeo como [id, título, canal, vistas]).
const ap = ([h, html, svg, v]) => ({ html: `<h3>${h}</h3>${html}`, svg, ...(v ? { video: vid(v) } : {}) });
const tit = (b) => (b.html.match(/^<h3>(.*?)<\/h3>/) || [])[1];

function libro(T, A) {
  // 1. Apartados: inserta los nuevos detrás del título indicado (o al principio con "^") y al final.
  for (const [ref, nuevos] of Object.entries(A.tras || {}).reverse()) {
    const i = ref === "^" ? -1 : T.bloques.findIndex((b) => tit(b) === ref);
    if (i < 0 && ref !== "^") throw new Error(`libro: no encuentro «${ref}» en «${T.titulo}»`);
    T.bloques.splice(i + 1, 0, ...nuevos.map(ap));
  }
  if (A.final) T.bloques.push(...A.final.map(ap));
  for (const [ref, v] of Object.entries(A.videos || {})) {
    const b = T.bloques.find((x) => tit(x) === ref);
    if (!b) throw new Error(`libro: vídeo para «${ref}», que no existe en «${T.titulo}»`);
    b.video = vid(v);
  }
  T.bloques.forEach((b, i) => { b.html = b.html.replace(/^<h3>/, `<h3>${i + 1}. `); });
  // 2. Resto de piezas.
  T.lectura = A.lectura;
  if (A.minutos) T.minutos = A.minutos;
  if (A.objetivos) T.objetivos.push(...A.objetivos);
  if (A.ejemplos) T.ejemplos.push(...A.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })));
  if (A.errores) T.errores.push(...A.errores);
  const base = T.ejercicios.map((x, i) => ({ nivel: NIV[(A.nivelesBase || "")[i] || "m"], ...x }));
  T.ejercicios = [...base, ...A.ejercicios.map(([n, q, sol]) => ({ nivel: NIV[n], q, sol }))];
  T.quiz.push(...reparte(A.quiz, T.quiz.length));
  T.examen.push(...reparte(A.examen || [], T.examen.length + 5));
  T.tarjetas.push(...(A.tarjetas || []));
  T.glosario = A.glosario;
  T.situacion = A.situacion;
  if (A.fuentes) T.fuentes.push(...A.fuentes);
  T.revisado = A.revisado || "2026-11-22";
  // 3. Comprobaciones del nivel libro.
  const av = [], w = T.bloques.reduce((s, b) => s + palabras(b.html), 0), lw = palabras(T.lectura && T.lectura.html);
  if (w < 1600 || w > 2800) av.push(`${w} palabras`);
  if (T.bloques.length < 12 || T.bloques.length > 16) av.push(`${T.bloques.length} apartados`);
  if (T.bloques.some((b) => !b.svg)) av.push("apartado sin dibujo");
  if (T.bloques.filter((b) => b.video).length < 2) av.push("menos de 2 vídeos de apartado");
  if (lw < 120 || lw > 230) av.push(`lectura de ${lw} palabras`);
  if (T.ejemplos.length < 5) av.push(`${T.ejemplos.length} ejemplos`);
  if (T.errores.length < 6) av.push(`${T.errores.length} errores`);
  if (T.ejercicios.length < 24 || T.ejercicios.length > 30) av.push(`${T.ejercicios.length} ejercicios`);
  if (T.quiz.length !== 15) av.push(`${T.quiz.length} preguntas de quiz`);
  if (T.examen.length < 6) av.push(`${T.examen.length} de examen`);
  if (T.tarjetas.length < 10) av.push(`${T.tarjetas.length} tarjetas`);
  if (!T.glosario || T.glosario.length < 10 || T.glosario.length > 14) av.push("glosario");
  if (!T.situacion || T.situacion.pasos.length < 4) av.push("situación");
  if (av.length) console.warn(`[libro ${T.curso}] ${T.titulo}: ${av.join(", ")}`);
  return T;
}

module.exports = { libro };
