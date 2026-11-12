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
