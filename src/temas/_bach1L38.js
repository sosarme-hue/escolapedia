// Ayudas de los temas de Tecnologías de la Información y la Comunicación I (1º de Bachillerato, nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza el montaje de Tecnología e Ingeniería I (_bach1L3.js: tema, figura, PRE y los dibujos de _eso4L11:
// tx, cajas, flujo, ciclo, barras, comparar, capas, estrella, rejilla…) y cambia la materia y las fuentes.
const B = require("./_bach1L3");

const MATERIA = "Tecnologías de la Información y la Comunicación I";

// Bloque de código dentro de un apartado (el texto se escapa aquí).
const code = (s) => `<pre style="${B.PRE}">${s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>`;

const INCIBE = { t: "INCIBE: Instituto Nacional de Ciberseguridad (Oficina de Seguridad del Internauta)", url: "https://www.incibe.es/ciudadania" };
const AEPD = { t: "Agencia Española de Protección de Datos", url: "https://www.aepd.es/" };
const INTEF = { t: "INTEF: Marco de Referencia de la Competencia Digital Docente y recursos", url: "https://intef.es/" };
const DIGCOMP = { t: "Comisión Europea: DigComp 2.2, marco de competencia digital de la ciudadanía", url: "https://publications.jrc.ec.europa.eu/repository/handle/JRC128415" };

function tema(o) {
  const T = B.tema(o);
  T.materia = MATERIA;
  T.fuentes = [T.fuentes[0], { t: "Tecnologías de la Información y la Comunicación (optativa de Bachillerato): currículo autonómico", url: "https://educagob.educacionfpydeportes.gob.es/curriculo/curriculo-lomloe.html" }, ...T.fuentes.slice(1)];
  T.revisado = o.revisado || "2026-11-16";
  return T;
}

module.exports = { ...B, MATERIA, code, INCIBE, AEPD, INTEF, DIGCOMP, tema };
