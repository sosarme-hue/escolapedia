// Matemáticas 1º de Primaria: los números hasta el 99.
const { mapa } = require("./_util");
const { svg, num, txt, decena, unidad, PROF, FUENTES } = require("./_pri1");

const tabla = (x, y, c, marcar = []) => [...Array(100)].map((_, n) => {
  const f = Math.floor(n / 10), k = n % 10, on = marcar.includes(n);
  return `<rect x="${x + k * c}" y="${y + f * c}" width="${c - 1}" height="${c - 1}" fill="${on ? "var(--sun)" : f % 2 ? "var(--card)" : "var(--paper)"}" stroke="var(--line)" stroke-width=".6"/><text x="${x + k * c + c / 2}" y="${y + f * c + c * 0.68}" text-anchor="middle" font-size="${c * 0.45}" font-weight="700" fill="var(--ink)" font-family="inherit">${n}</text>`;
}).join("");

module.exports = {
  materia: "Matemáticas",
  curso: "1-primaria",
  titulo: "Los números hasta el 99",
  minutos: 25,
  objetivos: ["Leer y escribir los números hasta el 99", "Contar hacia delante y hacia atrás", "Usar la tabla del 100 para buscar números"],
  claves: ["veinte", "treinta", "tabla del 100", "anterior", "siguiente"],
  pregunta: {
    texto: "Tu abuela cumple 67 años. ¿Cómo se lee ese número? ¿Cuántas decenas tiene?",
    respuesta: "Se lee <mark>sesenta y siete</mark>. Tiene 6 decenas y 7 unidades.",
  },
  bloques: [
    {
      html: `<h3>Los números del 10 al 19</h3><p>Después del 9 viene el 10. Luego seguimos: <b>once, doce, trece, catorce, quince</b>. Estos nombres son especiales y hay que aprenderlos.</p><p>Después vienen <mark>dieciséis, diecisiete, dieciocho y diecinueve</mark>: suenan a «diez y seis», «diez y siete»…</p>`,
      svg: svg("Los números del 10 al 19 en dos filas", `${[10, 11, 12, 13, 14].map((n, i) => `<rect x="${18 + i * 46}" y="30" width="40" height="40" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>${num(38 + i * 46, 59, n, "var(--pen)", 20)}`).join("")}${[15, 16, 17, 18, 19].map((n, i) => `<rect x="${18 + i * 46}" y="88" width="40" height="40" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>${num(38 + i * 46, 117, n, "var(--leaf)", 20)}`).join("")}${txt(130, 160, "once, doce, trece… diecinueve")}`),
      video: { id: "lUy96iM6gCc", titulo: "Adivina los números del 10 al 20", canal: "Smile and Learn - Español", vistas: 1788199, megusta: 0 },
    },
    {
      html: `<h3>Los nombres de las decenas</h3><p>Las decenas tienen nombre: <b>diez, veinte, treinta, cuarenta, cincuenta, sesenta, setenta, ochenta y noventa</b>.</p><p>Si sabes contar de diez en diez, ya sabes las decenas. Todas terminan en <mark>0</mark>.</p>`,
      svg: svg("Las decenas del 10 al 90 con su nombre", `${[["10", "diez"], ["20", "veinte"], ["30", "treinta"], ["40", "cuarenta"], ["50", "cincuenta"], ["60", "sesenta"], ["70", "setenta"], ["80", "ochenta"], ["90", "noventa"]].map(([n, t], i) => { const x = 45 + (i % 3) * 85, y = 40 + Math.floor(i / 3) * 52; return num(x, y, n, "var(--pen)", 20) + txt(x, y + 18, t, "var(--ink)", 12); }).join("")}`),
    },
    {
      html: `<h3>Leer números de dos cifras</h3><p>Para leer un número, primero decimos la <b>decena</b> y luego la <b>unidad</b>, unidas con «y».</p><p>El 34 se lee <mark>treinta y cuatro</mark>. El 58 se lee cincuenta y ocho. Del 21 al 29 se escribe junto: veintiuno, veintidós, veintitrés…</p>`,
      svg: svg("El número 34 se lee treinta y cuatro: tres barras y cuatro cubitos", `${decena(30, 25)}${decena(50, 25)}${decena(70, 25)}${[0, 1, 2, 3].map((i) => unidad(100 + i * 16, 125)).join("")}${num(195, 75, "34", "var(--pen)", 40)}${txt(195, 102, "treinta y cuatro", "var(--ink)", 13)}${txt(60, 160, "30", "var(--pen)", 15)}${txt(124, 160, "4", "var(--sun)", 15)}`),
    },
    {
      html: `<h3>La tabla del 100</h3><p>La tabla del 100 tiene <mark>todos los números del 0 al 99</mark> ordenados en filas de 10.</p><p>Si bajas una fila, el número tiene <b>10 más</b>. Si vas a la derecha, tiene <b>1 más</b>. En cada columna, todos los números terminan igual.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tabla del 0 al 99 con la columna de los números que terminan en 5 marcada"><rect width="260" height="180" rx="14" fill="var(--paper)"/>${tabla(52, 8, 16.4, [5, 15, 25, 35, 45, 55, 65, 75, 85, 95])}</svg>`,
    },
    {
      html: `<h3>Anterior y siguiente</h3><p>El número <b>siguiente</b> tiene 1 más. El número <b>anterior</b> tiene 1 menos.</p><p>El siguiente del 39 es el <mark>40</mark>: cuando las unidades llegan a 9, al sumar 1 cambia la decena. El anterior del 40 es el 39.</p>`,
      svg: svg("El 39, el 40 y el 41: anterior, número y siguiente", `${[["39", "anterior", "var(--leaf)"], ["40", "número", "var(--red)"], ["41", "siguiente", "var(--pen)"]].map(([n, t, c], i) => `<rect x="${20 + i * 80}" y="50" width="62" height="56" rx="10" fill="var(--card)" stroke="${c}" stroke-width="3"/>${num(51 + i * 80, 90, n, c, 28)}${txt(51 + i * 80, 132, t, c, 13)}`).join("")}${txt(130, 30, "1 menos · 1 más")}`),
    },
    {
      html: `<h3>Contar hacia atrás</h3><p>También podemos contar <mark>hacia atrás</mark>, quitando 1 cada vez: 20, 19, 18, 17…</p><p>Así cuentan los cohetes antes de despegar: diez, nueve, ocho… ¡cero! Contar hacia atrás nos ayudará mucho para restar.</p>`,
      svg: svg("Un cohete con la cuenta atrás 5, 4, 3, 2, 1, 0", `<path d="M200 140 L 200 60 Q 215 25 230 60 L 230 140 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="215" cy="80" r="8" fill="var(--water)"/><path d="M200 120 L 188 145 L 200 140 M230 120 L 242 145 L 230 140" fill="var(--red)" stroke="var(--red)"/><path d="M207 145 L 215 168 L 223 145" fill="var(--sun)"/>${[5, 4, 3, 2, 1, 0].map((n, i) => num(25 + i * 28, 95, n, i === 5 ? "var(--red)" : "var(--pen)", 24)).join("")}${txt(95, 140, "¡despegue!", "var(--red)")}`),
    },
    {
      html: `<h3>Pares e impares</h3><p>Si un número se puede repartir <b>en parejas sin que sobre nada</b>, es <mark>par</mark>: 2, 4, 6, 8, 10…</p><p>Si sobra uno, es <mark>impar</mark>: 1, 3, 5, 7, 9… Mira la última cifra: si termina en 0, 2, 4, 6 u 8, es par.</p>`,
      svg: svg("Seis puntos en tres parejas: par. Cinco puntos con uno suelto: impar", `${[0, 1, 2].map((i) => `<rect x="${30 + i * 36}" y="38" width="28" height="48" rx="12" fill="none" stroke="var(--leaf)" stroke-width="2"/><circle cx="${44 + i * 36}" cy="52" r="7" fill="var(--leaf)"/><circle cx="${44 + i * 36}" cy="72" r="7" fill="var(--leaf)"/>`).join("")}${txt(78, 110, "6 es par", "var(--leaf)")}${[0, 1].map((i) => `<rect x="${150 + i * 36}" y="38" width="28" height="48" rx="12" fill="none" stroke="var(--pen)" stroke-width="2"/><circle cx="${164 + i * 36}" cy="52" r="7" fill="var(--pen)"/><circle cx="${164 + i * 36}" cy="72" r="7" fill="var(--pen)"/>`).join("")}<circle cx="232" cy="62" r="7" fill="var(--red)"/>${txt(195, 110, "5 es impar", "var(--pen)")}${txt(130, 150, "¿sobra uno? → impar")}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Con los números hasta el 99 podemos saber <b>cuántos niños hay en el cole</b>, en qué página está un cuento o cuántos días faltan para tu cumpleaños.</p><p>También los usamos para buscar el <mark>asiento</mark> en el cine o el número de una casa en la calle.</p>`,
      svg: svg("Un libro abierto por la página 48 y una butaca de cine con el número 23", `<path d="M20 50 Q 70 35 120 50 V 130 Q 70 115 20 130 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M120 50 V 130" stroke="var(--ink)"/>${num(95, 120, "48", "var(--pen)", 16)}<rect x="160" y="60" width="70" height="55" rx="10" fill="var(--red)" opacity=".8"/><rect x="150" y="105" width="90" height="20" rx="6" fill="var(--red)"/>${num(195, 95, "23", "var(--card)", 22)}${txt(70, 160, "página 48")}${txt(195, 160, "asiento 23")}`),
    },
    {
      html: `<h3>Juego: ¿quién soy?</h3><p>Adivina el número con las pistas: «Tengo <b>7 decenas</b>. Mis unidades son <b>2</b>. ¿Quién soy?».</p><p>¡Soy el <mark>72</mark>, setenta y dos! Ahora piensa tú un número y da pistas a tu familia para que lo adivine: cuántas decenas tiene, si es par o impar…</p>`,
      svg: svg("Un número escondido detrás de una cortina con las pistas 7 decenas y 2 unidades", `<rect x="25" y="30" width="100" height="110" rx="10" fill="var(--pen)" opacity=".85"/>${num(75, 100, "?", "var(--card)", 50)}<g font-size="13" font-weight="700" fill="var(--ink)" font-family="inherit"><text x="140" y="60">Pista 1: 7 D</text><text x="140" y="85">Pista 2: 2 U</text></g>${num(195, 135, "72", "var(--red)", 30)}`),
      video: { id: "LiLE_f9I6Co", titulo: "Los números del 1 al 100: aprende a escribirlos y leerlos", canal: "Smile and Learn - Español", vistas: 2382440, megusta: 0 },
    },
  ],
  figura: {
    titulo: "La tabla del 100",
    svg: `<svg viewBox="0 0 640 360" role="img" aria-label="Tabla con los números del 0 al 99; las decenas 10, 20, 30… están marcadas"><rect width="640" height="360" rx="16" fill="var(--paper)"/>${tabla(140, 12, 33.6, [10, 20, 30, 40, 50, 60, 70, 80, 90])}</svg>`,
  },
  video: { id: "EpiqZsdTW0s", titulo: "Los números del 1 al 100 para niños", canal: "Videos Aprende", vistas: 23717718, megusta: 79208, busqueda: "números hasta el 99 para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cómo se escribe «cuarenta y seis»?", pasos: ["Cuarenta son 4 decenas: escribo un 4.", "Seis son 6 unidades: escribo un 6 a la derecha."], resultado: "46." },
    { enunciado: "¿Cuál es el número siguiente al 59?", pasos: ["Al 59 le sumo 1.", "Las unidades pasan de 9 a 10: hago una decena nueva.", "Ahora hay 6 decenas y 0 unidades."], resultado: "el 60." },
    { enunciado: "Cuenta hacia atrás desde el 23 hasta el 18.", pasos: ["Empiezo en 23 y quito 1 cada vez.", "23, 22, 21, 20.", "Sigo: 19, 18."], resultado: "23, 22, 21, 20, 19, 18." },
  ],
  errores: [
    "Escribir las cifras al revés: «treinta y dos» es 32, no 23.",
    "Decir «diez y uno» en vez de «once»: del 11 al 15 los nombres son especiales.",
    "Después del 29 decir «veintidiez»: después del 29 viene el 30.",
    "Pensar que el 50 es impar porque tiene un 5: lo que cuenta es la última cifra, el 0.",
  ],
  ejercicios: [
    { q: "Escribe con cifras: setenta y uno.", sol: "71." },
    { q: "Escribe con letras: 28.", sol: "Veintiocho." },
    { q: "¿Cuál es el siguiente del 69?", sol: "El 70." },
    { q: "¿Cuál es el anterior del 50?", sol: "El 49." },
    { q: "Completa: 34, 35, __, 37, __.", sol: "36 y 38." },
    { q: "Cuenta hacia atrás desde el 15 hasta el 10.", sol: "15, 14, 13, 12, 11, 10." },
    { q: "¿El 8 es par o impar? ¿Y el 13?", sol: "El 8 es par. El 13 es impar." },
    { q: "Adivina: tengo 9 decenas y 0 unidades.", sol: "El 90, noventa." },
    { q: "En la tabla del 100, ¿qué número está justo debajo del 24?", sol: "El 34 (10 más)." },
    { q: "Di cinco números que terminen en 7.", sol: "Por ejemplo: 7, 17, 27, 37, 47." },
  ],
  quiz: [
    { q: "«Sesenta y tres» se escribe…", o: ["36", "63", "603"], a: 1, e: "6 decenas y 3 unidades." },
    { q: "El siguiente del 79 es…", o: ["80", "78", "710"], a: 0, e: "79 + 1 = 80." },
    { q: "El anterior del 30 es…", o: ["31", "20", "29"], a: 2, e: "30 − 1 = 29." },
    { q: "¿Cómo se lee el 15?", o: ["diez y cinco", "quince", "cincuenta"], a: 1, e: "El 15 tiene nombre propio: quince." },
    { q: "¿Qué número es par?", o: ["7", "11", "14"], a: 2, e: "Termina en 4." },
    { q: "En la tabla del 100, debajo del 45 está…", o: ["46", "55", "35"], a: 1, e: "Al bajar una fila, 10 más." },
    { q: "Cuarenta son…", o: ["4 decenas", "40 decenas", "4 unidades"], a: 0, e: "40 = 4 decenas." },
    { q: "Contando hacia atrás: 12, 11, __", o: ["13", "10", "9"], a: 1, e: "Quitamos 1." },
    { q: "¿Qué número es impar?", o: ["20", "35", "48"], a: 1, e: "Termina en 5." },
    { q: "El número más grande de dos cifras es…", o: ["90", "99", "100"], a: 1, e: "Después del 99 ya hay tres cifras." },
  ],
  examen: [
    { q: "¿Cómo se escribe «ochenta y cinco»?", o: ["58", "85", "805"], a: 1, e: "8 decenas y 5 unidades." },
    { q: "Entre el 47 y el 49 está…", o: ["48", "46", "50"], a: 0, e: "47, 48, 49." },
    { q: "¿Qué número es par?", o: ["31", "56", "77"], a: 1, e: "Termina en 6." },
    { q: "El siguiente del 89 es…", o: ["90", "80", "810"], a: 0, e: "89 + 1 = 90." },
  ],
  feynman: ["Cómo se lee un número de dos cifras", "Qué pasa al sumar 1 a un número que termina en 9", "Cómo sé si un número es par o impar"],
  mapa: mapa("NÚMEROS HASTA EL 99", "var(--pri)", [
    ["Leer", "decena y unidad: treinta y cuatro", "var(--pen)"],
    ["Tabla del 100", "abajo +10 · derecha +1", "var(--sun)"],
    ["Anterior y siguiente", "1 menos · 1 más", "var(--red)"],
    ["Par e impar", "¿sobra uno al hacer parejas?", "var(--leaf)"],
  ], 220),
  tarjetas: [
    ["¿Cómo se lee el 14?", "Catorce"],
    ["¿Cómo se escribe «veintisiete»?", "27"],
    ["¿Qué viene después del 39?", "El 40"],
    ["¿Qué viene antes del 60?", "El 59"],
    ["En la tabla del 100, bajar una fila es…", "10 más"],
    ["¿El 6 es par o impar?", "Par"],
    ["¿El 9 es par o impar?", "Impar"],
    ["El mayor número de dos cifras", "99"],
  ],
  familias: [
    "Leed juntos los números de los portales, las páginas de los cuentos y los precios de la tienda.",
    "Jugad a «¿quién soy?»: uno piensa un número y da pistas (decenas, unidades, par o impar).",
    "Haced cuentas atrás para empezar juegos o salir de casa: 20, 19, 18…",
    "Imprimid una tabla del 100 y tapad números con monedas para que los adivine.",
  ],
  profesores: PROF("Sentido numérico: lectura, escritura, orden y comparación de números naturales hasta el 99; conteo ascendente y descendente; números pares e impares", ["Tabla del 100 gigante en el suelo o la pared, con números que se pueden quitar.", "Cuenta atrás diaria de los días que faltan para una fiesta.", "Juego de pistas en parejas con tarjetas de decenas y unidades."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
