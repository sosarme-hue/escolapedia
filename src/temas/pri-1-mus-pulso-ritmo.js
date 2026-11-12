// Música 1º de Primaria: el pulso y el ritmo.
const { mapa } = require("./_util");
const { svg, rot, big, nino, corazon, nota, suelo, bocadillo, PROF, FUENTES } = require("./_pri1-dib");

const etq = (x, y, t, c = "var(--muted)", size = 12) => rot(x, y, t, { size, color: c });
const huella = (x, y, c = "var(--pen)") => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="0" rx="6" ry="10" fill="${c}"/><circle cx="-4" cy="-13" r="2.2" fill="${c}"/><circle cx="0" cy="-15" r="2.2" fill="${c}"/><circle cx="4" cy="-13" r="2.2" fill="${c}"/></g>`;
const negra = (x, y, c = "var(--pen)") => `<g><ellipse cx="${x}" cy="${y}" rx="8" ry="6" transform="rotate(-20 ${x} ${y})" fill="${c}"/><path d="M${x + 7} ${y - 2} V${y - 36}" stroke="${c}" stroke-width="3"/></g>`;
const corcheas = (x, y, c = "var(--inf)") => `<g>${negra(x, y, c)}${negra(x + 28, y, c)}<path d="M${x + 7} ${y - 36} H${x + 35}" stroke="${c}" stroke-width="6"/></g>`;
const caracol = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-24 0 h40 q6 0 6 -8 l4 -10" stroke="var(--leaf)" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="-6" cy="-16" r="15" fill="var(--sun)" stroke="#c48a00" stroke-width="2"/><path d="M-6 -16 m-8 0 a8 8 0 1 1 8 8" stroke="#c48a00" stroke-width="2" fill="none"/></g>`;
const conejo = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="-14" rx="18" ry="12" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><circle cx="16" cy="-26" r="9" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><ellipse cx="14" cy="-44" rx="3.5" ry="11" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><ellipse cx="22" cy="-42" rx="3.5" ry="11" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/></g>`;
const palma = (x, y, c = "var(--inf)") => `<g transform="translate(${x} ${y})"><rect x="-8" y="-10" width="16" height="20" rx="6" fill="#f3c9a1" stroke="${c}" stroke-width="2"/><path d="M-12 -14 l-5 -5 M12 -14 l5 -5 M0 -16 v-7" stroke="${c}" stroke-width="2"/></g>`;

module.exports = {
  materia: "Música",
  curso: "1-primaria",
  titulo: "El pulso y el ritmo",
  minutos: 20,
  objetivos: ["Sentir y seguir el pulso de una canción", "Distinguir pulso rápido y lento", "Reproducir ritmos sencillos con palabras y con el cuerpo"],
  claves: ["pulso", "ritmo", "rápido", "lento", "ta", "ti-ti", "percusión corporal"],
  pregunta: {
    texto: "Pon la mano en tu pecho. ¿Notas algo que se repite siempre igual?",
    respuesta: "Es tu corazón: <mark>pum, pum, pum</mark>. La música también tiene un latido que se repite. Se llama <mark>pulso</mark>.",
  },
  bloques: [
    {
      html: `<h3>El pulso, el corazón de la música</h3><p>Las canciones tienen un latido que se repite <mark>siempre igual</mark>. Es como el corazón. Es el <b>pulso</b>.</p><p>También el reloj hace «tic, tac, tic, tac», siempre al mismo paso.</p><p>Cuando bailamos o damos palmas con una canción, seguimos su pulso.</p><p>¡Y casi sin darnos cuenta!</p>`,
      svg: svg("Cuatro corazones iguales en fila, separados por la misma distancia", `${[0, 1, 2, 3].map((i) => corazon(48 + i * 55, 84, 2.2)).join("")}${[0, 1, 2, 3].map((i) => etq(48 + i * 55, 126, "pum", "var(--red)", 14)).join("")}${rot(130, 160, "Siempre igual: el pulso", { color: "var(--pen)", size: 15 })}`),
    },
    {
      html: `<h3>Seguimos el pulso</h3><p>Podemos seguir el pulso de muchas formas.</p><p><b>Andando</b> al ritmo de la canción: un paso en cada latido.</p><p>Dando <b>palmas</b> o golpes suaves en las rodillas. O moviendo la cabeza «sí, sí, sí». Lo importante es <mark>no correr ni pararse</mark>: ir siempre al mismo paso que la música.</p><p>Si te pierdes, escucha y vuelve a empezar.</p>`,
      svg: svg("Huellas de pasos regulares bajo unas notas musicales", `${[0, 1, 2, 3, 4, 5].map((i) => huella(30 + i * 40, i % 2 ? 128 : 112, "var(--pen)")).join("")}${[0, 1, 2, 3, 4, 5].map((i) => nota(26 + i * 40, 66, "var(--inf)", false)).join("")}${rot(130, 166, "Un paso en cada pulso", { color: "var(--pen)", size: 15 })}`),
      video: { id: "IiUzoHNQ0oY", titulo: "Con mi mano (choco la mesa): percusión y juego de manos", canal: "El Pequeño Caracolito", vistas: 1525077 },
    },
    {
      html: `<h3>Pulso rápido y pulso lento</h3><p>Algunas canciones tienen el pulso <mark>rápido</mark>, como un conejo que salta. Dan ganas de correr y bailar.</p><p>Otras lo tienen <mark>lento</mark>, como un caracol. Son tranquilas, como las nanas.</p><p>Escucha una canción y muévete como el conejo o como el caracol. ¿Cuál es?</p><p>Prueba también a cantar una misma canción rápido y luego lento.</p>`,
      svg: svg("Un caracol con pasos muy separados y un conejo con pasos muy juntos", `${caracol(60, 76)}${[0, 1, 2].map((i) => `<circle cx="${22 + i * 44}" cy="100" r="6" fill="var(--leaf)"/>`).join("")}${conejo(190, 76)}${[0, 1, 2, 3, 4, 5].map((i) => `<circle cx="${150 + i * 18}" cy="100" r="6" fill="var(--inf)"/>`).join("")}${etq(70, 130, "lento", "var(--leaf)", 15)}${etq(196, 130, "rápido", "var(--inf)", 15)}${rot(130, 164, "¿Caracol o conejo?", { color: "var(--pen)", size: 14 })}`),
    },
    {
      html: `<h3>¿Qué es el ritmo?</h3><p>El <mark>ritmo</mark> es cómo se ordenan los sonidos largos y cortos.</p><p>El pulso siempre va igual. El ritmo, en cambio, puede <b>cambiar</b>: unas veces un sonido, otras veces dos rápidos.</p><p>Cuando cantamos una canción, la letra lleva su ritmo. Si damos palmas con la letra, ¡estamos tocando el ritmo!</p><p>Pulso y ritmo van siempre juntos.</p>`,
      svg: svg("Arriba el pulso con puntos iguales; abajo el ritmo con palmas de distinta duración", `${etq(34, 62, "pulso", "var(--red)", 13)}${[0, 1, 2, 3].map((i) => corazon(86 + i * 46, 60, 0.9)).join("")}${etq(34, 112, "ritmo", "var(--inf)", 13)}${negra(86, 120)}${corcheas(124, 120)}${negra(188, 120)}${negra(226, 120)}${rot(130, 164, "El ritmo cambia, el pulso no", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>El ritmo de las palabras</h3><p>Las palabras también tienen <mark>ritmo</mark>. Damos una palmada en cada trozo.</p><p>«Sol» tiene <b>una</b> palmada. «Ga-to» tiene <b>dos</b>. «Ma-ri-po-sa» tiene <b>cuatro</b>.</p><p>Prueba con tu nombre. ¿Cuántas palmadas tiene? «Lu-cí-a» tiene tres. «Juan» tiene una. ¡Cada nombre suena distinto!</p><p>Prueba también con los nombres de tus amigos.</p>`,
      svg: svg("Las palabras sol, ga-to y ma-ri-po-sa con una mano por cada sílaba", `${[["sol", 1], ["ga-to", 2], ["ma-ri-po-sa", 4]].map(([w, n], r) => `${rot(60, 52 + r * 44, w, { size: 15, color: "var(--pen)" })}${[...Array(n)].map((_, i) => palma(130 + i * 30, 46 + r * 44)).join("")}`).join("")}${rot(130, 172, "Una palmada por trozo", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>«Ta» y «ti-ti»</h3><p>Los músicos tienen dibujos para el ritmo.</p><p>La <b>negra</b> es un sonido en un pulso. Decimos <mark>«ta»</mark>.</p><p>Dos <b>corcheas</b> unidas son dos sonidos rápidos en un pulso. Decimos <mark>«ti-ti»</mark>.</p><p>Lee: ta, ta, ti-ti, ta. ¡Ahora con palmas! Ya sabes leer tu primer ritmo musical.</p><p>Inventa otros.</p>`,
      svg: svg("Ritmo escrito: negra, negra, dos corcheas, negra, con ta y ti-ti debajo", `<path d="M20 112 H240" stroke="var(--line)" stroke-width="2"/>${negra(44, 110)}${negra(96, 110)}${corcheas(140, 110)}${negra(212, 110)}${etq(48, 140, "ta", "var(--pen)", 16)}${etq(100, 140, "ta", "var(--pen)", 16)}${etq(158, 140, "ti-ti", "var(--inf)", 16)}${etq(216, 140, "ta", "var(--pen)", 16)}${rot(130, 168, "Leemos el ritmo", { color: "var(--pen)", size: 14 })}`),
    },
    {
      html: `<h3>Ritmos con el cuerpo</h3><p>Con el cuerpo podemos hacer <mark>percusión corporal</mark>: tocar ritmos como si fuéramos un tambor.</p><p>Probamos: <b>pies</b>, <b>rodillas</b>, <b>palmas</b>, <b>pitos</b>. De abajo arriba, suena cada vez más agudo.</p><p>Repite: pie, pie, palma. Pie, pie, palma. ¡Ya tienes un ritmo!</p><p>Después prueba: rodilla, rodilla, palma, pitos. Inventa tú otro ritmo y enséñaselo a un amigo.</p>`,
      svg: svg("Un niño hace percusión corporal: pies, rodillas, palmas y chasquidos de dedos", `${nino(80, 150, { c: "var(--pen)", pose: "palmas", s: 1.4 })}${[["pitos", 58], ["palmas", 84], ["rodillas", 110], ["pies", 136]].map(([t, y], i) => `<path d="M${116} ${y} H170" stroke="var(--line)" stroke-width="2" stroke-dasharray="3 3"/>${etq(206, y + 4, t, ["var(--bac)", "var(--inf)", "var(--leaf)", "var(--pen)"][i], 14)}`).join("")}${suelo(150)}${rot(130, 172, "Percusión corporal", { color: "var(--pen)" })}`),
      video: { id: "H1rFDZ5Lf3I", titulo: "Clap clap sound: percusión corporal", canal: "La profe de música emmd", vistas: 11275815 },
    },
    {
      html: `<h3>¿Para qué sirve? Movernos juntos</h3><p>Seguir el pulso nos ayuda a hacer cosas <mark>juntos</mark>.</p><p>Una banda de música marcha al mismo paso. Al saltar a la comba, seguimos el ritmo de la cuerda.</p><p>Bailando en grupo, todos se mueven a la vez. Y cantando juntos, nadie se adelanta ni se queda atrás. ¡El pulso nos une!</p>`,
      svg: svg("Tres niños marchan en fila al mismo paso tocando un tambor", `${["var(--pen)", "var(--inf)", "var(--leaf)"].map((c, i) => nino(56 + i * 70, 150, { c, pose: "corre", s: 0.95, nina: i === 1 })).join("")}<g transform="translate(206 140)"><path d="M-14 -16 V0 a14 4 0 0 0 28 0 V-16" fill="var(--red)"/><ellipse cx="0" cy="-16" rx="14" ry="4" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/></g>${[0, 1, 2, 3].map((i) => etq(36 + i * 60, 40, "un, dos", "var(--muted)", 12)).join("")}${suelo(150)}${rot(130, 172, "Todos al mismo paso", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Juego: el eco</h3><p>En las montañas, el <mark>eco</mark> repite lo que gritas.</p><p>Vamos a jugar a ser eco. El profe hace un ritmo con palmas. Por ejemplo: <b>ta, ta, ti-ti, ta</b>.</p><p>Toda la clase lo <b>repite</b> igual. Después, otro niño inventa un ritmo y los demás hacen de eco. ¿Lo repetís sin equivocaros?</p>`,
      svg: svg("Una niña da palmas en un bocadillo y la clase repite el mismo ritmo en otro bocadillo", `${nino(60, 150, { c: "var(--inf)", nina: true, pose: "palmas", s: 1.1 })}${bocadillo(70, 36, 110, "ta ta ti-ti ta", 13)}${nino(170, 150, { c: "var(--pen)", pose: "palmas", s: 0.9 })}${nino(214, 150, { c: "var(--leaf)", pose: "palmas", s: 0.9 })}${bocadillo(194, 74, 110, "ta ta ti-ti ta", 13)}${suelo(150)}${rot(130, 172, "¡Eco, eco!", { color: "var(--pen)" })}`),
    },
  ],
  figura: {
    titulo: "Pulso y ritmo",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Arriba el pulso con corazones iguales; abajo un ritmo escrito con negras y corcheas: ta, ta, ti-ti, ta">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      <rect x="20" y="20" width="600" height="118" rx="14" fill="var(--card)" stroke="var(--red)" stroke-width="3"/>
      <rect x="20" y="158" width="600" height="122" rx="14" fill="var(--card)" stroke="var(--inf)" stroke-width="3"/>
      ${big(100, 86, "PULSO", "var(--red)", 26)}${[0, 1, 2, 3].map((i) => corazon(250 + i * 100, 80, 2.6)).join("")}
      ${big(100, 226, "RITMO", "var(--inf)", 26)}
      <g transform="translate(240 240) scale(1.7)">${negra(0, 0, "var(--pen)")}</g><g transform="translate(340 240) scale(1.7)">${negra(0, 0, "var(--pen)")}</g><g transform="translate(410 240) scale(1.7)">${corcheas(0, 0, "var(--inf)")}</g><g transform="translate(550 240) scale(1.7)">${negra(0, 0, "var(--pen)")}</g>
      ${rot(280, 270, "ta", { size: 18, color: "var(--pen)" })}${rot(380, 270, "ta", { size: 18, color: "var(--pen)" })}${rot(496, 270, "ti-ti", { size: 18, color: "var(--inf)" })}${rot(590, 270, "ta", { size: 18, color: "var(--pen)" })}
    </svg>`,
  },
  video: { id: "qkJgGqbeECQ", titulo: "Canción rítmica: El ritmo que vamos a hacer", canal: "El Pequeño Caracolito", vistas: 604508, megusta: 5345, busqueda: "el pulso musical para niños primaria" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuántas palmadas tiene «pelota»?",
      pasos: ["Decimos la palabra despacio: pe-lo-ta.", "Damos una palmada en cada trozo.", "Contamos: una, dos, tres."],
      resultado: "pelota tiene 3 palmadas." },
    { enunciado: "Lee este ritmo: ta, ti-ti, ta, ta.",
      pasos: ["«Ta» es un sonido en un pulso: una palmada.", "«Ti-ti» son dos palmadas rápidas en un pulso.", "Damos palmas en orden: una, dos rápidas, una, una."],
      resultado: "palma · palma-palma · palma · palma." },
    { enunciado: "Suena una nana. ¿El pulso es rápido o lento?",
      pasos: ["Escuchamos con atención.", "La música es tranquila, para dormir.", "Los latidos van despacio, como un caracol."],
      resultado: "el pulso es lento." },
  ],
  errores: [
    "Acelerar el pulso sin darse cuenta: el pulso va siempre igual.",
    "Confundir pulso y ritmo: el pulso no cambia; el ritmo sí.",
    "Dar palmas muy fuertes y desordenadas: mejor suaves y juntos.",
    "Contar mal los trozos de una palabra: hay que decirla despacio.",
  ],
  ejercicios: [
    { q: "Pon la mano en el pecho y siente tu pulso.", sol: "Debe notar el latido del corazón." },
    { q: "Anda por la clase siguiendo el pulso de una canción.", sol: "Un paso en cada pulso, sin correr ni pararse." },
    { q: "Muévete lento como un caracol y rápido como un conejo.", sol: "Primero lento y luego rápido." },
    { q: "¿Cuántas palmadas tiene «sol»? ¿Y «gato»?", sol: "«Sol», 1. «Ga-to», 2." },
    { q: "Da palmadas con tu nombre.", sol: "Una palmada por cada trozo del nombre." },
    { q: "Lee con palmas: ta, ta, ta, ta.", sol: "Cuatro palmadas iguales." },
    { q: "Lee con palmas: ti-ti, ti-ti, ta.", sol: "Dos rápidas, dos rápidas y una." },
    { q: "Haz este ritmo corporal: pie, pie, palma.", sol: "Dos pisotones y una palmada, y repetir." },
    { q: "Haz de eco: tu familia da un ritmo y tú lo repites.", sol: "Debe repetir el mismo ritmo, igual." },
    { q: "Di una actividad donde todos van al mismo paso.", sol: "Por ejemplo: una banda que marcha o un baile en grupo." },
  ],
  quiz: [
    { q: "El pulso de la música es como…", o: ["el latido del corazón", "un grito", "el silencio"], a: 0, e: "Se repite siempre igual." },
    { q: "El pulso va…", o: ["siempre igual", "cada vez distinto", "a saltos"], a: 0, e: "Regular, como un reloj." },
    { q: "Una nana tiene el pulso…", o: ["lento", "muy rápido", "sin pulso"], a: 0, e: "Es tranquila." },
    { q: "Un conejo que salta es como un pulso…", o: ["rápido", "lento", "silencioso"], a: 0, e: "Rápido." },
    { q: "El ritmo…", o: ["puede cambiar", "nunca cambia", "no existe"], a: 0, e: "Combina sonidos largos y cortos." },
    { q: "¿Cuántas palmadas tiene «ma-ri-po-sa»?", o: ["Cuatro", "Dos", "Una"], a: 0, e: "Ma-ri-po-sa: cuatro." },
    { q: "La negra se lee…", o: ["«ta»", "«ti-ti»", "«pum-pum»"], a: 0, e: "Un sonido en un pulso." },
    { q: "Dos corcheas se leen…", o: ["«ti-ti»", "«ta»", "«la»"], a: 0, e: "Dos sonidos rápidos." },
    { q: "La percusión corporal es…", o: ["hacer ritmos con el cuerpo", "pintar el cuerpo", "dormir"], a: 0, e: "Palmas, pies, rodillas…" },
    { q: "En el juego del eco…", o: ["repetimos el ritmo", "nos callamos", "corremos"], a: 0, e: "Como el eco de la montaña." },
  ],
  examen: [
    { q: "¿Qué es el pulso?", o: ["El latido regular de la música", "Un instrumento", "Un baile"], a: 0, e: "Se repite siempre igual." },
    { q: "¿Cuántas palmadas tiene «sol»?", o: ["Una", "Dos", "Tres"], a: 0, e: "Sol: una." },
    { q: "«Ti-ti» son…", o: ["dos sonidos rápidos", "un sonido largo", "silencio"], a: 0, e: "Dos corcheas." },
    { q: "Para marchar juntos seguimos…", o: ["el pulso", "el silencio", "los colores"], a: 0, e: "Todos al mismo paso." },
  ],
  feynman: ["Qué es el pulso de una canción", "Qué diferencia hay entre pulso y ritmo", "Cómo se leen «ta» y «ti-ti»"],
  mapa: mapa("PULSO Y RITMO", "var(--pri)", [
    ["Pulso", "latido que se repite igual", "var(--red)"],
    ["Rápido y lento", "conejo · caracol", "var(--leaf)"],
    ["Ritmo", "sonidos largos y cortos", "var(--inf)"],
    ["Leer", "ta (negra) · ti-ti (corcheas)", "var(--pen)"],
  ], 240),
  tarjetas: [
    ["¿Qué es el pulso?", "El latido de la música, siempre igual."],
    ["¿A qué se parece el pulso?", "Al latido del corazón o al tic-tac del reloj."],
    ["¿Qué es el ritmo?", "Cómo se ordenan los sonidos largos y cortos."],
    ["¿El pulso cambia?", "No, va siempre igual."],
    ["¿Cuántas palmadas tiene «gato»?", "Dos: ga-to."],
    ["¿Cómo se lee la negra?", "«Ta»."],
    ["¿Cómo se leen dos corcheas?", "«Ti-ti»."],
    ["¿Qué es la percusión corporal?", "Hacer ritmos con el cuerpo."],
  ],
  familias: [
    "Poned una canción y caminad juntos por casa siguiendo el pulso.",
    "Dad palmadas con los nombres de la familia: «pa-pá», «a-bue-la»…",
    "Jugad al eco: uno inventa un ritmo con palmas y el otro lo repite.",
    "Escuchad una canción rápida y una lenta y moveos como conejo o caracol.",
  ],
  profesores: PROF("Música: pulso, tempo (rápido y lento) y ritmo; ritmo de las palabras; lectura con sílabas rítmicas (ta, ti-ti) y percusión corporal en juegos de eco", ["Caminar por el aula al pulso de un pandero que cambia de velocidad.", "Tarjetas de ritmo con negras y corcheas para leer con palmas.", "Juego del eco en círculo con percusión corporal."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
