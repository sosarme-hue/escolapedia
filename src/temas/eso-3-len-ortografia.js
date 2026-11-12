// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG. Normas de la Ortografía de la lengua española (RAE-ASALE, 2010).
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "Ortografía: acentuación y puntuación",
  minutos: 50,
  objetivos: ["Aplicar las reglas generales de acentuación", "Acentuar diptongos, hiatos y monosílabos (tilde diacrítica)", "Usar correctamente el punto, la coma, el punto y coma y los dos puntos"],
  claves: ["sílaba tónica", "aguda", "llana", "esdrújula", "diptongo", "hiato", "tilde diacrítica", "coma", "punto y coma", "dos puntos"],
  pregunta: {
    texto: "¿Qué diferencia hay entre «Vamos a comer, niños» y «Vamos a comer niños»?",
    respuesta: "Una <b>coma</b>. En la primera, «niños» es un vocativo: se llama a los niños para comer. En la segunda… los niños son la comida. La ortografía no es un adorno: las tildes y los signos de puntuación <mark>cambian el significado</mark> de lo que escribimos.",
  },
  bloques: [
    {
      html: `<h3>La sílaba tónica</h3><p>En cada palabra hay una sílaba que se pronuncia con más fuerza: la <b>sílaba tónica</b>. Según dónde esté, las palabras son <mark>agudas</mark> (la última: ca-<b>fé</b>, re-<b>loj</b>), <mark>llanas</mark> (la penúltima: <b>ár</b>-bol, <b>me</b>-sa), <mark>esdrújulas</mark> (la antepenúltima: <b>mú</b>-si-ca) o <mark>sobresdrújulas</mark> (antes de la antepenúltima: <b>dí</b>-ga-me-lo). La tilde es la rayita que, a veces, marca esa sílaba.</p>`,
      svg: L.tabla("Clases de palabras según la sílaba tónica", ["Clase", "Tónica", "Ejemplo"], [
        ["Aguda", "última", "café"], ["Llana", "penúltima", "árbol"], ["Esdrújula", "antepenúltima", "música"], ["Sobresdrújula", "anterior", "dígamelo"],
      ]),
    },
    {
      html: `<h3>Las reglas generales</h3><p>Las <b>agudas</b> llevan tilde si terminan en <b>vocal, -n o -s</b> (sofá, camión, compás), pero no si terminan en otra consonante (reloj, papel) o en -s precedida de consonante (robots). Las <b>llanas</b> llevan tilde si <b>no</b> terminan en vocal, -n o -s (árbol, lápiz, cómic). Las <b>esdrújulas y sobresdrújulas</b> llevan tilde <mark>siempre</mark> (pájaro, rápidamente).</p>`,
      svg: L.filas("Reglas generales de acentuación", [
        ["Agudas", "tilde si acaban en vocal, n, s", "var(--pen)"],
        ["Llanas", "tilde si NO acaban en vocal, n, s", "var(--leaf)"],
        ["Esdrújulas", "tilde siempre", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Diptongos e hiatos</h3><p>Un <b>diptongo</b> es la unión de dos vocales en la misma sílaba: una abierta (a, e, o) y una cerrada átona (i, u), o dos cerradas: <i>cie-lo</i>, <i>ciu-dad</i>. Sigue las reglas generales: <i>camión</i>, <i>después</i>. Un <b>hiato</b> son dos vocales en sílabas distintas. Si es de vocal cerrada tónica + abierta (o al revés), la cerrada <mark>lleva tilde siempre</mark>, aunque no lo pida la regla general: <i>ma-íz</i>, <i>ba-úl</i>, <i>dí-a</i>, <i>re-ír</i>.</p>`,
      svg: L.filas("Diptongo e hiato", [
        ["Diptongo", "cie-lo, can-ción (reglas generales)", "var(--pen)"],
        ["Hiato a + e", "ca-er, le-ón (reglas generales)", "var(--leaf)"],
        ["Hiato í/ú tónica", "dí-a, ma-íz, ba-úl (tilde siempre)", "var(--red)"],
      ]),
    },
    {
      html: `<h3>La tilde diacrítica</h3><p>Los monosílabos <b>no llevan tilde</b> (fue, dio, vio, pie, guion), salvo cuando sirve para distinguir dos palabras que se escriben igual: es la <b>tilde diacrítica</b>. Las parejas más usadas son: <i>tú</i> (pronombre) / <i>tu</i> (posesivo), <i>él</i> / <i>el</i>, <i>mí</i> / <i>mi</i>, <i>sí</i> (afirmación) / <i>si</i> (condición), <i>sé</i> (verbo) / <i>se</i>, <i>dé</i> (verbo) / <i>de</i>, <i>té</i> (bebida) / <i>te</i>, <i>más</i> (cantidad) / <i>mas</i> (pero).</p>`,
      svg: L.tabla("Parejas con tilde diacrítica", ["Con tilde", "Sin tilde"], [
        ["tú (pronombre)", "tu (posesivo)"], ["él (pronombre)", "el (artículo)"], ["sí (afirmación)", "si (condición)"], ["más (cantidad)", "mas (pero)"],
      ]),
    },
    {
      html: `<h3>Los signos de puntuación principales</h3><p>El <b>punto</b> marca el final de un enunciado (punto y seguido), de un párrafo (punto y aparte) o del texto (punto final). La <b>coma</b> indica una pausa breve dentro del enunciado. El <b>punto y coma</b> separa oraciones relacionadas o elementos de una enumeración que ya llevan comas. Los <b>dos puntos</b> anuncian lo que viene: una enumeración, una cita, una explicación o la conclusión.</p>`,
      svg: L.filas("Usos de los signos de puntuación", [
        ["Punto", "fin de enunciado o párrafo", "var(--pen)"],
        ["Coma", "pausa breve, enumeraciones", "var(--leaf)"],
        ["Punto y coma", "oraciones relacionadas", "var(--red)"],
        ["Dos puntos", "anuncian lo que sigue", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "¿Lleva tilde? Tres preguntas",
    svg: L.pasos("Pasos para saber si una palabra lleva tilde", [
      ["¿Sílaba tónica?", ["sepárala y busca", "la que suena fuerte"], "var(--pen)"],
      ["¿Qué clase es?", ["aguda, llana,", "esdrújula"], "var(--leaf)"],
      ["¿Hay hiato?", ["í o ú tónica junto", "a a, e, o: tilde"], "var(--red)"],
      ["¿Diacrítica?", ["tú, él, mí, sí, sé,", "dé, té, más"], "var(--inf)"],
    ]),
  },
  video: { id: "f3Pv0vVGKDk", titulo: "El mejor método para aprender a poner tildes", canal: "La profe Mónica", vistas: 1598959, megusta: 0, busqueda: "reglas de acentuación" },
  quiz: [
    { q: "«Camion» debería escribirse…", o: ["camión", "cámion", "camion"], a: 0, e: "Aguda acabada en -n." },
    { q: "«Arbol» debería escribirse…", o: ["árbol", "arból", "arbol"], a: 0, e: "Llana acabada en -l." },
    { q: "¿Qué palabra está bien escrita?", o: ["examen", "exámen", "éxamen"], a: 0, e: "Llana acabada en -n: sin tilde." },
    { q: "«Maiz» debería escribirse…", o: ["maíz", "maiz", "máiz"], a: 0, e: "Hiato con í tónica." },
    { q: "En «¿Tu vienes con tu hermano?», el primer «tu» debería llevar tilde porque…", o: ["es pronombre", "es posesivo", "es monosílabo"], a: 0, e: "Tú vienes con tu hermano." },
  ],
  examen: [
    { q: "¿Cuál NO lleva tilde?", o: ["fue", "sofá", "lápiz"], a: 0, e: "Los monosílabos no llevan tilde salvo la diacrítica." },
    { q: "«Joven» en plural es…", o: ["jóvenes", "jovenes", "jovénes"], a: 0, e: "Pasa a esdrújula." },
    { q: "Para separar elementos de una enumeración que ya llevan comas se usa…", o: ["el punto y coma", "los dos puntos", "el punto"], a: 0, e: "Ejemplo: Juan, de Lugo; Ana, de Vigo; …" },
  ],
  feynman: ["Las reglas generales de acentuación con un ejemplo de cada una", "Por qué «día» lleva tilde si es llana acabada en vocal", "Qué es la tilde diacrítica", "Para qué sirven la coma, el punto y coma y los dos puntos"],
  mapa: mapa("ORTOGRAFÍA", "var(--eso)", [
    ["Reglas generales", "agudas · llanas · esdrújulas", "var(--pen)"],
    ["Hiatos", "í, ú tónicas con tilde", "var(--red)"],
    ["Diacrítica", "tú/tu · él/el · sí/si", "var(--leaf)"],
    ["Puntuación", "punto · coma · ; · :", "var(--inf)"],
  ]),
  tarjetas: [
    ["Agudas con tilde", "Las que terminan en vocal, -n o -s: sofá, camión, compás."],
    ["Llanas con tilde", "Las que NO terminan en vocal, -n o -s: árbol, lápiz, cómic."],
    ["Esdrújulas", "Llevan tilde siempre: pájaro, música."],
    ["Hiato con tilde", "Vocal cerrada tónica + abierta: día, maíz, baúl, reír."],
    ["Tilde diacrítica", "Distingue palabras iguales: tú/tu, él/el, sí/si, sé/se, más/mas."],
  ],
  familias: ["Cuando escribáis la lista de la compra, pedidle que revise las tildes.", "Buscad carteles con faltas de ortografía por la calle y corregidlos juntos.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: normas de acentuación y puntuación; corrección ortográfica en la producción escrita (RD 217/2022, Lengua Castellana y Literatura, 3º ESO; Ortografía de la lengua española, 2010).",
    ideas: ["Dictados con trampa: frases que cambian de sentido según la coma.", "Corregir subtítulos o carteles reales.", "Juego de la tilde: tarjetas con palabras para clasificar en agudas, llanas y esdrújulas."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE y ASALE, Ortografía de la lengua española (2010)", url: "https://www.rae.es/obras-academicas/ortograf%C3%ADa/ortograf%C3%ADa-2010" },
    { t: "Diccionario panhispánico de dudas: tilde", url: "https://www.rae.es/dpd/tilde" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Acentuar interrogativos, exclamativos y palabras compuestas", "Evitar los errores más frecuentes con la coma"],
  bloques: [
    { tras: "Las reglas generales", html: `<h3>Casos especiales de las reglas generales</h3><p>Hay algunas situaciones que generan dudas. Las palabras <b>agudas terminadas en -s precedida de otra consonante</b> no llevan tilde: <i>robots</i>, <i>tictacs</i>. Las <b>llanas terminadas en -s precedida de consonante</b> sí la llevan: <i>bíceps</i>, <i>cómics</i>, <i>fórceps</i>. Las <b>mayúsculas</b> también se acentúan: <i>ÁFRICA</i>, <i>Álvaro</i>.</p><p>Al formar el <b>plural</b>, una palabra puede ganar o perder la tilde porque cambia el número de sílabas: <i>joven → jóvenes</i>, <i>examen → exámenes</i>, <i>canción → canciones</i>, <i>autobús → autobuses</i>. Y los adverbios en <b>-mente</b> conservan la tilde del adjetivo del que vienen: <i>fácil → fácilmente</i>, <i>rápida → rápidamente</i>, pero <i>lenta → lentamente</i>.</p>` },
    { tras: "La tilde diacrítica", html: `<h3>Interrogativos y exclamativos</h3><p>Las palabras <i>qué, quién, cuál, cuánto, cómo, cuándo, dónde</i> y <i>adónde</i> llevan tilde cuando son <b>interrogativas o exclamativas</b>, tanto en preguntas directas («¿Dónde vives?») como indirectas («No sé <b>dónde</b> vive», «Me preguntó <b>cuánto</b> costaba»). Cuando no preguntan ni exclaman, van sin tilde: «La casa <i>donde</i> vivo», «Llámame <i>cuando</i> llegues», «Dice <i>que</i> vendrá».</p><p>Truco: si puedes poner la palabra entre signos de interrogación sin cambiar el sentido («No sé ¿dónde vive?»), lleva tilde. Ojo también con <b>porque</b> (causa, sin tilde: «Vengo porque quiero»), <b>por qué</b> (pregunta: «¿Por qué vienes?»), <b>porqué</b> (sustantivo: «el porqué de todo») y <b>por que</b> (preposición + relativo: «el motivo por que lo hizo»).</p>` },
    { tras: "La tilde diacrítica", html: `<h3>Palabras que ya no llevan tilde</h3><p>La <i>Ortografía</i> de 2010 simplificó algunas normas que todavía se ven escritas a la antigua. Hoy <b>no llevan tilde</b>:</p><ul><li>Los monosílabos con diptongo o triptongo ortográfico: <i>guion, truhan, fie, lio, rio</i> (del verbo reír), <i>fui, fue, dio, vio</i>.</li><li>El adverbio <b>solo</b>, incluso cuando significa «solamente», y los demostrativos <b>este, ese, aquel</b> (y sus femeninos y plurales), aunque funcionen como pronombres. Solo se permite la tilde si hay riesgo real de ambigüedad.</li><li>La conjunción <b>o</b> entre cifras: <i>3 o 4</i>.</li></ul><p>En cambio, la tilde de <i>aún</i> (= todavía) frente a <i>aun</i> (= incluso) sí se mantiene: «Aún no ha llegado» / «Aun así, iré».</p>` },
    { tras: "Los signos de puntuación principales", html: `<h3>Usos de la coma</h3><p>La coma es el signo que más dudas genera. Se usa:</p><ul><li>Para separar elementos de una <b>enumeración</b>, salvo los dos últimos si van unidos por <i>y, e, o, u, ni</i>: «Compré pan, leche y huevos».</li><li>Para aislar el <b>vocativo</b>: «Lucía, ven aquí», «Gracias, mamá».</li><li>Para encerrar <b>incisos y aposiciones explicativas</b>: «Madrid, la capital, está en el centro».</li><li>Delante de <b>pero, aunque, sino</b>: «Quería ir, pero llovía».</li><li>Detrás de conectores como <b>sin embargo, por tanto, es decir, además</b>: «Además, es gratis».</li><li>Cuando se <b>omite un verbo</b> que ya ha aparecido: «Yo pedí pizza; tú, pasta».</li></ul>` },
    { tras: "Los signos de puntuación principales", html: `<h3>Errores frecuentes de puntuación</h3><p>El error más grave es poner una <mark>coma entre el sujeto y el verbo</mark>: <s>*Los alumnos de tercero, han ganado el concurso</s>. Aunque el sujeto sea largo, no lleva coma (salvo que haya un inciso entre comas). Tampoco se pone coma entre el verbo y su complemento directo.</p><p>Otros errores habituales: olvidar la coma del vocativo («Hola Ana» → «Hola, Ana»), unir con comas oraciones independientes que necesitan punto o punto y coma, y escribir mal los signos de apertura: en español, las preguntas y exclamaciones llevan <b>signo de apertura</b> (¿ ¡) además del de cierre. Después de los dos puntos se escribe minúscula, salvo en las citas textuales y en el saludo de las cartas («Querida Ana: Te escribo…»).</p>` },
  ],
  videos: [
    ["Diptongos e hiatos", L.vid("uLfiTVvdrW4", "El diptongo y el hiato: todo lo que necesitas saber con ejemplos", "La profe Mónica", 1251985)],
    ["Usos de la coma", L.vid("5fHDJBarFlc", "Aprende a usar la coma con mi fórmula", "La profe Mónica", 1392133)],
  ],
  ejemplos: [
    ["¿Llevan tilde «capitan», «util», «periodico» y «raiz»?", ["ca-pi-tan: aguda acabada en -n → capitán.", "u-til: llana acabada en -l → útil.", "pe-rio-di-co: esdrújula → periódico.", "ra-iz: hiato con i tónica → raíz."], "capitán, útil, periódico, raíz."],
    ["Pon las tildes que falten: «¿Tu sabes si el te esta caliente? Si, se que lo esta».", ["Tú (pronombre), té (bebida), está (aguda en vocal).", "Sí (afirmación), sé (verbo saber), está.", "«si» de «sabes si» es una conjunción que introduce una pregunta indirecta: sin tilde."], "¿Tú sabes si el té está caliente? Sí, sé que lo está."],
    ["Puntúa: «Mamá no encuentro mis zapatillas las rojas las de correr».", ["«Mamá» es un vocativo: coma detrás.", "«No encuentro mis zapatillas» es la oración principal.", "«las rojas, las de correr» es una aclaración: se puede introducir con dos puntos o entre comas."], "Mamá, no encuentro mis zapatillas: las rojas, las de correr."],
  ],
  errores: [
    "Poner tilde a monosílabos como fue, dio, vio o guion.",
    "Olvidar la tilde en los hiatos: *dia, *maiz, *reir.",
    "Escribir «porque» en las preguntas: *¿Porque no vienes?",
    "Poner coma entre el sujeto y el verbo.",
    "Olvidar la coma del vocativo: *Hola Ana.",
    "Omitir los signos de apertura ¿ y ¡.",
  ],
  ejercicios: [
    ["Separa en sílabas y clasifica: «lámpara», «reloj», «cárcel», «sofá».", "lám-pa-ra (esdrújula), re-loj (aguda), cár-cel (llana), so-fá (aguda)."],
    ["Pon tilde si es necesario: «album», «Ramon», «facil», «telefono».", "álbum, Ramón, fácil, teléfono."],
    ["Escribe el plural de «canción», «examen» y «carácter».", "canciones, exámenes, caracteres (cambia la sílaba tónica)."],
    ["¿Diptongo o hiato? «cuidado», «país», «poeta», «aire».", "cui-da-do (diptongo), pa-ís (hiato con tilde), po-e-ta (hiato), ai-re (diptongo)."],
    ["Completa con tu/tú: «___ tienes ___ libro».", "Tú tienes tu libro."],
    ["Completa con porque, por qué o porqué: «¿___ llegas tarde? ___ había atasco».", "¿Por qué llegas tarde? Porque había atasco."],
    ["Corrige: «El profesor de matemáticas, nos explicó las ecuaciones».", "El profesor de matemáticas nos explicó las ecuaciones (sin coma entre sujeto y verbo)."],
    ["Puntúa: «Necesito tres cosas papel tijeras y pegamento».", "Necesito tres cosas: papel, tijeras y pegamento."],
    ["Pon las tildes: «Aun no se cuando vendra el».", "Aún no sé cuándo vendrá él."],
    ["Escribe una oración con punto y coma.", "Por ejemplo: «Ana estudió mucho; por eso aprobó»."],
  ],
  quiz: [
    ["¿Cuál está bien escrita según la norma actual?", ["guion", "guión", "güion"], 0, "Monosílabo ortográfico: sin tilde."],
    ["«Facilmente» se escribe…", ["fácilmente", "facilmente", "facílmente"], 0, "Conserva la tilde de fácil."],
    ["«No sé ___ vive»", ["dónde", "donde", "adonde"], 0, "Interrogativa indirecta."],
    ["¿Qué frase está bien puntuada?", ["Gracias, Pedro.", "Gracias Pedro.", "Gracias Pedro,"], 0, "Vocativo entre comas."],
    ["«Aún» con tilde significa…", ["todavía", "incluso", "pero"], 0, "Aun sin tilde = incluso."],
  ],
  tarjetas: [
    ["Por qué / porque", "Por qué pregunta; porque explica la causa; el porqué es un sustantivo."],
    ["Solo y demostrativos", "Desde 2010 se escriben sin tilde: solo, este, ese, aquel."],
    ["Coma prohibida", "Nunca entre el sujeto y el verbo, ni entre el verbo y el CD."],
  ],
});
