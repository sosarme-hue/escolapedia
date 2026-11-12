// Inglés 6º de Primaria: comparatives and superlatives. En inglés con apoyo en castellano. Dibujos propios en SVG.
const { tema, L, svg, tx, AZ, RO, VE, NA, AM } = require("./_pri6d");

// Tres animales en fila, de menor a mayor, con su rótulo.
const tres = (label, items) => svg(label, items.map(([n, h, c, nota], i) => {
  const x = 50 + i * 80;
  return `<rect x="${x - 22}" y="${140 - h}" width="44" height="${h}" rx="8" fill="${c}" fill-opacity=".8"/>${tx(x, 158, n, { s: 12 })}${nota ? tx(x, 132 - h, nota, { s: 11, c }) : ""}`;
}).join("") + `<path d="M14 141 H 246" stroke="var(--ink)" stroke-width="2"/>`);

module.exports = tema({
  materia: "Inglés",
  titulo: "Comparatives and superlatives",
  objetivos: ["Compare two things with comparatives: taller than, more expensive than", "Say which is the top one in a group with superlatives: the tallest, the most expensive", "Use the irregular forms good, bad and far", "Compare people, animals and places in short texts"],
  claves: ["comparative", "superlative", "-er than", "the -est", "more … than", "the most", "better / the best", "worse / the worst", "as … as"],
  pregunta: [
    "Un guepardo es más rápido que un caballo. Pero ¿cuál es el animal terrestre más rápido de todos? ¿Cómo dirías «más rápido que» y «el más rápido» en inglés?",
    "«Más rápido que» es <mark>faster than</mark> (comparativo: comparamos dos). «El más rápido» es <mark>the fastest</mark> (superlativo: el número uno de un grupo). «The cheetah is <b>the fastest</b> land animal in the world.»",
  ],
  bloques: [
    ["Comparing two or more", `<p>When we compare <b>two</b> things we use the <mark>comparative</mark>: «A horse is <b>bigger than</b> a dog». When we choose the <b>number one</b> in a group of three or more we use the <mark>superlative</mark>: «The elephant is <b>the biggest</b> of the three».</p><p><b>En castellano:</b> el comparativo es «más… que» y el superlativo es «el más… de». En inglés, el adjetivo cambia: big → bigger → the biggest. Detrás del comparativo va <b>than</b> («que») y delante del superlativo va <b>the</b>.</p>`,
      tres("Un perro, un caballo y un elefante: big, bigger, the biggest", [["dog", 40, AZ, "big"], ["horse", 70, VE, "bigger"], ["elephant", 100, RO, "the biggest"]])],
    ["Short adjectives: -er and -est", `<p>Adjectives with <b>one syllable</b> add <mark>-er</mark> and <mark>-est</mark>: tall → tall<b>er</b> → the tall<b>est</b>; fast → faster → the fastest; old → older → the oldest; small → smaller → the smallest.</p><p><b>Spelling:</b> ending in -e, add only -r / -st: nice → nicer → the nicest. Consonant + vowel + consonant, double the letter: big → bi<b>gg</b>er → the bi<b>gg</b>est; hot → hotter → the hottest; thin → thinner → the thinnest.</p>`,
      L.tabla("Adjetivos cortos: tall, nice, big", ["Adjective", "Comparative", "Superlative"], [["tall", "taller", "the tallest"], ["nice", "nicer", "the nicest"], ["big", "bigger", "the biggest"], ["hot", "hotter", "the hottest"]], AZ)],
    ["Adjectives ending in -y", `<p>Adjectives with two syllables that end in <b>-y</b> change the y to <mark>-ier</mark> and <mark>-iest</mark>: happy → happ<b>ier</b> → the happ<b>iest</b>; funny → funnier → the funniest; easy → easier → the easiest; heavy → heavier → the heaviest.</p><p>Example: «My cat is <b>lazier than</b> my dog, but my hamster is <b>the laziest</b> pet in the house!». <b>En castellano:</b> es la misma regla de la y que en el pasado (study → studied): la y se convierte en i.</p>`,
      L.tabla("Adjetivos en -y: happy, funny, easy", ["Adjective", "Comparative", "Superlative"], [["happy", "happier", "the happiest"], ["funny", "funnier", "the funniest"], ["easy", "easier", "the easiest"]], VE)],
    ["Long adjectives: more and the most", `<p>Long adjectives (two or more syllables, not ending in -y) don't change. We put <mark>more</mark> or <mark>the most</mark> before them: interesting → <b>more interesting</b> → <b>the most interesting</b>; expensive → more expensive → the most expensive; beautiful, dangerous, important, popular…</p><p>«A tiger is <b>more dangerous than</b> a cat». «The blue whale is <b>the most amazing</b> animal I know». Never mix the two forms: not «more bigger» or «the most fastest».</p>`,
      L.filas("¿-er o more?", [["1 syllable", "-er / -est: taller", AZ], ["2 syllables + y", "-ier / -iest: happier", VE], ["long", "more / the most: more famous", RO]], "Which form?")],
    ["Irregular forms", `<p>Three very common adjectives are <mark>irregular</mark>: <b>good → better → the best</b>; <b>bad → worse → the worst</b>; <b>far → further → the furthest</b>.</p><p>«This pizza is <b>better than</b> the last one». «It was <b>the best</b> day of my life!». «Monday is <b>the worst</b> day of the week». <b>En castellano:</b> también en español son irregulares: bueno → mejor (no «más bueno»), malo → peor. Por eso en inglés nunca se dice «gooder» ni «the goodest».</p>`,
      L.tabla("Irregulares: good, bad, far", ["Adjective", "Comparative", "Superlative"], [["good", "better", "the best"], ["bad", "worse", "the worst"], ["far", "further", "the furthest"]], RO)],
    ["Superlatives in sentences", `<p>After a superlative we often say the group with <mark>in</mark> (places, groups) or <mark>of</mark> (a number or time): «Mount Everest is <b>the highest</b> mountain <b>in</b> the world», «Ana is <b>the tallest</b> girl <b>in</b> my class», «It's <b>the coldest</b> day <b>of</b> the year».</p><p>We can also use the present perfect phrase <b>I've ever</b> (que he… nunca): «It's <b>the best</b> book <b>I've ever read</b>». <b>En castellano:</b> «el mejor libro que he leído nunca».</p>`,
      L.frase("Superlativo: Everest is the highest mountain in the world", [["Everest is", "", "var(--line)"], ["the highest", "superlativo", RO], ["mountain", "", "var(--line)"], ["in the world.", "grupo", AZ]], "the + -est + in / of"), "in3b"],
    ["As … as: the same", `<p>To say two things are <b>equal</b> (iguales) we use <mark>as + adjective + as</mark>: «My brother is <b>as tall as</b> my dad». In the negative, <mark>not as … as</mark> means «less»: «A bike isn't <b>as fast as</b> a car».</p><p>Compare these sentences, they mean the same: «A car is <b>faster than</b> a bike» = «A bike is<b>n't as fast as</b> a car». <b>En castellano:</b> «as… as» es «tan… como». El adjetivo va en su forma normal, sin -er.</p>`,
      L.filas("Comparar de tres maneras", [["more", "Leo is taller than Ana.", AZ], ["the same", "Ana is as tall as Eva.", VE], ["less", "Ana isn't as tall as Leo.", RO]])],
    ["Reading: world records", `<p>Read about animal records: «The <b>biggest</b> animal in the world is the blue whale. It is <b>heavier than</b> thirty elephants! The cheetah is <b>the fastest</b> land animal: it is <b>faster than</b> a car in the city. The giraffe is <b>the tallest</b> animal, and its tongue is <b>longer than</b> your arm. Tortoises are <b>slower than</b> most animals, but some live <b>longer than</b> people. Which animal do you think is <b>the most interesting</b>?»</p>`,
      L.filas("Récords de animales", [["the biggest", "the blue whale", AZ], ["the fastest", "the cheetah", RO], ["the tallest", "the giraffe", VE], ["slower than", "the tortoise", AM]])],
    ["Let's practise: class records", `<p>Make a <b>class record book</b> in groups. Measure and ask: «Who is <b>the tallest</b>?», «Who has <b>the longest</b> name?», «Who lives <b>the furthest</b> from school?». Write the results: «Pablo is the tallest. His name is shorter than Alejandro's».</p><p>Then compare two places you know: your town and a big city. «My town is <b>smaller</b> and <b>quieter than</b> Barcelona, but Barcelona is <b>more exciting</b>». <b>Consejo:</b> cuenta las sílabas del adjetivo antes de elegir -er o more.</p>`,
      L.dialogo("Preguntas para el libro de récords", [["Ana", "Who is the tallest?", AZ], ["Pau", "Pablo is the tallest.", RO], ["Ana", "Who lives the furthest?", AZ], ["Pau", "Sara does. She lives in a farm.", RO]])],
  ],
  ejemplos: [
    ["Write the comparative and superlative of «hot».", ["hot: una sílaba, consonante + vocal + consonante.", "Se dobla la t: hotter, the hottest."], "hotter, the hottest."],
    ["Complete: «Science is (interesting) ___ Maths for me.»", ["interesting es largo → more.", "Comparamos dos → than."], "Science is more interesting than Maths for me."],
    ["Complete: «It's (good) ___ film I've ever seen.»", ["Superlativo de good: the best (irregular)."], "It's the best film I've ever seen."],
  ],
  errores: [
    "Usar that en vez de than: «taller that me» → «taller than me».",
    "Mezclar formas: «more bigger», «the most fastest» → «bigger», «the fastest».",
    "Regularizar los irregulares: «gooder», «the baddest» → «better», «the worst».",
    "Olvidar the en el superlativo: «He is tallest» → «He is the tallest».",
    "No doblar la consonante: «biger», «hotest» → «bigger», «hottest».",
  ],
  ejercicios: [
    ["Write the comparative: cold, nice, big, happy.", "colder, nicer, bigger, happier."],
    ["Write the superlative: small, funny, expensive, good.", "the smallest, the funniest, the most expensive, the best."],
    ["Complete: «A mouse is (small) ___ a cat.»", "smaller than."],
    ["Complete: «August is (hot) ___ month of the year.»", "the hottest."],
    ["Complete: «Football is (popular) ___ handball in Spain.»", "more popular than."],
    ["Correct: «My bike is more good than yours.»", "My bike is better than yours."],
    ["Rewrite with as … as: «Tom is 12. Ana is 12.» (old)", "Tom is as old as Ana."],
    ["Rewrite with not as … as: «A car is faster than a bike.»", "A bike isn't as fast as a car."],
    ["Translate: «Es el peor día de la semana.»", "It's the worst day of the week."],
    ["Compare three animals in three sentences.", "Model answer: A dog is bigger than a cat. A horse is faster than a dog. The elephant is the heaviest of the three."],
  ],
  figura: ["Comparatives and superlatives", L.columnas("Comparativos y superlativos", [["1 syllable", "-ER / -EST", ["taller", "the tallest"], AZ], ["ending in -y", "-IER", ["happier", "the happiest"], VE], ["long", "MORE / MOST", ["more famous", "the most famous"], NA], ["irregular", "BETTER", ["the best", "worse, the worst"], RO]])],
  video: "in3v",
  quiz: [
    ["The comparative of «tall» is…", ["taller", "more tall", "tallest"], "Una sílaba: -er."],
    ["The superlative of «big» is…", ["the biggest", "the bigest", "the most big"], "Se dobla la g."],
    ["The comparative of «easy» is…", ["easier", "easyer", "more easy"], "-y → -ier."],
    ["The superlative of «beautiful» is…", ["the most beautiful", "the beautifulest", "the more beautiful"], "Adjetivo largo."],
    ["The comparative of «good» is…", ["better", "gooder", "best"], "Irregular."],
    ["The superlative of «bad» is…", ["the worst", "the baddest", "the worse"], "Irregular."],
    ["«Spain is bigger ___ Portugal.»", ["than", "that", "as"], "Comparativo + than."],
    ["«It's the longest river ___ Spain.»", ["in", "of", "than"], "Lugar: in."],
    ["«Tan rápido como» is…", ["as fast as", "so fast than", "as faster as"], "as … as."],
    ["Which sentence is correct?", ["He is the funniest boy in class.", "He is funniest boy in class.", "He is the most funny boy in class."], "the + -iest."],
  ],
  examen: [
    ["The superlative of «far» is…", ["the furthest", "the farest", "the most far"], "Irregular."],
    ["«A tiger is ___ than a cat.» (dangerous)", ["more dangerous", "dangerouser", "the most dangerous"], "Largo, comparamos dos."],
    ["The comparative of «hot» is…", ["hotter", "hoter", "more hot"], "Doble t."],
    ["«My sister isn't as ___ as me.»", ["tall", "taller", "tallest"], "as + adjetivo normal + as."],
  ],
  feynman: ["Diferencia entre comparativo y superlativo", "Cuándo se usa -er/-est y cuándo more/the most", "Cuáles son los irregulares good, bad y far", "Cómo se dice «tan… como» en inglés"],
  mapa: ["COMPARING", AZ, [["Comparative", "-er than · more … than", AZ], ["Superlative", "the -est · the most", RO], ["Irregular", "better · the best · worse", VE], ["Equal", "as … as · not as … as", AM]], 240],
  tarjetas: [
    ["-er than", "Comparativo de adjetivos cortos."],
    ["the -est", "Superlativo de adjetivos cortos."],
    ["-ier / -iest", "Adjetivos en -y: happier, the happiest."],
    ["more / the most", "Adjetivos largos."],
    ["better / the best", "Comparativo y superlativo de good."],
    ["worse / the worst", "Comparativo y superlativo de bad."],
    ["in / of", "the tallest in the class · of the year."],
    ["as … as", "Tan … como."],
  ],
  familias: ["Comparad a los miembros de la familia en inglés: «Grandpa is the oldest. I'm taller than my sister».", "Buscad récords en un libro o una web de animales y escribid tres frases con superlativos."],
  saberes: "Descripción y comparación de personas, animales, objetos y lugares; grados del adjetivo (Lengua Extranjera)",
  ideas: ["Libro de récords de la clase con medidas reales.", "Cartas de animales con datos para comparar en parejas.", "Comparar dos ciudades con un mapa y datos de población."],
  fuentes: [["British Council LearnEnglish Kids: comparatives and superlatives", "https://learnenglishkids.britishcouncil.org/grammar-practice/comparatives"], ["Cambridge Dictionary: adjectives, comparison", "https://dictionary.cambridge.org/grammar/british-grammar/adjectives-forms"]],
});
