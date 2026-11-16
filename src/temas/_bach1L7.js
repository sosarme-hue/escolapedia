// Ayudas de los temas de Literatura Universal (1º de Bachillerato, nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza las ayudas de Historia del Mundo Contemporáneo (_bach1-hmc.js: cajas, flujo, cuadro, crono, mapa, fig...)
// y añade las referencias curriculares de Literatura Universal.
const H = require("./_bach1-hmc");

const SAB = (s) => `${s} (RD 243/2022, Literatura Universal, 1º de Bachillerato: saberes básicos sobre la construcción de la identidad lectora y la lectura guiada, la interpretación y la valoración de obras relevantes de la literatura universal; en Cataluña, Decret 171/2022, Literatura Universal).`;

module.exports = { ...H, SAB };
