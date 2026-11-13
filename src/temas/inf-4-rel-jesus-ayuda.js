// Religión, Infantil 4 años: Jesús ayuda a todos.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, corazon, pez, jesus, dibujos, charla, mural, ic, vid, R, A, V, N, M, W, G, MARRON, PROF, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Religión",
  curso: "4-anos",
  titulo: "Jesús ayuda a todos",
  minutos: 15,
  objetivos: ["Conocer que Jesús ayudaba a todas las personas", "Escuchar historias sencillas de Jesús que ayuda y cura", "Pensar cómo podemos ayudar nosotros"],
  claves: ["Jesús", "ayudar", "curar", "compartir", "amigos", "querer"],
  pregunta: {
    texto: "¿A quién has ayudado tú hoy?",
    respuesta: "¡Ayudar es muy bonito! <mark>Jesús ayudaba a todos</mark>: a los niños, a los enfermos y a los que estaban tristes.",
  },
  bloques: [
    {
      html: `<h3>Jesús crece</h3><p>El niño Jesús se hizo <mark>mayor</mark>.</p><p>Iba de pueblo en pueblo con sus amigos, que se llamaban <b>apóstoles</b>.</p><p>Hablaba a la gente del amor de Dios y ayudaba a todos.</p>`,
      svg: svg("Jesús camina por el campo con dos amigos", `${jesus(130, 150, { s: 1.3 })}${nino(60, 150, { c: V, pelo: "#5a3a1b" })}${nino(200, 150, { c: N, pelo: "#5a3a1b" })}${suelo(150)}${rot(130, 172, "Jesús y sus amigos", { color: R })}`),
    },
    {
      html: `<h3>Dejad que los niños vengan</h3><p>Un día, muchos <mark>niños</mark> querían ver a Jesús. Algunos mayores decían: «¡Fuera, molestáis!».</p><p>Pero Jesús dijo: <b>«Dejad que los niños vengan a mí»</b>. Y los abrazó.</p>`,
      svg: svg("Jesús con los brazos abiertos recibe a tres niños", `${jesus(130, 150, { s: 1.3, brazos: true })}${nino(60, 150, { c: R, s: 0.75, pose: "arriba" })}${nino(195, 150, { c: A, nina: true, s: 0.75 })}${nino(225, 150, { c: M, s: 0.7 })}${corazon(130, 30, 1.3)}${suelo(150)}${rot(130, 172, "¡Venid, niños!", { color: R })}`),
    },
    {
      html: `<h3>Jesús cura a los enfermos</h3><p>Jesús ayudaba a los <mark>enfermos</mark>.</p><p>Un hombre no podía ver. Jesús le tocó los ojos y… ¡pudo ver los colores y el sol!</p><p>El hombre estaba tan contento que dio gracias a Dios.</p>`,
      svg: svg("Jesús toca los ojos de un hombre que ahora puede ver el sol", `${jesus(90, 150, { s: 1.2 })}${nino(170, 150, { c: G, pelo: "#5a3a1b", boca: "abierta", s: 1.1 })}${ic("sol", 222, 40, 1.2)}${ic("ojo", 220, 92, 1.1)}${suelo(150)}${rot(130, 172, "¡Ya puedo ver!", { color: A })}`),
    },
    {
      html: `<h3>Los panes y los peces</h3><p>Mucha gente escuchaba a Jesús y tenía <mark>hambre</mark>.</p><p>Un niño compartió cinco <b>panes</b> y dos <b>peces</b>. Jesús los bendijo y… ¡hubo comida para todos!</p><p>Compartir es muy importante.</p>`,
      svg: svg("Una cesta con cinco panes y dos peces que se comparten", `<path d="M60 90 H200 L186 140 H74z" fill="${MARRON}"/>${[0, 1, 2, 3, 4].map((i) => ic("pan", 80 + i * 25, 82, 0.7)).join("")}${pez(100, 50, W)}${pez(160, 50, W)}${rot(130, 168, "5 panes y 2 peces", { color: MARRON })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Jesús nos enseña a <mark>ayudar a los demás</mark>.</p><p>Podemos ayudar a un amigo que se cae, compartir nuestro bocadillo o consolar a quien llora.</p><p>¡Así hacemos lo mismo que Jesús!</p>`,
      svg: dibujos("Ayudar, compartir y consolar", [["mano", "ayudar", A], ["bocadillo", "compartir", M], ["corazon", "consolar", R]], { titulo: "Como Jesús, yo también…" }),
    },
    {
      html: `<h3>Juego: el árbol de la ayuda</h3><p>En clase hacemos un <mark>árbol</mark> de papel.</p><p>Cada vez que alguien ayuda, pegamos una hoja con su nombre.</p><p>—¡Yo he ayudado a recoger! —¡Yo he compartido mis colores! Al final, ¡el árbol se llena!</p>`,
      svg: charla("Dos niños cuentan cómo han ayudado: he ayudado a recoger, he compartido mis colores", [["nino", "¡He ayudado a recoger!", A], ["nina", "¡He compartido mis colores!", R]]),
    },
  ],
  figura: {
    titulo: "Jesús ayuda a todos",
    svg: mural("Cuatro tarjetas: Jesús quiere a los niños, cura a los enfermos, comparte el pan y nos enseña a ayudar", [["nino", "los niños", "Jesús los abraza", R], ["ojo", "los enfermos", "Jesús los cura", A], ["pan", "compartir", "panes y peces", M], ["corazon", "ayudar", "como Jesús", V]], "Jesús ayuda a todos"),
  },
  video: { ...vid("CVTelWbeXkg", "¡Los milagros de Jesús! Canción cristiana infantil", "Destellos de Alabanza", 56036), busqueda: "milagros de Jesús para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué hizo Jesús cuando los niños querían verle?", pasos: ["Algunos mayores querían que se fueran.", "Jesús dijo: «Dejad que los niños vengan»."], resultado: "los recibió y los abrazó." },
    { enunciado: "Un amigo se ha caído en el patio. ¿Qué hacemos?", pasos: ["Nos acercamos y le preguntamos si está bien.", "Le ayudamos a levantarse.", "Si le duele, avisamos a la maestra."], resultado: "le ayudamos, como haría Jesús." },
  ],
  errores: [
    "Pensar que Jesús solo ayudaba a sus amigos: ayudaba a todos.",
    "Creer que ayudar es solo cosa de mayores: los niños también pueden ayudar.",
    "Guardar todo para uno: Jesús nos enseña a compartir.",
  ],
  ejercicios: [
    { q: "Ayuda hoy a poner la mesa.", sol: "Para la familia: dadle una tarea fácil y agradecédsela." },
    { q: "Dibuja a Jesús con los niños.", sol: "Para la familia: preguntadle qué les dice Jesús." },
    { q: "Comparte un juguete con un hermano o amigo.", sol: "Para la familia: valorad el gesto aunque sea un ratito." },
    { q: "Cuenta la historia de los panes y los peces.", sol: "Un niño compartió y hubo comida para todos." },
    { q: "Piensa a quién puedes ayudar mañana.", sol: "Respuesta libre: un amigo, la abuela, la maestra…" },
    { q: "Da un abrazo a alguien que esté triste.", sol: "Para la familia: consolar también es ayudar." },
  ],
  quiz: [
    { q: "Jesús ayudaba…", o: ["A todos", "Solo a los ricos", "A nadie"], a: 0, e: "Jesús ayudaba a todos." },
    { q: "¿Qué dijo Jesús de los niños?", o: ["Que vinieran con él", "Que se fueran", "Que callaran"], a: 0, e: "«Dejad que los niños vengan a mí»." },
    { q: "Los amigos de Jesús se llaman…", o: ["Apóstoles", "Reyes", "Pastores"], a: 0, e: "Los apóstoles." },
    { q: "¿Qué compartió el niño?", o: ["Panes y peces", "Juguetes", "Zapatos"], a: 0, e: "Cinco panes y dos peces." },
    { q: "Al hombre que no veía, Jesús…", o: ["Le ayudó a ver", "Le dejó solo", "Le regañó"], a: 0, e: "Le curó los ojos." },
    { q: "Si un amigo llora, yo…", o: ["Le consuelo", "Me río", "Me voy"], a: 0, e: "Como Jesús, ayudamos." },
  ],
  examen: [
    { q: "Compartir es…", o: ["Dar a otros de lo mío", "Guardarlo todo", "Romper cosas"], a: 0, e: "Damos a los demás." },
    { q: "Jesús curaba a…", o: ["Los enfermos", "Los coches", "Las casas"], a: 0, e: "A los enfermos." },
    { q: "¿Podemos ayudar los niños?", o: ["Sí", "No", "Solo los mayores"], a: 0, e: "¡Claro que sí!" },
  ],
  feynman: ["Cuenta una historia de Jesús que ayuda", "Di cómo has ayudado tú hoy"],
  mapa: mapa("JESÚS AYUDA", "var(--inf)", [
    ["Los niños", "Jesús los quiere", R],
    ["Los enfermos", "Jesús los cura", A],
    ["Compartir", "panes y peces", M],
    ["Yo también", "ayudo a los demás", V],
  ], 220),
  tarjetas: [
    ["¿A quién ayudaba Jesús?", "A todos"],
    ["¿Qué dijo de los niños?", "Dejad que vengan a mí"],
    ["¿Cómo se llaman sus amigos?", "Los apóstoles"],
    ["¿Qué compartió el niño?", "Cinco panes y dos peces"],
    ["¿Qué le pasó al hombre que no veía?", "Jesús le ayudó a ver"],
    ["¿Qué podemos hacer nosotros?", "Ayudar y compartir"],
  ],
  familias: [
    "Dadle pequeñas tareas en casa y agradecedle su ayuda.",
    "Leed juntos una historia de Jesús en una Biblia infantil.",
    "Al final del día, preguntad: «¿A quién has ayudado hoy?».",
    "Compartid algo con quien lo necesite: ropa, juguetes o comida.",
  ],
  profesores: PROF("Religión Católica en Educación Infantil: Jesús, amigo de todos; relatos sencillos de los evangelios (Mc 10,13-16; los panes y los peces; curaciones) y actitudes de ayuda y de compartir. Área de opción voluntaria", ["Árbol de la ayuda en el aula.", "Dramatización de los panes y los peces con pan de verdad.", "Encargados de ayudar cada semana."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
