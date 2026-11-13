// Infantil 5 años · Primeros pasos en inglés: Hello, how are you? Inglés oral con ayuda en español.
const { tema, mapa, svg, rot, big, nino, vocab, charla, dibujos, mural, vid, PROF, R, A, V, N, M, W, K } = require("./_inf5b");

module.exports = tema({
  materia: "Primeros pasos en inglés",
  titulo: "Hello, how are you?",
  objetivos: ["Saludar y despedirse en inglés: hello, goodbye", "Preguntar y responder How are you? I'm fine", "Decir su nombre: My name is…"],
  claves: ["hello", "goodbye", "How are you?", "I'm fine", "happy", "sad", "tired", "My name is…"],
  pregunta: {
    texto: "Cuando llegas al cole, ¿qué dices? ¿Sabes decirlo en inglés?",
    respuesta: "Decimos «hola», y en inglés es <mark>Hello!</mark> Luego podemos preguntar: <b>How are you?</b>, que es «¿cómo estás?».",
  },
  bloques: [
    {
      html: `<h3>Hello! Goodbye!</h3><p>Para decir «hola» decimos <mark>Hello!</mark> o <b>Hi!</b></p><p>Para decir «adiós» decimos <mark>Goodbye!</mark> o <b>Bye-bye!</b></p><p>¡Mueve la mano mientras lo dices!</p><p>Así saludan los niños en Inglaterra.</p>`,
      svg: vocab("Un niño dice hello al llegar y una niña dice goodbye al irse", [["nino", "Hello!", "hola", A], ["nina", "Goodbye!", "adiós", R]]),
    },
    {
      html: `<h3>How are you?</h3><p>Para preguntar «¿cómo estás?» decimos <mark>How are you?</mark></p><p>Si estás bien, respondes: <b>I'm fine, thank you!</b></p><p><i>Thank you</i> quiere decir «gracias».</p><p>Se puede decir también: I'm good!</p>`,
      svg: charla("Diálogo: How are you? I'm fine, thank you!", [["nina", "How are you?", A], ["nino", "I'm fine, thank you!", V]]),
    },
    {
      html: `<h3>Happy, sad, tired</h3><p>También podemos decir cómo nos sentimos.</p><p><b>I'm happy</b>: estoy contento. <b>I'm sad</b>: estoy triste. <b>I'm tired</b>: estoy cansado.</p><p>¡Pon la cara de cada uno!</p>`,
      svg: vocab("Caras: happy, sad y tired", [["feliz", "happy", "contento", M], ["triste", "sad", "triste", A], ["cansado", "tired", "cansado", N]], { titulo: "I'm…" }),
    },
    {
      html: `<h3>What's your name?</h3><p>Para preguntar el nombre decimos <mark>What's your name?</mark></p><p>Respondemos: <b>My name is</b> y tu nombre.</p><p>«My name is Lucía». «My name is Pablo».</p><p>¿Cómo te llamas tú?</p>`,
      svg: charla("Diálogo: What's your name? My name is Lucía.", [["nino", "What's your name?", R], ["nina", "My name is Lucía.", A]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saludar en inglés sirve para <mark>hacer amigos</mark> de otros países.</p><p>En vacaciones o en el parque puedes decir: «Hello! My name is…». ¡Y empezar a jugar!</p>`,
      svg: svg("Dos niños de distintos países se saludan en el parque", `${nino(80, 156, { c: A, pose: "arriba" })}${nino(180, 156, { c: R, pose: "arriba", nina: true, pelo: "#d6a23a" })}${rot(80, 40, "Hello!", { color: A, size: 20 })}${rot(180, 40, "Hi!", { color: R, size: 20 })}${rot(130, 174, "¡Amigos nuevos!", { color: K })}`),
    },
    {
      html: `<h3>Juego: la pelota que saluda</h3><p>Sentaos en corro con una pelota.</p><p>Quien la tiene dice <mark>Hello! My name is…</mark> y la pasa.</p><p>Al final, todos decís <b>Goodbye!</b></p><p>¿Recuerdas todos los nombres?</p>`,
      svg: svg("Tres niños se pasan una pelota y dicen su nombre", `${[[50, R], [130, A], [210, V]].map(([x, c], i) => nino(x, 166, { c, s: 0.85, nina: i === 1 })).join("")}<path d="M60 92 Q90 50 120 80 M140 80 Q170 50 200 92" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="4 4"/><circle cx="90" cy="62" r="9" fill="${R}"/>${rot(130, 26, "Hello! My name is…", { color: A, size: 15 })}`),
    },
  ],
  figura: {
    titulo: "Saludos en inglés",
    svg: mural("Hello, How are you?, I'm fine y Goodbye", [["nino", "Hello!", "hola", A], ["interrogacion", "How are you?", "¿cómo estás?", R], ["feliz", "I'm fine!", "estoy bien", V], ["nina", "Goodbye!", "adiós", N]], "Hello, how are you?"),
  },
  video: { ...vid("q5BcGrOny-k", "Hello Song: Hello, hello, how are you? (with lyrics and actions)", "Sing with Bella", 11035043), busqueda: "hello how are you song for kids" },
  ejemplos: [
    { enunciado: "Saludamos a la profe por la mañana.", pasos: ["Decimos: Hello!", "Preguntamos: How are you?", "Ella responde: I'm fine, thank you!"], resultado: "¡ya sabemos saludar en inglés!" },
    { enunciado: "Un niño nuevo pregunta: What's your name?", pasos: ["Escuchamos: «What's your name?» es «¿cómo te llamas?».", "Respondemos: My name is… y nuestro nombre."], resultado: "«My name is Leo»." },
  ],
  errores: [
    "Decir goodbye al llegar: al llegar es hello; al irse, goodbye.",
    "Responder «yes» a How are you?: se responde I'm fine.",
    "Olvidar thank you: siempre damos las gracias.",
  ],
  ejercicios: [
    { q: "Saluda a tu familia en inglés al despertar.", sol: "Hello! / Good morning! Nota para la familia: responded en inglés." },
    { q: "Pregunta How are you? a un peluche y responde por él.", sol: "I'm fine, thank you!" },
    { q: "Pon cara de happy, de sad y de tired.", sol: "Nota: decid la palabra y que haga la cara." },
    { q: "Di tu nombre en inglés.", sol: "My name is… y su nombre." },
    { q: "Despídete en inglés al salir del cole.", sol: "Goodbye! / Bye-bye!" },
    { q: "Canta la canción Hello, hello, how are you?", sol: "Nota: usad el vídeo del tema y haced los gestos." },
  ],
  quiz: [
    { q: "Hello significa…", o: ["adiós", "hola", "gracias"], a: 1, e: "Hello = hola." },
    { q: "Goodbye significa…", o: ["adiós", "hola", "perdón"], a: 0, e: "Goodbye = adiós." },
    { q: "How are you? significa…", o: ["¿cómo te llamas?", "¿cómo estás?", "¿cuántos años tienes?"], a: 1, e: "Se responde I'm fine." },
    { q: "Si estás contento dices…", o: ["I'm sad", "I'm happy", "I'm tired"], a: 1, e: "Happy = contento." },
    { q: "Thank you significa…", o: ["gracias", "por favor", "hola"], a: 0, e: "Thank you = gracias." },
    { q: "My name is Ana significa…", o: ["Me llamo Ana", "Ana es mi amiga", "Adiós, Ana"], a: 0, e: "My name is = me llamo." },
  ],
  examen: [
    { q: "Al llegar al cole dices…", o: ["Hello!", "Goodbye!", "Thank you!"], a: 0, e: "Hello = hola." },
    { q: "Tired significa…", o: ["cansado", "contento", "triste"], a: 0, e: "I'm tired = estoy cansado." },
    { q: "What's your name? significa…", o: ["¿cómo te llamas?", "¿cómo estás?", "¿dónde vives?"], a: 0, e: "Respondemos My name is…" },
  ],
  feynman: ["Cómo se dice hola y adiós en inglés", "Qué respondo a How are you?", "Cómo digo mi nombre en inglés"],
  mapa: mapa("HELLO!", "var(--pri)", [
    ["Hello / Goodbye", "hola / adiós", A],
    ["How are you?", "I'm fine, thank you!", R],
    ["Feelings", "happy · sad · tired", V],
    ["My name is…", "me llamo…", N],
  ], 220),
  tarjetas: [
    ["¿Cómo se dice «hola»?", "Hello!"],
    ["¿Cómo se dice «adiós»?", "Goodbye!"],
    ["How are you?", "I'm fine, thank you!"],
    ["¿Cómo se dice «contento»?", "Happy"],
    ["¿Cómo se dice «gracias»?", "Thank you"],
    ["What's your name?", "My name is…"],
  ],
  familias: [
    "Saludad en inglés por las mañanas y despedíos en inglés por la noche.",
    "Usad un peluche que «solo habla inglés» para practicar los saludos.",
    "Cantad juntos una canción de saludo en inglés.",
    "Preguntadle How are you? y que responda con happy, sad o tired.",
  ],
  profesores: PROF("Primer acercamiento a la lengua extranjera: rutinas orales de saludo y despedida, expresión de estados de ánimo e identificación personal", ["Canción de saludo en inglés en la asamblea de cada día.", "Tarjetas de emociones para el How are you?", "Juego de la pelota con My name is…"]),
});
