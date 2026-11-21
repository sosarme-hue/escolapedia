// Artes Escénicas II, 2º de Bachillerato. Tema 4 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ae");

module.exports = B.tema({
  titulo: "La danza contemporánea y la danza-teatro",
  minutos: 60,
  objetivos: [
    "Conocer la evolución de la danza escénica desde la danza moderna hasta hoy",
    "Identificar las técnicas y creadores principales: Duncan, Graham, Cunningham, Bausch",
    "Reconocer los rasgos de la danza-teatro y de la danza contemporánea en España",
    "Crear una breve composición coreográfica con recursos de la danza contemporánea",
  ],
  claves: ["danza moderna", "contracción y relajación", "azar", "posmoderna", "danza-teatro", "contact improvisation", "coreografía", "composición"],
  pregunta: {
    texto: "¿Hace falta saber ponerse de puntas para bailar en un gran teatro?",
    respuesta: "No. Desde principios del siglo XX muchas bailarinas y bailarines se quitaron las zapatillas y buscaron <mark>otro cuerpo</mark>: con peso, que cae al suelo, que respira y que cuenta lo que siente. Así nació la <b>danza moderna</b>, madre de la danza contemporánea.",
  },
  lectura: {
    titulo: "Sillas en el suelo",
    html: `<p>En clase de Artes Escénicas el profesor proyecta un fragmento de <i>Café Müller</i>, de Pina Bausch. Una mujer con los ojos cerrados camina entre mesas y sillas; un hombre las aparta a toda prisa para que no tropiece. Otra pareja se abraza, se suelta, cae y vuelve a abrazarse una y otra vez.</p>
    <p>Un alumno dice que «eso no es baile, es teatro». Una compañera responde que tampoco es teatro, porque nadie habla. El profesor apunta en la pizarra la palabra que buscaban: <b>danza-teatro</b>. Luego les pide que repitan un gesto cotidiano diez veces seguidas, cada vez más rápido. Al quinto intento ya no parece un gesto cualquiera: cuenta algo.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "De la danza libre a la danza moderna",
      html: `<p>A comienzos del siglo XX, <b>Isadora Duncan</b> bailaba descalza, con túnicas sueltas y movimientos inspirados en las olas y en la Grecia antigua. Rechazaba el corsé y la rigidez del ballet académico y defendía una danza <b>libre</b> que naciera del plexo solar.</p>
      <p>Después, en Alemania, Rudolf von Laban estudió el movimiento y creó un sistema para analizarlo y anotarlo, y Mary Wigman desarrolló la <b>danza expresionista</b>. En Estados Unidos nació la <b>danza moderna</b> con creadoras como Martha Graham y Doris Humphrey.</p>`,
      svg: B.epocas("Momentos de la danza contemporánea", [["1900", "Isadora Duncan"], ["1926", "Martha Graham"], ["1953", "Cunningham"], ["1973", "Pina Bausch"], ["hoy", "fusión"]]),
    },
    {
      h: "Martha Graham: contracción y relajación",
      html: `<p><b>Martha Graham</b> (1894-1991) creó la primera gran técnica de danza moderna. Su base es la <b>contracción</b> y la <b>relajación</b> (<i>release</i>): el movimiento nace del centro del cuerpo, de la respiración, y se expande hacia las extremidades.</p>
      <p>Sus obras, como <i>Lamentation</i> (1930) o <i>Appalachian Spring</i> (1944), usan el suelo, las caídas y la tensión del torso para expresar emociones profundas y mitos. Su técnica se sigue enseñando en conservatorios de todo el mundo, y su compañía, fundada en 1926, es la más antigua de danza moderna de Estados Unidos.</p>`,
      svg: B.comparar("Ballet frente a técnica Graham", ["Ballet", ["elevación y ligereza", "torso vertical", "puntas", "esconder el esfuerzo"]], ["Graham", ["peso y suelo", "contracción del torso", "pies descalzos", "mostrar la emoción"]]),
      video: { id: "3QjenIwue4A", titulo: "La técnica de Martha Graham (subtitulada al español)", canal: "Técnicas Corporales 1 UNCuyo", vistas: 57369 },
    },
    {
      h: "Merce Cunningham y la danza posmoderna",
      html: `<p><b>Merce Cunningham</b> (1919-2009) separó la danza de la música y del relato. Junto al músico John Cage, componía con el <b>azar</b> (tirando dados para decidir el orden de las frases) y bailarines, música y escenografía se juntaban por primera vez en el estreno.</p>
      <p>En los años sesenta, el grupo de la <b>Judson Church</b> de Nueva York (Yvonne Rainer, Trisha Brown, Steve Paxton) llevó la ruptura más lejos: movimientos cotidianos como caminar o correr, bailarines sin técnica y espacios no teatrales. De ahí surge el <b>contact improvisation</b>, basado en el peso compartido.</p>`,
      svg: B.cajas("Ideas de la danza posmoderna", [["Azar", "orden por sorteo"], ["Cotidiano", "andar, correr"], ["Independencia", "danza sin música"], ["Contacto", "peso compartido"]]),
    },
    {
      h: "Pina Bausch y la danza-teatro",
      html: `<p>La alemana <b>Pina Bausch</b> (1940-2009) dirigió desde 1973 el <b>Tanztheater Wuppertal</b>. Su lema era: «No me interesa cómo se mueve la gente, sino qué la mueve». Preguntaba a sus intérpretes por sus recuerdos y miedos, y con sus respuestas construía las piezas.</p>
      <p>La <b>danza-teatro</b> mezcla movimiento, palabra, repetición, objetos y escenarios sorprendentes (tierra, agua, claveles, sillas). Obras como <i>La consagración de la primavera</i> (1975) o <i>Café Müller</i> (1978) cambiaron la danza y el teatro de todo el mundo.</p>`,
      svg: B.estrella("Recursos de la danza-teatro", "Danza-teatro", ["Repetición", "Gesto cotidiano", "Palabra", "Objetos", "Espacio", "Recuerdos"]),
      video: { id: "3WLazG0bQPI", titulo: "Pina Bausch. Café Müller (fragmento)", canal: "TOFROUTO", vistas: 622149 },
    },
    {
      h: "Elementos de la composición coreográfica",
      html: `<p>Toda coreografía trabaja con cuatro elementos: el <b>cuerpo</b> (qué parte se mueve, qué forma toma), el <b>espacio</b> (niveles alto, medio y bajo; direcciones; trayectorias), el <b>tiempo</b> (velocidad, ritmo, pausas) y la <b>energía</b> o dinámica (fuerte o suave, súbita o sostenida).</p>
      <p>A esto se suman las <b>relaciones</b> entre intérpretes: unísono, canon (el mismo movimiento con retraso), pregunta y respuesta, contraste o contacto. Combinando estos elementos se crean frases de movimiento y estructuras como AB, ABA o rondó.</p>`,
      svg: B.rejilla("Elementos de la coreografía", ["Elemento", "Ejemplos"], [["Cuerpo", "partes, formas"], ["Espacio", "niveles, trayectorias"], ["Tiempo", "rápido, lento, pausa"], ["Energía", "fuerte, suave"], ["Relación", "unísono, canon"]]),
    },
    {
      h: "Procesos de creación en la danza actual",
      html: `<p>La danza contemporánea no tiene un solo estilo. Muchos coreógrafos parten de la <b>improvisación</b> guiada por tareas («moveos como si el suelo quemara», «dibujad vuestro nombre con la cadera») y después seleccionan y fijan el material.</p>
      <p>También se crea a partir de un tema, una imagen, un texto o un espacio concreto. La <b>videodanza</b> lleva la danza a la pantalla, y la tecnología (sensores, proyecciones interactivas) permite que el movimiento genere luz o sonido en tiempo real.</p>`,
      svg: B.flujo("Del impulso a la coreografía", ["Idea o estímulo", "Improvisación con tareas", "Selección del material", "Composición y estructura", "Ensayo y pulido"]),
    },
    {
      h: "La danza contemporánea en España",
      html: `<p>En España la danza contemporánea se consolida en los años ochenta, con compañías como <b>Cesc Gelabert</b>, Mal Pelo o La Ribot. <b>Nacho Duato</b> dirigió la <b>Compañía Nacional de Danza</b> entre 1990 y 2010 con un estilo propio, fluido y muy musical.</p>
      <p>Hoy conviven creadores muy distintos: Sol Picó, Marcos Morau (La Veronal), Israel Galván, que reinventa el flamenco desde lo contemporáneo, o Rocío Molina. Festivales como el Dansa València o Madrid en Danza y los centros coreográficos impulsan nuevas creaciones.</p>`,
      svg: B.cajas("Creadores de la danza en España", [["Nacho Duato", "CND, lírico"], ["La Veronal", "M. Morau"], ["Israel Galván", "flamenco nuevo"], ["Sol Picó", "humor y riesgo"]]),
      video: { id: "u7Pyj3r0QDY", titulo: "White Darkness de Nacho Duato. Compañía Nacional de Danza", canal: "Compañía Nacional de Danza CND", vistas: 22899 },
    },
    {
      h: "Cómo mirar una pieza de danza",
      html: `<p>Ante una coreografía no hay que buscar una historia como en una película. Conviene observar <b>qué hacen los cuerpos</b> (calidades, contacto, esfuerzo), cómo usan el <b>espacio</b> y la <b>música</b>, qué <b>imágenes</b> se repiten y qué sensación dejan. También importa el contexto: dónde se estrena, para qué público y con qué otros lenguajes dialoga.</p>
      <p>Después se puede relacionar la pieza con una técnica o un creador y valorar si los recursos sirven a la idea. Escribir dos o tres imágenes concretas que recuerdes es el mejor punto de partida para comentarla.</p>`,
      svg: B.ciclo("Mirar la danza", "pieza", ["Cuerpos", "Espacio", "Música", "Sensación"]),
    },
  ],
  figura: {
    titulo: "La danza contemporánea en cuatro claves",
    items: [["Libertad", "☼", "Duncan:", "pies descalzos"], ["Centro", "◉", "Graham:", "contracción"], ["Azar", "⚄", "Cunningham:", "danza y música"], ["Teatro", "♥", "Bausch:", "qué nos mueve"]],
  },
  video: { id: "DVc6riu26KE", titulo: "Martha Graham. Técnica Graham", canal: "tvmacay", vistas: 109149 },
  quiz: [
    ["Isadora Duncan bailaba…", ["con puntas y tutú", "descalza y con túnicas sueltas", "con máscaras", "en patines"], 1, "Danza libre."],
    ["La técnica Graham se basa en…", ["el azar", "la contracción y la relajación", "las puntas", "la máscara neutra"], 1, "El movimiento nace del centro."],
    ["Merce Cunningham trabajó junto al músico…", ["Stravinski", "John Cage", "Wagner", "Bach"], 1, "Azar y danza independiente de la música."],
    ["El contact improvisation se basa en…", ["el peso compartido y el contacto", "la mímica", "el canto", "las puntas"], 0, "Steve Paxton."],
    ["Pina Bausch dirigió el…", ["Ballet de la Ópera de París", "Tanztheater Wuppertal", "Odin Teatret", "Living Theatre"], 1, "Desde 1973."],
    ["«No me interesa cómo se mueve la gente, sino qué la mueve» es una frase de…", ["Martha Graham", "Pina Bausch", "Isadora Duncan", "Nacho Duato"], 1, "Danza-teatro."],
    ["En un canon, los intérpretes…", ["hacen movimientos distintos", "hacen el mismo movimiento con retraso", "están quietos", "cantan"], 1, "Como en música."],
    ["Los niveles del espacio son…", ["rápido y lento", "alto, medio y bajo", "fuerte y suave", "solo y grupo"], 1, "Altura del movimiento."],
    ["Nacho Duato dirigió la Compañía Nacional de Danza entre…", ["1950 y 1960", "1990 y 2010", "2015 y 2020", "1970 y 1975"], 1, "Veinte años."],
    ["Israel Galván es conocido por…", ["reinventar el flamenco", "el ballet romántico", "la ópera", "el circo"], 0, "Flamenco contemporáneo."],
  ],
  examen: [
    ["Una pieza en la que los bailarines repiten gestos cotidianos, hablan y se mueven entre sillas y tierra es…", ["ballet clásico", "danza-teatro", "danza folclórica", "musical"], 1, "Estilo de Pina Bausch."],
    ["Un coreógrafo sortea con dados el orden de las frases de movimiento. Sigue a…", ["Cunningham", "Graham", "Duncan", "Petipa"], 0, "Composición por azar."],
    ["Tres bailarinas hacen la misma frase empezando cada una dos tiempos después. Es…", ["unísono", "canon", "contraste", "solo"], 1, "Mismo movimiento con retraso."],
    ["Un movimiento súbito y fuerte frente a otro sostenido y suave cambia sobre todo la…", ["energía o dinámica", "trayectoria", "música", "luz"], 0, "Calidad del movimiento."],
    ["Para comentar una pieza de danza conviene empezar por…", ["buscar el argumento exacto", "anotar imágenes concretas y qué hacen los cuerpos", "el precio de la entrada", "el nombre del teatro"], 1, "Observación antes que juicio."],
  ],
  feynman: ["Qué cambió Isadora Duncan", "Qué es la contracción de Graham", "Qué aportó Cunningham", "Qué es la danza-teatro"],
  mapa: ["DANZA CONTEMPORÁNEA", [["Moderna", "Duncan · Laban · Wigman · Graham"], ["Posmoderna", "Cunningham · Judson · contact"], ["Danza-teatro", "Pina Bausch · repetición · recuerdos"], ["España", "Duato · La Veronal · Galván"]]],
  tarjetas: [
    ["Danza moderna", "Danza del siglo XX que rompe con el ballet y busca la expresión."],
    ["Contracción", "Movimiento del torso que nace de la respiración (Graham)."],
    ["Azar", "Recurso de Cunningham para decidir el orden del movimiento."],
    ["Contact improvisation", "Improvisación basada en el peso compartido y el contacto."],
    ["Danza-teatro", "Mezcla de danza, gesto cotidiano, palabra y teatro (Bausch)."],
    ["Canon", "Mismo movimiento realizado con retraso por varios intérpretes."],
    ["Unísono", "Todos hacen el mismo movimiento a la vez."],
    ["Videodanza", "Obra de danza creada para la cámara."],
  ],
  ejemplos: [
    ["Crea una frase de 8 tiempos con tres niveles distintos.", ["Tiempos 1-2: brazos arriba, nivel alto.", "Tiempos 3-5: giro y caída, nivel medio a bajo.", "Tiempos 6-8: rodar y volver a levantarse."], "Una frase que recorre los tres niveles del espacio."],
    ["Convierte un gesto cotidiano en material de danza-teatro.", ["Gesto: mirar el móvil.", "Repetirlo 10 veces, cada vez más rápido.", "Añadir una caída al final y volver a empezar."], "La repetición transforma el gesto en imagen escénica."],
    ["Organiza un grupo de cuatro con unísono y canon.", ["Frase común de 8 tiempos.", "Primera vez: los cuatro a la vez (unísono).", "Segunda vez: cada uno empieza dos tiempos después (canon)."], "Dos relaciones distintas con el mismo material."],
  ],
  errores: [
    "Pensar que la danza contemporánea es improvisar sin técnica ni estructura.",
    "Buscar siempre un argumento como en el ballet narrativo.",
    "Confundir danza moderna (primera mitad del siglo XX) con danza contemporánea en sentido amplio.",
    "Olvidar el tiempo y la energía al componer y fijarse solo en las formas.",
  ],
  ejercicios: {
    b: [
      ["¿Quién fue Isadora Duncan?", "Bailarina estadounidense pionera de la danza libre a principios del siglo XX."],
      ["Nombra los cuatro elementos de la coreografía.", "Cuerpo, espacio, tiempo y energía (además de las relaciones)."],
      ["¿Qué compañía dirigía Pina Bausch?", "El Tanztheater Wuppertal."],
      ["Cita dos creadores de danza contemporánea española.", "Nacho Duato, Marcos Morau, Israel Galván, Sol Picó, Cesc Gelabert o La Ribot."],
    ],
    m: [
      ["Compara la técnica Graham con el ballet.", "El ballet busca elevación, verticalidad y ocultar el esfuerzo; Graham usa el peso, el suelo y la contracción del torso para expresar emoción."],
      ["Explica qué significa que Cunningham separase danza y música.", "La coreografía y la música se creaban por separado y coincidían en el estreno; la danza no ilustraba la música."],
      ["Diferencia unísono y canon.", "En el unísono todos hacen lo mismo a la vez; en el canon, el mismo movimiento empieza con retraso en cada intérprete."],
      ["¿Qué rasgos tiene la danza-teatro?", "Repetición, gestos cotidianos, palabra, objetos y espacios sorprendentes, y material nacido de las experiencias de los intérpretes."],
    ],
    a: [
      ["Componed en grupo una pieza de un minuto con estructura ABA que use dos niveles, un canon y un gesto cotidiano repetido.", "Respuesta abierta. Se valora la claridad de la estructura y el uso consciente de los elementos."],
      ["Comenta una pieza de danza contemporánea (en vídeo) siguiendo los pasos del tema.", "Respuesta abierta. Debe describir cuerpos, espacio, música e imágenes antes de valorar."],
    ],
  },
  glosario: [
    ["Release", "Relajación que sigue a la contracción en la técnica Graham."],
    ["Laban", "Teórico que analizó y anotó el movimiento humano."],
    ["Judson Church", "Grupo neoyorquino de danza posmoderna de los años sesenta."],
    ["Frase de movimiento", "Secuencia de movimientos con principio y final."],
    ["Trayectoria", "Camino que dibuja el bailarín en el espacio."],
    ["Dinámica", "Calidad de la energía del movimiento."],
    ["Estructura ABA", "Forma con una parte, un contraste y la vuelta a la primera."],
    ["Tarea de improvisación", "Consigna que guía la búsqueda de movimiento."],
  ],
  situacion: {
    titulo: "Lo que nos mueve",
    reto: "Crear una pieza breve de danza-teatro a partir de recuerdos del grupo.",
    pasos: [
      "Responded por escrito a una pregunta: «¿Qué gesto te recuerda a tu infancia?».",
      "Convertid cada respuesta en un gesto y repetidlo con variaciones.",
      "Componed una pieza de dos o tres minutos con unísono, canon y un objeto.",
      "Presentadla y comentad qué imágenes ha recordado el público.",
    ],
    producto: "Pieza de danza-teatro y cuaderno con el proceso de creación.",
    evaluacion: [
      "El material nace de las experiencias del grupo.",
      "Usa con intención los elementos de la composición.",
      "La interpretación es precisa y comprometida.",
      "El cuaderno documenta el proceso.",
    ],
  },
  familias: [
    "Id juntos a ver un espectáculo de danza contemporánea.",
    "Ved el documental «Pina» de Wim Wenders y comentadlo.",
    "Pedidle que os enseñe una frase de movimiento de clase.",
    "Buscad la programación de danza de vuestra ciudad.",
  ],
  saberes: "Patrimonio de la danza en los siglos XX y XXI: danza libre (Duncan), Laban y danza expresionista, danza moderna (Graham), Cunningham y la danza posmoderna (Judson, contact improvisation), danza-teatro (Pina Bausch), danza contemporánea en España. Elementos de la composición coreográfica, procesos de creación, videodanza y análisis de piezas.",
  ideas: [
    "Taller de improvisación con tareas.",
    "Ver y comparar fragmentos de Graham, Cunningham y Bausch.",
    "Componer en grupo con unísono y canon.",
    "Grabar una videodanza de un minuto en el centro.",
  ],
  fuentes: [
    { t: "Danza contemporánea, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Danza_contempor%C3%A1nea" },
    { t: "Compañía Nacional de Danza", url: "https://cndanza.mcu.es" },
  ],
});
