// Ayudas del lote B de 5º de Primaria: Ciencias de la Naturaleza, Ciencias Sociales y Educación Física.
// Cada tema va ya ampliado (README, «Tema ampliado»). Dibujos propios en SVG de 260×180 que ajustan solos el tamaño de letra.
const { t, fl, cj, cj2, rejilla, et, COL, cabe, BG, tabla, wiki, mapa } = require("./_eso1a");
const { nino, suelo, pelota, arbol, sol, nube, flor, corazon, estrella, casa, pez, pajaro, tick, equis } = require("./_pri1-dib");

const C = "5-primaria";
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

// Vídeos elegidos con tools/videos.py (ids reales, sin repetir con otros cursos ni lotes).
const VIDEOS = {
  // Ciencias de la Naturaleza
  "TVNnPyRpLa8": ["NIVELES de ORGANIZACIÓN de los SERES VIVOS con EJEMPLOS para NIÑOS", "Clases Particulares en Ávila", 166522],
  "JFeTBoY-QSc": ["La célula | ¿Qué es? ¿Cuál es su estructura? Tipos de célula", "Tovi El topo", 890250],
  "KYUQ-kySe2E": ["Cuerpo humano: Principales órganos | Camaleón", "CNTV Infantil", 2857907],
  "nj168qvxJzg": ["La Eduteca - La función de nutrición", "La Eduteca", 1783811],
  "_jbw0FxnaQE": ["El sistema digestivo del cuerpo humano para niños - Smile and Learn", "Smile and Learn - Español", 7893970],
  "tMLFFKof29o": ["EL APARATO RESPIRATORIO | Videos Educativos para Niños", "Happy Learning Español", 1900060],
  "ZzATGDMNKYw": ["El sistema circulatorio del cuerpo humano para niños - Smile and Learn", "Smile and Learn - Español", 8229681],
  "IHsfVmGeet8": ["¿Cómo funciona el Sistema Excretor? | Videos Educativos Aula365", "FlexFlix Kids en Español", 1632347],
  "w8PnlLptHXE": ["Cuerpo humano: Huesos y músculos | Camaleón", "CNTV Infantil", 8135104],
  "NknwJY-ywFw": ["El sistema óseo para niños | Aprende los huesos del cuerpo humano", "Peques Aprenden Jugando", 2038043],
  "KyNVl14_L5Q": ["La Eduteca - Los músculos", "La Eduteca", 2303991],
  "gwK5f2cyhgc": ["Articulaciones para niños. Video con nombres y movimientos de articulaciones", "Peques Aprenden Jugando", 697307],
  "krqempHBRAc": ["El Sistema Nervioso | Videos Educativos Aula365", "FlexFlix Kids en Español", 4025915],
  "PTCt0Jtkje0": ["Los sentidos | Camaleón", "CNTV Infantil", 3976289],
  "RGypVuzAqkc": ["El oído y sus partes para niños - Los órganos de los sentidos", "Smile and Learn - Español", 2369192],
  "0KS6HksRiQo": ["Los 5 REINOS de la NATURALEZA y sus CARACTERÍSTICAS para niños de primaria", "Clases Particulares en Ávila", 523344],
  "KNgS8vkB0Eo": ["¿Qué son los hongos? - El reino de los hongos para niños", "Smile and Learn - Español", 1198965],
  "3yN3PcyYOnw": ["El REINO de los PROTOCTISTAS o PROTISTA para NIÑOS de PRIMARIA", "Clases Particulares en Ávila", 238760],
  "89NwOC1KFCA": ["Las Plantas | Reproducción | Aula chachi - Vídeos educativos para niños", "Aula chachi", 905488],
  "34atGEtvbDM": ["La Fotosintesis de las Plantas: La Fotosintesis es ... (Vídeos Educativos para Niños)", "Mundo Divertido de Niños", 963932],
  "gYjTtWBCUnw": ["LAS PARTES DE LA FLOR | Videos Educativos para Niños", "Happy Learning Español", 443416],
  "ZzhJAUq0fps": ["LA REPRODUCCIÓN ASEXUAL DE LAS PLANTAS. | Vídeos Educativos para Niños", "Happy Learning Español", 1458940],
  "uQo9wZS2BC0": ["Animales Vertebrados | Videos Educativos para Niños", "Happy Learning Español", 2298428],
  "WB4h351Oxaw": ["Animales Invertebrados para Niños: Clasificación de los Animales", "Mundo Divertido de Niños", 2339248],
  "m4MPj5nFNW0": ["Los Mamíferos para niños - Animales vertebrados - Ciencias naturales para niños", "Smile and Learn - Español", 7728926],
  "RRDbPK6DeCk": ["Los anfibios para niños - Animales vertebrados - Ciencias naturales para niños", "Smile and Learn - Español", 2281730],
  "_U4dv3KwQic": ["¿Qué son Los Ecosistemas? (Videos Educativos para Niños)", "Mundo Divertido de Niños", 1938353],
  "LtDpx5HCG_Y": ["¿Qué es la Cadena Alimenticia? | Videos Educativos Aula365", "FlexFlix Kids en Español", 3679410],
  "TV-YEQOIFuQ": ["¿Qué es la Contaminación Ambiental? | Videos Educativos Aula365", "FlexFlix Kids en Español", 4342506],
  "fxDKpEYAoSE": ["Estados de la materia para niños - ¿Cuáles son los estados de la materia? Sólido, Líquido y Gaseoso", "Smile and Learn - Español", 2991172],
  "OMpBhukRHHI": ["MÉTODOS de SEPARACIÓN de MEZCLAS Homogéneas y Heterogéneas con EJEMPLOS para NIÑOS de PRIMARIA", "Clases Particulares en Ávila", 605477],
  "8VQtgvyWp08": ["Sustancias Puras y Mezclas [Fácil y Rápido] | QUÍMICA |", "A Cierta Ciencia", 563058],
  "rEffBaP7Q2E": ["Energía para Niños: Qué Es, Tipos y Ejemplos Fáciles", "Happy Learning Español", 216393],
  "CIBChfQ6BBA": ["La Energía se Transforma | Aula chachi - Vídeos educativos para niños", "Aula chachi", 272505],
  "FUqvuEJj3tM": ["Fuentes de Energía | Aula chachi - Vídeos educativos para niños", "Aula chachi", 462467],
  "vvi-PCDoTR0": ["¿Qué es la Luz? Reflexión y Refracción | Videos Educativos Aula365", "FlexFlix Kids en Español", 1803635],
  "hukIxkPqfM4": ["LA LUZ - Ciencias para niños - Parte 1", "Smile and Learn - Español", 626717],
  "ZHwja9unvw4": ["La Propagación del Sonido y la Audición", "MARIO CARREÓN", 205595],
  "MlHLI0A2KaM": ["Maquinas Simples", "MARIO CARREÓN", 481369],
  "lsWuFiDUMso": ["¿Cómo Funcionan las Palancas? | Videos Educativos para Niños", "FlexFlix Kids en Español", 449947],
  "DML24R1x3W0": ["LA RUEDA. Grandes inventos que cambiaron la historia | Vídeos Educativos para Niños", "Happy Learning Español", 1050394],
  "i53aXjnPRig": ["¿QUIÉN INVENTÓ LA IMPRENTA? Grandes inventos que cambiaron la historia | Vídeos Educativos para Niños", "Happy Learning Español", 142495],
  // Ciencias Sociales
  "PGiq8AJe1og": ["LOS MAPAS FÍSICOS Y POLÍTICOS | Vídeos Educativos para Niños", "Happy Learning Español", 244067],
  "TgQKq8WyCQk": ["La Escala", "MARIO CARREÓN", 510103],
  "YiR1aLIkwgM": ["Los 8 Elementos De Los Mapas | Apréndelos Fácil y Rápido", "El Profe Youtuber", 215881],
  "YBwt9izKoJ8": ["Latitud y Longitud", "MARIO CARREÓN", 949346],
  "aOx9XOfRl5A": ["Paralelos y meridianos | Líneas imaginarias de la Tierra", "Escuela de Aprendices", 1171345],
  "Ir5KNE7Igcg": ["LOS HEMISFERIOS DE LA TIERRA Y SUS CURIOSIDADES | Happy Learning", "Happy Learning Español", 513798],
  "PbbSHYkAaFo": ["La Atmósfera - Las capas de la tierra - Ciencias para niños", "Smile and Learn - Español", 1375431],
  "2qyM9iKllfE": ["Tiempo atmosférico | Camaleón", "CNTV Infantil", 2403753],
  "d_LkCs9IzgM": ["La Atmósfera y sus capas | Aula chachi - Vídeos educativos para niños", "Aula chachi", 292052],
  "Le40Rq80rbI": ["Cómo aprenderse el MAPA FÍSICO de EUROPA", "Clases Particulares en Ávila", 65809],
  "Y9jKDgvBpiI": ["Relieve de Europa. Sociales, 6º Primaria", "Jesús Chacón Chaparro", 47257],
  "6tlfRxZXwtA": ["Hidrografía de Europa. Sociales, 6º Primaria", "Jesús Chacón Chaparro", 36489],
  "wcDiKEMiXTM": ["PAISAJES DE ESPAÑA: Existen Lugares INCREÍBLES | Vídeos Educativos para Niños", "Happy Learning Español", 101644],
  "J04oFowHjlU": ["SOCIALES - LOS PAISAJES DE ESPAÑA", "Flipa tus Clases", 28359],
  "Hu0U-odsG7A": ["La Población | Aula chachi - Vídeos educativos para niños", "Aula chachi", 178124],
  "Jx0KxcWpO6M": ["SOCIALES - LA POBLACIÓN EN ESPAÑA I", "Flipa tus Clases", 48436],
  "38PbC7mlYSg": ["LA DISTRIBUCIÓN DE LA POBLACIÓN ESPAÑOLA", "Learning With Amalia", 16348],
  "J1T0NLXcDyM": ["La CONSTITUCIÓN ESPAÑOLA explicada de MANERA SENCILLA - Resumen de historia", "MaestraSuperIsa", 231899],
  "XYZfb5njogU": ["¿Qué son los poderes del Estado? | Serie sobre educación cívica", "CNTV Infantil", 839462],
  "KczrI5fE1Yg": ["El procedimiento parlamentario de aprobación de las leyes", "Congreso - Canal Parlamento", 35008],
  "Sw-SO3WTxAc": ["LA PREHISTORIA PARA NIÑOS | Vídeos Educativos para Niños de Primaria | Happy Learning", "Happy Learning Español", 11350831],
  "O1CvFTD0IBw": ["La cueva de Altamira - Breve presentación", "Museo de Altamira", 794324],
  "LBi2KLq8Fgs": ["El Neolítico. Vídeos educativos para niños", "Happy Learning Español", 1616053],
  "Rw-5z5ZsTMU": ["La Edad de los Metales - 5 cosas que deberías saber - Historia para niños", "Smile and Learn - Español", 824896],
  "ufEclRGXV6k": ["EL IMPERIO ROMANO | Vídeos Educativos para Niños", "Happy Learning Español", 3770065],
  "nf5qP4BG9Zk": ["Una romana en Hispania. LA HISTORIA TIENE VOZ. Podcast de Historia para niños. Episodio 3", "Smile and Learn - Español", 86261],
  "d-MwuhrrpaQ": ["La romanización de Hispania", "Aula Infinita", 42345],
  "2cVgqOqGkWU": ["AL ANDALUS resumen para NIÑOS", "Clases Particulares en Ávila", 293882],
  "mggtNqUNVcM": ["AL ÁNDALUS explicado de manera sencilla y con Playmobil - Resumen de HISTORIA", "MaestraSuperIsa", 130626],
  "2h18jmh3hT4": ["LOS REINOS CRISTIANOS I explicados de MANERA SENCILLA con PLAYMOBIL - Resumen de HISTORIA", "MaestraSuperIsa", 76144],
  // Educación Física
  "LXklLqHCFRk": ["Capacidades físicas básicas. EF Primaria", "Martina dlFR", 48087],
  "PJSuRsQ4uzs": ["Importancia de la ACTIVIDAD FÍSICA para niños. ¡Muévete y cuida tu cuerpo!", "Smile and Learn - Español", 164176],
  "OPMCf84VrsI": ["Educación Física Circuito Capacidades Físicas 03", "Educación Física Para Todos", 119632],
  "0Rlwb5hblxI": ["RUTINA DE CALENTAMIENTO DE 10 MINUTOS PARA NIÑOS: EJERCICIOS DE ESTIRAMIENTO", "Little Sports Español", 229403],
  "-DA3LMHgmqY": ["Juegos de calentamiento general sin material", "Silvia Profesora Educación Física", 113279],
  "QoOkQUtTFno": ["Los juegos con pelotas más divertidos y famosos | para tus clases de educación física", "OsKarBlox", 471270],
  "Ka3atxfINOU": ["ROBA BOLA | Juegos Educación Física", "JuegosEF", 181268],
  "gNGqasmYPng": ["Juegos de LANZAMIENTO para educacion fisica niños de nivel PRIMARIO", "Movimiento Lúdico", 15024],
  "HbZKv7LNExQ": ["Juegos Cooperativos", "alejandro vazquez", 789601],
  "6ZItEqyHZ28": ["EL GUARDIÁN DEL CASTILLO | Juegos Educación Física", "JuegosEF", 84116],
  "eARnw7Tk5uQ": ["JUEGOS COOPERATIVOS / Beneficios (TODO DE EDUCACIÓN FÍSICA)", "Educación Física y SALUD", 36599],
  "a9xygFavguo": ["FÚTBOL para niños | Reglas básicas | Recopilación", "Smile and Learn - Español", 1974430],
  "0ZDTOFFxmUY": ["El oso Berni - Balonmano", "Consejo Superior de Deportes", 212146],
  "7fR9uoFMEtg": ["Las infracciones en el baloncesto | Baloncesto", "SIKANA Español", 1444217],
  "8tOFqQf67Hk": ["20 JUEGOS TRADICIONALES PARA EDUCACIÓN FÍSICA", "Edgar Conejero Estruch", 57122],
  "VbE-S6qbrOs": ["Danzas del mundo para niños de primaria / Danzas del mundo fáciles #1", "Aprendamos Juntos", 56550],
  "NoYgmvaRe9A": ["DANZAS DEL MUNDO. Danse des batonnets (Francia)", "Cristina del Amo del Amo", 57708],
  "3lNLvuOo18s": ["CAPÍTULO 3. ¿Cómo es una carrera de orientación?", "Comité Olímpico Español", 9155],
  "iULKi0zvTeQ": ["CAPÍTULO 2. El uso del mapa, brújula y las normas / Escuela de Orientación", "Comité Olímpico Español", 9592],
  "490Yu-0c7oU": ["Formas de ORIENTARSE para niños. Puntos cardinales, mapas, el sol, las estrellas, la brújula...", "Smile and Learn - Español", 88726],
  "5EVecScqpDI": ["Actividad Física y Alimentación (para Estudiantes)", "Astraway", 495485],
  "nI-ZRTv-rVs": ["¿Por qué debemos tomar agua? | Importancia de la HIDRATACIÓN para niños", "Efy de Belfia", 307162],
  "v2JAstUi8nA": ["Dieta Saludable para Niños | Consejos para Comer Bien y Estar Saludable", "Happy Learning Español", 152739],
};
const vid = (id) => { const v = VIDEOS[id]; if (!v) throw new Error(`Vídeo sin datos: ${id}`); return { id, titulo: v[0], canal: v[1], vistas: v[2] }; };
const vgen = (id, busqueda) => ({ ...vid(id), megusta: 0, busqueda });

const RD = { t: "Real Decreto 157/2022, enseñanzas mínimas de la Educación Primaria (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296" };
const PROF = (saberes, ideas) => ({ saberes: `${saberes} (RD 157/2022, tercer ciclo).`, ideas });

module.exports = { C, REV, svg, tit, tx, t, fl, cj, cj2, et, cabe, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, barras, linea, anillos, ciclo, fichas, vid, vgen, RD, PROF, nino, suelo, pelota, arbol, sol, nube, flor, corazon, estrella, casa, pez, pajaro, tick, equis };
