// Diseño, 2º de Bachillerato. Tema 9 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-dis");

module.exports = B.tema({
  titulo: "Diseño digital e interactivo: interfaces y experiencia de usuario",
  minutos: 60,
  objetivos: [
    "Distinguir diseño de experiencia de usuario (UX) y de interfaz (UI)",
    "Organizar la información de una web o app con arquitectura de la información y wireframes",
    "Aplicar principios de usabilidad, diseño adaptable y accesibilidad digital",
    "Valorar éticamente el diseño digital: patrones engañosos y bienestar del usuario",
  ],
  claves: ["UX", "UI", "usabilidad", "wireframe", "prototipo interactivo", "diseño adaptable", "accesibilidad", "patrones oscuros"],
  pregunta: {
    texto: "¿Por qué algunas apps se entienden solas y otras te hacen perder la paciencia?",
    respuesta: "Porque detrás de las buenas hay un <mark>diseño de experiencia de usuario</mark>: alguien estudió qué necesitas, ordenó la información y probó la app con personas reales antes de publicarla.",
  },
  lectura: {
    titulo: "El botón de 300 millones",
    html: `<p>El experto en usabilidad Jared Spool contó el caso de una gran tienda en línea cuyo formulario de compra obligaba a registrarse antes de pagar. Muchos clientes olvidaban su contraseña o no querían crear otra cuenta, y abandonaban la compra.</p>
    <p>El equipo de diseño cambió el botón «Registrarse» por «Continuar» y explicó que se podía comprar como invitado. Según Spool, las ventas subieron en unos 300 millones de dólares el primer año. Un detalle de diseño, descubierto observando a usuarios reales, cambió el resultado. Así trabaja el diseño digital: con pruebas, datos y empatía.</p>`,
  },
  secciones: [2, 3, 2],
  bloques: [
    {
      h: "UX y UI",
      html: `<p>El diseño digital da forma a webs, apps, videojuegos, cajeros o pantallas de un coche. Se habla de dos disciplinas complementarias. El diseño de <b>experiencia de usuario</b> (<b>UX</b>, <i>user experience</i>) se ocupa de cómo se siente una persona al usar un producto: si encuentra lo que busca, si le resulta fácil, si confía.</p>
      <p>El diseño de <b>interfaz de usuario</b> (<b>UI</b>, <i>user interface</i>) se ocupa de lo que se ve y se toca: botones, iconos, colores, tipografía, animaciones. Una UI muy bonita con una mala UX frustra; una buena UX con una UI pobre transmite poca confianza. Se necesitan las dos.</p>`,
      svg: B.comparar("Dos caras del diseño digital", ["UX", ["necesidades", "estructura y flujos", "facilidad de uso", "pruebas con usuarios"]], ["UI", ["aspecto visual", "botones e iconos", "color y tipografía", "microanimaciones"]]),
      video: { id: "zUZSSkRQXQQ", titulo: "UX y UI explicado: ¿qué hacen los expertos en usabilidad?", canal: "Platzi", vistas: 224702 },
    },
    {
      h: "Investigar y ordenar la información",
      html: `<p>El proceso empieza, como cualquier proyecto, investigando a los usuarios: entrevistas, encuestas, análisis de la competencia y <b>mapas del recorrido del usuario</b> (<i>user journey</i>), que muestran cada paso y emoción desde que alguien tiene una necesidad hasta que la resuelve.</p>
      <p>Después se trabaja la <b>arquitectura de la información</b>: cómo se organizan y se nombran los contenidos para que se encuentren con facilidad. Se dibuja un <b>mapa del sitio</b> con las pantallas y sus relaciones, y se define la navegación: menús, buscador, migas de pan. Una técnica útil es la <b>ordenación de tarjetas</b>: pedir a usuarios que agrupen los contenidos como ellos los entienden.</p>`,
      svg: B.flujo("Recorrido de compra de una entrada", ["Busca el concierto", "Elige fecha y asiento", "Paga", "Recibe la entrada en el móvil", "Accede con un código"]),
    },
    {
      h: "Wireframes y prototipos",
      html: `<p>El <b>wireframe</b> es el boceto de una pantalla: cajas grises que indican dónde va cada elemento (cabecera, imagen, texto, botones) sin colores ni imágenes definitivas. Permite discutir la estructura sin distraerse con el aspecto.</p>
      <p>Después se hace un <b>mockup</b>, con el diseño visual completo, y un <b>prototipo interactivo</b> que simula la navegación: al pulsar un botón se pasa a la pantalla siguiente. Herramientas como Figma o Penpot permiten crearlos sin programar y probarlos con usuarios antes de invertir en el desarrollo.</p>`,
      svg: B.capas("De la idea a la pantalla", [["Boceto", "papel y lápiz"], ["Wireframe", "estructura en gris"], ["Mockup", "diseño visual completo"], ["Prototipo", "simula la navegación"]]),
    },
    {
      h: "Usabilidad",
      html: `<p>La <b>usabilidad</b> es la facilidad con que una persona usa un producto para conseguir su objetivo. Jakob Nielsen propuso diez <b>heurísticas</b> o reglas, entre ellas: mostrar el estado del sistema (por ejemplo, una barra de carga), hablar el idioma del usuario, permitir deshacer, ser coherente, prevenir errores y explicar cómo solucionarlos.</p>
      <p>La usabilidad se mide con <b>pruebas con usuarios</b>: se les pide hacer tareas concretas mientras piensan en voz alta y se observa dónde dudan o se equivocan. Bastan unas cinco personas para descubrir la mayoría de los problemas importantes.</p>`,
      svg: B.cajas("Reglas de usabilidad", [["Informar", "estado del|sistema"], ["Coherencia", "lo mismo,|igual siempre"], ["Deshacer", "salida|de emergencia"], ["Prevenir", "errores antes|de que ocurran"]]),
    },
    {
      h: "Elementos de la interfaz",
      html: `<p>La interfaz se construye con <b>componentes</b>: botones, campos de formulario, menús, pestañas, tarjetas, iconos. Los equipos grandes los reúnen en un <b>sistema de diseño</b>, una biblioteca con reglas de color, tipografía, espaciado y comportamiento, para que todas las pantallas sean coherentes.</p>
      <p>En pantalla se trabaja en RGB y en píxeles, con retículas de columnas. Los botones táctiles deben medir al menos unos 44 píxeles para pulsarse con el dedo. Las <b>microinteracciones</b> (un botón que cambia al pulsarlo, un corazón que late al dar «me gusta») confirman al usuario que su acción ha funcionado.</p>`,
      svg: B.estrella("Componentes de interfaz", "Interfaz", ["Botones", "Formularios", "Menús", "Iconos", "Tarjetas"]),
    },
    {
      h: "Diseño adaptable y accesible",
      html: `<p>Una web se ve en móviles, tabletas, ordenadores y televisores. El <b>diseño adaptable</b> (<i>responsive</i>) reorganiza el contenido según el ancho de la pantalla: tres columnas en el ordenador se convierten en una en el móvil. Hoy se diseña primero para el móvil (<i>mobile first</i>), porque es la pantalla más usada y obliga a priorizar.</p>
      <p>La <b>accesibilidad digital</b> permite que todas las personas usen el producto: contraste suficiente, textos alternativos en las imágenes para lectores de pantalla, navegación con teclado y subtítulos en los vídeos. Las pautas internacionales WCAG la regulan, y en España es obligatoria en las webs públicas.</p>`,
      svg: B.comparar("Una web en dos pantallas", ["Ordenador", ["tres columnas", "menú horizontal", "imágenes grandes", "ratón"]], ["Móvil", ["una columna", "menú plegado", "botones grandes", "dedo"]]),
    },
    {
      h: "Ética del diseño digital",
      html: `<p>El diseño digital puede ayudar o manipular. Los <b>patrones oscuros</b> (<i>dark patterns</i>) son trucos de interfaz que empujan al usuario a hacer algo que no quiere: casillas marcadas por defecto para recibir publicidad, botones de cancelar escondidos, cuentas atrás falsas o suscripciones muy difíciles de dar de baja.</p>
      <p>También preocupan los diseños pensados para <b>retener la atención</b> el mayor tiempo posible, como el desplazamiento infinito o las notificaciones constantes. Un diseñador responsable respeta la privacidad, el tiempo y la libertad de decisión del usuario. La normativa europea ya prohíbe algunos de estos patrones.</p>`,
      svg: B.comparar("Ayudar o manipular", ["Diseño honesto", ["opciones claras", "darse de baja fácil", "privacidad", "pausas"]], ["Patrón oscuro", ["casillas premarcadas", "cancelar escondido", "falsa urgencia", "scroll infinito"]]),
    },
  ],
  figura: {
    titulo: "Diseño digital en cuatro claves",
    items: [["Usuario", "👤", "investigar y", "empatizar"], ["Estructura", "▤", "arquitectura y", "wireframes"], ["Interfaz", "◉", "componentes y", "sistema"], ["Para todos", "♿", "adaptable y", "accesible"]],
  },
  video: { id: "dVwH98Ln5Vs", titulo: "Qué hace un diseñador UX UI y todo sobre esta profesión", canal: "Estudiar con Manu", vistas: 232044 },
  quiz: [
    ["UX se ocupa de…", ["solo los colores", "la experiencia de la persona al usar el producto", "programar", "vender anuncios"], 1, "User experience."],
    ["UI se ocupa de…", ["lo que se ve y se toca en la pantalla", "la investigación de mercado", "el servidor", "el precio"], 0, "User interface."],
    ["La arquitectura de la información sirve para…", ["construir edificios", "organizar y nombrar los contenidos para encontrarlos", "elegir colores", "comprimir imágenes"], 1, "Mapa del sitio, navegación."],
    ["Un wireframe es…", ["el diseño final a color", "el esquema de una pantalla en cajas grises", "un cable", "un vídeo"], 1, "Estructura sin aspecto."],
    ["Un prototipo interactivo permite…", ["imprimir la web", "simular la navegación y probarla", "programar el servidor", "nada"], 1, "Antes del desarrollo."],
    ["¿Cuántos usuarios suelen bastar para descubrir la mayoría de los problemas graves?", ["Uno", "Unos cinco", "Mil", "Ninguno"], 1, "Según Nielsen."],
    ["Un sistema de diseño es…", ["un ordenador", "una biblioteca de componentes y reglas comunes", "un logotipo", "un tipo de letra"], 1, "Coherencia entre pantallas."],
    ["Mobile first significa…", ["solo hacer apps", "diseñar primero para la pantalla del móvil", "no hacer web", "usar el móvil para diseñar"], 1, "Priorizar el contenido."],
    ["El texto alternativo de una imagen sirve…", ["para decorar", "para que los lectores de pantalla la describan", "para el SEO solo", "para nada"], 1, "Accesibilidad."],
    ["Una casilla de publicidad ya marcada por defecto es…", ["un patrón oscuro", "buena usabilidad", "un wireframe", "un sistema de diseño"], 0, "Manipula la decisión."],
  ],
  examen: [
    ["Una app es preciosa, pero nadie encuentra el botón de pagar. ¿Qué falla?", ["La UI", "La UX", "El logotipo", "El servidor"], 1, "La experiencia de uso."],
    ["Al enviar un formulario no pasa nada visible y el usuario pulsa cinco veces. ¿Qué regla se incumple?", ["Mostrar el estado del sistema", "Coherencia", "Estética", "Mobile first"], 0, "Falta respuesta."],
    ["Tu web tiene tres columnas y en el móvil se ve diminuta. ¿Qué necesitas?", ["Más columnas", "Diseño adaptable", "Más colores", "Un patrón oscuro"], 1, "Responsive."],
    ["Darse de alta en un servicio lleva un clic y darse de baja exige llamar por teléfono. ¿Qué es?", ["Buena práctica", "Un patrón oscuro", "Usabilidad excelente", "Accesibilidad"], 1, "Dificultad deliberada."],
    ["Quieres comprobar la estructura de una app antes de elegir colores. ¿Qué haces?", ["Un mockup", "Un wireframe", "Un logotipo", "Un anuncio"], 1, "Estructura primero."],
  ],
  feynman: ["Diferencia entre UX y UI con un ejemplo", "Qué es un wireframe y para qué sirve", "Cómo se hace una prueba de usabilidad", "Qué son los patrones oscuros"],
  mapa: ["DISEÑO DIGITAL", [["UX", "investigar · recorrido · arquitectura"], ["UI", "componentes · sistema · microinteracción"], ["Probar", "wireframe · prototipo · test"], ["Para todos", "adaptable · accesible · ético"]]],
  tarjetas: [
    ["UX", "Diseño de la experiencia de la persona al usar un producto."],
    ["UI", "Diseño de la interfaz: lo que se ve y se toca."],
    ["Arquitectura de la información", "Organización y nombre de los contenidos de un sitio."],
    ["Wireframe", "Esquema de una pantalla con cajas, sin diseño visual."],
    ["Usabilidad", "Facilidad con que se usa un producto para lograr un objetivo."],
    ["Sistema de diseño", "Biblioteca de componentes y reglas para interfaces coherentes."],
    ["Diseño adaptable", "Diseño que se reorganiza según el tamaño de la pantalla."],
    ["Patrón oscuro", "Truco de interfaz que manipula al usuario."],
  ],
  ejemplos: [
    ["Dibuja el mapa del sitio de la web de un club deportivo.", ["Inicio.", "El club (historia, equipo), Equipos (por categorías), Calendario, Noticias, Inscripción, Contacto.", "Inscripción enlazada desde inicio y desde cada equipo."], "Seis secciones principales, la acción clave siempre a mano."],
    ["Organiza una prueba de usabilidad de la web del instituto.", ["Tareas: encontrar el calendario de exámenes y el correo de secretaría.", "Cinco usuarios: alumnado y familias.", "Observar sin ayudar, anotar dudas y tiempos."], "Lista de problemas priorizados."],
    ["Corrige un formulario de alta con un patrón oscuro.", ["Detectar: casilla de publicidad premarcada.", "Cambiar: casilla desmarcada y texto claro.", "Añadir: enlace visible para darse de baja."], "Formulario honesto y conforme a la ley."],
  ],
  errores: [
    "Confundir UX con «hacer bonita» la pantalla.",
    "Diseñar solo para el ordenador y olvidar el móvil.",
    "No probar con usuarios hasta que la app está programada.",
    "Usar trucos que manipulan al usuario para conseguir clics.",
  ],
  ejercicios: {
    b: [
      ["Define UX y UI.", "UX: experiencia de la persona al usar un producto. UI: interfaz, lo que se ve y se toca."],
      ["¿Qué es un wireframe?", "Un esquema de pantalla con cajas grises que muestra la estructura sin diseño visual."],
      ["Cita tres medidas de accesibilidad digital.", "Contraste suficiente, texto alternativo en imágenes, navegación con teclado, subtítulos."],
      ["Pon dos ejemplos de patrones oscuros.", "Casillas premarcadas, botón de cancelar escondido, falsa urgencia, baja muy difícil."],
    ],
    m: [
      ["Dibuja el recorrido de usuario para pedir cita en el médico desde una app.", "Respuesta abierta: pasos, emociones y puntos de dolor en cada paso."],
      ["Haz el wireframe de la pantalla de inicio de una app de deberes en versión móvil.", "Respuesta gráfica: cabecera, lista de tareas, botón de añadir y navegación inferior."],
      ["Explica por qué conviene diseñar primero para el móvil.", "Es la pantalla más usada y la más pequeña: obliga a priorizar lo esencial; luego se amplía para pantallas grandes."],
      ["Aplica tres heurísticas de Nielsen a una app que uses a diario.", "Respuesta abierta: identificar si muestra el estado, permite deshacer y es coherente, con ejemplos."],
    ],
    a: [
      ["Diseña un prototipo interactivo de tres pantallas y pruébalo con cinco compañeros.", "Respuesta abierta: informe con tareas, observaciones y cambios propuestos."],
      ["Escribe un decálogo ético para diseñadores digitales.", "Respuesta abierta: privacidad, transparencia, accesibilidad, respeto del tiempo y decisiones libres."],
    ],
  },
  glosario: [
    ["User journey", "Mapa de los pasos y emociones de un usuario."],
    ["Mapa del sitio", "Esquema de las pantallas y sus relaciones."],
    ["Migas de pan", "Ruta que indica dónde está el usuario en una web."],
    ["Heurística", "Regla práctica para evaluar la usabilidad."],
    ["Microinteracción", "Pequeña respuesta visual a una acción del usuario."],
    ["Responsive", "Diseño que se adapta a cada pantalla."],
    ["WCAG", "Pautas internacionales de accesibilidad web."],
    ["Lector de pantalla", "Programa que lee en voz alta el contenido para personas ciegas."],
  ],
  situacion: {
    titulo: "La app que necesitamos",
    reto: "Diseñar el prototipo de una app útil para el alumnado del centro.",
    pasos: [
      "Encuestad al alumnado sobre un problema digital del día a día.",
      "Dibujad el recorrido de usuario y el mapa de pantallas.",
      "Haced wireframes y después un prototipo interactivo.",
      "Probadlo con cinco usuarios, mejoradlo y comprobad la accesibilidad.",
    ],
    producto: "Prototipo interactivo probado, con informe de usabilidad y accesibilidad.",
    evaluacion: [
      "Responde a una necesidad real detectada.",
      "La estructura y la navegación son claras.",
      "Se aplican mejoras a partir de las pruebas.",
      "Cumple criterios básicos de accesibilidad y ética.",
    ],
  },
  familias: [
    "Pedidle que os enseñe a usar una app y observad dónde os perdéis.",
    "Comentad qué apps os enganchan y cómo lo consiguen.",
    "Revisad juntos las suscripciones activas y lo fácil o difícil que es darse de baja.",
    "Activad el lector de pantalla del móvil y probad a navegar con él.",
  ],
  saberes: "Diseño digital e interactivo: experiencia de usuario (UX) e interfaz (UI); investigación y recorrido del usuario; arquitectura de la información; wireframes, mockups y prototipos interactivos; usabilidad y pruebas con usuarios; sistemas de diseño; diseño adaptable y accesibilidad digital; ética y patrones oscuros",
  ideas: [
    "Pruebas de usabilidad de la web del centro con familias.",
    "Uso de herramientas libres de prototipado (Penpot) en el aula.",
    "Caza de patrones oscuros en apps populares.",
    "Comprobación de accesibilidad con herramientas automáticas.",
  ],
  fuentes: [
    { t: "Pautas de Accesibilidad para el Contenido Web (WCAG), W3C", url: "https://www.w3.org/WAI/standards-guidelines/wcag/es" },
    { t: "Diseño de experiencia de usuario, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dise%C3%B1o_de_experiencia_de_usuario" },
  ],
});
