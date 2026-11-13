// Inglés 2º de Primaria: My house. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2d");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "2-primaria",
  titulo: "My house",
  minutos: 20,
  objetivos: ["Nombrar las habitaciones de la casa en inglés", "Nombrar muebles y objetos de cada habitación", "Decir dónde está alguien: Mum is in the kitchen"],
  claves: ["house", "kitchen", "bedroom", "bathroom", "living room", "garden", "bed", "sofa", "Where's…?", "in the…"],
  pregunta: {
    texto: "¿En qué habitación de tu casa duermes? ¿Y en cuál cocináis?",
    respuesta: "Duermes en el dormitorio, <mark>bedroom</mark>. Cocináis en la cocina, <mark>kitchen</mark>. La casa entera es <b>house</b>.",
  },
  bloques: [
    {
      html: `<h3>My house</h3><p>La casa en inglés es <mark>house</mark>. Si vives en un piso, es <b>flat</b>.</p><p>Una casa tiene puerta, <b>door</b>, y ventanas, <b>windows</b>. Arriba está el tejado, <b>roof</b>.</p><p>Dentro hay varias habitaciones, que se llaman <b>rooms</b>. Cada una sirve para algo distinto. ¿Cuántas habitaciones tiene tu casa? Cuéntalas en inglés.</p>`,
      svg: vocab("La casa: house casa, garden jardín, flowers flores", [["casa", "house", "casa", R], ["arbol", "garden", "jardín", Ve], ["flor", "flowers", "flores", A]], { titulo: "My house" }),
    },
    {
      html: `<h3>Rooms: las habitaciones</h3><p>Vamos a <mark>recorrer la casa</mark> en inglés.</p><p>La cocina es <b>kitchen</b>. El dormitorio es <b>bedroom</b>. El baño es <b>bathroom</b>. El salón es <b>living room</b>.</p><p>Fíjate: <b>bedroom</b> tiene <b>bed</b> (cama) y <b>room</b> (habitación). ¡Es la habitación de la cama! Y <b>bathroom</b> es la habitación del baño.</p>`,
      svg: vocab("Habitaciones: kitchen cocina, bedroom dormitorio, bathroom baño, living room salón", [["sopa", "kitchen", "cocina", R], ["cama", "bedroom", "dormitorio", A], ["agua", "bathroom", "baño", N], ["silla", "living room", "salón", Ve]], { titulo: "Rooms" }),
      video: V("in4b"),
    },
    {
      html: `<h3>In the bedroom</h3><p>En el dormitorio hay <mark>muebles</mark>, que en inglés son <b>furniture</b>.</p><p>La cama es <b>bed</b>. El armario es <b>wardrobe</b>. La lámpara es <b>lamp</b>.</p><p>En la mesilla hay un reloj, <b>clock</b>. Y en la estantería, los juguetes, <b>toys</b>. Por la noche me meto en la cama y digo <b>Good night!</b> ¿Qué hay en tu dormitorio? Nómbralo en inglés.</p>`,
      svg: vocab("En el dormitorio: bed cama, clock reloj, toys juguetes", [["cama", "bed", "cama", A], ["reloj", "clock", "reloj", R], ["juguete", "toys", "juguetes", Ve]], { titulo: "In the bedroom" }),
    },
    {
      html: `<h3>In the kitchen and the living room</h3><p>En la cocina está la <mark>nevera</mark>, <b>fridge</b>, y la mesa, <b>table</b>.</p><p>Comemos con cuchara, <b>spoon</b>. En el salón está el sofá, <b>sofa</b>, y la tele, <b>TV</b>.</p><p>Hay sillas, <b>chairs</b>, para sentarnos. Muchas familias comen juntas en la cocina o en el salón. ¿Dónde coméis vosotros?</p>`,
      svg: vocab("En la cocina y el salón: table mesa, chair silla, spoon cuchara", [["mesa", "table", "mesa", A], ["silla", "chair", "silla", R], ["cuchara", "spoon", "cuchara", Ve]], { titulo: "Kitchen and living room" }),
    },
    {
      html: `<h3>Where's Mum?</h3><p>Para preguntar dónde está alguien decimos <mark>Where's…?</mark></p><p>Por ejemplo: <b>Where's Mum?</b> (¿Dónde está mamá?). Se contesta: <b>She's in the kitchen</b> (está en la cocina).</p><p>Para un chico decimos <b>He's</b>: <b>Where's Dad? He's in the garden</b>. Para una chica, <b>She's</b>. ¡Juega a buscar a tu familia por la casa!</p>`,
      svg: charla("Where's Mum? She's in the kitchen. Where's Dad? He's in the garden", [["nino", "Where's Mum?", A], ["mama", "I'm in the kitchen!", R], ["nina", "Where's Dad?", Ve], ["papa", "In the garden!", N]]),
    },
    {
      html: `<h3>Upstairs and downstairs</h3><p>Algunas casas tienen <mark>dos pisos</mark> unidos por escaleras, <b>stairs</b>.</p><p>Arriba se dice <b>upstairs</b>. Abajo se dice <b>downstairs</b>.</p><p>En muchas casas inglesas los dormitorios están <b>upstairs</b> y la cocina está <b>downstairs</b>. Si vives en un piso, puedes subir en ascensor, <b>lift</b>. ¡O subir andando!</p>`,
      svg: lista("Arriba y abajo: upstairs arriba, downstairs abajo, stairs escaleras", [["upstairs → arriba", A], ["downstairs → abajo", R], ["stairs → escaleras", Ve]], { titulo: "Up and down" }),
    },
    {
      html: `<h3>Cómo suenan</h3><p>Escucha bien estas palabras de la casa: <mark>algunas engañan</mark>.</p><p><b>House</b> se dice «jáus». <b>Kitchen</b> se dice «kíchen». <b>Room</b> se dice «rum».</p><p><b>Garden</b> se dice «gárden». <b>Bathroom</b> se dice «bázrum», con la lengua entre los dientes. Pon la mano delante de la boca y nota el aire al decir «bázrum».</p>`,
      svg: lista("Cómo suenan: house jáus, kitchen kíchen, room rum, bathroom bázrum", [["house → «jáus»", A], ["kitchen → «kíchen»", R], ["room → «rum»", Ve], ["bathroom → «bázrum»", N]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>En los <mark>cuentos ingleses</mark> los personajes van de una habitación a otra.</p><p>Si conoces estas palabras, entenderás dónde pasa cada cosa. También sirven para describir tu casa a un amigo de otro país.</p><p>Y si viajas y duermes en un hotel, sabrás pedir tu habitación: <b>my room</b>. ¡Te servirá toda la vida!</p>`,
      svg: vocab("Para qué sirve: cuentos, amigos y viajes", [["libro", "stories", "cuentos", A], ["nina", "friends", "amigos", R], ["avion", "travel", "viajar", N]], { titulo: "House words are for…" }),
    },
    {
      html: `<h3>Jugamos al escondite</h3><p>Dibujamos una casa con <mark>cuatro habitaciones</mark>. Escondemos un osito en una de ellas.</p><p>Los compañeros preguntan: <b>Is it in the bedroom?</b> Si no está, contestas <b>No, it isn't</b>.</p><p>Si aciertan, dices <b>Yes, it is!</b> y cambiamos el osito de sitio. ¿Quién lo encuentra con menos preguntas?</p>`,
      svg: charla("Juego del escondite: Is it in the bedroom? No, it isn't. Is it in the kitchen? Yes, it is", [["nina", "Is it in the bedroom?", R], ["nino", "No, it isn't.", A], ["nina", "In the kitchen?", R], ["oso", "Yes, it is!", Ve]]),
    },
  ],
  figura: {
    titulo: "My house: las habitaciones en inglés",
    svg: mural("Habitaciones en inglés: kitchen cocina, bedroom dormitorio, bathroom baño, living room salón", [["sopa", "kitchen", "cocina", R], ["cama", "bedroom", "dormitorio", A], ["agua", "bathroom", "baño", N], ["silla", "living room", "salón", Ve]], "My house"),
  },
  video: V("in4v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Di en inglés dónde duermes.",
      pasos: ["Dormitorio es bedroom.", "Dormir es sleep.", "Usamos in the: in the bedroom."],
      resultado: "«I sleep in the bedroom.»" },
    { enunciado: "Papá está en el jardín. Contesta a Where's Dad?",
      pasos: ["Papá es chico: usamos He's.", "Jardín es garden.", "Añadimos in the."],
      resultado: "«He's in the garden.»" },
    { enunciado: "¿Qué habitación es? Tiene un sofá y una tele.",
      pasos: ["Sofá es sofa; tele es TV.", "Están en el salón.", "Salón es living room."],
      resultado: "«It's the living room.»" },
  ],
  errores: [
    "Confundir bedroom (dormitorio) con bathroom (baño).",
    "Decir «Mum is in kitchen»: hay que poner the, in the kitchen.",
    "Usar He's para una chica: para chicas es She's.",
    "Leer house como se escribe: se dice «jáus».",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «casa» en inglés?", sol: "House." },
    { q: "¿Qué habitación es la kitchen?", sol: "La cocina." },
    { q: "¿Cómo se dice «dormitorio»?", sol: "Bedroom." },
    { q: "¿Qué es el bathroom?", sol: "El baño." },
    { q: "Nombra dos muebles en inglés.", sol: "Por ejemplo: bed y sofa (o table, chair, wardrobe)." },
    { q: "¿Qué significa Where's Mum?", sol: "¿Dónde está mamá?" },
    { q: "Di en inglés: «Ella está en el salón».", sol: "She's in the living room." },
    { q: "¿Qué significa upstairs?", sol: "Arriba (en el piso de arriba)." },
    { q: "Dibuja tu casa y escribe el nombre de tres habitaciones en inglés.", sol: "Por ejemplo: kitchen, bedroom, bathroom." },
    { q: "Esconde un juguete y pregunta en inglés en qué habitación está.", sol: "Is it in the bedroom? Yes, it is / No, it isn't." },
  ],
  quiz: [
    { q: "«House» es…", o: ["casa", "jardín", "piso"], a: 0, e: "House = casa." },
    { q: "«Kitchen» es…", o: ["baño", "cocina", "salón"], a: 1, e: "Kitchen = cocina." },
    { q: "«Dormitorio» en inglés es…", o: ["bedroom", "bathroom", "garden"], a: 0, e: "Bed + room." },
    { q: "«Bathroom» es…", o: ["dormitorio", "baño", "cocina"], a: 1, e: "Bathroom = baño." },
    { q: "«Living room» es…", o: ["salón", "garaje", "jardín"], a: 0, e: "Living room = salón." },
    { q: "«Bed» es…", o: ["mesa", "cama", "silla"], a: 1, e: "Bed = cama." },
    { q: "«Where's Dad?» significa…", o: ["¿Cómo está papá?", "¿Dónde está papá?", "¿Quién es papá?"], a: 1, e: "Where = dónde." },
    { q: "Para una chica decimos…", o: ["He's", "She's", "It's"], a: 1, e: "She's = ella está." },
    { q: "«Garden» es…", o: ["jardín", "garaje", "puerta"], a: 0, e: "Garden = jardín." },
    { q: "«Downstairs» significa…", o: ["arriba", "abajo", "fuera"], a: 1, e: "Downstairs = abajo." },
  ],
  examen: [
    { q: "Contesta: Where's the sofa?", o: ["It's in the living room.", "It's red.", "Yes, it is."], a: 0, e: "El sofá está en el salón." },
    { q: "«Window» es…", o: ["puerta", "ventana", "tejado"], a: 1, e: "Window = ventana." },
    { q: "La nevera está en…", o: ["the kitchen", "the bedroom", "the garden"], a: 0, e: "Fridge: in the kitchen." },
    { q: "«Is it in the bathroom?» Si está, contestas…", o: ["Yes, it is.", "No, it isn't.", "Good night."], a: 0, e: "Respuesta afirmativa." },
  ],
  feynman: ["Cómo se llaman las habitaciones de la casa en inglés", "Qué muebles hay en cada habitación", "Cómo preguntar y decir dónde está alguien"],
  mapa: mapa("MY HOUSE", "var(--pri)", [
    ["Rooms", "kitchen, bedroom, bathroom", A],
    ["Furniture", "bed, sofa, table, chair", R],
    ["Where's…?", "She's in the kitchen", Ve],
    ["Up / down", "upstairs, downstairs", N],
  ], 230),
  tarjetas: [
    ["casa / piso", "house / flat"],
    ["cocina", "kitchen"],
    ["dormitorio", "bedroom"],
    ["baño", "bathroom"],
    ["salón", "living room"],
    ["cama / sofá", "bed / sofa"],
    ["¿Dónde está mamá?", "Where's Mum?"],
    ["arriba / abajo", "upstairs / downstairs"],
  ],
  familias: [
    "Pegad notas en inglés en las puertas: kitchen, bathroom, bedroom.",
    "Preguntad Where's…? para buscar a alguien de la familia por casa.",
    "Jugad al escondite de un peluche y preguntad Is it in the…?",
    "Dibujad juntos el plano de la casa con los nombres en inglés.",
  ],
  profesores: PROF("Lengua extranjera: léxico de la casa (habitaciones y muebles); Where's…? He's / She's in the…; upstairs y downstairs; preguntas de sí o no con Is it…?", ["Plano de una casa con flashcards para colocar muebles.", "Juego del escondite del peluche con Is it in the…?", "Canción de las habitaciones con gestos."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
