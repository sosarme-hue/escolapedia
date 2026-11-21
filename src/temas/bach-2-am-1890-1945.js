// Análisis Musical II, 2º de Bachillerato. Tema 7 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-am");

module.exports = B.tema({
  titulo: "De 1890 a 1945: impresionismo, expresionismo y neoclasicismo",
  minutos: 60,
  objetivos: [
    "Reconocer los rasgos del impresionismo: timbre, escalas exóticas y armonía libre",
    "Identificar el expresionismo, la atonalidad y el dodecafonismo",
    "Analizar la renovación rítmica de Stravinsky y Bartók",
    "Distinguir el neoclasicismo y la música española de Falla",
  ],
  claves: ["impresionismo", "escala de tonos enteros", "pentatónica", "atonalidad", "dodecafonismo", "serie", "politonalidad", "neoclasicismo"],
  pregunta: {
    texto: "¿Por qué en 1913 el público se peleó a puñetazos en el estreno de un ballet?",
    respuesta: "Porque <i>La consagración de la primavera</i> de Stravinsky rompió todas las expectativas: <mark>ritmos violentos e irregulares</mark>, acentos imprevisibles, disonancias superpuestas y una danza que parecía primitiva. En pocos años, la música occidental abandonó las reglas que había seguido durante tres siglos.",
  },
  lectura: {
    titulo: "El fin de la tonalidad",
    html: `<p>Hacia 1900, la armonía romántica había llegado tan lejos en el cromatismo que la tonalidad empezaba a disolverse. Los compositores tomaron caminos distintos. En París, Debussy buscó colores y atmósferas, como los pintores impresionistas. En Viena, Schoenberg abandonó la tonalidad para expresar la angustia interior, y después inventó un método para ordenar los doce sonidos. Otros, como Stravinsky o Bartók, miraron al ritmo y al folclore; y tras la Primera Guerra Mundial muchos volvieron la vista a las formas del pasado.</p>
    <p>En este tema aprenderás a distinguir esos caminos al oído.</p>`,
  },
  secciones: [2, 3, 3],
  bloques: [
    {
      h: "El impresionismo musical",
      html: `<p><b>Debussy</b> y <b>Ravel</b> buscaron sugerir sensaciones (el mar, la luz, la niebla) más que contar historias o expresar pasiones. Para ello, el <b>timbre</b> se convierte en protagonista: flautas en registro grave, arpa, cuerda con sordina, celesta. Las melodías son vagas y fragmentadas, y el ritmo, fluido, sin pulso marcado.</p>
      <p>La armonía se libera: acordes de novena que se mueven en <b>paralelo</b> sin resolver, como manchas de color, y escalas alejadas del mayor y el menor. El resultado es una música de <mark>atmósfera</mark>, estática y luminosa. Obras para analizar: <i>Preludio a la siesta de un fauno</i>, <i>La mer</i> y los <i>Preludios</i> para piano de Debussy, o el <i>Bolero</i> de Ravel, un enorme crescendo orquestal sobre un ostinato.</p>`,
      svg: B.estrella("Rasgos del impresionismo", "Impresionismo", ["Timbre", "Acordes paralelos", "Tonos enteros", "Pentatónica", "Ritmo fluido", "Atmósfera"]),
      video: { id: "oafwWR4rLkY", titulo: "Introducción al Preludio a la siesta de un fauno de Debussy (1894)", canal: "Rafael Fernández de Larrinoa", vistas: 20487 },
    },
    {
      h: "Las escalas nuevas",
      html: `<p>La <b>escala de tonos enteros</b> (Do-Re-Mi-Fa♯-Sol♯-La♯) no tiene semitonos, así que no tiene sensible ni centro tonal claro: suena flotante, onírica. La <b>escala pentatónica</b> (cinco notas, como las teclas negras del piano) evoca Oriente: Debussy la oyó en el <b>gamelán</b> de Java en la Exposición Universal de París de 1889. También se recuperan los <b>modos antiguos</b>.</p>
      <p>Si al escuchar nada parece «ir a ninguna parte» y todo suena suspendido, piensa en la escala de tonos enteros.</p>`,
      svg: B.melodia("Escala de tonos enteros sobre Do: sin semitonos", [-2, -1, 0, 1, 2, 3, 5], { titulo: "Escala de tonos enteros", nombres: ["Do", "Re", "Mi", "Fa♯", "Sol♯", "La♯", "Do"] }),
    },
    {
      h: "Expresionismo y atonalidad",
      html: `<p>En Viena, <b>Arnold Schoenberg</b> y sus alumnos <b>Berg</b> y <b>Webern</b> (la <b>Segunda Escuela de Viena</b>) quisieron expresar la angustia, el miedo y el subconsciente, como los pintores expresionistas. Para ello abandonaron la tonalidad: en la música <b>atonal</b> ningún sonido es más importante que otro y las disonancias no se resuelven.</p>
      <p>Al oído reconocerás saltos melódicos enormes, dinámicas extremas, timbres crispados y el <b>Sprechgesang</b> («canto hablado») de <i>Pierrot lunaire</i> (1912), a medio camino entre la voz cantada y la declamación.</p>`,
      svg: B.comparar("Impresionismo y expresionismo", ["Impresionismo", ["París", "color, atmósfera", "sensación exterior", "tonalidad difusa"]], ["Expresionismo", ["Viena", "angustia", "mundo interior", "atonalidad"]]),
      video: { id: "YbTn7Y9XAhA", titulo: "Schoenberg, Pierrot lunaire op. 21, «Mondestrunken» (partitura)", canal: "Musicnetmaterials", vistas: 333657 },
    },
    {
      h: "El dodecafonismo",
      html: `<p>Hacia 1923, Schoenberg ideó un método para ordenar la atonalidad: el <b>dodecafonismo</b>. El compositor elige una <b>serie</b> con los doce sonidos de la escala cromática en un orden fijo, sin repetir ninguno hasta que suenen todos. Esa serie se usa en cuatro formas: <b>original</b>, <b>retrógrada</b> (al revés), <b>inversión</b> (intervalos en espejo) y <b>retrógrada de la inversión</b>, y en cualquier transporte.</p>
      <p>La serie es la base de melodías y acordes. Webern llevó el método a obras breves y concentradas, de gran transparencia, que influirían en las vanguardias posteriores.</p>`,
      svg: B.cajas("Las cuatro formas de la serie", [["Original", "la serie|tal cual"], ["Retrógrada", "de la última|a la primera"], ["Inversión", "intervalos|en espejo"], ["Retrógrada inv.", "espejo|y al revés"]], { cols: 2 }),
    },
    {
      h: "La renovación del ritmo: Stravinsky",
      html: `<p><b>Igor Stravinsky</b> revolucionó el ritmo en sus ballets para los Ballets Rusos. En <i>La consagración de la primavera</i> encontramos <b>polirritmia</b> (ritmos distintos a la vez), <b>cambios constantes de compás</b> (2/4, 3/16, 5/8…), acentos irregulares, <b>ostinatos</b> obsesivos y <b>politonalidad</b> (dos tonalidades a la vez, como el famoso «acorde de la Consagración»).</p>
      <p>Al analizarla, fíjate en cómo el ritmo y el timbre, no la melodía, sostienen la obra: la orquesta se usa como un gran instrumento de percusión.</p>`,
      svg: B.compases("Compases cambiantes en la Consagración", [["2/4", 2, ""], ["3/16", 3, "pulso corto"], ["5/8", 5, ""], ["2/8", 2, ""]]),
      video: { id: "58nWPKIcvgY", titulo: "Introducción a La consagración de la primavera de Stravinsky (1913)", canal: "Rafael Fernández de Larrinoa", vistas: 52444 },
    },
    {
      h: "Bartók y el folclore científico",
      html: `<p><b>Béla Bartók</b> recorrió las aldeas de Hungría, Rumanía y Eslovaquia grabando miles de canciones populares con un fonógrafo, como un etnomusicólogo. A diferencia de los nacionalistas románticos, no adornó esas melodías con armonía tradicional: absorbió sus <b>escalas modales</b>, sus <b>ritmos asimétricos</b> (los «ritmos búlgaros», como 2+2+3) y su energía.</p>
      <p>Su música combina disonancia, ritmo percusivo y formas muy equilibradas. Obras para analizar: <i>Música para cuerda, percusión y celesta</i>, el <i>Mikrokosmos</i> y sus cuartetos de cuerda.</p>`,
      svg: B.formas("Ritmo búlgaro de 7/8 agrupado 2 + 2 + 3", [["7/8", "A A B"]], "Dos grupos de dos corcheas (A) y uno de tres (B)"),
    },
    {
      h: "El neoclasicismo",
      html: `<p>Tras la Primera Guerra Mundial, muchos compositores reaccionaron contra los excesos románticos y expresionistas con un <b>«retorno al orden»</b>: recuperaron formas y géneros del Barroco y el Clasicismo (concerto grosso, suite, sinfonía, fuga), plantillas reducidas y texturas claras, pero con armonías y ritmos del siglo XX y a menudo con ironía.</p>
      <p>Ejemplos: <i>Pulcinella</i> y <i>Sinfonía de los salmos</i> de Stravinsky, la <i>Sinfonía clásica</i> de Prokófiev o la música del <b>Grupo de los Seis</b> en Francia, influida también por el jazz y el cabaret.</p>`,
      svg: B.capas("Neoclasicismo: lo antiguo y lo nuevo", [["Del pasado", "formas, plantilla"], ["Del siglo XX", "disonancia, ritmo"], ["Resultado", "claridad e ironía"]]),
    },
    {
      h: "Falla y la música española",
      html: `<p><b>Manuel de Falla</b> es la gran figura española del periodo. En París conoció a Debussy y Ravel, y unió el impresionismo al <b>folclore andaluz</b> y al cante jondo: <i>Noches en los jardines de España</i>, <i>El amor brujo</i> (con la «Danza ritual del fuego») y <i>El sombrero de tres picos</i>. Después evolucionó hacia el neoclasicismo con el <i>Concierto para clave</i> y <i>El retablo de maese Pedro</i>, inspirado en la música antigua española.</p>
      <p>Otros autores: Turina, Rodrigo (<i>Concierto de Aranjuez</i>, 1939) y la Generación del 27 musical.</p>`,
      svg: B.cronologia("Música de 1890 a 1945", [["1894", "Fauno"], ["1912", "Pierrot"], ["1913", "Consagración"], ["1915", "Amor brujo"], ["1923", "dodecafonismo"], ["1939", "Aranjuez"]]),
    },
  ],
  figura: {
    titulo: "Caminos de la música, 1890-1945",
    items: [["Impresionismo", "Debussy", "color", "atmósfera"], ["Expresionismo", "Schoenberg", "atonalidad", "serie"], ["Ritmo", "Stravinsky", "Bartók", "folclore"], ["Neoclasicismo", "retorno", "formas", "antiguas"]],
  },
  video: { id: "lof6AHvXCPw", titulo: "Impresionismo en la música: características del estilo y compositores", canal: "pianoTV", vistas: 143598 },
  quiz: [
    ["El impresionismo musical da protagonismo al…", ["contrapunto", "timbre y la atmósfera", "bajo continuo", "recitativo"], 1, "Color sonoro."],
    ["La escala de tonos enteros no tiene…", ["tonos", "semitonos", "notas", "alteraciones"], 1, "Por eso suena flotante."],
    ["Debussy conoció el gamelán en…", ["Viena, 1913", "París, 1889", "Londres, 1851", "Madrid, 1929"], 1, "Exposición Universal."],
    ["La música sin centro tonal se llama…", ["modal", "atonal", "politonal", "pentatónica"], 1, "Ningún sonido domina."],
    ["El Sprechgesang aparece en…", ["Pierrot lunaire", "El amor brujo", "La mer", "Pulcinella"], 0, "Schoenberg, 1912."],
    ["En el dodecafonismo, la serie contiene…", ["7 notas", "12 notas sin repetir", "5 notas", "acordes"], 1, "La escala cromática ordenada."],
    ["La Consagración de la primavera es de…", ["Debussy", "Stravinsky", "Bartók", "Falla"], 1, "Ballet de 1913."],
    ["Dos tonalidades a la vez es…", ["atonalidad", "politonalidad", "modulación", "serialismo"], 1, "Típico de Stravinsky."],
    ["El neoclasicismo recupera…", ["el folclore", "formas del Barroco y el Clasicismo", "la improvisación", "la electrónica"], 1, "Retorno al orden."],
    ["La «Danza ritual del fuego» es de…", ["Albéniz", "Falla", "Rodrigo", "Turina"], 1, "El amor brujo."],
  ],
  examen: [
    ["Escuchas flautas suaves, arpa, acordes paralelos y ningún pulso claro. ¿Estilo?", ["Expresionismo", "Impresionismo", "Neoclasicismo", "Barroco"], 1, "Atmósfera y color."],
    ["Saltos enormes, disonancias sin resolver y una voz que declama. ¿Estilo?", ["Impresionismo", "Expresionismo", "Nacionalismo", "Clasicismo"], 1, "Atonalidad y Sprechgesang."],
    ["Una obra para orquesta de cámara imita un concerto grosso con disonancias e ironía. Es…", ["neoclásica", "impresionista", "romántica", "barroca"], 0, "Retorno al orden."],
    ["Ritmo en 7/8 agrupado 2+2+3 y melodía modal campesina. ¿Autor probable?", ["Debussy", "Bartók", "Webern", "Ravel"], 1, "Folclore de Europa del Este."],
    ["Una serie leída de la última nota a la primera es la…", ["inversión", "retrógrada", "original", "transposición"], 1, "Al revés."],
  ],
  feynman: ["Rasgos del impresionismo", "Atonalidad y dodecafonismo", "Qué cambió Stravinsky en el ritmo", "Qué es el neoclasicismo"],
  mapa: ["DE 1890 A 1945", [["Impresionismo", "Debussy · Ravel · timbre"], ["Expresionismo", "Schoenberg · atonal · serie"], ["Ritmo y folclore", "Stravinsky · Bartók"], ["Neoclasicismo", "Stravinsky · Falla · Seis"]]],
  tarjetas: [
    ["Escala de tonos enteros", "Escala de seis notas sin semitonos."],
    ["Pentatónica", "Escala de cinco notas, como las teclas negras."],
    ["Atonalidad", "Música sin centro tonal."],
    ["Sprechgesang", "Canto hablado del expresionismo."],
    ["Dodecafonismo", "Método de composición con una serie de doce sonidos."],
    ["Politonalidad", "Uso simultáneo de dos o más tonalidades."],
    ["Polirritmia", "Superposición de ritmos diferentes."],
    ["Neoclasicismo", "Vuelta a formas antiguas con lenguaje moderno."],
  ],
  ejemplos: [
    ["Analiza el inicio del Preludio a la siesta de un fauno.", ["Flauta sola en registro grave: timbre.", "Melodía cromática y vaga, sin pulso.", "Arpa y trompas: color."], "Impresionismo: atmósfera y timbre por encima de la forma clásica."],
    ["Dada la serie Do-Do♯-Re-Re♯…, ¿cómo empieza su retrógrada?", ["Se lee de la última a la primera."], "Empieza por la duodécima nota y termina en Do."],
    ["Fragmento con compases 3/16, 2/16, 3/16, 5/16, acentos irregulares y ostinato en la cuerda. ¿Obra y autor probable?", ["Compases cambiantes.", "Ritmo percusivo.", "Ostinato."], "La consagración de la primavera, Stravinsky."],
  ],
  errores: [
    "Confundir atonalidad con «música desafinada».",
    "Pensar que el impresionismo cuenta historias como el poema sinfónico.",
    "Creer que el neoclasicismo es música del Clasicismo.",
    "Decir que la serie dodecafónica puede repetir notas antes de completarse.",
  ],
  ejercicios: {
    b: [
      ["Enumera cuatro rasgos del impresionismo.", "Protagonismo del timbre, acordes paralelos, escalas de tonos enteros y pentatónicas, ritmo fluido."],
      ["Define atonalidad y dodecafonismo.", "Atonalidad: música sin centro tonal. Dodecafonismo: método que organiza los doce sonidos en una serie."],
      ["Nombra las cuatro formas de la serie.", "Original, retrógrada, inversión y retrógrada de la inversión."],
      ["¿Qué es el neoclasicismo?", "Corriente que recupera formas y géneros del Barroco y el Clasicismo con lenguaje del siglo XX."],
    ],
    m: [
      ["Compara impresionismo y expresionismo en cuatro rasgos.", "Lugar (París / Viena), objetivo (sensaciones / angustia interior), armonía (tonalidad difusa / atonalidad), carácter (sereno / crispado)."],
      ["Explica tres innovaciones rítmicas de la Consagración.", "Cambios constantes de compás, acentos irregulares y polirritmia (además de ostinatos)."],
      ["¿En qué se diferencia el uso del folclore de Bartók del de los nacionalistas románticos?", "Bartók lo estudió científicamente y asumió sus escalas y ritmos asimétricos; los románticos lo adaptaban a la armonía tradicional."],
      ["Explica la evolución estilística de Falla.", "Del nacionalismo andaluz con influencia impresionista (El amor brujo) al neoclasicismo inspirado en la música antigua (Concierto para clave)."],
    ],
    a: [
      ["Compara el Preludio a la siesta de un fauno con Pierrot lunaire en un comentario de 200 palabras.", "Respuesta abierta: plantilla, timbre, armonía (difusa / atonal), voz (no hay / Sprechgesang), carácter y contexto."],
      ["Construye una serie dodecafónica y escribe su retrógrada y su inversión.", "Respuesta abierta: doce notas sin repetir; retrógrada al revés; inversión con los intervalos en sentido contrario."],
    ],
  },
  glosario: [
    ["Gamelán", "Orquesta de percusión de Java y Bali."],
    ["Acordes paralelos", "Acordes que se mueven juntos sin resolver."],
    ["Segunda Escuela de Viena", "Schoenberg, Berg y Webern."],
    ["Serie", "Orden fijo de los doce sonidos cromáticos."],
    ["Ostinato", "Figura que se repite insistentemente."],
    ["Ballets Rusos", "Compañía de Diáguilev que estrenó a Stravinsky."],
    ["Etnomusicología", "Estudio científico de las músicas tradicionales."],
    ["Grupo de los Seis", "Compositores franceses antirrománticos de los años veinte."],
    ["Cante jondo", "Cante flamenco profundo."],
  ],
  situacion: {
    titulo: "Nuestra serie de doce sonidos",
    reto: "Componer una pieza breve con una serie dodecafónica y presentarla.",
    pasos: [
      "Ordenad al azar las doce notas cromáticas con tarjetas.",
      "Escribid la serie original, la retrógrada y la inversión.",
      "Componed una melodía de 24 notas usando dos formas de la serie.",
      "Tocadla con un instrumento o una app y explicad el método.",
    ],
    producto: "Una pieza dodecafónica breve con su análisis.",
    evaluacion: [
      "La serie usa las doce notas sin repetir.",
      "Las formas derivadas son correctas.",
      "La pieza respeta el método.",
      "Explica la diferencia con la tonalidad.",
    ],
  },
  familias: [
    "Escuchad juntos Claro de luna de Debussy y comentad qué imagináis.",
    "Ved un fragmento coreografiado de La consagración de la primavera.",
    "Pedidle que os explique qué es una serie de doce sonidos.",
    "Escuchad el Concierto de Aranjuez y comentad su ambiente español.",
  ],
  saberes: "Análisis Musical II: la música entre 1890 y 1945: impresionismo (timbre, escalas de tonos enteros y pentatónica, acordes paralelos), expresionismo y atonalidad, dodecafonismo, renovación rítmica (Stravinsky, Bartók: polirritmia, politonalidad, ritmos asimétricos), neoclasicismo y la música española (Falla).",
  ideas: [
    "Tocar las teclas negras del piano para oír la pentatónica.",
    "Comparar la misma melodía armonizada tonal y atonalmente.",
    "Palmear los compases cambiantes de la Consagración.",
    "Relacionar cuadros impresionistas y expresionistas con obras musicales.",
  ],
  fuentes: [
    { t: "Impresionismo musical, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Impresionismo_musical" },
    { t: "Dodecafonismo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dodecafonismo" },
  ],
});
