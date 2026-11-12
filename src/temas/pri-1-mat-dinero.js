// Matemáticas 1º de Primaria: el dinero, monedas y billetes.
const { mapa } = require("./_util");
const { svg, num, txt, moneda, billete, PROF, FUENTES } = require("./_pri1");

const cobre = "var(--red)";

module.exports = {
  materia: "Matemáticas",
  curso: "1-primaria",
  titulo: "El dinero: monedas y billetes",
  minutos: 25,
  objetivos: ["Reconocer las monedas y billetes de euro más usados", "Contar dinero en euros hasta 20", "Pagar y calcular la vuelta en compras sencillas"],
  claves: ["euro (€)", "céntimo", "moneda", "billete", "precio", "pagar", "vuelta"],
  pregunta: {
    texto: "Quieres comprar un cuaderno que cuesta 3 euros y tienes una moneda de 2 euros y otra de 1 euro. ¿Tienes suficiente?",
    respuesta: "Sí: <mark>2 € + 1 € = 3 €</mark>, justo lo que cuesta el cuaderno.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el dinero?</h3><p>El <mark>dinero</mark> sirve para <b>comprar</b> cosas y pagar servicios. Antes la gente cambiaba unas cosas por otras: una gallina por un saco de trigo.</p><p>Ahora usamos monedas y billetes. En España y en muchos países de Europa, el dinero se llama <b>euro</b> y su signo es <b>€</b>.</p>`,
      svg: svg("Una gallina cambiada por un saco, y debajo monedas y un billete de euro", `<ellipse cx="55" cy="60" rx="22" ry="17" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="74" cy="46" r="9" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M80 46 l 6 2 l -6 2" fill="var(--sun)"/><path d="M95 60 h 50 M137 54 l 8 6 l -8 6" stroke="var(--ink)" stroke-width="2.5" fill="none"/><path d="M165 40 h 50 l 6 45 h -62 Z" fill="var(--sun)" opacity=".6" stroke="var(--ink)" stroke-width="2"/>${moneda(60, 135, "1 €", 18)}${moneda(105, 135, "2 €", 20)}${billete(140, 113, "5 €", "var(--muted)")}`),
    },
    {
      html: `<h3>Las monedas de euro</h3><p>Hay monedas de <mark>1 euro</mark> y de <mark>2 euros</mark>: son doradas y plateadas a la vez.</p><p>También hay monedas pequeñas de <b>céntimos</b>: de 1, 2, 5, 10, 20 y 50 céntimos. <b>100 céntimos son 1 euro</b>. Las de 1, 2 y 5 céntimos son de color cobre.</p>`,
      svg: svg("Monedas de 1, 2, 5, 10, 20 y 50 céntimos y de 1 y 2 euros", `${[["1c", 9, cobre], ["2c", 10, cobre], ["5c", 11, cobre], ["10c", 12, "var(--sun)"], ["20c", 13, "var(--sun)"], ["50c", 14, "var(--sun)"]].map(([t, r, c], i) => moneda(25 + i * 38, 60, t, r, c)).join("")}${moneda(85, 125, "1 €", 18)}${moneda(170, 125, "2 €", 20)}${txt(130, 170, "100 céntimos = 1 €", "var(--ink)", 13)}`),
      video: { id: "vJpl2v3_ST8", titulo: "Monedas y billetes de euro: valor y suma de dinero", canal: "Aula chachi", vistas: 110541, megusta: 0 },
    },
    {
      html: `<h3>Los billetes</h3><p>Los <mark>billetes</mark> son de papel y valen más que las monedas. Los más usados son de <b>5, 10, 20 y 50 euros</b>.</p><p>Cada billete tiene un color y un tamaño: cuanto más vale, <b>más grande</b> es. El de 5 es gris, el de 10 es rojo, el de 20 es azul y el de 50 es naranja.</p>`,
      svg: svg("Billetes de 5, 10, 20 y 50 euros de distintos colores", `${billete(25, 30, "5 €", "var(--muted)")}${billete(140, 30, "10 €", "var(--red)")}${billete(25, 100, "20 €", "var(--pen)")}${billete(140, 100, "50 €", "var(--sun)")}`),
    },
    {
      html: `<h3>Contar dinero</h3><p>Para contar dinero, empezamos por lo que <mark>más vale</mark> y vamos sumando.</p><p>Un billete de 5 €, una moneda de 2 € y una de 1 €: 5, 7, 8. Hay <b>8 euros</b>. Contar así es como sumar dando saltos grandes primero.</p>`,
      svg: svg("Un billete de 5 euros, una moneda de 2 euros y una de 1 euro: 8 euros", `${billete(15, 60, "5 €", "var(--muted)")}${moneda(135, 80, "2 €", 20)}${moneda(185, 80, "1 €", 18)}${txt(55, 130, "5", "var(--ink)", 16)}${txt(135, 130, "7", "var(--ink)", 16)}${txt(185, 130, "8", "var(--ink)", 16)}${txt(130, 165, "5 + 2 + 1 = 8 €", "var(--red)", 16)}`),
    },
    {
      html: `<h3>Lo mismo con distinto dinero</h3><p>Podemos tener la <mark>misma cantidad</mark> con monedas y billetes distintos.</p><p>Un billete de 10 € vale igual que <b>dos billetes de 5 €</b>, o que <b>cinco monedas de 2 €</b>. Por eso podemos cambiar dinero sin perder nada.</p>`,
      svg: svg("Un billete de 10 euros es igual a dos de 5 euros o a cinco monedas de 2 euros", `${billete(15, 30, "10 €", "var(--red)")}${txt(112, 57, "=", "var(--ink)", 22)}${billete(130, 20, "5 €", "var(--muted)")}${billete(165, 45, "5 €", "var(--muted)")}${txt(112, 135, "=", "var(--ink)", 22)}${[0, 1, 2, 3, 4].map((i) => moneda(140 + i * 24, 130, "2", 11)).join("")}${billete(15, 110, "10 €", "var(--red)")}`),
    },
    {
      html: `<h3>Precios y comprar</h3><p>En las tiendas, cada cosa tiene un <mark>precio</mark>: lo que cuesta. Lo vemos en una etiqueta.</p><p>Si compro un pan de 1 € y una leche de 2 €, sumo los precios: <b>1 + 2 = 3 €</b>. Eso es lo que tengo que pagar.</p>`,
      svg: svg("Una barra de pan de un euro y un brik de leche de dos euros, en total tres euros", `<ellipse cx="65" cy="80" rx="45" ry="16" fill="var(--sun)" opacity=".8"/>${[0, 1, 2].map((i) => `<path d="M${40 + i * 22} 72 l 10 14" stroke="var(--ink)" stroke-width="2"/>`).join("")}<rect x="40" y="105" width="44" height="22" rx="4" fill="var(--card)" stroke="var(--ink)"/>${num(62, 121, "1 €", "var(--red)", 13)}<path d="M155 60 L 165 45 H 190 L 200 60 V 115 H 155 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="155" y="125" width="44" height="22" rx="4" fill="var(--card)" stroke="var(--ink)"/>${num(177, 141, "2 €", "var(--red)", 13)}${txt(130, 172, "total: 3 €", "var(--ink)", 14)}`),
    },
    {
      html: `<h3>Pagar y la vuelta</h3><p>Si pagamos con más dinero del que cuesta algo, nos devuelven la <mark>vuelta</mark> (o el cambio).</p><p>Un zumo cuesta 3 €. Pago con un billete de 5 €. Me devuelven <b>5 − 3 = 2 €</b>. Para calcular la vuelta, restamos.</p>`,
      svg: svg("Pago 5 euros por un zumo de 3 euros y me devuelven 2 euros", `${billete(15, 40, "5 €", "var(--muted)")}<path d="M100 61 h 30 M122 55 l 8 6 l -8 6" stroke="var(--ink)" stroke-width="2.5" fill="none"/><rect x="150" y="30" width="30" height="55" rx="4" fill="var(--leaf)" opacity=".85"/>${num(165, 102, "3 €", "var(--red)", 14)}${moneda(205, 135, "2 €", 20)}${txt(90, 140, "vuelta: 5 − 3 =", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>¿Para qué sirve? Ahorrar</h3><p>El dinero no se puede gastar todo. Es buena idea <mark>ahorrar</mark>: guardar un poco cada semana en una hucha para comprar algo que queremos.</p><p>Si ahorras 2 € cada semana, en 5 semanas tendrás <b>10 €</b>. ¡Hay que pensar antes de gastar!</p>`,
      svg: svg("Una hucha en forma de cerdito con monedas entrando", `<ellipse cx="120" cy="105" rx="70" ry="45" fill="var(--red)" opacity=".55"/><circle cx="182" cy="95" r="16" fill="var(--red)" opacity=".7"/><circle cx="178" cy="90" r="3" fill="var(--ink)"/><rect x="100" y="60" width="40" height="6" rx="3" fill="var(--ink)"/><path d="M80 145 v 18 M155 145 v 18" stroke="var(--red)" stroke-width="10" opacity=".6"/>${moneda(120, 35, "2 €", 16)}`),
    },
    {
      html: `<h3>Juego: la tiendita</h3><p>Monta una <mark>tienda en casa</mark> con juguetes o fruta. Pon una etiqueta con un precio a cada cosa: de 1 € a 10 €.</p><p>Una persona compra y otra vende. Hay que <b>pagar</b>, <b>contar</b> el dinero y <b>dar la vuelta</b>. Podéis hacer el dinero con papel y monedas dibujadas.</p>`,
      svg: svg("Un puesto de tienda con un toldo y productos con precios", `<path d="M20 40 H 240 L 225 65 H 35 Z" fill="var(--red)" opacity=".75"/>${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M${35 + i * 32} 65 q 16 14 32 0" fill="var(--card)" stroke="var(--red)"/>`).join("")}<rect x="35" y="110" width="190" height="50" fill="var(--sun)" opacity=".6" stroke="var(--ink)" stroke-width="2"/><circle cx="70" cy="98" r="13" fill="var(--sun)"/><circle cx="130" cy="98" r="13" fill="var(--red)"/><circle cx="190" cy="98" r="13" fill="var(--leaf)"/>${num(70, 145, "1 €", "var(--ink)", 14)}${num(130, 145, "2 €", "var(--ink)", 14)}${num(190, 145, "3 €", "var(--ink)", 14)}`),
    },
  ],
  figura: {
    titulo: "El euro",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Las monedas de 1 y 2 euros y los billetes de 5, 10, 20 y 50 euros">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${txt(110, 35, "Monedas", "var(--muted)", 15)}${moneda(70, 110, "1 €", 32)}${moneda(155, 110, "2 €", 36)}
      ${txt(430, 35, "Billetes", "var(--muted)", 15)}
      <g transform="translate(250 50) scale(1.6)">${billete(0, 0, "5 €", "var(--muted)")}${billete(115, 0, "10 €", "var(--red)")}${billete(0, 55, "20 €", "var(--pen)")}${billete(115, 55, "50 €", "var(--sun)")}</g>
      ${txt(110, 215, "100 céntimos = 1 €", "var(--ink)", 15)}
    </svg>`,
  },
  video: { id: "YrgmBxjT67U", titulo: "El euro para niños de Primaria", canal: "La BiBlioTHeKa", vistas: 22772, megusta: 0, busqueda: "el euro para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuánto dinero hay? Un billete de 10 €, uno de 5 € y una moneda de 2 €.", pasos: ["Empiezo por lo que más vale: 10.", "Sumo el billete de 5: 15.", "Sumo la moneda de 2: 17."], resultado: "hay 17 €." },
    { enunciado: "Un libro cuesta 7 €. Pago con un billete de 10 €. ¿Cuánto me devuelven?", pasos: ["Pago más de lo que cuesta: me dan vuelta.", "Resto: 10 − 7.", "10 − 7 = 3."], resultado: "me devuelven 3 €." },
    { enunciado: "Tengo 4 €. ¿Puedo comprar un yogur de 1 € y un zumo de 2 €?", pasos: ["Sumo los precios: 1 + 2 = 3 €.", "Comparo: 4 es mayor que 3.", "Me sobra: 4 − 3 = 1 €."], resultado: "sí, y me sobra 1 €." },
  ],
  errores: [
    "Contar las monedas por su número y no por lo que valen: 2 monedas de 2 € son 4 €, no 2 €.",
    "Pensar que una moneda grande siempre vale más: la de 50 céntimos es más grande que la de 1 €, pero vale menos.",
    "Confundir euros y céntimos.",
    "Sumar en vez de restar para calcular la vuelta.",
  ],
  ejercicios: [
    { q: "¿Cuál es el signo del euro?", sol: "€." },
    { q: "¿Cuántos céntimos tiene 1 euro?", sol: "100 céntimos." },
    { q: "Cuenta: 2 € + 2 € + 1 €.", sol: "5 €." },
    { q: "Cuenta: un billete de 5 € y otro de 10 €.", sol: "15 €." },
    { q: "¿Cuántos billetes de 5 € hacen 10 €?", sol: "2 billetes." },
    { q: "Un helado cuesta 2 € y una galleta 1 €. ¿Cuánto cuestan juntos?", sol: "3 €." },
    { q: "Pago 5 € por algo que cuesta 4 €. ¿Cuánto me devuelven?", sol: "1 €." },
    { q: "Tengo 6 €. ¿Puedo comprar un cuento de 8 €?", sol: "No, me faltan 2 €." },
    { q: "¿De qué color es el billete de 20 €?", sol: "Azul." },
    { q: "Si ahorro 1 € cada día durante una semana, ¿cuánto tendré?", sol: "7 €." },
  ],
  quiz: [
    { q: "El dinero de España se llama…", o: ["peseta", "euro", "dólar"], a: 1, e: "El euro, €." },
    { q: "1 euro son…", o: ["10 céntimos", "100 céntimos", "50 céntimos"], a: 1, e: "100 céntimos." },
    { q: "¿Qué vale más?", o: ["una moneda de 2 €", "un billete de 5 €", "una moneda de 1 €"], a: 1, e: "5 € es más que 2 €." },
    { q: "2 € + 2 € =", o: ["4 €", "22 €", "2 €"], a: 0, e: "Sumamos lo que valen." },
    { q: "Un billete de 10 € es igual a…", o: ["dos de 5 €", "uno de 5 €", "tres de 5 €"], a: 0, e: "5 + 5 = 10." },
    { q: "Lo que cuesta algo se llama…", o: ["vuelta", "precio", "hucha"], a: 1, e: "El precio." },
    { q: "Pago 10 € por algo de 6 €. Me devuelven…", o: ["4 €", "16 €", "6 €"], a: 0, e: "10 − 6 = 4." },
    { q: "Para calcular la vuelta…", o: ["sumo", "resto", "no hago nada"], a: 1, e: "Restamos." },
    { q: "Guardar dinero para más adelante es…", o: ["gastar", "ahorrar", "pagar"], a: 1, e: "Ahorrar." },
    { q: "Billete de 5 € + moneda de 1 € =", o: ["6 €", "51 €", "4 €"], a: 0, e: "5 + 1 = 6." },
  ],
  examen: [
    { q: "¿Cuánto hay? 10 € + 5 € + 2 €", o: ["17 €", "15 €", "12 €"], a: 0, e: "10, 15, 17." },
    { q: "Un balón cuesta 9 €. Pago 10 €. Me devuelven…", o: ["1 €", "19 €", "9 €"], a: 0, e: "10 − 9 = 1." },
    { q: "¿Qué billete es azul?", o: ["el de 5 €", "el de 20 €", "el de 10 €"], a: 1, e: "El de 20 €." },
    { q: "Tres monedas de 2 € son…", o: ["3 €", "6 €", "5 €"], a: 1, e: "2 + 2 + 2 = 6." },
  ],
  feynman: ["Qué monedas y billetes de euro hay", "Cómo cuento dinero", "Cómo calculo la vuelta"],
  mapa: mapa("EL DINERO", "var(--pri)", [
    ["Euro (€)", "100 céntimos = 1 €", "var(--sun)"],
    ["Monedas", "céntimos · 1 € · 2 €", "var(--red)"],
    ["Billetes", "5 · 10 · 20 · 50 €", "var(--pen)"],
    ["Comprar", "precio · pagar · vuelta", "var(--leaf)"],
  ], 220),
  tarjetas: [
    ["Signo del euro", "€"],
    ["1 € son…", "100 céntimos"],
    ["Billetes más usados", "5, 10, 20 y 50 €"],
    ["Monedas de euro", "1 € y 2 €"],
    ["Lo que cuesta algo", "El precio"],
    ["Lo que me devuelven", "La vuelta o el cambio"],
    ["¿Cómo calculo la vuelta?", "Restando: lo que pago − el precio"],
    ["Guardar dinero es…", "Ahorrar"],
  ],
  familias: [
    "Dejad que pague cosas pequeñas en la panadería o el quiosco y que compruebe la vuelta.",
    "Jugad a las tiendas en casa con dinero de juguete o dibujado.",
    "Vaciad un monedero y contad juntos cuánto hay, empezando por lo que más vale.",
    "Usad una hucha para que vea cómo crece lo que ahorra cada semana.",
  ],
  profesores: PROF("Sentido de la medida y sentido socioafectivo: reconocimiento de monedas y billetes de euro, equivalencias sencillas, cálculo de precios y vueltas hasta 20 €, y consumo responsable", ["Tienda de aula con precios hasta 10 € y dinero de juguete.", "Clasificar monedas por su valor y por su tamaño para ver que no coinciden.", "Proyecto de ahorro de clase para una actividad común."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
