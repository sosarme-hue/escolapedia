// Ciencias Sociales 1º de Primaria. Formato ampliado de 1º: frases cortas y un dibujo propio en cada bloque.
const { mapa } = require("./_util");
const { F, D, BG, txt, persona, sol, luna, nube, arbol, flor, casa, check, RD } = require("./_peques");

const DIAS = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const estrella = (x, y, r = 4) => `<path transform="translate(${x} ${y})" d="M0 ${-r} L ${r * 0.3} ${-r * 0.3} L ${r} 0 L ${r * 0.3} ${r * 0.3} L 0 ${r} L ${-r * 0.3} ${r * 0.3} L ${-r} 0 L ${-r * 0.3} ${-r * 0.3} Z" fill="var(--sun)"/>`;
const tierra = (x, y, r = 30) => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="var(--water)"/><path d="M${x - r * 0.5} ${y - r * 0.5} q ${r * 0.3} ${-r * 0.2} ${r * 0.5} ${r * 0.1} q ${r * 0.1} ${r * 0.4} ${-r * 0.2} ${r * 0.6} q ${-r * 0.4} ${r * 0.1} ${-r * 0.3} ${-r * 0.7} Z M${x + r * 0.2} ${y + r * 0.1} q ${r * 0.4} ${-r * 0.1} ${r * 0.5} ${r * 0.3} q ${-r * 0.1} ${r * 0.4} ${-r * 0.4} ${r * 0.3} Z" fill="var(--leaf)"/></g>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: "1-primaria",
  titulo: "El día, la noche y el calendario",
  minutos: 25,
  objetivos: ["Distinguir el día y la noche y las partes del día", "Decir en orden los días de la semana y los meses del año", "Conocer las cuatro estaciones", "Usar un calendario sencillo"],
  claves: ["día", "noche", "semana", "mes", "año", "estación", "calendario"],
  pregunta: {
    texto: "¿Por qué por la mañana hay luz y por la noche está oscuro?",
    respuesta: "Porque la <mark>Tierra gira</mark> como una peonza. Cuando nuestro lado mira al <b>Sol</b>, es de día. Cuando mira hacia el otro lado, es de <b>noche</b>.",
  },
  bloques: [
    {
      html: `<h3>El día y la noche</h3><p>Durante el <mark>día</mark> hay luz porque brilla el <b>Sol</b>. Vamos al cole, jugamos y trabajamos.</p><p>Por la <mark>noche</mark> está oscuro. En el cielo vemos la <b>Luna</b> y las estrellas. Encendemos las luces.</p><p>La noche es para descansar y dormir. Así mañana tendremos energía.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La misma casa de día con sol y de noche con luna y estrellas">${BG}
        <rect x="14" y="14" width="112" height="152" rx="10" fill="var(--water)" fill-opacity=".2"/><rect x="134" y="14" width="112" height="152" rx="10" fill="#1d2a4d"/>
        ${sol(70, 48, 14)}${casa(70, 140, 1)}
        ${luna(196, 48, 15)}${estrella(160, 34)}${estrella(228, 72)}${estrella(170, 80, 3)}
        <g transform="translate(190 140)"><rect x="-26" y="-36" width="52" height="36" fill="#3b4a72" stroke="var(--ink)" stroke-width="2"/><path d="M-32 -36 L 0 -60 L 32 -36 Z" fill="#7a3030"/><rect x="-21" y="-30" width="10" height="10" fill="var(--sun)"/><rect x="11" y="-30" width="10" height="10" fill="var(--sun)"/><rect x="-7" y="-20" width="14" height="20" fill="#2a3a8a"/></g>
        ${txt(70, 160, "día", { size: 13, color: "var(--pen)" })}${txt(190, 160, "noche", { size: 13, color: "#fff" })}</svg>`,
    },
    {
      html: `<h3>¿Por qué hay día y noche?</h3><p>La <mark>Tierra</mark> es redonda como una pelota. Y siempre está <b>girando</b>, como una peonza.</p><p>El lado de la Tierra que mira al Sol tiene luz: allí es de <b>día</b>. El otro lado está a oscuras: allí es de <b>noche</b>.</p><p>La Tierra tarda un día entero en dar una vuelta. Por eso cada día sale el Sol.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El Sol ilumina la mitad de la Tierra; la otra mitad está a oscuras">${BG}
        ${sol(46, 90, 26)}
        ${tierra(180, 90, 46)}<path d="M180 44 A 46 46 0 0 1 180 136 Z" fill="#1b2235" fill-opacity=".55"/>
        <path d="M120 40 A 70 30 0 0 1 240 40" stroke="var(--muted)" stroke-width="2" fill="none"/><path d="M234 34 L 240 40 L 232 44" stroke="var(--muted)" stroke-width="2" fill="none"/>
        ${txt(154, 160, "día", { size: 13, color: "var(--pen)" })}${txt(212, 160, "noche", { size: 13, color: "var(--ink)" })}</svg>`,
    },
    {
      html: `<h3>Las partes del día</h3><p>El día tiene <mark>partes</mark>. En cada parte hacemos cosas distintas.</p><p>Por la <b>mañana</b> nos levantamos, desayunamos y vamos al cole. Al <b>mediodía</b> comemos.</p><p>Por la <b>tarde</b> jugamos, merendamos y hacemos los deberes. Por la <b>noche</b> cenamos, nos bañamos y nos vamos a dormir.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro dibujos del sol y la luna: mañana, mediodía, tarde y noche">${BG}
        ${[["mañana", "#fde9c8", 0.5], ["mediodía", "#d6ecff", 0.15], ["tarde", "#ffd6b0", 0.55], ["noche", "#1d2a4d", 0]].map(([t, bg, h], i) => {
          const x = 14 + i * 60;
          return `<rect x="${x}" y="30" width="54" height="96" rx="8" fill="${bg}"/>${i < 3 ? sol(x + 27, 50 + h * 80, 10) : luna(x + 27, 64, 12) + estrella(x + 12, 46) + estrella(x + 44, 90, 3)}<path d="M${x} 112 H ${x + 54}" stroke="var(--leaf)" stroke-width="3"/>${txt(x + 27, 146, t, { size: 11 })}`;
        }).join("")}</svg>`,
    },
    {
      html: `<h3>La semana</h3><p>Una <mark>semana</mark> tiene <b>siete días</b>: lunes, martes, miércoles, jueves, viernes, sábado y domingo.</p><p>De lunes a viernes vamos al cole. Son los días <b>laborables</b>.</p><p>El sábado y el domingo son el <b>fin de semana</b>. Descansamos y estamos con la familia. ¡Y luego vuelve el lunes!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Siete casillas con los días de la semana; sábado y domingo en otro color">${BG}
        ${DIAS.map((d, i) => { const x = 16 + i * 33; const fin = i > 4; return `<rect x="${x}" y="50" width="30" height="70" rx="6" fill="${fin ? "var(--red)" : "var(--pen)"}" fill-opacity="${fin ? ".2" : ".14"}" stroke="${fin ? "var(--red)" : "var(--pen)"}" stroke-width="2"/>${txt(x + 15, 92, d.slice(0, 2).toUpperCase(), { size: 13, color: fin ? "var(--red)" : "var(--pen)", font: D, weight: 800 })}`; }).join("")}
        ${txt(90, 144, "cole", { size: 13, color: "var(--pen)" })}${txt(213, 144, "fin de semana", { size: 12, color: "var(--red)" })}
        ${txt(130, 34, "7 días", { size: 16, color: "var(--ink)", font: D, weight: 800 })}</svg>`,
      video: { id: "ZKbYDeQ_wNg", titulo: "Los días de la semana para niños - ¿Cuáles son los días de la semana?", canal: "Smile and Learn - Español", vistas: 2800530, megusta: 0 },
    },
    {
      html: `<h3>Los meses del año</h3><p>Un <mark>año</mark> tiene <b>doce meses</b>.</p><p>Enero, febrero, marzo, abril, mayo y junio. Julio, agosto, septiembre, octubre, noviembre y diciembre.</p><p>Cada mes tiene unas cuatro semanas. El año empieza el 1 de enero. Termina el 31 de diciembre. Cada año cumplimos un año más.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los doce meses del año en tres filas de cuatro">${BG}
        ${MESES.map((m, i) => { const x = 14 + (i % 3) * 80, y = 18 + Math.floor(i / 3) * 34; const c = ["var(--water)", "var(--leaf)", "var(--sun)", "var(--inf)"][Math.floor(((i + 1) % 12) / 3)]; return `<rect x="${x}" y="${y}" width="72" height="30" rx="6" fill="${c}" fill-opacity=".2" stroke="${c}" stroke-width="2"/>${txt(x + 36, y + 20, m, { size: 11 })}`; }).join("")}
        ${txt(130, 172, "12 meses = 1 año", { size: 13, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Las cuatro estaciones</h3><p>El año tiene <mark>cuatro estaciones</mark>.</p><p>En <b>primavera</b> salen las flores. En <b>verano</b> hace calor y tenemos vacaciones. En <b>otoño</b> caen las hojas y empieza el cole. En <b>invierno</b> hace frío y a veces nieva.</p><p>Cada estación dura unos tres meses. Después vuelve a empezar la primavera.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro cuadros: primavera con flores, verano con sol, otoño con hojas y invierno con nieve">${BG}
        ${[["primavera", "var(--leaf)"], ["verano", "var(--sun)"], ["otoño", "var(--inf)"], ["invierno", "var(--water)"]].map(([t, c], i) => `<rect x="${14 + i * 60}" y="30" width="54" height="96" rx="8" fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="2"/>${txt(41 + i * 60, 146, t, { size: 11 })}`).join("")}
        ${flor(32, 112, "var(--red)")}${flor(52, 112, "var(--inf)")}
        ${sol(101, 66, 12)}<path d="M80 112 H 122" stroke="#e3c37a" stroke-width="8"/>
        <g transform="translate(161 112)"><rect x="-3" y="-28" width="6" height="28" fill="#8a5a2b"/><circle cy="-38" r="14" fill="#d18b2a"/><ellipse cx="14" cy="-4" rx="4" ry="2.5" fill="#d18b2a"/></g>
        <g transform="translate(221 110)"><circle cy="-6" r="12" fill="#fff" stroke="var(--line)"/><circle cy="-26" r="8" fill="#fff" stroke="var(--line)"/><path d="M0 -24 l 6 2 l -6 2 Z" fill="var(--inf)"/></g>${[[200, 50], [214, 40], [236, 58], [228, 44]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.5" fill="#fff" stroke="var(--line)"/>`).join("")}</svg>`,
      video: { id: "LiI0lWmgmEE", titulo: "Las Estaciones del Año - Videos Educativos para Niños", canal: "lunacreciente", vistas: 4708696, megusta: 0 },
    },
    {
      html: `<h3>El calendario</h3><p>El <mark>calendario</mark> nos dice qué día es. Tiene una hoja para cada mes.</p><p>Cada casilla es un día. Las filas son las semanas.</p><p>En el calendario apuntamos los días especiales: los cumpleaños, las excursiones y las vacaciones. Así no se nos olvidan. ¡Y contamos los días que faltan!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Hoja de calendario de noviembre con un cumpleaños marcado">${BG}
        <rect x="30" y="18" width="200" height="150" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="30" y="18" width="200" height="28" rx="8" fill="var(--red)"/>
        ${txt(130, 38, "NOVIEMBRE", { size: 14, color: "#fff", font: D, weight: 800 })}
        ${["L", "M", "X", "J", "V", "S", "D"].map((d, i) => txt(46 + i * 28, 62, d, { size: 11, color: i > 4 ? "var(--red)" : "var(--muted)" })).join("")}
        ${[...Array(30)].map((_, k) => { const n = k + 1, pos = k + 6, c = pos % 7, f = Math.floor(pos / 7); return f < 5 ? txt(46 + c * 28, 82 + f * 18, String(n), { size: 11, color: c > 4 ? "var(--red)" : "var(--ink)", weight: 400 }) : ""; }).join("")}
        <circle cx="${46 + ((11 + 6) % 7) * 28}" cy="${78 + Math.floor((11 + 6) / 7) * 18}" r="9" fill="none" stroke="var(--pen)" stroke-width="2.5"/></svg>`,
    },
    {
      html: `<h3>Mis rutinas</h3><p>Cada día hacemos cosas a la misma hora. Son las <mark>rutinas</mark>.</p><p>Por la mañana: me despierto, me lavo, me visto y desayuno. Por la noche: ceno, me lavo los dientes y me acuesto. Antes de dormir, leemos un cuento.</p><p>Las rutinas nos ayudan a <b>organizarnos</b> y a no olvidar nada.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro pasos de la rutina de mañana: despertarse, lavarse, vestirse y desayunar">${BG}
        ${["me despierto", "me lavo", "me visto", "desayuno"].map((t, i) => `<rect x="${14 + i * 60}" y="40" width="54" height="86" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${txt(41 + i * 60, 32, String(i + 1), { size: 15, color: "var(--pen)", font: D, weight: 800 })}${txt(41 + i * 60, 146, t, { size: 10 })}`).join("")}
        ${sol(41, 70, 9)}<rect x="24" y="96" width="34" height="14" rx="4" fill="var(--pen)"/>
        <path d="M82 92 H 120 Q 118 112 101 112 Q 84 112 82 92 Z" fill="var(--water)" fill-opacity=".5" stroke="var(--ink)" stroke-width="2"/><path d="M92 92 V 70 H 106 V 76" stroke="var(--muted)" stroke-width="4" fill="none"/><circle cx="106" cy="82" r="2.5" fill="var(--water)"/><circle cx="106" cy="88" r="2" fill="var(--water)"/>
        <path d="M148 64 L 162 58 L 176 64 L 182 82 L 174 84 V 110 H 150 V 84 L 142 82 Z" fill="var(--red)"/>
        <path d="M206 94 H 236 L 232 110 H 210 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="214" y="72" width="16" height="20" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/></svg>`,
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saber los días, los meses y las estaciones nos ayuda a <mark>organizarnos</mark>.</p><p>Sabemos qué día toca Educación Física. Sabemos cuántos días faltan para un cumpleaños.</p><p>También sabemos qué ropa ponernos: en invierno, abrigo y bufanda; en verano, ropa fresca y gorra. ¡Y crema para el sol!</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un niño con abrigo y bufanda en invierno y otro con gorra en verano">${BG}
        <rect x="14" y="20" width="112" height="146" rx="10" fill="var(--water)" fill-opacity=".14"/><rect x="134" y="20" width="112" height="146" rx="10" fill="var(--sun)" fill-opacity=".14"/>
        ${persona(70, 156, 110, "var(--pen)")}<rect x="54" y="80" width="32" height="8" rx="3" fill="var(--red)"/><path d="M58 50 Q 70 32 82 50 Z" fill="var(--red)"/>
        ${persona(190, 156, 110, "var(--sun)")}<path d="M176 50 Q 190 34 204 50 Z M200 48 H 214" fill="var(--leaf)" stroke="var(--leaf)" stroke-width="3"/>${sol(232, 40, 9)}
        ${txt(70, 36, "invierno", { size: 12, color: "var(--water)" })}${txt(178, 36, "verano", { size: 12, color: "#b8860b" })}</svg>`,
    },
    {
      html: `<h3>Juego: el tren de los días</h3><p>Poneos en fila. Cada niño es un <mark>vagón</mark>. Dice un día de la semana en orden.</p><p>El primero dice «lunes». El segundo, «martes». Y así hasta «domingo». ¡Después se vuelve a empezar!</p><p>Luego jugad igual con los <b>doce meses</b>. ¿Quién dice tu mes de cumpleaños?</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un tren con siete vagones, cada uno con un día de la semana">${BG}
        <g transform="translate(26 110)"><rect x="-14" y="-34" width="30" height="34" rx="4" fill="var(--red)"/><rect x="-8" y="-46" width="8" height="14" fill="var(--ink)"/><circle cx="-6" r="5" fill="var(--ink)"/><circle cx="8" r="5" fill="var(--ink)"/></g>
        ${DIAS.map((d, i) => { const x = 46 + i * 30; return `<rect x="${x}" y="80" width="26" height="28" rx="3" fill="${i > 4 ? "var(--red)" : "var(--pen)"}" fill-opacity=".85"/>${txt(x + 13, 99, d.slice(0, 2).toUpperCase(), { size: 10, color: "#fff" })}<circle cx="${x + 6}" cy="110" r="4" fill="var(--ink)"/><circle cx="${x + 20}" cy="110" r="4" fill="var(--ink)"/>`; }).join("")}
        <path d="M14 116 H 246" stroke="var(--muted)" stroke-width="3"/>
        ${txt(130, 46, "¡Chu, chu!", { size: 16, color: "var(--pen)", font: D, weight: 800 })}</svg>`,
    },
  ],
  figura: {
    titulo: "El tiempo en el calendario",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Un día tiene día y noche; una semana, siete días; un año, doce meses y cuatro estaciones">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["1 DÍA", "día y noche", "var(--sun)"], ["1 SEMANA", "7 días", "var(--pen)"], ["1 MES", "unas 4 semanas", "var(--leaf)"], ["1 AÑO", "12 meses", "var(--red)"]].map(([t, d, c], i) => {
        const x = 90 + i * 153;
        return `<rect x="${x - 70}" y="60" width="140" height="170" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${txt(x, 160, t, { size: 24, color: c, font: D, weight: 800 })}${txt(x, 194, d, { size: 15 })}${i < 3 ? `<path d="M${x + 74} 145 L ${x + 80} 145" stroke="var(--muted)" stroke-width="3"/>` : ""}`;
      }).join("")}
      ${sol(68, 104, 14)}${luna(112, 104, 14)}
      ${txt(320, 36, "De lo más corto a lo más largo", { size: 18, color: "var(--muted)" })}
    </svg>`,
  },
  video: { id: "j0iZfzHDCys", titulo: "El día y la noche. El movimiento de rotación", canal: "Happy Learning Español", vistas: 1851288, megusta: 0, busqueda: "el día y la noche para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Hoy es miércoles. ¿Qué día será mañana? ¿Y qué día fue ayer?",
      pasos: ["Decimos los días en orden: lunes, martes, miércoles, jueves…", "Después del miércoles va el jueves.", "Antes del miércoles va el martes."],
      resultado: "mañana será jueves y ayer fue martes." },
    { enunciado: "Mi cumpleaños es en julio. ¿En qué estación es?",
      pasos: ["El verano empieza en junio.", "Julio y agosto son meses de verano.", "En verano hace calor y hay vacaciones."],
      resultado: "mi cumpleaños es en verano." },
    { enunciado: "Busca en el calendario el día 25 de diciembre. ¿Qué celebramos?",
      pasos: ["Buscamos la hoja de diciembre.", "Contamos hasta la casilla 25.", "Es un día de fiesta muy conocido."],
      resultado: "el 25 de diciembre es Navidad." },
  ],
  errores: [
    "Pensar que el Sol se mueve alrededor de nosotros: es la Tierra la que gira.",
    "Desordenar los días de la semana: hay que decirlos siempre en el mismo orden.",
    "Confundir los meses con las estaciones: el año tiene 12 meses y 4 estaciones.",
    "Creer que la Luna solo sale de noche: a veces también se ve de día.",
  ],
  ejercicios: [
    { q: "Di los días de la semana en orden.", sol: "Lunes, martes, miércoles, jueves, viernes, sábado y domingo." },
    { q: "¿Qué días no hay cole?", sol: "El sábado y el domingo." },
    { q: "Di los meses del año en orden.", sol: "Enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre y diciembre." },
    { q: "¿En qué mes es tu cumpleaños?", sol: "Respuesta libre." },
    { q: "Di las cuatro estaciones.", sol: "Primavera, verano, otoño e invierno." },
    { q: "¿En qué estación caen las hojas de muchos árboles?", sol: "En otoño." },
    { q: "Di algo que haces por la mañana y algo que haces por la noche.", sol: "Por ejemplo: desayunar y dormir." },
    { q: "¿Qué vemos en el cielo por la noche?", sol: "La Luna y las estrellas." },
    { q: "Busca hoy en un calendario y rodea la fecha.", sol: "Comprueba que encuentra el día correcto." },
    { q: "Dibuja tu estación favorita.", sol: "Respuesta libre." },
  ],
  quiz: [
    { q: "De día brilla…", o: ["el Sol", "la Luna", "una estrella fugaz"], a: 0, e: "El Sol." },
    { q: "Hay día y noche porque…", o: ["la Tierra gira", "el Sol se apaga", "llueve"], a: 0, e: "La Tierra gira." },
    { q: "Una semana tiene…", o: ["5 días", "7 días", "12 días"], a: 1, e: "Siete días." },
    { q: "Después del jueves va el…", o: ["miércoles", "viernes", "domingo"], a: 1, e: "El viernes." },
    { q: "El fin de semana es…", o: ["lunes y martes", "sábado y domingo", "jueves y viernes"], a: 1, e: "Sábado y domingo." },
    { q: "Un año tiene…", o: ["12 meses", "7 meses", "4 meses"], a: 0, e: "Doce meses." },
    { q: "El primer mes del año es…", o: ["diciembre", "enero", "marzo"], a: 1, e: "Enero." },
    { q: "¿Cuántas estaciones hay?", o: ["2", "4", "12"], a: 1, e: "Cuatro." },
    { q: "En invierno hace…", o: ["calor", "frío", "sol siempre"], a: 1, e: "Frío." },
    { q: "Al mediodía…", o: ["desayunamos", "comemos", "dormimos"], a: 1, e: "Comemos." },
  ],
  examen: [
    { q: "¿Qué va antes del sábado?", o: ["El viernes", "El domingo", "El lunes"], a: 0, e: "El viernes." },
    { q: "En primavera…", o: ["salen las flores", "nieva mucho", "caen las hojas"], a: 0, e: "Salen las flores." },
    { q: "El calendario sirve para…", o: ["saber qué día es", "cocinar", "medir"], a: 0, e: "Para saber la fecha." },
    { q: "El último mes del año es…", o: ["noviembre", "diciembre", "enero"], a: 1, e: "Diciembre." },
  ],
  feynman: ["Por qué hay día y noche", "Los días de la semana y los meses", "Las cuatro estaciones"],
  mapa: mapa("EL CALENDARIO", "var(--pri)", [
    ["Día y noche", "Sol · Luna · la Tierra gira", "var(--sun)"],
    ["Semana", "7 días · fin de semana", "var(--pen)"],
    ["Año", "12 meses", "var(--red)"],
    ["Estaciones", "primavera · verano · otoño · invierno", "var(--leaf)"],
  ], 250),
  tarjetas: [
    ["¿Por qué hay día y noche?", "Porque la Tierra gira"],
    ["¿Cuántos días tiene la semana?", "Siete"],
    ["¿Qué días son el fin de semana?", "Sábado y domingo"],
    ["¿Cuántos meses tiene el año?", "Doce"],
    ["¿Cuál es el primer mes?", "Enero"],
    ["¿Cuáles son las estaciones?", "Primavera, verano, otoño e invierno"],
    ["¿Qué vemos de noche?", "La Luna y las estrellas"],
    ["¿Para qué sirve el calendario?", "Para saber qué día es y apuntar fechas"],
  ],
  familias: [
    "Colgad un calendario en casa y que tache cada día al acostarse.",
    "Apuntad juntos los cumpleaños de la familia en el calendario.",
    "Cantad los días de la semana y los meses en el coche.",
    "Por la noche, salid a mirar la Luna unos días seguidos y dibujad cómo cambia.",
  ],
  profesores: {
    saberes: "Sociedades y territorios: el tiempo y su medida; el día y la noche, la semana, los meses y las estaciones; uso del calendario (RD 157/2022, Conocimiento del Medio Natural, Social y Cultural, primer ciclo).",
    ideas: ["Calendario de aula con el encargado del día que marca la fecha y el tiempo.", "Experiencia con una linterna y una pelota para ver el día y la noche.", "Mural de las cuatro estaciones con elementos que trae el alumnado."],
  },
  fuentes: [RD],
  revisado: "2026-11-12",
};
