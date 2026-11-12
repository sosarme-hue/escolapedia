// Matemáticas 1º de Primaria: la suma.
const { mapa } = require("./_util");
const { svg, puntos, manzana, num, txt, decena, unidad, PROF, FUENTES } = require("./_pri1");

module.exports = {
  materia: "Matemáticas",
  curso: "1-primaria",
  titulo: "La suma",
  minutos: 25,
  objetivos: ["Entender que sumar es juntar o añadir", "Sumar números hasta el 10 con dibujos, dedos y la recta", "Sumar decenas y unidades sin llevar"],
  claves: ["sumar", "más (+)", "igual (=)", "resultado", "juntar"],
  pregunta: {
    texto: "En el parque hay 3 niños jugando. Llegan 2 más. ¿Cuántos niños hay ahora?",
    respuesta: "Hay <mark>5 niños</mark>. Al juntar 3 y 2 hemos hecho una suma: 3 + 2 = 5.",
  },
  bloques: [
    {
      html: `<h3>Sumar es juntar</h3><p>Sumar es <mark>juntar</mark> dos grupos para saber cuántos hay en total.</p><p>Si tengo 2 manzanas en una mano y 3 en la otra, y las pongo todas en la mesa, tengo 5 manzanas. Hemos sumado.</p>`,
      svg: svg("Dos manzanas más tres manzanas son cinco manzanas", `${manzana(30, 70)}${manzana(58, 70)}${num(88, 78, "+", "var(--ink)", 26)}${manzana(118, 70)}${manzana(146, 70)}${manzana(174, 70)}${num(205, 78, "=", "var(--ink)", 26)}${num(235, 80, "5", "var(--red)", 30)}${txt(130, 140, "2 + 3 = 5", "var(--pen)", 20)}`),
    },
    {
      html: `<h3>Sumar es añadir</h3><p>También sumamos cuando <mark>añadimos</mark> cosas a un grupo que ya teníamos.</p><p>En la pecera hay 4 peces. Echamos 2 más. Ahora hay 6. Las palabras <b>llegan, añadimos, me dan, compro</b> nos avisan de que hay que sumar.</p>`,
      svg: svg("Una pecera con cuatro peces y dos peces más que entran", `<rect x="30" y="40" width="150" height="100" rx="14" fill="var(--water)" opacity=".35" stroke="var(--water)" stroke-width="2"/>${[[60, 70], [110, 65], [80, 110], [140, 105]].map(([x, y]) => `<path d="M${x} ${y} q 12 -10 24 0 q -12 10 -24 0 Z M${x + 24} ${y} l 8 -6 v 12 Z" fill="var(--sun)"/>`).join("")}${[[205, 60], [215, 100]].map(([x, y]) => `<path d="M${x} ${y} q 12 -10 24 0 q -12 10 -24 0 Z M${x} ${y} l -8 -6 v 12 Z" fill="var(--red)"/>`).join("")}${txt(130, 165, "4 + 2 = 6")}`),
    },
    {
      html: `<h3>Los signos + y =</h3><p>El signo <b>+</b> se lee <mark>«más»</mark>. El signo <b>=</b> se lee «igual a».</p><p>3 + 4 = 7 se lee «tres más cuatro es igual a siete». Los números que sumamos se llaman <b>sumandos</b>, y el número final es el <mark>resultado</mark>.</p>`,
      svg: svg("La suma 3 más 4 igual a 7 con los nombres sumandos y resultado", `${num(40, 90, "3", "var(--pen)", 44)}${num(85, 90, "+", "var(--ink)", 40)}${num(130, 90, "4", "var(--pen)", 44)}${num(175, 90, "=", "var(--ink)", 40)}${num(220, 90, "7", "var(--red)", 44)}<path d="M30 105 Q 85 135 140 105" stroke="var(--pen)" stroke-width="2" fill="none"/>${txt(85, 150, "sumandos", "var(--pen)")}${txt(220, 130, "resultado", "var(--red)")}`),
      video: { id: "oexd_Dfic_Q", titulo: "Aprendiendo a sumar. La suma", canal: "Happy Learning Español", vistas: 6163718, megusta: 0 },
    },
    {
      html: `<h3>Sumar con los dedos</h3><p>Los dedos nos ayudan. Para 4 + 3, levanta <b>4 dedos</b> en una mano. Luego levanta <b>3 dedos</b> más.</p><p>Ahora cuenta todos los dedos levantados: 1, 2, 3, 4, 5, 6, 7. ¡<mark>4 + 3 = 7</mark>!</p>`,
      svg: svg("Cuatro dedos y tres dedos levantados: siete", `${[0, 1, 2, 3, 4].map((d) => `<rect x="${40 + d * 14}" y="${d < 4 ? 40 : 70}" width="11" height="${d < 4 ? 60 : 30}" rx="5.5" fill="${d < 4 ? "var(--sun)" : "var(--line)"}"/>`).join("")}<rect x="36" y="95" width="74" height="35" rx="12" fill="var(--sun)"/>${[0, 1, 2, 3, 4].map((d) => `<rect x="${150 + d * 14}" y="${d < 3 ? 40 : 70}" width="11" height="${d < 3 ? 60 : 30}" rx="5.5" fill="${d < 3 ? "var(--leaf)" : "var(--line)"}"/>`).join("")}<rect x="146" y="95" width="74" height="35" rx="12" fill="var(--leaf)"/>${txt(130, 160, "4 + 3 = 7", "var(--ink)", 18)}`),
    },
    {
      html: `<h3>Sumar en la recta numérica</h3><p>En la recta, sumar es <mark>dar saltos hacia delante</mark>.</p><p>Para 5 + 3, nos ponemos en el 5 y damos 3 saltos: 6, 7, 8. Llegamos al <b>8</b>. Es un truco muy útil: <b>empieza por el número mayor</b> y cuenta lo que falta.</p>`,
      svg: svg("Recta numérica: desde el 5 tres saltos hasta el 8", `<path d="M18 120 H 242" stroke="var(--ink)" stroke-width="3"/>${[...Array(11)].map((_, i) => `<path d="M${22 + i * 21.6} 112 V 128" stroke="var(--ink)" stroke-width="2"/>${num(22 + i * 21.6, 150, i, i === 5 ? "var(--pen)" : i === 8 ? "var(--red)" : "var(--ink)", 14)}`).join("")}${[5, 6, 7].map((i) => `<path d="M${24 + i * 21.6} 115 Q ${33 + i * 21.6} 85 ${42 + i * 21.6} 115" stroke="var(--leaf)" stroke-width="2.5" fill="none"/>`).join("")}${txt(150, 70, "+1 +1 +1", "var(--leaf)")}${txt(130, 35, "5 + 3 = 8", "var(--ink)", 16)}`),
    },
    {
      html: `<h3>El orden no cambia el resultado</h3><p>Si cambiamos el orden de los números, la suma <mark>da lo mismo</mark>: 2 + 6 = 8 y 6 + 2 = 8.</p><p>Por eso es más fácil empezar por el número <b>más grande</b>: para 2 + 6, piensa 6 + 2. ¡Solo tienes que contar 2!</p>`,
      svg: svg("Una fila de 2 puntos y 6 puntos, y debajo 6 y 2: en los dos casos son 8", `${puntos(2, 30, 60, "var(--pen)", 22)}${puntos(6, 90, 60, "var(--leaf)", 22)}${puntos(6, 30, 110, "var(--leaf)", 22)}${puntos(2, 172, 110, "var(--pen)", 22)}${txt(130, 30, "2 + 6 = 8")}${txt(130, 155, "6 + 2 = 8")}`),
    },
    {
      html: `<h3>Sumar decenas y unidades</h3><p>Para sumar números más grandes, sumamos por separado: <mark>unidades con unidades</mark> y <b>decenas con decenas</b>.</p><p>23 + 14: las unidades 3 + 4 = 7; las decenas 2 + 1 = 3. El resultado es <b>37</b>. Lo escribimos uno debajo de otro, con cada cifra en su columna.</p>`,
      svg: svg("Suma en columnas: 23 más 14 igual a 37, con las columnas D y U", `<rect x="80" y="18" width="50" height="24" fill="var(--pen)"/><rect x="130" y="18" width="50" height="24" fill="var(--sun)"/>${num(105, 37, "D", "var(--card)", 16)}${num(155, 37, "U", "var(--ink)", 16)}${num(105, 72, "2", "var(--pen)", 26)}${num(155, 72, "3", "var(--ink)", 26)}${num(60, 104, "+", "var(--ink)", 26)}${num(105, 104, "1", "var(--pen)", 26)}${num(155, 104, "4", "var(--ink)", 26)}<path d="M55 115 H 185" stroke="var(--ink)" stroke-width="3"/>${num(105, 146, "3", "var(--red)", 28)}${num(155, 146, "7", "var(--red)", 28)}${txt(222, 100, "primero", "var(--muted)", 11)}${txt(222, 114, "las U", "var(--muted)", 11)}`),
      video: { id: "lgTHXU0AS-w", titulo: "Ejercicios de sumas para niños: aprende a sumar con Dino", canal: "Smile and Learn - Español", vistas: 2373577, megusta: 0 },
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Sumamos para saber <b>cuántos somos</b> en una fiesta, cuántos cromos tenemos después de un intercambio o cuánto cuesta lo que compramos.</p><p>Si un helado cuesta 2 euros y un zumo 1 euro, pagamos <mark>2 + 1 = 3 euros</mark>.</p>`,
      svg: svg("Un helado de dos euros y un zumo de un euro: tres euros", `<path d="M55 90 L 70 145 L 85 90 Z" fill="var(--sun)"/><circle cx="70" cy="80" r="17" fill="var(--red)" opacity=".75"/>${num(70, 45, "2 €", "var(--pen)", 16)}<rect x="125" y="70" width="34" height="70" rx="5" fill="var(--leaf)" opacity=".8"/><path d="M147 70 L 152 50" stroke="var(--ink)" stroke-width="3"/>${num(142, 45, "1 €", "var(--pen)", 16)}${num(210, 112, "3 €", "var(--red)", 28)}${txt(130, 168, "2 + 1 = 3")}`),
    },
    {
      html: `<h3>Juego: dobles</h3><p>Los <mark>dobles</mark> son sumas de un número consigo mismo: 1 + 1 = 2, 2 + 2 = 4, 3 + 3 = 6, 4 + 4 = 8, 5 + 5 = 10.</p><p>Apréndelos como un juego: tus <b>dos manos</b> son el doble de 5. Con los dobles puedes hacer otras sumas rápido: 5 + 6 es el doble de 5 más 1.</p>`,
      svg: svg("Los dobles: 1+1=2, 2+2=4, 3+3=6, 4+4=8, 5+5=10, con fichas de dominó", `${[1, 2, 3, 4, 5].map((n, i) => `<rect x="${12 + i * 49}" y="30" width="40" height="80" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M${12 + i * 49} 70 H ${52 + i * 49}" stroke="var(--ink)"/>${puntos(Math.min(n, 3), 20 + i * 49, 45, "var(--pen)", 11, 3.5)}${n > 3 ? puntos(n - 3, 20 + i * 49, 56, "var(--pen)", 11, 3.5) : ""}${puntos(Math.min(n, 3), 20 + i * 49, 85, "var(--pen)", 11, 3.5)}${n > 3 ? puntos(n - 3, 20 + i * 49, 96, "var(--pen)", 11, 3.5) : ""}${num(32 + i * 49, 140, n * 2, "var(--red)", 20)}`).join("")}${txt(130, 168, "¡dobles!")}`),
    },
  ],
  figura: {
    titulo: "Tres maneras de sumar 4 + 3",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="La suma 4 más 3 con dibujos, con dedos y en la recta numérica">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${txt(110, 34, "Con dibujos", "var(--ink)", 16)}${puntos(4, 40, 100, "var(--pen)", 24, 9)}${puntos(3, 70, 140, "var(--leaf)", 24, 9)}
      ${txt(320, 34, "Con dedos", "var(--ink)", 16)}${[...Array(7)].map((_, d) => `<rect x="${262 + d * 17}" y="70" width="12" height="70" rx="6" fill="${d < 4 ? "var(--pen)" : "var(--leaf)"}"/>`).join("")}
      ${txt(530, 34, "En la recta", "var(--ink)", 16)}<path d="M430 140 H 630" stroke="var(--ink)" stroke-width="3"/>${[...Array(9)].map((_, i) => `<path d="M${440 + i * 23} 132 V 148" stroke="var(--ink)" stroke-width="2"/>${num(440 + i * 23, 170, i, i === 7 ? "var(--red)" : "var(--ink)", 14)}`).join("")}${[4, 5, 6].map((i) => `<path d="M${442 + i * 23} 135 Q ${451 + i * 23} 105 ${461 + i * 23} 135" stroke="var(--leaf)" stroke-width="2.5" fill="none"/>`).join("")}
      ${txt(320, 225, "4 + 3 = 7", "var(--red)", 26)}
    </svg>`,
  },
  video: { id: "br4Z-HZtIQQ", titulo: "Sumas sencillas para niños", canal: "El rincón de aprender", vistas: 10754505, megusta: 0, busqueda: "sumas sencillas para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Tengo 5 globos y me regalan 2. ¿Cuántos tengo?", pasos: ["Me regalan: es una suma.", "Empiezo por el 5 y cuento 2 más: 6, 7."], resultado: "5 + 2 = 7 globos." },
    { enunciado: "Calcula 3 + 6.", pasos: ["El orden no importa: pienso 6 + 3.", "Empiezo en el 6 y doy 3 saltos: 7, 8, 9."], resultado: "3 + 6 = 9." },
    { enunciado: "Calcula 42 + 35.", pasos: ["Coloco los números uno debajo de otro.", "Unidades: 2 + 5 = 7.", "Decenas: 4 + 3 = 7."], resultado: "42 + 35 = 77." },
  ],
  errores: [
    "Contar otra vez el primer número al dar saltos: para 5 + 3 se dice 6, 7, 8 (no 5, 6, 7).",
    "Mezclar decenas con unidades al sumar en columna: cada cifra va en su columna.",
    "Empezar por las decenas: en las cuentas en columna se empieza siempre por las unidades.",
    "Olvidar escribir el signo = o el resultado.",
  ],
  ejercicios: [
    { q: "2 + 2 =", sol: "4." },
    { q: "5 + 4 =", sol: "9." },
    { q: "3 + 7 =", sol: "10." },
    { q: "1 + 8 =", sol: "9 (piensa 8 + 1)." },
    { q: "Dibuja 3 pelotas y 3 pelotas más. ¿Cuántas hay?", sol: "6 pelotas: 3 + 3 = 6." },
    { q: "Completa: 4 + __ = 6.", sol: "2." },
    { q: "Calcula 20 + 30.", sol: "50 (2 decenas + 3 decenas = 5 decenas)." },
    { q: "Calcula 31 + 25.", sol: "56." },
    { q: "Calcula 14 + 4.", sol: "18." },
    { q: "Escribe dos sumas que den 10.", sol: "Por ejemplo, 5 + 5 y 7 + 3." },
  ],
  quiz: [
    { q: "Sumar es…", o: ["quitar", "juntar", "repartir"], a: 1, e: "Juntamos grupos." },
    { q: "3 + 2 =", o: ["5", "1", "6"], a: 0, e: "3, y dos más: 4, 5." },
    { q: "¿Cómo se lee +?", o: ["menos", "igual", "más"], a: 2, e: "El signo + se lee «más»." },
    { q: "6 + 0 =", o: ["0", "6", "60"], a: 1, e: "Sumar 0 no cambia nada." },
    { q: "4 + 4 =", o: ["8", "44", "6"], a: 0, e: "Es un doble." },
    { q: "2 + 7 es igual que…", o: ["7 + 2", "7 − 2", "2 + 2"], a: 0, e: "El orden no cambia el resultado." },
    { q: "10 + 20 =", o: ["12", "30", "210"], a: 1, e: "1 decena + 2 decenas = 3 decenas." },
    { q: "Al sumar en columna empiezo por…", o: ["las decenas", "las unidades", "el resultado"], a: 1, e: "Primero las unidades." },
    { q: "23 + 5 =", o: ["28", "73", "25"], a: 0, e: "3 + 5 = 8 unidades; 2 decenas." },
    { q: "Llegan 3 amigos a una fiesta de 4: ¿qué hago?", o: ["Restar", "Sumar", "Comparar"], a: 1, e: "«Llegan» indica suma." },
  ],
  examen: [
    { q: "5 + 3 =", o: ["8", "2", "53"], a: 0, e: "5, y tres más: 6, 7, 8." },
    { q: "40 + 50 =", o: ["9", "90", "45"], a: 1, e: "4 decenas + 5 decenas." },
    { q: "1 + 9 =", o: ["10", "8", "19"], a: 0, e: "9 + 1 = 10." },
    { q: "62 + 16 =", o: ["78", "88", "46"], a: 0, e: "2 + 6 = 8; 6 + 1 = 7." },
  ],
  feynman: ["Qué significa sumar", "Cómo sumo con los dedos o en la recta", "Cómo sumo números de dos cifras"],
  mapa: mapa("LA SUMA", "var(--pri)", [
    ["Qué es", "juntar o añadir", "var(--pen)"],
    ["Signos", "+ más · = igual", "var(--red)"],
    ["Cómo", "dedos · dibujos · recta", "var(--leaf)"],
    ["Dos cifras", "U con U · D con D", "var(--sun)"],
  ], 220),
  tarjetas: [
    ["¿Qué es sumar?", "Juntar o añadir"],
    ["3 + 3", "6"],
    ["5 + 5", "10"],
    ["¿Cambia el resultado si cambio el orden?", "No: 2 + 5 = 5 + 2"],
    ["7 + 0", "7"],
    ["En columna, ¿qué sumo primero?", "Las unidades"],
    ["21 + 12", "33"],
    ["Palabras de suma", "llegan, añadimos, me dan, en total"],
  ],
  familias: [
    "Inventad problemas en casa: «Hay 3 platos en la mesa y pongo 2 más, ¿cuántos hay?».",
    "Jugad con dos dados: sumad los puntos y gana quien saque más.",
    "Practicad los dobles con palmadas: 2 y 2, 3 y 3…",
    "Dejad que use los dedos: es normal y ayuda a entender.",
  ],
  profesores: PROF("Sentido numérico: significado de la suma (juntar y añadir), estrategias de cálculo mental (contar a partir de, dobles, propiedad conmutativa) y algoritmo sin llevadas", ["Recta numérica en el suelo para sumar saltando.", "Dominós para trabajar los dobles.", "Tienda de clase con precios de 1 a 10 euros."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
