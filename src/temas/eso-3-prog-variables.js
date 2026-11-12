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
