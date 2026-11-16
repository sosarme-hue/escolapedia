// Ayudas para Matemáticas Generales (1º de Bachillerato) a nivel libro.
// Reutiliza el montaje y los dibujos de Matemáticas Aplicadas a las Ciencias Sociales I (_bach1-macs):
// cada tema se escribe con tema({...}), se numeran los apartados (n.1, n.2…) y se comprueba el formato.
// Solo cambian la materia, la fecha de revisión y las fuentes del currículo.
const M = require("./_bach1-macs");

const CAT = { t: "Decret 171/2022, d'ordenació dels ensenyaments del batxillerat: Matemàtiques generals (DOGC)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928552.pdf" };

function tema(o) {
  const T = M.tema(o);
  T.materia = "Matemáticas Generales";
  T.revisado = "2026-11-16";
  T.fuentes = [M.RD, CAT, ...(o.fuentes || [])];
  return T;
}

module.exports = { ...M, tema, CAT };
