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
    ["Recoger datos", `<p>Los <mark>datos</mark> son informaciones que recogemos para saber algo. Por ejemplo, el color favorito de cada niño.</p><p>Para recoger datos, hacemos una <b>pregunta</b> a muchas personas y <b>apuntamos</b> sus respuestas.</p><p>«¿Cuál es tu fruta favorita?» Cada respuesta es un dato.</p>`,
      svg("Una maestra pregunta y los niños levantan la mano", `${nino(40, 160, { pose: "arriba", c: "var(--red)" })}${nino(90, 160, { pose: "arriba", c: "var(--pen)", nina: true })}${nino(140, 160, { c: "var(--leaf)" })}${nino(190, 160, { pose: "arriba", c: "var(--sun)", nina: true })}${P.bocadillo(130, 40, 200, "¿Quién prefiere manzana?")}`)],
    ["La tabla de recuento", `<p>Para contar los votos usamos <mark>palotes</mark>: una rayita por cada voto.</p><p>Cuando llegamos a <b>5</b>, cruzamos las cuatro rayas con la quinta. Así hacemos <b>grupos de 5</b> y contamos más rápido.</p><p>Al final, escribimos el <b>total</b> de cada fila con números.</p>`,
      svg("Tabla de recuento con palotes: manzana 7, plátano 4 y pera 5", `${[["manzana", 7, "var(--red)"], ["plátano", 4, "var(--sun)"], ["pera", 5, "var(--leaf)"]].map(([f, n, c], i) => `<rect x="16" y="${24 + i * 44}" width="228" height="40" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="1.5"/>${rot(28, 50 + i * 44, f, { anchor: "start", size: 14, color: c })}${palotes(110, 50 + i * 44, n)}${num(222, 51 + i * 44, n, "var(--pen)", 18)}`).join("")}`)],
    ["El pictograma", `<p>Un <mark>pictograma</mark> es un gráfico hecho con <b>dibujos</b>.</p><p>Cada dibujo vale <b>un voto</b>. Si a 7 niños les gusta la manzana, dibujamos 7 manzanas en una fila.</p><p>La fila más <b>larga</b> es la fruta que más gusta. La más corta, la que menos.</p>`,
      svg("Pictograma de frutas: siete manzanas, cuatro plátanos y cinco peras", `${[["manzana", 7], ["platano", 4], ["pera", 5]].map(([f, n], i) => [...Array(n)].map((_, j) => fruta[f](40 + j * 28, 46 + i * 44)).join("") + num(236, 52 + i * 44, n, "var(--pen)", 16)).join("")}${txt(130, 170, "Cada dibujo = 1 voto", "var(--muted)", 13)}`), P.V("graB")],
    ["El gráfico de barras", `<p>En un <mark>gráfico de barras</mark>, cada respuesta tiene una <b>barra</b> de color.</p><p>La altura de la barra dice cuántos votos tiene. Para saberlo, miramos el <b>número</b> que hay a su lado o encima.</p><p>La barra <b>más alta</b> es la que más votos tiene.</p>`,
      svg("Gráfico de barras: manzana 7, plátano 4 y pera 5", `${columnas(60, 140, [["manzana", 7, "var(--red)"], ["plátano", 4, "var(--sun)"], ["pera", 5, "var(--leaf)"]], { w: 40, sep: 24, esc: 14 })}<path d="M54 140 V30" stroke="var(--ink)" stroke-width="2"/>`)],
    ["Leer un gráfico", `<p>Para <mark>leer</mark> un gráfico nos hacemos preguntas.</p><p>¿Cuál tiene <b>más</b> votos? La manzana, con 7. ¿Cuál tiene <b>menos</b>? El plátano, con 4.</p><p>¿Cuántos <b>más</b> tiene la manzana que la pera? 7 − 5 = <b>2</b>. ¿Cuántos votaron en total? 7 + 4 + 5 = <mark>16</mark>.</p>`,
      svg("El mismo gráfico con la barra mayor marcada con una estrella", `${columnas(20, 140, [["manzana", 7, "var(--red)"], ["plátano", 4, "var(--sun)"], ["pera", 5, "var(--leaf)"]], { w: 30, sep: 14, esc: 14 })}${P.estrella(35, 26, 9)}${txt(202, 60, "más: manzana", "var(--red)", 12)}${txt(202, 84, "menos: plátano", "var(--sun)", 12)}${txt(202, 108, "total: 16", "var(--pen)", 12)}`)],
    ["Hacer un gráfico paso a paso", `<p>1. Hacemos una <b>pregunta</b> y recogemos los votos con palotes.</p><p>2. Contamos los votos de cada respuesta.</p><p>3. Dibujamos una <b>barra</b> para cada respuesta. Cada cuadrito vale 1.</p><p>4. Ponemos un <mark>título</mark> y el nombre de cada barra.</p>`,
      svg("Una cuadrícula donde se pintan barras de cuadritos", `${[...Array(6)].map((_, f) => [...Array(4)].map((_, c) => `<rect x="${70 + c * 34}" y="${30 + f * 18}" width="34" height="18" fill="${(c === 0 && f >= 1) || (c === 1 && f >= 3) || (c === 2 && f >= 2) ? ["var(--pen)", "var(--red)", "var(--leaf)"][c] : "var(--card)"}" fill-opacity=".75" stroke="var(--line)"/>`).join("")).join("")}${["azul", "rojo", "verde", "?"].map((t, i) => txt(87 + i * 34, 156, t, "var(--ink)", 11)).join("")}${txt(130, 20, "Color favorito", "var(--ink)", 13)}`)],
    ["El tiempo de la semana", `<p>También podemos hacer gráficos con el <b>tiempo</b>. Durante un mes, apuntamos cada día si hace sol, si está nublado o si llueve.</p><p>Al final contamos: <b>12 días de sol</b>, 8 nublados y <b>5 de lluvia</b>.</p><p>¡Con el gráfico vemos de un vistazo que ha sido un mes <mark>soleado</mark>!</p>`,
      svg("Gráfico del tiempo: doce días de sol, ocho nublados y cinco de lluvia", `${columnas(66, 130, [["sol", 12, "var(--sun)"], ["nubes", 8, "var(--muted)"], ["lluvia", 5, "var(--water)"]], { w: 40, sep: 24, esc: 7.5 })}${sol(32, 40, 12)}${nube(36, 88, 0.7)}`)],
    ["¿Para qué sirve?", `<p>Los gráficos nos ayudan a <b>entender</b> mucha información de golpe.</p><p>En las noticias vemos gráficos del tiempo y de los <b>votos</b> en las elecciones. En el cole, podemos ver qué <b>juego</b> prefiere la clase para el recreo.</p><p>Con un gráfico, en vez de leer muchos números, solo hay que <mark>mirar</mark>.</p>`,
      svg("Gráfico de juegos favoritos del recreo: fútbol, comba y escondite", `${columnas(56, 130, [["fútbol", 9, "var(--leaf)"], ["comba", 6, "var(--red)"], ["escondite", 8, "var(--pen)"]], { w: 42, sep: 30, esc: 9 })}${txt(130, 24, "Juego favorito del recreo", "var(--ink)", 13)}`)],
    ["Juego: la encuesta de casa", `<p>Haz una <b>encuesta</b> a tu familia: «¿Qué animal te gusta más: perro, gato o pájaro?».</p><p>Apunta los votos con palotes. Luego dibuja un <b>pictograma</b> o un <b>gráfico de barras</b>.</p><p>Pregunta: ¿cuál ha <mark>ganado</mark>? ¿Cuántos votos hay en total?</p>`,
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
