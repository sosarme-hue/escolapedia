// Ayudas para los temas de Coro y Técnica Vocal II (2º de Bachillerato, modalidad de Artes).
// Formato «esencial», igual que Coro y Técnica Vocal I (_bach1-ct.js): lo fundamental del curso 2026-27,
// claro y ordenado, sin llegar a nivel de libro. Reutiliza los dibujos propios de la voz de 1º.
const B = require("./_bach1-ct");

const tema = (o) => ({ ...B.tema(o), materia: "Coro y Técnica Vocal II", curso: "2-bachillerato" });

module.exports = { ...B, tema };
