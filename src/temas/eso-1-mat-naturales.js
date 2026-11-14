// Matemáticas 1º ESO · Los números naturales. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, formula, recta, comparar, resumen, C, RD, DECRET, REV, vb, vg } = require("./_eso1L2");

const naturales = recta("Los números naturales en la recta: empiezan en 0 y siguen de uno en uno sin fin", {
  r: [0, 10], marcas: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], titulo: "0, 1, 2, 3, … sin final",
  puntos: [{ x: 0, c: "var(--leaf)" }, { x: 7, t: "7", c: "var(--red)" }, { x: 8, t: "siguiente", c: "var(--pen)", abajo: true }],
});

const posicion = lienzo("Valor de posición: en 3 333 la misma cifra vale 3 000, 300, 30 o 3 según su lugar", `
  ${["UM", "C", "D", "U"].map((n, i) => `<rect x="${24 + i * 54}" y="20" width="48" height="30" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>${tx(48 + i * 54, 40, n, { fs: 13, c: "var(--pen)" })}${tx(48 + i * 54, 82, "3", { fs: 30, fam: D, c: ["var(--red)", "var(--sun)", "var(--leaf)", "var(--inf)"][i] })}`).join("")}
  ${tx(130, 118, "3 000 + 300 + 30 + 3", { fs: 16, fam: D })}${tx(130, 146, "cada lugar vale 10 veces más", { fs: 12, c: "var(--muted)" })}${tx(130, 166, "que el de su derecha", { fs: 12, c: "var(--muted)" })}`);

const clases = cajas("Clases de unidades: unidades, millares, millones y miles de millones, en grupos de tres cifras", [
  ["Unidades", ["U · D · C", "hasta 999"], "var(--inf)"], ["Millares", ["UM · DM · CM", "hasta 999 999"], "var(--leaf)"],
  ["Millones", ["U. de millón…", "1 000 000"], "var(--sun)"], ["Miles de mill.", ["mil millones", "1 000 000 000"], "var(--red)"],
], "Grupos de tres cifras");

const romanos = tabla(["I", "V", "X", "L", "C", "D", "M"], [["1", "5", "10", "50", "100", "500", "1 000"]]);

const redondeo = recta("Redondear 3 742 a las centenas: está más cerca de 3 700 que de 3 800", {
  r: [3700, 3800], marcas: [[3700, "3 700"], [3750, "3 750"], [3800, "3 800"]], titulo: "Redondeo a las centenas",
  puntos: [{ x: 3742, t: "3 742", c: "var(--red)" }],
});

const sumaresta = comparar("Suma y resta: términos de cada operación y relación entre ellas", [
  ["Suma", ["sumando + sumando", "= suma o total", "orden: da igual"], "var(--pen)"],
  ["Resta", ["minuendo − sustraendo", "= diferencia", "orden: ¡importa!"], "var(--red)"],
], "Operaciones inversas");

const division = lienzo("Partes de la división y prueba: dividendo igual a divisor por cociente más resto", `
  ${tx(70, 52, "347", { fs: 26, fam: D, c: "var(--pen)" })}<path d="M110 30 V62 H170" fill="none" stroke="var(--ink)" stroke-width="2.4"/>${tx(140, 52, "8", { fs: 24, fam: D, c: "var(--red)" })}
  ${tx(70, 92, "3", { fs: 22, fam: D, c: "var(--sun)" })}${tx(140, 88, "43", { fs: 22, fam: D, c: "var(--leaf)" })}
  ${tx(70, 18, "dividendo", { fs: 10.5, c: "var(--pen)" })}${tx(208, 52, "divisor", { fs: 10.5, c: "var(--red)" })}${tx(70, 112, "resto", { fs: 10.5, c: "var(--sun)" })}${tx(196, 92, "cociente", { fs: 10.5, c: "var(--leaf)" })}
  ${tx(130, 146, "347 = 8 · 43 + 3", { fs: 17, fam: D })}${tx(130, 168, "el resto siempre es menor que 8", { fs: 11.5, c: "var(--muted)" })}`);

const propiedades = cajas("Propiedades de la multiplicación: conmutativa, asociativa, elemento neutro y distributiva", [
  ["Conmutativa", ["a · b = b · a", "4 · 7 = 7 · 4"]], ["Asociativa", ["(a · b) · c = a · (b · c)", "(2 · 5) · 9 = 90"]],
  ["Neutro", ["a · 1 = a", "13 · 1 = 13"]], ["Distributiva", ["a · (b + c) = a·b + a·c", "6 · 12 = 60 + 12"]],
], "Propiedades del producto");

const jerarquia = pasos("Jerarquía de las operaciones: primero paréntesis, luego multiplicaciones y divisiones, y al final sumas y restas", ["Paréntesis ( )", "Potencias y raíces", "× y : de izquierda a derecha", "+ y − de izquierda a derecha"], "¿Qué se hace primero?");

const ejemploJer = pasos("Ejemplo de operación combinada: 20 menos 3 por paréntesis 8 menos 5 más 12 entre 4 da 14", ["20 − 3 · (8 − 5) + 12 : 4", "Paréntesis: 20 − 3 · 3 + 12 : 4", "Producto y división: 20 − 9 + 3", "De izquierda a derecha: 14"], "Paso a paso");

const problema = pasos("Cuatro pasos para resolver un problema: comprender, planificar, hacer y comprobar", ["Comprender: datos y pregunta", "Planificar: qué operaciones", "Hacer: calcular con orden", "Comprobar: ¿tiene sentido?"], "Método de Pólya");

const calculoMental = comparar("Trucos de cálculo mental: multiplicar por 5 y por 9 y sumar por compensación", [
  ["· 5", ["· 10 y : 2", "48 · 5 = 240"], "var(--leaf)"],
  ["· 9", ["· 10 − el nº", "37 · 9 = 333"], "var(--pen)"],
  ["+ 99", ["+ 100 − 1", "458 + 99 = 557"], "var(--red)"],
], "Atajos útiles");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Los números naturales",
  minutos: 100,
  objetivos: [
    "Leer, escribir y descomponer números naturales usando el valor de posición",
    "Comparar, ordenar y representar números naturales en la recta",
    "Aproximar números por redondeo y truncamiento y estimar resultados",
    "Sumar, restar, multiplicar y dividir con seguridad y conocer sus propiedades",
    "Aplicar la jerarquía de las operaciones en cálculos combinados",
    "Resolver problemas de la vida diaria siguiendo un método",
  ],
  claves: ["número natural", "valor de posición", "redondeo", "estimación", "división", "jerarquía", "propiedad distributiva"],
  pregunta: {
    texto: "Un estadio tiene 47 filas con 236 asientos cada una. ¿Caben los 10 000 aficionados de tu equipo?",
    respuesta: "Hay que multiplicar: 47 · 236 = <mark>11 092 asientos</mark>. Sí caben, y sobran 1 092 sitios. Antes de calcular se puede <b>estimar</b>: 50 · 200 = 10 000, así que la respuesta debía rondar esa cifra.",
  },
  lectura: {
    titulo: "Diez dedos y un cero",
    html: `<p>Hace miles de años, los pastores contaban sus ovejas haciendo muescas en un hueso o guardando una piedrecita por cada animal. Era lento, pero funcionaba. Con el tiempo, cada pueblo inventó sus propios símbolos: los egipcios dibujaban flores de loto y ranas, y los romanos usaban letras como I, V, X o M. Con los números romanos se puede escribir, pero multiplicar MCMXCIV por XLVII es casi imposible.</p><p>La gran revolución llegó desde la India, hacia el siglo V. Allí se inventó un sistema con solo diez cifras, del 0 al 9, en el que <b>el lugar que ocupa cada cifra cambia su valor</b>. Y se inventó algo que parece una tontería pero es genial: el <b>cero</b>, una cifra para decir «aquí no hay nada». Los sabios árabes, como Al-Juarismi, lo trajeron a Europa a través de al-Ándalus, y por eso hoy los llamamos números arábigos.</p><p>Gracias a ese sistema, un alumno de 1º de ESO hace cuentas que en la Edad Media solo sabían hacer unos pocos expertos. En este tema repasarás los números naturales, los que usamos para contar, y aprenderás a manejarlos con soltura: leerlos, ordenarlos, redondearlos, operar con ellos y usarlos para resolver problemas reales.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 ¿Qué son los números naturales?</h3><p>Los <b>números naturales</b> son los que usamos para <b>contar</b>: 0, 1, 2, 3, 4… El conjunto de todos ellos se representa con la letra <mark>ℕ</mark>. Hay quien empieza en el 1, pero en este curso incluimos el 0, que sirve para decir que no hay ningún objeto.</p><p>Los naturales tienen tres propiedades importantes. Tienen un <b>primer elemento</b>, el 0. Cada número tiene un <b>siguiente</b>, que se obtiene sumando 1: el siguiente de 99 es 100. Y <b>no hay un último</b>: por grande que sea un número, siempre puedes sumarle 1. Por eso decimos que hay infinitos naturales.</p><p>Usamos los naturales para contar (hay 28 alumnos), para ordenar (llegó el 3.º, aunque aquí se llaman ordinales) y para identificar cosas (el autobús 27 o el código postal 08001). En este último caso no tiene sentido operar con ellos: sumar dos códigos postales no da nada útil.</p>`, svg: naturales },
    { html: `<h3>1.2 El sistema de numeración decimal</h3><p>Nuestro sistema de numeración es <b>decimal</b> porque usa diez cifras (0, 1, 2, 3, 4, 5, 6, 7, 8 y 9) y porque <b>diez unidades de un orden forman una unidad del orden siguiente</b>: 10 unidades son 1 decena, 10 decenas son 1 centena, 10 centenas son 1 millar.</p><p>Además es <b>posicional</b>: el valor de una cifra depende del lugar que ocupa. En el número 3 333 las cuatro cifras son iguales, pero la primera vale 3 000, la segunda 300, la tercera 30 y la última 3. Cada lugar vale <mark>diez veces más</mark> que el de su derecha.</p><p>Gracias al valor de posición podemos <b>descomponer</b> cualquier número: 40 562 = 4 DM + 0 UM + 5 C + 6 D + 2 U = 40 000 + 500 + 60 + 2. El 0 es imprescindible: indica que no hay unidades de millar. Sin él, 40 562 y 4 562 se confundirían.</p>`, svg: posicion },
    { html: `<h3>1.3 Otros sistemas: los números romanos</h3><p>No todos los sistemas son posicionales. Los romanos usaban siete letras con un valor fijo:</p>${romanos}<p>Para leerlos se suman los valores (XVI = 10 + 5 + 1 = 16), pero si una letra menor va <b>delante</b> de una mayor, se resta: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900. Una misma letra no se repite más de tres veces seguidas, y V, L y D no se repiten nunca. Una raya encima multiplica por mil.</p><p>Así, MMXXVI es 2026 y CDXLIV es 444. Hoy los vemos en relojes, en capítulos de libros, en los siglos (siglo XXI) y en los nombres de reyes y papas. Compararlos con nuestro sistema te ayuda a valorar lo práctico que es tener el cero y el valor de posición.</p>` },
    { html: `<h3>1.4 Leer y escribir números grandes</h3><p>Para leer un número grande se separan las cifras en <b>grupos de tres</b> empezando por la derecha. Cada grupo forma una clase: unidades, millares (miles), millones y miles de millones. Así, 7 305 040 218 se lee «siete mil trescientos cinco millones cuarenta mil doscientos dieciocho».</p><p>En España se deja un pequeño <b>espacio</b> entre los grupos (7 305 040 218), aunque también verás puntos en algunos libros y periódicos. Nunca se usa la coma, que se reserva para los decimales. Los números de cuatro cifras pueden escribirse juntos: 2026.</p><p>¡Cuidado con el «billón»! En español, un billón es un millón de millones (1 000 000 000 000, un 1 con doce ceros). En inglés, <i>billion</i> son solo mil millones. Por eso, al traducir noticias de economía o de astronomía hay que tener mucho ojo para no equivocarse en mil veces.</p>`, svg: clases },
    { html: `<h3>1.5 Comparar y ordenar</h3><p>Para comparar dos números naturales se usan los símbolos <b>&lt;</b> (menor que) y <b>&gt;</b> (mayor que). La punta siempre señala al menor: 85 &lt; 112 y 2 001 &gt; 1 999.</p><p>Si dos números tienen <b>distinta cantidad de cifras</b>, es mayor el que tiene más (sin contar ceros a la izquierda). Si tienen las <b>mismas cifras</b>, se comparan de izquierda a derecha hasta encontrar la primera diferente: en 45 372 y 45 327, las tres primeras coinciden, y en las decenas 7 &gt; 2, así que 45 372 &gt; 45 327.</p><p>Los números naturales se pueden colocar en una <b>recta numérica</b>: se marca el 0, se elige una unidad de longitud y se van poniendo los números a la misma distancia. En la recta, un número es mayor cuanto más a la derecha está. Ordenar de menor a mayor es ir leyendo de izquierda a derecha.</p>` },
    { html: `<h3>1.6 Aproximar: redondeo y truncamiento</h3><p>Muchas veces no necesitamos un número exacto: «al concierto fueron unas 3 700 personas». <b>Aproximar</b> es sustituir un número por otro cercano y más sencillo. Hay dos formas.</p><p>Para <b>truncar</b> a un orden, se cambian por ceros todas las cifras de la derecha: 3 742 truncado a las centenas es 3 700. Para <b>redondear</b>, se mira la primera cifra que se elimina: si es <mark>5 o mayor</mark>, se suma 1 a la cifra anterior; si es menor que 5, se deja igual. Así, 3 742 redondeado a las centenas es 3 700 (porque 4 &lt; 5) y 3 762 es 3 800 (porque 6 ≥ 5).</p><p>El redondeo da el número <b>más cercano</b>, como se ve en la recta. El <b>error</b> cometido es la diferencia entre el valor real y la aproximación: al redondear 3 742 a 3 700 el error es 42. Cuanto menor sea el orden al que redondeamos, más pequeño será el error.</p>`, svg: redondeo, video: vb("natB") },
    { html: `<h3>1.7 Estimar antes de calcular</h3><p><b>Estimar</b> es calcular un resultado aproximado usando números redondeados. Es una herramienta muy poderosa para dos cosas: decidir rápido sin calculadora y <b>detectar errores</b>.</p><p>Por ejemplo, para saber si 10 € llegan para 3 libretas de 2,95 €, piensas: 3 · 3 = 9 € como mucho. Y si al multiplicar 48 · 52 la calculadora te da 24 960, algo va mal, porque 50 · 50 = 2 500. ¡Has pulsado un cero de más!</p><p>Para estimar se redondea cada número a su primera cifra o a un número cómodo, y luego se opera mentalmente. En una suma larga de precios de la compra, redondear cada producto al euro más cercano da una idea muy buena del total. Acostúmbrate a estimar siempre antes de hacer la cuenta exacta: es lo que hacen los buenos matemáticos, los ingenieros y cualquier persona que no quiere que la engañen en una tienda.</p>`, svg: calculoMental },
    { html: `<h3>2.1 Sumar y restar</h3><p>En la <b>suma</b>, los números que se suman son los <b>sumandos</b> y el resultado es la <b>suma</b> o total. La suma cumple la propiedad <b>conmutativa</b> (el orden no cambia el resultado: 7 + 5 = 5 + 7) y la <b>asociativa</b> (se pueden agrupar como queramos: (8 + 6) + 4 = 8 + (6 + 4)). Estas propiedades permiten buscar parejas que suman 10 o 100 para calcular mentalmente: 37 + 48 + 63 = (37 + 63) + 48 = 148.</p><p>En la <b>resta</b>, el <b>minuendo</b> menos el <b>sustraendo</b> da la <b>diferencia</b>. La resta <b>no</b> es conmutativa: 9 − 4 no es igual que 4 − 9 (con naturales, esta última ni siquiera se puede hacer). La resta es la operación <b>inversa</b> de la suma, y eso da una prueba: diferencia + sustraendo = minuendo. Si 532 − 178 = 354, comprueba: 354 + 178 = 532.</p>`, svg: sumaresta },
    { html: `<h3>2.2 Multiplicar y sus propiedades</h3><p>Multiplicar es una forma rápida de sumar varias veces el mismo número: 6 · 4 = 6 + 6 + 6 + 6 = 24. Los números que se multiplican son los <b>factores</b> y el resultado, el <b>producto</b>. En matemáticas se escribe el punto «·» en lugar de la cruz para no confundirla con la letra x.</p><p>La multiplicación es <b>conmutativa</b> y <b>asociativa</b>, tiene <b>elemento neutro</b> (multiplicar por 1 no cambia nada) y todo número multiplicado por 0 da 0. La propiedad más útil es la <b>distributiva</b>: <mark>a · (b + c) = a · b + a · c</mark>. Sirve para calcular mentalmente: 7 · 13 = 7 · 10 + 7 · 3 = 70 + 21 = 91.</p><p>Leída al revés se llama <b>sacar factor común</b>: 8 · 27 + 8 · 73 = 8 · (27 + 73) = 8 · 100 = 800. En el tema de álgebra verás que esta propiedad es la base para trabajar con letras.</p>`, svg: propiedades },
    { html: `<h3>2.3 Dividir: exacta y entera</h3><p>Dividir es <b>repartir en partes iguales</b> o averiguar cuántas veces cabe un número en otro. Sus términos son el <b>dividendo</b> (lo que se reparte), el <b>divisor</b> (entre cuántos), el <b>cociente</b> (lo que toca a cada uno) y el <b>resto</b> (lo que sobra).</p><p>Si el resto es 0, la división es <b>exacta</b>: 72 : 8 = 9. Si no, es <b>entera</b>: al repartir 347 cromos entre 8 amigos tocan 43 a cada uno y sobran 3. Siempre se cumple la <b>prueba de la división</b>: <mark>dividendo = divisor · cociente + resto</mark>, y el resto tiene que ser <b>menor que el divisor</b> (si no, todavía se podría repartir más).</p><p>Dos avisos: <b>no se puede dividir entre 0</b> (¿cómo vas a repartir algo entre cero personas?), y si multiplicas o divides dividendo y divisor por el mismo número, el cociente de una división exacta no cambia: 300 : 50 = 30 : 5 = 6.</p>`, svg: division, video: vb("natB2") },
    { html: `<h3>2.4 La jerarquía de las operaciones</h3><p>¿Cuánto vale 2 + 3 · 4? Si sumas primero salen 20, y si multiplicas primero, 14. Para que todo el mundo obtenga lo mismo, existe un orden acordado, la <b>jerarquía de las operaciones</b>:</p><ol><li>Primero, lo que hay dentro de los <b>paréntesis</b> (si hay varios, empezando por los de dentro).</li><li>Después, las <b>potencias y raíces</b>.</li><li>Luego, <b>multiplicaciones y divisiones</b>, de izquierda a derecha.</li><li>Por último, <b>sumas y restas</b>, de izquierda a derecha.</li></ol><p>Así, 2 + 3 · 4 = 2 + 12 = <mark>14</mark>. Si queremos sumar primero, hay que escribir el paréntesis: (2 + 3) · 4 = 20. Las calculadoras científicas respetan la jerarquía, pero algunas sencillas no: compruébalo con la tuya.</p><p>Un consejo: copia la expresión entera en cada paso y subraya la operación que vas a hacer. Así no se te olvida ningún número por el camino.</p>`, svg: jerarquia },
    { html: `<h3>2.5 Operaciones combinadas paso a paso</h3><p>Veamos un ejemplo completo: 20 − 3 · (8 − 5) + 12 : 4.</p><ul><li>Paréntesis: 8 − 5 = 3 → 20 − 3 · 3 + 12 : 4.</li><li>Multiplicaciones y divisiones: 3 · 3 = 9 y 12 : 4 = 3 → 20 − 9 + 3.</li><li>Sumas y restas de izquierda a derecha: 20 − 9 = 11 y 11 + 3 = <b>14</b>.</li></ul><p>Fíjate en el último paso: con sumas y restas seguidas se va <b>de izquierda a derecha</b>. Si hicieras primero 9 + 3, te saldría 20 − 12 = 8, que está mal. Lo mismo pasa con multiplicaciones y divisiones: 24 : 4 · 2 = 6 · 2 = 12, no 24 : 8 = 3.</p><p>Con corchetes, se resuelve primero el paréntesis de dentro: 50 − [6 + 2 · (9 − 4)] = 50 − [6 + 10] = 50 − 16 = 34. Las operaciones combinadas aparecen mucho al plantear problemas en los que hay que hacer varias cuentas a la vez, como calcular el gasto de una excursión.</p>`, svg: ejemploJer },
    { html: `<h3>2.6 Resolver problemas</h3><p>Resolver un problema no es buscar números y hacer «la cuenta que toca». Un método que funciona muy bien, propuesto por el matemático George Pólya, tiene cuatro fases:</p><ol><li><b>Comprender</b>: lee despacio, subraya los datos y la pregunta. Haz un dibujo si ayuda.</li><li><b>Planificar</b>: decide qué operaciones hay que hacer y en qué orden.</li><li><b>Ejecutar</b>: calcula con cuidado, escribiendo cada paso.</li><li><b>Comprobar</b>: ¿el resultado responde a la pregunta? ¿Es razonable? Escribe la solución con una frase y con unidades.</li></ol><p>Ejemplo: «Una clase de 27 alumnos va de excursión. El autobús cuesta 324 € y la entrada, 6 € por persona. ¿Cuánto paga cada uno?». Plan: repartir el autobús y sumar la entrada. Cálculo: 324 : 27 = 12 € y 12 + 6 = 18 €. Comprobación: 18 · 27 = 486 = 324 + 162 ✓. Respuesta: cada alumno paga <mark>18 €</mark>.</p>`, svg: problema, video: vg("natV") },
  ],
  ejemplos: [
    { enunciado: "Descompón 305 070 y escribe cómo se lee.", pasos: ["Cifras por orden: 3 CM, 0 DM, 5 UM, 0 C, 7 D, 0 U.", "300 000 + 5 000 + 70."], resultado: "Se lee «trescientos cinco mil setenta»." },
    { enunciado: "Escribe en números romanos 1 994 y 2 026.", pasos: ["1 994 = 1 000 + 900 + 90 + 4 = M + CM + XC + IV.", "2 026 = 2 000 + 20 + 6 = MM + XX + VI."], resultado: "MCMXCIV y MMXXVI." },
    { enunciado: "Redondea y trunca 48 650 a los millares.", pasos: ["La cifra de los millares es 8; la siguiente, 6.", "Truncar: 48 000.", "Redondear: 6 ≥ 5 → 49 000."], resultado: "Truncado 48 000; redondeado 49 000." },
    { enunciado: "Calcula: 45 − 5 · (12 − 4) : 8 + 3².", pasos: ["Paréntesis: 12 − 4 = 8.", "Potencia: 3² = 9.", "5 · 8 = 40; 40 : 8 = 5.", "45 − 5 + 9 = 49."], resultado: "49." },
    { enunciado: "Calcula mentalmente 25 · 36 usando las propiedades.", pasos: ["36 = 4 · 9.", "25 · 4 · 9 = 100 · 9 (asociativa)."], resultado: "900." },
    { enunciado: "En una granja recogen 1 250 huevos y los envasan en cajas de 12. ¿Cuántas cajas llenan y cuántos huevos sobran?", pasos: ["1 250 : 12 → cociente 104, resto 2.", "Prueba: 12 · 104 + 2 = 1 250 ✓."], resultado: "104 cajas llenas y sobran 2 huevos." },
  ],
  errores: [
    "Olvidar el cero al escribir un número: «dos mil cinco» es 2 005, no 205.",
    "Confundir el billón español (10¹²) con el billion inglés (10⁹).",
    "Redondear mirando la cifra equivocada: hay que mirar la primera que se elimina.",
    "Sumar antes de multiplicar en 2 + 3 · 4: el resultado correcto es 14.",
    "Hacer las restas o divisiones seguidas de derecha a izquierda: 20 − 9 + 3 = 14, no 8.",
    "Dar un resto mayor o igual que el divisor en una división entera.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Escribe con cifras: a) doscientos mil cuatrocientos ocho; b) tres millones cincuenta mil.", sol: "a) 200 408. b) 3 050 000." },
    { nivel: "básico", q: "Escribe con letras: 1 080 015.", sol: "Un millón ochenta mil quince." },
    { nivel: "básico", q: "¿Cuánto vale la cifra 7 en 572 340 y en 3 007?", sol: "En 572 340 es la DM: 70 000. En 3 007 son 7 unidades: 7." },
    { nivel: "básico", q: "Descompón 60 409 según el valor de posición de sus cifras.", sol: "6 DM + 4 C + 9 U = 60 000 + 400 + 9." },
    { nivel: "básico", q: "Ordena de menor a mayor: 10 101, 10 011, 11 001, 1 110.", sol: "1 110 < 10 011 < 10 101 < 11 001." },
    { nivel: "básico", q: "Escribe en números romanos: 14, 49, 390, 2 026.", sol: "XIV; XLIX; CCCXC; MMXXVI." },
    { nivel: "básico", q: "Escribe en nuestro sistema: XXIX, CDL, MCMLXXX.", sol: "29; 450; 1 980." },
    { nivel: "básico", q: "Redondea 7 358 a las decenas, a las centenas y a los millares.", sol: "Decenas: 7 360 (8 ≥ 5). Centenas: 7 400 (5 ≥ 5). Millares: 7 000 (3 < 5)." },
    { nivel: "básico", q: "Trunca 92 786 a las centenas y a los millares.", sol: "92 700 y 92 000." },
    { nivel: "básico", q: "Calcula: 4 + 6 · 2 y (4 + 6) · 2.", sol: "4 + 12 = 16. 10 · 2 = 20. El paréntesis cambia el resultado." },
    { nivel: "básico", q: "Haz la división 1 000 : 7 y escribe la prueba.", sol: "Cociente 142, resto 6. Prueba: 7 · 142 + 6 = 994 + 6 = 1 000." },
    { nivel: "básico", q: "Indica la propiedad: a) 8 · 5 = 5 · 8; b) 3 · (10 + 2) = 30 + 6; c) 17 · 1 = 17.", sol: "a) Conmutativa. b) Distributiva. c) Elemento neutro." },
    { nivel: "medio", q: "Calcula: 30 − 4 · 5 + 18 : 3.", sol: "30 − 20 + 6 = 16." },
    { nivel: "medio", q: "Calcula: 7 · (9 − 2 · 3) − 12 : (5 − 1).", sol: "Paréntesis: 9 − 6 = 3 y 5 − 1 = 4. 7 · 3 − 12 : 4 = 21 − 3 = 18." },
    { nivel: "medio", q: "Calcula: 60 − [15 + 3 · (8 − 6)] + 2³.", sol: "8 − 6 = 2; 3 · 2 = 6; 15 + 6 = 21; 2³ = 8. 60 − 21 + 8 = 47." },
    { nivel: "medio", q: "Calcula mentalmente con la distributiva: 9 · 23 y 12 · 15.", sol: "9 · 23 = 9 · 20 + 9 · 3 = 180 + 27 = 207. 12 · 15 = 12 · 10 + 12 · 5 = 120 + 60 = 180." },
    { nivel: "medio", q: "Saca factor común y calcula: 14 · 37 + 14 · 63.", sol: "14 · (37 + 63) = 14 · 100 = 1 400." },
    { nivel: "medio", q: "Estima y después calcula: 398 · 21.", sol: "Estimación: 400 · 20 = 8 000. Exacto: 398 · 21 = 8 358." },
    { nivel: "medio", q: "En una división el divisor es 15, el cociente 23 y el resto 9. ¿Cuál es el dividendo?", sol: "D = 15 · 23 + 9 = 345 + 9 = 354." },
    { nivel: "medio", q: "Un tren lleva 8 vagones con 64 asientos. Van 437 viajeros. ¿Cuántos asientos quedan libres?", sol: "8 · 64 = 512 asientos. 512 − 437 = 75 libres." },
    { nivel: "medio", q: "Pones 2 400 € en una hucha y sacas 85 € al mes. ¿Cuántos meses completos puedes sacar dinero y cuánto queda?", sol: "2 400 : 85 → cociente 28, resto 20. 28 meses completos y quedan 20 €." },
    { nivel: "medio", q: "Escribe la operación de este enunciado y calcúlala: «al doble de 15 réstale el triple de 7».", sol: "2 · 15 − 3 · 7 = 30 − 21 = 9." },
    { nivel: "medio", q: "La población de una ciudad es 1 638 937. Redondéala a los millares y a los millones. ¿Cuál usarías en un titular?", sol: "1 639 000 y 2 000 000. En un titular: «1,6 millones» o «1 639 000», que es más preciso." },
    { nivel: "avanzado", q: "Coloca paréntesis para que sea cierto: 3 + 5 · 4 − 2 = 30.", sol: "(3 + 5) · 4 − 2 = 8 · 4 − 2 = 32 − 2 = 30 ✓. Sin paréntesis daría 3 + 20 − 2 = 21." },
    { nivel: "avanzado", q: "¿Cuántos números naturales de tres cifras hay? ¿Y de cuatro?", sol: "De 100 a 999: 999 − 100 + 1 = 900. De 1 000 a 9 999: 9 000." },
    { nivel: "avanzado", q: "Halla el mayor número de 5 cifras distintas que puedes formar con 0, 3, 5, 7, 9, y el menor.", sol: "Mayor: 97 530. Menor: 30 579 (el 0 no puede ir delante)." },
    { nivel: "avanzado", q: "Un número redondeado a las centenas da 4 500. ¿Entre qué valores puede estar?", sol: "Entre 4 450 y 4 549, ambos incluidos." },
    { nivel: "avanzado", q: "Una impresora hace 18 páginas por minuto. ¿Cuánto tarda en imprimir 25 copias de un trabajo de 42 páginas? Da el resultado en horas y minutos.", sol: "25 · 42 = 1 050 páginas. 1 050 : 18 = 58 min y sobran 6 páginas, que necesitan 1 minuto más: 59 min. Menos de 1 hora." },
    { nivel: "avanzado", q: "En una división exacta el dividendo es 1 512 y el cociente 36. Si multiplicamos el divisor por 3, ¿cuál es el nuevo cociente?", sol: "Divisor = 1 512 : 36 = 42. Nuevo divisor 126: 1 512 : 126 = 12 (un tercio de 36)." },
    { nivel: "avanzado", q: "Inventa un problema que se resuelva con la operación 5 · 12 − 3 · 8 y resuélvelo.", sol: "Ejemplo: «Compro 5 cajas de 12 rotuladores y regalo 3 paquetes de 8. ¿Cuántos me quedan?». 60 − 24 = 36 rotuladores." },
  ],
  quiz: [
    { q: "El primer número natural es…", o: ["1", "0", "−1", "no tiene"], a: 1, e: "En este curso incluimos el 0." },
    { q: "¿Hay un número natural mayor que todos?", o: ["Sí, el billón", "Sí, el infinito", "No", "Depende"], a: 2, e: "Siempre se puede sumar 1." },
    { q: "En 48 215, la cifra 8 vale…", o: ["8", "800", "8 000", "80 000"], a: 2, e: "Está en las unidades de millar." },
    { q: "Un millón tiene… ceros", o: ["5", "6", "9", "12"], a: 1, e: "1 000 000." },
    { q: "Un billón en español es…", o: ["mil millones", "un millón de millones", "cien millones", "mil billones"], a: 1, e: "10¹²." },
    { q: "XL en romanos vale…", o: ["60", "40", "90", "14"], a: 1, e: "50 − 10." },
    { q: "MMXXVI es…", o: ["2016", "2026", "2024", "1026"], a: 1, e: "2 000 + 20 + 6." },
    { q: "¿Cuál es mayor?", o: ["90 999", "100 000", "99 990", "9 999"], a: 1, e: "Es el que tiene más cifras." },
    { q: "6 482 redondeado a las centenas:", o: ["6 400", "6 500", "6 480", "6 000"], a: 1, e: "8 ≥ 5, se sube." },
    { q: "6 482 truncado a las centenas:", o: ["6 400", "6 500", "6 480", "6 000"], a: 0, e: "Se cambian por ceros." },
    { q: "Una buena estimación de 49 · 31 es…", o: ["150", "1 500", "15 000", "800"], a: 1, e: "50 · 30." },
    { q: "La propiedad a · (b + c) = a · b + a · c es la…", o: ["conmutativa", "asociativa", "distributiva", "del neutro"], a: 2, e: "Reparte el factor." },
    { q: "¿Qué operación NO es conmutativa?", o: ["suma", "multiplicación", "resta", "ninguna"], a: 2, e: "9 − 4 ≠ 4 − 9." },
    { q: "En 85 : 6, el resto es…", o: ["1", "4", "5", "7"], a: 0, e: "6 · 14 = 84." },
    { q: "Dividendo = …", o: ["divisor · cociente − resto", "divisor · cociente + resto", "cociente + resto", "divisor + resto"], a: 1, e: "Prueba de la división." },
    { q: "2 + 3 · 4 =", o: ["20", "14", "24", "9"], a: 1, e: "Primero el producto." },
    { q: "18 − 6 + 2 =", o: ["10", "14", "12", "22"], a: 1, e: "De izquierda a derecha." },
    { q: "24 : 4 · 2 =", o: ["3", "12", "48", "6"], a: 1, e: "De izquierda a derecha: 6 · 2." },
    { q: "7 : 0 =", o: ["0", "7", "1", "no se puede"], a: 3, e: "No se divide entre 0." },
    { q: "La última fase del método de Pólya es…", o: ["leer", "calcular", "comprobar", "copiar"], a: 2, e: "Revisar si el resultado tiene sentido." },
  ],
  examen: [
    { q: "500 000 + 3 000 + 20 =", o: ["503 020", "530 020", "5 302", "500 320"], a: 0, e: "Valor de posición." },
    { q: "CMXC =", o: ["1 090", "990", "910", "1 190"], a: 1, e: "900 + 90." },
    { q: "39 506 redondeado a los millares:", o: ["39 000", "40 000", "39 500", "40 500"], a: 1, e: "5 ≥ 5." },
    { q: "40 − 2 · (3 + 5) =", o: ["24", "304", "32", "26"], a: 0, e: "40 − 16." },
    { q: "12 + 36 : (4 + 2) − 3 =", o: ["5", "15", "18", "21"], a: 1, e: "12 + 6 − 3." },
    { q: "15 · 99 =", o: ["1 485", "1 495", "1 395", "1 500"], a: 0, e: "1 500 − 15." },
    { q: "En una división, divisor 9, cociente 11, resto 4. Dividendo:", o: ["103", "99", "95", "104"], a: 0, e: "99 + 4." },
    { q: "¿Qué resto es imposible si el divisor es 6?", o: ["0", "3", "5", "6"], a: 3, e: "El resto es menor que el divisor." },
  ],
  feynman: ["Por qué nuestro sistema se llama decimal y posicional", "Cómo se redondea un número y para qué sirve estimar", "Qué orden se sigue en las operaciones combinadas y por qué hace falta", "Qué dice la prueba de la división"],
  figura: {
    titulo: "Los números naturales en un vistazo",
    svg: resumen("Resumen del tema de los números naturales", [
      ["Sistema", "decimal y posicional: 10 cifras, cada lugar vale 10 veces más", "var(--pen)"],
      ["Aproximar", "truncar (ceros) · redondear (mirar si la cifra es ≥ 5)", "var(--leaf)"],
      ["Operaciones", "+ y · conmutativas · distributiva a(b + c) = ab + ac", "var(--sun)"],
      ["División", "D = d · c + r, con r < d · no se divide entre 0", "var(--inf)"],
      ["Jerarquía", "( ) → potencias → · : → + − (de izquierda a derecha)", "var(--red)"],
    ]),
  },
  video: vg("natV"),
  mapa: mapa("NATURALES", "var(--pen)", [
    ["Escribir", "valor de posición · romanos", "var(--pen)"],
    ["Aproximar", "redondeo · truncamiento", "var(--leaf)"],
    ["Operar", "+ − · : y propiedades", "var(--sun)"],
    ["Combinar", "jerarquía · problemas", "var(--red)"],
  ], 250),
  glosario: [
    ["Número natural", "Número que sirve para contar: 0, 1, 2, 3…"],
    ["Cifra", "Cada uno de los diez símbolos 0, 1, 2… 9."],
    ["Sistema posicional", "Sistema en el que el valor de una cifra depende de su lugar."],
    ["Valor de posición", "Lo que vale una cifra según el lugar que ocupa."],
    ["Orden de unidades", "Unidades, decenas, centenas, millares…"],
    ["Truncar", "Sustituir por ceros las cifras a partir de un orden."],
    ["Redondear", "Aproximar al número más cercano del orden elegido."],
    ["Estimar", "Calcular un resultado aproximado con números redondeados."],
    ["Factor", "Cada número que se multiplica."],
    ["Dividendo", "Número que se reparte en una división."],
    ["Resto", "Lo que sobra en una división entera; es menor que el divisor."],
    ["Propiedad distributiva", "a · (b + c) = a · b + a · c."],
    ["Jerarquía de las operaciones", "Orden acordado para hacer las operaciones combinadas."],
  ],
  situacion: {
    titulo: "Organizamos la excursión de fin de curso",
    reto: "Vuestro grupo tiene que preparar el presupuesto de una excursión de un día para toda la clase y decidir cuánto debe pagar cada alumno.",
    pasos: [
      "Elegid un destino y buscad los precios reales: autobús, entradas, comida y algún imprevisto.",
      "Estimad el coste total redondeando los precios y anotad la estimación.",
      "Calculad el coste exacto escribiendo una operación combinada con paréntesis.",
      "Repartid el total entre los alumnos y decidid qué hacer con el resto de la división.",
      "Comparad la estimación con el resultado exacto y explicad la diferencia.",
    ],
    producto: "Un presupuesto en una hoja o cartel con la operación combinada, el reparto por alumno y la comprobación.",
    evaluacion: ["Usa correctamente la jerarquía de las operaciones.", "Estima de forma razonable antes de calcular.", "Interpreta el resto de la división en el contexto.", "Presenta los cálculos con orden y con unidades."],
  },
  tarjetas: [
    ["ℕ", "0, 1, 2, 3… (sin último)"], ["Sistema decimal", "10 cifras; 10 unidades forman una del orden siguiente"], ["Valor de posición", "La cifra vale según su lugar"],
    ["IV, IX, XL, XC", "4, 9, 40, 90"], ["Billón", "Un millón de millones (10¹²)"], ["Redondear", "Si la cifra eliminada es ≥ 5, se sube"],
    ["Truncar", "Cifras de la derecha → ceros"], ["Distributiva", "a · (b + c) = a · b + a · c"], ["Prueba de la división", "D = d · c + r"],
    ["Resto", "Siempre menor que el divisor"], ["Jerarquía", "( ) → potencias → · : → + −"], ["Pólya", "Comprender, planificar, hacer, comprobar"],
  ],
  familias: ["En el súper, estimad el total del carro antes de pagar y comparadlo con el tique.", "Buscad números romanos por la calle o en casa (relojes, placas, libros) y traducidlos.", "Leed juntos cifras grandes de una noticia y redondeadlas.", "Jugad a inventar operaciones combinadas que den un número elegido, por ejemplo 24."],
  profesores: {
    saberes: "Sentido numérico: sistema de numeración decimal, números naturales, comparación y ordenación, aproximaciones y estimación, operaciones y sus propiedades, jerarquía de operaciones y resolución de problemas (RD 217/2022, Matemáticas 1º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Comparar sistemas de numeración (egipcio, romano, maya) en pequeños grupos.", "Concurso de estimación: cuántas lentejas hay en un bote.", "Juego «Cifras» con seis números y un objetivo usando la jerarquía.", "Analizar errores de redondeo en titulares de prensa."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes (INTEF): números naturales", url: "https://proyectodescartes.org/" }, { t: "Real Academia Española: escritura de los números", url: "https://www.rae.es/dpd/números" }],
  revisado: REV,
};
