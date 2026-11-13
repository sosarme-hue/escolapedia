// Ayudas del lote 9 de 4º ESO (Latín y Filosofía) a nivel libro.
// Convierte un formato compacto en el objeto de tema que espera build.js.
// El fichero empieza por «_», así que build.js no lo trata como tema.
const { F, D, mapa } = require("./_util");
const H = require("./_hum");

// Bloque: [titulo numerado, html, svg, video?] → { html: <h3>…</h3>…, svg, video }.
const bloque = ([t, html, svg, video]) => ({ html: `<h3>${t}</h3>${html}`, ...(svg ? { svg } : {}), ...(video ? { video: { megusta: 0, ...video } } : {}) });
// Pregunta tipo test: [q, [4 opciones], índice correcto, explicación].
const test = ([q, o, a, e]) => ({ q, o, a, e });
// Ejercicios por niveles: { basico: [[q, sol]], medio: [...], avanzado: [...] }.
const ejercicios = (n) => [["basico", "básico"], ["medio", "medio"], ["avanzado", "avanzado"]].flatMap(([k, nivel]) => (n[k] || []).map(([q, sol]) => ({ nivel, q, sol })));

function libro(o) {
  return {
    materia: o.materia,
    curso: "4-eso",
    titulo: o.titulo,
    minutos: o.minutos || 100,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: o.pregunta,
    lectura: o.lectura,
    bloques: o.bloques.map(bloque),
    figura: o.figura,
    video: { megusta: 0, ...o.video },
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    errores: o.errores,
    ejercicios: ejercicios(o.ejercicios),
    quiz: o.quiz.map(test),
    examen: o.examen.map(test),
    feynman: o.feynman,
    mapa: o.mapa,
    tarjetas: o.tarjetas,
    glosario: o.glosario,
    situacion: o.situacion,
    familias: o.familias,
    profesores: o.profesores,
    fuentes: o.fuentes,
    revisado: o.revisado || "2026-11-13",
  };
}

// Recuadro de una cita o frase latina con su traducción (dos líneas como máximo cada una).
function cita(label, latin, trad, color = "var(--red)") {
  const l = String(latin).split("|"), t = String(trad).split("|");
  return H.caja(label, `<rect x="16" y="20" width="228" height="140" rx="12" fill="var(--card)" stroke="${color}" stroke-width="2.5"/>
    <text x="34" y="66" font-size="44" fill="${color}" ${D}>“</text>
    ${l.map((x, i) => `<text x="130" y="${74 + i * 22}" text-anchor="middle" font-size="${x.length > 20 ? 14 : 17}" font-weight="700" fill="var(--ink)" font-style="italic" ${F}>${H.esc(x)}</text>`).join("")}
    ${t.map((x, i) => `<text x="130" y="${122 + (l.length - 1) * 14 + i * 16}" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>${H.esc(x)}</text>`).join("")}`);
}

// Palabra partida en segmentos: [[texto, etiqueta, color], ...] (2 a 4), con una línea al pie.
function partes(label, segs, pie) {
  const w = segs.map(([t]) => Math.max(40, String(t).length * 17 + 16)), total = w.reduce((a, b) => a + b, 0) + (segs.length - 1) * 6;
  let x = (260 - total) / 2;
  return H.caja(label, `${segs.map(([t, et, c], i) => { const x0 = x; x += w[i] + 6; return `<rect x="${x0}" y="48" width="${w[i]}" height="52" rx="10" fill="var(--card)" stroke="${c}" stroke-width="3"/><text x="${x0 + w[i] / 2}" y="83" text-anchor="middle" font-size="25" font-weight="700" fill="${c}" ${D}>${H.esc(t)}</text><text x="${x0 + w[i] / 2}" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="${c}" ${F}>${H.esc(et)}</text>`; }).join("")}
    ${pie ? `<text x="130" y="156" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${H.esc(pie)}</text>` : ""}`);
}

// Evolución de una palabra en escalones: ["latín", "paso", ..., "español"] (3 a 5).
function escalera(label, pasos, color = "var(--pen)") {
  const n = pasos.length, dx = 200 / (n - 1), dy = 110 / (n - 1);
  return H.caja(label, `<g ${F} text-anchor="middle">${pasos.map((p, i) => { const x = 30 + i * dx, y = 150 - i * dy; return `${i ? `<path d="M${x - dx + 22} ${y + dy - 6} L ${x - 22} ${y + 6}" stroke="var(--line)" stroke-width="2"/>` : ""}<rect x="${x - 26}" y="${y - 13}" width="52" height="24" rx="8" fill="${i === n - 1 ? color : "var(--card)"}" stroke="${color}" stroke-width="2"/><text x="${x}" y="${y + 4}" font-size="${String(p).length > 7 ? 9.5 : 11.5}" font-weight="700" fill="${i === n - 1 ? "#fff" : "var(--ink)"}">${H.esc(p)}</text>`; }).join("")}</g>`);
}

// Balanza de dos posturas: izquierda y derecha, cada una con título y hasta 3 líneas cortas.
function balanza(label, [ta, la, ca], [tb, lb, cb]) {
  const lado = (t, ls, c, x) => `<rect x="${x}" y="78" width="104" height="86" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="${x + 52}" y="98" text-anchor="middle" font-size="12.5" font-weight="700" fill="${c}" ${D}>${H.esc(t)}</text>${ls.map((l, i) => `<text x="${x + 52}" y="${118 + i * 15}" text-anchor="middle" font-size="${l.length > 15 ? 10 : 11}" fill="var(--ink)" ${F}>${H.esc(l)}</text>`).join("")}`;
  return H.caja(label, `<path d="M130 22 V 70 M60 50 H 200 M60 50 L 64 78 M200 50 L 196 78" stroke="var(--ink)" stroke-width="3" fill="none"/><circle cx="130" cy="22" r="7" fill="var(--sun)"/>${lado(ta, la, ca, 12)}${lado(tb, lb, cb, 144)}`);
}

module.exports = { libro, cita, partes, escalera, balanza, mapa, F, D, ...H };
