// Cultura Audiovisual, 1º de Bachillerato. Tema 4 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ca");

module.exports = B.tema({
  titulo: "El lenguaje cinematográfico",
  minutos: 60,
  objetivos: [
    "Identificar las unidades del lenguaje cinematográfico: plano, escena y secuencia",
    "Reconocer la escala de planos, los ángulos y los movimientos de cámara y su efecto expresivo",
    "Comprender el montaje y el papel del sonido en el relato",
    "Analizar una secuencia breve con el vocabulario del cine",
  ],
  claves: ["plano", "escena", "secuencia", "escala de planos", "ángulo", "travelling", "montaje", "raccord", "banda sonora"],
  pregunta: {
    texto: "En una película de terror, la música sube, la cámara se acerca despacio a una puerta y… no pasa nada. ¿Por qué tienes el corazón a mil?",
    respuesta: "Porque el cine te habla con un <mark>lenguaje propio</mark>: el tamaño del plano, el movimiento de la cámara, el ritmo del montaje y el sonido construyen la emoción antes de que ocurra nada. Conocer ese lenguaje te convierte en un espectador que entiende <b>cómo</b> le están contando la historia.",
  },
  lectura: {
    titulo: "Un tren que hizo saltar al público",
    html: `<p>Cuenta la leyenda que en 1896, cuando los hermanos Lumière proyectaron en París la llegada de un tren a la estación de La Ciotat, algunos espectadores se levantaron asustados. El plano era fijo y duraba menos de un minuto, pero la locomotora avanzaba en diagonal hacia la cámara y parecía salir de la pantalla.</p>
    <p>Sea verdad o exageración, la anécdota muestra algo cierto: dónde se coloca la cámara, cuánto dura el plano y qué se deja fuera cambian lo que sentimos. Con los años, los cineastas convirtieron esas decisiones en un auténtico idioma.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Plano, escena y secuencia",
      html: `<p>El <b>plano</b> es la unidad mínima del lenguaje cinematográfico: el fragmento filmado entre dos cortes. Varios planos que ocurren en un mismo lugar y tiempo forman una <b>escena</b>. Un conjunto de escenas con unidad narrativa (una persecución, una boda) forma una <b>secuencia</b>.</p>
      <p>El <b>fotograma</b> es cada una de las imágenes fijas que, a 24 por segundo, crean la ilusión de movimiento. El <b>plano secuencia</b> es un caso especial: toda una secuencia rodada en un único plano, sin cortes.</p>`,
      svg: B.capas("Unidades del lenguaje cinematográfico, de la mayor a la menor", [["Secuencia", "unidad narrativa"], ["Escena", "mismo lugar y tiempo"], ["Plano", "entre dos cortes"], ["Fotograma", "24 por segundo"]]),
    },
    {
      h: "La escala de planos",
      html: `<p>Según la porción de la figura humana que muestran, los planos se ordenan en una escala. El <b>gran plano general</b> y el <b>plano general</b> enseñan el paisaje o el espacio: sitúan y pueden transmitir soledad. El <b>plano entero</b> muestra la figura completa. El <b>plano americano</b> corta por las rodillas (nació en el western para ver las pistolas). El <b>plano medio</b> corta por la cintura y es el de la conversación.</p>
      <p>El <b>primer plano</b> muestra el rostro y transmite emoción. El <b>plano detalle</b> aísla un objeto o parte del cuerpo y lo hace decisivo: una mano que tiembla, una llave.</p>`,
      svg: B.planos("Escala de planos: general, entero, americano, medio, primer plano y detalle"),
      video: { id: "WsCETCsKkGE", titulo: "Tipos de planos más usados en cine y televisión", canal: "Aprendercine.com", vistas: 391090 },
    },
    {
      h: "Los ángulos de cámara",
      html: `<p>El <b>ángulo</b> es la posición de la cámara respecto al sujeto. El <b>normal</b>, a la altura de los ojos, es neutro. El <b>picado</b>, desde arriba, empequeñece al personaje y lo muestra débil o vulnerable. El <b>contrapicado</b>, desde abajo, lo engrandece: poder, amenaza o heroísmo.</p>
      <p>El <b>cenital</b> mira desde justo encima, y el <b>nadir</b>, desde justo debajo. El <b>plano holandés</b> o aberrante inclina el horizonte para sugerir desequilibrio, locura o tensión.</p>`,
      svg: B.angulos("Ángulos de cámara: picado, normal y contrapicado"),
    },
    {
      h: "Los movimientos de cámara",
      html: `<p>La cámara puede moverse sin desplazarse, girando sobre su eje: es la <b>panorámica</b>, horizontal o vertical, que sirve para recorrer un espacio o seguir a alguien. Si la cámara se desplaza, hablamos de <b>travelling</b>: de avance, de retroceso, lateral o circular, a menudo sobre raíles o con estabilizadores.</p>
      <p>La <b>grúa</b> y el <b>dron</b> elevan la cámara y ofrecen vistas espectaculares. El <b>zoom</b> no mueve la cámara: cambia la distancia focal del objetivo. Y la <b>cámara en mano</b> da sensación de realismo y nerviosismo, como en un reportaje.</p>`,
      svg: B.cajas("Movimientos de cámara", [["Panorámica", "gira sobre su eje"], ["Travelling", "se desplaza"], ["Grúa / dron", "sube y vuela"], ["Cámara en mano", "realismo, tensión"]]),
      video: { id: "iN0rf5vUfxc", titulo: "15 movimientos de cámara cinematográficos", canal: "Aprendercine.com", vistas: 1053280 },
    },
    {
      h: "Composición, luz y color",
      html: `<p>Dentro del encuadre se aplican las mismas leyes que en la fotografía: tercios, líneas, profundidad, simetría. La <b>puesta en escena</b> incluye además el decorado, el vestuario, el maquillaje y la interpretación de los actores.</p>
      <p>La <b>iluminación</b> define el tono: la <b>clave alta</b> (mucha luz, pocas sombras) es propia de la comedia; la <b>clave baja</b> (sombras profundas y contraste) del cine negro y de terror. El <b>color</b> también narra: paletas frías para la tristeza o el futuro, cálidas para el recuerdo o la pasión.</p>`,
      svg: B.comparar("Clave alta y clave baja de iluminación", ["Clave alta", ["mucha luz", "pocas sombras", "comedia, musical", "optimismo"]], ["Clave baja", ["sombras fuertes", "contraste", "cine negro, terror", "misterio"]]),
    },
    {
      h: "El montaje",
      html: `<p>El <b>montaje</b> es la selección y la unión de los planos. Es la gramática del cine: decide el orden, la duración y el ritmo. Puede ser <b>narrativo</b> (cuenta la historia de forma clara), <b>expresivo</b> (busca emoción o ideas) o <b>paralelo</b> (alterna dos acciones que ocurren a la vez en lugares distintos).</p>
      <p>El experimento de <b>Kuleshov</b> mostró que el mismo rostro neutro parece hambriento, triste o enamorado según el plano que va después: el significado nace de la unión de imágenes. El <b>raccord</b> es la continuidad entre planos (miradas, objetos, luz) que hace que el corte no se note.</p>`,
      svg: B.flujo("Efecto Kuleshov: un mismo rostro cambia de sentido según el plano siguiente", ["Rostro neutro + plato de sopa = hambre", "Rostro neutro + ataúd = tristeza", "Rostro neutro + niña jugando = ternura"]),
      video: { id: "BE-2uc_25sI", titulo: "Qué es el efecto Kuleshov", canal: "ZEPfilms", vistas: 172426 },
    },
    {
      h: "Transiciones y tiempo",
      html: `<p>El paso entre planos puede ser un <b>corte</b> directo (el más común), un <b>fundido</b> a negro (fin de una etapa), un <b>encadenado</b> (una imagen se disuelve en otra y sugiere paso del tiempo) o una <b>cortinilla</b>.</p>
      <p>El montaje manipula el tiempo: la <b>elipsis</b> elimina lo que no interesa; el <b>flashback</b> vuelve al pasado y el <b>flashforward</b> adelanta el futuro; la <b>cámara lenta</b> dilata un instante y la rápida lo comprime.</p>`,
      svg: B.cajas("Manipular el tiempo en el cine", [["Elipsis", "suprime tiempo"], ["Flashback", "vuelve atrás"], ["Cámara lenta", "dilata"], ["Encadenado", "pasa el tiempo"]]),
    },
    {
      h: "El sonido",
      html: `<p>La banda sonora de una película tiene cuatro componentes: los <b>diálogos</b>, la <b>música</b>, los <b>efectos sonoros</b> y el <b>silencio</b>. El sonido puede ser <b>diegético</b>, si pertenece al mundo de la historia (una radio que suena en la escena), o <b>extradiegético</b>, si solo lo oye el espectador (la música de fondo o la voz en off de un narrador).</p>
      <p>El sonido orienta la emoción: la misma imagen de una playa da paz con olas y guitarra, y miedo con una nota grave repetida. Muchas veces, lo que más asusta es lo que <mark>se oye pero no se ve</mark>.</p>`,
      svg: B.estrella("Componentes de la banda sonora", "Sonido", ["Diálogos", "Música", "Efectos", "Silencio"]),
    },
  ],
  figura: {
    titulo: "Las cuatro herramientas del cineasta",
    items: [["Plano", "▭", "general, medio", "primer plano"], ["Ángulo", "↘ → ↗", "picado, normal", "contrapicado"], ["Movimiento", "⟲ ⇢", "panorámica", "travelling"], ["Montaje", "✂", "orden y ritmo", "Kuleshov"]],
  },
  video: { id: "CmPg9POBvV0", titulo: "Cinematografía. Lenguaje audiovisual (I): escalas de plano, ángulos, movimientos", canal: "Officium", vistas: 432102 },
  quiz: [
    ["La unidad mínima del lenguaje cinematográfico es…", ["la escena", "el plano", "la secuencia", "el guion"], 1, "Fragmento entre dos cortes."],
    ["¿Cuántos fotogramas por segundo usa habitualmente el cine?", ["12", "24", "60", "100"], 1, "24 fps es el estándar."],
    ["El plano que corta por las rodillas es el…", ["medio", "americano", "entero", "detalle"], 1, "Nació en el western."],
    ["Para transmitir la emoción de un personaje se usa sobre todo el…", ["plano general", "primer plano", "plano entero", "gran plano general"], 1, "El rostro ocupa el encuadre."],
    ["Un contrapicado hace que el personaje parezca…", ["débil", "poderoso", "lejano", "borroso"], 1, "La cámara lo mira desde abajo."],
    ["La cámara gira sobre su eje sin desplazarse en una…", ["panorámica", "travelling", "grúa", "cámara en mano"], 0, "Puede ser horizontal o vertical."],
    ["El zoom…", ["desplaza la cámara", "cambia la distancia focal del objetivo", "es un ángulo", "es una transición"], 1, "La cámara no se mueve."],
    ["Alternar dos acciones simultáneas en lugares distintos es montaje…", ["narrativo", "paralelo", "expresivo", "lineal"], 1, "Típico en rescates de última hora."],
    ["El raccord es…", ["un tipo de plano", "la continuidad entre planos", "un movimiento", "un sonido"], 1, "Evita errores de continuidad."],
    ["La música de fondo que los personajes no oyen es sonido…", ["diegético", "extradiegético", "ambiente", "directo"], 1, "Solo la oye el espectador."],
  ],
  examen: [
    ["Un western muestra a un vaquero diminuto en un desierto inmenso. Es un…", ["primer plano", "gran plano general", "plano detalle", "plano medio"], 1, "Transmite soledad e inmensidad."],
    ["El horizonte inclinado sugiere…", ["calma", "desequilibrio o tensión", "realismo", "paso del tiempo"], 1, "Es el plano holandés."],
    ["Una imagen que se disuelve lentamente en otra es un…", ["corte", "encadenado", "fundido a negro", "plano secuencia"], 1, "Sugiere paso del tiempo."],
    ["Un personaje pone la radio y suena una canción que él escucha. El sonido es…", ["extradiegético", "diegético", "voz en off", "silencio"], 1, "Pertenece al mundo de la historia."],
    ["El efecto Kuleshov demuestra que…", ["el actor debe sobreactuar", "el sentido de un plano depende del montaje", "el color es lo más importante", "el sonido es innecesario"], 1, "La unión de planos crea significado."],
  ],
  feynman: ["Diferencia entre plano, escena y secuencia", "Qué expresa cada ángulo de cámara", "Qué es el efecto Kuleshov", "Sonido diegético y extradiegético con ejemplos"],
  mapa: ["LENGUAJE DEL CINE", [["Unidades", "plano · escena · secuencia"], ["Cámara", "planos · ángulos · movimientos"], ["Montaje", "orden · ritmo · raccord"], ["Sonido", "diálogo · música · efectos"]]],
  tarjetas: [
    ["Plano", "Fragmento filmado entre dos cortes."],
    ["Secuencia", "Conjunto de escenas con unidad narrativa."],
    ["Plano americano", "Corta la figura por las rodillas."],
    ["Picado / contrapicado", "Cámara desde arriba (empequeñece) / desde abajo (engrandece)."],
    ["Travelling", "Movimiento en que la cámara se desplaza."],
    ["Montaje", "Selección, orden y unión de los planos."],
    ["Raccord", "Continuidad entre planos."],
    ["Sonido diegético", "El que pertenece al mundo de la historia."],
  ],
  ejemplos: [
    ["Planifica en cuatro planos la escena «una chica recibe una mala noticia por el móvil».", ["Plano general: la chica camina por un parque.", "Plano detalle: la pantalla del móvil con el mensaje.", "Primer plano: su rostro cambia de expresión.", "Gran plano general en picado: queda sola y pequeña en el parque."], "Del contexto al detalle, la emoción y el aislamiento final."],
    ["Explica qué siente el espectador ante un travelling lento de avance hacia una puerta cerrada con música grave.", ["El avance nos acerca, como si entráramos nosotros.", "La lentitud genera espera y la música grave anuncia peligro.", "La puerta cerrada oculta información: suspense."], "Suspense: la cámara y el sonido crean tensión antes de que pase nada."],
    ["Identifica el tipo de montaje: se alternan planos de un tren que avanza y de una persona atada a las vías.", ["Hay dos acciones simultáneas.", "Ocurren en lugares distintos que van a encontrarse.", "La alternancia aumenta la tensión."], "Montaje paralelo."],
  ],
  errores: [
    "Confundir zoom con travelling: en el zoom la cámara no se mueve.",
    "Llamar «escena» a cualquier plano.",
    "Pensar que el montaje solo sirve para quitar lo que sobra, cuando también crea significado.",
    "Olvidar el sonido al analizar una secuencia.",
  ],
  ejercicios: {
    b: [
      ["Ordena de más abierto a más cerrado: primer plano, plano general, plano medio, plano detalle, plano americano.", "Plano general, plano americano, plano medio, primer plano, plano detalle."],
      ["Define picado y contrapicado y su efecto.", "Picado: cámara desde arriba, empequeñece al personaje. Contrapicado: desde abajo, lo engrandece."],
      ["Diferencia panorámica y travelling.", "En la panorámica la cámara gira sobre su eje; en el travelling se desplaza."],
      ["Cita los cuatro componentes de la banda sonora.", "Diálogos, música, efectos sonoros y silencio."],
    ],
    m: [
      ["¿Por qué el plano americano recibe ese nombre?", "Porque se popularizó en el western estadounidense para mostrar al personaje con el arma en la cadera."],
      ["Explica qué es un plano secuencia y qué efecto produce.", "Una secuencia entera rodada en un solo plano sin cortes; da realismo, continuidad y sensación de tiempo real."],
      ["¿Qué tipo de iluminación usarías en una película de detectives de los años cuarenta? ¿Por qué?", "Clave baja: sombras marcadas y contraste, que crean misterio y ambigüedad moral, como en el cine negro."],
      ["Pon un ejemplo de flashback y explica para qué sirve.", "Un personaje adulto recuerda su infancia y se muestra esa escena; sirve para explicar causas, traumas o motivaciones."],
    ],
    a: [
      ["Analiza una secuencia de un minuto de una película que te guste: planos, ángulos, movimientos, montaje y sonido.", "Respuesta abierta: listar los planos, identificar ángulos y movimientos, describir el ritmo del montaje y el papel del sonido, y explicar el efecto global."],
      ["Rueda con el móvil tu propio experimento Kuleshov con un compañero y tres planos distintos. Explica los resultados.", "Respuesta abierta: el mismo rostro neutro se interpreta distinto según el plano que le sigue; se comprueba que el montaje crea sentido."],
    ],
  },
  glosario: [
    ["Fotograma", "Cada imagen fija de una película."],
    ["Escena", "Planos que ocurren en un mismo lugar y tiempo."],
    ["Plano secuencia", "Secuencia rodada en un solo plano sin cortes."],
    ["Panorámica", "Giro de la cámara sobre su eje."],
    ["Plano holandés", "Plano con el horizonte inclinado."],
    ["Montaje paralelo", "Alternancia de acciones simultáneas en lugares distintos."],
    ["Fundido", "Transición en la que la imagen aparece o desaparece desde un color."],
    ["Encadenado", "Transición en la que una imagen se disuelve en otra."],
    ["Voz en off", "Voz que se oye sin que su emisor aparezca en el plano."],
    ["Puesta en escena", "Organización de todo lo que aparece ante la cámara."],
  ],
  situacion: {
    titulo: "Un minuto de cine",
    reto: "Rodar con el móvil una secuencia de un minuto sin diálogos que se entienda solo con planos, montaje y sonido.",
    pasos: [
      "Pensad una situación sencilla con inicio, tensión y final.",
      "Dibujad un guion gráfico de 8 a 10 planos con escala, ángulo y movimiento.",
      "Rodad cuidando el raccord y montad con una app gratuita.",
      "Añadid música o efectos y proyectad en clase explicando las decisiones.",
    ],
    producto: "Una secuencia de un minuto y su guion gráfico.",
    evaluacion: [
      "La historia se entiende sin diálogos.",
      "Se usan al menos cinco tipos de plano y dos ángulos.",
      "El montaje mantiene la continuidad y el ritmo.",
      "El sonido refuerza la emoción.",
    ],
  },
  familias: [
    "Ved juntos una escena y pausad para identificar el tipo de plano.",
    "Comentad qué música os da más miedo o más alegría en el cine.",
    "Animadle a grabar un vídeo familiar pensando antes los planos.",
    "Buscad el plano secuencia de alguna película famosa y comentadlo.",
  ],
  saberes: "El lenguaje cinematográfico: unidades (fotograma, plano, escena, secuencia), escala de planos, ángulos y movimientos de cámara, puesta en escena, iluminación y color, montaje (tipos, raccord, efecto Kuleshov), transiciones, tratamiento del tiempo y sonido diegético y extradiegético.",
  ideas: [
    "Proyectar una escena sin sonido y luego con sonido para comparar.",
    "Juego de tarjetas: cada alumno recibe un plano y lo representa con el móvil.",
    "Reconstruir con fotos el efecto Kuleshov en clase.",
    "Analizar en grupo el inicio de una película clásica plano a plano.",
  ],
  fuentes: [
    { t: "Lenguaje cinematográfico, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Lenguaje_cinematogr%C3%A1fico" },
    { t: "Efecto Kuleshov, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Efecto_Kuleshov" },
  ],
});
