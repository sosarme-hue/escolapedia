// Francés 4º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "4-eso",
  titulo: "Les pronoms compléments",
  minutos: 40,
  objetivos: ["Sustituir el complemento directo (COD) por le, la, l', les", "Sustituir el complemento indirecto (COI) por lui, leur", "Usar y y en, y colocar los pronombres en la frase"],
  claves: ["COD", "COI", "le / la / les", "lui / leur", "y", "en", "place du pronom"],
  pregunta: {
    texto: "«Tu as vu le film ?» — «Oui, je l'ai vu.» ¿Qué es ese «l'» y por qué va delante del verbo?",
    respuesta: "Es un <mark>pronombre complemento</mark> que sustituye a «le film» para no repetirlo, como «lo» en «sí, lo he visto». En francés, igual que en español, va <b>delante del verbo conjugado</b> (o del auxiliar en passé composé).",
  },
  bloques: [
    {
      html: `<h3>Pronombres COD</h3><p>Sustituyen al complemento <b>directo</b> (sin preposición): <mark>me, te, le, la, nous, vous, les</mark>. Delante de vocal: m', t', l'. «Je regarde <u>la télé</u>» → «Je <b>la</b> regarde». «Tu connais <u>Marc</u> ?» → «Oui, je <b>le</b> connais».</p>`,
      svg: L.frase("Pronombre COD: Je regarde la télé, je la regarde", [
        ["Je regarde", "", "var(--line)"], ["la télé.", "COD", "var(--pen)"], ["Je", "", "var(--line)"], ["la", "pronom", "var(--red)"], ["regarde.", "", "var(--line)"],
      ], "le · la · l' · les"),
    },
    {
      html: `<h3>Pronombres COI</h3><p>Sustituyen a un complemento <b>indirecto de persona introducido por à</b>: <mark>me, te, lui, nous, vous, leur</mark>. «Je parle <u>à ma mère</u>» → «Je <b>lui</b> parle». «J'écris <u>à mes amis</u>» → «Je <b>leur</b> écris». Ojo: <i>lui</i> sirve para él y para ella.</p>`,
      svg: L.tabla("Pronombres COD y COI", ["", "COD", "COI"], [
        ["il / elle", "le / la", "lui"], ["ils / elles", "les", "leur"], ["je", "me", "me"], ["nous", "nous", "nous"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Los pronombres y y en</h3><p><b>Y</b> sustituye a un <b>lugar</b> o a <i>à + cosa</i>: «Tu vas à Paris ?» → «Oui, j'<b>y</b> vais». «Je pense à l'examen» → «J'<b>y</b> pense». <b>En</b> sustituye a <i>de + cosa</i> o a una <mark>cantidad</mark>: «Tu veux du pain ?» → «Oui, j'<b>en</b> veux». «J'ai trois frères» → «J'<b>en</b> ai trois».</p>`,
      svg: L.filas("Usos de y y de en", [
        ["y = lugar · à + cosa", "Tu vas à Paris ? J'y vais.", "var(--leaf)"],
        ["en = de + cosa · cantidad", "Des frères ? J'en ai trois.", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Dónde se colocan</h3><p>Delante del verbo conjugado: «Je <b>le</b> vois». En <b>passé composé</b>, delante del auxiliar: «Je <b>l'</b>ai vu». Con <b>verbo + infinitivo</b>, delante del infinitivo: «Je vais <b>le</b> voir». En <b>negativa</b>, el pronombre va pegado al verbo, dentro de ne… pas: «Je <b>ne le</b> vois <b>pas</b>».</p>`,
      svg: L.filas("Posición del pronombre", [
        ["Présent", "Je le vois.", "var(--pen)"], ["Passé composé", "Je l'ai vu.", "var(--leaf)"],
        ["+ infinitif", "Je vais le voir.", "var(--inf)"], ["Négation", "Je ne le vois pas.", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Con el imperativo afirmativo</h3><p>En el imperativo afirmativo el pronombre va <mark>detrás del verbo, con guion</mark>, y <i>me</i> / <i>te</i> se convierten en <b>moi</b> / <b>toi</b>: «Regarde-<b>le</b> !», «Donne-<b>moi</b> le livre !», «Vas-<b>y</b> !». En negativo vuelve delante: «Ne le regarde pas !».</p>`,
      svg: L.filas("Pronombres con imperativo", [
        ["Afirmativo", "Regarde-le !", "var(--leaf)"], ["Con moi", "Aide-moi !", "var(--pen)"],
        ["Negativo", "Ne le regarde pas !", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "¿Qué pronombre uso?",
    svg: L.columnas("Guía para elegir el pronombre complemento", [
      ["sin preposición", "COD", ["le · la · les", "Je le prends."], "var(--pen)"],
      ["à + persona", "COI", ["lui · leur", "Je lui parle."], "var(--leaf)"],
      ["lugar · à + cosa", "Y", ["J'y vais.", "J'y pense."], "var(--inf)"],
      ["de + cosa · cantidad", "EN", ["J'en veux.", "J'en ai deux."], "var(--red)"],
    ]),
  },
  video: { id: "NPS4hnCHv-4", titulo: "Les pronoms compléments d'objet direct et indirect en français (COD et COI)", canal: "Parlez-vous FRENCH", vistas: 1514543, megusta: 0, busqueda: "pronoms COD COI francés" },
  quiz: [
    { q: "«Tu manges la pomme ?» «Oui, je ___ mange.»", o: ["le", "la", "lui"], a: 1, e: "La pomme es femenino singular y COD: la." },
    { q: "«Tu téléphones à Paul ?» «Oui, je ___ téléphone.»", o: ["le", "lui", "leur"], a: 1, e: "Téléphoner à + persona: COI singular, lui." },
    { q: "«Vous allez au cinéma ?» «Oui, nous ___ allons.»", o: ["y", "en", "le"], a: 0, e: "Lugar: y." },
    { q: "«Tu as des frères ?» «Oui, j'___ ai deux.»", o: ["y", "en", "les"], a: 1, e: "Cantidad: en." },
    { q: "Pon el pronombre: «J'ai vu le film.»", o: ["J'ai le vu.", "Je l'ai vu.", "Je ai le vu."], a: 1, e: "En passé composé, el pronombre va delante del auxiliar." },
  ],
  examen: [
    { q: "«Je parle à mes parents.» → «Je ___ parle.»", o: ["les", "leur", "lui"], a: 1, e: "COI plural: leur." },
    { q: "Imperativo con pronombre: «Ayúdame»", o: ["Me aide !", "Aide-moi !", "Aide-me !"], a: 1, e: "Imperativo afirmativo: verbo-moi." },
    { q: "Negativa de «Je le connais»:", o: ["Je ne le connais pas.", "Je le ne connais pas.", "Je ne connais le pas."], a: 0, e: "Ne + pronombre + verbo + pas." },
  ],
  feynman: ["La diferencia entre COD y COI", "Cuándo uso y y cuándo en", "Dónde va el pronombre en passé composé y con infinitivo", "Qué pasa con el imperativo afirmativo"],
  mapa: mapa("PRONOMS", "var(--eso)", [
    ["COD", "le · la · l' · les", "var(--pen)"],
    ["COI", "lui · leur", "var(--leaf)"],
    ["Y / EN", "lieu · quantité", "var(--red)"],
    ["Place", "avant le verbe / l'auxiliaire", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Pronombres COD", "me, te, le, la, nous, vous, les (l' ante vocal)."],
    ["Pronombres COI", "me, te, lui, nous, vous, leur (para à + persona)."],
    ["El pronombre y", "Sustituye a un lugar o a à + cosa: J'y vais."],
    ["El pronombre en", "Sustituye a de + cosa o a una cantidad: J'en veux deux."],
    ["Posición en passé composé", "Delante del auxiliar: Je l'ai vu."],
  ],
  familias: ["Hacedle preguntas en francés sobre objetos de casa y que responda con pronombre: «Tu aimes le chocolat ? — Oui, je l'aime».", "Pedidle que os explique en español la diferencia entre lui y le.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: pronombres personales complemento, y / en, y su posición (RD 217/2022, Segunda Lengua Extranjera 4º; nivel A2+ del MCER).",
    ideas: ["Tarjetas con objetos y personas: preguntar y responder sustituyendo.", "Juego de la oca con frases para transformar con pronombres.", "Diálogos de compras con en para cantidades."],
  },
  fuentes: [
    L.BOE,
    { t: "TV5MONDE Apprendre le français: les pronoms", url: "https://apprendre.tv5monde.com/" },
    { t: "Le Point du FLE: pronoms compléments", url: "https://www.lepointdufle.net/" },
  ],
  revisado: "2026-11-12",
};
