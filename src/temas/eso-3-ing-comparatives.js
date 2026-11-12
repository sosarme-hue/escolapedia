// Inglés 3º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "3-eso",
  titulo: "Comparatives and superlatives",
  minutos: 35,
  objetivos: ["Formar el comparativo y el superlativo de adjetivos cortos y largos", "Aprender los comparativos irregulares (good, bad, far)", "Comparar con as… as, not as… as, too y enough"],
  claves: ["-er / -est", "more / the most", "than", "irregular adjectives", "as… as", "too / enough"],
  pregunta: {
    texto: "El Everest mide 8.849 m; el Teide, 3.715 m; y el Mulhacén, 3.479 m. ¿Cómo dirías en inglés que el Teide es más alto que el Mulhacén, pero que el Everest es el más alto de los tres?",
    respuesta: "«Teide is <mark>higher than</mark> Mulhacén, but Everest is <mark>the highest</mark>.» Con los adjetivos cortos añadimos <b>-er</b> para comparar dos cosas y <b>the … -est</b> para destacar una sobre todas las demás.",
  },
  bloques: [
    {
      html: `<h3>Adjetivos cortos</h3><p>Con los adjetivos de <b>una sílaba</b> (y los de dos sílabas acabados en -y), el comparativo añade <mark>-er</mark> + <b>than</b> y el superlativo <mark>the … -est</mark>: tall → taller → the tallest. Reglas de ortografía: si acaba en <b>-e</b>, solo -r / -st (nice → nicer → the nicest); consonante-vocal-consonante, se dobla la última (big → bigger → the biggest); <b>-y</b> → -ier / -iest (happy → happier → the happiest).</p>`,
      svg: L.tabla("Comparativo y superlativo de adjetivos cortos", ["Adjetivo", "Comp.", "Superl."], [
        ["cheap", "cheaper", "the cheapest"], ["large", "larger", "the largest"], ["hot", "hotter", "the hottest"], ["easy", "easier", "the easiest"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Adjetivos largos</h3><p>Con los adjetivos de <b>dos o más sílabas</b> (que no acaban en -y) usamos <mark>more … than</mark> y <mark>the most …</mark>: «This book is <b>more interesting than</b> the film», «It's <b>the most beautiful</b> beach in Menorca». Para el sentido contrario: <b>less … than</b> (menos… que) y <b>the least …</b> (el menos): «Maths is <b>less difficult</b> for me <b>than</b> Physics».</p>`,
      svg: L.filas("Adjetivos largos con more y the most", [
        ["Comp.", "more expensive than", "var(--pen)"], ["Superl.", "the most expensive", "var(--red)"], ["Menos", "less expensive than", "var(--leaf)"],
      ], "expensive"),
    },
    {
      html: `<h3>Irregulares</h3><p>Algunos adjetivos muy frecuentes son irregulares y hay que aprenderlos: <mark>good → better → the best</mark>; <mark>bad → worse → the worst</mark>; <b>far → further / farther → the furthest</b>. También los cuantificadores: much / many → more → the most; little → less → the least. «Today is <b>better than</b> yesterday», «It was <b>the worst</b> day of my life».</p>`,
      svg: L.tabla("Adjetivos irregulares", ["Adjetivo", "Comp.", "Superl."], [
        ["good", "better", "the best"], ["bad", "worse", "the worst"], ["far", "further", "the furthest"],
      ], "var(--red)"),
    },
    {
      html: `<h3>As… as y not as… as</h3><p>Para decir que dos cosas son <b>iguales</b> usamos <mark>as + adjetivo + as</mark>: «My sister is <b>as tall as</b> me». Para decir que una cosa es <b>menos</b> que otra, <mark>not as + adjetivo + as</mark>: «The bus is<b>n't as fast as</b> the train» (el tren es más rápido). En estas estructuras el adjetivo no cambia: nada de -er ni more.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos figuras de la misma altura, as tall as; y un autobús que no es tan rápido como un tren, not as fast as">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g fill="var(--pen)"><circle cx="40" cy="40" r="10"/><rect x="31" y="52" width="18" height="50" rx="6"/><circle cx="84" cy="40" r="10"/><rect x="75" y="52" width="18" height="50" rx="6"/></g>
        <path d="M24 30 H 100" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="140" y="40" width="54" height="26" rx="6" fill="var(--sun)"/><rect x="140" y="80" width="104" height="22" rx="8" fill="var(--red)"/>
        <path d="M200 53 h 14 M250 91 h 6" stroke="var(--muted)" stroke-width="2"/>
        <g ${F} font-weight="700" font-size="12" text-anchor="middle"><text x="62" y="126" fill="var(--pen)">as tall as</text><text x="196" y="126" fill="var(--red)">not as fast as</text><text x="167" y="34" font-size="10.5" fill="var(--hl-ink)">bus</text><text x="192" y="96" font-size="10.5" fill="#fff">train</text><text x="130" y="160" fill="var(--muted)">igualdad · inferioridad</text></g></svg>`,
    },
    {
      html: `<h3>Too y enough</h3><p><mark>Too + adjetivo</mark> significa «demasiado»: «This T-shirt is <b>too big</b> for me». <mark>Adjetivo + enough</mark> significa «suficientemente», y va <b>detrás</b> del adjetivo: «I'm not <b>old enough</b> to drive». Con sustantivos, <i>enough</i> va delante: «We haven't got <b>enough time</b>». Las dos estructuras pueden seguir con <b>to + verbo</b>: «It's too cold <b>to swim</b>».</p>`,
      svg: L.filas("Too y enough", [
        ["Too", "too + adj: too expensive", "var(--red)"], ["Enough", "adj + enough: tall enough", "var(--leaf)"], ["+ noun", "enough + noun: enough money", "var(--pen)"],
      ]),
    },
  ],
  figura: {
    titulo: "Comparar en inglés",
    svg: L.columnas("Formas de comparar en inglés", [
      ["dos cosas, más", "-ER / MORE", ["faster than", "more useful than"], "var(--pen)"],
      ["una entre todas", "THE -EST / MOST", ["the fastest", "the most useful"], "var(--red)"],
      ["igual / menos", "AS… AS", ["as fast as", "not as fast as"], "var(--leaf)"],
      ["exceso / suficiente", "TOO / ENOUGH", ["too slow", "fast enough"], "var(--inf)"],
    ]),
  },
  video: { id: "9KIiaLupHuA", titulo: "4 reglas clave para usar el comparativo en inglés correctamente", canal: "Francisco Ochoa Inglés Fácil", vistas: 2865768, megusta: 0, busqueda: "comparativos y superlativos en inglés" },
  quiz: [
    { q: "El comparativo de «big» es…", o: ["biger", "bigger", "more big"], a: 1, e: "Consonante-vocal-consonante: se dobla la g." },
    { q: "«This is ___ film I've ever seen.»", o: ["the most boring", "the boringest", "more boring"], a: 0, e: "Adjetivo largo: the most." },
    { q: "El superlativo de «good» es…", o: ["the goodest", "the best", "the better"], a: 1, e: "Irregular: good – better – the best." },
    { q: "«My bike is ___ yours.» (igual de rápida)", o: ["as fast as", "faster as", "as faster than"], a: 0, e: "Igualdad: as + adjetivo + as." },
    { q: "«I can't buy it. It's ___ expensive.»", o: ["enough", "too", "very enough"], a: 1, e: "Too = demasiado." },
  ],
  examen: [
    { q: "«Today is ___ than yesterday.»", o: ["hotter", "hoter", "more hot"], a: 0, e: "hot → hotter." },
    { q: "«He isn't ___ to play in the team.»", o: ["enough good", "good enough", "too good"], a: 1, e: "Enough va detrás del adjetivo." },
    { q: "«Madrid is ___ city in Spain.»", o: ["the biggest", "the bigger", "biggest"], a: 0, e: "Superlativo con the." },
  ],
  feynman: ["Cómo se forman el comparativo y el superlativo de un adjetivo corto", "Cuándo se usa more y the most", "Cuáles son los irregulares", "Cómo se usan as… as, too y enough"],
  mapa: mapa("COMPARING", "var(--eso)", [
    ["Short adj.", "-er than · the -est", "var(--pen)"],
    ["Long adj.", "more than · the most", "var(--red)"],
    ["Irregular", "better · worse · further", "var(--ink)"],
    ["Other", "as… as · too · enough", "var(--leaf)"],
  ], 240),
  tarjetas: [
    ["Comparativo corto", "adjetivo + -er + than: taller than."],
    ["Comparativo largo", "more + adjetivo + than: more expensive than."],
    ["Superlativo", "the + -est / the most: the tallest, the most expensive."],
    ["Good / bad", "better, the best / worse, the worst."],
    ["As… as", "Igualdad: as tall as. Negativa: not as tall as."],
  ],
  familias: ["Comparad en inglés a los miembros de la familia: quién es más alto, más joven, el más divertido…", "Buscad tres récords del mundo y explicadlos con superlativos.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación y reflexión sobre la lengua: grados del adjetivo, comparación de igualdad e inferioridad, too y enough, para describir y comparar personas, lugares y objetos (RD 217/2022, Lengua Extranjera 3º; nivel A2+ del MCER).",
    ideas: ["«Top Trumps» de animales o ciudades comparando datos.", "Concurso de récords (the longest river, the tallest building…).", "Comparar dos móviles o dos destinos para elegir uno."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: comparative and superlative adjectives", url: "https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/comparative-and-superlative-adjectives" },
    { t: "Cambridge Dictionary: comparison of adjectives", url: "https://dictionary.cambridge.org/grammar/british-grammar/adjectives-forms" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Comparar adverbios y usar modificadores (much, a bit, far)", "Usar estructuras como the… the… y comparativos dobles"],
  bloques: [
    { tras: "Irregulares", html: `<h3>Modificar el comparativo</h3><p>Podemos indicar si la diferencia es grande o pequeña poniendo un modificador <b>delante del comparativo</b>. Para mucha diferencia: <mark>much, a lot, far</mark>: «A plane is <b>much faster than</b> a car», «This exam was <b>a lot easier</b>». Para poca diferencia: <mark>a bit, a little, slightly</mark>: «I'm <b>a bit taller than</b> my brother». Ojo: <b>very</b> no puede ir con comparativos («*very bigger» es incorrecto; se dice <i>much bigger</i>). Con los superlativos se usa <b>by far</b>: «It's <b>by far the best</b> restaurant in town».</p>` },
    { tras: "Irregulares", html: `<h3>Comparar adverbios</h3><p>También se comparan los <b>adverbios</b>, que dicen cómo se hace algo. Los cortos, como <i>fast, hard, early, late</i>, siguen la regla de -er / -est: «She runs <b>faster</b> than me», «He arrived <b>earlier</b>». Los acabados en <b>-ly</b> usan more / most: «Please speak <b>more slowly</b>», «Of all the students, Ana works <b>the most carefully</b>». Los irregulares son <mark>well → better → best</mark> y <mark>badly → worse → worst</mark>: «He plays the guitar <b>better</b> than I do».</p>`, video: L.vid("KNJ5Lovejw0", "Comparativo de igualdad en inglés: as… as", "Alejo Lopera Inglés", 455991) },
    { tras: "As… as y not as… as", html: `<h3>Estructuras especiales</h3><p>Hay tres estructuras muy expresivas. 1) <b>Comparativo + and + comparativo</b>, para algo que cambia poco a poco: «It's getting <mark>colder and colder</mark>», «Exams are getting <b>more and more difficult</b>». 2) <b>The + comparativo…, the + comparativo…</b>, para dos cosas que cambian a la vez: «<mark>The more</mark> you practise, <mark>the better</mark> you play», «The sooner, the better». 3) <b>One of the + superlativo + plural</b>: «Madrid is <b>one of the biggest cities</b> in Europe». Y recuerda que tras el superlativo usamos <b>in</b> con lugares y grupos («the best player <b>in</b> the team») y <b>of</b> con periodos o cifras («the happiest day <b>of</b> my life»).</p>` },
    { tras: "Too y enough", html: `<h3>Comparar en un texto</h3><p>Lee esta comparación entre dos ciudades: «London is <b>much bigger than</b> Edinburgh and it's <b>one of the most visited</b> cities <b>in</b> the world. However, Edinburgh is<b>n't as expensive as</b> London, and many people think it's <b>more beautiful</b>. The weather in Edinburgh is <b>colder</b> and <b>windier</b>, but the city is <b>small enough</b> to walk everywhere. For me, London is <b>too busy</b>: I prefer Edinburgh». Cuando escribas una comparación, mezcla varias estructuras, usa conectores como <mark>however, but, while</mark> y termina con tu opinión.</p>` },
    { tras: "As… as y not as… as", html: `<h3>Igual, parecido o diferente</h3><p>Para comparar sin adjetivos usamos otras expresiones: <mark>the same as</mark> (igual que): «My phone is <b>the same as</b> yours»; <b>similar to</b> (parecido a): «Portuguese is <b>similar to</b> Spanish»; <mark>different from</mark> (diferente de): «British English is a bit <b>different from</b> American English». Con sustantivos también se compara la cantidad: <b>more</b> + contables o incontables («I have <b>more books than</b> you»), <b>less</b> + incontables («<b>less sugar</b>») y <b>fewer</b> + contables en plural («<b>fewer cars</b>»). Y con <b>like</b> comparamos el parecido: «She looks <b>like</b> her mum» (se parece a su madre).</p>` },
  ],
  ejemplos: [
    ["Escribe el comparativo y el superlativo de: thin, funny, comfortable, bad.", ["thin: una sílaba, CVC → thinner, the thinnest.", "funny: dos sílabas acabadas en -y → funnier, the funniest.", "comfortable: adjetivo largo → more comfortable, the most comfortable.", "bad: irregular → worse, the worst."], "thinner / the thinnest; funnier / the funniest; more comfortable / the most comfortable; worse / the worst."],
    ["Reescribe sin cambiar el significado: «The train is faster than the bus.» (not as… as)", ["Quien es menos rápido pasa a ser el sujeto: the bus.", "Not as + adjetivo en forma base + as."], "The bus isn't as fast as the train."],
    ["Une con too o enough: «He is 15. You need to be 18 to vote.»", ["La razón es que no tiene la edad suficiente.", "Con enough: not old enough to vote.", "Con too: too young to vote."], "He isn't old enough to vote. / He's too young to vote."],
  ],
  errores: [
    "Usar more con un adjetivo corto: *more big → bigger.",
    "Usar doble comparativo: *more easier → easier.",
    "Usar that en lugar de than: *taller that me → taller than me.",
    "Poner enough delante del adjetivo: *enough old → old enough.",
    "Olvidar the en el superlativo: *She is best student → She is the best student.",
  ],
  ejercicios: [
    ["Escribe el comparativo de: young, heavy, modern, fat, good.", "younger, heavier, more modern, fatter, better."],
    ["Escribe el superlativo de: wet, important, bad, early, far.", "the wettest, the most important, the worst, the earliest, the furthest."],
    ["Completa: «Russia is ___ (big) country in the world.»", "the biggest."],
    ["Completa: «My new school is ___ (good) than my old one.»", "better."],
    ["Reescribe con as… as: «Tom and Ben are both 1,70 m tall.»", "Tom is as tall as Ben."],
    ["Reescribe con not as… as: «Silver is cheaper than gold.»", "Gold isn't as cheap as silver."],
    ["Completa con too o enough: «I can't reach the shelf. I'm not tall ___.»", "enough."],
    ["Corrige: «This exercise is very easier than the last one.»", "This exercise is much easier than the last one."],
    ["Completa: «The ___ (hard) you study, the ___ (good) your marks will be.»", "The harder you study, the better your marks will be."],
    ["Escribe tres frases comparando dos deportes con estructuras distintas.", "Por ejemplo: «Football is more popular than tennis.» / «Tennis isn't as tiring as football.» / «Basketball is the most exciting sport for me.»"],
  ],
  quiz: [
    ["«She speaks English ___ than me.»", ["better", "gooder", "more well"], 0, "well → better."],
    ["«It's getting ___.»", ["hotter and hotter", "more hot and hot", "hottest"], 0, "Comparativo + and + comparativo."],
    ["«This is ___ coffee.» (mucho mejor)", ["much better", "very better", "more better"], 0, "Much + comparativo."],
    ["«He's one of the best players ___ the team.»", ["in", "of", "than"], 0, "Superlativo + in + grupo."],
    ["«Please drive ___.»", ["more carefully", "carefullier", "most careful"], 0, "Adverbio en -ly: more."],
  ],
  tarjetas: [
    ["Much / a bit + comparativo", "Mucha o poca diferencia: much bigger, a bit taller."],
    ["The… the…", "The more you read, the more you learn."],
    ["Well / badly", "better, best / worse, worst."],
  ],
});
