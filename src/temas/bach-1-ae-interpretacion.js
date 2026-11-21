// Artes Escénicas I, 1º de Bachillerato. Tema 6 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ae");
const { marco, t, ln, rc, ci, pa } = B;

// Las preguntas del personaje: quién, dónde, cuándo, qué quiere, por qué y cómo.
const preguntas = B.estrella("Las preguntas para construir un personaje", "Personaje", ["¿Quién soy?", "¿Dónde estoy?", "¿Qué quiero?", "¿Por qué?", "¿Qué me lo impide?", "¿Cómo lo consigo?"]);

// Objetivo, obstáculo y acción: el triángulo de la escena.
const triangulo = marco("Objetivo, obstáculo y acción",
  `${pa("M130 28 L226 152 H34Z", 'fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"')}
  ${ci(130, 28, 8, 'fill="var(--pen)"')}${ci(34, 152, 8, 'fill="var(--red)"')}${ci(226, 152, 8, 'fill="var(--leaf)"')}
  ${t(130, 16, "Objetivo: qué quiero", { bold: 1, color: "var(--pen)", maxW: 170 })}
  ${t(52, 172, "Obstáculo", { bold: 1, color: "var(--red)", maxW: 90 })}${t(210, 172, "Acción", { bold: 1, color: "var(--leaf)", maxW: 90 })}
  ${t(130, 108, "conflicto", { fs: 12, bold: 1 })}${t(130, 124, "= tensión dramática", { fs: 9, color: "var(--muted)", maxW: 120 })}`);

module.exports = B.tema({
  titulo: "La interpretación",
  minutos: 60,
  objetivos: [
    "Entender qué es interpretar y en qué consiste el trabajo del actor o la actriz",
    "Construir un personaje a partir del texto con las preguntas básicas",
    "Conocer las principales escuelas de interpretación: Stanislavski, Brecht, Grotowski y Meyerhold",
    "Practicar la improvisación y la escucha en escena",
  ],
  claves: ["interpretación", "personaje", "objetivo", "subtexto", "Stanislavski", "improvisación", "escucha", "verdad escénica"],
  pregunta: {
    texto: "¿Un buen actor siente de verdad lo que siente su personaje o solo lo finge?",
    respuesta: "Depende de la escuela. Para <b>Stanislavski</b> el actor busca una <mark>verdad escénica</mark> desde sus propias vivencias; para <b>Brecht</b> debe mostrar al personaje con cierta distancia. Ambos coinciden en algo: interpretar exige <b>técnica</b>, no solo emoción.",
  },
  lectura: {
    titulo: "La misma frase, cinco veces",
    html: `<p>En el primer ensayo, Irene dice su frase: «No pienso volver a casa». Suena plana. El director le pregunta: «¿Por qué no quieres volver? ¿A quién se lo dices? ¿Qué quieres conseguir con esa frase?». Irene piensa que su personaje está furiosa con su padre y quiere que él le pida perdón.</p>
    <p>Lo vuelve a intentar mirando a su compañero, con una pausa antes de «volver». Ahora la frase tiene peso. Prueba otras veces: con miedo, con ironía, susurrando. Cada versión cuenta una historia distinta. Irene descubre que <b>interpretar</b> no es recitar el texto, sino saber qué quiere el personaje y <b>actuar</b> para conseguirlo.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es interpretar",
      html: `<p><b>Interpretar</b> es dar vida a un personaje ante el público con el cuerpo, la voz y la imaginación. El actor o la actriz no se convierte en otra persona: presta su cuerpo y sus emociones para que el personaje exista durante la función, sin perder el control de lo que hace.</p>
      <p>Un buen intérprete combina <b>verdad</b> (que lo que hace resulte creíble), <b>técnica</b> (voz, cuerpo, ritmo) y <b>escucha</b> (reaccionar a los compañeros). No basta con decir el texto de memoria: hay que <b>actuar</b>, es decir, hacer algo para conseguir algo.</p>`,
      svg: B.cajas("Las bases del intérprete", [["Verdad", "que sea creíble"], ["Técnica", "cuerpo, voz, ritmo"], ["Escucha", "reaccionar al otro"], ["Imaginación", "creer en la ficción"]]),
    },
    {
      h: "Construir un personaje",
      html: `<p>El trabajo empieza en el <b>texto</b>. El intérprete lo lee varias veces y responde preguntas: ¿quién soy (edad, oficio, carácter)?, ¿dónde y cuándo estoy?, ¿qué quiero?, ¿por qué?, ¿qué me lo impide? y ¿cómo intento conseguirlo?</p>
      <p>Lo que no dice el texto se completa con la imaginación: la <b>biografía</b> del personaje, su forma de andar o de vestir, sus relaciones. Después, en los ensayos, se buscan su <b>cuerpo</b> y su <b>voz</b>, con los recursos que vimos en el tema anterior.</p>`,
      svg: preguntas,
      video: { id: "Sa3Kv1ZWBFM", titulo: "Cómo crear un personaje como actor", canal: "Tengo algo que EnsayARTE", vistas: 52539 },
    },
    {
      h: "Objetivo, obstáculo y subtexto",
      html: `<p>En cada escena el personaje tiene un <b>objetivo</b> (lo que quiere), encuentra un <b>obstáculo</b> (lo que se lo impide) y realiza <b>acciones</b> para superarlo: convencer, amenazar, seducir, suplicar. Ese choque crea la <b>tensión dramática</b>.</p>
      <p>Muchas veces los personajes no dicen lo que piensan. El <b>subtexto</b> es lo que hay debajo de las palabras: alguien dice «estoy bien» y, en realidad, está destrozado. El intérprete debe conocer el subtexto para que el público lo perciba en la mirada, la pausa o el tono.</p>`,
      svg: triangulo,
    },
    {
      h: "Stanislavski y la verdad escénica",
      html: `<p>El ruso <b>Konstantín Stanislavski</b> (1863-1938) creó el primer sistema completo de formación del actor. Buscaba la <b>verdad escénica</b>: que el actor viva realmente lo que hace. Sus herramientas son el <b>«si» mágico</b> (¿qué haría yo si estuviera en esta situación?), las <b>circunstancias dadas</b>, la <b>memoria emotiva</b> y las <b>acciones físicas</b>.</p>
      <p>Sus ideas llegaron a Estados Unidos y dieron lugar al <b>Método</b> del Actors Studio, del que salieron intérpretes como Marlon Brando o Al Pacino. Hoy está en la base de casi toda la interpretación realista, en el teatro y en el cine.</p>`,
      svg: B.cajas("Herramientas de Stanislavski", [["«Si» mágico", "¿qué haría yo si…?"], ["Circunstancias", "quién, dónde, cuándo"], ["Memoria emotiva", "recuerdos propios"], ["Acciones físicas", "hacer para sentir"]]),
      video: { id: "5_MhhxXSGmo", titulo: "Ejercicios de Stanislavski: 5 consejos clave", canal: "Organic Acting", vistas: 125729 },
    },
    {
      h: "Otras escuelas",
      html: `<p><b>Bertolt Brecht</b> propuso el <b>distanciamiento</b>: el actor no se funde con el personaje, sino que lo muestra para que el público reflexione críticamente. <b>Vsévolod Meyerhold</b> creó la <b>biomecánica</b>, un entrenamiento físico preciso y casi acrobático.</p>
      <p><b>Jerzy Grotowski</b> defendió un <b>teatro pobre</b>, sin decorados ni efectos, centrado en el cuerpo del actor. Y el británico <b>Peter Brook</b> lo resumió así: basta un espacio vacío, alguien que lo cruza y alguien que mira para que haya teatro.</p>`,
      svg: B.rejilla("Escuelas de interpretación", ["Autor", "Idea clave"], [["Stanislavski", "verdad escénica"], ["Brecht", "distanciamiento"], ["Meyerhold", "biomecánica"], ["Grotowski", "teatro pobre"], ["Brook", "espacio vacío"]]),
    },
    {
      h: "Improvisación y escucha",
      html: `<p>La <b>improvisación</b> es actuar sin texto previo, creando en el momento. Sirve para explorar personajes, buscar ideas en los ensayos y también como espectáculo propio (los <i>matches</i> de impro). Su regla de oro es <b>«sí, y además…»</b>: aceptar lo que propone el compañero y añadir algo.</p>
      <p>Improvisar entrena la <b>escucha</b>: estar atento a lo que hace y dice el otro y reaccionar de verdad. En escena, reaccionar es tan importante como hablar; muchas veces el público mira a quien escucha.</p>`,
      svg: B.flujo("Reglas básicas de la improvisación", ["Escucha lo que propone el otro", "Acéptalo: «sí»", "Añade algo nuevo: «y además…»", "Avanza la historia sin bloquear"]),
      video: { id: "eO7p5tTAU3w", titulo: "Improvisar: ¿cómo aprendo a inventar historias? 3 secretos", canal: "Fernando Suarez Teatro", vistas: 92802 },
    },
    {
      h: "Del texto a la escena: memorizar y ensayar",
      html: `<p>Memorizar no es repetir palabras sin sentido. Se aprende mejor entendiendo el <b>pensamiento</b> del personaje y asociando cada frase a una <b>acción</b> o a un movimiento. Ayuda leer en voz alta, por bloques, y repasar con un compañero.</p>
      <p>En los ensayos el intérprete prueba, se equivoca y fija lo que funciona. Recibe las indicaciones del director y las incorpora. El objetivo es que cada función parezca que ocurre <b>por primera vez</b>, aunque se haya repetido muchas.</p>`,
      svg: B.flujo("Del texto a la función", ["Leer y entender el texto", "Analizar objetivos y subtexto", "Memorizar por bloques con acciones", "Ensayar y fijar", "Representar como la primera vez"]),
    },
    {
      h: "Interpretar en teatro y en cámara",
      html: `<p>El teatro exige que todo llegue a la última fila: gestos más amplios, voz proyectada y una energía constante durante toda la obra, sin cortes. Ante la <b>cámara</b>, en cambio, el plano cercano capta hasta un parpadeo: la interpretación es más contenida y se rueda en fragmentos desordenados.</p>
      <p>En ambos casos rige el mismo principio: el personaje debe pensar y querer algo en cada momento. Cambian la <b>escala</b> y la <b>continuidad</b>, no la verdad.</p>`,
      svg: B.comparar("Teatro frente a cámara", ["Teatro", ["gesto amplio", "voz proyectada", "obra seguida", "público presente"]], ["Cámara", ["gesto contenido", "voz natural", "planos sueltos", "el objetivo mira"]]),
    },
  ],
  figura: {
    titulo: "La interpretación en cuatro claves",
    items: [["Personaje", "?", "quién soy y", "qué quiero"], ["Acción", "→", "hacer para", "conseguir"], ["Verdad", "♥", "creer en la", "ficción"], ["Escucha", "◉", "reaccionar", "al otro"]],
  },
  video: { id: "AURAWXyKzUY", titulo: "Clases de actuación para principiantes: 8 técnicas que debes aprender", canal: "Filmadores", vistas: 149249 },
  quiz: [
    ["Interpretar es…", ["recitar el texto de memoria", "dar vida a un personaje con cuerpo, voz e imaginación", "imitar a un actor famoso", "leer en voz alta"], 1, "Actuar para conseguir algo."],
    ["El objetivo del personaje es…", ["su vestuario", "lo que quiere conseguir", "su edad", "el final de la obra"], 1, "Motor de sus acciones."],
    ["El subtexto es…", ["el texto en letra pequeña", "lo que el personaje piensa pero no dice", "la acotación", "el título"], 1, "Lo que hay bajo las palabras."],
    ["El «si» mágico pertenece a…", ["Brecht", "Stanislavski", "Grotowski", "Meyerhold"], 1, "¿Qué haría yo si…?"],
    ["El distanciamiento es la propuesta de…", ["Stanislavski", "Brecht", "Lope de Vega", "Brook"], 1, "Que el público reflexione."],
    ["La biomecánica es un entrenamiento creado por…", ["Meyerhold", "Grotowski", "Shakespeare", "Laban"], 0, "Físico y preciso."],
    ["El teatro pobre de Grotowski se centra en…", ["los efectos especiales", "el cuerpo del actor", "el decorado", "la música"], 1, "Sin decorados ni efectos."],
    ["La regla de oro de la improvisación es…", ["«no, pero…»", "«sí, y además…»", "hablar siempre el primero", "no mirar al compañero"], 1, "Aceptar y añadir."],
    ["El Método del Actors Studio deriva de…", ["Brecht", "Stanislavski", "Brook", "Meyerhold"], 1, "Adaptación estadounidense."],
    ["Ante la cámara, la interpretación suele ser…", ["más amplia", "más contenida", "igual que en teatro", "sin voz"], 1, "El plano cercano lo capta todo."],
  ],
  examen: [
    ["Un personaje dice «me alegro por ti» con los dientes apretados. El actor está trabajando…", ["la dicción", "el subtexto", "la acotación", "la biomecánica"], 1, "Dice una cosa y siente otra."],
    ["En una improvisación, tu compañero dice «¡Por fin llegas, capitán!». ¿Qué respuesta sigue la regla de oro?", ["«Yo no soy capitán»", "«Sí, y traigo el mapa del tesoro»", "Quedarse callado", "«Esto no tiene sentido»"], 1, "Aceptar y añadir."],
    ["Una actriz se pregunta «¿qué haría yo si me despidieran hoy?». Usa…", ["el distanciamiento", "el «si» mágico", "el teatro pobre", "la biomecánica"], 1, "Herramienta de Stanislavski."],
    ["Un montaje sin decorado, con actores entrenados físicamente al máximo, sigue la idea de…", ["Grotowski", "Wagner", "Lope", "Puccini"], 0, "Teatro pobre."],
    ["Un personaje quiere el perdón de su hermana, que se niega. La negativa es…", ["el objetivo", "el obstáculo", "la acción", "el subtexto"], 1, "Lo que impide conseguir el objetivo."],
  ],
  feynman: ["Qué hace un intérprete además de decir el texto", "Qué son objetivo, obstáculo y subtexto", "Qué propuso Stanislavski y qué Brecht", "Cuál es la regla de oro de la improvisación"],
  mapa: ["LA INTERPRETACIÓN", [["Personaje", "quién · dónde · qué quiere · por qué"], ["Escena", "objetivo · obstáculo · acción · subtexto"], ["Escuelas", "Stanislavski · Brecht · Meyerhold · Grotowski"], ["Práctica", "improvisación · escucha · ensayo"]]],
  tarjetas: [
    ["Interpretar", "Dar vida a un personaje ante el público con cuerpo, voz e imaginación."],
    ["Objetivo", "Lo que el personaje quiere conseguir en una escena."],
    ["Obstáculo", "Lo que impide al personaje lograr su objetivo."],
    ["Subtexto", "Lo que el personaje piensa o siente y no dice."],
    ["Verdad escénica", "Credibilidad de lo que el actor hace en escena (Stanislavski)."],
    ["Distanciamiento", "Técnica de Brecht para que el público reflexione en lugar de identificarse."],
    ["Improvisación", "Actuar sin texto previo, creando en el momento."],
    ["Escucha", "Atención a los compañeros para reaccionar de verdad."],
  ],
  ejemplos: [
    ["Analiza: una hija quiere ir a un concierto y su madre no la deja.", ["Objetivo de la hija: conseguir el permiso.", "Obstáculo: la negativa de la madre.", "Acciones: convencer, prometer, enfadarse, chantajear."], "La escena avanza por las acciones que la hija prueba para superar el obstáculo."],
    ["Busca el subtexto de «No pasa nada, de verdad» tras una ruptura.", ["Las palabras dicen tranquilidad.", "La situación indica tristeza o enfado.", "El intérprete lo muestra con una pausa, la voz que tiembla o la mirada que evita."], "Subtexto: «sí pasa, pero no quiero que lo veas»."],
    ["Aplica el «si» mágico a un personaje que espera los resultados de un examen médico.", ["¿Qué haría yo si estuviera esperando esa noticia?", "Quizá no podría estarme quieto, miraría el móvil, respiraría rápido.", "Esas acciones físicas concretas generan la emoción."], "Acciones físicas creíbles nacidas de la propia imaginación."],
  ],
  errores: [
    "Recitar el texto sin saber qué quiere el personaje.",
    "Esperar el turno de hablar sin escuchar al compañero.",
    "Bloquear en la improvisación diciendo «no».",
    "Creer que llorar de verdad es imprescindible para emocionar al público.",
  ],
  ejercicios: {
    b: [
      ["¿Qué tres bases combina un buen intérprete?", "Verdad, técnica y escucha (y la imaginación)."],
      ["Nombra las preguntas para construir un personaje.", "¿Quién soy? ¿Dónde y cuándo estoy? ¿Qué quiero? ¿Por qué? ¿Qué me lo impide? ¿Cómo lo consigo?"],
      ["Define subtexto.", "Lo que el personaje piensa o siente pero no dice con palabras."],
      ["¿Cuál es la regla de oro de la improvisación?", "«Sí, y además…»: aceptar la propuesta del compañero y añadir algo."],
    ],
    m: [
      ["Explica el «si» mágico y las acciones físicas de Stanislavski.", "El «si» mágico es preguntarse qué haría uno en la situación del personaje; las acciones físicas son acciones concretas que ayudan a generar la emoción."],
      ["Compara las propuestas de Stanislavski y Brecht.", "Stanislavski busca que el actor viva al personaje y el público se identifique; Brecht pide distancia para que el público reflexione críticamente."],
      ["¿Por qué es importante la escucha en escena?", "Porque la reacción verdadera a lo que hace el otro da vida a la escena; el público también mira a quien escucha."],
      ["Indica dos diferencias entre interpretar en teatro y ante la cámara.", "En teatro el gesto es más amplio y la obra es seguida; en cámara el gesto es contenido y se rueda en fragmentos."],
    ],
    a: [
      ["Escribe la biografía de un personaje de una obra que conozcas respondiendo a las seis preguntas.", "Respuesta abierta. Debe ser coherente con el texto y aportar detalles imaginados verosímiles."],
      ["Prepara una escena de dos personajes con objetivo, obstáculo y subtexto claros, e interprétala.", "Respuesta abierta. Se valora la claridad del conflicto y la escucha entre intérpretes."],
    ],
  },
  glosario: [
    ["Circunstancias dadas", "Datos de la situación del personaje: lugar, tiempo, relaciones."],
    ["Memoria emotiva", "Uso de recuerdos propios para despertar emociones en escena."],
    ["Método", "Adaptación estadounidense del sistema de Stanislavski (Actors Studio)."],
    ["Biomecánica", "Entrenamiento físico del actor creado por Meyerhold."],
    ["Teatro pobre", "Propuesta de Grotowski centrada en el actor, sin efectos."],
    ["Réplica", "Intervención de un personaje en un diálogo."],
    ["Pie", "Última palabra de la réplica anterior, que da paso a la siguiente."],
    ["Match de impro", "Espectáculo de improvisación con equipos y temas propuestos por el público."],
  ],
  situacion: {
    titulo: "Escena a dos",
    reto: "Preparar e interpretar por parejas una escena breve con un conflicto claro.",
    pasos: [
      "Elegid o escribid una escena de una página para dos personajes.",
      "Responded por escrito a las preguntas del personaje y marcad objetivo, obstáculo y subtexto.",
      "Ensayad improvisando primero la situación sin texto y después con él.",
      "Representad la escena y explicad vuestras decisiones.",
    ],
    producto: "Escena interpretada de 2 o 3 minutos y ficha de análisis de los personajes.",
    evaluacion: [
      "El objetivo de cada personaje es claro.",
      "Hay escucha y reacción verdadera.",
      "El subtexto se percibe.",
      "Voz y cuerpo son coherentes con el personaje.",
    ],
  },
  familias: [
    "Ayudadle a memorizar dándole la réplica.",
    "Ved juntos una escena de película y comentad qué quería cada personaje.",
    "Jugad a improvisar pequeñas escenas a partir de una palabra.",
    "Valorad su esfuerzo en los ensayos, no solo el resultado.",
  ],
  saberes: "La interpretación: el trabajo del actor; construcción del personaje (preguntas, biografía, cuerpo y voz); objetivo, obstáculo, acción y subtexto; escuelas: Stanislavski y el Método, Brecht, Meyerhold, Grotowski, Brook; improvisación y escucha; memorización y ensayo; interpretación teatral y ante la cámara.",
  ideas: [
    "Decir una misma frase con distintos objetivos y subtextos.",
    "Juegos de improvisación con la regla «sí, y además…».",
    "Comparar una escena interpretada de forma realista y con distanciamiento.",
    "Grabar una escena en plano cercano y representarla después en el escenario.",
  ],
  fuentes: [
    { t: "Sistema Stanislavski, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sistema_Stanislavski" },
    { t: "Centro Dramático Nacional", url: "https://dramatico.mcu.es" },
  ],
});
