// Comunicación y representación, Infantil 4 años: el teatro y los disfraces.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, mascara, teatrillo, titere, corazon, charla, dibujos, mural, ic, vid, R, A, V, N, M, G, PROF, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "4-anos",
  titulo: "El teatro y los disfraces",
  minutos: 15,
  objetivos: ["Saber qué es el teatro y quién participa", "Imitar personajes con la voz, la cara y el cuerpo", "Disfrazarse y representar una escena corta"],
  claves: ["teatro", "actor", "actriz", "público", "disfraz", "títere"],
  pregunta: {
    texto: "Si te pones unas orejas de conejo y saltas, ¿qué eres?",
    respuesta: "¡Eres un <mark>conejo</mark> de mentira! Haces <b>teatro</b>: te disfrazas y haces como si fueras otro.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el teatro?</h3><p>En el <mark>teatro</mark>, unas personas cuentan una historia <b>haciéndola</b>, delante de otras.</p><p>Los que actúan son los <b>actores</b> y las <b>actrices</b>. Los que miran son el <mark>público</mark>.</p>`,
      svg: svg("Un escenario con telón rojo y dos actores; abajo el público mira", `<rect x="20" y="14" width="220" height="100" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><path d="M20 14 q30 50 0 100 M240 14 q-30 50 0 100" fill="var(--red)"/><rect x="20" y="10" width="220" height="12" fill="var(--red)"/>${nino(105, 108, { pose: "brazos", c: A, s: 0.85 })}${nino(155, 108, { pose: "baila", c: V, nina: true, s: 0.85 })}${[50, 90, 130, 170, 210].map((x) => `<circle cx="${x}" cy="140" r="10" fill="#f3c9a1"/><path d="M${x - 10} 138 q10 -14 20 0" fill="var(--ink)"/>`).join("")}${rot(130, 172, "actores arriba · público abajo", { color: G })}`),
    },
    {
      html: `<h3>Hacemos como si…</h3><p>En el teatro <mark>imitamos</mark>. Cambiamos la voz, la cara y la forma de andar.</p><p>Una bruja habla raro. Un gigante anda con pasos enormes. Un gatito se mueve suave.</p><p>¡Tu cuerpo cuenta cosas!</p>`,
      svg: svg("Un niño anda como un gigante con pasos grandes y una niña se agacha como un gatito", `${nino(70, 150, { pose: "corre", c: R, s: 1.3 })}${rot(70, 40, "¡PUM, PUM!", { size: 16, color: R, w: 800 })}${nino(180, 150, { pose: "agacha", c: N, nina: true })}${ic("gato", 232, 128, 1)}${suelo(150)}${rot(70, 172, "gigante", { color: R })}${rot(200, 172, "gatito", { color: N })}`),
    },
    {
      html: `<h3>Las caras del teatro</h3><p>Con la cara mostramos lo que siente el personaje.</p><p>Si está <mark>contento</mark>, sonreímos. Si está <mark>triste</mark>, bajamos la boca. Si se asusta, abrimos mucho los ojos.</p><p>¡Pon cada cara!</p>`,
      svg: svg("Dos máscaras de teatro, una contenta y otra triste", `${mascara(80, 78, true, M, 1.6)}${mascara(180, 78, false, N, 1.6)}${rot(80, 158, "contento", { color: M, size: 16 })}${rot(180, 158, "triste", { color: N, size: 16 })}`),
    },
    {
      html: `<h3>Los disfraces</h3><p>Un <mark>disfraz</mark> nos ayuda a ser otro personaje.</p><p>Con una capa somos reyes. Con un sombrero de pico, magos. ¡Y con unas orejas, animales!</p><p>No hace falta comprar: sirven telas, cajas y papel.</p>`,
      svg: svg("Un niño con capa y corona de rey y una niña con sombrero de mago", `<path d="M58 70 L40 150 L92 150 L76 70z" fill="var(--red)"/>${nino(66, 150, { c: A })}<path d="M56 79 l2 -14 l8 7 l8 -7 l2 14z" fill="var(--sun)"/>${nino(190, 150, { c: V, nina: true, pose: "arriba" })}<path d="M176 79 L190 36 L204 79z" fill="var(--inf)"/><circle cx="190" cy="58" r="3" fill="var(--sun)"/>${suelo(150)}${rot(66, 172, "rey", { color: R })}${rot(190, 172, "maga", { color: N })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Con el teatro aprendemos a <mark>expresarnos</mark> y a perder la vergüenza.</p><p>También a esperar nuestro turno, a escuchar y a trabajar en equipo.</p><p>¡Y nos lo pasamos genial!</p>`,
      svg: dibujos("Hablar, compartir y divertirse: lo que aprendemos con el teatro", [["boca_abierta", "hablar", R], ["corazon", "compartir", A], ["feliz", "divertirse", V]], { titulo: "Con el teatro aprendemos a…" }),
    },
    {
      html: `<h3>Juego: el teatro de títeres</h3><p>Hacemos <mark>títeres</mark> con un calcetín o una bolsa de papel.</p><p>Nos escondemos detrás de una mesa con una tela y los títeres hablan.</p><p>«¡Hola, amigos! ¿Me ayudáis a buscar mi casa?»</p>`,
      svg: svg("Un teatrillo de títeres con dos títeres que se saludan", `${teatrillo(130, 78, 160, 80)}${titere(100, 92, V, 0.9)}${titere(160, 92, A, 0.9)}${rot(130, 30, "¡Hola, amigos!", { size: 13, color: "#fff" })}`),
    },
  ],
  figura: {
    titulo: "En el teatro",
    svg: mural("Cuatro tarjetas: los actores, el público, el disfraz y los títeres", [["nino", "actores", "hacen la historia", R], ["oreja", "público", "mira y escucha", A], ["gorro", "disfraz", "para ser otro", V], ["mano", "títeres", "se mueven con la mano", N]], "Lo que hay en el teatro"),
  },
  video: { ...vid("5TJsD1ASSN4", "La tortuga y la liebre con títeres", "Cuentoaventuras", 1743476), busqueda: "teatro para niños títeres" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Representamos a los tres cerditos.", pasos: ["Repartimos: tres cerditos y un lobo. Los demás son el público.", "El lobo sopla fuerte: «¡Soplaré y soplaré!».", "Los cerditos corren a la casa de ladrillo."], resultado: "¡y el público aplaude!" },
    { enunciado: "Imitamos a un animal sin hablar.", pasos: ["Elegimos un animal en secreto.", "Lo hacemos solo con el cuerpo y la cara.", "Los demás adivinan."], resultado: "¡es un elefante: trompa larga y pasos lentos!" },
  ],
  errores: [
    "Ponerse de espaldas al público: hay que mirar hacia los que ven la obra.",
    "Hablar todos a la vez: cada personaje habla en su turno.",
    "Pensar que hace falta un disfraz caro: una tela o un gorro bastan.",
  ],
  ejercicios: [
    { q: "Haz un títere con un calcetín y dale un nombre.", sol: "Para la familia: botones o papel para los ojos; que invente su voz." },
    { q: "Pon cara de contento, de triste y de susto.", sol: "Para la familia: haced vosotros también las caras y adivinad." },
    { q: "Disfrázate con lo que encuentres en casa.", sol: "Para la familia: una caja de disfraces con telas, gorros y gafas viejas." },
    { q: "Imita a un animal sin hablar.", sol: "Respuesta libre: que los demás adivinen cuál es." },
    { q: "Representa un cuento corto con la familia.", sol: "Para la familia: elegid uno conocido, como los tres cerditos." },
    { q: "Sé el público: mira y aplaude al final.", sol: "Para la familia: aprender a mirar en silencio también es teatro." },
  ],
  quiz: [
    { q: "Los que actúan en el teatro son…", o: ["Los actores", "El público", "Los títeres de cartón"], a: 0, e: "Actores y actrices." },
    { q: "Los que miran la obra son…", o: ["El público", "Los actores", "Los músicos"], a: 0, e: "El público mira y aplaude." },
    { q: "Para ser un rey me pongo…", o: ["Una corona", "Unas aletas", "Un casco de bici"], a: 0, e: "La corona es de rey." },
    { q: "Un títere se mueve con…", o: ["La mano", "Los pies", "La nariz"], a: 0, e: "Metemos la mano dentro." },
    { q: "Si el personaje está triste…", o: ["Bajo la boca", "Me río", "Salto"], a: 0, e: "La boca va hacia abajo." },
    { q: "Al final de la obra el público…", o: ["Aplaude", "Se duerme", "Grita"], a: 0, e: "¡Aplausos!" },
  ],
  examen: [
    { q: "En el teatro, ¿cuándo hablo?", o: ["En mi turno", "Siempre", "A la vez que todos"], a: 0, e: "Cada uno en su turno." },
    { q: "Un disfraz sirve para…", o: ["Ser otro personaje", "Dormir", "Comer"], a: 0, e: "Nos ayuda a ser otro." },
    { q: "Un gigante anda con pasos…", o: ["Enormes", "Pequeñitos", "De puntillas"], a: 0, e: "¡Pum, pum!" },
  ],
  feynman: ["Explica qué hacen los actores y el público", "Haz una escena corta con un títere"],
  mapa: mapa("EL TEATRO", "var(--inf)", [
    ["Actores", "hacen la historia", R],
    ["Público", "mira y aplaude", A],
    ["Disfraces", "para ser otro", V],
    ["Títeres", "con la mano", N],
  ], 220),
  tarjetas: [
    ["¿Quién actúa en el teatro?", "Los actores y las actrices"],
    ["¿Quién mira?", "El público"],
    ["¿Qué me pongo para ser otro?", "Un disfraz"],
    ["¿Con qué movemos un títere?", "Con la mano"],
    ["¿Qué hace el público al final?", "Aplaude"],
    ["¿Cómo pongo cara de triste?", "Bajando la boca"],
  ],
  familias: [
    "Preparad una caja de disfraces con ropa vieja, telas, gorros y gafas.",
    "Haced un teatrillo con una caja de cartón y títeres de calcetín.",
    "Representad juntos un cuento que conozca y cambiad los papeles.",
    "Id a ver teatro infantil o títeres: muchos ayuntamientos tienen funciones gratis.",
  ],
  profesores: PROF("Comunicación y representación de la realidad: lenguaje corporal y dramático, juego simbólico, expresión de emociones, dramatización de textos sencillos y respeto como público", ["Rincón de disfraces y espejo en el aula.", "Teatrillo de títeres con cuentos de la biblioteca de clase.", "Juegos de mímica de animales y oficios."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
