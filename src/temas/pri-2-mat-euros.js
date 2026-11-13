// Matemáticas 2º de Primaria: euros y céntimos.
const P = require("./_pri2a");
const { svg, num, txt, moneda, billete, nino, flechaR, tick } = P;

// Moneda de céntimos (cobre o dorada según el valor).
const cent = (x, y, v, r = 13) => moneda(x, y, v, r, v <= 5 ? "#d08a4e" : "var(--sun)");
// Moneda de euro bicolor.
const euro = (x, y, v, r = 16) => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="${v === 1 ? "var(--sun)" : "#c9ccd3"}" stroke="var(--ink)" stroke-width="1.5"/><circle cx="${x}" cy="${y}" r="${r * 0.62}" fill="${v === 1 ? "#c9ccd3" : "var(--sun)"}"/>${num(x, y + 5, `${v}€`, "var(--ink)", r > 14 ? 12 : 10)}</g>`;
// Etiqueta de precio.
const precio = (x, y, t, c = "var(--red)") => `<g><path d="M${x} ${y} h46 l10 12 l-10 12 h-46z" fill="${c}"/><circle cx="${x + 46}" cy="${y + 12}" r="3" fill="var(--card)"/>${num(x + 22, y + 18, t, "var(--card)", 14)}</g>`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Euros y céntimos",
  objetivos: ["Conocer las monedas y los billetes de euro", "Saber que 1 euro son 100 céntimos", "Contar dinero, pagar y calcular la vuelta"],
  claves: ["euro (€)", "céntimo (cént.)", "moneda", "billete", "precio", "pagar", "vuelta"],
  pregunta: ["Quieres comprar un cuento que cuesta 8 €. Tienes un billete de 5 € y dos monedas de 2 €. ¿Te llega?", "Contamos: 5 + 2 + 2 = <mark>9 €</mark>. Tienes 9 € y el cuento cuesta 8 €. ¡Sí te llega! Y te sobra <b>1 €</b> de vuelta."],
  bloques: [
    ["El dinero en España", `<p>En España, y en muchos países de Europa, usamos el <mark>euro</mark>. Su símbolo es <b>€</b>.</p><p>El dinero sirve para <b>comprar</b> cosas y pagar servicios.</p><p>Hay <b>monedas</b>, que son redondas y de metal, y <b>billetes</b>, que son de papel. Cada uno tiene un valor distinto.</p>`,
      svg("Monedas y billetes de euro", `${euro(40, 60, 1)}${euro(80, 60, 2, 18)}${cent(40, 110, 50)}${cent(80, 110, 10)}${billete(120, 34, "5 €", "#9aa3ad")}${billete(150, 86, "10 €", "var(--red)")}${num(130, 160, "€ = euro", "var(--pen)", 20)}`)],
    ["Las monedas de céntimo", `<p>Un euro se puede partir en <mark>100 céntimos</mark>. Así: 1 € = 100 céntimos.</p><p>Hay monedas de <b>1, 2 y 5 céntimos</b>, de color cobre. Y de <b>10, 20 y 50 céntimos</b>, de color dorado.</p><p>Con dos monedas de 50 céntimos tenemos <b>1 euro</b>.</p>`,
      svg("Las seis monedas de céntimo: 1, 2, 5, 10, 20 y 50", `${[1, 2, 5, 10, 20, 50].map((v, i) => cent(30 + i * 40, 70, v, 10 + i * 1.6)).join("")}${txt(70, 110, "cobre", "#b0682e", 13)}${txt(190, 110, "doradas", "var(--muted)", 13)}${num(130, 154, "50 c + 50 c = 1 €", "var(--pen)", 18)}`), P.V("eurB")],
    ["Las monedas de euro", `<p>Hay monedas de <mark>1 euro</mark> y de <mark>2 euros</mark>. Tienen <b>dos colores</b>: plateado y dorado.</p><p>La de 1 € es plateada por dentro y dorada por fuera. La de 2 € es al revés.</p><p>Dos monedas de 1 € valen lo mismo que una de 2 €.</p>`,
      svg("Dos monedas de un euro valen lo mismo que una de dos euros", `${euro(56, 80, 1, 24)}${euro(110, 80, 1, 24)}${num(150, 88, "=", "var(--ink)", 28)}${euro(200, 80, 2, 28)}${txt(84, 132, "1 € + 1 €", "var(--ink)", 15)}${txt(200, 132, "2 €", "var(--ink)", 15)}`)],
    ["Los billetes", `<p>Para cantidades más grandes usamos <mark>billetes</mark>.</p><p>Hay billetes de <b>5, 10, 20, 50, 100 y 200 euros</b>. Cada uno tiene un color y un tamaño distinto.</p><p>Cuanto más vale el billete, <b>más grande</b> es. Así las personas que no ven bien también los distinguen.</p>`,
      svg("Billetes de 5, 10, 20 y 50 euros de distintos colores y tamaños", `${[["5 €", "#9aa3ad", 64], ["10 €", "var(--red)", 70], ["20 €", "var(--pen)", 76], ["50 €", "var(--inf)", 82]].map(([t, c, w], i) => `<rect x="${16 + (i % 2) * 120}" y="${30 + Math.floor(i / 2) * 64}" width="${w + 22}" height="${44 + i * 2}" rx="5" fill="${c}" opacity=".85" stroke="var(--ink)" stroke-width="1.5"/>${num(16 + (i % 2) * 120 + (w + 22) / 2, 60 + Math.floor(i / 2) * 64, t, "var(--card)", 18)}`).join("")}`)],
    ["Contar dinero", `<p>Para contar dinero, empezamos por lo que <b>más vale</b>.</p><p>Primero los billetes, luego las monedas de euro y al final los céntimos.</p><p>Un billete de 10 €, una moneda de 2 € y otra de 1 €: 10, 12, <mark>13 €</mark>. ¡Ordenar ayuda a no equivocarse!</p>`,
      svg("Un billete de diez, una moneda de dos y otra de uno: trece euros", `${billete(20, 40, "10 €", "var(--red)")}${euro(130, 62, 2, 20)}${euro(180, 62, 1, 18)}${num(60, 120, "10", "var(--pen)", 20)}${num(130, 120, "12", "var(--pen)", 20)}${num(200, 120, "13 €", "var(--red)", 20)}${flechaR(80, 114, 112, 114)}${flechaR(148, 114, 172, 114)}`)],
    ["Euros y céntimos juntos", `<p>A veces un precio tiene <b>euros y céntimos</b>. Por ejemplo, un zumo cuesta <mark>1 € y 50 céntimos</mark>.</p><p>Se puede escribir <b>1,50 €</b>. La coma separa los euros de los céntimos.</p><p>Para pagarlo, damos una moneda de 1 € y una de 50 céntimos.</p>`,
      svg("Un zumo de 1,50 euros pagado con una moneda de un euro y otra de cincuenta céntimos", `<rect x="34" y="40" width="44" height="76" rx="6" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><rect x="40" y="62" width="32" height="30" rx="4" fill="var(--card)"/><path d="M68 40 v-14" stroke="var(--red)" stroke-width="3"/>${precio(90, 50, "1,50 €")}${euro(176, 110, 1, 20)}${cent(222, 110, 50, 16)}${txt(198, 154, "1 € + 50 c", "var(--ink)", 14)}`)],
    ["Pagar y recibir la vuelta", `<p>Si pagamos con <b>más dinero</b> del que cuesta algo, nos devuelven la <mark>vuelta</mark> o el cambio.</p><p>Un helado cuesta <b>3 €</b>. Pagamos con un billete de <b>5 €</b>. La vuelta es 5 − 3 = <mark>2 €</mark>.</p><p>Para saber la vuelta, <b>restamos</b>: lo que pagamos menos lo que cuesta.</p>`,
      svg("Se paga un helado de tres euros con cinco y la vuelta son dos euros", `${billete(20, 40, "5 €", "#9aa3ad")}${flechaR(106, 60, 140, 60)}<path d="M160 90 l14 40 l14 -40z" fill="#c99a5b"/><circle cx="174" cy="80" r="16" fill="var(--inf)"/>${precio(196, 54, "3 €")}${euro(80, 128, 2, 20)}${txt(80, 166, "vuelta: 2 €", "var(--leaf)", 14)}${num(190, 160, "5 − 3 = 2", "var(--pen)", 18)}`)],
    ["¿Para qué sirve?", `<p>Usamos el dinero cuando vamos a la <b>tienda</b>, a la <b>panadería</b> o al <b>mercado</b>.</p><p>También ahorramos en una <mark>hucha</mark> para comprar algo que nos gusta mucho. Si cada semana guardas 2 €, en 5 semanas tendrás 10 €.</p><p>Saber contar dinero nos ayuda a gastar con cabeza.</p>`,
      svg("Una hucha de cerdito con monedas", `<ellipse cx="120" cy="100" rx="62" ry="42" fill="#f4a6b8" stroke="var(--ink)" stroke-width="2"/><circle cx="168" cy="86" r="4" fill="var(--ink)"/><ellipse cx="184" cy="104" rx="10" ry="8" fill="#f08aa2" stroke="var(--ink)" stroke-width="1.5"/><path d="M90 60 l-6 -16 l18 10 M142 60 l8 -16 l6 18" fill="#f4a6b8" stroke="var(--ink)" stroke-width="1.5"/><rect x="104" y="58" width="30" height="5" rx="2" fill="var(--ink)"/><path d="M80 138 v14 M160 138 v14" stroke="var(--ink)" stroke-width="6"/>${euro(119, 34, 2, 14)}${txt(220, 40, "+2 €", "var(--leaf)", 14)}${txt(220, 60, "cada", "var(--leaf)", 12)}${txt(220, 76, "semana", "var(--leaf)", 12)}`)],
    ["Juego: la tienda de clase", `<p>Pon precios a tus juguetes: <b>un coche, 4 €</b>; <b>una pelota, 6 €</b>; <b>un cuento, 9 €</b>.</p><p>Usa monedas y billetes de juguete. Un compañero compra y tú cobras. ¿Cuánto cuestan el coche y la pelota juntos? 4 + 6 = <mark>10 €</mark>.</p><p>Si paga con 20 €, ¿cuánto le devuelves? 20 − 10 = <b>10 €</b>.</p>`,
      svg("Una tienda de juguetes con precios: coche 4, pelota 6 y cuento 9 euros", `<rect x="14" y="110" width="232" height="10" fill="#c99a5b"/><rect x="26" y="78" width="46" height="20" rx="6" fill="var(--red)"/><circle cx="36" cy="100" r="7" fill="var(--ink)"/><circle cx="62" cy="100" r="7" fill="var(--ink)"/>${P.pelota(130, 92, 16)}<rect x="184" y="70" width="40" height="38" rx="3" fill="var(--pen)"/>${precio(22, 130, "4 €")}${precio(104, 130, "6 €")}${precio(178, 130, "9 €")}${txt(130, 40, "LA TIENDA", "var(--leaf)", 18)}`)],
  ],
  figura: ["Nuestro dinero: el euro", `<svg viewBox="0 0 640 260" role="img" aria-label="Monedas de céntimo, monedas de euro y billetes">
    <rect width="640" height="260" rx="16" fill="var(--paper)"/>
    ${txt(130, 40, "Céntimos", "var(--muted)", 18)}${[1, 2, 5, 10, 20, 50].map((v, i) => cent(60 + (i % 3) * 70, 90 + Math.floor(i / 3) * 70, v, 22)).join("")}
    ${txt(320, 40, "Euros", "var(--muted)", 18)}${euro(285, 110, 1, 28)}${euro(355, 110, 2, 30)}${txt(320, 180, "1 € = 100 céntimos", "var(--pen)", 16)}
    ${txt(520, 40, "Billetes", "var(--muted)", 18)}${billete(440, 60, "5 €", "#9aa3ad")}${billete(530, 60, "10 €", "var(--red)")}${billete(440, 120, "20 €", "var(--pen)")}${billete(530, 120, "50 €", "var(--inf)")}
  </svg>`],
  video: P.V("eurV", true),
  ejemplos: [
    ["Tengo un billete de 5 €, dos monedas de 2 € y una de 1 €. ¿Cuánto tengo?", ["Empiezo por el billete: 5.", "Sigo con las de 2 €: 7, 9.", "Termino con la de 1 €: 10."], "tengo 10 €."],
    ["¿Cuántas monedas de 50 céntimos necesito para 2 €?", ["2 monedas de 50 c forman 1 €.", "Para 2 € necesito el doble."], "4 monedas de 50 céntimos."],
    ["Compro un lápiz de 2 € y pago con 5 €. ¿Cuánto me devuelven?", ["Resto lo que pago menos lo que cuesta.", "5 − 2 = 3."], "me devuelven 3 €."],
  ],
  errores: [
    "Pensar que la moneda más grande vale siempre más: la de 50 céntimos es más grande que la de 1 €, pero vale menos.",
    "Contar las monedas sin mirar su valor: 3 monedas no son 3 €.",
    "Confundir euros y céntimos: 50 céntimos no son 50 €.",
    "Olvidar restar para calcular la vuelta.",
  ],
  ejercicios: [
    ["¿Cuántos céntimos tiene 1 euro?", "100 céntimos."],
    ["¿Qué billete es el más pequeño?", "El de 5 €."],
    ["Dibuja cómo pagar 7 € con un billete y monedas.", "Un billete de 5 € y una moneda de 2 €."],
    ["¿Cuánto es un billete de 10 € y otro de 5 €?", "15 €."],
    ["¿Cuántas monedas de 1 € necesito para 6 €?", "6 monedas."],
    ["Escribe con números: 2 euros y 50 céntimos.", "2,50 €."],
    ["Un juguete cuesta 8 €. Pago con 10 €. ¿Cuál es la vuelta?", "2 €."],
    ["¿Qué vale más: 3 monedas de 1 € o un billete de 5 €?", "El billete de 5 €."],
    ["Junta 1 € con monedas de 20 céntimos. ¿Cuántas necesitas?", "5 monedas de 20 c."],
    ["Si ahorras 3 € cada semana, ¿cuánto tienes en 4 semanas?", "12 €."],
  ],
  quiz: [
    ["El símbolo del euro es…", ["€", "$", "c"], "€ significa euro."],
    ["1 € son…", ["100 céntimos", "10 céntimos", "50 céntimos"], "Un euro se parte en 100 céntimos."],
    ["¿Cuál es una moneda?", ["2 €", "5 €", "10 €"], "Los billetes empiezan en 5 €."],
    ["2 monedas de 50 céntimos son…", ["1 €", "100 €", "50 céntimos"], "50 + 50 = 100 céntimos."],
    ["Un billete de 10 € y uno de 20 € son…", ["30 €", "12 €", "1020 €"], "10 + 20 = 30."],
    ["Pago 10 € por algo de 6 €. Me devuelven…", ["4 €", "16 €", "6 €"], "10 − 6 = 4."],
    ["1,50 € es…", ["1 euro y 50 céntimos", "150 euros", "15 euros"], "La coma separa euros y céntimos."],
    ["¿Cuántas monedas de 2 € son 10 €?", ["5", "2", "10"], "2, 4, 6, 8, 10."],
    ["Para contar dinero empezamos por…", ["lo que más vale", "lo que menos vale", "las monedas pequeñas"], "Billetes primero."],
    ["¿Qué vale más?", ["1 €", "50 céntimos", "20 céntimos"], "1 € = 100 céntimos."],
  ],
  examen: [
    ["Un billete de 5 € y una moneda de 2 € son…", ["7 €", "52 €", "3 €"], "5 + 2 = 7."],
    ["Pago con 20 € algo de 15 €. La vuelta es…", ["5 €", "35 €", "15 €"], "20 − 15 = 5."],
    ["¿Cuántos céntimos son medio euro?", ["50", "5", "500"], "La mitad de 100."],
    ["¿Qué moneda es de color cobre?", ["La de 5 céntimos", "La de 1 €", "La de 50 céntimos"], "1, 2 y 5 céntimos son de cobre."],
  ],
  feynman: ["Cuántos céntimos tiene un euro", "Cómo se cuenta el dinero sin equivocarse", "Cómo se calcula la vuelta"],
  mapa: ["EL EURO", [
    ["Céntimos", "1, 2, 5, 10, 20, 50", "var(--sun)"],
    ["Monedas de €", "1 € y 2 €", "var(--muted)"],
    ["Billetes", "5, 10, 20, 50…", "var(--pen)"],
    ["Vuelta", "pago − precio", "var(--leaf)"],
  ]],
  tarjetas: [
    ["Símbolo del euro", "€"],
    ["1 € =", "100 céntimos"],
    ["Monedas de euro", "1 € y 2 €"],
    ["Billete más pequeño", "5 €"],
    ["2 monedas de 50 céntimos", "1 €"],
    ["¿Cómo calculo la vuelta?", "Restando: lo que pago − lo que cuesta"],
    ["10 € + 5 € + 2 €", "17 €"],
    ["¿Qué significa 3,20 €?", "3 euros y 20 céntimos"],
  ],
  familias: [
    "Dejad que pague una compra pequeña y que compruebe la vuelta.",
    "Vaciad la hucha y contad juntos el dinero empezando por lo que más vale.",
    "Jugad a las tiendas con precios redondos y dinero de juguete.",
    "Mirad monedas reales y comparad colores y tamaños.",
  ],
  saberes: "Medida: el sistema monetario; monedas y billetes de euro; equivalencias entre euros y céntimos; cálculo de precios y de la vuelta",
  ideas: ["Rincón de la tienda con precios y dinero de juguete.", "Clasificar monedas por color, tamaño y valor.", "Problemas de compra con el folleto de un supermercado."],
});
