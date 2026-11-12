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
