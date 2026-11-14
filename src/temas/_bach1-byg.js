// Ayudas para Biología, Geología y Ciencias Ambientales de 1º de Bachillerato (nivel libro).
// Cada tema se escribe con tema({...}); aquí se monta, se numeran los apartados (1.1, 1.2, 2.1…) y se comprueba el formato.
// Dibujos de bloque de 260 × 180: los genéricos salen de _eso4L5 y _eso4L6; los propios de biología y geología, de aquí.
const L5 = require("./_eso4L5");
const L6 = require("./_eso4L6");
const { F, D, mapa, flecha } = require("./_util");
const { marco, T, fit } = L5;

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"];
const NIV = { b: "básico", m: "medio", a: "avanzado" };
let nid = 0;
const uid = (p) => `bg${p}${++nid}`;

// Vídeos elegidos con tools/videos.py (sin repetir ids de otros temas). El título lo pone cada tema.
const VID = require("./_bach1-byg-videos");
const V = (k, titulo) => {
  if (!VID[k]) throw new Error(`vídeo ${k} no encontrado`);
  const { id, canal, vistas, q } = VID[k];
  return { id, canal, vistas, titulo, megusta: 0, busqueda: q };
};

// ---------- Dibujos propios ----------

// Etiqueta con línea guía: punto (px, py) → texto en (tx, ty).
const guia = (px, py, tx, ty, txt, c = "var(--ink)") => {
  const izq = tx < px, fs = Number(fit(txt, 64, 10.5, true)), w = String(txt).length * fs * 0.62;
  const ex = izq ? tx + w + 3 : tx - w - 3;
  return `<path d="M${px} ${py} L ${ex.toFixed(1)} ${ty - 4}" stroke="var(--muted)" stroke-width="1.2"/>${T(tx, ty, txt, { fs, a: izq ? "start" : "end", b: true, c })}`;
};

// Célula eucariota animal o vegetal con sus orgánulos rotulados.
function celula(aria, vegetal = false) {
  const cuerpo = vegetal
    ? `<rect x="58" y="22" width="144" height="136" rx="10" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="5"/><rect x="66" y="30" width="128" height="120" rx="7" fill="var(--card)" stroke="var(--leaf)" stroke-width="1.5"/>
       <rect x="104" y="46" width="70" height="62" rx="18" fill="var(--water)" fill-opacity=".25" stroke="var(--water)" stroke-width="1.5"/>
       <ellipse cx="88" cy="128" rx="13" ry="7" fill="var(--leaf)"/><ellipse cx="170" cy="130" rx="13" ry="7" fill="var(--leaf)"/>`
    : `<ellipse cx="130" cy="90" rx="78" ry="68" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/>
       <circle cx="166" cy="62" r="6" fill="var(--sun)" fill-opacity=".7"/><circle cx="114" cy="138" r="5" fill="var(--sun)" fill-opacity=".7"/>`;
  const nucleo = vegetal ? `<circle cx="88" cy="70" r="18" fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2"/><circle cx="88" cy="70" r="6" fill="var(--pen)"/>`
    : `<circle cx="124" cy="86" r="24" fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2"/><circle cx="124" cy="86" r="8" fill="var(--pen)"/>`;
  const mito = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="12" ry="6" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="1.6"/><path d="M${x - 8} ${y} q 3 -4 5 0 t 5 0 t 5 0" fill="none" stroke="var(--red)" stroke-width="1.2"/>`;
  const reti = (x, y) => `<path d="M${x} ${y} q 10 -6 20 0 t 20 0 M${x} ${y + 6} q 10 -6 20 0 t 20 0 M${x} ${y + 12} q 10 -6 20 0 t 20 0" fill="none" stroke="var(--inf)" stroke-width="1.6"/>`;
  const ribo = [[96, 120], [104, 116], [150, 112], [158, 118], [144, 132]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.8" fill="var(--ink)"/>`).join("");
  const k = vegetal ? 0.76 : 0.74, S = (x, y) => [+(130 + (x - 130) * k).toFixed(1), +(90 + (y - 90) * k).toFixed(1)];
  const g = (x, y, tx, ty, t, c) => { const [a, b] = S(x, y); return guia(a, b, tx, ty, t, c); };
  const et = vegetal
    ? g(62, 40, 4, 22, "Pared", "var(--leaf)") + g(88, 70, 4, 66, "Núcleo", "var(--pen)") + g(150, 64, 256, 40, "Vacuola", "var(--water)") + g(88, 128, 4, 150, "Cloroplasto", "var(--leaf)") + g(162, 130, 256, 150, "Mitocondria", "var(--red)") + g(100, 108, 4, 108, "Retículo", "var(--inf)")
    : g(124, 86, 4, 62, "Núcleo", "var(--pen)") + g(176, 100, 256, 104, "Mitocondria", "var(--red)") + g(166, 62, 256, 40, "Lisosoma", "var(--sun)") + g(70, 112, 4, 128, "Retículo", "var(--inf)") + g(204, 116, 256, 150, "Membrana", "var(--pen)") + g(150, 112, 4, 168, "Ribosomas");
  return marco(aria, `<g transform="translate(130 90) scale(${k}) translate(-130 -90)">${cuerpo}${nucleo}${vegetal ? mito(160, 130) + reti(98, 108) : mito(170, 100) + mito(100, 60) + reti(66, 106)}${ribo}</g>${et}`);
}

// Corte de la Tierra en cuadrante con capas [[nombre, prof., color, radio relativo]] y rótulos a la derecha.
function tierra(aria, capas, titulo = "") {
  const cx = 14, cy = 170, R = titulo ? 136 : 150, n = capas.length;
  let s = titulo ? T(130, 18, titulo, { fs: fit(titulo, 240, 12, true), b: true, f: D }) : "";
  capas.forEach(([, , c, r]) => { s += `<path d="M${cx} ${cy} L ${cx + R * r} ${cy} A ${R * r} ${R * r} 0 0 0 ${cx} ${cy - R * r} Z" fill="${c}" fill-opacity=".8" stroke="var(--paper)" stroke-width="1.5"/>`; });
  const y0 = titulo ? 40 : 26, paso = (162 - y0) / Math.max(1, n - 1);
  capas.forEach(([nom, p, c, r], i) => {
    const r2 = i + 1 < n ? capas[i + 1][3] : 0, rm = (R * (r + r2)) / 2, ang = ((70 - (i * 50) / Math.max(1, n - 1)) * Math.PI) / 180;
    const px = cx + rm * Math.cos(ang), py = cy - rm * Math.sin(ang), ly = y0 + i * paso, lx = 176;
    s += `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="2.5" fill="var(--ink)"/><path d="M${px.toFixed(1)} ${py.toFixed(1)} L ${lx - 4} ${ly - 4}" stroke="var(--muted)" stroke-width="1.2"/>`;
    s += T(lx, ly - (p ? 2 : -1), nom, { fs: fit(nom, 80, 11, true), a: "start", b: true, c });
    if (p) s += T(lx, ly + 10, p, { fs: fit(p, 80, 9.5), a: "start", c: "var(--muted)" });
  });
  return marco(aria, s);
}

// Corte de un límite de placas: tipo "divergente", "subduccion", "colision" o "transformante".
function limite(aria, tipo) {
  const id = uid("lp"), m = (x1, y1, x2, y2, c = "var(--ink)") => `<path d="M${x1} ${y1} L ${x2} ${y2}" stroke="${c}" stroke-width="3" marker-end="url(#${id})"/>`;
  let s = "";
  if (tipo === "divergente") {
    s = `<rect x="10" y="60" width="240" height="110" fill="var(--sun)" fill-opacity=".25"/>
    <path d="M10 60 H 118 L 124 74 V 98 H 10 Z" fill="var(--pen)" fill-opacity=".55"/><path d="M250 60 H 142 L 136 74 V 98 H 250 Z" fill="var(--pen)" fill-opacity=".55"/>
    <path d="M130 170 C 128 140 126 110 130 66" stroke="var(--red)" stroke-width="5" fill="none"/><path d="M120 60 L 130 46 L 140 60" fill="var(--red)"/>
    ${m(100, 82, 50, 82)}${m(160, 82, 210, 82)}
    ${T(130, 30, "Dorsal: se crea litosfera", { fs: 12, b: true })}${T(70, 116, "litosfera oceánica", { fs: 10 })}${T(196, 158, "astenosfera", { fs: 10, c: "var(--red)", b: true })}`;
  } else if (tipo === "subduccion") {
    s = `<rect x="10" y="40" width="240" height="40" fill="var(--water)" fill-opacity=".2"/>
    <path d="M10 80 H 150 L 230 170 H 200 L 140 100 H 10 Z" fill="var(--pen)" fill-opacity=".6"/>
    <path d="M160 74 L 250 60 V 120 L 170 104 Z" fill="var(--sun)" fill-opacity=".6"/><path d="M196 66 L 204 46 L 212 64" fill="var(--red)"/>
    ${m(40, 90, 110, 90, "#fff")}${T(70, 118, "oceánica (densa)", { fs: 10, b: true })}${T(214, 96, "continental", { fs: 10, b: true })}
    ${T(130, 24, "Subducción: fosa y volcanes", { fs: 12, b: true })}<path d="M150 80 l 6 -8" stroke="var(--ink)"/>${T(150, 62, "fosa", { fs: 10, a: "end" })}`;
  } else if (tipo === "colision") {
    s = `<path d="M10 120 H 110 L 130 60 L 150 120 H 250 V 170 H 10 Z" fill="var(--sun)" fill-opacity=".6"/>
    <path d="M110 120 L 130 160 L 150 120" fill="none" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="4 3"/>
    ${m(40, 140, 90, 140)}${m(220, 140, 170, 140)}${T(130, 30, "Colisión: cordillera", { fs: 12, b: true })}${T(130, 52, "Himalaya", { fs: 11, c: "var(--red)", b: true })}${T(50, 110, "continente A", { fs: 10 })}${T(210, 110, "continente B", { fs: 10 })}`;
  } else {
    s = `<rect x="30" y="40" width="200" height="56" fill="var(--pen)" fill-opacity=".35"/><rect x="30" y="100" width="200" height="56" fill="var(--leaf)" fill-opacity=".35"/>
    <path d="M30 98 H 230" stroke="var(--red)" stroke-width="3" stroke-dasharray="8 4"/>${m(170, 68, 90, 68)}${m(90, 128, 170, 128)}
    ${T(130, 24, "Falla transformante", { fs: 12, b: true })}${T(130, 172, "no se crea ni se destruye litosfera", { fs: 10 })}`;
  }
  return marco(aria, s, flecha(id, "var(--ink)"));
}

// Columna de estratos: [[nombre, color, alto relativo]] de arriba abajo, con texto a la derecha.
function estratos(aria, cs, extra = "") {
  const tot = cs.reduce((a, c) => a + (c[2] || 1), 0), H = 150;
  let y = 15, s = "";
  cs.forEach(([n, c, k = 1]) => { const h = (H * k) / tot; s += `<rect x="20" y="${y.toFixed(1)}" width="100" height="${h.toFixed(1)}" fill="${c}" fill-opacity=".75" stroke="var(--paper)"/>${T(128, y + h / 2 + 4, n, { fs: fit(n, 124, 11), a: "start" })}`; y += h; });
  return marco(aria, s + extra);
}

// Neurona esquemática con dendritas, soma, axón con mielina y terminales.
function neurona(aria) {
  const id = uid("nr");
  return marco(aria, `<g stroke="var(--pen)" stroke-width="2.5" fill="none"><path d="M44 80 l-20 -24 M44 80 l-26 4 M44 80 l-16 26 M50 72 l-4 -30"/></g>
  <circle cx="52" cy="84" r="16" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2.5"/><circle cx="52" cy="84" r="5" fill="var(--pen)"/>
  <path d="M68 84 H 206" stroke="var(--ink)" stroke-width="2.5"/>${[84, 116, 148, 180].map((x) => `<rect x="${x}" y="77" width="26" height="14" rx="7" fill="var(--sun)" fill-opacity=".7"/>`).join("")}
  <g stroke="var(--pen)" stroke-width="2.5" fill="none"><path d="M206 84 l 22 -16 M206 84 l 26 0 M206 84 l 22 16"/></g>${[[230, 66], [234, 84], [230, 102]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="var(--red)"/>`).join("")}
  <path d="M90 146 H 190" stroke="var(--red)" stroke-width="2.5" marker-end="url(#${id})"/>${T(140, 166, "sentido del impulso", { fs: 11, c: "var(--red)", b: true })}
  ${T(30, 30, "dendritas", { fs: 10.5, b: true, a: "start" })}${T(52, 122, "soma", { fs: 10.5, b: true })}${T(140, 66, "axón con vaina de mielina", { fs: 10.5, b: true })}${T(232, 126, "terminales", { fs: 10.5, b: true, a: "end" })}`, flecha(id, "var(--red)"));
}

// Texto en varias líneas (corta por palabras) que se ajusta al ancho dado.
function multi(x, y, t, ancho, max = 11, c = "var(--ink)", b = true, alto = 48) {
  const pal = String(t).split(/\s+/), tot = String(t).length;
  let best = null;
  for (let n = 1; n <= Math.min(4, pal.length); n++) {
    const meta = tot / n, ls = [];
    let l = "";
    for (const w of pal) { if (l && (l + " " + w).length > meta + 3) { ls.push(l); l = w; } else l = l ? l + " " + w : w; }
    if (l) ls.push(l);
    const fs = Math.min(max, ancho / (Math.max(...ls.map((q) => q.length)) * (b ? 0.62 : 0.57)), alto / (ls.length * 1.2));
    if (!best || fs > best.fs + 0.3) best = { fs, ls };
  }
  const fs = Math.max(7.5, best.fs), lh = fs * 1.2, y0 = y - ((best.ls.length - 1) * lh) / 2 + fs * 0.35;
  return best.ls.map((l, i) => T(x, (y0 + i * lh).toFixed(1), l, { fs: fs.toFixed(1), b, c })).join("");
}

// Diagrama de cajas conectadas en horizontal: [[texto, color]] (2 a 4) con flechas y rótulos opcionales sobre ellas.
function cadena(aria, cajas, rot = [], titulo = "") {
  const n = cajas.length, gap = 22, w = (236 - gap * (n - 1)) / n, id = uid("cd"), y = titulo ? 70 : 62;
  let s = titulo ? T(130, 24, titulo, { fs: fit(titulo, 236, 13, true), b: true, f: D }) : "";
  cajas.forEach(([t, c], i) => {
    const x = 12 + i * (w + gap);
    s += `<rect x="${x.toFixed(1)}" y="${y}" width="${w.toFixed(1)}" height="56" rx="10" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2.2"/>`;
    s += multi(x + w / 2, y + 28, t, w - 8, 11);
    if (i < n - 1) {
      s += `<path d="M${(x + w + 2).toFixed(1)} ${y + 28} H ${(x + w + gap - 4).toFixed(1)}" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#${id})"/>`;
      if (rot[i]) s += T(x + w + gap / 2, y + 76, rot[i], { fs: fit(rot[i], 110, 10.5), c: "var(--muted)" });
    }
  });
  return marco(aria, s, flecha(id, "var(--muted)"));
}

// Árbol de clasificación: raíz arriba y 2 a 4 hojas abajo, cada una con línea de detalle.
function arbol(aria, raiz, hojas, c = "var(--pen)") {
  const n = hojas.length, w = (240 - (n - 1) * 8) / n;
  let s = `<rect x="70" y="12" width="120" height="34" rx="17" fill="${c}"/>${T(130, 34, raiz, { fs: fit(raiz, 110, 13, true), b: true, c: "#fff", f: D })}`;
  hojas.forEach(([t, d], i) => {
    const x = 10 + i * (w + 8), cx = x + w / 2, k = COL[(i + 1) % 4];
    s += `<path d="M130 46 L ${cx.toFixed(1)} 78" stroke="var(--line)" stroke-width="2.5"/><rect x="${x.toFixed(1)}" y="78" width="${w.toFixed(1)}" height="90" rx="10" fill="var(--card)" stroke="${k}" stroke-width="2.2"/>`;
    s += T(cx, 98, t, { fs: fit(t, w - 8, 12, true), b: true, c: k });
    s += multi(cx, 132, d, w - 10, 10, "var(--ink)", false, 58);
  });
  return marco(aria, s);
}

// ---------- Figura resumen y montaje del tema ----------

function figura(aria, items) {
  const tx = (x, y, s, fs, maxW, b, c) => T(x, y, s, { fs: fit(s, maxW, fs, b), b, c });
  return `<svg viewBox="0 0 640 220" role="img" aria-label="${aria}">
  <rect width="640" height="220" rx="16" fill="var(--paper)"/>
  ${items.map(([n, s, a, b], i) => { const x = 16 + i * 154, cx = x + 73, c = COL[i];
    return `<rect x="${x}" y="24" width="146" height="172" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
    ${tx(cx, 60, n, 16, 132, true, c)}${tx(cx, 104, s, 19, 132, true, "var(--ink)")}${tx(cx, 144, a, 13, 134, false, "var(--ink)")}${tx(cx, 164, b, 13, 134, false, "var(--ink)")}`; }).join("")}
</svg>`;
}

const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const PROFE = "Saberes básicos de Biología, Geología y Ciencias Ambientales de 1º de Bachillerato (RD 243/2022, BOE-A-2022-5521; Decret 171/2022 de Catalunya)";
const FUENTE_RD = { t: "Real Decreto 243/2022, estructura y enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" };
const FUENTE_CAT = { t: "Decret 171/2022, d'ordenació dels ensenyaments del batxillerat (DOGC)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928552.pdf" };

function tema(o) {
  const T_ = {
    materia: "Biología, Geología y Ciencias Ambientales",
    curso: "1-bachillerato",
    titulo: o.titulo,
    minutos: o.minutos || 110,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: o.pregunta,
    lectura: o.lectura,
    bloques: o.bloques.map((b) => ({ html: `<h3>${b.h}</h3>${b.p.map((x) => `<p>${x}</p>`).join("")}${b.extra || ""}`, svg: b.svg, ...(b.v ? { video: V(b.v[0], b.v[1]) } : {}) })),
    figura: { titulo: o.figura.titulo, svg: figura(o.figura.titulo, o.figura.items) },
    video: V(o.video[0], o.video[1]),
    quiz: o.quiz.map(([q, op, a, e]) => ({ q, o: op, a, e })),
    examen: o.examen.map(([q, op, a, e]) => ({ q, o: op, a, e })),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], "var(--pen)", o.mapa[1].map(([t, d], i) => [t, d, COL[i]]), o.mapa[2] || 250),
    tarjetas: o.tarjetas,
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    errores: o.errores,
    ejercicios: ["b", "m", "a"].flatMap((n) => o.ejercicios[n].map(([q, sol]) => ({ q, sol, nivel: NIV[n] }))),
    glosario: o.glosario,
    situacion: o.situacion,
    familias: o.familias,
    profesores: { saberes: `${PROFE}: ${o.saberes}`, ideas: o.ideas },
    fuentes: [FUENTE_RD, FUENTE_CAT, ...(o.fuentes || [])],
    revisado: "2026-11-14",
  };
  const sec = o.secciones;
  if (sec.reduce((a, b) => a + b, 0) !== T_.bloques.length) throw new Error(`tema: secciones ${sec} no suman ${T_.bloques.length} en «${T_.titulo}»`);
  let k = 0;
  sec.forEach((n, s) => { for (let j = 1; j <= n; j++, k++) T_.bloques[k].html = T_.bloques[k].html.replace(/<h3>/, `<h3>${s + 1}.${j} `); });
  const av = [];
  const w = T_.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 2000 || w > 2900) av.push(`${w} palabras`);
  if (T_.bloques.length < 10 || T_.bloques.length > 14) av.push(`${T_.bloques.length} bloques`);
  if (T_.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  const c = (n) => T_.ejercicios.filter((e) => e.nivel === n).length;
  if (T_.ejercicios.length < 30) av.push(`${T_.ejercicios.length} ejercicios (${c("básico")}/${c("medio")}/${c("avanzado")})`);
  if (T_.quiz.length !== 20 || T_.quiz.some((q) => q.o.length !== 4 || q.a > 3)) av.push(`quiz ${T_.quiz.length}`);
  if (T_.examen.length !== 8 || T_.examen.some((q) => q.o.length !== 4 || q.a > 3)) av.push(`examen ${T_.examen.length}`);
  if (T_.tarjetas.length !== 12) av.push(`tarjetas ${T_.tarjetas.length}`);
  if (T_.ejemplos.length !== 6 || T_.errores.length !== 6) av.push(`ejemplos ${T_.ejemplos.length} errores ${T_.errores.length}`);
  if (T_.glosario.length < 14 || T_.glosario.length > 18) av.push(`glosario ${T_.glosario.length}`);
  if (T_.objetivos.length !== 6) av.push(`objetivos ${T_.objetivos.length}`);
  if (T_.situacion.pasos.length < 4 || T_.situacion.pasos.length > 6 || T_.situacion.evaluacion.length < 3 || T_.situacion.evaluacion.length > 4) av.push("situación");
  const lw = strip(T_.lectura.html).split(" ").length;
  if (lw < 150 || lw > 250) av.push(`lectura ${lw} palabras`);
  if (av.length && process.env.LIBRO_AVISOS !== "0") console.warn(`[libro] ${T_.titulo}: ${av.join(", ")}`);
  return T_;
}

module.exports = { multi, tema, V, L5, L6, F, D, T, fit, marco, celula, tierra, limite, estratos, neurona, cadena, arbol, guia, uid, flecha };
