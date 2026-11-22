// Matemáticas 3º de Primaria: el dinero. Dibujos propios en SVG (monedas y billetes esquemáticos, sin copiar diseños reales).
const P = require("./_pri3a");
const { svg, t, AZ, RO, VE, NA, SO, MO } = P;

// Moneda esquemática: círculo con su valor. Las de céntimos en color cobre o dorado; las de euro, bicolores.
const moneda = (x, y, r, txt, tipo = "oro") => {
  const c = tipo === "cobre" ? NA : SO;
  return tipo === "euro"
    ? `<circle cx="${x}" cy="${y}" r="${r}" fill="${SO}" fill-opacity=".6" stroke="var(--ink)" stroke-width="1.6"/><circle cx="${x}" cy="${y}" r="${r * 0.68}" fill="var(--muted)" fill-opacity=".35" stroke="var(--ink)" stroke-width="1"/>${t(x, y + r * 0.25, txt, { s: r * 0.6, d: true })}`
    : `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" fill-opacity=".55" stroke="var(--ink)" stroke-width="1.6"/>${t(x, y + r * 0.3, txt, { s: r * 0.75, d: true })}`;
};
// Billete esquemático con su valor.
const billete = (x, y, w, h, v, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2"/><rect x="${x + 6}" y="${y + 6}" width="${w * 0.35}" height="${h - 12}" rx="3" fill="${c}" fill-opacity=".35"/>${t(x + w * 0.7, y + h / 2 + 6, `${v} €`, { s: h * 0.42, d: true, c })}`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "El dinero",
  minutos: 50,
  objetivos: ["Conocer las monedas y los billetes del euro", "Saber que 1 euro son 100 céntimos y hacer cambios sencillos", "Leer y escribir precios con euros y céntimos", "Sumar precios, calcular las vueltas y hacer compras con un presupuesto"],
  claves: ["dinero", "euro (€)", "céntimo (cent)", "moneda", "billete", "precio", "pagar", "vueltas o cambio", "ahorrar", "presupuesto", "caro", "barato"],
  pregunta: ["Quieres comprar un cómic de 3 € y un bolígrafo de 75 céntimos. Tienes un billete de 5 €. ¿Te llega? ¿Cuánto te devuelven?", "El total es 3 € + 75 cent = <b>3,75 €</b>. ¡Sí te llega! Y te devuelven 5 € − 3,75 € = <mark>1,25 €</mark>. Para resolverlo hay que saber que <b>1 euro = 100 céntimos</b> y sumar y restar con dinero."],
  bloques: [
    ["Para qué sirve el dinero", `<p>Hace mucho tiempo la gente hacía <b>trueque</b>: cambiaba cosas por otras cosas (unas gallinas por un saco de trigo). Pero era complicado: ¿cuántas gallinas vale una vaca?</p><p>Por eso se inventó el <b>dinero</b>: algo que todos aceptan para <mark>comprar y vender</mark>. Primero fueron conchas, sal o metales; después, monedas y billetes. Hoy también pagamos con <b>tarjeta</b> o con el móvil, aunque el dinero sigue siendo el mismo.</p><p>En España y en muchos países de Europa la moneda es el <b>euro</b>, que se escribe <b>€</b>.</p>`,
      svg("Del trueque al dinero: gallinas por trigo y después monedas", `<circle cx="46" cy="58" r="16" fill="${NA}" fill-opacity=".4" stroke="${NA}" stroke-width="2"/><path d="M46 42 l 4 -8 l 4 8" fill="${RO}"/>${t(46, 94, "gallina", { s: 11 })}${t(96, 62, "⇄", { s: 22, c: "var(--muted)" })}<path d="M126 74 q 10 -40 20 0 Z" fill="${SO}" fill-opacity=".5" stroke="${SO}" stroke-width="2"/>${t(136, 94, "trigo", { s: 11 })}${t(186, 62, "→", { s: 22, c: "var(--muted)" })}${moneda(226, 58, 18, "1 €", "euro")}${t(226, 94, "dinero", { s: 11 })}${t(130, 140, "trueque → dinero", { s: 15, d: true, c: AZ })}`),
      P.V("dinB")],
    ["Las monedas", `<p>Hay <b>8 monedas</b> de euro:</p><ul><li>De <b>céntimos</b>: 1, 2, 5, 10, 20 y 50 céntimos. Las de 1, 2 y 5 son de color cobre; las de 10, 20 y 50, doradas.</li><li>De <b>euros</b>: 1 € y 2 €. Son de <mark>dos colores</mark>: plateado y dorado.</li></ul><p>El céntimo se escribe <b>cent</b> o <b>c</b>. Todas las monedas tienen una cara común con un mapa de Europa, y la otra cara es distinta en cada país: las españolas llevan, por ejemplo, al rey o la catedral de Santiago.</p>`,
      svg("Las ocho monedas de euro: 1, 2, 5, 10, 20 y 50 céntimos, 1 euro y 2 euros", `${[[1, 11, "cobre"], [2, 12, "cobre"], [5, 13.5, "cobre"], [10, 13, "oro"], [20, 14.5, "oro"], [50, 16, "oro"]].map(([v, r, tp], i) => `${moneda(26 + i * 42, 52, r, String(v), tp)}`).join("")}${t(130, 86, "céntimos", { s: 12, c: NA })}${moneda(96, 124, 17, "1 €", "euro")}${moneda(164, 124, 19, "2 €", "euro")}${t(130, 166, "euros", { s: 12, c: AZ })}`)],
    ["Los billetes", `<p>Hay <b>7 billetes</b> de euro: 5, 10, 20, 50, 100, 200 y 500 €. (El de 500 ya no se fabrica, aunque todavía vale.)</p><p>Cada billete tiene un <b>color</b> y un <b>tamaño</b> distintos: cuanto más valor, <mark>más grande</mark> es. Así también los pueden distinguir las personas con problemas de vista. El de 5 € es gris, el de 10 € rojo, el de 20 € azul y el de 50 € naranja.</p><p>Los billetes tienen marcas de <b>seguridad</b> (marcas de agua, hilos, relieves) para que no se puedan falsificar.</p>`,
      svg("Billetes de 5, 10, 20 y 50 euros, cada uno de un color y más grande", `${[[5, "var(--muted)", 92], [10, RO, 100], [20, AZ, 108], [50, NA, 116]].map(([v, c, w], i) => billete(14 + (i % 2) * 124, 20 + Math.floor(i / 2) * 64, w, 50 + (i % 2) * 4, v, c)).join("")}${t(130, 162, "más valor → más grande", { s: 13, c: VE })}`)],
    ["1 euro = 100 céntimos", `<p>La relación más importante es esta:</p><p style="text-align:center"><mark>1 € = 100 céntimos</mark></p><p>Por eso podemos <b>cambiar</b> una moneda de 1 € por:</p><ul><li>2 monedas de 50 cent (50 + 50 = 100).</li><li>5 monedas de 20 cent.</li><li>10 monedas de 10 cent.</li><li>O mezclas: 50 + 20 + 20 + 10 = 100.</li></ul><p>Y 2 € = 200 céntimos, 5 € = 500 céntimos… Cambiar dinero es como descomponer números: ¡hay muchas formas de formar la misma cantidad!</p>`,
      svg("Una moneda de un euro equivale a dos de cincuenta céntimos o a cinco de veinte", `${moneda(36, 56, 20, "1 €", "euro")}${t(72, 62, "=", { s: 20 })}${moneda(104, 56, 16, "50", "oro")}${moneda(140, 56, 16, "50", "oro")}${moneda(36, 122, 20, "1 €", "euro")}${t(72, 128, "=", { s: 20 })}${[0, 1, 2, 3, 4].map((i) => moneda(100 + i * 32, 122, 14, "20", "oro")).join("")}${t(196, 62, "2 × 50", { s: 12, c: VE })}${t(130, 168, "1 € = 100 céntimos", { s: 14, d: true, c: AZ })}`)],
    ["Leer y escribir precios", `<p>Los precios se escriben con los <b>euros</b>, una <b>coma</b> y los <b>céntimos</b> (siempre con dos cifras):</p>${P.tb(["precio", "se lee"], [["3,50 €", "tres euros con cincuenta céntimos"], ["12,05 €", "doce euros con cinco céntimos"], ["0,80 €", "ochenta céntimos"], ["7 € o 7,00 €", "siete euros"]])}<p>Fíjate en el 12,05 €: los cinco céntimos se escriben <mark>05</mark>, con un cero delante. No es lo mismo 12,05 € que 12,50 €.</p><p>Para comparar precios, mira primero los euros y, si son iguales, los céntimos: 4,90 € &lt; 5,10 €.</p>`,
      svg("Etiqueta de precio 3,50 euros: tres euros y cincuenta céntimos", `<path d="M40 40 H 190 L 220 80 L 190 120 H 40 Z" fill="${SO}" fill-opacity=".25" stroke="${SO}" stroke-width="2.5"/><circle cx="200" cy="80" r="5" fill="var(--paper)" stroke="${SO}" stroke-width="2"/>${t(116, 94, "3,50 €", { s: 34, d: true, c: RO })}<path d="M62 104 H 80" stroke="${AZ}" stroke-width="2"/><path d="M92 104 H 128" stroke="${VE}" stroke-width="2"/>${t(66, 146, "euros", { s: 12, c: AZ })}${t(122, 146, "céntimos", { s: 12, c: VE })}`)],
    ["Sumar precios", `<p>Cuando compramos varias cosas, sumamos los precios. Hay dos formas fáciles:</p><ol><li><b>Euros con euros y céntimos con céntimos</b>: 2,30 € + 1,40 € → 2 + 1 = 3 € y 30 + 40 = 70 cent → <mark>3,70 €</mark>.</li><li><b>En columna</b>, con las comas una debajo de otra, como con los números.</li></ol><p>Si los céntimos pasan de 100, ¡forman un euro! 0,60 € + 0,70 € = 130 cent = <b>1,30 €</b>.</p><p>Para ir rápido en la tienda, puedes <b>redondear</b>: 1,95 € es casi 2 €.</p>`,
      svg("Suma de dos precios: 2,30 euros más 1,40 euros igual a 3,70 euros", `${t(160, 50, "2,30 €", { s: 22, d: true, a: "end" })}${t(160, 82, "1,40 €", { s: 22, d: true, a: "end" })}${t(74, 82, "+", { s: 22, c: AZ })}<path d="M70 94 H 166" stroke="var(--ink)" stroke-width="2.2"/>${t(160, 124, "3,70 €", { s: 22, d: true, a: "end", c: VE })}${t(130, 160, "comas una debajo de otra", { s: 12, c: RO })}`)],
    ["Pagar y calcular las vueltas", `<p>Cuando pagamos con un billete o una moneda de más valor que el precio, nos devuelven las <b>vueltas</b> o el <b>cambio</b>.</p><p><b>Vueltas = lo que pago − el precio</b></p><p>Ejemplo: un helado cuesta 1,60 € y pago con 2 €. Vueltas: 2 € − 1,60 € = <mark>0,40 €</mark>.</p><p>Truco del dependiente: <b>contar hacia arriba</b>. Desde 1,60 €, con 40 céntimos llego a 2 €. Así se calculan las vueltas sin restar con comas.</p>`,
      svg("Pago 2 euros por un helado de 1,60: me devuelven 40 céntimos", `<path d="M40 70 L 56 124 L 72 70 Z" fill="${NA}" fill-opacity=".4" stroke="var(--ink)" stroke-width="1.6"/><circle cx="56" cy="60" r="16" fill="${RO}" fill-opacity=".4" stroke="var(--ink)" stroke-width="1.6"/>${t(56, 146, "1,60 €", { s: 13, d: true })}${moneda(126, 82, 20, "2 €", "euro")}${t(126, 124, "pago", { s: 11 })}${moneda(196, 70, 14, "20", "oro")}${moneda(224, 92, 14, "20", "oro")}${t(210, 128, "vueltas: 0,40 €", { s: 11, c: VE })}${t(130, 168, "2 − 1,60 = 0,40 €", { s: 14, d: true, c: VE })}`)],
    ["Comprar con un presupuesto", `<p>Un <b>presupuesto</b> es el dinero que tenemos para gastar. Antes de comprar, comprobamos si nos llega.</p><p><b>Problema:</b> tienes 10 € para la merienda de la fiesta. Quieres comprar zumos (3,50 €), patatas (2,25 €) y galletas (3,75 €). ¿Te llega?</p><ul><li>Total: 3,50 + 2,25 + 3,75 = <b>9,50 €</b>.</li><li>Como 9,50 &lt; 10, ¡sí te llega! Y te sobran 0,50 €.</li></ul><p>Si no llega, hay que <mark>elegir</mark>: quitar algo o buscar algo más barato. ¡Así funciona también la economía de una familia!</p>`,
      P.filas("Compra con un presupuesto de 10 euros", [["Zumos", "3,50 €", AZ], ["Patatas", "2,25 €", NA], ["Galletas", "3,75 €", SO], ["Total", "9,50 € ✔ sobran 0,50 €", VE]])],
    ["Ahorrar y gastar con cabeza", `<p><b>Ahorrar</b> es guardar una parte del dinero para el futuro. Si guardas 2 € cada semana, en 10 semanas tendrás <mark>20 €</mark>.</p><p>Consejos para gastar bien:</p><ul><li>Distingue lo que <b>necesitas</b> (material del cole) de lo que <b>te apetece</b> (un capricho).</li><li><b>Compara precios</b>: el mismo producto puede ser más caro o más barato en tiendas distintas.</li><li>Mira el precio antes de pedir algo.</li></ul><p>Recuerda que las cosas cuestan dinero y que el dinero cuesta trabajo ganarlo.</p>`,
      svg("Una hucha que recibe dos euros cada semana: en diez semanas, veinte euros", `<ellipse cx="96" cy="96" rx="58" ry="40" fill="${MO}" fill-opacity=".3" stroke="${MO}" stroke-width="2.5"/><path d="M80 58 H 112" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/><circle cx="140" cy="86" r="3" fill="var(--ink)"/><path d="M60 132 v 14 M132 132 v 14" stroke="${MO}" stroke-width="6" stroke-linecap="round"/>${moneda(96, 34, 14, "2 €", "euro")}${t(206, 80, "2 € × 10", { s: 13, c: AZ })}${t(206, 104, "= 20 €", { s: 16, d: true, c: VE })}`)],
  ],
  figura: ["El dinero", P.columnas("Resumen: monedas, billetes, 1 euro son 100 céntimos y vueltas", [["1, 2, 5, 10, 20, 50 c", "MONEDAS", ["1 € y 2 €", "8 monedas"], SO], ["5, 10, 20, 50…", "BILLETES", ["más valor,", "más grande"], AZ], ["euros , céntimos", "1 € = 100 c", ["3,50 €", "0,80 €"], VE], ["pago − precio", "VUELTAS", ["2 − 1,60", "= 0,40 €"], RO]])],
  video: P.V("dinV", true),
  ejemplos: [
    ["Forma 1,35 € con el menor número de monedas.", ["1 € con una moneda de 1 €.", "35 cent = 20 + 10 + 5."], "4 monedas: 1 € + 20 c + 10 c + 5 c."],
    ["Un cuaderno cuesta 2,40 € y un rotulador 0,85 €. ¿Cuánto cuestan juntos?", ["Euros: 2 + 0 = 2.", "Céntimos: 40 + 85 = 125 = 1 € y 25 c.", "2 € + 1,25 € = 3,25 €."], "3,25 €"],
    ["Pago una pelota de 7,30 € con un billete de 10 €. ¿Cuánto me devuelven?", ["Cuento hacia arriba: de 7,30 a 8 € → 0,70 €.", "De 8 € a 10 € → 2 €.", "0,70 + 2 = 2,70 €."], "Me devuelven 2,70 €."],
  ],
  errores: [
    "Pensar que 1 € son 10 céntimos (son 100).",
    "Escribir 3,5 € como «tres euros con cinco céntimos» (son cincuenta).",
    "Olvidar el cero en precios como 4,05 €.",
    "Sumar euros con céntimos sin cuidado: 1 € + 50 c no es 51 €.",
    "No comprobar si el presupuesto llega antes de comprar.",
  ],
  ejercicios: [
    ["¿Cuántas monedas distintas de euro hay? ¿Cuántos billetes?", "8 monedas y 7 billetes."],
    ["¿Cuántos céntimos son 1 €? ¿Y 3 €?", "100 y 300 céntimos."],
    ["Escribe tres formas de formar 1 € con monedas.", "Por ejemplo: 2 × 50 c; 5 × 20 c; 50 + 20 + 20 + 10 c."],
    ["¿Cómo se lee 8,05 €? ¿Y 8,50 €?", "Ocho euros con cinco céntimos; ocho euros con cincuenta céntimos."],
    ["Escribe con cifras: «quince euros con veinte céntimos».", "15,20 €."],
    ["Ordena de menor a mayor: 2,90 €; 3,10 €; 2,09 €.", "2,09 € &lt; 2,90 € &lt; 3,10 €."],
    ["Calcula 1,50 € + 2,30 €.", "3,80 €."],
    ["Compro algo de 3,60 € y pago con 5 €. ¿Cuánto me devuelven?", "1,40 €."],
    ["Tengo 6 € y quiero comprar un libro de 4,75 € y un lápiz de 1,50 €. ¿Me llega?", "No: cuestan 6,25 €, me faltan 0,25 €."],
    ["Si ahorro 3 € a la semana, ¿cuánto tendré en 8 semanas?", "24 €."],
  ],
  quiz: [
    ["La moneda de España es el…", ["euro", "dólar", "peso"], "Se escribe €."],
    ["1 € =", ["100 céntimos", "10 céntimos", "1.000 céntimos"], "Cien céntimos."],
    ["¿Qué moneda NO existe?", ["25 céntimos", "20 céntimos", "50 céntimos"], "Hay 1, 2, 5, 10, 20 y 50."],
    ["¿Qué billete es más grande?", ["50 €", "10 €", "5 €"], "Más valor, más tamaño."],
    ["2 monedas de 50 c forman…", ["1 €", "50 c", "2 €"], "50 + 50 = 100 c."],
    ["4,05 € se lee…", ["cuatro euros con cinco céntimos", "cuatro euros con cincuenta", "cuarenta y cinco euros"], "El 0 de delante."],
    ["1,20 € + 2,50 € =", ["3,70 €", "3,25 €", "37 €"], "3 € y 70 c."],
    ["Pago 1 € por algo de 0,65 €. Me devuelven…", ["0,35 €", "0,45 €", "1,65 €"], "65 + 35 = 100."],
    ["¿Qué es más caro?", ["5,10 €", "4,99 €", "5,01 €"], "Mismos euros: miro céntimos."],
    ["Guardar dinero para el futuro es…", ["ahorrar", "gastar", "cambiar"], "Hucha."],
  ],
  examen: [
    ["¿Cuántas monedas de 20 c son 1 €?", ["5", "4", "10"], "5 × 20 = 100."],
    ["3,40 € + 1,80 € =", ["5,20 €", "4,20 €", "5,12 €"], "120 c = 1,20 €."],
    ["Pago 10 € por algo de 6,50 €. Me devuelven…", ["3,50 €", "4,50 €", "3,05 €"], "6,50 → 7 → 10."],
    ["Tengo 5 €. ¿Puedo comprar dos bocadillos de 2,60 €?", ["No, cuestan 5,20 €", "Sí, sobran 0,20 €", "Sí, justo"], "2,60 × 2."],
  ],
  feynman: ["Por qué se inventó el dinero", "Qué monedas y billetes de euro hay", "Cuántos céntimos tiene un euro y cómo se cambia", "Cómo se leen y se escriben los precios", "Cómo se calculan las vueltas"],
  mapa: ["EL DINERO", [["Monedas", "1 c a 2 €: ocho monedas", SO], ["Billetes", "5 € a 500 €: siete billetes", AZ], ["1 € = 100 c", "precios: 3,50 €", VE], ["Comprar", "sumar, vueltas y ahorrar", RO]]],
  tarjetas: [
    ["Euro (€)", "La moneda de España y de muchos países de Europa."],
    ["Céntimo", "1 € = 100 céntimos."],
    ["Monedas", "1, 2, 5, 10, 20 y 50 céntimos, 1 € y 2 €."],
    ["Billetes", "5, 10, 20, 50, 100, 200 y 500 €."],
    ["Precio", "Lo que cuesta algo: euros, coma y dos cifras de céntimos."],
    ["Vueltas o cambio", "Lo que pago menos el precio."],
    ["Presupuesto", "El dinero que tengo para gastar."],
    ["Ahorrar", "Guardar una parte del dinero para el futuro."],
  ],
  familias: ["Dejad que paguen ellos en una tienda pequeña y calculen las vueltas.", "Jugad a las tiendas en casa con monedas reales o de juguete.", "Mirad los precios del súper y comparad cuál es más barato.", "Proponed una hucha con un objetivo: ¿cuántas semanas hacen falta?"],
  saberes: "Medida y sentido numérico: el sistema monetario del euro; monedas y billetes; equivalencia entre euro y céntimo; lectura y escritura de precios; composición de cantidades; suma de precios; cálculo de vueltas; presupuesto y consumo responsable",
  ideas: ["Tienda de clase con etiquetas de precios y monedas de juguete.", "Folleto de supermercado para hacer la compra con un presupuesto.", "Reto de las monedas: formar una cantidad con el menor número de monedas."],
});

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer las caras de las monedas de euro", "Reconocer las medidas de seguridad de los billetes", "Pagar con el menor número de monedas y billetes", "Conocer la historia del dinero y comparar precios"],
  lectura: { titulo: "La hucha de cerdito", html: `<p>Desde que cumplió siete años, Marcos guardaba en una hucha con forma de cerdito todas las monedas que le daban: las de los cumpleaños, las del ratoncito Pérez y las que encontraba en el sofá.</p><p>Un día de primavera decidió que ya era hora de saber cuánto tenía. Quería comprarse un balón de baloncesto que costaba 18 €.</p><p>Con mucho cuidado, quitó el tapón de goma de la tripa del cerdito y vació todo sobre la alfombra. ¡Qué ruido! Había monedas por todas partes.</p><p>Su hermana Paula le ayudó a separarlas por montones: las pequeñas de color cobre, las doradas y las de euro, que tenían dos colores.</p><p>—Primero cuenta las de más valor —le aconsejó Paula—. Así es más fácil.</p><p>Había 4 monedas de 2 € (8 €), 5 de 1 € (5 €), 6 de 50 céntimos (3 €) y un montón de monedas pequeñas que, juntas, sumaban 2,35 €.</p><p>Marcos sumó en su libreta: 8 + 5 + 3 + 2,35 = 18,35 €.</p><p>—¡Me llega! ¡Y me sobran 35 céntimos!</p><p>Paula cogió una moneda de 1 € y le dio la vuelta.</p><p>—Mira, esta tiene a un rey. Y esta otra, que es igual, tiene un búho. Es de Grecia.</p><p>Marcos la miró sorprendido. Su dinero había viajado más que él.</p>` },
  tras: {
    "Las monedas": [
      ["Las dos caras del euro", `<p>Las monedas de euro tienen dos caras diferentes:</p><ul><li>La <mark>cara común</mark> es igual en todos los países que usan el euro. Muestra el <b>valor</b> de la moneda y un mapa o un dibujo de Europa.</li><li>La <mark>cara nacional</mark> la diseña cada país con sus propios dibujos.</li></ul><p>Las monedas españolas tienen tres diseños:</p><ul><li>1, 2 y 5 céntimos: la <b>catedral de Santiago de Compostela</b>.</li><li>10, 20 y 50 céntimos: el escritor <b>Miguel de Cervantes</b>, autor de <i>Don Quijote</i>.</li><li>1 y 2 euros: el <b>rey de España</b>.</li></ul><p>Otros países tienen dibujos muy curiosos: Grecia tiene una <b>lechuza</b> en la moneda de 1 €; Italia, el <i>Hombre de Vitruvio</i> de Leonardo da Vinci; Irlanda, un <b>arpa</b>; Francia, un <b>árbol</b>.</p><p>Lo importante es que <b>todas valen lo mismo</b> en cualquier país del euro, sea cual sea su cara nacional. Una moneda con una lechuza griega sirve para comprar en una tienda de Sevilla.</p><p><b>Actividad</b>: busca en tu monedero o en la hucha de casa monedas con caras de otros países. ¿Cuántas encuentras? Haz una colección: los coleccionistas de monedas se llaman <b>numismáticos</b>.</p>`,
        L6.filas("Cara española", [["1, 2, 5 cent", "catedral", cNA], ["10, 20, 50 cent", "Cervantes", cMO], ["1 y 2 €", "el rey", cAZ], ["todas", "valen igual", cVE]])],
    ],
    "Los billetes": [
      ["Billetes seguros: toque, mire, gire", `<p>Los billetes de euro tienen <mark>medidas de seguridad</mark> para que nadie pueda falsificarlos fácilmente. El Banco de España recomienda comprobarlos con tres pasos: <b>toque, mire y gire</b>.</p><ul><li><b>Toque</b>: el papel de los billetes es especial, firme y crujiente, no como el papel normal. Además, algunas partes tienen <b>relieve</b>: si pasas el dedo, notas las letras en relieve.</li><li><b>Mire</b>: pon el billete a contraluz, delante de una ventana. Aparece una <b>marca de agua</b>, una imagen que no se ve cuando el billete está sobre la mesa. También se ve un <b>hilo de seguridad</b>, una línea oscura que atraviesa el billete.</li><li><b>Gire</b>: inclina el billete. La banda plateada (el <b>holograma</b>) cambia de imagen, y en los billetes nuevos el número grande cambia de color, de verde esmeralda a azul oscuro.</li></ul><p>En la marca de agua y en el holograma de los billetes nuevos aparece el retrato de <b>Europa</b>, un personaje de la mitología griega que dio nombre a nuestro continente.</p><p>Falsificar dinero es un <b>delito</b> muy grave. Si alguna vez tienes dudas sobre un billete, enséñaselo a un adulto.</p>`,
        H6.flujo("Comprobar", ["toque|relieve", "mire|contraluz", "gire|holograma", "¡es|bueno!"], cAZ), ["fLfC3y06Am0", "El método toque, mire, gire", "Banco de España", 58818]],
    ],
    "Pagar y calcular las vueltas": [
      ["Pagar con pocas monedas", `<p>Cuando pagamos, conviene usar el <mark>menor número posible</mark> de monedas y billetes. Así el monedero pesa menos y es más fácil para el vendedor.</p><p><b>El truco</b>: empezar siempre por la moneda o el billete <b>de más valor</b> que no se pase del precio, y seguir con los siguientes.</p><p><b>Ejemplo</b>: pagar <b>8,75 €</b> justos.</p><ul><li>Un billete de 5 € → quedan 3,75 €.</li><li>Una moneda de 2 € → quedan 1,75 €.</li><li>Una moneda de 1 € → quedan 0,75 €.</li><li>Una de 50 céntimos → quedan 0,25 €.</li><li>Una de 20 céntimos → quedan 0,05 €.</li><li>Una de 5 céntimos → ¡justo!</li></ul><p>Total: <b>6 piezas</b> (1 billete y 5 monedas).</p><p>A veces, dar un poco <b>más</b> hace que las vueltas sean más cómodas. Si algo cuesta 3,20 € y das un billete de 5 € y una moneda de 20 céntimos (5,20 €), te devuelven justo <b>una moneda de 2 €</b>, en lugar de muchas monedas pequeñas. Los dependientes agradecen mucho este gesto, porque así no se quedan sin cambio en la caja.</p><p><b>Reto</b>: ¿cuál es el menor número de monedas para pagar 0,99 €? (50 + 20 + 20 + 5 + 2 + 2 = 6 monedas).</p>`,
        L6.filas("8,75 €", [["billete", "5 €", cAZ], ["monedas", "2 € y 1 €", cNA], ["céntimos", "50 + 20 + 5", cMO], ["total", "6 piezas", cVE]])],
    ],
  },
  final: [
    ["La historia del dinero", `<p>El dinero no siempre ha sido como hoy. Su historia es larga y curiosa:</p><ul><li><b>El trueque</b>: al principio, las personas cambiaban unas cosas por otras.</li><li><b>Objetos valiosos</b>: después se usaron como dinero cosas que todos apreciaban: <b>conchas</b> (sobre todo unas pequeñas llamadas cauris), cabezas de ganado, granos de cacao o <b>sal</b>. ¡De la palabra «sal» viene la palabra <b>salario</b>, el dinero que se cobra por trabajar!</li><li><b>Las primeras monedas</b>: hace unos 2.600 años, en un reino llamado <b>Lidia</b> (en la actual Turquía), se fabricaron las primeras monedas de metal, con un sello que garantizaba su valor.</li><li><b>Los billetes</b>: los primeros billetes de papel se usaron en <b>China</b>, hace más de mil años. Era mucho más cómodo llevar papel que sacos de monedas.</li><li><b>La peseta</b>: en España, la moneda fue la <b>peseta</b> durante más de cien años.</li><li><b>El euro</b>: en <b>2002</b>, España y otros países europeos empezaron a usar monedas y billetes de euro.</li><li><b>El dinero digital</b>: hoy pagamos con tarjetas y móviles, y el dinero viaja de un banco a otro sin tocarlo.</li></ul><p>Pregunta en casa: ¿alguien de tu familia recuerda las pesetas?</p>`,
      H6.flujo("Historia", ["trueque|", "conchas|y sal", "monedas|Lidia", "billetes|y euro"], cNA), ["ipS1hKAwXCU", "La historia del dinero", "Banco de México", 595096]],
    ["¿Qué es más barato? Comparar precios", `<p>Comprar bien no es solo pagar: también es <mark>comparar precios</mark> para no gastar de más.</p><p><b>Mismo producto, distintas tiendas</b>: un cuaderno cuesta 2,50 € en una papelería y 1,90 € en otra. En la segunda es más barato: ahorras 2,50 − 1,90 = <b>0,60 €</b>.</p><p><b>Ofertas</b>: a veces las tiendas ponen ofertas como «3 por 2» (te llevas 3 y pagas 2). Si un zumo cuesta 1 €, con la oferta pagas 2 € por 3 zumos. ¡Pero solo es buena idea si de verdad necesitas los 3 zumos!</p><p><b>Paquete o sueltos</b>: un paquete de 4 yogures cuesta 2 €; cada yogur suelto cuesta 0,60 €. ¿Qué conviene?</p><ul><li>4 yogures sueltos: 4 × 0,60 = 2,40 €.</li><li>El paquete: 2 €.</li><li>El paquete sale más barato: ahorras 0,40 €.</li></ul><p><b>Consejos del buen consumidor</b>:</p><ul><li>Haz una <b>lista</b> antes de ir a comprar y compra solo lo que necesitas.</li><li>Mira bien el <b>precio</b> y la <b>cantidad</b>.</li><li>No te dejes llevar por los anuncios o los envases bonitos.</li><li>Guarda el <b>tique</b> por si hay que devolver algo.</li></ul>`,
      H6.dos("Yogures", ["SUELTOS", ["0,60 € cada uno", "4 × 0,60", "= 2,40 €"], cRO], ["PAQUETE", ["4 yogures", "2 €", "¡más barato!"], cVE])],
  ],
  ejemplos: [
    ["Paga 4,30 € con el menor número de piezas.", ["2 € + 2 € = 4 €.", "20 cent + 10 cent = 30 cent."], "4 monedas: 2 €, 2 €, 20 cent y 10 cent."],
    ["Un lápiz cuesta 0,40 € suelto y 1 € el paquete de 3. ¿Qué es más barato?", ["3 sueltos: 3 × 0,40 = 1,20 €.", "El paquete: 1 €."], "El paquete; ahorras 0,20 €."],
  ],
  errores: ["Pensar que una moneda de euro de otro país no vale en España: todas valen lo mismo.", "Pensar que una oferta siempre ahorra dinero: solo si necesitas lo que compras."],
  ejercicios: [
    ["b", "¿Qué aparece en las monedas españolas de 10, 20 y 50 céntimos?", "Cervantes."],
    ["b", "¿Cuáles son los tres pasos para comprobar un billete?", "Toque, mire y gire."],
    ["b", "¿De qué palabra viene «salario»?", "De sal."],
    ["b", "¿En qué año empezamos a usar el euro en España?", "En 2002."],
    ["b", "¿Cómo se llaman los coleccionistas de monedas?", "Numismáticos."],
    ["m", "Paga 3,60 € con el menor número de monedas.", "2 €, 1 €, 50 cent, 10 cent: 4 monedas."],
    ["m", "¿Qué se ve al poner un billete a contraluz?", "La marca de agua y el hilo de seguridad."],
    ["m", "Un libro cuesta 12 € en una tienda y 9,50 € en otra. ¿Cuánto ahorras?", "2,50 €."],
    ["m", "Con la oferta «3 por 2», ¿cuánto pagas por 3 helados de 1,50 €?", "3 €."],
    ["m", "¿Dónde se fabricaron las primeras monedas?", "En Lidia, en la actual Turquía."],
    ["a", "¿Cuántas monedas como mínimo necesitas para pagar 1,88 €?", "7 monedas: 1 €, 50, 20, 10, 5, 2 y 1 céntimos."],
    ["a", "Compara: 6 galletas sueltas a 0,25 € o un paquete de 6 por 1,20 €.", "El paquete; ahorras 0,30 €."],
    ["a", "Haz una lista de la compra con presupuesto de 10 € y compara precios.", "Respuesta abierta."],
    ["a", "En la lectura, ¿cuánto dinero le sobra a Marcos tras comprar el balón?", "0,35 €."],
  ],
  quiz: [
    ["La cara común de las monedas es…", ["igual en todos los países", "distinta en cada país", "solo española"], "Caras."],
    ["Al girar un billete cambia el…", ["holograma", "papel", "tamaño"], "Seguridad."],
    ["Para pagar con pocas monedas, empieza por la…", ["de más valor", "de menos valor", "más bonita"], "Pagar."],
    ["Los primeros billetes fueron de…", ["China", "España", "Francia"], "Historia."],
    ["«3 por 2» significa…", ["te llevas 3 y pagas 2", "pagas 3 y te llevas 2", "cada uno vale 2 €"], "Comparar."],
  ],
  examen: [
    ["En la lectura, ¿cuánto dinero había en la hucha?", ["18,35 €", "18 €", "16,35 €"], "Lectura."],
    ["¿Qué animal aparece en la moneda griega de 1 €?", ["una lechuza", "un toro", "un águila"], "Caras."],
  ],
  tarjetas: [
    ["Caras del euro", "Cara común y nacional: catedral, Cervantes, rey."],
    ["Billetes seguros", "Toque (relieve), mire (marca de agua), gire (holograma)."],
    ["Pagar bien", "Empieza por la pieza de más valor sin pasarte."],
    ["Historia y precios", "Trueque, sal, Lidia, China, euro; compara antes de comprar."],
  ],
  glosario: [
    ["Cara común", "Lado igual en todas las monedas de euro."],
    ["Cara nacional", "Lado diseñado por cada país."],
    ["Numismático", "Coleccionista de monedas."],
    ["Falsificar", "Hacer una copia falsa."],
    ["Marca de agua", "Imagen que se ve a contraluz."],
    ["Holograma", "Imagen que cambia al girar el billete."],
    ["Relieve", "Parte que sobresale y se nota al tocar."],
    ["Salario", "Dinero que se cobra por trabajar."],
    ["Peseta", "Antigua moneda de España."],
    ["Oferta", "Precio rebajado o regalo al comprar."],
    ["Consumidor", "Persona que compra."],
    ["Ahorrar", "Guardar dinero o gastar menos."],
  ],
  situacion: {
    titulo: "La tienda del cole",
    reto: "La clase monta una tienda con dinero de juguete y aprende a pagar, comprobar y comparar precios.",
    pasos: ["Fabricar monedas y billetes de juguete y una colección de caras de monedas reales.", "Diseñar billetes con medidas de seguridad inventadas.", "Comprar y pagar con el menor número de piezas.", "Preparar ofertas y decidir cuáles convienen de verdad."],
    producto: "Una tienda de clase con precios, ofertas y un mural de la historia del dinero.",
    evaluacion: ["Reconoce las caras del euro.", "Conoce las medidas de seguridad.", "Paga con pocas monedas.", "Compara precios con criterio."],
  },
});
