// Matemáticas 2º ESO · Potencias y raíces cuadradas. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tx, lienzo, pasos, cajas, comparar, formula, resumen, flujo, baraja, psvg, pvid, pvg, C, RD, DECRET, REV } = require("./_eso2L2");

const signo = cajas("Signo de una potencia según la base y el exponente", [
  ["Base +", ["siempre +", "3⁴ = 81"], "var(--leaf)"],
  ["Base −, exp. par", ["resultado +", "(−3)⁴ = 81"], "var(--pen)"],
  ["Base −, exp. impar", ["resultado −", "(−3)³ = −27"], "var(--red)"],
  ["Fracción", ["(2/3)² = 4/9", "se elevan los dos"], "var(--sun)"],
], "¿Qué signo tiene?");

const props = lienzo("Propiedades de las potencias: producto, cociente, potencia de potencia, producto y cociente de la misma potencia", `
  ${[["aᵐ · aⁿ = aᵐ⁺ⁿ", "var(--pen)"], ["aᵐ : aⁿ = aᵐ⁻ⁿ", "var(--leaf)"], ["(aᵐ)ⁿ = aᵐ·ⁿ", "var(--sun)"], ["(a · b)ⁿ = aⁿ · bⁿ", "var(--inf)"], ["(a : b)ⁿ = aⁿ : bⁿ", "var(--red)"]].map(([t, c], i) => `<rect x="24" y="${14 + i * 32}" width="212" height="26" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"/>${tx(130, 32 + i * 32, t, { fs: 15, fam: D, c, max: 200 })}`).join("")}`, 180);

const cero = flujo("Por qué a elevado a cero vale uno y qué significa un exponente negativo", [
  ["2³ : 2³ = 8 : 8 = 1", "proc"], ["2³ : 2³ = 2³⁻³ = 2⁰", "proc"], ["Por tanto 2⁰ = 1", "es"], ["2² : 2⁵ = 2⁻³", "proc"], ["4 : 32 = 1/8 → 2⁻³ = 1/2³", "es"],
], "Exponente cero y negativo");

const simplificar = pasos("Simplificar una expresión con potencias pasando todo a factores primos", ["(4³ · 6²) : 12²", "4³ = 2⁶ ; 6² = 2²·3² ; 12² = 2⁴·3²", "Numerador: 2⁸ · 3²", "(2⁸ · 3²) : (2⁴ · 3²) = 2⁴", "= 16"], "Simplificar");

const potencias10 = cajas("Potencias de 10 con exponente positivo y negativo", [
  ["10³", ["1000"], "var(--pen)"], ["10⁶", ["1 000 000", "(un millón)"], "var(--leaf)"],
  ["10⁻¹", ["0,1"], "var(--sun)"], ["10⁻³", ["0,001"], "var(--red)"],
], "Potencias de 10");

const cientifica = formula("Notación científica: un número entre 1 y 10 multiplicado por una potencia de 10", "a · 10ⁿ  (1 ≤ a < 10)", ["Ejemplos", "Distancia Tierra-Sol: 1,5 · 10⁸ km", "Diámetro de un glóbulo rojo: 7 · 10⁻⁶ m"], "var(--inf)");

const operarNC = pasos("Operar en notación científica: multiplicar las partes decimales y sumar los exponentes", ["(3 · 10⁵) · (4 · 10⁻²)", "3 · 4 = 12 ; 10⁵⁺⁽⁻²⁾ = 10³", "12 · 10³", "Ajustar: 1,2 · 10⁴"], "Producto en notación científica");

const cuadrados = lienzo("Cuadrados perfectos: el área de un cuadrado de lado n es n al cuadrado", `
  ${[1, 2, 3, 4, 5].map((n, i) => { const x0 = 14 + [0, 18, 50, 96, 156][i], l = 9; let s = ""; for (let a = 0; a < n; a++) for (let b = 0; b < n; b++) s += `<rect x="${x0 + a * l}" y="${110 - (b + 1) * l}" width="${l}" height="${l}" fill="var(--pen)" fill-opacity=".35" stroke="var(--pen)" stroke-width="1"/>`; return s + tx(x0 + (n * l) / 2, 128, n * n, { fs: 12, c: "var(--red)", max: 30 }); }).join("")}
  ${tx(130, 158, "1, 4, 9, 16, 25, 36, 49, 64, 81, 100…", { fs: 12, c: "var(--muted)" })}`, 172);

const aproximada = lienzo("Raíz aproximada de 50: está entre 7 y 8, más cerca de 7", `
  <path d="M20 90 H240" stroke="var(--ink)" stroke-width="2"/>
  ${[[7, "7", "49"], [8, "8", "64"]].map(([v, t, c]) => { const x = 40 + (v - 7) * 180; return `<path d="M${x} 84 V96" stroke="var(--ink)" stroke-width="2"/>${tx(x, 114, t, { fs: 14, fam: D })}${tx(x, 74, t + "² = " + c, { fs: 11, c: "var(--muted)" })}`; }).join("")}
  <circle cx="${40 + 0.07 * 180}" cy="90" r="6" fill="var(--red)"/>${tx(60, 140, "√50 ≈ 7,07", { fs: 15, fam: D, c: "var(--red)", a: "start", max: 120 })}
  ${tx(130, 166, "49 < 50 < 64 → 7 < √50 < 8", { fs: 12, c: "var(--muted)" })}`, 176);

const raizProps = comparar("Propiedades de las raíces: la raíz de un producto sí se separa, la de una suma no", [
  ["Sí", ["√(a·b) = √a · √b", "√(9·16) = 3·4 = 12", "√(a/b) = √a / √b"], "var(--leaf)"],
  ["¡No!", ["√(a+b) ≠ √a + √b", "√(9+16) = √25 = 5", "y no 3 + 4 = 7"], "var(--red)"],
], "Raíces");

const combinadas = pasos("Operación combinada con potencias y raíces respetando la jerarquía", ["2³ − √49 + (−3)² · 2", "Potencias y raíces: 8 − 7 + 9 · 2", "Producto: 8 − 7 + 18", "Resultado: 19"], "Operaciones combinadas");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Potencias y raíces cuadradas",
  minutos: 105,
  objetivos: [
    "Calcular potencias de base entera y fraccionaria y determinar su signo",
    "Aplicar las propiedades de las potencias para simplificar expresiones",
    "Interpretar el exponente cero y los exponentes negativos",
    "Expresar y operar números en notación científica",
    "Calcular raíces cuadradas exactas y aproximadas y resolver operaciones combinadas",
  ],
  claves: ["potencia", "base", "exponente", "exponente negativo", "notación científica", "cuadrado perfecto", "raíz cuadrada"],
  pregunta: {
    texto: "Si doblas una hoja de papel por la mitad 10 veces, ¿cuántas capas tendrá?",
    respuesta: "Cada doblez duplica las capas: 2 · 2 · … · 2 diez veces = <mark>2¹⁰ = 1024 capas</mark>. Con 42 dobleces, el grosor llegaría a la Luna: así de rápido crecen las potencias.",
  },
  lectura: {
    titulo: "Granos de trigo en un tablero de ajedrez",
    html: `<p>Cuenta una leyenda que el inventor del ajedrez presentó su juego a un rey de la India. El rey, encantado, le ofreció la recompensa que quisiera. El sabio pidió algo que parecía modesto: un grano de trigo en la primera casilla del tablero, dos en la segunda, cuatro en la tercera, ocho en la cuarta… y así, duplicando, hasta la casilla 64.</p><p>El rey se rió de una petición tan humilde, pero cuando sus contables hicieron las cuentas se quedaron pálidos. En la última casilla debían ponerse 2⁶³ granos, y en total, 2⁶⁴ − 1: más de <b>18 trillones</b> de granos, más trigo del que se ha cosechado en toda la historia de la humanidad.</p><p>Las <b>potencias</b> describen fenómenos que crecen así de deprisa: las bacterias que se dividen, los rumores que se difunden por las redes, el interés compuesto de un préstamo. Y también lo muy pequeño: un virus mide unas 10⁻⁷ m. Para escribir cómodamente estas cantidades se inventó la <b>notación científica</b>. En este tema aprenderás a manejar las potencias, sus propiedades y su operación inversa, la raíz cuadrada.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Qué es una potencia</h3><p>Una <b>potencia</b> es una forma abreviada de escribir un producto de factores iguales: <mark>aⁿ = a · a · … · a</mark> (n veces). El factor que se repite, a, es la <b>base</b>, y el número de veces, n, es el <b>exponente</b>. Así, 2⁵ = 2 · 2 · 2 · 2 · 2 = 32.</p><p>Las potencias de exponente 2 y 3 tienen nombre propio: «al <b>cuadrado</b>» y «al <b>cubo</b>», porque 5² es el área de un cuadrado de lado 5 y 5³, el volumen de un cubo de arista 5.</p><p>Cuidado con un error muy frecuente: 2⁵ no es 2 · 5 = 10. El exponente indica cuántas veces se multiplica la base por sí misma, no por cuánto se multiplica. Por la misma razón, 3² = 9 y 2³ = 8 son distintos: no se puede cambiar base y exponente.</p><p>Además, a¹ = a para cualquier número: un solo factor es el propio número.</p>`, svg: psvg("potencias", 0) },
    { html: `<h3>1.2 Potencias de enteros y de fracciones</h3><p>Cuando la base es un <b>entero negativo</b>, el signo del resultado depende del exponente:</p><ul><li>Exponente <b>par</b> → resultado positivo: (−3)⁴ = 81.</li><li>Exponente <b>impar</b> → resultado negativo: (−3)³ = −27.</li></ul><p>Recuerda la diferencia entre (−3)² = 9 y −3² = −9: sin paréntesis, el signo menos no forma parte de la base.</p><p>Cuando la base es una <b>fracción</b>, se elevan el numerador y el denominador: <mark>(a/b)ⁿ = aⁿ/bⁿ</mark>. Por ejemplo, (2/3)³ = 8/27 y (−1/2)⁴ = 1/16.</p><p>Si la base es un decimal, se puede elevar directamente o pasar a fracción: 0,2³ = (2/10)³ = 8/1000 = 0,008. Observa que al elevar un número entre 0 y 1 el resultado es <b>más pequeño</b>: 0,5² = 0,25.</p>`, svg: signo },
    { html: `<h3>2.1 Propiedades de las potencias</h3><p>Las potencias cumplen unas propiedades que simplifican mucho los cálculos. Para a y b distintos de 0:</p><ul><li><b>Producto de igual base</b>: se suman los exponentes. 2³ · 2⁴ = 2⁷.</li><li><b>Cociente de igual base</b>: se restan los exponentes. 5⁶ : 5² = 5⁴.</li><li><b>Potencia de una potencia</b>: se multiplican los exponentes. (3²)³ = 3⁶.</li><li><b>Potencia de un producto</b>: (2 · 5)³ = 2³ · 5³ = 1000.</li><li><b>Potencia de un cociente</b>: (6 : 3)² = 6² : 3² = 4.</li></ul><p>Todas se deducen de la definición. Por ejemplo, 2³ · 2⁴ = (2 · 2 · 2) · (2 · 2 · 2 · 2) = 2⁷: hay 3 + 4 factores.</p><p>Muy importante: <b>no hay propiedad para la suma</b>. 2³ + 2⁴ = 8 + 16 = 24, que no es 2⁷ = 128. Tampoco se pueden multiplicar potencias de distinta base y distinto exponente sumando: 2³ · 3² = 72.</p>`, svg: props, video: pvid("potencias", 2) },
    { html: `<h3>2.2 Exponente cero y exponente negativo</h3><p>¿Cuánto vale 2⁰? Fíjate en que 2³ : 2³ = 8 : 8 = 1. Pero, por la propiedad del cociente, también es 2³⁻³ = 2⁰. Por eso se define: <mark>a⁰ = 1</mark> para cualquier a distinto de cero.</p><p>¿Y 2⁻³? Calculemos 2² : 2⁵ de dos formas: 4 : 32 = 1/8, y 2²⁻⁵ = 2⁻³. Así que 2⁻³ = 1/8 = 1/2³. En general: <mark>a⁻ⁿ = 1/aⁿ</mark>. Un exponente negativo significa «la inversa».</p><p>Con fracciones, el exponente negativo da la vuelta a la fracción: (2/5)⁻² = (5/2)² = 25/4.</p><p>Así, las propiedades funcionan siempre, sea cual sea el exponente: 3⁻² · 3⁵ = 3³ = 27. Y se pueden escribir resultados sin denominadores: 1/1000 = 10⁻³.</p>`, svg: cero },
    { html: `<h3>2.3 Simplificar expresiones con potencias</h3><p>Para simplificar una expresión con potencias de bases distintas, la estrategia es <b>descomponer cada base en factores primos</b> y aplicar las propiedades a cada primo por separado.</p><p>Ejemplo: (4³ · 6²) : 12². Escribimos 4 = 2², 6 = 2 · 3 y 12 = 2² · 3:</p><ul><li>4³ = (2²)³ = 2⁶.</li><li>6² = 2² · 3².</li><li>12² = (2² · 3)² = 2⁴ · 3².</li></ul><p>Entonces: (2⁶ · 2² · 3²) : (2⁴ · 3²) = 2⁸⁻⁴ · 3²⁻² = 2⁴ · 3⁰ = <mark>16</mark>.</p><p>Con fracciones se procede igual: (9² · 8) / (27 · 2⁴) = (3⁴ · 2³) / (3³ · 2⁴) = 3 / 2. Esta técnica también sirve para comprobar si un número es un cuadrado perfecto: lo es si todos los exponentes de su factorización son pares.</p>`, svg: simplificar },
    { html: `<h3>3.1 Potencias de 10</h3><p>Las potencias de 10 son especialmente sencillas: 10ⁿ es un 1 seguido de n ceros. 10³ = 1000 y 10⁶ = 1 000 000 (un millón). Con exponente negativo, 10⁻ⁿ es un 1 en la posición n después de la coma: 10⁻¹ = 0,1 y 10⁻³ = 0,001.</p><p>Multiplicar por 10ⁿ desplaza la coma n lugares a la derecha, y multiplicar por 10⁻ⁿ (es decir, dividir entre 10ⁿ), n lugares a la izquierda: 3,7 · 10⁴ = 37 000; 3,7 · 10⁻² = 0,037.</p><p>Muchos prefijos de las unidades son potencias de 10: kilo (10³), mega (10⁶), giga (10⁹), mili (10⁻³), micro (10⁻⁶), nano (10⁻⁹). Un gigabyte son unos 10⁹ bytes, y un nanómetro, 10⁻⁹ m. Cualquier número se puede descomponer con potencias de 10: 4235 = 4 · 10³ + 2 · 10² + 3 · 10 + 5.</p>`, svg: potencias10 },
    { html: `<h3>3.2 Notación científica</h3><p>Un número está en <b>notación científica</b> si se escribe como <mark>a · 10ⁿ</mark>, donde a es un número decimal con <b>una sola cifra entera distinta de cero</b> (1 ≤ a &lt; 10) y n es un entero.</p><ul><li>Números grandes: 150 000 000 km = 1,5 · 10⁸ km. Se cuenta cuántos lugares se mueve la coma hacia la izquierda: 8.</li><li>Números pequeños: 0,000 007 m = 7 · 10⁻⁶ m. La coma se mueve 6 lugares a la derecha, así que el exponente es −6.</li></ul><p>La notación científica facilita leer y comparar cantidades enormes o diminutas: basta mirar el exponente. 3 · 10⁸ es mayor que 9 · 10⁷ aunque 9 &gt; 3.</p><p>Las calculadoras la usan cuando el número no cabe en pantalla, con la letra E: 1.5E8 significa 1,5 · 10⁸.</p>`, svg: cientifica },
    { html: `<h3>3.3 Operar en notación científica</h3><p>Para <b>multiplicar</b> o <b>dividir</b>, se operan por un lado los números decimales y por otro las potencias de 10, aplicando las propiedades:</p><ul><li>(3 · 10⁵) · (4 · 10⁻²) = 12 · 10³. Como 12 tiene dos cifras enteras, se ajusta: <mark>1,2 · 10⁴</mark>.</li><li>(8 · 10⁹) : (2 · 10³) = 4 · 10⁶.</li></ul><p>Para <b>sumar</b> o <b>restar</b>, los números deben tener la <b>misma potencia de 10</b>. Se transforma uno de ellos: 3,2 · 10⁵ + 4 · 10⁴ = 3,2 · 10⁵ + 0,4 · 10⁵ = 3,6 · 10⁵.</p><p>Ejemplo real: la luz recorre 3 · 10⁵ km por segundo. En un año (unos 3,15 · 10⁷ s) recorre 3 · 3,15 · 10¹² ≈ 9,5 · 10¹² km: es el <b>año luz</b>.</p>`, svg: operarNC },
    { html: `<h3>4.1 La raíz cuadrada</h3><p>La <b>raíz cuadrada</b> de un número a es otro número b tal que b² = a: <mark>√a = b si b² = a</mark>. Al número de dentro se le llama <b>radicando</b>. √49 = 7 porque 7² = 49.</p><p>Como también (−7)² = 49, todo número positivo tiene <b>dos raíces cuadradas</b>, una positiva y otra negativa: ±7. Cuando escribimos √49 solemos referirnos a la positiva, que se llama raíz principal.</p><p>Los números negativos <b>no tienen raíz cuadrada</b> real: ningún número al cuadrado da negativo. Y √0 = 0.</p><p>La raíz cuadrada es la operación <b>inversa</b> de elevar al cuadrado. Geométricamente, si un cuadrado tiene 49 cm² de área, su lado mide √49 = 7 cm. Por eso se usa tanto en geometría, por ejemplo en el teorema de Pitágoras.</p>`, svg: psvg("potencias", 5), video: pvid("potencias", 5) },
    { html: `<h3>4.2 Cuadrados perfectos</h3><p>Un número es un <b>cuadrado perfecto</b> si es el cuadrado de un número natural: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144… Su raíz cuadrada es exacta. Con cuadraditos se pueden colocar formando un cuadrado.</p><p>Conviene saberse de memoria los cuadrados hasta 15² = 225 o 20² = 400. Algunas pistas para reconocerlos:</p><ul><li>Un cuadrado perfecto nunca acaba en 2, 3, 7 u 8.</li><li>En su descomposición factorial todos los exponentes son pares: 144 = 2⁴ · 3², y √144 = 2² · 3 = 12.</li><li>La diferencia entre dos cuadrados consecutivos es un número impar: 1, 3, 5, 7… Así, 1 + 3 + 5 + 7 = 16 = 4².</li></ul><p>Los cuadrados de los números terminados en 0 son fáciles: 30² = 900, 70² = 4900.</p>`, svg: cuadrados },
    { html: `<h3>4.3 Raíces aproximadas</h3><p>Si un número no es un cuadrado perfecto, su raíz no es exacta. Podemos <b>acotarla</b> entre dos enteros consecutivos: como 49 &lt; 50 &lt; 64, entonces <mark>7 &lt; √50 &lt; 8</mark>. Además, como 50 está mucho más cerca de 49, la raíz estará cerca de 7.</p><p>Para afinar más, se prueban decimales: 7,1² = 50,41 (se pasa), 7,0² = 49 (se queda corto). Así que √50 está entre 7,0 y 7,1. Probando 7,07² = 49,98 y 7,08² = 50,13, vemos que √50 ≈ 7,07.</p><p>La <b>raíz entera</b> de un número es la parte entera de su raíz, y el <b>resto</b> es la diferencia entre el número y el cuadrado de la raíz entera: para 50, raíz entera 7 y resto 50 − 49 = 1.</p><p>Muchas raíces, como √2 = 1,41421…, tienen infinitas cifras decimales no periódicas: son números irracionales.</p>`, svg: aproximada },
    { html: `<h3>4.4 Propiedades de las raíces y operaciones combinadas</h3><p>La raíz de un producto es el producto de las raíces: <mark>√(a · b) = √a · √b</mark>. Lo mismo con el cociente. Esto permite calcular raíces grandes: √(4 · 25) = 2 · 5 = 10, o √3600 = √36 · √100 = 60.</p><p>En cambio, la raíz de una <b>suma</b> no es la suma de las raíces: √(9 + 16) = √25 = 5, que no es 3 + 4 = 7. Es uno de los errores más frecuentes.</p><p>En operaciones combinadas, las raíces tienen la misma prioridad que las potencias:</p><ol><li>Paréntesis.</li><li>Potencias y raíces.</li><li>Multiplicaciones y divisiones.</li><li>Sumas y restas.</li></ol><p>Ejemplo: 2³ − √49 + (−3)² · 2 = 8 − 7 + 9 · 2 = 8 − 7 + 18 = <b>19</b>. Si el radicando es una operación, se resuelve primero: √(5² − 3²) = √16 = 4.</p>`, svg: raizProps },
    { html: `<h3>4.5 Potencias y raíces en la vida real</h3><p>Las potencias describen el <b>crecimiento exponencial</b>: una población de bacterias que se duplica cada hora pasa de 100 a 100 · 2¹⁰ = 102 400 en 10 horas. También el contagio de una enfermedad o la difusión de un mensaje en una cadena: si cada persona lo reenvía a 3, en el paso 6 lo reciben 3⁶ = 729 personas nuevas.</p><p>Las raíces aparecen cuando conocemos un área y queremos el lado: un huerto cuadrado de 200 m² tiene un lado de √200 ≈ 14,14 m. Y en física, la velocidad de caída o el periodo de un péndulo dependen de raíces cuadradas.</p><p>La notación científica es imprescindible en ciencia: la masa de la Tierra es unos 6 · 10²⁴ kg y la de un electrón, unos 9,1 · 10⁻³¹ kg.</p><p>En las operaciones combinadas de estos problemas, sigue siempre la jerarquía y comprueba si el orden de magnitud del resultado tiene sentido.</p>`, svg: combinadas },
  ],
  ejemplos: [
    { enunciado: "Calcula: (−2)⁵, (−1/3)², −4² y (0,3)³.", pasos: ["(−2)⁵: exponente impar → −32.", "(−1/3)² = 1/9.", "−4² = −16 (la base es 4).", "0,3³ = 0,027."], resultado: "−32; 1/9; −16; 0,027." },
    { enunciado: "Expresa como una sola potencia: (5³ · 5⁴) : (5²)².", pasos: ["Numerador: 5⁷.", "Denominador: 5⁴.", "5⁷ : 5⁴ = 5³."], resultado: "5³ = 125." },
    { enunciado: "Simplifica: (8² · 9³) : (6⁴ · 3).", pasos: ["8² = 2⁶; 9³ = 3⁶; 6⁴ = 2⁴ · 3⁴.", "(2⁶ · 3⁶) : (2⁴ · 3⁵).", "2² · 3 = 12."], resultado: "12." },
    { enunciado: "Calcula 2⁻³ + 4⁰ − (1/2)⁻¹.", pasos: ["2⁻³ = 1/8.", "4⁰ = 1.", "(1/2)⁻¹ = 2.", "1/8 + 1 − 2 = −7/8."], resultado: "−7/8." },
    { enunciado: "Calcula (6 · 10⁸) · (5 · 10⁻³) y da el resultado en notación científica.", pasos: ["6 · 5 = 30; 10⁸ · 10⁻³ = 10⁵.", "30 · 10⁵ = 3 · 10⁶."], resultado: "3 · 10⁶." },
    { enunciado: "Acota √130 entre dos enteros y aproxímala a las décimas.", pasos: ["11² = 121 < 130 < 144 = 12².", "11,4² = 129,96; 11,5² = 132,25.", "130 está mucho más cerca de 129,96."], resultado: "√130 ≈ 11,4." },
  ],
  errores: [
    "Multiplicar la base por el exponente: 3⁴ no es 12, es 81.",
    "Sumar exponentes en una suma de potencias: 2³ + 2² no es 2⁵.",
    "Pensar que a⁰ = 0: cualquier base no nula elevada a 0 da 1.",
    "Creer que un exponente negativo da un resultado negativo: 2⁻² = 1/4, no −4.",
    "Escribir en notación científica con más de una cifra entera: 12 · 10³ debe ser 1,2 · 10⁴.",
    "Separar la raíz de una suma: √(9 + 16) no es 3 + 4.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Escribe como potencia y calcula: a) 3 · 3 · 3 · 3; b) (−2) · (−2) · (−2); c) 1/5 · 1/5.", sol: "a) 3⁴ = 81. b) (−2)³ = −8. c) (1/5)² = 1/25." },
    { nivel: "básico", q: "Calcula: 2⁶, (−5)², −5², (−1)¹⁵, 0,1³.", sol: "64; 25; −25; −1; 0,001." },
    { nivel: "básico", q: "Calcula: (3/4)², (−2/5)³, (1/2)⁵.", sol: "9/16; −8/125; 1/32." },
    { nivel: "básico", q: "Expresa como una sola potencia: a) 7² · 7⁵; b) 4⁹ : 4³; c) (2³)⁴.", sol: "a) 7⁷. b) 4⁶. c) 2¹²." },
    { nivel: "básico", q: "Calcula: 9⁰, (−3)⁰, 5⁻¹, 2⁻².", sol: "1; 1; 1/5; 1/4." },
    { nivel: "básico", q: "Escribe en notación científica: 45 000 000; 0,00032; 7 200.", sol: "4,5 · 10⁷; 3,2 · 10⁻⁴; 7,2 · 10³." },
    { nivel: "básico", q: "Escribe en forma decimal: 6,1 · 10⁵ y 2,3 · 10⁻³.", sol: "610 000; 0,0023." },
    { nivel: "básico", q: "Calcula: √81, √144, √0,25, √(4/9).", sol: "±9; ±12; ±0,5; ±2/3." },
    { nivel: "básico", q: "Indica cuáles son cuadrados perfectos: 64, 72, 121, 150, 196.", sol: "64 = 8², 121 = 11², 196 = 14². No: 72 y 150." },
    { nivel: "básico", q: "Acota entre dos enteros: √30, √75, √110.", sol: "5 < √30 < 6; 8 < √75 < 9; 10 < √110 < 11." },
    { nivel: "medio", q: "Reduce a una sola potencia: (3⁴ · 3⁻²) : 3⁻¹.", sol: "3⁴⁻²⁺¹ = 3³ = 27." },
    { nivel: "medio", q: "Reduce: (2/3)⁴ · (2/3)⁻² : (2/3)³.", sol: "(2/3)^(4 − 2 − 3) = (2/3)⁻¹ = 3/2." },
    { nivel: "medio", q: "Simplifica: (4² · 2⁵) : 8³.", sol: "2⁴ · 2⁵ : 2⁹ = 2⁰ = 1." },
    { nivel: "medio", q: "Simplifica: (15² · 9) : (5 · 3⁴).", sol: "15² = 3² · 5². (3² · 5² · 3²) : (5 · 3⁴) = 5." },
    { nivel: "medio", q: "Expresa con exponente positivo y calcula: 10⁻⁴, (3/2)⁻², (−2)⁻³.", sol: "1/10⁴ = 0,0001; (2/3)² = 4/9; 1/(−2)³ = −1/8." },
    { nivel: "medio", q: "Calcula en notación científica: (2,5 · 10⁶) · (4 · 10⁻²).", sol: "10 · 10⁴ = 1 · 10⁵." },
    { nivel: "medio", q: "Calcula en notación científica: (9,6 · 10⁻³) : (3,2 · 10⁻⁷).", sol: "3 · 10⁻³⁻⁽⁻⁷⁾ = 3 · 10⁴." },
    { nivel: "medio", q: "Calcula: 4,5 · 10⁶ + 3 · 10⁵.", sol: "4,5 · 10⁶ + 0,3 · 10⁶ = 4,8 · 10⁶." },
    { nivel: "medio", q: "Calcula la raíz entera y el resto de 90 y de 200.", sol: "√90: 9² = 81, resto 9. √200: 14² = 196, resto 4." },
    { nivel: "medio", q: "Calcula usando propiedades: √(16 · 49), √900, √(25/64).", sol: "4 · 7 = 28; √9 · √100 = 30; 5/8." },
    { nivel: "medio", q: "Calcula: 3² − 2 · √25 + (−2)³ : 4.", sol: "9 − 10 + (−8) : 4 = 9 − 10 − 2 = −3." },
    { nivel: "medio", q: "Una parcela cuadrada tiene 361 m² de área. ¿Cuánto mide su lado? ¿Y su perímetro?", sol: "√361 = 19 m. Perímetro = 4 · 19 = 76 m." },
    { nivel: "avanzado", q: "Simplifica: (6³ · 10² · 9) / (4 · 15² · 27).", sol: "6³ = 2³·3³; 10² = 2²·5²; 9 = 3²; 4 = 2²; 15² = 3²·5²; 27 = 3³. Numerador 2⁵·3⁵·5²; denominador 2²·3⁵·5². Resultado 2³ = 8." },
    { nivel: "avanzado", q: "Calcula: [(−2)³ + √(5² − 4²)]² : (−5) + 3⁻¹ · 9.", sol: "√(25 − 16) = 3; −8 + 3 = −5; (−5)² = 25; 25 : (−5) = −5. 3⁻¹ · 9 = 3. −5 + 3 = −2." },
    { nivel: "avanzado", q: "Una bacteria se divide en dos cada 20 minutos. Si empezamos con 1, ¿cuántas hay al cabo de 4 horas? Exprésalo como potencia y en notación científica.", sol: "4 h = 12 periodos de 20 min. 2¹² = 4096 ≈ 4,1 · 10³ bacterias." },
    { nivel: "avanzado", q: "La distancia de la Tierra a la Luna es 3,84 · 10⁵ km y la luz viaja a 3 · 10⁵ km/s. ¿Cuánto tarda la luz de la Luna en llegarnos?", sol: "3,84 · 10⁵ : 3 · 10⁵ = 1,28 s." },
    { nivel: "avanzado", q: "Ordena de menor a mayor: 2,1 · 10⁻³; 9 · 10⁻⁴; 1,5 · 10⁻³; 3 · 10⁻².", sol: "9 · 10⁻⁴ < 1,5 · 10⁻³ < 2,1 · 10⁻³ < 3 · 10⁻²." },
    { nivel: "avanzado", q: "¿Qué es mayor, 2⁵⁰ o 4²⁴? Justifica sin calculadora.", sol: "4²⁴ = (2²)²⁴ = 2⁴⁸. Como 2⁵⁰ > 2⁴⁸, es mayor 2⁵⁰ (cuatro veces mayor)." },
    { nivel: "avanzado", q: "Aproxima √2 a las centésimas probando decimales y explica por qué nunca obtendrás un valor exacto.", sol: "1,4² = 1,96; 1,5² = 2,25; 1,41² = 1,9881; 1,42² = 2,0164 → √2 ≈ 1,41. Es irracional: tiene infinitas cifras sin periodo, así que ningún decimal finito al cuadrado da exactamente 2." },
    { nivel: "avanzado", q: "En la leyenda del ajedrez, ¿cuántos granos hay en total en las 5 primeras casillas? ¿Y en las 10 primeras? Busca la regla.", sol: "1 + 2 + 4 + 8 + 16 = 31 = 2⁵ − 1. Diez casillas: 2¹⁰ − 1 = 1023. Regla: en las n primeras casillas hay 2ⁿ − 1 granos." },
  ],
  quiz: baraja([
    { q: "En 7⁴, la base es…", o: ["7", "4", "28", "2401"], a: 0, e: "El factor que se repite." },
    { q: "2⁵ =", o: ["32", "10", "25", "16"], a: 0, e: "2·2·2·2·2." },
    { q: "(−3)³ =", o: ["−27", "27", "−9", "9"], a: 0, e: "Exponente impar." },
    { q: "−5² =", o: ["−25", "25", "−10", "10"], a: 0, e: "La base es 5." },
    { q: "(2/5)² =", o: ["4/25", "4/5", "2/25", "4/10"], a: 0, e: "Se elevan los dos términos." },
    { q: "3⁴ · 3² =", o: ["3⁶", "3⁸", "9⁶", "3²"], a: 0, e: "Se suman los exponentes." },
    { q: "6⁸ : 6³ =", o: ["6⁵", "6¹¹", "1⁵", "6²⁴"], a: 0, e: "Se restan los exponentes." },
    { q: "(5²)³ =", o: ["5⁶", "5⁵", "5⁸", "5⁹"], a: 0, e: "Se multiplican los exponentes." },
    { q: "2³ + 2³ =", o: ["16", "2⁶", "64", "4³"], a: 0, e: "8 + 8 = 16 = 2⁴." },
    { q: "8⁰ =", o: ["1", "0", "8", "no existe"], a: 0, e: "Exponente 0." },
    { q: "4⁻¹ =", o: ["1/4", "−4", "−1/4", "4"], a: 0, e: "La inversa." },
    { q: "10⁻³ =", o: ["0,001", "−1000", "0,0001", "−0,001"], a: 0, e: "Tres lugares tras la coma." },
    { q: "0,00056 en notación científica:", o: ["5,6 · 10⁻⁴", "56 · 10⁻⁵", "5,6 · 10⁴", "0,56 · 10⁻³"], a: 0, e: "La coma se mueve 4 lugares." },
    { q: "¿Cuál está en notación científica?", o: ["3,7 · 10⁵", "37 · 10⁴", "0,37 · 10⁶", "370 · 10³"], a: 0, e: "Una cifra entera no nula." },
    { q: "(2 · 10³) · (3 · 10⁴) =", o: ["6 · 10⁷", "6 · 10¹²", "5 · 10⁷", "6 · 10¹"], a: 0, e: "2·3 y 10³⁺⁴." },
    { q: "√121 =", o: ["±11", "±12", "60,5", "±10"], a: 0, e: "11² = 121." },
    { q: "√−4 …", o: ["no existe en los reales", "= −2", "= 2", "= ±2"], a: 0, e: "Ningún cuadrado es negativo." },
    { q: "√60 está entre…", o: ["7 y 8", "6 y 7", "8 y 9", "30 y 31"], a: 0, e: "49 < 60 < 64." },
    { q: "√(9 + 16) =", o: ["5", "7", "25", "12"], a: 0, e: "√25." },
    { q: "2² + 3 · √16 =", o: ["16", "28", "20", "11"], a: 0, e: "4 + 12." },
  ]),
  examen: baraja([
    { q: "(−2)⁴ − 2⁴ =", o: ["0", "32", "−32", "16"], a: 0, e: "16 − 16." },
    { q: "(7³ · 7⁻¹) : 7² =", o: ["1", "7", "49", "7⁻¹"], a: 0, e: "7⁰." },
    { q: "(3/2)⁻² =", o: ["4/9", "9/4", "−9/4", "−4/9"], a: 0, e: "(2/3)²." },
    { q: "(4² · 8) : 2⁶ =", o: ["2", "4", "1", "8"], a: 0, e: "2⁴ · 2³ : 2⁶ = 2." },
    { q: "128 000 en notación científica:", o: ["1,28 · 10⁵", "12,8 · 10⁴", "1,28 · 10⁻⁵", "128 · 10³"], a: 0, e: "Cinco lugares." },
    { q: "(8 · 10⁻²) : (4 · 10³) =", o: ["2 · 10⁻⁵", "2 · 10⁵", "2 · 10¹", "32 · 10¹"], a: 0, e: "10⁻²⁻³." },
    { q: "Raíz entera de 70:", o: ["8", "9", "7", "35"], a: 0, e: "64 < 70 < 81." },
    { q: "5 − √36 : 2 + 2³ =", o: ["10", "−6", "7,5", "1"], a: 0, e: "5 − 3 + 8." },
  ], 1),
  feynman: ["Por qué a⁰ vale 1 y no 0", "Qué significa un exponente negativo", "Por qué la notación científica sirve para comparar números rápidamente", "Por qué todo número positivo tiene dos raíces cuadradas"],
  figura: {
    titulo: "Potencias y raíces en un vistazo",
    svg: resumen("Resumen del tema de potencias y raíces", [
      ["aⁿ", "a · a · … · a · base negativa: par +, impar −", "var(--pen)"],
      ["Propiedades", "aᵐ·aⁿ = aᵐ⁺ⁿ · aᵐ:aⁿ = aᵐ⁻ⁿ · (aᵐ)ⁿ = aᵐⁿ", "var(--leaf)"],
      ["a⁰ y a⁻ⁿ", "a⁰ = 1 · a⁻ⁿ = 1/aⁿ", "var(--sun)"],
      ["Notación científica", "a · 10ⁿ con 1 ≤ a < 10", "var(--inf)"],
      ["√a", "b² = a · ±b · exacta o aproximada", "var(--red)"],
    ]),
  },
  video: pvg("potencias"),
  mapa: mapa("POTENCIAS Y RAÍCES", "var(--red)", [
    ["Potencias", "base · exponente · signo", "var(--pen)"],
    ["Propiedades", "producto · cociente · a⁰ · a⁻ⁿ", "var(--leaf)"],
    ["Notación científica", "a · 10ⁿ · operar", "var(--sun)"],
    ["Raíz cuadrada", "exacta · aproximada · ±", "var(--red)"],
  ], 250),
  glosario: [
    ["Potencia", "Producto de factores iguales: aⁿ."],
    ["Base", "Factor que se repite en una potencia."],
    ["Exponente", "Número de veces que se multiplica la base por sí misma."],
    ["Cuadrado", "Potencia de exponente 2."],
    ["Cubo", "Potencia de exponente 3."],
    ["Exponente cero", "a⁰ = 1 para cualquier a ≠ 0."],
    ["Exponente negativo", "a⁻ⁿ = 1/aⁿ: indica la inversa de la potencia."],
    ["Notación científica", "Escritura a · 10ⁿ con 1 ≤ a < 10."],
    ["Orden de magnitud", "Potencia de 10 que indica el tamaño aproximado de un número."],
    ["Raíz cuadrada", "Número que elevado al cuadrado da el radicando."],
    ["Radicando", "Número que está dentro de la raíz."],
    ["Cuadrado perfecto", "Número que es el cuadrado de un natural."],
    ["Raíz entera", "Mayor natural cuyo cuadrado no supera al radicando."],
    ["Número irracional", "Número con infinitas cifras decimales no periódicas, como √2."],
  ],
  situacion: {
    titulo: "Del átomo a las galaxias",
    reto: "Vais a construir una «escalera de tamaños» del universo, desde un átomo hasta una galaxia, expresando cada medida en notación científica y comparando órdenes de magnitud.",
    pasos: [
      "Elegid 10 objetos de tamaños muy distintos (átomo, virus, célula, hormiga, persona, montaña, Tierra, Sol, sistema solar, Vía Láctea).",
      "Buscad su tamaño en fuentes fiables y pasadlo a metros.",
      "Escribid cada medida en notación científica y ordenadlas.",
      "Calculad cuántas veces es mayor cada objeto que el anterior dividiendo en notación científica.",
      "Diseñad un póster o una presentación con la escalera y una ilustración de cada escalón.",
    ],
    producto: "Un póster o una presentación con la escalera de tamaños en notación científica y las comparaciones.",
    evaluacion: ["Expresa correctamente las medidas en notación científica.", "Opera con potencias de 10 aplicando las propiedades.", "Compara órdenes de magnitud y los interpreta.", "Cita las fuentes y presenta con claridad."],
  },
  tarjetas: [
    ["aⁿ", "a multiplicado n veces"], ["(−a)ⁿ", "n par: +; n impar: −"], ["aᵐ · aⁿ", "aᵐ⁺ⁿ"],
    ["aᵐ : aⁿ", "aᵐ⁻ⁿ"], ["(aᵐ)ⁿ", "aᵐ·ⁿ"], ["a⁰", "1"],
    ["a⁻ⁿ", "1/aⁿ"], ["Notación científica", "a · 10ⁿ, 1 ≤ a < 10"], ["Sumar en N. C.", "Igualar la potencia de 10"],
    ["√a", "b tal que b² = a"], ["√(a·b)", "√a · √b"], ["√(a+b)", "¡No es √a + √b!"],
  ],
  familias: ["Calculad cuántos antepasados tenéis en 10 generaciones (2¹⁰).", "Buscad en las etiquetas de aparatos prefijos como kilo, mega, giga o nano.", "Doblad una hoja todas las veces que podáis y contad las capas.", "Medid una habitación cuadrada y calculad el lado a partir del área."],
  profesores: {
    saberes: "Sentido numérico: potencias de exponente entero, propiedades, notación científica, raíces cuadradas exactas y aproximadas y operaciones combinadas (RD 217/2022, Matemáticas ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Plegado de papel para el crecimiento exponencial.", "Calculadora en modo científico para interpretar la notación E.", "Cuadrados con policubos para visualizar cuadrados perfectos.", "Escalera de tamaños del universo como proyecto interdisciplinar con Biología y Física."],
  },
  fuentes: [RD, DECRET, { t: "Wikipedia: Problema del trigo y del tablero de ajedrez", url: "https://es.wikipedia.org/wiki/Problema_del_trigo_y_del_tablero_de_ajedrez" }, { t: "Wikipedia: Notación científica", url: "https://es.wikipedia.org/wiki/Notaci%C3%B3n_cient%C3%ADfica" }],
  revisado: REV,
};
