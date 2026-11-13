// Ayudas del lote D de 2º de Primaria (Inglés, Educación Plástica, Música y Educación Física).
// Vídeos buscados con tools/videos.py (13-11-2026). Ninguno se repite en otros cursos ni en otros lotes de la web.
// [id, título, canal, vistas, búsqueda]. «v» es el vídeo general del tema y «b» el de un bloque.
const { vid } = require("./_peque");
const D2 = require("./_pri1-dib");

const VID = {
  // Inglés
  in1v: ["2o46gKeQTwc", "Saludos en inglés | Inglés para niños", "Amigo Mumu Español", 12527707, "saludos en inglés para niños"],
  in1b: ["yqlbn_nI2w8", "What's Your Name? Greeting Song", "Super Simple Songs - Kids Songs", 56825374],
  in2v: ["4ZeBdCGGvWA", "Útiles escolares en inglés | Inglés para niños", "Amigo Mumu Español", 7817885, "school things english for kids"],
  in2b: ["0DqkEfKXT5Y", "Mr. Blackboard | Back to School Supplies song", "Super Simple Songs - Kids Songs", 8006144],
  in3v: ["wMWcBIAHOHY", "Juguetes en inglés para niños (Toys in English)", "Baby Nenes", 1210743, "toys in english for kids"],
  in3b: ["KkB3jcqyQ5g", "I Have A Toy | Noodle & Pals", "Noodle & Pals", 26593451],
  in4v: ["CRdaBzHyVww", "Partes de la casa en inglés - Canciones infantiles", "Doremila", 1593033, "partes de la casa en inglés niños"],
  in4b: ["CnevsHDtJXo", "Hide & Seek (Around The House) | Rooms In The House", "Noodle & Pals", 47000529],
  in5v: ["GWElwZGZaLo", "Comida en inglés | Los alimentos en inglés", "Amigo Mumu Español", 3713248, "comida en inglés para niños"],
  in5b: ["YCf-PGu55Nc", "Do You Like Broccoli Ice Cream? | Super Simple Songs", "Super Simple Songs - Kids Songs", 129646944],
  in6v: ["SPMmNESVB9s", "Aprende inglés: los animales de la granja en inglés", "Happy Learning Español", 740139, "animales de la granja en inglés niños"],
  in6b: ["_6HzoUcx3eo", "Old MacDonald Had A Farm | Super Simple Songs", "Super Simple Songs - Kids Songs", 610330488],
  in7v: ["AsM1cgsip-o", "Partes del cuerpo en inglés - Canciones infantiles", "Doremila", 8120366, "partes del cuerpo en inglés niños"],
  in7b: ["8ChQVaEAKsk", "This Is My Face | Parts Of The Face Song", "Super Simple Songs - Kids Songs", 25760527],
  in8v: ["48lzhhtROVo", "La ropa en inglés - Aprende inglés con Mr Pea", "Inglés para niños con Mr Pea", 318028, "la ropa en inglés para niños"],
  in8b: ["-jBfb33_KHU", "Put On Your Shoes | Clothing Song for Kids", "Super Simple Songs - Kids Songs", 1060500547],
  in9v: ["KBL5aXSJTlE", "How's The Weather? | Super Simple Songs", "Super Simple Songs - Kids Songs", 79448315, "weather song for kids"],
  in9b: ["C_Sc5ZjdfFI", "The Seasons Song | Super Simple Songs", "Super Simple Songs - Kids Songs", 18317903],
  in10v: ["d4Rq404-Clw", "Días de la semana en inglés - Aprende inglés con Mr Pea", "Inglés para niños con Mr Pea", 7151352, "días de la semana en inglés niños"],
  in10b: ["mXMofxtDPUQ", "Days of the Week Song | The Singing Walrus", "The Singing Walrus", 253821327],
  // Educación Plástica
  pl1v: ["Ws2zVXQCcJo", "Los colores primarios: amarillo, azul y rojo", "Nacho Aprende", 607455, "colores primarios y secundarios para niños"],
  pl1b: ["dwCSNExnF4k", "¡Aprende a crear colores nuevos! Combinación de colores para niños", "FIESTIKIDS", 482100],
  pl2v: ["f4vlVI_F4f0", "Líneas rectas y curvas para niños (Primaria)", "La BiBlioTHeKa", 144608, "tipos de líneas para niños plástica"],
  pl2b: ["Xzck4hTMwjA", "Tipos de líneas, súper fácil", "Daniel Carreón", 1138341],
  pl3v: ["jmLFUn8pByo", "Cómo dibujar el cuerpo de un niño y una niña", "KidsLet'sDraw", 568487, "dibujar la figura humana niños"],
  pl3b: ["ecS2yVPGbl8", "Cómo dibujar un niño paso a paso: dibujo fácil", "Dibu Clases", 4205435],
  pl4v: ["SZKklF_IURA", "Mi libro de texturas básico", "Creatividad Angeles", 425831, "texturas para niños plástica"],
  pl4b: ["Xu6bRUJyecE", "Panel sensorial de texturas casero", "Programaciones Pedagógicas Primera Infancia", 300957],
  pl5v: ["fLY_5o-ltIY", "Cómo hacer un caracol de plastilina paso a paso", "Dibujos En Acción", 1963084, "plastilina para niños manualidades fáciles"],
  pl5b: ["WbBMCI6iMHg", "Cómo hacer una mariquita de plastilina paso a paso", "Dibujos En Acción", 1376772],
  pl6v: ["_bTXbZCZmuM", "Técnica collage para niños", "Jonathan Bernal O", 540967, "collage para niños"],
  pl6b: ["IvQNZXxuBLY", "Huevera gallina de cartón reciclado y tubos de papel", "INNOVANDO IDEAS", 2357982],
  pl7v: ["4rA-ZM74h8g", "Cómo dibujar un paisaje de día y de noche, paso a paso", "RaniDraws Dibujo!", 276473, "retrato y paisaje para niños arte"],
  pl7b: ["7oZI-sUPNiA", "Retratos cubistas: actividad de 1.º", "Profesora Sofía Basañes", 33595],
  pl8v: ["ANP-dJ5wxHM", "Visita al museo de arte | Canciones infantiles", "JunyTony en Español", 570885, "obras de arte famosas para niños"],
  pl8b: ["40sZNGOXEBw", "Frida Kahlo: biografía en cuento para niños", "Shackleton Kids", 1775694],
  // Música
  mu1v: ["xGuyWxpZocM", "Jugamos a escuchar los sonidos de la casa", "Eugenia Romero", 5602132, "sonidos del entorno para niños"],
  mu1b: ["noQTk4mOmIQ", "Los sonidos de la naturaleza: discriminación de sonidos", "Eugenia Romero", 2293229],
  mu2v: ["kViRuUWy09s", "Aprendiendo a diferenciar sonidos agudos y graves", "Sara Ramz", 227205, "sonidos agudos y graves para niños"],
  mu2b: ["wEkitLcnylM", "Adivina sonidos agudos y graves", "Seño Merce", 119255],
  mu3v: ["ji-XbGcT4bg", "El pulso musical", "EnMus Enseñanza musical", 286854, "pulso y ritmo para niños música"],
  mu3b: ["lEqVduisxyU", "Pulso, acento y ritmo con la canción «Calypso»", "Profesor Pedro Morales Tuto Flauta", 267703],
  mu4v: ["yGL7vBz78FI", "Juego de manos para niños «Al salir de la cueva»", "Dos Cocos", 5461781, "canciones con juegos de manos"],
  mu4b: ["Ae3OVi8Q7NA", "Pepito fue a China: canción y juego con las palmas", "cotidiano399", 5186260],
  mu5v: ["g7UmmPh3V6A", "Adivina sonidos: instrumentos musicales de percusión", "CajaMusical", 977274, "instrumentos de percusión para niños"],
  mu5b: ["17wC8KoaXto", "Musicograma Carnavalito", "la_petita_mestra", 1636700],
  mu6v: ["3VMv9Y5VCB0", "Lento muy lento - Canción didáctica infantil", "Chivaditos", 14637657, "música rápida y lenta para niños"],
  mu6b: ["0VANlrCNPO4", "Canción: lento y rápido", "Mercedes Edith", 386030],
  mu7v: ["ct5Q5EbzZl0", "A la rueda rueda: rondas tradicionales", "Canti Rondas", 17649241, "danzas infantiles fáciles"],
  mu7b: ["mrxTQZW9b08", "El baile del sapito - Canciones infantiles", "Cartoon Studio", 3121829660],
  mu8v: ["rapbwWhCKTU", "Las notas musicales", "Bichikids", 8346549, "las notas musicales para niños"],
  mu8b: ["0liuKHSPqZk", "Musicograma de la polka Tritsch Tratsch", "Juanga Peces", 277623],
  // Educación Física
  ef1v: ["AH4QUsktYVc", "11 actividades de esquema corporal para niños y niñas", "MOTRI APRENDIZAJE", 43374, "esquema corporal para niños educación física"],
  ef1b: ["r-i5BqoV8FM", "¡Mueve tu cuerpo! El baile de los ejercicios", "Danny Go! Español", 3166677],
  ef2v: ["Zo4BFQavttQ", "Giros: habilidades motrices básicas (Primaria)", "Educación Física Online", 60118, "desplazamientos saltos giros niños educación física"],
  ef2b: ["ut4mpMJWa3I", "Desplazamientos: juegos sin material", "Educación Física y Deportes", 32578],
  ef3v: ["N-_Mc6GhZME", "Habilidades motrices básicas: lanzar y atrapar", "El Profe Pelotita", 4452, "lanzar y atrapar pelota niños educación física"],
  ef3b: ["sjLmZ_IhZ_M", "10 juegos de lanzamientos para Educación Física", "efjuegos", 8971],
  ef4v: ["RQdPjx0sq5I", "¿Qué es el equilibrio en la Educación Física?", "El Tío Kevin Mora - Vlogs", 181479, "equilibrio para niños educación física"],
  ef4b: ["b2PfrTWc5AE", "Brinca y para ya: equilibrio y movimiento", "TÍOARIEL", 710586],
  ef5v: ["5qGNWPLc5SE", "10 juegos de persecución para Educación Física", "JuegosEF", 286536, "juegos de persecución para niños"],
  ef5b: ["zIQliGuvA-M", "Top 3 juegos de persecución para Educación Física", "Prof Ramon Lima", 29227],
  ef6v: ["K_OUXW4IhAA", "Juegos de ayer y hoy", "Erika Arista", 180956, "juegos populares tradicionales para niños"],
  ef6b: ["HBNoYx4B78w", "10 juegos tradicionales que ya no se juegan", "De Otra Época", 1305121],
  ef7v: ["83DDU7xvW8s", "Mimos: gestos y movimiento para niños", "Diana Ramírez", 231862, "mímica para niños juego"],
  ef7b: ["a7a5mbewZ-c", "¡Juega y congélate con Mr. G! Canción de ejercicio", "Mr. G Play & Music", 1606338],
  ef8v: ["R9fW1kx3ZbA", "Medidas de higiene para niños: hábitos de higiene", "FUNtasticGames4Kids", 973180, "hábitos de higiene para niños"],
  ef8b: ["lDTY-OD1jJk", "¿Por qué debemos dormir?", "JunyTony en Español", 583560],
};

// V("in1v") → vídeo general (con búsqueda); V("in1b") → vídeo de bloque.
const V = (k) => {
  const [id, titulo, canal, vistas, busqueda] = VID[k];
  return busqueda ? { ...vid(id, titulo, canal, vistas), busqueda } : vid(id, titulo, canal, vistas);
};

// Pinturas reales (no cambian con el modo oscuro: son colores de pintura).
const P = { rojo: "#e53935", amarillo: "#fdd835", azul: "#1e88e5", verde: "#43a047", naranja: "#fb8c00", morado: "#8e24aa", blanco: "#ffffff", negro: "#212121", marron: "#795548", rosa: "#f48fb1", gris: "#9e9e9e", celeste: "#81d4fa", piel: "#f3c9a1" };
const mancha = (x, y, r, c) => `<path d="M${x - r} ${y} q 0 ${-r} ${r} ${-r} q ${r * 1.1} 0 ${r} ${r} q 0 ${r * 0.9} ${-r} ${r} q ${-r * 1.05} 0 ${-r} ${-r} Z" fill="${c}" stroke="var(--ink)" stroke-width="1"/>`;
const pincel = (x, y, c = P.rojo, rot = -35) => `<g transform="translate(${x} ${y}) rotate(${rot})"><rect x="-3" y="-34" width="6" height="30" rx="2" fill="#c99a5b"/><rect x="-4" y="-6" width="8" height="8" fill="#9aa5c0"/><path d="M-4 2 q4 14 8 0z" fill="${c}"/></g>`;
const marco2 = (x, y, w, h, inner = "", c = "#c99a5b") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${c}"/><rect x="${x + 6}" y="${y + 6}" width="${w - 12}" height="${h - 12}" fill="var(--card)"/>${inner}`;
// Pentagrama de 5 líneas.
const pentagrama = (x1, x2, y, sep = 8, c = "var(--muted)") => [0, 1, 2, 3, 4].map((i) => `<path d="M${x1} ${y + i * sep} H${x2}" stroke="${c}" stroke-width="1.5"/>`).join("");
// Altavoz con ondas (sonido fuerte si n grande).
const altavoz = (x, y, n = 3, c = "var(--pen)") => `<g transform="translate(${x} ${y})"><path d="M-14 -6 h8 l10 -9 v30 l-10 -9 h-8z" fill="${c}"/>${[...Array(n)].map((_, i) => `<path d="M${10 + i * 7} -${8 + i * 4} q${6 + i * 2} ${8 + i * 4} 0 ${16 + i * 8}" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`).join("")}</g>`;
// Cono de Educación Física.
const cono = (x, y, c = "var(--sun)") => `<path d="M${x - 10} ${y} L${x} ${y - 24} L${x + 10} ${y}z" fill="${c}" stroke="var(--ink)" stroke-width="1"/><rect x="${x - 13}" y="${y - 2}" width="26" height="4" rx="2" fill="${c}"/>`;
const aro = (x, y, rx = 22, c = "var(--red)") => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${rx * 0.35}" fill="none" stroke="${c}" stroke-width="4"/>`;

// Música: figuras rítmicas y una palma.
const negra = (x, y, c = "var(--pen)") => `<g><ellipse cx="${x}" cy="${y}" rx="8" ry="6" transform="rotate(-20 ${x} ${y})" fill="${c}"/><path d="M${x + 7} ${y - 2} V${y - 36}" stroke="${c}" stroke-width="3"/></g>`;
const blanca = (x, y, c = "var(--pen)") => `<g><ellipse cx="${x}" cy="${y}" rx="8" ry="6" transform="rotate(-20 ${x} ${y})" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><path d="M${x + 7} ${y - 2} V${y - 36}" stroke="${c}" stroke-width="3"/></g>`;
const corcheas = (x, y, c = "var(--pen)", sep = 28) => `<g>${negra(x, y, c)}${negra(x + sep, y, c)}<path d="M${x + 7} ${y - 36} H${x + sep + 7}" stroke="${c}" stroke-width="6"/></g>`;
const silencio = (x, y, c = "var(--pen)") => `<path d="M${x - 4} ${y - 30} l8 10 l-7 8 l8 10 q-10 -4 -8 8 q-10 -10 2 -12 l-6 -8 l7 -8z" fill="${c}"/>`;
const palma = (x, y, c = "var(--inf)", s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-12 12 q-4 -16 0 -22 v-10 q0 -5 4 -5 q4 0 4 5 v-4 q0 -5 4 -5 q4 0 4 5 v4 q0 -4 4 -4 q4 0 4 5 v18 q0 12 -10 14z" fill="${P.piel}" stroke="${c}" stroke-width="2"/></g>`;

module.exports = { ...D2, V, VID, P, mancha, pincel, marco2, pentagrama, altavoz, cono, aro, negra, blanca, corcheas, silencio, palma };
