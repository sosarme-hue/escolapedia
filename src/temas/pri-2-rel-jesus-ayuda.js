// Religión 2º de Primaria: Jesús ayuda a los demás.
const P = require("./_pri2a");
const { svg, rot, nino, sol, nube, corazon, pez, suelo, casa, arbol, flechaR, estrella } = P;

// Jesús: túnica blanca con manto rojo.
const jesus = (x, y, s = 1, pose = "pie") => `<g><path transform="translate(${x} ${y}) scale(${s})" d="M-9 -50 L9 -50 L14 0 H-14z" fill="var(--card)" stroke="var(--line)" stroke-width="1.5"/><path transform="translate(${x} ${y}) scale(${s})" d="M-9 -50 L4 -50 L-12 0 H-15z" fill="var(--red)" opacity=".8"/>${nino(x, y, { c: "#8a5a2b", s, pose, pelo: "#5a3a1a" })}</g>`;
// Barca.
const barca = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-50 0 h100 l-14 20 h-72z" fill="#a8743c" stroke="var(--ink)" stroke-width="1.5"/><path d="M0 0 V-60" stroke="var(--ink)" stroke-width="3"/><path d="M2 -58 L36 -10 H2z" fill="var(--card)" stroke="var(--line)" stroke-width="1.5"/></g>`;
// Pan y pescado.
const pan = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="12" ry="7" fill="#d9a85b" stroke="var(--ink)" stroke-width="1.2"/><path d="M${x - 6} ${y - 3} l3 4 M${x} ${y - 4} l3 4 M${x + 6} ${y - 3} l2 3" stroke="#8a5a2b" stroke-width="1.2"/>`;

module.exports = P.tema({
  materia: "Religión",
  titulo: "Jesús ayuda a los demás",
  objetivos: ["Conocer algunos milagros en los que Jesús cura y ayuda", "Escuchar la parábola del buen samaritano", "Descubrir cómo podemos ayudar nosotros a los demás"],
  claves: ["Jesús", "ayudar", "milagro", "curar", "compartir", "parábola", "buen samaritano", "prójimo"],
  pregunta: ["Ves a un niño nuevo solo en el recreo. Nadie juega con él. ¿Qué harías?", "Jesús siempre se acercaba a quien estaba <b>solo</b>, <b>enfermo</b> o <b>triste</b>. Nos enseña a <mark>ayudar</mark>: podemos invitarle a jugar."],
  bloques: [
    ["Jesús pasó haciendo el bien", `<p>Cuando Jesús se hizo mayor, empezó a ir de pueblo en pueblo. Contaba a la gente que <mark>Dios nos quiere</mark> como un padre.</p><p>No solo hablaba: también <b>ayudaba</b>. Se acercaba a los enfermos, a los pobres y a los que estaban solos.</p><p>La Biblia dice que Jesús «pasó por la vida <b>haciendo el bien</b>».</p>`,
      svg("Jesús camina por un pueblo rodeado de gente", `${casa(40, 140, "var(--sun)")}${casa(220, 140, "var(--red)")}${jesus(130, 150, 1.2)}${nino(86, 150, { c: "var(--pen)", s: 0.9 })}${nino(176, 150, { nina: true, c: "var(--leaf)", s: 0.85 })}${sol(130, 30, 12)}${suelo(150)}${rot(130, 172, "Haciendo el bien", { color: "var(--pen)" })}`)],
    ["Los milagros de Jesús", `<p>Jesús hizo cosas asombrosas que solo Dios puede hacer. Las llamamos <mark>milagros</mark>.</p><p><b>Curó</b> a enfermos, hizo ver a los ciegos y andar a los que no podían.</p><p>Jesús no hacía milagros para presumir. Los hacía porque <b>le daba pena</b> ver sufrir a la gente y quería mostrar el <b>amor de Dios</b>.</p>`,
      svg("Jesús tiende la mano a un hombre que se levanta feliz", `${jesus(80, 150, 1.2)}${nino(180, 150, { c: "var(--pen)", pose: "arriba", s: 1.1 })}${estrella(180, 30, 8)}${estrella(210, 46, 6)}${suelo(150)}${rot(130, 172, "Jesús cura", { color: "var(--pen)" })}`)],
    ["El ciego Bartimeo", `<p>A la salida de un pueblo, un hombre <b>ciego</b> llamado <mark>Bartimeo</mark> pedía limosna. Al oír que pasaba Jesús, gritó: «¡Jesús, ten compasión de mí!».</p><p>Algunos le mandaban callar, pero Jesús se paró y lo llamó. Le preguntó: «¿Qué quieres que haga por ti?».</p><p>Bartimeo dijo: «Que pueda ver». Y Jesús lo <b>curó</b>. ¡Bartimeo lo siguió por el camino!</p>`,
      svg("Bartimeo sentado al borde del camino llama a Jesús", `${nino(60, 150, { c: "var(--muted)", pose: "sentado" })}<path d="M50 96 h20" stroke="var(--ink)" stroke-width="4"/>${P.bocadillo(80, 40, 120, "¡Jesús!")}${jesus(190, 150, 1.15)}${suelo(150)}${rot(130, 172, "«¿Qué quieres que haga?»", { color: "var(--pen)", size: 13 })}`)],
    ["Panes y peces para todos", `<p>Un día, mucha gente escuchaba a Jesús en el campo. Se hizo tarde y <b>tenían hambre</b>.</p><p>Un niño tenía <mark>cinco panes y dos peces</mark>, y los compartió. Jesús dio gracias a Dios y los repartió.</p><p>¡Comieron <b>más de cinco mil</b> personas y sobró comida! Cuando compartimos, llega para todos.</p>`,
      svg("Una cesta con cinco panes y dos peces", `<path d="M60 90 h140 l-16 50 h-108z" fill="#c99a5b" stroke="var(--ink)" stroke-width="2"/>${[0, 1, 2, 3, 4].map((i) => pan(82 + i * 24, 84 - (i % 2) * 6)).join("")}${pez(110, 62, "var(--water)")}${pez(150, 58, "var(--water)")}${P.num(130, 162, "5 panes + 2 peces", "var(--pen)", 16)}`)],
    ["Jesús calma la tormenta", `<p>Una noche, Jesús y sus amigos cruzaban un lago en una <b>barca</b>. Jesús dormía.</p><p>De repente, llegó una <mark>gran tormenta</mark>. Las olas eran enormes y sus amigos tenían mucho <b>miedo</b>.</p><p>Despertaron a Jesús. Él dijo al viento: «¡Calla!». Y todo quedó <b>en calma</b>. Jesús también nos ayuda cuando tenemos miedo.</p>`,
      svg("Una barca en un lago con olas y nubes de tormenta", `${nube(60, 34, 1.1)}${nube(180, 30, 1.2)}<path d="M150 50 l-10 18 h10 l-8 18" stroke="var(--sun)" stroke-width="3" fill="none"/>${barca(130, 112, 1)}<path d="M10 130 q20 -14 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 V170 H10z" fill="var(--water)" opacity=".75"/>${rot(130, 164, "¡Calma!", { color: "var(--card)", size: 15 })}`), P.V("ayuB")],
    ["El buen samaritano", `<p>Jesús también contaba <mark>parábolas</mark>: historias para enseñar.</p><p>Un hombre iba de viaje y unos ladrones le <b>robaron</b> y le hirieron. Pasó un sacerdote y siguió de largo. Pasó otro hombre y tampoco paró.</p><p>Al final pasó un <b>samaritano</b>, que era extranjero. Se paró, le <b>curó</b> las heridas y lo llevó a una posada. ¡Él sí ayudó!</p>`,
      svg("El buen samaritano cura al hombre herido junto a su burro", `${nino(80, 156, { c: "var(--muted)", pose: "sentado", boca: "cerrada" })}<path d="M72 92 h16" stroke="var(--card)" stroke-width="5"/>${nino(140, 156, { c: "var(--leaf)", pose: "agacha", s: 1.1 })}<g transform="translate(206 140)"><ellipse rx="18" ry="11" fill="var(--muted)"/><path d="M14 -6 l12 -12 l7 5 l-7 12z" fill="var(--muted)"/><path d="M-10 10 v12 M10 10 v12" stroke="var(--muted)" stroke-width="4"/></g>${suelo(162)}${rot(130, 176, "El buen samaritano", { color: "var(--pen)" })}`)],
    ["¿Quién es mi prójimo?", `<p>Jesús contó esta parábola para explicar quién es nuestro <mark>prójimo</mark>.</p><p>El prójimo es <b>cualquier persona</b> que necesita ayuda, aunque no sea de nuestra familia, ni de nuestro país, ni de nuestro grupo.</p><p>Al terminar, Jesús dijo: <b>«Vete y haz tú lo mismo»</b>. ¡Nos lo dice también a nosotros!</p>`,
      svg("Muchas personas distintas de la mano alrededor de un corazón", `${corazon(130, 70, 2.4)}${[["var(--pen)", false, 0.9], ["var(--red)", true, 1], ["var(--leaf)", false, 1.1], ["var(--sun)", true, 0.85], ["var(--muted)", false, 1.05]].map(([c, n, s], i) => nino(30 + i * 50, 156, { c, nina: n, s, pelo: i === 4 ? "var(--muted)" : "var(--ink)" })).join("")}${suelo(156)}${rot(130, 174, "Todos somos prójimo", { color: "var(--pen)" })}`)],
    ["¿Para qué sirve?", `<p>Jesús nos enseña que <mark>ayudar</mark> es una forma de querer.</p><p>En casa puedes poner la mesa sin que te lo pidan. En clase puedes <b>prestar</b> tus colores o explicar algo a un compañero.</p><p>En el patio, puedes invitar a jugar a quien está <b>solo</b>. ¡Pequeños gestos hacen el mundo mejor!</p>`,
      svg("Una niña invita a jugar a un niño que estaba solo", `${nino(70, 156, { nina: true, c: "var(--red)", pose: "brazos" })}${nino(170, 156, { c: "var(--pen)" })}${P.pelota(120, 146, 10)}${P.bocadillo(80, 50, 130, "¿Juegas?")}${arbol(226, 156, 0.8)}${suelo(156)}${rot(130, 174, "Invitar a jugar", { color: "var(--pen)" })}`)],
    ["Juego: la cadena de favores", `<p>Durante una semana, haz cada día <mark>un favor</mark> a alguien sin que te lo pida.</p><p>Cada vez que hagas uno, pinta un <b>eslabón</b> de papel y únelo a los demás. ¡Así crece la cadena!</p><p>Al final de la semana, cuenta cuántos eslabones tienes y cómo se sintieron las personas a las que ayudaste.</p>`,
      svg("Una cadena de eslabones de papel de colores", `${[...Array(7)].map((_, i) => `<ellipse cx="${30 + i * 32}" cy="${80 + (i % 2) * 8}" rx="18" ry="12" fill="none" stroke="${["var(--red)", "var(--sun)", "var(--leaf)", "var(--pen)", "var(--inf)", "var(--water)", "var(--bac)"][i]}" stroke-width="6"/>`).join("")}${["L", "M", "X", "J", "V", "S", "D"].map((d, i) => rot(30 + i * 32, 126, d, { size: 13 })).join("")}${rot(130, 160, "Un favor cada día", { color: "var(--pen)" })}`)],
  ],
  figura: ["Jesús ayuda", `<svg viewBox="0 0 640 260" role="img" aria-label="Jesús cura al ciego, comparte panes y peces, calma la tormenta y el buen samaritano ayuda al herido">
    <rect width="640" height="260" rx="16" fill="var(--paper)"/>
    ${["Cura al ciego", "Panes y peces", "Calma la tormenta", "El buen samaritano"].map((t, i) => `<rect x="${24 + i * 152}" y="24" width="136" height="210" rx="14" fill="var(--card)" stroke="var(--red)" stroke-width="3"/>${rot(92 + i * 152, 220, t, { size: 13 })}`).join("")}
    ${jesus(92, 190, 1.3)}${[0, 1, 2].map((i) => pan(220 + i * 26, 150)).join("")}${pez(230, 120, "var(--water)")}${pez(266, 120, "var(--water)")}
    ${barca(396, 150, 0.85)}<path d="M330 170 q15 -10 30 0 t30 0 t30 0 t30 0 V200 H330z" fill="var(--water)" opacity=".7"/>${nino(526, 190, { c: "var(--muted)", pose: "sentado", s: 0.9 })}${nino(570, 190, { c: "var(--leaf)", pose: "agacha", s: 1 })}
  </svg>`],
  video: P.V("ayuV", true),
  ejemplos: [
    ["¿Por qué hacía Jesús milagros?", ["No era para presumir.", "Le daba pena ver sufrir a la gente.", "Quería mostrar que Dios nos quiere."], "por amor, para ayudar y mostrar el amor de Dios."],
    ["¿Quién ayudó al hombre herido en la parábola?", ["Pasó un sacerdote y no paró.", "Pasó otro hombre y tampoco.", "Pasó un samaritano y lo curó."], "el buen samaritano."],
    ["Un compañero no tiene goma y la necesita. ¿Qué haces?", ["Jesús nos pide ayudar a quien lo necesita.", "Es un gesto pequeño pero importante."], "le presto mi goma."],
  ],
  errores: [
    "Pensar que solo hay que ayudar a los amigos: el prójimo es cualquier persona.",
    "Creer que Jesús hacía milagros para presumir: lo hacía por amor.",
    "Pensar que ayudar es solo para los mayores: los niños también pueden ayudar mucho.",
    "Confundir parábola con milagro: la parábola es una historia que enseña algo.",
  ],
  ejercicios: [
    ["¿Qué es un milagro?", "Algo asombroso que solo Dios puede hacer."],
    ["¿Cómo se llamaba el ciego que curó Jesús?", "Bartimeo."],
    ["¿Cuántos panes y peces tenía el niño?", "Cinco panes y dos peces."],
    ["¿Qué pasó cuando Jesús dijo «¡Calla!» a la tormenta?", "El viento y las olas se calmaron."],
    ["¿Qué es una parábola?", "Una historia que contaba Jesús para enseñar algo."],
    ["¿Quién ayudó al hombre herido?", "El samaritano."],
    ["¿Qué es el prójimo?", "Cualquier persona que necesita nuestra ayuda."],
    ["¿Qué dijo Jesús al final de la parábola?", "«Vete y haz tú lo mismo»."],
    ["Escribe tres formas de ayudar en casa.", "Por ejemplo: poner la mesa, recoger mis juguetes y ayudar a mi hermano."],
    ["Dibuja a alguien ayudando a otra persona.", "Dibujo libre."],
  ],
  quiz: [
    ["Jesús se acercaba sobre todo a…", ["los enfermos, pobres y solos", "los ricos solamente", "nadie"], "Quería ayudar a quien lo necesitaba."],
    ["Un milagro es…", ["algo que solo Dios puede hacer", "un truco de magia", "un juego"], "Jesús curaba por amor."],
    ["Bartimeo era…", ["ciego", "pescador", "rey"], "Jesús le devolvió la vista."],
    ["Con cinco panes y dos peces comieron…", ["más de cinco mil personas", "solo dos", "nadie"], "Al compartir, llegó para todos."],
    ["En la tormenta, los amigos de Jesús tenían…", ["miedo", "hambre", "sueño"], "Las olas eran enormes."],
    ["Una parábola es…", ["una historia para enseñar", "una canción", "un milagro"], "Jesús contaba muchas."],
    ["En la parábola, ¿quién ayudó al herido?", ["El samaritano", "El sacerdote", "Los ladrones"], "Los otros pasaron de largo."],
    ["El prójimo es…", ["cualquier persona que necesita ayuda", "solo mi familia", "solo mis amigos"], "Así lo explicó Jesús."],
    ["Jesús dijo: «Vete y haz tú…»", ["lo mismo", "lo contrario", "nada"], "Nos invita a ayudar."],
    ["Ayudar es una forma de…", ["querer", "enfadarse", "presumir"], "Jesús ayudaba por amor."],
  ],
  examen: [
    ["¿Qué hizo Jesús con los panes y los peces?", ["Dio gracias y los repartió", "Se los comió solo", "Los tiró"], "Y comieron todos."],
    ["¿Qué hizo el samaritano?", ["Curó al herido y lo llevó a una posada", "Siguió de largo", "Le robó"], "Ayudó a un desconocido."],
    ["¿Qué dijo Jesús al viento?", ["¡Calla!", "¡Sopla más!", "Nada"], "Y llegó la calma."],
    ["¿Por qué ayudaba Jesús?", ["Por amor", "Para ser famoso", "Porque le obligaban"], "Mostraba el amor de Dios."],
  ],
  feynman: ["Por qué Jesús hacía milagros", "Qué enseña la parábola del buen samaritano", "Cómo puedo ayudar yo a los demás"],
  mapa: ["JESÚS AYUDA", [
    ["Cura", "al ciego Bartimeo", "var(--pen)"],
    ["Comparte", "panes y peces", "var(--sun)"],
    ["Calma", "la tormenta", "var(--water)"],
    ["Enseña", "el buen samaritano", "var(--leaf)"],
  ]],
  tarjetas: [
    ["¿Qué es un milagro?", "Algo asombroso que solo Dios puede hacer"],
    ["¿A quién curó Jesús junto al camino?", "Al ciego Bartimeo"],
    ["¿Qué compartió el niño?", "Cinco panes y dos peces"],
    ["¿Qué hizo Jesús en la tormenta?", "La calmó"],
    ["¿Qué es una parábola?", "Una historia que enseña algo"],
    ["¿Quién ayudó al herido?", "El buen samaritano"],
    ["¿Quién es mi prójimo?", "Cualquier persona que necesita ayuda"],
    ["«Vete y haz tú…»", "lo mismo"],
  ],
  familias: [
    "Haced juntos la cadena de favores durante una semana.",
    "Comentad una noticia en la que alguien ayudó a otra persona.",
    "Preparad una bolsa de ropa o juguetes para donar.",
    "Leed la parábola del buen samaritano en una Biblia infantil y representadla.",
  ],
  saberes: "Jesús, que pasa haciendo el bien: milagros (Bartimeo, Mc 10,46-52; panes y peces, Jn 6,1-13; la tempestad calmada, Mc 4,35-41) y la parábola del buen samaritano (Lc 10,25-37); el amor al prójimo",
  ideas: ["Dramatización de la parábola del buen samaritano.", "Cadena de favores de clase con eslabones de papel.", "Detectar situaciones de ayuda en el patio y el aula."],
});
