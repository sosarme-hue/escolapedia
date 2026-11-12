// Lengua Castellana 1º de Primaria: masculino y femenino. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, parejas, frase, charla, mural, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "1-primaria",
  titulo: "Masculino y femenino",
  minutos: 20,
  objetivos: ["Distinguir palabras masculinas y femeninas", "Usar el, la, un y una con cada palabra", "Pasar palabras de masculino a femenino"],
  claves: ["masculino", "femenino", "el", "la", "un", "una"],
  pregunta: {
    texto: "¿Decimos «el mesa» o «la mesa»? ¿Y «la libro» o «el libro»? ¿Cómo lo sabes?",
    respuesta: "Decimos <b>la mesa</b> y <b>el libro</b>. «Mesa» es una palabra <mark>femenina</mark> y «libro» es <mark>masculina</mark>. ¡Lo sabes porque te suena bien!",
  },
  bloques: [
    {
      html: `<h3>Niño y niña</h3><p>Algunas palabras cambian si hablamos de un chico o de una chica.</p><p>Decimos <b>niño</b> y <b>niña</b>. <i>Niño</i> es <mark>masculino</mark>. <i>Niña</i> es <mark>femenino</mark>.</p><p>Pasa igual con <i>abuelo</i> y <i>abuela</i>. Y con <i>tío</i> y <i>tía</i>, o <i>hermano</i> y <i>hermana</i>. Solo cambia el final de la palabra. ¿Lo oyes?</p>`,
      svg: parejas("Niño es masculino y niña es femenino; abuelo y abuela también", [["nino", "niño", "nina", "niña"], ["abuelo", "abuelo", "abuela", "abuela"]], { izq: "masculino", der: "femenino" }),
    },
    {
      html: `<h3>El y la</h3><p>Delante de las palabras masculinas decimos <mark>el</mark>: <b>el</b> gato, <b>el</b> sol, <b>el</b> libro.</p><p>Delante de las femeninas decimos <mark>la</mark>: <b>la</b> casa, <b>la</b> luna, <b>la</b> flor.</p><p>¿Dudas con una palabra? Prueba con <i>el</i> y con <i>la</i>. La que suena bien es la buena. ¡Tu oído sabe mucho!</p>`,
      svg: parejas("El sol es masculino y la luna es femenino; el gato y la casa", [["sol", "el sol", "luna", "la luna"], ["gato", "el gato", "casa", "la casa"]], { izq: "masculino: el", der: "femenino: la" }),
      video: vid("ymBNQ1yrNgg", "Los sustantivos: género y número", "Happy Learning Español", 2845891, 34324),
    },
    {
      html: `<h3>Cambiamos la -o por la -a</h3><p>Muchas palabras pasan a femenino <mark>cambiando la o por la a</mark>.</p><p><b>gato</b> → <b>gata</b>. <b>perro</b> → <b>perra</b>. <b>oso</b> → <b>osa</b>.</p><p>Es el cambio más fácil y el que más usamos. Di en voz alta: <i>el mono, la mona; el pato, la pata</i>. ¿Ves qué fácil? Ahora prueba tú con <i>conejo</i>.</p>`,
      svg: parejas("Gato y gata, perro y perra, oso y osa: la o cambia por a", [["gato", "gato", "gato", "gata"], ["perro", "perro", "perro", "perra"], ["oso", "oso", "oso", "osa"]], { izq: "termina en o", der: "termina en a" }),
    },
    {
      html: `<h3>Añadimos una -a</h3><p>Otras palabras no acaban en o. Para el femenino, <mark>les añadimos una a</mark>.</p><p><b>león</b> → <b>leona</b>. <b>señor</b> → <b>señora</b>. <b>profesor</b> → <b>profesora</b>.</p><p>Fíjate: <i>león</i> lleva tilde, pero <i>leona</i> no la lleva. Al añadir la letra, la palabra suena un poco distinta. Con <i>pintor</i> pasa igual: <i>pintora</i>.</p>`,
      svg: parejas("León y leona, señor y señora, profesor y profesora: se añade una a", [["leon", "león", "leon", "leona"], ["papa", "señor", "mama", "señora"], [null, "profesor", null, "profesora"]], { izq: "masculino", der: "+ a" }),
    },
    {
      html: `<h3>Palabras muy distintas</h3><p>A veces el femenino es <mark>una palabra diferente</mark>.</p><p><b>papá</b> y <b>mamá</b>. <b>hombre</b> y <b>mujer</b>. <b>caballo</b> y <b>yegua</b>. <b>toro</b> y <b>vaca</b>.</p><p>Estas parejas hay que aprenderlas de memoria. Pero no te preocupes: muchas ya las conoces porque las usas desde pequeño. ¿Sabes otra pareja? Piensa en el gallo…</p>`,
      svg: parejas("Papá y mamá, toro y vaca: el femenino es otra palabra", [["papa", "papá", "mama", "mamá"], [null, "toro", null, "vaca"], [null, "hombre", null, "mujer"]], { izq: "masculino", der: "femenino" }),
    },
    {
      html: `<h3>Las cosas también</h3><p>Las cosas no son chicos ni chicas. Pero sus nombres también son <mark>masculinos o femeninos</mark>.</p><p><b>El</b> lápiz y <b>el</b> libro son masculinos. <b>La</b> mesa y <b>la</b> silla son femeninos.</p><p>Aquí no podemos cambiar la palabra. No existe «la lápiza». Solo miramos si va con <i>el</i> o con <i>la</i>. ¿Y la pizarra?</p>`,
      svg: dibujos("El lápiz, el libro, la mesa y la silla", [["lapiz", "el lápiz", A], ["libro", "el libro", A], ["mesa", "la mesa", R], ["silla", "la silla", R]], { titulo: "Cosas con el y con la" }),
    },
    {
      html: `<h3>Un y una</h3><p>También usamos <mark>un</mark> y <mark>una</mark>.</p><p><b>Un</b> va con palabras masculinas: <i>un gato, un coche</i>. <b>Una</b> va con palabras femeninas: <i>una gata, una pelota</i>.</p><p>Usamos <i>un</i> y <i>una</i> cuando hablamos de algo por primera vez. «He visto <b>un</b> perro. <b>El</b> perro era muy simpático.»</p>`,
      svg: parejas("Un coche y una pelota; un pato y una pata", [["coche", "un coche", "pelota", "una pelota"], ["pato", "un pato", "pato", "una pata"]], { izq: "un", der: "una" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saber si una palabra es masculina o femenina nos ayuda a <mark>hablar bien</mark>.</p><p>Las palabras de una frase deben <b>ir a juego</b>: <i>el gato blanco</i>, <i>la gata blanca</i>.</p><p>Si decimos «la gato blanco», suena raro y cuesta entenderlo. ¡Las palabras que van juntas se ponen el mismo traje! Así todo encaja.</p>`,
      svg: frase("El gato blanco y la gata blanca: las palabras van a juego", [["el", A], ["gato", A], ["blanco", A], ["/"], ["la", R], ["gata", R], ["blanca", R]], { titulo: "Las palabras van a juego", nota: "Mismo color, mismo traje", fs: 24 }),
    },
    {
      html: `<h3>Jugamos a «¿el o la?»</h3><p>Un jugador dice una palabra sin <i>el</i> ni <i>la</i>: «¡pelota!».</p><p>El otro contesta rápido: «<mark>¡la pelota!</mark>».</p><p>Luego cambiamos: «¡zapato!» «¡El zapato!». Si fallas, pierdes un punto. Podéis usar cosas de la casa, del parque o de la clase. ¡A ver quién responde más rápido!</p>`,
      svg: charla("Juego: uno dice pelota y otra contesta la pelota; uno dice zapato y otra contesta el zapato", [["nino", "¡Pelota!", A], ["nina", "¡La pelota!", R], ["nino", "¡Zapato!", A], ["nina", "¡El zapato!", R]]),
    },
  ],
  figura: {
    titulo: "Masculino y femenino",
    svg: mural("Cuatro maneras: el gato y la gata, el león y la leona, papá y mamá, el lápiz y la mesa", [["gato", "gato → gata", "o cambia por a", A], ["leon", "león → leona", "se añade a", R], ["mama", "papá → mamá", "otra palabra", V], ["mesa", "el · la", "también las cosas", N]], "Así se forma el femenino"),
  },
  video: { ...vid("WALoXHn-mW0", "¿Qué es el género y número de los sustantivos?", "FlexFlix Kids en Español", 669897, 5540), busqueda: "masculino y femenino para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuál es el femenino de «conejo»?",
      pasos: ["Mira cómo termina: conejo acaba en o.", "Cambia la o por la a.", "Di la palabra nueva: coneja."],
      resultado: "el femenino de «conejo» es «coneja»." },
    { enunciado: "¿«El» o «la» delante de «flor»?",
      pasos: ["Prueba con el: el flor.", "Prueba con la: la flor.", "La que suena bien es la flor."],
      resultado: "decimos «la flor»: es femenina." },
    { enunciado: "Pon a juego: «la casa ___ (bonito)».",
      pasos: ["Casa es femenina: va con la.", "La palabra que la acompaña también debe ser femenina.", "Bonito pasa a bonita."],
      resultado: "«la casa bonita»." },
  ],
  errores: [
    "Decir «el agua» y pensar que agua es masculina: es femenina, decimos «el agua fría».",
    "Inventar femeninos que no existen, como «la lápiza»: las cosas no cambian.",
    "Olvidar que algunas parejas son palabras distintas: el femenino de papá es mamá.",
    "No poner a juego las palabras: «el gato negra». Debe ser «el gato negro».",
  ],
  ejercicios: [
    { q: "Di el femenino de «niño».", sol: "Niña." },
    { q: "Di el femenino de «gato».", sol: "Gata." },
    { q: "Di el femenino de «león».", sol: "Leona." },
    { q: "Di el femenino de «papá».", sol: "Mamá." },
    { q: "¿«El» o «la»? ___ luna.", sol: "La luna." },
    { q: "¿«El» o «la»? ___ coche.", sol: "El coche." },
    { q: "¿«Un» o «una»? ___ manzana.", sol: "Una manzana." },
    { q: "Di el masculino de «abuela».", sol: "Abuelo." },
    { q: "Pon a juego: «la pelota ___ (rojo)».", sol: "La pelota roja." },
    { q: "Di tres cosas de tu clase con «la».", sol: "Por ejemplo: la mesa, la silla, la pizarra." },
  ],
  quiz: [
    { q: "El femenino de «perro» es…", o: ["perra", "perros", "perrito"], a: 0, e: "La o cambia por a." },
    { q: "¿Cuál va con «la»?", o: ["sol", "luna", "libro"], a: 1, e: "La luna." },
    { q: "¿Cuál va con «el»?", o: ["mesa", "flor", "coche"], a: 2, e: "El coche." },
    { q: "El femenino de «señor» es…", o: ["señora", "señoro", "señor"], a: 0, e: "Se añade una a." },
    { q: "El femenino de «toro» es…", o: ["tora", "vaca", "toros"], a: 1, e: "Es otra palabra: vaca." },
    { q: "«Un» va con palabras…", o: ["masculinas", "femeninas", "de colores"], a: 0, e: "Un gato, un coche." },
    { q: "¿Qué está bien dicho?", o: ["la gato", "el gata", "la gata"], a: 2, e: "La gata." },
    { q: "«Niña» es…", o: ["masculino", "femenino", "plural"], a: 1, e: "Femenino." },
    { q: "¿Qué está a juego?", o: ["la casa blanco", "la casa blanca", "el casa blanca"], a: 1, e: "Todo femenino." },
    { q: "El femenino de «lápiz» es…", o: ["lápiza", "no tiene: es una cosa", "lápices"], a: 1, e: "Las cosas no cambian." },
  ],
  examen: [
    { q: "El femenino de «oso» es…", o: ["osa", "osos", "osito"], a: 0, e: "osa." },
    { q: "¿Cuál es masculino?", o: ["la silla", "el zapato", "la flor"], a: 1, e: "El zapato." },
    { q: "Completa: «___ pelota»", o: ["un", "una", "el"], a: 1, e: "Una pelota." },
    { q: "El femenino de «hombre» es…", o: ["hombra", "mujer", "hombres"], a: 1, e: "Mujer." },
  ],
  feynman: ["Qué palabras son masculinas y cuáles femeninas", "Cuándo usamos el, la, un y una", "Tres formas de hacer el femenino"],
  mapa: mapa("MASCULINO Y FEMENINO", "var(--pri)", [
    ["Masculino", "el, un: el gato", A],
    ["Femenino", "la, una: la gata", R],
    ["Cambios", "o→a · +a · otra palabra", V],
    ["A juego", "la casa blanca", N],
  ], 220),
  tarjetas: [
    ["Femenino de «niño»", "Niña"],
    ["Femenino de «león»", "Leona"],
    ["Femenino de «papá»", "Mamá"],
    ["¿El o la? ___ flor", "La flor"],
    ["¿El o la? ___ sol", "El sol"],
    ["¿Un o una? ___ casa", "Una casa"],
    ["¿Masculino o femenino? «libro»", "Masculino"],
    ["A juego: «el perro ___ (blanco)»", "El perro blanco"],
  ],
  familias: [
    "Jugad a «¿el o la?» con objetos de casa mientras recogéis.",
    "Nombrad animales de la granja en pareja: gallo y gallina, toro y vaca.",
    "Al leer un cuento, buscad juntos palabras con el y con la.",
    "Si dice «el mesa», repetid la frase bien sin corregir con dureza: «Sí, la mesa».",
  ],
  profesores: PROF("Reflexión sobre la lengua: el género del nombre, los determinantes el, la, un, una y la concordancia básica de género", ["Caja misteriosa: sacar objetos y nombrarlos con el o la.", "Parejas de tarjetas masculino y femenino para emparejar.", "Mural de la granja con parejas de animales."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
