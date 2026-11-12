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
        <circle cx="150" cy="92" r="50" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/>
        <path d="M150 92 V 56" stroke="var(--ink)" stroke-width="3"/><path d="M150 92 L 176 92" stroke="var(--red)" stroke-width="3"/>
        <circle cx="150" cy="42" r="6" fill="var(--muted)"/><circle cx="200" cy="92" r="6" fill="var(--leaf)"/>
        <circle cx="150" cy="142" r="6" fill="var(--pen)"/><circle cx="100" cy="92" r="6" fill="var(--red)"/>
        <g ${F} font-size="13" font-weight="700">
          <text x="150" y="28" text-anchor="middle" fill="var(--muted)">heure pile (:00)</text>
          <text x="210" y="88" fill="var(--leaf)">et quart</text><text x="210" y="104" font-size="11" fill="var(--leaf)">(:15)</text>
          <text x="150" y="166" text-anchor="middle" fill="var(--pen)">et demie (:30)</text>
          <text x="90" y="88" text-anchor="end" fill="var(--red)">moins le</text><text x="90" y="104" text-anchor="end" fill="var(--red)">quart (:45)</text>
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
