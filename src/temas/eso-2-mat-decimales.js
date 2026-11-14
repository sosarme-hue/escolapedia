// Matemáticas 2º ESO · Números decimales. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tx, lienzo, pasos, cajas, recta, comparar, formula, resumen, flujo, tabla, psvg, pvid, pvg, C, RD, DECRET, REV } = require("./_eso2L2");
const { baraja } = require("./_eso2L2");

const posicion = lienzo("Tabla de posiciones del número 352,407: centenas, decenas, unidades, décimas, centésimas y milésimas", `
  ${["C", "D", "U", "d", "c", "m"].map((l, i) => `<rect x="${16 + i * 38 + (i > 2 ? 10 : 0)}" y="40" width="34" height="34" rx="6" fill="var(--card)" stroke="${i > 2 ? "var(--red)" : "var(--pen)"}" stroke-width="2"/>${tx(33 + i * 38 + (i > 2 ? 10 : 0), 34, l, { fs: 12, c: "var(--muted)" })}${tx(33 + i * 38 + (i > 2 ? 10 : 0), 63, "352407"[i], { fs: 18, fam: D, c: i > 2 ? "var(--red)" : "var(--pen)" })}`).join("")}
  <circle cx="134" cy="70" r="3.5" fill="var(--ink)"/>
  ${tx(130, 104, "parte entera , parte decimal", { fs: 12, c: "var(--muted)" })}
  ${tx(130, 132, "352 unidades y 407 milésimas", { fs: 13 })}${tx(130, 156, "1 unidad = 10 d = 100 c = 1000 m", { fs: 11.5, c: "var(--muted)" })}`, 170);

const densidad = recta("Entre 2,3 y 2,4 hay infinitos decimales: 2,31, 2,35, 2,38…", {
  r: [2.3, 2.4], marcas: [[2.3, "2,3"], [2.35, "2,35"], [2.4, "2,4"]], titulo: "Entre dos decimales siempre hay otro",
  puntos: [{ x: 2.31, t: "2,31", c: "var(--pen)" }, { x: 2.38, t: "2,38", c: "var(--red)", abajo: true }, { x: 2.345, t: "2,345", c: "var(--leaf)" }],
});

const sumar = lienzo("Para sumar o restar decimales se colocan las comas en columna", `
  ${tx(170, 40, "12,750", { fs: 18, fam: D, a: "end" })}${tx(170, 66, "3,400", { fs: 18, fam: D, a: "end" })}${tx(170, 92, "0,086", { fs: 18, fam: D, a: "end" })}${tx(92, 66, "+", { fs: 18, fam: D })}${tx(92, 92, "+", { fs: 18, fam: D })}
  <path d="M70 102 H190" stroke="var(--ink)" stroke-width="2"/>${tx(170, 126, "16,236", { fs: 18, fam: D, a: "end", c: "var(--red)" })}
  ${tx(130, 158, "comas alineadas · completar con ceros", { fs: 11.5, c: "var(--muted)" })}`, 170);

const multiplicar = pasos("Multiplicar 3,25 por 1,4: se multiplica sin comas y se separan tantas cifras decimales como sumen los factores", ["3,25 · 1,4", "Sin comas: 325 · 14 = 4550", "Decimales: 2 + 1 = 3", "Resultado: 4,550 = 4,55"], "Multiplicar decimales");

const dividir = flujo("Dividir entre un decimal: se multiplican dividendo y divisor por la misma potencia de 10", [
  ["7,2 : 0,24", "ini"], ["Divisor con 2 decimales", "proc"], ["Ambos por 100", "proc"], ["720 : 24", "proc"], ["= 30", "es"],
], "Dividir entre un decimal");

const potencias10 = comparar("Multiplicar y dividir por potencias de 10 desplaza la coma", [
  ["· 10, 100, 1000", ["coma a la derecha", "3,47 · 100 = 347", "0,5 · 1000 = 500"], "var(--leaf)"],
  [": 10, 100, 1000", ["coma a la izquierda", "3,47 : 100 = 0,0347", "52 : 1000 = 0,052"], "var(--red)"],
], "Potencias de 10");

const redondeo = recta("Redondear 4,867 a las centésimas: está más cerca de 4,87 que de 4,86", {
  r: [4.86, 4.87], marcas: [[4.86, "4,86"], [4.865, "4,865"], [4.87, "4,87"]], titulo: "4,867 → 4,87 (más cerca)",
  puntos: [{ x: 4.867, t: "4,867", c: "var(--red)" }], pie: "La mitad, 4,865, decide hacia dónde se redondea",
});

const aproximar = cajas("Formas de aproximar 4,867 a las centésimas: truncar y redondear", [
  ["Truncar", ["cortar: 4,86"], "var(--pen)"],
  ["Redondear", ["7 ≥ 5 → sube", "4,87"], "var(--leaf)"],
  ["Error absoluto", ["|4,867 − 4,87|", "= 0,003"], "var(--sun)"],
  ["Error relativo", ["0,003 : 4,867", "≈ 0,06 %"], "var(--red)"],
], "Aproximar 4,867");

const generatriz = formula("Fracción generatriz de un decimal periódico puro: el periodo entre tantos nueves como cifras tiene", "0,⌢36 = 36/99 = 4/11", ["Periódico puro", "N = 0,3636… ; 100N = 36,36…", "99N = 36 → N = 36/99 = 4/11"], "var(--inf)");

const mixto = pasos("Fracción generatriz de un periódico mixto: 1,2333…", ["N = 1,2333…", "10N = 12,333…", "100N = 123,333…", "100N − 10N = 111 → 90N = 111", "N = 111/90 = 37/30"], "Periódico mixto");

const exacto = formula("Una fracción irreducible da un decimal exacto si su denominador solo tiene los factores 2 y 5", "3/40 = 0,075", ["¿Exacto o periódico?", "40 = 2³ · 5 → exacto", "7/12: 12 = 2² · 3 → periódico"], "var(--leaf)");

const vida = cajas("Decimales en la vida diaria", [
  ["Dinero", ["12,95 €", "céntimos: centésimas"], "var(--sun)"],
  ["Medidas", ["1,75 m", "0,250 kg"], "var(--pen)"],
  ["Tiempo", ["9,58 s", "récord de 100 m"], "var(--red)"],
  ["Precios por kg", ["2,49 €/kg"], "var(--leaf)"],
], "¿Dónde aparecen?");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Números decimales",
  minutos: 105,
  objetivos: [
    "Leer, escribir, ordenar y representar números decimales",
    "Operar con decimales: suma, resta, multiplicación y división",
    "Aproximar por truncamiento y redondeo y calcular el error cometido",
    "Distinguir decimales exactos, periódicos puros, periódicos mixtos e ilimitados no periódicos",
    "Pasar de fracción a decimal y calcular la fracción generatriz",
  ],
  claves: ["décima", "centésima", "milésima", "redondeo", "decimal exacto", "decimal periódico", "periodo", "fracción generatriz"],
  pregunta: {
    texto: "¿Es verdad que 0,999… (con infinitos nueves) es igual a 1?",
    respuesta: "Sí. Si N = 0,999…, entonces 10N = 9,999… Restando: 9N = 9 y <mark>N = 1</mark>. También se ve con fracciones: 1/3 = 0,333…, y 3 · 1/3 = 1 = 0,999… Son dos formas de escribir el mismo número.",
  },
  lectura: {
    titulo: "Una centésima que vale una medalla",
    html: `<p>En los Juegos Olímpicos de Pekín 2008, el nadador Michael Phelps ganó la final de 100 metros mariposa por <b>una centésima de segundo</b>: tocó la pared en 50,58 segundos y su rival, en 50,59. A simple vista los dos llegaron a la vez, pero el cronómetro electrónico, que mide hasta las milésimas, decidió el oro.</p><p>Los números <b>decimales</b> están en todas partes donde hace falta precisión: en el precio del pan (1,15 €), en la estatura (1,62 m), en la fiebre (37,8 °C) o en la nota de un examen (7,25). Fueron popularizados en Europa por el matemático flamenco Simon Stevin en 1585, que defendía que monedas, pesos y medidas se dividieran en décimas, centésimas y milésimas para que todo el mundo pudiera hacer cuentas sin fracciones complicadas. Doscientos años después, la Revolución francesa creó el sistema métrico decimal, que hoy usa casi todo el planeta.</p><p>En este tema aprenderás a operar con decimales, a redondear con sentido, a calcular el error que cometes y a descubrir qué fracción se esconde detrás de un decimal que se repite sin fin.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Las cifras decimales</h3><p>Un <b>número decimal</b> tiene una <b>parte entera</b> y una <b>parte decimal</b>, separadas por una coma: en 352,407 la parte entera es 352 y la decimal, 407. Cada cifra decimal tiene un valor según su posición:</p><ul><li>La primera cifra tras la coma son las <b>décimas</b> (1 d = 0,1 = 1/10).</li><li>La segunda, las <b>centésimas</b> (1 c = 0,01 = 1/100).</li><li>La tercera, las <b>milésimas</b> (1 m = 0,001 = 1/1000).</li></ul><p>Cada unidad equivale a 10 de la posición siguiente: 1 unidad = 10 décimas = 100 centésimas. Se lee la parte entera, después la decimal y el nombre de la última posición: 352,407 se lee «352 unidades y 407 milésimas» o, de manera coloquial, «352 coma 407».</p><p>Los ceros a la derecha de la última cifra decimal no cambian el valor: 2,5 = 2,50 = 2,500. En cambio, los ceros intermedios sí importan: 2,05 es distinto de 2,5.</p>`, svg: posicion },
    { html: `<h3>1.2 Comparar, ordenar y representar</h3><p>Para <b>comparar</b> dos decimales, primero se mira la parte entera: es mayor el que la tiene mayor. Si coinciden, se comparan las décimas, luego las centésimas, y así sucesivamente. Ejemplo: 3,48 y 3,5. La parte entera es igual; en las décimas, 4 &lt; 5, así que <mark>3,48 &lt; 3,5</mark>. Un truco: igualar el número de cifras decimales añadiendo ceros (3,48 y 3,50).</p><p>Error frecuente: pensar que 3,48 es mayor porque «48 es mayor que 5». La parte decimal no se compara como un número entero.</p><p>En la <b>recta numérica</b>, cada intervalo entre dos enteros se divide en 10 partes (décimas), cada décima en 10 partes (centésimas)… Con números negativos se mantiene la regla de los enteros: −2,3 &lt; −2,1 porque −2,3 está más a la izquierda.</p>`, svg: psvg("decimales", 1) },
    { html: `<h3>1.3 Entre dos decimales siempre hay otro</h3><p>Entre dos números enteros consecutivos, como 2 y 3, no hay ningún otro entero. Con los decimales no pasa eso: entre 2,3 y 2,4 está 2,35; entre 2,3 y 2,35 está 2,32; entre 2,3 y 2,32 está 2,31… y podemos seguir sin fin añadiendo cifras. Por eso se dice que los decimales son <b>densos</b>: <mark>entre dos decimales distintos siempre hay infinitos decimales</mark>.</p><p>Un método rápido para encontrar un número entre dos decimales es calcular su <b>media</b>: (2,3 + 2,4) : 2 = 2,35. También puedes añadir un cero a ambos y buscar entre ellos: 2,30 y 2,40 → 2,31, 2,32, … 2,39.</p><p>Esta propiedad tiene una consecuencia práctica: cualquier medida se puede expresar con tanta precisión como queramos, siempre que el instrumento lo permita.</p>`, svg: densidad },
    { html: `<h3>2.1 Sumar y restar decimales</h3><p>Para sumar o restar decimales se colocan los números en columna de forma que las <b>comas queden alineadas</b>: unidades bajo unidades, décimas bajo décimas, centésimas bajo centésimas. Si un número tiene menos cifras decimales, se completan con ceros. Después se opera como con números naturales y se pone la coma en el resultado debajo de las demás.</p><p>Ejemplo: 12,75 + 3,4 + 0,086 = 12,750 + 3,400 + 0,086 = <mark>16,236</mark>.</p><p>En una resta, conviene completar siempre con ceros el minuendo: 5 − 2,37 = 5,00 − 2,37 = 2,63.</p><p>Con decimales negativos se aplican las mismas reglas de signos que con los enteros: −4,2 + 1,75 = −2,45, porque se restan los valores absolutos y se pone el signo del mayor. Para comprobar el resultado, estima antes: 12,75 + 3,4 está cerca de 13 + 3 = 16.</p>`, svg: sumar },
    { html: `<h3>2.2 Multiplicar decimales</h3><p>Para multiplicar dos decimales se multiplican como si fueran números naturales, sin tener en cuenta la coma, y en el resultado se separan, contando desde la derecha, <b>tantas cifras decimales como tengan entre los dos factores</b>.</p><p>Ejemplo: 3,25 · 1,4. Sin comas, 325 · 14 = 4550. Los factores tienen 2 + 1 = 3 cifras decimales, así que el resultado es 4,550 = <mark>4,55</mark>.</p><p>¿Por qué funciona? Porque 3,25 = 325/100 y 1,4 = 14/10, y al multiplicar las fracciones el denominador es 100 · 10 = 1000.</p><p>Observa que, al multiplicar por un número menor que 1, el resultado es más pequeño que el otro factor: 80 · 0,5 = 40 (la mitad) y 80 · 0,25 = 20 (la cuarta parte). Multiplicar por 0,1 es lo mismo que dividir entre 10.</p>`, svg: multiplicar, video: pvid("decimales", 3) },
    { html: `<h3>2.3 Multiplicar y dividir por la unidad seguida de ceros</h3><p>Multiplicar o dividir por 10, 100, 1000… es muy rápido porque solo hay que <b>desplazar la coma</b>:</p><ul><li>Para <b>multiplicar</b>, la coma se mueve a la <b>derecha</b> tantos lugares como ceros: 3,47 · 100 = 347; 0,5 · 1000 = 500 (se añaden ceros si faltan cifras).</li><li>Para <b>dividir</b>, la coma se mueve a la <b>izquierda</b>: 3,47 : 100 = 0,0347; 52 : 1000 = 0,052.</li></ul><p>Esta regla es la base de los <b>cambios de unidades</b> del sistema métrico: 2,5 km = 2,5 · 1000 m = 2500 m; 375 g = 375 : 1000 kg = 0,375 kg. También se usa en la notación científica, que verás en el tema de potencias.</p><p>Multiplicar por 0,1, 0,01 o 0,001 equivale a dividir entre 10, 100 o 1000.</p>`, svg: potencias10 },
    { html: `<h3>2.4 Dividir decimales</h3><p>Hay dos casos:</p><ul><li><b>Dividendo decimal y divisor entero</b>: se divide normalmente y se pone la coma en el cociente al bajar la primera cifra decimal. 9,6 : 4 = 2,4.</li><li><b>Divisor decimal</b>: se multiplican dividendo y divisor por la potencia de 10 necesaria para que el divisor sea entero. El cociente no cambia, porque es como amplificar una fracción. 7,2 : 0,24 → 720 : 24 = <mark>30</mark>.</li></ul><p>Si la división no es exacta, se pueden añadir ceros al dividendo para seguir sacando cifras decimales: 5 : 8 = 0,625. A veces las cifras se repiten sin terminar nunca: 2 : 3 = 0,666… Ahí aparece el decimal periódico.</p><p>Al dividir entre un número menor que 1, el resultado es mayor que el dividendo: 3 : 0,5 = 6, porque en 3 caben 6 mitades.</p>`, svg: dividir, video: pvid("decimales", 4) },
    { html: `<h3>3.1 Aproximar: truncar y redondear</h3><p>Muchas veces no necesitamos todas las cifras de un número y lo <b>aproximamos</b>. Hay dos maneras:</p><ul><li><b>Truncar</b>: se cortan las cifras a partir de la posición elegida. 4,867 truncado a las centésimas es 4,86.</li><li><b>Redondear</b>: se mira la primera cifra que se va a suprimir; si es 5 o mayor, se suma 1 a la última cifra que se conserva; si es menor que 5, se deja igual. 4,867 redondeado a las centésimas es <mark>4,87</mark>; a las décimas, 4,9; a las unidades, 5.</li></ul><p>El redondeo es la forma más usada porque da el valor más cercano. Cuidado con los «arrastres»: 2,996 redondeado a las centésimas es 3,00 (se escriben los ceros para indicar la precisión).</p><p>Aproximar también sirve para <b>estimar</b> resultados antes de calcular: 19,8 · 5,1 es más o menos 20 · 5 = 100.</p>`, svg: redondeo },
    { html: `<h3>3.2 Errores absoluto y relativo</h3><p>Cuando aproximamos, cometemos un <b>error</b>. Se mide de dos formas:</p><ul><li><b>Error absoluto</b>: la diferencia, en valor absoluto, entre el valor real y el aproximado. Si redondeamos 4,867 a 4,87, el error absoluto es |4,867 − 4,87| = 0,003.</li><li><b>Error relativo</b>: el error absoluto dividido entre el valor real. 0,003 : 4,867 ≈ 0,0006, es decir, alrededor del 0,06 %. Indica la <b>calidad</b> de la aproximación.</li></ul><p>¿Por qué hace falta el error relativo? Equivocarse en 1 cm al medir una mesa de 1 m es un error del 1 %; equivocarse en 1 cm al medir la distancia entre dos ciudades es un error insignificante. El error absoluto es el mismo, pero el relativo cambia mucho.</p><p>En ciencias, los resultados se dan con un número de cifras acorde a la precisión del instrumento.</p>`, svg: aproximar },
    { html: `<h3>3.3 Tipos de números decimales</h3><p>Al dividir el numerador de una fracción entre su denominador se obtiene uno de estos tipos de decimales:</p><ul><li><b>Decimal exacto</b>: tiene un número finito de cifras decimales. 3/8 = 0,375.</li><li><b>Periódico puro</b>: justo después de la coma hay un grupo de cifras que se repite sin fin, el <b>periodo</b>. 4/11 = 0,3636… = 0,⌢36.</li><li><b>Periódico mixto</b>: antes del periodo hay cifras que no se repiten, el <b>anteperiodo</b>. 37/30 = 1,2333…</li></ul><p>Existen además decimales <b>ilimitados no periódicos</b>, con infinitas cifras sin ningún patrón que se repita, como π = 3,14159… o √2 = 1,41421… Estos no se pueden escribir como fracción: son los números <b>irracionales</b>.</p><p>Todos los demás (exactos y periódicos) son <b>números racionales</b>.</p>`, svg: psvg("decimales", 5) },
    { html: `<h3>3.4 ¿Exacto o periódico? Mirar el denominador</h3><p>Sin hacer la división se puede saber qué tipo de decimal da una fracción. Primero se simplifica hasta la fracción irreducible y se descompone el denominador en factores primos:</p><ul><li>Si solo aparecen los factores <b>2 y 5</b>, el decimal es <b>exacto</b>. 3/40 → 40 = 2³ · 5 → 0,075.</li><li>Si solo aparecen factores <b>distintos de 2 y 5</b>, es <b>periódico puro</b>. 5/7 → 0,714285714285…</li><li>Si aparecen 2 o 5 <b>junto con otros</b> factores, es <b>periódico mixto</b>. 7/12 → 12 = 2² · 3 → 0,58333…</li></ul><p>La razón es que nuestro sistema es de base 10 = 2 · 5: solo las fracciones cuyo denominador «cabe» en una potencia de 10 se pueden escribir con un número finito de cifras.</p><p>Atención: hay que simplificar antes. 6/15 parece periódico por el 3, pero 6/15 = 2/5 = 0,4.</p>`, svg: exacto },
    { html: `<h3>4.1 La fracción generatriz</h3><p>La <b>fracción generatriz</b> de un decimal es la fracción irreducible que lo produce. Para un <b>decimal exacto</b> es fácil: se escribe el número sin coma dividido entre la unidad seguida de tantos ceros como cifras decimales. 0,075 = 75/1000 = 3/40.</p><p>Para un <b>periódico puro</b> se usa un truco algebraico. Sea N = 0,3636… Como el periodo tiene 2 cifras, se multiplica por 100: 100N = 36,3636… Al restar, la parte que se repite desaparece: 100N − N = 36, luego 99N = 36 y <mark>N = 36/99 = 4/11</mark>.</p><p>Regla práctica: en un periódico puro, la fracción es el periodo dividido entre tantos <b>nueves</b> como cifras tiene el periodo (más la parte entera si la hay). 2,⌢7 = 2 + 7/9 = 25/9.</p>`, svg: generatriz, video: pvid("decimales", 6) },
    { html: `<h3>4.2 Generatriz de un periódico mixto</h3><p>Con un <b>periódico mixto</b> se multiplica dos veces para alinear el periodo. Sea N = 1,2333…</p><ol><li>Se multiplica para que la coma quede justo antes del periodo: 10N = 12,333…</li><li>Se multiplica para que la coma quede después del primer periodo: 100N = 123,333…</li><li>Se restan: 100N − 10N = 123 − 12, así que 90N = 111.</li><li>N = 111/90 = <mark>37/30</mark>.</li></ol><p>Regla práctica: numerador = (número sin coma hasta el final del primer periodo) − (número sin coma hasta el final del anteperiodo); denominador = tantos <b>nueves</b> como cifras tiene el periodo seguidos de tantos <b>ceros</b> como cifras tiene el anteperiodo. Para 1,2333…: (123 − 12)/90 = 111/90.</p><p>Comprueba siempre dividiendo: 37 : 30 = 1,2333… ✔.</p>`, svg: mixto },
    { html: `<h3>4.3 Decimales en la vida diaria</h3><p>Los decimales son el lenguaje de las medidas y del dinero. En los <b>precios</b>, los céntimos son centésimas de euro: 12,95 € son 12 euros y 95 céntimos. En las <b>medidas</b>, el sistema métrico decimal permite pasar de una unidad a otra moviendo la coma: 1,75 m = 175 cm. En el <b>deporte</b>, los cronómetros miden centésimas y milésimas de segundo.</p><p>Al hacer la compra es útil calcular el <b>precio por unidad</b>: si un paquete de 750 g cuesta 2,10 € y otro de 1,2 kg cuesta 3,12 €, el primero sale a 2,10 : 0,75 = 2,80 €/kg y el segundo a 3,12 : 1,2 = 2,60 €/kg. El segundo es más barato.</p><p>Y recuerda redondear con sentido: un precio se da con dos decimales, una nota con uno o dos y una estatura con dos (centímetros). Dar 1,7532 m de estatura no tiene sentido si la cinta métrica solo mide centímetros.</p>`, svg: vida },
  ],
  ejemplos: [
    { enunciado: "Ordena de menor a mayor: 2,305; 2,35; 2,3; 2,053.", pasos: ["Igualamos a tres decimales: 2,305; 2,350; 2,300; 2,053.", "Comparamos las cifras decimales como números: 053 < 300 < 305 < 350."], resultado: "2,053 < 2,3 < 2,305 < 2,35." },
    { enunciado: "Calcula 4,25 · 0,36.", pasos: ["425 · 36 = 15 300.", "Cifras decimales: 2 + 2 = 4.", "1,5300 = 1,53."], resultado: "1,53." },
    { enunciado: "Calcula 1,035 : 0,45.", pasos: ["El divisor tiene 2 decimales: multiplicamos ambos por 100.", "103,5 : 45.", "103,5 : 45 = 2,3."], resultado: "2,3." },
    { enunciado: "Redondea 7,4962 a las décimas, centésimas y milésimas y calcula el error absoluto en el redondeo a las centésimas.", pasos: ["Décimas: la cifra siguiente es 9 → 7,5.", "Centésimas: siguiente 6 → 7,50.", "Milésimas: siguiente 2 → 7,496.", "Error: |7,4962 − 7,50| = 0,0038."], resultado: "7,5; 7,50; 7,496; error 0,0038." },
    { enunciado: "Halla la fracción generatriz de 0,⌢45.", pasos: ["N = 0,4545…; 100N = 45,4545…", "100N − N = 45 → 99N = 45.", "N = 45/99 = 5/11."], resultado: "5/11." },
    { enunciado: "Halla la fracción generatriz de 2,1⌢6 (2,1666…).", pasos: ["N = 2,1666…; 10N = 21,666…; 100N = 216,666…", "100N − 10N = 216 − 21 = 195.", "90N = 195 → N = 195/90 = 13/6."], resultado: "13/6." },
  ],
  errores: [
    "Comparar la parte decimal como un número entero: 3,48 no es mayor que 3,5.",
    "Sumar sin alinear las comas: 12,5 + 3,25 colocando el 5 bajo el 5.",
    "Al multiplicar, alinear las comas o contar mal las cifras decimales.",
    "Al dividir entre un decimal, multiplicar solo el divisor por 10, 100…",
    "Redondear mirando todas las cifras en cadena: 2,346 a las décimas es 2,3, no 2,4.",
    "Calcular la generatriz sin simplificar o sin restar el anteperiodo en los mixtos.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Escribe cómo se leen y descompón: a) 0,07; b) 4,305; c) 12,6.", sol: "a) 7 centésimas = 7 c. b) 4 unidades y 305 milésimas = 4 U + 3 d + 5 m. c) 12 unidades y 6 décimas = 1 D + 2 U + 6 d." },
    { nivel: "básico", q: "Ordena de mayor a menor: 0,9; 0,89; 0,099; 0,91.", sol: "Con tres decimales: 0,900; 0,890; 0,099; 0,910. Orden: 0,91 > 0,9 > 0,89 > 0,099." },
    { nivel: "básico", q: "Escribe un número decimal entre 1,7 y 1,8, y otro entre 0,25 y 0,26.", sol: "Por ejemplo, 1,75 (la media) y 0,255. Hay infinitas posibilidades." },
    { nivel: "básico", q: "Calcula: a) 15,3 + 2,48 + 0,7; b) 20 − 7,65.", sol: "a) 15,30 + 2,48 + 0,70 = 18,48. b) 20,00 − 7,65 = 12,35." },
    { nivel: "básico", q: "Calcula: a) 2,6 · 3,5; b) 0,04 · 1,2.", sol: "a) 26 · 35 = 910; 2 decimales → 9,10 = 9,1. b) 4 · 12 = 48; 3 decimales → 0,048." },
    { nivel: "básico", q: "Calcula mentalmente: 4,7 · 100; 0,36 · 1000; 85 : 100; 2,1 : 1000.", sol: "470; 360; 0,85; 0,0021." },
    { nivel: "básico", q: "Calcula: a) 13,8 : 6; b) 4,5 : 0,9.", sol: "a) 2,3. b) Multiplicamos por 10: 45 : 9 = 5." },
    { nivel: "básico", q: "Redondea 3,1416 a las unidades, décimas, centésimas y milésimas.", sol: "3; 3,1; 3,14; 3,142." },
    { nivel: "básico", q: "Trunca y redondea 8,679 a las centésimas.", sol: "Truncado: 8,67. Redondeado: la cifra siguiente es 9 → 8,68." },
    { nivel: "básico", q: "Clasifica: 0,125; 0,333…; 2,4555…; 3,1415926…", sol: "Exacto; periódico puro (periodo 3); periódico mixto (anteperiodo 4, periodo 5); ilimitado no periódico (π, irracional)." },
    { nivel: "medio", q: "Calcula: 3,5 · (2,4 − 0,8) + 1,2 : 0,4.", sol: "Paréntesis: 1,6. 3,5 · 1,6 = 5,6. 1,2 : 0,4 = 3. 5,6 + 3 = 8,6." },
    { nivel: "medio", q: "Calcula: (−2,5) · 1,4 − 0,75 : (−0,25).", sol: "−3,5 − (−3) = −3,5 + 3 = −0,5." },
    { nivel: "medio", q: "Expresa en metros: 3,6 km; 45 cm; 0,7 dm; 2500 mm.", sol: "3600 m; 0,45 m; 0,07 m; 2,5 m." },
    { nivel: "medio", q: "Sin dividir, indica qué tipo de decimal dan: 7/20, 5/6, 4/9, 9/75.", sol: "7/20: 20 = 2²·5 → exacto. 5/6: 6 = 2·3 → periódico mixto. 4/9: 9 = 3² → periódico puro. 9/75 = 3/25: 25 = 5² → exacto." },
    { nivel: "medio", q: "Calcula la expresión decimal de 5/12 y de 3/7.", sol: "5/12 = 0,41666… (periódico mixto). 3/7 = 0,428571428571… (periódico puro, periodo 428571)." },
    { nivel: "medio", q: "Halla la fracción generatriz de 0,36 y de 2,⌢4.", sol: "0,36 = 36/100 = 9/25. 2,444…: 10N − N = 24,4… − 2,4… = 22 → 9N = 22 → N = 22/9." },
    { nivel: "medio", q: "Halla la fracción generatriz de 0,1⌢2 (0,1222…).", sol: "10N = 1,222…; 100N = 12,222… → 90N = 11 → N = 11/90." },
    { nivel: "medio", q: "Al redondear 12,486 a las décimas, ¿qué error absoluto se comete? ¿Y el relativo?", sol: "12,5; error absoluto |12,486 − 12,5| = 0,014. Relativo: 0,014 : 12,486 ≈ 0,0011 = 0,11 %." },
    { nivel: "medio", q: "Un litro de aceite cuesta 8,45 €. ¿Cuánto cuestan 3,5 L? ¿Cuántos litros se compran con 50 €?", sol: "8,45 · 3,5 = 29,575 ≈ 29,58 €. 50 : 8,45 ≈ 5,92 L (5 botellas enteras de 1 L)." },
    { nivel: "medio", q: "Compara precios: 750 g por 2,10 € o 1,2 kg por 3,12 €.", sol: "2,10 : 0,75 = 2,80 €/kg. 3,12 : 1,2 = 2,60 €/kg. El paquete de 1,2 kg es más barato por kilo." },
    { nivel: "medio", q: "Calcula 0,⌢3 + 0,⌢6 pasando a fracción. ¿Qué observas?", sol: "1/3 + 2/3 = 1. Pero en decimal sería 0,999…, así que 0,999… = 1." },
    { nivel: "medio", q: "Un coche gasta 6,4 L cada 100 km. ¿Cuánto gasta en 275 km? Si el litro cuesta 1,58 €, ¿cuánto cuesta el viaje?", sol: "6,4 : 100 = 0,064 L por km; 0,064 · 275 = 17,6 L. 17,6 · 1,58 = 27,808 ≈ 27,81 €." },
    { nivel: "avanzado", q: "Calcula pasando a fracción: 0,⌢5 · 1,8 − 0,⌢2.", sol: "0,⌢5 = 5/9; 1,8 = 9/5; 0,⌢2 = 2/9. 5/9 · 9/5 = 1. 1 − 2/9 = 7/9 = 0,⌢7." },
    { nivel: "avanzado", q: "Halla la fracción generatriz de 3,⌢142 y comprueba con la calculadora.", sol: "Periodo de 3 cifras: 1000N − N = 3142,142… − 3,142… = 3139 → N = 3139/999. 3139 : 999 = 3,142142…" },
    { nivel: "avanzado", q: "¿Por qué 1/7 da un periodo de 6 cifras y no más? (Pista: los restos posibles al dividir entre 7.)", sol: "Al dividir entre 7, los restos solo pueden ser 1, 2, 3, 4, 5 o 6 (si fuese 0, sería exacto). Como mucho hay 6 restos distintos; cuando uno se repite, las cifras se repiten. Por eso el periodo tiene como máximo 6 cifras." },
    { nivel: "avanzado", q: "La estatura de Marc es 1,684 m y la redondeamos a 1,7 m. La de una torre es 84,3 m y la redondeamos a 84 m. ¿Qué aproximación es mejor?", sol: "Marc: error absoluto 0,016 m; relativo 0,016 : 1,684 ≈ 0,95 %. Torre: error absoluto 0,3 m; relativo 0,3 : 84,3 ≈ 0,36 %. Aunque el error absoluto es mayor, la de la torre es mejor (menor error relativo)." },
    { nivel: "avanzado", q: "Encuentra dos fracciones con decimal periódico cuya suma sea un decimal exacto.", sol: "Por ejemplo, 1/6 = 0,1666… y 1/3 = 0,333… suman 1/2 = 0,5. O 1/3 + 2/3 = 1." },
    { nivel: "avanzado", q: "Una fotocopiadora reduce cada copia al 0,8 del tamaño. Si se copia la copia, ¿qué tamaño tiene la tercera copia respecto al original? Si el original mide 29,7 cm, ¿cuánto mide?", sol: "0,8 · 0,8 · 0,8 = 0,512. 29,7 · 0,512 = 15,2064 ≈ 15,21 cm." },
    { nivel: "avanzado", q: "Phelps hizo 50,58 s y Čavić 50,59 s en 100 m. Calcula la velocidad media de cada uno en m/s con tres decimales. ¿Cuántos centímetros les separaban?", sol: "100 : 50,58 ≈ 1,977 m/s; 100 : 50,59 ≈ 1,977 m/s (1,9767 frente a 1,9763). En 0,01 s, Čavić recorre unos 1,977 · 0,01 ≈ 0,02 m: unos 2 cm." },
    { nivel: "avanzado", q: "Halla x: 0,⌢6 · x = 1,⌢3.", sol: "2/3 · x = 4/3 → x = 4/3 : 2/3 = 2." },
  ],
  quiz: baraja([
    { q: "En 5,382, la cifra 8 son…", o: ["décimas", "centésimas", "milésimas", "unidades"], a: 1, e: "Segunda posición tras la coma." },
    { q: "¿Cuál es mayor?", o: ["0,7", "0,69", "0,699", "0,07"], a: 0, e: "0,700 es el mayor." },
    { q: "Un número entre 3,4 y 3,5 es…", o: ["3,45", "3,55", "3,39", "3,6"], a: 0, e: "3,40 < 3,45 < 3,50." },
    { q: "12,4 + 0,56 =", o: ["12,96", "13,0", "12,46", "18"], a: 0, e: "12,40 + 0,56." },
    { q: "1,5 · 0,4 =", o: ["0,6", "6", "0,06", "60"], a: 0, e: "15 · 4 = 60; dos decimales." },
    { q: "0,25 · 1000 =", o: ["25", "250", "2,5", "2500"], a: 1, e: "La coma, 3 lugares a la derecha." },
    { q: "6 : 0,2 =", o: ["1,2", "3", "30", "0,3"], a: 2, e: "60 : 2." },
    { q: "7,85 redondeado a las décimas:", o: ["7,8", "7,9", "8", "7,85"], a: 1, e: "La cifra siguiente es 5." },
    { q: "7,85 truncado a las décimas:", o: ["7,8", "7,9", "8", "7"], a: 0, e: "Se corta." },
    { q: "2,4555… es un decimal…", o: ["exacto", "periódico puro", "periódico mixto", "irracional"], a: 2, e: "Anteperiodo 4, periodo 5." },
    { q: "π es un número…", o: ["exacto", "periódico", "irracional", "entero"], a: 2, e: "Infinitas cifras sin periodo." },
    { q: "¿Qué fracción da un decimal exacto?", o: ["1/3", "3/8", "2/7", "5/6"], a: 1, e: "8 = 2³." },
    { q: "La fracción generatriz de 0,25 es…", o: ["25/99", "1/4", "25/90", "2/5"], a: 1, e: "25/100." },
    { q: "La fracción generatriz de 0,⌢7 es…", o: ["7/10", "7/9", "7/90", "7/99"], a: 1, e: "Periodo de 1 cifra: un 9." },
    { q: "La fracción generatriz de 0,⌢12 es…", o: ["12/100", "4/33", "12/90", "1/12"], a: 1, e: "12/99 = 4/33." },
    { q: "0,999… es igual a…", o: ["0,9", "1", "casi 1, pero menor", "0,99"], a: 1, e: "9N = 9." },
    { q: "Error absoluto al aproximar 2,47 por 2,5:", o: ["0,3", "0,03", "0,003", "0,97"], a: 1, e: "|2,47 − 2,5|." },
    { q: "El error relativo sirve para…", o: ["redondear", "comparar la calidad de aproximaciones", "truncar", "sumar decimales"], a: 1, e: "Error absoluto entre valor real." },
    { q: "350 g en kg son…", o: ["3,5", "0,35", "0,035", "35"], a: 1, e: "Entre 1000." },
    { q: "−1,2 − 0,8 =", o: ["−0,4", "−2", "0,4", "2"], a: 1, e: "Mismo signo: se suman." },
  ]),
  examen: baraja([
    { q: "Ordena: 1,09; 1,9; 1,099", o: ["1,09 < 1,099 < 1,9", "1,9 < 1,09 < 1,099", "1,099 < 1,09 < 1,9", "1,09 < 1,9 < 1,099"], a: 0, e: "1,090 < 1,099 < 1,900." },
    { q: "2,5 · 0,12 =", o: ["0,3", "3", "0,03", "30"], a: 0, e: "25 · 12 = 300; tres decimales." },
    { q: "0,84 : 0,04 =", o: ["2,1", "21", "0,21", "210"], a: 1, e: "84 : 4." },
    { q: "5,996 redondeado a las centésimas:", o: ["5,99", "6,00", "5,90", "6,1"], a: 1, e: "Hay arrastre." },
    { q: "7/12 da un decimal…", o: ["exacto", "periódico puro", "periódico mixto", "irracional"], a: 2, e: "12 = 2² · 3." },
    { q: "La generatriz de 1,⌢3 es…", o: ["13/10", "4/3", "13/9", "12/9"], a: 1, e: "(13 − 1)/9 = 12/9 = 4/3." },
    { q: "La generatriz de 0,1⌢6 es…", o: ["1/6", "16/99", "16/90", "1/60"], a: 0, e: "(16 − 1)/90 = 15/90." },
    { q: "Un kilo de fruta cuesta 2,40 €. 1,25 kg cuestan…", o: ["3 €", "3,65 €", "2,65 €", "1,92 €"], a: 0, e: "2,40 · 1,25." },
  ], 1),
  feynman: ["Por qué al multiplicar decimales no hace falta alinear las comas", "Cómo saber sin dividir si una fracción da un decimal exacto", "Por qué 0,999… es exactamente 1", "Para qué sirve el error relativo si ya tenemos el absoluto"],
  figura: {
    titulo: "Los números decimales en un vistazo",
    svg: resumen("Resumen del tema de números decimales", [
      ["Posiciones", "décimas · centésimas · milésimas (1 U = 10 d)", "var(--pen)"],
      ["Operar", "+ −: comas alineadas · ·: contar decimales · :: divisor entero", "var(--leaf)"],
      ["Aproximar", "truncar · redondear (≥ 5 sube) · errores", "var(--sun)"],
      ["Tipos", "exacto · periódico puro · mixto · irracional", "var(--inf)"],
      ["Generatriz", "puro: periodo/99… · mixto: (resta)/990…", "var(--red)"],
    ]),
  },
  video: pvg("decimales"),
  mapa: mapa("DECIMALES", "var(--pen)", [
    ["Lectura y orden", "posiciones · recta · densidad", "var(--pen)"],
    ["Operaciones", "+ − · : · potencias de 10", "var(--leaf)"],
    ["Aproximación", "truncar · redondear · errores", "var(--sun)"],
    ["Tipos y fracciones", "exacto · periódico · generatriz", "var(--red)"],
  ], 250),
  glosario: [
    ["Número decimal", "Número con parte entera y parte decimal separadas por una coma."],
    ["Décima", "Cada una de las 10 partes iguales de la unidad: 0,1."],
    ["Centésima", "Cada una de las 100 partes iguales de la unidad: 0,01."],
    ["Milésima", "Cada una de las 1000 partes iguales de la unidad: 0,001."],
    ["Truncar", "Aproximar suprimiendo las cifras a partir de una posición."],
    ["Redondear", "Aproximar al valor más cercano de la posición elegida."],
    ["Error absoluto", "Diferencia, en valor absoluto, entre el valor real y el aproximado."],
    ["Error relativo", "Cociente entre el error absoluto y el valor real; indica la calidad de la aproximación."],
    ["Decimal exacto", "El que tiene un número finito de cifras decimales."],
    ["Periodo", "Grupo de cifras que se repite indefinidamente en un decimal periódico."],
    ["Periódico puro", "Decimal cuyo periodo empieza justo después de la coma."],
    ["Periódico mixto", "Decimal con anteperiodo: cifras que no se repiten antes del periodo."],
    ["Anteperiodo", "Cifras decimales que hay entre la coma y el periodo."],
    ["Fracción generatriz", "Fracción irreducible que da lugar a un número decimal."],
    ["Número irracional", "Decimal ilimitado no periódico; no se puede escribir como fracción."],
  ],
  situacion: {
    titulo: "El supermercado más barato",
    reto: "Vais a comparar el precio de una cesta de la compra de 10 productos en dos o tres supermercados (folletos, webs o visita real) y decidir dónde conviene comprar, usando precios por kilo o por litro.",
    pasos: [
      "Acordad la lista de 10 productos y la cantidad que necesita una familia para una semana.",
      "Recoged los precios y los formatos (gramos, litros, unidades) en cada supermercado.",
      "Calculad el precio por kilo o por litro de cada producto y redondead a los céntimos.",
      "Sumad el coste total de la cesta en cada tienda y calculad la diferencia y su porcentaje.",
      "Presentad una tabla comparativa con vuestras conclusiones y recomendaciones.",
    ],
    producto: "Una tabla comparativa de precios por unidad y un breve informe con la recomendación de compra.",
    evaluacion: ["Opera con decimales sin errores de coma.", "Calcula precios por unidad y los compara correctamente.", "Redondea con sentido y explica los errores.", "Comunica las conclusiones con claridad."],
  },
  tarjetas: [
    ["Décima, centésima, milésima", "0,1 · 0,01 · 0,001"], ["Comparar decimales", "Igualar cifras decimales con ceros"], ["Sumar y restar", "Comas alineadas"],
    ["Multiplicar", "Sin comas y contar los decimales de los factores"], ["Dividir entre decimal", "Hacer entero el divisor (· 10, 100…)"], ["· 10ⁿ / : 10ⁿ", "Coma a la derecha / a la izquierda"],
    ["Redondear", "Si la siguiente cifra ≥ 5, se sube"], ["Error relativo", "Error absoluto : valor real"], ["Exacto", "Denominador solo con 2 y 5"],
    ["Periódico puro", "Periodo / 99…9"], ["Periódico mixto", "(N − anteperiodo) / 99…900…0"], ["Irracional", "Infinitas cifras sin periodo: π, √2"],
  ],
  familias: ["En el súper, comparad precios por kilo o por litro entre dos marcas.", "Revisad juntos un tique de compra: sumas, redondeos y céntimos.", "Medid a la familia en metros con dos decimales y ordenad las estaturas.", "Con la calculadora, pedid que adivine qué fracciones dan decimales periódicos."],
  profesores: {
    saberes: "Sentido numérico: números decimales, relación con las fracciones, aproximación y estimación, error absoluto y relativo, operaciones y resolución de problemas de consumo (RD 217/2022, Matemáticas ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Folletos de supermercado para calcular precios por unidad.", "Cronómetros de móvil para medir tiempos con centésimas y redondear.", "Investigación: ¿qué denominadores dan periodos más largos?", "Hoja de cálculo para comparar truncamiento, redondeo y errores."],
  },
  fuentes: [RD, DECRET, { t: "Wikipedia: Número decimal periódico", url: "https://es.wikipedia.org/wiki/N%C3%BAmero_peri%C3%B3dico" }, { t: "Wikipedia: Simon Stevin", url: "https://es.wikipedia.org/wiki/Simon_Stevin" }],
  revisado: REV,
};
