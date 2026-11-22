// Matemáticas 2º de Primaria: el reloj, horas en punto, medias horas y cuartos.
const P = require("./_pri2a");
const { svg, num, txt, reloj, sol, luna, estrella, nino } = P;

// Reloj digital.
const digital = (x, y, t, w = 90) => `<g><rect x="${x - w / 2}" y="${y - 24}" width="${w}" height="40" rx="8" fill="var(--ink)"/>${num(x, y + 6, t, "var(--sun)", 22)}</g>`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "El reloj: horas y medias horas",
  objetivos: ["Conocer las partes del reloj de agujas", "Leer las horas en punto y las medias horas", "Leer los cuartos y relacionar el reloj de agujas con el digital"],
  claves: ["reloj", "hora", "minuto", "aguja corta", "aguja larga", "en punto", "y media", "y cuarto", "menos cuarto"],
  pregunta: ["El recreo empieza cuando la aguja corta está en el 11 y la larga en el 12. ¿Qué hora es?", "Si la aguja larga está en el <b>12</b>, es una hora <mark>en punto</mark>. La corta dice cuál: las <b>11 en punto</b>."],
  bloques: [
    ["El reloj de agujas", `<p>El <mark>reloj</mark> nos dice la hora. Tiene los números del <b>1 al 12</b> en círculo.</p><p>Tiene dos agujas. La <b>aguja corta</b> marca las <mark>horas</mark>. La <b>aguja larga</b> marca los <mark>minutos</mark>.</p><p>Las agujas siempre giran hacia el mismo lado: hacia la <b>derecha</b>, como las agujas del reloj.</p>`,
      svg("Un reloj con la aguja corta de las horas en rojo y la larga de los minutos en azul", `${reloj(90, 90, 66, 3, 0)}${txt(206, 70, "corta:", "var(--red)", 14)}${txt(206, 88, "horas", "var(--red)", 14)}${txt(206, 120, "larga:", "var(--pen)", 14)}${txt(206, 138, "minutos", "var(--pen)", 14)}`)],
    ["Las horas en punto", `<p>Cuando la <b>aguja larga</b> está en el <mark>12</mark>, decimos que es una hora <b>en punto</b>.</p><p>Miramos la <b>aguja corta</b> para saber qué hora es. Si señala el 3, son <b>las 3 en punto</b>.</p><p>Si señala el 8, son las 8 en punto. ¡Es la hora de ir al cole!</p>`,
      svg("Dos relojes: las 3 en punto y las 8 en punto", `${reloj(68, 80, 50, 3, 0)}${reloj(192, 80, 50, 8, 0)}${txt(68, 158, "las 3 en punto", "var(--ink)", 13)}${txt(192, 158, "las 8 en punto", "var(--ink)", 13)}`), P.V("relB")],
    ["Una hora tiene 60 minutos", `<p>La aguja larga tarda <mark>una hora</mark> en dar una vuelta completa al reloj.</p><p>Entre número y número pasan <b>5 minutos</b>. Como hay 12 números, una vuelta son 12 × 5 = <b>60 minutos</b>.</p><p>Por eso decimos: 1 hora = 60 minutos. ¡Puedes contar los minutos de 5 en 5 como en la tabla del 5!</p>`,
      svg("Un reloj con los minutos de cinco en cinco alrededor", `${reloj(130, 92, 58, 12, 0)}${[...Array(12)].map((_, i) => { const a = ((i + 1) * 30 - 90) * Math.PI / 180; return num((130 + Math.cos(a) * 76).toFixed(1), (96 + Math.sin(a) * 76).toFixed(1), ((i + 1) * 5) % 60 || 60, "var(--leaf)", 11); }).join("")}`)],
    ["Las medias horas", `<p>Cuando la aguja larga llega al <mark>6</mark>, ha dado <b>media vuelta</b>. Han pasado 30 minutos: <b>media hora</b>.</p><p>Decimos que son <b>«y media»</b>. La aguja corta está entre dos números: entre el 4 y el 5 son las <mark>4 y media</mark>.</p><p>Fíjate: la aguja corta ya va camino del número siguiente.</p>`,
      svg("Un reloj marca las cuatro y media con media esfera coloreada", `<path d="M90 90 V30 A60 60 0 0 1 90 150z" fill="var(--sun)" opacity=".3"/>${reloj(90, 90, 60, 4, 30)}${txt(200, 76, "las 4", "var(--ink)", 16)}${txt(200, 98, "y media", "var(--ink)", 16)}${digital(200, 136, "4:30", 80)}`)],
    ["Y cuarto y menos cuarto", `<p>Si la aguja larga está en el <mark>3</mark>, ha pasado un cuarto de vuelta: son <b>«y cuarto»</b>. Las 2 y cuarto.</p><p>Si está en el <mark>9</mark>, falta un cuarto para la hora siguiente: son <b>«menos cuarto»</b>.</p><p>Si la corta está casi en el 6 y la larga en el 9, son las <b>6 menos cuarto</b>.</p>`,
      svg("Dos relojes: las dos y cuarto y las seis menos cuarto", `${reloj(68, 80, 50, 2, 15)}${reloj(192, 80, 50, 5, 45)}${txt(68, 158, "2 y cuarto", "var(--ink)", 13)}${txt(192, 158, "6 menos cuarto", "var(--ink)", 13)}`)],
    ["El reloj digital", `<p>El <mark>reloj digital</mark> no tiene agujas: tiene <b>números</b>.</p><p>El número de la <b>izquierda</b> son las horas. El de la <b>derecha</b>, los minutos. Los separa el signo <b>:</b></p><p><b>7:00</b> son las 7 en punto. <b>7:30</b> son las 7 y media. <b>7:15</b> son las 7 y cuarto.</p>`,
      svg("Relojes digitales con 7:00, 7:15 y 7:30", `${digital(130, 46, "7:00")}${txt(130, 78, "las 7 en punto", "var(--ink)", 12)}${digital(66, 120, "7:15", 84)}${txt(66, 152, "7 y cuarto", "var(--ink)", 12)}${digital(194, 120, "7:30", 84)}${txt(194, 152, "7 y media", "var(--ink)", 12)}`)],
    ["Mañana, tarde y noche", `<p>Un día entero tiene <mark>24 horas</mark>. La aguja corta da <b>dos vueltas</b> al reloj cada día.</p><p>Por eso decimos «las 8 <b>de la mañana</b>» o «las 8 <b>de la tarde</b>». En el digital, las 8 de la tarde son las <b>20:00</b>.</p><p>Por la <b>mañana</b> vamos al cole, por la <b>tarde</b> jugamos y por la <b>noche</b> dormimos.</p>`,
      svg("El sol de la mañana, el de la tarde y la luna de la noche", `${sol(46, 70, 16)}${txt(46, 122, "mañana", "var(--ink)", 14)}<rect x="96" y="50" width="70" height="44" rx="8" fill="var(--sun)" opacity=".35"/>${sol(131, 76, 12)}${txt(131, 122, "tarde", "var(--ink)", 14)}<rect x="184" y="40" width="64" height="64" rx="10" fill="#1c2550"/>${luna(210, 62, 14)}${estrella(234, 82, 5, "#ffe9a0")}${txt(216, 122, "noche", "var(--ink)", 14)}${txt(130, 160, "1 día = 24 horas", "var(--pen)", 16)}`)],
    ["¿Para qué sirve?", `<p>El reloj nos ayuda a <b>organizar el día</b>.</p><p>A las 9 empieza el cole. A las 11 y media salimos al <b>recreo</b>. A las 2 comemos y a las 9 y media de la noche nos vamos a <b>dormir</b>.</p><p>Si sabes leer el reloj, sabrás cuánto <mark>falta</mark> para tu programa favorito.</p>`,
      svg("Un niño desayuna a las ocho en punto", `${reloj(64, 80, 50, 8, 0)}${nino(190, 160, { c: "var(--pen)", pose: "sentado" })}<rect x="150" y="122" width="90" height="8" fill="#c99a5b"/><ellipse cx="170" cy="118" rx="12" ry="4" fill="var(--card)" stroke="var(--ink)"/>${txt(64, 158, "desayuno a las 8", "var(--ink)", 12)}`)],
    ["Juego: ¡a mover las agujas!", `<p>Haz un reloj con un <b>plato de cartón</b>. Escribe los números del 1 al 12 y pon dos agujas con un encuadernador.</p><p>Una persona dice una hora: «¡Las 5 y media!». La otra mueve las agujas lo más rápido posible.</p><p>Recuerda: en «y media», la larga va al <mark>6</mark>. En punto, al <mark>12</mark>.</p>`,
      svg("Un reloj de cartón hecho con un plato: las cinco y media", `<circle cx="100" cy="90" r="74" fill="var(--sun)" fill-opacity=".35" stroke="var(--ink)" stroke-width="2"/>${reloj(100, 90, 60, 5, 30)}${P.bocadillo(200, 40, 100, "¡5 y media!")}${txt(200, 140, "larga → 6", "var(--pen)", 14)}`)],
  ],
  figura: ["Las horas en el reloj", `<svg viewBox="0 0 640 260" role="img" aria-label="Cuatro relojes: las tres en punto, las tres y cuarto, las tres y media y las cuatro menos cuarto">
    <rect width="640" height="260" rx="16" fill="var(--paper)"/>
    ${[[3, 0, "en punto", "3:00"], [3, 15, "y cuarto", "3:15"], [3, 30, "y media", "3:30"], [3, 45, "menos cuarto", "3:45"]].map(([h, m, t, d], i) => `${reloj(92 + i * 152, 100, 62, h, m)}${txt(92 + i * 152, 196, t, "var(--ink)", 16)}${num(92 + i * 152, 228, d, "var(--pen)", 20)}`).join("")}
  </svg>`],
  video: P.V("relV", true),
  ejemplos: [
    ["La aguja larga está en el 12 y la corta en el 10. ¿Qué hora es?", ["La larga en el 12: es en punto.", "La corta en el 10: son las 10."], "las 10 en punto."],
    ["La aguja larga está en el 6 y la corta entre el 1 y el 2. ¿Qué hora es?", ["La larga en el 6: es y media.", "La corta ha pasado el 1."], "la 1 y media."],
    ["En un reloj digital pone 9:15. ¿Cómo lo decimos?", ["A la izquierda, las horas: 9.", "A la derecha, 15 minutos: un cuarto."], "las 9 y cuarto."],
  ],
  errores: [
    "Confundir las agujas: la corta marca las horas y la larga los minutos.",
    "En «y media», leer la hora siguiente: entre el 4 y el 5 son las 4 y media, no las 5.",
    "Pensar que una hora tiene 100 minutos: tiene 60.",
    "Leer 6:30 como «las 6 y 30 horas»: son las 6 y media.",
  ],
  ejercicios: [
    ["¿Qué aguja marca las horas?", "La aguja corta."],
    ["¿Cuántos minutos tiene una hora?", "60 minutos."],
    ["Dibuja un reloj que marque las 7 en punto.", "Corta en el 7 y larga en el 12."],
    ["Dibuja un reloj que marque las 2 y media.", "Corta entre el 2 y el 3, larga en el 6."],
    ["¿Dónde está la aguja larga en «y cuarto»?", "En el 3."],
    ["¿Dónde está la aguja larga en «menos cuarto»?", "En el 9."],
    ["Escribe en digital: las 5 y media.", "5:30."],
    ["¿Cómo se dice 10:15?", "Las 10 y cuarto."],
    ["¿Cuántas horas tiene un día?", "24 horas."],
    ["Si son las 4 en punto, ¿qué hora será dentro de 1 hora?", "Las 5 en punto."],
  ],
  quiz: [
    ["La aguja larga marca…", ["los minutos", "las horas", "los días"], "La corta marca las horas."],
    ["Si la larga está en el 12, es…", ["en punto", "y media", "y cuarto"], "Ha dado la vuelta completa."],
    ["Si la larga está en el 6, es…", ["y media", "en punto", "menos cuarto"], "Ha dado media vuelta: 30 minutos."],
    ["Una hora tiene…", ["60 minutos", "100 minutos", "30 minutos"], "12 números × 5 minutos."],
    ["Media hora son…", ["30 minutos", "15 minutos", "50 minutos"], "La mitad de 60."],
    ["8:30 se dice…", ["las 8 y media", "las 8 y cuarto", "las 3 y 8"], "30 minutos = media hora."],
    ["La larga en el 3 es…", ["y cuarto", "menos cuarto", "y media"], "Un cuarto de vuelta."],
    ["Un día tiene…", ["24 horas", "12 horas", "60 horas"], "La aguja corta da dos vueltas."],
    ["Entre número y número del reloj pasan…", ["5 minutos", "1 minuto", "10 minutos"], "Contamos de 5 en 5."],
    ["Las 6 menos cuarto en digital es…", ["5:45", "6:45", "6:15"], "Faltan 15 minutos para las 6."],
  ],
  examen: [
    ["Corta en el 9 y larga en el 12 son…", ["las 9 en punto", "las 12 y 9", "las 9 y media"], "La larga en el 12: en punto."],
    ["Las 3 y media en digital es…", ["3:30", "3:00", "6:30"], "30 minutos después de las 3."],
    ["¿Cuántos minutos son un cuarto de hora?", ["15", "25", "4"], "60 entre 4 partes."],
    ["Si la corta está entre el 7 y el 8 y la larga en el 6, son…", ["las 7 y media", "las 8 y media", "las 6 y 7"], "Ha pasado de las 7."],
  ],
  feynman: ["Qué marca cada aguja del reloj", "Cómo sabemos que es «y media»", "Cuántos minutos tiene una hora y por qué"],
  mapa: ["EL RELOJ", [
    ["Aguja corta", "las horas", "var(--red)"],
    ["Aguja larga", "los minutos", "var(--pen)"],
    ["En punto", "larga en el 12", "var(--leaf)"],
    ["Y media", "larga en el 6", "var(--sun)"],
  ]],
  tarjetas: [
    ["¿Qué marca la aguja corta?", "Las horas"],
    ["¿Qué marca la aguja larga?", "Los minutos"],
    ["1 hora =", "60 minutos"],
    ["Larga en el 12", "En punto"],
    ["Larga en el 6", "Y media"],
    ["Larga en el 3", "Y cuarto"],
    ["Larga en el 9", "Menos cuarto"],
    ["¿Cómo se dice 4:30?", "Las 4 y media"],
  ],
  familias: [
    "Tened un reloj de agujas en casa a su altura y preguntadle la hora en momentos clave del día.",
    "Haced juntos un reloj con un plato de cartón y un encuadernador.",
    "Relacionad horas con rutinas: «a las 9 y media nos vamos a dormir».",
    "Comparad el reloj del horno o del móvil (digital) con el de agujas.",
  ],
  saberes: "Medida: el tiempo; lectura del reloj analógico (en punto, y media, y cuarto, menos cuarto) y digital; relación hora y minutos",
  ideas: ["Relojes individuales de cartón para mover las agujas.", "Horario visual de la jornada escolar con relojes dibujados.", "Juego del reloj humano: dos alumnos hacen de agujas en un círculo en el suelo."],
});

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Leer las horas y los cuartos en relojes de agujas y digitales", "Calcular cuánto dura una actividad", "Ordenar los momentos del día con horas", "Conocer los días, las semanas y otros relojes antiguos"],
  lectura: { titulo: "El despertador dormilón", html: `<p>Lucas tiene un despertador rojo con dos agujas y una campanita. Todas las noches lo pone a las ocho en punto para no llegar tarde al cole.</p><p>Pero una mañana el despertador no suena. Lucas se despierta solo, mira el reloj y ve la aguja corta en el 8 y la larga en el 6.</p><p>—¡Son las ocho y media! —grita—. ¡Llego tarde!</p><p>Se viste corriendo, desayuna en un minuto y sale con su madre hacia el colegio. El cole empieza a las nueve en punto. Por el camino, Lucas mira el reloj de la farmacia: son las nueve menos cuarto.</p><p>—Todavía quedan quince minutos —dice su madre—. ¡Llegamos!</p><p>Por la tarde, Lucas descubre el problema: al despertador se le había acabado la pila.</p><p>—Desde hoy —dice Lucas— revisaré la pila todos los domingos.</p><p>Y su madre le regala un reloj de pulsera, para que nunca más pierda la cuenta del tiempo.</p>` },
  tras: {
    "Las horas en punto": [
      ["¿Cuánto dura?", `<p>Con el reloj podemos saber <mark>cuánto dura</mark> una actividad. Miramos la hora a la que empieza y la hora a la que termina, y contamos.</p><p>Ejemplos:</p><ul><li>La película empieza a las <b>5</b> y termina a las <b>7</b>. Cuento: de 5 a 6, una hora; de 6 a 7, otra hora. Dura <b>2 horas</b>.</li><li>El recreo empieza a las <b>11</b> y termina a las <b>11 y media</b>. Dura <b>media hora</b>.</li><li>La clase de piscina empieza a las <b>6</b> y acaba a las <b>7</b>. Dura <b>1 hora</b>.</li></ul><p>Para contar horas podemos ir moviendo el dedo por los números del reloj, de uno en uno.</p><p>También es útil saber a qué hora <b>acabará</b> algo: si empiezo los deberes a las 5 y tardo 1 hora, terminaré a las 6.</p><p><b>Actividad</b>: apunta a qué hora empieza y acaba tu programa favorito y calcula cuánto dura.</p>`,
        H6.flujo("De 5 a 7", ["empieza|las 5", "pasa 1 h|las 6", "pasa 1 h|las 7", "dura|2 horas"], cAZ),
        ["wZn5JZatTBY", "Las Mejores Canciones de Reloj | Aprende a Leer el Reloj", "Pinkfong en español - Canciones Infantiles", 17046766]],
    ],
    "Y cuarto y menos cuarto": [
      ["Las cuatro posiciones de la aguja larga", `<p>Para leer la hora rápido, aprende dónde está la <mark>aguja larga</mark> en cada caso:</p><ul><li>En el <b>12</b>: es la hora <b>en punto</b>. Ejemplo: las 3 en punto.</li><li>En el <b>3</b>: es <b>y cuarto</b>. Han pasado 15 minutos. Ejemplo: las 3 y cuarto.</li><li>En el <b>6</b>: es <b>y media</b>. Han pasado 30 minutos. Ejemplo: las 3 y media.</li><li>En el <b>9</b>: es <b>menos cuarto</b>. Faltan 15 minutos para la hora siguiente. Ejemplo: las 4 menos cuarto.</li></ul><p>¡Cuidado con el menos cuarto! La aguja corta está ya casi en el 4, por eso decimos «las 4 menos cuarto» y no «las 3 menos cuarto».</p><p>Un truco: imagina que el reloj es una pizza cortada en cuatro trozos. Cada trozo es un cuarto de hora.</p><p><b>Actividad</b>: con un reloj de cartón, pon la aguja larga en el 12, el 3, el 6 y el 9 y di la hora.</p>`,
        L6.filas("Aguja larga", [["en el 12", "en punto", cNA], ["en el 3", "y cuarto", cVE], ["en el 6", "y media", cAZ], ["en el 9", "menos cuarto", cRO]])],
    ],
    "El reloj digital": [
      ["Las horas de la tarde: el 13, el 14…", `<p>Algunos relojes digitales cuentan las horas hasta el <mark>24</mark>. Así no hace falta decir «de la mañana» o «de la tarde».</p><p>Por la mañana las horas son como siempre: 08:00 son las 8 de la mañana.</p><p>Después del mediodía, en lugar de volver a empezar en 1, siguen contando:</p><ul><li><b>13:00</b> es la 1 de la tarde.</li><li><b>14:00</b> son las 2 de la tarde.</li><li><b>17:00</b> son las 5 de la tarde.</li><li><b>21:00</b> son las 9 de la noche.</li></ul><p>Un truco para saberlo: a la hora de la tarde le <b>restamos 12</b>. 17 − 12 = 5, así que 17:00 son las 5 de la tarde.</p><p>Este tipo de horas aparece en los horarios de trenes, en la televisión y en el cine.</p><p><b>Actividad</b>: busca en un horario de autobús o de cine una hora mayor que 12 y dila de la forma normal.</p>`,
        L6.filas("Tarde", [["13:00", "la 1", cNA], ["14:00", "las 2", cAZ], ["17:00", "las 5", cVE], ["21:00", "las 9", cRO]])],
    ],
    "Mañana, tarde y noche": [
      ["Días, semanas y meses", `<p>El reloj mide horas y minutos. Para medir tiempos más largos usamos el <mark>calendario</mark>:</p><ul><li>Un <b>día</b> tiene <b>24 horas</b>: la mañana, la tarde y la noche.</li><li>Una <b>semana</b> tiene <b>7 días</b>: lunes, martes, miércoles, jueves, viernes, sábado y domingo.</li><li>Un <b>mes</b> tiene unos <b>30 días</b>, o sea, unas 4 semanas.</li><li>Un <b>año</b> tiene <b>12 meses</b>: de enero a diciembre.</li></ul><p>Palabras útiles para hablar del tiempo:</p><ul><li><b>Ayer</b>: el día antes de hoy.</li><li><b>Hoy</b>: el día en que estamos.</li><li><b>Mañana</b>: el día después de hoy.</li></ul><p>¡Ojo! «Mañana» puede ser la parte del día antes de comer o el día siguiente. Lo sabemos por la frase.</p><p><b>Actividad</b>: escribe qué hiciste ayer, qué haces hoy y qué harás mañana.</p>`,
        H6.rueda("Tiempo", "AÑO", [["día", cNA], ["semana", cAZ], ["mes", cVE], ["hora", cRO]])],
    ],
  },
  final: [
    ["Relojes de otros tiempos", `<p>Antes de que existieran los relojes de agujas, las personas usaban otros inventos para medir el tiempo:</p><ul><li><mark>Reloj de sol</mark>: un palo clavado hace sombra. La sombra se mueve con el sol y marca la hora. ¡Pero de noche o con nubes no funciona!</li><li><b>Reloj de arena</b>: la arena cae poco a poco de arriba abajo. Cuando se acaba, ha pasado un tiempo fijo. Todavía se usa en juegos de mesa.</li><li><b>Reloj de agua</b>: el agua gotea de un recipiente a otro.</li><li><b>Vela con marcas</b>: al quemarse, la vela baja y cada marca indica una hora.</li></ul><p>Mucho después llegaron los relojes de agujas con ruedas dentadas, los de las torres de las iglesias y los ayuntamientos. Y hoy tenemos relojes digitales en el móvil y en el horno.</p><p><b>Actividad</b>: fabrica un reloj de sol con un palo y una cartulina en el patio.</p>`,
      L6.filas("Relojes", [["de sol", "sombra", cNA], ["de arena", "arena cae", cMO], ["de agua", "gotas", cAZ], ["de agujas", "ruedas", cVE]])],
    ["Repaso: el horario de un sábado", `<p>Vamos a repasar con el <mark>sábado de Sara</mark>:</p><ul><li>Se levanta a las <b>9 en punto</b>.</li><li>Desayuna a las <b>9 y cuarto</b>.</li><li>Va al parque a las <b>10 y media</b> y vuelve a las <b>12 y media</b>.</li><li>Come a las <b>2</b> de la tarde, es decir, a las <b>14:00</b>.</li><li>Ve una película de las <b>5</b> a las <b>7</b>.</li><li>Se acuesta a las <b>9 menos cuarto</b> de la noche.</li></ul><p>Preguntas:</p><ul><li>¿Cuánto tiempo está en el parque? De 10 y media a 12 y media: <b>2 horas</b>.</li><li>¿Cuánto dura la película? <b>2 horas</b>.</li><li>¿Dónde está la aguja larga a las 9 y cuarto? En el <b>3</b>.</li><li>¿Qué hace por la tarde? Ver la película.</li></ul><p><b>Actividad</b>: escribe el horario de tu sábado ideal con horas, medias y cuartos.</p>`,
      H6.flujo("Sábado", ["9:00|me levanto", "10:30|parque", "14:00|como", "17:00|película"], cAZ)],
  ],
  ejemplos: [
    ["La clase empieza a las 9 y acaba a las 10. ¿Cuánto dura?", ["De 9 a 10 hay una hora."], "1 hora."],
    ["¿Qué hora es 16:00 dicha de forma normal?", ["16 − 12 = 4.", "Es por la tarde."], "Las 4 de la tarde."],
  ],
  errores: ["Decir «las 3 menos cuarto» cuando la aguja corta está casi en el 4.", "Pensar que 15:00 son las 15 de la tarde en vez de las 3."],
  ejercicios: [
    ["b", "Si la aguja larga está en el 6, ¿es en punto o y media?", "Y media."],
    ["b", "¿Cuántos días tiene una semana?", "7 días."],
    ["b", "¿Cuántas horas tiene un día?", "24 horas."],
    ["b", "¿Qué hora es 13:00?", "La 1 de la tarde."],
    ["b", "Nombra un reloj antiguo.", "Reloj de sol, de arena o de agua."],
    ["m", "Una película empieza a las 4 y dura 2 horas. ¿A qué hora acaba?", "A las 6."],
    ["m", "¿Dónde está la aguja larga a las 7 menos cuarto?", "En el 9."],
    ["m", "¿Qué hora es 20:00?", "Las 8 de la tarde o de la noche."],
    ["m", "Hoy es martes. ¿Qué día fue ayer y qué día será mañana?", "Lunes y miércoles."],
    ["m", "¿Cuánto dura algo que empieza a las 11 y acaba a las 11 y media?", "Media hora."],
    ["a", "En la lectura, ¿cuánto tiempo falta para las 9 cuando Lucas ve el reloj de la farmacia?", "Quince minutos, un cuarto de hora."],
    ["a", "¿Por qué el reloj de sol no funciona de noche?", "Porque no hay sol que haga sombra."],
    ["a", "Sara está en el parque de 10 y media a 12 y media. ¿Cuánto tiempo pasa allí?", "2 horas."],
    ["a", "Escribe tres actividades de tu día con su hora.", "Respuesta libre con horas correctas."],
  ],
  quiz: [
    ["La aguja larga en el 3 marca…", ["y cuarto", "y media", "menos cuarto"], "Posiciones."],
    ["18:00 son las…", ["6 de la tarde", "8 de la tarde", "18 de la mañana"], "Restamos 12."],
    ["Una semana tiene…", ["7 días", "5 días", "30 días"], "Calendario."],
    ["De 3 a 5 pasan…", ["2 horas", "3 horas", "1 hora"], "Duración."],
    ["El reloj que usa la sombra es el de…", ["sol", "arena", "agua"], "Historia."],
  ],
  examen: [
    ["En la lectura, ¿por qué no sonó el despertador?", ["Se le acabó la pila", "Estaba roto", "Lucas lo apagó"], "Lectura."],
    ["Sara se acuesta a las 9 menos cuarto. La aguja larga está en el…", ["9", "3", "12"], "Repaso."],
  ],
  tarjetas: [
    ["Horas de tarde", "Restamos 12: 17:00 son las 5."],
    ["Duración", "Cuento las horas del principio al final."],
  ],
  glosario: [
    ["Reloj", "Aparato que mide el tiempo."],
    ["Aguja corta", "Marca las horas."],
    ["Aguja larga", "Marca los minutos."],
    ["En punto", "La aguja larga está en el 12."],
    ["Cuarto de hora", "15 minutos."],
    ["Media hora", "30 minutos."],
    ["Día", "24 horas."],
    ["Semana", "7 días."],
    ["Calendario", "Sirve para contar días, semanas y meses."],
    ["Reloj de arena", "Mide el tiempo con arena que cae."],
  ],
  situacion: {
    titulo: "El horario de nuestra clase",
    reto: "La clase fabrica relojes de cartón y prepara un horario ilustrado de un día de cole con horas, medias y cuartos.",
    pasos: ["Fabricar un reloj de agujas con cartón y un encuadernador.", "Apuntar a qué hora empieza y acaba cada actividad del día.", "Calcular cuánto dura cada actividad.", "Escribir cada hora también en forma digital."],
    producto: "Un horario de clase con relojes dibujados y horas digitales.",
    evaluacion: ["Lee horas en punto, y media, y cuarto y menos cuarto.", "Calcula duraciones sencillas.", "Pasa horas de la tarde a la forma normal.", "Usa ayer, hoy y mañana correctamente."],
  },
});
