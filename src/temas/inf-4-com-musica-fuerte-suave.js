// Comunicación y representación, Infantil 4 años: música, fuerte y suave.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, tambor, nota, ic, parejas, dibujos, mural, vid, R, A, V, N, M, G, PROF, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "4-anos",
  titulo: "Música: fuerte y suave",
  minutos: 15,
  objetivos: ["Distinguir sonidos fuertes y sonidos suaves", "Tocar y cantar fuerte o suave", "Moverse según la música"],
  claves: ["fuerte", "suave", "sonido", "música", "silencio"],
  pregunta: {
    texto: "¿Cómo suena un trueno? ¿Y una hoja que cae?",
    respuesta: "El trueno suena <mark>fuerte</mark>: ¡BUM! La hoja suena <mark>suave</mark>, casi no se oye.",
  },
  bloques: [
    {
      html: `<h3>Sonidos fuertes</h3><p>Un sonido <mark>fuerte</mark> se oye mucho, aunque estés lejos.</p><p>El león que ruge, el tambor, la sirena de los bomberos y el trueno suenan fuerte.</p><p>¡A veces nos tapamos las orejas!</p>`,
      svg: dibujos("Un león, un trueno y la bocina de un coche: sonidos fuertes", [["leon", "león", R], ["rayo", "trueno", M], ["coche", "bocina", A]], { titulo: "Suenan FUERTE", nota: "¡Se oyen mucho!" }),
    },
    {
      html: `<h3>Sonidos suaves</h3><p>Un sonido <mark>suave</mark> se oye poquito. Hay que estar callados para escucharlo.</p><p>El ratón que corre, el viento flojito, una nana para dormir o un susurro suenan suave.</p>`,
      svg: dibujos("Un ratón, el viento y una cuna con su nana: sonidos suaves", [["raton", "ratón", N], ["viento", "viento", A], ["cuna", "nana", V]], { titulo: "Suenan suave", nota: "Se oyen poquito" }),
    },
    {
      html: `<h3>Fuerte o suave</h3><p>El mismo instrumento puede sonar <mark>fuerte o suave</mark>.</p><p>Si golpeas el tambor con fuerza: ¡BUM, BUM! Si lo tocas con la punta de los dedos: pom, pom.</p><p>¡Tú decides!</p>`,
      svg: svg("Un tambor grande golpeado fuerte con letras grandes y un tambor tocado suave con letras pequeñas", `${tambor(70, 110, 1.4)}${rot(70, 50, "¡BUM!", { size: 30, color: R, w: 800 })}${tambor(190, 110, 1)}${rot(190, 66, "pom", { size: 13, color: N })}${rot(70, 160, "fuerte", { color: R, size: 16 })}${rot(190, 160, "suave", { color: N, size: 16 })}`),
    },
    {
      html: `<h3>Cantamos fuerte y suave</h3><p>Nuestra <mark>voz</mark> también puede ser fuerte o suave.</p><p>En el patio podemos cantar fuerte. Si el bebé duerme, cantamos suave, muy bajito.</p><p>¡Prueba a cantar una canción de las dos maneras!</p>`,
      svg: svg("Un niño canta fuerte con notas grandes y una niña canta suave junto a una cuna", `${nino(60, 150, { pose: "arriba", c: R, boca: "abierta", s: 1.1 })}${nota(100, 60, R)}${nota(124, 44, R)}${nino(180, 150, { pose: "canta", c: N, nina: true, s: 1.1 })}${nota(205, 66, N, false).replace('<g transform="translate(205 66)">', '<g transform="translate(205 66) scale(.6)">')}${ic("cuna", 232, 132, 1)}${suelo(150)}${rot(60, 172, "fuerte", { color: R })}${rot(195, 172, "suave", { color: N })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saber hablar fuerte o suave nos ayuda a <mark>cuidar a los demás</mark>.</p><p>En clase o en la biblioteca hablamos suave. En el parque podemos gritar jugando.</p><p>¡Y la música es más bonita con cambios!</p>`,
      svg: parejas("En la biblioteca hablamos suave; en el parque podemos hablar fuerte", [["libro", "biblioteca", "", "suave"], ["pelota", "parque", "", "fuerte"]], { titulo: "¿Dónde hablo fuerte o suave?", color: A, color2: R, flecha: "→" }),
    },
    {
      html: `<h3>Juego: el león y el ratón</h3><p>Suena la <mark>música</mark>. Si suena fuerte, somos leones: andamos grandes y rugimos.</p><p>Si suena suave, somos ratones: andamos de puntillas y en silencio.</p><p>¡Escucha bien para cambiar!</p>`,
      svg: svg("Un niño hace de león grande y una niña camina de puntillas como un ratón", `${nino(50, 150, { pose: "arriba", c: R })}${ic("leon", 105, 100, 1.4)}${nino(170, 150, { pose: "agacha", c: N, nina: true, s: 0.85 })}${ic("raton", 225, 128, 1)}${suelo(150)}${rot(75, 172, "música fuerte", { color: R })}${rot(195, 172, "música suave", { color: N })}`),
    },
  ],
  figura: {
    titulo: "Fuerte y suave",
    svg: mural("Cuatro tarjetas: el león y el tambor suenan fuerte; el ratón y la nana suenan suave", [["leon", "FUERTE", "el león ruge", R], ["rayo", "FUERTE", "el trueno: ¡BUM!", R], ["raton", "suave", "el ratón corre", N], ["cuna", "suave", "la nana", N]], "Sonidos fuertes y sonidos suaves"),
  },
  video: { ...vid("xyVCGf-KqwA", "Ritmografía fuerte / suave", "Isa Música", 191429), busqueda: "forte piano intensidad del sonido infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cómo suena la sirena de los bomberos?", pasos: ["Imaginamos el camión de bomberos.", "Su sirena se oye desde muy lejos: ¡ninooo, ninooo!"], resultado: "suena fuerte." },
    { enunciado: "Damos palmas fuerte y suave.", pasos: ["Palmas fuertes: manos abiertas y con fuerza.", "Palmas suaves: con dos dedos sobre la mano.", "Alternamos: fuerte, suave, fuerte, suave."], resultado: "¡ya hacemos música con las manos!" },
  ],
  errores: [
    "Pensar que suave es lo mismo que lento: suave es flojito, lento es despacio.",
    "Gritar para cantar fuerte: se canta fuerte sin hacerse daño en la garganta.",
    "Tocar los instrumentos siempre igual: se pueden tocar fuerte y suave.",
  ],
  ejercicios: [
    { q: "Cierra los ojos y escucha: ¿qué sonido es fuerte y cuál suave?", sol: "Para la familia: haced sonidos con objetos de casa (cazo, papel, llaves)." },
    { q: "Toca una cacerola fuerte y luego suave.", sol: "Para la familia: con una cuchara de madera; cambiad cuando digáis «¡león!» o «¡ratón!»." },
    { q: "Canta «Cumpleaños feliz» muy fuerte y luego muy suave.", sol: "Para la familia: sin gritar; la voz fuerte también es bonita." },
    { q: "Muévete como un león con música fuerte y como un ratón con música suave.", sol: "Para la familia: subid y bajad el volumen para que cambie." },
    { q: "Dibuja un sonido fuerte (grande) y uno suave (pequeño).", sol: "Respuesta libre: por ejemplo, un trueno grande y una hoja pequeña." },
    { q: "Escucha el silencio un minuto. ¿Qué sonidos suaves oyes?", sol: "Para la familia: el reloj, un pájaro, la nevera…" },
  ],
  quiz: [
    { q: "El trueno suena…", o: ["Fuerte", "Suave", "No suena"], a: 0, e: "¡BUM! Se oye mucho." },
    { q: "El ratón suena…", o: ["Fuerte", "Suave", "Como un león"], a: 1, e: "Se oye poquito." },
    { q: "En la biblioteca hablamos…", o: ["Fuerte", "Suave", "Gritando"], a: 1, e: "Para no molestar." },
    { q: "Una nana para dormir es…", o: ["Suave", "Fuerte", "Un grito"], a: 0, e: "Se canta bajito." },
    { q: "Si golpeo el tambor con fuerza suena…", o: ["Fuerte", "Suave", "Nada"], a: 0, e: "Más fuerza, más sonido." },
    { q: "Con música suave andamos como…", o: ["Leones", "Ratones", "Elefantes"], a: 1, e: "De puntillas, como ratones." },
  ],
  examen: [
    { q: "¿Qué suena más fuerte?", o: ["Una hoja", "Una sirena", "Un susurro"], a: 1, e: "La sirena se oye desde lejos." },
    { q: "Para que duerma el bebé cantamos…", o: ["Suave", "Fuerte", "Gritando"], a: 0, e: "Bajito y suave." },
    { q: "El león ruge…", o: ["Fuerte", "Suave", "En silencio"], a: 0, e: "¡GRRR!" },
  ],
  feynman: ["Explica qué es un sonido fuerte y uno suave", "Toca algo fuerte y luego suave"],
  mapa: mapa("FUERTE Y SUAVE", "var(--inf)", [
    ["Fuerte", "se oye mucho", R],
    ["Suave", "se oye poquito", N],
    ["Ejemplos fuertes", "trueno, león, tambor", A],
    ["Ejemplos suaves", "ratón, nana, hoja", V],
  ], 220),
  tarjetas: [
    ["¿Cómo suena el trueno?", "Fuerte"],
    ["¿Cómo suena una nana?", "Suave"],
    ["¿Cómo hablamos en la biblioteca?", "Suave"],
    ["¿Qué animal hace un sonido fuerte?", "El león"],
    ["¿Qué animal hace un sonido suave?", "El ratón"],
    ["¿Un tambor puede sonar suave?", "Sí, si lo tocamos flojito"],
  ],
  familias: [
    "Jugad al «león y el ratón» con música en casa subiendo y bajando el volumen.",
    "Haced una orquesta con cacerolas, botes con arroz y cucharas.",
    "Al pasear, parad un momento a escuchar: ¿qué sonidos fuertes y suaves hay?",
    "Cantad una canción conocida cambiando el volumen a mitad.",
  ],
  profesores: PROF("Comunicación y representación de la realidad: lenguaje musical, cualidades del sonido (intensidad: fuerte y suave), discriminación auditiva, la voz y los instrumentos de pequeña percusión", ["Juego del león y el ratón con música grabada o instrumento.", "Musicograma con dibujos grandes y pequeños.", "Paseo sonoro por el centro escolar."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
