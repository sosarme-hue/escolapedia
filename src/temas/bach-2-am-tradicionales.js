// Análisis Musical II, 2º de Bachillerato. Tema 10 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-am");

module.exports = B.tema({
  titulo: "Las músicas tradicionales: folclore, flamenco y músicas del mundo",
  minutos: 60,
  objetivos: [
    "Reconocer los rasgos de la música tradicional y su función social",
    "Identificar géneros del folclore español y catalán por su ritmo y plantilla",
    "Analizar el flamenco: palos, compás de doce tiempos y elementos del cante, toque y baile",
    "Describir músicas de otras culturas: raga, gamelán, polirritmia africana",
  ],
  claves: ["tradición oral", "folclore", "jota", "sardana", "palo", "compás de amalgama", "raga", "gamelán"],
  pregunta: {
    texto: "¿Cómo se puede contar hasta doce para bailar una bulería?",
    respuesta: "El flamenco usa un <mark>compás de doce tiempos</mark> con acentos en el 12, 3, 6, 8 y 10, que no coincide con nuestros compases habituales: mezcla grupos de tres y de dos. Las palmas marcan esos acentos y quien los domina «tiene compás».",
  },
  lectura: {
    titulo: "Músicas que nadie escribió",
    html: `<p>La mayor parte de la música que ha existido nunca se escribió en un papel. Se aprendió de oído, en la familia, en la plaza o en el trabajo, y cambió un poco con cada persona que la cantaba. Es la <b>música tradicional</b>: nanas, canciones de trabajo, danzas de fiesta, cantos de boda, romances.</p>
    <p>En España conviven tradiciones muy distintas, de la jota aragonesa a la muñeira gallega o la sardana catalana, y una de ellas, el flamenco, es Patrimonio Cultural Inmaterial de la Humanidad desde 2010. En este tema aprenderás a analizarlas y a compararlas con músicas de otros continentes.</p>`,
  },
  secciones: [2, 3, 3],
  bloques: [
    {
      h: "Qué es la música tradicional",
      html: `<p>La música tradicional o <b>folclórica</b> se transmite por <b>tradición oral</b>, suele ser <b>anónima</b> y colectiva, y existe en <b>variantes</b>: cada pueblo canta su versión. Está unida a una <b>función</b> concreta: trabajar, celebrar, rezar, cortejar, dormir a un bebé.</p>
      <p>Su estudio es la <b>etnomusicología</b>. En España, investigadores como Felipe Pedrell o Kurt Schindler recopilaron miles de canciones, y en Cataluña la <i>Obra del Cançoner Popular</i>. Hoy la tradición convive con versiones de grupos de folk que la renuevan con instrumentos y producción actuales.</p>`,
      svg: B.estrella("Rasgos de la música tradicional", "Tradición", ["Oral", "Anónima", "Variantes", "Función", "Colectiva", "Local"]),
    },
    {
      h: "Cómo analizar música tradicional",
      html: `<p>El comentario se adapta al repertorio. Describe la <b>función</b> (danza, trabajo, ronda, religiosa), la <b>plantilla</b> (voz sola, coro, instrumentos populares), la <b>escala</b> (mayor, menor, modal, con giros andaluces), el <b>ritmo</b> (de danza, libre o en amalgama) y la <b>forma</b>, normalmente estrófica, con estribillo o en alternancia de copla e interludios instrumentales.</p>
      <p>No olvides el <b>estilo vocal</b>: ornamentos, melismas, voz nasal o abierta, y si la interpretación es tradicional o una versión moderna.</p>`,
      svg: B.flujo("Analizar una pieza tradicional", ["Función y lugar", "Plantilla", "Escala y melodía", "Ritmo de danza", "Forma y estilo vocal"]),
    },
    {
      h: "El folclore español",
      html: `<p>Cada región tiene géneros propios. La <b>jota</b> (Aragón, Navarra, Valencia y otras) es una danza viva en 3/4 que alterna copla cantada e interludios instrumentales con guitarras, bandurrias y castañuelas. La <b>muñeira</b> gallega está en compás de 6/8 con gaita y pandereta. Las <b>seguidillas</b> y <b>sevillanas</b> son ternarias y se bailan en pareja. El <b>fandango</b> se extiende por toda la península.</p>
      <p>Instrumentos típicos: gaita, dulzaina, txistu, tamboril, pandero, castañuelas, guitarra y bandurria.</p>`,
      svg: B.rejilla("Géneros del folclore español", ["Género", "Compás", "Instrumentos"], [["Jota", "3/4", "guitarra, bandurria"], ["Muñeira", "6/8", "gaita, pandereta"], ["Sevillanas", "3/4", "guitarra, palmas"], ["Fandango", "3/4", "guitarra, castañuelas"]]),
    },
    {
      h: "La música tradicional catalana",
      html: `<p>La <b>sardana</b> es la danza catalana más conocida: se baila en corro y la interpreta la <b>cobla</b>, una formación de once músicos con <b>flabiol</b> y <b>tamborí</b>, tibles, tenoras, trompetas, fiscornos, trombón y contrabajo. Alterna <b>tirades curts</b> (pasos cortos) y <b>tirades llargs</b> (pasos largos), y los bailarines cuentan los compases para cerrar a la vez.</p>
      <p>Otras tradiciones son las <b>havaneres</b> (canciones marineras de ritmo cubano), el <b>ball de bastons</b> y las cançons populares como <i>El cant dels ocells</i>, que Pau Casals convirtió en símbolo.</p>`,
      svg: B.formas("Estructura de una sardana", [["Sardana", "Intro C C L L C L"]], "C tirada de curts · L tirada de llargs"),
    },
    {
      h: "El flamenco: cante, toque y baile",
      html: `<p>El <b>flamenco</b> nace en Andalucía en el siglo XVIII con aportaciones gitanas, andaluzas, árabes, judías y americanas. Tiene tres elementos: el <b>cante</b> (voz melismática, con quejíos y ornamentos), el <b>toque</b> (guitarra, con rasgueados, picados y falsetas) y el <b>baile</b> (zapateado, braceo). El <b>jaleo</b>, las <b>palmas</b> y, desde los años setenta, el <b>cajón</b> marcan el compás.</p>
      <p>Su armonía se basa en la <b>cadencia andaluza</b> (La menor-Sol-Fa-Mi) y en el <b>modo de Mi</b> o frigio, que da su sonido característico.</p>`,
      svg: B.cajas("Los tres elementos del flamenco", [["Cante", "voz, quejío|melismas"], ["Toque", "guitarra|falsetas"], ["Baile", "zapateado|braceo"]], { cols: 3 }),
      video: { id: "hfz30yz5kqY", titulo: "¿Cuál es el compás de la bulería? Cómo se tocan las palmas", canal: "Buscadores Flamencos", vistas: 451466 },
    },
    {
      h: "Los palos y sus compases",
      html: `<p>Cada estilo de flamenco es un <b>palo</b>, y se distinguen sobre todo por su <b>compás</b>. Los palos de <b>amalgama de doce tiempos</b> (soleá, alegrías, bulerías, seguiriya) acentúan 12, 3, 6, 8 y 10. Los <b>binarios</b> (tangos, tientos, farruca) van a cuatro tiempos. Los <b>ternarios</b> (fandangos, sevillanas) a tres. Los <b>libres</b> (tonás, martinetes, malagueñas, cantes de levante) no tienen compás fijo.</p>
      <p>También cuenta el carácter: los cantes jondos (soleá, seguiriya) son graves y profundos; los festeros (alegrías, bulerías, tangos), alegres.</p>`,
      svg: B.rejilla("Compases de algunos palos", ["Palo", "Compás", "Acentos"], [["Soleá", "amalgama 12", "12·3·6·8·10"], ["Bulería", "amalgama 12", "12·3·6·8·10"], ["Tangos", "binario", "1·2·3·4"], ["Fandango", "ternario", "1·2·3"], ["Toná", "libre", "sin compás"]]),
    },
    {
      h: "Músicas de Asia",
      html: `<p>En la música clásica de la <b>India</b>, la melodía se organiza en <b>ragas</b> (escalas con giros y estados de ánimo propios, asociados a horas del día) y el ritmo en <b>talas</b> (ciclos rítmicos). Una actuación empieza con el <b>alap</b>, lento y sin pulso, y se acelera progresivamente con la improvisación. Instrumentos: sitar, tabla y tanpura, que mantiene un bordón continuo.</p>
      <p>En Indonesia, el <b>gamelán</b> es una orquesta de gongs y metalófonos con escalas propias (slendro y pelog) y una textura en capas: cada instrumento repite una versión más rápida o más lenta de la melodía principal, la <b>heterofonía</b>.</p>`,
      svg: B.comparar("Dos tradiciones asiáticas", ["India", ["raga y tala", "improvisación", "sitar, tabla", "bordón"]], ["Indonesia", ["gamelán", "gongs, metalófonos", "capas", "heterofonía"]]),
      video: { id: "GsPdTNGnr44", titulo: "Gamelán balinés: una introducción", canal: "Classical Nerd", vistas: 65798 },
    },
    {
      h: "Músicas de África y América",
      html: `<p>La música del <b>África subsahariana</b> se caracteriza por la <b>polirritmia</b> (varios patrones rítmicos superpuestos que encajan), la <b>llamada y respuesta</b> entre solista y coro y la unión de música, danza y palabra. Instrumentos: tambores parlantes, kora, mbira, balafón.</p>
      <p>Al llegar a América con la esclavitud, esos rasgos se mezclaron con la música europea y la indígena: así nacieron el son cubano, la samba, el tango, la cumbia, el blues y el jazz. Hoy las <b>músicas del mundo</b> se fusionan con el pop, como ya sucedió con el flamenco y el rock.</p>`,
      svg: B.capas("Polirritmia africana: tres patrones a la vez", [["Campana", "patrón fijo de 12"], ["Tambor medio", "grupos de 3"], ["Tambor grave", "grupos de 2"]]),
    },
  ],
  figura: {
    titulo: "Claves de las músicas tradicionales",
    items: [["Tradición", "oral", "anónima", "funcional"], ["España", "jota · muñeira", "sardana", "cobla"], ["Flamenco", "12 tiempos", "cante · toque", "· baile"], ["Mundo", "raga · gamelán", "polirritmia", "africana"]],
  },
  video: { id: "IJvdfeIutt8", titulo: "Cómo diferenciar los palos flamencos", canal: "Buscadores Flamencos", vistas: 99814 },
  quiz: [
    ["La música tradicional se transmite sobre todo por…", ["partitura", "tradición oral", "radio", "internet"], 1, "De generación en generación."],
    ["La jota es una danza en compás…", ["2/4", "3/4", "6/8", "5/8"], 1, "Ternaria y viva."],
    ["La muñeira es típica de…", ["Aragón", "Galicia", "Andalucía", "Cataluña"], 1, "Gaita y pandereta."],
    ["La sardana la interpreta una…", ["rondalla", "cobla", "big band", "banda municipal"], 1, "Once músicos con flabiol y tamborí."],
    ["Los tres elementos del flamenco son…", ["voz, coro y orquesta", "cante, toque y baile", "letra, ritmo y armonía", "palmas, cajón y guitarra"], 1, "Cante, toque, baile."],
    ["La cadencia andaluza es…", ["I-IV-V-I", "La m-Sol-Fa-Mi", "ii-V-I", "I-V-vi-IV"], 1, "Descenso hasta el Mi."],
    ["La soleá y la bulería tienen compás de…", ["4 tiempos", "12 tiempos en amalgama", "3 tiempos", "libre"], 1, "Acentos en 12, 3, 6, 8, 10."],
    ["Un raga es…", ["un tambor", "una escala con giros y ánimo propios", "una danza", "un ciclo rítmico"], 1, "India."],
    ["El gamelán es una orquesta de…", ["cuerdas", "gongs y metalófonos", "flautas", "voces"], 1, "Java y Bali."],
    ["La superposición de patrones rítmicos africanos es…", ["monodia", "polirritmia", "heterofonía", "homofonía"], 1, "Ritmos que encajan."],
  ],
  examen: [
    ["Guitarra y palmas en 12 tiempos, voz con quejíos, carácter festivo y rápido. ¿Palo probable?", ["Soleá", "Bulería", "Tango", "Toná"], 1, "Festero en amalgama."],
    ["Un cante sin guitarra ni compás fijo, solo voz. ¿Palo?", ["Alegrías", "Toná o martinete", "Tangos", "Sevillanas"], 1, "Palos libres."],
    ["Gaita, pandereta y compás de 6/8 en una danza viva. Es una…", ["sardana", "muñeira", "jota", "sevillana"], 1, "Galicia."],
    ["Sitar, tabla y un bordón continuo con un inicio lento y libre. ¿Qué tradición?", ["Gamelán", "Música clásica india", "Flamenco", "Son cubano"], 1, "Alap del raga."],
    ["Varias líneas tocan la misma melodía a velocidades distintas a la vez. La textura es…", ["polifonía imitativa", "heterofonía", "homofonía", "monodia"], 1, "Típica del gamelán."],
  ],
  feynman: ["Rasgos de la música tradicional", "Tres géneros del folclore español y uno catalán", "Cómo se distinguen los palos flamencos", "Raga, gamelán y polirritmia africana"],
  mapa: ["MÚSICAS TRADICIONALES", [["Rasgos", "oral · anónima · funcional"], ["España", "jota · muñeira · sardana"], ["Flamenco", "palos · 12 tiempos · cadencia andaluza"], ["Mundo", "raga · gamelán · África"]]],
  tarjetas: [
    ["Tradición oral", "Transmisión de la música de oído, sin partitura."],
    ["Jota", "Danza viva en 3/4 de copla e interludios."],
    ["Sardana", "Danza catalana en corro interpretada por la cobla."],
    ["Palo", "Cada estilo del flamenco."],
    ["Amalgama", "Compás que combina grupos de 2 y de 3 tiempos."],
    ["Cadencia andaluza", "Progresión La m-Sol-Fa-Mi."],
    ["Raga", "Escala melódica de la música india."],
    ["Heterofonía", "Variantes simultáneas de una misma melodía."],
  ],
  ejemplos: [
    ["Analiza: guitarra con cadencia La m-Sol-Fa-Mi, palmas en 12 tiempos con acentos en 3, 6, 8, 10 y 12, cante grave y lento.", ["Compás de amalgama de 12.", "Cadencia andaluza.", "Carácter jondo."], "Una soleá: palo jondo de compás de amalgama."],
    ["Una pieza alterna coplas cantadas con interludios de bandurrias, en 3/4 vivo, con castañuelas. ¿Qué es?", ["3/4 rápido.", "Copla e interludio.", "Rondalla."], "Una jota."],
    ["Describe la forma de una actuación de música india.", ["Alap lento sin pulso.", "Entrada de la tabla y el tala.", "Aceleración e improvisación hasta el final."], "Forma progresiva: alap, jor y jhala, de lo libre a lo rápido."],
  ],
  errores: [
    "Pensar que toda la música tradicional española es flamenco.",
    "Confundir el compás de amalgama con un 3/4 normal.",
    "Llamar «desafinadas» a escalas de otras culturas.",
    "Olvidar la función social en el análisis.",
  ],
  ejercicios: {
    b: [
      ["Enumera cuatro rasgos de la música tradicional.", "Transmisión oral, anonimato, existencia de variantes y función social concreta."],
      ["Indica el compás y los instrumentos de la jota y la muñeira.", "Jota: 3/4, guitarra, bandurria, castañuelas. Muñeira: 6/8, gaita y pandereta."],
      ["¿Qué es la cobla?", "Formación de once músicos que interpreta la sardana: flabiol y tamborí, tibles, tenoras, trompetas, fiscornos, trombón y contrabajo."],
      ["Nombra los tres elementos del flamenco.", "Cante, toque y baile."],
    ],
    m: [
      ["Clasifica estos palos por su compás: soleá, tangos, fandango, toná.", "Soleá: amalgama de 12. Tangos: binario. Fandango: ternario. Toná: libre."],
      ["Explica la cadencia andaluza y su relación con el modo de Mi.", "Es el descenso La m-Sol-Fa-Mi que termina en Mi mayor; el reposo en Mi da el color frigio del flamenco."],
      ["Compara el raga indio y el gamelán.", "Raga: escala melódica con improvisación solista, sitar y tabla, bordón. Gamelán: orquesta de metal y gongs, escalas slendro y pelog, heterofonía en capas."],
      ["¿Qué rasgos africanos llegaron a la música americana?", "Polirritmia, síncopa, llamada y respuesta, y la unión de música y danza."],
    ],
    a: [
      ["Graba o busca una canción tradicional de tu localidad y redacta su comentario.", "Respuesta abierta: función, plantilla, escala, ritmo, forma, estilo vocal y contexto, con minutaje."],
      ["Aprende las palmas de la bulería y explica sus acentos con un esquema.", "Respuesta abierta: contar 12-1-2-3-4-5-6-7-8-9-10-11 con acentos en 12, 3, 6, 8 y 10, marcando palmas fuertes y sordas."],
    ],
  },
  glosario: [
    ["Etnomusicología", "Estudio de la música en su cultura."],
    ["Cancionero", "Recopilación de canciones populares."],
    ["Rondalla", "Grupo de guitarras, bandurrias y laúdes."],
    ["Flabiol", "Flauta pequeña de la cobla."],
    ["Falseta", "Frase melódica de la guitarra flamenca."],
    ["Quejío", "Lamento expresivo del cante flamenco."],
    ["Tala", "Ciclo rítmico de la música india."],
    ["Bordón", "Sonido grave sostenido."],
    ["Polirritmia", "Superposición de ritmos diferentes."],
  ],
  situacion: {
    titulo: "Archivo sonoro del barrio",
    reto: "Recoger y analizar canciones tradicionales que conocen las personas mayores del entorno.",
    pasos: [
      "Entrevistad a familiares o vecinos y grabad una canción o danza tradicional.",
      "Transcribid la letra y anotad función, lugar y origen.",
      "Analizad escala, ritmo y forma.",
      "Publicad un pequeño archivo de clase con grabaciones y fichas.",
    ],
    producto: "Un archivo sonoro con fichas de análisis.",
    evaluacion: [
      "Recoge la información con respeto y permiso.",
      "Describe la función y el contexto.",
      "Analiza correctamente ritmo y forma.",
      "Presenta el archivo de manera ordenada.",
    ],
  },
  familias: [
    "Cantadle las canciones que os enseñaron de pequeños.",
    "Id juntos a una fiesta popular con música tradicional.",
    "Escuchad flamenco y tratad de seguir el compás con palmas.",
    "Buscad música de otro continente y comentad qué os sorprende.",
  ],
  saberes: "Análisis Musical II: la música tradicional (transmisión oral, función, variantes); folclore español y catalán (jota, muñeira, seguidillas, fandango, sardana y cobla, havaneres); el flamenco (cante, toque y baile, palos, compás de amalgama, cadencia andaluza); músicas del mundo (raga y tala, gamelán, polirritmia africana) y fusiones.",
  ideas: [
    "Aprender en clase un paso de sardana o de jota.",
    "Palmear los compases de soleá, tangos y fandangos.",
    "Escuchar un gamelán y reproducir su heterofonía con láminas.",
    "Hacer un mapa sonoro de España con un ejemplo por región.",
  ],
  fuentes: [
    { t: "Flamenco, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Flamenco" },
    { t: "Sardana, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sardana" },
  ],
});
