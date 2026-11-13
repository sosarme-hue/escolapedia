// Matemáticas 2º de Primaria: las tablas de multiplicar (2, 3, 4, 5 y 10).
const P = require("./_pri2a");
const { svg, num, txt, nino, rot, flechaR, moneda } = P;

// Lista de una tabla en columna: n × 1 … n × hasta.
const lista = (x, y, n, hasta = 10, c = "var(--pen)", paso = 14, size = 12) => [...Array(hasta)].map((_, i) => rot(x, y + i * paso, `${n} × ${i + 1} = ${n * (i + 1)}`, { size, color: i % 2 ? "var(--ink)" : c, anchor: "start", w: 800 })).join("");
// Saltos en una recta: de s en s desde 0, k saltos.
const saltos = (x0, y, s, k, px, c) => `<path d="M${x0 - 6} ${y} H${x0 + k * px + 8}" stroke="var(--ink)" stroke-width="2.5"/>${[...Array(k + 1)].map((_, i) => `<path d="M${x0 + i * px} ${y - 6} V${y + 6}" stroke="var(--ink)" stroke-width="2"/>${num(x0 + i * px, y + 22, i * s, "var(--pen)", 13)}`).join("")}${[...Array(k)].map((_, i) => `<path d="M${x0 + i * px + 2} ${y - 6} Q${x0 + i * px + px / 2} ${y - 30} ${x0 + (i + 1) * px - 2} ${y - 6}" stroke="${c}" stroke-width="2.2" fill="none"/>`).join("")}`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Las tablas de multiplicar",
  objetivos: ["Construir las tablas del 2, 3, 4, 5 y 10", "Contar de 2 en 2, de 5 en 5 y de 10 en 10", "Usar trucos para recordar las tablas"],
  claves: ["tabla de multiplicar", "tabla del 2", "tabla del 5", "tabla del 10", "contar de … en …", "memorizar", "trucos"],
  pregunta: ["¿Cuántos dedos hay en 6 manos? ¿Hay que contarlos uno a uno?", "¡No! Cada mano tiene 5 dedos. Contamos <mark>de 5 en 5</mark>: 5, 10, 15, 20, 25, 30. Es la <b>tabla del 5</b>: 6 × 5 = <b>30</b>."],
  bloques: [
    ["¿Qué es una tabla?", `<p>Una <mark>tabla de multiplicar</mark> es una lista con un número multiplicado por 1, 2, 3… hasta 10.</p><p>La <b>tabla del 2</b> empieza así: 2 × 1 = 2, 2 × 2 = 4, 2 × 3 = 6…</p><p>Si sabemos las tablas <b>de memoria</b>, multiplicamos en un momento, ¡sin contar con los dedos!</p>`,
      svg("La tabla del 2 completa del 2 por 1 al 2 por 10", `${[...Array(10)].map((_, i) => rot(i < 5 ? 30 : 145, 36 + (i % 5) * 26, `2 × ${i + 1} = ${2 * (i + 1)}`, { size: 15, w: 800, anchor: "start", color: i % 2 ? "var(--ink)" : "var(--pen)" })).join("")}${txt(130, 172, "La tabla del 2", "var(--red)", 13)}`)],
    ["La tabla del 2: los dobles", `<p>Multiplicar por 2 es hacer el <mark>doble</mark>: sumar el número dos veces.</p><p>Contamos <b>de 2 en 2</b>: 2, 4, 6, 8, 10, 12, 14, 16, 18, <b>20</b>.</p><p>Todos los resultados son <b>números pares</b>: terminan en 0, 2, 4, 6 u 8. Piensa en los pares de zapatos o de calcetines.</p>`,
      svg("Saltos de dos en dos sobre una recta del 0 al 10", `${saltos(22, 100, 2, 5, 43, "var(--leaf)")}${txt(130, 50, "de 2 en 2", "var(--leaf)", 15)}${txt(130, 160, "2 · 4 · 6 · 8 · 10 …", "var(--ink)", 15)}`), P.V("tabB")],
    ["La tabla del 10: ¡la más fácil!", `<p>Para multiplicar por <b>10</b>, solo hay que poner un <mark>0</mark> detrás del número.</p><p>3 × 10 = <b>30</b>. 7 × 10 = <b>70</b>. 10 × 10 = <b>100</b>.</p><p>Es como contar billetes de 10 €: 10, 20, 30, 40… Si tienes 6 billetes de 10 €, tienes <b>60 €</b>.</p>`,
      svg("Seis billetes de diez euros son sesenta euros", `${[...Array(6)].map((_, i) => `<rect x="${18 + (i % 3) * 78}" y="${30 + Math.floor(i / 3) * 46}" width="68" height="36" rx="4" fill="var(--pen)" opacity=".85" stroke="var(--ink)"/>${num(52 + (i % 3) * 78, 54 + Math.floor(i / 3) * 46, "10 €", "var(--card)", 14)}`).join("")}${num(130, 150, "6 × 10 = 60", "var(--red)", 22)}`)],
    ["La tabla del 5: como el reloj", `<p>En la tabla del 5 contamos <b>de 5 en 5</b>: 5, 10, 15, 20, 25, 30, 35, 40, 45, <b>50</b>.</p><p>¡Fíjate! Los resultados terminan siempre en <mark>5 o en 0</mark>.</p><p>Es la mitad de la tabla del 10: 4 × 10 = 40, y 4 × 5 = <b>20</b>. En el reloj, cada número son 5 minutos.</p>`,
      svg("Tres manos abiertas: cinco, diez y quince", `${[0, 1, 2].map((k) => `<g transform="translate(${46 + k * 84} 110)"><rect x="-16" y="-26" width="32" height="34" rx="10" fill="#f3c9a1" stroke="var(--ink)" stroke-width="1.5"/>${[-12, -6, 0, 6].map((dx, i) => `<rect x="${dx - 3 + 1}" y="${-52 + Math.abs(i - 1.5) * 4}" width="7" height="30" rx="3.5" fill="#f3c9a1" stroke="var(--ink)" stroke-width="1.2"/>`).join("")}<rect x="12" y="-24" width="7" height="22" rx="3.5" transform="rotate(35 15 -12)" fill="#f3c9a1" stroke="var(--ink)" stroke-width="1.2"/></g>${num(46 + k * 84, 150, (k + 1) * 5, "var(--pen)", 20)}`).join("")}${txt(130, 30, "de 5 en 5", "var(--leaf)", 15)}`), P.V("tabB2")],
    ["La tabla del 3", `<p>En la tabla del 3 contamos <b>de 3 en 3</b>: 3, 6, 9, 12, 15, 18, 21, 24, 27, <b>30</b>.</p><p>Piensa en un <mark>triciclo</mark>: tiene 3 ruedas. 4 triciclos tienen 4 × 3 = <b>12 ruedas</b>.</p><p>Un truco: 3 × un número es el doble más una vez más. 3 × 4 = 8 + 4 = 12.</p>`,
      svg("Saltos de tres en tres sobre una recta del 0 al 15", `${saltos(22, 100, 3, 5, 43, "var(--red)")}${txt(130, 50, "de 3 en 3", "var(--red)", 15)}${txt(130, 160, "3 · 6 · 9 · 12 · 15 …", "var(--ink)", 15)}`)],
    ["La tabla del 4: el doble del doble", `<p>Para multiplicar por <b>4</b>, haz el doble <mark>dos veces</mark>.</p><p>4 × 3: el doble de 3 es 6, y el doble de 6 es <b>12</b>.</p><p>Contamos de 4 en 4: 4, 8, 12, 16, 20, 24, 28, 32, 36, <b>40</b>. Piensa en las patas de los gatos: 5 gatos tienen 5 × 4 = <b>20 patas</b>.</p>`,
      svg("Tres por cuatro: el doble de tres es seis y el doble de seis es doce", `${num(40, 90, "3", "var(--pen)", 32)}${flechaR(58, 80, 98, 80, "var(--leaf)")}${txt(78, 66, "doble", "var(--leaf)", 12)}${num(120, 90, "6", "var(--pen)", 32)}${flechaR(138, 80, 178, 80, "var(--leaf)")}${txt(158, 66, "doble", "var(--leaf)", 12)}${num(210, 90, "12", "var(--red)", 32)}${num(130, 146, "4 × 3 = 12", "var(--red)", 22)}`)],
    ["Trucos para recordar", `<p>Las tablas se aprenden <b>poco a poco</b>. Aquí tienes trucos:</p><p>• El orden no importa: si sabes 2 × 7, ya sabes <mark>7 × 2</mark>.</p><p>• Canta las tablas con una canción.</p><p>• Repasa un ratito cada día, no todas de golpe.</p><p>• Usa la recta numérica para dar saltos.</p>`,
      svg("Una niña canta la tabla del 2 con notas musicales", `${nino(60, 160, { nina: true, pose: "canta", c: "var(--red)", boca: "abierta" })}${P.nota(110, 70, "var(--pen)")}${P.nota(140, 52, "var(--leaf)")}${P.bocadillo(185, 110, 120, "2 × 7 = 14")}${txt(185, 160, "= 7 × 2", "var(--pen)", 15)}`)],
    ["¿Para qué sirve?", `<p>Las tablas nos ayudan a calcular <b>rápido</b> en muchos sitios.</p><p>Si un cuaderno cuesta <b>3 €</b> y compras 4, pagas 4 × 3 = <mark>12 €</mark>.</p><p>Si un paquete trae 10 rotuladores y tienes 5 paquetes, tienes 5 × 10 = <b>50</b>. ¡Sin contar uno a uno!</p>`,
      svg("Cuatro cuadernos de tres euros: doce euros", `${[0, 1, 2, 3].map((i) => `<rect x="${24 + i * 56}" y="34" width="42" height="56" rx="4" fill="${["var(--red)", "var(--pen)", "var(--leaf)", "var(--sun)"][i]}" stroke="var(--ink)" stroke-width="1.5"/><path d="M${30 + i * 56} 34 V90" stroke="var(--card)" stroke-width="2"/>${moneda(45 + i * 56, 108, "3 €", 12)}`).join("")}${num(130, 156, "4 × 3 = 12 €", "var(--red)", 22)}`)],
    ["Juego: el tablero de las tablas", `<p>Haz un tablero con <b>casillas del 1 al 50</b>. Pinta de azul los números de la tabla del 5: 5, 10, 15…</p><p>¡Forman <mark>columnas</mark>! Ahora rodea los de la tabla del 2.</p><p>¿Qué números son de las dos tablas? El 10, el 20, el 30… ¡Son los de la tabla del <b>10</b>!</p>`,
      svg("Tablero del 1 al 30 con la tabla del 5 en azul", `${[...Array(30)].map((_, i) => { const n = i + 1, x = 30 + (i % 10) * 20, y = 34 + Math.floor(i / 10) * 30; return `<rect x="${x}" y="${y}" width="20" height="30" fill="${n % 5 === 0 ? "var(--pen)" : "var(--card)"}" fill-opacity="${n % 5 === 0 ? 0.8 : 1}" stroke="var(--line)"/>${n % 2 === 0 ? `<circle cx="${x + 10}" cy="${y + 15}" r="9" fill="none" stroke="var(--red)" stroke-width="1.5"/>` : ""}${num(x + 10, y + 20, n, n % 5 === 0 ? "var(--card)" : "var(--ink)", 11)}`; }).join("")}${txt(130, 150, "azul: tabla del 5 · rojo: del 2", "var(--ink)", 12)}`)],
  ],
  figura: ["Las tablas del 2, 5 y 10", `<svg viewBox="0 0 640 260" role="img" aria-label="Las tablas del 2, del 5 y del 10 del 1 al 10">
    <rect width="640" height="260" rx="16" fill="var(--paper)"/>
    ${[[2, "var(--leaf)"], [5, "var(--pen)"], [10, "var(--red)"]].map(([n, c], k) => `<rect x="${24 + k * 202}" y="16" width="188" height="228" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${txt(118 + k * 202, 40, `Tabla del ${n}`, c, 16)}${[...Array(10)].map((_, i) => rot(118 + k * 202, 62 + i * 18, `${n} × ${i + 1} = ${n * (i + 1)}`, { size: 14, w: 800, color: "var(--ink)" })).join("")}`).join("")}
  </svg>`],
  video: P.V("tabV", true),
  ejemplos: [
    ["¿Cuánto es 7 × 2?", ["Multiplicar por 2 es hacer el doble.", "El doble de 7 es 7 + 7."], "7 × 2 = 14."],
    ["¿Cuánto es 8 × 5?", ["Primero, 8 × 10 = 80 (ponemos un 0).", "La tabla del 5 es la mitad: la mitad de 80 es 40."], "8 × 5 = 40."],
    ["Hay 6 triciclos. ¿Cuántas ruedas hay?", ["Cada triciclo tiene 3 ruedas: tabla del 3.", "Contamos de 3 en 3: 3, 6, 9, 12, 15, 18."], "6 × 3 = 18 ruedas."],
  ],
  errores: [
    "Contar mal los saltos y decir 4 × 5 = 25: hay que contar cuántos saltos damos.",
    "En la tabla del 10, poner el 0 delante: 6 × 10 es 60, no 06.",
    "Querer aprender todas las tablas en un día: mejor un poco cada día.",
    "Olvidar que 3 × 8 es lo mismo que 8 × 3.",
  ],
  ejercicios: [
    ["Di la tabla del 2 en voz alta.", "2, 4, 6, 8, 10, 12, 14, 16, 18, 20."],
    ["Cuenta de 5 en 5 hasta el 50.", "5, 10, 15, 20, 25, 30, 35, 40, 45, 50."],
    ["¿Cuánto es 9 × 10?", "90."],
    ["¿Cuánto es 6 × 2?", "12."],
    ["¿Cuánto es 7 × 5?", "35."],
    ["¿Cuánto es 4 × 4?", "16."],
    ["¿Cuánto es 3 × 9?", "27."],
    ["Completa: 5 × __ = 30.", "6."],
    ["¿Cuántas patas tienen 8 gatos?", "8 × 4 = 32 patas."],
    ["Escribe la tabla del 3 en una tira de papel y pégala en tu cuarto.", "3, 6, 9, 12, 15, 18, 21, 24, 27, 30."],
  ],
  quiz: [
    ["La tabla del 2 va de…", ["2 en 2", "1 en 1", "10 en 10"], "2, 4, 6, 8…"],
    ["4 × 10 es…", ["40", "14", "400"], "Ponemos un 0 detrás del 4."],
    ["Los resultados de la tabla del 5 terminan en…", ["5 o 0", "2 o 4", "cualquier número"], "5, 10, 15, 20…"],
    ["6 × 5 es…", ["30", "11", "35"], "5, 10, 15, 20, 25, 30."],
    ["3 × 7 es…", ["21", "10", "24"], "7 + 7 + 7 = 21."],
    ["8 × 2 es…", ["16", "10", "18"], "El doble de 8."],
    ["4 × 5 es…", ["20", "9", "25"], "5 + 5 + 5 + 5."],
    ["Si 2 × 9 = 18, entonces 9 × 2 es…", ["18", "11", "29"], "El orden no cambia el resultado."],
    ["Multiplicar por 4 es hacer…", ["el doble del doble", "la mitad", "el triple"], "4 × 3: 6 y luego 12."],
    ["10 × 10 es…", ["100", "20", "1010"], "Diez decenas forman una centena."],
  ],
  examen: [
    ["5 × 9 es…", ["45", "14", "54"], "La mitad de 90."],
    ["2 × 6 es…", ["12", "8", "26"], "El doble de 6."],
    ["3 × 5 es…", ["15", "8", "35"], "5 + 5 + 5."],
    ["7 × 10 es…", ["70", "17", "710"], "Un 0 detrás del 7."],
  ],
  feynman: ["Qué es una tabla de multiplicar", "Por qué la tabla del 10 es tan fácil", "Qué truco sirve para la tabla del 4"],
  mapa: ["TABLAS", [
    ["Del 2", "dobles: 2, 4, 6…", "var(--leaf)"],
    ["Del 5", "acaban en 5 o 0", "var(--pen)"],
    ["Del 10", "un 0 detrás", "var(--red)"],
    ["Trucos", "orden, cantar, repasar", "var(--sun)"],
  ]],
  tarjetas: [
    ["2 × 8", "16"],
    ["5 × 7", "35"],
    ["10 × 6", "60"],
    ["3 × 6", "18"],
    ["4 × 7", "28"],
    ["5 × 5", "25"],
    ["2 × 9", "18"],
    ["¿Cómo multiplico por 10?", "Pongo un 0 detrás"],
  ],
  familias: [
    "Cantad las tablas en el coche o mientras os laváis los dientes.",
    "Pegad la tabla de la semana en la nevera y repasadla cada día un ratito.",
    "Jugad con los dedos a contar de 5 en 5 y con monedas de 10 céntimos de 10 en 10.",
    "Preguntad una multiplicación al día por sorpresa y celebrad los aciertos.",
  ],
  saberes: "Sentido numérico: construcción y memorización progresiva de las tablas de multiplicar del 2, 3, 4, 5 y 10; conteos de 2 en 2, de 5 en 5 y de 10 en 10",
  ideas: ["Construir cada tabla con saltos en la recta numérica antes de memorizarla.", "Tablero del 100 para descubrir regularidades de las tablas.", "Canciones y juegos de cartas para la memorización."],
});
