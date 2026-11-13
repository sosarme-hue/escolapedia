// Matemáticas 3º ESO · Potencias y raíces. Tema nivel libro (lote 1). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, comparar, barras, resumen, rot, C, RD, DECRET } = require("./_eso3L1");

const definicion = lienzo("Una potencia es un producto de factores iguales: dos elevado a cinco es dos por dos por dos por dos por dos", `
  ${tx(70, 66, "2", { fs: 46, c: "var(--pen)", fam: D })}${tx(98, 38, "5", { fs: 24, c: "var(--red)", fam: D })}
  ${tx(70, 96, "base", { fs: 12, c: "var(--pen)" })}${tx(112, 24, "exponente", { fs: 11, c: "var(--red)", a: "start" })}
  ${tx(186, 66, "= 32", { fs: 26, c: "var(--leaf)", fam: D })}
  ${tx(130, 132, "2 · 2 · 2 · 2 · 2", { fs: 18, fam: D })}${tx(130, 160, "el exponente cuenta los factores", { fs: 12, c: "var(--muted)" })}`);

const signos = comparar("Signo de una potencia de base negativa: positivo con exponente par y negativo con exponente impar", [
  ["Exponente par", ["(−2)⁴ = +16", "(−1)¹⁰ = +1", "siempre +"], "var(--leaf)"],
  ["Exponente impar", ["(−2)³ = −8", "(−1)⁷ = −1", "conserva −"], "var(--red)"],
], "Base negativa");

const producto = cajas("Propiedades de las potencias de la misma base: producto y cociente", [
  ["Producto", ["aᵐ · aⁿ = aᵐ⁺ⁿ", "2³ · 2⁴ = 2⁷"], "var(--pen)"], ["Cociente", ["aᵐ : aⁿ = aᵐ⁻ⁿ", "5⁶ : 5² = 5⁴"], "var(--red)"],
], "Misma base");

const potpot = cajas("Potencia de una potencia, de un producto y de un cociente", [
  ["Potencia de pot.", ["(aᵐ)ⁿ = aᵐ·ⁿ", "(3²)⁴ = 3⁸"], "var(--leaf)"], ["De un producto", ["(a·b)ⁿ = aⁿ·bⁿ", "(2·5)³ = 10³"], "var(--inf)"],
  ["De un cociente", ["(a/b)ⁿ = aⁿ/bⁿ", "(2/3)² = 4/9"], "var(--sun)"], ["¡Ojo!", ["(a + b)² ≠ a² + b²", "(1+2)² = 9 ≠ 5"], "var(--red)"],
], "Más propiedades");

const negativo = lienzo("Exponente cero y exponente negativo: al bajar el exponente se divide entre la base", `
  ${[["2³", "8"], ["2²", "4"], ["2¹", "2"], ["2⁰", "1"], ["2⁻¹", "1/2"], ["2⁻²", "1/4"]].map(([p, v], i) => `<rect x="${12 + i * 40}" y="40" width="36" height="58" rx="8" fill="var(--card)" stroke="${i < 3 ? "var(--pen)" : i === 3 ? "var(--leaf)" : "var(--red)"}" stroke-width="2"/>${tx(30 + i * 40, 62, p, { fs: 13, fam: D, max: 32 })}${tx(30 + i * 40, 88, v, { fs: 13, c: "var(--muted)", max: 32 })}`).join("")}
  ${tx(130, 26, "cada paso: dividir entre 2", { fs: 12.5, c: "var(--muted)" })}
  ${tx(130, 128, "a⁰ = 1     a⁻ⁿ = 1/aⁿ", { fs: 16, c: "var(--red)", fam: D })}${tx(130, 156, "(a ≠ 0)", { fs: 12, w: 400 })}`);

const base10 = lienzo("Potencias de base diez: el exponente indica cuántos lugares se mueve la coma", `
  ${[["10³", "1.000"], ["10¹", "10"], ["10⁰", "1"], ["10⁻¹", "0,1"], ["10⁻³", "0,001"]].map(([p, v], i) => `${tx(52, 30 + i * 28, p, { fs: 15, c: i < 3 ? "var(--pen)" : "var(--red)", fam: D })}${tx(130, 30 + i * 28, "=", { fs: 14, c: "var(--muted)" })}${tx(200, 30 + i * 28, v, { fs: 15, fam: D })}`).join("")}
  ${tx(130, 170, "exponente = nº de ceros o de lugares tras la coma", { fs: 11, w: 400 })}`, 182);

const cientifica = lienzo("Notación científica: un número entre uno y diez multiplicado por una potencia de diez", `
  ${tx(130, 34, "Notación científica", { fs: 13, c: "var(--muted)" })}
  ${tx(130, 72, "a · 10ⁿ", { fs: 28, c: "var(--pen)", fam: D })}
  ${tx(130, 98, "1 ≤ a < 10,  n entero", { fs: 13, c: "var(--red)" })}
  ${tx(130, 128, "384.000 km = 3,84 · 10⁵ km", { fs: 13, fam: D })}${tx(130, 152, "0,00025 m = 2,5 · 10⁻⁴ m", { fs: 13, fam: D })}`);

const opCient = pasos("Multiplicar y dividir en notación científica", ["(3 · 10⁵) · (4 · 10⁻²)", "Mantisas: 3 · 4 = 12", "Potencias: 10⁵ · 10⁻² = 10³", "12 · 10³", "Ajustar: 1,2 · 10⁴"], "Producto");

const sumaCient = pasos("Sumar y restar en notación científica igualando los exponentes", ["4,2 · 10⁵ + 3 · 10⁴", "Igualar: 3 · 10⁴ = 0,3 · 10⁵", "Sumar mantisas: 4,2 + 0,3", "= 4,5 · 10⁵", "Comprobar 1 ≤ a < 10 ✓"], "Suma");

const raiz = lienzo("Partes de una raíz: índice, radicando y raíz; la raíz cúbica de ocho es dos porque dos al cubo es ocho", `
  ${tx(46, 60, "3", { fs: 16, c: "var(--red)", fam: D })}
  <path d="M54 72 l8 -6 l10 26 l14 -54 H150" fill="none" stroke="var(--ink)" stroke-width="3"/>
  ${tx(118, 82, "8", { fs: 32, c: "var(--pen)", fam: D })}${tx(196, 82, "= 2", { fs: 26, c: "var(--leaf)", fam: D })}
  ${rot([[40, 112, "índice", "var(--red)"], [118, 112, "radicando", "var(--pen)"], [200, 112, "raíz", "var(--leaf)"]])}
  ${tx(130, 150, "porque 2³ = 8", { fs: 14, c: "var(--muted)" })}`);

const exponenteFr = formula("Un radical es una potencia de exponente fraccionario", "ⁿ√aᵐ = aᵐ/ⁿ", ["Índice → denominador", "√5 = 5^(1/2)   ∛4 = 4^(1/3) = 2^(2/3)", "Así valen todas las propiedades"], "var(--leaf)");

const cuadrados = barras("Cuadrados perfectos: uno, cuatro, nueve, dieciséis, veinticinco, treinta y seis", [["1²", 1], ["2²", 4], ["3²", 9], ["4²", 16], ["5²", 25], ["6²", 36]], { titulo: "Cuadrados perfectos", c: "var(--inf)" });

const extraer = pasos("Extraer factores de un radical: descomponer y sacar los factores que forman grupos del tamaño del índice", ["√72 = ?", "72 = 2³ · 3²", "= √(2² · 2 · 3²)", "Salen 2 y 3: 2 · 3 √2", "√72 = 6√2"], "Extraer factores");

const semejantes = comparar("Solo se suman radicales semejantes: mismo índice y mismo radicando", [
  ["Se suman", ["3√2 + 5√2", "= 8√2", "semejantes"], "var(--leaf)"],
  ["No se suman", ["√2 + √3", "≠ √5", "distinto radicando"], "var(--red)"],
], "Sumar radicales");

const crecer = ejes("Crecimiento exponencial: dos elevado a x crece mucho más deprisa que dos por x", { x: [0, 6], y: [0, 40], paso: 1, pasoY: 10, marcasX: [1, 2, 3, 4, 5], marcasY: [10, 20, 30], curvas: [{ f: (x) => 2 ** x, c: "var(--red)", t: "y = 2ˣ", tx: 4.1, ty: 34 }, { f: (x) => 2 * x, c: "var(--pen)", t: "y = 2x", tx: 5.3, ty: 15 }] });

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Potencias y raíces",
  minutos: 110,
  objetivos: [
    "Calcular potencias de exponente natural y entero, también de base negativa o fraccionaria",
    "Aplicar las propiedades de las potencias para simplificar expresiones",
    "Escribir y operar números en notación científica",
    "Relacionar raíces y potencias de exponente fraccionario",
    "Simplificar radicales y operar con radicales sencillos",
    "Reconocer el crecimiento exponencial en situaciones reales",
  ],
  claves: ["potencia", "base", "exponente", "exponente negativo", "notación científica", "radical", "índice", "extraer factores"],
  pregunta: {
    texto: "Si doblas una hoja de papel por la mitad 10 veces, ¿cuántas capas tendrá?",
    respuesta: "Cada doblez multiplica por 2: <mark>2¹⁰ = 1.024 capas</mark>. Si se pudiera doblar 42 veces, el grosor llegaría a la Luna. Las potencias describen crecimientos rapidísimos, como el de una epidemia o el de los ahorros con interés compuesto.",
  },
  lectura: {
    titulo: "Granos de trigo en un tablero",
    html: `<p>Cuenta una leyenda de la India que el inventor del ajedrez presentó el juego a su rey, y este, encantado, le ofreció la recompensa que quisiera. El sabio pidió algo aparentemente modesto: un grano de trigo por la primera casilla del tablero, dos por la segunda, cuatro por la tercera, ocho por la cuarta, y así, doblando, hasta la casilla 64.</p><p>El rey se rió de una petición tan pequeña y ordenó que se la pagaran. Pero sus contables tardaron poco en volver asustados. En la última casilla había que poner 2⁶³ granos, y en total 2⁶⁴ − 1, unos 18 trillones de granos (1,8 · 10¹⁹). Eso pesa más de mil veces la cosecha mundial de trigo de un año entero.</p><p>La leyenda enseña algo que la humanidad olvida a menudo: lo que crece multiplicándose, aunque empiece pequeño, acaba siendo gigantesco. Así crecen las bacterias, los contagios de un virus, los ahorros a interés compuesto o los seguidores de un vídeo viral. En este tema aprenderás el lenguaje de las potencias para manejar esos números, la notación científica para escribirlos sin llenar páginas de ceros y las raíces, que son la operación inversa.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Potencias de exponente natural</h3><p>Una <b>potencia</b> es una forma abreviada de escribir un producto de factores iguales: <mark>aⁿ = a · a · … · a</mark> (n veces). El número que se repite, a, es la <b>base</b>, y el número de veces, n, es el <b>exponente</b>. Así, 2⁵ = 2 · 2 · 2 · 2 · 2 = 32. Se lee «dos elevado a cinco»; los exponentes 2 y 3 tienen nombres propios: «al cuadrado» y «al cubo», porque dan el área de un cuadrado y el volumen de un cubo.</p><p>Por convenio, a¹ = a. Y conviene no confundir 2⁵ con 2 · 5: la potencia crece muchísimo más deprisa. 10⁶ es un millón, mientras que 10 · 6 es solo 60.</p><p>Las potencias aparecen al contar posibilidades (con 4 cifras del 0 al 9 hay 10⁴ contraseñas), al medir superficies y volúmenes (un cubo de 3 cm de arista tiene 3³ = 27 cm³) y al describir crecimientos que se multiplican, como el de la lectura.</p>`, svg: definicion },
    { html: `<h3>1.2 Potencias de base negativa y de base fraccionaria</h3><p>Cuando la base es negativa hay que escribirla entre paréntesis, y el signo del resultado depende del exponente. Con exponente <b>par</b>, el resultado es <b>positivo</b>, porque los signos menos se emparejan: (−2)⁴ = (−2)(−2)(−2)(−2) = +16. Con exponente <b>impar</b>, el resultado es <b>negativo</b>: (−2)³ = −8.</p><p>Hay que distinguir bien (−3)² = 9 de −3² = −9. En el segundo caso, el exponente afecta solo al 3, y el signo menos se coloca después. Es uno de los errores más comunes en exámenes y en la calculadora.</p><p>Si la base es una fracción, se elevan numerador y denominador: (2/3)³ = 8/27. Si la fracción es propia (menor que 1), sus potencias son cada vez <b>más pequeñas</b>: (1/2)¹ = 0,5; (1/2)² = 0,25; (1/2)³ = 0,125. Lo mismo ocurre con los decimales menores que 1: 0,1² = 0,01.</p>`, svg: signos },
    { html: `<h3>1.3 Producto y cociente de potencias de la misma base</h3><p>Al multiplicar potencias de la <b>misma base</b>, se deja la base y se <b>suman los exponentes</b>: <mark>aᵐ · aⁿ = aᵐ⁺ⁿ</mark>. Se entiende contando factores: 2³ · 2⁴ = (2 · 2 · 2) · (2 · 2 · 2 · 2) = 2⁷.</p><p>Al dividir potencias de la misma base, se deja la base y se <b>restan los exponentes</b>: <mark>aᵐ : aⁿ = aᵐ⁻ⁿ</mark> (con a ≠ 0). Por ejemplo, 5⁶ : 5² = 5⁴, porque al simplificar la fracción (5 · 5 · 5 · 5 · 5 · 5)/(5 · 5) se tachan dos cincos arriba y abajo.</p><p>Estas reglas solo valen si la base es la misma. 2³ · 3² no se puede escribir como una sola potencia, pero 2³ · 4² sí, porque 4 = 2²: 2³ · (2²)² = 2³ · 2⁴ = 2⁷. Buscar una base común es un truco muy útil para simplificar expresiones largas.</p>`, svg: producto, video: { id: "hddC6yR51-s", titulo: "Propiedades de la potenciación: potencias con exponentes negativos", canal: "Matemáticas profe Alex", vistas: 1894729, megusta: 0 } },
    { html: `<h3>1.4 Potencia de una potencia, de un producto y de un cociente</h3><p>Para elevar una potencia a otra potencia, se deja la base y se <b>multiplican los exponentes</b>: <mark>(aᵐ)ⁿ = aᵐ·ⁿ</mark>. Por ejemplo, (3²)⁴ = 3² · 3² · 3² · 3² = 3⁸.</p><p>La potencia de un <b>producto</b> es el producto de las potencias: (a · b)ⁿ = aⁿ · bⁿ. Por ejemplo, (2 · 5)³ = 2³ · 5³ = 8 · 125 = 1.000 = 10³. Leída al revés, esta propiedad permite agrupar: 4³ · 25³ = (4 · 25)³ = 100³ = 1.000.000. Lo mismo ocurre con el <b>cociente</b>: (a/b)ⁿ = aⁿ/bⁿ.</p><p>Atención: la potencia <b>no se reparte</b> con la suma ni con la resta. (a + b)² no es a² + b²: (1 + 2)² = 9, mientras que 1² + 2² = 5. En el tema de polinomios verás que (a + b)² = a² + 2ab + b².</p>`, svg: potpot },
    { html: `<h3>1.5 Exponente cero y exponente negativo</h3><p>¿Qué significa 2⁰ o 2⁻³? No podemos multiplicar el 2 «cero veces» ni «menos tres veces», así que se definen para que las propiedades sigan funcionando. Por la regla del cociente, 2³ : 2³ = 2⁰; pero cualquier número entre sí mismo da 1. Por tanto, <mark>a⁰ = 1</mark> para todo a ≠ 0.</p><p>Del mismo modo, 2² : 2⁵ = 2⁻³ y, simplificando, (2 · 2)/(2 · 2 · 2 · 2 · 2) = 1/2³. Por tanto, <mark>a⁻ⁿ = 1/aⁿ</mark>: un exponente negativo significa «la inversa». Así, 2⁻³ = 1/8, 10⁻² = 1/100 = 0,01 y (2/3)⁻² = (3/2)² = 9/4.</p><p>El dibujo lo muestra: en la secuencia 2³, 2², 2¹, 2⁰, 2⁻¹… cada vez que el exponente baja una unidad se divide entre 2, y la cuenta sigue con naturalidad: 8, 4, 2, 1, 1/2, 1/4. Un exponente negativo <b>no</b> hace negativo el resultado.</p>`, svg: negativo },
    { html: `<h3>1.6 Potencias de base 10</h3><p>Las potencias de 10 son especialmente cómodas en nuestro sistema decimal. Si el exponente es positivo, 10ⁿ es un 1 seguido de n ceros: 10³ = 1.000, 10⁶ = 1.000.000 (un millón), 10⁹ (mil millones, un «billón» en inglés), 10¹² (un billón en español).</p><p>Si el exponente es negativo, 10⁻ⁿ es un decimal con la cifra 1 en el lugar n después de la coma: 10⁻¹ = 0,1; 10⁻³ = 0,001; 10⁻⁶ = 0,000001 (una millonésima).</p><p>Multiplicar por 10ⁿ desplaza la coma n lugares a la derecha, y multiplicar por 10⁻ⁿ la desplaza n lugares a la izquierda: 3,7 · 10⁴ = 37.000 y 3,7 · 10⁻³ = 0,0037. Los prefijos del sistema internacional son potencias de 10: kilo (10³), mega (10⁶), giga (10⁹), mili (10⁻³), micro (10⁻⁶), nano (10⁻⁹).</p>`, svg: base10 },
    { html: `<h3>1.7 Notación científica</h3><p>Los científicos manejan números enormes (la distancia a una galaxia) y diminutos (el tamaño de un virus). Para escribirlos sin errores usan la <b>notación científica</b>: <mark>a · 10ⁿ</mark>, donde a es un número con <b>una sola cifra entera distinta de cero</b> (1 ≤ a &lt; 10) y n es un entero. El número a se llama mantisa y n, orden de magnitud.</p><p>Para escribir 384.000 en notación científica, se coloca la coma tras la primera cifra (3,84) y se cuentan los lugares que se ha movido: 5. Por tanto, 3,84 · 10⁵. Para 0,00025, la coma se mueve 4 lugares a la derecha: 2,5 · 10⁻⁴. Regla rápida: números grandes, exponente positivo; números menores que 1, exponente negativo.</p><p>Las calculadoras muestran la notación científica de forma abreviada: «3.84E5» o «3.84×10⁰⁵». Comparar dos números en notación científica es sencillo: primero se mira el exponente y, si es igual, la mantisa.</p>`, svg: cientifica, video: { id: "W4AwXQfn_o4", titulo: "Escribir un número en notación científica", canal: "Matemáticas profe Alex", vistas: 3840001, megusta: 0 } },
    { html: `<h3>1.8 Operaciones en notación científica</h3><p>Para <b>multiplicar</b> se multiplican las mantisas y se suman los exponentes; para <b>dividir</b>, se dividen las mantisas y se restan los exponentes. Después, si la mantisa no está entre 1 y 10, se ajusta. Ejemplo: (3 · 10⁵) · (4 · 10⁻²) = 12 · 10³ = <mark>1,2 · 10⁴</mark>. Y (6 · 10⁸) : (2 · 10³) = 3 · 10⁵.</p><p>Para <b>sumar o restar</b> hay que igualar antes los exponentes, normalmente al mayor: 4,2 · 10⁵ + 3 · 10⁴ = 4,2 · 10⁵ + 0,3 · 10⁵ = 4,5 · 10⁵. Si los exponentes son muy distintos, el número pequeño apenas influye: 10²⁰ + 1 es, en la práctica, 10²⁰.</p><p>Para elevar a una potencia, se eleva la mantisa y se multiplican exponentes: (2 · 10³)² = 4 · 10⁶. En la calculadora se usa la tecla EXP o ×10ˣ para introducir el exponente, y no hay que teclear «× 10».</p>`, svg: opCient },
    { html: `<h3>1.9 Sumar y restar con distinto orden de magnitud</h3><p>Cuando los exponentes son distintos, igualar es imprescindible. Un ejemplo con números reales: la masa de la Tierra es 5,97 · 10²⁴ kg y la de la Luna, 7,35 · 10²² kg. ¿Cuánto suman? Pasamos la Luna a 10²⁴: 0,0735 · 10²⁴. Total: (5,97 + 0,0735) · 10²⁴ ≈ <mark>6,04 · 10²⁴ kg</mark>.</p><p>En la resta ocurre lo mismo: 8 · 10⁻³ − 5 · 10⁻⁴ = 8 · 10⁻³ − 0,5 · 10⁻³ = 7,5 · 10⁻³. Si al final la mantisa queda menor que 1 o mayor o igual que 10, se reajusta: 0,6 · 10⁵ = 6 · 10⁴.</p><p>Comprueba siempre el resultado con una estimación: si sumas un número del orden de 10²⁴ y otro de 10²², el resultado debe seguir siendo del orden de 10²⁴. Este tipo de razonamiento, llamado estimación del orden de magnitud, es una herramienta fundamental en ciencias.</p>`, svg: sumaCient },
    { html: `<h3>2.1 Raíces</h3><p>La <b>raíz enésima</b> de un número a es otro número b que, elevado a n, da a: <mark>ⁿ√a = b si bⁿ = a</mark>. El número n es el <b>índice</b> (si es 2 no se escribe), a es el <b>radicando</b> y b, la <b>raíz</b>. Así, √49 = 7 porque 7² = 49, y ∛8 = 2 porque 2³ = 8. La raíz es la operación inversa de la potencia.</p><p>El signo importa. Si el índice es <b>par</b>, un número positivo tiene dos raíces opuestas (7 y −7 son raíces de 49; con el símbolo √ se indica la positiva) y un número negativo <b>no tiene</b> raíz real: √−4 no existe en los reales, porque ningún número al cuadrado da negativo. Si el índice es <b>impar</b>, hay una única raíz con el mismo signo que el radicando: ∛−27 = −3.</p><p>Las raíces aparecen al calcular el lado de un cuadrado conocida su área, la arista de un cubo conocido su volumen o la hipotenusa con el teorema de Pitágoras.</p>`, svg: raiz },
    { html: `<h3>2.2 Raíces exactas y aproximadas</h3><p>Una raíz es <b>exacta</b> cuando el radicando es una potencia perfecta: 1, 4, 9, 16, 25, 36… son <b>cuadrados perfectos</b> y 1, 8, 27, 64, 125… son cubos perfectos. Conviene saberse de memoria los cuadrados hasta 15² = 225.</p><p>Si el radicando no es un cuadrado perfecto, la raíz no es exacta: √20 está entre 4 y 5, porque 4² = 16 &lt; 20 &lt; 25 = 5². Se puede afinar probando: 4,4² = 19,36 y 4,5² = 20,25, luego √20 ≈ 4,47. Estas raíces tienen infinitas cifras decimales sin periodo: son números <b>irracionales</b>.</p><p>Con la calculadora se obtienen al instante, pero saber estimarlas mentalmente ayuda a detectar errores. Por ejemplo, si un cálculo te da √50 ≈ 25, sabes que está mal, porque √50 está entre 7 y 8.</p>`, svg: cuadrados },
    { html: `<h3>2.3 Radicales y potencias de exponente fraccionario</h3><p>Una expresión como √5 o ∛4 se llama <b>radical</b>. Todo radical se puede escribir como una <b>potencia de exponente fraccionario</b>: <mark>ⁿ√aᵐ = aᵐ/ⁿ</mark>. El índice pasa al denominador y el exponente del radicando al numerador. Así, √5 = 5^(1/2), ∛4 = 4^(1/3) y ∛(2²) = 2^(2/3).</p><p>Esta equivalencia tiene una gran ventaja: todas las propiedades de las potencias valen también para los radicales. Por ejemplo, √2 · ∛2 = 2^(1/2) · 2^(1/3) = 2^(5/6) = ⁶√(2⁵). Y √(√16) = (16^(1/2))^(1/2) = 16^(1/4) = 2.</p><p>Dos radicales son <b>equivalentes</b> si representan el mismo número: √3 = ⁴√9, porque 3^(1/2) = 3^(2/4). Simplificar un radical consiste en dividir índice y exponente entre un divisor común, igual que se simplifica una fracción: ⁶√(5⁴) = ∛(5²).</p>`, svg: exponenteFr },
    { html: `<h3>2.4 Extraer factores de un radical</h3><p>Muchos radicales se pueden escribir de forma más sencilla <b>sacando factores</b> fuera de la raíz. Se descompone el radicando en factores primos y, para una raíz cuadrada, cada <b>pareja</b> de factores iguales sale fuera como un solo factor; para una raíz cúbica, cada <b>trío</b>.</p><p>Ejemplo: √72. Como 72 = 2³ · 3² = 2² · 2 · 3², salen un 2 y un 3, y dentro queda un 2: √72 = 2 · 3 · √2 = <mark>6√2</mark>. Otro: ∛54 = ∛(2 · 3³) = 3∛2. También funciona con letras: √(x⁵) = x²√x.</p><p>El proceso inverso, <b>introducir</b> un factor, consiste en elevarlo al índice y meterlo dentro: 3√2 = √(9 · 2) = √18. Esto sirve para comparar radicales: ¿qué es mayor, 3√2 o 2√5? Introduciendo: √18 frente a √20, luego 2√5 es mayor.</p>`, svg: extraer, video: { id: "v7GAIYShWBk", titulo: "Simplificar radicales: explicación a detalle", canal: "Matemáticas con Grajeda", vistas: 572062, megusta: 0 } },
    { html: `<h3>2.5 Operaciones con radicales</h3><p>Para <b>multiplicar o dividir</b> radicales del mismo índice, se multiplican o dividen los radicandos: √a · √b = √(a · b) y √a : √b = √(a : b). Por ejemplo, √2 · √8 = √16 = 4 y √50 : √2 = √25 = 5.</p><p>Para <b>sumar o restar</b>, en cambio, los radicales deben ser <b>semejantes</b>: mismo índice y mismo radicando. Se suman sus coeficientes como si fueran términos semejantes de álgebra: 3√2 + 5√2 = 8√2. No se pueden sumar √2 + √3, ni mucho menos escribir √2 + √3 = √5 (1,41 + 1,73 = 3,14, mientras que √5 ≈ 2,24).</p><p>A menudo, para poder sumar hay que extraer factores primero: √12 + √27 = 2√3 + 3√3 = <mark>5√3</mark>. Y para elevar un radical a una potencia, se eleva el radicando: (√3)⁴ = √(3⁴) = 9. Las mismas ideas sirven en 4º para racionalizar denominadores.</p>`, svg: semejantes },
    { html: `<h3>3.1 El crecimiento exponencial</h3><p>Cuando una cantidad se <b>multiplica</b> por el mismo número en cada paso, su valor después de n pasos es una potencia. Una población de 100 bacterias que se duplica cada hora tendrá 100 · 2ⁿ bacterias al cabo de n horas: 3.200 a las 5 horas y más de 100.000 a las 10 horas. Este tipo de crecimiento se llama <b>exponencial</b>, porque la variable está en el exponente.</p><p>El dibujo compara y = 2x (crecimiento lineal: se suma 2 cada vez) con y = 2ˣ (crecimiento exponencial: se multiplica por 2). Al principio van parecidos, pero enseguida la exponencial se dispara. Por eso cuesta tanto intuir su rapidez, como le pasó al rey de la lectura.</p><p>El exponencial también puede ser decreciente: un medicamento que se elimina a la mitad cada 6 horas, o la radiactividad de un material, que se reduce a la mitad en cada «periodo de semidesintegración». Ahí aparecen las potencias de exponente negativo: (1/2)ⁿ = 2⁻ⁿ.</p>`, svg: crecer },
  ],
  ejemplos: [
    { enunciado: "Simplifica y expresa como una sola potencia: (2⁵ · 2⁻²) : (2³)².", pasos: ["Numerador: 2⁵⁺⁽⁻²⁾ = 2³.", "Denominador: 2⁶.", "2³ : 2⁶ = 2⁻³."], resultado: "2⁻³ = 1/8." },
    { enunciado: "Calcula: (−3)² − 3² + (−1)⁵ + (2/5)⁻¹.", pasos: ["(−3)² = 9; 3² = 9; (−1)⁵ = −1; (2/5)⁻¹ = 5/2.", "9 − 9 − 1 + 5/2 = 3/2."], resultado: "3/2." },
    { enunciado: "Simplifica: (4³ · 8²) / 16².", pasos: ["Todo en base 2: 4³ = 2⁶, 8² = 2⁶, 16² = 2⁸.", "2⁶ · 2⁶ / 2⁸ = 2¹² / 2⁸ = 2⁴."], resultado: "16." },
    { enunciado: "Calcula en notación científica: (6,4 · 10⁷) · (5 · 10⁻³) : (2 · 10²).", pasos: ["Mantisas: 6,4 · 5 : 2 = 16.", "Potencias: 10⁷⁻³⁻² = 10².", "16 · 10² = 1,6 · 10³."], resultado: "1,6 · 10³." },
    { enunciado: "Simplifica: √18 + √50 − √8.", pasos: ["√18 = 3√2; √50 = 5√2; √8 = 2√2.", "(3 + 5 − 2)√2."], resultado: "6√2." },
    { enunciado: "Un cultivo tiene 500 bacterias y se triplica cada día. ¿Cuántas habrá en una semana? Exprésalo en notación científica.", pasos: ["Tras n días: 500 · 3ⁿ.", "n = 7: 500 · 3⁷ = 500 · 2.187 = 1.093.500."], resultado: "≈ 1,09 · 10⁶ bacterias." },
  ],
  errores: [
    "Multiplicar base por exponente: 2⁵ no es 10.",
    "Confundir (−3)² = 9 con −3² = −9.",
    "Pensar que un exponente negativo da un resultado negativo: 2⁻³ = 1/8.",
    "Aplicar las propiedades a bases distintas o a sumas: 2³ · 3² ≠ 6⁵; (a + b)² ≠ a² + b².",
    "Dejar la mantisa fuera de [1, 10) en notación científica (12 · 10³ debe ser 1,2 · 10⁴).",
    "Sumar radicales no semejantes: √2 + √3 ≠ √5.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Calcula: 3⁴, (−2)⁵, (−5)², −5² y (1/3)³.", sol: "81; −32; 25; −25; 1/27." },
    { nivel: "básico", q: "Expresa como una sola potencia: a) 7³ · 7⁵ b) 9⁸ : 9⁶ c) (4²)³.", sol: "a) 7⁸ b) 9² c) 4⁶." },
    { nivel: "básico", q: "Calcula: 5⁰, 2⁻⁴, 10⁻³ y (3/4)⁻¹.", sol: "1; 1/16; 0,001; 4/3." },
    { nivel: "básico", q: "Escribe como potencia de 10: 100.000; 0,0001; un millón; una milésima.", sol: "10⁵; 10⁻⁴; 10⁶; 10⁻³." },
    { nivel: "básico", q: "Escribe en notación científica: 45.000.000; 0,00072; 1.230; 0,5.", sol: "4,5 · 10⁷; 7,2 · 10⁻⁴; 1,23 · 10³; 5 · 10⁻¹." },
    { nivel: "básico", q: "Escribe en forma decimal: 3,2 · 10⁴ y 6,05 · 10⁻³.", sol: "32.000; 0,00605." },
    { nivel: "básico", q: "Calcula: √81, ∛125, ∛−64, ⁴√16.", sol: "9; 5; −4; 2." },
    { nivel: "básico", q: "¿Entre qué dos enteros están √30 y √90?", sol: "√30 entre 5 y 6 (25 < 30 < 36). √90 entre 9 y 10 (81 < 90 < 100)." },
    { nivel: "básico", q: "Escribe como potencia de exponente fraccionario: √7, ∛5², ⁵√x.", sol: "7^(1/2); 5^(2/3); x^(1/5)." },
    { nivel: "básico", q: "Extrae factores: √12, √45, √200.", sol: "2√3; 3√5; 10√2." },
    { nivel: "básico", q: "Suma: 4√3 + 2√3 − √3.", sol: "5√3." },
    { nivel: "básico", q: "¿Cuántas capas hay tras doblar una hoja 7 veces?", sol: "2⁷ = 128 capas." },
    { nivel: "medio", q: "Simplifica: (3⁴ · 3⁻²)³ : (3²)⁴.", sol: "(3²)³ = 3⁶; 3⁶ : 3⁸ = 3⁻² = 1/9." },
    { nivel: "medio", q: "Simplifica usando base 2: (8² · 4⁻¹) / 2³.", sol: "2⁶ · 2⁻² / 2³ = 2¹ = 2." },
    { nivel: "medio", q: "Calcula: (2/3)⁻² · (3/2)⁻¹ − (1/2)⁰.", sol: "9/4 · 2/3 − 1 = 3/2 − 1 = 1/2." },
    { nivel: "medio", q: "Simplifica: (a³ · b⁻²)² · a⁻⁴ · b⁵.", sol: "a⁶b⁻⁴ · a⁻⁴b⁵ = a²b." },
    { nivel: "medio", q: "Calcula en notación científica: (2,5 · 10⁶) · (4 · 10⁻⁹).", sol: "10 · 10⁻³ = 1 · 10⁻²." },
    { nivel: "medio", q: "Calcula: 3,6 · 10⁵ + 4 · 10⁴ − 2 · 10³.", sol: "3,6 · 10⁵ + 0,4 · 10⁵ − 0,02 · 10⁵ = 3,98 · 10⁵." },
    { nivel: "medio", q: "La luz recorre 3 · 10⁵ km/s. ¿Cuántos km recorre en un año (3,15 · 10⁷ s)?", sol: "3 · 3,15 · 10¹² = 9,45 · 10¹² km (un año luz)." },
    { nivel: "medio", q: "Un glóbulo rojo mide 7 · 10⁻⁶ m. ¿Cuántos caben en fila en 1 cm?", sol: "10⁻² : (7 · 10⁻⁶) ≈ 0,143 · 10⁴ ≈ 1.430 glóbulos." },
    { nivel: "medio", q: "Simplifica: √27 + √12 − √75.", sol: "3√3 + 2√3 − 5√3 = 0." },
    { nivel: "medio", q: "Calcula: √3 · √12 y √98 : √2.", sol: "√36 = 6; √49 = 7." },
    { nivel: "medio", q: "Ordena de menor a mayor sin calculadora: 3√2, 2√3, √17.", sol: "√18, √12, √17 → 2√3 < √17 < 3√2." },
    { nivel: "medio", q: "Escribe como un solo radical: √2 · ∛2.", sol: "2^(1/2 + 1/3) = 2^(5/6) = ⁶√32." },
    { nivel: "avanzado", q: "Simplifica: (12² · 18⁻¹) / (6³ · 2⁻²).", sol: "12² = 2⁴3², 18⁻¹ = 2⁻¹3⁻², 6³ = 2³3³, 2⁻²: numerador 2³, denominador 2·3³ → 2²/3³ = 4/27." },
    { nivel: "avanzado", q: "Calcula la suma de los granos de las 10 primeras casillas del tablero (1 + 2 + 4 + … + 2⁹) y compárala con 2¹⁰.", sol: "1.023 = 2¹⁰ − 1. Siempre, 1 + 2 + … + 2ⁿ⁻¹ = 2ⁿ − 1." },
    { nivel: "avanzado", q: "La masa de un átomo de hidrógeno es 1,67 · 10⁻²⁷ kg. ¿Cuántos átomos hay en 1 g?", sol: "10⁻³ : 1,67 · 10⁻²⁷ ≈ 0,599 · 10²⁴ ≈ 6 · 10²³ átomos." },
    { nivel: "avanzado", q: "Una hoja tiene 0,1 mm de grosor. ¿Qué grosor tendría tras 42 dobleces? Compáralo con la distancia a la Luna (3,84 · 10⁵ km).", sol: "0,1 mm = 10⁻⁷ km. 2⁴² ≈ 4,4 · 10¹². Grosor ≈ 4,4 · 10⁵ km: más que la distancia a la Luna." },
    { nivel: "avanzado", q: "Simplifica: √(x⁷ y⁴) para x, y > 0.", sol: "x³y²√x." },
    { nivel: "avanzado", q: "Calcula: (√5 + √20)² .", sol: "√20 = 2√5 → (3√5)² = 9 · 5 = 45." },
    { nivel: "avanzado", q: "Un medicamento se reduce a la mitad cada 6 horas. Si se toman 400 mg, ¿cuánto queda a las 24 horas? Exprésalo con una potencia.", sol: "24 h = 4 periodos: 400 · (1/2)⁴ = 400 · 2⁻⁴ = 25 mg." },
    { nivel: "avanzado", q: "Halla x: 2ˣ = 1/32; 9ˣ = 27.", sol: "2ˣ = 2⁻⁵ → x = −5. 3²ˣ = 3³ → x = 3/2." },
    { nivel: "avanzado", q: "¿Qué es mayor, 2¹⁰⁰ o 10³⁰? Razónalo sin calculadora usando 2¹⁰ = 1.024.", sol: "2¹⁰⁰ = (2¹⁰)¹⁰ = 1.024¹⁰ > 1.000¹⁰ = 10³⁰. Es mayor 2¹⁰⁰." },
    { nivel: "avanzado", q: "Demuestra que a⁰ = 1 usando la regla del cociente.", sol: "aⁿ : aⁿ = aⁿ⁻ⁿ = a⁰, y también aⁿ : aⁿ = 1 (un número entre sí mismo). Por tanto a⁰ = 1 (a ≠ 0)." },
    { nivel: "avanzado", q: "Un cubo tiene 343 cm³ de volumen. ¿Cuánto mide su diagonal de una cara?", sol: "Arista ∛343 = 7 cm. Diagonal de la cara: √(7² + 7²) = 7√2 ≈ 9,9 cm." },
  ],
  quiz: [
    { q: "2⁵ =", o: ["10", "25", "32", "7"], a: 2, e: "2·2·2·2·2." },
    { q: "(−3)⁴ =", o: ["−81", "81", "−12", "12"], a: 1, e: "Exponente par: positivo." },
    { q: "−2⁴ =", o: ["16", "−16", "8", "−8"], a: 1, e: "El exponente solo afecta al 2." },
    { q: "5³ · 5⁴ =", o: ["5⁷", "5¹²", "25⁷", "10⁷"], a: 0, e: "Se suman exponentes." },
    { q: "(7²)³ =", o: ["7⁵", "7⁶", "7⁸", "49³ no se simplifica"], a: 1, e: "Se multiplican exponentes." },
    { q: "8⁰ =", o: ["0", "8", "1", "no existe"], a: 2, e: "a⁰ = 1." },
    { q: "3⁻² =", o: ["−9", "−6", "1/9", "9"], a: 2, e: "Inversa de 3²." },
    { q: "(1/2)⁻³ =", o: ["1/8", "8", "−8", "−1/8"], a: 1, e: "(2/1)³." },
    { q: "0,00056 en notación científica:", o: ["56 · 10⁻⁵", "5,6 · 10⁻⁴", "5,6 · 10⁴", "0,56 · 10⁻³"], a: 1, e: "Mantisa entre 1 y 10." },
    { q: "7,1 · 10⁶ es…", o: ["710.000", "7.100.000", "71.000.000", "0,0000071"], a: 1, e: "La coma 6 lugares a la derecha." },
    { q: "(2 · 10³) · (5 · 10⁴) =", o: ["10 · 10⁷", "1 · 10⁸", "7 · 10⁷", "1 · 10¹²"], a: 1, e: "10 · 10⁷ = 10⁸." },
    { q: "Para sumar en notación científica hay que…", o: ["sumar exponentes", "igualar exponentes", "multiplicar mantisas", "nada especial"], a: 1, e: "Después se suman mantisas." },
    { q: "∛−8 =", o: ["2", "−2", "no existe", "±2"], a: 1, e: "Índice impar: mismo signo." },
    { q: "√−9 en los reales…", o: ["−3", "3", "no existe", "±3"], a: 2, e: "Ningún número al cuadrado es negativo." },
    { q: "√40 está entre…", o: ["5 y 6", "6 y 7", "7 y 8", "20 y 21"], a: 1, e: "36 < 40 < 49." },
    { q: "∛(5²) como potencia:", o: ["5^(3/2)", "5^(2/3)", "5⁶", "5^(1/6)"], a: 1, e: "Índice al denominador." },
    { q: "√50 =", o: ["25√2", "5√2", "2√5", "10√5"], a: 1, e: "50 = 5² · 2." },
    { q: "2√3 + 5√3 =", o: ["7√6", "7√3", "10√3", "7√9"], a: 1, e: "Radicales semejantes." },
    { q: "√2 · √18 =", o: ["√20", "6", "36", "2√9"], a: 1, e: "√36." },
    { q: "Una población que se duplica cada hora crece de forma…", o: ["lineal", "exponencial", "constante", "decreciente"], a: 1, e: "Se multiplica por 2 cada hora." },
  ],
  examen: [
    { q: "(2³)² · 2⁻⁴ =", o: ["2²", "2⁵", "2¹⁰", "2⁻²"], a: 0, e: "2⁶ · 2⁻⁴." },
    { q: "(−1)¹⁰¹ =", o: ["1", "−1", "101", "−101"], a: 1, e: "Exponente impar." },
    { q: "10⁻⁵ =", o: ["−100.000", "0,00001", "0,000001", "−50"], a: 1, e: "Uno en la quinta cifra decimal." },
    { q: "(9 · 10⁸) : (3 · 10⁻²) =", o: ["3 · 10⁶", "3 · 10¹⁰", "6 · 10¹⁰", "3 · 10⁻¹⁶"], a: 1, e: "8 − (−2) = 10." },
    { q: "4,5 · 10⁵ + 5 · 10⁴ =", o: ["9,5 · 10⁹", "5 · 10⁵", "9,5 · 10⁵", "4,55 · 10⁵"], a: 1, e: "4,5 + 0,5 = 5." },
    { q: "√75 =", o: ["5√3", "3√5", "25√3", "15"], a: 0, e: "75 = 25 · 3." },
    { q: "√8 + √32 =", o: ["√40", "6√2", "8√2", "4√2"], a: 1, e: "2√2 + 4√2." },
    { q: "8^(2/3) =", o: ["4", "16/3", "2", "64"], a: 0, e: "(∛8)² = 2²." },
  ],
  feynman: ["Por qué a⁰ = 1 y qué significa un exponente negativo", "Cómo se escribe y se opera en notación científica", "Qué relación hay entre raíces y potencias", "Por qué solo se pueden sumar radicales semejantes"],
  figura: {
    titulo: "Las reglas de las potencias en una tabla",
    svg: resumen("Resumen de las propiedades de las potencias y los radicales", [
      ["Misma base", "aᵐ · aⁿ = aᵐ⁺ⁿ     aᵐ : aⁿ = aᵐ⁻ⁿ", "var(--pen)"],
      ["Potencia", "(aᵐ)ⁿ = aᵐⁿ     (ab)ⁿ = aⁿbⁿ", "var(--leaf)"],
      ["Exponentes", "a⁰ = 1     a⁻ⁿ = 1/aⁿ     ⁿ√aᵐ = aᵐ/ⁿ", "var(--red)"],
      ["N. científica", "a · 10ⁿ con 1 ≤ a < 10", "var(--inf)"],
    ]),
  },
  video: { id: "OOXA0C_Y87k", titulo: "Potencias con exponentes negativos: potencia de fracciones, explicación", canal: "Matemáticas profe Alex", vistas: 682891, megusta: 0 },
  mapa: mapa("POTENCIAS", "var(--red)", [
    ["Propiedades", "sumar · restar · multiplicar exp.", "var(--pen)"],
    ["Exponente ≤ 0", "a⁰ = 1 · a⁻ⁿ = 1/aⁿ", "var(--leaf)"],
    ["N. científica", "a · 10ⁿ · 1 ≤ a < 10", "var(--sun)"],
    ["Radicales", "aᵐ/ⁿ · extraer · semejantes", "var(--inf)"],
  ], 250),
  glosario: [
    ["Potencia", "Producto de factores iguales: aⁿ."],
    ["Base", "Factor que se repite en una potencia."],
    ["Exponente", "Número de veces que se repite la base."],
    ["Exponente negativo", "a⁻ⁿ = 1/aⁿ: indica la inversa."],
    ["Notación científica", "Escritura a · 10ⁿ con 1 ≤ a < 10."],
    ["Mantisa", "Número a de la notación científica."],
    ["Orden de magnitud", "Exponente de 10 en la notación científica."],
    ["Raíz enésima", "Número que elevado a n da el radicando."],
    ["Índice", "Número n de la raíz ⁿ√a."],
    ["Radicando", "Número que está dentro de la raíz."],
    ["Radical", "Expresión con raíz, como √5 o ∛4."],
    ["Radicales semejantes", "Radicales con el mismo índice y el mismo radicando."],
    ["Cuadrado perfecto", "Número que es el cuadrado de un entero: 1, 4, 9, 16…"],
    ["Crecimiento exponencial", "Crecimiento en el que se multiplica por el mismo número en cada paso."],
  ],
  situacion: {
    titulo: "Del átomo a la galaxia",
    reto: "Vais a construir una escala del universo, desde el núcleo de un átomo hasta el universo observable, usando notación científica, y a comparar los tamaños con potencias de 10.",
    pasos: [
      "Buscad en fuentes fiables el tamaño de 12 objetos: átomo, virus, bacteria, célula, hormiga, persona, edificio, montaña, Tierra, Sol, sistema solar y Vía Láctea.",
      "Escribid todos los tamaños en metros y en notación científica.",
      "Ordenadlos y calculad cuántas veces es mayor cada uno que el anterior (división en notación científica).",
      "Representadlos en una tira de papel donde cada paso sea una potencia de 10.",
      "Escribid tres datos sorprendentes con los cálculos que los justifican.",
    ],
    producto: "Un mural «Potencias de 10» con la escala, los cálculos y los datos curiosos.",
    evaluacion: ["Expresa correctamente las medidas en notación científica.", "Opera con potencias y notación científica sin errores.", "Representa la escala con coherencia.", "Cita fuentes y comunica los resultados con claridad."],
  },
  tarjetas: [
    ["aᵐ · aⁿ", "aᵐ⁺ⁿ"], ["aᵐ : aⁿ", "aᵐ⁻ⁿ"], ["(aᵐ)ⁿ", "aᵐ·ⁿ"], ["a⁰", "1 (a ≠ 0)"],
    ["a⁻ⁿ", "1/aⁿ"], ["(−a)ⁿ", "+ si n par, − si n impar"], ["Notación científica", "a · 10ⁿ, 1 ≤ a < 10"],
    ["Sumar en n. c.", "Igualar exponentes"], ["ⁿ√aᵐ", "aᵐ/ⁿ"], ["√(a·b)", "√a · √b"],
    ["Extraer factores", "Grupos del tamaño del índice salen"], ["Sumar radicales", "Solo semejantes"],
  ],
  familias: ["Haced el experimento de doblar una hoja y contad las capas.", "Buscad números grandes en noticias y escribidlos en notación científica.", "Calculad juntos cuánto crecería un ahorro que se duplica cada año.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido numérico: potencias de exponente entero y fraccionario, propiedades, notación científica, raíces y radicales sencillos; modelos de crecimiento exponencial (RD 217/2022, Matemáticas 3º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Plegar papel y registrar capas y grosor.", "Vídeo «Potencias de diez» (Eames, 1977) como introducción a la notación científica.", "Simulación de contagios con dados para ver el crecimiento exponencial.", "Construir con papel cuadrados de área 2, 8 y 18 para visualizar √2, 2√2 y 3√2."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes: potencias y raíces (INTEF)", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-13",
};
