// Francés 4º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "4-eso",
  titulo: "L'imparfait",
  minutos: 35,
  objetivos: ["Formar el imparfait a partir de la persona nous del presente", "Usarlo para descripciones, hábitos y acciones en curso en el pasado", "Combinar imparfait y passé composé en un relato"],
  claves: ["imparfait", "radical de nous", "-ais -ait -ions -iez -aient", "description", "habitude", "passé composé"],
  pregunta: {
    texto: "«Quand j'étais petit, je jouais au foot tous les jours.» ¿Esta frase cuenta algo que pasó una vez o algo que pasaba siempre?",
    respuesta: "Algo que <mark>pasaba siempre</mark>, un hábito. Para eso el francés usa el <b>imparfait</b>, que corresponde a nuestro pretérito imperfecto (jugaba, era). Para lo que pasó una vez se usa el passé composé.",
  },
  bloques: [
    {
      html: `<h3>Cómo se forma</h3><p>Es muy regular: toma la persona <b>nous del presente</b>, quita <i>-ons</i> y añade <mark>-ais, -ais, -ait, -ions, -iez, -aient</mark>. Nous <b>parl</b>ons → je parlais. Nous <b>finiss</b>ons → je finissais. Nous <b>fais</b>ons → je faisais.</p>`,
      svg: L.frase("Formación del imparfait: nous parlons, quitar ons, añadir ais", [
        ["nous parl-ons", "presente", "var(--muted)"], ["parl-", "radical", "var(--pen)"], ["-ais", "terminación", "var(--red)"],
      ], "je parlais · nous parlions"),
    },
    {
      html: `<h3>Las terminaciones</h3><p>Cinco de las seis terminaciones suenan igual [ɛ]: <i>je parlais, tu parlais, il parlait, ils parlaient</i>. La única excepción de radical es <b>être</b>: <mark>j'étais</mark>, tu étais, il était, nous étions… («c'était super»).</p>`,
      svg: L.tabla("Terminaciones del imparfait con el verbo parler", ["", "parler", "être"], [
        ["je", "parlais", "étais"], ["il / elle", "parlait", "était"], ["nous", "parlions", "étions"], ["ils / elles", "parlaient", "étaient"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Para qué sirve</h3><p>1) <b>Describir</b> en pasado personas, lugares, el tiempo: «Il faisait beau, la mer était calme». 2) <b>Hábitos</b>: «Le dimanche, nous allions chez mamie». 3) Una acción <mark>en curso</mark> cuando pasa otra: «Je dormais quand le téléphone a sonné».</p>`,
      svg: L.filas("Tres usos del imparfait", [
        ["Description", "Il faisait beau.", "var(--leaf)"], ["Habitude", "Je jouais tous les jours.", "var(--pen)"],
        ["En cours", "Je dormais quand…", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Imparfait y passé composé juntos</h3><p>En un relato, el <b>imparfait</b> es el <mark>decorado</mark> (cómo era todo, qué estaba pasando) y el <b>passé composé</b> son las <mark>acciones</mark> que hacen avanzar la historia: «Il pleuvait (decorado). Soudain, quelqu'un a frappé à la porte (acción)».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Imparfait como fondo largo y passé composé como acciones puntuales que interrumpen">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="80" width="220" height="26" rx="8" fill="var(--leaf)" opacity=".85"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <text x="130" y="98" font-size="13" fill="#fff">il pleuvait… (imparfait)</text>
          <path d="M90 40 V 116" stroke="var(--red)" stroke-width="4"/><path d="M180 40 V 116" stroke="var(--red)" stroke-width="4"/>
          <text x="90" y="32" font-size="12" fill="var(--red)">on a frappé</text><text x="180" y="32" font-size="12" fill="var(--red)">j'ai ouvert</text>
          <text x="130" y="140" font-size="12" fill="var(--muted)">decorado = imparfait</text>
          <text x="130" y="160" font-size="12" fill="var(--red)">acciones = passé composé</text>
        </g></svg>`,
    },
    {
      html: `<h3>Palabras que ayudan</h3><p>Con <b>imparfait</b>: <i>autrefois, d'habitude, souvent, tous les jours, chaque été, quand j'étais petit(e), pendant que</i>. Con <b>passé composé</b>: <i>hier, soudain, tout à coup, un jour, ce matin, l'année dernière</i>.</p>`,
      svg: L.filas("Marcadores temporales", [
        ["Imparfait", "d'habitude · souvent", "var(--leaf)"], ["Imparfait", "quand j'étais petit", "var(--leaf)"],
        ["Passé composé", "hier · soudain", "var(--red)"], ["Passé composé", "un jour · ce matin", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "¿Imparfait o passé composé?",
    svg: L.columnas("Comparación entre imparfait y passé composé", [
      ["¿cómo era? ¿qué pasaba?", "IMPARFAIT", ["descripción, hábitos,", "acción en curso"], "var(--leaf)"],
      ["¿qué pasó?", "PASSÉ COMPOSÉ", ["acción terminada,", "hecho puntual"], "var(--red)"],
      ["en un cuento", "LES DEUX", ["Il pleuvait quand", "il est arrivé."], "var(--pen)"],
    ]),
  },
  video: { id: "4IexZtlIqF0", titulo: "¿Imperfecto o pasado compuesto? Diferencias entre estos dos tiempos", canal: "Guillaume Posé - Professeur de français", vistas: 756112, megusta: 35766, busqueda: "imparfait francés explicación" },
  quiz: [
    { q: "El imparfait se forma a partir de…", o: ["el infinitivo", "la persona nous del presente", "el participio"], a: 1, e: "Nous parlons → parl- + terminación." },
    { q: "«Je ___ (finir) mes devoirs.»", o: ["finissais", "finais", "finirais"], a: 0, e: "Nous finissons → finiss- + ais." },
    { q: "Imparfait de «être» con «il»:", o: ["il étais", "il était", "il a été"], a: 1, e: "Radical irregular ét- + -ait." },
    { q: "«Quand j'étais petite, je ___ du piano.»", o: ["faisais", "ai fait", "ferai"], a: 0, e: "Hábito en el pasado: imparfait." },
    { q: "«Je lisais quand le téléphone ___.»", o: ["sonnait", "a sonné", "sonne"], a: 1, e: "Acción puntual que interrumpe: passé composé." },
  ],
  examen: [
    { q: "«Nous ___ (aller) à la plage tous les étés.»", o: ["allions", "allons", "sommes allés"], a: 0, e: "Hábito: imparfait (nous allions)." },
    { q: "¿Qué palabra suele ir con passé composé?", o: ["d'habitude", "soudain", "souvent"], a: 1, e: "Soudain introduce una acción repentina." },
    { q: "Terminación de «ils» en imparfait:", o: ["-aient", "-ent", "-ont"], a: 0, e: "ils parlaient." },
  ],
  feynman: ["Cómo se forma el imparfait paso a paso", "La excepción de être", "Los tres usos del imparfait", "La diferencia con el passé composé en un relato"],
  mapa: mapa("L'IMPARFAIT", "var(--eso)", [
    ["Forme", "nous parl-ons → je parlais", "var(--pen)"],
    ["Être", "j'étais · il était", "var(--red)"],
    ["Usages", "description · habitude", "var(--leaf)"],
    ["Avec le PC", "décor + actions", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Formación del imparfait", "Radical de nous en presente + -ais, -ais, -ait, -ions, -iez, -aient."],
    ["Imparfait de être", "j'étais, tu étais, il était, nous étions, vous étiez, ils étaient."],
    ["Usos del imparfait", "Descripciones, hábitos y acciones en curso en el pasado."],
    ["Imparfait + passé composé", "Imparfait = decorado; passé composé = acciones que avanzan."],
    ["Marcadores de imparfait", "d'habitude, souvent, tous les jours, autrefois, quand j'étais petit(e)."],
  ],
  familias: ["Pedidle que cuente en francés qué hacía cuando tenía 6 años.", "Mirad una foto antigua de la familia y describidla juntos en imparfait.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: imparfait y su contraste con el passé composé en la narración (RD 217/2022, Segunda Lengua Extranjera 4º; nivel A2+ del MCER).",
    ideas: ["«Quand j'étais petit(e)…»: cada alumno escribe tres hábitos y se adivina de quién son.", "Cuento colectivo: un color para el decorado (imparfait) y otro para las acciones.", "Describir cuadros impresionistas en imparfait."],
  },
  fuentes: [
    L.BOE,
    { t: "TV5MONDE Apprendre le français: l'imparfait", url: "https://apprendre.tv5monde.com/" },
    { t: "Le Conjugueur (Le Figaro)", url: "https://leconjugueur.lefigaro.fr/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Escribir bien el imparfait de los verbos en -ger y -cer", "Usar el imparfait en propuestas y deseos (si on…?)", "Conocer el plus-que-parfait"],
  bloques: [
    { tras: "Las terminaciones", html: `<h3>Ortografía: -ger, -cer y la doble i</h3><p>Como en el presente, los verbos en <b>-ger</b> y <b>-cer</b> cambian delante de <i>a</i> para conservar el sonido: <i>manger → je mang<b>e</b>ais, il mang<b>e</b>ait</i> (pero nous mangions); <i>commencer → je commen<b>ç</b>ais, ils commen<b>ç</b>aient</i> (pero nous commencions).</p><p>Los verbos cuyo radical termina en <b>-i</b> o <b>-y</b> producen dobles letras en <i>nous</i> y <i>vous</i>: <i>étudier → nous étud<b>ii</b>ons, vous étud<b>ii</b>ez</i>; <i>rire → nous r<b>ii</b>ons</i>; <i>voir → nous vo<b>yi</b>ons</i>. Parecen errores, pero son correctas. Y recuerda el truco de la pronunciación: <mark>je parlais, tu parlais, il parlait, ils parlaient</mark> suenan exactamente igual; solo cambia la escritura.</p>` },
    { tras: "Para qué sirve", html: `<h3>El imparfait para describir</h3><p>Es el tiempo de las <b>descripciones en pasado</b>: el tiempo que hacía, el aspecto de las personas, cómo eran los lugares, lo que alguien sentía o pensaba.</p><ul><li>El tiempo: «Il <b>faisait</b> froid et il <b>neigeait</b>.»</li><li>Las personas: «Mon grand-père <b>était</b> grand et il <b>avait</b> une moustache.»</li><li>Los sentimientos: «J'<b>étais</b> nerveux parce que je ne <b>connaissais</b> personne.»</li><li>La hora y la edad: «Il <b>était</b> minuit», «J'<b>avais</b> dix ans.»</li></ul><p>Por eso los cuentos empiezan con imparfait: «Il <b>était</b> une fois une princesse qui <b>vivait</b> dans un château…» (Érase una vez…).</p>` },
    { tras: "Imparfait y passé composé juntos", html: `<h3>Una historia con los dos tiempos</h3><p>Lee este relato y fíjate en cada verbo:</p><p><i>«C'<b>était</b> un samedi d'hiver. Il <b>pleuvait</b> et je <b>m'ennuyais</b> à la maison. Soudain, mon téléphone <b>a sonné</b>. C'<b>était</b> Léa : elle m'<b>a invité</b> au cinéma. J'<b>ai accepté</b> tout de suite. Le film <b>était</b> génial et nous <b>avons beaucoup ri</b>.»</i></p><p>Los verbos en <b>imparfait</b> (était, pleuvait, m'ennuyais) pintan el escenario y los estados. Los verbos en <b>passé composé</b> (a sonné, a invité, ai accepté, avons ri) son los hechos que avanzan uno tras otro. Una pregunta útil: <mark>¿podría hacer una foto de ello? → imparfait; ¿es un paso de la acción? → passé composé</mark>.</p>` },
    { tras: "Palabras que ayudan", html: `<h3>Si on… ? Propuestas y deseos</h3><p>El imparfait tiene usos fuera del pasado:</p><ul><li><b>Si on + imparfait ?</b> para proponer algo: «<b>Si on allait</b> au cinéma ce soir ?» (¿Y si vamos…?) Es muy frecuente en la conversación.</li><li><b>Si + imparfait</b> en las condicionales imaginarias, con el condicional en la otra parte: «<b>Si j'avais</b> de l'argent, je <b>voyagerais</b>» (Si tuviera dinero, viajaría). Igual que el second conditional inglés.</li><li><b>Être en train de</b> + infinitivo en imparfait para algo que estaba ocurriendo: «J'<b>étais en train de</b> dormir quand tu as appelé».</li></ul>` },
    { tras: "Palabras que ayudan", html: `<h3>El plus-que-parfait</h3><p>Es el «pasado del pasado» (como el pluscuamperfecto español o el past perfect inglés): una acción anterior a otra acción pasada. Se forma con <b>avoir o être en imparfait + participio</b>, con las mismas reglas de auxiliar y concordancia que el passé composé:</p><ul><li>«Quand je suis arrivé, le film <b>avait</b> déjà <b>commencé</b>.»</li><li>«Elle était triste parce que son chat <b>était parti</b>.»</li><li>«Ils <b>s'étaient</b> déjà <b>couchés</b> quand nous avons sonné.»</li></ul><p>Con los tres tiempos (imparfait, passé composé y plus-que-parfait) ya puedes contar cualquier historia en francés.</p>` },
    { tras: "Para qué sirve", html: `<h3>Hábitos y recuerdos de la infancia</h3><p>El imparfait es el tiempo de los <b>recuerdos</b>: lo que hacíamos de forma habitual en una época del pasado. Corresponde al «solía», «iba», «jugaba» del español y al <i>used to</i> del inglés. Suele ir con marcadores de frecuencia o de época: <i>quand j'étais petit(e), à l'époque, autrefois, avant, tous les samedis, chaque été, d'habitude</i>.</p><p>«Quand j'<b>étais</b> petite, je <b>passais</b> les vacances chez mes grands-parents. Tous les matins, mon grand-père m'<b>emmenait</b> au marché et nous <b>achetions</b> des croissants. L'après-midi, je <b>jouais</b> avec mes cousins dans le jardin.» Fíjate en que no se cuenta un día concreto, sino lo que pasaba normalmente. Si quisieras contar un día especial («Un jour, nous sommes allés à la mer…»), cambiarías al passé composé.</p>` },
  ],
  videos: [
    ["Cómo se forma", L.vid("VxMEt0ERmJI", "El imperfecto en francés (l'imparfait): el tiempo más fácil", "Pariseando", 183381)],
    ["Imparfait y passé composé juntos", L.vid("4IexZtlIqF0", "¿Imperfecto o pasado compuesto? Diferencias", "Guillaume Posé", 756112)],
  ],
  ejemplos: [
    ["Forma el imparfait de «prendre» con je y nous.", ["Presente con nous: nous prenons.", "Quita -ons: pren-.", "Añade las terminaciones: je prenais, nous prenions."], "je prenais, nous prenions."],
    ["Completa con imparfait o passé composé: «Quand j'(être) ___ petit, j'(habiter) ___ à Lyon. Un jour, nous (déménager) ___ à Paris.»", ["«Quand j'étais petit»: estado en el pasado → imparfait.", "«J'habitais»: situación prolongada → imparfait.", "«Un jour» introduce un hecho puntual → passé composé: nous avons déménagé."], "Quand j'étais petit, j'habitais à Lyon. Un jour, nous avons déménagé à Paris."],
    ["Propón un plan con si on: ir a la piscina el sábado.", ["Estructura: Si on + imparfait + ?", "Aller en imparfait con on: allait.", "Añade el complemento de lugar y tiempo."], "Si on allait à la piscine samedi ?"],
  ],
  errores: [
    "Usar passé composé para descripciones: *il a fait beau et la mer a été calme → il faisait beau, la mer était calme.",
    "Escribir *je mangais: los verbos en -ger necesitan la e: je mangeais.",
    "Olvidar la doble i en nous étudiions.",
    "Formar el imparfait de être con el presente de nous: es irregular, ét-.",
    "Usar imparfait para una acción puntual que interrumpe: *le téléphone sonnait soudain → a sonné.",
  ],
  ejercicios: [
    ["Forma el imparfait: tu (faire), elle (avoir), vous (aller).", "tu faisais, elle avait, vous alliez."],
    ["Forma el imparfait: je (commencer), ils (manger), nous (étudier).", "je commençais, ils mangeaient, nous étudiions."],
    ["Describe en imparfait: hacía sol, el cielo era azul y los niños jugaban.", "Il faisait beau (du soleil), le ciel était bleu et les enfants jouaient."],
    ["Completa: «Je (regarder) ___ la télé quand ma mère (rentrer) ___.»", "Je regardais la télé quand ma mère est rentrée."],
    ["Traduce: «Antes íbamos a la playa todos los veranos.»", "Avant, nous allions à la plage tous les étés."],
    ["Propón con si on: ver una película.", "Si on regardait un film ?"],
    ["Completa la condicional: «Si j'(avoir) ___ un chien, je (être) ___ heureux.»", "Si j'avais un chien, je serais heureux."],
    ["Forma el plus-que-parfait: «Il (finir) ___ ses devoirs avant le dîner.»", "Il avait fini ses devoirs avant le dîner."],
    ["Forma el plus-que-parfait: «Elles (partir) ___ quand je suis arrivé.»", "Elles étaient parties quand je suis arrivé."],
    ["Escribe el comienzo de un cuento con dos verbos en imparfait.", "Por ejemplo: «Il était une fois un garçon qui vivait dans un petit village au bord de la mer.»"],
  ],
  quiz: [
    ["«Je ___ (manger) à la cantine.»", ["mangeais", "mangais", "mangeait"], 0, "-ger + e ante a."],
    ["«Si on ___ au parc ?»", ["allait", "va aller", "est allé"], 0, "Propuesta con imparfait."],
    ["«Quand j'___ dix ans…»", ["avais", "ai eu", "étais"], 0, "La edad: avoir en imparfait."],
    ["Plus-que-parfait de «arriver» con «il»:", ["il était arrivé", "il avait arrivé", "il est arrivé"], 0, "Verbo de être."],
    ["«Il était une fois…» significa…", ["Érase una vez…", "Había una vez una fiesta", "Fue una vez"], 0, "Comienzo de cuento."],
  ],
  tarjetas: [
    ["Si on + imparfait ?", "Propuesta: Si on allait au cinéma ? (¿Y si vamos…?)"],
    ["Plus-que-parfait", "Avoir/être en imparfait + participio: il avait fini."],
    ["Imparfait = foto", "Describe el escenario; el passé composé cuenta los hechos."],
  ],
});
