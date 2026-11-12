// Latín 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { linea, filas, rueda, dos, figLinea } = require("./_hum");

module.exports = {
  materia: "Latín",
  curso: "4-eso",
  titulo: "Roma en Hispania",
  minutos: 35,
  objetivos: ["Explicar las etapas de la conquista romana de la península ibérica", "Describir el proceso de romanización y sus consecuencias", "Reconocer el patrimonio romano conservado en España"],
  claves: ["Hispania", "romanización", "provincia", "calzada", "acueducto", "municipio"],
  pregunta: {
    texto: "El acueducto de Segovia lleva casi 2 000 años en pie sin una gota de argamasa. En Mérida aún se representan obras en un teatro romano. ¿Qué hacían los romanos en la península?",
    respuesta: "La conquistaron durante dos siglos y la convirtieron en <mark>Hispania</mark>, una de las partes más ricas del Imperio. Con la <b>romanización</b> los pueblos peninsulares adoptaron el latín, las leyes, las ciudades y las costumbres romanas: el origen de gran parte de nuestra cultura.",
  },
  bloques: [
    {
      html: `<h3>La conquista (218-19 a. C.)</h3><p>Los romanos llegaron en el <b>218 a. C.</b>, durante la segunda guerra púnica, para luchar contra Cartago, que dominaba el sur y el este. Tras expulsar a los cartagineses, conquistaron poco a poco el interior frente a la dura resistencia de celtíberos y lusitanos (<b>Viriato</b>, <b>Numancia</b> en el 133 a. C.). La conquista terminó con las <mark>guerras cántabras</mark> de Augusto (29-19 a. C.).</p>`,
      svg: linea("Etapas de la conquista de Hispania", [["218 a. C.", "desembarco|en Ampurias"], ["139 a. C.", "muere|Viriato"], ["133 a. C.", "cae|Numancia"], ["19 a. C.", "fin guerras|cántabras"]], "var(--red)"),
    },
    {
      html: `<h3>La organización del territorio</h3><p>Hispania se dividió en <mark>provincias</mark> gobernadas por un gobernador romano: primero dos (Citerior y Ulterior); con Augusto, tres (<b>Tarraconense</b>, <b>Bética</b> y <b>Lusitania</b>), y más tarde cinco o seis. Una red de <b>calzadas</b> unía las ciudades, como la Vía Augusta, que recorría la costa mediterránea hasta Cádiz.</p>`,
      svg: filas("Provincias de Hispania con Augusto y sus capitales", [["Tarraconense", "capital: Tarraco", "var(--red)"], ["Bética", "capital: Corduba", "var(--sun)"], ["Lusitania", "capital: Emerita", "var(--pen)"]]),
    },
    {
      html: `<h3>La romanización</h3><p>La <mark>romanización</mark> fue el proceso por el que los pueblos peninsulares adoptaron la cultura romana: la <b>lengua latina</b>, el <b>derecho romano</b>, la vida en <b>ciudades</b> (municipios y colonias como Emerita Augusta o Caesaraugusta), la religión, la moneda y, más tarde, el cristianismo. El ejército, los colonos y el comercio fueron sus motores.</p>`,
      svg: rueda("Elementos de la romanización", "ROMANIZA-|CIÓN", [["latín", "var(--red)"], ["derecho", "var(--pen)"], ["ciudades", "var(--sun)"], ["calzadas", "var(--muted)"], ["religión", "var(--bac)"], ["moneda", "var(--leaf)"]], "var(--red)"),
    },
    {
      html: `<h3>Hispanos ilustres y patrimonio</h3><p>Hispania dio a Roma emperadores como <b>Trajano</b> y <b>Adriano</b> (de Itálica), filósofos como <b>Séneca</b> (de Córdoba) y poetas como <b>Marcial</b> y <b>Lucano</b>. Exportaba aceite, vino, garum (salsa de pescado) y metales. Conservamos un enorme <mark>patrimonio</mark>: el acueducto de Segovia, el teatro de Mérida, la muralla de Lugo, el puente de Alcántara, la torre de Hércules en A Coruña o el anfiteatro de Tarragona.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Arcos de un acueducto romano de dos pisos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="16" y="36" width="228" height="12" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>
        ${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M${16 + i * 38} 48 h 38 v 40 h -6 a 13 13 0 0 0 -26 0 h -6 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>`).join("")}
        ${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M${16 + i * 38} 88 h 38 v 60 h -6 v -36 a 13 13 0 0 0 -26 0 v 36 h -6 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>`).join("")}
        <text x="130" y="170" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--ink)" ${F}>acueducto de Segovia (s. I-II)</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Hispania romana en el tiempo",
    svg: figLinea("Línea del tiempo de Hispania de 218 a. C. a 409 d. C.", [[40, "218 a. C.", "llegada a Ampurias", 1], [140, "133 a. C.", "Numancia", 0], [240, "19 a. C.", "fin de la conquista", 1], [340, "25 a. C.", "Emerita Augusta", 0], [430, "98", "Trajano emperador", 1], [520, "212", "ciudadanía para todos", 0], [630, "409", "llegan los germanos", 1]], [[40, 240, "conquista", "var(--red)"], [240, 630, "Hispania romanizada", "var(--sun)"]]),
  },
  video: { id: "wOaa2MmYOKQ", titulo: "Roma: la conquista de Hispania. Explicación sencilla en 10 minutos", canal: "Memorias de Pez", vistas: 227163, megusta: 7216, busqueda: "hispania romana" },
  quiz: [
    { q: "¿Por qué llegaron los romanos a la península en el 218 a. C.?", o: ["Para comerciar con los íberos", "Para luchar contra Cartago en la segunda guerra púnica", "Para huir de los germanos"], a: 1, e: "Desembarcaron en Ampurias para cortar los suministros de Aníbal." },
    { q: "¿Qué ciudad celtíbera resistió hasta el suicidio colectivo en el 133 a. C.?", o: ["Numancia", "Sagunto", "Itálica"], a: 0, e: "Escipión la sitió durante meses." },
    { q: "¿Cuál NO fue una provincia de Hispania en época de Augusto?", o: ["Bética", "Lusitania", "Cantabria"], a: 2, e: "Las tres provincias de Augusto fueron Tarraconense, Bética y Lusitania." },
    { q: "La romanización consistió en…", o: ["la expulsión de los romanos", "la adopción de la lengua y la cultura romanas", "la llegada de los visigodos"], a: 1, e: "Latín, derecho, ciudades, religión y costumbres." },
    { q: "¿Qué emperadores romanos nacieron en Itálica?", o: ["Augusto y Nerón", "Trajano y Adriano", "César y Pompeyo"], a: 1, e: "Itálica está junto a la actual Santiponce (Sevilla)." },
  ],
  examen: [
    { q: "Emerita Augusta es la actual…", o: ["Mérida", "Zaragoza", "Tarragona"], a: 0, e: "Fue capital de Lusitania; Caesaraugusta es Zaragoza y Tarraco, Tarragona." },
    { q: "Las guerras cántabras terminaron en…", o: ["218 a. C.", "19 a. C.", "476 d. C."], a: 1, e: "Con ellas Augusto completó la conquista de la península." },
    { q: "Séneca, filósofo romano, nació en…", o: ["Corduba (Córdoba)", "Roma", "Atenas"], a: 0, e: "Fue preceptor del emperador Nerón." },
  ],
  feynman: ["Por qué y cuándo llegaron los romanos a la península", "Las etapas y los episodios de resistencia de la conquista", "Qué es la romanización y sus elementos", "Cinco monumentos romanos de España"],
  mapa: mapa("HISPANIA ROMANA", "var(--red)", [
    ["Conquista", "218-19 a. C. · Numancia", "var(--red)"],
    ["Provincias", "Tarraconense · Bética · Lusitania", "var(--sun)"],
    ["Romanización", "latín · derecho · ciudades", "var(--pen)"],
    ["Legado", "Segovia · Mérida · Séneca", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Inicio de la conquista de Hispania", "218 a. C., segunda guerra púnica."],
    ["Fin de la conquista", "19 a. C., guerras cántabras de Augusto."],
    ["Provincias de Augusto", "Tarraconense, Bética y Lusitania."],
    ["Romanización", "Adopción de la lengua, el derecho y las costumbres romanas."],
    ["Emperadores hispanos", "Trajano y Adriano, nacidos en Itálica."],
  ],
  familias: ["Buscad el nombre romano de vuestra ciudad o de la capital de provincia más cercana.", "Planead una visita (real o virtual) a un monumento romano de España.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Roma en Hispania: conquista, romanización y patrimonio arqueológico (RD 217/2022, Latín 4º).",
    ideas: ["Mapa de las calzadas y ciudades romanas de la península.", "Ruta virtual por Mérida, Tarragona y Segovia (sitios Patrimonio de la Humanidad).", "Investigar topónimos de origen latino del entorno."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Hispania, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Hispania" },
  ],
  revisado: "2026-11-12",
};
