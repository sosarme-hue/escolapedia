// Matemáticas 2º ESO · Proporcionalidad y porcentajes. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tx, lienzo, pasos, cajas, comparar, formula, resumen, flujo, tablaSvg, baraja, psvg, pvid, pvg, C, RD, DECRET, REV } = require("./_eso2L2");

const razon = formula("Razón y proporción: igualdad de dos razones con productos cruzados iguales", "a/b = c/d  ⇔  a·d = b·c", ["Proporción 3/4 = 9/12", "extremos: 3 y 12 · medios: 4 y 9", "3 · 12 = 4 · 9 = 36"], "var(--pen)");

const cuartoProp = pasos("Calcular el cuarto proporcional en 5/8 = x/56", ["5/8 = x/56", "Productos cruzados: 8 · x = 5 · 56", "8x = 280", "x = 280 : 8 = 35"], "Término desconocido");

const tablaDirecta = tablaSvg("Tabla de proporcionalidad directa: kilos de manzanas y precio, constante 2,40 euros por kilo", [["kg", "1", "2", "3", "5"], ["€", "2,4", "4,8", "7,2", "12"]], { titulo: "Directa: cociente constante", notas: ["€ : kg = 2,40 siempre", "doble de kg → doble de €"] });

const tablaInversa = tablaSvg("Tabla de proporcionalidad inversa: número de grifos y horas para llenar un depósito, producto constante 12", [["grifos", "1", "2", "3", "4"], ["horas", "12", "6", "4", "3"]], { titulo: "Inversa: producto constante", notas: ["grifos · horas = 12 siempre", "doble de grifos → mitad de horas"] });

const reglaTres = comparar("Regla de tres simple directa e inversa", [
  ["Directa", ["3 kg → 7,20 €", "5 kg → x", "x = 5 · 7,20 / 3", "= 12 €"], "var(--leaf)"],
  ["Inversa", ["4 obreros → 15 días", "6 obreros → x", "x = 4 · 15 / 6", "= 10 días"], "var(--red)"],
], "Regla de tres");

const compuesta = pasos("Regla de tres compuesta: se analiza cada magnitud por separado respecto a la incógnita", ["5 máquinas, 8 h → 400 piezas", "6 máquinas, 10 h → x piezas", "Máquinas y piezas: directa", "Horas y piezas: directa", "x = 400 · (6/5) · (10/8) = 600"], "Regla de tres compuesta");

const reparto = lienzo("Reparto directamente proporcional de 900 euros en partes 2, 3 y 4", `
  ${[[2, "var(--pen)", "200 €"], [3, "var(--leaf)", "300 €"], [4, "var(--red)", "400 €"]].reduce((acc, [n, c, t]) => { const x = acc.x; acc.s += `<rect x="${x}" y="40" width="${n * 24}" height="34" rx="4" fill="${c}" fill-opacity=".5" stroke="${c}" stroke-width="2"/>${tx(x + n * 12, 62, n + " partes", { fs: 10.5, max: n * 24 - 4 })}${tx(x + n * 12, 96, t, { fs: 12, c, max: n * 24 })}`; acc.x += n * 24 + 2; return acc; }, { x: 23, s: "" }).s}
  ${tx(130, 26, "900 € entre 2 + 3 + 4 = 9 partes", { fs: 12, c: "var(--muted)" })}${tx(130, 132, "1 parte = 900 : 9 = 100 €", { fs: 15, fam: D })}${tx(130, 160, "a más partes, más dinero", { fs: 11.5, c: "var(--muted)" })}`, 174);

const repartoInv = pasos("Reparto inversamente proporcional: se reparte en proporción a los inversos", ["Repartir 260 € inv. a 2, 3 y 4", "Inversos: 1/2, 1/3, 1/4 → 6/12, 4/12, 3/12", "Directo a 6, 4 y 3 (13 partes)", "1 parte = 260 : 13 = 20 €", "120 €, 80 € y 60 €"], "Reparto inverso");

const aumento = comparar("Aumentos y disminuciones porcentuales con el índice de variación", [
  ["Aumento 20 %", ["índice 1 + 0,20", "= 1,20", "80 € · 1,20 = 96 €"], "var(--leaf)"],
  ["Descuento 15 %", ["índice 1 − 0,15", "= 0,85", "80 € · 0,85 = 68 €"], "var(--red)"],
], "Índice de variación");

const encadenados = flujo("Porcentajes encadenados: se multiplican los índices de variación", [
  ["Precio 200 €", "ini"], ["Sube 10 %: · 1,10", "proc"], ["Baja 10 %: · 0,90", "proc"], ["Índice total: 1,10 · 0,90 = 0,99", "proc"], ["200 · 0,99 = 198 €", "es"],
], "Porcentajes encadenados");

const inicial = formula("Problema inverso de porcentajes: calcular la cantidad inicial dividiendo entre el índice", "inicial = final : índice", ["Tras un descuento del 25 % pago 60 €", "índice = 0,75", "inicial = 60 : 0,75 = 80 €"], "var(--inf)");

const vida = cajas("Proporcionalidad y porcentajes en la vida diaria", [
  ["IVA", ["21 % · 10 %", "· 1,21"], "var(--pen)"],
  ["Rebajas", ["−30 %", "· 0,70"], "var(--red)"],
  ["Escalas", ["1 : 50 000", "en mapas"], "var(--leaf)"],
  ["Recetas", ["para 4 → para 10", "· 2,5"], "var(--sun)"],
], "¿Dónde aparecen?");

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Proporcionalidad y porcentajes",
  minutos: 110,
  objetivos: [
    "Reconocer razones y proporciones y calcular términos desconocidos",
    "Distinguir magnitudes directa e inversamente proporcionales",
    "Resolver problemas con la reducción a la unidad y la regla de tres simple y compuesta",
    "Realizar repartos directa e inversamente proporcionales",
    "Calcular porcentajes, aumentos, disminuciones y porcentajes encadenados",
  ],
  claves: ["razón", "proporción", "constante de proporcionalidad", "proporcionalidad directa", "proporcionalidad inversa", "regla de tres", "porcentaje", "índice de variación"],
  pregunta: {
    texto: "Una camiseta cuesta 40 €. Primero la suben un 10 % y después la rebajan un 10 %. ¿Vuelve a costar 40 €?",
    respuesta: "No. Tras la subida: 40 · 1,10 = 44 €. Tras la rebaja: 44 · 0,90 = <mark>39,60 €</mark>. El 10 % de rebaja se calcula sobre 44 €, que es más que 40 €, así que se quita más de lo que se había subido.",
  },
  lectura: {
    titulo: "Eratóstenes mide la Tierra con una sombra",
    html: `<p>Hacia el año 240 a. C., Eratóstenes, director de la Biblioteca de Alejandría, leyó que en la ciudad de Siena (la actual Asuán), el mediodía del solsticio de verano, el Sol se reflejaba en el fondo de un pozo: estaba justo en la vertical. Ese mismo día, en Alejandría, un palo vertical sí proyectaba sombra; Eratóstenes midió que los rayos llegaban inclinados unos 7,2 grados.</p><p>Razonó con <b>proporcionalidad</b>: si 7,2° corresponden a la distancia entre las dos ciudades, unos 5000 estadios, entonces los 360° de la circunferencia completa corresponden a x estadios. Como 360 es 50 veces 7,2, la circunferencia de la Tierra debía ser 50 · 5000 = 250 000 estadios, unos 40 000 km. ¡Se equivocó muy poco!</p><p>La proporcionalidad es una de las herramientas más potentes de las matemáticas. La usamos para adaptar recetas, calcular precios, interpretar mapas a escala, repartir gastos o entender los descuentos y el IVA. En este tema aprenderás a reconocer cuándo dos magnitudes son proporcionales y a resolver toda clase de problemas con porcentajes.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Razones y proporciones</h3><p>Una <b>razón</b> es el cociente entre dos cantidades, a/b, y sirve para compararlas. Si en una clase hay 12 chicas y 16 chicos, la razón entre chicas y chicos es 12/16 = 3/4: hay 3 chicas por cada 4 chicos.</p><p>Una <b>proporción</b> es una igualdad entre dos razones: <mark>a/b = c/d</mark>. Se lee «a es a b como c es a d». Los términos a y d se llaman <b>extremos</b>, y b y c, <b>medios</b>.</p><p>La propiedad fundamental de las proporciones es que <b>el producto de los extremos es igual al producto de los medios</b>: a · d = b · c. Por ejemplo, 3/4 = 9/12 porque 3 · 12 = 4 · 9 = 36.</p><p>Fíjate en la diferencia con una fracción: una razón puede comparar magnitudes distintas, como 120 km / 2 h = 60 km/h, que es una velocidad.</p>`, svg: razon },
    { html: `<h3>1.2 Calcular un término desconocido</h3><p>Si en una proporción falta un término, se calcula con la propiedad fundamental. A ese término se le llama <b>cuarto proporcional</b>.</p><p>Ejemplo: 5/8 = x/56. Multiplicando en cruz: 8 · x = 5 · 56 = 280, así que <mark>x = 280 : 8 = 35</mark>.</p><p>Regla práctica: el término desconocido es igual al producto de los dos términos que están «en diagonal» con los conocidos, dividido entre el que queda enfrente. En x/12 = 15/20, x = 12 · 15 : 20 = 9.</p><p>Si los dos medios son iguales, como en 4/x = x/9, se habla de <b>media proporcional</b>: x² = 36, x = 6.</p><p>Este cálculo es la base de la regla de tres y aparece en problemas de escalas: si 1 cm del mapa son 25 km reales, ¿cuántos km son 7,4 cm? 1/25 = 7,4/x → x = 185 km.</p>`, svg: cuartoProp },
    { html: `<h3>2.1 Magnitudes directamente proporcionales</h3><p>Dos magnitudes son <b>directamente proporcionales</b> si al multiplicar (o dividir) una por un número, la otra queda multiplicada (o dividida) por el mismo número. Ejemplo: el peso de las manzanas y lo que pagamos. El doble de kilos cuesta el doble.</p><p>En una tabla de valores directamente proporcionales, el <b>cociente</b> entre los valores correspondientes es siempre el mismo: es la <b>constante de proporcionalidad directa</b>, k. Si 1 kg cuesta 2,40 €, k = 2,40 €/kg, y <mark>y = k · x</mark>.</p><p>Atención: que las dos magnitudes aumenten a la vez <b>no basta</b>. La edad y la estatura de un niño aumentan juntas, pero no son proporcionales: a los 10 años no mides el doble que a los 5.</p><p>La gráfica de una proporcionalidad directa es una <b>recta que pasa por el origen</b>, como verás en el tema de funciones.</p>`, svg: tablaDirecta },
    { html: `<h3>2.2 Reducción a la unidad</h3><p>El método más intuitivo para resolver problemas de proporcionalidad directa es la <b>reducción a la unidad</b>: primero se calcula cuánto corresponde a 1 y después se multiplica por la cantidad pedida.</p><p>Ejemplo: 3 kg de naranjas cuestan 4,50 €. ¿Cuánto cuestan 7 kg?</p><ol><li>1 kg cuesta 4,50 : 3 = 1,50 €.</li><li>7 kg cuestan 1,50 · 7 = <mark>10,50 €</mark>.</li></ol><p>Este método tiene una gran ventaja: el valor unitario tiene significado (precio por kilo, velocidad, consumo por km…) y permite comparar ofertas. Si en otra tienda 5 kg cuestan 7 €, el kilo sale a 1,40 €: es más barato.</p><p>En la proporcionalidad directa, el valor de la unidad es precisamente la constante de proporcionalidad.</p>`, svg: psvg("proporcionalidad", 1) },
    { html: `<h3>2.3 Magnitudes inversamente proporcionales</h3><p>Dos magnitudes son <b>inversamente proporcionales</b> si al multiplicar una por un número, la otra queda <b>dividida</b> por el mismo número. Ejemplo: el número de grifos iguales que llenan un depósito y el tiempo que tardan. El doble de grifos tarda la mitad.</p><p>En una tabla de proporcionalidad inversa, el <b>producto</b> de los valores correspondientes es constante: es la <b>constante de proporcionalidad inversa</b>. Si 1 grifo tarda 12 h, 2 grifos tardan 6 h, 3 tardan 4 h… y siempre <mark>x · y = 12</mark>.</p><p>Otros ejemplos: la velocidad y el tiempo para recorrer una distancia fija; el número de personas que reparten un premio y lo que recibe cada una; el número de obreros y los días que tardan en hacer una obra.</p><p>De nuevo, que una magnitud suba y la otra baje no basta: hay que comprobar que el producto se mantiene.</p>`, svg: tablaInversa, video: pvid("proporcionalidad", 2) },
    { html: `<h3>2.4 La regla de tres simple</h3><p>La <b>regla de tres simple</b> organiza el cálculo de un cuarto proporcional. Se colocan los datos en dos filas y se decide si la relación es directa o inversa.</p><ul><li><b>Directa</b>: 3 kg → 7,20 €; 5 kg → x. Se multiplica en cruz: x = 5 · 7,20 : 3 = 12 €.</li><li><b>Inversa</b>: 4 obreros → 15 días; 6 obreros → x. Se multiplica en línea: x = 4 · 15 : 6 = 10 días.</li></ul><p>El paso clave es preguntarse: «si una magnitud se duplica, ¿la otra se duplica o se reduce a la mitad?». Ese razonamiento decide el tipo y evita aplicar la regla de memoria.</p><p>Comprueba el sentido del resultado: con más obreros se debe tardar <b>menos</b>; si te sale más, has usado la regla directa por error.</p>`, svg: reglaTres },
    { html: `<h3>2.5 La regla de tres compuesta</h3><p>Cuando intervienen <b>más de dos magnitudes</b>, se usa la <b>regla de tres compuesta</b>. Se compara cada magnitud con la incógnita por separado, suponiendo que las demás no cambian.</p><p>Ejemplo: 5 máquinas trabajando 8 horas fabrican 400 piezas. ¿Cuántas piezas fabrican 6 máquinas en 10 horas?</p><ul><li>Más máquinas → más piezas: <b>directa</b>. Factor 6/5.</li><li>Más horas → más piezas: <b>directa</b>. Factor 10/8.</li></ul><p>x = 400 · 6/5 · 10/8 = <mark>600 piezas</mark>.</p><p>Si alguna magnitud fuera inversa, su factor se pondría al revés. Por ejemplo: 6 obreros hacen un muro en 10 días trabajando 8 h al día; ¿cuántos días tardan 4 obreros trabajando 6 h al día? Obreros e horas son inversas a los días: x = 10 · 6/4 · 8/6 = 20 días.</p>`, svg: compuesta },
    { html: `<h3>3.1 Repartos directamente proporcionales</h3><p>Repartir una cantidad de forma <b>directamente proporcional</b> a unos números significa que a quien le corresponde un número mayor recibe más, en la misma proporción.</p><p>Método:</p><ol><li>Se suman los números: es el total de <b>partes</b>.</li><li>Se divide la cantidad entre el número de partes: es el valor de <b>una parte</b>.</li><li>Se multiplica ese valor por los números de cada uno.</li></ol><p>Ejemplo: tres amigos ponen 2, 3 y 4 € en una lotería y ganan 900 €. Partes: 2 + 3 + 4 = 9. Una parte: 900 : 9 = 100 €. Reciben <mark>200, 300 y 400 €</mark>.</p><p>Comprueba siempre que la suma da el total: 200 + 300 + 400 = 900. Los repartos proporcionales se usan para dividir beneficios en una empresa, gastos de una comunidad de vecinos según el tamaño del piso o premios según lo aportado.</p>`, svg: reparto },
    { html: `<h3>3.2 Repartos inversamente proporcionales</h3><p>En un reparto <b>inversamente proporcional</b>, quien tiene un número mayor recibe <b>menos</b>. Por ejemplo, un premio a repartir según las faltas de asistencia: cuantas más faltas, menos premio.</p><p>Método: se reparte de forma <b>directamente proporcional a los inversos</b> de los números.</p><p>Ejemplo: repartir 260 € de forma inversamente proporcional a 2, 3 y 4.</p><ol><li>Inversos: 1/2, 1/3, 1/4. Con denominador común 12: 6/12, 4/12, 3/12.</li><li>Se reparte de forma directa a 6, 4 y 3: 13 partes.</li><li>Una parte: 260 : 13 = 20 €.</li><li>Reciben 6 · 20 = 120 €, 4 · 20 = 80 € y 3 · 20 = <mark>60 €</mark>.</li></ol><p>Comprobación: 120 + 80 + 60 = 260 y 120 · 2 = 80 · 3 = 60 · 4 = 240 (producto constante).</p>`, svg: repartoInv },
    { html: `<h3>4.1 Porcentajes</h3><p>Un <b>porcentaje</b> es una razón con denominador 100: el 15 % significa 15 de cada 100, es decir, 15/100 = 0,15. Para calcular un porcentaje de una cantidad, se multiplica por el número decimal: el 15 % de 80 = 0,15 · 80 = 12.</p><p>Hay tres tipos de problemas:</p><ul><li><b>Calcular la parte</b>: el 30 % de 250 = 0,30 · 250 = 75.</li><li><b>Calcular el porcentaje</b>: ¿qué porcentaje es 18 de 72? 18 : 72 = 0,25 → 25 %.</li><li><b>Calcular el total</b>: si el 40 % de una cantidad es 36, la cantidad es 36 : 0,40 = <mark>90</mark>.</li></ul><p>Algunos porcentajes son fracciones muy sencillas: 50 % = 1/2, 25 % = 1/4, 20 % = 1/5, 10 % = 1/10, 75 % = 3/4. Para calcular mentalmente el 10 %, se divide entre 10; el 5 % es la mitad del 10 %.</p>`, svg: psvg("proporcionalidad", 5), video: pvid("proporcionalidad", 5) },
    { html: `<h3>4.2 Aumentos y disminuciones porcentuales</h3><p>Cuando una cantidad <b>aumenta</b> un r %, la cantidad final es el 100 % + r % de la inicial. Si <b>disminuye</b> un r %, la final es el 100 % − r %. El número por el que se multiplica se llama <b>índice de variación</b>:</p><ul><li>Aumento del 20 %: índice 1 + 0,20 = 1,20. 80 € · 1,20 = 96 €.</li><li>Descuento del 15 %: índice 1 − 0,15 = 0,85. 80 € · 0,85 = 68 €.</li></ul><p>Así, la fórmula general es <mark>final = inicial · índice</mark>. Es más rápido que calcular el porcentaje y luego sumar o restar, y evita errores.</p><p>El <b>IVA</b> es un aumento: un producto de 50 € sin IVA cuesta 50 · 1,21 = 60,50 € con un IVA del 21 %. Las <b>rebajas</b> son disminuciones: un 30 % de descuento equivale a pagar el 70 %, es decir, multiplicar por 0,70.</p>`, svg: aumento },
    { html: `<h3>4.3 Porcentajes encadenados y problema inverso</h3><p>Si se aplican varios aumentos o descuentos seguidos, el índice total es el <b>producto de los índices</b>. Una subida del 10 % y después una bajada del 10 % dan un índice de 1,10 · 0,90 = 0,99: el precio final es el 99 % del inicial, es decir, ha bajado un 1 %. Los porcentajes <b>no se suman</b>.</p><p>Otro ejemplo: un 20 % de rebaja y otro 10 % adicional no son un 30 %: 0,80 · 0,90 = 0,72, un descuento total del 28 %.</p><p>El <b>problema inverso</b> pide la cantidad inicial conociendo la final. Se divide entre el índice: <mark>inicial = final : índice</mark>. Si tras un descuento del 25 % pagas 60 €, el precio original era 60 : 0,75 = 80 €. Error frecuente: sumar el 25 % de 60 (da 75 €, que es incorrecto).</p>`, svg: encadenados },
    { html: `<h3>4.4 Proporcionalidad en la vida real</h3><p>La proporcionalidad está en muchas decisiones cotidianas:</p><ul><li><b>Recetas</b>: una receta para 4 personas adaptada a 10 multiplica cada ingrediente por 10/4 = 2,5.</li><li><b>Escalas</b>: en un mapa a escala 1 : 50 000, 1 cm representa 50 000 cm = 500 m. Es una proporción directa.</li><li><b>Velocidad y tiempo</b>: a doble velocidad, la mitad de tiempo (inversa).</li><li><b>Tiques e IVA</b>: los precios incluyen un IVA del 21 %, 10 % o 4 % según el producto.</li><li><b>Interés</b>: un banco que da un 2 % anual convierte 1000 € en 1020 € tras un año.</li></ul><p>Antes de aplicar cualquier regla, pregúntate siempre si las magnitudes son de verdad proporcionales. El precio de un taxi, por ejemplo, tiene una bajada de bandera fija: no es directamente proporcional a los kilómetros. Del mismo modo, el problema inverso de porcentajes exige dividir entre el índice, como en el dibujo.</p>`, svg: inicial },
  ],
  ejemplos: [
    { enunciado: "Halla x en x/15 = 8/20.", pasos: ["Productos cruzados: 20x = 15 · 8 = 120.", "x = 120 : 20 = 6."], resultado: "x = 6." },
    { enunciado: "Un coche gasta 6 L cada 100 km. ¿Cuánto gasta en 350 km?", pasos: ["Directa: más km, más litros.", "100 km → 6 L; 350 km → x.", "x = 350 · 6 : 100 = 21 L."], resultado: "21 litros." },
    { enunciado: "8 pintores pintan un edificio en 15 días. ¿Cuánto tardarían 12 pintores?", pasos: ["Inversa: más pintores, menos días.", "x = 8 · 15 : 12 = 10."], resultado: "10 días." },
    { enunciado: "Reparte 1500 € de forma directamente proporcional a 3, 5 y 7.", pasos: ["Partes: 3 + 5 + 7 = 15.", "Una parte: 1500 : 15 = 100 €.", "300, 500 y 700 €."], resultado: "300 €, 500 € y 700 €." },
    { enunciado: "Un abrigo de 120 € tiene un 35 % de descuento. ¿Cuánto se paga?", pasos: ["Índice: 1 − 0,35 = 0,65.", "120 · 0,65 = 78 €."], resultado: "78 €." },
    { enunciado: "Tras subir un 12 %, un alquiler cuesta 672 €. ¿Cuánto costaba antes?", pasos: ["Índice: 1,12.", "Inicial = 672 : 1,12 = 600 €."], resultado: "600 €." },
  ],
  errores: [
    "Pensar que dos magnitudes son proporcionales solo porque aumentan a la vez.",
    "Usar la regla de tres directa en un problema de proporcionalidad inversa.",
    "En un reparto inverso, repartir directamente a los números dados.",
    "Sumar porcentajes encadenados: un 20 % y un 10 % de rebaja no son un 30 %.",
    "En el problema inverso, sumar el porcentaje al precio final en lugar de dividir entre el índice.",
    "Confundir el porcentaje (25 %) con el decimal (0,25) al multiplicar: 25 · 80 no es el 25 % de 80.",
  ],
  ejercicios: [
    { nivel: "básico", q: "En una clase hay 15 chicas y 10 chicos. Escribe la razón entre chicas y chicos y simplifícala. ¿Qué significa?", sol: "15/10 = 3/2: hay 3 chicas por cada 2 chicos." },
    { nivel: "básico", q: "¿Forman proporción 6/9 y 10/15? ¿Y 4/7 y 12/20?", sol: "6 · 15 = 90 = 9 · 10: sí. 4 · 20 = 80 ≠ 84 = 7 · 12: no." },
    { nivel: "básico", q: "Calcula x: a) 3/x = 12/20; b) x/9 = 14/21.", sol: "a) 12x = 60 → x = 5. b) 21x = 126 → x = 6." },
    { nivel: "básico", q: "Indica si son directas, inversas o no proporcionales: a) número de entradas y precio total; b) velocidad y tiempo para un trayecto; c) edad y peso de una persona.", sol: "a) Directa. b) Inversa. c) No proporcionales." },
    { nivel: "básico", q: "Completa la tabla de proporcionalidad directa: 2 → 5; 4 → ?; 10 → ?; ? → 30.", sol: "Constante 5/2 = 2,5: 4 → 10; 10 → 25; 12 → 30." },
    { nivel: "básico", q: "Completa la tabla de proporcionalidad inversa: 2 → 30; 3 → ?; 5 → ?; ? → 6.", sol: "Producto 60: 3 → 20; 5 → 12; 10 → 6." },
    { nivel: "básico", q: "5 cuadernos cuestan 8,50 €. ¿Cuánto cuestan 12?", sol: "1 cuaderno: 1,70 €. 12 · 1,70 = 20,40 €." },
    { nivel: "básico", q: "Calcula: 20 % de 350; 5 % de 80; 75 % de 64; 120 % de 45.", sol: "70; 4; 48; 54." },
    { nivel: "básico", q: "¿Qué porcentaje representa 12 de 48? ¿Y 45 de 300?", sol: "12 : 48 = 0,25 → 25 %. 45 : 300 = 0,15 → 15 %." },
    { nivel: "básico", q: "Escribe el índice de variación: aumento del 8 %, descuento del 40 %, IVA del 21 %.", sol: "1,08; 0,60; 1,21." },
    { nivel: "medio", q: "Un grifo que echa 12 L/min llena una piscina en 5 h. ¿Cuánto tardaría uno de 20 L/min?", sol: "Inversa: x = 12 · 5 : 20 = 3 h." },
    { nivel: "medio", q: "En un mapa a escala 1 : 200 000, dos pueblos están a 6,5 cm. ¿Qué distancia real hay?", sol: "6,5 · 200 000 = 1 300 000 cm = 13 km." },
    { nivel: "medio", q: "Una receta de bizcocho para 6 personas lleva 240 g de harina y 3 huevos. Adáptala para 15 personas.", sol: "Factor 15/6 = 2,5: 600 g de harina y 7,5 → unos 7 u 8 huevos." },
    { nivel: "medio", q: "Reparte 840 € de forma directamente proporcional a las horas trabajadas: 10, 12 y 20.", sol: "42 partes; 1 parte = 20 €: 200 €, 240 €, 400 €." },
    { nivel: "medio", q: "Reparte 1100 € de forma inversamente proporcional a 2, 5 y 10 (faltas de asistencia).", sol: "Inversos 1/2, 1/5, 1/10 = 5/10, 2/10, 1/10 → partes 5, 2, 1 (8 partes). 1 parte = 137,50 €: 687,50 €, 275 €, 137,50 €." },
    { nivel: "medio", q: "Un ordenador cuesta 650 € sin IVA. ¿Cuánto cuesta con un IVA del 21 %?", sol: "650 · 1,21 = 786,50 €." },
    { nivel: "medio", q: "Unas zapatillas de 85 € están rebajadas un 30 %. ¿Cuánto se paga y cuánto se ahorra?", sol: "85 · 0,70 = 59,50 €. Ahorro: 25,50 €." },
    { nivel: "medio", q: "En una votación, 360 alumnos (el 45 %) votaron sí. ¿Cuántos alumnos votaron?", sol: "360 : 0,45 = 800 alumnos." },
    { nivel: "medio", q: "Una población de 25 000 habitantes pasa a 27 000. ¿Qué porcentaje ha aumentado?", sol: "Índice 27 000 : 25 000 = 1,08 → aumento del 8 %." },
    { nivel: "medio", q: "Un precio sube un 15 % y luego baja un 15 %. ¿Cuál es la variación total?", sol: "1,15 · 0,85 = 0,9775 → disminuye un 2,25 %." },
    { nivel: "medio", q: "Pagamos 51 € por una chaqueta con un 15 % de descuento. ¿Cuál era su precio?", sol: "51 : 0,85 = 60 €." },
    { nivel: "medio", q: "Un tren a 120 km/h tarda 2,5 h en un trayecto. ¿Cuánto tardaría a 150 km/h?", sol: "Inversa: x = 120 · 2,5 : 150 = 2 h." },
    { nivel: "avanzado", q: "6 obreros trabajando 8 h diarias construyen un muro en 15 días. ¿Cuántos días tardarán 9 obreros trabajando 10 h diarias?", sol: "Obreros y días: inversa; horas y días: inversa. x = 15 · 6/9 · 8/10 = 8 días." },
    { nivel: "avanzado", q: "Para alimentar 20 vacas durante 15 días se necesitan 3000 kg de pienso. ¿Cuánto hace falta para 30 vacas durante 12 días?", sol: "Directas las dos: x = 3000 · 30/20 · 12/15 = 3600 kg." },
    { nivel: "avanzado", q: "Una tienda sube los precios un 20 % y después anuncia un 20 % de descuento. ¿Sale ganando o perdiendo el cliente respecto al precio original?", sol: "1,20 · 0,80 = 0,96: paga un 4 % menos que al principio, sale ganando un poco." },
    { nivel: "avanzado", q: "Un producto ha bajado un 10 %, luego un 20 % y luego ha subido un 30 %. Si ahora cuesta 93,60 €, ¿cuánto costaba al principio?", sol: "Índice total 0,90 · 0,80 · 1,30 = 0,936. Inicial = 93,60 : 0,936 = 100 €." },
    { nivel: "avanzado", q: "Tres socios aportan 4000, 6000 y 10 000 € a un negocio. Al año ganan 3600 €, pero el primero ha trabajado el doble de horas que los otros, que han trabajado igual. Si reparten la mitad del beneficio según el capital y la otra mitad según las horas, ¿cuánto recibe cada uno?", sol: "Capital: 1800 € a 4, 6, 10 (20 partes de 90 €): 360, 540, 900. Horas: 1800 € a 2, 1, 1 (4 partes de 450 €): 900, 450, 450. Total: 1260 €, 990 €, 1350 €." },
    { nivel: "avanzado", q: "Eratóstenes midió 7,2° entre Alejandría y Siena, separadas 5000 estadios. Si un estadio medía unos 157,5 m, ¿qué circunferencia obtuvo en km?", sol: "360 : 7,2 = 50; 50 · 5000 = 250 000 estadios · 157,5 m = 39 375 000 m ≈ 39 375 km." },
    { nivel: "avanzado", q: "Un depósito se llena con 3 grifos iguales en 8 h. Si después de 2 h se estropea uno, ¿cuánto tiempo tardan en total?", sol: "En 2 h se llena 2/8 = 1/4. Cada grifo llena 1/24 por hora; 2 grifos, 1/12 por hora. Faltan 3/4 → 3/4 : 1/12 = 9 h. Total: 2 + 9 = 11 h." },
    { nivel: "avanzado", q: "¿Por qué un descuento del 50 % seguido de otro del 50 % no hace gratis un producto? ¿Qué descuento total es?", sol: "El segundo 50 % se aplica sobre lo que queda: 0,5 · 0,5 = 0,25. Se paga el 25 %: descuento total del 75 %." },
  ],
  quiz: baraja([
    { q: "La razón entre 8 y 12 es…", o: ["2/3", "3/2", "4", "8/20"], a: 0, e: "8/12 simplificada." },
    { q: "En a/b = c/d, se cumple…", o: ["a·d = b·c", "a·b = c·d", "a+d = b+c", "a·c = b·d"], a: 0, e: "Extremos por medios." },
    { q: "Si 4/x = 6/9, x =", o: ["6", "13,5", "2,7", "4"], a: 0, e: "6x = 36." },
    { q: "Precio y kilos de fruta son magnitudes…", o: ["directamente proporcionales", "inversamente proporcionales", "no proporcionales", "iguales"], a: 0, e: "Doble de kilos, doble de precio." },
    { q: "Velocidad y tiempo (distancia fija) son…", o: ["inversamente proporcionales", "directamente proporcionales", "no proporcionales", "constantes"], a: 0, e: "Doble velocidad, mitad de tiempo." },
    { q: "En proporcionalidad directa es constante…", o: ["el cociente", "el producto", "la suma", "la diferencia"], a: 0, e: "y/x = k." },
    { q: "En proporcionalidad inversa es constante…", o: ["el producto", "el cociente", "la suma", "la diferencia"], a: 0, e: "x·y = k." },
    { q: "3 L de leche cuestan 2,70 €. 5 L cuestan…", o: ["4,50 €", "4,20 €", "5,40 €", "1,62 €"], a: 0, e: "0,90 € el litro." },
    { q: "4 personas tardan 6 h. 8 personas tardan…", o: ["3 h", "12 h", "6 h", "2 h"], a: 0, e: "Inversa." },
    { q: "Reparto directo de 60 entre 1 y 2:", o: ["20 y 40", "30 y 30", "40 y 20", "10 y 50"], a: 0, e: "3 partes de 20." },
    { q: "Reparto inverso de 60 entre 1 y 2:", o: ["40 y 20", "20 y 40", "30 y 30", "45 y 15"], a: 0, e: "Directo a 2 y 1." },
    { q: "El 25 % de 120 es…", o: ["30", "25", "48", "96"], a: 0, e: "120 : 4." },
    { q: "30 de 120 es el…", o: ["25 %", "30 %", "40 %", "4 %"], a: 0, e: "30 : 120 = 0,25." },
    { q: "Si el 20 % de x es 14, x =", o: ["70", "2,8", "280", "34"], a: 0, e: "14 : 0,20." },
    { q: "Índice de variación de un aumento del 5 %:", o: ["1,05", "0,05", "1,5", "0,95"], a: 0, e: "1 + 0,05." },
    { q: "Índice de un descuento del 30 %:", o: ["0,70", "0,30", "1,30", "0,03"], a: 0, e: "1 − 0,30." },
    { q: "100 € con IVA del 21 %:", o: ["121 €", "79 €", "102,10 €", "21 €"], a: 0, e: "· 1,21." },
    { q: "Subir un 10 % y bajar un 10 % equivale a…", o: ["bajar un 1 %", "quedarse igual", "subir un 1 %", "bajar un 10 %"], a: 0, e: "1,1 · 0,9 = 0,99." },
    { q: "Pago 80 € tras un 20 % de descuento. El precio era…", o: ["100 €", "96 €", "64 €", "120 €"], a: 0, e: "80 : 0,80." },
    { q: "Escala 1 : 1000. 5 cm en el plano son…", o: ["50 m", "5 m", "500 m", "5000 m"], a: 0, e: "5000 cm." },
  ]),
  examen: baraja([
    { q: "x/12 = 5/20 → x =", o: ["3", "48", "4", "8,3"], a: 0, e: "20x = 60." },
    { q: "7 kg cuestan 17,50 €. 4 kg cuestan…", o: ["10 €", "8 €", "30,63 €", "12 €"], a: 0, e: "2,50 €/kg." },
    { q: "3 grifos llenan un depósito en 10 h. 5 grifos tardan…", o: ["6 h", "16,7 h", "8 h", "15 h"], a: 0, e: "3 · 10 : 5." },
    { q: "Reparto directo de 700 entre 3 y 4: al 4 le toca…", o: ["400", "300", "350", "175"], a: 0, e: "7 partes de 100." },
    { q: "El 15 % de 260 es…", o: ["39", "26", "45", "17,3"], a: 0, e: "0,15 · 260." },
    { q: "Un precio pasa de 50 € a 60 €. Ha subido un…", o: ["20 %", "10 %", "16,7 %", "60 %"], a: 0, e: "60 : 50 = 1,2." },
    { q: "Descuentos del 20 % y 25 % seguidos equivalen a…", o: ["40 %", "45 %", "50 %", "5 %"], a: 0, e: "0,8 · 0,75 = 0,6." },
    { q: "Tras subir un 25 % cuesta 150 €. Antes costaba…", o: ["120 €", "112,50 €", "125 €", "187,50 €"], a: 0, e: "150 : 1,25." },
  ], 1),
  feynman: ["Cómo saber si dos magnitudes son directa o inversamente proporcionales", "Por qué en un reparto inverso se usan los inversos", "Por qué subir y bajar el mismo porcentaje no deja el precio igual", "Por qué para calcular el precio original se divide entre el índice"],
  figura: {
    titulo: "Proporcionalidad y porcentajes en un vistazo",
    svg: resumen("Resumen del tema de proporcionalidad y porcentajes", [
      ["Proporción", "a/b = c/d ⇔ a·d = b·c", "var(--pen)"],
      ["Directa", "y/x = k · doble → doble · regla de tres en cruz", "var(--leaf)"],
      ["Inversa", "x·y = k · doble → mitad · regla en línea", "var(--sun)"],
      ["Repartos", "directo: partes · inverso: a los inversos", "var(--inf)"],
      ["Porcentajes", "final = inicial · índice · encadenados: ×", "var(--red)"],
    ]),
  },
  video: pvg("proporcionalidad"),
  mapa: mapa("PROPORCIONALIDAD", "var(--leaf)", [
    ["Razones", "proporción · cuarto proporcional", "var(--pen)"],
    ["Magnitudes", "directas · inversas · regla de tres", "var(--leaf)"],
    ["Repartos", "directos · inversos", "var(--sun)"],
    ["Porcentajes", "aumentos · descuentos · encadenados", "var(--red)"],
  ], 250),
  glosario: [
    ["Razón", "Cociente entre dos cantidades que se comparan."],
    ["Proporción", "Igualdad entre dos razones."],
    ["Extremos y medios", "En a/b = c/d, a y d son extremos; b y c, medios."],
    ["Cuarto proporcional", "Término desconocido de una proporción."],
    ["Magnitud", "Cualidad que se puede medir: peso, tiempo, precio…"],
    ["Proporcionalidad directa", "Relación en la que el cociente entre valores correspondientes es constante."],
    ["Proporcionalidad inversa", "Relación en la que el producto de valores correspondientes es constante."],
    ["Constante de proporcionalidad", "Cociente (directa) o producto (inversa) que se mantiene fijo."],
    ["Reducción a la unidad", "Método que calcula primero el valor correspondiente a 1."],
    ["Regla de tres", "Procedimiento para hallar un cuarto proporcional (simple o compuesta)."],
    ["Reparto proporcional", "División de una cantidad en partes proporcionales a unos números."],
    ["Porcentaje", "Razón con denominador 100: r %."],
    ["Índice de variación", "Número por el que se multiplica para aplicar un aumento o un descuento."],
    ["IVA", "Impuesto sobre el valor añadido que se suma al precio como porcentaje."],
  ],
  situacion: {
    titulo: "Organizamos el viaje de fin de curso",
    reto: "Vais a preparar el presupuesto de una excursión de un día para vuestra clase: transporte, entradas y comida, con descuentos de grupo, IVA y un reparto justo de los gastos.",
    pasos: [
      "Elegid destino y buscad precios reales de autobús, entradas y menús (con y sin IVA).",
      "Calculad el coste por alumno con reducción a la unidad y estudiad cómo cambia si van más o menos alumnos.",
      "Aplicad descuentos de grupo y porcentajes encadenados y comparad ofertas de dos empresas.",
      "Proponed un reparto proporcional de un fondo de la clase según lo recaudado por cada grupo en una actividad.",
      "Presentad el presupuesto final en una hoja de cálculo o un póster y defendedlo.",
    ],
    producto: "Un presupuesto detallado del viaje con los cálculos de proporcionalidad, porcentajes y repartos.",
    evaluacion: ["Identifica correctamente magnitudes directas e inversas.", "Aplica porcentajes, IVA y descuentos encadenados sin errores.", "Realiza repartos proporcionales justificados.", "Comunica el presupuesto de forma clara y razonada."],
  },
  tarjetas: [
    ["Proporción", "a/b = c/d"], ["Propiedad fundamental", "a·d = b·c"], ["Directa", "y/x constante"],
    ["Inversa", "x·y constante"], ["Regla de tres directa", "Multiplicar en cruz"], ["Regla de tres inversa", "Multiplicar en línea"],
    ["Reparto directo", "Total : suma de partes"], ["Reparto inverso", "Directo a los inversos"], ["r % de C", "C · r/100"],
    ["Aumento r %", "· (1 + r/100)"], ["Descuento r %", "· (1 − r/100)"], ["Inicial", "Final : índice"],
  ],
  familias: ["Revisad juntos un tique y calculad el IVA incluido.", "En rebajas, calculad el precio final antes de llegar a la caja.", "Adaptad una receta familiar a más o menos comensales.", "Mirad un mapa con escala y calculad la distancia real entre dos lugares."],
  profesores: {
    saberes: "Sentido numérico y algebraico: razones y proporciones, proporcionalidad directa e inversa, repartos, porcentajes, aumentos y disminuciones y porcentajes encadenados en contextos de consumo (RD 217/2022, Matemáticas ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Folletos de rebajas y tiques reales para trabajar el IVA.", "Hoja de cálculo para comparar tablas directas e inversas.", "Mapas a escala de la comarca para medir distancias.", "Debate: ¿es justo el reparto? Comparar reparto igualitario, directo e inverso."],
  },
  fuentes: [RD, DECRET, { t: "Wikipedia: Eratóstenes", url: "https://es.wikipedia.org/wiki/Erat%C3%B3stenes" }, { t: "Agencia Tributaria: tipos de IVA", url: "https://sede.agenciatributaria.gob.es/" }],
  revisado: REV,
};
