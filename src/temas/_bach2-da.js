// Ayudas para Dibujo Artístico II (2º de Bachillerato, modalidad de Artes).
// Formato más ligero que el «nivel libro»: 6 a 8 apartados con dibujo, unas 900 a 1.500 palabras,
// 3 ejemplos, 4 errores, 10 ejercicios por niveles, 10 preguntas, 4 de examen y 8 tarjetas.
// Reutiliza los dibujos de Dibujo Artístico I (_bach1L41) y las plantillas de _eso4L11.
const B = require("./_bach1L41");
const { marco, t, ln, rc, ci, el, pa, trazo, gris } = B;
const { mapa } = require("./_util");

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"];
const NIV = { b: "básico", m: "medio", a: "avanzado" };
const strip = (s) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const RD = { t: "Real Decreto 243/2022, enseñanzas mínimas del Bachillerato: Dibujo Artístico II (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" };

function tema(o) {
  const T = {
    materia: "Dibujo Artístico II",
    curso: "2-bachillerato",
    titulo: o.titulo,
    minutos: o.minutos || 75,
    objetivos: o.objetivos,
    claves: o.claves,
    pregunta: o.pregunta,
    ...(o.lectura ? { lectura: o.lectura } : {}),
    bloques: o.bloques.map((b, i) => ({ html: `<h3>${i + 1}. ${b.h}</h3>${b.html}`, svg: b.svg, ...(b.video ? { video: { megusta: 0, ...b.video } } : {}) })),
    figura: { titulo: o.figura.titulo, svg: B.figura(o.figura.titulo, o.figura.items) },
    video: { megusta: 0, ...o.video },
    quiz: o.quiz.map(([q, op, a, e]) => ({ q, o: op, a, e })),
    examen: o.examen.map(([q, op, a, e]) => ({ q, o: op, a, e })),
    feynman: o.feynman,
    mapa: mapa(o.mapa[0], "var(--pen)", o.mapa[1].map(([x, d], i) => [x, d, COL[i]]), o.mapa[2] || 250),
    tarjetas: o.tarjetas,
    ejemplos: o.ejemplos.map(([enunciado, pasos, resultado]) => ({ enunciado, pasos, resultado })),
    errores: o.errores.map((e) => (Array.isArray(e) ? `${e[0]} <i>${e[1]}</i>` : e)),
    ejercicios: ["b", "m", "a"].flatMap((n) => o.ejercicios[n].map(([q, sol]) => ({ q, sol, nivel: NIV[n] }))),
    glosario: o.glosario,
    situacion: o.situacion,
    familias: o.familias,
    profesores: { saberes: `${o.saberes} (RD 243/2022, Dibujo Artístico II, saberes básicos; las comunidades autónomas los concretan en su currículo).`, ideas: o.ideas },
    fuentes: [RD, ...(o.fuentes || [])],
    revisado: "2026-11-21",
  };
  const av = [];
  const w = T.bloques.reduce((a, b) => a + strip(b.html).split(" ").length, 0);
  if (w < 600 || w > 1600) av.push(`${w} palabras`);
  if (T.bloques.length < 6 || T.bloques.length > 9) av.push(`${T.bloques.length} bloques`);
  if (T.bloques.some((b) => !b.svg)) av.push("bloques sin dibujo");
  if (T.ejercicios.length < 10 || T.ejercicios.length > 12) av.push(`${T.ejercicios.length} ejercicios`);
  if (T.quiz.length !== 10 || T.quiz.some((q) => q.o.length !== 4 || q.a > 3)) av.push(`quiz ${T.quiz.length}`);
  if (T.examen.length !== 4 || T.examen.some((q) => q.o.length !== 4 || q.a > 3)) av.push(`examen ${T.examen.length}`);
  if (T.tarjetas.length !== 8) av.push(`tarjetas ${T.tarjetas.length}`);
  if (T.ejemplos.length !== 3 || T.errores.length !== 4) av.push(`ejemplos ${T.ejemplos.length} errores ${T.errores.length}`);
  if (T.glosario.length < 8 || T.glosario.length > 10) av.push(`glosario ${T.glosario.length}`);
  if (av.length) console.warn(`[da2] ${T.titulo}: ${av.join(", ")}`);
  return T;
}

// ---------- Dibujos propios (260 × 180) ----------

// Perspectiva cónica con 1 o 2 puntos de fuga: línea de horizonte, puntos y un cubo.
function conica(aria, n = 1) {
  const hz = 64;
  if (n === 1) {
    const F = [130, hz];
    const q = [[86, 104], [174, 104], [174, 160], [86, 160]];
    const k = 0.45, back = q.map(([x, y]) => [x + (F[0] - x) * k, y + (F[1] - y) * k]);
    return marco(aria, `${ln(8, hz, 252, hz, "var(--pen)", 1.6)}${t(244, hz - 6, "LH", { anchor: "end", bold: 1, color: "var(--pen)" })}${ci(F[0], F[1], 4.5, 'fill="var(--red)"')}${t(130, hz - 9, "punto de fuga", { color: "var(--red)", bold: 1 })}
    ${q.map(([x, y]) => ln(x, y, F[0], F[1], "var(--muted)", 1, 'stroke-dasharray="4 3"')).join("")}
    ${pa(`M${back.map((p) => p.map((v) => v.toFixed(1)).join(" ")).join(" L")}Z`, trazo("var(--muted)", 1.4))}
    ${q.map(([x, y], i) => ln(x, y, back[i][0].toFixed(1), back[i][1].toFixed(1), "var(--ink)", 2)).join("")}
    ${rc(86, 104, 88, 56, 'fill="var(--card)" fill-opacity=".85" stroke="var(--ink)" stroke-width="2.2"')}${t(130, 176, "cara frontal paralela al cuadro", { color: "var(--muted)", maxW: 220 })}`);
  }
  const F1 = [14, hz], F2 = [246, hz], A = [120, 96], Bp = [120, 160];
  const p1 = (p, k) => [p[0] + (F1[0] - p[0]) * k, p[1] + (F1[1] - p[1]) * k], p2 = (p, k) => [p[0] + (F2[0] - p[0]) * k, p[1] + (F2[1] - p[1]) * k];
  const a1 = p1(A, 0.42), b1 = p1(Bp, 0.42), a2 = p2(A, 0.38), b2 = p2(Bp, 0.38);
  const f = (p) => p.map((v) => v.toFixed(1)).join(" ");
  // Cara superior: cruce de a1→F2 con a2→F1.
  const cruce = (P1, P2, P3, P4) => { const d = (P1[0] - P2[0]) * (P3[1] - P4[1]) - (P1[1] - P2[1]) * (P3[0] - P4[0]); const u = ((P1[0] - P3[0]) * (P3[1] - P4[1]) - (P1[1] - P3[1]) * (P3[0] - P4[0])) / d; return [P1[0] + u * (P2[0] - P1[0]), P1[1] + u * (P2[1] - P1[1])]; };
  const top = cruce(a1, F2, a2, F1);
  return marco(aria, `${ln(4, hz, 256, hz, "var(--pen)", 1.6)}${ci(F1[0], F1[1], 4.5, 'fill="var(--red)"')}${ci(F2[0], F2[1], 4.5, 'fill="var(--red)"')}${t(24, hz - 9, "F1", { bold: 1, color: "var(--red)" })}${t(236, hz - 9, "F2", { bold: 1, color: "var(--red)" })}
    ${[A, Bp].map((p) => ln(p[0], p[1], F1[0], F1[1], "var(--muted)", 1, 'stroke-dasharray="4 3"') + ln(p[0], p[1], F2[0], F2[1], "var(--muted)", 1, 'stroke-dasharray="4 3"')).join("")}
    ${pa(`M${f(A)} L${f(a1)} L${f(b1)} L${f(Bp)}Z`, 'fill="var(--card)" stroke="var(--ink)" stroke-width="2.2"')}${pa(`M${f(A)} L${f(a2)} L${f(b2)} L${f(Bp)}Z`, 'fill="var(--paper)" stroke="var(--ink)" stroke-width="2.2"')}${pa(`M${f(A)} L${f(a1)} L${f(top)} L${f(a2)}Z`, 'fill="var(--sun)" fill-opacity=".35" stroke="var(--ink)" stroke-width="2.2"')}
    ${t(130, 30, "LH a la altura de los ojos", { color: "var(--pen)", maxW: 200 })}${t(130, 176, "arista vertical más cercana", { color: "var(--muted)", maxW: 200 })}`);
}

// Claves tonales: tres franjas (clave alta, media y baja).
function claves(aria) {
  const fila = (y, vals, nom) => vals.map((v, i) => rc(70 + i * 30, y, 30, 34, `fill="${gris(v)}" stroke="var(--line)"`)).join("") + t(62, y + 21, nom, { anchor: "end", bold: 1, maxW: 60 });
  return marco(aria, fila(18, [1, 0.95, 0.88, 0.8, 0.7, 0.55], "clave alta") + fila(72, [0.8, 0.68, 0.55, 0.45, 0.35, 0.25], "clave media") + fila(126, [0.45, 0.3, 0.2, 0.12, 0.06, 0.02], "clave baja") +
    t(160, 64, "claros: luz, calma", { color: "var(--muted)", maxW: 180 }) + t(160, 118, "grises: equilibrio", { color: "var(--muted)", maxW: 180 }) + t(160, 172, "oscuros: drama, misterio", { color: "var(--muted)", maxW: 180 }));
}

// Perspectiva atmosférica: montañas que se aclaran y azulean con la distancia.
function atmosferica(aria) {
  const capas = [["M0 92 L40 60 L80 84 L130 50 L180 80 L220 58 L260 76 V180 H0Z", "#b9c9dc"], ["M0 118 L50 86 L100 110 L150 80 L210 108 L260 90 V180 H0Z", "#7f97b3"], ["M0 146 L60 112 L120 140 L180 108 L260 136 V180 H0Z", "#45607e"], ["M0 180 V160 L70 140 L140 162 L200 146 L260 158 V180Z", "#1d2b3a"]];
  return marco(aria, `${rc(0, 0, 260, 180, 'fill="#e7eef6" rx="14"')}${capas.map(([d, c]) => pa(d, `fill="${c}"`)).join("")}${t(250, 40, "lejos: claro, azulado", { anchor: "end", maxW: 120, color: "#1d2b3a", bold: 1 })}${t(250, 174, "cerca: oscuro, nítido", { anchor: "end", maxW: 120, color: "#fff", bold: 1 })}`);
}

// Muestras de textura gráfica: punteado, rayado, tramado y frotado.
function texturas(aria) {
  const caja = (x, y, nom, cont) => `${rc(x, y, 112, 62, 'fill="var(--card)" stroke="var(--line)" rx="6"')}${cont}${t(x + 56, y + 76, nom, { bold: 1, maxW: 110 })}`;
  const pts = []; for (let i = 0; i < 70; i++) pts.push(ci((20 + ((i * 37) % 96)).toFixed(0), (16 + ((i * 53) % 54)).toFixed(0), 1.4, 'fill="var(--ink)"'));
  const ray = []; for (let i = 0; i < 12; i++) ray.push(ln(140 + i * 8, 70, 150 + i * 8, 16, "var(--ink)", 1.2));
  const tra = []; for (let i = 0; i < 9; i++) { tra.push(ln(20 + i * 11, 156, 30 + i * 11, 100, "var(--ink)", 1)); tra.push(ln(18, 104 + i * 6, 120, 104 + i * 6, "var(--ink)", 0.8)); }
  const fro = []; for (let i = 0; i < 8; i++) fro.push(pa(`M140 ${104 + i * 7} Q170 ${98 + i * 7} 196 ${106 + i * 7} T246 ${104 + i * 7}`, trazo("var(--muted)", 2.4)));
  return marco(aria, caja(14, 10, "punteado", pts.join("")) + caja(134, 10, "rayado", ray.join("")) + caja(14, 98, "tramado", tra.join("")) + caja(134, 98, "frotado (frottage)", fro.join("")));
}

// Escorzo: un brazo visto de lado y en escorzo (las formas se acortan y se solapan).
function escorzo(aria) {
  return marco(aria, `${ci(46, 70, 14, trazo("var(--ink)", 2))}${pa("M46 84 V140", trazo("var(--ink)", 2.2))}${pa("M46 96 L104 96 L150 96", trazo("var(--pen)", 6))}${ci(156, 96, 7, 'fill="var(--pen)"')}${t(98, 82, "de lado: largo", { color: "var(--pen)", bold: 1, maxW: 120 })}
    ${ci(200, 70, 14, trazo("var(--ink)", 2))}${pa("M200 84 V140", trazo("var(--ink)", 2.2))}${el(214, 100, 10, 9, 'fill="var(--red)" fill-opacity=".35" stroke="var(--red)" stroke-width="2"')}${el(224, 102, 13, 12, 'fill="var(--red)" fill-opacity=".55" stroke="var(--red)" stroke-width="2"')}${ci(234, 104, 9, 'fill="var(--red)"')}${t(214, 136, "en escorzo:", { color: "var(--red)", bold: 1, maxW: 80 })}${t(214, 150, "corto y solapado", { color: "var(--red)", maxW: 90 })}
    ${t(130, 172, "mismo brazo, distinto punto de vista", { color: "var(--muted)", maxW: 230 })}`);
}

// De la figuración a la abstracción: un árbol en cuatro pasos (al estilo de las series de Mondrian).
function abstraccion(aria) {
  const x0 = [8, 72, 136, 200];
  const a = `${pa("M40 150 V100", trazo("#6b4a2b", 4))}${ci(40, 78, 26, 'fill="var(--leaf)"')}${ci(28, 92, 14, 'fill="var(--leaf)"')}${ci(54, 90, 16, 'fill="var(--leaf)"')}`;
  const b = `${pa("M104 150 V96 M104 112 L84 86 M104 104 L126 80 M104 96 L100 64", trazo("var(--ink)", 2.4))}`;
  const c = `${pa("M168 150 V96 M150 110 Q168 70 186 110 M146 94 Q168 52 190 94", trazo("var(--ink)", 2))}`;
  const d = `${rc(206, 60, 22, 40, 'fill="var(--red)"')}${rc(232, 60, 18, 18, 'fill="var(--sun)"')}${rc(232, 82, 18, 68, 'fill="var(--pen)"')}${rc(206, 104, 22, 46, 'fill="none" stroke="var(--ink)" stroke-width="3"')}`;
  return marco(aria, x0.map((x) => rc(x, 48, 56, 110, 'fill="var(--card)" stroke="var(--line)" rx="4"')).join("") + a + b + c + d +
    [["1 natural", 36], ["2 estructura", 100], ["3 ritmo", 164], ["4 abstracto", 228]].map(([s, x]) => t(x, 172, s, { fs: 9.5, maxW: 60, bold: 1 })).join("") + t(130, 30, "simplificar la forma paso a paso", { bold: 1, maxW: 240 }));
}

module.exports = { ...B, tema, conica, claves, atmosferica, texturas, escorzo, abstraccion, RD };
