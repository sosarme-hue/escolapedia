// Lengua Castellana 1º de Primaria: singular y plural. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { cuantos, parejas, frase, charla, mural, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "1-primaria",
  titulo: "Singular y plural",
  minutos: 20,
  objetivos: ["Distinguir si una palabra habla de uno o de varios", "Formar el plural añadiendo -s o -es", "Usar los, las, unos y unas"],
  claves: ["singular", "plural", "-s", "-es", "los", "las"],
  pregunta: {
    texto: "En la frutería, ¿pides «dos manzana» o «dos manzanas»? ¿Qué letra añades?",
    respuesta: "Pides <b>dos manzanas</b>. Cuando hay más de una, la palabra cambia: añadimos una <mark>s</mark> al final. Eso es el <b>plural</b>.",
  },
  bloques: [
    {
      html: `<h3>Uno o muchos</h3><p>Si hablamos de <b>una sola cosa</b>, la palabra está en <mark>singular</mark>: <i>gato</i>.</p><p>Si hablamos de <b>dos o más</b>, la palabra está en <mark>plural</mark>: <i>gatos</i>.</p><p>Escucha la diferencia: «gato», «gatos». El final cambia. Ese final nos avisa de que hay más de uno. Suele ser una <b>s</b>. ¡Las palabras también saben contar!</p>`,
      svg: cuantos("Un gato es singular; tres gatos es plural", [["gato", "gato", "gatos"]], { izq: "singular: uno", der: "plural: muchos" }),
    },
    {
      html: `<h3>Añadimos una -s</h3><p>Si la palabra termina en <b>vocal</b>, el plural se hace <mark>añadiendo una s</mark>.</p><p><b>casa</b> → <b>casas</b>. <b>mesa</b> → <b>mesas</b>. <b>oso</b> → <b>osos</b>.</p><p>Es la forma más común. Casi todas las palabras que conoces la usan. Prueba tú: <i>pelota</i>, <i>libro</i>, <i>flor</i>… ¡Ojo con la última! <i>Flor</i> no acaba en vocal. Enseguida veremos qué pasa.</p>`,
      svg: cuantos("Casa y casas, mesa y mesas, oso y osos: se añade una s", [["casa", "casa", "casas"], ["mesa", "mesa", "mesas"], ["oso", "oso", "osos"]], { izq: "acaba en vocal", der: "+ s" }),
      video: vid("_4nrB3SegJA", "Singular y plural: ejemplos y reglas", "Escuela de Aprendices", 463984, 4184),
    },
    {
      html: `<h3>Añadimos -es</h3><p>Si la palabra termina en <b>consonante</b>, como <i>sol</i> o <i>flor</i>, añadimos <mark>-es</mark>.</p><p><b>sol</b> → <b>soles</b>. <b>flor</b> → <b>flores</b>. <b>pan</b> → <b>panes</b>.</p><p>Si dijéramos «sols» o «flors», sonaría muy raro. Con <i>-es</i> la palabra suena bien. Por eso decimos <i>flores</i> y <i>panes</i>. Y también <i>ratones</i>, <i>camiones</i> y <i>árboles</i>.</p>`,
      svg: cuantos("Sol y soles, flor y flores, pan y panes: se añade es", [["sol", "sol", "soles"], ["flor", "flor", "flores"], ["pan", "pan", "panes"]], { izq: "acaba en consonante", der: "+ es" }),
    },
    {
      html: `<h3>El y la cambian a los y las</h3><p>Las palabritas que van delante también pasan a plural.</p><p><b>el</b> perro → <mark>los</mark> perros. <b>la</b> flor → <mark>las</mark> flores.</p><p><i>Los</i> va con palabras masculinas. <i>Las</i> va con palabras femeninas. Nunca decimos «el perros». Todo el grupo de palabras va en plural a la vez, como un equipo.</p>`,
      svg: parejas("El perro pasa a los perros; la flor pasa a las flores", [["perro", "el perro", "perro", "los perros"], ["flor", "la flor", "flor", "las flores"]], { izq: "singular", der: "plural" }),
    },
    {
      html: `<h3>Un y una cambian a unos y unas</h3><p>Lo mismo pasa con <i>un</i> y <i>una</i>.</p><p><b>un</b> coche → <mark>unos</mark> coches. <b>una</b> pelota → <mark>unas</mark> pelotas.</p><p>Decimos <i>unos</i> o <i>unas</i> cuando no sabemos cuántos hay exactamente. «Tengo unos cromos» quiere decir que tengo varios, pero no digo cuántos. Pueden ser tres o pueden ser veinte.</p>`,
      svg: parejas("Un coche pasa a unos coches; una pelota pasa a unas pelotas", [["coche", "un coche", "coche", "unos coches"], ["pelota", "una pelota", "pelota", "unas pelotas"]], { izq: "singular", der: "plural" }),
    },
    {
      html: `<h3>Toda la frase cambia</h3><p>Cuando una palabra pasa a plural, sus compañeras <mark>también cambian</mark>.</p><p>«El gato negro come.» → «Los gatos negros comen.»</p><p>Mira bien: cambian <i>el</i>, <i>gato</i>, <i>negro</i> y también <i>come</i>. Todas se ponen de acuerdo. Si una se queda en singular, la frase suena mal. ¡Parecen un equipo!</p>`,
      svg: frase("El gato negro come pasa a Los gatos negros comen", [["El", A], ["gato", A], ["negro", A], ["come.", A], ["/"], ["Los", V], ["gatos", V], ["negros", V], ["comen.", V]], { titulo: "Toda la frase en plural", nota: "Todas las palabras se ponen de acuerdo", fs: 22 }),
    },
    {
      html: `<h3>Contamos cosas</h3><p>Con los números, usamos el plural a partir del <b>dos</b>.</p><p><b>1</b> manzana, pero <mark>2 manzanas</mark>, 3 manzanas, 10 manzanas.</p><p>Con el uno, la palabra va en singular. Con todos los demás números, en plural. ¡Hasta con el cero! Decimos «cero caramelos». ¡Qué pena!</p>`,
      svg: cuantos("Una manzana; dos manzanas; cuatro manzanas", [["manzana", "1 manzana", "2 manzanas", 2], ["manzana", "1 manzana", "4 manzanas", 4]], { izq: "con el 1", der: "del 2 en adelante" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>El plural nos ayuda a decir <mark>cuántas cosas hay</mark>.</p><p>Lo usamos en la tienda: «Quiero dos panes, por favor». Lo usamos en el cole: «Sacad los lápices».</p><p>Si no lo usamos bien, nos pueden dar una sola cosa cuando queríamos varias. ¡Imagina pedir galletas y recibir solo una galleta!</p>`,
      svg: charla("En la panadería, una niña pide dos panes y el panadero se los da", [["nina", "Quiero dos panes, por favor.", R], ["papa", "Aquí tienes los dos panes.", A]]),
    },
    {
      html: `<h3>Jugamos a la palabra mágica</h3><p>Un jugador dice una palabra en singular: «<b>oso</b>».</p><p>El otro dice «¡abracadabra!» y la <mark>multiplica</mark>: «¡osos!».</p><p>Luego cambiamos los papeles. Probad con palabras difíciles: <i>ratón</i>, <i>lápiz</i>, <i>camión</i>. El que acierta más plurales gana una estrella. ¡Con magia se aprende mejor!</p>`,
      svg: charla("Juego de la palabra mágica: oso se convierte en osos", [["nino", "Oso…", A], ["nina", "¡Abracadabra! ¡Osos!", R], ["nino", "¡Muy bien! Ahora tú.", A]]),
    },
  ],
  figura: {
    titulo: "Del singular al plural",
    svg: mural("Cómo se forma el plural: casa casas con s, flor flores con es, el los y la las, un unos y una unas", [["casa", "casas", "vocal + s", A], ["flor", "flores", "consonante + es", R], ["perro", "los · las", "el → los · la → las", V], ["coche", "unos · unas", "un → unos · una → unas", N]], "Así se forma el plural"),
  },
  video: { ...vid("ne67rmSI1o8", "Singular y plural, para niños", "IdeasQueVuelanMX", 75513), busqueda: "singular y plural para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Haz el plural de «pato».",
      pasos: ["Mira la última letra: pato acaba en o.", "La o es una vocal: añadimos s.", "Di la palabra nueva: patos."],
      resultado: "el plural de «pato» es «patos»." },
    { enunciado: "Haz el plural de «árbol».",
      pasos: ["Mira la última letra: árbol acaba en l.", "La l es una consonante: añadimos es.", "Di la palabra nueva: árboles."],
      resultado: "el plural de «árbol» es «árboles»." },
    { enunciado: "Pon en plural: «la niña ríe».",
      pasos: ["La pasa a las.", "Niña pasa a niñas.", "Ríe pasa a ríen."],
      resultado: "«las niñas ríen»." },
  ],
  errores: [
    "Añadir solo -s a palabras que acaban en consonante, como «flors»: se dice flores.",
    "Cambiar solo una palabra de la frase: «los gato». Todas van en plural.",
    "Poner plural con el número uno: «1 coches». Con el 1 va el singular.",
    "Olvidar que «lápiz» cambia la z por c en plural: lápices.",
  ],
  ejercicios: [
    { q: "Plural de «casa».", sol: "Casas." },
    { q: "Plural de «flor».", sol: "Flores." },
    { q: "Plural de «pez».", sol: "Peces (la z cambia por c)." },
    { q: "Singular de «zapatos».", sol: "Zapato." },
    { q: "Completa: «___ perros» (el o los).", sol: "Los perros." },
    { q: "Completa: «___ mesas» (la o las).", sol: "Las mesas." },
    { q: "¿Singular o plural? «estrellas».", sol: "Plural." },
    { q: "Cuenta los dedos de una mano y dilo con su palabra.", sol: "Cinco dedos." },
    { q: "Pon en plural: «el gato come».", sol: "Los gatos comen." },
    { q: "Di tres cosas de tu casa en plural.", sol: "Por ejemplo: sillas, platos, camas." },
  ],
  quiz: [
    { q: "«Gatos» está en…", o: ["singular", "plural", "femenino"], a: 1, e: "Hay más de uno." },
    { q: "Plural de «mesa»:", o: ["mesaes", "mesas", "meses"], a: 1, e: "Acaba en vocal: +s." },
    { q: "Plural de «sol»:", o: ["sols", "soles", "solas"], a: 1, e: "Acaba en consonante: +es." },
    { q: "«El perro» en plural es…", o: ["los perros", "el perros", "las perras"], a: 0, e: "el → los." },
    { q: "«La flor» en plural es…", o: ["los flores", "las flores", "la flores"], a: 1, e: "la → las." },
    { q: "¿Cuál está en singular?", o: ["osos", "casa", "panes"], a: 1, e: "Casa es una sola." },
    { q: "Con el número 1 decimos…", o: ["1 manzana", "1 manzanas", "1 manzanes"], a: 0, e: "Con el uno, singular." },
    { q: "«Un coche» en plural es…", o: ["unos coches", "unas coches", "un coches"], a: 0, e: "un → unos." },
    { q: "Plural de «pan»:", o: ["pans", "panes", "panas"], a: 1, e: "panes." },
    { q: "¿Qué frase está bien?", o: ["Los niño juegan.", "Los niños juegan.", "El niños juega."], a: 1, e: "Todo en plural." },
  ],
  examen: [
    { q: "Plural de «oso»:", o: ["osos", "oses", "osas"], a: 0, e: "+s." },
    { q: "Plural de «árbol»:", o: ["árbols", "árboles", "árbolas"], a: 1, e: "+es." },
    { q: "Singular de «flores»:", o: ["flor", "flora", "flore"], a: 0, e: "flor." },
    { q: "«Las casas» en singular es…", o: ["la casa", "el casa", "las casa"], a: 0, e: "la casa." },
  ],
  feynman: ["Qué es el singular y qué es el plural", "Cuándo añadimos -s y cuándo -es", "Por qué cambia toda la frase"],
  mapa: mapa("SINGULAR Y PLURAL", "var(--pri)", [
    ["Singular", "uno: gato", A],
    ["Plural", "varios: gatos", R],
    ["-s o -es", "casas · flores", V],
    ["Acompañantes", "los, las, unos, unas", N],
  ], 220),
  tarjetas: [
    ["¿Qué es el singular?", "Una sola cosa"],
    ["¿Qué es el plural?", "Dos o más cosas"],
    ["Plural de «libro»", "Libros"],
    ["Plural de «flor»", "Flores"],
    ["Plural de «el»", "Los"],
    ["Plural de «la»", "Las"],
    ["Plural de «lápiz»", "Lápices"],
    ["Singular de «panes»", "Pan"],
  ],
  familias: [
    "Al poner la mesa, contad y nombrad en plural: tres platos, tres vasos.",
    "Jugad a la palabra mágica: uno dice singular y el otro lo multiplica.",
    "En la compra, pedidle que diga lo que lleváis en plural: dos panes, seis huevos.",
    "Si dice «flors» o «peces» mal, repetid la palabra bien con naturalidad.",
  ],
  profesores: PROF("Reflexión sobre la lengua: el número del nombre, formación del plural con -s y -es, y concordancia con determinantes y adjetivos", ["Bolsa de objetos: sacar uno o varios y nombrarlos.", "Tarjetas singular y plural para emparejar.", "Dictado de frases que hay que pasar a plural."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
