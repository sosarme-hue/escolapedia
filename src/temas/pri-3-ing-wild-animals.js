// Inglés 3º de Primaria: wild animals. En inglés con apoyo en castellano. Dibujos propios en SVG.
const { tema, L, svg, tx, t, persona, AZ, RO, VE, NA, AM, AG, MO } = require("./_pri3d");

// Siluetas sencillas de animales.
const jirafa = (x, y, c = AM) => `<ellipse cx="${x}" cy="${y}" rx="22" ry="12" fill="${c}" fill-opacity=".7"/><path d="M${x + 14} ${y - 6} L ${x + 26} ${y - 52}" stroke="${c}" stroke-width="8" stroke-linecap="round"/><ellipse cx="${x + 30}" cy="${y - 54}" rx="9" ry="5" fill="${c}"/><path d="M${x - 14} ${y + 8} v 24 M${x - 4} ${y + 10} v 22 M${x + 6} ${y + 10} v 22 M${x + 16} ${y + 8} v 24" stroke="${c}" stroke-width="4"/><circle cx="${x - 6}" cy="${y - 2}" r="3" fill="${NA}"/><circle cx="${x + 8}" cy="${y + 2}" r="3" fill="${NA}"/>`;
const elefante = (x, y, c = "var(--muted)") => `<ellipse cx="${x}" cy="${y}" rx="30" ry="20" fill="${c}" fill-opacity=".55"/><circle cx="${x + 28}" cy="${y - 10}" r="14" fill="${c}" fill-opacity=".7"/><ellipse cx="${x + 20}" cy="${y - 8}" rx="9" ry="13" fill="${c}"/><path d="M${x + 40} ${y - 6} q 8 20 -2 30" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/><path d="M${x - 20} ${y + 16} v 16 M${x - 6} ${y + 18} v 14 M${x + 8} ${y + 18} v 14 M${x + 20} ${y + 16} v 16" stroke="${c}" stroke-width="7"/>`;
const leon = (x, y) => `<circle cx="${x}" cy="${y}" r="24" fill="${NA}" fill-opacity=".6"/><circle cx="${x}" cy="${y}" r="15" fill="${AM}"/><circle cx="${x - 5}" cy="${y - 3}" r="2" fill="var(--ink)"/><circle cx="${x + 5}" cy="${y - 3}" r="2" fill="var(--ink)"/><path d="M${x - 4} ${y + 6} q 4 3 8 0" fill="none" stroke="var(--ink)" stroke-width="1.5"/>`;
const serpiente = (x, y, c = VE) => `<path d="M${x - 40} ${y} q 10 -16 20 0 t 20 0 t 20 0 t 20 0" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/><circle cx="${x + 42}" cy="${y - 2}" r="6" fill="${c}"/><path d="M${x + 48} ${y - 2} l 6 -2 M${x + 48} ${y - 2} l 6 2" stroke="${RO}" stroke-width="1.5"/>`;

module.exports = tema({
  materia: "Inglés",
  titulo: "Wild animals",
  objetivos: ["Name wild animals and where they live", "Describe animals with adjectives: big, small, fast, slow, dangerous", "Use It's got and It can to describe an animal", "Read and write a short animal fact file"],
  claves: ["wild", "lion", "elephant", "giraffe", "monkey", "snake", "crocodile", "jungle", "savannah", "big", "fast", "dangerous"],
  pregunta: [
    "Tu perro y un lobo se parecen mucho. Pero uno vive contigo y el otro, en el bosque. ¿Cómo se dice en inglés esa diferencia?",
    "Tu perro es un <mark>pet</mark> (mascota) o un animal doméstico. El lobo es un <mark>wild animal</mark> (animal salvaje): vive libre en la naturaleza, busca su comida y nadie lo cuida. Los leones, las jirafas o los cocodrilos también son <i>wild animals</i>.",
  ],
  bloques: [
    ["Pets, farm animals and wild animals", `<p>There are three groups of animals. <b>Pets</b> live with people at home: dogs, cats, hamsters, fish. <b>Farm animals</b> live on a farm: cows, pigs, sheep, hens. <mark>Wild animals</mark> live free in nature: lions, tigers, wolves, bears.</p><p><b>En castellano:</b> <i>wild</i> significa «salvaje». Los animales salvajes no se deben tocar ni alimentar: pueden ser peligrosos y necesitan vivir libres. Por eso los vemos en la naturaleza, en documentales o en centros de protección.</p>`,
      L.filas("Tres grupos de animales", [["pets", "dog, cat, hamster", AZ], ["farm animals", "cow, pig, hen", NA], ["wild animals", "lion, bear, wolf", VE]], "Animals")],
    ["Animals of the savannah", `<p>The <mark>savannah</mark> is a hot, dry grassland in Africa. There live the <b>lion</b> (león), the <b>giraffe</b> (jirafa), the <b>elephant</b> (elefante), the <b>zebra</b> (cebra), the <b>hippo</b> (hipopótamo), the <b>rhino</b> (rinoceronte) and the <b>cheetah</b> (guepardo).</p><p>The <b>lion</b> is the «king of the savannah». The <b>giraffe</b> is the tallest animal in the world. The <b>elephant</b> is the biggest land animal. <b>Truco:</b> <i>hippo</i> y <i>rhino</i> son formas cortas de <i>hippopotamus</i> y <i>rhinoceros</i>.</p>`,
      svg("Animales de la sabana: jirafa, elefante y león", `<rect x="0" y="120" width="260" height="60" rx="0" fill="${AM}" fill-opacity=".25"/><circle cx="226" cy="30" r="14" fill="${AM}"/>${jirafa(54, 104)}${elefante(140, 110)}${leon(220, 110)}${tx(60, 168, "giraffe", { s: 11, c: AM })}${tx(146, 168, "elephant", { s: 11 })}${tx(220, 168, "lion", { s: 11, c: NA })}`)],
    ["Animals of the jungle", `<p>The <mark>jungle</mark> or rainforest is hot and wet, with lots of trees. There live the <b>monkey</b> (mono), the <b>parrot</b> (loro), the <b>snake</b> (serpiente), the <b>tiger</b> (tigre), the <b>gorilla</b>, the <b>frog</b> (rana) and the <b>crocodile</b> (cocodrilo), in the rivers.</p><p>Monkeys swing from tree to tree. Parrots are very colourful and some can repeat words. Some frogs are tiny but poisonous! ¿Sabes qué animal de la selva tiene rayas negras y naranjas? ¡El <i>tiger</i>!</p>`,
      svg("Animales de la selva: mono, serpiente y loro", `<rect x="0" y="0" width="260" height="180" rx="14" fill="${VE}" fill-opacity=".12"/><path d="M30 10 V 170 M230 10 V 170" stroke="${NA}" stroke-width="8"/><path d="M30 40 q 50 30 100 0 q 50 30 100 0" fill="none" stroke="${VE}" stroke-width="3"/><circle cx="80" cy="64" r="12" fill="${NA}" fill-opacity=".7"/><circle cx="80" cy="84" r="14" fill="${NA}" fill-opacity=".55"/><path d="M68 56 q 12 -20 24 0" fill="none" stroke="${NA}" stroke-width="3"/><path d="M190 60 q -10 10 0 30 q 14 -8 10 -26 z" fill="${RO}"/><circle cx="196" cy="58" r="7" fill="${RO}"/><path d="M202 58 l 6 2 l -6 3" fill="${AM}"/>${serpiente(130, 140)}${tx(80, 116, "monkey", { s: 11, c: NA })}${tx(196, 110, "parrot", { s: 11, c: RO })}${tx(130, 166, "snake", { s: 11, c: VE })}`), "in7b"],
    ["Cold places: polar animals", `<p>In very <mark>cold places</mark>, like the Arctic and the Antarctic, there are animals with thick fur or fat. The <b>polar bear</b> (oso polar) lives in the Arctic. <b>Penguins</b> (pingüinos) live in the Antarctic. There are also <b>seals</b> (focas), <b>walruses</b> (morsas) and <b>arctic foxes</b> (zorros árticos).</p><p>In the ocean live the <b>whale</b> (ballena), the biggest animal in the world, the <b>dolphin</b> (delfín), the <b>shark</b> (tiburón) and the <b>octopus</b> (pulpo), which has got eight arms.</p>`,
      L.tabla("Dónde viven los animales", ["habitat", "animals"], [["savannah", "lion, zebra"], ["jungle", "monkey, parrot"], ["polar", "polar bear, penguin"], ["ocean", "whale, shark"]], AG)],
    ["Describing animals: adjectives", `<p>We describe animals with <mark>adjectives</mark>: <b>big</b> / <b>small</b>, <b>tall</b> (alto) / <b>short</b>, <b>fast</b> (rápido) / <b>slow</b> (lento), <b>strong</b> (fuerte), <b>dangerous</b> (peligroso), <b>beautiful</b>, <b>funny</b> (gracioso) and <b>scary</b> (que da miedo).</p><p>The adjective goes <b>before</b> the noun or after <i>is</i>: «It's a <b>big</b> animal» / «The elephant <b>is big</b>». Adjectives never take -s: «two <b>big</b> elephants», not «bigs». <b>Opuestos:</b> big-small, fast-slow, tall-short.</p>`,
      svg("Opuestos: elefante grande y ratón pequeño, guepardo rápido y tortuga lenta", `${elefante(52, 66)}<ellipse cx="126" cy="96" rx="10" ry="6" fill="var(--muted)" fill-opacity=".7"/><circle cx="135" cy="92" r="4" fill="var(--muted)"/><circle cx="134" cy="88" r="3" fill="var(--muted)" fill-opacity=".5"/><path d="M116 96 q -8 2 -10 -6" fill="none" stroke="var(--muted)" stroke-width="1.5"/>${tx(56, 124, "big", { s: 13, c: AZ })}${tx(126, 124, "small", { s: 12, c: AZ })}<ellipse cx="212" cy="58" rx="24" ry="9" fill="${AM}"/><circle cx="238" cy="52" r="7" fill="${AM}"/>${[200, 210, 220].map((x) => `<circle cx="${x}" cy="56" r="2" fill="var(--ink)"/>`).join("")}<path d="M196 64 l -10 10 M204 66 l -4 12 M222 66 l 6 12 M230 64 l 10 10 M188 56 q -12 -2 -14 -10" stroke="${AM}" stroke-width="3" fill="none"/><path d="M160 54 h 18 M164 62 h 14" stroke="${RO}" stroke-width="2"/><path d="M190 136 q 22 -30 44 0 z" fill="${VE}" fill-opacity=".6" stroke="${VE}" stroke-width="2"/><circle cx="240" cy="130" r="6" fill="${VE}"/><path d="M196 136 v 6 M226 136 v 6" stroke="${VE}" stroke-width="4"/>${tx(212, 98, "fast cheetah", { s: 11, c: RO })}${tx(212, 164, "slow tortoise", { s: 11, c: VE })}`)],
    ["It's got… It can…", `<p>To describe an animal, we say what it <b>has got</b> and what it <b>can</b> do. «The giraffe <mark>has got</mark> a long neck and long legs. It <mark>can</mark> eat leaves from tall trees.» «The crocodile has got big teeth. It can swim, but it can't climb.»</p><p>Body parts of animals: <b>trunk</b> (trompa), <b>tail</b> (cola), <b>wings</b> (alas), <b>fur</b> (pelaje), <b>stripes</b> (rayas), <b>spots</b> (manchas), <b>horn</b> (cuerno), <b>claws</b> (garras) and <b>beak</b> (pico). «A zebra has got black and white <b>stripes</b>.»</p>`,
      L.frase("It's got a long neck. It can eat leaves.", [["It's got", "lo que tiene", AZ], ["a long neck.", "partes", VE], ["It can eat leaves.", "lo que sabe hacer", NA]], "Describe an animal")],
    ["What do they eat?", `<p>Some animals eat <b>meat</b> (carne): lions, tigers, sharks and crocodiles. They are <mark>carnivores</mark>. Other animals eat <b>plants</b>: elephants, giraffes, zebras and rabbits. They are <mark>herbivores</mark>. Some animals eat everything, like bears and monkeys: they are <b>omnivores</b>.</p><p>Say it in English: «Lions <b>eat meat</b>.» «Giraffes <b>eat leaves</b>.» «Monkeys <b>eat fruit</b> and insects.» Estas palabras son casi iguales en castellano: carnívoro, herbívoro, omnívoro.</p>`,
      L.filas("Qué comen los animales", [["carnivores", "eat meat: lion", RO], ["herbivores", "eat plants: zebra", VE], ["omnivores", "eat everything: bear", NA]], "What do they eat?")],
    ["Reading: my animal fact file", `<p>Read Lucas's <b>fact file</b> (ficha de datos): «<b>Animal:</b> the elephant. <b>Where does it live?</b> In the savannah and in the jungle in Africa and Asia. <b>What does it look like?</b> It's very big and grey. It's got big ears, a long trunk and two white tusks (colmillos). <b>What can it do?</b> It can swim and it can carry heavy things with its trunk. It can't jump. <b>What does it eat?</b> Grass, leaves and fruit. <b>Fun fact:</b> elephants can live for 70 years!»</p><p>Answer: What colour is the elephant? Can it jump?</p>`,
      svg("Ficha de datos del elefante", `<rect x="14" y="12" width="232" height="156" rx="10" fill="var(--card)" stroke="${AZ}" stroke-width="2"/>${tx(130, 32, "Fact file: the elephant", { s: 12.5, c: AZ })}${elefante(66, 94)}${[["lives: savannah", VE], ["big and grey", "var(--ink)"], ["can swim", AZ], ["eats: grass", NA]].map(([s, c], i) => tx(184, 66 + i * 22, s, { s: 10.5, c })).join("")}${tx(130, 158, "Fun fact: they live 70 years!", { s: 10.5, c: RO })}`)],
    ["Let's practise: guess the animal", `<p>Play <b>Guess the animal</b>. Think of a wild animal. Your partner asks yes/no questions: «<b>Is it big?</b>» — «Yes, it is.» «<b>Has it got</b> stripes?» — «No, it hasn't.» «<b>Can it</b> swim?» — «Yes, it can.» «<b>Does it live</b> in the jungle?» — «No, it doesn't.» «Is it a hippo?» — «Yes!»</p><p>Then write your own fact file about your favourite wild animal and draw it. Hang it on the class <b>zoo wall</b> (mural de la clase).</p>`,
      svg("Juego de adivinar el animal con preguntas", `${persona(50, 66, AZ, { brazos: [[-14, 12], [14, -12]] })}${persona(210, 66, RO)}<rect x="74" y="26" width="112" height="28" rx="12" fill="var(--paper)" stroke="${AZ}" stroke-width="1.6"/>${tx(130, 45, "Is it big?", { s: 12, c: AZ })}<rect x="94" y="76" width="92" height="28" rx="12" fill="var(--paper)" stroke="${RO}" stroke-width="1.6"/>${tx(140, 95, "Yes, it is!", { s: 12, c: RO })}<rect x="74" y="122" width="112" height="28" rx="12" fill="var(--paper)" stroke="${AZ}" stroke-width="1.6"/>${tx(130, 141, "Is it a hippo?", { s: 12, c: AZ })}`)],
  ],
  ejemplos: [
    ["¿El cocodrilo es pet o wild animal?", ["Vive libre en ríos.", "Nadie lo cuida en casa."], "It's a wild animal."],
    ["Describe a la cebra con have got.", ["Cebra = zebra; it.", "Rayas = stripes."], "A zebra has got black and white stripes."],
    ["Traduce: «El guepardo es muy rápido».", ["Guepardo = cheetah.", "Rápido = fast."], "The cheetah is very fast."],
  ],
  errores: [
    "Poner -s al adjetivo: «bigs elephants» → «big elephants».",
    "Poner el adjetivo detrás: «an animal big» → «a big animal».",
    "Decir «It have got» → «It has got».",
    "Confundir snake (serpiente) con snack (merienda).",
    "Escribir «girafe» o «jiraffe»: es giraffe.",
  ],
  ejercicios: [
    ["Traduce: león, mono, serpiente, cocodrilo.", "lion, monkey, snake, crocodile."],
    ["Escribe dos animales de la sabana.", "giraffe, zebra (o elephant, lion, hippo…)."],
    ["Escribe dos animales polares.", "polar bear, penguin (o seal, walrus)."],
    ["¿Qué significa wild?", "Salvaje."],
    ["Escribe el contrario: fast, big, tall.", "slow, small, short."],
    ["Completa: «The elephant has got a long ___.» (trompa)", "trunk."],
    ["Completa: «Lions eat ___.»", "meat."],
    ["¿Qué es un herbivore?", "Un animal que come plantas."],
    ["Pregunta si el animal sabe nadar.", "Can it swim?"],
    ["Escribe dos frases sobre tu animal salvaje favorito.", "Model answer: My favourite animal is the tiger. It's got orange and black stripes."],
  ],
  figura: ["Wild animals", L.columnas("Animales salvajes en inglés", [["sabana", "SAVANNAH", ["lion, giraffe", "elephant"], AM], ["selva", "JUNGLE", ["monkey, parrot", "snake"], VE], ["frío y mar", "POLAR", ["polar bear", "penguin, whale"], AG], ["describir", "IT'S GOT", ["It can swim.", "It's fast."], RO]])],
  video: "in7v",
  quiz: [
    ["A lion is a…", ["wild animal", "pet", "farm animal"], "Salvaje."],
    ["«Jirafa» is…", ["giraffe", "zebra", "gorilla"], "Giraffe."],
    ["Monkeys and parrots live in the…", ["jungle", "Antarctic", "desert"], "Jungle."],
    ["The biggest animal in the world is the…", ["whale", "elephant", "lion"], "La ballena azul."],
    ["The opposite of fast is…", ["slow", "big", "tall"], "Slow."],
    ["A zebra has got…", ["stripes", "wings", "a trunk"], "Rayas."],
    ["The giraffe ___ got a long neck.", ["has", "have", "is"], "It → has."],
    ["Carnivores eat…", ["meat", "leaves", "grass"], "Carne."],
    ["Penguins live in…", ["the Antarctic", "the jungle", "the savannah"], "Antártida."],
    ["«It's a ___ animal.»", ["big", "bigs", "animal big"], "Adjetivo delante, sin -s."],
  ],
  examen: [
    ["«Serpiente» is…", ["snake", "snack", "shark"], "Snake."],
    ["The elephant uses its ___ to drink.", ["trunk", "tail", "beak"], "Trompa."],
    ["«Can a crocodile swim?» — «Yes, …»", ["it can.", "it is.", "it has."], "It can."],
    ["Herbivores eat…", ["plants", "meat", "fish"], "Plantas."],
  ],
  feynman: ["Qué diferencia hay entre pets, farm animals y wild animals", "Qué animales viven en la sabana, la selva y los polos", "Cómo describo un animal con adjetivos, has got y can", "Qué comen los carnívoros y los herbívoros"],
  mapa: ["WILD ANIMALS", VE, [["Savannah", "lion · giraffe · zebra", AM], ["Jungle", "monkey · parrot · snake", VE], ["Polar · ocean", "polar bear · penguin · whale", AG], ["Describe", "big · fast · has got · can", RO]], 240],
  tarjetas: [
    ["wild animal", "Animal salvaje."],
    ["savannah", "Sabana: lion, giraffe, zebra."],
    ["jungle", "Selva: monkey, parrot, snake."],
    ["polar bear / penguin", "Oso polar / pingüino."],
    ["fast / slow", "Rápido / lento."],
    ["dangerous", "Peligroso."],
    ["stripes / spots", "Rayas / manchas."],
    ["carnivore / herbivore", "Come carne / come plantas."],
  ],
  familias: ["Ved un documental de animales y nombrad en inglés los que aparecen.", "Jugad a adivinar animales con preguntas de sí o no: Is it big? Can it fly?"],
  saberes: "Léxico de animales salvajes y hábitats, adjetivos descriptivos, have got y can para describir, fichas informativas (Lengua Extranjera: Inglés)",
  ideas: ["Mural «Our wild zoo» con fichas de datos.", "Juego de adivinar animales con preguntas cerradas.", "Clasificación de animales por hábitat y alimentación."],
  fuentes: [["National Geographic Kids: animals", "https://kids.nationalgeographic.com/animals"], ["British Council LearnEnglish Kids", "https://learnenglishkids.britishcouncil.org/"]],
});
