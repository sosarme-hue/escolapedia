// Educación Física 1º de Primaria: juegos populares.
const { mapa } = require("./_util");
const { svg, rot, big, nino, arbol, suelo, flechaR, bocadillo, PROF, FUENTES } = require("./_pri1-dib");

const etq = (x, y, t, c = "var(--muted)", size = 12) => rot(x, y, t, { size, color: c });
const abuelo = (x, y, s = 1, nina = false) => `${nino(x, y, { c: "var(--muted)", pelo: "#d8d8d8", s, nina })}<path d="M${x + 12 * s} ${y - 40 * s} L${x + 18 * s} ${y}" stroke="#8a5a2b" stroke-width="3"/>`;
const panuelo = (x, y) => `<path d="M${x} ${y} l12 -4 l-2 14 l-8 4z" fill="var(--red)"/>`;
const venda = (x, y, s = 1) => `<rect x="${x - 11 * s}" y="${y - 66 * s}" width="${22 * s}" height="${6 * s}" rx="2" fill="var(--ink)"/>`;

module.exports = {
  materia: "Educación Física",
  curso: "1-primaria",
  titulo: "Juegos populares",
  minutos: 20,
  objetivos: ["Conocer y practicar juegos populares de siempre", "Aprender y respetar sus normas", "Valorar los juegos de los abuelos y jugar con otros"],
  claves: ["juego popular", "pilla pilla", "escondite", "pañuelo", "rayuela", "corro"],
  pregunta: {
    texto: "Pregunta a tus abuelos: ¿a qué jugaban cuando eran pequeños?",
    respuesta: "Seguro que jugaban al <mark>escondite</mark>, al <mark>pilla pilla</mark> o a la comba. Son juegos populares: ¡se juegan desde hace muchísimos años!",
  },
  bloques: [
    {
      html: `<h3>¿Qué son los juegos populares?</h3><p>Son juegos <mark>de toda la vida</mark>. Los jugaban nuestros abuelos y los abuelos de los abuelos.</p><p>Se aprenden <b>jugando</b>: los mayores los enseñan a los pequeños.</p><p>Casi no necesitan material: una pelota, una cuerda, una tiza o un pañuelo. ¡Y se pueden jugar en cualquier sitio!</p><p>Vamos a conocer algunos.</p>`,
      svg: svg("Una abuela con bastón enseña a jugar a dos niños; en el suelo hay una tiza, una cuerda y una pelota", `${abuelo(60, 150, 1.05, true)}${nino(130, 150, { c: "var(--pen)", s: 0.75 })}${nino(170, 150, { c: "var(--inf)", nina: true, s: 0.75 })}${bocadillo(100, 40, 140, "¡Así jugaba yo!", 13)}<rect x="204" y="142" width="18" height="6" rx="2" fill="var(--card)" stroke="var(--ink)"/><path d="M200 132 q16 -14 34 0" stroke="var(--red)" stroke-width="2.5" fill="none"/><circle cx="234" cy="144" r="6" fill="var(--sun)"/>${suelo(150)}${rot(130, 172, "Juegos de toda la vida", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>El pilla pilla</h3><p>Un jugador <mark>la liga</mark>: tiene que pillar a los demás.</p><p>Todos corren para escapar. Si te toca, <b>¡pillado!</b> Ahora la ligas tú.</p><p>Hay muchas formas de jugar. En el «pilla casa», hay un sitio para descansar. En el «pilla congelado», te quedas quieto hasta que otro te salva.</p><p>¡Se puede jugar en cualquier parque!</p>`,
      svg: svg("Un niño corre para pillar a dos niñas que escapan", `${nino(60, 150, { c: "var(--red)", pose: "corre", s: 1.05 })}<path d="M78 98 L104 96" stroke="var(--red)" stroke-width="4.5" stroke-linecap="round"/>${nino(150, 150, { c: "var(--inf)", nina: true, pose: "corre", s: 0.95 })}${nino(214, 150, { c: "var(--leaf)", nina: true, pose: "corre", s: 0.95 })}${suelo(150)}${rot(130, 40, "¡Te pillo!", { color: "var(--red)", size: 16 })}${rot(130, 172, "El pilla pilla", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>El escondite</h3><p>Uno <mark>cuenta</mark> hasta 20 con los ojos tapados. Se apoya en una pared o un árbol.</p><p>Mientras, los demás se <b>esconden</b>.</p><p>Al acabar, grita «¡Allá voy!» y los busca. Si ve a alguien, corre a la pared y dice su nombre. Si llegas antes que él, gritas: <b>«¡Por mí y por todos!»</b>.</p>`,
      svg: svg("Una niña cuenta con los ojos tapados junto a un árbol y un niño se esconde detrás de un arbusto", `${arbol(70, 150, 1.5)}${nino(104, 150, { c: "var(--inf)", nina: true, pose: "reza", boca: "abierta" })}<rect x="94" y="84" width="20" height="5" rx="2" fill="#f3c9a1"/>${nino(196, 150, { c: "var(--pen)", s: 0.85, pose: "agacha" })}<path d="M164 150 q-6 -40 30 -36 q36 -10 44 30 q4 6 -4 6z" fill="var(--leaf)"/>${suelo(150)}${rot(150, 40, "…18, 19, 20. ¡Allá voy!", { color: "var(--inf)", size: 13 })}${rot(130, 172, "El escondite", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>La gallinita ciega</h3><p>Un jugador lleva los <mark>ojos tapados</mark> con un pañuelo. Es la gallinita ciega.</p><p>Los demás hacen un <b>corro</b> a su alrededor.</p><p>La gallinita anda con los brazos delante. Cuando toca a alguien, tiene que <b>adivinar</b> quién es. Puede tocarle el pelo o la cara. ¡Hay que hacerlo con cuidado!</p><p>Después, otro hace de gallinita.</p>`,
      svg: svg("Un niño con los ojos vendados y los brazos estirados dentro de un corro de niños", `<ellipse cx="130" cy="146" rx="110" ry="14" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 4"/>${nino(130, 150, { c: "var(--red)", pose: "brazos", s: 1.1 })}${venda(130, 150, 1.1)}${nino(34, 150, { c: "var(--pen)", s: 0.75 })}${nino(76, 140, { c: "var(--inf)", nina: true, s: 0.65 })}${nino(186, 140, { c: "var(--leaf)", s: 0.65 })}${nino(228, 150, { c: "var(--sun)", nina: true, s: 0.75 })}${rot(130, 30, "¿Quién eres?", { color: "var(--red)", size: 15 })}${rot(130, 174, "La gallinita ciega", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>El pañuelo</h3><p>Se hacen <mark>dos equipos</mark> iguales, uno en cada lado. Cada jugador tiene un <b>número</b>.</p><p>En el centro, alguien sujeta un pañuelo y dice un número: «¡El tres!».</p><p>Los dos «tres» corren a coger el pañuelo. Quien lo coge vuelve rápido a su sitio. ¡El otro intenta pillarle antes!</p><p>Gana un punto el equipo más rápido.</p>`,
      svg: svg("Un adulto sujeta un pañuelo en el centro y dos niños corren hacia él desde lados opuestos", `${nino(130, 150, { c: "var(--muted)", pose: "brazos", s: 1 })}${panuelo(150, 104)}${nino(44, 150, { c: "var(--pen)", pose: "corre", s: 0.9 })}<g transform="translate(216 0) scale(-1 1)">${nino(0, 150, { c: "var(--red)", pose: "corre", s: 0.9 })}</g>${big(44, 78, "3", "var(--pen)", 18)}${big(216, 78, "3", "var(--red)", 18)}${suelo(150)}${rot(130, 40, "¡El tres!", { color: "var(--inf)", size: 16 })}${rot(130, 172, "El pañuelo", { color: "var(--pen)" })}`),
      video: { id: "YqSD4MDaN4E", titulo: "El juego del pañuelo", canal: "Mª Teresa Bartolomé Hernández", vistas: 60109 },
    },
    {
      html: `<h3>La rayuela</h3><p>En Cataluña se llama <mark>xarranca</mark>. Se dibujan casillas con tiza y se numeran.</p><p>Se tira una <b>piedra</b> plana a la casilla 1.</p><p>Luego se salta a la pata coja por las casillas. ¡Sin pisar la de la piedra! Donde hay dos casillas, se pone un pie en cada una. A la vuelta, se recoge la piedra.</p>`,
      svg: svg("Una rayuela pintada con casillas del 1 al 6 y una niña saltando a la pata coja", `${[[0, 0], [0, 1], [-0.5, 2], [0.5, 2], [0, 3], [0, 4]].map(([c, r], i) => `<rect x="${180 + c * 28 - 14}" y="${136 - r * 26}" width="28" height="26" fill="none" stroke="var(--pen)" stroke-width="2"/>${big(180 + c * 28, 155 - r * 26, i + 1, "var(--pen)", 14)}`).join("")}<ellipse cx="190" cy="154" rx="5" ry="3" fill="var(--muted)"/>${nino(76, 150, { c: "var(--inf)", nina: true, pose: "equilibrio", s: 1.1 })}${suelo(162)}${etq(76, 174, "a la pata coja")}`),
    },
    {
      html: `<h3>Corros y comba</h3><p>Hay juegos que se juegan <mark>cantando</mark>.</p><p>En el <b>corro de la patata</b>, nos damos las manos. Giramos y cantamos. Al final, ¡todos nos agachamos!</p><p>En la <b>comba</b>, dos jugadores mueven la cuerda y otro salta. Hay canciones para saltar al ritmo. ¿Cuántos saltos seguidos das tú?</p><p>¡Probad juntos!</p>`,
      svg: svg("Cuatro niños de la mano en corro y dos que mueven una comba mientras otro salta", `<ellipse cx="70" cy="140" rx="46" ry="12" fill="none" stroke="var(--line)" stroke-width="2"/>${["var(--pen)", "var(--inf)", "var(--leaf)", "var(--red)"].map((c, i) => nino(32 + i * 26, 146, { c, nina: i % 2 === 1, pose: "brazos", s: 0.62 })).join("")}${nino(150, 150, { c: "var(--muted)", s: 0.75, pose: "palmas" })}${nino(240, 150, { c: "var(--muted)", s: 0.75, pose: "palmas" })}${nino(195, 136, { c: "var(--sun)", nina: true, pose: "salta", s: 0.75 })}<path d="M156 118 Q195 164 234 118" stroke="var(--red)" stroke-width="2.5" fill="none"/>${suelo(150)}${etq(70, 170, "corro")}${etq(195, 170, "comba")}`),
      video: { id: "4i12dW85nUo", titulo: "Al corro de la patata: para cantar y jugar", canal: "VideoKidsTV Canciones", vistas: 1528465 },
    },
    {
      html: `<h3>¿Para qué sirven? Jugar juntos</h3><p>Los juegos populares sirven para <mark>jugar con otros</mark>, sin pantallas.</p><p>Corremos, saltamos y nos reímos. Además, aprendemos a <b>respetar las normas</b> y a esperar el turno.</p><p>Si alguien hace trampas, el juego no funciona. Y se puede jugar con niños de otras edades. ¡Hasta con los abuelos!</p><p>Así hacemos muchos amigos.</p>`,
      svg: svg("Un abuelo y dos niños juegan juntos con una pelota en el parque", `${abuelo(60, 150, 1)}${nino(130, 150, { c: "var(--pen)", pose: "arriba", s: 0.8 })}${nino(200, 150, { c: "var(--inf)", nina: true, pose: "palmas", s: 0.8 })}<circle cx="165" cy="70" r="9" fill="var(--sun)"/>${arbol(240, 150, 0.7)}${suelo(150)}${rot(130, 172, "Jugamos todos juntos", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Juego: ¿a qué juego me refiero?</h3><p>Escucha la pista y di el nombre del <mark>juego</mark>.</p><p>«Uno cuenta y los demás se esconden». <b>El escondite</b>.</p><p>«Llevo los ojos tapados». <b>La gallinita ciega</b>.</p><p>«Salto por casillas a la pata coja». <b>La rayuela</b>.</p><p>«Corro a coger un pañuelo». <b>El pañuelo</b>.</p><p>Ahora inventa tú una pista para tus amigos.</p>`,
      svg: svg("Cuatro tarjetas con dibujos: un ojo tapado, un pañuelo, casillas y un árbol, con una interrogación", `${[[`<rect x="-14" y="-6" width="28" height="8" rx="2" fill="var(--ink)"/><circle cx="0" cy="-2" r="12" fill="none" stroke="#f3c9a1" stroke-width="3"/>`, "gallinita"], [panuelo(-6, -6), "pañuelo"], [`<rect x="-10" y="-14" width="20" height="14" fill="none" stroke="var(--pen)" stroke-width="2"/><rect x="-10" y="0" width="20" height="14" fill="none" stroke="var(--pen)" stroke-width="2"/>`, "rayuela"], [arbol(0, 16, 0.6), "escondite"]].map(([d, t], i) => `<rect x="${12 + i * 61}" y="30" width="54" height="96" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><g transform="translate(${39 + i * 61} 76)">${d}</g>${etq(39 + i * 61, 116, t, "var(--muted)", 10)}`).join("")}${rot(130, 158, "¿Qué juego es?", { color: "var(--pen)", size: 15 })}`),
    },
  ],
  figura: {
    titulo: "Juegos populares",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Seis tarjetas con juegos populares: pilla pilla, escondite, gallinita ciega, pañuelo, rayuela y comba">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["Pilla pilla", "corre y pilla", nino(0, 0, { c: "var(--red)", pose: "corre", s: 1 }), "var(--red)"], ["Escondite", "cuenta y busca", nino(0, 0, { c: "var(--inf)", nina: true, pose: "reza", s: 1 }), "var(--inf)"], ["Gallinita ciega", "ojos tapados", nino(0, 0, { c: "var(--pen)", pose: "brazos", s: 1 }) + venda(0, 0, 1), "var(--pen)"], ["Pañuelo", "¡el número tres!", nino(0, 0, { c: "var(--muted)", pose: "brazos", s: 1 }) + panuelo(20, -46), "var(--muted)"], ["Rayuela", "a la pata coja", nino(0, 0, { c: "var(--leaf)", nina: true, pose: "equilibrio", s: 1 }), "var(--leaf)"], ["Comba", "salta al ritmo", nino(0, 0, { c: "var(--sun)", nina: true, pose: "salta", s: 1 }), "#c48a00"]].map(([t, d, dib, c], i) => {
        const x = 20 + (i % 3) * 205, y = i < 3 ? 16 : 156;
        return `<rect x="${x}" y="${y}" width="190" height="128" rx="12" fill="var(--card)" stroke="${c}" stroke-width="3"/><g transform="translate(${x + 50} ${y + 112})">${dib}</g>${rot(x + 126, y + 56, t, { color: c, size: 15 })}${rot(x + 126, y + 80, d, { size: 13, color: "var(--muted)" })}`;
      }).join("")}
    </svg>`,
  },
  video: { id: "mx8pNoOUjU4", titulo: "15 juegos tradicionales para niños", canal: "Mundo de la Actividad Física", vistas: 1050892, megusta: 0, busqueda: "juegos populares tradicionales para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué pasa si te pillan en el pilla pilla?",
      pasos: ["El que la liga te toca.", "Dice «¡pillado!».", "Ahora te toca a ti pillar a los demás."],
      resultado: "pasas a ligarla tú." },
    { enunciado: "Estás escondido y quien busca se aleja. ¿Qué haces?",
      pasos: ["Miras que no te vea.", "Corres a la pared donde contó.", "La tocas y gritas la frase."],
      resultado: "gritas «¡Por mí y por todos!»." },
    { enunciado: "En el pañuelo dicen «¡el cuatro!» y tú eres el 2. ¿Qué haces?",
      pasos: ["Escucho el número con atención.", "Mi número es el 2, no el 4.", "Me quedo en mi sitio y animo a mi equipo."],
      resultado: "me quedo quieto y animo." },
  ],
  errores: [
    "Hacer trampas, como mirar en el escondite: sin normas, el juego deja de ser divertido.",
    "Empujar para pillar: en el pilla pilla basta con tocar.",
    "Enfadarse al perder: lo importante es jugar y pasarlo bien juntos.",
    "Salir corriendo sin oír el número en el pañuelo: hay que escuchar bien.",
  ],
  ejercicios: [
    { q: "Pregunta a un abuelo o abuela a qué jugaba de pequeño.", sol: "Respuesta libre: se puede contar en clase." },
    { q: "Juega al pilla pilla con tu familia en el parque.", sol: "Recordad: pillar es tocar, sin empujar." },
    { q: "Cuenta hasta 20 en voz alta, como en el escondite.", sol: "1, 2, 3… 20." },
    { q: "¿Qué se grita en el escondite para salvarse?", sol: "«¡Por mí y por todos!»." },
    { q: "Dibuja una rayuela con los números del 1 al 6.", sol: "Casillas en fila, con una pareja de casillas en medio." },
    { q: "¿Qué lleva la gallinita ciega?", sol: "Los ojos tapados con un pañuelo." },
    { q: "Canta «Al corro de la patata» y agáchate al final.", sol: "Al final todos se agachan." },
    { q: "Salta a la comba o una cuerda en el suelo 10 veces.", sol: "Con los pies juntos, al ritmo." },
    { q: "¿Qué material necesita el juego del pañuelo?", sol: "Solo un pañuelo." },
    { q: "Di una norma importante de todos los juegos.", sol: "Por ejemplo: no hacer trampas, respetar el turno o no empujar." },
  ],
  quiz: [
    { q: "Los juegos populares son…", o: ["juegos de toda la vida", "videojuegos", "juegos nuevos de hoy"], a: 0, e: "Los jugaban ya los abuelos." },
    { q: "En el pilla pilla, quien la liga…", o: ["pilla a los demás", "se esconde", "canta"], a: 0, e: "Tiene que pillar." },
    { q: "En el escondite, el que cuenta tiene…", o: ["los ojos tapados", "una pelota", "un pañuelo en la mano"], a: 0, e: "Para no ver dónde se esconden." },
    { q: "¿Qué se grita para salvar a todos?", o: ["«¡Por mí y por todos!»", "«¡Gol!»", "«¡Buenas noches!»"], a: 0, e: "Así se salva el grupo." },
    { q: "La gallinita ciega lleva…", o: ["los ojos tapados", "una corona", "zapatos de colores"], a: 0, e: "No puede ver." },
    { q: "En el pañuelo, cada jugador tiene…", o: ["un número", "un color", "una pelota"], a: 0, e: "Corre cuando dicen su número." },
    { q: "La rayuela en catalán es…", o: ["la xarranca", "el pañuelo", "la comba"], a: 0, e: "Xarranca." },
    { q: "En la rayuela saltamos…", o: ["a la pata coja", "tumbados", "nadando"], a: 0, e: "A la pata coja por las casillas." },
    { q: "Al final del corro de la patata…", o: ["nos agachamos", "nos vamos", "gritamos «¡gol!»"], a: 0, e: "¡Todos al suelo!" },
    { q: "Si alguien hace trampas…", o: ["el juego no funciona", "gana siempre", "es más divertido"], a: 0, e: "Las normas hacen el juego justo." },
  ],
  examen: [
    { q: "¿Qué necesitan los juegos populares?", o: ["Poco material", "Una pantalla", "Mucho dinero"], a: 0, e: "Una pelota, una cuerda, una tiza…" },
    { q: "¿Qué juego tiene dos equipos con números?", o: ["El pañuelo", "La gallinita ciega", "El escondite"], a: 0, e: "El pañuelo." },
    { q: "En la rayuela, ¿qué se tira a la casilla?", o: ["Una piedra", "Un zapato", "Un caramelo"], a: 0, e: "Una piedra plana." },
    { q: "Los juegos populares nos enseñan a…", o: ["respetar las normas", "hacer trampas", "jugar solos"], a: 0, e: "A jugar juntos y con normas." },
  ],
  feynman: ["Qué es un juego popular", "Cómo se juega al escondite", "Por qué hay que respetar las normas"],
  mapa: mapa("JUEGOS POPULARES", "var(--pri)", [
    ["Correr", "pilla pilla · pañuelo", "var(--red)"],
    ["Buscar", "escondite · gallinita ciega", "var(--inf)"],
    ["Saltar", "rayuela · comba", "var(--leaf)"],
    ["Normas", "turno · sin trampas · sin empujar", "var(--pen)"],
  ], 240),
  tarjetas: [
    ["¿Qué es un juego popular?", "Un juego de toda la vida."],
    ["¿Qué hace quien la liga?", "Pilla a los demás."],
    ["¿Qué se grita en el escondite?", "«¡Por mí y por todos!»"],
    ["¿Qué lleva la gallinita ciega?", "Los ojos tapados."],
    ["¿Qué tiene cada jugador en el pañuelo?", "Un número."],
    ["¿Cómo se dice rayuela en catalán?", "Xarranca."],
    ["¿Qué hacemos al final del corro de la patata?", "Agacharnos."],
    ["¿Qué pasa si hay trampas?", "El juego no funciona."],
  ],
  familias: [
    "Pedid a los abuelos que enseñen un juego de cuando eran pequeños.",
    "Pintad una rayuela con tiza en la acera o en el patio.",
    "Jugad al escondite en casa (con lugares seguros) o en el parque.",
    "Aprended juntos una canción de comba o de corro.",
  ],
  profesores: PROF("Educación Física: juegos populares y tradicionales, respeto a las normas, cooperación y valoración del patrimonio lúdico propio y de la comunidad (incluidos los juegos de Cataluña)", ["Semana de los juegos de los abuelos con familias invitadas.", "Rincones de juego en el patio: rayuela, comba y pañuelo.", "Mural de juegos populares con dibujos y normas sencillas."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
