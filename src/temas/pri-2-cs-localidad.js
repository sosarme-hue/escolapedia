// Ciencias Sociales 2º de Primaria: la localidad, pueblos y ciudades. Formato de 1º: frases cortas y un dibujo en cada bloque.
const { svg, txt, rot, big, tema, V, nino, edificio, publico, arbol, pino, vaca, gallina, coche, bus, semaforo, calzada, hierba, monte, chip, flechaR, tick, suelo, cruzRoja, iglesia } = require("./_pri2b");

const casita = (x, y, c = "var(--red)", s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-16" y="-24" width="32" height="24" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-20 -24 L0 -40 L20 -24Z" fill="${c}"/><rect x="-4" y="-12" width="8" height="12" fill="#8a5a2b"/></g>`;
const campo = (y = 120) => `<rect x="10" y="${y}" width="240" height="${168 - y}" fill="#e8d29a" opacity=".6"/>${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M${20 + i * 40} ${y + 6} l14 ${168 - y - 12}" stroke="#c9a46a" stroke-width="2"/>`).join("")}`;
const banco = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-20" y="-14" width="40" height="5" fill="#a0662f"/><rect x="-20" y="-24" width="40" height="4" fill="#a0662f"/><path d="M-16 -9 V0 M16 -9 V0" stroke="#555" stroke-width="3"/></g>`;
const fuente = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cy="-4" rx="22" ry="6" fill="var(--water)" opacity=".6" stroke="var(--ink)"/><rect x="-3" y="-26" width="6" height="22" fill="#9aa3b5"/><path d="M0 -28 q-10 -4 -14 10 M0 -28 q10 -4 14 10" stroke="var(--water)" stroke-width="2" fill="none"/></g>`;
const mapaPin = (x, y, c = "var(--red)") => `<path transform="translate(${x} ${y})" d="M0 0 C-12 -14 -12 -28 0 -30 C12 -28 12 -14 0 0Z" fill="${c}"/><circle cx="${x}" cy="${y - 20}" r="4" fill="#fff"/>`;

module.exports = tema({
  materia: "Ciencias Sociales",
  titulo: "La localidad: pueblos y ciudades",
  objetivos: ["Saber qué es una localidad y diferenciar pueblo y ciudad", "Conocer las partes de una localidad: calles, plazas, barrios y edificios", "Reconocer quién organiza la localidad y cómo cuidarla"],
  claves: ["localidad", "pueblo", "ciudad", "barrio", "calle", "plaza", "ayuntamiento"],
  pregunta: {
    texto: "Tu abuela vive en un pueblo pequeño y tu prima en una ciudad muy grande. ¿Qué diferencias crees que hay?",
    respuesta: "En el <mark>pueblo</mark> vive poca gente, las casas son bajas y está rodeado de campo. En la <mark>ciudad</mark> vive muchísima gente, hay edificios altos, mucho tráfico y muchos servicios. Los dos son <b>localidades</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una localidad?</h3><p>Una <mark>localidad</mark> es el lugar donde vivimos con otras familias: un <b>pueblo</b> o una <b>ciudad</b>.</p><p>Cada localidad tiene un <b>nombre</b> y unas calles, plazas, casas y edificios. Las personas que viven en la misma localidad son <b>vecinos</b>. ¿Cómo se llama tu localidad?</p>`,
      svg: svg("Un cartel con el nombre de una localidad a la entrada", `${hierba(146)}<rect x="40" y="60" width="120" height="44" rx="6" fill="#fff" stroke="#1b2235" stroke-width="3"/>${rot(100, 89, "MI PUEBLO", { size: 16, color: "#1b2235", w: 800 })}<path d="M60 104 V146 M140 104 V146" stroke="#555" stroke-width="5"/>${casita(196, 146, "var(--red)")}${casita(232, 146, "var(--sun)", 0.8)}${arbol(176, 146, 0.7)}${big(130, 36, "¿Cómo se llama?", "var(--pen)", 16)}`),
    },
    {
      html: `<h3>El pueblo</h3><p>En un <mark>pueblo</mark> vive <b>poca gente</b>. Casi todos se conocen. Las casas suelen ser bajas, con pocas plantas.</p><p>Alrededor del pueblo hay <b>campos</b>, granjas y naturaleza. Muchas personas trabajan en la agricultura o la ganadería. Suele haber una plaza, una iglesia, un colegio pequeño y el ayuntamiento.</p>`,
      svg: svg("Un pueblo con casas bajas, una iglesia y campos con una vaca", `${campo(126)}${casita(40, 126, "var(--red)")}${casita(78, 126, "var(--sun)")}${iglesia(130, 126)}${casita(182, 126, "var(--red)")}${vaca(222, 164, 0.7)}${pino(232, 126, 0.6)}`),
    },
    {
      html: `<h3>La ciudad</h3><p>En una <mark>ciudad</mark> vive <b>muchísima gente</b>. Hay edificios altos con muchos pisos, avenidas anchas y mucho tráfico.</p><p>En la ciudad hay muchos <b>servicios</b>: hospitales, tiendas, museos, cines y universidades. La mayoría de las personas trabajan en oficinas, comercios y fábricas. Las ciudades grandes tienen metro o tranvía.</p>`,
      svg: svg("Una ciudad con edificios altos, un autobús y un semáforo", `${edificio(36, 130, 40, 110, "#9aa3b5")}${edificio(82, 130, 44, 90, "#b9c2d3")}${edificio(130, 130, 40, 116, "#8a93a6")}${edificio(176, 130, 44, 80, "#a8b1c4")}${edificio(222, 130, 40, 100, "#9aa3b5")}${calzada(130, 38)}${bus(110, 166, "var(--sun)", 0.7)}${semaforo(232, 166, "rojo", 0.45)}`),
    },
    {
      html: `<h3>Las calles y las plazas</h3><p>Las localidades se organizan en <mark>calles</mark>. Cada calle tiene un <b>nombre</b> y cada casa un <b>número</b>. Así el cartero sabe dónde llevar las cartas.</p><p>Las calles tienen <b>aceras</b> para los peatones y <b>calzada</b> para los coches. Las <mark>plazas</mark> son espacios abiertos donde la gente pasea, juega y se encuentra. Los <b>parques</b> tienen árboles y columpios.</p>`,
      svg: svg("Una plaza con una fuente, un banco y árboles; una placa con el nombre de la calle", `${suelo(150)}${fuente(130, 150)}${banco(60, 150)}${arbol(30, 150, 0.8)}${arbol(212, 150, 0.9)}<rect x="150" y="40" width="96" height="32" rx="4" fill="#1f6feb"/>${rot(198, 61, "Plaza Mayor", { size: 13, color: "#fff" })}${nino(176, 150, { c: "var(--red)", s: 0.7, nina: true })}`),
    },
    {
      html: `<h3>Los barrios</h3><p>Las ciudades y algunos pueblos grandes se dividen en <mark>barrios</mark>. Un barrio es una parte de la localidad.</p><p>Cada barrio tiene sus calles, sus tiendas, su colegio, su parque y su gente. En el barrio conocemos al panadero, a los vecinos y a los amigos del parque. ¡Es como un pueblo dentro de la ciudad!</p>`,
      svg: svg("Un plano de una ciudad dividida en cuatro barrios de colores", `<rect x="30" y="30" width="200" height="130" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M30 95 H230 M130 30 V160" stroke="var(--ink)" stroke-width="5"/>${[["Norte", 80, 62, "var(--pen)"], ["Río", 180, 62, "var(--water)"], ["Centro", 80, 128, "var(--red)"], ["Sur", 180, 128, "var(--leaf)"]].map(([t, x, y, c]) => `<rect x="${x - 44}" y="${y - 26}" width="88" height="50" rx="6" fill="${c}" opacity=".18"/>${rot(x, y + 5, t, { size: 15, color: c, w: 800 })}`).join("")}`),
      video: V("z0SFfEJc6Zg"),
    },
    {
      html: `<h3>Edificios importantes</h3><p>En cada localidad hay <mark>edificios que usamos todos</mark>. El <b>ayuntamiento</b> es donde se organiza la localidad.</p><p>También están el <b>colegio</b>, el <b>centro de salud</b>, la <b>biblioteca</b>, el polideportivo y el mercado. Algunos edificios son muy antiguos, como iglesias, castillos o murallas. ¡Son nuestro patrimonio y hay que cuidarlos!</p>`,
      svg: svg("El ayuntamiento, el colegio y el centro de salud", `${suelo(150)}${publico(58, 150, "AYUNTAMIENTO", "var(--pen)", 96)}${publico(152, 150, "COLEGIO", "var(--sun)", 70)}${publico(226, 150, "SALUD", "var(--red)", 56)}${cruzRoja(226, 64, 0.6)}${txt(130, 170, "edificios de todos", "var(--muted)", 13)}`),
    },
    {
      html: `<h3>El ayuntamiento y el alcalde</h3><p>Cada localidad está organizada por el <mark>ayuntamiento</mark>. Lo dirige el <b>alcalde</b> o la <b>alcaldesa</b>, con los <b>concejales</b>.</p><p>Los vecinos los eligen votando. El ayuntamiento se encarga de limpiar las calles, poner farolas, cuidar los parques y organizar las fiestas. Hace que la localidad funcione.</p>`,
      svg: svg("La alcaldesa en el balcón del ayuntamiento con la bandera", `${suelo(160)}<g transform="translate(130 160)"><rect x="-80" y="-100" width="160" height="100" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M-90 -100 L0 -130 L90 -100Z" fill="var(--pen)"/><rect x="-30" y="-74" width="60" height="6" fill="var(--ink)"/><path d="M-30 -68 V-56 M-15 -68 V-56 M0 -68 V-56 M15 -68 V-56 M30 -68 V-56" stroke="var(--ink)" stroke-width="2"/><rect x="-12" y="-36" width="24" height="36" fill="#8a5a2b"/><path d="M60 -100 V-150" stroke="#555" stroke-width="2"/><rect x="60" y="-150" width="22" height="14" fill="var(--sun)"/><rect x="60" y="-145" width="22" height="4" fill="var(--red)"/></g>${nino(130, 90, { nina: true, c: "var(--red)", s: 0.6, pose: "arriba" })}${txt(46, 30, "alcaldesa", "var(--red)", 13)}`),
    },
    {
      html: `<h3>¿Para qué sirve? Cuidar la localidad</h3><p>La localidad es de <mark>todos</mark>, por eso todos la cuidamos. Así vivimos mejor.</p><p>Tiramos los papeles a la <b>papelera</b>. Recogemos lo que hace nuestro perro. No pintamos las paredes. Cuidamos los columpios y las plantas del parque. Y respetamos a los vecinos: no hacemos ruido por la noche.</p>`,
      svg: svg("Un niño tira un papel a la papelera en el parque", `${hierba(150)}${arbol(214, 150, 1.2)}${nino(80, 150, { c: "var(--pen)", pose: "brazos" })}<g transform="translate(130 150)"><path d="M-14 -36 H14 L11 0 H-11Z" fill="var(--leaf)" stroke="var(--ink)" stroke-width="1.5"/><path d="M-16 -36 H16" stroke="var(--ink)" stroke-width="3"/></g><rect x="110" y="96" width="10" height="10" fill="#fff" stroke="var(--line)" transform="rotate(20 115 101)"/>${tick(130, 74)}${txt(130, 36, "La cuidamos entre todos", "var(--leaf)", 14)}`),
    },
    {
      html: `<h3>Juego: ¿pueblo o ciudad?</h3><p>Lee las pistas y di si es un pueblo o una ciudad. «Hay metro y rascacielos»: <mark>ciudad</mark>. «Todos los vecinos se conocen y hay granjas cerca»: <mark>pueblo</mark>.</p><p>«Hay mucho tráfico y un hospital muy grande»: <b>ciudad</b>. «Las casas son bajas y hay campos alrededor»: <b>pueblo</b>. ¿Y tu localidad? ¿Es un pueblo o una ciudad?</p>`,
      svg: svg("A un lado un pueblo con campo y al otro una ciudad con edificios", `<rect x="10" y="20" width="118" height="148" rx="10" fill="var(--leaf)" opacity=".12"/><rect x="132" y="20" width="118" height="148" rx="10" fill="var(--pen)" opacity=".1"/>${casita(44, 128, "var(--red)")}${casita(86, 128, "var(--sun)")}${pino(110, 128, 0.6)}${gallina(30, 160, 0.6)}${edificio(160, 140, 30, 76, "#9aa3b5")}${edificio(194, 140, 30, 60, "#b9c2d3")}${edificio(228, 140, 26, 80, "#8a93a6")}${chip(69, 42, 72, "pueblo", "var(--leaf)", 13)}${chip(191, 42, 72, "ciudad", "var(--pen)", 13)}`),
    },
  ],
  figura: {
    titulo: "Pueblo y ciudad",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="El pueblo: poca gente, casas bajas y campo. La ciudad: mucha gente, edificios altos y tráfico">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      <rect x="20" y="20" width="290" height="220" rx="14" fill="var(--leaf)" opacity=".1"/><rect x="330" y="20" width="290" height="220" rx="14" fill="var(--pen)" opacity=".08"/>
      ${rot(165, 52, "Pueblo", { size: 24, color: "var(--leaf)", w: 800 })}${rot(475, 52, "Ciudad", { size: 24, color: "var(--pen)", w: 800 })}
      ${casita(70, 160, "var(--red)", 1.4)}${iglesia(160, 160)}${casita(250, 160, "var(--sun)", 1.4)}
      ${edificio(380, 172, 50, 90, "#9aa3b5")}${edificio(440, 172, 50, 74, "#b9c2d3")}${edificio(500, 172, 50, 100, "#8a93a6")}${edificio(560, 172, 50, 84, "#a8b1c4")}
      ${rot(165, 196, "poca gente · casas bajas", { size: 14, color: "var(--ink)" })}${rot(165, 218, "campo y granjas", { size: 14, color: "var(--ink)" })}
      ${rot(475, 198, "mucha gente · edificios altos", { size: 14, color: "var(--ink)" })}${rot(475, 218, "tráfico y servicios", { size: 14, color: "var(--ink)" })}
    </svg>`,
  },
  video: V("7R8LPFRcOR8", "los lugares de la ciudad para niños"),
  ejemplos: [
    { enunciado: "En un sitio viven 300 personas y hay campos alrededor. ¿Es pueblo o ciudad?", pasos: ["Viven pocas personas.", "Está rodeado de campo.", "Eso es propio de un pueblo."], resultado: "es un pueblo." },
    { enunciado: "¿Quién decide arreglar las farolas de tu calle?", pasos: ["Las farolas son de todos los vecinos.", "Lo que es de todos lo organiza el ayuntamiento.", "El ayuntamiento lo dirige el alcalde o la alcaldesa."], resultado: "el ayuntamiento." },
    { enunciado: "¿Cómo encuentra el cartero tu casa?", pasos: ["Mira el nombre de la localidad.", "Busca el nombre de la calle.", "Busca el número de la casa."], resultado: "por la dirección: localidad, calle y número." },
  ],
  errores: [
    "Pensar que un barrio es otra ciudad: es una parte de la misma localidad.",
    "Creer que la calle es solo para los coches: las aceras son para los peatones.",
    "Pensar que el alcalde manda solo: lo eligen los vecinos y trabaja con los concejales.",
    "Creer que lo que es de todos no es de nadie: lo cuidamos entre todos.",
  ],
  ejercicios: [
    { q: "¿Cómo se llama tu localidad? ¿Es pueblo o ciudad?", sol: "Respuesta libre." },
    { q: "Di dos diferencias entre un pueblo y una ciudad.", sol: "En la ciudad vive más gente y los edificios son más altos." },
    { q: "¿Qué es un barrio?", sol: "Una parte de una localidad." },
    { q: "¿Para qué sirve la acera?", sol: "Para que caminen los peatones." },
    { q: "¿Quién dirige el ayuntamiento?", sol: "El alcalde o la alcaldesa." },
    { q: "Di tres cosas que hace el ayuntamiento.", sol: "Limpiar las calles, cuidar los parques y poner farolas." },
    { q: "Di tres edificios importantes de tu localidad.", sol: "Por ejemplo: el ayuntamiento, el colegio y el centro de salud." },
    { q: "Escribe tu dirección completa.", sol: "Respuesta libre: calle, número y localidad." },
    { q: "Di dos formas de cuidar tu localidad.", sol: "Usar las papeleras y cuidar el parque." },
    { q: "Dibuja tu calle con tu casa, una tienda y un árbol.", sol: "Respuesta libre." },
  ],
  quiz: [
    { q: "Un pueblo o una ciudad es una…", o: ["localidad", "montaña", "isla"], a: 0, e: "Donde vivimos con los vecinos." },
    { q: "En la ciudad vive…", o: ["poca gente", "mucha gente", "nadie"], a: 1, e: "Muchísima gente." },
    { q: "En el pueblo las casas son…", o: ["muy altas", "bajas", "de cristal"], a: 1, e: "Con pocas plantas." },
    { q: "Una parte de la ciudad es un…", o: ["barrio", "río", "planeta"], a: 0, e: "Cada barrio tiene sus calles." },
    { q: "El ayuntamiento lo dirige…", o: ["el alcalde", "el médico", "el panadero"], a: 0, e: "O la alcaldesa." },
    { q: "La acera es para…", o: ["los coches", "los peatones", "los trenes"], a: 1, e: "Para caminar." },
    { q: "Un espacio abierto para pasear es…", o: ["una plaza", "un garaje", "un sótano"], a: 0, e: "Plazas y parques." },
    { q: "¿Quién elige al alcalde?", o: ["Los vecinos votando", "El rey", "Los niños"], a: 0, e: "En unas elecciones." },
    { q: "Los papeles se tiran…", o: ["al suelo", "a la papelera", "al río"], a: 1, e: "Así cuidamos la localidad." },
    { q: "¿Dónde suele haber metro?", o: ["En las ciudades grandes", "En los pueblos pequeños", "En el campo"], a: 0, e: "Por la cantidad de gente." },
  ],
  examen: [
    { q: "¿Qué tiene un pueblo alrededor?", o: ["Campos", "Rascacielos", "Aeropuertos"], a: 0, e: "Campos y granjas." },
    { q: "¿Qué organiza la localidad?", o: ["El ayuntamiento", "El colegio", "La tienda"], a: 0, e: "Con el alcalde y los concejales." },
    { q: "Cada casa tiene un…", o: ["número", "semáforo", "puerto"], a: 0, e: "Para encontrarla." },
    { q: "Las personas de la misma localidad son…", o: ["vecinos", "turistas", "extraños"], a: 0, e: "Viven en el mismo lugar." },
  ],
  feynman: ["Qué es una localidad", "Diferencias entre pueblo y ciudad", "Qué hace el ayuntamiento"],
  mapaT: ["MI LOCALIDAD", [
    ["Pueblo", "poca gente · campo", "var(--leaf)"],
    ["Ciudad", "mucha gente · edificios altos", "var(--pen)"],
    ["Partes", "calles · plazas · barrios", "var(--sun)"],
    ["Ayuntamiento", "alcalde · concejales", "var(--red)"],
  ]],
  tarjetas: [
    ["¿Qué es una localidad?", "Un pueblo o una ciudad"],
    ["¿Dónde vive más gente?", "En la ciudad"],
    ["¿Qué hay alrededor de un pueblo?", "Campos y granjas"],
    ["¿Qué es un barrio?", "Una parte de la localidad"],
    ["¿Quién dirige el ayuntamiento?", "El alcalde o la alcaldesa"],
    ["¿Para qué es la acera?", "Para los peatones"],
    ["Lugar abierto para pasear", "La plaza"],
    ["¿Cómo cuido mi localidad?", "Usando las papeleras"],
  ],
  familias: [
    "Dad un paseo por el barrio y apuntad los nombres de tres calles y tres edificios importantes.",
    "Buscad vuestra localidad en un mapa y mirad qué pueblos o ciudades hay cerca.",
    "Si tenéis ocasión, visitad un pueblo o una ciudad y comparad cómo son.",
    "Practicad la dirección completa y explicad para qué sirve el código postal.",
  ],
  saberes: "Sociedades y territorios: la localidad (pueblo y ciudad), su organización en calles, plazas y barrios, el ayuntamiento y el cuidado de los espacios públicos",
  ideas: ["Maqueta del barrio con cajas de cartón y calles pintadas.", "Paseo por el entorno del colegio para hacer un plano sencillo.", "Carta al ayuntamiento con propuestas de la clase para mejorar el barrio."],
});
