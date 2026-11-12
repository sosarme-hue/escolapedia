// Matemáticas 1º de Primaria. Tema modelo para 1º de Primaria: frases cortas, un dibujo en cada bloque,
// actividades sencillas con la solución para las familias. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { svg, num, txt, moneda } = require("./_pri1");

const BG = `<rect width="260" height="180" rx="14" fill="var(--paper)"/>`;
// Fila de puntos para contar.
const puntos = (n, x, y, color = "var(--pen)", sep = 22) => [...Array(n)].map((_, i) => `<circle cx="${x + i * sep}" cy="${y}" r="8" fill="${color}"/>`).join("");
// Manzana sencilla.
const manzana = (x, y) => `<g transform="translate(${x} ${y})"><circle r="11" fill="var(--red)"/><path d="M0 -10 q2 -7 6 -9" stroke="var(--ink)" stroke-width="2" fill="none"/><ellipse cx="6" cy="-15" rx="5" ry="3" fill="var(--leaf)"/></g>`;

module.exports = {
  materia: "Matemáticas",
  curso: "1-primaria",
  titulo: "Los números hasta el 10",
  minutos: 20,
  objetivos: ["Contar objetos hasta 10", "Leer y escribir los números del 0 al 10", "Saber qué número va antes y después"],
  claves: ["contar", "número", "cero", "antes", "después"],
  pregunta: {
    texto: "Mira tus manos. ¿Cuántos dedos tienes? Cuéntalos tocando cada dedo una sola vez.",
    respuesta: "Tienes <mark>10 dedos</mark>: 5 en cada mano. Los dedos son una calculadora que siempre llevas contigo.",
  },
  bloques: [
    {
      html: `<h3>Contamos de uno en uno</h3><p>Para contar, tocamos <mark>cada cosa una vez</mark> y decimos un número: uno, dos, tres…</p><p>El último número que decimos es <b>cuántas cosas hay</b>.</p><p>Si nos saltamos algo o lo contamos dos veces, el número sale mal. Un truco: <b>señala con el dedo</b> o aparta cada cosa cuando la cuentes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cinco manzanas en fila con los números 1, 2, 3, 4 y 5 debajo">${BG}
        ${[0, 1, 2, 3, 4].map((i) => `${manzana(40 + i * 45, 70)}<text x="${40 + i * 45}" y="118" text-anchor="middle" font-size="22" font-weight="800" fill="var(--pen)" ${D}>${i + 1}</text>`).join("")}
        <text x="130" y="160" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" ${F}>¡Hay 5 manzanas!</text></svg>`,
    },
    {
      html: `<h3>Los números del 0 al 10</h3><p>Cada cantidad tiene su número. El <b>0</b> es el número de <mark>nada</mark>: un plato sin galletas tiene 0 galletas.</p><p>Después del 9 viene el <b>10</b>, que se escribe con dos cifras: un 1 y un 0.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los números del 0 al 10 escritos en dos filas">${BG}
        ${[0, 1, 2, 3, 4, 5].map((n, i) => `<rect x="${12 + i * 40}" y="22" width="34" height="44" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="${29 + i * 40}" y="56" text-anchor="middle" font-size="26" font-weight="800" fill="var(--pen)" ${D}>${n}</text>`).join("")}
        ${[6, 7, 8, 9, 10].map((n, i) => `<rect x="${32 + i * 40}" y="88" width="34" height="44" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="${49 + i * 40}" y="122" text-anchor="middle" font-size="${n === 10 ? 22 : 26}" font-weight="800" fill="var(--pen)" ${D}>${n}</text>`).join("")}
        <text x="130" y="162" text-anchor="middle" font-size="14" font-weight="700" fill="var(--muted)" ${F}>0 es nada · 10 son dos manos</text></svg>`,
      video: { id: "qHkEDhTaPnk", titulo: "Los números del 1 al 10: aprende a escribir y a contar", canal: "Smile and Learn - Español", vistas: 5000425, megusta: 0 },
    },
    {
      html: `<h3>Cada número, una cantidad</h3><p>El número dice <mark>cuántos hay</mark>, aunque las cosas sean grandes o pequeñas.</p><p>3 elefantes y 3 hormigas son <b>3</b> en los dos casos.</p><p>También da igual cómo estén colocadas. Tres pelotas juntas o tres pelotas separadas siguen siendo <b>tres</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres círculos grandes y tres círculos pequeños: los dos grupos tienen 3">${BG}
        ${[0, 1, 2].map((i) => `<circle cx="${45 + i * 40}" cy="60" r="17" fill="var(--inf)"/>`).join("")}
        ${[0, 1, 2].map((i) => `<circle cx="${60 + i * 25}" cy="120" r="6" fill="var(--inf)"/>`).join("")}
        <g font-size="30" font-weight="800" fill="var(--pen)" ${D}><text x="200" y="70">3</text><text x="200" y="130">3</text></g></svg>`,
    },
    {
      html: `<h3>Antes y después</h3><p>Los números van <mark>en fila</mark>, siempre en el mismo orden.</p><p>El número que va <b>después</b> tiene uno más. El que va <b>antes</b> tiene uno menos. Antes del 5 está el 4; después del 5 está el 6.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Recta numérica del 0 al 10 con el 5 marcado; el 4 va antes y el 6 va después">${BG}
        <path d="M18 100 H 242" stroke="var(--ink)" stroke-width="3"/>
        ${[...Array(11)].map((_, i) => `<path d="M${22 + i * 21.6} 92 V 108" stroke="var(--ink)" stroke-width="2"/><text x="${22 + i * 21.6}" y="132" text-anchor="middle" font-size="15" font-weight="700" fill="${i === 5 ? "var(--red)" : "var(--ink)"}" ${D}>${i}</text>`).join("")}
        <circle cx="130" cy="100" r="9" fill="var(--red)"/>
        <g font-size="13" font-weight="700" text-anchor="middle" ${F}><text x="90" y="62" fill="var(--leaf)">antes</text><text x="172" y="62" fill="var(--pen)">después</text></g>
        <path d="M95 68 L 106 88 M167 68 L 154 88" stroke="var(--muted)" stroke-width="2"/></svg>`,
    },
    {
      html: `<h3>Más, menos e igual</h3><p>Si dos grupos tienen el mismo número, hay <b>igual</b>. Para saber dónde hay <mark>más</mark>, une cada cosa con una del otro grupo: donde sobran, hay más.</p><p>Si no sobra ninguno, los dos grupos tienen <b>lo mismo</b>. Usamos las palabras <mark>más</mark>, <mark>menos</mark> e <mark>igual</mark> para comparar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro puntos arriba y seis abajo unidos por parejas: abajo sobran dos, abajo hay más">${BG}
        ${puntos(4, 50, 50, "var(--pen)", 30)}${puntos(6, 50, 120, "var(--leaf)", 30)}
        ${[0, 1, 2, 3].map((i) => `<path d="M${50 + i * 30} 60 V 110" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 3"/>`).join("")}
        <text x="215" y="165" text-anchor="middle" font-size="13" font-weight="700" fill="var(--leaf)" ${F}>¡sobran 2!</text>
        <text x="200" y="56" font-size="15" font-weight="800" fill="var(--pen)" ${D}>4</text><text x="232" y="126" font-size="15" font-weight="800" fill="var(--leaf)" ${D}>6</text></svg>`,
    },
    {
      html: `<h3>Escribir los números</h3><p>Cada número tiene su forma. Para escribirlo bien, <mark>empezamos por arriba</mark> y seguimos las flechas.</p><p>El 1 es un palito. El 0 es una vuelta redonda, como un huevo. El 8 son dos bolitas, una encima de otra. Si te sale al revés, no pasa nada: mira el modelo y vuelve a probar.</p>`,
      svg: svg("Los números 1, 0 y 8 con flechas que muestran cómo se escriben empezando por arriba", `${num(55, 120, "1", "var(--line)", 90)}${num(130, 120, "0", "var(--line)", 90)}${num(205, 120, "8", "var(--line)", 90)}<g fill="var(--red)"><circle cx="58" cy="58" r="6"/><circle cx="130" cy="56" r="6"/><circle cx="205" cy="56" r="6"/></g><path d="M58 64 V 112" stroke="var(--red)" stroke-width="3" marker-end="none"/><path d="M52 104 L 58 116 L 64 104" stroke="var(--red)" stroke-width="3" fill="none"/>${txt(130, 160, "Empieza en el punto rojo", "var(--red)")}`),
    },
    {
      html: `<h3>Los números ordinales</h3><p>Cuando hacemos una fila, decimos quién va <b>primero</b>, segundo, tercero… Son los <mark>números de la posición</mark>.</p><p>En una carrera, el que llega antes es el primero. El que llega después es el segundo. Y el siguiente, el tercero.</p>`,
      svg: svg("Podio con primero, segundo y tercero", `<rect x="100" y="70" width="60" height="70" fill="var(--sun)"/><rect x="40" y="95" width="60" height="45" fill="var(--line)"/><rect x="160" y="110" width="60" height="30" fill="var(--red)" opacity=".7"/>${num(130, 115, "1º", "var(--ink)", 26)}${num(70, 128, "2º", "var(--ink)", 22)}${num(190, 133, "3º", "var(--card)", 18)}<g fill="var(--pen)"><circle cx="130" cy="50" r="12"/><circle cx="70" cy="75" r="12"/><circle cx="190" cy="90" r="12"/></g>${txt(130, 165, "primero · segundo · tercero")}`),
    },
    {
      html: `<h3>¿Para qué sirven los números?</h3><p>Los números están <mark>por todas partes</mark>: en el portal de tu casa, en el autobús, en el reloj y en los precios de la tienda.</p><p>Sirven para contar cuántos hay, para saber el orden y para dar nombre a las cosas, como el número de tu camiseta.</p>`,
      svg: svg("Un autobús con el número 7, un portal con el número 3 y una moneda de 2 euros", `<rect x="20" y="50" width="110" height="55" rx="10" fill="var(--sun)"/><rect x="30" y="60" width="25" height="18" fill="var(--card)"/><rect x="62" y="60" width="25" height="18" fill="var(--card)"/><rect x="94" y="58" width="28" height="22" rx="4" fill="var(--ink)"/>${num(108, 76, "7", "var(--sun)", 18)}<circle cx="45" cy="108" r="9" fill="var(--ink)"/><circle cx="105" cy="108" r="9" fill="var(--ink)"/><rect x="150" y="40" width="50" height="70" rx="4" fill="var(--leaf)" opacity=".7"/><rect x="165" y="20" width="20" height="16" rx="3" fill="var(--card)" stroke="var(--ink)"/>${num(175, 33, "3", "var(--ink)", 13)}${moneda(225, 90, "2 €", 20)}${txt(130, 160, "autobús · portal · dinero")}`),
    },
    {
      html: `<h3>Juego: el número escondido</h3><p>Mira la fila de números. Falta uno. <mark>¿Cuál es?</mark></p><p>Cuenta desde el principio: 0, 1, 2, 3, 4, 5, 6… ¡Después del 6 debería venir el 7! El número escondido es el <b>7</b>. Ahora juega tú: tapa un número con el dedo y pide a alguien que lo adivine.</p>`,
      svg: svg("Fila de números del 0 al 10 con el 7 tapado por un signo de interrogación", `${[...Array(11)].map((_, i) => i === 7 ? `<rect x="${8 + i * 22.5}" y="65" width="20" height="34" rx="5" fill="var(--red)"/>${num(18 + i * 22.5, 90, "?", "var(--card)", 18)}` : num(18 + i * 22.5, 90, i, "var(--pen)", 18)).join("")}${txt(130, 140, "¿Qué número falta?", "var(--red)", 16)}`),
    },
  ],
  figura: {
    titulo: "Los dedos cuentan hasta 10",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Del 1 al 5 se cuenta con una mano; del 6 al 10, con una mano entera más los dedos de la otra">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${(() => {
        const mano = (x, y, n) => [...Array(5)].map((_, d) => `<rect x="${x + d * 9}" y="${d < n ? y : y + 24}" width="7" height="${d < n ? 40 : 16}" rx="3.5" fill="${d < n ? "var(--sun)" : "var(--line)"}"/>`).join("");
        return [...Array(10)].map((_, i) => {
          const n = i + 1, col = i % 5, fila = Math.floor(i / 5);
          const x = 30 + col * 122, y = 40 + fila * 130;
          const manos = n <= 5 ? mano(x + 30, y, n) : mano(x + 6, y, 5) + mano(x + 56, y, n - 5);
          return `<g>${manos}<text x="${x + 52}" y="${y + 84}" text-anchor="middle" font-size="28" font-weight="800" fill="var(--pen)" ${D}>${n}</text></g>`;
        }).join("");
      })()}
      <text x="320" y="24" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" ${F}>Una mano entera = 5 · Dos manos = 10</text>
    </svg>`,
  },
  video: { id: "4NygYKY2KMg", titulo: "Aprende los números del 1 al 10", canal: "Tino - Juguetes y Niños", vistas: 121784724, megusta: 0, busqueda: "números del 1 al 10 para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuántas estrellas hay? ⭐⭐⭐⭐⭐⭐⭐",
      pasos: ["Toca la primera estrella y di «uno».", "Sigue tocando cada estrella una vez: dos, tres, cuatro, cinco, seis, siete.", "El último número que has dicho es el siete."],
      resultado: "hay 7 estrellas." },
    { enunciado: "¿Qué número va después del 8? ¿Y antes?",
      pasos: ["Cuenta desde el principio: …, 6, 7, 8, 9, 10.", "Después del 8 viene el 9 (uno más).", "Antes del 8 está el 7 (uno menos)."],
      resultado: "después del 8 va el 9; antes del 8 va el 7." },
    { enunciado: "En la fila del comedor, Marta va primera, Iván segundo y Sara tercera. ¿Quién va justo detrás de Iván?", pasos: ["Ordena la fila: 1º Marta, 2º Iván, 3º Sara.", "Detrás del segundo va el tercero.", "La tercera es Sara."], resultado: "detrás de Iván va Sara." },
  ],
  errores: [
    "Contar dos veces la misma cosa o saltarse una: toca o tacha cada cosa al contarla.",
    "Escribir algunos números al revés, como el 3 o el 7: mira el modelo y empieza siempre por arriba.",
    "Pensar que hay más cosas cuando son más grandes: el número solo dice cuántas hay.",
    "Decir los números muy rápido sin tocar las cosas: la boca va más deprisa que el dedo y el resultado sale mal.",
  ],
  ejercicios: [
    { q: "Cuenta los dedos de una mano.", sol: "5 dedos." },
    { q: "Dibuja 4 círculos en tu cuaderno.", sol: "Deben quedar 4 círculos: compruébalo contando juntos." },
    { q: "¿Qué número va después del 6?", sol: "El 7." },
    { q: "¿Qué número va antes del 10?", sol: "El 9." },
    { q: "Completa la fila: 1, 2, 3, __, 5, __, 7.", sol: "4 y 6." },
    { q: "Ana tiene 3 cromos y Leo tiene 5. ¿Quién tiene más?", sol: "Leo, porque 5 es más que 3." },
    { q: "Escribe los números del 0 al 10 en tu cuaderno.", sol: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10." },
    { q: "¿Qué número falta? 5, 6, __, 8, 9.", sol: "El 7." },
    { q: "Busca en casa algo que tenga un número escrito y dilo en voz alta.", sol: "Por ejemplo, el mando de la tele, el reloj o un calendario." },
    { q: "En una carrera, Pablo llega después de Lucía, que es la primera. ¿En qué posición llega Pablo?", sol: "Segundo." },
  ],
  quiz: [
    { q: "¿Cuántos dedos tienes en una mano?", o: ["5", "10", "4"], a: 0, e: "Una mano tiene 5 dedos." },
    { q: "¿Qué número va después del 4?", o: ["3", "5", "6"], a: 1, e: "Después viene uno más: 5." },
    { q: "Un plato vacío tiene…", o: ["1 galleta", "0 galletas", "10 galletas"], a: 1, e: "Cero es nada." },
    { q: "¿Qué número es más grande?", o: ["2", "9", "6"], a: 1, e: "El 9 va más lejos en la fila de los números." },
    { q: "¿Qué número va antes del 7?", o: ["6", "8", "5"], a: 0, e: "Antes va uno menos: 6." },
    { q: "Dos manos tienen…", o: ["5 dedos", "8 dedos", "10 dedos"], a: 2, e: "5 + 5 = 10." },
    { q: "¿Qué número falta? 2, 3, __, 5", o: ["4", "6", "1"], a: 0, e: "Después del 3 va el 4." },
    { q: "El que llega antes a la meta es el…", o: ["segundo", "primero", "tercero"], a: 1, e: "El primero llega antes que nadie." },
    { q: "3 elefantes y 3 hormigas: ¿dónde hay más?", o: ["Elefantes", "Hormigas", "Igual"], a: 2, e: "Hay 3 en los dos grupos." },
    { q: "¿Qué número es más pequeño?", o: ["8", "1", "5"], a: 1, e: "El 1 está más cerca del 0." },
  ],
  examen: [
    { q: "¿Qué número va entre el 2 y el 4?", o: ["3", "5", "1"], a: 0, e: "2, 3, 4." },
    { q: "¿Dónde hay más: en un grupo de 7 o en uno de 4?", o: ["En el de 4", "En el de 7", "Igual"], a: 1, e: "7 es más que 4." },
    { q: "El número de nada es…", o: ["el 1", "el 10", "el 0"], a: 2, e: "Cero." },
    { q: "Después del 9 viene el…", o: ["8", "10", "0"], a: 1, e: "9 + 1 = 10." },
  ],
  feynman: ["Cómo se cuenta sin equivocarse", "Qué significa el 0", "Qué número va antes y después de otro"],
  mapa: mapa("NÚMEROS HASTA EL 10", "var(--pri)", [
    ["Contar", "tocar cada cosa una vez", "var(--pen)"],
    ["Del 0 al 10", "0 es nada · 10 son dos manos", "var(--leaf)"],
    ["Antes y después", "uno menos · uno más", "var(--red)"],
    ["Comparar", "más · menos · igual", "var(--inf)"],
  ], 220),
  tarjetas: [
    ["¿Cuántos dedos hay en dos manos?", "10"],
    ["¿Qué número es «nada»?", "El 0"],
    ["¿Qué va después del 5?", "El 6"],
    ["¿Qué va antes del 3?", "El 2"],
    ["¿Dónde hay más: 8 o 6?", "En 8"],
    ["¿Cómo cuento sin equivocarme?", "Tocando cada cosa una sola vez."],
    ["¿Quién va delante del segundo?", "El primero"],
    ["¿Por dónde empiezo a escribir un número?", "Por arriba"],
  ],
  familias: [
    "Contad cosas de casa juntos: escalones, cucharas, zapatos. Pedidle que toque cada cosa al contar.",
    "Jugad a «¿qué número va después?» en el coche o en la cola del súper.",
    "Señalad números en la calle (portales, matrículas, autobuses) y leedlos juntos.",
    "Si escribe algún número al revés, es normal a esta edad: enseñadle el modelo sin regañar.",
  ],
  profesores: {
    saberes: "Sentido numérico: conteo, cardinalidad, lectura y escritura de números hasta el 10 y relación de orden (RD 157/2022, Matemáticas, primer ciclo).",
    ideas: ["Rincón de conteo con tapones y huevera de 10.", "Recta numérica en el suelo para saltar «uno más» y «uno menos».", "Bingo de cantidades: el docente muestra dedos y el alumnado tacha el número."],
  },
  fuentes: [
    { t: "Real Decreto 157/2022, enseñanzas mínimas de la Educación Primaria (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296" },
  ],
  revisado: "2026-11-12",
};
