// Tecnologías de la Información y la Comunicación II, 2º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
// Estructuras de datos de Python (listas, tuplas, conjuntos, diccionarios, pilas, colas, árboles y grafos) y ficheros.
const B = require("./_bach2-tic");

// Lista con índices positivos y negativos.
const indices = () => {
  const v = ["7", "3", "9", "1", "5"];
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Una lista de cinco elementos con sus índices positivos de 0 a 4 y negativos de -5 a -1, y el corte lista[1:4] que toma los elementos de las posiciones 1, 2 y 3">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${B.tx(130, 22, "lista = [7, 3, 9, 1, 5]", { fs: 13, maxW: 236, bold: true, font: B.D })}
  ${v.map((x, i) => `<rect x="${30 + i * 40}" y="58" width="40" height="36" fill="${i >= 1 && i <= 3 ? "var(--leaf)" : "var(--card)"}" fill-opacity="${i >= 1 && i <= 3 ? ".25" : "1"}" stroke="var(--pen)" stroke-width="2"/>${B.tx(50 + i * 40, 82, x, { fs: 16, maxW: 30, bold: true })}
  ${B.tx(50 + i * 40, 50, i, { fs: 11, maxW: 30, bold: true, color: "var(--pen)" })}${B.tx(50 + i * 40, 110, i - 5, { fs: 11, maxW: 30, bold: true, color: "var(--red)" })}`).join("")}
  ${B.tx(16, 50, "+", { fs: 11, maxW: 12, bold: true, color: "var(--pen)" })}${B.tx(16, 110, "−", { fs: 11, maxW: 12, bold: true, color: "var(--red)" })}
  <path d="M70 124 H 190" stroke="var(--leaf)" stroke-width="2.5"/><path d="M70 118 V 130 M190 118 V 130" stroke="var(--leaf)" stroke-width="2.5"/>
  ${B.tx(130, 146, "lista[1:4] → [3, 9, 1]", { fs: 12, maxW: 200, bold: true, color: "var(--leaf)" })}
  ${B.tx(130, 166, "el final del corte no se incluye", { fs: 10.5, maxW: 220 })}
</svg>`;
};

// Pila y cola.
const pilaCola = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Una pila, en la que se apila y desapila por arriba (el último en entrar es el primero en salir), y una cola, en la que se entra por un extremo y se sale por el otro (el primero en entrar es el primero en salir)">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <defs><marker id="pc1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
  ${B.tx(62, 20, "Pila (LIFO)", { fs: 12.5, maxW: 110, bold: true, color: "var(--pen)" })}
  <path d="M30 50 V 160 H 94 V 50" stroke="var(--pen)" stroke-width="2.5" fill="none"/>
  ${["C", "B", "A"].map((x, i) => `<rect x="36" y="${92 + i * 22}" width="52" height="19" rx="4" fill="var(--pen)" fill-opacity="${0.5 - i * 0.12}"/>${B.tx(62, 106 + i * 22, x, { fs: 11, maxW: 40, bold: true })}`).join("")}
  <path d="M52 44 V 84" stroke="var(--muted)" stroke-width="2" marker-end="url(#pc1)"/><path d="M74 84 V 44" stroke="var(--muted)" stroke-width="2" marker-end="url(#pc1)"/>
  ${B.tx(40, 40, "push", { fs: 9.5, maxW: 30, bold: true, color: "var(--muted)" })}${B.tx(86, 40, "pop", { fs: 9.5, maxW: 30, bold: true, color: "var(--muted)" })}
  ${B.tx(190, 20, "Cola (FIFO)", { fs: 12.5, maxW: 110, bold: true, color: "var(--red)" })}
  <path d="M130 84 H 250 M130 116 H 250" stroke="var(--red)" stroke-width="2.5"/>
  ${["A", "B", "C"].map((x, i) => `<rect x="${144 + i * 32}" y="89" width="28" height="22" rx="4" fill="var(--red)" fill-opacity="${0.45 - i * 0.1}"/>${B.tx(158 + i * 32, 104, x, { fs: 11, maxW: 24, bold: true })}`).join("")}
  <path d="M250 140 H 228" stroke="var(--muted)" stroke-width="2" marker-end="url(#pc1)"/><path d="M152 140 H 130" stroke="var(--muted)" stroke-width="2" marker-end="url(#pc1)"/>
  ${B.tx(238, 156, "entra", { fs: 9.5, maxW: 40, bold: true, color: "var(--muted)" })}${B.tx(142, 156, "sale", { fs: 9.5, maxW: 40, bold: true, color: "var(--muted)" })}
  ${B.tx(62, 176, "último en entrar, primero en salir", { fs: 8.5, maxW: 118 })}${B.tx(190, 176, "primero en entrar, primero en salir", { fs: 8.5, maxW: 124 })}
</svg>`;

// Árbol y grafo.
const arbolGrafo = () => {
  const n = (x, y, t, c) => `<circle cx="${x}" cy="${y}" r="11" fill="var(--card)" stroke="${c}" stroke-width="2.2"/>${B.tx(x, y + 4, t, { fs: 10, maxW: 18, bold: true, color: c })}`;
  const l = (a, b, c, d) => `<path d="M${a} ${b} L ${c} ${d}" stroke="var(--line)" stroke-width="2"/>`;
  const P = "var(--pen)", R = "var(--red)";
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Un árbol con una raíz, nodos hijos y hojas, y un grafo con nodos unidos por aristas que forman ciclos">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${B.tx(66, 20, "Árbol", { fs: 12.5, maxW: 110, bold: true, color: P })}${B.tx(194, 20, "Grafo", { fs: 12.5, maxW: 110, bold: true, color: R })}
  ${l(66, 48, 34, 92)}${l(66, 48, 98, 92)}${l(34, 92, 18, 136)}${l(34, 92, 50, 136)}${l(98, 92, 98, 136)}
  ${n(66, 48, "R", P)}${n(34, 92, "A", P)}${n(98, 92, "B", P)}${n(18, 136, "C", P)}${n(50, 136, "D", P)}${n(98, 136, "E", P)}
  ${B.tx(66, 166, "raíz, ramas y hojas", { fs: 10, maxW: 116 })}
  ${l(160, 56, 226, 52)}${l(160, 56, 150, 120)}${l(226, 52, 236, 118)}${l(150, 120, 236, 118)}${l(160, 56, 236, 118)}${l(194, 150, 150, 120)}${l(194, 150, 236, 118)}
  ${n(160, 56, "1", R)}${n(226, 52, "2", R)}${n(150, 120, "3", R)}${n(236, 118, "4", R)}${n(194, 150, "5", R)}
  ${B.tx(194, 174, "nodos y aristas, con ciclos", { fs: 10, maxW: 116 })}
</svg>`;
};

module.exports = B.tema(B.textos({
  titulo: "Estructuras de datos y ficheros",
  minutos: 120,
  objetivos: [
    "Clasificar las estructuras de datos y elegir la más adecuada para cada problema",
    "Manejar listas, listas anidadas, tuplas, conjuntos y diccionarios con sus métodos principales",
    "Procesar cadenas de caracteres y dar formato a los resultados",
    "Implementar pilas y colas y describir árboles y grafos",
    "Leer y escribir ficheros de texto de forma segura con with",
    "Guardar y recuperar datos estructurados en los formatos CSV y JSON",
  ],
  claves: ["estructura de datos", "lista", "índice", "corte", "matriz", "tupla", "conjunto", "diccionario", "clave", "pila", "cola", "árbol", "grafo", "fichero", "CSV", "JSON"],
  pregunta: {
    texto: "Tu móvil guarda cientos de contactos y, cuando escribes «Ma», te sugiere al instante María, Marcos y Mamá. ¿Cómo encuentra tan rápido lo que buscas entre tantos datos?",
    respuesta: "Porque los datos no están amontonados: están organizados en <mark>estructuras de datos</mark> pensadas para cada operación. Los contactos se guardan ordenados o en estructuras como los diccionarios y los árboles, que permiten encontrar un elemento sin recorrerlos todos. Además, se guardan en <b>ficheros</b> o bases de datos para que no se pierdan al apagar el móvil. Elegir bien cómo se organizan los datos es tan importante como el propio algoritmo.",
  },
  lectura: {
    titulo: "Algoritmos + estructuras de datos = programas",
    html: `<p>En 1976, el informático suizo Niklaus Wirth, creador del lenguaje Pascal, publicó un libro con un título que se convirtió en un lema: <i>Algoritmos + estructuras de datos = programas</i>. Su idea era sencilla pero profunda: un programa no es solo una lista de instrucciones, sino también la forma en que se organizan los datos sobre los que actúan esas instrucciones.</p>
    <p>Un ejemplo lo deja claro. Imagina que tienes que comprobar si un nombre está en una lista de un millón de usuarios. Si los nombres están amontonados sin orden, hay que mirar uno por uno: hasta un millón de comparaciones. Si están en un <b>conjunto</b> o en un <b>diccionario</b> de Python, la respuesta llega casi al instante, sea cual sea el tamaño. El algoritmo es el mismo, «buscar»; lo que cambia es la estructura.</p>
    <p>Las redes sociales, los navegadores GPS o los motores de búsqueda funcionan gracias a estructuras como las colas, los árboles y los grafos. En este tema conocerás las estructuras más importantes de Python y aprenderás a guardar los datos en ficheros para que perduren cuando el programa termina.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Qué es una estructura de datos",
      html: `<p>Los tipos simples (<code>int</code>, <code>float</code>, <code>bool</code>) guardan un único valor. Pero los programas trabajan con colecciones: las notas de una clase, los productos de una tienda, los mensajes de un chat. Una <mark>estructura de datos</mark> es una forma de organizar y almacenar un conjunto de datos en la memoria para poder usarlos de manera eficiente. Cada estructura define cómo se guardan los datos y qué <b>operaciones</b> permite: añadir, eliminar, buscar, recorrer u ordenar.</p>
      <p>Las estructuras se clasifican de varias formas:</p>
      <ul><li><b>Estáticas o dinámicas</b>: las estáticas tienen un tamaño fijo desde que se crean (los <i>arrays</i> de lenguajes como C); las dinámicas pueden crecer y menguar durante la ejecución, como las listas de Python.</li>
      <li><b>Lineales o no lineales</b>: en las lineales cada elemento tiene un anterior y un siguiente (listas, pilas, colas); en las no lineales un elemento puede relacionarse con varios (árboles, grafos).</li>
      <li><b>Mutables o inmutables</b>: si se pueden modificar tras crearlas o no.</li></ul>
      <p>Un concepto clave es el de <b>tipo abstracto de datos</b> (TAD): se describe una estructura por lo que hace (sus operaciones), no por cómo está programada por dentro. Una pila, por ejemplo, se define por «apilar» y «desapilar», y puede implementarse con una lista o de otra forma. Python incorpora cuatro colecciones básicas: <b>listas</b>, <b>tuplas</b>, <b>conjuntos</b> y <b>diccionarios</b>, con las que se pueden construir todas las demás.</p>`,
      svg: B.rejilla("Las cuatro colecciones básicas de Python", ["Tipo", "Sintaxis", "Orden", "Mutable"], [["list", "[1, 2]", "sí", "sí"], ["tuple", "(1, 2)", "sí", "no"], ["set", "{1, 2}", "no", "sí"], ["dict", "{\"a\": 1}", "sí", "sí"]], { t: "Colecciones de Python" }),
    },
    {
      h: "Las listas en profundidad",
      html: `<p>Una <mark>lista</mark> es una secuencia ordenada y mutable de elementos, que pueden ser de cualquier tipo. Se accede a cada elemento por su <b>índice</b>, que empieza en 0; los índices negativos cuentan desde el final (<code>lista[-1]</code> es el último). Un <b>corte</b> (<i>slice</i>) <code>lista[i:j]</code> devuelve una lista nueva con los elementos desde la posición <code>i</code> hasta la <code>j</code> sin incluirla; con un tercer número se indica el paso: <code>lista[::2]</code> toma uno de cada dos y <code>lista[::-1]</code> la invierte.</p>
      <p>Los métodos más útiles son: <code>append(x)</code> (añade al final), <code>insert(i, x)</code> (inserta en una posición), <code>extend(otra)</code> (añade los elementos de otra lista), <code>remove(x)</code> (borra la primera aparición), <code>pop(i)</code> (quita y devuelve el elemento de la posición i, por defecto el último), <code>index(x)</code>, <code>count(x)</code>, <code>sort()</code> y <code>reverse()</code>. Con <code>x in lista</code> se comprueba si un elemento está, y con <code>len(lista)</code> se obtiene su longitud.</p>
      <p>Al asignar <code>b = a</code> no se copia la lista: <code>a</code> y <code>b</code> son dos nombres para el mismo objeto, y cambiar una cambia la otra. Para copiarla hay que usar <code>a.copy()</code> o <code>a[:]</code>.</p>
      <p>Una lista puede contener otras listas: son las <b>listas anidadas</b>, que permiten representar <b>matrices</b> o tablas. El elemento de la fila <code>i</code> y la columna <code>j</code> es <code>m[i][j]</code>, y se recorren con dos bucles anidados:</p>
      ${B.code(`m = [[1, 2, 3],
     [4, 5, 6]]
print(m[1][2])            # 6
for fila in m:
    for x in fila:
        print(x, end=" ")
tabla = [[0] * 3 for _ in range(2)]   # matriz 2 × 3 de ceros`)}
      <p>Ojo: <code>[[0] * 3] * 2</code> crea dos referencias a la misma fila, así que cambiar una cambia las dos; por eso se usa una lista por comprensión.</p>`,
      svg: indices(),
    },
    {
      h: "Tuplas y conjuntos",
      html: `<p>Una <mark>tupla</mark> es una secuencia ordenada pero <b>inmutable</b>: una vez creada no se puede añadir, quitar ni cambiar ningún elemento. Se escribe entre paréntesis: <code>punto = (3, 5)</code>, <code>fecha = (21, 11, 2026)</code>. Se accede a sus elementos por índice y se pueden recorrer y cortar como las listas. Se usan para datos que forman una unidad y no deben cambiar: unas coordenadas, un color RGB <code>(255, 128, 0)</code> o un registro con nombre y nota. Como son inmutables, son más seguras y algo más rápidas, y pueden usarse como claves de diccionario. El <b>desempaquetado</b> permite asignar sus elementos a varias variables: <code>x, y = punto</code>. Así se intercambian dos variables en una línea: <code>a, b = b, a</code>.</p>
      <p>Un <mark>conjunto</mark> (<code>set</code>) es una colección <b>no ordenada</b> de elementos <b>sin repetir</b>. Se escribe entre llaves, <code>{"rojo", "verde"}</code>, o se crea con <code>set()</code>. Al convertir una lista en conjunto se eliminan los duplicados: <code>set([1, 2, 2, 3])</code> da <code>{1, 2, 3}</code>. Los conjuntos no tienen índices, pero comprobar si un elemento pertenece (<code>x in c</code>) es muchísimo más rápido que en una lista, porque internamente usan una <b>tabla hash</b>.</p>
      <p>Admiten las operaciones de la teoría de conjuntos:</p>
      ${B.code(`a = {"Ana", "Leo", "Eva"}      # club de ajedrez
b = {"Leo", "Iker"}             # club de robótica
a | b    # unión: los cuatro
a & b    # intersección: {'Leo'}
a - b    # diferencia: {'Ana', 'Eva'}
a ^ b    # diferencia simétrica: {'Ana', 'Eva', 'Iker'}`)}
      <p>Se añaden elementos con <code>add</code> y se quitan con <code>remove</code> o <code>discard</code> (este último no da error si el elemento no está).</p>`,
      svg: B.comparar("Tuplas frente a conjuntos", ["Tupla ( )", ["ordenada", "inmutable", "admite repetidos", "coordenadas, registros"]], ["Conjunto { }", ["sin orden ni índices", "mutable", "sin repetidos", "pertenencia rápida"]]),
    },
    {
      h: "Los diccionarios",
      html: `<p>Un <mark>diccionario</mark> (<code>dict</code>) guarda pares <b>clave: valor</b>. En lugar de acceder por posición, se accede por la clave, que debe ser única e inmutable (normalmente un texto o un número). Desde Python 3.7 conservan el orden de inserción. Son la estructura más versátil de Python: sirven para representar registros, contar frecuencias, hacer traducciones o guardar configuraciones.</p>
      ${B.code(`alumno = {"nombre": "Eva", "edad": 17, "notas": [8, 9.5]}
alumno["edad"]            # 17
alumno["curso"] = "2º B"  # añade una clave nueva
alumno.get("tel", "-")    # '-' si la clave no existe
del alumno["edad"]
for clave, valor in alumno.items():
    print(clave, valor)`)}
      <p>Acceder con corchetes a una clave inexistente produce un <code>KeyError</code>; el método <code>get(clave, defecto)</code> evita el error. Otros métodos útiles son <code>keys()</code>, <code>values()</code>, <code>items()</code>, <code>pop(clave)</code> y <code>update(otro)</code>. Con <code>clave in d</code> se comprueba si una clave existe.</p>
      <p>Un uso clásico es <b>contar frecuencias</b>: recorrer un texto y, para cada palabra, sumar 1 a su contador, <code>c[p] = c.get(p, 0) + 1</code>. También se pueden crear con comprensión: <code>{n: n ** 2 for n in range(5)}</code>.</p>
      <p>Las estructuras se pueden <b>anidar</b> libremente: una lista de diccionarios representa una tabla de registros (cada diccionario es una fila), y un diccionario de listas agrupa datos por categoría. Por ejemplo, <code>clase = [{"nombre": "Eva", "nota": 8}, {"nombre": "Leo", "nota": 6}]</code>. Esta forma de organizar los datos es la misma que usan el formato JSON y muchas bases de datos, como verás al final del tema.</p>`,
      svg: B.cajas("Usos de los diccionarios", [["Registro", "nombre, edad,|notas de un alumno"], ["Contador", "palabra → veces"], ["Traductor", "\"cat\" → \"gato\""], ["Índice", "DNI → persona"]], { t: "Clave → valor" }),
    },
    {
      h: "Las cadenas de caracteres",
      html: `<p>Una <mark>cadena</mark> (<code>str</code>) es una secuencia inmutable de caracteres. Como las listas, admite índices, cortes, <code>len</code>, <code>in</code> y recorrido con <code>for</code>, pero no se puede modificar: todos sus métodos devuelven una cadena nueva. Los más útiles son:</p>
      <ul><li><code>upper()</code>, <code>lower()</code>, <code>capitalize()</code>, <code>title()</code>: cambian mayúsculas y minúsculas.</li>
      <li><code>strip()</code>: quita los espacios y saltos de línea de los extremos; imprescindible al leer ficheros.</li>
      <li><code>split(sep)</code>: trocea la cadena y devuelve una lista; <code>sep.join(lista)</code> hace lo contrario.</li>
      <li><code>replace(a, b)</code>, <code>find(x)</code>, <code>count(x)</code>, <code>startswith(x)</code>, <code>endswith(x)</code>.</li>
      <li><code>isdigit()</code>, <code>isalpha()</code>, <code>isspace()</code>: comprueban el tipo de caracteres; útiles para validar datos.</li></ul>
      ${B.code(`linea = "  Eva;8.5;Madrid \\n"
campos = linea.strip().split(";")   # ['Eva', '8.5', 'Madrid']
nombre, nota = campos[0], float(campos[1])
print(f"{nombre:<10}|{nota:6.2f}")    # Eva       |  8.50`)}
      <p>Las <b>cadenas formateadas</b> o <i>f-strings</i>, que empiezan por <code>f</code>, permiten insertar valores entre llaves y darles formato: <code>{x:.2f}</code> muestra dos decimales, <code>{x:>8}</code> alinea a la derecha en ocho espacios y <code>{x:,}</code> separa los miles. Son la forma más clara de construir textos con datos.</p>
      <p>Internamente, cada carácter es un número según la codificación <b>Unicode</b>: <code>ord("A")</code> es 65 y <code>chr(65)</code> es «A». En los ficheros se guarda normalmente con la codificación <b>UTF-8</b>, que permite cualquier idioma, la ñ, los acentos y los emojis.</p>`,
      svg: B.rejilla("Métodos de cadenas", ["Método", "Resultado"], [["\" hola \".strip()", "\"hola\""], ["\"a;b\".split(\";\")", "[\"a\", \"b\"]"], ["\"-\".join([\"a\",\"b\"])", "\"a-b\""], ["\"ñu\".upper()", "\"ÑU\""], ["\"42\".isdigit()", "True"]], { t: "Trabajar con texto" }),
    },
    {
      h: "Pilas y colas",
      html: `<p>Algunas estructuras lineales restringen por dónde se añaden y se sacan los elementos. Esa restricción, lejos de ser un problema, las hace muy útiles.</p>
      <p>Una <mark>pila</mark> (<i>stack</i>) sigue la regla <b>LIFO</b> (<i>Last In, First Out</i>): el último elemento en entrar es el primero en salir, como una pila de platos. Sus operaciones son <b>apilar</b> (<i>push</i>), <b>desapilar</b> (<i>pop</i>) y consultar la cima. En Python se implementa con una lista usando <code>append</code> y <code>pop()</code>. Las pilas están en el botón «Deshacer» de los editores, en el historial «Atrás» del navegador, en la comprobación de paréntesis equilibrados y en la propia pila de llamadas a funciones.</p>
      <p>Una <mark>cola</mark> (<i>queue</i>) sigue la regla <b>FIFO</b> (<i>First In, First Out</i>): el primero en llegar es el primero en ser atendido, como la cola del comedor. Se <b>encola</b> por el final y se <b>desencola</b> por el principio. Se usan en la cola de impresión, en los mensajes de un chat, en los procesos que esperan al procesador o en las peticiones a un servidor web. Sacar el primer elemento de una lista con <code>pop(0)</code> es lento en listas grandes, porque hay que desplazar todos los demás; por eso se usa <code>deque</code> del módulo <code>collections</code>:</p>
      ${B.code(`pila = []
pila.append("a"); pila.append("b")
pila.pop()            # 'b'

from collections import deque
cola = deque()
cola.append("Ana"); cola.append("Leo")
cola.popleft()        # 'Ana'`)}
      <p>Existe también la <b>cola de prioridad</b>, en la que sale primero el elemento más importante (urgencias de un hospital), disponible en el módulo <code>heapq</code>.</p>`,
      svg: pilaCola(),
      video: B.V("ed-pilas", "Estructuras de datos lineales: pila, cola y lista"),
    },
    {
      h: "Estructuras no lineales: árboles y grafos",
      html: `<p>En las estructuras no lineales cada elemento, llamado <b>nodo</b>, puede estar relacionado con varios.</p>
      <p>Un <mark>árbol</mark> es una estructura jerárquica: tiene un nodo inicial, la <b>raíz</b>, del que cuelgan nodos <b>hijos</b>, que a su vez pueden tener sus propios hijos; los nodos sin hijos son las <b>hojas</b>. Cada nodo tiene un único padre, salvo la raíz. Los árboles aparecen en el sistema de carpetas del ordenador, en la estructura de una página web (el árbol DOM), en los árboles genealógicos, en los menús o en los árboles de decisión de la inteligencia artificial. Un caso muy importante es el <b>árbol binario de búsqueda</b>, en el que cada nodo tiene como máximo dos hijos, con los valores menores a la izquierda y los mayores a la derecha; permite buscar un dato descartando la mitad del árbol en cada paso.</p>
      <p>Un <mark>grafo</mark> es un conjunto de nodos (o vértices) unidos por <b>aristas</b>, sin jerarquía y con posibles ciclos. Las aristas pueden tener dirección (grafo dirigido: «A sigue a B» en una red social) y un <b>peso</b> (la distancia entre dos ciudades). Con grafos se representan las redes de carreteras y de metro, internet, las redes sociales o las relaciones entre páginas web. Sobre ellos se aplican algoritmos famosos, como el de <b>Dijkstra</b>, que calcula el camino más corto y usan los navegadores GPS.</p>
      <p>En Python, un grafo se representa fácilmente con un diccionario de listas, la <b>lista de adyacencia</b>: <code>g = {"A": ["B", "C"], "B": ["C"], "C": []}</code>. Un árbol, con diccionarios o listas anidadas, o con clases, como verás en el tema de programación orientada a objetos.</p>`,
      svg: arbolGrafo(),
    },
    {
      h: "Elegir la estructura adecuada",
      html: `<p>No existe una estructura mejor que las demás: cada una es eficiente en unas operaciones y lenta en otras. Elegir bien depende de qué se va a hacer con los datos con más frecuencia. Algunas pautas:</p>
      <ul><li>Si necesitas una secuencia ordenada que cambia y a la que accedes por posición, usa una <b>lista</b>.</li>
      <li>Si los datos forman un registro fijo que no debe cambiar, una <b>tupla</b>.</li>
      <li>Si solo importa si un elemento está o no, o quieres eliminar duplicados, un <b>conjunto</b>.</li>
      <li>Si buscas datos por un identificador (DNI, nombre de usuario, código de producto), un <b>diccionario</b>.</li>
      <li>Si el orden de llegada determina el de salida, una <b>cola</b>; si se deshace lo último, una <b>pila</b>.</li>
      <li>Si hay jerarquía, un <b>árbol</b>; si hay relaciones en red, un <b>grafo</b>.</li></ul>
      <p>La diferencia de rendimiento puede ser enorme. Comprobar <code>x in lista</code> obliga a recorrer la lista: el tiempo crece en proporción al número de elementos (se dice que es de orden <b>O(n)</b>). En cambio, <code>x in conjunto</code> o <code>clave in diccionario</code> calcula directamente dónde estaría el elemento con una función <b>hash</b>, y tarda prácticamente lo mismo con diez elementos que con diez millones (orden <b>O(1)</b>). Con un millón de búsquedas en una lista de un millón de elementos, la diferencia entre unos segundos y varias horas depende solo de la estructura elegida.</p>
`,
      svg: B.rejilla("Coste de las operaciones según la estructura", ["Operación", "Lista", "Set / dict"], [["¿Está x?", "lento O(n)", "rápido O(1)"], ["Acceso por posición", "rápido", "no hay"], ["Añadir al final", "rápido", "rápido"], ["Mantener orden", "sí", "set no"]], { t: "¿Cuál elijo?" }),
    },
    {
      h: "Los ficheros",
      html: `<p>Las variables viven en la <b>memoria RAM</b>, que es volátil: cuando el programa termina o se apaga el equipo, los datos desaparecen. Para que los datos <b>persistan</b> hay que guardarlos en un <mark>fichero</mark> (archivo) en un almacenamiento permanente, como un disco SSD o una memoria USB, o en una base de datos.</p>
      <p>Hay dos grandes tipos de ficheros:</p>
      <ul><li><b>De texto</b>: contienen caracteres legibles, organizados en líneas separadas por un salto de línea (<code>\\n</code>). Se pueden abrir con cualquier editor. Son ficheros de texto los <code>.txt</code>, <code>.csv</code>, <code>.json</code>, <code>.html</code> o el propio código <code>.py</code>.</li>
      <li><b>Binarios</b>: contienen bytes que solo entiende el programa que los creó: imágenes, sonidos, vídeos, documentos de ofimática o ejecutables. Se abren en Python añadiendo <code>b</code> al modo (<code>"rb"</code>, <code>"wb"</code>).</li></ul>
      <p>Cada fichero se localiza por su <b>ruta</b>. Una <b>ruta absoluta</b> indica el camino completo desde la raíz del sistema (<code>C:\\Users\\eva\\notas.txt</code> en Windows o <code>/home/eva/notas.txt</code> en Linux), mientras que una <b>ruta relativa</b> parte de la carpeta en la que se ejecuta el programa (<code>datos/notas.txt</code>). Como Windows usa la barra invertida y Linux y macOS la normal, es recomendable construir las rutas con el módulo <code>pathlib</code>, que funciona en todos los sistemas: <code>Path("datos") / "notas.txt"</code>.</p>`,
      svg: B.comparar("Ficheros de texto frente a ficheros binarios", ["Texto", ["caracteres legibles", "líneas con \\n", "txt, csv, json, py", "modo \"r\" / \"w\""]], ["Binario", ["bytes", "solo los lee su programa", "png, mp3, docx, exe", "modo \"rb\" / \"wb\""]]),
    },
    {
      h: "Leer y escribir ficheros de texto",
      html: `<p>Para trabajar con un fichero se <b>abre</b> con <code>open(ruta, modo, encoding="utf-8")</code>, se lee o se escribe y se <b>cierra</b>. El <b>modo</b> indica qué se va a hacer: <code>"r"</code> leer (da error si no existe), <code>"w"</code> escribir (crea el fichero o <b>borra</b> su contenido si ya existía), <code>"a"</code> añadir al final sin borrar y <code>"x"</code> crear uno nuevo (error si ya existe).</p>
      <p>La forma correcta es usar la instrucción <code>with</code>, que cierra el fichero automáticamente al terminar el bloque, incluso si se produce un error:</p>
      ${B.code(`with open("notas.txt", "w", encoding="utf-8") as f:
    f.write("Eva 8.5\\n")
    f.write("Leo 6\\n")

with open("notas.txt", encoding="utf-8") as f:
    for linea in f:
        nombre, nota = linea.split()
        print(nombre, float(nota))`)}
      <p>Para leer hay varias opciones: <code>f.read()</code> devuelve todo el contenido en una cadena; <code>f.readlines()</code>, una lista con las líneas; y recorrer el fichero con <code>for linea in f</code> lee línea a línea sin cargarlo entero en memoria, lo mejor para ficheros grandes. Cada línea incluye el salto de línea final, que se quita con <code>strip()</code>. Para escribir se usa <code>f.write(texto)</code>, que no añade el salto de línea, o <code>print(texto, file=f)</code>, que sí lo añade.</p>
      <p>Al trabajar con ficheros pueden producirse excepciones, como <code>FileNotFoundError</code> si no existe o <code>PermissionError</code> si no hay permiso, que deben capturarse con <code>try/except</code>. Indicar siempre <code>encoding="utf-8"</code> evita problemas con las tildes y la ñ al cambiar de sistema operativo.</p>`,
      svg: B.rejilla("Modos de apertura de un fichero", ["Modo", "Hace", "Si existe"], [["\"r\"", "leer", "lo lee"], ["\"w\"", "escribir", "lo borra"], ["\"a\"", "añadir", "escribe al final"], ["\"x\"", "crear", "error"], ["\"rb\" / \"wb\"", "binario", "bytes"]], { t: "open(ruta, modo)" }),
      video: B.V("ed-archivos", "Manejo de archivos en Python: lectura, escritura y añadir"),
    },
    {
      h: "El formato CSV",
      html: `<p>El formato <mark>CSV</mark> (<i>Comma-Separated Values</i>, valores separados por comas) es la forma más sencilla de guardar una <b>tabla</b> en un fichero de texto: cada línea es una fila y los campos se separan con un delimitador, normalmente una coma o, en España, un punto y coma (porque la coma se usa como separador decimal). La primera fila suele contener los nombres de las columnas. Todas las hojas de cálculo pueden abrir y exportar ficheros CSV, y muchos portales de datos abiertos los usan.</p>
      ${B.code(`nombre;curso;nota
Eva;2B;8.5
Leo;2A;6`)}
      <p>Aunque podría leerse con <code>split(";")</code>, es mejor usar el módulo <code>csv</code>, que resuelve los casos difíciles, como un campo que contiene el propio separador entre comillas. Con <code>csv.DictReader</code> cada fila se convierte en un diccionario cuyas claves son los nombres de las columnas:</p>
      ${B.code(`import csv
with open("notas.csv", encoding="utf-8", newline="") as f:
    filas = list(csv.DictReader(f, delimiter=";"))
media = sum(float(r["nota"]) for r in filas) / len(filas)

with open("aprobados.csv", "w", encoding="utf-8", newline="") as f:
    w = csv.writer(f, delimiter=";")
    w.writerow(["nombre", "nota"])
    for r in filas:
        if float(r["nota"]) >= 5:
            w.writerow([r["nombre"], r["nota"]])`)}
      <p>Hay que recordar que todo lo que se lee de un CSV es <b>texto</b>: los números deben convertirse con <code>int</code> o <code>float</code>. Para análisis más complejos se usa la biblioteca <i>pandas</i>, que lee un CSV en una línea (<code>pd.read_csv</code>) y lo convierte en una tabla con la que se puede filtrar, agrupar y hacer gráficos.</p>`,
      svg: B.flujo("Procesar un fichero CSV", ["Abrir el CSV con with y encoding utf-8", "Leer filas con csv.DictReader", "Convertir los textos a números", "Calcular, filtrar u ordenar", "Escribir el resultado con csv.writer"], { t: "Trabajar con un CSV" }),
    },
    {
      h: "El formato JSON y la persistencia de datos",
      html: `<p>El formato <mark>JSON</mark> (<i>JavaScript Object Notation</i>) guarda datos estructurados como texto con una sintaxis casi idéntica a la de los diccionarios y listas de Python: objetos entre llaves con pares <code>"clave": valor</code>, listas entre corchetes, textos entre comillas dobles, números, <code>true</code>, <code>false</code> y <code>null</code>. A diferencia del CSV, admite datos <b>anidados</b>: un alumno con una lista de notas o una tienda con productos que tienen a su vez variantes.</p>
      ${B.code(`import json
datos = {"alumno": "Eva", "notas": [8, 9.5], "beca": True}

with open("eva.json", "w", encoding="utf-8") as f:
    json.dump(datos, f, ensure_ascii=False, indent=2)

with open("eva.json", encoding="utf-8") as f:
    copia = json.load(f)     # vuelve a ser un diccionario`)}
      <p>El módulo <code>json</code> tiene cuatro funciones: <code>dump</code> y <code>load</code> escriben y leen un fichero, y <code>dumps</code> y <code>loads</code> convierten a y desde una cadena. Este proceso de convertir las estructuras de la memoria en texto o bytes para guardarlas o enviarlas se llama <b>serialización</b>.</p>
      <p>JSON es el formato estándar para intercambiar datos en internet: cuando una aplicación del móvil pide el tiempo, los resultados deportivos o los mensajes nuevos a un servidor, este responde a través de una <b>API</b> con datos en JSON. También lo usan muchos ficheros de configuración. Cuando el volumen de datos crece, o varios usuarios deben modificarlos a la vez, los ficheros se quedan cortos y se usan <b>bases de datos</b>, que estudiarás más adelante en este curso.</p>`,
      svg: B.comparar("CSV frente a JSON", ["CSV", ["tabla de filas y columnas", "separador ; o ,", "hojas de cálculo", "datos planos"]], ["JSON", ["objetos y listas", "datos anidados", "APIs y web", "dump / load"]]),
      video: B.V("ed-json", "¿Qué es JSON? Sintaxis y cómo crear un archivo JSON"),
    },
  ],
  figura: {
    titulo: "Ideas clave de las estructuras de datos y los ficheros",
    items: [["Secuencias", "[ ]  ( )", "listas mutables,", "tuplas inmutables"], ["Clave → valor", "{ : }", "diccionarios;", "conjuntos { }"], ["Pila y cola", "LIFO · FIFO", "append · pop", "deque · popleft"], ["Ficheros", "with open", "texto, CSV", "y JSON"]],
  },
  video: B.V("ed-general", "Qué son las estructuras de datos"),
  quiz: [
    ["Una estructura de datos es…", ["un tipo de fichero", "una forma de organizar datos para usarlos eficientemente", "un lenguaje", "un algoritmo de ordenación"], 1, "Define cómo se guardan y qué operaciones permite."],
    ["Las listas de Python son estructuras…", ["estáticas", "dinámicas", "no lineales", "inmutables"], 1, "Crecen y menguan."],
    ["Si lista = [5, 8, 2, 7], lista[-1] es…", ["5", "7", "2", "error"], 1, "El último."],
    ["Si t = \"python\", t[1:4] es…", ["\"pyt\"", "\"yth\"", "\"ytho\"", "\"tho\""], 1, "Posiciones 1, 2 y 3."],
    ["Tras b = a, si se hace b.append(1)…", ["a no cambia", "a también cambia", "da error", "se crea una copia"], 1, "Son el mismo objeto."],
    ["En la matriz m = [[1, 2], [3, 4]], m[1][0] vale…", ["1", "2", "3", "4"], 2, "Fila 1, columna 0."],
    ["Una tupla es…", ["mutable y sin orden", "ordenada e inmutable", "sin repetidos", "un diccionario"], 1, "No se puede modificar."],
    ["set([3, 3, 1, 1]) da…", ["[3, 1]", "{1, 3}", "{3, 3, 1, 1}", "error"], 1, "Elimina repetidos."],
    ["{1, 2, 3} & {2, 3, 4} es…", ["{1, 2, 3, 4}", "{2, 3}", "{1, 4}", "{1}"], 1, "Intersección."],
    ["d.get(\"x\", 0) si \"x\" no está en d devuelve…", ["KeyError", "0", "None siempre", "\"x\""], 1, "Valor por defecto."],
    ["En un diccionario, las claves deben ser…", ["listas", "únicas e inmutables", "siempre números", "ordenadas"], 1, "Textos, números o tuplas."],
    ["\"a,b,c\".split(\",\") devuelve…", ["\"abc\"", "[\"a\", \"b\", \"c\"]", "(\"a\", \"b\", \"c\")", "3"], 1, "Una lista."],
    ["f\"{3.14159:.2f}\" produce…", ["\"3.14\"", "\"3.1\"", "\"3.14159\"", "\"3\""], 0, "Dos decimales."],
    ["Una pila sigue la regla…", ["FIFO", "LIFO", "aleatoria", "por prioridad"], 1, "Último en entrar, primero en salir."],
    ["La cola de impresión es un ejemplo de…", ["pila", "cola FIFO", "árbol", "grafo"], 1, "Se imprime por orden de llegada."],
    ["El sistema de carpetas de un ordenador tiene forma de…", ["cola", "grafo con ciclos", "árbol", "tupla"], 2, "Jerarquía desde la raíz."],
    ["Comprobar si un elemento está en un conjunto grande es…", ["más lento que en una lista", "mucho más rápido que en una lista", "imposible", "igual de lento"], 1, "Usa una tabla hash."],
    ["El modo \"w\" de open…", ["añade al final", "borra el contenido si el fichero existe", "solo lee", "da error si existe"], 1, "Para añadir se usa \"a\"."],
    ["La ventaja de with open(...) as f es que…", ["lee más rápido", "cierra el fichero automáticamente", "convierte a JSON", "evita usar encoding"], 1, "Incluso si hay errores."],
    ["Para guardar un diccionario anidado en un fichero, el formato más adecuado es…", ["CSV", "JSON", "TXT sin formato", "MP3"], 1, "Admite estructuras anidadas."],
  ],
  examen: [
    ["L = [1, 2, 3, 4, 5]; ¿qué es L[::-2]?", ["[5, 3, 1]", "[1, 3, 5]", "[5, 4]", "[4, 2]"], 0, "Del final al principio, de dos en dos."],
    ["L = [3, 1, 2]; L.append(L.pop(0)); ¿cómo queda L?", ["[1, 2, 3]", "[3, 1, 2]", "[2, 3, 1]", "[1, 3, 2]"], 0, "Quita el 3 y lo añade al final."],
    ["c = {}; for x in \"banana\": c[x] = c.get(x, 0) + 1. ¿Cuánto vale c[\"a\"]?", ["1", "2", "3", "6"], 2, "Hay tres aes."],
    ["len({\"a\": [1, 2, 3], \"b\": [4]}) vale…", ["2", "4", "5", "1"], 0, "Cuenta las claves."],
    ["p = []; p.append(1); p.append(2); p.pop(); p.append(3); ¿qué es p?", ["[1, 2, 3]", "[1, 3]", "[2, 3]", "[3]"], 1, "Se desapila el 2."],
    ["Si {\"Ana\", \"Leo\"} | {\"Leo\", \"Eva\"} tiene n elementos, n es…", ["2", "3", "4", "1"], 1, "Unión sin repetidos."],
    ["\"-\".join(\"2026-11-21\".split(\"-\")[::-1]) es…", ["\"21-11-2026\"", "\"2026-11-21\"", "\"12-11-6202\"", "error"], 0, "Invierte el orden de los trozos."],
    ["Un programa abre un fichero existente con \"w\" y escribe una línea. El fichero tendrá…", ["el contenido anterior y la línea", "solo la línea nueva", "nada", "un error"], 1, "El modo w borra el contenido."],
  ],
  feynman: ["Qué es una estructura de datos y cómo se clasifican", "Qué diferencias hay entre lista, tupla, conjunto y diccionario", "Por qué b = a no copia una lista y cómo se copia", "Qué diferencia hay entre una pila y una cola y dónde se usan", "Qué son un árbol y un grafo con ejemplos reales", "Por qué buscar en un conjunto es más rápido que en una lista", "Cómo se lee y se escribe un fichero con with y para qué sirven CSV y JSON"],
  mapa: ["ESTRUCTURAS DE DATOS Y FICHEROS", [["Colecciones", "lista · tupla · set · dict"], ["Lineales", "pila LIFO · cola FIFO"], ["No lineales", "árbol · grafo"], ["Persistencia", "texto · CSV · JSON"]]],
  tarjetas: [
    ["Estructura de datos", "Forma de organizar datos con unas operaciones propias."],
    ["Lista", "Secuencia ordenada y mutable: [ ]. Índices desde 0; −1 es el último."],
    ["Corte", "L[i:j:paso]; el final no se incluye; L[::-1] invierte."],
    ["Tupla", "Secuencia ordenada e inmutable: ( ). Desempaquetado: x, y = p."],
    ["Conjunto", "Sin orden ni repetidos: { }. Unión |, intersección &, diferencia −."],
    ["Diccionario", "Pares clave: valor. d[clave], d.get(clave, defecto), items()."],
    ["Cadena", "Texto inmutable. strip, split, join, replace, upper, f-strings."],
    ["Pila", "LIFO: append y pop. Deshacer, historial, llamadas."],
    ["Cola", "FIFO: deque, append y popleft. Impresión, peticiones."],
    ["Árbol y grafo", "Jerarquía con raíz y hojas / nodos y aristas en red."],
    ["Fichero de texto", "with open(ruta, modo, encoding=\"utf-8\") as f; modos r, w, a, x."],
    ["CSV y JSON", "Tablas separadas por ; o , / objetos y listas anidados (dump, load)."],
  ],
  ejemplos: [
    ["Dada una lista de notas, crea otra sin repetidos, ordenada de mayor a menor, y di cuántos valores distintos hay.", ["set elimina los duplicados.", "sorted con reverse=True ordena de mayor a menor y devuelve una lista.", "len da el número de valores distintos."], "notas = [7, 5, 9, 7, 5, 10]\ndistintas = sorted(set(notas), reverse=True)   # [10, 9, 7, 5]\nprint(len(distintas))                          # 4"],
    ["Cuenta las palabras de una frase y muestra las tres más frecuentes.", ["Pasar a minúsculas y trocear con split().", "Contar con un diccionario y get.", "Ordenar los pares por el valor con una lambda."], "frase = \"el sol y el mar y el cielo\"\nc = {}\nfor p in frase.lower().split():\n    c[p] = c.get(p, 0) + 1\ntop = sorted(c.items(), key=lambda kv: kv[1], reverse=True)[:3]\n# [('el', 3), ('y', 2), ('sol', 1)]"],
    ["Comprueba con una pila si los paréntesis de una expresión están equilibrados.", ["Cada ( se apila.", "Cada ) desapila; si la pila está vacía, hay un error.", "Al final, la pila debe quedar vacía."], "def equilibrado(expr):\n    pila = []\n    for c in expr:\n        if c == \"(\":\n            pila.append(c)\n        elif c == \")\":\n            if not pila:\n                return False\n            pila.pop()\n    return not pila\n\nequilibrado(\"(a+(b*c))\")   # True\nequilibrado(\"(a+b))\")      # False"],
    ["Calcula la suma de cada fila y de cada columna de una matriz 3 × 3.", ["Las filas se suman directamente con sum.", "Para cada columna j, se suman los m[i][j] de todas las filas.", "Se usan listas por comprensión."], "m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nfilas = [sum(f) for f in m]                          # [6, 15, 24]\ncols = [sum(m[i][j] for i in range(3)) for j in range(3)]  # [12, 15, 18]"],
    ["Lee un fichero notas.csv (nombre;nota) y escribe en un fichero de texto el nombre de quien tiene la nota más alta.", ["Leer con csv.DictReader y delimitador ;.", "Convertir la nota a float y buscar el máximo con una clave.", "Escribir el resultado con el modo w."], "import csv\nwith open(\"notas.csv\", encoding=\"utf-8\", newline=\"\") as f:\n    filas = list(csv.DictReader(f, delimiter=\";\"))\nmejor = max(filas, key=lambda r: float(r[\"nota\"]))\nwith open(\"mejor.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(mejor[\"nombre\"] + \"\\n\")"],
    ["Guarda una agenda (diccionario nombre → teléfono) en JSON y recupérala al iniciar el programa si el fichero existe.", ["Al empezar, se intenta leer el fichero; si no existe, la agenda está vacía.", "Se modifica el diccionario.", "Al terminar, se guarda con json.dump."], "import json\ntry:\n    with open(\"agenda.json\", encoding=\"utf-8\") as f:\n        agenda = json.load(f)\nexcept FileNotFoundError:\n    agenda = {}\nagenda[\"Eva\"] = \"600111222\"\nwith open(\"agenda.json\", \"w\", encoding=\"utf-8\") as f:\n    json.dump(agenda, f, ensure_ascii=False, indent=2)"],
  ],
  errores: [
    "Creer que b = a copia una lista, cuando solo crea otro nombre para el mismo objeto.",
    "Crear una matriz con [[0] * n] * m, lo que repite la misma fila m veces.",
    "Acceder con corchetes a una clave inexistente de un diccionario sin comprobarla (KeyError).",
    "Usar listas para comprobar pertenencia en datos muy grandes, en lugar de conjuntos o diccionarios.",
    "Abrir con el modo \"w\" un fichero que se quería ampliar, borrando su contenido (se usa \"a\").",
    "Olvidar que lo leído de un fichero es texto: operar sin convertir a número o sin quitar el \\n.",
  ],
  ejercicios: {
    b: [
      ["Define estructura de datos y explica la diferencia entre estructuras lineales y no lineales.", "Forma de organizar y almacenar datos con unas operaciones propias. En las lineales cada elemento tiene un anterior y un siguiente (listas, pilas, colas); en las no lineales un elemento puede estar relacionado con varios (árboles, grafos)."],
      ["Con L = [10, 20, 30, 40, 50], escribe L[0], L[-2], L[1:3] y L[::2].", "10, 40, [20, 30] y [10, 30, 50]."],
      ["Escribe las instrucciones para añadir 60 al final de L, insertar 5 al principio y eliminar el 30.", "L.append(60)\nL.insert(0, 5)\nL.remove(30)"],
      ["¿Qué diferencia hay entre una lista y una tupla? Pon un ejemplo de uso de cada una.", "La lista es mutable y la tupla inmutable. Lista: los productos de un carrito, que cambian. Tupla: las coordenadas de un punto o una fecha."],
      ["Elimina los duplicados de [\"a\", \"b\", \"a\", \"c\", \"b\"] en una línea.", "list(set([\"a\", \"b\", \"a\", \"c\", \"b\"]))   # el orden puede variar"],
      ["Crea un diccionario con tres capitales europeas (país → capital) y muestra la de Francia.", "capitales = {\"Francia\": \"París\", \"Italia\": \"Roma\", \"Portugal\": \"Lisboa\"}\nprint(capitales[\"Francia\"])"],
      ["Recorre el diccionario anterior mostrando «La capital de X es Y».", "for pais, cap in capitales.items():\n    print(f\"La capital de {pais} es {cap}\")"],
      ["Indica qué devuelve: \"  Hola Mundo \".strip().lower().split().", "[\"hola\", \"mundo\"]"],
      ["Explica qué significan LIFO y FIFO y asócialos a pila o cola.", "LIFO (Last In, First Out): el último en entrar sale primero; es la pila. FIFO (First In, First Out): el primero en entrar sale primero; es la cola."],
      ["Cita dos ejemplos reales de árbol y dos de grafo.", "Árbol: carpetas del ordenador, árbol genealógico, estructura DOM de una web. Grafo: red de metro, red social, mapa de carreteras, enlaces entre webs."],
      ["Indica qué hace cada modo de apertura: \"r\", \"w\", \"a\".", "r: leer (error si no existe). w: escribir, crea el fichero o borra su contenido. a: añadir al final sin borrar."],
      ["¿Qué significan CSV y JSON? ¿Qué tipo de datos guarda cada uno?", "CSV: valores separados por comas; guarda tablas (filas y columnas). JSON: JavaScript Object Notation; guarda objetos y listas, incluso anidados."],
    ],
    m: [
      ["Explica qué muestra y por qué: a = [1, 2]; b = a; c = a[:]; a.append(3); print(b, c).", "[1, 2, 3] [1, 2]. b es el mismo objeto que a, así que ve el cambio; c es una copia hecha con el corte."],
      ["Crea una matriz 3 × 4 de ceros y pon un 1 en la diagonal (m[i][i]).", "m = [[0] * 4 for _ in range(3)]\nfor i in range(3):\n    m[i][i] = 1"],
      ["Escribe una función traspuesta(m) que devuelva la matriz traspuesta.", "def traspuesta(m):\n    return [[m[i][j] for i in range(len(m))] for j in range(len(m[0]))]"],
      ["Dados los alumnos de inglés {\"Ana\", \"Leo\", \"Eva\"} y de francés {\"Leo\", \"Iker\"}, calcula quién estudia los dos idiomas, quién solo inglés y el total de alumnos.", "ing & fr → {'Leo'}; ing - fr → {'Ana', 'Eva'}; len(ing | fr) → 4."],
      ["Escribe una función que reciba un texto y devuelva un diccionario con el número de vocales de cada tipo.", "def vocales(t):\n    return {v: t.lower().count(v) for v in \"aeiou\"}"],
      ["Tienes una lista de diccionarios con nombre y nota. Obtén la lista de nombres de los aprobados ordenados alfabéticamente.", "sorted(a[\"nombre\"] for a in clase if a[\"nota\"] >= 5)"],
      ["Invierte un diccionario (valor → clave) suponiendo que no hay valores repetidos.", "inv = {v: k for k, v in d.items()}"],
      ["Simula con una cola la atención de tres clientes que llegan en orden: Ana, Leo y Eva. Muestra a quién se atiende cada vez.", "from collections import deque\ncola = deque([\"Ana\", \"Leo\", \"Eva\"])\nwhile cola:\n    print(\"Atendiendo a\", cola.popleft())"],
      ["Usa una pila para invertir una palabra letra a letra.", "pila = list(\"python\")\ninv = \"\"\nwhile pila:\n    inv += pila.pop()\n# 'nohtyp'"],
      ["Representa con una lista de adyacencia el grafo: A conecta con B y C; B con D; C con D; D con nada. ¿Desde qué nodos se llega a D en un paso?", "g = {\"A\": [\"B\", \"C\"], \"B\": [\"D\"], \"C\": [\"D\"], \"D\": []}\nA D se llega directamente desde B y desde C: [n for n in g if \"D\" in g[n]]."],
      ["Escribe un programa que añada al fichero diario.txt una línea con la fecha de hoy y un texto, sin borrar lo anterior.", "import datetime\ntexto = input(\"Hoy: \")\nwith open(\"diario.txt\", \"a\", encoding=\"utf-8\") as f:\n    f.write(f\"{datetime.date.today()}: {texto}\\n\")"],
      ["Cuenta las líneas, palabras y caracteres de un fichero de texto (como el comando wc).", "lineas = palabras = car = 0\nwith open(\"texto.txt\", encoding=\"utf-8\") as f:\n    for linea in f:\n        lineas += 1\n        palabras += len(linea.split())\n        car += len(linea)\nprint(lineas, palabras, car)"],
      ["Lee un CSV de temperaturas (dia;max;min) y calcula la temperatura máxima media.", "import csv\nwith open(\"temp.csv\", encoding=\"utf-8\", newline=\"\") as f:\n    filas = list(csv.DictReader(f, delimiter=\";\"))\nmedia = sum(float(r[\"max\"]) for r in filas) / len(filas)"],
      ["Convierte el diccionario {\"nombre\": \"Eva\", \"notas\": [8, 9]} en una cadena JSON y explica qué cambia.", "json.dumps(d) → '{\"nombre\": \"Eva\", \"notas\": [8, 9]}'. Ahora es un texto (str), no un diccionario: puede guardarse o enviarse, pero para usarlo hay que volver a convertirlo con json.loads."],
    ],
    a: [
      ["Escribe una función que reciba una matriz cuadrada y diga si es simétrica (m[i][j] == m[j][i]).", "def simetrica(m):\n    n = len(m)\n    return all(m[i][j] == m[j][i] for i in range(n) for j in range(n))"],
      ["Agrupa una lista de palabras por su primera letra en un diccionario de listas: [\"sol\", \"sal\", \"mar\", \"mes\"] → {\"s\": [\"sol\", \"sal\"], \"m\": [\"mar\", \"mes\"]}.", "grupos = {}\nfor p in palabras:\n    grupos.setdefault(p[0], []).append(p)"],
      ["Implementa una pila con las funciones apilar, desapilar (que lance IndexError si está vacía) y cima, y úsala para el botón «deshacer» de un editor que guarda los textos anteriores.", "def apilar(p, x):\n    p.append(x)\n\ndef desapilar(p):\n    if not p:\n        raise IndexError(\"Pila vacía\")\n    return p.pop()\n\ndef cima(p):\n    return p[-1] if p else None\n\nhistorial = []\ntexto = \"Hola\"\napilar(historial, texto); texto = \"Hola mundo\"\ntexto = desapilar(historial)   # deshacer → 'Hola'"],
      ["Escribe una función que recorra un grafo en anchura desde un nodo (usando una cola y un conjunto de visitados) y devuelva el orden de visita.", "from collections import deque\ndef anchura(g, inicio):\n    visit, cola, orden = {inicio}, deque([inicio]), []\n    while cola:\n        n = cola.popleft()\n        orden.append(n)\n        for v in g[n]:\n            if v not in visit:\n                visit.add(v)\n                cola.append(v)\n    return orden"],
      ["Mide de forma aproximada la diferencia de tiempo entre buscar 10 000 números en una lista y en un conjunto de un millón de elementos. Explica el resultado.", "import time\nL = list(range(10**6)); S = set(L)\nt = time.time(); [x in L for x in range(10**6 - 10000, 10**6)]; print(time.time() - t)\nt = time.time(); [x in S for x in range(10**6 - 10000, 10**6)]; print(time.time() - t)\nLa lista tarda segundos porque recorre hasta un millón de elementos en cada búsqueda (O(n)); el conjunto, milésimas, porque calcula la posición con un hash (O(1))."],
      ["Un fichero tiene líneas «producto;cantidad». Escribe un programa que sume las cantidades por producto y guarde el resultado ordenado en JSON. Ignora las líneas mal formadas.", "import json\ntotal = {}\nwith open(\"ventas.txt\", encoding=\"utf-8\") as f:\n    for linea in f:\n        try:\n            p, c = linea.strip().split(\";\")\n            total[p] = total.get(p, 0) + int(c)\n        except ValueError:\n            continue\nwith open(\"totales.json\", \"w\", encoding=\"utf-8\") as f:\n    json.dump(dict(sorted(total.items())), f, ensure_ascii=False, indent=2)"],
      ["Diseña la estructura de datos (en JSON) para guardar una biblioteca con libros, cada uno con título, autores (varios), año y préstamos (fecha y lector). Justifica la elección frente a CSV.", "{\"libros\": [{\"titulo\": \"…\", \"autores\": [\"…\", \"…\"], \"año\": 2020, \"prestamos\": [{\"fecha\": \"2026-11-21\", \"lector\": \"Eva\"}]}]}\nJSON permite datos anidados (varios autores y varios préstamos por libro); en CSV habría que repetir filas o usar varios ficheros relacionados."],
      ["Para cada caso, elige la estructura más adecuada y justifica: a) historial de páginas visitadas con botón Atrás; b) usuarios registrados por nombre de usuario; c) pedidos de una tienda online por orden de llegada; d) etiquetas de una foto sin repetir; e) red de amistades.", "a) Pila (se vuelve a la última). b) Diccionario (búsqueda rápida por clave). c) Cola FIFO. d) Conjunto (sin repetidos, pertenencia rápida). e) Grafo (relaciones en red)."],
      ["Escribe una función que fusione dos ficheros CSV con las mismas columnas en uno nuevo, sin repetir filas idénticas.", "import csv\ndef fusionar(a, b, salida):\n    vistas, filas = set(), []\n    for ruta in (a, b):\n        with open(ruta, encoding=\"utf-8\", newline=\"\") as f:\n            r = csv.reader(f, delimiter=\";\")\n            cab = next(r)\n            for fila in r:\n                if tuple(fila) not in vistas:\n                    vistas.add(tuple(fila)); filas.append(fila)\n    with open(salida, \"w\", encoding=\"utf-8\", newline=\"\") as f:\n        w = csv.writer(f, delimiter=\";\")\n        w.writerow(cab); w.writerows(filas)\nSe usan tuplas porque las listas no pueden guardarse en un conjunto."],
      ["Debate: una app guarda las contraseñas de sus usuarios en un fichero JSON en texto plano. ¿Qué riesgos tiene y qué debería hacer?", "Cualquiera que acceda al fichero (un empleado, un atacante, una copia de seguridad robada) leería todas las contraseñas, que además muchos reutilizan en otros servicios. Nunca deben guardarse en claro: se guarda un resumen (hash) con sal mediante algoritmos específicos (bcrypt, Argon2), con permisos restringidos y, mejor, en una base de datos protegida. Además, el RGPD obliga a proteger los datos personales."],
    ],
  },
  glosario: [
    ["Estructura de datos", "Forma de organizar datos en memoria con unas operaciones determinadas."],
    ["Tipo abstracto de datos", "Descripción de una estructura por sus operaciones, no por su implementación."],
    ["Índice", "Posición de un elemento en una secuencia, empezando en 0."],
    ["Corte (slice)", "Fragmento de una secuencia indicado con [inicio:fin:paso]."],
    ["Lista anidada", "Lista que contiene listas; representa matrices o tablas."],
    ["Tupla", "Secuencia ordenada e inmutable."],
    ["Conjunto", "Colección sin orden y sin elementos repetidos."],
    ["Diccionario", "Colección de pares clave: valor con acceso por clave."],
    ["Tabla hash", "Técnica que calcula la posición de un dato a partir de su clave para encontrarlo al instante."],
    ["Pila", "Estructura LIFO: el último en entrar es el primero en salir."],
    ["Cola", "Estructura FIFO: el primero en entrar es el primero en salir."],
    ["Árbol", "Estructura jerárquica de nodos con una raíz, ramas y hojas."],
    ["Grafo", "Conjunto de nodos unidos por aristas, que pueden formar ciclos."],
    ["Fichero", "Conjunto de datos guardado en un almacenamiento permanente con un nombre."],
    ["Ruta", "Camino que localiza un fichero: absoluta o relativa."],
    ["Serialización", "Conversión de estructuras de memoria en texto o bytes para guardarlas o enviarlas."],
    ["CSV", "Formato de texto para tablas con campos separados por comas o punto y coma."],
    ["JSON", "Formato de texto para objetos y listas anidados, estándar en la web."],
  ],
  situacion: {
    titulo: "Datos abiertos de mi ciudad",
    reto: "Por parejas, descargad un conjunto de datos abiertos en CSV (calidad del aire, bicis públicas, población por barrios…) del portal de vuestra ciudad o de datos.gob.es y programad un analizador en Python que genere un informe en JSON.",
    pasos: [
      "Buscad un conjunto de datos en CSV, abridlo con una hoja de cálculo y describid sus columnas y su licencia.",
      "Leed el fichero con el módulo csv y guardad los datos en una lista de diccionarios, convirtiendo los números.",
      "Calculad estadísticas (máximos, mínimos, medias, recuentos por categoría con diccionarios).",
      "Eliminad datos repetidos o erróneos con conjuntos y try/except, anotando cuántos se descartan.",
      "Guardad el informe en un fichero JSON bien indentado y comprobad que se puede volver a cargar.",
      "Presentad las conclusiones y reflexionad sobre la calidad y la utilidad de los datos públicos.",
    ],
    producto: "Programa en Python, fichero JSON con el informe y una breve presentación con tres conclusiones sobre los datos.",
    evaluacion: [
      "Se eligen estructuras de datos adecuadas y se justifica la elección.",
      "Los ficheros se leen y escriben correctamente con with, encoding y los módulos csv y json.",
      "Se detectan y tratan los datos erróneos o repetidos.",
      "Las conclusiones se apoyan en los datos y se citan la fuente y la licencia.",
    ],
  },
  familias: [
    "Pedidle que os explique con ejemplos de casa qué es una pila y qué es una cola (platos, la cola del súper).",
    "Mirad juntos un portal de datos abiertos de vuestro ayuntamiento y comentad qué datos publica.",
    "Abrid un fichero CSV con una hoja de cálculo y pedidle que os explique su estructura.",
    "Hablad de la importancia de hacer copias de seguridad de los ficheros importantes.",
  ],
  saberes: "Estructuras de datos: clasificación, tipos abstractos de datos, listas, listas anidadas y matrices, tuplas, conjuntos, diccionarios, cadenas y formato, pilas, colas, árboles y grafos, eficiencia de las operaciones; ficheros de texto y binarios, rutas, lectura y escritura, formatos CSV y JSON, serialización y persistencia (Tecnologías de la Información y la Comunicación II, optativa de 2º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Estructuras desenchufadas: representar una pila con vasos y una cola con alumnos en fila antes de programarlas.",
    "Reto de rendimiento: medir con time la búsqueda en listas y conjuntos de distinto tamaño y hacer una gráfica.",
    "Trabajar con datos abiertos reales del entorno del centro para dar sentido a CSV y JSON.",
    "Diseñar en papel la estructura JSON de una app conocida (una red social, una tienda) antes de programar.",
  ],
  fuentes: [
    B.PYDOC,
    { t: "datos.gob.es: catálogo nacional de datos abiertos", url: "https://datos.gob.es/" },
    { t: "Introducción a JSON (json.org en español)", url: "https://www.json.org/json-es.html" },
  ],
}));
