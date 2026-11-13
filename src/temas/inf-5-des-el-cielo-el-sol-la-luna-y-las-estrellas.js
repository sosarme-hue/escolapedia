// Infantil 5 años · Descubrimiento y exploración del entorno: el cielo, el sol, la luna y las estrellas.
const { mapa } = require("./_util");
const { ic, vin, dibujos, mural, t, FUENTES, PROF, DE, vid, nota } = require("./_inf5a");

const NOCHE = "#1d2a4d";
const estrellas = (pts) => pts.map(([x, y, s]) => ic("estrella", x, y, s)).join("");
// Fases de la luna: llena, cuarto, nueva (círculo oscuro).
const fase = (x, y, tipo, r = 22) => tipo === "llena" ? `<circle cx="${x}" cy="${y}" r="${r}" fill="var(--sun)"/>` : tipo === "nueva" ? `<circle cx="${x}" cy="${y}" r="${r}" fill="#36456e" stroke="#5a6a94" stroke-width="2"/>` : `<circle cx="${x}" cy="${y}" r="${r}" fill="#36456e"/><path d="M${x} ${y - r} A${r} ${r} 0 0 1 ${x} ${y + r}z" fill="var(--sun)"/>`;

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "5-anos",
  titulo: "El cielo: el sol, la luna y las estrellas",
  minutos: 15,
  objetivos: ["Saber que el sol nos da luz y calor durante el día", "Observar que la luna cambia de forma", "Saber que las estrellas son soles muy lejanos"],
  claves: ["sol", "luna", "estrellas", "día", "noche", "Tierra"],
  pregunta: { texto: "¿Adónde se va el sol por la noche?", respuesta: "¡A ningún sitio! La <mark>Tierra gira</mark> como una peonza y nosotros nos quedamos de espaldas al sol. Entonces es de noche." },
  bloques: [
    {
      html: `<h3>El sol</h3><p>El <mark>sol</mark> es una estrella enorme y muy caliente. Nos da <b>luz</b> y <b>calor</b>.</p><p>Gracias al sol crecen las plantas y es de día. ¡Nunca lo mires directamente: hace daño a los ojos!</p>`,
      svg: dibujos("El sol da luz, calor y hace crecer las plantas", [["sol", "luz", "var(--inf)"], ["maceta", "plantas", "var(--leaf)"], ["ojo", "no lo mires", "var(--red)"]], { titulo: "El sol" }),
    },
    {
      html: `<h3>El día y la noche</h3><p>La <mark>Tierra</mark>, donde vivimos, da vueltas como una peonza.</p><p>Cuando nuestra casa mira al sol, es <b>de día</b>. Cuando le da la espalda, es <b>de noche</b>.</p>`,
      svg: vin("La Tierra girando: la parte que mira al sol es de día y la otra es de noche", `${ic("sol", 46, 90, 2)}<circle cx="180" cy="90" r="48" fill="var(--water)"/><path d="M180 42 A48 48 0 0 1 180 138z" fill="${NOCHE}" opacity=".8"/>${t(150, 160, "día", { size: 17, color: "var(--inf)" })}${t(212, 160, "noche", { size: 17, color: "var(--pen)" })}<path d="M140 30 q40 -18 80 0" stroke="var(--muted)" stroke-width="3" fill="none"/><path d="M212 22 L220 30 L210 34" stroke="var(--muted)" stroke-width="3" fill="none"/>`),
    },
    {
      html: `<h3>La luna</h3><p>Por la noche vemos la <mark>luna</mark>. No tiene luz propia: brilla porque le da la luz del sol.</p><p>A veces la vemos redonda, otras como una raja de melón y otras no la vemos.</p>`,
      svg: vin("Fases de la luna: llena, cuarto y nueva", `<rect width="260" height="180" rx="14" fill="${NOCHE}"/>${fase(50, 80, "llena", 26)}${fase(130, 80, "cuarto", 26)}${fase(210, 80, "nueva", 26)}${t(50, 140, "llena", { size: 16, color: "#ffffff" })}${t(130, 140, "cuarto", { size: 16, color: "#ffffff" })}${t(210, 140, "nueva", { size: 16, color: "#ffffff" })}`),
    },
    {
      html: `<h3>Las estrellas</h3><p>Las <mark>estrellas</mark> son soles como el nuestro, pero están tan lejos que se ven como puntitos.</p><p>Hay muchísimas: más que granos de arena en la playa. Algunas forman dibujos en el cielo.</p>`,
      svg: vin("Cielo de noche lleno de estrellas", `<rect width="260" height="180" rx="14" fill="${NOCHE}"/>${estrellas([[30, 30, 0.4], [70, 60, 0.6], [120, 28, 0.45], [170, 70, 0.7], [220, 36, 0.5], [40, 110, 0.5], [100, 130, 0.35], [150, 120, 0.55], [210, 140, 0.45], [236, 96, 0.35], [90, 90, 0.3], [190, 30, 0.3]])}<path d="M70 60 L120 28 L170 70" stroke="#ffffff" stroke-width="1" opacity=".5" fill="none"/>`),
    },
    {
      html: `<h3>¿Para qué sirve? Mirar el cielo</h3><p>Mirando el cielo sabemos si es <mark>de día o de noche</mark> y qué tiempo hace.</p><p>Hace mucho, los marineros usaban las estrellas para no perderse. ¡Y los astronautas viajan al espacio!</p>`,
      svg: vin("Un cohete viaja hacia la luna entre estrellas", `<rect width="260" height="180" rx="14" fill="${NOCHE}"/>${fase(210, 50, "llena", 28)}<g transform="translate(90 110) rotate(35)">${ic("cohete", 0, 0, 2)}</g>${estrellas([[40, 30, 0.4], [150, 40, 0.35], [230, 140, 0.45], [30, 150, 0.35]])}`),
    },
    {
      html: `<h3>Juego: el diario de la luna</h3><p>Durante una semana, mirad la <mark>luna</mark> cada noche desde la ventana.</p><p>Dibuja cada día su forma en un cuadrito. ¿Crece o se hace pequeña? Si no está, dibuja el cielo oscuro.</p>`,
      svg: vin("Siete cuadritos con la luna dibujada cada noche", `${["nueva", "cuarto", "cuarto", "llena", "llena", "cuarto", "nueva"].map((f, i) => `<rect x="${10 + i * 35}" y="60" width="32" height="50" rx="5" fill="${NOCHE}"/>${fase(26 + i * 35, 85, f, 10)}`).join("")}${t(130, 140, "lunes → domingo", { size: 16, color: "var(--muted)" })}`, "Mi diario de la luna"),
    },
  ],
  figura: {
    titulo: "Lo que hay en el cielo",
    svg: mural("Mural: el sol da luz y calor, la luna brilla de noche, las estrellas son soles lejanos y la Tierra gira", [["sol", "sol", "luz y calor", "var(--inf)"], ["luna", "luna", "cambia de forma", "var(--pen)"], ["estrella", "estrellas", "soles lejanos", "var(--sun)"], ["tierra", "Tierra", "gira: día y noche", "var(--leaf)"]]),
  },
  video: vid("PJqNrBvI8Vk", "Las estrellas, la luna y el sol para niños de preescolar", "Mundo Kuku", 1040741, "sol luna estrellas para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Hacemos el día y la noche con una linterna y una pelota.", pasos: ["La linterna es el sol; la pelota, la Tierra. Pegamos un muñequito en la pelota.", "Giramos la pelota despacio.", "Miramos cuándo le da la luz al muñequito y cuándo no."], resultado: "con luz es de día; sin luz, de noche." },
    { enunciado: "¿Por qué brilla la luna?", pasos: ["La luna no tiene luz propia.", "El sol la ilumina, como la linterna a la pelota.", "Vemos la parte iluminada."], resultado: "brilla porque le da la luz del sol." },
  ],
  errores: [
    "Pensar que el sol se apaga o se esconde por la noche: es la Tierra la que gira.",
    "Creer que la luna tiene luz propia.",
    "Mirar el sol directamente: hace daño a los ojos.",
  ],
  ejercicios: [
    { q: "Haz el día y la noche con una linterna y una pelota.", sol: nota("a oscuras se ve mucho mejor.") },
    { q: "Mira la luna una semana y dibuja su forma cada noche.", sol: nota("una aplicación de fases lunares os dirá qué esperar.") },
    { q: "Cuenta las estrellas que veas desde la ventana.", sol: nota("en el campo se ven muchas más que en la ciudad; probad en una excursión.") },
    { q: "Dibuja un cielo de día y uno de noche.", sol: nota("preguntad qué hay en cada uno.") },
    { q: "Mira tu sombra por la mañana y por la tarde.", sol: nota("la sombra cambia porque el sol está en otro sitio del cielo.") },
    { q: "Construye un cohete con un rollo de papel.", sol: nota("hablad de los astronautas que han ido a la luna.") },
  ],
  quiz: [
    { q: "¿Qué nos da luz y calor?", o: ["el sol", "la luna", "una nube"], a: 0, e: "El sol." },
    { q: "La luna se ve sobre todo…", o: ["de noche", "nunca", "solo en verano"], a: 0, e: "De noche." },
    { q: "Las estrellas son…", o: ["soles lejanos", "luces de coches", "trocitos de luna"], a: 0, e: "Soles muy lejanos." },
    { q: "¿Puedo mirar el sol directamente?", o: ["no", "sí", "un rato largo"], a: 0, e: "No, hace daño." },
    { q: "Vivimos en el planeta…", o: ["Tierra", "Luna", "Sol"], a: 0, e: "La Tierra." },
    { q: "La luna…", o: ["cambia de forma", "es siempre igual", "es cuadrada"], a: 0, e: "La vemos cambiar." },
  ],
  examen: [
    { q: "Es de noche porque…", o: ["la Tierra gira", "el sol se apaga", "llueve"], a: 0, e: "La Tierra gira." },
    { q: "La luna brilla porque…", o: ["le da el sol", "tiene bombillas", "está caliente"], a: 0, e: "Le da la luz del sol." },
    { q: "El sol es…", o: ["una estrella", "un planeta", "una nube"], a: 0, e: "Una estrella." },
  ],
  feynman: ["Qué nos da el sol", "Por qué hay día y noche", "Cómo es la luna y qué son las estrellas"],
  mapa: mapa("EL CIELO", "var(--pen)", [
    ["Sol", "luz y calor · estrella", "var(--inf)"],
    ["Día y noche", "la Tierra gira", "var(--leaf)"],
    ["Luna", "cambia de forma", "var(--pen)"],
    ["Estrellas", "soles muy lejos", "var(--sun)"],
  ], 220),
  tarjetas: [
    ["¿Qué nos da el sol?", "Luz y calor"],
    ["¿Por qué es de noche?", "Porque la Tierra gira"],
    ["¿La luna tiene luz propia?", "No, la ilumina el sol"],
    ["Las estrellas son…", "Soles muy lejanos"],
    ["¿Miro el sol directamente?", "Nunca"],
    ["¿Dónde vivimos?", "En la Tierra"],
  ],
  familias: [
    "Salid a mirar el cielo de noche, mejor lejos de las luces de la ciudad.",
    "Llevad un diario de la luna durante un mes.",
    "Haced el día y la noche con una linterna y una pelota.",
    "Usad gorra y crema al sol, y explicad por qué.",
  ],
  profesores: PROF(DE, "Exploración de la naturaleza: fenómenos del entorno (el día y la noche, el sol, la luna y sus fases, las estrellas) y curiosidad científica", ["Maqueta del día y la noche con linterna y globo terráqueo.", "Calendario lunar de clase rellenado por las familias.", "Planetario hecho con una caja y agujeros a contraluz."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
