// Lengua Castellana 2º de Primaria: el abecedario y el orden alfabético. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, frase, charla, lista, mural } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2c");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "2-primaria",
  titulo: "El abecedario y el orden alfabético",
  minutos: 25,
  objetivos: ["Decir y escribir las 27 letras del abecedario en orden", "Ordenar palabras por su primera letra y por la segunda", "Saber buscar una palabra en el diccionario"],
  claves: ["abecedario", "letra", "orden alfabético", "diccionario", "ñ"],
  pregunta: {
    texto: "En la lista de clase, ¿por qué Ana va antes que Bruno y Bruno antes que Carla?",
    respuesta: "Porque la lista sigue el <mark>orden alfabético</mark>: el orden de las letras del <b>abecedario</b>. A va antes que B, y B antes que C.",
  },
  bloques: [
    {
      html: `<h3>Las 27 letras</h3><p>El <mark>abecedario</mark> son todas las letras de nuestra lengua, en orden.</p><p>En castellano tiene <b>27 letras</b>. Empieza por la <b>a</b> y termina por la <b>z</b>.</p><p>Con estas letras escribimos todas las palabras: cortas como <i>sol</i> y largas como <i>mariposa</i>. También se llama <b>alfabeto</b>.</p>`,
      svg: fichas("Las letras del abecedario de la a a la l en fichas de colores", [["a", R], ["b", A], ["c", A], ["d", A], ["e", R], ["f", A], ["g", A], ["h", A], ["i", R], ["j", A], ["k", A], ["l", A]], { titulo: "a, b, c… así empieza", nota: "… y sigue hasta la z: 27 letras" }),
      video: V("abcB"),
    },
    {
      html: `<h3>La segunda mitad</h3><p>Después de la <b>l</b> vienen <b>m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z</b>.</p><p>La <mark>ñ</mark> es muy especial: casi solo la tiene el castellano. Va justo después de la <b>n</b>.</p><p>Palabras con ñ: <i>niño</i>, <i>año</i>, <i>araña</i>, <i>España</i>. ¡Sin la ñ, el niño sería un nino!</p>`,
      svg: fichas("Las letras del abecedario de la m a la z, con la ñ destacada", [["m", A], ["n", A], ["ñ", R], ["o", R], ["p", A], ["q", A], ["r", A], ["s", A], ["t", A], ["u", R], ["v", A], ["z", A]], { titulo: "m, n, ñ, o… hasta la z", nota: "La ñ va después de la n" }),
    },
    {
      html: `<h3>Mayúsculas y minúsculas</h3><p>Cada letra tiene dos formas: <b>mayúscula</b> (grande) y <b>minúscula</b> (pequeña).</p><p>La <mark>mayúscula</mark> se usa al empezar a escribir y después de un punto. También en los nombres: <i>Lucía</i>, <i>Madrid</i>, <i>Toby</i>.</p><p>A y a son la misma letra. Solo cambia el tamaño y a veces la forma.</p>`,
      svg: fichas("Parejas de mayúscula y minúscula: A a, B b, G g, M m, Ñ ñ, R r", [["A", R], ["a", R], ["G", A], ["g", A], ["Ñ", Ve], ["ñ", Ve], ["M", N], ["m", N], ["R", M], ["r", M], ["Q", A], ["q", A]], { titulo: "Grande y pequeña", nota: "Mayúscula al empezar y en los nombres" }),
    },
    {
      html: `<h3>¿Qué es el orden alfabético?</h3><p>Ordenar palabras <mark>como en el abecedario</mark> es ordenarlas alfabéticamente.</p><p>Miramos la <b>primera letra</b> de cada palabra. La que empieza por la letra que va antes, va primero.</p><p><i>Gato</i>, <i>árbol</i> y <i>oso</i> quedan así: <b>á</b>rbol, <b>g</b>ato, <b>o</b>so. ¡Porque a va antes que g, y g antes que o!</p>`,
      svg: dibujos("Árbol, gato y oso ordenados por su primera letra: a, g, o", [["arbol", "árbol", R], ["gato", "gato", A], ["oso", "oso", Ve]], { titulo: "Primero a, luego g, luego o", nota: "Miramos la primera letra" }),
      video: V("abcV", "orden alfabético para niños"),
    },
    {
      html: `<h3>Si empiezan igual</h3><p>A veces dos palabras empiezan por la <b>misma letra</b>: <i>pato</i> y <i>perro</i>.</p><p>Entonces miramos la <mark>segunda letra</mark>: p<b>a</b>to y p<b>e</b>rro. Como a va antes que e, pato va primero.</p><p>Si la segunda también es igual, miramos la tercera. ¡Así siempre encontramos el orden!</p>`,
      svg: frase("Pato va antes que perro porque a va antes que e", [["p<tspan fill='var(--red)'>a</tspan>to", A], ["antes que", "var(--muted)"], ["p<tspan fill='var(--red)'>e</tspan>rro", A], ["/"], ["a", R], ["va antes que", "var(--muted)"], ["e", R]], { titulo: "Miramos la segunda letra", nota: "pato, perro" }),
    },
    {
      html: `<h3>El diccionario</h3><p>El <mark>diccionario</mark> es un libro que explica qué significan las palabras.</p><p>Todas sus palabras están en <b>orden alfabético</b>. Primero las de la a, después las de la b, y así hasta la z.</p><p>Arriba de cada página hay una <b>palabra guía</b>. Te dice qué palabras hay en esa página.</p>`,
      svg: dibujos("Un libro de diccionario con las palabras agua, árbol y avión ordenadas", [["libro", "diccionario", A], ["agua", "agua", R], ["arbol", "árbol", Ve], ["avion", "avión", N]], { titulo: "En el diccionario, todo en orden", nota: "agua · árbol · avión" }),
      video: V("abcB2"),
    },
    {
      html: `<h3>Buscar una palabra</h3><p>Para buscar <i>luna</i> en el diccionario, sigue estos pasos.</p><p><b>1.</b> Mira por qué letra empieza: la <b>l</b>. <b>2.</b> Abre el diccionario por la parte de la l. <b>3.</b> Mira la segunda letra: la <b>u</b>. <b>4.</b> Busca hasta encontrar <mark>luna</mark> y lee su significado.</p><p>¡Con práctica lo harás muy rápido!</p>`,
      svg: lista("Pasos para buscar luna: mira la primera letra, abre por la l, mira la segunda letra, lee", [["Primera letra: l", R], ["Abre por la parte de la l", A], ["Segunda letra: u", Ve], ["¡Luna! Lee qué significa", N]], { titulo: "Buscamos «luna»", marca: "n" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>El orden alfabético nos ayuda a <mark>encontrar cosas rápido</mark>.</p><p>Se usa en la <b>lista de clase</b>, en la agenda de teléfonos y en los libros de la biblioteca.</p><p>También en los índices de los libros y en los nombres de un móvil. ¡Sin orden alfabético, buscar sería muy lento!</p>`,
      svg: charla("Una niña busca a su amigo Pablo en la lista de clase y lo encuentra en la p", [["nina", "¿Dónde está Pablo?", R], ["nino", "Busca en la p.", A], ["nina", "Ana, Bruno… ¡Pablo!", R], ["nino", "¡Qué rápido!", A]]),
    },
    {
      html: `<h3>Jugamos a ordenar</h3><p>Escribe en papelitos los nombres de tu familia o tus amigos.</p><p>Mezcla los papelitos y ordénalos <mark>por orden alfabético</mark>. Mira la primera letra. Si es igual, mira la segunda.</p><p>Después, ordena animales: <i>vaca</i>, <i>conejo</i>, <i>león</i>, <i>cerdo</i>. ¿Quién va primero? ¡Cerdo! Luego conejo, león y vaca.</p>`,
      svg: dibujos("Cerdo, conejo, león y vaca en orden alfabético", [["cerdo", "cerdo", R], ["conejo", "conejo", A], ["leon", "león", Ve], ["vaca", "vaca", N]], { titulo: "Ce, co, l, v: ¡en orden!", nota: "cerdo · conejo · león · vaca" }),
    },
  ],
  figura: {
    titulo: "El abecedario y el orden alfabético",
    svg: mural("Abecedario de 27 letras, la ñ, ordenar por la primera letra, mirar la segunda letra y el diccionario", [[null, "a … z", "27 letras", A], [null, "ñ", "va después de la n", R], ["gato", "árbol, gato", "primera letra", Ve], ["libro", "diccionario", "todo en orden", N]], "Las palabras se ordenan como las letras del abecedario"),
  },
  video: V("abcV", "orden alfabético para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Ordena: sol, casa, mesa.",
      pasos: ["Mira la primera letra: s, c, m.", "En el abecedario va antes la c, luego la m y luego la s.", "Escribe las palabras en ese orden."],
      resultado: "casa, mesa, sol." },
    { enunciado: "Ordena: barco, bota, bebé.",
      pasos: ["Todas empiezan por b.", "Mira la segunda letra: a, o, e.", "Orden: a, e, o."],
      resultado: "barco, bebé, bota." },
    { enunciado: "¿Qué letra va entre la n y la o?",
      pasos: ["Recita: …m, n, ñ, o…", "Entre la n y la o hay una letra.", "Es la ñ, la de niño."],
      resultado: "la ñ." },
  ],
  errores: [
    "Olvidar la ñ al recitar el abecedario: va entre la n y la o.",
    "Mirar solo la primera letra cuando dos palabras empiezan igual: hay que mirar la segunda.",
    "Escribir los nombres propios con minúscula: Lucía, no lucía.",
    "Abrir el diccionario al azar: primero busca la parte de la primera letra.",
  ],
  ejercicios: [
    { q: "Di el abecedario en voz alta de la a a la z.", sol: "a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z." },
    { q: "¿Cuántas letras tiene el abecedario?", sol: "27 letras." },
    { q: "¿Qué letra va después de la f?", sol: "La g." },
    { q: "¿Qué letra va antes de la t?", sol: "La s." },
    { q: "Ordena: perro, árbol, luna.", sol: "árbol, luna, perro." },
    { q: "Ordena: mono, mesa, mapa.", sol: "mapa, mesa, mono (a, e, o)." },
    { q: "Escribe tres palabras con ñ.", sol: "Por ejemplo: niño, año, araña, uña, piña." },
    { q: "Escribe tu nombre con mayúscula al principio.", sol: "Respuesta libre: la primera letra, en mayúscula." },
    { q: "Ordena los nombres: Sara, Daniel, Elena, Bruno.", sol: "Bruno, Daniel, Elena, Sara." },
    { q: "¿Por qué letra abrirías el diccionario para buscar «tren»?", sol: "Por la t; después miras la segunda letra, la r." },
  ],
  quiz: [
    { q: "¿Cuántas letras tiene el abecedario castellano?", o: ["25", "27", "30"], a: 1, e: "Tiene 27 letras." },
    { q: "¿Por qué letra empieza?", o: ["a", "b", "z"], a: 0, e: "Empieza por la a." },
    { q: "¿Qué letra va después de la n?", o: ["o", "ñ", "m"], a: 1, e: "n, ñ, o." },
    { q: "¿Cuál va primero?", o: ["gato", "abeja", "oso"], a: 1, e: "La a va antes." },
    { q: "Si dos palabras empiezan igual, miramos…", o: ["la última letra", "la segunda letra", "el dibujo"], a: 1, e: "La segunda letra." },
    { q: "¿Cuál va primero?", o: ["pato", "perro", "pez"], a: 0, e: "pa- va antes que pe-." },
    { q: "Las palabras del diccionario están…", o: ["en orden alfabético", "desordenadas", "por colores"], a: 0, e: "En orden alfabético." },
    { q: "¿Qué palabra lleva ñ?", o: ["nido", "niño", "nube"], a: 1, e: "ni-ño." },
    { q: "¿Qué letra va antes de la d?", o: ["c", "e", "b"], a: 0, e: "c, d." },
    { q: "Los nombres de personas empiezan por…", o: ["minúscula", "mayúscula", "número"], a: 1, e: "Por mayúscula." },
  ],
  examen: [
    { q: "¿Cuál es la última letra?", o: ["y", "z", "x"], a: 1, e: "La z." },
    { q: "Ordena: sol, luna, agua. ¿Cuál va primera?", o: ["sol", "luna", "agua"], a: 2, e: "a, l, s." },
    { q: "¿Cuál va primero: casa o cama?", o: ["casa", "cama", "son iguales"], a: 1, e: "Tercera letra: m antes que s." },
    { q: "¿Para qué sirve el diccionario?", o: ["Para saber qué significan las palabras", "Para pintar", "Para contar"], a: 0, e: "Explica significados." },
  ],
  feynman: ["Cuántas letras tiene el abecedario y cuál es especial", "Cómo se ordenan las palabras por orden alfabético", "Cómo se busca una palabra en el diccionario"],
  mapa: mapa("EL ABECEDARIO", "var(--pri)", [
    ["27 letras", "de la a a la z, con la ñ", A],
    ["Orden alfabético", "primera letra: árbol, gato", R],
    ["Empiezan igual", "segunda letra: pato, perro", Ve],
    ["Diccionario", "palabras en orden", N],
  ], 230),
  tarjetas: [
    ["¿Cuántas letras tiene el abecedario?", "27"],
    ["¿Qué letra va después de la n?", "La ñ"],
    ["¿Qué es el orden alfabético?", "Ordenar palabras como las letras del abecedario"],
    ["Si empiezan igual…", "Miramos la segunda letra"],
    ["Ordena: oso, gato", "gato, oso"],
    ["¿Qué es el diccionario?", "Un libro que explica las palabras"],
    ["¿Cuándo va mayúscula?", "Al empezar, tras punto y en los nombres"],
    ["Palabra con ñ", "Niño, año, araña"],
  ],
  familias: [
    "Cantad juntos la canción del abecedario y parad en la ñ.",
    "Ordenad por orden alfabético los nombres de la familia en una lista.",
    "Buscad juntos palabras en un diccionario infantil.",
    "Mirad la agenda del móvil: ¿por qué están así los contactos?",
  ],
  profesores: PROF("Conocimiento del abecedario, correspondencia grafema-fonema, orden alfabético y primeros usos del diccionario", ["Tren del abecedario en la pared con la ñ destacada.", "Lista de clase para ordenar por parejas.", "Carrera de diccionarios con palabras sencillas."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer letras especiales como la ñ, la ch y la ll", "Ordenar palabras por la segunda y la tercera letra", "Usar el orden alfabético en listas, agendas y bibliotecas", "Entender una definición del diccionario"],
  lectura: { titulo: "La biblioteca desordenada", html: `<p>El lunes por la mañana, la bibliotecaria del colegio, Rosa, abre la puerta y se lleva un susto enorme. ¡Todos los libros están por el suelo!</p><p>Durante el fin de semana se había caído una estantería entera. Había cuentos de dragones mezclados con libros de animales y de planetas.</p><p>—Necesito ayudantes —dice Rosa.</p><p>Los niños de 2.º se ofrecen enseguida. Rosa les explica el truco: en cada estantería hay una letra, de la A a la Z, y cada libro va en la letra con la que empieza el apellido de su autor.</p><p>Mateo coge un libro de Gloria Fuertes: va en la F. Sofía coge uno de Elvira Lindo: va en la L.</p><p>—¡Y estos dos empiezan por M! —dice Leo.</p><p>—Entonces mira la segunda letra —le enseña Rosa.</p><p>En una hora, la biblioteca vuelve a estar en orden. Rosa da las gracias a sus ayudantes con un marcapáginas para cada uno.</p>` },
  tras: {
    "Las 27 letras": [
      ["Letras especiales: ñ, ch, ll", `<p>Nuestro abecedario tiene una letra que no existe en casi ningún otro idioma: la <mark>ñ</mark>. Es tan especial que es un símbolo del español en todo el mundo.</p><p>Con la ñ escribimos palabras como <b>niño</b>, <b>año</b>, <b>montaña</b>, <b>araña</b> o <b>España</b>.</p><p>Además, hay dos parejas de letras que suenan como un solo sonido. Se llaman <mark>dígrafos</mark>:</p><ul><li><b>ch</b>: chocolate, coche, leche.</li><li><b>ll</b>: llave, pollo, calle.</li></ul><p>Antes, la ch y la ll se contaban como letras del abecedario. Hoy no: en el diccionario, la palabra <b>chocolate</b> está dentro de la <b>c</b>, y <b>llave</b>, dentro de la <b>l</b>.</p><p>También es especial la <b>h</b>: es la única letra que no suena. Decimos «ola» y escribimos <b>hola</b>.</p><p><b>Actividad</b>: busca en un cuento cinco palabras con ñ y cinco con ch o ll.</p>`,
        L6.filas("Especiales", [["ñ", "niño, año", cRO], ["ch", "coche", cAZ], ["ll", "llave", cVE], ["h", "no suena", cMO]]),
        ["ODThScHFBHY", "Patylu - El Abecedario (Video Oficial)", "Patylu Oficial", 264262491]],
    ],
    "Si empiezan igual": [
      ["Mirar la tercera letra", `<p>A veces dos palabras empiezan por las <mark>dos mismas letras</mark>. Entonces miramos la <b>tercera</b>.</p><p>Ejemplo: <b>casa</b>, <b>cama</b> y <b>cabra</b>.</p><ul><li>Las tres empiezan por <b>ca</b>.</li><li>Miramos la tercera letra: ca<b>s</b>a, ca<b>m</b>a, ca<b>b</b>ra.</li><li>En el abecedario, la b va antes que la m, y la m antes que la s.</li><li>Orden: <b>cabra, cama, casa</b>.</li></ul><p>Si la tercera letra también es igual, miramos la cuarta, y así sucesivamente. Por ejemplo, <b>pato</b> y <b>pata</b>: son iguales hasta la cuarta letra. La a va antes que la o, así que el orden es pata, pato.</p><p>Es como una carrera: gana la palabra cuya letra llega antes en el abecedario, en el primer sitio donde son distintas.</p><p><b>Actividad</b>: ordena estas palabras: sol, sopa, sofá, sobre.</p>`,
        H6.flujo("Ordenar", ["casa cama|cabra", "igual|ca-", "3.ª letra|s m b", "cabra|cama casa"], cAZ)],
    ],
    "El diccionario": [
      ["Leer una definición", `<p>Cuando encontramos una palabra en el diccionario, aparece su <mark>definición</mark>: una explicación de lo que significa.</p><p>Por ejemplo:</p><p><b>gato</b>: animal doméstico de cuatro patas, con bigotes y uñas afiladas, que maúlla.</p><p>Una entrada del diccionario tiene varias partes:</p><ul><li>La <b>palabra</b>, escrita en negrita o en color.</li><li>La <b>definición</b>, que explica qué es.</li><li>A veces, un <b>ejemplo</b> de cómo se usa en una frase.</li><li>A veces, varios <b>significados</b> numerados: 1, 2, 3…</li></ul><p>Por ejemplo, <b>banco</b> tiene varios significados: 1. Asiento largo para varias personas. 2. Lugar donde se guarda el dinero. 3. Grupo de peces que nadan juntos.</p><p>Para saber cuál es el correcto, leemos la frase donde aparece la palabra.</p><p><b>Actividad</b>: busca la palabra «hoja» en el diccionario. ¿Cuántos significados tiene?</p>`,
        L6.filas("banco", [["1", "asiento", cNA], ["2", "dinero", cVE], ["3", "peces", cAZ], ["¿cuál?", "lee la frase", cRO]])],
    ],
    "Buscar una palabra": [
      ["Las palabras guía", `<p>En la parte de arriba de cada página del diccionario hay dos palabras en negrita. Se llaman <mark>palabras guía</mark>.</p><ul><li>La de la <b>izquierda</b> es la primera palabra de la página.</li><li>La de la <b>derecha</b> es la última palabra de la página.</li></ul><p>Sirven para saber rápido si la palabra que buscamos está en esa página.</p><p>Ejemplo: busco <b>loro</b>. Abro una página con las palabras guía <b>lobo</b> y <b>luna</b>.</p><ul><li>¿Loro va después de lobo? Sí: lo-b, lo-r; la b va antes que la r.</li><li>¿Loro va antes de luna? Sí: la o va antes que la u.</li><li>¡Entonces loro está en esta página!</li></ul><p>Si la palabra fuera <b>mesa</b>, tendría que pasar páginas hacia delante.</p><p>Con práctica, ¡encontrarás cualquier palabra en menos de un minuto!</p><p><b>Actividad</b>: haced una carrera en clase: gana quien encuentre primero una palabra usando las palabras guía.</p>`,
        H6.dos("Guía", ["IZQUIERDA", ["lobo", "primera", "de la página"], cAZ], ["DERECHA", ["luna", "última", "de la página"], cVE])],
    ],
  },
  final: [
    ["El orden alfabético en la vida", `<p>El <mark>orden alfabético</mark> no solo está en el diccionario. Lo usamos en muchos sitios para encontrar las cosas rápido:</p><ul><li>La <b>lista de clase</b>: los alumnos se ordenan por el apellido.</li><li>La <b>agenda</b> del móvil: los contactos aparecen de la A a la Z.</li><li>La <b>biblioteca</b>: los libros se colocan por el apellido del autor.</li><li>Los <b>índices</b> de algunos libros y las <b>enciclopedias</b>.</li><li>Los <b>buzones</b> de un edificio o los nombres de las calles en un plano.</li></ul><p>Imagina una biblioteca con miles de libros sin orden: ¡tardarías días en encontrar uno!</p><p>Por eso el orden alfabético es un invento muy útil: todo el mundo sabe las letras y todos podemos usarlo.</p><p><b>Actividad</b>: ordena alfabéticamente los nombres de cinco amigos o familiares, como en una agenda.</p>`,
      H6.rueda("Orden", "A-Z", [["clase", cNA], ["agenda", cAZ], ["biblioteca", cVE], ["índice", cRO]])],
    ["Repaso: ayudantes de biblioteca", `<p>Repasamos con los <mark>libros</mark> de la biblioteca de Rosa. Estos son los apellidos de algunos autores:</p><ul><li>Fuertes, Lindo, Martín, Molina, Andersen.</li></ul><p>Los ordenamos:</p><ul><li>Primero miramos la primera letra: A, F, L, M, M.</li><li>Martín y Molina empiezan por M. Miramos la segunda letra: a y o. La a va antes.</li><li>Orden final: <b>Andersen, Fuertes, Lindo, Martín, Molina</b>.</li></ul><p>Más preguntas:</p><ul><li>¿En qué letra del diccionario está «chocolate»? En la <b>c</b>.</li><li>¿Qué letra no suena? La <b>h</b>.</li><li>Si las palabras guía son «pan» y «pez», ¿está «pato»? Sí: pa-n, pa-t, pe-z.</li></ul><p><b>Actividad</b>: coge cinco libros de la biblioteca de clase y ordénalos por el apellido del autor.</p>`,
      L6.filas("Autores", [["1", "Andersen", cNA], ["2", "Fuertes", cAZ], ["3", "Lindo", cVE], ["4 y 5", "Martín, Molina", cRO]])],
  ],
  ejemplos: [
    ["Ordena: cabra, casa, cama.", ["Las tres empiezan por ca.", "Miro la tercera letra: b, s, m."], "cabra, cama, casa."],
    ["Palabras guía: «río» y «rosa». ¿Está «rojo»?", ["ri < ro.", "roj < ros."], "Sí."],
  ],
  errores: ["Buscar «llave» como si la ll fuera una letra aparte del abecedario.", "Ordenar solo por la primera letra cuando dos palabras empiezan igual."],
  ejercicios: [
    ["b", "Escribe tres palabras con ñ.", "Niño, año, araña…"],
    ["b", "¿Qué letra no suena?", "La h."],
    ["b", "¿Qué es una definición?", "La explicación de lo que significa una palabra."],
    ["b", "Ordena: mesa, árbol, pato.", "árbol, mesa, pato."],
    ["b", "¿Dónde se usa el orden alfabético?", "En la lista de clase, la agenda, la biblioteca…"],
    ["m", "Ordena: sol, sopa, sofá, sobre.", "sobre, sofá, sol, sopa."],
    ["m", "Ordena: pata, pato, pasa.", "pasa, pata, pato."],
    ["m", "Di dos significados de «banco».", "Asiento y lugar del dinero (o grupo de peces)."],
    ["m", "¿Para qué sirven las palabras guía?", "Para saber si la palabra está en esa página."],
    ["m", "¿En qué letra del diccionario buscas «chaqueta»?", "En la c."],
    ["a", "En la lectura, ¿cómo se ordenan los libros de la biblioteca?", "Por el apellido del autor."],
    ["a", "Palabras guía «gato» y «gota». ¿Está «gorra»? ¿Y «guante»?", "Gorra sí; guante no."],
    ["a", "Ordena: Martín, Molina, Marta, Mora.", "Marta, Martín, Molina, Mora."],
    ["a", "Explica por qué una agenda se ordena alfabéticamente.", "Para encontrar los nombres rápido."],
  ],
  quiz: [
    ["Una letra propia del español es la…", ["ñ", "w", "k"], "Especiales."],
    ["Si empiezan igual, miro la…", ["siguiente letra", "última letra", "longitud"], "Orden."],
    ["La explicación de una palabra es su…", ["definición", "sílaba", "rima"], "Diccionario."],
    ["La palabra guía de la izquierda es…", ["la primera de la página", "la última", "la más larga"], "Guía."],
    ["«Llave» se busca en la letra…", ["l", "ll", "y"], "Dígrafos."],
  ],
  examen: [
    ["En la lectura, ¿por qué los libros estaban en el suelo?", ["se cayó una estantería", "los tiraron los niños", "hubo un terremoto"], "Lectura."],
    ["¿Qué autor va primero?", ["Andersen", "Fuertes", "Molina"], "Repaso."],
  ],
  tarjetas: [
    ["Tercera letra", "Si las dos primeras son iguales, miro la tercera."],
    ["Palabras guía", "Primera y última palabra de la página."],
  ],
  glosario: [
    ["Abecedario", "Conjunto ordenado de las letras."],
    ["Dígrafo", "Dos letras que suenan como una: ch, ll."],
    ["Orden alfabético", "Orden de las palabras según el abecedario."],
    ["Diccionario", "Libro que explica el significado de las palabras."],
    ["Definición", "Explicación de lo que significa una palabra."],
    ["Entrada", "Cada palabra del diccionario con su definición."],
    ["Palabras guía", "Palabras arriba de cada página del diccionario."],
    ["Significado", "Lo que quiere decir una palabra."],
    ["Agenda", "Lista de nombres y teléfonos."],
    ["Biblioteca", "Lugar donde se guardan y prestan libros."],
  ],
  situacion: {
    titulo: "Nuestro diccionario de clase",
    reto: "La clase crea un diccionario ilustrado con palabras nuevas que aprende cada semana, ordenadas alfabéticamente.",
    pasos: ["Elegir cada uno tres palabras nuevas.", "Escribir una definición sencilla y un dibujo.", "Ordenar todas las fichas por orden alfabético.", "Añadir palabras guía en cada página."],
    producto: "Un diccionario ilustrado de la clase.",
    evaluacion: ["Conoce las letras y los dígrafos.", "Ordena por segunda y tercera letra.", "Escribe definiciones sencillas.", "Usa las palabras guía."],
  },
});
