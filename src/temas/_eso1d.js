// Utilidades del lote D de 1º de ESO (Geografía e Historia, Inglés, Cultura Clásica y Religión).
// Reutiliza los dibujos de _hum.js y _lenguas.js (sin modificarlos) y añade un constructor de temas
// con formas cortas. El fichero empieza por «_», así que build.js no lo trata como tema.
const { F, D, mapa } = require("./_util");
const H = require("./_hum");
const L0 = require("./_lenguas");
// Con 4 turnos el nombre del hablante pisa la frase: en ese caso va delante, en la misma línea.
const L = { ...L0, dialogo: (label, turnos) => L0.dialogo(label, turnos.length >= 4 ? turnos.map(([q, t, c]) => ["", q ? `${q}: ${t}` : t, c]) : turnos) };

const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };

// La respuesta correcta se escribe siempre la primera; aquí se reparte en posiciones variadas (patrón fijo).
const PATRON = [1, 2, 0, 2, 1, 0, 1, 2, 0, 1, 2, 0, 1];
const preg = (lista, desfase = 0) => lista.map(([q, o, e], i) => {
  const dest = PATRON[(i + desfase) % PATRON.length] % o.length;
  const otras = o.slice(1);
  return { q, o: [...otras.slice(0, dest), o[0], ...otras.slice(dest)], a: dest, e };
});

// Vídeo: [id, título, canal, vistas, búsqueda?]
const vid = (v) => (v ? { id: v[0], titulo: v[1], canal: v[2], vistas: v[3], megusta: 0, ...(v[4] ? { busqueda: v[4] } : {}) } : undefined);

// Bloque: [título, cuerpo html, svg?, vídeo?]
// Si en el sitio del dibujo va una tabla, se pone dentro del texto (a todo el ancho), como en 3º y 4º.
const bloque = ([t, html, svg, v]) => {
  const esTabla = svg && !svg.trim().startsWith("<svg");
  return { html: `<h3>${t}</h3>${html}${esTabla ? svg : ""}`, ...(svg && !esTabla ? { svg } : {}), ...(v ? { video: vid(v) } : {}) };
};

// Constructor de tema con formas cortas.
function tema(o) {
  return {
    materia: o.materia,
    curso: "1-eso",
    titulo: o.titulo,
    minutos: o.minutos || 55,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: { texto: o.pregunta[0], respuesta: o.pregunta[1] },
    bloques: o.bloques.map(bloque),
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    ...(o.ejemplosTitulo ? { ejemplosTitulo: o.ejemplosTitulo } : {}),
    errores: o.errores,
    ejercicios: o.ejercicios.map(([q, sol]) => ({ q, sol })),
    figura: { titulo: o.figura[0], svg: o.figura[1] },
    video: vid(o.video),
    quiz: preg(o.quiz),
    examen: preg(o.examen || [], 3),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], o.mapa[1], o.mapa[2], o.mapa[3] || 240),
    tarjetas: o.tarjetas,
    familias: [...o.familias, "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
    profesores: { saberes: o.saberes, ideas: o.ideas },
    fuentes: [RD, ...(o.fuentes || []).map(([t, url]) => ({ t, url }))],
    revisado: "2026-11-12",
  };
}

// Pirámide social: la pirámide a la izquierda y los rótulos a la derecha, para que quepan textos largos.
// niveles: [[texto, color], ...] de arriba abajo (3 a 5). El texto puede partirse en dos líneas con «|».
function piramideSoc(label, niveles) {
  const n = niveles.length, top = 16, base = 166, h = (base - top) / n, cx = 66, W = 112;
  const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<svg viewBox="0 0 260 180" role="img" aria-label="${esc(label)}">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g ${F}>${niveles.map(([t, c], i) => {
      const y0 = top + i * h, y1 = y0 + h, w0 = (i / n) * W, w1 = ((i + 1) / n) * W, ym = y0 + h / 2 + (i === 0 ? 6 : 0);
      const ls = String(t).split("|");
      return `<path d="M${cx - w0 / 2} ${y0} H ${cx + w0 / 2} L ${cx + w1 / 2} ${y1} H ${cx - w1 / 2} Z" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/>
        <path d="M${cx + (w0 + w1) / 4 + 4} ${ym} H 134" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="3 3"/>
        ${ls.map((l, j) => `<text x="138" y="${ym + 4 - (ls.length - 1) * 6.5 + j * 13}" font-size="11.5" font-weight="${j ? 400 : 700}" fill="var(--ink)">${esc(l)}</text>`).join("")}`;
    }).join("")}</g>
  </svg>`;
}

module.exports = { F, D, mapa, H, L, RD, tema, preg, vid, tabla: H.tabla, piramideSoc };
