// Francés 4º ESO. Explicaciones en español con ejemplos en francés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Francés",
  curso: "4-eso",
  titulo: "La vie quotidienne",
  minutos: 35,
  objetivos: ["Contar la rutina diaria con verbos pronominales", "Decir la hora y la frecuencia", "Hablar de las tareas de casa y del horario escolar"],
  claves: ["verbes pronominaux", "se lever", "l'heure", "d'abord / ensuite / enfin", "toujours / souvent / jamais", "tâches ménagères"],
  pregunta: {
    texto: "En español decimos «me levanto», «me ducho», «me visto». ¿Crees que en francés también se usa ese «me»?",
    respuesta: "¡Sí! Son los <mark>verbos pronominales</mark>: <i>je <b>me</b> lève, je <b>me</b> douche, je <b>m'</b>habille</i>. Funcionan casi igual que en español, así que la rutina diaria es uno de los temas más fáciles del francés.",
  },
  bloques: [
    {
      html: `<h3>Los verbos pronominales</h3><p>Llevan un pronombre reflexivo: <mark>me, te, se, nous, vous, se</mark>. <b>Se lever</b>: je me lève, tu te lèves, il se lève, nous nous levons, vous vous levez, ils se lèvent. Otros: <i>se réveiller, se doucher, s'habiller, se brosser les dents, se coucher</i>.</p>`,
      svg: L.tabla("Conjugación de se lever", ["", "se lever"], [
        ["je", "me lève"], ["tu", "te lèves"], ["nous", "nous levons"], ["ils", "se lèvent"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Decir la hora</h3><p><i>Quelle heure est-il ?</i> — <b>Il est</b> sept heures. 7 h 15 = sept heures <b>et quart</b>. 7 h 30 = sept heures <b>et demie</b>. 7 h 45 = huit heures <b>moins le quart</b>. Para una actividad: <mark>«à</mark> huit heures». Mediodía: <i>midi</i>; medianoche: <i>minuit</i>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Reloj: en punto arriba, et quart a la derecha, et demie abajo, moins le quart a la izquierda">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="138" cy="92" r="50" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/>
        <path d="M138 92 V 56" stroke="var(--ink)" stroke-width="3"/><path d="M138 92 L 164 92" stroke="var(--red)" stroke-width="3"/>
        <circle cx="138" cy="42" r="6" fill="var(--muted)"/><circle cx="188" cy="92" r="6" fill="var(--leaf)"/>
        <circle cx="138" cy="142" r="6" fill="var(--pen)"/><circle cx="88" cy="92" r="6" fill="var(--red)"/>
        <g ${F} font-size="13" font-weight="700">
          <text x="138" y="28" text-anchor="middle" fill="var(--muted)">heure pile (:00)</text>
          <text x="198" y="88" fill="var(--leaf)">et quart</text><text x="198" y="104" font-size="11" fill="var(--leaf)">(:15)</text>
          <text x="138" y="166" text-anchor="middle" fill="var(--pen)">et demie (:30)</text>
          <text x="78" y="88" text-anchor="end" fill="var(--red)">moins le</text><text x="78" y="104" text-anchor="end" fill="var(--red)">quart (:45)</text>
        </g></svg>`,
    },
    {
      html: `<h3>Ordenar la rutina</h3><p>Para contar el día en orden: <mark>d'abord</mark> (primero), <b>puis / ensuite</b> (luego), <b>après</b> (después), <b>enfin</b> (finalmente). Y para la frecuencia: <i>toujours, souvent, parfois, rarement</i>, <b>ne… jamais</b>: «Je ne me couche jamais avant onze heures».</p>`,
      svg: L.linea("Rutina diaria ordenada", [
        ["7h", "D'abord, je me réveille.", "var(--pen)"],
        ["7h15", "Ensuite, je me douche.", "var(--leaf)"],
        ["8h", "Puis, je vais au lycée.", "var(--inf)"],
        ["23h", "Enfin, je me couche.", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Las tareas de casa</h3><p><b>Faire</b> se usa mucho: <i>faire la vaisselle</i> (fregar), <i>faire le ménage</i> (limpiar), <i>faire les courses</i> (la compra), <i>faire son lit</i>. Otras: <i>mettre la table, sortir la poubelle, passer l'aspirateur, ranger sa chambre</i>.</p>`,
      svg: L.filas("Tareas domésticas en francés", [
        ["faire", "la vaisselle · les courses", "var(--pen)"], ["mettre", "la table", "var(--leaf)"],
        ["sortir", "la poubelle", "var(--red)"], ["ranger", "sa chambre", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>En el instituto</h3><p>En Francia el instituto de 15-18 años se llama <b>lycée</b> (el de 11-15 es el <i>collège</i>). Vocabulario: <i>l'emploi du temps</i> (horario), <i>la récré</i> (recreo), <i>la cantine</i>, <i>les devoirs</i>. Las asignaturas: <i>les maths, le français, l'histoire-géo, la SVT, l'EPS</i> (Educación Física).</p>`,
      svg: L.dialogo("Conversación sobre el instituto", [
        ["Chloé", "Tu as cours à quelle heure ?", "var(--pen)"],
        ["Hugo", "À huit heures et demie. Et toi ?", "var(--leaf)"],
        ["Chloé", "Moi, j'ai maths à neuf heures.", "var(--pen)"],
      ]),
    },
  ],
  figura: {
    titulo: "Un día normal en francés",
    svg: L.eje("Un día con verbos pronominales y horas", [
      ["7h00", "se réveiller", ["Je me", "réveille."], "var(--pen)"],
      ["7h15", "se doucher", ["Je me", "douche."], "var(--leaf)"],
      ["8h30", "aller au lycée", ["J'ai cours", "de maths."], "var(--inf)"],
      ["20h00", "dîner", ["Je mets", "la table."], "var(--red)"],
      ["23h00", "se coucher", ["Je me", "couche."], "var(--muted)"],
    ]),
  },
  video: { id: "q03k2PbUyw0", titulo: "Verbes pronominaux en français", canal: "Français avec Pierre", vistas: 450012, megusta: 0, busqueda: "la routine quotidienne en français verbes pronominaux" },
  quiz: [
    { q: "«Nous ___ à sept heures.» (se lever)", o: ["nous levons", "nous nous levons", "se levons"], a: 1, e: "Pronominal: nous nous levons." },
    { q: "7 h 30 en francés:", o: ["sept heures et quart", "sept heures et demie", "huit heures moins le quart"], a: 1, e: "Et demie = y media." },
    { q: "«Faire la vaisselle» significa…", o: ["hacer la compra", "fregar los platos", "hacer la cama"], a: 1, e: "La vaisselle = la vajilla." },
    { q: "¿Qué conector significa «finalmente»?", o: ["d'abord", "enfin", "souvent"], a: 1, e: "Enfin = por fin, finalmente." },
    { q: "«Je ___ couche ___ avant minuit.» (nunca)", o: ["ne me / jamais", "me ne / pas", "ne / jamais me"], a: 0, e: "Ne + pronombre + verbo + jamais." },
  ],
  examen: [
    { q: "8 h 45 en francés:", o: ["huit heures et quart", "neuf heures moins le quart", "huit heures et demie"], a: 1, e: "Faltan quince para las nueve: neuf heures moins le quart." },
    { q: "«Elle ___ habille.»", o: ["se", "s'", "me"], a: 1, e: "Ante vocal o h muda: s'habille." },
    { q: "En Francia, el instituto de 15 a 18 años se llama…", o: ["collège", "lycée", "école"], a: 1, e: "Lycée; el collège es de 11 a 15." },
  ],
  feynman: ["Cómo se conjuga un verbo pronominal", "Cómo se dice la hora con quart y demie", "Cuatro conectores para contar la rutina", "Cuatro tareas de casa con faire"],
  mapa: mapa("LA VIE QUOTIDIENNE", "var(--eso)", [
    ["Pronominaux", "je me lève · je me couche", "var(--pen)"],
    ["L'heure", "et quart · et demie", "var(--leaf)"],
    ["Ordre", "d'abord · ensuite · enfin", "var(--inf)"],
    ["Maison", "faire la vaisselle…", "var(--red)"],
  ], 240),
  tarjetas: [
    ["Pronombres reflexivos", "me, te, se, nous, vous, se."],
    ["Et quart / et demie", "Y cuarto / y media: sept heures et quart."],
    ["Moins le quart", "Menos cuarto: huit heures moins le quart = 7 h 45."],
    ["Conectores de orden", "d'abord, puis, ensuite, après, enfin."],
    ["Faire les courses", "Hacer la compra."],
  ],
  familias: ["Pedidle que os cuente su rutina de mañana en francés con horas.", "Repartid las tareas de casa de la semana escribiendo la lista en francés.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: describir la rutina, la hora y la frecuencia; verbos pronominales; aspectos socioculturales del sistema educativo francés (RD 217/2022, Segunda Lengua Extranjera 4º; nivel A2 del MCER).",
    ideas: ["Encuesta de rutinas y gráfico de resultados en francés.", "Comparar el emploi du temps de un lycée francés con el propio.", "Vídeo de 1 minuto «Ma journée» grabado con el móvil."],
  },
  fuentes: [
    L.BOE,
    { t: "TV5MONDE Apprendre le français", url: "https://apprendre.tv5monde.com/" },
    { t: "Éduscol: organisation du lycée (Ministère de l'Éducation nationale)", url: "https://eduscol.education.fr/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Usar los pronominales en negativa, en passé composé y con infinitivo", "Decir la hora oficial de 24 horas", "Hablar de comidas y de obligaciones con il faut y devoir"],
  bloques: [
    { tras: "Los verbos pronominales", html: `<h3>Pronominales en negativa, pasado e infinitivo</h3><ul><li><b>Negativa</b>: <i>ne</i> va antes del pronombre: «Je <b>ne me</b> lève <b>pas</b> tôt».</li><li><b>Passé composé</b>: siempre con <b>être</b> y concordancia con el sujeto: «Je me suis levé(e)», «Elles se sont douchées».</li><li><b>Con infinitivo</b>: el pronombre concuerda con el sujeto: «Je vais <b>me</b> coucher», «Nous devons <b>nous</b> dépêcher» (no *se dépêcher).</li><li><b>Imperativo</b>: afirmativo con <i>toi / nous / vous</i> detrás: «Lève-<b>toi</b> !», «Dépêchez-<b>vous</b> !»; negativo: «Ne <b>te</b> lève pas !».</li></ul><p>Algunos pronominales no tienen equivalente reflexivo en español: <i>se dépêcher</i> (darse prisa), <i>s'ennuyer</i> (aburrirse), <i>se promener</i> (pasear), <i>se reposer</i> (descansar).</p>` },
    { tras: "Decir la hora", html: `<h3>La hora oficial y las partes del día</h3><p>En horarios de trenes, cines, televisión o colegios se usa la hora de <b>24 horas</b>, y se dicen los minutos tal cual, sin <i>quart</i> ni <i>demie</i>: 14 h 30 = «<b>quatorze heures trente</b>», 20 h 45 = «<b>vingt heures quarante-cinq</b>».</p><p>Las partes del día: <i>le matin</i> (la mañana), <i>l'après-midi</i> (la tarde, hasta las 18 h aprox.), <i>le soir</i> (la tarde-noche), <i>la nuit</i> (la noche). «À sept heures <b>du matin</b>», «à cinq heures <b>de l'après-midi</b>», «à neuf heures <b>du soir</b>». Sin artículo y con un día, se indica costumbre: «<b>le lundi</b>, j'ai piscine» (todos los lunes) frente a «<b>lundi</b>, j'ai un examen» (este lunes).</p>` },
    { tras: "Ordenar la rutina", html: `<h3>Las comidas en Francia</h3><p>El horario francés es más temprano que el español: <b>le petit-déjeuner</b> (desayuno) hacia las 7, <b>le déjeuner</b> (comida) entre las 12 y las 13 h, <b>le goûter</b> (merienda de los niños) a las 16 h 30 y <b>le dîner</b> (cena) hacia las 19 h 30 o 20 h. Una comida completa tiene <i>une entrée</i> (entrante), <i>un plat principal</i>, <i>du fromage</i> y <i>un dessert</i>.</p><p>Para hablar de comida se usan los <b>partitivos</b>: <i>du</i> pain, <i>de la</i> confiture, <i>de l'</i>eau, <i>des</i> céréales. «Au petit-déjeuner, je prends <b>du</b> pain avec <b>de la</b> confiture et je bois <b>du</b> lait». En negativa pasan a <b>de</b>: «Je ne bois pas <b>de</b> café».</p>` },
    { tras: "Las tareas de casa", html: `<h3>Obligaciones: il faut y devoir</h3><p>Para hablar de lo que hay que hacer en casa o en clase:</p><ul><li><b>Il faut</b> + infinitivo: obligación general, impersonal. «<b>Il faut</b> ranger sa chambre.» (Hay que…)</li><li><b>Devoir</b> + infinitivo: obligación personal. Je dois, tu dois, il doit, nous devons, vous devez, ils doivent. «Je <b>dois</b> sortir le chien tous les soirs.»</li><li><b>Avoir à</b> + infinitivo: «J'<b>ai</b> des devoirs <b>à</b> faire.»</li></ul><p>Para lo que no es necesario: «<b>Il ne faut pas</b>» significa «no se debe» (prohibición), mientras que «<b>Ce n'est pas la peine de</b>» o «<b>Tu n'es pas obligé de</b>» significan «no hace falta». Es la misma diferencia que en inglés entre <i>mustn't</i> y <i>don't have to</i>.</p>` },
    { tras: "En el instituto", html: `<h3>Contar tu día: un modelo</h3><p><i>«En semaine, je <b>me réveille</b> à sept heures moins le quart. D'abord, je <b>me douche</b> et je <b>m'habille</b>. Ensuite, je prends mon petit-déjeuner : du pain grillé et du jus d'orange. Je pars au lycée à huit heures. Les cours commencent à huit heures et demie et finissent à trois heures. L'après-midi, je fais mes devoirs et, le mardi et le jeudi, je joue au handball. Le soir, je dois mettre la table. Après le dîner, je regarde une série ou je lis un peu. Enfin, je <b>me couche</b> vers onze heures. Le week-end, c'est différent : je ne me lève jamais avant dix heures !»</i></p><p>Fíjate en los pronominales, los conectores de orden, las horas y las expresiones de frecuencia.</p>` },
  ],
  videos: [
    ["Los verbos pronominales", L.vid("UUGCTBa6esA", "Les habitudes quotidiennes avec les verbes pronominaux en français", "La prof Elisabeth", 141708)],
    ["Contar tu día: un modelo", L.vid("Hl769Wo_uPs", "La routine quotidienne", "Ma cousine française", 134408)],
  ],
  ejemplos: [
    ["Pon en passé composé: «Le matin, elle se lève, elle se douche et elle part au lycée.»", ["Los pronominales llevan être: elle s'est levée, elle s'est douchée.", "El participio concuerda con elle: -e.", "Partir también lleva être: elle est partie."], "Ce matin, elle s'est levée, elle s'est douchée et elle est partie au lycée."],
    ["Di estas horas de forma oficial y coloquial: 13 h 45 y 18 h 30.", ["Oficial: los minutos tal cual: treize heures quarante-cinq; dix-huit heures trente.", "Coloquial: con 12 horas y quart / demie: deux heures moins le quart; six heures et demie.", "Para aclarar: de l'après-midi, du soir."], "13 h 45: treize heures quarante-cinq / deux heures moins le quart de l'après-midi. 18 h 30: dix-huit heures trente / six heures et demie du soir."],
    ["Completa: «Nous devons ___ (se dépêcher) parce que le bus part dans cinq minutes.»", ["Después de devoir va infinitivo.", "El pronombre del infinitivo concuerda con el sujeto nous.", "Por tanto: nous dépêcher."], "Nous devons nous dépêcher parce que le bus part dans cinq minutes."],
  ],
  errores: [
    "Usar avoir con los pronominales en passé composé: *je m'ai levé → je me suis levé.",
    "Dejar se con infinitivo y otro sujeto: *je vais se coucher → je vais me coucher.",
    "Olvidar el pronombre: *je lève à 7 h → je me lève à 7 h.",
    "Usar quart y demie en la hora de 24 horas: *quatorze heures et demie (mejor: quatorze heures trente).",
    "Confundir il ne faut pas (no se debe) con no hace falta.",
  ],
  ejercicios: [
    ["Conjuga se coucher en presente: je, nous, ils.", "je me couche, nous nous couchons, ils se couchent."],
    ["Pon en negativa: «Tu te réveilles tôt.»", "Tu ne te réveilles pas tôt."],
    ["Pon en passé composé: «Nous nous habillons.»", "Nous nous sommes habillés."],
    ["Escribe el imperativo afirmativo de «se dépêcher» con tú y vosotros.", "Dépêche-toi ! Dépêchez-vous !"],
    ["Escribe en letras la hora oficial: 21 h 15.", "vingt et une heures quinze."],
    ["Completa con partitivos: «Je mange ___ pain, ___ salade et ___ œufs.»", "du pain, de la salade et des œufs."],
    ["Pon en negativa: «Je bois du café.»", "Je ne bois pas de café."],
    ["Traduce: «Hay que sacar la basura.»", "Il faut sortir la poubelle."],
    ["Traduce: «Tengo que hacer los deberes.»", "Je dois faire mes devoirs. (También: J'ai des devoirs à faire.)"],
    ["Escribe tres frases sobre tu sábado con conectores y horas.", "Por ejemplo: «Le samedi, d'abord je me lève à dix heures. Ensuite, je fais du sport. Enfin, le soir, je sors avec mes amis.»"],
  ],
  quiz: [
    ["«Hier, je ___ couché tard.»", ["me suis", "m'ai", "suis"], 0, "Pronominal con être."],
    ["«Nous allons ___ promener.»", ["nous", "se", "vous"], 0, "Concuerda con el sujeto."],
    ["«Le goûter» es…", ["la merienda", "la cena", "el desayuno"], 0, "Hacia las 16 h 30."],
    ["«Il ne faut pas courir» significa…", ["no se debe correr", "no hace falta correr", "hay que correr"], 0, "Prohibición."],
    ["«Le lundi, j'ai piscine» significa…", ["todos los lunes", "este lunes", "el lunes pasado"], 0, "Artículo = costumbre."],
  ],
  tarjetas: [
    ["Pronominales en pasado", "Siempre con être: je me suis levé(e)."],
    ["Il faut / devoir", "Il faut ranger (hay que); je dois ranger (tengo que)."],
    ["Partitivos", "du pain, de la confiture, de l'eau, des céréales; negativa: pas de."],
  ],
});

// Nivel libro (4º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso4L7").libro(module.exports, {
  lectura: ["Une journée de Chloé, lycéenne à Lille", `<p>«<i>Je me réveille à 6 h 45, mais je me lève à 7 heures, parce que j'adore rester cinq minutes de plus au lit ! Je me douche, je m'habille et je prends mon petit-déjeuner : des tartines et un chocolat chaud. Je pars au lycée à 7 h 40. Les cours commencent à 8 heures et finissent à 17 heures, avec une pause d'une heure et demie pour déjeuner à la cantine. Le soir, je fais mes devoirs, je mets la table et on dîne vers 19 h 30. Je me couche à 22 heures… enfin, en théorie !</i>»</p><p>Chloé tiene 16 años y estudia en un <i>lycée</i> de Lille. Su día se parece al tuyo en muchas cosas, pero hay diferencias interesantes: en Francia las clases duran casi todo el día, la comida principal del mediodía se hace en el comedor del instituto y la cena es más temprana que en España. Además, los miércoles por la tarde muchos alumnos más pequeños no tienen clase.</p><p>Para contar su día, Chloé usa muchos <b>verbos pronominales</b> (<i>se réveiller, se lever, s'habiller, se coucher</i>), dice la <b>hora</b>, ordena las acciones y habla de las <b>comidas</b> y las <b>tareas de casa</b>. En este tema aprenderás todo ese vocabulario y esa gramática, y compararás la vida cotidiana en Francia y en España.</p>`],
  mas: [
    ["<h3>Los verbos pronominales</h3>", `<p>Muchos verbos pronominales coinciden con el español (<i>se lever</i> = levantarse, <i>se laver</i> = lavarse), pero otros no: <i>se promener</i> (pasear), <i>se dépêcher</i> (darse prisa), <i>se reposer</i> (descansar). Y al revés: «despertar a alguien» es <i>réveiller quelqu'un</i> (sin pronombre) y «despertarse», <i>se réveiller</i>. Delante de vocal, <i>me, te, se</i> se apostrofan: «je <b>m'</b>habille», «il <b>s'</b>appelle».</p>`],
    ["<h3>Decir la hora</h3>", `<p>Para preguntar la hora: «<b>Quelle heure est-il ?</b>» o, de forma coloquial, «Il est quelle heure ?». Para preguntar cuándo ocurre algo: «<b>À quelle heure</b> commence le film ?» — «<b>À</b> 20 h 30». Fíjate en que siempre se dice <i>heure(s)</i>, que no se puede omitir como en español: «Il est trois <b>heures</b>», no «Il est trois». Y las expresiones <i>midi</i> (12 h del día) y <i>minuit</i> (12 h de la noche) no llevan <i>heures</i>.</p>`],
    ["<h3>Las tareas de casa</h3>", `<p>Para decir con qué frecuencia ayudas en casa, combina las tareas con expresiones de frecuencia: «Je fais mon lit <b>tous les jours</b>», «Je passe l'aspirateur <b>une fois par semaine</b>», «Je ne fais <b>jamais</b> la cuisine». Y para repartir tareas: «C'est mon tour de…» (me toca…), «C'est à toi de sortir la poubelle !» (te toca sacar la basura).</p>`],
    ["<h3>En el instituto</h3>", `<p>El sistema educativo francés se organiza así: <i>l'école primaire</i> (6-11 años), <i>le collège</i> (11-15, de la <i>sixième</i> a la <i>troisième</i>, con el examen del <i>brevet</i>) y <i>le lycée</i> (15-18, <i>seconde, première, terminale</i>, con el <i>bac</i>). Las notas van de 0 a 20 y un 10 es el aprobado. Asignaturas: <i>les maths, le français, l'histoire-géo, la SVT</i> (biología), <i>la physique-chimie, l'EPS</i> (educación física), <i>les langues vivantes</i>.</p>`],
  ],
  svgs: [
    ["<h3>Pronominales en negativa, pasado e infinitivo</h3>", "Pronominales en distintos tiempos", [["Negativa", "Je ne me lève pas."], ["Passé composé", "Je me suis levé(e)."], ["Infinitivo", "Je vais me lever."], ["Imperativo", "Lève-toi !"]]],
    ["<h3>La hora oficial y las partes del día</h3>", "Hora oficial y partes del día", [["Oficial (24 h)", "21 h 15 · vingt et une heures"], ["Mañana", "le matin"], ["Tarde", "l'après-midi · le soir"]]],
    ["<h3>Las comidas en Francia</h3>", "Las comidas en Francia", [["le petit-déjeuner", "7 h: tartines, café"], ["le déjeuner", "12 h: cantine"], ["le goûter", "16 h 30: merienda"], ["le dîner", "19 h 30: cena"]]],
    ["<h3>Obligaciones: il faut y devoir</h3>", "Expresar obligación", [["il faut + inf.", "Il faut ranger."], ["devoir + inf.", "Je dois partir."], ["il ne faut pas", "no se debe"]]],
    ["<h3>Contar tu día: un modelo</h3>", "Conectores para contar el día", [["d'abord", "primero"], ["ensuite · puis", "después"], ["après", "luego"], ["enfin", "por último"]]],
  ],
  bloques: [
    { tras: "<h3>Pronominales en negativa, pasado e infinitivo</h3>", html: `<h3>Pronominales recíprocos e idiomáticos</h3><p>No todos los verbos pronominales indican que la acción recae sobre uno mismo (<i>se laver</i>). Hay otros dos grupos importantes:</p><ul><li><b>Recíprocos</b>: la acción la hacen dos o más personas entre sí. «Nous <b>nous téléphonons</b> tous les soirs» (nos llamamos), «Ils <b>s'aiment</b>» (se quieren), «On <b>se voit</b> demain ?» (¿nos vemos mañana?), «Elles <b>s'écrivent</b> des messages».</li><li><b>Idiomáticos</b>: el pronombre forma parte del verbo y cambia su sentido. <i>S'ennuyer</i> (aburrirse), <i>s'amuser</i> (divertirse), <i>se dépêcher</i> (darse prisa), <i>se souvenir de</i> (acordarse de), <i>s'occuper de</i> (ocuparse de), <i>se tromper</i> (equivocarse), <i>s'entendre bien avec</i> (llevarse bien con), <i>se disputer</i> (pelearse), <i>se sentir</i> (sentirse).</li></ul><p>Estos verbos son muy útiles para hablar de las relaciones y los sentimientos en la vida diaria: «Je <b>m'entends bien</b> avec ma sœur, mais on <b>se dispute</b> pour la salle de bains !», «Le dimanche, je <b>m'ennuie</b> un peu», «Je <b>me sens</b> fatigué le lundi».</p><p>Fíjate en la diferencia: «Je <b>m'appelle</b> Lucas» (me llamo) / «J'<b>appelle</b> Lucas» (llamo a Lucas por teléfono).</p>`, svg: ["Pronominales recíprocos e idiomáticos", [["Recíproco", "On se voit demain ?"], ["s'ennuyer", "aburrirse"], ["s'entendre bien avec", "llevarse bien con"], ["se tromper", "equivocarse"]]] },
    { tras: "<h3>La hora oficial y las partes del día</h3>", html: `<h3>Días, frecuencia y rutina</h3><p>Para hablar de lo que haces habitualmente necesitas los <b>días de la semana</b> (<i>lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche</i>, en minúscula) y saber usarlos con o sin artículo. Con artículo indican <b>costumbre</b>: «<b>Le</b> lundi, j'ai piscine» (todos los lunes). Sin artículo, un día <b>concreto</b>: «Lundi, je vais chez le dentiste» (este lunes).</p><p>Las <b>expresiones de frecuencia</b> más útiles, de más a menos: <i>toujours</i> (siempre), <i>tous les jours / chaque jour</i> (todos los días), <i>d'habitude</i> (normalmente), <i>souvent</i> (a menudo), <i>parfois / de temps en temps</i> (a veces), <i>rarement</i> (raramente), <i>ne… jamais</i> (nunca). Para una frecuencia exacta: <i>une fois par semaine</i> (una vez a la semana), <i>deux fois par jour</i>, <i>tous les deux jours</i> (cada dos días).</p><p>Los adverbios cortos van <b>detrás del verbo</b> conjugado: «Je vais <b>souvent</b> au cinéma», «Il se lève <b>toujours</b> tard». En passé composé, entre el auxiliar y el participio: «J'ai <b>souvent</b> mangé ici».</p><p>Para preguntar por la frecuencia: «<b>Tu vas souvent</b> à la bibliothèque ?», «<b>Combien de fois par semaine</b> tu fais du sport ?».</p>`, svg: ["Días y frecuencia", [["le lundi", "todos los lunes (hábito)"], ["lundi", "este lunes (concreto)"], ["une fois par semaine", "una vez a la semana"], ["toujours · jamais", "siempre · nunca"]]] },
    { tras: "<h3>Las comidas en Francia</h3>", html: `<h3>Los partitivos en la comida</h3><p>Al hablar de comida, el francés necesita casi siempre un <b>artículo</b>, y la elección depende de lo que quieras decir:</p><ul><li><b>Artículo definido</b> (<i>le, la, les</i>) para hablar de gustos en general: «J'aime <b>le</b> fromage», «Je déteste <b>les</b> épinards».</li><li><b>Partitivo</b> (<i>du, de la, de l', des</i>) para una cantidad indeterminada, lo que en español decimos sin artículo: «Je mange <b>du</b> pain» (como pan), «Je bois <b>de l'</b>eau», «Elle prend <b>de la</b> salade», «Il y a <b>des</b> fruits».</li><li><b>De / d'</b> solo, en dos casos: en la <b>negación</b> («Je ne mange pas <b>de</b> viande», «Il n'y a plus <b>de</b> lait») y tras las <b>expresiones de cantidad</b> («beaucoup <b>de</b> sucre», «un peu <b>d'</b>eau», «un kilo <b>de</b> pommes», «une bouteille <b>de</b> jus», «assez <b>de</b> temps»).</li></ul><p>Compara: «J'aime <b>le</b> café, alors je bois <b>du</b> café tous les matins, mais je ne bois pas <b>de</b> café le soir». Tres artículos distintos con la misma palabra.</p><p>Con el verbo <i>être</i> en negativa no se cambia: «Ce n'est pas <b>du</b> sucre, c'est <b>du</b> sel».</p>`, svg: ["Artículos con la comida", [["Gustos: le / la", "J'aime le fromage."], ["Partitivo", "Je mange du pain."], ["Negación: de", "Je ne mange pas de viande."], ["Cantidad: de", "beaucoup de sucre"]]] },
    { tras: "<h3>Obligaciones: il faut y devoir</h3>", html: `<h3>El tiempo libre y las pantallas</h3><p>Una parte importante de la vida cotidiana es el <b>tiempo libre</b> (<i>le temps libre, les loisirs</i>). Para hablar de él: <i>faire du sport, sortir avec des amis, aller au cinéma, lire, jouer aux jeux vidéo, écouter de la musique, regarder des séries, faire les magasins</i> (ir de tiendas), <i>traîner</i> (quedarse por ahí sin hacer nada, coloquial).</p><p>Hoy también es habitual hablar del <b>uso de las pantallas</b>: «Je passe trois heures par jour sur mon portable», «Je regarde des vidéos sur YouTube», «J'envoie des messages à mes amis», «Je suis accro aux réseaux sociaux» (enganchado a las redes). En Francia, desde 2018 los móviles están prohibidos en los colegios (<i>collèges</i>) y muchas familias ponen normas en casa.</p><p>Para expresar opiniones sobre el tiempo libre: «<b>Ce qui me plaît</b>, c'est…» (lo que me gusta es…), «<b>Je trouve que</b> je passe trop de temps sur les écrans», «<b>À mon avis</b>, il faut faire une pause». Y para proponer planes: «On pourrait…», «Ça te dit de…?».</p><p>El verbo <i>passer</i> + tiempo + <i>à</i> + infinitivo es muy útil: «Je <b>passe</b> mes week-ends <b>à</b> jouer au foot» (paso los fines de semana jugando al fútbol).</p>`, svg: ["Tiempo libre y pantallas", [["Ocio", "sortir · faire du sport"], ["Pantallas", "je passe 3 h sur mon portable"], ["passer… à", "le week-end à lire"], ["Opinión", "Je trouve que…"]]] },
    { html: `<h3>Hábitos saludables</h3><p>La vida cotidiana también incluye cuidarse. Para hablar de <b>hábitos saludables</b> en francés: <i>dormir huit heures</i>, <i>manger équilibré</i> (comer equilibrado), <i>boire de l'eau</i>, <i>faire du sport régulièrement</i>, <i>éviter le grignotage</i> (evitar picar entre horas), <i>se détendre</i> (relajarse), <i>se coucher tôt</i>.</p><p>Para dar <b>consejos</b> hay varias estructuras: <b>il faut</b> + infinitivo (hay que), <b>il vaut mieux</b> + infinitivo (es mejor), <b>tu devrais</b> + infinitivo (deberías), el <b>imperativo</b> («Dors plus !», «Mange des fruits !») y <b>il est important de</b> + infinitivo. Para lo que no hay que hacer: <i>il ne faut pas</i>, <i>évite de</i>, <i>arrête de</i> («Arrête de regarder ton portable au lit !»).</p><p>Los expertos recomiendan a los adolescentes dormir entre <b>8 y 10 horas</b>, hacer al menos <b>una hora de actividad física</b> al día y desconectar de las pantallas una hora antes de dormir. En francés: «Les adolescents ont besoin de dormir entre huit et dix heures. Il vaut mieux éteindre les écrans une heure avant de se coucher».</p><p>Con este vocabulario podrás escribir un artículo para la revista del instituto o dar consejos a un amigo francés que se siente cansado.</p>`, svg: ["Consejos para una vida sana", [["il faut", "Il faut dormir 8 heures."], ["il vaut mieux", "manger équilibré"], ["tu devrais", "Tu devrais faire du sport."], ["arrête de", "Arrête de grignoter !"]]] },
  ],
  grupos: [3, 3, 3, 3, 3],
  ejemplos: [
    ["Elige el artículo: «Je n'aime pas ___ lait, alors je ne bois jamais ___ lait. Je bois ___ jus d'orange.»", ["Gusto general: le.", "Negación: de.", "Cantidad indeterminada: du."], "Je n'aime pas <b>le</b> lait, alors je ne bois jamais <b>de</b> lait. Je bois <b>du</b> jus d'orange."],
    ["Traduce: «Me llevo bien con mi hermano, pero a veces nos peleamos.»", ["S'entendre bien avec: llevarse bien con.", "Se disputer: recíproco."], "Je <b>m'entends bien</b> avec mon frère, mais parfois nous <b>nous disputons</b>."],
    ["Da tres consejos a un amigo que está siempre cansado.", ["Varía las estructuras: il faut, tu devrais, imperativo."], "<b>Tu devrais</b> te coucher plus tôt. <b>Il faut</b> éteindre ton portable à 22 h. <b>Fais</b> du sport le matin !"],
  ],
  errores: ["Usar el partitivo en la negación: «Je ne mange pas du pain» ✗ → «Je ne mange pas de pain» ✓."],
  niveles: "bbmmbbmbba",
  ejercicios: [
    ["b", "Conjuga se réveiller en presente: je, tu, nous.", "je <b>me réveille</b>, tu <b>te réveilles</b>, nous <b>nous réveillons</b>."],
    ["b", "Escribe en letras: 12 h 00 (mediodía), 7 h 45, 10 h 30.", "Il est <b>midi</b>. Il est huit heures moins le quart. Il est dix heures et demie."],
    ["b", "Completa con le o sin artículo: «___ samedi, je joue au tennis.» (todos los sábados)", "<b>Le</b> samedi (hábito)."],
    ["b", "Completa con du, de la o des: «Je mange ___ pâtes, ___ salade et ___ fromage.»", "<b>des</b> pâtes, <b>de la</b> salade, <b>du</b> fromage."],
    ["b", "Traduce: «Nunca hago la cama.»", "Je <b>ne</b> fais <b>jamais</b> mon lit."],
    ["b", "Ordena con d'abord, ensuite, enfin: «je me douche / je me lève / je m'habille».", "D'abord, je me lève. Ensuite, je me douche. Enfin, je m'habille."],
    ["m", "Traduce: «Me aburro los domingos.»", "Je <b>m'ennuie</b> le dimanche."],
    ["m", "Completa: «Je bois beaucoup ___ eau, mais je ne bois pas ___ soda.»", "beaucoup <b>d'</b>eau · pas <b>de</b> soda."],
    ["m", "Traduce: «¿Nos vemos mañana a las cinco?»", "On <b>se voit</b> demain à cinq heures ?"],
    ["m", "Coloca el adverbio: «Je vais au cinéma.» (souvent) / «J'ai mangé ici.» (souvent)", "Je vais <b>souvent</b> au cinéma. J'ai <b>souvent</b> mangé ici."],
    ["m", "Escribe dos frases con passer… à + infinitivo sobre tu tiempo libre.", "Ejemplo: «Je passe mes soirées à lire.» «Je passe le samedi à jouer au basket.»"],
    ["m", "Pon en passé composé: «Elles se disputent.»", "Elles <b>se sont disputées</b>."],
    ["m", "Da dos consejos con il vaut mieux.", "Ejemplo: «Il vaut mieux dormir huit heures.» «Il vaut mieux éviter les écrans le soir.»"],
    ["m", "Completa: «Je vais au lycée ___ pied et je rentre ___ bus.»", "<b>à</b> pied · <b>en</b> bus."],
    ["m", "Traduce: «Me llevo muy bien con mis padres.»", "Je <b>m'entends</b> très bien avec mes parents."],
    ["m", "Di con qué frecuencia haces tres tareas de casa.", "Ejemplo: «Je fais mon lit tous les jours. Je passe l'aspirateur une fois par semaine. Je ne fais jamais la vaisselle !»"],
    ["m", "Elige: «Lundi / Le lundi prochain, j'ai un examen.»", "<b>Lundi</b> (o lundi prochain): día concreto, sin artículo."],
    ["a", "Escribe tu rutina de un día de clase (80 palabras) con horas, pronominales y conectores.", "Modelo: «Je me réveille à sept heures. D'abord, je me douche et je m'habille. Ensuite, je prends mon petit-déjeuner : du lait et des céréales. Je pars au lycée à huit heures moins le quart. Les cours finissent à deux heures et demie. L'après-midi, je fais mes devoirs et je vais à l'entraînement. Le soir, je dîne avec ma famille et je me couche vers onze heures.»"],
    ["a", "Compara en 50 palabras los horarios de comida en Francia y en España.", "Modelo: «En France, on déjeune vers midi, souvent à la cantine, et on dîne vers 19 h 30. En Espagne, on mange plus tard : vers 14 h ou 15 h, et on dîne vers 21 h. Les Français prennent aussi un goûter à 16 h 30.»"],
    ["a", "Corrige: «Je me suis levé à sept heure et j'ai mangé du céréales. Je ne bois pas du café.»", "Je me suis levé à sept <b>heures</b> et j'ai mangé <b>des</b> céréales. Je ne bois pas <b>de</b> café."],
    ["a", "Escribe un artículo breve (60 palabras) para la revista del instituto con cinco consejos para dormir mejor.", "Respuesta abierta: usar il faut, il vaut mieux, tu devrais / vous devriez, imperativo y évitez de, con vocabulario de hábitos saludables."],
    ["a", "Explica la diferencia: «Je m'appelle Lucas» / «J'appelle Lucas».", "«Je m'appelle»: me llamo (nombre). «J'appelle»: llamo a Lucas (por teléfono o en voz alta)."],
    ["a", "Cuenta lo que hiciste ayer por la mañana en passé composé con cuatro pronominales.", "Ejemplo: «Hier, je me suis réveillé à sept heures, je me suis levé, je me suis douché et je me suis dépêché pour prendre le bus.»"],
    ["a", "Escribe un diálogo de cuatro líneas en el que dos hermanos se reparten las tareas de casa.", "Ejemplo: «— C'est ton tour de sortir la poubelle ! — Non, je l'ai sortie hier. C'est à toi ! — D'accord, mais alors tu fais la vaisselle. — Ça marche.»"],
    ["a", "Da tu opinión (40 palabras) sobre el tiempo que pasan los jóvenes con las pantallas.", "Respuesta abierta: usar je trouve que, à mon avis, il faut, passer… à, con un ejemplo personal."],
    ["a", "Compara la escolaridad en Francia y en España: nombres de las etapas, edades y notas.", "En Francia: collège (11-15), lycée (15-18), notas sobre 20 (10 = aprobado). En España: ESO (12-16), Bachillerato (16-18), notas sobre 10 (5 = aprobado)."],
  ],
  cuartas: ["se lèvent", "sept heures et trois", "poner la mesa", "ensuite", "jamais / ne me", "se suis", "me", "el almuerzo", "no puedo correr", "nunca los lunes", "huit heures moins le quart", "t'", "université"],
  quiz: [
    ["«Je m'___ avec ma sœur.» (llevarse bien)", ["entends bien", "écoute bien", "attends bien", "entend bien"], 0, "S'entendre bien avec."],
    ["«Je ne mange pas ___ viande.»", ["de", "la", "du", "de la"], 0, "Negación: de."],
    ["«___ lundi, j'ai piscine.» (todos los lunes)", ["Le", "Un", "Ce", "—"], 0, "Artículo = hábito."],
    ["«On ___ demain ?» (nos vemos)", ["se voit", "voit", "nous voit", "se voient"], 0, "Recíproco con on."],
    ["«Je passe le week-end ___ jouer.»", ["à", "de", "pour", "en"], 0, "Passer du temps à + infinitivo."],
    ["«Il vaut mieux ___ tôt.»", ["se coucher", "se couche", "couché", "coucher se"], 0, "Il vaut mieux + infinitivo."],
    ["«Je m'ennuie» significa…", ["me aburro", "me enfado", "me divierto", "me canso"], 0, "S'ennuyer = aburrirse."],
    ["«beaucoup ___ sucre»", ["de", "du", "des", "le"], 0, "Cantidad + de."],
    ["El examen al final del lycée se llama…", ["le bac", "le brevet", "la licence", "le collège"], 0, "Le baccalauréat."],
    ["«Arrête ___ regarder ton portable !»", ["de", "à", "—", "pour"], 0, "Arrêter de + infinitivo."],
  ],
  examen: [
    ["«Elle s'est ___ à 7 h.»", ["levée", "levé", "levés", "lever"], 0, "Concordancia con el sujeto."],
    ["«Il est ___.» (12 h del día)", ["midi", "douze heure", "minuit", "midi heures"], 0, "Midi."],
    ["«Je bois ___ eau.»", ["de l'", "du", "de la", "des"], 0, "Partitivo ante vocal."],
    ["«Tu ___ te coucher plus tôt.» (deberías)", ["devrais", "dois de", "faut", "devras"], 0, "Consejo: conditionnel de devoir."],
    ["«Je fais du sport ___ par semaine.»", ["deux fois", "deux temps", "deux heures fois", "deux vez"], 0, "X fois par semaine."],
  ],
  tarjetas: [
    ["le lundi / lundi", "Hábito / día concreto."],
    ["Partitivo en negación", "Je ne bois pas de café."],
    ["s'entendre bien avec", "Llevarse bien con."],
    ["il vaut mieux", "Es mejor + infinitivo."],
  ],
  glosario: [
    ["verbe pronominal", "Verbo con pronombre: se lever, s'habiller."],
    ["la routine", "La rutina diaria."],
    ["le petit-déjeuner", "El desayuno."],
    ["le déjeuner", "La comida del mediodía."],
    ["le goûter", "La merienda."],
    ["le dîner", "La cena."],
    ["les tâches ménagères", "Las tareas de casa."],
    ["l'article partitif", "du, de la, de l', des: cantidad indeterminada."],
    ["la fréquence", "Frecuencia: souvent, parfois, jamais."],
    ["le collège / le lycée", "Etapas de 11-15 y 15-18 años en Francia."],
    ["le bac", "Examen final del lycée."],
    ["s'ennuyer", "Aburrirse."],
    ["les loisirs", "El ocio, el tiempo libre."],
    ["il vaut mieux", "Es mejor."],
  ],
  situacion: {
    titulo: "Une journée ici, une journée là-bas",
    reto: "Con vuestros correspondants de Lille vais a comparar un día normal de un adolescente en España y en Francia. Cada alumno graba un vídeo de su rutina narrado en francés y escribe un artículo comparativo para el blog del intercambio.",
    pasos: ["Anota tu rutina de un día de clase y de un sábado, con horas exactas.", "Graba un vídeo de dos minutos (fotos o clips) narrando tu día en francés con verbos pronominales y conectores.", "Lee o ve la rutina de tu correspondant y anota cinco diferencias (horarios, comidas, instituto, ocio).", "Escribe un artículo de 150 palabras comparando las dos rutinas, con partitivos y expresiones de frecuencia.", "Añade tres consejos para una vida más sana a los dos.", "Publicad los vídeos y artículos en el blog y comentad los de los compañeros franceses."],
    producto: "Un vídeo narrado de la rutina y un artículo comparativo de 150 palabras.",
    evaluacion: ["Usa correctamente los verbos pronominales en presente y en pasado.", "Dice la hora y usa expresiones de frecuencia con precisión.", "Elige bien los artículos (definido, partitivo, de) al hablar de comida.", "Compara las dos culturas con respeto y detalle."],
  },
  saberes: "Decret 175/2022 de Catalunya (Segona llengua estrangera, 4t d'ESO): vida quotidiana, hàbits saludables i comparació intercultural.",
  minutos: 100,
});
