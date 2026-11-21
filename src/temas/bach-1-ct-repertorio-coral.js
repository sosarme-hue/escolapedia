// Coro y Técnica Vocal I, 1º de Bachillerato. Tema 6 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ct");

module.exports = B.tema({
  titulo: "El repertorio coral",
  minutos: 60,
  objetivos: [
    "Recorrer las grandes etapas de la historia de la música coral",
    "Reconocer formas corales como el motete, el madrigal, la misa, el oratorio y el spiritual",
    "Conocer obras y compositores corales fundamentales, también españoles",
    "Elegir y preparar repertorio adecuado para un coro joven",
  ],
  claves: ["repertorio", "canto gregoriano", "polifonía", "motete", "madrigal", "misa", "oratorio", "spiritual"],
  pregunta: {
    texto: "¿Por qué un coro de instituto puede cantar en el mismo concierto una obra de 1600 y una canción de este año?",
    respuesta: "Porque el <mark>repertorio coral</mark> abarca más de mil años de música, desde el canto gregoriano hasta los arreglos de pop actuales. La voz humana no ha cambiado, y cada época ha escrito para ella. Conocer esa historia ayuda a elegir obras y a cantarlas con el estilo adecuado.",
  },
  lectura: {
    titulo: "Una partitura secreta",
    html: `<p>Durante más de cien años, el <i>Miserere</i> de Gregorio Allegri solo se podía escuchar en la Capilla Sixtina, en Semana Santa. El Vaticano prohibía copiarlo bajo pena de excomunión.</p>
    <p>En 1770, un chico de catorce años lo escuchó una sola vez y, al llegar a su alojamiento, lo escribió de memoria. Volvió otro día para corregir algunos detalles. Aquel chico era Wolfgang Amadeus Mozart, y gracias a él la obra acabó publicada y hoy la cantan coros de todo el mundo. La historia muestra hasta qué punto la música coral puede emocionar y quedarse grabada.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es el repertorio coral",
      html: `<p>El <b>repertorio</b> de un coro es el conjunto de obras que conoce y puede interpretar. El repertorio coral es enorme: música <b>religiosa</b> y <b>profana</b>, <b>culta</b> y <b>popular</b>, <b>a cappella</b> o con instrumentos, desde la Edad Media hasta hoy.</p>
      <p>Para orientarse se suele ordenar por <b>épocas</b> y por <b>formas</b>. Cada época tiene un estilo propio (de textura, de armonía, de forma de cantar) que conviene respetar al interpretar sus obras.</p>`,
      svg: B.cronologia("Grandes etapas de la música coral", [["Edad Media", "gregoriano"], ["Renacimiento", "polifonía"], ["Barroco", "oratorio"], ["Clasicismo", "réquiem, Novena"], ["Siglos XX-XXI", "nuevos lenguajes y pop"]]),
    },
    {
      h: "La Edad Media: del gregoriano a la polifonía",
      html: `<p>El <b>canto gregoriano</b> es el canto oficial de la Iglesia católica en la Edad Media: <b>monódico</b> (una sola melodía), en <b>latín</b>, sin acompañamiento y con un ritmo libre que sigue el texto. Lo cantaban los monjes en los monasterios.</p>
      <p>Desde el siglo IX se le añadió una segunda voz y nació la <b>polifonía</b> (varias melodías a la vez). En la escuela de Notre Dame de París, Léonin y Pérotin escribieron obras a tres y cuatro voces. También hubo canción profana, como las <b>Cantigas de Santa María</b> de Alfonso X el Sabio.</p>`,
      svg: B.texturas("Monodia, melodía acompañada, homofonía y polifonía"),
    },
    {
      h: "El Renacimiento: la edad de oro de la polifonía",
      html: `<p>En los siglos XV y XVI la música coral alcanza su plenitud. Las obras son <b>a cappella</b>, a cuatro o más voces, con <b>imitación</b> entre ellas: una voz canta un motivo y las demás lo repiten. Las formas religiosas son la <b>misa</b> y el <b>motete</b>; la profana más importante es el <b>madrigal</b>, que pinta con la música el significado de las palabras.</p>
      <p>Grandes compositores: <b>Josquin des Prez</b>, <b>Palestrina</b> y, en España, <b>Tomás Luis de Victoria</b>, <b>Cristóbal de Morales</b> y <b>Francisco Guerrero</b>. En lo profano destacan los <b>villancicos</b> de Juan del Encina y las <b>ensaladas</b> de Mateo Flecha.</p>`,
      svg: B.cajas("Formas corales del Renacimiento", [["Misa", "religiosa|partes fijas"], ["Motete", "religioso|texto libre en latín"], ["Madrigal", "profano|pinta las palabras"], ["Villancico", "profano en castellano|estribillo y coplas"]]),
      video: { id: "9xPh-fXYAc4", titulo: "Victoria: O magnum mysterium", canal: "The Cambridge Singers", vistas: 3181946 },
    },
    {
      h: "El Barroco: oratorios y cantatas",
      html: `<p>En el Barroco (1600-1750) el coro se une a la <b>orquesta</b> y a los <b>solistas</b>. Aparecen el <b>oratorio</b> (una historia religiosa cantada, sin escenografía), la <b>cantata</b> y la <b>pasión</b>. El coro comenta la acción o representa al pueblo.</p>
      <p>Los grandes nombres son <b>Johann Sebastian Bach</b>, con sus pasiones y más de doscientas cantatas, y <b>Georg Friedrich Händel</b>, cuyo oratorio <i>El Mesías</i> (1742) incluye el célebre <i>Aleluya</i>: una tradición dice que el rey de Inglaterra se puso en pie al escucharlo, y aún hoy el público lo hace.</p>`,
      svg: B.comparar("Renacimiento frente a Barroco en la música coral", ["Renacimiento", ["a cappella", "polifonía imitativa", "misa, motete, madrigal", "equilibrio de voces"]], ["Barroco", ["con orquesta", "coro y solistas", "oratorio, cantata, pasión", "contrastes"]]),
      video: { id: "IUZEtVbJT5c", titulo: "«Hallelujah Chorus» de El Mesías de Händel", canal: "Royal Choral Society", vistas: 19431238 },
    },
    {
      h: "Clasicismo y Romanticismo",
      html: `<p>En el <b>Clasicismo</b> destacan las misas de Haydn y Mozart y el <b>Réquiem</b> de Mozart (1791), que dejó inacabado al morir. Beethoven introdujo el coro en una sinfonía: el final de la <b>Novena</b>, con la <i>Oda a la alegría</i>, es hoy el himno de la Unión Europea.</p>
      <p>En el <b>Romanticismo</b> los coros crecen y se popularizan: aparecen las sociedades corales de aficionados. Se escriben réquiems (Brahms, Verdi, Fauré), coros de ópera famosos como el «Va, pensiero» de <i>Nabucco</i> de Verdi y muchas canciones corales profanas. En Cataluña, <b>Josep Anselm Clavé</b> creó los coros obreros y el <b>Orfeó Català</b> nació en 1891.</p>`,
      svg: B.rejilla("Obras corales del Clasicismo y el Romanticismo", ["Obra", "Autor", "Año"], [["Réquiem", "Mozart", "1791"], ["Novena Sinfonía", "Beethoven", "1824"], ["Nabucco", "Verdi", "1842"], ["Réquiem alemán", "Brahms", "1868"]]),
    },
    {
      h: "Los siglos XX y XXI",
      html: `<p>El siglo XX amplía el lenguaje: <b>Carl Orff</b> compone <i>Carmina Burana</i> (1937), con ritmos poderosos; compositores como Poulenc, Britten o Arvo Pärt renuevan la música religiosa. Hoy son muy cantados <b>Eric Whitacre</b>, <b>Ola Gjeilo</b> o <b>Morten Lauridsen</b>, con armonías amplias y luminosas.</p>
      <p>A la vez crece el repertorio <b>popular</b>: <b>spirituals</b> y <b>góspel</b> afroamericanos, canciones tradicionales arregladas para coro y versiones <b>a cappella</b> de pop y rock. En España tienen gran presencia las habaneras, las canciones populares de cada comunidad y compositores como Javier Busto.</p>`,
      svg: B.estrella("Repertorio coral actual", "Hoy", ["Contemporáneo", "Spiritual y góspel", "Pop a cappella", "Folclore arreglado", "Bandas sonoras"]),
      video: { id: "LRP8d7hhpoQ", titulo: "Pentatonix: Hallelujah", canal: "Pentatonix", vistas: 797477563 },
    },
    {
      h: "Las formas corales más importantes",
      html: `<p>Repasemos las formas principales. La <b>misa</b> pone música a las partes fijas de la liturgia: Kyrie, Gloria, Credo, Sanctus y Agnus Dei; el <b>réquiem</b> es la misa de difuntos. El <b>motete</b> es una obra religiosa breve sobre un texto libre. El <b>madrigal</b> es una canción profana culta del Renacimiento.</p>
      <p>El <b>oratorio</b> y la <b>cantata</b> son obras extensas con coro, solistas y orquesta. El <b>spiritual</b> es un canto religioso afroamericano, sencillo y emotivo. El <b>canon</b> es una obra en la que todas las voces cantan la misma melodía entrando una tras otra, ideal para empezar a cantar a varias voces.</p>`,
      svg: B.cajas("Formas corales: religiosas y profanas", [["Misa y réquiem", "religiosas|Kyrie, Gloria…"], ["Motete", "religioso|breve"], ["Oratorio y cantata", "con orquesta|y solistas"], ["Madrigal", "profano|Renacimiento"], ["Spiritual", "afroamericano|sencillo"], ["Canon", "misma melodía|entradas sucesivas"]], { cols: 3 }),
    },
    {
      h: "Cómo elegir y preparar el repertorio",
      html: `<p>Un buen repertorio para un coro joven combina obras de <b>distintas épocas, estilos e idiomas</b>, se ajusta a las <b>tesituras</b> reales de los cantantes, mezcla obras sencillas y algún reto, y tiene sentido para el público y la ocasión del concierto.</p>
      <p>Para preparar una obra: escucharla en buenas grabaciones, <b>entender el texto</b> y su traducción, aprender cada cuerda su parte por separado, juntar las voces poco a poco, cuidar el estilo de la época y, por último, trabajar la expresión y memorizar lo que se pueda.</p>`,
      svg: B.flujo("Preparar una obra coral", ["Escuchar y entender el texto", "Aprender cada cuerda", "Juntar las voces", "Estilo y expresión"]),
    },
  ],
  figura: {
    titulo: "Mil años de música coral",
    items: [["Medieval", "✝", "gregoriano", "primeras polifonías"], ["Renacimiento", "🎼", "misa, motete", "madrigal"], ["Barroco", "🎻", "oratorio", "cantata"], ["Hoy", "🎤", "spiritual, pop", "a cappella"]],
  },
  video: { id: "H3v9unphfi0", titulo: "Allegri: Miserere mei, Deus", canal: "Tenebrae Choir", vistas: 31796150 },
  quiz: [
    ["El canto gregoriano es…", ["polifónico y con órgano", "monódico, en latín y sin acompañamiento", "profano y en castellano", "del siglo XIX"], 1, "Una sola melodía, canto litúrgico medieval."],
    ["La época de oro de la polifonía a cappella fue…", ["el Barroco", "el Renacimiento", "el Romanticismo", "el siglo XX"], 1, "Siglos XV y XVI."],
    ["Tomás Luis de Victoria fue un compositor…", ["barroco alemán", "renacentista español", "romántico italiano", "actual"], 1, "Autor de O magnum mysterium."],
    ["El madrigal es…", ["una forma religiosa", "una canción profana culta que pinta las palabras", "una ópera", "un spiritual"], 1, "Típico del Renacimiento."],
    ["El Aleluya pertenece a…", ["El Mesías de Händel", "el Réquiem de Mozart", "Carmina Burana", "la Novena de Beethoven"], 0, "Oratorio de 1742."],
    ["Un oratorio es…", ["una ópera con escenografía", "una historia religiosa cantada sin escenografía", "una canción popular", "un canto gregoriano"], 1, "Con coro, solistas y orquesta."],
    ["La Oda a la alegría es el final de…", ["la Novena de Beethoven", "El Mesías", "el Réquiem de Fauré", "Nabucco"], 0, "Hoy es himno europeo."],
    ["Carmina Burana es obra de…", ["Bach", "Carl Orff", "Palestrina", "Verdi"], 1, "Estrenada en 1937."],
    ["El spiritual es…", ["un canto religioso afroamericano", "una misa renacentista", "un madrigal italiano", "una forma de ópera"], 0, "Origen del góspel."],
    ["En un canon, las voces…", ["cantan melodías distintas", "cantan la misma melodía entrando sucesivamente", "cantan al unísono siempre", "no cantan texto"], 1, "Como «Frère Jacques»."],
  ],
  examen: [
    ["La misa de difuntos se llama…", ["motete", "réquiem", "cantata", "madrigal"], 1, "Mozart, Verdi, Fauré…"],
    ["Las partes fijas de la misa incluyen…", ["Kyrie, Gloria, Credo, Sanctus y Agnus Dei", "aria, recitativo y coro", "estrofa y estribillo", "allegro, adagio y presto"], 0, "Son el ordinario de la misa."],
    ["El Orfeó Català se fundó en…", ["1591", "1791", "1891", "1991"], 2, "Ligado al movimiento coral catalán."],
    ["¿Qué compositor escribió más de doscientas cantatas?", ["Händel", "J. S. Bach", "Mozart", "Orff"], 1, "Bach, en el Barroco."],
    ["Un criterio para elegir repertorio para un coro joven es…", ["que sea siempre muy difícil", "que se ajuste a las tesituras reales", "que sea solo de una época", "que no tenga texto"], 1, "Además de variedad de estilos e idiomas."],
  ],
  feynman: ["Cómo evoluciona la música coral de la Edad Media a hoy", "Qué diferencia un motete de un madrigal", "Qué es un oratorio y un ejemplo famoso", "Cómo se elige y prepara el repertorio de un coro"],
  mapa: ["EL REPERTORIO CORAL", [["Edad Media", "gregoriano · primeras polifonías"], ["Renacimiento", "misa · motete · madrigal · Victoria"], ["Barroco a Romanticismo", "oratorio · réquiem · Bach · Händel · Mozart"], ["Siglos XX-XXI", "Orff · Whitacre · spiritual · a cappella"]]],
  tarjetas: [
    ["Repertorio", "Conjunto de obras que interpreta un coro."],
    ["Canto gregoriano", "Canto litúrgico medieval monódico en latín."],
    ["Polifonía", "Varias melodías independientes a la vez."],
    ["Motete", "Obra coral religiosa breve sobre texto libre."],
    ["Madrigal", "Canción profana culta del Renacimiento."],
    ["Oratorio", "Obra religiosa narrativa con coro, solistas y orquesta."],
    ["Réquiem", "Misa de difuntos."],
    ["Spiritual", "Canto religioso afroamericano."],
  ],
  ejemplos: [
    ["Sitúa en su época: O magnum mysterium (Victoria), Aleluya (Händel), Carmina Burana (Orff), canto gregoriano.", ["Gregoriano: Edad Media.", "Victoria: Renacimiento.", "Händel: Barroco.", "Orff: siglo XX."], "Medieval, Renacimiento, Barroco y siglo XX."],
    ["Diseña un programa de concierto de 20 minutos para el coro del instituto.", ["Un canon de calentamiento con el público.", "Una obra renacentista sencilla a cuatro voces.", "Un spiritual.", "Una canción popular de tu comunidad arreglada para coro.", "Una versión a cappella de una canción actual."], "Variedad de épocas, estilos e idiomas, ajustada al coro."],
    ["Explica cómo «pinta» un madrigal las palabras.", ["Si el texto dice «subir», la melodía asciende.", "Si dice «suspiro», aparece un silencio breve.", "Si dice «solo», canta una sola voz.", "Si dice «todos», cantan todas a la vez."], "La música imita el significado del texto (madrigalismo)."],
  ],
  errores: [
    "Pensar que la música coral es solo religiosa.",
    "Confundir oratorio con ópera: el oratorio no se escenifica.",
    "Cantar una obra renacentista con el estilo de un coro romántico.",
    "Elegir obras fuera de la tesitura real del coro.",
  ],
  ejercicios: {
    b: [
      ["Ordena cronológicamente: Barroco, Edad Media, siglo XX, Renacimiento.", "Edad Media, Renacimiento, Barroco y siglo XX."],
      ["Nombra dos compositores corales españoles del Renacimiento.", "Tomás Luis de Victoria y Cristóbal de Morales (o Francisco Guerrero, Juan del Encina)."],
      ["¿Qué es un réquiem?", "Una misa de difuntos."],
      ["Cita una obra coral de Händel y una de Orff.", "El Mesías (con el Aleluya) y Carmina Burana."],
    ],
    m: [
      ["Compara la música coral del Renacimiento y la del Barroco.", "Renacimiento: a cappella, polifonía imitativa, misa, motete y madrigal. Barroco: coro con orquesta y solistas, contrastes, oratorio, cantata y pasión."],
      ["Explica la diferencia entre monodia y polifonía con ejemplos.", "Monodia: una sola melodía, como el canto gregoriano. Polifonía: varias melodías independientes a la vez, como un motete de Victoria."],
      ["¿Qué importancia tuvo Beethoven en la historia de la música coral?", "Incluyó el coro en una sinfonía (la Novena), cuyo final, la Oda a la alegría, es hoy el himno europeo."],
      ["¿Qué criterios seguirías para elegir el repertorio de un coro de instituto?", "Variedad de épocas, estilos e idiomas; ajuste a las tesituras; mezcla de obras sencillas y algún reto; adecuación al público y a la ocasión."],
    ],
    a: [
      ["Escucha el Miserere de Allegri y el Aleluya de Händel. Compara textura, acompañamiento, carácter y uso del coro.", "Respuesta abierta: el Miserere es a cappella, con alternancia de canto llano y polifonía y un agudo célebre; el Aleluya tiene orquesta, homofonía brillante y alternancia con imitación, de carácter festivo."],
      ["Investiga un compositor coral actual (Whitacre, Gjeilo, Busto, Pärt…) y presenta una de sus obras con audición comentada.", "Respuesta abierta: biografía breve, rasgos de estilo, texto y traducción de la obra y comentario de la audición."],
    ],
  },
  glosario: [
    ["Repertorio", "Obras que conoce y puede interpretar un coro."],
    ["Canto gregoriano", "Canto litúrgico medieval, monódico y en latín."],
    ["Polifonía", "Textura de varias voces independientes."],
    ["Imitación", "Repetición de un motivo por voces sucesivas."],
    ["Misa", "Composición sobre las partes fijas de la liturgia católica."],
    ["Motete", "Composición religiosa polifónica breve."],
    ["Madrigal", "Composición profana renacentista para varias voces."],
    ["Oratorio", "Obra dramática religiosa sin escenografía."],
    ["Cantata", "Obra vocal con varios movimientos, coro, solistas e instrumentos."],
    ["Spiritual", "Canto religioso de las comunidades afroamericanas."],
  ],
  situacion: {
    titulo: "Un viaje coral en el tiempo",
    reto: "Preparar un concierto comentado con obras de cuatro épocas distintas.",
    pasos: [
      "Elegid cuatro obras sencillas de épocas diferentes.",
      "Investigad el contexto, el compositor y el texto de cada una.",
      "Ensayadlas cuidando el estilo de cada época.",
      "Presentadlas al público con una breve explicación antes de cada obra.",
    ],
    producto: "Un concierto comentado y un programa de mano.",
    evaluacion: [
      "Las obras representan épocas distintas.",
      "Las explicaciones son correctas y claras.",
      "La interpretación respeta el estilo.",
      "El programa de mano está bien elaborado.",
    ],
  },
  familias: [
    "Escuchad juntos el Aleluya de Händel y el Miserere de Allegri.",
    "Buscad conciertos corales de Navidad o Semana Santa en vuestra ciudad.",
    "Recordad canciones populares que se cantaban en coro en la familia.",
    "Ved juntos un vídeo de un coro a cappella actual.",
  ],
  saberes: "Coro y Técnica Vocal I: el repertorio coral a lo largo de la historia; canto gregoriano y polifonía; formas corales (misa, motete, madrigal, oratorio, cantata, réquiem, spiritual, canon); compositores corales relevantes, incluidos los españoles; criterios de selección y preparación del repertorio.",
  ideas: [
    "Hacer una línea del tiempo coral en el aula con audiciones.",
    "Cantar un canon y un motete sencillo del Renacimiento.",
    "Comparar dos versiones de una misma obra (coro grande y de cámara).",
    "Elaborar entre todos el programa del concierto de fin de trimestre.",
  ],
  fuentes: [
    { t: "Música coral, Wikipedia en español", url: "https://es.wikipedia.org/wiki/M%C3%BAsica_coral" },
    { t: "Miserere (Allegri), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Miserere_(Allegri)" },
  ],
});
