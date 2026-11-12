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
