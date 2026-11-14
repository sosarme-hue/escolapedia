// Ayudas para Física y Química de 1º de Bachillerato (nivel libro, lote 2).
// Reutiliza los dibujos SVG de 260 × 180 de 4º ESO y añade vídeos, mapa, figura y currículo de Bachillerato.
const H = require("./_eso4L5");
const { mapa, T, marco, fit } = H;

// Vídeos elegidos con tools/videos.py (sin repetir ids de otros temas ni ramas). El título lo pone cada tema.
const VID = {
  "apl-a": { id: "DgOq1XEIErM", canal: "Ruben Sebastian", vistas: 1266154 },
  "apl-b": { id: "ap8HJFU92Fg", canal: "Vitual", vistas: 271403 },
  "apl-c": { id: "I0A5_-JpAQ8", canal: "FiAsMat", vistas: 98743 },
  "apl-d": { id: "6ixpojuaFOE", canal: "Física para todos", vistas: 1875606 },
  "atom-a": { id: "36hUlXVF9So", canal: "Amigos de la Química", vistas: 707699 },
  "atom-b": { id: "_HF0BXkB2Bc", canal: "Academia Internet", vistas: 613779 },
  "atom-c": { id: "HLYQJwQlyWI", canal: "EMMANUEL ASESORÍAS", vistas: 2652299 },
  "carb-a": { id: "ectaKaSl254", canal: "Breaking Vlad", vistas: 667334 },
  "carb-b": { id: "f6e0LXUK6E8", canal: "profesor10demates", vistas: 242872 },
  "carb-c": { id: "GrPqU2dzk9Y", canal: "Breaking Vlad", vistas: 267840 },
  "cient-a": { id: "KoZ7EhjynOA", canal: "Matemáticas profe Alex", vistas: 2394521 },
  "cient-c": { id: "QiS_IGEF3rU", canal: "julioprofe", vistas: 356994 },
  "cient-b": { id: "5cmpf8FNX2c", canal: "unicoos", vistas: 385009 },
  "cine-a": { id: "H-oTHKik2Yo", canal: "Clases Particulares en Ávila", vistas: 213273 },
  "cine-b": { id: "zaGn6Tt61aA", canal: "Salvador FI Facultad de Ingeniería", vistas: 235701 },
  "cine-c": { id: "4p1y8w5xXUs", canal: "Tutor Expertos", vistas: 760751 },
  "circ-a": { id: "SJPWcr0IchU", canal: "julioprofe", vistas: 769519 },
  "circ-b": { id: "vFMHr1Jg8IA", canal: "Profesor Sergio Llanos", vistas: 1187534 },
  "circ-c": { id: "Ya0nQt4exBQ", canal: "unicoos", vistas: 1160737 },
  "din-a": { id: "_X-BTbwj3xU", canal: "QuantumFracture", vistas: 2003946 },
  "din-b": { id: "-ZJmQ0RCXto", canal: "Profesor Sergio Llanos", vistas: 548090 },
  "din-c": { id: "kGK5QQI56rQ", canal: "Profesor Sergio Llanos", vistas: 323930 },
  "elec-a": { id: "UgRJEdb-CoI", canal: "IngE Darwin", vistas: 2679952 },
  "elec-b": { id: "zyludObkGEk", canal: "Es Ciencia", vistas: 176336 },
  "elec-c": { id: "zuK7s_Tucsk", canal: "traful", vistas: 279113 },
  "form-a": { id: "3TmTDYyQBjo", canal: "EMMANUEL ASESORÍAS", vistas: 1887041 },
  "form-b": { id: "1FNnZrMS1lI", canal: "Amigos de la Química", vistas: 1604744 },
  "form-c": { id: "cSkoSvomXXY", canal: "Amigos de la Química", vistas: 1150136 },
  "gas-a": { id: "8fSeg4I1ucQ", canal: "EMMANUEL ASESORÍAS", vistas: 982927 },
  "gas-b": { id: "rMm1vfdorwE", canal: "seletube", vistas: 202676 },
  "gas-c": { id: "SRoyZ5Lc4fc", canal: "ARRIBA LA CIENCIA", vistas: 1704552 },
  "gas-d": { id: "U0uF4n_hGfI", canal: "AntonioProfe", vistas: 373057 },
  "grav-a": { id: "lln0C2--xHk", canal: "QuantumFracture", vistas: 1305851 },
  "grav-b": { id: "YxK7UTlm1Ao", canal: "QuantumFracture", vistas: 959549 },
  "grav-c": { id: "oLhY3xHPBEE", canal: "profesor10demates", vistas: 132559 },
  "reac-a": { id: "BJCY3j0SDXw", canal: "ARRIBA LA CIENCIA", vistas: 2008663 },
  "reac-b": { id: "zE2KJJ6T2Nk", canal: "Academia Internet", vistas: 454601 },
  "reac-c": { id: "DnlvakAblHY", canal: "Profesor Particular Puebla", vistas: 2022111 },
  "termo-a": { id: "Bvfn6eUhUAc", canal: "QuantumFracture", vistas: 4985760 },
  "termo-b": { id: "2ixEf2zpR8E", canal: "The Organic Chemistry Tutor", vistas: 1964969 },
  "termo-c": { id: "dd-t__GibyA", canal: "Amigos de la Química", vistas: 1182777 },
  "trab-a": { id: "tB5-NPxqueQ", canal: "KhanAcademyEspañol", vistas: 652720 },
  "trab-b": { id: "yHGayMfRpKI", canal: "Matemóvil", vistas: 1171939 },
  "trab-c": { id: "aw9kZdZQcfA", canal: "FISICA EN SEGUNDOS", vistas: 140052 },
};
const V = (k, titulo, busqueda) => ({ ...VID[k], titulo, megusta: 0, ...(busqueda ? { busqueda } : {}) });

// Mapa final de 4 ramas: [[título, detalle, color], ...].
const mapaB = (centro, ramas) => mapa(centro, "var(--pen)", ramas);

// Figura grande (640 × 220) con 3 o 4 tarjetas: [[título, línea 1, línea 2], ...].
function figura(titulo, aria, cajas, c = "var(--pen)") {
  const n = cajas.length, w = (600 - (n - 1) * 14) / n;
  const esc = (s) => String(s).replace(/&(?!\w+;|#\d+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const tx = (x, y, t, fs, b, col = "var(--ink)") => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${fs}"${b ? ' font-weight="700"' : ""} fill="${col}" font-family="Atkinson Hyperlegible, sans-serif">${esc(t)}</text>`;
  const f = (t, max, ancho) => Math.max(9, Math.min(max, ancho / (String(t).length * 0.56))).toFixed(1);
  return { titulo, svg: `<svg viewBox="0 0 640 220" role="img" aria-label="${esc(aria)}">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${cajas.map(([t, a, b], i) => { const x = 20 + i * (w + 14), cx = x + w / 2; return `<rect x="${x}" y="20" width="${w}" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
      <rect x="${x}" y="20" width="${w}" height="46" rx="14" fill="${c}"/>${tx(cx, 50, t, f(t, 17, w - 16), true, "#fff")}
      ${tx(cx, 112, a, f(a, 16, w - 18), true)}${b ? tx(cx, 150, b, f(b, 14, w - 18), false, "var(--muted)") : ""}`; }).join("")}
    </svg>` };
}

const PROFE = "Saberes básicos de Física y Química de 1º de Bachillerato (RD 243/2022, BOE-A-2022-5521)";
const FUENTE_RD = { t: "Real Decreto 243/2022, estructura y enseñanzas mínimas del Bachillerato (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521" };
const FUENTE_CAT = { t: "Decret 171/2022, d'ordenació dels ensenyaments del batxillerat (DOGC)", url: "https://portaldogc.gencat.cat/utilsEADOP/PDF/8762/1928552.pdf" };

module.exports = { ...H, V, mapaB, figura, PROFE, FUENTE_RD, FUENTE_CAT };
