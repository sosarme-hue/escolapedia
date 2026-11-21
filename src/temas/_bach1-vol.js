// Ayudas para los temas de Volumen (1º de Bachillerato, modalidad de Artes).
// Formato «esencial», igual que Cultura Audiovisual: reutiliza su montaje y comprobaciones
// (_bach1-ca) y añade dibujos propios del trabajo en tres dimensiones (260 × 180).
const CA = require("./_bach1-ca");
const { marco, t, ln, rc, ci, el, pa, trazo } = CA;

const tema = (o) => ({ ...CA.tema(o), materia: "Volumen" });

// Un cubo en perspectiva con sus tres dimensiones: alto, ancho y profundidad.
function dimensiones(aria) {
  return marco(aria, `${pa("M70 70 L150 70 L150 150 L70 150Z", 'fill="var(--card)" stroke="var(--ink)" stroke-width="2"')}
    ${pa("M70 70 L110 40 L190 40 L150 70Z", 'fill="var(--sun)" fill-opacity=".35" stroke="var(--ink)" stroke-width="2"')}
    ${pa("M150 70 L190 40 L190 120 L150 150Z", 'fill="var(--pen)" fill-opacity=".25" stroke="var(--ink)" stroke-width="2"')}
    ${ln(58, 70, 58, 150, "var(--red)", 2.4)}${t(34, 112, "alto", { bold: 1, color: "var(--red)", maxW: 40 })}
    ${ln(70, 162, 150, 162, "var(--leaf)", 2.4)}${t(110, 176, "ancho", { bold: 1, color: "var(--leaf)" })}
    ${ln(160, 154, 200, 124, "var(--pen)", 2.4)}${t(222, 150, "profundidad", { bold: 1, color: "var(--pen)", maxW: 70, fs: 10 })}
    ${t(130, 22, "tres dimensiones: se rodea y ocupa espacio", { fs: 10, color: "var(--muted)", maxW: 240 })}`);
}

// Bulto redondo y relieves vistos de perfil, según cuánto sobresalen del fondo.
function relieves(aria) {
  const P = [["bajorrelieve", 8], ["medio relieve", 20], ["altorrelieve", 34], ["bulto redondo", 0]];
  return marco(aria, P.map(([n, s], i) => {
    const x = 14 + i * 62, c = ["var(--pen)", "var(--leaf)", "var(--sun)", "var(--red)"][i];
    const fondo = i < 3 ? rc(x, 40, 8, 100, 'fill="var(--muted)" fill-opacity=".5"') : ln(x - 4, 140, x + 52, 140, "var(--muted)", 2);
    const fig = i < 3 ? el(x + 8, 90, s, 38, `fill="${c}" fill-opacity=".8"`) + rc(x, 40, 8, 100, 'fill="var(--muted)"')
      : el(x + 24, 92, 18, 46, `fill="${c}" fill-opacity=".8"`);
    return `${fondo}${fig}${t(x + 24, 160, n, { fs: 9.5, bold: 1, color: c, maxW: 60 })}`;
  }).join("") + t(130, 24, "de perfil: cuánto sale del fondo", { fs: 10, color: "var(--muted)", maxW: 240 }));
}

// Vista desde arriba: el espectador rodea la obra y descubre puntos de vista distintos.
function puntosVista(aria) {
  const ojos = [[130, 30, "frente"], [222, 92, "lado"], [130, 150, "detrás"], [38, 92, "lado"]];
  return marco(aria, `${ci(130, 92, 50, trazo("var(--line)", 1.5) + ' stroke-dasharray="5 4"')}
    ${pa("M112 76 Q130 58 150 78 Q160 100 140 112 Q118 118 112 76Z", 'fill="var(--pen)" fill-opacity=".7"')}
    ${ojos.map(([x, y, s], i) => { const c = ["var(--red)", "var(--leaf)", "var(--sun)", "var(--leaf)"][i];
      return `${el(x, y, 10, 6, `fill="#fff" stroke="${c}" stroke-width="2"`)}${ci(x, y, 3, `fill="${c}"`)}${t(x, y + (y > 120 ? 18 : y < 40 ? -10 : 20), s, { fs: 9.5, bold: 1, color: c, maxW: 50 })}`; }).join("")}
    ${t(40, 166, "vista en planta", { fs: 9.5, color: "var(--muted)", maxW: 70 })}`);
}

// Técnicas aditivas y sustractivas: añadir piezas frente a quitar material de un bloque.
function sumarQuitar(aria) {
  return marco(aria, `${t(66, 22, "ADITIVA: añadir", { bold: 1, color: "var(--leaf)", maxW: 120 })}${t(194, 22, "SUSTRACTIVA: quitar", { bold: 1, color: "var(--red)", maxW: 120 })}
    ${ln(130, 30, 130, 168, "var(--line)", 1.5)}
    ${ci(50, 70, 14, 'fill="var(--leaf)" fill-opacity=".6"')}${ci(80, 64, 10, 'fill="var(--leaf)" fill-opacity=".6"')}${el(64, 110, 30, 22, 'fill="var(--leaf)" fill-opacity=".8"')}
    ${pa("M84 82 l-8 14 M48 88 l8 10", trazo("var(--ink)", 1.6))}${t(66, 152, "barro, cera, piezas", { fs: 9.5, maxW: 110 })}
    ${rc(160, 48, 66, 86, 'fill="var(--muted)" fill-opacity=".25" stroke="var(--muted)" stroke-dasharray="4 3"')}
    ${el(193, 96, 22, 36, 'fill="var(--red)" fill-opacity=".75"')}${pa("M226 50 l12 -10 M232 60 l14 -4", trazo("var(--ink)", 1.6))}
    ${t(194, 152, "piedra, madera", { fs: 9.5, maxW: 110 })}`);
}

// Molde de dos piezas: original, molde abierto y copia.
function molde(aria) {
  const fig = (x, c) => `${ci(x, 76, 10, `fill="${c}"`)}${el(x, 108, 14, 22, `fill="${c}"`)}`;
  return marco(aria, `${fig(40, "var(--pen)")}${t(40, 150, "1 original", { fs: 10, bold: 1, maxW: 60 })}
    ${pa("M64 96 h12 l-4 -4 m4 4 l-4 4", trazo("var(--muted)", 1.8))}
    ${rc(86, 56, 36, 80, 'fill="var(--sun)" fill-opacity=".45" stroke="var(--ink)" rx="4"')}${rc(126, 56, 36, 80, 'fill="var(--sun)" fill-opacity=".45" stroke="var(--ink)" rx="4"')}
    ${ci(122, 76, 10, 'fill="var(--paper)"')}${el(122, 108, 14, 22, 'fill="var(--paper)"')}${ln(124, 52, 124, 140, "var(--red)", 1.5, 'stroke-dasharray="3 3"')}
    ${t(124, 150, "2 molde (hueco)", { fs: 10, bold: 1, maxW: 90 })}
    ${pa("M172 96 h12 l-4 -4 m4 4 l-4 4", trazo("var(--muted)", 1.8))}
    ${fig(214, "var(--leaf)")}${t(214, 150, "3 copia", { fs: 10, bold: 1, maxW: 60 })}
    ${t(130, 30, "positivo → negativo → positivo", { fs: 10, color: "var(--muted)", maxW: 240 })}`);
}

module.exports = { ...CA, tema, dimensiones, relieves, puntosVista, sumarQuitar, molde };
