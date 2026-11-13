// Matemáticas 3º ESO · Ecuaciones de primer y segundo grado. Tema nivel libro (lote 1). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, formula, comparar, balanza, resumen, rot, C, RD, DECRET } = require("./_eso3L1");

const tipos = comparar("Diferencia entre identidad y ecuación", [
  ["Identidad", ["2(x + 1) = 2x + 2", "cierta para", "todo x"], "var(--pen)"],
  ["Ecuación", ["2x + 1 = 7", "cierta solo", "para x = 3"], "var(--red)"],
], "¿Siempre o a veces?");

const equilibrio = balanza("Una ecuación es como una balanza en equilibrio: lo que se hace en un lado se hace en el otro", "3x + 2", "14", "restar 2 y dividir entre 3 → x = 4");

const parentesis = pasos("Resolver una ecuación de primer grado con paréntesis", ["3(x − 2) − 2(x + 1) = 4", "Quitar paréntesis: 3x − 6 − 2x − 2 = 4", "Agrupar: 3x − 2x = 4 + 6 + 2", "x = 12", "Comprobar: 30 − 26 = 4 ✓"], "Con paréntesis");

const denominadores = pasos("Resolver una ecuación con denominadores multiplicando por el mínimo común múltiplo", ["(x − 1)/2 − (x + 2)/3 = 1", "m.c.m.(2, 3) = 6: multiplicar todo", "3(x − 1) − 2(x + 2) = 6", "3x − 3 − 2x − 4 = 6", "x = 13"], "Con denominadores");

const casos = comparar("Una ecuación de primer grado puede tener una solución, ninguna o infinitas", [
  ["Una", ["2x = 8", "x = 4"], "var(--leaf)"],
  ["Ninguna", ["0x = 5", "imposible"], "var(--red)"],
  ["Infinitas", ["0x = 0", "identidad"], "var(--pen)"],
], "¿Cuántas soluciones?");

const general = formula("Forma general de la ecuación de segundo grado", "ax² + bx + c = 0", ["a ≠ 0", "x² − 5x + 6 = 0: a = 1, b = −5, c = 6", "Antes: pasar todo a un miembro y ordenar"]);

const incompletaB = lienzo("Ecuación incompleta sin término en x: despejar x al cuadrado y hacer la raíz con los dos signos", `
  ${tx(130, 34, "ax² + c = 0", { fs: 16, c: "var(--muted)", fam: D })}
  ${tx(130, 66, "2x² − 50 = 0", { fs: 18, c: "var(--pen)", fam: D })}
  ${tx(130, 94, "x² = 25", { fs: 17, fam: D })}${tx(130, 124, "x = ±√25 = ±5", { fs: 17, c: "var(--leaf)", fam: D })}
  ${tx(130, 156, "si x² = número negativo: sin solución", { fs: 11.5, c: "var(--red)" })}`);

const incompletaC = lienzo("Ecuación incompleta sin término independiente: sacar factor común x", `
  ${tx(130, 34, "ax² + bx = 0", { fs: 16, c: "var(--muted)", fam: D })}
  ${tx(130, 66, "3x² − 12x = 0", { fs: 18, c: "var(--pen)", fam: D })}
  ${tx(130, 94, "3x(x − 4) = 0", { fs: 17, fam: D })}
  ${tx(130, 124, "x = 0   o   x = 4", { fs: 17, c: "var(--leaf)", fam: D })}
  ${tx(130, 156, "¡no dividir entre x: se pierde x = 0!", { fs: 11.5, c: "var(--red)" })}`);

const formulaGen = formula("Fórmula general de la ecuación de segundo grado", "x = (−b ± √(b² − 4ac)) / 2a", ["x² − 5x + 6 = 0", "x = (5 ± √(25 − 24))/2 = (5 ± 1)/2", "x₁ = 3, x₂ = 2"], "var(--red)");

const discriminante = lienzo("El discriminante decide cuántas soluciones hay: la parábola corta al eje en dos puntos, lo toca en uno o no lo toca", `
  ${[["Δ > 0", "2 soluciones", "var(--leaf)", 18], ["Δ = 0", "1 doble", "var(--pen)", 0], ["Δ < 0", "ninguna", "var(--red)", -18]].map(([t, d, c, k], i) => {
    const ox = 8 + i * 84, cx = ox + 38, ay = 80, vy = ay + k;
    return `<rect x="${ox}" y="14" width="76" height="110" rx="8" fill="var(--card)" stroke="var(--line)"/><path d="M${ox + 6} ${ay} H${ox + 70}" stroke="var(--muted)" stroke-width="1.6"/><path d="M${cx - 30} ${vy - 44} Q${cx} ${vy + 44} ${cx + 30} ${vy - 44}" fill="none" stroke="${c}" stroke-width="3"/>${k > 0 ? `<circle cx="${cx - 19}" cy="${ay}" r="4" fill="${c}"/><circle cx="${cx + 19}" cy="${ay}" r="4" fill="${c}"/>` : k === 0 ? `<circle cx="${cx}" cy="${ay}" r="4" fill="${c}"/>` : ""}${tx(cx, 142, t, { fs: 13, c, max: 74 })}${tx(cx, 160, d, { fs: 11, w: 400, max: 74 })}`;
  }).join("")}`, 172);

const sumaProd = cajas("Suma y producto de las soluciones y factorización", [
  ["Suma", ["x₁ + x₂ = −b/a", "x² − 5x + 6: 5"], "var(--pen)"], ["Producto", ["x₁ · x₂ = c/a", "x² − 5x + 6: 6"], "var(--leaf)"],
  ["Factorizar", ["a(x − x₁)(x − x₂)", "(x − 2)(x − 3)"], "var(--red)"], ["Construir", ["x² − Sx + P = 0", "con S y P"], "var(--inf)"],
], "Relaciones de Cardano-Vieta");

const reducir = pasos("Ecuaciones que se reducen a segundo grado: desarrollar, agrupar y ordenar", ["(x + 2)² − 3x = 2(x + 5)", "x² + 4x + 4 − 3x = 2x + 10", "x² + 4x − 3x − 2x + 4 − 10 = 0", "x² − x − 6 = 0", "x = 3 o x = −2"], "Preparar la ecuación");

const metodo = pasos("Método para resolver problemas con ecuaciones", ["Leer y nombrar la incógnita", "Traducir el enunciado a una ecuación", "Resolver la ecuación", "Comprobar en el enunciado", "Responder con una frase"], "Problemas");

const jardin = lienzo("Un jardín rectangular de ancho x y largo x más tres metros con cuarenta metros cuadrados", `
  <rect x="50" y="34" width="150" height="92" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)" stroke-width="3"/>
  ${tx(125, 26, "x + 3", { fs: 14, c: "var(--red)" })}${tx(36, 86, "x", { fs: 14, c: "var(--red)" })}${tx(125, 86, "40 m²", { fs: 18, c: "var(--leaf)", fam: D })}
  ${tx(130, 150, "x(x + 3) = 40 → x² + 3x − 40 = 0", { fs: 12.5, fam: D })}${tx(130, 172, "x = 5 (x = −8 no vale)", { fs: 12, c: "var(--red)" })}`, 182);

const edades = lienzo("Problema de edades organizado en una tabla: hoy y dentro de unos años", `
  ${tx(130, 24, "Edades: hoy y dentro de 10 años", { fs: 12.5, c: "var(--muted)" })}
  ${[["", "Hoy", "En 10 años"], ["Madre", "3x", "3x + 10"], ["Hija", "x", "x + 10"]].map((f, i) => f.map((s, j) => `<rect x="${14 + j * 78}" y="${36 + i * 32}" width="76" height="30" fill="${i === 0 || j === 0 ? "var(--card)" : "var(--paper)"}" stroke="var(--line)"/>${tx(52 + j * 78, 56 + i * 32, s, { fs: 12.5, c: i === 0 || j === 0 ? "var(--pen)" : "var(--ink)", max: 70 })}`).join("")).join("")}
  ${tx(130, 150, "3x + 10 = 2(x + 10) → x = 10", { fs: 13, c: "var(--red)", fam: D })}`, 170);

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Ecuaciones de primer y segundo grado",
  minutos: 110,
  objetivos: [
    "Distinguir identidades y ecuaciones y reconocer ecuaciones equivalentes",
    "Resolver ecuaciones de primer grado con paréntesis y denominadores",
    "Resolver ecuaciones de segundo grado completas e incompletas",
    "Usar el discriminante para saber cuántas soluciones tiene una ecuación",
    "Relacionar las soluciones con la factorización del polinomio",
    "Plantear y resolver problemas, comprobando si las soluciones tienen sentido",
  ],
  claves: ["ecuación", "incógnita", "solución", "transponer", "denominadores", "segundo grado", "fórmula general", "discriminante"],
  pregunta: {
    texto: "Un jardín rectangular mide 3 m más de largo que de ancho y tiene 40 m² de superficie. ¿Cuánto mide?",
    respuesta: "Si el ancho es x, el largo es x + 3 y <mark>x(x + 3) = 40</mark>, es decir, x² + 3x − 40 = 0. Es una ecuación de segundo grado con soluciones 5 y −8. Como una medida no puede ser negativa, el jardín mide 5 m × 8 m.",
  },
  lectura: {
    titulo: "Babilonia, 1800 a. C.: la primera fórmula",
    html: `<p>En una tablilla de arcilla escrita en Babilonia hace unos 3.800 años, un escriba planteó este problema: «He sumado el área y el lado de mi cuadrado y obtengo 3/4. ¿Cuánto mide el lado?». Hoy lo escribiríamos x² + x = 3/4. El escriba no usaba letras ni la fórmula que vas a aprender, pero seguía una receta de pasos: toma la mitad de 1, que es 1/2; multiplícala por sí misma, 1/4; súmala a 3/4 y obtienes 1; su raíz es 1; resta la mitad que tomaste y el lado es 1/2.</p><p>Esa receta es, en esencia, la técnica de «completar el cuadrado» que da lugar a la fórmula de la ecuación de segundo grado. Los babilonios la usaban para repartir tierras, calcular herencias y diseñar canales. Siglos después, al-Juarismi la explicó con dibujos de cuadrados y rectángulos, y en el Renacimiento se escribió con letras.</p><p>Las ecuaciones son la herramienta más usada de las matemáticas: cada vez que un problema tiene un dato desconocido que cumple una condición, hay una ecuación escondida. En este tema aprenderás a resolver las de primer grado con soltura, incluso con fracciones, y a dominar las de segundo grado, completas e incompletas, con su fórmula y su discriminante.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Igualdades, identidades y ecuaciones</h3><p>Una <b>igualdad algebraica</b> está formada por dos expresiones separadas por el signo =, llamadas <b>miembros</b>. Si la igualdad se cumple para <b>cualquier</b> valor de las letras, es una <b>identidad</b>: 2(x + 1) = 2x + 2 o (a + b)² = a² + 2ab + b². Si solo se cumple para algunos valores, es una <b>ecuación</b>: 2x + 1 = 7 solo es cierta para x = 3.</p><p>Las letras de una ecuación son las <b>incógnitas</b>, y los valores que la hacen cierta son sus <b>soluciones</b>. Resolver una ecuación es encontrar todas sus soluciones, o comprobar que no tiene ninguna.</p><p>El <b>grado</b> de una ecuación con una incógnita es el mayor exponente de la incógnita una vez simplificada: 3x − 5 = 7 es de primer grado; x² − 4x = 5 es de segundo grado. Para comprobar si un número es solución, se sustituye en los dos miembros y se mira si dan lo mismo.</p>`, svg: tipos },
    { html: `<h3>1.2 Ecuaciones equivalentes y transposición</h3><p>Dos ecuaciones son <b>equivalentes</b> si tienen las mismas soluciones. Resolver consiste en transformar la ecuación en otras equivalentes cada vez más sencillas, hasta llegar a x = número. Para ello hay dos reglas, que funcionan como una <b>balanza</b> en equilibrio:</p><ul><li><b>Regla de la suma</b>: si se suma o resta el mismo número (o expresión) a los dos miembros, se obtiene una ecuación equivalente.</li><li><b>Regla del producto</b>: si se multiplican o dividen los dos miembros por el mismo número distinto de cero, se obtiene una ecuación equivalente.</li></ul><p>En la práctica, se aplican de forma abreviada con la <b>transposición</b>: un término que suma en un miembro pasa restando al otro, y un factor que multiplica a todo un miembro pasa dividiendo. En 3x + 2 = 14: 3x = 14 − 2 = 12, y x = 12/3 = 4. ¡Ojo!: un número que multiplica pasa dividiendo <b>sin cambiar de signo</b>: −2x = 8 da x = −4.</p>`, svg: equilibrio },
    { html: `<h3>1.3 Ecuaciones de primer grado con paréntesis</h3><p>Para resolver una ecuación de primer grado se sigue un orden: 1) quitar <b>paréntesis</b>; 2) quitar <b>denominadores</b>; 3) <b>agrupar</b> los términos con x en un miembro y los números en el otro; 4) <b>reducir</b> términos semejantes; 5) <b>despejar</b> x; 6) <b>comprobar</b>.</p><p>Ejemplo: 3(x − 2) − 2(x + 1) = 4. Quitamos paréntesis con cuidado, porque el −2 multiplica a los dos términos: 3x − 6 − 2x − 2 = 4. Agrupamos: 3x − 2x = 4 + 6 + 2, es decir, x = 12. Comprobación: 3 · 10 − 2 · 13 = 30 − 26 = 4 ✓.</p><p>El error más frecuente está en el signo menos delante de un paréntesis: −(x − 5) = −x + 5, porque cambia el signo de <b>todos</b> los términos de dentro. Si hay paréntesis dentro de corchetes, se quitan de dentro hacia fuera.</p>`, svg: parentesis },
    { html: `<h3>1.4 Ecuaciones con denominadores</h3><p>Cuando aparecen fracciones, lo más cómodo es <b>eliminar los denominadores</b> multiplicando los dos miembros, término a término, por el <mark>m.c.m.</mark> de todos los denominadores. Así se obtiene una ecuación equivalente sin fracciones.</p><p>Ejemplo: (x − 1)/2 − (x + 2)/3 = 1. El m.c.m.(2, 3) = 6. Multiplicamos cada término por 6: 3(x − 1) − 2(x + 2) = 6. Fíjate en que el numerador se escribe <b>entre paréntesis</b>, porque el signo menos de delante afecta a todo él. Seguimos: 3x − 3 − 2x − 4 = 6, x = 13.</p><p>Comprobación: (13 − 1)/2 − (13 + 2)/3 = 6 − 5 = 1 ✓. Recuerda multiplicar <b>también</b> los términos sin denominador: el 1 del segundo miembro se convierte en 6. Si hay decimales, se pueden eliminar multiplicando por 10, 100… según el número de cifras decimales.</p>`, svg: denominadores, video: { id: "to27Vpf8WRo", titulo: "Ecuaciones de primer grado con denominadores", canal: "Tuto mate", vistas: 77309, megusta: 0 } },
    { html: `<h3>1.5 Ecuaciones sin solución o con infinitas soluciones</h3><p>A veces, al simplificar, la incógnita desaparece. Si se llega a una igualdad <b>falsa</b> como 0 = 5, la ecuación <b>no tiene solución</b> (es incompatible): ningún número la cumple. Por ejemplo, 2(x + 3) = 2x + 1 lleva a 6 = 1, imposible.</p><p>Si se llega a una igualdad <b>siempre cierta</b> como 0 = 0, la ecuación es en realidad una <b>identidad</b> y tiene <b>infinitas soluciones</b>: todos los números la cumplen. Por ejemplo, 3(x − 1) + 3 = 3x lleva a 0 = 0.</p><p>Una ecuación de primer grado «normal», de la forma ax = b con a ≠ 0, tiene siempre <b>una única solución</b>: x = b/a. Reconocer estos tres casos evita errores como dar «x = 0» como solución cuando la ecuación es imposible.</p>`, svg: casos },
    { html: `<h3>2.1 La ecuación de segundo grado</h3><p>Una <b>ecuación de segundo grado</b> con una incógnita es la que, después de simplificar, se puede escribir en la <b>forma general</b> <mark>ax² + bx + c = 0</mark>, con a ≠ 0. Los números a, b y c son los <b>coeficientes</b>: a acompaña a x², b a x, y c es el término independiente.</p><p>Antes de resolver hay que llevarla a la forma general: pasar todos los términos a un miembro, igualar a cero y ordenar. Por ejemplo, x² = 5x − 6 se escribe x² − 5x + 6 = 0, con a = 1, b = −5 y c = 6. Hay que leer los coeficientes <b>con su signo</b>.</p><p>Si b y c son distintos de cero, la ecuación es <b>completa</b>. Si b = 0 o c = 0, es <b>incompleta</b>, y se resuelve de forma más rápida sin fórmula. Una ecuación de segundo grado tiene, como mucho, <b>dos soluciones</b>.</p>`, svg: general },
    { html: `<h3>2.2 Incompletas sin término en x (b = 0)</h3><p>Las ecuaciones del tipo <b>ax² + c = 0</b> se resuelven <b>despejando x²</b> y haciendo la raíz cuadrada. Como un número positivo tiene dos raíces cuadradas opuestas, hay que poner el doble signo <mark>±</mark>.</p><p>Ejemplo: 2x² − 50 = 0. Despejamos: 2x² = 50, x² = 25, x = ±√25 = ±5. Las soluciones son x₁ = 5 y x₂ = −5. Ambas cumplen la ecuación: 2 · 25 − 50 = 0.</p><p>Si al despejar se obtiene x² igual a un número <b>negativo</b>, como en x² + 9 = 0 (x² = −9), la ecuación <b>no tiene solución</b> real, porque ningún número al cuadrado es negativo. Y si x² = 0, la única solución es x = 0. Olvidar el signo negativo de la raíz es un error muy habitual: en x² = 49 hay que dar 7 y −7.</p>`, svg: incompletaB, video: { id: "JHJw8dIrU08", titulo: "Ecuaciones de segundo grado incompletas puras del tipo ax² + c = 0", canal: "Daniel Carreón", vistas: 753330, megusta: 0 } },
    { html: `<h3>2.3 Incompletas sin término independiente (c = 0)</h3><p>Las ecuaciones del tipo <b>ax² + bx = 0</b> se resuelven <b>sacando factor común</b> x: x(ax + b) = 0. Un producto vale cero solo si alguno de sus factores es cero, así que o bien x = 0, o bien ax + b = 0, de donde x = −b/a.</p><p>Ejemplo: 3x² − 12x = 0. Factor común 3x: 3x(x − 4) = 0. Soluciones: x = 0 y x = 4. Este tipo de ecuación <b>siempre</b> tiene la solución x = 0.</p><p>Un error grave es dividir los dos miembros entre x: 3x² = 12x → 3x = 12 → x = 4. Así se <b>pierde</b> la solución x = 0, porque no se puede dividir entre x si x puede valer cero. La propiedad del «producto nulo» que usamos aquí (si A · B = 0, entonces A = 0 o B = 0) es una idea clave del álgebra que volverás a usar muchas veces.</p>`, svg: incompletaC },
    { html: `<h3>2.4 La fórmula general</h3><p>Las ecuaciones completas se resuelven con la <b>fórmula general</b>, que se obtiene completando cuadrados en ax² + bx + c = 0:</p><p class="formula"><span>x = (−b ± √(b² − 4ac)) / 2a</span></p><p>El doble signo da las dos soluciones: una con + y otra con −. Ejemplo: x² − 5x + 6 = 0, con a = 1, b = −5, c = 6. x = (5 ± √(25 − 24))/2 = (5 ± 1)/2, así que x₁ = 3 y x₂ = 2.</p><p>Consejos para no equivocarse: 1) escribe primero a, b y c con su signo; 2) calcula aparte b² − 4ac (recuerda que b² siempre es positivo: si b = −5, b² = 25); 3) −b es el opuesto de b; 4) el denominador 2a divide a todo el numerador. Si los coeficientes tienen un factor común, simplifica antes: 2x² − 10x + 12 = 0 equivale a x² − 5x + 6 = 0.</p>`, svg: formulaGen, video: { id: "RGOYPVjLqIs", titulo: "Fórmula general para resolver ecuaciones cuadráticas", canal: "Matemáticas con Grajeda", vistas: 190671, megusta: 0 } },
    { html: `<h3>2.5 El discriminante</h3><p>La expresión que está dentro de la raíz, <mark>Δ = b² − 4ac</mark>, se llama <b>discriminante</b>, porque permite «discriminar» cuántas soluciones tiene la ecuación sin terminar de resolverla:</p><ul><li>Si <b>Δ &gt; 0</b>, hay <b>dos soluciones</b> distintas (x² − 5x + 6 = 0: Δ = 1).</li><li>Si <b>Δ = 0</b>, hay <b>una solución doble</b>, x = −b/2a (x² − 8x + 16 = 0: Δ = 0, x = 4).</li><li>Si <b>Δ &lt; 0</b>, <b>no hay solución</b> real, porque no existe la raíz de un número negativo (x² − 2x + 3 = 0: Δ = −8).</li></ul><p>El dibujo lo muestra gráficamente: las soluciones de ax² + bx + c = 0 son los puntos donde la parábola y = ax² + bx + c corta al eje X. Una parábola puede cortarlo dos veces, tocarlo en un punto o no tocarlo. Estudiarás las parábolas con más detalle en el tema de funciones.</p>`, svg: discriminante },
    { html: `<h3>2.6 Suma y producto de las soluciones; factorización</h3><p>Las dos soluciones de ax² + bx + c = 0 cumplen dos relaciones muy útiles: su <b>suma</b> es <mark>x₁ + x₂ = −b/a</mark> y su <b>producto</b> es <mark>x₁ · x₂ = c/a</mark>. En x² − 5x + 6 = 0: 3 + 2 = 5 y 3 · 2 = 6. Sirven para comprobar resultados y para resolver mentalmente: en x² − 7x + 10 = 0 buscamos dos números que sumen 7 y multipliquen 10: 5 y 2.</p><p>Al revés, conocidas la suma S y el producto P, la ecuación es <b>x² − Sx + P = 0</b>. Por ejemplo, dos números que suman 10 y multiplican 21 son las soluciones de x² − 10x + 21 = 0: 7 y 3.</p><p>Además, si x₁ y x₂ son las soluciones, el polinomio se <b>factoriza</b> como ax² + bx + c = a(x − x₁)(x − x₂). Así, x² − 5x + 6 = (x − 2)(x − 3) y 2x² − 2x − 12 = 2(x − 3)(x + 2). Es la conexión entre este tema y las raíces de polinomios.</p>`, svg: sumaProd },
    { html: `<h3>2.7 Ecuaciones que se reducen a segundo grado</h3><p>Muchas ecuaciones no aparecen en forma general: tienen paréntesis, identidades notables, denominadores o x en los dos miembros. Hay que <b>prepararlas</b> siguiendo el mismo orden que en primer grado y, al final, pasar todo a un miembro e igualar a cero.</p><p>Ejemplo: (x + 2)² − 3x = 2(x + 5). Desarrollamos: x² + 4x + 4 − 3x = 2x + 10. Pasamos todo al primer miembro: x² + 4x − 3x − 2x + 4 − 10 = 0, es decir, x² − x − 6 = 0. Con la fórmula: x = (1 ± √25)/2, así que x = 3 o x = −2.</p><p>Si hay denominadores numéricos, se quitan igual que en primer grado: x²/3 − x/2 = 1, multiplicada por 6, da 2x² − 3x − 6 = 0. A veces, tras simplificar, la x² se anula y la ecuación resulta ser de primer grado: (x + 1)² = x² + 5 da 2x + 1 = 5, x = 2.</p>`, svg: reducir },
    { html: `<h3>3.1 Resolver problemas con ecuaciones</h3><p>Para resolver un problema con una ecuación hay que seguir un método: 1) leer con atención y decidir qué es la <b>incógnita</b>, escribiendo «x = …»; 2) expresar los demás datos en función de x; 3) buscar la <b>igualdad</b> que da el enunciado y escribir la ecuación; 4) resolverla; 5) <b>comprobar</b> la solución en el enunciado (no solo en la ecuación); 6) responder con una frase y las unidades.</p><p>Para los problemas de <b>edades</b>, una tabla con «hoy», «hace» y «dentro de» ayuda mucho. Ejemplo: una madre tiene el triple de edad que su hija, y dentro de 10 años tendrá el doble. Si la hija tiene x años, la madre tiene 3x; dentro de 10 años, 3x + 10 = 2(x + 10), de donde x = 10. La hija tiene 10 años y la madre, 30.</p><p>Otros tipos frecuentes son los de números (consecutivos, cifras), repartos, mezclas, móviles y porcentajes. En todos, el paso decisivo es la traducción al lenguaje algebraico.</p>`, svg: edades },
    { html: `<h3>3.2 Problemas de segundo grado: ¿todas las soluciones valen?</h3><p>Muchos problemas de geometría, de física o de números llevan a ecuaciones de segundo grado. Lo importante es que, al tener <b>dos soluciones</b>, hay que comprobar si las dos tienen sentido en el contexto.</p><p>En el jardín de la pregunta inicial, x(x + 3) = 40 da x² + 3x − 40 = 0, con soluciones 5 y −8. Una longitud no puede ser negativa, así que solo vale x = 5: el jardín mide 5 m × 8 m. En cambio, en «halla un número cuyo cuadrado menos su doble sea 15», x² − 2x − 15 = 0 da 5 y −3, y <b>las dos</b> soluciones son válidas.</p><p>Otro ejemplo, de física: una pelota lanzada hacia arriba a 20 m/s está a una altura h = 20t − 5t². ¿Cuándo está a 15 m? 5t² − 20t + 15 = 0, t² − 4t + 3 = 0, t = 1 s o t = 3 s. Las dos tienen sentido: la pelota pasa por 15 m al subir y al bajar.</p>`, svg: jardin },
    { html: `<h3>3.3 Estrategias y comprobación</h3><p>Ante cualquier ecuación, conviene seguir un plan: identificar de qué <b>tipo</b> es (primer grado, segundo grado completa o incompleta) y elegir el método más rápido. No hace falta usar la fórmula general en x² − 9 = 0 ni en x² + 4x = 0: los métodos de las incompletas son más cortos y cometen menos errores.</p><p>Comprobar es siempre posible y muy recomendable: se sustituye cada solución en la ecuación <b>original</b>, no en la simplificada, por si hubo un error al preparar. En segundo grado, la suma y el producto de las soluciones son una comprobación rápida.</p><p>Por último, interpreta. Si una ecuación de un problema no tiene solución, el problema tampoco la tiene (por ejemplo, un rectángulo de perímetro 10 y área 30 no existe: x² − 5x + 30 = 0 tiene Δ &lt; 0). Las matemáticas también sirven para demostrar que algo es imposible.</p>`, svg: metodo },
  ],
  ejemplos: [
    { enunciado: "Resuelve: 5 − 2(x − 3) = 3(x + 2) − 10.", pasos: ["5 − 2x + 6 = 3x + 6 − 10.", "11 − 2x = 3x − 4.", "15 = 5x → x = 3.", "Comprobación: 5 − 0 = 5; 15 − 10 = 5 ✓."], resultado: "x = 3." },
    { enunciado: "Resuelve: (2x − 1)/3 − (x − 2)/4 = x/6 + 1.", pasos: ["m.c.m. 12: 4(2x − 1) − 3(x − 2) = 2x + 12.", "8x − 4 − 3x + 6 = 2x + 12.", "5x + 2 = 2x + 12 → 3x = 10."], resultado: "x = 10/3." },
    { enunciado: "Resuelve: 4x² − 9 = 0 y 5x² + 15x = 0.", pasos: ["x² = 9/4 → x = ±3/2.", "5x(x + 3) = 0 → x = 0 o x = −3."], resultado: "±3/2; 0 y −3." },
    { enunciado: "Resuelve: 2x² + 3x − 2 = 0.", pasos: ["a = 2, b = 3, c = −2. Δ = 9 + 16 = 25.", "x = (−3 ± 5)/4.", "x₁ = 2/4 = 1/2; x₂ = −8/4 = −2."], resultado: "x = 1/2 y x = −2." },
    { enunciado: "Sin resolver, di cuántas soluciones tiene: a) x² + x + 1 = 0 b) 9x² − 6x + 1 = 0.", pasos: ["a) Δ = 1 − 4 = −3 < 0.", "b) Δ = 36 − 36 = 0."], resultado: "a) ninguna; b) una solución doble (x = 1/3)." },
    { enunciado: "El producto de dos números consecutivos es 156. ¿Cuáles son?", pasos: ["x(x + 1) = 156 → x² + x − 156 = 0.", "Δ = 1 + 624 = 625 → x = (−1 ± 25)/2.", "x = 12 o x = −13."], resultado: "12 y 13, o bien −13 y −12." },
  ],
  errores: [
    "Cambiar de signo un número que pasa dividiendo: −2x = 8 → x = −4, no 4.",
    "Al quitar denominadores, no poner paréntesis en el numerador con un menos delante.",
    "Olvidar multiplicar por el m.c.m. los términos sin denominador.",
    "Dar solo la solución positiva en x² = 25.",
    "Dividir entre x en ax² + bx = 0 y perder la solución x = 0.",
    "Usar mal el signo de b en la fórmula (−b y b²) o no aceptar/descartar soluciones según el contexto.",
  ],
  ejercicios: [
    { nivel: "básico", q: "¿Es x = −2 solución de x² + 3x + 2 = 0? ¿Y de 2x − 1 = 3?", sol: "4 − 6 + 2 = 0: sí. −4 − 1 = −5 ≠ 3: no." },
    { nivel: "básico", q: "Di si es identidad o ecuación: a) 3(x − 2) = 3x − 6 b) 3(x − 2) = 3x.", sol: "a) identidad (cierta siempre). b) lleva a −6 = 0: ecuación sin solución." },
    { nivel: "básico", q: "Resuelve: 7x − 4 = 3x + 12.", sol: "4x = 16 → x = 4." },
    { nivel: "básico", q: "Resuelve: 4(x − 1) − (2x + 3) = 5.", sol: "4x − 4 − 2x − 3 = 5 → 2x = 12 → x = 6." },
    { nivel: "básico", q: "Resuelve: x/3 + x/2 = 10.", sol: "×6: 2x + 3x = 60 → x = 12." },
    { nivel: "básico", q: "Resuelve: (x + 4)/5 = (x − 2)/2.", sol: "2(x + 4) = 5(x − 2) → 2x + 8 = 5x − 10 → x = 6." },
    { nivel: "básico", q: "Resuelve: x² − 36 = 0 y 3x² = 27.", sol: "x = ±6; x² = 9 → x = ±3." },
    { nivel: "básico", q: "Resuelve: x² − 7x = 0 y 2x² + 10x = 0.", sol: "x(x − 7) = 0 → 0 y 7. 2x(x + 5) = 0 → 0 y −5." },
    { nivel: "básico", q: "Resuelve con la fórmula: x² − 6x + 8 = 0.", sol: "Δ = 36 − 32 = 4; x = (6 ± 2)/2 → 4 y 2." },
    { nivel: "básico", q: "Resuelve: x² + 2x − 15 = 0.", sol: "Δ = 4 + 60 = 64; x = (−2 ± 8)/2 → 3 y −5." },
    { nivel: "básico", q: "Calcula el discriminante y di cuántas soluciones hay: x² − 4x + 4 = 0; x² + 5 = 0.", sol: "Δ = 0: una doble (x = 2). Δ = −20: ninguna." },
    { nivel: "básico", q: "La suma de un número y su triple es 48. ¿Qué número es?", sol: "x + 3x = 48 → x = 12." },
    { nivel: "medio", q: "Resuelve: 2(3x − 1) − 3(x − 4) = 4(x + 2) − 1.", sol: "6x − 2 − 3x + 12 = 4x + 8 − 1 → 3x + 10 = 4x + 7 → x = 3." },
    { nivel: "medio", q: "Resuelve: (x − 3)/4 − (2x − 1)/6 = 1 − x/3.", sol: "×12: 3(x − 3) − 2(2x − 1) = 12 − 4x → 3x − 9 − 4x + 2 = 12 − 4x → 3x = 19 → x = 19/3." },
    { nivel: "medio", q: "Resuelve: 0,2x − 1,5 = 0,5(x − 3).", sol: "0,2x − 1,5 = 0,5x − 1,5 → 0 = 0,3x → x = 0." },
    { nivel: "medio", q: "Resuelve: 3x² − 5x − 2 = 0.", sol: "Δ = 25 + 24 = 49; x = (5 ± 7)/6 → 2 y −1/3." },
    { nivel: "medio", q: "Resuelve: (x − 1)² = 2x + 7.", sol: "x² − 2x + 1 = 2x + 7 → x² − 4x − 6 = 0 → x = (4 ± √40)/2 = 2 ± √10 ≈ 5,16 y −1,16." },
    { nivel: "medio", q: "Resuelve: x(x + 2) − 3 = 2(x + 3).", sol: "x² + 2x − 3 = 2x + 6 → x² = 9 → x = ±3." },
    { nivel: "medio", q: "Resuelve: x²/2 − x/3 = 4/3.", sol: "×6: 3x² − 2x − 8 = 0 → Δ = 4 + 96 = 100 → x = (2 ± 10)/6 → 2 y −4/3." },
    { nivel: "medio", q: "Halla dos números que suman 14 y cuyo producto es 45.", sol: "x² − 14x + 45 = 0 → x = 9 y 5." },
    { nivel: "medio", q: "Factoriza usando las soluciones: x² + x − 12 y 2x² − 5x + 2.", sol: "Soluciones 3 y −4: (x − 3)(x + 4). Soluciones 2 y 1/2: 2(x − 2)(x − 1/2) = (x − 2)(2x − 1)." },
    { nivel: "medio", q: "Reparte 120 € entre tres hermanos de modo que el segundo reciba el doble que el primero y el tercero 20 € más que el segundo.", sol: "x + 2x + (2x + 20) = 120 → 5x = 100 → x = 20. Reciben 20 €, 40 € y 60 €." },
    { nivel: "medio", q: "Un padre tiene 40 años y su hijo 12. ¿Dentro de cuántos años la edad del padre será el doble de la del hijo?", sol: "40 + x = 2(12 + x) → 40 + x = 24 + 2x → x = 16 años." },
    { nivel: "medio", q: "El largo de un rectángulo es 4 cm mayor que el ancho y su área es 96 cm². Halla sus lados.", sol: "x(x + 4) = 96 → x² + 4x − 96 = 0 → x = 8 (o −12, no vale). 8 cm × 12 cm." },
    { nivel: "avanzado", q: "Resuelve: (x + 3)(x − 3) − (x − 2)² = 3(x − 1).", sol: "x² − 9 − x² + 4x − 4 = 3x − 3 → 4x − 13 = 3x − 3 → x = 10." },
    { nivel: "avanzado", q: "Resuelve: (x + 1)/2 − (x² − 1)/3 = (x − 1)/6.", sol: "×6: 3x + 3 − 2x² + 2 = x − 1 → −2x² + 2x + 6 = 0 → x² − x − 3 = 0 → x = (1 ± √13)/2." },
    { nivel: "avanzado", q: "Halla k para que x² − 6x + k = 0 tenga una solución doble. ¿Cuál es?", sol: "Δ = 36 − 4k = 0 → k = 9. x = 3." },
    { nivel: "avanzado", q: "Halla m para que x² + mx + 16 = 0 no tenga solución.", sol: "Δ = m² − 64 < 0 → −8 < m < 8." },
    { nivel: "avanzado", q: "Escribe una ecuación de segundo grado cuyas soluciones sean 2/3 y −1.", sol: "S = −1/3, P = −2/3: x² + x/3 − 2/3 = 0, o 3x² + x − 2 = 0." },
    { nivel: "avanzado", q: "Una pelota lanzada hacia arriba sigue h = 25t − 5t². ¿Cuándo está a 20 m? ¿Cuándo cae al suelo?", sol: "5t² − 25t + 20 = 0 → t² − 5t + 4 = 0 → t = 1 s y 4 s. Suelo: 25t − 5t² = 0 → t = 0 y t = 5 s." },
    { nivel: "avanzado", q: "La diagonal de un rectángulo mide 10 cm y un lado mide 2 cm más que el otro. Halla los lados.", sol: "x² + (x + 2)² = 100 → 2x² + 4x − 96 = 0 → x² + 2x − 48 = 0 → x = 6 (−8 no vale). Lados 6 y 8 cm." },
    { nivel: "avanzado", q: "Un grupo de amigos alquila una furgoneta por 360 €. Si fueran 2 más, cada uno pagaría 15 € menos. ¿Cuántos son?", sol: "360/x − 360/(x + 2) = 15 → 360(x + 2) − 360x = 15x(x + 2) → 720 = 15x² + 30x → x² + 2x − 48 = 0 → x = 6 amigos." },
    { nivel: "avanzado", q: "Demuestra que no existe ningún rectángulo de perímetro 20 cm y área 30 cm².", sol: "Lados x y 10 − x: x(10 − x) = 30 → x² − 10x + 30 = 0; Δ = 100 − 120 < 0. No hay solución." },
    { nivel: "avanzado", q: "Resuelve el problema babilónico de la lectura: x² + x = 3/4.", sol: "4x² + 4x − 3 = 0 → Δ = 16 + 48 = 64 → x = (−4 ± 8)/8 → 1/2 (y −3/2, que no vale para un lado)." },
  ],
  quiz: [
    { q: "¿Cuál es una identidad?", o: ["2x + 1 = 5", "x + x = 2x", "x² = 9", "3x = 0"], a: 1, e: "Cierta para todo x." },
    { q: "En −3x = 12, x =", o: ["4", "−4", "15", "−36"], a: 1, e: "Dividir entre −3." },
    { q: "Solución de 2(x − 1) = x + 3:", o: ["5", "4", "2", "1"], a: 0, e: "2x − 2 = x + 3." },
    { q: "Para quitar denominadores en x/4 + x/6 = 5 se multiplica por…", o: ["24", "10", "12", "4"], a: 2, e: "m.c.m.(4, 6) = 12." },
    { q: "Si al resolver llegas a 0 = 7, la ecuación…", o: ["tiene x = 0", "tiene x = 7", "no tiene solución", "tiene infinitas"], a: 2, e: "Igualdad falsa." },
    { q: "Si llegas a 0 = 0, la ecuación…", o: ["no tiene solución", "tiene infinitas soluciones", "tiene x = 0", "está mal"], a: 1, e: "Es una identidad." },
    { q: "En 3x² − x + 5 = 0, b vale…", o: ["3", "1", "−1", "5"], a: 2, e: "Con su signo." },
    { q: "Soluciones de x² = 16:", o: ["4", "−4", "4 y −4", "8"], a: 2, e: "Doble signo." },
    { q: "x² + 4 = 0 tiene…", o: ["x = ±2", "x = −2", "ninguna solución", "x = 2"], a: 2, e: "x² = −4 imposible." },
    { q: "Soluciones de x² − 5x = 0:", o: ["0 y 5", "5", "0 y −5", "±√5"], a: 0, e: "x(x − 5) = 0." },
    { q: "La fórmula general empieza por…", o: ["b ± …", "−b ± …", "−a ± …", "c ± …"], a: 1, e: "x = (−b ± √Δ)/2a." },
    { q: "El discriminante es…", o: ["b² + 4ac", "b² − 4ac", "4ac − b²", "b − 4ac"], a: 1, e: "Δ = b² − 4ac." },
    { q: "Si Δ = 0, hay…", o: ["dos soluciones", "una solución doble", "ninguna", "infinitas"], a: 1, e: "x = −b/2a." },
    { q: "Δ de x² − 3x + 5 = 0:", o: ["29", "−11", "11", "−29"], a: 1, e: "9 − 20." },
    { q: "Soluciones de x² − 3x + 2 = 0:", o: ["1 y 2", "−1 y −2", "1 y −2", "3 y 2"], a: 0, e: "Suman 3 y multiplican 2." },
    { q: "Si las soluciones son 4 y −1, la suma es…", o: ["−b/a = 3", "c/a = −4", "5", "−3"], a: 0, e: "4 + (−1) = 3." },
    { q: "x² − 9x + 20 factorizado:", o: ["(x − 4)(x − 5)", "(x + 4)(x + 5)", "(x − 2)(x − 10)", "(x − 9)(x + 20)"], a: 0, e: "4 + 5 = 9, 4 · 5 = 20." },
    { q: "Al resolver 3x² = 6x dividiendo entre x se pierde…", o: ["x = 2", "x = 0", "x = 3", "nada"], a: 1, e: "Hay que sacar factor común." },
    { q: "Un problema da soluciones 6 y −4 para una longitud. La respuesta es…", o: ["6 y −4", "−4", "6", "ninguna"], a: 2, e: "Una longitud no puede ser negativa." },
    { q: "Tres números consecutivos suman 45. El menor es…", o: ["14", "15", "13", "16"], a: 0, e: "3x + 3 = 45." },
  ],
  examen: [
    { q: "Solución de 3(x + 2) = x + 14:", o: ["4", "8", "5", "2"], a: 0, e: "2x = 8." },
    { q: "Solución de x/2 − x/5 = 3:", o: ["10", "15", "6", "30"], a: 0, e: "×10: 5x − 2x = 30." },
    { q: "Soluciones de 2x² − 18 = 0:", o: ["±3", "±9", "3", "9"], a: 0, e: "x² = 9." },
    { q: "Soluciones de x² + 6x = 0:", o: ["0 y 6", "0 y −6", "±6", "6"], a: 1, e: "x(x + 6) = 0." },
    { q: "Soluciones de x² − x − 12 = 0:", o: ["4 y −3", "−4 y 3", "6 y −2", "12 y −1"], a: 0, e: "Δ = 49." },
    { q: "¿Cuántas soluciones tiene 4x² − 4x + 1 = 0?", o: ["2", "1", "0", "infinitas"], a: 1, e: "Δ = 0." },
    { q: "Dentro de 5 años Ana tendrá el doble que hace 5. Hoy tiene…", o: ["10", "15", "20", "5"], a: 1, e: "x + 5 = 2(x − 5)." },
    { q: "Lados de un rectángulo de área 24 con un lado 2 más largo:", o: ["4 y 6", "3 y 8", "2 y 12", "4 y 8"], a: 0, e: "x² + 2x − 24 = 0." },
  ],
  feynman: ["Qué diferencia hay entre una identidad y una ecuación", "Cómo se quitan los denominadores y por qué hay que poner paréntesis", "Qué indica el discriminante", "Por qué hay que comprobar las soluciones de un problema"],
  figura: {
    titulo: "Cómo resolver cada tipo de ecuación",
    svg: resumen("Resumen de los métodos para ecuaciones de primer y segundo grado", [
      ["1.er grado", "paréntesis → denominadores → agrupar → despejar", "var(--pen)"],
      ["ax² + c = 0", "despejar x² y raíz con ± (x² < 0: sin solución)", "var(--leaf)"],
      ["ax² + bx = 0", "factor común x: x = 0 o x = −b/a", "var(--sun)"],
      ["Completa", "x = (−b ± √(b² − 4ac))/2a · Δ decide 2, 1 o 0", "var(--red)"],
    ], 220),
  },
  video: { id: "s0CwJ5fKpBo", titulo: "Ecuación cuadrática: segundo grado por fórmula general, ejemplo 2", canal: "Matemáticas profe Alex", vistas: 150332, megusta: 0 },
  mapa: mapa("ECUACIONES", "var(--red)", [
    ["1.er grado", "paréntesis · denominadores", "var(--pen)"],
    ["Incompletas", "despejar x² · factor común", "var(--leaf)"],
    ["Completas", "fórmula · discriminante", "var(--red)"],
    ["Problemas", "plantear · comprobar", "var(--inf)"],
  ], 250),
  glosario: [
    ["Igualdad algebraica", "Dos expresiones algebraicas unidas por el signo =."],
    ["Identidad", "Igualdad que se cumple para cualquier valor de las letras."],
    ["Ecuación", "Igualdad que solo se cumple para algunos valores."],
    ["Incógnita", "Letra cuyo valor se busca en una ecuación."],
    ["Solución", "Valor de la incógnita que cumple la ecuación."],
    ["Ecuaciones equivalentes", "Ecuaciones que tienen las mismas soluciones."],
    ["Transponer", "Pasar un término de un miembro al otro con la operación contraria."],
    ["Grado de una ecuación", "Mayor exponente de la incógnita tras simplificar."],
    ["Ecuación de segundo grado", "La que se escribe ax² + bx + c = 0 con a ≠ 0."],
    ["Ecuación incompleta", "Ecuación de segundo grado con b = 0 o c = 0."],
    ["Fórmula general", "x = (−b ± √(b² − 4ac))/2a."],
    ["Discriminante", "Δ = b² − 4ac: indica el número de soluciones."],
    ["Solución doble", "Única solución cuando Δ = 0."],
    ["Producto nulo", "Si A · B = 0, entonces A = 0 o B = 0."],
  ],
  situacion: {
    titulo: "Diseñamos el huerto escolar",
    reto: "El centro quiere crear un huerto rectangular con un camino alrededor. Tenéis una superficie y un presupuesto de valla limitados, y debéis decidir las medidas usando ecuaciones de primer y segundo grado.",
    pasos: [
      "Medid el espacio disponible en el patio y fijad la superficie de cultivo deseada.",
      "Plantead la ecuación de segundo grado que relaciona el ancho con el área (por ejemplo, largo = ancho + 3).",
      "Añadid un camino de anchura fija alrededor y plantead la nueva ecuación del área total.",
      "Calculad cuántos metros de valla hacen falta y el coste, con ecuaciones de primer grado.",
      "Presentad un plano a escala con las medidas y la justificación de las soluciones válidas.",
    ],
    producto: "Un plano del huerto con las ecuaciones, las soluciones descartadas y el presupuesto de valla.",
    evaluacion: ["Plantea correctamente las ecuaciones a partir de la situación.", "Resuelve con el método adecuado y sin errores.", "Interpreta y descarta las soluciones sin sentido.", "Presenta el plano y los cálculos con claridad."],
  },
  tarjetas: [
    ["Identidad", "Cierta para todo x."], ["Transponer", "Suma ↔ resta; producto ↔ división."],
    ["Quitar denominadores", "Multiplicar todo por el m.c.m."], ["0 = 5", "Sin solución."],
    ["0 = 0", "Infinitas soluciones."], ["ax² + c = 0", "x = ±√(−c/a)"],
    ["ax² + bx = 0", "x = 0 o x = −b/a"], ["Fórmula general", "(−b ± √(b² − 4ac))/2a"],
    ["Δ > 0", "Dos soluciones."], ["Δ = 0", "Una doble."],
    ["Δ < 0", "Ninguna real."], ["Suma y producto", "−b/a y c/a"],
  ],
  familias: ["Inventad acertijos de edades de la familia y resolvedlos con una ecuación.", "Medid una habitación y calculad qué medidas tendría otra con el doble de área.", "Comprobad juntos las soluciones sustituyendo en la ecuación.", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido algebraico: ecuaciones de primer grado con paréntesis y denominadores, ecuaciones de segundo grado completas e incompletas, discriminante, relación con la factorización y resolución de problemas con interpretación de las soluciones (RD 217/2022, Matemáticas 3º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Balanzas virtuales para las reglas de equivalencia.", "Completar el cuadrado con recortables, como al-Juarismi.", "GeoGebra: parábolas con deslizadores para ver el discriminante.", "Problemas históricos de Babilonia y Diofanto."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes: ecuaciones (INTEF)", url: "https://proyectodescartes.org/" }],
  revisado: "2026-11-13",
};
