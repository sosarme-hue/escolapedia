// Infantil 3 años · Descubrimiento y exploración del entorno: Grande y pequeño. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, t, PROF, FUENTES } = require("./_inf3a");
const { lista, mural, vid, ic } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

// Pareja grande / pequeño del mismo dibujo, con su palabra debajo.
const par = (label, d, sg, sp, tit, yg = 92, yp = 112) => escena(label, `${ic(d, 80, yg, sg)}${ic(d, 192, yp, sp)}${t(80, 160, "grande", 22, A)}${t(192, 160, "pequeño", 22, R)}`, tit);

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "3-anos",
  titulo: "Grande y pequeño",
  minutos: 10,
  objetivos: ["Distinguir entre grande y pequeño", "Comparar dos objetos y decir cuál es más grande", "Ordenar del más pequeño al más grande"],
  claves: ["grande", "pequeño", "comparar", "ordenar"],
  pregunta: {
    texto: "¿Quién es más grande: tú o un adulto? ¿Y tú o un gatito?",
    respuesta: "El adulto es más <mark>grande</mark> que tú. Y tú eres más grande que un gatito, ¡que es <mark>pequeño</mark>!",
  },
  bloques: [
    {
      html: `<h3>Grande y pequeño</h3><p>Mira estas dos pelotas. Una es <mark>grande</mark>: ocupa mucho sitio. La otra es <mark>pequeña</mark>: ocupa poco.</p><p>Con los brazos, haz grande: ¡muy abiertos! Ahora pequeño: ¡casi juntos!</p>`,
      svg: par("Una pelota grande y una pelota pequeña", "pelota", 2.6, 1, "Dos pelotas"),
    },
    {
      html: `<h3>Animales grandes y pequeños</h3><p>El <mark>elefante</mark> es muy grande. La <mark>hormiga</mark> es muy pequeña.</p><p>El elefante pesa mucho y anda despacio: ¡pum, pum! La hormiga es tan pequeña que cabe en tu dedo.</p>`,
      svg: escena("Un elefante grande y una hormiga pequeña", `${ic("elefante", 82, 88, 2.7)}${ic("hormiga", 200, 118, 0.8)}${t(82, 160, "elefante", 20, A)}${t(200, 160, "hormiga", 20, R)}`, "Grande y pequeño"),
    },
    {
      html: `<h3>Comparamos</h3><p>Para saber cuál es más grande, ponemos las cosas <mark>una al lado de la otra</mark>.</p><p>Papá oso es grande y el osito es pequeño. ¿Tus zapatos o los de mamá? ¡Los de mamá son más grandes!</p>`,
      svg: escena("Papá oso grande al lado de un osito pequeño", `${ic("oso", 90, 88, 2.6)}${ic("oso", 190, 116, 1.1)}${t(90, 160, "papá oso", 20, A)}${t(190, 160, "osito", 20, R)}`, "Uno al lado del otro"),
      video: vid("cmHAc_ouq_s", "Grande y pequeño: canción de los opuestos", "Bebefinn en español", 5322943),
    },
    {
      html: `<h3>De pequeño a grande</h3><p>También podemos <mark>ordenar</mark>: primero el pequeño, luego el mediano y al final el grande.</p><p>Como las muñecas que se meten unas dentro de otras, o los vasos que se apilan.</p>`,
      svg: escena("Tres casas ordenadas: pequeña, mediana y grande", `${ic("casa", 46, 120, 1)}${ic("casa", 116, 108, 1.7)}${ic("casa", 200, 92, 2.6)}${t(46, 162, "pequeña", 15, R, 70)}${t(116, 162, "mediana", 15, N, 70)}${t(200, 162, "grande", 15, A, 80)}`, "Pequeña, mediana, grande"),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saber si algo es grande o pequeño nos <mark>ayuda</mark> cada día.</p><p>Elegimos los zapatos de nuestro tamaño. Una caja grande guarda muchos juguetes. Y un trozo pequeño de pan cabe en la boca.</p>`,
      svg: lista("Grande o pequeño: zapatos de mi talla, caja grande para guardar, trozo pequeño para comer", [["Zapatos de mi talla", A], ["Caja grande: guarda mucho", N], ["Trozo pequeño: a la boca", R]], { titulo: "Me sirve para…" }),
    },
    {
      html: `<h3>Jugamos: ¡gigante y enanito!</h3><p>Cuando el adulto dice «<mark>¡gigante!</mark>», te pones de puntillas y estiras los brazos muy alto.</p><p>Cuando dice «<mark>¡enanito!</mark>», te agachas y te haces una bolita. ¡Cada vez más rápido!</p>`,
      svg: escena("Un niño estirado como un gigante y otro agachado como un enanito", `${ic("nino", 70, 60, 1.6)}<path d="M70 86 V136 M70 96 L44 70 M70 96 L96 70 M70 136 L58 160 M70 136 L82 160" stroke="var(--pen)" stroke-width="7" stroke-linecap="round" fill="none"/>
        ${ic("nina", 190, 128, 1.3)}<ellipse cx="190" cy="156" rx="26" ry="10" fill="var(--red)"/>${t(190, 86, "¡enanito!", 18, R, 100)}${t(150, 40, "¡gigante!", 18, A, 90)}`, ""),
    },
  ],
  figura: {
    titulo: "Grande y pequeño",
    svg: mural("Grande y pequeño: el elefante es grande, la hormiga pequeña; comparamos y ordenamos", [["elefante", "grande", "ocupa mucho", A], ["hormiga", "pequeño", "ocupa poco", R], ["oso", "comparo", "uno al lado del otro", N], ["casa", "ordeno", "de pequeño a grande", V]], "Grande y pequeño"),
  },
  video: { ...vid("mwqqaibODmg", "Grande y pequeño", "Little Baby Bum en Español", 3126693), busqueda: "grande y pequeño para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué pie es más grande, el tuyo o el de papá?",
      pasos: ["Ponemos los dos pies juntos, uno al lado del otro.", "Miramos cuál es más largo."],
      resultado: "el pie de papá es más grande; el mío, más pequeño." },
    { enunciado: "Ordenamos tres vasos.",
      pasos: ["Buscamos el más pequeño y lo ponemos primero.", "Después el mediano y al final el grande."],
      resultado: "pequeño, mediano y grande." },
  ],
  errores: [
    "Comparar cosas muy parecidas: al principio, diferencias muy claras (elefante y hormiga).",
    "Usar solo «grande»: decid también «pequeño» y «más grande que…».",
    "Olvidar el cuerpo: los gestos de gigante y enanito ayudan más que la ficha.",
  ],
  ejercicios: [
    { q: "Busca en casa una pelota grande y una pequeña.", sol: "Para la familia: ponedlas juntas y decid «grande» y «pequeña»." },
    { q: "Pon tu mano encima de la mano de un adulto.", sol: "Para la familia: ¿cuál es más grande? La del adulto." },
    { q: "Ordena tres peluches de pequeño a grande.", sol: "Para la familia: si se equivoca, comparad de dos en dos." },
    { q: "Juega a gigante y enanito.", sol: "Para la familia: alternad rápido y lento; es un buen juego para moverse." },
    { q: "Dibuja un sol grande y un sol pequeño.", sol: "Para la familia: preguntad cuál es cuál al terminar." },
    { q: "Guarda los juguetes grandes en la caja grande y los pequeños en la caja pequeña.", sol: "Para la familia: clasificar por tamaño al recoger." },
  ],
  quiz: [
    { q: "¿Quién es más grande?", o: ["el elefante", "la hormiga", "el ratón"], a: 0, e: "El elefante." },
    { q: "¿Quién es más pequeño?", o: ["la hormiga", "el oso", "la vaca"], a: 0, e: "La hormiga." },
    { q: "Un adulto es más… que un bebé.", o: ["grande", "pequeño", "verde"], a: 0, e: "Más grande." },
    { q: "Para comparar ponemos las cosas…", o: ["una al lado de la otra", "muy lejos", "escondidas"], a: 0, e: "Juntas." },
    { q: "Cuando digo «¡enanito!» me pongo…", o: ["pequeño", "grande", "de puntillas"], a: 0, e: "Me agacho: pequeño." },
    { q: "¿Qué es más pequeño: un coche o una pelota de tenis?", o: ["la pelota", "el coche", "iguales"], a: 0, e: "La pelota." },
  ],
  examen: [
    { q: "Una casa es más… que un perro.", o: ["grande", "pequeña", "rápida"], a: 0, e: "Más grande." },
    { q: "Ordenamos: pequeño, mediano y…", o: ["grande", "azul", "rojo"], a: 0, e: "Grande." },
    { q: "Los zapatos de un bebé son…", o: ["pequeños", "grandes", "gigantes"], a: 0, e: "Pequeños." },
  ],
  feynman: ["Qué es grande y qué es pequeño", "Cómo comparo dos cosas", "Cómo ordeno de pequeño a grande"],
  mapa: mapa("GRANDE Y PEQUEÑO", "var(--pri)", [
    ["Grande", "elefante: ocupa mucho", A],
    ["Pequeño", "hormiga: ocupa poco", R],
    ["Comparo", "uno al lado del otro", N],
    ["Ordeno", "pequeño, mediano, grande", V],
  ], 230),
  tarjetas: [
    ["¿Elefante u hormiga: quién es grande?", "El elefante"],
    ["¿Quién es pequeña?", "La hormiga"],
    ["¿Cómo comparo?", "Pongo las cosas juntas"],
    ["Pequeño, mediano y…", "Grande"],
    ["¡Gigante!", "Me estiro muy alto"],
    ["¡Enanito!", "Me agacho"],
  ],
  familias: [
    "Al recoger, separad juguetes grandes y pequeños.",
    "Comparad manos, pies y zapatos de toda la familia.",
    "Jugad con vasos o cajas que encajan unas dentro de otras.",
    "Usad «más grande que» y «más pequeño que» en el día a día.",
  ],
  profesores: PROF("Diálogo corporal con el entorno y exploración de objetos: cualidades y atributos (tamaño), comparación y ordenación en series de tres elementos", [
    "Cuento de «Los tres osos» con cuencos, sillas y camas de tres tamaños.",
    "Torres de vasos apilables y matrioskas.",
    "Juego motor de gigantes y enanitos con música.",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
