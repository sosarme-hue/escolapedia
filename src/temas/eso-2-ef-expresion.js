// Educación Física 2º ESO: expresión corporal y bailes. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Expresión corporal y bailes",
  minutos: 45,
  objetivos: ["Explicar qué es la expresión corporal y sus elementos", "Usar el cuerpo, el espacio, el tiempo y la energía para comunicar", "Conocer bailes y danzas de distintas culturas y el acrosport", "Crear y presentar una coreografía en grupo"],
  claves: ["expresión corporal", "lenguaje no verbal", "mimo", "ritmo", "coreografía", "danza", "acrosport"],
  pregunta: {
    texto: "Sin decir una sola palabra, ¿podrías explicar a tus compañeros que tienes frío, que estás enfadado o que te duele una muela?",
    respuesta: "Sí: con gestos, postura y expresión de la cara. Es el <b>lenguaje corporal</b> o no verbal. Se calcula que gran parte de lo que comunicamos cara a cara no son las palabras, sino <mark>cómo nos movemos y miramos</mark>. La expresión corporal entrena ese lenguaje.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la expresión corporal?</h3><p>La <b>expresión corporal</b> es el uso del cuerpo y el movimiento para <b>comunicar</b> emociones, ideas y sensaciones. Incluye actividades como el mimo, la dramatización, la danza, el baile y el acrosport.</p><p>Sus objetivos en Educación Física son:</p><ul><li>Conocer mejor tu propio cuerpo y sus posibilidades de movimiento.</li><li>Expresar emociones de forma creativa.</li><li>Comunicarte con los demás sin palabras.</li><li>Ganar seguridad y desinhibición ante el grupo.</li><li>Desarrollar el ritmo y la coordinación.</li></ul>`,
      video: { id: "b-y_9GscbTg", titulo: "Expresión corporal: conceptos básicos", canal: "Rocío Núñez", vistas: 227976 },
    },
    {
      html: `<h3>Los elementos del movimiento expresivo</h3>${tabla(["Elemento", "Qué podemos variar"], [["Cuerpo", "postura, gesto, mirada, partes que se mueven, contacto con otros"], ["Espacio", "niveles (alto, medio, bajo), direcciones, trayectorias, espacio personal y compartido"], ["Tiempo", "rápido o lento, ritmo, pausas, acelerar o frenar"], ["Energía", "movimientos fuertes o suaves, tensos o relajados, bruscos o fluidos"]])}<p>Combinando estos elementos un mismo gesto puede expresar cosas muy distintas: caminar lento, bajo y con tensión transmite miedo; caminar rápido, alto y suelto transmite alegría.</p>`,
      svg: svg("Tres muñecos a distintos niveles del espacio: alto con brazos arriba, medio y bajo agachado", `${persona(50, 30, "var(--sun)", { brazos: [[-14, -22], [14, -22]] })}${persona(130, 56, "var(--pen)", { brazos: [[-20, 6], [20, 6]], piernas: [[-16, 20], [16, 20]] })}${persona(210, 92, "var(--inf)", { brazos: [[-10, 14], [10, 14]], piernas: [[-16, 10], [16, 10]] })}<path d="M20 140 H 240" stroke="var(--line)" stroke-width="3"/>${t(50, 160, "nivel alto", { c: "var(--sun)", s: 11 })}${t(130, 160, "nivel medio", { c: "var(--pen)", s: 11 })}${t(210, 160, "nivel bajo", { c: "var(--inf)", s: 11 })}`),
    },
    {
      html: `<h3>El lenguaje corporal y las emociones</h3><p>Nuestro cuerpo expresa emociones aunque no queramos:</p><ul><li><b>Alegría</b>: postura abierta, cabeza alta, movimientos amplios y rápidos.</li><li><b>Tristeza</b>: hombros caídos, mirada baja, movimientos lentos.</li><li><b>Enfado</b>: tensión muscular, puños cerrados, movimientos bruscos.</li><li><b>Miedo</b>: cuerpo encogido, retroceso, protección con los brazos.</li></ul><p>Aprender a reconocer estas señales ayuda a <mark>entender mejor a los demás</mark> y a convivir.</p>`,
    },
    {
      html: `<h3>Técnicas expresivas</h3><ul><li><b>Mimo</b>: representar acciones y objetos imaginarios solo con gestos (empujar una pared invisible, subir una cuerda).</li><li><b>Dramatización</b>: representar una pequeña historia con personajes, sin o con pocas palabras.</li><li><b>Espejo</b>: por parejas, uno imita a la vez los movimientos del otro.</li><li><b>Estatuas</b>: congelar el cuerpo en una postura que exprese algo.</li><li><b>Sombras chinescas</b>: contar historias con la silueta tras una sábana iluminada.</li></ul><p>Todas trabajan la concentración, la creatividad y la colaboración.</p>`,
      video: { id: "_jy5Hij6e98", titulo: "Expresión corporal", canal: "COLEGIO SAN JUAN BOSCO", vistas: 67030 },
    },
    {
      html: `<h3>Ritmo y música</h3><p>Para bailar hay que seguir el <b>pulso</b> de la música: el latido regular que marcas al dar palmas o mover el pie. La mayoría de la música de baile se organiza en <b>frases de 8 tiempos</b>, por eso los coreógrafos cuentan «5, 6, 7, 8» antes de empezar.</p><p>Ejercicio: escucha una canción, marca el pulso con palmas y cuenta del 1 al 8. Después cambia de paso cada 8 tiempos (por ejemplo, 8 pasos laterales, 8 marchas, 8 palmas, 8 giros).</p>`,
      svg: svg("Dos frases musicales de ocho tiempos con el tiempo 1 acentuado", `${[0, 1].map((f) => Array.from({ length: 8 }, (_, i) => { const x = 22 + f * 120 + i * 14.5; return `<rect x="${x}" y="${i === 0 ? 60 : 76}" width="10" height="${i === 0 ? 50 : 34}" rx="3" fill="${i === 0 ? "var(--red)" : "var(--pen)"}" fill-opacity="${i === 0 ? 0.8 : 0.5}"/>${t(x + 5, 128, String(i + 1), { s: 10 })}`; }).join("")).join("")}${t(76, 40, "frase 1", { c: "var(--muted)", s: 11 })}${t(196, 40, "frase 2", { c: "var(--muted)", s: 11 })}${t(130, 160, "el tiempo 1 marca el inicio de cada frase", { c: "var(--red)", s: 11 })}`),
    },
    {
      html: `<h3>Bailes y danzas del mundo</h3>${tabla(["Baile", "Origen", "Características"], [["Jota", "Aragón, Navarra, Castilla…", "saltos, castañuelas, ritmo ternario"], ["Sardana", "Cataluña", "en corro, cogidos de las manos, pasos cortos y largos"], ["Muiñeira", "Galicia", "gaita, saltos y paso rápido"], ["Sevillanas", "Andalucía", "por parejas, cuatro partes («coplas»)"], ["Salsa", "Caribe y Nueva York", "por parejas, giros, ritmo de 8 tiempos"], ["Hip-hop", "Estados Unidos", "urbano, libre, con pasos de suelo"]])}<p>Las danzas tradicionales forman parte del <b>patrimonio cultural</b>; los bailes urbanos y modernos muestran cómo la danza sigue cambiando.</p>`,
    },
    {
      html: `<h3>El acrosport</h3><p>El <b>acrosport</b> combina acrobacias, figuras humanas (pirámides) y coreografía con música. Hay dos papeles:</p><ul><li><b>Portor</b>: la base, que sostiene. Espalda recta, apoyos firmes sobre hombros y caderas (nunca en el centro de la espalda).</li><li><b>Ágil</b>: quien sube. Se mueve con suavidad y sube y baja con control.</li></ul><p>Normas de seguridad: colchonetas, ayudantes a los lados, subir y bajar <b>por el mismo lado</b> y mantener la figura 3 segundos antes de deshacerla con cuidado.</p>`,
      svg: svg("Figura de acrosport: dos portores en cuadrupedia y un ágil de pie sobre ellos con los brazos abiertos", `<rect x="20" y="146" width="220" height="10" rx="3" fill="var(--sun)" fill-opacity=".3"/><g stroke="var(--pen)" stroke-width="4" stroke-linecap="round" fill="none"><path d="M70 110 H 120 M70 110 V 146 M120 110 V 146"/><path d="M140 110 H 190 M140 110 V 146 M190 110 V 146"/></g><circle cx="128" cy="108" r="7" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="3"/><circle cx="62" cy="108" r="7" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="3"/>${persona(130, 40, "var(--red)", { brazos: [[-24, -10], [24, -10]], piernas: [[-20, 40], [24, 40]] })}${t(95, 170, "portores", { c: "var(--pen)", s: 11 })}${t(200, 40, "ágil", { c: "var(--red)", s: 11 })}`),
      video: { id: "vjrrosdZLyA", titulo: "Coreografía de acrosport", canal: "Jordi Llach", vistas: 237649 },
    },
    {
      html: `<h3>Crea tu coreografía</h3><p>Pasos para preparar una coreografía en grupo:</p><ol><li><b>Elegid la música</b> (1-2 minutos) y un tema o emoción.</li><li><b>Contad los tiempos</b> y dividid la música en frases de 8.</li><li>Inventad <b>pasos</b> para cada frase y unidlos.</li><li>Variad <b>formaciones</b> (en fila, en círculo, en V) y niveles.</li><li>Ensayad por partes y luego entera.</li><li><b>Presentad</b> con un inicio y un final claros (posición congelada).</li></ol><p>Al ver las coreografías de otros grupos, se aplauden y se comentan con <b>respeto</b>: qué ha gustado y qué se podría mejorar.</p>`,
    },
  ],
  figura: {
    titulo: "Expresión corporal y bailes",
    svg: filas("Resumen: qué es la expresión corporal, elementos, técnicas, ritmo, bailes y acrosport", [["Qué es", "comunicar con el cuerpo y el movimiento", "var(--pen)"], ["Elementos", "cuerpo · espacio · tiempo · energía", "var(--sun)"], ["Técnicas", "mimo · dramatización · espejo · estatuas", "var(--leaf)"], ["Ritmo", "pulso · frases de 8 tiempos", "var(--red)"], ["Bailes", "jota · sardana · sevillanas · salsa · hip-hop", "var(--inf)"], ["Acrosport", "portor · ágil · seguridad", "var(--ink)"]], 200),
  },
  video: { id: "b-y_9GscbTg", titulo: "Expresión corporal: conceptos básicos", canal: "Rocío Núñez", vistas: 227976, megusta: 0, busqueda: "expresión corporal educación física" },
  quiz: mezcla([
    { q: "La expresión corporal usa el cuerpo para…", o: ["comunicar", "competir", "medir la fuerza"], a: 0, e: "Emociones e ideas." },
    { q: "Moverse agachado es usar el nivel…", o: ["bajo", "alto", "medio"], a: 0, e: "Espacio." },
    { q: "Hombros caídos y mirada baja suelen expresar…", o: ["tristeza", "alegría", "enfado"], a: 0, e: "Lenguaje corporal." },
    { q: "Representar acciones con objetos imaginarios es…", o: ["mimo", "acrosport", "sardana"], a: 0, e: "Solo gestos." },
    { q: "La música de baile suele organizarse en frases de…", o: ["8 tiempos", "3 tiempos", "13 tiempos"], a: 0, e: "5, 6, 7, 8." },
    { q: "La sardana es un baile tradicional de…", o: ["Cataluña", "Galicia", "Andalucía"], a: 0, e: "En corro." },
    { q: "En acrosport, quien sostiene la figura es el…", o: ["portor", "ágil", "ayudante"], a: 0, e: "La base." },
    { q: "En acrosport no se debe apoyar en…", o: ["el centro de la espalda", "los hombros", "las caderas"], a: 0, e: "Zonas seguras: hombros y caderas." },
    { q: "Los movimientos fuertes o suaves corresponden al elemento…", o: ["energía", "espacio", "tiempo"], a: 0, e: "Intensidad del movimiento." },
    { q: "En el juego del espejo…", o: ["uno imita a la vez al otro", "se baila solo", "se habla"], a: 0, e: "Por parejas." },
  ]),
  examen: mezcla([
    { q: "Caminar lento, encogido y tenso suele transmitir…", o: ["miedo", "alegría", "orgullo"], a: 0, e: "Combinación de elementos." },
    { q: "Al montar una figura de acrosport se sube y se baja…", o: ["por el mismo lado", "por cualquier lado", "saltando"], a: 0, e: "Seguridad." },
    { q: "Las sevillanas se bailan…", o: ["por parejas en cuatro partes", "en corro grande", "en solitario y sin música"], a: 0, e: "Coplas." },
  ]),
  feynman: ["Qué es la expresión corporal", "Los cuatro elementos del movimiento expresivo", "Cómo expresa el cuerpo las emociones", "El pulso y las frases de 8 tiempos", "Portor, ágil y seguridad en acrosport"],
  mapa: mapa("EXPRESIÓN", "var(--eso)", [
    ["Elementos", "cuerpo · espacio · tiempo", "var(--sun)"],
    ["Técnicas", "mimo · dramatización", "var(--leaf)"],
    ["Bailes", "tradicionales · urbanos", "var(--inf)"],
    ["Acrosport", "portor · ágil", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Expresión corporal", "Comunicar con el cuerpo y el movimiento."],
    ["Lenguaje no verbal", "Gestos, postura, mirada y expresión facial."],
    ["Niveles", "Alto, medio y bajo en el espacio."],
    ["Mimo", "Representar acciones con objetos imaginarios."],
    ["Pulso", "Latido regular de la música."],
    ["Coreografía", "Secuencia de movimientos organizada con música."],
    ["Portor", "Base que sostiene en acrosport."],
    ["Ágil", "Quien sube y forma la parte alta de la figura."],
  ],
  familias: ["Jugad a adivinar películas con mímica.", "Pedidle que os enseñe un paso de la coreografía de clase.", "Escuchad música y marcad juntos el pulso y las frases de 8."],
  profesores: {
    saberes: "Expresión corporal: elementos del movimiento expresivo, técnicas (mimo, dramatización), ritmo, danzas del patrimonio y actuales, acrosport y creación de coreografías grupales (RD 217/2022, Educación Física, manifestaciones de la cultura motriz).",
    ideas: ["Galería de estatuas emocionales.", "Coreografía grupal con rúbrica de creatividad y sincronía.", "Taller de bailes tradicionales con familias."],
  },
  fuentes: [RD, { t: "Patrimonio Cultural Inmaterial (UNESCO)", url: "https://ich.unesco.org/es" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Representa «alegría» y «miedo» variando los cuatro elementos.", pasos: ["Alegría: cuerpo abierto, nivel alto, rápido, energía suelta.", "Miedo: cuerpo encogido, nivel bajo, lento o brusco, tensión."], resultado: "Dos formas de moverse opuestas." },
    { enunciado: "Una canción de 64 tiempos. ¿Cuántas frases de 8 hay y cuántos pasos distintos necesitas si cambias en cada frase?", pasos: ["64 ÷ 8 = 8 frases.", "Un paso por frase."], resultado: "8 frases y 8 pasos (o repetir algunos)." },
    { enunciado: "Diseña una figura de acrosport de tres personas segura.", pasos: ["Dos portores en cuadrupedia, uno junto al otro.", "El ágil apoya rodillas sobre las caderas de ambos.", "Ayudantes a los lados; 3 s y deshacer."], resultado: "Pirámide de tres con apoyos en caderas." },
  ],
  errores: [
    "Pensar que la expresión corporal es solo «hacer el payaso».",
    "Bailar sin escuchar el pulso de la música.",
    "Apoyarse en el centro de la espalda del portor.",
    "Deshacer las figuras de acrosport saltando.",
    "Reírse de las coreografías de los compañeros.",
  ],
  ejercicios: [
    { q: "Define expresión corporal.", sol: "Uso del cuerpo y el movimiento para comunicar emociones e ideas." },
    { q: "Escribe los cuatro elementos del movimiento expresivo.", sol: "Cuerpo, espacio, tiempo y energía." },
    { q: "¿Cómo expresa el cuerpo el enfado?", sol: "Tensión, puños cerrados, movimientos bruscos." },
    { q: "Describe dos técnicas expresivas.", sol: "Mimo y espejo (o dramatización, estatuas, sombras)." },
    { q: "¿Qué es el pulso musical?", sol: "El latido regular de la música." },
    { q: "Escribe tres bailes tradicionales españoles y su lugar.", sol: "Jota (Aragón), sardana (Cataluña), muiñeira (Galicia)." },
    { q: "Diferencia portor y ágil.", sol: "Portor sostiene; ágil sube." },
    { q: "Escribe tres normas de seguridad en acrosport.", sol: "Colchonetas, ayudantes, subir y bajar por el mismo lado." },
    { q: "Enumera los pasos para crear una coreografía.", sol: "Música, contar tiempos, pasos, formaciones, ensayo, presentación." },
    { q: "Crea una secuencia de 4 frases de 8 tiempos.", sol: "Respuesta abierta." },
  ],
};
