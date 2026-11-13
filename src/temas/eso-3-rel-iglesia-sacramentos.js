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

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["Un domingo en la parroquia", `<p>Lucas tiene catorce años y este domingo acompaña a su abuela a la parroquia del barrio. Al entrar le sorprende la mezcla de gente: una familia que va a bautizar a su bebé, unos jóvenes que tocan la guitarra en el coro, una señora mayor en silla de ruedas, un matrimonio que vino de Colombia, el voluntario de Cáritas que reparte hojas sobre la campaña de alimentos. «¿Todos estos son la Iglesia?», le pregunta a su abuela al salir. Ella sonríe: «La Iglesia no es el edificio, Lucas. Somos las personas».</p><p>La pregunta de Lucas es buena. Mucha gente piensa en la Iglesia como un edificio o como el Vaticano, pero para los cristianos la Iglesia es, ante todo, una comunidad de creyentes que siguen a Jesús, celebran su fe con signos llamados sacramentos y tratan de vivir el Evangelio en su vida diaria. En este tema estudiarás cómo nació la Iglesia, cómo creció en los primeros siglos, cómo se organiza hoy, cómo marca el tiempo con el año litúrgico y qué son los siete sacramentos que acompañan la vida del cristiano desde el nacimiento hasta la muerte.</p>`],
  mas: [
    ["<h3>El origen de la Iglesia</h3>", `<p>Los Hechos de los Apóstoles, escritos por san Lucas, cuentan cómo era aquella primera comunidad de Jerusalén: «perseveraban en la enseñanza de los apóstoles, en la comunión, en la fracción del pan y en las oraciones», y «lo tenían todo en común», de modo que nadie pasaba necesidad. Es el modelo al que la Iglesia ha vuelto a mirar en cada época.</p>`],
    ["<h3>Qué es la Iglesia</h3>", `<p>San Pablo explicaba que en la Iglesia cada persona tiene un don o <b>carisma</b> distinto, igual que cada miembro del cuerpo tiene su función: unos enseñan, otros cuidan a los enfermos, otros organizan, otros cantan. Ninguno es más importante que los demás, y todos se necesitan.</p>`],
    ["<h3>Qué es un sacramento</h3>", `<p>Los sacramentos no son magia ni actos automáticos: requieren la fe y la libertad de quien los recibe. Tampoco son solo recuerdos simbólicos: para los católicos, a través de ellos actúa realmente Cristo, que comunica su vida y su gracia.</p>`],
    ["<h3>Los siete sacramentos</h3>", `<p>Los siete sacramentos acompañan los grandes momentos de la vida humana: nacer (Bautismo), crecer y madurar (Confirmación), alimentarse (Eucaristía), equivocarse y reconciliarse (Penitencia), enfermar (Unción), formar una familia (Matrimonio) y servir a la comunidad (Orden).</p>`],
    ["<h3>Cómo se organiza</h3>", `<p>La Iglesia se divide en <b>diócesis</b>, cada una guiada por un obispo, y las diócesis en <b>parroquias</b>, a cargo de un párroco. En España hay setenta diócesis y más de veinte mil parroquias. Los obispos de cada país se reúnen en una Conferencia Episcopal, y todos están en comunión con el papa, obispo de Roma.</p>`],
  ],
  svgs: [
    ["<h3>La Iglesia de los primeros siglos</h3>", "Los primeros siglos", [["Persecución", "mártires y catacumbas"], ["Año 313", "Edicto de Milán"], ["Expansión", "por todo el Imperio"]], "de Jerusalén a Roma"],
    ["<h3>El año litúrgico</h3>", "El año litúrgico", [["Adviento y Navidad", "morado y blanco"], ["Cuaresma y Pascua", "morado y blanco"], ["Tiempo Ordinario", "verde"]], "el tiempo de la fe"],
    ["<h3>Signos de cada sacramento</h3>", "Materia y forma", [["Materia", "agua, aceite, pan, vino"], ["Forma", "las palabras del rito"], ["Ministro", "quien celebra"]], "signos visibles"],
    ["<h3>La Eucaristía: la misa</h3>", "Partes de la misa", [["Ritos iniciales", "saludo y perdón"], ["Liturgia de la Palabra", "lecturas y homilía"], ["Liturgia eucarística", "consagración y comunión"]], "la misa"],
  ],
  bloques: [
    { tras: "<h3>La Iglesia de los primeros siglos</h3>", html: `<h3>Los Padres de la Iglesia y los concilios</h3><p>En los primeros siglos, la Iglesia tuvo que explicar su fe con claridad frente a ideas que la deformaban. Lo hicieron los <mark>Padres de la Iglesia</mark>, grandes pensadores y pastores cuyos escritos siguen siendo una referencia: san Ignacio de Antioquía, san Justino, san Ireneo, san Atanasio, san Basilio, san Juan Crisóstomo, san Jerónimo (que tradujo la Biblia al latín, la Vulgata) y san Agustín de Hipona, entre otros.</p><p>Cuando surgían dudas importantes, los obispos se reunían en <mark>concilios</mark>. El primer gran concilio ecuménico fue el de <b>Nicea</b> (325), que afirmó que Jesús es verdadero Dios, «de la misma naturaleza que el Padre», frente a Arrio, que lo negaba. De Nicea y del concilio de Constantinopla (381) procede el <b>Credo</b> que todavía se reza en la misa. A lo largo de la historia ha habido veintiún concilios ecuménicos; el más reciente, el <b>Vaticano II</b> (1962-1965), renovó la liturgia, permitió celebrar la misa en las lenguas de cada pueblo e impulsó el diálogo con el mundo moderno.</p>`, svg: ["Concilios clave", [["Nicea (325)", "Jesús es Dios"], ["Trento (1545-1563)", "respuesta a la Reforma"], ["Vaticano II (1962-1965)", "renovación"]], "la fe se precisa"], video: "primeros" },
    { tras: "<h3>Cómo se organiza</h3>", html: `<h3>Las vocaciones en la Iglesia</h3><p>En la Iglesia hay distintas formas de vivir la fe, llamadas <mark>vocaciones</mark> (de «vocación», llamada). La inmensa mayoría de los católicos son <b>laicos</b>: personas que viven su fe en la familia, el trabajo, los estudios y la sociedad. Su misión es transformar el mundo desde dentro con los valores del Evangelio, y muchos colaboran como catequistas, voluntarios de Cáritas, miembros de movimientos o asociaciones.</p><p>Los <b>ministros ordenados</b> (diáconos, presbíteros y obispos) han recibido el sacramento del Orden para servir a la comunidad: predicar, celebrar los sacramentos y guiarla. La <mark>vida consagrada</mark> la forman religiosos y religiosas (monjes, monjas, frailes, hermanas) que se comprometen con votos de pobreza, castidad y obediencia; algunos viven en clausura dedicados a la oración, como las carmelitas, y otros se dedican a la educación, la sanidad o los más pobres, como los salesianos o las Misioneras de la Caridad. Todas las vocaciones tienen la misma dignidad y la misma meta: amar a Dios y a los demás.</p>`, svg: ["Vocaciones", [["Laicos", "fe en la vida diaria"], ["Ministros ordenados", "diáconos, curas, obispos"], ["Vida consagrada", "votos religiosos"]], "misma dignidad"] },
    { tras: "<h3>El año litúrgico</h3>", html: `<h3>La Semana Santa</h3><p>El centro del año litúrgico es la <mark>Semana Santa</mark>, en la que los cristianos recuerdan y celebran la pasión, muerte y resurrección de Jesús. Empieza el <b>Domingo de Ramos</b>, que conmemora la entrada de Jesús en Jerusalén aclamado con ramos. El <b>Jueves Santo</b> se recuerda la Última Cena, en la que Jesús instituyó la Eucaristía y lavó los pies a sus discípulos. El <b>Viernes Santo</b> se medita su muerte en la cruz; es día de ayuno y no se celebra misa.</p><p>La noche del sábado se celebra la <mark>Vigilia Pascual</mark>, la celebración más importante de todo el año: comienza a oscuras, se enciende el cirio pascual, símbolo de Cristo resucitado, y se proclama con alegría la resurrección. El <b>Domingo de Resurrección</b> abre el tiempo de Pascua, que dura cincuenta días hasta Pentecostés. En España, la Semana Santa se vive también en la calle con procesiones, pasos e imágenes de gran valor artístico, como las de Sevilla, Valladolid o Zamora, y forma parte del patrimonio cultural.</p>`, svg: ["Semana Santa", [["Domingo de Ramos", "entrada en Jerusalén"], ["Jueves y Viernes", "Última Cena y cruz"], ["Vigilia Pascual", "resurrección"]], "el centro del año"] },
    { tras: "<h3>Signos de cada sacramento</h3>", html: `<h3>Sacramentos de curación: Penitencia y Unción</h3><p>La <mark>Penitencia</mark>, también llamada Reconciliación o confesión, es el sacramento en el que Dios perdona los pecados cometidos después del Bautismo. Tiene cinco pasos: el <b>examen de conciencia</b> (revisar lo que se ha hecho mal), el <b>arrepentimiento</b> sincero, el <b>propósito</b> de cambiar, la <b>confesión</b> de los pecados al sacerdote y la <b>satisfacción</b> o penitencia, un gesto para reparar el daño. El sacerdote pronuncia la absolución y está obligado a guardar un secreto absoluto, el <b>sigilo sacramental</b>.</p><p>La <mark>Unción de los enfermos</mark> se ofrece a las personas con una enfermedad grave, a los ancianos debilitados o a quien va a someterse a una operación seria. El sacerdote unge con óleo la frente y las manos del enfermo y reza por él, para darle fuerza, paz y confianza, y, si conviene, la salud. Antiguamente se llamaba «extremaunción» y se reservaba a los moribundos; hoy se insiste en que es un sacramento de consuelo y esperanza que se puede recibir varias veces.</p>`, svg: ["Penitencia: cinco pasos", [["Examen y dolor", "reconocer el mal"], ["Propósito y confesión", "decirlo y querer cambiar"], ["Satisfacción", "reparar el daño"]], "sacramento del perdón"], video: "sacramentos" },
    { html: `<h3>La Iglesia hoy en el mundo</h3><p>Hoy la Iglesia católica tiene unos <b>1.400 millones</b> de fieles, repartidos por todos los continentes; el número crece sobre todo en África y Asia, mientras que en Europa ha disminuido la práctica religiosa. El papa, como obispo de Roma, es el signo de unidad de esta comunidad mundial, y la Santa Sede mantiene relaciones diplomáticas con la mayoría de los países.</p><p>Además de celebrar la fe, la Iglesia desarrolla una gran labor <mark>social</mark>: es una de las mayores redes de escuelas, hospitales, residencias y centros de acogida del mundo. En España, <b>Cáritas</b> atiende cada año a cientos de miles de personas en situación de pobreza, y <b>Manos Unidas</b> financia proyectos de desarrollo en países pobres. La Iglesia también ha tenido que afrontar errores graves de algunos de sus miembros, como los abusos a menores, y ha pedido perdón y adoptado medidas para proteger a las víctimas. Los cristianos creen que la Iglesia es santa por Cristo, pero formada por personas que necesitan convertirse continuamente.</p>`, svg: ["La Iglesia hoy", [["1.400 millones", "fieles en el mundo"], ["Cáritas", "ayuda a los pobres"], ["Manos Unidas", "desarrollo"]], "fe y servicio"] },
  ],
  ejemplos: [
    ["Ordena estos tiempos litúrgicos empezando por el principio del año: Pascua, Adviento, Cuaresma, Navidad.", ["El año litúrgico empieza con el Adviento, cuatro semanas antes de Navidad.", "Sigue la Navidad.", "Tras un tiempo ordinario llega la Cuaresma, cuarenta días de preparación.", "Termina con la Pascua, que culmina en Pentecostés."], "Adviento, Navidad, Cuaresma y Pascua."],
    ["Identifica la materia, la forma y el ministro de la Eucaristía.", ["La materia es lo que se ve: el pan de trigo y el vino de uva.", "La forma son las palabras de la consagración: «Esto es mi Cuerpo… esta es mi Sangre».", "El ministro es el sacerdote (presbítero u obispo)."], "Materia: pan y vino. Forma: palabras de la consagración. Ministro: el sacerdote."],
    ["¿A qué vocación pertenece cada persona: una catequista madre de familia, un párroco, una monja carmelita?", ["La catequista vive su fe en la familia y la sociedad: es laica.", "El párroco ha recibido el sacramento del Orden: ministro ordenado.", "La carmelita ha hecho votos religiosos: vida consagrada."], "Laica, ministro ordenado y vida consagrada."],
  ],
  errores: ["Pensar que la Unción de los enfermos es solo para los moribundos."],
  niveles: "bbbbbmmbbm",
  ejercicios: [
    ["b", "¿Qué afirmó el concilio de Nicea (325)?", "Que Jesús es verdadero Dios, de la misma naturaleza que el Padre, frente a Arrio."],
    ["b", "Cita tres Padres de la Iglesia.", "San Agustín, san Jerónimo y san Atanasio (también san Ignacio de Antioquía, san Basilio, san Juan Crisóstomo…)."],
    ["b", "¿Qué tres grandes vocaciones hay en la Iglesia?", "Laicos, ministros ordenados y vida consagrada."],
    ["b", "¿Qué se recuerda el Jueves Santo?", "La Última Cena, en la que Jesús instituyó la Eucaristía y lavó los pies a los discípulos."],
    ["b", "¿Cuál es la celebración más importante del año?", "La Vigilia Pascual, la noche del Sábado Santo."],
    ["b", "Cita los cinco pasos de la Penitencia.", "Examen de conciencia, arrepentimiento, propósito, confesión y satisfacción."],
    ["b", "¿Qué es Cáritas?", "La organización de la Iglesia católica que ayuda a las personas en situación de pobreza."],
    ["m", "¿Qué cambios introdujo el Concilio Vaticano II?", "Renovó la liturgia, permitió la misa en las lenguas de cada pueblo e impulsó el diálogo con el mundo moderno y otras religiones."],
    ["m", "¿Qué son los votos de la vida consagrada?", "Compromisos de pobreza, castidad y obediencia que hacen religiosos y religiosas."],
    ["m", "Explica el simbolismo del cirio pascual.", "Representa a Cristo resucitado, luz que vence a la oscuridad de la muerte; se enciende al comienzo de la Vigilia Pascual."],
    ["m", "¿Qué es el sigilo sacramental?", "La obligación absoluta del sacerdote de no revelar nunca lo que ha oído en confesión."],
    ["m", "¿Por qué hoy no se llama extremaunción a la Unción de los enfermos?", "Porque no se reserva a los moribundos: es un sacramento de fuerza y esperanza para los enfermos graves y los ancianos, que se puede recibir varias veces."],
    ["m", "Relaciona cada sacramento con un momento de la vida humana.", "Bautismo-nacer, Confirmación-madurar, Eucaristía-alimentarse, Penitencia-reconciliarse, Unción-enfermar, Matrimonio-formar familia, Orden-servir."],
    ["m", "¿Qué es un carisma según san Pablo?", "Un don que cada miembro de la Iglesia recibe para el bien de la comunidad, como los miembros de un cuerpo."],
    ["a", "Compara la primera comunidad de Jerusalén con una parroquia actual.", "Respuesta abierta. Ambas se reúnen para escuchar, orar y celebrar la Eucaristía; la primera compartía todos los bienes, y hoy se comparte a través de colectas y Cáritas."],
    ["a", "¿Por qué crees que el Vaticano II permitió celebrar la misa en las lenguas de cada pueblo?", "Para que los fieles entendieran y participaran activamente en la celebración en lugar de asistir a un rito en latín que la mayoría no comprendía."],
    ["a", "Explica la diferencia entre la Semana Santa como celebración religiosa y como fenómeno cultural.", "Religiosamente es la celebración del misterio central de la fe; culturalmente incluye procesiones, arte, música y tradiciones que valoran también personas no creyentes."],
    ["a", "¿Cómo afronta la Iglesia los errores de sus miembros?", "Reconociéndolos, pidiendo perdón, protegiendo a las víctimas y adoptando medidas; se considera santa por Cristo pero formada por personas que necesitan convertirse."],
    ["a", "Investiga una organización social de la Iglesia de tu localidad y explica qué hace.", "Respuesta abierta: nombre, a quién ayuda, cómo se financia y cómo se puede colaborar."],
    ["a", "Argumenta por qué los sacramentos no son magia.", "Porque no funcionan automáticamente: requieren fe y libertad en quien los recibe, y su eficacia viene de Cristo, no de las palabras como fórmula."],
    ["a", "Diseña un calendario del año litúrgico con sus tiempos, colores y fiestas principales.", "Respuesta abierta: Adviento (morado), Navidad (blanco), Tiempo Ordinario (verde), Cuaresma (morado), Pascua (blanco), Pentecostés (rojo)."],
    ["a", "¿Qué aporta la Iglesia a la sociedad según el tema? Valóralo de forma crítica.", "Respuesta abierta: labor educativa, sanitaria y social, patrimonio y sentido; también reconocer sus errores y los retos actuales."],
  ],
  cuartas: ["Ciudad antigua", "En el año 1000", "El cardenal", "Doce", "El Orden", "ayuno", "el Adviento", "negro", "monje", "el diácono", "pequeña", "Matrimonio y Bautismo", "la sal"],
  quiz: [
    ["El concilio de Nicea se celebró en el año…", ["325", "1054", "1962", "33"], 0, "Afirmó la divinidad de Jesús."],
    ["Tradujo la Biblia al latín (la Vulgata)…", ["san Jerónimo", "san Agustín", "san Pedro", "Lutero"], 0, "Padre de la Iglesia."],
    ["El último concilio ecuménico es…", ["el Vaticano II", "Trento", "Nicea", "Vaticano I"], 0, "1962-1965."],
    ["La mayoría de los católicos son…", ["laicos", "sacerdotes", "monjas", "obispos"], 0, "Viven la fe en el mundo."],
    ["Los votos religiosos son pobreza, castidad y…", ["obediencia", "silencio", "riqueza", "ayuno"], 0, "Vida consagrada."],
    ["El Jueves Santo se recuerda…", ["la Última Cena", "la resurrección", "el nacimiento", "Pentecostés"], 0, "Institución de la Eucaristía."],
    ["La celebración más importante del año es…", ["la Vigilia Pascual", "la Nochebuena", "el Corpus", "Todos los Santos"], 0, "Se enciende el cirio pascual."],
    ["El secreto de la confesión se llama…", ["sigilo sacramental", "absolución", "penitencia", "carisma"], 0, "Absoluto."],
    ["La Unción de los enfermos se da con…", ["óleo", "agua", "pan", "ceniza"], 0, "En la frente y las manos."],
    ["Manos Unidas se dedica a…", ["proyectos de desarrollo en países pobres", "organizar procesiones", "elegir al papa", "traducir la Biblia"], 0, "ONG católica."],
  ],
  examen: [
    ["El Credo que se reza en misa procede de…", ["Nicea y Constantinopla", "Trento", "el Vaticano II", "Asís"], 0, "Siglo IV."],
    ["La Penitencia empieza con…", ["el examen de conciencia", "la comunión", "la homilía", "la unción"], 0, "Revisar lo hecho."],
    ["El tiempo de Pascua dura…", ["cincuenta días", "cuarenta días", "una semana", "un año"], 0, "Hasta Pentecostés."],
    ["Un don para el bien de la comunidad es un…", ["carisma", "sacramento", "concilio", "voto"], 0, "Según san Pablo."],
    ["La Iglesia católica tiene unos…", ["1.400 millones de fieles", "10 millones", "100.000", "7.000 millones"], 0, "En todos los continentes."],
  ],
  tarjetas: [["Concilio de Nicea", "Año 325: Jesús es verdadero Dios."], ["Vocaciones", "Laicos, ministros ordenados y vida consagrada."], ["Vigilia Pascual", "Celebración principal del año, con el cirio pascual."], ["Penitencia", "Examen, dolor, propósito, confesión y satisfacción."]],
  glosario: [["Iglesia", "Comunidad de los seguidores de Jesús."], ["Pentecostés", "Venida del Espíritu Santo; nacimiento de la Iglesia."], ["Mártir", "Testigo que da la vida por su fe."], ["Padres de la Iglesia", "Pensadores y pastores de los primeros siglos."], ["Concilio", "Reunión de los obispos para decidir sobre la fe."], ["Laico", "Cristiano que vive su fe en el mundo."], ["Vida consagrada", "Religiosos con votos de pobreza, castidad y obediencia."], ["Año litúrgico", "Calendario de las celebraciones cristianas."], ["Vigilia Pascual", "Celebración de la resurrección la noche del Sábado Santo."], ["Sacramento", "Signo visible de la gracia de Dios."], ["Materia", "Elemento visible de un sacramento."], ["Forma", "Palabras que acompañan al signo."], ["Sigilo sacramental", "Secreto absoluto de la confesión."], ["Cáritas", "Organización de ayuda social de la Iglesia."]],
  situacion: { titulo: "Guía de mi parroquia", reto: "Elaborar una guía para presentar a un compañero recién llegado cómo es y qué hace una comunidad cristiana del barrio.", pasos: ["Visitar o investigar una parroquia o comunidad cercana.", "Entrevistar a un sacerdote, catequista o voluntario.", "Identificar los espacios del templo (altar, pila bautismal, confesionario, sagrario).", "Recoger qué sacramentos se celebran y qué actividades sociales realiza.", "Diseñar una guía ilustrada de dos páginas."], producto: "Guía ilustrada de una comunidad cristiana del entorno.", evaluacion: ["La información sobre espacios y sacramentos es correcta.", "Se recoge la labor social de la comunidad.", "La entrevista está bien preparada y transcrita.", "La guía es clara, atractiva y respetuosa."] },
  familias: ["Si en la familia hay recuerdos de bautizos, comuniones o bodas, revisad juntos las fotos y comentad qué significaron."],
  saberes: "la Iglesia: origen, historia, organización y vocaciones; año litúrgico y Semana Santa; los siete sacramentos.",
  minutos: 100,
});
