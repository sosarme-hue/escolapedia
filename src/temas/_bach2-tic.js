// Ayudas de los temas de Tecnologías de la Información y la Comunicación II (2º de Bachillerato, nivel libro).
// Reutiliza el montaje de TIC I (_bach1L38.js → _bach1L3.js: tema, figura, textos, code y los dibujos de _eso4L11:
// tx, cajas, flujo, ciclo, barras, comparar, capas, estrella, rejilla) y cambia materia, curso y fuentes.
// El fichero empieza por «_», así que build.js no lo trata como tema.
const B = require("./_bach1L38");

const MATERIA = "Tecnologías de la Información y la Comunicación II";

// Vídeos elegidos con tools/videos.py (en español, los más vistos, sin repetir ids de otros temas).
const VID = {
  "mod-funciones": { id: "9k91jETchkI", canal: "BitBoss", vistas: 400057 },
  "mod-modulos": { id: "t93x-vnFvP4", canal: "pildorasinformaticas", vistas: 241766 },
  "mod-excepciones": { id: "IFfdRY609Fg", canal: "UskoKruM2010", vistas: 24273 },
  "mod-modular": { id: "zBIG4D8KhWc", canal: "Charly Cimino", vistas: 24399 },
  "ed-general": { id: "oQ0WkIdr73E", canal: "makigas", vistas: 287859 },
  "ed-pilas": { id: "-Shr2s0gYao", canal: "Universitat Politècnica de València - UPV", vistas: 104141 },
  "ed-archivos": { id: "71xSLk8l25Q", canal: "UskoKruM2010", vistas: 83516 },
  "ed-json": { id: "RhxOTqFbI5Q", canal: "TodoCode", vistas: 153529 },
  "alg-burbuja": { id: "pqZ04TT15PQ", canal: "Chio Code", vistas: 57736 },
  "alg-binaria": { id: "7qv1An90q2Q", canal: "ISC3BITSVA", vistas: 74613 },
  "alg-quick": { id: "UrPJLhKF1jY", canal: "Chio Code", vistas: 92891 },
  "alg-recursividad": { id: "lilBGvaOSy8", canal: "makigas", vistas: 275159 },
  "alg-general": { id: "nqusvWZiL8M", canal: "makigas", vistas: 47130 },
  "poo-general": { id: "SI7O81GMG2A", canal: "BitBoss", vistas: 814670 },
  "poo-clases": { id: "VYXdpjCZojA", canal: "codigofacilito", vistas: 324006 },
  "poo-herencia": { id: "0xt806gLghg", canal: "UskoKruM2010", vistas: 33333 },
  "poo-polimorfismo": { id: "1J9bCm2J8wU", canal: "UskoKruM2010", vistas: 11239 },
  "gui-general": { id: "XgjKa9kkYjc", canal: "Fazt", vistas: 204017 },
  "gui-tkinter": { id: "h8usxRykVmI", canal: "Enrique Barros", vistas: 10983 },
  "gui-ux": { id: "rKQ1qdD1hrE", canal: "Coderhouse", vistas: 64632 },
  "gui-pruebas": { id: "wA_y-72rLs0", canal: "codigofacilito", vistas: 37266 },
  "bd-general": { id: "SKOiEXlFNeM", canal: "TodoCode", vistas: 184366 },
  "bd-er": { id: "l5PDQtUVye8", canal: "Eliezer De León", vistas: 742731 },
  "bd-relaciones": { id: "AArIcStS0TU", canal: "TodoCode", vistas: 136730 },
  "bd-normalizacion": { id: "MdYvCMbQji4", canal: "Daniela Bohórquez Escovar", vistas: 322922 },
};
const V = (k, titulo) => {
  if (!VID[k]) throw new Error(`vídeo ${k} no encontrado`);
  const { id, canal, vistas } = VID[k];
  return { id, titulo, canal, vistas };
};

const PYDOC = { t: "Documentación oficial de Python en español", url: "https://docs.python.org/es/3/" };
const MDN = { t: "MDN Web Docs en español (Mozilla)", url: "https://developer.mozilla.org/es/" };

function tema(o) {
  const T = B.tema(o);
  T.materia = MATERIA;
  T.curso = "2-bachillerato";
  T.revisado = o.revisado || "2026-11-21";
  return T;
}

module.exports = { ...B, MATERIA, tema, V, VID, PYDOC, MDN };
