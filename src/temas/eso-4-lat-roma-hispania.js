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

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar las fases de la conquista romana de Hispania", "Identificar restos romanos en España y su función"],
  bloques: [
    { tras: "La conquista (218", html: `<h3>Las fases de la conquista</h3>${tabla(["Fase", "Fechas", "Hechos"], [["Contra Cartago", "218-206 a. C.", "los romanos desembarcan en Ampurias durante la segunda guerra púnica y expulsan a los cartagineses"], ["Celtíberos y lusitanos", "155-133 a. C.", "resistencia de Viriato (lusitano) y de Numancia, que cayó tras un largo asedio en 133 a. C."], ["Guerras cántabras", "29-19 a. C.", "Augusto completa la conquista del norte"]])}<p>La conquista duró unos <mark>dos siglos</mark>, mucho más que la de la Galia, por la resistencia de los pueblos indígenas y la geografía montañosa.</p>`, video: { id: "QKPp7OpP6o0", titulo: "Hispania romana: la romanización", canal: "History of Spain", vistas: 177741, megusta: 0 } },
    { tras: "La organización del territorio", html: `<h3>Las ciudades romanas de Hispania</h3><p>Roma organizó el territorio a partir de <b>ciudades</b>, unidas por calzadas. Muchas actuales tienen origen romano: <b>Emerita Augusta</b> (Mérida), fundada para soldados veteranos; <b>Caesaraugusta</b> (Zaragoza), <b>Tarraco</b> (Tarragona), <b>Corduba</b> (Córdoba), <b>Hispalis</b> (Sevilla), <b>Legio</b> (León), que era un campamento de una legión, <b>Lucus Augusti</b> (Lugo) o <b>Barcino</b> (Barcelona). La <mark>Vía Augusta</mark> recorría la costa mediterránea desde los Pirineos hasta Cádiz, y la <b>Vía de la Plata</b> unía Mérida con Astorga.</p>` },
    { tras: "La romanización", html: `<h3>Economía de la Hispania romana</h3><p>Hispania fue una de las provincias más ricas del Imperio. Exportaba <b>aceite de oliva</b> de la Bética (en el monte Testaccio de Roma se acumulan millones de ánforas rotas, muchas hispanas), <b>vino</b>, <b>trigo</b> y el apreciado <b>garum</b>. Era también una gran zona <mark>minera</mark>: oro de <b>Las Médulas</b> (León), donde los romanos derrumbaban montañas con agua (<i>ruina montium</i>), plata de Cartago Nova (Cartagena) y Sierra Morena, cobre de Río Tinto y mercurio de Almadén.</p>` },
    { tras: "Hispanos ilustres", html: `<h3>Las obras públicas que siguen en pie</h3>${tabla(["Obra", "Dónde", "Para qué servía"], [["Acueducto", "Segovia", "llevar agua a la ciudad (más de 160 arcos sin argamasa)"], ["Puente", "Alcántara (Cáceres)", "cruzar el Tajo"], ["Teatro", "Mérida", "representaciones; hoy acoge un festival de teatro clásico"], ["Faro (Torre de Hércules)", "La Coruña", "guiar a los barcos; el faro romano más antiguo en uso"], ["Murallas", "Lugo", "defensa; rodean todo el casco antiguo"], ["Anfiteatro", "Tarragona e Itálica", "gladiadores y fieras"]])}<p>Varios de estos monumentos son <b>Patrimonio de la Humanidad</b> de la UNESCO.</p>` },
  ],
  ejemplos: [
    { enunciado: "¿Por qué se fundó Emerita Augusta y qué significa su nombre?", pasos: ["Emeritus significa «licenciado, retirado» del ejército.", "Augusta hace referencia al emperador Augusto.", "Se fundó en el 25 a. C. para soldados veteranos de las guerras cántabras."], resultado: "Ciudad de los veteranos de Augusto, hoy Mérida." },
    { enunciado: "Explica la evolución del nombre «Caesaraugusta» a «Zaragoza».", pasos: ["Caesaraugusta se abrevió en el habla popular.", "Los árabes la llamaron Saraqusta.", "De ahí, Zaragoza."], resultado: "Caesaraugusta > Saraqusta > Zaragoza." },
    { enunciado: "Explica por qué Numancia es un símbolo.", pasos: ["Era una ciudad celtíbera en Soria.", "Resistió durante años a los ejércitos romanos.", "En 133 a. C., tras un largo asedio de Escipión Emiliano, sus habitantes prefirieron morir antes que rendirse."], resultado: "Es un símbolo de resistencia frente a un poder mucho mayor." },
  ],
  errores: [
    "Pensar que la conquista fue rápida: duró casi dos siglos.",
    "Creer que los romanos llegaron para conquistar a los íberos: llegaron para luchar contra Cartago.",
    "Confundir el acueducto de Segovia con una muralla.",
    "Pensar que la romanización borró todo lo indígena: hubo mezcla cultural.",
    "Situar la Vía de la Plata en la costa mediterránea: unía Mérida y Astorga por el oeste.",
  ],
  ejercicios: [
    { q: "¿Por qué desembarcaron los romanos en Ampurias en 218 a. C.?", sol: "Para luchar contra Cartago en la segunda guerra púnica." },
    { q: "¿Quién fue Viriato?", sol: "Un caudillo lusitano que resistió a Roma en el siglo II a. C." },
    { q: "¿Qué emperador completó la conquista y en qué guerras?", sol: "Augusto, en las guerras cántabras (29-19 a. C.)." },
    { q: "Escribe el nombre actual de: Tarraco, Hispalis, Legio, Barcino.", sol: "Tarragona, Sevilla, León, Barcelona." },
    { q: "¿Qué productos exportaba Hispania?", sol: "Aceite, vino, trigo, garum y metales." },
    { q: "¿Qué son Las Médulas?", sol: "Antiguas minas de oro romanas en León, explotadas derrumbando montañas con agua." },
    { q: "¿Para qué servía el acueducto de Segovia?", sol: "Para llevar agua a la ciudad." },
    { q: "¿Qué tiene de especial la Torre de Hércules?", sol: "Es un faro romano que sigue funcionando." },
    { q: "Cita dos emperadores y dos escritores hispanos.", sol: "Trajano y Adriano; Séneca y Marcial (también Quintiliano o Lucano)." },
    { q: "¿Qué aportó la romanización a Hispania?", sol: "El latín, el derecho, las ciudades, las calzadas, el cristianismo y la integración en el mundo mediterráneo." },
  ],
  quiz: [
    { q: "Los romanos entraron en Hispania por…", o: ["Ampurias", "Cádiz", "Sagunto"], a: 0, e: "En el 218 a. C." },
    { q: "Numancia cayó en…", o: ["133 a. C.", "19 a. C.", "218 a. C."], a: 0, e: "Tras un largo asedio." },
    { q: "Emerita Augusta es hoy…", o: ["Mérida", "Zaragoza", "Lugo"], a: 0, e: "Fundada para veteranos." },
    { q: "El oro de Las Médulas está en…", o: ["León", "Cádiz", "Murcia"], a: 0, e: "En el Bierzo." },
    { q: "La Torre de Hércules está en…", o: ["La Coruña", "Tarragona", "Segovia"], a: 0, e: "Es un faro." },
  ],
  tarjetas: [
    ["Numancia", "Ciudad celtíbera símbolo de resistencia (133 a. C.)."],
    ["Las Médulas", "Minas de oro romanas en León."],
    ["Vía Augusta", "Calzada de la costa mediterránea hasta Cádiz."],
  ],
});
