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

// Nivel libro (4º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso4L7").libro(module.exports, {
  lectura: ["Les étés chez ma grand-mère", `<p>«<i>Quand j'étais petit, je passais tous les étés chez ma grand-mère, en Bretagne. Sa maison était blanche, avec des volets bleus, et elle sentait toujours le pain chaud. Le matin, nous allions au marché; l'après-midi, je jouais sur la plage avec mes cousins. Un jour, pendant que nous construisions un château de sable, un énorme chien est arrivé et a tout détruit !</i>»</p><p>Así recuerda Hugo, un chico de 16 años, los veranos de su infancia en un texto para la clase de francés. Fíjate en cómo funcionan los tiempos: casi todo está en <b>imparfait</b> (<i>j'étais, je passais, était, sentait, allions, jouais, construisions</i>), porque describe cómo eran las cosas y lo que se hacía habitualmente. Solo cuando ocurre algo puntual e inesperado aparece el <b>passé composé</b> (<i>est arrivé, a détruit</i>).</p><p>El imparfait es el tiempo de los <b>recuerdos</b>, las <b>descripciones</b> y los <b>cuentos</b> («<i>Il était une fois…</i>»). Corresponde en gran medida al pretérito imperfecto español («era, pasaba, jugaba»), así que tienes ventaja. En este tema aprenderás a formarlo sin errores, a combinarlo con el passé composé y con el plus-que-parfait, y escribirás tus propios recuerdos en francés.</p>`],
  mas: [
    ["<h3>Cómo se forma</h3>", `<p>El único verbo que no sigue la regla es <b>être</b>, porque su forma nous (<i>sommes</i>) no termina en -ons: su radical es <b>ét-</b> (<i>j'étais, nous étions</i>). Todos los demás, incluso los muy irregulares, son regulares en imparfait: <i>faire → nous faisons → je faisais</i>; <i>prendre → nous prenons → je prenais</i>; <i>boire → nous buvons → je buvais</i>. Por eso es el tiempo más fácil del francés.</p>`],
    ["<h3>Para qué sirve</h3>", `<p>Piensa en el imparfait como el <b>decorado</b> de una obra de teatro: el lugar, el tiempo que hacía, cómo eran los personajes, qué estaban haciendo. El passé composé, en cambio, son las <b>acciones</b> que hacen avanzar la historia. Por eso los verbos <i>être, avoir, faire</i> (para el tiempo) y los de sentimiento o pensamiento (<i>penser, croire, savoir, vouloir</i>) aparecen casi siempre en imparfait en las narraciones.</p>`],
    ["<h3>Imparfait y passé composé juntos</h3>", `<p>Un buen truco para decidir: si puedes decir en español «estaba + gerundio» o «solía», usa el imparfait; si la acción tiene un principio y un final claros o se puede contar (una vez, tres veces), usa el passé composé. «Je <b>regardais</b> la télé» (estaba viendo) / «J'<b>ai regardé</b> la télé pendant deux heures» (la vi, acción completa con duración cerrada).</p>`],
    ["<h3>Ortografía: -ger, -cer y la doble i</h3>", `<p>La razón de estos cambios es la pronunciación: delante de <i>a</i> y <i>o</i>, la <i>g</i> sonaría /g/ y la <i>c</i> sonaría /k/. Por eso se añade una <b>e</b> (<i>mangeais</i>) o se pone <b>cédille</b> (<i>commençais</i>). En cambio, ante <i>i</i> no hace falta: <i>nous mangions, nous commencions</i>. Y la doble i aparece porque el radical ya termina en i: <i>étudi- + -ions</i>. Lo mismo ocurre con <i>rire</i> (<i>nous riions</i>) y con <i>crier</i> (<i>vous criiez</i>).</p>`],
    ["<h3>El imparfait para describir</h3>", `<p>Para describir el tiempo que hacía, se usa <b>il faisait</b> + adjetivo (<i>beau, chaud, froid, gris</i>) e <b>il y avait</b> + sustantivo (<i>du vent, du soleil, du brouillard</i>), además de <i>il pleuvait</i> e <i>il neigeait</i>. Para las personas, <i>il avait</i> + rasgos físicos (<i>les cheveux longs, une barbe</i>) e <i>il était</i> + carácter o aspecto (<i>grand, timide, gentil</i>). Estas fórmulas te servirán para cualquier relato.</p>`],
    ["<h3>El plus-que-parfait</h3>", `<p>El plus-que-parfait es imprescindible cuando cambias el orden de los hechos y das un salto atrás: «Je suis arrivé en retard. J'<b>avais raté</b> le bus». Sin él, el lector entendería que perdiste el autobús después de llegar. También aparece con <i>déjà</i> («Il était déjà parti») y en los lamentos con <i>si</i>: «Si j'<b>avais su</b>, je serais venu» (Si lo hubiera sabido, habría venido).</p>`],
  ],
  svgs: [
    ["<h3>Ortografía: -ger, -cer y la doble i</h3>", "Ortografía del imparfait", [["-ger", "je mangeais · nous mangions"], ["-cer", "je commençais · nous commencions"], ["Doble i", "nous étudiions · vous riiez"]]],
    ["<h3>El imparfait para describir</h3>", "El imparfait para describir", [["Tiempo", "Il faisait froid."], ["Lugar", "La maison était grande."], ["Personas", "Elle avait les yeux verts."]]],
    ["<h3>Hábitos y recuerdos de la infancia</h3>", "Hábitos del pasado con el imparfait", [["Quand j'étais petit…", "cuando era pequeño"], ["Tous les étés…", "todos los veranos"], ["D'habitude…", "normalmente"]]],
    ["<h3>Una historia con los dos tiempos</h3>", "Imparfait y passé composé en una historia", [["Imparfait", "decorado: il pleuvait"], ["Passé composé", "acción: le chat est entré"], ["Pista", "soudain → passé composé"]]],
    ["<h3>Si on… ? Propuestas y deseos</h3>", "Si + imparfait para proponer y desear", [["Proponer", "Si on allait au cinéma ?"], ["Desear", "Si seulement j'avais…"], ["Hipótesis", "Si j'étais riche, …"]]],
    ["<h3>El plus-que-parfait</h3>", "Plus-que-parfait: imparfait de avoir / être + participio", [["avoir", "j'avais fini"], ["être", "elle était partie"], ["Uso", "pasado anterior a otro pasado"]]],
  ],
  bloques: [
    { tras: "<h3>Hábitos y recuerdos de la infancia</h3>", html: `<h3>Être en train de, venir de y aller en imparfait</h3><p>Tres perífrasis muy útiles se combinan con el imparfait para matizar el pasado:</p><ul><li><b>être en train de + infinitivo</b> (estar haciendo algo, en ese momento): «J'<b>étais en train de</b> dormir quand tu as appelé» (Estaba durmiendo cuando llamaste). Destaca que la acción estaba en pleno desarrollo; a menudo basta el imparfait solo, pero esta forma la subraya.</li><li><b>venir de + infinitivo</b> (acabar de): «Je <b>venais de</b> rentrer quand il a commencé à pleuvoir» (Acababa de volver cuando empezó a llover). En pasado, <i>venir de</i> va siempre en imparfait.</li><li><b>aller + infinitivo</b> (iba a): «J'<b>allais</b> sortir, mais le téléphone a sonné» (Iba a salir, pero sonó el teléfono). Expresa algo que estaba a punto de pasar o un plan que se interrumpió.</li></ul><p>Fíjate en que las tres funcionan igual que en español («estaba…», «acababa de…», «iba a…»), así que son fáciles de usar. Con ellas tus relatos ganarán precisión: «J'allais partir quand j'ai vu quelque chose de bizarre» crea más suspense que «Je suis parti».</p><p>Recuerda que en todas ellas el segundo verbo va en <b>infinitivo</b> y que solo se conjuga el primero.</p>`, svg: ["Perífrasis en imparfait", [["être en train de", "J'étais en train de dormir."], ["venir de", "Je venais de rentrer."], ["aller + inf.", "J'allais sortir, mais…"]], "estaba · acababa de · iba a"] },
    { tras: "<h3>Palabras que ayudan</h3>", html: `<h3>Verbos de estado: casi siempre en imparfait</h3><p>Algunos verbos expresan <b>estados</b>, no acciones: <i>être, avoir, savoir, connaître, penser, croire, vouloir, pouvoir, aimer, devoir</i>. En una narración en pasado aparecen casi siempre en imparfait, porque describen una situación que duraba: «Je ne <b>savais</b> pas la réponse», «Elle <b>voulait</b> partir», «Nous <b>pensions</b> que c'était facile».</p><p>Pero cuando se usan en passé composé cambian de matiz y pasan a indicar un <b>momento concreto</b> o un cambio:</p><ul><li><i>savoir</i>: «Je <b>savais</b>» (lo sabía) / «J'<b>ai su</b>» (me enteré).</li><li><i>connaître</i>: «Je la <b>connaissais</b>» (la conocía) / «Je l'<b>ai connue</b> en 2020» (la conocí, la vi por primera vez).</li><li><i>pouvoir</i>: «Je <b>pouvais</b> sortir» (podía, tenía permiso) / «J'<b>ai pu</b> finir» (pude, lo conseguí).</li><li><i>vouloir</i>: «Il <b>voulait</b> venir» (quería) / «Il n'<b>a</b> pas <b>voulu</b> venir» (se negó a venir).</li><li><i>avoir</i>: «J'<b>avais</b> peur» (tenía miedo) / «J'<b>ai eu</b> peur» (me dio miedo, en un momento).</li></ul><p>El español hace exactamente la misma distinción con el imperfecto y el indefinido («sabía / supe», «conocía / conocí»), así que puedes guiarte por tu intuición.</p>`, svg: ["Verbos de estado: imparfait o passé composé", [["savoir", "je savais / j'ai su"], ["connaître", "je connaissais / j'ai connu"], ["pouvoir", "je pouvais / j'ai pu"], ["avoir peur", "j'avais peur / j'ai eu peur"]]] },
    { tras: "<h3>El plus-que-parfait</h3>", html: `<h3>El imparfait en el estilo indirecto</h3><p>Cuando contamos lo que alguien dijo en pasado (<i>il a dit que…, elle m'a demandé si…</i>), los tiempos retroceden, igual que en español y en inglés. El <b>presente</b> pasa a <b>imparfait</b>: «Je suis fatigué», a dit Paul → Paul a dit qu'il <b>était</b> fatigué (dijo que estaba cansado).</p><p>El resto de cambios siguen la misma lógica: el <b>passé composé</b> pasa a <b>plus-que-parfait</b> («J'ai fini» → il a dit qu'il <b>avait fini</b>), el <b>futur</b> pasa a <b>conditionnel</b> («Je viendrai» → elle a dit qu'elle <b>viendrait</b>) y el <b>futur proche</b> pasa a <i>allait</i> + infinitivo («Je vais partir» → il a dit qu'il <b>allait</b> partir).</p><p>Las preguntas indirectas también usan el imparfait: «Tu as faim ?» → Il m'a demandé <b>si j'avais</b> faim. «Où habites-tu ?» → Elle m'a demandé <b>où j'habitais</b>. Fíjate en que desaparecen la inversión y el <i>est-ce que</i>: el orden es sujeto + verbo.</p><p>Además, hay que cambiar los pronombres y las expresiones de tiempo: <i>aujourd'hui → ce jour-là</i>, <i>demain → le lendemain</i>, <i>hier → la veille</i>. Así podrás contar conversaciones en tus relatos sin repetir siempre las palabras exactas.</p>`, svg: ["Estilo indirecto en pasado", [["présent → imparfait", "il a dit qu'il était…"], ["p. composé → plus-que-p.", "qu'il avait fini"], ["futur → conditionnel", "qu'elle viendrait"], ["demain →", "le lendemain"]]] },
    { html: `<h3>Escribir un recuerdo o un cuento</h3><p>El imparfait es la base de dos tipos de texto que se piden mucho en 4º: el <b>recuerdo personal</b> y el <b>cuento</b>. Los dos siguen una estructura parecida:</p><ol><li><b>Situación inicial</b> en imparfait: dónde, cuándo, quién, cómo eran las cosas. «Quand j'avais dix ans, j'habitais dans un petit village. Tous les samedis, j'allais chez mon ami Léo…» o, en un cuento, «<b>Il était une fois</b> une princesse qui vivait dans un château…».</li><li><b>Elemento que lo cambia todo</b> en passé composé, a menudo introducido por <i>un jour, soudain, tout à coup</i>: «Un jour, nous avons trouvé une vieille clé dans le jardin».</li><li><b>Desarrollo</b> combinando los dos tiempos (y el plus-que-parfait para lo anterior): «Nous ne savions pas que la clé avait appartenu au grand-père de Léo…».</li><li><b>Final</b> en passé composé y, si quieres, una reflexión en presente: «Depuis ce jour, nous sommes inséparables».</li></ol><p>Para que el texto sea rico, añade adjetivos de descripción (<i>grand, vieux, mystérieux, sombre</i>), conectores (<i>d'abord, ensuite, puis, finalmente, enfin</i>) y sensaciones (<i>j'avais peur, j'étais heureux</i>). Y revisa siempre la concordancia del participio con être.</p>`, svg: ["Estructura de un recuerdo o un cuento", [["Situación", "imparfait: Il était une fois…"], ["Cambio", "Un jour, soudain… (p. composé)"], ["Desarrollo", "los dos tiempos"], ["Final", "Depuis ce jour…"]]] },
  ],
  grupos: [3, 4, 4, 4],
  ejemplos: [
    ["Completa: «Je (aller) ___ sortir quand mon père m'(appeler) ___.»", ["Iba a salir: aller en imparfait + infinitivo.", "La llamada interrumpe: passé composé."], "J'<b>allais</b> sortir quand mon père m'<b>a appelé</b>."],
    ["Elige: «Je (connaissais / ai connu) ma meilleure amie en 2019.»", ["Hay una fecha concreta: el momento en que se conocieron.", "Connaître en passé composé = conocer por primera vez."], "J'<b>ai connu</b> ma meilleure amie en 2019."],
    ["Pasa a estilo indirecto: «J'ai faim», a dit Léa.", ["Presente → imparfait.", "Je → elle."], "Léa a dit qu'elle <b>avait</b> faim."],
  ],
  errores: ["Usar el radical de nous con être: «nous sommions» ✗ → «nous étions» ✓ (être es la única excepción)."],
  niveles: "bbmmmbmmma",
  ejercicios: [
    ["b", "Forma el imparfait: je (parler), nous (finir), ils (vendre).", "je <b>parlais</b>, nous <b>finissions</b>, ils <b>vendaient</b>."],
    ["b", "Forma el imparfait de être: je, nous, elles.", "j'<b>étais</b>, nous <b>étions</b>, elles <b>étaient</b>."],
    ["b", "Forma el imparfait de: faire (tu), boire (il), prendre (vous).", "tu <b>faisais</b>, il <b>buvait</b>, vous <b>preniez</b>."],
    ["b", "Escribe el imparfait de étudier con nous.", "nous <b>étudiions</b> (doble i)."],
    ["b", "Traduce: «Cuando era pequeña, tenía un perro.»", "Quand j'<b>étais</b> petite, j'<b>avais</b> un chien."],
    ["b", "Completa: «Il (faire) ___ beau et le ciel (être) ___ bleu.»", "Il <b>faisait</b> beau et le ciel <b>était</b> bleu."],
    ["b", "Escribe tres palabras que suelen ir con el imparfait.", "d'habitude, souvent, tous les jours (toujours, autrefois, chaque été…)."],
    ["b", "¿Cómo empiezan los cuentos en francés?", "<b>Il était une fois…</b> (Érase una vez…)."],
    ["b", "Escribe una frase con venir de en imparfait: acababa de comer.", "Je <b>venais de</b> manger."],
    ["m", "Completa: «J'(être) ___ en train de lire quand le téléphone (sonner) ___.»", "J'<b>étais</b> en train de lire quand le téléphone <b>a sonné</b>."],
    ["m", "Elige: «Je (savais / ai su) la vérité hier soir, quand Paul me l'a dite.»", "<b>J'ai su</b>: me enteré en un momento concreto."],
    ["m", "Elige: «Il (pleuvait / a plu) quand nous sommes sortis.»", "<b>pleuvait</b>: es el decorado de la acción."],
    ["m", "Pasa a estilo indirecto: «Je viendrai demain», a dit Marc.", "Marc a dit qu'il <b>viendrait</b> le lendemain."],
    ["m", "Pasa a estilo indirecto: «Tu habites où ?», m'a demandé Inès.", "Inès m'a demandé <b>où j'habitais</b>."],
    ["m", "Completa con plus-que-parfait: «Quand je suis arrivé, le film (commencer) ___.»", "le film <b>avait commencé</b>."],
    ["m", "Propón con si on: ir a la playa el domingo.", "<b>Si on allait</b> à la plage dimanche ?"],
    ["m", "Traduce: «Iba a llamarte, pero me quedé sin batería.»", "J'<b>allais</b> t'appeler, mais je n'avais plus de batterie."],
    ["a", "Escribe un recuerdo de infancia de 60 palabras con imparfait y dos passé composé.", "Modelo: «Quand j'avais huit ans, j'habitais à Séville. Tous les dimanches, j'allais au parc avec mon grand-père. Il me racontait des histoires et nous mangions des glaces. Un jour, j'ai perdu mon ballon dans le lac. Mon grand-père a sauté dans l'eau pour le chercher ! Nous riions encore de cette histoire.»"],
    ["a", "Explica la diferencia: «J'avais peur» / «J'ai eu peur».", "«J'avais peur»: tenía miedo (estado que duraba). «J'ai eu peur»: me asusté en un momento concreto."],
    ["a", "Corrige: «Quand j'ai été petit, je suis allé à la plage tous les étés.»", "Quand j'<b>étais</b> petit, j'<b>allais</b> à la plage tous les étés. (Descripción y hábito: imparfait.)"],
    ["a", "Pasa a estilo indirecto: «J'ai perdu mes clés et je vais rentrer tard», a dit ma sœur.", "Ma sœur a dit qu'elle <b>avait perdu</b> ses clés et qu'elle <b>allait</b> rentrer tard."],
    ["a", "Escribe el comienzo de un cuento (50 palabras) con Il était une fois, una descripción y un hecho inesperado.", "Modelo: «Il était une fois un petit garçon qui vivait au bord de la mer. Il était timide et il n'avait pas d'amis. Chaque soir, il regardait les bateaux. Un soir, une bouteille est arrivée sur la plage avec un message mystérieux.»"],
    ["a", "Completa con el tiempo adecuado: «Elle (ne pas pouvoir) ___ dormir parce qu'elle (boire) ___ trop de café.»", "Elle <b>ne pouvait pas</b> dormir parce qu'elle <b>avait bu</b> trop de café."],
    ["a", "Escribe tres deseos con si seulement + imparfait.", "Ejemplo: «Si seulement j'avais plus de temps !» «Si seulement il faisait beau !» «Si seulement je parlais mieux français !»"],
    ["a", "Compara tu vida de hace diez años con la actual en tres frases (imparfait / présent).", "Ejemplo: «Avant, j'habitais à Madrid; maintenant, j'habite à Valencia. Avant, je jouais au foot; maintenant, je fais du basket. Avant, je n'avais pas de portable.»"],
    ["a", "Explica por qué en «Je regardais la télé quand mon frère est entré» cada verbo va en un tiempo distinto.", "Regardais describe una acción en desarrollo (decorado); est entré es la acción puntual que la interrumpe."],
  ],
  cuartas: ["el futuro", "finirai", "il étaient", "fais", "sonnera", "mangeaient", "allera", "aurai", "il a arrivé", "Una vez fue", "irons", "toujours", "-ions"],
  quiz: [
    ["«J'___ en train de dormir quand tu as appelé.»", ["étais", "ai été", "suis", "serai"], 0, "Être en train de en imparfait."],
    ["«Je ___ de rentrer quand il a plu.» (acababa de)", ["venais", "suis venu", "viens", "viendrai"], 0, "Venir de en pasado: imparfait."],
    ["«J'___ sortir, mais il a commencé à pleuvoir.» (iba a)", ["allais", "suis allé", "irai", "vais"], 0, "Aller + infinitivo en imparfait."],
    ["«Je l'___ en 2020.» (la conocí)", ["ai connue", "connaissais", "connais", "connaîtrai"], 0, "Momento concreto: passé composé."],
    ["«Il a dit qu'il ___ fatigué.»", ["était", "est", "sera", "a été"], 0, "Presente → imparfait en estilo indirecto."],
    ["«Elle m'a demandé où j'___.»", ["habitais", "habite", "ai habité", "habiterai"], 0, "Pregunta indirecta en pasado."],
    ["«Demain» en estilo indirecto pasado:", ["le lendemain", "la veille", "hier", "aujourd'hui"], 0, "Al día siguiente."],
    ["Imparfait de «boire» con nous:", ["nous buvions", "nous boirions", "nous boivions", "nous bevions"], 0, "Radical buv- (nous buvons)."],
    ["«Soudain, le chat ___.»", ["est entré", "entrait", "entre", "entrera"], 0, "Soudain → acción puntual."],
    ["«Si seulement j'___ plus grand !»", ["étais", "suis", "serai", "ai été"], 0, "Deseo: si seulement + imparfait."],
  ],
  examen: [
    ["Imparfait de «être» con «vous»:", ["vous étiez", "vous êtiez", "vous sommiez", "vous étez"], 0, "Radical ét-."],
    ["«Quand j'étais petit, je ___ au foot.»", ["jouais", "ai joué", "joue", "jouerai"], 0, "Hábito: imparfait."],
    ["«Elle a dit qu'elle ___ le lendemain.»", ["viendrait", "viendra", "vient", "venait"], 0, "Futur → conditionnel."],
    ["«Je ne ___ pas la réponse.» (no la sabía)", ["savais", "ai su", "sais", "saurai"], 0, "Estado: imparfait."],
    ["«Quand nous sommes arrivés, ils ___ déjà ___.»", ["étaient / partis", "sont / partis", "avaient / parti", "étaient / partir"], 0, "Plus-que-parfait con être."],
  ],
  tarjetas: [
    ["Être en train de", "Estaba haciendo: j'étais en train de lire."],
    ["Venir de (pasado)", "Acababa de: je venais de rentrer."],
    ["Savais / ai su", "Lo sabía / me enteré."],
    ["Estilo indirecto", "présent → imparfait; futur → conditionnel."],
  ],
  glosario: [
    ["imparfait", "Pretérito imperfecto: descripciones, hábitos y acciones en desarrollo en el pasado."],
    ["passé composé", "Pretérito para acciones puntuales y terminadas."],
    ["plus-que-parfait", "Pluscuamperfecto: imparfait de avoir / être + participio."],
    ["radical", "Raíz del verbo; en imparfait, la forma nous del presente sin -ons."],
    ["description", "Descripción de lugares, personas y situaciones."],
    ["habitude", "Costumbre, hábito."],
    ["être en train de", "Estar haciendo algo."],
    ["venir de", "Acabar de."],
    ["discours indirect", "Estilo indirecto."],
    ["le lendemain", "Al día siguiente."],
    ["la veille", "El día anterior."],
    ["soudain", "De repente."],
    ["autrefois", "Antiguamente, en otro tiempo."],
    ["Il était une fois", "Érase una vez."],
  ],
  situacion: {
    titulo: "Le livre des souvenirs",
    reto: "La clase prepara un pequeño libro digital en francés con recuerdos de infancia de los alumnos y de sus familias, que se enviará al instituto de intercambio en Francia para que conozcan cómo era la vida aquí hace años.",
    pasos: ["Entrevista a un familiar mayor sobre su infancia: dónde vivía, cómo era su escuela, a qué jugaba, qué comía.", "Toma notas y escribe sus respuestas en francés en imparfait.", "Escribe también un recuerdo propio de 100-120 palabras con un hecho inesperado en passé composé.", "Añade una cita de tu familiar en estilo indirecto (il m'a dit que…).", "Ilustra el texto con una foto antigua o un dibujo.", "Reunid todos los textos en un libro digital y presentadlo en clase."],
    producto: "Un libro digital de recuerdos con un texto de cada alumno y una entrevista familiar.",
    evaluacion: ["Forma el imparfait sin errores, incluido être.", "Distingue imparfait y passé composé según su función en el relato.", "Usa el plus-que-parfait y el estilo indirecto cuando hace falta.", "El texto describe con riqueza y está bien organizado."],
  },
  saberes: "Decret 175/2022 de Catalunya (Segona llengua estrangera, 4t d'ESO): narració i descripció en passat.",
  minutos: 100,
});
