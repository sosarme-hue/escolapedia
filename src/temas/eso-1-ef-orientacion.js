// Educación Física 1º ESO: orientación y senderismo. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, persona, mezcla, vb, vg } = require("./_eso1c");

const M = "Educación Física";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Orientación y senderismo",
  minutos: 45,
  objetivos: ["Orientarse con el sol, el mapa y la brújula", "Interpretar planos y mapas sencillos con su leyenda y escala", "Conocer la carrera de orientación y sus elementos", "Planificar una ruta de senderismo segura y respetuosa con la naturaleza"],
  claves: ["puntos cardinales", "mapa", "brújula", "baliza", "senderismo", "señalización"],
  pregunta: {
    texto: "Si te perdieras en el campo sin móvil, ¿cómo sabrías hacia dónde está el norte?",
    respuesta: "Puedes usar el <b>sol</b>: sale aproximadamente por el <b>este</b>, a mediodía está hacia el <b>sur</b> (en España) y se pone por el <b>oeste</b>. Con eso deduces los demás puntos. De noche, la <b>estrella Polar</b> señala el norte. Y con una <b>brújula</b> y un mapa, <mark>orientarse es mucho más preciso</mark>: es lo que se aprende en la carrera de orientación.",
  },
  bloques: [
    {
      html: `<h3>Orientarse</h3><p><b>Orientarse</b> es saber en qué lugar estamos y en qué dirección tenemos que ir. Para ello usamos los <b>puntos cardinales</b>: <b>norte (N), sur (S), este (E) y oeste (O)</b>, y los intermedios (NE, SE, SO, NO).</p><p>Sin instrumentos podemos orientarnos con:</p><ul><li><b>El sol</b>: sale por el este y se pone por el oeste; a mediodía, en España, está hacia el sur.</li><li><b>La estrella Polar</b>: indica el norte de noche; se encuentra prolongando cinco veces la distancia entre las dos estrellas del extremo de la Osa Mayor.</li><li><b>Referencias del terreno</b>: montañas, ríos, edificios conocidos.</li></ul><p>El musgo en los árboles no es una referencia fiable: crece donde hay humedad y sombra, en cualquier lado.</p>`,
      svg: svg("Rosa de los vientos con norte arriba, sur abajo, este a la derecha y oeste a la izquierda, y el sol saliendo por el este", `<circle cx="120" cy="92" r="62" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><path d="M120 30 L 130 92 L 120 154 L 110 92 Z" fill="var(--red)" fill-opacity=".6"/><path d="M58 92 L 120 82 L 182 92 L 120 102 Z" fill="var(--pen)" fill-opacity=".45"/><path d="M120 30 L 130 92 L 110 92 Z" fill="var(--red)"/>${t(120, 22, "N", { s: 14, c: "var(--red)" })}${t(120, 174, "S", { s: 14 })}${t(196, 97, "E", { s: 14 })}${t(44, 97, "O", { s: 14 })}<circle cx="230" cy="92" r="14" fill="var(--sun)" fill-opacity=".8"/>${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => { const a = (i * Math.PI) / 4; return `<path d="M${(230 + Math.cos(a) * 18).toFixed(1)} ${(92 + Math.sin(a) * 18).toFixed(1)} L ${(230 + Math.cos(a) * 24).toFixed(1)} ${(92 + Math.sin(a) * 24).toFixed(1)}" stroke="var(--sun)" stroke-width="2"/>`; }).join("")}${t(230, 130, "sale por", { s: 9, c: "var(--sun)" })}${t(230, 142, "el este", { s: 9, c: "var(--sun)" })}`),
    },
    {
      html: `<h3>El mapa</h3><p>Un <b>mapa</b> es una representación reducida y simplificada del terreno visto desde arriba. Para interpretarlo hay que conocer:</p><ul><li><b>La escala</b>: indica cuántas veces se ha reducido la realidad. En un mapa a escala <b>1:10 000</b>, 1 cm del mapa son 10 000 cm (100 m) en la realidad.</li><li><b>La leyenda</b>: explica qué significa cada símbolo y color.</li><li><b>El norte</b>: casi siempre está en la parte de arriba del mapa.</li></ul>${tabla(["Color en mapas de orientación", "Significado"], [["Blanco", "bosque fácil de atravesar"], ["Verde", "vegetación densa (cuanto más oscuro, más difícil)"], ["Amarillo", "zona abierta, prado"], ["Azul", "agua: ríos, lagos, fuentes"], ["Marrón", "relieve: curvas de nivel"], ["Negro", "rocas, caminos, construcciones"]])}`,
    },
    {
      html: `<h3>Orientar el mapa</h3><p>Antes de leer el mapa hay que <b>orientarlo</b>: girarlo hasta que lo que ves en él coincida con lo que ves en la realidad.</p><ol><li><b>Por referencias</b>: identifica un elemento claro (un camino, un edificio) en el terreno y en el mapa, y gira el mapa hasta que estén en la misma dirección.</li><li><b>Con brújula</b>: coloca la brújula sobre el mapa y gira el mapa (no la brújula) hasta que el norte del mapa coincida con el norte que señala la aguja.</li></ol><p>Con el mapa orientado, si un camino del mapa va «hacia delante», en la realidad también irá hacia delante. Lleva el <b>pulgar</b> sobre el punto del mapa donde te encuentras y muévelo según avanzas.</p>`,
      svg: svg("Mapa girado hasta que su flecha del norte coincide con la aguja roja de la brújula", `<g transform="rotate(-20 110 92)"><rect x="40" y="30" width="140" height="124" rx="4" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/><path d="M50 130 Q 90 100 110 110 T 170 60" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 3"/><path d="M60 50 Q 80 60 70 80" fill="none" stroke="var(--inf)" stroke-width="3"/><rect x="130" y="110" width="30" height="24" fill="var(--leaf)" fill-opacity=".5"/><path d="M160 46 V 26 M154 34 L 160 26 L 166 34" stroke="var(--red)" stroke-width="2.5" fill="none"/>${t(160, 58, "N", { s: 10, c: "var(--red)" })}</g><circle cx="214" cy="120" r="30" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><g transform="rotate(-20 214 120)"><path d="M214 96 L 220 120 L 208 120 Z" fill="var(--red)"/><path d="M214 144 L 220 120 L 208 120 Z" fill="var(--muted)"/></g>${t(214, 166, "brújula", { s: 10 })}${t(60, 22, "mapa orientado", { s: 10, c: "var(--muted)" })}`, 182),
      video: vb("oriB"),
    },
    {
      html: `<h3>La brújula</h3><p>La <b>brújula</b> tiene una <b>aguja imantada</b> cuyo extremo de color (normalmente rojo) apunta siempre al <b>norte magnético</b>. La brújula de orientación tiene además:</p><ul><li>Una <b>base transparente</b> con regla, para medir en el mapa.</li><li>Una <b>flecha de dirección</b> que indica hacia dónde caminar.</li><li>Un <b>limbo</b> giratorio con los grados (de 0° a 360°) y las líneas del norte.</li></ul><p>Precauciones: mantenerla <b>horizontal</b> y lejos de objetos metálicos o imanes (el móvil, una hebilla, un coche), que desvían la aguja. Recuerda que la aguja no te dice dónde estás, solo dónde está el norte.</p>`,
    },
    {
      html: `<h3>La carrera de orientación</h3><p>La <b>carrera de orientación</b> es un deporte en el que hay que recorrer, con un mapa y una brújula, una serie de <b>controles</b> en un orden establecido y en el menor tiempo posible. Nació en los países nórdicos a finales del siglo XIX.</p><ul><li>Cada control se marca en el terreno con una <b>baliza</b>: un prisma de tela naranja y blanca.</li><li>En el mapa, la <b>salida</b> es un triángulo, los controles son círculos numerados y la <b>meta</b> un doble círculo.</li><li>Para demostrar que has pasado por un control, <b>picas</b> la tarjeta con una pinza o con un chip electrónico.</li><li>Gana quien completa el recorrido en menos tiempo, <b>sin saltarse ningún control</b>.</li></ul><p>No siempre gana el más rápido corriendo, sino quien elige la mejor ruta y no se pierde.</p>`,
      svg: svg("Recorrido de orientación: triángulo de salida, controles numerados del 1 al 4 unidos por líneas y doble círculo de meta, junto a una baliza naranja y blanca", `<path d="M40 140 L 46 128 L 52 140 Z" fill="none" stroke="var(--red)" stroke-width="2"/>${[[96, 112, 1], [150, 70, 2], [104, 40, 3], [60, 72, 4]].map(([x, y, n]) => `<circle cx="${x}" cy="${y}" r="9" fill="none" stroke="var(--red)" stroke-width="2"/>${t(x + 14, y - 8, String(n), { s: 10, c: "var(--red)" })}`).join("")}<circle cx="42" cy="100" r="8" fill="none" stroke="var(--red)" stroke-width="2"/><circle cx="42" cy="100" r="4" fill="none" stroke="var(--red)" stroke-width="2"/><path d="M49 132 L 88 116 M104 106 L 143 77 M142 64 L 112 45 M96 46 L 67 66 M57 80 L 46 93" stroke="var(--red)" stroke-width="1.5"/>${t(46, 156, "salida", { s: 9, c: "var(--muted)" })}${t(24, 100, "meta", { s: 9, c: "var(--muted)", a: "end" })}<path d="M200 50 L 236 50 L 218 90 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><path d="M200 50 L 236 50 L 218 70 Z" fill="var(--paper)"/><path d="M218 90 V 140" stroke="var(--ink)" stroke-width="2"/>${t(218, 158, "baliza", { s: 10 })}`, 170),
    },
    {
      html: `<h3>El senderismo</h3><p>El <b>senderismo</b> es caminar por la naturaleza siguiendo <b>senderos</b> señalizados. Es una actividad saludable, apta para casi todas las edades. En España los senderos se marcan con pintura en piedras, árboles y postes:</p>${tabla(["Tipo de sendero", "Señal", "Longitud"], [["GR (Gran Recorrido)", "franjas blanca y roja", "más de 50 km, varias etapas"], ["PR (Pequeño Recorrido)", "franjas blanca y amarilla", "entre 10 y 50 km, una jornada"], ["SL (Sendero Local)", "franjas blanca y verde", "menos de 10 km"]])}<p>Las marcas indican: dos franjas paralelas, <b>sigue</b>; franjas con un giro, <b>cambio de dirección</b>; un aspa, <b>dirección equivocada</b>.</p>`,
      svg: svg("Señales de sendero: continuidad con dos franjas, cambio de dirección con franjas en ángulo y dirección equivocada con un aspa", `${[[50, "sigue"], [130, "gira"], [210, "por aquí no"]].map(([x, n]) => `<rect x="${x - 34}" y="30" width="68" height="80" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${t(x, 136, n, { s: 11 })}`).join("")}<rect x="30" y="56" width="40" height="10" fill="var(--paper)" stroke="var(--line)"/><rect x="30" y="70" width="40" height="10" fill="var(--red)"/><path d="M112 62 H 140 V 46" fill="none" stroke="var(--line)" stroke-width="10"/><path d="M112 62 H 140 V 46" fill="none" stroke="var(--paper)" stroke-width="8"/><path d="M112 76 H 154 V 46" fill="none" stroke="var(--red)" stroke-width="10"/><path d="M190 50 L 230 90 M230 50 L 190 90" stroke="var(--red)" stroke-width="9"/><path d="M190 50 L 230 90" stroke="var(--paper)" stroke-width="4"/>${t(130, 164, "ejemplo: GR (blanca y roja)", { s: 10, c: "var(--muted)" })}`, 176),
      video: vb("oriB2"),
    },
    {
      html: `<h3>Preparar una salida</h3><ul><li><b>Planifica</b>: consulta la ruta, la distancia, el desnivel y el tiempo previsto (unos 4 km por hora en llano, más despacio con subidas).</li><li><b>Consulta el tiempo</b> y no salgas con aviso de tormenta.</li><li><b>Avisa</b> a alguien de tu recorrido y la hora de regreso. Nunca vayas solo.</li><li><b>Equipo</b>: calzado de montaña ya usado, ropa en capas, gorra, crema solar, chubasquero.</li><li><b>Mochila</b>: agua (al menos 1 litro), comida energética, botiquín, mapa, móvil cargado, silbato.</li><li><b>Ritmo</b>: el del más lento del grupo, con paradas cortas para beber.</li></ul><p>En caso de emergencia, el número es el <b>112</b>.</p>`,
    },
    {
      html: `<h3>Respetar la naturaleza</h3><p>Quien camina por la naturaleza es un invitado. Normas básicas:</p><ul><li><b>No dejar rastro</b>: lleva toda tu basura de vuelta, incluso restos orgánicos.</li><li>Ir <b>por los senderos</b> marcados, sin atajos que erosionan el suelo.</li><li><b>No hacer fuego</b> fuera de las zonas autorizadas.</li><li><b>No arrancar</b> plantas ni molestar a los animales.</li><li>Evitar gritos y música alta.</li><li><b>Cerrar las cancelas</b> de fincas y respetar el ganado.</li><li>Respetar a otros usuarios: ceder el paso al que sube.</li></ul><p>Cuidar el medio natural garantiza que otras personas puedan disfrutarlo después.</p>`,
    },
  ],
  figura: {
    titulo: "Orientación y senderismo en un vistazo",
    svg: filas("Resumen: puntos cardinales y el sol; mapa con escala, leyenda y colores; orientar el mapa con la brújula; carrera de orientación con balizas; senderos GR, PR y SL; preparar la salida y respetar la naturaleza", [["Orientarse", "N · S · E · O · sol · Polar", "var(--red)"], ["Mapa", "escala · leyenda · colores", "var(--leaf)"], ["Brújula", "aguja roja al norte", "var(--pen)"], ["Carrera", "balizas · controles · meta", "var(--sun)"], ["Senderos", "GR · PR · SL", "var(--inf)"], ["Seguridad", "planificar · 112 · no dejar rastro", "var(--ink)"]], 200),
  },
  video: vg("oriV"),
  quiz: mezcla([
    { q: "El sol sale aproximadamente por el…", o: ["este", "oeste", "norte"], a: 0, e: "Y se pone por el oeste." },
    { q: "De noche, el norte lo indica la…", o: ["estrella Polar", "Luna llena", "Osa Menor entera"], a: 0, e: "Prolongando la Osa Mayor." },
    { q: "En un mapa 1:10 000, 1 cm equivale a…", o: ["100 m", "10 m", "1 km"], a: 0, e: "10 000 cm." },
    { q: "La leyenda de un mapa explica…", o: ["el significado de los símbolos", "la historia del lugar", "la escala"], a: 0, e: "Símbolos y colores." },
    { q: "En los mapas de orientación, el azul representa…", o: ["agua", "vegetación", "caminos"], a: 0, e: "Ríos, lagos." },
    { q: "La aguja de la brújula apunta al…", o: ["norte magnético", "sur geográfico", "lugar donde estás"], a: 0, e: "Extremo rojo." },
    { q: "La baliza de orientación es de color…", o: ["naranja y blanco", "verde y negro", "azul y rojo"], a: 0, e: "Prisma de tela." },
    { q: "En el mapa de una carrera, la salida es un…", o: ["triángulo", "doble círculo", "cuadrado"], a: 0, e: "La meta es un doble círculo." },
    { q: "Un sendero GR se marca con franjas…", o: ["blanca y roja", "blanca y amarilla", "blanca y verde"], a: 0, e: "Gran Recorrido." },
    { q: "El número de emergencias en España es el…", o: ["112", "911", "010"], a: 0, e: "Europeo." },
  ]),
  examen: mezcla([
    { q: "Si a mediodía (en España) miras al sol, tienes el norte…", o: ["a tu espalda", "delante", "a tu derecha"], a: 0, e: "El sol está al sur." },
    { q: "Para orientar el mapa con la brújula se gira…", o: ["el mapa", "la aguja", "la brújula entera hasta que apunte a ti"], a: 0, e: "Norte del mapa = aguja." },
    { q: "Una marca en forma de aspa en un sendero significa…", o: ["dirección equivocada", "cambio de dirección", "continuidad"], a: 0, e: "Por aquí no." },
  ]),
  feynman: ["Cómo orientarse sin instrumentos", "Qué es la escala de un mapa", "Cómo se orienta el mapa con la brújula", "En qué consiste la carrera de orientación", "Cómo preparar una salida de senderismo segura"],
  mapa: mapa("ORIENTACIÓN", "var(--eso)", [
    ["Orientarse", "puntos cardinales · sol", "var(--red)"],
    ["Mapa y brújula", "escala · leyenda · norte", "var(--pen)"],
    ["Carrera", "balizas · controles", "var(--sun)"],
    ["Senderismo", "GR · PR · SL · respeto", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Puntos cardinales", "Norte, sur, este y oeste."],
    ["Escala", "Relación entre una distancia del mapa y la real."],
    ["Leyenda", "Explicación de los símbolos de un mapa."],
    ["Brújula", "Instrumento con una aguja imantada que señala el norte."],
    ["Orientar el mapa", "Girarlo hasta que coincida con el terreno."],
    ["Baliza", "Prisma naranja y blanco que marca un control."],
    ["Sendero GR", "Gran Recorrido; franjas blanca y roja."],
    ["No dejar rastro", "Volver con toda la basura y no alterar el medio."],
  ],
  familias: ["Haced juntos una ruta corta señalizada cerca de casa.", "Buscad el norte desde una ventana usando el sol.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Actividades en el medio natural: orientación con y sin instrumentos, interpretación de mapas, carrera de orientación, senderismo, seguridad y respeto al entorno (RD 217/2022, Educación Física, interacción eficiente y sostenible con el entorno).",
    ideas: ["Carrera de orientación en el centro con un plano del instituto.", "Salida de senderismo por un PR cercano.", "Juego de la estrella con balizas en el patio."],
  },
  fuentes: [RD, { t: "Federación Española de Orientación", url: "https://www.fedo.org/" }, { t: "Federación Española de Deportes de Montaña y Escalada: senderos", url: "https://www.fedme.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "En un mapa 1:10 000, dos controles están a 4 cm. ¿Qué distancia real los separa?", pasos: ["1 cm del mapa = 10 000 cm = 100 m.", "4 cm = 400 m."], resultado: "400 metros en línea recta." },
    { enunciado: "Son las 8 de la mañana y el sol está a tu derecha. ¿Hacia dónde miras?", pasos: ["Por la mañana el sol está hacia el este.", "Si el este está a tu derecha, delante tienes el norte."], resultado: "Miras al norte." },
    { enunciado: "Una ruta tiene 8 km en llano. ¿Cuánto tardaréis aproximadamente?", pasos: ["Ritmo medio en llano: unos 4 km por hora.", "8 : 4 = 2 horas.", "Añadid paradas: unas 2 horas y media."], resultado: "Unas 2 horas y media con descansos." },
  ],
  errores: [
    "Creer que el musgo siempre indica el norte.",
    "Girar la brújula en lugar del mapa para orientarlo.",
    "Usar la brújula junto al móvil u objetos metálicos.",
    "Saltarse un control en la carrera de orientación.",
    "Salir de ruta sin avisar a nadie ni consultar el tiempo.",
  ],
  ejercicios: [
    { q: "Escribe los cuatro puntos cardinales y los cuatro intermedios.", sol: "N, S, E, O; NE, SE, SO, NO." },
    { q: "Explica dos formas de orientarse sin brújula.", sol: "Con el sol (sale por el este) y con la estrella Polar (norte)." },
    { q: "¿Qué significa una escala 1:5 000?", sol: "1 cm en el mapa son 5 000 cm (50 m) en la realidad." },
    { q: "Indica qué significan los colores azul, verde y amarillo en un mapa de orientación.", sol: "Agua, vegetación densa, zona abierta." },
    { q: "Describe cómo se orienta un mapa con la brújula.", sol: "Brújula sobre el mapa; girar el mapa hasta que su norte coincida con la aguja." },
    { q: "¿Qué precauciones hay que tener con la brújula?", sol: "Horizontal y lejos de metales e imanes." },
    { q: "Explica en qué consiste la carrera de orientación.", sol: "Recorrer controles en orden con mapa y brújula en el menor tiempo." },
    { q: "Diferencia los senderos GR, PR y SL.", sol: "GR: blanco y rojo, más de 50 km; PR: blanco y amarillo, 10-50 km; SL: blanco y verde, menos de 10 km." },
    { q: "Haz una lista del material para una ruta de un día.", sol: "Agua, comida, botiquín, mapa, móvil, chubasquero, gorra, crema, silbato." },
    { q: "Escribe cinco normas para respetar la naturaleza.", sol: "No dejar basura, ir por los senderos, no hacer fuego, no arrancar plantas, no gritar." },
  ],
};
