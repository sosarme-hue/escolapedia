// Ayudas del lote D de 3º de Primaria (Inglés, Educación Plástica y Música). No es un tema: empieza por «_».
// Reutiliza los dibujos de _pri4d.js y _pri6d.js (sin modificarlos) con sus propios vídeos (_pri3d-videos.js)
// y un constructor de temas igual que el de 4º pero para 3º (niños de 8 y 9 años, segundo ciclo).
const B = require("./_pri4d");
const { mapa, svg, t, tx, persona, AZ, RO, VE, NA, AM, AG, MO } = B;
const VID = require("./_pri3d-videos");

const RD = { t: "Real Decreto 157/2022, enseñanzas mínimas de la Educación Primaria (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296" };

// La respuesta correcta se escribe la primera; aquí se reparte en posiciones variadas (patrón fijo).
const PATRON = [1, 0, 2, 2, 0, 1, 0, 2, 1, 1, 0, 2, 2];
const preg = (lista, desfase = 0) => lista.map(([q, o, e], i) => {
  const dest = PATRON[(i + desfase) % PATRON.length] % o.length;
  const otras = o.slice(1);
  return { q, o: [...otras.slice(0, dest), o[0], ...otras.slice(dest)], a: dest, e };
});

// Vídeo por clave de _pri3d-videos.js.
const vid = (k) => {
  if (!k) return undefined;
  const v = VID[k]; if (!v) throw new Error(`_pri3d: falta el vídeo ${k}`);
  return { id: v[0], titulo: v[1], canal: v[2], vistas: v[3], megusta: 0, ...(v[4] ? { busqueda: v[4] } : {}) };
};

// Bloque: [título, cuerpo html, svg, clave de vídeo?]. Cada bloque lleva siempre su dibujo.
const bloque = ([h, html, dibujo, v], titulo) => {
  if (!dibujo || !String(dibujo).trim().startsWith("<svg")) throw new Error(`_pri3d: el bloque «${h}» de «${titulo}» no tiene dibujo`);
  return { html: `<h3>${h}</h3>${html}`, svg: dibujo, ...(v ? { video: vid(v) } : {}) };
};

// Constructor de tema con formas cortas y comprobación de cantidades del formato ampliado.
function tema(o) {
  const n = { bloques: [9, 9], ejemplos: [3, 3], errores: [4, 6], ejercicios: [10, 10], quiz: [10, 10], examen: [4, 4], tarjetas: [8, 8], familias: [2, 3] };
  for (const [k, [a, b]] of Object.entries(n)) if ((o[k] || []).length < a || (o[k] || []).length > b) throw new Error(`_pri3d: «${o.titulo}» tiene ${(o[k] || []).length} ${k}`);
  return {
    materia: o.materia,
    curso: "3-primaria",
    titulo: o.titulo,
    minutos: o.minutos || 45,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: { texto: o.pregunta[0], respuesta: o.pregunta[1] },
    bloques: o.bloques.map((b) => bloque(b, o.titulo)),
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    ejemplosTitulo: o.ejemplosTitulo || "Lo hacemos juntos",
    errores: o.errores,
    ejercicios: o.ejercicios.map(([q, sol]) => ({ q, sol })),
    figura: { titulo: o.figura[0], svg: o.figura[1] },
    video: vid(o.video),
    quiz: preg(o.quiz),
    examen: preg(o.examen, 4),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], o.mapa[1], o.mapa[2], o.mapa[3] || 240),
    tarjetas: o.tarjetas,
    familias: [...o.familias, "Repasad juntos las tarjetas del paso 6 dos minutos al día durante una semana."],
    profesores: { saberes: `${o.saberes} (RD 157/2022, segundo ciclo de Primaria, 3.er curso).`, ideas: o.ideas },
    fuentes: [RD, ...(o.fuentes || []).map(([x, url]) => ({ t: x, url }))],
    revisado: "2026-11-13",
  };
}

// ---------- Dibujos propios del lote ----------

// Casa en corte con habitaciones: items [[nombre, color]] (4 a 6), en dos pisos.
const casa = (label, items, extra = "") => {
  const arriba = items.slice(0, Math.ceil(items.length / 2)), abajo = items.slice(Math.ceil(items.length / 2));
  let s = `<path d="M30 60 L 130 14 L 230 60 Z" fill="${RO}" fill-opacity=".45" stroke="${RO}" stroke-width="2"/><rect x="36" y="60" width="188" height="108" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M36 114 H 224" stroke="var(--ink)" stroke-width="2"/>`;
  [[arriba, 60], [abajo, 114]].forEach(([fila, y]) => {
    const w = 188 / fila.length;
    fila.forEach(([n, c], i) => {
      const x = 36 + w * i;
      if (i) s += `<path d="M${x} ${y} V ${y + 54}" stroke="var(--ink)" stroke-width="2"/>`;
      s += `<rect x="${x + 4}" y="${y + 4}" width="${w - 8}" height="46" rx="4" fill="${c}" fill-opacity=".18"/>${tx(x + w / 2, y + 32, n, { s: 10.5, c })}`;
    });
  });
  return svg(label, s + extra);
};

// Árbol genealógico de tres generaciones: abuelos, padres y tíos, hijos. nodos: [[x, y, nombre, color]].
const arbol = (label, nodos, lineas) => svg(label, `${lineas.map(([x1, y1, x2, y2]) => `<path d="M${x1} ${y1} V ${(y1 + y2) / 2} H ${x2} V ${y2}" fill="none" stroke="var(--line)" stroke-width="2"/>`).join("")}${nodos.map(([x, y, n, c]) => `<circle cx="${x}" cy="${y}" r="13" fill="${c}" fill-opacity=".25" stroke="${c}" stroke-width="2"/><circle cx="${x}" cy="${y - 3}" r="4" fill="${c}"/><path d="M${x - 7} ${y + 8} q 7 -9 14 0" fill="${c}"/>${tx(x, y + 26, n, { s: 9.5, c })}`).join("")}`);

// Cara sencilla con una expresión: "bien", "mal", "regular", "sorpresa".
const cara = (x, y, r, tipo, c) => {
  const bocas = { bien: `M${x - r * 0.45} ${y + r * 0.25} q ${r * 0.45} ${r * 0.5} ${r * 0.9} 0`, mal: `M${x - r * 0.45} ${y + r * 0.5} q ${r * 0.45} ${-r * 0.45} ${r * 0.9} 0`, regular: `M${x - r * 0.4} ${y + r * 0.38} h ${r * 0.8}` };
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" fill-opacity=".22" stroke="${c}" stroke-width="2"/><circle cx="${x - r * 0.35}" cy="${y - r * 0.2}" r="${Math.max(2, r * 0.1)}" fill="var(--ink)"/><circle cx="${x + r * 0.35}" cy="${y - r * 0.2}" r="${Math.max(2, r * 0.1)}" fill="var(--ink)"/>${tipo === "sorpresa" ? `<ellipse cx="${x}" cy="${y + r * 0.4}" rx="${r * 0.18}" ry="${r * 0.25}" fill="var(--ink)"/>` : `<path d="${bocas[tipo]}" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>`}`;
};

// Reloj de rutina en fila: usa relojes de _pri4d.
// Mariposa simétrica (para el tema de simetría) centrada en cx.
const mariposa = (cx, cy, k, c1, c2) => {
  const ala = (sx) => `<path d="M${cx} ${cy} C ${cx + sx * 40 * k} ${cy - 60 * k} ${cx + sx * 80 * k} ${cy - 30 * k} ${cx + sx * 50 * k} ${cy} C ${cx + sx * 80 * k} ${cy + 20 * k} ${cx + sx * 50 * k} ${cy + 55 * k} ${cx} ${cy + 10 * k} Z" fill="${c1}" fill-opacity=".55" stroke="${c1}" stroke-width="2"/><circle cx="${cx + sx * 40 * k}" cy="${cy - 18 * k}" r="${8 * k}" fill="${c2}"/><circle cx="${cx + sx * 34 * k}" cy="${cy + 20 * k}" r="${5 * k}" fill="${c2}"/>`;
  return `${ala(-1)}${ala(1)}<ellipse cx="${cx}" cy="${cy}" rx="${4 * k}" ry="${28 * k}" fill="var(--ink)"/><path d="M${cx} ${cy - 26 * k} q ${-8 * k} ${-14 * k} ${-14 * k} ${-16 * k} M${cx} ${cy - 26 * k} q ${8 * k} ${-14 * k} ${14 * k} ${-16 * k}" fill="none" stroke="var(--ink)" stroke-width="1.6"/>`;
};

// Paisaje con tres planos: montañas al fondo, colinas en medio y un árbol delante.
const paisaje = (label, o = {}) => svg(label, `<rect x="0" y="0" width="260" height="180" rx="14" fill="${o.cielo || AG}" fill-opacity=".14"/>${o.sol === false ? "" : `<circle cx="214" cy="34" r="16" fill="${AM}"/>`}
  <path d="M0 96 L 50 46 L 92 84 L 140 34 L 196 90 L 260 56 V 150 H 0 Z" fill="${MO}" fill-opacity=".35"/>
  <path d="M0 118 Q 70 86 140 112 T 260 104 V 150 H 0 Z" fill="${VE}" fill-opacity=".45"/>
  <path d="M0 146 Q 120 132 260 148 V 180 H 0 Z" fill="${VE}" fill-opacity=".8"/>
  <rect x="44" y="104" width="10" height="50" fill="${NA}"/><circle cx="49" cy="96" r="24" fill="${VE}"/>
  ${o.extra || ""}`);

// Máscara de carnaval vista de frente con colores.
const mascara = (x, y, k, c, c2) => `<path d="M${x - 50 * k} ${y - 14 * k} Q ${x} ${y - 40 * k} ${x + 50 * k} ${y - 14 * k} Q ${x + 52 * k} ${y + 20 * k} ${x + 18 * k} ${y + 22 * k} Q ${x} ${y + 8 * k} ${x - 18 * k} ${y + 22 * k} Q ${x - 52 * k} ${y + 20 * k} ${x - 50 * k} ${y - 14 * k} Z" fill="${c}" fill-opacity=".6" stroke="${c}" stroke-width="2"/><ellipse cx="${x - 22 * k}" cy="${y - 4 * k}" rx="${12 * k}" ry="${8 * k}" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.4"/><ellipse cx="${x + 22 * k}" cy="${y - 4 * k}" rx="${12 * k}" ry="${8 * k}" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.4"/><circle cx="${x - 40 * k}" cy="${y - 22 * k}" r="${4 * k}" fill="${c2}"/><circle cx="${x + 40 * k}" cy="${y - 22 * k}" r="${4 * k}" fill="${c2}"/><path d="M${x} ${y - 30 * k} l ${-6 * k} ${-14 * k} l ${6 * k} ${4 * k} l ${6 * k} ${-4 * k} z" fill="${c2}"/>`;

// Cámara de fotos sencilla.
const camara = (x, y, k = 1, c = AZ) => `<rect x="${x - 34 * k}" y="${y - 20 * k}" width="${68 * k}" height="${44 * k}" rx="${6 * k}" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2"/><rect x="${x - 14 * k}" y="${y - 28 * k}" width="${22 * k}" height="${9 * k}" rx="2" fill="${c}" fill-opacity=".5"/><circle cx="${x}" cy="${y + 2 * k}" r="${15 * k}" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><circle cx="${x}" cy="${y + 2 * k}" r="${7 * k}" fill="${c}" fill-opacity=".6"/><circle cx="${x + 24 * k}" cy="${y - 12 * k}" r="${3 * k}" fill="${AM}"/>`;

// Instrumentos sencillos: guitarra, tambor, trompeta, triángulo, violín, flauta, xilófono, pandereta, maracas.
const inst = {
  guitarra: (x, y, c = NA) => `<ellipse cx="${x}" cy="${y + 18}" rx="20" ry="18" fill="${c}" fill-opacity=".5" stroke="${c}" stroke-width="2"/><ellipse cx="${x}" cy="${y - 6}" rx="14" ry="13" fill="${c}" fill-opacity=".5" stroke="${c}" stroke-width="2"/><circle cx="${x}" cy="${y + 8}" r="5" fill="var(--ink)"/><rect x="${x - 3}" y="${y - 48}" width="6" height="40" fill="${c}"/><rect x="${x - 5}" y="${y - 56}" width="10" height="10" rx="2" fill="${c}"/><path d="M${x - 1.5} ${y - 46} V ${y + 26} M${x + 1.5} ${y - 46} V ${y + 26}" stroke="var(--ink)" stroke-width=".7"/>`,
  violin: (x, y, c = NA) => `<path d="M${x} ${y - 30} c -16 0 -16 14 -10 20 c -8 6 -10 26 10 28 c 20 -2 18 -22 10 -28 c 6 -6 6 -20 -10 -20 z" fill="${c}" fill-opacity=".55" stroke="${c}" stroke-width="2"/><rect x="${x - 2}" y="${y - 56}" width="4" height="28" fill="var(--ink)"/><path d="M${x - 24} ${y - 20} L ${x + 26} ${y + 28}" stroke="var(--muted)" stroke-width="2"/>`,
  tambor: (x, y, c = RO) => `<ellipse cx="${x}" cy="${y - 14}" rx="24" ry="8" fill="var(--card)" stroke="${c}" stroke-width="2"/><path d="M${x - 24} ${y - 14} V ${y + 14} A 24 8 0 0 0 ${x + 24} ${y + 14} V ${y - 14}" fill="${c}" fill-opacity=".45" stroke="${c}" stroke-width="2"/><path d="M${x - 24} ${y - 10} L ${x - 8} ${y + 20} L ${x + 8} ${y - 6} L ${x + 24} ${y + 14}" fill="none" stroke="var(--paper)" stroke-width="1.6"/><path d="M${x - 30} ${y - 40} L ${x - 8} ${y - 18} M${x + 30} ${y - 40} L ${x + 8} ${y - 18}" stroke="${NA}" stroke-width="3" stroke-linecap="round"/>`,
  trompeta: (x, y, c = AM) => `<path d="M${x - 34} ${y - 3} H ${x + 12} L ${x + 30} ${y - 16} V ${y + 16} L ${x + 12} ${y + 3} H ${x - 34} Z" fill="${c}" fill-opacity=".6" stroke="${c}" stroke-width="2"/><path d="M${x - 14} ${y - 3} V ${y - 14} M${x - 6} ${y - 3} V ${y - 14} M${x + 2} ${y - 3} V ${y - 14}" stroke="${c}" stroke-width="3"/><rect x="${x - 40}" y="${y - 4}" width="6" height="8" fill="${c}"/>`,
  triangulo: (x, y, c = AZ) => `<path d="M${x} ${y - 26} L ${x + 24} ${y + 18} H ${x - 18}" fill="none" stroke="${c}" stroke-width="3"/><path d="M${x} ${y - 26} V ${y - 36}" stroke="var(--muted)" stroke-width="1.5"/><path d="M${x + 4} ${y + 2} L ${x + 30} ${y - 18}" stroke="var(--ink)" stroke-width="2"/>`,
  flauta: (x, y, c = VE) => `<rect x="${x - 5}" y="${y - 40}" width="10" height="76" rx="3" fill="${c}" fill-opacity=".45" stroke="${c}" stroke-width="2"/><path d="M${x - 5} ${y + 36} l -3 8 h 16 l -3 -8" fill="${c}" fill-opacity=".45" stroke="${c}" stroke-width="2"/>${[-26, -16, -6, 6, 16].map((d) => `<circle cx="${x}" cy="${y + d}" r="2.4" fill="var(--ink)"/>`).join("")}`,
  xilofono: (x, y, c = MO) => `${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${x - 36 + i * 12}" y="${y - 20 + i * 3}" width="9" height="${40 - i * 6}" rx="2" fill="${C6[i]}"/>`).join("")}<path d="M${x - 40} ${y + 24} L ${x + 36} ${y + 12}" stroke="var(--muted)" stroke-width="2"/><path d="M${x + 20} ${y - 34} L ${x + 4} ${y - 14}" stroke="var(--ink)" stroke-width="2"/><circle cx="${x + 4}" cy="${y - 14}" r="4" fill="${c}"/>`,
  pandereta: (x, y, c = RO) => `<circle cx="${x}" cy="${y}" r="24" fill="var(--card)" stroke="${c}" stroke-width="5"/>${[0, 1, 2, 3, 4, 5].map((i) => { const a = i * Math.PI / 3; return `<circle cx="${(x + 24 * Math.cos(a)).toFixed(1)}" cy="${(y + 24 * Math.sin(a)).toFixed(1)}" r="4.5" fill="${AM}" stroke="var(--ink)" stroke-width=".8"/>`; }).join("")}`,
  maracas: (x, y, c = VE) => `<ellipse cx="${x - 10}" cy="${y - 10}" rx="11" ry="14" fill="${c}" fill-opacity=".6" stroke="${c}" stroke-width="2"/><path d="M${x - 10} ${y + 4} L ${x - 16} ${y + 32}" stroke="${NA}" stroke-width="4" stroke-linecap="round"/><ellipse cx="${x + 12}" cy="${y - 6}" rx="11" ry="14" fill="${AM}" fill-opacity=".6" stroke="${AM}" stroke-width="2"/><path d="M${x + 12} ${y + 8} L ${x + 18} ${y + 34}" stroke="${NA}" stroke-width="4" stroke-linecap="round"/>`,
};
const C6 = ["#d7262b", "#f07c1c", "#f2d21b", "#239a52", "#1e5bb0", "#7b2d8e"];
// Fila de instrumentos con su nombre: [[clave, nombre, color?], ...].
const instrumentos = (label, items, titulo) => {
  const n = items.length, w = 240 / n;
  return svg(label, (titulo ? tx(130, 20, titulo, { s: 11, c: "var(--muted)" }) : "") + items.map(([k, nom, c], i) => { const x = 10 + w * (i + 0.5); return `${inst[k](x, 96, c)}${tx(x, 166, nom, { s: 10.5, c: c || "var(--ink)" })}`; }).join(""));
};

module.exports = { ...B, RD, preg, vid, tema, casa, arbol, cara, mariposa, paisaje, mascara, camara, inst, instrumentos, C6, AZ, RO, VE, NA, AM, AG, MO, persona };
