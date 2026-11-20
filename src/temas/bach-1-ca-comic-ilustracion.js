// Cultura Audiovisual, 1º de Bachillerato. Tema 3 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ca");

module.exports = B.tema({
  titulo: "El cómic y la ilustración",
  minutos: 60,
  objetivos: [
    "Definir el cómic como narración secuencial de imágenes y textos",
    "Identificar sus elementos: viñeta, bocadillo, cartela, onomatopeya, líneas cinéticas y elipsis",
    "Conocer los grandes momentos y tradiciones del cómic (europeo, estadounidense, manga y español)",
    "Distinguir los tipos de ilustración y su relación con el texto",
  ],
  claves: ["cómic", "viñeta", "bocadillo", "cartela", "onomatopeya", "elipsis", "manga", "novela gráfica", "ilustración"],
  pregunta: {
    texto: "Entre dos viñetas hay solo un espacio en blanco. ¿Cómo es posible que tu cabeza «vea» lo que ocurre ahí?",
    respuesta: "Porque el cómic cuenta con el lector: el espacio entre viñetas, la <mark>calle</mark>, es una <b>elipsis</b> que tú completas con la imaginación. Leer cómic es colaborar con el autor.",
  },
  lectura: {
    titulo: "Un chico amarillo en el periódico",
    html: `<p>En 1895, el periódico neoyorquino <i>New York World</i> empezó a publicar las andanzas de un niño de barrio vestido con un camisón amarillo. Sus frases aparecían escritas sobre la ropa y, poco después, dentro de globos que salían de su boca. Los lectores compraban el periódico para verlo, y otro diario fichó a su autor. Así nació el negocio del cómic de prensa.</p>
    <p>Más de un siglo después, el cómic es un lenguaje con obras maestras, desde <i>Tintín</i> hasta <i>Maus</i>, premio Pulitzer. En este tema conocerás sus elementos y su historia.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es el cómic",
      html: `<p>El <b>cómic</b> (también llamado historieta o tebeo) es una <mark>narración mediante imágenes dibujadas en secuencia</mark>, normalmente acompañadas de texto. Su unidad básica es la <b>viñeta</b>, y la sucesión de viñetas crea el tiempo y la acción.</p>
      <p>Combina dos lenguajes: el <b>visual</b> (dibujo, color, encuadre) y el <b>verbal</b> (diálogos y textos de narrador). Comparte con el cine el uso de planos y ángulos, pero el lector controla el ritmo: puede detenerse, volver atrás o mirar la página entera de un vistazo.</p>`,
      svg: B.comparar("Cómic y cine: semejanzas y diferencias", ["Cómic", ["imagen fija", "el lector marca el ritmo", "página completa", "sin sonido real"]], ["Cine", ["imagen en movimiento", "ritmo impuesto", "un plano tras otro", "sonido y música"]]),
    },
    {
      h: "Los elementos del cómic",
      html: `<p>La <b>viñeta</b> es el recuadro que encierra un momento. Su forma y tamaño expresan cosas: una viñeta grande da importancia; una sin borde sugiere libertad o recuerdo. El espacio entre viñetas se llama <b>calle</b>.</p>
      <p>Los diálogos van en <b>bocadillos</b> o globos, cuyo contorno cambia su sentido: liso para hablar, en forma de nube para pensar, en zigzag para gritar o para voces de aparatos. La <b>cartela</b> es un recuadro con la voz del narrador («Mientras tanto…»).</p>
      <p>Otros recursos propios son las <b>onomatopeyas</b> (¡BOOM!, ¡ZAS!), las <b>líneas cinéticas</b> que dibujan el movimiento y las <b>metáforas visuales</b>: una bombilla para una idea, estrellas para un golpe, «zzz» para dormir.</p>`,
      svg: B.pagina("Página de cómic con viñetas, cartela, bocadillo, líneas cinéticas y onomatopeya"),
      video: { id: "4OPL-omz8bY", titulo: "El cómic y sus elementos", canal: "Clases Particulares en Ávila", vistas: 446051 },
    },
    {
      h: "Cómo se narra: tiempo, planos y elipsis",
      html: `<p>El cómic usa la <b>escala de planos</b> del cine: plano general para situar, plano medio para la conversación, primer plano para la emoción y plano detalle para un objeto clave. Los ángulos picado y contrapicado empequeñecen o engrandecen al personaje.</p>
      <p>El tiempo se crea con la <b>elipsis</b>: entre viñeta y viñeta se omiten momentos que el lector reconstruye. Muchas viñetas pequeñas ralentizan la acción; una gran viñeta a toda página la detiene para impresionar. La lectura sigue un <b>orden</b>: de izquierda a derecha y de arriba abajo en Occidente, y al revés en el manga japonés.</p>`,
      svg: B.flujo("Recursos narrativos del cómic", ["Plano general: situar la escena", "Plano medio: diálogo", "Primer plano: emoción", "Elipsis: el lector completa"]),
    },
    {
      h: "Breve historia del cómic",
      html: `<p>Tras los precursores del siglo XIX, el cómic nace en la <b>prensa estadounidense</b> hacia 1895. En los años treinta surgen los <b>cuadernillos</b> y los superhéroes (Superman, 1938). En Europa destaca la escuela franco-belga: <i>Tintín</i> (Hergé, 1929) y <i>Astérix</i> (1959), con su estilo de <b>línea clara</b>.</p>
      <p>Desde los años sesenta aparecen el cómic <b>underground</b> y el cómic de autor, y en 1978 se populariza el término <b>novela gráfica</b> para obras largas y adultas, como <i>Maus</i> de Art Spiegelman, sobre el Holocausto.</p>`,
      svg: B.cronologia("Cronología del cómic", [["1895", "prensa EE. UU."], ["1929", "Tintín"], ["1938", "Superman"], ["1947", "manga moderno"], ["1978", "novela gráfica"], ["1992", "Pulitzer a Maus"]]),
    },
    {
      h: "El manga y el cómic español",
      html: `<p>El <b>manga</b> japonés tiene rasgos propios: se lee de derecha a izquierda, suele ser en blanco y negro, usa ojos grandes muy expresivos y tiene géneros para cada público. Osamu Tezuka (<i>Astroboy</i>) fue su gran renovador desde 1947.</p>
      <p>En España, la palabra <b>tebeo</b> viene de la revista <i>TBO</i> (1917). La <b>escuela Bruguera</b> creó personajes muy populares como <i>Mortadelo y Filemón</i> de Francisco Ibáñez. Hoy autores como Paco Roca (<i>Arrugas</i>) o Ana Penyas tienen premios nacionales e internacionales.</p>`,
      svg: B.cajas("Tradiciones del cómic", [["Estadounidense", "superhéroes|cuadernillo"], ["Franco-belga", "álbum|línea clara"], ["Manga", "derecha a izquierda|blanco y negro"], ["Español", "TBO, Bruguera|novela gráfica"]]),
    },
    {
      h: "Crear un cómic paso a paso",
      html: `<p>Un cómic se construye en fases: <b>idea y guion</b> (qué pasa, quién lo cuenta, cómo acaba), <b>guion técnico</b> o división en páginas y viñetas, <b>boceto</b> o <i>storyboard</i> a lápiz, <b>entintado</b>, <b>color</b> y <b>rotulación</b> de textos.</p>
      <p>Algunos consejos: que cada viñeta tenga una sola acción principal, que los bocadillos no tapen lo importante, que el texto sea breve y que la última viñeta de la página invite a pasar a la siguiente.</p>`,
      svg: B.flujo("Fases de creación de un cómic", ["Idea y guion", "División en páginas y viñetas", "Boceto a lápiz", "Entintado y color", "Rotulación"]),
    },
    {
      h: "La ilustración",
      html: `<p>La <b>ilustración</b> es una imagen creada para acompañar, explicar o enriquecer un texto o un producto. A diferencia del cómic, no suele narrar en secuencia: una sola imagen condensa la idea.</p>
      <p>Tiene muchos campos: <b>libro infantil</b> y álbum ilustrado, <b>editorial</b> (prensa y revistas), <b>científica</b> (botánica, anatomía), <b>publicitaria</b>, <b>cartel</b>, portadas de discos y libros, y diseño de personajes para cine y videojuegos.</p>`,
      svg: B.estrella("Campos de la ilustración", "Ilustración", ["Infantil", "Editorial", "Científica", "Publicidad", "Cartel", "Videojuego"]),
    },
    {
      h: "Imagen y texto",
      html: `<p>En la ilustración y el cómic, imagen y texto pueden relacionarse de varias formas. En la relación de <b>redundancia</b>, la imagen repite lo que dice el texto. En la de <b>complementariedad</b>, cada uno aporta algo que el otro no dice. En la de <b>contraste</b>, la imagen contradice el texto y genera humor o ironía.</p>
      <p>Hoy la ilustración es sobre todo <b>digital</b> (tableta gráfica y programas de dibujo), aunque muchos artistas combinan técnicas tradicionales. Las redes han convertido a muchos ilustradores en creadores con público propio.</p>`,
      svg: B.cajas("Relaciones entre imagen y texto", [["Redundancia", "dicen lo mismo"], ["Complemento", "cada uno añade"], ["Contraste", "ironía o humor"]], { cols: 3 }),
    },
  ],
  figura: {
    titulo: "Elementos clave del cómic",
    items: [["Viñeta", "▭", "un momento", "forma con sentido"], ["Bocadillo", "💬", "habla, piensa", "o grita"], ["Onomatopeya", "¡ZAS!", "sonido escrito", "con dibujo"], ["Elipsis", "▭ ▭", "la calle:", "el lector completa"]],
  },
  video: { id: "0VeEI0DqVPo", titulo: "Cómo contar una historia en cómic", canal: "Dani Parker", vistas: 214318 },
  quiz: [
    ["La unidad básica del cómic es…", ["el bocadillo", "la viñeta", "la cartela", "la página"], 1, "Cada viñeta encierra un momento."],
    ["El espacio en blanco entre viñetas se llama…", ["margen", "calle", "plano", "fondo"], 1, "Ahí ocurre la elipsis."],
    ["Un bocadillo con forma de nube indica que el personaje…", ["grita", "piensa", "susurra", "canta"], 1, "El pensamiento se dibuja como nube."],
    ["La cartela contiene…", ["la voz del narrador", "un grito", "una onomatopeya", "el título"], 0, "Por ejemplo, «Mientras tanto…»."],
    ["Las líneas cinéticas representan…", ["el sonido", "el movimiento", "la luz", "el pensamiento"], 1, "Dibujan la trayectoria y la velocidad."],
    ["¿En qué año apareció Superman?", ["1895", "1929", "1938", "1978"], 2, "Inaugura la era de los superhéroes."],
    ["El manga se lee…", ["de izquierda a derecha", "de derecha a izquierda", "de abajo arriba", "en espiral"], 1, "Sigue el sentido de lectura japonés."],
    ["La palabra «tebeo» procede de…", ["un autor", "la revista TBO", "un premio", "un estilo de dibujo"], 1, "TBO se fundó en 1917."],
    ["La novela gráfica que ganó el Pulitzer es…", ["Tintín", "Maus", "Astérix", "Arrugas"], 1, "De Art Spiegelman, sobre el Holocausto."],
    ["Si la imagen contradice el texto para hacer reír, la relación es de…", ["redundancia", "complementariedad", "contraste", "anclaje"], 2, "Genera ironía o humor."],
  ],
  examen: [
    ["Una página con muchas viñetas pequeñas consigue…", ["detener la acción", "ralentizar o fragmentar el tiempo", "eliminar la elipsis", "aumentar el color"], 1, "Más viñetas, más momentos."],
    ["Un bocadillo en zigzag sale de un televisor. Indica…", ["un pensamiento", "una voz de aparato o un grito", "un susurro", "un recuerdo"], 1, "Contorno quebrado: voz mecánica o grito."],
    ["La «línea clara» es característica de…", ["el manga", "la escuela franco-belga", "el underground", "la ilustración científica"], 1, "Hergé es su referente."],
    ["¿Qué diferencia principal hay entre ilustración y cómic?", ["La ilustración no usa color", "La ilustración no suele narrar en secuencia", "El cómic no tiene texto", "No hay diferencia"], 1, "La ilustración condensa la idea en una imagen."],
    ["El orden correcto de creación de un cómic es…", ["color, guion, boceto", "guion, boceto, entintado, color, rotulación", "rotulación, guion, color", "boceto, color, guion"], 1, "De la idea al acabado."],
  ],
  feynman: ["Qué hace el lector en la calle entre viñetas", "Cómo cambia el sentido de un bocadillo según su forma", "Tres tradiciones del cómic con un ejemplo cada una", "En qué se diferencia una ilustración de un cómic"],
  mapa: ["EL CÓMIC", [["Elementos", "viñeta · bocadillo · cartela"], ["Narración", "planos · elipsis · orden"], ["Tradiciones", "EE. UU. · Europa · manga · España"], ["Ilustración", "imagen + texto"]]],
  tarjetas: [
    ["Cómic", "Narración con imágenes dibujadas en secuencia, normalmente con texto."],
    ["Viñeta", "Recuadro que representa un momento de la historia."],
    ["Bocadillo", "Globo que contiene lo que dice o piensa un personaje."],
    ["Cartela", "Recuadro con la voz del narrador."],
    ["Onomatopeya", "Palabra que imita un sonido, dibujada con fuerza expresiva."],
    ["Elipsis", "Omisión de momentos que el lector reconstruye."],
    ["Novela gráfica", "Cómic extenso y unitario, normalmente para adultos."],
    ["Ilustración", "Imagen creada para acompañar o explicar un texto o producto."],
  ],
  ejemplos: [
    ["Cuenta en tres viñetas «un chico pierde el autobús».", ["Viñeta 1, plano general: el chico corre hacia la parada; el autobús está parado.", "Viñeta 2, plano detalle: las puertas se cierran. Onomatopeya «¡FSSS!».", "Viñeta 3, plano medio: el chico, jadeando, ve alejarse el autobús; bocadillo: «¡Otra vez no!»."], "Tres viñetas con cambio de plano, onomatopeya y una elipsis que el lector completa."],
    ["Identifica los elementos en esta descripción: un recuadro amarillo dice «Al día siguiente…»; un personaje, con estrellas sobre la cabeza, dice algo dentro de un globo en zigzag.", ["Recuadro amarillo: cartela.", "Estrellas: metáfora visual de un golpe o mareo.", "Globo en zigzag: grito."], "Cartela, metáfora visual y bocadillo de grito."],
    ["Explica la relación imagen-texto en un álbum infantil donde el texto dice «No pasa nada en casa» y la imagen muestra un dragón en la cocina.", ["El texto afirma calma.", "La imagen muestra lo contrario.", "La contradicción provoca humor y complicidad con el lector."], "Relación de contraste (ironía)."],
  ],
  errores: [
    "Pensar que el cómic es solo para niños: hay obras para todas las edades y premios literarios.",
    "Escribir textos largos que tapan el dibujo.",
    "Leer un manga en el orden occidental y perder el sentido de la historia.",
    "Confundir la cartela (narrador) con el bocadillo (personaje).",
  ],
  ejercicios: {
    b: [
      ["Define viñeta, bocadillo y cartela.", "Viñeta: recuadro con un momento; bocadillo: globo con lo que dice o piensa un personaje; cartela: recuadro con la voz del narrador."],
      ["Escribe cinco onomatopeyas y el sonido que imitan.", "¡Boom! (explosión), ¡Ring! (timbre), ¡Guau! (perro), ¡Zas! (golpe), ¡Plaf! (caída)."],
      ["Cita dos personajes de la escuela franco-belga y uno de la escuela Bruguera.", "Tintín y Astérix; Mortadelo y Filemón."],
      ["Nombra cuatro campos de la ilustración.", "Infantil, editorial, científica, publicitaria (o cartel, videojuegos, portadas)."],
    ],
    m: [
      ["Explica qué es la elipsis en el cómic con un ejemplo.", "Es la omisión de momentos entre viñetas: en una viñeta alguien lanza una pelota y en la siguiente se ve el cristal roto; el lector imagina el impacto."],
      ["¿Qué rasgos distinguen el manga del cómic occidental?", "Lectura de derecha a izquierda, blanco y negro predominante, ojos grandes y expresivos, géneros por público y publicación en revistas semanales."],
      ["¿Por qué un autor elegiría una viñeta grande a toda página?", "Para detener el tiempo y destacar un momento clave, impresionar o mostrar un espacio amplio."],
      ["¿Qué semejanzas hay entre el cómic y el cine? ¿Y qué diferencia esencial?", "Ambos usan planos, ángulos y montaje; pero en el cómic la imagen es fija y el lector marca el ritmo."],
    ],
    a: [
      ["Diseña el guion técnico de una página de seis viñetas sobre un tema libre, indicando plano y texto de cada una.", "Respuesta abierta: seis viñetas numeradas con plano, acción, diálogo o cartela, y una última viñeta que cierre o deje intriga."],
      ["Lee una página de una novela gráfica (por ejemplo, Arrugas) y analiza cómo trata el tiempo y la emoción.", "Respuesta abierta: identificar planos, tamaño de viñetas, elipsis, color y relación imagen-texto, y explicar su efecto emocional."],
    ],
  },
  glosario: [
    ["Calle", "Espacio en blanco entre viñetas."],
    ["Línea cinética", "Trazo que representa el movimiento."],
    ["Metáfora visual", "Signo gráfico que expresa una idea o estado (bombilla = idea)."],
    ["Rotulación", "Escritura de los textos en bocadillos y cartelas."],
    ["Entintado", "Repaso con tinta del dibujo a lápiz."],
    ["Línea clara", "Estilo de contornos limpios y colores planos (Hergé)."],
    ["Manga", "Cómic japonés."],
    ["Tebeo", "Nombre español del cómic, por la revista TBO."],
    ["Álbum ilustrado", "Libro en que imagen y texto construyen juntos el relato."],
  ],
  situacion: {
    titulo: "Una página de cómic sobre mi instituto",
    reto: "Crear en grupo una página de cómic que cuente una anécdota real o inventada del instituto.",
    pasos: [
      "Escribid una idea en tres frases: inicio, conflicto y final.",
      "Dividid la historia en seis viñetas con plano y texto para cada una.",
      "Bocetad a lápiz, entintad y rotulad, usando al menos una onomatopeya y una elipsis.",
      "Exponed las páginas y votad la que mejor narra sin necesidad de explicación.",
    ],
    producto: "Una página de cómic de seis viñetas, en papel o digital.",
    evaluacion: [
      "La historia se entiende sin explicaciones.",
      "Se usan correctamente bocadillos, cartelas y onomatopeyas.",
      "Hay variedad de planos y al menos una elipsis eficaz.",
      "El acabado es limpio y legible.",
    ],
  },
  familias: [
    "Compartid un cómic que leyerais de pequeños y comparadlo con lo que lee ahora.",
    "Visitad juntos la sección de novela gráfica de la biblioteca.",
    "Proponedle contar en viñetas una anécdota familiar.",
    "Comentad la ilustración de la portada de un libro: qué os hace imaginar.",
  ],
  saberes: "El cómic y la ilustración: el cómic como narración secuencial, elementos (viñeta, bocadillo, cartela, onomatopeya, líneas cinéticas, metáforas visuales), recursos narrativos (planos, elipsis, ritmo), historia y tradiciones (estadounidense, franco-belga, manga, español), proceso de creación e ilustración y su relación con el texto.",
  ideas: [
    "Leer en clase una página muda y pedir que cada alumno escriba los diálogos.",
    "Comparar la misma escena en un cómic y en su adaptación al cine.",
    "Taller de bocadillos: un mismo texto con cinco contornos distintos.",
    "Invitar a un ilustrador o dibujante local a explicar su proceso.",
  ],
  fuentes: [
    { t: "Historieta, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Historieta" },
    { t: "Premio Nacional del Cómic, Ministerio de Cultura", url: "https://www.cultura.gob.es/cultura/libro/premios/premios-nacionales/comic.html" },
  ],
});
