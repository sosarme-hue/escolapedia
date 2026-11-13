// Música 2º de Primaria: sonidos agudos y graves. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, flechaR, pentagrama, negra, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
const raton = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse rx="16" ry="10" fill="${P.gris}"/><circle cx="14" cy="-6" r="7" fill="${P.gris}"/><circle cx="12" cy="-13" r="4" fill="${P.rosa}"/><circle cx="17" cy="-7" r="1.5" fill="var(--ink)"/><path d="M-16 2 q-12 4 -16 -6" stroke="${P.gris}" stroke-width="2" fill="none"/></g>`;
const elefante = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse rx="30" ry="20" fill="#90a4ae"/><circle cx="26" cy="-12" r="14" fill="#90a4ae"/><path d="M36 -6 q8 14 0 26" stroke="#90a4ae" stroke-width="7" fill="none" stroke-linecap="round"/><ellipse cx="18" cy="-14" rx="8" ry="11" fill="#78909c"/><circle cx="30" cy="-16" r="2" fill="var(--ink)"/><rect x="-22" y="14" width="10" height="16" fill="#90a4ae"/><rect x="10" y="14" width="10" height="16" fill="#90a4ae"/></g>`;
const xilo = (x, y) => [0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<rect x="${x + i * 20}" y="${y - 20 + i * 3}" width="16" height="${72 - i * 6}" rx="3" fill="${[P.rojo, P.naranja, P.amarillo, P.verde, P.celeste, P.azul, P.morado, P.rosa][i]}" stroke="var(--ink)" stroke-width="1"/>`).join("");

module.exports = {
  materia: "Música",
  curso: "2-primaria",
  titulo: "Sonidos agudos y graves",
  minutos: 20,
  objetivos: ["Distinguir sonidos agudos (finos) y graves (gordos)", "Relacionar la altura del sonido con el tamaño de instrumentos y animales", "Representar con el cuerpo y con dibujos si un sonido sube o baja"],
  claves: ["altura", "agudo", "grave", "sube", "baja", "xilófono", "pentagrama", "tamaño"],
  pregunta: {
    texto: "Imita a un ratón y luego a un oso. ¿Tu voz suena igual?",
    respuesta: "No. El ratón tiene una voz <mark>aguda</mark>, fina y alta. El oso, una voz <mark>grave</mark>, gorda y baja. Esa diferencia se llama <b>altura</b> del sonido.",
  },
  bloques: [
    {
      html: `<h3>La altura del sonido</h3><p>Los sonidos pueden ser <mark>altos o bajos</mark>, pero no hablamos de lo fuerte que suenan.</p><p>Un sonido <b>agudo</b> es fino, como el de un pito o un pajarito. Un sonido <b>grave</b> es gordo y profundo, como el de un tambor grande o un trueno.</p><p>Esta cualidad se llama <b>altura</b>. ¡Ojo! Agudo no es lo mismo que fuerte.</p>`,
      svg: svg("Un ratón con voz aguda arriba y un elefante con voz grave abajo, unidos por una flecha de altura", `${raton(70, 50, 1.4)}${etq(150, 46, "agudo: fino", P.rojo, 15)}${elefante(70, 128, 1.1)}${etq(168, 132, "grave: gordo", P.azul, 15)}<path d="M228 40 V140" stroke="var(--muted)" stroke-width="3"/><path d="M222 48 l6 -10 l6 10" fill="var(--muted)"/><path d="M222 132 l6 10 l6 -10" fill="var(--muted)"/>`),
    },
    {
      html: `<h3>Agudo no es fuerte</h3><p>Mucha gente <mark>confunde</mark> agudo con fuerte y grave con suave. ¡Son cosas distintas!</p><p>Un pito puede sonar <b>agudo y suave</b> si soplas poco, o <b>agudo y fuerte</b> si soplas mucho.</p><p>Un tambor grande puede sonar <b>grave y suave</b> o <b>grave y fuerte</b>. La altura dice si el sonido es fino o gordo. La intensidad dice si es fuerte o suave.</p>`,
      svg: svg("Cuadro de cuatro casillas: agudo suave, agudo fuerte, grave suave y grave fuerte", `${[["agudo y suave", P.rojo, 0.6], ["agudo y fuerte", P.rojo, 1.2], ["grave y suave", P.azul, 0.6], ["grave y fuerte", P.azul, 1.2]].map(([t, c, k], i) => { const x = 18 + (i % 2) * 118, y = 18 + Math.floor(i / 2) * 76; return `<rect x="${x}" y="${y}" width="106" height="66" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${i < 2 ? `<path d="M${x + 20} ${y + 28} q8 ${-8 * k} 16 0 t16 0 t16 0 t16 0" stroke="${c}" stroke-width="${1.5 + k * 2}" fill="none"/>` : `<path d="M${x + 20} ${y + 28} q16 ${-14 * k} 32 0 t32 0" stroke="${c}" stroke-width="${1.5 + k * 2}" fill="none"/>`}${etq(x + 53, y + 56, t, c, 12)}`; }).join("")}`),
    },
    {
      html: `<h3>Grande, grave; pequeño, agudo</h3><p>Hay una <mark>regla muy útil</mark>: los objetos y animales grandes suelen sonar graves. Los pequeños suelen sonar agudos.</p><p>Un elefante barrita grave; un pollito pía agudo. Un perro grande ladra grave; un perrito pequeño, agudo.</p><p>Con los instrumentos pasa lo mismo: un tambor enorme suena más grave que uno pequeñito. ¡Fíjate en el tamaño!</p>`,
      svg: svg("Dos tambores, uno grande y grave y otro pequeño y agudo, y dos perros, uno grande y otro pequeño", `<g transform="translate(60 92)"><path d="M-40 -40 V20 a40 12 0 0 0 80 0 V-40" fill="${P.rojo}"/><ellipse cx="0" cy="-40" rx="40" ry="12" fill="#ffe0b2" stroke="var(--ink)" stroke-width="1.5"/></g><g transform="translate(150 106)"><path d="M-16 -16 V10 a16 5 0 0 0 32 0 V-16" fill="${P.azul}"/><ellipse cx="0" cy="-16" rx="16" ry="5" fill="#ffe0b2" stroke="var(--ink)" stroke-width="1.5"/></g>${etq(60, 150, "grande: grave", P.azul, 13)}${etq(150, 150, "pequeño:", P.rojo, 12)}${etq(150, 164, "agudo", P.rojo, 12)}${etq(214, 70, "¡Fíjate", "var(--pen)", 13)}${etq(214, 88, "en el", "var(--pen)", 13)}${etq(214, 106, "tamaño!", "var(--pen)", 13)}`),
      video: V("mu2b"),
    },
    {
      html: `<h3>El xilófono</h3><p>En clase de Música usamos el <mark>xilófono</mark> o el metalófono: un instrumento con láminas de distintos tamaños.</p><p>Las láminas <b>largas</b> suenan graves. Las láminas <b>cortas</b> suenan agudas.</p><p>Si tocas de la lámina larga a la corta, el sonido <b>sube</b>, como si subieras una escalera. Si vas de la corta a la larga, el sonido <b>baja</b>. ¡Pruébalo con las baquetas!</p>`,
      svg: svg("Un xilófono de colores con láminas largas a la izquierda que suenan graves y cortas a la derecha que suenan agudas", `${xilo(50, 70)}<rect x="44" y="132" width="172" height="8" rx="3" fill="#8d6e63"/>${etq(60, 160, "graves", P.azul, 13)}${etq(200, 160, "agudas", P.rojo, 13)}${flechaR(70, 34, 190, 34, "var(--pen)")}${etq(130, 26, "el sonido sube", "var(--pen)", 12)}`),
    },
    {
      html: `<h3>Sube y baja</h3><p>Una melodía es como un <mark>camino</mark> que sube y baja.</p><p>Cuando el sonido se vuelve más agudo, decimos que <b>sube</b>. Cuando se vuelve más grave, decimos que <b>baja</b>.</p><p>Podemos acompañarlo con el cuerpo: ponemos las manos en los pies para los graves y en la cabeza para los agudos. Así «vemos» la música con el cuerpo.</p>`,
      svg: svg("Dos niños: uno se agacha con las manos en los pies para el sonido grave y otro estira los brazos arriba para el agudo", `${nino(70, 156, { c: P.azul, pose: "agacha", s: 1.4 })}${etq(70, 172, "grave: abajo", P.azul, 12)}${nino(190, 156, { c: P.rojo, pose: "arriba", s: 1.4, nina: true })}${etq(190, 172, "agudo: arriba", P.rojo, 12)}${flechaR(110, 120, 150, 70, "var(--muted)")}`),
    },
    {
      html: `<h3>Las voces</h3><p>Nuestra voz también tiene <mark>altura</mark>.</p><p>Los niños y las mujeres suelen tener voces más agudas. Muchos hombres tienen voces más graves.</p><p>En un coro se juntan voces agudas y graves y suenan muy bonitas juntas. Prueba a decir tu nombre con voz de ratón y con voz de gigante. ¿Notas cómo cambia la garganta?</p>`,
      svg: svg("Un coro con una niña de voz aguda y un hombre de voz grave cantando juntos", `${nino(80, 150, { c: P.rosa, pose: "canta", s: 1.4, nina: true, boca: "abierta" })}${nino(180, 150, { c: P.azul, pose: "canta", s: 1.7, boca: "abierta" })}${negra(70, 40, P.rojo)}${negra(96, 30, P.rojo)}${negra(200, 62, P.azul)}${negra(226, 72, P.azul)}${etq(80, 172, "aguda", P.rojo)}${etq(180, 172, "grave", P.azul)}`),
    },
    {
      html: `<h3>Agudos y graves en el papel</h3><p>Los músicos escriben la altura en el <mark>pentagrama</mark>: cinco líneas, como una escalera.</p><p>Las notas que se escriben <b>arriba</b> suenan agudas. Las que se escriben <b>abajo</b> suenan graves.</p><p>Antes de saber leer notas, podemos dibujar la música con rayas: una raya alta para el agudo y una raya baja para el grave. ¡Es nuestra primera partitura!</p>`,
      svg: svg("Un pentagrama con notas que suben como una escalera: abajo graves y arriba agudas", `${pentagrama(20, 240, 54, 14)}${[0, 1, 2, 3, 4, 5, 6].map((i) => negra(44 + i * 30, 118 - i * 9, i < 3 ? P.azul : i > 3 ? P.rojo : "var(--pen)")).join("")}${etq(52, 150, "abajo: grave", P.azul)}${etq(70, 30, "arriba: agudo", P.rojo)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Distinguir agudos y graves nos ayuda a <mark>cantar afinado</mark> y a tocar instrumentos.</p><p>También la usamos fuera de la música: el pitido agudo de una alarma nos llama la atención. La sirena de un barco suena grave y se oye muy lejos.</p><p>Los compositores usan los graves para dar miedo o calma y los agudos para dar alegría o nervios.</p>`,
      svg: svg("Un barco con una sirena grave y una alarma con un pitido agudo", `<g transform="translate(70 110)"><path d="M-50 0 h100 l-14 22 h-72z" fill="${P.rojo}"/><rect x="-24" y="-22" width="40" height="22" fill="#eceff1" stroke="var(--ink)"/><rect x="0" y="-40" width="10" height="18" fill="var(--ink)"/></g>${etq(70, 160, "barco: grave", P.azul)}<path d="M40 80 q16 -20 32 0" stroke="${P.azul}" stroke-width="4" fill="none"/><g transform="translate(190 92)"><circle r="26" fill="${P.amarillo}" stroke="var(--ink)" stroke-width="2"/><path d="M0 -14 v14 h10" stroke="var(--ink)" stroke-width="3" fill="none"/></g><path d="M222 60 q4 -4 8 0 t8 0 M222 70 q4 -4 8 0 t8 0" stroke="${P.rojo}" stroke-width="2" fill="none"/>${etq(190, 140, "alarma: aguda", P.rojo)}`),
    },
    {
      html: `<h3>Jugamos al ascensor</h3><p>Todos de pie. La profe toca una nota en el <mark>xilófono o el piano</mark>.</p><p>Si es grave, nos agachamos como si el ascensor bajara al sótano. Si es aguda, nos estiramos de puntillas como si subiera al último piso.</p><p>Si es una nota media, nos quedamos de pie normal. ¡Hay que escuchar muy bien! El que se equivoca hace de director.</p>`,
      svg: svg("Un ascensor con tres pisos: arriba agudo, en medio nota media y abajo grave", `<rect x="80" y="14" width="100" height="152" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${[0, 1, 2].map((i) => `<path d="M80 ${64 + i * 50} H180" stroke="var(--line)" stroke-width="2"/>`).join("")}${nino(130, 60, { c: P.rojo, pose: "arriba", s: 0.7 })}${nino(130, 110, { c: P.verde, s: 0.7 })}${nino(130, 160, { c: P.azul, pose: "agacha", s: 0.7 })}${etq(222, 44, "agudo", P.rojo, 13)}${etq(222, 94, "medio", P.verde, 13)}${etq(222, 144, "grave", P.azul, 13)}${etq(40, 94, "▲▼", "var(--muted)", 18)}`),
    },
  ],
  figura: {
    titulo: "Sonidos agudos y graves",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Agudo: fino, pequeño, arriba; grave: gordo, grande, abajo"><rect width="640" height="300" rx="16" fill="var(--paper)"/><rect x="30" y="30" width="280" height="240" rx="16" fill="var(--card)" stroke="${P.rojo}" stroke-width="3"/><rect x="330" y="30" width="280" height="240" rx="16" fill="var(--card)" stroke="${P.azul}" stroke-width="3"/>${rot(170, 70, "AGUDO", { size: 28, color: P.rojo, w: 800 })}${rot(470, 70, "GRAVE", { size: 28, color: P.azul, w: 800 })}${raton(170, 140, 2)}${elefante(470, 140, 1.6)}${rot(170, 220, "fino · pequeño · arriba", { size: 17 })}${rot(470, 220, "gordo · grande · abajo", { size: 17 })}${rot(170, 252, "pito, pájaro, lámina corta", { size: 13, color: "var(--muted)" })}${rot(470, 252, "tambor, trueno, lámina larga", { size: 13, color: "var(--muted)" })}</svg>`,
  },
  video: V("mu2v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿El canto de un pajarito es agudo o grave?",
      pasos: ["El pájaro es pequeño.", "Su sonido es fino.", "Fino y pequeño es agudo."],
      resultado: "Es agudo." },
    { enunciado: "Tocas un xilófono de la lámina más corta a la más larga. ¿Qué hace el sonido?",
      pasos: ["La lámina corta suena aguda.", "La lámina larga suena grave.", "Vamos de agudo a grave."],
      resultado: "El sonido baja." },
    { enunciado: "Un tambor grande suena muy suave. ¿Es grave o agudo?",
      pasos: ["Suave habla de la intensidad, no de la altura.", "El tambor es grande.", "Grande suena gordo."],
      resultado: "Es grave (y suave)." },
  ],
  errores: [
    "Confundir agudo con fuerte: agudo es fino, fuerte es con mucha intensidad.",
    "Pensar que una lámina larga suena aguda: suena grave.",
    "Decir que un sonido «sube» porque se hace más fuerte: sube cuando se hace más agudo.",
    "Creer que todos los adultos tienen voz grave: muchas voces de mujer son agudas.",
  ],
  ejercicios: [
    { q: "¿Cómo es un sonido agudo?", sol: "Fino y alto, como un pito." },
    { q: "¿Cómo es un sonido grave?", sol: "Gordo y profundo, como un tambor grande." },
    { q: "¿Cómo se llama esta cualidad del sonido?", sol: "La altura." },
    { q: "¿Un elefante tiene voz aguda o grave?", sol: "Grave." },
    { q: "¿Un ratón tiene voz aguda o grave?", sol: "Aguda." },
    { q: "En el xilófono, ¿qué láminas suenan agudas?", sol: "Las cortas." },
    { q: "Si el sonido pasa de grave a agudo, ¿sube o baja?", sol: "Sube." },
    { q: "En el pentagrama, ¿dónde se escriben las notas agudas?", sol: "Arriba." },
    { q: "Di tu nombre con voz de ratón y de gigante.", sol: "Respuesta libre: ratón agudo, gigante grave." },
    { q: "Dibuja con rayas altas y bajas una melodía que sube y baja.", sol: "Respuesta libre: rayas que suben como una escalera y luego bajan." },
  ],
  quiz: [
    { q: "Un sonido fino es…", o: ["agudo", "grave", "fuerte"], a: 0, e: "Agudo." },
    { q: "Un sonido gordo es…", o: ["agudo", "grave", "suave"], a: 1, e: "Grave." },
    { q: "La altura del sonido dice si es…", o: ["agudo o grave", "fuerte o suave", "largo o corto"], a: 0, e: "Altura." },
    { q: "El canto de un pájaro es…", o: ["agudo", "grave", "silencio"], a: 0, e: "Agudo." },
    { q: "Un trueno es…", o: ["agudo", "grave", "fino"], a: 1, e: "Grave." },
    { q: "Las láminas largas del xilófono suenan…", o: ["graves", "agudas", "mudas"], a: 0, e: "Graves." },
    { q: "Si el sonido se hace más agudo…", o: ["sube", "baja", "se para"], a: 0, e: "Sube." },
    { q: "Agudo es lo mismo que fuerte…", o: ["sí", "no", "a veces siempre"], a: 1, e: "Son cosas distintas." },
    { q: "Las cosas grandes suelen sonar…", o: ["graves", "agudas", "más rápido"], a: 0, e: "Graves." },
    { q: "En el pentagrama, las notas de abajo son…", o: ["graves", "agudas", "silencios"], a: 0, e: "Graves." },
  ],
  examen: [
    { q: "Para un sonido agudo en el juego del ascensor…", o: ["nos estiramos", "nos agachamos", "nos sentamos"], a: 0, e: "Arriba." },
    { q: "Un perrito pequeño ladra…", o: ["agudo", "grave", "en silencio"], a: 0, e: "Agudo." },
    { q: "Un tambor grande tocado suave suena…", o: ["grave", "agudo", "fuerte"], a: 0, e: "Grave aunque sea suave." },
    { q: "En un coro se juntan voces…", o: ["agudas y graves", "solo agudas", "solo graves"], a: 0, e: "De todas las alturas." },
  ],
  feynman: ["Qué son los sonidos agudos y graves", "Por qué agudo no es lo mismo que fuerte", "Cómo suena un xilófono de las láminas largas a las cortas"],
  mapa: mapa("AGUDOS Y GRAVES", "var(--pri)", [
    ["Agudo", "fino, pequeño, arriba", "#e53935"],
    ["Grave", "gordo, grande, abajo", "#1e88e5"],
    ["Sube / baja", "de grave a agudo y al revés", "#43a047"],
    ["Ojo", "agudo ≠ fuerte", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Altura", "Si un sonido es agudo o grave"],
    ["Agudo", "Fino y alto: pito, pájaro"],
    ["Grave", "Gordo y profundo: tambor, trueno"],
    ["Tamaño", "Grande suena grave; pequeño suena agudo"],
    ["Xilófono", "Láminas largas graves, cortas agudas"],
    ["Sube", "El sonido se hace más agudo"],
    ["Baja", "El sonido se hace más grave"],
    ["Pentagrama", "Arriba agudos, abajo graves"],
  ],
  familias: [
    "Jugad al ascensor con notas de un piano o una aplicación de xilófono.",
    "Llenad vasos con distinta cantidad de agua y golpeadlos: ¿cuál suena más agudo?",
    "Imitad voces de animales grandes y pequeños.",
    "Escuchad una canción y marcad con la mano si la melodía sube o baja.",
  ],
  profesores: PROF("Música: la altura del sonido (agudo-grave); diferencia entre altura e intensidad; relación tamaño-altura; direccionalidad melódica (sube, baja); grafías no convencionales y pentagrama", ["Juego del ascensor con instrumentos de láminas.", "Vasos con agua para explorar alturas.", "Musicogramas con líneas que suben y bajan."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
