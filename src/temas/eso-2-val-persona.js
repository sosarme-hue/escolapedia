// Valores Cívicos y Éticos 2º ESO: la persona y la dignidad. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Valores Cívicos y Éticos",
  curso: C,
  titulo: "La persona y la dignidad",
  minutos: 45,
  objetivos: ["Explicar qué significa ser persona y qué es la dignidad humana", "Distinguir entre cosas que tienen precio y personas que tienen dignidad", "Reconocer la libertad, la razón y la responsabilidad como rasgos de la persona", "Identificar situaciones que respetan o vulneran la dignidad"],
  claves: ["persona", "dignidad", "autonomía", "libertad", "responsabilidad", "identidad", "ética"],
  pregunta: {
    texto: "Un móvil se puede comprar, vender o cambiar por otro mejor. ¿Se puede hacer lo mismo con una persona?",
    respuesta: "No. Las cosas tienen <b>precio</b>: se pueden sustituir por otras equivalentes. Las personas tienen <b>dignidad</b>: un valor único que no se puede comprar, vender ni sustituir. Por eso nadie puede ser tratado como un simple objeto o <mark>instrumento</mark> al servicio de otros.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una persona?</h3><p>Todos los seres humanos somos <b>personas</b>. Compartimos con otros animales el cuerpo y las necesidades biológicas, pero tenemos rasgos propios:</p><ul><li><b>Razón</b>: podemos pensar, preguntarnos el porqué de las cosas y dar argumentos.</li><li><b>Libertad</b>: podemos elegir entre distintas opciones y decidir cómo actuar.</li><li><b>Conciencia moral</b>: distinguimos lo que está bien y lo que está mal.</li><li><b>Sociabilidad</b>: vivimos con otros y nos hacemos personas en relación con ellos.</li><li><b>Lenguaje</b> y cultura: transmitimos ideas, valores y conocimientos.</li></ul><p>La disciplina que reflexiona sobre cómo debemos actuar se llama <b>ética</b>.</p>`,
      video: { id: "sQ_DWG34UOE", titulo: "¿Qué es la ética?", canal: "Flex Flix Teens en Español", vistas: 1702956 },
    },
    {
      html: `<h3>La dignidad humana</h3><p>La <b>dignidad</b> es el valor que tiene toda persona <mark>por el simple hecho de serlo</mark>. No depende de su edad, sexo, origen, dinero, inteligencia, aspecto o forma de pensar.</p><p>El filósofo <b>Immanuel Kant</b> (siglo XVIII) lo explicó así: en el mundo, todo tiene o un <b>precio</b> o una <b>dignidad</b>. Lo que tiene precio puede ser sustituido por otra cosa equivalente; lo que tiene dignidad no tiene equivalente. Por eso propuso tratar siempre a las personas <b>como fines</b> y nunca solo como medios.</p>`,
      svg: svg("Balanza: a un lado las cosas con precio, que se pueden sustituir; al otro, la persona con dignidad, que no tiene equivalente", `<path d="M130 30 V 140 M90 150 H 170" stroke="var(--ink)" stroke-width="3"/><path d="M50 50 H 210" stroke="var(--ink)" stroke-width="3"/><path d="M50 50 L 30 90 H 70 Z M210 50 L 190 90 H 230 Z" fill="none" stroke="var(--muted)" stroke-width="1.5"/>
        <rect x="38" y="70" width="12" height="18" rx="2" fill="var(--sun)"/><circle cx="60" cy="80" r="7" fill="var(--sun)" fill-opacity=".6"/>${persona(210, 58, "var(--red)", { piernas: [[-6, 0], [6, 0]], brazos: [[-8, 6], [8, 6]] })}
        ${t(50, 110, "precio", { c: "var(--sun)", s: 13 })}${t(50, 126, "sustituible", { c: "var(--muted)", s: 10 })}${t(210, 110, "dignidad", { c: "var(--red)", s: 13 })}${t(210, 126, "sin equivalente", { c: "var(--muted)", s: 10 })}`),
      video: { id: "XNTGr-15yeo", titulo: "¿Qué es la dignidad humana?", canal: "Flex Flix Teens en Español", vistas: 213588 },
    },
    {
      html: `<h3>La dignidad en las leyes</h3><p>La idea de dignidad está en la base de las normas más importantes:</p><ul><li>La <b>Declaración Universal de Derechos Humanos</b> (1948) empieza diciendo: «Todos los seres humanos nacen libres e iguales en <b>dignidad</b> y derechos».</li><li>La <b>Constitución española</b> (1978), en su artículo 10, afirma que «la dignidad de la persona, los derechos inviolables que le son inherentes [...] son fundamento del orden político y de la paz social».</li></ul><p>Esto significa que los derechos no se «ganan» portándose bien: se tienen por ser persona.</p>`,
    },
    {
      html: `<h3>Libertad y responsabilidad</h3><p>Ser libres no significa hacer lo que nos dé la gana sin pensar. La <b>libertad</b> va siempre unida a la <b>responsabilidad</b>: responder de las consecuencias de lo que hacemos.</p><ul><li>Si decido no estudiar, asumo las consecuencias en el examen.</li><li>Si comparto una foto de alguien sin permiso, soy responsable del daño que pueda causar.</li></ul><p>La <b>autonomía</b> moral es la capacidad de darse normas a uno mismo pensando por cuenta propia, en lugar de actuar solo por miedo al castigo o por presión del grupo (<b>heteronomía</b>). Crecer como persona es ir ganando autonomía.</p>`,
      svg: svg("Autonomía frente a heteronomía: decidir por razones propias o por presión externa", `<rect x="14" y="30" width="110" height="110" rx="12" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)"/><rect x="136" y="30" width="110" height="110" rx="12" fill="var(--red)" fill-opacity=".1" stroke="var(--red)"/>
        ${t(69, 54, "Autonomía", { c: "var(--leaf)", s: 13 })}${t(69, 80, "pienso por mí", { s: 11 })}${t(69, 98, "doy razones", { s: 11 })}${t(69, 116, "asumo lo que hago", { s: 11 })}${t(191, 54, "Heteronomía", { c: "var(--red)", s: 13 })}${t(191, 80, "miedo al castigo", { s: 11 })}${t(191, 98, "presión del grupo", { s: 11 })}${t(191, 116, "«me lo mandan»", { s: 11 })}${t(130, 164, "crecer es ganar autonomía", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>La identidad personal</h3><p>Cada persona es <b>única</b>. Nuestra <b>identidad</b> se construye con:</p>${tabla(["Elemento", "Ejemplos"], [["Lo que heredamos", "rasgos físicos, temperamento"], ["Nuestra historia", "experiencias, recuerdos, logros y errores"], ["Nuestras relaciones", "familia, amistades, grupo de clase"], ["Nuestras elecciones", "aficiones, valores, proyectos"], ["Nuestra cultura", "lengua, costumbres, tradiciones"]])}<p>En la adolescencia la identidad cambia mucho: es normal tener dudas sobre quién eres y qué quieres. Una buena <mark>autoestima</mark> (valorarse de forma realista y positiva) ayuda a tomar decisiones propias.</p>`,
    },
    {
      html: `<h3>Respetar y vulnerar la dignidad</h3><p>Se <b>respeta</b> la dignidad cuando tratamos a los demás como personas valiosas: escuchar, incluir, pedir permiso, reconocer sus derechos. Se <b>vulnera</b> cuando se trata a alguien como un objeto o como inferior:</p><ul><li>Acoso escolar, insultos, humillaciones.</li><li>Discriminar por origen, sexo, discapacidad u orientación.</li><li>Explotación laboral o trabajo infantil.</li><li>Difundir imágenes íntimas de alguien.</li><li>Esclavitud y trata de personas.</li></ul><p>La dignidad no se pierde aunque alguien la vulnere: por eso las víctimas tienen derecho a ser protegidas y reparadas.</p>`,
      svg: svg("Dos columnas: acciones que respetan la dignidad y acciones que la vulneran", chips([["Respeta", "escuchar · incluir · pedir permiso", "var(--leaf)"], ["Respeta", "reconocer derechos · ayudar", "var(--leaf)"], ["Vulnera", "acoso · humillar · discriminar", "var(--red)"], ["Vulnera", "explotar · difundir imágenes sin permiso", "var(--red)"]], 8, 36), 180),
    },
    {
      html: `<h3>La ética y la moral</h3><p>A menudo se usan como sinónimos, pero se pueden distinguir:</p><ul><li>La <b>moral</b> es el conjunto de normas y costumbres sobre el bien y el mal que sigue una persona o una sociedad.</li><li>La <b>ética</b> es la reflexión racional sobre esas normas: se pregunta <b>por qué</b> algo está bien o mal y busca razones que valgan para todos.</li></ul><p>Por ejemplo, la moral de un grupo puede decir «no se chiva a un compañero». La ética se pregunta: ¿y si ese compañero está haciendo daño a otro? ¿Qué es más importante, la lealtad al grupo o la dignidad de la víctima?</p>`,
    },
    {
      html: `<h3>Pensar un dilema</h3><p>Un <b>dilema moral</b> es una situación en la que hay que elegir entre dos opciones y ambas tienen razones a favor y en contra. Para pensarlo bien:</p><ol><li>Describe la situación y a las personas afectadas.</li><li>Busca las opciones posibles (a veces hay más de dos).</li><li>Piensa las consecuencias de cada una.</li><li>Pregúntate qué opción respeta mejor la <b>dignidad</b> de todos.</li><li>Decide y explica tus razones.</li></ol>`,
    },
  ],
  figura: {
    titulo: "La persona y la dignidad",
    svg: filas("Resumen: rasgos de la persona, dignidad, leyes, libertad y responsabilidad, identidad y ética", [["Persona", "razón · libertad · conciencia · sociabilidad", "var(--pen)"], ["Dignidad", "valor de toda persona, sin precio", "var(--red)"], ["Leyes", "DUDH art. 1 · Constitución art. 10", "var(--sun)"], ["Libertad", "siempre con responsabilidad", "var(--leaf)"], ["Autonomía", "pensar por uno mismo", "var(--inf)"], ["Ética", "reflexión sobre la moral", "var(--ink)"]], 200),
  },
  video: { id: "XNTGr-15yeo", titulo: "¿Qué es la dignidad humana?", canal: "Flex Flix Teens en Español", vistas: 213588, megusta: 0, busqueda: "qué es la dignidad humana" },
  quiz: mezcla([
    { q: "La dignidad es el valor que tiene toda persona…", o: ["por el hecho de ser persona", "si tiene dinero", "si se porta bien"], a: 0, e: "No depende de nada más." },
    { q: "Según Kant, las cosas tienen…", o: ["precio", "dignidad", "derechos"], a: 0, e: "Se pueden sustituir." },
    { q: "Kant propone tratar a las personas siempre como…", o: ["fines", "medios", "objetos"], a: 0, e: "Nunca solo como medios." },
    { q: "La libertad va unida a la…", o: ["responsabilidad", "obediencia ciega", "suerte"], a: 0, e: "Responder de lo que hacemos." },
    { q: "Actuar solo por miedo al castigo es…", o: ["heteronomía", "autonomía", "dignidad"], a: 0, e: "La norma viene de fuera." },
    { q: "La reflexión racional sobre la moral se llama…", o: ["ética", "economía", "estética"], a: 0, e: "Pregunta por qué." },
    { q: "El artículo 1 de la DUDH dice que nacemos libres e iguales en…", o: ["dignidad y derechos", "dinero", "fuerza"], a: 0, e: "1948." },
    { q: "La Constitución española habla de la dignidad en el artículo…", o: ["10", "1", "155"], a: 0, e: "Fundamento del orden político." },
    { q: "Difundir una foto íntima de alguien…", o: ["vulnera su dignidad", "es una broma sin importancia", "es legal siempre"], a: 0, e: "Lo trata como objeto." },
    { q: "Una situación con dos opciones que tienen razones a favor y en contra es un…", o: ["dilema moral", "derecho", "deber"], a: 0, e: "Hay que razonar." },
  ]),
  examen: mezcla([
    { q: "¿Pierde la dignidad una persona que ha cometido un delito?", o: ["no, la dignidad no se pierde", "sí, siempre", "solo si es grave"], a: 0, e: "Por eso tiene derechos en el juicio." },
    { q: "La autoestima es…", o: ["valorarse de forma realista y positiva", "creerse superior", "despreciarse"], a: 0, e: "Ayuda a decidir." },
    { q: "La moral de un grupo y la ética se diferencian en que la ética…", o: ["busca razones válidas para todos", "es una costumbre", "no piensa"], a: 0, e: "Reflexión racional." },
  ]),
  feynman: ["Qué rasgos tiene una persona", "Qué es la dignidad y la diferencia entre precio y dignidad", "Dónde aparece la dignidad en las leyes", "Libertad, responsabilidad y autonomía", "Diferencia entre ética y moral"],
  mapa: mapa("PERSONA Y DIGNIDAD", "var(--eso)", [
    ["Persona", "razón · libertad", "var(--pen)"],
    ["Dignidad", "valor sin precio", "var(--red)"],
    ["Autonomía", "responsabilidad", "var(--leaf)"],
    ["Ética", "reflexión moral", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Persona", "Ser humano con razón, libertad y conciencia moral."],
    ["Dignidad", "Valor de toda persona por el hecho de serlo."],
    ["Precio", "Valor de lo que se puede sustituir por otra cosa."],
    ["Autonomía", "Darse normas a uno mismo pensando por cuenta propia."],
    ["Heteronomía", "Seguir normas solo por presión o miedo."],
    ["Responsabilidad", "Responder de las consecuencias de nuestros actos."],
    ["Moral", "Normas y costumbres sobre el bien y el mal."],
    ["Ética", "Reflexión racional sobre la moral."],
  ],
  familias: ["Hablad de una noticia en la que se respete o se vulnere la dignidad de alguien.", "Comentad una decisión familiar explicando sus razones.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Autoconocimiento y autonomía moral: la naturaleza humana y la identidad personal; la dignidad humana; libertad y responsabilidad; la ética como guía de nuestras acciones (RD 217/2022, Educación en Valores Cívicos y Éticos, bloque A).",
    ideas: ["Debate a partir de la frase de Kant sobre precio y dignidad.", "Mural «Mi identidad»: lo heredado, lo vivido y lo elegido.", "Análisis de un dilema moral en pequeños grupos."],
  },
  fuentes: [RD, { t: "Declaración Universal de Derechos Humanos (ONU)", url: "https://www.un.org/es/about-us/universal-declaration-of-human-rights" }, { t: "Constitución española (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Una empresa de ropa paga a niños de 10 años para coser camisetas porque es más barato. Analízalo.", pasos: ["Se trata a los niños como medios para ganar dinero.", "Se vulneran su derecho a la educación y a la salud.", "Atenta contra su dignidad."], resultado: "Es inaceptable: trata a personas como instrumentos." },
    { enunciado: "Marta no copia en el examen solo porque el profesor está mirando. ¿Es una conducta autónoma?", pasos: ["Actúa por miedo a ser descubierta.", "La norma viene de fuera, no de su reflexión."], resultado: "Es heteronomía; sería autónoma si no copiara por convicción." },
    { enunciado: "Tu grupo quiere excluir a un compañero del trabajo «porque es raro». ¿Qué haces?", pasos: ["Personas afectadas: el compañero y el grupo.", "Opciones: callar, aceptar o proponer incluirlo.", "Excluirlo por ser diferente no respeta su dignidad."], resultado: "Proponer incluirlo y explicar por qué." },
  ],
  errores: [
    "Pensar que la dignidad se gana o se pierde según el comportamiento.",
    "Confundir libertad con hacer lo que uno quiera sin consecuencias.",
    "Creer que ética y moral son exactamente lo mismo.",
    "Pensar que tratar mal a alguien «en broma» no vulnera su dignidad.",
    "Confundir autoestima con creerse superior a los demás.",
  ],
  ejercicios: [
    { q: "Escribe cuatro rasgos propios de la persona.", sol: "Razón, libertad, conciencia moral y sociabilidad (o lenguaje)." },
    { q: "Define dignidad con tus palabras.", sol: "El valor que tiene toda persona por el hecho de serlo." },
    { q: "Explica la diferencia entre precio y dignidad según Kant.", sol: "Lo que tiene precio se puede sustituir; lo que tiene dignidad no tiene equivalente." },
    { q: "Copia el artículo 1 de la DUDH.", sol: "«Todos los seres humanos nacen libres e iguales en dignidad y derechos...»" },
    { q: "¿Por qué libertad y responsabilidad van unidas?", sol: "Porque al elegir debemos responder de las consecuencias." },
    { q: "Diferencia autonomía y heteronomía con un ejemplo.", sol: "Autonomía: no copio porque creo que es injusto. Heteronomía: no copio por miedo a que me pillen." },
    { q: "Escribe tres situaciones que vulneran la dignidad.", sol: "Acoso, discriminación, explotación infantil." },
    { q: "¿Qué elementos forman la identidad personal?", sol: "Herencia, historia, relaciones, elecciones y cultura." },
    { q: "Diferencia ética y moral.", sol: "Moral: normas que se siguen. Ética: reflexión sobre por qué son buenas o malas." },
    { q: "Inventa un dilema moral y resuélvelo con los cinco pasos.", sol: "Respuesta abierta." },
  ],
};
