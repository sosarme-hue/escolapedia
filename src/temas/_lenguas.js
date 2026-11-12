// Utilidades de dibujo para los temas de lenguas (castellano, inglés, francés y catalán).
// Todas las figuras son SVG propios. Avisan en consola si un texto no cabe en su caja.
const { F, D } = require("./_util");

// Ancho aproximado de un texto en píxeles.
const ancho = (s, fs, bold) => [...String(s).replace(/<[^>]+>/g, "")].reduce((a, ch) => a + (/[A-ZÁÉÍÓÚÑÇÀÈÒÜ0-9]/.test(ch) ? 0.66 : /[ .,;:'’·il]/.test(ch) ? 0.32 : 0.5), 0) * fs * (bold ? 1.12 : 1);
function cabe(s, fs, max, bold, donde) {
  if (ancho(s, fs, bold) > max * 1.3) console.warn(`[lenguas] texto largo (${Math.round(ancho(s, fs, bold))}>${max}) en ${donde}: «${s}»`);
}
// Tamaño de letra que hace caber el texto en «max» píxeles (reduce la letra si hace falta).
const fz = (s, fs, max, bold) => { const a = ancho(s, fs, bold); return a > max ? +(fs * max / a).toFixed(1) : fs; };

const marco = (label, inner) => `<svg viewBox="0 0 260 180" role="img" aria-label="${label}">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/><g ${F}>${inner}</g></svg>`;

// Filas apiladas: [título, texto, color]. Con 2-3 filas, título y texto en dos líneas.
function filas(label, items, titulo) {
  const top = titulo ? 34 : 14, n = items.length, gap = 8;
  const h = (166 - top - (n - 1) * gap) / n;
  let out = titulo ? `<text x="130" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--muted)">${titulo}</text>` : "";
  // En filas de una línea, el texto se alinea en columna tras el título más largo si cabe.
  const colX = 26 + Math.max(...items.map(([t]) => ancho(t, 14, true))) + 14;
  const enColumna = items.every(([, d]) => colX + ancho(d, 13, false) <= 238);
  items.forEach(([t, d, c], i) => {
    const y = top + i * (h + gap);
    out += `<rect x="14" y="${y}" width="232" height="${h}" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/>`;
    if (h >= 38) {
      cabe(t, 14, 212, true, label); cabe(d, 13, 212, false, label);
      out += `<text x="26" y="${y + h / 2 - 3}" font-size="${fz(t, 14, 212, true)}" font-weight="700" fill="${c}">${t}</text><text x="26" y="${y + h / 2 + 14}" font-size="${fz(d, 13, 212)}" fill="var(--ink)">${d}</text>`;
    } else {
      const k = Math.min(1, 204 / (ancho(t, 14, true) + ancho(d, 13, false)));
      if (k < 0.77) console.warn(`[lenguas] fila larga en ${label}: «${t} ${d}»`);
      out += `<text x="26" y="${y + h / 2 + 5}" font-size="${+(14 * k).toFixed(1)}" font-weight="700" fill="${c}">${t}</text>${enColumna ? `<text x="${colX}" y="${y + h / 2 + 5}" font-size="13" fill="var(--ink)">${d}</text>` : `<text x="236" y="${y + h / 2 + 5}" text-anchor="end" font-size="${+(13 * k).toFixed(1)}" fill="var(--ink)">${d}</text>`}`;
    }
  });
  return marco(label, out);
}

// Frase troceada: [texto, etiqueta, color]. Cada trozo en una caja con su función debajo.
function frase(label, partes, nota) {
  // Primero se colocan las cajas en filas; después se centra el bloque en vertical.
  let x = 14, fila = 0; const pos = [];
  partes.forEach(([t, e, c]) => {
    const w = Math.max(ancho(t, 14, true), ancho(e || "", 11, true)) + 16;
    if (x + w > 246 && x > 14) { x = 14; fila++; }
    pos.push({ t, e, c, x, fila, w: Math.min(w, 232) });
    x += w + 6;
  });
  const alto = (fila + 1) * 56 - 6, y0 = Math.max(12, ((nota ? 146 : 170) - alto) / 2);
  let out = "";
  pos.forEach(({ t, e, c, x, fila, w }) => {
    const y = y0 + fila * 56;
    out += `<rect x="${x}" y="${y}" width="${w}" height="30" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"/>
        <text x="${x + w / 2}" y="${y + 20}" text-anchor="middle" font-size="${fz(t, 14, w - 8, true)}" font-weight="700" fill="var(--ink)">${t}</text>
        ${e ? `<text x="${x + w / 2}" y="${y + 45}" text-anchor="middle" font-size="11" font-weight="700" fill="${c}">${e}</text>` : ""}`;
  });
  if (nota) { cabe(nota, 13, 236, false, label); out += `<text x="130" y="166" text-anchor="middle" font-size="${fz(nota, 13, 236)}" fill="var(--muted)">${nota}</text>`; }
  return marco(label, out);
}

// Línea del tiempo vertical: [fecha, texto, color].
function linea(label, eventos) {
  const n = eventos.length, step = 152 / n;
  let out = `<path d="M50 ${14 + step / 2} V ${14 + step * (n - 0.5)}" stroke="var(--line)" stroke-width="3"/>`;
  eventos.forEach(([f, t, c], i) => {
    const y = 14 + step * (i + 0.5);
    cabe(t, 13, 180, false, label);
    out += `<circle cx="50" cy="${y}" r="7" fill="${c}"/><text x="38" y="${y + 4}" text-anchor="end" font-size="${fz(f, 12, 26, true)}" font-weight="700" fill="${c}">${f}</text>
        <text x="64" y="${y + 5}" font-size="${fz(t, 13, 182)}" fill="var(--ink)">${t}</text>`;
  });
  return marco(label, out);
}

// Diálogo en bocadillos: [quién, texto, color], alternando izquierda y derecha.
function dialogo(label, turnos) {
  const n = turnos.length, step = 166 / n;
  let out = "";
  turnos.forEach(([q, t, c], i) => {
    const y = 10 + i * step, h = step - 8, w = Math.min(212, ancho(t, 13, false) + 24), x = i % 2 ? 246 - w : 14;
    cabe(t, 13, 188, false, label);
    out += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2"/>
        ${q ? `<text x="${x + 12}" y="${y + 15}" font-size="11" font-weight="700" fill="${c}">${q}</text>` : ""}
        <text x="${x + 12}" y="${y + h - 9}" font-size="${fz(t, 13, w - 20)}" fill="var(--ink)">${t}</text>`;
  });
  return marco(label, out);
}

// Tabla: cabecera y filas. La primera columna va en negrita y color.
function tabla(label, cab, filasT, color = "var(--pen)") {
  const nc = cab.length, cw = 232 / nc, rh = Math.min(30, 130 / filasT.length);
  let out = cab.map((h, j) => `<text x="${14 + cw * (j + 0.5)}" y="32" text-anchor="middle" font-size="13" font-weight="700" fill="var(--muted)">${h}</text>`).join("");
  out += `<path d="M14 42 H 246" stroke="var(--line)" stroke-width="2"/>`;
  filasT.forEach((r, i) => r.forEach((v, j) => {
    cabe(v, 13, cw - 4, j === 0, label);
    out += `<text x="${14 + cw * (j + 0.5)}" y="${64 + i * rh}" text-anchor="middle" font-size="${fz(v, 13, cw - 6, j === 0)}" ${j === 0 ? `font-weight="700" fill="${color}"` : 'fill="var(--ink)"'}>${v}</text>`;
  }));
  return marco(label, out);
}

// Figura grande en columnas: [arriba, título, abajo, color]. 3 o 4 columnas.
function columnas(label, cols) {
  const n = cols.length, gap = 14, w = (600 - gap * (n - 1)) / n;
  const out = cols.map(([a, t, b, c], i) => {
    const x = 20 + i * (w + gap), cx = x + w / 2;
    const tf = n === 4 ? 20 : 24;
    cabe(a, 13, w - 12, false, label); cabe(t, tf, w - 12, true, label);
    const lb = Array.isArray(b) ? b : [b];
    lb.forEach((l) => cabe(l, 14, w - 14, false, label));
    return `<rect x="${x}" y="20" width="${w}" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
      <text x="${cx}" y="54" text-anchor="middle" font-size="${fz(a, 13, w - 12)}" fill="var(--muted)" ${F}>${a}</text>
      <text x="${cx}" y="96" text-anchor="middle" font-size="${fz(t, tf, w - 12, true)}" font-weight="700" fill="${c}" ${D}>${t}</text>
      ${lb.map((l, k) => `<text x="${cx}" y="${136 + k * 22}" text-anchor="middle" font-size="${fz(l, 14, w - 14)}" fill="var(--ink)" ${F}>${l}</text>`).join("")}`;
  }).join("");
  return `<svg viewBox="0 0 640 220" role="img" aria-label="${label}">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>${out}</svg>`;
}

// Línea del tiempo horizontal para la figura: [fecha, nombre, [detalle1, detalle2], color].
function eje(label, eventos) {
  const n = eventos.length, step = 600 / n;
  let out = `<path d="M30 110 H 610" stroke="var(--line)" stroke-width="4"/>`;
  eventos.forEach(([f, t, det, c], i) => {
    const cx = 20 + step * (i + 0.5);
    cabe(t, 15, step - 6, true, label);
    (det || []).forEach((d) => cabe(d, 12.5, step - 6, false, label));
    out += `<circle cx="${cx}" cy="110" r="10" fill="${c}"/>
      <text x="${cx}" y="54" text-anchor="middle" font-size="15" font-weight="700" fill="${c}" ${D}>${f}</text>
      <text x="${cx}" y="84" text-anchor="middle" font-size="${fz(t, 15, step - 6, true)}" font-weight="700" fill="var(--ink)" ${F}>${t}</text>
      ${(det || []).map((d, k) => `<text x="${cx}" y="${146 + k * 20}" text-anchor="middle" font-size="${fz(d, 12.5, step - 6)}" fill="var(--ink)" ${F}>${d}</text>`).join("")}`;
  });
  return `<svg viewBox="0 0 640 220" role="img" aria-label="${label}">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>${out}</svg>`;
}

// Esquema de proceso en la figura: pasos unidos por flechas: [título, [línea1, línea2], color].
function pasos(label, items) {
  const n = items.length, gap = 26, w = (600 - gap * (n - 1)) / n;
  const out = items.map(([t, ls, c], i) => {
    const x = 20 + i * (w + gap), cx = x + w / 2;
    cabe(t, 16, w - 10, true, label);
    ls.forEach((l) => cabe(l, 13, w - 12, false, label));
    return `<rect x="${x}" y="40" width="${w}" height="140" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
      <circle cx="${cx}" cy="40" r="15" fill="${c}"/><text x="${cx}" y="46" text-anchor="middle" font-size="15" font-weight="700" fill="#fff" ${D}>${i + 1}</text>
      <text x="${cx}" y="88" text-anchor="middle" font-size="${fz(t, 16, w - 10, true)}" font-weight="700" fill="${c}" ${F}>${t}</text>
      ${ls.map((l, k) => `<text x="${cx}" y="${120 + k * 20}" text-anchor="middle" font-size="${fz(l, 13, w - 12)}" fill="var(--ink)" ${F}>${l}</text>`).join("")}
      ${i < n - 1 ? `<path d="M${x + w + 5} 110 h ${gap - 13}" stroke="var(--muted)" stroke-width="3"/><path d="M${x + w + gap - 12} 105 l 5 5 l -5 5" fill="none" stroke="var(--muted)" stroke-width="3"/>` : ""}`;
  }).join("");
  return `<svg viewBox="0 0 640 220" role="img" aria-label="${label}">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>${out}</svg>`;
}

// Tabla HTML para los bloques ampliados.
const tb = (cab, filas) => `<table class="tb"><thead><tr>${cab.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${filas.map((f) => `<tr>${f.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
const vid = (id, titulo, canal, vistas) => ({ id, titulo, canal, vistas, megusta: 0 });

// Amplía un tema al formato de libro de texto (README, «Tema ampliado»).
// A.bloques: [{ tras: "texto de un bloque existente" (opcional), html, video?, svg? }]; sin «tras» va al final.
// A.ejemplos: [enunciado, [pasos], resultado]; A.ejercicios: [q, sol]; A.quiz: [q, [opciones], a, e].
function amplia(T, A) {
  if (A.minutos) T.minutos = A.minutos;
  if (A.objetivos) T.objetivos.push(...A.objetivos);
  for (const b of A.bloques || []) {
    const nuevo = { html: b.html };
    if (b.svg) nuevo.svg = b.svg;
    if (b.video) nuevo.video = b.video;
    const i = b.tras ? T.bloques.findIndex((x) => x.html.includes(b.tras)) : -1;
    if (b.tras && i < 0) throw new Error(`amplia: no encuentro «${b.tras}» en ${T.titulo}`);
    if (i < 0) T.bloques.push(nuevo);
    else {
      let j = i + 1;
      while (T.bloques[j] && T.bloques[j]._nuevo === b.tras) j++;
      Object.defineProperty(nuevo, "_nuevo", { value: b.tras });
      T.bloques.splice(j, 0, nuevo);
    }
  }
  for (const [tras, video] of A.videos || []) {
    const b = T.bloques.find((x) => x.html.includes(tras));
    if (!b) throw new Error(`amplia: vídeo sin bloque «${tras}» en ${T.titulo}`);
    b.video = video;
  }
  T.ejemplos = (A.ejemplos || []).map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado }));
  T.errores = A.errores || [];
  T.ejercicios = (A.ejercicios || []).map(([q, sol]) => ({ q, sol }));
  for (const [q, o, a, e] of A.quiz || []) T.quiz.push({ q, o, a, e });
  T.tarjetas.push(...(A.tarjetas || []));
  return T;
}

const BOE = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };

module.exports = { fz, marco, filas, frase, linea, dialogo, tabla, columnas, eje, pasos, BOE, cabe, tb, vid, amplia };
