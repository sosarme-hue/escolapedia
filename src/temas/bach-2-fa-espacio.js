// Fundamentos Artísticos 2º Bachillerato · Tema 5. La representación del espacio: de la pintura primitiva al cubismo. Dibujos propios en SVG.
const { tema, CITA, OBRA, cajas, flujo, versus, rueda, cuadro, crono, linea, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "La representación del espacio: de la pintura primitiva al cubismo",
  saber: ["B"],
  objetivos: [
    "Reconocer los recursos para sugerir profundidad en una superficie plana",
    "Explicar cómo representaron el espacio la pintura prehistórica, egipcia y medieval",
    "Describir la invención de la perspectiva lineal en el Renacimiento",
    "Distinguir la perspectiva lineal de la aérea y conocer sus usos posteriores",
    "Explicar la ruptura cubista y su nueva manera de representar el espacio",
  ],
  claves: ["superposición", "perspectiva jerárquica", "perspectiva lineal", "punto de fuga", "línea de horizonte", "perspectiva aérea", "sfumato", "escorzo", "cubismo analítico", "cubismo sintético", "collage", "simultaneidad"],
  pregunta: {
    texto: "¿Cómo consigue un pintor que una pared plana parezca abrirse hacia una capilla profunda?",
    respuesta: "Con la <mark>perspectiva lineal</mark>. Hacia 1427, Masaccio pintó en Santa Maria Novella de Florencia <i>La Trinidad</i>: todas las líneas de la bóveda pintada convergen en un único punto, situado a la altura de los ojos del espectador. El resultado es una capilla que parece real. Durante casi cinco siglos los pintores siguieron ese sistema, hasta que a comienzos del siglo XX los cubistas lo rompieron para enseñar los objetos desde varios puntos de vista a la vez.",
  },
  lectura: {
    titulo: "El experimento del espejo",
    html: `<p>Florencia, hacia 1415. El arquitecto Filippo Brunelleschi se coloca en la puerta de la catedral con una pequeña tabla en la que ha pintado el baptisterio de enfrente. La tabla tiene un agujero en el centro.</p><p>Brunelleschi pide a sus amigos que miren por el agujero desde detrás de la tabla y que sostengan un espejo delante. En el espejo ven reflejada la pintura, y cuando apartan el espejo, ven el baptisterio real. Las dos imágenes coinciden casi perfectamente. Acababa de demostrar que se podía construir con reglas matemáticas una imagen igual a la que ve el ojo. Era el nacimiento de la perspectiva lineal, una de las invenciones más influyentes de la historia del arte.</p>`,
  },
  bloques: [
    { h: "El problema del espacio en la pintura", p: [
      "Pintar es representar un mundo de tres dimensiones sobre una superficie que solo tiene dos. Para crear <mark>profundidad</mark> los artistas usan varios recursos: la <b>superposición</b> (lo que tapa está delante), la <b>disminución del tamaño</b> (lo lejano se ve más pequeño), la <b>posición en el plano</b> (lo lejano, más arriba), la <b>perspectiva lineal</b> y la <b>perspectiva aérea</b> (lo lejano, más azulado y difuso).",
      "No todas las culturas han querido imitar el espacio que ve el ojo. A veces importaba más mostrar lo que se sabe de las cosas, su importancia o su sentido sagrado. Por eso la historia de la representación espacial no es un progreso lineal hacia el realismo, sino una sucesión de <b>sistemas</b> distintos, cada uno con su propia lógica.",
    ], svg: cajas("Recursos de profundidad", [["Superposición", "lo que tapa, delante"], ["Tamaño", "lejos, más pequeño"], ["Altura", "lejos, más arriba"], ["Perspectiva lineal", "líneas que convergen"], ["Perspectiva aérea", "lejos, azul y difuso"], ["Luz y sombra", "dan volumen"]]) },
    { h: "La pintura prehistórica y egipcia", p: [
      "En las cuevas de Altamira o Lascaux, los animales aparecen sueltos sobre la roca, sin suelo ni horizonte. Los artistas aprovechaban los <b>relieves naturales</b> de la piedra para dar volumen a los bisontes. A veces superponían figuras, pero no construían una escena con un espacio común.",
      "La pintura egipcia siguió durante tres mil años unas reglas fijas. La figura humana combina varios puntos de vista: cabeza y piernas de perfil, ojo y torso de frente. Es la <mark>ley de la frontalidad</mark>. Las escenas se ordenan en <b>registros</b> o bandas horizontales, y el tamaño de cada figura depende de su importancia: el faraón es el más grande. Es la <b>perspectiva jerárquica</b>. Se representaba lo que se sabía, no lo que se veía.",
    ], svg: versus("Dos maneras de mostrar", ["Ver", ["un punto de vista", "lo lejano, pequeño", "espacio unificado", "Renacimiento"]], ["Saber", ["varios puntos de vista", "tamaño = importancia", "registros", "Egipto, Edad Media"]]) },
    { h: "La Edad Media: el espacio simbólico", p: [
      "La pintura romana había conseguido efectos de profundidad bastante convincentes, como en los frescos de Pompeya. Pero el arte cristiano medieval, sobre todo el <b>bizantino</b> y el <b>románico</b>, abandonó esa búsqueda. Le interesaba representar un mundo espiritual, eterno, fuera del tiempo y del espacio.",
      "Por eso usa <mark>fondos dorados</mark> o de colores planos, figuras alargadas y frontales, y la perspectiva jerárquica: Cristo en majestad es mucho más grande que los apóstoles. A veces aparece la <b>perspectiva invertida</b>, en la que las líneas se abren hacia el fondo, como si el espacio se dirigiera al espectador. A finales del siglo XIII, <b>Giotto</b> empezó a pintar escenas con figuras de volumen sólido, arquitecturas y paisajes que crean un espacio creíble.",
    ], extra: OBRA("Frescos de la capilla Scrovegni", "Giotto", "1305, Padua"), svg: crono("Hacia el espacio real", [["s. I", "frescos de Pompeya"], ["s. VI", "mosaicos bizantinos"], ["s. XII", "Pantocrátor románico"], ["1305", "Giotto, Padua"], ["1415", "Brunelleschi"], ["1427", "Masaccio, Trinidad"]]) },
    { h: "La perspectiva lineal del Renacimiento", p: [
      "La <mark>perspectiva lineal</mark> o cónica se basa en una idea geométrica: las líneas paralelas que se alejan del observador parecen converger en un <b>punto de fuga</b> situado en la <b>línea del horizonte</b>, que coincide con la altura de los ojos. Brunelleschi la demostró hacia 1415 y <b>Leon Battista Alberti</b> la explicó en su tratado <i>De pictura</i> (1435), donde comparó el cuadro con una ventana abierta.",
      "Masaccio, Piero della Francesca, Mantegna o Leonardo la convirtieron en el gran instrumento de la pintura. En <i>La última cena</i> de Leonardo, todas las líneas del techo y las paredes conducen a la cabeza de Cristo. La perspectiva unifica el espacio, ordena la composición y dirige la mirada hacia lo importante. El <b>escorzo</b> aplica las mismas reglas a un cuerpo, como el <i>Cristo muerto</i> de Mantegna visto desde los pies.",
    ], extra: CITA("Dibujo un rectángulo del tamaño que quiero, que me sirve como una ventana abierta por la que se mira lo que se va a pintar.", "Leon Battista Alberti, De pictura, 1435 (traducción propia)"), svg: flujo("Construir una perspectiva", ["Trazar la línea de horizonte a la altura de los ojos", "Fijar el punto de fuga", "Llevar las líneas de profundidad al punto", "Reducir el tamaño de lo lejano"]) },
    { h: "La perspectiva aérea y la atmósfera", p: [
      "Leonardo da Vinci observó que el aire que hay entre el ojo y los objetos lejanos los vuelve más claros, más azulados y menos nítidos. Lo llamó <mark>perspectiva aérea</mark> o atmosférica. En el fondo de <i>La Gioconda</i>, las montañas se disuelven en tonos azules y verdes. Leonardo también usó el <b>sfumato</b>, un difuminado suave de los contornos que envuelve las figuras en el aire.",
      "Los pintores flamencos, como Van Eyck o Patinir, ya habían pintado paisajes con esa gradación de color. Más tarde, <b>Velázquez</b> llevó la perspectiva aérea a su culminación: en <i>Las Meninas</i> parece que se puede respirar el aire de la sala. El espacio no se construye solo con líneas, sino también con luz y color.",
    ], svg: versus("Dos perspectivas", ["Lineal", ["geometría", "punto de fuga", "líneas que convergen", "Brunelleschi, Alberti"]], ["Aérea", ["color y luz", "lejos, azulado", "contornos difusos", "Leonardo, Velázquez"]]) },
    { h: "Del Barroco al siglo XIX: ilusión y crisis", p: [
      "El Barroco llevó la perspectiva al extremo de la ilusión: en los techos de las iglesias, como el de San Ignacio en Roma pintado por Andrea Pozzo, la arquitectura pintada parece abrirse al cielo. Es la <mark>quadratura</mark>, un trampantojo monumental. Durante siglos, las academias enseñaron la perspectiva como base obligatoria del oficio.",
      "En el siglo XIX empezó la crisis. La <b>fotografía</b> (1839) reproducía el espacio con exactitud mecánica, y los pintores buscaron otros caminos. Las estampas japonesas, con espacios planos y puntos de vista altos, influyeron en Manet, Degas y Van Gogh. <b>Cézanne</b> pintó bodegones en los que la mesa y la fruta se ven desde ángulos distintos, y aconsejó tratar la naturaleza mediante el cilindro, la esfera y el cono.",
    ], extra: CITA("Hay que tratar la naturaleza mediante el cilindro, la esfera y el cono.", "Paul Cézanne, carta a Émile Bernard, 1904 (traducción propia)"), svg: crono("Ilusión y crisis", [["1694", "techo de Pozzo"], ["1839", "fotografía"], ["1860", "estampas japonesas"], ["1890", "bodegones de Cézanne"], ["1907", "Señoritas de Avignon"], ["1912", "primer collage"]]) },
    { h: "La ruptura cubista", p: [
      "Entre 1907 y 1914, <b>Pablo Picasso</b> y <b>Georges Braque</b> crearon el <mark>cubismo</mark>, la gran ruptura con el espacio renacentista. En lugar de pintar un objeto desde un solo punto de vista, lo muestran desde varios a la vez: es la <b>simultaneidad</b>. Las formas se descomponen en planos geométricos que se cruzan, y desaparecen el punto de fuga y la ilusión de profundidad.",
      "<i>Las señoritas de Avignon</i> (1907) anunció el cambio, con cuerpos angulosos y rostros como máscaras. En el <b>cubismo analítico</b> (1909-1911) los objetos se fragmentan en facetas de tonos grises y ocres, casi irreconocibles. En el <b>cubismo sintético</b> (1912-1914) vuelven los colores y aparecen el <b>collage</b> y el papier collé: trozos de periódico, papel pintado o rejilla de silla pegados en el lienzo.",
    ], v: ["esp-b", "El cubismo en nueve minutos"], extra: OBRA("Naturaleza muerta con silla de rejilla", "Pablo Picasso", "1912, óleo, hule y cuerda, primer collage"), svg: cuadro("Etapas del cubismo", [["Etapa", "Fechas", "Rasgos"], ["Precubismo", "1907-1908", "Cézanne, máscaras"], ["Analítico", "1909-1911", "facetas, grises"], ["Sintético", "1912-1914", "color, collage"]]) },
    { h: "Después del cubismo: el espacio moderno", p: [
      "El cubismo abrió la puerta a todas las vanguardias. <b>Juan Gris</b> lo hizo más ordenado y luminoso; los <b>futuristas</b> italianos añadieron el movimiento; Delaunay, el color. La abstracción de Mondrian o Malévich eliminó la representación y convirtió el cuadro en un espacio plano con su propia lógica.",
      "Desde entonces conviven muchos sistemas: la perspectiva clásica en el cine, el cómic o los videojuegos en 3D; el espacio plano del diseño gráfico; la <mark>multiplicidad de puntos de vista</mark> de los fotomontajes de David Hockney. Entender cómo se representa el espacio es entender cómo cada época decidió mirar el mundo.",
    ], svg: rueda("ESPACIO MODERNO", ["Juan Gris", "futurismo", "abstracción", "cine y 3D", "diseño plano", "Hockney"]) },
  ],
  figura: { titulo: "La representación del espacio de un vistazo", aria: "Resumen de los sistemas espaciales desde la prehistoria hasta el cubismo", cols: [
    ["Antes de 1300", ["prehistoria: figuras sueltas", "Egipto: frontalidad", "jerárquica", "fondo dorado"]],
    ["Renacimiento", ["perspectiva lineal", "punto de fuga", "Alberti, Masaccio", "escorzo"]],
    ["Atmósfera", ["perspectiva aérea", "sfumato", "Velázquez", "quadratura"]],
    ["Ruptura", ["Cézanne", "cubismo analítico", "cubismo sintético", "collage"]],
  ] },
  video: ["esp-a", "La perspectiva lineal explicada"],
  ejemplos: [
    ["Analiza el espacio de La Trinidad de Masaccio.", ["Bóveda de cañón pintada con casetones.", "Las líneas convergen en un punto de fuga bajo.", "El punto está a la altura de los ojos del espectador.", "La pared parece abrirse a una capilla."], "Primer gran ejemplo de perspectiva lineal en pintura."],
    ["Explica por qué el faraón aparece mayor que sus sirvientes.", ["Egipto no busca imitar la vista.", "El tamaño expresa la importancia.", "Se llama perspectiva jerárquica.", "También en el arte medieval."], "Perspectiva jerárquica: tamaño según rango."],
    ["Identifica los rasgos cubistas de un bodegón de 1911.", ["El objeto se ve desde varios ángulos.", "Formas descompuestas en facetas.", "Colores grises y ocres.", "Sin punto de fuga."], "Cubismo analítico."],
  ],
  errores: [
    "Pensar que egipcios o medievales no sabían dibujar: elegían otro sistema.",
    "Confundir la perspectiva lineal (líneas) con la aérea (color y atmósfera).",
    "Creer que el cubismo es solo «pintar con cubos»: es mostrar varios puntos de vista.",
    "Situar el punto de fuga en cualquier sitio: está en la línea del horizonte.",
  ],
  ejercicios: {
    b: [
      ["Nombra cuatro recursos para sugerir profundidad.", "Superposición, disminución del tamaño, posición más alta en el plano, perspectiva lineal, perspectiva aérea, luz y sombra (cuatro de ellos)."],
      ["¿Qué es la ley de la frontalidad egipcia?", "La regla de representar la figura humana combinando puntos de vista: cabeza y piernas de perfil, ojo y torso de frente."],
      ["¿Quién demostró la perspectiva lineal y quién la escribió?", "Brunelleschi la demostró hacia 1415 con su experimento del espejo; Alberti la explicó en De pictura (1435)."],
      ["¿Qué diferencia hay entre cubismo analítico y sintético?", "El analítico (1909-1911) fragmenta el objeto en facetas grises y ocres; el sintético (1912-1914) recupera el color e introduce el collage."],
    ],
    m: [
      ["Explica qué es la perspectiva aérea con un ejemplo.", "La representación de la distancia mediante el color y la nitidez: lo lejano se pinta más claro, azulado y difuso. Ejemplo: el paisaje del fondo de La Gioconda o el aire de Las Meninas."],
      ["¿Por qué el arte bizantino usa fondos dorados?", "Para representar un espacio sagrado y eterno, fuera del mundo real; el oro simboliza la luz divina y no sitúa las figuras en un lugar concreto."],
      ["¿Qué papel tuvo Cézanne en el camino hacia el cubismo?", "Pintó objetos desde varios puntos de vista en un mismo cuadro y simplificó la naturaleza en formas geométricas (cilindro, esfera, cono), ideas que Picasso y Braque desarrollaron."],
      ["¿Cómo influyó la fotografía en la representación del espacio?", "Al reproducir el espacio con exactitud mecánica, liberó a la pintura de esa función y la animó a experimentar con espacios planos, puntos de vista nuevos y deformaciones."],
    ],
    a: [
      ["Dibuja una calle con un punto de fuga y explica los pasos.", "Respuesta práctica. Pasos: trazar la línea de horizonte, fijar el punto de fuga, dibujar las aristas de los edificios y la acera hacia el punto, cerrar con verticales y horizontales, reducir los elementos lejanos."],
      ["Compara el espacio de La última cena de Leonardo con el de un bodegón cubista.", "Leonardo: espacio unificado, un punto de fuga en la cabeza de Cristo, profundidad creíble y orden. Cubismo: múltiples puntos de vista, planos fragmentados, sin profundidad ilusoria; el cuadro afirma su superficie plana."],
    ],
  },
  quiz: [
    ["En la perspectiva jerárquica, el tamaño depende de…", ["la importancia", "la distancia", "la luz", "el color"], "Egipto y Edad Media."],
    ["La pintura egipcia ordena las escenas en…", ["registros horizontales", "un punto de fuga", "facetas", "collages"], "Bandas superpuestas."],
    ["Las figuras de Giotto aportan…", ["volumen y espacio creíble", "fondos dorados planos", "collage", "abstracción"], "Capilla Scrovegni, 1305."],
    ["El experimento del espejo es de…", ["Brunelleschi", "Leonardo", "Picasso", "Cézanne"], "Hacia 1415."],
    ["Alberti comparó el cuadro con…", ["una ventana abierta", "un espejo roto", "una máscara", "un mapa"], "De pictura, 1435."],
    ["El punto de fuga está en…", ["la línea del horizonte", "el borde del cuadro", "el suelo", "el cielo siempre"], "A la altura de los ojos."],
    ["El sfumato es…", ["un difuminado suave de contornos", "un collage", "un fondo de oro", "una bóveda pintada"], "Leonardo."],
    ["La quadratura es…", ["arquitectura ilusionista en techos", "una técnica de collage", "un tipo de mosaico", "una pintura rupestre"], "Andrea Pozzo."],
    ["La simultaneidad cubista consiste en…", ["mostrar varios puntos de vista a la vez", "pintar al aire libre", "usar fondos dorados", "imitar fotografías"], "Picasso y Braque."],
    ["El collage aparece en el cubismo…", ["sintético", "analítico", "precubismo", "barroco"], "Desde 1912."],
  ],
  examen: [
    ["El Cristo muerto de Mantegna es un ejemplo de…", ["escorzo", "perspectiva jerárquica", "collage", "frontalidad"], "Visto desde los pies."],
    ["La perspectiva invertida aparece en…", ["el arte bizantino", "el cubismo", "el impresionismo", "el Renacimiento"], "Líneas que se abren al fondo."],
    ["Cézanne aconsejó tratar la naturaleza mediante…", ["cilindro, esfera y cono", "punto, línea y plano", "luz y sombra", "rojo, amarillo y azul"], "Carta de 1904."],
    ["Las señoritas de Avignon son de…", ["1907", "1427", "1839", "1912"], "Picasso."],
  ],
  feynman: ["perspectiva jerárquica", "perspectiva lineal y punto de fuga", "perspectiva aérea", "simultaneidad cubista"],
  mapa: ["ESPACIO EN PINTURA", [["Antes de 1300", "frontalidad, jerárquica"], ["Renacimiento", "punto de fuga"], ["Atmósfera", "aérea, sfumato"], ["Cubismo", "varios puntos de vista"]]],
  tarjetas: [
    ["Superposición", "Lo que tapa está delante."],
    ["Perspectiva jerárquica", "Tamaño según importancia."],
    ["Punto de fuga", "Donde convergen las paralelas."],
    ["Perspectiva aérea", "Lejos: azulado y difuso."],
    ["Escorzo", "Figura en perspectiva acortada."],
    ["Quadratura", "Arquitectura pintada ilusionista."],
    ["Cubismo analítico", "Facetas grises, 1909-1911."],
    ["Collage", "Papeles pegados en el cuadro."],
  ],
  glosario: [
    ["Línea de horizonte", "Línea a la altura de los ojos donde se sitúa el punto de fuga."],
    ["Registro", "Banda horizontal en la que se ordenan las escenas."],
    ["Frontalidad", "Representación de la figura de frente o combinando vistas."],
    ["Trampantojo", "Pintura que engaña al ojo haciendo creer que es real."],
    ["Sfumato", "Difuminado suave de contornos y transiciones."],
    ["Simultaneidad", "Varios puntos de vista en una misma imagen."],
    ["Papier collé", "Papel recortado y pegado en el cuadro."],
    ["Faceta", "Pequeño plano en que se descompone una forma cubista."],
  ],
  situacion: SIT(
    "Mi habitación en tres espacios",
    "Para una exposición del departamento, cada alumno representará el mismo espacio de su casa con tres sistemas distintos.",
    ["Fotografiad o bocetad un rincón de vuestra casa", "Dibujadlo con perspectiva jerárquica o registros", "Dibujadlo con perspectiva lineal de un punto de fuga", "Hacedlo como collage cubista con varios puntos de vista"],
    "Tríptico con las tres versiones y una explicación breve.",
    ["Aplicación correcta de cada sistema", "Calidad técnica y creatividad", "Explicación con vocabulario preciso"],
  ),
  familias: [
    "Buscad en una foto de calle dónde se juntan las líneas: ese es el punto de fuga.",
    "Comparad un dibujo infantil con una foto: ¿cómo representa cada uno la profundidad?",
    "Visitad Las Meninas en la web del Prado y mirad cómo se ve el aire de la sala.",
  ],
  saberes: "sistemas de representación espacial en la pintura, de la pintura primitiva a la ruptura cubista.",
  ideas: [
    "Hacer el experimento de Brunelleschi con una foto, un espejo y una cartulina.",
    "Trazar sobre una reproducción de La última cena las líneas hacia el punto de fuga.",
    "Taller de collage cubista con prensa del día.",
  ],
  fuentes: [WIKI("Perspectiva", "Perspectiva"), WIKI("Cubismo", "Cubismo")],
});
