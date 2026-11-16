// Ayudas de los temas de Latín I (1º de Bachillerato, nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza las ayudas de Historia del Mundo Contemporáneo (_bach1-hmc.js: cajas, flujo, cuadro, crono, mapa, fig...)
// y añade las referencias curriculares de Latín I y tema(), que pone materia y curso y comprueba el formato «nivel libro».
const H = require("./_bach1-hmc");

const MATERIA = "Latín I";

const SAB = (s) => `${s} (RD 243/2022, Latín I, 1º de Bachillerato: saberes básicos «A. El texto: comprensión y traducción», «B. Plurilingüismo», «C. Educación literaria», «D. La antigua Roma» y «E. Legado y patrimonio»; en Cataluña, Decret 171/2022, Llatí I).`;

const DICT = { t: "Diccionario de latín Gaffiot en línea (consulta de vocablos)", url: "https://gaffiot.fr/" };
const PERSEUS = { t: "Perseus Digital Library: textos latinos con análisis morfológico", url: "https://www.perseus.tufts.edu/hopper/collection?collection=Perseus:collection:Greco-Roman" };
const DLE = { t: "Diccionario de la lengua española (RAE): etimologías", url: "https://dle.rae.es/" };

const strip = (s) => String(s).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

function tema(o) {
  const T = { materia: MATERIA, curso: "1-bachillerato", minutos: 120, ...o, fuentes: [H.RD, H.DC, ...(o.fuentes || [])], revisado: o.revisado || "2026-11-16" };
  const av = [];
  const w = T.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 2000 || w > 3300) av.push(`${w} palabras`);
  if (T.bloques.length < 10 || T.bloques.length > 16) av.push(`${T.bloques.length} bloques`);
  if (T.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  if (T.bloques.filter((b) => b.video).length < 2) av.push("faltan vídeos de bloque");
  const c = (n) => T.ejercicios.filter((e) => e.nivel === n).length;
  if (T.ejercicios.length < 30 || T.ejercicios.length > 40) av.push(`${T.ejercicios.length} ejercicios (${c("básico")}/${c("medio")}/${c("avanzado")})`);
  if (T.quiz.length !== 20 || T.quiz.some((q) => q.o.length !== 4)) av.push(`quiz ${T.quiz.length}`);
  if (T.examen.length !== 8 || T.examen.some((q) => q.o.length !== 4)) av.push(`examen ${T.examen.length}`);
  if (T.tarjetas.length !== 12) av.push(`tarjetas ${T.tarjetas.length}`);
  if (T.ejemplos.length !== 6 || T.errores.length !== 6) av.push(`ejemplos ${T.ejemplos.length} errores ${T.errores.length}`);
  if (T.glosario.length < 12 || T.glosario.length > 20) av.push(`glosario ${T.glosario.length}`);
  const lw = strip(T.lectura.html).split(" ").length;
  if (lw < 150 || lw > 250) av.push(`lectura ${lw} palabras`);
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro] ${T.titulo}: ${av.join(", ")}`);
  return T;
}

module.exports = { ...H, MATERIA, SAB, DICT, PERSEUS, DLE, tema };
