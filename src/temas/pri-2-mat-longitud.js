// Matemáticas 2º de Primaria: medidas de longitud, el metro y el centímetro.
const P = require("./_pri2a");
const { svg, num, txt, nino, regla, flechaR, arbol, casa } = P;

// Lápiz horizontal de largo l (px) desde x.
const lapiz = (x, y, l, c = "var(--sun)") => `<g><rect x="${x}" y="${y - 6}" width="${l - 14}" height="12" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><path d="M${x + l - 14} ${y - 6} L${x + l} ${y} L${x + l - 14} ${y + 6}z" fill="#f3c9a1" stroke="var(--ink)" stroke-width="1.5"/><path d="M${x + l - 4} ${y - 2} L${x + l} ${y} L${x + l - 4} ${y + 2}z" fill="var(--ink)"/><rect x="${x - 6}" y="${y - 6}" width="6" height="12" fill="var(--red)" stroke="var(--ink)" stroke-width="1.5"/></g>`;
// Cota con flechas en los dos extremos y texto.
const cota = (x1, x2, y, t, c = "var(--red)") => `<path d="M${x1} ${y} H${x2} M${x1 + 7} ${y - 5} L${x1} ${y} L${x1 + 7} ${y + 5} M${x2 - 7} ${y - 5} L${x2} ${y} L${x2 - 7} ${y + 5}" stroke="${c}" stroke-width="2" fill="none"/>${txt((x1 + x2) / 2, y - 8, t, c, 13)}`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Medidas de longitud: el metro",
  objetivos: ["Saber qué es medir y para qué sirve", "Conocer el metro y el centímetro", "Medir con la regla y elegir la unidad adecuada"],
  claves: ["longitud", "medir", "metro", "centímetro", "regla", "cinta métrica", "largo", "alto"],
  pregunta: ["Tu pupitre mide 5 palmos tuyos y 4 palmos de tu maestra. ¿Cuánto mide de verdad?", "¡El pupitre es el mismo! Pasa que cada mano es distinta. Por eso usamos unidades <b>iguales para todos</b>: el <mark>metro</mark> y el <mark>centímetro</mark>."],
  bloques: [
    ["¿Qué es medir?", `<p><mark>Medir</mark> es saber cuántas veces cabe una unidad en una cosa.</p><p>La <b>longitud</b> es lo largo, lo alto o lo ancho de algo. Medimos la longitud de una mesa, de un lápiz o de un camino.</p><p>Antes se medía con <b>palmos</b>, <b>pies</b> o <b>pasos</b>. ¡Pero cada persona tiene un pie distinto!</p>`,
      svg("Una mesa medida con palmos: cinco palmos", `<rect x="30" y="80" width="200" height="14" rx="3" fill="#c99a5b" stroke="var(--ink)" stroke-width="2"/><path d="M44 94 V150 M216 94 V150" stroke="#8a5a2b" stroke-width="8"/>${[0, 1, 2, 3, 4].map((i) => `<path d="M${34 + i * 39} 74 q6 -22 18 -22 q12 0 18 22" fill="#f3c9a1" stroke="var(--ink)" stroke-width="1.5"/>${num(53 + i * 39, 44, i + 1, "var(--pen)", 14)}`).join("")}${txt(130, 172, "La mesa mide 5 palmos", "var(--ink)", 14)}`)],
    ["Unidades iguales para todos", `<p>Si cada uno mide con su mano, salen números <b>diferentes</b>.</p><p>Por eso todo el mundo se puso de acuerdo en usar las mismas medidas. Así, una mesa mide lo mismo la mida quien la mida.</p><p>La unidad principal para medir longitudes es el <mark>metro</mark>. Se escribe con la letra <b>m</b>.</p>`,
      svg("Un niño y un adulto miden la misma mesa con palmos y les salen números distintos", `${nino(40, 160, { c: "var(--pen)", s: 0.85 })}${nino(220, 160, { c: "var(--red)", s: 1.15 })}<rect x="80" y="110" width="100" height="10" rx="3" fill="#c99a5b" stroke="var(--ink)" stroke-width="1.5"/>${P.bocadillo(60, 40, 90, "¡5 palmos!")}${P.bocadillo(196, 40, 90, "¡4 palmos!")}${txt(130, 160, "¿Quién tiene razón?", "var(--ink)", 13)}`), P.V("lonB")],
    ["El metro", `<p>Un <mark>metro</mark> es más o menos lo que mide un <b>paso largo</b> de una persona mayor. O desde el suelo hasta la cintura de un adulto.</p><p>Una puerta mide unos 2 metros de alto. Tú mides algo más de <b>1 metro</b>.</p><p>Para medir en metros usamos la <b>cinta métrica</b> o el <b>metro de carpintero</b>.</p>`,
      svg("Un niño junto a una vara de un metro", `<rect x="80" y="40" width="16" height="120" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/>${[...Array(11)].map((_, i) => `<path d="M80 ${40 + i * 12} h${i % 5 === 0 ? 10 : 6}" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}<path d="M66 40 V160" stroke="var(--red)" stroke-width="2"/><path d="M61 47 L66 40 L71 47 M61 153 L66 160 L71 153" stroke="var(--red)" stroke-width="2" fill="none"/>${txt(36, 104, "1 m", "var(--red)", 16)}${nino(150, 160, { c: "var(--leaf)", s: 1.55 })}${txt(210, 50, "Mides algo", "var(--ink)", 13)}${txt(210, 68, "más de 1 m", "var(--ink)", 13)}`)],
    ["El centímetro", `<p>Para medir cosas <b>pequeñas</b>, como un lápiz o una goma, el metro es muy grande.</p><p>Entonces usamos el <mark>centímetro</mark>. Se escribe <b>cm</b>. Es más o menos lo ancho de tu dedo meñique.</p><p>Un metro tiene <b>100 centímetros</b>: 1 m = 100 cm.</p>`,
      svg("Una regla de diez centímetros y un lápiz de ocho centímetros", `${regla(30, 100, 10, 20)}${lapiz(30, 80, 160)}${cota(30, 190, 52, "8 cm")}${txt(130, 160, "1 m = 100 cm", "var(--pen)", 16)}`)],
    ["Medir con la regla", `<p>Para medir con la <mark>regla</mark> seguimos estos pasos:</p><p>1. Ponemos el <b>0</b> de la regla justo en el principio de la cosa.</p><p>2. Miramos dónde <b>termina</b> la cosa.</p><p>3. Leemos el número: esa es la medida en centímetros. ¡Cuidado! La regla <b>no empieza</b> en el borde, empieza en el 0.</p>`,
      svg("Una goma medida con la regla desde el cero: cuatro centímetros", `<rect x="40" y="56" width="80" height="34" rx="6" fill="var(--inf)" stroke="var(--ink)" stroke-width="1.5"/><rect x="40" y="56" width="30" height="34" rx="6" fill="var(--pen)" opacity=".5"/>${regla(40, 96, 10, 20)}<path d="M40 50 V140 M120 50 V140" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="4 3"/>${txt(40, 158, "empieza en 0", "var(--red)", 12)}${txt(150, 158, "termina en 4", "var(--red)", 12)}${num(200, 80, "4 cm", "var(--pen)", 24)}`)],
    ["¿Metro o centímetro?", `<p>Elegimos la unidad según lo <b>grande</b> que sea la cosa.</p><p>Para cosas <b>pequeñas</b> usamos el <mark>centímetro</mark>: un lápiz, un libro, una hormiga.</p><p>Para cosas <b>grandes</b> usamos el <mark>metro</mark>: la clase, el patio, una piscina o un árbol.</p><p>Si mides el patio en centímetros, ¡te saldría un número enorme!</p>`,
      svg("Un lápiz se mide en centímetros y un árbol en metros", `<rect x="14" y="20" width="110" height="140" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><rect x="136" y="20" width="110" height="140" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>${lapiz(30, 90, 80)}${txt(69, 142, "cm", "var(--pen)", 20)}${arbol(190, 110, 1.1)}${txt(191, 142, "m", "var(--leaf)", 20)}`)],
    ["Comparar longitudes", `<p>Podemos comparar qué es <b>más largo</b> o <b>más corto</b>.</p><p>Si la cuerda roja mide <b>9 cm</b> y la azul <b>6 cm</b>, la roja es más larga. ¿Cuánto más? 9 − 6 = <mark>3 cm</mark>.</p><p>Para comparar alturas decimos <b>más alto</b> y <b>más bajo</b>. Tu papá es más alto que tú.</p>`,
      svg("Una cuerda roja de nueve centímetros y una azul de seis", `<path d="M30 60 H210" stroke="var(--red)" stroke-width="7" stroke-linecap="round"/><path d="M30 100 H150" stroke="var(--pen)" stroke-width="7" stroke-linecap="round"/>${txt(232, 66, "9 cm", "var(--red)", 14)}${txt(172, 106, "6 cm", "var(--pen)", 14)}${cota(150, 210, 130, "3 cm más", "var(--leaf)")}`)],
    ["¿Para qué sirve?", `<p>Medimos para muchas cosas. En el médico miden lo que <b>creces</b>.</p><p>Para comprar una <b>cama</b> o un mueble, medimos si cabe. En la carrera del cole, la pista mide <b>50 metros</b>.</p><p>Y en casa, a veces marcamos en una pared cuánto crecemos cada año. ¡Este año has crecido <mark>6 cm</mark>!</p>`,
      svg("Marcas de altura en una pared: el niño ha crecido seis centímetros", `<rect x="110" y="16" width="30" height="150" fill="var(--sun)" fill-opacity=".3" stroke="var(--ink)" stroke-width="1.5"/>${[...Array(8)].map((_, i) => `<path d="M110 ${30 + i * 18} h${i % 2 ? 8 : 14}" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}<path d="M104 58 H150" stroke="var(--red)" stroke-width="3"/><path d="M104 74 H150" stroke="var(--pen)" stroke-width="3"/>${txt(190, 62, "este año", "var(--red)", 12)}${txt(190, 80, "el año pasado", "var(--pen)", 12)}${nino(70, 166, { c: "var(--leaf)", s: 1.6 })}${txt(196, 130, "+6 cm", "var(--leaf)", 18)}`)],
    ["Juego: la caza de medidas", `<p>Coge una regla y busca por casa cosas que midan <b>justo 10 cm</b>. ¿Una cuchara? ¿Un rotulador?</p><p>Después, con una cinta métrica, busca algo que mida <b>1 metro</b>. ¡Quizá una silla o una ventana!</p><p>Antes de medir, intenta <mark>adivinar</mark>. Luego mide. ¿Quién se acerca más?</p>`,
      svg("Un niño con una cinta métrica y la pregunta ¿cuánto mide?", `${nino(50, 160, { pose: "brazos", c: "var(--pen)" })}<path d="M70 114 Q130 96 210 114" stroke="var(--sun)" stroke-width="10" fill="none"/>${[...Array(12)].map((_, i) => `<path d="M${78 + i * 11} ${110 - Math.sin((i / 11) * Math.PI) * 13} v6" stroke="var(--ink)" stroke-width="1.2"/>`).join("")}<circle cx="214" cy="118" r="14" fill="var(--red)" stroke="var(--ink)" stroke-width="1.5"/>${P.bocadillo(150, 46, 130, "¿Cuánto mide?")}`)],
  ],
  figura: ["El metro y el centímetro", `<svg viewBox="0 0 640 260" role="img" aria-label="Un metro tiene cien centímetros; cosas que se miden en metros y en centímetros">
    <rect width="640" height="260" rx="16" fill="var(--paper)"/>
    <rect x="40" y="40" width="560" height="40" rx="6" fill="var(--sun)" fill-opacity=".45" stroke="var(--ink)" stroke-width="2"/>
    ${[...Array(11)].map((_, i) => `<path d="M${40 + i * 56} 40 v${i % 5 === 0 ? 22 : 14}" stroke="var(--ink)" stroke-width="2"/>${num(40 + i * 56, 102, i * 10, "var(--ink)", 14)}`).join("")}
    ${txt(320, 130, "1 metro = 100 centímetros", "var(--pen)", 20)}
    ${txt(170, 180, "cm: lápiz, goma, libro", "var(--pen)", 16)}${txt(470, 180, "m: clase, patio, piscina", "var(--leaf)", 16)}
    ${lapiz(110, 220, 120)}${casa(470, 236, "var(--leaf)")}
  </svg>`],
  video: P.V("lonV", true),
  ejemplos: [
    ["Mide este lápiz con la regla: empieza en el 0 y termina en el 12.", ["Ponemos el 0 al principio del lápiz.", "Miramos dónde termina: en el 12."], "el lápiz mide 12 cm."],
    ["¿Con qué unidad medirías el largo del pasillo?", ["El pasillo es grande.", "Para cosas grandes usamos el metro."], "en metros."],
    ["Una cinta mide 15 cm y otra 9 cm. ¿Cuánto más mide la primera?", ["Restamos las dos medidas.", "15 − 9 = 6."], "mide 6 cm más."],
  ],
  errores: [
    "Empezar a medir desde el borde de la regla en vez de desde el 0.",
    "Medir el patio en centímetros: para cosas grandes usamos metros.",
    "Olvidar escribir la unidad: no es «12», es «12 cm».",
    "Pensar que 1 m son 10 cm: 1 m son 100 cm.",
  ],
  ejercicios: [
    ["¿Cuántos centímetros tiene un metro?", "100 centímetros."],
    ["Mide tu lápiz con la regla. ¿Cuánto mide?", "Respuesta libre: por ejemplo, 14 cm."],
    ["¿Cómo se escribe abreviado «metro»? ¿Y «centímetro»?", "m y cm."],
    ["¿En qué medirías una hormiga: m o cm?", "En cm."],
    ["¿En qué medirías una piscina: m o cm?", "En m."],
    ["Una tira mide 7 cm y otra 11 cm. ¿Cuál es más larga?", "La de 11 cm."],
    ["¿Cuánto más larga es la de 11 cm que la de 7 cm?", "11 − 7 = 4 cm."],
    ["Dibuja con la regla una línea de 5 cm.", "Línea del 0 al 5 de la regla."],
    ["Mide tu palmo con la regla.", "Respuesta libre: unos 12 a 15 cm."],
    ["Pon dos cintas de 50 cm una detrás de otra. ¿Cuánto miden juntas?", "100 cm, es decir, 1 metro."],
  ],
  quiz: [
    ["Medir es…", ["ver cuántas veces cabe una unidad", "contar colores", "pesar cosas"], "Se compara con una unidad."],
    ["1 metro tiene…", ["100 cm", "10 cm", "1000 cm"], "1 m = 100 cm."],
    ["Para medir un lápiz uso…", ["centímetros", "metros", "kilos"], "Es algo pequeño."],
    ["Para medir el patio uso…", ["metros", "centímetros", "litros"], "Es algo grande."],
    ["¿Dónde empezamos a medir con la regla?", ["En el 0", "En el borde", "En el 1"], "El 0 va al principio de la cosa."],
    ["¿Por qué no medimos con palmos?", ["Cada mano es distinta", "Porque duele", "Porque no se puede"], "Necesitamos unidades iguales para todos."],
    ["El centímetro se escribe…", ["cm", "m", "ce"], "c de centi, m de metro."],
    ["Una puerta mide unos…", ["2 metros", "2 centímetros", "200 metros"], "Es más alta que una persona."],
    ["Una cuerda de 8 cm y otra de 5 cm. La primera mide…", ["3 cm más", "13 cm más", "lo mismo"], "8 − 5 = 3."],
    ["Para medir la clase es mejor…", ["la cinta métrica", "una regla pequeña", "un vaso"], "La cinta es larga."],
  ],
  examen: [
    ["¿Cuántos cm son 1 m?", ["100", "10", "50"], "1 m = 100 cm."],
    ["¿Qué unidad usarías para medir una goma?", ["cm", "m", "kg"], "Es pequeña."],
    ["Un lápiz empieza en el 0 y acaba en el 9. Mide…", ["9 cm", "10 cm", "8 cm"], "Leemos donde termina."],
    ["¿Qué es más largo?", ["1 m", "80 cm", "50 cm"], "1 m son 100 cm."],
  ],
  feynman: ["Por qué necesitamos unidades iguales para todos", "Cuántos centímetros tiene un metro", "Cómo se mide con la regla"],
  mapa: ["LONGITUD", [
    ["Metro (m)", "cosas grandes", "var(--leaf)"],
    ["Centímetro (cm)", "cosas pequeñas", "var(--pen)"],
    ["1 m", "= 100 cm", "var(--red)"],
    ["Regla", "empieza en el 0", "var(--sun)"],
  ]],
  tarjetas: [
    ["¿Qué es la longitud?", "Lo largo, lo alto o lo ancho de algo"],
    ["Unidad principal de longitud", "El metro (m)"],
    ["1 m =", "100 cm"],
    ["¿Con qué medimos cosas pequeñas?", "Con la regla, en centímetros"],
    ["¿Con qué medimos cosas grandes?", "Con la cinta métrica, en metros"],
    ["¿Dónde empiezo a medir con la regla?", "En el 0"],
    ["¿Un lápiz se mide en m o en cm?", "En cm"],
    ["¿Una piscina se mide en m o en cm?", "En m"],
  ],
  familias: [
    "Medid juntos la altura de vuestro hijo en una pared y marcadla con la fecha.",
    "Jugad a adivinar cuánto mide algo y luego comprobadlo con una cinta métrica.",
    "Medid objetos de la mochila con la regla y anotad las medidas con su unidad.",
    "Contad los pasos de un pasillo y comparadlos con los de un adulto.",
  ],
  saberes: "Medida: la longitud; unidades no convencionales y convencionales (metro y centímetro); uso de la regla y la cinta métrica; estimación",
  ideas: ["Medir el aula con palmos y pasos para descubrir la necesidad de una unidad común.", "Fabricar un metro de papel dividido en decímetros y centímetros.", "Estimar antes de medir y comparar la estimación con la medida real."],
});
