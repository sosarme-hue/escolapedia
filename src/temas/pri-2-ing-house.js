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

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Nombrar muebles y objetos de la casa", "Usar There is / There are", "Decir dónde están las cosas: next to, behind, in front of", "Nombrar las tareas de casa en inglés"],
  lectura: { titulo: "Where is Whiskers?", html: `<p>Whiskers is a small grey cat. He lives in a big house with the Smith family.</p><p>One afternoon, Emma can't find Whiskers. "Whiskers! Where are you?"</p><p>She looks in the <b>kitchen</b>. There is a bowl of milk on the floor, but there isn't a cat.</p><p>She looks in the <b>living room</b>. There is a sofa, a TV and two armchairs. Whiskers isn't under the sofa.</p><p>She goes <b>upstairs</b> to the <b>bathroom</b>. There is a bath, but no cat.</p><p>She looks in her <b>bedroom</b>. There is a bed, a wardrobe and a lot of toys. "Whiskers?"</p><p>Then she hears a little noise: "Miaow!"</p><p>Emma opens the wardrobe. There is Whiskers, sleeping on her favourite jumper!</p><p>"You naughty cat!" laughs Emma. "This is my jumper, not your bed!"</p><p>Whiskers looks at her and closes his eyes again. Purr, purr.</p><p><i>(can't find: no encuentra · armchairs: sillones · wardrobe: armario · naughty: travieso)</i></p>` },
  tras: {
    "Rooms: las habitaciones": [
      ["Furniture", `<p>Los muebles se llaman <mark>furniture</mark>. Cada habitación tiene los suyos:</p><ul><li><b>bedroom</b>: bed (cama), wardrobe (armario), desk (escritorio), lamp (lámpara).</li><li><b>living room</b>: sofa, armchair (sillón), TV, bookcase (estantería).</li><li><b>kitchen</b>: fridge (nevera), cooker (cocina), table, chairs, sink (fregadero).</li><li><b>bathroom</b>: bath (bañera), shower (ducha), toilet (váter), mirror (espejo).</li></ul><p>Para preguntar dónde está algo: «Where's the fridge?» — «It's in the <b>kitchen</b>.»</p><p>Algunas palabras se parecen al español: <i>sofa</i>, <i>lamp</i>, <i>TV</i>. ¡Así es más fácil recordarlas!</p><p><b>Actividad</b>: pega etiquetas en inglés en los muebles de tu casa: bed, door, window, table.</p>`,
        L6.filas("Furniture", [["bedroom", "bed", cAZ], ["kitchen", "fridge", cVE], ["bathroom", "bath", cNA], ["living room", "sofa", cRO]]),
        ["DR5qPNPGCmY", "The House Song", "Busy Beavers", 4000126]],
    ],
    "In the bedroom": [
      ["There is, there are", `<p>Para decir lo que <mark>hay</mark> en un lugar usamos:</p><ul><li><b>There is</b> (hay) + una cosa: «<b>There is</b> a bed in my bedroom.»</li><li><b>There are</b> (hay) + varias cosas: «<b>There are</b> two windows.»</li></ul><p>En negativo:</p><ul><li>«<b>There isn't</b> a TV in my bedroom.» (No hay)</li><li>«<b>There aren't</b> any chairs.»</li></ul><p>Para preguntar:</p><ul><li>«<b>Is there</b> a lamp?» — «Yes, there is.» / «No, there isn't.»</li><li>«<b>How many</b> beds <b>are there</b>?» — «There are two.»</li></ul><p>Truco: si después hay <b>a</b> o <b>an</b>, usa <i>there is</i>; si hay un número o una palabra en plural, usa <i>there are</i>.</p><p><b>Actividad</b>: describe tu habitación con tres frases: There is… There are…</p>`,
        H6.dos("Hay", ["ONE", ["There is", "a bed", "a lamp"], cAZ], ["MANY", ["There are", "two beds", "toys"], cVE])],
    ],
    "Where's Mum?": [
      ["Next to, behind, in front of", `<p>Ya sabes <b>in</b>, <b>on</b> y <b>under</b>. Ahora aprendemos más <mark>prepositions</mark> (palabras de lugar):</p><ul><li><b>next to</b>: al lado de. «The lamp is <b>next to</b> the bed.»</li><li><b>behind</b>: detrás de. «The cat is <b>behind</b> the sofa.»</li><li><b>in front of</b>: delante de. «The table is <b>in front of</b> the TV.»</li><li><b>between</b>: entre. «The dog is <b>between</b> the chairs.»</li></ul><p>Recuerda las de antes:</p><ul><li><b>in</b>: dentro. «The ball is <b>in</b> the box.»</li><li><b>on</b>: encima. «The book is <b>on</b> the desk.»</li><li><b>under</b>: debajo. «The shoes are <b>under</b> the bed.»</li></ul><p><b>Actividad</b>: esconde un peluche en clase y da pistas en inglés: «It's behind the door!».</p>`,
        H6.rueda("Where", "WHERE?", [["next to", cAZ], ["behind", cRO], ["in front", cVE], ["between", cNA]])],
    ],
    "Upstairs and downstairs": [
      ["Helping at home", `<p>En casa todos ayudamos. Las <mark>chores</mark> son las tareas de casa:</p><ul><li><b>make my bed</b>: hacer mi cama.</li><li><b>tidy my room</b>: ordenar mi habitación.</li><li><b>lay the table</b>: poner la mesa.</li><li><b>clear the table</b>: quitar la mesa.</li><li><b>wash the dishes</b>: fregar los platos.</li><li><b>feed the pet</b>: dar de comer a la mascota.</li><li><b>water the plants</b>: regar las plantas.</li></ul><p>Podemos decir: «I <b>make my bed</b> every day.» «I <b>help</b> my dad in the kitchen.»</p><p>Para preguntar: «<b>Do you help at home?</b>» — «Yes, I do! I lay the table.»</p><p>Ayudar en casa es cosa de toda la familia. ¡Y terminamos antes si todos colaboramos!</p><p><b>Actividad</b>: haz una tabla con las tareas que haces cada día de la semana.</p>`,
        H6.flujo("Chores", ["bed|make", "room|tidy", "table|lay", "plants|water"], cVE)],
    ],
  },
  final: [
    ["Houses around the world", `<p>No todas las casas son iguales. ¡Hay <mark>casas</mark> muy distintas en el mundo!</p><ul><li>A <b>flat</b>: un piso en un edificio alto. Mucha gente vive en flats en las ciudades.</li><li>A <b>cottage</b>: una casita pequeña en el campo, típica de Inglaterra.</li><li>An <b>igloo</b>: una casa de hielo, en lugares muy fríos.</li><li>A <b>houseboat</b>: una casa que flota en un río o un canal.</li><li>A <b>tree house</b>: una casa en un árbol. ¡A los niños les encantan!</li><li>A <b>tent</b>: una tienda de campaña, para ir de acampada.</li></ul><p>Para preguntar: «<b>Do you live in a house or a flat?</b>» — «I live in a flat.»</p><p>Cada casa está pensada para el lugar y el clima donde se construye.</p><p><b>Actividad</b>: diseña la casa de tus sueños y describe sus habitaciones en inglés.</p>`,
      L6.filas("Homes", [["flat", "piso", cAZ], ["cottage", "casita", cVE], ["igloo", "de hielo", cMO], ["tree house", "en un árbol", cNA]])],
    ["Repaso: where is Whiskers?", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Whiskers is a small <b>grey cat</b>.</li><li>In the <b>kitchen</b> there is a bowl of milk.</li><li>In the <b>living room</b> there is a sofa, a TV and two armchairs.</li><li>Emma goes <b>upstairs</b> to the <b>bathroom</b>.</li><li>In the <b>bedroom</b> there is a bed, a wardrobe and toys.</li><li>Whiskers is <b>in</b> the <b>wardrobe</b>, <b>on</b> Emma's jumper!</li></ul><p>Fíjate en cuántas veces aparece <b>there is</b> en el cuento. Es una expresión muy útil para describir lugares.</p><p>Los gatos buscan sitios calentitos y blanditos para dormir: ¡un jersey es perfecto!</p><p><b>Actividad</b>: dibuja la casa de los Smith y pon a Whiskers en un sitio. Tu compañero pregunta: «Is he in the kitchen?».</p>`,
      H6.flujo("Search", ["kitchen|milk", "living room|sofa", "bathroom|bath", "wardrobe|cat!"], cMO)],
  ],
  ejemplos: [
    ["Di que hay dos ventanas en tu habitación.", ["Varias cosas: There are."], "There are two windows in my bedroom."],
    ["El gato está detrás del sofá.", ["detrás de = behind"], "The cat is behind the sofa."],
  ],
  errores: ["Decir «There is two chairs» en lugar de «There are two chairs».", "Confundir behind (detrás) con in front of (delante)."],
  ejercicios: [
    ["b", "How do you say «nevera»?", "Fridge."],
    ["b", "Where's the bed?", "In the bedroom."],
    ["b", "What is «next to»?", "Al lado de."],
    ["b", "Translate: hacer la cama.", "Make my bed."],
    ["b", "What is a flat?", "Un piso."],
    ["m", "Complete: «There ___ three chairs.»", "Are."],
    ["m", "Complete: «There ___ a lamp.»", "Is."],
    ["m", "Translate: La pelota está debajo de la mesa.", "The ball is under the table."],
    ["m", "Answer: Do you help at home?", "Yes, I do. I lay the table…"],
    ["m", "Where is the mirror?", "In the bathroom."],
    ["a", "In the reading, where is Whiskers?", "In the wardrobe, on Emma's jumper."],
    ["a", "What is there in the living room?", "A sofa, a TV and two armchairs."],
    ["a", "Describe your bedroom with four sentences.", "Open answer."],
    ["a", "Describe your dream house.", "Open answer."],
  ],
  quiz: [
    ["Armario is…", ["wardrobe", "fridge", "mirror"], "Furniture."],
    ["There ___ two beds.", ["are", "is", "am"], "There is/are."],
    ["Detrás de is…", ["behind", "next to", "in front of"], "Prepositions."],
    ["Poner la mesa is…", ["lay the table", "make the bed", "wash the dishes"], "Chores."],
    ["A house of ice is an…", ["igloo", "flat", "cottage"], "Homes."],
  ],
  examen: [
    ["In the reading, what colour is Whiskers?", ["grey", "black", "white"], "Reading."],
    ["Where does Emma find Whiskers?", ["in the wardrobe", "in the kitchen", "under the sofa"], "Repaso."],
  ],
  tarjetas: [
    ["There is / are", "There is a bed. There are two chairs."],
    ["Where?", "in, on, under, next to, behind, in front of, between."],
  ],
  glosario: [
    ["Furniture", "Muebles."],
    ["Wardrobe", "Armario."],
    ["Fridge", "Nevera."],
    ["Mirror", "Espejo."],
    ["There is", "Hay (una cosa)."],
    ["There are", "Hay (varias cosas)."],
    ["Next to", "Al lado de."],
    ["Behind", "Detrás de."],
    ["Chores", "Tareas de casa."],
    ["Flat", "Piso."],
  ],
  situacion: {
    titulo: "My dream house",
    reto: "Cada alumno construye una maqueta o dibujo de la casa de sus sueños y la presenta en inglés a la clase.",
    pasos: ["Dibujar o construir la casa con cajas.", "Poner etiquetas en inglés a las habitaciones y muebles.", "Escribir frases con There is / There are y preposiciones.", "Presentar la casa y contestar preguntas: Is there a…?"],
    producto: "Una maqueta o dibujo con descripción en inglés.",
    evaluacion: ["Nombra habitaciones y muebles.", "Usa There is / There are.", "Usa preposiciones de lugar.", "Nombra tareas de casa."],
  },
});
