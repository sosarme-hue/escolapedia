// Educación Física 2º de Primaria: higiene y descanso. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, sol, luna, estrella, flechaR, tick, equis, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
const camiseta = (x, y, c, s = 1) => `<path transform="translate(${x} ${y}) scale(${s})" d="M-16 -18 l-12 8 l6 10 l6 -4 v22 h32 v-22 l6 4 l6 -10 l-12 -8 q-8 6 -16 0z" fill="${c}" stroke="var(--ink)"/>`;
const gota = (x, y, s = 1, c = P.celeste) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 -10 q8 10 0 16 q-8 -6 0 -16z" fill="${c}" stroke="#0277bd" stroke-width=".8"/>`;
const reloj = (x, y, r, h, m = 0) => `<circle cx="${x}" cy="${y}" r="${r}" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M${x} ${y} L${x + r * 0.75 * Math.sin(m * 6 * Math.PI / 180)} ${y - r * 0.75 * Math.cos(m * 6 * Math.PI / 180)} M${x} ${y} L${x + r * 0.5 * Math.cos((h * 30 - 90) * Math.PI / 180)} ${y + r * 0.5 * Math.sin((h * 30 - 90) * Math.PI / 180)}" stroke="var(--ink)" stroke-width="2.5"/>`;

module.exports = {
  materia: "Educación Física",
  curso: "2-primaria",
  titulo: "Higiene y descanso",
  minutos: 20,
  objetivos: ["Preparar y usar la bolsa de aseo después de Educación Física", "Entender por qué sudamos y cómo cuidar la piel, los pies y la ropa", "Saber cuánto hay que dormir y crear una buena rutina de descanso"],
  claves: ["higiene", "sudor", "bolsa de aseo", "camiseta de cambio", "pies", "descanso", "dormir", "rutina"],
  pregunta: {
    texto: "¿Por qué estamos sudados después de jugar en el patio?",
    respuesta: "Porque al movernos el cuerpo se calienta y <mark>suda</mark> para refrescarse. Por eso, después de hacer ejercicio, toca <b>asearse</b>, cambiarse de camiseta y, por la noche, <b>descansar</b> bien.",
  },
  bloques: [
    {
      html: `<h3>¿Por qué sudamos?</h3><p>Cuando hacemos ejercicio, el cuerpo se <mark>calienta</mark>, como un motor.</p><p>Para no pasar calor, la piel suelta gotitas de agua: el <b>sudor</b>. Al secarse, el sudor nos refresca. ¡Es un sistema muy listo!</p><p>Pero el sudor deja la piel y la ropa húmedas, y con el tiempo huelen mal. Por eso hay que asearse después de sudar.</p>`,
      svg: svg("Un niño corriendo con gotas de sudor y un termómetro que sube", `${nino(80, 156, { c: P.rojo, pose: "corre", s: 1.8 })}${gota(50, 50, 1.3)}${gota(116, 46, 1.1)}${gota(124, 74, 1.3)}<rect x="196" y="40" width="16" height="90" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="204" cy="138" r="14" fill="${P.rojo}" stroke="var(--ink)" stroke-width="2"/><rect x="200" y="60" width="8" height="74" fill="${P.rojo}"/>${etq(204, 30, "¡calor!", P.rojo, 13)}${suelo(158)}`),
    },
    {
      html: `<h3>Mi bolsa de aseo</h3><p>Los días de Educación Física llevamos una <mark>bolsa de aseo</mark> pequeña.</p><p>Dentro hay: una <b>toalla</b> pequeña, una <b>camiseta de cambio</b>, un <b>peine</b> y, si queremos, toallitas o colonia suave.</p><p>Al terminar la clase, nos lavamos la cara, las manos y el cuello, nos secamos y nos ponemos la camiseta limpia. ¡Como nuevos!</p>`,
      svg: svg("Una bolsa de aseo abierta con toalla, camiseta de cambio, peine y jabón", `<path d="M20 70 h110 l-10 80 h-90z" fill="${P.azul}" stroke="var(--ink)" stroke-width="2"/><path d="M50 70 q25 -30 50 0" stroke="var(--ink)" stroke-width="3" fill="none"/>${etq(75, 112, "mi bolsa", "#fff", 13)}<rect x="146" y="30" width="44" height="30" rx="4" fill="${P.rosa}" stroke="var(--ink)"/>${etq(168, 74, "toalla", "var(--ink)", 11)}${camiseta(220, 50, P.verde, 0.9)}${etq(222, 84, "camiseta", "var(--ink)", 11)}<rect x="146" y="110" width="44" height="10" rx="3" fill="${P.gris}"/>${[0, 1, 2, 3, 4, 5, 6].map((i) => `<path d="M${150 + i * 6} 120 v8" stroke="${P.gris}" stroke-width="2"/>`).join("")}${etq(168, 146, "peine", "var(--ink)", 11)}<rect x="204" y="110" width="34" height="22" rx="8" fill="${P.amarillo}" stroke="var(--ink)"/>${etq(222, 146, "jabón", "var(--ink)", 11)}`),
      video: V("ef8v"),
    },
    {
      html: `<h3>Lavarse bien las manos</h3><p>Antes de comer y después de jugar, nos lavamos las <mark>manos con jabón</mark>.</p><p>Frotamos las palmas, el dorso, entre los dedos y las uñas. Lo hacemos durante unos veinte segundos: lo que dura cantar «Cumpleaños feliz» dos veces.</p><p>Después aclaramos con agua y secamos bien. Así eliminamos los gérmenes que no vemos.</p>`,
      svg: svg("Los pasos para lavarse las manos: jabón, frotar palmas, entre los dedos, aclarar y secar", `${[["jabón", P.amarillo], ["frotar", P.celeste], ["dedos", P.verde], ["aclarar", P.azul], ["secar", P.rosa]].map(([t, c], i) => `<circle cx="${30 + i * 50}" cy="76" r="20" fill="${c}" stroke="var(--ink)"/>${rot(30 + i * 50, 82, String(i + 1), { size: 16, w: 800 })}${etq(30 + i * 50, 118, t, "var(--ink)", 11)}`).join("")}${etq(130, 156, "20 segundos frotando", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>Cuidar los pies</h3><p>En Educación Física, los <mark>pies</mark> trabajan muchísimo.</p><p>Usamos <b>zapatillas de deporte</b> cómodas y bien atadas, y <b>calcetines limpios</b> de algodón. Nada de zapatos de vestir ni chanclas.</p><p>En casa, nos lavamos los pies, los secamos bien entre los dedos y cambiamos los calcetines cada día. ¡Unos pies sanos corren mejor!</p>`,
      svg: svg("Zapatillas de deporte bien atadas y calcetines limpios, frente a chanclas tachadas", `<path d="M20 120 q0 -20 20 -20 l16 -14 q20 0 24 18 l6 16z" fill="${P.azul}" stroke="var(--ink)"/><path d="M20 120 H86" stroke="#fff" stroke-width="3"/>${[0, 1, 2].map((i) => `<path d="M${46 + i * 6} ${92 + i * 2} l8 6" stroke="#fff" stroke-width="2"/>`).join("")}${tick(54, 66, P.verde)}${etq(54, 150, "zapatillas", P.azul, 11)}<path d="M112 70 h20 v40 q0 12 14 12 h10 v14 h-28 q-16 0 -16 -16z" fill="#fff" stroke="var(--ink)"/>${tick(134, 60, P.verde)}${etq(136, 150, "calcetines", "var(--ink)", 11)}<ellipse cx="214" cy="116" rx="22" ry="10" fill="${P.naranja}" stroke="var(--ink)"/><path d="M204 112 l10 -8 l10 8" stroke="var(--ink)" stroke-width="2" fill="none"/>${equis(214, 66, P.rojo)}${etq(214, 150, "chanclas, no", P.rojo, 11)}`),
    },
    {
      html: `<h3>Ropa y sol</h3><p>Para hacer deporte usamos <mark>ropa cómoda</mark>: chándal o pantalón corto y camiseta transpirable.</p><p>Cuando hace calor y sol, nos ponemos <b>gorra</b> y <b>crema solar</b>, y buscamos la sombra en los descansos. Cuando hace frío, nos abrigamos al terminar, para no enfriarnos sudados.</p><p>Y siempre llevamos el pelo largo recogido.</p>`,
      svg: svg("Una niña con gorra en un día de sol y crema solar, y un niño que se pone la chaqueta al terminar en un día de frío", `${sol(40, 40, 18)}${nino(70, 156, { c: P.amarillo, s: 1.5, nina: true })}<path d="M55 50 q15 -14 30 0 h10" fill="${P.rojo}" stroke="var(--ink)"/><rect x="104" y="120" width="16" height="28" rx="4" fill="#fff" stroke="var(--ink)"/>${etq(112, 112, "crema", "var(--ink)", 10)}${etq(70, 174, "gorra y crema", P.naranja, 11)}${nino(200, 156, { c: P.azul, s: 1.5, pose: "brazos" })}<path d="M170 80 h60 v40 h-60z" fill="${P.morado}" opacity=".7"/>${[0, 1, 2].map((i) => `<path d="M${180 + i * 20} 24 l0 12 M${174 + i * 20} 30 h12 M${176 + i * 20} 26 l8 8 M${184 + i * 20} 26 l-8 8" stroke="${P.celeste}" stroke-width="2"/>`).join("")}${etq(200, 174, "abrigarse al final", P.azul, 11)}${suelo(158)}`),
    },
    {
      html: `<h3>¿Cuánto hay que dormir?</h3><p>Mientras <mark>dormimos</mark>, el cuerpo crece, los músculos se reparan y el cerebro guarda lo que hemos aprendido.</p><p>Los niños de tu edad necesitan dormir <b>entre 10 y 11 horas</b> cada noche. Si te acuestas a las nueve, te levantas a las siete y media.</p><p>Si dormimos poco, al día siguiente estamos cansados, de mal humor y no aprendemos bien.</p>`,
      svg: svg("Un reloj a las nueve de la noche con la luna y otro a las siete y media de la mañana con el sol: unas diez horas de sueño", `${luna(40, 40, 16)}${reloj(70, 96, 34, 9)}${etq(70, 148, "a la cama: 21:00", P.morado, 11)}${flechaR(112, 96, 150, 96, "var(--line)")}${etq(131, 80, "10 h", "var(--pen)", 14)}${sol(226, 40, 16)}${reloj(194, 96, 34, 7.5, 30)}${etq(194, 148, "arriba: 7:30", P.naranja, 11)}${[0, 1, 2].map((i) => `${rot(110 + i * 12, 40 - i * 10, "z", { size: 12 + i * 3, color: P.azul })}`).join("")}`),
    },
    {
      html: `<h3>Una buena rutina para dormir</h3><p>Para dormir bien ayuda tener una <mark>rutina</mark>. Es hacer lo mismo cada noche, en el mismo orden.</p><p>Cenar pronto y ligero. Ducharse o lavarse. Ponerse el pijama y lavarse los dientes. Leer un cuento tranquilo.</p><p>Y algo muy importante: <b>nada de pantallas</b> antes de dormir. Su luz engaña al cerebro y le hace creer que todavía es de día.</p>`,
      svg: svg("La rutina de la noche: cenar, ducha, dientes, cuento y a dormir, con una tableta tachada", `${["cenar", "ducha", "dientes", "cuento", "dormir"].map((t, i) => `<rect x="${8 + i * 50}" y="40" width="44" height="40" rx="8" fill="${[P.naranja, P.celeste, "#fff", P.amarillo, P.morado][i]}" stroke="var(--ink)"/>${rot(30 + i * 50, 66, String(i + 1), { size: 16, w: 800, color: i === 4 ? "#fff" : "var(--ink)" })}${etq(30 + i * 50, 98, t, "var(--ink)", 10)}`).join("")}<rect x="104" y="116" width="52" height="40" rx="5" fill="${P.gris}" stroke="var(--ink)"/><rect x="110" y="122" width="40" height="28" fill="${P.celeste}"/>${equis(130, 136, P.rojo)}${etq(206, 140, "sin pantallas", P.rojo, 12)}`),
    },
    {
      html: `<h3>Descansar también de día</h3><p>No solo se descansa durmiendo. Durante el día también hacen falta <mark>pausas</mark>.</p><p>En clase de Educación Física, después de un juego muy movido, hacemos un juego tranquilo y bebemos agua. Al final, estiramos y respiramos despacio: es la <b>vuelta a la calma</b>.</p><p>En casa, alternamos estudiar, jugar y descansar. ¡El cuerpo y la mente lo agradecen!</p>`,
      svg: svg("Una niña bebe agua sentada a la sombra y un niño estira tumbado respirando despacio", `${nino(66, 156, { c: P.verde, pose: "sentado", s: 1.4, nina: true })}<rect x="84" y="84" width="12" height="24" rx="3" fill="${P.celeste}" stroke="var(--ink)"/>${etq(66, 174, "beber agua", P.verde, 11)}<g transform="translate(150 150)"><path d="M0 0 H60 M60 0 L80 -6 M60 0 L80 6 M10 0 L-10 -10 M10 0 L-10 10" stroke="${P.azul}" stroke-width="5" stroke-linecap="round"/><circle cx="-6" cy="0" r="9" fill="${P.piel}"/></g>${etq(186, 120, "respirar despacio", P.azul, 11)}${etq(186, 174, "vuelta a la calma", P.azul, 11)}${suelo(158)}`),
    },
    {
      html: `<h3>Jugamos a la semana sana</h3><p>Hacemos una <mark>tabla</mark> con los siete días de la semana. Tiene cuatro filas: aseo, dientes, agua y dormir mis horas.</p><p>Cada noche, coloreamos una casilla por cada cosa que hemos hecho bien.</p><p>Al final de la semana, contamos las casillas. ¿Cuántas has coloreado? ¡Intenta mejorar la semana siguiente!</p>`,
      svg: svg("Una tabla de la semana con casillas coloreadas para aseo, dientes, agua y dormir", `${["L", "M", "X", "J", "V", "S", "D"].map((d, i) => etq(84 + i * 24, 30, d, "var(--ink)", 11)).join("")}${["aseo", "dientes", "agua", "dormir"].map((t, j) => `${rot(60, 56 + j * 28, t, { size: 11, anchor: "end" })}${[0, 1, 2, 3, 4, 5, 6].map((i) => `<rect x="${73 + i * 24}" y="${40 + j * 28}" width="22" height="24" rx="4" fill="${(i + j) % 3 === 2 ? "var(--card)" : [P.verde, P.azul, P.celeste, P.morado][j]}" stroke="var(--ink)" stroke-width="1"/>`).join("")}`).join("")}${etq(150, 168, "¡mi semana sana!", "var(--pen)", 13)}`),
    },
  ],
  figura: {
    titulo: "Higiene y descanso",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Después de sudar, asearse con la bolsa de aseo; por la noche, dormir diez horas"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 40, "Moverme, asearme y descansar", { size: 22, color: "var(--pen)" })}${nino(100, 250, { c: P.rojo, pose: "corre", s: 2 })}${gota(70, 120, 1.6)}${gota(140, 116, 1.4)}${rot(100, 280, "sudo", { size: 16, color: P.rojo })}${flechaR(170, 180, 220, 180, "var(--line)")}<path d="M240 160 h110 l-10 80 h-90z" fill="${P.azul}" stroke="var(--ink)" stroke-width="2"/>${camiseta(296, 140, P.verde, 1.2)}${rot(296, 280, "me aseo y me cambio", { size: 16, color: P.azul })}${flechaR(370, 180, 420, 180, "var(--line)")}<rect x="440" y="190" width="160" height="40" rx="8" fill="${P.morado}"/><rect x="440" y="180" width="40" height="22" rx="8" fill="#fff" stroke="var(--ink)"/>${luna(560, 110, 22)}${estrella(480, 100, 10)}${rot(520, 280, "duermo 10 horas", { size: 16, color: P.morado })}</svg>`,
  },
  video: V("ef8b"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Prepara tu bolsa de aseo para mañana.",
      pasos: ["Mete una toalla pequeña.", "Añade una camiseta limpia de cambio.", "Pon un peine y, si quieres, toallitas."],
      resultado: "La bolsa está lista para después de clase." },
    { enunciado: "Si te despiertas a las 7:30, ¿a qué hora te acuestas?",
      pasos: ["Necesitas unas 10 horas.", "Cuenta 10 horas hacia atrás desde las 7:30.", "Sale las 21:30."],
      resultado: "Entre las 21:00 y las 21:30." },
    { enunciado: "Ordena la rutina de la noche.",
      pasos: ["Cenar y lavarse.", "Pijama y dientes.", "Cuento tranquilo, sin pantallas."],
      resultado: "Cenar, ducha, dientes, cuento y dormir." },
  ],
  errores: [
    "Quedarse con la camiseta sudada todo el día.",
    "Venir a Educación Física con zapatos de vestir o chanclas.",
    "Mirar la tableta en la cama antes de dormir.",
    "Pensar que descansar es perder el tiempo: el cuerpo lo necesita.",
  ],
  ejercicios: [
    { q: "¿Por qué sudamos?", sol: "Para refrescar el cuerpo cuando se calienta." },
    { q: "¿Qué llevamos en la bolsa de aseo?", sol: "Toalla pequeña, camiseta de cambio, peine y, si queremos, toallitas." },
    { q: "¿Cuánto tiempo frotamos las manos con jabón?", sol: "Unos veinte segundos." },
    { q: "¿Qué calzado usamos en Educación Física?", sol: "Zapatillas de deporte cómodas y bien atadas." },
    { q: "¿Qué nos ponemos si hace mucho sol?", sol: "Gorra y crema solar." },
    { q: "¿Cuántas horas deben dormir los niños de tu edad?", sol: "Entre 10 y 11 horas." },
    { q: "¿Qué pasa en el cuerpo mientras dormimos?", sol: "Crece, se reparan los músculos y el cerebro guarda lo aprendido." },
    { q: "¿Por qué no usar pantallas antes de dormir?", sol: "Su luz engaña al cerebro y nos cuesta dormir." },
    { q: "¿Qué es la vuelta a la calma?", sol: "Estirar y respirar despacio al final del ejercicio." },
    { q: "Haz tu tabla de la semana sana y complétala.", sol: "Respuesta libre." },
  ],
  quiz: [
    { q: "El sudor sirve para…", o: ["refrescarnos", "calentarnos", "nada"], a: 0, e: "Refrescarnos." },
    { q: "Después de Educación Física…", o: ["nos cambiamos de camiseta", "seguimos sudados", "nos acostamos"], a: 0, e: "Camiseta limpia." },
    { q: "Las manos se frotan con jabón unos…", o: ["veinte segundos", "dos segundos", "diez minutos"], a: 0, e: "Veinte segundos." },
    { q: "Para hacer deporte usamos…", o: ["zapatillas de deporte", "chanclas", "botas de agua"], a: 0, e: "Zapatillas." },
    { q: "Los calcetines se cambian…", o: ["cada día", "cada mes", "nunca"], a: 0, e: "Cada día." },
    { q: "Con mucho sol nos ponemos…", o: ["gorra y crema", "bufanda", "guantes"], a: 0, e: "Gorra y crema." },
    { q: "Un niño de tu edad duerme unas…", o: ["10 horas", "4 horas", "20 horas"], a: 0, e: "10 u 11 horas." },
    { q: "Antes de dormir es mejor…", o: ["leer un cuento", "ver la tableta", "correr"], a: 0, e: "Algo tranquilo." },
    { q: "Si dormimos poco estamos…", o: ["cansados", "con más energía", "más altos"], a: 0, e: "Cansados." },
    { q: "Al final de la clase hacemos…", o: ["la vuelta a la calma", "un esprint", "nada"], a: 0, e: "Estiramos y respiramos." },
  ],
  examen: [
    { q: "El pelo largo en Educación Física va…", o: ["recogido", "suelto en la cara", "mojado"], a: 0, e: "Recogido." },
    { q: "Cuando hace frío, al terminar…", o: ["nos abrigamos", "nos quitamos ropa", "nos mojamos"], a: 0, e: "Para no enfriarnos." },
    { q: "Una rutina es…", o: ["hacer lo mismo cada noche", "hacer algo distinto siempre", "no dormir"], a: 0, e: "Mismo orden." },
    { q: "Durante el día también hacen falta…", o: ["pausas", "pantallas", "gritos"], a: 0, e: "Descansos." },
  ],
  feynman: ["Por qué sudamos y cómo nos aseamos después", "Cómo cuidar los pies, la ropa y la piel al hacer deporte", "Cuánto dormir y cómo es una buena rutina de noche"],
  mapa: mapa("HIGIENE Y DESCANSO", "var(--pri)", [
    ["Sudor", "refresca; luego, aseo", "#e53935"],
    ["Bolsa de aseo", "toalla, camiseta, peine", "#1e88e5"],
    ["Pies y ropa", "zapatillas, gorra, crema", "#43a047"],
    ["Dormir", "10-11 h, sin pantallas", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Sudor", "Agua que refresca el cuerpo"],
    ["Bolsa de aseo", "Toalla, camiseta, peine"],
    ["Manos", "Jabón y 20 segundos"],
    ["Pies", "Zapatillas y calcetines limpios"],
    ["Sol", "Gorra, crema y sombra"],
    ["Dormir", "Entre 10 y 11 horas"],
    ["Rutina", "Cena, ducha, dientes, cuento"],
    ["Vuelta a la calma", "Estirar y respirar despacio"],
  ],
  familias: [
    "Preparad juntos la bolsa de aseo la noche antes de Educación Física.",
    "Fijad una hora para acostarse y mantenedla también el fin de semana.",
    "Dejad las pantallas fuera del dormitorio por la noche.",
    "Completad juntos la tabla de la semana sana.",
  ],
  profesores: PROF("Educación Física: hábitos de higiene asociados a la actividad física (aseo, cambio de ropa, calzado, protección solar); función del sudor; necesidades de sueño en la infancia y rutina de descanso; pausas y vuelta a la calma", ["Uso de la bolsa de aseo al final de cada sesión.", "Cálculo de horas de sueño con relojes.", "Registro semanal de hábitos saludables."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
