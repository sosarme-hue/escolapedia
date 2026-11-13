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

// Nivel libro (3º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso3L6").libro(module.exports, {
  lectura: ["¿Qué móvil me compro?", `<p>Daniel ha ahorrado durante un año y por fin va a comprarse un móvil. Ha encontrado dos modelos y está leyendo opiniones en una web en inglés: <i>«The X5 is cheaper and lighter than the Pro 12, but its camera isn't as good. The Pro 12 has the biggest screen and the longest battery life in this price range. However, it's much more expensive.»</i></p><p>En unas pocas líneas aparecen todas las formas de comparar que existen en inglés. <i>Cheaper</i> y <i>lighter</i> son <b>comparativos</b> de adjetivos cortos, con -er. <i>More expensive</i> es el comparativo de un adjetivo largo. <i>The biggest</i> y <i>the longest</i> son <b>superlativos</b>: el que más de todo un grupo. <i>Not as good as</i> compara diciendo que algo no llega al nivel del otro, y <i>much</i> sirve para reforzar la diferencia.</p><p>Comparar es una de las cosas que más hacemos al hablar: elegir un producto, opinar sobre series, describir a nuestra familia, hablar de récords o de ciudades. En este tema aprenderás a formar comparativos y superlativos sin errores, a matizar las diferencias (<i>a bit, much, far</i>), a decir que dos cosas son iguales o diferentes y a usar <i>too</i> y <i>enough</i>. Al final podrás escribir tu propia reseña comparando dos productos, como las que lee Daniel.</p>`],
  mas: [
    ["<h3>Comparar adverbios</h3>", `<p>Fíjate en que muchos errores vienen de confundir adjetivo y adverbio. El adjetivo describe un sustantivo («She's a <b>careful</b> driver»); el adverbio describe cómo se hace algo («She drives <b>carefully</b>»). Por eso comparamos «She's a <b>more careful</b> driver than me» pero «She drives <b>more carefully</b> than me». Los adverbios que tienen la misma forma que el adjetivo (<i>fast, hard, late, early, high</i>) forman el comparativo con -er: «He works <b>harder</b> than anyone», «Can you come <b>earlier</b>?». Y el superlativo de los adverbios casi nunca lleva the en la conversación: «Who runs <b>fastest</b>?».</p>`],
    ["<h3>Estructuras especiales</h3>", `<p>La estructura <b>the + comparativo…, the + comparativo</b> expresa que dos cosas cambian juntas: «<b>The older</b> you get, <b>the wiser</b> you become», «<b>The sooner</b>, <b>the better</b>» (cuanto antes, mejor). Es muy frecuente en refranes y en consejos.</p>`],
    ["<h3>Adjetivos cortos</h3>", `<p>Recuerda las reglas de ortografía, que son las mismas que para otras terminaciones: si el adjetivo acaba en <b>-e</b>, solo se añade -r / -st (<i>nice → nicer → the nicest</i>); si acaba en <b>consonante + y</b>, la y cambia a i (<i>happy → happier → the happiest, easy → easier</i>); y si acaba en <b>consonante + vocal + consonante</b>, se dobla la consonante final (<i>big → bigger, hot → hottest, thin → thinner</i>). Los adjetivos de dos sílabas acabados en -y (<i>happy, funny, busy, easy</i>) se comportan como cortos: «funnier», nunca «more funny».</p>`],
    ["<h3>Adjetivos largos</h3>", `<p>Son largos los adjetivos de <b>dos sílabas que no acaban en -y</b> (<i>modern, famous, boring, careful</i>) y todos los de <b>tres o más</b> (<i>expensive, interesting, dangerous</i>). Lo opuesto de <i>more</i> es <b>less</b> («less expensive» = menos caro) y lo opuesto de <i>the most</i> es <b>the least</b> («the least interesting» = el menos interesante). Algunos adjetivos de dos sílabas admiten las dos formas: <i>clever → cleverer / more clever, quiet → quieter / more quiet</i>; en los exámenes, la forma con -er es la más segura para estos.</p>`],
    ["<h3>Irregulares</h3>", `<p><b>Far</b> tiene dos formas: <i>farther / the farthest</i> y <i>further / the furthest</i>. Para la distancia valen las dos («Madrid is <b>further</b> than Toledo»), pero solo <i>further</i> significa «adicional»: «For <b>further</b> information, visit our website». Los irregulares nunca llevan <i>more</i>: «more better» es un error grave.</p>`],
    ["<h3>Modificar el comparativo</h3>", `<p>Para una diferencia <b>grande</b>: <i>much, far, a lot</i> («a lot cheaper», «far more interesting»). Para una diferencia <b>pequeña</b>: <i>a bit, a little, slightly</i> («slightly taller»). <b>Very</b> no se usa nunca con el comparativo: «very bigger» es incorrecto. Con el superlativo se usan otras palabras: <i>by far</i> («by far the best») y <i>one of the</i> + plural («one of the <b>best players</b>»).</p>`],
    ["<h3>As… as y not as… as</h3>", `<p>Detrás de <i>as… as</i> y de <i>than</i> se puede usar un pronombre objeto (más informal) o sujeto + verbo (más formal): «She's as tall as <b>me</b>» / «She's as tall as <b>I am</b>». Con <i>as… as</i> también podemos multiplicar: «This bag is <b>twice as heavy as</b> mine» (el doble de pesada), «Our house is <b>three times as big as</b> theirs».</p>`],
    ["<h3>Too y enough</h3>", `<p>No confundas <b>too</b> con <b>very</b>: <i>very</i> solo intensifica («The coffee is very hot, but I can drink it»), mientras que <i>too</i> indica un exceso que impide algo («The coffee is <b>too hot</b> to drink»). Con sustantivos, <i>enough</i> va <b>delante</b>: «We haven't got <b>enough chairs</b>»; con adjetivos, <b>detrás</b>: «The room isn't <b>big enough</b>». Y <i>too much / too many</i> indican exceso de cantidad: «too much sugar», «too many people».</p>`],
    ["<h3>Comparar en un texto</h3>", `<p>Al escribir una comparación, organiza el texto por <b>aspectos</b> (precio, tamaño, diseño…) y no por objetos, para que el lector vea las diferencias punto por punto. Usa conectores de contraste como <i>however, whereas, while, on the other hand</i>: «The X5 is light, <b>whereas</b> the Pro 12 is quite heavy». Termina con una recomendación: «All in all, I think the X5 is the best option for teenagers».</p>`],
  ],
  svgs: [
    ["<h3>Modificar el comparativo</h3>", "Palabras que modifican el comparativo", [["mucho", "much · far · a lot bigger"], ["un poco", "a bit · slightly bigger"], ["nunca", "very bigger ✗"]], "matizar la diferencia"],
    ["<h3>Comparar adverbios</h3>", "Comparativo de los adverbios", [["-ly → more", "more carefully · more slowly"], ["cortos → -er", "faster · harder · earlier"], ["irregulares", "well → better · badly → worse"]]],
    ["<h3>Estructuras especiales</h3>", "Estructuras especiales con comparativos", [["cada vez más", "bigger and bigger"], ["cuanto más…", "the more…, the better"], ["el más… que…", "the best I've ever seen"]]],
    ["<h3>Igual, parecido o diferente</h3>", "Expresar igualdad, parecido y diferencia", [["igual", "the same as"], ["parecido", "similar to · like"], ["diferente", "different from"]]],
    ["<h3>Comparar en un texto</h3>", "Cómo organizar una comparación escrita", [["Por aspectos", "precio · tamaño · diseño"], ["Contraste", "however · whereas"], ["Conclusión", "All in all, the X5 is best."]]],
  ],
  bloques: [
    { tras: "<h3>Irregulares</h3>", html: `<h3>El superlativo: the, in, of y ever</h3><p>El superlativo indica que algo está en el <b>extremo de un grupo</b>: es el que más (o el que menos) de todos. Siempre lleva <b>the</b> delante, o un posesivo: «<b>the</b> tallest boy», «<b>my</b> best friend». Sin <i>the</i> la frase queda incompleta: «Madrid is <b>the</b> biggest city in Spain», no «Madrid is biggest city».</p><p>Para decir el grupo o lugar se usa <b>in</b> con lugares y grupos (<i>in the world, in my class, in the team, in Spain</i>) y <b>of</b> con periodos de tiempo y con un número o un grupo de cosas (<i>of the year, of my life, of the three, of all</i>): «It was the happiest day <b>of</b> my life», «She's the best player <b>in</b> the team». Un error típico de hispanohablantes es usar «of» para todo: «the tallest building <b>of</b> the world» debe ser «<b>in</b> the world».</p><p>Con el present perfect y <b>ever</b> expresamos lo más extremo de nuestra experiencia: «It's the <b>funniest</b> film I've <b>ever</b> seen». Y con <b>one of the</b> + superlativo + <mark>sustantivo en plural</mark> decimos que algo está entre los mejores: «Messi is one of the best <b>players</b> in history».</p>`, svg: ["Cómo se completa un superlativo", [["the + -est", "the tallest girl"], ["in + lugar", "in the world"], ["of + periodo", "of the year"], ["one of the", "one of the best players"]], "superlativos"] },
    { tras: "<h3>Modificar el comparativo</h3>", html: `<h3>Comparar cantidades: more, less y fewer</h3><p>No solo comparamos cualidades (más alto, más caro), también <b>cantidades</b>. Para decir que hay <b>más</b> de algo usamos <b>more</b> con todo tipo de sustantivos: «I've got <b>more books</b> than you», «There's <b>more traffic</b> today».</p><p>Para decir que hay <b>menos</b>, el inglés distingue según el sustantivo:</p><ul><li><b>fewer</b> con sustantivos <mark>contables</mark> en plural: «There are <b>fewer students</b> this year», «I made <b>fewer mistakes</b> than last time».</li><li><b>less</b> con sustantivos <mark>incontables</mark>: «I have <b>less time</b> on Mondays», «We should use <b>less plastic</b>».</li></ul><p>En la conversación informal muchos nativos dicen «less people», pero en un examen o en un texto escrito es mejor respetar la regla. Los superlativos correspondientes son <b>the most</b> («Who has <b>the most</b> points?»), <b>the fewest</b> y <b>the least</b> («the least money»). También podemos comparar cantidades con <i>as… as</i>: «I don't have <b>as much</b> free time <b>as</b> my sister» (incontable), «He has <b>as many</b> followers <b>as</b> a celebrity» (contable).</p>`, svg: ["Comparar cantidades", [["more", "more books · more time"], ["fewer + contables", "fewer mistakes"], ["less + incontables", "less time · less plastic"], ["as much / as many", "as many friends as you"]], "más y menos cantidad"] },
    { html: `<h3>Comparar en inglés y en español</h3><p>Muchas estructuras se parecen, pero hay diferencias que provocan errores frecuentes:</p><ul><li>En español decimos «<b>más</b> grande» para todo; en inglés depende de la longitud del adjetivo: <i>bigger</i>, pero <i>more modern</i>. Nunca se combinan: «more bigger» es incorrecto.</li><li>«Que» en la comparación es <b>than</b>, no <i>that</i> ni <i>as</i>: «She's taller <b>than</b> me». Y «tan… como» es <b>as… as</b>: «tan alto como yo» → «as tall as me».</li><li>«El más… <b>de</b> la clase» se traduce con <b>in</b>, no con <i>of</i>: «the tallest <b>in</b> the class».</li><li>«Mucho mejor» es <b>much better</b>, nunca «very better».</li><li>«Igual que» es <b>the same as</b> y «diferente de» es <b>different from</b>: «My phone is the same <b>as</b> yours».</li><li>Los superlativos absolutos en -ísimo no existen en inglés: «carísimo» se traduce con un intensificador: «<b>really</b> expensive», «<b>extremely</b> expensive».</li></ul><p>Otra diferencia: en inglés es muy frecuente repetir el comparativo para expresar un cambio progresivo («It's getting <b>colder and colder</b>», cada vez hace más frío), mientras que en español usamos «cada vez más». Leer estas parejas en voz alta te ayudará a fijar las estructuras correctas.</p>`, svg: ["Del español al inglés al comparar", [["más grande que", "bigger than"], ["tan alto como", "as tall as"], ["el mejor de la clase", "the best in the class"], ["carísimo", "really expensive"]], "errores frecuentes"] },
  ],
  videos: [["<h3>Adjetivos largos</h3>", "compA"], ["<h3>As… as y not as… as</h3>", "compB"]],
  grupos: [4, 3, 3, 3],
  ejemplos: [
    ["Escribe el comparativo y el superlativo de: thin, funny, famous, bad.", ["Thin: CVC → se dobla la n: thinner, the thinnest.", "Funny: acaba en -y → funnier, the funniest.", "Famous: dos sílabas sin -y → more famous, the most famous.", "Bad es irregular: worse, the worst."], "thinner / the thinnest · funnier / the funniest · more famous / the most famous · worse / the worst"],
    ["Completa con in u of: «It was the best day ___ the holidays.» / «She's the fastest runner ___ the school.»", ["The holidays es un periodo de tiempo → of.", "The school es un lugar o grupo → in."], "the best day <b>of</b> the holidays · the fastest runner <b>in</b> the school"],
    ["Completa con less o fewer: «I eat ___ sweets and ___ sugar than before.»", ["Sweets es contable en plural → fewer.", "Sugar es incontable → less."], "I eat <b>fewer</b> sweets and <b>less</b> sugar than before."],
  ],
  errores: ["Usar of con lugares en el superlativo: *the tallest building of the world → in the world."],
  niveles: "bbbbmbbmma",
  ejercicios: [
    ["b", "Escribe el comparativo de: thin, busy, nice, careful, bad.", "thinner, busier, nicer, more careful, worse."],
    ["b", "Escribe el superlativo de: hot, happy, dangerous, good, far.", "the hottest, the happiest, the most dangerous, the best, the farthest / the furthest."],
    ["b", "Completa con than o as: «Cats are smaller ___ dogs.» / «My room is as big ___ yours.»", "than · as."],
    ["b", "Completa con in u of: «the coldest month ___ the year» / «the best student ___ my class»", "of the year · in my class."],
    ["b", "Escribe el contrario: more expensive / the most popular.", "less expensive (o cheaper) / the least popular."],
    ["m", "Completa con much o a bit según la información: «A Ferrari is ___ faster than a bike.» / «Ana is ___ taller than Eva (1 cm).»", "<b>much</b> faster · <b>a bit</b> taller."],
    ["m", "Completa con less o fewer: «There's ___ noise and ___ cars in my village.»", "<b>less</b> noise (incontable) and <b>fewer</b> cars (contable)."],
    ["m", "Reescribe con not as… as: «My brother is older than me.»", "I'm <b>not as old as</b> my brother."],
    ["m", "Corrige: «She's the most tall girl of the class.»", "She's <b>the tallest</b> girl <b>in</b> the class."],
    ["m", "Completa: «This is one of the ___ (interesting) ___ (book) I've ever read.»", "one of the <b>most interesting books</b>: superlativo + plural."],
    ["m", "Completa con too o enough: «He's ___ young to drive.» / «She isn't old ___ to drive.»", "too young · old enough."],
    ["m", "Escribe el comparativo de los adverbios: quickly, hard, well, badly, early.", "more quickly, harder, better, worse, earlier."],
    ["m", "Completa con the same as, similar to o different from: «Your jacket is exactly ___ mine!»", "<b>the same as</b> (exactamente igual)."],
    ["m", "Escribe una frase con twice as… as comparando el precio de dos cosas.", "Ejemplo: «This jacket is <b>twice as expensive as</b> that one.»"],
    ["m", "Completa con la estructura de cambio progresivo: «Prices are getting ___ (high).»", "<b>higher and higher</b>."],
    ["a", "Corrige los cuatro errores: «My city is more big than my village. It is the most interesting place of the region, but it's very more noisy and there are less parks.»", "<b>bigger</b> than · the most interesting place <b>in</b> the region · <b>much</b> noisier · <b>fewer</b> parks (contable)."],
    ["a", "Explica la diferencia: «The soup is very hot.» / «The soup is too hot.»", "Very solo intensifica (está muy caliente, pero se puede tomar). Too indica exceso que impide algo (está demasiado caliente para tomarla)."],
    ["a", "Traduce: «Cuanto más practicas, más fácil es. Mi hermano lee el doble que yo.»", "The more you practise, the easier it is. My brother reads twice as much as me / as I do."],
    ["a", "Escribe una reseña de 60 palabras comparando dos series o películas, con al menos un comparativo, un superlativo y una estructura con as… as.", "Modelo: «Both series are great, but I prefer Galaxy Kids. It's funnier and more exciting than Dark Town, although Dark Town has better special effects. The actors in Galaxy Kids aren't as famous as the others, but they are the most natural I've ever seen. All in all, it's the best series of the year.»"],
    ["a", "Reescribe sin cambiar el sentido: «No other student in the class is as tall as Hugo.» → «Hugo is…»", "Hugo is <b>the tallest</b> student <b>in</b> the class."],
    ["a", "Reescribe: «The train is faster than the bus.» → «The bus isn't…»", "The bus <b>isn't as fast as</b> the train."],
    ["a", "Escribe cuatro frases comparando tu vida actual con la de hace cinco años (more / less / fewer / better).", "Ejemplo: «I have more homework now. I have less free time. I have fewer toys and more books. My English is much better.»"],
    ["a", "Compara tres ciudades que conozcas usando superlativos con in u of y one of the…", "Ejemplo: «Madrid is the biggest of the three. Valencia has the best beaches. Seville is one of the hottest cities in Europe.»"],
    ["a", "Explica por qué «less people» se considera incorrecto en un examen y corrígelo.", "People es contable (plural de person); con contables se usa fewer: <b>fewer people</b>."],
  ],
  cuartas: ["more bigger", "most boring", "the most good", "so fast than", "too much", "best", "hot and hotter", "most better", "at", "carefuller", "hottest", "enough well", "the most big"],
  quiz: [
    ["El comparativo de «funny» es…", ["more funny", "funnier", "funnyer", "funniest"], 1, "Dos sílabas en -y: -ier."],
    ["El comparativo de «famous» es…", ["famouser", "more famous", "most famous", "famousest"], 1, "Dos sílabas sin -y: more."],
    ["«It's the coldest day ___ the year.»", ["in", "of", "than", "from"], 1, "Periodo de tiempo: of."],
    ["«He's the best player ___ the world.»", ["of", "in", "at", "than"], 1, "Lugar o grupo: in."],
    ["«There are ___ students in my class this year.»", ["less", "fewer", "least", "little"], 1, "Contable en plural: fewer."],
    ["«This book is ___ interesting than the film.»", ["less", "fewer", "least", "little"], 0, "Less + adjetivo = menos."],
    ["«She's one of the ___ in the school.»", ["best student", "best students", "better students", "good students"], 1, "One of the + superlativo + plural."],
    ["«Your bag is the same ___ mine.»", ["than", "as", "like", "that"], 1, "The same as."],
    ["«The bus is ___ than the train.» (un poco)", ["very slower", "a bit slower", "much slow", "more slow"], 1, "Diferencia pequeña: a bit + comparativo."],
    ["«He runs ___ than his brother.»", ["fast", "faster", "more fast", "fastly"], 1, "Fast es adverbio corto: faster."],
  ],
  examen: [
    ["«We haven't got ___ chairs for everyone.»", ["chairs enough", "enough", "too", "very"], 1, "Enough va delante del sustantivo."],
    ["«This test was ___ the last one.» (igual de fácil)", ["as easy as", "easier as", "as easier than", "so easy than"], 0, "As + adjetivo + as."],
    ["«It's the ___ film I've ever seen.»", ["worse", "worst", "baddest", "most bad"], 1, "Superlativo de bad: the worst."],
    ["«Mucho mejor» en inglés es…", ["very better", "much better", "more better", "most better"], 1, "Much + comparativo."],
    ["«The ___ you sleep, the more tired you feel.»", ["little", "less", "fewer", "least"], 1, "The less…, the more…"],
  ],
  tarjetas: [
    ["Superlativo: in / of", "in + lugar o grupo (in the world); of + periodo (of the year)."],
    ["Less / fewer", "fewer + contables (fewer cars); less + incontables (less time)."],
    ["Too / very", "Very intensifica; too indica exceso: too hot to drink."],
    ["One of the…", "One of the + superlativo + plural: one of the best films."],
  ],
  glosario: [
    ["comparative", "Comparativo: forma que compara dos cosas (bigger, more modern)."],
    ["superlative", "Superlativo: el extremo de un grupo (the biggest, the most modern)."],
    ["short adjective", "Adjetivo corto (una sílaba o dos en -y) que forma -er / -est."],
    ["long adjective", "Adjetivo de dos sílabas sin -y o de tres o más, que usa more / the most."],
    ["irregular adjective", "Adjetivo con formas propias: good → better → the best."],
    ["than", "Que (en las comparaciones): taller than me."],
    ["as… as", "Tan… como: as tall as me."],
    ["less / the least", "Menos / el menos: less expensive, the least popular."],
    ["fewer", "Menos con sustantivos contables: fewer mistakes."],
    ["too", "Demasiado (exceso): too hot to drink."],
    ["enough", "Suficiente: old enough, enough money."],
    ["the same as", "Igual que."],
    ["different from", "Diferente de."],
    ["intensifier", "Palabra que refuerza: much, far, a lot, a bit, slightly."],
  ],
  situacion: {
    titulo: "Guía de compras para adolescentes",
    reto: "La revista digital del instituto prepara un número especial en inglés con reseñas comparativas para ayudar a los alumnos a elegir: dos móviles, dos bicis, dos videojuegos o dos destinos de viaje.",
    pasos: ["En parejas, elegid dos productos o lugares y buscad datos (precio, tamaño, valoraciones).", "Preparad una tabla de comparación por aspectos y escribid frases con comparativos, superlativos, as… as y less / fewer.", "Redactad una reseña de 150 palabras organizada por aspectos y con una recomendación final.", "Revisad el texto con la lista: -er / more, than, in / of, much en lugar de very.", "Publicad la reseña con una foto o gráfico y votad la más útil de la clase."],
    producto: "Una reseña comparativa de 150 palabras con tabla o gráfico para la revista del instituto.",
    evaluacion: ["Forma correctamente comparativos y superlativos regulares e irregulares.", "Usa estructuras variadas: as… as, less / fewer, the same as, too / enough.", "Organiza la reseña por aspectos con conectores de contraste.", "Ofrece una recomendación clara y justificada."],
  },
  familias: ["Comparad en inglés tres productos del supermercado (precio, tamaño, sabor) usando comparativos y superlativos."],
  saberes: "descripció i comparació de persones, objectes i llocs; graus de l'adjectiu i quantificadors en textos breus.",
  minutos: 95,
});
