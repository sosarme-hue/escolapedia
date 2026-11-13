// Ayudas del lote D de 5º de Primaria (Inglés, Educación Plástica y Música). No es un tema: empieza por «_».
// Reutiliza los dibujos de _pri6d.js (sin modificarlo), cambia el curso y los vídeos y añade dibujos propios:
// figura humana por cabezas, proporciones de la cara, flauta dulce, teclado, fotogramas y tira de animación.
const B = require("./_pri6d");
const { mapa, RD, svg, t, tx, persona, AZ, RO, VE, NA, AM, AG, MO } = B;
const VID = require("./_pri5d-videos");

// La respuesta correcta se escribe la primera; aquí se reparte en posiciones variadas (patrón fijo).
const PATRON = [2, 0, 1, 1, 2, 0, 2, 1, 0, 0, 1, 2, 1];
const preg = (lista, desfase = 0) => lista.map(([q, o, e], i) => {
  const dest = PATRON[(i + desfase) % PATRON.length] % o.length;
  const otras = o.slice(1);
  return { q, o: [...otras.slice(0, dest), o[0], ...otras.slice(dest)], a: dest, e };
});

// Vídeo por clave de _pri5d-videos.js.
const vid = (k) => {
  if (!k) return undefined;
  const v = VID[k]; if (!v) throw new Error(`_pri5d: falta el vídeo ${k}`);
  return { id: v[0], titulo: v[1], canal: v[2], vistas: v[3], megusta: 0, ...(v[4] ? { busqueda: v[4] } : {}) };
};

// Bloque: [título, cuerpo html, svg, clave de vídeo?]. Cada bloque lleva siempre su dibujo.
const bloque = ([h, html, dibujo, v], titulo) => {
  if (!dibujo || !String(dibujo).trim().startsWith("<svg")) throw new Error(`_pri5d: el bloque «${h}» de «${titulo}» no tiene dibujo`);
  return { html: `<h3>${h}</h3>${html}`, svg: dibujo, ...(v ? { video: vid(v) } : {}) };
};

// Constructor de tema con formas cortas y comprobación de cantidades del formato ampliado.
function tema(o) {
  const n = { bloques: [9, 9], ejemplos: [3, 3], errores: [4, 6], ejercicios: [10, 10], quiz: [10, 10], tarjetas: [8, 8] };
  for (const [k, [a, b]] of Object.entries(n)) if (o[k].length < a || o[k].length > b) throw new Error(`_pri5d: «${o.titulo}» tiene ${o[k].length} ${k}`);
  return {
    materia: o.materia,
    curso: "5-primaria",
    titulo: o.titulo,
    minutos: o.minutos || 50,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: { texto: o.pregunta[0], respuesta: o.pregunta[1] },
    bloques: o.bloques.map((b) => bloque(b, o.titulo)),
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
    familias: [...o.familias, "Repasad juntos las tarjetas del paso 6 dos minutos al día durante una semana."],
    profesores: { saberes: `${o.saberes} (RD 157/2022, tercer ciclo de Primaria).`, ideas: o.ideas },
    fuentes: [RD, ...(o.fuentes || []).map(([x, url]) => ({ t: x, url }))],
    revisado: "2026-11-12",
  };
}

// ---------- Dibujos propios del lote ----------

// Silueta humana medida en cabezas: (x, pies en y), altura total h y número de cabezas.
const silueta = (x, yPie, h, cab, c) => {
  const u = h / cab, yc = yPie - h, r = u / 2;
  const hombro = yc + u * 1.25, cadera = yc + h * 0.5, rod = yc + h * 0.75, ancho = u * 1.0;
  return `<g fill="${c}" fill-opacity=".22" stroke="${c}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
    <ellipse cx="${x}" cy="${yc + r}" rx="${(r * 0.82).toFixed(1)}" ry="${r.toFixed(1)}"/>
    <path d="M${x - ancho} ${hombro} Q ${x} ${hombro - u * 0.25} ${x + ancho} ${hombro} L ${x + ancho * 0.8} ${cadera} L ${x - ancho * 0.8} ${cadera} Z"/>
    <path d="M${x - ancho} ${hombro + 2} L ${x - ancho * 1.25} ${cadera + u * 0.2} M${x + ancho} ${hombro + 2} L ${x + ancho * 1.25} ${cadera + u * 0.2}" fill="none" stroke-width="${(u * 0.32).toFixed(1)}" stroke-opacity=".5"/>
    <path d="M${x - ancho * 0.45} ${cadera} L ${x - ancho * 0.5} ${rod} L ${x - ancho * 0.5} ${yPie} M${x + ancho * 0.45} ${cadera} L ${x + ancho * 0.5} ${rod} L ${x + ancho * 0.5} ${yPie}" fill="none" stroke-width="${(u * 0.38).toFixed(1)}" stroke-opacity=".5"/>
  </g>`;
};

// Canon por cabezas: figuras [[nombre, cabezas, color]] con su cuadrícula de módulos.
const canon = (label, figs, o = {}) => {
  const yPie = 158, hMax = o.h || 130;
  const w = 240 / figs.length;
  return svg(label, figs.map(([n, cab, c, hh], i) => {
    const x = 10 + w * (i + 0.5), h = hh || hMax, u = h / cab;
    let s = "";
    for (let k = 0; k <= Math.floor(cab); k++) s += `<path d="M${x - w / 2 + 8} ${(yPie - h + k * u).toFixed(1)} H ${x + w / 2 - 8}" stroke="var(--line)" stroke-width="1"/>`;
    for (let k = 0; k < Math.floor(cab); k++) s += tx(x - w / 2 + 12, yPie - h + k * u + u / 2 + 3, String(k + 1), { s: 8, c: "var(--muted)" });
    return s + silueta(x + 4, yPie, h, cab, c) + tx(x, 174, n, { s: 10.5, c });
  }).join("") + (o.extra || ""));
};

// Cara de frente con las líneas de proporción (ojos a media altura).
const cara = (label, o = {}) => {
  const cx = o.x || 96, cy = 92, rx = 46, ry = 62;
  return svg(label, `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${AM}" fill-opacity=".22" stroke="var(--ink)" stroke-width="2"/>
    <path d="M${cx} ${cy - ry} V ${cy + ry}" stroke="${AZ}" stroke-width="1" stroke-dasharray="4 3"/>
    <path d="M${cx - rx - 10} ${cy} H ${cx + rx + 10}" stroke="${RO}" stroke-width="1.4" stroke-dasharray="4 3"/>
    <path d="M${cx - rx} ${cy + 26} H ${cx + rx}" stroke="${VE}" stroke-width="1.2" stroke-dasharray="4 3"/>
    <path d="M${cx - rx + 6} ${cy + 42} H ${cx + rx - 6}" stroke="${NA}" stroke-width="1.2" stroke-dasharray="4 3"/>
    <ellipse cx="${cx - 18}" cy="${cy}" rx="9" ry="5" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.6"/><circle cx="${cx - 18}" cy="${cy}" r="3" fill="var(--ink)"/>
    <ellipse cx="${cx + 18}" cy="${cy}" rx="9" ry="5" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.6"/><circle cx="${cx + 18}" cy="${cy}" r="3" fill="var(--ink)"/>
    <path d="M${cx - 30} ${cy - 12} q 12 -6 22 0 M${cx + 8} ${cy - 12} q 12 -6 22 0" fill="none" stroke="var(--ink)" stroke-width="1.6"/>
    <path d="M${cx - 2} ${cy + 6} L ${cx - 7} ${cy + 26} q 7 4 14 0" fill="none" stroke="var(--ink)" stroke-width="1.6"/>
    <path d="M${cx - 14} ${cy + 42} q 14 8 28 0" fill="none" stroke="var(--ink)" stroke-width="2"/>
    <path d="M${cx - rx} ${cy - 4} q -10 10 0 22 M${cx + rx} ${cy - 4} q 10 10 0 22" fill="none" stroke="var(--ink)" stroke-width="1.6"/>
    ${tx(cx + rx + 14, cy + 4, "ojos: mitad", { s: 10, c: RO, a: "start" })}${tx(cx + rx + 14, cy + 30, "nariz", { s: 10, c: VE, a: "start" })}${tx(cx + rx + 14, cy + 46, "boca", { s: 10, c: NA, a: "start" })}${tx(cx + rx + 14, cy - 46, "eje central", { s: 10, c: AZ, a: "start" })}`);
};

// Flauta dulce vertical con 8 agujeros (el primero, el del pulgar, detrás). tapados: cadena de 8 «1»/«0»/«m» (medio).
const flauta = (x, y0, tapados, c = AZ, nombre = "") => {
  let s = `<rect x="${x - 9}" y="${y0}" width="18" height="128" rx="7" fill="${c}" fill-opacity=".12" stroke="var(--ink)" stroke-width="1.6"/>
    <path d="M${x - 9} ${y0 + 16} H ${x + 9}" stroke="var(--ink)" stroke-width="1.2"/><rect x="${x - 4}" y="${y0 + 18}" width="8" height="5" fill="var(--ink)"/>
    <path d="M${x - 11} ${y0 + 112} H ${x + 11} L ${x + 13} ${y0 + 132} H ${x - 13} Z" fill="${c}" fill-opacity=".12" stroke="var(--ink)" stroke-width="1.6"/>`;
  const ys = [34, 46, 58, 70, 86, 98, 110 - 2, 120];
  [...tapados].forEach((k, i) => {
    const y = y0 + ys[i] + (i === 7 ? -4 : 0), xx = i === 0 ? x - 16 : x, r = i >= 6 ? 3 : 3.8;
    const fill = k === "1" ? "var(--ink)" : "var(--paper)";
    s += `<circle cx="${xx}" cy="${y}" r="${r}" fill="${fill}" stroke="var(--ink)" stroke-width="1.3"/>`;
    if (k === "m") s += `<path d="M${xx} ${y - r} A ${r} ${r} 0 0 0 ${xx} ${y + r} Z" fill="var(--ink)"/>`;
  });
  return s + (nombre ? tx(x, y0 + 146, nombre, { s: 11, c }) : "");
};
// Varias posiciones de flauta: [[nota, tapados, color]].
const flautas = (label, notas, o = {}) => {
  const w = 240 / notas.length;
  return svg(label, notas.map(([n, k, c], i) => flauta(10 + w * (i + 0.5) + 4, 14, k, c, n)).join("") + tx(16, 52, "pulgar", { s: 8.5, a: "start", c: "var(--muted)" }) + (o.extra || ""));
};

// Teclado de piano de una octava (do a si) con marcas: { do: color, "do#": color }.
const teclado = (label, marcas = {}, o = {}) => {
  const bl = ["do", "re", "mi", "fa", "sol", "la", "si", "do'"], x0 = 22, w = 27, y0 = o.y || 34, h = 104;
  let s = bl.map((n, i) => `<rect x="${x0 + i * w}" y="${y0}" width="${w}" height="${h}" fill="${marcas[n] || "var(--paper)"}" fill-opacity="${marcas[n] ? 0.45 : 1}" stroke="var(--ink)" stroke-width="1.4"/>${tx(x0 + i * w + w / 2, y0 + h - 8, n.replace("'", ""), { s: 9.5 })}`).join("");
  [["do#", 0], ["re#", 1], ["fa#", 3], ["sol#", 4], ["la#", 5]].forEach(([n, i]) => {
    s += `<rect x="${x0 + (i + 1) * w - 8}" y="${y0}" width="16" height="62" rx="2" fill="${marcas[n] || "var(--ink)"}" stroke="var(--ink)" stroke-width="1.2"/>`;
  });
  return svg(label, s + (o.extra || ""));
};

// Tira de fotogramas: una pelota que bota. n fotogramas.
const fotogramas = (label, n = 6, o = {}) => {
  const w = 236 / n;
  let s = `<rect x="12" y="34" width="236" height="104" rx="4" fill="var(--ink)" fill-opacity=".85"/>`;
  for (let i = 0; i < n; i++) {
    const x = 14 + i * w;
    for (let k = 0; k < 3; k++) s += `<rect x="${x + w / 2 - 12 + k * 9}" y="38" width="5" height="6" rx="1" fill="var(--paper)"/><rect x="${x + w / 2 - 12 + k * 9}" y="128" width="5" height="6" rx="1" fill="var(--paper)"/>`;
    s += `<rect x="${x + 2}" y="48" width="${w - 6}" height="76" rx="2" fill="var(--paper)"/>`;
    const fase = i / (n - 1), y = 58 + 54 * (1 - Math.abs(Math.cos(fase * Math.PI * 1.5)));
    const aplast = y > 106 ? 0.7 : 1;
    s += `<path d="M${x + 4} 120 H ${x + w - 6}" stroke="var(--muted)" stroke-width="1.5"/><ellipse cx="${x + w / 2 - 1}" cy="${Math.min(y, 112)}" rx="${(7 / aplast).toFixed(1)}" ry="${(7 * aplast).toFixed(1)}" fill="${RO}"/>`;
    s += tx(x + w / 2 - 1, 154, String(i + 1), { s: 10, c: "var(--muted)" });
  }
  return svg(label, s + tx(130, 22, o.titulo || "Cada fotograma cambia un poco", { s: 11, c: "var(--muted)" }));
};

// Línea de tiempo horizontal en un lienzo de 260: [fecha, nombre, color].
const cronologia = (label, items, o = {}) => {
  const n = items.length, w = 232 / n;
  let s = `<path d="M14 90 H 246" stroke="var(--line)" stroke-width="4"/><path d="M240 84 l 8 6 l -8 6" fill="none" stroke="var(--line)" stroke-width="3"/>`;
  items.forEach(([f, nm, c], i) => {
    const x = 14 + w * (i + 0.5), arriba = i % 2 === 0;
    s += `<circle cx="${x}" cy="90" r="6" fill="${c}"/><path d="M${x} ${arriba ? 84 : 96} V ${arriba ? 64 : 116}" stroke="${c}" stroke-width="1.5"/>`;
    s += tx(x, arriba ? 46 : 134, f, { s: 10, c }) + tx(x, arriba ? 59 : 147, nm, { s: 10 });
  });
  return svg(label, s + (o.extra || ""));
};

module.exports = { ...B, tema, preg, vid, silueta, canon, cara, flauta, flautas, teclado, fotogramas, cronologia };
