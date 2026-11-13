// Religión, Infantil 4 años: la Pascua.
const { mapa } = require("./_util");
const { svg, rot, nino, sol, flor, suelo, jesus, tumba, huevo, cruz, ic, secuencia, dibujos, mural, vid, R, A, V, N, M, W, G, MARRON, PROF, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Religión",
  curso: "4-anos",
  titulo: "La Pascua",
  minutos: 15,
  objetivos: ["Conocer que en Pascua los cristianos celebran que Jesús resucitó", "Reconocer los símbolos de la Pascua: las palmas, la cruz y la luz", "Vivir la Pascua como una fiesta de alegría"],
  claves: ["Pascua", "Semana Santa", "Jesús", "resucitar", "alegría", "palmas"],
  pregunta: {
    texto: "En primavera hay una fiesta con palmas, procesiones y monas de Pascua. ¿Sabes qué se celebra?",
    respuesta: "Es la <mark>Pascua</mark>. Los cristianos celebran que <b>Jesús está vivo</b>: ¡resucitó!",
  },
  bloques: [
    {
      html: `<h3>Jesús llega a Jerusalén</h3><p>Un día Jesús llegó a la ciudad de <mark>Jerusalén</mark> montado en un burrito.</p><p>La gente estaba muy contenta. Movía <b>ramas de palmera</b> y cantaba: «¡Hosanna!».</p><p>Es el <b>Domingo de Ramos</b>.</p>`,
      svg: svg("Jesús entra en un burrito y la gente le saluda con palmas", `${ic("burro", 110, 118, 2)}${jesus(112, 108, { s: 0.65 })}${[180, 220].map((x) => nino(x, 150, { c: V, pose: "arriba", s: 0.9 }) + `<path d="M${x + 13} ${150 - 62} q8 -24 2 -40" stroke="var(--leaf)" stroke-width="4" fill="none"/>`).join("")}${suelo(150)}${rot(130, 172, "¡Hosanna!", { color: V })}`),
    },
    {
      html: `<h3>La última cena</h3><p>Jesús cenó con sus <mark>amigos</mark>, los apóstoles.</p><p>Compartió con ellos el <b>pan</b> y les dijo que se quisieran mucho, como él los quería.</p><p>Fue una cena muy especial.</p>`,
      svg: svg("Jesús y sus amigos alrededor de una mesa con pan", `<rect x="40" y="110" width="180" height="14" rx="4" fill="${MARRON}"/><path d="M60 124 V150 M200 124 V150" stroke="${MARRON}" stroke-width="5"/>${jesus(130, 110, { s: 0.9, brazos: true })}${nino(72, 110, { c: V, s: 0.75 })}${nino(188, 110, { c: N, s: 0.75 })}${ic("pan", 104, 102, 0.6)}${ic("pan", 156, 102, 0.6)}${rot(130, 172, "Compartir el pan", { color: MARRON })}`),
    },
    {
      html: `<h3>Un día triste</h3><p>Después, unas personas que no querían a Jesús lo <mark>clavaron en una cruz</mark> y murió.</p><p>Sus amigos y su madre, María, estaban muy <b>tristes</b>.</p><p>Lo pusieron en un sepulcro cerrado con una piedra.</p>`,
      svg: svg("Una cruz en una colina bajo un cielo gris", `<rect x="14" y="14" width="232" height="124" rx="10" fill="#c7cdd9" opacity=".6"/><path d="M14 138 Q130 90 246 138z" fill="var(--leaf)" opacity=".7"/>${cruz(130, 112, 1.6)}${rot(130, 164, "Un día muy triste", { color: G })}`),
    },
    {
      html: `<h3>¡Jesús ha resucitado!</h3><p>Al tercer día, unas mujeres fueron al sepulcro. ¡La piedra estaba quitada y estaba <mark>vacío</mark>!</p><p>Un ángel les dijo: <b>«¡Jesús ha resucitado! ¡Está vivo!»</b></p><p>¡Qué alegría tan grande!</p>`,
      svg: svg("El sepulcro vacío con la piedra quitada y el sol que sale", `${sol(200, 40, 18)}${tumba(110, 140)}${flor(200, 150)}${flor(222, 150, "var(--sun)")}${suelo(150)}${rot(130, 172, "¡Está vivo!", { color: M, size: 16 })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>La Pascua es la fiesta más importante para los cristianos. Es una fiesta de <mark>alegría</mark> y de vida nueva.</p><p>En casa se comparte la mona o los huevos de Pascua, señal de vida nueva.</p>`,
      svg: svg("Tres huevos de Pascua decorados y unas flores de primavera", `${huevo(80, 90, R, 1.3)}${huevo(130, 84, A, 1.5)}${huevo(180, 90, V, 1.3)}${flor(40, 150)}${flor(220, 150, "var(--sun)")}${suelo(150)}${rot(130, 172, "Vida nueva y alegría", { color: R })}`),
    },
    {
      html: `<h3>Juego: la historia en orden</h3><p>Tenemos tres <mark>dibujos</mark>: las palmas, la cruz y el sepulcro vacío con el sol.</p><p>¿Cuál va primero? ¿Y después? ¿Y al final?</p><p>Ordénalos y cuenta la historia de la Pascua.</p>`,
      svg: secuencia("Tres viñetas en orden: las palmas, la cruz y el sol del sepulcro vacío", [["", "palmas", V, `<path d="M0 22 q4 -20 -2 -40" stroke="var(--leaf)" stroke-width="5" fill="none"/><path d="M0 -10 l-12 -6 M0 -2 l12 -8 M-1 -20 l-10 -4" stroke="var(--leaf)" stroke-width="3"/>`], ["", "la cruz", MARRON, cruz(0, 22, 1.1)], ["sol", "¡está vivo!", M]], { titulo: "Ordena la Pascua" }),
    },
  ],
  figura: {
    titulo: "La Pascua",
    svg: mural("Cuatro tarjetas: las palmas del Domingo de Ramos, el pan de la última cena, la cruz y el sol de la resurrección", [["arbol", "Ramos", "palmas y alegría", V], ["pan", "Última cena", "compartir el pan", MARRON], ["", "La cruz", "un día triste", G], ["sol", "¡Resucitó!", "Jesús está vivo", M]], "La Semana Santa y la Pascua"),
  },
  video: { ...vid("PvXXLwsDhEg", "La historia de la resurrección de Jesús", "Minno - Bible Stories for Kids", 5293746), busqueda: "la Pascua para niños resurrección de Jesús" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué celebramos el Domingo de Ramos?", pasos: ["Jesús llega a Jerusalén en un burrito.", "La gente lo saluda con palmas."], resultado: "que Jesús entra en Jerusalén y la gente lo recibe con alegría." },
    { enunciado: "¿Qué encontraron las mujeres en el sepulcro?", pasos: ["Fueron al tercer día.", "La piedra estaba quitada.", "Un ángel les dio la noticia."], resultado: "el sepulcro vacío: ¡Jesús había resucitado!" },
  ],
  errores: [
    "Pensar que la Pascua es solo comer la mona: celebramos que Jesús resucitó.",
    "Creer que la historia acaba triste: ¡acaba con la alegría de la resurrección!",
    "Confundir la Pascua con la Navidad: en Navidad nace Jesús; en Pascua resucita.",
  ],
  ejercicios: [
    { q: "Decora un huevo de Pascua de papel.", sol: "Para la familia: colores alegres de primavera." },
    { q: "Ordena tres dibujos: palmas, cruz y sol.", sol: "Primero las palmas, después la cruz y al final el sol de la resurrección." },
    { q: "Dibuja una palma del Domingo de Ramos.", sol: "Una rama larga verde con hojas." },
    { q: "Cuenta con tus palabras qué pasó en Pascua.", sol: "Para la familia: ayudadle con «primero, después, al final»." },
    { q: "Comparte la mona o un postre con la familia.", sol: "Para la familia: es una fiesta para compartir." },
    { q: "Di una palabra que explique la Pascua.", sol: "Alegría, vida, Jesús vive…" },
  ],
  quiz: [
    { q: "En Pascua celebramos que Jesús…", o: ["Resucitó", "Nació", "Se fue de viaje"], a: 0, e: "¡Jesús está vivo!" },
    { q: "El Domingo de Ramos la gente llevaba…", o: ["Palmas", "Paraguas", "Globos"], a: 0, e: "Ramas de palmera." },
    { q: "¿En qué entró Jesús a Jerusalén?", o: ["En un burrito", "En un coche", "En un barco"], a: 0, e: "En un burrito." },
    { q: "En la última cena Jesús compartió…", o: ["El pan", "Juguetes", "Zapatos"], a: 0, e: "Compartió el pan." },
    { q: "El sepulcro estaba…", o: ["Vacío", "Cerrado y lleno", "Pintado"], a: 0, e: "¡Estaba vacío!" },
    { q: "La Pascua es una fiesta de…", o: ["Alegría", "Miedo", "Frío"], a: 0, e: "Alegría y vida nueva." },
  ],
  examen: [
    { q: "¿Quién dijo que Jesús había resucitado?", o: ["Un ángel", "Un rey", "Un pastor"], a: 0, e: "Un ángel a las mujeres." },
    { q: "En Navidad nace Jesús y en Pascua…", o: ["Resucita", "Nace otra vez", "Duerme"], a: 0, e: "Resucita." },
    { q: "Los huevos de Pascua son señal de…", o: ["Vida nueva", "Invierno", "Tristeza"], a: 0, e: "De vida nueva." },
  ],
  feynman: ["Cuenta la historia de la Pascua en orden", "Explica por qué la Pascua es una fiesta alegre"],
  mapa: mapa("LA PASCUA", "var(--inf)", [
    ["Ramos", "palmas y alegría", V],
    ["Última cena", "compartir el pan", MARRON],
    ["La cruz", "un día triste", G],
    ["¡Resucitó!", "Jesús está vivo", M],
  ], 220),
  tarjetas: [
    ["¿Qué celebramos en Pascua?", "Que Jesús resucitó"],
    ["¿Qué llevaba la gente el Domingo de Ramos?", "Palmas"],
    ["¿En qué llegó Jesús a Jerusalén?", "En un burrito"],
    ["¿Qué compartió en la última cena?", "El pan"],
    ["¿Cómo estaba el sepulcro?", "Vacío"],
    ["¿Qué sentimos en Pascua?", "Alegría"],
  ],
  familias: [
    "Explicad la Pascua con palabras sencillas y terminad siempre con la alegría de la resurrección.",
    "Haced juntos la mona o decorad huevos de Pascua.",
    "Si podéis, llevad una palma el Domingo de Ramos.",
    "Leed la historia en una Biblia infantil.",
  ],
  profesores: PROF("Religión Católica en Educación Infantil: la Semana Santa y la Pascua; entrada en Jerusalén, última cena, muerte y resurrección de Jesús contadas con delicadeza; símbolos y tradiciones de la fiesta. Área de opción voluntaria", ["Secuencia de tres viñetas para ordenar.", "Decoración de huevos de Pascua como signo de vida.", "Canción alegre de resurrección."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
