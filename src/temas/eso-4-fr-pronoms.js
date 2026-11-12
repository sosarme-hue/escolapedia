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

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Usar los pronombres tónicos (moi, toi, lui…)", "Combinar dos pronombres en el orden correcto", "Aplicar la concordancia del participio con el COD"],
  bloques: [
    { tras: "Pronombres COI", html: `<h3>¿COD o COI? Depende del verbo</h3><p>Algunos verbos cambian respecto al español, así que hay que aprenderlos:</p>${L.tb(["Verbo", "Construcción", "Pronombre", "Ejemplo"], [["aider", "aider quelqu'un (COD)", "le / la / les", "Je <b>l'</b>aide. (le ayudo)"], ["écouter, regarder, attendre", "sin preposición (COD)", "le / la / les", "Je <b>les</b> attends."], ["téléphoner à", "à quelqu'un (COI)", "lui / leur", "Je <b>lui</b> téléphone. (la llamo)"], ["parler, répondre, écrire, dire, demander à", "à quelqu'un (COI)", "lui / leur", "Je <b>leur</b> réponds."], ["penser à, s'intéresser à", "à + persona: pronombre tónico", "à lui / à elle", "Je pense <b>à elle</b>."]])}<p>Fíjate en que <i>lui</i> sirve para masculino y femenino: «Je parle à Marie» → «Je <b>lui</b> parle».</p>` },
    { tras: "Los pronombres y y en", html: `<h3>Los pronombres tónicos</h3><p>Son <b>moi, toi, lui, elle, nous, vous, eux, elles</b>. Se usan cuando el pronombre va solo o separado del verbo:</p><ul><li>Para dar énfasis: «<b>Moi</b>, j'adore le chocolat», «<b>Lui</b>, il ne vient jamais».</li><li>Después de preposición: «avec <b>moi</b>», «chez <b>eux</b>», «pour <b>toi</b>», «à côté d'<b>elle</b>».</li><li>Sin verbo: «Qui veut un gâteau ? — <b>Moi</b> !», «Moi aussi / Moi non plus».</li><li>Después de <i>c'est</i>: «C'est <b>toi</b> ?», «C'est <b>lui</b> qui a gagné».</li><li>En comparaciones: «Il est plus grand que <b>moi</b>».</li></ul><p>Ojo: «Moi aussi» responde a una afirmación (me too); «<b>Moi non plus</b>» a una negación (yo tampoco).</p>` },
    { tras: "Dónde se colocan", html: `<h3>Dos pronombres juntos</h3><p>Cuando hay dos pronombres, se colocan en este orden fijo, delante del verbo:</p><p style="text-align:center"><b>me / te / se / nous / vous</b> → <b>le / la / les</b> → <b>lui / leur</b> → <b>y</b> → <b>en</b></p><ul><li>«Il me donne le livre» → «Il <b>me le</b> donne».</li><li>«Je donne les clés à Paul» → «Je <b>les lui</b> donne».</li><li>«Elle nous parle de ses vacances» → «Elle <b>nous en</b> parle».</li><li>«Il y a du pain ?» → «Oui, il <b>y en</b> a».</li></ul><p>Truco: <mark>le, la, les van delante de lui, leur</mark>, pero detrás de me, te, nous, vous. Y <i>y</i> y <i>en</i> siempre al final, con <i>en</i> en última posición.</p>` },
    { tras: "Dónde se colocan", html: `<h3>Concordancia del participio con el COD</h3><p>Con el auxiliar <b>avoir</b>, el participio normalmente no concuerda. Pero hay una excepción famosa: si el <b>COD va delante</b> del verbo (por ejemplo, como pronombre), el participio concuerda con él en género y número:</p><ul><li>«J'ai vu <b>la</b> série.» → «Je <b>l'</b>ai vu<b>e</b>.» (la = la série, femenino)</li><li>«J'ai acheté <b>les chaussures</b>.» → «Je <b>les</b> ai acheté<b>es</b>.»</li><li>«Les photos <b>que</b> j'ai pris<b>es</b>…» (que = les photos)</li></ul><p>No concuerda con los pronombres <b>COI</b> (lui, leur) ni con <b>en</b>: «Je <b>leur</b> ai parlé», «Des pommes ? J'<b>en</b> ai mangé». En la mayoría de verbos la concordancia no se oye, pero sí se escribe, y en los exámenes se tiene en cuenta.</p>` },
    { tras: "Con el imperativo afirmativo", html: `<h3>El imperativo negativo y con dos pronombres</h3><p>En el imperativo <b>negativo</b>, los pronombres vuelven a su sitio normal, delante del verbo y sin guion: «Regarde-le !» → «<b>Ne le</b> regarde <b>pas</b> !»; «Donne-moi ton numéro» → «<b>Ne me</b> donne <b>pas</b> ton numéro».</p><p>En el imperativo <b>afirmativo</b> con dos pronombres, el orden es <b>verbo – COD – COI</b>, con guiones: «Donne-<b>le-moi</b> !» (dámelo), «Envoie-<b>la-leur</b> !». Con <i>en</i>: «Donne-<b>m'en</b> !» (dame un poco). Y con los verbos en -er, la <i>s</i> del tú reaparece delante de <i>y</i> y <i>en</i> para que suene bien: «Va<b>s</b>-y !», «Mange<b>s</b>-en !».</p>` },
    { tras: "Los pronombres y y en", html: `<h3>En con cantidades</h3><p>El pronombre <b>en</b> es muy útil para no repetir un nombre cuando hablamos de cantidades. Sustituye al nombre, pero la <b>cantidad se mantiene</b> detrás del verbo:</p><ul><li>«Tu as combien de frères ? — J'<b>en</b> ai <b>deux</b>.» (tengo dos)</li><li>«Tu veux des fraises ? — Oui, j'<b>en</b> veux <b>un kilo</b>.»</li><li>«Il y a beaucoup d'élèves ? — Oui, il y <b>en</b> a <b>beaucoup</b>.»</li><li>«Tu as un stylo ? — Oui, j'<b>en</b> ai <b>un</b>.» / «Non, je n'<b>en</b> ai <b>pas</b>.»</li></ul><p>En español a menudo no decimos nada («Tengo dos»), por eso los hispanohablantes olvidan el <i>en</i>. En francés es obligatorio: «*J'ai deux» suena incompleto. Piensa en <i>en</i> como «de eso, de ellos».</p>` },
  ],
  videos: [
    ["Pronombres COD", L.vid("ias_lZDHeCg", "Les pronoms COD et COI en français : le / lui – les / leur", "Français avec Pierre", 324546)],
    ["Los pronombres tónicos", L.vid("DZ04XAbgPtE", "Pronombres franceses: pronombre tónico vs pronombre átono", "Guillaume Posé", 517758)],
  ],
  ejemplos: [
    ["Sustituye los complementos: «Je prête mon vélo à ma sœur.»", ["«Mon vélo» es COD masculino → le.", "«À ma sœur» es COI de persona → lui.", "Orden: le delante de lui."], "Je le lui prête."],
    ["Sustituye y pon en passé composé: «J'ai écrit la lettre.»", ["«La lettre» es COD femenino → la, que se apostrofa ante ai: l'.", "El COD va delante con avoir → el participio concuerda: écrite."], "Je l'ai écrite."],
    ["Pasa a imperativo afirmativo y negativo: «Tu donnes les photos à moi.»", ["Afirmativo: verbo – COD – COI con guiones; me → moi.", "Les photos → les; à moi → moi: Donne-les-moi !", "Negativo: pronombres delante en orden normal: Ne me les donne pas !"], "Donne-les-moi ! / Ne me les donne pas !"],
  ],
  errores: [
    "Usar le / la con los verbos de COI: *je la téléphone → je lui téléphone.",
    "Usar lui con aider: *je lui aide → je l'aide, porque aider lleva COD (al revés que «ayudarle» en español).",
    "Desordenar dos pronombres: *je lui le donne → je le lui donne.",
    "Usar un pronombre átono tras preposición: *avec me → avec moi.",
    "Olvidar la concordancia: *la série, je l'ai vu → je l'ai vue.",
    "Responder *Moi aussi a una negación: se dice Moi non plus.",
  ],
  ejercicios: [
    ["Sustituye: «Je cherche mes clés.»", "Je les cherche."],
    ["Sustituye: «Tu réponds à tes parents ?»", "Tu leur réponds ?"],
    ["Sustituye: «Nous aidons notre voisine.»", "Nous l'aidons."],
    ["Completa con un pronombre tónico: «Tu viens avec ___ ?» (nosotros)", "avec nous."],
    ["Responde: «Je n'aime pas les maths.» — (yo tampoco)", "Moi non plus."],
    ["Sustituye los dos complementos: «Elle raconte l'histoire aux enfants.»", "Elle la leur raconte."],
    ["Sustituye: «Il y a des chaises dans la salle ?» — «Oui, ___ a.»", "il y en a."],
    ["Pon en passé composé con concordancia: «Je mets la robe.» → «Je ___ (l' / mettre).»", "Je l'ai mise."],
    ["Pon en negativo: «Dis-le-lui !»", "Ne le lui dis pas !"],
    ["Traduce: «¡Dámelo!» (el libro)", "Donne-le-moi !"],
  ],
  quiz: [
    ["«Je ___ téléphone ce soir.» (a ella)", ["lui", "la", "elle"], 0, "Téléphoner à: COI."],
    ["«Il vient avec ___.» (yo)", ["moi", "me", "je"], 0, "Tónico tras preposición."],
    ["«Je ___ donne.» (el libro a Paul)", ["le lui", "lui le", "le leur"], 0, "Le delante de lui."],
    ["«Ces photos, je les ai ___.»", ["prises", "pris", "prise"], 0, "COD femenino plural delante."],
    ["«Je n'aime pas le thé.» «___»", ["Moi non plus.", "Moi aussi.", "Moi non."], 0, "Respuesta a una negación."],
  ],
  tarjetas: [
    ["Pronombres tónicos", "moi, toi, lui, elle, nous, vous, eux, elles: tras preposición o para enfatizar."],
    ["Orden de dos pronombres", "me/te/nous/vous → le/la/les → lui/leur → y → en."],
    ["Concordancia con COD delante", "Je l'ai vue (la série); les photos que j'ai prises."],
  ],
});
