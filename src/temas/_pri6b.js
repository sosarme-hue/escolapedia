// Ayudas del lote B de 6º de Primaria: Ciencias de la Naturaleza, Ciencias Sociales y Educación Física.
// Cada tema va ya ampliado (README, «Tema ampliado»). Dibujos propios en SVG de 260×180 que ajustan solos el tamaño de letra.
const { t, fl, cj, cj2, rejilla, et, COL, cabe, BG, tabla, wiki, mapa } = require("./_eso1a");
const { nino, suelo, pelota, arbol, sol, nube, flor, corazon, estrella, casa, pez, pajaro, tick, equis } = require("./_pri1-dib");

const C = "6-primaria";
const REV = "2026-11-12";

const svg = (label, body) => `<svg viewBox="0 0 260 180" role="img" aria-label="${label}">${BG}${body}</svg>`;
// Título de la tarjeta.
const tit = (s, c = "var(--pen)") => et(130, 22, s, 236, { size: 13, color: c });
// Texto suelto que cabe en un ancho w (letra normal).
const tx = (x, y, s, w, o = {}) => et(x, y, s, w, { size: 10.5, weight: 400, ...o });

// Flujo horizontal de cajas con flechas: items = [[texto, color], ...].
function flujo(items, y = 72, h = 40, x0 = 10, ancho = 240) {
  const n = items.length, gap = 14, w = (ancho - gap * (n - 1)) / n;
  return items.map(([s, c], i) => {
    const x = x0 + i * (w + gap);
    return cj(+x.toFixed(1), y, +w.toFixed(1), h, s, c) + (i < n - 1 ? fl(+(x + w + 1).toFixed(1), y + h / 2, +(x + w + gap - 1).toFixed(1), y + h / 2, "var(--muted)", 2) : "");
  }).join("");
}
// Flujo vertical: items = [[texto, color], ...] en una columna de ancho w centrada en cx.
function columna(items, cx = 130, w = 180, y0 = 34, h = 24, gap = 10) {
  return items.map(([s, c], i) => {
    const y = y0 + i * (h + gap);
    return cj(cx - w / 2, y, w, h, s, c) + (i < items.length - 1 ? fl(cx, y + h + 1, cx, y + h + gap - 1, "var(--muted)", 2) : "");
  }).join("");
}
// Filas con punto de color, etiqueta en negrita y explicación: items = [[etiqueta, texto, color], ...].
function filas(items, y0 = 44, dy = 0, { x = 20, wa = 78, wb = 140, dos = false } = {}) {
  const paso = dy || Math.min(30, (170 - y0) / items.length);
  return items.map(([a, b, c], i) => {
    const y = y0 + i * paso;
    if (dos) return `<circle cx="${x}" cy="${y - 4}" r="5" fill="${c}"/>${et(x + 10, y, a, wa, { size: 11, color: c, anchor: "start" })}${tx(x + 10, y + 14, b, wb, { anchor: "start" })}`;
    return `<circle cx="${x}" cy="${y - 4}" r="5" fill="${c}"/>${et(x + 10, y, a, wa, { size: 11, color: c, anchor: "start" })}${tx(x + wa + 14, y, b, wb, { anchor: "start" })}`;
  }).join("");
}
// Gráfico de barras: data = [[etiqueta, valor, color], ...].
function barras(data, { max, unidad = "", y0 = 146, alto = 100, x0 = 20, ancho = 220 } = {}) {
  const m = max || Math.max(...data.map((d) => d[1]));
  const n = data.length, w = ancho / n;
  return `<path d="M${x0} ${y0} H${x0 + ancho}" stroke="var(--line)" stroke-width="2"/>` + data.map(([s, v, c], i) => {
    const h = (v / m) * alto, x = x0 + i * w + w * 0.18, bw = w * 0.64;
    return `<rect x="${x.toFixed(1)}" y="${(y0 - h).toFixed(1)}" width="${bw.toFixed(1)}" height="${h.toFixed(1)}" rx="3" fill="${c}"/>${et(x + bw / 2, y0 - h - 4, `${String(v).replace(".", ",")}${unidad}`, w - 2, { size: 10, color: c })}${et(x + bw / 2, y0 + 14, s, w - 2, { size: 9.5, weight: 400 })}`;
  }).join("");
}
// Línea del tiempo: ev = [[año, texto, color], ...], etiquetas alternadas arriba y abajo.
function linea(ev, { y = 96, x0 = 22, x1 = 238 } = {}) {
  const n = ev.length, paso = (x1 - x0) / Math.max(1, n - 1);
  const w = Math.min(120, paso * 1.9);
  return fl(x0 - 10, y, x1 + 14, y, "var(--ink)", 2.5) + ev.map(([a, s, c], i) => {
    const x = x0 + i * paso, arriba = i % 2 === 0;
    const xa = Math.max(w / 2 + 4, Math.min(256 - w / 2, x));
    return `<circle cx="${x.toFixed(1)}" cy="${y}" r="6" fill="${c}"/><path d="M${x.toFixed(1)} ${arriba ? y - 8 : y + 8} V${arriba ? y - 22 : y + 22}" stroke="${c}" stroke-width="1.5"/>${et(xa, arriba ? y - 42 : y + 36, a, w, { size: 12, color: c })}${tx(xa, arriba ? y - 28 : y + 50, s, w)}`;
  }).join("");
}
// Anillos concéntricos (de dentro afuera): items = [[texto, color], ...].
function anillos(items, cx = 130, cy = 100, r0 = 14, paso = 13) {
  const n = items.length;
  let out = "";
  for (let i = n - 1; i >= 0; i--) out += `<circle cx="${cx}" cy="${cy}" r="${r0 + i * paso}" fill="${items[i][1]}" fill-opacity=".18" stroke="${items[i][1]}" stroke-width="2"/>`;
  return out;
}
// Ciclo: items alrededor de un círculo con flechas curvas.
function ciclo(items, cx = 130, cy = 98, r = 58, w = 86) {
  const n = items.length;
  const pos = items.map((_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return [cx + r * 1.25 * Math.cos(a), cy + r * Math.sin(a)]; });
  let out = "";
  pos.forEach(([x, y], i) => {
    const [x2, y2] = pos[(i + 1) % n];
    const mx = (x + x2) / 2, my = (y + y2) / 2;
    const dx = mx - cx, dy = my - cy, d = Math.hypot(dx, dy) || 1;
    out += fl(+(mx - dx / d * 6 - (x2 - x) * 0.12).toFixed(1), +(my - dy / d * 6 - (y2 - y) * 0.12).toFixed(1), +(mx - dx / d * 6 + (x2 - x) * 0.12).toFixed(1), +(my - dy / d * 6 + (y2 - y) * 0.12).toFixed(1), "var(--muted)", 2);
  });
  pos.forEach(([x, y], i) => { out += cj(+(x - w / 2).toFixed(1), +(y - 13).toFixed(1), w, 26, items[i][0], items[i][1], { op: 0.2 }); });
  return out;
}
// Rejilla de fichas dentro de una tarjeta: items = [[título, texto, color], ...].
function fichas(items, cols = 2, y0 = 34, alto = 0) {
  const filasN = Math.ceil(items.length / cols), gap = 8, w = (240 - gap * (cols - 1)) / cols;
  const h = alto || (176 - y0 - gap * (filasN - 1) - 4) / filasN;
  return items.map(([a, b, c], i) => {
    const x = 10 + (i % cols) * (w + gap), y = y0 + Math.floor(i / cols) * (h + gap);
    return cj2(+x.toFixed(1), +y.toFixed(1), +w.toFixed(1), +h.toFixed(1), a, b, c);
  }).join("");
}

// Vídeos elegidos con tools/videos.py (ids reales, sin repetir con otros cursos).
const VIDEOS = {
  "D1oxOSWvzGE": ["Educación Física Coordinación Fácil", "Educación Física Para Todos", 986009],
  "J0iQZ9MXnOE": ["AUSTRIAS: DINASTÍA DE LOS AUSTRIAS", "History of Spain", 251587],
  "K1hL5eeTBM0": ["Transición, Europa y Actualidad [1975-2020] HISTORIA de ESPAÑA", "A toda leche", 330850],
  "lXoLoeSwivI": ["El Sistema Nervioso | Videos Educativos para Niños", "Happy Learning Español", 1499194],
  "5SytABu6lKY": ["EL APARATO LOCOMOTOR | Vídeos Educativos para Niños", "Happy Learning Español", 4010823],
  "X4rsSlMcjXY": ["El cerebro para niños - ¿Qué es y cómo funciona?", "Smile and Learn - Español", 4427189],
  "mFrsphXEQAc": ["EL APARATO REPRODUCTOR | Videos Educativos para Niños", "Happy Learning Español", 1831629],
  "QXUudxm0glw": ["¿Qué es la Pubertad? [Fácil y Rápido] | BIOLOGÍA |", "A Cierta Ciencia", 763121],
  "YWGOThGG8-Y": ["HÁBITOS SALUDABLES para adolescentes y niños Aprende a cuidarte", "Smile and Learn - Español", 512190],
  "FaLmwmN1MP0": ["UNA DIETA SALUDABLE | Vídeos Educativos para Niños", "Happy Learning Español", 464045],
  "UroGSIOyUdI": ["¿QUÉ ES LA SALUD?| Vídeos Educativos para Niños", "Happy Learning Español", 362575],
  "6MQ3DLTK2aA": ["LA CLASIFICACIÓN DE LOS SERES VIVOS| Vídeos Educativos para Niños", "Happy Learning Español", 997068],
  "GS34snY_P4o": ["Los 5 REINOS de la NATURALEZA y sus Características (para Niños)", "EcologíaVerde", 996541],
  "NOpzysr0PJQ": ["Animales Invertebrados | Videos Educativos para Niños de Primaria | Happy Learning", "Happy Learning Español", 11366685],
  "buPiax-DWbM": ["Vertebrados | Camaleón", "CNTV Infantil", 5201318],
  "tPFGdTE_nas": ["¿Cómo es un Ecosistema? | Videos Educativos para Niños", "FlexFlix Kids en Español", 2617969],
  "XdptFwOur6M": ["La Cadena Trófica | Videos Educativos para Niños", "Happy Learning Español", 659510],
  "90NDETtorCs": ["Biodiversidad | Planeta Darwin | Ciencias naturales", "CNTV Infantil", 379571],
  "kxNL9ZoQqCY": ["La Materia y sus propiedades | Aula chachi - Vídeos educativos para niños", "Aula chachi", 700728],
  "huVPSc9X61E": ["LOS ESTADOS DE LA MATERIA Y SUS CAMBIOS. Sólido, líquido y gaseoso | Vídeos Educativos para niños", "Happy Learning Español", 6609578],
  "gtgZPr3QhvA": ["Mezclas homogéneas y heterogéneas | Educación Primaria", "Escuela de Aprendices", 1085040],
  "21b34nAF9-Y": ["Cambios físicos y químicos de la materia con ejemplos", "Profe Marilin", 343919],
  "zdt0dkWjapo": ["FUENTES DE ENERGÍA", "Elesapiens", 711274],
  "4eEri5RivV8": ["Las energías renovables - Tipos de energía para niños", "Smile and Learn - Español", 1132369],
  "dzcG5a5kd2M": ["La Electricidad | Videos Educativos Aula365", "FlexFlix Kids en Español", 2675747],
  "r6SWnW0EUDI": ["ELECTRICIDAD para niños Electricidad estática y dinámica Circuitos eléctricos Episodio 2", "Smile and Learn - Español", 491022],
  "7afwV_aJcjk": ["¿Cómo funcionan los imanes?", "CuriosaMente", 1940010],
  "Qoyb3eOZmtk": ["MÁQUINAS y ROBOTS para niños ¿Qué son y en qué se diferencian?", "Smile and Learn - Español", 100793],
  "fyf0DvvuCkY": ["Tipos de Máquinas | Máquinas Simples y Compuestas | Aula chachi - Vídeos educativos para niños", "Aula chachi", 348830],
  "KKJIQYpR8GY": ["Scratch y programación para niños de 6 a 14 años", "Enseñalia", 173011],
  "8efFLVVlA3E": ["Partes de un robot", "Krismar Educación", 177164],
  "VKVEQJkvP4s": ["El RELIEVE de ESPAÑA para NIÑOS de PRIMARIA", "Clases Particulares en Ávila", 330687],
  "gISLhhhE2yc": ["Canción de las montañas y los mares", "Canta y Aprende", 460988],
  "GIW7LutOsnc": ["El Relieve de Europa", "Nicolas Gomez Acosta", 213645],
  "udCro_59Ddc": ["Los CLIMAS de ESPAÑA para NIÑOS de PRIMARIA", "Clases Particulares en Ávila", 71886],
  "z_dZQuZQTQs": ["El clima para niños - Los tipos de clima del mundo", "Smile and Learn - Español", 2048290],
  "W_fh64igVEM": ["Climas de Europa. Sociales, 6º Primaria", "Jesús Chacón Chaparro", 58887],
  "WlVDqAB19o4": ["La POBLACION para NIÑOS de PRIMARIA", "Clases Particulares en Ávila", 328591],
  "4-PRHsozwrU": ["Población española y europea. Sociales, 6º Primaria", "Jesús Chacón Chaparro", 8601],
  "gJFiG19-j8o": ["La población de EUROPA, de ESPAÑA y las MIGRACIONES", "La cuna de Halicarnaso", 70567],
  "QrMfGiaG5iI": ["El trabajo. El sector primario, secundario y terciario | Aprende con Dani", "Happy Learning Español", 1001931],
  "INY7f3T3v1w": ["EL SECTOR PRIMARIO. El trabajo y su clasificación. | Vídeos Educativos para niños", "Happy Learning Español", 1958182],
  "wbcybk2p8qw": ["La ACTIVIDAD ECONÓMICA ► explicada para NIÑOS de PRIMARIA", "Clases Particulares en Ávila", 295630],
  "Wr67pHQ53eo": ["La ORGANIZACIÓN POLÍTICA de ESPAÑA para niños", "Clases Particulares en Ávila", 134792],
  "n4cXmhb2SuA": ["Organización política de España | Aula chachi - Vídeos educativos para niños", "Aula chachi", 274813],
  "Pc6jbxV2NgQ": ["Organización Territorial de España | Aula chachi - Vídeos educativos para niños", "Aula chachi", 223006],
  "SFeB9fMGJ9k": ["¿Qué es la Unión Europea?", "EU Made Simple", 303683],
  "mGHNhz3YX7M": ["EUROPA | Vídeos Educativos para niños", "Happy Learning Español", 462134],
  "xPnqGugag-0": ["Cómo MEMORIZAR y APRENDER los PAÍSES y CAPITALES de EUROPA [FÁCIL]", "Clases Particulares en Ávila", 356586],
  "68ZtFPWCBcc": ["La EDAD MODERNA en ESPAÑA RESUMEN [ para NIÑOS de PRIMARIA ]", "Clases Particulares en Ávila", 378005],
  "tWQkKp0Kivk": ["LA EDAD MODERNA | Videos Educativos para Niños", "Happy Learning Español", 639443],
  "Uxzwy7Nwois": ["Isabel la Católica LA HISTORIA TIENE VOZ ​ Podcast de Historia para niños Episodio 6", "Smile and Learn - Español", 107006],
  "rsIo6xyblt0": ["La EDAD CONTEMPORÁNEA en España s.XIX para NIÑOS de PRIMARIA", "Clases Particulares en Ávila", 455797],
  "Cc8Kp2OyUBU": ["La GUERRA de la INDEPENDENCIA ESPAÑOLA 1808 y 1814 | RESUMEN", "Clases Particulares en Ávila", 360784],
  "BUyFeLVQH8Q": ["ESPAÑA siglo XIX para niños. De Fernando VII a María Cristina PRIMARIA", "La BiBlioTHeKa", 10823],
  "61sOfhdr3OA": ["La EDAD CONTEMPORÁNEA en ESPAÑA s.XX y XXI para NIÑOS de PRIMARIA", "Clases Particulares en Ávila", 162963],
  "fER2xOy-l_8": ["ESPAÑA siglo XX para niños. ALFONSO XIII y PRIMO de RIVERA PRIMARIA", "La BiBlioTHeKa", 21804],
  "gAS8KRiQvGg": ["ESPAÑA siglo XX para niños. GUERRA CIVIL y FRANQUISMO PRIMARIA", "La BiBlioTHeKa", 14771],
  "Ck5-OXF34Fw": ["La Transición Española en 6 Minutos", "Alejandro Díaz de Losada", 122202],
  "WYts75ZEsIE": ["Cómo España se convirtió (por poco) en una democracia", "SideQuest - Animated History", 749456],
  "OKCqiTL7qx0": ["QUÉ es el CALENTAMIENTO y CUÁL es su IMPORTANCIA en EDUCACIÓN FÍSICA", "Educación Física Internacional", 180862],
  "duAgaeqzpAY": ["Test de capacidades: Fuerza, Resistencia, Flexibilidad y velocidad.", "Gerson Muñoz", 272068],
  "9VmSIPD-awE": ["¿Qué es ESQUEMA CORPORAL en EDUCACIÓN FÍSICA? Explicación para Niños", "Educación Física y SALUD", 79827],
  "B4enImGi2B8": ["Habilidades Motrices Básicas / Juego Creativo + Variantes / Primaria / Educación Física / Parte 3", "Lezama Sports TV", 61892],
  "VMJyS4XNqXI": ["Aprende todos los DEPORTES - Educación física - Vocabulario para niños - Recopilación", "Smile and Learn - Español", 249042],
  "7WoC5ku5Z9E": ["JUEGOS COOPERATIVOS. Antología. ¡FELIZ Y SALUDABLE 2026!", "Antonio Méndez-Giménez", 116695],
  "j_fKjJUnv-Q": ["Los puntos cardinales - Usando una brújula o la posición del sol", "Profe Marilin", 938154],
  "INo1pQLskVA": ["DANZA FACIL PARA CLASE DE MÚSICA", "María José Sánchez Parra", 14413516],
  "vbueh5nfpC4": ["Alimentación saludable para niños - Recopilación: Hidratos de carbono, proteínas, vitaminas, grasas", "Smile and Learn - Español", 1413617],
  "TdtAnhk9NRs": ["DORMIR BIEN PARA VIVIR MEJOR SUEÑO EN NIÑOS", "UAM Iztapalapa. Divulgación", 266058],
  "WJSz0c8v4nI": ["Cómo enseñar a un niño a jugar | Bádminton", "SIKANA Español", 53465],
  "34s189-OvnI": ["Twincon, el deporte coeducativo e inclusivo", "Twincon", 209734],
  "rKIMDP4BQMI": ["Animación de primeros auxilios para niños - Cruz Roja", "Eduardo Vázquez", 631989],
  "BNIQpWNgIX8": ["Mundo Zamba - Reglas del Juego limpio: \"juego en equipo\"", "Mundo Zamba", 132904],
  "AqatjtIO3kQ": ["Momentos legendarios de respeto y juego limpio en el deporte", "Todo deporte", 52814],
  "aoj9oTvVJ8o": ["La célula para niños - Tipos, estructura, funciones y partes - Ciencia para niños", "Smile and Learn - Español", 2834346],
  "0tTJbBi3Zbw": ["Las célula eucariotas y sus partes para niños - Célula animal y vegetal", "Smile and Learn - Español", 1636452],
  "przV9YavZmI": ["Organización de los seres vivos: células, tejidos, órganos, sistemas y organismos", "Smile and Learn - Español", 1148361],
  "S3jJj68dBxw": ["Los sistemas del cuerpo humano para niños - Sistema circulatorio, digestivo y respiratorio", "Smile and Learn - Español", 6194272],
  "CIhwGRIBEQ8": ["El Aparato Digestivo y la Digestión | Videos para Niños de Primaria | Happy Learning", "Happy Learning Español", 8587218],
  "Wq_bPoRTn7I": ["El sistema respiratorio del cuerpo humano para niños - Smile and Learn", "Smile and Learn - Español", 6654629],
  "f6rJ83TRm_g": ["La Eduteca - El aparato excretor", "La Eduteca", 2198644],
  "nsSg4Eq3LEo": ["EL SISTEMA CIRCULATORIO | Vídeos Educativos para Niños de Primaria | Happy Learning", "Happy Learning Español", 6293527],
  "wUxWiu5Veg8": ["10 ejercicios de estirar y flexionar - Calentamiento para niños", "Little Sports Español", 184242],
  "xsFOnhEXM0w": ["VOLEIBOL para niños | Reglas básicas", "Smile and Learn - Español", 873805],
  "RKGi8bdf2Zs": ["Embarazo mes a mes para niños: desarrollo embrionario y fetal", "Smile and Learn - Español", 1533602],
  "HVLEzWmnD48": ["Las energías no renovables - Tipos de energía para niños", "Smile and Learn - Español", 584775],
  "uvCZMWt1m0U": ["El ojo y sus partes - La vista - Los sentidos para niños", "Smile and Learn - Español", 7995308],
  "3RWuJeUInhk": ["TUTORIAL COMO hacer PARED INVISIBLE (mimo) paso a paso para principiantes", "Javi9509 [2.0]", 82341],
  "nrhV6EwwC-g": ["Lenguaje corporal y gestual", "Manuela Galindo Diviértete y aprende", 128450],
  "95cKCwMGrmg": ["Yoga suave para niños | Flexibilidad, equilibrio y relajación | El Yoga de María", "el yoga de maria", 4297526],
  "wEOE530UIwM": ["Canción de los ríos", "Canta y Aprende", 2016542],
  "AH3kighSjxY": ["Jugamos con raquetas y palas (6º primaria)", "Nacho Pérez EF", 23325],
  "k2gqmPGRXfg": ["PALADÓS: Deporte alternativo en Educación Física (palas autoconstruidas)", "Antonio Méndez-Giménez", 30701],
  "HkeoWFjgIWg": ["Correr y pensar, carreras de orientación", "100x100runner", 67206],
};
const vid = (id) => { const v = VIDEOS[id]; if (!v) throw new Error(`Vídeo sin datos: ${id}`); return { id, titulo: v[0], canal: v[1], vistas: v[2] }; };
const vgen = (id, busqueda) => ({ ...vid(id), megusta: 0, busqueda });

const RD = { t: "Real Decreto 157/2022, enseñanzas mínimas de la Educación Primaria (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296" };
const PROF = (saberes, ideas) => ({ saberes: `${saberes} (RD 157/2022, tercer ciclo).`, ideas });

module.exports = { C, REV, svg, tit, tx, t, fl, cj, cj2, et, cabe, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, barras, linea, anillos, ciclo, fichas, vid, vgen, RD, PROF, nino, suelo, pelota, arbol, sol, nube, flor, corazon, estrella, casa, pez, pajaro, tick, equis };
