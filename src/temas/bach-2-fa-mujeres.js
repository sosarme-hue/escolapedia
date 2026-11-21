// Fundamentos Artísticos 2º Bachillerato · Tema 3. Las mujeres en el arte: representaciones y creadoras. Dibujos propios en SVG.
const { tema, CITA, OBRA, cajas, flujo, versus, rueda, cuadro, crono, barras, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "Las mujeres en el arte: representaciones y creadoras",
  saber: ["A"],
  objetivos: [
    "Aplicar la perspectiva de género al estudio de la historia del arte",
    "Analizar cómo se ha representado a las mujeres en distintas épocas",
    "Conocer a creadoras relevantes desde la Edad Media hasta hoy",
    "Explicar los obstáculos que tuvieron las mujeres para formarse y exponer",
    "Valorar el arte feminista y la recuperación actual de artistas olvidadas",
  ],
  claves: ["perspectiva de género", "mirada masculina", "musa", "desnudo", "academia", "Artemisia Gentileschi", "Sofonisba Anguissola", "Las Sinsombrero", "arte feminista", "Guerrilla Girls", "canon"],
  pregunta: {
    texto: "¿Por qué en los grandes museos hay tantos cuadros de mujeres y tan pocos cuadros hechos por mujeres?",
    respuesta: "Durante siglos, las mujeres fueron sobre todo <b>modelos, musas o temas</b> de la pintura, mientras que el acceso a la formación artística, a los talleres y a los encargos importantes estaba reservado casi siempre a los hombres. Muchas artistas que sí trabajaron fueron olvidadas o sus obras se atribuyeron a otros. En 2020, el Museo del Prado dedicó por primera vez una gran exposición a dos pintoras, Sofonisba Anguissola y Lavinia Fontana. La <mark>perspectiva de género</mark> revisa esta historia.",
  },
  lectura: {
    titulo: "Una pregunta en 1971",
    html: `<p>En 1971, la historiadora del arte estadounidense Linda Nochlin publicó un artículo con un título provocador: «¿Por qué no ha habido grandes artistas mujeres?».</p><p>Su respuesta no era que les faltara talento. Era que las condiciones lo hacían casi imposible: no podían estudiar con modelos desnudos en las academias, no podían viajar solas para formarse, no podían dirigir un taller ni recibir los encargos de la Iglesia o de los reyes. El genio, decía Nochlin, no nace de la nada: necesita escuela, dinero, tiempo y reconocimiento. Medio siglo después, museos de todo el mundo revisan sus colecciones para sacar de los almacenes las obras de las artistas que la historia dejó en la sombra.</p>`,
  },
  bloques: [
    { h: "Qué es la perspectiva de género en el arte", p: [
      "La <mark>perspectiva de género</mark> es una manera de estudiar el arte que se pregunta por el papel de hombres y mujeres: quién crea, quién encarga, quién es representado y cómo, y quién escribe la historia. No se trata de juzgar el pasado con ojos de hoy, sino de mirar lo que antes no se veía.",
      "Desde los años setenta, historiadoras como Linda Nochlin, Griselda Pollock o, en España, Estrella de Diego han mostrado que el <b>canon</b>, la lista de grandes artistas que aparece en los libros, se construyó dejando fuera a muchas creadoras. Revisarlo permite conocer una historia del arte más completa y más justa.",
    ], svg: rueda("PERSPECTIVA DE GÉNERO", ["¿quién crea?", "¿quién encarga?", "¿quién aparece?", "¿cómo aparece?", "¿quién mira?", "¿quién escribe la historia?"]) },
    { h: "Las mujeres representadas: musas, modelos y desnudos", p: [
      "La historia del arte está llena de imágenes de mujeres: diosas, vírgenes, santas, reinas, campesinas y, muy a menudo, <b>desnudos</b>. Muchas de estas imágenes repiten estereotipos: la mujer como objeto de belleza pasiva, como tentación peligrosa, como madre o como esposa obediente.",
      "El crítico John Berger resumió en 1972: «los hombres actúan y las mujeres aparecen». La teórica del cine Laura Mulvey llamó <mark>mirada masculina</mark> a la forma de representar pensando en un espectador hombre. Obras como la <i>Venus de Urbino</i> de Tiziano o la <i>Olympia</i> de Manet (que ya desafiaba esa mirada con una modelo que nos observa) se analizan hoy también desde este punto de vista.",
    ], extra: CITA("Los hombres actúan y las mujeres aparecen.", "John Berger, Modos de ver, 1972 (traducción propia)"), svg: versus("Mujer en el arte tradicional", ["Representada", ["modelo y musa", "desnudo pasivo", "virgen o tentación", "objeto de la mirada"]], ["Creadora", ["poco formada", "sin talleres", "sin encargos grandes", "olvidada por la historia"]]) },
    { h: "Creadoras de la Edad Media y el Renacimiento", p: [
      "En la Edad Media, algunas mujeres crearon arte en los <b>conventos</b>. La monja <b>Ende</b> firmó en el siglo X las miniaturas del <i>Beato de Girona</i>, y la abadesa alemana <b>Hildegarda de Bingen</b> dirigió la ilustración de sus visiones y compuso música. En los talleres familiares, hijas y esposas pintaban y bordaban sin firmar.",
      "En el Renacimiento destacó <mark>Sofonisba Anguissola</mark> (h. 1535-1625), noble de Cremona, que fue pintora de la corte de Felipe II en Madrid. Sus retratos, como los de la reina Isabel de Valois, tienen una gran naturalidad. <b>Lavinia Fontana</b>, en Bolonia, fue quizá la primera mujer con un taller profesional propio y pintó incluso grandes cuadros de altar y desnudos mitológicos.",
    ], svg: crono("Algunas creadoras", [["975", "Ende, Beato de Girona"], ["1150", "Hildegarda de Bingen"], ["1559", "Sofonisba en Madrid"], ["1600", "Lavinia Fontana"], ["1620", "Artemisia, Judit"], ["1660", "Luisa Roldán"]]) },
    { h: "Artemisia Gentileschi y las artistas del Barroco", p: [
      "<mark>Artemisia Gentileschi</mark> (1593-h. 1654) es hoy una de las pintoras más conocidas del Barroco. Formada por su padre, el caravaggista Orazio Gentileschi, fue la primera mujer admitida en la Academia de Dibujo de Florencia. Pintó heroínas bíblicas y mitológicas con fuerza y dramatismo, con el claroscuro de Caravaggio.",
      "Su <i>Judit decapitando a Holofernes</i> muestra a dos mujeres activas y decididas, muy distintas de las heroínas débiles de otros pintores. En España, la escultora sevillana <b>Luisa Roldán</b>, «la Roldana», llegó a ser escultora de cámara de Carlos II. En los Países Bajos, <b>Clara Peeters</b> y <b>Judith Leyster</b> triunfaron con bodegones y escenas de género.",
    ], v: ["muj-b", "Artemisia Gentileschi, la pintora del Barroco"], extra: OBRA("Judit decapitando a Holofernes", "Artemisia Gentileschi", "h. 1620, óleo sobre lienzo, Uffizi"), svg: cajas("Artistas del Barroco", [["Artemisia", "heroínas con fuerza"], ["Luisa Roldán", "escultora de Carlos II"], ["Clara Peeters", "bodegones"], ["Judith Leyster", "escenas de género"]]) },
    { h: "Academias, salones y obstáculos", p: [
      "Del siglo XVII al XIX, la formación artística se concentró en las <mark>academias</mark>. Allí las mujeres tenían el acceso muy limitado: no podían asistir a las clases de dibujo del <b>desnudo</b>, imprescindibles para la pintura de historia, el género más prestigioso. Por eso muchas se dedicaron al retrato, al bodegón, a las flores o a la miniatura, considerados géneros menores.",
      "Aun así, algunas lograron gran éxito. <b>Élisabeth Vigée Le Brun</b> fue retratista de María Antonieta. En el siglo XIX, <b>Rosa Bonheur</b> pintó animales y necesitó un permiso de la policía para vestir pantalones en las ferias de ganado. Las impresionistas <b>Berthe Morisot</b> y <b>Mary Cassatt</b> retrataron la vida de las mujeres desde dentro: el hogar, la maternidad, el teatro.",
    ], svg: flujo("Los obstáculos de una pintora", ["Sin clase de desnudo", "Sin pintura de historia", "Géneros menores: retrato, flores", "Menos encargos y menos fama"]) },
    { h: "Las vanguardias y Las Sinsombrero", p: [
      "En el siglo XX, las mujeres participaron en todas las vanguardias, aunque a menudo a la sombra de sus compañeros. <b>Sonia Delaunay</b> llevó la abstracción a la moda y el diseño; <b>Hannah Höch</b> inventó el fotomontaje dadá; <b>Frida Kahlo</b> convirtió su cuerpo y su dolor en tema; <b>Georgia O'Keeffe</b> amplió flores hasta hacerlas paisajes; la sueca <b>Hilma af Klint</b> pintó cuadros abstractos antes que Kandinsky.",
      "En España, la generación del 27 tuvo sus artistas olvidadas: <mark>Las Sinsombrero</mark>, llamadas así porque se quitaron el sombrero en público como gesto de libertad. Entre ellas, las pintoras <b>Maruja Mallo</b> y <b>Ángeles Santos</b>, y la escultora <b>Marga Gil Roësset</b>. Un documental de 2015 ayudó a recuperarlas.",
    ], svg: cuadro("Vanguardistas", [["Artista", "Aportación"], ["Hilma af Klint", "abstracción temprana"], ["Hannah Höch", "fotomontaje dadá"], ["Frida Kahlo", "autorretrato y cuerpo"], ["Maruja Mallo", "Sinsombrero, surrealismo"]]) },
    { h: "El arte feminista", p: [
      "En los años setenta nació el <mark>arte feminista</mark>, que usa el arte para denunciar la desigualdad. <b>Judy Chicago</b> creó <i>The Dinner Party</i> (1979), una gran mesa triangular con 39 cubiertos dedicados a mujeres de la historia. <b>Cindy Sherman</b> se fotografió disfrazada de estereotipos femeninos del cine. <b>Ana Mendieta</b> dejó la silueta de su cuerpo en la tierra.",
      "Desde 1985, las <b>Guerrilla Girls</b>, artistas anónimas con máscaras de gorila, denuncian con carteles la escasa presencia de mujeres en los museos. Uno de los más famosos preguntaba si las mujeres tenían que estar desnudas para entrar en el Metropolitan, donde en las salas de arte moderno menos del 5 % de los artistas eran mujeres y el 85 % de los desnudos eran femeninos.",
    ], svg: barras("Metropolitan, 1989 (Guerrilla Girls)", [["artistas mujeres", 5], ["desnudos femeninos", 85]], "%") },
    { h: "Recuperar y cambiar el canon hoy", p: [
      "Hoy muchos museos <b>revisan sus colecciones</b>. El Prado organizó en 2020 <i>Invitadas</i>, sobre el papel de las mujeres en el arte español del siglo XIX, y antes había dedicado exposiciones a Clara Peeters (2016) y a Sofonisba y Lavinia (2019). La Tate Modern, el MoMA o el Reina Sofía amplían la presencia de artistas mujeres en sus salas.",
      "Artistas como <b>Louise Bourgeois</b>, con sus enormes arañas, <b>Yayoi Kusama</b>, con sus lunares infinitos, o <b>Cristina Iglesias</b> y <b>Esther Ferrer</b> en España están entre las más reconocidas del mundo. Estudiar el arte con <mark>perspectiva de género</mark> no es añadir una lista de nombres, sino preguntarse siempre quién falta y por qué.",
    ], svg: cajas("Artistas actuales", [["Louise Bourgeois", "arañas, memoria"], ["Yayoi Kusama", "lunares, infinito"], ["Cristina Iglesias", "espacios y agua"], ["Esther Ferrer", "performance"]]) },
  ],
  figura: { titulo: "Las mujeres en el arte de un vistazo", aria: "Resumen de representación, creadoras históricas, vanguardias y arte feminista", cols: [
    ["Representadas", ["musas y modelos", "desnudos", "estereotipos", "mirada masculina"]],
    ["Creadoras", ["Ende, Hildegarda", "Sofonisba, Lavinia", "Artemisia", "la Roldana"]],
    ["Vanguardias", ["Af Klint, Höch", "Frida Kahlo", "Las Sinsombrero", "Maruja Mallo"]],
    ["Hoy", ["arte feminista", "Guerrilla Girls", "Kusama, Bourgeois", "revisar el canon"]],
  ] },
  video: ["muj-a", "Hilma af Klint y las mujeres artistas en la historia del arte"],
  ejemplos: [
    ["Compara la Judit de Artemisia con una Judit de otro pintor.", ["Observa la actitud: en Artemisia, Judit y su criada actúan con fuerza.", "En otras versiones, Judit aparece serena o decorativa.", "Fíjate en el claroscuro y la violencia.", "Relaciona con la vida y la mirada de la artista."], "Artemisia presenta a mujeres activas y decididas."],
    ["Analiza el cartel de las Guerrilla Girls sobre el Metropolitan.", ["Imita un anuncio publicitario.", "Usa una odalisca clásica con máscara de gorila.", "Aporta datos: menos del 5 % de artistas mujeres.", "Ironía y denuncia."], "Arte feminista que usa datos y humor para criticar los museos."],
    ["Explica por qué muchas pintoras del XIX pintaban flores y retratos.", ["Las academias les cerraban la clase de desnudo.", "Sin desnudo no había pintura de historia.", "Se refugiaban en géneros considerados menores.", "Eso limitaba su prestigio."], "Por barreras de formación, no por falta de talento."],
  ],
  errores: [
    "Creer que no hubo mujeres artistas antes del siglo XX.",
    "Pensar que la perspectiva de género consiste solo en añadir nombres a una lista.",
    "Confundir a la mujer representada (modelo, musa) con la mujer creadora.",
    "Juzgar las obras del pasado sin tener en cuenta su contexto histórico.",
  ],
  ejercicios: {
    b: [
      ["¿Qué es la perspectiva de género en el arte?", "Una forma de estudiar el arte que se pregunta quién crea, quién encarga, quién es representado y cómo, y quién escribe la historia, atendiendo al papel de hombres y mujeres."],
      ["Nombra dos pintoras del Renacimiento y del Barroco.", "Sofonisba Anguissola y Lavinia Fontana (Renacimiento); Artemisia Gentileschi y Clara Peeters o Judith Leyster (Barroco)."],
      ["¿Quiénes fueron Las Sinsombrero?", "Mujeres artistas e intelectuales de la generación del 27 que se quitaron el sombrero en público como gesto de libertad, como Maruja Mallo o Ángeles Santos."],
      ["¿Qué denuncian las Guerrilla Girls?", "La escasa presencia de mujeres artistas en museos y galerías, con carteles que combinan datos, humor y anonimato (máscaras de gorila)."],
    ],
    m: [
      ["Explica el concepto de mirada masculina con un ejemplo.", "Es representar a la mujer pensando en un espectador hombre, como objeto pasivo para ser mirado. Ejemplo: muchos desnudos femeninos reclinados, como la Venus de Urbino de Tiziano."],
      ["¿Por qué la clase de desnudo era tan importante en las academias?", "Porque dominar la figura humana desnuda era necesario para la pintura de historia, el género más prestigioso. Sin ella, las mujeres quedaban relegadas a géneros menores."],
      ["Resume el argumento de Linda Nochlin.", "No hubo menos grandes artistas mujeres por falta de talento, sino por las instituciones: falta de formación, de talleres, de viajes y de encargos."],
      ["¿Qué aporta Hilma af Klint a la historia de la abstracción?", "Pintó obras abstractas desde 1906, antes que Kandinsky, lo que obliga a revisar quién inventó la abstracción."],
    ],
    a: [
      ["Visita la web de un museo y calcula aproximadamente qué porcentaje de las obras de una sala son de mujeres. Comenta el resultado.", "Respuesta abierta. Debe indicar museo y sala, el recuento y el porcentaje, y una reflexión sobre sus causas históricas y sobre lo que el museo hace para cambiarlo."],
      ["Diseña un cartel al estilo de las Guerrilla Girls sobre un dato de tu entorno.", "Respuesta abierta. Debe incluir un dato verificable, una imagen irónica o llamativa, un mensaje breve y una pregunta que haga pensar."],
    ],
  },
  quiz: [
    ["El artículo «¿Por qué no ha habido grandes artistas mujeres?» es de…", ["Linda Nochlin", "Frida Kahlo", "John Berger", "Judy Chicago"], "1971."],
    ["Sofonisba Anguissola fue pintora de la corte de…", ["Felipe II", "Carlos II", "Luis XIV", "Napoleón"], "En Madrid, desde 1559."],
    ["La primera mujer admitida en la Academia de Florencia fue…", ["Artemisia Gentileschi", "Lavinia Fontana", "Rosa Bonheur", "Berthe Morisot"], "En 1616."],
    ["«La Roldana» era…", ["escultora", "arquitecta", "grabadora", "fotógrafa"], "Escultora de cámara de Carlos II."],
    ["Las academias impedían a las mujeres…", ["dibujar del desnudo", "pintar flores", "hacer retratos", "usar óleo"], "Clave para la pintura de historia."],
    ["Pintó cuadros abstractos antes que Kandinsky…", ["Hilma af Klint", "Frida Kahlo", "Sonia Delaunay", "Maruja Mallo"], "Desde 1906."],
    ["Maruja Mallo pertenece a…", ["Las Sinsombrero", "el impresionismo", "el Barroco", "Fluxus"], "Generación del 27."],
    ["The Dinner Party es de…", ["Judy Chicago", "Cindy Sherman", "Ana Mendieta", "Louise Bourgeois"], "1979."],
    ["Las Guerrilla Girls llevan máscaras de…", ["gorila", "león", "pájaro", "gato"], "Para mantener el anonimato."],
    ["La «mirada masculina» es un concepto de…", ["Laura Mulvey", "Kant", "Panofsky", "Duchamp"], "Teoría del cine, 1975."],
  ],
  examen: [
    ["Ende ilustró…", ["el Beato de Girona", "la Capilla Sixtina", "el Partenón", "Los Caprichos"], "Siglo X."],
    ["Las impresionistas Morisot y Cassatt pintaron sobre todo…", ["la vida de las mujeres", "batallas", "paisajes alpinos", "temas mitológicos"], "Hogar, maternidad, teatro."],
    ["Yayoi Kusama es conocida por…", ["los lunares", "las arañas", "las siluetas en la tierra", "los fotomontajes"], "Habitaciones del infinito."],
    ["El Prado dedicó en 2020 la exposición…", ["Invitadas", "Las Sinsombrero", "The Dinner Party", "Modos de ver"], "Mujeres en el arte español del XIX."],
  ],
  feynman: ["perspectiva de género", "mirada masculina", "obstáculos de las academias", "arte feminista"],
  mapa: ["MUJERES Y ARTE", [["Representadas", "musas, desnudos"], ["Creadoras", "Sofonisba, Artemisia"], ["Vanguardias", "Höch, Kahlo, Mallo"], ["Hoy", "feminismo, revisar el canon"]]],
  tarjetas: [
    ["Perspectiva de género", "Quién crea, quién aparece y cómo."],
    ["Mirada masculina", "Mujer representada para un espectador hombre."],
    ["Sofonisba Anguissola", "Retratista en la corte de Felipe II."],
    ["Artemisia Gentileschi", "Barroco, heroínas activas, claroscuro."],
    ["Luisa Roldán", "Escultora barroca sevillana."],
    ["Las Sinsombrero", "Artistas olvidadas del 27."],
    ["Guerrilla Girls", "Denuncian la desigualdad en museos."],
    ["Canon", "Lista de artistas que la historia consagra."],
  ],
  glosario: [
    ["Musa", "Mujer que inspira al artista; papel pasivo frente al de creadora."],
    ["Pintura de historia", "Género más prestigioso: temas religiosos, mitológicos o históricos."],
    ["Géneros menores", "Retrato, bodegón, flores o paisaje en la jerarquía académica."],
    ["Fotomontaje", "Imagen hecha uniendo recortes de fotografías."],
    ["Arte feminista", "Arte que denuncia la desigualdad entre mujeres y hombres."],
    ["Odalisca", "Mujer de un harén; motivo de muchos desnudos orientalistas."],
    ["Atribución", "Asignar una obra a un autor; muchas de mujeres se atribuyeron a hombres."],
    ["Canon", "Conjunto de obras y artistas considerados modelo."],
  ],
  situacion: SIT(
    "La sala que falta",
    "El museo virtual de la clase va a abrir una nueva sala con artistas mujeres de distintas épocas que no aparecen en vuestro libro.",
    ["Elegid una artista por grupo y época", "Investigad su vida, sus obras y sus obstáculos", "Escribid la cartela de una obra con análisis y contexto", "Montad la sala virtual con imágenes y textos"],
    "Sala virtual con 6-8 artistas y sus cartelas.",
    ["Rigor en los datos y las fuentes", "Análisis de la obra con perspectiva de género", "Diseño y claridad de la sala"],
  ),
  familias: [
    "Preguntad cuántas pintoras conocen y buscad juntos tres más.",
    "Ved el documental Las Sinsombrero (RTVE) en familia.",
    "En una visita a un museo, contad las obras hechas por mujeres en una sala.",
  ],
  saberes: "perspectiva de género en el arte: representaciones y creaciones de mujeres; aspectos históricos y sociales del arte.",
  ideas: [
    "Comparar dos versiones del mismo tema pintadas por un hombre y por una mujer (Judit, Susana y los viejos).",
    "Analizar la presencia de mujeres en la colección del museo más cercano.",
    "Relacionar con el Día de la Mujer y el 18 de mayo, Día de los Museos.",
  ],
  fuentes: [WIKI("Artemisia Gentileschi", "Artemisia_Gentileschi"), WIKI("Guerrilla Girls", "Guerrilla_Girls")],
});
