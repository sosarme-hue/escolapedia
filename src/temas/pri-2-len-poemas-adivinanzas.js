// Lengua Castellana 2º de Primaria: poemas, retahílas y adivinanzas. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, parejas } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "2-primaria",
  titulo: "Poemas, retahílas y adivinanzas",
  minutos: 25,
  objetivos: ["Reconocer un poema por sus versos, estrofas y rimas", "Recitar retahílas y trabalenguas con ritmo", "Resolver e inventar adivinanzas"],
  claves: ["poema", "verso", "estrofa", "rima", "retahíla", "trabalenguas", "adivinanza"],
  pregunta: {
    texto: "«Blanco por dentro, verde por fuera; si quieres que te lo diga, espera.» ¿Qué es?",
    respuesta: "¡La <b>pera</b>! Es una <mark>adivinanza</mark>: un juego de palabras con rima que esconde la respuesta. Fíjate: «es-<b>pera</b>».",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un poema?</h3><p>Un <mark>poema</mark> es un texto escrito para que <b>suene bonito</b>.</p><p>Se escribe en <b>líneas cortas</b> que no llegan al final de la página. Cada línea se llama <b>verso</b>.</p><p>Los poemas hablan de cosas que sentimos o vemos: la luna, el mar, un amigo, el otoño… ¡Se leen despacio y con cariño!</p>`,
      svg: lista("Cuatro versos de un poema: La luna es redonda, la luna es de plata, y cuelga en el cielo como una corbata", [["La luna es redonda,", A], ["la luna es de plata,", A], ["y cuelga en el cielo", A], ["como una corbata.", A]], { titulo: "Cada línea es un verso", marca: "n" }),
      video: V("poeV", "poemas para niños de primaria"),
    },
    {
      html: `<h3>Versos y estrofas</h3><p>Los versos se juntan en grupos. Cada grupo de versos se llama <mark>estrofa</mark>.</p><p>Entre una estrofa y otra dejamos un <b>espacio en blanco</b>, como un pequeño descanso.</p><p>Para contar las estrofas, cuenta los grupos. Para contar los versos, cuenta las líneas. ¡Es como contar vagones y trenes!</p>`,
      svg: lista("Un poema con dos estrofas; cada estrofa tiene versos", [["Estrofa 1: verso, verso", A], ["verso, verso", A], ["Estrofa 2: verso, verso", Ve], ["verso, verso", Ve]], { titulo: "2 estrofas de 4 versos", marca: "•" }),
    },
    {
      html: `<h3>La rima</h3><p>Muchos poemas tienen <mark>rima</mark>: los versos terminan con un <b>sonido parecido</b>.</p><p><i>plat<b>a</b></i> rima con <i>corbat<b>a</b></i>. <i>rat<b>ón</b></i> rima con <i>camión</i> y <i>canción</i>.</p><p>Para buscar rimas, fíjate en el final: desde la vocal que suena más fuerte. <i>Gato</i> rima con <i>pato</i> y <i>zapato</i>. ¡Inventa tú más!</p>`,
      svg: parejas("Gato rima con pato; ratón rima con canción; luna rima con cuna", [["gato", "gato", "pato", "pato"], ["raton", "ratón", "guitarra", "canción"], ["luna", "luna", "cuna", "cuna"]], { izq: "palabra", der: "rima", color: A, color2: R, flecha: "♪" }),
    },
    {
      html: `<h3>Recitar con ritmo</h3><p><mark>Recitar</mark> es decir un poema en voz alta, de memoria o leyendo.</p><p>Para recitar bien: habla <b>despacio</b> y <b>claro</b>. Haz una pausa pequeña al final de cada verso y una más larga entre estrofas.</p><p>Pon emoción: alegre si el poema es alegre, suave si habla de la noche. ¡Mira al público y sonríe!</p>`,
      svg: lista("Para recitar: despacio, pausa en cada verso, con emoción, mirando al público", [["Despacio y claro", A], ["Pausa en cada verso", Ve], ["Con emoción", R], ["Mira al público", N]], { titulo: "Para recitar bien", marca: "✓" }),
    },
    {
      html: `<h3>Las retahílas</h3><p>Una <mark>retahíla</mark> es una cadena de palabras con ritmo que se dice de memoria. Sirve para jugar o para echar a suertes.</p><p>«<i>Pito, pito, gorgorito, ¿dónde vas tú tan bonito?</i>»</p><p>«<i>Una, dona, tena, catena…</i>» Las retahílas pasan de abuelos a nietos. ¿Conoces alguna?</p>`,
      svg: frase("Retahíla: Pito, pito, gorgorito, ¿dónde vas tú tan bonito?", [["Pito, pito,", R], ["gorgorito,", R], ["/"], ["¿dónde vas tú", A], ["tan bonito?", A]], { titulo: "Para echar a suertes", fs: 22 }),
      video: V("poeB"),
    },
    {
      html: `<h3>Los trabalenguas</h3><p>Un <mark>trabalenguas</mark> es una frase difícil de decir rápido, porque repite sonidos parecidos.</p><p>«<i>Tres tristes tigres tragaban trigo en un trigal.</i>»</p><p>«<i>Pablito clavó un clavito. ¿Qué clavito clavó Pablito?</i>» Empieza despacio y ve más rápido. ¡Te reirás si se te traba la lengua!</p>`,
      svg: frase("Trabalenguas: Tres tristes tigres tragaban trigo en un trigal", [["Tres tristes tigres", N], ["/"], ["tragaban trigo", N], ["/"], ["en un trigal", N]], { titulo: "¡Dilo rápido!", fs: 22 }),
    },
    {
      html: `<h3>Las adivinanzas</h3><p>Una <mark>adivinanza</mark> describe algo <b>sin decir su nombre</b>. Tú tienes que adivinarlo.</p><p>Suelen tener rima y dar pistas: el color, la forma, para qué sirve.</p><p>«<i>Tengo agujas y no sé coser; tengo números y no sé leer.</i>» ¿Qué es? ¡El <b>reloj</b>! A veces la respuesta se esconde dentro de las palabras.</p>`,
      svg: dibujos("Adivinanza: tengo agujas y no sé coser, tengo números y no sé leer: el reloj", [["interrogacion", "¿Qué es?", A], ["reloj", "¡el reloj!", R]], { titulo: "Agujas y números…", nota: "Tiene agujas y números, pero no cose ni lee" }),
      video: V("poeB2"),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los poemas, retahílas y adivinanzas son <mark>juegos con palabras</mark>.</p><p>Nos ayudan a <b>memorizar</b>, a pronunciar mejor y a descubrir palabras nuevas.</p><p>Además, son perfectos para compartir: en una fiesta, en el patio o en el coche. ¡Las adivinanzas hacen pensar y los trabalenguas hacen reír!</p>`,
      svg: charla("Un niño dice una adivinanza: oro parece, plata no es; la niña responde: el plátano", [["nino", "Oro parece, plata no es…", A], ["nina", "¿Es amarillo?", R], ["nino", "¡Sí! ¿Qué es?", A], ["platano", "¡El plátano!", M]]),
    },
    {
      html: `<h3>Inventa una adivinanza</h3><p>Elige algo que conozcas bien, por ejemplo, el <b>sol</b>.</p><p><b>1.</b> Piensa cómo es: amarillo, redondo, caliente. <b>2.</b> Piensa qué hace: da luz, sale por la mañana. <b>3.</b> Escríbelo <mark>sin decir el nombre</mark>.</p><p>«<i>Soy redondo y amarillo, salgo por la mañana y doy calor y brillo.</i>» ¡Rima y todo!</p>`,
      svg: dibujos("Inventa una adivinanza del sol: redondo, amarillo, da calor", [["sol", "redondo", M], ["sol", "amarillo", M], ["sol", "da calor", R]], { titulo: "Mi adivinanza: el sol", nota: "Pistas sin decir el nombre" }),
    },
  ],
  figura: {
    titulo: "Jugamos con las palabras",
    svg: mural("Poema con versos y rima; retahíla para echar a suertes; trabalenguas difícil de decir; adivinanza con pistas", [["luna", "poema", "versos, estrofas y rima", A], ["nino", "retahíla", "cadena para jugar", R], ["boca", "trabalenguas", "¡dilo rápido!", N], ["interrogacion", "adivinanza", "pistas sin el nombre", Ve]], "Textos para decir en voz alta y disfrutar"),
  },
  video: V("poeV", "poemas para niños de primaria"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Busca una rima para «canción».",
      pasos: ["Mira el final que suena fuerte: -ción.", "Busca palabras que acaben igual.", "corazón, ratón, camión…"],
      resultado: "canción rima con corazón." },
    { enunciado: "Adivina: «Tiene dientes y no come, tiene cabeza y no es hombre».",
      pasos: ["Pistas: tiene dientes pero no come.", "Tiene cabeza pero no es persona.", "Pensemos en el ajo: tiene dientes y cabeza."],
      resultado: "el ajo." },
    { enunciado: "¿Cuántos versos y estrofas tiene un poema de dos grupos de tres líneas?",
      pasos: ["Cada línea es un verso: 3 + 3.", "Cada grupo es una estrofa.", "Hay dos grupos."],
      resultado: "6 versos y 2 estrofas." },
  ],
  errores: [
    "Llamar estrofa a cada línea: cada línea es un verso; el grupo es la estrofa.",
    "Buscar rimas solo por la última letra: hay que mirar desde la vocal fuerte.",
    "Recitar muy deprisa y sin pausas.",
    "Decir el nombre de la cosa en una adivinanza: ¡entonces no hay que adivinar!",
  ],
  ejercicios: [
    { q: "¿Cómo se llama cada línea de un poema?", sol: "Verso." },
    { q: "¿Y un grupo de versos?", sol: "Estrofa." },
    { q: "Busca una rima para «gato».", sol: "pato, zapato, plato, rato." },
    { q: "Busca una rima para «luna».", sol: "cuna, una, ninguna, aceituna." },
    { q: "Di una retahíla que conozcas.", sol: "Por ejemplo: «Pito, pito, gorgorito…»." },
    { q: "Di este trabalenguas tres veces: «Tres tristes tigres».", sol: "Tres tristes tigres tragaban trigo en un trigal." },
    { q: "Adivina: «Oro parece, plata no es».", sol: "El plátano." },
    { q: "Adivina: «Tengo agujas y no sé coser».", sol: "El reloj." },
    { q: "Recita un poema corto con pausas.", sol: "Respuesta libre: despacio, con pausa en cada verso." },
    { q: "Inventa una adivinanza de un animal.", sol: "Por ejemplo: «Tengo bigotes, digo miau y me gusta la leche»: el gato." },
  ],
  quiz: [
    { q: "Cada línea de un poema es un…", o: ["verso", "párrafo", "título"], a: 0, e: "Verso." },
    { q: "Un grupo de versos es una…", o: ["estrofa", "rima", "adivinanza"], a: 0, e: "Estrofa." },
    { q: "«Gato» rima con…", o: ["perro", "pato", "casa"], a: 1, e: "-ato." },
    { q: "Una retahíla sirve para…", o: ["jugar o echar a suertes", "cocinar", "contar dinero"], a: 0, e: "Para jugar." },
    { q: "Un trabalenguas es…", o: ["difícil de decir rápido", "un cuento largo", "un dibujo"], a: 0, e: "Se traba la lengua." },
    { q: "Una adivinanza…", o: ["dice el nombre", "da pistas sin el nombre", "no tiene respuesta"], a: 1, e: "Da pistas." },
    { q: "Al recitar hay que hablar…", o: ["muy rápido", "despacio y claro", "gritando"], a: 1, e: "Despacio y claro." },
    { q: "«Tengo agujas y no sé coser…»", o: ["la aguja", "el reloj", "el pez"], a: 1, e: "El reloj." },
    { q: "«Canción» rima con…", o: ["corazón", "mesa", "sol"], a: 0, e: "-ón." },
    { q: "«Pito, pito, gorgorito» es una…", o: ["retahíla", "fábula", "receta"], a: 0, e: "Retahíla." },
  ],
  examen: [
    { q: "Entre estrofas dejamos…", o: ["un espacio", "un punto", "una coma"], a: 0, e: "Un espacio en blanco." },
    { q: "«Luna» rima con…", o: ["cuna", "sol", "mar"], a: 0, e: "-una." },
    { q: "«Tres tristes tigres» es un…", o: ["trabalenguas", "poema largo", "cuento"], a: 0, e: "Trabalenguas." },
    { q: "«Oro parece, plata no es»:", o: ["el plátano", "la luna", "el oro"], a: 0, e: "plá-tano." },
  ],
  feynman: ["Qué son el verso, la estrofa y la rima", "Qué diferencia hay entre retahíla y trabalenguas", "Cómo se inventa una adivinanza"],
  mapa: mapa("JUEGOS DE PALABRAS", "var(--pri)", [
    ["Poema", "versos, estrofas, rima", A],
    ["Retahíla", "cadena para jugar", R],
    ["Trabalenguas", "difícil de decir rápido", N],
    ["Adivinanza", "pistas sin el nombre", Ve],
  ], 230),
  tarjetas: [
    ["¿Qué es un verso?", "Cada línea de un poema"],
    ["¿Qué es una estrofa?", "Un grupo de versos"],
    ["¿Qué es la rima?", "Versos que acaban con sonido parecido"],
    ["Rima de «gato»", "pato, zapato"],
    ["¿Qué es una retahíla?", "Palabras con ritmo para jugar"],
    ["¿Qué es un trabalenguas?", "Una frase difícil de decir rápido"],
    ["¿Qué es una adivinanza?", "Pistas para adivinar algo"],
    ["«Tengo agujas y no sé coser»", "El reloj"],
  ],
  familias: [
    "Aprended juntos un poema corto y recitadlo en una comida familiar.",
    "Pedid a los abuelos que enseñen las retahílas de su infancia.",
    "Haced un concurso de trabalenguas en el coche.",
    "Inventad cada día una adivinanza de un objeto de casa.",
  ],
  profesores: PROF("Educación literaria: textos de tradición oral (retahílas, trabalenguas y adivinanzas) y poemas; verso, estrofa y rima; recitación con ritmo y entonación", ["Recital de poemas en el aula con micrófono de juguete.", "Antología de retahílas recogidas por las familias.", "Buzón de adivinanzas inventadas por el alumnado."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Distinguir rima total y rima parcial", "Conocer las canciones de corro y las nanas", "Conocer a poetas como Gloria Fuertes", "Usar comparaciones como hacen los poetas"],
  lectura: { titulo: "La poeta del barrio", html: `<p>En el barrio de Irene vive una señora mayor que se llama Carmen. Todo el mundo la llama «la poeta», porque siempre lleva un cuaderno lleno de versos.</p><p>Una tarde, Irene la encuentra sentada en un banco del parque, mirando las nubes.</p><p>—¿Qué escribes hoy, Carmen?</p><p>—Un poema sobre la luna. Escucha:</p><p><i>La luna es una galleta<br>que alguien mordió por la mitad;<br>la guarda la noche en su chaqueta<br>y la saca para pasear.</i></p><p>Irene se ríe.</p><p>—¡La luna no es una galleta!</p><p>—Claro que no —dice Carmen—. Pero a veces lo parece, ¿verdad? Los poetas miramos las cosas de una forma diferente.</p><p>Esa noche, Irene mira por la ventana. La luna está en cuarto creciente y, de verdad, parece una galleta mordida.</p><p>Al día siguiente, Irene se compra un cuaderno y escribe su primer verso.</p>` },
  tras: {
    "La rima": [
      ["Rima total y rima parcial", `<p>Hay dos clases de <mark>rima</mark>:</p><ul><li><b>Rima total</b> (o consonante): coinciden <b>todas las letras</b> desde la última vocal que suena fuerte. Por ejemplo: g<b>ato</b> / zap<b>ato</b>; can<b>ción</b> / bal<b>ón</b>; l<b>una</b> / c<b>una</b>.</li><li><b>Rima parcial</b> (o asonante): solo coinciden las <b>vocales</b>; las consonantes cambian. Por ejemplo: p<b>e</b>l<b>o</b> / c<b>e</b>r<b>o</b>, o c<b>a</b>s<b>a</b> / m<b>a</b>p<b>a</b>.</li></ul><p>En el poema de la lectura, «galleta» rima con «chaqueta»: coinciden <b>-eta</b>. Es rima total.</p><p>«Mitad» y «pasear» solo comparten la vocal <b>a</b> final: es rima parcial.</p><p><b>Actividad</b>: busca una palabra con rima total y otra con rima parcial para «ratón».</p>`,
        H6.dos("Rima", ["TOTAL", ["gato", "zapato", "todo igual"], cAZ], ["PARCIAL", ["pelo", "cero", "solo vocales"], cVE])],
    ],
    "Recitar con ritmo": [
      ["Canciones de corro y nanas", `<p>Muchos poemas se cantan. Son poemas <mark>populares</mark>: no sabemos quién los inventó y han pasado de abuelos a nietos.</p><ul><li>Las <b>canciones de corro</b> se cantan en círculo, dados de la mano, mientras se juega. Por ejemplo, «El corro de la patata» o «Al pasar la barca».</li><li>Las canciones para <b>saltar a la comba</b> marcan el ritmo de los saltos.</li><li>Las <b>nanas</b> son canciones suaves y lentas para dormir a los bebés. Suelen repetir palabras como «ea, ea».</li></ul><p>Estas canciones tienen versos cortos, mucha rima y repeticiones, para que sea fácil recordarlas.</p><p>Hoy las seguimos cantando en el patio, ¡igual que nuestros abuelos!</p><p><b>Actividad</b>: pregunta en casa por una canción de corro o una nana y apréndela para cantarla en clase.</p>`,
        L6.filas("Populares", [["corro", "en círculo", cNA], ["comba", "saltando", cAZ], ["nana", "para dormir", cMO], ["de memoria", "abuelos", cVE]])],
    ],
    "Los trabalenguas": [
      ["Más juegos de palabras", `<p>Además de trabalenguas, hay otros <mark>juegos de palabras</mark> muy divertidos:</p><ul><li><b>Las jitanjáforas</b>: poemas con palabras inventadas que no significan nada, pero suenan muy bien. «Tumba la ramba, tumba la rumba».</li><li><b>Los pareados</b>: dos versos que riman. «Una mosca golosa / se posó en una rosa».</li><li><b>Los acrósticos</b>: las primeras letras de cada verso, leídas de arriba abajo, forman una palabra.</li><li><b>Los chistes de palabras</b>: juegan con palabras que suenan igual.</li></ul><p>Un acróstico de SOL:</p><ul><li><b>S</b>ale por la mañana,</li><li><b>O</b>scuro no está nunca,</li><li><b>L</b>uce sobre mi ventana.</li></ul><p><b>Actividad</b>: escribe un acróstico con tu nombre.</p>`,
        H6.flujo("Acróstico", ["S|Sale…", "O|Oscuro…", "L|Luce…", "= SOL|¡palabra!"], cNA),
        ["FGu0J1II6Uo", "Trabalenguas de animales", "Eugenia Romero", 2502221]],
    ],
    "Las adivinanzas": [
      ["Comparar como los poetas", `<p>Los poetas y las adivinanzas usan mucho las <mark>comparaciones</mark>: dicen que una cosa se parece a otra.</p><p>Para comparar usamos la palabra <b>como</b>:</p><ul><li>«Tus ojos brillan <b>como</b> estrellas».</li><li>«La nieve es blanca <b>como</b> el azúcar».</li><li>«Corre <b>como</b> el viento».</li></ul><p>A veces los poetas van más allá y dicen directamente que una cosa <b>es</b> otra. En la lectura, Carmen dice: «La luna <b>es</b> una galleta». No es verdad, pero nos ayuda a imaginar cómo es la luna.</p><p>Las comparaciones hacen que los poemas sean más bonitos y sorprendentes.</p><p><b>Actividad</b>: completa: «El sol es redondo como…», «Mi gato es suave como…», «La lluvia suena como…».</p>`,
        L6.filas("Como…", [["ojos", "como estrellas", cAZ], ["nieve", "como azúcar", cVE], ["corre", "como el viento", cNA], ["luna", "es una galleta", cRO]])],
    ],
  },
  final: [
    ["Gloria Fuertes y otros poetas", `<p>Hay poetas que escribieron especialmente para <mark>niños</mark>:</p><ul><li><b>Gloria Fuertes</b> (Madrid, 1917-1998) es la poeta de los niños más querida de España. Escribía poemas divertidos sobre animales, letras y cosas cotidianas. Salía en la televisión con su gran sonrisa y su corbata.</li><li><b>Federico García Lorca</b> escribió canciones para niños, como «El lagarto está llorando».</li><li><b>Antonio Machado</b> y <b>Juan Ramón Jiménez</b>, que escribió «Platero y yo», la historia de un burrito.</li><li><b>Carmen Gil</b> y <b>Antonio García Teijeiro</b> escriben hoy poemas para niños.</li></ul><p>En la biblioteca encontrarás libros de todos ellos. Lee sus poemas en voz alta: ¡suenan mejor!</p><p><b>Actividad</b>: busca un poema de Gloria Fuertes en la biblioteca y apréndelo para recitarlo.</p>`,
      H6.rueda("Poetas", "POESÍA", [["G. Fuertes", cRO], ["Lorca", cAZ], ["Machado", cVE], ["C. Gil", cNA]])],
    ["Repaso: la poeta del barrio", `<p>Repasamos con el <mark>poema</mark> de Carmen:</p><p><i>La luna es una galleta / que alguien mordió por la mitad; / la guarda la noche en su chaqueta / y la saca para pasear.</i></p><ul><li>¿Cuántos versos tiene? <b>4</b>.</li><li>¿Cuántas estrofas? <b>1</b>.</li><li>¿Qué palabras riman? <b>galleta</b> y <b>chaqueta</b> (rima total); <b>mitad</b> y <b>pasear</b> (rima parcial en a).</li><li>¿Qué comparación usa? La luna <b>es</b> una galleta.</li><li>¿Qué hace la noche? La guarda en su chaqueta: ¡como si fuera una persona!</li></ul><p>Los poetas dan vida a las cosas: la noche tiene chaqueta y sale a pasear.</p><p><b>Actividad</b>: escribe tu propio poema de cuatro versos sobre el sol, comparándolo con algo.</p>`,
      L6.filas("Poema", [["versos", "4", cAZ], ["estrofas", "1", cVE], ["rima", "galleta-chaqueta", cNA], ["compara", "luna = galleta", cRO]])],
  ],
  ejemplos: [
    ["¿«Gato» y «zapato» tienen rima total o parcial?", ["Comparo desde la última vocal fuerte: -ato / -ato.", "Coinciden todas las letras."], "Total."],
    ["Completa la comparación: «Es dulce como…».", ["Busco algo muy dulce."], "Como la miel."],
  ],
  errores: ["Pensar que en la rima parcial coinciden también las consonantes.", "Creer que las comparaciones de los poemas son mentiras."],
  ejercicios: [
    ["b", "Di una palabra que rime con «canción».", "Melón, ratón, balón…"],
    ["b", "¿Qué es una nana?", "Una canción para dormir a los bebés."],
    ["b", "¿Qué es un pareado?", "Dos versos que riman."],
    ["b", "Completa: blanco como…", "La nieve, la leche…"],
    ["b", "Di una poeta española para niños.", "Gloria Fuertes."],
    ["m", "¿«Pelo» y «cero» tienen rima total o parcial?", "Parcial."],
    ["m", "Escribe un pareado sobre un perro.", "Respuesta libre."],
    ["m", "¿Qué es un acróstico?", "Un poema donde las primeras letras forman una palabra."],
    ["m", "Nombra una canción de corro.", "El corro de la patata…"],
    ["m", "¿Quién escribió «Platero y yo»?", "Juan Ramón Jiménez."],
    ["a", "En la lectura, ¿por qué dice Carmen que la luna es una galleta?", "Porque en cuarto creciente parece una galleta mordida."],
    ["a", "Haz un acróstico con la palabra MAR.", "Respuesta libre."],
    ["a", "Inventa una comparación para la lluvia.", "Por ejemplo: suena como un tambor."],
    ["a", "¿Por qué las canciones populares tienen versos cortos y repeticiones?", "Para recordarlas fácilmente."],
  ],
  quiz: [
    ["En la rima parcial coinciden…", ["solo las vocales", "todas las letras", "las consonantes"], "Rima."],
    ["Una canción para dormir es una…", ["nana", "adivinanza", "fábula"], "Nanas."],
    ["Dos versos que riman son un…", ["pareado", "acróstico", "cuento"], "Juegos."],
    ["Para comparar usamos la palabra…", ["como", "pero", "porque"], "Comparar."],
    ["La poeta de los niños con corbata es…", ["Gloria Fuertes", "Carmen Gil", "Lorca"], "Poetas."],
  ],
  examen: [
    ["En la lectura, ¿qué hace Irene al final?", ["escribe su primer verso", "se come una galleta", "canta una nana"], "Lectura."],
    ["En el poema riman «galleta» y…", ["chaqueta", "mitad", "luna"], "Repaso."],
  ],
  tarjetas: [
    ["Rima", "Total: todas las letras; parcial: solo vocales."],
    ["Comparación", "Una cosa se parece a otra: «como»."],
  ],
  glosario: [
    ["Rima total", "Coinciden vocales y consonantes finales."],
    ["Rima parcial", "Solo coinciden las vocales finales."],
    ["Canción de corro", "Canción que se canta en círculo."],
    ["Nana", "Canción para dormir."],
    ["Pareado", "Dos versos que riman."],
    ["Acróstico", "Poema cuyas primeras letras forman una palabra."],
    ["Comparación", "Decir que algo se parece a otra cosa."],
    ["Poeta", "Persona que escribe poemas."],
    ["Popular", "Que es del pueblo y no tiene autor conocido."],
    ["Recitar", "Decir un poema en voz alta."],
  ],
  situacion: {
    titulo: "Nuestro libro de poemas",
    reto: "La clase hace un libro de poemas con pareados, acrósticos, comparaciones y adivinanzas, y lo recita en un recital.",
    pasos: ["Leer poemas de Gloria Fuertes y otros poetas.", "Escribir un pareado y un acróstico con el propio nombre.", "Inventar un poema de cuatro versos con una comparación.", "Ilustrar los poemas y recitarlos."],
    producto: "Un libro de poemas de la clase y un recital.",
    evaluacion: ["Distingue rima total y parcial.", "Escribe pareados y acrósticos.", "Usa comparaciones.", "Recita con ritmo y buena voz."],
  },
});
