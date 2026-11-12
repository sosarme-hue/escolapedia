// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG. Terminología de la Nueva gramática (RAE-ASALE).
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "Las categorías gramaticales",
  minutos: 45,
  objetivos: ["Reconocer las nueve categorías gramaticales", "Distinguir palabras variables e invariables", "Diferenciar determinantes y pronombres, adjetivos y adverbios"],
  claves: ["sustantivo", "adjetivo", "determinante", "pronombre", "verbo", "adverbio", "preposición", "conjunción", "interjección"],
  pregunta: {
    texto: "En «Bajo el puente, un músico bajo toca el bajo», la palabra «bajo» aparece tres veces. ¿Es siempre la misma clase de palabra?",
    respuesta: "No. La primera es una <b>preposición</b> (debajo de), la segunda un <b>adjetivo</b> (de poca estatura) y la tercera un <b>sustantivo</b> (el instrumento). La <mark>categoría gramatical</mark> de una palabra depende de su forma, de su significado y, sobre todo, de <mark>cómo funciona en la frase</mark>.",
  },
  bloques: [
    {
      html: `<h3>Las nueve categorías</h3><p>Las palabras se agrupan en <b>categorías gramaticales</b> o clases de palabras según su forma, su significado y su función. En español hay nueve: <b>sustantivo</b>, <b>adjetivo</b>, <b>determinante</b>, <b>pronombre</b>, <b>verbo</b>, <b>adverbio</b>, <b>preposición</b>, <b>conjunción</b> e <b>interjección</b>. Las cinco primeras son <mark>variables</mark> (cambian de forma: gato, gatas; canto, cantaba) y las cuatro últimas, <mark>invariables</mark> (siempre igual: ayer, con, pero, ¡ay!).</p>`,
      svg: L.filas("Categorías variables e invariables", [
        ["Variables", "sust., adj., det., pron., verbo", "var(--pen)"],
        ["Invariables", "adv., prep., conj., interj.", "var(--red)"],
      ], "¿cambia de forma la palabra?"),
    },
    {
      html: `<h3>El sustantivo y el adjetivo</h3><p>El <b>sustantivo</b> nombra personas, animales, cosas, lugares o ideas (Lucía, perro, mesa, Sevilla, libertad) y es el <mark>núcleo del grupo nominal</mark>. Tiene género y número. El <b>adjetivo</b> expresa cualidades o estados del sustantivo (alto, verde, cansado) y concuerda con él en género y número: «casa blanc<b>a</b>», «coches blanc<b>os</b>». Puede ir en grado positivo, comparativo (más alto que) o superlativo (altísimo).</p>`,
      svg: L.frase("Sustantivo y adjetivo concuerdan: las montañas nevadas", [
        ["las", "determinante", "var(--muted)"], ["montañas", "sustantivo", "var(--pen)"], ["nevadas", "adjetivo", "var(--leaf)"],
      ], "femenino plural en las tres palabras"),
    },
    {
      html: `<h3>Determinantes y pronombres</h3><p>El <b>determinante</b> acompaña al sustantivo y lo concreta: <i>el</i> libro, <i>este</i> libro, <i>mi</i> libro, <i>tres</i> libros, <i>algunos</i> libros. El <b>pronombre</b>, en cambio, <mark>sustituye</mark> al sustantivo y aparece solo: «<i>Este</i> es mío», «<i>Ella</i> lo trajo». Muchas palabras pueden ser una cosa u otra: si acompañan a un nombre, son determinantes; si van solas, pronombres.</p>`,
      svg: L.tabla("Determinante frente a pronombre", ["Palabra", "Determinante", "Pronombre"], [
        ["este", "este libro", "dame este"], ["mucho", "mucho ruido", "come mucho"], ["dos", "dos gatos", "vinieron dos"],
      ]),
    },
    {
      html: `<h3>El verbo</h3><p>El <b>verbo</b> expresa acciones, procesos o estados (correr, crecer, estar) y es el <mark>núcleo del predicado</mark>. Es la palabra con más variaciones: cambia según la <b>persona</b> y el <b>número</b> (canto, cantamos), el <b>tiempo</b> (canté, cantaré), el <b>modo</b> (indicativo, subjuntivo, imperativo) y el <b>aspecto</b> (acabado o no). Sus formas no personales son el infinitivo (cantar), el gerundio (cantando) y el participio (cantado).</p>`,
      svg: L.filas("Las variaciones del verbo", [
        ["Persona y número", "canto, cantas, cantamos", "var(--pen)"],
        ["Tiempo", "canté, canto, cantaré", "var(--leaf)"],
        ["Modo", "canto, cante, ¡canta!", "var(--red)"],
        ["No personales", "cantar, cantando, cantado", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Las palabras invariables</h3><p>El <b>adverbio</b> complementa a un verbo, a un adjetivo o a otro adverbio e indica lugar (aquí), tiempo (ayer), modo (bien, rápidamente), cantidad (muy), afirmación (sí), negación (no) o duda (quizá). La <b>preposición</b> une palabras y las subordina: a, ante, bajo, con, contra, de, desde, en, entre, hacia, hasta, para, por, según, sin, sobre, tras. La <b>conjunción</b> une palabras u oraciones (y, o, pero, porque, que). La <b>interjección</b> expresa emociones por sí sola (¡ay!, ¡olé!).</p>`,
      svg: L.tabla("Las cuatro categorías invariables", ["Categoría", "Ejemplo"], [
        ["Adverbio", "muy, ayer, aquí"], ["Preposición", "de, con, sin"], ["Conjunción", "y, pero, porque"], ["Interjección", "¡ay!, ¡bravo!"],
      ]),
    },
  ],
  figura: {
    titulo: "Cómo reconocer la categoría",
    svg: L.pasos("Pasos para reconocer la categoría de una palabra", [
      ["¿Varía?", ["si cambia de forma:", "variable"], "var(--pen)"],
      ["¿Qué significa?", ["nombra, califica,", "señala, actúa…"], "var(--leaf)"],
      ["¿Cómo funciona?", ["acompaña, sustituye,", "une, complementa"], "var(--red)"],
    ]),
  },
  video: { id: "8kOuOenY5yQ", titulo: "Todo sobre categorías gramaticales con ejercicios", canal: "La profe Mónica", vistas: 838966, megusta: 0, busqueda: "categorías gramaticales" },
  quiz: [
    { q: "¿Cuál es una categoría invariable?", o: ["El adverbio", "El adjetivo", "El sustantivo"], a: 0, e: "No tiene género ni número." },
    { q: "En «Mi hermano es mayor», «mi» es…", o: ["determinante posesivo", "pronombre personal", "adjetivo"], a: 0, e: "Acompaña al sustantivo «hermano»." },
    { q: "En «Ese es el mío», «ese» es…", o: ["pronombre", "determinante", "adverbio"], a: 0, e: "Va solo, sustituye a un sustantivo." },
    { q: "En «Habla muy despacio», «despacio» es…", o: ["adverbio de modo", "adjetivo", "preposición"], a: 0, e: "Complementa al verbo e indica cómo." },
    { q: "«¡Uf!» es…", o: ["una interjección", "una conjunción", "un adverbio"], a: 0, e: "Expresa una emoción por sí sola." },
  ],
  examen: [
    { q: "El núcleo del grupo nominal es…", o: ["el sustantivo", "el adjetivo", "el adverbio"], a: 0, e: "O un pronombre que lo sustituye." },
    { q: "«Cantando» es…", o: ["un gerundio", "un participio", "un infinitivo"], a: 0, e: "Forma no personal acabada en -ando o -iendo." },
    { q: "En «Vino con su perro», «con» es…", o: ["preposición", "conjunción", "adverbio"], a: 0, e: "Une y subordina «su perro» al verbo." },
  ],
  feynman: ["Las nueve categorías gramaticales y cuáles son variables", "La diferencia entre determinante y pronombre", "Las variaciones del verbo", "Cómo distinguir un adjetivo de un adverbio"],
  mapa: mapa("CATEGORÍAS", "var(--eso)", [
    ["Nominales", "sustantivo · adjetivo", "var(--pen)"],
    ["Señalan", "determinante · pronombre", "var(--leaf)"],
    ["Acción", "verbo · adverbio", "var(--red)"],
    ["Enlaces", "preposición · conjunción", "var(--inf)"],
  ]),
  tarjetas: [
    ["Sustantivo", "Palabra que nombra seres, objetos, lugares o ideas; núcleo del grupo nominal."],
    ["Determinante", "Palabra que acompaña al sustantivo y lo concreta: el, este, mi, tres, algún."],
    ["Pronombre", "Palabra que sustituye al sustantivo: yo, ella, esto, alguien."],
    ["Adverbio", "Palabra invariable que complementa a un verbo, un adjetivo u otro adverbio."],
    ["Preposiciones", "a, ante, bajo, con, contra, de, desde, en, entre, hacia, hasta, para, por, según, sin, sobre, tras."],
  ],
  familias: ["Elegid una frase de un cartel o un titular y clasificad juntos cada palabra.", "Recitad la lista de preposiciones como una canción mientras ponéis la mesa.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: clases de palabras y sus relaciones; criterios morfológicos, semánticos y sintácticos (RD 217/2022, Lengua Castellana y Literatura, 3º ESO; Nueva gramática básica).",
    ideas: ["Bingo de categorías con fragmentos de canciones.", "Clasificar las palabras de un microrrelato en una tabla de nueve columnas.", "Debatir casos ambiguos: «bajo», «que», «como»."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE y ASALE, Nueva gramática básica de la lengua española", url: "https://www.rae.es/gram%C3%A1tica" },
    { t: "Diccionario panhispánico de dudas (RAE)", url: "https://www.rae.es/dpd/" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Conocer las clases de sustantivos, determinantes y pronombres", "Formar los grados del adjetivo y reconocer las conjugaciones del verbo"],
  bloques: [
    { tras: "El sustantivo y el adjetivo", html: `<h3>Clases de sustantivos</h3><p>Los sustantivos se clasifican de varias maneras. Los <b>comunes</b> nombran cualquier ser de una clase (ciudad, río) y los <b>propios</b> identifican a uno concreto y van con mayúscula (Toledo, Ebro). Los <b>concretos</b> nombran lo que percibimos con los sentidos (mesa, ruido) y los <b>abstractos</b>, ideas o sentimientos (alegría, justicia). Los <b>individuales</b> nombran un solo ser en singular (árbol, oveja) y los <b>colectivos</b>, un conjunto aunque estén en singular (bosque, rebaño). Por último, los <b>contables</b> se pueden contar (dos manzanas) y los <b>no contables</b> se miden (agua, arena).</p><p>Ojo con el género: en algunos sustantivos cambia el significado (el cometa / la cometa; el orden / la orden).</p>` },
    { tras: "El sustantivo y el adjetivo", html: `<h3>Los grados del adjetivo</h3><p>El adjetivo puede expresar la cualidad con distinta intensidad. En grado <b>positivo</b> la expresa sin más: «Es alto». En grado <b>comparativo</b> la compara con otro ser, y puede ser de superioridad (<i>más</i> alto <i>que</i>), de igualdad (<i>tan</i> alto <i>como</i>) o de inferioridad (<i>menos</i> alto <i>que</i>). En grado <b>superlativo</b> la expresa en su máxima intensidad: absoluto (altísimo, muy alto) o relativo (el más alto <i>de</i> la clase).</p><p>Algunos adjetivos tienen formas cultas heredadas del latín: <mark>bueno → mejor → óptimo</mark>, malo → peor → pésimo, grande → mayor → máximo, pequeño → menor → mínimo. Por eso no se dice *más mejor ni *muy óptimo.</p>` },
    { tras: "Determinantes y pronombres", html: `<h3>Clases de determinantes y pronombres</h3>${L.tb(["Clase", "Ejemplos", "Qué indica"], [["Artículos", "el, la, los, las, un, una", "conocido o no"], ["Demostrativos", "este, ese, aquel", "distancia"], ["Posesivos", "mi, tu, su, nuestro", "pertenencia"], ["Numerales", "dos, tercero", "cantidad u orden"], ["Indefinidos", "algún, varios, ningún", "cantidad imprecisa"], ["Interrogativos y exclamativos", "qué, cuántos", "pregunta o énfasis"]])}<p>Los <b>pronombres personales</b> solo funcionan como pronombres: yo, tú, él, nosotros, me, te, se, lo, la, le… Los artículos, en cambio, solo funcionan como determinantes.</p>` },
    { tras: "El verbo", html: `<h3>Las tres conjugaciones y los tiempos compuestos</h3><p>Según su infinitivo, los verbos pertenecen a la <b>primera conjugación</b> (-ar: cantar), la <b>segunda</b> (-er: comer) o la <b>tercera</b> (-ir: vivir). En cada forma verbal se distinguen la <b>raíz</b> (cant-) y las <b>desinencias</b>, que aportan persona, número, tiempo y modo.</p><p>Los <b>tiempos simples</b> se forman con una sola palabra (canto, cantaba, cantaré) y los <b>compuestos</b> con el auxiliar <i>haber</i> más el participio (he cantado, había cantado, habré cantado). Los verbos <b>regulares</b> siguen el modelo de su conjugación; los <b>irregulares</b> cambian la raíz (ten-er → tengo, tuve) o las desinencias (and-ar → anduve). Cuando dudes, consulta un conjugador.</p>` },
    { tras: "Las palabras invariables", html: `<h3>Casos que confunden</h3><p>Hay palabras que cambian de categoría según su función. Algunas pistas:</p><ul><li><b>Adjetivo o adverbio</b>: «Habla <i>claro</i>» (adverbio, complementa al verbo y no varía) frente a «agua <i>clara</i>» (adjetivo, concuerda con el nombre).</li><li><b>Medio</b>: «<i>medio</i> kilo» (determinante) frente a «está <i>medio</i> dormida» (adverbio: no se dice *media dormida).</li><li><b>Que</b>: puede ser pronombre relativo («el libro <i>que</i> leí»), conjunción («dice <i>que</i> vendrá») o interrogativo con tilde («¿<i>Qué</i> quieres?»).</li><li><b>Sustantivación</b>: cualquier palabra precedida de artículo funciona como sustantivo: «<i>el</i> sí de las niñas», «<i>el</i> comer».</li></ul>` },
  ],
  videos: [
    ["El sustantivo y el adjetivo", L.vid("ORD_94zHNOg", "Diferencia entre sustantivo, adjetivo y verbo: trucos", "Clases Particulares en Ávila", 2123379)],
    ["Casos que confunden", L.vid("P5TQ_-jhxfs", "Cómo identificar las categorías gramaticales", "Clases Particulares en Ávila", 753689)],
  ],
  ejemplos: [
    ["Clasifica las palabras de «Aquellos niños jugaban alegremente en el parque».", ["Aquellos: determinante demostrativo. Niños: sustantivo común.", "Jugaban: verbo (3.ª persona del plural, pretérito imperfecto de indicativo).", "Alegremente: adverbio de modo. En: preposición.", "El: determinante artículo. Parque: sustantivo común."], "det. + sust. + verbo + adv. + prep. + det. + sust."],
    ["¿Determinante o pronombre? «Algunos alumnos llegaron tarde, pero otros no.»", ["«Algunos» acompaña a «alumnos»: determinante indefinido.", "«Otros» aparece solo, sustituye a «alumnos»: pronombre indefinido.", "«Pero» une dos oraciones: conjunción adversativa."], "algunos: determinante; otros: pronombre."],
    ["Escribe los grados de «rápido».", ["Positivo: rápido.", "Comparativo: más rápido que / tan rápido como / menos rápido que.", "Superlativo absoluto: rapidísimo o muy rápido. Relativo: el más rápido de."], "rápido, más rápido que, rapidísimo, el más rápido de."],
  ],
  errores: [
    "Confundir determinante y pronombre: si va con un sustantivo, es determinante.",
    "Llamar adjetivo a un adverbio porque termina en -o: en «corre rápido», rápido no concuerda y es adverbio.",
    "Decir *más mejor, *muy óptimo o *más peor.",
    "Olvidar que «medio» como adverbio no varía: *Está media dormida.",
    "Pensar que todas las palabras con mayúscula son sustantivos propios (también las que inician frase).",
  ],
  ejercicios: [
    ["Clasifica: «libertad», «rebaño», «Teide», «arena».", "Libertad: común, abstracto. Rebaño: común, colectivo. Teide: propio. Arena: común, concreto, no contable."],
    ["Escribe el superlativo absoluto de «amable», «fuerte» y «antiguo».", "amabilísimo, fortísimo (o fuertísimo), antiquísimo."],
    ["Subraya los determinantes y di su clase: «Mis dos primos viven en aquella casa».", "Mis: posesivo. Dos: numeral cardinal. Aquella: demostrativo."],
    ["¿Determinante o pronombre? «Quiero ese» / «Quiero ese pastel».", "En la primera, pronombre (va solo); en la segunda, determinante (acompaña a pastel)."],
    ["Analiza la forma verbal «habíamos salido».", "1.ª persona del plural, pretérito pluscuamperfecto de indicativo del verbo salir (3.ª conjugación), tiempo compuesto."],
    ["Escribe un adverbio de cada tipo: lugar, tiempo, modo, cantidad y duda.", "Por ejemplo: allí, mañana, bien, bastante, quizá."],
    ["Escribe tres preposiciones que indiquen lugar.", "Por ejemplo: en, sobre, bajo, entre, tras."],
    ["¿Qué categoría es «claro» en «Habla claro» y en «Tiene los ojos claros»?", "En la primera es adverbio (complementa al verbo, invariable); en la segunda, adjetivo (concuerda con ojos)."],
    ["Corrige: «Este examen es más mejor que el otro».", "Este examen es mejor que el otro."],
    ["Clasifica todas las palabras de «¡Ay! Mi abuela no oye bien».", "¡Ay!: interjección. Mi: determinante posesivo. Abuela: sustantivo. No: adverbio de negación. Oye: verbo. Bien: adverbio de modo."],
  ],
  quiz: [
    ["«Rebaño» es un sustantivo…", ["colectivo", "abstracto", "propio"], 0, "Nombra un conjunto en singular."],
    ["El comparativo de «bueno» es…", ["mejor", "más bueno", "óptimo"], 0, "Óptimo es el superlativo."],
    ["«He comido» es un tiempo…", ["compuesto", "simple", "no personal"], 0, "Haber + participio."],
    ["En «Está medio dormida», «medio» es…", ["adverbio", "determinante", "adjetivo"], 0, "No concuerda."],
    ["«Tener» pertenece a la…", ["segunda conjugación", "primera conjugación", "tercera conjugación"], 0, "Infinitivo en -er."],
  ],
  tarjetas: [
    ["Sustantivo colectivo", "Nombra un conjunto aunque esté en singular: rebaño, bosque, orquesta."],
    ["Superlativo absoluto", "Máxima intensidad sin comparar: altísimo, muy alto."],
    ["Tiempo compuesto", "Auxiliar haber + participio: he cantado, había comido."],
  ],
});
