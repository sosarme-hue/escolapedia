// Infantil 5 años · Comunicación y representación: las vocales y primeras consonantes.
const { tema, letras, mapa, svg, rot, big, fichas, dibujos, mural, frase, silabas: s, vid, PROF, R, A, V, N, M, W, K } = require("./_inf5b");

module.exports = tema({
  materia: "Comunicación y representación de la realidad",
  titulo: "Las vocales y primeras consonantes",
  objetivos: ["Reconocer y decir las cinco vocales", "Conocer el sonido de M, P, L y S", "Juntar una consonante y una vocal: MA, PA, LA, SA"],
  claves: ["vocal", "consonante", "sonido", "sílaba"],
  pregunta: {
    texto: "Abre mucho la boca y di «aaa». Ahora cierra los labios y di «mmm». ¿Suenan igual?",
    respuesta: "No. La <mark>A</mark> es una vocal: suena sola con la boca abierta. La <mark>M</mark> es una consonante: necesita una vocal para sonar bien, como en <b>MA</b>.",
  },
  bloques: [
    {
      html: `<h3>Las cinco vocales</h3><p>Hay cinco letras que suenan solas: las <mark>vocales</mark>.</p><p>Son la <b>A</b>, la <b>E</b>, la <b>I</b>, la <b>O</b> y la <b>U</b>.</p><p>¡Cántalas con la boca bien abierta!</p>`,
      svg: fichas("Las cinco vocales en grande: A, E, I, O, U", [["A", R], ["E", A], ["I", V], ["O", N], ["U", M]], { titulo: "Las vocales", nota: "A · E · I · O · U", grande: true }),
    },
    {
      html: `<h3>Cada vocal con un dibujo</h3><p><b>A</b> de <mark>avión</mark>. <b>E</b> de elefante.</p><p><b>I</b> de isla. <b>O</b> de oso. <b>U</b> de uva.</p><p>Di cada palabra despacio y escucha el primer sonido.</p><p>¿Lo oyes?</p>`,
      svg: dibujos("Avión, elefante, isla, oso y uva con su vocal inicial", [["avion", s("A|VIÓN", R), K], ["elefante", s("E|LEFANTE", A), K], ["isla", s("I|SLA", V), K], ["oso", s("O|SO", N), K], ["uva", s("U|VA", M), K]]),
    },
    {
      html: `<h3>Las consonantes</h3><p>Las demás letras son <mark>consonantes</mark>.</p><p>La <b>M</b> suena «mmm», como algo rico. La <b>S</b> suena «sss», como una serpiente.</p><p>La <b>P</b> suena «p» y la <b>L</b> suena «lll».</p>`,
      svg: dibujos("Mano, pato, luna y sol con su consonante inicial", [["mano", s("M|ANO", R), K], ["pato", s("P|ATO", A), K], ["luna", s("L|UNA", V), K], ["sol", s("S|OL", N), K]], { titulo: "M · P · L · S" }),
    },
    {
      html: `<h3>Juntamos letras</h3><p>Si juntamos una consonante y una vocal, sale una <mark>sílaba</mark>.</p><p><b>M</b> y <b>A</b> dicen <b>MA</b>. <b>P</b> y <b>A</b> dicen <b>PA</b>.</p><p>¡Ya sabes decir MAMÁ y PAPÁ!</p>`,
      svg: frase("M más A es MA; P más A es PA", [["M", R], ["+", K], ["A", A], ["=", K], ["MA", V], ["/"], ["P", R], ["+", K], ["A", A], ["=", K], ["PA", V]], { titulo: "Consonante + vocal", nota: "MA + MÁ = MAMÁ", fs: 24 }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Con vocales y consonantes se escriben <mark>todas las palabras</mark>.</p><p>Si conoces sus sonidos, podrás leer carteles, cuentos y los nombres de tus amigos.</p><p>¡Todo empieza con letras!</p>`,
      svg: letras("Las palabras MESA, PALO y SOPA en fichas", [["MESA", A], ["PALO", R], ["SOPA", V]], { titulo: "Ya puedo leer…" }),
    },
    {
      html: `<h3>Juego: veo, veo</h3><p>Di: «Veo, veo una cosa que empieza por <b>S</b>».</p><p>¿Será el <mark>sol</mark>? ¿Una silla? ¿Una sopa?</p><p>Luego juega con la M, la P y la L.</p>`,
      svg: dibujos("Sol, silla y sopa empiezan por S", [["sol", s("S|OL", R), K], ["silla", s("S|ILLA", R), K], ["sopa", s("S|OPA", R), K]], { titulo: "Veo, veo… ¡con S!" }),
    },
  ],
  figura: {
    titulo: "Vocales y primeras consonantes",
    svg: mural("Las vocales A, E, I, O, U y las consonantes M, P, L, S con un dibujo", [["avion", "A", "avión", R], ["elefante", "E", "elefante", A], ["isla", "I", "isla", V], ["oso", "O", "oso", N], ["mano", "M", "mano", M], ["pato", "P", "pato", R], ["luna", "L", "luna", A], ["sol", "S", "sol", V]], "Vocales (arriba) y consonantes (abajo)"),
  },
  video: { ...vid("j1RIUuftxKo", "Sílabas para niños con música: M, P, S, L, N, D, F, T y B", "FIESTIKIDS", 12520927), busqueda: "las vocales y consonantes para niños infantil" },
  ejemplos: [
    { enunciado: "¿Por qué letra empieza OSO?", pasos: ["Decimos la palabra despacio: «ooo-so».", "El primer sonido es «ooo».", "Es la vocal O."], resultado: "OSO empieza por la vocal O." },
    { enunciado: "¿Qué dicen juntas la L y la U?", pasos: ["La L suena «lll».", "La U suena «uuu».", "Las decimos seguidas: «lll-uuu»."], resultado: "dicen LU, como en LUNA." },
  ],
  errores: [
    "Pensar que todas las letras son vocales: solo son cinco, A, E, I, O, U.",
    "Decir el nombre de la letra («eme») en vez de su sonido («mmm»).",
    "Leer la sílaba al revés: M y A dicen MA, no AM.",
  ],
  ejercicios: [
    { q: "Canta las cinco vocales en orden.", sol: "A, E, I, O, U. Nota para la familia: cantadlas con una canción conocida." },
    { q: "Haz la boca de cada vocal delante de un espejo.", sol: "A muy abierta, I sonriendo, O redonda, U como un beso." },
    { q: "Rodea las A de la palabra MAMÁ.", sol: "Hay dos: MAMÁ. Nota: escribidla en grande." },
    { q: "Busca en casa tres cosas que empiecen por M.", sol: "Por ejemplo: mesa, manzana, mochila." },
    { q: "Haz una serpiente con plastilina y di «sss».", sol: "La S suena como una serpiente." },
    { q: "Une con flechas: P + A, M + A, L + A.", sol: "PA, MA, LA. Nota: decidlo en voz alta juntos." },
  ],
  quiz: [
    { q: "¿Cuántas vocales hay?", o: ["5", "3", "10"], a: 0, e: "A, E, I, O, U." },
    { q: "¿Cuál es una vocal?", o: ["M", "O", "S"], a: 1, e: "La O es vocal." },
    { q: "UVA empieza por…", o: ["A", "U", "V"], a: 1, e: "uuu-va." },
    { q: "¿Qué letra suena como una serpiente?", o: ["S", "P", "M"], a: 0, e: "La S: «sss»." },
    { q: "M + A dice…", o: ["AM", "MA", "ME"], a: 1, e: "Primero la M, después la A." },
    { q: "¿Qué palabra empieza por P?", o: ["sol", "pato", "luna"], a: 1, e: "P-ATO." },
  ],
  examen: [
    { q: "¿Cuál es una consonante?", o: ["E", "L", "I"], a: 1, e: "La L es consonante." },
    { q: "LUNA empieza por…", o: ["L", "U", "N"], a: 0, e: "lll-una." },
    { q: "P + A dice…", o: ["PA", "AP", "PE"], a: 0, e: "PA, como en PAPÁ." },
  ],
  feynman: ["Cuáles son las cinco vocales", "Cómo suenan la M, la P, la L y la S", "Qué pasa al juntar consonante y vocal"],
  mapa: mapa("LAS LETRAS", "var(--pri)", [
    ["Vocales", "A · E · I · O · U", R],
    ["Consonantes", "M · P · L · S…", A],
    ["Sílaba", "M + A = MA", V],
    ["Palabras", "MAMÁ, SOPA, PALO", N],
  ], 220),
  tarjetas: [
    ["¿Cuáles son las vocales?", "A, E, I, O, U"],
    ["¿Cómo suena la M?", "«Mmm»"],
    ["¿Cómo suena la S?", "«Sss», como una serpiente"],
    ["M + A = …", "MA"],
    ["¿Por qué letra empieza OSO?", "Por la O"],
    ["P + A = …", "PA"],
  ],
  familias: [
    "Jugad a «Veo, veo» con sonidos: «una cosa que empieza por mmm».",
    "Escribid vocales grandes en papeles y pegadlas por casa para buscarlas.",
    "Leed juntos palabras cortas en envases: MASA, PAN, SAL.",
    "Haced letras con el dedo en la arena, en harina o en la espalda.",
  ],
  profesores: PROF("Aproximación al lenguaje escrito: conciencia fonológica, correspondencia letra-sonido de vocales y primeras consonantes, formación de sílabas directas", ["Caja de objetos clasificados por su sonido inicial.", "Fichas de letras móviles para formar MA, PA, LA, SA.", "Canciones de vocales y juegos de rimas en asamblea."]),
});
