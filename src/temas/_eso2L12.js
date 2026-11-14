// Ayudas del lote 12 de 2º ESO nivel libro (Cultura Clásica y Francés).
// Reutiliza los esquemas de 3º ESO (_eso3L4: flujo, compara, ciclo, linea, barras, capas, piramide, radial, cita, tabla)
// y los dibujos de la versión anterior de cada tema (_eso2L12-previo).
const L = require("./_eso3L4");
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");
const P = require("./_eso2L12-previo");

const CURSO = "2-eso";
const REV = "2026-11-14";
const DEC = { t: "Decret 175/2022, d'ordenació dels ensenyaments de l'educació bàsica (Catalunya)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928919.pdf" };

// Dibujo de un bloque de la versión anterior: viejo("cc-heroes", 2).
const viejo = (slug, i) => {
  const s = P[slug] && P[slug].svg[i];
  if (!s) throw new Error(`No hay dibujo previo ${slug} ${i}`);
  return s;
};
const figura = (slug) => P[slug].fig;
const video = (slug) => P[slug].video;
// Vídeos nuevos (buscados con tools/videos.py) para completar los de bloque.
const EXTRA = {
  "cc-construcciones": { id: "bwpx6-ROdVw", titulo: "¿Cómo funcionaban los Acueductos Romanos?", canal: "Mira la Historia / Mitologia", vistas: 22430, megusta: 0, busqueda: "acueductos romanos ingeniería explicación" },
  "cc-dioses-olimpo": { id: "Nmq4LvjoYlg", titulo: "Hera: La Reina del Olimpo - Mitología Griega", canal: "Mira la Historia / Mitologia", vistas: 603427, megusta: 0, busqueda: "Zeus Hera Poseidón Atenea mitología griega" },
  "cc-ejercito-romano": { id: "jT_sXIH6djw", titulo: "¿Cómo se organizaban las legiones romanas? Jerarquía, rangos", canal: "Historia ex Hispania", vistas: 153792, megusta: 0, busqueda: "legión romana organización explicación" },
  "cc-heroes": { id: "L2Vo_JR3-G4", titulo: "Perseo: El Origen del Héroe - Mitología Griega", canal: "Mira la Historia / Mitologia", vistas: 728357, megusta: 0, busqueda: "héroes griegos mitología Heracles Perseo" },
  "cc-juegos-olimpicos": { id: "fIyQNQBh9wA", titulo: "El origen de los Juegos Olímpicos", canal: "Canal História e Tu", vistas: 135387, megusta: 0, busqueda: "Olimpia juegos olímpicos antiguos Grecia historia" },
  "cc-mapa": { id: "cknXSvinhJo", titulo: "La Antigua Grecia - 5 cosas que deberías saber", canal: "Smile and Learn - Español", vistas: 1482674, megusta: 0, busqueda: "Grecia antigua mapa colonias geografía" },
  "cc-palabras": { id: "2HstFzzSRHg", titulo: "Etimología: raíces griegas y latinas", canal: "Ivonne Ningle", vistas: 62063, megusta: 0, busqueda: "etimología latín griego prefijos sufijos" },
  "cc-vida-atenas-roma": { id: "UotQnri0-Cg", titulo: "Democracia ateniense", canal: "História Online", vistas: 171812, megusta: 0, busqueda: "democracia ateniense explicación" },
  "fr-loisirs": { id: "D8DydJlLdeE", titulo: "Les activités (loisirs) - JOUER et FAIRE", canal: "Beatriz Borderieux", vistas: 166794, megusta: 0, busqueda: "Jouer faire de à loisirs français" },
};
// Dos vídeos de bloque distintos del general: los anteriores y, si faltan, el nuevo.
const videos = (slug) => {
  const g = P[slug].video.id;
  const l = P[slug].videos.filter((v) => v.id !== g);
  if (EXTRA[slug]) l.push(EXTRA[slug]);
  return l.slice(0, 2);
};

// Ejercicios por niveles a partir de tres listas de pares [pregunta, solución].
const niveles = (b, m, a) => [
  ...b.map(([q, sol]) => ({ nivel: "básico", q, sol })),
  ...m.map(([q, sol]) => ({ nivel: "medio", q, sol })),
  ...a.map(([q, sol]) => ({ nivel: "avanzado", q, sol })),
];
// Test: la respuesta correcta se escribe la primera y aquí se reparte en posiciones variadas.
const PATRON = [1, 3, 0, 2, 3, 1, 2, 0, 2, 0, 3, 1, 0, 2, 1, 3, 2, 0, 1, 3];
const preg = (lista, desfase = 0) => lista.map(([q, o, e], i) => {
  const dest = PATRON[(i + desfase) % PATRON.length] % o.length;
  const otras = o.slice(1);
  return { q, o: [...otras.slice(0, dest), o[0], ...otras.slice(dest)], a: dest, e };
});

// Constructor del tema nivel libro con formas cortas. Bloques: [título, html, svg].
function tema(o) {
  const [vA, vB] = videos(o.slug);
  const [b, m, a] = o.ej;
  return {
    materia: o.materia,
    curso: CURSO,
    titulo: o.titulo,
    minutos: o.minutos || 100,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: { texto: o.pregunta[0], respuesta: o.pregunta[1] },
    lectura: { titulo: o.lectura[0], html: o.lectura[1] },
    bloques: o.bloques.map(([ti, html, svg], i) => ({ html: `<h3>1.${i + 1} ${ti}</h3>${html}`, svg, ...(i === 0 ? { video: vA } : i === 5 ? { video: vB } : {}) })),
    figura: figura(o.slug),
    video: video(o.slug),
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    errores: o.errores,
    ejercicios: niveles(b, m, a),
    quiz: preg(o.quiz),
    examen: preg(o.examen, 7),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], o.mapa[1], o.mapa[2], o.mapa[3] || 260),
    tarjetas: o.tarjetas,
    glosario: o.glosario,
    situacion: o.situacion,
    familias: [...o.familias, "Repasad las tarjetas del tema dos minutos al día."],
    profesores: { saberes: o.saberes, ideas: o.ideas },
    fuentes: [RD, DEC, ...o.fuentes],
    revisado: REV,
  };
}

module.exports = { ...L, F, D, mapa, BG, t, fl, caja, tablaH: tabla, RD, wiki, DEC, CURSO, REV, viejo, figura, video, videos, niveles, preg, tema, EXTRA };
