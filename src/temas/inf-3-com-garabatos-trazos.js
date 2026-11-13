// Infantil 3 años · Comunicación y representación: Garabatos y trazos. Para hacer con un adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, mural, vid } = require("./_peque");
const { R, A, V, N, S, escena, trazos, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "3-anos",
  titulo: "Garabatos y trazos",
  minutos: 10,
  objetivos: ["Coger bien la cera o el lápiz", "Hacer garabatos libres en un papel grande", "Dibujar líneas rectas, onduladas y redondas"],
  claves: ["garabato", "trazo", "línea recta", "línea ondulada", "redondel", "ceras"],
  pregunta: {
    texto: "¿Qué dibujas cuando coges una cera?",
    respuesta: "¡Garabatos! Son el primer paso. Poco a poco salen <mark>líneas</mark> y <mark>redondeles</mark>.",
  },
  bloques: [
    {
      html: `<h3>Cogemos la cera</h3><p>Cogemos la cera con <mark>tres dedos</mark>.</p><p>El dedo gordo, el índice y el del medio. La otra mano sujeta el papel. ¡Ya estamos listos para dibujar!</p><p>Prueba con una cera gorda: es más fácil de coger.</p>`,
      svg: escena("Una mano coge la cera con tres dedos", [["mano", 100, 100, 2.6], ["lapiz", 150, 82, 1.8], ["t", 130, 164, "con tres dedos", A, 20]]),
    },
    {
      html: `<h3>Garabatos libres</h3><p>Primero hacemos <mark>garabatos</mark>.</p><p>Movemos la mano por todo el papel. Vueltas y más vueltas. ¡No hay errores! Garabatear es divertido y mueve los dedos.</p><p>Usa muchos colores y un papel muy grande, en el suelo.</p>`,
      svg: trazos("Garabatos de colores", [["garabato", R], ["garabato", A], ["garabato", V]], { titulo: "Garabatos" }),
    },
    {
      html: `<h3>Rayas rectas</h3><p>Ahora hacemos <mark>rayas rectas</mark>.</p><p>De un lado a otro, como un camino. También de arriba abajo, como la lluvia. ¡Despacito y sin levantar la cera!</p><p>También podemos hacer puntos: pim, pim, pim, en fila.</p>`,
      svg: trazos("Líneas rectas", [["recta", A], ["recta", R], ["puntos", V]], { titulo: "Rayas rectas" }),
    },
    {
      html: `<h3>Olas y redondeles</h3><p>Hacemos <mark>olas</mark> como el mar: arriba y abajo.</p><p>Y hacemos <mark>redondeles</mark>, dando la vuelta hasta volver al principio. ¡Como una pelota!</p><p>Las olas suben y bajan. El redondel no tiene esquinas.</p>`,
      svg: trazos("Olas, zigzag y redondeles", [["ondas", N], ["zigzag", R], ["circulo", A]], { titulo: "Olas y redondeles" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Hacer trazos pone <mark>fuertes los dedos</mark>.</p><p>Así, de mayores, podremos escribir letras y números. Y ya hoy podemos dibujar el sol, la lluvia o el mar.</p><p>Cada día los trazos salen un poco mejor. ¡Sigue practicando!</p>`,
      svg: dibujos("Con trazos dibujamos el sol, la lluvia y el mar", [["sol", "sol", S], ["lluvia", "lluvia", A], ["pez", "mar", N]]),
    },
    {
      html: `<h3>Jugamos a seguir caminos</h3><p>Ayuda al pato a llegar al <mark>agua</mark>.</p><p>Sigue el camino con el dedo. Luego, con la cera, sin salirte. ¡Muy bien, ya ha llegado!</p><p>Si te sales, no pasa nada: ¡vuelve a intentarlo!</p>`,
      svg: escena("Camino de puntos desde el pato hasta el agua", [["pato", 34, 90, 1.4], ["svg", `<path d="M60 90 q 30 -40 60 0 t 60 0" fill="none" stroke="var(--pen)" stroke-width="5" stroke-dasharray="2 10" stroke-linecap="round"/>`], ["agua", 222, 90, 1.4], ["t", 130, 150, "sigue el camino", R, 20]]),
    },
  ],
  figura: {
    titulo: "Garabatos y trazos",
    svg: mural("Trazos: garabato, recta, ondulada y redondel", [["lapiz", "garabato", "vueltas libres", R], ["regla", "recta", "como un camino", A], ["pez", "olas", "arriba y abajo", V], ["pelota", "redondel", "como una pelota", N]], "Garabatos y trazos"),
  },
  video: { ...vid("YRxbWZNhRjw", "Kent el Elefante dibuja diferentes tipos de líneas · Aprende jugando", "Kent el Elefante - Diversión para Niños", 521577), busqueda: "trazos para niños de infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Dibujamos lluvia.",
      pasos: ["Cogemos una cera azul.", "Hacemos rayas de arriba abajo.", "Muchas rayas, una al lado de otra."],
      resultado: "¡Ya llueve en el papel!" },
    { enunciado: "Dibujamos una pelota.",
      pasos: ["Ponemos la cera en el papel.", "Damos la vuelta.", "Volvemos al principio."],
      resultado: "Un redondel: ¡la pelota!" },
  ],
  errores: [
    "Coger la cera con el puño: se coge con tres dedos.",
    "Usar un papel muy pequeño: al principio, papel grande.",
    "Apretar tanto que se rompe la cera.",
  ],
  ejercicios: [
    { q: "Haz garabatos en un papel grande.", sol: "Para la familia: papel de embalar en el suelo es ideal." },
    { q: "Dibuja lluvia con rayas.", sol: "Rayas de arriba abajo con cera azul." },
    { q: "Dibuja olas del mar.", sol: "Líneas onduladas de lado a lado." },
    { q: "Haz redondeles de colores.", sol: "Valen grandes o pequeños; que cierre la vuelta." },
    { q: "Sigue un camino con el dedo.", sol: "Dibujad un camino de puntos y que lo repase." },
    { q: "Haz trazos en arena o harina.", sol: "Con el dedo en una bandeja: sin papel también se aprende." },
  ],
  quiz: [
    { q: "La cera se coge con…", o: ["tres dedos", "los pies", "la boca"], a: 0, e: "Con tres dedos." },
    { q: "Para la lluvia hacemos rayas…", o: ["de arriba abajo", "en redondel", "ninguna"], a: 0, e: "De arriba abajo." },
    { q: "Un redondel es como…", o: ["una pelota", "un palo", "una escalera"], a: 0, e: "Redondo como una pelota." },
    { q: "Las olas suben y…", o: ["bajan", "se paran", "se borran"], a: 0, e: "Arriba y abajo." },
    { q: "Los garabatos son…", o: ["vueltas libres", "letras", "números"], a: 0, e: "Vueltas libres por el papel." },
    { q: "La otra mano…", o: ["sujeta el papel", "se esconde", "come"], a: 0, e: "Sujeta el papel." },
  ],
  examen: [
    { q: "¿Qué línea es como un camino?", o: ["la recta", "el garabato", "el redondel"], a: 0, e: "La recta." },
    { q: "Hacer trazos pone fuertes…", o: ["los dedos", "las orejas", "el pelo"], a: 0, e: "Los dedos." },
    { q: "Para el mar dibujamos…", o: ["olas", "cuadrados", "puntos"], a: 0, e: "Líneas onduladas." },
  ],
  feynman: ["La cera se coge con tres dedos", "Hay rayas rectas, olas y redondeles", "Los trazos preparan para escribir"],
  mapa: mapa("TRAZOS", "var(--inf)", [
    ["Garabato", "vueltas libres", R],
    ["Recta", "como un camino", A],
    ["Olas", "arriba y abajo", V],
    ["Redondel", "como una pelota", N],
  ], 230),
  tarjetas: [
    ["La cera se coge con…", "Tres dedos"],
    ["Lluvia", "Rayas de arriba abajo"],
    ["Mar", "Olas"],
    ["Pelota", "Redondel"],
    ["Camino", "Raya recta"],
    ["Garabato", "Vueltas libres"],
  ],
  familias: [
    "Dejad papel y ceras gruesas a su alcance.",
    "No corrijáis los garabatos: preguntad qué ha dibujado.",
    "Dibujad juntos en la arena de la playa o del parque.",
    "Usad tiza en el suelo del patio para hacer caminos.",
  ],
  profesores: PROF("Lenguaje plástico y grafomotricidad: prensión, garabateo controlado, trazos rectos, ondulados y circulares", ["Murales de papel continuo en el suelo.", "Trazos en bandejas de arena o sal.", "Caminos de puntos para repasar."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
