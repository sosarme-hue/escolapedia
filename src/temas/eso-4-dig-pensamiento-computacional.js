// Digitalización 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Digitalización",
  curso: "4-eso",
  titulo: "Programación y pensamiento computacional",
  minutos: 45,
  objetivos: ["Aplicar los cuatro pilares del pensamiento computacional a un problema", "Escribir algoritmos con secuencias, condiciones y bucles", "Crear y depurar programas sencillos por bloques o en texto"],
  claves: ["descomposición", "patrón", "abstracción", "algoritmo", "bucle", "depuración"],
  pregunta: {
    texto: "¿Cómo le explicarías a un robot que no sabe nada cómo preparar un bocadillo, si solo entiende órdenes muy simples?",
    respuesta: "Tendrías que <b>descomponer</b> la tarea en pasos diminutos y ordenados: coger el pan, abrirlo, coger el cuchillo… y prever casos: «<mark>si</mark> no hay queso, usa jamón», «<mark>repite</mark> hasta cubrir el pan». Eso es un <b>algoritmo</b>, y pensar así es pensamiento computacional. Sirve para programar y para resolver cualquier problema.",
  },
  bloques: [
    {
      html: `<h3>Los cuatro pilares</h3><p>El <b>pensamiento computacional</b> es una forma de resolver problemas que se puede aplicar con o sin ordenador. Tiene cuatro pilares: <b>descomposición</b> (dividir un problema grande en partes pequeñas), <b>reconocimiento de patrones</b> (ver qué se repite o se parece a algo ya resuelto), <b>abstracción</b> (quedarse con lo importante e ignorar los detalles) y <mark>algoritmo</mark> (escribir los pasos ordenados para resolverlo).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro pilares del pensamiento computacional: descomposición, patrones, abstracción y algoritmo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="20" width="220" height="22" rx="6" fill="var(--ink)"/><text x="130" y="35" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>problema</text>
        ${[["descom-", "posición", "var(--pen)"], ["patrones", "", "var(--sun)"], ["abstrac-", "ción", "var(--leaf)"], ["algoritmo", "", "var(--red)"]]
          .map(([a, b, c], i) => `<rect x="${26 + i * 54}" y="48" width="44" height="88" rx="4" fill="${c}"/><text x="${48 + i * 54}" y="${b ? 88 : 96}" text-anchor="middle" font-size="9" font-weight="700" fill="#fff" ${F}>${a}</text>${b ? `<text x="${48 + i * 54}" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#fff" ${F}>${b}</text>` : ""}`).join("")}
        <rect x="16" y="140" width="228" height="22" rx="6" fill="var(--muted)"/><text x="130" y="155" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>solución</text>
      </svg>`,
    },
    {
      html: `<h3>Algoritmos y diagramas de flujo</h3><p>Un <b>algoritmo</b> es una secuencia finita y ordenada de instrucciones que resuelve un problema. Se puede escribir en lenguaje natural, en <b>pseudocódigo</b> o con un <mark>diagrama de flujo</mark>, donde los óvalos marcan el inicio y el fin, los rectángulos las acciones, los rombos las decisiones (sí/no) y los paralelogramos la entrada y salida de datos. Un buen algoritmo es <b>preciso</b> (sin ambigüedades), <b>finito</b> (termina) y da siempre el mismo resultado con los mismos datos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Símbolos del diagrama de flujo: óvalo de inicio, rectángulo de acción, rombo de decisión y paralelogramo de datos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="24" y="24" width="80" height="30" rx="15" fill="var(--leaf)"/><text x="64" y="44" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>inicio / fin</text>
        <rect x="150" y="24" width="86" height="30" fill="var(--pen)"/><text x="193" y="44" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>acción</text>
        <path d="M64 86 L 104 108 L 64 130 L 24 108 Z" fill="var(--sun)"/><text x="64" y="112" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)" ${F}>¿decisión?</text>
        <path d="M162 92 H 240 L 226 124 H 148 Z" fill="var(--inf)"/><text x="194" y="112" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>datos</text>
        <g ${F} font-size="9" fill="var(--muted)" text-anchor="middle"><text x="64" y="70">empieza y acaba</text><text x="193" y="70">hace algo</text><text x="64" y="150">sí / no</text><text x="194" y="142">entrada / salida</text></g>
      </svg>`,
    },
    {
      html: `<h3>Las estructuras básicas</h3><p>Cualquier programa se construye combinando tres estructuras. La <b>secuencia</b>: instrucciones una detrás de otra. La <b>selección</b> o <b>condicional</b>: <mark>si</mark> se cumple algo, haz esto; <mark>si no</mark>, lo otro. Y la <b>repetición</b> o <b>bucle</b>: repetir unas instrucciones un número de veces o mientras se cumpla una condición. Además se usan <b>variables</b>, cajas con nombre que guardan datos (puntos, vidas, nombre del jugador), y <b>operadores</b> para comparar y calcular.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Bloques de programación: secuencia, si-si no y repetir">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[0, 1, 2].map((i) => `<rect x="16" y="${30 + i * 26}" width="66" height="22" rx="4" fill="var(--pen)"/><text x="49" y="${45 + i * 26}" text-anchor="middle" font-size="9" fill="#fff" ${F}>paso ${i + 1}</text>`).join("")}
        <path d="M96 30 h 74 v 22 h -60 v 18 h 60 v 14 h -60 v 18 h 60 v 14 h -74 z" fill="var(--sun)"/>
        <g ${F} font-size="9" font-weight="700" fill="var(--ink)"><text x="102" y="45">si … entonces</text><text x="102" y="80">si no</text></g>
        <path d="M184 30 h 62 v 22 h -48 v 34 h 48 v 14 h -62 z" fill="var(--leaf)"/>
        <text x="190" y="45" font-size="9" font-weight="700" fill="#fff" ${F}>repetir 10</text>
        <g ${F} font-size="10" font-weight="700" text-anchor="middle"><text x="49" y="150" fill="var(--pen)">secuencia</text><text x="133" y="150" fill="var(--sun)">selección</text><text x="215" y="150" fill="var(--leaf)">bucle</text></g>
      </svg>`,
    },
    {
      html: `<h3>De los bloques al código</h3><p>Para empezar se usan lenguajes <b>por bloques</b>, como Scratch o MakeCode, donde las instrucciones encajan como piezas de puzle y no hay errores de escritura. Después se pasa a lenguajes <b>de texto</b>, como Python o JavaScript, más potentes. La lógica es la misma: el bloque «repetir 10 veces» se escribe en Python <mark>for i in range(10):</mark>. Los programas pueden responder a <b>eventos</b> (al pulsar una tecla, al tocar un objeto), lo que permite crear juegos, animaciones y aplicaciones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El mismo programa en bloques y en Python">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 40 h 104 v 20 h -90 v 26 h 90 v 14 h -104 z" fill="var(--leaf)"/><rect x="28" y="62" width="84" height="22" rx="3" fill="var(--pen)"/>
        <g ${F} font-size="9" font-weight="700" fill="#fff"><text x="20" y="54">repetir 10 veces</text><text x="34" y="77">decir «hola»</text></g>
        <path d="M122 70 h 14" stroke="var(--ink)" stroke-width="3"/><path d="M132 64 l 6 6 l -6 6" fill="none" stroke="var(--ink)" stroke-width="3"/>
        <rect x="142" y="40" width="106" height="60" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>
        <g font-family="ui-monospace, Menlo, monospace" font-size="9"><text x="146" y="62" font-size="8.5" fill="var(--pen)">for i in range(10):</text><text x="160" y="80" fill="var(--ink)">print("hola")</text></g>
        <g ${F} font-size="10" font-weight="700" text-anchor="middle"><text x="66" y="124" fill="var(--leaf)">bloques</text><text x="195" y="124" fill="var(--pen)">Python</text></g>
        <text x="130" y="156" text-anchor="middle" font-size="9" fill="var(--muted)" ${F}>misma lógica, distinta escritura</text>
      </svg>`,
    },
    {
      html: `<h3>Probar y depurar</h3><p>Casi ningún programa funciona a la primera. Los fallos se llaman <b>bugs</b>, y buscarlos y corregirlos es <b>depurar</b>. Hay errores de <b>sintaxis</b> (algo mal escrito, que impide ejecutar) y errores de <b>lógica</b> (el programa funciona pero hace otra cosa). Para depurar: lee el mensaje de error, prueba con <mark>datos sencillos</mark> cuyo resultado conoces, muestra el valor de las variables paso a paso y cambia una sola cosa cada vez. Explicar el código en voz alta (a un compañero o a un patito de goma) ayuda mucho.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo de depuración: probar, encontrar el error, corregir y volver a probar">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="130" cy="90" r="56" fill="none" stroke="var(--line)" stroke-width="10"/>
        ${[["probar", 130, 30, "var(--pen)"], ["¿falla?", 200, 94, "var(--red)"], ["corregir", 130, 160, "var(--leaf)"], ["entender", 58, 94, "var(--sun)"]].map(([t, x, y, c]) => `<rect x="${x - 30}" y="${y - 12}" width="60" height="22" rx="11" fill="${c}"/><text x="${x}" y="${y + 3}" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>${t}</text>`).join("")}
        <ellipse cx="130" cy="94" rx="14" ry="10" fill="var(--ink)"/><path d="M118 88 l -8 -6 M118 100 l -8 6 M142 88 l 8 -6 M142 100 l 8 6 M130 84 v -8" stroke="var(--ink)" stroke-width="2"/>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Pensamiento computacional en un problema real: organizar una excursión",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Los cuatro pilares aplicados a organizar una excursión">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Descomponer", "transporte, comida,", "permisos, horario", "var(--pen)"], ["Patrones", "la excursión del año", "pasado sirve de base", "var(--sun)"], ["Abstraer", "importa nº de alumnos,", "no su color favorito", "var(--leaf)"], ["Algoritmo", "lista de pasos", "con fechas y avisos", "var(--red)"]]
        .map(([n, a, b, c], i) => `<rect x="${16 + i * 154}" y="30" width="146" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="74" text-anchor="middle" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${89 + i * 154}" y="120" text-anchor="middle" font-size="12" fill="var(--ink)" ${F}>${a}</text>
          <text x="${89 + i * 154}" y="140" text-anchor="middle" font-size="12" fill="var(--ink)" ${F}>${b}</text>`).join("")}
    </svg>`,
  },
  video: { id: "ti315UlVtS4", titulo: "¿Qué es el pensamiento computacional?", canal: "Educar Portal", vistas: 269532, megusta: 0, busqueda: "qué es el pensamiento computacional" },
  quiz: [
    { q: "Dividir un problema grande en partes pequeñas es…", o: ["abstracción", "descomposición", "depuración"], a: 1, e: "Cada parte es más fácil de resolver." },
    { q: "En un diagrama de flujo, una decisión se dibuja con…", o: ["un óvalo", "un rombo", "un rectángulo"], a: 1, e: "El rombo tiene dos salidas: sí y no." },
    { q: "¿Qué estructura repite instrucciones?", o: ["El bucle", "La secuencia", "La variable"], a: 0, e: "Por ejemplo, «repetir 10 veces» o «mientras…»." },
    { q: "¿Qué es una variable?", o: ["Un error del programa", "Un espacio con nombre que guarda un dato", "Un tipo de bucle"], a: 1, e: "Su valor puede cambiar durante el programa." },
    { q: "Un programa se ejecuta pero suma en vez de restar. Es un error de…", o: ["sintaxis", "lógica", "hardware"], a: 1, e: "Está bien escrito, pero hace otra cosa." }
  ],
  examen: [
    { q: "Quedarse con los datos importantes e ignorar los detalles es…", o: ["abstracción", "reconocer patrones", "descomposición"], a: 0, e: "Así el problema se simplifica." },
    { q: "¿Qué hace en Python «for i in range(3): print(i)»?", o: ["Muestra 1, 2, 3", "Muestra 0, 1, 2", "Muestra 3"], a: 1, e: "range(3) da 0, 1 y 2." },
    { q: "¿Cuál es una buena estrategia para depurar?", o: ["Cambiar muchas cosas a la vez", "Probar con datos sencillos y cambiar una cosa cada vez", "Borrar el programa"], a: 1, e: "Así sabes qué cambio arregló (o estropeó) algo." },
  ],
  feynman: ["Los cuatro pilares del pensamiento computacional con un ejemplo", "Qué es un algoritmo y cómo se dibuja un diagrama de flujo", "Secuencia, selección y bucle", "Cómo pasar de un programa por bloques a Python", "Errores de sintaxis y de lógica, y cómo depurarlos"],
  mapa: mapa("PENSAR Y PROGRAMAR", "var(--eso)", [
    ["Pilares", "descomponer · patrones · abstraer", "var(--pen)"],
    ["Algoritmo", "pseudocódigo · diagrama", "var(--sun)"],
    ["Estructuras", "secuencia · si · bucle", "var(--leaf)"],
    ["Depurar", "sintaxis · lógica", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Los cuatro pilares", "Descomposición, patrones, abstracción y algoritmo."],
    ["¿Qué es un algoritmo?", "Una secuencia finita y ordenada de instrucciones que resuelve un problema."],
    ["Las tres estructuras básicas", "Secuencia, selección (condicional) y repetición (bucle)."],
    ["¿Qué es depurar?", "Buscar y corregir los errores (bugs) de un programa."],
    ["Error de sintaxis", "Algo mal escrito que impide que el programa se ejecute."],
  ],
  familias: ["Escribid juntos el algoritmo de una tarea de casa (poner la lavadora) y comprobad si alguien puede seguirlo al pie de la letra.", "Probad un reto de programación por bloques en code.org o Scratch.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Pensamiento computacional y programación: algoritmos, diagramas de flujo, estructuras de control, variables, lenguajes por bloques y textuales, y depuración (RD 217/2022, Digitalización 4º).",
    ideas: ["Actividad desenchufada: un alumno «programa» a otro para que dibuje una figura con órdenes simples.", "Crear un juego en Scratch y traducir una parte a Python.", "Concurso de depuración: programas con un error escondido para encontrarlo en parejas."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Pensamiento computacional, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Pensamiento_computacional" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Usar variables, funciones y listas para escribir programas ordenados", "Comparar algoritmos de búsqueda y ordenación"],
  tras: {
    "Las estructuras básicas": [
      { html: `<h3>Variables y tipos de datos</h3><p>Una <b>variable</b> es un espacio de memoria con nombre donde el programa guarda un dato que puede cambiar: los puntos de un juego, la edad de un usuario, un nombre. Los datos tienen un <b>tipo</b>: <b>enteros</b> (7), <b>decimales</b> (3.5), <b>textos</b> o cadenas ("Hola"), <b>booleanos</b> (verdadero o falso) y <b>listas</b> que agrupan varios valores ([4, 8, 15]). Con ellos se hacen operaciones aritméticas (+, −, *, /), comparaciones (==, &lt;, &gt;) y operaciones lógicas (y, o, no). Elegir <mark>nombres claros</mark> para las variables, como <code>puntos</code> en vez de <code>x</code>, hace el programa mucho más fácil de entender.</p>${AMP.tabla(["Tipo", "Ejemplo", "Uso"], [["Entero", "15", "Contar"], ["Decimal", "9.75", "Medir"], ["Texto", "\"Ana\"", "Nombres, mensajes"], ["Booleano", "True / False", "Condiciones"], ["Lista", "[3, 7, 2]", "Grupos de datos"]])}` },
    ],
    "De los bloques al código": [
      { html: `<h3>Programar con Scratch</h3><p><b>Scratch</b>, creado en el MIT, permite programar encajando bloques de colores, sin errores de escritura. Cada <b>objeto</b> (sprite) tiene sus programas, que empiezan con un <b>evento</b> («al hacer clic en la bandera»). Los bloques se agrupan por categorías: movimiento, apariencia, sonido, control (bucles y condiciones), sensores, operadores y variables. Con ellos se crean juegos, animaciones e historias interactivas. Los objetos pueden comunicarse enviando <b>mensajes</b>. Es ideal para aprender la lógica, porque las estructuras son las mismas que en cualquier lenguaje: <mark>secuencia, condición y bucle</mark>.</p>`, video: { id: "D-nW4jvzRr8", titulo: "Guía para principiantes de Scratch", canal: "ZonxScratch", vistas: 1701459 } },
      { html: `<h3>Primeros pasos en Python</h3><p><b>Python</b> es uno de los lenguajes más usados del mundo, en ciencia, inteligencia artificial o páginas web, y su sintaxis es muy legible. <code>print("Hola")</code> muestra un texto; <code>nombre = input("¿Cómo te llamas? ")</code> pide un dato; <code>if nota &gt;= 5:</code> abre una condición, y <code>for i in range(10):</code> repite diez veces. En Python la <mark>sangría</mark> (los espacios al principio de la línea) indica qué instrucciones están dentro de un bloque, así que es obligatoria. Los textos que llegan con <code>input</code> hay que convertirlos con <code>int()</code> si se quiere operar con ellos.</p>`, video: { id: "_6N18g3ewnw", titulo: "Aprende Python en 10 minutos", canal: "Programador X", vistas: 1063099 } },
      { html: `<h3>Funciones y modularidad</h3><p>Una <b>función</b> es un trozo de programa con nombre que realiza una tarea concreta y se puede usar muchas veces. Recibe datos de entrada (<b>parámetros</b>) y puede devolver un resultado. Por ejemplo, una función <code>area_rectangulo(base, altura)</code> devuelve base · altura. Dividir un programa en funciones es aplicar la <b>descomposición</b>: cada parte es más fácil de escribir, probar y corregir, y se puede <mark>reutilizar</mark> en otros programas. En Scratch, las funciones se crean con «Mis bloques».</p>` },
    ],
    "Probar y depurar": [
      { html: `<h3>Buscar y ordenar</h3><p>Dos problemas clásicos muestran que hay algoritmos mejores que otros. Para <b>buscar</b> un dato en una lista desordenada solo cabe mirar uno por uno (<b>búsqueda lineal</b>). Pero si la lista está ordenada, la <b>búsqueda binaria</b> mira el elemento central y descarta la mitad en cada paso: en una lista de 1.000 elementos encuentra el dato en <mark>unos 10 pasos</mark> en vez de hasta 1.000. Para <b>ordenar</b>, el método de la burbuja compara parejas vecinas y las intercambia si están desordenadas; es sencillo pero lento, y por eso se usan métodos más eficientes con muchos datos.</p>` },
    ],
  },
  ejemplos: [
    { enunciado: "Escribe en Python un programa que pida una nota y diga si está aprobada.", pasos: ["Pide el dato y conviértelo en número: nota = int(input(\"Nota: \")).", "Condición: if nota >= 5: print(\"Aprobado\").", "Si no: else: print(\"Suspenso\"). Las líneas de print van sangradas."], resultado: "Un programa de cuatro líneas con if y else." },
    { enunciado: "Sigue este programa y di qué muestra: total = 0; for i in range(1, 5): total = total + i; print(total).", pasos: ["range(1, 5) da los valores 1, 2, 3 y 4.", "total va valiendo 1, 3, 6 y 10.", "Al terminar el bucle se muestra total."], resultado: "Muestra 10." },
    { enunciado: "¿Cuántos pasos necesita, como máximo, la búsqueda binaria en una lista ordenada de 64 elementos?", pasos: ["Cada paso divide la lista a la mitad: 64, 32, 16, 8, 4, 2, 1.", "Son 6 divisiones hasta quedar un elemento (2⁶ = 64).", "Con una búsqueda más de comprobación, unos 7 pasos."], resultado: "Unos 6 o 7 pasos, frente a 64 de la búsqueda lineal." },
  ],
  errores: [
    "Olvidar la sangría en Python, o mezclar espacios y tabuladores.",
    "Operar con el resultado de input() sin convertirlo con int().",
    "Confundir = (asignar un valor) con == (comparar).",
    "Escribir un bucle que nunca termina porque la condición no cambia.",
    "Usar nombres de variables como x o a, que no explican qué guardan.",
    "Aplicar la búsqueda binaria a una lista que no está ordenada.",
  ],
  ejercicios: [
    { q: "Indica el tipo de dato: 42, \"42\", 3.14, True, [1, 2, 3].", sol: "Entero, texto, decimal, booleano y lista." },
    { q: "¿Qué muestra este programa? a = 5; b = 3; a = a + b; print(a * 2).", sol: "a vale 8, así que muestra 16." },
    { q: "Escribe un bucle en Python que muestre los números del 1 al 10.", sol: "for i in range(1, 11): print(i)." },
    { q: "Escribe un programa que pida la edad y diga «Puedes votar» si es 18 o más.", sol: "edad = int(input(\"Edad: \")); if edad >= 18: print(\"Puedes votar\")." },
    { q: "Escribe una función que reciba un número y devuelva su doble.", sol: "def doble(n): return n * 2." },
    { q: "Describe un algoritmo para encontrar el número mayor de una lista.", sol: "Guarda el primero como mayor; recorre la lista y, si un número es mayor que el guardado, sustitúyelo; al final, el guardado es el mayor." },
    { q: "En Scratch, ¿qué bloque usarías para que un objeto se mueva sin parar?", sol: "Un bloque «por siempre» con «mover 10 pasos» y «rebotar si toca un borde» dentro." },
    { q: "Encuentra el error: if nota > 5: print(\"Aprobado\") (un alumno con un 5 aparece como suspenso).", sol: "La condición debe ser nota >= 5, para incluir el 5." },
    { q: "Ordena con el método de la burbuja la lista [5, 2, 4, 1] e indica la primera pasada.", sol: "Primera pasada: [2, 5, 4, 1] → [2, 4, 5, 1] → [2, 4, 1, 5]. Al final: [1, 2, 4, 5]." },
    { q: "¿Por qué conviene dividir un programa en funciones?", sol: "Porque cada parte es más fácil de escribir, probar y corregir, y se puede reutilizar." },
  ],
  quiz: [
    { q: "En Python, la sangría…", o: ["es opcional", "indica los bloques de código", "solo sirve para que quede bonito"], a: 1, e: "Es obligatoria." },
    { q: "True y False son datos de tipo…", o: ["texto", "booleano", "entero"], a: 1, e: "Verdadero o falso." },
    { q: "== sirve para…", o: ["asignar", "comparar", "sumar"], a: 1, e: "= asigna; == compara." },
    { q: "La búsqueda binaria necesita que la lista esté…", o: ["ordenada", "vacía", "en mayúsculas"], a: 0, e: "Descarta la mitad en cada paso." },
    { q: "Una función que recibe datos los recibe como…", o: ["parámetros", "eventos", "sprites"], a: 0, e: "Por ejemplo, base y altura." },
  ],
  tarjetas: [
    ["Variable", "Espacio de memoria con nombre que guarda un dato que puede cambiar."],
    ["Función", "Trozo de programa con nombre que hace una tarea y se puede reutilizar."],
    ["Búsqueda binaria", "Busca en una lista ordenada descartando la mitad en cada paso."],
  ],
});

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 110,
  revisado: "2026-11-13",
  lectura: {
    titulo: "La receta que una máquina sí entiende",
    html: `<p>Pide a un compañero que te dé instrucciones para hacer un bocadillo y síguelas al pie de la letra, como haría un robot. «Pon el jamón en el pan»: dejas el paquete cerrado encima de la barra. «Corta el pan»: lo partes en cuatro trozos. En pocos minutos descubrirás algo que todos los programadores aprenden pronto: un ordenador no entiende lo que <i>quieres decir</i>, solo lo que <i>dices</i>, paso a paso y sin ambigüedades.</p>
      <p>Esa es la esencia del <b>pensamiento computacional</b>: descomponer un problema, encontrar patrones, quedarse con lo importante y escribir un algoritmo tan preciso que lo pueda ejecutar una máquina. Con él se programan desde los semáforos de tu ciudad hasta el algoritmo que te recomienda vídeos. En este tema aprenderás a diseñar algoritmos, a trabajar con variables, listas y bucles en Scratch y en Python, a organizar el código en funciones y a medir si un algoritmo es más eficiente que otro. Programar no es memorizar órdenes: es aprender a pensar con orden.</p>`,
  },
  svgs: {
    "Variables y tipos de datos": L.rejilla("Tipos de datos en Python con ejemplos", ["Tipo", "Nombre", "Ejemplo"], [["Entero", "int", "42"], ["Decimal", "float", "3.14"], ["Texto", "str", "\"hola\""], ["Booleano", "bool", "True"], ["Lista", "list", "[1, 2, 3]"]], { t: "Tipos de datos" }),
    "Programar con Scratch": L.flujo("Programa de Scratch: al pulsar la bandera, por siempre mover y rebotar", ["al hacer clic en la bandera", "ir a x: 0  y: 0", "por siempre", "mover 10 pasos", "si toca un borde, rebotar"], { t: "Un sprite que rebota" }),
    "Primeros pasos en Python": L.cajas("Órdenes básicas de Python", [["print()", "muestra|en pantalla"], ["input()", "pide un dato|(texto)"], ["int()", "convierte|a número"], ["if / else", "decide según|una condición"]], { t: "Python básico" }),
    "Funciones y modularidad": L.flujo("Una función recibe parámetros, los procesa y devuelve un resultado", ["parámetros: base, altura", "def area(base, altura):", "resultado = base * altura / 2", "return resultado"], { t: "Una función por dentro" }),
    "Buscar y ordenar": L.comparar("Búsqueda lineal frente a búsqueda binaria", ["Lineal", ["uno por uno", "lista cualquiera", "1.000 → hasta 1.000", "pasos"]], ["Binaria", ["parte por la mitad", "lista ordenada", "1.000 → unos 10", "pasos"]]),
  },
  tras: {
    "Variables y tipos de datos": [
      {
        html: `<h3>Operadores y expresiones</h3><p>Una <b>expresión</b> combina datos, variables y <b>operadores</b> para obtener un valor. Los operadores <b>aritméticos</b> de Python son <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code> (división con decimales), <code>//</code> (división entera), <code>%</code> (resto o módulo) y <code>**</code> (potencia). El resto es muy útil: <code>n % 2 == 0</code> indica si un número es par. Como en matemáticas, primero se hacen las potencias, luego multiplicaciones y divisiones y al final sumas y restas; los paréntesis cambian el orden.</p>
          <p>Los operadores de <b>comparación</b> (<code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>) dan como resultado un <mark>booleano</mark>: <code>True</code> o <code>False</code>. Los operadores <b>lógicos</b> combinan condiciones: <code>and</code> exige que se cumplan las dos (edad &gt;= 12 and edad &lt;= 16), <code>or</code> basta con una y <code>not</code> invierte el resultado. Son las mismas puertas lógicas AND, OR y NOT de la electrónica digital. Un error muy frecuente es confundir <code>=</code>, que <b>asigna</b> un valor a una variable, con <code>==</code>, que <b>compara</b> dos valores. Otro es sumar texto y números: <code>"5" + 3</code> da error, porque primero hay que convertir con <code>int("5")</code>.</p>`,
        svg: L.rejilla("Operadores de Python con ejemplos y resultados", ["Operador", "Ejemplo", "Da"], [["//", "17 // 5", "3"], ["%", "17 % 5", "2"], ["**", "2 ** 5", "32"], ["==", "3 == 4", "False"], ["and", "True and False", "False"]], { t: "Operadores" }),
      },
      {
        html: `<h3>Listas y cadenas de texto</h3><p>Cuando hay muchos datos del mismo tipo no se crea una variable para cada uno, sino una <b>lista</b>: <code>notas = [7, 5, 9, 4]</code>. Cada elemento tiene una posición o <b>índice</b>, que en Python <mark>empieza en 0</mark>: <code>notas[0]</code> es 7 y <code>notas[3]</code> es 4. Con <code>len(notas)</code> se sabe cuántos elementos tiene, con <code>notas.append(8)</code> se añade uno al final y con <code>notas.remove(5)</code> se quita. Las listas se recorren con un bucle: <code>for n in notas:</code> repite las instrucciones una vez por cada elemento.</p>
          <p>Las <b>cadenas</b> de texto funcionan de forma parecida: <code>nombre = "Python"</code> tiene 6 caracteres y <code>nombre[0]</code> es la «P». Se pueden <b>trocear</b> (<code>nombre[0:3]</code> da "Pyt"), pasar a mayúsculas con <code>.upper()</code> o unir con <code>+</code>. Las funciones <code>sum()</code>, <code>max()</code> y <code>min()</code> trabajan directamente con listas de números, y <code>sorted()</code> devuelve la lista ordenada. Las listas son la base de casi todos los programas reales: la lista de canciones de una aplicación, los mensajes de un chat o los puntos de un mapa.</p>`,
        svg: L.rejilla("Lista de notas con sus índices empezando en cero", ["Índice", "0", "1", "2", "3"], [["Valor", "7", "5", "9", "4"], ["Acceso", "notas[0]", "notas[1]", "notas[2]", "notas[3]"]], { t: "notas = [7, 5, 9, 4]" }),
      },
    ],
    "Primeros pasos en Python": [
      {
        html: `<h3>Bucles en Python: while y for</h3><p>Python tiene dos bucles. El bucle <b>while</b> («mientras») repite mientras se cumpla una condición; se usa cuando no sabemos cuántas vueltas habrá, por ejemplo, pedir una contraseña hasta que sea correcta. Dentro del bucle algo debe cambiar para que la condición deje de cumplirse; si no, se produce un <mark>bucle infinito</mark> y el programa no termina nunca.</p>
          <p>El bucle <b>for</b> recorre una secuencia: una lista, una cadena o un rango de números. <code>range(5)</code> genera 0, 1, 2, 3, 4; <code>range(1, 11)</code> va del 1 al 10, y <code>range(0, 20, 5)</code> salta de 5 en 5. Dos patrones aparecen una y otra vez. El <b>contador</b> suma 1 cada vez que pasa algo (<code>aprobados = aprobados + 1</code>). El <b>acumulador</b> va sumando valores (<code>total = total + nota</code>); al final, la media es <code>total / len(notas)</code>. La orden <code>break</code> sale del bucle antes de tiempo, útil cuando ya se ha encontrado lo que se buscaba. Saber elegir el bucle adecuado y comprobar que siempre termina es una de las claves de la programación.</p>`,
        svg: L.comparar("Bucle while frente a bucle for", ["while", ["mientras se cumpla", "vueltas desconocidas", "ej.: pedir clave", "cuidado: infinito"]], ["for", ["recorre secuencia", "vueltas conocidas", "ej.: range(1, 11)", "termina siempre"]]),
      },
    ],
    "Funciones y modularidad": [
      {
        html: `<h3>Programación por eventos</h3><p>En los programas que hemos visto, las instrucciones se ejecutan en orden de principio a fin. Pero un videojuego, una app del móvil o una página web esperan a que ocurra algo: un clic, una tecla, un mensaje que llega o un sensor que cambia. Esto es la <b>programación orientada a eventos</b>. El programador escribe <b>manejadores</b>: trozos de código que se ejecutan <mark>cuando ocurre</mark> un evento concreto. En Scratch son los bloques amarillos «al hacer clic en este objeto» o «al presionar la tecla espacio»; en App Inventor, «cuando Botón1.Clic»; en JavaScript, <code>boton.onclick</code>.</p>
          <p>Mientras no pasa nada, el programa espera en un <b>bucle de eventos</b> sin gastar apenas recursos. Varios objetos pueden comunicarse enviando <b>mensajes</b> (el bloque «enviar mensaje» de Scratch): cuando el jugador toca la meta, se envía «fin» y el escenario muestra la pantalla de victoria. Este modelo hace que las aplicaciones respondan al usuario de forma natural. Su dificultad es que el orden en que se ejecutan las cosas depende de lo que haga el usuario, así que hay que probar muchas combinaciones distintas.</p>`,
        svg: L.flujo("Programación por eventos: el programa espera, ocurre un evento y se ejecuta su manejador", ["El programa espera", "Ocurre un evento: clic o tecla", "Se ejecuta su manejador", "Puede enviar un mensaje", "Vuelve a esperar"], { t: "Bucle de eventos" }),
      },
    ],
    "Probar y depurar": [
      {
        html: `<h3>Buenas prácticas de programación</h3><p>Un programa no solo lo lee el ordenador: también lo leerán tus compañeros y tú mismo dentro de un mes. Por eso conviene seguir unas <b>buenas prácticas</b>. Usa <b>nombres descriptivos</b>: <code>precio_total</code> se entiende; <code>x2</code>, no. Escribe <b>comentarios</b> (en Python empiezan con <code>#</code>) para explicar el <i>porqué</i> de las partes difíciles, no lo que es evidente. Mantén las funciones <mark>cortas</mark>, cada una con una sola tarea, y evita repetir código: si copias y pegas tres veces lo mismo, es momento de crear una función.</p>
          <p>Antes de programar, escribe el algoritmo en <b>pseudocódigo</b> o dibuja el diagrama de flujo. Prueba el programa con <b>casos límite</b>: la lista vacía, el número 0, una nota de exactamente 5, un texto con tildes. Los programadores profesionales guardan cada cambio con un <b>sistema de control de versiones</b> como <b>Git</b>, que permite volver atrás y trabajar en equipo sin pisarse; plataformas como GitHub alojan millones de proyectos de código abierto. Por último, ten en cuenta la <b>accesibilidad</b> y la <b>ética</b>: un programa debe poder usarlo todo el mundo y no debe recoger más datos de los necesarios.</p>`,
        svg: L.cajas("Buenas prácticas: nombres claros, comentarios, funciones cortas y control de versiones", [["Nombres", "precio_total|mejor que x2"], ["Comentarios", "# explican|el porqué"], ["Funciones", "cortas, una|sola tarea"], ["Versiones", "Git guarda|cada cambio"]], { t: "Código que se entiende" }),
      },
    ],
    "Buscar y ordenar": [
      {
        html: `<h3>La eficiencia de los algoritmos</h3><p>Dos algoritmos pueden resolver el mismo problema y tardar tiempos muy distintos. Para compararlos no se miden segundos, que dependen del ordenador, sino el <b>número de pasos</b> en función del tamaño de los datos, <i>n</i>. La búsqueda lineal necesita, en el peor caso, <b>n pasos</b>: si la lista se duplica, el tiempo se duplica. La búsqueda binaria solo necesita unos <b>log₂ n</b> pasos: con 1.000 elementos, unos 10; con un millón, unos 20. El método de la burbuja para ordenar hace unas <b>n²</b> comparaciones: con 1.000 elementos, un millón de comparaciones.</p>
          <p>Por eso los informáticos buscan algoritmos más listos, como el <b>ordenamiento por mezcla</b> (<i>merge sort</i>), que divide la lista en mitades, las ordena y las une, con unos n · log₂ n pasos. Con datos pequeños la diferencia apenas se nota, pero los buscadores, las redes sociales o los mapas trabajan con miles de millones de datos: un algoritmo ineficiente haría que una búsqueda tardara horas en lugar de milisegundos. También importa la <b>memoria</b> que usa el algoritmo. Elegir bien el algoritmo suele mejorar más un programa que comprar un ordenador más potente.</p>`,
        svg: L.barras("Pasos necesarios para mil elementos según el algoritmo", [["binaria", 10], ["lineal", 1000], ["mezcla", 10000], ["burbuja", 1000000]], { t: "Pasos con n = 1.000" }),
      },
    ],
  },
  secciones: [3, 3, 6, 4],
  niveles: "bbbmmmbmab",
  ejercicios: [
    { nivel: "básico", q: "Aplica los cuatro pilares al problema de organizar una excursión.", sol: "Descomposición: transporte, comida, permisos, horario. Patrones: es parecida a otras excursiones del curso pasado. Abstracción: lo importante es el número de alumnos, el destino y el presupuesto (no el color del autobús). Algoritmo: la lista ordenada de tareas con sus fechas." },
    { nivel: "básico", q: "¿Qué valen 17 // 3, 17 % 3 y 2 ** 4 en Python?", sol: "17 // 3 = 5 (división entera), 17 % 3 = 2 (resto) y 2 ** 4 = 16 (potencia)." },
    { nivel: "básico", q: "Dada la lista colores = [\"rojo\", \"verde\", \"azul\"], ¿qué es colores[1]? ¿Y len(colores)?", sol: "colores[1] es \"verde\", porque los índices empiezan en 0. len(colores) es 3." },
    { nivel: "básico", q: "¿Qué diferencia hay entre = y == en Python?", sol: "= asigna un valor a una variable (x = 5). == compara dos valores y da True o False (x == 5)." },
    { nivel: "básico", q: "Escribe qué números genera range(2, 12, 3).", sol: "2, 5, 8, 11. Empieza en 2, salta de 3 en 3 y se detiene antes de 12." },
    { nivel: "básico", q: "Pon dos ejemplos de eventos en una aplicación del móvil.", sol: "Pulsar un botón, deslizar el dedo, recibir una notificación, girar el móvil o que cambie la batería." },
    { nivel: "básico", q: "Escribe un comentario útil para la línea total = total * 1.21.", sol: "# Añadimos el 21 % de IVA al total" },
    { nivel: "medio", q: "Escribe en Python una condición que sea True si un número n es par y mayor que 10.", sol: "n % 2 == 0 and n > 10" },
    { nivel: "medio", q: "Escribe un programa que pida números hasta que el usuario escriba 0 y muestre la suma.", sol: "total = 0\nn = int(input(\"Número: \"))\nwhile n != 0:\n    total = total + n\n    n = int(input(\"Número: \"))\nprint(total)" },
    { nivel: "medio", q: "Recorre la lista notas = [6, 3, 8, 5, 4] y cuenta cuántos aprobados hay.", sol: "aprobados = 0\nfor n in notas:\n    if n >= 5:\n        aprobados = aprobados + 1\nprint(aprobados)  # muestra 3" },
    { nivel: "medio", q: "Calcula la media de una lista de notas sin usar sum().", sol: "total = 0\nfor n in notas:\n    total = total + n\nmedia = total / len(notas)\nprint(media)" },
    { nivel: "medio", q: "Encuentra el fallo: i = 1; while i <= 5: print(i). ¿Qué pasa y cómo se arregla?", sol: "i nunca cambia, así que la condición siempre se cumple: bucle infinito que muestra 1 sin parar. Se arregla añadiendo i = i + 1 dentro del bucle." },
    { nivel: "medio", q: "Escribe una función es_mayor(edad) que devuelva True si la edad es 18 o más.", sol: "def es_mayor(edad):\n    return edad >= 18" },
    { nivel: "medio", q: "¿Qué muestra: palabra = \"robotica\"; print(palabra[0:4].upper())?", sol: "Toma los caracteres de las posiciones 0 a 3, \"robo\", y los pasa a mayúsculas: ROBO." },
    { nivel: "medio", q: "Describe en Scratch un juego en el que, al tocar una moneda, se suma un punto y la moneda aparece en otro sitio.", sol: "Variable «puntos» a 0 al pulsar la bandera. En la moneda: por siempre, si toca al personaje → cambiar puntos en 1, ir a una posición aleatoria. Es un evento (tocar) dentro de un bucle." },
    { nivel: "medio", q: "¿Cuántos pasos necesita como máximo la búsqueda binaria en una lista ordenada de 1.024 elementos? ¿Y la lineal?", sol: "Binaria: log₂ 1.024 = 10 pasos (cada paso divide la lista a la mitad). Lineal: hasta 1.024 pasos." },
    { nivel: "medio", q: "Reescribe con nombres claros y un comentario: a = int(input()); b = a * 0.8; print(b).", sol: "precio = int(input(\"Precio: \"))\n# Aplicamos un descuento del 20 %\nprecio_final = precio * 0.8\nprint(precio_final)" },
    { nivel: "avanzado", q: "Escribe una función mayor(lista) que devuelva el número más grande sin usar max().", sol: "def mayor(lista):\n    m = lista[0]\n    for x in lista:\n        if x > m:\n            m = x\n    return m" },
    { nivel: "avanzado", q: "Escribe un programa que pida una contraseña y dé solo 3 intentos.", sol: "intentos = 0\nwhile intentos < 3:\n    clave = input(\"Clave: \")\n    if clave == \"tecno24\":\n        print(\"Acceso concedido\")\n        break\n    intentos = intentos + 1\nif intentos == 3:\n    print(\"Bloqueado\")" },
    { nivel: "avanzado", q: "Escribe un programa que muestre la tabla de multiplicar de un número pedido al usuario.", sol: "n = int(input(\"Número: \"))\nfor i in range(1, 11):\n    print(n, \"x\", i, \"=\", n * i)" },
    { nivel: "avanzado", q: "Una lista de 1.000 elementos se ordena con burbuja y otra con mezcla. Estima las comparaciones de cada una y explica la diferencia con 1.000.000 de elementos.", sol: "Burbuja: unos n² = 1.000.000; mezcla: unos n · log₂ n ≈ 1.000 · 10 = 10.000. Con un millón: burbuja 10¹² (un billón) y mezcla unos 20 millones. La diferencia crece muchísimo con el tamaño." },
    { nivel: "avanzado", q: "Escribe una función que reciba una palabra y diga si es un palíndromo (se lee igual al revés).", sol: "def palindromo(p):\n    p = p.lower()\n    return p == p[::-1]\n\nprint(palindromo(\"Ana\"))  # True" },
    { nivel: "avanzado", q: "Diseña los casos de prueba para una función que dice si una nota es «Suspenso», «Aprobado», «Notable» o «Sobresaliente».", sol: "Probar valores normales (3, 6, 7.5, 9.5) y sobre todo los límites: 4.99, 5, 6.99, 7, 8.99, 9 y 10; además valores no válidos como -1, 11 o un texto, para comprobar que el programa avisa del error." },
    { nivel: "avanzado", q: "Explica por qué en un videojuego por eventos pueden aparecer errores que no salen en las pruebas normales.", sol: "El orden de ejecución depende de lo que haga el jugador: dos eventos pueden ocurrir casi a la vez (tocar la meta y perder la última vida) y el resultado depende de cuál se procese primero. Hay que probar combinaciones raras y controlar el estado del juego." },
    { nivel: "avanzado", q: "Escribe un programa que cuente cuántas vocales tiene una frase.", sol: "frase = input(\"Frase: \").lower()\nvocales = 0\nfor letra in frase:\n    if letra in \"aeiouáéíóú\":\n        vocales = vocales + 1\nprint(vocales)" },
  ],
  ejemplos: [
    { enunciado: "Escribe en Python un programa que lea 5 notas, las guarde en una lista y muestre la media y la nota más alta.", pasos: ["Crear una lista vacía: notas = [].", "Bucle for i in range(5): pedir la nota con float(input()) y añadirla con notas.append(nota).", "Media: sum(notas) / len(notas).", "Máxima: max(notas).", "Mostrar ambos resultados con print."], resultado: "notas = []\nfor i in range(5):\n    notas.append(float(input(\"Nota: \")))\nprint(\"Media:\", sum(notas) / len(notas))\nprint(\"Máxima:\", max(notas))" },
    { enunciado: "Evalúa la expresión 3 + 4 * 2 ** 2 > 18 and not False.", pasos: ["Potencia: 2 ** 2 = 4.", "Multiplicación: 4 * 4 = 16.", "Suma: 3 + 16 = 19.", "Comparación: 19 > 18 → True.", "not False → True; True and True → True."], resultado: "True" },
    { enunciado: "Calcula cuántas vueltas da este bucle y qué muestra: n = 100; pasos = 0; while n > 1: n = n // 2; pasos = pasos + 1; print(pasos).", pasos: ["n vale 100 → 50 → 25 → 12 → 6 → 3 → 1.", "Cada división cuenta un paso: 6 divisiones.", "Cuando n vale 1 la condición n > 1 es falsa y el bucle termina.", "Es la misma idea que la búsqueda binaria: dividir a la mitad."], resultado: "Da 6 vueltas y muestra 6." },
  ],
  errores: [],
  cuarta: ["reconocer patrones", "un hexágono", "La función", "Una instrucción de salida", "red", "hace el programa más rápido", "decimal", "multiplicar", "desordenada", "variables globales"],
  quiz: [
    { q: "¿Qué da 17 % 5 en Python?", o: ["3", "2", "3.4", "85"], a: 1, e: "% calcula el resto de la división: 17 = 5 · 3 + 2." },
    { q: "En la lista [4, 8, 15], ¿qué índice tiene el 15?", o: ["0", "1", "2", "3"], a: 2, e: "Los índices empiezan en 0." },
    { q: "¿Qué bucle usarías para pedir una contraseña hasta que sea correcta?", o: ["for con range(10)", "while", "Ninguno", "if"], a: 1, e: "No se sabe cuántas veces habrá que repetir." },
    { q: "¿Qué valor da True and False?", o: ["True", "False", "Error", "1"], a: 1, e: "and exige que las dos condiciones sean ciertas." },
    { q: "Una variable que va sumando valores en un bucle es…", o: ["un contador", "un acumulador", "un evento", "un índice"], a: 1, e: "El contador suma 1; el acumulador suma valores." },
    { q: "«Al hacer clic en este objeto» es un bloque de…", o: ["bucle", "evento", "operador", "lista"], a: 1, e: "Se ejecuta cuando ocurre el clic." },
    { q: "¿Qué hace break dentro de un bucle?", o: ["Repite el bucle", "Sale del bucle", "Borra la variable", "Detiene el ordenador"], a: 1, e: "Termina el bucle antes de tiempo." },
    { q: "Con una lista ordenada de un millón de elementos, la búsqueda binaria necesita unos…", o: ["20 pasos", "1.000 pasos", "500.000 pasos", "un millón de pasos"], a: 0, e: "log₂ 1.000.000 ≈ 20." },
    { q: "Git es…", o: ["un lenguaje de programación", "un sistema de control de versiones", "un tipo de bucle", "un editor de imagen"], a: 1, e: "Guarda el historial de cambios del código." },
    { q: "¿Qué da \"5\" + 3 en Python?", o: ["8", "53", "Un error", "\"8\""], a: 2, e: "No se puede sumar texto y número sin convertir antes." },
  ],
  cuartaEx: ["algoritmo", "Muestra 0, 1, 2, 3", "Programar sin probar"],
  examen: [
    { q: "¿Qué muestra print(len(\"hola\"))?", o: ["3", "4", "5", "hola"], a: 1, e: "La cadena tiene 4 caracteres." },
    { q: "¿Qué estructura usa un acumulador para calcular una media?", o: ["Un bucle", "Un evento", "Un comentario", "Una licencia"], a: 0, e: "Se recorre la lista sumando cada valor." },
    { q: "El método de la burbuja con n elementos hace unas…", o: ["n comparaciones", "log₂ n comparaciones", "n² comparaciones", "2 comparaciones"], a: 2, e: "Por eso es lento con listas grandes." },
    { q: "Un bucle while que nunca termina es…", o: ["un bucle infinito", "una función", "una lista", "un evento"], a: 0, e: "La condición nunca llega a ser falsa." },
    { q: "Un buen nombre de variable es…", o: ["x2", "precio_total", "aaa", "variable1"], a: 1, e: "Dice qué guarda." },
  ],
  tarjetas: [
    ["Operador %", "Da el resto de la división: n % 2 == 0 indica que n es par."],
    ["Índices de una lista", "Empiezan en 0: lista[0] es el primer elemento."],
    ["while frente a for", "while repite mientras se cumpla algo; for recorre una secuencia."],
    ["Eficiencia", "Se mide en pasos según el tamaño n: lineal n, binaria log₂ n, burbuja n²."],
  ],
  glosario: [
    ["Pensamiento computacional", "Forma de resolver problemas con descomposición, patrones, abstracción y algoritmos."],
    ["Algoritmo", "Secuencia finita y ordenada de instrucciones que resuelve un problema."],
    ["Pseudocódigo", "Algoritmo escrito en lenguaje parecido al natural, sin reglas de un lenguaje concreto."],
    ["Variable", "Espacio de memoria con nombre que guarda un dato."],
    ["Booleano", "Tipo de dato que solo puede valer True o False."],
    ["Operador lógico", "and, or y not: combinan o invierten condiciones."],
    ["Lista", "Colección ordenada de datos a la que se accede por su índice."],
    ["Índice", "Posición de un elemento en una lista o cadena; empieza en 0."],
    ["Bucle", "Estructura que repite instrucciones."],
    ["Contador", "Variable que aumenta en 1 cada vez que ocurre algo."],
    ["Acumulador", "Variable que va sumando valores dentro de un bucle."],
    ["Función", "Bloque de código con nombre que realiza una tarea y puede devolver un resultado."],
    ["Parámetro", "Dato que recibe una función."],
    ["Evento", "Algo que ocurre (un clic, una tecla) y que pone en marcha un trozo de código."],
    ["Depurar", "Buscar y corregir los errores de un programa."],
    ["Control de versiones", "Sistema que guarda el historial de cambios del código (Git)."],
    ["Eficiencia", "Cantidad de pasos o de memoria que necesita un algoritmo."],
  ],
  situacion: {
    titulo: "Un programa útil para mi clase",
    reto: "Por parejas, detectad un problema pequeño de vuestro día a día en el instituto (calcular la nota media, repartir tareas, un cuestionario de repaso, un temporizador de estudio) y programad en Python o Scratch una solución que funcione y que otra pareja pueda usar sin ayuda.",
    pasos: [
      "Describid el problema y aplicad los cuatro pilares: descomposición, patrones, abstracción y algoritmo.",
      "Escribid el algoritmo en pseudocódigo o con un diagrama de flujo antes de programar.",
      "Programad la solución usando variables, al menos una lista, un bucle, una condición y una función.",
      "Diseñad una tabla de casos de prueba, incluidos los casos límite, y depurad los errores encontrados.",
      "Intercambiad el programa con otra pareja, recoged sus sugerencias y mejoradlo.",
    ],
    producto: "El programa comentado, el diagrama de flujo y la tabla de pruebas, con una demostración de dos minutos.",
    evaluacion: ["El algoritmo resuelve el problema y está bien descompuesto.", "El código usa correctamente variables, listas, bucles, condiciones y funciones.", "Se prueban los casos límite y se documentan los errores corregidos.", "El código es legible: nombres claros y comentarios útiles."],
  },
  objetivos: ["Usar operadores, listas y bucles while y for en Python", "Comparar la eficiencia de algoritmos de búsqueda y ordenación"],
  fuentes: [{ t: "Documentación oficial de Python en español", url: "https://docs.python.org/es/3/tutorial/" }],
});
