// Matemáticas A 4º ESO · Proporcionalidad y porcentajes. Tema nivel libro (lote 2). Contenido y dibujos propios.
const { F, D, mapa, tabla, tx, lienzo, pasos, cajas, formula, ejes, comparar, barras } = require("./_eso4L2-mata");

const razon = comparar("Razón y proporción: tres a cuatro es igual que seis a ocho, y el producto cruzado coincide", [
  ["Razón", ["a / b", "3 chicas : 4 chicos", "= 0,75"], "var(--pen)"],
  ["Proporción", ["a / b = c / d", "3/4 = 6/8", "3 · 8 = 4 · 6"], "var(--leaf)"],
], "Comparar dos cantidades");

const directa = ejes("Proporcionalidad directa: los puntos del precio de las manzanas están en una recta que pasa por el origen", { x: [0, 5], y: [0, 10], paso: 1, pasoY: 2, marcasX: [1, 2, 3, 4, 5], marcasY: [2, 4, 6, 8, 10], ex: "kg", ey: "€", curvas: [{ f: (x) => 2 * x, c: "var(--pen)", t: "y = 2x", tx: 3.6, ty: 9.2 }], puntos: [[1, 2, "", "var(--red)"], [2, 4, "", "var(--red)"], [3, 6, "(3, 6)", "var(--red)", "e"], [4, 8, "", "var(--red)"]] });

const inversa = ejes("Proporcionalidad inversa: con más obreros se tardan menos días; los puntos forman una hipérbola", { x: [0, 8], y: [0, 12], paso: 1, pasoY: 2, marcasX: [2, 4, 6, 8], marcasY: [4, 8, 12], ex: "obreros", ey: "días", curvas: [{ f: (x) => 24 / x, de: 2, a: 8, c: "var(--red)", t: "x · y = 24", tx: 5.6, ty: 7.5 }], puntos: [[2, 12, "", "var(--pen)"], [3, 8, "", "var(--pen)"], [4, 6, "(4, 6)", "var(--pen)", "ne"], [6, 4, "", "var(--pen)"], [8, 3, "", "var(--pen)"]] });

const reglaTres = pasos("Regla de tres directa: 3 kilos cuestan 7,50 euros; 5 kilos cuestan x; x igual a 5 por 7,50 entre 3, 12,50 euros", ["3 kg → 7,50 €", "5 kg → x", "¿directa? más kg, más €: sí", "x = 5 · 7,50 / 3", "x = 12,50 €"], "Regla de tres directa");

const reglaInv = pasos("Regla de tres inversa: 4 grifos tardan 6 horas; 3 grifos tardan x; x igual a 4 por 6 entre 3, 8 horas", ["4 grifos → 6 h", "3 grifos → x", "¿inversa? menos grifos, más h", "x = 4 · 6 / 3", "x = 8 h"], "Regla de tres inversa");

const compuesta = cajas("Regla de tres compuesta: se analiza cada magnitud con la incógnita por separado", [
  ["Datos", ["5 máquinas · 8 h", "→ 400 piezas"]], ["Pregunta", ["3 máquinas · 10 h", "→ x piezas"]],
  ["Relaciones", ["máquinas: directa", "horas: directa"]], ["Cálculo", ["x = 400·3·10/(5·8)", "= 300 piezas"]],
], "Varias magnitudes a la vez");

const reparto = barras("Reparto directamente proporcional de 900 euros entre tres socios que aportan 2, 3 y 4 partes: 200, 300 y 400 euros", [["Ana (2)", 200, "var(--pen)"], ["Bea (3)", 300, "var(--leaf)"], ["Carlos (4)", 400, "var(--red)"]], { titulo: "900 € en 2 + 3 + 4 = 9 partes de 100 €", fmt: (v) => `${v} €` });

const repInv = comparar("Reparto inversamente proporcional: se reparte según los inversos, quien falta menos recibe más", [
  ["Faltas", ["Leo: 1", "Mía: 2", "Noa: 4"], "var(--muted)"],
  ["Inversos", ["1", "1/2", "1/4"], "var(--pen)"],
  ["Premio 140 €", ["80 €", "40 €", "20 €"], "var(--leaf)"],
], "Inversamente proporcional");

const porcentaje = lienzo("Porcentaje como parte de cien: 25 de cada 100 cuadros coloreados son el 25 por ciento", `
  ${[...Array(100)].map((_, k) => `<rect x="${20 + (k % 10) * 12}" y="${30 + Math.floor(k / 10) * 12}" width="11" height="11" rx="2" fill="${k < 25 ? "var(--red)" : "var(--pen)"}" fill-opacity="${k < 25 ? 0.9 : 0.18}"/>`).join("")}
  ${tx(80, 20, "25 de cada 100", { fs: 12, c: "var(--muted)" })}${tx(196, 70, "25 %", { fs: 26, c: "var(--red)" })}${tx(196, 100, "= 25/100", { fs: 13, w: 400 })}${tx(196, 122, "= 0,25", { fs: 13, w: 400 })}${tx(196, 144, "= 1/4", { fs: 13, w: 400 })}`);

const indice = comparar("Aumentos y disminuciones porcentuales con índice de variación: subir un 20 por ciento es multiplicar por 1,20 y bajar un 20 por ciento por 0,80", [
  ["Subir 20 %", ["× (1 + 0,20)", "× 1,20", "50 € → 60 €"], "var(--red)"],
  ["Bajar 20 %", ["× (1 − 0,20)", "× 0,80", "50 € → 40 €"], "var(--leaf)"],
], "Índice de variación");

const encadenados = lienzo("Porcentajes encadenados: subir un 10 por ciento y luego bajar un 10 por ciento deja 99 euros, no 100", `
  ${[["100 €", 100, "var(--pen)"], ["110 €", 110, "var(--red)"], ["99 €", 99, "var(--leaf)"]].map(([t, v, c], i) => `<rect x="${30 + i * 76}" y="${150 - v * 0.9}" width="50" height="${v * 0.9}" rx="6" fill="${c}" fill-opacity=".85"/>${tx(55 + i * 76, 144 - v * 0.9, t, { fs: 12.5, c })}`).join("")}
  <path d="M150 150 H30" stroke="var(--muted)" stroke-width="0"/>${tx(93, 168, "× 1,10", { fs: 11.5, c: "var(--red)" })}${tx(169, 168, "× 0,90", { fs: 11.5, c: "var(--leaf)" })}${tx(130, 24, "1,10 · 0,90 = 0,99 → baja un 1 %", { fs: 12, c: "var(--muted)" })}`);

const inicial = pasos("Calcular la cantidad inicial: si tras subir un 21 por ciento de IVA se pagan 72,60 euros, el precio sin IVA es 72,60 entre 1,21, 60 euros", ["final = inicial · índice", "72,60 = x · 1,21", "x = 72,60 / 1,21", "x = 60 € (sin IVA)"], "¿Cuánto costaba antes?");

const variacion = formula("Porcentaje de variación entre dos valores", "% = (F − I) / I · 100", ["F = final, I = inicial", "Ejemplo: de 80 € a 92 €", "(92 − 80) / 80 · 100 = 15 % de subida", "si sale negativo, es una bajada"], "var(--inf)");

const iva = cajas("El IVA en España: tipo general 21 por ciento, reducido 10, superreducido 4", [
  ["21 %", ["general", "ropa, móvil, ocio"], "var(--red)"], ["10 %", ["reducido", "restaurantes, transporte"], "var(--sun)"],
  ["4 %", ["superreducido", "pan, leche, libros"], "var(--leaf)"], ["Precio final", ["base · (1 + IVA)", "100 € · 1,21 = 121 €"], "var(--pen)"],
], "Tipos de IVA");

const escalas = lienzo("Escala de un mapa 1 a 50.000: un centímetro en el mapa son 50.000 centímetros, medio kilómetro, en la realidad", `
  <rect x="20" y="36" width="220" height="70" rx="10" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="2"/>
  <path d="M40 90 C 80 50, 140 100, 220 56" fill="none" stroke="var(--pen)" stroke-width="3"/><circle cx="40" cy="90" r="5" fill="var(--red)"/><circle cx="220" cy="56" r="5" fill="var(--red)"/>
  ${tx(130, 26, "Escala 1 : 50.000", { fs: 13, c: "var(--leaf)" })}
  <path d="M40 130 H120" stroke="var(--ink)" stroke-width="3"/><path d="M40 124 V136 M80 124 V136 M120 124 V136" stroke="var(--ink)" stroke-width="2"/>
  ${tx(80, 152, "2 cm en el mapa", { fs: 11.5, w: 400 })}${tx(190, 134, "= 100.000 cm", { fs: 12, c: "var(--red)" })}${tx(190, 152, "= 1 km real", { fs: 12, c: "var(--red)" })}`);


module.exports = {
  materia: "Matemáticas A",
  curso: "4-eso",
  titulo: "Proporcionalidad y porcentajes",
  minutos: 110,
  objetivos: [
    "Reconocer magnitudes directa e inversamente proporcionales y representarlas",
    "Resolver problemas con reglas de tres simples y compuestas",
    "Hacer repartos directa e inversamente proporcionales",
    "Calcular porcentajes, aumentos, disminuciones y porcentajes encadenados con el índice de variación",
    "Hallar la cantidad inicial y el porcentaje de variación",
    "Aplicar la proporcionalidad a escalas, mezclas, IVA y consumo responsable",
  ],
  claves: ["razón", "proporción", "constante de proporcionalidad", "regla de tres", "reparto proporcional", "porcentaje", "índice de variación", "IVA"],
  pregunta: {
    texto: "Una camiseta sube un 20 % y después tiene una rebaja del 20 %. ¿Vuelve a costar lo mismo que al principio?",
    respuesta: "No. Si costaba 50 €, tras subir cuesta 50 · 1,20 = 60 € y tras la rebaja 60 · 0,80 = <mark>48 €</mark>. El segundo porcentaje se aplica sobre una cantidad distinta. En total, 1,20 · 0,80 = 0,96: es una <b>bajada del 4 %</b>.",
  },
  lectura: {
    titulo: "Las trampas de los porcentajes",
    html: `<p>«¡Hasta un 70 % de descuento!», «La fruta ha subido un 15 %», «Un 3 % de TAE», «El 40 % de los jóvenes…». Cada día recibimos decenas de mensajes con porcentajes y proporciones. Son una herramienta poderosa porque permiten comparar cantidades de tamaños muy distintos: no es lo mismo que suspendan 5 alumnos en una clase de 20 que en un instituto de 800.</p><p>Pero también son fáciles de manipular. Un «hasta un 70 %» puede significar que solo un producto tiene esa rebaja. Un aumento del 50 % seguido de una bajada del 50 % no te devuelve al punto de partida: pierdes un 25 %. Y que algo «se duplique» puede ser poco si se pasa de 1 caso a 2.</p><p>Detrás de todo esto hay una idea muy sencilla: la <b>proporcionalidad</b>. Si sabes cuánto cuestan 3 kilos, sabes cuánto cuestan 5; si sabes cuántos días tardan 4 personas, puedes calcular cuánto tardarán 6. En este tema aprenderás a reconocer cuándo dos magnitudes son proporcionales, a calcular porcentajes como lo hacen bancos y tiendas, y a detectar cuándo un número intenta engañarte.</p>`,
  },
  bloques: [
    { html: `<h3>1.1 Razón y proporción</h3><p>Una <b>razón</b> es el cociente entre dos cantidades que se comparan: si en una clase hay 12 chicas y 16 chicos, la razón chicas/chicos es 12/16 = 3/4 = 0,75. Se lee «3 es a 4» y quiere decir que por cada 3 chicas hay 4 chicos.</p><p>Una <b>proporción</b> es una igualdad entre dos razones: 3/4 = 6/8. En toda proporción se cumple la <mark>propiedad fundamental</mark>: el producto de los extremos es igual al de los medios, 3 · 8 = 4 · 6. Esta propiedad permite calcular un término desconocido: si 3/4 = x/20, entonces 4x = 60 y x = 15. Las recetas de cocina, las mezclas de pintura o las maquetas se basan en mantener una razón constante.</p>`, svg: razon },
    { html: `<h3>1.2 Magnitudes directamente proporcionales</h3><p>Dos magnitudes son <b>directamente proporcionales</b> si al multiplicar una por un número, la otra queda multiplicada por el mismo número: el doble de kilos de manzanas cuesta el doble. En ese caso, el <b>cociente</b> entre los valores correspondientes es siempre el mismo: es la <b>constante de proporcionalidad</b> k = y/x.</p><p>Si el kilo cuesta 2 €, la relación es <mark>y = 2x</mark> y su gráfica es una <b>recta que pasa por el origen</b>. Ojo: no basta con que «al aumentar una, aumente la otra». La edad y la altura de una persona aumentan juntas, pero no son proporcionales: con el doble de edad no se mide el doble. Para comprobarlo, calcula los cocientes y mira si coinciden.</p>${tabla(["kg (x)", "1", "2", "3", "4"], [["€ (y)", "2", "4", "6", "8"], ["y/x", "2", "2", "2", "2"]])}`, svg: directa },
    { html: `<h3>1.3 Magnitudes inversamente proporcionales</h3><p>Dos magnitudes son <b>inversamente proporcionales</b> si al multiplicar una por un número, la otra queda <b>dividida</b> por ese número: el doble de obreros tarda la mitad de días (si todos trabajan al mismo ritmo). En este caso es el <b>producto</b> el que se mantiene constante: x · y = k.</p><p>Si una obra la hacen 2 obreros en 12 días, el trabajo total es 24 «días-obrero», y entonces 3 obreros tardan 8 días, 4 tardan 6, 6 tardan 4… La gráfica es una curva llamada <b>hipérbola</b>. Son inversas la velocidad y el tiempo de un trayecto, el número de personas y lo que toca a cada una en un reparto, o el caudal de un grifo y lo que tarda en llenar un depósito.</p>`, svg: inversa },
    { html: `<h3>1.4 Regla de tres simple directa</h3><p>La <b>regla de tres</b> es un método ordenado para resolver problemas de proporcionalidad con tres datos conocidos y uno desconocido. Primero se colocan los datos en dos filas, con la misma magnitud en cada columna. Después se decide si la relación es <b>directa o inversa</b>. Si es directa, se multiplica en cruz y se divide por el tercero.</p><p>Ejemplo: si 3 kg de naranjas cuestan 7,50 €, ¿cuánto cuestan 5 kg? Más kilos, más euros: directa. x = 5 · 7,50 / 3 = 12,50 €. Otra forma equivalente es la <b>reducción a la unidad</b>: 1 kg cuesta 7,50/3 = 2,50 €, así que 5 kg cuestan 12,50 €. Este segundo método es más intuitivo y es el que usan los supermercados al indicar el precio por kilo o por litro.</p>`, svg: reglaTres },
    { html: `<h3>1.5 Regla de tres simple inversa</h3><p>Cuando la relación es inversa, el planteamiento es el mismo pero el cálculo cambia: se multiplican los datos de la <b>misma fila</b> (que dan la constante) y se divide entre el tercero. Si 4 grifos llenan un depósito en 6 horas, ¿cuánto tardan 3 grifos? Menos grifos, más tiempo: inversa. x = 4 · 6 / 3 = 8 horas.</p><p>Antes de calcular, pregúntate siempre: «si una magnitud aumenta, ¿la otra aumenta o disminuye?». Y al terminar, comprueba si el resultado tiene sentido: con menos grifos <mark>debe salir más tiempo</mark>. Este control de coherencia detecta la mayoría de los errores en problemas de proporcionalidad.</p>`, svg: reglaInv, video: { id: "WzcLzSY9JLA", titulo: "Regla de 3 inversa: proporcionalidad inversa para principiantes", canal: "Daniel Carreón", vistas: 2073821, megusta: 0 } },
    { html: `<h3>1.6 Regla de tres compuesta</h3><p>En la <b>regla de tres compuesta</b> intervienen tres o más magnitudes. El método consiste en comparar <b>cada magnitud con la de la incógnita por separado</b>, suponiendo que las demás no cambian. Si 5 máquinas trabajando 8 horas fabrican 400 piezas, ¿cuántas fabrican 3 máquinas en 10 horas?</p><p>Más máquinas, más piezas: directa. Más horas, más piezas: directa. Entonces x = 400 · (3/5) · (10/8) = 300 piezas. Si alguna relación fuera inversa, su fracción se pondría al revés. Es habitual en problemas de producción, de consumo (personas, días, raciones) o de obras. Un consejo práctico: organiza los datos en una tabla y marca con «D» o «I» cada relación antes de operar.</p>`, svg: compuesta, video: { id: "oWDzbIp7x_M", titulo: "Regla de tres compuesta, ejemplo 1", canal: "Matemáticas profe Alex", vistas: 0, megusta: 0 } },
    { html: `<h3>2.1 Repartos directamente proporcionales</h3><p>Repartir una cantidad de forma <b>directamente proporcional</b> significa que quien aporta más (o trabaja más horas, o tiene más participaciones) recibe más. Se suman las partes, se divide la cantidad total entre esa suma para saber cuánto vale <b>una parte</b>, y se multiplica por lo de cada uno.</p><p>Ejemplo: tres socios aportan 2.000 €, 3.000 € y 4.000 € a un negocio y ganan 900 €. Las partes son 2, 3 y 4, que suman 9. Cada parte vale 900/9 = 100 €, así que reciben <mark>200 €, 300 € y 400 €</mark>. Comprobación: 200 + 300 + 400 = 900. Así se reparten los premios de una peña de lotería según lo que jugó cada uno o los gastos de un piso según los metros de cada habitación.</p>`, svg: reparto, video: { id: "1uAbIb-McLo", titulo: "Reparto proporcional, súper fácil", canal: "Daniel Carreón", vistas: 1659985, megusta: 0 } },
    { html: `<h3>2.2 Repartos inversamente proporcionales</h3><p>En un reparto <b>inversamente proporcional</b>, quien tiene un valor <b>menor</b> recibe <b>más</b>: por ejemplo, un premio de asistencia que se reparte según las faltas, o un descuento que favorece a quien vive más cerca. Se reparte de forma directamente proporcional a los <b>inversos</b> de los valores.</p><p>Leo, Mía y Noa tienen 1, 2 y 4 faltas y se reparten 140 €. Los inversos son 1, 1/2 y 1/4; con denominador común: 4/4, 2/4 y 1/4, es decir, partes 4, 2 y 1, que suman 7. Cada parte vale 140/7 = 20 €: Leo recibe 80 €, Mía 40 € y Noa 20 €. Fíjate en que quien tiene el doble de faltas recibe la mitad: la relación es inversa.</p>`, svg: repInv },
    { html: `<h3>3.1 El porcentaje: una proporción sobre 100</h3><p>Un <b>porcentaje</b> es una razón con denominador 100: el 25 % es 25/100 = 0,25 = 1/4. Para calcular el p % de una cantidad C se multiplica C por p/100: el 25 % de 80 es 80 · 0,25 = 20. A ese 0,25 se le llama <b>tanto por uno</b>.</p><p>Hay tres preguntas típicas. ¿Cuánto es el 15 % de 60? → 60 · 0,15 = 9. ¿Qué porcentaje es 9 de 60? → 9/60 · 100 = 15 %. ¿De qué cantidad es 9 el 15 %? → 9/0,15 = 60. Las tres son la misma proporción, <mark>parte = total · p/100</mark>, despejando cada vez un dato distinto. Algunos porcentajes se calculan de cabeza: el 50 % es la mitad, el 25 % la cuarta parte, el 10 % se obtiene moviendo la coma y el 1 % es dividir entre 100.</p>`, svg: porcentaje },
    { html: `<h3>3.2 Aumentos y disminuciones: el índice de variación</h3><p>Para <b>aumentar</b> una cantidad un p %, en lugar de calcular el porcentaje y sumarlo, se multiplica directamente por el <b>índice de variación</b> 1 + p/100. Para <b>disminuirla</b>, se multiplica por 1 − p/100. Así, subir un 20 % es multiplicar por 1,20 y bajar un 20 % es multiplicar por 0,80.</p><p>Ejemplo: un abrigo de 85 € rebajado un 30 % cuesta 85 · 0,70 = 59,50 €. Un sueldo de 1.400 € que sube un 3 % pasa a 1.400 · 1,03 = 1.442 €. El índice ahorra pasos y, sobre todo, permite <mark>encadenar</mark> variaciones y calcular hacia atrás. Si el índice es mayor que 1, hay aumento; si es menor que 1, disminución.</p>`, svg: indice },
    { html: `<h3>3.3 Porcentajes encadenados</h3><p>Cuando una cantidad sufre varias variaciones seguidas, el porcentaje de cada una se aplica sobre la cantidad que queda tras la anterior. Por eso <b>los porcentajes no se suman</b>: se multiplican los índices. Subir un 10 % y después bajar un 10 % da 1,10 · 0,90 = 0,99, es decir, una bajada del 1 %.</p><p>Un ejemplo real: un producto sube un 5 % en enero y otro 8 % en junio. El índice total es 1,05 · 1,08 = 1,134: ha subido un <mark>13,4 %</mark>, no un 13 %. Con descuentos encadenados («20 % + 10 % adicional») ocurre lo mismo: 0,80 · 0,90 = 0,72, un descuento total del 28 %, no del 30 %. Es una pregunta clásica en exámenes y en tiendas.</p>`, svg: encadenados },
    { html: `<h3>3.4 Calcular la cantidad inicial</h3><p>A menudo conocemos el resultado final y queremos saber el valor de partida: el precio sin IVA, el sueldo antes de una subida o el precio antes de la rebaja. Como final = inicial · índice, basta con <b>dividir</b>: <mark>inicial = final / índice</mark>.</p><p>Si una factura con un 21 % de IVA es de 72,60 €, la base sin IVA es 72,60 / 1,21 = 60 €. Si tras una rebaja del 25 % un móvil cuesta 225 €, antes costaba 225 / 0,75 = 300 €. El error típico es restar el porcentaje al precio final (72,60 − 21 % = 57,35 €), que da un resultado incorrecto porque el 21 % se calculó sobre la base, no sobre el total.</p>`, svg: inicial },
    { html: `<h3>3.5 El porcentaje de variación</h3><p>Para saber <b>cuánto ha cambiado</b> una cantidad en porcentaje se compara la diferencia con el valor <b>inicial</b>: % = (final − inicial) / inicial · 100. Si un abono de transporte pasa de 80 € a 92 €, la subida es 12/80 = 0,15, un 15 %. Si el resultado es negativo, se trata de una bajada.</p><p>Hay que fijarse siempre en <b>respecto a qué</b> se calcula. Pasar de 80 a 92 es subir un 15 %, pero volver de 92 a 80 es bajar un 13 %. También conviene distinguir entre <b>puntos porcentuales</b> y porcentaje: si el paro pasa del 10 % al 12 %, sube 2 puntos porcentuales, pero un 20 % en términos relativos. Los medios de comunicación confunden a menudo estas dos ideas.</p>`, svg: variacion },
    { html: `<h3>3.6 El IVA y las facturas</h3><p>El <b>IVA</b> (impuesto sobre el valor añadido) es un porcentaje que se suma al precio de casi todo lo que compramos. En España hay tres tipos: el <b>general</b> del 21 % (ropa, electrónica, ocio), el <b>reducido</b> del 10 % (hostelería, transporte de viajeros) y el <b>superreducido</b> del 4 % (pan, leche, libros, medicamentos). Los tipos pueden cambiar por ley, así que conviene comprobar los vigentes.</p><p>En una factura aparece la <b>base imponible</b>, el IVA y el total: base · 1,21 = total. En los tickets de las tiendas los precios ya llevan el IVA incluido. Cuando una empresa o un autónomo da un presupuesto, a veces lo da «sin IVA», así que hay que añadirlo para conocer el coste real. Revisar una factura de la luz o del teléfono es un buen ejercicio de porcentajes.</p>`, svg: iva },
    { html: `<h3>3.7 Escalas y mezclas</h3><p>La proporcionalidad también aparece en los <b>mapas y planos</b>. Una escala 1 : 50.000 significa que 1 cm del mapa equivale a 50.000 cm (500 m) en la realidad. Para pasar del mapa a la realidad se multiplica por 50.000; para pasar de la realidad al mapa, se divide. Dos ciudades a 3,4 cm en ese mapa están a 170.000 cm = 1,7 km.</p><p>En las <b>mezclas</b> (zumos, aleaciones, pinturas, medicamentos) las proporciones se expresan en porcentajes. Un refresco con un 10 % de azúcar contiene 33 g de azúcar en una lata de 330 g. Leer la composición en porcentaje de las etiquetas permite comparar productos de tamaños distintos y tomar decisiones de consumo más saludables. Por ejemplo, si un yogur de 125 g tiene 15 g de azúcar y otro de 500 g tiene 50 g, el primero tiene un 12 % de azúcar y el segundo un 10 %: el envase grande es, proporcionalmente, menos dulce.</p>`, svg: escalas },
  ],
  ejemplos: [
    { enunciado: "Un coche consume 6,5 L cada 100 km. ¿Cuánto consume en un viaje de 340 km?", pasos: ["Distancia y consumo son directamente proporcionales.", "100 km → 6,5 L; 340 km → x.", "x = 340 · 6,5 / 100 = 22,1 L."], resultado: "22,1 litros." },
    { enunciado: "Con 15 grifos se llena una piscina en 8 horas. ¿Cuántos grifos hacen falta para llenarla en 6 horas?", pasos: ["Menos horas exige más grifos: inversa.", "Producto constante: 15 · 8 = 120.", "x = 120 / 6 = 20 grifos."], resultado: "20 grifos." },
    { enunciado: "Para alimentar a 12 caballos durante 20 días se necesitan 1.800 kg de pienso. ¿Cuántos kilos hacen falta para 8 caballos durante 30 días?", pasos: ["Caballos y pienso: directa. Días y pienso: directa.", "x = 1.800 · (8/12) · (30/20).", "x = 1.800 · 0,666… · 1,5 = 1.800 kg."], resultado: "1.800 kg (menos caballos, pero más días)." },
    { enunciado: "Un abuelo reparte 2.400 € entre sus nietos de forma directamente proporcional a sus edades: 8, 12 y 20 años.", pasos: ["Suma de partes: 8 + 12 + 20 = 40.", "Valor de una parte: 2.400 / 40 = 60 €.", "Reciben 8 · 60 = 480 €, 12 · 60 = 720 € y 20 · 60 = 1.200 €."], resultado: "480 €, 720 € y 1.200 € (suman 2.400 €)." },
    { enunciado: "Un portátil cuesta 800 €. Sube un 5 % y luego tiene una rebaja del 15 %. ¿Cuál es el precio final y el porcentaje total de variación?", pasos: ["Índice total: 1,05 · 0,85 = 0,8925.", "Precio final: 800 · 0,8925 = 714 €.", "Variación: 0,8925 − 1 = −0,1075."], resultado: "714 €, una bajada total del 10,75 %." },
    { enunciado: "En una factura figura un total de 181,50 € con el 21 % de IVA incluido. ¿Cuál es la base y cuánto es el IVA?", pasos: ["Base = total / índice = 181,50 / 1,21.", "Base = 150 €.", "IVA = 181,50 − 150 = 31,50 € (que es el 21 % de 150)."], resultado: "Base 150 €, IVA 31,50 €." },
  ],
  errores: [
    "Pensar que dos magnitudes son proporcionales solo porque crecen a la vez (edad y altura).",
    "Resolver como directa una relación inversa: con menos obreros no se tarda menos.",
    "Sumar porcentajes encadenados: +10 % y −10 % no dejan el precio igual.",
    "Calcular la cantidad inicial restando el porcentaje al final en lugar de dividir por el índice.",
    "Calcular el porcentaje de variación respecto al valor final en vez de al inicial.",
    "Confundir puntos porcentuales con porcentaje: del 10 % al 12 % son 2 puntos, pero un 20 % más.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Calcula x en la proporción 4/7 = x/21 y en 5/x = 15/12.", sol: "4/7 = x/21 → 7x = 84 → x = 12. 5/x = 15/12 → 15x = 60 → x = 4." },
    { nivel: "básico", q: "¿Son directamente proporcionales? a) Litros de gasolina y precio. b) Edad y peso. c) Lado de un cuadrado y perímetro.", sol: "a) Sí (precio por litro constante). b) No (no hay cociente constante). c) Sí: P = 4 · lado." },
    { nivel: "básico", q: "Si 4 cuadernos cuestan 6 €, ¿cuánto cuestan 10?", sol: "Directa: un cuaderno cuesta 6/4 = 1,50 €; 10 cuestan 15 €." },
    { nivel: "básico", q: "Un tren a 120 km/h tarda 3 h. ¿Cuánto tarda a 90 km/h?", sol: "Inversa: 120 · 3 = 360 km; 360/90 = 4 h." },
    { nivel: "básico", q: "Calcula: el 30 % de 250, el 7 % de 1.200 y el 150 % de 40.", sol: "250 · 0,30 = 75; 1.200 · 0,07 = 84; 40 · 1,5 = 60." },
    { nivel: "básico", q: "¿Qué porcentaje representan 18 alumnos de una clase de 24?", sol: "18/24 · 100 = 75 %." },
    { nivel: "básico", q: "Escribe el índice de variación: subir 12 %, bajar 35 %, subir 100 %, bajar 4 %.", sol: "1,12; 0,65; 2; 0,96." },
    { nivel: "básico", q: "Unas zapatillas de 70 € tienen un 25 % de descuento. ¿Cuánto cuestan?", sol: "70 · 0,75 = 52,50 €." },
    { nivel: "básico", q: "Reparte 600 € de forma directamente proporcional a 1, 2 y 3.", sol: "Partes: 6. Una parte = 100 €. Reciben 100 €, 200 € y 300 €." },
    { nivel: "básico", q: "En un mapa a escala 1 : 200.000, dos pueblos están a 4,5 cm. ¿Cuál es la distancia real?", sol: "4,5 · 200.000 = 900.000 cm = 9 km." },
    { nivel: "básico", q: "Un producto cuesta 40 € sin IVA. ¿Cuánto cuesta con un IVA del 21 %?", sol: "40 · 1,21 = 48,40 €." },
    { nivel: "básico", q: "Si el 20 % de una cantidad es 36, ¿cuál es la cantidad?", sol: "36 / 0,20 = 180." },
    { nivel: "medio", q: "Una receta para 4 personas lleva 300 g de arroz y 1,2 L de caldo. ¿Cuánto hace falta para 10 personas?", sol: "Factor 10/4 = 2,5. Arroz: 750 g. Caldo: 3 L." },
    { nivel: "medio", q: "6 personas pintan una casa en 10 días. ¿Cuántos días tardarían 4 personas? ¿Y 15?", sol: "Constante 6 · 10 = 60 días-persona. 4 personas: 15 días. 15 personas: 4 días." },
    { nivel: "medio", q: "10 impresoras imprimen 4.000 páginas en 2 horas. ¿Cuántas páginas imprimen 6 impresoras en 5 horas?", sol: "Ambas directas: x = 4.000 · (6/10) · (5/2) = 6.000 páginas." },
    { nivel: "medio", q: "Para hacer una zanja, 8 obreros trabajando 6 h diarias tardan 15 días. ¿Cuántos días tardarán 10 obreros trabajando 8 h diarias?", sol: "Obreros e días: inversa; horas y días: inversa. x = 15 · (8/10) · (6/8) = 9 días." },
    { nivel: "medio", q: "Tres amigos juegan a la lotería 5 €, 8 € y 12 € y ganan 1.500 €. ¿Cuánto le toca a cada uno?", sol: "Total jugado 25 €. Cada euro jugado: 1.500/25 = 60 €. Reciben 300 €, 480 € y 720 €." },
    { nivel: "medio", q: "Reparte 1.300 € de forma inversamente proporcional a 2, 3 y 4.", sol: "Inversos 1/2, 1/3, 1/4 → con denominador 12: 6, 4 y 3 partes (13). Una parte = 100 €. Reciben 600 €, 400 € y 300 €." },
    { nivel: "medio", q: "Una chaqueta rebajada un 30 % cuesta 63 €. ¿Cuánto costaba antes?", sol: "63 / 0,70 = 90 €." },
    { nivel: "medio", q: "Un piso pasó de 180.000 € a 207.000 €. ¿Qué porcentaje subió?", sol: "(207.000 − 180.000)/180.000 · 100 = 27.000/180.000 · 100 = 15 %." },
    { nivel: "medio", q: "Una acción sube un 25 % un día y baja un 20 % al siguiente. ¿Cuál es la variación total?", sol: "1,25 · 0,80 = 1: vuelve exactamente al valor inicial (variación 0 %)." },
    { nivel: "medio", q: "Un ticket de restaurante es de 49,50 € con un 10 % de IVA. ¿Cuál es la base y el IVA?", sol: "Base = 49,50 / 1,10 = 45 €. IVA = 4,50 €." },
    { nivel: "medio", q: "Una lata de refresco de 330 mL contiene 35 g de azúcar. ¿Qué porcentaje de azúcar tiene (supón 1 mL = 1 g)? ¿Cuánto azúcar habría en una botella de 2 L?", sol: "35/330 · 100 ≈ 10,6 %. En 2.000 g: 2.000 · 35/330 ≈ 212 g de azúcar." },
    { nivel: "medio", q: "El paro de una ciudad pasó del 15 % al 12 %. ¿Cuántos puntos bajó? ¿Qué porcentaje bajó?", sol: "Bajó 3 puntos porcentuales. En términos relativos: 3/15 = 0,20, una bajada del 20 %." },
    { nivel: "medio", q: "En un plano a escala 1 : 50, una habitación mide 8 cm por 6,4 cm. ¿Cuál es su superficie real?", sol: "Medidas reales: 8 · 50 = 400 cm = 4 m; 6,4 · 50 = 320 cm = 3,2 m. Superficie: 4 · 3,2 = 12,8 m²." },
    { nivel: "avanzado", q: "Un artículo tiene tres descuentos encadenados del 20 %, 10 % y 5 %. ¿Equivale a un descuento del 35 %? Calcula el descuento real.", sol: "0,80 · 0,90 · 0,95 = 0,684. Descuento real: 1 − 0,684 = 0,316, es decir, un 31,6 %, menos que el 35 %." },
    { nivel: "avanzado", q: "¿Qué porcentaje hay que subir un precio que ha bajado un 20 % para que vuelva al valor inicial?", sol: "Tras bajar queda 0,80 · P. Para volver: 0,80 · x = 1 → x = 1,25. Hay que subir un 25 %." },
    { nivel: "avanzado", q: "La población de un pueblo creció un 4 % anual durante 3 años y ahora tiene 5.624 habitantes. ¿Cuántos tenía al principio?", sol: "Índice total 1,04³ = 1,124864. Inicial = 5.624 / 1,124864 ≈ 5.000 habitantes." },
    { nivel: "avanzado", q: "Tres pintores tardan 12, 6 y 4 horas en pintar solos una valla. Cobran 360 € en total por pintarla juntos, repartiéndolo según el trabajo hecho. ¿Cuánto cobra cada uno?", sol: "En 1 h pintan 1/12, 1/6 y 1/4 de valla: partes 1, 2 y 3 (con denominador 12). Juntos, en 1 h pintan 6/12 = 1/2: tardan 2 h. El trabajo de cada uno es proporcional a 1, 2 y 3: cobran 60 €, 120 € y 180 €." },
    { nivel: "avanzado", q: "Una tienda sube los precios un 25 % y después anuncia un «20 % de descuento». ¿Gana o pierde el cliente respecto al precio original?", sol: "1,25 · 0,80 = 1: el precio final es exactamente el original. El «descuento» no ahorra nada." },
    { nivel: "avanzado", q: "En una aleación de 250 g hay un 72 % de cobre y el resto de cinc. ¿Cuánto cobre hay que añadir para que el cobre sea el 80 %?", sol: "Cinc: 28 % de 250 = 70 g (no cambia). Si el cinc es el 20 % del total, el total será 70/0,20 = 350 g. Cobre a añadir: 350 − 250 = 100 g." },
    { nivel: "avanzado", q: "Un vehículo eléctrico consume 15 kWh cada 100 km y el kWh cuesta 0,18 €. Uno de gasolina consume 6 L cada 100 km a 1,65 €/L. ¿Cuánto se ahorra en 12.000 km con el eléctrico y en qué porcentaje?", sol: "Eléctrico: 120 · 15 · 0,18 = 324 €. Gasolina: 120 · 6 · 1,65 = 1.188 €. Ahorro: 864 €, que es 864/1.188 ≈ 72,7 % menos." },
    { nivel: "avanzado", q: "Un 40 % de los alumnos de un instituto son de 1.º ciclo y de ellos un 25 % usa la biblioteca. Del resto, la usa un 50 %. ¿Qué porcentaje del total usa la biblioteca?", sol: "1.º ciclo: 0,40 · 0,25 = 0,10. Resto: 0,60 · 0,50 = 0,30. Total: 0,40 = 40 %." },
    { nivel: "avanzado", q: "Si x e y son inversamente proporcionales y cuando x = 6 vale y = 15, escribe la fórmula y completa: x = 3, 9, 30, 45.", sol: "x · y = 90, y = 90/x. Para x = 3: 30; x = 9: 10; x = 30: 3; x = 45: 2." },
  ],
  quiz: [
    { q: "Si 2/5 = x/30, x vale…", o: ["10", "12", "15", "75"], a: 1, e: "5x = 60, x = 12." },
    { q: "¿Qué pareja es directamente proporcional?", o: ["Edad y altura", "Kilos y precio a precio fijo", "Velocidad y tiempo", "Obreros y días"], a: 1, e: "El precio por kilo es constante." },
    { q: "En la proporcionalidad inversa se mantiene constante…", o: ["la suma", "el cociente", "el producto", "la diferencia"], a: 2, e: "x · y = k." },
    { q: "La gráfica de una proporcionalidad directa es…", o: ["una hipérbola", "una recta por el origen", "una parábola", "una recta horizontal"], a: 1, e: "y = kx." },
    { q: "Si 5 bolis cuestan 4 €, 15 bolis cuestan…", o: ["8 €", "12 €", "10 €", "20 €"], a: 1, e: "Triple de bolis, triple de precio." },
    { q: "Si 3 personas tardan 8 días, 6 personas tardan…", o: ["16 días", "4 días", "11 días", "2 días"], a: 1, e: "Doble de personas, mitad de días." },
    { q: "Reparto directo de 500 € entre 2 y 3 partes:", o: ["250 y 250", "200 y 300", "100 y 400", "300 y 200"], a: 1, e: "Una parte vale 100 €." },
    { q: "En un reparto inversamente proporcional, quien tiene el valor mayor recibe…", o: ["más", "menos", "lo mismo", "nada"], a: 1, e: "Se reparte según los inversos." },
    { q: "El 15 % de 200 es…", o: ["15", "30", "20", "185"], a: 1, e: "200 · 0,15 = 30." },
    { q: "Rebajar un 35 % equivale a multiplicar por…", o: ["0,35", "1,35", "0,65", "0,035"], a: 2, e: "1 − 0,35 = 0,65." },
    { q: "Subir un 8 % equivale a multiplicar por…", o: ["0,08", "1,8", "1,08", "0,92"], a: 2, e: "1 + 0,08." },
    { q: "Subir un 10 % y luego bajar un 10 %…", o: ["deja igual", "baja un 1 %", "sube un 1 %", "baja un 10 %"], a: 1, e: "1,1 · 0,9 = 0,99." },
    { q: "Con el 21 % de IVA, un producto cuesta 121 €. Sin IVA cuesta…", o: ["95,59 €", "100 €", "99 €", "100,21 €"], a: 1, e: "121 / 1,21 = 100." },
    { q: "De 50 € a 60 € es una subida del…", o: ["10 %", "16,7 %", "20 %", "60 %"], a: 2, e: "10/50 = 0,20." },
    { q: "De 60 € a 50 € es una bajada del…", o: ["20 %", "16,7 %", "10 %", "50 %"], a: 1, e: "10/60 ≈ 0,167." },
    { q: "Descuentos del 20 % y luego del 10 % equivalen a…", o: ["30 %", "28 %", "2 %", "32 %"], a: 1, e: "0,8 · 0,9 = 0,72: descuento del 28 %." },
    { q: "Escala 1 : 100.000. 3 cm en el mapa son…", o: ["300 m", "3 km", "30 km", "300 km"], a: 1, e: "300.000 cm = 3 km." },
    { q: "Si el 30 % de una cantidad es 45, la cantidad es…", o: ["13,5", "150", "135", "75"], a: 1, e: "45 / 0,3 = 150." },
    { q: "El paro pasa del 8 % al 10 %. Sube…", o: ["2 %", "2 puntos y un 25 %", "10 puntos", "un 2 % y 25 puntos"], a: 1, e: "2 puntos porcentuales; en relativo 2/8 = 25 %." },
    { q: "10 máquinas hacen 100 piezas en 5 h. 5 máquinas en 10 h hacen…", o: ["50", "100", "200", "25"], a: 1, e: "Mitad de máquinas y doble de horas: igual." },
  ],
  examen: [
    { q: "La constante de 3 kg → 4,50 € es…", o: ["1,50 €/kg", "0,67 €/kg", "13,5", "7,5"], a: 0, e: "4,50 / 3." },
    { q: "Velocidad y tiempo para recorrer una distancia fija son…", o: ["directas", "inversas", "no proporcionales", "iguales"], a: 1, e: "v · t = d constante." },
    { q: "Precio 200 € con un 15 % de descuento:", o: ["185 €", "170 €", "230 €", "30 €"], a: 1, e: "200 · 0,85." },
    { q: "Índice de una subida del 4 % seguida de otra del 5 %:", o: ["1,09", "1,092", "1,9", "0,91"], a: 1, e: "1,04 · 1,05 = 1,092." },
    { q: "Tras rebajar un 40 %, un abrigo cuesta 90 €. Antes costaba…", o: ["126 €", "150 €", "130 €", "225 €"], a: 1, e: "90 / 0,60." },
    { q: "Reparto inverso de 90 € entre 1 y 2:", o: ["30 y 60", "60 y 30", "45 y 45", "80 y 10"], a: 1, e: "Inversos 1 y 1/2: partes 2 y 1." },
    { q: "¿Qué porcentaje es 7 de 28?", o: ["4 %", "25 %", "7 %", "21 %"], a: 1, e: "7/28 = 0,25." },
    { q: "El IVA del pan en España es el…", o: ["21 %", "10 %", "4 %", "0 %"], a: 2, e: "Tipo superreducido." },
  ],
  feynman: ["Cómo distinguir una proporcionalidad directa de una inversa", "Cómo se hace un reparto proporcional", "Qué es el índice de variación y por qué ahorra pasos", "Por qué los porcentajes encadenados no se suman"],
  figura: {
    titulo: "Proporcionalidad y porcentajes en un vistazo",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Resumen: directa, inversa, porcentaje, índice de variación y cantidad inicial">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["Directa", "y / x = k · regla de tres: x = b · c / a", "var(--pen)"], ["Inversa", "x · y = k · regla de tres: x = a · b / c", "var(--red)"], ["Porcentaje", "parte = total · p/100", "var(--leaf)"], ["Variación", "final = inicial · (1 ± p/100) · encadenar: × índices", "var(--inf)"]].map(([n, f, c], i) => `<rect x="20" y="${16 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="36" y="${43 + i * 50}" font-size="16" font-weight="700" fill="${c}" ${D}>${n}</text><text x="180" y="${43 + i * 50}" font-size="15" fill="var(--ink)" ${F}>${f}</text>`).join("")}
    </svg>`,
  },
  video: { id: "jjyJ4p3E4KM", titulo: "Cómo calcular descuentos: ofertas, súper fácil", canal: "Daniel Carreón", vistas: 2632612, megusta: 0, busqueda: "calcular descuentos porcentajes" },
  mapa: mapa("PROPORCIONALIDAD", "var(--leaf)", [
    ["Directa", "y/x = k · recta", "var(--pen)"],
    ["Inversa", "x·y = k · hipérbola", "var(--red)"],
    ["Repartos", "directos e inversos", "var(--sun)"],
    ["Porcentajes", "índice · encadenados", "var(--inf)"],
  ], 230),
  glosario: [
    ["Razón", "Cociente entre dos cantidades que se comparan."],
    ["Proporción", "Igualdad entre dos razones: a/b = c/d."],
    ["Constante de proporcionalidad", "Valor fijo del cociente (directa) o del producto (inversa)."],
    ["Proporcionalidad directa", "Si una magnitud se multiplica por un número, la otra también."],
    ["Proporcionalidad inversa", "Si una magnitud se multiplica por un número, la otra se divide por él."],
    ["Regla de tres", "Método para hallar un dato desconocido a partir de tres conocidos."],
    ["Reducción a la unidad", "Calcular primero el valor para una unidad."],
    ["Reparto proporcional", "División de una cantidad en partes proporcionales a unos valores."],
    ["Porcentaje", "Razón con denominador 100."],
    ["Tanto por uno", "Porcentaje dividido entre 100: 15 % = 0,15."],
    ["Índice de variación", "Número por el que se multiplica en un aumento (1 + p/100) o disminución (1 − p/100)."],
    ["Porcentajes encadenados", "Variaciones sucesivas; se multiplican sus índices."],
    ["Punto porcentual", "Diferencia entre dos porcentajes."],
    ["IVA", "Impuesto sobre el valor añadido que se suma al precio."],
    ["Base imponible", "Precio sin impuestos sobre el que se calcula el IVA."],
    ["Escala", "Razón entre una medida en un mapa o plano y la medida real."],
  ],
  situacion: {
    titulo: "Cazadores de ofertas: ¿de verdad es un chollo?",
    reto: "Durante el Black Friday y las rebajas, las tiendas anuncian descuentos espectaculares. Vuestro equipo va a investigar ofertas reales y decidir con números cuáles son buenas, cuáles engañan y por qué, para elaborar una guía de compra responsable para el resto del instituto.",
    pasos: [
      "Recoged 8 anuncios reales (folletos, webs o tiendas del barrio) con descuentos, «2x1», «3x2» o financiación.",
      "Calculad el precio final de cada oferta y el porcentaje real de descuento, incluidos descuentos encadenados.",
      "Comparad el precio por unidad (kg, L o unidad) para detectar envases engañosos.",
      "Buscad el precio que tenía el producto semanas antes y calculad el porcentaje de variación real.",
      "Clasificad las ofertas en «chollo», «normal» o «trampa» justificándolo con cálculos.",
      "Redactad la guía con consejos y ejemplos resueltos.",
    ],
    producto: "Una guía ilustrada de compra inteligente (cartel o presentación) con 8 ofertas analizadas.",
    evaluacion: ["Calcula correctamente porcentajes, índices y precios unitarios.", "Detecta y explica errores o engaños habituales con porcentajes.", "Presenta la información con claridad y argumentos matemáticos.", "Muestra actitud crítica y responsable ante el consumo."],
  },
  tarjetas: [
    ["Propiedad fundamental de las proporciones", "a/b = c/d ⇔ a · d = b · c."],
    ["Directa", "Cociente constante. Gráfica: recta por el origen."],
    ["Inversa", "Producto constante. Gráfica: hipérbola."],
    ["Regla de tres directa", "x = (dato · dato en cruz) / tercero."],
    ["Regla de tres inversa", "x = (producto de la misma fila) / tercero."],
    ["Regla de tres compuesta", "Comparar cada magnitud con la incógnita por separado."],
    ["Reparto directo", "Total / suma de partes = valor de una parte."],
    ["Reparto inverso", "Se reparte según los inversos."],
    ["Índice de variación", "Aumento: 1 + p/100. Disminución: 1 − p/100."],
    ["Encadenar porcentajes", "Se multiplican los índices; no se suman."],
    ["Cantidad inicial", "final / índice."],
    ["% de variación", "(final − inicial) / inicial · 100."],
  ],
  familias: ["Comparad en el súper el precio por kilo o por litro de dos envases del mismo producto.", "Revisad juntos una factura (luz, móvil) y localizad la base, el IVA y el total.", "Calculad con un folleto de ofertas el precio final de un «segunda unidad al 50 %».", "Repasad dos minutos al día las tarjetas del paso 6."],
  profesores: {
    saberes: "Sentido numérico y algebraico: proporcionalidad directa e inversa, repartos, porcentajes, índices de variación y porcentajes encadenados en contextos de consumo (RD 217/2022, Matemáticas A 4º ESO; en Cataluña, Decret 175/2022).",
    ideas: ["Análisis de folletos reales de ofertas (situación de aprendizaje).", "Hoja de cálculo con índices de variación para encadenar subidas y bajadas.", "Noticias con porcentajes: detectar confusiones entre puntos y porcentaje.", "Mapas topográficos del entorno para trabajar escalas."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Agencia Tributaria: tipos impositivos del IVA", url: "https://sede.agenciatributaria.gob.es/" },
    { t: "Finanzas para todos (Banco de España y CNMV)", url: "https://www.finanzasparatodos.es/" },
  ],
  revisado: "2026-11-13",
};
