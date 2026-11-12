// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG. Terminología de la Nueva gramática (RAE-ASALE).
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "La oración compuesta: coordinación y yuxtaposición",
  minutos: 40,
  objetivos: ["Distinguir la oración simple de la compuesta", "Reconocer oraciones yuxtapuestas", "Clasificar las coordinadas por su nexo"],
  claves: ["oración compuesta", "proposición", "yuxtaposición", "coordinación", "nexo", "copulativa", "adversativa", "disyuntiva"],
  pregunta: {
    texto: "«Llegué, vi, vencí.» ¿Cuántas oraciones hay en esta frase famosa de Julio César, si solo tiene tres palabras?",
    respuesta: "Hay <mark>tres verbos</mark>, así que hay tres proposiciones unidas en una sola <b>oración compuesta</b>. Están juntas sin nexo, solo con comas: son <b>yuxtapuestas</b>.",
  },
  bloques: [
    {
      html: `<h3>Simple o compuesta</h3><p>Una oración <b>simple</b> tiene un solo verbo en forma personal. Una <b>compuesta</b> tiene dos o más: cada parte con su verbo se llama <mark>proposición</mark>. Truco: <b>cuenta los verbos conjugados</b> (las perífrasis como «tengo que ir» cuentan como uno).</p>`,
      svg: L.frase("Oración compuesta con dos verbos: Marta estudia y su hermano juega", [
        ["Marta", "", "var(--line)"], ["estudia", "verbo 1", "var(--pen)"], ["y", "nexo", "var(--red)"],
        ["su hermano", "", "var(--line)"], ["juega.", "verbo 2", "var(--pen)"],
      ], "2 verbos = 2 proposiciones"),
    },
    {
      html: `<h3>Yuxtaposición</h3><p>Las proposiciones se unen <mark>sin nexo</mark>, solo con signos de puntuación: coma, punto y coma o dos puntos. «No vengas mañana; estaré fuera.» El significado (aquí, una causa) se entiende por el contexto.</p>`,
      svg: L.frase("Yuxtapuestas: No vengas mañana; estaré fuera", [
        ["No vengas mañana", "proposición 1", "var(--pen)"], [";", "sin nexo", "var(--red)"], ["estaré fuera.", "proposición 2", "var(--leaf)"],
      ], "unidas solo por la puntuación"),
    },
    {
      html: `<h3>Coordinación</h3><p>Las proposiciones son <b>independientes</b>: ninguna depende de la otra y tienen el mismo nivel. Se unen con un <mark>nexo coordinante</mark>. Según el nexo hay coordinadas <b>copulativas</b>, <b>disyuntivas</b> y <b>adversativas</b>.</p>`,
      svg: L.filas("Clases de coordinadas y sus nexos", [
        ["Copulativas", "suman: y, e, ni", "var(--leaf)"],
        ["Disyuntivas", "eligen: o, u, o bien", "var(--inf)"],
        ["Adversativas", "oponen: pero, sino", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Ejemplos de cada tipo</h3><p><b>Copulativa:</b> «Ni come ni deja comer». <b>Disyuntiva:</b> «¿Vienes o te quedas?». <b>Adversativa:</b> «Es tarde, pero aún hay luz»; con «sino» corrige algo negado: «No es tímido, sino prudente».</p>`,
      svg: L.tabla("Ejemplos de coordinadas", ["Tipo", "Ejemplo"], [
        ["Copulativa", "Leo y escribo."], ["Disyuntiva", "¿Vienes o no?"], ["Adversativa", "Corre, pero cae."], ["con sino", "No es A, sino B."],
      ]),
    },
    {
      html: `<h3>Cómo analizarlas</h3><p>1) Localiza los verbos. 2) Separa las proposiciones. 3) Busca el nexo: si no hay, son <b>yuxtapuestas</b>; si es coordinante, mira cuál es para clasificarla. 4) Analiza cada proposición como una oración simple (sujeto y predicado).</p>`,
      svg: L.filas("Cuatro pasos para analizar una oración compuesta", [
        ["1", "subraya los verbos", "var(--pen)"], ["2", "separa las proposiciones", "var(--leaf)"],
        ["3", "busca y clasifica el nexo", "var(--red)"], ["4", "analiza cada parte", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Cómo se unen las proposiciones",
    svg: L.columnas("Yuxtaposición, coordinación y subordinación", [
      ["sin nexo", "YUXTAPOSICIÓN", ["coma, punto y coma", "o dos puntos"], "var(--pen)"],
      ["mismo nivel", "COORDINACIÓN", ["y · o · pero · sino", "independientes"], "var(--leaf)"],
      ["una depende de otra", "SUBORDINACIÓN", ["que · cuando · si…", "(próximos temas)"], "var(--muted)"],
    ]),
  },
  video: { id: "PZrThDeiChk", titulo: "Oraciones compuestas coordinadas: concepto y tipos", canal: "Susi Profe", vistas: 562511, megusta: 0, busqueda: "oraciones coordinadas y yuxtapuestas" },
  quiz: [
    { q: "¿Cuántas proposiciones hay en «Abrí la puerta y entró el gato»?", o: ["Una", "Dos", "Tres"], a: 1, e: "Dos verbos conjugados (abrí, entró): dos proposiciones." },
    { q: "«Hacía frío; nos quedamos en casa» es una oración…", o: ["yuxtapuesta", "coordinada copulativa", "simple"], a: 0, e: "No hay nexo, solo punto y coma." },
    { q: "¿Qué nexo es adversativo?", o: ["ni", "o", "pero"], a: 2, e: "«Pero» une ideas que se oponen." },
    { q: "«¿Estudias o trabajas?» es coordinada…", o: ["disyuntiva", "copulativa", "adversativa"], a: 0, e: "El nexo «o» plantea elegir entre opciones." },
    { q: "En la coordinación, las proposiciones…", o: ["dependen una de otra", "tienen el mismo nivel", "siempre van sin nexo"], a: 1, e: "Son independientes y del mismo nivel sintáctico." },
  ],
  examen: [
    { q: "«No quiero té, sino café» es coordinada…", o: ["adversativa", "copulativa", "disyuntiva"], a: 0, e: "«Sino» corrige lo negado antes: adversativa." },
    { q: "«Tengo que estudiar» tiene…", o: ["dos verbos y es compuesta", "una perífrasis y es simple", "dos proposiciones"], a: 1, e: "«Tengo que estudiar» es una perífrasis verbal: un solo núcleo." },
    { q: "¿Qué nexo es copulativo negativo?", o: ["ni", "u", "mas"], a: 0, e: "«Ni» suma ideas negativas." },
  ],
  feynman: ["Cómo saber si una oración es simple o compuesta", "Qué son las yuxtapuestas", "Los tres tipos de coordinadas con sus nexos", "Los pasos para analizar una oración compuesta"],
  mapa: mapa("ORACIÓN COMPUESTA", "var(--eso)", [
    ["Proposición", "cada parte con su verbo", "var(--ink)"],
    ["Yuxtaposición", "sin nexo: , ; :", "var(--pen)"],
    ["Coordinación", "y · o · pero · sino", "var(--leaf)"],
    ["Análisis", "verbos → nexo → partes", "var(--red)"],
  ]),
  tarjetas: [
    ["¿Qué es una proposición?", "Cada una de las partes con verbo propio de una oración compuesta."],
    ["Oraciones yuxtapuestas", "Proposiciones unidas sin nexo, con coma, punto y coma o dos puntos."],
    ["Coordinadas copulativas", "Suman ideas con y, e, ni."],
    ["Coordinadas adversativas", "Oponen ideas con pero, mas, sino (que)."],
    ["Coordinadas disyuntivas", "Presentan opciones con o, u, o bien."],
  ],
  familias: ["Leed un párrafo de un libro y contad cuántos verbos conjugados tiene cada oración.", "Pedidle que invente una frase de cada tipo de coordinada sobre el día de hoy.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: la oración compuesta, relaciones de yuxtaposición y coordinación (RD 217/2022, Lengua Castellana y Literatura 4º; terminología de la Nueva gramática básica).",
    ideas: ["Tiras de papel con proposiciones y nexos para construir oraciones y clasificarlas.", "Reescribir yuxtapuestas como coordinadas y comentar el cambio de matiz.", "Cazar coordinadas en letras de canciones."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE y ASALE, Nueva gramática básica de la lengua española", url: "https://www.rae.es/gram%C3%A1tica" },
    { t: "Oración compuesta, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Oraci%C3%B3n_compuesta" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Conocer todos los nexos coordinantes, también los explicativos y distributivos", "Puntuar bien las oraciones compuestas"],
  bloques: [
    { tras: "Simple o compuesta", html: `<h3>Verbos que cuentan y verbos que no</h3><p>Antes de separar proposiciones hay que contar bien los verbos. Cuenta como <b>un solo verbo</b>:</p><ul><li>Las <b>perífrasis verbales</b>: «Tengo que estudiar», «Voy a salir», «Sigue lloviendo».</li><li>Los <b>tiempos compuestos</b>: «Habíamos terminado».</li><li>La <b>pasiva</b>: «Fue construido en 1900».</li></ul><p>En cambio, los infinitivos, gerundios y participios que funcionan solos pueden formar proposiciones subordinadas, que verás en los temas siguientes: «Me gusta <i>leer</i>».</p><p>Truco: la oración compuesta tiene <mark>tantas proposiciones como verbos en forma personal</mark> (más las no personales que forman su propia proposición).</p>` },
    { tras: "Coordinación", html: `<h3>Todos los nexos coordinantes</h3>${L.tb(["Tipo", "Significado", "Nexos", "Ejemplo"], [["Copulativa", "suma", "y (e), ni, que", "Llegó y se sentó."], ["Disyuntiva", "elección", "o (u), o bien", "¿Lo compras o lo alquilas?"], ["Adversativa", "oposición", "pero, mas, sino (que), sin embargo, no obstante", "Lo intenté, pero no pude."], ["Explicativa", "aclaración", "es decir, o sea, esto es", "Es ovíparo, es decir, pone huevos."], ["Distributiva", "alternancia", "unos… otros, ya… ya, bien… bien", "Unos reían, otros lloraban."]])}<p>Recuerda: <b>y</b> pasa a <b>e</b> ante palabras que empiezan por <i>i-, hi-</i> («padres e hijos»), y <b>o</b> pasa a <b>u</b> ante <i>o-, ho-</i> («siete u ocho»).</p>` },
    { tras: "Ejemplos de cada tipo", html: `<h3>«Pero» y «sino»: no los confundas</h3><p><b>Pero</b> añade una oposición parcial: lo primero sigue siendo verdad. «Es caro, pero merece la pena» (es caro y además merece la pena). <b>Sino</b> corrige: lo primero, que va negado, se anula y se sustituye por lo segundo. «No es caro, sino barato». Si lo que sigue lleva verbo conjugado se usa <mark>sino que</mark>: «No lo compró, sino que lo alquiló».</p><p>No confundas <b>sino</b> (conjunción, se pronuncia en una sola sílaba tónica) con <b>si no</b> (condición + negación): «Si no vienes, me enfado».</p>` },
    { tras: "Ejemplos de cada tipo", html: `<h3>La puntuación de las compuestas</h3><ul><li><b>Coma</b> antes de <i>pero, mas, sino, aunque</i>: «Quería ir, pero no pude».</li><li><b>Sin coma</b> antes de <i>y, ni, o</i> cuando unen elementos de una serie, salvo que cambie el sujeto y pueda haber confusión: «Ana cocinaba, y Luis y Pedro ponían la mesa».</li><li><b>Punto y coma</b> antes de <i>sin embargo, no obstante, por tanto</i> en oraciones largas: «Estudió mucho; sin embargo, suspendió».</li><li><b>Dos puntos</b> en yuxtapuestas que expresan causa, consecuencia o explicación: «No saldremos: está diluviando».</li></ul>` },
    { tras: "Cómo analizarlas", html: `<h3>Valores de las yuxtapuestas</h3><p>Aunque no tengan nexo, las yuxtapuestas tienen un significado que se deduce del contexto. Puedes comprobarlo añadiendo el nexo que «falta»:</p>${L.tb(["Oración", "Valor", "Nexo implícito"], [["Llegué, vi, vencí.", "suma", "y"], ["No vino: estaba enfermo.", "causa", "porque"], ["Ha llovido mucho; el río está crecido.", "consecuencia", "por eso"], ["Él quería ir; ella, no.", "oposición", "pero"]])}<p>En un análisis basta con decir «yuxtapuesta», pero indicar su valor demuestra que la has entendido. Los escritores usan mucho la yuxtaposición porque da rapidez y fuerza al texto: la famosa frase de Julio César, «Llegué, vi, vencí», no sería tan rotunda con «y». En cambio, en un texto expositivo conviene usar nexos explícitos para que el lector no tenga que adivinar la relación entre las ideas.</p>` },
    { tras: "Cómo analizarlas", html: `<h3>Coordinación entre oraciones y dentro de la oración</h3><p>Los nexos coordinantes no solo unen proposiciones: también unen palabras o grupos dentro de una oración simple. En «Compré pan <b>y</b> leche», «y» une dos sustantivos que forman un solo complemento directo; la oración sigue siendo simple porque solo hay un verbo. En «Compré pan <b>y</b> Luis trajo leche», en cambio, «y» une dos proposiciones con verbos distintos.</p><p>Por eso, antes de clasificar, mira <mark>qué une el nexo</mark>: si a cada lado hay un verbo conjugado, es una oración compuesta; si no, es una coordinación de palabras dentro de una oración simple. Este matiz aparece mucho en los exámenes, sobre todo con «pero» («Es pequeño pero matón») y con «o» («¿Quieres agua o zumo?»).</p>` },
  ],
  videos: [
    ["Yuxtaposición", L.vid("2Ew-Q6vEbaQ", "Oraciones yuxtapuestas, coordinadas y subordinadas", "Maestra Belén Sánchez", 379141)],
    ["Cómo analizarlas", L.vid("Ub1Pl0AvUjc", "Análisis sintáctico y tipos de oraciones compuestas coordinadas", "Clases Particulares en Ávila", 421633)],
  ],
  ejemplos: [
    ["Analiza: «Mi hermano estudia Medicina y mi prima trabaja en un hospital.»", ["Verbos: estudia, trabaja. Hay dos proposiciones.", "Nexo: «y», conjunción coordinante copulativa.", "P1: «Mi hermano estudia Medicina» (sujeto: mi hermano; CD: Medicina).", "P2: «mi prima trabaja en un hospital» (sujeto: mi prima; CCL: en un hospital)."], "oración compuesta coordinada copulativa."],
    ["Analiza: «No quiero té, sino que prefiero un zumo.»", ["Verbos: quiero, prefiero. Dos proposiciones.", "Nexo: «sino que», adversativo; la primera proposición está negada y la segunda la corrige.", "P1: «No quiero té» (sujeto elíptico: yo; CD: té). P2: «prefiero un zumo» (sujeto elíptico: yo; CD: un zumo)."], "oración compuesta coordinada adversativa (exclusiva)."],
    ["Analiza: «Unos bailaban en la pista, otros charlaban en la barra.»", ["Verbos: bailaban, charlaban. Dos proposiciones.", "Nexo correlativo: «unos… otros», que reparte la acción entre dos grupos.", "Cada proposición tiene su sujeto (unos / otros) y su CCL."], "oración compuesta coordinada distributiva."],
  ],
  errores: [
    "Contar las perífrasis («tengo que ir») como dos verbos.",
    "Escribir «sino» cuando es «si no» y al revés.",
    "Poner coma antes de «y» en una enumeración simple.",
    "Decir que una oración es coordinada aunque no tiene nexo: si no hay nexo, es yuxtapuesta.",
    "Olvidar el cambio de «y» a «e» ante i-, hi- y de «o» a «u» ante o-, ho-.",
    "Clasificar como compuesta una oración simple en la que «y», «o» o «pero» solo unen dos palabras o dos grupos, sin un segundo verbo conjugado.",
  ],
  ejercicios: [
    ["Cuenta las proposiciones: «Hemos estado esperando una hora y no ha venido nadie.»", "Dos: «hemos estado esperando» (perífrasis, un solo verbo) y «no ha venido nadie»."],
    ["Clasifica: «Ni estudia ni trabaja.»", "Coordinada copulativa (nexo ni… ni)."],
    ["Clasifica: «El concierto fue corto, pero intenso.»", "No es compuesta: solo hay un verbo («fue»). «Pero» une dos adjetivos dentro de una oración simple."],
    ["Clasifica: «Es políglota, es decir, habla muchos idiomas.»", "Coordinada explicativa (nexo es decir)."],
    ["Completa con pero, sino o sino que: «No lo dijo él, ___ su hermana» / «No lo leyó, ___ lo vio en la tele» / «Es tarde, ___ seguiremos».", "sino / sino que / pero."],
    ["Puntúa: «Llovía mucho sin embargo salimos a correr»", "«Llovía mucho; sin embargo, salimos a correr.»"],
    ["Escribe una yuxtapuesta con valor de causa.", "«Me voy a dormir: estoy agotado.» (= porque estoy agotado)."],
    ["Corrige: «Padres y hijos», «siete o ocho», «agua y hielo».", "«Padres e hijos» (ante hi-), «siete u ocho» (ante o-), «agua y hielo» (correcto: «hie-» suena [ye], no [i])."],
    ["Analiza: «Ya ríe, ya llora.»", "Dos proposiciones con el mismo sujeto elíptico (él/ella). Nexo correlativo ya… ya: coordinada distributiva."],
    ["Transforma en coordinada adversativa: «Tenía hambre. No comió.»", "«Tenía hambre, pero no comió.» También: «Tenía hambre; sin embargo, no comió.»"],
  ],
  quiz: [
    ["«Es decir» introduce una coordinada…", ["explicativa", "disyuntiva", "copulativa"], 0, "Aclara lo dicho."],
    ["«Unos cantan, otros bailan» es coordinada…", ["distributiva", "adversativa", "explicativa"], 0, "Reparte la acción."],
    ["¿Cuál es correcta?", ["No es rojo, sino azul.", "No es rojo, si no azul.", "No es rojo sino que azul."], 0, "Sino corrige un término negado; sin verbo, sin «que»."],
    ["«Voy a comer» tiene…", ["un verbo (perífrasis)", "dos verbos", "ningún verbo"], 0, "Ir a + infinitivo es una perífrasis."],
    ["«Siete ___ ocho»", ["u", "o", "e"], 0, "O pasa a u ante o-."],
  ],
  tarjetas: [
    ["Coordinadas explicativas", "Aclaran lo anterior: es decir, o sea, esto es."],
    ["Coordinadas distributivas", "Alternan acciones: unos… otros, ya… ya, bien… bien."],
    ["Pero / sino", "Pero: oposición parcial. Sino: corrige algo negado (sino que + verbo)."],
  ],
});
