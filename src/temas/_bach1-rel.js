// Ayudas de los temas de Religión (Religión Católica, 1º de Bachillerato, nivel libro).
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Reutiliza las ayudas de Historia del Mundo Contemporáneo (dibujos de 260×180 con el texto partido en líneas).
// Vídeos buscados con tools/videos.py el 21-11-2026, sin repetir ids de otros temas.
const h = require("./_bach1-hmc");

// Saberes básicos: s es el contenido del tema.
const SAB = (s) => `${s} (currículo de Religión Católica de Bachillerato publicado por Resolución de 21 de junio de 2022 de la Secretaría de Estado de Educación, en el marco del RD 243/2022; competencias específicas sobre identidad personal y sentido, dignidad humana, compromiso social, diálogo fe-cultura y convivencia entre religiones. En Cataluña, en el marco del Decret 171/2022).`;

const CEC = { t: "Catecismo de la Iglesia Católica (Santa Sede)", url: "https://www.vatican.va/archive/catechism_sp/index_sp.html" };
const VAT = (t, url) => ({ t: `${t} (Santa Sede)`, url });

module.exports = { ...h, SAB, CEC, VAT };
