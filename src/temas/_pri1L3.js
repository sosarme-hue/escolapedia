// Ayudas para los temas de 1º de Primaria a nivel libro (Ciencias de la Naturaleza, Ciencias Sociales,
// Educación Física y Religión). No es un tema: empieza por "_". Reúne los dibujos de _pri1-dib.
const DB = require("./_pri1-dib");
const { svg, rot } = DB;

// Apartado: título, html y dibujo (260×180). extra = { video } si lleva vídeo.
const B = (h, html, label, body, extra = {}) => ({ html: `<h3>${h}</h3>${html}`, svg: svg(label, body), ...extra });
// Pregunta de test con 3 opciones.
const Q = (q, o, a, e) => ({ q, o, a, e });
// Ejercicios por niveles.
const b = (q, sol) => ({ q, sol, nivel: "básico" });
const m = (q, sol) => ({ q, sol, nivel: "medio" });
const a = (q, sol) => ({ q, sol, nivel: "avanzado" });
const lect = (titulo, html) => ({ titulo, html });
const sit = (titulo, reto, pasos, producto, evaluacion) => ({ titulo, reto, pasos, producto, evaluacion });
const V = (id, titulo, canal, vistas) => ({ id, titulo, canal, vistas, megusta: 0 });
// Texto de dibujo y lista de repaso con marcas.
const t = (x, y, s, color = "var(--ink)", size = 14) => rot(x, y, s, { size, color });
const lista = (items, x = 30, y = 40, paso = 26) => items.map((s, i) => `${DB.tick(x, y + i * paso - 4)}${rot(x + 20, y + i * paso, s, { size: 14, anchor: "start" })}`).join("");

module.exports = { ...DB, B, Q, b, m, a, lect, sit, V, t, lista };
