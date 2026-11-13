// Ayudas del lote D de 4º de Primaria (Inglés, Educación Plástica y Música). No es un tema: empieza por «_».
// Reutiliza los dibujos de _pri6d.js (sin modificarlo) y añade dibujos propios: reloj, flauta dulce,
// pueblo, corro de baile, mapa de España por zonas y otros. El constructor de temas es el mismo que en 6º
// pero para el segundo ciclo (niños de 9 y 10 años).
const B = require("./_pri6d");
const { mapa, svg, t, tx, AZ, RO, VE, NA, AM, AG, MO, persona, penta, claveSol } = B;
const VID = require("./_pri4d-videos");

const RD = { t: "Real Decreto 157/2022, enseñanzas mínimas de la Educación Primaria (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296" };

// La respuesta correcta se escribe la primera; aquí se reparte en posiciones variadas (patrón fijo).
const PATRON = [2, 0, 1, 1, 2, 0, 2, 1, 0, 0, 2, 1, 1];
const preg = (lista, desfase = 0) => lista.map(([q, o, e], i) => {
  const dest = PATRON[(i + desfase) % PATRON.length] % o.length;
  const otras = o.slice(1);
  return { q, o: [...otras.slice(0, dest), o[0], ...otras.slice(dest)], a: dest, e };
});

// Vídeo por clave de _pri4d-videos.js.
const vid = (k) => {
  if (!k) return undefined;
  const v = VID[k]; if (!v) throw new Error(`_pri4d: falta el vídeo ${k}`);
  return { id: v[0], titulo: v[1], canal: v[2], vistas: v[3], megusta: 0, ...(v[4] ? { busqueda: v[4] } : {}) };
};

// Bloque: [título, cuerpo html, svg, clave de vídeo?]. Cada bloque lleva siempre su dibujo.
const bloque = ([h, html, dibujo, v], titulo) => {
  if (!dibujo || !String(dibujo).trim().startsWith("<svg")) throw new Error(`_pri4d: el bloque «${h}» de «${titulo}» no tiene dibujo`);
  return { html: `<h3>${h}</h3>${html}`, svg: dibujo, ...(v ? { video: vid(v) } : {}) };
};

// Constructor de tema con formas cortas y comprobación de cantidades del formato ampliado.
function tema(o) {
  const n = { bloques: [9, 9], ejemplos: [3, 3], errores: [4, 6], ejercicios: [10, 10], quiz: [10, 10], examen: [4, 4], tarjetas: [8, 8] };
  for (const [k, [a, b]] of Object.entries(n)) if ((o[k] || []).length < a || (o[k] || []).length > b) throw new Error(`_pri4d: «${o.titulo}» tiene ${(o[k] || []).length} ${k}`);
  return {
    materia: o.materia,
    curso: "4-primaria",
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
    examen: preg(o.examen, 3),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], o.mapa[1], o.mapa[2], o.mapa[3] || 240),
    tarjetas: o.tarjetas,
    familias: [...o.familias, "Repasad juntos las tarjetas del paso 6 dos minutos al día durante una semana."],
    profesores: { saberes: `${o.saberes} (RD 157/2022, segundo ciclo de Primaria).`, ideas: o.ideas },
    fuentes: [RD, ...(o.fuentes || []).map(([x, url]) => ({ t: x, url }))],
    revisado: "2026-11-12",
  };
}

// ---------- Dibujos propios del lote ----------

// Esfera de reloj analógico con la hora h:m en (cx, cy) y radio r.
const esfera = (cx, cy, r, h, m, c = AZ) => {
  const ang = (g) => (g - 90) * Math.PI / 180;
  const ah = ang((h % 12) * 30 + m * 0.5), am = ang(m * 6);
  let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--card)" stroke="${c}" stroke-width="3"/>`;
  for (let i = 0; i < 60; i++) { const a = ang(i * 6), l = i % 5 ? 0.92 : 0.84; s += `<path d="M${(cx + r * l * Math.cos(a)).toFixed(1)} ${(cy + r * l * Math.sin(a)).toFixed(1)} L ${(cx + r * 0.97 * Math.cos(a)).toFixed(1)} ${(cy + r * 0.97 * Math.sin(a)).toFixed(1)}" stroke="var(--ink)" stroke-width="${i % 5 ? 0.8 : 2}"/>`; }
  if (r >= 40) for (let i = 1; i <= 12; i++) { const a = ang(i * 30); s += t((cx + r * 0.7 * Math.cos(a)).toFixed(1), (cy + r * 0.7 * Math.sin(a) + r * 0.08).toFixed(1), String(i), { s: Math.round(r * 0.2) }); }
  s += `<path d="M${cx} ${cy} L ${(cx + r * 0.5 * Math.cos(ah)).toFixed(1)} ${(cy + r * 0.5 * Math.sin(ah)).toFixed(1)}" stroke="var(--ink)" stroke-width="${Math.max(3, r / 12).toFixed(1)}" stroke-linecap="round"/>`;
  s += `<path d="M${cx} ${cy} L ${(cx + r * 0.8 * Math.cos(am)).toFixed(1)} ${(cy + r * 0.8 * Math.sin(am)).toFixed(1)}" stroke="${RO}" stroke-width="${Math.max(2, r / 20).toFixed(1)}" stroke-linecap="round"/>`;
  return s + `<circle cx="${cx}" cy="${cy}" r="3" fill="var(--ink)"/>`;
};
// Un reloj grande con su frase debajo.
const reloj = (label, h, m, frase, extra = "") => svg(label, `${esfera(130, 80, 62, h, m)}${tx(130, 166, frase, { s: 13, c: AZ })}${extra}`);
// Varios relojes pequeños en fila: [[h, m, texto], ...].
const relojes = (label, items, titulo) => {
  const n = items.length, w = 240 / n, r = Math.min(34, w / 2 - 6);
  return svg(label, (titulo ? tx(130, 22, titulo, { s: 11, c: "var(--muted)" }) : "") + items.map(([h, m, s, c], i) => `${esfera(10 + w * (i + 0.5), 84, r, h, m, c || AZ)}${tx(10 + w * (i + 0.5), 84 + r + 22, s, { s: 10.5, c: c || "var(--ink)" })}`).join(""));
};

// Digitaciones de la flauta dulce (sistema barroco, el habitual en el cole): agujeros tapados.
// 0 = agujero de detrás (pulgar izquierdo); 1-3 mano izquierda; 4-7 mano derecha.
const DEDOS = { "mi grave": [0, 1, 2, 3, 4, 5, 6], "do grave": [0, 1, 2, 3, 4, 5, 6, 7], re: [0, 1, 2, 3, 4, 5, 6], mi: [0, 1, 2, 3, 4, 5], fa: [0, 1, 2, 3, 4, 6, 7], sol: [0, 1, 2, 3], la: [0, 1, 2], si: [0, 1], "do'": [0, 2], "re'": [2] };
// Flauta vertical dibujada en x, con los agujeros tapados de la nota indicada.
const flautaV = (x, nota, c = AZ, y0 = 30, k = 1) => {
  const tap = DEDOS[nota] || [];
  let s = `<path d="M${x - 7 * k} ${y0} h ${14 * k} l -2 ${10 * k} h ${-10 * k} z" fill="${c}" fill-opacity=".5" stroke="${c}" stroke-width="1.5"/>`;
  s += `<rect x="${x - 6 * k}" y="${y0 + 10 * k}" width="${12 * k}" height="${110 * k}" rx="${4 * k}" fill="var(--card)" stroke="${c}" stroke-width="2"/>`;
  s += `<path d="M${x - 6 * k} ${y0 + 120 * k} l -3 ${12 * k} h ${18 * k} l -3 ${-12 * k}" fill="var(--card)" stroke="${c}" stroke-width="2"/>`;
  // Agujero de detrás, dibujado al lado como un círculo con borde punteado.
  s += `<circle cx="${x - 16 * k}" cy="${y0 + 22 * k}" r="${4.2 * k}" fill="${tap.includes(0) ? "var(--ink)" : "var(--paper)"}" stroke="var(--ink)" stroke-width="1.2" stroke-dasharray="2 1.5"/>`;
  [22, 34, 46, 64, 76, 88, 102].forEach((dy, i) => { s += `<circle cx="${x}" cy="${y0 + dy * k}" r="${3.8 * k}" fill="${tap.includes(i + 1) ? "var(--ink)" : "var(--paper)"}" stroke="var(--ink)" stroke-width="1.2"/>`; });
  return s;
};
// Fila de flautas con el nombre de la nota debajo: [[nota, color], ...].
const flautas = (label, notas, titulo) => {
  const n = notas.length, w = 240 / n;
  return svg(label, (titulo ? tx(130, 18, titulo, { s: 11, c: "var(--muted)" }) : "") + notas.map(([nota, c], i) => `${flautaV(10 + w * (i + 0.5) + 6, nota, c || AZ, 26, 1)}${tx(10 + w * (i + 0.5) + 6, 174, nota.replace("'", " agudo"), { s: 11, c: c || AZ })}`).join(""));
};

// Pueblo sencillo: edificios con su nombre a lo largo de una calle. items: [[nombre, color, alto]].
const pueblo = (label, items, extra = "") => {
  const n = items.length, w = 240 / n;
  let s = `<rect x="0" y="128" width="260" height="22" fill="var(--line)" opacity=".7"/><path d="M10 139 H 250" stroke="var(--paper)" stroke-width="2" stroke-dasharray="10 8"/>`;
  items.forEach(([nom, c, h = 60], i) => {
    const x = 10 + w * i + 4, bw = w - 8;
    s += `<rect x="${x}" y="${128 - h}" width="${bw}" height="${h}" fill="${c}" fill-opacity=".25" stroke="${c}" stroke-width="2"/><path d="M${x - 3} ${128 - h} L ${x + bw / 2} ${128 - h - 16} L ${x + bw + 3} ${128 - h}" fill="${c}" fill-opacity=".55" stroke="${c}" stroke-width="2"/>`;
    s += `<rect x="${x + bw / 2 - 6}" y="110" width="12" height="18" fill="${c}" fill-opacity=".6"/>`;
    s += tx(x + bw / 2, 166, nom, { s: 10.5, c });
  });
  return svg(label, s + extra);
};

// Corro de personas (danza en círculo) con n bailarines alrededor de (cx, cy).
const corro = (cx, cy, rx, ry, n, cols) => {
  let s = `<ellipse cx="${cx}" cy="${cy + 20}" rx="${rx}" ry="${ry}" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 4"/>`;
  for (let i = 0; i < n; i++) { const a = (i * 360 / n) * Math.PI / 180; s += persona((cx + rx * Math.cos(a)).toFixed(1), (cy + ry * Math.sin(a) - 4).toFixed(1), cols[i % cols.length], { brazos: [[-12, -6], [12, -6]], piernas: [[-7, 20], [7, 20]] }); }
  return s;
};

// Pentagrama vacío con clave de sol y las notas de líneas o espacios marcadas.
const pentaClave = (label, extra, o = {}) => { const g = o.g || 14, y0 = o.y0 || 50, P = penta(20, 240, y0, g); return svg(label, `${P.s}${claveSol(40, y0, g)}${typeof extra === "function" ? extra(P, y0, g) : extra}`); };

// Barras de intensidad (de pp a ff) o escalones.
const escalera = (label, items, titulo) => {
  const n = items.length, w = 220 / n;
  return svg(label, (titulo ? tx(130, 20, titulo, { s: 11, c: "var(--muted)" }) : "") + items.map(([s, c, d], i) => { const h = 20 + (110 * (i + 1)) / n; return `<rect x="${20 + w * i + 3}" y="${150 - h}" width="${w - 6}" height="${h}" rx="6" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="2"/>${tx(20 + w * i + w / 2, 168, s, { s: 11, c })}${d ? tx(20 + w * i + w / 2, 150 - h - 6, d, { s: 9.5, c: "var(--muted)" }) : ""}`; }).join(""));
};

// Marco de cuadro (para obras de arte inventadas): contenido dentro de un marco dorado.
const cuadro = (label, inner, pie) => svg(label, `<rect x="30" y="14" width="200" height="136" fill="#c9a24a" stroke="#8a6a24" stroke-width="2"/><rect x="40" y="24" width="180" height="116" fill="var(--card)"/>${inner}${pie ? tx(130, 170, pie, { s: 11, c: "var(--muted)" }) : ""}`);

// Melodía larga en dos pentagramas (se corta en la barra más cercana a la mitad) para que las notas no se amontonen.
const melodia = (label, notas, o = {}) => {
  const g = o.g || 10, x0 = 16, x1 = 244, barras = notas.map((n, i) => (n[1] && n[1].barra ? i : -1)).filter((i) => i > 0);
  const corte = notas.length > 9 && barras.length ? barras.reduce((a, b) => (Math.abs(b - notas.length / 2) < Math.abs(a - notas.length / 2) ? b : a)) : -1;
  const lineas = corte > 0 ? [notas.slice(0, corte), notas.slice(corte + 1)] : [notas];
  let s = "";
  lineas.forEach((ns, l) => {
    const y0 = 50 + l * 84, P = penta(x0, x1, y0, g), xi = l === 0 && o.compas ? 66 : 50, paso = (x1 - 14 - xi) / Math.max(1, ns.length);
    s += P.s + (o.clave === false ? "" : claveSol(x0 + 12, y0, g));
    if (l === 0 && o.compas) s += t(x0 + 36, y0 + 1.7 * g, o.compas[0], { s: 15, d: true }) + t(x0 + 36, y0 + 3.7 * g, o.compas[1], { s: 15, d: true });
    ns.forEach(([p, op = {}], i) => {
      const x = xi + paso * (i + 0.5);
      if (op.barra) s += P.barra(x);
      else if (op.silencio) s += B.silencio(x, y0, g, op.silencio);
      else s += P.nota(x, p, op);
    });
    if (l === lineas.length - 1 && o.fin) s += `<path d="M${x1 - 6} ${y0} V ${y0 + 4 * g}" stroke="var(--ink)" stroke-width="1.4"/><path d="M${x1 - 2} ${y0} V ${y0 + 4 * g}" stroke="var(--ink)" stroke-width="3"/>`;
    else s += P.barra(x1);
  });
  return svg(label, s + (o.extra || ""), lineas.length > 1 ? 200 : 140);
};

module.exports = { ...B, melodia, RD, preg, vid, tema, esfera, reloj, relojes, DEDOS, flautaV, flautas, pueblo, corro, pentaClave, escalera, cuadro, AZ, RO, VE, NA, AM, AG, MO };
