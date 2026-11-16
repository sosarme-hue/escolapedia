// Ayudas de los temas de Economía, Emprendimiento y Actividad Empresarial (1º de Bachillerato, nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza las ayudas de Economía (_bach1-eco.js: eco, barrasSig, cajas, flujo, barras, versus, rueda, cuadro, crono, fig, B, QS, EJ, EX, V, MAPA, SIT...)
// y añade tema(), que pone materia y curso, las fuentes comunes y comprueba el formato «nivel libro».
const E = require("./_bach1-eco");

const MATERIA = "Economía, Emprendimiento y Actividad Empresarial";

const SAB = (s) => `${s} (RD 243/2022, Economía, Emprendimiento y Actividad Empresarial, 1º de Bachillerato: saberes básicos «A. Economía», «B. Emprendimiento» y «C. Actividad empresarial»; en Cataluña, Decret 171/2022, Economia, Emprenedoria i Activitat Empresarial).`;

const IPYME = { t: "Portal PYME del Ministerio de Industria: crear una empresa y formas jurídicas", url: "https://industria.gob.es/es-es/Servicios/Paginas/crea-tu-empresa.aspx" };
const FINEDU = { t: "Finanzas para todos (Banco de España y CNMV): educación financiera", url: "https://www.finanzasparatodos.es/" };
const GEM = { t: "Global Entrepreneurship Monitor (GEM España): informes sobre emprendimiento", url: "https://www.gem-spain.com/" };
const ODS = { t: "Naciones Unidas: Objetivos de Desarrollo Sostenible", url: "https://www.un.org/sustainabledevelopment/es/" };
const OEPM = { t: "Oficina Española de Patentes y Marcas (OEPM)", url: "https://www.oepm.es/" };
const SEPE = { t: "SEPE: Servicio Público de Empleo Estatal", url: "https://www.sepe.es/" };

const strip = (s) => String(s).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

function tema(o) {
  const T = { materia: MATERIA, curso: "1-bachillerato", ...o, fuentes: [E.RD, E.DC, ...(o.fuentes || [])], revisado: o.revisado || "2026-11-16" };
  const av = [];
  const w = T.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 2000 || w > 3200) av.push(`${w} palabras`);
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

module.exports = { ...E, MATERIA, SAB, IPYME, FINEDU, GEM, ODS, OEPM, SEPE, tema };
