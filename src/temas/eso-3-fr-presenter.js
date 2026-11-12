// Francés 3º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "3-eso",
  titulo: "Se présenter et parler de soi",
  minutos: 50,
  objetivos: ["Saludar, despedirse y elegir entre tu y vous", "Decir el nombre, la edad, la nacionalidad y dónde vives", "Conjugar être y avoir en presente"],
  claves: ["bonjour", "salut", "tu / vous", "je m'appelle", "j'ai … ans", "nationalité", "j'habite à", "être", "avoir", "les nombres"],
  pregunta: {
    texto: "En español decimos «Tengo catorce años». ¿Y en francés: «Je suis quatorze ans» o «J'ai quatorze ans»?",
    respuesta: "En francés, como en español, la edad se dice con el verbo <b>tener</b>: <mark>J'ai quatorze ans</mark>. Es un error muy típico de los anglohablantes («I am 14»), pero no del español. Lo que sí cambia es que en francés <b>siempre</b> hay que decir el pronombre: <i>j'ai</i>, nunca solo «ai».",
  },
  bloques: [
    {
      html: `<h3>Saludar y despedirse</h3><p>Para saludar se dice <b>Bonjour</b> (de día) o <b>Bonsoir</b> (por la tarde-noche); con amigos, <b>Salut</b>. Para despedirse: <b>Au revoir</b>, <b>À bientôt</b> (hasta pronto), <b>À demain</b> (hasta mañana) o <b>Salut</b>. Con amigos y familia se usa <b>tu</b>; con adultos desconocidos y profesores, <mark>vous</mark>, que es más formal: <i>Comment allez-vous ?</i> / <i>Ça va ?</i></p>`,
      svg: L.filas("Saludos y despedidas", [
        ["Formal", "Bonjour, madame.", "var(--pen)"],
        ["Informal", "Salut ! Ça va ?", "var(--leaf)"],
        ["Despedida", "Au revoir ! À bientôt !", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Decir el nombre</h3><p>Para decir cómo te llamas: <b>Je m'appelle</b> Lucía. Para preguntarlo: <i>Comment tu t'appelles ?</i> (informal) o <i>Comment vous appelez-vous ?</i> (formal). También se puede decir <i>Moi, c'est Lucía</i>. Si alguien no entiende tu nombre, tendrás que <mark>deletrearlo</mark> con el alfabeto francés: la <i>e</i> suena [ə], la <i>i</i> suena [i] y la <i>j</i> suena [ʒi].</p>`,
      svg: L.dialogo("Diálogo para presentarse", [
        ["Hugo", "Salut ! Comment tu t'appelles ?", "var(--pen)"],
        ["Lucía", "Je m'appelle Lucía. Et toi ?", "var(--red)"],
        ["Hugo", "Moi, c'est Hugo. Enchanté !", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>La edad y los números</h3><p>La edad se dice con <b>avoir</b>: <i>J'ai quinze ans</i>. Para preguntar: <i>Tu as quel âge ?</i> Los números del 1 al 20: <i>un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix, onze, douze, treize, quatorze, quinze, seize, dix-sept, dix-huit, dix-neuf, vingt</i>. Ojo con la <mark>pronunciación</mark>: en <i>dix-sept</i> se pronuncian las dos palabras y la <i>x</i> suena como una <i>s</i>.</p>`,
      svg: L.filas("Preguntar y decir la edad", [
        ["Pregunta", "Tu as quel âge ?", "var(--pen)"],
        ["Respuesta", "J'ai quatorze ans.", "var(--leaf)"],
        ["Ojo", "avoir, no être", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Nacionalidad y lugar donde vives</h3><p>La nacionalidad va con <b>être</b> y concuerda en género: <i>Je suis espagnol</i> / <i>Je suis espagnol<b>e</b></i>. Para decir dónde vives se usa <b>habiter</b>: <i>J'habite <b>à</b> Valence</i> (ciudad), <i>J'habite <b>en</b> Espagne</i> (país femenino), <i>J'habite <b>au</b> Portugal</i> (país masculino). También puedes decir tus lenguas: <i>Je parle espagnol, catalan et un peu français</i>.</p>`,
      svg: L.filas("Preposiciones con lugares", [
        ["à + ciudad", "à Madrid, à Paris", "var(--pen)"],
        ["en + país fem.", "en Espagne, en France", "var(--red)"],
        ["au + país masc.", "au Portugal, au Maroc", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Être y avoir en presente</h3><p>Son los dos verbos más importantes y son <mark>irregulares</mark>. <b>Être</b> (ser/estar): je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont. <b>Avoir</b> (tener/haber): j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont. Fíjate en que <i>je</i> pasa a <b>j'</b> delante de vocal: <i>j'ai</i>, <i>j'habite</i>.</p>`,
      svg: L.tabla("Être y avoir en presente", ["être", "avoir"], [
        ["je suis", "j'ai"], ["tu es", "tu as"], ["il est", "il a"], ["ils sont", "ils ont"],
      ]),
    },
  ],
  figura: {
    titulo: "Mi tarjeta de presentación",
    svg: L.columnas("Cuatro frases para presentarse", [
      ["nombre", "JE M'APPELLE", ["Je m'appelle", "Lucía."], "var(--pen)"],
      ["edad", "J'AI … ANS", ["J'ai quatorze", "ans."], "var(--leaf)"],
      ["nacionalidad", "JE SUIS", ["Je suis", "espagnole."], "var(--red)"],
      ["lugar", "J'HABITE", ["J'habite", "à Valence."], "var(--inf)"],
    ]),
  },
  video: { id: "fpC0KhjGkMM", titulo: "Je me présente. Savoir se présenter en français (niveau A1)", canal: "La prof Elisabeth", vistas: 476786, megusta: 0, busqueda: "se présenter en français" },
  quiz: [
    { q: "Para saludar a una profesora dices…", o: ["Bonjour, madame.", "Salut, ça roule ?", "Au revoir."], a: 0, e: "Formal." },
    { q: "«Tengo catorce años»:", o: ["J'ai quatorze ans.", "Je suis quatorze ans.", "J'ai quatorze."], a: 0, e: "Avoir + ans." },
    { q: "«Vivo en España»:", o: ["J'habite en Espagne.", "J'habite à Espagne.", "J'habite au Espagne."], a: 0, e: "País femenino: en." },
    { q: "«Nous ___ français.»", o: ["sommes", "êtes", "sont"], a: 0, e: "Être: nous sommes." },
    { q: "Femenino de «espagnol»:", o: ["espagnole", "espagnola", "espagnolle"], a: 0, e: "+ e." },
  ],
  examen: [
    { q: "«Ils ___ deux frères.» (avoir)", o: ["ont", "sont", "avez"], a: 0, e: "Ils ont." },
    { q: "«Comment tu ___ ?»", o: ["t'appelles", "appelles", "m'appelle"], a: 0, e: "Verbo pronominal." },
    { q: "«Vivo en Lisboa, en Portugal»:", o: ["à Lisbonne, au Portugal", "en Lisbonne, en Portugal", "au Lisbonne, à Portugal"], a: 0, e: "à + ciudad; au + país masculino." },
  ],
  feynman: ["Cuándo usar tu y cuándo vous", "Cómo decir el nombre y la edad", "Las preposiciones à, en y au con lugares", "El presente de être y avoir"],
  mapa: mapa("SE PRÉSENTER", "var(--eso)", [
    ["Saludar", "bonjour · salut", "var(--pen)"],
    ["Nombre · edad", "je m'appelle · j'ai … ans", "var(--leaf)"],
    ["Lugar", "à · en · au", "var(--red)"],
    ["Verbos", "être · avoir", "var(--inf)"],
  ]),
  tarjetas: [
    ["Tu / vous", "Tu con amigos y familia; vous con adultos desconocidos o para varias personas."],
    ["Decir la edad", "Con avoir: J'ai quatorze ans."],
    ["à / en / au", "à + ciudad; en + país femenino; au + país masculino."],
    ["Être en presente", "je suis, tu es, il est, nous sommes, vous êtes, ils sont."],
    ["Avoir en presente", "j'ai, tu as, il a, nous avons, vous avez, ils ont."],
  ],
  familias: ["Pedidle que se presente en francés en treinta segundos como si estuviera en un intercambio.", "Practicad juntos los números del 1 al 20 con fechas de cumpleaños de la familia.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: saludar, presentarse y dar información personal básica; presente de être y avoir; preposiciones con nombres geográficos (RD 217/2022, Segunda Lengua Extranjera 3º; nivel A1 del MCER).",
    ideas: ["Cadena de presentaciones en círculo con una pelota.", "Fichas de identidad de personajes francófonos famosos.", "Vídeo de presentación de 30 segundos para un intercambio escolar."],
  },
  fuentes: [
    L.BOE,
    { t: "TV5MONDE Apprendre le français", url: "https://apprendre.tv5monde.com/" },
    { t: "Le Conjugueur (Le Figaro)", url: "https://leconjugueur.lefigaro.fr/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Contar del 20 al 100", "Hacer preguntas sencillas con est-ce que y escribir una presentación"],
  bloques: [
    { tras: "Saludar y despedirse", html: `<h3>Los pronombres personales sujeto</h3><p>En francés el verbo casi nunca va sin pronombre, porque muchas formas suenan igual (<i>je parle</i>, <i>tu parles</i>, <i>il parle</i>). Los pronombres son:</p>${L.tb(["Francés", "Español", "Observación"], [["je (j')", "yo", "j' delante de vocal o h muda"], ["tu", "tú", "informal"], ["il / elle", "él / ella", "también para cosas"], ["on", "uno, nosotros", "muy usado en la lengua hablada: <i>on va au ciné ?</i>"], ["nous", "nosotros/as", ""], ["vous", "vosotros/as, usted, ustedes", "plural o formal"], ["ils / elles", "ellos / ellas", "ils si hay algún masculino"]])}<p>El pronombre <mark>on</mark> es muy práctico: va con el verbo en tercera persona del singular y en la conversación sustituye casi siempre a <i>nous</i>: <i>On est en troisième</i> (estamos en tercero).</p>` },
    { tras: "La edad y los números", html: `<h3>Los números del 20 al 100</h3><p>Del 20 al 69 los números son regulares: <i>vingt, trente, quarante, cinquante, soixante</i>. Con el 1 se añade <b>et</b> (<i>vingt et un</i>, <i>trente et un</i>) y con los demás, un guion (<i>vingt-deux</i>). A partir del 70, los números franceses de Francia <mark>suman y multiplican</mark>:</p>${L.tb(["Número", "En francés", "Literalmente"], [["70", "soixante-dix", "sesenta y diez"], ["71", "soixante et onze", "sesenta y once"], ["80", "quatre-vingts", "cuatro veintes"], ["81", "quatre-vingt-un", "cuatro veintes uno"], ["90", "quatre-vingt-dix", "cuatro veintes diez"], ["100", "cent", "cien"]])}<p>En Bélgica y Suiza se dice <i>septante</i> (70) y <i>nonante</i> (90), y en parte de Suiza también <i>huitante</i> (80).</p>` },
    { tras: "Nacionalidad y lugar donde vives", html: `<h3>Hacer preguntas sencillas</h3><p>En francés hay tres maneras de hacer una pregunta, de más informal a más formal:</p><ul><li>Con la <b>entonación</b>, subiendo la voz al final: <i>Tu habites à Valence ?</i></li><li>Con <b>est-ce que</b> delante de la frase: <i>Est-ce que tu habites à Valence ?</i></li><li>Con la <b>inversión</b> del sujeto y el verbo, unidos por un guion: <i>Habites-tu à Valence ?</i></li></ul><p>Con palabras interrogativas: <i>Où habites-tu ?</i> (¿dónde?), <i>Comment tu t'appelles ?</i> (¿cómo?), <i>Quel âge as-tu ?</i> (¿qué edad?), <i>Tu parles quelles langues ?</i> (¿qué lenguas?). Fíjate en que en francés se deja un <mark>espacio</mark> antes del signo de interrogación y que no se pone signo de apertura.</p>` },
    { tras: "Être y avoir en presente", html: `<h3>Pronunciar bien: la e muda y la liaison</h3><p>Dos fenómenos de pronunciación aparecen en cuanto te presentas:</p><ul><li>La <b>e final</b> no se pronuncia: <i>je m'appell<u>e</u></i>, <i>espagnol<u>e</u></i>. Pero hace sonar la consonante anterior: <i>français</i> [fʁɑ̃sɛ] / <i>française</i> [fʁɑ̃sɛz].</li><li>La <b>liaison</b>: una consonante final muda se pronuncia cuando la palabra siguiente empieza por vocal. <i>Nous avons</i> suena [nuzavɔ̃], <i>vous êtes</i> [vuzɛt], <i>ils ont</i> [ilzɔ̃].</li></ul><p>Esta liaison permite distinguir <i>ils <b>s</b>ont</i> [ilsɔ̃] (son, de être) de <i>ils <b>z</b>ont</i> [ilzɔ̃] (tienen, de avoir). ¡Una sola consonante cambia el <mark>significado</mark>!</p>` },
    { tras: "Être y avoir en presente", html: `<h3>Escribir una presentación</h3><p>Para presentarte por escrito, por ejemplo en un correo a un compañero de intercambio, sigue este orden: saludo, nombre y edad, nacionalidad y lugar, familia o mascota, gustos y despedida.</p><p><i>Salut Léa !<br>Je m'appelle Lucía et j'ai quatorze ans. Je suis espagnole et j'habite à Valence, en Espagne. Je parle espagnol, valencien et un peu français. J'ai un frère et un chat qui s'appelle Miko. J'aime la musique et le basket. Et toi ?<br>À bientôt !<br>Lucía</i></p><p>Usa <mark>conectores</mark> sencillos como <i>et</i> (y), <i>mais</i> (pero) y <i>aussi</i> (también) para que el texto no sea una lista de frases sueltas.</p>` },
  ],
  videos: [
    ["Être y avoir en presente", L.vid("VpBEFVJcSQM", "Verbos être y avoir en francés (curso de francés básico, clase 5)", "Clases de Francés Fácil con Nelson", 1175985)],
    ["Los números del 20 al 100", L.vid("albId8yngwA", "Números en francés del 1 al 100", "Clases de Francés Fácil con Nelson", 1294138)],
  ],
  ejemplos: [
    ["Preséntate a una profesora francesa en tres frases.", ["Saludo formal: Bonjour, madame.", "Nombre y edad: Je m'appelle Marc, j'ai quinze ans.", "Lugar: Je suis espagnol et j'habite à Saragosse."], "Bonjour, madame. Je m'appelle Marc, j'ai quinze ans. Je suis espagnol et j'habite à Saragosse."],
    ["Escribe en letras: 75 y 98.", ["75 = 60 + 15 → soixante-quinze.", "98 = 4 × 20 + 18 → quatre-vingt-dix-huit.", "Se unen con guiones."], "soixante-quinze; quatre-vingt-dix-huit."],
    ["Transforma con est-ce que: «Tu parles anglais ?»", ["Se añade est-ce que al principio.", "El resto de la frase no cambia.", "Se mantiene el signo de interrogación con espacio."], "Est-ce que tu parles anglais ?"],
  ],
  errores: [
    "Decir *je suis quatorze ans: la edad va con avoir.",
    "Usar el verbo sin pronombre: *suis espagnol → je suis espagnol.",
    "Escribir *je habite: delante de vocal o h muda, je → j'.",
    "Decir *en Portugal: los países masculinos llevan au.",
    "Tutear a un adulto desconocido: con él se usa vous.",
  ],
  ejercicios: [
    ["Escribe dos saludos y dos despedidas.", "Bonjour, Salut; Au revoir, À bientôt."],
    ["Pregunta el nombre a un compañero y a un adulto.", "Comment tu t'appelles ? / Comment vous appelez-vous ?"],
    ["Conjuga être con je, nous e ils.", "je suis, nous sommes, ils sont."],
    ["Conjuga avoir con tu, vous e elles.", "tu as, vous avez, elles ont."],
    ["Completa: J'habite ___ Barcelone, ___ Espagne.", "à Barcelone, en Espagne."],
    ["Escribe el femenino de: français, italien, allemand.", "française, italienne, allemande."],
    ["Escribe en letras: 16, 21, 70, 80.", "seize, vingt et un, soixante-dix, quatre-vingts."],
    ["Haz la pregunta con inversión: «Tu habites où ?»", "Où habites-tu ?"],
    ["Traduce: «Tengo trece años y vivo en Bilbao».", "J'ai treize ans et j'habite à Bilbao."],
    ["Escribe una presentación de cuatro frases.", "Respuesta abierta. Ejemplo: Salut ! Je m'appelle Ana. J'ai quatorze ans. Je suis espagnole et j'habite à Murcie."],
  ],
  quiz: [
    ["«On» va con el verbo en…", ["3.ª persona del singular", "1.ª del plural", "2.ª del plural"], 0, "On est, on va."],
    ["80 en francés:", ["quatre-vingts", "huitante-zéro", "soixante-vingt"], 0, "Cuatro veintes."],
    ["La pregunta más formal es…", ["Habites-tu à Paris ?", "Tu habites à Paris ?", "Est-ce que tu habites à Paris ?"], 0, "La inversión."],
    ["En «vous êtes», la s de vous suena…", ["[z]", "muda", "[s]"], 0, "Liaison."],
    ["71 en francés:", ["soixante et onze", "septante-un", "soixante-onze-un"], 0, "En Francia."],
  ],
  tarjetas: [
    ["On", "Pronombre muy usado en la lengua hablada; equivale a nous: on est en troisième."],
    ["Números 70-90", "soixante-dix, quatre-vingts, quatre-vingt-dix."],
    ["Est-ce que", "Se pone delante de una frase para hacer una pregunta: Est-ce que tu viens ?"],
  ],
});
