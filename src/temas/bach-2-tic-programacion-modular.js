// Tecnologías de la Información y la Comunicación II, 2º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
// Se programa en Python 3. Continúa el tema «Programación» de TIC I (variables, condicionales, bucles y listas).
const B = require("./_bach2-tic");

// Ámbitos anidados LEGB.
const legb = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Regla LEGB: Python busca un nombre primero en el ámbito local, luego en el de la función que la contiene, después en el global del módulo y por último en los nombres predefinidos">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${[["Built-in: print, len, int…", "var(--sun)"], ["Global: variables del módulo", "var(--leaf)"], ["Enclosing: función externa", "var(--red)"], ["Local: en la función", "var(--pen)"]].map(([t, c], i) => {
    const m = 10 + i * 18, y = 10 + i * 30;
    return `<rect x="${m}" y="${y}" width="${260 - 2 * m}" height="${152 - i * 42}" rx="10" fill="${c}" fill-opacity=".1" stroke="${c}" stroke-width="2.2"/>${B.tx(m + 10, y + 18, t, { fs: 11, maxW: 230 - 2 * m, bold: true, color: c, anchor: "start" })}`;
  }).join("")}
  ${B.tx(130, 175, "se busca de dentro hacia fuera", { fs: 10.5, maxW: 220, bold: true, color: "var(--ink)" })}
</svg>`;

// Pila de llamadas.
const pila = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Pila de llamadas: el programa principal llama a media, que llama a suma; cada llamada apila un marco con sus variables locales y al terminar se desapila">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${B.tx(130, 20, "La pila de llamadas", { fs: 13, maxW: 236, bold: true, font: B.D })}
  ${[["suma(notas)", "total = 23", "var(--red)"], ["media(notas)", "n = 3", "var(--leaf)"], ["programa principal", "notas = [7, 9, 7]", "var(--pen)"]].map(([a, b, c], i) => `
  <rect x="40" y="${34 + i * 44}" width="130" height="38" rx="7" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2.2"/>
  ${B.tx(105, 50 + i * 44, a, { fs: 11, maxW: 120, bold: true, color: c })}${B.tx(105, 65 + i * 44, b, { fs: 10, maxW: 120 })}`).join("")}
  <path d="M190 120 V 44" stroke="var(--muted)" stroke-width="2" marker-end="url(#pl1)"/><path d="M222 44 V 120" stroke="var(--muted)" stroke-width="2" marker-end="url(#pl1)"/>
  <defs><marker id="pl1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
  ${B.tx(190, 136, "llamar", { fs: 10, maxW: 40, bold: true, color: "var(--muted)" })}${B.tx(222, 136, "return", { fs: 10, maxW: 40, bold: true, color: "var(--muted)" })}
  ${B.tx(130, 170, "la última llamada es la primera en terminar", { fs: 10, maxW: 236 })}
</svg>`;

// Anatomía de una función.
const anatomia = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Partes de una función en Python: la palabra def, el nombre, los parámetros entre paréntesis, la cadena de documentación, el cuerpo sangrado y la instrucción return">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <rect x="14" y="40" width="232" height="96" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="24" y="62" font-size="12" font-family="monospace" fill="var(--ink)"><tspan fill="var(--red)" font-weight="700">def</tspan> <tspan fill="var(--pen)" font-weight="700">area</tspan>(<tspan fill="var(--leaf)" font-weight="700">base, altura</tspan>):</text>
  <text x="44" y="84" font-size="11" font-family="monospace" fill="var(--muted)">"""Área de un triángulo."""</text>
  <text x="44" y="104" font-size="12" font-family="monospace" fill="var(--ink)">a = base * altura / 2</text>
  <text x="44" y="124" font-size="12" font-family="monospace" fill="var(--ink)"><tspan fill="var(--sun)" font-weight="700">return</tspan> a</text>
  ${B.tx(30, 28, "palabra clave", { fs: 10, maxW: 70, bold: true, color: "var(--red)", anchor: "start" })}
  ${B.tx(110, 28, "nombre", { fs: 10, maxW: 50, bold: true, color: "var(--pen)" })}
  ${B.tx(190, 28, "parámetros", { fs: 10, maxW: 70, bold: true, color: "var(--leaf)" })}
  ${B.tx(130, 154, "docstring · cuerpo sangrado · return devuelve el resultado", { fs: 10, maxW: 236, color: "var(--ink)" })}
  ${B.tx(130, 170, "llamada: area(6, 4) → 12.0", { fs: 11, maxW: 236, bold: true, color: "var(--sun)" })}
</svg>`;

module.exports = B.tema(B.textos({
  titulo: "Programación modular: funciones, módulos y excepciones",
  minutos: 120,
  objetivos: [
    "Aplicar el diseño descendente para dividir un programa en funciones con una única responsabilidad",
    "Definir funciones con parámetros posicionales, por nombre, por defecto y variables, y devolver resultados",
    "Explicar el ámbito de las variables (regla LEGB) y el paso de argumentos mutables e inmutables",
    "Usar funciones lambda y funciones de orden superior como map, filter y sorted",
    "Importar módulos de la biblioteca estándar y crear módulos y paquetes propios",
    "Capturar, lanzar y documentar excepciones, y probar el código con aserciones y casos de prueba",
  ],
  claves: ["programación modular", "diseño descendente", "función", "parámetro", "argumento", "return", "ámbito", "LEGB", "lambda", "módulo", "paquete", "import", "excepción", "try/except", "raise", "assert"],
  pregunta: {
    texto: "Una aplicación como un videojuego o un navegador tiene millones de líneas de código y la escriben cientos de personas a la vez. ¿Cómo es posible que no se conviertan en un caos?",
    respuesta: "Porque se construyen por <b>piezas</b>. Cada parte del programa se divide en <mark>funciones</mark> que hacen una sola tarea y en <mark>módulos</mark> que agrupan funciones relacionadas. Cada pieza tiene una entrada y una salida claras, se prueba por separado y se puede reutilizar. Así, un equipo puede programar el sonido sin conocer los detalles de los gráficos. Además, los programas bien hechos prevén los fallos con <b>excepciones</b>, para que un error en una pieza no haga caer todo el sistema.",
  },
  lectura: {
    titulo: "Margaret Hamilton y el programa que salvó el alunizaje",
    html: `<p>El 20 de julio de 1969, minutos antes de que el módulo lunar del Apolo 11 tocara la Luna, en las pantallas empezaron a aparecer alarmas: «1202», «1201». El ordenador de a bordo estaba saturado porque un radar le enviaba datos que no necesitaba. Si se hubiera bloqueado, la misión se habría abortado.</p>
    <p>No ocurrió. El software, dirigido por la ingeniera Margaret Hamilton en el MIT, estaba dividido en tareas independientes con prioridades. Cuando el ordenador detectaba que no podía con todo, abandonaba las tareas menos importantes y seguía ejecutando las imprescindibles para el aterrizaje. Era un programa diseñado para <b>gestionar sus propios errores</b>.</p>
    <p>Hamilton acuñó la expresión «ingeniería del software» para reclamar que programar se tomara tan en serio como construir un puente. Hoy sus ideas son la base de cualquier aplicación: dividir el programa en piezas pequeñas, darles responsabilidades claras, probarlas y prever qué hacer cuando algo falla. En este tema aprenderás a hacerlo en Python con funciones, módulos y excepciones.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "La programación modular",
      html: `<p>Cuando un programa crece, escribirlo como una lista larga de instrucciones se vuelve imposible de entender, de probar y de mantener. La <mark>programación modular</mark> consiste en dividir el programa en partes más pequeñas e independientes, llamadas <b>módulos</b> o <b>subprogramas</b>, cada una con una tarea concreta. En Python, esas piezas son las <b>funciones</b>, que agrupan instrucciones, y los <b>módulos</b>, que son ficheros que agrupan funciones relacionadas.</p>
      <p>Para dividir un problema se usa el <b>diseño descendente</b> (<i>top-down</i>): se parte de la tarea general y se descompone en subtareas, que a su vez se dividen hasta llegar a pasos sencillos que se programan directamente. Por ejemplo, «gestionar las notas de una clase» se divide en leer las notas, calcular estadísticas y mostrar un informe; y «calcular estadísticas», en media, máximo, mínimo y número de aprobados.</p>
      <p>Las ventajas de programar así son muchas:</p>
      <ul><li><b>Legibilidad</b>: el programa principal se lee casi como un índice de lo que hace.</li>
      <li><b>Reutilización</b>: una función bien hecha se usa muchas veces, en ese programa o en otros. Se sigue el principio <b>DRY</b> (<i>Don't Repeat Yourself</i>): si un fragmento se repite, debe ser una función.</li>
      <li><b>Pruebas y depuración</b>: cada pieza se comprueba por separado y los errores quedan localizados.</li>
      <li><b>Trabajo en equipo</b>: cada persona programa un módulo conociendo solo lo que recibe y lo que devuelve (su <b>interfaz</b>), no cómo está hecho por dentro.</li></ul>
      <p>Una buena función cumple la regla de la <b>responsabilidad única</b>: hace una sola cosa y la hace bien. Si para describirla necesitas la palabra «y» varias veces, probablemente conviene dividirla.</p>`,
      svg: B.cajas("Ventajas de la programación modular", [["Legible", "el programa|se lee como un índice"], ["Reutilizable", "principio DRY"], ["Fácil de probar", "errores localizados"], ["En equipo", "cada uno|su módulo"]], { t: "¿Por qué dividir en piezas?" }),
      video: B.V("mod-modular", "Programación modular explicada jugando"),
    },
    {
      h: "Definir y llamar funciones",
      html: `<p>Una <mark>función</mark> es un bloque de código con nombre que realiza una tarea y que se ejecuta cada vez que se <b>llama</b>. En Python se define con la palabra <code>def</code>, el nombre, los <b>parámetros</b> entre paréntesis y dos puntos; el <b>cuerpo</b> va sangrado. Con <code>return</code> la función termina y devuelve un valor a quien la llamó.</p>
      ${B.code(`def area_triangulo(base, altura):
    """Devuelve el área de un triángulo."""
    return base * altura / 2

a = area_triangulo(6, 4)   # llamada: a vale 12.0
print(area_triangulo(10, 3))`)}
      <p>Conviene distinguir dos palabras. Los <b>parámetros</b> son las variables que aparecen en la definición (<code>base</code>, <code>altura</code>); los <b>argumentos</b> son los valores concretos que se pasan en la llamada (<code>6</code>, <code>4</code>). Al llamar a la función, cada parámetro toma el valor de su argumento.</p>
      <p>La primera línea del cuerpo puede ser una <b>cadena de documentación</b> o <i>docstring</i>, entre triples comillas, que explica qué hace la función. Python la muestra con <code>help(area_triangulo)</code> y los editores la enseñan al escribir la llamada. Los nombres de funciones se escriben en minúsculas con guiones bajos y deben ser verbos o descripciones claras: <code>calcular_media</code> mejor que <code>cm</code>.</p>
      <p>Si una función no tiene <code>return</code>, o tiene un <code>return</code> sin valor, devuelve el valor especial <code>None</code>. Es un error frecuente confundir <code>print</code> con <code>return</code>: <code>print</code> solo muestra un texto en pantalla, mientras que <code>return</code> entrega el resultado al programa para que pueda guardarse en una variable o usarse en otro cálculo. Una función debe definirse antes de llamarla, y puede llamar a otras funciones.</p>`,
      svg: anatomia(),
    },
    {
      h: "Tipos de parámetros",
      html: `<p>Python ofrece varias formas de pasar argumentos, que hacen las funciones más flexibles:</p>
      <ul><li><b>Posicionales</b>: los argumentos se asignan a los parámetros por orden. En <code>potencia(2, 5)</code>, la base es 2 y el exponente 5.</li>
      <li><b>Por nombre</b> (<i>keyword arguments</i>): se indica el nombre del parámetro, y entonces el orden no importa: <code>potencia(exponente=5, base=2)</code>. Hacen las llamadas más legibles.</li>
      <li><b>Valores por defecto</b>: un parámetro puede tener un valor que se usa si no se pasa el argumento. Los parámetros con valor por defecto van después de los obligatorios.</li>
      <li><b>Número variable de argumentos</b>: <code>*args</code> recoge cualquier número de argumentos posicionales en una tupla, y <code>**kwargs</code> recoge argumentos por nombre en un diccionario.</li></ul>
      ${B.code(`def saludo(nombre, idioma="es"):
    if idioma == "es":
        return "Hola, " + nombre
    return "Hello, " + nombre

def media(*numeros):
    return sum(numeros) / len(numeros)

saludo("Ana")              # 'Hola, Ana'
saludo("Ana", idioma="en") # 'Hello, Ana'
media(7, 8, 9, 6)          # 7.5`)}
      <p>Las propias funciones de Python usan estas técnicas: <code>print("a", "b", sep="-", end="!")</code> recibe cualquier número de valores y dos parámetros por nombre con valor por defecto. Una precaución importante: nunca uses una lista vacía <code>[]</code> como valor por defecto, porque se crea una sola vez y se comparte entre llamadas; se usa <code>None</code> y se crea la lista dentro de la función.</p>`,
      svg: B.rejilla("Formas de pasar argumentos en Python", ["Tipo", "Ejemplo"], [["Posicional", "f(2, 5)"], ["Por nombre", "f(exp=5, base=2)"], ["Por defecto", "def f(x, n=2)"], ["*args", "tupla de valores"], ["**kwargs", "diccionario"]], { t: "Parámetros" }),
    },
    {
      h: "Valores de retorno y efectos secundarios",
      html: `<p>Una función puede devolver <b>cualquier tipo de dato</b>: un número, un texto, un booleano, una lista o un diccionario. También puede devolver <b>varios valores</b> a la vez separándolos por comas; en realidad devuelve una tupla, que se puede <b>desempaquetar</b> en varias variables:</p>
      ${B.code(`def estadisticas(notas):
    return min(notas), max(notas), sum(notas) / len(notas)

menor, mayor, med = estadisticas([5, 8, 6.5, 9])`)}
      <p>Una función puede tener varios <code>return</code>, por ejemplo uno en cada rama de un condicional; en cuanto se ejecuta el primero, la función termina. Las funciones que devuelven <code>True</code> o <code>False</code> se llaman <b>predicados</b> y suelen empezar por <code>es_</code> o <code>tiene_</code>: <code>es_primo(n)</code>, <code>es_bisiesto(año)</code>.</p>
      <p>Se llama <mark>función pura</mark> a la que solo depende de sus argumentos y no modifica nada fuera de ella: con los mismos datos devuelve siempre el mismo resultado. Son las más fáciles de entender y de probar. En cambio, una función tiene <b>efectos secundarios</b> si además de devolver un valor cambia algo externo: muestra texto, escribe en un fichero, modifica una variable global o una lista que recibió. Los efectos secundarios son necesarios (un programa que no muestra ni guarda nada no sirve), pero conviene concentrarlos en pocas funciones y que el resto sean puras. Por ejemplo, es mejor una función <code>calcular_iva(precio)</code> que devuelve el resultado y otra que lo muestra, que una sola que calcula y muestra a la vez.</p>`,
      svg: B.comparar("Función pura frente a función con efectos secundarios", ["Función pura", ["solo usa sus argumentos", "no cambia nada externo", "mismo dato → mismo resultado", "fácil de probar"]], ["Con efectos", ["muestra o guarda datos", "modifica variables externas", "necesaria, pero acotada", "más difícil de probar"]]),
    },
    {
      h: "El ámbito de las variables",
      html: `<p>El <mark>ámbito</mark> (<i>scope</i>) de una variable es la parte del programa en la que existe y puede usarse. Las variables creadas dentro de una función son <b>locales</b>: nacen cuando se llama a la función y desaparecen cuando termina. Las variables creadas fuera de cualquier función, en el cuerpo del módulo, son <b>globales</b>.</p>
      <p>Cuando Python encuentra un nombre, lo busca siguiendo la regla <b>LEGB</b>: primero en el ámbito <b>L</b>ocal; después en el de las funciones que la contienen (<b>E</b>nclosing), si es una función definida dentro de otra; luego en el ámbito <b>G</b>lobal del módulo; y por último entre los nombres predefinidos (<b>B</b>uilt-in), como <code>print</code> o <code>len</code>. Si no lo encuentra, lanza un <code>NameError</code>.</p>
      ${B.code(`iva = 0.21               # global

def precio_final(precio):
    total = precio * (1 + iva)   # lee la global
    return total                 # total es local

precio_final(100)   # 121.0
print(total)        # NameError: total no existe fuera`)}
      <p>Una función puede <b>leer</b> una variable global, pero si le asigna un valor, Python crea una variable local nueva con el mismo nombre, que <b>oculta</b> la global. Para modificar la global habría que declararla con <code>global</code>, pero es una mala práctica: hace que el resultado de la función dependa de un estado oculto y dificulta encontrar errores. Lo correcto es pasar los datos como argumentos y recoger los resultados con <code>return</code>. Las únicas variables globales recomendables son las <b>constantes</b>, que por convenio se escriben en mayúsculas (<code>IVA = 0.21</code>).</p>`,
      svg: legb(),
    },
    {
      h: "Paso de argumentos: mutables e inmutables",
      html: `<p>En Python, al llamar a una función, el parámetro pasa a ser un nuevo nombre para el <b>mismo objeto</b> que el argumento. Lo que ocurre después depende de si el objeto se puede modificar o no.</p>
      <ul><li>Los tipos <b>inmutables</b> (<code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code>, <code>tuple</code>) no se pueden cambiar. Si dentro de la función se hace <code>x = x + 1</code>, se crea un objeto nuevo y la variable original no cambia. En la práctica, se comporta como un <b>paso por valor</b>.</li>
      <li>Los tipos <b>mutables</b> (<code>list</code>, <code>dict</code>, <code>set</code>) sí se pueden modificar. Si la función hace <code>lista.append(5)</code>, el cambio se ve fuera, porque las dos variables apuntan a la misma lista. Se comporta como un <b>paso por referencia</b>.</li></ul>
      ${B.code(`def subir(n):
    n = n + 1

def añadir(lista):
    lista.append(0)

a = 5;  subir(a);  print(a)      # 5: no cambia
L = [1, 2];  añadir(L);  print(L) # [1, 2, 0]: sí cambia`)}
      <p>Esta diferencia es una fuente de errores muy habitual. Si una función no debe alterar la lista que recibe, puede trabajar con una <b>copia</b> (<code>lista.copy()</code> o <code>lista[:]</code>) o construir y devolver una lista nueva. En general, una función que modifica sus argumentos debe indicarlo claramente en su nombre o en su documentación, como hace el método <code>lista.sort()</code>, que ordena la propia lista y devuelve <code>None</code>, frente a la función <code>sorted(lista)</code>, que devuelve una lista nueva ordenada y deja la original intacta.</p>
      <p>Cada llamada crea un <b>marco</b> en la <b>pila de llamadas</b> con sus variables locales. Cuando una función llama a otra, se apila un marco nuevo; al terminar, se desapila y la ejecución vuelve al punto de la llamada. Los depuradores muestran esta pila, muy útil para seguir el programa.</p>`,
      svg: pila(),
    },
    {
      h: "Funciones como datos: lambda y orden superior",
      html: `<p>En Python las funciones son <b>objetos</b> como los números o las listas: se pueden guardar en variables, meter en listas o pasar como argumento a otra función. Una función que recibe o devuelve otras funciones se llama <mark>función de orden superior</mark>.</p>
      <p>Para funciones muy cortas existe la <b>función lambda</b> o anónima, que se escribe en una sola expresión: <code>lambda x: x ** 2</code> equivale a una función que devuelve el cuadrado de su argumento. Se usan sobre todo como argumento de otras funciones. Las más habituales son:</p>
      <ul><li><code>map(f, lista)</code>: aplica <code>f</code> a cada elemento.</li>
      <li><code>filter(f, lista)</code>: se queda con los elementos para los que <code>f</code> devuelve <code>True</code>.</li>
      <li><code>sorted(lista, key=f)</code>, <code>max(lista, key=f)</code>: ordenan o buscan el máximo según el valor de <code>f</code>.</li></ul>
      ${B.code(`notas = [4.5, 8, 6, 9.5, 3]
dobles = list(map(lambda x: x * 2, notas))
aprobadas = list(filter(lambda x: x >= 5, notas))  # [8, 6, 9.5]

alumnos = [("Leo", 7), ("Ana", 9), ("Iker", 5)]
por_nota = sorted(alumnos, key=lambda a: a[1], reverse=True)`)}
      <p>Muchas veces, en lugar de <code>map</code> y <code>filter</code>, se prefieren las <b>listas por comprensión</b>, más legibles: <code>[x * 2 for x in notas]</code> o <code>[x for x in notas if x >= 5]</code>. Las lambdas deben ser simples: si la expresión se complica, es mejor definir una función normal con nombre y documentación.</p>`,
      svg: B.flujo("Funciones de orden superior: map transforma, filter selecciona y sorted ordena con una clave", ["map(f, datos): transforma cada uno", "filter(f, datos): se queda con algunos", "sorted(datos, key=f): ordena por f", "f puede ser una lambda: lambda x: x * 2"], { t: "Funciones que reciben funciones" }),
    },
    {
      h: "Los módulos y la biblioteca estándar",
      html: `<p>Un <mark>módulo</mark> es un fichero <code>.py</code> que contiene funciones, constantes y otras definiciones que pueden usarse en otros programas. Python incluye cientos de módulos en su <b>biblioteca estándar</b> («pilas incluidas»), listos para usar sin instalar nada. Para utilizarlos hay que <b>importarlos</b>:</p>
      ${B.code(`import math
print(math.sqrt(16), math.pi)

from random import randint, choice
dado = randint(1, 6)

import datetime as dt
hoy = dt.date.today()`)}
      <p>Con <code>import modulo</code> se accede a sus elementos con el prefijo <code>modulo.nombre</code>, lo que deja claro de dónde viene cada uno. Con <code>from modulo import nombre</code> se trae solo ese elemento y se usa sin prefijo. Con <code>as</code> se le da un alias más corto. Se desaconseja <code>from modulo import *</code>, porque trae todos los nombres y puede sobrescribir otros sin que te des cuenta.</p>
      <p>Algunos módulos muy útiles de la biblioteca estándar son <code>math</code> (funciones matemáticas), <code>random</code> (números aleatorios), <code>datetime</code> (fechas y horas), <code>os</code> y <code>pathlib</code> (ficheros y carpetas), <code>csv</code> y <code>json</code> (formatos de datos), <code>statistics</code> (media, mediana, desviación) y <code>time</code>. Además, existen cientos de miles de <b>bibliotecas externas</b> creadas por la comunidad en el repositorio PyPI, que se instalan con el gestor <code>pip</code>: <code>pip install requests</code>. Entre las más conocidas están <i>NumPy</i> y <i>pandas</i> para datos, <i>Matplotlib</i> para gráficos o <i>Flask</i> para crear webs. Antes de programar algo complejo, conviene buscar si ya existe un módulo que lo resuelve.</p>`,
      svg: B.rejilla("Módulos útiles de la biblioteca estándar de Python", ["Módulo", "Sirve para"], [["math", "raíces, trigonometría"], ["random", "azar: randint, choice"], ["datetime", "fechas y horas"], ["os, pathlib", "ficheros y carpetas"], ["csv, json", "formatos de datos"]], { t: "Pilas incluidas" }),
      video: B.V("mod-modulos", "Curso de Python: los módulos"),
    },
    {
      h: "Módulos y paquetes propios",
      html: `<p>Cualquier fichero de Python puede ser un módulo. Si guardas tus funciones de geometría en <code>geometria.py</code>, desde otro fichero de la misma carpeta puedes escribir <code>import geometria</code> y usar <code>geometria.area_circulo(3)</code>. Así un proyecto se organiza en varios ficheros, cada uno con una responsabilidad: datos, cálculos, interfaz…</p>
      <p>Al importar un módulo, Python ejecuta todo su código. Para que las pruebas o el programa principal de un módulo no se ejecuten al importarlo, se usa esta construcción:</p>
      ${B.code(`# geometria.py
import math

def area_circulo(r):
    return math.pi * r ** 2

if __name__ == "__main__":
    print(area_circulo(1))   # solo al ejecutar este fichero`)}
      <p>La variable especial <code>__name__</code> vale <code>"__main__"</code> cuando el fichero se ejecuta directamente, y el nombre del módulo cuando se importa. Un <mark>paquete</mark> es una carpeta que agrupa varios módulos relacionados (tradicionalmente con un fichero <code>__init__.py</code>); se importa con puntos: <code>from juego.graficos import dibujar</code>.</p>
      <p>Para que un proyecto sea reproducible, cada uno usa un <b>entorno virtual</b> (<code>python -m venv</code>) con las versiones exactas de las bibliotecas que necesita, anotadas en un fichero <code>requirements.txt</code>. Así, otra persona puede instalar lo mismo con <code>pip install -r requirements.txt</code>. Es la forma de trabajar de los proyectos reales, junto con el control de versiones con Git.</p>`,
      svg: B.capas("Organización de un proyecto de Python", [["Paquete", "carpeta juego/"], ["Módulos", "graficos.py · sonido.py"], ["Funciones", "dibujar() · tocar()"], ["Instrucciones", "el código de cada función"]], { t: "De lo grande a lo pequeño" }),
    },
    {
      h: "Errores y excepciones",
      html: `<p>En un programa pueden aparecer tres tipos de errores. Los <b>errores de sintaxis</b> (<code>SyntaxError</code>, <code>IndentationError</code>) impiden que el programa empiece a ejecutarse: falta unos dos puntos, un paréntesis o la sangría es incorrecta. Los <b>errores lógicos</b> no producen ningún mensaje: el programa funciona, pero da un resultado equivocado. Y los <b>errores en tiempo de ejecución</b> aparecen mientras el programa funciona, cuando ocurre una situación que no puede resolver.</p>
      <p>Estos últimos se llaman <mark>excepciones</mark>. Cuando se produce una, Python interrumpe la ejecución y muestra un mensaje (la <b>traza</b> o <i>traceback</i>) que indica el tipo de excepción, el mensaje y la línea donde ocurrió, así como la cadena de llamadas que llevó hasta allí. Leer la traza de abajo arriba es la primera técnica de depuración.</p>
      <p>Las excepciones más frecuentes son:</p>
      <ul><li><code>ValueError</code>: el valor no es válido para la operación, como <code>int("hola")</code>.</li>
      <li><code>TypeError</code>: se opera con tipos incompatibles, como <code>"3" + 4</code>.</li>
      <li><code>ZeroDivisionError</code>: división entre cero.</li>
      <li><code>IndexError</code>: índice fuera de la lista; <code>KeyError</code>: clave inexistente en un diccionario.</li>
      <li><code>NameError</code>: variable o función no definida.</li>
      <li><code>FileNotFoundError</code>: el fichero que se intenta abrir no existe.</li></ul>
      <p>Las excepciones están organizadas en una <b>jerarquía</b>: todas derivan de <code>Exception</code>, y algunas agrupan a otras (por ejemplo, <code>IndexError</code> y <code>KeyError</code> son tipos de <code>LookupError</code>). Esto permite capturar un grupo de errores a la vez.</p>`,
      svg: B.rejilla("Excepciones frecuentes en Python", ["Excepción", "Ejemplo"], [["ValueError", "int(\"hola\")"], ["TypeError", "\"3\" + 4"], ["ZeroDivisionError", "5 / 0"], ["IndexError", "[1, 2][5]"], ["KeyError", "d[\"x\"] sin x"]], { t: "Errores en ejecución" }),
    },
    {
      h: "Capturar y lanzar excepciones",
      html: `<p>Un programa robusto no se detiene ante el primer dato incorrecto: <b>captura</b> la excepción y reacciona. Para ello se usa la estructura <code>try</code>. El código que puede fallar va en el bloque <code>try</code>; si ocurre una excepción, se salta al bloque <code>except</code> correspondiente. El bloque opcional <code>else</code> se ejecuta solo si no hubo error, y <code>finally</code> se ejecuta siempre, haya error o no (sirve para cerrar ficheros o conexiones).</p>
      ${B.code(`def leer_entero(mensaje):
    while True:
        try:
            n = int(input(mensaje))
        except ValueError:
            print("Escribe un número entero.")
        else:
            return n

try:
    r = 10 / leer_entero("Divisor: ")
except ZeroDivisionError:
    print("No se puede dividir entre cero")
finally:
    print("Fin del cálculo")`)}
      <p>Conviene capturar solo las excepciones que se esperan y saben tratarse, nombrándolas. Un <code>except:</code> sin tipo lo atrapa todo, incluso errores de programación, y los esconde: es una mala práctica. También puede guardarse la excepción para mostrar su mensaje: <code>except ValueError as e: print(e)</code>.</p>
      <p>Una función también puede <b>lanzar</b> una excepción con <code>raise</code> cuando recibe datos que no tienen sentido, para avisar a quien la llamó: <code>raise ValueError("La edad no puede ser negativa")</code>. Es mejor que devolver un valor extraño como -1, que podría usarse por error. Así se reparten las responsabilidades: la función detecta el problema y el programa principal decide qué hacer.</p>`,
      svg: B.flujo("Funcionamiento de try, except, else y finally", ["try: se intenta el código que puede fallar", "except: se ejecuta si hay ese error", "else: se ejecuta si no hubo error", "finally: se ejecuta siempre"], { t: "try · except · else · finally" }),
      video: B.V("mod-excepciones", "Excepciones en Python: try, except y finally"),
    },
    {
      h: "Depurar, probar y documentar",
      html: `<p>Escribir el código es solo una parte del trabajo. Para encontrar los errores se usa la <b>depuración</b>: leer la traza, añadir <code>print</code> temporales para ver los valores de las variables o, mejor, usar el <b>depurador</b> del editor (Thonny, VS Code), que permite poner <b>puntos de ruptura</b>, ejecutar línea a línea y observar las variables y la pila de llamadas en cada momento.</p>
      <p>Para comprobar que una función es correcta se diseñan <b>casos de prueba</b>: entradas con su salida esperada, incluyendo casos normales, <b>casos límite</b> (lista vacía, cero, números negativos, el valor máximo) y datos erróneos. La forma más sencilla de automatizarlos es la instrucción <code>assert</code>, que lanza un <code>AssertionError</code> si la condición es falsa:</p>
      ${B.code(`def es_bisiesto(a):
    return a % 4 == 0 and (a % 100 != 0 or a % 400 == 0)

assert es_bisiesto(2024)
assert not es_bisiesto(1900)
assert es_bisiesto(2000)
print("Todas las pruebas superadas")`)}
      <p>En los proyectos reales se usan herramientas de <b>pruebas unitarias</b> como <code>unittest</code> o <code>pytest</code>, que ejecutan cientos de pruebas cada vez que se cambia el código. Si se escriben las pruebas antes que la función, se habla de <b>desarrollo guiado por pruebas</b> (TDD).</p>
      <p>Por último, el código se <b>documenta</b>: docstrings en cada función, comentarios que expliquen el porqué (no lo que ya es evidente) y nombres claros. La guía de estilo oficial de Python, la <b>PEP 8</b>, fija convenciones como sangrar con cuatro espacios o limitar la longitud de las líneas. Un código claro lo agradecerán tus compañeros y tú mismo dentro de unos meses.</p>`,
      svg: B.ciclo("Ciclo de desarrollo: diseñar, programar, probar, depurar y documentar", "código", ["Diseñar", "Programar", "Probar", "Depurar", "Documentar"]),
    },
  ],
  figura: {
    titulo: "Ideas clave de la programación modular",
    items: [["Función", "def · return", "una tarea, con", "parámetros"], ["Ámbito", "LEGB", "variables locales", "y globales"], ["Módulo", "import", "biblioteca estándar", "y paquetes"], ["Excepción", "try · except", "capturar y", "lanzar (raise)"]],
  },
  video: B.V("mod-funciones", "Funciones en Python: def, return, argumentos y ámbito"),
  quiz: [
    ["La programación modular consiste en…", ["escribir todo en un único bloque", "dividir el programa en partes con tareas concretas", "usar solo módulos externos", "programar sin funciones"], 1, "Funciones y módulos con responsabilidades claras."],
    ["El diseño descendente parte de…", ["las instrucciones más simples", "la tarea general y la divide en subtareas", "los datos de salida", "el código de otros"], 1, "Top-down."],
    ["El principio DRY significa…", ["documentar todo", "no repetir código", "usar variables globales", "probar al final"], 1, "Don't Repeat Yourself."],
    ["En def f(a, b): …, a y b son…", ["argumentos", "parámetros", "módulos", "excepciones"], 1, "Los argumentos son los valores de la llamada."],
    ["Una función sin return devuelve…", ["0", "None", "un error", "una cadena vacía"], 1, "None es el valor «nada»."],
    ["¿Qué diferencia hay entre print y return?", ["Ninguna", "print muestra; return entrega el valor al programa", "return muestra en pantalla", "print termina la función"], 1, "Solo return permite usar el resultado."],
    ["Con def saludo(nombre, idioma=\"es\"), la llamada saludo(\"Eva\") usa idioma…", ["None", "\"es\"", "error", "\"en\""], 1, "Valor por defecto."],
    ["*args recoge los argumentos sobrantes en…", ["un diccionario", "una tupla", "una lista de claves", "una cadena"], 1, "**kwargs los recoge en un diccionario."],
    ["return a, b devuelve…", ["solo a", "una tupla (a, b)", "un error", "una lista"], 1, "Se puede desempaquetar en dos variables."],
    ["Una función pura…", ["muestra datos por pantalla", "depende solo de sus argumentos y no cambia nada externo", "modifica variables globales", "no tiene parámetros"], 1, "Mismo dato, mismo resultado."],
    ["Según la regla LEGB, lo primero que Python consulta es el ámbito…", ["global", "local", "built-in", "del módulo"], 1, "Local, Enclosing, Global, Built-in."],
    ["Una variable creada dentro de una función, fuera de ella…", ["sigue existiendo", "no existe (NameError)", "vale 0", "se vuelve global"], 1, "Es local."],
    ["Si una función recibe una lista y hace lista.append(1), la lista original…", ["no cambia", "cambia", "se copia", "se borra"], 1, "Las listas son mutables."],
    ["lambda x: x + 1 es…", ["un módulo", "una función anónima", "una excepción", "un bucle"], 1, "Función de una sola expresión."],
    ["filter(lambda x: x > 0, datos) devuelve…", ["todos los datos", "solo los positivos", "la suma", "el máximo"], 1, "Selecciona los que cumplen la condición."],
    ["Para usar sqrt sin prefijo se escribe…", ["import sqrt", "from math import sqrt", "import math as sqrt", "math.sqrt import"], 1, "from módulo import nombre."],
    ["El bloque if __name__ == \"__main__\": se ejecuta…", ["siempre", "solo al ejecutar el fichero directamente", "solo al importarlo", "nunca"], 1, "Al importar, __name__ es el nombre del módulo."],
    ["int(\"tres\") lanza…", ["TypeError", "ValueError", "NameError", "IndexError"], 1, "El valor no representa un entero."],
    ["El bloque finally se ejecuta…", ["solo si hay error", "solo si no hay error", "siempre", "nunca"], 2, "Útil para cerrar recursos."],
    ["raise sirve para…", ["capturar una excepción", "lanzar una excepción", "importar módulos", "repetir código"], 1, "Avisa de un dato incorrecto."],
  ],
  examen: [
    ["¿Qué muestra? def f(x, y=2): return x ** y\nprint(f(3) + f(2, 3))", ["17", "15", "13", "12"], 0, "9 + 8 = 17."],
    ["¿Qué muestra? x = 10\ndef g(): x = 5; return x\ng(); print(x)", ["5", "10", "None", "error"], 1, "La x de g es local."],
    ["¿Qué muestra? def h(L): L.append(len(L))\nA = [7]; h(A); h(A); print(A)", ["[7]", "[7, 1, 2]", "[7, 1]", "[7, 0, 1]"], 1, "len vale 1 y luego 2."],
    ["¿Qué es sorted([\"pera\", \"kiwi\", \"uva\"], key=len)?", ["[\"uva\", \"pera\", \"kiwi\"]", "[\"kiwi\", \"pera\", \"uva\"]", "[\"uva\", \"kiwi\", \"pera\"]", "error"], 0, "Por longitud; pera y kiwi empatan y conservan su orden."],
    ["¿Qué devuelve [x * x for x in range(5) if x % 2 == 0]?", ["[0, 4, 16]", "[1, 9]", "[0, 1, 4, 9, 16]", "[4, 16]"], 0, "x = 0, 2, 4."],
    ["try: n = int(\"7a\")\nexcept ValueError: n = -1\nelse: n = n * 2\nprint(n)", ["14", "-1", "-2", "error"], 1, "Salta al except; else no se ejecuta."],
    ["¿Qué imprime? def f(): return 1; print(2)\nprint(f())", ["1", "2", "1 y 2", "None"], 0, "Tras return la función termina."],
    ["¿Qué tipo de error tiene un programa que calcula la media dividiendo entre len(lista) + 1?", ["sintaxis", "excepción", "lógico", "importación"], 2, "Funciona, pero da un resultado erróneo."],
  ],
  feynman: ["Qué es la programación modular y qué ventajas tiene el diseño descendente", "Qué diferencia hay entre parámetro y argumento, y entre print y return", "Cómo funcionan los parámetros por defecto, por nombre y *args", "Qué es el ámbito de una variable y cómo se aplica la regla LEGB", "Por qué una lista modificada dentro de una función cambia fuera y un número no", "Cómo se importa un módulo y para qué sirve if __name__ == \"__main__\"", "Cómo se capturan y se lanzan excepciones con try, except, else, finally y raise"],
  mapa: ["PROGRAMACIÓN MODULAR", [["Funciones", "def · parámetros · return"], ["Ámbito", "local · global · LEGB"], ["Módulos", "import · paquetes · pip"], ["Excepciones", "try/except · raise · assert"]]],
  tarjetas: [
    ["Programación modular", "Dividir el programa en funciones y módulos con tareas concretas."],
    ["Diseño descendente", "De la tarea general a subtareas cada vez más sencillas."],
    ["Parámetro y argumento", "Variable de la definición / valor de la llamada."],
    ["return", "Termina la función y devuelve un valor. Sin él: None."],
    ["Parámetros por defecto", "def f(x, n=2): si no se pasa n, vale 2."],
    ["*args y **kwargs", "Número variable de argumentos: tupla / diccionario."],
    ["Regla LEGB", "Local → Enclosing → Global → Built-in."],
    ["Mutable e inmutable", "Listas y diccionarios cambian dentro de la función; números y textos no."],
    ["lambda", "Función anónima de una expresión: lambda x: x * 2."],
    ["Importar", "import math · from random import randint · import datetime as dt."],
    ["try / except", "try: lo que puede fallar; except: qué hacer; else: si no falla; finally: siempre."],
    ["raise y assert", "Lanzar una excepción / comprobar una condición en las pruebas."],
  ],
  ejemplos: [
    ["Diseña de forma descendente un programa que lea las notas de una clase y muestre la media, la nota máxima y cuántos han aprobado.", ["Tarea general: informe de notas.", "Subtareas: leer_notas(), media(), aprobados(), informe().", "Cada función recibe datos y devuelve un resultado; el programa principal solo las encadena."], "def leer_notas():\n    texto = input(\"Notas separadas por comas: \")\n    return [float(x) for x in texto.split(\",\")]\n\ndef media(notas):\n    return sum(notas) / len(notas)\n\ndef aprobados(notas):\n    return len([n for n in notas if n >= 5])\n\nnotas = leer_notas()\nprint(\"Media:\", round(media(notas), 2))\nprint(\"Máxima:\", max(notas))\nprint(\"Aprobados:\", aprobados(notas))"],
    ["Escribe una función es_primo(n) y úsala para listar los primos menores que 50.", ["Un primo solo es divisible entre 1 y sí mismo; los menores que 2 no son primos.", "Basta probar divisores hasta la raíz cuadrada de n.", "Es un predicado: devuelve True o False."], "def es_primo(n):\n    if n < 2:\n        return False\n    for d in range(2, int(n ** 0.5) + 1):\n        if n % d == 0:\n            return False\n    return True\n\nprint([n for n in range(50) if es_primo(n)])"],
    ["Escribe una función precio_final(precio, iva=0.21, descuento=0) y llámala de tres formas distintas.", ["iva y descuento tienen valor por defecto.", "Primero se aplica el descuento y después el IVA.", "Se puede llamar por posición o por nombre."], "def precio_final(precio, iva=0.21, descuento=0):\n    return round(precio * (1 - descuento) * (1 + iva), 2)\n\nprecio_final(100)                 # 121.0\nprecio_final(100, 0.10)           # 110.0\nprecio_final(100, descuento=0.2)  # 96.8"],
    ["Haz la traza: def doble(L): L = L * 2; return L. Con A = [1, 2]; B = doble(A); ¿cuánto valen A y B?", ["Dentro de la función, L * 2 crea una lista nueva [1, 2, 1, 2].", "La asignación L = … solo cambia la variable local L.", "A no se ha modificado con ningún método."], "A = [1, 2] y B = [1, 2, 1, 2]."],
    ["Ordena una lista de alumnos (nombre, nota) de mayor a menor nota y, en caso de empate, por nombre.", ["sorted admite una clave key.", "La clave puede ser una tupla: primero −nota (para que sea descendente) y luego el nombre.", "Se usa una lambda."], "alumnos = [(\"Leo\", 7), (\"Ana\", 9), (\"Bea\", 7)]\nr = sorted(alumnos, key=lambda a: (-a[1], a[0]))\n# [('Ana', 9), ('Bea', 7), ('Leo', 7)]"],
    ["Escribe una función calcular_edad(año_nacimiento) que lance un ValueError si el año es posterior al actual, y un programa que capture el error.", ["Se obtiene el año actual con datetime.", "Si el dato no tiene sentido, raise.", "El programa principal usa try/except y muestra el mensaje."], "import datetime\n\ndef calcular_edad(año):\n    actual = datetime.date.today().year\n    if año > actual:\n        raise ValueError(\"El año no puede ser futuro\")\n    return actual - año\n\ntry:\n    print(calcular_edad(int(input(\"Año: \"))))\nexcept ValueError as e:\n    print(\"Error:\", e)"],
  ],
  errores: [
    "Usar print en lugar de return y después intentar operar con el resultado de la función (que es None).",
    "Modificar variables globales desde las funciones en lugar de pasar argumentos y devolver resultados.",
    "No darse cuenta de que una lista pasada a una función se modifica fuera de ella.",
    "Poner una lista vacía como valor por defecto de un parámetro: se comparte entre llamadas.",
    "Escribir except: sin tipo de excepción, que oculta todos los errores, incluidos los de programación.",
    "Llamar a un fichero propio igual que un módulo estándar (random.py, math.py), lo que impide importar el original.",
  ],
  ejercicios: {
    b: [
      ["Explica qué es la programación modular y cita tres ventajas.", "Dividir un programa en partes independientes (funciones y módulos) con tareas concretas. Ventajas: es más legible, permite reutilizar código, facilita las pruebas y la depuración y permite el trabajo en equipo."],
      ["Diferencia entre parámetro y argumento con un ejemplo.", "En def doble(x): return 2 * x, x es el parámetro; en doble(7), 7 es el argumento, el valor concreto que toma x."],
      ["Escribe una función cubo(n) que devuelva el cubo de un número.", "def cubo(n):\n    return n ** 3"],
      ["¿Qué devuelve una función que no tiene return? ¿Qué mostrará print(f()) si def f(): x = 3?", "Devuelve None, así que print(f()) muestra None."],
      ["Escribe una función es_par(n) que devuelva True si n es par.", "def es_par(n):\n    return n % 2 == 0"],
      ["Escribe una función saludar(nombre, saludo=\"Hola\") y llámala con y sin el segundo argumento.", "def saludar(nombre, saludo=\"Hola\"):\n    return saludo + \", \" + nombre\n\nsaludar(\"Iris\")           # 'Hola, Iris'\nsaludar(\"Iris\", \"Buenas\")  # 'Buenas, Iris'"],
      ["Indica qué es una variable local y qué es una variable global.", "Local: se crea dentro de una función y solo existe mientras esta se ejecuta. Global: se crea en el cuerpo del módulo, fuera de las funciones, y puede leerse desde todo el fichero."],
      ["Escribe la instrucción para importar solo la función randint del módulo random y simula un dado.", "from random import randint\ndado = randint(1, 6)"],
      ["Cita cuatro módulos de la biblioteca estándar de Python y su utilidad.", "math (funciones matemáticas), random (azar), datetime (fechas), os o pathlib (ficheros y carpetas), csv y json (formatos de datos), statistics (estadística)."],
      ["Indica qué excepción produce cada instrucción: int(\"x\"), 3 / 0, [1, 2][4], \"a\" + 1.", "ValueError, ZeroDivisionError, IndexError y TypeError."],
      ["Escribe una lambda que devuelva el último carácter de un texto.", "ultimo = lambda s: s[-1]"],
      ["¿Para qué sirve el bloque finally?", "Su código se ejecuta siempre, se haya producido una excepción o no. Se usa para liberar recursos, como cerrar un fichero o una conexión."],
    ],
    m: [
      ["Escribe una función max_min(lista) que devuelva el máximo y el mínimo sin usar max ni min, y desempaqueta el resultado.", "def max_min(L):\n    mayor = menor = L[0]\n    for x in L[1:]:\n        if x > mayor:\n            mayor = x\n        if x < menor:\n            menor = x\n    return mayor, menor\n\nM, m = max_min([4, 9, 1, 7])   # 9, 1"],
      ["Escribe una función media(*numeros) que acepte cualquier cantidad de números y devuelva 0 si no recibe ninguno.", "def media(*numeros):\n    if not numeros:\n        return 0\n    return sum(numeros) / len(numeros)"],
      ["Haz la traza: t = 1\ndef f(t): t = t + 5; return t * 2\nprint(f(t), t)", "Dentro de f, el parámetro t vale 1 y pasa a 6; devuelve 12. La t global no cambia. Muestra: 12 1."],
      ["Explica qué muestra este código y por qué: def borrar(L): L.clear()\nA = [1, 2, 3]; borrar(A); print(A)", "Muestra []. La lista es mutable y L y A son el mismo objeto, así que clear() vacía la lista original."],
      ["Reescribe con una lista por comprensión: list(map(lambda x: x ** 2, filter(lambda x: x > 0, datos))).", "[x ** 2 for x in datos if x > 0]"],
      ["Dada palabras = [\"sol\", \"murciélago\", \"pan\", \"árbol\"], obtén la palabra más larga con max y una clave.", "max(palabras, key=len)   # 'murciélago'"],
      ["Escribe una función leer_nota() que pida una nota hasta que sea un número entre 0 y 10, usando try/except.", "def leer_nota():\n    while True:\n        try:\n            n = float(input(\"Nota: \"))\n            if 0 <= n <= 10:\n                return n\n            print(\"Debe estar entre 0 y 10\")\n        except ValueError:\n            print(\"No es un número\")"],
      ["Escribe una función dividir(a, b) que lance un ValueError con un mensaje claro si b es 0.", "def dividir(a, b):\n    if b == 0:\n        raise ValueError(\"El divisor no puede ser 0\")\n    return a / b"],
      ["Crea un módulo conversor.py con las funciones c_a_f y f_a_c y un programa que lo importe.", "# conversor.py\ndef c_a_f(c):\n    return c * 9 / 5 + 32\n\ndef f_a_c(f):\n    return (f - 32) * 5 / 9\n\n# programa.py\nimport conversor\nprint(conversor.c_a_f(100))   # 212.0"],
      ["Explica para qué sirve if __name__ == \"__main__\": en el módulo anterior y añade unas pruebas.", "Permite que el código de prueba solo se ejecute al lanzar el fichero directamente, no al importarlo.\n\nif __name__ == \"__main__\":\n    assert c_a_f(0) == 32\n    assert f_a_c(212) == 100\n    print(\"Pruebas superadas\")"],
      ["Escribe tres assert para comprobar una función es_bisiesto(año), incluyendo casos límite.", "assert es_bisiesto(2024)\nassert not es_bisiesto(1900)   # divisible entre 100 pero no entre 400\nassert es_bisiesto(2000)       # divisible entre 400"],
      ["¿Qué problema tiene def añadir(x, L=[]): L.append(x); return L? Corrígelo.", "La lista por defecto se crea una sola vez y se comparte: añadir(1) da [1] y después añadir(2) da [1, 2].\n\ndef añadir(x, L=None):\n    if L is None:\n        L = []\n    L.append(x)\n    return L"],
      ["Clasifica como pura o con efectos secundarios: a) def iva(p): return p * 1.21; b) def mostrar(p): print(p); c) def vaciar(L): L.clear().", "a) Pura. b) Con efectos (muestra en pantalla). c) Con efectos (modifica la lista recibida)."],
      ["Escribe una función contar(texto, *letras) que devuelva un diccionario con cuántas veces aparece cada letra indicada.", "def contar(texto, *letras):\n    return {l: texto.lower().count(l) for l in letras}\n\ncontar(\"Programación\", \"a\", \"o\")   # {'a': 2, 'o': 2}"],
    ],
    a: [
      ["Diseña de forma descendente un programa de cajero automático (consultar saldo, ingresar, retirar) y escribe la cabecera y la docstring de cada función.", "def consultar(saldo):\n    \"\"\"Devuelve un texto con el saldo.\"\"\"\n\ndef ingresar(saldo, cantidad):\n    \"\"\"Devuelve el nuevo saldo; ValueError si cantidad <= 0.\"\"\"\n\ndef retirar(saldo, cantidad):\n    \"\"\"Devuelve el nuevo saldo; ValueError si no hay fondos.\"\"\"\n\ndef menu():\n    \"\"\"Muestra las opciones y devuelve la elegida.\"\"\"\n\nEl programa principal repite: menu(), llama a la función adecuada dentro de try/except y actualiza el saldo con el valor devuelto."],
      ["Escribe una función aplicar(f, lista) que haga lo mismo que map sin usar map, y úsala con una lambda.", "def aplicar(f, lista):\n    return [f(x) for x in lista]\n\naplicar(lambda x: x + 10, [1, 2, 3])   # [11, 12, 13]"],
      ["Escribe una función que devuelva otra función: multiplicador(n) devuelve una función que multiplica por n. ¿Qué ámbito interviene?", "def multiplicador(n):\n    def f(x):\n        return x * n\n    return f\n\ntriple = multiplicador(3)\ntriple(5)   # 15\n\nDentro de f, n no es local: se encuentra en el ámbito Enclosing (la función externa). Es un cierre o closure."],
      ["Escribe una función estadisticas(notas) que devuelva un diccionario con media, mediana y moda usando el módulo statistics, y lance ValueError si la lista está vacía.", "import statistics as st\n\ndef estadisticas(notas):\n    if not notas:\n        raise ValueError(\"Lista vacía\")\n    return {\"media\": st.mean(notas), \"mediana\": st.median(notas), \"moda\": st.mode(notas)}"],
      ["Una función debe leer un fichero de números y devolver su suma. Escríbela con manejo de FileNotFoundError y ValueError (líneas no numéricas, que se ignoran).", "def sumar_fichero(ruta):\n    total = 0\n    try:\n        with open(ruta) as f:\n            for linea in f:\n                try:\n                    total += float(linea)\n                except ValueError:\n                    pass\n    except FileNotFoundError:\n        print(\"No existe\", ruta)\n        return None\n    return total"],
      ["Explica la diferencia entre lista.sort() y sorted(lista) en términos de funciones puras y efectos secundarios.", "sorted(lista) es pura: no cambia la lista y devuelve una nueva ordenada. lista.sort() tiene un efecto secundario: ordena la propia lista (es mutable) y devuelve None. Por eso x = lista.sort() deja x = None."],
      ["Escribe la función validar_dni(dni) que lance ValueError si no tiene 8 cifras y una letra, o si la letra es incorrecta (letra = \"TRWAGMYFPDXBNJZSQVHLCKE\"[número % 23]).", "def validar_dni(dni):\n    L = \"TRWAGMYFPDXBNJZSQVHLCKE\"\n    if len(dni) != 9 or not dni[:8].isdigit() or not dni[8].isalpha():\n        raise ValueError(\"Formato incorrecto\")\n    if L[int(dni[:8]) % 23] != dni[8].upper():\n        raise ValueError(\"Letra incorrecta\")\n    return True"],
      ["Diseña una batería de seis casos de prueba (normales, límite y erróneos) para una función descuento(precio, porcentaje).", "descuento(100, 20) == 80 (normal); descuento(59.90, 10) == 53.91 (decimales); descuento(100, 0) == 100 (límite inferior); descuento(100, 100) == 0 (límite superior); descuento(100, 120) → ValueError; descuento(-5, 10) → ValueError."],
      ["Organiza en un paquete un juego con módulos de datos, lógica e interfaz. Dibuja la estructura de carpetas y escribe dos instrucciones de importación.", "juego/\n    __init__.py\n    datos.py      (preguntas, puntuaciones)\n    logica.py     (comprobar, puntuar)\n    interfaz.py   (mostrar, leer respuestas)\nprincipal.py\n\nfrom juego.logica import comprobar\nimport juego.interfaz as ui"],
      ["Debate: ¿es preferible que una función devuelva -1 cuando falla o que lance una excepción? Argumenta.", "Lanzar una excepción suele ser mejor: obliga a tratar el error, lleva un mensaje explicativo y no se confunde con un resultado válido (−1 podría ser un valor posible y usarse sin darse cuenta). Devolver un valor especial puede tener sentido cuando el «fallo» es un caso normal, como str.find, que devuelve −1 si no encuentra el texto."],
    ],
  },
  glosario: [
    ["Programación modular", "Técnica que divide un programa en partes independientes con tareas concretas."],
    ["Diseño descendente", "Método que descompone un problema general en subproblemas más sencillos."],
    ["Función", "Bloque de código con nombre que realiza una tarea y puede devolver un valor."],
    ["Parámetro", "Variable de la definición de una función que recibe un valor."],
    ["Argumento", "Valor concreto que se pasa a una función al llamarla."],
    ["Docstring", "Cadena de documentación al principio de una función o módulo."],
    ["Ámbito", "Parte del programa en la que una variable existe y puede usarse."],
    ["Función pura", "La que solo depende de sus argumentos y no produce efectos secundarios."],
    ["Efecto secundario", "Cambio que produce una función fuera de ella: mostrar, guardar o modificar datos."],
    ["Lambda", "Función anónima de una sola expresión."],
    ["Función de orden superior", "La que recibe o devuelve otras funciones, como map o sorted."],
    ["Módulo", "Fichero de Python con definiciones que pueden importarse."],
    ["Paquete", "Carpeta que agrupa varios módulos relacionados."],
    ["Biblioteca estándar", "Conjunto de módulos que vienen incluidos con Python."],
    ["Excepción", "Error que se produce durante la ejecución y que puede capturarse."],
    ["Traza (traceback)", "Mensaje que indica el tipo de error, la línea y la cadena de llamadas."],
    ["Caso de prueba", "Entrada con su salida esperada para comprobar el código."],
  ],
  situacion: {
    titulo: "Una biblioteca de utilidades para el instituto",
    reto: "En grupos de tres, cread un paquete de Python con módulos reutilizables para el centro (notas, horarios y fechas) y un programa que los use. Cada miembro programa y prueba un módulo.",
    pasos: [
      "Aplicad el diseño descendente: decidid qué módulos habrá y qué funciones tendrá cada uno, con su cabecera y su docstring.",
      "Repartid los módulos y programad las funciones como funciones puras siempre que sea posible.",
      "Añadid validación de datos con excepciones (raise) y su tratamiento con try/except en el programa principal.",
      "Escribid al menos cinco pruebas con assert por módulo, incluyendo casos límite, dentro de if __name__ == \"__main__\".",
      "Integrad los módulos en un programa principal y comprobad que funcionan juntos.",
      "Presentad el paquete a la clase explicando la interfaz de cada módulo.",
    ],
    producto: "Paquete de Python con tres módulos documentados y probados, programa principal y una ficha con la interfaz de cada función.",
    evaluacion: [
      "La división en módulos y funciones es lógica y cada función tiene una responsabilidad única.",
      "Las funciones usan parámetros y return correctamente y están documentadas.",
      "Los errores se detectan y se tratan con excepciones adecuadas.",
      "Las pruebas cubren casos normales, límite y erróneos, y se superan.",
    ],
  },
  familias: [
    "Pedidle que os explique cómo dividiría en pasos (funciones) una tarea de casa, como organizar una cena.",
    "Interesaos por los mensajes de error que aparecen en sus programas y cómo los resuelve.",
    "Comentad juntos qué ocurre cuando una aplicación «se cuelga» y por qué es importante prever los fallos.",
    "Animadle a reutilizar sus funciones en pequeños proyectos personales (un juego, una calculadora).",
  ],
  saberes: "Programación modular: diseño descendente, funciones (definición, parámetros posicionales, por nombre, por defecto y variables, valores de retorno), ámbito de las variables, paso de argumentos mutables e inmutables, funciones lambda y de orden superior, módulos de la biblioteca estándar, módulos y paquetes propios, gestión de excepciones, depuración, pruebas y documentación (Tecnologías de la Información y la Comunicación II, optativa de 2º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Refactorización: entregar un programa largo sin funciones y pedir que lo dividan en funciones con una única responsabilidad.",
    "Contrato de funciones: un grupo escribe las cabeceras y docstrings y otro las implementa sin hablar entre ellos.",
    "Caza del error: mostrar trazas reales y pedir que localicen la línea y el tipo de excepción.",
    "Pruebas cruzadas: cada pareja escribe casos de prueba para las funciones de otra pareja.",
  ],
  fuentes: [
    B.PYDOC,
    { t: "PEP 8: guía de estilo para el código Python", url: "https://peps.python.org/pep-0008/" },
    { t: "Margaret Hamilton, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Margaret_Hamilton_(cient%C3%ADfica)" },
  ],
}));
