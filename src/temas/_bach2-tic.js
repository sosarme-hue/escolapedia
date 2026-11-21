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
  "sql-general": { id: "yLoh2sSDECw", canal: "The Coder Cave", vistas: 845526 },
  "sql-join": { id: "0BstRqp6Svg", canal: "TodoCode", vistas: 303104 },
  "sql-group": { id: "eVzmJv2B2wk", canal: "TodoCode", vistas: 93318 },
  "web-general": { id: "EvKm8yhM7V8", canal: "Dot Dager", vistas: 302685 },
  "web-flex": { id: "QFXSgGg-HWo", canal: "Victor Robles WEB", vistas: 217456 },
  "web-grid": { id: "edEG0CoM5gw", canal: "Kiko Palomares", vistas: 56474 },
  "web-media": { id: "yneuaVjotO8", canal: "AlexCG Design", vistas: 102287 },
  "js-general": { id: "8GTaO9XhA5M", canal: "Programador X", vistas: 466890 },
  "js-dom": { id: "4ILE0y58J00", canal: "TodoCode", vistas: 31875 },
  "js-eventos": { id: "TzhpyFmSioY", canal: "Code Hive", vistas: 34128 },
  "js-fetch": { id: "FJ-w0tf3d_w", canal: "midulive", vistas: 165186 },
  "pub-general": { id: "kltg9w3TiLc", canal: "Soy Dalto", vistas: 396658 },
  "pub-hosting": { id: "l6kdgO09G0I", canal: "Dostin Hurtado", vistas: 86414 },
  "pub-seo": { id: "_ewwO0Y1zb4", canal: "Mugu | Mentor en Marketing Digital", vistas: 96330 },
  "pub-cms": { id: "Yp_HroRM6rw", canal: "Academia de Hostinger", vistas: 91500 },
  "pub-github": { id: "aaEeEpOC-EQ", canal: "Dostin Hurtado", vistas: 139492 },
  "seg-general": { id: "3G8yJaudGC0", canal: "elmondigital", vistas: 127261 },
  "seg-cripto": { id: "wDpqrasDmxM", canal: "Profe Sang", vistas: 134625 },
  "seg-hash": { id: "it9suW1HN3Q", canal: "Contando Bits", vistas: 53149 },
  "seg-phishing": { id: "PAOZ7i6wAAE", canal: "Micro Joan", vistas: 127752 },
  "seg-claves": { id: "Cp4Tiq3LOrc", canal: "PantallasAmigas", vistas: 279522 },
  "ia-general": { id: "XuWMWPwdlik", canal: "BIG BOOK", vistas: 563295 },
  "ia-ml": { id: "xrQ1YH0PnrM", canal: "Linkfy", vistas: 191050 },
  "ia-redes": { id: "MRIv2IwFTPg", canal: "Dot CSV", vistas: 878149 },
  "ia-pandas": { id: "PvNKKrPE0AI", canal: "Errodringer", vistas: 130421 },
  "ia-etica": { id: "X3vXJ1kG1E8", canal: "NEURO - LEARNING", vistas: 117551 },
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
