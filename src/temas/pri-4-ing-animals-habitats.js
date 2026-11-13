// Inglés 4º de Primaria: animals and habitats. En inglés con apoyo en castellano. Dibujos propios en SVG.
const { tema, L, svg, tx, t, AZ, RO, VE, NA, AM, AG, MO } = require("./_pri4d");

// Paisaje sencillo para cada hábitat.
const paisaje = (tipo) => {
  const p = {
    jungle: `<rect x="0" y="0" width="260" height="180" fill="${VE}" opacity=".18"/>${[30, 90, 160, 220].map((x, i) => `<path d="M${x} 170 V ${70 + i * 8}" stroke="#7a4b23" stroke-width="7"/><circle cx="${x}" cy="${60 + i * 8}" r="${26 - i * 2}" fill="${VE}"/>`).join("")}`,
    desert: `<rect x="0" y="0" width="260" height="180" fill="${AM}" opacity=".18"/><circle cx="210" cy="40" r="20" fill="${AM}"/><path d="M0 150 q 70 -40 140 0 t 120 -10 V 180 H 0 z" fill="${AM}" opacity=".6"/><path d="M70 140 V 90 M70 110 h -14 v -12 M70 104 h 14 v -14" stroke="${VE}" stroke-width="7" stroke-linecap="round" fill="none"/>`,
    ocean: `<rect x="0" y="40" width="260" height="140" fill="${AG}" opacity=".3"/><path d="M0 40 q 20 -8 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0" fill="none" stroke="${AG}" stroke-width="3"/><path d="M80 110 q 30 -24 60 0 q -30 22 -60 0 z M140 110 l 14 -10 v 20 z" fill="${AZ}"/>`,
    polar: `<rect x="0" y="0" width="260" height="180" fill="${AG}" opacity=".12"/><path d="M0 130 L 60 90 L 110 120 L 170 70 L 260 120 V 180 H 0 z" fill="var(--card)" stroke="${AG}" stroke-width="2"/>`,
  };
  return p[tipo];
};

module.exports = tema({
  materia: "Inglés",
  titulo: "Animals and habitats",
  objetivos: ["Learn the names of wild animals in English", "Name five habitats: jungle, desert, ocean, polar regions and grassland", "Describe animals with body parts and adjectives", "Say where animals live and what they eat with the present simple"],
  claves: ["habitat", "jungle", "desert", "ocean", "grassland", "polar", "fur", "feathers", "scales", "It lives in…", "It eats…"],
  pregunta: [
    "¿Por qué no vemos osos polares en el desierto ni camellos en el Polo Norte?",
    "Porque cada animal está preparado para vivir en un lugar concreto: su <mark>habitat</mark> (hábitat). El oso polar tiene pelo muy grueso para el frío y el camello guarda reservas para pasar días sin beber. En inglés decimos: «Polar bears <b>live in</b> the Arctic. Camels <b>live in</b> the desert».",
  ],
  bloques: [
    ["What is a habitat?", `<p>A <mark>habitat</mark> is the natural home of an animal or plant. It gives the animal everything it needs: <b>food</b>, <b>water</b>, <b>shelter</b> (refugio) and a place to have babies.</p><p>There are many habitats on Earth: <b>jungles</b> (selvas), <b>deserts</b> (desiertos), <b>oceans</b> (océanos), <b>polar regions</b> (zonas polares), <b>grasslands</b> (sabanas y praderas), <b>forests</b> (bosques), <b>rivers</b> and <b>mountains</b>. <b>En castellano:</b> fíjate en que <i>habitat</i> en inglés se escribe sin tilde y casi igual que en español.</p>`,
      L.filas("Lo que da un hábitat: comida, agua, refugio", [["food", "comida", VE], ["water", "agua", AG], ["shelter", "refugio, casa", NA]], "A habitat gives…")],
    ["The jungle", `<p>The <mark>jungle</mark> (or rainforest) is hot and very wet. It rains almost every day and there are very tall trees. Lots of animals live there: <b>monkeys</b>, <b>parrots</b>, <b>snakes</b>, <b>frogs</b>, <b>tigers</b> and <b>jaguars</b>.</p><p>Many jungle animals live <b>in the trees</b>. Monkeys have long arms and tails to climb. Parrots have strong beaks to open nuts. Some frogs are very small and very colourful. <b>Frase modelo:</b> «Monkeys live in the jungle. They eat fruit and leaves».</p>`,
      svg("La selva con árboles altos", `${paisaje("jungle")}${`<rect x="68" y="152" width="124" height="20" rx="8" fill="var(--paper)" opacity=".9"/>`+tx(130, 166, "jungle: hot and wet", { s: 13, c: VE })}`)],
    ["The desert", `<p>The <mark>desert</mark> is very dry. It hardly ever rains. During the day it's very hot, but at night it can be cold. There is a lot of sand or rock, and only a few plants, like cactuses.</p><p>Desert animals are special: <b>camels</b> can live many days without drinking. <b>Scorpions</b>, <b>snakes</b> and <b>lizards</b> hide under the sand in the hot hours. The <b>fennec fox</b> has very big ears to lose heat. <b>Frase modelo:</b> «Camels live in the desert. They have humps».</p>`,
      svg("El desierto con dunas, sol y un cactus", `${paisaje("desert")}${tx(130, 30, "desert: hot and dry", { s: 13, c: NA })}`), "in6b"],
    ["The ocean", `<p>The <mark>ocean</mark> is the biggest habitat on Earth. It's salty water. Some animals live near the coast and others in very deep, dark water. Here you can find <b>whales</b>, <b>dolphins</b>, <b>sharks</b>, <b>octopuses</b>, <b>turtles</b>, <b>jellyfish</b> and many <b>fish</b>.</p><p>Fish breathe with <b>gills</b> (branquias), but whales and dolphins are mammals: they come up to breathe air. <b>Consejo:</b> el plural de <i>fish</i> es igual: one fish, two <b>fish</b>. Y el de <i>octopus</i> es <i>octopuses</i>.</p>`,
      svg("El océano con olas y un pez", `${paisaje("ocean")}${tx(130, 168, "ocean: salty water", { s: 13, c: AZ })}`)],
    ["Polar regions and grasslands", `<p>The <mark>polar regions</mark> (the Arctic and the Antarctic) are very cold and covered in ice and snow. <b>Polar bears</b> and <b>arctic foxes</b> live in the Arctic (north). <b>Penguins</b> live in the Antarctic (south). They have thick <b>fur</b> or <b>fat</b> to keep warm.</p><p>The <mark>grassland</mark> (savannah) in Africa has lots of grass and few trees. There are <b>lions</b>, <b>zebras</b>, <b>giraffes</b>, <b>elephants</b> and <b>rhinos</b>. <b>Dato curioso:</b> los osos polares y los pingüinos nunca se encuentran, ¡viven en polos opuestos!</p>`,
      svg("Paisaje polar con hielo y montañas", `${paisaje("polar")}${tx(130, 30, "polar: very cold", { s: 13, c: AG })}${tx(70, 160, "Arctic (north)", { s: 11, c: AZ })}${tx(190, 160, "Antarctic (south)", { s: 11, c: AZ })}`)],
    ["Describing animals: body parts", `<p>To describe animals, we use <mark>body parts</mark>: <b>fur</b> (pelo), <b>feathers</b> (plumas), <b>scales</b> (escamas), <b>wings</b> (alas), <b>tail</b> (cola), <b>beak</b> (pico), <b>claws</b> (garras), <b>fins</b> (aletas), <b>horns</b> (cuernos), <b>trunk</b> (trompa).</p><p>We use the verb <b>have got</b> or <b>has got</b>: «A parrot <b>has got</b> feathers and a beak», «Elephants <b>have got</b> a trunk». Also useful: <b>big</b>, <b>small</b>, <b>long</b>, <b>short</b>, <b>strong</b>, <b>fast</b>, <b>slow</b>, <b>dangerous</b>.</p>`,
      L.tabla("Partes del cuerpo de los animales", ["Animal", "has got…"], [["parrot", "feathers, a beak"], ["fish", "scales, fins"], ["lion", "fur, claws"], ["elephant", "a trunk, big ears"]], NA)],
    ["Where does it live? What does it eat?", `<p>We use the present simple to give facts about animals. Remember the <b>-s</b> with <i>it</i>: «The giraffe <b>lives</b> in the grassland. It <b>eats</b> leaves». With plural: «Giraffes <b>live</b> in the grassland. They <b>eat</b> leaves».</p><p>Animals that eat plants are <b>herbivores</b>; animals that eat other animals are <b>carnivores</b>; animals that eat both are <b>omnivores</b>. To ask: «<b>Where does</b> the shark <b>live</b>?» – «It lives in the ocean». «<b>What does</b> it <b>eat</b>?» – «It eats fish».</p>`,
      L.frase("Frase: The giraffe lives in the grassland", [["The giraffe", "it", AZ], ["lives", "+ s", RO], ["in the grassland.", "place", VE]], "It eats leaves. It's a herbivore.")],
    ["Reading: animal riddles", `<p>Read and guess! <b>1.</b> «I live in the jungle. I've got a long tail and I can climb trees very well. I eat bananas. What am I?» <b>2.</b> «I live in the ocean. I'm very big, but I'm not a fish. I breathe air. What am I?» <b>3.</b> «I live in the Antarctic. I've got black and white feathers, but I can't fly. I can swim very well. What am I?»</p><p><b>4.</b> «I live in the grassland. I'm the tallest animal in the world. I eat leaves from the trees.» Answers: monkey, whale, penguin, giraffe.</p>`,
      L.filas("Soluciones de las adivinanzas", [["1", "monkey (jungle)", VE], ["2", "whale (ocean)", AZ], ["3", "penguin (Antarctic)", AG], ["4", "giraffe (grassland)", AM]], "What am I?")],
    ["Let's practise: my animal fact file", `<p>Choose your favourite wild animal and make a <b>fact file</b> (ficha). Draw it and complete: <b>Name:</b> …, <b>Habitat:</b> It lives in…, <b>Food:</b> It eats…, <b>Body:</b> It has got…, <b>Abilities:</b> It can… / It can't…, <b>Fun fact:</b> …</p><p>Then present it to the class without saying the name. Your classmates guess the animal. <b>Consejo:</b> revisa que todos los verbos con <i>it</i> lleven la <b>-s</b>: lives, eats. ¡Y con <i>has got</i>, no <i>have got</i>!</p>`,
      svg("Ficha de un animal con sus apartados", `<rect x="20" y="12" width="220" height="156" rx="10" fill="var(--card)" stroke="${VE}" stroke-width="2"/>${tx(130, 32, "Animal fact file", { s: 13, c: VE })}<rect x="30" y="44" width="70" height="70" rx="6" fill="${VE}" fill-opacity=".12" stroke="${VE}" stroke-dasharray="4 3"/>${tx(65, 84, "draw", { s: 10, c: "var(--muted)" })}${["Habitat: It lives in…", "Food: It eats…", "Body: It has got…", "It can… / can't…"].map((s, i) => tx(110, 60 + i * 20, s, { s: 10.5, a: "start" })).join("")}${tx(130, 150, "Fun fact: …", { s: 11, c: RO })}`)],
  ],
  ejemplos: [
    ["Write a sentence: zebra / grassland / grass.", ["zebra = it → lives, eats.", "Lugar: in the grassland."], "The zebra lives in the grassland. It eats grass."],
    ["Translate: «Los pingüinos tienen plumas, pero no pueden volar».", ["pingüinos (plural) → have got.", "no pueden volar → can't fly."], "Penguins have got feathers, but they can't fly."],
    ["Ask about the shark's food.", ["Pregunta con What + does (shark = it).", "Verbo normal: eat."], "What does the shark eat?"],
  ],
  errores: [
    "Olvidar la -s con it: «It live in the desert» → «It lives».",
    "Decir «fishes» en lugar de fish para el plural normal.",
    "Usar have got con it: «It have got» → «It has got».",
    "Confundir los polos: los pingüinos viven en el Antártico (sur), no en el Ártico.",
    "Traducir «selva» por «selve»: es jungle o rainforest.",
  ],
  ejercicios: [
    ["Translate: selva, desierto, océano, sabana.", "jungle, desert, ocean, grassland."],
    ["Translate: plumas, escamas, pelo, cola.", "feathers, scales, fur, tail."],
    ["Where do camels live?", "In the desert."],
    ["Complete: «The monkey ___ (live) in the jungle.»", "lives."],
    ["Complete: «A lion ___ got sharp claws.»", "has."],
    ["Name two animals from the polar regions.", "Polar bear, penguin (also arctic fox, seal)."],
    ["Make a question: where / the dolphin / live", "Where does the dolphin live?"],
    ["What is a herbivore?", "An animal that eats plants."],
    ["Correct: «Giraffes eats leaves.»", "Giraffes eat leaves."],
    ["Write a riddle about an animal.", "Model answer: I live in the grassland. I've got black and white stripes. I eat grass. What am I? (a zebra)"],
  ],
  figura: ["Animals and their habitats", L.columnas("Animales y sus hábitats", [["hot and wet", "JUNGLE", ["monkey, parrot", "tiger, frog"], VE], ["hot and dry", "DESERT", ["camel, lizard", "scorpion"], NA], ["salty water", "OCEAN", ["whale, shark", "octopus"], AZ], ["very cold", "POLAR", ["polar bear", "penguin"], AG]])],
  video: "in6v",
  quiz: [
    ["«Habitat» means…", ["the natural home of an animal", "a type of food", "a body part"], "Hábitat."],
    ["Camels live in the…", ["desert", "ocean", "jungle"], "Desierto."],
    ["Penguins live in the…", ["Antarctic", "Arctic", "desert"], "Polo sur."],
    ["«Plumas» is…", ["feathers", "scales", "fur"], "feathers."],
    ["Fish have got…", ["scales and fins", "feathers and a beak", "fur and claws"], "Escamas y aletas."],
    ["«The shark ___ in the ocean.»", ["lives", "live", "living"], "it + s."],
    ["An animal that eats plants is a…", ["herbivore", "carnivore", "omnivore"], "Herbívoro."],
    ["«Where ___ the tiger live?»", ["does", "do", "is"], "tiger = it."],
    ["Which animal lives in the grassland?", ["zebra", "octopus", "polar bear"], "Sabana."],
    ["The plural of «fish» is…", ["fish", "fishs", "fishes"], "Igual."],
  ],
  examen: [
    ["The jungle is…", ["hot and wet", "cold and dry", "salty"], "Selva."],
    ["«An elephant has got a ___.»", ["trunk", "beak", "fin"], "Trompa."],
    ["Which is a mammal that lives in the ocean?", ["whale", "shark", "jellyfish"], "Respira aire."],
    ["«Lions ___ meat.»", ["eat", "eats", "eating"], "Plural sin s."],
  ],
  feynman: ["Qué es un hábitat y qué da a los animales", "Cómo son la selva, el desierto, el océano y las zonas polares", "Cómo se describe un animal con has got", "Cómo se dice dónde vive y qué come un animal"],
  mapa: ["HABITATS", VE, [["Jungle", "monkey · parrot · frog", VE], ["Desert", "camel · lizard · scorpion", NA], ["Ocean", "whale · shark · octopus", AZ], ["Polar", "polar bear · penguin", AG]], 240],
  tarjetas: [
    ["habitat", "Hogar natural de un animal."],
    ["jungle", "Selva: calor y lluvia."],
    ["desert", "Desierto: muy seco."],
    ["grassland", "Sabana o pradera."],
    ["feathers", "Plumas."],
    ["scales", "Escamas."],
    ["It lives in…", "Vive en… (con -s)."],
    ["herbivore", "Come plantas."],
  ],
  familias: ["Ved juntos un documental de animales con el audio en inglés y anotad tres animales y su hábitat.", "Jugad a las adivinanzas: «I live in the ocean. I've got eight legs. What am I?»."],
  saberes: "Léxico de animales salvajes, hábitats y partes del cuerpo; presente simple para describir; have got / has got; preguntas con where y what (Lengua Extranjera)",
  ideas: ["Ficha de un animal y exposición tipo adivinanza.", "Mural de la clase con los cinco hábitats y animales recortados.", "Conexión con Ciencias de la Naturaleza: ecosistemas y alimentación."],
  fuentes: [["British Council LearnEnglish Kids: word games", "https://learnenglishkids.britishcouncil.org/word-games"], ["Cambridge Dictionary: habitat", "https://dictionary.cambridge.org/dictionary/english/habitat"]],
});
