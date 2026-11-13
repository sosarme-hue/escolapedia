// Programación y robótica 3º ESO: algoritmos y diagramas de flujo. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, filas, mezcla } = require("./_eso3");

const M = "Programación y robótica";
// Símbolos de diagrama de flujo centrados en (x, y).
const ovalo = (x, y, w, txt, c = "var(--ink)") => `<rect x="${x - w / 2}" y="${y - 13}" width="${w}" height="26" rx="13" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2.2"/>${t(x, y + 4, txt, { c, s: 11 })}`;
const proc = (x, y, w, txt, c = "var(--pen)") => `<rect x="${x - w / 2}" y="${y - 13}" width="${w}" height="26" rx="2" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2.2"/>${t(x, y + 4, txt, { c, s: 11 })}`;
const es = (x, y, w, txt, c = "var(--leaf)") => `<path d="M${x - w / 2 + 8} ${y - 13} H ${x + w / 2 + 8} L ${x + w / 2 - 8} ${y + 13} H ${x - w / 2 - 8} Z" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2.2"/>${t(x, y + 4, txt, { c, s: 11 })}`;
const rombo = (x, y, w, h, txt, c = "var(--red)") => `<path d="M${x} ${y - h / 2} L ${x + w / 2} ${y} L ${x} ${y + h / 2} L ${x - w / 2} ${y} Z" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2.2"/>${t(x, y + 4, txt, { c, s: 10 })}`;
const fl = (d) => `<path d="${d}" fill="none" stroke="var(--muted)" stroke-width="1.8" marker-end="url(#fa)"/>`;
const defs = `<defs><marker id="fa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L 10 5 L 0 10 Z" fill="var(--muted)"/></marker></defs>`;

module.exports = {
  materia: M,
  curso: C,
  titulo: "Algoritmos y diagramas de flujo",
  minutos: 50,
  objetivos: ["Definir algoritmo y reconocer sus características", "Conocer los símbolos de los diagramas de flujo", "Representar algoritmos con estructuras secuenciales, condicionales y repetitivas", "Escribir algoritmos en pseudocódigo y seguirlos con una traza"],
  claves: ["algoritmo", "diagrama de flujo", "pseudocódigo", "secuencia", "decisión", "bucle"],
  pregunta: {
    texto: "¿Cómo le explicarías a alguien que nunca ha visto un cajero automático los pasos exactos para sacar dinero, incluyendo qué hacer si se equivoca de PIN?",
    respuesta: "Con un <mark>algoritmo</mark>: pasos ordenados, con <b>decisiones</b> («¿el PIN es correcto?») y <b>repeticiones</b> («vuelve a intentarlo, máximo 3 veces»). Un <b>diagrama de flujo</b> lo dibuja con flechas y símbolos para que se vea de un vistazo.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un algoritmo?</h3><p>Un <b>algoritmo</b> es un conjunto <mark>finito y ordenado de instrucciones precisas</mark> que resuelve un problema. La palabra viene del matemático persa <b>al-Juarismi</b> (siglo IX), que escribió métodos paso a paso para hacer cálculos.</p><p>Todo algoritmo tiene tres partes:</p><ul><li><b>Entrada</b>: los datos que recibe (por ejemplo, dos números).</li><li><b>Proceso</b>: las operaciones que realiza (sumarlos).</li><li><b>Salida</b>: el resultado que devuelve (mostrar la suma).</li></ul><p>Un mismo problema puede resolverse con algoritmos distintos; uno es <b>mejor</b> si da el resultado correcto con menos pasos o menos recursos.</p>`,
    },
    {
      html: `<h3>Símbolos del diagrama de flujo</h3><p>Un <b>diagrama de flujo</b> representa gráficamente un algoritmo. Usa símbolos normalizados unidos por <b>flechas</b> que indican el orden:</p>${tabla(["Símbolo", "Forma", "Significado"], [["Inicio / fin", "óvalo", "dónde empieza y termina"], ["Proceso", "rectángulo", "una acción o cálculo: <code>suma ← a + b</code>"], ["Entrada / salida", "paralelogramo", "leer datos o mostrar resultados"], ["Decisión", "rombo", "una pregunta con respuesta sí / no"], ["Flecha", "línea con punta", "sentido del flujo"]])}<p>Reglas: un solo inicio, al menos un fin, las flechas no se cruzan y cada rombo tiene dos salidas.</p>`,
      svg: svg("Símbolos del diagrama de flujo: óvalo de inicio y fin, rectángulo de proceso, paralelogramo de entrada y salida, rombo de decisión", `${ovalo(70, 34, 90, "inicio / fin")}${proc(190, 34, 100, "proceso")}${es(70, 96, 96, "entrada / salida")}${rombo(190, 100, 110, 60, "¿decisión?")}${defs}${fl("M30 150 H 110")}${t(160, 154, "flujo", { c: "var(--muted)", s: 11 })}`),
      video: { id: "qDttSc3RQBc", titulo: "Diagramas de flujo: simbología y construcción", canal: "Estudia Con Marisol", vistas: 1345352, megusta: 0 },
    },
    {
      html: `<h3>Estructura secuencial</h3><p>La estructura más sencilla es la <b>secuencia</b>: las instrucciones se ejecutan <mark>una detrás de otra</mark>, siempre en el mismo orden.</p><p>Ejemplo: calcular el área de un rectángulo.</p><ol><li>Inicio.</li><li>Leer la base <code>b</code> y la altura <code>h</code>.</li><li>Calcular <code>área ← b · h</code>.</li><li>Mostrar <code>área</code>.</li><li>Fin.</li></ol><p>La flecha <code>←</code> significa «guarda el resultado en». Si <code>b = 5</code> y <code>h = 3</code>, el programa muestra 15.</p>`,
      svg: svg("Diagrama secuencial del área de un rectángulo: inicio, leer b y h, área igual a b por h, mostrar área, fin", `${defs}${ovalo(130, 18, 70, "inicio")}${fl("M130 31 V 39")}${es(130, 53, 110, "leer b, h")}${fl("M130 66 V 74")}${proc(130, 88, 120, "área ← b · h")}${fl("M130 101 V 109")}${es(130, 123, 110, "mostrar área")}${fl("M130 136 V 144")}${ovalo(130, 158, 60, "fin")}`),
    },
    {
      html: `<h3>Estructura condicional</h3><p>Muchas veces el algoritmo debe <b>decidir</b>. La estructura <b>condicional</b> (o selectiva) evalúa una condición y sigue un camino u otro:</p><ul><li><b>Si… entonces</b>: si se cumple la condición, hace algo; si no, sigue.</li><li><b>Si… entonces… si no</b>: dos caminos alternativos.</li></ul><p>Ejemplo: decidir si un alumno aprueba.</p><pre>leer nota
si nota ≥ 5 entonces
    mostrar "aprobado"
si no
    mostrar "suspenso"
fin si</pre><p>Las condiciones usan operadores de comparación: <code>=</code>, <code>≠</code>, <code>&lt;</code>, <code>&gt;</code>, <code>≤</code>, <code>≥</code>, y se pueden combinar con <b>y</b>, <b>o</b>, <b>no</b>.</p>`,
      svg: svg("Diagrama condicional: leer nota; si nota mayor o igual que 5 mostrar aprobado, si no mostrar suspenso", `${defs}${es(130, 20, 90, "leer nota")}${fl("M130 33 V 47")}${rombo(130, 76, 110, 56, "¿nota ≥ 5?")}${fl("M75 76 H 62 V 125")}${fl("M185 76 H 198 V 125")}${es(62, 140, 84, "suspenso", "var(--red)")}${es(198, 140, 84, "aprobado", "var(--leaf)")}${t(68, 68, "no", { c: "var(--red)", s: 11 })}${t(192, 68, "sí", { c: "var(--leaf)", s: 11 })}`),
    },
    {
      html: `<h3>Estructura repetitiva (bucles)</h3><p>Un <b>bucle</b> repite un grupo de instrucciones. Hay dos tipos básicos:</p><ul><li><b>Repetir N veces</b> (bucle <i>para</i>): se sabe de antemano cuántas veces. «Repite 10 veces: salta».</li><li><b>Mientras</b> se cumpla una condición: se repite hasta que deja de cumplirse. «Mientras no llegues a la puerta: da un paso».</li></ul><p>En el diagrama de flujo, el bucle se ve como una <mark>flecha que vuelve hacia atrás</mark> hasta un rombo. ¡Cuidado con los <b>bucles infinitos</b>! Si la condición nunca cambia, el programa no termina y deja de ser un algoritmo.</p>`,
      svg: svg("Bucle mientras: contador empieza en 1, mientras contador menor o igual que 5 mostrar contador y sumar 1; flecha de vuelta", `${defs}${proc(110, 18, 90, "c ← 1")}${fl("M110 31 V 45")}${rombo(110, 72, 100, 50, "¿c ≤ 5?")}${fl("M110 97 V 111")}${es(110, 124, 90, "mostrar c")}${fl("M110 137 V 147")}${proc(110, 160, 90, "c ← c + 1")}${fl("M65 160 H 30 V 72 H 60")}${fl("M160 72 H 210 V 150")}${ovalo(222, 162, 46, "fin")}${t(176, 64, "no", { c: "var(--red)", s: 11 })}${t(122, 106, "sí", { c: "var(--leaf)", s: 11 })}`),
    },
    {
      html: `<h3>Pseudocódigo</h3><p>El <b>pseudocódigo</b> describe un algoritmo con palabras del lenguaje natural, pero con la estructura de un programa. Es un paso intermedio entre la idea y el código real: no depende de ningún lenguaje concreto.</p><pre>inicio
  suma ← 0
  para i desde 1 hasta 10
      suma ← suma + i
  fin para
  mostrar suma
fin</pre><p>Este algoritmo suma los números del 1 al 10 y muestra 55. Las palabras clave (<b>si</b>, <b>mientras</b>, <b>para</b>, <b>leer</b>, <b>mostrar</b>) y la <b>sangría</b> ayudan a ver qué instrucciones están dentro de cada estructura.</p>`,
      video: { id: "Lub5qOmY4JQ", titulo: "Programación: diagramas de flujo y pseudocódigo", canal: "JuanRa Garcia Montes", vistas: 673635, megusta: 0 },
    },
    {
      html: `<h3>La traza: comprobar un algoritmo</h3><p>Hacer una <b>traza</b> es seguir el algoritmo a mano, paso a paso, anotando el valor de cada variable. Es la mejor forma de comprobar si funciona y de encontrar errores antes de programarlo.</p>${tabla(["Paso", "c", "¿c ≤ 3?", "Se muestra"], [["1", "1", "sí", "1"], ["2", "2", "sí", "2"], ["3", "3", "sí", "3"], ["4", "4", "no", "fin"]])}<p>La tabla es la traza del bucle «mientras c ≤ 3: mostrar c; c ← c + 1», empezando con <code>c = 1</code>. Si olvidáramos <code>c ← c + 1</code>, la traza mostraría 1, 1, 1… sin fin: un bucle infinito.</p>`,
    },
    {
      html: `<h3>Algoritmos famosos</h3><p>Algunos algoritmos cambiaron el mundo:</p><ul><li><b>Búsqueda binaria</b>: para encontrar una palabra en un diccionario, abres por la mitad y descartas la mitad que no sirve. Con 1.000 palabras bastan unos 10 pasos.</li><li><b>Algoritmos de ordenación</b>: ordenan listas (de menor a mayor, alfabéticamente). Los hay lentos y rápidos.</li><li><b>Ruta más corta</b> (Dijkstra): lo usan los navegadores GPS.</li><li><b>PageRank</b>: ordenó los resultados del primer buscador de Google.</li></ul><p>Hoy los algoritmos deciden qué vídeos ves o qué anuncios aparecen. Entenderlos ayuda a usarlos de forma crítica.</p>`,
    },
    {
      html: `<h3>Herramientas para diseñar algoritmos</h3><p>Puedes dibujar diagramas de flujo a mano o con programas gratuitos como <b>draw.io</b> (diagrams.net). Otras herramientas permiten además <b>ejecutarlos</b>:</p><ul><li><b>PSeInt</b>: escribe pseudocódigo en español, lo ejecuta y genera el diagrama de flujo automáticamente.</li><li><b>Flowgorithm</b>: construyes el diagrama y lo ejecuta paso a paso.</li><li><b>Scratch</b>: los bloques encajables son, en el fondo, un pseudocódigo visual.</li></ul><p>El orden de trabajo recomendado es: entender el problema → diseñar el algoritmo → hacer una traza → programarlo → probarlo.</p>`,
    },
  ],
  figura: {
    titulo: "Las tres estructuras de control",
    svg: filas("Secuencia: instrucciones una tras otra; condicional: si se cumple, un camino, si no, otro; repetitiva: bucle para N veces o mientras; pseudocódigo y traza para comprobar", [["Secuencia", "una instrucción detrás de otra", "var(--pen)"], ["Condicional", "si… entonces… si no (rombo con sí / no)", "var(--red)"], ["Repetitiva", "repetir N veces · mientras se cumpla", "var(--leaf)"], ["Pseudocódigo", "palabras + estructura de programa", "var(--inf)"], ["Traza", "seguir a mano el valor de cada variable", "var(--ink)"]], 210),
  },
  video: { id: "Kucgc6NpGwc", titulo: "¿Qué es un diagrama de flujo? Cómo hacerlo paso a paso", canal: "Jorge Cogollo", vistas: 1712647, megusta: 0, busqueda: "diagramas de flujo" },
  quiz: mezcla([
    { q: "En un diagrama de flujo, el rombo representa…", o: ["una decisión", "un proceso", "el inicio"], a: 0, e: "Pregunta con sí / no." },
    { q: "El paralelogramo se usa para…", o: ["entrada o salida de datos", "decisiones", "el fin"], a: 0, e: "Leer o mostrar." },
    { q: "El rectángulo representa…", o: ["un proceso o cálculo", "una pregunta", "el inicio"], a: 0, e: "Acción." },
    { q: "Inicio y fin se dibujan con un…", o: ["óvalo", "rombo", "triángulo"], a: 0, e: "Terminal." },
    { q: "Las tres partes de un algoritmo son…", o: ["entrada, proceso y salida", "inicio, rombo y fin", "datos, ordenador y pantalla"], a: 0, e: "Recibe, calcula, devuelve." },
    { q: "La estructura que ejecuta instrucciones una tras otra es la…", o: ["secuencial", "condicional", "repetitiva"], a: 0, e: "La más sencilla." },
    { q: "«Mientras no llegues a la puerta, da un paso» es un…", o: ["bucle", "condicional simple", "dato de salida"], a: 0, e: "Se repite." },
    { q: "Un bucle cuya condición nunca cambia provoca…", o: ["un bucle infinito", "un error de sintaxis", "una salida doble"], a: 0, e: "El programa no termina." },
    { q: "Seguir a mano un algoritmo anotando las variables es hacer una…", o: ["traza", "compilación", "abstracción"], a: 0, e: "Para comprobarlo." },
    { q: "La palabra algoritmo procede del nombre de…", o: ["al-Juarismi", "Arquímedes", "Ada Lovelace"], a: 0, e: "Matemático persa del siglo IX." },
  ]),
  examen: mezcla([
    { q: "¿Qué muestra «suma ← 0; para i de 1 a 4: suma ← suma + i; mostrar suma»?", o: ["10", "4", "24"], a: 0, e: "1 + 2 + 3 + 4." },
    { q: "Si nota = 4, «si nota ≥ 5 mostrar aprobado si no mostrar suspenso» muestra…", o: ["suspenso", "aprobado", "nada"], a: 0, e: "4 < 5." },
    { q: "La búsqueda binaria descarta en cada paso…", o: ["la mitad de los datos", "un dato", "todos los datos"], a: 0, e: "Por eso es tan rápida." },
  ]),
  feynman: ["Qué es un algoritmo y qué partes tiene", "Los símbolos del diagrama de flujo", "Las tres estructuras de control con un ejemplo", "Cómo se hace una traza y para qué sirve"],
  mapa: mapa("ALGORITMOS", "var(--eso)", [
    ["Secuencia", "uno tras otro", "var(--pen)"],
    ["Decisión", "si · si no", "var(--red)"],
    ["Bucle", "para · mientras", "var(--leaf)"],
    ["Comprobar", "pseudocódigo · traza", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Algoritmo", "Instrucciones finitas, ordenadas y precisas que resuelven un problema."],
    ["Diagrama de flujo", "Representación gráfica de un algoritmo con símbolos y flechas."],
    ["Rombo", "Símbolo de decisión, con salidas sí y no."],
    ["Paralelogramo", "Símbolo de entrada o salida de datos."],
    ["Condicional", "Estructura que elige un camino según una condición."],
    ["Bucle", "Estructura que repite instrucciones."],
    ["Pseudocódigo", "Algoritmo escrito con palabras y estructura de programa."],
    ["Traza", "Seguimiento a mano de los valores de las variables."],
  ],
  familias: ["Dibujad juntos el diagrama de flujo de «cruzar un paso de peatones con semáforo».", "Jugad a adivinar un número del 1 al 100 con la estrategia de dividir por la mitad.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Algoritmos: definición y características; diagramas de flujo normalizados; estructuras secuencial, condicional y repetitiva; pseudocódigo y traza (RD 217/2022, programación y competencia digital).",
    ideas: ["Diagramas de flujo de rutinas diarias en gran formato.", "Juego de adivinar un número para descubrir la búsqueda binaria.", "Ejecutar en PSeInt los algoritmos dibujados en papel."],
  },
  fuentes: [RD, { t: "PSeInt: herramienta para aprender pseudocódigo", url: "https://pseint.sourceforge.net/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Algoritmos resueltos",
  ejemplos: [
    { enunciado: "Diseña un algoritmo que lea la edad de una persona y diga si puede votar en España.",
      pasos: ["Entrada: leer edad.", "Decisión: ¿edad ≥ 18?", "Sí → mostrar «puede votar». No → mostrar «aún no puede votar».", "Fin."],
      resultado: "Estructura condicional doble." },
    { enunciado: "Escribe en pseudocódigo un algoritmo que muestre la tabla del 7.",
      pasos: ["para i desde 1 hasta 10", "    mostrar 7 · i", "fin para"],
      resultado: "Muestra 7, 14, 21… 70 con un bucle de 10 repeticiones." },
    { enunciado: "Haz la traza de: x ← 10; mientras x > 0: x ← x − 3; mostrar x.",
      pasos: ["x = 10 > 0 → x = 7.", "7 > 0 → x = 4.", "4 > 0 → x = 1.", "1 > 0 → x = −2.", "−2 > 0 es falso → sale y muestra −2."],
      resultado: "Se muestra −2 tras 4 vueltas." },
  ],
  errores: [
    "Dibujar un rombo con una sola salida.",
    "Usar el rectángulo para leer datos en lugar del paralelogramo.",
    "Olvidar actualizar la variable del bucle: bucle infinito.",
    "Escribir pasos ambiguos que un ordenador no podría ejecutar.",
    "Confundir la condición: escribir «nota > 5» cuando un 5 también aprueba.",
    "Programar directamente sin diseñar ni hacer la traza del algoritmo.",
  ],
  ejercicios: [
    { q: "Indica la entrada, el proceso y la salida de un algoritmo que calcula el perímetro de un cuadrado.", sol: "Entrada: lado. Proceso: perímetro ← 4 · lado. Salida: mostrar perímetro." },
    { q: "Dibuja el diagrama de flujo que lee dos números y muestra el mayor.", sol: "Inicio → leer a, b → ¿a > b? → sí: mostrar a; no: mostrar b → fin." },
    { q: "Escribe en pseudocódigo un algoritmo que diga si un número es par.", sol: "leer n; si n mod 2 = 0 entonces mostrar «par» si no mostrar «impar»." },
    { q: "¿Cuántas veces se ejecuta el interior de «para i desde 3 hasta 8»?", sol: "6 veces (3, 4, 5, 6, 7 y 8)." },
    { q: "¿Qué muestra: a ← 2; b ← a + 3; a ← b · 2; mostrar a?", sol: "b = 5, a = 10 → muestra 10." },
    { q: "Haz la traza de: s ← 0; para i de 1 a 5: s ← s + 2; mostrar s.", sol: "s pasa por 2, 4, 6, 8, 10 → muestra 10." },
    { q: "Corrige el bucle infinito: c ← 1; mientras c < 5: mostrar c.", sol: "Falta c ← c + 1 dentro del bucle." },
    { q: "¿Cuántos pasos necesita como máximo la búsqueda binaria en una lista ordenada de 16 elementos?", sol: "4 pasos, porque 16 → 8 → 4 → 2 → 1." },
    { q: "Diseña el algoritmo del cajero automático con un máximo de 3 intentos de PIN.", sol: "intentos ← 0; repetir: leer PIN; intentos ← intentos + 1; hasta PIN correcto o intentos = 3; si correcto, continuar; si no, retener tarjeta." },
    { q: "Escribe el algoritmo de un juego en el que el ordenador piensa un número del 1 al 10 y el jugador lo adivina con pistas «mayor» o «menor».", sol: "Respuesta abierta; debe incluir un bucle mientras no acierte y una decisión que compare el intento con el número secreto." },
  ],
};

require("./_eso3L7").libro(module.exports, {
  lectura: ["La receta de la abuela", `<p>Lola quiere hacer el bizcocho de su abuela y le pide la receta por teléfono. «Echa harina, azúcar y unos huevos, bates un poco y lo metes al horno hasta que esté hecho», le dice. Lola lo intenta y el resultado es un ladrillo. ¿Cuánta harina? ¿Cuántos huevos? ¿A qué temperatura? ¿Cuánto tiempo? La segunda vez, la abuela se lo escribe: «200 g de harina, 150 g de azúcar, 3 huevos. Bate los huevos con el azúcar durante 5 minutos. Añade la harina tamizada. Hornea a 180 °C durante 35 minutos. Pincha con un palillo: si sale limpio, sácalo; si no, déjalo 5 minutos más y vuelve a pinchar».</p><p>La segunda receta es un <b>algoritmo</b>: tiene datos de entrada precisos, pasos ordenados, una <b>decisión</b> (¿sale limpio el palillo?) y una <b>repetición</b> (volver a pinchar hasta que esté hecho). Una persona puede adivinar lo que significa «un poco», pero un ordenador no: necesita instrucciones exactas, sin ambigüedad.</p><p>En este tema aprenderás a diseñar algoritmos con las tres estructuras básicas (secuencia, condicional y bucle), a representarlos con diagramas de flujo y pseudocódigo, a comprobarlos con trazas y a conocer algunos algoritmos que cambiaron el mundo.</p>`],
  mas: [
    ["<h3>¿Qué es un algoritmo?</h3>", `<p>Todo algoritmo tiene tres partes: los datos de <b>entrada</b> (lo que necesita para empezar), el <b>proceso</b> (las operaciones) y la <b>salida</b> (el resultado). Y debe cumplir cuatro propiedades: ser <b>preciso</b> (cada paso tiene un único significado), <b>finito</b> (termina tras un número limitado de pasos), <b>ordenado</b> y <b>definido</b> (con los mismos datos de entrada da siempre el mismo resultado).</p>`],
    ["<h3>Símbolos del diagrama de flujo</h3>", `<p>Los diagramas de flujo se leen de arriba abajo y de izquierda a derecha. Para que sean claros conviene escribir dentro de cada símbolo frases muy cortas (leer edad, área ← b · h), etiquetar las dos salidas de cada rombo con «sí» y «no» y, si el diagrama es largo, usar <b>conectores</b> (pequeños círculos con una letra) para continuar en otra parte de la hoja sin que las flechas se crucen.</p>`],
    ["<h3>Estructura secuencial</h3>", `<p>En una secuencia el <b>orden importa</b>: si se calcula el área antes de leer la base y la altura, el resultado es un disparate. Por eso, al diseñar, hay que preguntarse qué datos necesita cada paso y asegurarse de que ya se han obtenido. Otro ejemplo: para convertir grados Celsius a Fahrenheit, primero se lee c, después se calcula f ← c · 1,8 + 32 y, por último, se muestra f.</p>`],
    ["<h3>Estructura condicional</h3>", `<p>Las condiciones se escriben con <b>operadores de comparación</b>: igual (=), distinto (≠), mayor (>), menor (<), mayor o igual (≥) y menor o igual (≤). El resultado de una condición siempre es <b>verdadero</b> o <b>falso</b>. Hay que leer con cuidado el enunciado: «aprueba con un 5» se escribe nota ≥ 5, no nota > 5.</p>`],
    ["<h3>Algoritmos famosos</h3>", `<p>También los algoritmos de <b>cifrado</b> protegen cada compra y cada mensaje que enviamos, y los de <b>compresión</b> reducen el tamaño de fotos, música y vídeos (JPG, MP3, MP4) aprovechando los patrones que se repiten. La mayoría de ellos se basan en las mismas tres estructuras que aprendemos en este tema, combinadas de forma ingeniosa.</p>`],
    ["<h3>Herramientas para diseñar algoritmos</h3>", `<p>Sea cual sea la herramienta, el método es el mismo: entender el problema, escribir el algoritmo a mano o en pseudocódigo, dibujar el diagrama, hacer la traza con varios datos de prueba y solo entonces programarlo. Guardar el diagrama junto al programa ayuda a otras personas (y a uno mismo semanas después) a entender cómo funciona.</p>`],
    ["<h3>La traza: comprobar un algoritmo</h3>", `<p>Para que una traza sea útil hay que elegir bien los <b>datos de prueba</b>: un caso normal, los casos límite (el primer y el último valor posibles, como 0 o el máximo) y algún caso extraño o no válido (un número negativo, un texto en lugar de un número). Muchos errores solo aparecen en los casos límite, como confundir «<» con «≤».</p>`],
  ],
  svgs: [
    ["<h3>¿Qué es un algoritmo?</h3>", "Partes de un algoritmo", [["Entrada", "datos de partida"], ["Proceso", "operaciones"], ["Salida", "resultado"]], "Entrada, proceso y salida"],
    ["<h3>Pseudocódigo</h3>", "Palabras del pseudocódigo", [["leer / mostrar", "entrada y salida"], ["←", "asignar un valor"], ["si… si no… fin si", "condicional"], ["mientras / para", "bucles"]], "Pseudocódigo en español"],
    ["<h3>La traza: comprobar un algoritmo</h3>", "Datos de prueba para una traza", [["Normal", "un caso típico"], ["Límite", "0, el máximo, el mínimo"], ["Extraño", "negativo o no válido"]], "Probar bien"],
    ["<h3>Algoritmos famosos</h3>", "Algoritmos que cambiaron el mundo", [["Búsqueda binaria", "buscar dividiendo"], ["Ordenación", "poner en orden"], ["Ruta más corta", "GPS"], ["PageRank", "buscador web"]], "Algoritmos famosos"],
    ["<h3>Herramientas para diseñar algoritmos</h3>", "Herramientas", [["draw.io", "dibujar diagramas"], ["PSeInt", "pseudocódigo ejecutable"], ["Scratch", "probar con bloques"]], "Diseñar y probar"],
  ],
  bloques: [
    { tras: "<h3>Símbolos del diagrama de flujo</h3>", html: `<h3>Variables y asignación</h3><p>Los algoritmos trabajan con datos que se guardan en <b>variables</b>: cajas con un nombre (nota, edad, total) que contienen un valor que puede cambiar. Para dar un valor a una variable se usa la <b>asignación</b>, que en pseudocódigo se escribe con una flecha: <b>total ← 0</b> se lee «total toma el valor 0». La flecha indica que el valor de la derecha se guarda en la variable de la izquierda.</p><p>La asignación no es una igualdad matemática. La instrucción <b>x ← x + 1</b> no tiene sentido en matemáticas, pero en un algoritmo significa: «toma el valor actual de x, súmale 1 y guarda el resultado de nuevo en x». Si x valía 4, ahora vale 5. Al asignar un valor nuevo, el anterior se pierde. Por eso, para intercambiar los valores de dos variables a y b hace falta una tercera variable auxiliar: aux ← a; a ← b; b ← aux. Una variable debe tener siempre un valor inicial antes de usarse: es lo que se llama <b>inicializar</b>.</p>`, svg: ["La asignación", [["total ← 0", "inicializar"], ["x ← x + 1", "sumar 1 a x"], ["Intercambio", "aux ← a; a ← b; b ← aux"]], "Guardar valores"] },
    { tras: "<h3>Estructura condicional</h3>", html: `<h3>Condiciones anidadas y múltiples</h3><p>Cuando hay más de dos posibilidades, las condiciones se pueden <b>anidar</b>: poner un condicional dentro de otro. Por ejemplo, para convertir una nota numérica en calificación: si nota < 5, «insuficiente»; si no, si nota < 6, «suficiente»; si no, si nota < 7, «bien»; si no, si nota < 9, «notable»; si no, «sobresaliente». En el diagrama de flujo aparecen varios rombos en cascada, cada uno en la salida «no» del anterior.</p><p>Las condiciones también se pueden <b>combinar</b> con operadores lógicos. Con <b>y</b> deben cumplirse las dos: «si edad ≥ 12 y altura ≥ 140, puede subir a la atracción». Con <b>o</b> basta con una: «si es sábado o es domingo, no hay clase». Con <b>no</b> se invierte la condición. Muchos lenguajes tienen además una estructura de <b>selección múltiple</b> (según… caso) que elige entre muchas opciones según el valor de una variable, por ejemplo el día de la semana.</p>`, svg: ["Condiciones compuestas", [["y", "deben cumplirse las dos"], ["o", "basta con una"], ["no", "invierte la condición"]], "Combinar condiciones"] },
    { tras: "<h3>Estructura repetitiva (bucles)</h3>", html: `<h3>Validar los datos de entrada</h3><p>Un buen algoritmo no se fía de los datos que recibe. Si pide la edad y el usuario escribe −5 o 300, el resultado será absurdo. Por eso se <b>validan</b> los datos de entrada con un bucle: se pide el dato y, <b>mientras</b> no sea válido, se muestra un mensaje de error y se vuelve a pedir. Ejemplo en pseudocódigo: leer edad; mientras edad < 0 o edad > 120: mostrar «Edad no válida», leer edad; fin mientras.</p><p>Otra variante es el bucle <b>repetir… hasta que</b>, que ejecuta las instrucciones al menos una vez y comprueba la condición al final: repetir: leer PIN; hasta que PIN sea correcto o intentos = 3. La validación se usa en todos los formularios: comprobar que un correo lleva @, que una contraseña tiene suficientes caracteres o que una fecha existe. Evita errores, hace los programas más robustos y es también una medida de <b>seguridad</b>.</p>`, svg: ["Validar una entrada", [["Leer", "pedir el dato"], ["¿Válido?", "comprobar el rango"], ["Si no", "avisar y volver a pedir"]], "No fiarse de los datos"] },
    { tras: "<h3>Algoritmos famosos</h3>", html: `<h3>Ordenar datos: el método de la burbuja</h3><p>Ordenar es una de las tareas más frecuentes de los ordenadores: los contactos por nombre, los productos por precio, los resultados por puntuación. Uno de los algoritmos más sencillos es el <b>método de la burbuja</b>: se recorre la lista comparando cada elemento con el siguiente y, si están en el orden incorrecto, se intercambian. Al terminar la primera pasada, el mayor ha «subido» al final como una burbuja. Se repiten las pasadas hasta que en una no haya ningún intercambio.</p><p>Ejemplo con 5, 3, 8, 1. Primera pasada: 5 y 3 se intercambian (3, 5, 8, 1); 5 y 8 no; 8 y 1 se intercambian (3, 5, 1, 8). Segunda pasada: 3, 1, 5, 8. Tercera: 1, 3, 5, 8. Cuarta: ningún cambio, terminado. Es fácil de entender pero lento con muchos datos; existen algoritmos más eficientes, como la <b>ordenación por mezcla</b> (merge sort) o <b>quicksort</b>, que dividen la lista en partes, las ordenan y las combinan.</p>`, svg: ["Método de la burbuja", [["Inicio", "5, 3, 8, 1"], ["Pasada 1", "3, 5, 1, 8"], ["Pasada 2", "3, 1, 5, 8"], ["Pasada 3", "1, 3, 5, 8"]], "Ordenar intercambiando"] },
    { tras: "<h3>Herramientas para diseñar algoritmos</h3>", html: `<h3>Del algoritmo al programa</h3><p>Una vez diseñado y comprobado, el algoritmo se escribe en un <b>lenguaje de programación</b>. Las estructuras son las mismas en todos; solo cambia cómo se escriben. En Scratch, «leer» es el bloque «preguntar y esperar», «mostrar» es «decir», la asignación es «fijar variable a», el condicional es «si… entonces… si no» y los bucles son «repetir» y «repetir hasta que». En <b>Python</b>, el mismo algoritmo se escribe con palabras en inglés: input() para leer, print() para mostrar, = para asignar, if… else para el condicional y for o while para los bucles.</p><p>Por ejemplo, «leer edad; si edad ≥ 18 mostrar "Puede votar" si no mostrar "No puede votar"» en Python sería: edad = int(input("Edad: ")), luego if edad >= 18: print("Puede votar"), y else: print("No puede votar"). En Python la <b>sangría</b> (los espacios a la izquierda) indica qué instrucciones están dentro del condicional o del bucle. Diseñar primero el algoritmo hace que programar sea mucho más rápido y con menos errores, sea cual sea el lenguaje.</p>`, svg: ["Pseudocódigo, Scratch y Python", [["leer", "preguntar · input()"], ["mostrar", "decir · print()"], ["si… si no", "si entonces · if/else"], ["mientras", "repetir hasta · while"]], "El mismo algoritmo"] },
  ],
  videos: [["<h3>Estructura secuencial</h3>", "diagrama"]],
  grupos: [3, 5, 2, 4],
  ejemplos: [
    ["Escribe el algoritmo que convierte una nota (0-10) en calificación con condiciones anidadas.", ["leer nota.", "si nota < 5: mostrar «Insuficiente».", "si no, si nota < 6: «Suficiente»; si no, si nota < 7: «Bien».", "si no, si nota < 9: «Notable»; si no: «Sobresaliente»."], "Cuatro rombos en cascada en el diagrama de flujo."],
    ["Haz la traza de: a ← 3; b ← 7; aux ← a; a ← b; b ← aux; mostrar a, b.", ["a = 3, b = 7.", "aux = 3.", "a = 7.", "b = 3."], "Muestra 7 y 3: los valores se han intercambiado."],
    ["Ordena con el método de la burbuja la lista 4, 2, 6, 1 indicando cada pasada.", ["Pasada 1: 2, 4, 1, 6.", "Pasada 2: 2, 1, 4, 6.", "Pasada 3: 1, 2, 4, 6.", "Pasada 4: sin cambios."], "1, 2, 4, 6 en tres pasadas con cambios."],
  ],
  niveles: "bmbbbmmmaa",
  ejercicios: [
    ["b", "¿Qué significa «x ← x + 2»?", "Toma el valor actual de x, súmale 2 y guarda el resultado en x."],
    ["b", "¿Qué es inicializar una variable?", "Darle un valor inicial antes de usarla, por ejemplo suma ← 0."],
    ["b", "Escribe la condición para que una persona pueda entrar a una piscina si tiene 14 años o más o va acompañada de un adulto.", "si edad ≥ 14 o acompañado = sí entonces puede entrar."],
    ["b", "¿Para qué sirve validar los datos de entrada?", "Para no aceptar datos absurdos o incorrectos (edades negativas, correos sin @), que darían resultados erróneos o fallos de seguridad."],
    ["b", "¿Cómo se escriben «leer» y «mostrar» en Python?", "input() para leer y print() para mostrar."],
    ["b", "¿Qué tipos de datos de prueba conviene usar en una traza?", "Un caso normal, los casos límite (0, máximo, mínimo) y algún caso extraño o no válido."],
    ["m", "Escribe en pseudocódigo un algoritmo que lea una contraseña y la pida de nuevo mientras tenga menos de 8 caracteres.", "leer clave; mientras longitud(clave) < 8: mostrar «Mínimo 8 caracteres»; leer clave; fin mientras; mostrar «Contraseña aceptada»."],
    ["m", "Haz la traza: x ← 1; mientras x < 20: x ← x · 3; mostrar x.", "x = 1 → 3 → 9 → 27 (27 ya no es < 20). Muestra 27."],
    ["m", "Ordena con burbuja: 9, 7, 5, 3. ¿Cuántos intercambios hay en total?", "P1: 7, 5, 3, 9 (3 intercambios). P2: 5, 3, 7, 9 (2). P3: 3, 5, 7, 9 (1). Total: 6 intercambios."],
    ["m", "Escribe un algoritmo que diga si un año es bisiesto (divisible entre 4, salvo los divisibles entre 100 que no lo sean entre 400).", "leer año; si (año mod 4 = 0 y año mod 100 ≠ 0) o año mod 400 = 0 entonces mostrar «Bisiesto» si no mostrar «No bisiesto»."],
    ["m", "Traduce a Python: leer n; si n mod 2 = 0 mostrar «par» si no mostrar «impar».", "n = int(input())\nif n % 2 == 0:\n    print(\"par\")\nelse:\n    print(\"impar\")"],
    ["m", "Diseña con selección múltiple un algoritmo que muestre el nombre del día de la semana a partir de un número del 1 al 7.", "leer d; según d: caso 1 mostrar «lunes»; caso 2 «martes»; … caso 7 «domingo»; otro caso mostrar «número no válido»."],
    ["m", "¿Qué diferencia hay entre «mientras» y «repetir… hasta que»?", "«Mientras» comprueba la condición antes, así que puede no ejecutarse nunca; «repetir… hasta que» la comprueba al final y se ejecuta al menos una vez."],
    ["m", "Escribe un algoritmo que lea tres números y muestre el mayor usando condiciones anidadas.", "leer a, b, c; si a ≥ b y a ≥ c: mostrar a; si no, si b ≥ c: mostrar b; si no: mostrar c."],
    ["m", "¿Qué hace la sangría en Python?", "Indica qué instrucciones están dentro de un condicional, un bucle o una función. Una sangría incorrecta cambia el programa o da error."],
    ["a", "Diseña el diagrama de flujo de un juego de adivinar un número del 1 al 100 en el que el ordenador dice «mayor» o «menor» y cuenta los intentos.", "Inicio → secreto ← aleatorio(1, 100); intentos ← 0 → leer n → intentos ← intentos + 1 → ¿n = secreto? sí: mostrar «¡Acertaste en», intentos → fin. No: ¿n < secreto? sí: mostrar «mayor»; no: «menor» → volver a leer n."],
    ["a", "¿Cuántas pasadas necesita como máximo el método de la burbuja para ordenar una lista de n elementos? ¿Por qué es lento con un millón de datos?", "Como máximo n − 1 pasadas, cada una con hasta n − 1 comparaciones: del orden de n² comparaciones. Con un millón serían un billón de comparaciones; por eso se usan algoritmos más rápidos como mergesort."],
    ["a", "Escribe un algoritmo de cajero que pida el PIN hasta 3 veces con «repetir… hasta que», y bloquee la tarjeta si se falla tres veces.", "intentos ← 0; repetir: leer pin; intentos ← intentos + 1; si pin ≠ correcto: mostrar «PIN incorrecto»; hasta que pin = correcto o intentos = 3. Si pin = correcto: mostrar menú; si no: mostrar «Tarjeta bloqueada»."],
    ["a", "Encuentra el error: «suma ← 0; para i de 1 a 10: suma ← i; mostrar suma» debería mostrar 55.", "La asignación sobrescribe en lugar de acumular: suma ← i deja el último valor (10). Debe ser suma ← suma + i. Con la traza se ve: suma vale 1, 2, 3… en lugar de 1, 3, 6…"],
    ["a", "Diseña y traduce a Python un algoritmo que lea notas hasta que se introduzca −1 y muestre la media.", "suma = 0; n = 0; nota = float(input()); while nota != -1: suma = suma + nota; n = n + 1; nota = float(input()). Después: if n > 0: print(suma / n). Se valida que haya al menos una nota para no dividir entre 0."],
  ],
  cuartas: ["una variable", "procesos", "una decisión", "un hexágono", "bucle, sprite y fin", "aleatoria", "operador", "un error de sintaxis seguro", "simulación", "Newton", "5", "aprobado y suspenso", "un tercio"],
  quiz: [
    ["«total ← 0» significa…", ["total es igual a 0 siempre", "guardar 0 en total", "comparar total con 0", "borrar total"], 1, "Asignación."],
    ["Para intercambiar a y b se necesita…", ["nada más", "una variable auxiliar", "dos bucles", "un rombo"], 1, "aux ← a; a ← b; b ← aux."],
    ["Con el operador «y» la condición se cumple si…", ["se cumple una", "se cumplen las dos", "no se cumple ninguna", "siempre"], 1, "Ambas verdaderas."],
    ["Con «o» la condición se cumple si…", ["se cumplen las dos obligatoriamente", "se cumple al menos una", "no se cumple ninguna", "nunca"], 1, "Basta con una."],
    ["Un condicional dentro de otro es un condicional…", ["anidado", "infinito", "secuencial", "vacío"], 0, "Anidado."],
    ["«Repetir… hasta que» se ejecuta…", ["nunca", "al menos una vez", "solo si la condición es cierta al principio", "dos veces"], 1, "Comprueba al final."],
    ["El método de la burbuja sirve para…", ["buscar", "ordenar", "sumar", "dibujar"], 1, "Compara e intercambia vecinos."],
    ["En Python, print() sirve para…", ["leer", "mostrar", "repetir", "decidir"], 1, "Salida."],
    ["En Python, la sangría indica…", ["el color", "qué instrucciones están dentro de un bloque", "comentarios", "nada"], 1, "Estructura del programa."],
    ["Validar una entrada es…", ["aceptar cualquier dato", "comprobar que el dato es correcto", "borrar datos", "ordenar"], 1, "Robustez y seguridad."],
  ],
  examen: [
    ["Si x vale 4, tras x ← x · 2 + 1 vale…", ["8", "9", "5", "4"], 1, "4 · 2 + 1 = 9."],
    ["Tras una pasada de burbuja sobre 4, 1, 3, la lista queda…", ["1, 3, 4", "1, 4, 3", "4, 3, 1", "3, 1, 4"], 0, "4↔1 y 4↔3."],
    ["«Si nota ≥ 5 y asistencia ≥ 80» con nota 6 y asistencia 70 es…", ["verdadero", "falso", "error", "depende"], 1, "Falla la segunda."],
    ["En Python, «si» se escribe…", ["for", "if", "while", "print"], 1, "if."],
    ["Un caso límite para un algoritmo de notas de 0 a 10 es…", ["5", "0 o 10", "7", "6"], 1, "Los extremos."],
  ],
  tarjetas: [["Asignación", "Guardar un valor en una variable: x ← 5."], ["Condición compuesta", "Unir condiciones con y, o, no."], ["Validación", "Repetir la petición mientras el dato no sea válido."], ["Burbuja", "Ordenar intercambiando elementos vecinos."]],
  glosario: [
    ["Algoritmo", "Conjunto finito y ordenado de instrucciones precisas."],
    ["Entrada", "Datos que recibe el algoritmo."],
    ["Salida", "Resultado del algoritmo."],
    ["Diagrama de flujo", "Representación gráfica con símbolos normalizados."],
    ["Variable", "Espacio con nombre que guarda un valor."],
    ["Asignación", "Dar un valor a una variable."],
    ["Inicializar", "Dar un valor inicial a una variable."],
    ["Secuencia", "Instrucciones una tras otra."],
    ["Condicional", "Estructura que elige un camino."],
    ["Bucle", "Estructura que repite instrucciones."],
    ["Bucle infinito", "Bucle que nunca termina."],
    ["Pseudocódigo", "Algoritmo escrito con palabras y estructura de programa."],
    ["Traza", "Seguimiento a mano del valor de las variables."],
    ["Validación", "Comprobación de que un dato es correcto."],
    ["Ordenación", "Colocar datos en un orden."],
    ["Sangría", "Espacios que indican la estructura en Python."],
  ],
  situacion: { titulo: "El algoritmo del comedor", reto: "Diseñar el algoritmo de una aplicación sencilla para el comedor escolar que pida los datos de un alumno, valide la entrada, compruebe alergias y calcule el precio mensual según los días.", pasos: ["Definir entradas, proceso y salidas.", "Dibujar el diagrama de flujo con validación, condicionales y bucles.", "Escribirlo en pseudocódigo.", "Hacer la traza con un caso normal, un caso límite y un dato no válido.", "Programarlo en Scratch o Python y comprobar que coincide con la traza."], producto: "Diagrama de flujo, pseudocódigo, trazas y programa.", evaluacion: ["El diagrama usa bien los símbolos y las tres estructuras.", "La validación de datos funciona.", "Las trazas detectan y corrigen errores.", "El programa da los mismos resultados que el algoritmo."] },
  saberes: "algoritmos y estructuras de control (secuencia, selección e iteración), variables, diagramas de flujo, pseudocódigo, trazas, validación de datos, algoritmos de búsqueda y ordenación y su traducción a un lenguaje de programación.",
  familias: ["Escribid juntos una receta familiar como si fuera un algoritmo, con cantidades exactas, una decisión y una repetición."],
  minutos: 105,
});
