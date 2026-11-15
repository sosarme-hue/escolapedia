// Ayudas de los temas de Filosofía (1º de Bachillerato, nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza las ayudas de Historia del Mundo Contemporáneo (dibujos de 260×180 con el texto partido en líneas).
const h = require("./_bach1-hmc");

const SABER = {
  A: "«A. La filosofía y el ser humano»",
  B: "«B. Conocimiento y realidad»",
  C: "«C. Acción y creación»",
};
// Saberes básicos: s es el contenido del tema y bs los bloques del currículo («A», «B», «C»).
const SAB = (s, bs = "A") => `${s} (RD 243/2022, Filosofía, 1º de Bachillerato: saberes básicos ${[...bs].map((b) => SABER[b]).join(" y ")}; en Cataluña, Decret 171/2022, Filosofia de 1r de batxillerat, sabers «La filosofia i l'ésser humà», «Coneixement i realitat» i «Acció i creació»).`;

const SEP = { t: "Stanford Encyclopedia of Philosophy (en inglés)", url: "https://plato.stanford.edu/" };
const FILOSOFIA_NET = { t: "Filosofía en español: textos y diccionario filosófico", url: "https://www.filosofia.org/" };

module.exports = { ...h, SAB, SEP, FILOSOFIA_NET };
