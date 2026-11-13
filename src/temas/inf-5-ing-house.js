// Infantil 5 años · Primeros pasos en inglés: My house. Inglés oral con ayuda en español.
const { tema, mapa, svg, rot, big, ic, nino, vocab, charla, mural, vid, PROF, R, A, V, N, M, W, K } = require("./_inf5b");

// Casa en corte con cuatro habitaciones.
const casaCorte = (extra = "") => `<path d="M30 70 L130 20 L230 70z" fill="${R}"/><rect x="40" y="70" width="180" height="96" fill="var(--card)" stroke="${K}" stroke-width="2.5"/><path d="M130 70 V166 M40 118 H220" stroke="${K}" stroke-width="2"/>${ic("cama", 85, 98, 1)}${ic("banera", 175, 98, 1)}${ic("sofa", 85, 146, 1)}${ic("cocina", 175, 146, 0.9)}${extra}`;

module.exports = tema({
  materia: "Primeros pasos en inglés",
  titulo: "My house",
  objetivos: ["Nombrar las habitaciones de la casa en inglés", "Nombrar door y window", "Decir dónde está algo: in the kitchen"],
  claves: ["house", "bedroom", "bathroom", "kitchen", "living room", "door", "window", "Where is…?"],
  pregunta: {
    texto: "¿Dónde duermes? ¿Y dónde se cocina? ¿Sabes cómo se llaman esas habitaciones en inglés?",
    respuesta: "Dormimos en el <mark>bedroom</mark> y cocinamos en la <mark>kitchen</mark>. La casa en inglés es <b>house</b>.",
  },
  bloques: [
    {
      html: `<h3>My house</h3><p>La casa en inglés es <mark>house</mark>.</p><p>Tiene una <b>door</b>, la puerta, y muchas <b>windows</b>, las ventanas.</p><p>Dentro hay habitaciones: <b>rooms</b>.</p><p>¿Cuántas ventanas tiene tu casa?</p>`,
      svg: vocab("House, door y window", [["casa", "house", "casa", R], ["puerta", "door", "puerta", N], ["ventana", "window", "ventana", W]]),
    },
    {
      html: `<h3>Bedroom and bathroom</h3><p>En el <mark>bedroom</mark> está la cama: es el dormitorio.</p><p>En el <mark>bathroom</mark> nos bañamos y nos lavamos los dientes.</p><p>Escucha bien: bedroom y bathroom se parecen. ¿Dónde duermes tú?</p>`,
      svg: vocab("Bedroom y bathroom", [["cama", "bedroom", "dormitorio", A], ["banera", "bathroom", "baño", W]]),
    },
    {
      html: `<h3>Kitchen and living room</h3><p>En la <mark>kitchen</mark> cocinamos. Es la cocina.</p><p>En el <mark>living room</mark> está el sofá. Es el salón: allí jugamos y vemos la tele.</p><p>¿Dónde comes tú?</p>`,
      svg: vocab("Kitchen y living room", [["cocina", "kitchen", "cocina", R], ["sofa", "living room", "salón", A]]),
    },
    {
      html: `<h3>Where is the cat?</h3><p>Para preguntar «¿dónde está?» decimos <mark>Where is…?</mark></p><p>«Where is the cat?» — «<b>In the kitchen!</b>», en la cocina.</p><p>In quiere decir «en».</p><p>Búscalo en el dibujo.</p>`,
      svg: svg("Casa con cuatro habitaciones y un gato en la cocina", casaCorte(`${ic("gato", 208, 150, 0.6)}${rot(130, 14, "Where is the cat?", { color: K, size: 13 })}`)),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Sirve para <mark>contar cómo es tu casa</mark> y jugar en inglés.</p><p>«My bedroom is blue». «I play in the living room». ¡Enseña tu casa en inglés!</p>`,
      svg: charla("Diálogo: This is my bedroom! It's blue!", [["nino", "This is my bedroom!", A], ["nina", "Wow! It's blue!", R]]),
    },
    {
      html: `<h3>Juego: Hide and seek</h3><p>Escondemos un peluche por casa.</p><p>Preguntamos <mark>Where is Teddy?</mark> y lo buscamos.</p><p>Al encontrarlo decimos dónde estaba: <b>In the bathroom!</b></p><p>Luego lo esconde otra persona.</p>`,
      svg: svg("Un osito escondido en el baño de la casa", casaCorte(`${ic("oso", 196, 104, 0.55)}${rot(130, 14, "Where is Teddy?", { color: K, size: 13 })}`)),
    },
  ],
  figura: {
    titulo: "Rooms in my house",
    svg: mural("Bedroom, bathroom, kitchen y living room", [["cama", "bedroom", "dormitorio", A], ["banera", "bathroom", "baño", W], ["cocina", "kitchen", "cocina", R], ["sofa", "living room", "salón", V]], "My house"),
  },
  video: { ...vid("uP3qXCkKIto", "Can You Find The Cat? Rooms Around The House", "Noodle & Pals", 8185247), busqueda: "rooms in the house song for kids" },
  ejemplos: [
    { enunciado: "¿Dónde nos lavamos los dientes?", pasos: ["Nos lavamos los dientes en el baño.", "Baño en inglés es bathroom."], resultado: "In the bathroom." },
    { enunciado: "Where is the sofa?", pasos: ["El sofá está en el salón.", "Salón es living room."], resultado: "In the living room." },
  ],
  errores: [
    "Confundir bedroom (dormitorio) y bathroom (baño): escucha bien el principio.",
    "Decir «kitchen» para el salón: kitchen es la cocina.",
    "Olvidar in: se dice in the kitchen.",
  ],
  ejercicios: [
    { q: "Recorre tu casa y di el nombre de cada habitación en inglés.", sol: "Nota para la familia: bedroom, bathroom, kitchen, living room." },
    { q: "Cuenta las windows de tu casa.", sol: "Respuesta según la casa. Contad en inglés." },
    { q: "Juega a Hide and seek con un peluche.", sol: "Where is Teddy? In the…" },
    { q: "Dibuja tu bedroom.", sol: "Respuesta libre: que diga My bedroom." },
    { q: "Toca la door y la window.", sol: "Nota: decid la palabra y que la toque." },
    { q: "Pega dibujos de objetos en la habitación correcta.", sol: "Cama en bedroom, bañera en bathroom, sofá en living room, cocina en kitchen." },
  ],
  quiz: [
    { q: "House significa…", o: ["casa", "coche", "cole"], a: 0, e: "House = casa." },
    { q: "Kitchen es…", o: ["el baño", "la cocina", "el salón"], a: 1, e: "Kitchen = cocina." },
    { q: "Dormimos en el…", o: ["bedroom", "bathroom", "kitchen"], a: 0, e: "Bedroom = dormitorio." },
    { q: "Window es…", o: ["puerta", "ventana", "mesa"], a: 1, e: "Window = ventana." },
    { q: "Where is…? significa…", o: ["¿dónde está…?", "¿quién es…?", "¿cuántos…?"], a: 0, e: "Preguntamos el lugar." },
    { q: "El sofá está en el…", o: ["living room", "bathroom", "bedroom"], a: 0, e: "Living room = salón." },
  ],
  examen: [
    { q: "Bathroom es…", o: ["el baño", "el dormitorio", "la cocina"], a: 0, e: "Bath = baño." },
    { q: "Door es…", o: ["puerta", "ventana", "techo"], a: 0, e: "Door = puerta." },
    { q: "Cocinamos en la…", o: ["kitchen", "bedroom", "window"], a: 0, e: "Kitchen = cocina." },
  ],
  feynman: ["Cómo se dice casa, puerta y ventana", "Las cuatro habitaciones en inglés", "Cómo pregunto Where is…?"],
  mapa: mapa("MY HOUSE", "var(--pri)", [
    ["House", "door · window", R],
    ["Sleep and wash", "bedroom · bathroom", A],
    ["Cook and play", "kitchen · living room", V],
    ["Where is…?", "In the kitchen!", N],
  ], 230),
  tarjetas: [
    ["Casa", "House"],
    ["Dormitorio", "Bedroom"],
    ["Baño", "Bathroom"],
    ["Cocina", "Kitchen"],
    ["Salón", "Living room"],
    ["Where is the cat?", "In the kitchen!"],
  ],
  familias: [
    "Pegad carteles en inglés en las puertas de cada habitación.",
    "Jugad a esconder un juguete y preguntad Where is…?",
    "Al ir a una habitación, decidlo en inglés: Let's go to the kitchen!",
    "Dibujad juntos un plano de vuestra casa con los nombres en inglés.",
  ],
  profesores: PROF("Primer acercamiento a la lengua extranjera: vocabulario de la casa y sus estancias, preguntas Where is…? en contextos de juego", ["Casa de muñecas para nombrar estancias.", "Juego de esconder con Where is…? en la clase.", "Canción de las habitaciones con gestos."]),
});
