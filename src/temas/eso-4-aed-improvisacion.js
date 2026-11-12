// Artes Escénicas y Danza 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, rueda, flujo } = require("./_hum");

module.exports = {
  materia: "Artes Escénicas y Danza",
  curso: "4-eso",
  titulo: "La improvisación",
  minutos: 60,
  objetivos: ["Explicar qué es la improvisación teatral y para qué sirve", "Aplicar sus reglas básicas: aceptar, construir, escuchar y cooperar", "Usar la estructura quién, dónde, qué y conflicto para crear escenas", "Practicar juegos y técnicas de improvisación en grupo"],
  claves: ["improvisación", "«sí, y…»", "escucha", "oferta", "conflicto", "estatus"],
  pregunta: {
    texto: "Tu compañero entra en escena y dice: «¡Doctor, rápido, mi gato se ha tragado la llave del coche!». Tú no sabías nada. ¿Qué haces: le dices «yo no soy doctor» o le sigues el juego?",
    respuesta: "En improvisación la regla de oro es <mark>aceptar</mark> y añadir algo: «¡Tranquilo! Traiga al gato, que le haremos una radiografía… ¿Es el gato que se comió el mando la semana pasada?». Si dices «no», la escena muere. Si dices «<b>sí, y…</b>», la historia crece.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es improvisar?</h3><p><b>Improvisar</b> es crear una escena en el momento, <mark>sin guion previo</mark>, a partir de una propuesta (una palabra, un lugar, una situación). No es «hacer cualquier cosa»: el improvisador usa técnicas y reglas para construir historias coherentes con sus compañeros. La improvisación tiene una larga historia (la commedia dell'arte improvisaba sobre un esquema) y hoy es a la vez una <b>herramienta de entrenamiento</b> para actores y un <b>espectáculo</b> en sí mismo: los <i>matches</i> de improvisación, donde dos equipos compiten y el público vota.</p>`,
      video: { id: "Xog3zU2PXD8", titulo: "¿Qué es el teatro de improvisación?", canal: "TEDx Talks", vistas: 241096, megusta: 0 },
    },
    {
      html: `<h3>Para qué sirve</h3><p>La improvisación entrena capacidades útiles en el escenario y fuera de él: la <b>espontaneidad</b> y la creatividad, la <mark>escucha activa</mark>, la capacidad de reaccionar rápido, la confianza en uno mismo, el trabajo en equipo y la tolerancia al error. Por eso se usa en empresas, en clases de idiomas, en terapia y en preparación para entrevistas. Su gran lección: en escena, como en la vida, no siempre se puede planificar todo, pero se puede responder bien a lo inesperado.</p>`,
      svg: rueda("Capacidades que entrena la improvisación", "IMPRO", [["escucha", "var(--pen)"], ["creatividad", "var(--sun)"], ["confianza", "var(--leaf)"], ["equipo", "var(--red)"], ["reacción", "var(--bac)"], ["aceptar errores", "var(--inf)"]], "var(--ink)"),
    },
    {
      html: `<h3>Las reglas de oro</h3><p>Los grandes maestros, como <b>Keith Johnstone</b> o Viola Spolin, resumieron unas reglas básicas:</p>${tabla(["Regla", "Qué significa"], [["Aceptar la oferta", "todo lo que propone un compañero es real en la escena; no se niega"], ["«Sí, y…»", "aceptar y añadir algo nuevo que haga avanzar la historia"], ["Escuchar", "estar atento a lo que dicen y hacen los demás, no solo a tu idea"], ["Hacer al compañero brillar", "facilitar el juego del otro en vez de lucirse uno solo"], ["Definir pronto", "dejar claros quiénes son, dónde están y qué hacen"], ["Mostrar, no contar", "hacer las acciones en vez de narrarlas"]])}<p>Una <mark>oferta</mark> es cualquier propuesta: una frase, un gesto, un objeto imaginario. Rechazarla se llama <b>bloquear</b>.</p>`,
    },
    {
      html: `<h3>Aceptar o bloquear</h3><p>Compara estas dos respuestas a la oferta «¡Capitán, se ve tierra a estribor!». <b>Bloqueo</b>: «Esto no es un barco, estamos en clase». La escena se detiene. <b>Aceptación pobre</b>: «Ah, vale». No añade nada. <mark>Aceptación con «sí, y…»</mark>: «¡Por fin! Prepara el bote, grumete, y no olvides el mapa del tesoro que robamos al gobernador». Ahora hay personajes, relación, objetivo y una historia que puede crecer. Aceptar no significa estar de acuerdo con el personaje: puedes discutir <i>dentro</i> de la ficción, pero nunca negar la ficción.</p>`,
      svg: dos("Bloquear frente a aceptar", ["Bloquear", ["«no»", "«eso no es así»", "ignorar la oferta", "cambiar de tema", "la escena muere"], "var(--red)"], ["Aceptar", ["«sí, y…»", "dar por real", "añadir detalles", "dar un objetivo", "la escena crece"], "var(--leaf)"]),
    },
    {
      html: `<h3>La estructura de una escena</h3><p>Para que una improvisación funcione, el público necesita saber pronto tres cosas: <b>¿quién?</b> (personajes y su relación: madre e hijo, jefe y empleada), <b>¿dónde?</b> (el lugar: una cocina, una nave espacial) y <b>¿qué?</b> (la acción que hacen: cocinar, reparar el motor). Después hace falta un <mark>conflicto</mark>: algo que alguien quiere y algo que lo impide. La escena avanza hacia un clímax y termina con una resolución. Un buen truco: empezar ya en medio de la acción y definir la relación en las primeras frases.</p>`,
      svg: flujo("Pasos de una escena improvisada", ["¿quién?", "¿dónde?", "¿qué?", "conflicto", "final"], "var(--pen)"),
    },
    {
      html: `<h3>El estatus</h3><p>Keith Johnstone descubrió que en toda relación hay un juego de <mark>estatus</mark>: quién está «por encima» y quién «por debajo» en esa situación. El estatus <b>alto</b> se muestra con movimientos lentos, mirada fija, voz pausada, ocupar espacio y no tocarse la cara. El <b>bajo</b>, con movimientos rápidos, mirada que huye, frases dudosas y cuerpo encogido. El estatus no depende del cargo: un mayordomo puede dominar a su torpe señor. Cambiar el estatus durante la escena crea comedia y tensión.</p>`,
      svg: filas("Señales de estatus alto y bajo", [["Alto", "lento, mirada fija, ocupa espacio", "var(--red)"], ["Bajo", "rápido, mirada huidiza, encogido", "var(--pen)"], ["Cambio", "el criado domina al amo: comedia", "var(--sun)"]]),
    },
    {
      html: `<h3>Juegos y técnicas de improvisación</h3><p>Algunos juegos clásicos para practicar en clase:</p>${tabla(["Juego", "Cómo se juega", "Qué entrena"], [["Historia palabra a palabra", "en círculo, cada uno dice una palabra para formar una historia", "escucha y aceptación"], ["Congelados (freeze)", "dos actúan; alguien grita «¡stop!», sustituye a uno en la misma postura y empieza otra escena", "reacción y creatividad"], ["Objeto imaginario", "un objeto pasa de mano en mano y cada uno lo convierte en otra cosa", "imaginación y mimo"], ["Experto", "uno es «experto» en un tema absurdo y otro le traduce con gestos", "espontaneidad"], ["Emociones", "la escena se repite cambiando de emoción a una señal", "expresión"], ["Sí, y…", "planificar una fiesta aceptando y ampliando cada idea", "construir en equipo"]])}`,
      video: { id: "uWe7gk5Usgs", titulo: "5 juegos de improvisación teatral para niños y adultos", canal: "Pau Farías, Improvisación Teatral y Creatividad", vistas: 288845, megusta: 0 },
    },
    {
      html: `<h3>Errores, miedo y confianza</h3><p>Muchos se bloquean por miedo a no ser graciosos o a quedarse en blanco. El consejo de los maestros es sorprendente: <mark>no intentes ser original</mark>; di lo obvio, lo primero que se te ocurra, y la escena será interesante porque es verdadera. En improvisación el error no existe: es otra oferta que se puede aprovechar. Para ello, el grupo debe ser un espacio seguro, donde nadie se burla de nadie y todos se apoyan. Al terminar, se comenta qué funcionó, nunca para ridiculizar.</p>`,
    },
  ],
  figura: {
    titulo: "Fórmula de una buena improvisación",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Fórmula: escuchar, aceptar la oferta, añadir con sí y, definir quién dónde y qué, y crear un conflicto">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      ${[["Escuchar", "var(--pen)"], ["Aceptar", "var(--leaf)"], ["«Sí, y…»", "var(--sun)"], ["Quién·dónde·qué", "var(--bac)"], ["Conflicto", "var(--red)"]].map(([t, c], i) => `<rect x="${16 + i * 132}" y="64" width="120" height="72" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/><circle cx="${76 + i * 132}" cy="64" r="15" fill="${c}"/><text x="${76 + i * 132}" y="70" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" ${D}>${i + 1}</text><text x="${76 + i * 132}" y="108" text-anchor="middle" font-size="${t.length > 10 ? 12.5 : 15}" font-weight="700" fill="${c}" ${F}>${t}</text>${i < 4 ? `<path d="M${136 + i * 132} 100 h 12" stroke="var(--ink)" stroke-width="3"/>` : ""}`).join("")}
      <text x="340" y="176" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>y nunca bloquear la oferta del compañero</text>
    </svg>`,
  },
  video: { id: "cA5HDTm0PHk", titulo: "Ejercicios de improvisación teatral: freeze y loop de movimientos", canal: "Pau Farías, Improvisación Teatral y Creatividad", vistas: 118353, megusta: 0, busqueda: "improvisación teatral técnicas" },
  ejemplos: [
    { enunciado: "Responde con «sí, y…» a la oferta: «Abuela, ¿por qué hay un dragón en el garaje?».", pasos: ["Aceptar: el dragón existe y la abuela lo sabe.", "Añadir información: «Es Ramón, lo cuido desde 1965, y hoy está triste porque no le dejan volar por el barrio».", "Dar un objetivo: «Ayúdame a sacarlo esta noche sin que lo vea la vecina»."], resultado: "Ahora hay relación, historia pasada, emoción y un objetivo para seguir." },
    { enunciado: "Crea el inicio de una escena definiendo quién, dónde, qué y conflicto con la palabra «paraguas».", pasos: ["Quién: dos hermanos que no se hablan desde hace años.", "Dónde: la puerta de un tanatorio bajo la lluvia.", "Qué: solo hay un paraguas.", "Conflicto: ninguno quiere compartirlo, pero los dos tienen que llegar al coche."], resultado: "Escena con situación clara y conflicto que puede ser cómico o emotivo." },
    { enunciado: "Representa a un camarero y un cliente invirtiendo el estatus habitual.", pasos: ["Camarero en estatus alto: lento, mira al cliente de arriba abajo, habla pausado.", "Cliente en estatus bajo: pide perdón, duda, se encoge.", "La comedia surge del contraste con lo esperado."], resultado: "Cambiar el estatus esperado crea humor y tensión." },
  ],
  errores: [
    "Bloquear la oferta del compañero («eso no es así»).",
    "Preguntar sin parar en vez de aportar información («¿quién eres?, ¿qué hacemos?»).",
    "Querer ser gracioso a toda costa en lugar de escuchar y ser verdadero.",
    "Contar lo que pasa en vez de hacerlo («ahora vamos a escalar» en lugar de escalar).",
    "Quedarse sin conflicto: dos personajes de acuerdo en todo no hacen avanzar la escena.",
    "Burlarse de los compañeros cuando se equivocan.",
  ],
  ejercicios: [
    { q: "Define improvisación teatral.", sol: "Crear una escena en el momento, sin guion, a partir de una propuesta y aplicando técnicas y reglas." },
    { q: "Escribe cuatro capacidades que desarrolla la improvisación.", sol: "Escucha, creatividad, confianza, trabajo en equipo (también reacción rápida y tolerancia al error)." },
    { q: "¿Qué es una oferta y qué es bloquear?", sol: "Oferta: cualquier propuesta en escena (frase, gesto, objeto). Bloquear: negarla o ignorarla." },
    { q: "Explica la regla «sí, y…».", sol: "Aceptar lo que propone el compañero y añadir algo nuevo que haga avanzar la historia." },
    { q: "Responde con «sí, y…» a: «Profesor, el examen se ha escapado por la ventana».", sol: "Respuesta abierta. Ejemplo: «¡Otra vez! Rápido, coged las redes: los exámenes de matemáticas son los más rápidos y ya llevan dos ventanas este mes»." },
    { q: "¿Qué tres preguntas debe resolver pronto una escena?", sol: "¿Quién? (personajes y relación), ¿dónde? (lugar) y ¿qué? (acción)." },
    { q: "¿Por qué hace falta un conflicto?", sol: "Porque sin un deseo y un obstáculo no hay tensión ni historia: la escena no avanza." },
    { q: "Describe el estatus alto y el bajo.", sol: "Alto: movimientos lentos, mirada fija, voz pausada, ocupa espacio. Bajo: movimientos rápidos, mirada huidiza, dudas, cuerpo encogido." },
    { q: "Explica cómo se juega a «congelados».", sol: "Dos personas improvisan; cuando alguien grita «¡stop!», se congelan; el que gritó sustituye a uno en la misma postura y empieza una escena nueva." },
    { q: "¿Qué significa «no intentes ser original»?", sol: "Que hay que decir lo primero y más obvio que surja, porque será sincero y conectará con el público; buscar ser gracioso bloquea." },
  ],
  quiz: [
    { q: "Improvisar es…", o: ["crear sin guion previo", "memorizar un texto", "copiar una película"], a: 0, e: "En el momento." },
    { q: "La regla de oro de la improvisación es…", o: ["«sí, y…»", "«no, pero…»", "«ya veremos»"], a: 0, e: "Aceptar y añadir." },
    { q: "Negar la propuesta de un compañero se llama…", o: ["bloquear", "aceptar", "ofertar"], a: 0, e: "Detiene la escena." },
    { q: "Una oferta es…", o: ["cualquier propuesta en escena", "un descuento", "el final"], a: 0, e: "Frase, gesto u objeto." },
    { q: "Keith Johnstone estudió el…", o: ["estatus", "vestuario", "decorado"], a: 0, e: "Libro Impro." },
    { q: "El estatus alto se muestra con…", o: ["movimientos lentos y mirada fija", "prisas y dudas", "voz temblorosa"], a: 0, e: "Ocupa espacio." },
    { q: "Las tres preguntas de una escena son…", o: ["quién, dónde y qué", "cuándo, cuánto y cómo", "por qué, para qué y con quién"], a: 0, e: "Definir pronto." },
    { q: "Sin … la escena no avanza.", o: ["conflicto", "vestuario", "música"], a: 0, e: "Deseo y obstáculo." },
    { q: "«Mostrar, no contar» significa…", o: ["hacer las acciones", "narrarlas", "no hablar nunca"], a: 0, e: "Que el público lo vea." },
    { q: "En improvisación, un error es…", o: ["otra oferta que aprovechar", "el final de la escena", "motivo de burla"], a: 0, e: "Se integra." },
  ],
  examen: [
    { q: "Preguntar todo el rato «¿quién eres?» es un error porque…", o: ["no aporta información", "es muy gracioso", "define la escena"], a: 0, e: "Hay que ofrecer, no preguntar." },
    { q: "Un match de improvisación es…", o: ["una competición entre equipos", "un tipo de ópera", "un ensayo privado"], a: 0, e: "El público vota." },
    { q: "La commedia dell'arte improvisaba sobre…", o: ["un canovaccio (esquema)", "un texto completo", "nada"], a: 0, e: "Antecedente histórico." },
  ],
  feynman: ["Qué es improvisar y para qué sirve", "La regla «sí, y…» y la diferencia entre aceptar y bloquear", "La estructura quién, dónde, qué y conflicto", "Qué es el estatus y cómo se muestra"],
  mapa: mapa("IMPROVISACIÓN", "var(--sun)", [
    ["Reglas", "aceptar · «sí, y…» · escuchar", "var(--leaf)"],
    ["Escena", "quién · dónde · qué · conflicto", "var(--pen)"],
    ["Estatus", "alto · bajo · cambios", "var(--red)"],
    ["Juegos", "congelados · palabra a palabra", "var(--bac)"],
  ], 270),
  tarjetas: [
    ["Improvisación", "Crear una escena en el momento, sin guion."],
    ["Oferta", "Cualquier propuesta en escena: frase, gesto, objeto."],
    ["Bloquear", "Negar o ignorar la oferta de un compañero."],
    ["«Sí, y…»", "Aceptar la propuesta y añadir algo nuevo."],
    ["Quién, dónde, qué", "Lo primero que debe quedar claro en una escena."],
    ["Conflicto", "Un deseo y un obstáculo: el motor de la escena."],
    ["Estatus", "Quién está por encima o por debajo en una relación."],
    ["Mostrar, no contar", "Hacer las acciones en lugar de narrarlas."],
  ],
  familias: ["Jugad en casa a la historia palabra a palabra en la cena.", "Planificad unas vacaciones imaginarias usando solo «sí, y…».", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Artes Escénicas y Danza 4º ESO (optativa autonómica; marco del RD 217/2022): improvisación, creación colectiva, escucha y juego dramático.",
    ideas: ["Liga de improvisación de clase con jueces y tarjetas de votación.", "Calentamiento diario con un juego de impro de cinco minutos.", "Grabar una escena improvisada y analizar ofertas y bloqueos."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Keith Johnstone, creador del método Impro (Wikipedia)", url: "https://en.wikipedia.org/wiki/Keith_Johnstone" },
  ],
  revisado: "2026-11-12",
};
