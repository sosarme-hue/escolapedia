// Ayudas del lote 9 de 3º ESO (Educación Plástica, Visual y Audiovisual y Educación Física, nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza los atajos de contenido y dibujos de _eso3L5.js y _eso3L4.js, y añade el mapa con el color de ESO.
const { mapa: mapaBase } = require("./_util");
const { cajas, flujo, versus, rueda, barras, linea, B, QS, EJ, EX, V, SIT, RD, WIKI } = require("./_eso3L5");
const { compara, ciclo, radial, tabla } = require("./_eso3L4");

// Mapa mental final con el color de la etapa.
const MAPA = (centro, ramas) => mapaBase(centro, "var(--eso)", ramas.map(([t, d], i) => [t, d, ["var(--leaf)", "var(--pen)", "var(--inf)", "var(--red)"][i]]));

const EPVA = "Educación Plástica, Visual y Audiovisual";
const EF = "Educación Física";

module.exports = { cajas, flujo, versus, rueda, barras, linea, compara, ciclo, radial, tabla, B, QS, EJ, EX, V, MAPA, SIT, RD, WIKI, EPVA, EF };
