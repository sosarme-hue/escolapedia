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
