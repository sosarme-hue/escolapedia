// Educación Física 3º ESO: actividades en el medio natural y orientación. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, caja, tabla, filas, mezcla } = require("./_eso3");

const M = "Educación Física";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Actividades en el medio natural y orientación",
  minutos: 50,
  objetivos: ["Conocer las actividades físicas en el medio natural y sus beneficios", "Interpretar un mapa de orientación: escala, leyenda y colores", "Orientar el mapa y usar la brújula para seguir un rumbo", "Planificar una salida con seguridad y respeto al entorno"],
  claves: ["orientación", "mapa", "brújula", "escala", "rumbo", "senderismo"],
  pregunta: {
    texto: "Si te perdieras en el monte sin cobertura en el móvil, ¿sabrías volver con un mapa y una brújula?",
    respuesta: "Con lo que aprenderás en este tema, sí. La <mark>brújula</mark> siempre señala el norte magnético, así que permite <b>orientar el mapa</b> como el terreno y seguir un <b>rumbo</b>. La carrera de orientación convierte esta habilidad en un deporte que combina correr y pensar.",
  },
  bloques: [
    {
      html: `<h3>Actividades en el medio natural</h3><p>Son actividades físicas que se realizan en <b>entornos naturales</b>: montaña, bosque, ríos, mar o el campo cercano. Algunas:</p><ul><li><b>Senderismo</b>: caminar por senderos señalizados. Los de gran recorrido (GR) se marcan con franjas blancas y rojas; los de pequeño recorrido (PR), con blancas y amarillas; los senderos locales (SL), con blancas y verdes.</li><li><b>Orientación</b>: recorrer un itinerario con mapa y brújula.</li><li><b>Escalada</b>, <b>barranquismo</b>, <b>bicicleta de montaña</b>, <b>piragüismo</b>, <b>vela</b>, <b>esquí</b>.</li><li><b>Acampada</b> y actividades de supervivencia básica.</li></ul><p>Además de mejorar la condición física, desarrollan la <b>autonomía</b>, la cooperación y el aprecio por la naturaleza.</p>`,
    },
    {
      html: `<h3>El mapa de orientación</h3><p>Un <b>mapa</b> es una representación reducida y simplificada del terreno visto desde arriba. Los de orientación son muy detallados y siguen colores normalizados:</p>${tabla(["Color", "Significa"], [["<b>Blanco</b>", "bosque limpio, fácil de correr"], ["<b>Verde</b>", "vegetación espesa (cuanto más oscuro, más difícil)"], ["<b>Amarillo</b>", "zona abierta: prado, claro"], ["<b>Azul</b>", "agua: ríos, lagos, fuentes"], ["<b>Marrón</b>", "relieve: curvas de nivel, taludes"], ["<b>Negro</b>", "rocas, caminos, edificios, vallas"]])}<p>Las <b>curvas de nivel</b> unen puntos de la misma altura: si están juntas, la pendiente es fuerte; si están separadas, es suave.</p>`,
    },
    {
      html: `<h3>La escala</h3><p>La <b>escala</b> indica cuántas veces se ha reducido el terreno. En un mapa a <mark>1:10.000</mark>, 1 cm del mapa equivale a 10.000 cm, es decir, <b>100 m</b> en la realidad. Los mapas de orientación escolar suelen ser a 1:5.000 (1 cm = 50 m) o 1:10.000.</p><p>Para calcular una distancia real: medir en el mapa y multiplicar por la escala. Si entre dos controles hay 3,5 cm en un mapa 1:10.000: 3,5 · 100 = <b>350 m</b>.</p><p>Un truco para medir sobre el terreno es contar los <b>pasos dobles</b> (cada vez que apoyas el mismo pie): calibra cuántos das en 100 m (unos 60-65 caminando) y así sabrás cuánto has avanzado.</p>`,
    },
    {
      html: `<h3>La brújula</h3><p>La <b>brújula</b> tiene una <b>aguja imantada</b> que apunta siempre al <mark>norte magnético</mark>, normalmente con su extremo rojo. La brújula de orientación (de placa) tiene:</p><ul><li><b>Placa base</b> transparente con regla y una <b>flecha de dirección</b>.</li><li><b>Limbo</b> giratorio graduado de 0° a 360° con líneas meridianas.</li><li><b>Flecha norte</b> dibujada en el fondo del limbo.</li></ul><p>Precauciones: mantenerla horizontal y lejos de objetos metálicos o imanes (el móvil, una hebilla), que desvían la aguja. En España, la diferencia entre el norte magnético y el geográfico es pequeña y, para orientarse en la escuela, no se tiene en cuenta.</p>`,
      svg: svg("Brújula de placa con aguja imantada apuntando al norte, limbo graduado y flecha de dirección", `<rect x="80" y="14" width="100" height="156" rx="10" fill="var(--water)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><path d="M130 22 L 140 44 H 120 Z" fill="var(--pen)"/><path d="M130 44 V 58" stroke="var(--pen)" stroke-width="2"/>
        <circle cx="130" cy="110" r="42" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>${[0, 90, 180, 270].map((a, i) => { const r = 34, x = 130 + r * Math.sin(a * Math.PI / 180), y = 110 - r * Math.cos(a * Math.PI / 180); return t(x.toFixed(1), (y + 4).toFixed(1), ["N", "E", "S", "O"][i], { s: 10, c: i === 0 ? "var(--red)" : "var(--ink)" }); }).join("")}
        <path d="M130 84 L 136 110 L 124 110 Z" fill="var(--red)"/><path d="M130 136 L 136 110 L 124 110 Z" fill="var(--muted)"/><circle cx="130" cy="110" r="3" fill="var(--ink)"/>
        ${t(202, 36, "dirección", { c: "var(--pen)", s: 10, a: "start" })}${t(202, 50, "de marcha", { c: "var(--pen)", s: 10, a: "start" })}${t(40, 90, "aguja:", { c: "var(--red)", s: 10 })}${t(40, 104, "rojo = N", { c: "var(--red)", s: 10 })}${t(40, 150, "limbo", { c: "var(--ink)", s: 10 })}`),
      video: { id: "FCkgs7YxHXs", titulo: "Aprende a orientarte: cómo usar una brújula", canal: "SIKANA Español", vistas: 543028, megusta: 0 },
    },
    {
      html: `<h3>Orientar el mapa</h3><p><b>Orientar el mapa</b> es girarlo para que <mark>coincida con el terreno</mark>: lo que está a tu derecha en la realidad debe estar a tu derecha en el mapa. Es lo primero que hay que hacer, y se repite cada vez que cambias de dirección.</p><ul><li><b>Con brújula</b>: coloca la brújula sobre el mapa y gira el mapa (no la brújula) hasta que las líneas norte del mapa queden paralelas a la aguja, con el norte del mapa hacia el extremo rojo.</li><li><b>Con referencias del terreno</b>: identifica elementos claros (un camino, un río, un edificio) y gira el mapa hasta que coincidan con lo que ves.</li></ul><p>Con el mapa orientado, se utiliza la técnica del <b>pulgar</b>: el dedo marca en el mapa dónde estás y avanza contigo.</p>`,
    },
    {
      html: `<h3>Seguir un rumbo</h3><p>Cuando no hay caminos, se sigue un <b>rumbo</b> (o azimut): el ángulo entre el norte y la dirección hacia la que quieres ir, medido en el sentido de las agujas del reloj.</p><ol><li>Coloca el borde de la placa uniendo tu posición con el destino, con la flecha de dirección hacia el destino.</li><li>Gira el limbo hasta que sus líneas norte sean paralelas a las del mapa (norte con norte).</li><li>Levanta la brújula, mantenla horizontal frente a ti y gira tu cuerpo hasta que la aguja roja coincida con la flecha norte del limbo.</li><li>Camina en la dirección de la flecha de dirección, eligiendo un punto de referencia lejano y avanzando hacia él.</li></ol>`,
      svg: svg("Rumbo: ángulo medido desde el norte en el sentido de las agujas del reloj; 90 grados es el este", `<circle cx="120" cy="96" r="64" fill="none" stroke="var(--line)" stroke-width="2"/><path d="M120 96 V 26" stroke="var(--red)" stroke-width="2.5"/><path d="M120 96 L 170 46" stroke="var(--pen)" stroke-width="3"/><path d="M120 66 A 30 30 0 0 1 141 75" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>
        ${t(120, 18, "N 0°", { c: "var(--red)", s: 11 })}${t(198, 100, "E 90°", { s: 10 })}${t(120, 176, "S 180°", { s: 10 })}${t(40, 100, "O 270°", { s: 10 })}${t(134, 50, "45°", { c: "var(--leaf)", s: 11 })}${t(206, 40, "rumbo", { c: "var(--pen)", s: 11 })}`),
    },
    {
      html: `<h3>La carrera de orientación</h3><p>Es un deporte en el que hay que pasar por una serie de <b>controles</b> (balizas naranjas y blancas) marcados en el mapa, en el orden indicado y en el menor tiempo posible.</p><ul><li>En el mapa, la <b>salida</b> se marca con un triángulo, los controles con <b>círculos</b> numerados y la <b>meta</b> con un doble círculo.</li><li>En cada control se marca la tarjeta con una pinza o con un chip electrónico.</li><li>Gana quien completa el recorrido correcto en menos tiempo: importa más <b>elegir bien la ruta</b> que correr mucho.</li></ul><p>En el centro se empieza con <b>orientación en el patio</b> o en un parque cercano, con mapas sencillos y por parejas.</p>`,
      video: { id: "IF3pDu2xdZI", titulo: "Aprende a orientarte con un mapa y una brújula", canal: "Cápsulas Formativas - EEAM - FEDME", vistas: 149668, megusta: 0 },
    },
    {
      html: `<h3>Seguridad en el medio natural</h3><ul><li><b>Planificar</b>: consultar la ruta, su distancia y desnivel, y la previsión del tiempo. Calcula unas 4 km/h en llano y añade una hora por cada 400 m de subida.</li><li><b>Avisar</b> a alguien del recorrido y la hora de regreso. No ir nunca solo.</li><li><b>Equipo</b>: calzado adecuado, ropa por capas, gorra, protección solar, agua, comida, botiquín, mapa, brújula, móvil cargado y silbato.</li><li><b>Retirarse a tiempo</b> si empeora el tiempo o alguien se encuentra mal.</li><li>Si te pierdes: <b>para</b>, mantén la calma, vuelve al último punto conocido o quédate en un lugar visible.</li></ul><p>El teléfono de emergencias en toda Europa es el <mark>112</mark>.</p>`,
    },
    {
      html: `<h3>Respeto al entorno</h3><p>Disfrutar de la naturaleza implica protegerla. Las normas de <b>«no dejar rastro»</b>:</p><ul><li>Llevarse <b>toda la basura</b>, incluidos los restos orgánicos.</li><li>Caminar por los <b>senderos</b> marcados para no dañar la vegetación ni provocar erosión.</li><li>No hacer <b>fuego</b> fuera de las zonas habilitadas: el riesgo de incendio es muy alto en verano.</li><li>No molestar a los <b>animales</b> ni arrancar plantas.</li><li>Respetar las propiedades, los <b>pasos de ganado</b> y cerrar las cancelas.</li><li>Hablar en voz baja y no poner música alta.</li></ul><p>En los <b>espacios naturales protegidos</b> (parques nacionales y naturales) hay normas específicas que conviene consultar antes.</p>`,
    },
  ],
  figura: {
    titulo: "Orientarse en la naturaleza",
    svg: filas("Mapa con escala y colores; brújula con aguja al norte; orientar el mapa como el terreno; rumbo desde el norte en sentido horario; seguridad con el 112 y respeto al entorno", [["Mapa", "escala 1:10.000 (1 cm = 100 m) · colores", "var(--leaf)"], ["Brújula", "aguja roja al norte magnético · horizontal", "var(--red)"], ["Orientar", "girar el mapa hasta que coincida con el terreno", "var(--pen)"], ["Rumbo", "ángulo desde el norte en sentido horario", "var(--inf)"], ["Seguridad", "planificar · avisar · equipo · 112 · no dejar rastro", "var(--ink)"]], 180),
  },
  video: { id: "fxAviwUrtRw", titulo: "Aprende a leer mapas y usar la brújula", canal: "Rekarte", vistas: 362811, megusta: 0, busqueda: "orientación deportiva brújula mapa" },
  quiz: mezcla([
    { q: "Los senderos de gran recorrido (GR) se señalizan con franjas…", o: ["blancas y rojas", "blancas y amarillas", "blancas y verdes"], a: 0, e: "PR: amarillas; SL: verdes." },
    { q: "En un mapa de orientación, el color azul indica…", o: ["agua", "vegetación espesa", "caminos"], a: 0, e: "Ríos, lagos." },
    { q: "Las curvas de nivel muy juntas indican…", o: ["pendiente fuerte", "terreno llano", "un río"], a: 0, e: "Mucho desnivel." },
    { q: "En un mapa 1:10.000, 1 cm equivale a…", o: ["100 m", "10 m", "1 km"], a: 0, e: "10.000 cm." },
    { q: "La aguja de la brújula señala el…", o: ["norte magnético", "sur geográfico", "este"], a: 0, e: "Extremo rojo." },
    { q: "Orientar el mapa significa…", o: ["girarlo para que coincida con el terreno", "ponerlo siempre con el norte arriba sin mirar", "doblarlo"], a: 0, e: "Primera acción." },
    { q: "Un rumbo de 90° apunta al…", o: ["este", "norte", "oeste"], a: 0, e: "Sentido horario desde el norte." },
    { q: "En la carrera de orientación, los controles se marcan en el mapa con…", o: ["círculos", "cuadrados", "estrellas"], a: 0, e: "Salida: triángulo." },
    { q: "El teléfono de emergencias en Europa es el…", o: ["112", "091", "010"], a: 0, e: "Gratuito." },
    { q: "Si te pierdes en el monte, lo primero es…", o: ["parar y mantener la calma", "correr hacia cualquier lado", "separarte del grupo"], a: 0, e: "Pensar antes de moverse." },
  ]),
  examen: mezcla([
    { q: "En un mapa 1:5.000, 4 cm representan…", o: ["200 m", "20 m", "2 km"], a: 0, e: "4 · 50 m." },
    { q: "Un rumbo de 225° apunta al…", o: ["suroeste", "noreste", "sureste"], a: 0, e: "Entre S (180°) y O (270°)." },
    { q: "Para calcular el tiempo de una ruta se añade una hora por cada…", o: ["400 m de subida", "100 m de bajada", "10 km llanos"], a: 0, e: "Y unos 4 km/h en llano." },
  ]),
  feynman: ["Cómo se interpreta un mapa: escala, colores y curvas de nivel", "Cómo se orienta el mapa con brújula", "Qué es un rumbo y cómo se sigue", "Normas de seguridad y respeto en el medio natural"],
  mapa: mapa("ORIENTACIÓN", "var(--eso)", [
    ["Mapa", "escala · colores", "var(--leaf)"],
    ["Brújula", "aguja al norte", "var(--red)"],
    ["Rumbo", "grados desde N", "var(--pen)"],
    ["Seguridad", "112 · no dejar rastro", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Escala 1:10.000", "1 cm del mapa = 100 m reales."],
    ["Curvas de nivel", "Líneas que unen puntos de igual altura."],
    ["Verde en el mapa", "Vegetación espesa, difícil de atravesar."],
    ["Brújula", "Su aguja roja señala el norte magnético."],
    ["Orientar el mapa", "Girarlo para que coincida con el terreno."],
    ["Rumbo", "Ángulo desde el norte en sentido horario."],
    ["Paso doble", "Medida de distancia contando cada apoyo del mismo pie."],
    ["No dejar rastro", "Llevarse la basura y no dañar el entorno."],
  ],
  familias: ["Planificad una ruta corta por un espacio natural cercano revisando mapa, tiempo y equipo.", "Practicad a orientar el plano del barrio con una brújula del móvil o una real.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Actividades físicas en el medio natural: senderismo y señalización, orientación (mapa, escala, colores, curvas de nivel, brújula, orientar el mapa, rumbo), carrera de orientación, seguridad, planificación y conservación del entorno (RD 217/2022, Educación Física).",
    ideas: ["Carrera de orientación en el centro con mapa a 1:1.000 hecho por el alumnado.", "Calibrar el paso doble en una recta de 100 m.", "Salida de senderismo con roles: navegante, cronometrador, botiquín."],
  },
  fuentes: [RD, { t: "FEDME: senderos homologados y seguridad en montaña", url: "https://www.fedme.es/" }, { t: "Federación Española de Orientación", url: "https://www.fedo.org/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Casos prácticos",
  ejemplos: [
    { enunciado: "En un mapa 1:10.000, la distancia entre la salida y el control 1 es de 2,8 cm. ¿Cuántos metros y cuántos pasos dobles hay si das 62 en 100 m?",
      pasos: ["Distancia real: 2,8 · 100 = 280 m.", "Pasos: 280 / 100 · 62 = 173,6.", "Unos 174 pasos dobles."],
      resultado: "280 m, unos 174 pasos dobles." },
    { enunciado: "Calcula cuánto durará una ruta de 12 km con 800 m de subida.",
      pasos: ["Horizontal: 12 km / 4 km/h = 3 h.", "Subida: 800 / 400 = 2 h.", "Se suma el mayor y la mitad del menor (método habitual): 3 + 1 = 4 h."],
      resultado: "Unas 4 horas sin contar paradas." },
    { enunciado: "Quieres ir de la fuente a la roca grande y el rumbo es 120°. ¿Cómo lo sigues?",
      pasos: ["Gira el limbo hasta que 120° quede junto a la flecha de dirección.", "Sostén la brújula horizontal y gira tú hasta que la aguja roja coincida con la flecha norte del limbo.", "Elige un árbol lejano en la dirección de la flecha y camina hasta él; repite."],
      resultado: "Avanzas al sureste con referencias intermedias." },
  ],
  errores: [
    "Llevar el mapa siempre con el norte arriba sin orientarlo.",
    "Usar la brújula cerca del móvil o de objetos metálicos.",
    "Girar la brújula en lugar del mapa al orientarlo.",
    "Confundir la escala: tomar 1 cm por 10 m en un mapa 1:10.000.",
    "Salir sin avisar a nadie ni consultar el tiempo.",
    "Dejar basura orgánica pensando que «no contamina».",
  ],
  ejercicios: [
    { q: "Nombra cinco actividades en el medio natural.", sol: "Senderismo, orientación, escalada, bicicleta de montaña, piragüismo (también acampada, esquí, vela)." },
    { q: "¿Qué significan los colores verde, amarillo y marrón en un mapa de orientación?", sol: "Verde: vegetación espesa. Amarillo: zona abierta. Marrón: relieve." },
    { q: "En un mapa 1:5.000, ¿cuántos metros representan 6 cm?", sol: "6 · 50 = 300 m." },
    { q: "Dos controles están a 450 m. ¿Cuántos centímetros los separan en un mapa 1:10.000?", sol: "450 / 100 = 4,5 cm." },
    { q: "¿Qué rumbo corresponde al oeste? ¿Y al noreste?", sol: "Oeste: 270°. Noreste: 45°." },
    { q: "Explica los pasos para orientar el mapa con la brújula.", sol: "Poner la brújula sobre el mapa y girar el mapa hasta que sus líneas norte queden paralelas a la aguja, con el norte del mapa hacia el extremo rojo." },
    { q: "¿Qué indican unas curvas de nivel muy separadas?", sol: "Terreno con poca pendiente, casi llano." },
    { q: "Haz la lista del equipo para una excursión de un día.", sol: "Calzado adecuado, ropa por capas, gorra, crema solar, agua, comida, botiquín, mapa, brújula, móvil cargado, silbato." },
    { q: "¿Qué harías si te pierdes durante una salida?", sol: "Parar, mantener la calma, intentar volver al último punto conocido o quedarse en un lugar visible, y llamar al 112 si es necesario." },
    { q: "Diseña una carrera de orientación de 5 controles en el patio del centro: mapa, controles y normas.", sol: "Respuesta abierta; debe incluir un mapa con escala y leyenda, salida en triángulo, controles numerados en círculo y meta en doble círculo." },
  ],
};
