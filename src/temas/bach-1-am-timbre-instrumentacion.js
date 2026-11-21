// Análisis Musical I, 1º de Bachillerato. Tema 7 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-am");

module.exports = B.tema({
  titulo: "Timbre e instrumentación",
  minutos: 60,
  objetivos: [
    "Explicar qué es el timbre y de qué depende",
    "Clasificar los instrumentos por familias y por la forma de producir el sonido",
    "Reconocer las voces y las principales agrupaciones instrumentales y vocales",
    "Analizar cómo usa un compositor el timbre y la orquestación",
  ],
  claves: ["timbre", "armónicos", "familias", "orquesta", "orquestación", "tesitura", "agrupación", "electrófonos"],
  pregunta: {
    texto: "Si cierras los ojos, ¿cómo sabes que una nota la toca un violín y no una flauta, aunque sea la misma nota y con la misma fuerza?",
    respuesta: "Por el <mark>timbre</mark>, el «color» del sonido. Cada instrumento produce, además de la nota principal, una mezcla propia de sonidos más agudos llamados armónicos, y tiene un ataque y una caída característicos. Tu oído reconoce esa huella igual que reconoce la voz de un amigo por teléfono.",
  },
  lectura: {
    titulo: "Una guía para jóvenes",
    html: `<p>En 1945, el compositor inglés Benjamin Britten recibió un encargo curioso: una película educativa para enseñar a los jóvenes cómo suena una orquesta. Escribió <i>The Young Person's Guide to the Orchestra</i>, basada en un tema de Henry Purcell.</p>
    <p>Primero toca el tema toda la orquesta; después, cada familia; luego, instrumento por instrumento, del flautín a la tuba, cada uno con una variación que muestra su carácter. Al final, todos se reúnen en una fuga brillante. Es la mejor manera de aprender a distinguir timbres, y es lo que harás en este tema.</p>`,
  },
  secciones: [2, 4, 2],
  bloques: [
    {
      h: "Qué es el timbre",
      html: `<p>El <b>timbre</b> es la cualidad que permite distinguir dos sonidos de la misma altura, duración e intensidad producidos por fuentes distintas. Es el «color» o la «voz» de cada instrumento.</p>
      <p>Depende sobre todo de los <b>armónicos</b>: un sonido real no es una vibración pura, sino una nota fundamental acompañada de otras más agudas y débiles. La proporción de esos armónicos da la forma de la onda. También influyen el <b>ataque</b> (cómo empieza el sonido), la <b>caída</b> y el material del instrumento.</p>
      <p>Por eso un sintetizador puede imitar un violín combinando armónicos, y por eso reconocemos a un cantante en dos segundos. El timbre es, además, el elemento que más emociones asociamos: el oboe suena pastoril, la trompa heroica y el violonchelo íntimo.</p>`,
      svg: B.barras("Armónicos de una nota: la fundamental y sus parciales más débiles", [["Fundamental", 100], ["2.º armónico", 60], ["3.º armónico", 42], ["4.º armónico", 25], ["5.º armónico", 14]], { t: "Mezcla de armónicos" }),
    },
    {
      h: "Cómo se clasifican los instrumentos",
      html: `<p>La clasificación tradicional de la orquesta agrupa los instrumentos en <b>cuerda</b>, <b>viento</b> (madera y metal) y <b>percusión</b>. Es práctica, pero tiene contradicciones: la flauta es de metal y se considera «madera»; el piano tiene cuerdas pero se toca golpeándolas.</p>
      <p>Por eso los musicólogos usan la clasificación de <b>Hornbostel y Sachs</b>, según lo que vibra: <b>cordófonos</b> (una cuerda), <b>aerófonos</b> (una columna de aire), <b>membranófonos</b> (una membrana tensa), <b>idiófonos</b> (el propio cuerpo del instrumento) y <b>electrófonos</b> (un circuito eléctrico).</p>`,
      svg: B.cajas("Clasificación por lo que vibra", [["Cordófonos", "cuerda|violín, guitarra"], ["Aerófonos", "aire|flauta, trompeta"], ["Membranófonos", "membrana|timbal, tambor"], ["Idiófonos", "el cuerpo|platillos, xilófono"], ["Electrófonos", "electricidad|sintetizador"], ["Voz", "cuerdas vocales|soprano a bajo"]], { cols: 3 }),
    },
    {
      h: "La cuerda",
      html: `<p>La familia de <b>cuerda frotada</b> la forman el <b>violín</b>, la <b>viola</b>, el <b>violonchelo</b> y el <b>contrabajo</b>, de más agudo a más grave. Se tocan con arco o pellizcando las cuerdas (<i>pizzicato</i>). Es la base de la orquesta: su timbre es cálido, expresivo y muy flexible.</p>
      <p>Hay también cuerda <b>pulsada</b> (guitarra, arpa, laúd) y <b>percutida</b> (piano). La guitarra eléctrica es, en realidad, un cordófono con amplificación eléctrica.</p>`,
      svg: B.barras("Cuerda frotada de más aguda a más grave (tamaño aproximado en cm)", [["Violín", 60], ["Viola", 70], ["Violonchelo", 125], ["Contrabajo", 185]], { t: "Familia de la cuerda", unidad: " cm" }),
    },
    {
      h: "El viento madera y el viento metal",
      html: `<p>El <b>viento madera</b> incluye la <b>flauta</b> y el flautín (el aire choca contra un bisel), el <b>oboe</b> y el <b>fagot</b> (lengüeta doble) y el <b>clarinete</b> y el <b>saxofón</b> (lengüeta simple). Sus timbres son muy variados: la flauta es clara, el oboe nasal y melancólico, el fagot grave y a veces cómico.</p>
      <p>El <b>viento metal</b> produce el sonido con la vibración de los labios en una boquilla: <b>trompeta</b>, <b>trompa</b>, <b>trombón</b> y <b>tuba</b>. Su timbre es potente y brillante, ideal para fanfarrias y clímax.</p>`,
      svg: B.comparar("Viento madera frente a viento metal", ["Madera", ["bisel o lengüeta", "flauta, oboe", "clarinete, fagot", "timbres variados"]], ["Metal", ["labios en boquilla", "trompeta, trompa", "trombón, tuba", "potente, brillante"]]),
    },
    {
      h: "La percusión y los instrumentos electrónicos",
      html: `<p>La <b>percusión</b> se divide en instrumentos de <b>altura determinada</b> (timbales, xilófono, campanas, glockenspiel), que pueden tocar melodías, y de <b>altura indeterminada</b> (caja, bombo, platillos, triángulo), que aportan ritmo y color.</p>
      <p>Desde el siglo XX existen los <b>electrófonos</b>: sintetizadores, cajas de ritmos, samplers y software que generan o transforman el sonido. Permiten crear timbres que no existen en la naturaleza y son la base del pop, la electrónica y las bandas sonoras actuales.</p>`,
      svg: B.comparar("Percusión de altura determinada e indeterminada", ["Determinada", ["timbales", "xilófono", "campanas", "puede hacer melodía"]], ["Indeterminada", ["caja, bombo", "platillos", "triángulo", "ritmo y color"]]),
    },
    {
      h: "La voz humana",
      html: `<p>La voz es el instrumento más antiguo. Se clasifica por su <b>tesitura</b>, el conjunto de notas que puede cantar con comodidad. En las voces femeninas, de aguda a grave: <b>soprano</b>, <b>mezzosoprano</b> y <b>contralto</b>. En las masculinas: <b>tenor</b>, <b>barítono</b> y <b>bajo</b>.</p>
      <p>Cada estilo cultiva un timbre vocal distinto: la voz lírica de la ópera, la voz rasgada del rock, la voz «rota» del flamenco o la voz susurrada y procesada del pop actual.</p>`,
      svg: B.capas("Tipos de voz, de la más aguda a la más grave", [["Soprano", "femenina aguda"], ["Mezzo", "femenina media"], ["Contralto", "femenina grave"], ["Tenor", "masculina aguda"], ["Barítono", "masculina media"], ["Bajo", "masculina grave"]]),
    },
    {
      h: "Agrupaciones instrumentales y vocales",
      html: `<p>La <b>orquesta sinfónica</b> reúne entre 60 y 100 músicos: cuerda delante, viento madera en el centro, metal y percusión al fondo, todos dirigidos por un director. La <b>orquesta de cámara</b> es más pequeña. Entre las agrupaciones reducidas destacan el <b>cuarteto de cuerda</b> (dos violines, viola y violonchelo) y el <b>quinteto de viento</b>.</p>
      <p>Otras agrupaciones son la <b>banda</b> (viento y percusión), la <b>big band</b> de jazz, el <b>grupo de rock o pop</b> (voz, guitarras, bajo, batería, teclados) y el <b>coro</b> (a cuatro voces: soprano, contralto, tenor y bajo).</p>`,
      svg: B.orquesta("Disposición habitual de la orquesta sinfónica"),
      video: { id: "v-qNppthH-8", titulo: "La orquesta sinfónica: secciones e instrumentos", canal: "Repentizando", vistas: 111326 },
    },
    {
      h: "La orquestación y cómo analizar el timbre",
      html: `<p>La <b>orquestación</b> es el arte de repartir la música entre los instrumentos. Un mismo tema cambia por completo si lo toca una flauta sola o toda la sección de metal. Maestros como Ravel o Rimski-Kórsakov usaron el timbre como protagonista: el <i>Bolero</i> repite la misma melodía cambiando solo los instrumentos.</p>
      <p>Para analizar el timbre pregúntate: ¿qué instrumentos o voces suenan? ¿Qué agrupación es? ¿Quién lleva la melodía y quién acompaña? ¿Cómo cambia la instrumentación de una sección a otra y qué efecto produce?</p>`,
      svg: B.flujo("Cuatro preguntas para analizar el timbre", ["¿Qué instrumentos y voces?", "¿Qué agrupación?", "¿Quién lleva la melodía?", "¿Cómo cambia y para qué?"]),
      video: { id: "vIcIn9B26H4", titulo: "Ravel, maestro de la orquestación", canal: "Sheila Blanco", vistas: 169412 },
    },
  ],
  figura: {
    titulo: "El timbre y sus fuentes",
    items: [["Timbre", "〰〰", "armónicos", "ataque, material"], ["Cuerda", "🎻", "frotada, pulsada", "percutida"], ["Viento", "🎺", "madera", "metal"], ["Percusión", "🥁", "altura determinada", "e indeterminada"]],
  },
  video: { id: "4vbvhU22uAM", titulo: "Britten: The Young Person's Guide to the Orchestra", canal: "ARD Klassik (Orquesta Sinfónica de la WDR)", vistas: 4321078 },
  quiz: [
    ["El timbre depende sobre todo de…", ["la frecuencia fundamental", "los armónicos y el ataque del sonido", "la duración", "el compás"], 1, "La mezcla de armónicos da el «color»."],
    ["Un instrumento en el que vibra una columna de aire es un…", ["cordófono", "aerófono", "membranófono", "idiófono"], 1, "Flauta, trompeta, clarinete…"],
    ["Los platillos son…", ["idiófonos", "membranófonos", "aerófonos", "cordófonos"], 0, "Vibra el propio cuerpo del instrumento."],
    ["El instrumento más grave de la cuerda frotada es el…", ["violonchelo", "contrabajo", "viola", "violín"], 1, "Es también el más grande."],
    ["Tocar pellizcando las cuerdas de un violín se llama…", ["arco", "pizzicato", "trémolo", "glissando"], 1, "Pizzicato: pellizcado."],
    ["El oboe pertenece al…", ["viento metal", "viento madera", "percusión", "cuerda"], 1, "Tiene lengüeta doble."],
    ["¿Cuál de estos es de altura determinada?", ["Bombo", "Caja", "Timbales", "Triángulo"], 2, "Los timbales se afinan."],
    ["La voz femenina más aguda es…", ["contralto", "mezzosoprano", "soprano", "tenor"], 2, "Soprano."],
    ["Un cuarteto de cuerda lo forman…", ["cuatro violines", "dos violines, viola y violonchelo", "violín, flauta, piano y voz", "guitarra, bajo, batería y voz"], 1, "Es la agrupación de cámara clásica."],
    ["El arte de repartir la música entre los instrumentos es la…", ["armonía", "orquestación", "tesitura", "forma"], 1, "Ravel fue un maestro de ella."],
  ],
  examen: [
    ["El sintetizador es un…", ["aerófono", "electrófono", "idiófono", "cordófono"], 1, "El sonido se genera con circuitos eléctricos."],
    ["En la orquesta sinfónica, ¿qué familia se sitúa normalmente delante, junto al director?", ["Metal", "Percusión", "Cuerda", "Madera"], 2, "La cuerda es la base y va delante."],
    ["El piano se considera cuerda…", ["frotada", "pulsada", "percutida", "soplada"], 2, "Unos macillos golpean las cuerdas."],
    ["La tesitura es…", ["el timbre de una voz", "el conjunto de notas que una voz canta con comodidad", "un tipo de coro", "la intensidad"], 1, "Permite clasificar las voces."],
    ["En el Bolero de Ravel, lo que más cambia a lo largo de la obra es…", ["la melodía", "el ritmo", "la instrumentación y la intensidad", "el compás"], 2, "La misma melodía pasa por distintos instrumentos y crece."],
  ],
  feynman: ["Qué es el timbre y de qué depende", "La clasificación de Hornbostel y Sachs", "Las familias de la orquesta y su disposición", "Para qué sirve la orquestación"],
  mapa: ["TIMBRE E INSTRUMENTACIÓN", [["Timbre", "armónicos · ataque · material"], ["Instrumentos", "cuerda · viento · percusión · electrónicos"], ["Voz", "soprano · contralto · tenor · bajo"], ["Agrupaciones", "orquesta · cámara · banda · coro"]]],
  tarjetas: [
    ["Timbre", "Cualidad que distingue sonidos de distintas fuentes."],
    ["Armónicos", "Sonidos más agudos que acompañan a la nota fundamental."],
    ["Aerófono", "Instrumento en el que vibra una columna de aire."],
    ["Cordófono", "Instrumento en el que vibra una cuerda."],
    ["Idiófono", "Instrumento que vibra con su propio cuerpo."],
    ["Electrófono", "Instrumento que genera el sonido electrónicamente."],
    ["Tesitura", "Notas que una voz o instrumento produce con comodidad."],
    ["Orquestación", "Reparto de la música entre los instrumentos."],
  ],
  ejemplos: [
    ["Clasifica según Hornbostel y Sachs: guitarra eléctrica, cajón flamenco, saxofón y theremín.", ["Guitarra eléctrica: vibra una cuerda (amplificada): cordófono.", "Cajón: vibra la madera del propio instrumento: idiófono.", "Saxofón: vibra el aire con una lengüeta: aerófono.", "Theremín: genera el sonido con circuitos: electrófono."], "Cordófono, idiófono, aerófono y electrófono."],
    ["Describe la instrumentación de una canción de rock típica.", ["Voz principal (y coros).", "Guitarras eléctricas: cordófonos amplificados.", "Bajo eléctrico: cordófono grave.", "Batería: membranófonos e idiófonos."], "Voz, guitarras, bajo y batería; a veces teclados electrónicos."],
    ["Analiza cómo usa el timbre el Bolero de Ravel en sus primeros minutos.", ["Empieza la caja con el ostinato y la flauta toca la melodía muy suave.", "La melodía pasa al clarinete, al fagot y a otros instrumentos solistas.", "Cada repetición añade instrumentos y aumenta la intensidad."], "El timbre es el elemento que cambia y hace crecer la obra."],
  ],
  errores: [
    "Pensar que la flauta es de madera por estar en el «viento madera»: suele ser de metal.",
    "Confundir timbre con intensidad o con altura.",
    "Clasificar el piano como percusión sin matizar que es cuerda percutida.",
    "Nombrar solo «instrumentos» al analizar, sin decir quién lleva la melodía y quién acompaña.",
  ],
  ejercicios: {
    b: [
      ["Define timbre.", "Cualidad del sonido que permite distinguir fuentes distintas aunque produzcan la misma nota con la misma intensidad."],
      ["Nombra los cuatro instrumentos de la cuerda frotada de agudo a grave.", "Violín, viola, violonchelo y contrabajo."],
      ["Clasifica: trompeta, clarinete, timbal y triángulo.", "Trompeta: viento metal (aerófono). Clarinete: viento madera (aerófono). Timbal: percusión de altura determinada (membranófono). Triángulo: percusión indeterminada (idiófono)."],
      ["Ordena las voces masculinas de aguda a grave.", "Tenor, barítono y bajo."],
    ],
    m: [
      ["¿Por qué la clasificación de Hornbostel y Sachs es más precisa que la tradicional?", "Porque clasifica según el elemento que vibra, y así evita contradicciones como la flauta metálica en «madera» o el piano con cuerdas tratado como percusión."],
      ["Explica qué son los armónicos y por qué influyen en el timbre.", "Son sonidos más agudos y débiles que acompañan a la fundamental; cada instrumento los produce en proporciones distintas, lo que da a la onda una forma propia que el oído reconoce como timbre."],
      ["Describe la disposición de la orquesta sinfónica.", "Cuerda delante en semicírculo, viento madera detrás en el centro, viento metal y percusión al fondo, y el director de frente a los músicos."],
      ["¿Qué diferencia hay entre una orquesta sinfónica y una banda?", "La orquesta tiene cuerda como base; la banda está formada por viento y percusión."],
    ],
    a: [
      ["Escucha The Young Person's Guide to the Orchestra y anota con minutaje la entrada de cada familia.", "Respuesta abierta: tutti inicial, después madera, metal, cuerda y percusión; luego cada instrumento en su variación y fuga final."],
      ["Elige una banda sonora de cine y explica cómo usa el timbre para crear emociones en una escena.", "Respuesta abierta: identificar instrumentos, quién lleva la melodía, cambios de orquestación y su relación con lo que ocurre en la escena (tensión, alegría, misterio)."],
    ],
  },
  glosario: [
    ["Armónico", "Sonido secundario más agudo que acompaña a la fundamental."],
    ["Ataque", "Forma en que comienza un sonido."],
    ["Pizzicato", "Técnica de pellizcar las cuerdas de un instrumento de arco."],
    ["Lengüeta", "Lámina que vibra con el aire en algunos instrumentos de viento."],
    ["Boquilla", "Pieza donde vibran los labios en el viento metal."],
    ["Tesitura", "Ámbito de notas cómodo para una voz o instrumento."],
    ["Tutti", "Pasaje en el que toca toda la orquesta."],
    ["Cuarteto de cuerda", "Dos violines, viola y violonchelo."],
    ["Sampler", "Aparato que graba y reproduce sonidos para tocarlos como instrumento."],
    ["Orquestación", "Arte de distribuir la música entre los instrumentos."],
  ],
  situacion: {
    titulo: "La misma melodía, diez colores",
    reto: "Grabar una melodía conocida con diferentes timbres y explicar cómo cambia su carácter.",
    pasos: [
      "Elegid una melodía sencilla que todos conozcáis.",
      "Interpretadla o programadla con al menos cinco timbres distintos (voces, instrumentos de clase, sintetizador).",
      "Montad un audio que encadene las versiones.",
      "Explicad qué transmite cada versión y por qué.",
    ],
    producto: "Un audio con las versiones y una ficha de análisis tímbrico.",
    evaluacion: [
      "Clasifica correctamente los timbres usados.",
      "Relaciona timbre y carácter con argumentos.",
      "La grabación está bien organizada.",
      "Usa vocabulario técnico.",
    ],
  },
  familias: [
    "Jugad a adivinar instrumentos escuchando grabaciones sin mirar.",
    "Ved juntos un concierto de orquesta y localizad cada familia.",
    "Escuchad el Bolero de Ravel y contad los instrumentos que llevan la melodía.",
    "Comentad qué tipo de voz tienen vuestros cantantes favoritos.",
  ],
  saberes: "Análisis Musical I: el timbre y los armónicos; clasificación de los instrumentos (orquestal y Hornbostel-Sachs); cuerda, viento madera, viento metal, percusión y electrófonos; la voz humana y su tesitura; agrupaciones instrumentales y vocales; la orquestación.",
  ideas: [
    "Audición guiada de la Guía de orquesta de Britten.",
    "Ver el espectro de distintos instrumentos con una app gratuita.",
    "Invitar a músicos del conservatorio a presentar sus instrumentos.",
    "Comparar una canción en versión acústica, orquestal y electrónica.",
  ],
  fuentes: [
    { t: "The Young Person's Guide to the Orchestra, Wikipedia", url: "https://es.wikipedia.org/wiki/The_Young_Person%27s_Guide_to_the_Orchestra" },
    { t: "Clasificación de Hornbostel-Sachs, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Hornbostel-Sachs" },
  ],
});
