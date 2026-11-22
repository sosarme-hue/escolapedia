// Música 2º de Primaria: danzas sencillas. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, negra, flechaR, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
const COL = [P.rojo, P.azul, P.verde, P.naranja, P.morado, P.rosa, P.amarillo, P.celeste];
// Corro visto desde arriba: n círculos alrededor de un centro.
const corro = (cx, cy, r, n, rr = 11) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--line)" stroke-width="3"/>${Array.from({ length: n }, (_, i) => { const a = (i * 360 / n - 90) * Math.PI / 180; return `<circle cx="${(cx + Math.cos(a) * r).toFixed(1)}" cy="${(cy + Math.sin(a) * r).toFixed(1)}" r="${rr}" fill="${COL[i % COL.length]}" stroke="var(--ink)"/>`; }).join("")}`;
const giro = (cx, cy, r, c) => `<path d="M${cx + r} ${cy} A${r} ${r} 0 1 1 ${cx} ${cy - r}" fill="none" stroke="${c}" stroke-width="3"/><path d="M${cx} ${cy - r} l10 -6 v12z" fill="${c}"/>`;

module.exports = {
  materia: "Música",
  curso: "2-primaria",
  titulo: "Danzas sencillas",
  minutos: 20,
  objetivos: ["Bailar danzas sencillas en corro, en filas y por parejas", "Seguir el pulso y la forma de la música con pasos y gestos", "Respetar al grupo y disfrutar bailando juntos"],
  claves: ["danza", "corro", "fila", "pareja", "paso", "giro", "coreografía", "danza popular"],
  pregunta: {
    texto: "¿Has bailado alguna vez en un corro, dando vueltas de la mano?",
    respuesta: "¡Eso es una <mark>danza</mark>! Bailar en grupo siguiendo la música es una de las cosas más antiguas y alegres que hacen las personas. Hay danzas en todos los pueblos del mundo.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una danza?</h3><p>Una <mark>danza</mark> es un baile con pasos que todos aprendemos y hacemos a la vez.</p><p>No es moverse como queramos: hay un orden. Primero un paso, luego otro, y se repite siguiendo la música.</p><p>Las danzas se bailan en fiestas, bodas y celebraciones. Bailar juntos nos une y nos pone contentos.</p>`,
      svg: svg("Un grupo de niños baila juntos de la mano con notas musicales", `${[0, 1, 2, 3].map((i) => nino(40 + i * 60, 154, { c: COL[i], pose: "baila", s: 1.1, nina: i % 2 === 1 })).join("")}${negra(70, 40, P.morado)}${negra(130, 30, P.verde)}${negra(190, 40, P.naranja)}${suelo(156)}`),
    },
    {
      html: `<h3>Antes de bailar</h3><p>Antes de empezar, <mark>escuchamos la música</mark> entera.</p><p>Buscamos el pulso y damos palmas. Así sabemos a qué velocidad hay que moverse.</p><p>También buscamos las partes: dónde empieza una frase, dónde se repite. Cada parte de la música tendrá su paso. ¡La música nos dice cuándo cambiar!</p>`,
      svg: svg("Primero escuchar, después dar palmas en el pulso, después bailar", `${[["1. escuchar", P.azul, "canta"], ["2. palmas", P.verde, "palmas"], ["3. ¡bailar!", P.rojo, "baila"]].map(([t, c, pose], i) => `${nino(48 + i * 84, 140, { c, pose, s: 1.1 })}${etq(48 + i * 84, 164, t, c, 12)}`).join("")}${flechaR(76, 100, 106, 100, "var(--line)")}${flechaR(160, 100, 190, 100, "var(--line)")}`),
    },
    {
      html: `<h3>Danzas en corro</h3><p>En el <mark>corro</mark> nos damos las manos y formamos un círculo.</p><p>Los pasos más fáciles: caminar hacia un lado, caminar hacia el otro, ir todos al centro y volver hacia atrás.</p><p>«A la rueda, rueda» o «El corro de la patata» son canciones de corro. ¡Nadie se queda fuera: en el corro cabemos todos!</p>`,
      svg: svg("Un corro de niños visto desde arriba con flechas: girar a un lado y al otro, ir al centro", `${corro(90, 92, 52, 8)}${giro(90, 92, 30, P.rojo)}${etq(204, 64, "a un lado", P.rojo)}${etq(204, 92, "al otro", P.azul)}${etq(204, 120, "al centro", P.verde)}${etq(204, 148, "atrás", P.morado)}`),
      video: V("mu7b"),
    },
    {
      html: `<h3>Danzas en fila</h3><p>Otras danzas se bailan en <mark>fila</mark>, uno detrás de otro, como un tren.</p><p>Cada uno pone las manos en los hombros del de delante. El primero de la fila elige el camino y los demás le siguen.</p><p>También hay filas de frente: dos filas que se acercan, se saludan y se separan. ¡Parece una conversación con los pies!</p>`,
      svg: svg("Una fila de niños como un tren, cada uno con las manos en los hombros del de delante", `${[0, 1, 2, 3].map((i) => nino(200 - i * 46, 150, { c: COL[i + 2], pose: "brazos", s: 1.1, nina: i % 2 === 0 })).join("")}${flechaR(220, 80, 252, 80, P.rojo)}${etq(130, 30, "¡el tren de la danza!", "var(--pen)", 13)}${suelo(152)}`),
    },
    {
      html: `<h3>Danzas por parejas</h3><p>Por <mark>parejas</mark>, bailamos uno frente al otro o de la mano.</p><p>Pasos típicos: dar palmas con la pareja, girar cogidos del brazo, hacer una reverencia o saludo y cambiar de pareja.</p><p>Al cambiar de pareja bailamos con todos los compañeros. Así nadie se queda solo y conocemos a toda la clase.</p>`,
      svg: svg("Una pareja hace una reverencia y otra gira cogida del brazo", `${nino(46, 154, { c: P.azul, pose: "agacha", s: 1.2 })}${nino(96, 154, { c: P.rojo, pose: "agacha", s: 1.2, nina: true })}${etq(72, 172, "saludo")}${nino(170, 154, { c: P.verde, pose: "baila", s: 1.2 })}${nino(214, 154, { c: P.morado, pose: "baila", s: 1.2, nina: true })}${giro(192, 36, 14, P.naranja)}${etq(192, 172, "giro")}${suelo(156)}`),
    },
    {
      html: `<h3>Pasos con el pulso</h3><p>Cada paso cae en un <mark>pulso</mark> de la música.</p><p>Contamos en voz alta: «uno, dos, tres, cuatro». En cuatro pulsos damos cuatro pasos a la derecha. En otros cuatro, cuatro pasos a la izquierda.</p><p>Si la música es lenta, los pasos son tranquilos. Si es rápida, saltamos. Escuchar y contar nos ayuda a no perdernos.</p>`,
      svg: svg("Huellas de pies numeradas del uno al cuatro hacia la derecha, una por cada pulso", `${[1, 2, 3, 4].map((n, i) => `<g transform="translate(${46 + i * 56} ${100 + (i % 2) * 22})"><ellipse rx="12" ry="18" fill="${COL[i]}" stroke="var(--ink)"/>${[-8, -3, 2, 7].map((d) => `<circle cx="${d}" cy="-24" r="3" fill="${COL[i]}"/>`).join("")}</g>${rot(46 + i * 56, 60, String(n), { size: 18, color: "var(--pen)", w: 800 })}`).join("")}${[0, 1, 2, 3].map((i) => negra(50 + i * 56, 172, P.azul)).join("")}`),
    },
    {
      html: `<h3>Danzas de muchos lugares</h3><p>Cada lugar del mundo tiene sus <mark>danzas populares</mark>.</p><p>En España hay jotas, sardanas, sevillanas o muñeiras. En otros países bailan en corro, con palos, con pañuelos o con cintas de colores.</p><p>Las danzas pasan de abuelos a nietos, igual que las canciones. Cuando las bailamos, mantenemos viva la tradición.</p>`,
      svg: svg("Danzas del mundo: un corro con pañuelos, unos palos de baile y un mástil con cintas de colores", `${nino(46, 150, { c: P.rojo, pose: "arriba", s: 1.1, nina: true })}<rect x="54" y="74" width="16" height="12" fill="#fff" stroke="var(--ink)" transform="rotate(-15 62 80)"/>${etq(46, 170, "pañuelos")}${nino(130, 150, { c: P.azul, pose: "brazos", s: 1.1 })}<path d="M108 98 L100 76 M152 98 L160 76" stroke="#a0522d" stroke-width="4"/>${etq(130, 170, "palos")}<path d="M214 40 V156" stroke="#a0522d" stroke-width="4"/>${[P.rojo, P.amarillo, P.azul, P.verde].map((c, i) => `<path d="M214 42 Q${190 + i * 16} 90 ${178 + i * 24} 132" stroke="${c}" stroke-width="3" fill="none"/>`).join("")}${etq(214, 170, "cintas")}${suelo(152)}`),
    },
    {
      html: `<h3>Bailar en grupo</h3><p>Para que la danza salga bien, todos <mark>colaboramos</mark>.</p><p>Nos damos la mano con suavidad, sin tirar. Miramos a los compañeros y vamos a la vez. Si alguien se equivoca, no nos reímos de él: le ayudamos.</p><p>Lo más importante no es hacerlo perfecto. Es disfrutar, sonreír y bailar todos juntos.</p>`,
      svg: svg("Normas para bailar en grupo: mano suave, ir a la vez y ayudar al compañero", `${nino(60, 150, { c: P.verde, pose: "brazos", s: 1.2 })}${nino(110, 150, { c: P.naranja, pose: "brazos", s: 1.2, nina: true })}<circle cx="85" cy="104" r="6" fill="${P.amarillo}"/>${etq(85, 172, "mano suave")}<g transform="translate(196 82)"><path d="M0 18 C-30 -6 -22 -30 0 -14 C22 -30 30 -6 0 18z" fill="${P.rojo}" stroke="var(--ink)"/></g>${etq(196, 130, "nos ayudamos", P.rojo, 12)}${etq(196, 150, "¡y sonreímos!", P.rojo, 12)}${suelo(152)}`),
    },
    {
      html: `<h3>Jugamos a crear nuestra danza</h3><p>En grupos de cuatro, <mark>inventamos una danza</mark> para una canción que nos guste.</p><p>Elegimos la forma: corro, fila o parejas. Inventamos un paso para la estrofa y otro distinto para el estribillo.</p><p>Ensayamos varias veces contando los pulsos. Después la enseñamos a la clase. ¡Ya somos coreógrafos!</p>`,
      svg: svg("Un plan de danza: estrofa con pasos a un lado, estribillo con giro y palmas", `<rect x="16" y="40" width="108" height="100" rx="12" fill="var(--card)" stroke="${P.azul}" stroke-width="2.5"/>${etq(70, 62, "estrofa", P.azul, 14)}${flechaR(36, 100, 104, 100, P.azul)}${etq(70, 126, "4 pasos a un lado", "var(--ink)", 10)}<rect x="136" y="40" width="108" height="100" rx="12" fill="${P.amarillo}" stroke="#c49000" stroke-width="2.5"/>${etq(190, 62, "estribillo", "#8a6d00", 14)}${giro(190, 98, 16, P.rojo)}${etq(190, 130, "giro y palmas", "var(--ink)", 10)}${etq(130, 166, "¡nuestra danza!", "var(--pen)", 13)}`),
    },
  ],
  figura: {
    titulo: "Danzas sencillas",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Tres formas de bailar: en corro, en fila y por parejas"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 40, "Bailamos siguiendo el pulso", { size: 22, color: "var(--pen)" })}${corro(120, 160, 70, 8, 14)}${giro(120, 160, 40, P.rojo)}${rot(120, 270, "corro", { size: 18 })}${[0, 1, 2].map((i) => nino(370 - i * 44, 230, { c: COL[i + 2], pose: "brazos", s: 1.3 })).join("")}${rot(330, 270, "fila", { size: 18 })}${nino(490, 230, { c: P.azul, pose: "palmas", s: 1.4 })}${nino(550, 230, { c: P.rojo, pose: "palmas", s: 1.4, nina: true })}<circle cx="520" cy="166" r="7" fill="${P.amarillo}"/>${rot(520, 270, "parejas", { size: 18 })}</svg>`,
  },
  video: V("mu7v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Baila «A la rueda, rueda» en corro.",
      pasos: ["Nos damos las manos en círculo.", "Caminamos hacia un lado siguiendo el pulso.", "Al final de la canción, nos agachamos todos."],
      resultado: "Una danza en corro sencilla." },
    { enunciado: "Haz cuatro pasos a la derecha y cuatro a la izquierda.",
      pasos: ["Cuenta «uno, dos, tres, cuatro».", "Un paso en cada número hacia la derecha.", "Repite hacia la izquierda."],
      resultado: "Ocho pasos, uno en cada pulso." },
    { enunciado: "Inventa un paso para el estribillo.",
      pasos: ["Escucha cuándo llega el estribillo.", "Elige un movimiento distinto: un giro o palmas.", "Hazlo cada vez que suene el estribillo."],
      resultado: "La danza cambia con la música." },
  ],
  errores: [
    "Tirar de la mano de los compañeros en el corro.",
    "Moverse sin escuchar la música: cada paso va en un pulso.",
    "Reírse del que se equivoca, en lugar de ayudarle.",
    "Querer hacerlo perfecto: lo importante es disfrutar juntos.",
  ],
  ejercicios: [
    { q: "¿Qué es una danza?", sol: "Un baile con pasos que todos aprendemos y hacemos a la vez." },
    { q: "Di tres formas de bailar en grupo.", sol: "En corro, en fila y por parejas." },
    { q: "¿Qué hacemos antes de bailar?", sol: "Escuchar la música y buscar el pulso." },
    { q: "Di dos pasos de una danza en corro.", sol: "Caminar a un lado, al otro, al centro y atrás." },
    { q: "¿Cómo se baila en fila?", sol: "Uno detrás de otro, con las manos en los hombros del de delante." },
    { q: "¿Para qué cambiamos de pareja?", sol: "Para bailar con todos y que nadie se quede solo." },
    { q: "Nombra una danza popular de España.", sol: "Jota, sardana, sevillana, muñeira…" },
    { q: "¿Qué hacemos si un compañero se equivoca?", sol: "Ayudarle, sin reírnos." },
    { q: "Pregunta en casa qué danzas se bailan en tu pueblo o ciudad.", sol: "Respuesta libre." },
    { q: "Inventa un paso para la estrofa y otro para el estribillo.", sol: "Respuesta libre." },
  ],
  quiz: [
    { q: "En un corro nos colocamos en…", o: ["círculo", "una sola fila", "parejas lejos"], a: 0, e: "Círculo." },
    { q: "Antes de bailar…", o: ["escuchamos la música", "corremos sin parar", "nos tapamos los oídos"], a: 0, e: "Escuchamos." },
    { q: "Cada paso cae en un…", o: ["pulso", "silencio largo", "aplauso del público"], a: 0, e: "Pulso." },
    { q: "En una fila nos ponemos…", o: ["uno detrás de otro", "todos en el centro", "dispersos"], a: 0, e: "Como un tren." },
    { q: "La jota y la sardana son…", o: ["danzas populares", "instrumentos", "colores"], a: 0, e: "Danzas." },
    { q: "Una reverencia es…", o: ["un saludo", "un salto", "un grito"], a: 0, e: "Saludo." },
    { q: "La mano del compañero se coge…", o: ["con suavidad", "tirando fuerte", "con los pies"], a: 0, e: "Suave." },
    { q: "Si la música es rápida, los pasos…", o: ["van más deprisa", "van más lentos", "se paran"], a: 0, e: "Deprisa." },
    { q: "Cambiar de pareja sirve para…", o: ["bailar con todos", "dejar a alguien solo", "terminar"], a: 0, e: "Con todos." },
    { q: "Lo más importante de bailar es…", o: ["disfrutar juntos", "ganar", "no moverse"], a: 0, e: "Disfrutar." },
  ],
  examen: [
    { q: "Una danza tiene…", o: ["pasos en orden", "pasos al azar", "ningún paso"], a: 0, e: "Un orden." },
    { q: "El estribillo puede tener…", o: ["un paso distinto", "silencio total", "ningún pulso"], a: 0, e: "Su propio paso." },
    { q: "Las danzas populares se transmiten…", o: ["de abuelos a nietos", "solo por la tele", "nunca"], a: 0, e: "Tradición." },
    { q: "Quien inventa una danza es…", o: ["coreógrafo", "pintor", "cocinero"], a: 0, e: "Coreógrafo." },
  ],
  feynman: ["Qué es una danza y cómo se prepara", "Cómo se baila en corro, en fila y por parejas", "Cómo se inventa una danza sencilla"],
  mapa: mapa("DANZAS", "var(--pri)", [
    ["Corro", "en círculo, de la mano", "#e53935"],
    ["Fila", "como un tren", "#1e88e5"],
    ["Parejas", "palmas, giros, saludos", "#43a047"],
    ["Pulso", "un paso en cada pulso", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Danza", "Baile con pasos en orden, todos a la vez"],
    ["Corro", "En círculo, cogidos de la mano"],
    ["Fila", "Uno detrás de otro"],
    ["Parejas", "Uno frente al otro"],
    ["Paso", "Movimiento en un pulso"],
    ["Giro", "Dar una vuelta"],
    ["Reverencia", "Saludo de la danza"],
    ["Danza popular", "Jota, sardana, sevillana, muñeira"],
  ],
  familias: [
    "Bailad en familia una canción de corro.",
    "Buscad un vídeo de la danza típica de vuestra región.",
    "Pedid a los abuelos que os enseñen un baile de su juventud.",
    "Inventad juntos una pequeña danza con cuatro pasos.",
  ],
  profesores: PROF("Música y movimiento: danza colectiva (corro, fila, parejas); relación pulso-paso y forma-coreografía; danzas populares y del mundo; respeto y cooperación en el grupo", ["Danzas de corro tradicionales.", "Coreografía por secciones: estrofa y estribillo.", "Creación de una danza en pequeños grupos."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Bailar con pañuelos, cintas y aros", "Seguir una coreografía con figuras", "Conocer danzas tradicionales de España", "Respetar al compañero de baile"],
  lectura: { titulo: "La fiesta del pueblo", html: `<p>En agosto, Elena fue con sus padres a las fiestas del pueblo de sus abuelos.</p><p>Por la tarde, en la plaza, la banda de música empezó a tocar. Las personas mayores se pusieron en un gran corro, se dieron la mano y comenzaron a bailar.</p><p>—Es la <b>jota</b> —le explicó su abuela—. La bailamos aquí desde hace muchísimos años.</p><p>Elena miraba cómo saltaban, giraban y levantaban los brazos al ritmo de las <b>castañuelas</b>. Le parecía dificilísimo.</p><p>—¿Quieres probar? —le preguntó su abuelo, tendiéndole la mano.</p><p>Elena dudó, pero aceptó. El abuelo le enseñó un paso sencillo: un saltito con el pie derecho, otro con el izquierdo, y vuelta.</p><p>Al principio se equivocaba y pisaba a su abuelo. Pero él se reía y le decía:</p><p>—¡No pasa nada! ¡Escucha la música y déjate llevar!</p><p>Poco a poco, Elena cogió el ritmo. Al final del baile, toda la plaza aplaudió.</p><p>—¡El año que viene te enseñaré la jota completa! —le dijo su abuelo, sudando y feliz.</p>` },
  tras: {
    "Antes de bailar": [
      ["Bailar con objetos", `<p>Podemos bailar con <mark>objetos</mark> que hacen nuestros movimientos más bonitos y visibles:</p><ul><li><b>Pañuelos</b>: los movemos arriba y abajo, en círculos, como si fueran pájaros o el viento.</li><li><b>Cintas</b> de gimnasia rítmica: dibujan espirales y serpientes en el aire.</li><li><b>Aros</b>: podemos bailar dentro, girarlos en la cintura o pasarlos al compañero.</li><li><b>Globos</b>: los tocamos al ritmo para que no caigan.</li><li><b>Palos</b> o bastones: los chocamos con el compañero siguiendo el ritmo.</li></ul><p>Con música <b>lenta</b>, movimientos suaves y grandes. Con música <b>rápida</b>, movimientos cortos y enérgicos.</p><p>Los objetos se cuidan: no los tiramos ni los usamos para molestar.</p><p><b>Actividad</b>: haz una cinta con un palo y una tira de papel crepé, y baila con ella.</p>`,
        H6.rueda("Objetos", "BAILAR", [["pañuelo", cRO], ["cinta", cAZ], ["aro", cNA], ["palos", cVE]])],
    ],
    "Danzas por parejas": [
      ["Las figuras de la danza", `<p>Las danzas se forman con <mark>figuras</mark>: movimientos que hacemos juntos. Algunas muy sencillas:</p><ul><li><b>El túnel</b>: dos filas de parejas hacen un puente con los brazos y la última pareja pasa por debajo.</li><li><b>El molino</b>: cuatro personas juntan las manos derechas en el centro y giran.</li><li><b>La cadena</b>: dando la mano derecha a uno y la izquierda al siguiente, avanzamos en zigzag.</li><li><b>El saludo</b>: inclinación hacia la pareja al empezar y al terminar.</li><li><b>El paseo</b>: las parejas caminan juntas en círculo.</li></ul><p>Una <b>coreografía</b> es una danza con varias figuras en orden. Para aprenderla:</p><ul><li>Primero sin música, contando los pasos.</li><li>Después, despacio con música.</li><li>Por último, a la velocidad normal.</li></ul><p><b>Actividad</b>: aprended una coreografía con saludo, paseo, molino y túnel.</p>`,
        H6.flujo("Coreografía", ["saludo|inicio", "paseo|círculo", "molino|girar", "túnel|pasar"], cMO),
        ["FPZhCp5pOFE", "Pica-Pica - El baile de la fruta", "Pica-Pica", 284331310]],
    ],
    "Danzas de muchos lugares": [
      ["Danzas tradicionales de España", `<p>En España hay muchísimas <mark>danzas tradicionales</mark>. Cada región tiene las suyas:</p><ul><li><b>La jota</b>: Aragón, Navarra, Valencia y otros lugares. Con saltos, giros y castañuelas.</li><li><b>La sardana</b>: Cataluña. Se baila en corro, de la mano, con pasos cortos y largos.</li><li><b>La muñeira</b>: Galicia. Con gaitas y pandereta, muy saltarina.</li><li><b>Las sevillanas</b>: Andalucía. Por parejas, con palmas y vueltas.</li><li><b>El chotis</b>: Madrid. Por parejas, muy agarrados, girando sobre una baldosa.</li><li><b>El aurresku</b>: País Vasco. Un baile de honor con patadas muy altas.</li><li><b>La isa</b>: Canarias.</li></ul><p>Muchas se bailan con <b>trajes típicos</b> en las fiestas.</p><p><b>Actividad</b>: busca qué danza tradicional se baila en tu comunidad y aprende un paso.</p>`,
        L6.filas("España", [["jota", "Aragón", cRO], ["sardana", "Cataluña", cAZ], ["muñeira", "Galicia", cVE], ["sevillanas", "Andalucía", cNA]])],
    ],
    "Bailar en grupo": [
      ["Respetar al compañero", `<p>Cuando bailamos con otras personas, el <mark>respeto</mark> es lo más importante:</p><ul><li>Aceptamos a <b>cualquier pareja</b>, sea chico o chica, amigo o no tanto.</li><li>Damos la mano con <b>suavidad</b>: sin apretar ni tirar.</li><li>Si el compañero se equivoca, <b>no nos reímos</b> de él: le ayudamos.</li><li>Si nos equivocamos nosotros, no pasa nada: <b>seguimos</b> bailando.</li><li>Respetamos el <b>espacio</b> de las demás parejas.</li><li>Al terminar, damos las <b>gracias</b> a la pareja.</li></ul><p>Bailar juntos crea <b>amistad</b>: nos coordinamos, nos miramos, sonreímos y compartimos la música.</p><p>Nadie nace sabiendo bailar. ¡Lo importante es disfrutar!</p><p><b>Actividad</b>: bailad una danza cambiando de pareja cada vez que la música pare.</p>`,
        H6.dos("Pareja", ["SÍ", ["suave", "ayudar", "gracias"], cVE], ["NO", ["tirar", "reírse", "empujar"], cRO])],
    ],
  },
  final: [
    ["Bailes del mundo", `<p>En todo el mundo se baila. Algunas <mark>danzas</mark> famosas:</p><ul><li><b>El vals</b> (Austria): por parejas, girando con un ritmo de tres pasos: un, dos, tres.</li><li><b>El tango</b> (Argentina): por parejas, elegante y dramático.</li><li><b>La samba</b> (Brasil): muy alegre, con mucho movimiento de cadera, en el Carnaval.</li><li><b>La danza del león</b> (China): dos bailarines dentro de un disfraz de león, en el Año Nuevo chino.</li><li><b>El haka</b> (Nueva Zelanda): una danza maorí con gritos, golpes en el pecho y caras feroces.</li><li><b>Las danzas africanas</b>: con muchos tambores y movimientos de todo el cuerpo.</li><li><b>El ballet</b> (Francia y Rusia): con zapatillas de punta y saltos muy altos.</li></ul><p><b>Actividad</b>: elige un baile del mundo, busca un vídeo y aprende un paso.</p>`,
      L6.filas("Mundo", [["vals", "Austria", cAZ], ["tango", "Argentina", cMO], ["samba", "Brasil", cVE], ["haka", "N. Zelanda", cRO]])],
    ["Repaso: la fiesta del pueblo", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Las fiestas son en <b>agosto</b>, en la <b>plaza</b> del pueblo.</li><li>Toca la <b>banda</b> de música.</li><li>Los mayores bailan la <b>jota</b> en un gran <b>corro</b>.</li><li>Usan <b>castañuelas</b> para marcar el ritmo.</li><li>El abuelo enseña a Elena un <b>paso sencillo</b>: saltito derecho, saltito izquierdo y vuelta.</li><li>Elena se equivoca, pero el abuelo le dice: «¡Escucha la música y déjate llevar!».</li><li>Al final, toda la plaza <b>aplaude</b>.</li></ul><p>Las danzas tradicionales pasan de abuelos a nietos y unen a todo el pueblo en las fiestas.</p><p><b>Actividad</b>: pregunta a tus abuelos qué bailaban en las fiestas cuando eran jóvenes.</p>`,
      H6.flujo("Jota", ["agosto|plaza", "corro|mayores", "abuelo|enseña", "Elena|¡baila!"], cNA)],
  ],
  ejemplos: [
    ["¿Qué danza se baila en Cataluña en corro?", ["Pasos cortos y largos, de la mano."], "La sardana."],
    ["¿Cómo aprendes una coreografía?", ["De despacio a rápido."], "Primero sin música, después despacio y al final normal."],
  ],
  errores: ["Negarse a bailar con una pareja por ser chico o chica.", "Reírse del compañero que se equivoca."],
  ejercicios: [
    ["b", "Di un objeto para bailar.", "Pañuelo, cinta, aro…"],
    ["b", "¿Qué es una coreografía?", "Una danza con varias figuras en orden."],
    ["b", "¿De dónde es la muñeira?", "De Galicia."],
    ["b", "¿Qué decimos a la pareja al terminar?", "Gracias."],
    ["b", "¿De dónde es el tango?", "De Argentina."],
    ["m", "Explica la figura del molino.", "Cuatro juntan las manos derechas y giran."],
    ["m", "¿Cómo se mueve el pañuelo con música lenta?", "Suave y en grande."],
    ["m", "¿Qué instrumento acompaña la jota?", "Las castañuelas."],
    ["m", "¿Qué haces si tu pareja se equivoca?", "Le ayudo sin reírme."],
    ["m", "¿Qué es el haka?", "Una danza maorí de Nueva Zelanda."],
    ["a", "En la lectura, ¿qué paso enseña el abuelo?", "Saltito derecho, saltito izquierdo y vuelta."],
    ["a", "¿Qué consejo le da el abuelo a Elena?", "Escuchar la música y dejarse llevar."],
    ["a", "Inventa una coreografía con cuatro figuras.", "Respuesta libre."],
    ["a", "¿Por qué crees que las danzas unen al pueblo?", "Porque bailan juntos personas de todas las edades."],
  ],
  quiz: [
    ["Las espirales en el aire se hacen con…", ["cintas", "aros", "palos"], "Objetos."],
    ["Pasar bajo los brazos es el…", ["túnel", "molino", "saludo"], "Figuras."],
    ["Las sevillanas son de…", ["Andalucía", "Galicia", "Madrid"], "España."],
    ["Con la pareja damos la mano…", ["con suavidad", "apretando", "tirando"], "Respeto."],
    ["El vals se baila contando…", ["un, dos, tres", "uno y dos", "hasta diez"], "Mundo."],
  ],
  examen: [
    ["En la lectura, ¿qué danza bailan?", ["la jota", "la sardana", "el tango"], "Lectura."],
    ["¿Quién enseña a Elena?", ["su abuelo", "su madre", "la banda"], "Repaso."],
  ],
  tarjetas: [
    ["Figuras", "Saludo, paseo, molino, túnel, cadena."],
    ["Danzas de España", "Jota, sardana, muñeira, sevillanas, chotis, aurresku."],
  ],
  glosario: [
    ["Danza", "Baile con pasos y movimientos."],
    ["Coreografía", "Danza con figuras en orden."],
    ["Figura", "Movimiento que se hace en grupo al bailar."],
    ["Castañuelas", "Instrumento de madera que se toca con los dedos."],
    ["Jota", "Danza tradicional con saltos."],
    ["Sardana", "Danza catalana en corro."],
    ["Muñeira", "Danza gallega."],
    ["Traje típico", "Ropa tradicional de un lugar."],
    ["Pareja", "Persona con la que se baila."],
    ["Haka", "Danza maorí de Nueva Zelanda."],
  ],
  situacion: {
    titulo: "Festival de danzas",
    reto: "La clase prepara un festival con una danza tradicional, una danza del mundo y una coreografía inventada con objetos.",
    pasos: ["Elegir las tres danzas y repartir los grupos.", "Aprender los pasos despacio y sin música.", "Preparar objetos: pañuelos, cintas o aros.", "Bailar ante las familias respetando a las parejas."],
    producto: "Un festival de danzas de la clase.",
    evaluacion: ["Baila con objetos al ritmo.", "Sigue una coreografía.", "Conoce danzas tradicionales.", "Respeta a su pareja."],
  },
});
