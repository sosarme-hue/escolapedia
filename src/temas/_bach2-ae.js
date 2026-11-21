// Ayudas para los temas de Artes Escénicas II (2º de Bachillerato, modalidad de Artes).
// Formato «esencial», como Artes Escénicas I: lo fundamental del programa (RD 243/2022), claro y ordenado, sin la extensión de un libro.
const B = require("./_bach1-ae");

const tema = (o) => ({ ...B.tema(o), materia: "Artes Escénicas II", curso: "2-bachillerato" });

module.exports = { ...B, tema };
