// Diseño, 2º de Bachillerato. Tema 2 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-dis");

module.exports = B.tema({
  titulo: "Historia del diseño: de las Arts and Crafts a la Bauhaus",
  minutos: 60,
  objetivos: [
    "Relacionar el nacimiento del diseño con la Revolución Industrial y la producción en serie",
    "Explicar las propuestas de las Arts and Crafts, el Art Nouveau y el modernismo catalán",
    "Reconocer las aportaciones de las vanguardias, el Werkbund y la Bauhaus",
    "Situar en una línea del tiempo los principales movimientos entre 1850 y 1933",
  ],
  claves: ["Revolución Industrial", "Arts and Crafts", "William Morris", "Art Nouveau", "modernismo", "Werkbund", "Bauhaus", "funcionalismo"],
  pregunta: {
    texto: "¿Por qué la historia del diseño empieza con las fábricas?",
    respuesta: "Porque la <mark>producción en serie</mark> separó por primera vez a quien idea un objeto de quien lo fabrica. Alguien tenía que pensar la forma antes de que la máquina la repitiera miles de veces.",
  },
  lectura: {
    titulo: "Una exposición de cristal",
    html: `<p>En 1851, Londres inauguró la Gran Exposición en el Palacio de Cristal, un enorme invernadero de hierro y vidrio montado en pocos meses con piezas prefabricadas. Dentro se mostraban miles de productos industriales: telares, locomotoras, muebles y vajillas.</p>
    <p>El edificio era una maravilla técnica, pero muchos objetos expuestos imitaban torpemente adornos antiguos, recargados y de mala calidad. Algunos visitantes salieron preocupados: la máquina producía mucho, pero producía feo. Se preguntaban si la belleza y la calidad de los objetos de siempre podían sobrevivir a la fabricación mecánica. De esa crítica nació el movimiento que hoy consideramos el origen del diseño moderno.</p>`,
  },
  secciones: [2, 3, 2],
  bloques: [
    {
      h: "La Revolución Industrial y el nacimiento del diseño",
      html: `<p>Hasta el siglo XVIII, el artesano ideaba y fabricaba cada objeto. Con la <b>Revolución Industrial</b> aparecieron las máquinas de vapor, las fábricas y la <b>producción en serie</b>: se podían hacer miles de piezas iguales y baratas. Por primera vez, la persona que ideaba el objeto y la que lo fabricaba eran distintas.</p>
      <p>Al principio, los fabricantes copiaban estilos históricos (gótico, barroco) y añadían adornos para disimular el origen mecánico. El resultado era a menudo de baja calidad. Surgió así una pregunta que recorre toda la historia del diseño: <b>¿cómo deben ser los objetos de la era de la máquina?</b></p>`,
      svg: B.comparar("Antes y después de la industria", ["Artesanía", ["una persona", "idea y fabrica", "pieza a pieza", "objetos caros"]], ["Industria", ["el diseñador idea", "la máquina fabrica", "miles de copias", "objetos baratos"]]),
    },
    {
      h: "William Morris y las Arts and Crafts",
      html: `<p>El inglés <b>William Morris</b> (1834-1896), influido por el crítico John Ruskin, reaccionó contra la fealdad industrial. Fundó una empresa que producía papeles pintados, tejidos, muebles y libros con calidad artesanal y motivos inspirados en la naturaleza. Su movimiento se llamó <b>Arts and Crafts</b> (artes y oficios).</p>
      <p>Morris defendía que los objetos cotidianos debían ser bellos y útiles, y que el trabajo manual dignificaba al obrero. Su contradicción fue que, al hacerse a mano, sus productos eran caros y solo los ricos podían comprarlos. Aun así, puso en el centro una idea clave: <b>la calidad de los objetos de uso diario importa</b>.</p>`,
      svg: B.cajas("Arts and Crafts", [["Rechazo", "a la fealdad|industrial"], ["Naturaleza", "motivos|vegetales"], ["Oficio", "trabajo manual|digno"], ["Contradicción", "objetos caros|para pocos"]]),
      video: { id: "OV1M09Hj4DU", titulo: "Historia del diseño - William Morris y el Arts & Crafts - Inglaterra", canal: "caucholatv", vistas: 161412 },
    },
    {
      h: "El Art Nouveau",
      html: `<p>Hacia 1890 se extendió por Europa un estilo nuevo que rompía con las copias históricas: el <b>Art Nouveau</b> (en Austria, Secesión; en Alemania, Jugendstil; en España, <b>modernismo</b>). Se reconoce por la <b>línea curva</b> y ondulante, los motivos vegetales, las mujeres de largos cabellos y el uso de nuevos materiales como el hierro forjado y el vidrio.</p>
      <p>A diferencia de Morris, el Art Nouveau aceptó la industria cuando le servía. Fue un <b>arte total</b>: se aplicaba igual a un edificio que a una lámpara, una joya o un cartel. Destacan los carteles de <b>Alfons Mucha</b>, las bocas de metro de <b>Hector Guimard</b> en París y los vidrios de Émile Gallé.</p>`,
      svg: B.estrella("Rasgos del Art Nouveau", "Art Nouveau", ["Línea curva", "Naturaleza", "Hierro y vidrio", "Arte total", "Cartel"]),
      video: { id: "6lfM0z9cV4k", titulo: "Art Nouveau en 8 minutos: ¿qué tiene de nuevo este estilo?", canal: "Curious Muse", vistas: 786547 },
    },
    {
      h: "El modernismo catalán y la Escuela de Glasgow",
      html: `<p>En Cataluña, el <b>modernismo</b> unió arquitectura y artes aplicadas. <b>Antoni Gaudí</b> diseñó edificios, pero también muebles, pomos y bancos adaptados al cuerpo; Lluís Domènech i Montaner trabajó con ceramistas, vidrieros y forjadores en el Palau de la Música. Los talleres artesanos vivieron una edad de oro.</p>
      <p>En Escocia, <b>Charles Rennie Mackintosh</b> y la Escuela de Glasgow simplificaron el Art Nouveau: líneas rectas y verticales, sillas de respaldo muy alto y colores claros. En Viena, la <b>Secesión</b> y los Talleres Vieneses (Josef Hoffmann) avanzaron hacia la geometría. Ese paso de la curva a la recta anunciaba el diseño del siglo XX.</p>`,
      svg: B.comparar("De la curva a la recta", ["Gaudí y Mucha", ["curva orgánica", "naturaleza", "mucho adorno", "obra artesanal"]], ["Mackintosh y Viena", ["línea recta", "geometría", "menos adorno", "hacia la industria"]]),
    },
    {
      h: "Del Werkbund a las vanguardias",
      html: `<p>En 1907 se fundó en Alemania el <b>Deutscher Werkbund</b>, una asociación de artistas e industriales que buscaba unir calidad y producción en serie. <b>Peter Behrens</b> diseñó para la empresa eléctrica AEG lámparas, ventiladores, fábricas, el logotipo y los catálogos: fue el primer ejemplo de <b>identidad corporativa</b> completa.</p>
      <p>Las vanguardias aportaron un nuevo lenguaje. El <b>neoplasticismo</b> holandés (De Stijl, Mondrian, Rietveld) redujo la forma a líneas rectas y colores primarios. El <b>constructivismo</b> ruso puso el diseño gráfico al servicio de la revolución con fotomontajes y tipografía en diagonal. El futurismo celebró la velocidad.</p>`,
      svg: B.cajas("Aportaciones previas a la Bauhaus", [["Werkbund", "calidad + serie|Behrens y AEG"], ["De Stijl", "recta y colores|primarios"], ["Constructivismo", "fotomontaje|y diagonal"], ["Futurismo", "velocidad|y máquina"]]),
    },
    {
      h: "La Bauhaus (1919-1933)",
      html: `<p>En 1919 <b>Walter Gropius</b> fundó en Weimar la <b>Bauhaus</b>, la escuela de diseño más influyente de la historia. Su idea era unir arte, artesanía y técnica: los alumnos pasaban por un curso preliminar sobre forma, color y materiales y luego por talleres (metal, madera, textil, cerámica, tipografía).</p>
      <p>Tras una primera etapa expresionista, desde 1923 adoptó el lema «<b>arte y técnica, una nueva unidad</b>» y diseñó prototipos para la industria: la silla de tubo de acero de Marcel Breuer, las lámparas de Wagenfeld o la tipografía sin adornos de Herbert Bayer. Se trasladó a Dessau y Berlín, y el régimen nazi la cerró en 1933.</p>`,
      svg: B.capas("La Bauhaus en tres sedes", [["Weimar", "1919-1925 · Gropius"], ["Dessau", "1925-1932 · edificio de Gropius"], ["Berlín", "1932-1933 · Mies van der Rohe"], ["Cierre", "1933 · presión nazi"]]),
    },
    {
      h: "El legado de la Bauhaus",
      html: `<p>Al cerrarse la Bauhaus, sus profesores emigraron: Gropius y Breuer a Harvard, Mies van der Rohe a Chicago, Moholy-Nagy fundó la Nueva Bauhaus. Así sus ideas se extendieron por todo el mundo.</p>
      <p>Su legado es enorme: la enseñanza del diseño basada en talleres y en un curso básico de forma y color; el <b>funcionalismo</b> (forma simple, geométrica, sin adorno); la confianza en la industria y en los materiales modernos; y la idea de que el buen diseño debe llegar a todos, no solo a los ricos. Muchos objetos de la Bauhaus se siguen fabricando hoy.</p>`,
      svg: B.cronologia("Línea del tiempo 1851-1933", [["1851", "Palacio de Cristal"], ["1861", "Morris funda su empresa"], ["1890", "Art Nouveau"], ["1907", "Werkbund"], ["1917", "De Stijl"], ["1919", "Bauhaus"]]),
    },
  ],
  figura: {
    titulo: "Del taller a la escuela",
    items: [["Industria", "⚙", "serie y", "separación"], ["Morris", "✿", "belleza y", "oficio"], ["Art Nouveau", "〰", "curva y", "arte total"], ["Bauhaus", "■", "arte y técnica,", "una unidad"]],
  },
  video: { id: "R4ipBRYWjHU", titulo: "¿Diseño o arte? ¿Qué es la Bauhaus?", canal: "Antonio García Villarán", vistas: 309251 },
  quiz: [
    ["La Revolución Industrial cambió el diseño porque…", ["eliminó los objetos", "separó a quien idea de quien fabrica", "prohibió el adorno", "inventó el color"], 1, "Nace la figura del diseñador."],
    ["William Morris defendía…", ["la máquina por encima de todo", "objetos bellos, útiles y hechos con oficio", "el plástico", "la publicidad"], 1, "Arts and Crafts."],
    ["La contradicción de las Arts and Crafts fue que…", ["sus objetos eran caros y para pocos", "no usaban la naturaleza", "eran feos", "solo hacían carteles"], 0, "El trabajo manual encarece."],
    ["El rasgo más reconocible del Art Nouveau es…", ["la línea curva y vegetal", "el ángulo recto", "el color negro", "la ausencia de adorno"], 0, "Coup de fouet o latigazo."],
    ["En España el Art Nouveau se llamó…", ["neoplasticismo", "modernismo", "constructivismo", "futurismo"], 1, "Sobre todo en Cataluña."],
    ["Peter Behrens diseñó para AEG…", ["solo el logotipo", "productos, edificios, logotipo y catálogos", "ropa", "joyas"], 1, "Primera identidad corporativa."],
    ["De Stijl redujo la forma a…", ["curvas y flores", "líneas rectas y colores primarios", "fotografías", "texturas"], 1, "Mondrian y Rietveld."],
    ["¿Quién fundó la Bauhaus?", ["Walter Gropius", "William Morris", "Antoni Gaudí", "Alfons Mucha"], 0, "Weimar, 1919."],
    ["El lema de la Bauhaus desde 1923 fue…", ["el arte por el arte", "arte y técnica, una nueva unidad", "menos es aburrido", "volver al gótico"], 1, "Unir arte e industria."],
    ["La Bauhaus cerró en 1933 por…", ["falta de alumnos", "la presión del régimen nazi", "un incendio", "decisión de Gropius"], 1, "Se consideraba «degenerada»."],
  ],
  examen: [
    ["Un cartel con una mujer de cabello ondulado rodeada de flores y letras curvas es probablemente…", ["Bauhaus", "Art Nouveau", "constructivista", "De Stijl"], 1, "Recuerda a Mucha."],
    ["Una silla de tubo de acero cromado, ligera y sin adornos, de 1925, pertenece a…", ["las Arts and Crafts", "la Bauhaus", "el modernismo catalán", "el Palacio de Cristal"], 1, "Marcel Breuer."],
    ["¿Qué movimiento aceptó primero la industria como aliada de la calidad?", ["Arts and Crafts", "Werkbund", "Gótico", "Romanticismo"], 1, "Unió artistas e industriales."],
    ["Ordena: Bauhaus, Arts and Crafts, Art Nouveau.", ["Bauhaus, Art Nouveau, Arts and Crafts", "Arts and Crafts, Art Nouveau, Bauhaus", "Art Nouveau, Bauhaus, Arts and Crafts", "Todas a la vez"], 1, "1860, 1890, 1919."],
    ["¿Por qué el legado de la Bauhaus llegó a todo el mundo?", ["Por la televisión", "Porque sus profesores emigraron y enseñaron fuera", "Porque vendía mucho", "No llegó"], 1, "Harvard, Chicago, Nueva Bauhaus."],
  ],
  feynman: ["Por qué el diseño nace con la industria", "Qué querían Morris y las Arts and Crafts", "Cómo se reconoce el Art Nouveau", "Qué enseñaba la Bauhaus y por qué es tan importante"],
  mapa: ["DE 1850 A 1933", [["Industria", "serie · separación idea-fabricación"], ["Arts and Crafts", "Morris · oficio · naturaleza"], ["Art Nouveau", "curva · arte total · modernismo"], ["Bauhaus", "Gropius · arte y técnica · funcionalismo"]]],
  tarjetas: [
    ["Producción en serie", "Fabricación industrial de muchas unidades iguales."],
    ["Arts and Crafts", "Movimiento de Morris que defendía objetos útiles, bellos y de calidad artesanal."],
    ["Art Nouveau", "Estilo de 1890-1910 basado en la línea curva, la naturaleza y el arte total."],
    ["Modernismo catalán", "Versión catalana del Art Nouveau: Gaudí, Domènech i Montaner."],
    ["Werkbund", "Asociación alemana de 1907 que unió artistas e industriales."],
    ["De Stijl", "Movimiento holandés de líneas rectas y colores primarios."],
    ["Bauhaus", "Escuela alemana (1919-1933) que unió arte, artesanía e industria."],
    ["Funcionalismo", "Forma simple derivada de la función, sin adornos."],
  ],
  ejemplos: [
    ["Identifica el movimiento de una lámpara de vidrio con forma de flor y pie de bronce ondulado (hacia 1900).", ["Motivo vegetal y línea curva.", "Materiales nuevos: vidrio y metal trabajado.", "Fecha en torno a 1900."], "Art Nouveau (por ejemplo, Gallé o Tiffany)."],
    ["Explica por qué la silla Roja y Azul de Rietveld (1918) es una obra de De Stijl.", ["Formada por planos y listones rectos.", "Colores primarios más negro.", "Sin curvas ni adornos."], "Traduce a un objeto el lenguaje de Mondrian."],
    ["Compara una silla de Morris y una de Breuer.", ["Morris: madera, hecha a mano, motivos tradicionales.", "Breuer: tubo de acero doblado industrialmente, ligera y geométrica.", "Ambas buscan calidad, con métodos opuestos."], "Del oficio a la industria."],
  ],
  errores: [
    "Pensar que Morris aceptaba la industria: la rechazaba.",
    "Confundir Art Nouveau (curva) con De Stijl o Bauhaus (recta).",
    "Creer que la Bauhaus solo enseñaba arquitectura: tenía talleres de todo tipo.",
    "Olvidar el Werkbund, el puente entre artesanía e industria.",
  ],
  ejercicios: {
    b: [
      ["¿Qué cambió la Revolución Industrial en la fabricación de objetos?", "Llegó la producción en serie con máquinas y se separó a quien idea el objeto de quien lo fabrica."],
      ["Cita tres rasgos del Art Nouveau.", "Línea curva, motivos vegetales, uso de hierro y vidrio, arte total."],
      ["¿Quién fundó la Bauhaus, dónde y cuándo?", "Walter Gropius, en Weimar, en 1919."],
      ["Nombra dos diseñadores modernistas españoles.", "Antoni Gaudí y Lluís Domènech i Montaner."],
    ],
    m: [
      ["Explica la contradicción de William Morris.", "Quería objetos bellos para todos, pero al fabricarlos a mano resultaban caros y solo los compraban los ricos."],
      ["¿Por qué se considera a Peter Behrens pionero de la identidad corporativa?", "Diseñó para AEG productos, edificios, logotipo y publicidad con un estilo común: la empresa tenía una imagen coherente."],
      ["Relaciona De Stijl y la Bauhaus.", "Ambos usan formas geométricas y colores básicos; Theo van Doesburg dio clases en Weimar e influyó en el giro hacia la geometría."],
      ["Elabora una línea del tiempo con seis hitos entre 1851 y 1933.", "1851 Palacio de Cristal; 1861 empresa de Morris; 1890 Art Nouveau; 1907 Werkbund; 1917 De Stijl; 1919 Bauhaus; 1933 cierre."],
    ],
    a: [
      ["Diseña un objeto sencillo (una taza o un tirador) en dos versiones: Art Nouveau y Bauhaus. Explica tus decisiones.", "Respuesta abierta: curva y naturaleza frente a geometría y función; se valora la justificación."],
      ["Debate por escrito: ¿tenía razón Morris al desconfiar de la máquina? Argumenta con ejemplos de hoy.", "Respuesta abierta: calidad, empleo, sostenibilidad y producción masiva actual."],
    ],
  },
  glosario: [
    ["Artes aplicadas", "Artes que embellecen objetos útiles: cerámica, vidrio, mueble."],
    ["Arte total", "Proyecto que diseña de forma unitaria edificio, mobiliario y objetos."],
    ["Secesión vienesa", "Movimiento austríaco que separó a los artistas jóvenes de la academia."],
    ["Constructivismo", "Vanguardia rusa que unió arte, técnica y propaganda."],
    ["Curso preliminar", "Primer curso de la Bauhaus sobre forma, color y materiales."],
    ["Prototipo", "Modelo que se prueba antes de fabricar en serie."],
    ["Tubo de acero", "Material industrial usado por Breuer para sus muebles."],
    ["Coup de fouet", "Línea en «latigazo», típica del Art Nouveau."],
  ],
  situacion: {
    titulo: "Museo de bolsillo",
    reto: "Crear una pequeña exposición digital sobre el diseño entre 1850 y 1933.",
    pasos: [
      "Repartid los movimientos del tema entre los grupos.",
      "Buscad tres objetos representativos de cada uno en museos en línea.",
      "Redactad la cartela de cada objeto: autor, fecha, material y rasgos.",
      "Montad una línea del tiempo común y presentadla.",
    ],
    producto: "Exposición digital ordenada cronológicamente con cartelas.",
    evaluacion: [
      "Los objetos corresponden bien a cada movimiento.",
      "Las cartelas son correctas y explican los rasgos.",
      "La línea del tiempo es clara y coherente.",
    ],
  },
  familias: [
    "Buscad en vuestra ciudad edificios o rótulos modernistas.",
    "Mirad juntos un cartel de Mucha y otro de la Bauhaus: ¿qué cambia?",
    "Preguntadle cuál de estos estilos pondría en su habitación y por qué.",
    "Visitad un museo de artes decorativas o una casa modernista.",
  ],
  saberes: "Evolución histórica del diseño: la Revolución Industrial y la producción en serie; Arts and Crafts; Art Nouveau y modernismo; Werkbund; aportaciones de las vanguardias (De Stijl, constructivismo); la Bauhaus y su legado",
  ideas: [
    "Línea del tiempo mural en el aula, ampliada a lo largo del curso.",
    "Comparación de sillas de cada movimiento en imágenes.",
    "Ruta modernista virtual por Barcelona, Reus o Melilla.",
    "Rediseño de un objeto actual «a la manera» de un movimiento.",
  ],
  fuentes: [
    { t: "Bauhaus, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Bauhaus" },
    { t: "Arts and Crafts, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Arts_and_Crafts" },
  ],
});
