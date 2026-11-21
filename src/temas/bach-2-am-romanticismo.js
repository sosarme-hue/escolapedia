// Análisis Musical II, 2º de Bachillerato. Tema 6 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-am");

module.exports = B.tema({
  titulo: "El Romanticismo: lied, piezas de carácter y poema sinfónico",
  minutos: 60,
  objetivos: [
    "Reconocer el estilo romántico: expresividad, cromatismo, rubato y gran orquesta",
    "Analizar el lied estrófico y el durchkomponiert y la relación voz-piano",
    "Identificar las piezas de carácter para piano y la música programática",
    "Distinguir la ópera romántica italiana y el drama musical de Wagner, y los nacionalismos",
  ],
  claves: ["lied", "durchkomponiert", "pieza de carácter", "rubato", "música programática", "poema sinfónico", "leitmotiv", "nacionalismo"],
  pregunta: {
    texto: "¿Cómo puede una obra sin palabras contar la historia de un río?",
    respuesta: "Con la <mark>música programática</mark>: el compositor parte de un relato o una imagen y la traduce en sonidos (dos flautas entrelazadas como dos manantiales, una danza campesina, unos rápidos en el metal). El oyente sigue el «programa» escrito y reconoce cada escena en la orquesta.",
  },
  lectura: {
    titulo: "Un río que suena",
    html: `<p>En <i>El Moldava</i> (1874), Smetana describe el río que atraviesa Bohemia: nace de dos fuentes (dos flautas), crece, pasa junto a una boda campesina, bajo la luz de la luna con las ninfas, se precipita en los rápidos de San Juan y llega majestuoso a Praga. Lo más curioso es que Smetana estaba ya completamente sordo cuando lo compuso.</p>
    <p>El Romanticismo (aproximadamente 1820-1900) quiso que la música expresara lo que las palabras no alcanzan: la pasión, la naturaleza, la patria, lo fantástico. En este tema aprenderás a reconocer sus géneros más típicos, del lied íntimo al gran poema sinfónico.</p>`,
  },
  secciones: [2, 3, 3],
  bloques: [
    {
      h: "El estilo romántico",
      html: `<p>La música romántica prioriza la <b>expresión</b> personal sobre el equilibrio. Las melodías son amplias y cantables; la armonía, más <b>cromática</b>, con acordes de séptima y novena, modulaciones a tonos lejanos y disonancias que tardan en resolverse. El tempo se flexibiliza con el <b>rubato</b> (robar y devolver tiempo) y la dinámica llega a extremos (de <i>ppp</i> a <i>fff</i>).</p>
      <p>Las formas clásicas se mantienen, pero se estiran o se rompen, y conviven con miniaturas de pocos minutos. El compositor se ve como un artista genial e independiente, no como un sirviente de la corte.</p>`,
      svg: B.comparar("Clasicismo y Romanticismo", ["Clasicismo", ["equilibrio", "frases simétricas", "armonía diatónica", "formas fijas"]], ["Romanticismo", ["expresión", "melodías amplias", "cromatismo", "formas libres"]]),
    },
    {
      h: "La orquesta y el virtuosismo",
      html: `<p>La orquesta crece hasta los cien músicos: más cuerda, maderas a tres o cuatro, más trompas, <b>tubas</b>, trombones, arpa, mucha percusión. Las válvulas permiten a trompas y trompetas tocar todas las notas, y los compositores exploran el <b>timbre</b> como un color expresivo.</p>
      <p>A la vez nace el <b>virtuoso</b>, la estrella de la sala de conciertos: <b>Paganini</b> en el violín y <b>Liszt</b> en el piano llevaron la técnica a límites que parecían sobrehumanos. El piano, con su marco de hierro y su gran sonoridad, es el instrumento romántico por excelencia.</p>`,
      svg: B.barras("Tamaño aproximado de la orquesta", [["Barroco", 20], ["Clasicismo", 40], ["Beethoven", 60], ["Wagner", 100], ["Mahler", 120]], { t: "Músicos en escena", unidad: "" }),
    },
    {
      h: "El lied",
      html: `<p>El <b>lied</b> («canción» en alemán) une un poema romántico, una voz y un piano que es mucho más que un acompañamiento: describe el paisaje, el estado de ánimo o la acción. En el <b>lied estrófico</b> todas las estrofas se cantan con la misma música (A A A). En el <b>lied durchkomponiert</b> («compuesto de principio a fin») la música cambia con el texto.</p>
      <p><b>Schubert</b> escribió más de seiscientos. En <i>El rey de los elfos</i>, el piano imita el galope con tresillos obsesivos y una sola voz interpreta a cuatro personajes. También son importantes los <b>ciclos</b> de canciones, como <i>Viaje de invierno</i>, y los lieder de Schumann y Brahms.</p>`,
      svg: B.formas("Dos tipos de lied", [["Estrófico", "A A A A"], ["Durchk.", "A B C D"]], "Misma música o música nueva para cada estrofa"),
      video: { id: "Pid2JyQ5EZU", titulo: "Der Erlkönig, Schubert (subtítulos en español)", canal: "Nianimation", vistas: 161548 },
    },
    {
      h: "Las piezas de carácter para piano",
      html: `<p>Son obras breves que expresan un solo ambiente o idea, con títulos sugerentes: <b>nocturno</b>, <b>impromptu</b>, <b>balada</b>, <b>romanza sin palabras</b>, <b>estudio</b>, <b>mazurca</b>, <b>polonesa</b>, <b>vals</b>. Su forma suele ser ternaria (A B A), con una sección central contrastante.</p>
      <p><b>Chopin</b> es el gran maestro: en sus nocturnos, la mano izquierda despliega acordes amplios y la derecha canta una melodía muy adornada, inspirada en la ópera italiana, con mucho rubato. <b>Schumann</b> agrupó piezas breves en ciclos (<i>Carnaval</i>, <i>Escenas de niños</i>) y <b>Liszt</b> escribió estudios de virtuosismo extremo.</p>`,
      svg: B.rejilla("Piezas de carácter", ["Tipo", "Rasgo", "Autor"], [["Nocturno", "lírico, nocturno", "Chopin"], ["Mazurca", "danza polaca 3/4", "Chopin"], ["Romanza", "canción sin texto", "Mendelssohn"], ["Estudio", "virtuosismo", "Liszt"]]),
      video: { id: "TEZH0oMuSJs", titulo: "Nocturno en mi bemol mayor op. 9 n.º 2 de Chopin: análisis", canal: "Sonata Secrets", vistas: 52174 },
    },
    {
      h: "La sinfonía romántica",
      html: `<p>Tras Beethoven, la sinfonía se vuelve un reto. <b>Schubert</b>, <b>Mendelssohn</b>, <b>Schumann</b> y <b>Brahms</b> mantienen los cuatro movimientos, pero con temas más líricos y desarrollos más amplios. <b>Berlioz</b> inventa la <b>Sinfonía fantástica</b> (1830), con un programa autobiográfico y una <b>idea fija</b>: una melodía que representa a la amada y reaparece transformada en cada movimiento.</p>
      <p>Al final del siglo, <b>Bruckner</b>, <b>Chaikovski</b>, <b>Dvořák</b> y <b>Mahler</b> escriben sinfonías enormes, a veces con coro, que duran más de una hora.</p>`,
      svg: B.cronologia("La sinfonía después de Beethoven", [["1828", "Schubert 9"], ["1830", "Fantástica"], ["1876", "Brahms 1"], ["1888", "Chaikovski 5"], ["1893", "Nuevo Mundo"], ["1895", "Mahler 2"]]),
    },
    {
      h: "Música programática y poema sinfónico",
      html: `<p>La <b>música programática</b> describe algo extramusical (un relato, un paisaje, un cuadro) y se acompaña de un texto explicativo, el programa. Su opuesto es la <b>música absoluta</b>, que no remite a nada fuera de sí misma, como defendía Brahms.</p>
      <p>El <b>poema sinfónico</b>, creado por <b>Liszt</b>, es una obra orquestal en un solo movimiento que sigue un programa con forma libre. Suele usar la <b>transformación temática</b>: un tema cambia de ritmo, modo o instrumentación según la escena. Ejemplos: <i>El Moldava</i> de Smetana, <i>Una noche en el Monte Pelado</i> de Músorgski, <i>Así habló Zaratustra</i> de Richard Strauss.</p>`,
      svg: B.flujo("El Moldava: el programa en la orquesta", ["Dos manantiales: flautas", "El río: tema en la cuerda", "Boda campesina: polca", "Rápidos: metal y percusión", "Praga: tema en mayor"]),
    },
    {
      h: "La ópera: Verdi y Wagner",
      html: `<p>La ópera italiana vive su época dorada con el <b>bel canto</b> de Rossini, Bellini y Donizetti y, sobre todo, con <b>Verdi</b> (<i>La traviata</i>, <i>Aida</i>), que mantiene los números (recitativo, aria, dúo, coro) con un drama intenso y melodías inolvidables.</p>
      <p>En Alemania, <b>Wagner</b> crea el <b>drama musical</b>, una «obra de arte total» que une poesía, música y escena. Elimina los números cerrados en favor de una <b>melodía infinita</b> continua y organiza todo mediante <b>leitmotivs</b>: breves motivos asociados a personajes, objetos o ideas que reaparecen y se transforman. La orquesta comenta lo que los personajes callan.</p>`,
      svg: B.comparar("Ópera italiana y drama wagneriano", ["Verdi", ["números cerrados", "aria y dúo", "voz protagonista", "melodía cantable"]], ["Wagner", ["fluir continuo", "leitmotiv", "orquesta protagonista", "arte total"]]),
    },
    {
      h: "Los nacionalismos",
      html: `<p>En la segunda mitad del siglo XIX, países de la periferia europea buscan una música propia basada en su <b>folclore</b>: melodías populares, ritmos de danzas, escalas modales y temas de su historia y leyendas. En Rusia destaca el <b>Grupo de los Cinco</b> (Músorgski, Rimski-Kórsakov, Borodín…); en Bohemia, <b>Smetana</b> y <b>Dvořák</b>; en Noruega, <b>Grieg</b>; en España, <b>Albéniz</b> y <b>Granados</b>, con ritmos y giros andaluces en el piano.</p>
      <p>Al analizar, busca giros modales, ritmos de danza local e instrumentos que imitan instrumentos populares, como la guitarra en el piano de Albéniz.</p>`,
      svg: B.rejilla("Escuelas nacionalistas", ["País", "Autores", "Obra"], [["Rusia", "Músorgski", "Cuadros de una exposición"], ["Bohemia", "Smetana", "Mi patria"], ["Noruega", "Grieg", "Peer Gynt"], ["España", "Albéniz", "Iberia"]]),
    },
  ],
  figura: {
    titulo: "Claves del Romanticismo",
    items: [["Expresión", "rubato", "cromatismo", "contrastes"], ["Lied", "voz + piano", "estrófico o", "durchkomponiert"], ["Programa", "poema sinf.", "música que", "cuenta"], ["Ópera", "Verdi · Wagner", "leitmotiv", "melodía infinita"]],
  },
  video: { id: "VW-u7jTW5LE", titulo: "«El Moldava» de «Mi patria», Bedřich Smetana", canal: "YouMoreTv - Cultura", vistas: 303658 },
  quiz: [
    ["El rubato consiste en…", ["tocar muy fuerte", "flexibilizar el tempo", "repetir un tema", "usar la voz"], 1, "Robar y devolver tiempo."],
    ["El lied es una canción para…", ["coro y orquesta", "voz y piano", "piano solo", "cuarteto"], 1, "Poema romántico alemán."],
    ["En el lied estrófico…", ["cada estrofa tiene música nueva", "todas las estrofas repiten la música", "no hay piano", "no hay texto"], 1, "A A A."],
    ["El nocturno es una…", ["pieza de carácter para piano", "ópera", "sinfonía", "danza barroca"], 0, "Chopin es su gran autor."],
    ["La idea fija aparece en…", ["la Sinfonía fantástica", "El Moldava", "Aida", "La traviata"], 0, "Berlioz, 1830."],
    ["El poema sinfónico fue creado por…", ["Wagner", "Liszt", "Verdi", "Schubert"], 1, "Un movimiento con programa."],
    ["La música que no describe nada fuera de sí misma es…", ["programática", "absoluta", "nacionalista", "incidental"], 1, "Defendida por Brahms."],
    ["Un motivo asociado a un personaje en Wagner es un…", ["leitmotiv", "ritornello", "sujeto", "aria"], 0, "Reaparece y se transforma."],
    ["Verdi compuso…", ["El anillo del nibelungo", "La traviata", "El Moldava", "Carnaval"], 1, "Ópera italiana."],
    ["Albéniz y Granados son nacionalistas…", ["rusos", "españoles", "noruegos", "checos"], 1, "Iberia, Goyescas."],
  ],
  examen: [
    ["Voz y piano en alemán; la música cambia por completo en cada estrofa. ¿Qué es?", ["Lied estrófico", "Lied durchkomponiert", "Aria da capo", "Coral"], 1, "Compuesto de principio a fin."],
    ["Una obra orquestal en un movimiento describe un río con un programa. Es un…", ["concierto", "poema sinfónico", "cuarteto", "nocturno"], 1, "Música programática."],
    ["Piano con melodía muy adornada, acordes amplios en la izquierda y rubato. ¿Autor probable?", ["Bach", "Chopin", "Haydn", "Wagner"], 1, "Nocturno romántico."],
    ["¿Qué rasgo es típico de Wagner?", ["Recitativo secco", "Números cerrados", "Leitmotiv y melodía infinita", "Bajo continuo"], 2, "Drama musical."],
    ["Una obra para piano imita la guitarra y usa ritmos andaluces. Pertenece al…", ["Clasicismo", "nacionalismo español", "impresionismo", "Barroco"], 1, "Albéniz, Granados."],
  ],
  feynman: ["Cinco rasgos del estilo romántico", "Lied estrófico y durchkomponiert", "Qué es un poema sinfónico", "Diferencias entre Verdi y Wagner"],
  mapa: ["EL ROMANTICISMO", [["Estilo", "expresión · cromatismo · rubato"], ["Piano y voz", "lied · piezas de carácter"], ["Orquesta", "sinfonía · poema sinfónico"], ["Ópera y nación", "Verdi · Wagner · nacionalismos"]]],
  tarjetas: [
    ["Rubato", "Flexibilidad expresiva del tempo."],
    ["Lied", "Canción romántica alemana para voz y piano."],
    ["Durchkomponiert", "Lied con música distinta para cada estrofa."],
    ["Pieza de carácter", "Obra breve de piano que expresa un ambiente."],
    ["Música programática", "Música que describe algo extramusical."],
    ["Poema sinfónico", "Obra orquestal en un movimiento con programa."],
    ["Leitmotiv", "Motivo asociado a un personaje o idea en Wagner."],
    ["Nacionalismo", "Música basada en el folclore y la historia de un país."],
  ],
  ejemplos: [
    ["Analiza El rey de los elfos de Schubert.", ["Voz y piano en alemán: lied.", "La música cambia con el relato: durchkomponiert.", "Tresillos del piano: galope; un cantante para cuatro personajes."], "Lied durchkomponiert con un piano descriptivo y dramático."],
    ["Escuchas un tema que aparece en flauta suave, luego en metales y después deformado. ¿Qué técnica es?", ["El mismo tema cambia de timbre y carácter.", "Asociado a una idea del programa."], "Transformación temática (o idea fija, si es Berlioz)."],
    ["Un nocturno: A (0:00) melodía lírica, B (1:40) más agitado en menor, A (3:10). Forma.", ["Tres secciones.", "Vuelta de A."], "Forma ternaria A B A."],
  ],
  errores: [
    "Confundir el lied con cualquier canción con orquesta.",
    "Llamar poema sinfónico a una sinfonía en cuatro movimientos.",
    "Pensar que en Wagner hay arias separadas por recitativos.",
    "Olvidar el papel descriptivo del piano en el lied.",
  ],
  ejercicios: {
    b: [
      ["Enumera cuatro rasgos del estilo romántico.", "Expresividad, melodías amplias, armonía cromática, rubato y contrastes extremos de dinámica (y gran orquesta)."],
      ["Define lied y nombra dos compositores.", "Canción para voz y piano sobre un poema alemán. Schubert y Schumann (o Brahms)."],
      ["Cita tres piezas de carácter.", "Nocturno, impromptu, mazurca (también balada, estudio, romanza sin palabras)."],
      ["¿Qué es un leitmotiv?", "Motivo musical asociado a un personaje, objeto o idea que reaparece transformado, típico de Wagner."],
    ],
    m: [
      ["Diferencia música programática y absoluta con un ejemplo de cada una.", "Programática: describe algo (El Moldava). Absoluta: solo música (sinfonías de Brahms)."],
      ["Compara el lied estrófico y el durchkomponiert.", "Estrófico: misma música en cada estrofa; durchkomponiert: música nueva que sigue el texto."],
      ["Explica qué aportó Berlioz con la Sinfonía fantástica.", "Un programa autobiográfico y la idea fija, una melodía que representa a la amada y se transforma en cada movimiento."],
      ["¿Qué busca la música nacionalista y cómo se reconoce?", "Una identidad propia; se reconoce por melodías y ritmos populares, escalas modales y temas históricos o legendarios."],
    ],
    a: [
      ["Escucha El Moldava y relaciona cinco momentos del programa con su orquestación.", "Respuesta abierta: manantiales en flautas, tema del río en violines, polca de la boda, ninfas con cuerda suave, rápidos con metal y percusión, Praga en mayor."],
      ["Compara un fragmento de La traviata con uno de Tristán e Isolda en cuatro rasgos.", "Respuesta abierta: números cerrados frente a continuidad, voz frente a orquesta protagonista, armonía diatónica frente a cromatismo, melodía cantable frente a leitmotivs."],
    ],
  },
  glosario: [
    ["Cromatismo", "Uso de semitonos fuera de la escala."],
    ["Virtuoso", "Intérprete de técnica excepcional."],
    ["Ciclo de canciones", "Serie de lieder con un hilo común."],
    ["Impromptu", "Pieza de piano de apariencia improvisada."],
    ["Idea fija", "Melodía recurrente de la Sinfonía fantástica."],
    ["Transformación temática", "Cambio de carácter de un mismo tema."],
    ["Bel canto", "Estilo vocal italiano de gran belleza y agilidad."],
    ["Drama musical", "Ópera wagneriana continua y total."],
    ["Melodía infinita", "Discurso musical sin cortes en Wagner."],
  ],
  situacion: {
    titulo: "Nuestro poema sinfónico",
    reto: "Crear una breve banda sonora descriptiva de un paisaje o recorrido de vuestra localidad.",
    pasos: [
      "Escribid un programa de cuatro escenas.",
      "Inventad un tema principal y decidid cómo se transformará en cada escena.",
      "Elegid instrumentos o sonidos para cada escena.",
      "Interpretad o grabad la obra y leed el programa antes de escucharla.",
    ],
    producto: "Un poema sinfónico breve con su programa escrito.",
    evaluacion: [
      "El programa es claro y está ordenado.",
      "El tema se transforma de forma reconocible.",
      "El timbre se usa con intención descriptiva.",
      "Se explica la relación entre música y programa.",
    ],
  },
  familias: [
    "Escuchad juntos El Moldava siguiendo el programa.",
    "Buscad un nocturno de Chopin para escuchar antes de dormir.",
    "Ved El rey de los elfos con subtítulos y comentad cómo cambia la voz.",
    "Escuchad la Danza ritual del fuego o Iberia y hablad de la música española.",
  ],
  saberes: "Análisis Musical II: la música del Romanticismo: rasgos de estilo, orquesta romántica y virtuosismo; lied estrófico y durchkomponiert; piezas de carácter para piano; sinfonía romántica y Sinfonía fantástica; música programática y poema sinfónico; ópera italiana y drama musical wagneriano (leitmotiv); nacionalismos.",
  ideas: [
    "Seguir un lied con el texto traducido y marcar qué describe el piano.",
    "Escuchar El Moldava con tarjetas de cada escena.",
    "Buscar leitmotivs en bandas sonoras actuales.",
    "Comparar un nocturno de Chopin con un aria de Bellini.",
  ],
  fuentes: [
    { t: "Poema sinfónico, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Poema_sinf%C3%B3nico" },
    { t: "Lied, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Lied" },
  ],
});
