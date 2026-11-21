// Ayudas para los temas de Análisis Musical II (2º de Bachillerato, modalidad de Artes).
// Formato «esencial», como Análisis Musical I (_bach1-am.js): lo fundamental para analizar formas y géneros
// de cada época, claro y ordenado, sin la extensión de un tema nivel libro. Reutiliza todos sus dibujos.
const A = require("./_bach1-am");

const FUENTES = [
  { t: "Real Decreto 243/2022, Análisis Musical II: saberes básicos (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" },
];

function tema(o) {
  const T = A.tema(o);
  T.materia = "Análisis Musical II";
  T.curso = "2-bachillerato";
  T.fuentes = [...T.fuentes.filter((f) => !/243\/2022/.test(f.t)), ...FUENTES, ...(o.fuentes || [])].filter((f, i, arr) => arr.findIndex((g) => g.url === f.url) === i);
  return T;
}

module.exports = { ...A, tema };
