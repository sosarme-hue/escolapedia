// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "La literatura y los géneros literarios",
  minutos: 50,
  objetivos: ["Explicar qué hace literario a un texto", "Distinguir los géneros lírico, narrativo y dramático y sus subgéneros", "Medir versos y reconocer la rima y las figuras retóricas más frecuentes"],
  claves: ["literatura", "función poética", "lírica", "narrativa", "dramática", "verso", "rima", "métrica", "figura retórica", "metáfora"],
  pregunta: {
    texto: "«Tus ojos son dos luceros» y «Tienes los ojos marrones». Las dos frases hablan de lo mismo. ¿Por qué solo una suena a poesía?",
    respuesta: "Porque la primera no se limita a informar: <mark>juega con el lenguaje</mark> para crear belleza y emoción. Compara los ojos con estrellas mediante una <b>metáfora</b>. Ese uso artístico de la lengua, la <b>función poética</b>, es lo que caracteriza a la literatura.",
  },
  bloques: [
    {
      html: `<h3>Qué es la literatura</h3><p>La literatura es el <b>arte que usa la palabra</b> como material. Un texto literario no pretende informar, sino crear un mundo de ficción, transmitir emociones y producir placer estético. Por eso cuida la forma: elige las palabras por su sonido y su sentido, usa <mark>figuras retóricas</mark> y, a veces, el verso. Su lenguaje es <b>connotativo</b>: las palabras sugieren más de lo que dicen.</p>`,
      svg: L.filas("Rasgos del texto literario", [
        ["Función poética", "importa cómo se dice", "var(--pen)"],
        ["Ficción", "crea un mundo propio", "var(--leaf)"],
        ["Connotación", "las palabras sugieren", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Los tres grandes géneros</h3><p>Las obras literarias se agrupan en géneros según cómo presentan su contenido. La <b>lírica</b> expresa los sentimientos y el mundo interior del poeta, normalmente en verso. La <b>narrativa</b> cuenta una historia a través de un narrador, normalmente en prosa. La <b>dramática</b> o teatro presenta una historia mediante el diálogo de los personajes para ser representada ante un público.</p>`,
      svg: L.tabla("Los tres géneros literarios", ["Género", "Qué hace", "Forma"], [
        ["Lírica", "expresa sentimientos", "verso"], ["Narrativa", "cuenta una historia", "prosa"], ["Dramática", "representa", "diálogo"],
      ]),
    },
    {
      html: `<h3>Verso y prosa</h3><p>La <b>prosa</b> es la forma natural de escribir, con líneas que ocupan todo el renglón. El <b>verso</b> es cada una de las líneas de un poema, que se corta según un ritmo. Un grupo de versos forma una <b>estrofa</b>, y el conjunto de estrofas, el <b>poema</b>. No hay que confundir verso con poesía: hay obras de teatro en verso (como las de Lope de Vega) y poemas en prosa.</p>`,
      svg: L.filas("Unidades del poema", [
        ["Verso", "cada línea del poema", "var(--pen)"],
        ["Estrofa", "grupo de versos", "var(--leaf)"],
        ["Poema", "conjunto de estrofas", "var(--red)"],
      ]),
    },
    {
      html: `<h3>La medida y la rima</h3><p>Para medir un verso se cuentan sus <b>sílabas métricas</b>, teniendo en cuenta tres normas. La <b>sinalefa</b> une en una sílaba la vocal final de una palabra y la inicial de la siguiente («de-la al-ta to-rre» → «de-laal-ta»). Si la última palabra es <b>aguda</b>, se suma una sílaba; si es <b>esdrújula</b>, se resta una. La <b>rima</b> es la repetición de sonidos al final de los versos desde la última vocal tónica: es <mark>consonante</mark> si se repiten vocales y consonantes (cam<b>ino</b> / dest<b>ino</b>) y <mark>asonante</mark> si solo se repiten las vocales (c<b>a</b>s<b>a</b> / l<b>a</b>n<b>a</b>).</p>`,
      svg: L.filas("Normas de la medida y tipos de rima", [
        ["Sinalefa", "vocal + vocal = una sílaba", "var(--pen)"],
        ["Final agudo / esdrújulo", "+1 / −1", "var(--red)"],
        ["Rima consonante", "camino / destino", "var(--leaf)"],
        ["Rima asonante", "casa / lana", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Las figuras retóricas</h3><p>Son recursos que embellecen el lenguaje. Las más frecuentes: la <b>comparación</b> o símil (une dos elementos con «como»: «blanca como la nieve»), la <b>metáfora</b> (identifica un elemento con otro sin «como»: «perlas» por dientes), la <b>personificación</b> (da rasgos humanos a lo que no lo es: «el viento llora»), la <b>hipérbole</b> (exagera: «te lo he dicho mil veces»), la <b>anáfora</b> (repite palabras al principio de varios versos) y la <b>aliteración</b> (repite sonidos).</p>`,
      svg: L.tabla("Figuras retóricas frecuentes", ["Figura", "Ejemplo"], [
        ["Comparación", "blanca como la nieve"], ["Metáfora", "las perlas de tu boca"], ["Personificación", "el viento llora"], ["Hipérbole", "mil veces"],
      ]),
    },
  ],
  figura: {
    titulo: "Los géneros literarios",
    svg: L.columnas("Los tres géneros literarios y sus subgéneros", [
      ["sentimientos", "LÍRICA", ["oda, elegía,", "égloga, canción"], "var(--pen)"],
      ["una historia contada", "NARRATIVA", ["epopeya, cuento,", "novela, leyenda"], "var(--leaf)"],
      ["para representar", "DRAMÁTICA", ["tragedia, comedia,", "drama"], "var(--red)"],
    ]),
  },
  video: { id: "41j4C-Jq7yE", titulo: "Géneros literarios: narrativo, lírico y dramático", canal: "Inmaculada Cansado", vistas: 575801, megusta: 0, busqueda: "géneros literarios" },
  quiz: [
    { q: "El género que expresa los sentimientos del autor es…", o: ["la lírica", "la narrativa", "el teatro"], a: 0, e: "Suele escribirse en verso." },
    { q: "Una novela pertenece al género…", o: ["narrativo", "lírico", "dramático"], a: 0, e: "Un narrador cuenta una historia." },
    { q: "«Sus cabellos de oro» es…", o: ["una metáfora", "una comparación", "una hipérbole"], a: 0, e: "Identifica el pelo con el oro, sin «como»." },
    { q: "«Canción» y «corazón» riman en…", o: ["consonante", "asonante", "no riman"], a: 0, e: "Se repite -ón completo." },
    { q: "Unir la vocal final de una palabra con la inicial de la siguiente se llama…", o: ["sinalefa", "rima", "estrofa"], a: 0, e: "Cuentan como una sola sílaba métrica." },
  ],
  examen: [
    { q: "«El sol se despereza en la montaña» contiene…", o: ["una personificación", "una hipérbole", "una anáfora"], a: 0, e: "El sol hace algo propio de personas." },
    { q: "Si un verso termina en palabra aguda…", o: ["se suma una sílaba", "se resta una sílaba", "no cambia"], a: 0, e: "Por ejemplo, «canción»." },
    { q: "La comedia y la tragedia son subgéneros…", o: ["dramáticos", "líricos", "narrativos"], a: 0, e: "Son obras de teatro." },
  ],
  feynman: ["Qué diferencia un texto literario de uno no literario", "Los tres géneros literarios con un ejemplo de cada uno", "Cómo se mide un verso", "La diferencia entre metáfora y comparación"],
  mapa: mapa("LITERATURA", "var(--eso)", [
    ["Géneros", "lírica · narrativa · teatro", "var(--pen)"],
    ["Verso", "medida · rima · estrofa", "var(--leaf)"],
    ["Figuras", "metáfora · hipérbole…", "var(--red)"],
    ["Lenguaje", "connotativo y bello", "var(--inf)"],
  ]),
  tarjetas: [
    ["Función poética", "La que se centra en la forma del mensaje para crear belleza."],
    ["Lírica", "Género que expresa sentimientos, normalmente en verso."],
    ["Sinalefa", "Unión en una sílaba métrica de la vocal final de una palabra y la inicial de la siguiente."],
    ["Rima asonante", "Solo se repiten las vocales desde la última tónica: casa / lana."],
    ["Metáfora", "Identifica un elemento real con otro imaginario sin usar «como»."],
  ],
  familias: ["Escuchad juntos una canción y buscad metáforas, comparaciones y rimas.", "Pedidle que os recite un poema corto y cuente las sílabas de un verso.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación literaria: el texto literario; géneros y subgéneros; métrica, rima y recursos retóricos (RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Taller de greguerías y metáforas.", "Medir los versos de canciones actuales.", "Clasificar por géneros los libros de la biblioteca del aula."],
  },
  fuentes: [
    L.BOE,
    { t: "Métrica española, Wikipedia en español", url: "https://es.wikipedia.org/wiki/M%C3%A9trica_espa%C3%B1ola" },
    { t: "Biblioteca Virtual Miguel de Cervantes", url: "https://www.cervantesvirtual.com/" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Conocer los subgéneros de cada género", "Reconocer las estrofas más usadas: pareado, cuarteto, redondilla, romance y soneto"],
  bloques: [
    { tras: "Los tres grandes géneros", html: `<h3>Los subgéneros</h3><p>Cada género agrupa varios subgéneros. En la <b>lírica</b>: la <i>oda</i> (exalta algo o a alguien), la <i>elegía</i> (lamenta una muerte o una pérdida), la <i>égloga</i> (amor en un ambiente pastoril), la <i>sátira</i> (critica con burla) y la <i>canción</i> (sentimientos amorosos). En la <b>narrativa</b>: la <i>epopeya</i> y el <i>cantar de gesta</i> (hazañas de héroes en verso), el <i>cuento</i> (relato breve), la <i>novela</i> (relato extenso y complejo), la <i>leyenda</i> y la <i>fábula</i> (con moraleja). En la <b>dramática</b>: la <i>tragedia</i> (conflicto grave, final desgraciado), la <i>comedia</i> (asunto alegre, final feliz) y el <i>drama</i> (mezcla de ambos).</p><p>Hay además subgéneros menores, como el <i>entremés</i>, una pieza teatral corta y cómica que se representaba entre los actos de una obra mayor.</p>` },
    { tras: "Verso y prosa", html: `<h3>Versos de arte menor y de arte mayor</h3><p>Según su número de sílabas, los versos son de <b>arte menor</b> (hasta ocho sílabas) o de <b>arte mayor</b> (nueve o más). Cada uno tiene un nombre:</p>${L.tb(["Sílabas", "Nombre", "Arte"], [["6", "hexasílabo", "menor"], ["7", "heptasílabo", "menor"], ["8", "octosílabo", "menor"], ["11", "endecasílabo", "mayor"], ["14", "alejandrino", "mayor"]])}<p>El <b>octosílabo</b> es el verso más popular de la lengua española: es el de los romances y de muchas canciones. El <b>endecasílabo</b> llegó de Italia en el Renacimiento y es el verso del soneto. Para indicar la rima se usan letras: <mark>mayúsculas</mark> para el arte mayor (ABBA) y <mark>minúsculas</mark> para el menor (abba). Los versos sin rima se marcan con un guion (-).</p>` },
    { tras: "La medida y la rima", html: `<h3>Las estrofas más usadas</h3><ul><li><b>Pareado</b>: dos versos que riman entre sí (aa o AA).</li><li><b>Cuarteto</b>: cuatro versos de arte mayor con rima consonante ABBA.</li><li><b>Redondilla</b>: igual que el cuarteto, pero de arte menor: abba.</li><li><b>Serventesio</b>: cuatro versos de arte mayor con rima ABAB.</li><li><b>Romance</b>: serie indefinida de octosílabos que riman en asonante los pares (-a-a-a…) y dejan sueltos los impares.</li><li><b>Soneto</b>: catorce endecasílabos repartidos en dos cuartetos y dos tercetos (ABBA ABBA CDC DCD, por ejemplo). Es la composición más prestigiosa de la poesía en español.</li></ul>` },
    { tras: "La medida y la rima", html: `<h3>Medir un verso paso a paso</h3><ol><li>Separa el verso en <b>sílabas gramaticales</b>.</li><li>Une las vocales en contacto entre palabras: <b>sinalefa</b>. (No hay sinalefa si una de las vocales es tónica y la pausa lo pide, aunque en 3.º se aplica casi siempre.)</li><li>Mira la <b>última palabra</b>: aguda +1, llana igual, esdrújula −1.</li></ol><p>Ejemplo: «En-tre-las-nie-blas-de-la-ma-ña-na» tiene 10 sílabas gramaticales; no hay sinalefas y la última palabra es llana: 10 sílabas métricas, un decasílabo. Otro: «Ver-de-que-te-quie-ro-ver-de» (Lorca): 8 sílabas, final llano → <mark>octosílabo</mark>. Y «Y-yo-me-i-ré» → «Y-yo-mei-ré»: 4 sílabas con sinalefa, final agudo +1 = 5.</p>` },
    { tras: "Las figuras retóricas", html: `<h3>Más figuras para reconocer</h3><p>Además de las anteriores, aparecen con frecuencia en los poemas:</p><ul><li><b>Epíteto</b>: adjetivo que destaca una cualidad propia del sustantivo: «la <i>blanca</i> nieve», «la <i>verde</i> hierba».</li><li><b>Hipérbaton</b>: altera el orden normal de las palabras: «Del salón en el ángulo oscuro» (Bécquer) por «en el ángulo oscuro del salón».</li><li><b>Antítesis</b>: opone dos ideas contrarias: «Es hielo abrasador, es fuego helado» (Quevedo).</li><li><b>Paralelismo</b>: repite la misma estructura en varios versos.</li><li><b>Enumeración</b>: acumula elementos: «polvo, sudor y hierro».</li><li><b>Interrogación retórica</b>: pregunta que no espera respuesta: «¿Qué se hizo el rey don Juan?» (Manrique).</li></ul>` },
  ],
  videos: [
    ["La medida y la rima", L.vid("zQg1lBbqiTs", "Cómo analizar la métrica de un poema", "Lufloro Panadero", 240859)],
    ["Las figuras retóricas", L.vid("xeVfyy9UP5E", "Figuras literarias explicadas con ejemplos", "Profesor Paolo Astorga", 420358)],
  ],
  ejemplos: [
    ["Mide el verso «Mi corazón, como un perro» y di qué es.", ["Sílabas: Mi-co-ra-zón-co-mo-un-pe-rro.", "Sinalefa en «mo-un» → «moun»: Mi-co-ra-zón-co-moun-pe-rro = 8.", "Termina en «perro», llana: no se suma ni se resta."], "8 sílabas: octosílabo, arte menor."],
    ["Analiza la rima: «Por una mirada, un mundo; / por una sonrisa, un cielo; / por un beso… ¡yo no sé / qué te diera por un beso!» (Bécquer).", ["mundo (-u-o), cielo (-e-o), sé (-é), beso (-e-o).", "Riman los versos 2 y 4 en asonante: cielo / beso (e-o).", "Los versos 1 y 3 quedan sueltos."], "rima asonante e-o en los versos pares (esquema -a-a)."],
    ["Identifica la figura: «Tus dientes son perlas», «Lloraba como un niño», «El reloj nos mira».", ["«Tus dientes son perlas»: identificación sin «como» → metáfora.", "«Lloraba como un niño»: une con «como» → comparación.", "«El reloj nos mira»: un objeto hace algo humano → personificación."], "metáfora, comparación y personificación."],
  ],
  errores: [
    "Contar las sílabas sin aplicar la sinalefa.",
    "Olvidar sumar una sílaba cuando el verso acaba en palabra aguda.",
    "Confundir la metáfora (sin «como») con la comparación (con «como»).",
    "Pensar que todo texto en verso es lírico: hay teatro y narrativa en verso.",
    "Marcar la rima de los versos de arte menor con mayúsculas.",
  ],
  ejercicios: [
    ["¿A qué género pertenecen: un soneto amoroso, una fábula de Samaniego y una comedia de Lope?", "Lírico, narrativo y dramático."],
    ["Mide: «La princesa está triste».", "La-prin-ce-saes-tá-tris-te: 7 sílabas (sinalefa sa-es), final llano: heptasílabo."],
    ["Mide: «Volverán las oscuras golondrinas».", "Vol-ve-rán-las-os-cu-ras-go-lon-dri-nas: 11 sílabas, final llano: endecasílabo."],
    ["¿Consonante o asonante? «luna / cuna», «mar / pan».", "luna / cuna: consonante (-una). mar / pan: asonante (solo la a)."],
    ["Escribe una metáfora y una comparación sobre el mar.", "Por ejemplo: metáfora «el mar, espejo del cielo»; comparación «el mar es azul como un zafiro»."],
    ["¿Qué figura hay en «Érase un hombre a una nariz pegado» (Quevedo)?", "Hipérbole (exageración) e hipérbaton (orden alterado)."],
    ["¿Qué estrofa tiene catorce endecasílabos en dos cuartetos y dos tercetos?", "El soneto."],
    ["Explica qué es un romance.", "Una serie indefinida de octosílabos con rima asonante en los versos pares; los impares quedan sueltos."],
    ["¿Qué es una elegía? Pon un ejemplo.", "Un poema lírico que lamenta una muerte o pérdida; por ejemplo, las Coplas de Jorge Manrique por la muerte de su padre."],
    ["Escribe un pareado sobre tu instituto.", "Respuesta abierta. Ejemplo: «En mi instituto hay mucho que aprender / y amigos con los que crecer»."],
  ],
  quiz: [
    ["Un verso de 11 sílabas es…", ["endecasílabo", "octosílabo", "alejandrino"], 0, "El verso del soneto."],
    ["La redondilla tiene rima…", ["abba", "ABAB", "aa"], 0, "Cuatro versos de arte menor."],
    ["«La blanca nieve» contiene…", ["un epíteto", "una antítesis", "una hipérbole"], 0, "El adjetivo dice una cualidad propia."],
    ["Una pieza teatral breve y cómica es…", ["un entremés", "una elegía", "una epopeya"], 0, "Se representaba entre los actos."],
    ["«¿Qué se hizo el rey don Juan?» es…", ["una interrogación retórica", "una aliteración", "un paralelismo"], 0, "No espera respuesta."],
  ],
  tarjetas: [
    ["Arte menor y arte mayor", "Menor: hasta 8 sílabas. Mayor: 9 o más."],
    ["Soneto", "14 endecasílabos: dos cuartetos y dos tercetos."],
    ["Romance", "Octosílabos con rima asonante en los pares."],
  ],
});
