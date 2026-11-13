// Infantil 5 años · Religión: la Iglesia es una familia.
const { tema, mapa, svg, rot, big, ic, nino, iglesia, vela, corazon, suelo, dibujos, mural, lista, vid, PROF, R, A, V, N, M, W, K, MADERA } = require("./_inf5b");

module.exports = tema({
  materia: "Religión",
  titulo: "La Iglesia es una familia",
  objetivos: ["Saber que la Iglesia es la familia de los amigos de Jesús", "Distinguir la iglesia (edificio) de la Iglesia (personas)", "Conocer cosas que hacen juntos los cristianos"],
  claves: ["Iglesia", "iglesia", "cristianos", "bautismo", "parroquia"],
  pregunta: {
    texto: "¿Has visto alguna vez una iglesia con su campanario? ¿Quién va allí?",
    respuesta: "Allí se reúnen los <mark>cristianos</mark>, los amigos de Jesús. Todos juntos forman una gran familia: <b>la Iglesia</b>.",
  },
  bloques: [
    {
      html: `<h3>Los amigos de Jesús</h3><p>Jesús tenía muchos <mark>amigos</mark>. Le escuchaban y le seguían.</p><p>Hoy también hay muchas personas que quieren a Jesús: son los <b>cristianos</b>.</p><p>Son sus amigos de hoy.</p>`,
      svg: svg("Muchas personas de todas las edades juntas con un corazón", `${[[40, R, false], [90, A, true], [140, V, false], [190, M, true], [230, N, false]].map(([x, c, n], i) => nino(x, 156, { c, nina: n, s: i % 2 ? 0.75 : 1 })).join("")}${corazon(130, 40, 1.6)}${suelo(158)}`),
    },
    {
      html: `<h3>Una gran familia</h3><p>Todos los cristianos juntos forman <mark>la Iglesia</mark>.</p><p>Es como una <b>familia muy grande</b>: hay niños, papás, abuelos…</p><p>¡Y hay cristianos en todos los países del mundo!</p>`,
      svg: svg("Un círculo de personas dadas de la mano alrededor del mundo", `<circle cx="130" cy="92" r="30" fill="${W}" opacity=".5"/><path d="M114 80 q8 -8 16 0 q6 8 16 3 M110 100 q12 6 24 0" stroke="${V}" stroke-width="5" fill="none"/>${[0, 1, 2, 3, 4, 5].map((i) => { const a = i * Math.PI / 3 - Math.PI / 2; return `<circle cx="${(130 + Math.cos(a) * 52).toFixed(1)}" cy="${(92 + Math.sin(a) * 52).toFixed(1)}" r="10" fill="${[R, A, V, M, N, R][i]}"/>`; }).join("")}${rot(130, 172, "La Iglesia: una gran familia", { color: K })}`),
    },
    {
      html: `<h3>La iglesia es una casa</h3><p>Los cristianos se reúnen en una casa especial: <mark>la iglesia</mark>, con su campanario.</p><p>Allí rezan, cantan y escuchan la palabra de Dios.</p><p>Suele tener una campana.</p>`,
      svg: svg("Una iglesia con campanario y su puerta abierta", `${iglesia(130, 160)}${suelo(162)}${ic("campana", 200, 50, 0.9)}`),
    },
    {
      html: `<h3>Así entramos en la familia</h3><p>Para entrar en la familia de la Iglesia, recibimos el <mark>bautismo</mark>.</p><p>Se echa un poco de agua en la cabeza.</p><p>Muchas veces se hace de bebés, con una vela encendida.</p>`,
      svg: svg("Un bebé recibe agua en la cabeza y al lado hay una vela", `${ic("bebe", 110, 110, 2)}<path d="M120 50 q4 12 0 20 q-4 -8 0 -20z" fill="${W}"/><path d="M110 58 q3 8 0 14 q-3 -6 0 -14z" fill="${W}"/>${vela(200, 150)}${rot(130, 172, "El bautismo", { color: A })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>En una familia nos <mark>ayudamos</mark>. En la Iglesia también.</p><p>Los cristianos rezan juntos, celebran fiestas y ayudan a quien lo necesita: dan comida, ropa y compañía.</p>`,
      svg: lista("Tres cosas que hace la familia de la Iglesia", [["Rezamos y cantamos juntos", A], ["Celebramos fiestas", M], ["Ayudamos a quien lo necesita", R]], { titulo: "En la Iglesia…", marca: "n" }),
    },
    {
      html: `<h3>Juego: la cadena de amigos</h3><p>Haz muñecos de papel <mark>unidos de la mano</mark>.</p><p>Pinta a cada uno distinto: grandes, pequeños, de muchos colores.</p><p>¡Así es la familia de Jesús!</p><p>Cuélgala en clase.</p>`,
      svg: svg("Una cadena de muñecos de papel dados de la mano", `${[0, 1, 2, 3, 4].map((i) => { const x = 34 + i * 48, c = [R, A, V, M, N][i]; return `<circle cx="${x}" cy="70" r="12" fill="${c}"/><path d="M${x - 14} 86 h28 l-4 40 h-6 l-4 -20 l-4 20 h-6z" fill="${c}"/><path d="M${x - 24} 94 H${x + 24}" stroke="${c}" stroke-width="6"/>`; }).join("")}${rot(130, 164, "Todos unidos", { color: K })}`),
    },
  ],
  figura: {
    titulo: "La Iglesia, familia de Jesús",
    svg: mural("Los cristianos, la iglesia edificio, el bautismo y la ayuda", [["abrazo", "Cristianos", "amigos de Jesús", R], ["iglesia", "La iglesia", "casa donde se reúnen", A], ["agua", "Bautismo", "así entramos", W], ["corazon", "Ayudamos", "a quien lo necesita", V]], "La Iglesia es una familia"),
  },
  video: { ...vid("dZBrtAROpms", "La Iglesia, la familia de los hijos de Dios", "Tu Escuela Católica", 41741), busqueda: "la iglesia es una familia para niños" },
  ejemplos: [
    { enunciado: "¿Qué diferencia hay entre «la iglesia» y «la Iglesia»?", pasos: ["La iglesia es el edificio con campanario.", "La Iglesia son las personas, los cristianos.", "Las personas se reúnen en el edificio."], resultado: "una es la casa y la otra es la familia." },
    { enunciado: "¿Cómo entra un bebé en la familia de la Iglesia?", pasos: ["Sus padres lo llevan a la iglesia.", "Recibe el bautismo con un poco de agua."], resultado: "con el bautismo." },
  ],
  errores: [
    "Pensar que la Iglesia es solo el edificio: son sobre todo las personas.",
    "Creer que en la Iglesia solo hay mayores: hay niños, jóvenes y abuelos.",
    "Pensar que los cristianos solo rezan: también ayudan a los demás.",
  ],
  ejercicios: [
    { q: "Dibuja una iglesia con su campanario.", sol: "Nota para la familia: si hay una cerca, miradla juntos." },
    { q: "Haz una cadena de muñecos de papel.", sol: "Nota: doblad el papel en acordeón y recortad." },
    { q: "Pregunta en casa si te bautizaron y mira fotos.", sol: "Respuesta según la familia." },
    { q: "Di tres personas que formen la Iglesia.", sol: "Niños, padres, abuelos, el sacerdote…" },
    { q: "Ayuda a alguien hoy, como hace la familia de Jesús.", sol: "Por ejemplo: compartir un juguete." },
    { q: "Canta una canción de amigos de Jesús.", sol: "Nota: usad el vídeo del tema." },
  ],
  quiz: [
    { q: "Los amigos de Jesús hoy se llaman…", o: ["cristianos", "piratas", "vecinos"], a: 0, e: "Son los cristianos." },
    { q: "La Iglesia es…", o: ["una gran familia", "un parque", "un colegio"], a: 0, e: "La familia de los cristianos." },
    { q: "Los cristianos se reúnen en…", o: ["la iglesia", "el mar", "la luna"], a: 0, e: "La casa con campanario." },
    { q: "Para entrar en la familia de la Iglesia recibimos…", o: ["el bautismo", "un regalo", "una medalla"], a: 0, e: "Con agua." },
    { q: "En la Iglesia hay…", o: ["personas de todas las edades", "solo mayores", "solo niños"], a: 0, e: "Como una familia." },
    { q: "Los cristianos ayudan a…", o: ["quien lo necesita", "nadie", "solo a ellos"], a: 0, e: "Dan comida, ropa y compañía." },
  ],
  examen: [
    { q: "En el bautismo se usa…", o: ["agua", "arena", "pintura"], a: 0, e: "Un poco de agua en la cabeza." },
    { q: "La iglesia con campanario es…", o: ["un edificio", "una persona", "un animal"], a: 0, e: "Es la casa donde se reúnen." },
    { q: "¿Hay cristianos en otros países?", o: ["sí, en todo el mundo", "no", "solo en uno"], a: 0, e: "En todo el mundo." },
  ],
  feynman: ["Quiénes son los cristianos", "Por qué la Iglesia es una familia", "Qué es el bautismo"],
  mapa: mapa("LA IGLESIA", "var(--pri)", [
    ["Cristianos", "amigos de Jesús", R],
    ["Una familia", "de todo el mundo", V],
    ["La iglesia", "casa donde se reúnen", A],
    ["Bautismo", "así entramos", W],
  ], 220),
  tarjetas: [
    ["¿Quiénes son los cristianos?", "Los amigos de Jesús"],
    ["¿Qué es la Iglesia?", "La gran familia de los cristianos"],
    ["¿Dónde se reúnen?", "En la iglesia"],
    ["¿Cómo se entra en la familia?", "Con el bautismo"],
    ["¿Qué se usa en el bautismo?", "Agua"],
    ["¿Qué hacen juntos?", "Rezan, celebran y ayudan"],
  ],
  familias: [
    "Si sois creyentes, visitad juntos la parroquia en un momento tranquilo.",
    "Mirad fotos de su bautismo o del de algún familiar.",
    "Participad en una campaña de recogida de alimentos o juguetes.",
    "Hablad de las personas que forman vuestra comunidad.",
  ],
  profesores: PROF("Religión Católica (oferta voluntaria): la Iglesia como familia de los seguidores de Jesús, el templo como lugar de encuentro y el bautismo como entrada en la comunidad", ["Visita o fotos de la parroquia cercana.", "Cadena de muñecos unidos para el mural de clase.", "Recogida solidaria como gesto de la comunidad."]),
});
