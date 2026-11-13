// Religión 2º de Primaria: Noé y el arca.
const P = require("./_pri2a");
const { svg, rot, big, nino, sol, nube, arbol, paloma, pajaro, suelo, corazon, flechaR } = P;

// Arca de madera con casita encima.
const arca = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-70 0 h140 l-18 30 h-104z" fill="#a8743c" stroke="var(--ink)" stroke-width="2"/><path d="M-62 10 h124 M-56 20 h112" stroke="#7a4f22" stroke-width="1.5"/><rect x="-40" y="-30" width="80" height="30" fill="#c99a5b" stroke="var(--ink)" stroke-width="2"/><path d="M-46 -30 L0 -50 L46 -30z" fill="var(--red)" stroke="var(--ink)" stroke-width="2"/><rect x="-28" y="-22" width="14" height="12" fill="var(--sun)"/><rect x="14" y="-22" width="14" height="12" fill="var(--sun)"/></g>`;
// Arcoíris.
const arcoiris = (x, y, r = 70) => ["var(--red)", "var(--inf)", "var(--sun)", "var(--leaf)", "var(--water)", "var(--pen)"].map((c, i) => `<path d="M${x - r + i * 6} ${y} A${r - i * 6} ${r - i * 6} 0 0 1 ${x + r - i * 6} ${y}" stroke="${c}" stroke-width="6" fill="none"/>`).join("");
// Lluvia.
const lluvia = (x, y, w, h) => [...Array(Math.floor(w / 14) * 3)].map((_, i) => { const xx = x + (i % Math.floor(w / 14)) * 14 + (Math.floor(i / Math.floor(w / 14)) % 2) * 7, yy = y + Math.floor(i / Math.floor(w / 14)) * (h / 3); return `<path d="M${xx} ${yy} l-3 10" stroke="var(--water)" stroke-width="2" stroke-linecap="round"/>`; }).join("");
// Animal sencillo (cuerpo + cabeza).
const animal = (x, y, c, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse rx="12" ry="8" fill="${c}" stroke="var(--ink)" stroke-width="1.2"/><circle cx="12" cy="-7" r="6" fill="${c}" stroke="var(--ink)" stroke-width="1.2"/><path d="M-7 7 v7 M7 7 v7" stroke="var(--ink)" stroke-width="2"/><circle cx="14" cy="-8" r="1.2" fill="var(--ink)"/></g>`;

module.exports = P.tema({
  materia: "Religión",
  titulo: "Noé y el arca",
  objetivos: ["Conocer la historia de Noé y el arca del libro del Génesis", "Descubrir que Noé confió en Dios y le hizo caso", "Entender el arcoíris como signo de la alianza y de la paz"],
  claves: ["Noé", "arca", "diluvio", "confianza", "obedecer", "paloma", "arcoíris", "alianza"],
  pregunta: ["Si alguien que te quiere mucho te pide algo muy raro, como construir un barco enorme en el campo, ¿le harías caso?", "Noé lo hizo. Construyó un barco gigante lejos del mar porque <mark>confiaba en Dios</mark>. Y gracias a eso se salvaron su familia y los animales."],
  bloques: [
    ["Un hombre bueno", `<p>Hace muchísimo tiempo, la gente se había olvidado de Dios. Se peleaban y hacían daño a los demás.</p><p>Pero había un hombre bueno llamado <mark>Noé</mark>. Noé quería a Dios, cuidaba de su familia y trataba bien a todos.</p><p>Dios se fijó en Noé porque era <b>justo</b> y tenía un corazón bueno.</p>`,
      svg("Noé, un hombre mayor con barba, junto a su familia", `${nino(70, 156, { c: "#8a5a2b", s: 1.3, pelo: "var(--muted)" })}<path d="M62 84 q8 14 16 0" fill="var(--muted)"/>${nino(122, 156, { c: "var(--red)", nina: true, s: 1.2 })}${nino(168, 156, { c: "var(--pen)", s: 1 })}${nino(208, 156, { c: "var(--leaf)", nina: true, s: 0.95 })}${corazon(70, 36, 1.4)}${suelo(156)}${rot(130, 174, "Noé y su familia", { color: "var(--pen)" })}`)],
    ["Un encargo muy raro", `<p>Un día, Dios le dijo a Noé: «Va a llover mucho, muchísimo. Construye un <mark>arca</mark>».</p><p>Un arca es un <b>barco muy grande</b>, como una casa flotante.</p><p>Noé vivía lejos del mar. Sus vecinos se reían de él: «¿Un barco aquí?». Pero Noé <b>confió en Dios</b> y se puso a trabajar.</p>`,
      svg("Noé construye un arca de madera con un martillo mientras los vecinos se ríen", `${arca(140, 120, 0.9)}${nino(40, 156, { pose: "lanza", c: "#8a5a2b", s: 1.1 })}<path d="M28 74 l-8 -10 h10z" fill="var(--muted)"/>${P.bocadillo(206, 34, 96, "¡Ja, ja!")}${suelo(156)}${rot(130, 174, "Noé confía en Dios", { color: "var(--pen)" })}`), P.V("noeB")],
    ["Los animales de dos en dos", `<p>Dios le pidió a Noé que metiera en el arca a su <b>familia</b> y a <mark>una pareja de cada animal</mark>: un macho y una hembra.</p><p>Entraron leones, elefantes, jirafas, ovejas, pájaros… ¡de dos en dos!</p><p>Noé también guardó <b>comida</b> para todos. Fue un trabajo enorme, pero lo hizo con paciencia.</p>`,
      svg("Animales entran de dos en dos por una rampa al arca", `${arca(180, 100, 0.8)}<path d="M136 128 L70 156" stroke="#a8743c" stroke-width="6"/>${animal(60, 148, "var(--sun)")}${animal(90, 148, "var(--sun)", 0.9)}${animal(36, 120, "var(--muted)", 1.1)}${animal(66, 120, "var(--muted)", 1)}${pajaro(60, 40)}${pajaro(80, 50)}${rot(80, 86, "¡De dos en dos!", { color: "var(--red)", size: 14 })}`)],
    ["El diluvio", `<p>Cuando todos estaban dentro, Dios <b>cerró la puerta</b> del arca. Y empezó a llover.</p><p>Llovió durante <mark>40 días y 40 noches</mark>. El agua lo cubrió todo, hasta las montañas. A esto lo llamamos el <b>diluvio</b>.</p><p>Pero dentro del arca, Noé, su familia y los animales estaban <b>a salvo</b>. Dios los protegía.</p>`,
      svg("El arca flota en el agua bajo nubes de lluvia", `${nube(60, 30, 1.1)}${nube(150, 24, 1.2)}${nube(220, 36, 0.9)}${lluvia(30, 50, 210, 40)}${arca(130, 120, 0.9)}<path d="M10 140 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 V170 H10z" fill="var(--water)" opacity=".7"/>${rot(130, 164, "40 días de lluvia", { color: "var(--card)", size: 13 })}`)],
    ["La paloma y el ramo de olivo", `<p>Por fin dejó de llover. Poco a poco, el agua empezó a bajar.</p><p>Noé soltó una <mark>paloma</mark> para ver si había tierra seca. La paloma volvió con una <b>ramita de olivo</b> en el pico. ¡Ya crecían plantas!</p><p>Por eso hoy la paloma con una rama de olivo es un <b>símbolo de la paz</b>.</p>`,
      svg("Una paloma blanca con una rama de olivo en el pico", `${sol(210, 40, 16)}<g transform="translate(110 80) scale(2)">${paloma(0, 0)}</g><path d="M144 70 q14 -2 24 6" stroke="var(--leaf)" stroke-width="2.5" fill="none"/>${[0, 1, 2].map((i) => `<ellipse cx="${150 + i * 7}" cy="${68 + i * 2}" rx="4" ry="2" fill="var(--leaf)" transform="rotate(-20 ${150 + i * 7} ${68 + i * 2})"/>`).join("")}${rot(130, 160, "La paloma de la paz", { color: "var(--pen)" })}`), P.V("noeB2")],
    ["Salir del arca y dar gracias", `<p>Cuando la tierra se secó, Dios dijo: «Salid del arca». Los animales corrieron felices por el campo.</p><p>Lo primero que hizo Noé fue <mark>dar gracias a Dios</mark> por haberlos salvado.</p><p>Noé y su familia empezaron una vida nueva. Plantaron viñas y árboles y cuidaron la tierra.</p>`,
      svg("Noé de rodillas da gracias mientras los animales salen del arca", `${arca(190, 96, 0.7)}${nino(70, 156, { pose: "reza", c: "#8a5a2b", s: 1.2 })}${animal(150, 148, "var(--sun)")}${animal(184, 150, "var(--muted)", 0.9)}${animal(220, 148, "var(--red)", 0.8)}${sol(40, 40, 14)}${suelo(156)}${rot(130, 174, "¡Gracias, Dios!", { color: "var(--leaf)" })}`)],
    ["El arcoíris: una promesa", `<p>Entonces apareció en el cielo un precioso <mark>arcoíris</mark>.</p><p>Dios le dijo a Noé: «Esta es la señal de mi <b>alianza</b> contigo. Nunca más habrá un diluvio así».</p><p>Una <b>alianza</b> es una promesa de amistad para siempre. Cada vez que vemos un arcoíris, podemos recordar que <b>Dios cumple sus promesas</b>.</p>`,
      svg("Un gran arcoíris sobre el campo con el arca al fondo", `${arcoiris(130, 130, 100)}${arca(200, 150, 0.45)}${nube(40, 120, 0.8)}${suelo(156)}${rot(130, 174, "La señal de la alianza", { color: "var(--pen)" })}`)],
    ["¿Para qué sirve?", `<p>La historia de Noé nos enseña a <mark>confiar en Dios</mark>, aunque otros se rían.</p><p>También nos enseña a <b>cuidar de los animales</b> y de la naturaleza, como hizo Noé en el arca.</p><p>Y nos recuerda que hay que cumplir las promesas, como Dios cumple la suya. Si prometes algo a un amigo, ¡hazlo!</p>`,
      svg("Una niña cuida a un perro y le pone agua", `${nino(80, 156, { nina: true, pose: "agacha", c: "var(--red)" })}${animal(140, 146, "var(--sun)", 1.4)}<ellipse cx="190" cy="152" rx="16" ry="5" fill="var(--water)" stroke="var(--ink)" stroke-width="1.5"/>${corazon(130, 60, 1.6)}${suelo(158)}${rot(130, 174, "Cuidar y confiar", { color: "var(--pen)" })}`)],
    ["Juego: el arca de la clase", `<p>Cada niño dibuja <b>un animal</b> en una tarjeta. Después buscáis a quien tenga <mark>el mismo animal</mark> para formar parejas.</p><p>Cuando encontráis vuestra pareja, «subís al arca»: os ponéis en fila detrás de quien hace de Noé.</p><p>Al final, ¡todos juntos dibujáis un gran <b>arcoíris</b> en la pizarra!</p>`,
      svg("Tarjetas con parejas de animales y un arcoíris pequeño", `${[["var(--sun)", 30], ["var(--sun)", 80], ["var(--muted)", 150], ["var(--muted)", 200]].map(([c, x]) => `<rect x="${x - 22}" y="70" width="44" height="54" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${animal(x - 2, 100, c, 0.9)}`).join("")}${arcoiris(130, 52, 34)}${rot(130, 150, "¡Busca tu pareja!", { color: "var(--pen)" })}`)],
  ],
  figura: ["La historia de Noé en 4 pasos", `<svg viewBox="0 0 640 260" role="img" aria-label="Noé construye el arca, entran los animales, llega el diluvio y aparece el arcoíris">
    <rect width="640" height="260" rx="16" fill="var(--paper)"/>
    ${["1. Construye el arca", "2. Entran los animales", "3. El diluvio", "4. El arcoíris"].map((t, i) => `<rect x="${24 + i * 152}" y="24" width="136" height="210" rx="14" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${rot(92 + i * 152, 218, t, { size: 13 })}`).join("")}
    ${arca(92, 140, 0.8)}${animal(230, 160, "var(--sun)")}${animal(260, 160, "var(--sun)")}${animal(230, 120, "var(--muted)")}${animal(262, 120, "var(--muted)")}
    ${nube(396, 60)}${lluvia(350, 80, 90, 40)}${arca(396, 160, 0.55)}${arcoiris(548, 170, 54)}
  </svg>`],
  video: P.V("noeV", true),
  ejemplos: [
    ["¿Por qué construyó Noé el arca aunque se reían de él?", ["Dios se lo había pedido.", "Noé confiaba en Dios."], "porque confiaba en Dios y le hizo caso."],
    ["¿Qué traía la paloma en el pico?", ["Noé la soltó para ver si había tierra seca.", "Volvió con una ramita."], "una rama de olivo."],
    ["¿Qué significa el arcoíris en esta historia?", ["Dios hizo una alianza con Noé.", "Prometió que no habría otro diluvio así."], "es la señal de la promesa de Dios."],
  ],
  errores: [
    "Pensar que Noé metió un solo animal de cada clase: entraban de dos en dos.",
    "Creer que Noé construyó el arca porque le gustaban los barcos: lo hizo porque confiaba en Dios.",
    "Olvidar que lo primero que hizo Noé al salir fue dar gracias.",
    "Pensar que el arcoíris solo es bonito: en la historia es la señal de una promesa.",
  ],
  ejercicios: [
    ["¿Cómo era Noé?", "Un hombre bueno y justo que quería a Dios."],
    ["¿Qué es un arca?", "Un barco muy grande."],
    ["¿Cuántos animales de cada clase entraron en el arca?", "Dos, una pareja."],
    ["¿Cuántos días llovió?", "40 días y 40 noches."],
    ["¿Qué animal soltó Noé para ver si había tierra seca?", "Una paloma."],
    ["¿Qué traía la paloma?", "Una rama de olivo."],
    ["¿Qué hizo Noé al salir del arca?", "Dio gracias a Dios."],
    ["¿Qué es una alianza?", "Una promesa de amistad para siempre."],
    ["Dibuja un arcoíris con sus colores.", "Dibujo libre con rojo, naranja, amarillo, verde, azul y morado."],
    ["Cuenta una vez en que confiaste en alguien que te quiere.", "Respuesta libre."],
  ],
  quiz: [
    ["Noé era un hombre…", ["bueno y justo", "malo", "muy rico"], "Dios se fijó en su buen corazón."],
    ["Dios pidió a Noé que construyera…", ["un arca", "una torre", "un castillo"], "Un barco muy grande."],
    ["Los animales entraban…", ["de dos en dos", "de uno en uno", "de diez en diez"], "Una pareja de cada clase."],
    ["Llovió durante…", ["40 días y 40 noches", "2 días", "un año sin parar"], "Así lo cuenta la Biblia."],
    ["La historia de Noé está en el libro del…", ["Génesis", "Éxodo", "Evangelio de Lucas"], "El primer libro de la Biblia."],
    ["La paloma volvió con…", ["una rama de olivo", "un pez", "una piedra"], "Ya crecían plantas."],
    ["La paloma con el olivo es símbolo de…", ["la paz", "la guerra", "la lluvia"], "La usamos para hablar de paz."],
    ["Al salir, Noé…", ["dio gracias a Dios", "se enfadó", "volvió al arca"], "Agradeció haberse salvado."],
    ["El arcoíris es la señal de…", ["la alianza de Dios", "que va a llover más", "que es de noche"], "Una promesa de amistad."],
    ["La historia nos enseña a…", ["confiar en Dios", "reírnos de los demás", "no cuidar a los animales"], "Noé confió aunque otros se rieran."],
  ],
  examen: [
    ["¿Qué es el diluvio?", ["Una lluvia enorme", "Un animal", "Un barco"], "Llovió hasta cubrir las montañas."],
    ["¿Quién entró en el arca?", ["Noé, su familia y los animales", "Solo Noé", "Nadie"], "Todos se salvaron dentro."],
    ["¿Qué significa alianza?", ["Una promesa de amistad", "Una pelea", "Un viaje"], "Dios prometió cuidar de su pueblo."],
    ["¿Qué nos recuerda el arcoíris?", ["Que Dios cumple sus promesas", "Que hace frío", "Que hay que esconderse"], "Es la señal de la alianza."],
  ],
  feynman: ["Por qué Noé construyó el arca", "Qué significa la paloma con el olivo", "Qué promesa hizo Dios con el arcoíris"],
  mapa: ["NOÉ", [
    ["Confianza", "hizo caso a Dios", "var(--pen)"],
    ["El arca", "familia y animales", "#a8743c"],
    ["La paloma", "olivo: la paz", "var(--leaf)"],
    ["Arcoíris", "la alianza", "var(--red)"],
  ]],
  tarjetas: [
    ["¿Qué construyó Noé?", "Un arca, un barco muy grande"],
    ["¿Cómo entraban los animales?", "De dos en dos"],
    ["¿Cuánto tiempo llovió?", "40 días y 40 noches"],
    ["¿Qué trajo la paloma?", "Una rama de olivo"],
    ["La paloma con el olivo es símbolo de…", "la paz"],
    ["¿Qué hizo Noé al salir?", "Dar gracias a Dios"],
    ["¿Qué es una alianza?", "Una promesa de amistad"],
    ["Señal de la alianza", "El arcoíris"],
  ],
  familias: [
    "Contad juntos la historia de Noé con muñecos o animales de juguete.",
    "Cuando veáis un arcoíris, recordad la promesa de Dios.",
    "Hablad de una promesa que hayáis cumplido en familia.",
    "Cuidad juntos de una mascota o de las plantas de casa.",
  ],
  saberes: "Relatos del Antiguo Testamento: Noé y el arca (Génesis 6-9); la confianza en Dios y la alianza; el arcoíris y la paloma como signos",
  ideas: ["Narración con un arca de cartón y animales de juguete.", "Juego de parejas de animales para subir al arca.", "Mural del arcoíris con compromisos de paz de la clase."],
});
