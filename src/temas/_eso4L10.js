// Ayudas para los temas de nivel libro de 4º ESO, lote 10: Economía y Emprendimiento y FOPP.
// Dibujos parametrizables y atajos para escribir bloques, ejercicios y preguntas. Empieza por «_»: build.js no lo trata como tema.
const { F, D, mapa } = require("./_util");
const H = require("./_hum");
const { caja, esc } = H;

// Bloque numerado: B("1.1", "Título", html, svg, video?).
const B = (n, t, html, svg, video) => ({ html: `<h3>${n} ${t}</h3>${html}`, svg, ...(video ? { video } : {}) });

// Ejercicios: [["b"|"m"|"a", enunciado, solución], ...].
const NIV = { b: "básico", m: "medio", a: "avanzado" };
const ejs = (xs) => xs.map(([n, q, sol]) => ({ nivel: NIV[n], q, sol }));

// Preguntas tipo test: [[pregunta, [4 opciones], índice correcto, explicación], ...].
// La opción correcta se recoloca de forma fija (según la pregunta) para que la respuesta no caiga siempre en la misma letra.
const qz = (xs) => xs.map(([q, o, a, e], i) => {
  const t = (i * 3 + q.length) % o.length, ok = o[a], resto = o.filter((_, j) => j !== a);
  resto.splice(t, 0, ok);
  return { q, o: resto, a: t, e };
});

// Cuadro 2×2: [[título, "línea|línea", color] ×4] (DAFO, matrices de decisión…).
function cuadro4(label, celdas) {
  const pos = [[14, 14], [134, 14], [14, 96], [134, 96]];
  return caja(label, `<g ${F} text-anchor="middle">${celdas.map(([t, s, c], i) => {
    const [x, y] = pos[i];
    const ls = String(s || "").split("|");
    return `<rect x="${x}" y="${y}" width="112" height="72" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><rect x="${x}" y="${y}" width="112" height="24" rx="10" fill="${c}"/><text x="${x + 56}" y="${y + 17}" font-size="12" font-weight="700" fill="#fff">${esc(t)}</text>${ls.map((l, j) => `<text x="${x + 56}" y="${y + 42 + j * 14}" font-size="${l.length > 17 ? 9.5 : 10.5}" fill="var(--ink)">${esc(l)}</text>`).join("")}`;
  }).join("")}</g>`);
}

// Ciclo: elipse con 3 a 6 etapas y un texto en el centro.
function ciclo(label, items, centro = "", color = "var(--pen)") {
  const n = items.length;
  const pos = items.map((_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return [130 + 84 * Math.cos(a), 92 + 64 * Math.sin(a)]; });
  const cs = String(centro).split("|");
  return caja(label, `<defs><marker id="ci-${label.length}" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${color}"/></marker></defs>
    <ellipse cx="130" cy="92" rx="84" ry="64" fill="none" stroke="var(--line)" stroke-width="3"/>
    ${pos.map(([x, y], i) => { const [x2, y2] = pos[(i + 1) % n]; const mx = (x + x2) / 2, my = (y + y2) / 2; const k = 1.12; return `<path d="M${130 + (mx - 130) * k - (x2 - x) * 0.04} ${92 + (my - 92) * k - (y2 - y) * 0.04} L ${130 + (mx - 130) * k + (x2 - x) * 0.04} ${92 + (my - 92) * k + (y2 - y) * 0.04}" stroke="${color}" stroke-width="2" marker-end="url(#ci-${label.length})"/>`; }).join("")}
    <g ${F} text-anchor="middle" font-weight="700">
    ${cs.map((l, i) => `<text x="130" y="${96 - (cs.length - 1) * 7 + i * 14}" font-size="12" fill="${color}" ${D}>${esc(l)}</text>`).join("")}
    ${items.map((t, i) => { const [x, y] = pos[i]; return `<rect x="${x - 42}" y="${y - 13}" width="84" height="26" rx="13" fill="var(--card)" stroke="${color}" stroke-width="2"/><text x="${x}" y="${y + 4}" font-size="${t.length > 12 ? 9.5 : 11}" fill="var(--ink)">${esc(t)}</text>`; }).join("")}
    </g>`);
}

// Gráfico de líneas: series [[nombre, [valores], color], ...], etiquetas del eje x, máximo y unidad.
function ejes(label, xs, series, max, unidad = "") {
  const x0 = 40, x1 = 240, y0 = 146, y1 = 26, n = xs.length;
  const px = (i) => x0 + (n > 1 ? (i * (x1 - x0)) / (n - 1) : 0), py = (v) => y0 - (v / max) * (y0 - y1);
  return caja(label, `<g ${F}>
    <path d="M${x0} ${y1 - 8} V ${y0} H ${x1 + 10}" fill="none" stroke="var(--ink)" stroke-width="2"/>
    <text x="${x0 - 6}" y="${y1 + 4}" text-anchor="end" font-size="10" fill="var(--muted)">${esc(max + unidad)}</text>
    <text x="${x0 - 6}" y="${y0 + 4}" text-anchor="end" font-size="10" fill="var(--muted)">0</text>
    ${xs.map((t, i) => `<text x="${px(i)}" y="${y0 + 16}" text-anchor="middle" font-size="10" fill="var(--muted)">${esc(t)}</text>`).join("")}
    ${series.map(([nom, vs, c], k) => `<polyline points="${vs.map((v, i) => `${px(i)},${py(v)}`).join(" ")}" fill="none" stroke="${c}" stroke-width="3"/>${vs.map((v, i) => `<circle cx="${px(i)}" cy="${py(v)}" r="3.5" fill="${c}"/>`).join("")}<rect x="${54 + k * 96}" y="164" width="12" height="8" rx="2" fill="${c}"/><text x="${70 + k * 96}" y="172" font-size="10" fill="var(--ink)">${esc(nom)}</text>`).join("")}
  </g>`);
}

// Tarta: [[texto, porcentaje, color], ...] (máx. 5) con leyenda a la derecha.
function tarta(label, trozos) {
  const tot = trozos.reduce((s, t) => s + t[1], 0);
  let a = -Math.PI / 2;
  const sl = trozos.map(([t, v, c]) => {
    const b = a + (v / tot) * 2 * Math.PI, gran = b - a > Math.PI ? 1 : 0;
    const p = `M70 90 L ${70 + 58 * Math.cos(a)} ${90 + 58 * Math.sin(a)} A 58 58 0 ${gran} 1 ${70 + 58 * Math.cos(b)} ${90 + 58 * Math.sin(b)} Z`;
    a = b;
    return `<path d="${p}" fill="${c}" stroke="var(--paper)" stroke-width="2"/>`;
  }).join("");
  const h = Math.min(30, 150 / trozos.length);
  return caja(label, `${sl}<g ${F} font-size="11">${trozos.map(([t, v, c], i) => { const y = 90 - (trozos.length * h) / 2 + i * h + h / 2; return `<rect x="140" y="${y - 8}" width="14" height="14" rx="3" fill="${c}"/><text x="160" y="${y + 3}" fill="var(--ink)" font-weight="700">${esc(v)} %</text><text x="160" y="${y + 15}" fill="var(--muted)" font-size="${t.length > 16 ? 9 : 10}">${esc(t)}</text>`; }).join("")}</g>`);
}

// Fórmula en cajas: ["Ingresos", "−", "Gastos", "=", "Ahorro"] (las cajas admiten "línea|línea"); colores opcionales.
function formula(label, partes, colores = [], pie = "") {
  const cajas = partes.filter((_, i) => i % 2 === 0).length, ops = partes.length - cajas;
  const w = (232 - ops * 18) / cajas;
  let x = 14, k = 0;
  const g = partes.map((p, i) => {
    if (i % 2) { const s = `<text x="${x + 9}" y="${pie ? 86 : 96}" text-anchor="middle" font-size="20" font-weight="700" fill="var(--ink)" ${D}>${esc(p)}</text>`; x += 18; return s; }
    const c = colores[k++] || ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"][k % 4];
    const ls = String(p).split("|");
    const s = `<rect x="${x}" y="${pie ? 52 : 62}" width="${w}" height="56" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${ls.map((l, j) => `<text x="${x + w / 2}" y="${(pie ? 84 : 94) - (ls.length - 1) * 7 + j * 14}" text-anchor="middle" font-size="${l.length * 6.6 > w - 6 ? 9.5 : 11.5}" font-weight="700" fill="var(--ink)">${esc(l)}</text>`).join("")}`;
    x += w;
    return s;
  }).join("");
  return caja(label, `<g ${F}>${g}${pie ? `<text x="130" y="150" text-anchor="middle" font-size="11" fill="var(--muted)">${esc(pie)}</text>` : ""}</g>`);
}

// Escalera ascendente: [[texto, color], ...] (3 a 5), cada peldaño con "línea|línea".
function escalera(label, peldanos) {
  const n = peldanos.length, w = 232 / n;
  return caja(label, `<g ${F} text-anchor="middle" font-weight="700">${peldanos.map(([t, c], i) => {
    const h = 34 + i * (110 / Math.max(1, n - 1)), x = 14 + i * w, y = 164 - h;
    const ls = String(t).split("|");
    return `<rect x="${x}" y="${y}" width="${w - 4}" height="${h}" rx="6" fill="${c}"/>${ls.map((l, j) => `<text x="${x + (w - 4) / 2}" y="${y + 18 + j * 13}" font-size="${l.length * 6.2 > w - 8 ? 9 : 10.5}" fill="#fff">${esc(l)}</text>`).join("")}`;
  }).join("")}<path d="M10 166 H 250" stroke="var(--ink)" stroke-width="2"/></g>`);
}

// Balanza: dos platillos [título, "línea|línea", color] y un texto de resultado.
function balanza(label, a, b, inclina = 0, resultado = "") {
  const d = inclina * 10;
  const plato = ([t, s, c], x, y) => { const ls = String(s).split("|"); return `<path d="M${x} ${y} L ${x - 40} ${y + 30} M${x} ${y} L ${x + 40} ${y + 30}" stroke="var(--line)" stroke-width="1.5"/><rect x="${x - 50}" y="${y + 30}" width="100" height="${26 + ls.length * 13}" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="${x}" y="${y + 46}" text-anchor="middle" font-size="12" font-weight="700" fill="${c}">${esc(t)}</text>${ls.map((l, j) => `<text x="${x}" y="${y + 60 + j * 13}" text-anchor="middle" font-size="${l.length > 15 ? 9.5 : 10.5}" fill="var(--ink)">${esc(l)}</text>`).join("")}`; };
  return caja(label, `<g ${F}><path d="M130 30 V 158 M100 160 H 160" stroke="var(--ink)" stroke-width="3"/><path d="M66 ${30 + d} L 194 ${30 - d}" stroke="var(--ink)" stroke-width="3"/><circle cx="130" cy="30" r="5" fill="var(--ink)"/>${plato(a, 66, 30 + d)}${plato(b, 194, 30 - d)}${resultado ? `<text x="130" y="176" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--muted)">${esc(resultado)}</text>` : ""}</g>`);
}

// Centro con satélites (4 a 6), con más aire que la versión de _hum para que las cajas no toquen el círculo.
function rueda(label, centro, items, colorCentro = "var(--pen)") {
  const n = items.length;
  const pos = n === 4 ? [[54, 34], [206, 34], [54, 158], [206, 158]] : n === 5 ? [[54, 30], [206, 30], [50, 96], [210, 96], [130, 162]] : [[54, 26], [206, 26], [50, 96], [210, 96], [54, 166], [206, 166]];
  const c = String(centro).split("|");
  return caja(label, `<g ${F} font-size="11.5" font-weight="700" text-anchor="middle">
    ${items.map(([t, col], i) => { const [x, y] = pos[i]; return `<path d="M${x} ${y} L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="${x - 46}" y="${y - 12}" width="92" height="24" rx="12" fill="var(--card)" stroke="${col}" stroke-width="2"/><text x="${x}" y="${y + 4}" fill="var(--ink)"${t.length > 14 ? ' font-size="9.5"' : t.length > 11 ? ' font-size="10.5"' : ""}>${esc(t)}</text>`; }).join("")}
    <circle cx="130" cy="96" r="31" fill="${colorCentro}"/>
    ${c.map((l, i) => `<text x="130" y="${100 - (c.length - 1) * 7 + i * 14}" fill="#fff" font-size="${Math.max(...c.map((x) => x.length)) > 9 ? 8.5 : Math.max(...c.map((x) => x.length)) > 6 ? 9.5 : 11}">${esc(l)}</text>`).join("")}
  </g>`);
}

module.exports = { ...H, F, D, mapa, B, ejs, qz, cuadro4, ciclo, ejes, tarta, formula, escalera, balanza, rueda };
