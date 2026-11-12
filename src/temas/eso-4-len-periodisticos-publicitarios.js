// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Textos periodísticos y publicitarios",
  minutos: 40,
  objetivos: ["Clasificar los géneros periodísticos en informativos, de opinión y mixtos", "Reconocer las partes de una noticia", "Analizar los recursos con que la publicidad intenta persuadir"],
  claves: ["noticia", "titular", "entradilla", "editorial", "columna", "crónica", "eslogan", "publicidad"],
  pregunta: {
    texto: "Un anuncio dice: «9 de cada 10 dentistas lo recomiendan». ¿Te está informando o te está intentando convencer?",
    respuesta: "Te está <mark>intentando convencer</mark>. Usa un dato que parece objetivo, pero el fin es que compres. La publicidad mezcla información y <b>persuasión</b>; el periodismo informativo, en cambio, debería limitarse a contar hechos comprobados.",
  },
  bloques: [
    {
      html: `<h3>Los géneros periodísticos</h3><p>Se dividen en tres grupos: <b>informativos</b> (cuentan hechos de forma objetiva: noticia, reportaje, entrevista), <b>de opinión</b> (valoran: editorial, artículo, columna, carta al director) y <b>mixtos</b> (informan y valoran: crónica, crítica).</p>`,
      svg: L.filas("Géneros periodísticos en tres grupos", [
        ["Informativos", "noticia · reportaje · entrevista", "var(--inf)"],
        ["De opinión", "editorial · columna · cartas", "var(--red)"],
        ["Mixtos", "crónica · crítica", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>La noticia y la pirámide invertida</h3><p>La noticia cuenta un hecho reciente y de interés. Lo más importante va arriba: <mark>titular</mark>, <mark>entradilla</mark> (resumen) y después el <mark>cuerpo</mark> con detalles cada vez menos importantes. Debe responder a las <b>6 W</b>: qué, quién, cuándo, dónde, cómo y por qué.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pirámide invertida de la noticia: titular, entradilla y cuerpo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 16 H 240 L 130 168 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M46 52 H 214 M78 96 H 182" stroke="var(--line)" stroke-width="2"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <text x="130" y="40" font-size="15" fill="var(--red)">TITULAR</text>
          <text x="130" y="80" font-size="14" fill="var(--pen)">entradilla</text>
          <text x="130" y="122" font-size="13" fill="var(--inf)">cuerpo</text>
          <text x="130" y="140" font-size="11" fill="var(--muted)">detalles</text>
        </g></svg>`,
    },
    {
      html: `<h3>Los géneros de opinión</h3><p>El <b>editorial</b> expresa la opinión del periódico y no va firmado. El <b>artículo</b> lo firma un experto o invitado. La <b>columna</b> la escribe siempre la misma persona, en el mismo lugar, con estilo propio. En las <b>cartas al director</b> opinan los lectores.</p>`,
      svg: L.tabla("Quién firma cada género de opinión", ["Género", "¿Quién firma?"], [
        ["Editorial", "nadie: el medio"], ["Artículo", "un experto"], ["Columna", "un columnista"], ["Cartas", "un lector"],
      ], "var(--red)"),
    },
    {
      html: `<h3>La publicidad</h3><p>Su intención es <mark>persuadir</mark> para que compremos o hagamos algo. Combina imagen y texto: <b>eslogan</b> (frase corta y fácil de recordar), <b>marca</b> y <b>logotipo</b>. Se dirige a un público concreto y apela más a las emociones que a la razón.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Anuncio inventado con imagen, eslogan y marca señalados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="14" width="140" height="152" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <circle cx="90" cy="60" r="30" fill="var(--sun)"/><path d="M70 64 q 20 18 40 0" fill="none" stroke="var(--ink)" stroke-width="3"/>
        <g ${F} font-weight="700">
          <text x="90" y="120" text-anchor="middle" font-size="14" fill="var(--red)">¡Muerde el día!</text>
          <rect x="54" y="134" width="72" height="22" rx="6" fill="var(--pen)"/><text x="90" y="150" text-anchor="middle" font-size="12" fill="#fff">ZUMAX</text>
          <g font-size="12"><text x="170" y="64" fill="var(--muted)">imagen</text><text x="170" y="124" fill="var(--red)">eslogan</text><text x="170" y="150" fill="var(--pen)">marca</text></g>
        </g></svg>`,
    },
    {
      html: `<h3>Recursos para persuadir</h3><p>La publicidad usa <b>imperativos</b> («¡Pruébalo!»), <b>preguntas</b>, <b>rimas</b> y juegos de palabras, <b>superlativos</b> («el mejor»), personas famosas y datos llamativos. Un lector crítico se pregunta: ¿qué quiere que haga?, ¿qué emoción busca?, ¿qué no me cuenta?</p>`,
      svg: L.filas("Recursos persuasivos con ejemplo", [
        ["Imperativo", "¡Pruébalo ya!", "var(--pen)"], ["Superlativo", "el más rápido", "var(--red)"],
        ["Rima", "come sano, vive ufano", "var(--leaf)"], ["Famoso", "lo usa tu ídolo", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Informar, opinar o convencer",
    svg: L.columnas("Tres intenciones: informar, opinar y persuadir", [
      ["la noticia", "INFORMAR", ["hechos comprobables,", "tercera persona"], "var(--inf)"],
      ["la columna", "OPINAR", ["valoración firmada,", "estilo personal"], "var(--red)"],
      ["el anuncio", "PERSUADIR", ["eslogan, imagen,", "emociones"], "var(--pen)"],
    ]),
  },
  video: { id: "zbDsyQG7jp8", titulo: "Qué son los géneros periodísticos: clasificación, características y ejemplos", canal: "Clases Particulares en Ávila", vistas: 124559, megusta: 0, busqueda: "géneros periodísticos informativos y de opinión" },
  quiz: [
    { q: "¿Qué parte de la noticia resume lo más importante justo después del titular?", o: ["La entradilla", "El cuerpo", "La firma"], a: 0, e: "La entradilla responde a las preguntas básicas en pocas líneas." },
    { q: "¿Qué género expresa la opinión del propio periódico y no va firmado?", o: ["La crónica", "El editorial", "El reportaje"], a: 1, e: "El editorial representa la línea del medio." },
    { q: "La crónica es un género…", o: ["informativo puro", "de opinión puro", "mixto"], a: 2, e: "Informa de hechos y añade la valoración del cronista." },
    { q: "«El chocolate más cremoso del mundo» usa un…", o: ["superlativo", "imperativo", "tecnicismo"], a: 0, e: "«El más…» exagera la calidad del producto." },
    { q: "La estructura de la noticia se llama pirámide invertida porque…", o: ["empieza por los detalles", "pone lo más importante al principio", "termina con la opinión"], a: 1, e: "De más a menos importante: se puede cortar por abajo sin perder lo esencial." },
  ],
  examen: [
    { q: "Las 6 W de la noticia son…", o: ["qué, quién, cuándo, dónde, cómo, por qué", "titular, entradilla y cuerpo", "eslogan, logo y marca"], a: 0, e: "Son las preguntas que toda noticia debe responder." },
    { q: "¿Qué texto escribe siempre la misma persona en el mismo espacio?", o: ["La columna", "La noticia", "La carta al director"], a: 0, e: "El columnista tiene un espacio fijo y estilo propio." },
    { q: "La principal intención de la publicidad es…", o: ["informar con objetividad", "persuadir", "narrar hechos"], a: 1, e: "Busca que el público compre o actúe." },
  ],
  feynman: ["Los tres grupos de géneros periodísticos", "Las partes de una noticia y por qué es una pirámide invertida", "La diferencia entre editorial, artículo y columna", "Tres recursos de la publicidad"],
  mapa: mapa("PRENSA Y PUBLICIDAD", "var(--eso)", [
    ["Informativos", "noticia · reportaje", "var(--inf)"],
    ["Opinión", "editorial · columna", "var(--red)"],
    ["Mixtos", "crónica · crítica", "var(--leaf)"],
    ["Publicidad", "eslogan · imagen · marca", "var(--pen)"],
  ]),
  tarjetas: [
    ["¿Qué es la entradilla?", "El primer párrafo de la noticia, que resume lo esencial."],
    ["Editorial", "Texto de opinión del periódico, sin firma."],
    ["Crónica", "Género mixto: informa de hechos y los valora quien estuvo allí."],
    ["Eslogan", "Frase breve y fácil de recordar que acompaña a una marca."],
    ["Pirámide invertida", "Orden de la noticia: de lo más importante a lo menos importante."],
  ],
  familias: ["Mirad juntos la portada de un periódico y clasificad tres textos en informativo, opinión o mixto.", "Durante los anuncios de la tele, pedidle que diga qué recurso persuasivo usa cada uno.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Géneros discursivos propios del ámbito social: textos periodísticos y publicitarios; alfabetización mediática y detección de desinformación (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Redacción de una noticia del centro con pirámide invertida y las 6 W.", "Comparar la misma noticia en tres medios y detectar adjetivos valorativos.", "Crear un anuncio y explicar los recursos elegidos y el público objetivo."],
  },
  fuentes: [
    L.BOE,
    { t: "Géneros periodísticos, Wikipedia en español", url: "https://es.wikipedia.org/wiki/G%C3%A9nero_period%C3%ADstico" },
    { t: "Fundéu RAE, recomendaciones de redacción periodística", url: "https://www.fundeu.es/" },
  ],
  revisado: "2026-11-12",
};
