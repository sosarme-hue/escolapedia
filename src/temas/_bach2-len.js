// Ayudas para Lengua Castellana y Literatura II (2º de Bachillerato) a nivel libro.
// Reutiliza la plantilla de 1º (_bach1-len): mismo formato, dibujos y comprobaciones; aquí se cambian
// la materia, el curso, la referencia curricular y la fecha de revisión.
const B = require("./_bach1-len");

const RD = { t: "Real Decreto 243/2022, estructura y enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" };
const DECRET = { t: "Decret 171/2022, d'ordenació dels ensenyaments del batxillerat (DOGC)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928552.pdf" };
const PAU = { t: "Crue Universidades Españolas: pruebas de acceso a la universidad (PAU)", url: "https://www.crue.org/" };
const saberes = (s) => `${s} (RD 243/2022, Lengua Castellana y Literatura II, saberes básicos de 2º de Bachillerato; en Cataluña, Decret 171/2022, de 20 de setembre, Llengua Castellana i Literatura II).`;

function tema(o) {
  const T = B.tema({ ...o, fuentes: [PAU, ...(o.fuentes || [])] });
  T.materia = "Lengua Castellana y Literatura II";
  T.curso = "2-bachillerato";
  T.profesores.saberes = saberes(o.saberes);
  T.fuentes = [RD, DECRET, PAU, ...(o.fuentes || [])];
  T.revisado = "2026-11-21";
  return T;
}

module.exports = { ...B, tema };
