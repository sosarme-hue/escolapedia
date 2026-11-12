// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Formación de palabras y léxico",
  minutos: 35,
  objetivos: ["Separar una palabra en lexema y morfemas", "Distinguir derivación, composición y parasíntesis", "Conocer siglas, acrónimos, préstamos y otras formas de crear léxico"],
  claves: ["lexema", "morfema", "prefijo", "sufijo", "derivación", "composición", "parasíntesis", "acrónimo", "préstamo"],
  pregunta: {
    texto: "«Ensuciar», «sacacorchos», «ovni» e «hiperconectado». Ninguna existía hace mil años. ¿De dónde salen las palabras nuevas?",
    respuesta: "Se fabrican con piezas que ya existen: añadiendo <mark>prefijos y sufijos</mark> (hiper-conect-ado), uniendo <mark>dos palabras</mark> (saca + corchos), con prefijo y sufijo a la vez (en-suci-ar) o con <mark>iniciales</mark> (OVNI). La lengua es un juego de construcción.",
  },
  bloques: [
    {
      html: `<h3>Las piezas de la palabra</h3><p>El <b>lexema</b> (o raíz) lleva el significado principal: <i>pan</i> en «panadero». Los <b>morfemas</b> se añaden: los <mark>flexivos</mark> marcan género, número, persona o tiempo (pan-<b>es</b>); los <mark>derivativos</mark> crean palabras nuevas: prefijos delante (<b>re</b>-hacer) y sufijos detrás (pan-<b>adero</b>).</p>`,
      svg: L.frase("Panaderas separada en lexema, sufijo y morfemas de género y número", [
        ["pan", "lexema", "var(--pen)"], ["ader", "sufijo", "var(--leaf)"], ["a", "género", "var(--red)"], ["s", "número", "var(--inf)"],
      ], "pan-ader-a-s"),
    },
    {
      html: `<h3>Derivación</h3><p>Se añade un <b>prefijo</b> o un <b>sufijo</b> a un lexema: <i>des</i>-hacer, <i>in</i>-útil, flor-<i>ista</i>, rápida-<i>mente</i>. Los sufijos pueden cambiar la categoría (amable → amabil<i>idad</i>) o dar un matiz: diminutivos (-ito), aumentativos (-ón) y despectivos (-ucho).</p>`,
      svg: L.filas("Prefijos y sufijos con su significado", [
        ["des-, in-", "negación: deshacer", "var(--red)"], ["re-", "repetición: releer", "var(--pen)"],
        ["-ero, -ista", "oficio: florista", "var(--leaf)"], ["-ito, -ón", "tamaño: casita", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Composición</h3><p>Se unen <mark>dos o más palabras</mark> o lexemas: <b>sacacorchos</b> (saca + corchos), <b>agridulce</b>, <b>pelirrojo</b>. También hay compuestos con guion (<i>franco-alemán</i>) y compuestos sintagmáticos que se escriben separados pero funcionan como una sola palabra (<i>ojo de buey</i>, <i>fin de semana</i>).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Composición: saca más corchos da sacacorchos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <rect x="16" y="30" width="80" height="40" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="56" y="56" font-size="16" fill="var(--pen)">saca</text>
          <text x="118" y="58" font-size="22" fill="var(--muted)">+</text>
          <rect x="140" y="30" width="104" height="40" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="192" y="56" font-size="16" fill="var(--leaf)">corchos</text>
          <path d="M130 80 V 104" stroke="var(--muted)" stroke-width="3"/><path d="M124 98 l 6 8 l 6 -8" fill="none" stroke="var(--muted)" stroke-width="3"/>
          <rect x="50" y="114" width="160" height="44" rx="12" fill="var(--pen)"/><text x="130" y="143" font-size="18" fill="#fff" ${D}>sacacorchos</text>
        </g></svg>`,
    },
    {
      html: `<h3>Parasíntesis</h3><p>Una palabra es <b>parasintética</b> cuando se forma <mark>a la vez</mark> con prefijo y sufijo, o con composición y sufijo: <i>en-suci-ar</i>, <i>a-tard-ecer</i>, <i>quince-añ-ero</i>. Prueba: si quitas solo el prefijo o solo el sufijo, lo que queda no existe: no hay «*tardecer» ni «*atarde».</p>`,
      svg: L.frase("Atardecer: prefijo a, lexema tard y sufijo ecer al mismo tiempo", [
        ["a", "prefijo", "var(--red)"], ["tard", "lexema", "var(--pen)"], ["ecer", "sufijo", "var(--leaf)"],
      ], "*atarde ✗ · *tardecer ✗ → parasintética"),
    },
    {
      html: `<h3>Otras formas de crear léxico</h3><p><b>Siglas</b>: iniciales que se deletrean (ONG, DNI). <b>Acrónimos</b>: se leen como una palabra (ovni, láser, sida). <b>Acortamientos</b>: profe, bici, cole. <b>Préstamos</b> de otras lenguas: fútbol (inglés), almohada (árabe), chocolate (náhuatl). <b>Neologismos</b>: palabras recién creadas como «tuitear».</p>`,
      svg: L.tabla("Siglas, acrónimos, acortamientos y préstamos", ["Recurso", "Ejemplo"], [
        ["Sigla", "DNI · ONU"], ["Acrónimo", "ovni · láser"], ["Acortamiento", "bici · profe"], ["Préstamo", "fútbol · zapping"],
      ]),
    },
  ],
  figura: {
    titulo: "Cuatro maneras de fabricar palabras",
    svg: L.columnas("Derivación, composición, parasíntesis y acronimia con ejemplos", [
      ["lexema + afijo", "DERIVACIÓN", ["des + hacer", "flor + ista"], "var(--pen)"],
      ["palabra + palabra", "COMPOSICIÓN", ["saca + corchos", "pel(o) + i + rojo"], "var(--leaf)"],
      ["prefijo y sufijo a la vez", "PARASÍNTESIS", ["en + suci + ar", "a + tard + ecer"], "var(--red)"],
      ["iniciales", "SIGLAS", ["ONG · ovni", "láser"], "var(--inf)"],
    ]),
  },
  video: { id: "1EWHRCHGmUU", titulo: "Procedimientos de formación de palabras: derivación, composición y parasíntesis", canal: "Lengua de taco", vistas: 140607, megusta: 2496, busqueda: "formación de palabras derivación composición parasíntesis" },
  quiz: [
    { q: "En «zapatería», el lexema es…", o: ["zapat-", "-ería", "zapatería"], a: 0, e: "«Zapat-» aporta el significado; «-ería» es sufijo (lugar)." },
    { q: "«Paraguas» es una palabra…", o: ["derivada", "compuesta", "parasintética"], a: 1, e: "Une dos palabras: para + aguas." },
    { q: "«Enrojecer» es…", o: ["derivada por sufijo", "compuesta", "parasintética"], a: 2, e: "Se forma con en- y -ecer a la vez: no existen «*enrojo» ni «*rojecer»." },
    { q: "«Láser» es…", o: ["un acrónimo", "un acortamiento", "una palabra compuesta"], a: 0, e: "Viene de las iniciales inglesas de una frase y se lee como una palabra." },
    { q: "En «niñas», «-s» es un morfema…", o: ["derivativo", "flexivo de número", "prefijo"], a: 1, e: "Marca el plural sin crear una palabra nueva." },
  ],
  examen: [
    { q: "¿Qué palabra es un préstamo del inglés?", o: ["almohada", "fútbol", "tomate"], a: 1, e: "«Fútbol» viene de «football»; «almohada» es del árabe y «tomate» del náhuatl." },
    { q: "El prefijo «re-» en «releer» significa…", o: ["repetición", "negación", "tamaño"], a: 0, e: "Releer es volver a leer." },
    { q: "«Profe» es un caso de…", o: ["acortamiento", "sigla", "composición"], a: 0, e: "Se acorta «profesor»." },
  ],
  feynman: ["La diferencia entre lexema y morfema", "Qué es derivar y qué es componer", "Cómo saber si una palabra es parasintética", "La diferencia entre sigla y acrónimo"],
  mapa: mapa("FORMAR PALABRAS", "var(--eso)", [
    ["Derivación", "prefijos y sufijos", "var(--pen)"],
    ["Composición", "palabra + palabra", "var(--leaf)"],
    ["Parasíntesis", "prefijo + sufijo a la vez", "var(--red)"],
    ["Otros", "siglas · préstamos", "var(--inf)"],
  ]),
  tarjetas: [
    ["¿Qué es el lexema?", "La parte de la palabra que lleva el significado principal."],
    ["Morfemas derivativos", "Prefijos y sufijos que forman palabras nuevas."],
    ["Palabra parasintética", "La formada a la vez con prefijo y sufijo (o composición y sufijo): entristecer."],
    ["Sigla y acrónimo", "La sigla se deletrea (DNI); el acrónimo se lee como una palabra (ovni)."],
    ["Préstamo", "Palabra tomada de otra lengua: fútbol, almohada, chocolate."],
  ],
  familias: ["Elegid una palabra (por ejemplo, «mar») y competid a ver quién forma más palabras de su familia.", "Buscad en el envase de un producto siglas y préstamos del inglés.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: procedimientos de formación de palabras y relaciones léxicas (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Concurso de familias léxicas con diccionario.", "Inventar neologismos para objetos nuevos y explicar el procedimiento usado.", "Rastrear préstamos del árabe, el inglés y las lenguas americanas en el DLE."],
  },
  fuentes: [
    L.BOE,
    { t: "Diccionario de la lengua española (RAE)", url: "https://dle.rae.es/" },
    { t: "Morfología lingüística, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Morfolog%C3%ADa_ling%C3%BC%C3%ADstica" },
  ],
  revisado: "2026-11-12",
};
