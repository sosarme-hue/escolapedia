// Programación y robótica 2º ESO: ¿qué es programar? Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV, bl, SC } = require("./_eso2a");
const M = "Programación y robótica";

module.exports = {
  materia: M,
  curso: C,
  titulo: "¿Qué es programar?",
  minutos: 45,
  objetivos: ["Explicar qué es programar y qué es un programa", "Entender que el ordenador sigue instrucciones exactas y en orden", "Distinguir lenguajes de bloques, lenguajes de texto y lenguaje máquina", "Descubrir dónde hay programas en la vida diaria y para qué sirve aprender a programar"],
  claves: ["programar", "programa", "instrucción", "lenguaje de programación", "código", "lenguaje máquina", "traductor", "bloques", "bug", "programador"],
  pregunta: {
    texto: "Si le dices a un amigo «tráeme un vaso de agua», lo hace sin problema. ¿Por qué un robot necesitaría muchas más instrucciones para hacer lo mismo?",
    respuesta: "Porque tu amigo <b>entiende el contexto</b> y rellena los huecos: sabe dónde están los vasos, cómo abrir el grifo y cuándo parar. Un robot o un ordenador no sabe nada que no le hayan dicho: hay que indicarle <b>cada paso, en orden y sin ambigüedades</b> (ir a la cocina, abrir el armario, coger un vaso, ponerlo bajo el grifo, abrirlo, esperar a que esté lleno, cerrarlo…). Eso es programar.",
  },
  bloques: [
    {
      html: `<h3>Programar es dar instrucciones</h3><p><mark>Programar</mark> es <b>escribir instrucciones para que una máquina realice una tarea</b>. El conjunto de esas instrucciones, ordenadas y escritas en un lenguaje que la máquina puede entender, se llama <mark>programa</mark>. Cada vez que usas una aplicación del móvil, juegas a un videojuego o pones la lavadora, se está ejecutando un programa que alguien escribió. Las personas que escriben programas se llaman <b>programadores</b>. Programar se parece a escribir una receta muy detallada para alguien que no sabe nada de cocina: si te olvidas de decir «enciende el fuego», el plato nunca se hará. La diferencia es que el ordenador es <b>muy rápido</b>, puede hacer miles de millones de operaciones por segundo y <b>nunca se cansa ni se equivoca al seguir las instrucciones</b>; pero, si las instrucciones están mal, hará mal la tarea igual de rápido.</p>`,
      video: { id: "pWw4UtQhdek", titulo: "Qué son los lenguajes de programación y para qué sirven", canal: "LearnFree en Español", vistas: 187087 },
    },
    {
      html: `<h3>El ordenador hace exactamente lo que le dices</h3><p>Un ordenador <b>no piensa ni adivina</b>: ejecuta las instrucciones <b>tal como están escritas</b> y <b>en el orden</b> en que aparecen. Por eso las instrucciones tienen que ser <mark>precisas</mark>, sin ambigüedades. Una actividad clásica para entenderlo es el «robot sándwich»: un compañero hace de robot y otro le dicta cómo preparar un sándwich. Si le dices «pon la mermelada en el pan», el robot puede poner el bote entero encima del pan, porque no le has dicho que abra el bote, coja un cuchillo y extienda la mermelada. También importa el <b>orden</b>: «tostar el pan» y luego «sacar el pan de la bolsa» no funciona. Cuando un programa no hace lo que esperamos, casi nunca es culpa del ordenador, sino de una instrucción que falta, sobra, es poco clara o está en mal lugar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Robot que sigue instrucciones al pie de la letra: la instrucción poner mermelada en el pan hace que ponga el bote entero sobre el pan">${BG}
        <rect x="30" y="50" width="44" height="40" rx="8" fill="#c9ccd3" stroke="var(--ink)" stroke-width="2"/><circle cx="44" cy="66" r="5" fill="var(--pen)"/><circle cx="60" cy="66" r="5" fill="var(--pen)"/><rect x="42" y="78" width="20" height="4" rx="2" fill="var(--ink)"/><path d="M52 50 V 38" stroke="var(--ink)" stroke-width="2"/><circle cx="52" cy="35" r="4" fill="var(--red)"/>
        <rect x="34" y="92" width="36" height="40" rx="6" fill="#c9ccd3" stroke="var(--ink)" stroke-width="2"/>
        <rect x="100" y="24" width="146" height="30" rx="10" fill="var(--card)" stroke="var(--muted)" stroke-width="1.5"/>${t(173, 43, "«pon mermelada en el pan»", { size: 10 })}
        <rect x="140" y="120" width="80" height="14" rx="4" fill="#e3b778" stroke="#a5743a" stroke-width="1.5"/><rect x="164" y="88" width="32" height="32" rx="4" fill="var(--red)" fill-opacity=".7" stroke="var(--ink)" stroke-width="1.5"/>${t(180, 108, "bote", { size: 9, color: "#fff" })}
        ${fl(80, 100, 132, 112, "var(--muted)", 1.5)}${t(130, 160, "hace lo que dices, no lo que quieres", { size: 10, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>Los lenguajes de programación</h3><p>Por dentro, un ordenador solo entiende el <mark>lenguaje máquina</mark>: largas listas de ceros y unos que activan o desactivan circuitos. Escribir así es casi imposible para las personas. Por eso se inventaron los <mark>lenguajes de programación</mark>, con palabras y reglas más cercanas a nuestro idioma (casi siempre en inglés). El texto escrito en uno de estos lenguajes se llama <b>código</b> o código fuente. Después, un programa traductor (llamado <b>compilador</b> o <b>intérprete</b>) lo convierte en lenguaje máquina para que el ordenador lo ejecute. Hay cientos de lenguajes, cada uno pensado para un tipo de tarea: <b>Python</b> es fácil de leer y se usa en ciencia e inteligencia artificial; <b>JavaScript</b> da vida a las páginas web; <b>C++</b> se usa en videojuegos y robots; <b>Java</b> y <b>Kotlin</b>, en aplicaciones de Android; <b>Swift</b>, en las de iPhone.</p>${tabla(["Lenguaje", "Se usa para"], [["Scratch", "aprender, juegos y animaciones"], ["Python", "ciencia, datos e inteligencia artificial"], ["JavaScript", "páginas web interactivas"], ["C++", "videojuegos, robots y Arduino"], ["Java / Kotlin", "aplicaciones de Android"], ["Swift", "aplicaciones de iPhone"]])}`,
    },
    {
      html: `<h3>Bloques y texto</h3><p>Para empezar a programar se usan los <mark>lenguajes por bloques</mark>, como <b>Scratch</b>, MakeCode o mBlock. En ellos las instrucciones son <b>piezas de colores que se encajan</b> como un puzle. Tienen grandes ventajas para aprender: no hay que memorizar palabras, no se cometen errores de escritura (una coma o un paréntesis olvidados) y la forma de cada pieza indica dónde puede ir. Así uno se puede concentrar en lo importante: la <b>lógica</b> del programa. Los programadores profesionales usan <mark>lenguajes de texto</mark>, que son más rápidos de escribir, más potentes y permiten programas enormes. Pero las ideas son las mismas: lo que en Scratch es el bloque «decir Hola», en Python es <code>print("Hola")</code>; y «repetir 10 veces» es <code>for i in range(10):</code>. Muchas herramientas, como MakeCode, permiten ver el mismo programa en bloques y en texto, lo que ayuda a dar el salto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El mismo programa en bloques de Scratch y en texto de Python: repetir 3 veces decir Hola">${BG}
        ${t(64, 22, "bloques", { size: 11, color: "var(--muted)" })}${t(194, 22, "texto (Python)", { size: 11, color: "var(--muted)" })}
        <path d="M12 34 h 108 v 22 h -84 v 26 h 84 v 16 h -108 Z" fill="${SC.con}" stroke="var(--ink)" stroke-opacity=".25"/>${t(20, 49, "repetir 3", { size: 10, color: "#fff", anchor: "start" })}
        ${bl(36, 58, 84, SC.apa, "decir Hola")}
        <rect x="134" y="34" width="118" height="64" rx="8" fill="#1d2433"/>${t(142, 58, "for i in range(3):", { size: 9.5, color: "#9ad3ff", anchor: "start", font: "monospace" })}${t(152, 80, 'print("Hola")', { size: 9.5, color: "#ffd479", anchor: "start", font: "monospace" })}
        ${t(130, 132, "Hola · Hola · Hola", { size: 12, color: "var(--leaf)" })}${t(130, 156, "misma idea, distinto lenguaje", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "as1opL254NA", titulo: "Lógica de programación: aprende a programar en 10 minutos", canal: "Programador X", vistas: 2993639 },
    },
    {
      html: `<h3>Los pasos para crear un programa</h3><p>Crear un programa no consiste solo en escribir código. Los programadores siguen unas fases. Primero, <b>entender el problema</b>: ¿qué tiene que hacer exactamente el programa?, ¿quién lo usará? Segundo, <b>diseñar la solución</b>: pensar el <b>algoritmo</b>, es decir, los pasos ordenados para resolverlo, y dibujarlo en un diagrama o escribirlo en palabras. Tercero, <b>programar</b>: traducir ese algoritmo a un lenguaje de programación. Cuarto, <b>probar</b>: ejecutar el programa muchas veces, con casos distintos, para comprobar que funciona. Quinto, <b>depurar</b>: buscar y corregir los errores encontrados. Y, por último, <b>mejorar</b> y compartir. Este ciclo se repite muchas veces: los programas grandes, como un videojuego o una red social, nunca están «terminados» del todo; se actualizan continuamente para corregir fallos y añadir funciones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo de creación de un programa: entender, diseñar, programar, probar y depurar, y vuelta a empezar">${BG}
        ${[["entender", 130, 26, "var(--pen)"], ["diseñar", 216, 70, "#b8860b"], ["programar", 186, 140, "var(--red)"], ["probar", 74, 140, "var(--leaf)"], ["depurar", 44, 70, "#9a66e0"]].map(([s, x, y, c]) => caja(x - 38, y - 14, 76, 28, s, c, { size: 10.5 })).join("")}
        ${fl(170, 34, 196, 54, "var(--muted)", 1.5)}${fl(214, 86, 200, 124, "var(--muted)", 1.5)}${fl(146, 146, 114, 146, "var(--muted)", 1.5)}${fl(64, 124, 50, 86, "var(--muted)", 1.5)}${fl(62, 54, 90, 34, "var(--muted)", 1.5)}
        ${t(130, 92, "mejorar", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Errores: los bugs</h3><p>Todos los programas tienen errores, también los de las grandes empresas. Los errores de programación se llaman <mark>bugs</mark>, que en inglés significa «bichos». Se cuenta que en 1947 la programadora <b>Grace Hopper</b> y su equipo encontraron una polilla atrapada dentro de un ordenador que fallaba, y la pegaron en el cuaderno de registro como «el primer bug encontrado». Hay errores de distintos tipos: de <b>sintaxis</b>, cuando no se respetan las reglas del lenguaje (como una falta de ortografía; en los bloques casi no ocurren); de <b>lógica</b>, cuando el programa funciona pero hace algo distinto de lo que queríamos (por ejemplo, restar puntos en lugar de sumarlos); y de <b>ejecución</b>, cuando el programa se bloquea, como al dividir entre cero. Encontrar y corregir errores se llama <mark>depurar</mark>. Equivocarse no es fracasar: es parte normal de programar, y cada error enseña algo.</p>`,
    },
    {
      html: `<h3>Programas por todas partes</h3><p>Hoy hay programas en casi todos los objetos que nos rodean. Los más evidentes están en <b>ordenadores, móviles y consolas</b>. Pero también los llevan la lavadora, el microondas, el frigorífico, la televisión, los coches (un coche moderno tiene más de 100 millones de líneas de código), los semáforos, los ascensores, los cajeros automáticos, los aviones y los marcapasos. Los programas controlan las fábricas, los robots, las redes eléctricas, los satélites y las misiones espaciales. Cuando un objeto cotidiano lleva un pequeño ordenador dentro y se conecta a internet, como un altavoz inteligente o un termostato, hablamos del <b>internet de las cosas</b>. Detrás de cada uno de esos objetos hay equipos de personas que han diseñado, escrito y probado sus programas. Por eso los programadores son una de las profesiones más demandadas.</p>`,
    },
    {
      html: `<h3>¿Por qué aprender a programar?</h3><p>Aunque no quieras ser informático, aprender a programar tiene muchas ventajas. Desarrolla el <mark>pensamiento computacional</mark>, una forma de resolver problemas que consiste en <b>descomponerlos</b> en partes pequeñas, encontrar <b>patrones</b> que se repiten, quedarse con lo importante y diseñar pasos ordenados para resolverlos. Te ayuda a ser <b>creativo</b>: puedes crear tus propios juegos, animaciones, historias, aplicaciones o robots, en lugar de usar solo los que han hecho otros. Mejora la <b>paciencia y la perseverancia</b>, porque hay que probar y corregir muchas veces. Fomenta el <b>trabajo en equipo</b>, ya que los grandes proyectos se hacen entre muchas personas. Y te permite <b>entender el mundo digital</b> en el que vives, para usarlo con sentido crítico. Programar es útil en medicina, biología, arte, música, periodismo, economía o deporte. Y cualquiera puede aprender: solo hace falta empezar.</p>`,
    },
  ],
  figura: {
    titulo: "De la idea a la máquina",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Una idea se convierte en un algoritmo, se escribe en un lenguaje de programación como código, un traductor lo pasa a lenguaje máquina y la máquina lo ejecuta">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Idea", "¿qué quiero hacer?", "var(--pen)"], ["Algoritmo", "pasos ordenados", "#b8860b"], ["Código", "Scratch, Python…", "var(--red)"], ["Traductor", "compilador o intérprete", "#9a66e0"], ["Máquina", "01001… y ¡acción!", "var(--leaf)"]].map(([a, b, col], i) => { const x = 14 + i * 126; return `<rect x="${x}" y="50" width="108" height="110" rx="14" fill="${col}" fill-opacity=".12" stroke="${col}" stroke-width="2.5"/>${t(x + 54, 96, a, { size: 16, color: col, font: D })}${t(x + 54, 130, b, { size: 10, weight: 400 })}${i < 4 ? fl(x + 110, 105, x + 124, 105, "var(--muted)", 2) : ""}`; }).join("")}
      ${t(320, 200, "las personas piensan y escriben; la máquina ejecuta", { size: 13, color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "VZe9tjqa9xw", titulo: "Programación para niños: conceptos básicos", canal: "Smile and Learn - Español", vistas: 377224, megusta: 0, busqueda: "qué es programar conceptos básicos" },
  ejemplos: [
    { enunciado: "Escribe las instrucciones para que un «robot» compañero se siente en una silla que está a 3 pasos delante.",
      pasos: ["Avanza 3 pasos.", "Gira 180 grados (date la vuelta).", "Flexiona las rodillas hasta tocar la silla y apoya el peso."],
      resultado: "Instrucciones precisas y en orden; sin el giro, se sentaría en el aire." },
    { enunciado: "Un programa debe sumar 1 punto al coger una moneda, pero los puntos bajan. ¿Qué tipo de error es?",
      pasos: ["El programa funciona y no se bloquea.", "Pero hace algo distinto de lo que queríamos.", "Seguramente hay un «sumar −1» o «restar» en lugar de «sumar 1»."],
      resultado: "Error de lógica." },
    { enunciado: "Ordena las fases: probar, entender el problema, programar, depurar, diseñar el algoritmo.",
      pasos: ["Primero se entiende qué hay que hacer.", "Luego se diseña el algoritmo y se programa.", "Al final se prueba y se depura."],
      resultado: "Entender, diseñar, programar, probar, depurar." },
  ],
  errores: [
    "Pensar que el ordenador entiende lo que queremos decir: solo ejecuta lo que está escrito.",
    "Creer que programar es solo escribir código: antes hay que pensar el algoritmo.",
    "Pensar que los bloques no son programación de verdad: usan las mismas ideas que el texto.",
    "Desanimarse con los errores: todos los programas tienen bugs al principio.",
    "Creer que solo los ordenadores tienen programas: también los electrodomésticos, coches o semáforos.",
  ],
  ejercicios: [
    { q: "¿Qué es programar? ¿Y qué es un programa?", sol: "Escribir instrucciones para que una máquina haga una tarea; el programa es el conjunto ordenado de esas instrucciones en un lenguaje que la máquina entiende." },
    { q: "¿Por qué las instrucciones para un ordenador deben ser muy precisas?", sol: "Porque el ordenador no piensa ni adivina: hace exactamente lo que se le dice." },
    { q: "¿Qué es el lenguaje máquina?", sol: "El que entiende el ordenador por dentro: ceros y unos." },
    { q: "¿Para qué sirve un compilador o intérprete?", sol: "Para traducir el código de un lenguaje de programación a lenguaje máquina." },
    { q: "Nombra tres lenguajes de programación y para qué se usa cada uno.", sol: "Python (ciencia e IA), JavaScript (webs), C++ (videojuegos y robots)." },
    { q: "Escribe dos ventajas de los lenguajes por bloques.", sol: "No hay errores de escritura y la forma de las piezas indica dónde encajan." },
    { q: "Ordena las fases para crear un programa.", sol: "Entender el problema, diseñar el algoritmo, programar, probar, depurar y mejorar." },
    { q: "¿Qué es un bug y de dónde viene el nombre?", sol: "Un error de programación; de la polilla encontrada en un ordenador en 1947 por el equipo de Grace Hopper." },
    { q: "Escribe cinco objetos de tu casa que tengan programas.", sol: "Móvil, televisión, lavadora, microondas, router (o consola, frigorífico…)." },
    { q: "¿Qué es el pensamiento computacional?", sol: "Resolver problemas descomponiéndolos, buscando patrones, quedándose con lo importante y diseñando pasos ordenados." },
  ],
  quiz: [
    { q: "Programar es…", o: ["dar instrucciones a una máquina", "arreglar ordenadores", "usar redes sociales"], a: 0, e: "Escribir instrucciones." },
    { q: "Un ordenador…", o: ["adivina lo que quieres", "hace exactamente lo que se le dice", "piensa como una persona"], a: 1, e: "Sigue las instrucciones al pie de la letra." },
    { q: "El lenguaje máquina está formado por…", o: ["palabras en inglés", "ceros y unos", "bloques de colores"], a: 1, e: "Binario." },
    { q: "El texto de un programa se llama…", o: ["código", "hardware", "interfaz"], a: 0, e: "Código fuente." },
    { q: "Un lenguaje por bloques es…", o: ["Python", "Scratch", "C++"], a: 1, e: "Scratch." },
    { q: "Para páginas web se usa mucho…", o: ["JavaScript", "Swift", "lenguaje máquina"], a: 0, e: "JavaScript." },
    { q: "Antes de programar hay que…", o: ["diseñar el algoritmo", "comprar un robot", "nada"], a: 0, e: "Pensar los pasos." },
    { q: "Un error de programación se llama…", o: ["bug", "byte", "bit"], a: 0, e: "Bug." },
    { q: "Si el programa funciona pero hace otra cosa, el error es de…", o: ["sintaxis", "lógica", "hardware"], a: 1, e: "Lógica." },
    { q: "Corregir errores se llama…", o: ["compilar", "depurar", "descargar"], a: 1, e: "Depurar." },
  ],
  examen: [
    { q: "Grace Hopper es famosa por…", o: ["el primer bug documentado", "inventar internet", "crear Scratch"], a: 0, e: "La polilla de 1947." },
    { q: "Traduce el código a lenguaje máquina…", o: ["el compilador", "el monitor", "el ratón"], a: 0, e: "Compilador o intérprete." },
    { q: "Descomponer problemas y buscar patrones es…", o: ["pensamiento computacional", "netiqueta", "hardware"], a: 0, e: "Pensamiento computacional." },
  ],
  feynman: ["Qué es programar y por qué las instrucciones deben ser precisas", "Qué diferencia hay entre lenguaje máquina y lenguaje de programación", "Cuáles son los pasos para crear un programa"],
  mapa: mapa("PROGRAMAR", "var(--eso)", [
    ["Instrucciones", "precisas · en orden", "var(--pen)"],
    ["Lenguajes", "bloques · texto · máquina", "#b8860b"],
    ["Fases", "diseñar · programar · probar", "var(--red)"],
    ["Bugs", "sintaxis · lógica · depurar", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Programar", "Escribir instrucciones para que una máquina haga una tarea."],
    ["Programa", "Conjunto ordenado de instrucciones en un lenguaje."],
    ["Código", "Texto de un programa escrito en un lenguaje."],
    ["Lenguaje máquina", "Ceros y unos que entiende el ordenador."],
    ["Compilador", "Traduce el código a lenguaje máquina."],
    ["Scratch", "Lenguaje por bloques para aprender a programar."],
    ["Bug", "Error de programación."],
    ["Depurar", "Buscar y corregir errores."],
  ],
  familias: ["Jugad al «robot sándwich»: una persona da instrucciones y otra las sigue al pie de la letra.", "Buscad en casa objetos que lleven programas dentro.", "Probad juntos una actividad de La Hora del Código."],
  profesores: {
    saberes: "Introducción a la programación: concepto de programa e instrucción, lenguajes de programación (bloques, texto, máquina), fases de desarrollo, errores y depuración, y presencia de la programación en la vida diaria (RD 217/2022 y currículos autonómicos de Programación y robótica).",
    ideas: ["Actividad desenchufada del «robot sándwich» o del «robot humano» en una cuadrícula.", "Comparación del mismo programa en bloques y en texto con MakeCode.", "Investigación sobre una programadora o programador famoso (Ada Lovelace, Grace Hopper, Margaret Hamilton)."],
  },
  fuentes: [RD, wiki("Programación", "Programación"), wiki("Lenguaje de programación", "Lenguaje_de_programación")],
  revisado: REV,
};
