// Inglés 2º de Primaria: My toys. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural, cuantos } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2d");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "2-primaria",
  titulo: "My toys",
  minutos: 20,
  objetivos: ["Nombrar juguetes en inglés", "Decir qué juguete tienes y cuál es tu favorito: I've got a ball", "Contar juguetes y decir dónde están: in, on, under"],
  claves: ["toys", "ball", "doll", "car", "teddy bear", "train", "I've got…", "my favourite toy", "in / on / under"],
  pregunta: {
    texto: "¿Cuál es tu juguete favorito? ¿Sabes cómo se dice en inglés?",
    respuesta: "Los juguetes son <mark>toys</mark>. Puedes decir: <b>My favourite toy is my ball</b> (mi juguete favorito es mi pelota).",
  },
  bloques: [
    {
      html: `<h3>Toys: los juguetes</h3><p>Los juguetes en inglés se llaman <mark>toys</mark>.</p><p>La pelota es <b>ball</b>. El coche es <b>car</b>. La muñeca es <b>doll</b>. El osito de peluche es <b>teddy bear</b>.</p><p>Fíjate: <b>teddy bear</b> tiene la palabra <b>bear</b>, que significa oso. ¿Tienes alguno de estos juguetes en tu habitación? Señálalo y di su nombre.</p>`,
      svg: vocab("Juguetes: ball pelota, car coche, teddy bear osito, doll muñeca", [["pelota", "ball", "pelota", R], ["coche", "car", "coche", A], ["oso", "teddy bear", "osito", Ve], ["nina", "doll", "muñeca", N]], { titulo: "Toys" }),
    },
    {
      html: `<h3>More toys</h3><p>Hay muchos <mark>más juguetes</mark>.</p><p>El tren es <b>train</b>. El avión es <b>plane</b>. El barco es <b>boat</b>. El globo es <b>balloon</b>.</p><p>La cometa es <b>kite</b> y el robot es <b>robot</b>, ¡igual que en español! Los rompecabezas se llaman <b>puzzles</b>. Elige tres y dibújalos en tu cuaderno con su nombre.</p>`,
      svg: vocab("Más juguetes: train tren, plane avión, boat barco, balloon globo", [["tren", "train", "tren", A], ["avion", "plane", "avión", N], ["barco", "boat", "barco", Ve], ["globo", "balloon", "globo", R]], { titulo: "More toys" }),
      video: V("in3b"),
    },
    {
      html: `<h3>I've got a ball</h3><p>Para decir que tienes algo usamos <mark>I've got…</mark></p><p><b>I've got a ball</b> significa «tengo una pelota». <b>I've got a teddy bear</b> es «tengo un osito».</p><p>Si no lo tienes, dices <b>I haven't got a kite</b> (no tengo cometa). Pregunta a un amigo: <b>Have you got a train?</b> Él contesta <b>Yes, I have</b> o <b>No, I haven't</b>.</p>`,
      svg: charla("Have you got a train? Yes, I have! I've got a ball", [["nino", "Have you got a train?", A], ["nina", "Yes, I have!", R], ["nino", "I've got a ball!", A]]),
    },
    {
      html: `<h3>My favourite toy</h3><p>Tu juguete preferido es tu <mark>favourite toy</mark>.</p><p>Puedes decir: <b>My favourite toy is my car</b>. Y añadir cómo es: <b>It's red. It's small.</b></p><p>Así describes tu juguete con colores y tamaños. Recuerda: <b>big</b> es grande y <b>small</b> es pequeño. ¿Cómo es tu juguete favorito? Cuéntalo en inglés.</p>`,
      svg: charla("My favourite toy is my car. It's red. It's small", [["nina", "My favourite toy is my car.", R], ["coche", "It's red. It's small.", A]]),
    },
    {
      html: `<h3>One ball, two balls</h3><p>Si hay <mark>más de uno</mark>, en inglés añadimos una <b>s</b> al final.</p><p><b>One ball</b>, una pelota. <b>Two balls</b>, dos pelotas. <b>One car</b>, <b>three cars</b>.</p><p>Para preguntar cuántos hay decimos <b>How many?</b> Por ejemplo: <b>How many balls?</b> Y contestas con el número: <b>Three!</b> Cuenta tus juguetes en inglés.</p>`,
      svg: cuantos("Uno y muchos: one ball, three balls; one car, three cars", [["pelota", "one ball", "three balls"], ["coche", "one car", "three cars"]], { izq: "one", der: "three" }),
    },
    {
      html: `<h3>In, on, under</h3><p>¿Dónde está el juguete? Usamos <mark>tres palabras</mark> muy útiles.</p><p><b>In</b> es dentro: <b>The ball is in the box</b>. <b>On</b> es encima: <b>The doll is on the bed</b>.</p><p><b>Under</b> es debajo: <b>The car is under the chair</b>. Esconde un juguete y pregunta: <b>Where's the teddy?</b> Tu amigo lo busca y contesta.</p>`,
      svg: lista("Dónde está: in dentro, on encima, under debajo", [["in → dentro", A], ["on → encima", R], ["under → debajo", Ve]], { titulo: "Where's my toy?" }),
    },
    {
      html: `<h3>Cómo suenan</h3><p>Algunas palabras de juguetes <mark>suenan distinto</mark> de como se escriben.</p><p><b>Toy</b> se dice «tói». <b>Doll</b> se dice «dol». <b>Plane</b> se dice «pléin».</p><p><b>Kite</b> se dice «káit». <b>Balloon</b> se dice «balún», con la fuerza al final. Dilos muy despacio y luego muy rápido. ¡Parece un trabalenguas!</p>`,
      svg: lista("Cómo suenan: toy tói, plane pléin, kite káit, balloon balún", [["toy → «tói»", A], ["plane → «pléin»", R], ["kite → «káit»", Ve], ["balloon → «balún»", N]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Muchos juguetes y juegos vienen <mark>con palabras en inglés</mark> en la caja.</p><p>Si sabes inglés, podrás leer los nombres y entender cómo se juega.</p><p>También podrás jugar con niños de otros países en el parque o en la playa. Basta con decir <b>Let's play!</b> (¡Vamos a jugar!) y enseñar tu pelota.</p>`,
      svg: charla("Let's play! Yes! Here's my ball", [["nino", "Let's play!", A], ["nina", "Yes! Here's my ball!", R]]),
    },
    {
      html: `<h3>Jugamos a la caja misteriosa</h3><p>Metemos un juguete en una <mark>caja cerrada</mark>.</p><p>Un niño mete la mano sin mirar y lo toca. Los demás preguntan: <b>What's in the box?</b></p><p>Él adivina por el tacto: <b>It's a car!</b> Luego lo saca para comprobarlo. Si acierta, gana un punto. ¡Después le toca a otro compañero!</p>`,
      svg: charla("Juego de la caja: What's in the box? It's a car!", [["nina", "What's in the box?", R], ["nino", "Mmm… It's a car!", A], ["coche", "Yes!", Ve]]),
    },
  ],
  figura: {
    titulo: "My toys: los juguetes en inglés",
    svg: mural("Juguetes en inglés: ball pelota, car coche, train tren, teddy bear osito", [["pelota", "ball", "pelota", R], ["coche", "car", "coche", A], ["tren", "train", "tren", Ve], ["oso", "teddy bear", "osito de peluche", N]], "My toys"),
  },
  video: V("in3v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Di en inglés que tienes un tren.",
      pasos: ["Tener se dice I've got.", "Tren es train.", "Delante va a: a train."],
      resultado: "«I've got a train.»" },
    { enunciado: "Hay tres coches. ¿Cómo lo dices?",
      pasos: ["Tres es three.", "Coche es car.", "Como son varios, añadimos s: cars."],
      resultado: "«Three cars.»" },
    { enunciado: "La pelota está debajo de la mesa. Dilo en inglés.",
      pasos: ["Pelota es ball.", "Debajo es under.", "Mesa es table."],
      resultado: "«The ball is under the table.»" },
  ],
  errores: [
    "Decir «two ball»: con más de uno se añade s, two balls.",
    "Confundir in (dentro) y on (encima).",
    "Decir «I have got» sin juntar: se dice I've got.",
    "Leer toy como «toi» con la i suave: se dice «tói», como en «hoy».",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «juguetes» en inglés?", sol: "Toys." },
    { q: "¿Qué es una ball?", sol: "Una pelota." },
    { q: "¿Cómo se dice «muñeca»?", sol: "Doll." },
    { q: "Di en inglés: «tengo un osito».", sol: "I've got a teddy bear." },
    { q: "¿Qué significa How many cars?", sol: "¿Cuántos coches?" },
    { q: "Di en inglés: «dos trenes».", sol: "Two trains." },
    { q: "¿Qué significa under?", sol: "Debajo." },
    { q: "Contesta: Have you got a kite?", sol: "Yes, I have o No, I haven't." },
    { q: "Describe tu juguete favorito con dos frases.", sol: "Por ejemplo: My favourite toy is my doll. It's pink." },
    { q: "Esconde un juguete y di dónde está en inglés.", sol: "Por ejemplo: The car is under the bed." },
  ],
  quiz: [
    { q: "«Toys» significa…", o: ["juegos de mesa", "juguetes", "cajas"], a: 1, e: "Toys = juguetes." },
    { q: "«Car» es…", o: ["coche", "tren", "barco"], a: 0, e: "Car = coche." },
    { q: "«Avión» en inglés es…", o: ["boat", "plane", "kite"], a: 1, e: "Plane = avión." },
    { q: "«Teddy bear» es…", o: ["osito de peluche", "muñeca", "robot"], a: 0, e: "Bear = oso." },
    { q: "«I've got a ball» significa…", o: ["Me gusta la pelota", "Tengo una pelota", "Veo una pelota"], a: 1, e: "I've got = tengo." },
    { q: "Dos pelotas se dice…", o: ["two ball", "two balls", "twos ball"], a: 1, e: "Añadimos s: balls." },
    { q: "«On» significa…", o: ["encima", "debajo", "dentro"], a: 0, e: "On = encima." },
    { q: "«In the box» significa…", o: ["encima de la caja", "dentro de la caja", "debajo de la caja"], a: 1, e: "In = dentro." },
    { q: "«Balloon» es…", o: ["pelota", "globo", "cometa"], a: 1, e: "Balloon = globo." },
    { q: "«My favourite toy» es…", o: ["mi juguete favorito", "mi juguete nuevo", "mi caja"], a: 0, e: "Favourite = favorito." },
  ],
  examen: [
    { q: "Contesta: Have you got a doll?", o: ["Yes, I have.", "It's red.", "Three."], a: 0, e: "Yes, I have / No, I haven't." },
    { q: "«Tren» en inglés es…", o: ["train", "boat", "robot"], a: 0, e: "Train = tren." },
    { q: "«The car is under the chair»: el coche está…", o: ["encima de la silla", "debajo de la silla", "en la caja"], a: 1, e: "Under = debajo." },
    { q: "¿Cuántos hay? «How many kites?» →", o: ["Four.", "Kite.", "Yes."], a: 0, e: "Se contesta con un número." },
  ],
  feynman: ["Cómo se llaman los juguetes en inglés", "Cómo decir que tienes algo con I've got", "Qué significan in, on y under"],
  mapa: mapa("MY TOYS", "var(--pri)", [
    ["Toys", "ball, car, doll, train", A],
    ["Tener", "I've got a ball", R],
    ["Contar", "one ball, two balls", Ve],
    ["Dónde", "in, on, under", N],
  ], 230),
  tarjetas: [
    ["juguetes", "toys"],
    ["pelota / coche", "ball / car"],
    ["muñeca / osito", "doll / teddy bear"],
    ["tren / avión / barco", "train / plane / boat"],
    ["Tengo una pelota", "I've got a ball"],
    ["dos pelotas", "two balls"],
    ["dentro / encima / debajo", "in / on / under"],
    ["mi juguete favorito", "my favourite toy"],
  ],
  familias: [
    "Al recoger la habitación, nombrad cada juguete en inglés.",
    "Esconded un juguete y dad pistas: It's under the bed!",
    "Contad juguetes iguales en inglés: one car, two cars…",
    "Jugad a la caja misteriosa con objetos de casa.",
  ],
  profesores: PROF("Lengua extranjera: léxico de juguetes; have got en afirmativa, negativa e interrogativa; plural regular con -s; preposiciones in, on, under", ["Caja misteriosa: adivinar el juguete por el tacto.", "Esconder un juguete y preguntar Where's the…?", "Encuesta de clase: My favourite toy is…"]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Describir juguetes con color, tamaño y forma", "Usar Have you got…? y responder Yes, I have / No, I haven't", "Usar posesivos: my, your, his, her", "Hablar de juegos del patio en inglés"],
  lectura: { titulo: "The toy shop at night", html: `<p>It's night. The toy shop is closed and dark. But inside, something magic happens…</p><p>The <b>teddy bear</b> opens his eyes. "Wake up, everybody!" he says.</p><p>The <b>doll</b> stands up and dances. The <b>robot</b> walks: beep, beep! The red <b>car</b> drives around the shop: vroom, vroom! The <b>ball</b> bounces up and down: boing, boing!</p><p>"Let's play!" says the <b>kite</b>, and it flies over the shelves.</p><p>The <b>train</b> goes round and round on its tracks: choo, choo! The little <b>yo-yo</b> goes up and down.</p><p>They play all night. They are very happy.</p><p>But then, the sun comes up. "Quick! It's morning!" says the teddy bear.</p><p>All the toys run back to their places and close their eyes.</p><p>The shop owner opens the door. "Good morning, toys!" she says. Everything is quiet.</p><p>But look… the red car is on the floor, not on the shelf! Hmm…</p><p><i>(closed: cerrada · bounces: bota · shelves: estanterías · tracks: vías · owner: dueña)</i></p>` },
  tras: {
    "More toys": [
      ["Big, small, round, square", `<p>Para describir juguetes usamos <mark>adjectives</mark>:</p><ul><li><b>Size</b> (tamaño): <b>big</b> (grande), <b>small</b> (pequeño), <b>long</b> (largo).</li><li><b>Shape</b> (forma): <b>round</b> (redondo), <b>square</b> (cuadrado), <b>triangle</b> (triángulo).</li><li><b>Colour</b>: red, blue, yellow, green, pink, purple…</li><li><b>Other</b>: <b>new</b> (nuevo), <b>old</b> (viejo), <b>soft</b> (blandito), <b>fast</b> (rápido).</li></ul><p>Examples:</p><ul><li>«My ball is <b>big</b>, <b>round</b> and <b>red</b>.»</li><li>«I've got a <b>soft brown</b> teddy.»</li><li>«This is a <b>fast blue</b> car.»</li><li>«The kite is a <b>yellow triangle</b>.»</li></ul><p>Recuerda: en inglés el adjetivo va <b>antes</b> del nombre: «a <b>red</b> ball», no «a ball red».</p><p><b>Actividad</b>: describe un juguete sin decir su nombre y tus compañeros lo adivinan.</p>`,
        L6.filas("Describe", [["ball", "big, round", cRO], ["teddy", "soft, brown", cMO], ["car", "fast, blue", cAZ], ["kite", "yellow", cNA]]),
        ["aC5Kpm5M5j8", "Playing With My Car", "Noodle & Pals", 16680443]],
    ],
    "I've got a ball": [
      ["Have you got…?", `<p>Para preguntar si alguien tiene algo decimos <mark>Have you got…?</mark> (¿Tienes…?)</p><ul><li>«<b>Have you got</b> a bike?» — «<b>Yes, I have.</b>» (Sí, tengo.)</li><li>«<b>Have you got</b> a robot?» — «<b>No, I haven't.</b>» (No, no tengo.)</li></ul><p>Para decir que <b>no</b> tenemos algo:</p><ul><li>«I <b>haven't got</b> a train.» (No tengo un tren.)</li></ul><p>Y para otra persona:</p><ul><li>«<b>Has</b> he <b>got</b> a kite?» — «Yes, he <b>has</b>.» / «No, he <b>hasn't</b>.»</li></ul><p>Fíjate en que la respuesta es corta: no repetimos el juguete. Decimos «Yes, I have», no «Yes, I have got a bike».</p><p>Con <i>he</i> y <i>she</i> cambiamos <i>have</i> por <i>has</i>: «She <b>has got</b> a doll.»</p><p><b>Actividad</b>: haz una encuesta: pregunta a cinco compañeros «Have you got a…?» y apunta las respuestas.</p>`,
        L6.dialogo("Got", [["Leo", "Have you got a bike?", cAZ], ["Mia", "Yes, I have!", cRO], ["Leo", "Have you got a robot?", cAZ], ["Mia", "No, I haven't.", cRO]])],
    ],
    "My favourite toy": [
      ["My, your, his, her", `<p>Para decir de quién es algo usamos los <mark>possessives</mark> (posesivos):</p><ul><li><b>my</b>: mi. «This is <b>my</b> doll.»</li><li><b>your</b>: tu. «Is this <b>your</b> ball?»</li><li><b>his</b>: su (de él). «This is Tom's car. It's <b>his</b> car.»</li><li><b>her</b>: su (de ella). «This is Ana's kite. It's <b>her</b> kite.»</li></ul><p>También podemos usar <b>'s</b> con el nombre de la persona:</p><ul><li>«<b>Tom's</b> car» = el coche de Tom.</li><li>«<b>Ana's</b> doll» = la muñeca de Ana.</li></ul><p>Para preguntar de quién es: «<b>Whose</b> is this?» — «It's <b>Leo's</b>.»</p><p>Compartir juguetes es bonito: «Can I play with <b>your</b> train?» — «Yes, of course!»</p><p><b>Actividad</b>: cada uno trae un juguete; mezcladlos y adivinad de quién es cada uno: «It's Ana's!».</p>`,
        H6.rueda("Whose?", "WHOSE", [["my", cAZ], ["your", cVE], ["his", cNA], ["her", cRO]])],
    ],
    "One ball, two balls": [
      ["Playground games", `<p>En el patio jugamos a muchos <mark>games</mark> (juegos). En inglés:</p><ul><li><b>hide and seek</b>: el escondite.</li><li><b>tag</b> (o <b>tig</b>): el pilla-pilla.</li><li><b>hopscotch</b>: la rayuela.</li><li><b>skipping</b>: saltar a la comba.</li><li><b>marbles</b>: las canicas.</li><li><b>football</b> and <b>basketball</b>.</li></ul><p>Frases útiles para jugar:</p><ul><li>«<b>Let's play</b> hide and seek!» (¡Juguemos al escondite!)</li><li>«<b>Can I play?</b>» (¿Puedo jugar?)</li><li>«<b>It's my turn!</b>» (¡Me toca!)</li><li>«<b>You're it!</b>» (¡Te la quedas!)</li><li>«<b>Ready or not, here I come!</b>» (¡Allá voy!)</li></ul><p>Recuerda: «<b>Play fair!</b>» (¡Juega limpio!) y deja jugar a todos.</p><p><b>Actividad</b>: en el recreo, jugad al escondite contando hasta 20 en inglés.</p>`,
        H6.dos("Games", ["RUN", ["tag", "hide and seek", "football"], cVE], ["JUMP", ["hopscotch", "skipping", "marbles"], cMO])],
    ],
  },
  final: [
    ["Toys of the past", `<p>Hace muchos años, los niños jugaban con <mark>toys</mark> muy diferentes:</p><ul><li><b>Wooden toys</b>: juguetes de madera, como trenes y caballitos.</li><li>A <b>spinning top</b>: una peonza.</li><li>A <b>rag doll</b>: una muñeca de trapo.</li><li>A <b>hoop</b>: un aro que se hacía rodar con un palo.</li><li><b>Tin soldiers</b>: soldaditos de hojalata.</li></ul><p>No tenían pilas ni pantallas. ¡Pero se divertían mucho!</p><p>Hoy tenemos <b>video games</b>, <b>tablets</b> y <b>remote control cars</b> (coches teledirigidos). Algunos juguetes antiguos todavía nos encantan: el yo-yo, la peonza y la cometa.</p><p>Pregunta a tus abuelos: «<b>What was your favourite toy?</b>» (¿Cuál era tu juguete favorito?)</p><p><b>Actividad</b>: fabrica un juguete con materiales reciclados y ponle nombre en inglés.</p>`,
      L6.filas("Past", [["spinning top", "peonza", cNA], ["rag doll", "de trapo", cRO], ["hoop", "aro", cVE], ["wooden", "de madera", cMO]])],
    ["Repaso: the toy shop at night", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>It's <b>night</b> and the shop is <b>closed</b>.</li><li>The <b>teddy bear</b> says: «Wake up, everybody!»</li><li>The <b>doll</b> dances, the <b>robot</b> walks (beep, beep!), the <b>car</b> drives (vroom!).</li><li>The <b>ball</b> bounces (boing!) and the <b>kite</b> flies.</li><li>The <b>train</b> goes «choo, choo!» and the <b>yo-yo</b> goes up and down.</li><li>In the morning, the toys go back to their places.</li><li>But the <b>red car</b> is on the floor!</li></ul><p>Fíjate en los sonidos: en inglés también hay onomatopeyas, como <i>vroom</i>, <i>beep</i> y <i>boing</i>.</p><p><b>Actividad</b>: inventa qué hacen tus juguetes por la noche y cuéntalo en inglés.</p>`,
      H6.flujo("Night", ["teddy|wake up", "toys|play", "sun|quick!", "car|floor"], cAZ)],
  ],
  ejemplos: [
    ["Pregunta si tu amigo tiene una cometa.", ["Have you got + a kite?"], "Have you got a kite?"],
    ["Di que el coche es de Tom.", ["Nombre + 's."], "It's Tom's car."],
  ],
  errores: ["Contestar «Yes, I have got» en lugar de «Yes, I have».", "Usar his para una chica: «Ana and his doll»."],
  ejercicios: [
    ["b", "How do you say «redondo»?", "Round."],
    ["b", "What is «hide and seek»?", "El escondite."],
    ["b", "How do you say «mi muñeca»?", "My doll."],
    ["b", "Answer: Have you got a ball?", "Yes, I have / No, I haven't."],
    ["b", "What is a «kite»?", "Una cometa."],
    ["m", "Order: ball / a / red / big", "A big red ball."],
    ["m", "Complete: «This is Ana's doll. It's ___ doll.»", "Her."],
    ["m", "Translate: No tengo un robot.", "I haven't got a robot."],
    ["m", "What does «It's my turn» mean?", "Me toca."],
    ["m", "Name two toys of the past.", "Spinning top, rag doll…"],
    ["a", "In the reading, what does the robot say?", "Beep, beep!"],
    ["a", "Why is the red car on the floor?", "Because it didn't go back to its place in time."],
    ["a", "Describe your favourite toy with three adjectives.", "Open answer."],
    ["a", "Write a dialogue to ask to play with a friend's toy.", "Open answer."],
  ],
  quiz: [
    ["Blandito is…", ["soft", "fast", "square"], "Adjectives."],
    ["Have you got a bike? — Yes, I…", ["have", "am", "do"], "Have got."],
    ["Tom's car = ___ car.", ["his", "her", "my"], "Possessives."],
    ["El escondite is…", ["hide and seek", "tag", "hopscotch"], "Games."],
    ["A rag doll is made of…", ["cloth", "metal", "plastic"], "Past."],
  ],
  examen: [
    ["In the reading, who wakes up first?", ["the teddy bear", "the doll", "the robot"], "Reading."],
    ["What is on the floor in the morning?", ["the red car", "the ball", "the kite"], "Repaso."],
  ],
  tarjetas: [
    ["Have you got…?", "Yes, I have. / No, I haven't."],
    ["Possessives", "my, your, his, her; Tom's car."],
  ],
  glosario: [
    ["Round", "Redondo."],
    ["Square", "Cuadrado."],
    ["Soft", "Blando."],
    ["Have you got", "¿Tienes?"],
    ["His", "Su (de él)."],
    ["Her", "Su (de ella)."],
    ["Whose", "De quién."],
    ["Hide and seek", "El escondite."],
    ["Turn", "Turno."],
    ["Spinning top", "Peonza."],
  ],
  situacion: {
    titulo: "Toy museum",
    reto: "La clase monta un museo de juguetes con fichas en inglés de juguetes de ahora y de antes.",
    pasos: ["Traer un juguete o fabricar uno reciclado.", "Escribir una ficha: name, colour, size, whose.", "Preguntar a la familia por un juguete antiguo.", "Presentar el museo: «This is my robot. It's big and grey.»"],
    producto: "Un museo de juguetes con fichas en inglés.",
    evaluacion: ["Describe juguetes con adjetivos.", "Usa Have you got…?", "Usa posesivos.", "Nombra juegos del patio."],
  },
});
