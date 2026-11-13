// Matemáticas 3º ESO · Sistemas de ecuaciones. Tema nivel libro (lote 1). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, comparar, resumen, rot, C, RD, DECRET } = require("./_eso3L1");

const unaEc = ejes("Las soluciones de la ecuación dos x más y igual a seis forman una recta", { x: [-1, 4], y: [-1, 7], paso: 1, marcasX: [1, 2, 3], marcasY: [2, 4, 6], curvas: [{ f: (x) => 6 - 2 * x, c: "var(--pen)", t: "2x + y = 6", tx: 2.6, ty: 3.4 }], puntos: [[0, 6, "(0, 6)", "var(--red)", "e"], [1, 4, "(1, 4)", "var(--red)", "e"], [2, 2, "(2, 2)", "var(--red)", "e"], [3, 0, "(3, 0)", "var(--red)", "ne"]] });

const sistema = lienzo("Un sistema de dos ecuaciones con dos incógnitas y su solución, que cumple las dos", `
  <path d="M62 30 q-14 0 -14 14 v14 q0 10 -10 10 q10 0 10 10 v14 q0 14 14 14" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
  ${tx(140, 54, "x + y = 20", { fs: 20, c: "var(--pen)", fam: D })}${tx(140, 94, "2x + 4y = 56", { fs: 20, c: "var(--red)", fam: D })}
  ${tx(130, 136, "solución: x = 12, y = 8", { fs: 14, c: "var(--leaf)" })}${tx(130, 160, "12 + 8 = 20 ✓   24 + 32 = 56 ✓", { fs: 12, w: 400 })}`);

const sust = pasos("Método de sustitución paso a paso", ["Despejar: x = 20 − y", "Sustituir: 2(20 − y) + 4y = 56", "Resolver: 40 + 2y = 56 → y = 8", "Calcular: x = 20 − 8 = 12", "Comprobar en las dos"], "Sustitución");

const igual = pasos("Método de igualación paso a paso", ["Despejar y: y = 7 − 2x", "Despejar y: y = x + 1", "Igualar: 7 − 2x = x + 1", "6 = 3x → x = 2", "y = 2 + 1 = 3"], "Igualación");

const reduc = lienzo("Método de reducción: al sumar las ecuaciones se elimina una incógnita", `
  ${tx(130, 24, "Reducción", { fs: 13, c: "var(--muted)" })}
  ${tx(150, 54, "3x + 2y = 16", { fs: 17, c: "var(--pen)", fam: D })}${tx(150, 86, "x − 2y = 0", { fs: 17, c: "var(--red)", fam: D })}
  ${tx(60, 86, "+", { fs: 22, c: "var(--muted)" })}<path d="M74 98 H226" stroke="var(--ink)" stroke-width="2.5"/>
  ${tx(150, 124, "4x = 16", { fs: 17, c: "var(--leaf)", fam: D })}${tx(130, 154, "x = 4 → 4 − 2y = 0 → y = 2", { fs: 12.5, w: 400 })}`);

const preparar = pasos("Preparar coeficientes opuestos multiplicando cada ecuación", ["2x + 5y = 1   (×3)", "3x − 2y = 11  (×(−2))", "6x + 15y = 3", "−6x + 4y = −22", "19y = −19 → y = −1, x = 3"], "Reducción con preparación");

const grafico = ejes("Método gráfico: las rectas x más y igual a cinco y dos x menos y igual a uno se cortan en el punto dos, tres", { x: [-1, 6], y: [-2, 6], paso: 1, marcasX: [1, 2, 3, 4, 5], marcasY: [2, 4], curvas: [{ f: (x) => 5 - x, c: "var(--pen)", t: "x + y = 5", tx: 4.6, ty: 1.4 }, { f: (x) => 2 * x - 1, c: "var(--red)", t: "2x − y = 1", tx: 1.0, ty: 5.4 }], puntos: [[2, 3, "(2, 3)", "var(--leaf)", "o"]] });

const tipos = lienzo("Tres tipos de sistemas según la posición de las rectas: secantes, paralelas o coincidentes", `
  ${[["Secantes", "1 solución", "var(--leaf)", [[8, 96, 68, 28], [8, 30, 68, 94]]], ["Paralelas", "ninguna", "var(--red)", [[8, 84, 68, 40], [8, 104, 68, 60]]], ["Coincidentes", "infinitas", "var(--pen)", [[8, 94, 68, 30], [8, 94, 68, 30]]]].map(([t, d, c, ls], i) => {
    const ox = 8 + i * 84;
    return `<rect x="${ox}" y="16" width="76" height="96" rx="8" fill="var(--card)" stroke="var(--line)"/>${ls.map(([a, b, cc, dd], k) => `<path d="M${ox + a} ${b} L${ox + cc} ${dd}" stroke="${k ? "var(--red)" : "var(--pen)"}" stroke-width="${i === 2 && k ? 2 : 3.2}"${i === 2 && k ? ' stroke-dasharray="5 4"' : ""}/>`).join("")}${tx(ox + 38, 132, t, { fs: 12, c, max: 74 })}${tx(ox + 38, 152, d, { fs: 11, w: 400, max: 74 })}`;
  }).join("")}
  ${tx(130, 172, "S.C.D. · S.I. · S.C.I.", { fs: 11.5, c: "var(--muted)" })}`, 182);

const clasif = comparar("Clasificar un sistema comparando los cocientes de sus coeficientes", [
  ["S. C. D.", ["a/a' ≠ b/b'", "se cortan"], "var(--leaf)"],
  ["S. I.", ["a/a' = b/b' ≠ c/c'", "paralelas"], "var(--red)"],
  ["S. C. I.", ["a/a' = b/b' = c/c'", "coinciden"], "var(--pen)"],
], "Sin resolver");

const fracciones = pasos("Preparar un sistema con paréntesis y denominadores", ["x/3 + y/2 = 4  → ×6", "2x + 3y = 24", "2(x + 1) − y = 9 → 2x − y = 7", "Restar: 4y = 17 → y = 17/4", "x = 45/8; comprobar en el original"], "Primero, ordenar");

const elegir = cajas("Qué método conviene según la forma de las ecuaciones", [
  ["Sustitución", ["una incógnita", "con coeficiente ±1"]], ["Igualación", ["las dos ya", "despejadas"]],
  ["Reducción", ["coeficientes", "iguales u opuestos"]], ["Gráfico", ["visualizar", "y estimar"]],
], "Elegir método");

const problemas = pasos("Pasos para resolver problemas con sistemas de ecuaciones", ["Elegir las dos incógnitas", "Traducir dos datos a dos ecuaciones", "Resolver el sistema", "Comprobar en el enunciado", "Responder con una frase"], "Problemas con sistemas");

const monedas = lienzo("Problema de monedas: diecisiete monedas de uno y dos euros que suman veinticinco euros", `
  ${[...Array(9)].map((_, i) => `<circle cx="${22 + i * 26}" cy="40" r="11" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.3"/>${tx(22 + i * 26, 44, "1", { fs: 10 })}`).join("")}
  ${[...Array(8)].map((_, i) => `<circle cx="${35 + i * 26}" cy="72" r="11" fill="var(--muted)" fill-opacity=".35" stroke="var(--ink)" stroke-width="1.3"/>${tx(35 + i * 26, 76, "2", { fs: 10 })}`).join("")}
  ${tx(130, 110, "x + y = 17     x + 2y = 25", { fs: 14, c: "var(--pen)", fam: D })}
  ${tx(130, 138, "y = 8, x = 9", { fs: 15, c: "var(--leaf)", fam: D })}${tx(130, 162, "9 monedas de 1 € y 8 de 2 €", { fs: 12, w: 400 })}`, 176);

const tarifas = ejes("Dos tarifas de taxi: la A cuesta tres euros más un euro por kilómetro y la B cinco euros más ochenta céntimos; cuestan lo mismo a los diez kilómetros", { x: [0, 16], y: [0, 20], paso: 2, pasoY: 5, marcasX: [4, 8, 12, 16], marcasY: [5, 10, 15], ex: "km", ey: "€", curvas: [{ f: (x) => 3 + x, c: "var(--pen)", t: "A", tx: 15, ty: 19.4 }, { f: (x) => 5 + 0.8 * x, c: "var(--red)", t: "B", tx: 15.3, ty: 14.6 }], puntos: [[10, 13, "(10, 13)", "var(--leaf)", "se"]] });

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Sistemas de ecuaciones",
  minutos: 110,
  objetivos: [
    "Reconocer ecuaciones lineales con dos incógnitas y representar sus soluciones",
    "Resolver sistemas lineales por sustitución, igualación, reducción y gráficamente",
    "Clasificar un sistema según su número de soluciones y relacionarlo con la posición de dos rectas",
    "Preparar sistemas con paréntesis y denominadores",
    "Plantear y resolver problemas reales con sistemas y comprobar la solución",
  ],
  claves: ["sistema", "ecuación lineal", "sustitución", "igualación", "reducción", "método gráfico", "compatible", "incompatible"],
  pregunta: {
    texto: "En una granja hay gallinas y conejos. Se cuentan 20 cabezas y 56 patas. ¿Cuántos animales hay de cada tipo?",
    respuesta: "Con dos incógnitas, x gallinas e y conejos: <mark>x + y = 20</mark> (cabezas) y <mark>2x + 4y = 56</mark> (patas). Resolviendo el sistema, hay 12 gallinas y 8 conejos. Los sistemas sirven cuando un problema tiene varias cantidades desconocidas relacionadas.",
  },
  lectura: {
    titulo: "El GPS resuelve sistemas",
    html: `<p>Cada vez que abres el mapa del móvil, tu teléfono resuelve un sistema de ecuaciones. Alrededor de la Tierra giran decenas de satélites que emiten continuamente una señal con la hora exacta y su posición. El receptor de tu móvil mide cuánto tarda en llegar la señal de cada satélite y, como sabe que viaja a la velocidad de la luz, calcula a qué distancia está de cada uno.</p><p>Cada distancia da una ecuación con las incógnitas de tu posición. Con una sola ecuación hay infinitas posiciones posibles; con varias, solo hay un punto que las cumple todas a la vez. En la práctica se necesitan al menos cuatro satélites: tres para la posición (latitud, longitud y altura) y uno más para corregir el reloj del móvil, mucho menos preciso que los relojes atómicos de los satélites.</p><p>La idea es la misma que en este tema, aunque a otra escala: cuando hay dos cantidades desconocidas, una sola condición no basta para averiguarlas; hacen falta dos condiciones, dos ecuaciones que se cumplan a la vez. Aprenderás a resolverlas con tres métodos algebraicos y uno gráfico, a saber de antemano si tienen solución y a usarlas para resolver problemas de compras, mezclas, edades o tarifas.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Ecuaciones lineales con dos incógnitas</h3><p>Una <b>ecuación lineal con dos incógnitas</b> es una ecuación de primer grado de la forma <mark>ax + by = c</mark>, como 2x + y = 6. Una solución es un <b>par de números</b> (x, y) que la cumple: (1, 4) es solución porque 2 · 1 + 4 = 6; también lo son (0, 6), (2, 2), (3, 0) o (0,5; 5).</p><p>Una ecuación así tiene <b>infinitas soluciones</b>: basta con dar a x el valor que queramos y calcular y = 6 − 2x. Para organizarlas se usa una tabla de valores.</p>${tabla(["x", "0", "1", "2", "3"], [["y = 6 − 2x", "6", "4", "2", "0"]])}<p>Si representamos cada par como un punto del plano, todos quedan sobre una <b>recta</b>. Por eso estas ecuaciones se llaman lineales: su gráfica es una línea recta, y cada punto de esa recta es una solución.</p>`, svg: unaEc },
    { html: `<h3>1.2 Sistemas de ecuaciones</h3><p>Un <b>sistema de dos ecuaciones lineales con dos incógnitas</b> está formado por dos ecuaciones que deben cumplirse <b>a la vez</b>. Se escriben una debajo de otra, unidas por una llave. La <b>solución del sistema</b> es el par (x, y) que cumple las dos ecuaciones simultáneamente.</p><p>En el problema de la granja, x + y = 20 y 2x + 4y = 56. El par (12, 8) es solución: 12 + 8 = 20 y 24 + 32 = 56. En cambio, (10, 10) cumple la primera pero no la segunda (20 + 40 = 60), así que no es solución del sistema.</p><p>Resolver un sistema es encontrar su solución. La idea de todos los métodos algebraicos es la misma: <b>eliminar una incógnita</b> para obtener una ecuación con una sola incógnita, que ya sabes resolver. Dos sistemas con las mismas soluciones se llaman <b>equivalentes</b>.</p>`, svg: sistema },
    { html: `<h3>1.3 Método de sustitución</h3><p>El método de <b>sustitución</b> consiste en: 1) <b>despejar</b> una incógnita en una de las ecuaciones; 2) <b>sustituir</b> esa expresión en la otra ecuación; 3) resolver la ecuación de una incógnita que resulta; 4) calcular la otra incógnita con el despeje; 5) comprobar.</p><p>Con la granja: de x + y = 20, despejamos x = 20 − y. Sustituimos en la segunda: 2(20 − y) + 4y = 56. Resolvemos: 40 − 2y + 4y = 56, 2y = 16, y = 8. Por último, x = 20 − 8 = 12. Hay 12 gallinas y 8 conejos.</p><p>Es el método más cómodo cuando alguna incógnita tiene <b>coeficiente 1 o −1</b>, porque el despeje no produce fracciones. Al sustituir, la expresión despejada debe ir <b>entre paréntesis</b>, ya que puede estar multiplicada por un número.</p>`, svg: sust },
    { html: `<h3>1.4 Método de igualación</h3><p>El método de <b>igualación</b> consiste en despejar <b>la misma incógnita</b> en las dos ecuaciones e igualar las dos expresiones obtenidas. Así queda una ecuación con una sola incógnita.</p><p>Ejemplo: 2x + y = 7 y x − y = −1. Despejamos y en las dos: y = 7 − 2x e y = x + 1. Como ambas son iguales a y, se igualan: 7 − 2x = x + 1. Resolviendo, 6 = 3x y x = 2. Sustituyendo en cualquiera de los despejes, y = 3.</p><p>Es especialmente útil cuando las dos ecuaciones ya vienen despejadas en la misma incógnita, como ocurre al comparar dos tarifas (y = 3 + x; y = 5 + 0,8x) o dos funciones. Gráficamente, igualar las dos y equivale a buscar el punto donde las dos rectas tienen la misma altura.</p>`, svg: igual, video: { id: "lTRANviJWEY", titulo: "Sistemas de ecuaciones lineales 2×2 por igualación", canal: "julioprofe", vistas: 5636081, megusta: 0 } },
    { html: `<h3>1.5 Método de reducción</h3><p>En el método de <b>reducción</b> se suman (o se restan) las dos ecuaciones, miembro a miembro, de forma que <b>una incógnita desaparezca</b>. Para ello, sus coeficientes deben ser <b>opuestos</b> (y entonces se suman) o <b>iguales</b> (y entonces se restan).</p><p>Ejemplo: 3x + 2y = 16 y x − 2y = 0. Los coeficientes de y son 2 y −2, opuestos. Sumando: 4x = 16, x = 4. Sustituyendo en la segunda: 4 − 2y = 0, y = 2. La solución es (4, 2).</p><p>Este método se basa en que, si a = b y c = d, entonces a + c = b + d: sumar dos igualdades da otra igualdad. Es el método más usado cuando ninguna incógnita tiene coeficiente 1, porque evita las fracciones. También es la base del método que usan los ordenadores para resolver sistemas enormes, con miles de ecuaciones.</p>`, svg: reduc },
    { html: `<h3>1.6 Reducción preparando los coeficientes</h3><p>Si los coeficientes no son iguales ni opuestos, se <b>multiplica</b> cada ecuación por un número para conseguirlo. Es como buscar un común denominador: se busca el m.c.m. de los coeficientes de la incógnita que se quiere eliminar.</p><p>Ejemplo: 2x + 5y = 1 y 3x − 2y = 11. Para eliminar x (coeficientes 2 y 3, m.c.m. 6), multiplicamos la primera por 3 y la segunda por −2: 6x + 15y = 3 y −6x + 4y = −22. Sumando: 19y = −19, y = −1. Sustituyendo: 2x − 5 = 1, x = 3.</p><p>Atención: al multiplicar una ecuación hay que multiplicar <b>todos sus términos</b>, también el del segundo miembro. Y si se prefiere restar en lugar de sumar, cuidado con los signos: suele ser más seguro multiplicar por un número negativo y sumar. También se puede aplicar reducción dos veces, una para cada incógnita, y así no hay que sustituir.</p>`, svg: preparar },
    { html: `<h3>2.1 Método gráfico</h3><p>Como cada ecuación lineal es una recta, resolver un sistema gráficamente consiste en <b>dibujar las dos rectas</b> en los mismos ejes y encontrar su <b>punto de corte</b>. Sus coordenadas son la solución, porque es el único punto que pertenece a las dos rectas.</p><p>Para dibujar cada recta se despeja y y se calculan dos o tres puntos con una tabla. En el ejemplo, x + y = 5 pasa por (0, 5) y (5, 0); 2x − y = 1, es decir, y = 2x − 1, pasa por (0, −1) y (2, 3). Las rectas se cortan en (2, 3), y esa es la solución: 2 + 3 = 5 ✓ y 4 − 3 = 1 ✓.</p><p>El método gráfico es muy visual y ayuda a entender qué está pasando, pero es <b>poco preciso</b> si la solución no es un par de números enteros: con (2,37; 1,82) sería difícil leerla en el papel. Con programas como GeoGebra se obtiene con mucha más precisión.</p>`, svg: grafico, video: { id: "1jMC7JXEenY", titulo: "Resolver sistemas 2x2: método gráfico", canal: "Susi Profe", vistas: 1023830, megusta: 0 } },
    { html: `<h3>2.2 Tipos de sistemas</h3><p>Dos rectas del plano pueden estar en tres posiciones, y cada una corresponde a un tipo de sistema:</p><ul><li><b>Secantes</b> (se cortan en un punto): el sistema tiene <b>una única solución</b>. Es <b>compatible determinado</b> (S. C. D.).</li><li><b>Paralelas</b> (no se cortan): el sistema <b>no tiene solución</b>. Es <b>incompatible</b> (S. I.).</li><li><b>Coincidentes</b> (son la misma recta): el sistema tiene <b>infinitas soluciones</b>. Es <b>compatible indeterminado</b> (S. C. I.).</li></ul><p>Algebraicamente se reconocen al resolver. Si al eliminar una incógnita se llega a algo imposible como 0 = 7, el sistema es incompatible. Si se llega a 0 = 0, las dos ecuaciones son equivalentes (una es múltiplo de la otra) y el sistema es compatible indeterminado: las soluciones son todos los puntos de la recta.</p><p>Por eso un sistema de dos ecuaciones lineales nunca puede tener exactamente dos o tres soluciones: o una, o ninguna, o infinitas.</p>`, svg: tipos },
    { html: `<h3>2.3 Clasificar sin resolver</h3><p>Se puede saber el tipo de un sistema ax + by = c, a'x + b'y = c' sin resolverlo, comparando los <b>cocientes</b> de los coeficientes correspondientes:</p><ul><li>Si a/a' ≠ b/b', las rectas tienen distinta inclinación y se cortan: <b>S. C. D.</b></li><li>Si a/a' = b/b' ≠ c/c', tienen la misma inclinación pero son distintas: <b>S. I.</b></li><li>Si a/a' = b/b' = c/c', una ecuación es múltiplo de la otra: <b>S. C. I.</b></li></ul><p>Ejemplos: x + 2y = 3 y 2x + 4y = 7: 1/2 = 2/4 ≠ 3/7, incompatible. 3x − y = 2 y 6x − 2y = 4: 3/6 = −1/−2 = 2/4, compatible indeterminado. x + y = 4 y x − y = 2: 1/1 ≠ 1/(−1), compatible determinado.</p><p>Esta comprobación permite, por ejemplo, encontrar el valor de un parámetro k para que un sistema no tenga solución, una pregunta típica de examen.</p>`, svg: clasif },
    { html: `<h3>2.4 Sistemas con paréntesis y denominadores</h3><p>A menudo las ecuaciones de un sistema no vienen en la forma ax + by = c. Antes de aplicar un método hay que <b>prepararlas</b>, como se hace con las ecuaciones de primer grado: quitar paréntesis, quitar denominadores multiplicando por el m.c.m., y pasar las incógnitas al primer miembro y los números al segundo.</p><p>Ejemplo: x/3 + y/2 = 4 y 2(x + 1) − y = 9. La primera, multiplicada por 6: 2x + 3y = 24. La segunda: 2x + 2 − y = 9, es decir, 2x − y = 7. Restando la segunda de la primera: 4y = 17, y = 17/4; y entonces 2x = 7 + 17/4 = 45/4, x = 45/8. Las soluciones no tienen por qué ser enteras.</p><p>Comprueba la solución en las ecuaciones <b>originales</b>, no en las preparadas: así detectas también los errores cometidos al prepararlas. Una vez ordenado, el sistema se resuelve con el método que resulte más cómodo.</p>`, svg: fracciones },
    { html: `<h3>2.5 ¿Qué método elegir?</h3><p>Todos los métodos llevan a la misma solución, así que conviene elegir el que exige <b>menos cálculos</b>:</p>${tabla(["Si el sistema…", "Conviene…"], [["tiene una incógnita con coeficiente 1 o −1", "sustitución"], ["tiene las dos ecuaciones despejadas en la misma incógnita", "igualación"], ["tiene coeficientes iguales u opuestos, o fáciles de igualar", "reducción"], ["se quiere visualizar o estimar", "gráfico"]])}<p>Con la práctica, se ve de un vistazo cuál es el más cómodo. Por ejemplo, en y = 3x − 1 y 2x + y = 9 lo natural es sustituir; en 5x + 3y = 21 y 2x − 3y = 0, reducir (sumando desaparece y).</p><p>Una buena costumbre es resolver de vez en cuando el mismo sistema por dos métodos distintos y comprobar que coinciden: es la mejor forma de ganar soltura y confianza.</p>`, svg: elegir },
    { html: `<h3>3.1 Problemas con sistemas</h3><p>Muchos problemas con dos cantidades desconocidas son más fáciles de plantear con <b>dos incógnitas</b>. El método es: 1) decidir qué representan x e y y escribirlo; 2) encontrar en el enunciado <b>dos datos</b> independientes y traducir cada uno a una ecuación; 3) resolver el sistema con el método más cómodo; 4) comprobar la solución <b>en el enunciado</b>; 5) responder con una frase.</p><p>Ejemplo: en un cine, 3 entradas de adulto y 2 infantiles cuestan 37 €, y 2 de adulto y 3 infantiles, 33 €. Con x = precio adulto, y = precio infantil: 3x + 2y = 37 y 2x + 3y = 33. Por reducción (×3 y ×(−2)): 9x + 6y = 111 y −4x − 6y = −66, 5x = 45, x = 9. Entonces y = 5. La entrada de adulto cuesta 9 € y la infantil, 5 €.</p><p>Comprobación: 27 + 10 = 37 ✓ y 18 + 15 = 33 ✓.</p>`, svg: problemas, video: { id: "Bka0pwxnSjc", titulo: "Problemas con sistemas de ecuaciones: números", canal: "Susi Profe", vistas: 172832, megusta: 0 } },
    { html: `<h3>3.2 Problemas de monedas, mezclas y edades</h3><p>Hay tipos de problemas que se repiten mucho. En los de <b>monedas o billetes</b>, una ecuación cuenta el número de piezas y la otra su valor: 17 monedas de 1 € y 2 € que suman 25 € dan x + y = 17 y x + 2y = 25; restando, y = 8 y x = 9.</p><p>En los de <b>mezclas</b>, una ecuación cuenta la cantidad total y la otra el precio o la concentración: mezclar café de 6 €/kg y de 10 €/kg para obtener 20 kg a 7 €/kg da x + y = 20 y 6x + 10y = 140, de donde y = 5 kg del caro y x = 15 kg del barato.</p><p>En los de <b>edades</b>, conviene una tabla con las edades actuales y las de «hace» o «dentro de» unos años, recordando que todos envejecen lo mismo. En todos ellos, el paso más difícil no es resolver, sino traducir bien: lee el enunciado dos veces y escribe qué significa cada letra.</p>`, svg: monedas },
    { html: `<h3>3.3 Comparar tarifas: el punto de equilibrio</h3><p>Los sistemas son muy útiles para <b>comparar ofertas</b> con una parte fija y una variable. Un taxi A cobra 3 € de bajada de bandera y 1 € por kilómetro; un taxi B, 5 € y 0,80 € por kilómetro. Sus precios son y = 3 + x e y = 5 + 0,8x. Igualando: 3 + x = 5 + 0,8x, 0,2x = 2, <mark>x = 10 km</mark>, con un precio de 13 €.</p><p>Ese punto, en el que las dos opciones cuestan lo mismo, se llama <b>punto de equilibrio</b>. La gráfica permite decidir: para menos de 10 km la recta de A va por debajo (A es más barato); para más de 10 km, la de B.</p><p>El mismo razonamiento sirve para elegir una tarifa de móvil, un gimnasio, una compañía de luz o un plan de alquiler de bicis. Las empresas diseñan sus tarifas pensando en estos puntos de corte, así que saber calcularlos te convierte en un consumidor más crítico.</p>`, svg: tarifas },
  ],
  ejemplos: [
    { enunciado: "Resuelve por sustitución: x + 3y = 10, 2x − y = 6.", pasos: ["x = 10 − 3y.", "2(10 − 3y) − y = 6 → 20 − 7y = 6 → y = 2.", "x = 10 − 6 = 4."], resultado: "x = 4, y = 2." },
    { enunciado: "Resuelve por igualación: y = 4x − 5, y = −2x + 7.", pasos: ["4x − 5 = −2x + 7.", "6x = 12 → x = 2.", "y = 8 − 5 = 3."], resultado: "x = 2, y = 3." },
    { enunciado: "Resuelve por reducción: 4x + 3y = 5, 6x − 5y = −21.", pasos: ["×3 y ×(−2): 12x + 9y = 15; −12x + 10y = 42.", "Sumando: 19y = 57 → y = 3.", "4x + 9 = 5 → x = −1."], resultado: "x = −1, y = 3." },
    { enunciado: "Clasifica: 2x − 3y = 4, −4x + 6y = 1.", pasos: ["2/(−4) = −1/2; −3/6 = −1/2; 4/1 = 4.", "a/a' = b/b' ≠ c/c'."], resultado: "Incompatible: rectas paralelas." },
    { enunciado: "Resuelve: (x + y)/2 = 5, x/3 − y/4 = 1.", pasos: ["x + y = 10.", "×12: 4x − 3y = 12.", "y = 10 − x → 4x − 30 + 3x = 12 → 7x = 42 → x = 6, y = 4."], resultado: "x = 6, y = 4." },
    { enunciado: "Granja: 20 cabezas y 56 patas.", pasos: ["x + y = 20; 2x + 4y = 56.", "x = 20 − y → 40 + 2y = 56 → y = 8.", "x = 12."], resultado: "12 gallinas y 8 conejos." },
  ],
  errores: [
    "Dar solo el valor de una incógnita y olvidar la otra.",
    "Al sustituir, no poner entre paréntesis la expresión despejada.",
    "En reducción, multiplicar solo el primer miembro de una ecuación.",
    "Equivocarse con los signos al restar ecuaciones.",
    "Pensar que 0 = 0 significa «sin solución» (son infinitas) o que 0 = 7 significa x = 0.",
    "No comprobar la solución en las dos ecuaciones ni en el enunciado.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Comprueba si (3, −1) es solución de 2x + y = 5, x − y = 4.", sol: "6 − 1 = 5 ✓; 3 + 1 = 4 ✓. Sí." },
    { nivel: "básico", q: "Haz una tabla con cuatro soluciones de x − 2y = 4 y represéntalas.", sol: "(0, −2), (2, −1), (4, 0), (6, 1). Están en una recta." },
    { nivel: "básico", q: "Resuelve por sustitución: x + y = 9, 3x − y = 7.", sol: "y = 9 − x → 3x − 9 + x = 7 → x = 4, y = 5." },
    { nivel: "básico", q: "Resuelve por igualación: x = 2y + 1, x = 3y − 2.", sol: "2y + 1 = 3y − 2 → y = 3, x = 7." },
    { nivel: "básico", q: "Resuelve por reducción: 2x + y = 11, 3x − y = 4.", sol: "Sumando: 5x = 15 → x = 3, y = 5." },
    { nivel: "básico", q: "Resuelve por reducción: x + 4y = 14, x + y = 5.", sol: "Restando: 3y = 9 → y = 3, x = 2." },
    { nivel: "básico", q: "Resuelve gráficamente: y = x + 2, y = 4 − x.", sol: "Primera por (0, 2) y (1, 3); segunda por (0, 4) y (1, 3). Corte (1, 3)." },
    { nivel: "básico", q: "Sin resolver, ¿cuántas soluciones tiene x + y = 3, 2x + 2y = 6?", sol: "1/2 = 1/2 = 3/6: infinitas (S. C. I.)." },
    { nivel: "básico", q: "Dos números suman 30 y su diferencia es 8. Hállalos.", sol: "x + y = 30, x − y = 8 → x = 19, y = 11." },
    { nivel: "básico", q: "Un bolígrafo y un cuaderno cuestan 3,50 €; dos bolígrafos y un cuaderno, 4,30 €. ¿Cuánto cuesta cada uno?", sol: "Restando: bolígrafo 0,80 €; cuaderno 2,70 €." },
    { nivel: "básico", q: "Inventa un sistema cuya solución sea (2, −3).", sol: "Por ejemplo x + y = −1, x − y = 5." },
    { nivel: "básico", q: "En un aparcamiento hay 30 vehículos entre coches y motos, con 96 ruedas. ¿Cuántos hay de cada?", sol: "c + m = 30, 4c + 2m = 96 → 2c = 36 → c = 18, m = 12." },
    { nivel: "medio", q: "Resuelve: 5x − 2y = 1, 3x + 4y = 24.", sol: "×2 la primera: 10x − 4y = 2; sumando: 13x = 26 → x = 2; 10 − 2y = 1 → y = 4,5." },
    { nivel: "medio", q: "Resuelve: 7x + 2y = −3, 3x − 5y = 28.", sol: "×5 y ×2: 35x + 10y = −15; 6x − 10y = 56. 41x = 41 → x = 1; y = −5." },
    { nivel: "medio", q: "Resuelve: x/2 − y/3 = 1, x/4 + y/6 = 2.", sol: "3x − 2y = 6; 3x + 2y = 24. Sumando: 6x = 30 → x = 5; y = 4,5." },
    { nivel: "medio", q: "Resuelve: 3(x − 1) + 2y = 11, 2x − (y + 3) = 2.", sol: "3x + 2y = 14; 2x − y = 5 → y = 2x − 5 → 3x + 4x − 10 = 14 → x = 24/7, y = 13/7." },
    { nivel: "medio", q: "Clasifica: a) 4x − 2y = 6, 2x − y = 3 b) x − 3y = 2, 2x − 6y = 1 c) 2x + y = 1, x + 2y = 1.", sol: "a) S. C. I. b) S. I. c) S. C. D. (solución 1/3, 1/3)." },
    { nivel: "medio", q: "Halla k para que 3x + ky = 2, 6x + 4y = 5 sea incompatible.", sol: "3/6 = k/4 → k = 2; 2/5 ≠ 1/2 ✓. k = 2." },
    { nivel: "medio", q: "En un examen tipo test de 25 preguntas, cada acierto suma 4 y cada fallo resta 1. Leo contestó todas y sacó 60 puntos. ¿Cuántas acertó?", sol: "a + f = 25; 4a − f = 60 → 5a = 85 → a = 17, f = 8." },
    { nivel: "medio", q: "Se mezcla aceite de 4 €/L con aceite de 7 €/L para obtener 30 L a 5 €/L. ¿Cuántos litros de cada?", sol: "x + y = 30; 4x + 7y = 150 → 120 + 3y = 150 → y = 10, x = 20." },
    { nivel: "medio", q: "Hace 4 años la edad de Marta era el doble de la de su hermano; dentro de 6 años será 4/3 de la de él. ¿Qué edades tienen?", sol: "m − 4 = 2(h − 4) → m = 2h − 4. m + 6 = (4/3)(h + 6) → 3m + 18 = 4h + 24 → 6h − 12 + 18 = 4h + 24 → h = 9, m = 14." },
    { nivel: "medio", q: "El perímetro de un rectángulo es 50 cm y el largo es 5 cm mayor que el doble del ancho. Halla las medidas.", sol: "2l + 2a = 50; l = 2a + 5 → 2(2a + 5) + 2a = 50 → a = 20/3 ≈ 6,67 cm; l ≈ 18,33 cm." },
    { nivel: "medio", q: "Un gimnasio A cobra 40 € de inscripción y 25 € al mes; otro B, 10 € y 30 € al mes. ¿Cuándo cuestan lo mismo?", sol: "40 + 25m = 10 + 30m → m = 6 meses (190 €). Después conviene A." },
    { nivel: "medio", q: "Resuelve por los cuatro métodos x + y = 6, x − y = 2 y comprueba que coinciden.", sol: "En todos: x = 4, y = 2. Gráficamente, las rectas se cortan en (4, 2)." },
    { nivel: "avanzado", q: "Resuelve: (x + 2)/3 − (y − 1)/2 = 1, (x − 1)/4 + (y + 3)/2 = 3.", sol: "×6: 2x + 4 − 3y + 3 = 6 → 2x − 3y = −1. ×4: x − 1 + 2y + 6 = 12 → x + 2y = 7. x = 7 − 2y → 14 − 4y − 3y = −1 → y = 15/7, x = 19/7." },
    { nivel: "avanzado", q: "Un número de dos cifras suma 11 entre sus cifras; si se invierten, el número disminuye en 27. ¿Cuál es?", sol: "d + u = 11; (10d + u) − (10u + d) = 27 → d − u = 3. d = 7, u = 4: el 74 (74 − 47 = 27)." },
    { nivel: "avanzado", q: "Dos trenes salen a la vez de dos ciudades a 360 km, uno hacia el otro, a 100 km/h y 80 km/h. ¿Cuándo y dónde se cruzan?", sol: "100t + 80t = 360 → t = 2 h. A 200 km de la ciudad del tren rápido." },
    { nivel: "avanzado", q: "Una fábrica hace sillas (2 h de montaje y 1 h de pintura) y mesas (3 h y 2 h). Dispone de 120 h de montaje y 70 h de pintura y quiere usarlas todas. ¿Cuántas fabrica?", sol: "2s + 3m = 120; s + 2m = 70 → s = 70 − 2m → 140 − m = 120 → m = 20, s = 30." },
    { nivel: "avanzado", q: "Halla a y b para que la recta y = ax + b pase por (1, 5) y (3, 11).", sol: "a + b = 5; 3a + b = 11 → a = 3, b = 2. y = 3x + 2." },
    { nivel: "avanzado", q: "Un laboratorio tiene alcohol al 30 % y al 80 %. ¿Cuántos litros de cada hay que mezclar para obtener 20 L al 60 %?", sol: "x + y = 20; 0,3x + 0,8y = 12 → 6 − 0,3y + 0,8y = 12 → y = 12, x = 8." },
    { nivel: "avanzado", q: "Halla m para que el sistema mx + y = 3, 4x + my = 6 tenga infinitas soluciones.", sol: "m/4 = 1/m = 3/6 → m = 2 (2/4 = 1/2 = 1/2 ✓)." },
    { nivel: "avanzado", q: "Explica por qué dos ecuaciones lineales no pueden tener exactamente dos soluciones comunes.", sol: "Cada ecuación es una recta; si dos rectas comparten dos puntos, son la misma recta y comparten infinitos. Por tanto, 0, 1 o infinitas." },
    { nivel: "avanzado", q: "Resuelve el sistema de tres ecuaciones x + y = 7, y + z = 9, x + z = 8.", sol: "Sumando: 2(x + y + z) = 24 → x + y + z = 12. z = 12 − 7 = 5, x = 12 − 9 = 3, y = 12 − 8 = 4." },
    { nivel: "avanzado", q: "Una tienda vende camisetas a 12 € y sudaderas a 30 €. Un día vendió 40 prendas por 750 €. Plantea, resuelve e interpreta.", sol: "c + s = 40; 12c + 30s = 750 → 480 + 18s = 750 → s = 15, c = 25. 25 camisetas y 15 sudaderas." },
  ],
  quiz: [
    { q: "¿Cuántas soluciones tiene 3x + y = 4 por sí sola?", o: ["una", "dos", "ninguna", "infinitas"], a: 3, e: "Todos los puntos de una recta." },
    { q: "La solución de un sistema 2×2 es…", o: ["un número", "un par (x, y)", "una recta", "dos rectas"], a: 1, e: "Valores de x e y." },
    { q: "¿Es (2, 1) solución de x + y = 3, x − y = 1?", o: ["Sí", "Solo de la primera", "Solo de la segunda", "No"], a: 0, e: "3 = 3 y 1 = 1." },
    { q: "La sustitución consiste en…", o: ["sumar ecuaciones", "despejar y sustituir en la otra", "igualar dos despejes", "dibujar rectas"], a: 1, e: "Despejar una incógnita." },
    { q: "La igualación exige despejar…", o: ["incógnitas distintas", "la misma incógnita en ambas", "los números", "nada"], a: 1, e: "Después se igualan." },
    { q: "En x + y = 10, x − y = 4, al sumar…", o: ["2x = 14", "2y = 14", "0 = 14", "2x = 6"], a: 0, e: "Se eliminan las y." },
    { q: "Solución de x + y = 10, x − y = 4:", o: ["(7, 3)", "(3, 7)", "(6, 4)", "(5, 5)"], a: 0, e: "x = 7, y = 3." },
    { q: "Para eliminar x en 2x + y = 5 y 3x − 2y = 4 se multiplica por…", o: ["3 y −2", "2 y 3", "1 y 2", "5 y 4"], a: 0, e: "6x y −6x." },
    { q: "Gráficamente, la solución es…", o: ["el origen", "el corte con el eje X", "el punto de corte de las rectas", "la pendiente"], a: 2, e: "Punto común a las dos." },
    { q: "Rectas paralelas →", o: ["S. C. D.", "S. I.", "S. C. I.", "dos soluciones"], a: 1, e: "Ningún punto común." },
    { q: "Rectas coincidentes →", o: ["S. I.", "S. C. D.", "S. C. I.", "imposible"], a: 2, e: "Infinitos puntos comunes." },
    { q: "Si al resolver llegas a 0 = 0…", o: ["no hay solución", "infinitas soluciones", "x = 0", "error seguro"], a: 1, e: "Ecuaciones equivalentes." },
    { q: "Si llegas a 0 = 5…", o: ["incompatible", "x = 5", "infinitas", "y = 0"], a: 0, e: "Igualdad imposible." },
    { q: "2x + y = 3 y 4x + 2y = 6 es…", o: ["S. C. D.", "S. I.", "S. C. I.", "no lineal"], a: 2, e: "La segunda es el doble." },
    { q: "x + y = 1 y x + y = 2 es…", o: ["S. C. D.", "S. I.", "S. C. I.", "tiene (1, 1)"], a: 1, e: "Paralelas." },
    { q: "Para y = 2x e y = x + 3, el método más rápido es…", o: ["reducción", "igualación", "gráfico", "ninguno"], a: 1, e: "Ya están despejadas." },
    { q: "Para quitar denominadores en x/2 + y/3 = 1 se multiplica por…", o: ["5", "6", "2", "3"], a: 1, e: "m.c.m.(2, 3)." },
    { q: "8 billetes de 5 € y 10 € suman 55 €. Hay de 10 €…", o: ["3", "5", "2", "4"], a: 0, e: "x + y = 8, 5x + 10y = 55 → y = 3." },
    { q: "El punto de equilibrio de dos tarifas es…", o: ["la más barata", "donde cuestan lo mismo", "el origen", "la parte fija"], a: 1, e: "Corte de las dos rectas." },
    { q: "Un sistema lineal 2×2 NO puede tener…", o: ["una solución", "ninguna", "infinitas", "exactamente dos"], a: 3, e: "Dos rectas comparten 0, 1 o infinitos puntos." },
  ],
  examen: [
    { q: "Solución de x + 2y = 8, x − y = 2:", o: ["(4, 2)", "(2, 4)", "(6, 1)", "(3, 2)"], a: 0, e: "Restando: 3y = 6." },
    { q: "Solución de y = 3x, 2x + y = 15:", o: ["(3, 9)", "(5, 15)", "(2, 6)", "(9, 3)"], a: 0, e: "5x = 15." },
    { q: "Clasifica 6x − 3y = 9, 2x − y = 3:", o: ["S. C. D.", "S. I.", "S. C. I.", "no lineal"], a: 2, e: "Una es triple de la otra." },
    { q: "Clasifica y = 2x + 1, y = 2x − 4:", o: ["S. C. D.", "S. I.", "S. C. I.", "dos soluciones"], a: 1, e: "Misma pendiente, distinta ordenada." },
    { q: "Dos números suman 40 y uno es el triple del otro:", o: ["10 y 30", "8 y 32", "15 y 25", "12 y 28"], a: 0, e: "4x = 40." },
    { q: "Si 3x + 2y = 12 y x = 2, y =", o: ["3", "6", "4", "2"], a: 0, e: "6 + 2y = 12." },
    { q: "Para eliminar y en 2x + 3y = 7 y x − y = 1, la segunda se multiplica por…", o: ["2", "3", "−2", "7"], a: 1, e: "3x − 3y = 3." },
    { q: "Taxi A: 2 + 1,5x; B: 5 + x. Mismo precio en…", o: ["6 km", "3 km", "10 km", "5 km"], a: 0, e: "0,5x = 3." },
  ],
  feynman: ["Por qué una ecuación con dos incógnitas tiene infinitas soluciones y un sistema puede tener una", "Cómo funcionan la sustitución, la igualación y la reducción", "Qué relación hay entre los tipos de sistemas y la posición de dos rectas", "Cómo se plantea un problema con dos incógnitas"],
  figura: {
    titulo: "Cuatro maneras de resolver un sistema",
    svg: resumen("Resumen de los métodos de resolución de sistemas", [
      ["Sustitución", "despejar una incógnita → sustituir en la otra", "var(--pen)"],
      ["Igualación", "despejar la misma en las dos → igualar", "var(--leaf)"],
      ["Reducción", "coeficientes opuestos → sumar para eliminar", "var(--red)"],
      ["Gráfico", "dibujar las rectas → punto de corte (1, 0 o ∞)", "var(--inf)"],
    ]),
  },
  video: { id: "GSCivMSUqNc", titulo: "Sistema de ecuaciones lineales 2x2: el problema de las monedas", canal: "IngE Darwin", vistas: 177651, megusta: 0 },
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
    ["Sistemas equivalentes", "Sistemas con las mismas soluciones."],
    ["Sustitución", "Despejar una incógnita y sustituirla en la otra ecuación."],
    ["Igualación", "Despejar la misma incógnita en las dos ecuaciones e igualar."],
    ["Reducción", "Sumar o restar ecuaciones para eliminar una incógnita."],
    ["Método gráfico", "Resolver buscando el punto de corte de las rectas."],
    ["Compatible determinado", "Sistema con una única solución."],
    ["Incompatible", "Sistema sin solución."],
    ["Compatible indeterminado", "Sistema con infinitas soluciones."],
    ["Rectas secantes", "Rectas que se cortan en un punto."],
    ["Punto de equilibrio", "Valor en el que dos tarifas cuestan lo mismo."],
    ["Coeficiente", "Número que multiplica a una incógnita."],
  ],
  situacion: {
    titulo: "La feria solidaria del instituto",
    reto: "La clase organiza un puesto de bocadillos y bebidas en la feria solidaria. Con los datos de ventas de otros años y vuestros costes, usaréis sistemas de ecuaciones para fijar precios y averiguar cuánto se vendió de cada producto.",
    pasos: [
      "Recoged datos: ingresos totales y número de productos vendidos en ediciones anteriores (o inventadlos de forma realista).",
      "Plantead sistemas para averiguar cuántas unidades de cada producto se vendieron.",
      "Comparad dos proveedores con parte fija y variable y calculad el punto de equilibrio.",
      "Resolved los sistemas por dos métodos y representadlos con GeoGebra.",
      "Proponed precios y un objetivo de recaudación justificado con los cálculos.",
    ],
    producto: "Un dosier con los sistemas planteados, sus soluciones, las gráficas y la propuesta de precios.",
    evaluacion: ["Traduce correctamente las situaciones a sistemas.", "Resuelve con el método adecuado y comprueba.", "Interpreta gráficamente el punto de equilibrio.", "Justifica las decisiones con los resultados."],
  },
  tarjetas: [
    ["Solución de un sistema", "Par (x, y) que cumple las dos ecuaciones."],
    ["Sustitución", "Despejar y sustituir."],
    ["Igualación", "Despejar la misma incógnita e igualar."],
    ["Reducción", "Coeficientes opuestos y sumar."],
    ["Método gráfico", "Punto de corte de las rectas."],
    ["S. C. D.", "Una solución: rectas secantes."],
    ["S. I.", "Ninguna: paralelas (0 = 5)."],
    ["S. C. I.", "Infinitas: coincidentes (0 = 0)."],
    ["Clasificar", "Comparar a/a', b/b', c/c'."],
    ["Preparar", "Quitar paréntesis y denominadores."],
    ["Problema", "Dos incógnitas, dos datos, dos ecuaciones."],
    ["Equilibrio", "Donde dos tarifas cuestan lo mismo."],
  ],
  familias: ["Comparad dos tarifas reales de casa y calculad cuándo cuestan lo mismo.", "Proponed acertijos de cabezas y patas o de monedas.", "Dibujad dos rectas en papel cuadriculado y buscad su punto de corte.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido algebraico: ecuaciones lineales con dos incógnitas, sistemas 2×2, métodos de resolución algebraicos y gráfico, clasificación e interpretación geométrica, y modelización de problemas (RD 217/2022, Matemáticas 3º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["GeoGebra con deslizadores para ver cómo cambian las rectas y el tipo de sistema.", "Carrera de métodos por equipos con el mismo sistema.", "Problemas históricos de cabezas y patas (Sunzi Suanjing).", "Comparador de tarifas con datos reales de la familia."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes: sistemas de ecuaciones (INTEF)", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-13",
};
