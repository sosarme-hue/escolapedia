// Oratoria y debate 3º ESO (optativa). Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Oratoria y debate",
  curso: "3-eso",
  titulo: "Presentaciones con apoyo visual",
  minutos: 50,
  objetivos: ["Diseñar diapositivas claras que apoyen el discurso sin sustituirlo", "Elegir imágenes, gráficos y textos con criterio y respetando los derechos de autor", "Coordinar lo que se dice con lo que se proyecta"],
  claves: ["presentación", "diapositiva", "apoyo visual", "una idea por diapositiva", "contraste", "tipografía", "imagen", "gráfico", "derechos de autor", "licencias Creative Commons"],
  pregunta: {
    texto: "Una diapositiva tiene diez líneas de texto en letra pequeña y el orador las lee de espaldas al público. ¿Qué está fallando?",
    respuesta: "Casi todo. Las diapositivas deben <mark>apoyar</mark> al orador, no sustituirlo. Si el público tiene que leer mucho, deja de escuchar; y si el orador lee la pantalla, pierde el contacto con el público. La regla de oro: <b>pocas palabras, imágenes potentes y el orador como protagonista</b>.",
  },
  bloques: [
    {
      html: `<h3>Para qué sirve el apoyo visual</h3><p>Una presentación con diapositivas (o con carteles, objetos o una pizarra) sirve para <b>reforzar</b> el mensaje: mostrar lo que es difícil de explicar con palabras (un mapa, un gráfico, una foto), ayudar al público a seguir la estructura y hacer que recuerde las ideas clave. Recordamos mejor lo que <mark>vemos y oímos a la vez</mark>. Pero el apoyo visual nunca es el discurso: si se va la luz, deberías poder seguir.</p>`,
      svg: L.filas("Funciones del apoyo visual", [
        ["Mostrar", "lo que cuesta explicar", "var(--pen)"],
        ["Ordenar", "la estructura del discurso", "var(--leaf)"],
        ["Recordar", "las ideas clave", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Una idea por diapositiva</h3><p>Cada diapositiva debe transmitir <mark>una sola idea</mark>. Usa un título que la resuma y, como mucho, unas pocas palabras clave o una frase corta. Evita los párrafos: el público no puede leer y escucharte a la vez. Una regla orientativa es no pasar de seis líneas con unas seis palabras cada una, aunque a menudo basta con una imagen y una frase.</p>`,
      svg: L.filas("Diapositiva recargada frente a diapositiva clara", [
        ["Recargada", "párrafos, letra pequeña", "var(--red)"],
        ["Clara", "una idea, pocas palabras", "var(--leaf)"],
      ], "el protagonista eres tú"),
    },
    {
      html: `<h3>Diseño: letra, color y contraste</h3><p>Elige una <b>tipografía</b> sencilla y grande (al menos 24 puntos para el texto y más para los títulos), sin mezclar muchos tipos de letra. Cuida el <b>contraste</b>: texto oscuro sobre fondo claro o al revés; nunca amarillo sobre blanco. Usa pocos <b>colores</b> (dos o tres) y mantén el mismo estilo en todas las diapositivas. Las animaciones y transiciones, con moderación: distraen.</p>`,
      svg: L.tabla("Reglas de diseño de diapositivas", ["Elemento", "Consejo"], [
        ["Letra", "grande y sencilla"], ["Contraste", "oscuro sobre claro"], ["Color", "dos o tres"], ["Animaciones", "pocas o ninguna"],
      ]),
    },
    {
      html: `<h3>Imágenes y gráficos</h3><p>Una buena imagen vale más que muchas palabras, si es <b>de calidad</b> (no pixelada), está <b>relacionada</b> con la idea y ocupa buena parte de la diapositiva. Para los datos, usa <mark>gráficos</mark> sencillos en lugar de tablas llenas de números: barras para comparar cantidades, líneas para ver la evolución en el tiempo y sectores para mostrar partes de un todo. Destaca con color el dato importante.</p>`,
      svg: L.filas("Qué gráfico elegir", [
        ["Barras", "comparar cantidades", "var(--pen)"],
        ["Líneas", "evolución en el tiempo", "var(--leaf)"],
        ["Sectores", "partes de un todo", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Hablar con las diapositivas</h3><p>Durante la presentación, <b>mira al público</b>, no a la pantalla: mira la diapositiva de reojo o en el ordenador que tienes delante. No leas lo que pone: explícalo y amplíalo. Haz que la diapositiva aparezca <mark>cuando hablas de ella</mark>, y si quieres que el público te atienda solo a ti, puedes poner la pantalla en negro (en muchos programas, con la tecla B). Usa un mando o pide ayuda para pasar las diapositivas.</p>`,
      svg: L.filas("Cómo presentar con diapositivas", [
        ["Mira", "al público, no a la pantalla", "var(--pen)"],
        ["Explica", "no leas la diapositiva", "var(--leaf)"],
        ["Sincroniza", "lo que dices y lo que se ve", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "La diapositiva ideal",
    svg: L.columnas("Características de una buena diapositiva", [
      ["contenido", "UNA IDEA", ["título claro", "pocas palabras"], "var(--pen)"],
      ["imagen", "POTENTE", ["de calidad", "y relacionada"], "var(--leaf)"],
      ["diseño", "LEGIBLE", ["letra grande", "buen contraste"], "var(--red)"],
      ["orador", "PROTAGONISTA", ["mira al público", "y explica"], "var(--inf)"],
    ]),
  },
  video: { id: "BwAtqPAnHu4", titulo: "Cómo exponer en clase fácilmente y sin nervios (5 pasos)", canal: "Pablo Lomeli", vistas: 1640578, megusta: 0, busqueda: "cómo hacer una buena presentación" },
  quiz: [
    { q: "Cada diapositiva debe transmitir…", o: ["una sola idea", "todo el tema", "tres párrafos"], a: 0, e: "Una idea, pocas palabras." },
    { q: "¿Qué combinación de colores es mala?", o: ["Amarillo sobre blanco", "Negro sobre blanco", "Blanco sobre azul oscuro"], a: 0, e: "Falta contraste." },
    { q: "Para mostrar la evolución de un dato en el tiempo se usa un gráfico de…", o: ["líneas", "sectores", "texto"], a: 0, e: "Muestra cómo cambia." },
    { q: "Durante la presentación, el orador debe mirar…", o: ["al público", "a la pantalla", "al suelo"], a: 0, e: "La pantalla, solo de reojo." },
    { q: "Leer literalmente las diapositivas…", o: ["aburre y desconecta al público", "es lo ideal", "da credibilidad"], a: 0, e: "Hay que explicarlas." },
  ],
  examen: [
    { q: "El tamaño mínimo recomendado para el texto es de unos…", o: ["24 puntos", "8 puntos", "12 puntos"], a: 0, e: "Para que se lea desde el fondo." },
    { q: "Para comparar cantidades se usa un gráfico de…", o: ["barras", "líneas", "sectores"], a: 0, e: "Cada barra, una cantidad." },
    { q: "El apoyo visual…", o: ["refuerza el discurso, no lo sustituye", "es el discurso", "es opcional siempre"], a: 0, e: "Si se va la luz, debes poder seguir." },
  ],
  feynman: ["Para qué sirve el apoyo visual", "La regla de una idea por diapositiva", "Tres reglas de diseño de diapositivas", "Cómo hablar sin leer las diapositivas"],
  mapa: mapa("APOYO VISUAL", "var(--eso)", [
    ["Contenido", "una idea por diapositiva", "var(--pen)"],
    ["Diseño", "letra grande · contraste", "var(--leaf)"],
    ["Imágenes", "calidad · gráficos simples", "var(--red)"],
    ["Orador", "mira al público y explica", "var(--inf)"],
  ]),
  tarjetas: [
    ["Una idea por diapositiva", "Cada diapositiva transmite una sola idea con un título y pocas palabras."],
    ["Contraste", "Diferencia entre texto y fondo para que se lea bien: oscuro sobre claro."],
    ["Gráfico de barras", "Sirve para comparar cantidades."],
    ["Gráfico de sectores", "Sirve para mostrar las partes de un todo."],
    ["Regla del orador", "Mira al público, no leas la pantalla y explica lo que se ve."],
  ],
  familias: ["Pedidle que os enseñe su presentación y comprobad desde el fondo de la habitación si se lee bien.", "Comentad juntos las diapositivas de un vídeo divulgativo que os guste.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación oral y alfabetización informacional: textos orales multimodales; uso de herramientas digitales de presentación; respeto a la propiedad intelectual (materia optativa de Oratoria y debate; relación con el RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Reto de rediseño: convertir una diapositiva recargada en una clara.", "Presentación Pecha Kucha simplificada: 10 diapositivas, 20 segundos cada una.", "Buscar imágenes con licencia libre y citarlas correctamente."],
  },
  fuentes: [
    L.BOE,
    { t: "Creative Commons España: licencias", url: "https://creativecommons.org/licenses/?lang=es" },
    { t: "Pecha Kucha, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Pecha_Kucha" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Planificar la presentación antes de abrir el programa", "Citar las fuentes y usar imágenes con licencia libre"],
  bloques: [
    { tras: "Para qué sirve el apoyo visual", html: `<h3>Primero el discurso, después las diapositivas</h3><p>Un error muy común es abrir el programa de presentaciones y empezar a llenar diapositivas sin saber qué se quiere decir. Es mejor seguir el orden contrario: primero, prepara el <b>discurso</b> (mensaje, ideas, estructura); después, haz un <b>boceto en papel</b> de las diapositivas, una por cada idea; y solo al final, diseña en el ordenador.</p><p>El boceto, también llamado <mark>guion gráfico</mark> o <i>storyboard</i>, consiste en dibujar recuadros con el título y la imagen que imaginas para cada diapositiva. Así ves enseguida si la presentación tiene demasiadas diapositivas, si falta alguna o si el orden no funciona. Para una exposición de cinco minutos, entre seis y diez diapositivas suelen ser suficientes.</p>` },
    { tras: "Una idea por diapositiva", html: `<h3>Las diapositivas imprescindibles</h3><p>Aunque cada presentación es distinta, casi todas necesitan:</p><ul><li>Una <b>portada</b>: título atractivo, tu nombre y la fecha o la materia.</li><li>Un <b>índice</b> o mapa de la presentación (en exposiciones largas).</li><li>Las diapositivas de <b>contenido</b>, una por idea.</li><li>Una diapositiva de <b>conclusión</b> con el mensaje central o la llamada a la acción.</li><li>Las <b>fuentes</b>: de dónde has sacado los datos y las imágenes.</li></ul><p>Evita terminar con una diapositiva que solo diga «¿Preguntas?» o «Gracias» sobre un fondo vacío: es mejor dejar a la vista la <mark>idea principal</mark> mientras respondes a las preguntas.</p>` },
    { tras: "Imágenes y gráficos", html: `<h3>Imágenes legales: derechos de autor</h3><p>Que una imagen esté en internet no significa que se pueda usar libremente: casi todas tienen <b>derechos de autor</b>. Para tus presentaciones, busca imágenes con <mark>licencias libres</mark>, como las <b>Creative Commons</b>, que permiten usarlas con ciertas condiciones (por ejemplo, citar al autor), o en bancos de imágenes gratuitos. Muchos buscadores permiten filtrar por tipo de licencia.</p><p>Siempre que uses una imagen o un dato ajeno, <b>cita la fuente</b>, en la propia diapositiva (en letra pequeña bajo la imagen) o en la diapositiva final de fuentes. Hacerlo es una cuestión de respeto al trabajo de otros y, además, aumenta tu credibilidad: muestra que tu información es seria.</p>` },
    { tras: "Hablar con las diapositivas", html: `<h3>Antes de presentar: lista de comprobación</h3>${L.tb(["Comprueba", "Por qué"], [["Que el archivo se abre en el ordenador del aula", "versiones y tipos de letra cambian"], ["Una copia en un USB o en la nube", "por si falla algo"], ["Que se lee desde el fondo", "tamaño de letra y contraste"], ["Las faltas de ortografía", "en grande se notan mucho"], ["Los vídeos y el sonido", "a veces no funcionan sin internet"], ["El tiempo total con un ensayo", "para no pasarse"]])}<p>Llega unos minutos antes, conecta y prueba todo. Y lleva tus fichas por si hay que presentar sin ordenador.</p>` },
    { tras: "Hablar con las diapositivas", html: `<h3>Otros apoyos visuales</h3><p>Las diapositivas no son la única opción. A veces funciona mejor un <b>objeto</b> real (una maqueta, una planta, un instrumento) que el público puede ver e incluso tocar al final. Una <b>pizarra</b> permite construir un esquema poco a poco mientras hablas. Un <b>cartel</b> o un mural es útil en ferias y exposiciones. Y un <b>vídeo</b> muy corto (menos de un minuto) puede servir de gancho al principio.</p><p>Elige el apoyo según el <mark>tema, el público y el lugar</mark>. Y recuerda que el mejor apoyo visual sigue siendo el propio orador: su mirada, sus gestos y su entusiasmo. Una presentación sencilla con un orador convencido supera siempre a una presentación espectacular con un orador que lee.</p>` },
  ],
  videos: [
    ["Diseño: letra, color y contraste", L.vid("bUHR7lYepT0", "Cómo hacer una buena presentación visual (diapositivas)", "Aprendiz Desarrollo", 179536)],
    ["Hablar con las diapositivas", L.vid("-fc2eUJDKZw", "PowerPoint: errores garrafales (no hagas esto en tu presentación)", "Fernando Miralles", 91860)],
  ],
  ejemplos: [
    ["Mejora esta diapositiva: título «El agua» y un párrafo de ocho líneas sobre su consumo en España.", ["Dejar una sola idea: cuánta agua gastamos al día.", "Título que la resuma: «Gastamos más agua de la que creemos».", "Sustituir el párrafo por un dato grande y una imagen (un grifo abierto), y contar el resto de palabra."], "título-mensaje + un dato destacado + una imagen."],
    ["¿Qué gráfico usarías para mostrar el porcentaje de alumnos que van al instituto andando, en bus y en coche?", ["Son partes de un total (100 % de los alumnos).", "Hay pocas categorías (tres).", "Interesa ver la proporción de cada una."], "un gráfico de sectores."],
    ["Planifica una presentación de 5 minutos sobre tu animal favorito.", ["Portada con título y una gran foto.", "Tres diapositivas de contenido: dónde vive, qué come, por qué está amenazado.", "Conclusión con una llamada a la acción y diapositiva de fuentes."], "seis diapositivas: portada, tres de contenido, conclusión y fuentes."],
  ],
  errores: [
    "Escribir párrafos enteros en las diapositivas.",
    "Leer la pantalla de espaldas al público.",
    "Usar imágenes pixeladas o sin relación con el tema.",
    "Abusar de animaciones, transiciones y colores.",
    "No citar las fuentes de los datos y las imágenes.",
    "No comprobar antes que el archivo funciona en el ordenador del aula.",
  ],
  ejercicios: [
    ["Escribe tres funciones del apoyo visual.", "Mostrar lo difícil de explicar, ordenar la estructura y ayudar a recordar las ideas clave."],
    ["¿Cuántas diapositivas usarías para una exposición de cinco minutos?", "Entre seis y diez, aproximadamente."],
    ["Reescribe como título-mensaje: «Datos sobre el reciclaje».", "Por ejemplo: «Reciclamos solo la mitad de los envases que podríamos»."],
    ["¿Qué gráfico elegirías para comparar las horas de sueño de cinco cursos?", "Un gráfico de barras."],
    ["¿Qué gráfico elegirías para mostrar cómo ha cambiado la temperatura media en los últimos 50 años?", "Un gráfico de líneas."],
    ["Escribe dos reglas de contraste y color.", "Texto oscuro sobre fondo claro (o al revés) y usar solo dos o tres colores."],
    ["¿Qué son las licencias Creative Commons?", "Licencias que permiten usar obras (como imágenes) con ciertas condiciones, por ejemplo, citar al autor."],
    ["¿Qué harías si el ordenador no lee tu presentación?", "Usar la copia en USB o en la nube y, si no funciona, presentar con mis fichas y la pizarra."],
    ["Dibuja (o describe) el boceto de una portada para un trabajo sobre los volcanes.", "Respuesta abierta. Debe tener un título atractivo, una imagen grande de un volcán y el nombre del autor."],
    ["Explica por qué el orador es el mejor apoyo visual.", "Porque su mirada, sus gestos y su entusiasmo conectan con el público más que cualquier diapositiva."],
  ],
  quiz: [
    ["Antes de diseñar las diapositivas conviene…", ["preparar el discurso y un boceto", "elegir las animaciones", "buscar fondos bonitos"], 0, "Primero el mensaje."],
    ["Las imágenes de internet…", ["suelen tener derechos de autor", "son todas libres", "no hay que citarlas"], 0, "Busca licencias libres."],
    ["La última diapositiva debería mostrar…", ["la idea principal o las fuentes", "solo «¿Preguntas?»", "un fondo vacío"], 0, "Que se vea el mensaje."],
    ["Para no depender del ordenador, lleva…", ["tus fichas", "más animaciones", "un vídeo largo"], 0, "Plan B."],
    ["El guion gráfico o storyboard es…", ["un boceto de las diapositivas", "un tipo de letra", "una licencia"], 0, "Se hace en papel."],
  ],
  tarjetas: [
    ["Storyboard", "Boceto en papel de las diapositivas antes de diseñarlas."],
    ["Creative Commons", "Licencias que permiten usar obras con condiciones, como citar al autor."],
    ["Diapositiva de fuentes", "Lista de dónde salen los datos y las imágenes de la presentación."],
  ],
});

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["La presentación que nadie miró", `<p>Daniel preparó una presentación de 24 diapositivas sobre el cambio climático. Cada una tenía un párrafo larguísimo copiado de internet, letra pequeña de color verde claro sobre un fondo de hojas, animaciones que hacían girar el texto y un sonido de aplausos al pasar de una a otra. Durante la exposición, Daniel se puso de espaldas al público y leyó las diapositivas en voz alta. A los tres minutos, la mitad de la clase miraba por la ventana.</p><p>Una semana después, Lucía presentó el mismo tema con solo siete diapositivas. En la primera había una foto enorme de un glaciar en 1980 y otra del mismo lugar hoy, sin texto. Después, un gráfico sencillo con una línea que subía y una sola frase: «La temperatura media ha subido más de 1 °C». Lucía miraba al público, contaba historias y usaba las diapositivas como apoyo. Al terminar, todos recordaban las imágenes y las tres ideas principales. La diferencia no estaba en el tema ni en el programa informático, sino en cómo se usó el <b>apoyo visual</b>. En este tema aprenderás a preparar, diseñar y presentar diapositivas que ayuden a tu discurso en lugar de competir con él.</p>`],
  mas: [
    ["<h3>Para qué sirve el apoyo visual</h3>", `<p>Las personas recordamos mejor la información cuando la recibimos a la vez por el oído y por la vista, siempre que ambas se complementen. Si la pantalla muestra un texto largo mientras el orador dice otra cosa, el público intenta leer y escuchar a la vez y no hace bien ninguna de las dos. Por eso la diapositiva ideal muestra lo que es difícil de explicar con palabras (una imagen, un gráfico, un esquema) y deja la explicación al orador.</p>`],
    ["<h3>Imágenes y gráficos</h3>", `<p>Las imágenes deben ocupar <b>buena parte de la diapositiva</b>: una foto pequeña en una esquina apenas se ve desde el fondo del aula. Si usas varias fotos, procura que tengan un estilo parecido y evita los dibujos genéricos (<i>clipart</i>), que dan aspecto poco cuidado. Comprueba siempre cómo se ve todo proyectado en la pantalla real, no solo en tu ordenador.</p>`],
    ["<h3>Otros apoyos visuales</h3>", `<p>Sea cual sea el apoyo, la regla es la misma: debe verse desde el último asiento, mostrarse solo cuando hablas de él y guardarse después, para que no distraiga. Un objeto que pasa de mano en mano durante toda la exposición, por ejemplo, hace que el público deje de escucharte.</p>`],
    ["<h3>Una idea por diapositiva</h3>", `<p>Tener más diapositivas no es un problema si cada una dura poco: es mejor pasar rápido por diez diapositivas sencillas que quedarse cinco minutos en una llena de cosas. Como orientación, calcula aproximadamente una diapositiva por cada minuto de exposición, y ajusta según el ritmo de tu discurso.</p>`],
  ],
  svgs: [
    ["<h3>Primero el discurso, después las diapositivas</h3>", "El orden de trabajo", [["1 Discurso", "mensaje e ideas"], ["2 Boceto", "en papel"], ["3 Diapositivas", "solo al final"]], "primero pensar"],
    ["<h3>Las diapositivas imprescindibles</h3>", "Diapositivas imprescindibles", [["Portada", "título y autor"], ["Desarrollo", "una idea por diapositiva"], ["Cierre y fuentes", "idea clave y créditos"]], "la estructura básica"],
    ["<h3>Imágenes legales: derechos de autor</h3>", "Imágenes y derechos", [["Con derechos", "no usar sin permiso"], ["Creative Commons", "citar al autor"], ["Propias", "fotos y dibujos tuyos"]], "usar imágenes legales"],
    ["<h3>Antes de presentar: lista de comprobación</h3>", "Comprobar antes de presentar", [["Archivo", "se abre en el aula"], ["Proyector", "colores y tamaño"], ["Plan B", "PDF y fichas"]]],
    ["<h3>Otros apoyos visuales</h3>", "Otros apoyos visuales", [["Objeto", "una maqueta, una planta"], ["Pizarra", "esquema en directo"], ["Cartel", "o póster"]], "no solo diapositivas"],
  ],
  bloques: [
    { tras: "<h3>Una idea por diapositiva</h3>", html: `<h3>Títulos que dicen algo</h3><p>Muchas presentaciones usan títulos que solo nombran el tema: «Datos», «Introducción», «El agua». Es mucho más eficaz el <mark>título-mensaje</mark>: una frase completa que dice la conclusión de la diapositiva. En lugar de «Consumo de agua», escribe «Cada español usa unos 130 litros de agua al día». Así, aunque el público solo lea el título, ya se lleva la idea, y tú tienes una guía de lo que debes explicar.</p><p>Debajo del título, en lugar de párrafos, coloca la <b>prueba visual</b> de esa frase: una imagen, un gráfico, un esquema o, como mucho, unas pocas palabras clave. Una referencia útil es no superar unas <b>seis líneas</b> de texto breves por diapositiva, aunque cuanto menos texto, mejor. Si algo es importante pero largo (una definición, una cita), muéstralo solo, en grande, y léelo en voz alta. El resto del contenido lo dices tú: las diapositivas no son un documento para leer, sino un apoyo para escuchar. Si quieres dar más información, prepara un documento aparte para repartir o compartir después.</p>`, svg: ["Título-mensaje", [["Título-tema", "Consumo de agua"], ["Título-mensaje", "Usamos 130 litros al día"], ["Debajo", "la prueba visual"]], "títulos que dicen algo"] },
    { tras: "<h3>Diseño: letra, color y contraste</h3>", html: `<h3>Cuatro principios de diseño</h3><p>Los diseñadores usan cuatro principios sencillos que puedes aplicar a cualquier diapositiva. La <mark>alineación</mark>: cada elemento debe estar alineado con otro (todos los textos a la izquierda, por ejemplo), lo que da sensación de orden. La <mark>proximidad</mark>: lo que está relacionado va junto, y lo que no, separado; una imagen y su pie deben estar cerca. La <b>repetición</b>: mantener los mismos colores, tipos de letra y posiciones en todas las diapositivas da unidad. Y el <b>contraste</b>: lo importante debe destacar por tamaño, color o grosor.</p><p>A estos principios se suma el <b>espacio en blanco</b>: dejar zonas vacías no es desperdiciar la diapositiva, sino dar aire para que lo importante respire. Piensa también en la <b>accesibilidad</b>: alrededor de una de cada doce personas tiene alguna forma de daltonismo, así que no confíes solo en el color para distinguir datos (combina rojo y verde con símbolos o etiquetas) y usa siempre un contraste alto entre texto y fondo.</p>`, svg: ["Principios de diseño", [["Alineación", "todo ordenado"], ["Proximidad", "lo relacionado, junto"], ["Repetición", "mismo estilo siempre"]], "y espacio en blanco"], video: "tips" },
    { tras: "<h3>Imágenes y gráficos</h3>", html: `<h3>Cifras que se entienden</h3><p>Los números son difíciles de seguir cuando solo se oyen. Para que tus datos se entiendan, <b>redondea</b>: «casi la mitad» o «el 48 %» se recuerda mejor que «el 47,83 %». <b>Compara</b> con algo conocido: «la superficie quemada equivale a 20.000 campos de fútbol» dice más que «14.000 hectáreas». Y muestra <b>pocos datos</b>: un gráfico con veinte categorías y cinco colores no se puede leer en los pocos segundos que dura una diapositiva.</p><p>En cada gráfico, <mark>resalta el dato clave</mark> con un color intenso y deja el resto en gris, para que el público sepa dónde mirar. Evita los gráficos en <b>tres dimensiones</b>, que deforman las proporciones, y comprueba que el eje empieza en cero cuando comparas cantidades. Por último, indica siempre la <b>fuente</b> debajo del gráfico, en letra pequeña pero legible: da credibilidad y permite al público comprobar los datos. Un buen gráfico se entiende en cinco segundos; si necesitas un minuto para explicarlo, simplifícalo.</p>`, svg: ["Presentar cifras", [["Redondear", "casi la mitad"], ["Comparar", "20.000 campos de fútbol"], ["Resaltar", "el dato clave en color"]], "datos que se entienden"] },
    { tras: "<h3>Hablar con las diapositivas</h3>", html: `<h3>Responder a las preguntas del público</h3><p>El turno de preguntas es una parte más de la presentación, y conviene prepararlo. Antes de exponer, piensa en las <b>preguntas probables</b> y prepara las respuestas; puedes incluso tener alguna diapositiva extra oculta al final con datos de apoyo. Cuando alguien pregunte, <b>escucha la pregunta entera</b> sin interrumpir, agradécela y, si el resto del público no la ha oído bien, repítela en voz alta.</p><p>Responde de forma <b>breve y directa</b>, mirando a quien ha preguntado al principio y luego a todo el público. Si no sabes la respuesta, no inventes: es mucho mejor decir «No lo sé, pero lo buscaré y os lo cuento» que perder credibilidad con un dato falso. Si la pregunta no tiene relación con el tema o es una crítica agresiva, responde con calma y vuelve al mensaje principal. Y controla el tiempo: si quedan muchas preguntas, ofrece resolverlas después. Termina el turno con una frase que recuerde tu idea clave, para que lo último que oiga el público sea tu mensaje.</p>`, svg: ["Turno de preguntas", [["Escuchar", "la pregunta entera"], ["Responder", "breve y directo"], ["No lo sé", "lo buscaré, sin inventar"]], "parte de la presentación"] },
    { html: `<h3>Presentar en línea y en vídeo</h3><p>Cada vez es más habitual presentar por <b>videollamada</b> o grabar una exposición en vídeo. Las reglas básicas son las mismas, pero hay detalles técnicos que marcan la diferencia. Coloca la <b>cámara a la altura de los ojos</b>, no por debajo, y mira a la cámara, no a tu propia imagen, porque así el público siente que le miras. Busca una buena <b>luz</b> de frente (una ventana delante, no detrás) y un fondo ordenado y sin distracciones.</p><p>Comprueba antes el <b>sonido</b> (mejor con auriculares con micrófono), la conexión y cómo se <b>comparte la pantalla</b>; ten la presentación abierta y cierra las demás ventanas y notificaciones. En línea la atención dura menos, así que conviene ser más breve, hacer preguntas al público o usar el chat para que participe. Si grabas un vídeo, ensaya, grábalo en varias tomas cortas si hace falta y revisa el resultado antes de enviarlo: igual que en una presentación presencial, el contenido y la claridad importan más que los efectos.</p>`, svg: ["Presentar en línea", [["Cámara", "a la altura de los ojos"], ["Luz y sonido", "de frente, con auriculares"], ["Pantalla", "solo la presentación"]]] },
  ],
  ejemplos: [
    ["Convierte en título-mensaje: «Los residuos».", ["Busca el dato o la conclusión principal de la diapositiva.", "Escríbelo como frase completa y breve.", "Debajo pondrás la prueba visual (gráfico o foto)."], "«Cada persona genera más de un kilo de basura al día»."],
    ["Mejora esta diapositiva: título «Datos», 12 líneas de texto, gráfico 3D con 8 colores y sin fuente.", ["Cambia el título por un título-mensaje.", "Elimina el texto y deja solo el gráfico.", "Haz el gráfico en 2D, con el dato clave resaltado y el resto en gris.", "Añade la fuente debajo."], "Una diapositiva con una idea, un gráfico claro y su fuente."],
    ["Un compañero te pregunta un dato que no sabes durante tu exposición. ¿Qué haces?", ["No inventes.", "Reconoce con naturalidad que no lo sabes.", "Ofrece buscarlo y comunicarlo después."], "«Buena pregunta; no tengo ese dato ahora, lo busco y os lo cuento mañana»."],
  ],
  niveles: "bbmbbbbmmm",
  ejercicios: [
    ["b", "¿Qué es un título-mensaje?", "Una frase completa que expresa la conclusión de la diapositiva, en lugar de solo nombrar el tema."],
    ["b", "Cita los cuatro principios de diseño.", "Alineación, proximidad, repetición y contraste (más el espacio en blanco)."],
    ["b", "¿Dónde debe colocarse la cámara en una videollamada?", "A la altura de los ojos, y hay que mirar a la cámara."],
    ["b", "¿Por qué no conviene usar gráficos en 3D?", "Porque deforman las proporciones y dificultan leer los datos correctamente."],
    ["b", "¿Qué debes hacer si no sabes responder una pregunta?", "Reconocerlo, no inventar y ofrecer buscar la respuesta."],
    ["m", "Redondea y compara para que se entienda: «El 49,6 % de los alumnos usa el móvil más de 3 horas».", "«Casi la mitad de los alumnos pasa más de tres horas al día con el móvil, más tiempo que en las clases de la mañana»."],
    ["m", "Explica por qué leer y escuchar a la vez dificulta comprender.", "Porque el público intenta leer el texto de la pantalla y escuchar al orador al mismo tiempo, y la atención se divide; ninguna de las dos cosas se hace bien."],
    ["m", "¿Cómo harías accesible un gráfico para personas con daltonismo?", "No distinguir los datos solo por color: añadir etiquetas, símbolos o tramas, y usar colores con mucho contraste."],
    ["m", "Prepara tres preguntas probables para una exposición sobre la energía solar.", "¿Cuánto cuesta instalar placas? ¿Funciona en días nublados? ¿Qué pasa con las placas cuando dejan de funcionar?"],
    ["m", "¿Qué es el principio de proximidad? Pon un ejemplo.", "Colocar juntos los elementos relacionados y separar los que no lo están; por ejemplo, el pie de foto justo debajo de su imagen."],
    ["m", "¿Por qué conviene resaltar un solo dato en un gráfico?", "Para que el público sepa dónde mirar en los pocos segundos que ve la diapositiva y retenga el dato importante."],
    ["m", "¿Qué diferencias hay entre presentar en clase y por videollamada?", "En línea hay que cuidar cámara, luz, sonido y conexión, mirar a la cámara, compartir pantalla, ser más breve y fomentar la participación por chat."],
    ["m", "¿Qué haces si una pregunta es agresiva o no tiene relación con el tema?", "Responder con calma y brevedad, sin entrar en polémica, y volver al mensaje principal."],
    ["a", "Rediseña una diapositiva de la presentación de Daniel (lectura inicial) aplicando lo aprendido.", "Respuesta abierta. Ejemplo: título-mensaje («El glaciar ha perdido la mitad de su hielo»), dos fotos grandes comparadas, sin animaciones ni sonido, contraste alto y la fuente abajo."],
    ["a", "Diseña en papel el boceto de una presentación de 6 diapositivas sobre un tema de tu elección.", "Respuesta abierta. Debe incluir portada, cuatro diapositivas con título-mensaje y prueba visual, y cierre con la idea clave y las fuentes."],
    ["a", "Compara las presentaciones de Daniel y Lucía en cinco aspectos.", "Número de diapositivas (24 / 7), texto (párrafos / casi nada), diseño (poco contraste y animaciones / imágenes grandes y gráfico sencillo), actitud del orador (lee de espaldas / mira y cuenta historias) y resultado (público desconectado / ideas recordadas)."],
    ["a", "Elige un gráfico de una noticia y explica cómo lo mejorarías para una presentación.", "Respuesta abierta. Debe aplicar: menos datos, eje desde cero, dato clave resaltado, título-mensaje, sin 3D y con fuente."],
    ["a", "Prepara una diapositiva oculta de apoyo para el turno de preguntas y explica para qué la usarías.", "Respuesta abierta. Por ejemplo, una tabla con datos detallados que no se mostró en la exposición, para responder si alguien pide precisiones."],
    ["a", "¿Por qué se dice que «el orador es el mejor apoyo visual»?", "Porque su voz, sus gestos, su mirada y sus historias conectan con el público de una forma que ninguna diapositiva puede igualar; las diapositivas solo refuerzan lo que él transmite."],
    ["a", "Graba un minuto de presentación en vídeo siguiendo las recomendaciones y evalúa el resultado con una lista de cinco puntos.", "Respuesta abierta. Lista posible: cámara a la altura de los ojos, luz de frente, sonido claro, mirada a cámara y mensaje claro en un minuto."],
    ["a", "Escribe una guía de diez reglas para hacer buenas presentaciones dirigida a alumnos de 1.º de ESO.", "Respuesta abierta. Debe incluir reglas como: primero el discurso, una idea por diapositiva, título-mensaje, poco texto, letra grande, buen contraste, imágenes legales, mirar al público, ensayar y tener plan B."],
  ],
  cuartas: ["un párrafo largo", "Negro sobre amarillo claro", "pictogramas sueltos", "a sus fichas todo el rato", "es obligatorio", "hacer el cierre", "no se pueden ver", "una broma", "un altavoz", "un sonido", "6 puntos", "texto", "lo hace innecesario"],
  quiz: [
    ["«Cada español usa 130 litros de agua al día» como título es un…", ["título-mensaje", "título-tema", "pie de foto", "eslogan"], 0, "Dice la conclusión."],
    ["Poner juntos los elementos relacionados es el principio de…", ["proximidad", "alineación", "repetición", "contraste"], 0, "Imagen y pie, juntos."],
    ["Mantener el mismo estilo en todas las diapositivas es…", ["repetición", "proximidad", "espacio en blanco", "contraste"], 0, "Da unidad."],
    ["El espacio en blanco sirve para…", ["dar aire a lo importante", "desperdiciar la diapositiva", "poner más texto", "nada"], 0, "Lo importante respira."],
    ["Para presentar un dato conviene…", ["redondearlo y compararlo", "dar todos los decimales", "leerlo deprisa", "esconderlo"], 0, "Se entiende mejor."],
    ["Los gráficos en 3D…", ["deforman las proporciones", "son más claros", "son obligatorios", "dan credibilidad"], 0, "Mejor en 2D."],
    ["Ante una pregunta que no sabes responder…", ["no inventes y ofrece buscarlo", "inventa un dato", "ignórala", "cambia de tema"], 0, "Mantienes la credibilidad."],
    ["En una videollamada debes mirar a…", ["la cámara", "tu propia imagen", "el teclado", "otra ventana"], 0, "Así el público siente que le miras."],
    ["La luz en una videollamada debe venir…", ["de frente", "de detrás", "de abajo", "no importa"], 0, "Una ventana delante."],
    ["Debajo de un gráfico se indica…", ["la fuente", "tu nombre", "la fecha de hoy", "un chiste"], 0, "Da credibilidad."],
  ],
  examen: [
    ["Un buen gráfico se entiende en unos…", ["cinco segundos", "cinco minutos", "una hora", "nunca"], 0, "Si no, simplifícalo."],
    ["Para personas con daltonismo conviene…", ["añadir etiquetas o símbolos", "usar solo rojo y verde", "quitar los gráficos", "usar colores claros"], 0, "No confiar solo en el color."],
    ["Al recibir una pregunta, primero…", ["escucha la pregunta entera", "interrumpe", "responde rápido", "mira la pantalla"], 0, "Y agradécela."],
    ["La referencia máxima de texto por diapositiva es unas…", ["seis líneas breves", "veinte líneas", "dos páginas", "cien palabras"], 0, "Cuanto menos, mejor."],
    ["Una diapositiva oculta al final sirve para…", ["responder preguntas con datos de apoyo", "despedirse", "poner música", "nada"], 0, "Preparación del turno de preguntas."],
  ],
  tarjetas: [["Título-mensaje", "Frase que expresa la conclusión de la diapositiva."], ["Alineación", "Principio de diseño que ordena los elementos."], ["Dato clave", "Cifra que se resalta en color en un gráfico."], ["Turno de preguntas", "Parte de la presentación que también se prepara."]],
  glosario: [["Apoyo visual", "Recurso que refuerza el discurso por la vista."], ["Diapositiva", "Cada pantalla de una presentación."], ["Título-mensaje", "Título que expresa una conclusión."], ["Storyboard", "Boceto de las diapositivas en papel."], ["Contraste", "Diferencia entre texto y fondo o entre elementos."], ["Alineación", "Colocación ordenada de los elementos."], ["Proximidad", "Agrupación de lo relacionado."], ["Repetición", "Uso constante de un mismo estilo."], ["Espacio en blanco", "Zonas vacías que dan aire."], ["Accesibilidad", "Diseño pensado para que todos puedan percibirlo."], ["Gráfico de barras", "Gráfico para comparar cantidades."], ["Gráfico de líneas", "Gráfico para mostrar evolución en el tiempo."], ["Creative Commons", "Licencias que permiten usar obras con condiciones."], ["Videollamada", "Comunicación en línea con imagen y sonido."]],
  situacion: { titulo: "Antes y después", reto: "Transformar una presentación mal diseñada en una presentación eficaz y explicar los cambios.", pasos: ["Recibir o crear una presentación de 6-8 diapositivas con muchos errores (texto, colores, animaciones).", "Analizarla con una lista de comprobación y anotar los problemas.", "Rediseñarla con títulos-mensaje, imágenes legales, gráficos claros y principios de diseño.", "Preparar el discurso y las preguntas probables.", "Presentar el antes y el después en tres minutos, explicando cada mejora y respondiendo preguntas."], producto: "Dos versiones de la presentación y una exposición de tres minutos.", evaluacion: ["Detecta los errores de diseño y contenido.", "La nueva versión aplica una idea por diapositiva, títulos-mensaje y buen contraste.", "Las imágenes son legales y los datos tienen fuente.", "La exposición mira al público y gestiona bien las preguntas."] },
  familias: ["Pedid que os enseñe una presentación y comprobad juntos desde lejos si se lee bien y si se entiende cada diapositiva en pocos segundos."],
  saberes: "elaboración y uso de apoyos visuales en la exposición oral: diseño, datos, derechos de autor, turno de preguntas y presentación en línea.",
  minutos: 100,
});
