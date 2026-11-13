// Matemáticas A 4º ESO · Sistemas de ecuaciones. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { F, D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, comparar } = require("./_eso4L2-mata");

const lineal = ejes("Una ecuación lineal con dos incógnitas, x más y igual a 5, tiene infinitas soluciones que forman una recta", { x: [-1, 6], y: [-1, 6], paso: 1, marcasX: [1, 2, 3, 4, 5], marcasY: [1, 2, 3, 4, 5], curvas: [{ f: (x) => 5 - x, c: "var(--pen)", t: "x + y = 5", tx: 4.3, ty: 2.2 }], puntos: [[0, 5, "(0, 5)", "var(--red)", "e"], [2, 3, "(2, 3)", "var(--red)", "e"], [4, 1, "(4, 1)", "var(--red)", "ne"]] });

const sistema = lienzo("Un sistema de dos ecuaciones con dos incógnitas se escribe con una llave y su solución es un par de valores que cumple las dos", `
  <path d="M60 34 q-14 0 -14 14 v14 q0 10 -10 10 q10 0 10 10 v14 q0 14 14 14" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
  ${tx(140, 58, "x + y = 5", { fs: 20, c: "var(--pen)", fam: D })}${tx(140, 98, "x − y = 1", { fs: 20, c: "var(--red)", fam: D })}
  ${tx(130, 140, "solución: x = 3, y = 2", { fs: 14, c: "var(--leaf)" })}${tx(130, 164, "3 + 2 = 5 ✓   3 − 2 = 1 ✓", { fs: 12, w: 400 })}`);

const sust = pasos("Método de sustitución: despejar una incógnita, sustituir en la otra ecuación, resolver y calcular la otra incógnita", ["Despejar: de x − y = 1, x = 1 + y", "Sustituir: (1 + y) + y = 5", "Resolver: 2y = 4 → y = 2", "Calcular: x = 1 + 2 = 3", "Comprobar en las dos"], "Sustitución");

const igual = pasos("Método de igualación: despejar la misma incógnita en las dos ecuaciones e igualar", ["y = 5 − x", "y = x − 1", "Igualar: 5 − x = x − 1", "6 = 2x → x = 3", "y = 5 − 3 = 2"], "Igualación");

const reduc = lienzo("Método de reducción: sumar las ecuaciones para que se anule una incógnita", `
  ${tx(130, 26, "Reducción", { fs: 13, c: "var(--muted)" })}
  ${tx(150, 58, "x + y = 5", { fs: 18, c: "var(--pen)", fam: D })}${tx(150, 90, "x − y = 1", { fs: 18, c: "var(--red)", fam: D })}
  ${tx(68, 90, "+", { fs: 22, c: "var(--muted)" })}<path d="M80 102 H220" stroke="var(--ink)" stroke-width="2.5"/>
  ${tx(150, 128, "2x     = 6", { fs: 18, c: "var(--leaf)", fam: D })}${tx(130, 158, "las y se anulan → x = 3", { fs: 12.5, w: 400 })}`);

const multiplicar = pasos("Reducción multiplicando: se multiplican las ecuaciones para que los coeficientes de una incógnita sean opuestos", ["2x + 3y = 12  (×2)", "3x − 2y = 5   (×3)", "4x + 6y = 24", "9x − 6y = 15", "sumar: 13x = 39 → x = 3, y = 2"], "Preparar coeficientes opuestos");

const grafico = ejes("Método gráfico: dos rectas que se cortan en el punto 3, 2, que es la solución del sistema", { x: [-1, 6], y: [-2, 6], paso: 1, marcasX: [1, 2, 3, 4, 5], marcasY: [2, 4], curvas: [{ f: (x) => 5 - x, c: "var(--pen)", t: "x + y = 5", tx: 2.0, ty: 5.4 }, { f: (x) => x - 1, c: "var(--red)", t: "x − y = 1", tx: 5.1, ty: 3 }], puntos: [[3, 2, "(3, 2)", "var(--leaf)", "e"]] });

const tipos = lienzo("Tipos de sistemas: compatible determinado con rectas que se cortan, incompatible con rectas paralelas y compatible indeterminado con rectas coincidentes", `
  ${[["S. C. D.", "1 solución", "var(--leaf)", [[10, 90, 70, 30], [10, 30, 70, 90]]], ["S. I.", "ninguna", "var(--red)", [[10, 80, 70, 40], [10, 100, 70, 60]]], ["S. C. I.", "infinitas", "var(--pen)", [[10, 90, 70, 30], [10, 90, 70, 30]]]].map(([t, d, c, ls], i) => {
    const ox = 8 + i * 84;
    return `<rect x="${ox}" y="20" width="76" height="96" rx="8" fill="var(--card)" stroke="var(--line)"/>${ls.map(([a, b, cc, dd], k) => `<path d="M${ox + a * 0.95} ${b} L${ox + cc * 1.0} ${dd}" stroke="${k ? "var(--red)" : "var(--pen)"}" stroke-width="${i === 2 && k ? 2 : 3.2}"${i === 2 && k ? ' stroke-dasharray="5 4"' : ""}/>`).join("")}${tx(ox + 38, 136, t, { fs: 12.5, c, max: 74 })}${tx(ox + 38, 154, d, { fs: 11, w: 400, max: 74 })}`;
  }).join("")}`);

const clasif = comparar("Clasificar un sistema comparando las razones de los coeficientes", [
  ["Cortan", ["a/a' ≠ b/b'", "S. C. D."], "var(--leaf)"],
  ["Paralelas", ["a/a' = b/b' ≠ c/c'", "S. I."], "var(--red)"],
  ["Iguales", ["a/a' = b/b' = c/c'", "S. C. I."], "var(--pen)"],
], "Sin resolver: mirar coeficientes");

const elegir = cajas("Cómo elegir el método de resolución según la forma del sistema", [
  ["Sustitución", ["una incógnita", "con coeficiente 1"]], ["Igualación", ["la misma letra", "fácil de despejar"]],
  ["Reducción", ["coeficientes iguales", "u opuestos"]], ["Gráfico", ["ver la situación", "y estimar"]],
], "¿Qué método uso?");

const previo = pasos("Preparar un sistema con paréntesis y denominadores antes de resolverlo", ["Quitar paréntesis", "Quitar denominadores", "Ordenar: ax + by = c", "Elegir método y resolver", "Comprobar en el original"], "Primero, simplificar");

const noLineal = ejes("Sistema no lineal: una recta y una parábola pueden cortarse en dos puntos", { x: [-3, 4], y: [-2, 8], paso: 1, pasoY: 2, marcasX: [-2, 1, 3], marcasY: [2, 4, 6], curvas: [{ f: (x) => x * x - 1, c: "var(--red)", t: "y = x² − 1", tx: -1.6, ty: 6.5 }, { f: (x) => x + 1, c: "var(--pen)", t: "y = x + 1", tx: -2.1, ty: 0.9 }], puntos: [[-1, 0, "(−1, 0)", "var(--leaf)", "se"], [2, 3, "(2, 3)", "var(--leaf)", "e"]] });

const problemas = pasos("Pasos para resolver problemas con sistemas: dos incógnitas, dos ecuaciones, resolver y comprobar", ["Nombrar dos incógnitas: x = …, y = …", "Buscar dos datos → dos ecuaciones", "Resolver por el método más cómodo", "Comprobar en el enunciado", "Responder con una frase"], "Problemas con sistemas");

const tarifas = ejes("Comparar dos tarifas: la tarifa A cuesta 10 euros más 0,20 por gigabyte y la B 4 euros más 0,50; se igualan en 20 gigas", { x: [0, 40], y: [0, 26], paso: 10, pasoY: 5, marcasX: [10, 20, 30, 40], marcasY: [10, 20], ex: "GB", ey: "€", curvas: [{ f: (x) => 10 + 0.2 * x, c: "var(--pen)", t: "A", tx: 37, ty: 15.5 }, { f: (x) => 4 + 0.5 * x, c: "var(--red)", t: "B", tx: 37, ty: 25 }], puntos: [[20, 14, "(20, 14)", "var(--leaf)", "no"]] });

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Sistemas de ecuaciones",
  minutos: 110,
  objetivos: [
    "Reconocer ecuaciones lineales con dos incógnitas y sus soluciones",
    "Resolver sistemas por sustitución, igualación, reducción y gráficamente",
    "Clasificar sistemas según su número de soluciones e interpretarlo con rectas",
    "Resolver sistemas sencillos no lineales",
    "Plantear y resolver problemas de la vida real con sistemas, comprobando la solución",
  ],
  claves: ["ecuación lineal", "sistema", "sustitución", "igualación", "reducción", "método gráfico", "compatible", "incompatible"],
  pregunta: {
    texto: "En una granja hay gallinas y conejos. Se cuentan 30 cabezas y 80 patas. ¿Cuántos animales hay de cada tipo?",
    respuesta: "Con dos incógnitas: x gallinas e y conejos. Cabezas: x + y = 30; patas: 2x + 4y = 80. Es un <b>sistema de ecuaciones</b>. Resolviéndolo: <mark>20 gallinas y 10 conejos</mark> (20 + 10 = 30 cabezas y 40 + 40 = 80 patas).",
  },
  lectura: {
    titulo: "Un problema de hace 2.000 años",
    html: `<p>El problema de las gallinas y los conejos no es moderno. Aparece en un libro chino del siglo III, el <i>Sunzi Suanjing</i>, con faisanes y conejos en una jaula: 35 cabezas y 94 patas. Los matemáticos chinos de la época resolvían este tipo de problemas con tablas de números que manipulaban con varillas sobre un tablero, un método que, siglos después, se llamaría «eliminación de Gauss» y que hoy usan los ordenadores.</p><p>Los sistemas de ecuaciones aparecen siempre que hay <b>varias cantidades desconocidas relacionadas entre sí</b>. Una tienda quiere saber qué combinación de productos le da cierto beneficio; una nutricionista busca una mezcla de alimentos con la cantidad exacta de proteínas y grasas; un GPS calcula tu posición combinando las señales de varios satélites; y una compañía de móviles diseña tarifas para que te convenga una u otra según lo que consumas.</p><p>En este tema aprenderás cuatro formas de resolver sistemas de dos ecuaciones: tres algebraicas y una gráfica. Verás que cada ecuación lineal es una recta y que resolver el sistema es encontrar dónde se cortan. Y, sobre todo, aprenderás a traducir problemas reales a sistemas y a comprobar que la respuesta tiene sentido.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Ecuaciones lineales con dos incógnitas</h3><p>Una <b>ecuación lineal con dos incógnitas</b> tiene la forma ax + by = c, por ejemplo x + y = 5. Una solución es un <b>par de valores</b> (x, y) que cumple la igualdad: (2, 3) es solución porque 2 + 3 = 5; también lo son (0, 5), (4, 1) o (1,5; 3,5). Una sola ecuación con dos incógnitas tiene <b>infinitas soluciones</b>.</p><p>Si representamos todas las soluciones como puntos en unos ejes de coordenadas, forman una <b>recta</b>. Por eso estas ecuaciones se llaman lineales. Para dibujarla basta con dar dos valores a x, calcular y, y unir los puntos. Para tener una única solución hace falta <b>otra condición</b>, es decir, otra ecuación: así nace un sistema.</p>${tabla(["x", "0", "1", "2", "3", "4"], [["y = 5 − x", "5", "4", "3", "2", "1"]])}`, svg: lineal },
    { html: `<h3>1.2 Qué es un sistema</h3><p>Un <b>sistema de dos ecuaciones lineales con dos incógnitas</b> son dos ecuaciones que deben cumplirse <b>a la vez</b>. Se escriben con una llave:</p><div class="formula"><span>x + y = 5</span><span class="op">·</span><span>x − y = 1</span></div><p>La <b>solución</b> del sistema es el par (x, y) que cumple las dos ecuaciones al mismo tiempo. Aquí es x = 3, y = 2, porque 3 + 2 = 5 y 3 − 2 = 1. Resolver un sistema es encontrar ese par, y la idea de todos los métodos algebraicos es la misma: <mark>eliminar una incógnita</mark> para obtener una ecuación de primer grado con una sola letra, que ya sabemos resolver. Dos sistemas son <b>equivalentes</b> si tienen las mismas soluciones.</p>`, svg: sistema },
    { html: `<h3>1.3 Método de sustitución</h3><p>El método de <b>sustitución</b> consiste en <b>despejar</b> una incógnita en una de las ecuaciones y <b>sustituir</b> la expresión obtenida en la otra. En el sistema x + y = 5, x − y = 1, despejamos x de la segunda: x = 1 + y. Sustituimos en la primera: (1 + y) + y = 5, de donde 2y = 4 e y = 2. Por último, x = 1 + 2 = 3.</p><p>Es el método más cómodo cuando alguna incógnita tiene <b>coeficiente 1 o −1</b>, porque se despeja sin fracciones. Al sustituir conviene usar siempre <b>paréntesis</b>, sobre todo si la expresión va multiplicada: en 3x − 2y = 4 con x = 1 + y queda 3(1 + y) − 2y = 4. También es el método que se usa en los sistemas no lineales.</p>`, svg: sust, video: { id: "cNIV-ltkpBM", titulo: "Sistemas de ecuaciones 2x2: método de sustitución, ejemplo 2", canal: "Matemáticas profe Alex", vistas: 7247134, megusta: 0 } },
    { html: `<h3>1.4 Método de igualación</h3><p>En el método de <b>igualación</b> se despeja <b>la misma incógnita</b> en las dos ecuaciones y se igualan las expresiones obtenidas. Si x + y = 5 y x − y = 1, despejando y: y = 5 − x e y = x − 1. Como las dos son iguales a y, se igualan: 5 − x = x − 1, luego 6 = 2x y x = 3. Sustituyendo en cualquiera, y = 2.</p><p>Es útil cuando las dos ecuaciones ya vienen despejadas o casi, como en los problemas de tarifas (precio = fijo + variable) o de móviles que salen a la vez. Por ejemplo, si una tarifa cuesta y = 10 + 0,2x y otra y = 4 + 0,5x, igualar responde a «¿cuándo cuestan lo mismo?». Su inconveniente es que a veces aparecen fracciones al despejar.</p>`, svg: igual },
    { html: `<h3>1.5 Método de reducción</h3><p>En el método de <b>reducción</b> se suman (o restan) las dos ecuaciones miembro a miembro para que <b>una incógnita desaparezca</b>. En x + y = 5 y x − y = 1, los coeficientes de y son opuestos (1 y −1); al sumar: 2x = 6, x = 3. Después se sustituye para hallar y = 2.</p><p>Si los coeficientes no son iguales ni opuestos, primero se <b>multiplican</b> las ecuaciones por números adecuados. En 2x + 3y = 12 y 3x − 2y = 5, para eliminar y se multiplica la primera por 2 y la segunda por 3: 4x + 6y = 24 y 9x − 6y = 15; sumando, 13x = 39, x = 3 e y = 2. Es el método más rápido cuando ningún coeficiente es 1 y el más usado por los ordenadores.</p>`, svg: reduc, video: { id: "0ilTVp5uRz8", titulo: "Sistemas de ecuaciones 2x2: método de reducción o eliminación, ejemplo 1", canal: "Matemáticas profe Alex", vistas: 7489103, megusta: 0 } },
    { html: `<h3>1.6 Reducción con coeficientes que hay que preparar</h3><p>El paso clave de la reducción es conseguir que una incógnita tenga coeficientes <b>opuestos</b> (para sumar) o <b>iguales</b> (para restar). Un truco útil: multiplicar cada ecuación por el coeficiente de la otra, como al buscar un común denominador. Para eliminar x en 4x + 5y = 7 y 3x − 2y = −12, se multiplica la primera por 3 y la segunda por −4: 12x + 15y = 21 y −12x + 8y = 48. Sumando: 23y = 69, y = 3, y entonces x = −2.</p><p>Hay que multiplicar <b>todos</b> los términos, también el del segundo miembro, y vigilar los signos al restar. Si al hacer la reducción desaparecen las dos incógnitas, estamos ante un caso especial que se estudia en los bloques siguientes.</p>`, svg: multiplicar },
    { html: `<h3>2.1 Método gráfico</h3><p>Como cada ecuación lineal es una recta, resolver el sistema gráficamente consiste en <b>dibujar las dos rectas</b> y buscar su <b>punto de corte</b>: sus coordenadas son la solución. Para dibujar cada recta basta con despejar y y calcular dos o tres puntos con una tabla.</p><p>En el ejemplo, x + y = 5 pasa por (0, 5) y (5, 0); x − y = 1 pasa por (1, 0) y (4, 3). Se cortan en <mark>(3, 2)</mark>. El método gráfico es muy visual y permite entender el problema, pero <b>no es exacto</b> si la solución tiene decimales; por eso conviene comprobarla algebraicamente. Las aplicaciones como GeoGebra o una hoja de cálculo dibujan las rectas con precisión.</p>`, svg: grafico, video: { id: "xla02Y99Ngw", titulo: "Resolver sistemas de ecuaciones: método de graficación", canal: "Daniel Carreón", vistas: 0, megusta: 0 } },
    { html: `<h3>2.2 Tipos de sistemas</h3><p>Dos rectas en el plano pueden estar en tres posiciones, y cada una corresponde a un tipo de sistema. Si se <b>cortan en un punto</b>, el sistema tiene una única solución: es <b>compatible determinado</b> (S. C. D.). Si son <b>paralelas</b>, no tienen ningún punto común y el sistema <b>no tiene solución</b>: es <b>incompatible</b> (S. I.). Si son <b>coincidentes</b> (la misma recta), tienen infinitos puntos comunes: es <b>compatible indeterminado</b> (S. C. I.).</p><p>Algebraicamente se reconoce al resolver: en un sistema incompatible se llega a algo imposible como 0 = 7; en uno indeterminado, a 0 = 0, porque una ecuación es múltiplo de la otra (x + y = 3 y 2x + 2y = 6 dicen lo mismo). En los problemas, «incompatible» significa que los datos se contradicen.</p>`, svg: tipos },
    { html: `<h3>2.3 Clasificar sin resolver</h3><p>Se puede saber de qué tipo es un sistema ax + by = c, a'x + b'y = c' comparando los <b>cocientes de los coeficientes</b>. Si a/a' ≠ b/b', las rectas tienen distinta inclinación y se cortan: S. C. D. Si a/a' = b/b' ≠ c/c', son paralelas: S. I. Si a/a' = b/b' = c/c', son la misma recta: S. C. I.</p><p>Ejemplos: 2x + y = 3 y 4x + 2y = 5 dan 2/4 = 1/2 ≠ 3/5: incompatible. 2x + y = 3 y 4x + 2y = 6 dan 2/4 = 1/2 = 3/6: indeterminado. Esta comprobación rápida ahorra trabajo y ayuda a detectar enunciados con datos contradictorios o redundantes.</p>${tabla(["Comparación", "Rectas", "Tipo"], [["a/a' ≠ b/b'", "se cortan", "compatible determinado"], ["a/a' = b/b' ≠ c/c'", "paralelas", "incompatible"], ["a/a' = b/b' = c/c'", "coincidentes", "compatible indeterminado"]])}`, svg: clasif },
    { html: `<h3>2.4 Qué método elegir</h3><p>Todos los métodos dan la misma solución, así que conviene elegir el que <b>menos cálculos</b> exige. <b>Sustitución</b>: si alguna incógnita tiene coeficiente 1 o −1. <b>Igualación</b>: si las dos ecuaciones están despejadas en la misma incógnita, como y = … e y = …. <b>Reducción</b>: si los coeficientes de una incógnita son iguales u opuestos, o si ninguno es 1. <b>Gráfico</b>: cuando interesa ver la situación, comparar tendencias o estimar.</p><p>Con práctica, mirar el sistema durante unos segundos antes de empezar evita fracciones innecesarias. Y en cualquier caso, el paso final es siempre el mismo: <mark>comprobar la solución en las dos ecuaciones</mark>. Un error de signo en una sola de ellas se detecta así inmediatamente.</p>`, svg: elegir },
    { html: `<h3>2.5 Sistemas con paréntesis y fracciones</h3><p>Muchos sistemas no vienen en la forma ax + by = c. Antes de aplicar un método hay que <b>prepararlos</b>: quitar paréntesis, quitar denominadores multiplicando cada ecuación por su m.c.m., y agrupar las incógnitas en el primer miembro y los números en el segundo.</p><p>Ejemplo: x/2 + y/3 = 4 y 2(x − y) = 2. La primera, multiplicada por 6, da 3x + 2y = 24; la segunda, 2x − 2y = 2, que simplificada es x − y = 1. Ahora, por reducción (multiplicando la segunda por 2): 3x + 2y = 24 y 2x − 2y = 2; sumando, 5x = 26, x = 5,2 e y = 4,2. Cada ecuación se prepara <b>por separado</b>, con su propio m.c.m.</p>`, svg: previo },
    { html: `<h3>2.6 Sistemas no lineales sencillos</h3><p>Si alguna ecuación no es lineal (aparece x², xy o x en un denominador), el sistema es <b>no lineal</b>. El método habitual es la <b>sustitución</b>: se despeja una incógnita en la ecuación lineal y se sustituye en la otra, lo que suele dar una ecuación de segundo grado.</p><p>Ejemplo: y = x² − 1 e y = x + 1. Igualando: x² − 1 = x + 1 → x² − x − 2 = 0 → x = 2 o x = −1. Las soluciones son (2, 3) y (−1, 0): la recta corta a la parábola en dos puntos. Un sistema no lineal puede tener varias soluciones o ninguna. Otro ejemplo típico: hallar dos números que suman 10 y cuyo producto es 21 (x + y = 10, xy = 21), que son 3 y 7.</p>`, svg: noLineal },
    { html: `<h3>3.1 Problemas con sistemas</h3><p>Muchos problemas son más fáciles de plantear con <b>dos incógnitas</b> que con una. El método: 1) nombrar las dos incógnitas y decir qué representan; 2) buscar en el enunciado <b>dos datos independientes</b> y escribir una ecuación con cada uno; 3) resolver por el método más cómodo; 4) comprobar en el enunciado; 5) responder con una frase.</p><p>Ejemplo: «En un concierto se venden 500 entradas, unas a 20 € y otras a 35 €, y se recaudan 12.250 €». Con x entradas de 20 € e y de 35 €: x + y = 500 y 20x + 35y = 12.250. Por sustitución, 20(500 − y) + 35y = 12.250 → 15y = 2.250 → y = 150 y x = 350. Los tipos más frecuentes son de mezclas, monedas, edades, cifras, geometría y móviles.</p><p>Un consejo práctico: antes de escribir las ecuaciones, organiza los datos en una <b>tabla</b> con una fila por incógnita y una columna por cada característica (cantidad, precio, total). Así se ve enseguida qué se suma con qué. Y al final, comprueba que las soluciones son <b>números razonables</b>: no se pueden vender 150,5 entradas ni tener −3 conejos. Si sale algo así, revisa el planteamiento antes de dar la respuesta.</p>`, svg: problemas },
    { html: `<h3>3.2 Comparar tarifas y ofertas</h3><p>Una aplicación muy práctica es <b>comparar tarifas</b> que tienen una parte fija y otra variable. La tarifa A de un móvil cuesta 10 € al mes más 0,20 € por GB; la tarifa B, 4 € más 0,50 € por GB. Sus costes son y = 10 + 0,2x e y = 4 + 0,5x. Igualando: 10 + 0,2x = 4 + 0,5x → 6 = 0,3x → x = 20 GB, con un coste de 14 €.</p><p>La gráfica lo muestra claramente: para menos de 20 GB la recta de B está por debajo (B es más barata) y a partir de 20 GB es más barata A. El punto de corte es el <b>punto de equilibrio</b>. Este razonamiento sirve para elegir gimnasio, compañía de luz, alquiler de coches o para que una empresa calcule cuántas unidades debe vender para empezar a ganar dinero.</p>`, svg: tarifas },
  ],
  ejemplos: [
    { enunciado: "Resuelve por sustitución: 3x + y = 11, 2x − 3y = 0.", pasos: ["De la primera: y = 11 − 3x.", "Sustituimos: 2x − 3(11 − 3x) = 0 → 2x − 33 + 9x = 0 → 11x = 33 → x = 3.", "y = 11 − 9 = 2.", "Comprobación: 9 + 2 = 11 ✓; 6 − 6 = 0 ✓."], resultado: "x = 3, y = 2." },
    { enunciado: "Resuelve por igualación: y = 2x − 1, y = −x + 8.", pasos: ["Igualamos: 2x − 1 = −x + 8.", "3x = 9 → x = 3.", "y = 2 · 3 − 1 = 5."], resultado: "x = 3, y = 5. Las rectas se cortan en (3, 5)." },
    { enunciado: "Resuelve por reducción: 5x + 2y = 1, 3x − 4y = 11.", pasos: ["Multiplicamos la primera por 2: 10x + 4y = 2.", "Sumamos con la segunda: 13x = 13 → x = 1.", "5 + 2y = 1 → y = −2.", "Comprobación: 3 + 8 = 11 ✓."], resultado: "x = 1, y = −2." },
    { enunciado: "Clasifica y resuelve si se puede: 3x − 6y = 9, −x + 2y = 4.", pasos: ["Razones: 3/(−1) = −3; −6/2 = −3; 9/4 ≠ −3.", "a/a' = b/b' ≠ c/c': rectas paralelas.", "Por reducción (segunda × 3 y sumar): 0 = 21, imposible."], resultado: "Sistema incompatible: no tiene solución." },
    { enunciado: "Gallinas y conejos: 30 cabezas y 80 patas.", pasos: ["x gallinas, y conejos.", "x + y = 30; 2x + 4y = 80.", "De la primera, x = 30 − y. 2(30 − y) + 4y = 80 → 60 + 2y = 80 → y = 10.", "x = 20. Comprobación: 40 + 40 = 80 patas ✓."], resultado: "20 gallinas y 10 conejos." },
    { enunciado: "Halla dos números cuya suma es 10 y cuyo producto es 21.", pasos: ["x + y = 10, xy = 21.", "y = 10 − x → x(10 − x) = 21 → x² − 10x + 21 = 0.", "x = 7 o x = 3; y = 3 o y = 7."], resultado: "Los números son 3 y 7." },
  ],
  errores: [
    "Dar como solución solo el valor de x y olvidar calcular y.",
    "Al sustituir, no poner paréntesis: 3(1 + y), no 3 · 1 + y.",
    "En reducción, multiplicar solo el primer miembro y olvidar el segundo.",
    "Restar ecuaciones y equivocarse con los signos; es más seguro multiplicar por −1 y sumar.",
    "Interpretar 0 = 0 como «no tiene solución» (son infinitas) o 0 = 5 como «x = 0».",
    "No comprobar la solución en las dos ecuaciones ni en el enunciado del problema.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Comprueba si (2, −1) es solución del sistema 3x + y = 5, x − 2y = 4.", sol: "3 · 2 − 1 = 5 ✓; 2 − 2(−1) = 4 ✓. Sí es solución." },
    { nivel: "básico", q: "Da tres soluciones de la ecuación 2x + y = 6 y dibuja la recta.", sol: "Por ejemplo (0, 6), (1, 4), (3, 0). Se marcan y se unen con una recta." },
    { nivel: "básico", q: "Resuelve por sustitución: x + 2y = 7, 3x − y = 7.", sol: "x = 7 − 2y. 3(7 − 2y) − y = 7 → 21 − 7y = 7 → y = 2; x = 3." },
    { nivel: "básico", q: "Resuelve por igualación: y = 3x − 2, y = x + 4.", sol: "3x − 2 = x + 4 → 2x = 6 → x = 3; y = 7." },
    { nivel: "básico", q: "Resuelve por reducción: x + y = 10, x − y = 4.", sol: "Sumando: 2x = 14, x = 7; y = 3." },
    { nivel: "básico", q: "Resuelve por reducción: 2x + 3y = 13, 2x − y = 1.", sol: "Restando: 4y = 12, y = 3; 2x − 3 = 1 → x = 2." },
    { nivel: "básico", q: "Resuelve gráficamente: y = x + 1, y = −x + 5.", sol: "La primera pasa por (0, 1) y (2, 3); la segunda por (0, 5) y (2, 3). Se cortan en (2, 3)." },
    { nivel: "básico", q: "¿Qué significa que al resolver un sistema se llegue a 0 = 0? ¿Y a 0 = 3?", sol: "0 = 0: infinitas soluciones (compatible indeterminado, rectas coincidentes). 0 = 3: ninguna solución (incompatible, rectas paralelas)." },
    { nivel: "básico", q: "La suma de dos números es 25 y su diferencia 7. ¿Cuáles son?", sol: "x + y = 25, x − y = 7 → 2x = 32 → x = 16, y = 9." },
    { nivel: "básico", q: "Dos bocadillos y un zumo cuestan 7 €; un bocadillo y dos zumos, 5 €. ¿Cuánto cuesta cada cosa?", sol: "2b + z = 7, b + 2z = 5. b = 5 − 2z → 10 − 4z + z = 7 → z = 1, b = 3. Bocadillo 3 €, zumo 1 €." },
    { nivel: "básico", q: "Escribe un sistema cuya solución sea x = 4, y = −1.", sol: "Por ejemplo: x + y = 3, x − y = 5. (Cualquier par de ecuaciones que cumplan esos valores.)" },
    { nivel: "básico", q: "En una hucha hay 22 monedas de 1 € y de 2 €, que suman 30 €. ¿Cuántas hay de cada clase?", sol: "x + y = 22, x + 2y = 30. Restando: y = 8; x = 14. Hay 14 de 1 € y 8 de 2 €." },
    { nivel: "medio", q: "Resuelve: 3x − 2y = 4, 5x + 3y = 13.", sol: "×3 y ×2: 9x − 6y = 12; 10x + 6y = 26. Sumando: 19x = 38 → x = 2; 6 − 2y = 4 → y = 1." },
    { nivel: "medio", q: "Resuelve: 4x + 5y = 7, 3x − 2y = −12.", sol: "×3 y ×(−4): 12x + 15y = 21; −12x + 8y = 48. Sumando: 23y = 69 → y = 3; 4x + 15 = 7 → x = −2." },
    { nivel: "medio", q: "Resuelve: x/2 + y/3 = 3, x − y = 1.", sol: "Primera ×6: 3x + 2y = 18. x = 1 + y → 3 + 3y + 2y = 18 → y = 3, x = 4." },
    { nivel: "medio", q: "Resuelve: 2(x + 1) − y = 5, 3x − 2(y − 1) = 4.", sol: "2x − y = 3; 3x − 2y = 2. y = 2x − 3 → 3x − 4x + 6 = 2 → x = 4, y = 5." },
    { nivel: "medio", q: "Clasifica sin resolver: a) 2x − y = 3, 6x − 3y = 9 b) x + 4y = 2, 2x + 8y = 5 c) x + y = 1, x − y = 1.", sol: "a) 2/6 = −1/−3 = 3/9: S. C. I. b) 1/2 = 4/8 ≠ 2/5: S. I. c) 1/1 ≠ 1/(−1): S. C. D." },
    { nivel: "medio", q: "Halla k para que el sistema x + 2y = 3, 2x + ky = 5 sea incompatible.", sol: "Deben ser paralelas: 1/2 = 2/k → k = 4; y 3/5 ≠ 1/2 ✓. Con k = 4, incompatible." },
    { nivel: "medio", q: "En un examen de 20 preguntas, cada acierto suma 3 puntos y cada fallo resta 1. Ana respondió todas y obtuvo 40 puntos. ¿Cuántas acertó?", sol: "a + f = 20; 3a − f = 40. Sumando: 4a = 60 → a = 15, f = 5. Acertó 15." },
    { nivel: "medio", q: "Se mezclan café de 8 €/kg y de 12 €/kg para obtener 50 kg a 9,60 €/kg. ¿Cuántos kilos de cada tipo?", sol: "x + y = 50; 8x + 12y = 480. x = 50 − y → 400 + 4y = 480 → y = 20, x = 30. 30 kg del barato y 20 kg del caro." },
    { nivel: "medio", q: "Hace 5 años, la edad de un padre era el triple de la de su hijo; dentro de 5 años será el doble. ¿Qué edades tienen?", sol: "p − 5 = 3(h − 5); p + 5 = 2(h + 5). p = 3h − 10 y p = 2h + 5 → h = 15, p = 35." },
    { nivel: "medio", q: "El perímetro de un rectángulo es 46 cm y el largo mide 7 cm más que el ancho. Halla sus dimensiones.", sol: "2l + 2a = 46; l = a + 7. 2(a + 7) + 2a = 46 → 4a = 32 → a = 8, l = 15 cm." },
    { nivel: "medio", q: "Compara dos gimnasios: A cobra 30 € de matrícula y 25 € al mes; B, sin matrícula y 31 € al mes. ¿A partir de cuántos meses conviene A?", sol: "30 + 25m = 31m → m = 5. Cuestan lo mismo a los 5 meses (155 €); a partir del sexto mes es más barato A." },
    { nivel: "medio", q: "Resuelve el sistema no lineal: x + y = 7, xy = 12.", sol: "y = 7 − x → x(7 − x) = 12 → x² − 7x + 12 = 0 → x = 3 o 4. Soluciones (3, 4) y (4, 3)." },
    { nivel: "avanzado", q: "Resuelve: (x + 1)/3 − (y − 2)/4 = 1, (x − 3)/2 + y/5 = 2.", sol: "×12: 4x + 4 − 3y + 6 = 12 → 4x − 3y = 2. ×10: 5x − 15 + 2y = 20 → 5x + 2y = 35. Reducción (×2 y ×3): 8x − 6y = 4; 15x + 6y = 105 → 23x = 109 → x = 109/23 ≈ 4,74; y = (4x − 2)/3 = (436/23 − 46/23)/3 = 390/69 = 130/23 ≈ 5,65." },
    { nivel: "avanzado", q: "Resuelve: y = x² − 4x + 3, y = x − 1, y explica qué significan las soluciones gráficamente.", sol: "x² − 4x + 3 = x − 1 → x² − 5x + 4 = 0 → x = 1 o x = 4. Puntos (1, 0) y (4, 3): son los dos cortes de la recta con la parábola." },
    { nivel: "avanzado", q: "Un número de dos cifras cumple que la suma de sus cifras es 9 y que, si se invierten, el número aumenta en 27. ¿Qué número es?", sol: "Cifras d (decenas) y u: d + u = 9; (10u + d) − (10d + u) = 27 → 9u − 9d = 27 → u − d = 3. u = 6, d = 3. El número es 36 (63 − 36 = 27)." },
    { nivel: "avanzado", q: "Dos ciudades están a 300 km. A las 9:00 sale un coche de cada una, uno hacia el otro, a 80 km/h y a 70 km/h. ¿Cuándo y dónde se cruzan?", sol: "d₁ = 80t, d₂ = 70t, d₁ + d₂ = 300 → 150t = 300 → t = 2 h. Se cruzan a las 11:00, a 160 km de la primera ciudad." },
    { nivel: "avanzado", q: "Una empresa fabrica mesas (2 h de carpintería y 1 h de pintura cada una) y sillas (1 h y 1 h). Dispone de 50 h de carpintería y 35 h de pintura y quiere usarlas todas. ¿Cuántas mesas y sillas fabrica?", sol: "2m + s = 50; m + s = 35. Restando: m = 15, s = 20. 15 mesas y 20 sillas." },
    { nivel: "avanzado", q: "El área de un rectángulo es 60 m² y su diagonal mide 13 m. Halla sus lados.", sol: "xy = 60; x² + y² = 169. (x + y)² = 169 + 120 = 289 → x + y = 17. Con xy = 60: x² − 17x + 60 = 0 → 12 y 5. Lados 12 m y 5 m." },
    { nivel: "avanzado", q: "Un laboratorio tiene alcohol al 40 % y al 90 %. ¿Cuántos litros de cada uno hay que mezclar para obtener 10 L al 70 %?", sol: "x + y = 10; 0,4x + 0,9y = 7. x = 10 − y → 4 − 0,4y + 0,9y = 7 → 0,5y = 3 → y = 6, x = 4. 4 L al 40 % y 6 L al 90 %." },
    { nivel: "avanzado", q: "Explica por qué un sistema de dos ecuaciones lineales no puede tener exactamente dos soluciones.", sol: "Cada ecuación es una recta. Dos rectas distintas se cortan como mucho en un punto; si comparten dos puntos, son la misma recta y tienen infinitos en común. Por eso hay 0, 1 o infinitas soluciones." },
  ],
  quiz: [
    { q: "¿Cuántas soluciones tiene una ecuación como x + y = 5?", o: ["una", "dos", "ninguna", "infinitas"], a: 3, e: "Todos los puntos de una recta." },
    { q: "La solución de un sistema de dos ecuaciones con dos incógnitas es…", o: ["un número", "un par de valores", "una recta", "una ecuación"], a: 1, e: "Un valor para x y otro para y." },
    { q: "¿Es (1, 2) solución de x + y = 3, 2x − y = 0?", o: ["Sí", "Solo de la primera", "Solo de la segunda", "No"], a: 0, e: "1 + 2 = 3 y 2 − 2 = 0." },
    { q: "En el método de sustitución se…", o: ["suman las ecuaciones", "despeja una incógnita y se sustituye en la otra", "igualan dos despejes", "dibujan las rectas"], a: 1, e: "Despejar y sustituir." },
    { q: "Para igualar hay que despejar…", o: ["incógnitas distintas", "la misma incógnita en las dos", "solo los números", "nada"], a: 1, e: "Después se igualan las expresiones." },
    { q: "En x + y = 8, x − y = 2, al sumar se obtiene…", o: ["2y = 10", "2x = 10", "2x = 6", "0 = 10"], a: 1, e: "Las y se anulan." },
    { q: "Solución de x + y = 8, x − y = 2:", o: ["(5, 3)", "(3, 5)", "(6, 2)", "(4, 4)"], a: 0, e: "x = 5, y = 3." },
    { q: "Para eliminar y en 2x + 3y = 7 y x − y = 1, multiplico la segunda por…", o: ["2", "3", "−2", "7"], a: 1, e: "Así queda 3x − 3y = 3, opuesto a 3y." },
    { q: "Gráficamente, la solución de un sistema es…", o: ["el corte de las rectas con el eje X", "el punto de corte de las dos rectas", "la pendiente", "el origen"], a: 1, e: "Punto común a las dos rectas." },
    { q: "Rectas paralelas corresponden a un sistema…", o: ["compatible determinado", "incompatible", "compatible indeterminado", "no lineal"], a: 1, e: "No tienen ningún punto común." },
    { q: "Rectas coincidentes corresponden a un sistema…", o: ["incompatible", "con una solución", "compatible indeterminado", "imposible"], a: 2, e: "Infinitas soluciones." },
    { q: "Si al resolver llegas a 0 = 4, el sistema…", o: ["tiene solución x = 0", "no tiene solución", "tiene infinitas", "está mal copiado seguro"], a: 1, e: "Es incompatible." },
    { q: "x + 2y = 3 y 2x + 4y = 6 es…", o: ["S. C. D.", "S. I.", "S. C. I.", "no lineal"], a: 2, e: "La segunda es el doble de la primera." },
    { q: "x + 2y = 3 y 2x + 4y = 7 es…", o: ["S. C. D.", "S. I.", "S. C. I.", "no se sabe"], a: 1, e: "1/2 = 2/4 ≠ 3/7." },
    { q: "El método más cómodo para y = 2x + 1, y = −x + 7 es…", o: ["reducción", "igualación", "gráfico", "ninguno"], a: 1, e: "Ya están despejadas en y." },
    { q: "Un sistema de dos ecuaciones lineales puede tener exactamente…", o: ["dos soluciones", "tres soluciones", "una, ninguna o infinitas", "solo una"], a: 2, e: "Son las posiciones de dos rectas." },
    { q: "En y = x², y = 4 las soluciones son…", o: ["(2, 4)", "(2, 4) y (−2, 4)", "(4, 2)", "ninguna"], a: 1, e: "x² = 4 → x = ±2." },
    { q: "«Hay 40 animales entre gallinas y vacas» se escribe…", o: ["x · y = 40", "x + y = 40", "2x + 4y = 40", "x − y = 40"], a: 1, e: "Cabezas: suma de animales." },
    { q: "Tarifa A: 5 + 2x. Tarifa B: 11 + x. Cuestan igual cuando x =", o: ["3", "6", "16", "11"], a: 1, e: "5 + 2x = 11 + x." },
    { q: "Lo último que hay que hacer al resolver un sistema es…", o: ["dibujarlo", "comprobar en las dos ecuaciones", "multiplicar por −1", "simplificar"], a: 1, e: "Así se detectan errores." },
  ],
  examen: [
    { q: "Solución de 2x + y = 7, x − y = 2:", o: ["(3, 1)", "(1, 3)", "(2, 3)", "(4, −1)"], a: 0, e: "Sumando: 3x = 9." },
    { q: "Solución de y = 3x, x + y = 8:", o: ["(2, 6)", "(6, 2)", "(3, 9)", "(1, 3)"], a: 0, e: "x + 3x = 8." },
    { q: "Clasifica 4x − 2y = 6, 2x − y = 3:", o: ["S. C. D.", "S. I.", "S. C. I.", "no lineal"], a: 2, e: "Una es el doble de la otra." },
    { q: "Dos números suman 20 y uno es el triple del otro:", o: ["5 y 15", "4 y 16", "6 y 14", "10 y 10"], a: 0, e: "x + 3x = 20." },
    { q: "Si dos rectas se cortan en (−1, 4), el sistema…", o: ["no tiene solución", "tiene solución x = −1, y = 4", "tiene infinitas", "es incompatible"], a: 1, e: "Punto de corte." },
    { q: "Para eliminar x en 3x + y = 5 y 2x − y = 0, se…", o: ["suman", "multiplican por 2 y por 3 y se restan", "dividen", "igualan las y"], a: 1, e: "6x + 2y = 10 y 6x − 3y = 0; se restan." },
    { q: "10 monedas de 1 € y 2 € suman 14 €. Hay de 2 €…", o: ["4", "6", "7", "3"], a: 0, e: "x + y = 10, x + 2y = 14 → y = 4." },
    { q: "Sistema y = x + 2, y = x − 3:", o: ["S. C. D.", "S. I.", "S. C. I.", "tiene dos soluciones"], a: 1, e: "Rectas paralelas (misma pendiente)." },
  ],
  feynman: ["Qué es la solución de un sistema y por qué es un par de números", "En qué se diferencian los métodos de sustitución, igualación y reducción", "Qué relación hay entre los tipos de sistemas y la posición de dos rectas", "Cómo se plantea un problema con dos incógnitas"],
  figura: {
    titulo: "Cuatro caminos para un mismo sistema",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Resumen de los métodos de sustitución, igualación, reducción y gráfico">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Sustitución", "despejar una incógnita → sustituir en la otra", "var(--pen)"], ["Igualación", "despejar la misma en las dos → igualar", "var(--leaf)"], ["Reducción", "multiplicar → sumar para eliminar una incógnita", "var(--red)"], ["Gráfico", "dibujar las rectas → punto de corte (1, 0 o ∞)", "var(--inf)"]].map(([n, f, c], i) => `<rect x="20" y="${16 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="36" y="${43 + i * 50}" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text><text x="190" y="${43 + i * 50}" font-size="15" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "p2AIFY1b9qk", titulo: "Sistemas de ecuaciones lineales 2x2: método de reducción, introducción", canal: "Matemáticas profe Alex", vistas: 0, megusta: 0, busqueda: "sistemas de ecuaciones 2x2" },
  mapa: mapa("SISTEMAS", "var(--leaf)", [
    ["Algebraicos", "sustitución · igualación · reducción", "var(--pen)"],
    ["Gráfico", "corte de dos rectas", "var(--red)"],
    ["Tipos", "S. C. D. · S. I. · S. C. I.", "var(--sun)"],
    ["Problemas", "dos datos → dos ecuaciones", "var(--inf)"],
  ], 250),
  glosario: [
    ["Ecuación lineal con dos incógnitas", "Ecuación ax + by = c; sus soluciones forman una recta."],
    ["Sistema de ecuaciones", "Conjunto de ecuaciones que deben cumplirse a la vez."],
    ["Solución de un sistema", "Valores de las incógnitas que cumplen todas las ecuaciones."],
    ["Sistemas equivalentes", "Sistemas que tienen las mismas soluciones."],
    ["Sustitución", "Método que despeja una incógnita y la sustituye en la otra ecuación."],
    ["Igualación", "Método que despeja la misma incógnita en las dos ecuaciones y las iguala."],
    ["Reducción", "Método que suma o resta ecuaciones para eliminar una incógnita."],
    ["Método gráfico", "Resolver dibujando las rectas y buscando su punto de corte."],
    ["Compatible determinado", "Sistema con una única solución; rectas que se cortan."],
    ["Incompatible", "Sistema sin solución; rectas paralelas."],
    ["Compatible indeterminado", "Sistema con infinitas soluciones; rectas coincidentes."],
    ["Sistema no lineal", "Sistema en el que alguna ecuación no es de primer grado."],
    ["Punto de equilibrio", "Valor en el que dos tarifas o dos opciones cuestan lo mismo."],
    ["Coeficiente", "Número que multiplica a una incógnita."],
  ],
  situacion: {
    titulo: "¿Qué tarifa me conviene?",
    reto: "Vuestras familias están pensando en cambiar de compañía de móvil, de gimnasio o de luz. Os encargan un estudio comparativo con sistemas de ecuaciones para decidir, según el consumo de cada uno, qué opción es la más barata.",
    pasos: [
      "Elegid un servicio y recoged al menos tres ofertas reales con parte fija y parte variable.",
      "Escribid la ecuación del coste mensual de cada oferta en función del consumo.",
      "Resolved los sistemas que forman las ofertas de dos en dos para encontrar los puntos de equilibrio.",
      "Representad todas las rectas en los mismos ejes (a mano, con GeoGebra o con hoja de cálculo) y marcad los cortes.",
      "Calculad el consumo real de vuestra familia durante un mes y decidid qué oferta conviene.",
    ],
    producto: "Un informe gráfico con las ecuaciones, los puntos de equilibrio y una recomendación personalizada para cada consumo.",
    evaluacion: ["Plantea correctamente las ecuaciones de coste.", "Resuelve los sistemas por el método adecuado y sin errores.", "Interpreta la gráfica y los puntos de corte en el contexto.", "Argumenta la recomendación con datos reales."],
  },
  tarjetas: [
    ["Solución de un sistema", "Par (x, y) que cumple las dos ecuaciones."],
    ["Sustitución", "Despejar una incógnita y sustituir en la otra."],
    ["Igualación", "Despejar la misma incógnita en las dos e igualar."],
    ["Reducción", "Coeficientes opuestos y sumar para eliminar una incógnita."],
    ["Método gráfico", "Punto de corte de las dos rectas."],
    ["S. C. D.", "Una solución: rectas que se cortan."],
    ["S. I.", "Ninguna solución: rectas paralelas (0 = 5)."],
    ["S. C. I.", "Infinitas soluciones: rectas coincidentes (0 = 0)."],
    ["Clasificar sin resolver", "Comparar a/a', b/b' y c/c'."],
    ["Sistema no lineal", "Sustituir; suele salir una ecuación de 2.º grado."],
    ["Problema con sistema", "Dos incógnitas, dos datos, dos ecuaciones."],
    ["Punto de equilibrio", "Donde dos tarifas cuestan lo mismo."],
  ],
  familias: ["Comparad dos tarifas reales de casa (móvil, luz) y calculad cuándo cuestan lo mismo.", "Proponed acertijos de «cabezas y patas» o de monedas para resolver juntos.", "Dibujad dos rectas en papel cuadriculado y buscad dónde se cortan.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido algebraico: sistemas de ecuaciones lineales con dos incógnitas, métodos algebraicos y gráfico, clasificación, sistemas no lineales sencillos y modelización de situaciones reales (RD 217/2022, Matemáticas A 4º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["GeoGebra con deslizadores para ver cómo cambian el corte y el tipo de sistema.", "Comparador de tarifas reales (situación de aprendizaje).", "Problemas históricos: el Sunzi Suanjing y los faisanes y conejos.", "Carrera de métodos: cada equipo resuelve el mismo sistema por un método y se comparan tiempos."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "GeoGebra: sistemas de ecuaciones", url: "https://www.geogebra.org/" },
    { t: "Proyecto Descartes: sistemas de ecuaciones (INTEF)", url: "https://proyectodescartes.org/" },
  ],
  revisado: "2026-11-13",
};
