// Francés 4º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "4-eso",
  titulo: "Se présenter et décrire",
  minutos: 35,
  objetivos: ["Presentarse y presentar a otra persona", "Describir el físico y el carácter con la concordancia correcta", "Usar être y avoir en presente sin errores"],
  claves: ["se présenter", "s'appeler", "être", "avoir", "adjectifs", "féminin", "c'est / il est"],
  pregunta: {
    texto: "En francés se dice «J'ai 15 ans», literalmente «tengo 15 años», como en español. Pero se dice «Je suis grand» para «soy alto». ¿Qué dos verbos necesitas para hablar de ti?",
    respuesta: "<mark>Être</mark> (ser / estar) y <mark>avoir</mark> (tener). Son los dos verbos más importantes del francés: con ellos dices tu edad, cómo eres, qué tienes… y además sirven para formar el passé composé.",
  },
  bloques: [
    {
      html: `<h3>Presentarse</h3><p>Lo básico: <b>Je m'appelle</b> Lucas. <b>J'ai</b> 15 ans. <b>J'habite à</b> Valence, <b>en</b> Espagne. <b>Je suis</b> espagnol(e). <b>J'aime</b> le basket et la musique. Para presentar a otra persona: <mark>Je te présente</mark> mon ami Hugo. <i>Il a 16 ans.</i></p>`,
      svg: L.dialogo("Diálogo de presentación en francés", [
        ["Léa", "Salut ! Comment tu t'appelles ?", "var(--pen)"],
        ["Marco", "Je m'appelle Marco. J'ai 15 ans.", "var(--leaf)"],
        ["Léa", "Tu habites où ?", "var(--pen)"],
        ["Marco", "J'habite à Séville, en Espagne.", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Être y avoir</h3><p>Hay que saberlos de memoria. <b>Être</b>: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont. <b>Avoir</b>: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont. Ojo: <mark>«J'ai faim / soif / froid»</mark> = tengo hambre / sed / frío.</p>`,
      svg: L.tabla("Conjugación de être y avoir en presente", ["", "être", "avoir"], [
        ["je / j'", "suis", "ai"], ["tu", "es", "as"], ["il / elle", "est", "a"], ["nous", "sommes", "avons"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Describir el físico</h3><p>Para el pelo y los ojos se usa <b>avoir</b>: <i>J'ai les cheveux bruns / blonds / roux, longs / courts</i>; <i>J'ai les yeux bleus / verts / marron</i>. Para la estatura y el cuerpo, <b>être</b>: <i>Je suis grand(e), petit(e), mince</i>. También: <i>Il porte des lunettes</i> (lleva gafas).</p>`,
      svg: L.filas("Describir el físico con avoir y être", [
        ["avoir", "les cheveux longs", "var(--leaf)"], ["avoir", "les yeux verts", "var(--leaf)"],
        ["être", "grand(e), mince", "var(--pen)"], ["porter", "des lunettes", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>El femenino de los adjetivos</h3><p>Regla general: <mark>+ e</mark> (grand → grand<b>e</b>; si ya termina en -e no cambia: sympathique). Otras terminaciones: -eux → <b>-euse</b> (heureux → heureuse), -if → <b>-ive</b> (sportif → sportive), -on → <b>-onne</b> (mignon → mignonne), -er → <b>-ère</b>. Irregulares: beau → belle, gentil → gentille.</p>`,
      svg: L.tabla("Formación del femenino de los adjetivos", ["Masculin", "Féminin"], [
        ["grand", "grande"], ["heureux", "heureuse"], ["sportif", "sportive"], ["beau", "belle"],
      ], "var(--red)"),
    },
    {
      html: `<h3>El carácter y «c'est / il est»</h3><p>Adjetivos de carácter: <i>sympa, drôle, timide, bavard(e), sérieux / sérieuse, généreux / généreuse, paresseux / paresseuse</i>. Para describir se usa <b>il / elle est + adjetivo</b> («Elle est drôle»), pero <b>c'est + determinante + nombre</b> («C'est une fille drôle», «C'est mon frère»).</p>`,
      svg: L.filas("C'est frente a il est", [
        ["Il est + adj.", "Il est timide.", "var(--pen)"],
        ["C'est + un/mon…", "C'est un garçon timide.", "var(--red)"],
      ], "ojo: no «c'est timide» para personas"),
    },
  ],
  figura: {
    titulo: "Mi ficha en francés",
    svg: L.columnas("Cuatro bloques para presentarse: identidad, físico, carácter y gustos", [
      ["identité", "QUI ?", ["Je m'appelle…", "J'ai … ans."], "var(--pen)"],
      ["physique", "COMMENT ?", ["J'ai les yeux…", "Je suis grand(e)."], "var(--leaf)"],
      ["caractère", "CARACTÈRE", ["Je suis drôle", "et sympa."], "var(--red)"],
      ["goûts", "J'AIME", ["J'adore le foot.", "Je déteste…"], "var(--inf)"],
    ]),
  },
  video: { id: "ShHHXG2JZoc", titulo: "Dialogue : se présenter en français", canal: "Français, C'est facile", vistas: 1355782, megusta: 0, busqueda: "se présenter en français" },
  quiz: [
    { q: "«Tengo 15 años» en francés es…", o: ["Je suis 15 ans.", "J'ai 15 ans.", "J'ai 15 années."], a: 1, e: "La edad se expresa con avoir: J'ai 15 ans." },
    { q: "«Nous ___ espagnols.»", o: ["avons", "sommes", "êtes"], a: 1, e: "Être: nous sommes." },
    { q: "Femenino de «sportif»:", o: ["sportife", "sportive", "sportifle"], a: 1, e: "-if → -ive." },
    { q: "«Elle a les ___ bleus.»", o: ["yeux", "cheveux", "lunettes"], a: 0, e: "Les yeux = los ojos." },
    { q: "¿Qué frase es correcta?", o: ["C'est timide.", "Il est timide.", "Il est un garçon timide."], a: 1, e: "Il est + adjetivo; c'est + un + nombre." },
  ],
  examen: [
    { q: "Femenino de «heureux»:", o: ["heureuse", "heureuxe", "heureusse"], a: 0, e: "-eux → -euse." },
    { q: "«Ils ___ deux chats.»", o: ["sont", "ont", "as"], a: 1, e: "Avoir: ils ont." },
    { q: "«Je te présente ___ amie Clara.»", o: ["ma", "mon", "mes"], a: 1, e: "Ante vocal se usa mon aunque sea femenino: mon amie." },
  ],
  feynman: ["Cinco frases para presentarte", "Être y avoir en presente", "Cómo se forma el femenino de los adjetivos", "Cuándo uso c'est y cuándo il est"],
  mapa: mapa("SE PRÉSENTER", "var(--eso)", [
    ["Identité", "Je m'appelle · J'ai … ans", "var(--pen)"],
    ["Physique", "avoir les yeux · être grand", "var(--leaf)"],
    ["Caractère", "drôle · timide · sympa", "var(--red)"],
    ["Grammaire", "être · avoir · féminin", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Être en presente", "je suis, tu es, il est, nous sommes, vous êtes, ils sont."],
    ["Avoir en presente", "j'ai, tu as, il a, nous avons, vous avez, ils ont."],
    ["La edad en francés", "Con avoir: J'ai quinze ans."],
    ["Femenino de -eux / -if", "heureux → heureuse; sportif → sportive."],
    ["C'est / il est", "Il est + adjetivo; c'est + determinante + nombre."],
  ],
  familias: ["Pedidle que presente en francés a cada miembro de la familia con dos adjetivos.", "Jugad a «¿Quién es quién?» en francés con fotos de famosos.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: presentarse, describir personas y expresar gustos; morfología del adjetivo (RD 217/2022, Segunda Lengua Extranjera 4º; nivel A2 del MCER).",
    ideas: ["Perfil de red social ficticio en francés con foto y descripción.", "Retrato robot: un alumno describe y otro dibuja.", "Speed-dating de presentaciones con cronómetro de 1 minuto."],
  },
  fuentes: [
    L.BOE,
    { t: "TV5MONDE Apprendre le français", url: "https://apprendre.tv5monde.com/" },
    { t: "Le Point du FLE: les adjectifs", url: "https://www.lepointdufle.net/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Hacer y responder preguntas personales con las tres formas de interrogación", "Usar los artículos contractos y la negación", "Escribir un retrato de un amigo o familiar"],
  bloques: [
    { tras: "Presentarse", html: `<h3>Hacer preguntas: tres formas</h3><p>En francés hay tres maneras de preguntar, de más informal a más formal:</p>${L.tb(["Registro", "Forma", "Ejemplo"], [["informal (oral)", "solo entonación", "Tu habites où ?"], ["estándar", "est-ce que + frase", "Où est-ce que tu habites ?"], ["formal (escrito)", "inversión verbo-sujeto", "Où habites-tu ?"]])}<p>Preguntas básicas: <i>Comment tu t'appelles ? Quel âge as-tu ? Où habites-tu ? Qu'est-ce que tu aimes faire ? Tu as des frères et sœurs ?</i> En la inversión con <i>il / elle</i>, si el verbo acaba en vocal se añade una <b>-t-</b> para que suene bien: <mark>« A-t-il un chien ? »</mark>, « Où va-t-elle ? ». Recuerda que en francés se deja un espacio antes de <b>?</b> y <b>!</b>.</p>` },
    { tras: "Être y avoir", html: `<h3>La negación: ne… pas</h3><p>La negación francesa tiene <b>dos partes</b> que rodean al verbo conjugado: <i>ne</i> delante y <i>pas</i> detrás. «Je <b>ne</b> suis <b>pas</b> timide», «Il <b>n'</b>a <b>pas</b> de frères». Delante de vocal, <i>ne</i> se apostrofa: <b>n'</b>.</p><p>Después de una negación, los artículos <i>un, une, des</i> se convierten en <b>de</b> (o <b>d'</b>): «J'ai <b>un</b> chat» → «Je n'ai pas <b>de</b> chat»; «Elle a <b>des</b> amis» → «Elle n'a pas <b>d'</b>amis». Otras negaciones: <i>ne… jamais</i> (nunca), <i>ne… plus</i> (ya no), <i>ne… rien</i> (nada), <i>ne… personne</i> (nadie). En el francés oral se suele omitir el <i>ne</i>: «J'sais pas», pero por escrito es obligatorio.</p>` },
    { tras: "Describir el físico", html: `<h3>Gustos y aficiones con los artículos</h3><p>Para hablar de gustos se usan <i>aimer, adorer, détester, préférer</i> + <b>artículo definido</b> (le, la, l', les) o + infinitivo: «J'adore <b>la</b> musique», «Je déteste <b>les</b> examens», «J'aime <b>lire</b>».</p><p>Para las actividades se usan <i>jouer</i> y <i>faire</i> con artículos contractos:</p><ul><li><b>Jouer à</b> + deporte o juego: à + le = <b>au</b> (au foot, au tennis), à + les = <b>aux</b> (aux cartes), à la, à l'.</li><li><b>Jouer de</b> + instrumento: de + le = <b>du</b> (du piano), de la (de la guitare).</li><li><b>Faire de</b> + actividad: <b>du</b> sport, <b>de la</b> natation, <b>de l'</b>équitation.</li></ul><p>Así: «Je joue <b>au</b> basket et <b>de la</b> guitare, et je fais <b>du</b> théâtre».</p>` },
    { tras: "El femenino de los adjetivos", html: `<h3>Plural y posición de los adjetivos</h3><p>El plural se forma casi siempre con <b>-s</b>, que no se pronuncia: <i>grand → grands</i>. Las terminaciones <b>-eau</b> y <b>-al</b> cambian: <i>beau → beaux, original → originaux</i>; y si el adjetivo ya acaba en <b>-s</b> o <b>-x</b>, no cambia: <i>heureux → heureux</i>.</p><p>En francés, como en español, la mayoría de adjetivos van <b>detrás</b> del nombre: «un garçon <i>sympathique</i>», «les yeux <i>verts</i>». Pero algunos muy frecuentes van <b>delante</b>; se recuerdan con la sigla <mark>BAGS</mark>: <b>B</b>eauty (beau, joli), <b>A</b>ge (jeune, vieux, nouveau), <b>G</b>oodness (bon, mauvais) y <b>S</b>ize (grand, petit, gros). «Une <b>petite</b> maison», «un <b>bon</b> ami», «une <b>jolie</b> robe». <i>Beau, nouveau</i> y <i>vieux</i> tienen formas especiales ante vocal: <i>un bel homme, un nouvel ami, un vieil arbre</i>.</p>` },
    { tras: "El carácter y «c'est / il est»", html: `<h3>Escribir un retrato</h3><p>Un buen retrato de una persona sigue este orden:</p><ol><li><b>Presentación</b>: quién es y qué relación tenéis. «Je vais vous présenter ma meilleure amie, Inés.»</li><li><b>Datos</b>: edad, dónde vive, qué hace. «Elle a quinze ans et elle habite à côté de chez moi.»</li><li><b>Físico</b>: «Elle est assez grande et mince. Elle a les cheveux bouclés et les yeux noirs.»</li><li><b>Carácter</b>, con ejemplos: «Elle est très drôle : elle me fait toujours rire.»</li><li><b>Gustos</b>: «Elle adore la danse et elle joue du violon.»</li><li><b>Cierre</b>: «C'est une personne formidable et je l'adore.»</li></ol><p>Usa matizadores para no repetir <i>très</i>: <i>assez</i> (bastante), <i>un peu</i> (un poco), <i>plutôt</i> (más bien), <i>vraiment</i> (realmente).</p>` },
  ],
  videos: [
    ["Presentarse", L.vid("y8trQNgkVPk", "Les enfants parlent français: je me présente", "Les enfants parlent français", 1228341)],
    ["Describir el físico", L.vid("kMWv_F2fQIQ", "Apprendre le français: se présenter", "Eveiller mon enfant", 1011520)],
  ],
  ejemplos: [
    ["Pasa a negativa: «J'ai des cousins en France et je joue au tennis.»", ["Ne… pas rodea al verbo: je n'ai pas…, je ne joue pas…", "Des pasa a de (d' ante vocal): pas de cousins.", "«Au tennis» no cambia, porque es un artículo definido contracto."], "Je n'ai pas de cousins en France et je ne joue pas au tennis."],
    ["Haz la misma pregunta de tres formas: «¿Dónde vive tu hermano?»", ["Informal: entonación y palabra interrogativa al final: Ton frère habite où ?", "Estándar: Où est-ce que ton frère habite ?", "Formal con sujeto nombre: se repite el pronombre: Où ton frère habite-t-il ?"], "Ton frère habite où ? / Où est-ce que ton frère habite ? / Où ton frère habite-t-il ?"],
    ["Describe a un chico con estos datos: alto, pelo castaño, ojos verdes, simpático y un poco tímido; toca la batería.", ["Estatura con être: Il est grand.", "Pelo y ojos con avoir y artículo les: Il a les cheveux châtains et les yeux verts.", "Carácter con matizador: Il est sympa mais un peu timide.", "Instrumento con jouer de + du: Il joue de la batterie."], "Il est grand, il a les cheveux châtains et les yeux verts. Il est sympa mais un peu timide. Il joue de la batterie."],
  ],
  errores: [
    "Decir *Je suis 15 ans: la edad va con avoir: J'ai 15 ans.",
    "Olvidar ne o pas en la negación escrita.",
    "Mantener un / des después de la negación: *je n'ai pas un chien → pas de chien.",
    "Olvidar la -t- en la inversión: *A il → A-t-il ?",
    "Poner todos los adjetivos detrás: *une maison petite → une petite maison.",
    "Usar el artículo con jouer mal: *je joue le foot → je joue au foot.",
  ],
  ejercicios: [
    ["Pregunta con est-ce que: «¿Qué te gusta hacer?»", "Qu'est-ce que tu aimes faire ?"],
    ["Pregunta con inversión: «¿Cuántos años tienes?»", "Quel âge as-tu ?"],
    ["Pon en negativa: «Elle a un frère.»", "Elle n'a pas de frère."],
    ["Completa con au, à la, du o de la: «Je joue ___ piano et ___ volley.»", "du piano, au volley."],
    ["Completa: «Je fais ___ natation et ___ sport.»", "de la natation, du sport."],
    ["Pon en plural: «un nouveau livre original».", "de nouveaux livres originaux."],
    ["Coloca el adjetivo: «une fille (jeune)», «un pantalon (noir)».", "une jeune fille, un pantalon noir."],
    ["Escribe la forma ante vocal: un (beau) appartement, un (vieux) homme.", "un bel appartement, un vieil homme."],
    ["Traduce: «Ya no vivo en Madrid.»", "Je n'habite plus à Madrid."],
    ["Escribe un retrato de tres frases de un familiar.", "Por ejemplo: «Ma grand-mère s'appelle Carmen. Elle est petite et elle a les cheveux blancs. Elle est très généreuse et elle adore faire des gâteaux.»"],
  ],
  quiz: [
    ["«___ -il un vélo ?»", ["A-t", "A", "Est-t"], 0, "Inversión con -t-."],
    ["«Je n'ai pas ___ chat.»", ["de", "un", "le"], 0, "Un → de tras negación."],
    ["«Je joue ___ guitare.»", ["de la", "à la", "la"], 0, "Jouer de + instrumento."],
    ["«Une ___ maison»", ["petite", "petit", "petites"], 0, "BAGS: delante y en femenino."],
    ["Plural de «beau»:", ["beaux", "beaus", "belles"], 0, "-eau → -eaux."],
  ],
  tarjetas: [
    ["Ne… pas + de", "Je n'ai pas de frère (un, des → de)."],
    ["Jouer à / jouer de", "Jouer au foot (deporte); jouer du piano (instrumento)."],
    ["Adjetivos BAGS", "Van delante: beau, jeune, bon, petit… (une petite maison)."],
  ],
});
