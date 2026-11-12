// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG. Terminología de la Nueva gramática (RAE-ASALE).
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Las oraciones subordinadas sustantivas",
  minutos: 45,
  objetivos: ["Reconocer una subordinada sustantiva sustituyéndola por «eso»", "Identificar sus nexos: que, si y los interrogativos", "Saber qué función cumple dentro de la oración principal"],
  claves: ["subordinación", "subordinada sustantiva", "nexo", "conjunción que", "interrogativa indirecta", "complemento directo", "sujeto"],
  pregunta: {
    texto: "En «Me encanta el chocolate» y en «Me encanta que vengas», ¿qué tienen en común «el chocolate» y «que vengas»?",
    respuesta: "Hacen <mark>el mismo trabajo</mark>: los dos son el <b>sujeto</b> de «encanta». «Que vengas» tiene verbo propio, así que es una proposición que funciona como un sustantivo: una <b>subordinada sustantiva</b>.",
  },
  bloques: [
    {
      html: `<h3>Qué es la subordinación</h3><p>En la subordinación una proposición <mark>depende</mark> de otra y cumple una función dentro de ella, como si fuera una palabra. Hay subordinadas <b>sustantivas</b> (funcionan como un sustantivo), <b>de relativo</b> (como un adjetivo) y <b>adverbiales</b> (como un adverbio).</p>`,
      svg: L.filas("Tres tipos de subordinadas según la palabra a la que equivalen", [
        ["Sustantivas", "= un sustantivo (eso)", "var(--pen)"],
        ["De relativo", "= un adjetivo", "var(--leaf)"],
        ["Adverbiales", "= un adverbio", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>La prueba de «eso»</h3><p>Una subordinada sustantiva se puede <mark>sustituir por «eso», «esto» o «algo»</mark> sin que la oración deje de funcionar. «Quiero <u>que me llames</u>» → «Quiero <b>eso</b>». Si funciona, es sustantiva.</p>`,
      svg: L.frase("Prueba de sustitución: Quiero que me llames equivale a Quiero eso", [
        ["Quiero", "principal", "var(--ink)"], ["que me llames", "subordinada", "var(--pen)"],
        ["Quiero", "", "var(--ink)"], ["eso", "= sustantivo", "var(--pen)"],
      ], "si cabe «eso», es sustantiva"),
    },
    {
      html: `<h3>Los nexos</h3><p>Se introducen con la conjunción <b>que</b> (la más frecuente), con <b>si</b> en preguntas indirectas de sí o no («No sé <u>si vendrá</u>»), o con un <b>interrogativo</b>: qué, quién, cómo, dónde, cuándo, cuánto («Dime <u>dónde vives</u>»). A veces no tienen nexo porque el verbo está en infinitivo: «Me gusta <u>leer cómics</u>».</p>`,
      svg: L.tabla("Nexos de las subordinadas sustantivas", ["Nexo", "Ejemplo"], [
        ["que", "Dice que llueve."], ["si", "No sé si irá."], ["dónde, cómo…", "Dime cómo es."], ["infinitivo", "Odio madrugar."],
      ]),
    },
    {
      html: `<h3>Sus funciones</h3><p>Como un sustantivo, pueden ser <b>sujeto</b> («Me preocupa <u>que llegues tarde</u>»), <b>complemento directo</b> («Creo <u>que tienes razón</u>»), <b>término de preposición</b> en un complemento de régimen («Me acuerdo <u>de que era lunes</u>»), <b>atributo</b> o complemento de un nombre o adjetivo («la idea <u>de que vengas</u>»).</p>`,
      svg: L.filas("Funciones de la subordinada sustantiva", [
        ["Sujeto", "Me preocupa que…", "var(--red)"], ["CD", "Creo que…", "var(--pen)"],
        ["C. régimen", "Me acuerdo de que…", "var(--leaf)"], ["C. nombre", "la idea de que…", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Truco para la función</h3><p>Sustituye por «eso» y analiza la oración simple que queda. «Me preocupa eso»: si al cambiar a plural cambia el verbo («Me preocupan esas cosas»), es <mark>sujeto</mark>. «Creo eso» → «Lo creo»: si se sustituye por <b>lo</b>, es <mark>complemento directo</mark>.</p>`,
      svg: L.filas("Pruebas para saber la función", [
        ["¿Concuerda?", "→ sujeto", "var(--red)"], ["¿Cambia por «lo»?", "→ CD", "var(--pen)"],
        ["¿Va tras preposición?", "→ régimen o CN", "var(--leaf)"],
      ], "después de sustituir por «eso»"),
    },
  ],
  figura: {
    titulo: "Reconocer una sustantiva en tres pasos",
    svg: L.pasos("Pasos: localizar el nexo, sustituir por eso, analizar la función", [
      ["Busca el nexo", ["que · si · qué, cómo…", "o un infinitivo"], "var(--pen)"],
      ["Prueba «eso»", ["Quiero eso", "si encaja: sustantiva"], "var(--leaf)"],
      ["Mira la función", ["sujeto · CD · régimen", "CN · atributo"], "var(--red)"],
    ]),
  },
  video: { id: "kkUAwRWTqrI", titulo: "Subordinadas sustantivas: análisis sintáctico de oraciones compuestas", canal: "Susi Profe", vistas: 1076143, megusta: 18713, busqueda: "oraciones subordinadas sustantivas" },
  quiz: [
    { q: "¿Qué prueba sirve para reconocer una subordinada sustantiva?", o: ["Sustituirla por «eso»", "Sustituirla por «allí»", "Sustituirla por un adjetivo"], a: 0, e: "Equivale a un sustantivo, así que cabe «eso»." },
    { q: "En «Me alegra que hayas aprobado», la subordinada es…", o: ["complemento directo", "sujeto", "complemento circunstancial"], a: 1, e: "«Me alegra eso»: «eso» es el sujeto de «alegra»." },
    { q: "En «Pregúntale si quiere venir», el nexo es…", o: ["que", "si", "quiere"], a: 1, e: "«Si» introduce una interrogativa indirecta total." },
    { q: "En «Creo que mañana nevará», la subordinada es…", o: ["sujeto", "complemento directo", "atributo"], a: 1, e: "«Lo creo»: se sustituye por «lo», así que es CD." },
    { q: "«Me gusta pasear» contiene una subordinada sustantiva…", o: ["con nexo que", "de infinitivo, sin nexo", "de relativo"], a: 1, e: "«Pasear» es sujeto de «gusta» y no lleva nexo." },
  ],
  examen: [
    { q: "En «Me acuerdo de que era lunes», la subordinada funciona como…", o: ["término del complemento de régimen", "sujeto", "complemento directo"], a: 0, e: "El verbo «acordarse» exige «de»: complemento de régimen." },
    { q: "«Dime dónde has dejado las llaves»: el nexo es…", o: ["un relativo", "un interrogativo", "una conjunción adversativa"], a: 1, e: "«Dónde» introduce una interrogativa indirecta." },
    { q: "Las subordinadas sustantivas equivalen a…", o: ["un adjetivo", "un sustantivo", "un adverbio"], a: 1, e: "Por eso cumplen funciones propias del sustantivo." },
  ],
  feynman: ["La diferencia entre coordinación y subordinación", "La prueba de «eso» con un ejemplo", "Los nexos de las sustantivas", "Cómo saber si es sujeto o complemento directo"],
  mapa: mapa("SUSTANTIVAS", "var(--eso)", [
    ["Prueba", "sustituir por «eso»", "var(--leaf)"],
    ["Nexos", "que · si · interrogativos", "var(--pen)"],
    ["Funciones", "sujeto · CD · régimen…", "var(--red)"],
    ["Sin nexo", "con infinitivo", "var(--inf)"],
  ]),
  tarjetas: [
    ["¿Qué es una subordinada sustantiva?", "Una proposición que funciona como un sustantivo dentro de otra oración."],
    ["Prueba para reconocerla", "Sustituirla por «eso», «esto» o «algo»."],
    ["Nexos de las sustantivas", "La conjunción que, la conjunción si y los interrogativos (qué, quién, cómo, dónde…)."],
    ["¿Cómo sé si es CD?", "Si después de sustituirla por «eso» se puede cambiar por «lo»."],
    ["¿Cómo sé si es sujeto?", "Si al ponerla en plural cambia el número del verbo principal."],
  ],
  familias: ["Pedidle que complete «Me gustaría que…» con cinco finales distintos y señale el nexo.", "Escoged frases de un libro con «que» y comprobad juntos si cabe «eso».", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: la subordinación sustantiva; nexos y funciones (RD 217/2022, Lengua Castellana y Literatura 4º; Nueva gramática básica de la lengua española).",
    ideas: ["Tarjetas «eso»: tapar la subordinada con una tarjeta que dice «eso» y leer la oración.", "Transformar estilo directo en indirecto para generar sustantivas de CD.", "Clasificar en la pizarra frases del alumnado según la función de la sustantiva."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE y ASALE, Nueva gramática básica de la lengua española", url: "https://www.rae.es/gram%C3%A1tica" },
    { t: "Oración subordinada sustantiva, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Oraci%C3%B3n_subordinada_sustantiva" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Reconocer las sustantivas de infinitivo y las interrogativas indirectas", "Evitar el dequeísmo y el queísmo"],
  bloques: [
    { tras: "Qué es la subordinación", html: `<h3>Proposición principal y subordinada</h3><p>En «Creo que lloverá» hay dos verbos y, por tanto, dos proposiciones. Pero no están al mismo nivel: «que lloverá» es una pieza de la otra, porque funciona como complemento directo de «creo». La proposición que contiene a la otra se llama <b>principal</b> (o, mejor dicho, oración principal con la subordinada dentro), y la que funciona como una pieza se llama <b>subordinada</b>.</p><p>Esta es la gran diferencia con la coordinación: en «Llueve y hace frío» ninguna depende de la otra; en «Creo que lloverá», si quitas la subordinada, la principal queda incompleta («Creo…» ¿qué?). <mark>La subordinada siempre cumple una función dentro de la principal.</mark></p>` },
    { tras: "Los nexos", html: `<h3>Sustantivas de infinitivo</h3><p>Muchas sustantivas no llevan nexo y tienen el verbo en <b>infinitivo</b>: «Me encanta <i>bailar salsa</i>», «Prefiero <i>quedarme en casa</i>», «Es importante <i>dormir bien</i>». Siguen siendo proposiciones porque el infinitivo puede llevar sus propios complementos (salsa, en casa, bien).</p><p>Se reconocen con la misma prueba: «Me encanta <b>eso</b>», «Prefiero <b>eso</b>». Ten cuidado: si el infinitivo forma parte de una perífrasis («Tengo que <i>salir</i>», «Voy a <i>bailar</i>»), no es subordinada, sino parte del mismo verbo.</p>` },
    { tras: "Los nexos", html: `<h3>Estilo directo e indirecto</h3><p>Las sustantivas aparecen siempre que contamos lo que otra persona ha dicho o preguntado. En el <b>estilo directo</b> se reproducen las palabras exactas, con comillas o raya: Ana dijo: «Estoy cansada». En el <b>estilo indirecto</b> se integran en una sustantiva de CD: <mark>Ana dijo que estaba cansada</mark>.</p>${L.tb(["Directo", "Indirecto"], [["Me preguntó: «¿Vienes?»", "Me preguntó <b>si</b> iba."], ["Me preguntó: «¿Dónde vives?»", "Me preguntó <b>dónde</b> vivía."], ["Dijo: «Mañana lo haré».", "Dijo <b>que</b> al día siguiente lo haría."]])}<p>Al pasar a indirecto cambian las personas, los tiempos verbales y los adverbios de tiempo y lugar.</p>` },
    { tras: "Sus funciones", html: `<h3>Dequeísmo y queísmo</h3><p>El <b>dequeísmo</b> es poner «de» donde no va: <s>*Pienso de que</s> → «Pienso que». El <b>queísmo</b> es quitar el «de» cuando el verbo lo exige: <s>*Me acuerdo que</s> → «Me acuerdo de que».</p><p>Truco: <mark>convierte la sustantiva en «eso»</mark> y mira si necesitas la preposición. «Pienso eso» (sin de) → <i>pienso que</i>. «Me acuerdo de eso» (con de) → <i>me acuerdo de que</i>. «Estoy seguro de eso» → <i>estoy seguro de que</i>. «Me alegro de eso» → <i>me alegro de que</i>. Otra prueba es convertirlo en pregunta: «¿Qué piensas?» (sin de) frente a «¿De qué te acuerdas?» (con de).</p>` },
    { tras: "Truco para la función", html: `<h3>Sustantivas que complementan a un nombre o a un adjetivo</h3><p>Además de sujeto, CD o complemento de régimen, una sustantiva puede ir detrás de una preposición que depende de un <b>sustantivo</b> o de un <b>adjetivo</b>:</p><ul><li>Complemento del nombre: «Tengo <i>ganas</i> <b>de que llegue el verano</b>».</li><li>Complemento del adjetivo: «Estoy <i>harta</i> <b>de que me interrumpan</b>».</li><li>Atributo: «Mi deseo es <b>que apruebes</b>».</li></ul><p>En todos estos casos la prueba de «eso» sigue funcionando: «ganas de eso», «harta de eso», «Mi deseo es eso». Lo que cambia es la palabra de la que depende: un verbo, un nombre o un adjetivo.</p>` },
    { tras: "Truco para la función", html: `<h3>Análisis paso a paso</h3><ol><li><b>Cuenta los verbos</b> en forma personal (y los infinitivos que formen proposición) y sepáralos.</li><li><b>Busca el nexo</b>: que, si o un interrogativo (qué, quién, cómo, dónde, cuándo, cuánto). Con infinitivo puede no haberlo.</li><li><b>Aplica la prueba de «eso»</b> para confirmar que es sustantiva.</li><li><b>Busca su función</b> en la principal: sujeto (concuerda), CD (se cambia por «lo»), término de preposición (va detrás de de, en, con…), atributo (con ser o estar).</li><li><b>Analiza por dentro</b> la subordinada como si fuera una oración simple: su sujeto, su verbo y sus complementos.</li></ol><p>En el esquema final, la subordinada aparece dentro de la principal, en el lugar de la función que cumple.</p>` },
  ],
  videos: [
    ["Qué es la subordinación", L.vid("fqt3z4pZvF8", "Cómo diferenciar oraciones subordinadas: sustantivas, adjetivas y adverbiales", "Clases Particulares en Ávila", 775793)],
    ["Sus funciones", L.vid("Y0RKtGii678", "Cómo analizar una oración subordinada sustantiva", "unProfesor", 536604)],
  ],
  ejemplos: [
    ["Analiza: «Me molesta que hables tan alto.»", ["Verbos: molesta, hables. Dos proposiciones.", "Subordinada: «que hables tan alto». Prueba: «Me molesta eso».", "Función: pasa a plural, «Me molestan esas cosas»; el verbo concuerda, así que es el sujeto.", "Dentro: nexo «que»; sujeto elíptico tú; CCM «tan alto»."], "subordinada sustantiva de sujeto."],
    ["Analiza: «No sé si iremos al cine.»", ["Verbos: sé, iremos. Dos proposiciones.", "Subordinada: «si iremos al cine». Prueba: «No sé eso» → «No lo sé».", "Se sustituye por «lo»: complemento directo.", "Nexo «si»: es una interrogativa indirecta total (la respuesta sería sí o no)."], "subordinada sustantiva de complemento directo, interrogativa indirecta."],
    ["Analiza: «Confío en que todo saldrá bien.»", ["Verbos: confío, saldrá. Dos proposiciones.", "Subordinada: «que todo saldrá bien», precedida de la preposición «en».", "Prueba: «Confío en eso». El verbo «confiar» exige «en».", "Dentro: nexo «que»; sujeto «todo»; CCM «bien»."], "subordinada sustantiva de término de preposición en un complemento de régimen."],
  ],
  errores: [
    "Pensar que todo «que» introduce una sustantiva: si tiene antecedente, es un relativo.",
    "Dequeísmo: «pienso de que», «me dijo de que».",
    "Queísmo: «me acuerdo que», «estoy seguro que».",
    "Olvidar la preposición en el complemento de régimen: en «Me acuerdo de que…», la sustantiva es término de «de».",
    "Tratar como subordinada el infinitivo de una perífrasis («tengo que salir»).",
  ],
  ejercicios: [
    ["Subraya la sustantiva y di su función: «Es necesario que estudies.»", "«que estudies»: sujeto (Es necesario eso; Son necesarias esas cosas)."],
    ["Subraya la sustantiva y di su función: «Prefiero quedarme en casa.»", "«quedarme en casa»: CD de infinitivo (Lo prefiero)."],
    ["Subraya la sustantiva y di su función: «Me alegro de que hayas venido.»", "«de que hayas venido»: complemento de régimen (Me alegro de eso)."],
    ["Corrige: «Me di cuenta que era tarde» y «Creo de que tienes razón».", "«Me di cuenta de que era tarde» (darse cuenta de algo). «Creo que tienes razón» (creo eso)."],
    ["Pasa a estilo indirecto: Luis preguntó: «¿Cuándo empieza la película?»", "Luis preguntó cuándo empezaba la película."],
    ["Pasa a estilo indirecto: Mi madre dijo: «Hoy cenaremos pizza».", "Mi madre dijo que ese día cenaríamos pizza."],
    ["¿Qué función tiene la sustantiva en «Tengo miedo de que se rompa»?", "Complemento del nombre «miedo» (miedo de eso)."],
    ["¿Qué función tiene en «Mi sueño es que viajemos juntos»?", "Atributo del verbo copulativo «es»."],
    ["Escribe una sustantiva de CD introducida por un interrogativo.", "«Dime cómo te llamas.» (Dímelo: CD; nexo interrogativo «cómo»)."],
    ["¿Es sustantiva «que» en «El libro que leí era largo»? Justifica.", "No. «Que» tiene antecedente (el libro) y no se puede cambiar por «eso»: es una subordinada de relativo."],
  ],
  quiz: [
    ["«Me acuerdo ___ tu cumpleaños.»", ["de que es", "que es", "de que de es"], 0, "Me acuerdo de eso."],
    ["En «Me encanta nadar», «nadar» es…", ["sujeto", "CD", "CCM"], 0, "Me encanta eso / Me encantan esas cosas."],
    ["«Pienso de que…» es un caso de…", ["dequeísmo", "queísmo", "leísmo"], 0, "Sobra «de»."],
    ["En «Estoy harto de que grites», la subordinada complementa a…", ["un adjetivo", "un sustantivo", "un adverbio"], 0, "Harto es adjetivo."],
    ["El estilo indirecto de «¿Vienes?», preguntó, es…", ["Preguntó si venía.", "Preguntó que vienes.", "Preguntó ¿vienes?"], 0, "Interrogativa indirecta con «si»."],
  ],
  tarjetas: [
    ["Dequeísmo", "Poner «de» que sobra: *pienso de que → pienso que."],
    ["Queísmo", "Quitar un «de» necesario: *me acuerdo que → me acuerdo de que."],
    ["Interrogativa indirecta", "Pregunta dentro de una sustantiva: No sé si vendrá / Dime dónde vives."],
  ],
});
