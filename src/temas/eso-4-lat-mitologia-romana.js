// Latín 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda } = require("./_hum");

const DIOSES = [["Júpiter", "Zeus", "cielo, rayo"], ["Juno", "Hera", "matrimonio"], ["Neptuno", "Poseidón", "mar"], ["Plutón", "Hades", "inframundo"], ["Minerva", "Atenea", "sabiduría"], ["Marte", "Ares", "guerra"], ["Venus", "Afrodita", "amor"], ["Apolo", "Apolo", "sol, artes"], ["Diana", "Ártemis", "caza, luna"], ["Mercurio", "Hermes", "mensajero"], ["Vulcano", "Hefesto", "fuego, forja"], ["Ceres", "Deméter", "cosechas"]];

module.exports = {
  materia: "Latín",
  curso: "4-eso",
  titulo: "La mitología romana",
  minutos: 35,
  objetivos: ["Identificar a los principales dioses romanos y su equivalente griego", "Distinguir la religión pública y la doméstica en Roma", "Reconocer la pervivencia de la mitología en el arte, la lengua y la ciencia"],
  claves: ["mito", "politeísmo", "dioses olímpicos", "lares y penates", "héroe", "pervivencia"],
  pregunta: {
    texto: "Los planetas se llaman Mercurio, Venus, Marte, Júpiter, Saturno y Neptuno. El mes de enero viene de Jano y «cereal», de Ceres. ¿Por qué seguimos usando nombres de dioses romanos?",
    respuesta: "Porque la <mark>mitología romana</mark> impregnó durante siglos la cultura europea. Los romanos adoptaron gran parte de los dioses y mitos griegos dándoles nombres latinos, y esos nombres pasaron a la astronomía, el calendario, el arte y el idioma.",
  },
  bloques: [
    {
      html: `<h3>Una religión politeísta</h3><p>Los romanos eran <mark>politeístas</mark>: creían en muchos dioses que intervenían en la vida humana. La religión era un pacto: los humanos ofrecían sacrificios y oraciones y los dioses daban su protección (<i>do ut des</i>, «doy para que des»). Al conquistar Grecia adoptaron sus mitos, identificando sus dioses con los griegos: Júpiter con Zeus, Venus con Afrodita…</p>`,
      svg: dos("Religión romana: pública y doméstica", ["Pública", ["templos", "sacerdotes", "pontífices", "vestales", "fiestas oficiales"], "var(--red)"], ["Doméstica", ["lares (hogar)", "penates", "(despensa)", "genio del pater", "altar: lararium"], "var(--sun)"]),
    },
    {
      html: `<h3>Los dioses principales</h3><p>Los doce grandes dioses vivían, según los mitos, en el Olimpo. <mark>Júpiter</mark> era el rey de los dioses y señor del rayo; <b>Juno</b>, su esposa, protegía el matrimonio; <b>Neptuno</b> gobernaba el mar; <b>Minerva</b>, la sabiduría; <b>Marte</b>, la guerra (y era padre de Rómulo); <b>Venus</b>, el amor. Algunos dioses eran solo romanos, como <b>Jano</b>, el de las dos caras, dios de los comienzos.</p>`,
      svg: rueda("Dioses principales alrededor de Júpiter", "JÚPITER", [["Juno", "var(--bac)"], ["Neptuno", "var(--water)"], ["Minerva", "var(--muted)"], ["Marte", "var(--red)"], ["Venus", "var(--inf)"], ["Mercurio", "var(--leaf)"]], "var(--sun)"),
    },
    {
      html: `<h3>Mitos y héroes</h3><p>Un <mark>mito</mark> es un relato tradicional protagonizado por dioses y héroes que explica el origen del mundo, de una costumbre o de un fenómeno. Roma tenía sus propios mitos de origen: <b>Eneas</b>, el troyano hijo de Venus que llegó a Italia tras la guerra de Troya (contado por Virgilio en la <i>Eneida</i>), y <b>Rómulo y Remo</b>. También heredó de Grecia los trabajos de <b>Hércules</b> o el mito de <b>Prometeo</b>.</p>`,
      svg: filas("Mitos famosos", [["Eneas", "de Troya a Italia", "var(--red)"], ["Rómulo", "fundación de Roma", "var(--sun)"], ["Hércules", "los doce trabajos", "var(--pen)"], ["Prometeo", "roba el fuego", "var(--inf)"], ["Orfeo", "baja al inframundo", "var(--bac)"]]),
    },
    {
      html: `<h3>La pervivencia de los mitos</h3><p>La mitología sigue viva. En la <b>astronomía</b> (planetas y constelaciones), en el <b>calendario</b> (enero de Jano, marzo de Marte; martes, miércoles, jueves y viernes de Marte, Mercurio, Júpiter y Venus), en la <b>lengua</b> (cereal, volcán, pánico, talón de Aquiles), en el <b>arte</b> (<i>El nacimiento de Venus</i> de Botticelli) y en marcas, películas y videojuegos.</p>`,
      svg: dos("Huellas de los dioses en la lengua", ["Dios", ["Marte", "Mercurio", "Júpiter", "Ceres", "Vulcano"], "var(--red)"], ["Palabra", ["marzo, martes", "miércoles", "jueves", "cereal", "volcán"], "var(--pen)"]),
    },
  ],
  figura: {
    titulo: "Doce dioses: nombre romano, nombre griego y dominio",
    svg: `<svg viewBox="0 0 680 250" role="img" aria-label="Tabla de doce dioses con su nombre romano, griego y su dominio">
      <rect width="680" height="250" rx="16" fill="var(--paper)"/>
      <g ${F} font-size="13">
      ${DIOSES.map(([r, g, d], i) => { const x = i < 6 ? 24 : 354, y = 36 + (i % 6) * 36; return `<rect x="${x}" y="${y - 22}" width="302" height="30" rx="8" fill="var(--card)" stroke="var(--line)"/><text x="${x + 12}" y="${y - 2}" font-weight="700" fill="var(--red)">${r}</text><text x="${x + 110}" y="${y - 2}" fill="var(--pen)">${g}</text><text x="${x + 200}" y="${y - 2}" fill="var(--muted)" font-size="12">${d}</text>`; }).join("")}
      </g>
      <text x="340" y="242" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>en rojo, nombre romano · en azul, nombre griego</text>
    </svg>`,
  },
  video: { id: "rObjlxx2MZQ", titulo: "Dioses de la mitología griega y romana", canal: "Academia Play", vistas: 2461736, megusta: 0, busqueda: "mitología romana dioses" },
  quiz: [
    { q: "¿Qué dios romano corresponde al griego Zeus?", o: ["Marte", "Júpiter", "Neptuno"], a: 1, e: "Júpiter era el rey de los dioses y señor del rayo." },
    { q: "Venus era la diosa del…", o: ["amor y la belleza", "mar", "fuego"], a: 0, e: "Su equivalente griega es Afrodita." },
    { q: "Los lares eran…", o: ["dioses protectores del hogar", "sacerdotisas", "héroes troyanos"], a: 0, e: "Se les rendía culto en el lararium de cada casa." },
    { q: "¿Qué héroe troyano llegó a Italia según la Eneida?", o: ["Aquiles", "Eneas", "Ulises"], a: 1, e: "Virgilio lo presenta como antepasado de los romanos." },
    { q: "El mes de marzo debe su nombre a…", o: ["Mercurio", "Marte", "Minerva"], a: 1, e: "Martius era el mes dedicado al dios de la guerra." },
  ],
  examen: [
    { q: "«Do ut des» resume…", o: ["el pacto entre humanos y dioses", "una ley de la República", "un mito de Hércules"], a: 0, e: "«Doy para que des»: ofrendas a cambio de protección." },
    { q: "¿Qué dios era exclusivamente romano?", o: ["Apolo", "Jano", "Venus"], a: 1, e: "Jano, de dos caras, presidía los comienzos; de él viene «enero»." },
    { q: "La palabra «volcán» procede de…", o: ["Vulcano, dios del fuego", "Venus", "Vesta"], a: 0, e: "Se creía que su fragua estaba bajo los volcanes." },
  ],
  feynman: ["Cómo era la religión romana y el pacto con los dioses", "Seis dioses romanos con su equivalente griego", "Qué es un mito y dos mitos de origen de Roma", "Cinco ejemplos de pervivencia de la mitología"],
  mapa: mapa("MITOLOGÍA ROMANA", "var(--red)", [
    ["Religión", "politeísmo · do ut des", "var(--sun)"],
    ["Dioses", "Júpiter · Juno · Marte · Venus", "var(--red)"],
    ["Mitos", "Eneas · Rómulo · Hércules", "var(--pen)"],
    ["Pervivencia", "planetas · meses · palabras", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Júpiter / Zeus", "Rey de los dioses, señor del cielo y del rayo."],
    ["Minerva / Atenea", "Diosa de la sabiduría y de las artes."],
    ["Lares y penates", "Dioses domésticos del hogar y de la despensa."],
    ["Eneida", "Poema de Virgilio sobre Eneas, antepasado mítico de los romanos."],
    ["Jano", "Dios romano de dos caras, de los comienzos: da nombre a enero."],
  ],
  familias: ["Mirad juntos el cielo nocturno o una app de astronomía y buscad planetas con nombre de dioses.", "Buscad mitos en películas, series o videojuegos que conozcáis.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La civilización romana: religión, mitología y pervivencia en el arte y la cultura (RD 217/2022, Latín 4º).",
    ideas: ["Galería de cuadros del Museo del Prado con temas mitológicos.", "Cada estudiante adopta un dios y presenta sus atributos.", "Buscar mitología en logotipos y marcas comerciales."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Mitología romana, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Mitolog%C3%ADa_romana" },
  ],
  revisado: "2026-11-12",
};
