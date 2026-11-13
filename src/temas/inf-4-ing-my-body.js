// Primeros pasos en inglés, Infantil 4 años: My body. Inglés sencillo con ayuda en español.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, vocab, charla, mural, vid, R, A, V, N, M, G, PROF, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Primeros pasos en inglés",
  curso: "4-anos",
  titulo: "My body",
  minutos: 15,
  objetivos: ["Nombrar partes del cuerpo en inglés: head, eyes, nose, mouth", "Nombrar hands y feet", "Seguir órdenes sencillas: touch your nose"],
  claves: ["body", "head", "eyes", "ears", "nose", "mouth", "hands", "feet"],
  pregunta: {
    texto: "Toca tu nariz. ¿Sabes cómo se dice nariz en inglés?",
    respuesta: "Se dice <mark>nose</mark> («nóus»). ¡Y todo tu cuerpo es tu <b>body</b> («bódi»)!",
  },
  bloques: [
    {
      html: `<h3>My body</h3><p>El cuerpo en inglés se dice <mark>body</mark> («bódi»).</p><p>Arriba está la cabeza: <mark>head</mark> («jed»).</p><p>Toca tu cabeza con las dos manos y di: <b>head!</b> ¡Muy bien!</p>`,
      svg: svg("Un niño levanta las manos sobre la cabeza: head, cabeza", `${nino(80, 150, { pose: "arriba", c: A, s: 1.4 })}${rot(180, 60, "head", { size: 26, color: R, w: 800 })}${rot(180, 82, "cabeza · «jed»", { size: 13, color: G })}${rot(180, 120, "body", { size: 22, color: A, w: 800 })}${rot(180, 140, "cuerpo · «bódi»", { size: 13, color: G })}${suelo(150)}`),
    },
    {
      html: `<h3>My face</h3><p>En la cara están los ojos, <mark>eyes</mark> («áis»), y las orejas, <mark>ears</mark> («íars»).</p><p>La nariz es <b>nose</b> («nóus») y la boca, <b>mouth</b> («máuz»).</p><p>Señálalos mientras los dices.</p>`,
      svg: vocab("La cara: eyes son ojos, ears orejas, nose nariz y mouth boca", [["ojo", "eyes", "ojos", A], ["oreja", "ears", "orejas", R], ["nariz", "nose", "nariz", V], ["boca", "mouth", "boca", N]], { titulo: "My face" }),
    },
    {
      html: `<h3>Hands and feet</h3><p>Las manos son <mark>hands</mark> («jands»). Con las hands aplaudimos.</p><p>Los pies son <mark>feet</mark> («fit»). Con los feet saltamos y caminamos.</p><p>¡Aplaude con tus hands y salta con tus feet!</p>`,
      svg: vocab("Hands son manos y feet son pies", [["mano", "hands", "manos", R, 2], ["pie", "feet", "pies", A, 2]], { titulo: "Hands and feet" }),
    },
    {
      html: `<h3>Touch your nose!</h3><p><mark>Touch</mark> («tach») significa «toca».</p><p>Si oyes <b>Touch your nose!</b>, te tocas la nariz. Si oyes <b>Touch your head!</b>, te tocas la cabeza.</p><p>¡Escucha bien y hazlo rápido!</p>`,
      svg: charla("La maestra dice Touch your nose y un niño se toca la nariz: OK", [["mama", "Touch your nose!", A], ["nino", "My nose! OK!", R]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Conocer el cuerpo en inglés nos sirve para <mark>jugar y cantar</mark> en inglés.</p><p>Hay muchas canciones que nombran partes del cuerpo. También podemos decir qué nos pasa: <b>My tummy!</b>, mi barriga.</p>`,
      svg: svg("Un niño baila cantando y se toca la barriga: my tummy", `${nino(80, 150, { pose: "baila", c: V, s: 1.3 })}${rot(180, 70, "Sing and dance!", { size: 17, color: V, w: 800 })}${rot(180, 110, "My tummy!", { size: 20, color: R, w: 800 })}${rot(180, 130, "mi barriga", { size: 13, color: G })}${suelo(150)}`),
    },
    {
      html: `<h3>Juego: Head, shoulders, knees and toes</h3><p>Cantamos y tocamos: <mark>head</mark> (cabeza), <b>shoulders</b> (hombros), <b>knees</b> (rodillas) y <b>toes</b> (dedos de los pies).</p><p>Primero cantamos despacio. Después, ¡cada vez más deprisa! ¿Te da tiempo a tocarlo todo?</p>`,
      svg: svg("Cuatro niños tocan la cabeza, los hombros, las rodillas y los pies", `${[["arriba", "head", R], ["brazos", "shoulders", A], ["agacha", "knees", V], ["agacha", "toes", N]].map(([pose, t, c], i) => nino(36 + i * 63, 140, { pose, c, nina: i % 2 === 1, s: 0.9 }) + rot(36 + i * 63, 166, t, { size: 13, color: c, w: 800 })).join("")}${suelo(142)}${rot(130, 24, "faster, faster!", { color: G })}`),
    },
  ],
  figura: {
    titulo: "My body",
    svg: mural("Ocho tarjetas del cuerpo en inglés: head, eyes, ears, nose, mouth, hands, feet y body", [["nino", "head", "cabeza", R], ["ojo", "eyes", "ojos", A], ["oreja", "ears", "orejas", V], ["nariz", "nose", "nariz", N], ["boca", "mouth", "boca", R], ["mano", "hands", "manos", A], ["pie", "feet", "pies", V], ["nina", "body", "cuerpo", N]], "Partes del cuerpo en inglés"),
  },
  video: { ...vid("RuqvGiZi0qg", "Head Shoulders Knees And Toes", "Super Simple Songs", 144070312), busqueda: "head shoulders knees and toes" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Touch your ears!", pasos: ["Touch es «toca».", "Ears son las orejas.", "Nos tocamos las orejas."], resultado: "¡manos en las orejas!" },
    { enunciado: "¿Cómo se dicen los pies en inglés?", pasos: ["Miramos nuestros pies.", "Un pie es foot y dos pies son feet."], resultado: "feet («fit»)." },
  ],
  errores: [
    "Decir «foots»: dos pies son feet.",
    "Confundir eyes (ojos) con ears (orejas): eyes para ver, ears para oír.",
    "Pronunciar head como se escribe: se dice «jed».",
  ],
  ejercicios: [
    { q: "Toca la parte que diga el adulto: nose, head, hands…", sol: "Para la familia: id más rápido cuando lo haga bien; ¡es un juego!" },
    { q: "Dibuja una cara y señala eyes, nose y mouth.", sol: "Para la familia: nombradlos en inglés al dibujar." },
    { q: "Canta Head, shoulders, knees and toes.", sol: "Para la familia: con el vídeo del tema, tocando cada parte." },
    { q: "Aplaude con tus hands tres veces.", sol: "One, two, three!" },
    { q: "Salta con tus feet.", sol: "Para la familia: «Jump! Jump!» mientras salta." },
    { q: "Di en inglés con qué ves.", sol: "With my eyes." },
  ],
  quiz: [
    { q: "Head es…", o: ["La cabeza", "El pie", "La mano"], a: 0, e: "Head: cabeza." },
    { q: "¿Cómo se dice «nariz»?", o: ["Nose", "Mouth", "Ear"], a: 0, e: "Nose: «nóus»." },
    { q: "Hands son…", o: ["Las manos", "Los ojos", "Las piernas"], a: 0, e: "Hands: manos." },
    { q: "Con los eyes…", o: ["Vemos", "Comemos", "Saltamos"], a: 0, e: "Eyes: ojos." },
    { q: "Touch your mouth: me toco…", o: ["La boca", "La rodilla", "La oreja"], a: 0, e: "Mouth: boca." },
    { q: "Feet son…", o: ["Los pies", "Las manos", "Las orejas"], a: 0, e: "Feet: pies." },
  ],
  examen: [
    { q: "Ears son…", o: ["Las orejas", "Los ojos", "Los dientes"], a: 0, e: "Para oír." },
    { q: "El cuerpo en inglés es…", o: ["Body", "Head", "Toy"], a: 0, e: "Body: «bódi»." },
    { q: "Touch significa…", o: ["Toca", "Salta", "Canta"], a: 0, e: "Touch your nose: tócate la nariz." },
  ],
  feynman: ["Señala y nombra en inglés cinco partes del cuerpo", "Da una orden en inglés: Touch your…"],
  mapa: mapa("MY BODY", "var(--inf)", [
    ["head", "cabeza", R],
    ["eyes · ears", "ojos · orejas", A],
    ["nose · mouth", "nariz · boca", V],
    ["hands · feet", "manos · pies", N],
  ], 220),
  tarjetas: [
    ["Cabeza", "Head"],
    ["Ojos", "Eyes"],
    ["Nariz", "Nose"],
    ["Boca", "Mouth"],
    ["Manos", "Hands"],
    ["Pies", "Feet"],
  ],
  familias: [
    "En el baño, jugad a «Touch your…» al lavaros: nose, hands, feet.",
    "Cantad Head, shoulders, knees and toes cada vez más deprisa.",
    "Al vestirle, nombrad en inglés dónde va cada prenda: feet para los zapatos.",
    "Dejad que os dé órdenes a vosotros: le encanta ser quien manda.",
  ],
  profesores: PROF("Comunicación y representación de la realidad: aproximación a la lengua extranjera, vocabulario del cuerpo, comprensión de órdenes sencillas y respuesta física total (TPR)", ["Simon says con partes del cuerpo.", "Canción de acción con gestos.", "Muñeco grande con etiquetas en inglés."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
