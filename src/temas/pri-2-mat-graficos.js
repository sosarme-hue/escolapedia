// Matemáticas 2º de Primaria: tablas de recuento, pictogramas y gráficos de barras.
const P = require("./_pri2a");
const { svg, num, txt, rot, columnas, manzana, sol, nube, nino } = P;

// Palotes de recuento: grupos de 5 (cuatro rayas y una cruzada).
const palotes = (x, y, n, c = "var(--ink)") => {
  let s = "";
  for (let g = 0; g * 5 < n; g++) {
    const k = Math.min(5, n - g * 5), x0 = x + g * 30;
    for (let i = 0; i < Math.min(k, 4); i++) s += `<path d="M${x0 + i * 6} ${y - 14} V${y + 4}" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>`;
    if (k === 5) s += `<path d="M${x0 - 3} ${y} L${x0 + 22} ${y - 12}" stroke="var(--red)" stroke-width="2.2" stroke-linecap="round"/>`;
  }
  return s;
};
// Fruta pequeña para el pictograma.
const fruta = { manzana: (x, y) => manzana(x, y), platano: (x, y) => `<path d="M${x - 10} ${y - 4} q10 18 22 -6 q-10 10 -22 6z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.2"/>`, pera: (x, y) => `<path d="M${x} ${y - 12} q-4 6 -8 12 q0 10 8 10 q8 0 8 -10 q-4 -6 -8 -12z" fill="var(--leaf)" stroke="var(--ink)" stroke-width="1.2"/>` };

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Gráficos sencillos",
  objetivos: ["Recoger datos con una tabla de recuento", "Leer y hacer pictogramas", "Leer y hacer gráficos de barras sencillos"],
  claves: ["datos", "recuento", "palotes", "tabla", "pictograma", "gráfico de barras", "más votado", "menos votado"],
  pregunta: ["En clase queréis saber cuál es la fruta favorita. ¿Cómo lo averiguáis sin liaros?", "Preguntamos a todos y apuntamos los votos en una <mark>tabla</mark>. Luego hacemos un <mark>gráfico</mark>: con un vistazo vemos qué fruta gana."],
  bloques: [
    ["Recoger datos", `<p>Los <mark>datos</mark> son informaciones que recogemos para saber algo. Por ejemplo, el color favorito de cada niño.</p><p>Para recoger datos, hacemos una <b>pregunta</b> a muchas personas y <b>apuntamos</b> sus respuestas.</p><p>«¿Cuál es tu fruta favorita?» Cada respuesta es un dato.</p><p>Si no apuntamos nada, se nos olvida enseguida quién dijo cada cosa.</p>`,
      svg("Una maestra pregunta y los niños levantan la mano", `${nino(40, 160, { pose: "arriba", c: "var(--red)" })}${nino(90, 160, { pose: "arriba", c: "var(--pen)", nina: true })}${nino(140, 160, { c: "var(--leaf)" })}${nino(190, 160, { pose: "arriba", c: "var(--sun)", nina: true })}${P.bocadillo(130, 40, 200, "¿Quién prefiere manzana?")}`)],
    ["La tabla de recuento", `<p>Para contar los votos usamos <mark>palotes</mark>: una rayita por cada voto.</p><p>Cuando llegamos a <b>5</b>, cruzamos las cuatro rayas con la quinta. Así hacemos <b>grupos de 5</b> y contamos más rápido.</p><p>Al final, escribimos el <b>total</b> de cada fila con números.</p>`,
      svg("Tabla de recuento con palotes: manzana 7, plátano 4 y pera 5", `${[["manzana", 7, "var(--red)"], ["plátano", 4, "var(--sun)"], ["pera", 5, "var(--leaf)"]].map(([f, n, c], i) => `<rect x="16" y="${24 + i * 44}" width="228" height="40" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="1.5"/>${rot(28, 50 + i * 44, f, { anchor: "start", size: 14, color: c })}${palotes(110, 50 + i * 44, n)}${num(222, 51 + i * 44, n, "var(--pen)", 18)}`).join("")}`)],
    ["El pictograma", `<p>Un <mark>pictograma</mark> es un gráfico hecho con <b>dibujos</b>.</p><p>Cada dibujo vale <b>un voto</b>. Si a 7 niños les gusta la manzana, dibujamos 7 manzanas en una fila.</p><p>La fila más <b>larga</b> es la fruta que más gusta. La más corta, la que menos.</p>`,
      svg("Pictograma de frutas: siete manzanas, cuatro plátanos y cinco peras", `${[["manzana", 7], ["platano", 4], ["pera", 5]].map(([f, n], i) => [...Array(n)].map((_, j) => fruta[f](40 + j * 28, 46 + i * 44)).join("") + num(236, 52 + i * 44, n, "var(--pen)", 16)).join("")}${txt(130, 170, "Cada dibujo = 1 voto", "var(--muted)", 13)}`), P.V("graB")],
    ["El gráfico de barras", `<p>En un <mark>gráfico de barras</mark>, cada respuesta tiene una <b>barra</b> de color.</p><p>La altura de la barra dice cuántos votos tiene. Para saberlo, miramos el <b>número</b> que hay a su lado o encima.</p><p>La barra <b>más alta</b> es la que más votos tiene.</p>`,
      svg("Gráfico de barras: manzana 7, plátano 4 y pera 5", `${columnas(60, 140, [["manzana", 7, "var(--red)"], ["plátano", 4, "var(--sun)"], ["pera", 5, "var(--leaf)"]], { w: 40, sep: 24, esc: 14 })}<path d="M54 140 V30" stroke="var(--ink)" stroke-width="2"/>`)],
    ["Leer un gráfico", `<p>Para <mark>leer</mark> un gráfico nos hacemos preguntas.</p><p>¿Cuál tiene <b>más</b> votos? La manzana, con 7. ¿Cuál tiene <b>menos</b>? El plátano, con 4.</p><p>¿Cuántos <b>más</b> tiene la manzana que la pera? 7 − 5 = <b>2</b>. ¿Cuántos votaron en total? 7 + 4 + 5 = <mark>16</mark>.</p>`,
      svg("El mismo gráfico con la barra mayor marcada con una estrella", `${columnas(20, 140, [["manzana", 7, "var(--red)"], ["plátano", 4, "var(--sun)"], ["pera", 5, "var(--leaf)"]], { w: 30, sep: 14, esc: 14 })}${P.estrella(35, 26, 9)}${txt(202, 60, "más: manzana", "var(--red)", 12)}${txt(202, 84, "menos: plátano", "var(--sun)", 12)}${txt(202, 108, "total: 16", "var(--pen)", 12)}`)],
    ["Hacer un gráfico paso a paso", `<p>1. Hacemos una <b>pregunta</b> y recogemos los votos con palotes.</p><p>2. Contamos los votos de cada respuesta.</p><p>3. Dibujamos una <b>barra</b> para cada respuesta. Cada cuadrito vale 1.</p><p>4. Ponemos un <mark>título</mark> y el nombre de cada barra.</p><p>¡Y ya está listo para colgarlo en clase!</p>`,
      svg("Una cuadrícula donde se pintan barras de cuadritos", `${[...Array(6)].map((_, f) => [...Array(4)].map((_, c) => `<rect x="${70 + c * 34}" y="${30 + f * 18}" width="34" height="18" fill="${(c === 0 && f >= 1) || (c === 1 && f >= 3) || (c === 2 && f >= 2) ? ["var(--pen)", "var(--red)", "var(--leaf)"][c] : "var(--card)"}" fill-opacity=".75" stroke="var(--line)"/>`).join("")).join("")}${["azul", "rojo", "verde", "?"].map((t, i) => txt(87 + i * 34, 156, t, "var(--ink)", 11)).join("")}${txt(130, 20, "Color favorito", "var(--ink)", 13)}`)],
    ["El tiempo de la semana", `<p>También podemos hacer gráficos con el <b>tiempo</b>. Durante un mes, apuntamos cada día si hace sol, si está nublado o si llueve.</p><p>Al final contamos: <b>12 días de sol</b>, 8 nublados y <b>5 de lluvia</b>.</p><p>¡Con el gráfico vemos de un vistazo que ha sido un mes <mark>soleado</mark>!</p>`,
      svg("Gráfico del tiempo: doce días de sol, ocho nublados y cinco de lluvia", `${columnas(66, 130, [["sol", 12, "var(--sun)"], ["nubes", 8, "var(--muted)"], ["lluvia", 5, "var(--water)"]], { w: 40, sep: 24, esc: 7.5 })}${sol(32, 40, 12)}${nube(36, 88, 0.7)}`)],
    ["¿Para qué sirve?", `<p>Los gráficos nos ayudan a <b>entender</b> mucha información de golpe.</p><p>En las noticias vemos gráficos del tiempo y de los <b>votos</b> en las elecciones. En el cole, podemos ver qué <b>juego</b> prefiere la clase para el recreo.</p><p>Con un gráfico, en vez de leer muchos números, solo hay que <mark>mirar</mark>.</p>`,
      svg("Gráfico de juegos favoritos del recreo: fútbol, comba y escondite", `${columnas(56, 130, [["fútbol", 9, "var(--leaf)"], ["comba", 6, "var(--red)"], ["escondite", 8, "var(--pen)"]], { w: 42, sep: 30, esc: 9 })}${txt(130, 24, "Juego favorito del recreo", "var(--ink)", 13)}`)],
    ["Juego: la encuesta de casa", `<p>Haz una <b>encuesta</b> a tu familia: «¿Qué animal te gusta más: perro, gato o pájaro?».</p><p>Apunta los votos con palotes. Luego dibuja un <b>pictograma</b> o un <b>gráfico de barras</b>.</p><p>Pregunta: ¿cuál ha <mark>ganado</mark>? ¿Cuántos votos hay en total? ¿Y cuál ha tenido menos?</p>`,
      svg("Una hoja de encuesta con perro, gato y pájaro y sus palotes", `<rect x="30" y="20" width="200" height="140" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${txt(130, 44, "¿Qué animal te gusta?", "var(--pen)", 13)}${[["perro", 3], ["gato", 2], ["pájaro", 1]].map(([a, n], i) => `${rot(46, 78 + i * 30, a, { anchor: "start", size: 14 })}${palotes(130, 78 + i * 30, n)}`).join("")}`)],
  ],
  figura: ["De los votos al gráfico", `<svg viewBox="0 0 640 260" role="img" aria-label="Tres pasos: tabla de recuento con palotes, pictograma y gráfico de barras">
    <rect width="640" height="260" rx="16" fill="var(--paper)"/>
    ${[["1. Recuento", "var(--sun)"], ["2. Pictograma", "var(--red)"], ["3. Barras", "var(--pen)"]].map(([t, c], i) => `<rect x="${24 + i * 202}" y="20" width="188" height="220" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${txt(118 + i * 202, 48, t, c, 16)}`).join("")}
    ${[["manzana", 7], ["plátano", 4], ["pera", 5]].map(([f, n], i) => `${rot(40, 92 + i * 46, f, { anchor: "start", size: 13 })}${palotes(110, 92 + i * 46, n)}`).join("")}
    ${[["manzana", 7], ["platano", 4], ["pera", 5]].map(([f, n], i) => [...Array(n)].map((_, j) => fruta[f](250 + j * 22, 88 + i * 46)).join("")).join("")}
    ${columnas(462, 214, [["", 7, "var(--red)"], ["", 4, "var(--sun)"], ["", 5, "var(--leaf)"]], { w: 34, sep: 18, esc: 18, etiquetas: false })}
  </svg>`],
  video: P.V("graV", true),
  ejemplos: [
    ["En la tabla, el perro tiene 5 palotes y 1 más. ¿Cuántos votos tiene?", ["Un grupo cruzado son 5.", "Sumamos el palote suelto: 5 + 1."], "tiene 6 votos."],
    ["En un pictograma, cada sol es 1 día. Hay 9 soles. ¿Cuántos días hizo sol?", ["Contamos los dibujos.", "Cada dibujo vale 1."], "hizo sol 9 días."],
    ["Barras: fútbol 9, comba 6. ¿Cuántos votos más tiene el fútbol?", ["Restamos los votos de las dos barras.", "9 − 6 = 3."], "el fútbol tiene 3 votos más."],
  ],
  errores: [
    "No cruzar el quinto palote y contar mal: los grupos de 5 ayudan a no equivocarse.",
    "Dibujar los iconos del pictograma de distinto tamaño: deben ser iguales.",
    "Leer el gráfico sin mirar los números: hay que fijarse en cuánto vale cada barra.",
    "Olvidar el título: sin título no sabemos de qué trata el gráfico.",
  ],
  ejercicios: [
    ["Dibuja con palotes el número 8.", "Un grupo de 5 cruzado y 3 palotes sueltos."],
    ["¿Cuánto valen 2 grupos de 5 palotes?", "10."],
    ["En un pictograma hay 6 pelotas. Cada pelota es 1 voto. ¿Cuántos votos hay?", "6 votos."],
    ["Barra roja: 7. Barra azul: 3. ¿Cuál es más alta?", "La roja."],
    ["¿Cuántos votos más tiene la roja que la azul?", "7 − 3 = 4."],
    ["¿Cuántos votos hay en total entre la roja y la azul?", "7 + 3 = 10."],
    ["¿Qué es un pictograma?", "Un gráfico hecho con dibujos."],
    ["¿Qué ponemos encima del gráfico?", "El título."],
    ["Pregunta a 5 personas su color favorito y haz palotes.", "Respuesta libre."],
    ["Dibuja un gráfico de barras con tus resultados.", "Respuesta libre, con título y nombres en cada barra."],
  ],
  quiz: [
    ["Para contar votos usamos…", ["palotes", "colores", "relojes"], "Una rayita por cada voto."],
    ["El quinto palote…", ["cruza los otros cuatro", "se borra", "no se dibuja"], "Así hacemos grupos de 5."],
    ["Un gráfico con dibujos se llama…", ["pictograma", "palote", "balanza"], "Picto significa dibujo."],
    ["En un gráfico de barras, gana la barra…", ["más alta", "más baja", "más estrecha"], "Más alta, más votos."],
    ["3 grupos de 5 palotes son…", ["15", "8", "35"], "5 + 5 + 5."],
    ["Barras: 6 y 2. ¿Cuántos más tiene la primera?", ["4", "8", "3"], "6 − 2 = 4."],
    ["Barras: 4, 5 y 3. El total es…", ["12", "9", "453"], "4 + 5 + 3 = 12."],
    ["¿Qué le falta a un gráfico sin nombre?", ["El título", "Un color", "Una barra"], "El título dice de qué trata."],
    ["Los datos son…", ["informaciones que recogemos", "dibujos bonitos", "números al azar"], "Se recogen con preguntas."],
    ["En un pictograma, cada dibujo vale…", ["lo que diga la leyenda, por ejemplo 1", "siempre 10", "nada"], "Normalmente cada dibujo es 1 voto."],
  ],
  examen: [
    ["Palotes: un grupo de 5 y 2 sueltos son…", ["7", "52", "3"], "5 + 2 = 7."],
    ["¿Qué barra tiene más votos?", ["La más alta", "La más baja", "La del medio"], "La altura indica los votos."],
    ["Un pictograma tiene 4 manzanas y 6 peras. ¿Qué gusta más?", ["La pera", "La manzana", "Igual"], "6 es mayor que 4."],
    ["Barras: 8 y 5. ¿Cuál es la diferencia?", ["3", "13", "85"], "8 − 5 = 3."],
  ],
  feynman: ["Para qué sirven los palotes en grupos de 5", "Qué es un pictograma", "Cómo se lee un gráfico de barras"],
  mapa: ["GRÁFICOS", [
    ["Datos", "pregunta y apunta", "var(--leaf)"],
    ["Recuento", "palotes de 5 en 5", "var(--sun)"],
    ["Pictograma", "1 dibujo = 1 voto", "var(--red)"],
    ["Barras", "más alta = más votos", "var(--pen)"],
  ]],
  tarjetas: [
    ["¿Qué son los datos?", "Informaciones que recogemos"],
    ["¿Cómo se marca el quinto palote?", "Cruzando los otros cuatro"],
    ["Un grupo cruzado y 3 sueltos", "8"],
    ["¿Qué es un pictograma?", "Un gráfico con dibujos"],
    ["En las barras, gana…", "la barra más alta"],
    ["Barras 9 y 4: ¿diferencia?", "5"],
    ["¿Qué no puede faltar en un gráfico?", "El título"],
    ["Barras 3, 4 y 5: ¿total?", "12"],
  ],
  familias: [
    "Haced una encuesta familiar (comida, película, animal favorito) con palotes.",
    "Durante una semana, apuntad el tiempo cada día y haced un pictograma.",
    "Buscad gráficos en revistas o en el periódico y comentadlos juntos.",
    "Pintad un gráfico de barras en papel cuadriculado con los resultados.",
  ],
  saberes: "Estadística y probabilidad: recogida de datos con tablas de recuento; pictogramas y gráficos de barras sencillos; lectura e interpretación",
  ideas: ["Encuesta real de la clase (fruta, deporte, mascota) y gráfico gigante en el mural.", "Registro del tiempo diario durante un mes.", "Comparar el mismo dato en pictograma y en barras."],
});

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Hacer preguntas para una encuesta", "Usar pictogramas con símbolos que valen más de uno", "Comparar datos y sacar conclusiones", "Hablar de lo seguro, lo posible y lo imposible"],
  lectura: { titulo: "La excursión más votada", html: `<p>La seño Marta anuncia que la clase de 2.º B irá de excursión en primavera. Pero hay un problema: ¿adónde?</p><p>—Votaremos entre tres lugares —dice—: la granja, el zoo o el museo de los dinosaurios.</p><p>Cada niño escribe su elección en un papelito y lo mete en una caja. Después, Paula saca los papeles uno a uno y lee en voz alta. Hugo hace una rayita en la pizarra por cada voto.</p><p>Al final cuentan: la granja tiene 6 votos, el zoo tiene 9 y el museo tiene 10.</p><p>—¡Ganan los dinosaurios! —gritan algunos.</p><p>Para que se vea bien, dibujan un gráfico de barras en una cartulina grande. La barra del museo es la más alta.</p><p>—El zoo ha quedado muy cerca —dice la seño—. Quizá vayamos el próximo curso.</p><p>Y cuelgan el gráfico en el pasillo para que todo el colegio sepa adónde va 2.º B.</p>` },
  tras: {
    "Recoger datos": [
      ["Hacer buenas preguntas", `<p>Para hacer una <mark>encuesta</mark> necesitamos una buena pregunta. Una buena pregunta es <b>clara</b> y tiene <b>respuestas cortas</b> que se pueden contar.</p><p>Comparemos:</p><ul><li>Pregunta difícil de contar: «¿Qué te gusta hacer?». Cada uno dirá algo distinto.</li><li>Pregunta buena: «¿Cuál es tu deporte favorito: fútbol, baloncesto, natación o patinaje?». Hay pocas opciones y se cuentan fácil.</li></ul><p>Consejos para una buena encuesta:</p><ul><li>Dar <b>pocas opciones</b>, entre 3 y 5.</li><li>Cada persona contesta <b>una sola vez</b>.</li><li>Apuntar las respuestas en el momento, para no olvidarlas.</li><li>Preguntar a <b>todos</b> los del grupo.</li></ul><p><b>Actividad</b>: inventa una pregunta para tu clase con cuatro opciones y escríbela en una hoja.</p>`,
        H6.dos("Preguntas", ["DIFÍCIL", ["¿qué te gusta?", "mil respuestas", "no se cuenta"], cRO], ["BUENA", ["¿qué deporte?", "4 opciones", "se cuenta fácil"], cVE])],
    ],
    "El pictograma": [
      ["Un dibujo que vale por varios", `<p>A veces hay muchos datos y dibujar un símbolo por cada uno ocupa demasiado. Entonces hacemos que <mark>cada dibujo valga más de uno</mark>.</p><p>Por ejemplo, en un pictograma de libros leídos:</p><ul><li>📘 = <b>2 libros</b>.</li><li>Ana: 📘📘📘 → 3 × 2 = <b>6 libros</b>.</li><li>Pedro: 📘📘 → <b>4 libros</b>.</li><li>Lola: 📘📘📘📘 → <b>8 libros</b>.</li></ul><p>Debajo del pictograma siempre hay una <b>leyenda</b> que explica cuánto vale cada dibujo. Si no la leemos, nos equivocamos al contar.</p><p>Para leerlo, contamos de 2 en 2 (o de 5 en 5, o de 10 en 10, según la leyenda). ¡Aquí ayudan mucho las tablas de multiplicar!</p><p><b>Actividad</b>: dibuja un pictograma de las frutas que comes en una semana donde cada 🍎 valga 2.</p>`,
        L6.filas("📘 = 2", [["Ana", "3 → 6", cAZ], ["Pedro", "2 → 4", cVE], ["Lola", "4 → 8", cRO], ["leyenda", "¡léela!", cNA]]),
        ["4zGN3sKV8T0", "¿QUE ES UN PICTOGRAMA? Explicado super fácil", "Daniel Carreón", 789554]],
    ],
    "Leer un gráfico": [
      ["Comparar y sacar conclusiones", `<p>Un gráfico no solo sirve para mirar: sirve para <mark>sacar conclusiones</mark>, es decir, descubrir cosas.</p><p>Con el gráfico de la excursión (granja 6, zoo 9, museo 10) podemos preguntarnos:</p><ul><li>¿Cuál ganó? El <b>museo</b>, con la barra más alta.</li><li>¿Cuál tuvo menos votos? La <b>granja</b>.</li><li>¿Cuántos votos más tuvo el museo que la granja? 10 − 6 = <b>4</b>.</li><li>¿Cuántos niños votaron? 6 + 9 + 10 = <b>25</b>.</li></ul><p>Para comparar dos barras restamos: la diferencia nos dice cuánto más tiene una que otra.</p><p>Para saber el total, sumamos todas las barras.</p><p>Una conclusión es una frase: «A la mayoría de la clase le apetecen los dinosaurios».</p><p><b>Actividad</b>: escribe tres conclusiones sobre un gráfico de tu libro.</p>`,
        H6.flujo("Concluir", ["miro|las barras", "comparo|resto", "sumo|el total", "escribo|una frase"], cAZ),
        ["J-lDNbXM2wE", "COMO HACER UNA GRAFICA DE BARRAS Super facil", "Daniel Carreón", 5592461]],
    ],
    "El tiempo de la semana": [
      ["Seguro, posible e imposible", `<p>Cuando hablamos del tiempo o de un juego, a veces no sabemos qué pasará. Usamos tres palabras:</p><ul><li><mark>Seguro</mark>: pasará siempre. «Mañana saldrá el sol» (aunque haya nubes delante).</li><li><mark>Posible</mark>: puede pasar o no. «Mañana lloverá».</li><li><mark>Imposible</mark>: no puede pasar nunca. «Un gato hablará en clase».</li></ul><p>Con una bolsa de canicas lo vemos claro. Si la bolsa tiene 5 canicas rojas y 2 azules:</p><ul><li>Sacar una canica roja es <b>posible</b>, y muy probable, porque hay muchas.</li><li>Sacar una azul es <b>posible</b>, pero menos probable.</li><li>Sacar una verde es <b>imposible</b>: no hay ninguna.</li></ul><p><b>Actividad</b>: escribe una cosa segura, una posible y una imposible sobre el fin de semana.</p>`,
        L6.filas("¿Pasará?", [["seguro", "sale el sol", cVE], ["posible", "llueve", cNA], ["imposible", "gato habla", cRO], ["bolsa", "5 rojas, 2 azules", cAZ]])],
    ],
  },
  final: [
    ["Gráficos en la vida real", `<p>Los <mark>gráficos</mark> aparecen en muchos sitios:</p><ul><li>En el <b>telediario</b>, para mostrar cuántos goles ha marcado cada equipo o cuánta gente vota a cada partido.</li><li>En el <b>tiempo</b> de la tele, con soles, nubes y la temperatura de cada día.</li><li>En las <b>revistas</b> y los periódicos.</li><li>En las <b>aplicaciones</b> del móvil que cuentan los pasos que das cada día.</li><li>En el <b>médico</b>: el gráfico de cómo creces cada año.</li></ul><p>Los gráficos son útiles porque con <b>un vistazo</b> entendemos mucha información. Leer una lista larga de números cuesta más.</p><p>Pero hay que leerlos con cuidado: mirar el título, qué cuenta cada barra y la leyenda.</p><p><b>Actividad</b>: busca un gráfico en un periódico o en internet con tu familia y explica qué cuenta.</p>`,
      H6.rueda("Gráficos", "DATOS", [["tele", cAZ], ["tiempo", cVE], ["móvil", cNA], ["médico", cRO]])],
    ["Repaso: la encuesta de mascotas", `<p>Repasamos con una <mark>encuesta</mark> en 2.º A: «¿Qué mascota prefieres?».</p><p>Tabla de recuento:</p><ul><li>Perro: |||| ||| → <b>8</b>.</li><li>Gato: |||| → <b>5</b>.</li><li>Pez: ||| → <b>3</b>.</li><li>Conejo: |||| | → <b>6</b>.</li></ul><p>Preguntas:</p><ul><li>¿Cuál es la favorita? El <b>perro</b>.</li><li>¿Cuál tiene menos votos? El <b>pez</b>.</li><li>¿Cuántos más tiene el perro que el gato? 8 − 5 = <b>3</b>.</li><li>¿Cuántos niños contestaron? 8 + 5 + 3 + 6 = <b>22</b>.</li><li>Si hacemos un pictograma con 🐾 = 2, ¿cuántas huellas lleva el perro? <b>4</b>.</li></ul><p>Conclusión: en 2.º A gustan más los perros que el resto de mascotas.</p><p><b>Actividad</b>: haced la misma encuesta en vuestra clase y comparad los resultados.</p>`,
      L6.filas("Mascotas", [["perro", "8", cRO], ["gato", "5", cNA], ["pez", "3", cAZ], ["conejo", "6", cVE]])],
  ],
  ejemplos: [
    ["En un pictograma, ⭐ = 5. Lucía tiene ⭐⭐⭐. ¿Cuántos puntos?", ["Cuento de 5 en 5: 5, 10, 15."], "15 puntos."],
    ["Zoo 9 votos, granja 6. ¿Cuántos votos más tiene el zoo?", ["9 − 6 = 3."], "3 votos más."],
  ],
  errores: ["No leer la leyenda y contar cada dibujo como 1.", "Hacer preguntas con demasiadas respuestas posibles."],
  ejercicios: [
    ["b", "¿Qué es una encuesta?", "Preguntar a varias personas y apuntar sus respuestas."],
    ["b", "¿Qué explica la leyenda de un pictograma?", "Cuánto vale cada dibujo."],
    ["b", "¿Es posible o imposible que llueva mañana?", "Posible."],
    ["b", "En la encuesta de mascotas, ¿cuál ganó?", "El perro."],
    ["b", "Di un sitio donde se ven gráficos.", "La tele, el periódico, el móvil…"],
    ["m", "📘 = 2. Pedro tiene 📘📘📘📘📘. ¿Cuántos libros?", "10."],
    ["m", "¿Cuántos niños votaron en la excursión?", "25."],
    ["m", "¿Cuántos votos más tiene el conejo que el pez?", "3."],
    ["m", "Bolsa con 4 canicas rojas. ¿Sacar una azul es posible o imposible?", "Imposible."],
    ["m", "Mejora la pregunta «¿Qué te gusta?».", "Por ejemplo: «¿Qué fruta prefieres: manzana, plátano o fresa?»."],
    ["a", "En la lectura, ¿por cuántos votos ganó el museo al zoo?", "Por 1 voto."],
    ["a", "Escribe una conclusión del gráfico de mascotas.", "Por ejemplo: el pez es la mascota menos elegida."],
    ["a", "¿Por qué un gráfico se entiende mejor que una lista de números?", "Porque con un vistazo se ve qué es mayor o menor."],
    ["a", "Con 🐾 = 2, ¿cuántas huellas lleva el conejo, que tiene 6 votos?", "3 huellas."],
  ],
  quiz: [
    ["Una buena pregunta de encuesta tiene…", ["pocas opciones", "infinitas respuestas", "ninguna opción"], "Preguntas."],
    ["Si 📘 = 2, 📘📘📘 son…", ["6", "3", "5"], "Pictograma."],
    ["Para saber cuántos más, en dos barras…", ["resto", "sumo", "multiplico"], "Comparar."],
    ["«Un gato hablará en clase» es…", ["imposible", "seguro", "posible"], "Azar."],
    ["Lo que explica cuánto vale cada dibujo es la…", ["leyenda", "barra", "pregunta"], "Leyenda."],
  ],
  examen: [
    ["En la lectura, ¿cuántos votos tuvo la granja?", ["6", "9", "10"], "Lectura."],
    ["En la encuesta de mascotas contestaron…", ["22 niños", "20 niños", "8 niños"], "Repaso."],
  ],
  tarjetas: [
    ["Leyenda", "Dice cuánto vale cada dibujo del pictograma."],
    ["Seguro, posible, imposible", "Siempre, puede que sí o no, nunca."],
  ],
  glosario: [
    ["Dato", "Información que recogemos."],
    ["Encuesta", "Preguntas a varias personas."],
    ["Recuento", "Contar con rayitas."],
    ["Pictograma", "Gráfico con dibujos."],
    ["Leyenda", "Explicación de lo que vale cada dibujo."],
    ["Gráfico de barras", "Gráfico con barras de distinta altura."],
    ["Conclusión", "Lo que descubrimos al leer un gráfico."],
    ["Seguro", "Que pasará siempre."],
    ["Posible", "Que puede pasar o no."],
    ["Imposible", "Que no puede pasar nunca."],
  ],
  situacion: {
    titulo: "Periodistas de datos",
    reto: "Cada equipo hace una encuesta en el colegio, dibuja un pictograma y un gráfico de barras, y presenta sus conclusiones.",
    pasos: ["Elegir una buena pregunta con 3 o 4 opciones.", "Preguntar y apuntar en una tabla de recuento.", "Dibujar un pictograma con leyenda y un gráfico de barras.", "Escribir tres conclusiones y presentarlas."],
    producto: "Un cartel con la encuesta, los gráficos y las conclusiones.",
    evaluacion: ["Formula una pregunta clara.", "Recoge datos con rayitas.", "Dibuja gráficos con leyenda.", "Saca conclusiones comparando."],
  },
});
