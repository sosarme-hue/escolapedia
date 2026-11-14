// Educación Física 2º ESO: actividades en la naturaleza. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Actividades en la naturaleza",
  minutos: 45,
  objetivos: ["Conocer las actividades físicas en el medio natural", "Orientarse con mapa, brújula y referencias naturales", "Preparar una salida con seguridad y el material adecuado", "Respetar el entorno siguiendo el principio de «no dejar rastro»"],
  claves: ["medio natural", "senderismo", "orientación", "mapa", "brújula", "señales GR y PR", "no dejar rastro"],
  pregunta: {
    texto: "Si te pierdes en el monte sin móvil, ¿cómo podrías saber dónde está el norte?",
    respuesta: "Con el <b>sol</b>: sale aproximadamente por el este y se pone por el oeste, y a mediodía, en España, está hacia el <b>sur</b>. De noche, la <b>estrella Polar</b> indica el norte. Pero lo más fiable es llevar <mark>mapa y brújula</mark> y saber usarlos.",
  },
  bloques: [
    {
      html: `<h3>Actividades en el medio natural</h3><p>Son actividades físicas que se realizan en la naturaleza (montaña, bosque, río, mar). Algunas de ellas:</p><ul><li><b>Senderismo</b>: caminar por senderos señalizados.</li><li><b>Carrera de orientación</b>: recorrer unos puntos de control con mapa y brújula.</li><li><b>Escalada</b> y rocódromo.</li><li><b>Bicicleta de montaña</b>.</li><li><b>Piragüismo</b>, vela, surf.</li><li><b>Acampada</b> y juegos en el entorno.</li></ul><p>Mejoran la condición física, enseñan a <mark>valorar y cuidar el entorno</mark> y fomentan la cooperación y la autonomía.</p>`,
    },
    {
      html: `<h3>El senderismo y sus señales</h3><p>En España los senderos homologados se marcan con <b>pintura</b> en árboles y piedras:</p>${tabla(["Tipo", "Colores", "Longitud"], [["GR (Gran Recorrido)", "blanco y rojo", "más de 50 km, varias etapas"], ["PR (Pequeño Recorrido)", "blanco y amarillo", "entre 10 y 50 km, una jornada"], ["SL (Sendero Local)", "blanco y verde", "menos de 10 km"]])}<p>Las señales indican: <b>continuidad</b> (dos rayas paralelas), <b>cambio de dirección</b> (rayas con forma de esquina) y <b>dirección equivocada</b> (aspa).</p>`,
      svg: svg("Señales de sendero: dos rayas paralelas para continuar, dos rayas en esquina para girar y un aspa para dirección equivocada", `${[["continuar", 50], ["girar", 130], ["no es por aquí", 210]].map(([n, x]) => `<rect x="${x - 34}" y="30" width="68" height="80" rx="8" fill="var(--card)" stroke="var(--line)"/>${t(x, 140, n, { s: 11 })}`).join("")}
        <rect x="30" y="54" width="40" height="10" fill="#fff" stroke="var(--muted)" stroke-width=".6"/><rect x="30" y="68" width="40" height="10" fill="var(--red)"/>
        <path d="M110 54 H 146 V 84" fill="none" stroke="#fff" stroke-width="9"/><path d="M110 54 H 146 V 84" fill="none" stroke="var(--muted)" stroke-width=".6"/><path d="M110 68 H 132 V 90" fill="none" stroke="var(--red)" stroke-width="9"/>
        <path d="M192 52 L 228 88" stroke="#fff" stroke-width="9"/><path d="M192 52 L 228 88" stroke="var(--muted)" stroke-width=".6"/><path d="M228 52 L 192 88" stroke="var(--red)" stroke-width="9"/>${t(130, 168, "ejemplo con colores de GR", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>El mapa</h3><p>Un <b>mapa</b> es una representación reducida y simplificada del terreno visto desde arriba. Hay que conocer:</p><ul><li><b>Escala</b>: relación entre la distancia en el mapa y la real. En escala 1:10 000, 1 cm del mapa son 10 000 cm = <b>100 m</b> reales.</li><li><b>Leyenda</b>: explica los símbolos y colores (en mapas de orientación: amarillo, zona abierta; blanco, bosque fácil de correr; verde, vegetación difícil; azul, agua; marrón, relieve; negro, rocas y caminos).</li><li><b>Norte</b>: las líneas norte del mapa apuntan hacia arriba.</li><li><b>Curvas de nivel</b>: líneas que unen puntos a la misma altura; si están juntas, la pendiente es fuerte.</li></ul><p>Lo primero al usar un mapa es <mark>orientarlo</mark>: girarlo para que su norte coincida con el norte real.</p>`,
    },
    {
      html: `<h3>La brújula</h3><p>La <b>brújula</b> tiene una aguja imantada que siempre señala el <b>norte magnético</b>. La de orientación es una brújula de placa:</p><ol><li>Coloca el borde de la placa uniendo dónde estás y adónde vas en el mapa.</li><li>Gira el limbo (la rueda) hasta que sus líneas queden paralelas a las líneas norte del mapa.</li><li>Quita el mapa, sujeta la brújula horizontal y gira tu cuerpo hasta que la aguja roja coincida con la flecha del limbo.</li><li>La flecha de dirección de la placa te indica hacia dónde caminar.</li></ol>`,
      svg: svg("Brújula de placa con el limbo graduado, la aguja apuntando al norte y la flecha de dirección", `<rect x="80" y="14" width="100" height="152" rx="10" fill="var(--pen)" fill-opacity=".1" stroke="var(--pen)" stroke-width="2"/><path d="M130 22 L 138 40 H 122 Z" fill="var(--pen)"/><circle cx="130" cy="104" r="44" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${Array.from({ length: 12 }, (_, i) => { const a = (i * 30 * Math.PI) / 180; return `<path d="M${(130 + 40 * Math.sin(a)).toFixed(1)} ${(104 - 40 * Math.cos(a)).toFixed(1)} L ${(130 + 34 * Math.sin(a)).toFixed(1)} ${(104 - 34 * Math.cos(a)).toFixed(1)}" stroke="var(--muted)" stroke-width="1.5"/>`; }).join("")}
        <path d="M130 70 L 136 104 H 124 Z" fill="var(--red)"/><path d="M130 138 L 136 104 H 124 Z" fill="var(--muted)"/>${t(130, 76, "N", { c: "var(--red)", s: 12 })}${t(212, 40, "dirección", { c: "var(--pen)", s: 11 })}${t(212, 108, "limbo", { s: 11 })}${t(48, 80, "aguja", { c: "var(--red)", s: 11 })}`),
      video: { id: "FCkgs7YxHXs", titulo: "Aprende a orientarte: cómo usar una brújula", canal: "SIKANA Español", vistas: 543028 },
    },
    {
      html: `<h3>Orientación sin brújula</h3><ul><li><b>El sol</b>: sale por el este, se pone por el oeste y a mediodía está al sur (en el hemisferio norte).</li><li><b>Método del reloj</b>: apunta la aguja de las horas al sol; la bisectriz entre ella y las 12 (las 13 en horario de verano) señala aproximadamente el sur.</li><li><b>La estrella Polar</b>: prolongando cinco veces la distancia entre las dos estrellas del extremo de la Osa Mayor se llega a ella; indica el norte.</li><li><b>Referencias del terreno</b>: ríos, picos, caminos, edificios que aparecen en el mapa.</li></ul><p>El musgo en los árboles <b>no es fiable</b>: crece donde hay humedad y sombra, que depende del lugar.</p>`,
    },
    {
      html: `<h3>La carrera de orientación</h3><p>Es un deporte en el que hay que pasar por una serie de <b>controles</b> marcados en el mapa, en el orden indicado y en el menor tiempo. En el terreno, cada control es una <b>baliza</b> naranja y blanca con una pinza o un sistema electrónico para registrar el paso.</p><p>En el instituto se empieza con <b>orientación en el patio</b> o en un parque: un plano sencillo, balizas con letras y una tarjeta para anotarlas.</p>`,
      video: { id: "jRcP5mrMNKw", titulo: "Uso de la brújula: Educación Física y orientación", canal: "Juan Expósito", vistas: 23507 },
    },
    {
      html: `<h3>Prepara una salida segura</h3>${tabla(["Antes", "Durante"], [["consultar la previsión del tiempo", "ir en grupo, nunca solo"], ["elegir una ruta adecuada al nivel", "seguir el sendero marcado"], ["avisar a alguien de la ruta y la hora de regreso", "ritmo del más lento del grupo"], ["mochila: agua, comida, gorra, crema solar, chubasquero, botiquín", "beber a menudo y descansar"], ["calzado de montaña ya usado", "si hay tormenta, bajar de las cumbres"]])}<p>En caso de emergencia, el teléfono es el <b>112</b>. Conviene llevar el móvil cargado aunque no se use.</p>`,
      svg: svg("Mochila de salida: agua, comida, gorra, crema, chubasquero, botiquín, mapa y teléfono 112", chips([["Agua y comida", "beber antes de tener sed", "var(--pen)"], ["Protección", "gorra · crema · chubasquero", "var(--sun)"], ["Seguridad", "botiquín · mapa · móvil cargado", "var(--leaf)"], ["Emergencias", "llamar al 112", "var(--red)"]], 8, 36), 180),
    },
    {
      html: `<h3>No dejar rastro</h3><p>El medio natural es de todos y frágil. Principios para cuidarlo:</p><ul><li>Llévate tu <b>basura</b> de vuelta (también restos orgánicos como pieles de fruta).</li><li>No salgas de los <b>senderos</b>: evitas la erosión.</li><li>No arranques plantas ni molestes a los <b>animales</b>.</li><li>No hagas <b>fuego</b> fuera de las zonas permitidas: riesgo de incendio.</li><li>Respeta el <b>silencio</b>: es el hogar de muchos seres vivos.</li><li>Deja todo como lo encontraste.</li></ul>`,
    },
  ],
  figura: {
    titulo: "Actividades en la naturaleza",
    svg: filas("Resumen: actividades, señales de sendero, mapa, brújula, seguridad y cuidado del entorno", [["Actividades", "senderismo · orientación · escalada · bici", "var(--leaf)"], ["Señales", "GR blanco-rojo · PR blanco-amarillo · SL", "var(--red)"], ["Mapa", "escala · leyenda · curvas de nivel", "var(--sun)"], ["Brújula", "aguja al norte · orientar el mapa", "var(--pen)"], ["Seguridad", "en grupo · avisar · mochila · 112", "var(--inf)"], ["Entorno", "no dejar rastro", "var(--ink)"]], 200),
  },
  video: { id: "jRcP5mrMNKw", titulo: "Uso de la brújula: Educación Física y orientación", canal: "Juan Expósito", vistas: 23507, megusta: 0, busqueda: "orientación brújula educación física" },
  quiz: mezcla([
    { q: "Un sendero GR se marca con los colores…", o: ["blanco y rojo", "blanco y amarillo", "blanco y verde"], a: 0, e: "Gran Recorrido." },
    { q: "Un PR se marca con…", o: ["blanco y amarillo", "blanco y rojo", "azul"], a: 0, e: "Pequeño Recorrido." },
    { q: "Un aspa en el sendero significa…", o: ["dirección equivocada", "continuar", "girar"], a: 0, e: "No es por aquí." },
    { q: "En escala 1:10 000, 1 cm del mapa son…", o: ["100 m", "10 m", "1 km"], a: 0, e: "10 000 cm." },
    { q: "Si las curvas de nivel están muy juntas, la pendiente es…", o: ["fuerte", "suave", "nula"], a: 0, e: "Mucho desnivel en poco espacio." },
    { q: "La aguja de la brújula señala el norte…", o: ["magnético", "del mapa siempre", "sur"], a: 0, e: "Imán terrestre." },
    { q: "A mediodía en España, el sol está hacia el…", o: ["sur", "norte", "este"], a: 0, e: "Hemisferio norte." },
    { q: "¿Es fiable el musgo para orientarse?", o: ["no", "sí, siempre", "solo en verano"], a: 0, e: "Depende de humedad y sombra." },
    { q: "El teléfono de emergencias es el…", o: ["112", "091", "010"], a: 0, e: "En toda la UE." },
    { q: "Las pieles de fruta en el monte…", o: ["hay que llevárselas", "se pueden tirar", "abonan siempre"], a: 0, e: "No dejar rastro." },
  ]),
  examen: mezcla([
    { q: "En un mapa de orientación, el color verde indica…", o: ["vegetación difícil de atravesar", "agua", "zona abierta"], a: 0, e: "Leyenda de orientación." },
    { q: "Lo primero al usar un mapa es…", o: ["orientarlo al norte real", "doblarlo", "medir la escala"], a: 0, e: "Que coincida con el terreno." },
    { q: "Un SL (Sendero Local) mide…", o: ["menos de 10 km", "más de 50 km", "entre 10 y 50 km"], a: 0, e: "Blanco y verde." },
  ]),
  feynman: ["Qué actividades se hacen en el medio natural", "Las señales GR, PR y SL", "Escala, leyenda y curvas de nivel", "Cómo se usa una brújula", "Normas de seguridad y de no dejar rastro"],
  mapa: mapa("NATURALEZA", "var(--eso)", [
    ["Senderismo", "GR · PR · SL", "var(--red)"],
    ["Orientación", "mapa · brújula", "var(--pen)"],
    ["Seguridad", "grupo · mochila · 112", "var(--inf)"],
    ["Entorno", "no dejar rastro", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["GR", "Gran Recorrido: blanco y rojo, más de 50 km."],
    ["PR", "Pequeño Recorrido: blanco y amarillo, 10-50 km."],
    ["Escala", "Relación entre distancia en el mapa y real."],
    ["Leyenda", "Explicación de símbolos y colores del mapa."],
    ["Curvas de nivel", "Líneas que unen puntos de igual altura."],
    ["Brújula", "Aguja imantada que señala el norte magnético."],
    ["Baliza", "Marca naranja y blanca de un control de orientación."],
    ["No dejar rastro", "Dejar el entorno como lo encontramos."],
  ],
  familias: ["Planificad una ruta corta señalizada (SL o PR) para el fin de semana.", "Buscad en un mapa de vuestra zona la escala y las curvas de nivel.", "Preparad juntos la mochila de una salida."],
  profesores: {
    saberes: "Actividades físico-deportivas en el medio natural: senderismo, orientación con mapa y brújula, planificación y seguridad, y conservación del entorno (RD 217/2022, Educación Física, interacción eficiente y sostenible con el entorno).",
    ideas: ["Carrera de orientación en el centro con balizas.", "Salida de senderismo con diario de ruta.", "Recogida de residuos en un espacio natural cercano."],
  },
  fuentes: [RD, { t: "Federación Española de Deportes de Montaña y Escalada: senderos", url: "https://www.fedme.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "En un mapa 1:25 000 mides 6 cm entre dos puntos. ¿Qué distancia real hay?", pasos: ["6 × 25 000 = 150 000 cm.", "150 000 cm = 1500 m."], resultado: "1,5 km." },
    { enunciado: "Ves una señal con dos rayas blanca y amarilla en forma de esquina hacia la derecha. ¿Qué significa?", pasos: ["Blanco y amarillo: PR.", "Esquina: cambio de dirección."], resultado: "Sendero PR: gira a la derecha." },
    { enunciado: "Preparas una salida de 4 horas en verano. Haz la lista de la mochila.", pasos: ["Agua (al menos 1,5 L) y comida.", "Gorra, crema solar, gafas.", "Chubasquero ligero, botiquín, mapa, móvil cargado."], resultado: "Mochila completa y segura." },
  ],
  errores: [
    "Salir sin avisar a nadie de la ruta.",
    "Usar el mapa sin orientarlo.",
    "Confiar en el musgo para encontrar el norte.",
    "Estrenar las botas el día de la excursión.",
    "Dejar restos orgánicos pensando que no contaminan.",
    "Salirse del sendero para atajar.",
  ],
  ejercicios: [
    { q: "Escribe cuatro actividades en el medio natural.", sol: "Senderismo, orientación, escalada, piragüismo (o bici de montaña, acampada)." },
    { q: "Explica los colores de GR, PR y SL.", sol: "GR: blanco y rojo. PR: blanco y amarillo. SL: blanco y verde." },
    { q: "En escala 1:50 000, ¿cuánto son 3 cm del mapa?", sol: "1,5 km." },
    { q: "¿Qué son las curvas de nivel?", sol: "Líneas que unen puntos a la misma altura." },
    { q: "Explica los pasos para seguir un rumbo con la brújula.", sol: "Unir puntos con la placa, girar el limbo paralelo a las líneas norte, girar el cuerpo hasta que la aguja coincida y seguir la flecha." },
    { q: "¿Cómo encontrarías el norte de noche?", sol: "Con la estrella Polar, a partir de la Osa Mayor." },
    { q: "Escribe cinco objetos imprescindibles en la mochila.", sol: "Agua, comida, gorra, chubasquero, botiquín (o crema, mapa, móvil)." },
    { q: "¿Qué hay que hacer antes de salir?", sol: "Ver el tiempo, elegir ruta adecuada, avisar a alguien y preparar el material." },
    { q: "Escribe cuatro principios de «no dejar rastro».", sol: "Llevarse la basura, no salir del sendero, no molestar animales, no hacer fuego." },
    { q: "Diseña una carrera de orientación de 5 balizas en el patio.", sol: "Respuesta abierta: plano, balizas con letras y tarjeta." },
  ],
};
