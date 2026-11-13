// Ayudas del lote 8 de 4º ESO en formato «Tema nivel libro» (README): Lengua Catalana y Cultura Clásica.
// El fichero empieza por «_», así que build.js no lo trata como tema.
// Permite escribir los temas de forma compacta y los convierte a la forma que espera build.js:
//   bloques:    [título, html, svg, video?]           -> { html: "<h3>título</h3>html", svg, video }
//   ejemplos:   [enunciado, [pasos], resultado]       -> { enunciado, pasos, resultado }
//   ejercicios: { basico: [[q, sol]], medio: [...], avanzado: [...] } -> [{ nivel, q, sol }]
//   quiz/examen: [pregunta, [correcta, otra, otra, otra], explicación] -> { q, o, a, e }
//               (la correcta se coloca en una posición que va cambiando).
const L = require("./_lenguas");

const P = (...ps) => ps.map((p) => `<p>${p}</p>`).join("");
const vid = (id, titulo, canal, vistas, busqueda) => ({ id, titulo, canal, vistas, megusta: 0, ...(busqueda ? { busqueda } : {}) });

const palabras = (html) => String(html).replace(/<svg[\s\S]*?<\/svg>/g, " ").replace(/<[^>]+>/g, " ").split(/\s+/).filter((w) => /[\p{L}\d]/u.test(w)).length;

function preguntas(lista, desfase) {
  return (lista || []).map((x, i) => {
    if (!Array.isArray(x)) return x;
    const [q, [ok, ...otras], e] = x;
    const a = (i * 3 + desfase) % (otras.length + 1);
    const o = [...otras];
    o.splice(a, 0, ok);
    return { q, o, a, e };
  });
}

const NIV = [["basico", "básico"], ["medio", "medio"], ["avanzado", "avanzado"]];

function libro(T) {
  T.bloques = T.bloques.map((b) => {
    if (!Array.isArray(b)) return b;
    const [t, html, svg, video] = b;
    const o = { html: `<h3>${t}</h3>${html}`, svg };
    if (video) o.video = video;
    return o;
  });
  T.ejemplos = (T.ejemplos || []).map((x) => (Array.isArray(x) ? { enunciado: x[0], pasos: x[1], resultado: x[2] } : x));
  if (T.ejercicios && !Array.isArray(T.ejercicios)) {
    const E = T.ejercicios;
    T.ejercicios = NIV.flatMap(([k, nivel]) => (E[k] || []).map(([q, sol]) => ({ nivel, q, sol })));
  }
  T.quiz = preguntas(T.quiz, 1);
  T.examen = preguntas(T.examen, 2);

  // Comprobaciones del formato nivel libro: avisan en consola, no paran la compilación.
  const avisa = (m) => console.warn(`[nivel libro] ${T.titulo}: ${m}`);
  const n = palabras(T.bloques.map((b) => b.html).join(" "));
  if (n < 2000 || n > 3000) avisa(`${n} palabras en los bloques (2.000-3.000)`);
  if (T.lectura) { const nl = palabras(T.lectura.html); if (nl < 140 || nl > 260) avisa(`lectura de ${nl} palabras (150-250)`); }
  const rango = (k, v, a, b) => { if (v < a || v > b) avisa(`${k}: ${v} (${a}-${b})`); };
  rango("bloques", T.bloques.length, 10, 16);
  rango("ejercicios", T.ejercicios.length, 30, 40);
  rango("quiz", T.quiz.length, 20, 20);
  rango("examen", (T.examen || []).length, 8, 8);
  rango("tarjetas", T.tarjetas.length, 12, 12);
  rango("glosario", (T.glosario || []).length, 12, 20);
  rango("ejemplos", T.ejemplos.length, 6, 6);
  rango("errores", T.errores.length, 6, 6);
  T.bloques.forEach((b, i) => { if (!b.svg) avisa(`bloque ${i + 1} sin dibujo`); });
  T.quiz.concat(T.examen || []).forEach((q) => { if (q.o.length !== 4) avisa(`pregunta sin 4 opciones: ${q.q}`); });
  return T;
}

// Fuentes de referencia comunes.
const FUENTES = {
  boe: L.BOE,
  decret: { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (DOGC)", url: "https://xtec.gencat.cat/ca/curriculum/eso/" },
  iec: { t: "Institut d'Estudis Catalans: Gramàtica de la llengua catalana", url: "https://giec.iec.cat/" },
  optimot: { t: "Optimot, consultes lingüístiques (Generalitat de Catalunya)", url: "https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html" },
  escriptors: { t: "Associació d'Escriptors en Llengua Catalana", url: "https://www.escriptors.cat/" },
};

module.exports = { P, vid, libro, palabras, FUENTES, L };
