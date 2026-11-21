// Ayudas de los temas de Educación Física (1º de Bachillerato, nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza el montaje y las comprobaciones de _bach1L3 y los dibujos de _bach1L43 (lienzo, silueta).
const L = require("./_bach1L43");
const B3 = require("./_bach1L3");

const MATERIA = "Educación Física";

function tema(o) {
  const T = B3.tema({ revisado: "2026-11-21", ...o });
  T.materia = MATERIA;
  return T;
}

// Saberes básicos de Educación Física en 1º de Bachillerato (RD 243/2022, anexo II).
const SAB = (s) => `${s} (Educación Física de 1º de Bachillerato, materia común del RD 243/2022: saberes de vida activa y saludable, organización y gestión de la actividad física, resolución de problemas en situaciones motrices, autorregulación emocional e interacción social, manifestaciones de la cultura motriz e interacción eficiente y sostenible con el entorno).`;

const FUENTES = {
  ...L.FUENTES,
  RD: { t: "Real Decreto 243/2022: Educación Física en el Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" },
};

module.exports = { ...L, tema, SAB, FUENTES };
