// Ayudas para los temas de Coro y Técnica Vocal I (1º de Bachillerato, modalidad de Artes).
// Formato «esencial», igual que Análisis Musical I: lo fundamental, claro y ordenado, con dibujos propios en SVG.
const B = require("./_bach1-am");
const { marco, t, ln, rc, ci, el, pa, trazo } = B;

const COL = ["var(--pen)", "var(--red)", "var(--leaf)", "var(--sun)"];
const tema = (o) => ({ ...B.tema(o), materia: "Coro y Técnica Vocal I" });
const nada = 'fill="none"';

// ---------- Dibujos propios de la voz (260 × 180) ----------

// Aparato fonador de perfil, esquemático: pulmones (fuelle), tráquea, laringe (vibrador) y cavidades (resonadores).
function fonador(aria) {
  const et = (x, y, s, c, anchor = "start") => t(x, y, s, { fs: 10, bold: 1, color: c, maxW: 96, anchor });
  return marco(aria,
    // cabeza y cuello
    pa("M70 18 C40 18 30 44 34 66 C36 78 46 84 52 86 L52 104 L88 104 L88 80 C100 76 104 64 102 52 C100 30 92 18 70 18Z", 'fill="var(--card)" stroke="var(--line)" stroke-width="2"') +
    // cavidad nasal y boca
    pa("M44 46 Q62 40 84 46", trazo("var(--pen)", 3)) + pa("M44 64 Q62 72 86 62", trazo("var(--pen)", 3)) +
    // faringe
    ln(66, 66, 66, 92, "var(--pen)", 3) +
    // laringe
    rc(60, 90, 14, 12, 'rx="3" fill="var(--red)"') +
    // tráquea
    ln(67, 102, 67, 128, "var(--muted)", 6) +
    // pulmones
    el(50, 146, 18, 26, 'fill="var(--leaf)" fill-opacity=".45" stroke="var(--leaf)" stroke-width="2"') +
    el(84, 146, 18, 26, 'fill="var(--leaf)" fill-opacity=".45" stroke="var(--leaf)" stroke-width="2"') +
    // diafragma
    pa("M26 172 Q67 156 108 172", trazo("var(--sun)", 3)) +
    // etiquetas
    ln(90, 54, 126, 40, "var(--line)", 1) + et(130, 36, "Resonadores", "var(--pen)") + t(130, 49, "boca, nariz, faringe", { fs: 9, maxW: 120, anchor: "start", color: "var(--muted)" }) +
    ln(76, 96, 126, 86, "var(--line)", 1) + et(130, 82, "Vibrador", "var(--red)") + t(130, 95, "laringe y cuerdas vocales", { fs: 9, maxW: 124, anchor: "start", color: "var(--muted)" }) +
    ln(102, 140, 126, 132, "var(--line)", 1) + et(130, 128, "Fuelle", "var(--leaf)") + t(130, 141, "pulmones y tráquea", { fs: 9, maxW: 120, anchor: "start", color: "var(--muted)" }) +
    ln(108, 170, 126, 166, "var(--line)", 1) + et(130, 164, "Diafragma", "var(--sun)") + t(130, 176, "músculo de la respiración", { fs: 9, maxW: 124, anchor: "start", color: "var(--muted)" }));
}

// Glotis vista desde arriba: abierta (respirar) y cerrada (cantar).
function glotis(aria) {
  const vista = (cx, abierta, titulo, sub, c) => {
    const a = abierta ? 16 : 1.5;
    return el(cx, 86, 46, 56, 'fill="var(--card)" stroke="var(--line)" stroke-width="2"') +
      pa(`M${cx} 42 L${cx - a} 128`, trazo(c, 6)) + pa(`M${cx} 42 L${cx + a} 128`, trazo(c, 6)) +
      (abierta ? pa(`M${cx} 46 L${cx - a + 3} 124 L${cx + a - 3} 124Z`, 'fill="var(--ink)" fill-opacity=".75"') : "") +
      t(cx, 158, titulo, { fs: 11.5, bold: 1, color: c, maxW: 116 }) + t(cx, 172, sub, { fs: 9, maxW: 116, color: "var(--muted)" });
  };
  return marco(aria, t(130, 20, "Las cuerdas vocales vistas desde arriba", { fs: 11, bold: 1, maxW: 236 }) +
    vista(68, true, "Glotis abierta", "respiramos en silencio", "var(--leaf)") +
    vista(192, false, "Glotis cerrada", "el aire las hace vibrar", "var(--red)"));
}

// Respiración: el diafragma baja al inspirar y sube al espirar.
function respiracion(aria) {
  const torso = (cx, ins, titulo, sub, c) => {
    const w = ins ? 46 : 38, y = ins ? 132 : 112;
    return pa(`M${cx - 50} 36 L${cx - 54} 150 L${cx + 54} 150 L${cx + 50} 36Z`, 'fill="var(--card)" stroke="var(--line)" stroke-width="2"') +
      el(cx - 22, 82, w / 2, ins ? 40 : 32, 'fill="var(--leaf)" fill-opacity=".45" stroke="var(--leaf)" stroke-width="2"') +
      el(cx + 22, 82, w / 2, ins ? 40 : 32, 'fill="var(--leaf)" fill-opacity=".45" stroke="var(--leaf)" stroke-width="2"') +
      pa(`M${cx - 50} ${y} Q${cx} ${ins ? y - 6 : y - 26} ${cx + 50} ${y}`, trazo("var(--sun)", 4)) +
      pa(ins ? `M${cx} 22 L${cx} 40 M${cx - 5} 33 L${cx} 40 L${cx + 5} 33` : `M${cx} 40 L${cx} 22 M${cx - 5} 29 L${cx} 22 L${cx + 5} 29`, trazo(c, 2.4)) +
      t(cx, 166, titulo, { fs: 11.5, bold: 1, color: c, maxW: 116 }) + t(cx, 178, sub, { fs: 9, maxW: 116, color: "var(--muted)" });
  };
  return marco(aria, torso(68, true, "Inspiración", "el diafragma baja", "var(--leaf)") + torso(192, false, "Espiración", "el diafragma sube", "var(--red)"));
}

// Disposición del coro mixto en semicírculo frente al director: filas [cuerda, color].
// Las dos primeras cuerdas van delante (izquierda y derecha); las dos últimas, detrás.
function coro(aria, filas = [["Sopranos", "var(--red)"], ["Contraltos", "var(--sun)"], ["Tenores", "var(--leaf)"], ["Bajos", "var(--pen)"]]) {
  const cx = 130, cy = 160;
  let s = filas.map(([nom, c], i) => { const x = 14 + i * 62;
    return ci(x + 6, 18, 6, `fill="${c}"`) + t(x + 15, 22, nom, { fs: 9.5, bold: 1, color: c, maxW: 46, anchor: "start" }); }).join("");
  const arco = (r, izq, der) => {
    const n = 6;
    for (let j = 0; j < 2 * n; j++) {
      const a = Math.PI + (Math.PI * (j + 0.5)) / (2 * n), c = j < n ? izq : der;
      s += ci(cx + r * Math.cos(a), cy + r * 0.78 * Math.sin(a), 7, `fill="${c}" fill-opacity=".85"`);
    }
  };
  arco(112, filas[2][1], filas[3][1]);
  arco(70, filas[0][1], filas[1][1]);
  s += ci(cx, 168, 6, 'fill="var(--ink)"') + t(cx, 156, "director", { fs: 9, maxW: 60, color: "var(--muted)" });
  return marco(aria, s);
}

// Tesituras aproximadas de las voces sobre un teclado de notas (Do2 a Do6).
function tesituras(aria, voces = [["Soprano", 14, 26], ["Contralto", 10, 22], ["Tenor", 7, 19], ["Bajo", 3, 15]]) {
  // posición en notas blancas desde Do2 (0) hasta Do6 (28)
  const x = (k) => 34 + (k / 28) * 214;
  let s = [0, 7, 14, 21, 28].map((k, i) => ln(x(k), 20, x(k), 150, "var(--line)", 1) + t(x(k), 166, `Do${i + 2}`, { fs: 9, maxW: 30, color: "var(--muted)" })).join("");
  voces.forEach(([nom, a, b], i) => {
    const y = 30 + i * 30;
    s += rc(x(a), y, x(b) - x(a), 18, `rx="9" fill="${COL[(i + 1) % 4]}" fill-opacity=".8"`) + t((x(a) + x(b)) / 2, y + 13, nom, { fs: 10, bold: 1, color: "#fff", maxW: x(b) - x(a) - 6 });
  });
  return marco(aria, s + t(130, 178, "más grave  ←  →  más agudo", { fs: 9, maxW: 200, color: "var(--muted)" }));
}

module.exports = { ...B, tema, fonador, glotis, respiracion, coro, tesituras };
