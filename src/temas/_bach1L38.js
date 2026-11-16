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

// Escapa < > & en los textos que build.js inserta tal cual (quiz, examen, tarjetas, errores, ejercicios,
// ejemplos y glosario), para poder escribir código HTML o de programación como texto. El código de varias
// líneas ya lo escapa codigo() de _bach1L3, así que aquí solo se escapan los textos de una línea.
const e1 = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const eL = (t) => (typeof t === "string" && t.includes("\n") ? t : e1(t));
function textos(o) {
  const par = ([a, b, ...r]) => [e1(a), Array.isArray(b) ? b.map(e1) : e1(b), ...r.map((x) => (typeof x === "string" ? e1(x) : x))];
  return {
    ...o,
    quiz: o.quiz.map(par), examen: o.examen.map(par),
    tarjetas: o.tarjetas.map(([a, b]) => [e1(a), e1(b)]),
    errores: o.errores.map(e1),
    glosario: o.glosario.map(([a, b]) => [e1(a), e1(b)]),
    ejemplos: o.ejemplos.map(([en, pasos, res]) => [e1(en), pasos.map(e1), eL(res)]),
    ejercicios: Object.fromEntries(Object.entries(o.ejercicios).map(([k, v]) => [k, v.map(([q, sol]) => [e1(q), eL(sol)])])),
  };
}

function tema(o) {
  const T = B.tema(o);
  T.materia = MATERIA;
  T.fuentes = [T.fuentes[0], { t: "Tecnologías de la Información y la Comunicación (optativa de Bachillerato): currículo autonómico", url: "https://educagob.educacionfpydeportes.gob.es/curriculo/curriculo-lomloe.html" }, ...T.fuentes.slice(1)];
  T.revisado = o.revisado || "2026-11-16";
  return T;
}

module.exports = { ...B, MATERIA, code, INCIBE, AEPD, INTEF, DIGCOMP, tema, textos };
