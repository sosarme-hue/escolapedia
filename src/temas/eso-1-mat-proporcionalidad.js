// Matemáticas 1º ESO · Proporcionalidad y porcentajes. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { D, mapa, tabla, tx, lienzo, pasos, cajas, comparar, formula, ejes, barras, resumen, C, RD, DECRET, REV, vb, vg } = require("./_eso1L2");

const razon = lienzo("Razón: en una clase con 12 chicas y 8 chicos la razón chicas a chicos es 12 a 8, o 3 a 2", `
  ${[...Array(12)].map((_, i) => `<circle cx="${22 + (i % 6) * 18}" cy="${34 + Math.floor(i / 6) * 22}" r="7" fill="var(--red)" fill-opacity=".7"/>`).join("")}
  ${[...Array(8)].map((_, i) => `<circle cx="${22 + (i % 6) * 18}" cy="${92 + Math.floor(i / 6) * 22}" r="7" fill="var(--pen)" fill-opacity=".7"/>`).join("")}
  ${tx(196, 50, "12 : 8", { fs: 20, fam: D, max: 110 })}${tx(196, 80, "= 3 : 2", { fs: 20, fam: D, c: "var(--leaf)", max: 110 })}${tx(196, 108, "3 chicas por", { fs: 11, c: "var(--muted)", max: 110 })}${tx(196, 124, "cada 2 chicos", { fs: 11, c: "var(--muted)", max: 110 })}`);

const proporcion = formula("Proporción: igualdad de dos razones; el producto de extremos es igual al producto de medios", "3/4 = 6/8", ["Extremos 3 y 8 · medios 4 y 6", "3 · 8 = 4 · 6 = 24"], "var(--pen)");

const directa = ejes("Proporcionalidad directa: el precio crece igual que los kilos y los puntos están en una recta que pasa por el origen", { x: [0, 5], y: [0, 10], paso: 1, pasoY: 2, marcasX: [1, 2, 3, 4], marcasY: [2, 4, 6, 8], ex: "kg", ey: "€", curvas: [{ f: (x) => 2 * x, c: "var(--leaf)", t: "precio = 2 · kg", tx: 2.6, ty: 8.8 }], puntos: [[1, 2, "", "var(--leaf)"], [2, 4, "", "var(--leaf)"], [3, 6, "", "var(--leaf)"], [4, 8, "", "var(--leaf)"]] });

const tablaDir = lienzo("Tabla de proporcionalidad directa: al multiplicar una magnitud por 2 o por 3 la otra también; el cociente es constante", `
  ${[["kg", "1", "2", "3", "5"], ["€", "2,5", "5", "7,5", "12,5"]].map((f, j) => f.map((v, i) => `<rect x="${12 + i * 47}" y="${24 + j * 34}" width="45" height="30" rx="5" fill="${i === 0 ? (j ? "var(--leaf)" : "var(--pen)") : "var(--card)"}" fill-opacity="${i === 0 ? 0.25 : 1}" stroke="var(--line)"/>${tx(34.5 + i * 47, 44 + j * 34, v, { fs: 13, max: 40 })}`).join("")).join("")}
  ${tx(130, 120, "€ : kg = 2,5 siempre", { fs: 15, c: "var(--red)", fam: D })}${tx(130, 146, "constante de proporcionalidad", { fs: 11.5, c: "var(--muted)" })}`);

const unidad = pasos("Reducción a la unidad: si 4 cuadernos cuestan 6 euros, 1 cuesta 1,50 y 7 cuestan 10,50", ["4 cuadernos → 6 €", "1 cuaderno → 6 : 4 = 1,50 €", "7 cuadernos → 7 · 1,50", "= 10,50 €"], "Reducción a la unidad");

const inversa = ejes("Proporcionalidad inversa: a más obreros menos días; los puntos forman una curva y el producto es constante", { x: [0, 7], y: [0, 14], paso: 1, pasoY: 2, marcasX: [1, 2, 3, 4, 6], marcasY: [4, 8, 12], ex: "obreros", ey: "días", curvas: [{ f: (x) => 12 / x, de: 0.9, c: "var(--red)", t: "obreros · días = 12", tx: 4.3, ty: 7.2 }], puntos: [[1, 12, "", "var(--red)"], [2, 6, "", "var(--red)"], [3, 4, "", "var(--red)"], [4, 3, "", "var(--red)"], [6, 2, "", "var(--red)"]] });

const dirInv = comparar("Directa frente a inversa: en la directa el cociente es constante y en la inversa el producto", [
  ["Directa", ["más → más", "· 2 → · 2", "y : x constante", "kilos y precio"], "var(--leaf)"],
  ["Inversa", ["más → menos", "· 2 → : 2", "x · y constante", "velocidad y tiempo"], "var(--red)"],
], "¿Directa o inversa?");

const porcentaje = lienzo("Un porcentaje es una fracción de denominador 100: el 35 por ciento son 35 de cada 100 cuadraditos", `
  ${[...Array(100)].map((_, i) => `<rect x="${20 + (i % 10) * 12}" y="${22 + Math.floor(i / 10) * 12}" width="12" height="12" fill="${i < 35 ? "var(--sun)" : "var(--card)"}" fill-opacity="${i < 35 ? 0.7 : 1}" stroke="var(--line)" stroke-width=".8"/>`).join("")}
  ${tx(200, 56, "35 %", { fs: 26, fam: D, c: "var(--sun)" })}${tx(200, 84, "= 35/100", { fs: 14, fam: D })}${tx(200, 108, "= 0,35", { fs: 14, fam: D })}${tx(200, 134, "= 7/20", { fs: 14, fam: D, c: "var(--muted)" })}`, 160);

const equivalencias = barras("Porcentajes de uso frecuente y su fracción: 10 por ciento un décimo, 25 un cuarto, 50 la mitad, 75 tres cuartos", [["10 %", 10, "var(--inf)"], ["20 %", 20, "var(--pen)"], ["25 %", 25, "var(--leaf)"], ["50 %", 50, "var(--sun)"], ["75 %", 75, "var(--red)"]], { titulo: "1/10 · 1/5 · 1/4 · 1/2 · 3/4", fmt: (v) => v });

const aumento = comparar("Aumentos y descuentos con el índice de variación: subir un 20 por ciento es multiplicar por 1,20 y bajar un 20 por ciento es multiplicar por 0,80", [
  ["Aumento 20 %", ["· (1 + 0,20)", "· 1,20", "50 € → 60 €"], "var(--red)"],
  ["Descuento 20 %", ["· (1 − 0,20)", "· 0,80", "50 € → 40 €"], "var(--leaf)"],
], "Índice de variación");

const iva = pasos("Calcular el precio final con un descuento del 15 por ciento sobre 80 euros", ["Precio: 80 €, rebaja 15 %", "Descuento: 15 % de 80 = 12 €", "80 − 12 = 68 €", "Atajo: 80 · 0,85 = 68 €"], "Rebajas");

const escala = lienzo("Escala de un mapa 1 a 50 000: un centímetro del mapa son 50 000 centímetros, es decir, 500 metros, en la realidad", `
  <rect x="16" y="20" width="228" height="80" rx="8" fill="var(--leaf)" fill-opacity=".1" stroke="var(--leaf)" stroke-width="2"/>
  <circle cx="60" cy="60" r="6" fill="var(--red)"/><circle cx="196" cy="60" r="6" fill="var(--red)"/><path d="M60 60 H196" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 3"/>
  ${tx(128, 52, "4 cm en el mapa", { fs: 11.5, c: "var(--red)", max: 120 })}
  ${tx(130, 126, "1 : 50 000", { fs: 18, fam: D })}${tx(130, 152, "4 · 50 000 cm = 2 km", { fs: 13, c: "var(--muted)" })}`, 166);

module.exports = {
  materia: "Matemáticas",
  curso: C,
  titulo: "Proporcionalidad y porcentajes",
  minutos: 110,
  objetivos: [
    "Calcular razones y reconocer proporciones",
    "Distinguir magnitudes directa e inversamente proporcionales",
    "Resolver problemas con reducción a la unidad y regla de tres",
    "Interpretar y calcular porcentajes de una cantidad",
    "Calcular aumentos y descuentos porcentuales con el índice de variación",
    "Aplicar la proporcionalidad a escalas, recetas y compras",
  ],
  claves: ["razón", "proporción", "proporcionalidad directa", "proporcionalidad inversa", "regla de tres", "porcentaje", "descuento"],
  pregunta: {
    texto: "Unas zapatillas cuestan 80 € y están rebajadas un 15 %. ¿Cuánto pagas?",
    respuesta: "El 15 % de 80 es 80 · 15 : 100 = 12 €. Pagas 80 − 12 = <mark>68 €</mark>. Más rápido: si te descuentan el 15 %, pagas el 85 %: 80 · 0,85 = 68 €. Los <b>porcentajes</b> son un caso de <b>proporcionalidad</b>.",
  },
  lectura: {
    titulo: "Eratóstenes mide la Tierra con una sombra",
    html: `<p>Hace unos 2 250 años, en la ciudad egipcia de Alejandría, el sabio Eratóstenes leyó que en la ciudad de Siena, más al sur, el mediodía del solsticio de verano el Sol iluminaba el fondo de los pozos: estaba justo en la vertical y los objetos no hacían sombra. Sin embargo, ese mismo día y a la misma hora, un palo clavado en Alejandría sí proyectaba una pequeña sombra.</p><p>Eratóstenes midió el ángulo de esa sombra: era más o menos <b>1/50 de una vuelta completa</b>. Pensó que, si la Tierra es redonda, la distancia entre Siena y Alejandría tenía que ser también 1/50 de la vuelta a la Tierra. Esa distancia era de unos 5 000 estadios, así que la circunferencia de la Tierra debía ser 50 · 5 000 = 250 000 estadios. Su resultado, unos 40 000 km, se acerca muchísimo al valor real.</p><p>Eratóstenes usó una idea sencilla y potentísima: la <b>proporcionalidad</b>. Si una parte del ángulo corresponde a una parte de la distancia, el todo corresponde al todo. Con esa misma idea se calculan precios, recetas, escalas de mapas, velocidades y porcentajes de descuento. En este tema aprenderás a reconocerla y a usarla.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Razón entre dos cantidades</h3><p>Una <b>razón</b> es una comparación entre dos cantidades mediante una división. Se escribe como fracción o con dos puntos: a/b o a : b, y se lee «a es a b».</p><p>Si en una clase hay 12 chicas y 8 chicos, la razón entre chicas y chicos es 12/8, que simplificada es <mark>3/2</mark>: hay 3 chicas por cada 2 chicos. También se puede expresar como decimal: 1,5 chicas por cada chico.</p><p>Las razones están por todas partes: la velocidad (km por hora), el precio por kilo (€/kg), la densidad de población (habitantes por km²) o las proporciones de una receta (2 tazas de harina por cada taza de leche). A diferencia de una fracción, en una razón las dos cantidades pueden ser de distinto tipo (kilómetros y horas) y se refieren a cosas distintas, no a partes de un mismo todo.</p>`, svg: razon },
    { html: `<h3>1.2 Proporciones</h3><p>Una <b>proporción</b> es una igualdad entre dos razones: <mark>a/b = c/d</mark>. Se lee «a es a b como c es a d». Por ejemplo, 3/4 = 6/8 es una proporción.</p><p>Los números a y d se llaman <b>extremos</b>, y b y c, <b>medios</b>. La propiedad fundamental de las proporciones dice que <b>el producto de los extremos es igual al producto de los medios</b>: a · d = b · c. En el ejemplo, 3 · 8 = 4 · 6 = 24. Es la misma comprobación que usábamos para las fracciones equivalentes.</p><p>Esta propiedad sirve para calcular un término desconocido, el <b>cuarto proporcional</b>. En 5/x = 15/12: 5 · 12 = 15 · x, así que x = 60 : 15 = 4. Es la base de la regla de tres, que verás enseguida.</p>`, svg: proporcion },
    { html: `<h3>1.3 Magnitudes directamente proporcionales</h3><p>Una <b>magnitud</b> es algo que se puede medir: el peso, el precio, el tiempo, la distancia… Dos magnitudes son <b>directamente proporcionales</b> si al multiplicar (o dividir) una por un número, la otra queda multiplicada (o dividida) por el mismo número.</p><p>Ejemplo: si 1 kg de naranjas cuesta 2,50 €, 2 kg cuestan 5 € y 3 kg, 7,50 €. Al doble de kilos, doble de precio. En una tabla de proporcionalidad directa, el <b>cociente</b> entre los valores correspondientes es siempre el mismo: 5 : 2 = 7,5 : 3 = 2,5. Este número se llama <b>constante de proporcionalidad</b> (aquí, el precio por kilo).</p><p>¡Cuidado! «Cuando una aumenta, la otra también» no basta. La edad y la altura de una persona aumentan a la vez, pero no son proporcionales: a los 20 años no mides el doble que a los 10.</p>`, svg: tablaDir },
    { html: `<h3>1.4 La gráfica de la proporcionalidad directa</h3><p>Si representamos en unos ejes los pares de valores de dos magnitudes directamente proporcionales (kilos en el eje horizontal y euros en el vertical), los puntos quedan <b>alineados en una recta que pasa por el origen</b> (0, 0). Tiene sentido: 0 kg cuestan 0 €.</p><p>La inclinación de la recta depende de la constante de proporcionalidad: cuanto mayor es el precio por kilo, más empinada es la recta. Si dos fruterías venden naranjas a precios distintos, la recta de la más cara sube más deprisa.</p><p>La gráfica permite leer valores sin calcular: para saber cuánto cuestan 3,5 kg, se busca 3,5 en el eje horizontal, se sube hasta la recta y se lee en el eje vertical. Verás mucho más sobre esto en el tema de funciones, donde estas relaciones se escriben como y = k · x.</p>`, svg: directa },
    { html: `<h3>1.5 Reducción a la unidad y regla de tres directa</h3><p>Hay dos métodos clásicos para resolver problemas de proporcionalidad directa:</p><ul><li><b>Reducción a la unidad</b>: se calcula primero el valor que corresponde a 1 y después se multiplica. «4 cuadernos cuestan 6 €; ¿cuánto cuestan 7?» → 1 cuaderno: 6 : 4 = 1,50 € → 7 cuadernos: 7 · 1,50 = <mark>10,50 €</mark>.</li><li><b>Regla de tres directa</b>: se colocan los datos en dos filas y se plantea una proporción.</li></ul>${tabla(["Cuadernos", "Euros"], [["4", "6"], ["7", "x"]])}<p>4/7 = 6/x → 4 · x = 7 · 6 → x = 42 : 4 = 10,50 €. Fíjate en que la regla de tres no es más que la propiedad fundamental de las proporciones. La reducción a la unidad es más fácil de entender, y la regla de tres más rápida cuando ya se domina.</p>`, svg: unidad, video: vb("proB") },
    { html: `<h3>1.6 Magnitudes inversamente proporcionales</h3><p>Dos magnitudes son <b>inversamente proporcionales</b> si al multiplicar una por un número, la otra queda <b>dividida</b> por el mismo número. Ejemplo: si 1 obrero tarda 12 días en hacer un trabajo, 2 obreros tardan 6 días, 3 tardan 4 días y 4 tardan 3 días. Al doble de obreros, la mitad de días.</p><p>En una tabla de proporcionalidad inversa, el <b>producto</b> de los valores correspondientes es constante: 1 · 12 = 2 · 6 = 3 · 4 = 4 · 3 = 12. En la gráfica, los puntos no forman una recta, sino una <b>curva</b> que baja cada vez más despacio (una hipérbola).</p><p>Ejemplos: la velocidad y el tiempo de un viaje (a más velocidad, menos tiempo), el número de personas y lo que le toca a cada una al repartir un premio, o el número de grifos y el tiempo que tarda en llenarse un depósito.</p>`, svg: inversa },
    { html: `<h3>1.7 Regla de tres inversa</h3><p>Para resolver problemas de proporcionalidad inversa también se puede reducir a la unidad, pero ahora multiplicando y dividiendo «al revés». «6 grifos llenan un depósito en 4 horas; ¿cuánto tardan 8 grifos?».</p><ul><li><b>Reducción a la unidad</b>: 1 grifo tardaría 6 veces más: 4 · 6 = 24 h. 8 grifos tardan 8 veces menos: 24 : 8 = <mark>3 h</mark>.</li><li><b>Con el producto constante</b>: grifos · horas = 6 · 4 = 24; 8 · x = 24; x = 3 h.</li></ul><p>Antes de calcular, pregúntate siempre: «si una magnitud aumenta, ¿la otra aumenta o disminuye?». Si aumenta, probablemente es directa; si disminuye, inversa. Y comprueba si el resultado tiene sentido: con más grifos debe tardar menos, así que 3 h &lt; 4 h es razonable. Ojo: hay magnitudes que no son ni directa ni inversamente proporcionales, como la edad y el peso.</p>`, svg: dirInv },
    { html: `<h3>2.1 ¿Qué es un porcentaje?</h3><p>Un <b>porcentaje</b> o tanto por ciento es una razón con denominador 100. El 35 % (se lee «treinta y cinco por ciento») significa «35 de cada 100». Por tanto, un porcentaje se puede escribir de tres formas:</p><p style="text-align:center"><mark>35 % = 35/100 = 0,35</mark></p><p>Algunos porcentajes son muy fáciles de usar porque equivalen a fracciones sencillas: el 50 % es la mitad, el 25 % es la cuarta parte, el 75 % son tres cuartos, el 10 % es la décima parte y el 20 % es la quinta parte. El 100 % es el total, y un porcentaje mayor que 100 significa más que el total (un 150 % es una vez y media).</p><p>Los porcentajes sirven para comparar proporciones aunque los totales sean distintos: si en un instituto aprueban 180 de 240 alumnos (75 %) y en otro 150 de 180 (83,3 %), el segundo tiene mejores resultados aunque aprueben menos alumnos.</p>`, svg: porcentaje },
    { html: `<h3>2.2 Calcular porcentajes</h3><p>Hay tres tipos de cálculos con porcentajes:</p><ul><li><b>El tanto por ciento de una cantidad</b>: se multiplica la cantidad por el porcentaje y se divide entre 100, o se multiplica por el decimal. El 15 % de 80 = 80 · 15 : 100 = 80 · 0,15 = <b>12</b>.</li><li><b>Qué porcentaje es una parte</b>: se divide la parte entre el total y se multiplica por 100. 18 de 24 alumnos son 18 : 24 · 100 = <b>75 %</b>.</li><li><b>Calcular el total</b> conociendo una parte y su porcentaje: si 12 € son el 15 %, el 1 % es 12 : 15 = 0,8 € y el 100 % es 80 €.</li></ul><p>Para calcular mentalmente, piensa en el 10 % (dividir entre 10) y en el 1 % (dividir entre 100), y combínalos: el 15 % de 80 es el 10 % (8) más la mitad de eso, el 5 % (4): 12. Y el 21 % de 200 es 2 · 20 + 2 = 42.</p>`, svg: equivalencias },
    { html: `<h3>2.3 Aumentos y descuentos porcentuales</h3><p>En las tiendas y en las noticias aparecen continuamente aumentos («el precio sube un 20 %») y descuentos («rebaja del 15 %»). Se pueden calcular de dos maneras:</p><ul><li><b>En dos pasos</b>: calcular el porcentaje y sumarlo o restarlo. Rebaja del 15 % sobre 80 €: 12 € de descuento; precio final 80 − 12 = 68 €.</li><li><b>En un paso, con el índice de variación</b>: si te descuentan el 15 %, pagas el 85 %: 80 · 0,85 = <mark>68 €</mark>. Si el precio sube un 20 %, pagas el 120 %: 50 · 1,20 = 60 €.</li></ul><p>El <b>índice de variación</b> es el número por el que se multiplica: 1 + porcentaje en decimal para los aumentos, 1 − porcentaje en decimal para los descuentos. Es el método que usan las calculadoras y las hojas de cálculo.</p><p>Una trampa clásica: subir un 10 % y después bajar un 10 % <b>no</b> deja el precio igual. 100 € · 1,10 = 110 €; 110 · 0,90 = 99 €.</p>`, svg: aumento, video: vb("proB2") },
    { html: `<h3>2.4 El IVA y otros porcentajes de la vida diaria</h3><p>El <b>IVA</b> (impuesto sobre el valor añadido) es un porcentaje que se suma al precio de casi todo lo que compramos. En España, el tipo general es del 21 %, y hay tipos reducidos del 10 % (por ejemplo, en restaurantes) y del 4 % (pan, leche, libros…). Si un producto cuesta 50 € sin IVA, con el 21 % cuesta 50 · 1,21 = 60,50 €.</p><p>Otros porcentajes habituales: los <b>intereses</b> de un préstamo o de una cuenta de ahorro, las <b>propinas</b>, la <b>batería</b> del móvil, las <b>encuestas</b> («el 60 % prefiere…»), la composición de los alimentos («contiene un 30 % de cacao») o la <b>probabilidad</b> de lluvia.</p><p>Al leer un porcentaje, pregúntate siempre «¿por ciento de qué?». Un 50 % de descuento sobre el segundo producto no es lo mismo que un 50 % sobre todo: al comprar dos productos de 20 €, pagas 20 + 10 = 30 €, que es un 25 % de descuento sobre el total.</p>`, svg: iva },
    { html: `<h3>2.5 Escalas y otras aplicaciones</h3><p>La proporcionalidad aparece en muchas situaciones prácticas:</p><ul><li><b>Escalas</b>: en un mapa a escala 1 : 50 000, cada centímetro del mapa son 50 000 cm de la realidad (500 m). Si dos pueblos están a 4 cm en el mapa, la distancia real es 4 · 50 000 = 200 000 cm = 2 km.</li><li><b>Recetas</b>: si para 4 personas se usan 300 g de arroz, para 6 personas se usan 300 : 4 · 6 = 450 g.</li><li><b>Repartos proporcionales</b>: tres amigos ponen 10 €, 20 € y 30 € para un boleto que gana 120 €. Lo justo es repartir en proporción a lo aportado: 20 €, 40 € y 60 €.</li><li><b>Velocidad</b>: a 90 km/h constantes, en 2,5 h se recorren 225 km.</li></ul><p>En todos los casos, el truco es el mismo: identificar las magnitudes, decidir si la relación es directa o inversa y aplicar la reducción a la unidad o la regla de tres.</p>`, svg: escala, video: vg("proV") },
  ],
  ejemplos: [
    { enunciado: "Comprueba si 4/10 y 6/15 forman proporción.", pasos: ["Extremos: 4 · 15 = 60.", "Medios: 10 · 6 = 60."], resultado: "Sí, forman proporción." },
    { enunciado: "Si 5 kg de patatas cuestan 4,25 €, ¿cuánto cuestan 8 kg?", pasos: ["Directa: más kilos, más precio.", "1 kg: 4,25 : 5 = 0,85 €.", "8 kg: 8 · 0,85."], resultado: "6,80 €." },
    { enunciado: "Un coche a 80 km/h tarda 3 h en un trayecto. ¿Cuánto tardaría a 120 km/h?", pasos: ["Inversa: más velocidad, menos tiempo.", "Producto constante: 80 · 3 = 240 km.", "120 · x = 240."], resultado: "x = 2 h." },
    { enunciado: "En un examen, 21 de 28 alumnos aprueban. ¿Qué porcentaje aprueba?", pasos: ["21 : 28 = 0,75.", "0,75 · 100."], resultado: "El 75 %." },
    { enunciado: "Un móvil de 240 € sube un 15 %. ¿Cuál es el nuevo precio?", pasos: ["Índice: 1 + 0,15 = 1,15.", "240 · 1,15."], resultado: "276 €." },
    { enunciado: "Después de un descuento del 30 % pago 56 €. ¿Cuál era el precio inicial?", pasos: ["Pago el 70 %: precio · 0,70 = 56.", "Precio = 56 : 0,70."], resultado: "80 €." },
  ],
  errores: [
    "Creer que dos magnitudes que crecen a la vez son siempre proporcionales.",
    "Usar la regla de tres directa en un problema de proporcionalidad inversa.",
    "Calcular el porcentaje sin dividir entre 100: el 15 % de 80 no es 1 200.",
    "Pensar que subir un 10 % y bajar un 10 % deja la cantidad igual.",
    "Calcular un porcentaje sobre la cantidad equivocada (¿por ciento de qué?).",
    "En las escalas, olvidar pasar los centímetros a metros o kilómetros.",
  ],
  ejercicios: [
    { nivel: "básico", q: "En un grupo hay 15 chicos y 10 chicas. Escribe la razón chicos/chicas simplificada e interprétala.", sol: "15/10 = 3/2: hay 3 chicos por cada 2 chicas." },
    { nivel: "básico", q: "¿Forman proporción 2/5 y 8/20? ¿Y 3/7 y 9/20?", sol: "2 · 20 = 40 = 5 · 8: sí. 3 · 20 = 60 ≠ 63 = 7 · 9: no." },
    { nivel: "básico", q: "Calcula x en la proporción 3/x = 12/20.", sol: "3 · 20 = 12 · x → x = 60 : 12 = 5." },
    { nivel: "básico", q: "Di si son directamente, inversamente o no proporcionales: a) entradas y precio; b) nº de pintores y tiempo; c) edad y estatura.", sol: "a) Directa. b) Inversa. c) No proporcionales." },
    { nivel: "básico", q: "Completa la tabla de proporcionalidad directa: 2 → 6; 5 → ?; ? → 24.", sol: "Constante 3: 5 → 15; 8 → 24." },
    { nivel: "básico", q: "Si 3 bolígrafos cuestan 2,40 €, ¿cuánto cuestan 10?", sol: "1 bolígrafo: 0,80 €. 10: 8 €." },
    { nivel: "básico", q: "Escribe como fracción y decimal: 40 %, 5 %, 120 %.", sol: "40/100 = 0,4; 5/100 = 0,05; 120/100 = 1,2." },
    { nivel: "básico", q: "Calcula: 25 % de 60; 10 % de 350; 75 % de 40.", sol: "15; 35; 30." },
    { nivel: "básico", q: "Expresa como porcentaje: 1/2, 3/4, 1/5, 0,07.", sol: "50 %; 75 %; 20 %; 7 %." },
    { nivel: "básico", q: "¿Qué porcentaje de 50 es 20?", sol: "20 : 50 · 100 = 40 %." },
    { nivel: "básico", q: "Un jersey de 30 € tiene un 20 % de descuento. ¿Cuánto cuesta?", sol: "30 · 0,80 = 24 €." },
    { nivel: "básico", q: "En un mapa 1 : 100 000, dos ciudades están a 7 cm. ¿Cuál es la distancia real en km?", sol: "7 · 100 000 = 700 000 cm = 7 km." },
    { nivel: "medio", q: "Para 4 personas se necesitan 250 g de pasta. ¿Cuánta pasta hace falta para 10 personas?", sol: "1 persona: 62,5 g. 10 personas: 625 g." },
    { nivel: "medio", q: "Si 6 obreros tardan 10 días en hacer una obra, ¿cuánto tardan 4 obreros?", sol: "Inversa: 6 · 10 = 60; 4 · x = 60 → x = 15 días." },
    { nivel: "medio", q: "Un grifo que echa 12 L por minuto llena una piscina en 5 h. ¿Cuánto tardaría un grifo de 20 L/min?", sol: "Inversa: 12 · 5 = 60; 20 · x = 60 → x = 3 h." },
    { nivel: "medio", q: "Completa la tabla de proporcionalidad inversa: 2 → 18; 3 → ?; ? → 4.", sol: "Producto 36: 3 → 12; 9 → 4." },
    { nivel: "medio", q: "Calcula mentalmente el 15 % de 60 y el 21 % de 300.", sol: "10 % = 6, 5 % = 3 → 9. 20 % = 60, 1 % = 3 → 63." },
    { nivel: "medio", q: "Unos auriculares cuestan 45 € sin IVA. ¿Cuánto cuestan con el 21 % de IVA?", sol: "45 · 1,21 = 54,45 €." },
    { nivel: "medio", q: "El 30 % de los alumnos de un instituto, que son 156, van en bici. ¿Cuántos alumnos tiene el instituto?", sol: "1 %: 156 : 30 = 5,2. 100 %: 520 alumnos." },
    { nivel: "medio", q: "Una camiseta pasa de 25 € a 20 €. ¿Qué porcentaje de descuento se ha aplicado?", sol: "Descuento 5 €: 5 : 25 · 100 = 20 %." },
    { nivel: "medio", q: "El precio de un abono sube de 40 € a 46 €. ¿Qué porcentaje ha subido?", sol: "6 : 40 · 100 = 15 %." },
    { nivel: "medio", q: "Reparte 600 € de forma proporcional a 2, 3 y 5.", sol: "Total partes 10; cada parte 60 €: 120 €, 180 € y 300 €." },
    { nivel: "medio", q: "Un tren va a 150 km/h. ¿Cuántos km recorre en 2 h 20 min?", sol: "2 h 20 min = 7/3 h. 150 · 7/3 = 350 km." },
    { nivel: "avanzado", q: "Un precio de 200 € sube un 10 % y después baja un 10 %. ¿Cuál es el precio final? ¿Qué porcentaje ha variado?", sol: "200 · 1,10 · 0,90 = 198 €. Ha bajado 2 € = 1 %." },
    { nivel: "avanzado", q: "Tras una rebaja del 25 % pago 63 €. ¿Cuánto costaba antes?", sol: "Pago el 75 %: 63 : 0,75 = 84 €." },
    { nivel: "avanzado", q: "Un depósito se llena con 3 grifos iguales en 8 h. Si se estropea uno, ¿cuánto se tarda? ¿Y con 4 grifos?", sol: "Producto 24: con 2 grifos, 12 h; con 4 grifos, 6 h." },
    { nivel: "avanzado", q: "Una oferta dice «3 × 2» y otra «40 % de descuento». Si compras 3 productos iguales, ¿cuál es mejor?", sol: "3 × 2: pagas 2 de 3 = 66,7 % (descuento del 33,3 %). El 40 % es mejor." },
    { nivel: "avanzado", q: "En un plano a escala 1 : 200, una habitación mide 2,5 cm × 2 cm. ¿Cuál es su superficie real?", sol: "Medidas reales: 5 m × 4 m. Superficie: 20 m²." },
    { nivel: "avanzado", q: "Eratóstenes calculó que la distancia Siena-Alejandría era 1/50 de la vuelta a la Tierra. Si esa distancia es unos 800 km, ¿cuánto mide la circunferencia terrestre?", sol: "800 · 50 = 40 000 km." },
    { nivel: "avanzado", q: "Tres amigos compran un regalo de 72 €. Ana pone el doble que Luis y Marta el triple que Luis. ¿Cuánto pone cada uno?", sol: "Partes 1 + 2 + 3 = 6; cada parte 12 €. Luis 12 €, Ana 24 €, Marta 36 €." },
  ],
  quiz: [
    { q: "La razón entre 20 y 8, simplificada:", o: ["5/2", "2/5", "12", "8/20"], a: 0, e: "20/8 = 5/2." },
    { q: "En una proporción, el producto de extremos es…", o: ["mayor", "igual al de medios", "menor", "siempre 1"], a: 1, e: "Propiedad fundamental." },
    { q: "En 2/x = 6/9, x =", o: ["3", "27", "4", "6"], a: 0, e: "2 · 9 = 6x." },
    { q: "Precio y kilos de fruta son magnitudes…", o: ["directas", "inversas", "no proporcionales", "iguales"], a: 0, e: "Doble de kilos, doble de precio." },
    { q: "Velocidad y tiempo de un viaje son…", o: ["directas", "inversas", "no proporcionales", "iguales"], a: 1, e: "Doble de velocidad, mitad de tiempo." },
    { q: "En la proporcionalidad directa es constante…", o: ["la suma", "el producto", "el cociente", "la resta"], a: 2, e: "La constante de proporcionalidad." },
    { q: "En la proporcionalidad inversa es constante…", o: ["la suma", "el producto", "el cociente", "la resta"], a: 1, e: "x · y = k." },
    { q: "La gráfica de la proporcionalidad directa es…", o: ["una curva", "una recta por el origen", "un círculo", "horizontal"], a: 1, e: "y = k · x." },
    { q: "Si 2 entradas cuestan 15 €, 6 entradas cuestan…", o: ["30 €", "45 €", "90 €", "5 €"], a: 1, e: "Triple." },
    { q: "Si 4 pintores tardan 6 días, 8 pintores tardan…", o: ["12 días", "3 días", "6 días", "2 días"], a: 1, e: "Doble de pintores, mitad de días." },
    { q: "El 25 % es…", o: ["1/25", "1/4", "2,5", "1/2"], a: 1, e: "25/100." },
    { q: "El 10 % de 450 es…", o: ["4,5", "45", "450", "4 500"], a: 1, e: "450 : 10." },
    { q: "0,08 en porcentaje es…", o: ["0,08 %", "8 %", "80 %", "800 %"], a: 1, e: "· 100." },
    { q: "¿Qué porcentaje de 40 es 10?", o: ["10 %", "25 %", "40 %", "4 %"], a: 1, e: "10/40 = 1/4." },
    { q: "Un descuento del 20 % equivale a multiplicar por…", o: ["0,2", "1,2", "0,8", "20"], a: 2, e: "Pagas el 80 %." },
    { q: "Un aumento del 5 % equivale a multiplicar por…", o: ["0,05", "1,05", "1,5", "0,95"], a: 1, e: "1 + 0,05." },
    { q: "100 € suben un 10 % y luego bajan un 10 %. Quedan…", o: ["100 €", "99 €", "101 €", "90 €"], a: 1, e: "110 · 0,9." },
    { q: "El IVA general en España es del…", o: ["4 %", "10 %", "21 %", "50 %"], a: 2, e: "Tipo general." },
    { q: "Escala 1 : 1 000; 3 cm en el plano son…", o: ["3 m", "30 m", "300 m", "3 km"], a: 1, e: "3 000 cm." },
    { q: "Repartir 100 € proporcionalmente a 1 y 4 da…", o: ["50 y 50", "20 y 80", "25 y 75", "10 y 90"], a: 1, e: "5 partes de 20 €." },
  ],
  examen: [
    { q: "x en 4/6 = 10/x:", o: ["15", "12", "8", "20"], a: 0, e: "4x = 60." },
    { q: "5 cajas pesan 12 kg. 8 cajas pesan…", o: ["15 kg", "19,2 kg", "20 kg", "7,5 kg"], a: 1, e: "2,4 kg por caja." },
    { q: "3 máquinas hacen un trabajo en 12 h. 9 máquinas tardan…", o: ["36 h", "4 h", "6 h", "3 h"], a: 1, e: "Inversa." },
    { q: "El 35 % de 200 es…", o: ["35", "70", "135", "57"], a: 1, e: "200 · 0,35." },
    { q: "Un abrigo de 120 € rebajado un 25 % cuesta…", o: ["95 €", "90 €", "30 €", "100 €"], a: 1, e: "120 · 0,75." },
    { q: "Un precio pasa de 80 € a 92 €. Ha subido un…", o: ["12 %", "15 %", "20 %", "8 %"], a: 1, e: "12/80." },
    { q: "Si el 20 % de un número es 14, el número es…", o: ["70", "28", "2,8", "56"], a: 0, e: "14 : 0,2." },
    { q: "Escala 1 : 25 000; 8 cm en el mapa son…", o: ["2 km", "200 m", "20 km", "3,1 km"], a: 0, e: "200 000 cm." },
  ],
  feynman: ["Qué diferencia hay entre magnitudes directa e inversamente proporcionales", "Cómo se resuelve un problema con reducción a la unidad", "Qué significa un porcentaje y cómo se calcula", "Por qué subir y bajar el mismo porcentaje no deja el precio igual"],
  figura: {
    titulo: "Proporcionalidad y porcentajes en un vistazo",
    svg: resumen("Resumen del tema de proporcionalidad y porcentajes", [
      ["Proporción", "a/b = c/d ⇔ a · d = b · c", "var(--pen)"],
      ["Directa", "· n → · n · cociente constante · recta por (0, 0)", "var(--leaf)"],
      ["Inversa", "· n → : n · producto constante · curva", "var(--red)"],
      ["Porcentaje", "p % de C = C · p/100 · parte : total · 100", "var(--sun)"],
      ["Variación", "aumento · (1 + p/100) · descuento · (1 − p/100)", "var(--inf)"],
    ]),
  },
  video: vg("proV"),
  mapa: mapa("PROPORCIONALIDAD", "var(--leaf)", [
    ["Razón y proporción", "a/b = c/d · a · d = b · c", "var(--pen)"],
    ["Directa", "reducción a la unidad · regla de 3", "var(--leaf)"],
    ["Inversa", "producto constante", "var(--red)"],
    ["Porcentajes", "% de · aumentos · descuentos", "var(--sun)"],
  ], 250),
  glosario: [
    ["Razón", "Comparación de dos cantidades mediante su cociente."],
    ["Proporción", "Igualdad entre dos razones."],
    ["Extremos y medios", "En a/b = c/d, a y d son extremos; b y c, medios."],
    ["Magnitud", "Cualidad que se puede medir."],
    ["Proporcionalidad directa", "Al multiplicar una magnitud por n, la otra también se multiplica por n."],
    ["Proporcionalidad inversa", "Al multiplicar una magnitud por n, la otra se divide entre n."],
    ["Constante de proporcionalidad", "Cociente (directa) o producto (inversa) que no cambia."],
    ["Reducción a la unidad", "Método que calcula primero el valor correspondiente a 1."],
    ["Regla de tres", "Método para hallar un valor desconocido en una proporción."],
    ["Porcentaje", "Razón con denominador 100."],
    ["Índice de variación", "Número por el que se multiplica para aplicar un aumento o un descuento."],
    ["IVA", "Impuesto que se añade como porcentaje al precio de los productos."],
    ["Escala", "Razón entre una medida en un plano o mapa y la medida real."],
  ],
  situacion: {
    titulo: "Cazadores de ofertas",
    reto: "Vais a analizar folletos y webs de tiendas para descubrir qué ofertas son de verdad las mejores y explicarlo a otros alumnos.",
    pasos: [
      "Recoged al menos seis ofertas reales de distinto tipo: porcentaje de descuento, 3 × 2, segunda unidad al 50 %, precio por kilo…",
      "Calculad, para cada oferta, el precio por unidad y el porcentaje real de descuento.",
      "Comparad productos del mismo tipo en distintos formatos usando el precio por kilo o por litro (proporcionalidad directa).",
      "Ordenad las ofertas de mejor a peor y detectad alguna «trampa» (porcentajes que parecen mayores de lo que son).",
      "Preparad una guía breve con consejos para comprar mejor.",
    ],
    producto: "Una guía o infografía «Cazadores de ofertas» con los cálculos y las conclusiones.",
    evaluacion: ["Calcula porcentajes, aumentos y descuentos correctamente.", "Usa la proporcionalidad para comparar precios por unidad.", "Detecta y explica ofertas engañosas.", "Comunica las conclusiones de forma clara y útil."],
  },
  tarjetas: [
    ["Razón", "a/b: comparar dividiendo"], ["Proporción", "a/b = c/d ⇔ a · d = b · c"], ["Directa", "Más → más; cociente constante"],
    ["Inversa", "Más → menos; producto constante"], ["Reducción a la unidad", "Calcular cuánto corresponde a 1"], ["Gráfica directa", "Recta que pasa por (0, 0)"],
    ["p %", "p/100"], ["p % de C", "C · p : 100"], ["¿Qué % es?", "parte : total · 100"],
    ["Descuento p %", "· (1 − p/100)"], ["Aumento p %", "· (1 + p/100)"], ["Escala 1 : n", "1 cm del plano = n cm reales"],
  ],
  familias: ["En el súper, comparad el precio por kilo o por litro de dos marcas.", "Al ver una oferta, calculad juntos cuánto se ahorra de verdad.", "Adaptad una receta para más o menos personas.", "Medid una distancia en un mapa con escala y calculad la distancia real."],
  profesores: {
    saberes: "Sentido numérico y algebraico: razones y proporciones, proporcionalidad directa e inversa, porcentajes, aumentos y disminuciones porcentuales; resolución de problemas de consumo, escalas y repartos (RD 217/2022, Matemáticas 1º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Análisis de folletos de supermercado y tiques reales.", "Recrear el experimento de Eratóstenes con sombras en el patio.", "Cálculo de distancias reales en mapas topográficos.", "Hojas de cálculo con índice de variación para simular rebajas."],
  },
  fuentes: [RD, DECRET, { t: "Proyecto Descartes (INTEF): proporcionalidad", url: "https://proyectodescartes.org/" }, { t: "Agencia Tributaria: tipos de IVA", url: "https://sede.agenciatributaria.gob.es/" }],
  revisado: REV,
};
