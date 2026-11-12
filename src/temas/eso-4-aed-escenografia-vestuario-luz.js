// Artes Escénicas y Danza 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, rueda } = require("./_hum");

module.exports = {
  materia: "Artes Escénicas y Danza",
  curso: "4-eso",
  titulo: "Escenografía, vestuario y luz",
  minutos: 60,
  objetivos: ["Conocer las partes del escenario y la maquinaria teatral", "Explicar las funciones de la escenografía, el vestuario, el maquillaje y el atrezo", "Comprender las funciones y tipos de luz y sonido en escena", "Diseñar de forma sencilla los elementos visuales de una escena"],
  claves: ["escenografía", "atrezo", "figurín", "iluminación", "foco", "espacio sonoro"],
  pregunta: {
    texto: "Un escenario vacío. Se enciende una luz azul y fría desde un lado y suena un viento lejano. Sin decir una palabra, ¿dónde crees que estamos y qué sientes?",
    respuesta: "Probablemente en un lugar abierto, de noche, quizá solitario o inquietante. La <mark>escenografía, el vestuario, la luz y el sonido</mark> también cuentan la historia: crean el lugar, la época, el ambiente y las emociones antes de que hable ningún actor.",
  },
  bloques: [
    {
      html: `<h3>Las partes del escenario</h3><p>El escenario a la italiana tiene un vocabulario propio. La <b>embocadura</b> es el marco que separa escena y sala; delante está el <b>proscenio</b> y, a veces, el <b>foso</b> de la orquesta. Las <b>bambalinas</b> (telas horizontales arriba) y las <b>patas</b> (telas verticales a los lados) ocultan lo que no debe verse; los <b>hombros</b> o laterales son las zonas ocultas a los lados. Al fondo está el <b>foro</b> o ciclorama. Encima, el <mark>peine</mark> y las <b>varas</b> permiten subir y bajar decorados y focos. El <b>telón</b> abre y cierra la escena.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escenario visto de frente: embocadura, bambalina arriba, patas a los lados, telón recogido, foro al fondo y proscenio delante">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="14" width="220" height="140" fill="var(--red)" opacity=".25"/>
        <rect x="40" y="30" width="180" height="110" fill="var(--card)"/>
        <rect x="70" y="50" width="120" height="70" fill="var(--water)" opacity=".35"/>
        <rect x="40" y="30" width="180" height="16" fill="var(--ink)" opacity=".8"/>
        <rect x="40" y="46" width="18" height="94" fill="var(--ink)" opacity=".6"/><rect x="202" y="46" width="18" height="94" fill="var(--ink)" opacity=".6"/>
        <path d="M40 30 Q 54 80 40 140" fill="var(--red)" opacity=".8"/><path d="M220 30 Q 206 80 220 140" fill="var(--red)" opacity=".8"/>
        <path d="M20 140 H 240 L 250 156 H 10 Z" fill="var(--sun)"/>
        <g ${F} font-size="10.5" font-weight="700" text-anchor="middle"><text x="130" y="42" fill="#fff">bambalina</text><text x="130" y="90" fill="var(--pen)">foro</text><text x="130" y="152" fill="var(--ink)">proscenio</text><text x="130" y="26" fill="var(--red)">embocadura</text><text x="74" y="134" fill="var(--ink)">pata</text><text x="186" y="134" fill="var(--ink)">pata</text><text x="130" y="172" fill="var(--muted)" font-weight="400">el telón se recoge a los lados</text></g></svg>`,
    },
    {
      html: `<h3>La escenografía</h3><p>La <b>escenografía</b> es el diseño del espacio donde ocurre la acción. Sus funciones: <mark>situar</mark> la acción en un lugar y una época, crear un <b>ambiente</b>, transmitir ideas mediante <b>símbolos</b> y facilitar el movimiento de los actores. Hay escenografías <b>realistas</b> (un salón con todos sus muebles), <b>sintéticas</b> (unos pocos elementos que sugieren el lugar: un banco y una farola ya son un parque), <b>simbólicas</b> (una escalera infinita que representa la ambición) y <b>espacios vacíos</b>, donde todo lo crean los actores y la luz. Hoy se usan mucho las <b>proyecciones</b> y pantallas.</p>`,
      svg: filas("Tipos de escenografía", [["Realista", "reproduce el lugar con detalle", "var(--sun)"], ["Sintética", "pocos elementos que sugieren", "var(--leaf)"], ["Simbólica", "objetos con significado", "var(--bac)"], ["Vacía", "actor y luz crean el espacio", "var(--muted)"], ["Audiovisual", "proyecciones y pantallas", "var(--pen)"]]),
    },
    {
      html: `<h3>Atrezo y utilería</h3><p>El <b>atrezo</b> (o utilería) son los <mark>objetos</mark> que aparecen en escena. Se distingue entre el atrezo de <b>decorado</b> (cuadros, lámparas, libros de la estantería) y el atrezo de <b>mano</b>, los objetos que usan los actores (una carta, una espada, un vaso). Deben ser resistentes, seguros (las armas nunca son reales) y visibles desde lejos. A menudo los objetos tienen una gran fuerza simbólica: el bastón de Bernarda Alba representa su autoridad, y la calavera de Hamlet, la muerte.</p>`,
    },
    {
      html: `<h3>Vestuario, maquillaje y peluquería</h3><p>El <b>vestuario</b> lo diseña el <b>figurinista</b> mediante dibujos llamados <mark>figurines</mark>. Informa sobre la <b>época</b>, la <b>clase social</b>, la <b>profesión</b>, la edad y el <b>carácter</b> del personaje, y su evolución (un personaje que se arruina va perdiendo elegancia). El color tiene significado: negro para el luto o la autoridad, blanco para la pureza, rojo para la pasión. Debe permitir moverse y cambiarse rápido entre escenas. El <b>maquillaje</b> sirve para que el rostro se vea bajo los focos y para caracterizar (envejecer, heridas, máscaras), y la <b>peluquería</b> completa el personaje.</p>`,
      svg: dos("Qué dice el vestuario de un personaje", ["Información", ["época", "clase social", "profesión", "edad", "carácter"], "var(--sun)"], ["Recursos", ["forma y tejido", "color", "accesorios", "desgaste", "cambios"], "var(--red)"]),
    },
    {
      html: `<h3>La iluminación: funciones</h3><p>La <b>luz</b> no solo sirve para ver. Sus funciones son: <b>iluminar</b> a los actores para que el público los vea; <mark>dirigir la mirada</mark> del público hacia lo importante; crear el <b>ambiente</b> y la emoción (cálida, fría, inquietante); indicar el <b>tiempo</b> (amanecer, mediodía, noche) y el <b>lugar</b>; separar escenas con <b>oscuros</b> o transiciones; y crear efectos (tormenta, fuego, sombras). El <b>diseñador de iluminación</b> prepara un plano de focos y una lista de cambios de luz, que el técnico ejecuta desde la mesa de luces.</p>`,
      video: { id: "7QH21_86QNU", titulo: "Iluminación básica", canal: "Eima", vistas: 1207763, megusta: 0 },
    },
    {
      html: `<h3>Focos, direcciones y color</h3><p>Hay distintos tipos de focos: el <b>PC</b> o fresnel da una luz suave y amplia; el <b>recorte</b> da un haz nítido que puede recortarse; el <b>cañón de seguimiento</b> sigue a un actor; los <b>panoramas</b> iluminan el fondo; y los focos <b>LED</b> y <b>robotizados</b> cambian de color y dirección. La <mark>dirección</mark> de la luz cambia el efecto:</p>${tabla(["Dirección", "Efecto"], [["Frontal", "ilumina bien la cara, pero aplana"], ["Lateral", "esculpe el cuerpo, ideal para danza"], ["Contraluz (desde atrás)", "silueta, separa al actor del fondo"], ["Cenital (desde arriba)", "aislamiento, dramatismo"], ["Desde abajo (contrapicado)", "efecto inquietante o terrorífico"]])}<p>Los <b>colores</b> (filtros o LED) crean ambiente: ámbar cálido para el hogar, azul para la noche, rojo para la tensión o el peligro.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Actor visto de lado con tres direcciones de luz: frontal, cenital y contraluz">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M30 150 H 230" stroke="var(--muted)" stroke-width="3"/>
        <circle cx="130" cy="78" r="12" fill="var(--ink)"/><rect x="120" y="92" width="20" height="44" rx="6" fill="var(--ink)"/><path d="M124 136 V 150 M136 136 V 150" stroke="var(--ink)" stroke-width="5"/>
        ${[[30, 70, "frontal", "var(--sun)"], [130, 16, "cenital", "var(--pen)"], [230, 60, "contraluz", "var(--red)"]].map(([x, y, t, c]) => `<path d="M${x} ${y} L ${x === 130 ? 116 : x < 130 ? 116 : 144} ${x === 130 ? 70 : 90} L ${x === 130 ? 144 : x < 130 ? 116 : 144} ${x === 130 ? 70 : 120} Z" fill="${c}" opacity=".25"/><circle cx="${x}" cy="${y}" r="8" fill="${c}"/><text x="${x === 30 ? 16 : x === 230 ? 244 : x}" y="${y === 16 ? 40 : y - 14}" text-anchor="${x === 30 ? "start" : x === 230 ? "end" : "middle"}" font-size="11" font-weight="700" fill="${c}" ${F}>${t}</text>`).join("")}
        <text x="130" y="170" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>público ← · → fondo</text></svg>`,
    },
    {
      html: `<h3>El espacio sonoro</h3><p>El <b>sonido</b> completa el ambiente. Incluye la <b>música</b> (en directo o grabada), los <b>efectos sonoros</b> (lluvia, timbre, pasos, tráfico) y la <b>amplificación</b> de las voces con micrófonos. La música puede ser <mark>diegética</mark>, si los personajes la oyen (una radio que suena en la escena), o <b>extradiegética</b>, si solo la oye el público para crear emoción. El técnico de sonido lanza cada efecto en el momento exacto (el <i>cue</i>). Un silencio total, bien usado, puede ser el efecto más potente.</p>`,
      svg: rueda("Elementos del espacio sonoro", "SONIDO", [["música", "var(--pen)"], ["efectos", "var(--sun)"], ["voces", "var(--red)"], ["silencio", "var(--muted)"]], "var(--ink)"),
    },
    {
      html: `<h3>Diseñar con pocos medios</h3><p>En el teatro escolar no hace falta mucho dinero: lo importante es que cada elemento tenga <mark>intención</mark>. Algunas ideas: cajas o cubos que se convierten en sillas, muros o un barco; telas de colores que son un río, una capa o una tienda; una linterna o un flexo como único foco; sombras chinescas con una sábana; vestuario con una pieza clave por personaje (un sombrero, una bufanda); sonidos hechos en directo con objetos. La pregunta del diseñador es siempre: ¿qué necesita contar esta escena y cuál es la forma más sencilla de contarlo?</p>`,
    },
  ],
  figura: {
    titulo: "Los lenguajes visuales y sonoros de un espectáculo",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Escenografía, vestuario, iluminación y sonido con sus responsables y funciones">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      ${[["Escenografía", "escenógrafo", "lugar · época", "var(--sun)"], ["Vestuario", "figurinista", "personaje · época", "var(--red)"], ["Iluminación", "iluminador", "mirada · ambiente", "var(--pen)"], ["Sonido", "técnico de sonido", "música · efectos", "var(--leaf)"]].map(([t, r, f, c], i) => `<rect x="${20 + i * 162}" y="20" width="150" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><rect x="${20 + i * 162}" y="20" width="150" height="40" rx="14" fill="${c}"/><text x="${95 + i * 162}" y="46" text-anchor="middle" font-size="15" font-weight="700" fill="#fff" ${D}>${t}</text><text x="${95 + i * 162}" y="100" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>${r}</text><text x="${95 + i * 162}" y="140" text-anchor="middle" font-size="12.5" fill="var(--muted)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "ONov4wmyRP4", titulo: "¿Qué es la escenografía?", canal: "explicamos", vistas: 97105, megusta: 0, busqueda: "escenografía teatral qué es" },
  ejemplos: [
    { enunciado: "Diseña con pocos medios la escena «dos amigos perdidos en un bosque de noche».", pasos: ["Escenografía: espacio vacío y tres percheros con telas verdes como árboles.", "Luz: azul desde un lateral y un contraluz suave; una linterna en mano como único foco cálido.", "Sonido: grillos y un búho grabados; un crujido de ramas hecho en directo.", "Vestuario: abrigos y mochilas; uno lleva un gorro llamativo para identificarlo."], resultado: "Ambiente nocturno e inquietante con recursos sencillos." },
    { enunciado: "Explica qué cuenta este vestuario: un traje gris impecable que, escena a escena, aparece arrugado, sin corbata y manchado.", pasos: ["El traje inicial indica un hombre de negocios ordenado y con estatus.", "El deterioro progresivo muestra que su vida se desmorona.", "El público entiende la evolución sin necesidad de palabras."], resultado: "El vestuario narra la decadencia del personaje." },
    { enunciado: "¿Qué dirección de luz elegirías para: a) una confesión íntima; b) un fantasma; c) un dúo de danza?", pasos: ["a) Cenital estrecha: aísla al personaje en la oscuridad.", "b) Desde abajo o contraluz frío: efecto inquietante.", "c) Lateral: esculpe los cuerpos y el movimiento."], resultado: "a) Cenital; b) contrapicado o contraluz; c) lateral." },
  ],
  errores: [
    "Pensar que la escenografía tiene que ser realista y cara: a veces menos es más.",
    "Usar armas u objetos peligrosos reales como atrezo.",
    "Diseñar un vestuario bonito que impide moverse o cambiarse a tiempo.",
    "Iluminar solo de frente: la cara queda plana y sin volumen.",
    "Poner música de fondo todo el tiempo: el silencio también es un recurso.",
  ],
  ejercicios: [
    { q: "Nombra y explica cinco partes del escenario.", sol: "Embocadura (marco), proscenio (parte delantera), bambalinas (telas de arriba), patas (telas laterales), foro (fondo); también peine, varas y foso." },
    { q: "¿Qué funciones tiene la escenografía?", sol: "Situar la acción en un lugar y época, crear ambiente, transmitir ideas con símbolos y facilitar el movimiento de los actores." },
    { q: "Diferencia escenografía realista, sintética y simbólica.", sol: "Realista: reproduce el lugar con detalle. Sintética: pocos elementos que lo sugieren. Simbólica: elementos con un significado más allá del lugar." },
    { q: "¿Qué es el atrezo y qué tipos hay?", sol: "Los objetos de escena: atrezo de decorado y atrezo de mano (el que usan los actores)." },
    { q: "¿Qué es un figurín y quién lo hace?", sol: "El dibujo del diseño de un vestuario; lo hace el figurinista." },
    { q: "Escribe cuatro informaciones que da el vestuario.", sol: "Época, clase social, profesión y carácter del personaje (también edad y evolución)." },
    { q: "Escribe cinco funciones de la iluminación.", sol: "Iluminar, dirigir la mirada, crear ambiente, indicar tiempo y lugar, separar escenas y crear efectos." },
    { q: "¿Qué efecto produce el contraluz?", sol: "Dibuja la silueta del actor y lo separa del fondo." },
    { q: "Diferencia música diegética y extradiegética con un ejemplo.", sol: "Diegética: la oyen los personajes (una radio en escena). Extradiegética: solo la oye el público para crear emoción (música de suspense)." },
    { q: "Propón cómo convertir cuatro cajas y una tela azul en tres lugares distintos.", sol: "Respuesta abierta. Ejemplo: cajas en fila con la tela delante = barco en el mar; cajas apiladas = muralla; tela sobre dos cajas = cama." },
  ],
  quiz: [
    { q: "El marco que separa escena y sala es la…", o: ["embocadura", "bambalina", "pata"], a: 0, e: "Como un marco de cuadro." },
    { q: "Las telas verticales de los lados son las…", o: ["patas", "bambalinas", "varas"], a: 0, e: "Ocultan los laterales." },
    { q: "Los objetos que usan los actores son el atrezo de…", o: ["mano", "decorado", "luz"], a: 0, e: "Una carta, una espada…" },
    { q: "El figurinista diseña…", o: ["el vestuario", "los focos", "la música"], a: 0, e: "Mediante figurines." },
    { q: "Un banco y una farola que sugieren un parque son una escenografía…", o: ["sintética", "realista", "audiovisual"], a: 0, e: "Pocos elementos." },
    { q: "La luz desde arriba se llama…", o: ["cenital", "frontal", "contraluz"], a: 0, e: "Aísla y dramatiza." },
    { q: "La luz lateral es ideal para…", o: ["la danza", "leer", "el público"], a: 0, e: "Esculpe el cuerpo." },
    { q: "El foco que sigue a un actor es el…", o: ["cañón de seguimiento", "panorama", "PC"], a: 0, e: "Se maneja a mano." },
    { q: "Una radio que suena y oyen los personajes es música…", o: ["diegética", "extradiegética", "ambiental"], a: 0, e: "Está dentro de la historia." },
    { q: "El color azul en la luz suele sugerir…", o: ["noche o frío", "fuego", "hogar"], a: 0, e: "Ambiente frío." },
  ],
  examen: [
    { q: "La luz desde abajo produce un efecto…", o: ["inquietante", "natural", "alegre"], a: 0, e: "Contrapicado." },
    { q: "El peine sirve para…", o: ["subir y bajar decorados y focos", "peinar a los actores", "guardar vestuario"], a: 0, e: "Parte superior del escenario." },
    { q: "Un cue es…", o: ["el momento de lanzar un efecto", "un tipo de foco", "un figurín"], a: 0, e: "Pie para luz o sonido." },
  ],
  feynman: ["Las partes del escenario", "Funciones y tipos de escenografía, atrezo y vestuario", "Funciones, tipos y direcciones de la luz", "El espacio sonoro y cómo diseñar con pocos medios"],
  mapa: mapa("PLÁSTICA ESCÉNICA", "var(--sun)", [
    ["Espacio", "escenario · escenografía", "var(--sun)"],
    ["Personaje", "vestuario · maquillaje · atrezo", "var(--red)"],
    ["Luz", "funciones · focos · color", "var(--pen)"],
    ["Sonido", "música · efectos · silencio", "var(--leaf)"],
  ], 270),
  tarjetas: [
    ["Embocadura", "Marco que separa el escenario de la sala."],
    ["Bambalinas y patas", "Telas de arriba y de los lados que ocultan lo que no se ve."],
    ["Escenografía sintética", "Pocos elementos que sugieren el lugar."],
    ["Atrezo", "Objetos de escena: de decorado y de mano."],
    ["Figurín", "Dibujo con el diseño de un vestuario."],
    ["Contraluz", "Luz desde atrás que dibuja la silueta."],
    ["Luz cenital", "Luz desde arriba que aísla al actor."],
    ["Música diegética", "La que oyen los propios personajes."],
  ],
  familias: ["Con una linterna, probad en una habitación oscura cómo cambia una cara con luz frontal, lateral y desde abajo.", "Elegid un personaje de una película y analizad qué cuenta su vestuario.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Artes Escénicas y Danza 4º ESO (optativa autonómica; marco del RD 217/2022): espacio escénico, escenografía, vestuario, caracterización, iluminación y sonido.",
    ideas: ["Maqueta de escenografía en una caja de zapatos.", "Laboratorio de luz con linternas y papeles de colores.", "Diseño de figurines para un personaje de una obra leída en clase."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Museo Nacional del Teatro (Almagro)", url: "https://museoteatro.mcu.es/" },
  ],
  revisado: "2026-11-12",
};
