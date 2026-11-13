// Ciencias Sociales 2º de Primaria: el paso del tiempo y la historia de mi familia. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, nino, sol, luna, estrella, arbol, planta, semilla, reloj, calendario, marco, chip, flechaR, linea } = require("./_pri2b");

// Cara sencilla para el árbol de familia: pelo oscuro, claro o canoso.
const cabeza = (x, y, r = 14, pelo = "var(--ink)", c = "var(--pen)") => `<g transform="translate(${x} ${y})"><path d="M${-r * 1.1} ${r * 2.2} q0 ${-r * 1.2} ${r * 1.1} ${-r * 1.2} q${r * 1.1} 0 ${r * 1.1} ${r * 1.2}z" fill="${c}"/><circle r="${r}" fill="#f3c9a1"/><path d="M${-r} ${-r * 0.1} q0 ${-r * 1.05} ${r} ${-r * 0.95} q${r} ${-r * 0.1} ${r} ${r * 0.95} q${-r * 0.9} ${-r * 0.6} ${-r * 2} 0z" fill="${pelo}"/><circle cx="${-r * 0.35}" cy="${r * 0.1}" r="${r * 0.1}" fill="var(--ink)"/><circle cx="${r * 0.35}" cy="${r * 0.1}" r="${r * 0.1}" fill="var(--ink)"/><path d="M${-r * 0.3} ${r * 0.45} q${r * 0.3} ${r * 0.25} ${r * 0.6} 0" stroke="var(--ink)" stroke-width="1.5" fill="none"/></g>`;
const bebe = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cy="-12" rx="16" ry="12" fill="#cfe9f7" stroke="var(--water)" stroke-width="1.5"/><circle cx="0" cy="-32" r="11" fill="#f3c9a1"/><circle cx="-3.5" cy="-32" r="1.3" fill="var(--ink)"/><circle cx="3.5" cy="-32" r="1.3" fill="var(--ink)"/><path d="M-3 -27 q3 2 6 0" stroke="var(--ink)" stroke-width="1.2" fill="none"/><path d="M0 -43 q4 -4 2 -6" stroke="var(--ink)" stroke-width="1.5" fill="none"/></g>`;
const telViejo = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-26" y="-30" width="52" height="34" rx="6" fill="#2c3e50"/><circle cy="-12" r="11" fill="#ecf0f1" stroke="#7f8c8d"/><circle cy="-12" r="3" fill="#7f8c8d"/><path d="M-30 -36 q0 -10 10 -10 h40 q10 0 10 10 v4 h-10 v-4 h-40 v4 h-10z" fill="#2c3e50"/></g>`;
const movil = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-14" y="-40" width="28" height="48" rx="5" fill="var(--ink)"/><rect x="-11" y="-35" width="22" height="36" rx="2" fill="var(--water)" opacity=".7"/><circle cy="4" r="2" fill="#fff"/></g>`;
const foto = (x, y, w, h, body) => `<g transform="translate(${x} ${y})"><rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" fill="#fff" stroke="var(--line)" stroke-width="2"/><rect x="${-w / 2 + 4}" y="${-h / 2 + 4}" width="${w - 8}" height="${h - 14}" fill="#e8d9b5"/>${body}</g>`;

module.exports = tema({
  materia: "Ciencias Sociales",
  titulo: "El paso del tiempo: la historia de mi familia",
  objetivos: ["Usar las palabras ayer, hoy, mañana, antes y después", "Ordenar hechos de mi vida en una línea del tiempo", "Conocer la historia de mi familia con un árbol genealógico"],
  claves: ["pasado", "presente", "futuro", "antes", "después", "línea del tiempo", "árbol genealógico", "abuelos"],
  pregunta: {
    texto: "Tu abuela tiene una foto de cuando era niña. ¿Cómo podemos saber cómo vivía ella antes?",
    respuesta: "Mirando sus <mark>fotos</mark> y sus objetos antiguos, y sobre todo <b>preguntándole</b>. Así conocemos el <mark>pasado</mark> de nuestra familia: es nuestra propia historia.",
  },
  bloques: [
    {
      html: `<h3>Ayer, hoy y mañana</h3><p>El tiempo <mark>pasa</mark> siempre y no se para. Para hablar de él usamos tres palabras.</p><p><b>Ayer</b> es el día que ya pasó. <b>Hoy</b> es el día en que estamos. <b>Mañana</b> es el día que vendrá. Lo que ya pasó es el <mark>pasado</mark>, lo de ahora es el <mark>presente</mark> y lo que vendrá es el <mark>futuro</mark>.</p>`,
      svg: svg("Tres calendarios en fila: ayer, hoy y mañana, con flechas", `${calendario(50, 90, "LUNES", "7")}${calendario(130, 90, "MARTES", "8")}${calendario(210, 90, "MIÉRC.", "9")}${flechaR(84, 90, 96, 90, "var(--muted)")}${flechaR(164, 90, 176, 90, "var(--muted)")}<rect x="96" y="48" width="68" height="74" rx="9" fill="none" stroke="var(--red)" stroke-width="3"/>${txt(50, 146, "ayer", "var(--muted)", 15)}${txt(130, 146, "hoy", "var(--red)", 16)}${txt(210, 146, "mañana", "var(--pen)", 15)}`),
    },
    {
      html: `<h3>Medimos el tiempo</h3><p>Para medir el tiempo usamos el <mark>reloj</mark> y el <mark>calendario</mark>.</p><p>El reloj mide las <b>horas</b> y los minutos. El calendario muestra los <b>días</b>, las <b>semanas</b> y los <b>meses</b>. Una semana tiene 7 días y un año tiene 12 meses. Cada año cumplimos un año más.</p>`,
      svg: svg("Un reloj de pared y un calendario con los días del mes", `${reloj(70, 86, 46, 10, 0)}<g transform="translate(150 30)"><rect width="96" height="110" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><rect width="96" height="22" rx="6" fill="var(--red)"/>${rot(48, 15, "MAYO", { size: 12, color: "#fff", w: 800 })}${[...Array(28)].map((_, i) => `<rect x="${6 + (i % 7) * 12.4}" y="${30 + Math.floor(i / 7) * 19}" width="10" height="15" rx="2" fill="${i === 15 ? "var(--sun)" : "var(--paper)"}" stroke="var(--line)"/>`).join("")}</g>${txt(70, 156, "horas", "var(--pen)", 14)}${txt(198, 162, "días y meses", "var(--red)", 14)}`),
    },
    {
      html: `<h3>Antes y después</h3><p>Las cosas <mark>cambian</mark> con el tiempo. Primero pasa una cosa, <b>después</b> otra y al final otra.</p><p>Una semilla se convierte en planta y, con los años, en un árbol. Para contar lo que pasa usamos palabras como <b>primero</b>, <b>después</b> y <b>al final</b>.</p>`,
      svg: svg("Una semilla, una planta y un árbol: primero, después y al final", `<rect x="10" y="130" width="240" height="14" fill="#8a5a2b" opacity=".5"/>${semilla(46, 124)}${planta(130, 132, 0.9)}${arbol(212, 134, 1.3)}${flechaR(72, 110, 98, 110, "var(--muted)")}${flechaR(156, 110, 180, 110, "var(--muted)")}${txt(46, 164, "primero", "var(--ink)", 13)}${txt(130, 164, "después", "var(--ink)", 13)}${txt(212, 164, "al final", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>Yo también cambio</h3><p>Cuando naciste eras un <b>bebé</b>: no hablabas ni andabas. Después aprendiste a caminar y a decir palabras.</p><p>Ahora vas al colegio, lees y escribes. Cuando seas <b>mayor</b> serás un adulto. Cada persona tiene su propia <mark>historia personal</mark>: todo lo que le ha pasado desde que nació.</p>`,
      svg: svg("Un bebé, un niño pequeño y un niño de colegio con mochila, de menor a mayor", `${bebe(40, 150)}${nino(118, 150, { c: "var(--sun)", s: 0.6 })}${nino(206, 150, { c: "var(--red)", s: 0.95 })}<rect x="216" y="104" width="14" height="22" rx="3" fill="var(--pen)"/>${linea(16, 156, 244, 156, "var(--line)", 3)}${txt(40, 174, "bebé", "var(--muted)", 13)}${txt(118, 174, "3 años", "var(--muted)", 13)}${txt(206, 174, "7 años", "var(--muted)", 13)}`),
    },
    {
      html: `<h3>Mi familia tiene historia</h3><p>Mi familia también tiene un <mark>pasado</mark>. Mis <b>padres</b> fueron niños antes que yo.</p><p>Los padres de mis padres son mis <b>abuelos</b>. Ellos son las personas mayores de la familia y conocen muchas historias de cuando eran pequeños. Las personas de una familia de distintas edades forman las <mark>generaciones</mark>.</p>`,
      svg: svg("Tres generaciones de una familia: abuelos, padres e hijo", `${cabeza(30, 80, 14, "#ccc", "var(--muted)")}${cabeza(66, 80, 14, "#ddd", "#b07aa1")}${cabeza(116, 84, 14, "#5b3a1e", "var(--pen)")}${cabeza(152, 84, 14, "var(--ink)", "var(--red)")}${cabeza(216, 94, 11, "#5b3a1e", "var(--leaf)")}${flechaR(80, 140, 98, 140, "var(--muted)")}${flechaR(168, 140, 194, 140, "var(--muted)")}${txt(48, 146, "abuelos", "var(--muted)", 14)}${txt(134, 146, "padres", "var(--pen)", 14)}${txt(216, 146, "yo", "var(--leaf)", 15)}${txt(130, 36, "tres generaciones", "var(--ink)", 14)}`),
    },
    {
      html: `<h3>El árbol genealógico</h3><p>El <mark>árbol genealógico</mark> es un dibujo con las personas de la familia, como si fueran las ramas de un árbol.</p><p>Arriba ponemos a los <b>abuelos</b>, en medio a los <b>padres</b> y a los tíos, y abajo a los <b>hijos</b>: yo, mis hermanos y mis primos. Las líneas unen a cada persona con sus padres.</p>`,
      svg: svg("Un árbol genealógico con cuatro abuelos arriba, dos padres en medio y dos hijos abajo", `${[[40, "#ccc"], [86, "#ddd"], [174, "#ccc"], [220, "#ddd"]].map(([x, p]) => cabeza(x, 30, 11, p, "var(--muted)")).join("")}${linea(40, 46, 86, 46, "var(--ink)", 2)}${linea(174, 46, 220, 46, "var(--ink)", 2)}${linea(63, 46, 63, 66, "var(--ink)", 2)}${linea(197, 46, 197, 66, "var(--ink)", 2)}${cabeza(63, 78, 11, "#5b3a1e", "var(--pen)")}${cabeza(197, 78, 11, "var(--ink)", "var(--red)")}${linea(63, 102, 197, 102, "var(--ink)", 2)}${linea(130, 102, 130, 116, "var(--ink)", 2)}${linea(104, 116, 156, 116, "var(--ink)", 2)}${cabeza(104, 128, 10, "#5b3a1e", "var(--leaf)")}${cabeza(156, 128, 10, "var(--ink)", "var(--sun)")}${txt(130, 30, "abuelos", "var(--muted)", 12)}${txt(130, 78, "padres", "var(--pen)", 12)}${txt(130, 172, "hijos", "var(--leaf)", 12)}`),
      video: V("n5NvUHn04lw"),
    },
    {
      html: `<h3>¿Cómo vivían los abuelos?</h3><p>Cuando los abuelos eran niños, muchas cosas eran <mark>distintas</mark>.</p><p>No había móviles ni tabletas: el <b>teléfono</b> estaba fijo en la pared o en una mesa. Había menos coches y muchas familias vivían en el campo. Los niños jugaban en la calle a la comba, a las canicas y al escondite.</p>`,
      svg: svg("Antes un teléfono antiguo de rueda y ahora un teléfono móvil", `<rect x="10" y="20" width="114" height="150" rx="10" fill="#e8d9b5" opacity=".5"/><rect x="136" y="20" width="114" height="150" rx="10" fill="var(--water)" opacity=".14"/>${telViejo(67, 108)}${movil(193, 110)}${chip(67, 150, 70, "antes", "#8a5a2b", 13)}${chip(193, 150, 70, "ahora", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>¿Cómo conocemos el pasado?</h3><p>Para saber cómo era el <mark>pasado</mark> de mi familia tengo varias pistas.</p><p>Podemos mirar <b>fotos</b> antiguas, guardar <b>objetos</b> viejos, como juguetes o cartas, y sobre todo <b>preguntar</b> a los mayores. A estas pistas las llamamos <mark>fuentes</mark> de la historia.</p>`,
      svg: svg("Un niño escucha a su abuelo mientras miran una foto antigua", `${foto(130, 52, 70, 56, `<circle cx="0" cy="-8" r="9" fill="#a88b5c"/><path d="M-12 14 q12 -16 24 0z" fill="#a88b5c"/>`)}${nino(80, 168, { c: "var(--muted)", pelo: "#ccc" })}<path d="M70 116 q-8 30 -2 52" stroke="#8a5a2b" stroke-width="3" fill="none"/>${nino(184, 168, { c: "var(--red)", s: 0.75 })}${txt(210, 84, "¿y antes?", "var(--pen)", 14)}`),
    },
    {
      html: `<h3>La línea del tiempo</h3><p>La <mark>línea del tiempo</mark> es una línea donde colocamos los hechos en orden, de lo más antiguo a lo más nuevo.</p><p>En mi línea del tiempo puedo poner: cuando <b>nací</b>, cuando di mis <b>primeros pasos</b>, cuando empecé el <b>colegio</b> y cuando aprendí a <b>leer</b>. A la izquierda va lo que pasó antes.</p>`,
      svg: svg("Una línea del tiempo con cuatro momentos: nací, primeros pasos, colegio y leo", `${linea(16, 100, 238, 100, "var(--ink)", 4)}<path d="M238 92 l12 8 l-12 8z" fill="var(--ink)"/>${[[36, "0", "nací", "var(--red)"], [96, "1", "ando", "var(--sun)"], [156, "3", "cole", "var(--leaf)"], [216, "6", "leo", "var(--pen)"]].map(([x, n, t, c]) => `<circle cx="${x}" cy="100" r="9" fill="${c}"/>${txt(x, 76, n + (n === "1" ? " año" : " años"), "var(--muted)", 12)}${txt(x, 134, t, c, 15)}`).join("")}`),
    },
  ],
  figura: {
    titulo: "La historia de mi familia",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="A la izquierda, pasado, presente y futuro; a la derecha, un árbol genealógico con abuelos, padres e hijos">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      <rect x="20" y="20" width="280" height="220" rx="14" fill="var(--sun)" opacity=".08"/><rect x="320" y="20" width="300" height="220" rx="14" fill="var(--leaf)" opacity=".08"/>
      ${linea(40, 140, 270, 140, "var(--ink)", 4)}<path d="M270 132 l12 8 l-12 8z" fill="var(--ink)"/>
      <circle cx="70" cy="140" r="11" fill="var(--muted)"/><circle cx="160" cy="140" r="11" fill="var(--red)"/><circle cx="250" cy="140" r="11" fill="var(--pen)"/>
      ${rot(70, 116, "ayer", { size: 16, color: "var(--muted)" })}${rot(160, 116, "hoy", { size: 16, color: "var(--red)" })}${rot(250, 116, "mañana", { size: 16, color: "var(--pen)" })}
      ${rot(70, 176, "pasado", { size: 18, color: "var(--muted)", w: 800 })}${rot(160, 176, "presente", { size: 18, color: "var(--red)", w: 800 })}${rot(250, 176, "futuro", { size: 18, color: "var(--pen)", w: 800 })}
      ${rot(160, 56, "El tiempo pasa", { size: 22, color: "var(--ink)", w: 800 })}
      ${[[380, "#ccc"], [430, "#ddd"], [510, "#ccc"], [560, "#ddd"]].map(([x, p]) => cabeza(x, 60, 13, p, "var(--muted)")).join("")}
      ${linea(380, 80, 430, 80, "var(--ink)", 2)}${linea(510, 80, 560, 80, "var(--ink)", 2)}${linea(405, 80, 405, 104, "var(--ink)", 2)}${linea(535, 80, 535, 104, "var(--ink)", 2)}
      ${cabeza(405, 118, 13, "#5b3a1e", "var(--pen)")}${cabeza(535, 118, 13, "var(--ink)", "var(--red)")}${linea(405, 146, 535, 146, "var(--ink)", 2)}${linea(470, 146, 470, 164, "var(--ink)", 2)}${cabeza(470, 178, 12, "#5b3a1e", "var(--leaf)")}
      ${rot(470, 64, "abuelos", { size: 14, color: "var(--muted)" })}${rot(470, 122, "padres", { size: 14, color: "var(--pen)" })}${rot(470, 226, "yo", { size: 16, color: "var(--leaf)", w: 800 })}
    </svg>`,
  },
  video: V("Nnsz4YOaFlw", "qué es el tiempo para niños"),
  ejemplos: [
    { enunciado: "Hoy es martes. ¿Qué día fue ayer y qué día será mañana?", pasos: ["Ayer es el día de antes de hoy.", "El día de antes del martes es el lunes.", "El día de después del martes es el miércoles."], resultado: "ayer fue lunes y mañana será miércoles." },
    { enunciado: "Ordena: empecé el colegio, nací, aprendí a andar.", pasos: ["Lo primero de todo fue nacer.", "Después aprendí a andar, con un año.", "Al final empecé el colegio."], resultado: "nací, aprendí a andar, empecé el colegio." },
    { enunciado: "¿Quiénes son los padres de mi mamá?", pasos: ["Los padres de mis padres son mis abuelos.", "Mi mamá es una de mis madres o padres.", "Entonces sus padres son mis abuelos."], resultado: "son mis abuelos maternos." },
  ],
  errores: [
    "Confundir ayer y mañana: ayer ya pasó y mañana todavía no ha llegado.",
    "Pensar que los abuelos siempre fueron mayores: ¡también fueron niños!",
    "Colocar en la línea del tiempo lo más nuevo a la izquierda: lo antiguo va primero.",
    "Creer que el pasado no se puede conocer: tenemos fotos, objetos y a los mayores.",
  ],
  ejercicios: [
    { q: "Escribe qué hiciste ayer, qué haces hoy y qué harás mañana.", sol: "Respuesta libre: ayer fui al parque, hoy voy al cole, mañana iré a casa de mi abuela." },
    { q: "¿Cuántos días tiene una semana?", sol: "Siete días." },
    { q: "¿Cuántos meses tiene un año?", sol: "Doce meses." },
    { q: "¿Con qué medimos las horas?", sol: "Con el reloj." },
    { q: "Ordena: árbol, semilla, planta.", sol: "Semilla, planta, árbol." },
    { q: "¿Quiénes son tus abuelos?", sol: "Los padres de mi padre y de mi madre." },
    { q: "¿Qué es un árbol genealógico?", sol: "Un dibujo con las personas de la familia unidas por líneas." },
    { q: "Di una cosa que no tenían los abuelos cuando eran niños.", sol: "Por ejemplo: el teléfono móvil o la tableta." },
    { q: "Escribe dos fuentes para conocer el pasado.", sol: "Las fotos antiguas y preguntar a los mayores." },
    { q: "Haz tu línea del tiempo con tres momentos de tu vida.", sol: "Respuesta libre: nací, aprendí a andar, empecé el colegio." },
  ],
  quiz: [
    { q: "El día que ya pasó es…", o: ["ayer", "hoy", "mañana"], a: 0, e: "Ya pasó." },
    { q: "El día que vendrá es…", o: ["mañana", "ayer", "hoy"], a: 0, e: "Todavía no ha llegado." },
    { q: "Lo que ya pasó es el…", o: ["pasado", "presente", "futuro"], a: 0, e: "Como cuando eras bebé." },
    { q: "Una semana tiene…", o: ["7 días", "12 días", "30 días"], a: 0, e: "De lunes a domingo." },
    { q: "Un año tiene…", o: ["12 meses", "7 meses", "4 meses"], a: 0, e: "De enero a diciembre." },
    { q: "Los padres de mis padres son mis…", o: ["abuelos", "tíos", "primos"], a: 0, e: "Las personas mayores de la familia." },
    { q: "En el árbol genealógico, arriba ponemos a…", o: ["los abuelos", "los hijos", "los primos"], a: 0, e: "Los más mayores, arriba." },
    { q: "Cuando los abuelos eran niños no había…", o: ["móviles", "casas", "árboles"], a: 0, e: "El teléfono era fijo." },
    { q: "Una foto antigua nos ayuda a…", o: ["conocer el pasado", "ver el futuro", "medir la hora"], a: 0, e: "Es una fuente." },
    { q: "En la línea del tiempo, lo más antiguo va…", o: ["a la izquierda", "a la derecha", "en cualquier sitio"], a: 0, e: "Primero lo que pasó antes." },
  ],
  examen: [
    { q: "¿Qué orden es correcto?", o: ["Bebé, niño, adulto", "Adulto, bebé, niño", "Niño, bebé, adulto"], a: 0, e: "Así crecemos." },
    { q: "¿Quiénes son los hermanos de mis padres?", o: ["Mis tíos", "Mis abuelos", "Mis primos"], a: 0, e: "Y sus hijos son mis primos." },
    { q: "¿Cuál es la mejor forma de saber cómo era la infancia de la abuela?", o: ["Preguntarle a ella", "Mirar el calendario", "Mirar el reloj"], a: 0, e: "Ella lo vivió." },
    { q: "¿Para qué sirve la línea del tiempo?", o: ["Para ordenar hechos de antes a después", "Para medir metros", "Para dibujar paisajes"], a: 0, e: "Ordena el tiempo." },
  ],
  feynman: ["Qué son pasado, presente y futuro", "Cómo medimos el tiempo y cómo cambiamos", "Qué es un árbol genealógico y cómo conocemos el pasado"],
  mapaT: ["EL PASO DEL TIEMPO", [
    ["Ayer · hoy · mañana", "pasado · presente · futuro", "var(--red)"],
    ["Medir el tiempo", "reloj · calendario", "var(--pen)"],
    ["Mi familia", "abuelos · padres · hijos", "var(--leaf)"],
    ["Conocer el pasado", "fotos · objetos · preguntar", "#8a5a2b"],
  ]],
  tarjetas: [
    ["El día que ya pasó", "Ayer"],
    ["El día que vendrá", "Mañana"],
    ["Días de una semana", "Siete"],
    ["Meses de un año", "Doce"],
    ["Los padres de mis padres", "Mis abuelos"],
    ["Dibujo con las personas de la familia", "El árbol genealógico"],
    ["Hechos ordenados de antes a después", "La línea del tiempo"],
    ["Pistas para conocer el pasado", "Fotos, objetos y preguntar a los mayores"],
  ],
  familias: [
    "Mirad juntos fotos de cuando vuestro hijo o hija era bebé y ordenadlas.",
    "Haced juntos el árbol genealógico de la familia con fotos o dibujos.",
    "Pedid a los abuelos que cuenten a qué jugaban cuando eran niños.",
    "Buscad en casa un objeto antiguo y explicad para qué servía.",
  ],
  saberes: "Sociedades y territorios: nociones temporales básicas (ayer, hoy, mañana; antes, después); medida del tiempo con reloj y calendario; la historia personal y familiar, el árbol genealógico y las fuentes orales y materiales",
  ideas: ["Línea del tiempo personal con fotos traídas de casa.", "Entrevista a un abuelo o abuela en clase.", "Rincón de objetos antiguos: comparar cómo eran antes y cómo son ahora."],
});
