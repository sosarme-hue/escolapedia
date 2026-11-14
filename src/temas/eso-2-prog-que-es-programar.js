// Programación y robótica 2º ESO · ¿Qué es programar? Tema nivel libro (lote 8).
// Contenido y dibujos propios: esquemas de _eso2L8 y dibujos de la versión anterior del tema.
const H = require("./_eso2L8");
const S = "prog-que-es-programar";
const [vLeng] = H.videos(S);
const vQue = { id: "6svvtOjLA-A", titulo: "¿Qué es la programación y para qué se utiliza?", canal: "ZoneClass", vistas: 380760, busqueda: "qué es un programa informático lenguaje de programación" };

const dondeHay = H.radial("Dónde hay programas: móvil, lavadora, coche, semáforo, videojuegos y robots", "PROGRAMAS", ["Móvil y apps", "Lavadora", "Coche", "Semáforo", "Videojuegos", "Robots"], "var(--pen)");
const eps = H.flechas("Esquema de un sistema informático: entrada de datos, proceso en el procesador, salida de resultados y almacenamiento", ["Entrada: teclado, ratón, sensores", "Proceso: el procesador ejecuta el programa", "Salida: pantalla, altavoz, motores", "Almacenamiento: memoria y disco"], "Entrada → proceso → salida");
const historia = H.linea("Línea del tiempo de la programación: Ada Lovelace en 1843, ENIAC en 1946, BASIC en 1964, Scratch en 2007 y la inteligencia artificial actual", [["1843", "Ada Lovelace"], ["1946", "ENIAC"], ["1964", "BASIC"], ["2007", "Scratch"], ["Hoy", "IA y apps"]], "Breve historia");
const binario = H.tablaSvg("Números en binario: 0 es 0, 1 es 1, 2 es 10, 3 es 11, 4 es 100 y 5 es 101", ["Decimal", "Binario", "Bits"], [["0", "0", "1"], ["1", "1", "1"], ["2", "10", "2"], ["3", "11", "2"], ["5", "101", "3"]]);
const traductor = H.flechas("Del código del programador al lenguaje máquina: código fuente, traductor (compilador o intérprete), código máquina y ejecución", ["Código fuente (Scratch, Python…)", "Traductor: compilador o intérprete", "Código máquina: ceros y unos", "El procesador lo ejecuta"], "Cómo entiende el ordenador");
const piezas = H.cajas("Las cuatro piezas de casi todos los programas: secuencia, repetición, decisión y datos", [
  ["Secuencia", "pasos en orden", H.CAT.movimiento],
  ["Repetición", "bucles", H.CAT.control],
  ["Decisión", "si… entonces", H.CAT.sensores],
  ["Datos", "variables", H.CAT.variables],
], "Las piezas de un programa");
const bug = H.codigo("Programa con un error de lógica: al coger una moneda se resta un punto en vez de sumarlo", [
  ["cuando se pulse la bandera", 0, H.PS.clave],
  ["puntos ← 0", 0, H.PS.ini],
  ["por siempre", 0, H.PS.clave],
  ["si toca Moneda entonces", 1, H.PS.clave],
  ["puntos ← puntos − 1   ✗", 2, H.PS.mal],
  ["puntos ← puntos + 1   ✓", 2, H.PS.ok],
  ["# un bug no da error: hace otra cosa", 0, H.PS.com],
], "Encuentra el bug");
const tiposError = H.cajas("Tres tipos de errores: de sintaxis, de ejecución y de lógica", [
  ["Sintaxis", "mal escrito", "var(--red)"],
  ["Ejecución", "falla al funcionar", "var(--sun)"],
  ["Lógica", "hace otra cosa", "var(--pen)"],
  ["Depurar", "buscar y corregir", "var(--leaf)"],
], "Tipos de errores");
const oficios = H.cajas("Profesiones relacionadas con la programación: videojuegos, apps, robótica, ciencia de datos, ciberseguridad y medicina", [
  ["Videojuegos", "diseño y código", "var(--pen)"],
  ["Apps y webs", "móvil e internet", "var(--leaf)"],
  ["Robótica", "fábricas, hospitales", "var(--red)"],
  ["Datos e IA", "predecir, clasificar", "var(--sun)"],
  ["Ciberseguridad", "proteger sistemas", "var(--inf)"],
  ["Ciencia", "clima, genética", "var(--bac)"],
], "¿Quién programa?");
const etica = H.comparar("Programar con responsabilidad: un buen programa funciona y además es accesible, seguro y respetuoso con los datos", [
  ["Funciona", ["hace la tarea", "sin errores", "rápido"], "var(--pen)"],
  ["Es responsable", ["accesible a todos", "protege los datos", "no engaña"], "var(--leaf)"],
], "Un buen programa");
const pensar = H.flechas("Antes de programar se piensa: entender el problema, dividirlo en partes, escribir el algoritmo y luego programarlo", ["Entender qué hay que conseguir", "Dividir el problema en partes", "Escribir el algoritmo en papel", "Pasarlo a un lenguaje de programación"], "Pensar antes de teclear");

module.exports = {
  materia: H.MATERIA,
  curso: H.CURSO,
  titulo: "¿Qué es programar?",
  minutos: 100,
  objetivos: [
    "Explicar qué es programar, qué es un programa y qué es un algoritmo",
    "Entender que el ordenador sigue instrucciones exactas, en orden y sin interpretar",
    "Describir cómo funciona un sistema informático: entrada, proceso, salida y almacenamiento",
    "Distinguir lenguaje máquina, lenguajes de bloques y lenguajes de texto, y el papel de los traductores",
    "Reconocer las piezas básicas de un programa y los tipos de errores",
    "Valorar la programación como herramienta creativa, profesional y responsable",
  ],
  claves: ["programar", "programa", "instrucción", "algoritmo", "hardware", "software", "lenguaje de programación", "código fuente", "lenguaje máquina", "bit", "binario", "compilador", "intérprete", "bug", "depurar"],
  pregunta: {
    texto: "Si le dices a un amigo «tráeme un vaso de agua», lo hace sin problema. ¿Por qué un robot necesitaría muchas más instrucciones para hacer lo mismo?",
    respuesta: "Porque tu amigo <b>entiende el contexto</b> y rellena los huecos: sabe dónde están los vasos, cómo abrir el grifo y cuándo parar. Un robot o un ordenador no sabe nada que no le hayan dicho: hay que indicarle <b>cada paso, en orden y sin ambigüedades</b> (ir a la cocina, abrir el armario, coger un vaso, ponerlo bajo el grifo, abrirlo, esperar a que esté lleno, cerrarlo…). Eso es <mark>programar</mark>.",
  },
  lectura: {
    titulo: "Margaret y el ordenador que llegó a la Luna",
    html: `<p>En julio de 1969, el módulo lunar del Apolo 11 descendía hacia la Luna con Neil Armstrong y Buzz Aldrin a bordo. A pocos minutos de tocar el suelo, en la pantalla del ordenador de navegación empezaron a aparecer alarmas: «1202», «1201». El ordenador estaba recibiendo más trabajo del que podía hacer.</p>
<p>En la Tierra, los técnicos tenían segundos para decidir si abortaban el aterrizaje. Pero el programa del ordenador había sido diseñado por un equipo dirigido por <b>Margaret Hamilton</b>, una ingeniera de 32 años que había pensado en ese tipo de problema. Su programa sabía <b>ordenar las tareas por importancia</b>: cuando había demasiadas, dejaba de lado las menos urgentes y seguía haciendo las vitales, como controlar los motores. El aterrizaje continuó y salió bien.</p>
<p>Aquel ordenador tenía menos memoria que una calculadora actual. Lo que lo hizo fiable no fue su potencia, sino un <b>programa bien pensado</b>: instrucciones precisas, ordenadas y preparadas para los errores. Margaret Hamilton fue una de las primeras personas en usar la expresión «ingeniería del software». En este tema descubrirás qué es exactamente programar y por qué es mucho más que escribir código.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Programar es dar instrucciones</h3><p><mark>Programar</mark> es escribir instrucciones para que una máquina realice una tarea. El conjunto de esas instrucciones, ordenadas y escritas en un lenguaje que la máquina puede entender, se llama <mark>programa</mark>. A los programas también se les llama <b>software</b> o, en el móvil, <b>aplicaciones</b>.</p><p>Cada vez que usas una aplicación, juegas a un videojuego, pones la lavadora o pasas por un semáforo, se está ejecutando un programa que alguien escribió. Las personas que escriben programas se llaman <b>programadoras</b> y <b>programadores</b>.</p><p>Programar se parece a escribir una receta muy detallada para alguien que no sabe nada de cocina. La diferencia es que el ordenador es <b>rapidísimo</b> (hace miles de millones de operaciones por segundo), <b>nunca se cansa</b> y repite lo mismo sin equivocarse. Pero si las instrucciones están mal, hará mal la tarea igual de rápido.</p>`,
      svg: dondeHay,
    },
    {
      html: `<h3>1.2 El ordenador hace exactamente lo que le dices</h3><p>Un ordenador <b>no piensa ni adivina</b>: ejecuta las instrucciones tal como están escritas y en el orden en que aparecen. Por eso las instrucciones tienen que ser <mark>precisas</mark>, sin ambigüedades.</p><p>Una actividad clásica para entenderlo es el «robot sándwich»: un compañero hace de robot y otro le dicta cómo preparar un sándwich. Si le dices «pon la mermelada en el pan», el robot puede poner el bote entero encima de la rebanada, porque no le has dicho que lo abra, que coja un cuchillo ni que extienda la mermelada.</p><p>Las personas usamos el <b>sentido común</b> para completar lo que falta; las máquinas no. De aquí salen tres reglas de oro: cada instrucción debe ser <b>clara</b> (una sola interpretación), las instrucciones deben estar en el <b>orden correcto</b> y no puede faltar <b>ningún paso</b>. Si cambias el orden de «abrir el grifo» y «poner el vaso», el resultado es un charco.</p>`,
      svg: H.viejo(S, 1),
      video: vLeng,
    },
    {
      html: `<h3>1.3 Hardware y software: cómo funciona un ordenador</h3><p>Un sistema informático tiene dos partes. El <mark>hardware</mark> es la parte física, lo que se puede tocar: el procesador, la memoria, la pantalla, el teclado o los motores de un robot. El <mark>software</mark> son los programas: las instrucciones que le dicen al hardware qué hacer. Sin software, el hardware es una caja inútil; sin hardware, el software no tiene dónde ejecutarse.</p><p>Casi todos los sistemas siguen el mismo esquema:</p><p>• <b>Entrada</b>: los datos llegan por el teclado, el ratón, la pantalla táctil, el micrófono o los sensores.<br>• <b>Proceso</b>: el <b>procesador</b> (CPU) ejecuta el programa y hace los cálculos.<br>• <b>Salida</b>: los resultados aparecen en la pantalla, suenan por el altavoz o mueven un motor.<br>• <b>Almacenamiento</b>: los programas y los datos se guardan en la memoria y en el disco.</p><p>Un cajero automático, una consola o un robot aspirador siguen este esquema: leen datos, los procesan con un programa y producen una respuesta.</p>`,
      svg: eps,
    },
    {
      html: `<h3>1.4 Un poco de historia</h3><p>La programación es más antigua que los ordenadores electrónicos. En 1843, la matemática inglesa <b>Ada Lovelace</b> escribió un algoritmo para la «máquina analítica» de Charles Babbage, una calculadora mecánica que nunca llegó a construirse. Por eso se la considera la primera programadora de la historia.</p><p>En 1946 se presentó el <b>ENIAC</b>, uno de los primeros ordenadores electrónicos: ocupaba una sala entera y se programaba conectando cables a mano. Un grupo de seis mujeres matemáticas fueron sus primeras programadoras. En los años cincuenta, <b>Grace Hopper</b> creó los primeros traductores, que permitían escribir programas con palabras en lugar de con números.</p><p>Después llegaron lenguajes pensados para aprender, como <b>BASIC</b> (1964) o <b>Logo</b>, con su famosa tortuga que dibujaba. En 2007, el MIT publicó <b>Scratch</b>, el lenguaje de bloques que usarás en este curso. Hoy se programa en todas partes: móviles, coches, satélites y sistemas de inteligencia artificial.</p>`,
      svg: historia,
    },
    {
      html: `<h3>1.5 El idioma de la máquina: bits y binario</h3><p>Por dentro, un ordenador solo entiende dos estados: hay corriente o no hay corriente. Los representamos con <b>1</b> y <b>0</b>. Cada uno de esos dígitos se llama <mark>bit</mark>, y un grupo de 8 bits forma un <b>byte</b>.</p><p>Con bits se puede representar cualquier cosa. Los números se escriben en <mark>sistema binario</mark>, que solo usa ceros y unos: el 0 es 0, el 1 es 1, el 2 es 10, el 3 es 11, el 4 es 100 y el 5 es 101. Las letras también tienen un código: por ejemplo, la «A» es 01000001. Una foto es una lista enorme de números que indican el color de cada punto, y una canción, una lista de números que describen el sonido.</p><p>Las instrucciones que entiende directamente el procesador también son ceros y unos: es el <mark>lenguaje máquina</mark>. Escribir programas así sería lentísimo y muy fácil equivocarse, por eso las personas usamos lenguajes de programación más cercanos a nuestro idioma.</p>`,
      svg: binario,
    },
    {
      html: `<h3>1.6 Lenguajes de programación: bloques y texto</h3><p>Un <mark>lenguaje de programación</mark> es un idioma con palabras y reglas muy estrictas para escribir programas. Igual que en español hay normas de ortografía, cada lenguaje tiene su <b>sintaxis</b>: la forma correcta de escribir cada instrucción. El texto de un programa se llama <mark>código fuente</mark>.</p><p>Hay dos grandes familias de lenguajes para aprender:</p><p>• <b>Lenguajes de bloques</b>, como Scratch, MakeCode o mBlock. Las instrucciones son piezas de colores que encajan como un puzle. No hay errores de escritura y es fácil ver la estructura del programa.<br>• <b>Lenguajes de texto</b>, como Python, JavaScript o C++. Las instrucciones se escriben con el teclado. Son más potentes y se usan en el mundo profesional.</p><p>Lo importante es que <b>las ideas son las mismas</b>: un bucle «repetir 3 veces» en Scratch es lo mismo que <code>for i in range(3)</code> en Python. Lo que aprendas con bloques te servirá cuando pases al texto.</p>`,
      svg: H.viejo(S, 3),
    },
    {
      html: `<h3>1.7 Los traductores: compiladores e intérpretes</h3><p>Si el procesador solo entiende ceros y unos, ¿cómo ejecuta un programa escrito en Scratch o en Python? Gracias a un <mark>traductor</mark>, un programa que convierte el código fuente en lenguaje máquina. Hay dos tipos:</p><p>• El <mark>compilador</mark> traduce el programa <b>entero</b> antes de ejecutarlo y crea un archivo ejecutable. Es como traducir un libro completo antes de publicarlo. Así funcionan lenguajes como C o C++. Los programas compilados suelen ser muy rápidos.<br>• El <mark>intérprete</mark> traduce y ejecuta el programa <b>instrucción a instrucción</b>, mientras funciona. Es como un intérprete que traduce en directo una conversación. Así funcionan Python o Scratch.</p><p>Cuando cargas un programa en una placa de robótica, el editor lo compila y lo envía a la placa. Gracias a los traductores, el mismo programa puede funcionar en ordenadores distintos.</p>`,
      svg: traductor,
    },
    {
      html: `<h3>1.8 Las piezas de un programa</h3><p>Aunque haya miles de lenguajes, casi todos los programas se construyen con las mismas piezas:</p><p>• <b>Secuencia</b>: instrucciones que se ejecutan una detrás de otra, en orden.<br>• <b>Repetición</b> o <b>bucle</b>: un grupo de instrucciones que se repite varias veces o mientras se cumpla algo.<br>• <b>Decisión</b> o <b>condicional</b>: el programa elige qué hacer según una condición («si llueve, coge el paraguas»).<br>• <b>Datos</b>: los programas guardan información en <b>variables</b>, como los puntos de un juego o el nombre de un usuario.</p><p>Además, los programas reaccionan a <b>eventos</b> (pulsar una tecla, tocar la pantalla, que un sensor detecte algo) y se organizan en partes más pequeñas llamadas <b>funciones</b> o bloques propios. Con estas pocas piezas se construye desde una calculadora hasta un videojuego o el control de un robot. A lo largo del curso aprenderás a usar cada una.</p>`,
      svg: piezas,
    },
    {
      html: `<h3>1.9 Pensar antes de teclear</h3><p>Muchas personas creen que programar es sentarse delante del ordenador y escribir. En realidad, lo más importante pasa <b>antes</b>: entender el problema y pensar la solución. Esa forma de pensar se llama <mark>pensamiento computacional</mark>.</p><p>Primero hay que <b>entender</b> qué se quiere conseguir: ¿qué datos tengo?, ¿qué resultado espero? Después se <b>divide</b> el problema en partes más pequeñas (descomposición): un videojuego se divide en el personaje, los enemigos, los puntos y la pantalla final. Luego se escribe el <mark>algoritmo</mark>, la lista ordenada de pasos para resolver cada parte, en papel, con frases o con un diagrama de flujo.</p><p>Solo entonces se pasa el algoritmo a un lenguaje de programación. Los programadores profesionales dedican mucho tiempo a pensar, dibujar esquemas y hablar con su equipo. Un buen algoritmo se puede programar en cualquier lenguaje; uno malo no lo arregla ningún lenguaje.</p>`,
      svg: pensar,
    },
    {
      html: `<h3>1.10 El ciclo de creación de un programa</h3><p>Los programas no salen perfectos a la primera. Se crean siguiendo un <b>ciclo</b> que se repite varias veces:</p><p>1. <b>Entender</b> el problema o la idea.<br>2. <b>Diseñar</b> la solución: el algoritmo, los dibujos, los personajes.<br>3. <b>Programar</b>: escribir el código o montar los bloques.<br>4. <b>Probar</b>: ejecutar el programa en situaciones distintas, también las raras.<br>5. <b>Depurar</b>: encontrar y corregir los errores.</p><p>Después se vuelve a empezar para mejorar o añadir funciones. Este método de avanzar con versiones pequeñas que se prueban y mejoran se llama <b>desarrollo iterativo</b>. Es lo que hacen las empresas de videojuegos o de apps: lanzan una versión, recogen opiniones de los usuarios y publican actualizaciones. Las actualizaciones de tu móvil son justamente eso: nuevas vueltas del ciclo.</p>`,
      svg: H.viejo(S, 4),
    },
    {
      html: `<h3>1.11 Los bugs y la depuración</h3><p>Un error en un programa se llama <mark>bug</mark> («bicho» en inglés). Se cuenta que en 1947 el equipo de Grace Hopper encontró una polilla atrapada dentro de un ordenador que provocaba fallos, y la pegaron en el cuaderno con la nota «primer bicho encontrado». La tarea de buscar y corregir errores se llama <mark>depurar</mark> (en inglés, <i>debugging</i>).</p><p>Hay tres tipos de errores:</p><p>• <b>De sintaxis</b>: la instrucción está mal escrita y el traductor no la entiende, como olvidar un paréntesis en Python. En Scratch casi no ocurren.<br>• <b>De ejecución</b>: el programa empieza, pero falla al funcionar, por ejemplo al dividir entre cero.<br>• <b>De lógica</b>: el programa funciona, pero hace algo distinto de lo que queríamos, como restar puntos en vez de sumarlos. Son los más difíciles de encontrar.</p><p>Equivocarse es normal: todos los programadores lo hacen. Lo importante es probar mucho y leer el programa con calma.</p>`,
      svg: bug,
    },
    {
      html: `<h3>1.12 Estrategias para depurar</h3><p>Encontrar un bug se parece a resolver un misterio. Algunas estrategias útiles:</p><p>• <b>Reproducir el error</b>: averigua exactamente qué haces para que ocurra.<br>• <b>Probar por partes</b>: ejecuta trozos pequeños del programa por separado para ver cuál falla.<br>• <b>Mostrar los valores</b>: haz que el programa diga en pantalla cuánto valen las variables en cada momento.<br>• <b>Hacer una traza</b>: sigue el programa paso a paso con lápiz y papel, como si fueras el ordenador.<br>• <b>Explicarlo en voz alta</b>: al contarle a otra persona (¡o a un patito de goma!) qué hace cada línea, muchas veces ves el fallo tú mismo.<br>• <b>Cambiar una sola cosa cada vez</b> y volver a probar.</p><p>Un consejo: guarda copias del programa cuando funcione, antes de hacer cambios grandes. Así siempre podrás volver a una versión buena.</p>`,
      svg: tiposError,
    },
    {
      html: `<h3>1.13 ¿Para qué sirve aprender a programar?</h3><p>Aprender a programar no es solo para quienes quieren ser informáticos. Programar enseña a <b>resolver problemas</b> paso a paso, a ser <b>preciso</b>, a <b>no rendirse</b> ante los errores y a <b>crear</b> cosas propias: un juego, una animación, una web o un robot.</p><p>Además, la programación está presente en muchísimas profesiones: diseño de videojuegos, desarrollo de apps y webs, robótica industrial y médica, ciencia de datos e inteligencia artificial, ciberseguridad, investigación del clima o de la genética, arte digital y música electrónica. Incluso médicos, periodistas o arquitectos usan pequeños programas en su trabajo.</p><p>Entender cómo funcionan los programas también te convierte en un usuario más <b>crítico</b>: sabrás que detrás de cada aplicación hay decisiones tomadas por personas, por ejemplo qué vídeos te recomienda una red social y por qué.</p>`,
      svg: oficios,
      video: vQue,
    },
    {
      html: `<h3>1.14 Programar con responsabilidad</h3><p>Los programas afectan a la vida de millones de personas, así que programar también implica <b>responsabilidad</b>. Un buen programa no solo funciona: además es <mark>accesible</mark>, es decir, lo pueden usar personas con dificultades de visión, de audición o de movimiento (letra grande, buen contraste, subtítulos, control por voz).</p><p>También debe <b>proteger los datos personales</b> de quien lo usa y no recoger más información de la necesaria. No debe engañar ni enganchar a propósito a los usuarios. Y hay que respetar el trabajo de los demás: si usas código, imágenes o sonidos de otras personas, debes citarlas y respetar su <b>licencia</b>.</p><p>En la comunidad de Scratch, por ejemplo, se puede hacer una «reinvención» (<i>remix</i>) de un proyecto ajeno, pero el autor original aparece siempre reconocido. Muchos programas son <b>software libre</b>: su código se comparte para que cualquiera pueda estudiarlo, mejorarlo y compartirlo.</p>`,
      svg: etica,
    },
  ],
  figura: H.figura(S),
  video: H.video(S),
  ejemplos: [
    { enunciado: "Escribe las instrucciones para que un «robot» compañero se siente en una silla que está 3 pasos delante de él.", pasos: ["Avanza 3 pasos.", "Gira 180 grados (date la vuelta).", "Flexiona las rodillas hasta tocar la silla con el cuerpo.", "Apoya el peso en la silla."], resultado: "Instrucciones precisas y en orden; sin el giro, el robot se sentaría en el aire." },
    { enunciado: "Un programa debe sumar 1 punto al coger una moneda, pero los puntos bajan. ¿Qué tipo de error es y cómo se busca?", pasos: ["El programa funciona y no se bloquea: no es de sintaxis ni de ejecución.", "Hace algo distinto de lo que queríamos: es de lógica.", "Mostramos la variable puntos en pantalla y vemos que baja al tocar la moneda.", "Revisamos el bloque y encontramos «sumar −1» en vez de «sumar 1»."], resultado: "Error de lógica; se corrige cambiando −1 por 1." },
    { enunciado: "Ordena las fases: probar, entender el problema, programar, depurar, diseñar el algoritmo.", pasos: ["Primero se entiende qué hay que hacer.", "Luego se diseña el algoritmo.", "Después se programa.", "Al final se prueba y se depuran los errores, y el ciclo vuelve a empezar."], resultado: "Entender, diseñar, programar, probar y depurar." },
    { enunciado: "Clasifica en entrada, proceso o salida estos elementos de un robot aspirador: sensor de choque, procesador, motores de las ruedas, cámara, altavoz.", pasos: ["Captan información del entorno: sensor de choque y cámara → entrada.", "Ejecuta el programa y decide: procesador → proceso.", "Actúan sobre el mundo: motores y altavoz → salida."], resultado: "Entrada: sensor y cámara. Proceso: procesador. Salida: motores y altavoz." },
    { enunciado: "Escribe en binario el número 6 y explica cómo lo has hecho.", pasos: ["En binario cada posición vale el doble que la anterior: 4, 2, 1.", "6 = 4 + 2 + 0.", "Ponemos 1 en las posiciones que usamos y 0 en las demás: 1 (4), 1 (2), 0 (1)."], resultado: "6 en binario es 110." },
    { enunciado: "Una app de traducción traduce cada frase mientras hablas; otra traduce un documento entero y te da el archivo final. ¿A qué tipo de traductor de programas se parece cada una?", pasos: ["La que traduce frase a frase, en directo, se parece al intérprete.", "La que traduce todo antes y entrega un resultado final se parece al compilador."], resultado: "Primera: intérprete. Segunda: compilador." },
  ],
  errores: [
    "Pensar que el ordenador entiende lo que queremos decir: solo ejecuta lo que está escrito, al pie de la letra.",
    "Creer que programar es solo escribir código: antes hay que entender el problema y diseñar el algoritmo.",
    "Pensar que los bloques no son programación de verdad: usan las mismas ideas que los lenguajes de texto.",
    "Confundir hardware (la parte física) con software (los programas).",
    "Desanimarse con los errores: todos los programas tienen bugs al principio y depurar forma parte del trabajo.",
    "Creer que solo los ordenadores tienen programas: también los electrodomésticos, los coches, los semáforos o los juguetes.",
  ],
  ejercicios: H.nivelar([
    ["Define con tus palabras qué es programar y qué es un programa.", "Programar es escribir instrucciones para que una máquina haga una tarea. Un programa es el conjunto ordenado de esas instrucciones escrito en un lenguaje que la máquina puede ejecutar."],
    ["Escribe cinco aparatos de tu casa que funcionen con un programa.", "Por ejemplo: el móvil, la lavadora, el microondas, la televisión y el router. Todos tienen un procesador que ejecuta instrucciones."],
    ["¿Qué diferencia hay entre hardware y software? Pon dos ejemplos de cada uno.", "El hardware es la parte física (teclado, procesador); el software son los programas (un navegador, un juego). El hardware necesita software para saber qué hacer."],
    ["¿Qué es un bit? ¿Cuántos bits tiene un byte?", "Un bit es la unidad mínima de información: vale 0 o 1. Un byte tiene 8 bits."],
    ["¿Quién es considerada la primera programadora de la historia y por qué?", "Ada Lovelace, porque en 1843 escribió un algoritmo para la máquina analítica de Babbage, pensado para que lo ejecutara una máquina."],
    ["Nombra dos lenguajes de bloques y dos de texto.", "Bloques: Scratch y MakeCode (o mBlock). Texto: Python y JavaScript (o C++)."],
    ["¿Qué es un bug? ¿Y depurar?", "Un bug es un error en un programa. Depurar es buscar y corregir esos errores."],
    ["Indica si es entrada o salida: micrófono, pantalla, teclado, impresora, sensor de luz.", "Entrada: micrófono, teclado y sensor de luz (llevan datos al sistema). Salida: pantalla e impresora (muestran resultados)."],
    ["¿Por qué un ordenador no puede «adivinar» lo que queremos?", "Porque no tiene sentido común ni entiende el contexto: solo ejecuta las instrucciones que tiene, tal como están escritas y en orden."],
    ["Escribe las cuatro piezas básicas de casi todos los programas.", "Secuencia (pasos en orden), repetición (bucles), decisión (condicionales) y datos (variables)."],
    ["Escribe en binario los números 4, 7 y 8.", "Con posiciones 8, 4, 2, 1: el 4 es 100, el 7 es 111 (4 + 2 + 1) y el 8 es 1000."],
    ["¿Qué número decimal es el binario 1011? Explica el cálculo.", "Posiciones 8, 4, 2, 1: 1·8 + 0·4 + 1·2 + 1·1 = 8 + 2 + 1 = 11."],
    ["Escribe instrucciones precisas para lavarse los dientes (al menos 7 pasos). ¿Qué pasaría si cambias el orden de dos de ellas?", "Coger el cepillo, abrir el grifo, mojarlo, cerrar el grifo, poner pasta, cepillar dos minutos, enjuagar la boca, aclarar el cepillo y guardarlo. Si pones «cepillar» antes que «poner pasta», el cepillado no sirve: el orden importa."],
    ["Explica la diferencia entre compilador e intérprete con un ejemplo de la vida diaria.", "El compilador traduce todo el programa antes de ejecutarlo, como quien traduce un libro entero antes de publicarlo. El intérprete traduce y ejecuta instrucción a instrucción, como un intérprete en una conversación en directo."],
    ["Un programa de una calculadora muestra 5 al calcular 2 + 2. ¿Qué tipo de error es? ¿Y si el programa no arranca porque falta un paréntesis?", "El primero es de lógica (funciona pero da un resultado incorrecto). El segundo es de sintaxis (el código está mal escrito y el traductor no lo entiende)."],
    ["Describe el esquema entrada-proceso-salida de un cajero automático.", "Entrada: tarjeta, teclado con el PIN y la cantidad. Proceso: el procesador comprueba el PIN y el saldo. Salida: billetes, recibo y mensajes en la pantalla. Almacenamiento: los datos de la operación."],
    ["Pon un ejemplo de instrucción ambigua y reescríbela para que sea precisa.", "«Echa un poco de sal» es ambigua. Precisa: «echa media cucharadita de sal en la olla»."],
    ["Explica por qué se dice que «las ideas de programación son las mismas en bloques y en texto».", "Porque secuencias, bucles, condicionales y variables existen en todos los lenguajes; solo cambia cómo se escriben. Un «repetir 3» de Scratch equivale a un for de Python."],
    ["Ordena y explica el ciclo de creación de un programa. ¿Por qué se llama ciclo?", "Entender, diseñar, programar, probar y depurar. Se llama ciclo porque después se vuelve a empezar para mejorar el programa o añadir funciones (desarrollo iterativo)."],
    ["Busca tres situaciones en las que una persona usa el sentido común y un robot necesitaría instrucciones extra.", "Por ejemplo: saber que un vaso está lleno sin que nadie lo diga, esquivar a una persona en el pasillo o saber que hay que abrir una puerta antes de pasar. El robot necesita sensores y reglas para cada caso."],
    ["Describe dos estrategias para encontrar un bug.", "Por ejemplo: mostrar en pantalla el valor de las variables para ver cuándo cambian mal, y hacer una traza paso a paso en papel. También probar el programa por partes."],
    ["¿Qué significa que un programa sea accesible? Da dos ejemplos.", "Que lo puedan usar personas con distintas capacidades. Ejemplos: subtítulos en los vídeos para personas sordas y buen contraste o lectura en voz alta para personas con baja visión."],
    ["Escribe un algoritmo de 6 pasos para que un robot dibuje un cuadrado de 10 cm en un papel.", "Bajar el rotulador; avanzar 10 cm; girar 90° a la derecha; repetir avanzar y girar hasta completar 4 lados; subir el rotulador. Con un bucle: repetir 4 veces [avanzar 10, girar 90]."],
    ["Calcula cuántos valores distintos se pueden representar con 1, 2, 3 y 8 bits. ¿Qué regla observas?", "1 bit: 2; 2 bits: 4; 3 bits: 8; 8 bits: 256. Cada bit más duplica el número de valores: con n bits hay 2ⁿ valores."],
    ["Un programa de un semáforo inteligente cuenta coches con un sensor y alarga el verde si hay muchos. Identifica entrada, proceso, salida y una decisión del programa.", "Entrada: el sensor que cuenta coches. Proceso: el controlador compara el número de coches con un límite. Salida: las luces. Decisión: si hay más coches que el límite, alargar el verde; si no, tiempo normal."],
    ["Escribe en pseudocódigo un programa que pida la edad y diga «puedes entrar» si es mayor o igual que 12 o «lo siento» si no.", "preguntar edad; si edad ≥ 12 entonces decir «puedes entrar»; si no, decir «lo siento». Usa entrada, decisión y salida."],
    ["La alarma 1202 del Apolo 11 apareció porque el ordenador recibía demasiadas tareas. Explica por qué el aterrizaje pudo seguir.", "Porque el programa de Margaret Hamilton ordenaba las tareas por prioridad: si había demasiadas, descartaba las menos importantes y mantenía las vitales, como controlar los motores. Era un programa preparado para los errores."],
    ["Debate: ¿debería una app pedir acceso a tu ubicación si es un juego de puzles? Razona tu respuesta desde la programación responsable.", "No: un buen programa solo recoge los datos que necesita. Un juego de puzles no necesita la ubicación; pedirla sin motivo pone en riesgo la privacidad. Se puede rechazar el permiso y el juego debería funcionar igual."],
    ["Diseña tres casos de prueba para un programa que dice si un número es par o impar. ¿Por qué conviene probar casos «raros»?", "Probar 4 (par), 7 (impar) y 0 (par; caso límite). También un número negativo, como −3. Los casos raros o límite son donde más se esconden los bugs."],
    ["Explica qué ventajas e inconvenientes tiene un lenguaje de bloques frente a uno de texto.", "Ventajas de los bloques: no hay errores de sintaxis, se ve la estructura y es fácil empezar. Inconvenientes: programas grandes ocupan mucho espacio, son más lentos de montar y no se usan tanto en el mundo profesional, donde predominan los lenguajes de texto, más potentes y flexibles."],
  ]),
  quiz: H.test([
    ["Programar es…", ["escribir instrucciones para que una máquina haga una tarea", "arreglar ordenadores", "usar aplicaciones del móvil", "diseñar el hardware"], "Un programa es un conjunto ordenado de instrucciones."],
    ["Un ordenador ejecuta las instrucciones…", ["tal como están escritas y en orden", "interpretando lo que queremos", "solo si son cortas", "en el orden que prefiera"], "No adivina ni usa el sentido común."],
    ["El software es…", ["el conjunto de programas", "la pantalla y el teclado", "el procesador", "la carcasa del ordenador"], "El hardware es la parte física."],
    ["Un sensor de un robot es un elemento de…", ["entrada", "salida", "proceso", "almacenamiento"], "Lleva información del entorno al sistema."],
    ["Un bit puede valer…", ["0 o 1", "de 0 a 9", "de 0 a 255", "cualquier letra"], "Dos estados: hay corriente o no."],
    ["Un byte tiene…", ["8 bits", "2 bits", "10 bits", "1.000 bits"], "8 bits forman un byte."],
    ["El número 5 en binario es…", ["101", "110", "11", "100"], "4 + 0 + 1."],
    ["Se considera la primera programadora a…", ["Ada Lovelace", "Grace Hopper", "Marie Curie", "Margaret Hamilton"], "Escribió un algoritmo en 1843."],
    ["Scratch es un lenguaje…", ["de bloques", "máquina", "de texto profesional", "de compilación"], "Bloques de colores que encajan."],
    ["El texto de un programa escrito por una persona se llama…", ["código fuente", "código máquina", "hardware", "byte"], "Luego se traduce a código máquina."],
    ["El traductor que traduce todo el programa antes de ejecutarlo es el…", ["compilador", "intérprete", "procesador", "editor"], "Crea un ejecutable."],
    ["El traductor que va traduciendo instrucción a instrucción es el…", ["intérprete", "compilador", "sistema binario", "sensor"], "Como un intérprete en directo."],
    ["Un error que hace que el programa funcione pero haga otra cosa es de…", ["lógica", "sintaxis", "hardware", "compilación"], "Son los más difíciles de encontrar."],
    ["Olvidar un paréntesis en Python es un error de…", ["sintaxis", "lógica", "ejecución", "diseño"], "El código está mal escrito."],
    ["Buscar y corregir errores se llama…", ["depurar", "compilar", "ejecutar", "remezclar"], "En inglés, debugging."],
    ["La fase que va justo antes de programar es…", ["diseñar el algoritmo", "depurar", "probar", "publicar"], "Primero se piensa la solución."],
    ["Repetir un grupo de instrucciones es un…", ["bucle", "condicional", "evento", "bit"], "También se llama repetición."],
    ["«Si llueve, coge el paraguas» es un ejemplo de…", ["decisión o condicional", "bucle", "variable", "secuencia"], "Se elige según una condición."],
    ["Un programa accesible es el que…", ["pueden usar personas con distintas capacidades", "es gratis", "no tiene errores", "solo funciona en móviles"], "Subtítulos, contraste, voz…"],
    ["En Scratch, una reinvención (remix)…", ["reconoce siempre al autor original", "borra el proyecto original", "está prohibida", "no se puede compartir"], "Respeto a la autoría."],
  ], 1),
  examen: H.test([
    ["El binario 110 equivale al decimal…", ["6", "3", "110", "5"], "4 + 2 + 0."],
    ["Con 3 bits se pueden representar…", ["8 valores", "3 valores", "6 valores", "9 valores"], "2³ = 8."],
    ["Una pantalla es un dispositivo de…", ["salida", "entrada", "proceso", "traducción"], "Muestra resultados."],
    ["Un programa que divide entre cero y se detiene tiene un error de…", ["ejecución", "sintaxis", "diseño", "hardware"], "Falla al funcionar."],
    ["Las ideas de programación en bloques y en texto…", ["son las mismas", "no tienen nada que ver", "solo sirven en Scratch", "solo sirven en Python"], "Cambia la forma de escribirlas."],
    ["El ciclo de creación de un programa termina con…", ["probar y depurar, y vuelve a empezar", "publicar y no tocar más", "comprar un ordenador", "compilar"], "Desarrollo iterativo."],
    ["Lo más importante antes de programar es…", ["entender el problema y diseñar el algoritmo", "elegir colores", "teclear rápido", "tener el mejor ordenador"], "Pensamiento computacional."],
    ["El procesador de un ordenador se encarga de…", ["ejecutar el programa y hacer cálculos", "mostrar imágenes", "guardar los datos para siempre", "captar sonidos"], "Es la fase de proceso."],
  ], 2),
  feynman: ["Qué es programar y por qué el ordenador necesita instrucciones precisas", "Cómo funciona un sistema informático: entrada, proceso y salida", "Por qué el ordenador usa ceros y unos y para qué sirven los traductores", "Qué tipos de errores hay y cómo se depuran", "Por qué programar es útil aunque no quieras ser informático"],
  mapa: H.mapa("PROGRAMAR", "var(--eso)", [
    ["Programa", "instrucciones precisas y en orden", "var(--pen)"],
    ["Máquina", "hardware · software · binario", "var(--red)"],
    ["Lenguajes", "bloques · texto · traductores", "var(--leaf)"],
    ["Proceso", "diseñar · programar · depurar", "#b8860b"],
  ], 260),
  tarjetas: [
    ["Programar", "Escribir instrucciones para que una máquina haga una tarea."],
    ["Programa", "Conjunto ordenado de instrucciones en un lenguaje que la máquina entiende."],
    ["Hardware", "Parte física de un sistema informático."],
    ["Software", "Los programas que dicen al hardware qué hacer."],
    ["Entrada · proceso · salida", "Datos que llegan, cálculo del procesador y resultados."],
    ["Bit", "Unidad mínima de información: 0 o 1. 8 bits = 1 byte."],
    ["Lenguaje máquina", "Instrucciones en ceros y unos que entiende el procesador."],
    ["Código fuente", "Programa escrito por una persona en un lenguaje de programación."],
    ["Compilador", "Traduce todo el programa antes de ejecutarlo."],
    ["Intérprete", "Traduce y ejecuta instrucción a instrucción."],
    ["Bug", "Error de un programa: de sintaxis, de ejecución o de lógica."],
    ["Depurar", "Buscar y corregir los errores de un programa."],
  ],
  glosario: [
    ["Programar", "Escribir instrucciones ordenadas para que una máquina realice una tarea."],
    ["Programa", "Conjunto de instrucciones escritas en un lenguaje de programación que una máquina puede ejecutar."],
    ["Algoritmo", "Secuencia ordenada y finita de pasos que resuelve un problema."],
    ["Hardware", "Componentes físicos de un sistema informático: procesador, memoria, pantalla, sensores…"],
    ["Software", "Programas y datos que hacen funcionar el hardware."],
    ["Procesador (CPU)", "Componente que ejecuta las instrucciones de los programas y hace los cálculos."],
    ["Bit", "Dígito binario, la unidad mínima de información; vale 0 o 1."],
    ["Sistema binario", "Sistema de numeración que solo usa los dígitos 0 y 1."],
    ["Lenguaje máquina", "Instrucciones en código binario que el procesador entiende directamente."],
    ["Lenguaje de programación", "Idioma con palabras y reglas estrictas para escribir programas."],
    ["Sintaxis", "Reglas de escritura de un lenguaje de programación."],
    ["Código fuente", "Texto o bloques de un programa tal como lo escribe el programador."],
    ["Compilador", "Programa que traduce el código fuente entero a lenguaje máquina antes de ejecutarlo."],
    ["Intérprete", "Programa que traduce y ejecuta el código instrucción a instrucción."],
    ["Bug", "Error en un programa que hace que falle o funcione de forma distinta a la deseada."],
    ["Depurar", "Buscar, entender y corregir los errores de un programa."],
  ],
  situacion: {
    titulo: "El robot humano de la cafetería",
    reto: "La cafetería del instituto quiere un robot que prepare tostadas. Antes de construirlo, vuestro equipo debe escribir un programa tan preciso que un compañero que haga de «robot» pueda seguirlo al pie de la letra sin equivocarse.",
    pasos: [
      "Dividid la tarea en partes: coger el pan, tostarlo, untarlo y servirlo.",
      "Escribid las instrucciones de cada parte, en orden y sin ambigüedades, usando repeticiones y decisiones cuando haga falta («si el pan está quemado…»).",
      "Probad el programa con un compañero que haga de robot (con materiales simulados) y anotad cada fallo.",
      "Clasificad los fallos encontrados (instrucción ambigua, paso que falta, orden incorrecto) y depurad el programa.",
      "Presentad la versión final y explicad qué cambios hicisteis en cada vuelta del ciclo.",
    ],
    producto: "Programa escrito de la tostada (versión 1 y versión final) con un registro de errores y correcciones.",
    evaluacion: [
      "Las instrucciones son precisas, ordenadas y completas.",
      "Se usan repeticiones y decisiones de forma adecuada.",
      "Se registran y clasifican los errores y se corrigen.",
      "La presentación explica con claridad el ciclo de creación y depuración.",
    ],
  },
  familias: ["Jugad al «robot sándwich»: uno da instrucciones y el otro las sigue al pie de la letra.", "Buscad juntos en casa aparatos que tengan un programa (lavadora, horno, router) y comentad qué entradas y salidas tienen.", "Escribid vuestras edades en binario.", "Repasad las tarjetas del tema dos minutos al día."],
  profesores: {
    saberes: H.saberes("Concepto de programa y algoritmo; sistemas informáticos (hardware, software, entrada, proceso y salida); representación binaria de la información; lenguajes de programación de bloques y de texto, traductores; estructuras básicas (secuencia, repetición, decisión y datos); ciclo de desarrollo, errores y depuración; uso ético y responsable de la tecnología", "matèries optatives de programació i robòtica i àmbit digital: pensament computacional, llenguatges de programació, depuració i ús crític i responsable de la tecnologia."),
    ideas: [
      "Actividad desenchufada del «robot sándwich» o de la tostada para introducir la precisión de las instrucciones.",
      "Tarjetas binarias (1, 2, 4, 8, 16) para representar números y letras.",
      "Comparar el mismo programa en Scratch y en Python proyectado en la pizarra.",
      "Caza de bugs: proyectos de Scratch con errores preparados que el alumnado debe depurar.",
      "Investigación por parejas sobre una pionera de la programación (Ada Lovelace, Grace Hopper, Margaret Hamilton).",
    ],
  },
  fuentes: [H.RD, H.DEC, H.SCRATCH, H.wiki("Programación", "Programaci%C3%B3n"), H.wiki("Margaret Hamilton", "Margaret_Hamilton_(cient%C3%ADfica)"), H.wiki("Sistema binario", "Sistema_binario")],
  revisado: H.REV,
};
