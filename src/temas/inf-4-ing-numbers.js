// Primeros pasos en inglés, Infantil 4 años: Numbers 1 to 6. Inglés sencillo con ayuda en español.
const { mapa } = require("./_util");
const { svg, rot, big, nino, suelo, dado, ic, charla, vid, R, A, V, N, M, G, PROF, FUENTES } = require("./_inf4b");

const EN = ["one", "two", "three", "four", "five", "six"];
const DI = ["«uan»", "«tu»", "«zri»", "«for»", "«fáiv»", "«siks»"];
const COL = [R, A, V, N, M, R];
// Fila de dados con el número y su nombre en inglés.
const dados = (label, desde, hasta, titulo) => svg(label, `${rot(130, 24, titulo, { color: G })}${[...Array(hasta - desde + 1)].map((_, k) => { const n = desde + k, x = 50 + k * 80; return `${dado(x, 70, n, 50, COL[n - 1])}${big(x, 126, n, COL[n - 1], 22)}${rot(x, 148, EN[n - 1], { size: 17, color: COL[n - 1], w: 800 })}${rot(x, 166, DI[n - 1], { size: 11, color: G })}`; }).join("")}`);

module.exports = {
  materia: "Primeros pasos en inglés",
  curso: "4-anos",
  titulo: "Numbers 1 to 6",
  minutos: 15,
  objetivos: ["Contar del 1 al 6 en inglés: one, two, three, four, five, six", "Contar objetos y dedos en inglés", "Decir la edad: I'm four"],
  claves: ["one", "two", "three", "four", "five", "six", "how many?"],
  pregunta: {
    texto: "¿Cuántos años tienes? ¡Enséñalo con los dedos!",
    respuesta: "Tienes cuatro: en inglés, <mark>four</mark> («for»). Se dice <b>I'm four!</b> («áim for»): ¡tengo cuatro!",
  },
  bloques: [
    {
      html: `<h3>One, two, three</h3><p>Contamos en inglés: <mark>one</mark> («uan»), <mark>two</mark> («tu»), <mark>three</mark> («zri»).</p><p>Uno, dos y tres.</p><p>Levanta un dedo para cada número y dilo en voz alta: <b>one, two, three!</b></p>`,
      svg: dados("Dados con uno, dos y tres puntos: one, two, three", 1, 3, "1 · 2 · 3"),
    },
    {
      html: `<h3>Four, five, six</h3><p>Seguimos contando: <mark>four</mark> («for»), <mark>five</mark> («fáiv»), <mark>six</mark> («siks»).</p><p>Cuatro, cinco y seis. ¡Ya casi tenemos dos manos!</p><p>Five son los dedos de una mano. ¡Choca esos cinco: <b>high five!</b></p>`,
      svg: dados("Dados con cuatro, cinco y seis puntos: four, five, six", 4, 6, "4 · 5 · 6"),
    },
    {
      html: `<h3>How many?</h3><p><mark>How many?</mark> («jáu méni») significa «¿cuántos?».</p><p>Mira las manzanas y cuenta en inglés, señalando cada una: one, two, three, four.</p><p>Hay <b>four apples</b>: cuatro manzanas. ¡Qué ricas!</p>`,
      svg: svg("Cuatro manzanas en fila con los números uno a cuatro en inglés", `${rot(130, 26, "How many apples?", { size: 16, color: A, w: 800 })}${[0, 1, 2, 3].map((i) => ic("manzana", 52 + i * 52, 80, 1.4) + rot(52 + i * 52, 124, EN[i], { size: 15, color: COL[i], w: 800 })).join("")}${rot(130, 162, "four apples!", { size: 18, color: N, w: 800 })}`),
    },
    {
      html: `<h3>Contamos con los dedos</h3><p>Los dedos nos ayudan a <mark>contar</mark>.</p><p>Una mano entera es <b>five</b>. Si levantamos uno más de la otra mano, tenemos <b>six</b>.</p><p>¡Prueba: five… and one more… six!</p>`,
      svg: svg("Una mano abierta con cinco dedos más un dedo de la otra mano: seis", `${ic("mano", 80, 84, 2.6)}${rot(130, 88, "+", { size: 30, color: G, w: 800 })}<rect x="158" y="56" width="14" height="50" rx="7" fill="#f2c79e" stroke="#c9a27e"/><rect x="152" y="98" width="30" height="34" rx="10" fill="#f2c79e"/>${rot(80, 160, "five", { size: 18, color: M, w: 800 })}${rot(166, 160, "one", { size: 18, color: R, w: 800 })}${rot(226, 100, "= six", { size: 18, color: N, w: 800 })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Con los números en inglés podemos decir <mark>nuestra edad</mark>: <b>I'm four</b> («áim for»), tengo cuatro años.</p><p>También podemos contar juguetes, amigos o escalones, ¡en otro idioma!</p>`,
      svg: charla("Un niño pregunta How old are you y una niña enseña cuatro dedos: I'm four", [["nino", "How old are you?", A], ["nina", "I'm four!", R]]),
    },
    {
      html: `<h3>Juego: jump and count</h3><p>Tiramos un <mark>dado</mark> grande.</p><p>Contamos los puntos en inglés y damos los mismos <b>saltos</b>: one, two, three…</p><p>Si sale six, ¡seis saltos! ¿Quién se cansa antes?</p>`,
      svg: svg("Un dado con tres puntos y un niño que salta tres veces contando en inglés", `${dado(50, 70, 3, 56, V)}${nino(150, 150, { pose: "salta", c: A })}${["one", "two", "three"].map((t, i) => rot(110 + i * 50, 40 - (i % 2) * 10, t, { size: 16, color: COL[i], w: 800 })).join("")}${suelo(150)}${rot(130, 172, "three jumps!", { color: V })}`),
    },
  ],
  figura: {
    titulo: "Numbers 1 to 6",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Los números del uno al seis con dados y su nombre en inglés: one, two, three, four, five y six">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${EN.map((t, i) => { const x = 60 + i * 104; return `<rect x="${x - 46}" y="24" width="92" height="252" rx="14" fill="var(--card)" stroke="${COL[i]}" stroke-width="3"/>${dado(x, 82, i + 1, 60, COL[i])}<text x="${x}" y="176" text-anchor="middle" font-size="44" font-weight="800" fill="${COL[i]}">${i + 1}</text><text x="${x}" y="226" text-anchor="middle" font-size="22" font-weight="800" fill="var(--ink)">${t}</text><text x="${x}" y="252" text-anchor="middle" font-size="13" fill="var(--muted)">${DI[i]}</text>`; }).join("")}
    </svg>`,
  },
  video: { ...vid("xNw1SSz18Gg", "How Many Fingers?", "Super Simple Songs", 296546950), busqueda: "numbers song 1 to 10 for kids" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "How many? Hay tres pelotas.", pasos: ["Señalamos cada pelota.", "Contamos en inglés: one, two, three."], resultado: "three balls." },
    { enunciado: "Di tu edad en inglés.", pasos: ["Enseñamos los dedos: cuatro.", "Cuatro en inglés es four.", "Decimos: I'm four!"], resultado: "I'm four!" },
  ],
  errores: [
    "Decir «tres» como «tri»: three se dice «zri», con la lengua entre los dientes.",
    "Saltarse números al contar: one, two, three, four, five, six, siempre en orden.",
    "Confundir four (cuatro) con five (cinco): five es la mano entera.",
  ],
  ejercicios: [
    { q: "Cuenta del 1 al 6 en inglés.", sol: "One, two, three, four, five, six." },
    { q: "Sube seis escalones contando en inglés.", sol: "Para la familia: un número por escalón." },
    { q: "Pon cuatro cucharas en la mesa contando en inglés.", sol: "Para la familia: aprovechad para poner la mesa: one, two, three, four." },
    { q: "Enseña five con la mano.", sol: "La mano entera abierta." },
    { q: "Tira un dado y di el número en inglés.", sol: "Para la familia: usad un dado grande o de juego de mesa." },
    { q: "Contesta: How old are you?", sol: "I'm four!" },
  ],
  quiz: [
    { q: "One es…", o: ["1", "2", "3"], a: 0, e: "One: uno." },
    { q: "¿Cómo se dice «tres»?", o: ["Two", "Three", "Six"], a: 1, e: "Three: «zri»." },
    { q: "Una mano entera es…", o: ["Five", "Two", "Six"], a: 0, e: "Cinco dedos: five." },
    { q: "Después de four va…", o: ["Five", "One", "Three"], a: 0, e: "Four, five." },
    { q: "How many? significa…", o: ["¿Cuántos?", "Hola", "Adiós"], a: 0, e: "Preguntamos cuántos hay." },
    { q: "Six es…", o: ["6", "4", "2"], a: 0, e: "Six: seis." },
  ],
  examen: [
    { q: "Two es…", o: ["2", "5", "1"], a: 0, e: "Two: dos." },
    { q: "Tengo cuatro años: I'm…", o: ["Four", "Three", "Six"], a: 0, e: "Four: cuatro." },
    { q: "Contamos: one, two, …", o: ["Three", "Five", "Six"], a: 0, e: "Después de two va three." },
  ],
  feynman: ["Cuenta del 1 al 6 en inglés", "Di tu edad en inglés"],
  mapa: mapa("NUMBERS 1 TO 6", "var(--inf)", [
    ["one · two", "1 · 2", R],
    ["three · four", "3 · 4", A],
    ["five · six", "5 · 6", V],
    ["How many?", "¿cuántos?", N],
  ], 220),
  tarjetas: [
    ["1", "One"],
    ["2", "Two"],
    ["3", "Three"],
    ["4", "Four"],
    ["5", "Five"],
    ["6", "Six"],
  ],
  familias: [
    "Contad en inglés al subir escaleras, al lavaros los dientes o al poner la mesa.",
    "Jugad a juegos de dados (la oca, el parchís) diciendo el número en inglés.",
    "Preguntad «How many?» señalando cosas de casa.",
    "Cantad canciones de contar en inglés con los dedos.",
  ],
  profesores: PROF("Comunicación y representación de la realidad: aproximación a la lengua extranjera, números del 1 al 6 en contextos de juego, conteo de objetos y respuesta física total", ["Dado gigante de espuma con saltos y palmadas.", "Canciones de dedos para contar.", "Contar a los compañeros en la asamblea en inglés."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
