// Religión 1º de Primaria: Jesús, amigo de los niños.
const { mapa } = require("./_util");
const { svg, rot, big, nino, arbol, corazon, pelota, suelo, tick, equis, PROF, FUENTES } = require("./_pri1-dib");

// Jesús adulto: túnica roja, pelo largo y barba. (x, y) = pies.
const jesus = (x, y, s = 1.2, pose = "brazos") => `${nino(x, y, { c: "var(--red)", nina: true, pelo: "#5b3a1e", s, pose })}<path d="M${x - 9 * s} ${y - 61 * s} q${9 * s} ${14 * s} ${18 * s} 0 q${-3 * s} ${4 * s} ${-9 * s} ${4 * s} q${-6 * s} 0 ${-9 * s} ${-4 * s}z" fill="#5b3a1e"/>`;
const peq = (x, y, c, nina = false, pose = "pie", s = 0.7) => nino(x, y, { c, nina, pose, s });

module.exports = {
  materia: "Religión",
  curso: "1-primaria",
  titulo: "Jesús, amigo de los niños",
  minutos: 20,
  objetivos: ["Conocer que Jesús quería y acogía a los niños", "Descubrir cómo era Jesús con sus amigos", "Aprender a ser un buen amigo como Jesús"],
  claves: ["Jesús", "amigo", "niños", "apóstoles", "amor", "ayudar"],
  pregunta: {
    texto: "¿Quién es tu mejor amigo o amiga? ¿Por qué lo es?",
    respuesta: "Un buen amigo te escucha, te ayuda y te quiere. Así era <mark>Jesús</mark> con todos, y sobre todo con los niños.",
  },
  bloques: [
    {
      html: `<h3>Jesús quería a todos</h3><p>Cuando Jesús fue mayor, iba de pueblo en pueblo.</p><p>Hablaba a la gente del <mark>amor de Dios</mark>. Curaba a los enfermos y consolaba a los tristes.</p><p>Mucha gente lo seguía para escucharlo. Jesús no despreciaba a nadie. Para él, <b>todas las personas</b> eran importantes: los pobres, los mayores y los pequeños.</p><p>Con Jesús, todos se sentían <mark>queridos</mark>.</p>`,
      svg: svg("Jesús con los brazos abiertos rodeado de personas de distintas edades", `${jesus(130, 150)}${peq(40, 150, "var(--muted)", true, "pie", 0.9)}${peq(76, 150, "var(--leaf)", false, "pie", 0.8)}${peq(186, 150, "var(--pen)", false, "pie", 0.9)}${peq(222, 150, "var(--inf)", true, "pie", 0.6)}${suelo(150)}${rot(130, 172, "Jesús quiere a todos", { color: "var(--red)" })}`),
    },
    {
      html: `<h3>«Dejad que los niños se acerquen»</h3><p>Un día, unas familias llevaron a sus <b>niños</b> a ver a Jesús.</p><p>Los amigos de Jesús querían echarlos. Pensaban que Jesús estaba muy ocupado.</p><p>Pero Jesús dijo: <mark>«Dejad que los niños se acerquen a mí»</mark>. Para él, los niños nunca molestaban. ¡Le encantaba estar con ellos!</p><p>Los niños corrieron hacia él muy contentos.</p>`,
      svg: svg("Jesús llama con los brazos abiertos a tres niños que corren hacia él", `${jesus(70, 150)}${peq(150, 150, "var(--pen)", false, "corre")}${peq(190, 150, "var(--inf)", true, "corre")}${peq(228, 150, "var(--leaf)", false, "corre")}${suelo(150)}${rot(150, 40, "«¡Venid!»", { color: "var(--red)", size: 18 })}${rot(130, 172, "Los niños se acercan", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Jesús abraza a los niños</h3><p>Jesús <mark>abrazaba</mark> a los niños y ponía las manos sobre su cabeza.</p><p>Así los <b>bendecía</b>: pedía a Dios cosas buenas para ellos.</p><p>Después dijo algo sorprendente. Los mayores deben ser <b>como los niños</b>: sencillos, confiados y alegres. Así es como se llega a Dios.</p><p>Jesús también te quiere a ti y quiere ser tu amigo.</p>`,
      svg: svg("Jesús pone las manos sobre la cabeza de dos niños", `${jesus(130, 150, 1.2, "pie")}${peq(96, 150, "var(--pen)")}${peq(164, 150, "var(--inf)", true)}<path d="M130 94 L100 102 M130 94 L160 102" stroke="var(--red)" stroke-width="5" stroke-linecap="round"/>${corazon(60, 50, 1.4)}${corazon(200, 50, 1.4)}${suelo(150)}${rot(130, 172, "Jesús bendice a los niños", { color: "var(--red)" })}`),
    },
    {
      html: `<h3>Los amigos de Jesús</h3><p>Jesús eligió a <mark>doce amigos</mark> para que vivieran con él. Se llaman los <b>apóstoles</b>.</p><p>Algunos eran pescadores, como <b>Pedro</b> y <b>Juan</b>.</p><p>Comían juntos, caminaban juntos y rezaban juntos. Jesús les enseñaba con paciencia. Si se equivocaban, los perdonaba.</p><p>Hoy los cristianos también queremos ser <b>amigos de Jesús</b>. Hablamos con él cuando rezamos.</p>`,
      svg: svg("Jesús en el centro y doce amigos a su alrededor", `${jesus(130, 140, 0.9, "pie")}${[...Array(12)].map((_, i) => { const x = i < 6 ? 18 + i * 15 : 162 + (i - 6) * 15; return peq(x, 140, ["var(--pen)", "var(--leaf)", "var(--inf)", "var(--muted)"][i % 4], false, "pie", 0.42); }).join("")}${suelo(140)}${big(130, 168, "12 apóstoles", "var(--pen)", 18)}`),
    },
    {
      html: `<h3>Zaqueo, el hombre del árbol</h3><p>Zaqueo era <b>bajito</b>. Quería ver a Jesús, pero había mucha gente.</p><p>Entonces se subió a un <mark>árbol</mark>.</p><p>Jesús lo vio y le dijo: «Baja, hoy voy a tu casa». Nadie quería a Zaqueo, pero Jesús sí. Zaqueo se puso muy contento y <b>cambió</b>: devolvió lo que había quitado.</p><p>La amistad de Jesús le hizo mejor.</p>`,
      svg: svg("Zaqueo sentado en un árbol mira a Jesús, que le habla desde abajo", `${arbol(80, 150, 2.2)}${nino(80, 80, { c: "var(--inf)", pose: "sentado", s: 0.6 })}${jesus(190, 150, 1.1, "arriba")}${suelo(150)}${rot(180, 40, "«¡Baja, Zaqueo!»", { color: "var(--red)", size: 15 })}${rot(130, 172, "Jesús es amigo de todos", { color: "var(--pen)" })}`),
      video: { id: "Q2OmM9xJWYo", titulo: "Un hombre pequeño con un corazón grande", canal: "NT Kids - Español", vistas: 678655 },
    },
    {
      html: `<h3>Jesús nos enseña a querer</h3><p>Jesús nos dejó un consejo muy importante:</p><p><mark>«Amaos unos a otros como yo os he amado»</mark>.</p><p>Querer es tratar bien a los demás. Es compartir, ayudar y perdonar. Jesús quiere que todos seamos <b>amigos</b>. También de quien está solo o es diferente.</p><p>Amar así nos hace felices a todos.</p>`,
      svg: svg("Cuatro niños de la mano formando una fila con corazones encima", `${["var(--pen)", "var(--inf)", "var(--leaf)", "var(--red)"].map((c, i) => peq(55 + i * 50, 150, c, i % 2 === 1, "brazos", 0.9)).join("")}${[0, 1, 2, 3].map((i) => corazon(55 + i * 50, 50, 1.1)).join("")}${suelo(150)}${rot(130, 172, "Amaos unos a otros", { color: "var(--red)" })}`),
    },
    {
      html: `<h3>¿Cómo es un buen amigo?</h3><p>Un buen amigo <mark>comparte</mark> sus juguetes y su merienda.</p><p>Un buen amigo <b>escucha</b> y <b>ayuda</b> cuando alguien está triste.</p><p>Un buen amigo pide perdón si se equivoca. Y también sabe <b>perdonar</b>. Jesús era así con sus amigos. Tú puedes ser así también.</p><p>¿Qué haces tú por tus amigos?</p>`,
      svg: svg("Dos niños comparten una pelota", `${peq(80, 150, "var(--pen)", false, "palmas", 1)}${peq(180, 150, "var(--inf)", true, "palmas", 1)}${pelota(130, 106, 12)}<path d="M96 104 q16 -18 22 -2 M164 104 q-16 -18 -22 -2" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="3 3"/>${suelo(150)}${rot(130, 172, "Compartir · ayudar · perdonar", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>¿Para qué sirve? En el patio</h3><p>En el recreo, a veces un niño está <mark>solo</mark>.</p><p>Podemos hacer como Jesús: acercarnos y decirle «<b>¿Juegas conmigo?</b>».</p><p>Si alguien se cae, le ayudamos a levantarse. Si alguien está triste, le damos ánimo. Así el colegio es un lugar <mark>más feliz</mark> para todos.</p><p>Pequeños gestos cambian mucho el día de alguien.</p>`,
      svg: svg("Una niña sola en el patio y otro niño que se acerca a invitarla a jugar", `${nino(70, 150, { c: "var(--muted)", nina: true, boca: "cerrada", s: 0.95 })}${nino(170, 150, { c: "var(--pen)", pose: "brazos", s: 0.95 })}${pelota(212, 141, 8, "var(--inf)")}${suelo(150)}<rect x="104" y="22" width="132" height="28" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${rot(170, 41, "¿Juegas conmigo?", { size: 13 })}${rot(130, 172, "Nadie se queda solo", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Juego: ¿es de buen amigo?</h3><p>Escucha cada frase y responde <mark>sí</mark> o <mark>no</mark>.</p><p>«Presto mis colores». <b>Sí</b>. «Me río de un compañero». <b>No</b>.</p><p>«Ayudo a quien se cae». <b>Sí</b>. «No dejo jugar a nadie». <b>No</b>.</p><p>Ahora invéntate tú más frases. ¿Quién acierta más?</p><p>Recuerda: Jesús siempre elegía <b>querer</b>.</p>`,
      svg: svg("Dos tarjetas: una verde con un visto de sí y otra roja con una equis de no", `<rect x="30" y="30" width="90" height="96" rx="12" fill="var(--card)" stroke="var(--ok)" stroke-width="3"/>${tick(75, 70)}${big(75, 112, "SÍ", "var(--ok)", 22)}<rect x="140" y="30" width="90" height="96" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="3"/>${equis(185, 68)}${big(185, 112, "NO", "var(--red)", 22)}${rot(130, 158, "¿Es de buen amigo?", { color: "var(--pen)", size: 15 })}`),
    },
  ],
  figura: {
    titulo: "Jesús, amigo de los niños",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Jesús en el centro con niños a los lados y las palabras escuchar, compartir, ayudar y perdonar">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${jesus(320, 240, 2)}${peq(220, 240, "var(--pen)", false, "brazos", 1.2)}${peq(420, 240, "var(--inf)", true, "brazos", 1.2)}
      <path d="M40 240 H600" stroke="var(--line)" stroke-width="3"/>
      ${[["Escuchar", 90, 70, "var(--pen)"], ["Compartir", 550, 70, "var(--leaf)"], ["Ayudar", 90, 170, "var(--inf)"], ["Perdonar", 550, 170, "var(--red)"]].map(([t, x, y, c]) => `<rect x="${x - 70}" y="${y - 24}" width="140" height="40" rx="20" fill="var(--card)" stroke="${c}" stroke-width="3"/>${rot(x, y + 2, t, { color: c, size: 17 })}`).join("")}
      ${rot(320, 280, "«Dejad que los niños se acerquen a mí»", { color: "var(--red)", size: 17 })}
    </svg>`,
  },
  video: { id: "CPNafyaoQOY", titulo: "Dejen que los niños vengan a Mí", canal: "NT Kids - Español", vistas: 768521, megusta: 7677, busqueda: "jesús y los niños dejad que los niños se acerquen a mí" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué dijo Jesús cuando sus amigos querían echar a los niños?",
      pasos: ["Recordamos la historia: unas familias llevan a sus niños.", "Los apóstoles creen que molestan.", "Jesús les dice que dejen acercarse a los niños."],
      resultado: "«Dejad que los niños se acerquen a mí»." },
    { enunciado: "¿Por qué se subió Zaqueo a un árbol?",
      pasos: ["Zaqueo era bajito.", "Había mucha gente y no veía a Jesús.", "Desde el árbol podía verlo."],
      resultado: "para ver a Jesús por encima de la gente." },
    { enunciado: "Un compañero nuevo no conoce a nadie. ¿Qué haces?",
      pasos: ["Pensamos cómo se siente: un poco solo.", "Recordamos que Jesús era amigo de todos.", "Nos acercamos y le invitamos a jugar."],
      resultado: "le digo «¿Juegas conmigo?» y le presento a mis amigos." },
  ],
  errores: [
    "Pensar que Jesús solo quería a los mayores: Jesús quería mucho a los niños.",
    "Creer que un buen amigo nunca se equivoca: un buen amigo pide perdón y perdona.",
    "Dejar fuera del juego a quien es diferente: Jesús era amigo de todos.",
    "Confundir a los apóstoles con los Reyes Magos: los apóstoles eran los doce amigos de Jesús.",
  ],
  ejercicios: [
    { q: "¿Qué dijo Jesús sobre los niños?", sol: "«Dejad que los niños se acerquen a mí»." },
    { q: "¿Cuántos amigos especiales eligió Jesús?", sol: "Doce: los apóstoles." },
    { q: "Di el nombre de un apóstol.", sol: "Por ejemplo, Pedro o Juan." },
    { q: "¿Dónde se subió Zaqueo para ver a Jesús?", sol: "A un árbol." },
    { q: "Dibújate con tu mejor amigo o amiga.", sol: "Deben aparecer dos niños; se puede preguntar qué hacen juntos." },
    { q: "Di tres cosas que hace un buen amigo.", sol: "Por ejemplo: compartir, ayudar y perdonar." },
    { q: "¿Qué hacía Jesús con los niños?", sol: "Los abrazaba y los bendecía." },
    { q: "Completa: «Amaos unos a otros como…»", sol: "«…yo os he amado»." },
    { q: "Un niño está triste en el patio. ¿Qué puedes hacer?", sol: "Acercarte, preguntarle qué le pasa e invitarle a jugar." },
    { q: "¿Es de buen amigo reírse de un compañero?", sol: "No. Un buen amigo trata bien a los demás." },
  ],
  quiz: [
    { q: "¿Qué hacía Jesús con los niños?", o: ["Los echaba", "Los abrazaba", "No los miraba"], a: 1, e: "Jesús abrazaba y bendecía a los niños." },
    { q: "¿Qué dijo Jesús?", o: ["«Dejad que los niños se acerquen a mí»", "«Id a casa»", "«No molestéis»"], a: 0, e: "Jesús quería estar con los niños." },
    { q: "¿Cuántos apóstoles tenía Jesús?", o: ["Tres", "Doce", "Cien"], a: 1, e: "Jesús eligió doce amigos." },
    { q: "¿Qué era Pedro antes de seguir a Jesús?", o: ["Pescador", "Rey", "Pastor"], a: 0, e: "Pedro era pescador." },
    { q: "¿Dónde se subió Zaqueo?", o: ["A una casa", "A un árbol", "A un barco"], a: 1, e: "Se subió a un árbol para ver a Jesús." },
    { q: "Bendecir es…", o: ["pedir a Dios cosas buenas", "regañar", "correr"], a: 0, e: "Jesús pedía a Dios cosas buenas para los niños." },
    { q: "Un buen amigo…", o: ["comparte", "se burla", "grita"], a: 0, e: "Compartir es de buen amigo." },
    { q: "Si me equivoco con un amigo, …", o: ["me escondo", "pido perdón", "me enfado"], a: 1, e: "Pedir perdón arregla las cosas." },
    { q: "Jesús era amigo…", o: ["solo de los ricos", "de todos", "de nadie"], a: 1, e: "Jesús quería a todas las personas." },
    { q: "Si un niño está solo en el recreo, …", o: ["lo invito a jugar", "me río", "no hago nada"], a: 0, e: "Así hacemos como Jesús." },
  ],
  examen: [
    { q: "¿Qué pensaba Jesús de los niños?", o: ["Que molestaban", "Que eran importantes", "Que eran pesados"], a: 1, e: "Para Jesús los niños eran muy importantes." },
    { q: "¿Cómo se llaman los doce amigos de Jesús?", o: ["Apóstoles", "Pastores", "Reyes"], a: 0, e: "Son los apóstoles." },
    { q: "¿Qué hizo Zaqueo después de conocer a Jesús?", o: ["Se enfadó", "Cambió y fue bueno", "Se fue lejos"], a: 1, e: "Devolvió lo que había quitado." },
    { q: "¿Qué nos pidió Jesús?", o: ["Que nos queramos", "Que no hablemos", "Que no juguemos"], a: 0, e: "«Amaos unos a otros»." },
  ],
  feynman: ["Qué hizo Jesús cuando le llevaron a los niños", "Quién era Zaqueo y qué le pasó", "Cómo es un buen amigo"],
  mapa: mapa("JESÚS, AMIGO", "var(--pri)", [
    ["Los niños", "«Dejad que se acerquen»", "var(--red)"],
    ["Los apóstoles", "doce amigos de Jesús", "var(--pen)"],
    ["Zaqueo", "Jesús es amigo de todos", "var(--leaf)"],
    ["Buen amigo", "comparte · ayuda · perdona", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["¿Qué dijo Jesús de los niños?", "«Dejad que se acerquen a mí»."],
    ["¿Qué hacía Jesús con los niños?", "Los abrazaba y bendecía."],
    ["¿Cuántos apóstoles había?", "Doce."],
    ["Di un apóstol pescador.", "Pedro (o Juan)."],
    ["¿Quién se subió a un árbol?", "Zaqueo."],
    ["¿Qué nos pidió Jesús?", "Que nos queramos unos a otros."],
    ["¿Qué hace un buen amigo?", "Comparte, ayuda y perdona."],
    ["¿Qué digo a quien está solo?", "«¿Juegas conmigo?»"],
  ],
  familias: [
    "Preguntad cada día: «¿Con quién has jugado hoy? ¿Ayudaste a alguien?».",
    "Leed juntos la historia de Zaqueo y hablad de cómo se sentía antes y después.",
    "Practicad en casa a pedir perdón y a perdonar después de una pequeña pelea.",
    "Invitad a un compañero o compañera que acaba de llegar al colegio a jugar al parque.",
  ],
  profesores: PROF("Religión Católica, primer ciclo: Jesús acoge y bendice a los niños (Mc 10,13-16), los apóstoles, Zaqueo (Lc 19,1-10) y el mandamiento del amor como base de la convivencia. Área de opción dentro del marco del RD 157/2022", ["Dramatización de «Dejad que los niños se acerquen a mí».", "Rincón del amigo: un banco del patio para quien busca con quién jugar.", "Mural de la amistad con una mano de cada niño o niña y una buena acción."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
