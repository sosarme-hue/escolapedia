// Infantil 4 años · Descubrimiento y exploración del entorno: los medios de transporte.
const { marco, dibujos, lista, ic, t, nube, sol, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "4-anos",
  titulo: "Los medios de transporte",
  minutos: 15,
  objetivos: ["Nombrar medios de transporte", "Clasificarlos por tierra, agua y aire", "Conocer normas para viajar seguros"],
  claves: ["transporte", "tierra", "agua", "aire"],
  pregunta: {
    texto: "Quieres ir a una isla en medio del mar. ¿En qué puedes viajar?",
    respuesta: "En <mark>barco</mark>, que va por el agua, o en <mark>avión</mark>, que va por el aire. En coche no se puede, ¡porque no hay carretera!",
  },
  bloques: [
    {
      html: `<h3>Para ir de un sitio a otro</h3><p>Los <mark>medios de transporte</mark> nos llevan de un lugar a otro.</p><p>Llevan personas y también cosas: comida, cartas o juguetes. Unos son grandes y otros pequeños. Hoy vamos a conocer muchos.</p>`,
      svg: dibujos("Coche, autobús, tren, barco, avión y bici", [["coche", "coche", "var(--red)"], ["autobus", "autobús", "var(--inf)"], ["tren", "tren", "var(--pen)"], ["barco", "barco", "var(--water)"], ["avion", "avión", "var(--pen)"], ["bici", "bici", "var(--red)"]]),
    },
    {
      html: `<h3>Por tierra</h3><p>Por la carretera van el <mark>coche</mark>, el <mark>autobús</mark>, el camión, la moto y la bici.</p><p>El <mark>tren</mark> va por las vías. ¡Chu, chu! Siempre por su sitio y con cuidado.</p>`,
      svg: marco("Una carretera con coche, autobús y bici; vías con un tren", `<rect x="0" y="92" width="260" height="34" fill="var(--muted)" opacity=".35"/><path d="M0 109 H260" stroke="#fff" stroke-width="3" stroke-dasharray="12 10"/>${ic("coche", 50, 96, 1.2)}${ic("autobus", 130, 92, 1.2)}${ic("bici", 210, 96, 1.1)}<path d="M0 160 H260 M0 168 H260" stroke="var(--ink)" stroke-width="2"/>${[...Array(13)].map((_, i) => `<path d="M${10 + i * 20} 156 V172" stroke="#a0703c" stroke-width="3"/>`).join("")}${ic("tren", 130, 144, 1.2)}${t(130, 40, "por tierra", { color: "var(--inf)", size: 20 })}`),
    },
    {
      html: `<h3>Por agua y por aire</h3><p>Por el <mark>agua</mark> van el barco, la barca y el submarino.</p><p>Por el <mark>aire</mark> vuelan el avión, el helicóptero y el globo. ¡Y el cohete llega hasta el espacio!</p>`,
      svg: marco("En el cielo un avión, un helicóptero y un globo; en el mar un barco", `${sol(230, 26, 10)}${nube(60, 30, 0.8)}${ic("avion", 120, 40, 1.2)}${ic("helicoptero", 190, 70, 1.1)}${ic("globo", 50, 76, 1.1)}<rect x="0" y="128" width="260" height="52" fill="var(--water)" opacity=".6"/>${ic("barco", 140, 124, 1.5)}${t(40, 160, "agua", { color: "#fff", size: 16 })}${t(220, 112, "aire", { color: "var(--pen)", size: 16 })}`),
    },
    {
      html: `<h3>Viajar seguros</h3><p>En el coche voy en mi <mark>silla</mark> y con el <mark>cinturón</mark> abrochado.</p><p>En la bici llevo <b>casco</b>. En el autobús me siento y no me levanto hasta que para.</p>`,
      svg: lista("Viajar seguros: silla y cinturón, casco en la bici, sentado en el autobús", [["Silla y cinturón", "var(--red)"], ["Casco en la bici", "var(--inf)"], ["Sentado en el autobús", "var(--pen)"]], { titulo: "Voy seguro" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Gracias a los transportes podemos <mark>ir al cole</mark>, visitar a los abuelos o ir de vacaciones.</p><p>Andar y la bici no ensucian el aire. ¡Son los transportes más limpios! ¡Vamos andando siempre que podamos!</p>`,
      svg: dibujos("Ir al cole, visitar a la abuela, irse de vacaciones", [["escuela", "al cole", "var(--pen)"], ["abuela", "abuelos", "var(--inf)"], ["isla", "vacaciones", "var(--leaf)"]]),
    },
    {
      html: `<h3>Juego: ¿por dónde va?</h3><p>El adulto dice un transporte y tú haces un gesto: <mark>tierra</mark>, te tocas los pies; <mark>agua</mark>, haces olas; <mark>aire</mark>, abres los brazos.</p><p>¿Avión? ¡A volar! ¿Barco? ¡Haz olas con los brazos!</p>`,
      svg: dibujos("Tierra, agua y aire con coche, barco y avión", [["coche", "tierra", "var(--inf)"], ["barco", "agua", "var(--water)"], ["avion", "aire", "var(--pen)"]], { titulo: "¿Por dónde va?" }),
    },
  ],
  figura: figura("Por tierra, agua y aire", "Coche, tren, barco, avión y cohete", [["coche", "coche", "var(--red)"], ["tren", "tren", "var(--pen)"], ["barco", "barco", "var(--water)"], ["avion", "avión", "var(--pen)"], ["cohete", "cohete", "var(--red)"]]),
  video: vid("svqt482WVns", "Sonidos de transportes para niños. Los medios de transporte", "BebéTV", 10806730, "medios de transporte canción infantil"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Clasificamos juguetes de transporte.", pasos: ["En una caja, los de tierra: coche, tren, camión.", "En otra, los de agua: barco.", "En otra, los de aire: avión, helicóptero."], resultado: "tres grupos: tierra, agua y aire." },
    { enunciado: "¿Cómo vamos al cole?", pasos: ["Pensamos si vamos andando, en coche o en autobús.", "Recordamos una norma de seguridad.", "La decimos en voz alta."], resultado: "por ejemplo: «voy en coche, con el cinturón puesto»." },
  ],
  errores: [
    "Pensar que el tren va por la carretera: va por las vías.",
    "Creer que el helicóptero es un pájaro: es un transporte que vuela.",
    "Desabrocharse el cinturón en un viaje corto: siempre abrochado.",
  ],
  ejercicios: [
    { q: "Cuenta los coches rojos que veas en un paseo.", sol: "Nota para la familia: probad luego con autobuses o motos." },
    { q: "Separa tus juguetes en tierra, agua y aire.", sol: "Revisad juntos cada grupo." },
    { q: "Dibuja el transporte que más te gusta.", sol: "Preguntadle por dónde va." },
    { q: "Imita el sonido del tren, del avión y del barco.", sol: "Chu, chu; brrr; buuu." },
    { q: "Ponte el casco antes de subir a la bici o al patinete.", sol: "Hacedlo siempre, aunque sea un rato." },
    { q: "Di cómo vas al cole.", sol: "Andando, en coche, en autobús…" },
  ],
  quiz: [
    { q: "¿Qué va por el agua?", o: ["El coche", "El barco", "La bici"], a: 1, e: "El barco navega." },
    { q: "¿Qué vuela?", o: ["El tren", "El camión", "El avión"], a: 2, e: "El avión va por el aire." },
    { q: "El tren va por…", o: ["las vías", "el mar", "el cielo"], a: 0, e: "Por las vías del tren." },
    { q: "En el coche voy…", o: ["de pie", "en el maletero", "con el cinturón"], a: 2, e: "En mi silla y abrochado." },
    { q: "En la bici me pongo…", o: ["el casco", "un gorro de fiesta", "nada"], a: 0, e: "El casco protege la cabeza." },
    { q: "¿Qué va por la carretera?", o: ["El barco", "El autobús", "El helicóptero"], a: 1, e: "El autobús va por tierra." },
  ],
  examen: [
    { q: "Para ir a una isla puedo ir en…", o: ["bici", "barco", "tren"], a: 1, e: "Por el agua, en barco." },
    { q: "El helicóptero va por…", o: ["el aire", "el agua", "las vías"], a: 0, e: "Vuela." },
    { q: "¿Qué transporte no ensucia el aire?", o: ["El avión", "El camión", "La bici"], a: 2, e: "La bici va con mis piernas." },
  ],
  feynman: ["Qué es un medio de transporte", "Transportes de tierra, agua y aire", "Normas para viajar seguros"],
  mapa: mapa("TRANSPORTES", "var(--inf)", [
    ["Tierra", "coche, tren, bici", "var(--red)"],
    ["Agua", "barco, barca", "var(--water)"],
    ["Aire", "avión, helicóptero", "var(--pen)"],
    ["Seguro", "cinturón y casco", "var(--leaf)"],
  ], 220),
  tarjetas: [
    ["¿Por dónde va el barco?", "Por el agua"],
    ["¿Por dónde va el avión?", "Por el aire"],
    ["¿Por dónde va el tren?", "Por las vías"],
    ["En el coche me pongo…", "El cinturón"],
    ["En la bici me pongo…", "El casco"],
    ["Transporte que llega al espacio", "El cohete"],
  ],
  familias: [
    "En cada viaje, nombrad juntos los transportes que veis.",
    "Montad una vía de tren o una carretera con cinta de carrocero en el suelo.",
    "Si podéis, haced un viaje corto en tren, metro o barco.",
    "Repasad las normas: cinturón en el coche y casco en la bici.",
  ],
  profesores: PROF("Descubrimiento y exploración del entorno: los medios de transporte; clasificación por el medio en que se desplazan y normas básicas de seguridad vial", ["Clasificación en tres murales: tierra, agua y aire.", "Circuito con triciclos y señales.", "Canciones y sonidos de transportes."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
