// Inglés 2º de Primaria: Animals at the farm. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural, cuantos } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2d");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "2-primaria",
  titulo: "Animals at the farm",
  minutos: 20,
  objetivos: ["Nombrar los animales de la granja en inglés", "Decir qué hace y qué nos da cada animal", "Describir animales con can: A duck can swim"],
  claves: ["farm", "farmer", "cow", "pig", "horse", "sheep", "hen", "duck", "It can…", "It gives us…"],
  pregunta: {
    texto: "¿Qué animales viven en una granja? ¿Sabes alguno en inglés?",
    respuesta: "En la granja, <mark>farm</mark>, viven la vaca, <b>cow</b>, el cerdo, <b>pig</b>, el caballo, <b>horse</b>, y la gallina, <b>hen</b>.",
  },
  bloques: [
    {
      html: `<h3>On the farm</h3><p>La granja es <mark>farm</mark>. La persona que la cuida es el granjero, <b>farmer</b>.</p><p>El granjero se levanta muy pronto. Da de comer a los animales y limpia sus casas.</p><p>También cultiva el campo con su tractor, <b>tractor</b>. Los animales viven en el establo, <b>barn</b>, o en el prado. ¿Has visitado alguna vez una granja?</p>`,
      svg: vocab("La granja: farm granja, farmer granjero, barn establo", [["casa", "barn", "establo", R], ["abuelo", "farmer", "granjero", A], ["arbol", "field", "campo", Ve]], { titulo: "On the farm" }),
    },
    {
      html: `<h3>Big animals</h3><p>En la granja hay <mark>animales grandes</mark>.</p><p>La vaca es <b>cow</b>. El cerdo es <b>pig</b>. El caballo es <b>horse</b>. El burro es <b>donkey</b>.</p><p>La oveja es <b>sheep</b>. ¡Ojo! Una oveja es <b>one sheep</b> y muchas ovejas también son <b>sheep</b>. Es una palabra especial que no lleva <b>s</b>. ¿Cuál de estos animales te gusta más?</p>`,
      svg: vocab("Animales grandes: cow vaca, pig cerdo, donkey burro", [["vaca", "cow", "vaca", A], ["cerdo", "pig", "cerdo", R], ["burro", "donkey", "burro", N]], { titulo: "Big animals" }),
    },
    {
      html: `<h3>Small animals</h3><p>También hay <mark>animales pequeños</mark>.</p><p>La gallina es <b>hen</b>. El pollito es <b>chick</b>. El pato es <b>duck</b>. El conejo es <b>rabbit</b>.</p><p>El gato de la granja es <b>cat</b> y el perro pastor es <b>dog</b>. El perro ayuda a guardar las ovejas. ¡Es un gran trabajador!</p>`,
      svg: vocab("Animales pequeños: hen gallina, duck pato, rabbit conejo, dog perro", [["pollo", "hen", "gallina", R], ["pato", "duck", "pato", N], ["conejo", "rabbit", "conejo", A], ["perro", "dog", "perro", Ve]], { titulo: "Small animals" }),
    },
    {
      html: `<h3>Moo! Oink! Baa!</h3><p>Cada animal hace <mark>su sonido</mark>, y en inglés suenan distinto.</p><p>La vaca dice <b>moo</b>. El cerdo dice <b>oink</b>. La oveja dice <b>baa</b>. El pato dice <b>quack</b>.</p><p>El gallo dice <b>cock-a-doodle-doo!</b> por la mañana. ¡Es mucho más largo que nuestro quiquiriquí! La gallina dice <b>cluck cluck</b>. Imita los sonidos con tus compañeros.</p>`,
      svg: charla("Sonidos de la granja: la vaca dice moo, el cerdo oink, el pato quack", [["vaca", "Moo!", A], ["cerdo", "Oink oink!", R], ["pato", "Quack quack!", N]]),
      video: V("in6b"),
    },
    {
      html: `<h3>It gives us…</h3><p>Algunos animales nos <mark>dan alimentos</mark> y otras cosas.</p><p>La vaca nos da leche: <b>The cow gives us milk</b>. La gallina nos da huevos: <b>The hen gives us eggs</b>.</p><p>La oveja nos da lana, <b>wool</b>, para hacer jerséis calentitos. Por eso hay que cuidar bien a los animales. ¡Nos ayudan mucho!</p>`,
      svg: vocab("Lo que nos dan: cow milk, hen eggs, sheep wool", [["leche", "milk", "de la vaca", A], ["huevo", "eggs", "de la gallina", R], ["abrigo", "wool", "de la oveja", Ve]], { titulo: "It gives us…" }),
    },
    {
      html: `<h3>It can swim!</h3><p>Para decir qué <mark>sabe hacer</mark> un animal usamos <b>can</b>.</p><p><b>A duck can swim</b>: el pato sabe nadar. <b>A horse can run</b>: el caballo sabe correr. <b>A hen can't fly high</b>: la gallina no vuela alto.</p><p>Fíjate: <b>can't</b> es «no puede». Pregunta: <b>Can a pig swim?</b> Contesta: <b>Yes, it can</b> o <b>No, it can't</b>.</p>`,
      svg: lista("Qué saben hacer: a duck can swim, a horse can run, a hen can't fly high", [["A duck can swim.", N], ["A horse can run.", A], ["A hen can't fly high.", R]], { titulo: "What can it do?" }),
    },
    {
      html: `<h3>Cómo suenan</h3><p>Fíjate en cómo se pronuncian los <mark>animales de la granja</mark>.</p><p><b>Cow</b> se dice «cáu». <b>Horse</b> se dice «jors», con la h suave. <b>Sheep</b> se dice «shiip», con una i larga.</p><p><b>Duck</b> se dice «dak». <b>Farm</b> se dice «farm». Di cada nombre y haz el sonido del animal a la vez. ¡Qué granja tan ruidosa!</p>`,
      svg: lista("Cómo suenan: cow cáu, horse jors, sheep shiip, duck dak", [["cow → «cáu»", A], ["horse → «jors»", R], ["sheep → «shiip»", Ve], ["duck → «dak»", N]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los animales de granja salen en <mark>muchas canciones</mark> en inglés.</p><p>La más famosa es <b>Old MacDonald had a farm</b>. Si conoces los nombres y los sonidos, podrás cantarla entera.</p><p>Además, cuando bebas leche o comas un huevo, sabrás de qué animal viene. ¡Y podrás decirlo en dos idiomas!</p>`,
      svg: charla("Old MacDonald had a farm, E-I-E-I-O! And on that farm he had a cow", [["abuelo", "Old MacDonald had a farm!", A], ["vaca", "E-I-E-I-O! Moo!", R]]),
    },
    {
      html: `<h3>Jugamos a ¿Quién soy?</h3><p>Un niño elige un animal y lo <mark>imita sin hablar</mark>.</p><p>Después da una pista: <b>I can swim. I say quack.</b> Los demás preguntan: <b>Are you a duck?</b></p><p>Si aciertan, contesta <b>Yes, I am!</b> y le toca a otro. Si no, dice <b>No, I'm not</b> y da otra pista. ¡A ver quién adivina primero!</p>`,
      svg: charla("¿Quién soy? I can swim. I say quack. Are you a duck? Yes, I am!", [["nino", "I can swim. I say quack!", A], ["nina", "Are you a duck?", R], ["pato", "Yes, I am!", N]]),
    },
  ],
  figura: {
    titulo: "Animals at the farm",
    svg: mural("Animales de granja en inglés: cow vaca, pig cerdo, hen gallina, duck pato", [["vaca", "cow", "vaca · moo", A], ["cerdo", "pig", "cerdo · oink", R], ["pollo", "hen", "gallina · cluck", Ve], ["pato", "duck", "pato · quack", N]], "Animals at the farm"),
  },
  video: V("in6v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Di en inglés qué nos da la vaca.",
      pasos: ["Vaca es cow.", "Nos da se dice gives us.", "Leche es milk."],
      resultado: "«The cow gives us milk.»" },
    { enunciado: "¿Puede nadar un pato? Pregunta y contesta.",
      pasos: ["Preguntamos con Can…?", "Pato es duck; nadar es swim.", "Sí sabe: Yes, it can."],
      resultado: "«Can a duck swim? Yes, it can!»" },
    { enunciado: "Oyes «Baa!». ¿Qué animal es?",
      pasos: ["Baa es el sonido de un animal con lana.", "Es la oveja.", "Oveja en inglés es sheep."],
      resultado: "«It's a sheep!»" },
  ],
  errores: [
    "Decir «sheeps»: el plural de sheep es sheep.",
    "Confundir hen (gallina) con chick (pollito).",
    "Decir «a duck can swims»: después de can no se pone s.",
    "Leer cow como «cou»: se dice «cáu».",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «granja» en inglés?", sol: "Farm." },
    { q: "¿Qué animal es un pig?", sol: "El cerdo." },
    { q: "¿Cómo se dice «caballo»?", sol: "Horse." },
    { q: "Di cuatro animales de la granja en inglés.", sol: "Por ejemplo: cow, pig, sheep, duck (o hen, horse, donkey…)." },
    { q: "¿Qué sonido hace el cerdo en inglés?", sol: "Oink oink!" },
    { q: "¿Qué nos da la gallina?", sol: "Huevos: The hen gives us eggs." },
    { q: "Di en inglés: «El pato sabe nadar».", sol: "A duck can swim." },
    { q: "¿Qué significa can't?", sol: "No puede / no sabe." },
    { q: "¿Cómo se dice «granjero»?", sol: "Farmer." },
    { q: "Canta Old MacDonald con alguien de casa y elige tres animales.", sol: "Por ejemplo: cow (moo), pig (oink) y duck (quack)." },
  ],
  quiz: [
    { q: "«Cow» es…", o: ["vaca", "caballo", "oveja"], a: 0, e: "Cow = vaca." },
    { q: "«Horse» es…", o: ["burro", "caballo", "cerdo"], a: 1, e: "Horse = caballo." },
    { q: "«Gallina» en inglés es…", o: ["hen", "duck", "chick"], a: 0, e: "Hen = gallina." },
    { q: "«Sheep» es…", o: ["cabra", "oveja", "vaca"], a: 1, e: "Sheep = oveja." },
    { q: "La vaca dice…", o: ["moo", "baa", "oink"], a: 0, e: "Cow: moo." },
    { q: "La oveja dice…", o: ["quack", "baa", "moo"], a: 1, e: "Sheep: baa." },
    { q: "«The hen gives us eggs» significa…", o: ["La gallina come huevos", "La gallina nos da huevos", "La gallina ve huevos"], a: 1, e: "Gives us = nos da." },
    { q: "«A duck can swim» significa…", o: ["El pato sabe nadar", "El pato no nada", "El pato vuela"], a: 0, e: "Can = sabe / puede." },
    { q: "«Farmer» es…", o: ["granja", "granjero", "tractor"], a: 1, e: "Farmer = granjero." },
    { q: "Muchas ovejas son…", o: ["sheep", "sheeps", "sheepes"], a: 0, e: "Sheep no cambia en plural." },
  ],
  examen: [
    { q: "«Donkey» es…", o: ["burro", "perro", "pato"], a: 0, e: "Donkey = burro." },
    { q: "Can a pig fly? →", o: ["Yes, it can.", "No, it can't.", "It's pink."], a: 1, e: "El cerdo no vuela." },
    { q: "¿Qué nos da la vaca?", o: ["milk", "eggs", "wool"], a: 0, e: "The cow gives us milk." },
    { q: "«Are you a duck?» → Sí:", o: ["Yes, I am!", "Yes, I can!", "Yes, I do!"], a: 0, e: "Are you…? Yes, I am." },
  ],
  feynman: ["Cómo se llaman los animales de la granja en inglés", "Qué nos da cada animal", "Cómo decir qué sabe hacer un animal con can"],
  mapa: mapa("ON THE FARM", "var(--pri)", [
    ["Big animals", "cow, pig, horse, sheep", A],
    ["Small animals", "hen, chick, duck, rabbit", R],
    ["Sonidos", "moo, oink, baa, quack", Ve],
    ["Frases", "It can swim. It gives us milk.", N],
  ], 230),
  tarjetas: [
    ["granja / granjero", "farm / farmer"],
    ["vaca / cerdo", "cow / pig"],
    ["caballo / burro", "horse / donkey"],
    ["oveja / ovejas", "sheep / sheep"],
    ["gallina / pollito", "hen / chick"],
    ["pato / conejo", "duck / rabbit"],
    ["La vaca nos da leche", "The cow gives us milk"],
    ["El pato sabe nadar", "A duck can swim"],
  ],
  familias: [
    "Cantad juntos Old MacDonald had a farm cambiando los animales.",
    "Cuando toméis leche o huevos, decid de qué animal vienen en inglés.",
    "Jugad a ¿Quién soy? imitando animales de la granja.",
    "Si visitáis una granja o un zoo, nombrad los animales en inglés.",
  ],
  profesores: PROF("Lengua extranjera: léxico de animales de granja; onomatopeyas en inglés; plural irregular sheep; can / can't para capacidades; productos de origen animal", ["Canción Old MacDonald con tarjetas de animales.", "Juego ¿Quién soy? con mímica y pistas.", "Clasificar tarjetas: big / small animals."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Nombrar las crías de los animales: calf, chick, lamb", "Nombrar animales salvajes y del zoo", "Describir animales con big, small, long, short", "Hablar de lo que comen los animales"],
  lectura: { titulo: "The lost chick", html: `<p>It's morning on Green Farm. Mother Hen counts her chicks: "One, two, three, four… Oh no! Where is my fifth chick?"</p><p>Mother Hen looks for her chick. She asks the <b>cow</b>: "Have you seen my little chick?"</p><p>"Moo! No, sorry," says the cow.</p><p>She asks the <b>pig</b>. "Oink! Not here!"</p><p>She asks the <b>sheep</b>. "Baa! No, I haven't."</p><p>She asks the <b>horse</b>. "Neigh! Let's look together!"</p><p>The horse is very tall. He can see all the farm. "Look! There, in the barn, under the hay!"</p><p>Mother Hen runs to the barn. There is the little yellow chick, sleeping under the hay.</p><p>"Cheep, cheep!" says the chick. "Hello, Mum!"</p><p>"Oh, my little chick!" says Mother Hen. "Thank you, Horse!"</p><p>All the animals are very happy. That night, the five chicks sleep next to their mum.</p><p><i>(lost: perdido · barn: granero · hay: heno · next to: al lado de)</i></p>` },
  tras: {
    "Small animals": [
      ["Baby animals", `<p>Las crías de los animales tienen su propio nombre en inglés. Son los <mark>baby animals</mark>:</p><ul><li><b>cow</b> → <b>calf</b>: vaca → ternero.</li><li><b>hen</b> → <b>chick</b>: gallina → pollito.</li><li><b>sheep</b> → <b>lamb</b>: oveja → cordero.</li><li><b>horse</b> → <b>foal</b>: caballo → potro.</li><li><b>pig</b> → <b>piglet</b>: cerdo → cerdito.</li><li><b>duck</b> → <b>duckling</b>: pato → patito.</li><li><b>cat</b> → <b>kitten</b>, <b>dog</b> → <b>puppy</b>.</li></ul><p>Podemos decir: «The <b>calf</b> is the baby of the <b>cow</b>.»</p><p>Las crías necesitan a sus padres: toman leche, duermen mucho y aprenden a andar. «The lamb is small and white. It drinks milk.» «The puppy is very playful.» (juguetón)</p><p><b>Actividad</b>: juega a las parejas: une cada animal adulto con su cría.</p>`,
        L6.filas("Babies", [["cow", "calf", cMO], ["hen", "chick", cNA], ["sheep", "lamb", cAZ], ["pig", "piglet", cRO]])],
    ],
    "Moo! Oink! Baa!": [
      ["Wild animals", `<p>Los animales de la granja son <b>farm animals</b>. Los que viven libres en la naturaleza son <mark>wild animals</mark> (animales salvajes). Algunos se pueden ver en el <b>zoo</b>:</p><ul><li><b>lion</b>: león. It's got a big mane (melena).</li><li><b>elephant</b>: elefante. It's got a long trunk (trompa).</li><li><b>giraffe</b>: jirafa. It's got a very long neck (cuello).</li><li><b>monkey</b>: mono. It can climb trees.</li><li><b>crocodile</b>: cocodrilo. It's got big teeth.</li><li><b>zebra</b>: cebra. It's black and white.</li><li><b>snake</b>: serpiente. It hasn't got legs.</li></ul><p>Los animales salvajes no son mascotas: necesitan vivir en su hábitat.</p><p>Algunos animales salvajes están en peligro, como el tigre o el panda. Por eso hay que cuidar los bosques y las selvas, que son su casa. «Let's protect wild animals!»</p><p><b>Actividad</b>: haz un zoo de papel y presenta cada animal: «This is a lion. It's got…».</p>`,
        H6.dos("Animals", ["FARM", ["cow", "pig", "sheep"], cVE], ["WILD", ["lion", "monkey", "zebra"], cNA]),
        ["Wm4R8d0d8kU", "Old MacDonald | Nursery Rhymes", "Cocomelon", 2492307730]],
    ],
    "It gives us…": [
      ["What do they eat?", `<p>Cada animal come cosas distintas. Para preguntar: <mark>What does it eat?</mark> (¿Qué come?)</p><ul><li>The <b>cow</b> eats <b>grass</b> (hierba).</li><li>The <b>hen</b> eats <b>corn</b> (maíz).</li><li>The <b>rabbit</b> eats <b>carrots</b> (zanahorias).</li><li>The <b>horse</b> eats <b>hay</b> (heno) and <b>apples</b>.</li><li>The <b>monkey</b> eats <b>bananas</b>.</li><li>The <b>lion</b> eats <b>meat</b> (carne).</li><li>The <b>cat</b> eats <b>fish</b>.</li></ul><p>Fíjate: con <i>it</i>, <i>he</i> o <i>she</i>, el verbo lleva <b>-s</b> al final: «The cow eat<b>s</b> grass.» Pero «I eat», «you eat».</p><p><b>Actividad</b>: dibuja un animal y lo que come, y escribe la frase: «The… eats…».</p>`,
        H6.flujo("Eats", ["cow|grass", "hen|corn", "rabbit|carrots", "lion|meat"], cVE)],
    ],
    "It can swim!": [
      ["Big and small, long and short", `<p>Para describir animales usamos <mark>adjectives</mark> (adjetivos) de tamaño y forma:</p><ul><li><b>big</b> ↔ <b>small</b>: grande ↔ pequeño. «The elephant is <b>big</b>. The mouse is <b>small</b>.»</li><li><b>long</b> ↔ <b>short</b>: largo ↔ corto. «The snake is <b>long</b>.»</li><li><b>tall</b> ↔ <b>short</b>: alto ↔ bajo. «The giraffe is <b>tall</b>.»</li><li><b>fast</b> ↔ <b>slow</b>: rápido ↔ lento. «The horse is <b>fast</b>. The tortoise is <b>slow</b>.»</li></ul><p>También podemos combinar: «The rabbit has got <b>long ears</b> and a <b>short tail</b>.» (cola corta)</p><p><b>Actividad</b>: juega a adivinar: «It's big and grey. It's got a long trunk. What is it?» — «An elephant!»</p>`,
        L6.filas("Opposites", [["big", "small", cAZ], ["long", "short", cVE], ["tall", "short", cNA], ["fast", "slow", cRO]])],
    ],
  },
  final: [
    ["Farm work", `<p>En la <mark>farm</mark> (granja) trabaja el <b>farmer</b> (granjero o granjera). Cada día hace muchas tareas:</p><ul><li><b>feeds the animals</b>: da de comer a los animales.</li><li><b>milks the cows</b>: ordeña las vacas.</li><li><b>collects the eggs</b>: recoge los huevos.</li><li><b>cleans the barn</b>: limpia el granero.</li><li><b>drives the tractor</b>: conduce el tractor.</li></ul><p>Los animales viven en distintos lugares de la granja:</p><ul><li>The cow lives in the <b>cowshed</b> (establo).</li><li>The hen lives in the <b>hen house</b> (gallinero).</li><li>The pig lives in the <b>pigsty</b> (pocilga).</li><li>The horse lives in the <b>stable</b> (cuadra).</li></ul><p><b>Actividad</b>: dibuja el plano de una granja y escribe dónde vive cada animal.</p>`,
      H6.rueda("Farmer", "FARM", [["feeds", cVE], ["milks", cAZ], ["eggs", cNA], ["tractor", cRO]])],
    ["Repaso: the lost chick", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Mother <b>Hen</b> has got <b>five chicks</b>, but one is lost.</li><li>She asks the <b>cow</b> (Moo!), the <b>pig</b> (Oink!) and the <b>sheep</b> (Baa!).</li><li>The <b>horse</b> (Neigh!) helps her. He is very <b>tall</b>.</li><li>The chick is in the <b>barn</b>, <b>under</b> the hay.</li><li>The chick is <b>yellow</b> and it says «Cheep, cheep!».</li><li>At the end, everybody is <b>happy</b>.</li></ul><p>El caballo puede ayudar porque es alto y lo ve todo. Cada animal es bueno en algo.</p><p>¿Recuerdas los sonidos? The cow says moo, the pig says oink, the sheep says baa, the horse says neigh and the chick says cheep. ¡Cada animal tiene su voz!</p><p><b>Actividad</b>: representad el cuento con máscaras de animales y sus sonidos.</p>`,
      L6.filas("Story", [["hen", "five chicks", cNA], ["horse", "tall", cMO], ["barn", "under hay", cAZ], ["chick", "yellow", cVE]])],
  ],
  ejemplos: [
    ["¿Cómo se llama la cría de la oveja?", ["sheep → ?"], "Lamb."],
    ["Describe la jirafa.", ["Es alta y tiene el cuello largo."], "The giraffe is tall. It's got a long neck."],
  ],
  errores: ["Olvidar la -s: «The cow eat grass».", "Llamar wild animal a una vaca o farm animal a un león."],
  ejercicios: [
    ["b", "What is the baby of the cow?", "A calf."],
    ["b", "How do you say «león»?", "Lion."],
    ["b", "What does the rabbit eat?", "Carrots."],
    ["b", "What is the opposite of «big»?", "Small."],
    ["b", "Who works on the farm?", "The farmer."],
    ["m", "Complete: «The monkey ___ bananas.»", "Eats."],
    ["m", "Is the zebra a farm animal or a wild animal?", "A wild animal."],
    ["m", "Translate: El caballo es rápido.", "The horse is fast."],
    ["m", "Where does the hen live?", "In the hen house."],
    ["m", "Describe the elephant.", "It's big and grey. It's got a long trunk."],
    ["a", "In the reading, who helps Mother Hen?", "The horse."],
    ["a", "Where is the lost chick?", "In the barn, under the hay."],
    ["a", "Write a riddle about a wild animal.", "Open answer."],
    ["a", "Write three tasks of a farmer.", "Feeds the animals, milks the cows, collects the eggs."],
  ],
  quiz: [
    ["The baby of the hen is a…", ["chick", "calf", "lamb"], "Babies."],
    ["A wild animal is the…", ["giraffe", "cow", "sheep"], "Wild."],
    ["The cow eats…", ["grass", "meat", "fish"], "Food."],
    ["The tortoise is…", ["slow", "fast", "tall"], "Opposites."],
    ["The horse lives in the…", ["stable", "pigsty", "hen house"], "Farm."],
  ],
  examen: [
    ["In the reading, how many chicks has Mother Hen got?", ["five", "three", "two"], "Reading."],
    ["What colour is the chick?", ["yellow", "black", "red"], "Repaso."],
  ],
  tarjetas: [
    ["Baby animals", "calf, chick, lamb, foal, piglet, kitten, puppy."],
    ["It eats", "The cow eats grass. (¡-s!)"],
  ],
  glosario: [
    ["Calf", "Ternero."],
    ["Lamb", "Cordero."],
    ["Foal", "Potro."],
    ["Wild", "Salvaje."],
    ["Trunk", "Trompa."],
    ["Neck", "Cuello."],
    ["Grass", "Hierba."],
    ["Farmer", "Granjero."],
    ["Barn", "Granero."],
    ["Slow", "Lento."],
  ],
  situacion: {
    titulo: "Our animal book",
    reto: "La clase hace un libro de animales en inglés con fichas de animales de granja y salvajes.",
    pasos: ["Elegir un animal de granja y uno salvaje.", "Escribir cómo es: «It's big. It's got…».", "Escribir qué come y cómo se llama su cría.", "Unir las fichas en un libro y leerlo en voz alta."],
    producto: "Un libro de animales en inglés.",
    evaluacion: ["Nombra crías de animales.", "Distingue farm y wild animals.", "Describe con adjetivos.", "Dice qué come cada animal."],
  },
});
