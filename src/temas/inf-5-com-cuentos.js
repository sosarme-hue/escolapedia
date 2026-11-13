// Infantil 5 años · Comunicación y representación: cuentos (inicio, nudo y final).
const { tema, mapa, svg, rot, big, ic, nino, casa, arbol, suelo, dibujos, mural, lista, vid, PROF, R, A, V, N, M, W, K } = require("./_inf5b");

const cerdito = (x, y, s = 1) => ic("cerdo", x, y, s);
const lobo = (x, y, s = 1) => ic("lobo", x, y, s);
const parte = (x, n, t, c) => `<rect x="${x}" y="20" width="76" height="30" rx="15" fill="${c}"/>${rot(x + 38, 41, `${n}. ${t}`, { color: "#fff", size: 14 })}`;

module.exports = tema({
  materia: "Comunicación y representación de la realidad",
  titulo: "Cuentos: inicio, nudo y final",
  objetivos: ["Saber que un cuento tiene inicio, nudo y final", "Ordenar tres dibujos de un cuento", "Contar un cuento sencillo con sus palabras"],
  claves: ["cuento", "inicio", "nudo", "final", "personaje"],
  pregunta: {
    texto: "¿Cómo empiezan casi todos los cuentos? ¿Y cómo terminan?",
    respuesta: "Muchos empiezan con «<mark>Érase una vez</mark>…» y terminan con «<mark>…y colorín colorado, este cuento se ha acabado</mark>».",
  },
  bloques: [
    {
      html: `<h3>Un cuento tiene tres partes</h3><p>Todos los cuentos tienen <mark>tres partes</mark>.</p><p>El <b>inicio</b>, cuando empieza. El <b>nudo</b>, cuando hay un problema. Y el <b>final</b>, cuando se arregla.</p>`,
      svg: svg("Tres etiquetas en orden: 1 inicio, 2 nudo, 3 final", `${parte(14, 1, "Inicio", A)}${parte(92, 2, "Nudo", R)}${parte(170, 3, "Final", V)}${ic("libro", 130, 108, 2)}${rot(130, 168, "Empieza · pasa algo · se arregla", { color: K })}`),
    },
    {
      html: `<h3>El inicio</h3><p>En el inicio conocemos a los <mark>personajes</mark> y dónde viven.</p><p>«Érase una vez <b>tres cerditos</b> que se hicieron cada uno una casa: de paja, de madera y de ladrillo».</p>`,
      svg: svg("Inicio: tres cerditos delante de tres casas", `${parte(92, 1, "Inicio", A)}${casa(50, 140, "#e0b440")}${casa(130, 140, "#a0703c")}${casa(210, 140, "var(--red)")}${cerdito(50, 158, 0.8)}${cerdito(130, 158, 0.8)}${cerdito(210, 158, 0.8)}`),
    },
    {
      html: `<h3>El nudo</h3><p>En el nudo pasa algo: hay un <mark>problema</mark>.</p><p>¡Llega el <b>lobo</b>! Sopla y sopla y tira la casa de paja y la de madera.</p><p>Los cerditos corren asustados.</p>`,
      svg: svg("Nudo: el lobo sopla y la casa de paja sale volando", `${parte(92, 2, "Nudo", R)}${lobo(60, 110, 1.6)}<g stroke="var(--muted)" stroke-width="3" fill="none" stroke-linecap="round"><path d="M88 100 q16 -6 30 0"/><path d="M88 112 q20 0 36 6"/><path d="M88 124 q16 6 30 12"/></g><g transform="rotate(14 190 120)">${casa(190, 150, "#e0b440")}</g>${cerdito(232, 156, 0.7)}`),
    },
    {
      html: `<h3>El final</h3><p>En el final se <mark>arregla</mark> el problema.</p><p>Los tres cerditos se esconden en la casa de ladrillo. El lobo no puede tirarla y se marcha.</p><p>«…y colorín colorado, este cuento se ha acabado».</p>`,
      svg: svg("Final: los tres cerditos felices en la casa de ladrillo y el lobo se va", `${parte(92, 3, "Final", V)}${casa(110, 150, "var(--red)")}${cerdito(80, 160, 0.7)}${cerdito(110, 160, 0.7)}${cerdito(140, 160, 0.7)}${lobo(216, 130, 0.9)}${flechaR(196, 156, 248, 156)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Si sabemos las tres partes, podemos <mark>contar</mark> cualquier cuento sin perdernos.</p><p>Y también podemos <b>inventar</b> cuentos nuevos: ¿quién es?, ¿qué pasa?, ¿cómo acaba?</p><p>¡Inténtalo esta noche!</p>`,
      svg: lista("Tres preguntas para inventar un cuento", [["¿Quién es y dónde vive?", A], ["¿Qué problema tiene?", R], ["¿Cómo se arregla?", V]], { titulo: "Para inventar un cuento", marca: "n" }),
    },
    {
      html: `<h3>Juego: ordena el cuento</h3><p>Dibuja tres escenas de un cuento que conozcas.</p><p>Mézclalas y pide a alguien que las <mark>ordene</mark>: inicio, nudo y final.</p><p>¿A que es fácil?</p><p>Luego cuenta la historia.</p>`,
      svg: dibujos("Tres dibujos desordenados: final, inicio y nudo", [["casa", "3", V], ["cerdo", "1", A], ["lobo", "2", R]], { titulo: "¿En qué orden van?", nota: "1 cerdito · 2 lobo · 3 casa segura" }),
    },
  ],
  figura: {
    titulo: "Las tres partes del cuento",
    svg: mural("Inicio, nudo y final de Los tres cerditos", [["cerdo", "Inicio", "tres cerditos hacen sus casas", A], ["lobo", "Nudo", "el lobo sopla y tira las casas", R], ["casa", "Final", "se salvan en la casa de ladrillo", V]], "Los tres cerditos"),
  },
  video: { ...vid("1BJecN-s158", "Los tres cerditos y el lobo feroz", "Cuentos y Canciones Infantiles", 69409230), busqueda: "partes de un cuento inicio nudo desenlace para niños" },
  ejemplos: [
    { enunciado: "En Caperucita Roja, ¿qué pasa en el nudo?", pasos: ["Inicio: Caperucita lleva una cesta a su abuela.", "Nudo: el lobo engaña a Caperucita y se mete en la cama de la abuela.", "Final: el cazador las salva."], resultado: "en el nudo, el lobo engaña a Caperucita." },
    { enunciado: "Inventamos un cuento con un gato.", pasos: ["Inicio: había un gato que vivía en un tejado.", "Nudo: un día no podía bajar.", "Final: los bomberos lo bajaron con una escalera."], resultado: "¡ya tenemos un cuento con sus tres partes!" },
  ],
  errores: [
    "Contar el final al principio: el cuento va en orden.",
    "Olvidar el problema: sin nudo, no hay aventura.",
    "Pensar que el inicio es solo «Érase una vez»: también presenta a los personajes.",
  ],
  ejercicios: [
    { q: "Escucha un cuento y di quién es el personaje principal.", sol: "Nota para la familia: leed un cuento corto y preguntad «¿quién es?»." },
    { q: "Di cuál es el problema de Los tres cerditos.", sol: "El lobo quiere tirar sus casas." },
    { q: "Dibuja el final de tu cuento favorito.", sol: "Respuesta libre: que cuente qué ha dibujado." },
    { q: "Ordena tres viñetas de un cuento.", sol: "Nota: recortad tres escenas y que las ponga en orden." },
    { q: "Cuenta un cuento con títeres o muñecos.", sol: "Nota: ayudad con las preguntas ¿quién?, ¿qué pasa?, ¿cómo acaba?" },
    { q: "Inventa un final distinto para Caperucita.", sol: "Respuesta libre: lo importante es que se arregle el problema." },
  ],
  quiz: [
    { q: "¿Cuántas partes tiene un cuento?", o: ["2", "3", "5"], a: 1, e: "Inicio, nudo y final." },
    { q: "¿Cuándo aparece el problema?", o: ["en el inicio", "en el nudo", "en el final"], a: 1, e: "El nudo es el problema." },
    { q: "«Érase una vez…» es…", o: ["el inicio", "el nudo", "el final"], a: 0, e: "Así empiezan muchos cuentos." },
    { q: "En el final, el problema…", o: ["empieza", "se arregla", "no está"], a: 1, e: "El final cierra la historia." },
    { q: "¿Dónde se salvan los cerditos?", o: ["en la casa de paja", "en la de madera", "en la de ladrillo"], a: 2, e: "El lobo no puede tirar la de ladrillo." },
    { q: "«Colorín colorado…» va…", o: ["al principio", "en medio", "al final"], a: 2, e: "Es una forma de acabar." },
  ],
  examen: [
    { q: "Las partes del cuento en orden son…", o: ["final, nudo, inicio", "inicio, nudo, final", "nudo, inicio, final"], a: 1, e: "Inicio, nudo, final." },
    { q: "En el inicio conocemos…", o: ["a los personajes", "el final", "el problema resuelto"], a: 0, e: "Quién es y dónde vive." },
    { q: "¿Quién es el problema en Los tres cerditos?", o: ["el lobo", "el cazador", "la abuela"], a: 0, e: "El lobo sopla las casas." },
  ],
  feynman: ["Cuáles son las tres partes de un cuento", "Qué pasa en el nudo", "Cómo acaba Los tres cerditos"],
  mapa: mapa("EL CUENTO", "var(--pri)", [
    ["Inicio", "quién es y dónde vive", A],
    ["Nudo", "aparece un problema", R],
    ["Final", "el problema se arregla", V],
    ["Inventar", "¿quién? ¿qué pasa? ¿cómo acaba?", N],
  ], 230),
  tarjetas: [
    ["¿Cuántas partes tiene un cuento?", "3: inicio, nudo y final"],
    ["¿Qué hay en el inicio?", "Los personajes y dónde viven"],
    ["¿Qué hay en el nudo?", "Un problema"],
    ["¿Qué hay en el final?", "El problema se arregla"],
    ["¿Cómo empiezan muchos cuentos?", "Érase una vez…"],
    ["¿Cómo acaban?", "…y colorín colorado, este cuento se ha acabado"],
  ],
  familias: [
    "Al leer un cuento, parad en el nudo y preguntad: «¿qué crees que pasará?».",
    "Pedidle que os cuente un cuento conocido con sus palabras.",
    "Inventad cuentos en familia: cada uno pone una parte.",
    "Haced un cuento con tres dibujos grapados como un librito.",
  ],
  profesores: PROF("Comunicación verbal oral y literatura infantil: estructura narrativa básica (inicio, nudo y desenlace), comprensión y recreación de cuentos tradicionales", ["Secuencias de tres viñetas para ordenar.", "Cajas de cuentos con objetos para dramatizar.", "Creación colectiva de un cuento en asamblea."]),
});

function flechaR(...a) { return require("./_inf5b").flechaR(...a); }
