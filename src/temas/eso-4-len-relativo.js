// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG. Terminología de la Nueva gramática (RAE-ASALE).
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Las oraciones subordinadas de relativo",
  minutos: 45,
  objetivos: ["Reconocer una subordinada de relativo y su antecedente", "Conocer los relativos: que, quien, cual, cuyo, donde…", "Distinguir especificativas, explicativas y relativas sin antecedente"],
  claves: ["relativo", "antecedente", "subordinada adjetiva", "especificativa", "explicativa", "relativa libre", "cuyo"],
  pregunta: {
    texto: "«Los alumnos que tenían el permiso fueron a la excursión» y «Los alumnos, que tenían el permiso, fueron a la excursión». ¿Fueron los mismos alumnos?",
    respuesta: "¡No! Sin comas, solo fueron <mark>los que tenían permiso</mark> (la relativa especifica, selecciona). Con comas, fueron <mark>todos</mark>, y además todos tenían permiso (la relativa explica). Dos comas cambian el significado.",
  },
  bloques: [
    {
      html: `<h3>Qué es una subordinada de relativo</h3><p>Es una proposición que <mark>complementa a un sustantivo</mark>, igual que un adjetivo: «el libro <u>que me prestaste</u>» = «el libro prestado». El sustantivo al que se refiere se llama <b>antecedente</b>. Por eso también se llaman <b>adjetivas</b>.</p>`,
      svg: L.frase("Antecedente y relativa: el libro que me prestaste", [
        ["el libro", "antecedente", "var(--leaf)"], ["que", "relativo", "var(--red)"], ["me prestaste", "", "var(--pen)"],
        ["el libro", "", "var(--leaf)"], ["prestado", "= adjetivo", "var(--pen)"],
      ], "la relativa funciona como un adjetivo"),
    },
    {
      html: `<h3>Los relativos</h3><p>Son <b>que</b>, <b>quien/quienes</b>, <b>el cual</b> (la cual, los cuales…), <b>cuyo</b> (cuya, cuyos…), y los adverbios <b>donde</b>, <b>cuando</b> y <b>como</b>. A diferencia de la conjunción «que», el relativo <mark>sustituye al antecedente</mark> y tiene función dentro de su proposición.</p>`,
      svg: L.tabla("Relativos con ejemplo", ["Relativo", "Ejemplo"], [
        ["que", "la casa que vi"], ["quien", "con quien hablé"], ["cuyo", "cuyo perro ladra"], ["donde", "el pueblo donde nací"],
      ]),
    },
    {
      html: `<h3>Especificativas y explicativas</h3><p>Las <b>especificativas</b> van sin comas y <mark>seleccionan</mark> una parte del antecedente: «Los alumnos que aprobaron…» (solo esos). Las <b>explicativas</b> van entre comas y <mark>añaden información</mark> sobre todo el antecedente: «Mis padres, que viven en Lugo, …».</p>`,
      svg: L.filas("Especificativa sin comas y explicativa entre comas", [
        ["Especificativa", "sin comas: selecciona", "var(--pen)"],
        ["Explicativa", "entre comas: añade", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Relativas sin antecedente</h3><p>A veces el antecedente no aparece: «<u>Quien bien te quiere</u> te hará llorar», «<u>El que llegue antes</u> abre». Son <b>relativas libres o semilibres</b> y funcionan como un grupo nominal: pueden ser sujeto, complemento directo, etc.</p>`,
      svg: L.frase("Relativa sin antecedente: Quien madruga encuentra sitio", [
        ["Quien madruga", "relativa = sujeto", "var(--red)"], ["encuentra sitio.", "predicado", "var(--inf)"],
      ], "no hay antecedente expreso"),
    },
    {
      html: `<h3>La función del relativo</h3><p>El relativo cumple una función dentro de su proposición. Para verla, <mark>cámbialo por el antecedente</mark>: «el libro que me prestaste» → «me prestaste <b>el libro</b>»: «que» es <b>complemento directo</b>. «La chica que canta» → «<b>la chica</b> canta»: «que» es <b>sujeto</b>.</p>`,
      svg: L.filas("Cambiar el relativo por el antecedente para ver su función", [
        ["el libro que me prestaste", "→ CD", "var(--pen)"],
        ["la chica que canta", "→ sujeto", "var(--red)"],
        ["la casa donde vivo", "→ CC lugar", "var(--leaf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Tres clases de relativas",
    svg: L.columnas("Especificativa, explicativa y sin antecedente con ejemplos", [
      ["sin comas", "ESPECIFICATIVA", ["Los coches que", "contaminan pagan."], "var(--pen)"],
      ["entre comas", "EXPLICATIVA", ["Mi abuela, que es", "pintora, expone."], "var(--leaf)"],
      ["sin antecedente", "LIBRE", ["Quien lo sepa,", "que levante la mano."], "var(--red)"],
    ]),
  },
  video: { id: "FRIciSkSAdM", titulo: "Trucos para oraciones subordinadas adjetivas", canal: "unProfesor", vistas: 390957, megusta: 5563, busqueda: "oraciones subordinadas de relativo adjetivas" },
  quiz: [
    { q: "En «La película que vimos era larga», el antecedente es…", o: ["que", "la película", "vimos"], a: 1, e: "El relativo «que» se refiere a «la película»." },
    { q: "Las subordinadas de relativo con antecedente funcionan como…", o: ["un adjetivo", "un adverbio", "un verbo"], a: 0, e: "Complementan a un sustantivo, como un adjetivo." },
    { q: "«Mi hermano, que vive en Cádiz, viene mañana» lleva una relativa…", o: ["especificativa", "explicativa", "sustantiva"], a: 1, e: "Va entre comas y añade información sobre el antecedente." },
    { q: "¿Qué relativo indica posesión?", o: ["cuyo", "donde", "cual"], a: 0, e: "«El autor cuyo libro leí» = el libro del autor." },
    { q: "En «El chico que canta es mi primo», ¿qué función tiene «que» en la relativa?", o: ["Complemento directo", "Sujeto", "Atributo"], a: 1, e: "«El chico canta»: el relativo es el sujeto de «canta»." },
  ],
  examen: [
    { q: "«Quien avisa no es traidor» contiene una relativa…", o: ["sin antecedente expreso", "explicativa", "especificativa con antecedente"], a: 0, e: "No aparece antecedente: es una relativa libre que hace de sujeto." },
    { q: "¿Qué diferencia al «que» relativo del «que» conjunción?", o: ["El relativo tiene antecedente y función", "No hay diferencia", "El relativo lleva tilde"], a: 0, e: "El relativo sustituye a un antecedente; la conjunción solo enlaza." },
    { q: "En «el pueblo donde nací», «donde» es…", o: ["complemento circunstancial de lugar", "sujeto", "complemento directo"], a: 0, e: "«Nací en el pueblo»: CC de lugar." },
  ],
  feynman: ["Qué son el relativo y el antecedente", "Por qué estas subordinadas equivalen a un adjetivo", "La diferencia entre especificativa y explicativa", "Cómo averiguar la función del relativo"],
  mapa: mapa("DE RELATIVO", "var(--eso)", [
    ["Antecedente", "el nombre al que remite", "var(--leaf)"],
    ["Relativos", "que · quien · cuyo · donde", "var(--red)"],
    ["Clases", "especificativa · explicativa", "var(--pen)"],
    ["Sin antecedente", "Quien calla, otorga", "var(--inf)"],
  ]),
  tarjetas: [
    ["¿Qué es el antecedente?", "El sustantivo al que se refiere el relativo."],
    ["Relativa especificativa", "Va sin comas y selecciona una parte del antecedente."],
    ["Relativa explicativa", "Va entre comas y añade información sobre todo el antecedente."],
    ["El relativo «cuyo»", "Indica posesión y concuerda con lo poseído: «la autora cuyos libros leí»."],
    ["Truco para la función del relativo", "Sustituir el relativo por el antecedente y analizar la proposición."],
  ],
  familias: ["Jugad a definir objetos de casa con relativas: «Es una cosa que sirve para…».", "Pedidle que explique cómo cambia una frase al poner o quitar las comas de una relativa.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: subordinación de relativo, relativos y puntuación de explicativas (RD 217/2022, Lengua Castellana y Literatura 4º; Nueva gramática básica).",
    ideas: ["Pares mínimos con y sin comas para debatir qué significa cada uno.", "Unir dos oraciones simples en una con relativo («Tengo un perro. El perro ladra»).", "Juego de adivinanzas con definiciones construidas con relativas."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE y ASALE, Nueva gramática básica de la lengua española", url: "https://www.rae.es/gram%C3%A1tica" },
    { t: "RAE, Ortografía: la coma en las relativas explicativas", url: "https://www.rae.es/ortograf%C3%ADa/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Usar bien «cuyo», «el cual» y los relativos con preposición", "Distinguir el «que» relativo del «que» conjunción"],
  bloques: [
    { tras: "Los relativos", html: `<h3>«Que» relativo o «que» conjunción</h3><p>Es la duda más frecuente del análisis. Hay tres pruebas:</p>${L.tb(["Prueba", "Relativo", "Conjunción (sustantiva)"], [["¿Tiene antecedente?", "sí: «el móvil <b>que</b> compré»", "no: «Dijo <b>que</b> vendría»"], ["¿Se cambia por «el cual»?", "sí: «el móvil el cual compré»", "no: *«Dijo el cual vendría»"], ["¿Se cambia por «eso»?", "no", "sí: «Dijo eso»"]])}<p>Además, el relativo <mark>tiene función dentro de su proposición</mark> (sujeto, CD, CC…), mientras que la conjunción solo enlaza y no tiene función.</p>` },
    { tras: "Los relativos", html: `<h3>Relativos con preposición</h3><p>Si el relativo es complemento con preposición dentro de su proposición, la preposición <b>va delante</b> del relativo: «La amiga <b>con la que</b> viajé», «El tema <b>del que</b> te hablé», «La ciudad <b>en la que</b> nací». En la lengua coloquial se tiende a quitar la preposición o a duplicar el complemento, y eso es incorrecto:</p><ul><li><s>*La amiga que viajé con ella</s> → la amiga con la que (con quien) viajé.</li><li><s>*El tema que te hablé</s> → el tema del que te hablé.</li></ul><p>Truco: haz la oración simple con el antecedente. «Viajé <b>con</b> la amiga» → la preposición «con» tiene que aparecer.</p>` },
    { tras: "Especificativas y explicativas", html: `<h3>Las comas cambian el significado</h3><p>Compara estas dos oraciones:</p><ul><li>«Los alumnos <b>que viven lejos</b> llegan en autobús.» Solo los que viven lejos (especificativa).</li><li>«Los alumnos, <b>que viven lejos</b>, llegan en autobús.» Todos los alumnos viven lejos (explicativa).</li></ul><p>Por eso en la escritura la coma no es un adorno. Las explicativas se pueden suprimir sin que cambie la referencia del antecedente; además, con un nombre propio o un antecedente único casi siempre son explicativas: «Madrid, <i>que es la capital</i>, …». Solo las explicativas admiten «el cual» con «que» sujeto: «Mi tía, <i>la cual</i> vive en Lugo…».</p>` },
    { tras: "La función del relativo", html: `<h3>«Cuyo» y otros relativos difíciles</h3><p><b>Cuyo</b> indica posesión y concuerda con lo poseído, no con el poseedor: «El autor <b>cuya novela</b> leímos», «La casa <b>cuyos balcones</b> son azules». Funciona como determinante del sustantivo que le sigue. No debe sustituirse por «que su»: <s>*El chico que su padre es médico</s> → el chico <b>cuyo padre</b> es médico.</p><p>Los adverbios relativos tienen antecedente de lugar, tiempo o modo: «el pueblo <b>donde</b> veraneo» (CCL), «el día <b>cuando</b> llegaste» (CCT), «la manera <b>como</b> lo dijo» (CCM).</p>` },
    { tras: "La función del relativo", html: `<h3>Sustantivación de las relativas</h3><p>Una relativa sin antecedente funciona como un sustantivo dentro de la oración principal, por eso puede cumplir cualquier función nominal: sujeto («<i>Quien avisa</i> no es traidor»), CD («Invita <i>a quien quieras</i>»), atributo («Ella es <i>la que manda</i>»), término de preposición («Habla con <i>los que saben</i>»).</p><p>Para analizarlas, primero di la función de toda la relativa en la principal y, después, la función del relativo dentro de la relativa. En «Quien avisa no es traidor», toda la relativa es sujeto de «es», y «quien» es sujeto de «avisa».</p>` },
    { tras: "La función del relativo", html: `<h3>Análisis paso a paso</h3><ol><li><b>Separa las proposiciones</b> contando los verbos.</li><li><b>Localiza el relativo</b> (que, quien, el cual, cuyo, donde, cuando, como) y su <b>antecedente</b>, que suele estar justo delante.</li><li><b>Clasifica</b>: especificativa (sin comas) o explicativa (entre comas); con antecedente o sin él.</li><li><b>Función de la relativa</b>: si tiene antecedente, es complemento del nombre dentro del grupo nominal; si no, la función que cumpla como sustantivo.</li><li><b>Función del relativo</b>: sustituye el relativo por su antecedente y analiza la oración simple que resulta.</li></ol><p>El paso 5 es el que más puntos da en los exámenes, porque demuestra que entiendes que el relativo es a la vez <mark>nexo y pieza</mark> de su proposición.</p>` },
  ],
  videos: [
    ["Especificativas y explicativas", L.vid("l2C1f9FvHNI", "Oraciones de relativo en español (explicativas y especificativas)", "ProfeDeELE.es", 102766)],
    ["La función del relativo", L.vid("Ce7oMn-6wFI", "Subordinadas de relativo con antecedente expreso: análisis sintáctico", "Susi Profe", 114797)],
  ],
  ejemplos: [
    ["Analiza: «La chaqueta que me regalaste es preciosa.»", ["Verbos: regalaste, es. Dos proposiciones.", "Relativa: «que me regalaste». Antecedente: «la chaqueta».", "Función del relativo: «me regalaste la chaqueta» → «que» es CD.", "La relativa es complemento del nombre «chaqueta», dentro del sujeto «La chaqueta que me regalaste»."], "subordinada de relativo especificativa; «que» es CD."],
    ["Analiza: «El pueblo donde nació mi abuela tiene cien habitantes.»", ["Relativa: «donde nació mi abuela». Antecedente: «el pueblo».", "Función del relativo: «mi abuela nació en el pueblo» → «donde» es CCL.", "Sujeto de la relativa: «mi abuela»."], "subordinada de relativo especificativa con adverbio relativo; «donde» es CCL."],
    ["Corrige y analiza: «Es una cantante que su voz me encanta.»", ["Se quiere expresar posesión: la voz de la cantante.", "La forma correcta es «cuya voz».", "«Una cantante cuya voz me encanta»: «cuya» determina a «voz», que es sujeto de «encanta»."], "«Es una cantante cuya voz me encanta»; «cuya» es determinante del sujeto de la relativa."],
  ],
  errores: [
    "Usar «que su» en lugar de «cuyo»: *el chico que su padre → el chico cuyo padre.",
    "Quitar la preposición: *el tema que te hablé → el tema del que te hablé.",
    "Hacer concordar «cuyo» con el poseedor y no con lo poseído.",
    "Olvidar las comas de las explicativas o ponerlas en las especificativas.",
    "Confundir el «que» relativo con la conjunción de las sustantivas.",
  ],
  ejercicios: [
    ["Señala la relativa y el antecedente: «Los zapatos que compré ayer me aprietan.»", "Relativa: «que compré ayer». Antecedente: «los zapatos»."],
    ["¿Qué función tiene «que» en «La profesora que nos da Historia está de baja»?", "Sujeto: «La profesora nos da Historia»."],
    ["¿Especificativa o explicativa?: «Mi padre, que es pintor, decoró la habitación.»", "Explicativa: va entre comas y añade información sobre un antecedente único (mi padre)."],
    ["Completa con el relativo y la preposición: «El amigo ___ te hablé vive aquí.»", "«del que» o «de quien» (hablar de alguien)."],
    ["Completa con cuyo, cuya, cuyos o cuyas: «La escritora ___ libros leímos vendrá al instituto.»", "«cuyos», porque concuerda con «libros» (masculino plural)."],
    ["Corrige: «Es un sitio que he estado muchas veces.»", "«Es un sitio en el que (donde) he estado muchas veces»."],
    ["¿Qué función tiene la relativa en «Quien madruga encuentra sitio»?", "Toda la relativa es el sujeto de «encuentra». Dentro, «quien» es sujeto de «madruga»."],
    ["Di si «que» es relativo o conjunción: «Espero que vengas» / «La carta que esperaba llegó».", "En la primera, conjunción (Espero eso; no tiene antecedente). En la segunda, relativo (antecedente: la carta; es CD de «esperaba»)."],
    ["Escribe una oración con una relativa introducida por «cuando».", "«Recuerdo el verano cuando aprendí a nadar.» «Cuando» es CCT en la relativa."],
    ["Explica el cambio de significado: «Los coches que contaminan pagarán más» / «Los coches, que contaminan, pagarán más».", "En la primera solo pagarán más los coches que contaminan (especificativa). En la segunda se dice que todos los coches contaminan y que todos pagarán más (explicativa)."],
  ],
  quiz: [
    ["«El chico ___ padre es médico»", ["cuyo", "que su", "cuya"], 0, "Cuyo concuerda con padre."],
    ["En «la ciudad en la que vivo», «en la que» es…", ["CCL", "CD", "sujeto"], 0, "Vivo en la ciudad."],
    ["Las relativas explicativas…", ["van entre comas", "nunca llevan comas", "no tienen antecedente"], 0, "Se pueden suprimir sin cambiar la referencia."],
    ["«Dijo que vendría»: «que» es…", ["conjunción", "relativo", "pronombre personal"], 0, "No tiene antecedente; Dijo eso."],
    ["¿Cuál es correcta?", ["el tema del que hablamos", "el tema que hablamos", "el tema que hablamos de él"], 0, "Hablar de algo: la preposición va delante del relativo."],
  ],
  tarjetas: [
    ["Relativo con preposición", "La preposición va delante: la amiga con la que viajé."],
    ["Relativo o conjunción", "El relativo tiene antecedente y función; la conjunción se cambia por «eso»."],
    ["Adverbios relativos", "donde (lugar), cuando (tiempo), como (modo), con antecedente."],
  ],
});
