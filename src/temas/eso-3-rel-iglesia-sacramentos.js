// Religión 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Religión",
  curso: "3-eso",
  titulo: "La Iglesia y los sacramentos",
  minutos: 35,
  objetivos: ["Explicar el origen y la misión de la Iglesia", "Describir cómo se organiza la Iglesia y qué notas la definen", "Conocer los siete sacramentos y su significado"],
  claves: ["Iglesia", "Pentecostés", "Pueblo de Dios", "una, santa, católica y apostólica", "sacramento", "signo", "iniciación cristiana"],
  pregunta: {
    texto: "La palabra «iglesia» puede referirse a un edificio con campanario. Pero cuando los cristianos dicen «somos Iglesia», ¿de qué hablan?",
    respuesta: "De una <mark>comunidad de personas</mark>, no de un edificio. <i>Iglesia</i> viene del griego <i>ekklesía</i>, «asamblea de convocados». Es el conjunto de los bautizados que creen en Jesucristo, celebran su fe y la viven juntos. Esa comunidad celebra la presencia de Cristo sobre todo en los <b>sacramentos</b>.",
  },
  bloques: [
    {
      html: `<h3>El origen de la Iglesia</h3><p>Jesús reunió en torno a sí a un grupo de discípulos y eligió a <b>doce apóstoles</b>, con <b>Pedro</b> a la cabeza: «Tú eres Pedro, y sobre esta piedra edificaré mi Iglesia» (Mt 16,18). Tras su resurrección, los envió a anunciar el Evangelio a todo el mundo. Cincuenta días después de la Pascua, en <mark>Pentecostés</mark>, el Espíritu Santo descendió sobre los apóstoles reunidos con María, y ellos comenzaron a predicar sin miedo. Ese día se considera el <b>nacimiento de la Iglesia</b>. Los primeros cristianos vivían unidos, compartían sus bienes y se reunían para orar y partir el pan (Hch 2,42-47).</p>`,
      svg: filas("Cómo nace la Iglesia", [["Jesús", "llama a los Doce", "var(--sun)"], ["Pedro", "roca de la Iglesia", "var(--pen)"], ["Pascua", "resurrección", "var(--red)"], ["Pentecostés", "llega el Espíritu", "var(--leaf)"]]),
    },
    {
      html: `<h3>Qué es la Iglesia</h3><p>La Iglesia se describe con varias imágenes. Es el <mark>Pueblo de Dios</mark>: todos los bautizados, que caminan juntos en la historia. Es el <b>Cuerpo de Cristo</b>: como en un cuerpo, cada miembro tiene una función distinta y Cristo es la cabeza (1 Cor 12). Y es el <b>Templo del Espíritu Santo</b>, que la anima y la mantiene unida. En el Credo se confiesan sus cuatro <b>notas</b>: la Iglesia es <b>una</b> (una sola fe y un solo bautismo), <b>santa</b> (por Cristo, aunque sus miembros sean pecadores), <b>católica</b> (universal, para todos) y <b>apostólica</b> (fundada sobre los apóstoles).</p>`,
      svg: rueda("Las cuatro notas de la Iglesia: una, santa, católica y apostólica", "IGLESIA", [["una", "var(--pen)"], ["santa", "var(--sun)"], ["católica", "var(--leaf)"], ["apostólica", "var(--red)"]], "var(--bac)"),
    },
    {
      html: `<h3>Cómo se organiza</h3><p>En la Iglesia todos los bautizados tienen la misma dignidad, pero distintas vocaciones y servicios. El <mark>papa</mark>, obispo de Roma y sucesor de Pedro, es el pastor de toda la Iglesia. Los <b>obispos</b>, sucesores de los apóstoles, guían cada <b>diócesis</b>, ayudados por los <b>sacerdotes</b> y los <b>diáconos</b>; cada diócesis se divide en <b>parroquias</b>. Los <b>laicos</b>, la inmensa mayoría, viven su fe en la familia, el trabajo y la sociedad. Y los <b>religiosos y religiosas</b> (monjes, monjas, frailes) se consagran a Dios con votos de pobreza, castidad y obediencia.</p>`,
      svg: filas("Vocaciones y servicios en la Iglesia", [["Papa", "sucesor de Pedro", "var(--sun)"], ["Obispos", "guían las diócesis", "var(--pen)"], ["Sacerdotes", "parroquias", "var(--red)"], ["Religiosos", "votos", "var(--muted)"], ["Laicos", "fe en el mundo", "var(--leaf)"]]),
    },
    {
      html: `<h3>Qué es un sacramento</h3><p>Un <mark>sacramento</mark> es un <b>signo visible</b> de la gracia de Dios, instituido por Cristo y confiado a la Iglesia. Igual que un abrazo expresa el cariño y a la vez lo comunica, los sacramentos usan gestos, palabras y elementos (agua, pan, vino, aceite) que significan y hacen presente el amor de Dios. En cada sacramento hay una <b>materia</b> (el elemento o el gesto: el agua del bautismo) y una <b>forma</b> (las palabras: «Yo te bautizo en el nombre del Padre…»). Acompañan los grandes momentos de la vida: nacer, crecer, alimentarse, curarse, comprometerse.</p>`,
      svg: dos("Un sacramento tiene materia y forma", ["Materia", ["elemento o gesto", "agua, pan, vino", "aceite", "imposición de manos"], "var(--inf)"], ["Forma", ["las palabras", "«Yo te bautizo…»", "«Esto es mi cuerpo»", "«Yo te absuelvo…»"], "var(--sun)"]),
    },
    {
      html: `<h3>Los siete sacramentos</h3><p>La Iglesia celebra <mark>siete sacramentos</mark>, que se agrupan en tres tipos. De <b>iniciación cristiana</b>: el <b>Bautismo</b>, que nos hace hijos de Dios y miembros de la Iglesia; la <b>Confirmación</b>, que fortalece con el Espíritu Santo; y la <b>Eucaristía</b>, en la que Cristo se hace presente en el pan y el vino y alimenta a los cristianos. De <b>curación</b>: la <b>Penitencia</b> o Reconciliación, que perdona los pecados, y la <b>Unción de los enfermos</b>, que da fuerza en la enfermedad. Y <b>al servicio de la comunidad</b>: el <b>Orden sacerdotal</b> y el <b>Matrimonio</b>.</p>`,
      svg: filas("Los siete sacramentos en tres grupos", [["Iniciación", "Bautismo y Confirmación", "var(--leaf)"], ["Iniciación", "Eucaristía", "var(--leaf)"], ["Curación", "Penitencia, Unción", "var(--red)"], ["Servicio", "Orden, Matrimonio", "var(--pen)"]]),
    },
  ],
  figura: {
    titulo: "Los sacramentos a lo largo de la vida",
    svg: figCols("Los sacramentos agrupados: iniciación, curación y servicio a la comunidad", [["Iniciación", ["Bautismo", "Confirmación", "Eucaristía", "nacer y crecer"], "var(--leaf)"], ["Curación", ["Penitencia", "Unción de", "los enfermos", "sanar y perdonar"], "var(--red)"], ["Servicio", ["Orden sacerdotal", "Matrimonio", "", "entregarse a otros"], "var(--pen)"]]),
  },
  video: { id: "hIRNa0g2wp8", titulo: "¿Qué es un sacramento?", canal: "ConectaCEC", vistas: 356495, megusta: 0, busqueda: "los sacramentos explicación jóvenes catequesis" },
  quiz: [
    { q: "¿Qué significa «ekklesía»?", o: ["Asamblea de convocados", "Edificio sagrado", "Sacerdote"], a: 0, e: "Origen de la palabra Iglesia." },
    { q: "¿Cuándo nace la Iglesia?", o: ["En Navidad", "En Pentecostés", "En Semana Santa"], a: 1, e: "Con la venida del Espíritu Santo." },
    { q: "¿Quién es el sucesor de Pedro?", o: ["El obispo", "El papa", "El párroco"], a: 1, e: "Obispo de Roma." },
    { q: "¿Cuántos sacramentos hay?", o: ["Tres", "Siete", "Diez"], a: 1, e: "Iniciación, curación y servicio." },
    { q: "¿Qué sacramento perdona los pecados?", o: ["La Penitencia", "La Confirmación", "El Matrimonio"], a: 0, e: "También llamado Reconciliación." },
  ],
  examen: [
    { q: "«Católica» significa…", o: ["universal", "romana", "antigua"], a: 0, e: "Para todos los pueblos." },
    { q: "Son sacramentos de iniciación…", o: ["Bautismo, Confirmación y Eucaristía", "Orden y Matrimonio", "Penitencia y Unción"], a: 0, e: "Introducen en la vida cristiana." },
    { q: "La materia del Bautismo es…", o: ["el agua", "el aceite", "el pan"], a: 0, e: "Con las palabras forman el signo." },
  ],
  feynman: ["Cómo nació la Iglesia", "Qué significan las cuatro notas de la Iglesia", "Cómo se organiza la Iglesia", "Qué es un sacramento y cuáles son los siete"],
  mapa: mapa("IGLESIA Y SACRAMENTOS", "var(--bac)", [
    ["Origen", "apóstoles · Pentecostés", "var(--sun)"],
    ["Notas", "una · santa · católica…", "var(--pen)"],
    ["Organización", "papa · obispos · laicos", "var(--muted)"],
    ["Sacramentos", "siete signos de gracia", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Iglesia", "Comunidad de los bautizados que creen en Jesucristo."],
    ["Pentecostés", "Venida del Espíritu Santo; nacimiento de la Iglesia."],
    ["Diócesis", "Territorio de la Iglesia guiado por un obispo."],
    ["Sacramento", "Signo visible de la gracia de Dios instituido por Cristo."],
    ["Iniciación cristiana", "Bautismo, Confirmación y Eucaristía."],
  ],
  familias: ["Buscad la fecha de vuestro bautismo y hablad de cómo fue ese día.", "Averiguad a qué parroquia y diócesis pertenecéis y quién es vuestro obispo.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La Iglesia: origen, naturaleza, notas y organización; los sacramentos como signos de la presencia de Cristo y su celebración (RD 217/2022; enseñanzas de Religión católica de la ESO).",
    ideas: ["Entrevistar a una persona de la parroquia sobre su servicio.", "Analizar los símbolos del bautismo: agua, luz, vestido blanco, aceite.", "Mapa de la diócesis con sus arciprestazgos o zonas."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Catecismo de la Iglesia Católica, los sacramentos", url: "https://www.vatican.va/archive/catechism_sp/index_sp.html" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar los signos de cada sacramento", "Describir las partes de la misa"],
  bloques: [
    { tras: "El origen de la Iglesia", html: `<h3>La Iglesia de los primeros siglos</h3><p>Los apóstoles extendieron el cristianismo por el Imperio romano. San <b>Pablo</b> fundó comunidades en Asia Menor y Grecia y les escribió cartas que forman parte del Nuevo Testamento. Los cristianos fueron <mark>perseguidos</mark> durante casi tres siglos por negarse a adorar al emperador: muchos murieron como <b>mártires</b> («testigos»), como Pedro y Pablo en Roma, o santa Eulalia en Mérida. Se reunían en casas y enterraban a sus muertos en las <b>catacumbas</b>. En el 313, el emperador <b>Constantino</b> concedió libertad religiosa con el Edicto de Milán, y en el 380 Teodosio hizo del cristianismo la religión oficial del Imperio.</p>`, video: { id: "8Scf1PPLqIw", titulo: "Francisco explica por qué la Iglesia es católica y apostólica", canal: "ROME REPORTS en Español", vistas: 131045, megusta: 0 } },
    { tras: "Los siete sacramentos", html: `<h3>Signos de cada sacramento</h3>${tabla(["Sacramento", "Signo (materia)", "Ministro", "Efecto"], [["Bautismo", "agua; vela, vestido blanco", "sacerdote o diácono", "hijo de Dios, perdona el pecado original"], ["Confirmación", "unción con crisma, imposición de manos", "obispo", "fuerza del Espíritu Santo"], ["Eucaristía", "pan y vino", "sacerdote", "presencia real de Cristo, alimento"], ["Penitencia", "confesión y absolución", "sacerdote", "perdón de los pecados"], ["Unción", "óleo de los enfermos", "sacerdote", "fuerza y alivio en la enfermedad"], ["Orden", "imposición de manos", "obispo", "consagra diáconos, sacerdotes y obispos"], ["Matrimonio", "consentimiento de los novios", "los propios novios", "unión para toda la vida"]])}` },
    { tras: "Signos de cada sacramento", html: `<h3>La Eucaristía: la misa</h3><p>La <mark>Eucaristía</mark> («acción de gracias») es el centro de la vida cristiana: en ella se hace presente la muerte y resurrección de Jesús, y los cristianos lo reciben en la <b>comunión</b>. Se celebra sobre todo el <b>domingo</b>, día de la resurrección. Sus partes son: <b>ritos iniciales</b> (saludo, petición de perdón, gloria); <b>liturgia de la Palabra</b> (lecturas de la Biblia, salmo, Evangelio y homilía); <b>liturgia eucarística</b> (ofrenda del pan y el vino, plegaria eucarística con las palabras de Jesús en la Última Cena, padrenuestro y comunión); y <b>ritos de despedida</b>, con la bendición y el envío: «Podéis ir en paz».</p>` },
    { tras: "Cómo se organiza", html: `<h3>El año litúrgico</h3><p>La Iglesia celebra la vida de Cristo a lo largo del <mark>año litúrgico</mark>, que empieza en noviembre o diciembre. El <b>Adviento</b> (cuatro semanas, color morado) prepara la <b>Navidad</b> (blanco), que celebra el nacimiento de Jesús. La <b>Cuaresma</b> (cuarenta días, morado), que empieza el Miércoles de Ceniza, prepara la <b>Semana Santa</b> y la <b>Pascua</b> de Resurrección (blanco), la fiesta más importante, que dura cincuenta días hasta <b>Pentecostés</b> (rojo). El resto del año es el <b>Tiempo Ordinario</b> (verde). Los colores de las vestiduras del sacerdote indican en qué tiempo estamos.</p>` },
  ],
  ejemplos: [
    { enunciado: "Identifica la materia y la forma del sacramento de la Eucaristía.", pasos: ["Materia: los elementos que se usan, el pan y el vino.", "Forma: las palabras de Jesús que dice el sacerdote: «Esto es mi cuerpo… esta es mi sangre»."], resultado: "Materia: pan y vino. Forma: las palabras de la consagración." },
    { enunciado: "Un sacerdote lleva una casulla morada. ¿En qué tiempo litúrgico puede estar?", pasos: ["El morado indica preparación y conversión.", "Se usa en Adviento y en Cuaresma."], resultado: "En Adviento (antes de Navidad) o en Cuaresma (antes de Pascua)." },
    { enunciado: "Explica por qué se dice que la Iglesia es «Cuerpo de Cristo».", pasos: ["San Pablo compara la Iglesia con un cuerpo (1 Cor 12).", "Cada miembro tiene una función distinta y todos son necesarios.", "Cristo es la cabeza que une y da vida a todo el cuerpo."], resultado: "Porque todos los cristianos, con dones distintos, forman una unidad viva cuya cabeza es Cristo." },
  ],
  errores: [
    "Pensar que la Iglesia es solo el edificio o solo el clero: son todos los bautizados.",
    "Confundir diócesis (territorio de un obispo) con parroquia (comunidad local).",
    "Creer que los sacramentos son solo ritos sociales sin significado religioso.",
    "Pensar que en el Matrimonio el ministro es el sacerdote: son los propios novios.",
    "Confundir los sacramentos de iniciación con los de curación.",
  ],
  ejercicios: [
    { q: "¿Qué ocurrió en Pentecostés?", sol: "El Espíritu Santo descendió sobre los apóstoles y comenzaron a anunciar el Evangelio: nace la Iglesia." },
    { q: "Cita tres imágenes de la Iglesia.", sol: "Pueblo de Dios, Cuerpo de Cristo y Templo del Espíritu Santo." },
    { q: "Explica las cuatro notas de la Iglesia.", sol: "Una (una fe y un bautismo), santa (por Cristo), católica (universal) y apostólica (fundada en los apóstoles)." },
    { q: "¿Quién es el papa y qué función tiene?", sol: "El obispo de Roma, sucesor de Pedro, pastor de toda la Iglesia." },
    { q: "Define sacramento.", sol: "Signo visible de la gracia de Dios, instituido por Cristo y confiado a la Iglesia." },
    { q: "Clasifica los siete sacramentos en sus tres grupos.", sol: "Iniciación: Bautismo, Confirmación, Eucaristía. Curación: Penitencia, Unción. Servicio: Orden, Matrimonio." },
    { q: "¿Qué ministro celebra la Confirmación y qué signos tiene?", sol: "Normalmente el obispo; unción con el crisma e imposición de manos." },
    { q: "Nombra las partes de la misa.", sol: "Ritos iniciales, liturgia de la Palabra, liturgia eucarística y ritos de despedida." },
    { q: "¿Qué colores litúrgicos corresponden a Navidad, Cuaresma y Pentecostés?", sol: "Blanco, morado y rojo." },
    { q: "¿Qué cambió con el Edicto de Milán (313)?", sol: "Constantino concedió libertad religiosa y terminaron las persecuciones." },
  ],
  quiz: [
    { q: "«Eucaristía» significa…", o: ["acción de gracias", "comida", "perdón"], a: 0, e: "Del griego." },
    { q: "La fiesta más importante del año litúrgico es…", o: ["la Pascua", "la Navidad", "el Corpus"], a: 0, e: "Resurrección de Jesús." },
    { q: "El color del Tiempo Ordinario es…", o: ["verde", "rojo", "morado"], a: 0, e: "Esperanza." },
    { q: "«Mártir» significa…", o: ["testigo", "santo", "soldado"], a: 0, e: "Daban testimonio con su vida." },
    { q: "El ministro del Matrimonio es…", o: ["los propios novios", "el obispo", "el papa"], a: 0, e: "El sacerdote es testigo." },
  ],
  tarjetas: [
    ["Mártir", "«Testigo»: quien da la vida por su fe."],
    ["Liturgia de la Palabra", "Parte de la misa con las lecturas de la Biblia."],
    ["Año litúrgico", "Adviento, Navidad, Cuaresma, Pascua y Tiempo Ordinario."],
  ],
});
