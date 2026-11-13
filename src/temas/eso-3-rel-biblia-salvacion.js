// Religión 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, linea, rueda, figLinea, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Religión",
  curso: "3-eso",
  titulo: "La Biblia: historia de salvación",
  minutos: 35,
  objetivos: ["Explicar qué significa «historia de salvación»", "Recorrer las grandes etapas de la historia de Israel en la Biblia", "Reconocer en Jesucristo el centro de esa historia"],
  claves: ["historia de salvación", "alianza", "patriarcas", "Éxodo", "profetas", "Mesías", "Antiguo y Nuevo Testamento"],
  pregunta: {
    texto: "La Biblia no empieza con normas ni con definiciones, sino con historias: una creación, una familia, un viaje, una liberación. ¿Por qué cuenta tantas historias?",
    respuesta: "Porque para judíos y cristianos Dios se ha dado a conocer <mark>actuando en la historia</mark> de un pueblo: llamando a Abraham, liberando a Israel de Egipto, hablando por los profetas y, finalmente, enviando a Jesús. A ese camino de Dios con la humanidad para salvarla se le llama <b>historia de salvación</b>.",
  },
  bloques: [
    {
      html: `<h3>Qué es la historia de salvación</h3><p>La Biblia cuenta una historia muy larga, de casi dos mil años, con un hilo conductor: Dios busca al ser humano, hace con él una <mark>alianza</mark> (un pacto de amor y fidelidad) y lo salva de todo lo que lo destruye: la esclavitud, el pecado, la muerte. El ser humano a veces responde con fidelidad y a veces se aleja, pero Dios siempre vuelve a ofrecer su amor. Para los cristianos, esta historia llega a su plenitud en <b>Jesucristo</b>. Por eso la Biblia se divide en <b>Antiguo Testamento</b> (la preparación) y <b>Nuevo Testamento</b> (el cumplimiento).</p>`,
      svg: dos("Antiguo y Nuevo Testamento", ["Antiguo T.", ["46 libros", "creación, Israel", "alianza con Moisés", "promesa"], "var(--pen)"], ["Nuevo T.", ["27 libros", "Jesús, la Iglesia", "nueva alianza", "cumplimiento"], "var(--bac)"]),
    },
    {
      html: `<h3>Los orígenes y los patriarcas</h3><p>El libro del <b>Génesis</b> empieza con relatos sobre los orígenes: Dios crea el mundo por amor y al ser humano a su <b>imagen</b>; el pecado rompe la armonía (Adán y Eva, Caín y Abel, el diluvio). No son crónicas científicas, sino relatos que enseñan verdades de fe. Después, hacia el 1800 a. C., Dios llama a <mark>Abraham</mark>: «Sal de tu tierra… Haré de ti un gran pueblo». Abraham confía y se pone en camino: es el <b>padre de la fe</b>. Le siguen su hijo <b>Isaac</b> y su nieto <b>Jacob</b>, llamado también Israel, cuyos doce hijos dan nombre a las doce tribus. Son los <b>patriarcas</b>.</p>`,
      svg: filas("Los patriarcas de Israel", [["Abraham", "padre de la fe", "var(--sun)"], ["Isaac", "hijo de la promesa", "var(--leaf)"], ["Jacob", "Israel, doce hijos", "var(--pen)"], ["José", "vendido, salva a Egipto", "var(--red)"]]),
    },
    {
      html: `<h3>El Éxodo y la Alianza</h3><p>Los descendientes de Jacob acabaron como <b>esclavos en Egipto</b>. Dios escuchó su clamor y eligió a <mark>Moisés</mark> para liberarlos. Tras las plagas, los israelitas salieron de Egipto y cruzaron el mar: es el <b>Éxodo</b> (hacia el siglo XIII a. C.), la gran experiencia de liberación que los judíos recuerdan cada año en la <b>Pascua</b>. En el monte <b>Sinaí</b>, Dios hizo una alianza con su pueblo y le dio los <b>Diez Mandamientos</b>: «Yo seré vuestro Dios y vosotros seréis mi pueblo». Durante cuarenta años caminaron por el desierto hasta la tierra prometida.</p>`,
      svg: linea("Del Egipto esclavo a la tierra prometida", [["Egipto", "esclavitud"], ["Mar", "liberación|(Pascua)"], ["Sinaí", "Alianza y|mandamientos"], ["Canaán", "tierra|prometida"]], "var(--bac)"),
    },
    {
      html: `<h3>Reyes y profetas</h3><p>Ya en Canaán, Israel se organizó primero con <b>jueces</b> y después como reino. Sus grandes reyes fueron <b>Saúl</b>, <mark>David</mark>, que conquistó Jerusalén y compuso salmos, y <b>Salomón</b>, que construyó el Templo. Después, el reino se dividió y muchos reyes fueron infieles a la Alianza. Entonces Dios envió a los <mark>profetas</mark>, como <b>Isaías</b>, <b>Jeremías</b> o <b>Ezequiel</b>: hombres que hablaban en nombre de Dios, denunciaban las injusticias y la idolatría, y anunciaban esperanza. En el 587 a. C., los babilonios destruyeron Jerusalén y llevaron al pueblo al <b>exilio</b>.</p>`,
      svg: filas("Reyes y profetas de Israel", [["David", "rey, Jerusalén", "var(--sun)"], ["Salomón", "construye el Templo", "var(--pen)"], ["Profetas", "hablan por Dios", "var(--red)"], ["Exilio", "Babilonia, 587 a. C.", "var(--muted)"]]),
    },
    {
      html: `<h3>La espera del Mesías y Jesús</h3><p>Durante el exilio y después, los profetas mantuvieron viva una gran esperanza: Dios enviaría un <mark>Mesías</mark> («ungido»; en griego, <i>Cristo</i>), un descendiente de David que traería la paz y la justicia definitivas. Isaías anunció: «La virgen está encinta y dará a luz un hijo, y le pondrá por nombre Emmanuel», que significa «Dios con nosotros». Los cristianos reconocen en <b>Jesús de Nazaret</b> a ese Mesías esperado: en Él Dios hace una <b>nueva y definitiva alianza</b>, sellada con su muerte y resurrección, abierta ya a todos los pueblos.</p>`,
      svg: dos("Promesa y cumplimiento", ["Promesa", ["Mesías, hijo", "de David", "Emmanuel", "nueva alianza"], "var(--pen)"], ["Jesús", ["nace en Belén", "de la casa de David", "Dios con nosotros", "Última Cena"], "var(--bac)"]),
    },
  ],
  figura: {
    titulo: "Las grandes etapas de la historia de salvación",
    svg: figLinea("Línea del tiempo de la historia de salvación desde Abraham hasta Jesús", [[50, "≈1800 a. C.", "Abraham", 1], [140, "≈1250 a. C.", "Moisés y el Éxodo", 0], [240, "≈1000 a. C.", "rey David", 1], [330, "s. VIII a. C.", "profeta Isaías", 0], [420, "587 a. C.", "exilio en Babilonia", 1], [510, "538 a. C.", "regreso", 0], [630, "≈30 d. C.", "muerte y resurrección", 1]]),
  },
  video: { id: "WZZZIOyKVS0", titulo: "Historia de la Salvación", canal: "Rocío Salinas", vistas: 193961, megusta: 0, busqueda: "historia de la salvación biblia" },
  quiz: [
    { q: "¿Qué es una alianza en la Biblia?", o: ["Un pacto de amor y fidelidad entre Dios y su pueblo", "Un anillo", "Una guerra"], a: 0, e: "Con Abraham, con Moisés y, en Jesús, la nueva alianza." },
    { q: "¿A quién se llama «padre de la fe»?", o: ["Moisés", "Abraham", "David"], a: 1, e: "Confió en Dios y se puso en camino." },
    { q: "¿Dónde recibió Moisés los Diez Mandamientos?", o: ["En el Sinaí", "En Jerusalén", "En Babilonia"], a: 0, e: "Durante el Éxodo." },
    { q: "¿Qué significa «Mesías»?", o: ["Ungido", "Profeta", "Rey de Egipto"], a: 0, e: "En griego, Cristo." },
    { q: "¿Quién construyó el Templo de Jerusalén?", o: ["David", "Salomón", "Isaías"], a: 1, e: "Hijo de David." },
  ],
  examen: [
    { q: "«Emmanuel» significa…", o: ["Dios con nosotros", "Dios salva", "rey de paz"], a: 0, e: "Profecía de Isaías." },
    { q: "Los profetas eran…", o: ["personas que hablaban en nombre de Dios", "reyes", "sacerdotes del Templo"], a: 0, e: "Denunciaban y daban esperanza." },
    { q: "¿Qué fiesta judía recuerda el Éxodo?", o: ["La Pascua", "Pentecostés", "Navidad"], a: 0, e: "La liberación de Egipto." },
  ],
  feynman: ["Qué significa historia de salvación", "Quiénes fueron los patriarcas", "Qué fue el Éxodo y qué alianza hizo Dios en el Sinaí", "Qué papel tuvieron los profetas y qué esperaban"],
  mapa: mapa("HISTORIA DE SALVACIÓN", "var(--bac)", [
    ["Patriarcas", "Abraham · Isaac · Jacob", "var(--sun)"],
    ["Éxodo", "Moisés · Sinaí", "var(--pen)"],
    ["Reyes y profetas", "David · Isaías", "var(--red)"],
    ["Cumplimiento", "Jesús, el Mesías", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Historia de salvación", "Camino de Dios con la humanidad para salvarla, que culmina en Jesús."],
    ["Alianza", "Pacto de amor y fidelidad entre Dios y su pueblo."],
    ["Éxodo", "Salida de los israelitas de Egipto guiados por Moisés."],
    ["Profeta", "Persona que habla en nombre de Dios."],
    ["Mesías", "«Ungido»: el salvador esperado; en griego, Cristo."],
  ],
  familias: ["Leed juntos en una Biblia la llamada de Abraham (Gn 12,1-4) y comentad qué significa confiar.", "Buscad en el calendario cuándo cae este año la Pascua judía y la cristiana.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La historia de salvación en la Biblia: patriarcas, Éxodo y Alianza, reyes y profetas, esperanza mesiánica y cumplimiento en Jesucristo (RD 217/2022; enseñanzas de Religión católica de la ESO).",
    ideas: ["Línea del tiempo bíblica en el aula con personajes dibujados por el alumnado.", "Representar en grupos la vocación de un profeta.", "Comparar la Pascua judía y la cristiana."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "La Santa Sede: la Biblia (texto)", url: "https://www.vatican.va/archive/ESL0506/_INDEX.HTM" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Localizar citas bíblicas", "Relacionar los grandes personajes del Antiguo Testamento con su mensaje"],
  bloques: [
    { tras: "Qué es la historia de salvación", html: `<h3>Cómo se busca una cita bíblica</h3><p>Para encontrar un texto en la Biblia se usan las <mark>citas</mark>: abreviatura del libro, número de capítulo, coma y número de versículo. Por ejemplo, <b>Gn 12,1-4</b> es el libro del Génesis, capítulo 12, versículos del 1 al 4. Un punto y coma separa capítulos distintos: <b>Ex 3,1-15; 20,1-17</b>. Las abreviaturas más usadas son <i>Gn</i> (Génesis), <i>Ex</i> (Éxodo), <i>Sal</i> (Salmos), <i>Is</i> (Isaías), <i>Mt</i>, <i>Mc</i>, <i>Lc</i>, <i>Jn</i> (los cuatro Evangelios) y <i>Hch</i> (Hechos de los Apóstoles). Los capítulos y versículos no estaban en los textos originales: se añadieron en la Edad Media para facilitar la búsqueda.</p>` },
    { tras: "El Éxodo y la Alianza", html: `<h3>Moisés y la zarza ardiente</h3><p>El libro del Éxodo (Ex 3) cuenta cómo Moisés, pastoreando en el desierto, vio una <mark>zarza que ardía sin consumirse</mark>. Al acercarse, Dios le habló: «He visto la opresión de mi pueblo en Egipto, he oído sus quejas… Voy a bajar a librarlo». Moisés preguntó su nombre, y Dios respondió: <b>«Yo soy el que soy»</b>, de donde viene el nombre <b>Yahvé</b>. Este relato muestra rasgos clave del Dios bíblico: es un Dios <b>cercano</b>, que ve el sufrimiento y actúa; <b>misterioso</b>, que no se deja encerrar en un nombre; y <b>liberador</b>, que se pone del lado de los oprimidos. Moisés, que se sentía incapaz, aceptó la misión.</p>`, video: { id: "NxoZlIX2hxs", titulo: "Resumen del Nuevo Testamento: un panorama completo animado", canal: "Proyecto Biblia", vistas: 952899, megusta: 0 } },
    { tras: "Reyes y profetas", html: `<h3>Personajes y mensajes del Antiguo Testamento</h3>${tabla(["Personaje", "Cita", "Mensaje"], [["Abraham", "Gn 12", "confiar en Dios y ponerse en camino"], ["José", "Gn 37–50", "el perdón: perdona a los hermanos que lo vendieron"], ["Moisés", "Ex 3; 20", "Dios libera y hace alianza"], ["Rut", "libro de Rut", "fidelidad; una extranjera entra en la historia de Israel"], ["David", "1 Sam 17", "Dios elige al pequeño: David vence a Goliat"], ["Isaías", "Is 7; 9; 11", "esperanza en el Mesías, príncipe de la paz"], ["Jonás", "libro de Jonás", "Dios ama y perdona también a otros pueblos"]])}` },
    { tras: "La espera del Mesías y Jesús", html: `<h3>Jesús lee la historia de salvación</h3><p>Los Evangelios muestran que Jesús entendía su misión a la luz del Antiguo Testamento. En la sinagoga de Nazaret leyó un texto de Isaías: «El Espíritu del Señor está sobre mí… me ha enviado a anunciar la buena noticia a los pobres, la libertad a los cautivos, la vista a los ciegos», y añadió: <mark>«Hoy se ha cumplido esta Escritura»</mark> (Lc 4,16-21). Tras la resurrección, explicó a los discípulos de Emaús, «comenzando por Moisés y los profetas», lo que se refería a Él (Lc 24,27). En la Última Cena habló de la <b>nueva alianza</b> en su sangre. Por eso los cristianos leen el Antiguo Testamento como el camino que prepara a Cristo, y el Nuevo como su cumplimiento.</p>` },
  ],
  ejemplos: [
    { enunciado: "Interpreta la cita «Lc 4,16-21».", pasos: ["Lc es la abreviatura del Evangelio según san Lucas.", "4 es el capítulo.", "16-21 son los versículos, del 16 al 21."], resultado: "Evangelio de Lucas, capítulo 4, versículos 16 a 21: Jesús en la sinagoga de Nazaret." },
    { enunciado: "Ordena: exilio en Babilonia, llamada de Abraham, rey David, Éxodo.", pasos: ["Abraham, hacia 1800 a. C.", "Éxodo, hacia 1250 a. C.", "David, hacia 1000 a. C.", "Exilio, 587 a. C."], resultado: "Abraham → Éxodo → David → exilio." },
    { enunciado: "¿Por qué el Éxodo es tan importante para judíos y cristianos?", pasos: ["Para Israel es la experiencia fundadora: Dios lo libera y hace alianza con él.", "Lo recuerda cada año en la Pascua.", "Jesús muere y resucita en la Pascua: los cristianos ven en ello el paso definitivo de la muerte a la vida."], resultado: "Es la gran liberación de Dios; Jesús le da un sentido nuevo y definitivo en su Pascua." },
  ],
  errores: [
    "Leer los relatos del Génesis como si fueran un libro de ciencia.",
    "Pensar que la Biblia es un solo libro escrito de una vez: es una biblioteca escrita durante siglos.",
    "Confundir Antiguo Testamento (antes de Jesús) con Nuevo Testamento (Jesús y la Iglesia).",
    "Creer que los profetas eran adivinos del futuro: sobre todo hablaban a su presente en nombre de Dios.",
    "Escribir las citas con el capítulo y el versículo al revés.",
  ],
  ejercicios: [
    { q: "Define historia de salvación.", sol: "El camino de Dios con la humanidad para salvarla, narrado en la Biblia, que culmina en Jesucristo." },
    { q: "¿Qué es una alianza? Cita dos alianzas del Antiguo Testamento.", sol: "Un pacto de amor y fidelidad. Con Abraham y con Moisés en el Sinaí." },
    { q: "¿Quiénes son los patriarcas?", sol: "Abraham, Isaac y Jacob (Israel), antepasados del pueblo de Israel." },
    { q: "Resume el Éxodo en tres frases.", sol: "Los israelitas eran esclavos en Egipto. Dios eligió a Moisés para liberarlos y cruzaron el mar. En el Sinaí hizo alianza con ellos y les dio los mandamientos." },
    { q: "¿Qué nombre reveló Dios a Moisés y qué significa?", sol: "Yahvé: «Yo soy el que soy»." },
    { q: "Nombra tres reyes de Israel y un dato de cada uno.", sol: "Saúl, el primero; David, conquistó Jerusalén y compuso salmos; Salomón, construyó el Templo." },
    { q: "¿Qué hacían los profetas?", sol: "Hablaban en nombre de Dios, denunciaban injusticias e idolatría y anunciaban esperanza." },
    { q: "Busca y explica la cita Gn 12,1-4.", sol: "Génesis, capítulo 12, versículos 1 a 4: Dios llama a Abraham para que salga de su tierra y le promete un gran pueblo." },
    { q: "¿Qué esperaba Israel del Mesías?", sol: "Un descendiente de David que trajera la paz, la justicia y la salvación definitivas." },
    { q: "¿Por qué los cristianos dicen que Jesús es el centro de la historia de salvación?", sol: "Porque en Él se cumplen las promesas y Dios hace la nueva y definitiva alianza para todos los pueblos." },
  ],
  quiz: [
    { q: "«Yo soy el que soy» se lo dijo Dios a…", o: ["Moisés", "Abraham", "David"], a: 0, e: "En la zarza ardiente." },
    { q: "José perdonó a…", o: ["sus hermanos", "al faraón", "a Goliat"], a: 0, e: "Que lo habían vendido." },
    { q: "Jonás enseña que Dios…", o: ["ama también a otros pueblos", "solo ama a Israel", "castiga siempre"], a: 0, e: "Perdona a Nínive." },
    { q: "«Ex» es la abreviatura de…", o: ["Éxodo", "Ezequiel", "Esdras"], a: 0, e: "Segundo libro de la Biblia." },
    { q: "Jesús dijo «Hoy se ha cumplido esta Escritura» en…", o: ["la sinagoga de Nazaret", "el Templo", "el Sinaí"], a: 0, e: "Lc 4,21." },
  ],
  tarjetas: [
    ["Cita bíblica", "Libro, capítulo, coma y versículos: Gn 12,1-4."],
    ["Yahvé", "Nombre de Dios revelado a Moisés: «Yo soy el que soy»."],
    ["Exilio", "Deportación de Israel a Babilonia en el 587 a. C."],
  ],
});

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["El libro más leído", `<p>En casi cualquier lengua del mundo hay una traducción de la Biblia: completa en más de 700 idiomas y en parte en más de 3.000. Es el libro más impreso y traducido de la historia. Sus frases aparecen en canciones, películas y discursos, y muchas expresiones que usamos sin pensar vienen de ella: decimos que alguien «se lava las manos», que es «más viejo que Matusalén», que algo es «una torre de Babel» o que una persona es «un buen samaritano».</p><p>Pero la Biblia no es un solo libro, sino una <b>biblioteca</b> escrita durante más de mil años por muchos autores, en tres idiomas y con géneros muy distintos: relatos, leyes, poemas, refranes, profecías, cartas. Para judíos y cristianos, lo que une todas esas páginas es una misma historia: la de un Dios que sale al encuentro del ser humano, hace alianza con un pueblo y nunca abandona su promesa de salvación, aunque ese pueblo le falle una y otra vez. En este tema conocerás cómo está organizada la Biblia, cómo se formó, cómo se buscan sus citas y cuáles son las grandes etapas de esa historia, desde Abraham hasta Jesús.</p>`],
  mas: [
    ["<h3>El Éxodo y la Alianza</h3>", `<p>La salida de Egipto se convirtió en el acontecimiento central de la identidad de Israel. Cada año, en la <b>Pascua</b> judía, las familias recuerdan esa liberación con una cena en la que se come pan sin levadura y hierbas amargas, y los niños preguntan: «¿Por qué esta noche es distinta de las demás?». Para los cristianos, Jesús celebró su última cena en el contexto de esta fiesta.</p>`],
    ["<h3>Reyes y profetas</h3>", `<p>Los profetas no eran adivinos del futuro, sino personas que interpretaban el presente a la luz de Dios. Denunciaban la injusticia con los pobres, las viudas y los extranjeros, criticaban a los reyes cuando abusaban de su poder y anunciaban que Dios cumpliría su promesa. <b>Isaías</b>, <b>Jeremías</b>, <b>Ezequiel</b> y <b>Amós</b> son algunos de los más conocidos.</p>`],
    ["<h3>La espera del Mesías y Jesús</h3>", `<p>Esa esperanza adoptó formas distintas: unos esperaban un rey guerrero como David que expulsara a los invasores; otros, un sacerdote que purificara el Templo; otros, un profeta. Los cristianos creen que Jesús cumplió la promesa de una forma inesperada: no como un rey poderoso, sino como un servidor que da su vida por los demás.</p>`],
    ["<h3>Cómo se busca una cita bíblica</h3>", `<p>Si la cita abarca varios capítulos se usa un guion: Mt 5-7 son los capítulos 5 a 7 de Mateo (el Sermón de la Montaña). Al principio de la mayoría de las Biblias hay una lista de abreviaturas.</p>`],
  ],
  svgs: [
    ["<h3>Cómo se busca una cita bíblica</h3>", "Cómo leer una cita bíblica", [["Libro", "abreviatura: Gn, Ex, Mt"], ["Capítulo", "número grande"], ["Versículos", "tras la coma: Gn 12,1-4"]], "buscar en la Biblia"],
    ["<h3>Moisés y la zarza ardiente</h3>", "Moisés y la zarza ardiente", [["Lugar", "monte Horeb"], ["Signo", "zarza que no se consume"], ["Nombre", "«Yo soy el que soy»"]], "Ex 3"],
    ["<h3>Personajes y mensajes del Antiguo Testamento</h3>", "Personajes del Antiguo Testamento", [["Abraham", "confiar en Dios"], ["Moisés", "liberación y Alianza"], ["David", "rey elegido y perdonado"]]],
    ["<h3>Jesús lee la historia de salvación</h3>", "Jesús y las Escrituras", [["Nazaret", "«Hoy se ha cumplido»"], ["Emaús", "explica las Escrituras"], ["Cumplimiento", "la promesa llega a plenitud"]], "Lc 4 y Lc 24"],
  ],
  bloques: [
    { tras: "<h3>Qué es la historia de salvación</h3>", html: `<h3>La Biblia, una biblioteca</h3><p>La palabra <b>Biblia</b> viene del griego <i>ta biblía</i>, «los libros». La Biblia católica tiene <mark>73 libros</mark>: <b>46</b> en el <b>Antiguo Testamento</b>, que narra la historia de Israel antes de Jesús, y <b>27</b> en el <b>Nuevo Testamento</b>, que trata de Jesús y de las primeras comunidades cristianas. La Biblia judía coincide en gran parte con el Antiguo Testamento, y las Biblias protestantes tienen algunos libros menos.</p><p>Los libros se agrupan por <b>géneros</b>. En el Antiguo Testamento hay libros <b>históricos</b> (Génesis, Éxodo, Reyes), <b>proféticos</b> (Isaías, Jeremías), <b>sapienciales</b>, con consejos para vivir (Proverbios, Eclesiastés), y <b>poéticos</b>, como los Salmos, 150 oraciones cantadas. En el Nuevo Testamento están los cuatro <b>Evangelios</b>, los <b>Hechos de los Apóstoles</b>, las <b>cartas</b> (sobre todo de san Pablo) y el <b>Apocalipsis</b>. Se escribió en tres idiomas: <mark>hebreo</mark> y algo de <b>arameo</b> el Antiguo Testamento, y <mark>griego</mark> el Nuevo.</p>`, svg: ["La Biblia católica", [["Antiguo Testamento", "46 libros"], ["Nuevo Testamento", "27 libros"], ["Idiomas", "hebreo, arameo y griego"]], "73 libros"] },
    { tras: "<h3>La Biblia, una biblioteca</h3>", html: `<h3>Cómo se formó la Biblia</h3><p>La Biblia no se escribió de una vez. Muchos relatos se transmitieron primero de forma <b>oral</b>, de padres a hijos, durante generaciones. Después se pusieron por escrito, se recopilaron y se fueron completando a lo largo de más de <b>mil años</b>, aproximadamente desde el siglo X a. C. hasta finales del siglo I d. C. La lista oficial de libros que se consideran inspirados se llama <mark>canon</mark>.</p><p>Para la fe cristiana, la Biblia es <mark>Palabra de Dios en palabras humanas</mark>: Dios inspiró a los autores, pero ellos escribieron con su lengua, su cultura, sus géneros literarios y su manera de ver el mundo. Por eso, para entenderla bien hay que tener en cuenta cuándo, cómo y para quién se escribió cada libro. Muy pronto se tradujo: la <b>Septuaginta</b> fue la traducción griega del Antiguo Testamento; la <b>Vulgata</b>, la traducción latina de san Jerónimo (siglo IV), usada en Occidente durante siglos; y la primera Biblia completa en castellano impresa fue la <b>Biblia del Oso</b> (1569), de Casiodoro de Reina.</p>`, svg: ["Formación de la Biblia", [["Tradición oral", "de generación en generación"], ["Escritura", "durante más de mil años"], ["Traducciones", "Septuaginta, Vulgata"]], "Palabra de Dios en palabras humanas"], video: "quienBiblia" },
    { tras: "<h3>Los orígenes y los patriarcas</h3>", html: `<h3>Cómo leer los relatos de los orígenes</h3><p>Los primeros capítulos del Génesis (la creación, Adán y Eva, Caín y Abel, el diluvio, la torre de Babel) no son una crónica científica ni un reportaje de cómo surgió el universo. Usan un <mark>lenguaje simbólico</mark>, con imágenes y relatos, para responder a preguntas más profundas: ¿por qué existe el mundo?, ¿qué es el ser humano?, ¿de dónde viene el mal? La Iglesia enseña que no hay contradicción entre estos relatos y la ciencia, porque responden a preguntas distintas: la ciencia explica <b>cómo</b> funciona el universo; la Biblia, <b>por qué</b> y <b>para qué</b> existe.</p><p>Su mensaje central es claro: el mundo es <b>bueno</b> y es obra de Dios, que lo crea por amor; el ser humano, hombre y mujer, está creado «a <b>imagen de Dios</b>», con una dignidad única, y recibe el encargo de cuidar la creación; y el mal no viene de Dios, sino del mal uso de la libertad humana, que rompe la relación con Dios, con los demás y con la naturaleza. A pesar de todo, Dios no abandona al ser humano.</p>`, svg: ["Mensaje de los relatos de los orígenes", [["Creación", "el mundo es bueno"], ["Ser humano", "imagen de Dios"], ["Mal", "mal uso de la libertad"]], "lenguaje simbólico"] },
    { tras: "<h3>Reyes y profetas</h3>", html: `<h3>El exilio y el regreso</h3><p>Tras la muerte de Salomón, el reino se dividió en dos: <b>Israel</b> al norte y <b>Judá</b> al sur. El reino del norte fue conquistado por los asirios en el 722 a. C. En el <b>587 a. C.</b>, el rey babilonio <b>Nabucodonosor</b> conquistó Jerusalén, destruyó el Templo y deportó a gran parte de la población a Babilonia. Fue el <mark>exilio</mark>, una de las experiencias más dolorosas de la historia de Israel. El salmo 137 lo recuerda: «Junto a los canales de Babilonia nos sentamos a llorar».</p><p>Lejos de su tierra y sin Templo, el pueblo se preguntó si Dios lo había abandonado. Los profetas le ayudaron a entender lo ocurrido y a mantener la <b>esperanza</b>, y en esos años se recopilaron y escribieron muchos textos bíblicos. En el 538 a. C., el rey persa <b>Ciro</b> permitió a los judíos regresar. Reconstruyeron Jerusalén y el Templo y renovaron la Alianza. El exilio enseñó que Dios no estaba atado a un lugar ni a un edificio, sino que acompañaba a su pueblo en cualquier situación.</p>`, svg: ["Del exilio al regreso", [["587 a. C.", "Nabucodonosor destruye el Templo"], ["Babilonia", "exilio y esperanza"], ["538 a. C.", "Ciro permite volver"]], "Dios acompaña siempre"] },
    { html: `<h3>La Biblia hoy</h3><p>La Biblia sigue muy presente en nuestra vida. En la <b>liturgia</b> cristiana se lee en todas las celebraciones: en la misa del domingo suele haber una lectura del Antiguo Testamento, un salmo, una lectura de las cartas y un fragmento del Evangelio. Muchos creyentes la leen a diario para rezar, solos o en grupo. Y su influencia cultural es enorme: ha inspirado a escritores como Cervantes, Dostoievski o Tolkien, a pintores como Miguel Ángel o Rembrandt y a músicos de todas las épocas.</p><p>También nuestra lengua está llena de expresiones bíblicas: «ser un Judas» (un traidor), «lavarse las manos» (como Pilato, desentenderse de algo), «el chivo expiatorio» (quien carga con las culpas de otros), «una torre de Babel» (un lugar donde nadie se entiende), «más viejo que Matusalén», «la oveja negra», «estar hecho un Adán», «poner la otra mejilla» o «ser un buen samaritano». Conocer la Biblia ayuda a entender buena parte del arte, la literatura y la cultura occidentales, seas o no creyente.</p>`, svg: ["Expresiones de origen bíblico", [["Ser un Judas", "un traidor"], ["Lavarse las manos", "desentenderse"], ["Torre de Babel", "nadie se entiende"]]] },
  ],
  videos: [["<h3>Los orígenes y los patriarcas</h3>", "abraham"]],
  ejemplos: [
    ["Busca e interpreta la cita Sal 23,1.", ["Sal es la abreviatura de Salmos.", "23 es el número del salmo (capítulo); 1, el versículo.", "Dice: «El Señor es mi pastor, nada me falta»."], "Un salmo de confianza: Dios cuida de cada persona como un pastor de sus ovejas."],
    ["¿Cuántos libros tiene el Antiguo Testamento si la Biblia católica tiene 73 y el Nuevo 27?", ["Restamos: 73 − 27.", "73 − 27 = 46."], "46 libros."],
    ["¿Por qué decimos que alguien «se lava las manos»?", ["Viene del juicio de Jesús (Mt 27,24).", "Pilato se lavó las manos ante el pueblo para declararse inocente de su muerte.", "Aunque tenía poder para impedirla, no lo hizo."], "Significa desentenderse de una responsabilidad."],
  ],
  errores: ["Leer los relatos de los orígenes como si fueran un libro de ciencia, en lugar de un lenguaje simbólico que responde al porqué y al para qué."],
  niveles: "bbbbmbbmmm",
  ejercicios: [
    ["b", "¿Cuántos libros tiene la Biblia católica y cómo se reparten?", "73: 46 en el Antiguo Testamento y 27 en el Nuevo Testamento."],
    ["b", "¿En qué idiomas se escribió la Biblia?", "En hebreo y algo de arameo (Antiguo Testamento) y en griego (Nuevo Testamento)."],
    ["b", "¿Qué es el canon bíblico?", "La lista oficial de libros que se consideran inspirados y forman la Biblia."],
    ["b", "¿Quién hizo la Vulgata?", "San Jerónimo, en el siglo IV: la traducción latina de la Biblia."],
    ["b", "¿Qué ocurrió en el 587 a. C.?", "Nabucodonosor conquistó Jerusalén, destruyó el Templo y deportó a gran parte del pueblo a Babilonia."],
    ["m", "Cita cuatro géneros literarios de la Biblia con un libro de cada uno.", "Histórico (Éxodo), profético (Isaías), sapiencial (Proverbios), poético (Salmos); también evangelio (Marcos) y carta (Romanos)."],
    ["m", "Explica qué significa que la Biblia es «Palabra de Dios en palabras humanas».", "Que, según la fe, Dios inspiró a los autores, pero ellos escribieron con su lengua, cultura y géneros; por eso hay que conocer el contexto para interpretarla."],
    ["m", "¿Por qué no hay contradicción entre el Génesis y la ciencia según la Iglesia?", "Porque responden a preguntas distintas: la ciencia explica cómo funciona el universo; el Génesis, con lenguaje simbólico, por qué y para qué existe."],
    ["m", "¿Qué tres mensajes principales transmiten los relatos de la creación?", "Que el mundo es bueno y obra de Dios, que el ser humano es imagen de Dios con una dignidad única y que el mal viene del mal uso de la libertad."],
    ["m", "¿Qué aprendió Israel durante el exilio?", "Que Dios no estaba atado a un lugar ni a un templo, sino que acompañaba a su pueblo en cualquier situación; además mantuvo la esperanza y recopiló muchos textos."],
    ["m", "Busca Ex 20,1-17 y explica de qué trata.", "Son los Diez Mandamientos, que Dios entrega a Moisés en el Sinaí como ley de la Alianza."],
    ["m", "Explica tres expresiones de origen bíblico.", "«Ser un Judas»: traidor, por quien entregó a Jesús. «Torre de Babel»: confusión, por el relato de las lenguas. «Chivo expiatorio»: quien carga con culpas ajenas, por un rito del Levítico."],
    ["m", "¿Qué fue la Biblia del Oso?", "La primera Biblia completa impresa en castellano (1569), traducida por Casiodoro de Reina; se llama así por la ilustración de un oso en la portada."],
    ["a", "Ordena cronológicamente: exilio, Abraham, David, Éxodo, regreso con Ciro, Jesús.", "Abraham, Éxodo, David, exilio (587 a. C.), regreso con Ciro (538 a. C.), Jesús."],
    ["a", "¿Por qué crees que la Biblia se considera una biblioteca y no un libro?", "Porque reúne 73 libros de distintos autores, épocas, idiomas y géneros escritos durante más de mil años, aunque unidos por la historia de la salvación."],
    ["a", "Lee Gn 1,26-28 y explica qué dice sobre la dignidad humana y el cuidado de la creación.", "El ser humano, hombre y mujer, es creado a imagen de Dios, lo que le da una dignidad igual y única; recibe la tarea de cuidar y administrar la creación, no de destruirla."],
    ["a", "Compara la experiencia del exilio con la de las personas refugiadas hoy.", "Ambas suponen perder la tierra, el hogar y las raíces por la violencia, vivir como extranjeros y mantener la esperanza de volver o rehacer la vida. La Biblia invita a acoger al extranjero recordando que Israel también lo fue."],
    ["a", "Busca un cuadro o una obra literaria inspirada en un relato del Antiguo Testamento y explícala.", "Respuesta abierta. Ejemplo: «David» de Miguel Ángel, que representa al joven pastor antes de enfrentarse a Goliat, símbolo de la confianza y la valentía."],
    ["a", "¿Por qué es importante conocer la Biblia aunque no se sea creyente?", "Porque ha marcado la historia, el arte, la literatura, la música, la lengua y los valores de la cultura occidental; sin ella no se entienden muchas obras y expresiones."],
    ["a", "Explica cómo la historia de salvación muestra la fidelidad de Dios a pesar de las infidelidades humanas.", "A lo largo de la Biblia, el pueblo rompe la Alianza (idolatría, injusticias), pero Dios envía profetas, lo acompaña en el exilio, renueva la Alianza y, según la fe cristiana, culmina su promesa en Jesús."],
    ["a", "Elige un salmo breve, léelo y explica qué sentimiento expresa y en qué situación actual podría rezarse.", "Respuesta abierta. Ejemplo: Sal 23, confianza ante el miedo; podría rezarse antes de una operación o en un momento difícil."],
  ],
  cuartas: ["Una fiesta", "Salomón", "En Nazaret", "Sacerdote", "Moisés", "Jonás", "a Saúl", "no existe", "Eclesiástico", "el lago de Galilea", "pan de vida", "soldados", "Epifanía"],
  quiz: [
    ["La Biblia católica tiene…", ["73 libros", "27 libros", "100 libros", "12 libros"], 0, "46 + 27."],
    ["El Nuevo Testamento se escribió en…", ["griego", "latín", "hebreo", "castellano"], 0, "La lengua común del Mediterráneo oriental."],
    ["La lista oficial de libros bíblicos es el…", ["canon", "credo", "catecismo", "salterio"], 0, "Libros inspirados."],
    ["La Vulgata es la traducción…", ["latina de san Jerónimo", "griega del Antiguo Testamento", "castellana de 1569", "inglesa"], 0, "Siglo IV."],
    ["Los Salmos son…", ["150 oraciones cantadas", "leyes", "cartas", "evangelios"], 0, "Libro poético."],
    ["Los relatos de la creación usan un lenguaje…", ["simbólico", "científico", "jurídico", "periodístico"], 0, "Responden al porqué."],
    ["Según el Génesis, el ser humano está creado…", ["a imagen de Dios", "por casualidad", "para obedecer al rey", "como los animales"], 0, "Dignidad única."],
    ["Jerusalén y el Templo fueron destruidos en el 587 a. C. por…", ["Nabucodonosor", "Ciro", "David", "el faraón"], 0, "Inicio del exilio."],
    ["El rey que permitió el regreso del exilio fue…", ["Ciro de Persia", "Nabucodonosor", "Salomón", "Herodes"], 0, "En el 538 a. C."],
    ["«Lavarse las manos» viene de…", ["Pilato", "Moisés", "Judas", "Noé"], 0, "En el juicio de Jesús."],
  ],
  examen: [
    ["Los Proverbios son un libro…", ["sapiencial", "profético", "histórico", "apocalíptico"], 0, "Consejos para vivir."],
    ["La Biblia del Oso (1569) la tradujo…", ["Casiodoro de Reina", "san Jerónimo", "Cervantes", "san Pablo"], 0, "Primera completa impresa en castellano."],
    ["El salmo 137 recuerda…", ["el exilio en Babilonia", "la creación", "el nacimiento de Jesús", "Pentecostés"], 0, "«Junto a los canales de Babilonia»."],
    ["Según la Biblia, el mal en el mundo viene…", ["del mal uso de la libertad humana", "de Dios", "de la naturaleza", "del azar"], 0, "Relato de Gn 3."],
    ["«Más viejo que Matusalén» es una expresión de origen…", ["bíblico", "griego", "romano", "árabe"], 0, "Gn 5."],
  ],
  tarjetas: [["73 libros", "46 del Antiguo Testamento y 27 del Nuevo."], ["Canon", "Lista oficial de libros inspirados."], ["Exilio", "Deportación a Babilonia (587-538 a. C.)."], ["Lenguaje simbólico", "Forma de expresar verdades profundas con imágenes y relatos."]],
  glosario: [["Biblia", "Conjunto de libros sagrados de judíos y cristianos."], ["Antiguo Testamento", "Libros anteriores a Jesús."], ["Nuevo Testamento", "Libros sobre Jesús y la Iglesia primitiva."], ["Canon", "Lista oficial de libros inspirados."], ["Inspiración", "Acción de Dios sobre los autores sagrados."], ["Alianza", "Pacto de amor entre Dios y su pueblo."], ["Patriarcas", "Abraham, Isaac y Jacob."], ["Éxodo", "Salida de Egipto guiada por Moisés."], ["Profeta", "Persona que habla en nombre de Dios."], ["Exilio", "Deportación del pueblo a Babilonia."], ["Mesías", "El ungido esperado por Israel."], ["Salmo", "Oración poética cantada."], ["Vulgata", "Traducción latina de san Jerónimo."], ["Cita bíblica", "Libro, capítulo y versículos de un texto."]],
  situacion: { titulo: "La Biblia en nuestra cultura", reto: "Descubrir y mostrar la presencia de la Biblia en la lengua, el arte y la cultura actuales.", pasos: ["Buscar diez expresiones de origen bíblico y localizar su cita.", "Encontrar tres obras de arte, canciones o películas inspiradas en relatos bíblicos.", "Leer los textos originales y explicar el sentido de cada relato.", "Relacionar cada ejemplo con una etapa de la historia de salvación.", "Crear un mural o una presentación interactiva y explicarla a la clase."], producto: "Mural o presentación «La Biblia en nuestra cultura» con citas, obras y explicaciones.", evaluacion: ["Las citas bíblicas están bien localizadas.", "Se explica correctamente el sentido de cada relato.", "Se relaciona con la historia de salvación.", "La presentación es clara, rigurosa y creativa."] },
  familias: ["Buscad juntos expresiones de origen bíblico que uséis en casa y localizad de qué relato vienen."],
  saberes: "la Biblia: estructura, formación, géneros y lectura; las etapas de la historia de salvación y su presencia en la cultura.",
  minutos: 100,
});
