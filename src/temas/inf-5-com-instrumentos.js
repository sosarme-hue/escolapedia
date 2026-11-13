// Infantil 5 años · Comunicación y representación: instrumentos musicales.
const { tema, mapa, svg, rot, big, ic, nino, nota, dibujos, mural, lista, vid, PROF, R, A, V, N, M, W, K } = require("./_inf5b");

module.exports = tema({
  materia: "Comunicación y representación de la realidad",
  titulo: "Instrumentos musicales",
  objetivos: ["Nombrar instrumentos musicales sencillos", "Saber que unos se golpean, otros se soplan y otros tienen cuerdas", "Hacer música con un instrumento fabricado en casa"],
  claves: ["instrumento", "golpear", "soplar", "cuerdas", "música"],
  pregunta: {
    texto: "¿Puedes hacer música sin instrumentos? Prueba con las manos y los pies.",
    respuesta: "¡Sí! Palmas y pisotones hacen ritmo. Pero los <mark>instrumentos</mark> hacen sonidos nuevos: ¡tun-tun, tilín, fiuuu!",
  },
  bloques: [
    {
      html: `<h3>Los instrumentos hacen música</h3><p>Un <mark>instrumento musical</mark> es un objeto que hace sonidos bonitos.</p><p>Con ellos tocamos canciones. Hay muchos: el tambor, la flauta, la guitarra, el piano…</p><p>¿Cuál te gusta más?</p>`,
      svg: dibujos("Tambor, flauta, guitarra y piano", [["tambor", "tambor", R], ["flauta", "flauta", A], ["guitarra", "guitarra", V], ["piano", "piano", N]], { titulo: "Instrumentos musicales" }),
    },
    {
      html: `<h3>Instrumentos que se golpean</h3><p>Algunos suenan al <mark>golpearlos</mark> o agitarlos: son de percusión.</p><p>El <b>tambor</b> hace «tun-tun». Las <b>maracas</b>, «chis-chas». El <b>triángulo</b>, «tilín».</p><p>Puedes tocarlos fuerte o flojito.</p>`,
      svg: dibujos("Tambor, maracas, triángulo y xilófono", [["tambor", "tun-tun", R], ["maracas", "chis-chas", M], ["triangulo", "tilín", A], ["xilofono", "tin-tan", V]], { titulo: "Se golpean o se agitan" }),
    },
    {
      html: `<h3>Instrumentos que se soplan</h3><p>Otros suenan al <mark>soplar</mark>: son de viento.</p><p>La <b>flauta</b> tiene agujeros. Si tapas unos u otros, cambia la nota.</p><p>La trompeta también se sopla.</p><p>¡Prueba a soplar!</p>`,
      svg: svg("Un niño sopla una flauta y salen notas musicales", `${nino(80, 160, { c: A, pose: "canta" })}<g transform="translate(108 98) rotate(10) scale(1.4)">${require("./_inf5b").I.flauta}</g>${nota(170, 70, A)}${nota(200, 50, R)}${nota(226, 80, V)}${rot(180, 150, "fiuuu", { color: A, size: 22 })}`),
    },
    {
      html: `<h3>Instrumentos con cuerdas</h3><p>La <b>guitarra</b> y el <b>violín</b> tienen <mark>cuerdas</mark>.</p><p>Al tocar las cuerdas, vibran y suenan.</p><p>El violín se toca con un arco. La guitarra, con los dedos.</p>`,
      svg: dibujos("Guitarra y violín, instrumentos de cuerda", [["guitarra", "guitarra", V], ["violin", "violín", R]], { titulo: "Tienen cuerdas", nota: "Las cuerdas vibran y suenan" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los instrumentos sirven para <mark>tocar canciones</mark>, bailar y celebrar.</p><p>Muchos juntos forman una <b>orquesta</b> o una banda. ¡En las fiestas siempre hay música!</p><p>¿Qué música hay en tu pueblo?</p>`,
      svg: svg("Tres niños tocan juntos: tambor, maracas y flauta", `${nino(56, 160, { c: R, pose: "palmas" })}${ic("tambor", 56, 132, 0.8)}${nino(130, 160, { c: M, pose: "arriba", nina: true })}${ic("maracas", 130, 80, 0.8)}${nino(204, 160, { c: A, pose: "canta" })}${ic("flauta", 222, 96, 0.8)}${rot(130, 26, "¡Una banda!", { color: K, size: 16 })}`),
    },
    {
      html: `<h3>Juego: mi maraca</h3><p>Llena un bote o una botella pequeña con <mark>arroz o lentejas</mark>.</p><p>Ciérrala bien y decórala.</p><p>¡Agítala fuerte y flojito, rápido y lento!</p><p>Así haces tu propio instrumento.</p>`,
      svg: lista("Pasos para hacer una maraca", [["Un bote vacío", R], ["Arroz o lentejas dentro", M], ["Cerrar y decorar", V], ["¡A tocar!", A]], { titulo: "Fabrico una maraca", marca: "n" }),
    },
  ],
  figura: {
    titulo: "Familias de instrumentos",
    svg: mural("Instrumentos que se golpean, que se soplan y que tienen cuerdas", [["tambor", "Se golpean", "tambor, maracas, triángulo", R], ["flauta", "Se soplan", "flauta, trompeta", A], ["guitarra", "Tienen cuerdas", "guitarra, violín", V]], "¿Cómo suenan los instrumentos?"),
  },
  video: { ...vid("cN44YHKIZZA", "Adivina los sonidos de instrumentos musicales: juego para niños", "CajaMusical", 3388971), busqueda: "instrumentos musicales para niños sonidos" },
  ejemplos: [
    { enunciado: "¿Cómo suena el tambor?", pasos: ["Miramos cómo se toca: con las manos o con palillos.", "Lo golpeamos suave: tun.", "Lo golpeamos fuerte: ¡TUN!"], resultado: "el tambor se golpea y hace «tun-tun»." },
    { enunciado: "¿La flauta se golpea o se sopla?", pasos: ["Miramos: tiene un agujero para la boca.", "Si soplamos, suena «fiuuu»."], resultado: "la flauta se sopla: es de viento." },
  ],
  errores: [
    "Pensar que todos los instrumentos se tocan igual: unos se golpean, otros se soplan y otros tienen cuerdas.",
    "Golpear muy fuerte siempre: la música también es suave.",
    "Creer que solo los mayores tocan instrumentos: ¡tú también puedes!",
  ],
  ejercicios: [
    { q: "Fabrica una maraca con un bote y arroz.", sol: "Nota para la familia: cerrad bien la tapa con cinta adhesiva." },
    { q: "Haz un tambor con una caja o una olla y una cuchara de madera.", sol: "Tocad fuerte y suave." },
    { q: "Escucha y adivina: ¿tambor o triángulo?", sol: "Nota: con los ojos cerrados, tocad un objeto que suene grave y otro agudo." },
    { q: "Sopla una pajita en un vaso con agua: ¿suena?", sol: "Hace burbujas que suenan: el aire hace sonido." },
    { q: "Toca tu maraca rápido y luego lento.", sol: "Nota: cantad una canción y que acompañe." },
    { q: "Pon una goma en una caja abierta y tócala.", sol: "Es una guitarra casera: la goma vibra." },
  ],
  quiz: [
    { q: "El tambor…", o: ["se sopla", "se golpea", "tiene teclas"], a: 1, e: "Se golpea: tun-tun." },
    { q: "La flauta…", o: ["se sopla", "se golpea", "tiene cuerdas"], a: 0, e: "Es de viento." },
    { q: "¿Cuál tiene cuerdas?", o: ["la guitarra", "las maracas", "el triángulo"], a: 0, e: "La guitarra tiene seis cuerdas." },
    { q: "Las maracas hacen…", o: ["chis-chas", "fiuuu", "tilín"], a: 0, e: "Se agitan." },
    { q: "Muchos músicos juntos forman…", o: ["una orquesta", "una clase", "un equipo de fútbol"], a: 0, e: "O una banda." },
    { q: "El violín se toca con…", o: ["un arco", "una cuchara", "los pies"], a: 0, e: "El arco frota las cuerdas." },
  ],
  examen: [
    { q: "¿Qué instrumento hace «tilín»?", o: ["el triángulo", "el tambor", "la flauta"], a: 0, e: "El triángulo suena agudo." },
    { q: "Para hacer una maraca necesito…", o: ["un bote y arroz", "agua y jabón", "un lápiz"], a: 0, e: "El arroz suena al agitar." },
    { q: "¿Cuál se sopla?", o: ["la trompeta", "el piano", "la guitarra"], a: 0, e: "La trompeta es de viento." },
  ],
  feynman: ["Qué es un instrumento musical", "Cómo suenan: se golpean, se soplan o tienen cuerdas", "Cómo hacer una maraca"],
  mapa: mapa("INSTRUMENTOS", "var(--pri)", [
    ["Se golpean", "tambor, maracas", R],
    ["Se soplan", "flauta, trompeta", A],
    ["Cuerdas", "guitarra, violín", V],
    ["Juntos", "orquesta o banda", N],
  ], 220),
  tarjetas: [
    ["¿Cómo suena el tambor?", "Tun-tun: se golpea"],
    ["¿Cómo se toca la flauta?", "Soplando"],
    ["¿Qué tiene la guitarra?", "Cuerdas"],
    ["¿Cómo se toca el violín?", "Con un arco"],
    ["¿Qué hacen las maracas?", "Chis-chas: se agitan"],
    ["Muchos músicos juntos son…", "Una orquesta o una banda"],
  ],
  familias: [
    "Fabricad instrumentos con material de casa: botes, cajas, gomas y cucharas.",
    "Escuchad música y adivinad qué instrumentos suenan.",
    "Haced una banda familiar para cantar una canción.",
    "Si podéis, id a un concierto infantil o a ver una banda en las fiestas.",
  ],
  profesores: PROF("Lenguaje y expresión musical: discriminación auditiva de instrumentos, exploración sonora y construcción de instrumentos sencillos", ["Rincón de instrumentos de percusión escolar.", "Juego de adivinar el instrumento detrás de una tela.", "Taller de instrumentos con material reciclado."]),
});
