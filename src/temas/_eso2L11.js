// Ayudas del lote 11 de 2º ESO nivel libro (Valores Cívicos y Éticos, Oratoria y debate).
// Reutiliza los esquemas de 3º ESO (_eso3L4: flujo, compara, ciclo, linea, barras, capas, piramide, radial, cita, tabla)
// y los dibujos de la versión anterior de cada tema (_eso2L11-previo).
const L = require("./_eso3L4");
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");
const P = require("./_eso2L11-previo");

const CURSO = "2-eso";
const REV = "2026-11-14";
const DEC = { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (Catalunya)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928919.pdf" };

// Dibujo de un bloque de la versión anterior: viejo("epva-color", 2).
const viejo = (slug, i) => {
  const s = P[slug] && P[slug].svg[i];
  if (!s) throw new Error(`No hay dibujo previo ${slug} ${i}`);
  return s;
};
const figura = (slug) => P[slug].fig;
const video = (slug) => P[slug].video;
// Vídeos nuevos (buscados con tools/videos.py) para completar los de bloque cuando el anterior coincidía con el general.
const EXTRA = {
  "val-ddhh": { id: "haujKg_PXGQ", titulo: "¿Qué son los derechos humanos?", canal: "PUCP", vistas: 1015898, megusta: 0, busqueda: "derechos humanos para adolescentes" },
  "val-democracia": { id: "qHDB9z7C0uI", titulo: "La democracia: origen, concepto y características", canal: "Enseñanza y Herramientas", vistas: 301170, megusta: 0, busqueda: "democracia y participación ciudadana explicación" },
  "val-digital": { id: "5igm-mWFPiw", titulo: "Privacidad, identidad y datos personales en redes sociales", canal: "PantallasAmigas", vistas: 550218, megusta: 0, busqueda: "privacidad en internet redes sociales adolescentes" },
  "val-emociones": { id: "p6TSQmJnnXQ", titulo: "Emociones para adolescentes, psicología", canal: "lia ulli", vistas: 429358, megusta: 0, busqueda: "educación emocional adolescentes emociones" },
  "val-igualdad": { id: "nlTtRDtD_TI", titulo: "La discriminación: estereotipos, prejuicios y discriminación", canal: "Enseñanza y Herramientas", vistas: 297560, megusta: 0, busqueda: "igualdad de género estereotipos prejuicios discriminación" },
  "val-medio": { id: "5yCsjASSd1M", titulo: "¿Qué es la sostenibilidad?", canal: "ACCIONA", vistas: 635393, megusta: 0, busqueda: "sostenibilidad medio ambiente desarrollo sostenible" },
  "val-persona": { id: "6ipr7vueNxo", titulo: "Resumiendo la ética de Kant con Minecraft", canal: "Platonto", vistas: 545037, megusta: 0, busqueda: "dignidad humana kant" },
  "val-valores": { id: "ABZwNy_zhtg", titulo: "Ética y moral: qué significan y cuáles son sus diferencias", canal: "Universidad de Deusto", vistas: 486107, megusta: 0, busqueda: "valores y normas ética explicación" },
};
// Dos vídeos de bloque distintos del general: los anteriores (sin repetir el general) y, si faltan, el nuevo.
const videos = (slug) => {
  const g = P[slug].video.id;
  const l = P[slug].videos.filter((v) => v.id !== g).map(({ i, ...v }) => v);
  if (EXTRA[slug]) l.push(EXTRA[slug]);
  return l.slice(0, 2);
};

// Ejercicios por niveles a partir de tres listas de pares [pregunta, solución].
const niveles = (b, m, a) => [
  ...b.map(([q, sol]) => ({ nivel: "básico", q, sol })),
  ...m.map(([q, sol]) => ({ nivel: "medio", q, sol })),
  ...a.map(([q, sol]) => ({ nivel: "avanzado", q, sol })),
];
const test = (l) => l.map(([q, o, a, e]) => ({ q, o, a, e }));

module.exports = { ...L, F, D, mapa, BG, t, fl, caja, tablaH: tabla, RD, wiki, DEC, CURSO, REV, viejo, figura, video, videos, niveles, test , EXTRA };
