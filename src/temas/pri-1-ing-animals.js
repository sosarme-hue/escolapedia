// Inglés 1º de Primaria: Animals. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "1-primaria",
  titulo: "Animals",
  minutos: 20,
  objetivos: ["Nombrar animales de casa, de la granja y salvajes en inglés", "Decir qué animal te gusta: I like cats", "Describir animales con big, small y colores"],
  claves: ["animals", "cat", "dog", "fish", "cow", "pig", "duck", "lion", "elephant", "I like…"],
  pregunta: {
    texto: "¿Qué animal te gusta más? ¿Sabes cómo se dice «perro» o «gato» en inglés?",
    respuesta: "Perro se dice <mark>dog</mark> y gato se dice <mark>cat</mark>. Los animales en inglés son <b>animals</b>.",
  },
  bloques: [
    {
      html: `<h3>Pets: animales de casa</h3><p>Los animales que viven con nosotros se llaman <mark>pets</mark>, mascotas.</p><p>El perro es <b>dog</b>. El gato es <b>cat</b>. El pez es <b>fish</b>. El conejo es <b>rabbit</b>.</p><p>El pájaro es <b>bird</b>. ¿Tienes una mascota en casa? Puedes decir: <b>I have a dog</b> (Tengo un perro). ¿Cómo se llama?</p>`,
      svg: vocab("Mascotas: dog, cat, fish, rabbit", [["perro", "dog", "perro", N], ["gato", "cat", "gato", A], ["pez", "fish", "pez", V], ["conejo", "rabbit", "conejo", R]], { titulo: "Pets" }),
    },
    {
      html: `<h3>On the farm: en la granja</h3><p>En la granja, <mark>farm</mark>, viven muchos animales.</p><p>La vaca es <b>cow</b>. El cerdo es <b>pig</b>. El pato es <b>duck</b>. El pollito es <b>chick</b>.</p><p>También hay ovejas, <b>sheep</b>, y caballos, <b>horses</b>. Cada animal hace un sonido. Un granjero los cuida a todos cada día. ¡Hay mucho trabajo en la granja!</p>`,
      svg: vocab("Animales de granja: cow, pig, duck, chick", [["vaca", "cow", "vaca", A], ["cerdo", "pig", "cerdo", R], ["pato", "duck", "pato", N], ["pollo", "chick", "pollito", V]], { titulo: "On the farm" }),
    },
    {
      html: `<h3>Wild animals: animales salvajes</h3><p>Algunos animales viven libres en la selva o la sabana. Son <mark>wild animals</mark>.</p><p>El león es <b>lion</b>. El elefante es <b>elephant</b>. El oso es <b>bear</b>. El mono es <b>monkey</b>.</p><p>Estos animales no son mascotas. Viven en la naturaleza y hay que respetarlos. ¿Cuál te parece más grande?</p>`,
      svg: vocab("Animales salvajes: lion, elephant, bear", [["leon", "lion", "león", N], ["elefante", "elephant", "elefante", A], ["oso", "bear", "oso", R]], { titulo: "Wild animals" }),
    },
    {
      html: `<h3>¿Cómo hacen?</h3><p>En inglés los animales <mark>hacen sonidos diferentes</mark> que en español.</p><p>El perro dice <b>woof woof</b>. El gato dice <b>meow</b>. La vaca dice <b>moo</b>.</p><p>El pato dice <b>quack quack</b>. El cerdo dice <b>oink oink</b>. ¡Es divertido! Prueba a hacer cada sonido. Tu compañero adivina el animal.</p>`,
      svg: charla("Sonidos de animales en inglés: el perro dice woof, la vaca moo, el pato quack", [["perro", "Woof woof!", N], ["vaca", "Moo!", A], ["pato", "Quack quack!", V]]),
    },
    {
      html: `<h3>I like cats!</h3><p>Para decir que algo te gusta, usamos <mark>I like…</mark></p><p>Por ejemplo: <b>I like cats</b> (Me gustan los gatos). <b>I like dogs</b> (Me gustan los perros).</p><p>Si no te gusta, decimos <b>I don't like…</b> Por ejemplo, <b>I don't like spiders</b>. Pregunta a un amigo: <b>Do you like lions?</b> Te contestará <b>Yes!</b> o <b>No!</b></p>`,
      svg: charla("Una niña dice I like cats y un niño pregunta Do you like dogs", [["nina", "I like cats!", R], ["nino", "Do you like dogs?", A], ["nina", "Yes, I do!", R]]),
    },
    {
      html: `<h3>Big and small</h3><p>Podemos decir cómo es un animal.</p><p><b>Big</b> significa grande. <b>Small</b> significa pequeño. El elefante es <b>big</b>. El ratón es <b>small</b>.</p><p>Y podemos añadir colores: <mark>a brown bear</mark> es un oso marrón. Recuerda: en inglés el color va <b>antes</b> del animal. Decimos <b>a big elephant</b>, no «elephant big».</p>`,
      svg: vocab("Grande y pequeño: el elefante es big y el ratón es small", [["elefante", "big", "grande", A], ["raton", "small", "pequeño", R]], { titulo: "Big or small?" }),
      video: vid("_Ir0Mc6Qilo", "Yes, I Can! | Animal Song For Children", "Super Simple Songs - Kids Songs", 308393281, 356358),
    },
    {
      html: `<h3>Cómo suenan</h3><p>Fíjate en cómo <mark>se pronuncian</mark> algunos animales.</p><p><b>Dog</b> se dice «dog», casi como se escribe. <b>Cat</b> se dice «cat», con una a abierta.</p><p><b>Rabbit</b> se dice «rábit». <b>Elephant</b> se dice «élefant». <b>Mouse</b>, el ratón, se dice «máus». Repite cada nombre haciendo el gesto del animal.</p>`,
      svg: lista("Cómo suenan: rabbit rábit, elephant élefant, mouse máus", [["rabbit → «rábit»", A], ["elephant → «élefant»", R], ["mouse → «máus»", V]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los animales salen en <mark>muchísimos cuentos</mark>, canciones y dibujos en inglés.</p><p>Si conoces sus nombres, entenderás mejor las historias. Si visitas un zoo en otro país, sabrás leer los carteles.</p><p>Y podrás hablar de tu mascota con niños de todo el mundo. ¡A todos les gustan los animales!</p>`,
      svg: vocab("Para qué sirve: cuentos, el zoo y hablar de tu mascota", [["libro", "stories", "cuentos", A], ["leon", "zoo", "zoo", N], ["perro", "my pet", "mi mascota", R]], { titulo: "Animal words are for…" }),
    },
    {
      html: `<h3>Jugamos a adivinar el animal</h3><p>Un jugador piensa en un animal y da <mark>pistas en inglés</mark>.</p><p>Dice: <b>It's big. It's grey. It has big ears.</b> (Es grande. Es gris. Tiene orejas grandes).</p><p>Los demás adivinan: <b>Is it an elephant?</b> Si acierta, contesta <b>Yes!</b> y le toca a otro. ¡También puedes hacer el sonido como pista!</p>`,
      svg: charla("Juego de adivinar: It's big, it's grey. Is it an elephant? Yes", [["nino", "It's big. It's grey.", A], ["nina", "Is it an elephant?", R], ["elefante", "Yes!", A]]),
    },
  ],
  figura: {
    titulo: "Animals: los animales en inglés",
    svg: mural("Animales en inglés: dog perro, cat gato, cow vaca, lion león", [["perro", "dog", "perro", N], ["gato", "cat", "gato", A], ["vaca", "cow", "vaca", V], ["leon", "lion", "león", R]], "Animals"),
  },
  video: { ...vid("zXEq-QO3xTg", "The Animals On The Farm | Animals and Farm Song for Kids", "Super Simple Songs - Kids Songs", 513150300), busqueda: "animals song for kids english" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Di en inglés que te gustan los perros.",
      pasos: ["Me gusta se dice I like.", "Perro es dog; muchos perros son dogs.", "Junta las dos partes."],
      resultado: "«I like dogs!»" },
    { enunciado: "Describe un ratón en inglés.",
      pasos: ["Ratón es mouse.", "Es pequeño: small.", "Usa It's…: It's small."],
      resultado: "«It's a mouse. It's small.»" },
    { enunciado: "Oyes «Moo!». ¿Qué animal es?",
      pasos: ["Moo es el sonido de un animal de granja.", "Es la vaca.", "Vaca en inglés es cow."],
      resultado: "«It's a cow!»" },
  ],
  errores: [
    "Decir «elephant big»: el adjetivo va antes, a big elephant.",
    "Pensar que el perro dice «guau» en inglés: dice woof.",
    "Leer mouse como «mouse»: se dice «máus».",
    "Decir «I like cat» para hablar de todos: se dice I like cats.",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «perro» en inglés?", sol: "Dog." },
    { q: "¿Cómo se dice «gato»?", sol: "Cat." },
    { q: "¿Qué animal es un fish?", sol: "Un pez." },
    { q: "Di tres animales de la granja en inglés.", sol: "Cow, pig, duck (o chick, sheep, horse)." },
    { q: "¿Cómo se dice «león»?", sol: "Lion." },
    { q: "¿Qué sonido hace la vaca en inglés?", sol: "Moo!" },
    { q: "Di en inglés: «Me gustan los gatos».", sol: "I like cats." },
    { q: "¿Qué significa big?", sol: "Grande." },
    { q: "Di en inglés: «un oso marrón».", sol: "A brown bear." },
    { q: "Juega a adivinar un animal dando pistas en inglés.", sol: "Por ejemplo: It's small. It's white. It's a rabbit!" },
  ],
  quiz: [
    { q: "«Dog» es…", o: ["perro", "pato", "pez"], a: 0, e: "Dog = perro." },
    { q: "«Cat» es…", o: ["vaca", "gato", "cerdo"], a: 1, e: "Cat = gato." },
    { q: "«Vaca» en inglés es…", o: ["cow", "pig", "duck"], a: 0, e: "Cow = vaca." },
    { q: "«Pig» es…", o: ["pájaro", "cerdo", "pollito"], a: 1, e: "Pig = cerdo." },
    { q: "«Elephant» es…", o: ["elefante", "león", "oso"], a: 0, e: "Elephant = elefante." },
    { q: "El pato dice…", o: ["moo", "quack", "meow"], a: 1, e: "Duck: quack quack." },
    { q: "«I like dogs» significa…", o: ["Tengo perros", "Me gustan los perros", "Veo perros"], a: 1, e: "I like = me gusta." },
    { q: "«Small» significa…", o: ["grande", "pequeño", "rápido"], a: 1, e: "Small = pequeño." },
    { q: "Un oso marrón es…", o: ["a bear brown", "a brown bear", "brown a bear"], a: 1, e: "El color va antes: a brown bear." },
    { q: "Las mascotas en inglés son…", o: ["pets", "farms", "zoos"], a: 0, e: "Pets = mascotas." },
  ],
  examen: [
    { q: "Un animal salvaje es…", o: ["lion", "cat", "fish"], a: 0, e: "El león vive libre: wild animal." },
    { q: "«Rabbit» es…", o: ["ratón", "conejo", "rana"], a: 1, e: "Rabbit = conejo." },
    { q: "El elefante es…", o: ["big", "small", "pink"], a: 0, e: "Big = grande." },
    { q: "Contesta: Do you like cats?", o: ["Yes, I do!", "It's red.", "Goodbye!"], a: 0, e: "Yes, I do / No, I don't." },
  ],
  feynman: ["Cómo se llaman en inglés las mascotas y los animales de granja", "Cómo decir que te gusta un animal", "Por qué decimos a big elephant"],
  mapa: mapa("ANIMALS", "var(--pri)", [
    ["Pets", "dog, cat, fish, rabbit", N],
    ["On the farm", "cow, pig, duck, chick", V],
    ["Wild animals", "lion, elephant, bear", R],
    ["I like…", "I like cats!", A],
  ], 230),
  tarjetas: [
    ["perro / gato", "dog / cat"],
    ["pez / conejo", "fish / rabbit"],
    ["vaca / cerdo", "cow / pig"],
    ["pato / pollito", "duck / chick"],
    ["león / elefante", "lion / elephant"],
    ["mascotas", "pets"],
    ["Me gustan los gatos", "I like cats"],
    ["grande / pequeño", "big / small"],
  ],
  familias: [
    "Cuando veáis animales en la calle o en un libro, decid su nombre en inglés.",
    "Haced los sonidos de los animales en inglés y en español: ¿se parecen?",
    "Jugad a adivinar animales con pistas: It's big. It's grey…",
    "Cantad juntos la canción de los animales de la granja del tema.",
  ],
  profesores: PROF("Lengua extranjera: léxico de animales domésticos, de granja y salvajes; expresar gustos con I like / I don't like; adjetivos big y small", ["Bingo de animales con imágenes.", "Juego de sonidos: escuchar y nombrar el animal.", "Adivinanzas con pistas: It's big. It's grey."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
