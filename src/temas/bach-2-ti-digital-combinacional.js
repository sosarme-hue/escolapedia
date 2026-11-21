// Tecnología e Ingeniería II 2º Bachillerato · Tema 10. Nivel libro. Dibujos propios en SVG.
const { marco, T, ficha, pasos, compara, rejilla, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU } = require("./_bach2-ti");

// Símbolos de puertas lógicas (x, y = esquina superior izquierda; 34 × 28).
const bola = (x, y) => `<circle cx="${x + 4}" cy="${y}" r="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>`;
const forma = {
  and: (x, y) => `<path d="M${x} ${y} h 18 a 14 14 0 0 1 0 28 h -18 z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>`,
  or: (x, y) => `<path d="M${x} ${y} q 10 14 0 28 q 24 0 34 -14 q -10 -14 -34 -14 z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>`,
  not: (x, y) => `<path d="M${x} ${y} l 26 14 l -26 14 z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${bola(x + 26, y + 14)}`,
};
forma.nand = (x, y) => forma.and(x, y) + bola(x + 32, y + 14);
forma.nor = (x, y) => forma.or(x, y) + bola(x + 34, y + 14);
forma.xor = (x, y) => forma.or(x + 4, y) + `<path d="M${x - 2} ${y} q 10 14 0 28" fill="none" stroke="var(--ink)" stroke-width="2"/>`;
const puerta = (tipo, x, y) => {
  const dos = tipo !== "not", sal = { and: 32, or: 34, not: 34, nand: 40, nor: 42, xor: 38 }[tipo];
  const ent = dos ? `<path d="M${x - 10} ${y + 8} h 12 M${x - 10} ${y + 20} h 12" stroke="var(--ink)" stroke-width="1.8"/>` : `<path d="M${x - 10} ${y + 14} h 10" stroke="var(--ink)" stroke-width="1.8"/>`;
  return ent + forma[tipo](x, y) + `<path d="M${x + sal} ${y + 14} h 10" stroke="var(--ink)" stroke-width="1.8"/>`;
};

const puertasSVG = marco("Símbolos de las puertas lógicas con sus expresiones: AND es A por B, OR es A más B, NOT es A negada, NAND es A por B negado, NOR es A más B negado y XOR es A o exclusiva B", [
  ["and", "AND", "A·B"], ["or", "OR", "A+B"], ["not", "NOT", "Ā"], ["nand", "NAND", "(A·B)‾"], ["nor", "NOR", "(A+B)‾"], ["xor", "XOR", "A⊕B"],
].map(([t, n, e], i) => { const x = 28 + (i % 3) * 84, y = 22 + Math.floor(i / 3) * 82; return `${puerta(t, x, y)}${T(x + 18, y + 48, n, { fs: 11, b: true, c: "var(--pen)" })}${T(x + 18, y + 64, e, { fs: 11, b: true })}`; }).join(""));

// Mapa de Karnaugh de cuatro variables con F = B'D' + BD.
const karnaughSVG = (() => {
  const x0 = 80, y0 = 44, w = 40, h = 28, cols = ["00", "01", "11", "10"], vals = [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]];
  const celdas = vals.map((fila, r) => fila.map((v, c) => `<rect x="${x0 + c * w}" y="${y0 + r * h}" width="${w}" height="${h}" fill="var(--card)" stroke="var(--muted)" stroke-width="1.2"/>${T(x0 + c * w + w / 2, y0 + r * h + 19, String(v), { fs: 13, b: v === 1, c: v ? "var(--ink)" : "var(--muted)" })}`).join("")).join("");
  const cab = cols.map((t, i) => `${T(x0 + i * w + w / 2, y0 - 8, t, { fs: 10.5, b: true, c: "var(--pen)" })}${T(x0 - 10, y0 + i * h + 19, t, { fs: 10.5, b: true, c: "var(--pen)", a: "end" })}`).join("");
  const esquina = (x, y, dx, dy) => `<path d="M${x} ${y + dy * 22} V ${y} H ${x + dx * 30}" fill="none" stroke="var(--red)" stroke-width="2.4"/>`;
  return marco("Mapa de Karnaugh de cuatro variables: los unos de las cuatro esquinas forman un grupo, B negada por D negada, y los cuatro del centro otro, B por D", `
  ${cab}${T(48, 30, "AB \\ CD", { fs: 10, b: true, c: "var(--muted)" })}${celdas}
  <rect x="${x0 + w + 4}" y="${y0 + h + 4}" width="${2 * w - 8}" height="${2 * h - 8}" rx="8" fill="none" stroke="var(--leaf)" stroke-width="2.6"/>
  ${esquina(x0 + 3, y0 + 3, 1, 1)}${esquina(x0 + 4 * w - 3, y0 + 3, -1, 1)}${esquina(x0 + 3, y0 + 4 * h - 3, 1, -1)}${esquina(x0 + 4 * w - 3, y0 + 4 * h - 3, -1, -1)}
  ${T(130, 174, "F = B̄·D̄ + B·D", { fs: 12.5, b: true })}`);
})();

// Semisumador.
const semisumadorSVG = marco("Semisumador: una puerta XOR da la suma S y una puerta AND da el acarreo C de dos bits A y B", `
  ${T(24, 44, "A", { fs: 12, b: true, c: "var(--pen)" })}${T(24, 94, "B", { fs: 12, b: true, c: "var(--pen)" })}
  <path d="M34 40 H 70 V 50 H 110 M34 90 H 90 V 62 H 110 M70 40 V 112 H 110 M90 90 V 124 H 110" fill="none" stroke="var(--ink)" stroke-width="1.8"/>
  <circle cx="70" cy="40" r="3" fill="var(--ink)"/><circle cx="90" cy="90" r="3" fill="var(--ink)"/>
  ${forma.xor(116, 42)}${forma.and(116, 104)}<path d="M108 50 h 10 M108 62 h 10 M108 112 h 8 M108 124 h 8" stroke="var(--ink)" stroke-width="1.8"/>
  <path d="M154 56 H 196 M148 118 H 196" stroke="var(--ink)" stroke-width="1.8"/>${T(206, 60, "S = A⊕B", { fs: 11.5, b: true, c: "var(--red)", a: "start" })}${T(206, 122, "C = A·B", { fs: 11.5, b: true, c: "var(--leaf)", a: "start" })}
  ${T(130, 166, "suma de dos bits sin acarreo de entrada", { fs: 10.5, c: "var(--muted)" })}`);

// Display de siete segmentos.
const segmentosSVG = (() => {
  const seg = { a: [70, 30, 40, 8], b: [110, 38, 8, 40], c: [110, 86, 8, 40], d: [70, 126, 40, 8], e: [62, 86, 8, 40], f: [62, 38, 8, 40], g: [70, 78, 40, 8] };
  const on = "abdeg"; // dígito 2
  return marco("Display de siete segmentos mostrando el número 2, con los segmentos a, b, g, e y d encendidos, y la tabla del decodificador BCD a siete segmentos", `
  ${Object.entries(seg).map(([k, [x, y, w, h]]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${on.includes(k) ? "var(--red)" : "var(--line)"}"/>${T(x + w / 2 + (w > h ? 0 : (k === "b" || k === "c" ? 14 : -14)), y + h / 2 + (w > h ? (k === "a" ? -8 : 18) : 4), k, { fs: 10, b: true, c: "var(--muted)" })}`).join("")}
  ${T(190, 50, "BCD 0010", { fs: 11.5, b: true, c: "var(--pen)" })}${T(190, 76, "a b c d e f g", { fs: 10.5, b: true })}${T(190, 96, "1 1 0 1 1 0 1", { fs: 11, b: true, c: "var(--red)" })}${T(190, 128, "decodificador", { fs: 10, c: "var(--muted)" })}${T(190, 142, "BCD → 7 segmentos", { fs: 10, c: "var(--muted)" })}
  ${T(90, 166, "dígito 2", { fs: 11, b: true })}`);
})();

// Multiplexor 4 a 1.
const muxSVG = marco("Multiplexor de cuatro entradas: las líneas de selección S1 y S0 eligen cuál de las entradas I0 a I3 pasa a la salida Y", `
  <path d="M90 26 L 170 50 V 130 L 90 154 Z" fill="var(--card)" stroke="var(--pen)" stroke-width="2.4"/>${T(130, 94, "MUX 4:1", { fs: 12, b: true, c: "var(--pen)" })}
  ${[0, 1, 2, 3].map((i) => `<path d="M46 ${50 + i * 26} H 90" stroke="var(--ink)" stroke-width="1.8"/>${T(40, 54 + i * 26, `I${i}`, { fs: 11, b: true, a: "end" })}`).join("")}
  <path d="M170 90 H 214" stroke="var(--ink)" stroke-width="1.8"/>${T(222, 94, "Y", { fs: 12, b: true, c: "var(--red)", a: "start" })}
  <path d="M116 168 V 146 M144 168 V 138" stroke="var(--ink)" stroke-width="1.8"/>${T(116, 178, "S1", { fs: 10.5, b: true })}${T(144, 178, "S0", { fs: 10.5, b: true })}
  ${T(246, 130, "S1S0 = 10", { fs: 10, c: "var(--muted)", a: "end" })}${T(246, 144, "→ Y = I2", { fs: 10, b: true, c: "var(--red)", a: "end" })}`);

module.exports = {
  materia: "Tecnología e Ingeniería II",
  curso: "2-bachillerato",
  titulo: "Electrónica digital combinacional",
  minutos: 120,
  objetivos: [
    "Operar con los sistemas de numeración binario, octal y hexadecimal y con códigos binarios",
    "Aplicar los postulados y teoremas del álgebra de Boole, incluidas las leyes de De Morgan",
    "Obtener funciones lógicas a partir de tablas de verdad y simplificarlas con mapas de Karnaugh",
    "Implementar funciones con puertas lógicas, incluso solo con NAND o solo con NOR",
    "Diseñar circuitos combinacionales a partir de un enunciado",
    "Describir y usar bloques combinacionales: sumadores, comparadores, codificadores, decodificadores y multiplexores",
  ],
  claves: ["señal digital", "sistema binario", "hexadecimal", "complemento a 2", "código BCD", "código Gray", "álgebra de Boole", "leyes de De Morgan", "puerta lógica", "tabla de verdad", "minitérmino", "mapa de Karnaugh", "NAND universal", "sumador", "decodificador", "multiplexor", "display de siete segmentos"],
  pregunta: {
    texto: "Un procesador de móvil tiene miles de millones de transistores, pero todos sus cálculos se reducen a operaciones con ceros y unos. ¿Cómo se puede sumar, comparar o decidir solo con «sí» y «no»?",
    respuesta: "Combinando muchas veces unas pocas operaciones lógicas muy simples (Y, O, NO), que siguen las reglas del <mark>álgebra de Boole</mark>. Con una puerta O exclusiva y una Y se suman dos bits; encadenando sumadores se suman números de 64 bits; y con comparadores, decodificadores y multiplexores se toman decisiones. Cada puerta es un pequeño grupo de transistores que funcionan como interruptores. La complejidad nace de la combinación de piezas sencillas.",
  },
  lectura: {
    titulo: "El estudiante que unió la lógica y los relés",
    html: `<p>En 1847, el matemático inglés George Boole publicó un pequeño libro en el que trataba los razonamientos lógicos como operaciones algebraicas con dos valores: verdadero y falso. Durante casi un siglo, su álgebra fue una curiosidad para filósofos y matemáticos.</p><p>En 1937, Claude Shannon, un estudiante de 21 años del Instituto Tecnológico de Massachusetts, trabajaba con un enorme analizador diferencial lleno de relés. En su tesis de máster demostró que los circuitos de relés y conmutadores se podían describir y simplificar con el álgebra de Boole: dos interruptores en serie son una función Y, y en paralelo, una función O. Y a la inversa: cualquier operación lógica o aritmética se podía construir con interruptores.</p><p>Se ha dicho que es la tesis de máster más importante del siglo XX. Sobre esa idea se construyeron los primeros ordenadores y, después, los circuitos integrados. En este tema aprenderás a diseñar circuitos digitales con las mismas herramientas que usó Shannon.</p>`,
  },
  bloques: [
    bloque({ h: "10.1 Señales analógicas y digitales", p: [
      "Una <b>señal analógica</b> puede tomar cualquier valor dentro de un intervalo, como la tensión de un micrófono o la temperatura. Una <b>señal digital</b> solo toma un número finito de valores; en la electrónica digital binaria, solo dos: <b>0</b> (nivel bajo, L) y <b>1</b> (nivel alto, H). Cada uno de estos dígitos binarios es un <mark>bit</mark>.",
      "Los circuitos digitales asignan cada nivel lógico a un intervalo de tensiones, lo que los hace muy resistentes al ruido: una señal de 4,6 V o de 4,9 V es igualmente un 1. En la familia TTL, alimentada a 5 V, una entrada se interpreta como 0 si está por debajo de 0,8 V y como 1 por encima de 2 V; la zona intermedia está prohibida. Los circuitos CMOS actuales trabajan con tensiones de 3,3 V, 1,8 V o menos.",
      "Las ventajas de lo digital son la inmunidad al ruido, la facilidad para almacenar, copiar y transmitir la información sin pérdidas, la posibilidad de procesarla con programas y la integración de millones de componentes en un chip. Por eso el mundo analógico se convierte a digital con <b>conversores A/D</b> (por ejemplo, en un sensor) y vuelve a analógico con <b>conversores D/A</b> (en unos auriculares). Los circuitos digitales se dividen en <b>combinacionales</b>, cuyas salidas dependen solo de las entradas en cada instante, y <b>secuenciales</b>, que además tienen memoria (tema siguiente).",
    ], svg: compara("Diferencias entre señales analógicas y digitales y entre circuitos combinacionales y secuenciales", ["Analógica", ["valores continuos", "sensible al ruido", "micrófono, sensor", "→ conversor A/D"]], ["Digital", ["solo 0 y 1", "inmune al ruido", "fácil de procesar", "combinacional o secuencial"]], "var(--muted)", "var(--pen)") }),
    bloque({ h: "10.2 Sistemas de numeración", p: [
      "Un sistema de numeración posicional de base b usa b símbolos y el valor de cada cifra depende de su posición: N = Σ c<sub>i</sub> · b<sup>i</sup>. En electrónica se usan el <b>binario</b> (base 2: 0 y 1), el <b>octal</b> (base 8) y, sobre todo, el <mark>hexadecimal</mark> (base 16: 0-9 y A-F), que permite escribir de forma compacta largas cadenas de bits.",
      "Para pasar de binario a decimal se suman los pesos de los unos: 10011100<sub>2</sub> = 128 + 16 + 8 + 4 = 156. Para pasar de decimal a binario se divide sucesivamente entre 2 y se toman los restos en orden inverso. Como 16 = 2⁴, cada cifra hexadecimal equivale a 4 bits: 1001 1100<sub>2</sub> = 9C<sub>16</sub>; y como 8 = 2³, cada cifra octal equivale a 3 bits: 10 011 100<sub>2</sub> = 234<sub>8</sub>.",
      "Con n bits se representan 2<sup>n</sup> valores distintos (de 0 a 2<sup>n</sup> − 1). La suma binaria sigue las reglas 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (0 y me llevo 1). Para representar <b>números negativos</b> se usa el <b>complemento a 2</b>: se invierten todos los bits y se suma 1. Así, −45 en 8 bits es 11010011 (45 = 00101101 → 11010010 + 1). La ventaja es que la resta se convierte en una suma: A − B = A + (complemento a 2 de B). Con 8 bits en complemento a 2 se representan los números del −128 al +127.",
    ], svg: rejilla("El número 156 en distintas bases: decimal 156, binario 10011100, octal 234 y hexadecimal 9C", ["Base", "156 se escribe", "Agrupación"], [["2 (binario)", "1001 1100", "bits"], ["8 (octal)", "234", "3 bits"], ["16 (hexadecimal)", "9C", "4 bits"], ["10 (decimal)", "156", "—"]], "var(--pen)") }),
    bloque({ h: "10.3 Códigos binarios", p: [
      "Un <b>código</b> es una correspondencia entre un conjunto de símbolos (números, letras) y combinaciones de bits. El binario natural no siempre es el más práctico. En el código <mark>BCD</mark> (decimal codificado en binario), cada cifra decimal se representa por separado con 4 bits: 59 = 0101 1001<sub>BCD</sub>. Las combinaciones de 1010 a 1111 no se usan. Es muy cómodo para mostrar números en displays y calculadoras.",
      "En el <b>código Gray</b>, dos valores consecutivos solo se diferencian en un bit. Se usa en los <b>codificadores de posición</b> (<i>encoders</i>) de los ejes de motores y robots: si en binario natural se pasa de 0111 a 1000, cambian los 4 bits a la vez y, si no lo hacen exactamente en el mismo instante, se pueden leer valores erróneos; en Gray, eso no ocurre. Para pasar de binario a Gray, el primer bit se copia y cada uno de los demás es la O exclusiva de ese bit y el anterior: 1011<sub>2</sub> → 1110<sub>Gray</sub>.",
      "Los <b>códigos alfanuméricos</b> representan letras y símbolos: el <b>ASCII</b> usa 7 bits (la «A» es 65 = 100 0001) y el <b>Unicode</b> (UTF-8) amplía la codificación a todos los idiomas y emojis. Los <b>códigos detectores de errores</b> añaden bits de comprobación; el más sencillo es el <b>bit de paridad</b>, que hace que el número total de unos sea par (o impar). Si al recibir el dato la paridad no coincide, se ha producido un error.",
    ], svg: rejilla("Los números del 0 al 7 en binario natural y en código Gray: en Gray dos valores consecutivos solo se diferencian en un bit", ["Decimal", "Binario", "Gray"], [["0 · 1", "000 · 001", "000 · 001"], ["2 · 3", "010 · 011", "011 · 010"], ["4 · 5", "100 · 101", "110 · 111"], ["6 · 7", "110 · 111", "101 · 100"]], "var(--leaf)") }),
    bloque({ h: "10.4 El álgebra de Boole", p: [
      "El <mark>álgebra de Boole</mark> trabaja con variables que solo pueden valer 0 o 1 y con tres operaciones básicas: la <b>suma lógica</b> u O (A + B, vale 1 si alguna variable vale 1), el <b>producto lógico</b> o Y (A · B, vale 1 solo si todas valen 1) y la <b>negación</b> o NO (Ā, invierte el valor). Sus postulados y teoremas permiten simplificar funciones:",
      formula("A + 0 = A &nbsp; A · 1 = A &nbsp; A + 1 = 1 &nbsp; A · 0 = 0 &nbsp; A + A = A &nbsp; A · A = A &nbsp; A + Ā = 1 &nbsp; A · Ā = 0"),
      "Además se cumplen las propiedades conmutativa, asociativa y distributiva (en las dos formas: A · (B + C) = A·B + A·C y A + B·C = (A + B) · (A + C)), la <b>involución</b> (la doble negación de A es A) y la <b>absorción</b>: A + A·B = A y A + Ā·B = A + B.",
      "Los teoremas más importantes son las <b>leyes de De Morgan</b>, que permiten transformar sumas en productos y al revés:",
      formula("(A + B)‾ = Ā · B̄ &nbsp;&nbsp;&nbsp; (A · B)‾ = Ā + B̄"),
      "Por ejemplo: F = A·B + A·B̄ + Ā·B = A·(B + B̄) + Ā·B = A + Ā·B = A + B. Una función de tres términos se ha reducido a una sola puerta O.",
    ], svg: ficha("Teoremas útiles del álgebra de Boole: absorción y leyes de De Morgan", "Álgebra de Boole", ["A + A·B = A", "A + Ā·B = A + B", "(A + B)‾ = Ā · B̄", "(A · B)‾ = Ā + B̄"], "var(--pen)"), video: V("dc-boole", "Reglas del álgebra de Boole sin memorizar", "álgebra de Boole reglas") }),
    bloque({ h: "10.5 Puertas lógicas", p: [
      "Las <mark>puertas lógicas</mark> son los circuitos electrónicos que realizan las operaciones booleanas. Las básicas son <b>AND</b> (Y), <b>OR</b> (O) y <b>NOT</b> (inversor). Las derivadas son <b>NAND</b> (Y negada), <b>NOR</b> (O negada), <b>XOR</b> (O exclusiva: vale 1 si las entradas son distintas, A ⊕ B = Ā·B + A·B̄) y <b>XNOR</b> (vale 1 si las entradas son iguales; se usa como comparador de bits).",
      "Se representan con símbolos normalizados (los de la norma ANSI, con formas distintas, son los más extendidos; la norma IEC usa rectángulos con un símbolo dentro). Se fabrican en <b>circuitos integrados</b>: por ejemplo, el 74HC00 contiene cuatro puertas NAND de dos entradas, el 74HC02 cuatro NOR, el 74HC04 seis inversores, el 74HC08 cuatro AND, el 74HC32 cuatro OR y el 74HC86 cuatro XOR. La hoja de características indica a qué patillas se conecta cada puerta y la alimentación.",
      "Las puertas NAND y NOR son <b>universales</b>: con solo puertas NAND (o solo NOR) se puede construir cualquier función. Por ejemplo, una NAND con las dos entradas unidas es un inversor, y una NAND seguida de un inversor es una AND. Esto simplifica la fabricación y el montaje, porque basta con un tipo de integrado.",
    ], svg: puertasSVG, video: V("dc-puertas", "Sistema binario y puertas lógicas: la base de cómo funciona tu PC", "puertas lógicas explicación") }),
    bloque({ h: "10.6 Funciones lógicas y formas canónicas", p: [
      "Una <b>función lógica</b> asigna un valor de salida (0 o 1) a cada combinación de las variables de entrada. Se puede expresar mediante su <b>tabla de verdad</b> (con n variables tiene 2<sup>n</sup> filas), mediante una expresión algebraica o mediante un <b>logigrama</b> (el esquema con puertas).",
      "A partir de la tabla de verdad se obtiene directamente la <b>primera forma canónica</b> o suma de productos: se suma un término producto, llamado <mark>minitérmino</mark>, por cada fila en la que la función vale 1. En cada minitérmino aparecen todas las variables, negadas si valen 0 en esa fila y sin negar si valen 1. Se abrevia con la notación F = Σm(…), indicando los números decimales de las filas.",
      "Ejemplo: un sistema de votación para tres jueces (A, B y C) da por válida una prueba si al menos dos votan a favor. La función vale 1 en las filas 3 (011), 5 (101), 6 (110) y 7 (111): F = Σm(3, 5, 6, 7) = Ā·B·C + A·B̄·C + A·B·C̄ + A·B·C. Simplificando, F = A·B + A·C + B·C.",
      "La <b>segunda forma canónica</b> o producto de sumas usa los ceros de la tabla: un término suma, o <b>maxitérmino</b>, por cada fila en la que la función vale 0, con las variables negadas si valen 1. Se escribe F = ΠM(…). Ambas formas son equivalentes; conviene usar la que tenga menos términos.",
    ], svg: rejilla("Tabla de verdad del sistema de votación de tres jueces: la salida vale 1 cuando al menos dos de las tres entradas valen 1", ["A B C", "F", "Minitérmino"], [["0 1 1", "1", "Ā·B·C (m3)"], ["1 0 1", "1", "A·B̄·C (m5)"], ["1 1 0", "1", "A·B·C̄ (m6)"], ["1 1 1", "1", "A·B·C (m7)"], ["resto", "0", "—"]], "var(--red)") }),
    bloque({ h: "10.7 Simplificación por mapas de Karnaugh", p: [
      "Simplificar con el álgebra de Boole exige práctica y no siempre se sabe si se ha llegado a la expresión mínima. El <mark>mapa de Karnaugh</mark> es un método gráfico para funciones de hasta 4 (o 5) variables. Es una tabla con 2<sup>n</sup> casillas, una por cada combinación, ordenadas en <b>código Gray</b> (00, 01, 11, 10), de modo que dos casillas adyacentes solo se diferencian en una variable. Los bordes opuestos también son adyacentes: el mapa se comporta como si estuviera dibujado sobre un donut.",
      "El método consiste en: 1) colocar un 1 en las casillas de los minitérminos; 2) agrupar los unos en rectángulos de 1, 2, 4, 8 o 16 casillas adyacentes, haciendo los grupos <b>lo más grandes posible</b> y usando el <b>menor número de grupos</b>; un 1 puede pertenecer a varios grupos; 3) de cada grupo, escribir el producto de las variables que no cambian dentro de él (negadas si valen 0); 4) sumar los términos obtenidos.",
      "Un grupo de 2 casillas elimina una variable; uno de 4, dos variables; uno de 8, tres. En el mapa del dibujo, F = Σm(0, 2, 5, 7, 8, 10, 13, 15): los cuatro unos de las esquinas forman un grupo (en él solo se mantienen B = 0 y D = 0: B̄·D̄) y los cuatro del centro otro (B = 1 y D = 1: B·D). Resultado: F = B̄·D̄ + B·D, es decir, la XNOR de B y D. ¡Ocho minitérminos de cuatro variables se reducen a dos términos de dos!",
      "Si algunas combinaciones de entrada no pueden darse nunca (por ejemplo, las de 1010 a 1111 en BCD), sus salidas son <b>indiferentes</b> y se marcan con una X: se pueden tomar como 1 o como 0, lo que convenga para formar grupos mayores.",
    ], svg: karnaughSVG, video: V("dc-karnaugh", "Mapa de Karnaugh de cuatro variables", "mapa de Karnaugh 4 variables") }),
    bloque({ h: "10.8 Implementación con puertas NAND o NOR", p: [
      "En la práctica, conviene montar un circuito con el menor número de integrados distintos. Como NAND y NOR son universales, cualquier función simplificada se puede implementar solo con uno de los dos tipos aplicando las leyes de De Morgan.",
      "Para hacerlo <b>solo con NAND</b>, se parte de la función en suma de productos y se niega dos veces (lo que no la cambia), aplicando De Morgan a la negación interior: F = A·B + C·D = ((A·B + C·D)‾)‾ = ((A·B)‾ · (C·D)‾)‾. El resultado son dos NAND de primer nivel (una por producto) cuyas salidas entran en una NAND de segundo nivel. Las variables que aparecen solas o negadas se resuelven con NAND usadas como inversores.",
      "Para hacerlo <b>solo con NOR</b>, se parte del producto de sumas y se aplica la misma técnica: F = (A + B)·(C + D) = ((A + B)‾ + (C + D)‾)‾, con dos NOR de primer nivel y una NOR final. En general, la suma de productos lleva de forma natural a NAND-NAND y el producto de sumas a NOR-NOR.",
      "Por ejemplo, la función de votación F = A·B + A·C + B·C se implementa con tres NAND de dos entradas (para A·B, A·C y B·C) y una NAND de tres entradas: un solo integrado 74HC00 y otro 74HC10 (tres NAND de tres entradas), en lugar de tres AND y dos OR.",
    ], svg: pasos("Método para implementar una función solo con puertas NAND: simplificar en suma de productos, doble negación, aplicar De Morgan y dibujar dos niveles de NAND", ["Simplificar: suma de productos", "Negar dos veces", "De Morgan en la interior", "NAND de 1.er y 2.º nivel"], "var(--pen)") }),
    bloque({ h: "10.9 Diseño de circuitos combinacionales", p: [
      "El diseño de un circuito combinacional sigue un proceso sistemático: 1) analizar el enunciado e identificar las <b>variables de entrada</b> (sensores, pulsadores) y de <b>salida</b> (motores, alarmas, luces), asignándoles el significado de los valores 0 y 1; 2) construir la <b>tabla de verdad</b>; 3) obtener la función en forma canónica y <b>simplificarla</b> por Karnaugh; 4) dibujar el <b>logigrama</b> con las puertas disponibles; 5) <b>simular</b> el circuito (con programas como Logisim, Tinkercad o Proteus) y montarlo.",
      "Ejemplo: el depósito de una planta tiene tres sensores de nivel: A (nivel bajo), B (nivel medio) y C (nivel alto), que valen 1 cuando están cubiertos de agua. Se quiere que la bomba M funcione cuando el nivel esté por debajo de B, y que se encienda una alarma E si los sensores dan una combinación imposible (por ejemplo, C cubierto y A no), lo que indica una avería.",
      "Combinaciones posibles: 000 (vacío), 100 (nivel bajo), 110 (medio) y 111 (lleno). La bomba funciona con 000 y 100: M = B̄ (si las otras combinaciones son indiferentes). La alarma vale 1 con 001, 010, 011 y 101: aplicando Karnaugh, E = Ā·B + Ā·C + B̄·C. El diseño de controles con sensores redundantes que detecten averías es una práctica habitual en seguridad industrial.",
    ], svg: pasos("Proceso de diseño de un circuito combinacional: variables, tabla de verdad, simplificación, logigrama y simulación", ["Variables de entrada y salida", "Tabla de verdad", "Karnaugh: simplificar", "Logigrama y simulación"], "var(--leaf)") }),
    bloque({ h: "10.10 Circuitos aritméticos y comparadores", p: [
      "El <b>semisumador</b> (<i>half adder</i>) suma dos bits A y B y da una suma S y un acarreo C: S = A ⊕ B y C = A · B. Se construye con una XOR y una AND. Pero para sumar números de varios bits hay que tener en cuenta el acarreo que llega de la cifra anterior.",
      "El <mark>sumador completo</mark> (<i>full adder</i>) suma tres bits: A, B y el acarreo de entrada C<sub>in</sub>. Sus funciones son S = A ⊕ B ⊕ C<sub>in</sub> y C<sub>out</sub> = A·B + C<sub>in</sub>·(A ⊕ B). Se construye con dos semisumadores y una puerta OR. Conectando n sumadores completos en cadena, cada uno con el acarreo de salida del anterior, se obtiene un <b>sumador paralelo</b> de n bits, como el integrado 74HC283 de 4 bits. Por ejemplo, 01101 + 00111 = 10100 (13 + 7 = 20).",
      "En un sumador en cadena, el acarreo tarda en propagarse de una etapa a otra, lo que limita la velocidad; los procesadores usan sumadores con <b>acarreo anticipado</b>. Con sumadores y el complemento a 2 se resta, y la <b>unidad aritmético-lógica</b> (ALU) de un procesador combina sumas, restas y operaciones lógicas.",
      "Un <b>comparador</b> indica si dos números son iguales o cuál es mayor. Dos bits son iguales si su XNOR vale 1; dos números son iguales si todos sus bits lo son (se unen las XNOR con una AND). El 74HC85 compara dos números de 4 bits y da tres salidas: A > B, A = B y A < B.",
    ], svg: semisumadorSVG, video: V("dc-sumador", "Sumadores: semisumador y sumador completo", "sumador completo electrónica digital") }),
    bloque({ h: "10.11 Codificadores y decodificadores", p: [
      "Un <b>codificador</b> tiene 2<sup>n</sup> entradas y n salidas: cuando se activa una entrada, da en la salida su número en binario. Los <b>codificadores con prioridad</b> (como el 74HC148, de 8 a 3) dan el código de la entrada de mayor número si se activan varias a la vez. Se usan en teclados: cada tecla es una entrada y el código binario identifica la tecla pulsada.",
      "Un <mark>decodificador</mark> hace lo contrario: tiene n entradas y hasta 2<sup>n</sup> salidas, y activa solo la salida cuyo número coincide con el código de entrada. Por ejemplo, el 74HC138 (de 3 a 8) se usa para seleccionar uno entre ocho chips de memoria según la dirección. Como cada salida corresponde a un minitérmino, con un decodificador y una puerta OR se puede implementar cualquier función.",
      "Un caso muy importante es el <b>decodificador BCD a siete segmentos</b> (como el 74HC4511), que convierte un dígito BCD en las señales que encienden los segmentos a-g de un <b>display</b>. Para mostrar el 2 se encienden a, b, g, e y d. Los displays pueden ser de <b>cátodo común</b> (los segmentos se encienden con un 1) o de <b>ánodo común</b> (se encienden con un 0), y cada segmento necesita una resistencia limitadora.",
    ], svg: segmentosSVG, video: V("dc-deco", "Decodificadores", "decodificador electrónica digital") }),
    bloque({ h: "10.12 Multiplexores y demultiplexores", p: [
      "Un <mark>multiplexor</mark> (MUX) es un conmutador digital: tiene 2<sup>n</sup> entradas de datos, n entradas de selección y una salida. El código de las líneas de selección decide cuál de las entradas pasa a la salida. Por ejemplo, en un MUX de 4 a 1, si S<sub>1</sub>S<sub>0</sub> = 10, la salida es Y = I<sub>2</sub>. Su función es Y = S̄<sub>1</sub>·S̄<sub>0</sub>·I<sub>0</sub> + S̄<sub>1</sub>·S<sub>0</sub>·I<sub>1</sub> + S<sub>1</sub>·S̄<sub>0</sub>·I<sub>2</sub> + S<sub>1</sub>·S<sub>0</sub>·I<sub>3</sub>.",
      "Los multiplexores se usan para enviar varias señales por una sola línea, repartiendo el tiempo (multiplexación temporal), para seleccionar fuentes de datos dentro de un procesador o para encender varios displays con un solo decodificador, iluminándolos uno tras otro tan deprisa que el ojo los ve todos encendidos.",
      "Un MUX también puede <b>implementar funciones lógicas</b>: con un MUX de 8 a 1 (como el 74HC151) se implementa cualquier función de 3 variables conectando las variables a las entradas de selección y poniendo en cada entrada de datos el valor (0 o 1) de la tabla de verdad. Es como una tabla de verdad «de hardware».",
      "El <b>demultiplexor</b> (DEMUX) hace lo contrario: lleva una entrada de datos a una de las 2<sup>n</sup> salidas según el código de selección. En la práctica, un decodificador con entrada de habilitación funciona como demultiplexor.",
    ], svg: muxSVG, video: V("dc-mux", "Multiplexores", "multiplexor electrónica digital") }),
    bloque({ h: "10.13 Lógica programable", p: [
      "Para circuitos complejos, montar decenas de integrados de puertas es inviable. Hoy se usan dispositivos cuya lógica interna se configura por programa. Los <b>PLD</b> (dispositivos lógicos programables) contienen matrices de puertas AND y OR cuyas conexiones se programan, y los <b>CPLD</b> agrupan varios de estos bloques.",
      "Las <mark>FPGA</mark> (matrices de puertas programables en campo) contienen miles o millones de bloques lógicos configurables, basados en pequeñas tablas de verdad (LUT), unidos por una red de conexiones programable. Se describen con <b>lenguajes de descripción de hardware</b> (HDL) como VHDL o Verilog: el diseñador escribe qué debe hacer el circuito y un programa sintetiza las puertas y las conexiones. Se usan en telecomunicaciones, procesamiento de vídeo, prototipos de chips y aceleradores de inteligencia artificial.",
      "En muchos productos, la lógica combinacional se sustituye por un <b>microcontrolador</b> (como los de las placas Arduino) que lee las entradas y calcula las salidas por programa. Es más flexible y barato, pero más lento que la lógica dedicada. Los <b>circuitos integrados de aplicación específica</b> (ASIC), como los procesadores de los móviles, se diseñan con las mismas herramientas y se fabrican en millones de unidades.",
    ], svg: compara("Comparación entre lógica cableada con puertas y lógica programable con FPGA o microcontroladores", ["Lógica cableada", ["puertas 74HC", "rápida y sencilla", "difícil de modificar", "circuitos pequeños"]], ["Lógica programable", ["FPGA · CPLD · µC", "se describe en HDL", "se reprograma", "sistemas complejos"]], "var(--muted)", "var(--pen)") }),
    bloque({ h: "10.14 Familias lógicas y características reales", p: [
      "Las puertas reales se fabrican con transistores siguiendo distintas tecnologías o <b>familias lógicas</b>. La <b>TTL</b> (lógica transistor-transistor), con transistores bipolares, alimentada a 5 V, fue el estándar durante décadas (serie 74LS). La <b>CMOS</b>, con transistores MOSFET complementarios, consume muchísimo menos (casi nada cuando no conmuta), admite un amplio margen de alimentación y es la base de todos los chips actuales (series 4000 y 74HC).",
      "Sus características se dan en las hojas de datos: los <b>niveles de tensión</b> de entrada y salida y el <b>margen de ruido</b>; el <b>abanico de salida</b> (<i>fan-out</i>), o número de entradas que puede alimentar una salida; el <b>tiempo de propagación</b>, que tarda la salida en responder a un cambio de la entrada (unos nanosegundos), y que limita la frecuencia máxima; y la <b>potencia disipada</b>, que en CMOS crece con la frecuencia de conmutación.",
      "Los retardos distintos en caminos paralelos pueden provocar <b>riesgos</b> o <i>glitches</i>: pulsos breves y falsos en la salida durante los cambios de las entradas. Se evitan añadiendo términos redundantes en el mapa de Karnaugh o sincronizando el circuito con un reloj. Al montar, las entradas que no se usan nunca deben dejarse al aire (sobre todo en CMOS): se conectan a 0 o a 1, y se coloca un condensador de desacoplo de 100 nF junto a la alimentación de cada integrado.",
    ], svg: rejilla("Comparación de las familias lógicas TTL y CMOS: tecnología, alimentación, consumo y uso actual", ["Familia", "Alimentación", "Consumo"], [["TTL (74LS)", "5 V", "alto"], ["CMOS (4000)", "3-15 V", "muy bajo"], ["CMOS (74HC)", "2-6 V", "muy bajo"], ["CMOS (chips)", "≤ 1,8 V", "según f"]], "var(--inf)") }),
  ],
  figura: figura("Electrónica digital combinacional", "Del bit a los bloques funcionales", [["Números", "binario · hex", "BCD · Gray"], ["Boole", "puertas · De Morgan", "NAND universal"], ["Diseño", "tabla de verdad", "Karnaugh"], ["Bloques", "sumador · MUX", "decodificador"]], "var(--pen)"),
  video: V("dc-karnaugh", "Mapa de Karnaugh de cuatro variables", "mapa de Karnaugh 4 variables"),
  ejemplos: [
    { enunciado: "Convierte 156 a binario, octal y hexadecimal, y −45 a complemento a 2 con 8 bits.", pasos: ["156 = 128 + 16 + 8 + 4 → 1001 1100<sub>2</sub>.", "Grupos de 3: 10 011 100 → 234<sub>8</sub>; grupos de 4: 1001 1100 → 9C<sub>16</sub>.", "45 = 0010 1101 → invertir: 1101 0010 → +1: 1101 0011."], resultado: "1001 1100<sub>2</sub> = 234<sub>8</sub> = 9C<sub>16</sub>; −45 = 1101 0011." },
    { enunciado: "Simplifica con el álgebra de Boole F = A·B·C + A·B·C̄ + Ā·B·C.", pasos: ["A·B·C + A·B·C̄ = A·B·(C + C̄) = A·B.", "F = A·B + Ā·B·C = B·(A + Ā·C) = B·(A + C).", "F = A·B + B·C."], resultado: "F = B·(A + C)." },
    { enunciado: "Obtén y simplifica la función de votación de tres jueces (vale 1 si al menos dos votan a favor).", pasos: ["F = Σm(3, 5, 6, 7).", "En el mapa de 3 variables se forman tres grupos de 2: A·B, A·C y B·C.", "Cada 1 de m7 participa en los tres grupos."], resultado: "F = A·B + A·C + B·C." },
    { enunciado: "Simplifica por Karnaugh F = Σm(0, 2, 5, 7, 8, 10, 13, 15).", pasos: ["Las esquinas (0, 2, 8, 10) forman un grupo de 4: B = 0 y D = 0 → B̄·D̄.", "El centro (5, 7, 13, 15) forma otro grupo de 4: B = 1 y D = 1 → B·D.", "F = B̄·D̄ + B·D."], resultado: "F = B̄·D̄ + B·D = (B ⊕ D)‾ (XNOR)." },
    { enunciado: "Implementa F = A·B + C·D solo con puertas NAND.", pasos: ["F = ((A·B + C·D)‾)‾.", "De Morgan: (A·B + C·D)‾ = (A·B)‾ · (C·D)‾.", "F = ((A·B)‾ · (C·D)‾)‾: dos NAND de entrada y una NAND de salida."], resultado: "Tres puertas NAND de dos entradas (un solo 74HC00)." },
    { enunciado: "Suma en binario 13 + 7 con un sumador de 5 bits y comprueba el resultado.", pasos: ["13 = 01101; 7 = 00111.", "Bit a bit desde la derecha: 1+1 = 0 (me llevo 1); 0+1+1 = 0 (1); 1+1+1 = 1 (1); 1+0+1 = 0 (1); 0+0+1 = 1.", "Resultado: 10100 = 16 + 4 = 20."], resultado: "01101 + 00111 = 10100 (20)." },
  ],
  errores: [
    "Ordenar las filas y columnas del mapa de Karnaugh en binario natural (00, 01, 10, 11): deben ir en código Gray (00, 01, 11, 10).",
    "Hacer grupos de 3 o 6 casillas en Karnaugh: solo valen potencias de 2.",
    "Olvidar que los bordes del mapa de Karnaugh son adyacentes.",
    "Aplicar mal De Morgan: (A·B)‾ no es Ā·B̄, sino Ā + B̄.",
    "Confundir BCD con binario natural: 15 en BCD es 0001 0101, no 1111.",
    "Dejar entradas sin conectar en circuitos CMOS: deben llevarse a 0 o a 1.",
  ],
  ejercicios: [
    B("Pasa a decimal: 101101<sub>2</sub>, 3F<sub>16</sub> y 157<sub>8</sub>.", "45; 63; 111."),
    B("Pasa 200 a binario y a hexadecimal.", "1100 1000<sub>2</sub> = C8<sub>16</sub>."),
    B("¿Cuántos valores se pueden representar con 10 bits? ¿Y con 16?", "1 024 y 65 536."),
    B("Escribe 47 en BCD y en binario natural.", "BCD: 0100 0111; binario: 101111."),
    B("Calcula el complemento a 2 de 00011000 (8 bits). ¿Qué número representa?", "11101000, que representa −24."),
    B("Completa la tabla de verdad de la XOR de dos variables.", "00 → 0; 01 → 1; 10 → 1; 11 → 0."),
    B("Simplifica: a) A + A·B; b) A·(A + B); c) A + Ā·B.", "a) A; b) A; c) A + B."),
    B("Aplica De Morgan a (A + B + C)‾ y a (A·B̄)‾.", "Ā·B̄·C̄; Ā + B."),
    B("¿Cómo se construye un inversor con una puerta NAND?", "Uniendo sus dos entradas (o poniendo una a 1)."),
    B("Escribe la primera forma canónica de una función de dos variables que vale 1 en las filas 1 y 2.", "F = Ā·B + A·B̄ (es la XOR)."),
    B("¿Qué segmentos se encienden en un display para mostrar el 7? ¿Y el 4?", "7: a, b, c. 4: b, c, f, g."),
    B("Con un MUX de 4 a 1, ¿qué entrada pasa a la salida si S1S0 = 01?", "I1."),
    M("Pasa 1011 0110 a Gray y explica para qué sirve este código.", "1110 1101. En encoders de posición: entre valores consecutivos solo cambia un bit, lo que evita lecturas erróneas."),
    M("Resta en binario con complemento a 2 (8 bits): 50 − 23.", "50 = 0011 0010; −23 = 1110 1001. Suma: 1 0001 1011 → se descarta el acarreo: 0001 1011 = 27."),
    M("Simplifica con el álgebra de Boole F = Ā·B̄·C + Ā·B·C + A·B̄·C.", "Ā·C·(B̄ + B) + A·B̄·C = Ā·C + A·B̄·C = C·(Ā + A·B̄) = C·(Ā + B̄)."),
    M("Simplifica por Karnaugh F(A, B, C) = Σm(1, 3, 5, 6, 7).", "Grupo de 4 con C = 1 (1, 3, 5, 7): C. Grupo de 2 (6, 7): A·B. F = C + A·B."),
    M("Simplifica por Karnaugh F(A, B, C, D) = Σm(0, 1, 2, 3, 8, 9, 10, 11).", "Grupo de 8 con B = 0: F = B̄."),
    M("Simplifica F(A, B, C, D) = Σm(4, 5, 6, 7, 12, 13, 14, 15) + Σm(0, 1).", "Grupo de 8 (B = 1): B. Grupo de 4 (0, 1, 4, 5): Ā·C̄. F = B + Ā·C̄."),
    M("Implementa F = A·B + C̄ solo con NAND.", "F = ((A·B)‾ · C)‾: una NAND para A·B y otra con su salida y C (C̄ negada es C). Dos NAND."),
    M("Implementa F = (A + B)·C̄ solo con NOR.", "F = ((A + B)‾ + C)‾: una NOR para A + B y otra NOR con su salida y C."),
    M("Diseña un circuito con tres interruptores que encienda una luz si hay un número impar de interruptores activados.", "F = Σm(1, 2, 4, 7) = A ⊕ B ⊕ C (dos puertas XOR). No se simplifica por Karnaugh porque no hay unos adyacentes."),
    M("Diseña un comparador de dos números de 2 bits (A1A0 y B1B0) que dé 1 si son iguales.", "F = (A1 ⊙ B1)·(A0 ⊙ B0), con dos XNOR y una AND."),
    M("Implementa F(A, B, C) = Σm(0, 3, 5, 6) con un MUX de 8 a 1.", "Selección: A, B, C. Entradas I0 = 1, I3 = 1, I5 = 1, I6 = 1; las demás a 0."),
    A("Un coche avisa con una señal acústica S si: la llave está puesta (L) y alguna puerta abierta (P); o si las luces están encendidas (E) y la llave quitada; o si la llave está puesta y el cinturón sin abrochar (C = 0). Obtén y simplifica la función.", "S = L·P + L̄·E + L·C̄. Por Karnaugh no se reduce más (los términos no se absorben). Se implementa con NAND: S = ((L·P)‾ · (L̄·E)‾ · (L·C̄)‾)‾."),
    A("Diseña el circuito que active la alarma de avería del depósito con tres sensores de nivel A (bajo), B (medio) y C (alto), si las combinaciones imposibles son 001, 010, 011 y 101.", "E = Σm(1, 2, 3, 5). Karnaugh: grupo (1, 3): Ā·C; grupo (2, 3): Ā·B; grupo (1, 5): B̄·C. E = Ā·B + Ā·C + B̄·C."),
    A("Diseña un circuito que detecte si un número BCD (D C B A) es mayor que 5, usando las combinaciones 1010-1111 como indiferentes.", "F = Σm(6, 7, 8, 9) + X(10-15). Karnaugh: D (grupo de 8 con indiferentes) + C·B (6, 7, 14, 15). F = D + C·B."),
    A("Obtén las funciones de los segmentos a y g de un decodificador BCD a siete segmentos de cátodo común y simplifícalas usando las indiferencias.", "a = 1 en 0, 2, 3, 5, 6, 7, 8, 9 → a = D + B + C·A + C̄·Ā (con D, C, B, A, de mayor a menor peso). g = 1 en 2, 3, 4, 5, 6, 8, 9 → g = D + B·C̄ + C·B̄ + B·Ā."),
    A("Diseña un sumador completo a partir de su tabla de verdad y demuestra que C<sub>out</sub> = A·B + C<sub>in</sub>·(A ⊕ B).", "C<sub>out</sub> = Σm(3, 5, 6, 7) = A·B + A·C<sub>in</sub> + B·C<sub>in</sub> (como la votación). A·C<sub>in</sub> + B·C<sub>in</sub> = C<sub>in</sub>·(A + B); y como A·B ya está, A + B se puede sustituir por A ⊕ B sin cambiar la función."),
    A("¿Cuántos sumadores completos y cuánto tiempo necesita un sumador de 16 bits en cadena si cada etapa tarda 10 ns en propagar el acarreo? ¿Cuál sería la frecuencia máxima de operación?", "16 sumadores; peor caso: 16 · 10 = 160 ns; f<sub>máx</sub> ≈ 1/160 ns = 6,25 MHz. Por eso se usan sumadores con acarreo anticipado."),
    A("Un sistema de riego debe activarse (R) si la tierra está seca (S), no llueve (L = 0) y es de noche (N), o si la tierra está muy seca (U) aunque sea de día, pero nunca si el depósito está vacío (D = 0). Obtén la función y propón una implementación con un microcontrolador y con puertas.", "R = D·(S·L̄·N + U·L̄). (Se supone que con lluvia tampoco riega.) R = D·L̄·(S·N + U). Con puertas: inversor, AND y OR. Con microcontrolador: leer las cinco entradas y programar la expresión con un if."),
  ],
  quiz: [
    q4("Un bit puede valer…", ["0 a 9", "0 o 1", "0 a 15", "cualquier valor"], 1, "Dígito binario."),
    q4("10011<sub>2</sub> en decimal es…", ["19", "21", "13", "35"], 0, "16 + 2 + 1."),
    q4("FF<sub>16</sub> en decimal es…", ["15", "255", "256", "160"], 1, "15·16 + 15."),
    q4("Con 8 bits en complemento a 2 se representan…", ["0 a 255", "−128 a 127", "−127 a 127", "−255 a 255"], 1, "256 valores."),
    q4("En el código Gray, dos valores consecutivos…", ["son iguales", "se diferencian en un bit", "se diferencian en dos bits", "son complementarios"], 1, "Encoders."),
    q4("El número 25 en BCD es…", ["11001", "0010 0101", "0001 1001", "0101 0010"], 1, "Cada cifra con 4 bits."),
    q4("A + 1 =", ["A", "1", "0", "Ā"], 1, "Postulado."),
    q4("A + Ā·B =", ["A", "A·B", "A + B", "B"], 2, "Absorción."),
    q4("(A·B)‾ =", ["Ā·B̄", "Ā + B̄", "A + B", "A·B"], 1, "De Morgan."),
    q4("La puerta que vale 1 si las entradas son distintas es…", ["AND", "OR", "XOR", "XNOR"], 2, "O exclusiva."),
    q4("Son puertas universales…", ["AND y OR", "NAND y NOR", "XOR y XNOR", "NOT"], 1, "Construyen cualquier función."),
    q4("Una tabla de verdad de 4 variables tiene…", ["4 filas", "8 filas", "16 filas", "32 filas"], 2, "2⁴."),
    q4("En el mapa de Karnaugh, las filas y columnas se ordenan en…", ["binario", "Gray", "BCD", "decimal"], 1, "00, 01, 11, 10."),
    q4("Un grupo de 4 casillas en Karnaugh elimina…", ["1 variable", "2 variables", "3 variables", "4 variables"], 1, "2² = 4."),
    q4("Las combinaciones indiferentes (X)…", ["deben valer 0", "deben valer 1", "se toman como convenga", "no se dibujan"], 2, "Para agrandar grupos."),
    q4("El semisumador tiene como salidas…", ["S = A·B y C = A + B", "S = A ⊕ B y C = A·B", "S = A + B y C = A ⊕ B", "S = A y C = B"], 1, "XOR y AND."),
    q4("Un decodificador de 3 entradas tiene hasta…", ["3 salidas", "6 salidas", "8 salidas", "9 salidas"], 2, "2³."),
    q4("Un multiplexor…", ["lleva una entrada a varias salidas", "selecciona una entrada entre varias", "suma números", "almacena datos"], 1, "Conmutador digital."),
    q4("Un display de cátodo común enciende un segmento con…", ["un 0", "un 1", "corriente alterna", "un pulso"], 1, "Ánodo del LED a 1."),
    q4("Las FPGA se describen con…", ["Ladder", "VHDL o Verilog", "Scratch", "BCD"], 1, "Lenguajes HDL."),
  ],
  examen: [
    q4("110110<sub>2</sub> =", ["54", "36", "62", "27"], 0, "32 + 16 + 4 + 2."),
    q4("200 en hexadecimal es…", ["C8", "8C", "D0", "B8"], 0, "12·16 + 8."),
    q4("Complemento a 2 de 0000 0101 (8 bits):", ["1111 1010", "1111 1011", "1000 0101", "0000 1010"], 1, "Invertir y sumar 1."),
    q4("Simplifica A·B + A·B̄:", ["B", "A", "1", "A·B"], 1, "A·(B + B̄)."),
    q4("Simplifica (A + B)·(A + B̄):", ["A", "B", "1", "A + B"], 0, "Distributiva."),
    q4("F = Σm(0, 1, 2, 3) de A, B, C es…", ["Ā", "A", "C", "B̄"], 0, "Grupo de 4 con A = 0."),
    q4("F = Σm(1, 2) de A, B es…", ["A·B", "A + B", "A ⊕ B", "(A ⊕ B)‾"], 2, "XOR."),
    q4("Para seleccionar 1 de 16 entradas, un MUX necesita…", ["2 líneas de selección", "4 líneas", "8 líneas", "16 líneas"], 1, "2⁴ = 16."),
  ],
  feynman: ["Por qué los ordenadores trabajan en binario y para qué sirve el hexadecimal", "Qué dicen las leyes de De Morgan y para qué se usan", "Cómo se simplifica una función con un mapa de Karnaugh", "Cómo suma un circuito digital dos números", "Qué hace un multiplexor y un decodificador"],
  glosario: [
    ["Bit", "Dígito binario: 0 o 1."],
    ["Hexadecimal", "Sistema de base 16; cada cifra equivale a 4 bits."],
    ["Complemento a 2", "Representación de números negativos que convierte la resta en suma."],
    ["BCD", "Código que representa cada cifra decimal con 4 bits."],
    ["Código Gray", "Código en el que dos valores consecutivos difieren en un solo bit."],
    ["Álgebra de Boole", "Álgebra de variables binarias con las operaciones Y, O y NO."],
    ["Leyes de De Morgan", "Reglas que transforman la negación de una suma en producto de negaciones y al revés."],
    ["Puerta lógica", "Circuito que realiza una operación booleana."],
    ["Tabla de verdad", "Tabla con el valor de la salida para cada combinación de entradas."],
    ["Minitérmino", "Producto de todas las variables que vale 1 en una sola combinación."],
    ["Mapa de Karnaugh", "Método gráfico para simplificar funciones lógicas."],
    ["Puerta universal", "Puerta (NAND o NOR) con la que se puede construir cualquier función."],
    ["Sumador completo", "Circuito que suma dos bits y un acarreo de entrada."],
    ["Decodificador", "Circuito que activa una salida según el código binario de entrada."],
    ["Multiplexor", "Circuito que selecciona una de varias entradas según un código."],
    ["FPGA", "Circuito con bloques lógicos y conexiones programables."],
    ["Tiempo de propagación", "Retardo entre un cambio en la entrada y la respuesta de la salida."],
  ],
  situacion: {
    titulo: "El panel de control del invernadero",
    reto: "Vuestro equipo diseñará el circuito combinacional que controla la ventilación, el riego y una alarma de un invernadero a partir de cuatro sensores (temperatura alta, humedad baja, lluvia y depósito vacío), lo simulará y lo montará con puertas lógicas o lo programará en un microcontrolador.",
    pasos: [
      "Definid las variables de entrada y salida y las condiciones de funcionamiento de cada actuador.",
      "Construid la tabla de verdad, señalando las combinaciones imposibles o indiferentes.",
      "Simplificad cada salida con mapas de Karnaugh y dibujad el logigrama solo con NAND.",
      "Simuladlo (Logisim, Tinkercad) y montadlo en una placa de prototipos con interruptores y LED.",
      "Programad la misma lógica en un microcontrolador y comparad las dos soluciones.",
    ],
    producto: "La documentación de diseño (tablas, mapas, logigramas), la simulación, el montaje y una comparación razonada entre lógica cableada y programada.",
    evaluacion: [
      "Traduce correctamente el enunciado a tablas de verdad.",
      "Simplifica las funciones de forma óptima.",
      "Monta o simula el circuito y comprueba todas las combinaciones.",
      "Justifica la elección entre lógica cableada y programable.",
    ],
  },
  mapa: mapaB("DIGITAL COMBINACIONAL", [
    ["Numeración", "binario · hex · BCD · Gray", "var(--pen)"],
    ["Boole y puertas", "De Morgan · NAND/NOR universales", "var(--red)"],
    ["Diseño", "tabla de verdad · Karnaugh", "var(--leaf)"],
    ["Bloques", "sumador · decodificador · MUX", "var(--inf)"],
  ]),
  tarjetas: [
    ["Binario a hexadecimal", "grupos de 4 bits"],
    ["Complemento a 2", "invertir bits y sumar 1"],
    ["Código Gray", "consecutivos difieren en 1 bit"],
    ["Absorción", "A + A·B = A ; A + Ā·B = A + B"],
    ["De Morgan", "(A+B)‾ = Ā·B̄ ; (A·B)‾ = Ā + B̄"],
    ["XOR", "A ⊕ B = Ā·B + A·B̄"],
    ["Primera forma canónica", "suma de minitérminos (unos)"],
    ["Karnaugh", "grupos de 2ⁿ, lo más grandes posible"],
    ["Solo NAND", "suma de productos → NAND-NAND"],
    ["Semisumador", "S = A ⊕ B ; C = A·B"],
    ["Decodificador", "n entradas → 2ⁿ salidas"],
    ["Multiplexor", "2ⁿ entradas, n de selección, 1 salida"],
  ],
  familias: [
    "Escribid vuestra edad y vuestro año de nacimiento en binario y en hexadecimal.",
    "Buscad en casa displays de siete segmentos (microondas, despertador) y fijaos en cómo forman cada número.",
    "Pensad un ejemplo cotidiano de función Y (todas las condiciones) y otro de función O (alguna condición).",
    "Jugad a adivinar un número del 0 al 63 con seis preguntas de sí o no: ¿por qué bastan seis?",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Sistemas eléctricos y electrónicos» y «Sistemas informáticos»: electrónica digital combinacional; sistemas de numeración y códigos; álgebra de Boole; puertas lógicas; tablas de verdad y simplificación por Karnaugh; diseño de circuitos combinacionales; bloques funcionales (sumadores, codificadores, decodificadores, multiplexores).`,
    ideas: [
      "Simulación de circuitos en Logisim o Tinkercad Circuits antes del montaje en placa de prototipos.",
      "Montaje del sistema de votación y del decodificador BCD a siete segmentos con integrados 74HC.",
      "Reto de diseño solo con NAND: ¿quién usa menos puertas?",
      "Implementación de la misma función con puertas, con MUX y con Arduino, comparando ventajas.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Álgebra de Boole, Wikipedia en español", url: "https://es.wikipedia.org/wiki/%C3%81lgebra_de_Boole" },
    { t: "Mapa de Karnaugh, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Mapa_de_Karnaugh" },
    { t: "Logisim Evolution: simulador libre de circuitos digitales", url: "https://github.com/logisim-evolution/logisim-evolution" },
  ],
  revisado: "2026-11-21",
};
