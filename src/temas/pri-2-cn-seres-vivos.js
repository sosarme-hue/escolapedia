// Ciencias de la Naturaleza 2º de Primaria: los seres vivos. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, nino, perro, gato, ave, pez, mariposa, caracol, planta, arbol, flor, sol, gota, huevo, semilla, tierra, hierba, chip, tick, equis, flechaR, piedra, caja, coche } = require("./_pri2b");

module.exports = tema({
  materia: "Ciencias de la Naturaleza",
  titulo: "Los seres vivos",
  objetivos: ["Distinguir los seres vivos de los inertes", "Conocer las tres funciones vitales: nutrición, relación y reproducción", "Clasificar los seres vivos en animales, plantas y otros grupos"],
  claves: ["ser vivo", "ser inerte", "nutrición", "relación", "reproducción", "ciclo de la vida"],
  pregunta: {
    texto: "Un coche se mueve y hace ruido. Un árbol no se mueve de sitio. ¿Cuál de los dos es un ser vivo?",
    respuesta: "El <mark>árbol</mark>. Nació de una semilla, se alimenta, crece y da semillas nuevas. El coche se mueve, pero no nace, no come y no crece: es un <b>objeto inerte</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un ser vivo?</h3><p>Un <mark>ser vivo</mark> es todo lo que tiene vida. Las personas, los animales y las plantas son seres vivos.</p><p>Todos los seres vivos <b>nacen</b>, <b>crecen</b>, se <b>alimentan</b>, pueden tener <b>crías</b> y, al final, <b>mueren</b>. Tú también eres un ser vivo: naciste y no paras de crecer.</p>`,
      svg: svg("Una niña, un perro y un árbol: los tres son seres vivos", `${hierba(146)}${nino(52, 146, { nina: true, c: "var(--red)" })}${perro(130, 146, 1.2)}${arbol(212, 146, 1.2)}${big(130, 30, "¡Tienen vida!", "var(--leaf)", 20)}`),
    },
    {
      html: `<h3>Los seres inertes</h3><p>Una piedra, el agua o un juguete <mark>no tienen vida</mark>. Son <b>seres inertes</b>.</p><p>Los seres inertes no nacen ni crecen. No comen ni respiran. Algunos están en la naturaleza, como las rocas o la arena. Otros los fabrican las personas, como los coches o las mesas. ¡Que algo se mueva no quiere decir que esté vivo!</p>`,
      svg: svg("Una piedra, una caja y un coche: no tienen vida", `<path d="M14 150 H246" stroke="var(--line)" stroke-width="3"/><path transform="translate(50 150) scale(1.3)" d="M-22 0 Q -26 -16 -10 -20 Q 6 -28 18 -16 Q 28 -6 20 0 Z" fill="#9aa3b5" stroke="var(--ink)" stroke-width="1.5"/>${caja(130, 150, 1.2)}${coche(208, 150, "var(--pen)", 1.1)}${txt(50, 172, "piedra")}${txt(130, 172, "caja")}${txt(208, 172, "coche")}${big(130, 34, "Sin vida", "var(--muted)", 20)}`),
    },
    {
      html: `<h3>La nutrición</h3><p>Los seres vivos necesitan <mark>alimento, agua y aire</mark>. Eso es la <b>nutrición</b>.</p><p>Los animales comen plantas u otros animales. Las plantas fabrican su propio alimento con la luz del sol, el agua y el aire. Gracias a la comida tenemos fuerza y podemos crecer.</p>`,
      svg: svg("Una planta toma luz del sol y agua de la tierra; un pájaro come una semilla", `${sol(40, 40, 16)}${flechaR(58, 56, 92, 86, "var(--sun)")}${tierra(132)}${planta(110, 132, 1.3, false)}${[0, 1, 2].map((i) => `<path d="M${100 + i * 10} 162 V 140" stroke="var(--water)" stroke-width="2" stroke-dasharray="3 3"/>`).join("")}${ave(200, 128, 1.3, "var(--water)")}${semilla(236, 128)}${txt(110, 30, "luz + agua + aire", "var(--leaf)", 12)}${txt(205, 80, "come semillas", "var(--pen)", 12)}`),
    },
    {
      html: `<h3>La relación</h3><p>Los seres vivos <mark>se dan cuenta</mark> de lo que pasa a su alrededor y responden. Eso es la <b>relación</b>.</p><p>Un gato oye un ruido y gira las orejas. Tú tocas algo caliente y quitas la mano. ¡Las plantas también! Sus hojas se giran para buscar la luz del sol.</p>`,
      svg: svg("Un gato oye un ruido y una planta se gira hacia el sol", `<path d="M14 150 H246" stroke="var(--line)" stroke-width="3"/>${gato(70, 150, 1.4)}<path d="M112 70 q8 8 0 16 M120 64 q12 14 0 28" stroke="var(--pen)" stroke-width="2.5" fill="none" stroke-linecap="round"/>${txt(60, 60, "¡Un ruido!", "var(--pen)", 13)}${sol(226, 36, 14)}<g transform="translate(180 150) rotate(18)">${planta(0, 0, 1.2, true)}</g>${flechaR(206, 50, 196, 70, "var(--sun)")}`),
    },
    {
      html: `<h3>La reproducción</h3><p>Los seres vivos pueden tener <mark>hijos o crías</mark> parecidos a ellos. Eso es la <b>reproducción</b>.</p><p>Algunos animales nacen de la tripa de su madre, como el perro. Otros nacen de un <b>huevo</b>, como la gallina. Las plantas nacen de una <b>semilla</b>. Así siempre hay seres vivos nuevos.</p>`,
      svg: svg("Un huevo del que sale un pollito y una semilla de la que sale una planta", `${tierra(140)}${huevo(52, 112, 1.6)}<path d="M38 106 l6 6 l6 -6 l6 6 l6 -6" stroke="var(--ink)" stroke-width="1.5" fill="none"/>${flechaR(78, 110, 104, 110)}<g transform="translate(124 126)"><circle cy="-12" r="13" fill="var(--sun)"/><circle cx="4" cy="-15" r="2" fill="#1b2235"/><path d="M12 -12 l7 2 l-7 2z" fill="var(--inf)"/></g>${semilla(176, 150, 1.4)}${flechaR(192, 146, 208, 128)}${planta(228, 140, 1, false)}${txt(76, 44, "huevo → pollito", "var(--ink)", 13)}${txt(200, 44, "semilla → planta", "var(--ink)", 13)}<path d="M138 30 V150" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/>`),
    },
    {
      html: `<h3>El ciclo de la vida</h3><p>Todos los seres vivos siguen el mismo camino: <mark>nacen, crecen, se reproducen y mueren</mark>. Es el <b>ciclo de la vida</b>.</p><p>Una mariposa nace de un huevo pequeñito. Primero es una oruga que come hojas. Después hace un capullo. ¡Y al final sale volando una mariposa!</p>`,
      svg: svg("El ciclo de la mariposa: huevo, oruga, capullo y mariposa", `${[["huevo", 60, 46], ["oruga", 200, 46], ["capullo", 200, 122], ["mariposa", 60, 122]].map(([t, x, y]) => `<circle cx="${x}" cy="${y}" r="25" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>${txt(x, y + 42, t, "var(--leaf)", 13)}`).join("")}<circle cx="60" cy="46" r="6" fill="var(--sun)"/><path d="M186 48 q7 -10 14 0 q7 -10 14 0" stroke="var(--leaf)" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="200" cy="122" rx="8" ry="16" fill="#b9773a"/>${mariposa(60, 128, 0.9)}${flechaR(92, 46, 168, 46)}${flechaR(230, 66, 230, 102)}${flechaR(168, 122, 92, 122)}${flechaR(30, 102, 30, 66)}`),
      video: V("EpeWjb0Sh1U"),
    },
    {
      html: `<h3>Animales, plantas y más</h3><p>Hay muchísimos seres vivos. Los agrupamos para conocerlos mejor. Los dos grupos más conocidos son los <mark>animales</mark> y las <mark>plantas</mark>.</p><p>También son seres vivos las <b>setas</b> y unos seres tan pequeños que solo se ven con un microscopio: los <b>microbios</b>. ¡Algunos nos ayudan a hacer el yogur!</p>`,
      svg: svg("Cuatro grupos de seres vivos: animales, plantas, setas y microbios", `${[["animales", 34], ["plantas", 98], ["setas", 162], ["microbios", 226]].map(([t, x]) => chip(x, 160, 58, t, "var(--leaf)", 11)).join("")}${caracol(34, 132, 0.9)}${flor(98, 132, "var(--inf)")}<g transform="translate(162 132)"><rect x="-4" y="-16" width="8" height="16" fill="#f5ecd7" stroke="var(--ink)"/><path d="M-20 -14 a20 16 0 0 1 40 0z" fill="var(--red)"/><circle cx="-8" cy="-22" r="3" fill="#fff"/><circle cx="6" cy="-24" r="3" fill="#fff"/></g><circle cx="226" cy="110" r="26" fill="var(--card)" stroke="var(--muted)" stroke-width="3"/>${[[-8, -6], [6, 4], [-4, 10], [10, -8]].map(([a, b]) => `<ellipse cx="${226 + a}" cy="${110 + b}" rx="5" ry="3" fill="var(--leaf)"/>`).join("")}${big(130, 40, "Seres vivos", "var(--leaf)", 20)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saber qué necesitan los seres vivos nos ayuda a <mark>cuidarlos</mark>.</p><p>Si tienes una mascota, necesita comida, agua limpia y cariño. Una planta en casa necesita agua y luz. Y tú también: comer bien, beber agua y respirar aire limpio te ayuda a crecer sano.</p>`,
      svg: svg("Un niño da de beber a su perro y riega una planta", `<path d="M14 150 H246" stroke="var(--line)" stroke-width="3"/>${nino(132, 150, { c: "var(--pen)", pose: "brazos" })}${perro(36, 150, 1)}<path d="M74 150 h24 l-3 -9 h-18z" fill="var(--water)" opacity=".7"/>${planta(206, 150, 1.1, true)}${gota(184, 92)}${gota(192, 104, 0.8)}${txt(130, 30, "Agua, comida y luz", "var(--pen)", 15)}`),
    },
    {
      html: `<h3>Juego: ¿vivo o inerte?</h3><p>Mira cada dibujo y hazte <b>tres preguntas</b>: ¿ha nacido? ¿se alimenta? ¿crece?</p><p>Si las tres respuestas son <mark>sí</mark>, es un ser vivo. Si son <b>no</b>, es inerte. El pez y la flor están vivos. El balón y la piedra, no. ¿Y una nube? ¡No! No nace ni come.</p>`,
      svg: svg("Un pez y una flor con un visto; un balón y una piedra con una cruz", `${pez(46, 80, 1.1)}${flor(112, 90, "var(--red)")}<circle cx="168" cy="70" r="16" fill="var(--red)"/><path d="M152 70 h32" stroke="#fff" stroke-width="3"/><path transform="translate(224 86)" d="M-22 0 Q -26 -16 -10 -20 Q 6 -28 18 -16 Q 28 -6 20 0 Z" fill="#9aa3b5" stroke="var(--ink)" stroke-width="1.5"/>${tick(46, 124)}${tick(112, 124)}${equis(168, 124)}${equis(224, 124)}${txt(80, 160, "vivos", "var(--ok)", 15)}${txt(196, 160, "inertes", "var(--red)", 15)}`),
    },
  ],
  figura: {
    titulo: "Las tres funciones vitales",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Nutrición: comer y beber. Relación: notar y responder. Reproducción: tener crías">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[["Nutrición", "comer, beber, respirar", "var(--leaf)", 110], ["Relación", "notar y responder", "var(--pen)", 320], ["Reproducción", "tener crías", "var(--red)", 530]].map(([t, d, c, x]) => `<circle cx="${x}" cy="110" r="70" fill="var(--card)" stroke="${c}" stroke-width="4"/>${rot(x, 230, t, { size: 22, color: c, w: 800 })}${rot(x, 252, d, { size: 14, color: "var(--muted)" })}`).join("")}
      ${manzanaF(110, 110)}${oreja(320, 110)}${huevo(510, 116, 2)}${huevo(552, 116, 2)}
    </svg>`,
  },
  video: V("l7kJSQcrd4E", "seres vivos y no vivos para niños"),
  ejemplos: [
    { enunciado: "¿Una flor es un ser vivo?", pasos: ["¿Ha nacido? Sí, de una semilla.", "¿Se alimenta? Sí, con agua, aire y luz.", "¿Crece? Sí, cada día un poco."], resultado: "la flor es un ser vivo." },
    { enunciado: "¿Un robot que anda es un ser vivo?", pasos: ["¿Ha nacido? No, lo fabricaron.", "¿Se alimenta? No, usa pilas.", "¿Crece? No, siempre mide lo mismo."], resultado: "el robot es inerte, aunque se mueva." },
    { enunciado: "El perro ladra cuando llaman a la puerta. ¿Qué función vital es?", pasos: ["El perro oye el timbre: nota algo.", "Ladra: responde a lo que ha notado.", "Notar y responder es la relación."], resultado: "es la función de relación." },
  ],
  errores: [
    "Pensar que todo lo que se mueve está vivo: un coche o el viento se mueven, pero no tienen vida.",
    "Creer que las plantas no son seres vivos porque no andan: nacen, se alimentan y crecen.",
    "Pensar que las plantas comen tierra: fabrican su alimento con luz, agua y aire.",
    "Olvidar que las personas también somos seres vivos.",
  ],
  ejercicios: [
    { q: "Di tres seres vivos que veas desde la ventana.", sol: "Por ejemplo: un árbol, un pájaro y una persona." },
    { q: "Di tres seres inertes que haya en tu mochila.", sol: "Por ejemplo: un lápiz, un cuaderno y una goma." },
    { q: "¿Qué tres preguntas hacemos para saber si algo está vivo?", sol: "¿Ha nacido? ¿Se alimenta? ¿Crece?" },
    { q: "Rodea los seres vivos: gato, silla, rosa, piedra, niña.", sol: "Gato, rosa y niña." },
    { q: "¿Cuáles son las tres funciones vitales?", sol: "Nutrición, relación y reproducción." },
    { q: "Ordena el ciclo de la vida: crecer, morir, nacer, reproducirse.", sol: "Nacer, crecer, reproducirse y morir." },
    { q: "¿De dónde nace una planta?", sol: "De una semilla." },
    { q: "Una planta se gira hacia la ventana. ¿Qué función vital es?", sol: "La relación: nota la luz y se gira hacia ella." },
    { q: "Dibuja el ciclo de la mariposa en cuatro dibujos.", sol: "Huevo, oruga, capullo y mariposa." },
    { q: "¿Qué necesita una mascota para vivir bien?", sol: "Comida, agua limpia, un sitio para descansar y cariño." },
  ],
  quiz: [
    { q: "¿Cuál es un ser vivo?", o: ["Una piedra", "Un caracol", "Una pelota"], a: 1, e: "El caracol nace, come y crece." },
    { q: "¿Cuál es un ser inerte?", o: ["Un árbol", "Un gato", "Una mesa"], a: 2, e: "La mesa no nace ni crece." },
    { q: "Comer, beber y respirar es la función de…", o: ["nutrición", "relación", "reproducción"], a: 0, e: "La nutrición nos da alimento." },
    { q: "Tener crías es la función de…", o: ["relación", "reproducción", "nutrición"], a: 1, e: "Así nacen seres vivos nuevos." },
    { q: "Las plantas fabrican su alimento con…", o: ["tierra y piedras", "luz, agua y aire", "juguetes"], a: 1, e: "Usan la luz del sol." },
    { q: "Un pollito nace de…", o: ["una semilla", "un huevo", "una flor"], a: 1, e: "Las gallinas ponen huevos." },
    { q: "Un coche se mueve, pero…", o: ["es un ser vivo", "es inerte", "es una planta"], a: 1, e: "No nace ni crece." },
    { q: "¿Qué viene después de nacer?", o: ["Morir", "Crecer", "Volar"], a: 1, e: "Nacer, crecer, reproducirse y morir." },
    { q: "Una oruga se convierte en…", o: ["mariposa", "caracol", "pájaro"], a: 0, e: "Primero hace un capullo." },
    { q: "Las setas son…", o: ["seres vivos", "piedras", "juguetes"], a: 0, e: "Nacen y crecen: están vivas." },
  ],
  examen: [
    { q: "¿Qué tienen en común todos los seres vivos?", o: ["Nacen, crecen y se alimentan", "Tienen patas", "Viven en el agua"], a: 0, e: "Son las señales de la vida." },
    { q: "El gato gira las orejas al oír un ruido. Es la función de…", o: ["nutrición", "relación", "reproducción"], a: 1, e: "Nota algo y responde." },
    { q: "¿Cuál NO es un ser vivo?", o: ["Una nube", "Una rosa", "Un pez"], a: 0, e: "La nube no nace ni come." },
    { q: "¿Qué necesita una planta?", o: ["Agua y luz", "Caramelos", "Oscuridad"], a: 0, e: "Sin agua ni luz, se seca." },
  ],
  feynman: ["Qué es un ser vivo y qué es un ser inerte", "Las tres funciones vitales con un ejemplo", "El ciclo de la vida de la mariposa"],
  mapaT: ["LOS SERES VIVOS", [
    ["Nutrición", "comer · beber · respirar", "var(--leaf)"],
    ["Relación", "notar y responder", "var(--pen)"],
    ["Reproducción", "crías · huevos · semillas", "var(--red)"],
    ["Inertes", "no nacen ni crecen", "var(--muted)"],
  ]],
  tarjetas: [
    ["¿Qué es un ser vivo?", "Algo que nace, se alimenta, crece y muere"],
    ["¿Qué es un ser inerte?", "Algo que no tiene vida"],
    ["¿Cuáles son las funciones vitales?", "Nutrición, relación y reproducción"],
    ["¿Qué es la nutrición?", "Tomar alimento, agua y aire"],
    ["¿Qué es la relación?", "Notar lo que pasa y responder"],
    ["¿Qué es la reproducción?", "Tener crías o semillas"],
    ["Ciclo de la vida", "Nacer, crecer, reproducirse y morir"],
    ["¿Una seta está viva?", "Sí, es un ser vivo"],
  ],
  familias: [
    "En un paseo, jugad a «¿vivo o inerte?» con las tres preguntas: ¿nace?, ¿come?, ¿crece?",
    "Plantad una lenteja en algodón húmedo y apuntad cada día cuánto crece.",
    "Si tenéis mascota, que diga qué necesita para su nutrición y cómo se relaciona.",
    "Mirad fotos suyas de bebé y hablad del ciclo de la vida: nacer y crecer.",
  ],
  saberes: "Los seres vivos: diferencias con la materia inerte; las funciones vitales básicas (nutrición, relación y reproducción) y el ciclo de vida",
  ideas: ["Clasificar fotos en dos aros: «vivo» e «inerte», justificando con las tres preguntas.", "Cría de gusanos de seda en clase para observar el ciclo de la vida.", "Semillero de lentejas con diario de crecimiento dibujado."],
});

// Manzana grande para la figura.
function manzanaF(x, y) { return `<g transform="translate(${x} ${y})"><circle r="34" fill="var(--red)"/><path d="M0 -32 q4 -14 14 -18" stroke="var(--ink)" stroke-width="3" fill="none"/><ellipse cx="16" cy="-44" rx="12" ry="6" fill="var(--leaf)"/></g>`; }
// Oreja grande con ondas de sonido.
function oreja(x, y) { return `<g transform="translate(${x} ${y})"><path d="M-10 -36 q30 -6 32 22 q2 20 -14 28 q-8 4 -6 16 q-2 12 -14 8" fill="#f3c9a1" stroke="#c68b5c" stroke-width="3"/><path d="M-36 -20 q-10 20 0 40 M-50 -30 q-16 30 0 60" stroke="var(--pen)" stroke-width="4" fill="none" stroke-linecap="round"/></g>`; }
