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

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Relacionar los dioses romanos con sus equivalentes griegos y sus atributos", "Reconocer mitos en el arte, la lengua y la cultura actual"],
  bloques: [
    { tras: "Una religión politeísta", html: `<h3>La religión doméstica y pública</h3><p>Cada casa romana tenía sus propios protectores: los <mark>lares</mark>, espíritus de los antepasados, honrados en el lararium; los <b>penates</b>, guardianes de la despensa; y el <b>genius</b> del pater familias. Además existía una <b>religión pública</b> a cargo del Estado: los sacerdotes (<b>pontífices</b>, con el <i>Pontifex Maximus</i> al frente), las <b>vestales</b>, seis sacerdotisas que mantenían siempre encendido el fuego sagrado de Vesta, y los <b>augures</b>, que interpretaban la voluntad de los dioses observando el vuelo de las aves. La religión era un pacto: <i>do ut des</i>, «doy para que des».</p>` },
    { tras: "Los dioses principales", html: `<h3>Dioses, equivalentes y atributos</h3>${tabla(["Romano", "Griego", "Ámbito", "Atributo"], [["Júpiter", "Zeus", "rey de los dioses, cielo", "rayo, águila"], ["Juno", "Hera", "matrimonio", "pavo real"], ["Neptuno", "Poseidón", "mar", "tridente"], ["Plutón", "Hades", "inframundo", "can Cerbero"], ["Minerva", "Atenea", "sabiduría, guerra estratégica", "lechuza, casco"], ["Marte", "Ares", "guerra", "lanza, casco"], ["Venus", "Afrodita", "amor, belleza", "paloma, concha"], ["Apolo", "Apolo", "sol, artes, música", "lira, laurel"], ["Diana", "Ártemis", "caza, luna", "arco, ciervo"], ["Mercurio", "Hermes", "mensajero, comercio", "sandalias aladas, caduceo"], ["Vulcano", "Hefesto", "fuego, herreros", "martillo, yunque"], ["Ceres", "Deméter", "agricultura", "espigas"]])}`, video: { id: "senVNG_hy3M", titulo: "Mitología romana: dioses romanos, rituales y el calendario romano", canal: "Pero eso es otra Historia", vistas: 413301, megusta: 0 } },
    { tras: "Mitos y héroes", html: `<h3>Eneas, el héroe de Roma</h3><p>El gran poema de Roma es la <mark>Eneida</mark> de <b>Virgilio</b>, escrita en tiempos de Augusto. Cuenta cómo <b>Eneas</b>, un príncipe troyano hijo de Venus, huye de Troya en llamas llevando a hombros a su padre Anquises y de la mano a su hijo Ascanio. Tras años de viaje, en Cartago se enamora de la reina <b>Dido</b>, pero los dioses le ordenan seguir; Dido, abandonada, se quita la vida y maldice a los troyanos, lo que explicaba míticamente la enemistad entre Roma y Cartago. Eneas llega al Lacio y sus descendientes fundarán Roma. La familia de Julio César decía descender de Ascanio, también llamado Iulo.</p>` },
    { tras: "La pervivencia de los mitos", html: `<h3>Mitos en la lengua de cada día</h3>${tabla(["Expresión o palabra", "Origen mitológico"], [["talón de Aquiles", "el único punto vulnerable del héroe Aquiles"], ["caja de Pandora", "la caja que, al abrirse, liberó todos los males"], ["ser un narciso", "Narciso se enamoró de su propio reflejo"], ["trabajo de Sísifo", "condenado a subir una roca que siempre volvía a caer"], ["eco", "la ninfa Eco solo podía repetir las últimas palabras"], ["pánico", "el miedo que provocaba el dios Pan"], ["volcán, cereal, jovial, marcial", "Vulcano, Ceres, Júpiter (Iovis), Marte"]])}<p>Los días de la semana también son mitológicos: <b>lunes</b> (Luna), <b>martes</b> (Marte), <b>miércoles</b> (Mercurio), <b>jueves</b> (Júpiter) y <b>viernes</b> (Venus).</p>` },
  ],
  ejemplos: [
    { enunciado: "En un cuadro aparece una diosa con casco, lanza y una lechuza. ¿Quién es?", pasos: ["El casco y la lanza indican guerra.", "La lechuza es símbolo de la sabiduría.", "La diosa de la sabiduría y la guerra estratégica es Minerva (Atenea)."], resultado: "Minerva." },
    { enunciado: "Explica el origen de la palabra «miércoles».", pasos: ["Viene del latín dies Mercurii.", "Significa «día de Mercurio».", "Mercurio era el mensajero de los dioses y protector del comercio."], resultado: "Miércoles = día de Mercurio." },
    { enunciado: "Relaciona la Eneida con la propaganda de Augusto.", pasos: ["Augusto era hijo adoptivo de César, de la gens Iulia.", "La Eneida hace descender a los Julios de Iulo, hijo de Eneas y nieto de Venus.", "Así la familia de Augusto aparecía como elegida por los dioses."], resultado: "La Eneida legitimaba el poder de Augusto vinculándolo a Venus y a Troya." },
  ],
  errores: [
    "Pensar que los dioses romanos son totalmente distintos de los griegos: muchos se identificaron con ellos.",
    "Confundir Minerva (sabiduría) con Venus (amor).",
    "Creer que Plutón es el dios del mar: es el del inframundo; el del mar es Neptuno.",
    "Atribuir la Eneida a Homero: es de Virgilio; Homero escribió la Ilíada y la Odisea.",
    "Pensar que la religión romana se basaba en la fe interior: era sobre todo cumplir ritos.",
  ],
  ejercicios: [
    { q: "¿Qué eran los lares y los penates?", sol: "Los lares, espíritus protectores de la familia; los penates, protectores de la despensa." },
    { q: "¿Qué hacían las vestales?", sol: "Mantener siempre encendido el fuego sagrado de Vesta." },
    { q: "Explica «do ut des».", sol: "«Doy para que des»: el fiel ofrecía sacrificios esperando el favor de los dioses." },
    { q: "Escribe el nombre griego de Júpiter, Juno y Neptuno.", sol: "Zeus, Hera y Poseidón." },
    { q: "¿Qué atributo tiene Mercurio?", sol: "Sandalias aladas, casco con alas y el caduceo." },
    { q: "Resume el argumento de la Eneida.", sol: "El troyano Eneas huye de Troya, vive un amor trágico con Dido en Cartago y llega al Lacio, donde sus descendientes fundarán Roma." },
    { q: "¿Qué significa «talón de Aquiles»?", sol: "El punto débil de alguien." },
    { q: "¿De qué dios viene la palabra «volcán»?", sol: "De Vulcano, dios del fuego." },
    { q: "¿Qué días de la semana vienen de dioses romanos?", sol: "Martes (Marte), miércoles (Mercurio), jueves (Júpiter) y viernes (Venus); el lunes, de la Luna." },
    { q: "Busca un ejemplo actual de mitología en la publicidad o las marcas.", sol: "Por ejemplo, marcas con nombres como Nike (diosa de la victoria) o Pandora; o la sonda espacial Juno." },
  ],
  quiz: [
    { q: "El equivalente griego de Venus es…", o: ["Afrodita", "Atenea", "Hera"], a: 0, e: "Diosa del amor." },
    { q: "El rayo es atributo de…", o: ["Júpiter", "Marte", "Apolo"], a: 0, e: "Rey de los dioses." },
    { q: "La Eneida la escribió…", o: ["Virgilio", "Homero", "Ovidio"], a: 0, e: "En época de Augusto." },
    { q: "«Jueves» viene de…", o: ["Júpiter", "Juno", "Jano"], a: 0, e: "Iovis dies." },
    { q: "La caja de Pandora contenía…", o: ["todos los males", "oro", "la esperanza solo"], a: 0, e: "En el fondo quedó la esperanza." },
  ],
  tarjetas: [
    ["Lares", "Dioses protectores del hogar."],
    ["Eneida", "Poema de Virgilio sobre el troyano Eneas."],
    ["Do ut des", "«Doy para que des»: el pacto con los dioses."],
  ],
});
