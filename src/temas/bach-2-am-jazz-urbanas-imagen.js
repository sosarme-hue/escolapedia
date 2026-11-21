// Análisis Musical II, 2º de Bachillerato. Tema 9 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-am");

module.exports = B.tema({
  titulo: "El jazz, las músicas urbanas y la música para la imagen",
  minutos: 60,
  objetivos: [
    "Reconocer los rasgos del blues y el jazz: escala de blues, swing, improvisación y forma",
    "Analizar la forma y la producción de una canción de música popular urbana",
    "Identificar las funciones de la música en el cine y los videojuegos",
    "Aplicar el comentario de audición a músicas actuales",
  ],
  claves: ["blues", "swing", "improvisación", "estándar", "estrofa-estribillo", "producción", "leitmotiv", "música adaptativa"],
  pregunta: {
    texto: "¿Por qué un buen músico de jazz nunca toca dos veces igual la misma canción?",
    respuesta: "Porque el jazz se basa en la <mark>improvisación</mark>: sobre una estructura fija de acordes (el «chorus»), cada solista crea en el momento melodías nuevas. La partitura es solo un punto de partida; la obra es la interpretación de esa noche.",
  },
  lectura: {
    titulo: "De Nueva Orleans a Spotify",
    html: `<p>A comienzos del siglo XX, en Nueva Orleans, las bandas afroamericanas mezclaron el blues, los cantos de trabajo, el ragtime y las marchas de las bandas militares. Nació el jazz, y con él una manera nueva de entender el ritmo y la libertad del intérprete. De esa raíz brotaron el rhythm and blues, el rock and roll, el soul, el funk y, más tarde, el hip hop.</p>
    <p>Al mismo tiempo, el cine sonoro y después los videojuegos crearon una música que no se escucha sola, sino unida a la imagen. En este tema aplicarás las herramientas del análisis a las músicas que más escuchas cada día.</p>`,
  },
  secciones: [3, 2, 3],
  bloques: [
    {
      h: "El blues",
      html: `<p>El <b>blues</b> nace en el sur de Estados Unidos a finales del siglo XIX. Su forma más típica es el <b>blues de doce compases</b>, con una progresión fija sobre los grados I, IV y V, y un texto en estrofas AAB: un verso, su repetición y una respuesta.</p>
      <p>Su sonido característico se debe a las <b>blue notes</b>: la tercera, la quinta y la séptima rebajadas, que dan un color entre mayor y menor. La <b>escala de blues</b> las incluye. Otro rasgo es la <b>llamada y respuesta</b> entre la voz y la guitarra.</p>`,
      svg: B.rejilla("Blues de doce compases", ["Compases", "Acordes", "Verso"], [["1-4", "I I I I", "A: planteamiento"], ["5-8", "IV IV I I", "A: repetición"], ["9-12", "V IV I V", "B: respuesta"]]),
    },
    {
      h: "Rasgos del jazz",
      html: `<p>El jazz se reconoce por el <b>swing</b>: las corcheas no se tocan iguales, sino largas-cortas, con un balanceo característico y acentos en los tiempos débiles (2 y 4). La <b>síncopa</b> es constante. La plantilla típica tiene una <b>sección rítmica</b> (piano, contrabajo, batería; a veces guitarra) y <b>solistas</b> (trompeta, saxofón, trombón, clarinete).</p>
      <p>La armonía usa acordes enriquecidos (séptimas, novenas, alteraciones) y la progresión <b>ii-V-I</b>. El timbre es muy personal: cada músico tiene su «sonido».</p>`,
      svg: B.estrella("Rasgos del jazz", "Jazz", ["Swing", "Síncopa", "Improvisación", "Blue notes", "Acordes 7.ª", "Sección rítmica"]),
    },
    {
      h: "La forma de un tema de jazz",
      html: `<p>Una interpretación de jazz suele seguir este esquema: <b>introducción</b>; exposición del <b>tema</b> (head), a menudo un <b>estándar</b> de 32 compases en forma <b>AABA</b> o un blues; varias rondas de <b>improvisaciones</b> (chorus) de los solistas sobre la misma secuencia de acordes, a veces con intercambios de cuatro compases con la batería (<i>fours</i>); vuelta al tema y <b>coda</b>.</p>
      <p>En el comentario, indica con minutaje quién improvisa en cada chorus.</p>`,
      svg: B.formas("Esquema de una interpretación de jazz", [["Estándar", "A A B A"], ["Actuación", "Intro Tema Solos Solos Tema Coda"]], "Head, chorus de solos y vuelta al tema"),
    },
    {
      h: "Estilos del jazz",
      html: `<p>El jazz cambia rápido. El de <b>Nueva Orleans</b> (Louis Armstrong) practica la improvisación colectiva. El <b>swing</b> de las big bands (Duke Ellington, Count Basie) es música de baile con secciones de metal y saxos. El <b>bebop</b> (Charlie Parker, Dizzy Gillespie) es rápido y virtuoso, para escuchar. El <b>cool</b> y el <b>modal</b> (Miles Davis, <i>Kind of Blue</i>) son más relajados; el <b>free jazz</b> (Ornette Coleman) rompe con la armonía; y el <b>jazz fusión</b> incorpora el rock y la electrónica. En España destaca el <b>flamenco jazz</b>, con músicos como Jorge Pardo o Chano Domínguez.</p><p>Para situar un fragmento, fíjate en el tempo, en el tamaño del grupo y en si hay o no una armonía clara de fondo.</p>`,
      svg: B.cronologia("Estilos del jazz", [["1917", "Nueva Orleans"], ["1935", "swing"], ["1945", "bebop"], ["1959", "modal"], ["1960", "free"], ["1970", "fusión"]]),
    },
    {
      h: "Las músicas populares urbanas",
      html: `<p>Del blues surgen el <b>rhythm and blues</b> y el <b>rock and roll</b> (años cincuenta), y después el pop, el soul, el funk, el heavy, el punk, la electrónica de baile, el <b>hip hop</b> (rap, DJ, samples) y los géneros latinos urbanos como el reguetón. Su forma más común es <b>estrofa-estribillo</b>: intro, estrofa, preestribillo, estribillo, estrofa, estribillo, <b>puente</b> y estribillo final, a veces con modulación.</p>
      <p>La plantilla típica es voz, guitarra eléctrica, bajo, batería y teclados o sintetizadores.</p>`,
      svg: B.formas("Forma estrofa-estribillo", [["Canción", "In E Pe Es E Es P Es"]], "Intro · estrofa · preestribillo · estribillo · puente"),
    },
    {
      h: "Analizar una canción actual",
      html: `<p>Además de la forma, en la música urbana el <b>estudio de grabación</b> es parte de la obra. Analiza la <b>producción</b>: capas de instrumentos, efectos (reverberación, distorsión, autotune), el patrón de la batería, si hay <b>samples</b> (fragmentos de otras grabaciones) o bucles. Describe el <b>groove</b> (la base rítmica), el tempo en pulsaciones por minuto y cómo se construye la energía hasta el estribillo (el <b>drop</b> en la electrónica).</p>
      <p>Y, como en cualquier comentario, relaciona todo con el contexto: género, público y medio de difusión.</p>`,
      svg: B.flujo("Analizar una canción", ["Forma con minutaje", "Plantilla y timbre", "Groove y tempo", "Producción y efectos", "Contexto y público"]),
    },
    {
      h: "La música en el cine",
      html: `<p>La música de cine puede ser <b>diegética</b> (la oyen los personajes: una radio, una banda en la escena) o <b>extradiegética</b> (solo la oye el espectador). Sus funciones son crear <b>ambiente</b>, expresar <b>emociones</b>, dar <b>continuidad</b> entre planos, anticipar lo que va a pasar o identificar personajes con <b>leitmotivs</b>, como en las bandas sonoras de John Williams o Howard Shore.</p>
      <p>A veces la música contradice la imagen (contrapunto audiovisual) para crear ironía o inquietud. En España, Alberto Iglesias o Roque Baños son referentes.</p>`,
      svg: B.comparar("Dos tipos de música en el cine", ["Diegética", ["la oyen los personajes", "fuente en la escena", "radio, banda", "realismo"]], ["Extradiegética", ["solo el espectador", "banda sonora", "emoción", "leitmotivs"]]),
      video: { id: "5FoFaGFBK0s", titulo: "¿Qué es un leitmotiv en el cine? (ejemplos)", canal: "pluscuamperfecto", vistas: 35917 },
    },
    {
      h: "La música de los videojuegos",
      html: `<p>La música de videojuegos tiene un reto propio: no sabe cuánto durará cada escena. Por eso es <b>adaptativa</b> o interactiva: se construye en <b>bucles</b> que pueden repetirse sin cortes y en <b>capas</b> que se añaden o quitan según lo que haga el jugador (explorar, combatir, peligro). Usa <b>leitmotivs</b> para personajes y lugares y efectos sonoros integrados.</p>
      <p>Del sonido de 8 bits de los primeros juegos se ha pasado a grandes partituras orquestales que hoy se interpretan en salas de concierto.</p>`,
      svg: B.capas("Música adaptativa por capas", [["Explorar", "base tranquila"], ["Peligro", "+ percusión"], ["Combate", "+ metal y tempo"]]),
      video: { id: "4L16jweO1rM", titulo: "¿Qué hace a la música de los niveles de agua sonar así? Análisis musical de videojuegos", canal: "Ludofonía", vistas: 2937139 },
    },
  ],
  figura: {
    titulo: "Claves del jazz, lo urbano y la imagen",
    items: [["Blues", "12 compases", "I · IV · V", "blue notes"], ["Jazz", "swing", "tema · solos", "· tema"], ["Urbanas", "E · Es · P", "producción", "y groove"], ["Imagen", "leitmotiv", "diegética", "adaptativa"]],
  },
  video: { id: "4xDvTZPYqZQ", titulo: "¿Qué es el jazz?", canal: "La Cata Musical", vistas: 583751 },
  quiz: [
    ["El blues de doce compases usa sobre todo los grados…", ["ii, iii, vi", "I, IV y V", "solo el I", "VII y II"], 1, "Progresión fija."],
    ["Las blue notes son…", ["notas agudas", "tercera, quinta y séptima rebajadas", "notas largas", "acordes"], 1, "Color entre mayor y menor."],
    ["El swing consiste en…", ["tocar muy rápido", "corcheas largas-cortas con balanceo", "no tener pulso", "tocar a contratiempo siempre"], 1, "Ritmo característico del jazz."],
    ["Un estándar de jazz suele tener forma…", ["ABA", "AABA de 32 compases", "rondó", "sonata"], 1, "Tin Pan Alley."],
    ["Charlie Parker es figura del…", ["swing", "bebop", "free jazz", "Nueva Orleans"], 1, "Rápido y virtuoso."],
    ["Kind of Blue de Miles Davis es jazz…", ["modal", "Nueva Orleans", "fusión", "free"], 0, "1959."],
    ["El puente en una canción pop es…", ["la introducción", "una sección contrastante antes del último estribillo", "la estrofa", "el final"], 1, "Aporta variedad."],
    ["Un sample es…", ["un instrumento", "un fragmento de otra grabación", "un acorde", "un tipo de voz"], 1, "Base del hip hop."],
    ["La música que oyen los personajes de una película es…", ["extradiegética", "diegética", "adaptativa", "incidental"], 1, "Su fuente está en la escena."],
    ["La música de videojuegos se adapta usando…", ["formas cerradas", "bucles y capas", "solo voz", "recitativos"], 1, "Responde al jugador."],
  ],
  examen: [
    ["Trompeta, saxo, piano, contrabajo y batería; tema, solos y vuelta al tema. ¿Qué es?", ["Rock", "Jazz", "Música de cine", "Pop"], 1, "Forma head-solos-head."],
    ["Un verso se canta, se repite y se responde sobre I-IV-V en doce compases. Es un…", ["estándar", "blues", "rondó", "lied"], 1, "Estrofa AAB."],
    ["Un tema musical suena cada vez que aparece el villano. ¿Qué recurso es?", ["Diegesis", "Leitmotiv", "Sample", "Drop"], 1, "Asociación personaje-motivo."],
    ["En un juego, la música añade percusión al acercarse un enemigo. Es música…", ["diegética", "adaptativa", "aleatoria", "concreta"], 1, "Capas interactivas."],
    ["En una canción, la sección que más se repite con el título suele ser…", ["el puente", "el estribillo", "la intro", "la estrofa"], 1, "El gancho."],
  ],
  feynman: ["El blues de doce compases", "Swing, improvisación y forma del jazz", "Cómo analizar una canción actual", "Funciones de la música en el cine y los videojuegos"],
  mapa: ["JAZZ, URBANAS E IMAGEN", [["Blues y jazz", "I-IV-V · swing · solos"], ["Estilos", "N. Orleans · swing · bebop · modal"], ["Urbanas", "estrofa-estribillo · producción"], ["Imagen", "cine · videojuegos · leitmotiv"]]],
  tarjetas: [
    ["Blue note", "Nota rebajada típica del blues."],
    ["Swing", "Balanceo rítmico de las corcheas en el jazz."],
    ["Estándar", "Tema de jazz conocido, a menudo AABA de 32 compases."],
    ["Chorus", "Una vuelta completa a la secuencia de acordes."],
    ["Puente", "Sección contrastante de una canción."],
    ["Sample", "Fragmento de una grabación reutilizado."],
    ["Música diegética", "Música que existe dentro de la historia."],
    ["Música adaptativa", "Música de videojuego que cambia con la acción."],
  ],
  ejemplos: [
    ["Analiza: piano y contrabajo con swing, trompeta expone un tema AABA (0:00-0:55), solos de saxo (0:55) y piano (2:00), vuelta al tema (3:05).", ["Swing y plantilla: jazz.", "Head en AABA.", "Solos sobre la misma secuencia."], "Interpretación de un estándar: Tema · solos de saxo y piano · Tema."],
    ["Escribe la forma: intro 0:00, estrofa 0:08, estribillo 0:38, estrofa 0:58, estribillo 1:28, puente 1:50, estribillo 2:10.", ["Etiquetas: In, E, Es, P."], "In E Es E Es P Es: forma estrofa-estribillo con puente."],
    ["En una película, un personaje enciende la radio y suena una canción; después, una orquesta acompaña su llanto. Clasifica ambas músicas.", ["La radio está en la escena.", "La orquesta solo la oye el espectador."], "Primero diegética, después extradiegética."],
  ],
  errores: [
    "Decir que el jazz se toca siempre igual que en la partitura.",
    "Confundir estribillo y puente en una canción.",
    "Olvidar analizar la producción en la música urbana.",
    "Pensar que toda música de cine es extradiegética.",
  ],
  ejercicios: {
    b: [
      ["Escribe la progresión del blues de doce compases.", "I I I I | IV IV I I | V IV I V (con variantes)."],
      ["Define swing e improvisación.", "Swing: balanceo largo-corto de las corcheas. Improvisación: creación de música en el momento."],
      ["Nombra las secciones de una canción estrofa-estribillo.", "Intro, estrofa, preestribillo, estribillo, puente y final o coda."],
      ["Diferencia música diegética y extradiegética.", "Diegética: la oyen los personajes. Extradiegética: solo el espectador."],
    ],
    m: [
      ["Explica la estructura de una actuación de jazz.", "Introducción, tema (head), improvisaciones de los solistas en chorus, intercambios con la batería, vuelta al tema y coda."],
      ["Compara el swing de las big bands con el bebop.", "Swing: música de baile, grandes orquestas, arreglos escritos. Bebop: pequeños grupos, tempos rápidos, improvisación virtuosa, para escuchar."],
      ["¿Qué aspectos de producción analizarías en una canción de hip hop?", "Base rítmica (groove), samples, bucles, efectos en la voz, capas de sintetizador y mezcla."],
      ["¿Por qué la música de videojuegos usa bucles y capas?", "Porque la duración y la acción dependen del jugador: los bucles evitan cortes y las capas cambian la intensidad."],
    ],
    a: [
      ["Analiza un estándar de jazz con minutaje: tema, solistas, chorus y forma.", "Respuesta abierta: identificar el estándar, la forma AABA o blues, cada solista con su minutaje y los rasgos de swing y armonía."],
      ["Comenta una escena de película con tres funciones de la música.", "Respuesta abierta: ambiente, emoción, leitmotiv, anticipación o continuidad, con ejemplos concretos y minutaje."],
    ],
  },
  glosario: [
    ["Llamada y respuesta", "Diálogo entre una voz o instrumento y otro."],
    ["Síncopa", "Acento desplazado a una parte débil."],
    ["Sección rítmica", "Piano, contrabajo y batería en el jazz."],
    ["Big band", "Gran orquesta de jazz de la era del swing."],
    ["Bebop", "Jazz rápido y virtuoso de los años cuarenta."],
    ["Groove", "Patrón rítmico de base de una canción."],
    ["Drop", "Momento de máxima energía en la electrónica de baile."],
    ["Contrapunto audiovisual", "Música que contrasta con la imagen."],
    ["Bucle", "Fragmento que se repite sin cortes."],
  ],
  situacion: {
    titulo: "Banda sonora para un tráiler",
    reto: "Crear la música de un tráiler de un minuto con leitmotiv y capas.",
    pasos: [
      "Elegid un vídeo breve sin sonido (tráiler o escena propia).",
      "Inventad un leitmotiv para el protagonista.",
      "Construid tres capas que se añadan según aumenta la tensión.",
      "Sincronizad la música con la imagen y explicad las decisiones.",
    ],
    producto: "Un vídeo con banda sonora original y una memoria de análisis.",
    evaluacion: [
      "El leitmotiv es reconocible.",
      "Las capas siguen la tensión de la imagen.",
      "La sincronización es precisa.",
      "La memoria usa vocabulario técnico.",
    ],
  },
  familias: [
    "Escuchad juntos Kind of Blue y comentad quién improvisa.",
    "Analizad la forma de vuestra canción favorita con minutaje.",
    "Ved una escena sin sonido y luego con música, y comparad.",
    "Pedidle que os explique cómo cambia la música de su videojuego favorito.",
  ],
  saberes: "Análisis Musical II: el blues y el jazz (forma de doce compases, blue notes, swing, improvisación, estándares AABA, estilos); músicas populares urbanas (forma estrofa-estribillo, plantilla, producción, groove, samples); música para la imagen (diegética y extradiegética, funciones, leitmotiv) y música de videojuegos (adaptativa, bucles y capas).",
  ideas: [
    "Improvisar con la escala de blues sobre una base de doce compases.",
    "Analizar en grupo la forma de las canciones más escuchadas de la semana.",
    "Quitar el sonido a una escena y probar distintas músicas.",
    "Invitar a un músico de jazz o productor local.",
  ],
  fuentes: [
    { t: "Blues, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Blues" },
    { t: "Música de videojuegos, Wikipedia en español", url: "https://es.wikipedia.org/wiki/M%C3%BAsica_de_videojuegos" },
  ],
});
