// Nivel libro (4º ESO), lote 12: Expresión Artística y Música.
// Cada tema existente (eso-4-art-*.js, eso-4-mus-*.js) se amplía con los datos de _eso4L12-<clave>.js.
// Ver «Tema nivel libro (4º ESO)» en el README.
const { F, D } = require("./_util");
const L = require("./_lenguas");

const ancho = (s, fs, bold) => [...String(s).replace(/<[^>]+>/g, "")].reduce((a, ch) => a + (/[A-ZÁÉÍÓÚÑÇÀÈÒÜ0-9]/.test(ch) ? 0.66 : /[ .,;:'’·il]/.test(ch) ? 0.32 : 0.5), 0) * fs * (bold ? 1.12 : 1);
const fz = (s, fs, max, bold) => { const a = ancho(s, fs, bold); return a > max ? +(fs * max / a).toFixed(1) : fs; };
const marco = (label, inner) => `<svg viewBox="0 0 260 180" role="img" aria-label="${label}">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/><g ${F}>${inner}</g></svg>`;

// Barras horizontales: [etiqueta, valor (0-100), color]; «unidad» se escribe tras el valor.
function barras(label, items, unidad = "", titulo) {
  const top = titulo ? 34 : 16, n = items.length, h = Math.min(30, (150 - top) / n);
  const max = Math.max(...items.map(([, v]) => v));
  let out = titulo ? `<text x="130" y="22" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--muted)">${titulo}</text>` : "";
  items.forEach(([t, v, c], i) => {
    const y = top + i * (h + 6), w = Math.max(4, (v / max) * 120);
    out += `<text x="88" y="${y + h / 2 + 4}" text-anchor="end" font-size="${fz(t, 12, 76, true)}" font-weight="700" fill="${c}">${t}</text>
      <rect x="96" y="${y}" width="${w}" height="${h}" rx="5" fill="${c}"/>
      <text x="${100 + w}" y="${y + h / 2 + 4}" font-size="11" font-weight="700" fill="var(--ink)">${v}${unidad}</text>`;
  });
  return marco(label, out);
}

// Pasos en vertical unidos por flechas: [título, texto, color] (3 o 4).
function cadena(label, items) {
  const n = items.length, h = n === 4 ? 32 : 42, gap = (164 - n * h) / (n - 1);
  let out = "";
  items.forEach(([t, d, c], i) => {
    const y = 8 + i * (h + gap);
    out += `<rect x="16" y="${y}" width="228" height="${h}" rx="9" fill="var(--card)" stroke="${c}" stroke-width="2"/>
      <circle cx="34" cy="${y + h / 2}" r="10" fill="${c}"/><text x="34" y="${y + h / 2 + 4}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">${i + 1}</text>
      <text x="52" y="${y + h / 2 + (d ? -2 : 4)}" font-size="${fz(t, 13, 184, true)}" font-weight="700" fill="${c}">${t}</text>
      ${d ? `<text x="52" y="${y + h / 2 + 12}" font-size="${fz(d, 11, 184)}" fill="var(--ink)">${d}</text>` : ""}
      ${i < n - 1 ? `<path d="M130 ${y + h + 1} v ${gap - 4}" stroke="var(--muted)" stroke-width="2"/>` : ""}`;
  });
  return marco(label, out);
}

// Dos columnas enfrentadas: [título, [líneas], color] × 2.
function vs(label, a, b) {
  const col = ([t, ls, c], x) => `<rect x="${x}" y="14" width="108" height="152" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>
      <text x="${x + 54}" y="40" text-anchor="middle" font-size="${fz(t, 15, 96, true)}" font-weight="700" fill="${c}" ${D}>${t}</text>
      ${ls.map((l, k) => `<text x="${x + 54}" y="${68 + k * 22}" text-anchor="middle" font-size="${fz(l, 12, 98)}" fill="var(--ink)">${l}</text>`).join("")}`;
  return marco(label, col(a, 14) + col(b, 138));
}

// Rueda: centro y 4-6 elementos alrededor: [texto, color].
function rueda(label, centro, items) {
  const n = items.length;
  let out = `<circle cx="130" cy="90" r="34" fill="var(--pen)"/><text x="130" y="95" text-anchor="middle" font-size="${fz(centro, 13, 60, true)}" font-weight="700" fill="#fff">${centro}</text>`;
  items.forEach(([t, c], i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n, x = 130 + Math.cos(a) * 92, y = 90 + Math.sin(a) * 62;
    const w = 76;
    out += `<path d="M${130 + Math.cos(a) * 36} ${90 + Math.sin(a) * 36} L ${x} ${y}" stroke="var(--line)" stroke-width="2"/>
      <rect x="${Math.min(246 - w, Math.max(14, x - w / 2))}" y="${y - 13}" width="${w}" height="26" rx="13" fill="var(--card)" stroke="${c}" stroke-width="2"/>
      <text x="${Math.min(246 - w, Math.max(14, x - w / 2)) + w / 2}" y="${y + 4}" text-anchor="middle" font-size="${fz(t, 11.5, w - 8, true)}" font-weight="700" fill="${c}">${t}</text>`;
  });
  return marco(label, out);
}

// Cuadrícula de 2×2 o 2×3 tarjetas: [título, texto, color].
function rejilla(label, items) {
  const cols = 2, rows = Math.ceil(items.length / cols), w = 112, h = (156 - (rows - 1) * 8) / rows;
  let out = "";
  items.forEach(([t, d, c], i) => {
    const x = 14 + (i % cols) * (w + 8), y = 12 + Math.floor(i / cols) * (h + 8);
    out += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/>
      <text x="${x + w / 2}" y="${y + h / 2 - (d ? 3 : -4)}" text-anchor="middle" font-size="${fz(t, 13, w - 10, true)}" font-weight="700" fill="${c}">${t}</text>
      ${d ? `<text x="${x + w / 2}" y="${y + h / 2 + 13}" text-anchor="middle" font-size="${fz(d, 10.5, w - 10)}" fill="var(--ink)">${d}</text>` : ""}`;
  });
  return marco(label, out);
}

// Escala o gradación horizontal: [etiqueta, color de relleno] con texto arriba y abajo.
function escala(label, items, izq, der) {
  const n = items.length, w = 232 / n;
  let out = items.map(([t, c], i) => `<rect x="${14 + i * w}" y="52" width="${w - 4}" height="54" rx="6" fill="${c}"/>
      <text x="${14 + i * w + (w - 4) / 2}" y="126" text-anchor="middle" font-size="${fz(t, 11, w - 4, true)}" font-weight="700" fill="var(--ink)">${t}</text>`).join("");
  out += `<path d="M20 152 H 240" stroke="var(--muted)" stroke-width="2"/><path d="M234 147 L 241 152 L 234 157" fill="none" stroke="var(--muted)" stroke-width="2"/>
    <text x="20" y="34" font-size="${fz(izq, 12, 104, true)}" font-weight="700" fill="var(--muted)">${izq}</text><text x="240" y="34" text-anchor="end" font-size="${fz(der, 12, 104, true)}" font-weight="700" fill="var(--muted)">${der}</text>`;
  return marco(label, out);
}

// Normaliza y comprueba el tema ampliado.
const NIV = { b: "básico", m: "medio", a: "avanzado" };
const palabras = (s) => s.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;

function libro(T, o) {
  const h3 = (b) => (b.html.match(/<h3>(.*?)<\/h3>/) || [])[1];
  const busca = (t) => { const i = T.bloques.findIndex((b) => h3(b) === t); if (i < 0) throw new Error(`libro: no encuentro «${t}» en «${T.titulo}»`); return i; };
  for (const [t, html] of Object.entries(o.textos || {})) { const b = T.bloques[busca(t)]; b.html = `<h3>${t}</h3>${html}`; }
  for (const [t, html] of Object.entries(o.mas || {})) T.bloques[busca(t)].html += html;
  for (const [t, svg] of Object.entries(o.svgs || {})) T.bloques[busca(t)].svg = svg;
  for (const [t, v] of Object.entries(o.videos || {})) T.bloques[busca(t)].video = v ? { megusta: 0, ...v } : undefined;
  // Bloques nuevos, insertados de atrás hacia delante.
  for (const n of [...(o.nuevos || [])].reverse()) {
    const b = { html: n.html, svg: n.svg }; if (n.video) b.video = { megusta: 0, ...n.video };
    if (n.tras) T.bloques.splice(busca(n.tras) + 1, 0, b); else T.bloques.push(b);
  }
  // Numeración «1.1 …»: cada título de o.partes abre un apartado nuevo.
  let p = 0, k = 0;
  for (const b of T.bloques) {
    const t = h3(b);
    if (p === 0 || (o.partes || []).includes(t)) { p++; k = 0; }
    k++;
    b.html = b.html.replace(`<h3>${t}</h3>`, `<h3>${p}.${k} ${t}</h3>`);
  }
  const campos = ["lectura", "glosario", "situacion", "errores", "examen", "mapa", "figura", "video", "familias", "profesores", "minutos", "revisado", "pregunta", "feynman"];
  for (const c of campos) if (o[c] !== undefined) T[c] = o[c];
  if (o.objetivos) T.objetivos.push(...o.objetivos);
  if (o.claves) T.claves.push(...o.claves);
  if (o.fuentes) T.fuentes.push(...o.fuentes);
  if (o.tarjetas) T.tarjetas.push(...o.tarjetas);
  if (o.ejemplos) T.ejemplos = o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado }));
  if (o.ejercicios) T.ejercicios = o.ejercicios.map(([n, q, sol]) => ({ nivel: NIV[n], q, sol }));
  const pq = ([q, op, a, e]) => ({ q, o: op, a, e });
  if (o.quiz) T.quiz = o.quiz.map(pq);
  if (o.examen) T.examen = o.examen.map(pq);
  // Comprobaciones del formato libro: avisan en consola, no paran la construcción.
  const av = (m) => console.warn(`[libro] ${T.titulo}: ${m}`);
  const w = palabras(T.bloques.map((b) => b.html).join(" "));
  if (w < 2000 || w > 3000) av(`${w} palabras en los apartados`);
  if (T.bloques.length < 10 || T.bloques.length > 16) av(`${T.bloques.length} apartados`);
  T.bloques.forEach((b) => { if (!b.svg) av(`sin dibujo: ${h3(b)}`); });
  if (T.ejercicios.length < 30 || T.ejercicios.length > 40) av(`${T.ejercicios.length} ejercicios`);
  if (T.quiz.length !== 20 || T.quiz.some((q) => q.o.length !== 4 || !q.e)) av("autoevaluación: 20 preguntas de 4 opciones con explicación");
  if ((T.examen || []).length !== 8) av("examen: 8 preguntas");
  if (T.tarjetas.length !== 12) av(`${T.tarjetas.length} tarjetas`);
  if (T.ejemplos.length !== 6 || T.errores.length !== 6) av("6 ejemplos y 6 errores");
  if (!T.glosario || T.glosario.length < 12 || T.glosario.length > 20) av("glosario de 12 a 20 términos");
  if (!T.lectura || !T.situacion) av("falta lectura o situación");
  return T;
}

// Aplica a un fichero de temas los datos de nivel libro, en el mismo orden.
const aplica = (temas, claves) => claves.forEach((k, i) => libro(temas[i], require(`./_eso4L12-${k}`)));

module.exports = { libro, aplica, barras, cadena, vs, rueda, rejilla, escala, marco, fz, F, D, filas: L.filas, frase: L.frase, linea: L.linea, tabla: L.tabla, tb: L.tb, columnas: L.columnas, eje: L.eje, pasos: L.pasos };
