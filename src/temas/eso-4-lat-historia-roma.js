// Latín 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { linea, piramide, dos, filas, figLinea } = require("./_hum");

module.exports = {
  materia: "Latín",
  curso: "4-eso",
  titulo: "Historia de Roma",
  minutos: 40,
  objetivos: ["Ordenar las tres grandes etapas de la historia de Roma", "Describir las instituciones de la República y su crisis", "Explicar el Imperio, su apogeo y su caída"],
  claves: ["Monarquía", "República", "Senado", "cónsules", "Imperio", "Augusto"],
  pregunta: {
    texto: "Según la leyenda, Roma nació en el año 753 a. C. como una aldea fundada por Rómulo. Ochocientos años después dominaba todo el Mediterráneo, desde Hispania hasta Egipto. ¿Cómo lo consiguió?",
    respuesta: "En más de mil años de historia Roma pasó por tres sistemas políticos: <mark>Monarquía</mark>, <mark>República</mark> e <mark>Imperio</mark>. Su organización política, su ejército y su capacidad de integrar a los pueblos conquistados la convirtieron en el mayor imperio de la Antigüedad.",
  },
  bloques: [
    {
      html: `<h3>La Monarquía (753-509 a. C.)</h3><p>Según la leyenda, los gemelos <b>Rómulo y Remo</b>, amamantados por una loba, fundaron Roma en el 753 a. C. Rómulo fue el primero de <mark>siete reyes</mark>; los tres últimos fueron <b>etruscos</b>, que convirtieron la aldea en ciudad (murallas, cloaca máxima, foro). El último rey, Tarquinio el Soberbio, fue expulsado en el 509 a. C.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Loba capitolina estilizada con los gemelos Rómulo y Remo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M50 70 Q 60 50 90 56 L 180 56 Q 200 56 206 70 L 214 52 L 222 66 Q 228 82 214 90 L 206 92 L 204 130 H 194 L 190 96 L 110 96 L 104 130 H 94 L 90 96 Q 62 92 56 82 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="2.5"/>
        <circle cx="216" cy="70" r="2.5" fill="var(--ink)"/>
        <circle cx="130" cy="122" r="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="160" cy="122" r="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M20 140 H 240" stroke="var(--ink)" stroke-width="2.5"/>
        <text x="130" y="166" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>753 a. C.: Rómulo y Remo</text>
      </svg>`,
    },
    {
      html: `<h3>La República (509-27 a. C.)</h3><p>El poder se repartió entre varias instituciones: dos <mark>cónsules</mark> elegidos cada año, otros magistrados (pretores, cuestores, censores), el <b>Senado</b> (antiguos magistrados, de origen patricio) y las <b>asambleas</b> del pueblo. Los <b>plebeyos</b> lucharon durante siglos por igualarse a los patricios. Roma conquistó Italia y venció a Cartago en las <b>guerras púnicas</b> (264-146 a. C.).</p>`,
      svg: piramide("Instituciones de la República romana", [["2 cónsules", "var(--red)"], ["magistrados", "var(--sun)"], ["Senado", "var(--card)"], ["asambleas del pueblo", "var(--line)"]]),
    },
    {
      html: `<h3>La crisis de la República</h3><p>Las conquistas trajeron riqueza a unos pocos y ruina a muchos campesinos. Hubo guerras civiles entre generales con ejércitos propios: Mario y Sila, después <b>Pompeyo</b> y <b>Julio César</b>. César venció, se hizo dictador y fue asesinado en los idus de marzo del 44 a. C. Su sobrino <mark>Octavio</mark> derrotó a Marco Antonio y Cleopatra en Accio (31 a. C.).</p>`,
      svg: linea("Final de la República", [["133 a. C.", "Gracos"], ["49 a. C.", "César cruza|el Rubicón"], ["44 a. C.", "asesinato|de César"], ["27 a. C.", "Octavio,|Augusto"]], "var(--red)"),
    },
    {
      html: `<h3>El Imperio (27 a. C.-476 d. C.)</h3><p>En el 27 a. C. el Senado dio a Octavio el título de <mark>Augusto</mark>: fue el primer emperador. Empezó la <b>Pax Romana</b>, dos siglos de paz y prosperidad, con el Imperio en su máxima extensión bajo <b>Trajano</b>, nacido en Hispania (117 d. C.). En el siglo III llegó una grave crisis. Teodosio dividió el Imperio en dos (395) y el de <b>Occidente</b> cayó en el <b>476</b>, cuando el último emperador, Rómulo Augústulo, fue depuesto por los germanos. El de Oriente (Bizancio) duró hasta 1453.</p>`,
      svg: dos("Imperio de Occidente y de Oriente tras el año 395", ["Occidente", ["capital: Roma", "(luego Rávena)", "latín", "cae en 476", "fin Edad Antigua"], "var(--red)"], ["Oriente", ["capital:", "Constantinopla", "griego", "cae en 1453", "Imperio bizantino"], "var(--bac)"]),
    },
  ],
  figura: {
    titulo: "Más de mil años de Roma",
    svg: figLinea("Línea del tiempo de Roma de 753 a. C. a 476 d. C.", [[40, "753 a. C.", "fundación", 1], [140, "509 a. C.", "República", 0], [260, "146 a. C.", "cae Cartago", 1], [330, "44 a. C.", "muere César", 0], [400, "27 a. C.", "Augusto emperador", 1], [500, "117", "máxima extensión", 0], [570, "395", "división", 1], [640, "476", "fin de Occidente", 0]], [[40, 140, "Monarquía", "var(--sun)"], [140, 400, "República", "var(--pen)"], [400, 640, "Imperio", "var(--red)"]]),
  },
  video: { id: "UF_yHrFP1Ls", titulo: "El Imperio romano en 10 minutos", canal: "Academia Play", vistas: 7145183, megusta: 0, busqueda: "historia de roma resumen" },
  quiz: [
    { q: "¿Cuáles son las tres etapas de la historia de Roma?", o: ["Monarquía, República e Imperio", "Reino, Califato e Imperio", "Democracia, Tiranía y República"], a: 0, e: "Monarquía (753-509 a. C.), República (509-27 a. C.) e Imperio (27 a. C.-476 d. C.)." },
    { q: "¿Cuántos cónsules gobernaban la República cada año?", o: ["Uno", "Dos", "Siete"], a: 1, e: "Dos cónsules, para que ninguno acumulara todo el poder." },
    { q: "¿Contra quién luchó Roma en las guerras púnicas?", o: ["Grecia", "Cartago", "Egipto"], a: 1, e: "Cartago, ciudad fenicia del norte de África; Aníbal fue su gran general." },
    { q: "¿Quién fue el primer emperador?", o: ["Julio César", "Augusto", "Trajano"], a: 1, e: "Octavio recibió el título de Augusto en el 27 a. C." },
    { q: "¿En qué año cayó el Imperio romano de Occidente?", o: ["44 a. C.", "476", "1453"], a: 1, e: "Se considera el final de la Edad Antigua." },
  ],
  examen: [
    { q: "¿Qué emperador nacido en Hispania llevó el Imperio a su máxima extensión?", o: ["Trajano", "Nerón", "Constantino"], a: 0, e: "Trajano nació en Itálica, cerca de Sevilla." },
    { q: "La Pax Romana fue…", o: ["una guerra civil", "un largo periodo de paz y prosperidad desde Augusto", "un tratado con Cartago"], a: 1, e: "Duró unos dos siglos." },
    { q: "Los patricios eran…", o: ["los esclavos", "las familias aristocráticas de Roma", "los soldados extranjeros"], a: 1, e: "Los plebeyos lucharon por tener sus mismos derechos." },
  ],
  feynman: ["La leyenda de la fundación y la Monarquía", "Cómo se repartía el poder en la República", "Por qué entró en crisis la República", "Del primer emperador a la caída de Occidente"],
  mapa: mapa("HISTORIA DE ROMA", "var(--red)", [
    ["Monarquía", "753-509 a. C. · 7 reyes", "var(--sun)"],
    ["República", "cónsules · Senado · Cartago", "var(--pen)"],
    ["Crisis", "César · Rubicón · idus", "var(--ink)"],
    ["Imperio", "Augusto · Trajano · 476", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Fundación legendaria de Roma", "753 a. C., por Rómulo."],
    ["Instituciones de la República", "Cónsules y magistrados, Senado y asambleas."],
    ["Idus de marzo del 44 a. C.", "Asesinato de Julio César."],
    ["Primer emperador", "Augusto (Octavio), desde el 27 a. C."],
    ["Caída del Imperio de Occidente", "476 d. C."],
  ],
  familias: ["Buscad expresiones que vienen de la historia romana: «cruzar el Rubicón», «la suerte está echada», «¿tú también, Bruto?».", "Si viajáis, visitad un yacimiento romano cercano (Itálica, Mérida, Tarraco…).", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Roma: historia, instituciones y legado; relación con el presente (RD 217/2022, Latín 4º).",
    ideas: ["Línea del tiempo gigante en el pasillo con las tres etapas.", "Comparar el Senado romano con el Senado español actual.", "Lectura de un fragmento traducido de Suetonio sobre César."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Antigua Roma, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Antigua_Roma" },
  ],
  revisado: "2026-11-12",
};
