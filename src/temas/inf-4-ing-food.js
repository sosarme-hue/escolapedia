// Primeros pasos en inglés, Infantil 4 años: Food. Inglés sencillo con ayuda en español.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, vocab, charla, mural, ic, vid, R, A, V, N, M, G, PROF, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Primeros pasos en inglés",
  curso: "4-anos",
  titulo: "Food",
  minutos: 15,
  objetivos: ["Nombrar alimentos en inglés: apple, banana, milk, bread", "Decir si algo nos gusta: I like…", "Usar Yummy! y I'm hungry"],
  claves: ["food", "apple", "banana", "milk", "bread", "water", "I like", "yummy"],
  pregunta: {
    texto: "¿Qué has desayunado hoy? ¿Leche? ¿Pan? ¿Sabes decirlo en inglés?",
    respuesta: "La leche es <mark>milk</mark> («milk») y el pan es <mark>bread</mark> («bred»). La comida, en inglés, es <b>food</b> («fud»).",
  },
  bloques: [
    {
      html: `<h3>Fruit</h3><p>La fruta en inglés es <mark>fruit</mark> («frut»).</p><p>La manzana es <b>apple</b> («ápol»). El plátano es <b>banana</b> («banána»). Las uvas son <b>grapes</b> («gréips»).</p><p>¿Cuál te gusta más?</p>`,
      svg: vocab("Fruta en inglés: apple manzana, banana plátano y grapes uvas", [["manzana", "apple", "manzana", R], ["platano", "banana", "plátano", M], ["uva", "grapes", "uvas", N]], { titulo: "Fruit" }),
    },
    {
      html: `<h3>Breakfast</h3><p>El desayuno es <mark>breakfast</mark> («brékfast»).</p><p>Por la mañana tomamos <b>milk</b> (leche), <b>bread</b> (pan) y a veces un <b>egg</b> («eg»), un huevo.</p><p>¡Desayunar nos da energía!</p>`,
      svg: vocab("El desayuno: milk leche, bread pan y egg huevo", [["leche", "milk", "leche", A], ["pan", "bread", "pan", M], ["huevo", "egg", "huevo", V]], { titulo: "Breakfast" }),
    },
    {
      html: `<h3>Water, please!</h3><p>El agua es <mark>water</mark> («uóter»).</p><p>Cuando tenemos sed pedimos: <b>Water, please!</b>, agua, por favor.</p><p>Y cuando nos la dan, decimos <b>Thank you!</b> Beber agua es muy sano.</p>`,
      svg: charla("Un niño pide Water please y la mamá le da agua: Here you are", [["nino", "Water, please!", A], ["mama", "Here you are!", R], ["nino", "Thank you!", A]]),
    },
    {
      html: `<h3>I like…</h3><p>Para decir que algo nos gusta usamos <mark>I like</mark> («ai láik»), me gusta.</p><p><b>I like apples!</b> Me gustan las manzanas.</p><p>Si algo está muy rico decimos <b>Yummy!</b> («iámi») y nos frotamos la barriga.</p>`,
      svg: svg("Una niña sonríe con una manzana y dice I like apples, yummy", `${nino(80, 150, { pose: "canta", c: R, nina: true, s: 1.3 })}${ic("manzana", 118, 96, 1)}${rot(185, 64, "I like apples!", { size: 17, color: R, w: 800 })}${rot(185, 104, "Yummy!", { size: 24, color: V, w: 800 })}${rot(185, 124, "¡qué rico!", { size: 13, color: G })}${suelo(150)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Así podemos <mark>pedir comida</mark> y decir qué nos gusta en inglés.</p><p>Si tenemos hambre decimos <b>I'm hungry</b> («áim jángri»).</p><p>¡Y aprendemos que la fruta, el agua y la leche son sanas!</p>`,
      svg: vocab("I'm hungry es tengo hambre; water es agua; fruit es fruta", [["boca_abierta", "I'm hungry", "tengo hambre", R], ["agua", "water", "agua", A], ["pera", "fruit", "fruta", V]], { titulo: "Food is good!" }),
    },
    {
      html: `<h3>Juego: the picnic</h3><p>Hacemos un <mark>picnic</mark> con comida de juguete.</p><p>Un niño pregunta: <b>Apple or banana?</b></p><p>El otro elige y dice: <b>Banana, please!</b> Y después: <b>Thank you! Yummy!</b></p>`,
      svg: svg("Dos niños en un mantel de picnic con fruta, pan y leche", `<path d="M55 150 L78 110 H182 L205 150z" fill="var(--red)" opacity=".75"/><path d="M104 110 L96 150 M130 110 V150 M156 110 L164 150" stroke="var(--card)" stroke-width="3"/>${ic("manzana", 100, 128, 0.8)}${ic("platano", 132, 130, 0.8)}${ic("pan", 164, 128, 0.8)}${nino(28, 150, { c: A, pose: "sentado", s: 0.9 })}${nino(236, 150, { c: V, nina: true, pose: "sentado", s: 0.9 })}${rot(130, 34, "Apple or banana?", { size: 16, color: A, w: 800 })}${rot(130, 172, "Banana, please!", { color: V })}`),
    },
  ],
  figura: {
    titulo: "Food",
    svg: mural("Ocho tarjetas de comida en inglés: apple, banana, grapes, milk, bread, egg, water y cheese", [["manzana", "apple", "manzana", R], ["platano", "banana", "plátano", M], ["uva", "grapes", "uvas", N], ["leche", "milk", "leche", A], ["pan", "bread", "pan", M], ["huevo", "egg", "huevo", V], ["agua", "water", "agua", A], ["queso", "cheese", "queso", R]], "Food: la comida en inglés"),
  },
  video: { ...vid("ddDN30evKPc", "Do You Like Spaghetti Yogurt?", "Super Simple Songs", 324043681), busqueda: "food song for kids" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cómo pides leche en inglés?", pasos: ["Leche es milk.", "Añadimos please: por favor."], resultado: "Milk, please!" },
    { enunciado: "Di que te gustan los plátanos.", pasos: ["Me gusta: I like.", "Plátanos: bananas."], resultado: "I like bananas!" },
  ],
  errores: [
    "Decir «manzana» como apple pero pronunciado «aple»: suena «ápol».",
    "Olvidar el please al pedir: es más amable con please.",
    "Confundir milk (leche) con water (agua): milk es blanca.",
  ],
  ejercicios: [
    { q: "En la merienda, di el nombre de lo que comes en inglés.", sol: "Para la familia: apple, banana, bread, milk… ayudadle con la palabra." },
    { q: "Pide agua en inglés.", sol: "Water, please!" },
    { q: "Dibuja tu fruta favorita y di I like…", sol: "Por ejemplo: I like bananas!" },
    { q: "Juega a la tienda: pide fruta en inglés.", sol: "Para la familia: «Apple, please!» – «Here you are!»." },
    { q: "Frota la barriga y di Yummy!", sol: "Para la familia: usadlo cuando algo le guste de verdad." },
    { q: "Separa la fruta de las demás comidas de juguete.", sol: "Fruit: apple, banana, grapes…" },
  ],
  quiz: [
    { q: "Apple es…", o: ["Manzana", "Pan", "Leche"], a: 0, e: "Apple: «ápol»." },
    { q: "¿Cómo se dice «leche»?", o: ["Milk", "Bread", "Egg"], a: 0, e: "Milk: leche." },
    { q: "Bread es…", o: ["Pan", "Agua", "Uva"], a: 0, e: "Bread: «bred»." },
    { q: "Yummy! significa…", o: ["¡Qué rico!", "¡Qué frío!", "¡Adiós!"], a: 0, e: "Cuando algo está muy bueno." },
    { q: "Water es…", o: ["Agua", "Queso", "Fruta"], a: 0, e: "Water: «uóter»." },
    { q: "I like apples significa…", o: ["Me gustan las manzanas", "Tengo sed", "No quiero"], a: 0, e: "I like: me gusta." },
  ],
  examen: [
    { q: "Banana es…", o: ["Plátano", "Pera", "Huevo"], a: 0, e: "Banana: plátano." },
    { q: "Tengo hambre: I'm…", o: ["Hungry", "Happy", "Four"], a: 0, e: "I'm hungry." },
    { q: "Egg es…", o: ["Huevo", "Leche", "Pan"], a: 0, e: "Egg: huevo." },
  ],
  feynman: ["Nombra cuatro comidas en inglés", "Pide algo con please y da las gracias"],
  mapa: mapa("FOOD", "var(--inf)", [
    ["Fruit", "apple, banana, grapes", R],
    ["Breakfast", "milk, bread, egg", A],
    ["Drink", "water", V],
    ["Frases", "I like… · Yummy!", N],
  ], 220),
  tarjetas: [
    ["Manzana", "Apple"],
    ["Plátano", "Banana"],
    ["Leche", "Milk"],
    ["Pan", "Bread"],
    ["Agua", "Water"],
    ["¡Qué rico!", "Yummy!"],
  ],
  familias: [
    "En la compra, nombrad la fruta en inglés: apples, bananas, grapes.",
    "Al desayunar, preguntad: «Milk or water?».",
    "Usad Yummy! en las comidas cuando algo le guste.",
    "Jugad a la tienda con comida de juguete pidiendo con please.",
  ],
  profesores: PROF("Comunicación y representación de la realidad: aproximación a la lengua extranjera, vocabulario de alimentos, expresión de gustos (I like) y fórmulas de cortesía; vínculo con hábitos de alimentación saludable", ["Rincón de la tienda con comida de juguete.", "Almuerzo en inglés: cada uno nombra su fruta.", "Canción de comida con tarjetas."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
