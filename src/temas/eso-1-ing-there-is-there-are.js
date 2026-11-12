// Inglés 1º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { tema, L, F, tabla } = require("./_eso1d");
const V = require("./_eso1d-videos");

// Una mesa con objetos para practicar las preposiciones de lugar.
const mesa = `<svg viewBox="0 0 260 180" role="img" aria-label="Preposiciones de lugar: una pelota debajo de la mesa, un libro encima, un gato detrás y una mochila al lado">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <rect x="150" y="62" width="42" height="34" rx="8" fill="var(--muted)"/><circle cx="160" cy="58" r="5" fill="var(--muted)"/><circle cx="182" cy="58" r="5" fill="var(--muted)"/>
  <rect x="60" y="90" width="140" height="10" rx="3" fill="var(--sun)"/><rect x="68" y="100" width="8" height="54" fill="var(--sun)"/><rect x="184" y="100" width="8" height="54" fill="var(--sun)"/>
  <rect x="90" y="74" width="40" height="16" rx="2" fill="var(--red)"/>
  <circle cx="128" cy="140" r="14" fill="var(--pen)"/>
  <rect x="214" y="110" width="28" height="44" rx="8" fill="var(--leaf)"/>
  <path d="M14 154 H 246" stroke="var(--line)" stroke-width="3"/>
  <g ${F} font-size="11" font-weight="700" fill="var(--ink)" text-anchor="middle">
    <text x="110" y="68">on</text><text x="128" y="172">under</text><text x="171" y="44">behind</text><text x="228" y="104">next to</text>
  </g>
</svg>`;

module.exports = tema({
  materia: "Inglés",
  titulo: "There is and there are",
  objetivos: ["Usar there is y there are para decir que algo existe o está en un lugar", "Formar negativas y preguntas con there is / there are", "Combinar there is / are con a, an, some, any y los números", "Usar preposiciones de lugar y vocabulario de la casa y la ciudad"],
  claves: ["there is / there's", "there are", "there isn't / there aren't", "Is there…? / Are there…?", "a / an", "some / any", "How many…?", "in, on, under, next to, behind, between, in front of, opposite"],
  pregunta: [
    "En español decimos «hay» tanto para una cosa como para muchas: «hay un perro» y «hay tres perros». ¿Pasa lo mismo en inglés?",
    "No. El inglés distingue el singular y el plural: <mark>there is</mark> para una cosa («There's a dog in the garden») y <mark>there are</mark> para varias («There are three dogs in the garden»). Hay que fijarse siempre en lo que viene detrás para elegir bien.",
  ],
  bloques: [
    ["There is y there are", `<p>Usamos <mark>there is</mark> y <mark>there are</mark> para decir que algo <b>existe</b> o se encuentra en un lugar; equivalen al «hay» español. <b>There is</b> va con nombres en singular y se contrae como <b>there's</b>: «There's a park near my house». <b>There are</b> va con nombres en plural y no se suele contraer al escribir: «There are two bathrooms in our flat».</p><p>Normalmente la frase sigue el orden: <b>there is / are</b> + lo que hay + dónde está. «There's a computer in the classroom», «There are twenty-five students in my class». Ojo: «there» aquí no significa «allí», es solo parte de la expresión.</p>`,
      L.tabla("There is y there are", ["Singular", "Plural"], [["There is", "There are"], ["There's a park.", "There are 2 parks."]], "var(--pen)")],
    ["A, an y los números", `<p>Con <b>there is</b> el nombre suele llevar el artículo <mark>a</mark> o <mark>an</mark> (un, una). Se usa <b>a</b> delante de palabras que empiezan por <b>sonido consonante</b>: a book, a chair, a university (suena «yu»). Se usa <b>an</b> delante de <b>sonido vocal</b>: an apple, an orange, an hour (la h no suena).</p><p>Con <b>there are</b> usamos números u otras palabras de cantidad: «There are <b>three</b> windows», «There are <b>a lot of</b> trees in this street», «There are <b>some</b> books on the shelf». Para preguntar cuántos hay: <b>How many</b> + plural + <b>are there</b>? «How many students are there in your class? — There are twenty-four».</p>`,
      L.filas("A o an", [["a", "a book, a chair, a uniform", "var(--pen)"], ["an", "an apple, an egg, an hour", "var(--red)"], ["número", "There are three windows.", "var(--leaf)"]])],
    ["Negativas con some y any", `<p>La <mark>negativa</mark> se forma con <b>there isn't</b> (there is not) y <b>there aren't</b> (there are not). En singular usamos <b>a / an</b>: «There isn't a cinema in my village». En plural usamos <mark>any</mark> (ningún, ninguna): «There aren't any shops in my street».</p><p>En afirmativa en plural se usa <mark>some</mark> (algunos, unos): «There are some posters on the wall». Regla básica: <b>some</b> en afirmativas y <b>any</b> en negativas y preguntas. Otra forma de negar es con <b>no</b>: «There are no shops» = «There aren't any shops».</p>`,
      L.tabla("Some y any con there are", ["Frase", "Palabra"], [["afirmativa", "some"], ["negativa", "any"], ["pregunta", "any"]], "var(--leaf)")],
    ["Preguntas y respuestas cortas", `<p>Para preguntar se invierte el orden: <mark>Is there</mark> + a / an…? y <mark>Are there</mark> + any…? «<b>Is there</b> a supermarket near here?», «<b>Are there</b> any good restaurants in your town?».</p><p>Las respuestas cortas repiten <i>there</i> y el verbo: «Yes, there <b>is</b>» / «No, there <b>isn't</b>»; «Yes, there <b>are</b>» / «No, there <b>aren't</b>». En la afirmativa corta no se contrae: no se dice «Yes, there's». Si quieres dar más detalles, puedes añadir una frase: «Yes, there is. It's next to the bank».</p>`,
      L.dialogo("Preguntas con there is / are", [["Turista", "Is there a bank near here?", "var(--pen)"], ["Chica", "Yes, there is. It's on Main St.", "var(--leaf)"], ["Turista", "Are there any cafés?", "var(--pen)"], ["Chica", "No, there aren't.", "var(--red)"]])],
    ["Las preposiciones de lugar", `<p>Para decir <b>dónde</b> está algo usamos <mark>preposiciones de lugar</mark>. Las básicas son: <b>in</b> (dentro de: «in the box»), <b>on</b> (encima de, sobre: «on the table»), <b>under</b> (debajo de), <b>next to</b> (al lado de), <b>behind</b> (detrás de) e <b>in front of</b> (delante de).</p><p>También son muy útiles <b>between</b> (entre dos cosas: «between the bank and the school») y <b>opposite</b> (enfrente de, al otro lado de la calle). Ejemplos: «There's a ball <b>under</b> the table», «There's a cat <b>behind</b> the book», «The bakery is <b>opposite</b> the park».</p>`,
      mesa, V.in3b],
    ["Vocabulario: la casa", `<p>Para describir tu casa necesitas el nombre de las <mark>habitaciones</mark>: <b>living room</b> (salón), <b>kitchen</b> (cocina), <b>bedroom</b> (dormitorio), <b>bathroom</b> (cuarto de baño), <b>dining room</b> (comedor), <b>hall</b> (recibidor), <b>garden</b> (jardín) y <b>balcony</b> (balcón).</p><p>Y de los <b>muebles</b> y objetos: <b>bed</b> (cama), <b>wardrobe</b> (armario), <b>desk</b> (escritorio), <b>shelf</b> (estantería; en plural, shelves), <b>sofa</b>, <b>armchair</b> (sillón), <b>fridge</b> (nevera), <b>cooker</b> (cocina, el aparato), <b>sink</b> (fregadero), <b>shower</b> (ducha) y <b>mirror</b> (espejo). Ejemplo: «In my bedroom there's a bed, a desk and a big wardrobe. There are some posters on the wall».</p>`,
      tabla(["Room", "Habitación", "Furniture"], [["living room", "salón", "sofa, armchair, TV"], ["kitchen", "cocina", "fridge, cooker, sink"], ["bedroom", "dormitorio", "bed, wardrobe, desk"], ["bathroom", "baño", "shower, mirror, toilet"]])],
    ["Vocabulario: la ciudad", `<p>Para hablar de tu barrio o tu pueblo usa <mark>lugares de la ciudad</mark>: <b>park</b> (parque), <b>library</b> (biblioteca), <b>sports centre</b> (polideportivo), <b>swimming pool</b> (piscina), <b>shopping centre</b> (centro comercial), <b>supermarket</b>, <b>bakery</b> (panadería), <b>chemist's</b> (farmacia), <b>hospital</b>, <b>train station</b> (estación de tren), <b>bus stop</b> (parada de autobús) y <b>square</b> (plaza).</p><p>Cuidado con un falso amigo: <b>library</b> es «biblioteca», no «librería», que se dice <b>bookshop</b>. Con todo esto ya puedes describir tu barrio: «In my neighbourhood there's a small park and there are two bakeries. There isn't a cinema».</p>`,
      L.filas("Lugares de la ciudad", [["library", "biblioteca (¡no librería!)", "var(--red)"], ["bookshop", "librería", "var(--pen)"], ["chemist's", "farmacia", "var(--leaf)"], ["bus stop", "parada de autobús", "var(--sun)"]])],
    ["Describir un lugar", `<p>Lee esta descripción de una habitación: «This is my bedroom. It's small but it's very nice. <b>There's</b> a bed next to the window and <b>there's</b> a desk opposite the bed. On the desk <b>there's</b> a lamp and <b>there are</b> some pens. <b>There aren't any</b> posters, but <b>there are</b> some photos of my friends on the wall. Under the bed <b>there's</b> a box with my old toys!»</p><p>Para describir un lugar sigue estos pasos: di qué lugar es y cómo es en general (con be), enumera lo que hay (there is / there are), sitúa cada cosa con una preposición y termina con un detalle personal.</p>`,
      L.filas("Pasos para describir un lugar", [["1", "This is my bedroom.", "var(--pen)"], ["2", "It's small but nice.", "var(--leaf)"], ["3", "There's a bed…", "var(--sun)"], ["4", "…next to the window.", "var(--red)"]])],
  ],
  ejemplos: [
    ["Completa: «___ a cat in the garden» y «___ two cats in the garden».", ["«a cat» es singular → there is.", "«two cats» es plural → there are."], "There's a cat… / There are two cats…"],
    ["Pon en negativa: «There are some shops in my street».", ["Negativa en plural: there aren't.", "some cambia a any."], "There aren't any shops in my street."],
    ["Haz la pregunta y la respuesta: ¿Cuántas sillas hay en la cocina? (4)", ["How many + plural + are there…?", "Respuesta con there are."], "How many chairs are there in the kitchen? — There are four."],
  ],
  errores: [
    "Usar there is con plurales: «There is three books» → «There are three books».",
    "Usar some en negativas: «There aren't some» → «There aren't any».",
    "Responder «Yes, there's»: la respuesta corta es «Yes, there is».",
    "Confundir library (biblioteca) con bookshop (librería).",
    "Decir «a apple» o «an book»: an va delante de sonido vocal (an apple), a delante de consonante (a book).",
  ],
  ejercicios: [
    ["Completa con there is o there are: ___ a sofa in the living room. ___ two bedrooms.", "There's; There are."],
    ["Elige a o an: ___ umbrella, ___ banana, ___ hour.", "an, a, an."],
    ["Pon en negativa: «There's a garden».", "There isn't a garden."],
    ["Completa con some o any: There are ___ chairs. There aren't ___ tables.", "some; any."],
    ["Haz la pregunta: «There are some eggs in the fridge».", "Are there any eggs in the fridge?"],
    ["Responde con una respuesta corta afirmativa: «Is there a pool?».", "Yes, there is."],
    ["Traduce: «La pelota está debajo de la cama».", "The ball is under the bed."],
    ["¿Qué significa «opposite»? Escribe un ejemplo.", "Enfrente de. Ejemplo: The bank is opposite the school."],
    ["Escribe cuatro habitaciones de una casa en inglés.", "Kitchen, bedroom, bathroom, living room (otras válidas: dining room, hall)."],
    ["Describe tu barrio en tres frases con there is / there are.", "Respuesta modelo: There's a big park. There are two supermarkets. There isn't a cinema."],
  ],
  figura: ["There is / there are", L.columnas("There is y there are", [["singular", "THERE'S", ["There's a park.", "Is there a…?"], "var(--pen)"], ["plural", "THERE ARE", ["There are 3 parks.", "Are there any…?"], "var(--leaf)"], ["negativa", "ISN'T / AREN'T", ["isn't a…", "aren't any…"], "var(--red)"], ["dónde", "IN · ON · UNDER", ["next to, behind", "between, opposite"], "var(--sun)"]])],
  video: V.in3v,
  quiz: [
    ["«___ a computer in my room.»", ["There's", "There are", "It's"], "Singular."],
    ["«___ thirty students in my class.»", ["There are", "There is", "They are"], "Plural."],
    ["«___ apple»", ["an", "a", "some"], "Sonido vocal."],
    ["«There aren't ___ trees in my street.»", ["any", "some", "a"], "Negativa en plural."],
    ["«___ there a bank near here?»", ["Is", "Are", "Do"], "Singular."],
    ["«Are there any cafés?» — «Yes, ___.»", ["there are", "there's", "they are"], "Sin contraer."],
    ["«How many rooms ___?»", ["are there", "is there", "there are"], "Pregunta en plural."],
    ["«Debajo de» se dice…", ["under", "on", "behind"], "Under the table."],
    ["«Al lado de» se dice…", ["next to", "opposite", "between"], "Next to the window."],
    ["«Library» significa…", ["biblioteca", "librería", "laboratorio"], "Falso amigo."],
  ],
  examen: [
    ["«There ___ some milk in the fridge.»", ["is", "are", "be"], "Milk es incontable: singular."],
    ["«The bank is ___ the school and the park.»", ["between", "under", "in"], "Entre dos cosas."],
    ["«Cocina» (la habitación) es…", ["kitchen", "cooker", "chicken"], "Cooker es el aparato."],
  ],
  feynman: ["Cuándo se usa there is y cuándo there are", "Cómo se usan a, an, some y any", "Cómo se pregunta y se responde", "Qué preposiciones sirven para situar las cosas"],
  mapa: ["THERE IS / ARE", "var(--pen)", [["Singular", "there's + a / an", "var(--pen)"], ["Plural", "there are + some / nº", "var(--leaf)"], ["Negar y preguntar", "isn't · aren't any · Is there?", "var(--red)"], ["Lugar", "in · on · under · next to", "var(--sun)"]], 250],
  tarjetas: [
    ["There is / there's", "Hay (singular)."],
    ["There are", "Hay (plural)."],
    ["There isn't / there aren't", "No hay."],
    ["Is there…? / Are there…?", "¿Hay…?"],
    ["some / any", "some en afirmativa; any en negativa y preguntas."],
    ["How many… are there?", "¿Cuántos… hay?"],
    ["in / on / under", "dentro / encima / debajo."],
    ["next to / behind / opposite", "al lado / detrás / enfrente."],
  ],
  familias: ["Esconded un objeto en casa y dad pistas en inglés: «It's under something. It's next to the sofa».", "Dibujad juntos el plano de la casa y etiquetad las habitaciones y muebles en inglés."],
  saberes: "Describir lugares, objetos y su localización: there is / there are, determinantes a, an, some, any y preposiciones de lugar; vocabulario de la casa y la ciudad (Lengua Extranjera, 1º ESO, RD 217/2022).",
  ideas: ["Juego de las diferencias entre dos dibujos de una habitación.", "Folleto turístico del barrio con there is / there are.", "Dictado de dibujo: un alumno describe, otro dibuja."],
  fuentes: [["British Council LearnEnglish Teens: there is, there are", "https://learnenglishteens.britishcouncil.org/grammar"], ["Cambridge Dictionary: there is, there are", "https://dictionary.cambridge.org/grammar/british-grammar/there-is-there-are"]],
});
