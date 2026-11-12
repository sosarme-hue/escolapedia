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
  mapa: mapa("IGLESIA EN LA HISTORIA", "var(--bac)", [
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
