// Programación y robótica 3º ESO: variables, bucles y condicionales. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, caja, tabla, filas, mezcla } = require("./_eso3");

const M = "Programación y robótica";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Variables, bucles y condicionales",
  minutos: 50,
  objetivos: ["Entender qué es una variable y usarla para guardar y modificar datos", "Distinguir tipos de datos: números, texto y booleanos", "Usar bucles con contador y con condición", "Tomar decisiones con condicionales y operadores lógicos"],
  claves: ["variable", "tipo de dato", "bucle", "contador", "condicional", "operador lógico"],
  pregunta: {
    texto: "¿Cómo sabe un videojuego cuántos puntos llevas, cuántas vidas te quedan y cuándo has ganado?",
    respuesta: "Guarda esos datos en <mark>variables</mark>, como <code>puntos</code> o <code>vidas</code>, que cambian durante la partida. Un <b>bucle</b> comprueba lo que pasa decenas de veces por segundo, y los <b>condicionales</b> deciden: «si vidas = 0, fin del juego».",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una variable?</h3><p>Una <b>variable</b> es un <mark>espacio con nombre en la memoria</mark> del ordenador donde se guarda un dato que puede cambiar. Imagina una caja con una etiqueta: la etiqueta es el nombre (<code>puntos</code>) y dentro está el valor (<code>120</code>).</p><p>Con una variable se pueden hacer tres cosas:</p><ul><li><b>Crearla</b> y darle un valor inicial: <code>puntos ← 0</code>.</li><li><b>Leerla</b>: usar su valor en un cálculo o mostrarlo.</li><li><b>Modificarla</b>: <code>puntos ← puntos + 10</code> (toma el valor actual, le suma 10 y lo guarda).</li></ul><p>Elige nombres <b>claros</b>: <code>vidas</code> es mejor que <code>v</code> o <code>x2</code>.</p>`,
      svg: svg("Variables como cajas con etiqueta: puntos vale 120, vidas vale 3, nombre vale Ana", `${[["puntos", "120", "var(--pen)"], ["vidas", "3", "var(--red)"], ["nombre", "\"Ana\"", "var(--leaf)"]].map(([n, v, c], i) => `<path d="M${20 + i * 80} 70 L ${36 + i * 80} 54 H ${92 + i * 80} L ${76 + i * 80} 70 Z" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2"/><rect x="${20 + i * 80}" y="70" width="56" height="56" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2.5"/><path d="M${76 + i * 80} 70 L ${92 + i * 80} 54 V 110 L ${76 + i * 80} 126 Z" fill="${c}" fill-opacity=".22" stroke="${c}" stroke-width="2"/>${t(48 + i * 80, 104, v, { c, s: 14 })}${t(52 + i * 80, 146, n, { s: 11 })}`).join("")}${t(130, 30, "nombre (etiqueta) + valor (contenido)", { c: "var(--muted)", s: 11 })}`),
      video: { id: "wS1QETPfgGE", titulo: "Cómo usar variables en Scratch 3.0", canal: "Surfing Scratcher", vistas: 150423, megusta: 0 },
    },
    {
      html: `<h3>Tipos de datos</h3><p>No todos los datos son iguales. Los lenguajes distinguen <b>tipos</b>:</p>${tabla(["Tipo", "Ejemplos", "Operaciones"], [["<b>Número entero</b>", "0, 15, −3", "+, −, ·, /, comparar"], ["<b>Número decimal</b>", "3,14 · 9,8", "igual, con decimales"], ["<b>Texto</b> (cadena)", "\"Hola\", \"Ana\"", "unir, medir longitud"], ["<b>Booleano</b>", "verdadero / falso", "y, o, no"]])}<p>Cuidado: <code>"5" + "5"</code> como texto da <code>"55"</code> (se unen), pero <code>5 + 5</code> como números da <code>10</code>. Una <b>lista</b> (o <i>array</i>) guarda muchos valores con un solo nombre: <code>notas = [7, 5, 9]</code>.</p>`,
    },
    {
      html: `<h3>Contadores y acumuladores</h3><p>Dos usos muy frecuentes de las variables:</p><ul><li><b>Contador</b>: aumenta de uno en uno para contar sucesos. <code>intentos ← intentos + 1</code>. Sirve para contar vueltas de un bucle, saltos o enemigos eliminados.</li><li><b>Acumulador</b>: va sumando cantidades variables. <code>total ← total + precio</code>. Sirve para calcular el total de una compra o la suma de las notas.</li></ul><p>Ambos deben <mark>inicializarse</mark> (normalmente a 0) antes de empezar. Si no, arrastran el valor de la partida anterior: un error típico en Scratch es olvidar «dar a puntos el valor 0» al pulsar la bandera verde.</p>`,
    },
    {
      html: `<h3>Bucles con contador</h3><p>El bucle <b>repetir N veces</b> (o <b>para</b>, <code>for</code> en inglés) se usa cuando sabemos cuántas repeticiones necesitamos. Suele llevar una variable contadora que cambia en cada vuelta:</p><pre>para i desde 1 hasta 5
    mostrar i · i
fin para</pre><p>Muestra 1, 4, 9, 16 y 25: los cuadrados del 1 al 5. Cada vuelta del bucle se llama <b>iteración</b>.</p><p>Los bucles evitan copiar el mismo código muchas veces. Para dibujar un polígono de 12 lados no escribimos 24 bloques, sino «repetir 12: mover 30, girar 30°».</p>`,
    },
    {
      html: `<h3>Bucles con condición</h3><p>Cuando no sabemos cuántas veces hay que repetir, usamos un bucle con <b>condición</b>:</p><ul><li><b>Mientras</b> (<code>while</code>): repite <mark>mientras</mark> la condición sea verdadera. Si es falsa desde el principio, no se ejecuta nunca.</li><li><b>Repetir hasta que</b> (en Scratch): repite <mark>hasta que</mark> la condición se cumpla.</li><li><b>Por siempre</b>: repite sin fin; típico de los juegos, que revisan continuamente lo que pasa.</li></ul><pre>vidas ← 3
repetir hasta que vidas = 0
    jugar ronda
    si pierdo entonces vidas ← vidas − 1
mostrar "Game over"</pre>`,
      svg: svg("Comparación de bucles: repetir N veces conoce el número; mientras repite si la condición es verdadera; por siempre no termina", `${caja(14, 20, 232, 40, "repetir 5 veces → 5 vueltas exactas", "var(--pen)", { s: 11 })}${caja(14, 70, 232, 40, "mientras vidas > 0 → hasta que cambie", "var(--leaf)", { s: 11 })}${caja(14, 120, 232, 40, "por siempre → no termina (juegos)", "var(--red)", { s: 11 })}`),
    },
    {
      html: `<h3>Condicionales</h3><p>Un <b>condicional</b> permite al programa <mark>tomar decisiones</mark>. Evalúa una condición (que es verdadera o falsa) y ejecuta un bloque u otro:</p><ul><li><b>si… entonces</b> (<code>if</code>): solo actúa si se cumple.</li><li><b>si… entonces… si no</b> (<code>if… else</code>): dos caminos.</li><li><b>Condicionales anidados</b> o encadenados (<code>elif</code>): varias opciones.</li></ul><pre>si nota ≥ 9 entonces mostrar "sobresaliente"
si no, si nota ≥ 7 entonces mostrar "notable"
si no, si nota ≥ 5 entonces mostrar "aprobado"
si no mostrar "suspenso"</pre><p>El orden importa: se comprueba de arriba abajo y se ejecuta solo la primera opción verdadera.</p>`,
    },
    {
      html: `<h3>Operadores de comparación y lógicos</h3><p>Las condiciones se construyen con <b>operadores</b>:</p>${tabla(["Operador", "Significado", "Ejemplo verdadero"], [["= · ≠", "igual · distinto", "3 = 3 · 4 ≠ 5"], ["&lt; · &gt;", "menor · mayor", "2 &lt; 7"], ["≤ · ≥", "menor o igual · mayor o igual", "5 ≥ 5"], ["<b>y</b> (and)", "verdadero si se cumplen las dos", "edad ≥ 12 y edad ≤ 16"], ["<b>o</b> (or)", "verdadero si se cumple al menos una", "día = sábado o día = domingo"], ["<b>no</b> (not)", "invierte el valor", "no (llueve)"]])}<p>Los resultados de estas operaciones son <b>booleanos</b>: verdadero o falso, en honor al matemático George Boole.</p>`,
      video: { id: "RaWfeVgkWbE", titulo: "Qué son los condicionales en programación", canal: "Retro", vistas: 92672, megusta: 0 },
    },
    {
      html: `<h3>Todo junto: un ejemplo completo</h3><p>Un juego de adivinar un número combina variables, bucle y condicionales:</p><pre>secreto ← número al azar entre 1 y 100
intentos ← 0
repetir
    preguntar "¿Qué número es?"
    intentos ← intentos + 1
    si respuesta &lt; secreto entonces decir "Mayor"
    si respuesta &gt; secreto entonces decir "Menor"
hasta que respuesta = secreto
decir "¡Acertaste en " + intentos + " intentos!"</pre><p>Identifica cada pieza: dos <b>variables</b> (<code>secreto</code> e <code>intentos</code>), un <b>contador</b>, un <b>bucle</b> con condición y dos <b>condicionales</b>.</p>`,
    },
    {
      html: `<h3>Del bloque al texto</h3><p>Los mismos conceptos se escriben de forma muy parecida en los lenguajes de texto. En <b>Python</b>, uno de los más usados para aprender:</p><pre>puntos = 0
for i in range(5):
    puntos = puntos + 10
if puntos &gt;= 50:
    print("¡Nivel superado!")</pre><p>Fíjate en que Python usa la <b>sangría</b> (los espacios al principio de la línea) para saber qué instrucciones están dentro del bucle o del condicional, igual que los bloques de Scratch se encajan unos dentro de otros. Aprender la lógica primero hace que el paso a un lenguaje escrito sea mucho más sencillo.</p>`,
    },
  ],
  figura: {
    titulo: "Las piezas de cualquier programa",
    svg: filas("Variable: caja con nombre y valor; tipos: número, texto, booleano; contador y acumulador; bucles para, mientras y por siempre; condicionales y operadores lógicos", [["Variable", "nombre + valor que cambia · inicializar", "var(--pen)"], ["Tipos", "número · texto · booleano · lista", "var(--inf)"], ["Contador", "c ← c + 1 · acumulador: t ← t + x", "var(--leaf)"], ["Bucles", "repetir N · mientras · hasta que · por siempre", "var(--red)"], ["Condicionales", "si · si no · y / o / no", "var(--ink)"]], 210),
  },
  video: { id: "Tpf39tVhxyg", titulo: "Cómo crear contadores en Scratch", canal: "Laita Digital", vistas: 46842, megusta: 0, busqueda: "scratch variables puntuación" },
  quiz: mezcla([
    { q: "Una variable es…", o: ["un espacio con nombre que guarda un dato que puede cambiar", "un bloque de movimiento", "un error"], a: 0, e: "Caja con etiqueta." },
    { q: "Tras «puntos ← 5; puntos ← puntos + 10», puntos vale…", o: ["15", "10", "5"], a: 0, e: "5 + 10." },
    { q: "Un dato que solo puede ser verdadero o falso es…", o: ["booleano", "texto", "decimal"], a: 0, e: "Por George Boole." },
    { q: "«5» + «5» como texto da…", o: ["«55»", "10", "error"], a: 0, e: "Se concatenan." },
    { q: "Una variable que aumenta de 1 en 1 para contar es un…", o: ["contador", "acumulador", "booleano"], a: 0, e: "c ← c + 1." },
    { q: "Si sabes cuántas veces repetir, usas…", o: ["repetir N veces (para)", "mientras", "si… entonces"], a: 0, e: "Bucle con contador." },
    { q: "Un bucle «mientras» con condición falsa desde el principio…", o: ["no se ejecuta nunca", "se ejecuta una vez", "es infinito"], a: 0, e: "Comprueba antes de entrar." },
    { q: "«edad ≥ 12 y edad ≤ 16» es verdadero si edad = …", o: ["14", "10", "18"], a: 0, e: "Cumple ambas." },
    { q: "«día = sábado o día = domingo» es verdadero el…", o: ["domingo", "lunes", "miércoles"], a: 0, e: "Basta una." },
    { q: "Cada vuelta de un bucle se llama…", o: ["iteración", "variable", "condición"], a: 0, e: "Iterar = repetir." },
  ]),
  examen: mezcla([
    { q: "¿Qué muestra: t ← 0; para i de 1 a 4: t ← t + i; mostrar t?", o: ["10", "4", "16"], a: 0, e: "Acumulador: 1 + 2 + 3 + 4." },
    { q: "Con nota = 8, la cadena «si ≥ 9 sobresaliente; si no, si ≥ 7 notable…» muestra…", o: ["notable", "sobresaliente", "aprobado"], a: 0, e: "Primera condición verdadera." },
    { q: "no (3 > 5) vale…", o: ["verdadero", "falso", "3"], a: 0, e: "3 > 5 es falso; no lo invierte." },
  ]),
  feynman: ["Qué es una variable y cómo se modifica", "Diferencia entre contador y acumulador", "Cuándo usar repetir N veces y cuándo mientras", "Cómo funcionan los operadores y, o, no"],
  mapa: mapa("PROGRAMA", "var(--eso)", [
    ["Variables", "nombre · valor", "var(--pen)"],
    ["Tipos", "número · texto · bool", "var(--inf)"],
    ["Bucles", "para · mientras", "var(--red)"],
    ["Condicionales", "si · y · o · no", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Variable", "Espacio con nombre que guarda un dato que puede cambiar."],
    ["Inicializar", "Dar a una variable su valor de partida."],
    ["Booleano", "Dato que solo vale verdadero o falso."],
    ["Contador", "Variable que suma 1 cada vez: c ← c + 1."],
    ["Acumulador", "Variable que va sumando cantidades: t ← t + x."],
    ["Iteración", "Cada vuelta de un bucle."],
    ["Mientras", "Bucle que repite mientras la condición sea verdadera."],
    ["Operador y", "Verdadero solo si las dos condiciones lo son."],
  ],
  familias: ["Jugad a adivinar un número diciendo «mayor» o «menor» y contad los intentos.", "Buscad variables en la vida diaria: el marcador de un partido, el saldo de una tarjeta.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Variables y tipos de datos; contadores y acumuladores; estructuras repetitivas con contador y con condición; condicionales simples, dobles y encadenados; operadores relacionales y lógicos; transición de bloques a Python (RD 217/2022, programación y competencia digital).",
    ideas: ["Juego de adivinar el número en Scratch con contador de intentos.", "Trazas en papel por parejas antes de programar.", "Traducir un programa de bloques a Python en paralelo."],
  },
  fuentes: [RD, { t: "Python.org: documentación oficial en español", url: "https://docs.python.org/es/3/tutorial/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Programas resueltos",
  ejemplos: [
    { enunciado: "Calcula la media de 4 notas leídas por teclado.",
      pasos: ["suma ← 0.", "repetir 4 veces: leer nota; suma ← suma + nota.", "media ← suma / 4.", "mostrar media."],
      resultado: "Con 6, 8, 7 y 9: suma 30, media 7,5." },
    { enunciado: "Un objeto pierde una vida al tocar un enemigo y el juego termina sin vidas. Escribe la lógica.",
      pasos: ["al empezar: vidas ← 3.", "por siempre: si ¿tocando Enemigo? entonces vidas ← vidas − 1; esperar 1 s.", "si vidas = 0 entonces enviar «fin»."],
      resultado: "La espera evita perder varias vidas en el mismo choque." },
    { enunciado: "Decide si una persona puede entrar a una actividad para jóvenes de 12 a 16 años con autorización.",
      pasos: ["leer edad y autorización (sí/no).", "si edad ≥ 12 y edad ≤ 16 y autorización = sí entonces mostrar «puede entrar».", "si no mostrar «no puede entrar»."],
      resultado: "Tres condiciones unidas con «y»." },
  ],
  errores: [
    "No inicializar el contador o el acumulador.",
    "Escribir «puntos + 10» sin guardar el resultado en la variable.",
    "Confundir texto y número: «5» + «5» = «55».",
    "Olvidar modificar la variable de la condición: bucle infinito.",
    "Ordenar mal los condicionales encadenados (comprobar ≥ 5 antes que ≥ 9).",
    "Usar «o» cuando hacen falta las dos condiciones («y»).",
  ],
  ejercicios: [
    { q: "¿Qué valor final tiene x? x ← 4; x ← x · 3; x ← x − 2.", sol: "4 · 3 = 12; 12 − 2 = 10." },
    { q: "Clasifica por tipo: 17, «hola», verdadero, 2,5, «17».", sol: "Entero, texto, booleano, decimal, texto." },
    { q: "Escribe un bucle que muestre los números pares del 2 al 20.", sol: "para i desde 1 hasta 10: mostrar 2 · i (o para i de 2 a 20 de 2 en 2)." },
    { q: "¿Cuántas veces se ejecuta: c ← 10; mientras c > 0: c ← c − 2?", sol: "5 veces (10, 8, 6, 4, 2)." },
    { q: "Escribe un acumulador que sume los precios de 5 productos.", sol: "total ← 0; repetir 5 veces: leer precio; total ← total + precio; mostrar total." },
    { q: "Evalúa: (7 > 3) y (2 = 5).", sol: "Verdadero y falso → falso." },
    { q: "Evalúa: (7 > 3) o (2 = 5).", sol: "Verdadero o falso → verdadero." },
    { q: "Escribe un condicional que clasifique la temperatura: < 15 «frío», 15-25 «agradable», > 25 «calor».", sol: "si t < 15 frío; si no, si t ≤ 25 agradable; si no calor." },
    { q: "Corrige: puntos ← 0; repetir 3: puntos + 5; mostrar puntos (muestra 0).", sol: "Debe ser puntos ← puntos + 5; así muestra 15." },
    { q: "Programa en Scratch un cronómetro de cuenta atrás de 10 segundos que diga «¡Tiempo!» al terminar.", sol: "tiempo ← 10; repetir hasta que tiempo = 0: esperar 1 s; tiempo ← tiempo − 1; decir «¡Tiempo!»." },
  ],
};

require("./_eso3L7").libro(module.exports, {
  lectura: ["El marcador que se volvió loco", `<p>Marc ha programado un juego en el que una nave dispara a meteoritos. Cada meteorito destruido debería sumar 10 puntos, pero algo falla: a veces el marcador sube de 10 en 10, otras se queda quieto y, al empezar una partida nueva, conserva los puntos de la anterior. Su compañera Ainhoa se sienta a su lado y le hace tres preguntas: «¿Dónde le das a los puntos su valor inicial? ¿Dónde los sumas? ¿Qué pasa si dos disparos tocan el mismo meteorito a la vez?».</p><p>En diez minutos lo resuelven. No ponían los puntos a cero al pulsar la bandera verde; la suma estaba fuera del bucle que detecta los choques; y faltaba una condición para que cada meteorito solo contara una vez. Tres errores, y los tres tenían que ver con las tres ideas de este tema: las <b>variables</b>, que guardan los datos; los <b>bucles</b>, que repiten acciones; y los <b>condicionales</b>, que deciden qué hacer en cada momento.</p><p>Estas tres piezas están en todos los programas del mundo, desde un juego sencillo hasta el sistema de un banco. En este tema aprenderás a usarlas con soltura: tipos de datos, listas, contadores y acumuladores, bucles simples y anidados, condiciones compuestas, números aleatorios y buenas prácticas para que tus programas sean claros.</p>`],
  mas: [
    ["<h3>Contadores y acumuladores</h3>", `<p>Existen otros usos típicos. Un <b>interruptor</b> o bandera es una variable booleana que indica si algo ha ocurrido: encontrado ← falso antes de buscar y encontrado ← verdadero cuando aparece. Una variable de <b>máximo</b> o de <b>récord</b> guarda el mayor valor visto: si puntos > récord, entonces récord ← puntos. Todas necesitan un valor inicial adecuado: 0 para contadores y acumuladores, falso para las banderas y un valor muy pequeño (o el primer dato) para el máximo.</p>`],
    ["<h3>Bucles con contador</h3>", `<p>El contador no tiene por qué avanzar de uno en uno: «para i desde 0 hasta 100 de 10 en 10» recorre 0, 10, 20… 100, y «para i desde 10 hasta 1 con paso −1» cuenta hacia atrás, útil para una cuenta atrás. El número de vueltas de «para i desde a hasta b» (de uno en uno) es b − a + 1: desde 3 hasta 8 son 6 vueltas. La variable contadora se puede usar dentro del bucle, por ejemplo para mostrar la tabla de multiplicar: mostrar 7 · i.</p>`],
    ["<h3>Bucles con condición</h3>", `<p>Para no crear un <b>bucle infinito</b> sin querer, dentro del bucle debe haber siempre alguna instrucción que pueda hacer que la condición cambie: sumar al contador, leer un dato nuevo o mover el objeto. Si el programa se queda congelado, lo primero es revisar los bucles «mientras» y «repetir hasta que» y comprobar qué variable debería cambiar en cada vuelta.</p>`],
    ["<h3>Condicionales</h3>", `<p>En los condicionales encadenados el <b>orden</b> de las condiciones importa, porque se ejecuta solo la primera que se cumple. Para clasificar notas hay que empezar por la más exigente (≥ 9) o por la más baja (< 5) y avanzar en orden. Y no hay que confundir varios «si» independientes, que se comprueban todos, con un «si… si no si…», en el que solo se ejecuta uno.</p>`],
    ["<h3>Todo junto: un ejemplo completo</h3>", `<p>Fíjate en el papel de cada pieza: <b>secreto</b> e <b>intentos</b> son variables; intentos es un contador; el bucle «repetir hasta que» se ejecuta mientras no se acierte; y el condicional decide qué pista dar. Para mejorarlo se puede limitar el número de intentos (condición compuesta: hasta que acierte <b>o</b> intentos = 7) y guardar el récord de la partida con menos intentos.</p>`],
  ],
  svgs: [
    ["<h3>Tipos de datos</h3>", "Tipos de datos", [["Entero", "17, −3"], ["Decimal", "2,5"], ["Texto", "«hola», «17»"], ["Booleano", "verdadero o falso"]], "Cada dato tiene su tipo"],
    ["<h3>Contadores y acumuladores</h3>", "Usos de las variables", [["Contador", "c ← c + 1"], ["Acumulador", "suma ← suma + precio"], ["Bandera", "encontrado ← verdadero"], ["Récord", "si p > récord: récord ← p"]], "Variables con un papel"],
    ["<h3>Bucles con contador</h3>", "Bucle para", [["Inicio", "i ← 1"], ["Condición", "mientras i ≤ 5"], ["Paso", "i ← i + 1"]], "Repetir N veces"],
    ["<h3>Condicionales</h3>", "Tipos de condicionales", [["Si… entonces", "una acción"], ["Si… si no", "dos caminos"], ["Encadenados", "varios casos"]], "Tomar decisiones"],
    ["<h3>Operadores de comparación y lógicos</h3>", "Operadores", [["Comparación", "=, ≠, <, >, ≤, ≥"], ["Lógicos", "y, o, no"], ["Resultado", "verdadero o falso"]], "Construir condiciones"],
    ["<h3>Todo junto: un ejemplo completo</h3>", "Juego de adivinar", [["Variables", "secreto, intentos"], ["Bucle", "repetir hasta acertar"], ["Condicional", "mayor o menor"]], "Las tres piezas juntas"],
    ["<h3>Del bloque al texto</h3>", "Del bloque a Python", [["fijar puntos a 0", "puntos = 0"], ["repetir 5", "for i in range(5):"], ["si… entonces", "if puntos >= 50:"]], "Mismas ideas, otra forma"],
  ],
  bloques: [
    { tras: "<h3>¿Qué es una variable?</h3>", html: `<h3>Variables globales y locales</h3><p>En Scratch, al crear una variable hay que elegir entre «<b>para todos los objetos</b>» y «<b>solo para este objeto</b>». Una variable <b>global</b> la pueden leer y cambiar todos los objetos y el escenario: la puntuación del juego o el tiempo restante. Una variable <b>local</b> pertenece a un solo objeto y cada copia de ese objeto tiene la suya: la energía de cada enemigo o la velocidad de cada coche en una carrera.</p><p>Elegir bien evita errores difíciles de encontrar: si la energía de los enemigos fuera global, al golpear a uno bajaría la de todos. En los lenguajes de texto ocurre lo mismo: una variable creada dentro de una función solo existe dentro de ella (es local) y desaparece al terminar. Como norma, conviene usar variables locales siempre que sea posible y reservar las globales para los datos que de verdad comparte todo el programa. Además, las variables se pueden <b>mostrar</b> u <b>ocultar</b> en el escenario: mostrar las importantes (puntos, vidas) y ocultar las internas.</p>`, svg: ["Global o local", [["Global", "todos: puntos, tiempo"], ["Local", "un objeto: su energía"], ["Norma", "local siempre que se pueda"]], "¿Quién ve la variable?"] },
    { tras: "<h3>Tipos de datos</h3>", html: `<h3>Listas: muchos datos en una variable</h3><p>Una <b>lista</b> (o array) guarda muchos valores bajo un mismo nombre, ordenados por su <b>posición</b> o índice. En Scratch, la lista «compra» puede contener «pan», «leche» y «huevos»: el elemento 1 es «pan» y el 3, «huevos». Con los bloques de listas se puede añadir un elemento al final, insertar en una posición, borrar, reemplazar, consultar la <b>longitud</b> (cuántos elementos hay) y saber si la lista <b>contiene</b> un valor.</p><p>Las listas se recorren con un bucle: para i desde 1 hasta longitud(lista), hacer algo con el elemento i. Así se puede sumar todas las notas de una lista, buscar la más alta o contar cuántos aprobados hay. Sirven para guardar las preguntas de un concurso, el récord de diez jugadores o los puntos de un recorrido. En Python se escriben entre corchetes, <b>compra = ["pan", "leche", "huevos"]</b>, y la primera posición es la 0, no la 1.</p>`, svg: ["Una lista en Scratch", [["1", "pan"], ["2", "leche"], ["3", "huevos"], ["Longitud", "3 elementos"]], "Lista «compra»"], video: "listas" },
    { tras: "<h3>Bucles con condición</h3>", html: `<h3>Bucles anidados</h3><p>Un bucle puede estar dentro de otro: son los <b>bucles anidados</b>. Por cada vuelta del bucle exterior, el interior se ejecuta completo. Si el exterior da 3 vueltas y el interior 4, las instrucciones de dentro se ejecutan 3 · 4 = 12 veces. Es la estructura que se usa para recorrer filas y columnas, como en una tabla de multiplicar completa, un tablero de ajedrez o los píxeles de una imagen.</p><p>Ejemplo: para dibujar una cuadrícula de 5 × 5 cuadrados, el bucle exterior recorre las filas y el interior dibuja los 5 cuadrados de cada fila; al terminar una fila, se baja y se vuelve al principio. Otro ejemplo: para i de 1 a 10, para j de 1 a 10, mostrar i · j, escribe las cien multiplicaciones de las tablas del 1 al 10. Hay que usar <b>variables distintas</b> en cada bucle (i y j) y vigilar el total de repeticiones, porque crece muy deprisa: tres bucles de 100 anidados son un millón de vueltas.</p>`, svg: ["Bucles anidados", [["Exterior", "3 vueltas (filas)"], ["Interior", "4 vueltas (columnas)"], ["Total", "3 · 4 = 12 repeticiones"]], "Un bucle dentro de otro"] },
    { tras: "<h3>Operadores de comparación y lógicos</h3>", html: `<h3>El azar: números aleatorios</h3><p>Muchos programas necesitan <b>azar</b>: un dado, la posición en la que aparece un enemigo, el orden de las preguntas de un concurso o una carta al azar. El bloque «número aleatorio entre 1 y 6» de Scratch (random.randint(1, 6) en Python) devuelve un número distinto cada vez. Se combina con variables y condicionales: dado ← aleatorio(1, 6); si dado = 6, mostrar «¡Repites turno!».</p><p>El azar también sirve para <b>probabilidades</b>: si queremos que algo ocurra el 20 % de las veces, generamos un número entre 1 y 100 y comprobamos si es menor o igual que 20. Con listas, se puede elegir un elemento al azar usando como posición un número aleatorio entre 1 y la longitud. En realidad, los ordenadores generan números <b>pseudoaleatorios</b>: los calculan con una fórmula a partir de una «semilla», como la hora exacta, pero parecen aleatorios y bastan para juegos y simulaciones.</p>`, svg: ["Números aleatorios", [["Dado", "aleatorio(1, 6)"], ["Probabilidad 20 %", "aleatorio(1, 100) ≤ 20"], ["Lista", "posición al azar"]], "Programar el azar"] },
    { tras: "<h3>Del bloque al texto</h3>", html: `<h3>Buenas prácticas: nombres claros y comentarios</h3><p>Un programa se lee muchas más veces de las que se escribe, por eso debe ser fácil de entender. La primera regla es usar <b>nombres de variables descriptivos</b>: «vidas», «tiempoRestante» o «precioTotal» dicen mucho más que «a», «x2» o «cosa». No deben llevar espacios (se usa camelCase, como tiempoRestante, o guiones bajos, como tiempo_restante) y conviene no empezarlos por un número ni usar tildes en los lenguajes de texto.</p><p>La segunda regla es <b>comentar</b>: en Scratch se pueden añadir notas amarillas a los scripts, y en Python todo lo que va detrás de # es un comentario que el ordenador ignora. Un buen comentario explica <b>por qué</b> se hace algo, no lo que ya es evidente. Otras buenas prácticas: inicializar todas las variables al principio, agrupar los scripts por objetos y funciones, evitar copiar y pegar el mismo código (usar bloques propios) y probar el programa a menudo, después de cada pequeño cambio, en lugar de escribirlo todo de golpe.</p>`, svg: ["Buenas prácticas", [["Nombres", "tiempoRestante, no x2"], ["Comentarios", "explican el porqué"], ["Inicializar", "todo al principio"], ["Probar", "tras cada cambio"]], "Código claro"] },
  ],
  grupos: [5, 3, 3, 3],
  ejemplos: [
    ["Una lista «notas» contiene 6, 8, 4, 9, 5. Recórrela para calcular la media y contar los aprobados.", ["suma ← 0; aprobados ← 0.", "Para i de 1 a 5: suma ← suma + notas[i]; si notas[i] ≥ 5: aprobados ← aprobados + 1.", "Suma = 32; aprobados = 4.", "Media = 32 / 5 = 6,4."], "Media 6,4 y 4 aprobados."],
    ["¿Cuántas veces se muestra «*» con: para i de 1 a 4: para j de 1 a 3: mostrar «*»?", ["Bucle exterior: 4 vueltas.", "Interior: 3 vueltas por cada una.", "4 · 3 = 12."], "12 asteriscos."],
    ["Programa un cofre que da una recompensa rara el 10 % de las veces.", ["Al abrir el cofre: n ← aleatorio(1, 100).", "Si n ≤ 10: mostrar «¡Espada legendaria!».", "Si no: mostrar «Una moneda»."], "La condición n ≤ 10 se cumple aproximadamente 1 de cada 10 veces."],
  ],
  niveles: "bbbmbbbmmm",
  ejercicios: [
    ["b", "¿Qué diferencia hay entre una variable global y una local en Scratch?", "La global la usan todos los objetos (puntuación); la local pertenece a un solo objeto y cada copia tiene la suya (energía de cada enemigo)."],
    ["b", "Una lista contiene «rojo», «verde», «azul». ¿Qué elemento está en la posición 2? ¿Cuál es su longitud?", "«verde»; longitud 3."],
    ["b", "¿Qué bloque usarías para simular un dado de 20 caras?", "número aleatorio entre 1 y 20."],
    ["b", "Propón nombres claros para variables que guarden: las vidas, el tiempo que falta y el nombre del jugador.", "vidas, tiempoRestante, nombreJugador."],
    ["b", "¿Para qué sirve una variable bandera? Pon un ejemplo.", "Para indicar si algo ha ocurrido (verdadero o falso). Ejemplo: llaveCogida ← falso al empezar y verdadero al recoger la llave; la puerta solo se abre si llaveCogida es verdadero."],
    ["b", "¿Qué hace el símbolo # en Python?", "Indica un comentario: el texto que va detrás no se ejecuta, sirve para explicar el código."],
    ["m", "¿Cuántas veces se ejecuta el interior de dos bucles anidados de 5 y 8 vueltas?", "5 · 8 = 40 veces."],
    ["m", "Escribe el algoritmo que busca el número mayor de una lista.", "mayor ← lista[1]; para i de 2 a longitud: si lista[i] > mayor: mayor ← lista[i]. Al final, mostrar mayor."],
    ["m", "Programa una pregunta de concurso elegida al azar de una lista de 10 preguntas.", "n ← aleatorio(1, 10); preguntar elemento n de «preguntas»; si respuesta = elemento n de «respuestas»: puntos ← puntos + 1."],
    ["m", "¿Por qué la energía de los enemigos debe ser una variable local?", "Porque cada enemigo tiene la suya: si fuera global, al golpear a uno bajaría la energía de todos a la vez."],
    ["m", "Escribe un programa que haga llover: en cada vuelta crea una gota en una x aleatoria entre −240 y 240.", "Por siempre: crear clon de gota. Al comenzar como clon: ir a x: aleatorio(−240, 240) y: 180; repetir hasta que y < −170: cambiar y en −5; borrar este clon."],
    ["m", "Añade un récord al juego de adivinar: guarda la partida con menos intentos.", "Al empezar: si récord = 0, nada. Al acertar: si récord = 0 o intentos < récord: récord ← intentos; mostrar «¡Nuevo récord!»."],
    ["m", "¿Qué muestra este programa? lista ← [3, 7, 2]; total ← 0; para cada x en lista: si x > 2: total ← total + x.", "Solo suma los mayores que 2: 3 + 7 = 10."],
    ["m", "Escribe en Python una lista con tus tres asignaturas favoritas y muestra la primera.", "asignaturas = [\"Tecnología\", \"Música\", \"Matemáticas\"]; print(asignaturas[0])  # la primera posición es 0"],
    ["m", "Explica qué son los números pseudoaleatorios.", "Números calculados con una fórmula a partir de una semilla (como la hora) que parecen aleatorios aunque no lo son del todo; bastan para juegos y simulaciones."],
    ["a", "Dibuja con bucles anidados un tablero de 8 × 8 casillas alternando colores. Describe el algoritmo.", "Para fila de 1 a 8: para col de 1 a 8: si (fila + col) mod 2 = 0: color blanco; si no: color negro; dibujar casilla; avanzar. Al terminar la fila: volver al inicio y bajar una casilla."],
    ["a", "Diseña un juego de memoria: el ordenador genera una secuencia aleatoria de colores que crece en cada ronda y el jugador debe repetirla. ¿Qué variables y listas usas?", "Lista secuencia (colores al azar), lista respuesta (lo que pulsa el jugador), variable ronda y bandera error. Cada ronda: añadir un color aleatorio a secuencia, mostrarla, borrar respuesta, recoger pulsaciones y comparar elemento a elemento; si alguno no coincide, error ← verdadero y fin."],
    ["a", "Simula 1.000 lanzamientos de un dado y cuenta cuántas veces sale cada número. ¿Qué esperas obtener?", "Lista contador con 6 ceros. Repetir 1.000: d ← aleatorio(1, 6); contador[d] ← contador[d] + 1. Cada número debería salir unas 167 veces (1.000/6), con pequeñas diferencias por el azar."],
    ["a", "Encuentra los tres errores del juego de la lectura (puntos que no se reinician, suma mal colocada, meteorito que cuenta dos veces) y escribe la solución.", "1) Al pulsar la bandera: fijar puntos a 0. 2) Poner «sumar 10 a puntos» dentro del bucle que detecta el choque. 3) Usar una variable local «destruido» en cada meteorito: si toca un disparo y destruido = falso: destruido ← verdadero, sumar puntos y esconder."],
    ["a", "Reescribe con buenas prácticas: a ← 0; para b de 1 a 30: a ← a + c[b]; d ← a / 30.", "# Media de las notas de la clase\nsumaNotas ← 0\npara alumno de 1 a 30: sumaNotas ← sumaNotas + notas[alumno]\nmediaClase ← sumaNotas / 30"],
  ],
  cuartas: ["un sonido", "0", "lista", "5", "bandera", "al azar", "dos veces", "12", "lunes y martes", "evento", "1", "suspenso", "no se puede saber"],
  quiz: [
    ["Una variable que pueden usar todos los objetos es…", ["local", "global", "booleana", "una lista"], 1, "Para todos los objetos."],
    ["Una lista guarda…", ["un solo valor", "muchos valores ordenados", "solo números", "solo texto"], 1, "Por posiciones."],
    ["En Python, la primera posición de una lista es la…", ["1", "0", "−1", "10"], 1, "Se empieza a contar en 0."],
    ["Dos bucles anidados de 4 y 5 vueltas ejecutan el interior…", ["9 veces", "20 veces", "4 veces", "5 veces"], 1, "4 · 5."],
    ["Para que algo ocurra el 25 % de las veces se comprueba…", ["aleatorio(1, 100) ≤ 25", "aleatorio(1, 4) = 5", "aleatorio(1, 100) > 25", "25 = 25"], 0, "Una de cada cuatro."],
    ["Una variable que indica si algo ha pasado es una…", ["bandera", "lista", "constante", "función"], 0, "Booleana: verdadero o falso."],
    ["El mejor nombre para una variable es…", ["x", "a2", "tiempoRestante", "cosa"], 2, "Descriptivo."],
    ["En Python, un comentario empieza por…", ["//", "#", "--", "*"], 1, "Almohadilla."],
    ["La longitud de una lista es…", ["su primer elemento", "el número de elementos", "el último valor", "su nombre"], 1, "Cuántos hay."],
    ["Los ordenadores generan números…", ["totalmente aleatorios", "pseudoaleatorios", "siempre iguales", "solo pares"], 1, "Con una fórmula y una semilla."],
  ],
  examen: [
    ["La lista [5, 9, 2] tiene longitud…", ["2", "3", "9", "16"], 1, "Tres elementos."],
    ["Para recorrer filas y columnas se usan bucles…", ["infinitos", "anidados", "vacíos", "aleatorios"], 1, "Uno dentro de otro."],
    ["La energía de cada enemigo debe ser una variable…", ["global", "local", "booleana", "de lista"], 1, "Cada uno la suya."],
    ["aleatorio(1, 6) puede devolver…", ["0", "7", "4", "6,5"], 2, "Enteros del 1 al 6."],
    ["Un buen comentario explica…", ["lo evidente", "por qué se hace algo", "nada", "el color"], 1, "La intención."],
  ],
  tarjetas: [["Variable global", "La comparten todos los objetos."], ["Lista", "Muchos valores bajo un nombre, por posiciones."], ["Bucle anidado", "Un bucle dentro de otro: vueltas multiplicadas."], ["Número aleatorio", "Valor al azar dentro de un intervalo."]],
  glosario: [
    ["Variable", "Espacio con nombre que guarda un dato que puede cambiar."],
    ["Inicializar", "Dar valor inicial a una variable."],
    ["Variable global", "Accesible desde todo el programa."],
    ["Variable local", "Solo existe para un objeto o función."],
    ["Tipo de dato", "Clase de valor: número, texto, booleano."],
    ["Booleano", "Valor verdadero o falso."],
    ["Lista", "Colección ordenada de valores."],
    ["Índice", "Posición de un elemento en una lista."],
    ["Contador", "Variable que aumenta de uno en uno."],
    ["Acumulador", "Variable que va sumando valores."],
    ["Bandera", "Variable booleana que indica si algo ocurrió."],
    ["Iteración", "Cada vuelta de un bucle."],
    ["Bucle anidado", "Bucle dentro de otro."],
    ["Condicional", "Estructura que decide según una condición."],
    ["Operador lógico", "y, o, no."],
    ["Número aleatorio", "Valor al azar en un intervalo."],
    ["Comentario", "Nota en el código que no se ejecuta."],
  ],
  situacion: { titulo: "Un concurso de preguntas para la clase", reto: "Programar en parejas un concurso de preguntas sobre otra asignatura, con preguntas guardadas en listas, orden aleatorio, puntuación, tiempo límite y récord.", pasos: ["Escribir 10 preguntas con sus respuestas y guardarlas en dos listas.", "Diseñar el algoritmo con variables (puntos, tiempo, récord) y una bandera para no repetir preguntas.", "Programar el bucle principal y los condicionales de acierto y fallo.", "Añadir el azar para el orden de las preguntas y un temporizador.", "Probarlo con compañeros, depurar y mejorar los nombres y comentarios."], producto: "Concurso funcional con listas, variables y condicionales, y su diagrama de flujo.", evaluacion: ["Las variables están bien inicializadas y tienen nombres claros.", "Las listas se recorren y usan correctamente.", "Los bucles y condicionales funcionan sin errores.", "El código está comentado y organizado."] },
  saberes: "variables y tipos de datos, listas, contadores, acumuladores, bucles simples y anidados, condicionales y operadores, números aleatorios y buenas prácticas de programación.",
  familias: ["Jugad al concurso que ha programado vuestro hijo o hija y pedidle que os explique qué variables usa."],
  minutos: 105,
});
