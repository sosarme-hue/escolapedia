// Religión 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { linea, dos, filas, rueda, figLinea } = require("./_hum");

module.exports = {
  materia: "Religión",
  curso: "4-eso",
  titulo: "La Iglesia en la historia",
  minutos: 40,
  objetivos: ["Describir el nacimiento y la expansión de la Iglesia primitiva", "Identificar las grandes etapas y divisiones del cristianismo", "Valorar las aportaciones y los errores de la Iglesia a lo largo de la historia"],
  claves: ["Pentecostés", "Edicto de Milán", "monacato", "Cisma de Oriente", "Reforma protestante", "Concilio Vaticano II"],
  pregunta: {
    texto: "Empezó con un pequeño grupo de pescadores de Galilea. Hoy hay unos 2 400 millones de cristianos en el mundo. ¿Cómo creció tanto y por qué hay católicos, ortodoxos y protestantes?",
    respuesta: "La <mark>Iglesia</mark> tiene una historia de dos mil años con etapas muy distintas: persecución, apoyo del Imperio, protagonismo en la Edad Media, divisiones y renovación. Conocerla ayuda a entender Europa, su arte, su cultura y también sus conflictos.",
  },
  bloques: [
    {
      html: `<h3>Las primeras comunidades</h3><p>Según los Hechos de los Apóstoles, la Iglesia nació en <mark>Pentecostés</mark>, cuando los discípulos recibieron el Espíritu Santo y empezaron a predicar. Las primeras comunidades compartían sus bienes, rezaban juntas y celebraban la «fracción del pan» (la eucaristía). <b>Pedro</b> lideró la comunidad de Jerusalén y <b>Pablo</b> llevó el mensaje a los no judíos por todo el Mediterráneo.</p>`,
      svg: rueda("Rasgos de las primeras comunidades cristianas", "PRIMEROS|CRISTIANOS", [["oración", "var(--pen)"], ["eucaristía", "var(--bac)"], ["compartir", "var(--leaf)"], ["enseñanza", "var(--sun)"], ["Pedro", "var(--red)"], ["Pablo", "var(--inf)"]], "var(--bac)"),
    },
    {
      html: `<h3>De perseguidos a religión oficial</h3><p>Durante casi tres siglos los cristianos fueron <b>perseguidos</b> por negarse a adorar al emperador, y muchos murieron como <b>mártires</b>. En el 313 el emperador Constantino concedió libertad de culto con el <mark>Edicto de Milán</mark>, y en el 380 Teodosio hizo del cristianismo la religión oficial del Imperio. En el siglo IV se celebraron los primeros grandes <b>concilios</b> (Nicea, 325), que fijaron el Credo.</p>`,
      svg: linea("Del martirio a la religión oficial", [["64", "Nerón|persigue"], ["303", "última gran|persecución"], ["313", "Edicto de|Milán"], ["380", "religión|oficial"]], "var(--bac)"),
    },
    {
      html: `<h3>La Iglesia medieval</h3><p>Tras la caída de Roma, los <mark>monasterios</mark> (san Benito: «ora et labora») conservaron la cultura antigua copiando libros. La Iglesia creó escuelas y las primeras <b>universidades</b>, hospitales y un arte extraordinario (románico y gótico). También hubo sombras: luchas de poder, cruzadas e Inquisición. En 1054 se produjo el <b>Cisma de Oriente</b> entre la Iglesia de Roma (católica) y la de Constantinopla (ortodoxa).</p>`,
      svg: dos("Luces y sombras de la Iglesia medieval", ["Aportaciones", ["monasterios", "universidades", "hospitales", "románico, gótico", "cuidado de pobres"], "var(--leaf)"], ["Sombras", ["luchas de poder", "cruzadas", "Inquisición", "riqueza del clero", "intolerancia"], "var(--red)"]),
    },
    {
      html: `<h3>Reforma, Trento y Vaticano II</h3><p>En 1517 el monje <b>Martín Lutero</b> criticó abusos como la venta de indulgencias: empezó la <mark>Reforma protestante</mark>, de la que nacieron luteranos, calvinistas y anglicanos. La Iglesia católica respondió con el Concilio de <b>Trento</b> (1545-1563). En el siglo XX el <mark>Concilio Vaticano II</mark> (1962-1965) renovó la Iglesia: misa en lengua de cada país, diálogo con el mundo, con otras religiones y ecumenismo (buscar la unidad de los cristianos).</p>`,
      svg: filas("Las tres grandes ramas del cristianismo", [["Católicos", "Roma, el papa · ≈ 1 400 M", "var(--sun)"], ["Protestantes", "Lutero, 1517 · ≈ 900 M", "var(--pen)"], ["Ortodoxos", "Oriente, 1054 · ≈ 230 M", "var(--bac)"]]),
    },
  ],
  figura: {
    titulo: "Dos mil años de historia de la Iglesia",
    svg: figLinea("Línea del tiempo de la Iglesia desde Pentecostés hasta el Vaticano II", [[40, "≈ 30", "Pentecostés", 1], [120, "313", "Edicto de Milán", 0], [200, "529", "san Benito", 1], [300, "1054", "Cisma de Oriente", 0], [410, "1517", "Reforma de Lutero", 1], [490, "1545", "Concilio de Trento", 0], [630, "1962", "Vaticano II", 1]]),
  },
  video: { id: "FcCONB80WH8", titulo: "La historia del cristianismo en 12 minutos", canal: "Memorias de Pez", vistas: 1102192, megusta: 40498, busqueda: "historia del cristianismo resumen" },
  quiz: [
    { q: "¿Qué acontecimiento se considera el nacimiento de la Iglesia?", o: ["Navidad", "Pentecostés", "El Edicto de Milán"], a: 1, e: "Según los Hechos de los Apóstoles, los discípulos recibieron el Espíritu Santo y empezaron a predicar." },
    { q: "¿Qué hizo el Edicto de Milán (313)?", o: ["Prohibir el cristianismo", "Conceder libertad de culto a los cristianos", "Separar católicos y ortodoxos"], a: 1, e: "Lo promulgaron Constantino y Licinio." },
    { q: "«Ora et labora» era el lema de…", o: ["los monjes benedictinos", "los protestantes", "los cruzados"], a: 0, e: "San Benito organizó la vida monástica en Occidente." },
    { q: "¿En qué año empezó la Reforma protestante?", o: ["1054", "1517", "1962"], a: 1, e: "Lutero publicó sus 95 tesis en Wittenberg." },
    { q: "El Concilio Vaticano II…", o: ["renovó la Iglesia y abrió el diálogo con el mundo", "inició las cruzadas", "creó la Inquisición"], a: 0, e: "Se celebró entre 1962 y 1965." },
  ],
  examen: [
    { q: "El Cisma de Oriente (1054) separó a…", o: ["católicos y protestantes", "católicos y ortodoxos", "judíos y cristianos"], a: 1, e: "Roma y Constantinopla rompieron la comunión." },
    { q: "¿Qué emperador hizo del cristianismo la religión oficial (380)?", o: ["Nerón", "Constantino", "Teodosio"], a: 2, e: "Con el Edicto de Tesalónica." },
    { q: "El ecumenismo busca…", o: ["la unidad de los cristianos", "convertir por la fuerza", "separar Iglesia y Estado"], a: 0, e: "Fue impulsado especialmente desde el Vaticano II." },
  ],
  feynman: ["Cómo eran las primeras comunidades cristianas", "Qué cambió con Constantino y Teodosio", "Aportaciones y sombras de la Iglesia medieval", "Por qué hay católicos, ortodoxos y protestantes"],
  mapa: mapa("LA IGLESIA", "var(--bac)", [
    ["Orígenes", "Pentecostés · Pedro · Pablo", "var(--leaf)"],
    ["Imperio", "mártires · 313 · 380", "var(--red)"],
    ["Edad Media", "monasterios · 1054", "var(--sun)"],
    ["Edad Moderna", "Reforma · Trento · Vaticano II", "var(--pen)"],
  ], 270),
  tarjetas: [
    ["Edicto de Milán", "313: libertad de culto para los cristianos."],
    ["Cisma de Oriente", "1054: separación entre católicos y ortodoxos."],
    ["Reforma protestante", "1517: Lutero; nacen luteranos, calvinistas y anglicanos."],
    ["Concilio de Trento", "1545-1563: respuesta católica a la Reforma."],
    ["Concilio Vaticano II", "1962-1965: renovación y diálogo con el mundo."],
  ],
  familias: ["Visitad un monasterio, catedral o iglesia de vuestra zona y averiguad cuándo y por qué se construyó.", "Preguntad si en la familia o el barrio hay personas de otras confesiones cristianas y qué celebran.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La Iglesia: origen, historia, divisiones y renovación; aportaciones a la cultura y lectura crítica de la historia (RD 217/2022; enseñanzas de Religión católica de la ESO).",
    ideas: ["Línea del tiempo ilustrada por grupos (cada grupo, una época).", "Comparar un templo románico y uno gótico de la comunidad.", "Encuentro o videollamada con una comunidad ortodoxa o protestante local."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Historia del cristianismo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Historia_del_cristianismo" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Situar en el tiempo los grandes momentos de la historia de la Iglesia", "Valorar la aportación de la Iglesia a la cultura y a la sociedad"],
  bloques: [
    { tras: "Las primeras comunidades", html: `<h3>Pablo y la expansión del cristianismo</h3><p>Pablo de Tarso, un fariseo que perseguía a los cristianos, se convirtió tras una experiencia en el camino de Damasco. Hizo <b>tres grandes viajes</b> por Asia Menor y Grecia fundando comunidades, y escribió cartas para animarlas. Defendió que los no judíos podían ser cristianos sin cumplir toda la Ley judía, lo que se acordó en el <mark>Concilio de Jerusalén</mark> (hacia el año 49). Murió mártir en Roma, como Pedro, hacia el año 64-67. Gracias a las calzadas romanas y al griego como lengua común, el cristianismo se extendió con rapidez por el Imperio.</p>` },
    { tras: "De perseguidos a religión oficial", html: `<h3>Los Padres de la Iglesia y los monjes</h3><p>Entre los siglos II y VIII, los <mark>Padres de la Iglesia</mark> explicaron la fe con ayuda de la filosofía griega: Agustín de Hipona, Jerónimo (que tradujo la Biblia al latín), Ambrosio o Isidoro de Sevilla, autor de las <i>Etimologías</i>. Los primeros <b>concilios</b> (Nicea, 325) fijaron el Credo. Nació también el <b>monacato</b>: hombres y mujeres que dejaban todo para vivir en oración. San <b>Benito</b> (siglo VI) escribió una regla con el lema <i>ora et labora</i> (reza y trabaja), y los monasterios copiaron y salvaron los libros de la Antigüedad.</p>` },
    { tras: "La Iglesia medieval", html: `<h3>Etapas de la historia de la Iglesia</h3>${tabla(["Época", "Hechos destacados"], [["Antigua (s. I-V)", "persecuciones, Edicto de Milán (313), concilio de Nicea (325)"], ["Medieval (s. V-XV)", "monasterios, Cisma de Oriente (1054), catedrales, universidades, órdenes mendicantes"], ["Moderna (s. XVI-XVIII)", "Reforma protestante (1517), Concilio de Trento, misiones en América y Asia"], ["Contemporánea (s. XIX-XXI)", "doctrina social (1891), Concilio Vaticano II (1962-1965), ecumenismo"]])}<p>En 1054 se separaron la Iglesia de Roma (católica) y la de Constantinopla (<mark>ortodoxa</mark>), sobre todo por la autoridad del papa.</p>` },
    { tras: "Reforma, Trento", html: `<h3>El Concilio Vaticano II</h3><p>Convocado por <b>Juan XXIII</b> y concluido por Pablo VI (1962-1965), el <mark>Concilio Vaticano II</mark> quiso poner al día la Iglesia (<i>aggiornamento</i>). Permitió celebrar la misa en las lenguas de cada pueblo en lugar del latín, impulsó la lectura de la Biblia, defendió la <b>libertad religiosa</b>, abrió el diálogo con otras confesiones cristianas (<b>ecumenismo</b>) y con otras religiones, y presentó a la Iglesia como «pueblo de Dios» en el que los laicos tienen un papel activo. Sus documentos siguen guiando a la Iglesia hoy.</p>`, video: { id: "n20ahoB8G1c", titulo: "¿Qué fue el Concilio Vaticano II? La reunión católica en la que nació el ecumenismo", canal: "BITE", vistas: 175894, megusta: 0 } },
    { tras: "Reforma, Trento", html: `<h3>Luces y sombras</h3><p>La historia de la Iglesia tiene <b>luces</b>: hospitales, escuelas y universidades; la conservación de la cultura; la atención a pobres y enfermos; defensores de los indígenas como <b>Bartolomé de las Casas</b>; santos y santas como Francisco de Asís o Teresa de Jesús. Y también <b>sombras</b>: las cruzadas, la Inquisición, la intolerancia religiosa o, en tiempos recientes, los abusos a menores. La Iglesia ha pedido perdón por muchos de estos hechos; Juan Pablo II lo hizo de forma solemne en el año 2000. Conocer la historia completa ayuda a <mark>juzgar con equilibrio</mark>.</p>` },
  ],
  ejemplos: [
    { enunciado: "Ordena: Concilio de Trento, Edicto de Milán, Cisma de Oriente, Vaticano II, Reforma de Lutero.", pasos: ["Edicto de Milán: 313.", "Cisma de Oriente: 1054.", "Reforma de Lutero: 1517.", "Trento: 1545-1563.", "Vaticano II: 1962-1965."], resultado: "313 → 1054 → 1517 → 1545 → 1962." },
    { enunciado: "Explica por qué fue importante el Concilio de Jerusalén.", pasos: ["Se discutía si los no judíos debían cumplir toda la Ley judía.", "Se decidió que no era necesario.", "Así el cristianismo pudo abrirse a todos los pueblos."], resultado: "Hizo del cristianismo una religión universal." },
    { enunciado: "Compara católicos, ortodoxos y protestantes.", pasos: ["Católicos: reconocen la autoridad del papa.", "Ortodoxos: separados desde 1054; patriarcas y gran importancia de la liturgia y los iconos.", "Protestantes: desde 1517; la Biblia como única autoridad, sin papa."], resultado: "Comparten la fe en Cristo, pero difieren en la autoridad y en algunas prácticas." },
  ],
  errores: [
    "Pensar que el cristianismo fue religión oficial desde el principio.",
    "Confundir el Cisma de Oriente (1054) con la Reforma protestante (1517).",
    "Creer que los monasterios solo servían para rezar: también conservaron la cultura.",
    "Juzgar la historia de la Iglesia solo por sus luces o solo por sus sombras.",
    "Pensar que el Vaticano II es del siglo XIX: fue entre 1962 y 1965.",
  ],
  ejercicios: [
    { q: "¿Quién fue Pablo de Tarso?", sol: "Un fariseo perseguidor de cristianos que se convirtió y fue el gran misionero del cristianismo entre los no judíos." },
    { q: "¿Qué se decidió en el Concilio de Jerusalén?", sol: "Que los no judíos podían ser cristianos sin cumplir toda la Ley judía." },
    { q: "¿Qué son los Padres de la Iglesia? Cita dos.", sol: "Escritores cristianos de los primeros siglos que explicaron la fe; por ejemplo, Agustín e Isidoro de Sevilla." },
    { q: "¿Qué significa «ora et labora»?", sol: "«Reza y trabaja», lema de la regla de san Benito." },
    { q: "¿Qué ocurrió en 1054?", sol: "El Cisma de Oriente: se separaron la Iglesia católica y la ortodoxa." },
    { q: "¿Qué decidió el Concilio de Trento?", sol: "Reformar la Iglesia católica y reafirmar su doctrina frente al protestantismo." },
    { q: "Cita tres cambios del Vaticano II.", sol: "Misa en lengua de cada pueblo, libertad religiosa y diálogo ecuménico." },
    { q: "¿Qué es el ecumenismo?", sol: "El esfuerzo por la unidad y el diálogo entre las distintas confesiones cristianas." },
    { q: "¿Quién fue Bartolomé de las Casas?", sol: "Un fraile dominico que defendió los derechos de los indígenas americanos en el siglo XVI." },
    { q: "Cita una luz y una sombra de la historia de la Iglesia.", sol: "Luz: hospitales y escuelas. Sombra: la Inquisición." },
  ],
  quiz: [
    { q: "El Credo se fijó en el Concilio de…", o: ["Nicea (325)", "Trento", "Vaticano II"], a: 0, e: "Y se completó en Constantinopla (381)." },
    { q: "La Iglesia ortodoxa se separó en…", o: ["1054", "1517", "313"], a: 0, e: "Cisma de Oriente." },
    { q: "El Vaticano II lo convocó…", o: ["Juan XXIII", "Pío XII", "Francisco"], a: 0, e: "En 1962." },
    { q: "«Ora et labora» es el lema de…", o: ["los benedictinos", "los jesuitas", "los franciscanos"], a: 0, e: "Regla de san Benito." },
    { q: "Las Etimologías las escribió…", o: ["Isidoro de Sevilla", "Agustín", "Pablo"], a: 0, e: "Una enciclopedia del siglo VII." },
  ],
  tarjetas: [
    ["Concilio de Jerusalén", "Abrió el cristianismo a los no judíos (hacia el año 49)."],
    ["Cisma de Oriente", "Separación de católicos y ortodoxos en 1054."],
    ["Ecumenismo", "Diálogo por la unidad de los cristianos."],
  ],
});
