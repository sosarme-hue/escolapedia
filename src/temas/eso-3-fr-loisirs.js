// Francés 3º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "3-eso",
  titulo: "Les loisirs et le sport",
  minutos: 50,
  objetivos: ["Expresar gustos con aimer, adorer, préférer y détester", "Hablar de deportes con faire de y jouer à", "Decir con qué frecuencia haces una actividad"],
  claves: ["les loisirs", "aimer", "adorer", "détester", "préférer", "faire du sport", "jouer au foot", "jouer de la guitare", "souvent", "le samedi"],
  pregunta: {
    texto: "¿Por qué en francés se dice «je joue au tennis» pero «je fais de la natation»?",
    respuesta: "Porque depende del deporte. Con los <b>juegos y deportes de pelota</b> o de equipo se usa <mark>jouer à</mark> (jugar a): <i>jouer au foot, au tennis</i>. Con los demás deportes y actividades se usa <mark>faire de</mark> (hacer): <i>faire du vélo, de la natation, de l'escalade</i>. Y en los dos casos hay que contraer el artículo.",
  },
  bloques: [
    {
      html: `<h3>Expresar gustos</h3><p>Para hablar de lo que te gusta, de más a menos: <b>adorer</b> (encantar), <b>aimer bien</b> o <b>aimer</b> (gustar), <b>ne pas aimer</b> (no gustar) y <b>détester</b> (odiar). Con un nombre, siempre se usa el <mark>artículo definido</mark>: <i>J'adore <b>la</b> musique</i>, <i>Je déteste <b>le</b> rap</i>, <i>J'aime <b>les</b> jeux vidéo</i>. Con un verbo, se usa el infinitivo: <i>J'aime lire</i>.</p>`,
      svg: L.filas("Escala de gustos", [
        ["Encanta", "J'adore la musique.", "var(--red)"],
        ["Gusta", "J'aime le cinéma.", "var(--pen)"],
        ["No gusta", "Je n'aime pas le rap.", "var(--muted)"],
        ["Odio", "Je déteste les maths !", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Préférer</h3><p>Para decir lo que prefieres se usa <b>préférer</b>, un verbo en -er con un cambio de acento: <i>je préf<b>è</b>re, tu préf<b>è</b>res, il préf<b>è</b>re, nous préf<b>é</b>rons, vous préf<b>é</b>rez, ils préf<b>è</b>rent</i>. La é pasa a <mark>è</mark> cuando la terminación no se pronuncia. Para preguntar: <i>Qu'est-ce que tu préfères, le cinéma ou le théâtre ?</i></p>`,
      svg: L.tabla("Presente de préférer", ["Persona", "préférer"], [
        ["je", "préfère"], ["tu", "préfères"], ["nous", "préférons"], ["ils", "préfèrent"],
      ]),
    },
    {
      html: `<h3>Jouer à y faire de</h3><p>Con los juegos y los deportes de pelota se usa <b>jouer à</b>: <i>jouer <b>au</b> foot</i>, <i>jouer <b>au</b> basket</i>, <i>jouer <b>aux</b> cartes</i>, <i>jouer <b>aux</b> jeux vidéo</i>. Con los demás deportes y actividades se usa <b>faire de</b>: <i>faire <b>du</b> vélo</i>, <i>faire <b>de la</b> danse</i>, <i>faire <b>de l'</b>escalade</i>. Recuerda las <mark>contracciones</mark>: à + le = au, de + le = du.</p>`,
      svg: L.filas("Jouer à / faire de", [
        ["jouer au", "foot, basket, tennis", "var(--pen)"],
        ["jouer aux", "cartes, jeux vidéo", "var(--leaf)"],
        ["faire du", "vélo, judo, skate", "var(--red)"],
        ["faire de la", "danse, natation", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Instrumentos y otras aficiones</h3><p>Con los instrumentos musicales también se usa <b>jouer</b>, pero con <b>de</b>: <i>jouer <b>du</b> piano</i>, <i>jouer <b>de la</b> guitare</i>, <i>jouer <b>de la</b> batterie</i> (batería). Otras aficiones: <i>lire</i> (leer), <i>dessiner</i> (dibujar), <i>chanter</i>, <i>regarder des séries</i>, <i>sortir avec mes amis</i>, <i>faire les magasins</i> (ir de tiendas). Así, <mark>jouer au</mark> es para deportes y <mark>jouer du</mark>, para música.</p>`,
      svg: L.filas("Jouer à o jouer de", [
        ["jouer à", "deportes y juegos", "var(--pen)"],
        ["jouer de", "instrumentos", "var(--red)"],
        ["ejemplo", "jouer du piano", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>La frecuencia</h3><p>Para decir cada cuánto haces algo: <i>toujours</i> (siempre), <i>souvent</i> (a menudo), <i>parfois</i> (a veces), <i>rarement</i> (raramente) y <i>ne… jamais</i> (nunca): <i>Je <b>ne</b> joue <b>jamais</b> au golf</i>. Con los días: <i>le samedi</i> significa «los sábados» (cada sábado) y <i>samedi</i> sin artículo, «este sábado». También: <mark>une fois par semaine</mark> (una vez a la semana), <i>tous les jours</i> (todos los días).</p>`,
      svg: L.filas("Adverbios de frecuencia", [
        ["toujours", "siempre", "var(--pen)"],
        ["souvent", "a menudo", "var(--leaf)"],
        ["parfois", "a veces", "var(--inf)"],
        ["ne… jamais", "nunca", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "¿Jouer o faire?",
    svg: L.columnas("Verbos para hablar de aficiones", [
      ["deportes de pelota", "JOUER À", ["au foot,", "au tennis"], "var(--pen)"],
      ["instrumentos", "JOUER DE", ["du piano,", "de la guitare"], "var(--red)"],
      ["otros deportes", "FAIRE DE", ["du vélo,", "de la natation"], "var(--leaf)"],
    ]),
  },
  video: { id: "wUAro5nm2wU", titulo: "Comment on dit #7: les sports, loisirs et activités", canal: "Tout en français", vistas: 109891, megusta: 0, busqueda: "les loisirs en français" },
  quiz: [
    { q: "«Me encanta la música»:", o: ["J'adore la musique.", "J'adore musique.", "J'adore de la musique."], a: 0, e: "Artículo definido." },
    { q: "«Juego al fútbol»:", o: ["Je joue au foot.", "Je fais du foot.", "Je joue du foot."], a: 0, e: "Deporte de pelota: jouer à." },
    { q: "«Hago natación»:", o: ["Je fais de la natation.", "Je joue à la natation.", "Je fais la natation."], a: 0, e: "Faire de la." },
    { q: "«Toco la guitarra»:", o: ["Je joue de la guitare.", "Je joue à la guitare.", "Je fais la guitare."], a: 0, e: "Instrumento: jouer de." },
    { q: "«Nous ___ le cinéma.» (préférer)", o: ["préférons", "préfèrons", "préférez"], a: 0, e: "Con nous, é." },
  ],
  examen: [
    { q: "«Nunca juego al golf»:", o: ["Je ne joue jamais au golf.", "Je joue jamais au golf.", "Je ne jamais joue au golf."], a: 0, e: "Ne + verbo + jamais." },
    { q: "«Los sábados hago judo»:", o: ["Le samedi, je fais du judo.", "Samedis, je fais judo.", "Au samedi, je fais du judo."], a: 0, e: "Le samedi = cada sábado." },
    { q: "«Ils ___ le basket.» (préférer)", o: ["préfèrent", "préférent", "préfèrons"], a: 0, e: "Terminación muda: è." },
  ],
  feynman: ["Cuatro verbos para expresar gustos", "Cuándo se usa jouer à y cuándo faire de", "La diferencia entre jouer au y jouer du", "Cinco expresiones de frecuencia"],
  mapa: mapa("LOISIRS", "var(--eso)", [
    ["Gustos", "adorer · aimer · détester", "var(--red)"],
    ["Deportes", "jouer au · faire du", "var(--pen)"],
    ["Música", "jouer du piano", "var(--leaf)"],
    ["Frecuencia", "souvent · ne… jamais", "var(--inf)"],
  ]),
  tarjetas: [
    ["Gustos + nombre", "Siempre con artículo definido: j'aime le sport."],
    ["Jouer à", "Para deportes de pelota y juegos: jouer au foot, aux cartes."],
    ["Faire de", "Para otros deportes: faire du vélo, de la danse, de l'escalade."],
    ["Jouer de", "Para instrumentos: jouer du piano, de la guitare."],
    ["Le samedi / samedi", "Le samedi = los sábados (cada semana); samedi = este sábado."],
  ],
  familias: ["Haced una encuesta familiar en francés: «Qu'est-ce que tu aimes faire le week-end ?»", "Ved juntos un resumen deportivo en francés y anotad cinco deportes.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: expresar gustos, preferencias y frecuencia; jouer à / jouer de / faire de con artículos contractos; verbos con cambio de acento (RD 217/2022, Segunda Lengua Extranjera 3º; nivel A1-A2 del MCER).",
    ideas: ["Encuesta de aficiones en clase y gráfico de resultados en francés.", "Juego de mímica de deportes con jouer/faire.", "Perfil de un deportista francófono famoso."],
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
  objetivos: ["Proponer planes, aceptar y rechazar invitaciones", "Justificar los gustos con parce que"],
  bloques: [
    { tras: "Expresar gustos", html: `<h3>Justificar los gustos: parce que</h3><p>Para explicar por qué te gusta o no algo, se usa <b>parce que</b> (porque), que delante de vocal se convierte en <b>parce qu'</b>: <i>J'aime le basket parce que c'est un sport d'équipe</i>; <i>Je déteste courir parce qu'il fait chaud</i>.</p><p>Algunos adjetivos útiles para valorar una actividad, siempre con <mark>c'est</mark> + adjetivo masculino: <i>c'est amusant / génial / super</i> (es divertido, genial), <i>c'est intéressant</i>, <i>c'est relaxant</i>, <i>c'est fatigant</i> (cansa), <i>c'est ennuyeux</i> (aburrido), <i>c'est nul</i> (es un rollo). Para preguntar el motivo: <i>Pourquoi ?</i> (¿por qué?).</p>` },
    { tras: "Préférer", html: `<h3>Otros verbos con cambios en la raíz</h3><p>Como <i>préférer</i>, otros verbos en -er cambian ligeramente en el presente para mantener la pronunciación:</p>${L.tb(["Verbo", "Cambio", "Ejemplo"], [["acheter (comprar)", "e → è", "j'achète, nous achetons"], ["se lever (levantarse)", "e → è", "je me lève, nous nous levons"], ["appeler (llamar)", "l → ll", "j'appelle, nous appelons"], ["manger", "nous + e", "nous mangeons"], ["commencer", "nous: c → ç", "nous commençons"]])}<p>El cambio afecta a <mark>je, tu, il/elle y ils/elles</mark> (las formas con terminación muda), pero no a <i>nous</i> ni a <i>vous</i>, salvo en <i>manger</i> y <i>commencer</i>, que cambian justamente con <i>nous</i>.</p>` },
    { tras: "Jouer à y faire de", html: `<h3>El verbo faire en presente</h3><p><b>Faire</b> (hacer) es irregular y aparece constantemente en las aficiones y en el tiempo atmosférico:</p>${L.tb(["Persona", "faire", "Ejemplo"], [["je", "fais", "Je fais du karaté."], ["tu", "fais", "Tu fais du sport ?"], ["il / elle / on", "fait", "On fait une randonnée."], ["nous", "faisons", "Nous faisons du ski."], ["vous", "faites", "Vous faites de la voile ?"], ["ils / elles", "font", "Ils font du théâtre."]])}<p>Ojo con la pronunciación: <i>nous faisons</i> se pronuncia [fəzɔ̃], con una <i>e</i> muda, y <i>vous faites</i> no termina en <i>-ez</i>, como casi todos los verbos, sino en <mark>-tes</mark>, igual que <i>vous êtes</i> y <i>vous dites</i>.</p>` },
    { tras: "La frecuencia", html: `<h3>Proponer, aceptar y rechazar</h3><p>Para quedar con amigos necesitas estas fórmulas:</p><ul><li><b>Proponer</b>: <i>Tu veux venir au cinéma samedi ?</i> / <i>On va à la piscine ?</i> / <i>Ça te dit de jouer au foot ?</i></li><li><b>Aceptar</b>: <i>D'accord !</i> / <i>Avec plaisir !</i> / <i>Bonne idée !</i> / <i>Pourquoi pas ?</i></li><li><b>Rechazar con educación</b>: <i>Désolé(e), je ne peux pas, j'ai un examen.</i> / <i>Non merci, je n'aime pas trop ça.</i></li><li><b>Quedar</b>: <i>On se retrouve à quelle heure ?</i> / <i>À cinq heures devant le cinéma.</i></li></ul><p>Fíjate en que <i>vouloir</i> y <i>pouvoir</i> son irregulares: <i>je veux, tu veux</i> / <i>je peux, tu peux</i>. Y que al rechazar es <mark>educado</mark> dar una excusa.</p>` },
    { tras: "La frecuencia", html: `<h3>Hablar de tu semana</h3><p>Los días de la semana en francés no llevan mayúscula: <i>lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche</i>. Con ellos y con las expresiones de frecuencia puedes describir tu semana:</p><p><i>Je suis très sportive. Le lundi et le mercredi, je fais de la natation. Le jeudi, je joue de la guitare au conservatoire. Le week-end, je sors avec mes amis : on va souvent au cinéma ou on joue aux jeux vidéo. Je ne regarde jamais la télé, parce que c'est ennuyeux !</i></p><p>Recuerda que en Francia muchos alumnos tienen el <mark>miércoles por la tarde libre</mark>, y por eso muchas actividades extraescolares se hacen ese día.</p>` },
  ],
  videos: [
    ["Jouer à y faire de", L.vid("VZ4ZxWrAsCY", "Vocabulaire: les sports (avec les verbes faire et jouer)", "Maprofde FLE", 150564)],
    ["Expresar gustos", L.vid("342XgO2Piic", "Expresar tus gustos en francés (aimer, adorer et détester)", "Francisco Soberanis", 13324)],
  ],
  ejemplos: [
    ["Completa: «Je joue ___ tennis, je fais ___ escalade et je joue ___ piano.»", ["Tennis es un deporte de pelota: jouer au.", "Escalade es femenino con vocal: faire de l'.", "Piano es instrumento masculino: jouer du."], "Je joue au tennis, je fais de l'escalade et je joue du piano."],
    ["Invita a un amigo al parque el domingo y responde rechazando.", ["Proponer: Tu veux venir au parc dimanche ?", "Rechazar: Désolé, je ne peux pas.", "Dar una excusa: je vais chez mes grands-parents."], "— Tu veux venir au parc dimanche ? — Désolé, je ne peux pas, je vais chez mes grands-parents."],
    ["Expresa gusto y motivo: te encanta el baloncesto porque es divertido.", ["Gusto fuerte: J'adore.", "Artículo definido: le basket.", "Motivo: parce que c'est amusant."], "J'adore le basket parce que c'est amusant."],
  ],
  errores: [
    "Omitir el artículo tras los verbos de gusto: *j'aime musique → j'aime la musique.",
    "Usar jouer de con deportes: *je joue du foot → je joue au foot.",
    "No contraer el artículo: *je fais de le vélo → je fais du vélo.",
    "Olvidar el ne en la negación con jamais en la lengua escrita: *je joue jamais.",
    "Escribir *vous faisez: la forma correcta es vous faites.",
  ],
  ejercicios: [
    ["Ordena de más a menos: aimer, détester, adorer, ne pas aimer.", "adorer, aimer, ne pas aimer, détester."],
    ["Conjuga préférer con je, nous e ils.", "je préfère, nous préférons, ils préfèrent."],
    ["Completa: Il joue ___ basket et ___ batterie.", "au basket, de la batterie."],
    ["Completa: Nous faisons ___ judo et ___ danse.", "du judo, de la danse."],
    ["Conjuga faire en presente con vous y ils.", "vous faites, ils font."],
    ["Traduce: «A veces voy a la piscina los domingos».", "Parfois, je vais à la piscine le dimanche."],
    ["Pon en negativa con jamais: «Je regarde la télé.»", "Je ne regarde jamais la télé."],
    ["Propón a una amiga ir al cine el viernes.", "Tu veux venir au cinéma vendredi ?"],
    ["Acepta una invitación con dos fórmulas distintas.", "D'accord ! / Avec plaisir !"],
    ["Escribe tres frases sobre tus aficiones con un motivo.", "Respuesta abierta. Ejemplo: J'adore le foot parce que c'est un sport d'équipe. Je fais du vélo le samedi. Je déteste courir parce que c'est fatigant."],
  ],
  quiz: [
    ["«Vous ___ du sport ?» (faire)", ["faites", "faisez", "fait"], 0, "Irregular."],
    ["«J'___ un livre.» (acheter)", ["achète", "achete", "achèt"], 0, "e → è."],
    ["Para aceptar una invitación:", ["Avec plaisir !", "Désolé…", "Pourquoi ?"], 0, "Con gusto."],
    ["«Parce qu'il pleut» significa…", ["porque llueve", "para que llueva", "aunque llueva"], 0, "Motivo."],
    ["Los días de la semana en francés se escriben…", ["en minúscula", "en mayúscula", "con artículo siempre"], 0, "lundi, mardi…"],
  ],
  tarjetas: [
    ["Parce que", "Porque: j'aime le judo parce que c'est amusant."],
    ["Faire en presente", "je fais, tu fais, il fait, nous faisons, vous faites, ils font."],
    ["Proponer y aceptar", "Tu veux venir… ? — D'accord ! / Avec plaisir !"],
  ],
});
