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
