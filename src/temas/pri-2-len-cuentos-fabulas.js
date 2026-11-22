// Lengua Castellana 2º de Primaria: cuentos y fábulas. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, parejas } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "2-primaria",
  titulo: "Cuentos y fábulas",
  minutos: 25,
  objetivos: ["Reconocer las partes de un cuento: inicio, nudo y desenlace", "Saber qué es una fábula y encontrar su moraleja", "Contar un cuento corto en orden"],
  claves: ["cuento", "personaje", "inicio", "nudo", "desenlace", "fábula", "moraleja"],
  pregunta: {
    texto: "En la carrera de la liebre y la tortuga, ¿quién gana? ¿Qué aprendemos de esa historia?",
    respuesta: "Gana la <b>tortuga</b>, que no para. Aprendemos que <mark>con constancia se llega lejos</mark>. Esa enseñanza se llama <b>moraleja</b>, y la historia es una <b>fábula</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un cuento?</h3><p>Un <mark>cuento</mark> es una historia corta e <b>inventada</b>.</p><p>Muchos empiezan con «<i>Érase una vez</i>» o «<i>Había una vez</i>». Y terminan con «<i>colorín colorado, este cuento se ha acabado</i>».</p><p>En los cuentos puede pasar de todo: animales que hablan, brujas, gigantes, castillos… ¡La imaginación no tiene límites!</p>`,
      svg: frase("Érase una vez… y colorín colorado, este cuento se ha acabado", [["Érase una vez…", A], ["/"], ["colorín colorado,", R], ["/"], ["este cuento se ha acabado", R]], { titulo: "Así empiezan y terminan", fs: 22 }),
      video: V("cueV", "el cuento y sus partes para niños"),
    },
    {
      html: `<h3>Los personajes</h3><p>Los <mark>personajes</mark> son quienes aparecen en el cuento. Pueden ser personas, animales o seres mágicos.</p><p>El <b>protagonista</b> es el más importante: a él le pasa la aventura. Caperucita es la protagonista de su cuento.</p><p>A veces hay un personaje que causa problemas, como el <b>lobo</b>. ¡Y otros que ayudan, como el cazador!</p>`,
      svg: dibujos("Personajes: Caperucita, el lobo y la abuela", [["nina", "Caperucita", R], ["lobo", "lobo", K], ["abuela", "abuela", A]], { titulo: "¿Quién sale en el cuento?", nota: "La protagonista es Caperucita" }),
    },
    {
      html: `<h3>Dónde y cuándo</h3><p>Todo cuento pasa en un <mark>lugar</mark> y en un <mark>tiempo</mark>.</p><p>El lugar puede ser un bosque, un castillo, el mar o una ciudad. El tiempo puede ser «hace mucho tiempo», «una noche de invierno» o «un día de sol».</p><p>Al leer, pregúntate: <b>¿dónde pasa?</b> y <b>¿cuándo pasa?</b> Así imaginas mejor la historia.</p>`,
      svg: dibujos("Lugares de cuento: un bosque, un castillo y el mar; de noche", [["arbol", "bosque", Ve], ["torre", "castillo", A], ["barco", "mar", N], ["luna", "de noche", M]], { titulo: "¿Dónde y cuándo?" }),
    },
    {
      html: `<h3>Las tres partes</h3><p>Los cuentos tienen <mark>tres partes</mark>.</p><p><b>Inicio</b>: se presentan los personajes y el lugar. <i>Había una vez una niña…</i></p><p><b>Nudo</b>: aparece un problema. <i>El lobo engañó a Caperucita…</i></p><p><b>Desenlace</b>: el problema se resuelve y termina la historia. <i>El cazador las salvó.</i></p>`,
      svg: lista("Inicio: se presentan; nudo: el problema; desenlace: se resuelve", [["Inicio: quién y dónde", Ve], ["Nudo: el problema", R], ["Desenlace: cómo acaba", A]], { titulo: "Las partes del cuento", marca: "n" }),
    },
    {
      html: `<h3>¿Qué es una fábula?</h3><p>Una <mark>fábula</mark> es un cuento corto con una <b>enseñanza</b>.</p><p>Sus personajes suelen ser <b>animales</b> que hablan y se comportan como personas: una zorra lista, una hormiga trabajadora, un león orgulloso.</p><p>Hace muchos siglos, un señor llamado <b>Esopo</b> escribió muchas fábulas. ¡Todavía las contamos hoy!</p>`,
      svg: dibujos("Animales de fábula: la tortuga, el león, la hormiga y el ratón", [["tortuga", "tortuga", Ve], ["leon", "león", M], ["hormiga", "hormiga", K], ["raton", "ratón", A]], { titulo: "Animales que hablan", nota: "Las fábulas enseñan algo" }),
      video: V("cueB"),
    },
    {
      html: `<h3>La moraleja</h3><p>La enseñanza de la fábula se llama <mark>moraleja</mark>. Suele estar al final.</p><p>En <i>El león y el ratón</i>, un ratón pequeño salva al gran león. Moraleja: <b>todos podemos ayudar, aunque seamos pequeños</b>.</p><p>En <i>La cigarra y la hormiga</i>, la hormiga guarda comida para el invierno. Moraleja: <b>hay que prepararse antes</b>.</p>`,
      svg: parejas("El león y el ratón: todos podemos ayudar; la cigarra y la hormiga: hay que prepararse", [["leon", "el león", "raton", "el ratón"], [null, "Moraleja:", null, "todos ayudan"]], { titulo: "El león y el ratón", color: M, color2: A, flecha: "+" }),
      video: V("cueB2"),
    },
    {
      html: `<h3>Contamos en orden</h3><p>Para contar un cuento, usa <mark>palabras de orden</mark>.</p><p><b>Primero</b>… <b>Después</b>… <b>Entonces</b>… <b>Al final</b>…</p><p>«Primero, la liebre corrió mucho. Después, se durmió bajo un árbol. Entonces, la tortuga la adelantó. Al final, ganó la tortuga.» ¡Así nadie se pierde!</p>`,
      svg: lista("Primero la liebre corre, después se duerme, entonces la tortuga adelanta, al final gana la tortuga", [["Primero: la liebre corre", A], ["Después: se duerme", N], ["Entonces: pasa la tortuga", Ve], ["Al final: ¡gana la tortuga!", R]], { titulo: "La liebre y la tortuga", marca: "n" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los cuentos nos <mark>hacen imaginar</mark>, reír y emocionarnos.</p><p>Las fábulas nos ayudan a <b>pensar</b> cómo portarnos: ser constantes, ayudar a los demás, no presumir.</p><p>Además, al leer cuentos aprendes palabras nuevas. ¡Y al contarlos, hablas mejor y en orden!</p>`,
      svg: charla("Un niño dice que la fábula le gustó y la niña pregunta qué aprendió: hay que ayudar", [["nino", "¡Qué fábula tan chula!", A], ["nina", "¿Qué aprendiste?", R], ["nino", "Que todos ayudamos.", A], ["nina", "¡Esa es la moraleja!", R]]),
    },
    {
      html: `<h3>Inventa tu fábula</h3><p>¡Ahora te toca a ti! Sigue estos <mark>pasos</mark>.</p><p><b>1.</b> Elige dos animales: un gato y un pez. <b>2.</b> Piensa un problema: el gato quiere comerse al pez. <b>3.</b> Piensa cómo se resuelve: se hacen amigos.</p><p><b>4.</b> Escribe la moraleja: «Es mejor tener amigos que enemigos». ¡Ya tienes tu fábula!</p>`,
      svg: lista("Inventa tu fábula: elige animales, un problema, cómo se resuelve y la moraleja", [["Elige dos animales", Ve], ["Piensa un problema", R], ["¿Cómo se resuelve?", A], ["Escribe la moraleja", N]], { titulo: "Mi fábula", marca: "n" }),
    },
  ],
  figura: {
    titulo: "Cuentos y fábulas",
    svg: mural("El cuento tiene inicio, nudo y desenlace; la fábula tiene animales y una moraleja", [["libro", "inicio", "quién, dónde, cuándo", Ve], ["lobo", "nudo", "aparece un problema", R], ["feliz", "desenlace", "se resuelve", A], ["tortuga", "fábula", "animales + moraleja", N]], "Érase una vez… colorín colorado, este cuento se ha acabado"),
  },
  video: V("cueV", "el cuento y sus partes para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuál es el nudo de «Los tres cerditos»?",
      pasos: ["Inicio: tres cerditos construyen sus casas.", "¿Qué problema aparece?", "El lobo sopla y derriba las casas."],
      resultado: "el nudo es cuando el lobo derriba las casas de paja y de madera." },
    { enunciado: "¿Qué moraleja tiene «La liebre y la tortuga»?",
      pasos: ["La liebre era rápida pero se durmió.", "La tortuga era lenta pero no paró.", "¿Qué nos enseña?"],
      resultado: "con constancia se llega a la meta; no hay que presumir." },
    { enunciado: "¿«La cigarra y la hormiga» es cuento o fábula?",
      pasos: ["¿Los personajes son animales que hablan? Sí.", "¿Nos enseña algo? Sí: prepararse.", "Tiene moraleja."],
      resultado: "es una fábula." },
  ],
  errores: [
    "Contar el cuento desordenado: usa primero, después, al final.",
    "Confundir el nudo con el inicio: el nudo es cuando aparece el problema.",
    "Pensar que toda historia con animales es una fábula: necesita una moraleja.",
    "Olvidar decir dónde y cuándo pasa la historia.",
  ],
  ejercicios: [
    { q: "¿Cómo empiezan muchos cuentos?", sol: "Érase una vez, Había una vez." },
    { q: "Di las tres partes de un cuento.", sol: "Inicio, nudo y desenlace." },
    { q: "¿Quién es la protagonista de Caperucita Roja?", sol: "Caperucita." },
    { q: "¿Dónde pasa Caperucita Roja?", sol: "En un bosque y en casa de la abuela." },
    { q: "¿Qué es una moraleja?", sol: "La enseñanza de una fábula." },
    { q: "¿Quién escribió muchas fábulas hace siglos?", sol: "Esopo." },
    { q: "¿Qué nos enseña «El león y el ratón»?", sol: "Que todos podemos ayudar, aunque seamos pequeños." },
    { q: "Ordena: al final / primero / después.", sol: "primero, después, al final." },
    { q: "Cuenta tu cuento favorito en tres frases.", sol: "Respuesta libre: una frase para el inicio, otra para el nudo y otra para el desenlace." },
    { q: "Inventa una moraleja.", sol: "Por ejemplo: «Compartir nos hace más felices»." },
  ],
  quiz: [
    { q: "Un cuento es una historia…", o: ["corta e inventada", "de verdad siempre", "sin personajes"], a: 0, e: "Corta e inventada." },
    { q: "La parte donde aparece el problema es el…", o: ["inicio", "nudo", "desenlace"], a: 1, e: "Nudo." },
    { q: "La parte donde se resuelve es el…", o: ["inicio", "nudo", "desenlace"], a: 2, e: "Desenlace." },
    { q: "El personaje más importante es el…", o: ["protagonista", "lugar", "título"], a: 0, e: "Protagonista." },
    { q: "Una fábula siempre tiene…", o: ["moraleja", "brujas", "rimas"], a: 0, e: "Una enseñanza." },
    { q: "Los personajes de las fábulas suelen ser…", o: ["animales", "coches", "números"], a: 0, e: "Animales que hablan." },
    { q: "¿Quién gana en «La liebre y la tortuga»?", o: ["la liebre", "la tortuga", "nadie"], a: 1, e: "La tortuga." },
    { q: "¿Qué palabra sirve para ordenar?", o: ["después", "azul", "mesa"], a: 0, e: "Primero, después, al final." },
    { q: "«Colorín colorado…» va al…", o: ["principio", "final", "medio"], a: 1, e: "Al final." },
    { q: "Esopo escribió…", o: ["fábulas", "canciones", "recetas"], a: 0, e: "Fábulas." },
  ],
  examen: [
    { q: "En el inicio se presentan…", o: ["los personajes y el lugar", "la moraleja", "el final"], a: 0, e: "Quién y dónde." },
    { q: "La moraleja de la cigarra y la hormiga:", o: ["hay que prepararse", "hay que cantar siempre", "las hormigas vuelan"], a: 0, e: "Prepararse antes." },
    { q: "¿Cuál es una fábula?", o: ["El león y el ratón", "Una receta", "Un poema de la luna"], a: 0, e: "Animales y moraleja." },
    { q: "¿Qué parte va primero?", o: ["desenlace", "nudo", "inicio"], a: 2, e: "Inicio." },
  ],
  feynman: ["Cuáles son las partes de un cuento", "Qué es una fábula y qué es la moraleja", "Cómo se cuenta una historia en orden"],
  mapa: mapa("CUENTOS Y FÁBULAS", "var(--pri)", [
    ["Cuento", "historia corta e inventada", A],
    ["Partes", "inicio, nudo, desenlace", R],
    ["Fábula", "animales que hablan", Ve],
    ["Moraleja", "la enseñanza", N],
  ], 230),
  tarjetas: [
    ["¿Qué es un cuento?", "Una historia corta e inventada"],
    ["Partes del cuento", "Inicio, nudo y desenlace"],
    ["¿Qué pasa en el nudo?", "Aparece un problema"],
    ["¿Qué pasa en el desenlace?", "Se resuelve el problema"],
    ["¿Qué es una fábula?", "Un cuento corto con enseñanza"],
    ["¿Qué es la moraleja?", "La enseñanza de la fábula"],
    ["¿Quién escribió fábulas?", "Esopo"],
    ["Palabras para ordenar", "Primero, después, al final"],
  ],
  familias: [
    "Leed un cuento cada noche y preguntad: ¿cuál fue el problema?",
    "Pedidle que os cuente el cuento usando primero, después y al final.",
    "Leed una fábula y buscad juntos la moraleja.",
    "Inventad una fábula entre todos con dos animales de casa o del parque.",
  ],
  profesores: PROF("Educación literaria: lectura y escucha de cuentos y fábulas, estructura narrativa (inicio, nudo y desenlace), personajes, espacio y tiempo, y la moraleja", ["Tira cómica de tres viñetas: inicio, nudo y desenlace.", "Rincón de fábulas de Esopo con marionetas.", "Escritura colectiva de una fábula con moraleja."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Distinguir protagonista, ayudantes y antagonista", "Conocer las fórmulas de inicio y final de los cuentos", "Conocer a Esopo y fábulas famosas", "Contar un cuento en voz alta con expresión"],
  lectura: { titulo: "El león y el ratón", html: `<p>Un león dormía la siesta a la sombra de un árbol. De pronto, un ratoncito despistado le pasó corriendo por encima del hocico.</p><p>El león se despertó de mal humor y atrapó al ratón con su enorme garra.</p><p>—¡Perdóname, por favor! —suplicó el ratón—. Si me dejas libre, algún día te ayudaré.</p><p>El león soltó una carcajada. ¿Cómo iba a ayudarle a él, el rey de la selva, un animal tan pequeño? Pero le hizo gracia y lo dejó marchar.</p><p>Unos días después, el león cayó en la red de unos cazadores. Rugía y rugía, pero no conseguía escapar.</p><p>El ratón oyó los rugidos y corrió hacia allí. Con sus dientes afilados, mordió las cuerdas una a una hasta que el león quedó libre.</p><p>—¿Ves? —dijo el ratón—. Hasta el más pequeño puede ayudar al más grande.</p><p><b>Moraleja</b>: no desprecies a nadie por ser pequeño.</p>` },
  tras: {
    "Los personajes": [
      ["Protagonista, ayudantes y antagonista", `<p>En los cuentos, los personajes tienen distintos <mark>papeles</mark>:</p><ul><li>El <b>protagonista</b> es el personaje principal. La historia trata de él. Por ejemplo, Caperucita Roja.</li><li>El <b>antagonista</b> es el que le pone las cosas difíciles al protagonista. Por ejemplo, el lobo.</li><li>Los <b>ayudantes</b> echan una mano al protagonista. Por ejemplo, el leñador que salva a Caperucita.</li><li>Los <b>personajes secundarios</b> aparecen poco, como la mamá de Caperucita.</li></ul><p>No todos los antagonistas son malvados: a veces son un problema, como una tormenta o un río que hay que cruzar.</p><p>En la lectura del león y el ratón, ¿quién ayuda a quién? ¡El ratón, que parecía el más débil, es el ayudante del león!</p><p><b>Actividad</b>: elige un cuento y di quién es el protagonista, el antagonista y el ayudante.</p>`,
        L6.filas("Caperucita", [["protagonista", "Caperucita", cRO], ["antagonista", "el lobo", cMO], ["ayudante", "el leñador", cVE], ["secundario", "la mamá", cAZ]])],
    ],
    "Las tres partes": [
      ["Fórmulas para empezar y acabar", `<p>Muchos cuentos empiezan y terminan con frases que se repiten. Se llaman <mark>fórmulas</mark>.</p><p>Fórmulas de <b>inicio</b>:</p><ul><li>«Érase una vez…»</li><li>«Había una vez…»</li><li>«Hace mucho, mucho tiempo, en un país muy lejano…»</li></ul><p>Fórmulas de <b>final</b>:</p><ul><li>«…y vivieron felices y comieron perdices».</li><li>«…y colorín colorado, este cuento se ha acabado».</li><li>«…y fueron felices para siempre».</li></ul><p>Estas frases avisan al que escucha: «¡Empieza un cuento!» o «¡Ya ha terminado!». Por eso se usan desde hace cientos de años, cuando los cuentos se contaban de memoria junto al fuego.</p><p><b>Actividad</b>: pregunta a tus abuelos qué fórmulas usaban ellos para empezar y terminar los cuentos.</p>`,
        H6.dos("Fórmulas", ["INICIO", ["Érase una vez", "Había una vez", "Hace mucho…"], cAZ], ["FINAL", ["colorín colorado", "comieron perdices", "felices"], cVE]),
        ["B-Gt430Y-GY", "El cuento y sus partes explicado fácil (inicio, nudo y desenlace)", "Te Lo Explico", 425849]],
    ],
    "¿Qué es una fábula?": [
      ["Esopo y otros fabulistas", `<p>Las fábulas son muy, muy antiguas. El fabulista más famoso fue <mark>Esopo</mark>, que vivió en Grecia hace más de 2500 años. Se dice que era un esclavo muy listo que contaba historias de animales.</p><p>Algunas fábulas de Esopo:</p><ul><li><b>La liebre y la tortuga</b>: la tortuga, lenta pero constante, gana la carrera.</li><li><b>La cigarra y la hormiga</b>: la hormiga trabaja en verano y la cigarra no.</li><li><b>El león y el ratón</b>: la de nuestra lectura.</li><li><b>El pastor mentiroso</b>: un niño grita «¡que viene el lobo!» tantas veces en broma que, cuando es verdad, nadie le cree.</li></ul><p>En España hubo dos fabulistas famosos que escribieron fábulas en verso: <b>Samaniego</b> e <b>Iriarte</b>.</p><p><b>Actividad</b>: escucha la fábula de la liebre y la tortuga y dibuja el final de la carrera.</p>`,
        L6.filas("Esopo", [["liebre", "y tortuga", cVE], ["cigarra", "y hormiga", cNA], ["león", "y ratón", cAZ], ["pastor", "mentiroso", cRO]]),
        ["ZQrYlI97J24", "El León y el Ratón - Cuentos infantiles", "Cuentos y Canciones Infantiles", 15248160]],
    ],
    "Contamos en orden": [
      ["Contar en voz alta", `<p>Contar un cuento en <mark>voz alta</mark> es un arte. Los buenos cuentacuentos usan estos trucos:</p><ul><li><b>Voz</b>: cambian la voz para cada personaje. El león habla grave y fuerte; el ratón, agudo y bajito.</li><li><b>Velocidad</b>: van despacio en los momentos de misterio y más rápido en la aventura.</li><li><b>Pausas</b>: se callan un momento antes de algo importante para crear emoción.</li><li><b>Gestos</b>: mueven las manos y la cara para mostrar miedo, alegría o sorpresa.</li><li><b>Mirada</b>: miran al público, no solo al papel.</li></ul><p>Antes de contar, conviene <b>leer el cuento varias veces</b> para conocerlo bien. No hace falta saberlo de memoria palabra por palabra: basta con recordar el orden de lo que pasa.</p><p><b>Actividad</b>: cuenta la fábula del león y el ratón a tu familia, con una voz distinta para cada animal.</p>`,
        H6.rueda("Contar", "VOZ", [["velocidad", cAZ], ["pausas", cNA], ["gestos", cVE], ["mirada", cRO]])],
    ],
  },
  final: [
    ["Cuentos de todo el mundo", `<p>En todos los países se cuentan <mark>cuentos</mark>. Muchos se parecen, porque los viajeros los llevaban de un lugar a otro.</p><ul><li>De Alemania son los <b>hermanos Grimm</b>, que recogieron Blancanieves, Hansel y Gretel o Caperucita Roja.</li><li>De Dinamarca es <b>Hans Christian Andersen</b>, que escribió El patito feo y La sirenita.</li><li>De Francia es <b>Charles Perrault</b>, que escribió Cenicienta y El gato con botas.</li><li>De Oriente llegan los cuentos de <b>Las mil y una noches</b>, como Aladino o Alí Babá.</li><li>De España son cuentos populares como <b>Garbancito</b> o La ratita presumida.</li></ul><p>¿Sabías que Cenicienta tiene versiones en China, en Egipto y en muchos otros lugares? Cada pueblo la cuenta a su manera.</p><p><b>Actividad</b>: pregunta en casa por un cuento de tu familia o de otro país y cuéntalo en clase.</p>`,
      L6.filas("Autores", [["Grimm", "Alemania", cAZ], ["Andersen", "Dinamarca", cRO], ["Perrault", "Francia", cVE], ["Garbancito", "España", cNA]])],
    ["Repaso: el león y el ratón", `<p>Repasamos con la <mark>fábula</mark> de nuestra lectura:</p><ul><li>¿Es un cuento o una fábula? Una <b>fábula</b>: tiene animales que hablan y una moraleja.</li><li>Personajes: el <b>león</b> y el <b>ratón</b>. Los cazadores aparecen poco: son secundarios.</li><li>¿Dónde pasa? En la <b>selva</b>, bajo un árbol.</li><li><b>Inicio</b>: el ratón despierta al león, que lo atrapa y lo suelta.</li><li><b>Nudo</b>: el león cae en la red de los cazadores.</li><li><b>Desenlace</b>: el ratón muerde las cuerdas y lo libera.</li><li><b>Moraleja</b>: no desprecies a nadie por ser pequeño.</li></ul><p>¿Quién la escribió? Es una fábula de <b>Esopo</b>.</p><p><b>Actividad</b>: dibuja la fábula en tres viñetas, una para el inicio, otra para el nudo y otra para el desenlace.</p>`,
      H6.flujo("Fábula", ["inicio|lo atrapa", "nudo|la red", "final|lo libera", "moraleja|¡ayuda!"], cAZ)],
  ],
  ejemplos: [
    ["¿Quién es el antagonista en «Los tres cerditos»?", ["Pienso quién les causa problemas."], "El lobo."],
    ["Escribe una fórmula de inicio y otra de final.", ["Inicio clásico.", "Final clásico."], "«Érase una vez…» y «colorín colorado…»."],
  ],
  errores: ["Pensar que el antagonista siempre es una persona malvada.", "Contar un cuento en voz alta sin cambiar la voz ni hacer pausas."],
  ejercicios: [
    ["b", "¿Qué es el protagonista?", "El personaje principal."],
    ["b", "Di una fórmula de inicio.", "Érase una vez…"],
    ["b", "¿Quién fue Esopo?", "Un fabulista de la antigua Grecia."],
    ["b", "Di una fábula de Esopo.", "La liebre y la tortuga…"],
    ["b", "¿Quién escribió El patito feo?", "Andersen."],
    ["m", "¿Cuál es la moraleja de la liebre y la tortuga?", "Quien es constante llega lejos."],
    ["m", "¿Quién es el ayudante en Caperucita?", "El leñador."],
    ["m", "Di tres trucos para contar en voz alta.", "Cambiar la voz, hacer pausas, gestos…"],
    ["m", "¿Qué cuentos recogieron los hermanos Grimm?", "Blancanieves, Hansel y Gretel…"],
    ["m", "¿Qué pasa en el pastor mentiroso?", "Miente tanto que, cuando es verdad, nadie le cree."],
    ["a", "En la lectura, ¿por qué se ríe el león del ratón?", "Porque no cree que alguien tan pequeño pueda ayudarle."],
    ["a", "Divide la fábula del león en inicio, nudo y desenlace.", "Atrapa al ratón; cae en la red; el ratón lo libera."],
    ["a", "Inventa otra moraleja para la fábula del león y el ratón.", "Por ejemplo: haz el bien y te lo devolverán."],
    ["a", "¿Por qué hay cuentos parecidos en muchos países?", "Porque los viajeros los llevaban de un lugar a otro."],
  ],
  quiz: [
    ["El que pone las cosas difíciles es el…", ["antagonista", "protagonista", "narrador"], "Personajes."],
    ["«Colorín colorado» es una fórmula de…", ["final", "inicio", "nudo"], "Fórmulas."],
    ["El fabulista griego más famoso es…", ["Esopo", "Andersen", "Perrault"], "Fábulas."],
    ["Contar despacio en el misterio es usar la…", ["velocidad", "rima", "moraleja"], "Contar."],
    ["Andersen era de…", ["Dinamarca", "Francia", "España"], "Mundo."],
  ],
  examen: [
    ["En la lectura, ¿cómo libera el ratón al león?", ["mordiendo las cuerdas", "llamando a otros leones", "asustando a los cazadores"], "Lectura."],
    ["La moraleja de la lectura es…", ["no desprecies a nadie por ser pequeño", "no mientas", "trabaja en verano"], "Repaso."],
  ],
  tarjetas: [
    ["Papeles", "Protagonista, antagonista, ayudantes y secundarios."],
    ["Esopo", "Fabulista griego de hace más de 2500 años."],
  ],
  glosario: [
    ["Protagonista", "Personaje principal del cuento."],
    ["Antagonista", "Personaje que se opone al protagonista."],
    ["Ayudante", "Personaje que ayuda al protagonista."],
    ["Fórmula", "Frase fija para empezar o acabar."],
    ["Fábula", "Cuento corto con animales y moraleja."],
    ["Fabulista", "Persona que escribe fábulas."],
    ["Moraleja", "Enseñanza de una fábula."],
    ["Cuentacuentos", "Persona que cuenta cuentos en voz alta."],
    ["Desenlace", "Final del cuento."],
    ["Versión", "Otra forma de contar la misma historia."],
  ],
  situacion: {
    titulo: "Festival de cuentacuentos",
    reto: "La clase prepara un festival en el que cada grupo cuenta una fábula o un cuento a los niños de Infantil.",
    pasos: ["Elegir un cuento o una fábula y leerlo varias veces.", "Identificar personajes, partes y moraleja.", "Ensayar con voces, pausas y gestos.", "Contarlo al público con fórmulas de inicio y final."],
    producto: "Un festival de cuentacuentos para Infantil.",
    evaluacion: ["Identifica los papeles de los personajes.", "Usa fórmulas de inicio y final.", "Explica la moraleja.", "Cuenta con voz, pausas y gestos."],
  },
});
