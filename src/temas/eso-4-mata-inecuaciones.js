// Matemáticas A 4º ESO · Inecuaciones. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { F, D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, recta, comparar } = require("./_eso4L2-mata");

const desig = cajas("Los cuatro signos de desigualdad y cómo se leen", [
  ["<", ["menor que", "x < 3"]], [">", ["mayor que", "x > −1"]],
  ["≤", ["menor o igual", "edad ≤ 12"]], ["≥", ["mayor o igual", "altura ≥ 1,40"]],
], "Signos de desigualdad");

const solucion = recta("Las soluciones de x mayor que 2 forman una semirrecta abierta en 2 que va hacia la derecha", {
  r: [-2, 6], marcas: [-2, 0, 2, 4, 6], tramos: [{ de: 2, a: Infinity, ci: false, t: "x > 2  →  (2, +∞)", c: "var(--pen)" }],
  puntos: [{ x: 3, t: "3 ✓", c: "var(--leaf)", abajo: true }, { x: 1, t: "1 ✗", c: "var(--red)", abajo: true }], y: 104, h: 170,
});

const propiedades = comparar("Al multiplicar o dividir una desigualdad por un número negativo cambia el sentido", [
  ["Por positivo", ["2 < 5", "× 3", "6 < 15 (igual)"], "var(--leaf)"],
  ["Por negativo", ["2 < 5", "× (−3)", "−6 > −15 (gira)"], "var(--red)"],
], "La regla de oro");

const primer = pasos("Resolver una inecuación de primer grado: igual que una ecuación pero girando el signo si se divide entre un negativo", ["3 − 2x ≥ 7", "−2x ≥ 4", "÷ (−2): ¡gira el signo!", "x ≤ −2", "Solución: (−∞, −2]"], "Primer grado paso a paso");

const solPrimer = recta("Solución de 3 menos 2x mayor o igual que 7: x menor o igual que menos 2, semirrecta cerrada hacia la izquierda", {
  r: [-5, 3], marcas: [-5, -4, -2, 0, 2], tramos: [{ de: -Infinity, a: -2, t: "x ≤ −2", c: "var(--red)" }], y: 100, h: 150,
  pie: "comprobación: x = −3 → 3 + 6 = 9 ≥ 7 ✓",
});

const graf = ejes("Interpretación gráfica: 2x menos 4 es positivo donde la recta está por encima del eje, es decir, para x mayor que 2", { x: [-2, 5], y: [-6, 6], paso: 1, pasoY: 2, marcasX: [2], marcasY: [], curvas: [{ f: (x) => 2 * x - 4, c: "var(--pen)", t: "y = 2x − 4", tx: 3.3, ty: 5.2 }], zonas: [{ de: 2, a: 5, c: "var(--leaf)" }], textos: [[3.7, -3.5, "2x − 4 > 0", "var(--leaf)"]], puntos: [[2, 0, "x = 2", "var(--red)", "no"]] });

const sistema = recta("Sistema de inecuaciones: la solución es la intersección de x mayor que menos 1 y x menor o igual que 3, el intervalo de menos 1 a 3", {
  r: [-3, 5], marcas: [-3, -1, 0, 3, 5],
  tramos: [{ de: -1, a: Infinity, ci: false, t: "x > −1", c: "var(--pen)" }, { de: -Infinity, a: 3, t: "x ≤ 3", c: "var(--leaf)" }, { de: -1, a: 3, ci: false, t: "(−1, 3]", c: "var(--red)" }],
  y: 150, h: 180,
});

const segundo = ejes("Inecuación de segundo grado: x al cuadrado menos x menos 6 es menor que cero entre las raíces menos 2 y 3, donde la parábola está bajo el eje", { x: [-4, 5], y: [-7, 7], paso: 1, marcasX: [-2, 3], marcasY: [], curvas: [{ f: (x) => x * x - x - 6, c: "var(--pen)", t: "y = x² − x − 6", tx: 1.9, ty: 6.1 }], zonas: [{ de: -2, a: 3, c: "var(--red)" }], textos: [[0.5, -4, "< 0", "var(--red)"], [-3.3, 3, "> 0", "var(--leaf)"], [4.3, 3, "> 0", "var(--leaf)"]], puntos: [[-2, 0, "", "var(--red)", "", true], [3, 0, "", "var(--red)", "", true]] });

const tablaSignos = lienzo("Tabla de signos de x más 2 por x menos 3: positivo, negativo, positivo en los tres intervalos", `
  ${tx(130, 22, "(x + 2)(x − 3)", { fs: 13, c: "var(--muted)" })}
  <path d="M14 46 H246 M14 76 H246 M14 106 H246 M14 136 H246 M86 34 V146" stroke="var(--line)" stroke-width="1.5"/>
  <path d="M138 46 V146 M196 46 V146" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 3"/>
  ${tx(138, 40, "−2", { fs: 11, c: "var(--red)", w: 700 })}${tx(196, 40, "3", { fs: 11, c: "var(--red)", w: 700 })}
  ${[["x + 2", ["−", "+", "+"]], ["x − 3", ["−", "−", "+"]], ["producto", ["+", "−", "+"]]].map(([n, sg], i) => tx(50, 66 + i * 30, n, { fs: 12, w: 700, max: 66 }) + sg.map((g, k) => tx([112, 167, 222][k], 66 + i * 30, g, { fs: 17, c: g === "+" ? "var(--leaf)" : "var(--red)" })).join("")).join("")}
  ${tx(130, 164, "< 0 en (−2, 3) · > 0 fuera", { fs: 12, c: "var(--ink)" })}`);

const casosSeg = comparar("Inecuaciones de segundo grado según el signo pedido: menor que cero entre las raíces y mayor que cero fuera de ellas, si a es positivo", [
  ["ax² + bx + c < 0", ["(a > 0)", "entre raíces", "(x₁, x₂)"], "var(--red)"],
  ["ax² + bx + c > 0", ["(a > 0)", "fuera de raíces", "(−∞,x₁)∪(x₂,+∞)"], "var(--leaf)"],
], "Parábola hacia arriba");

const sinRaices = ejes("Si la parábola no corta al eje, la expresión tiene siempre el mismo signo: x al cuadrado más 1 es siempre positivo", { x: [-3, 3], y: [-2, 8], paso: 1, pasoY: 2, marcasX: [], marcasY: [], curvas: [{ f: (x) => x * x + 1, c: "var(--leaf)", t: "y = x² + 1", tx: 2.2, ty: 0.8 }], textos: [[0, 6.6, "siempre > 0", "var(--leaf)"], [0, -1.2, "x² + 1 < 0: sin solución", "var(--red)"]] });

const fraccion = pasos("Inecuación con fracción: estudiar el signo del numerador y del denominador y excluir donde se anula el denominador", ["(x − 1)/(x + 2) ≥ 0", "puntos clave: x = 1 y x = −2", "signos: + | − | +", "x = 1 sí entra (vale 0)", "x = −2 nunca (÷ 0): (−∞,−2)∪[1,+∞)"], "Cocientes: cuidado con el denominador");

const problema = pasos("Problemas con inecuaciones: palabras como como mínimo, como máximo, no más de o al menos se traducen a desigualdades", ["«al menos» → ≥", "«como máximo» / «no más de» → ≤", "«más de» → >   «menos de» → <", "Plantear, resolver, interpretar", "Elegir soluciones con sentido"], "Del lenguaje a la desigualdad");

const tarifa = ejes("Problema de tarifas con inecuación: la tarifa A es más barata que la B cuando el consumo es menor que 20", { x: [0, 40], y: [0, 26], paso: 10, pasoY: 5, marcasX: [10, 20, 30, 40], marcasY: [10, 20], ex: "min", ey: "€", curvas: [{ f: (x) => 4 + 0.5 * x, c: "var(--red)", t: "A", tx: 37, ty: 24.5 }, { f: (x) => 10 + 0.2 * x, c: "var(--pen)", t: "B", tx: 37, ty: 15.5 }], zonas: [{ de: 0, a: 20, c: "var(--red)" }], textos: [[10, 22, "A más barata", "var(--red)"]], puntos: [[20, 14, "", "var(--leaf)"]] });

const dos = ejes("Inecuación con dos incógnitas: x más y menor o igual que 4 es un semiplano, la zona bajo la recta", { x: [-1, 5], y: [-1, 5], paso: 1, marcasX: [2, 4], marcasY: [2, 4], curvas: [{ f: (x) => 4 - x, c: "var(--pen)", t: "x + y = 4", tx: 3.6, ty: 1.8 }], textos: [[1, 1, "x + y ≤ 4", "var(--leaf)"], [3.4, 3.8, "x + y > 4", "var(--muted)"]], puntos: [[0, 0, "(0,0) ✓", "var(--leaf)", "ne"]] });

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Inecuaciones",
  minutos: 105,
  objetivos: [
    "Interpretar desigualdades y expresar sus soluciones con intervalos",
    "Aplicar las propiedades de las desigualdades, en especial el cambio de sentido",
    "Resolver inecuaciones de primer grado y sistemas de inecuaciones con una incógnita",
    "Resolver inecuaciones de segundo grado con la parábola o con una tabla de signos",
    "Plantear y resolver problemas de la vida real con inecuaciones",
    "Representar inecuaciones lineales con dos incógnitas como semiplanos",
  ],
  claves: ["desigualdad", "inecuación", "intervalo", "cambio de sentido", "sistema de inecuaciones", "tabla de signos", "semiplano"],
  pregunta: {
    texto: "Una tarifa de móvil cuesta 4 € al mes más 0,50 € por minuto, y otra 10 € más 0,20 € por minuto. ¿Para qué consumos es más barata la primera? ¿La respuesta es un número o muchos?",
    respuesta: "Muchos: es una <b>inecuación</b>. 4 + 0,5x &lt; 10 + 0,2x → 0,3x &lt; 6 → <mark>x &lt; 20 minutos</mark>. La solución no es un número, sino todos los consumos menores que 20, el intervalo [0, 20).",
  },
  lectura: {
    titulo: "Vivir entre límites",
    html: `<p>Nuestra vida está llena de límites. La velocidad máxima en autovía es de 120 km/h; para subir a una atracción hay que medir al menos 1,40 m; una maleta de cabina no puede pesar más de 10 kg; para aprobar necesitas una media de 5 o más; un medicamento no debe superar cierta dosis diaria; y el presupuesto de una fiesta no puede pasar de lo que habéis reunido.</p><p>En todos estos casos no buscamos un valor exacto, sino un <b>rango de valores permitidos</b>. Las matemáticas expresan esas condiciones con <b>desigualdades</b>, y las preguntas del tipo «¿cuánto puedo…?», «¿a partir de cuándo…?» o «¿entre qué valores…?» se responden con <b>inecuaciones</b>. Su solución suele ser un intervalo, a veces dos, y en ocasiones ninguno o todos los números.</p><p>Las inecuaciones están detrás de decisiones muy prácticas: elegir la tarifa más barata según tu consumo, saber cuántas horas puedes trabajar sin pasarte de un límite, calcular la nota mínima que necesitas en el examen final o decidir cuántas entradas vender para no tener pérdidas. En este tema aprenderás a resolverlas y, sobre todo, a interpretar sus soluciones en contextos reales.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Desigualdades</h3><p>Una <b>desigualdad</b> compara dos expresiones con uno de estos signos: &lt; (menor que), &gt; (mayor que), ≤ (menor o igual que) y ≥ (mayor o igual que). Por ejemplo, 3 &lt; 7, −2 &gt; −5 o x ≥ 18. La diferencia entre &lt; y ≤ es importante: «menor que 5» no incluye el 5, mientras que «como máximo 5» sí lo incluye.</p><p>Muchas frases cotidianas son desigualdades: «los menores de 12 años» es edad &lt; 12; «al menos 1,40 m» es altura ≥ 1,40; «no más de 10 kg» es peso ≤ 10; «más de 100 personas» es n &gt; 100. Aprender a traducir estas expresiones es el primer paso para plantear problemas. Un truco para no confundir los signos: la parte abierta del símbolo apunta siempre al número <b>mayor</b>.</p>`, svg: desig },
    { html: `<h3>1.2 Inecuaciones y sus soluciones</h3><p>Una <b>inecuación</b> es una desigualdad entre expresiones algebraicas con alguna incógnita, como 2x − 4 &gt; 0. Sus <b>soluciones</b> son los valores de la incógnita que hacen cierta la desigualdad: x = 3 es solución porque 6 − 4 = 2 &gt; 0, y x = 1 no lo es porque 2 − 4 = −2.</p><p>A diferencia de las ecuaciones, que suelen tener una o dos soluciones, las inecuaciones tienen normalmente <b>infinitas soluciones</b>, que forman uno o varios <b>intervalos</b>. Las de x &gt; 2 forman la semirrecta (2, +∞): un paréntesis porque el 2 no está incluido. Si fuera x ≥ 2, sería [2, +∞). Por eso es importante dominar la notación de intervalos que viste en el tema de números reales: es el «idioma» de las soluciones de las inecuaciones.</p>${tabla(["Desigualdad", "Intervalo", "Dibujo"], [["x &gt; a", "(a, +∞)", "punto hueco, hacia la derecha"], ["x ≥ a", "[a, +∞)", "punto relleno, hacia la derecha"], ["x &lt; a", "(−∞, a)", "punto hueco, hacia la izquierda"], ["x ≤ a", "(−∞, a]", "punto relleno, hacia la izquierda"]])}`, svg: solucion },
    { html: `<h3>1.3 Propiedades de las desigualdades</h3><p>Las inecuaciones se resuelven casi igual que las ecuaciones, transformándolas en otras equivalentes. Se puede <b>sumar o restar</b> el mismo número a los dos miembros sin que cambie la desigualdad: si x − 3 &lt; 5, entonces x &lt; 8. También se puede <b>multiplicar o dividir</b> por el mismo número <b>positivo</b>: si 2x &lt; 8, entonces x &lt; 4.</p><p>Pero hay una regla de oro: si se multiplica o divide por un número <b>negativo</b>, el <mark>sentido de la desigualdad cambia</mark>. Es fácil verlo con números: 2 &lt; 5, pero al multiplicar por −3 queda −6 y −15, y −6 &gt; −15. Olvidar este giro es el error más común en las inecuaciones. Para evitarlo, una alternativa es pasar los términos de forma que la x quede con coeficiente positivo.</p>`, svg: propiedades },
    { html: `<h3>1.4 Inecuaciones de primer grado</h3><p>Una inecuación de primer grado se resuelve siguiendo los mismos pasos que una ecuación: quitar paréntesis, quitar denominadores (multiplicando por el m.c.m., que es positivo), agrupar las x en un miembro, reducir y despejar, <b>girando el signo</b> si se divide entre un negativo. La solución se expresa como desigualdad, como intervalo y con un dibujo en la recta.</p><p>Ejemplo: 3 − 2x ≥ 7. Restamos 3: −2x ≥ 4. Dividimos entre −2 y giramos: x ≤ −2. Solución: (−∞, −2]. Comprobación con un valor de la solución, x = −3: 3 + 6 = 9 ≥ 7 ✓; y con uno de fuera, x = 0: 3 ≥ 7 ✗. Esta doble comprobación, con un valor de dentro y otro de fuera, es la mejor forma de detectar si se ha olvidado girar el signo.</p>`, svg: primer, video: { id: "yPSuv-CoZ3g", titulo: "Inecuaciones de primer grado (lineales), ejemplo 1", canal: "Matemáticas profe Alex", vistas: 2193603, megusta: 0 } },
    { html: `<h3>1.5 Inecuaciones con paréntesis y denominadores</h3><p>Con expresiones más largas, el orden es el mismo que en las ecuaciones. Ejemplo: (x − 1)/2 − (x + 3)/3 &lt; 1. Multiplicamos por 6, que es positivo, así que el sentido no cambia: 3(x − 1) − 2(x + 3) &lt; 6 → 3x − 3 − 2x − 6 &lt; 6 → x &lt; 15. Solución: (−∞, 15).</p><p>Igual que en las ecuaciones, pueden aparecer casos especiales. Si las x desaparecen y queda algo <b>siempre cierto</b>, como 0 &lt; 5, la solución son <b>todos los números reales</b>. Si queda algo <b>siempre falso</b>, como 0 &gt; 5, la inecuación <b>no tiene solución</b>. Por ejemplo, 2(x + 1) &gt; 2x tiene como solución ℝ, mientras que x + 3 &lt; x no tiene ninguna.</p>`, svg: solPrimer },
    { html: `<h3>1.6 Interpretación gráfica</h3><p>Resolver 2x − 4 &gt; 0 equivale a preguntar <b>dónde la recta y = 2x − 4 está por encima del eje X</b>. La recta corta al eje en x = 2; a la derecha de ese punto, sus valores son positivos, y a la izquierda, negativos. Por tanto, la solución es x &gt; 2.</p><p>Esta forma de ver las inecuaciones es muy útil para comprobar resultados y para resolver las de segundo grado. En general, ax + b &gt; 0 tiene como solución los x a un lado del corte, y ax + b &lt; 0, los del otro lado. Si la recta sube (a &gt; 0), la parte positiva está a la derecha; si baja (a &lt; 0), está a la izquierda. Las calculadoras gráficas y GeoGebra permiten ver estas zonas coloreadas al instante.</p>`, svg: graf },
    { html: `<h3>2.1 Sistemas de inecuaciones con una incógnita</h3><p>Un <b>sistema de inecuaciones</b> son varias inecuaciones que deben cumplirse a la vez. Se resuelve cada una por separado y la solución del sistema es la <b>intersección</b> de las soluciones: los números que cumplen todas. Por ejemplo, 2x + 1 &gt; −1 y x − 3 ≤ 0 dan x &gt; −1 y x ≤ 3, cuya parte común es (−1, 3].</p><p>Para no equivocarse, conviene dibujar las soluciones de cada inecuación en la misma recta, una encima de otra, y mirar dónde se solapan. Si no se solapan, el sistema <b>no tiene solución</b>: x &gt; 5 y x &lt; 2 es imposible. Las condiciones dobles, como −3 &lt; 2x + 1 ≤ 7, son sistemas escritos de forma compacta y se pueden resolver operando en los tres miembros a la vez: −4 &lt; 2x ≤ 6, es decir, −2 &lt; x ≤ 3.</p>`, svg: sistema, video: { id: "3I4D2aQ5L1I", titulo: "Sistemas de inecuaciones con una incógnita", canal: "Susi Profe", vistas: 894330, megusta: 0 } },
    { html: `<h3>2.2 Inecuaciones de segundo grado</h3><p>Una inecuación de <b>segundo grado</b> tiene la forma ax² + bx + c &gt; 0 (o con &lt;, ≤, ≥). El método más visual se apoya en la <b>parábola</b> y = ax² + bx + c: 1) se resuelve la ecuación ax² + bx + c = 0 para hallar las <b>raíces</b>, que son los cortes con el eje X; 2) se mira si la parábola abre hacia arriba (a &gt; 0) o hacia abajo (a &lt; 0); 3) se eligen las zonas donde la parábola está por encima (para &gt; 0) o por debajo (para &lt; 0) del eje.</p><p>Ejemplo: x² − x − 6 &lt; 0. Las raíces son −2 y 3, y la parábola abre hacia arriba, así que está bajo el eje entre las raíces: la solución es (−2, 3). Si fuera ≤ 0, las raíces también entrarían: [−2, 3]. Y si fuera &gt; 0, la solución sería (−∞, −2) ∪ (3, +∞).</p>`, svg: segundo, video: { id: "uRlK2Omifsg", titulo: "Inecuaciones de segundo grado (4º ESO)", canal: "unicoos", vistas: 974205, megusta: 0 } },
    { html: `<h3>2.3 La tabla de signos</h3><p>Otro método, que sirve también para productos y cocientes, es la <b>tabla de signos</b>. Se factoriza la expresión, se marcan en la recta los puntos donde cada factor vale cero y se estudia el signo de cada factor en cada intervalo. Por la regla de los signos, el producto es positivo si hay un número par de factores negativos.</p><p>Para (x + 2)(x − 3) &lt; 0: los puntos clave son −2 y 3, que dividen la recta en tres intervalos. En (−∞, −2) los dos factores son negativos y el producto es positivo; en (−2, 3) el primero es positivo y el segundo negativo, así que el producto es negativo; en (3, +∞) ambos son positivos. La solución es (−2, 3). Un atajo práctico: basta con probar <b>un número de cada intervalo</b> en la expresión original.</p>`, svg: tablaSignos },
    { html: `<h3>2.4 Resumen de casos de segundo grado</h3><p>Cuando la ecuación tiene dos raíces x₁ &lt; x₂ y a &gt; 0, se cumple un patrón fácil de recordar: ax² + bx + c &lt; 0 <b>entre las raíces</b>, (x₁, x₂), y ax² + bx + c &gt; 0 <b>fuera de las raíces</b>, (−∞, x₁) ∪ (x₂, +∞). Si a &lt; 0, la parábola abre hacia abajo y los papeles se intercambian; también se puede multiplicar toda la inecuación por −1, girando el signo, para trabajar siempre con a positivo.</p><p>Ejemplo: −x² + 4 ≥ 0. Multiplicando por −1: x² − 4 ≤ 0. Raíces ±2; menor o igual que cero entre ellas, incluidas: [−2, 2]. Con este esquema se resuelven la mayoría de los ejercicios del curso en pocos pasos, siempre que no se olvide incluir o excluir las raíces según el signo sea estricto o no.</p>`, svg: casosSeg },
    { html: `<h3>2.5 Cuando no hay raíces o hay una doble</h3><p>Si la ecuación ax² + bx + c = 0 <b>no tiene soluciones</b> (Δ &lt; 0), la parábola no corta al eje y la expresión tiene <b>siempre el mismo signo</b>, el de a. Así, x² + 1 &gt; 0 se cumple para todos los reales (solución ℝ) y x² + 1 &lt; 0 no se cumple nunca (sin solución).</p><p>Si hay una <b>raíz doble</b> (Δ = 0), la parábola toca el eje en un solo punto. Por ejemplo, (x − 3)² ≥ 0 se cumple siempre; (x − 3)² &gt; 0 se cumple para todo x excepto x = 3, es decir, ℝ − {3}; (x − 3)² ≤ 0 solo se cumple para x = 3; y (x − 3)² &lt; 0 no tiene solución. Pensar en el dibujo de la parábola evita equivocarse en estos casos especiales, que son muy habituales en los exámenes.</p>`, svg: sinRaices },
    { html: `<h3>2.6 Inecuaciones con fracciones</h3><p>En una inecuación como (x − 1)/(x + 2) ≥ 0, la x aparece en el denominador. <b>No se puede multiplicar por el denominador</b> sin más, porque no sabemos si es positivo o negativo y no sabríamos si girar el signo. En su lugar se usa la tabla de signos: los puntos clave son donde se anula el numerador (x = 1) y el denominador (x = −2).</p><p>Estudiando signos: en (−∞, −2), positivo; en (−2, 1), negativo; en (1, +∞), positivo. Como se pide ≥ 0, entran los intervalos positivos y el punto x = 1 (donde la fracción vale 0), pero <mark>nunca el valor que anula el denominador</mark>. Solución: (−∞, −2) ∪ [1, +∞). Estas inecuaciones aparecen al estudiar medias, rendimientos o velocidades en problemas de física y economía.</p>`, svg: fraccion },
    { html: `<h3>3.1 Problemas con inecuaciones</h3><p>Para resolver problemas, lo primero es traducir bien las expresiones: «al menos», «como mínimo» y «no menos de» se escriben con <b>≥</b>; «como máximo», «no más de» y «a lo sumo», con <b>≤</b>; «más de» y «supera», con <b>&gt;</b>; «menos de», con <b>&lt;</b>. Después se plantea, se resuelve y se <b>interpreta</b> la solución en el contexto.</p><p>Ejemplo: «Llevo un 6 y un 4 en los dos primeros exámenes. ¿Qué nota necesito en el tercero para que la media sea al menos un 5?». (6 + 4 + x)/3 ≥ 5 → 10 + x ≥ 15 → x ≥ 5. Pero la nota no puede pasar de 10: la solución es [5, 10]. Muchas veces el contexto añade <b>restricciones</b>: cantidades no negativas, números enteros (personas, entradas) o valores máximos.</p>`, svg: problema },
    { html: `<h3>3.2 Comparar opciones: tarifas y beneficios</h3><p>Las inecuaciones son la herramienta ideal para <b>comparar opciones</b>. Con la tarifa A (4 € + 0,50 €/min) y la B (10 € + 0,20 €/min), A es más barata cuando 4 + 0,5x &lt; 10 + 0,2x, es decir, x &lt; 20 minutos. En la gráfica se ve que la recta de A está por debajo de la de B a la izquierda del corte.</p><p>En economía, una empresa tiene <b>beneficios</b> cuando los ingresos superan a los costes. Si fabricar camisetas cuesta 300 € fijos más 4 € por unidad y cada una se vende a 10 €, hay beneficio cuando 10x &gt; 300 + 4x, es decir, x &gt; 50 camisetas. Como x debe ser entero, hay que vender <b>al menos 51</b>. A ese valor límite se le llama umbral de rentabilidad.</p>`, svg: tarifa },
    { html: `<h3>3.3 Inecuaciones con dos incógnitas</h3><p>Una inecuación lineal con dos incógnitas, como x + y ≤ 4, tiene como soluciones todos los puntos de un <b>semiplano</b>: una de las dos mitades en que la recta x + y = 4 divide el plano. Para saber cuál, se prueba un punto que no esté en la recta, normalmente el origen (0, 0): 0 + 0 ≤ 4 es cierto, así que la solución es el semiplano que contiene al origen, incluida la recta (por ser ≤).</p><p>Este tipo de inecuaciones sirve para representar <b>restricciones</b> con dos variables: si una entrada de adulto cuesta 8 €, una infantil 5 € y tenemos 40 €, las combinaciones posibles cumplen 8x + 5y ≤ 40, con x ≥ 0 e y ≥ 0. Varias restricciones juntas forman una región de soluciones, la base de la programación lineal que se usa en logística y producción.</p>`, svg: dos },
  ],
  ejemplos: [
    { enunciado: "Resuelve 5 − 3x &lt; 2x + 20 y expresa la solución de tres formas.", pasos: ["Agrupamos: −3x − 2x &lt; 20 − 5 → −5x &lt; 15.", "Dividimos entre −5 y giramos: x &gt; −3.", "Comprobación: x = 0 → 5 &lt; 20 ✓."], resultado: "x &gt; −3; (−3, +∞); semirrecta con punto hueco en −3 hacia la derecha." },
    { enunciado: "Resuelve (x + 2)/3 − x/2 ≤ 1.", pasos: ["Multiplicamos por 6 (positivo): 2(x + 2) − 3x ≤ 6.", "2x + 4 − 3x ≤ 6 → −x ≤ 2.", "Multiplicamos por −1 y giramos: x ≥ −2."], resultado: "[−2, +∞)." },
    { enunciado: "Resuelve el sistema 3x − 1 &gt; 5, 2x + 4 ≤ 18.", pasos: ["Primera: 3x &gt; 6 → x &gt; 2.", "Segunda: 2x ≤ 14 → x ≤ 7.", "Intersección: 2 &lt; x ≤ 7."], resultado: "(2, 7]." },
    { enunciado: "Resuelve x² − 5x + 4 ≥ 0.", pasos: ["Raíces de x² − 5x + 4 = 0: x = 1 y x = 4.", "a = 1 &gt; 0: la parábola abre hacia arriba.", "≥ 0 fuera de las raíces, incluyéndolas."], resultado: "(−∞, 1] ∪ [4, +∞)." },
    { enunciado: "Resuelve (x + 3)/(x − 2) &lt; 0.", pasos: ["Puntos clave: x = −3 (numerador) y x = 2 (denominador).", "Signos: (−∞, −3): +; (−3, 2): −; (2, +∞): +.", "&lt; 0 en el intervalo negativo, sin extremos (−3 da 0 y 2 anula el denominador)."], resultado: "(−3, 2)." },
    { enunciado: "Un taxi cobra 3,50 € de bajada de bandera y 1,20 € por km. Si tienes 20 €, ¿cuántos kilómetros puedes recorrer como máximo?", pasos: ["3,50 + 1,20x ≤ 20.", "1,20x ≤ 16,50 → x ≤ 13,75.", "Además x ≥ 0."], resultado: "Hasta 13,75 km: [0; 13,75]." },
  ],
  errores: [
    "No girar el signo al multiplicar o dividir por un número negativo.",
    "Dar la solución como un solo número («x = 3») en lugar de un intervalo.",
    "Poner corchete en un extremo de una desigualdad estricta (&lt; o &gt;) o junto a ∞.",
    "En un sistema, unir las soluciones en lugar de tomar su intersección.",
    "En segundo grado, decir que x² &lt; 9 equivale a x &lt; 3, olvidando que también debe ser x &gt; −3.",
    "Multiplicar por un denominador con x sin saber su signo, o incluir el valor que lo anula.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Escribe con desigualdades: a) los mayores de edad b) temperaturas bajo cero c) como máximo 30 alumnos d) al menos 3 horas.", sol: "a) e ≥ 18. b) t &lt; 0. c) n ≤ 30. d) h ≥ 3." },
    { nivel: "básico", q: "Comprueba si x = −1 y x = 4 son soluciones de 3x − 2 &gt; 5.", sol: "x = −1: −5 &gt; 5 falso, no. x = 4: 10 &gt; 5 cierto, sí." },
    { nivel: "básico", q: "Resuelve y representa: x + 7 ≤ 3.", sol: "x ≤ −4: (−∞, −4], punto relleno en −4 y hacia la izquierda." },
    { nivel: "básico", q: "Resuelve: 4x − 5 &gt; 11.", sol: "4x &gt; 16 → x &gt; 4: (4, +∞)." },
    { nivel: "básico", q: "Resuelve: −3x ≥ 12.", sol: "Dividimos entre −3 y giramos: x ≤ −4: (−∞, −4]." },
    { nivel: "básico", q: "Resuelve: 2 − x &lt; 5.", sol: "−x &lt; 3 → x &gt; −3: (−3, +∞)." },
    { nivel: "básico", q: "Resuelve: 5x + 2 ≤ 3x + 10.", sol: "2x ≤ 8 → x ≤ 4: (−∞, 4]." },
    { nivel: "básico", q: "Escribe la inecuación cuya solución es el intervalo dibujado: punto hueco en 1 y semirrecta hacia la izquierda.", sol: "x &lt; 1, es decir, (−∞, 1)." },
    { nivel: "básico", q: "Resuelve el sistema x &gt; −2, x ≤ 5.", sol: "Intersección: (−2, 5]." },
    { nivel: "básico", q: "Resuelve: x² &lt; 16.", sol: "Raíces ±4; menor que 0 entre ellas: (−4, 4)." },
    { nivel: "básico", q: "Para subir a una atracción hay que medir al menos 1,30 m y como máximo 1,95 m. Escribe el intervalo de alturas permitidas.", sol: "1,30 ≤ h ≤ 1,95: [1,30; 1,95]." },
    { nivel: "básico", q: "¿Cuál es la solución de 2(x + 1) &gt; 2x? ¿Y de x + 3 &lt; x?", sol: "2x + 2 &gt; 2x → 2 &gt; 0, siempre cierto: ℝ. x + 3 &lt; x → 3 &lt; 0, falso: sin solución." },
    { nivel: "medio", q: "Resuelve: 3(x − 2) − 2(x + 1) ≥ 4 − x.", sol: "3x − 6 − 2x − 2 ≥ 4 − x → x − 8 ≥ 4 − x → 2x ≥ 12 → x ≥ 6: [6, +∞)." },
    { nivel: "medio", q: "Resuelve: (x − 1)/2 − (x + 3)/3 &lt; 1.", sol: "×6: 3x − 3 − 2x − 6 &lt; 6 → x &lt; 15: (−∞, 15)." },
    { nivel: "medio", q: "Resuelve: x/3 − (2 − x)/6 ≥ x/2.", sol: "×6: 2x − (2 − x) ≥ 3x → 2x − 2 + x ≥ 3x → −2 ≥ 0, falso. No tiene solución." },
    { nivel: "medio", q: "Resuelve el sistema 2x − 3 &gt; 1, 5 − x ≥ −2.", sol: "x &gt; 2; −x ≥ −7 → x ≤ 7. Solución (2, 7]." },
    { nivel: "medio", q: "Resuelve: −1 ≤ 3x + 2 &lt; 11.", sol: "Restamos 2: −3 ≤ 3x &lt; 9. Dividimos entre 3: −1 ≤ x &lt; 3: [−1, 3)." },
    { nivel: "medio", q: "Resuelve el sistema x + 4 &lt; 1, 2x &gt; 6. Interpreta.", sol: "x &lt; −3 y x &gt; 3: no se solapan. Sin solución." },
    { nivel: "medio", q: "Resuelve: x² − 3x − 10 &gt; 0.", sol: "Raíces 5 y −2; a &gt; 0, fuera de las raíces: (−∞, −2) ∪ (5, +∞)." },
    { nivel: "medio", q: "Resuelve: x² + 2x ≤ 0.", sol: "x(x + 2) ≤ 0; raíces −2 y 0; entre ellas incluidas: [−2, 0]." },
    { nivel: "medio", q: "Resuelve: −x² + x + 6 ≥ 0.", sol: "×(−1): x² − x − 6 ≤ 0. Raíces −2 y 3: [−2, 3]." },
    { nivel: "medio", q: "Resuelve: x² + x + 1 &lt; 0 y x² + x + 1 &gt; 0.", sol: "Δ = 1 − 4 &lt; 0 y a &gt; 0: la expresión es siempre positiva. La primera no tiene solución; la segunda, ℝ." },
    { nivel: "medio", q: "Llevas un 5,5 y un 7 en dos exámenes. ¿Qué nota necesitas en el tercero para tener media de notable (≥ 7)?", sol: "(5,5 + 7 + x)/3 ≥ 7 → 12,5 + x ≥ 21 → x ≥ 8,5. Y x ≤ 10: [8,5; 10]." },
    { nivel: "medio", q: "Un gimnasio A cobra 20 € al mes y 2 € por clase; otro B, 35 € al mes con clases gratis. ¿Cuántas clases al mes hacen que A sea más barato?", sol: "20 + 2x &lt; 35 → x &lt; 7,5. Con 7 clases o menos al mes conviene A." },
    { nivel: "avanzado", q: "Resuelve: (x − 4)/(x + 1) ≥ 0.", sol: "Puntos clave 4 y −1. Signos: + | − | +. ≥ 0: (−∞, −1) ∪ [4, +∞) (−1 excluido porque anula el denominador)." },
    { nivel: "avanzado", q: "Resuelve: (x − 1)(x + 2)(x − 5) &lt; 0 con una tabla de signos.", sol: "Puntos −2, 1, 5. Signos: (−∞,−2): −; (−2,1): +; (1,5): −; (5,+∞): +. Solución: (−∞, −2) ∪ (1, 5)." },
    { nivel: "avanzado", q: "Resuelve: (x − 3)² &gt; 0, (x − 3)² ≤ 0 y (x − 3)² &lt; 0.", sol: "&gt; 0: ℝ − {3}. ≤ 0: solo x = 3. &lt; 0: sin solución." },
    { nivel: "avanzado", q: "Una empresa fabrica mochilas con un coste fijo de 1.200 € y 8 € por unidad, y las vende a 23 €. ¿Cuántas debe vender para tener beneficios?", sol: "23x &gt; 1.200 + 8x → 15x &gt; 1.200 → x &gt; 80. Al menos 81 mochilas." },
    { nivel: "avanzado", q: "La altura de un cohete de agua es h(t) = −5t² + 30t (m). ¿Durante cuánto tiempo está por encima de 25 m?", sol: "−5t² + 30t &gt; 25 → t² − 6t + 5 &lt; 0 → raíces 1 y 5 → 1 &lt; t &lt; 5. Durante 4 segundos." },
    { nivel: "avanzado", q: "¿Para qué valores de k la ecuación x² + kx + 9 = 0 no tiene soluciones reales?", sol: "Δ = k² − 36 &lt; 0 → k² &lt; 36 → −6 &lt; k &lt; 6." },
    { nivel: "avanzado", q: "Representa la región de soluciones de x ≥ 0, y ≥ 0, x + y ≤ 6. ¿Qué forma tiene?", sol: "Es el triángulo de vértices (0, 0), (6, 0) y (0, 6), incluidos sus lados: primer cuadrante bajo la recta x + y = 6." },
    { nivel: "avanzado", q: "Con 40 € quieres comprar entradas de adulto (8 €) y de niño (5 €). Escribe la inecuación y di si puedes comprar 3 de adulto y 4 de niño.", sol: "8x + 5y ≤ 40. Con x = 3, y = 4: 24 + 20 = 44 &gt; 40: no alcanza." },
    { nivel: "avanzado", q: "Los lados de un rectángulo miden x y x + 4 cm. ¿Para qué valores de x el área es menor que 60 cm²?", sol: "x(x + 4) &lt; 60 → x² + 4x − 60 &lt; 0 → raíces 6 y −10 → −10 &lt; x &lt; 6. Como x &gt; 0: 0 &lt; x &lt; 6." },
  ],
  quiz: [
    { q: "«Como máximo 25» se escribe…", o: ["x < 25", "x ≤ 25", "x > 25", "x ≥ 25"], a: 1, e: "Incluye el 25 y nada mayor." },
    { q: "La solución de x > 3 es…", o: ["[3, +∞)", "(3, +∞)", "(−∞, 3)", "{3}"], a: 1, e: "El 3 no está incluido." },
    { q: "Si multiplicas los dos miembros de una desigualdad por −2…", o: ["no cambia nada", "cambia el sentido", "se convierte en ecuación", "se anula"], a: 1, e: "Por un negativo, el signo gira." },
    { q: "Solución de x − 5 ≥ 2:", o: ["x ≥ 7", "x ≤ 7", "x ≥ −3", "x > 7"], a: 0, e: "Sumamos 5." },
    { q: "Solución de −2x < 8:", o: ["x < −4", "x > −4", "x < 4", "x > 4"], a: 1, e: "Al dividir entre −2 se gira." },
    { q: "Solución de 3x ≤ −9:", o: ["x ≤ −3", "x ≥ −3", "x ≤ 3", "x ≥ 3"], a: 0, e: "Se divide entre 3, positivo." },
    { q: "¿Es x = 2 solución de 4 − x > 3?", o: ["Sí", "No", "Solo si x es positivo", "No se puede saber"], a: 1, e: "4 − 2 = 2, que no es mayor que 3." },
    { q: "La solución de un sistema de inecuaciones es…", o: ["la unión de soluciones", "la intersección de soluciones", "la primera solución", "siempre vacía"], a: 1, e: "Deben cumplirse todas." },
    { q: "Sistema x ≥ 1, x < 4:", o: ["[1, 4)", "(1, 4]", "[1, 4]", "(1, 4)"], a: 0, e: "1 incluido, 4 no." },
    { q: "Sistema x < 0, x > 2:", o: ["(0, 2)", "ℝ", "sin solución", "{0, 2}"], a: 2, e: "No hay números menores que 0 y mayores que 2." },
    { q: "−2 < x + 1 ≤ 4 equivale a…", o: ["−3 < x ≤ 3", "−1 < x ≤ 5", "−3 ≤ x < 3", "−2 < x ≤ 4"], a: 0, e: "Se resta 1 a los tres miembros." },
    { q: "Solución de x² < 9:", o: ["x < 3", "(−3, 3)", "(−∞, −3) ∪ (3, +∞)", "x < ±3"], a: 1, e: "Entre las raíces." },
    { q: "Solución de x² − 4 ≥ 0:", o: ["[−2, 2]", "(−∞, −2] ∪ [2, +∞)", "x ≥ 2", "ℝ"], a: 1, e: "Fuera de las raíces, incluidas." },
    { q: "x² + 4 > 0 se cumple…", o: ["nunca", "para x > 2", "siempre", "solo en x = 0"], a: 2, e: "x² + 4 siempre es positivo." },
    { q: "Si a > 0, ax² + bx + c < 0 se cumple…", o: ["entre las raíces", "fuera de las raíces", "en las raíces", "siempre"], a: 0, e: "La parábola está bajo el eje entre los cortes." },
    { q: "(x − 2)² ≤ 0 se cumple…", o: ["siempre", "nunca", "solo en x = 2", "para x ≥ 2"], a: 2, e: "Un cuadrado es 0 solo si la base es 0." },
    { q: "En (x + 1)/(x − 3) ≥ 0, ¿se incluye x = 3?", o: ["Sí", "No, anula el denominador", "Solo si es ≥", "Depende de x"], a: 1, e: "No se puede dividir entre 0." },
    { q: "«Al menos 100 entradas» se escribe…", o: ["n < 100", "n ≤ 100", "n ≥ 100", "n > 100"], a: 2, e: "100 o más." },
    { q: "Tarifa A: 2x + 5; B: x + 9. A es más barata si…", o: ["x < 4", "x > 4", "x < 14", "x = 4"], a: 0, e: "2x + 5 < x + 9 → x < 4." },
    { q: "Las soluciones de x + y ≤ 3 forman…", o: ["una recta", "un punto", "un semiplano", "un intervalo"], a: 2, e: "Una de las mitades del plano." },
  ],
  examen: [
    { q: "Solución de 5 − 2x ≥ 1:", o: ["x ≤ 2", "x ≥ 2", "x ≤ −2", "x ≥ −2"], a: 0, e: "−2x ≥ −4 → x ≤ 2." },
    { q: "Solución de x/2 > 3:", o: ["x > 6", "x > 1,5", "x < 6", "x > 5"], a: 0, e: "Multiplicamos por 2." },
    { q: "Sistema 2x > 4, x ≤ 6:", o: ["(2, 6]", "[2, 6)", "(2, 6)", "x > 6"], a: 0, e: "x > 2 y x ≤ 6." },
    { q: "Solución de x² − x − 2 ≤ 0:", o: ["[−1, 2]", "(−1, 2)", "(−∞, −1] ∪ [2, +∞)", "[−2, 1]"], a: 0, e: "Raíces −1 y 2; entre ellas." },
    { q: "Solución de x² + 2x + 5 < 0:", o: ["ℝ", "sin solución", "(−1, 5)", "x < −1"], a: 1, e: "Δ < 0 y a > 0: siempre positivo." },
    { q: "Una media ≥ 5 con notas 3 y 6 exige en el tercer examen…", o: ["≥ 5", "≥ 6", "≥ 4", "≥ 7"], a: 1, e: "9 + x ≥ 15." },
    { q: "Al dividir x ≤ −6 entre −3 se obtiene…", o: ["−x/3 ≥ 2", "−x/3 ≤ 2", "x ≥ 2", "x ≤ 2"], a: 0, e: "Se gira el sentido." },
    { q: "La solución de (x − 1)(x − 4) > 0 es…", o: ["(1, 4)", "(−∞, 1) ∪ (4, +∞)", "[1, 4]", "x > 4"], a: 1, e: "Producto positivo fuera de las raíces." },
  ],
  feynman: ["Qué diferencia hay entre una ecuación y una inecuación", "Por qué cambia el sentido al multiplicar por un número negativo", "Cómo se resuelve un sistema de inecuaciones", "Cómo ayuda la parábola a resolver inecuaciones de segundo grado"],
  figura: {
    titulo: "Inecuaciones: del signo al intervalo",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Resumen: primer grado, sistemas, segundo grado y problemas con inecuaciones">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Primer grado", "como una ecuación · ÷ por negativo → gira el signo", "var(--pen)"], ["Sistemas", "resolver cada una → intersección", "var(--leaf)"], ["Segundo grado", "raíces + parábola: < 0 entre, > 0 fuera (a > 0)", "var(--red)"], ["Problemas", "al menos ≥ · como máximo ≤ · interpretar", "var(--inf)"]].map(([n, f, c], i) => `<rect x="20" y="${16 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="36" y="${43 + i * 50}" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text><text x="190" y="${43 + i * 50}" font-size="15" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "gMDAtLLW5lM", titulo: "Inecuaciones de primer grado, súper fácil, para principiantes", canal: "Daniel Carreón", vistas: 3446326, megusta: 0, busqueda: "inecuaciones introducción" },
  mapa: mapa("INECUACIONES", "var(--red)", [
    ["Desigualdades", "< > ≤ ≥ · intervalos", "var(--pen)"],
    ["Primer grado", "¡gira con negativos!", "var(--red)"],
    ["Segundo grado", "parábola · tabla de signos", "var(--leaf)"],
    ["Problemas", "límites · tarifas", "var(--inf)"],
  ], 230),
  glosario: [
    ["Desigualdad", "Expresión que compara dos cantidades con <, >, ≤ o ≥."],
    ["Inecuación", "Desigualdad con una o más incógnitas."],
    ["Solución de una inecuación", "Conjunto de valores que hacen cierta la desigualdad."],
    ["Inecuaciones equivalentes", "Inecuaciones con las mismas soluciones."],
    ["Desigualdad estricta", "La que usa < o >; no incluye la igualdad."],
    ["Cambio de sentido", "Giro del signo al multiplicar o dividir por un negativo."],
    ["Intervalo", "Conjunto de números reales entre dos extremos."],
    ["Semirrecta", "Intervalo que se extiende hasta el infinito."],
    ["Sistema de inecuaciones", "Varias inecuaciones que deben cumplirse a la vez."],
    ["Intersección", "Parte común de las soluciones de un sistema."],
    ["Tabla de signos", "Esquema que estudia el signo de cada factor en cada intervalo."],
    ["Punto clave", "Valor donde un factor vale cero y puede cambiar el signo."],
    ["Semiplano", "Cada una de las dos mitades en que una recta divide el plano."],
    ["Umbral de rentabilidad", "Cantidad a partir de la cual los ingresos superan a los costes."],
  ],
  situacion: {
    titulo: "Montamos un negocio en la feria del instituto",
    reto: "Vuestro grupo tendrá un puesto en la feria solidaria del instituto (chapas, pulseras, galletas…). Debéis decidir el precio y calcular, con inecuaciones, cuántas unidades hay que vender para no perder dinero y para alcanzar el objetivo solidario.",
    pasos: [
      "Elegid el producto y averiguad los costes fijos (material, decoración) y el coste por unidad.",
      "Plantead la inecuación ingresos &gt; costes y calculad el umbral de rentabilidad para dos precios distintos.",
      "Plantead una segunda inecuación para alcanzar al menos el beneficio solidario fijado (por ejemplo, 150 €).",
      "Añadid las restricciones reales (unidades enteras, tiempo de fabricación, presupuesto máximo) como sistema de inecuaciones.",
      "Representad gráficamente ingresos y costes y señalad la zona de beneficio.",
    ],
    producto: "Un plan de negocio de una página con las inecuaciones, la gráfica y el precio y las unidades recomendados.",
    evaluacion: ["Traduce correctamente condiciones reales a inecuaciones.", "Resuelve inecuaciones y sistemas y expresa las soluciones con intervalos.", "Interpreta la solución teniendo en cuenta las restricciones del contexto.", "Comunica el plan de forma clara y argumentada."],
  },
  tarjetas: [
    ["< y ≤", "Menor que (sin incluir) y menor o igual (incluido)."],
    ["Regla de oro", "Al multiplicar o dividir por un negativo, el signo gira."],
    ["x > a", "(a, +∞), punto hueco."],
    ["x ≤ a", "(−∞, a], punto relleno."],
    ["0 < 5 tras simplificar", "Solución: todos los reales."],
    ["0 > 5 tras simplificar", "Sin solución."],
    ["Sistema de inecuaciones", "Intersección de las soluciones."],
    ["ax² + bx + c < 0 (a > 0)", "Entre las raíces."],
    ["ax² + bx + c > 0 (a > 0)", "Fuera de las raíces."],
    ["Sin raíces (Δ < 0)", "Signo constante: el de a."],
    ["Fracción con x abajo", "Tabla de signos; excluir lo que anula el denominador."],
    ["«al menos» / «como máximo»", "≥ / ≤"],
  ],
  familias: ["Buscad juntos límites reales (velocidades, edades, pesos de maletas) y escribidlos como desigualdades.", "Calculad la nota mínima que necesita en el próximo examen para alcanzar una media.", "Comparad dos tarifas de casa y decidid a partir de qué consumo conviene cada una.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido algebraico: inecuaciones de primer y segundo grado con una incógnita, sistemas de inecuaciones, inecuaciones lineales con dos incógnitas y su interpretación en contextos de consumo y economía (RD 217/2022, Matemáticas A 4º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["GeoGebra: colorear zonas donde una función es positiva o negativa.", "Plan de negocio de la feria del instituto (situación de aprendizaje).", "Juego de «verdadero o falso» con valores dentro y fuera de la solución.", "Introducción a la programación lineal con restricciones de un problema de producción."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "GeoGebra: inecuaciones", url: "https://www.geogebra.org/" },
    { t: "Proyecto Descartes: inecuaciones (INTEF)", url: "https://proyectodescartes.org/" },
  ],
  revisado: "2026-11-13",
};
