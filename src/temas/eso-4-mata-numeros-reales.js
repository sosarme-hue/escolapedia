// Matemáticas A 4º ESO · Números reales. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { F, mapa, tabla, tx, lienzo, pasos, cajas, formula, recta, comparar } = require("./_eso4L2-mata");

const conjuntos = lienzo("Conjuntos de números unos dentro de otros: naturales dentro de enteros, dentro de racionales; racionales e irracionales forman los reales", `
  <rect x="8" y="8" width="244" height="164" rx="14" fill="var(--card)" stroke="var(--inf)" stroke-width="2.5"/>${tx(130, 26, "ℝ reales", { fs: 13, c: "var(--inf)" })}
  <rect x="16" y="36" width="150" height="128" rx="12" fill="none" stroke="var(--pen)" stroke-width="2.5"/>${tx(91, 54, "ℚ racionales", { fs: 12, c: "var(--pen)" })}
  <rect x="26" y="64" width="128" height="92" rx="10" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>${tx(90, 82, "ℤ enteros", { fs: 12, c: "var(--leaf)" })}
  <rect x="36" y="92" width="108" height="56" rx="8" fill="none" stroke="var(--red)" stroke-width="2.5"/>${tx(90, 110, "ℕ naturales", { fs: 12, c: "var(--red)" })}
  ${tx(90, 136, "0 · 1 · 2 · 37", { fs: 11, w: 400 })}${tx(34, 82, "−5", { fs: 11, w: 400, a: "start" })}
  ${tx(24, 54, "3/4", { fs: 11, w: 400, a: "start" })}
  <rect x="172" y="36" width="72" height="128" rx="12" fill="none" stroke="var(--sun)" stroke-width="2.5" stroke-dasharray="5 4"/>${tx(208, 54, "𝕀 irracionales", { fs: 11, c: "var(--sun)", max: 66 })}
  ${tx(208, 86, "√2", { fs: 13, w: 400 })}${tx(208, 112, "π", { fs: 13, w: 400 })}${tx(208, 138, "e", { fs: 13, w: 400 })}`);

const decimales = comparar("Tipos de decimales: exactos y periódicos son racionales; los ilimitados no periódicos son irracionales", [
  ["Exacto", ["0,75", "= 3/4", "racional"], "var(--leaf)"],
  ["Periódico", ["0,333…", "= 1/3", "racional"], "var(--pen)"],
  ["Sin periodo", ["1,41421…", "= √2", "irracional"], "var(--red)"],
], "¿Qué decimal es?");

const pitagoras = lienzo("Construcción de raíz de 2 en la recta: un cuadrado de lado 1 tiene diagonal raíz de 2 y con el compás se lleva a la recta", `
  <path d="M14 140 H250" stroke="var(--ink)" stroke-width="2"/>
  ${[0, 1, 2].map((k) => `<path d="M${40 + k * 80} 135 V145" stroke="var(--ink)" stroke-width="1.5"/>${tx(40 + k * 80, 160, k, { fs: 12, w: 400 })}`).join("")}
  <rect x="40" y="60" width="80" height="80" fill="var(--pen)" fill-opacity=".12" stroke="var(--pen)" stroke-width="2"/>
  <path d="M40 140 L120 60" stroke="var(--red)" stroke-width="3"/>
  <path d="M120 60 A113 113 0 0 1 153 140" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="153" cy="140" r="5" fill="var(--red)"/>${tx(160, 128, "√2 ≈ 1,414", { fs: 12, c: "var(--red)", a: "start" })}
  ${tx(70, 94, "√2", { fs: 13, c: "var(--red)" })}${tx(80, 52, "lado 1", { fs: 11, c: "var(--pen)" })}${tx(130, 24, "La diagonal mide √(1² + 1²) = √2", { fs: 12, c: "var(--muted)" })}`);

const ordenar = recta("Varios números reales ordenados en la recta: menos tres medios, cero coma cinco, raíz de dos, e y pi", {
  r: [-2, 4], marcas: [-2, -1, 0, 1, 2, 3, 4],
  puntos: [{ x: -1.5, t: "−3/2", c: "var(--pen)" }, { x: 0.5, t: "0,5", c: "var(--leaf)" }, { x: 1.414, t: "√2", c: "var(--red)", abajo: true }, { x: 2.718, t: "e", c: "var(--inf)" }, { x: 3.1416, t: "π", c: "var(--red)", abajo: true }],
  titulo: "Cada número real es un punto de la recta", h: 170, y: 100,
});

const intervalos = recta("Intervalo cerrado de menos uno a tres con puntos rellenos e intervalo abierto de uno a cuatro con puntos huecos", {
  r: [-3, 5], marcas: [-3, -1, 0, 1, 3, 5],
  tramos: [{ de: -1, a: 3, t: "[−1, 3] cerrado", c: "var(--pen)" }, { de: 1, a: 4.4, ci: false, ca: false, t: "(1, 4,4) abierto", c: "var(--red)" }],
  y: 130, h: 170,
});

const semirrectas = recta("Semirrectas: x mayor o igual que 2 hacia la derecha, x menor que menos 1 hacia la izquierda", {
  r: [-4, 5], marcas: [-4, -1, 0, 2, 5],
  tramos: [{ de: 2, a: Infinity, t: "[2, +∞)", c: "var(--leaf)" }, { de: -Infinity, a: -1, ca: false, t: "(−∞, −1)", c: "var(--inf)" }],
  y: 130, h: 170,
});

const unionInter = recta("Unión e intersección de dos intervalos: la intersección es la parte común entre 1 y 3", {
  r: [-2, 6], marcas: [-2, 0, 1, 3, 5, 6],
  tramos: [{ de: -2, a: 3, t: "A = [−2, 3]", c: "var(--pen)" }, { de: 1, a: 5, ca: false, t: "B = [1, 5)", c: "var(--leaf)" }, { de: 1, a: 3, t: "A ∩ B = [1, 3]", c: "var(--red)" }],
  y: 150, h: 180,
});

const valorAbs = recta("Valor absoluto como distancia al cero: menos cuatro y cuatro están a la misma distancia", {
  r: [-5, 5], marcas: [-4, 0, 4],
  tramos: [{ de: -4, a: 0, t: "distancia 4", c: "var(--pen)" }, { de: 0, a: 4, t: "distancia 4", c: "var(--red)" }],
  pie: "|−4| = |4| = 4", y: 110, h: 160,
});

const redondeo = comparar("Truncar y redondear pi a centésimas: truncar da 3,14 y redondear también 3,14 porque la cifra siguiente es 1", [
  ["Truncar", ["3,14159…", "corta: 3,14", "sin mirar"], "var(--pen)"],
  ["Redondear", ["3,14159…", "mira el 1 < 5", "queda 3,14"], "var(--leaf)"],
  ["Redondear", ["2,6666…", "mira el 6 ≥ 5", "queda 2,67"], "var(--red)"],
], "Aproximar a centésimas");

const errores = formula("Error absoluto y error relativo", "Eₐ = |real − aprox.|", ["Eᵣ = Eₐ / |valor real|", "cuanto menor es Eᵣ, mejor es la medida", "en % : Eᵣ · 100"], "var(--red)");

const cifras = cajas("Medidas con su precisión: regla en milímetros, balanza en gramos, cronómetro en centésimas y cinta en centímetros", [
  ["Regla", ["precisión 1 mm", "12,7 cm"]], ["Báscula", ["precisión 0,1 kg", "58,4 kg"]],
  ["Cronómetro", ["precisión 0,01 s", "12,85 s"]], ["Cinta", ["precisión 1 cm", "1,63 m"]],
], "Cada aparato tiene su precisión");

const raices = pasos("Operar con raíces: extraer factores, sumar radicales semejantes y racionalizar", ["√12 = √(4·3) = 2√3", "2√3 + 5√3 = 7√3", "√2 · √8 = √16 = 4", "1/√2 = √2/2  (racionalizar)"], "Radicales en 4 movimientos");

const generatriz = pasos("Pasos para hallar la fracción generatriz de 0,4545…: llamar x, multiplicar por 100, restar y despejar", ["x = 0,4545…", "100x = 45,4545…", "100x − x = 45", "99x = 45 → x = 45/99", "simplificar: x = 5/11"], "Generatriz de 0,4545…");

const calcu = cajas("La calculadora muestra solo unas cifras: pi, raíz de 2, un tercio y la tecla de fracción", [
  ["π", ["3.141592654", "aproximado"], "var(--red)"], ["√2", ["1.414213562", "aproximado"], "var(--red)"],
  ["1 ÷ 3", ["0.333333333", "periódico"], "var(--pen)"], ["S⇔D", ["1/3", "valor exacto"], "var(--leaf)"],
], "Lo que enseña la pantalla");

const mapaVida = cajas("Números reales en la vida diaria: euros con dos decimales, notas con un decimal, pi en ruedas y la proporción áurea en diseño", [
  ["Dinero", ["2 decimales", "12,49 €"]], ["Notas", ["1 decimal", "6,8"]],
  ["Ruedas", ["π ≈ 3,1416", "perímetro 2πr"]], ["Diseño", ["φ ≈ 1,618", "número de oro"]],
], "Los reales están en todas partes");

module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Números reales",
  minutos: 110,
  objetivos: [
    "Clasificar números en naturales, enteros, racionales e irracionales y justificarlo",
    "Pasar de decimal a fracción, incluidos los periódicos puros y mixtos",
    "Representar y ordenar números reales en la recta",
    "Escribir intervalos y semirrectas, y operar con uniones e intersecciones",
    "Aproximar por truncamiento y redondeo y calcular errores absoluto y relativo",
    "Operar con radicales sencillos y usar el valor absoluto como distancia",
  ],
  claves: ["número racional", "número irracional", "decimal periódico", "recta real", "intervalo", "valor absoluto", "redondeo", "error relativo"],
  pregunta: {
    texto: "La diagonal de un cuadrado de 1 m de lado mide √2 m. ¿Se puede escribir esa medida exacta como una fracción, por ejemplo 99/70?",
    respuesta: "No. 99/70 = 1,41428… se acerca mucho, pero <mark>√2 = 1,41421…</mark> tiene infinitas cifras decimales sin periodo, así que <b>no es una fracción</b>: es un número <b>irracional</b>. Junto con los racionales forma el conjunto de los <b>números reales</b>.",
  },
  lectura: {
    titulo: "El número que hizo temblar a los pitagóricos",
    html: `<p>Hace unos 2.500 años, en el sur de Italia, una escuela de pensadores, los pitagóricos, defendía que «todo es número». Para ellos, cualquier longitud podía medirse comparándola con otra mediante una fracción: tantas veces esto, tantas partes de aquello. Era una idea preciosa y ordenada.</p><p>Según la tradición, uno de sus miembros, Hípaso de Metaponto, descubrió que la diagonal de un cuadrado y su lado <b>no pueden medirse con una misma unidad</b>, por pequeña que sea. Dicho con lenguaje de hoy: √2 no es una fracción. Cuenta la leyenda (seguramente exagerada) que el descubrimiento se quiso mantener en secreto.</p><p>Hoy esos números «inconmensurables» nos rodean: π aparece cada vez que medimos una rueda o una pizza, √2 está en el formato de los folios A4 (el lado largo es √2 veces el corto) y el número de oro φ aparece en diseño y en la naturaleza. Las calculadoras solo muestran unas pocas cifras, por eso en la vida real <b>aproximamos</b> y debemos saber cuánto nos equivocamos. En este tema aprenderás a ordenar todo este «zoo» de números, a situarlo en la recta y a trabajar con aproximaciones de forma responsable.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 De los naturales a los reales</h3><p>Los números se han ido ampliando a medida que se necesitaban. Los <b>naturales</b> ℕ = {0, 1, 2, 3, …} sirven para contar. Para expresar deudas, temperaturas bajo cero o plantas de un garaje se necesitan los <b>enteros</b> ℤ = {…, −2, −1, 0, 1, 2, …}. Para repartir una pizza o hablar de 3/4 de hora aparecen los <b>racionales</b> ℚ, que son todos los números que se pueden escribir como fracción a/b con a y b enteros y b ≠ 0.</p><p>Cada conjunto contiene al anterior: todo natural es entero (5 = 5) y todo entero es racional (−3 = −3/1). Pero hay números que no son fracciones, como √2, π o el número e: son los <b>irracionales</b> 𝕀. La unión de racionales e irracionales forma los <mark>números reales ℝ</mark>, que son todos los que se pueden situar en una recta.</p>`, svg: conjuntos },
    { html: `<h3>1.2 Racionales e irracionales a través de sus decimales</h3><p>La forma más rápida de reconocer un número es mirar su <b>expresión decimal</b>. Si el decimal es <b>exacto</b> (0,75) o <b>periódico</b> (0,333… o 2,1666…), el número es racional: siempre se puede convertir en fracción. Si tiene <b>infinitas cifras sin ningún bloque que se repita</b>, es irracional.</p><p>Ojo con las apariencias: 0,101001000100001… tiene un patrón, pero no un periodo (el bloque que se repite no es siempre el mismo), así que es irracional. Y la calculadora engaña: muestra √2 = 1,414213562, pero eso es solo una aproximación; las cifras siguen sin fin. Son irracionales las raíces no exactas (√3, √5, ∛2), π, e, el número de oro φ = (1 + √5)/2 y la mayoría de sus combinaciones, como 2 + √3 o 5π.</p><p>¿Y cómo se sabe que √2 no tiene periodo, si nunca podemos ver todas sus cifras? Se demuestra con un razonamiento: si √2 fuera una fracción irreducible a/b, entonces a² = 2b², así que a sería par; escribiendo a = 2k se llega a que b también es par, y la fracción no sería irreducible. Esa contradicción prueba que <mark>√2 no puede ser fracción</mark>. Es una de las demostraciones más antiguas y bonitas de las matemáticas.</p>`, svg: decimales },
    { html: `<h3>1.3 De decimal a fracción</h3><p>Todo decimal exacto o periódico tiene una <b>fracción generatriz</b>. Para un <b>exacto</b> se pone el número sin coma en el numerador y la unidad seguida de tantos ceros como decimales: 0,36 = 36/100 = 9/25.</p><p>Para un <b>periódico puro</b> se escribe x = 0,454545…; como el periodo tiene 2 cifras, se multiplica por 100: 100x = 45,4545… Al restar, 99x = 45 y x = 45/99 = 5/11. La regla práctica: <mark>número sin coma menos la parte entera, partido por tantos 9 como cifras tenga el periodo</mark>. En un <b>periódico mixto</b>, como 1,2333…, se añaden tantos 0 como cifras tenga el anteperiodo: (123 − 12)/90 = 111/90 = 37/30. Comprueba siempre dividiendo con la calculadora.</p>${tabla(["Decimal", "Tipo", "Fracción"], [["0,36", "exacto", "36/100 = 9/25"], ["0,4545…", "periódico puro", "45/99 = 5/11"], ["1,2333…", "periódico mixto", "(123 − 12)/90 = 37/30"]])}`, svg: generatriz },
    { html: `<h3>1.4 Los irracionales también tienen su sitio</h3><p>Un número irracional no se puede escribir con todas sus cifras, pero sí se puede <b>situar exactamente</b> en la recta. El truco es el teorema de Pitágoras: un cuadrado de lado 1 tiene una diagonal de √(1² + 1²) = √2. Si apoyamos el compás en el 0 y llevamos la diagonal sobre la recta, marcamos √2 sin ningún error.</p><p>Con la misma idea se obtienen √5 (triángulo de catetos 2 y 1), √10 (catetos 3 y 1) y muchas más. Esto demuestra que la recta tiene «huecos» entre los racionales que solo rellenan los irracionales: por eso decimos que los reales <mark>completan la recta</mark>. A cada punto le corresponde un número real y a cada real, un punto.</p>`, svg: pitagoras },
    { html: `<h3>1.5 Ordenar y comparar números reales</h3><p>En la recta real, un número es <b>mayor</b> cuanto más a la derecha está. Para comparar números escritos de formas distintas, lo más cómodo es pasarlos todos a decimal con suficientes cifras: −3/2 = −1,5; √2 ≈ 1,414; e ≈ 2,718; π ≈ 3,142. Así se ve enseguida que −3/2 &lt; 0,5 &lt; √2 &lt; e &lt; π.</p><p>Con los negativos hay que tener cuidado: −7 &lt; −2 porque −7 está más a la izquierda (hace más frío a −7 °C). Entre dos números reales distintos <mark>siempre hay infinitos números</mark>, racionales e irracionales: entre 1,41 y 1,42 están 1,415, 1,4142, √2… Esta propiedad se llama densidad.</p>`, svg: ordenar },
    { html: `<h3>2.1 Intervalos: trozos de recta</h3><p>Muchas veces no interesa un número sino un <b>conjunto de números seguidos</b>: las edades para entrar a un concierto, las temperaturas de una alerta o las notas de un aprobado. Para eso se usan los <b>intervalos</b>. Un intervalo <b>cerrado</b> [a, b] incluye los extremos (a ≤ x ≤ b) y se dibuja con puntos rellenos. Uno <b>abierto</b> (a, b) no los incluye (a &lt; x &lt; b) y se dibuja con puntos huecos. También hay intervalos <b>semiabiertos</b>: [a, b) o (a, b].</p><p>Por ejemplo, «aprobado» es [5, 10] si el 5 cuenta y el 10 también; «entre 18 y 30 años, sin cumplir 30» es [18, 30).</p>${tabla(["Notación", "Desigualdad", "Extremos"], [["[a, b]", "a ≤ x ≤ b", "los dos incluidos"], ["(a, b)", "a &lt; x &lt; b", "ninguno incluido"], ["[a, b)", "a ≤ x &lt; b", "solo a"], ["(a, b]", "a &lt; x ≤ b", "solo b"]])}`, svg: intervalos, video: { id: "tyt6T1Ukq3w", titulo: "Representación gráfica de intervalos", canal: "Matemáticas profe Alex", vistas: 0, megusta: 0 } },
    { html: `<h3>2.2 Semirrectas: hacia el infinito</h3><p>Cuando el conjunto no tiene final se usa el símbolo <b>∞</b> (infinito). «Mayores de edad» es x ≥ 18, que se escribe [18, +∞). «Temperaturas bajo cero» es x &lt; 0, que se escribe (−∞, 0). El infinito no es un número, es una dirección: por eso <mark>junto a ∞ siempre va paréntesis</mark>, nunca corchete.</p><p>Estas semirrectas son la forma natural de escribir las soluciones de las inecuaciones que verás más adelante, y aparecen en normas cotidianas: velocidades máximas, alturas mínimas en las atracciones, consumos a partir de cierto valor en una factura…</p>`, svg: semirrectas },
    { html: `<h3>2.3 Unión e intersección de intervalos</h3><p>Dos intervalos se pueden combinar. La <b>intersección</b> A ∩ B es la parte <b>común</b>: los números que están en los dos a la vez. La <b>unión</b> A ∪ B reúne <b>todos</b> los números que están en alguno de ellos. Si A = [−2, 3] y B = [1, 5), entonces A ∩ B = [1, 3] y A ∪ B = [−2, 5).</p><p>El método más seguro es dibujar los dos intervalos en la misma recta, uno encima del otro, y mirar. Si no se tocan, la intersección está vacía (∅) y la unión se escribe como dos trozos: [0, 2] ∪ [4, 6]. En la vida real, la intersección responde a «cumple las dos condiciones» (tener más de 12 años <b>y</b> medir más de 1,40 m) y la unión, a «cumple alguna».</p>`, svg: unionInter },
    { html: `<h3>2.4 Valor absoluto y distancias</h3><p>El <b>valor absoluto</b> de un número, |x|, es su distancia al cero, sin importar el lado: |−4| = 4 y |4| = 4. Por eso nunca es negativo. La distancia entre dos números a y b es <mark>|a − b|</mark>: entre −3 y 5 hay |−3 − 5| = 8 unidades.</p><p>El valor absoluto permite describir tolerancias. Una pieza que debe medir 50 mm con un margen de 0,2 mm cumple |x − 50| ≤ 0,2, es decir, x ∈ [49,8; 50,2]. Así, «estar cerca de» se convierte en un intervalo centrado en un valor, que es exactamente lo que hacen las fábricas y los laboratorios con sus controles de calidad.</p>`, svg: valorAbs },
    { html: `<h3>3.1 Aproximar: truncar y redondear</h3><p>Como los irracionales tienen infinitas cifras y en la vida no podemos manejar infinitos decimales, se <b>aproxima</b>. <b>Truncar</b> es cortar en la cifra deseada sin más: π truncado a centésimas es 3,14. <b>Redondear</b> es mirar la cifra siguiente: si es 5 o más, se sube una unidad; si es menor que 5, se deja igual. 2,6666… redondeado a centésimas es 2,67 y truncado sería 2,66.</p><p>El redondeo suele ser mejor porque el error es menor (como máximo media unidad de la última cifra). Por eso los precios, las notas medias y los resultados científicos se redondean. Hay que decidir <mark>a qué cifra</mark> se aproxima según el contexto: los euros, a céntimos; la altura de una persona, a centímetros; una distancia entre ciudades, a kilómetros.</p>`, svg: redondeo, video: { id: "HrW_0UZd5k8", titulo: "Redondear y truncar números decimales", canal: "Ruben Sebastian", vistas: 0, megusta: 0 } },
    { html: `<h3>3.2 Error absoluto y error relativo</h3><p>Al aproximar se comete un error. El <b>error absoluto</b> es la diferencia, en valor absoluto, entre el valor real y la aproximación: si π ≈ 3,14, Eₐ = |3,14159… − 3,14| ≈ 0,0016. Se mide en las mismas unidades que la magnitud.</p><p>Pero un error de 1 cm no es igual de grave midiendo una mesa que midiendo un tornillo. Por eso se usa el <b>error relativo</b>: Eᵣ = Eₐ / |valor real|, que suele expresarse en porcentaje. Medir 2 m con 1 cm de error supone un 0,5 %; medir 4 cm con 1 cm de error, un 25 %. <mark>La mejor medida es la de menor error relativo</mark>. Cuando no se conoce el valor real, se usa la <b>cota de error</b>: si redondeamos a décimas, el error es como mucho 0,05.</p>`, svg: errores, video: { id: "l69yxD718Jo", titulo: "Qué es el error absoluto y el error relativo", canal: "unProfesor", vistas: 763098, megusta: 0 } },
    { html: `<h3>3.3 Precisión y cifras con sentido</h3><p>Todo instrumento tiene una <b>precisión</b>: la división más pequeña que puede medir. Una regla escolar mide milímetros; una báscula de baño, décimas de kilo; un cronómetro deportivo, centésimas de segundo. Dar un resultado con más cifras de las que permite el aparato es <b>engañoso</b>: si la báscula marca 58,4 kg, no tiene sentido decir 58,4173 kg.</p><p>Al operar con medidas también hay que redondear el resultado con sentido común. Si un tablero mide 1,23 m por 0,87 m, la calculadora da 1,0701 m², pero lo razonable es <mark>1,07 m²</mark>. Esta forma de pensar es la que se usa en ciencias, en tecnología y en cualquier presupuesto de una obra.</p>`, svg: cifras },
    { html: `<h3>3.4 Radicales: operar sin aproximar</h3><p>A veces conviene trabajar con los irracionales <b>sin pasarlos a decimal</b>, para no acumular errores. Un <b>radical</b> se puede simplificar sacando factores: √12 = √(4 · 3) = 2√3. Solo se pueden sumar radicales <b>semejantes</b> (mismo índice y mismo radicando): 2√3 + 5√3 = 7√3, pero √2 + √3 no se puede juntar.</p><p>Para multiplicar raíces del mismo índice se multiplican los radicandos: √2 · √8 = √16 = 4. Y si hay una raíz en el denominador, se <b>racionaliza</b> multiplicando arriba y abajo por esa raíz: 1/√2 = √2/2. Estas reglas evitan errores de redondeo y dan <mark>resultados exactos</mark>, algo muy útil en geometría.</p>`, svg: raices },
    { html: `<h3>3.5 Números reales y calculadora</h3><p>La calculadora es una gran ayuda, pero hay que saber leerla. Su pantalla solo tiene 10 o 12 cifras, así que cuando muestra 1,414213562 para √2 o 3,141592654 para π está enseñando una <b>aproximación</b>: el número real sigue con infinitas cifras. Con 1 ÷ 3 ocurre algo parecido: 0,333333333 es un periódico cortado.</p><p>Muchas calculadoras científicas tienen una tecla (S⇔D o a b/c) que alterna entre la forma decimal y la <b>forma exacta</b> en fracción o con raíces. Es buena costumbre <mark>trabajar con valores exactos hasta el final</mark> y redondear solo el resultado, porque si se redondea en cada paso los errores se acumulan. Por ejemplo, al calcular (√2)² con 1,41 se obtiene 1,9881 en lugar de 2. Usa la memoria (Ans) para encadenar operaciones sin copiar cifras a mano.</p>`, svg: calcu },
    { html: `<h3>3.6 Los números reales en tu día a día</h3><p>Aunque no lo parezca, usas números reales constantemente. El dinero se expresa con dos decimales; las notas, con uno; las básculas de cocina, en gramos. π aparece al calcular el perímetro de una rueda de bici (2πr) o la superficie de una pizza (πr²); √2, en el formato DIN A de los folios; y el número de oro φ ≈ 1,618, en logotipos, fotografía y arquitectura.</p><p>Saber qué tipo de número tienes delante, situarlo en la recta y aproximarlo con el error justo es una competencia básica para leer una factura, entender una noticia con datos o hacer un proyecto de tecnología. Los temas siguientes (potencias, porcentajes, ecuaciones) se apoyan en todo lo que has visto aquí.</p>`, svg: mapaVida },
  ],
  ejemplos: [
    { enunciado: "Clasifica los números 7, −3, 2/5, 0,121212…, √9, √7 y π/2 en el conjunto más pequeño al que pertenecen.", pasos: ["7 es natural (y por tanto entero, racional y real).", "−3 es entero, pero no natural.", "2/5 = 0,4 y 0,121212… = 12/99 son racionales no enteros.", "√9 = 3: aunque lleva raíz, es natural.", "√7 = 2,6457… y π/2 = 1,5707… tienen infinitas cifras sin periodo: irracionales."], resultado: "ℕ: 7, √9 · ℤ: −3 · ℚ: 2/5, 0,1212… · 𝕀: √7, π/2." },
    { enunciado: "Halla la fracción generatriz de 2,4777…", pasos: ["Es periódico mixto: parte entera 2, anteperiodo 4, periodo 7.", "Número sin coma hasta el final del primer periodo: 247. Le restamos lo que hay antes del periodo: 24.", "Denominador: un 9 por la cifra del periodo y un 0 por la del anteperiodo: 90.", "(247 − 24)/90 = 223/90. Comprobación: 223 : 90 = 2,4777…"], resultado: "2,4777… = 223/90." },
    { enunciado: "Escribe como intervalo y dibuja: «números mayores que −2 y menores o iguales que 5».", pasos: ["La condición es −2 &lt; x ≤ 5.", "−2 no está incluido: paréntesis y punto hueco.", "5 sí está incluido: corchete y punto relleno."], resultado: "(−2, 5]." },
    { enunciado: "Si A = [−1, 4) y B = (2, 7], calcula A ∩ B y A ∪ B.", pasos: ["Dibujamos ambos en la misma recta.", "La parte común empieza en 2 (no incluido, por B) y termina en 4 (no incluido, por A).", "Juntos cubren desde −1 (incluido) hasta 7 (incluido)."], resultado: "A ∩ B = (2, 4); A ∪ B = [−1, 7]." },
    { enunciado: "Aproxima √5 = 2,236067… a centésimas por redondeo y calcula los errores absoluto y relativo.", pasos: ["La cifra de las milésimas es 6 ≥ 5: se sube, 2,24.", "Eₐ = |2,236067 − 2,24| = 0,003933.", "Eᵣ = 0,003933 / 2,236067 ≈ 0,00176, es decir, un 0,18 %."], resultado: "√5 ≈ 2,24 con Eₐ ≈ 0,0039 y Eᵣ ≈ 0,18 %." },
    { enunciado: "Simplifica 3√8 − √18 + √50.", pasos: ["√8 = √(4 · 2) = 2√2, así que 3√8 = 6√2.", "√18 = √(9 · 2) = 3√2.", "√50 = √(25 · 2) = 5√2.", "Son semejantes: 6√2 − 3√2 + 5√2 = 8√2."], resultado: "8√2 ≈ 11,31." },
  ],
  errores: [
    "Pensar que √9 o √(16/25) son irracionales porque «llevan raíz»: son exactas (3 y 4/5).",
    "Creer que la calculadora da π exacto: 3,141592654 es solo una aproximación.",
    "Poner corchete junto al infinito, como [3, +∞]: el infinito siempre va con paréntesis.",
    "Confundir unión e intersección: la intersección es solo lo común; la unión, todo junto.",
    "Redondear dos veces seguidas (2,346 → 2,35 → 2,4) en lugar de redondear directamente (2,3).",
    "Sumar radicales no semejantes: √2 + √3 no es √5.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Clasifica: 15, −8, 3/4, 0,6, √16, √11, 2π, −0,25.", sol: "Naturales: 15 y √16 = 4. Enteros (no naturales): −8. Racionales no enteros: 3/4, 0,6 y −0,25. Irracionales: √11 (raíz no exacta) y 2π." },
    { nivel: "básico", q: "Indica si es racional o irracional y por qué: a) 0,125 b) 0,2525… c) 3,1415926… (cifras de π) d) 1,010010001…", sol: "a) Racional: decimal exacto (1/8). b) Racional: periódico puro (25/99). c) Irracional: es π, sin periodo. d) Irracional: tiene patrón, pero no un periodo que se repita igual." },
    { nivel: "básico", q: "Escribe la fracción irreducible de 0,45 y de 2,5.", sol: "0,45 = 45/100 = 9/20. 2,5 = 25/10 = 5/2." },
    { nivel: "básico", q: "Halla la fracción generatriz de 0,777…", sol: "Periódico puro con periodo de una cifra: x = 7/9. Comprobación: 7 : 9 = 0,777…" },
    { nivel: "básico", q: "Ordena de menor a mayor: 1,5; √2; −1/3; −0,4; π/2.", sol: "En decimal: 1,5; 1,414; −0,333; −0,4; 1,571. Orden: −0,4 &lt; −1/3 &lt; √2 &lt; 1,5 &lt; π/2." },
    { nivel: "básico", q: "Escribe como intervalo: a) −1 ≤ x ≤ 6 b) 0 &lt; x &lt; 3 c) x ≥ 4 d) x &lt; −2.", sol: "a) [−1, 6]. b) (0, 3). c) [4, +∞). d) (−∞, −2)." },
    { nivel: "básico", q: "Escribe con desigualdades: a) [2, 9) b) (−5, 0] c) (−∞, 7].", sol: "a) 2 ≤ x &lt; 9. b) −5 &lt; x ≤ 0. c) x ≤ 7." },
    { nivel: "básico", q: "Calcula: |−12|, |7 − 10|, |−3 + 8| y la distancia entre −6 y 2.", sol: "|−12| = 12; |7 − 10| = |−3| = 3; |−3 + 8| = 5; distancia |−6 − 2| = |−8| = 8." },
    { nivel: "básico", q: "Redondea 4,3681 a décimas, centésimas y milésimas.", sol: "Décimas: 4,4 (la cifra siguiente es 6). Centésimas: 4,37 (siguiente 8). Milésimas: 4,368 (siguiente 1)." },
    { nivel: "básico", q: "Trunca y redondea a centésimas 7,4962.", sol: "Truncar: 7,49. Redondear: la cifra siguiente es 6, así que 7,49 + 0,01 = 7,50." },
    { nivel: "básico", q: "Una entrada de cine para jóvenes es válida «de 14 a 25 años, ambos incluidos». Escribe el intervalo de edades.", sol: "[14, 25]." },
    { nivel: "básico", q: "Simplifica √20 y √45.", sol: "√20 = √(4 · 5) = 2√5. √45 = √(9 · 5) = 3√5." },
    { nivel: "medio", q: "Halla la fracción generatriz de 1,3636… y de 0,8333…", sol: "1,3636…: (136 − 1)/99 = 135/99 = 15/11. 0,8333…: periódico mixto, (83 − 8)/90 = 75/90 = 5/6." },
    { nivel: "medio", q: "Calcula 0,333… + 0,666… usando fracciones. ¿Qué observas?", sol: "1/3 + 2/3 = 3/3 = 1. Se obtiene que 0,999… = 1: son dos escrituras del mismo número." },
    { nivel: "medio", q: "Dibuja en la recta √5 usando un triángulo rectángulo. Explica los catetos elegidos.", sol: "Catetos 2 y 1: hipotenusa √(4 + 1) = √5. Se dibuja el triángulo con el cateto de 2 sobre la recta desde 0, el de 1 vertical en el 2, y con el compás centrado en 0 se lleva la hipotenusa a la recta. Cae en ≈ 2,236." },
    { nivel: "medio", q: "Si A = [−3, 2] y B = (0, 5), calcula A ∩ B y A ∪ B.", sol: "Parte común: de 0 (no incluido) a 2 (incluido): A ∩ B = (0, 2]. Unión: A ∪ B = [−3, 5)." },
    { nivel: "medio", q: "Calcula (−∞, 4) ∩ [1, +∞) y (−∞, −1] ∪ (−1, 3).", sol: "(−∞, 4) ∩ [1, +∞) = [1, 4). La unión es (−∞, 3), porque −1 queda incluido por el primero y no hay hueco." },
    { nivel: "medio", q: "Escribe como intervalo los x que cumplen |x − 3| ≤ 2. Dibújalo.", sol: "Son los números a distancia 2 o menos de 3: 1 ≤ x ≤ 5, es decir, [1, 5]." },
    { nivel: "medio", q: "Al pesar 250 g de harina, la báscula marca 248 g. Calcula el error absoluto y el relativo.", sol: "Eₐ = |250 − 248| = 2 g. Eᵣ = 2/250 = 0,008, un 0,8 %." },
    { nivel: "medio", q: "Ana mide un campo de 100 m con 0,5 m de error y Luis un lápiz de 15 cm con 0,5 cm de error. ¿Quién mide mejor?", sol: "Ana: 0,5/100 = 0,5 %. Luis: 0,5/15 ≈ 3,3 %. Mide mejor Ana: menor error relativo, aunque su error absoluto sea mayor." },
    { nivel: "medio", q: "Aproxima π por 22/7 y calcula los errores absoluto y relativo.", sol: "22/7 = 3,142857… Eₐ = |3,142857 − 3,141593| ≈ 0,00126. Eᵣ ≈ 0,00126/3,1416 ≈ 0,0004, un 0,04 %." },
    { nivel: "medio", q: "Opera y simplifica: 2√12 + √27 − √75.", sol: "2√12 = 4√3; √27 = 3√3; √75 = 5√3. Total: 4√3 + 3√3 − 5√3 = 2√3." },
    { nivel: "medio", q: "Racionaliza 6/√3 y 5/(2√5).", sol: "6/√3 = 6√3/3 = 2√3. 5/(2√5) = 5√5/(2 · 5) = √5/2." },
    { nivel: "medio", q: "Un rectángulo mide 1,24 m por 0,68 m. Calcula su área y da el resultado con sentido según la precisión de los datos.", sol: "1,24 · 0,68 = 0,8432 m². Los datos tienen centésimas de metro, así que lo razonable es 0,84 m²." },
    { nivel: "medio", q: "Encuentra tres números racionales y un irracional entre 2,3 y 2,4.", sol: "Racionales: 2,31; 2,35; 2,399. Irracional: por ejemplo √5,5 ≈ 2,345 o 2,3010010001…" },
    { nivel: "medio", q: "Un termostato mantiene la temperatura entre 19 °C y 22 °C, sin llegar a 22. Escríbelo como intervalo y con valor absoluto aproximado al centro.", sol: "Intervalo: [19, 22). El centro es 20,5 y el radio 1,5: aproximadamente |T − 20,5| ≤ 1,5 (aunque el 22 no está incluido)." },
    { nivel: "avanzado", q: "Demuestra que 0,1999… = 0,2 hallando su fracción generatriz.", sol: "Periódico mixto: (19 − 1)/90 = 18/90 = 1/5 = 0,2. Igual que 0,999… = 1, los decimales con periodo 9 son otra forma de escribir un exacto." },
    { nivel: "avanzado", q: "¿Es irracional la suma de dos irracionales? Estudia √2 + (3 − √2) y √2 + √3.", sol: "No siempre: √2 + (3 − √2) = 3, racional. En cambio √2 + √3 ≈ 3,146 es irracional. La suma puede ser de los dos tipos." },
    { nivel: "avanzado", q: "Un folio A4 mide 297 mm por 210 mm. Calcula el cociente y compáralo con √2. ¿Qué error relativo hay?", sol: "297/210 ≈ 1,41429. √2 ≈ 1,41421. Eₐ ≈ 0,00008; Eᵣ ≈ 0,00008/1,41421 ≈ 0,0055 %. El formato A está diseñado con razón √2." },
    { nivel: "avanzado", q: "Escribe como unión de intervalos los x que cumplen |x| > 3. Dibújalo.", sol: "Son los que están a más de 3 del cero: x &lt; −3 o x > 3. Resultado: (−∞, −3) ∪ (3, +∞)." },
    { nivel: "avanzado", q: "Halla el perímetro exacto de un cuadrado cuya diagonal mide 10 cm y da después una aproximación a milímetros.", sol: "Si el lado es l, la diagonal es l√2 = 10, luego l = 10/√2 = 5√2. Perímetro: 4 · 5√2 = 20√2 ≈ 28,28 cm, es decir, 28,3 cm (a milímetros)." },
    { nivel: "avanzado", q: "Calcula (2 + √3)(2 − √3) y explica por qué el resultado sirve para racionalizar 1/(2 + √3).", sol: "(2 + √3)(2 − √3) = 4 − 3 = 1 (suma por diferencia). Así, 1/(2 + √3) = (2 − √3)/1 = 2 − √3: multiplicar por el conjugado elimina la raíz del denominador." },
    { nivel: "avanzado", q: "Una pieza debe medir 25 mm con una tolerancia de ±0,05 mm. Expresa el intervalo válido, la condición con valor absoluto y di si sirven piezas de 24,96 mm y 25,06 mm.", sol: "Intervalo [24,95; 25,05]; condición |x − 25| ≤ 0,05. 24,96 sirve (|−0,04| ≤ 0,05). 25,06 no sirve (0,06 > 0,05)." },
    { nivel: "avanzado", q: "Para calcular el área de un círculo de radio 3 cm, Marta usa π ≈ 3,14 y Jorge π ≈ 3,1416. Compara sus errores absolutos en el área.", sol: "Área real 9π ≈ 28,2743 cm². Marta: 28,26 → error ≈ 0,0143 cm². Jorge: 28,2744 → error ≈ 0,0001 cm². Jorge comete un error unas 100 veces menor." },
    { nivel: "avanzado", q: "Halla x sabiendo que la fracción generatriz de 0,ab ab ab… (periodo de dos cifras) es 4/11. ¿Qué decimal es?", sol: "4/11 = 36/99, así que el periodo es 36: el decimal es 0,363636…" },
  ],
  quiz: [
    { q: "¿A qué conjunto pertenece −7?", o: ["Naturales", "Enteros", "Irracionales", "Ninguno"], a: 1, e: "Es negativo y sin decimales: entero (y también racional y real)." },
    { q: "¿Cuál de estos números es irracional?", o: ["1/4", "√25", "π", "0,333…"], a: 2, e: "π tiene infinitas cifras decimales sin periodo." },
    { q: "La fracción generatriz de 0,4545… es…", o: ["45/100", "45/99", "45/90", "4/9"], a: 1, e: "Periódico puro de dos cifras: 45/99 = 5/11." },
    { q: "La fracción generatriz de 1,2333… es…", o: ["123/99", "111/90", "1233/1000", "12/9"], a: 1, e: "(123 − 12)/90 = 111/90 = 37/30." },
    { q: "√9 es un número…", o: ["irracional", "natural", "periódico", "negativo"], a: 1, e: "√9 = 3, raíz exacta." },
    { q: "¿Qué intervalo representa −1 &lt; x ≤ 4?", o: ["[−1, 4]", "(−1, 4)", "(−1, 4]", "[−1, 4)"], a: 2, e: "−1 no incluido (paréntesis) y 4 incluido (corchete)." },
    { q: "Los números mayores o iguales que 3 se escriben…", o: ["(3, +∞)", "[3, +∞)", "[3, +∞]", "(−∞, 3]"], a: 1, e: "Corchete en el 3 y paréntesis junto al infinito." },
    { q: "[0, 5] ∩ [3, 8] =", o: ["[0, 8]", "[3, 5]", "[5, 8]", "∅"], a: 1, e: "La parte común va de 3 a 5." },
    { q: "[−2, 1) ∪ [1, 4] =", o: ["[−2, 4]", "(−2, 4)", "{1}", "[−2, 1)"], a: 0, e: "Se juntan sin hueco: el 1 entra por el segundo intervalo." },
    { q: "|−9| + |3| =", o: ["−6", "6", "12", "−12"], a: 2, e: "9 + 3 = 12." },
    { q: "La distancia entre −4 y 6 es…", o: ["2", "10", "−10", "24"], a: 1, e: "|−4 − 6| = 10." },
    { q: "Redondea 3,4762 a centésimas.", o: ["3,47", "3,48", "3,5", "3,476"], a: 1, e: "La cifra siguiente es 6: se sube a 3,48." },
    { q: "Trunca 3,4762 a décimas.", o: ["3,4", "3,5", "3,47", "3"], a: 0, e: "Truncar es cortar: 3,4." },
    { q: "Si el valor real es 50 y la aproximación 49, el error relativo es…", o: ["1", "0,2 %", "2 %", "49 %"], a: 2, e: "1/50 = 0,02 = 2 %." },
    { q: "¿Qué medida es más precisa?", o: ["1 cm de error en 4 cm", "1 cm de error en 2 m", "Las dos igual", "No se puede saber"], a: 1, e: "1/200 = 0,5 % frente a 1/4 = 25 %." },
    { q: "√12 simplificado es…", o: ["3√2", "2√3", "6", "4√3"], a: 1, e: "√(4 · 3) = 2√3." },
    { q: "√2 + √8 =", o: ["√10", "3√2", "4", "2√2"], a: 1, e: "√8 = 2√2; √2 + 2√2 = 3√2." },
    { q: "Racionalizar 4/√2 da…", o: ["2√2", "4√2", "√2/4", "8"], a: 0, e: "4√2/2 = 2√2." },
    { q: "Entre 1 y 2 hay…", o: ["ningún número", "solo 1,5", "9 números", "infinitos números"], a: 3, e: "Los reales son densos: entre dos siempre hay infinitos." },
    { q: "¿Qué número NO se puede escribir como fracción?", o: ["0,75", "−12", "√3", "2,1666…"], a: 2, e: "√3 es irracional; los otros son racionales." },
  ],
  examen: [
    { q: "¿Qué decimal es periódico mixto?", o: ["0,555…", "0,2555…", "0,25", "2,5"], a: 1, e: "Tiene anteperiodo (2) y periodo (5)." },
    { q: "x &lt; 0 se escribe…", o: ["(−∞, 0)", "(−∞, 0]", "(0, +∞)", "[0, −∞)"], a: 0, e: "Todos los negativos, sin el 0." },
    { q: "El número 2 + √5 es…", o: ["natural", "entero", "racional", "irracional"], a: 3, e: "Racional más irracional da irracional." },
    { q: "|x − 2| ≤ 1 equivale a…", o: ["[1, 3]", "(1, 3)", "[−1, 1]", "[2, 3]"], a: 0, e: "Distancia a 2 como mucho 1: de 1 a 3." },
    { q: "Al redondear a décimas, el error absoluto es como mucho…", o: ["0,1", "0,05", "0,01", "1"], a: 1, e: "Media unidad de la última cifra." },
    { q: "3√5 − √5 =", o: ["3", "2√5", "√10", "2"], a: 1, e: "Radicales semejantes: (3 − 1)√5." },
    { q: "La diagonal de un cuadrado de lado 1 mide…", o: ["2", "1,5", "√2", "π"], a: 2, e: "Pitágoras: √(1 + 1)." },
    { q: "¿Qué conjunto contiene a todos los demás?", o: ["ℕ", "ℤ", "ℚ", "ℝ"], a: 3, e: "Los reales incluyen naturales, enteros, racionales e irracionales." },
  ],
  feynman: ["Qué diferencia a un número racional de uno irracional", "Cómo se pasa un decimal periódico a fracción", "Qué es un intervalo y cuándo se usa corchete o paréntesis", "Por qué el error relativo dice más que el absoluto"],
  figura: {
    titulo: "El mapa de los números reales",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Esquema: los reales se dividen en racionales e irracionales; los racionales incluyen enteros, y estos a los naturales">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      <g ${F} font-weight="700" text-anchor="middle">
      <rect x="250" y="14" width="140" height="40" rx="10" fill="var(--inf)"/><text x="320" y="40" font-size="17" fill="#fff">Reales ℝ</text>
      <path d="M320 54 L170 92 M320 54 L470 92" stroke="var(--line)" stroke-width="3"/>
      <rect x="90" y="92" width="160" height="40" rx="10" fill="var(--pen)"/><text x="170" y="118" font-size="16" fill="#fff">Racionales ℚ</text>
      <rect x="390" y="92" width="160" height="40" rx="10" fill="var(--sun)"/><text x="470" y="118" font-size="16" fill="#fff">Irracionales 𝕀</text>
      <text x="470" y="156" font-size="13" fill="var(--ink)">decimales infinitos</text><text x="470" y="174" font-size="13" fill="var(--ink)">sin periodo</text><text x="470" y="200" font-size="15" fill="var(--sun)">√2 · π · e · φ</text>
      <path d="M130 132 L80 168 M210 132 L250 168" stroke="var(--line)" stroke-width="3"/>
      <rect x="20" y="168" width="120" height="34" rx="9" fill="var(--leaf)"/><text x="80" y="190" font-size="14" fill="#fff">Enteros ℤ</text>
      <rect x="180" y="168" width="150" height="34" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="255" y="190" font-size="13" fill="var(--pen)">Fracciones: 3/4, 0,3̂</text>
      <text x="80" y="220" font-size="12" fill="var(--red)">incluyen ℕ: 0, 1, 2…</text></g></svg>`,
  },
  video: { id: "G-yn4gjjn60", titulo: "Clasificación de los números (naturales, enteros, racionales…)", canal: "Estudia Con Marisol", vistas: 484609, megusta: 16464, busqueda: "clasificación de los números reales" },
  mapa: mapa("NÚMEROS REALES", "var(--inf)", [
    ["Tipos", "ℕ ⊂ ℤ ⊂ ℚ · 𝕀", "var(--pen)"],
    ["Recta real", "ordenar · densidad", "var(--leaf)"],
    ["Intervalos", "[a, b] · (a, b) · ∪ · ∩", "var(--red)"],
    ["Aproximar", "redondeo · errores", "var(--sun)"],
  ], 230),
  glosario: [
    ["Número natural", "Número para contar: 0, 1, 2, 3…"],
    ["Número entero", "Natural o su opuesto negativo: …, −2, −1, 0, 1, 2…"],
    ["Número racional", "El que se puede escribir como fracción a/b con b ≠ 0; su decimal es exacto o periódico."],
    ["Número irracional", "Número real que no es fracción; tiene infinitas cifras decimales sin periodo."],
    ["Número real", "Cualquier número racional o irracional; se corresponde con un punto de la recta."],
    ["Decimal periódico", "Decimal con un bloque de cifras (periodo) que se repite sin fin."],
    ["Anteperiodo", "Cifras decimales que hay entre la coma y el periodo en un periódico mixto."],
    ["Fracción generatriz", "Fracción que da lugar a un decimal exacto o periódico."],
    ["Recta real", "Recta en la que cada punto representa un número real."],
    ["Intervalo", "Conjunto de todos los números reales comprendidos entre dos extremos."],
    ["Semirrecta", "Intervalo con un extremo infinito, como [2, +∞)."],
    ["Intersección", "Conjunto de números que pertenecen a la vez a dos conjuntos (∩)."],
    ["Unión", "Conjunto de números que pertenecen a alguno de dos conjuntos (∪)."],
    ["Valor absoluto", "Distancia de un número al cero; nunca es negativo."],
    ["Redondeo", "Aproximación que sube la última cifra si la siguiente es 5 o más."],
    ["Truncamiento", "Aproximación que corta las cifras sin mirar las siguientes."],
    ["Error absoluto", "Diferencia en valor absoluto entre el valor real y la aproximación."],
    ["Error relativo", "Cociente entre el error absoluto y el valor real; se expresa a menudo en %."],
  ],
  situacion: {
    titulo: "Control de calidad en una fábrica de tornillos",
    reto: "Una empresa de vuestra comarca fabrica tornillos que deben medir 40 mm con una tolerancia de ±0,1 mm. Os encargan revisar una muestra de medidas, decidir qué piezas se aceptan y explicar a la dirección, con números, si la máquina funciona bien.",
    pasos: [
      "Escribid el intervalo de medidas válidas y la condición con valor absoluto.",
      "Medid (o recibid del profesor) 20 medidas reales o simuladas con dos decimales y clasificadlas en aceptadas o rechazadas.",
      "Calculad para cada pieza el error absoluto y el relativo respecto a 40 mm y ordenadlas de menor a mayor error.",
      "Representad todas las medidas en una recta real, marcando el intervalo de tolerancia.",
      "Calculad qué porcentaje de piezas se rechaza y proponed una mejora (por ejemplo, ajustar la máquina).",
    ],
    producto: "Un informe de una página con la recta, la tabla de errores y una conclusión razonada para la dirección.",
    evaluacion: ["Usa correctamente la notación de intervalos y valor absoluto.", "Calcula sin errores el error absoluto y el relativo.", "Representa los datos con claridad en la recta real.", "Argumenta la conclusión con datos y con un vocabulario matemático preciso."],
  },
  tarjetas: [
    ["¿Qué es un número racional?", "El que se puede escribir como fracción; su decimal es exacto o periódico."],
    ["¿Qué es un número irracional?", "Un real que no es fracción: infinitas cifras sin periodo (√2, π)."],
    ["Generatriz de un periódico puro", "Número sin coma menos parte entera, entre tantos 9 como cifras del periodo."],
    ["Generatriz de un periódico mixto", "Se añaden tantos 0 como cifras tenga el anteperiodo."],
    ["[a, b] y (a, b)", "Corchete: extremo incluido. Paréntesis: no incluido."],
    ["Junto al infinito…", "siempre paréntesis."],
    ["A ∩ B", "Los números que están en A y en B a la vez."],
    ["A ∪ B", "Los números que están en A, en B o en los dos."],
    ["|x|", "Distancia de x al cero. |a − b|: distancia entre a y b."],
    ["Redondear", "Si la cifra siguiente es 5 o más, se sube."],
    ["Error relativo", "Error absoluto / valor real (en %)."],
    ["√a · √b", "√(a · b). Solo se suman radicales semejantes."],
  ],
  familias: ["Buscad en casa medidas con decimales (tickets, básculas, recetas) y comentad cuántas cifras tiene sentido dar.", "Medid juntos la diagonal de una baldosa cuadrada y comparadla con lado · 1,414.", "Jugad a «¿en qué intervalo está?» con edades, precios o temperaturas de la semana.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido numérico: números reales, representación en la recta, intervalos, valor absoluto, aproximaciones y errores, radicales sencillos (RD 217/2022, Matemáticas A 4º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Construir √2, √3 y √5 con regla y compás (espiral de Teodoro).", "Debate: ¿es 0,999… igual a 1? Justificarlo con la fracción generatriz.", "Control de calidad con tolerancias reales de piezas (situación de aprendizaje).", "Comparar aproximaciones históricas de π (22/7, 355/113, 3,14) y sus errores relativos."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Proyecto Descartes: números reales (INTEF)", url: "https://proyectodescartes.org/" },
    { t: "Gauss: recursos de matemáticas (INTEF)", url: "https://intef.es/recursos-educativos/" },
  ],
  revisado: "2026-11-13",
};
