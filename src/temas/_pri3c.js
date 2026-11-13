// Utilidades del lote C de 3º de Primaria: Lengua Castellana y Lengua Catalana.
// Cada tema se escribe ya ampliado (README, «Tema ampliado»), con lenguaje para niños de 8 y 9 años.
// Reutiliza los dibujos de _lenguas.js y _hum.js (sin modificarlos) y añade dos propios: sílabas y versos.
// El fichero empieza por «_», así que build.js no lo trata como tema.
const { F, D, mapa } = require("./_util");
const H = require("./_hum");
const L0 = require("./_lenguas");
const VID = require("./_pri3c-videos");

// Con 4 turnos o más, el nombre del hablante va delante del texto para que no se pisen.
const L = { ...L0, dialogo: (label, turnos) => L0.dialogo(label, turnos.length >= 4 ? turnos.map(([q, t, c]) => ["", q ? `${q}: ${t}` : t, c]) : turnos) };

const RD = { t: "Real Decreto 157/2022, enseñanzas mínimas de la Educación Primaria (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296" };
const FUENTES = {
  "Lengua Castellana y Literatura": [
    { t: "Real Academia Española, Diccionario de la lengua española", url: "https://dle.rae.es/" },
    { t: "RAE y ASALE, Ortografía y Gramática de la lengua española", url: "https://www.rae.es/" },
  ],
  "Lengua Catalana y Literatura": [
    { t: "Institut d'Estudis Catalans: Gramàtica de la llengua catalana", url: "https://giec.iec.cat/" },
    { t: "Optimot, consultes lingüístiques (Generalitat de Catalunya)", url: "https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html" },
  ],
};
const CURRICULO = {
  "Lengua Castellana y Literatura": "RD 157/2022, Lengua Castellana y Literatura, segundo ciclo de Primaria",
  "Lengua Catalana y Literatura": "Llengua Catalana i Literatura, cicle mitjà de Primària; currículums de Catalunya, Illes Balears i Comunitat Valenciana",
};
const REPASO = {
  "Lengua Catalana y Literatura": "Repasseu les targetes del pas 6 dos minuts cada dia durant la setmana.",
};

// La respuesta correcta se escribe siempre la primera y aquí se reparte en posiciones variadas (patrón fijo).
const PATRON = [1, 2, 0, 2, 1, 0, 1, 2, 0, 1, 2, 0, 1];
const preg = (lista, desfase = 0) => lista.map(([q, o, e], i) => {
  const dest = PATRON[(i + desfase) % PATRON.length] % o.length;
  const otras = o.slice(1);
  return { q, o: [...otras.slice(0, dest), o[0], ...otras.slice(dest)], a: dest, e };
});

// Vídeo por clave de _pri3c-videos.js: [id, título, canal, vistas, búsqueda?]. Nunca ids inventados.
const vid = (k) => {
  if (!k) return undefined;
  const v = VID[k];
  if (!v) throw new Error(`_pri3c: vídeo desconocido «${k}»`);
  return { id: v[0], titulo: v[1], canal: v[2], vistas: v[3], megusta: 0, ...(v[4] ? { busqueda: v[4] } : {}) };
};

// Bloque: [título, cuerpo html, svg o tabla?, clave de vídeo?].
// Si en el sitio del dibujo va una tabla HTML, se pone dentro del texto (a todo el ancho).
const bloque = ([t, html, svg, v]) => {
  const esTabla = svg && !svg.trim().startsWith("<svg");
  return { html: `<h3>${t}</h3>${html}${esTabla ? svg : ""}`, ...(svg && !esTabla ? { svg } : {}), ...(v ? { video: vid(v) } : {}) };
};

function tema(o) {
  const fin = REPASO[o.materia] || "Repasad las tarjetas del paso 6 dos minutos al día durante la semana.";
  return {
    materia: o.materia,
    curso: "3-primaria",
    titulo: o.titulo,
    minutos: o.minutos || 45,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: { texto: o.pregunta[0], respuesta: o.pregunta[1] },
    bloques: o.bloques.map(bloque),
    figura: { titulo: o.figura[0], svg: o.figura[1] },
    video: vid(o.video),
    ...(o.ejemplosTitulo ? { ejemplosTitulo: o.ejemplosTitulo } : {}),
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    errores: o.errores,
    ejercicios: o.ejercicios.map(([q, sol]) => ({ q, sol })),
    quiz: preg(o.quiz),
    examen: preg(o.examen, 4),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], "var(--pri)", o.mapa[1], o.mapa[2] || 220),
    tarjetas: o.tarjetas,
    familias: [...o.familias, fin],
    profesores: { saberes: `${o.saberes} (${CURRICULO[o.materia]}).`, ideas: o.ideas },
    fuentes: [RD, ...(o.fuentes || []).map(([t, url]) => ({ t, url })), ...FUENTES[o.materia]],
    revisado: "2026-11-13",
  };
}

// Colores de las figuras.
const AZ = "var(--pen)", RO = "var(--red)", VE = "var(--leaf)", NA = "var(--inf)", AG = "var(--water)", SO = "var(--sun)", MO = "var(--bac)";

// Palabras partidas en sílabas, con la tónica en color: [[sílabas], índice tónica, etiqueta, color] (máx. 4).
function silabas(label, palabras, nota) {
  const n = palabras.length, alto = nota ? 150 : 170, paso = alto / n;
  let out = "";
  palabras.forEach(([sil, ton, et, c], i) => {
    const y = 8 + i * paso + (paso - 34) / 2;
    // Cajas a la medida de cada sílaba; si no caben en 232 px, todo se reduce en proporción.
    const base = sil.map((s) => Math.max(30, [...s].length * 11 + 14));
    const sitio = (et ? 150 : 232) - (sil.length - 1) * 4, total = base.reduce((a, b) => a + b, 0);
    const k = Math.min(1, sitio / total), ws = base.map((w) => w * k), fs = +(16 * Math.max(k, 0.7)).toFixed(1);
    let x = 14;
    sil.forEach((s, j) => {
      const w = ws[j];
      out += `<rect x="${x}" y="${y}" width="${w}" height="34" rx="8" fill="${j === ton ? c : "var(--card)"}" stroke="var(--ink)" stroke-width="1.5"/>
        <text x="${x + w / 2}" y="${y + 23}" text-anchor="middle" font-size="${fs}" font-weight="700" fill="${j === ton ? "#fff" : "var(--ink)"}" ${D}>${s}</text>`;
      x += w + 4;
    });
    if (et) out += `<text x="246" y="${y + 22}" text-anchor="end" font-size="${L0.fz(et, 13, 246 - x - 6, true)}" font-weight="700" fill="${c}" ${F}>${et}</text>`;
  });
  if (nota) out += `<text x="130" y="170" text-anchor="middle" font-size="${L0.fz(nota, 12, 236)}" fill="var(--muted)" ${F}>${nota}</text>`;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="${H.esc(label)}"><rect width="260" height="180" rx="14" fill="var(--paper)"/>${out}</svg>`;
}

// Versos de un poema con su medida y su rima: [[verso, sílabas, letra de rima, color]] (máx. 5).
function versos(label, lineas, nota) {
  const n = lineas.length, alto = nota ? 146 : 166, paso = alto / n;
  let out = "";
  lineas.forEach(([v, s, r, c], i) => {
    const y = 12 + i * paso + paso / 2;
    out += `<text x="16" y="${y + 5}" font-size="${L0.fz(v, 14, 170)}" font-style="italic" fill="var(--ink)" ${F}>${v}</text>
      <rect x="194" y="${y - 12}" width="26" height="24" rx="6" fill="var(--card)" stroke="${c}" stroke-width="1.5"/><text x="207" y="${y + 5}" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${D}>${s}</text>
      ${r ? `<circle cx="236" cy="${y}" r="12" fill="${c}"/><text x="236" y="${y + 5}" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" ${D}>${r}</text>` : ""}`;
  });
  if (nota) out += `<text x="130" y="170" text-anchor="middle" font-size="${L0.fz(nota, 12, 236)}" fill="var(--muted)" ${F}>${nota}</text>`;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="${H.esc(label)}"><rect width="260" height="180" rx="14" fill="var(--paper)"/>${out}</svg>`;
}

module.exports = { F, D, H, L, RD, tema, preg, vid, tb: L0.tb, tabla: H.tabla, silabas, versos, AZ, RO, VE, NA, AG, SO, MO };
