// Infantil 5 años · Comunicación y representación: leemos palabras cortas.
const { tema, letras, mapa, svg, rot, big, nino, dibujos, trozos, parejas, mural, frase, vid, PROF, R, A, V, N, M, W, K } = require("./_inf5b");

module.exports = tema({
  materia: "Comunicación y representación de la realidad",
  titulo: "Leemos palabras cortas",
  objetivos: ["Leer palabras de dos sílabas directas", "Separar palabras en sílabas con palmadas", "Unir una palabra leída con su dibujo"],
  claves: ["leer", "sílaba", "palabra", "palmada"],
  pregunta: {
    texto: "Mira este cartel: SOL. ¿Qué crees que pone?",
    respuesta: "Pone <mark>SOL</mark>. Lo has leído juntando los sonidos: «sss-ooo-lll». ¡Eso es <b>leer</b>!",
  },
  bloques: [
    {
      html: `<h3>Leer es juntar sonidos</h3><p>Cada letra tiene un sonido.</p><p>Si decimos los sonidos <mark>seguidos</mark>, sale una palabra.</p><p>«Sss-ooo-lll»… ¡<b>SOL</b>! Lee despacio y luego más deprisa.</p><p>¡Eso es leer!</p>`,
      svg: svg("Las letras S, O y L se juntan y forman SOL junto a un sol", `${letrasSol()}`),
    },
    {
      html: `<h3>Palmadas para las sílabas</h3><p>Las palabras se rompen en trocitos: las <mark>sílabas</mark>.</p><p><b>PA-TO</b> tiene dos trocitos: dos palmadas.</p><p><b>MA-RI-PO-SA</b> tiene cuatro. ¡Da una palmada por trocito!</p><p>Prueba con tu nombre.</p>`,
      svg: trozos("PATO en dos sílabas y MARIPOSA en cuatro sílabas", [["pato", ["PA", "TO"], A], ["mariposa", ["MA", "RI", "PO", "SA"], R]]),
    },
    {
      html: `<h3>Leemos de dos en dos</h3><p>Primero leemos un trocito y después el otro.</p><p><b>ME</b> y <b>SA</b>: <mark>MESA</mark>. <b>LU</b> y <b>NA</b>: <mark>LUNA</mark>.</p><p>Si te equivocas, vuelve a empezar despacio.</p>`,
      svg: trozos("MESA, LUNA y SOPA separadas en sílabas", [["mesa", ["ME", "SA"], V], ["luna", ["LU", "NA"], N], ["sopa", ["SO", "PA"], R]]),
    },
    {
      html: `<h3>Leo y busco el dibujo</h3><p>Cuando leemos, <mark>entendemos</mark> qué es.</p><p>Lee <b>OSO</b> y busca el oso. Lee <b>PATO</b> y busca el pato.</p><p>Si la palabra y el dibujo coinciden, ¡lo has leído bien!</p>`,
      svg: parejas("Las palabras OSO, PATO y LUNA unidas a su dibujo", [["", "OSO", "oso", ""], ["", "PATO", "pato", ""], ["", "LUNA", "luna", ""]], { titulo: "Lee y une" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Leer sirve para entender <mark>los carteles</mark>: PAN en la panadería, SALIDA en la puerta.</p><p>Y para leer cuentos tú solo, ¡sin esperar a nadie!</p><p>Leer es muy útil.</p>`,
      svg: dibujos("Un cartel de PAN, uno de SOPA y un libro de cuentos", [["pan", "PAN", R], ["sopa", "SOPA", V], ["libro", "CUENTO", A]], { titulo: "Leo en la calle y en casa" }),
    },
    {
      html: `<h3>Juego: la palabra mágica</h3><p>El adulto escribe una palabra corta y la tapa.</p><p>Destapa <mark>un trocito</mark> y lo lees. Luego el otro.</p><p>¿Qué palabra mágica era? ¡Dibújala!</p><p>¿Lo has adivinado?</p>`,
      svg: svg("Una tarjeta con PA visible y TO tapado por una mano", `<rect x="40" y="46" width="180" height="76" rx="12" fill="var(--card)" stroke="${A}" stroke-width="3"/>${big(92, 100, "PA", A, 40)}<rect x="132" y="52" width="80" height="64" rx="10" fill="${M}"/>${big(172, 96, "?", "var(--card)", 34)}${rot(130, 150, "PA… ¿PATO? ¿PALO? ¿PAPÁ?", { color: K })}`),
    },
  ],
  figura: {
    titulo: "Palabras cortas para leer",
    svg: mural("Cuatro palabras con dibujo y sílabas: OSO, PATO, MESA y LUNA", [["oso", "OSO", "O-SO", R], ["pato", "PATO", "PA-TO", A], ["mesa", "MESA", "ME-SA", V], ["luna", "LUNA", "LU-NA", N]], "Leo cada trocito y junto la palabra"),
  },
  video: { ...vid("uF5gQ4fc3cM", "Aprende a leer con MiniDon: las sílabas para niños", "MiniDon", 3768886), busqueda: "aprender a leer palabras cortas sílabas para niños" },
  ejemplos: [
    { enunciado: "Leemos la palabra PALO.", pasos: ["Tapamos LO y leemos PA.", "Destapamos y leemos LO.", "Lo decimos seguido: PA-LO, PALO."], resultado: "pone PALO." },
    { enunciado: "¿Cuántas sílabas tiene MAMÁ?", pasos: ["Decimos MA y damos una palmada.", "Decimos MÁ y damos otra.", "Contamos las palmadas: 2."], resultado: "MAMÁ tiene 2 sílabas." },
  ],
  errores: [
    "Adivinar la palabra mirando solo la primera letra: hay que leer todas.",
    "Leer muy deprisa y saltarse un trocito.",
    "Dar palmadas por cada letra en vez de por cada sílaba.",
  ],
  ejercicios: [
    { q: "Da palmadas con tu nombre. ¿Cuántos trocitos tiene?", sol: "Nota para la familia: LU-CÍ-A son 3 palmadas; PA-BLO, 2." },
    { q: "Lee estas palabras: MESA, SOPA, PATO.", sol: "Nota: escribidlas en grande y que las lea por sílabas." },
    { q: "Lee y dibuja: LUNA.", sol: "Debe dibujar una luna." },
    { q: "Une cada palabra con su dibujo: OSO, SOL, PATO.", sol: "Nota: dibujad tres dibujos sencillos y escribid las palabras al lado." },
    { q: "Salta una vez por cada sílaba de MARIPOSA.", sol: "MA-RI-PO-SA: 4 saltos." },
    { q: "Busca la palabra PAN en una bolsa o en la tienda.", sol: "Nota: celebrad cuando la encuentre." },
  ],
  quiz: [
    { q: "S-O-L dice…", o: ["SAL", "SOL", "LOS"], a: 1, e: "Sss-ooo-lll: SOL." },
    { q: "¿Cuántas palmadas tiene PATO?", o: ["1", "2", "4"], a: 1, e: "PA-TO: 2." },
    { q: "ME + SA dice…", o: ["MESA", "SAME", "MASA"], a: 0, e: "ME-SA." },
    { q: "Lee: LUNA. ¿Qué es?", o: ["un pato", "la luna", "una mesa"], a: 1, e: "LU-NA es la luna." },
    { q: "¿Qué palabra es más larga?", o: ["SOL", "MARIPOSA", "PAN"], a: 1, e: "MA-RI-PO-SA tiene 4 sílabas." },
    { q: "Para leer bien hay que…", o: ["adivinar", "leer todas las letras", "mirar solo la primera"], a: 1, e: "Leemos todo, despacio." },
  ],
  examen: [
    { q: "O + SO dice…", o: ["OSO", "SOSO", "OS"], a: 0, e: "O-SO: OSO." },
    { q: "¿Cuántas sílabas tiene SOPA?", o: ["2", "3", "1"], a: 0, e: "SO-PA." },
    { q: "Lee: PAN. ¿Dónde lo compras?", o: ["en la panadería", "en el zapatero", "en la farmacia"], a: 0, e: "El pan se compra en la panadería." },
  ],
  feynman: ["Que leer es juntar sonidos", "Que las palabras tienen trocitos (sílabas)", "Que al leer entiendo lo que pone"],
  mapa: mapa("LEER", "var(--pri)", [
    ["Sonidos", "S-O-L = SOL", A],
    ["Sílabas", "una palmada por trocito", R],
    ["Despacio", "leo todas las letras", V],
    ["Entiendo", "busco el dibujo", N],
  ], 220),
  tarjetas: [
    ["¿Qué es leer?", "Juntar los sonidos de las letras"],
    ["PA + TO = …", "PATO"],
    ["¿Cuántas sílabas tiene LUNA?", "2: LU-NA"],
    ["¿Cuántas tiene MARIPOSA?", "4: MA-RI-PO-SA"],
    ["Si me equivoco al leer…", "Vuelvo a empezar despacio"],
    ["¿Dónde puedo leer?", "En carteles, envases y cuentos"],
  ],
  familias: [
    "Leed juntos cada noche un cuento y que lea él o ella una palabra corta de cada página.",
    "Escribid palabras cortas en tarjetas y jugad a emparejarlas con objetos de casa.",
    "En la calle, buscad carteles cortos (PAN, BAR, STOP) y leedlos.",
    "Jugad a dar palmadas con los nombres de la familia.",
  ],
  profesores: PROF("Aproximación al lenguaje escrito: lectura de palabras con sílabas directas, segmentación silábica y relación palabra-imagen", ["Bits de palabra e imagen para asociar.", "Juego de la palabra tapada: descubrir sílaba a sílaba.", "Rincón de lectura con carteles del entorno (envases, rótulos)."]),
});

function letrasSol() {
  const { big: b, sol: so } = require("./_inf5b");
  return `${[["S", R], ["O", A], ["L", V]].map(([l, c], i) => `<rect x="${24 + i * 46}" y="40" width="40" height="50" rx="9" fill="var(--card)" stroke="${c}" stroke-width="3"/>${b(44 + i * 46, 76, l, c, 30)}`).join("")}<path d="M24 112 Q90 140 156 112" stroke="var(--muted)" stroke-width="2.5" fill="none" stroke-dasharray="5 4"/>${b(90, 158, "SOL", K, 30)}${so(210, 90, 24)}`;
}
