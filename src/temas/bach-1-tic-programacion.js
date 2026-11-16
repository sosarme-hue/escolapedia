// Tecnologías de la Información y la Comunicación I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
// Se programa en Python; el tema de Tecnología e Ingeniería I trata la programación de microcontroladores.
const B = require("./_bach1L38");

// Diagrama de flujo: ¿es par?
const flujoPar = () => {
  const caja = (y, t, c, rx = 6) => `<rect x="80" y="${y}" width="100" height="22" rx="${rx}" fill="var(--card)" stroke="${c}" stroke-width="2.2"/>${B.tx(130, y + 15, t, { fs: 10, maxW: 92, bold: true, color: c })}`;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de flujo: inicio, leer n, decisión si el resto de n entre 2 es 0, escribir par o impar y fin">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    ${caja(6, "Inicio", "var(--leaf)", 11)}
    <path d="M86 38 H 186 L 174 58 H 74 Z" fill="var(--card)" stroke="var(--pen)" stroke-width="2.2"/>${B.tx(130, 52, "leer n", { fs: 10, maxW: 80, bold: true, color: "var(--pen)" })}
    <path d="M130 70 L 176 92 L 130 114 L 84 92 Z" fill="var(--card)" stroke="var(--sun)" stroke-width="2.2"/>${B.tx(130, 96, "n % 2 == 0", { fs: 10, maxW: 74, bold: true, color: "var(--sun)" })}
    <path d="M24 124 H 104 L 94 144 H 14 Z" fill="var(--card)" stroke="var(--red)" stroke-width="2.2"/>${B.tx(59, 138, "«par»", { fs: 10, maxW: 70, bold: true, color: "var(--red)" })}
    <path d="M166 124 H 246 L 236 144 H 156 Z" fill="var(--card)" stroke="var(--red)" stroke-width="2.2"/>${B.tx(201, 138, "«impar»", { fs: 10, maxW: 70, bold: true, color: "var(--red)" })}
    ${caja(154, "Fin", "var(--leaf)", 11)}
    <path d="M130 28 V 38 M130 58 V 70 M84 92 H 59 V 124 M176 92 H 201 V 124 M59 144 V 165 H 80 M201 144 V 165 H 180" fill="none" stroke="var(--ink)" stroke-width="1.6"/>
    ${B.tx(70, 86, "sí", { fs: 10, maxW: 14, bold: true, color: "var(--leaf)" })}${B.tx(190, 86, "no", { fs: 10, maxW: 14, bold: true, color: "var(--red)" })}
  </svg>`;
};

// Lista con índices positivos y negativos.
const lista = () => {
  const v = ["7", "3", "9", "1", "5"];
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Lista notas con cinco elementos: índices de 0 a 4 desde el principio y de -1 a -5 desde el final">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    ${B.tx(130, 22, "notas = [7, 3, 9, 1, 5]", { fs: 12.5, maxW: 236, bold: true, font: B.D })}
    ${v.map((x, i) => `<rect x="${20 + i * 44}" y="62" width="40" height="40" rx="6" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>${B.tx(40 + i * 44, 88, x, { fs: 15, maxW: 30, bold: true })}
      ${B.tx(40 + i * 44, 54, String(i), { fs: 11, maxW: 30, bold: true, color: "var(--leaf)" })}${B.tx(40 + i * 44, 120, String(i - 5), { fs: 11, maxW: 30, bold: true, color: "var(--red)" })}`).join("")}
    ${B.tx(130, 146, "notas[0] → 7   ·   notas[-1] → 5", { fs: 10.5, maxW: 230, bold: true, color: "var(--pen)" })}
    ${B.tx(130, 164, "len(notas) → 5   ·   notas[1:3] → [3, 9]", { fs: 10.5, maxW: 230 })}
  </svg>`;
};

module.exports = B.tema(B.textos({
  titulo: "Programación",
  minutos: 120,
  objetivos: [
    "Analizar problemas con pensamiento computacional y diseñar algoritmos con diagramas de flujo y pseudocódigo",
    "Escribir programas en Python con variables, operadores, condicionales, bucles, funciones y listas",
    "Aplicar algoritmos clásicos de búsqueda, recuento y ordenación, y depurar y probar el código",
    "Conocer la programación web por eventos y valorar las buenas prácticas, las licencias y la ética del software",
  ],
  claves: ["algoritmo", "pensamiento computacional", "pseudocódigo", "Python", "variable", "condicional", "bucle", "función", "lista", "diccionario", "depuración", "evento"],
  pregunta: {
    texto: "Una aplicación te recomienda canciones que encajan con tus gustos casi a la perfección. ¿Alguien ha escrito a mano qué canción poner a cada persona?",
    respuesta: "No. Alguien ha escrito <b>algoritmos</b>: instrucciones generales que, con los <b>datos</b> de lo que escuchas, calculan una recomendación para cualquier usuario. Programar es eso: describir la solución de un problema de forma tan precisa que una máquina pueda aplicarla millones de veces. Con unas pocas estructuras, <mark>variables, condicionales, bucles y funciones</mark>, se construyen todos los programas.",
  },
  lectura: {
    titulo: "El error de 125 millones de dólares",
    html: `<p>En septiembre de 1999, la sonda Mars Climate Orbiter de la NASA se acercaba a Marte tras diez meses de viaje. Al encender sus motores para entrar en órbita, se perdió el contacto. Nunca más se supo de ella: probablemente se desintegró en la atmósfera marciana.</p>
    <p>La investigación descubrió la causa: un programa del equipo de tierra calculaba el impulso de los motores en libras-fuerza por segundo, mientras que el software de la nave esperaba los datos en newtons por segundo. Nadie lo detectó en las pruebas. Un pequeño fallo de comunicación entre dos programas costó 125 millones de dólares y años de trabajo.</p>
    <p>Los programas están hoy en todas partes: en los aviones, en los hospitales, en los bancos y en tu bolsillo. Por eso programar no consiste solo en conseguir que algo «funcione»: hay que pensar con claridad, describir cada paso sin ambigüedades, probar casos límite y escribir código que otros puedan entender. En este tema aprenderás a programar en Python, uno de los lenguajes más usados del mundo, y descubrirás que programar es, sobre todo, una forma ordenada de pensar.</p>`,
  },
  secciones: [4, 5, 4],
  bloques: [
    {
      h: "Algoritmos y pensamiento computacional",
      html: `<p>Un <b>algoritmo</b> es una secuencia <mark>finita, ordenada y precisa</mark> de instrucciones que resuelve un problema o realiza una tarea. Debe tener unos datos de <b>entrada</b>, producir una <b>salida</b>, terminar en un número finito de pasos y no dejar ninguna instrucción ambigua. Una receta o las instrucciones de un mueble son algoritmos para personas; un <b>programa</b> es un algoritmo escrito en un lenguaje que entiende un ordenador.</p>
      <p>El <b>pensamiento computacional</b> es la forma de razonar que permite plantear problemas para que los resuelva un ordenador (o una persona siguiendo pasos). Tiene cuatro pilares:</p>
      <ul><li><b>Descomposición</b>: dividir un problema complejo en partes más pequeñas y manejables. Organizar un viaje: transporte, alojamiento, presupuesto, actividades.</li>
      <li><b>Reconocimiento de patrones</b>: detectar semejanzas con problemas ya resueltos o entre las partes del problema.</li>
      <li><b>Abstracción</b>: quedarse con lo esencial e ignorar los detalles irrelevantes. Un plano de metro no muestra las calles, solo las estaciones y las conexiones.</li>
      <li><b>Diseño de algoritmos</b>: escribir los pasos de la solución en el orden correcto.</li></ul>
      <p>Un mismo problema puede resolverse con algoritmos distintos, y no todos son igual de buenos. Se valoran su <b>corrección</b> (da siempre el resultado correcto), su <b>eficiencia</b> (cuánto tiempo y memoria necesita) y su <b>claridad</b>. Buscar un nombre en una lista de un millón de nombres desordenados puede requerir un millón de comparaciones; si la lista está ordenada, la búsqueda binaria lo consigue en unas veinte.</p>`,
      svg: B.cajas("Los cuatro pilares del pensamiento computacional", [["Descomposición", "dividir el problema"], ["Patrones", "buscar semejanzas"], ["Abstracción", "lo esencial"], ["Algoritmo", "pasos ordenados"]], { t: "Pensamiento computacional" }),
      video: { id: "P4f5OEPz2LY", titulo: "¿Qué es un algoritmo en informática?", canal: "Kiko Palomares", vistas: 119771 },
    },
    {
      h: "Diagramas de flujo y pseudocódigo",
      html: `<p>Antes de escribir código conviene diseñar el algoritmo con herramientas independientes del lenguaje.</p>
      <p>Los <b>diagramas de flujo</b> representan gráficamente el algoritmo con símbolos normalizados unidos por flechas:</p>
      <ul><li><b>Óvalo</b>: inicio y fin.</li>
      <li><b>Paralelogramo</b> (romboide): entrada o salida de datos (leer, escribir).</li>
      <li><b>Rectángulo</b>: proceso o cálculo (asignar un valor, sumar).</li>
      <li><b>Rombo</b>: decisión. Contiene una condición y tiene dos salidas, sí y no.</li>
      <li><b>Flechas</b>: indican el orden de ejecución. Una flecha que vuelve atrás crea un bucle.</li></ul>
      <p>El <b>pseudocódigo</b> describe el algoritmo con palabras del lenguaje natural pero con la estructura de un programa:</p>
      ${B.code(`Algoritmo ParOImpar
  Leer n
  Si n mod 2 = 0 entonces
    Escribir "par"
  Si no
    Escribir "impar"
  FinSi
FinAlgoritmo`)}
      <p>El diagrama es muy visual para algoritmos cortos; el pseudocódigo es más cómodo para algoritmos largos y se traduce casi directamente a cualquier lenguaje.</p>
      <p>Una técnica muy útil para comprobar un algoritmo es la <b>traza</b> o prueba de escritorio: ejecutarlo a mano con unos datos concretos, anotando en una tabla el valor de cada variable después de cada paso. Así se descubren errores antes de programar.</p>`,
      svg: flujoPar(),
    },
    {
      h: "Lenguajes de programación y entornos",
      html: `<p>Los ordenadores solo ejecutan <b>código máquina</b> (instrucciones binarias). Los <b>lenguajes de programación</b> permiten escribir los programas de forma comprensible para las personas, con unas reglas de escritura estrictas (<b>sintaxis</b>) y un significado preciso (<b>semántica</b>). Se clasifican por su nivel:</p>
      <ul><li><b>Bajo nivel</b>: código máquina y ensamblador, muy cercanos al procesador.</li>
      <li><b>Alto nivel</b>: Python, JavaScript, Java, C++, C#… cercanos al lenguaje humano y portables entre procesadores.</li>
      <li><b>Visuales</b> o por bloques: Scratch, App Inventor o Snap!, que evitan los errores de sintaxis.</li></ul>
      <p>Para ejecutar un programa de alto nivel hay que traducirlo. Un <b>compilador</b> traduce todo el programa de una vez y genera un ejecutable (C, C++, Go). Un <b>intérprete</b> lo traduce y ejecuta instrucción a instrucción (Python, JavaScript), lo que facilita probar y corregir.</p>
      <p>Los lenguajes siguen distintos <b>paradigmas</b> o estilos: <b>imperativo</b> o estructurado (órdenes paso a paso), <b>orientado a objetos</b> (el programa se organiza en objetos con datos y comportamientos, como «alumno» con su nombre y su método «matricular»), <b>funcional</b> y <b>declarativo</b> (como SQL, que dice qué se quiere, no cómo obtenerlo).</p>
      <p>En este tema usaremos <b>Python</b>: es libre, tiene una sintaxis clara y se usa en ciencia de datos, inteligencia artificial, web y automatización. Se programa en un <b>entorno de desarrollo</b> (IDE) como Thonny, IDLE o Visual Studio Code, o en cuadernos en línea que no requieren instalar nada.</p>`,
      svg: B.capas("Niveles de los lenguajes de programación", [["Bloques", "Scratch"], ["Alto nivel", "Python, JavaScript"], ["Ensamblador", "mnemónicos"], ["Código máquina", "0 y 1"]], { t: "Del humano a la máquina" }),
    },
    {
      h: "Primeros pasos en Python",
      html: `<p>El primer programa clásico muestra un mensaje en pantalla:</p>
      ${B.code(`# Mi primer programa
print("¡Hola, mundo!")
nombre = input("¿Cómo te llamas? ")
print("Encantado,", nombre)`)}
      <ul><li><code>print()</code> es la función de <b>salida</b>: muestra en pantalla lo que se le pasa entre paréntesis. Varios valores separados por comas se muestran separados por espacios.</li>
      <li><code>input()</code> es la función de <b>entrada</b>: muestra un mensaje, espera a que el usuario escriba y devuelve lo escrito siempre como <b>texto</b>.</li>
      <li>Las líneas que empiezan por <code>#</code> son <b>comentarios</b>: Python las ignora y sirven para explicar el código a las personas.</li></ul>
      <p>Python tiene algunas reglas de sintaxis importantes:</p>
      <ul><li>Distingue <b>mayúsculas y minúsculas</b>: <code>Nombre</code> y <code>nombre</code> son variables distintas, y <code>Print</code> no existe.</li>
      <li>Los textos (<b>cadenas</b>) van entre comillas simples o dobles.</li>
      <li>La <b>sangría</b> (cuatro espacios) no es estética: indica qué instrucciones pertenecen a un bloque (un if, un bucle, una función). Una sangría incorrecta produce un error.</li>
      <li>Los dos puntos <code>:</code> al final de una línea indican que empieza un bloque sangrado.</li></ul>
      <p>Para convertir el texto leído en un número hay que usar <code>int()</code> (entero) o <code>float()</code> (decimal): <code>edad = int(input("Edad: "))</code>. Con las <b>f-strings</b> se insertan valores en un texto de forma cómoda: <code>print(f"Tienes {edad} años")</code>.</p>`,
      svg: B.rejilla("Funciones básicas de Python", ["Función", "Hace"], [["print()", "muestra"], ["input()", "lee texto"], ["int(), float()", "convierte"], ["len()", "longitud"], ["type()", "tipo de dato"]], { t: "Primeras funciones" }),
      video: { id: "PtBHnMMRI0E", titulo: "Python en 8 minutos", canal: "MoureDev by Brais Moure", vistas: 386888 },
    },
    {
      h: "Variables, tipos de datos y operadores",
      html: `<p>Una <b>variable</b> es un nombre que hace referencia a un valor guardado en la memoria. En Python se crea al <b>asignarle</b> un valor con el signo <code>=</code>, y su valor puede cambiar: <code>puntos = 0</code> y después <code>puntos = puntos + 10</code> (o abreviado, <code>puntos += 10</code>). Los nombres deben ser descriptivos, empezar por letra, sin espacios ni tildes (<code>nota_media</code>), y no pueden ser palabras reservadas como <code>if</code> o <code>for</code>.</p>
      <p>Cada valor tiene un <b>tipo</b> (Python lo deduce solo, se consulta con <code>type()</code>):</p>
      <ul><li><b>int</b>: enteros (<code>17</code>, <code>-3</code>).</li>
      <li><b>float</b>: números con decimales, con punto (<code>3.14</code>).</li>
      <li><b>str</b>: cadenas de texto (<code>"Hola"</code>).</li>
      <li><b>bool</b>: valores lógicos <code>True</code> y <code>False</code>.</li></ul>
      <p>Los <b>operadores</b> son:</p>
      <ul><li><b>Aritméticos</b>: <code>+ - * /</code> (la división siempre da float: 7 / 2 = 3.5), <code>//</code> (división entera: 7 // 2 = 3), <code>%</code> (resto: 7 % 2 = 1) y <code>**</code> (potencia: 2 ** 3 = 8).</li>
      <li><b>De comparación</b>: <code>==</code> (igual), <code>!=</code> (distinto), <code>&lt; &gt; &lt;= &gt;=</code>. Devuelven un booleano.</li>
      <li><b>Lógicos</b>: <code>and</code> (verdadero si ambos lo son), <code>or</code> (si lo es al menos uno) y <code>not</code> (invierte).</li></ul>
      <p>Con las cadenas, <code>+</code> concatena y <code>*</code> repite: <code>"ja" * 3</code> da <code>"jajaja"</code>. Sumar un número y un texto produce un error de tipo: hay que convertirlos antes con <code>str()</code> o <code>int()</code>. Las operaciones siguen la prioridad matemática, y los paréntesis la cambian.</p>`,
      svg: B.rejilla("Tipos de datos de Python", ["Tipo", "Ejemplo", "Uso"], [["int", "17", "contar"], ["float", "3.14", "medir"], ["str", "\"Hola\"", "texto"], ["bool", "True", "sí / no"]], { t: "Tipos de datos" }),
    },
    {
      h: "Estructuras condicionales",
      html: `<p>Las <b>estructuras condicionales</b> permiten que el programa tome decisiones: ejecutar un bloque de instrucciones u otro según se cumpla una condición.</p>
      ${B.code(`nota = float(input("Nota: "))
if nota >= 9:
    print("Sobresaliente")
elif nota >= 7:
    print("Notable")
elif nota >= 5:
    print("Aprobado")
else:
    print("Suspenso")`)}
      <ul><li><code>if</code> (si): evalúa la condición; si es verdadera, ejecuta su bloque sangrado.</li>
      <li><code>elif</code> (si no, si): se comprueba solo si las condiciones anteriores fueron falsas. Puede haber varios.</li>
      <li><code>else</code> (si no): se ejecuta si ninguna condición anterior se cumplió. Es opcional.</li></ul>
      <p>Solo se ejecuta <b>uno</b> de los bloques: el primero cuya condición sea verdadera. Por eso el orden importa: si en el ejemplo se comprobara primero <code>nota &gt;= 5</code>, un 9,5 se clasificaría como «Aprobado».</p>
      <p>Las condiciones pueden combinarse con operadores lógicos: <code>if edad &gt;= 16 and tiene_permiso:</code>. Python permite también comparaciones encadenadas: <code>if 0 &lt;= nota &lt;= 10:</code>. Y los condicionales pueden <b>anidarse</b>, uno dentro de otro, aunque demasiados niveles hacen el código difícil de leer.</p>
      <p>Un uso muy habitual es <b>validar datos</b>: comprobar que lo que escribe el usuario tiene sentido (una nota entre 0 y 10, un mes entre 1 y 12) antes de usarlo, y mostrar un mensaje de error si no.</p>`,
      svg: B.flujo("Funcionamiento de if, elif y else", ["¿nota >= 9? sí → Sobresaliente", "si no, ¿nota >= 7? → Notable", "si no, ¿nota >= 5? → Aprobado", "si no → Suspenso", "Solo se ejecuta un bloque"], { t: "if · elif · else" }),
    },
    {
      h: "Estructuras repetitivas: while y for",
      html: `<p>Los <b>bucles</b> repiten un bloque de instrucciones. Cada repetición es una <b>iteración</b>. Python tiene dos:</p>
      <p>El bucle <code>while</code> (mientras) repite mientras se cumpla una condición. Se usa cuando no se sabe de antemano cuántas veces hay que repetir:</p>
      ${B.code(`clave = ""
while clave != "abracadabra":
    clave = input("Contraseña: ")
print("Acceso concedido")`)}
      <p>Dentro del bucle algo debe cambiar para que la condición llegue a ser falsa; si no, se produce un <b>bucle infinito</b>, y hay que detener el programa a mano.</p>
      <p>El bucle <code>for</code> recorre los elementos de una secuencia (una lista, una cadena o un rango de números). Se usa cuando se sabe cuántas veces repetir:</p>
      ${B.code(`for i in range(1, 11):
    print(f"7 x {i} = {7 * i}")`)}
      <p><code>range(inicio, fin, paso)</code> genera números desde el inicio hasta el fin <b>sin incluirlo</b>: <code>range(5)</code> da 0, 1, 2, 3, 4; <code>range(1, 11)</code>, del 1 al 10; <code>range(10, 0, -2)</code>, 10, 8, 6, 4, 2.</p>
      <p>Dos patrones aparecen constantemente en los bucles: el <b>contador</b>, una variable que aumenta de uno en uno para contar cuántas veces ocurre algo (<code>aprobados += 1</code>), y el <b>acumulador</b>, que va sumando valores (<code>total += precio</code>). Ambos deben <b>inicializarse</b> a 0 antes del bucle. La instrucción <code>break</code> sale del bucle inmediatamente, y <code>continue</code> salta a la siguiente iteración.</p>`,
      svg: B.comparar("Bucles while y for", ["while", ["mientras condición", "nº de veces desconocido", "validar datos", "¡ojo, bucle infinito!"]], ["for", ["recorre secuencia", "nº de veces conocido", "range(1, 11)", "listas y cadenas"]]),
      video: { id: "7bO5wlqeeEI", titulo: "Bucles FOR: qué son y cómo funcionan", canal: "Retro", vistas: 120162 },
    },
    {
      h: "Funciones",
      html: `<p>Una <b>función</b> es un bloque de código con nombre que realiza una tarea concreta. Se <b>define</b> una vez con <code>def</code> y se <b>llama</b> tantas veces como haga falta:</p>
      ${B.code(`def area_rectangulo(base, altura):
    """Devuelve el área de un rectángulo."""
    return base * altura

a = area_rectangulo(4, 2.5)    # a vale 10.0
print(area_rectangulo(3, 3))   # muestra 9`)}
      <ul><li>Los <b>parámetros</b> (base, altura) son las variables que recibe la función; los valores concretos que se pasan al llamarla son los <b>argumentos</b> (4 y 2.5).</li>
      <li><code>return</code> termina la función y <b>devuelve</b> un resultado al lugar desde donde se llamó. Una función sin return devuelve <code>None</code>.</li>
      <li>El texto entre triples comillas es la <b>documentación</b> de la función.</li></ul>
      <p>Hay que distinguir <b>devolver</b> un valor (return), que permite seguir usándolo en el programa, de <b>mostrarlo</b> (print), que solo lo escribe en pantalla.</p>
      <p>Las variables creadas dentro de una función son <b>locales</b>: solo existen mientras se ejecuta y no interfieren con otras del mismo nombre fuera de ella. Esto hace que cada función sea una pieza independiente.</p>
      <p>Dividir un programa en funciones (<b>programación modular</b>) tiene muchas ventajas: evita repetir código, hace el programa más legible, permite probar cada parte por separado y reutilizarla en otros programas. Una buena función hace <b>una sola cosa</b> y tiene un nombre que lo explica. Python incluye muchas funciones predefinidas (<code>len</code>, <code>max</code>, <code>round</code>) y <b>módulos</b> con más funciones que se cargan con <code>import</code>: <code>import random</code> para números aleatorios o <code>import math</code> para funciones matemáticas.</p>`,
      svg: B.flujo("Llamada a una función", ["El programa llama area_rectangulo(4, 2.5)", "base = 4, altura = 2.5", "Calcula base * altura", "return devuelve 10.0", "El programa sigue con a = 10.0"], { t: "Funciones" }),
      video: { id: "89cGQjB5R4M", titulo: "Las funciones en Python son fáciles", canal: "Bro Code", vistas: 1483692 },
    },
    {
      h: "Listas, cadenas y diccionarios",
      html: `<p>Las <b>estructuras de datos</b> guardan muchos valores en una sola variable.</p>
      <p>Una <b>lista</b> es una secuencia ordenada y modificable de elementos entre corchetes: <code>notas = [7, 3, 9, 1, 5]</code>. Cada elemento tiene un <b>índice</b> que empieza en <b>0</b>: <code>notas[0]</code> es 7; los índices negativos cuentan desde el final (<code>notas[-1]</code> es 5). Operaciones útiles:</p>
      <ul><li><code>len(notas)</code>: número de elementos. <code>sum</code>, <code>max</code>, <code>min</code>.</li>
      <li><code>notas.append(8)</code>: añade al final; <code>notas.remove(3)</code>: elimina un valor; <code>notas.sort()</code>: ordena.</li>
      <li><code>notas[1:3]</code>: una porción (<i>slice</i>), del índice 1 al 3 sin incluirlo.</li>
      <li><code>7 in notas</code>: comprueba si un valor está en la lista.</li>
      <li><code>for n in notas:</code> recorre todos los elementos.</li></ul>
      <p>Las <b>cadenas</b> de texto se comportan como listas de caracteres (se indexan y recorren), pero no se pueden modificar. Tienen métodos como <code>upper()</code>, <code>lower()</code>, <code>replace()</code>, <code>split()</code> (trocea en una lista de palabras) o <code>strip()</code> (quita espacios).</p>
      <p>Un <b>diccionario</b> guarda pares <b>clave: valor</b> entre llaves y permite buscar por clave, no por posición:</p>
      ${B.code(`alumno = {"nombre": "Ana", "curso": "1BACH", "nota": 8.5}
print(alumno["nombre"])       # Ana
alumno["nota"] = 9            # modificar
for clave, valor in alumno.items():
    print(clave, "→", valor)`)}
      <p>Los diccionarios son ideales para representar fichas (un alumno, un producto) y para contar apariciones (cuántas veces aparece cada palabra en un texto).</p>`,
      svg: lista(),
      video: { id: "v25-m1LOUiU", titulo: "Estructuras de datos con Python en 8 minutos: listas, tuplas, conjuntos y diccionarios", canal: "BitBoss", vistas: 266289 },
    },
    {
      h: "Algoritmos clásicos: buscar, contar y ordenar",
      html: `<p>Algunos problemas aparecen una y otra vez, y tienen algoritmos conocidos:</p>
      <ul><li><b>Máximo y mínimo</b>: se guarda el primer elemento como «mayor hasta ahora» y se recorre la lista comparando; si aparece uno mayor, se actualiza.</li>
      <li><b>Búsqueda secuencial</b>: se recorre la lista hasta encontrar el valor o llegar al final. En el peor caso hace tantas comparaciones como elementos (n).</li>
      <li><b>Búsqueda binaria</b>: solo para listas <b>ordenadas</b>. Se mira el elemento central; si el buscado es menor, se descarta la mitad derecha, y si es mayor, la izquierda. Cada paso divide el problema por dos: en una lista de 1 000 000 de elementos bastan unas 20 comparaciones (2²⁰ ≈ 1 000 000).</li>
      <li><b>Recuento</b>: contar cuántos elementos cumplen una condición o cuántas veces aparece cada valor (con un diccionario).</li>
      <li><b>Ordenación</b>: el método de la <b>burbuja</b> compara cada pareja de elementos vecinos y los intercambia si están desordenados, repitiendo las pasadas hasta que no haya cambios; es sencillo pero lento. Otros, como la ordenación por mezcla, son mucho más rápidos con listas grandes.</li></ul>
      ${B.code(`def maximo(lista):
    mayor = lista[0]
    for x in lista:
        if x > mayor:
            mayor = x
    return mayor`)}
      <p>La <b>eficiencia</b> de un algoritmo se mide por cómo crece su número de operaciones al aumentar los datos. Por eso los programadores eligen con cuidado los algoritmos y las estructuras de datos.</p>`,
      svg: B.barras("Comparaciones máximas para buscar en 1 000 000 de elementos", [["Secuencial", 1000000], ["Binaria", 20]], { t: "Comparaciones (peor caso)" }),
    },
    {
      h: "Depuración y pruebas",
      html: `<p>Los errores de un programa (<i>bugs</i>) son normales. Hay tres tipos:</p>
      <ul><li><b>De sintaxis</b>: el código no respeta las reglas del lenguaje (falta un paréntesis o los dos puntos, una sangría incorrecta). Python no ejecuta nada y señala la línea con un <code>SyntaxError</code> o <code>IndentationError</code>.</li>
      <li><b>De ejecución</b> (excepciones): el programa se detiene al llegar a una instrucción imposible: dividir entre cero (<code>ZeroDivisionError</code>), usar una variable no definida (<code>NameError</code>), acceder a una posición inexistente de una lista (<code>IndexError</code>) o convertir a número un texto que no lo es (<code>ValueError</code>).</li>
      <li><b>Lógicos</b>: el programa funciona pero da un resultado incorrecto (un &lt; en lugar de &lt;=, una variable sin inicializar). Son los más difíciles de detectar.</li></ul>
      <p>La <b>depuración</b> consiste en localizarlos y corregirlos. Técnicas: <b>leer el mensaje de error</b> completo (dice el tipo y la línea), mostrar el valor de las variables con <code>print</code> en puntos clave, ejecutar <b>paso a paso</b> con el depurador del entorno observando las variables, hacer una traza a mano y explicar el código en voz alta a otra persona.</p>
      <p>Las excepciones previsibles se pueden <b>controlar</b> con <code>try</code> y <code>except</code>, para que el programa no se detenga:</p>
      ${B.code(`try:
    edad = int(input("Edad: "))
except ValueError:
    print("Escribe un número entero")`)}
      <p>Las <b>pruebas</b> comprueban el programa con casos normales, <b>casos límite</b> (0, el valor justo en el umbral, una lista vacía o de un solo elemento) y datos incorrectos. Escribir las pruebas antes que el código ayuda a pensar qué debe hacer exactamente.</p>`,
      svg: B.rejilla("Tipos de errores en Python", ["Error", "Ejemplo"], [["Sintaxis", "falta : o )"], ["Ejecución", "ZeroDivisionError"], ["Ejecución", "IndexError"], ["Lógico", "< en vez de <="]], { t: "Errores" }),
    },
    {
      h: "Programación por eventos y JavaScript",
      html: `<p>Los programas que hemos visto se ejecutan de principio a fin siguiendo un orden fijo. Las aplicaciones con <b>interfaz gráfica</b> (apps, webs, videojuegos) funcionan de otra forma: esperan a que ocurran <b>eventos</b> (un clic, una tecla pulsada, un toque en la pantalla, un temporizador, la llegada de un mensaje) y ejecutan el código asociado a cada uno, llamado <b>manejador</b> o <i>listener</i>. Es la <b>programación orientada a eventos</b>; Scratch funciona así con bloques como «al hacer clic en este objeto».</p>
      <p>En la web, el lenguaje que se ejecuta en el navegador es <b>JavaScript</b>. Comparte con Python las estructuras básicas (variables, condicionales, bucles, funciones), con otra sintaxis: los bloques van entre llaves y las instrucciones suelen terminar en punto y coma. Puede leer y modificar los elementos de la página a través del <b>DOM</b> (modelo de objetos del documento):</p>
      ${B.code(`<button id="boton">Púlsame</button>
<p id="mensaje"></p>
<script>
  let veces = 0;
  document.getElementById("boton").addEventListener("click", () => {
    veces++;
    document.getElementById("mensaje").textContent = "Has pulsado " + veces + " veces";
  });
</script>`)}
      <p>Cada vez que se produce el evento «click» en el botón, se ejecuta la función, que incrementa el contador y cambia el texto del párrafo. Con JavaScript se validan formularios antes de enviarlos, se crean galerías, menús desplegables, juegos y aplicaciones completas.</p>`,
      svg: B.flujo("Programación orientada a eventos", ["La aplicación espera", "Ocurre un evento: clic", "Se ejecuta su manejador", "Cambia la página o los datos", "Vuelve a esperar"], { t: "Eventos" }),
    },
    {
      h: "Buenas prácticas, licencias y ética del software",
      html: `<p>El código se lee muchas más veces de las que se escribe. Por eso los programadores siguen <b>buenas prácticas</b>:</p>
      <ul><li><b>Nombres descriptivos</b> para variables y funciones (<code>precio_total</code>, no <code>pt</code>).</li>
      <li><b>Comentarios</b> que expliquen el porqué, no lo evidente, y documentación de las funciones.</li>
      <li><b>Funciones cortas</b> que hacen una sola cosa, sin repetir código.</li>
      <li><b>Constantes</b> con nombre en lugar de «números mágicos»: <code>IVA = 0.21</code>.</li>
      <li><b>Control de versiones</b> con Git: guarda cada cambio con su descripción, permite volver atrás y colaborar en plataformas que alojan repositorios.</li></ul>
      <p>El software está protegido por la <b>propiedad intelectual</b>, y su licencia indica qué se puede hacer con él. El <b>software libre</b> y de <b>código abierto</b> permite estudiar, modificar y compartir el código: Python, Linux o Firefox lo son, y millones de personas colaboran en ellos. Al reutilizar código ajeno hay que respetar su licencia y citar su origen.</p>
      <p>Los <b>asistentes de programación con IA</b> generan código a partir de descripciones. Son útiles, pero pueden producir errores, código inseguro o fragmentos con licencias incompatibles: hay que entender, revisar y probar todo lo que se usa. Y en la escuela, presentar como propio un código que no se ha hecho ni entendido es plagio.</p>
      <p>Por último, los programas toman decisiones que afectan a personas: hay que pensar en su <b>accesibilidad</b>, en la <b>privacidad</b> de los datos que manejan, en los posibles <b>sesgos</b> y en su <b>seguridad</b>, desde el diseño.</p>`,
      svg: B.estrella("Buenas prácticas de programación", "Código limpio", ["Nombres claros", "Comentarios", "Funciones", "Pruebas", "Git", "Licencias"]),
    },
  ],
  figura: {
    titulo: "Ideas clave de la programación",
    items: [["Algoritmo", "pasos finitos", "diagrama de flujo", "y pseudocódigo"], ["Decidir", "if · elif · else", "condiciones", "and, or, not"], ["Repetir", "while · for", "contadores y", "acumuladores"], ["Organizar", "def · return", "listas", "y diccionarios"]],
  },
  video: { id: "w53HiWSZnzU", titulo: "Estructuras de control de flujo en Python: if, else, elif, while, for, break, continue", canal: "BitBoss", vistas: 153716 },
  quiz: [
    ["Un algoritmo debe ser…", ["infinito", "finito, ordenado y preciso", "escrito en Python", "siempre gráfico"], 1, "Debe terminar y no ser ambiguo."],
    ["Quedarse con lo esencial de un problema es…", ["descomposición", "abstracción", "depuración", "compilación"], 1, "Uno de los pilares del pensamiento computacional."],
    ["En un diagrama de flujo, la entrada y salida de datos se representa con…", ["un rombo", "un paralelogramo", "un óvalo", "un círculo"], 1, "El rombo es para decisiones."],
    ["Python es un lenguaje…", ["compilado de bajo nivel", "interpretado de alto nivel", "de bloques", "ensamblador"], 1, "Se ejecuta instrucción a instrucción."],
    ["input() devuelve siempre…", ["un entero", "un texto (str)", "un booleano", "un decimal"], 1, "Hay que convertirlo con int() o float()."],
    ["En Python, la sangría…", ["es opcional", "indica qué instrucciones forman un bloque", "solo es estética", "debe ser de 1 espacio"], 1, "Su error produce IndentationError."],
    ["El resultado de 17 // 5 es…", ["3.4", "3", "2", "85"], 1, "División entera."],
    ["El resultado de 17 % 5 es…", ["3", "2", "3.4", "12"], 1, "Resto de la división."],
    ["2 ** 4 vale…", ["8", "6", "16", "24"], 2, "Potencia."],
    ["¿Qué operador compara si dos valores son iguales?", ["=", "==", "!=", "=>"], 1, "= es asignación."],
    ["(5 > 3) and (2 > 4) vale…", ["True", "False", "None", "error"], 1, "and exige que ambas sean verdaderas."],
    ["Con nota = 9.5, ¿qué muestra un if que comprueba primero nota >= 5 → «Aprobado», luego elif nota >= 9 → «Sobresaliente»?", ["Sobresaliente", "Aprobado", "Ambos", "Nada"], 1, "Solo se ejecuta el primer bloque verdadero."],
    ["range(2, 8) genera…", ["2 a 8", "2, 3, 4, 5, 6, 7", "8 números", "0 a 8"], 1, "El final no se incluye."],
    ["Un while cuya condición nunca cambia produce…", ["un error de sintaxis", "un bucle infinito", "una función", "una lista"], 1, "Nunca termina."],
    ["Una variable que va sumando valores en un bucle es…", ["un contador", "un acumulador", "un índice", "un parámetro"], 1, "El contador suma de uno en uno."],
    ["La palabra que devuelve un resultado desde una función es…", ["print", "return", "def", "input"], 1, "print solo muestra en pantalla."],
    ["Si lista = [4, 8, 15, 16], lista[2] es…", ["8", "15", "16", "4"], 1, "Los índices empiezan en 0."],
    ["Para acceder al valor de la clave \"nota\" de un diccionario d se escribe…", ["d.nota", "d[\"nota\"]", "d(nota)", "d[nota()]"], 1, "Se accede por clave entre corchetes."],
    ["La búsqueda binaria exige que la lista esté…", ["vacía", "ordenada", "en un diccionario", "invertida"], 1, "Descarta la mitad en cada paso."],
    ["int(\"hola\") produce un error de tipo…", ["SyntaxError", "ValueError", "IndexError", "NameError"], 1, "El texto no representa un número."],
  ],
  examen: [
    ["¿Qué muestra? x = 5; x = x * 2 + 1; print(x)", ["11", "15", "7", "10"], 0, "5 · 2 + 1 = 11."],
    ["¿Qué valor tiene s al terminar? s = 0; for i in range(1, 5): s += i", ["15", "10", "5", "4"], 1, "1 + 2 + 3 + 4 = 10."],
    ["¿Cuántas veces se ejecuta el cuerpo de for i in range(0, 20, 3)?", ["6", "7", "20", "3"], 1, "0, 3, 6, 9, 12, 15, 18."],
    ["¿Qué muestra? n = 10; while n > 1: n = n // 2; print(n)", ["0", "1", "2", "5"], 1, "10 → 5 → 2 → 1, y se sale."],
    ["¿Qué devuelve f(3)? def f(x): return x ** 2 - x", ["6", "9", "3", "0"], 0, "9 − 3 = 6."],
    ["Con p = \"programa\", ¿qué es p[0:4]?", ["\"prog\"", "\"progr\"", "\"rogr\"", "\"a\""], 0, "Índices 0, 1, 2 y 3."],
    ["notas = [6, 9, 4]; notas.append(7); notas.sort(); ¿qué es notas[1]?", ["6", "7", "4", "9"], 0, "[4, 6, 7, 9]."],
    ["¿Cuántas comparaciones hace como máximo la búsqueda binaria en una lista ordenada de 1024 elementos?", ["1024", "512", "unas 10-11", "32"], 2, "2¹⁰ = 1024."],
  ],
  feynman: ["Qué es un algoritmo y cuáles son los pilares del pensamiento computacional", "Cómo se representa un algoritmo con un diagrama de flujo y en pseudocódigo", "Cómo funcionan if, elif y else y por qué importa el orden", "Qué diferencia hay entre un bucle while y uno for", "Qué hacen los parámetros y return en una función", "Por qué la búsqueda binaria es tan rápida"],
  mapa: ["PROGRAMACIÓN", [["Diseño", "algoritmo · diagrama · pseudocódigo"], ["Python", "variables · tipos · operadores"], ["Control", "if/elif/else · while · for"], ["Estructura", "funciones · listas · diccionarios"]]],
  tarjetas: [
    ["Algoritmo", "Secuencia finita, ordenada y precisa de pasos con entrada y salida."],
    ["Pensamiento computacional", "Descomposición, patrones, abstracción y algoritmos."],
    ["Diagrama de flujo", "Óvalo: inicio/fin. Paralelogramo: E/S. Rectángulo: proceso. Rombo: decisión."],
    ["Compilador e intérprete", "Traduce todo de una vez / instrucción a instrucción (Python)."],
    ["print e input", "print muestra; input lee texto (convertir con int o float)."],
    ["Tipos de Python", "int, float, str y bool."],
    ["Operadores", "// división entera, % resto, ** potencia, == igual, and/or/not."],
    ["Condicional", "if … elif … else: se ejecuta solo el primer bloque verdadero."],
    ["Bucles", "while: mientras se cumpla; for: recorre una secuencia o range."],
    ["Función", "def nombre(parámetros): … return resultado."],
    ["Lista y diccionario", "Lista: [ ] con índices desde 0. Diccionario: {clave: valor}."],
    ["Errores", "Sintaxis, ejecución (excepciones) y lógicos."],
  ],
  ejemplos: [
    ["Escribe un programa que pida dos números y muestre el mayor o indique si son iguales.", ["Leer los dos números y convertirlos a float.", "Comparar con if, elif y else.", "Mostrar el resultado."], "a = float(input(\"Primer número: \"))\nb = float(input(\"Segundo número: \"))\nif a > b:\n    print(\"El mayor es\", a)\nelif b > a:\n    print(\"El mayor es\", b)\nelse:\n    print(\"Son iguales\")"],
    ["Pide números hasta que el usuario escriba 0 y muestra cuántos ha escrito y su suma.", ["No se sabe cuántos números habrá: bucle while.", "Contador y acumulador inicializados a 0.", "Se lee el primero antes del bucle y el siguiente al final de cada iteración."], "contador = 0\nsuma = 0\nn = float(input(\"Número (0 para terminar): \"))\nwhile n != 0:\n    contador += 1\n    suma += n\n    n = float(input(\"Número (0 para terminar): \"))\nprint(f\"Has escrito {contador} números que suman {suma}\")"],
    ["Escribe una función que reciba una lista de notas y devuelva la media, el número de aprobados y la nota máxima.", ["La media es sum / len (cuidado con la lista vacía).", "Los aprobados se cuentan con un contador en un for.", "Se devuelven tres valores a la vez."], "def resumen(notas):\n    if len(notas) == 0:\n        return 0, 0, None\n    aprobados = 0\n    for n in notas:\n        if n >= 5:\n            aprobados += 1\n    return sum(notas) / len(notas), aprobados, max(notas)\n\nmedia, apr, maxima = resumen([6, 4.5, 8, 9.5, 3])\n# media = 6.2, apr = 3, maxima = 9.5"],
    ["Cuenta cuántas veces aparece cada palabra en una frase.", ["Pasar a minúsculas y trocear con split().", "Recorrer las palabras con for.", "Usar un diccionario: si la palabra ya está, sumar 1; si no, crearla con 1."], "frase = \"el gato y el perro y el pez\"\nconteo = {}\nfor p in frase.lower().split():\n    if p in conteo:\n        conteo[p] += 1\n    else:\n        conteo[p] = 1\nprint(conteo)\n# {'el': 3, 'gato': 1, 'y': 2, 'perro': 1, 'pez': 1}"],
    ["Programa un juego de adivinar un número del 1 al 100 con pistas «mayor» o «menor» y número de intentos.", ["El ordenador elige el número con random.randint.", "Bucle while hasta acertar.", "En cada intento se da una pista y se cuenta."], "import random\nsecreto = random.randint(1, 100)\nintentos = 0\nn = 0\nwhile n != secreto:\n    n = int(input(\"Adivina (1-100): \"))\n    intentos += 1\n    if n < secreto:\n        print(\"Es mayor\")\n    elif n > secreto:\n        print(\"Es menor\")\nprint(f\"¡Acertaste en {intentos} intentos!\")"],
    ["Haz la traza de este código y di qué muestra: x = 1; for i in range(3): x = x * 2 + i; print(x).", ["Inicio: x = 1.", "i = 0: x = 1 · 2 + 0 = 2.", "i = 1: x = 2 · 2 + 1 = 5.", "i = 2: x = 5 · 2 + 2 = 12."], "Muestra 12."],
  ],
  errores: [
    "Confundir = (asignación) con == (comparación) en una condición.",
    "Olvidar convertir con int() o float() lo que devuelve input() y operar con textos.",
    "Olvidar los dos puntos o sangrar mal los bloques de if, for, while y def.",
    "Empezar a contar las posiciones de una lista desde 1 en lugar de 0.",
    "No inicializar contadores y acumuladores antes del bucle, o hacerlo dentro de él.",
    "Usar print en lugar de return en una función cuyo resultado se necesita después.",
  ],
  ejercicios: {
    b: [
      ["Define algoritmo e indica sus características.", "Secuencia de instrucciones que resuelve un problema; debe ser finita, ordenada, precisa (sin ambigüedad) y tener entrada y salida."],
      ["Explica con un ejemplo cotidiano qué es la descomposición.", "Dividir un problema grande en partes más pequeñas. Preparar una fiesta: invitaciones, comida, música, decoración; cada parte se resuelve por separado."],
      ["Indica el símbolo de diagrama de flujo para: leer un número, sumar dos valores, comprobar si es positivo, terminar.", "Paralelogramo, rectángulo, rombo y óvalo."],
      ["Diferencia compilador e intérprete y di cuál usa Python.", "El compilador traduce todo el programa de una vez y genera un ejecutable; el intérprete traduce y ejecuta línea a línea. Python usa un intérprete."],
      ["Escribe un programa que pida tu nombre y te salude.", "nombre = input(\"¿Cómo te llamas? \")\nprint(f\"Hola, {nombre}\")"],
      ["Indica el tipo de: 42, 3.0, \"42\", False.", "int, float, str y bool."],
      ["Calcula: 23 // 4, 23 % 4, 2 ** 5, 10 / 4.", "5, 3, 32 y 2.5."],
      ["Evalúa con a = 3 y b = 7: a < b, a == 3 and b > 10, not (a > b), a != 3 or b == 7.", "True, False, True y True."],
      ["¿Qué números genera range(5), range(3, 8) y range(10, 0, -3)?", "0-4; 3, 4, 5, 6, 7; 10, 7, 4, 1."],
      ["Escribe un bucle que muestre los números pares del 2 al 20.", "for i in range(2, 21, 2):\n    print(i)"],
      ["Con colores = [\"rojo\", \"verde\", \"azul\"], ¿qué valen colores[0], colores[-1] y len(colores)?", "\"rojo\", \"azul\" y 3."],
      ["Clasifica el error: print(\"hola\" ; 10 / 0 ; un programa que calcula mal la media porque divide entre 10 en vez de entre el número de datos.", "Sintaxis (falta el paréntesis), ejecución (ZeroDivisionError) y lógico."],
    ],
    m: [
      ["Escribe en pseudocódigo un algoritmo que lea tres números y muestre el mayor.", "Leer a, b, c\nmayor ← a\nSi b > mayor entonces mayor ← b\nSi c > mayor entonces mayor ← c\nEscribir mayor"],
      ["Escribe un programa que pida la edad y diga si es menor (menos de 18), adulto (18 a 64) o jubilado (65 o más).", "edad = int(input(\"Edad: \"))\nif edad < 18:\n    print(\"Menor\")\nelif edad < 65:\n    print(\"Adulto\")\nelse:\n    print(\"Jubilado\")"],
      ["Escribe un programa que diga si un año es bisiesto (divisible entre 4 y no entre 100, o divisible entre 400).", "a = int(input(\"Año: \"))\nif (a % 4 == 0 and a % 100 != 0) or a % 400 == 0:\n    print(\"Bisiesto\")\nelse:\n    print(\"No bisiesto\")"],
      ["Muestra la tabla de multiplicar del número que elija el usuario.", "n = int(input(\"Número: \"))\nfor i in range(1, 11):\n    print(f\"{n} x {i} = {n * i}\")"],
      ["Pide una nota y repítelo mientras no esté entre 0 y 10.", "nota = float(input(\"Nota: \"))\nwhile nota < 0 or nota > 10:\n    print(\"Nota no válida\")\n    nota = float(input(\"Nota: \"))"],
      ["Calcula la suma de los números del 1 al 100 con un bucle y comprueba con la fórmula de Gauss.", "s = 0\nfor i in range(1, 101):\n    s += i\nprint(s)   # 5050 = 100 · 101 / 2"],
      ["Escribe una función es_primo(n) que devuelva True si n es primo.", "def es_primo(n):\n    if n < 2:\n        return False\n    for d in range(2, n):\n        if n % d == 0:\n            return False\n    return True"],
      ["Escribe una función que convierta grados Celsius a Fahrenheit (F = C · 9/5 + 32) y úsala para mostrar la tabla de 0 a 40 °C de 10 en 10.", "def a_fahrenheit(c):\n    return c * 9 / 5 + 32\n\nfor c in range(0, 41, 10):\n    print(c, \"°C =\", a_fahrenheit(c), \"°F\")"],
      ["Dada temperaturas = [18, 21, 25, 19, 30, 27, 22], muestra la máxima, la mínima, la media y cuántos días superan 24 °C.", "t = [18, 21, 25, 19, 30, 27, 22]\ncalor = 0\nfor x in t:\n    if x > 24:\n        calor += 1\nprint(max(t), min(t), sum(t) / len(t), calor)   # 30 18 23.14… 3"],
      ["Cuenta las vocales de una frase.", "frase = input(\"Frase: \").lower()\nvocales = 0\nfor letra in frase:\n    if letra in \"aeiouáéíóú\":\n        vocales += 1\nprint(vocales)"],
      ["Crea un diccionario con los precios de tres productos y calcula el total de una compra de 2 unidades de cada uno.", "precios = {\"pan\": 1.2, \"leche\": 0.95, \"huevos\": 2.4}\ntotal = 0\nfor producto, precio in precios.items():\n    total += 2 * precio\nprint(f\"Total: {total:.2f} €\")   # 9.10 €"],
      ["Haz la traza: a = 0; b = 1; for i in range(5): a, b = b, a + b; print(a). ¿Qué sucesión calcula?", "a toma los valores 1, 1, 2, 3, 5: muestra 5. Es la sucesión de Fibonacci."],
      ["Encuentra y corrige el error lógico: def media(l): s = 0; for x in l: s += x; return s / 5", "Divide siempre entre 5 aunque la lista tenga otro tamaño. Corrección: return s / len(l) (y comprobar que la lista no esté vacía)."],
      ["Escribe en JavaScript lo necesario para que un botón con id \"modo\" alterne la clase \"oscuro\" del body.", "document.getElementById(\"modo\").addEventListener(\"click\", () => {\n  document.body.classList.toggle(\"oscuro\");\n});"],
    ],
    a: [
      ["Implementa la búsqueda binaria en Python: una función que devuelva la posición de un valor en una lista ordenada o −1.", "def binaria(lista, valor):\n    izq, der = 0, len(lista) - 1\n    while izq <= der:\n        medio = (izq + der) // 2\n        if lista[medio] == valor:\n            return medio\n        elif lista[medio] < valor:\n            izq = medio + 1\n        else:\n            der = medio - 1\n    return -1"],
      ["Implementa el método de la burbuja para ordenar una lista sin usar sort().", "def burbuja(v):\n    n = len(v)\n    for i in range(n - 1):\n        for j in range(n - 1 - i):\n            if v[j] > v[j + 1]:\n                v[j], v[j + 1] = v[j + 1], v[j]\n    return v"],
      ["¿Cuántas comparaciones hace la burbuja en el peor caso con n = 100 elementos? ¿Y con 1000?", "(n − 1) + (n − 2) + … + 1 = n(n − 1)/2. Con 100: 4950. Con 1000: 499 500. Al multiplicar los datos por 10, el trabajo se multiplica por unos 100."],
      ["Escribe un programa que pida una contraseña y compruebe que tiene al menos 12 caracteres, una mayúscula, una minúscula y un número.", "c = input(\"Contraseña: \")\nmay = min_ = num = False\nfor ch in c:\n    if ch.isupper(): may = True\n    elif ch.islower(): min_ = True\n    elif ch.isdigit(): num = True\nif len(c) >= 12 and may and min_ and num:\n    print(\"Robusta\")\nelse:\n    print(\"Débil\")"],
      ["Escribe una función que reciba un texto y devuelva si es un palíndromo, ignorando espacios y mayúsculas.", "def palindromo(t):\n    t = t.lower().replace(\" \", \"\")\n    return t == t[::-1]\n\npalindromo(\"Anita lava la tina\")   # True"],
      ["Programa un cajero que, dada una cantidad, la desglose en el menor número de billetes y monedas de 50, 20, 10, 5, 2 y 1 €.", "cantidad = int(input(\"Cantidad: \"))\nfor v in [50, 20, 10, 5, 2, 1]:\n    n = cantidad // v\n    if n > 0:\n        print(n, \"de\", v, \"€\")\n    cantidad = cantidad % v"],
      ["Simula 10 000 lanzamientos de dos dados y cuenta cuántas veces sale cada suma. ¿Cuál es la más frecuente y por qué?", "import random\nconteo = {}\nfor _ in range(10000):\n    s = random.randint(1, 6) + random.randint(1, 6)\n    conteo[s] = conteo.get(s, 0) + 1\nprint(conteo)\n# La más frecuente es 7 (≈ 1/6 de las veces): hay 6 combinaciones que suman 7, más que ninguna otra."],
      ["Escribe una función que reciba una lista de diccionarios de alumnos ({\"nombre\", \"nota\"}) y devuelva los nombres de quienes superan la media del grupo.", "def sobre_media(alumnos):\n    media = sum(a[\"nota\"] for a in alumnos) / len(alumnos)\n    return [a[\"nombre\"] for a in alumnos if a[\"nota\"] > media]"],
      ["Explica por qué try/except mejora este programa: edad = int(input()); print(100 / edad).", "Si el usuario escribe un texto, int() lanza ValueError; si escribe 0, la división lanza ZeroDivisionError, y el programa se detiene. Con try/except se capturan ambos, se muestra un mensaje claro y se puede volver a pedir el dato en un bucle."],
      ["Debate: ¿es correcto entregar en clase un programa generado íntegramente por un asistente de IA? Argumenta sobre aprendizaje, autoría y calidad.", "Debe valorar que el objetivo es aprender a pensar y programar; entregar algo no entendido no lo consigue y es plagio si no se declara. La IA puede ayudar a explicar errores o sugerir ideas, pero el código debe entenderse, probarse, citarse su uso y respetar las normas del profesorado; además puede contener errores o problemas de seguridad."],
    ],
  },
  glosario: [
    ["Algoritmo", "Secuencia finita y ordenada de pasos que resuelve un problema."],
    ["Pensamiento computacional", "Forma de razonar para plantear problemas resolubles por un ordenador."],
    ["Abstracción", "Quedarse con lo esencial de un problema."],
    ["Diagrama de flujo", "Representación gráfica de un algoritmo con símbolos normalizados."],
    ["Pseudocódigo", "Descripción de un algoritmo en lenguaje casi natural."],
    ["Intérprete", "Programa que traduce y ejecuta el código línea a línea."],
    ["Variable", "Nombre que hace referencia a un valor en memoria."],
    ["Condicional", "Estructura que ejecuta un bloque u otro según una condición."],
    ["Bucle", "Estructura que repite un bloque de instrucciones."],
    ["Acumulador", "Variable que va sumando valores dentro de un bucle."],
    ["Función", "Bloque de código con nombre, parámetros y valor devuelto."],
    ["Parámetro", "Variable que recibe una función al ser llamada."],
    ["Lista", "Secuencia ordenada y modificable de elementos con índices desde 0."],
    ["Diccionario", "Colección de pares clave: valor."],
    ["Excepción", "Error que se produce durante la ejecución de un programa."],
    ["Depuración", "Proceso de localizar y corregir errores."],
    ["Evento", "Suceso (clic, tecla) al que responde un programa."],
    ["Control de versiones", "Sistema que registra los cambios del código y permite volver atrás."],
  ],
  situacion: {
    titulo: "Una app para el comedor del instituto",
    reto: "Por parejas, programad en Python una aplicación de consola que ayude a gestionar los menús del comedor: registrar platos con sus alérgenos, calcular el coste semanal y avisar de los alérgenos de cada día.",
    pasos: [
      "Analizad el problema con pensamiento computacional y dibujad el diagrama de flujo del menú principal.",
      "Diseñad las estructuras de datos: un diccionario por plato con nombre, precio y lista de alérgenos.",
      "Programad las funciones (añadir plato, mostrar menú, coste semanal, buscar alérgenos) por separado.",
      "Validad los datos de entrada con bucles y try/except.",
      "Probad con casos normales y límite, anotando errores y correcciones.",
      "Documentad el código, subidlo a un repositorio con control de versiones y presentadlo.",
    ],
    producto: "Programa en Python comentado, diagramas, tabla de pruebas y repositorio con el historial de cambios.",
    evaluacion: [
      "El algoritmo está bien diseñado y se corresponde con el código.",
      "Se usan correctamente variables, condicionales, bucles, funciones y estructuras de datos.",
      "El programa valida los datos y supera las pruebas, incluidos los casos límite.",
      "El código es legible, está documentado y se ha trabajado con control de versiones.",
    ],
  },
  familias: [
    "Pedidle que os explique un algoritmo cotidiano (hacer la compra) con un diagrama de flujo.",
    "Proponedle programar un pequeño juego de preguntas sobre la familia y jugadlo juntos.",
    "Hablad de las aplicaciones que usáis y de qué decisiones toman por vosotros sus algoritmos.",
    "Animadle a participar en concursos o clubes de programación del centro o de su ciudad.",
  ],
  saberes: "Programación: pensamiento computacional, algoritmos, diagramas de flujo y pseudocódigo, lenguajes y paradigmas, programación estructurada en Python (entrada y salida, variables, tipos, operadores, condicionales, bucles, funciones, listas, cadenas y diccionarios), algoritmos de búsqueda y ordenación, depuración y pruebas, programación por eventos y JavaScript, buenas prácticas, licencias y ética (Tecnologías de la Información y la Comunicación I, optativa de 1º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Programación desenchufada: ordenar a la clase con el método de la burbuja intercambiando sitios.",
    "Kata semanal: un problema corto (primos, palíndromos, cambio) resuelto por parejas y comparado.",
    "Hacer trazas en la pizarra antes de ejecutar los programas para predecir su salida.",
    "Crear un pequeño videojuego por eventos con bloques y después reescribir su lógica en Python.",
  ],
  fuentes: [
    { t: "Documentación oficial de Python en español", url: "https://docs.python.org/es/3/" },
    { t: "Code.org: recursos de ciencias de la computación", url: "https://code.org/" },
    { t: "Mars Climate Orbiter, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Mars_Climate_Orbiter" },
  ],
}));
