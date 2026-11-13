// Infantil 5 años · Descubrimiento y exploración del entorno: ordenar, primero, segundo, tercero.
const { mapa } = require("./_util");
const { nino, ic, vin, mural, t, bola, FUENTES, PROF, DE, vid, nota } = require("./_inf5a");

const C3 = ["var(--sun)", "var(--muted)", "var(--inf)"];
// Podio de 3 puestos.
const podio = (label) => vin(label, [[130, 70, "1º", 0], [70, 40, "2º", 1], [190, 26, "3º", 2]].map(([x, h, s, i]) => `<rect x="${x - 30}" y="${150 - h}" width="60" height="${h}" fill="${C3[i]}" opacity=".85"/>${t(x, 150 - h / 2 + 8, s, { size: 22, color: "#ffffff" })}${nino(x, 150 - h, { c: ["var(--red)", "var(--pen)", "var(--leaf)"][i], nina: i === 1, pose: i === 0 ? "arriba" : "pie", s: 0.8 })}`).join("") + `<path d="M30 150 H230" stroke="var(--ink)" stroke-width="3"/>${t(130, 172, "primero, segundo, tercero", { size: 15, color: "var(--muted)" })}`);

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "5-anos",
  titulo: "Ordenar: primero, segundo, tercero",
  minutos: 15,
  objetivos: ["Usar primero, segundo, tercero… para decir el orden", "Ordenar cosas por tamaño y por pasos", "Saber quién va el último en una fila"],
  claves: ["primero", "segundo", "tercero", "último", "orden", "fila"],
  pregunta: { texto: "En una carrera, ¿quién llega antes que nadie?", respuesta: "El <mark>primero</mark>. Después llega el segundo, luego el tercero… y al final, el último." },
  bloques: [
    {
      html: `<h3>¿Quién va primero?</h3><p>Cuando hacemos una fila, cada uno tiene un <mark>puesto</mark>.</p><p>El que va delante es el <b>primero</b>. Detrás va el <b>segundo</b>. Luego, el <b>tercero</b>. Y así hasta el final.</p>`,
      svg: vin("Una fila de cuatro niños: primero, segundo, tercero y cuarto", `${[0, 1, 2, 3].map((i) => nino(200 - i * 50, 136, { c: ["var(--red)", "var(--pen)", "var(--leaf)", "var(--inf)"][i], nina: i % 2 === 1, s: 0.95 }) + t(200 - i * 50, 164, ["1º", "2º", "3º", "4º"][i], { size: 20, color: "var(--ink)" })).join("")}${t(236, 50, "→", { size: 26, color: "var(--muted)" })}`, "La fila"),
    },
    {
      html: `<h3>En la carrera</h3><p>En una <mark>carrera</mark>, el que llega antes es el primero. Sube a lo más alto del podio.</p><p>El segundo y el tercero también suben. ¡Todos lo han intentado!</p>`,
      svg: podio("Podio con el primero en el centro, el segundo a la izquierda y el tercero a la derecha"),
    },
    {
      html: `<h3>El último</h3><p>El que va <mark>al final</mark> de la fila es el <b>último</b>.</p><p>Si llega otro niño, se pone detrás. ¡Ahora el último es él! El orden puede cambiar.</p>`,
      svg: vin("Un niño llega y se pone el último de la fila", `${[0, 1, 2].map((i) => nino(190 - i * 46, 140, { c: "var(--pen)", s: 0.85 })).join("")}${nino(46, 140, { c: "var(--red)", s: 0.85, pose: "corre" })}${t(46, 166, "último", { size: 17, color: "var(--red)" })}${t(190, 166, "primero", { size: 17, color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Ordenar por tamaño</h3><p>También podemos <mark>ordenar cosas</mark>: de la más pequeña a la más grande.</p><p>Primero la pelota pequeña, segunda la mediana y tercera la grande. ¡Como una escalera!</p>`,
      svg: vin("Tres pelotas ordenadas de pequeña a grande", `${ic("pelota", 50, 120, 0.8)}${ic("pelota", 120, 108, 1.4)}${ic("pelota", 200, 92, 2.2)}${t(50, 164, "1º", { size: 20 })}${t(120, 164, "2º", { size: 20 })}${t(200, 164, "3º", { size: 20 })}`),
    },
    {
      html: `<h3>¿Para qué sirve? Hacer las cosas en orden</h3><p>Muchas cosas se hacen <mark>en orden</mark>. Para vestirnos: primero la camiseta, segundo el pantalón y tercero los zapatos.</p><p>¡Si los zapatos van primero, no entra el pantalón!</p>`,
      svg: vin("Para vestirse: primero camiseta, segundo pantalón, tercero zapatos", `${ic("camiseta", 50, 76, 1.4)}${ic("pantalon", 130, 76, 1.4)}${ic("zapato", 210, 76, 1.4)}${bola(50, 134, "1º", "var(--sun)", 17)}${bola(130, 134, "2º", "var(--muted)", 17)}${bola(210, 134, "3º", "var(--inf)", 17)}`),
    },
    {
      html: `<h3>Juego: la carrera de peluches</h3><p>Pon tres peluches en la salida. Empújalos y mira cuál llega <mark>más lejos</mark>.</p><p>Dale un papel con <b>1º</b>, <b>2º</b> o <b>3º</b> a cada uno. ¡Repetid la carrera!</p>`,
      svg: vin("Tres animales de peluche en una carrera con la meta al final", `<path d="M30 40 V160" stroke="var(--ink)" stroke-width="3" stroke-dasharray="6 5"/><rect x="226" y="40" width="10" height="120" fill="var(--ink)" opacity=".8"/>${ic("oso", 190, 60, 1)}${ic("conejo", 140, 100, 1)}${ic("gato", 100, 140, 1)}${t(222, 66, "1º", { size: 16, color: "var(--sun)", anchor: "end" })}${t(172, 106, "2º", { size: 16, color: "var(--muted)", anchor: "end" })}${t(132, 146, "3º", { size: 16, color: "var(--inf)", anchor: "end" })}`),
    },
  ],
  figura: {
    titulo: "Los números del orden",
    svg: mural("Mural: primero, segundo, tercero y último", [["medalla", "1º", "primero", "var(--sun)"], ["medalla", "2º", "segundo", "var(--muted)"], ["medalla", "3º", "tercero", "var(--inf)"], ["nino", "último", "al final", "var(--red)"]]),
  },
  video: vid("AEGQj4HgHv0", "Escuela Pocoyó: aprende los números ordinales", "Escuela Pocoyó", 643821, "números ordinales Pocoyó"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Ana, Luis y Eva hacen fila. Ana va delante y Eva al final. ¿Qué puesto tiene Luis?", pasos: ["Ana va delante: es la primera.", "Eva va al final: es la tercera, la última.", "Luis está en medio."], resultado: "Luis es el segundo." },
    { enunciado: "Ordena los pasos para lavarse las manos.", pasos: ["Primero: mojamos las manos.", "Segundo: ponemos jabón y frotamos.", "Tercero: aclaramos y secamos."], resultado: "mojar, enjabonar, secar." },
  ],
  errores: [
    "Confundir «primero» con «uno» de cantidad: primero dice el puesto, no cuántos hay.",
    "Pensar que el último pierde siempre: en una fila, ser el último no es malo.",
    "Empezar a contar el orden desde atrás de la fila.",
  ],
  ejercicios: [
    { q: "Pon tres peluches en fila y di quién es el primero, el segundo y el tercero.", sol: nota("cambiadlos de sitio y repetid.") },
    { q: "Ordena tres vasos de más pequeño a más grande.", sol: nota("después, de más grande a más pequeño.") },
    { q: "Cuenta qué haces primero, segundo y tercero al levantarte.", sol: nota("ayudad con preguntas: ¿y después?") },
    { q: "Echa una carrera con tu familia y di quién llegó primero.", sol: nota("dejad que a veces gane y a veces no.") },
    { q: "Ordena tres fotos de un cuento: principio, medio y final.", sol: nota("vale con viñetas recortadas de un cómic.") },
    { q: "En la cola del súper, di qué puesto tenéis.", sol: nota("es un buen momento para practicar sin papel.") },
  ],
  quiz: [
    { q: "El que va delante de la fila es el…", o: ["primero", "último", "tercero"], a: 0, e: "El primero." },
    { q: "Después del primero va el…", o: ["segundo", "tercero", "último"], a: 0, e: "El segundo." },
    { q: "El que va al final es el…", o: ["primero", "último", "segundo"], a: 1, e: "El último." },
    { q: "En el podio, el más alto es el…", o: ["tercero", "primero", "segundo"], a: 1, e: "El primero." },
    { q: "Para vestirme, ¿qué va antes?", o: ["los zapatos", "el pantalón", "da igual"], a: 1, e: "El pantalón, antes que los zapatos." },
    { q: "Después del segundo va el…", o: ["tercero", "primero", "cuarto"], a: 0, e: "El tercero." },
  ],
  examen: [
    { q: "Hay 3 niños en fila. El del medio es el…", o: ["segundo", "primero", "tercero"], a: 0, e: "El segundo." },
    { q: "1º se lee…", o: ["primero", "uno solo", "último"], a: 0, e: "Primero." },
    { q: "Si llega otro niño a la fila, se pone…", o: ["el último", "el primero", "en medio"], a: 0, e: "Al final: el último." },
  ],
  feynman: ["Primero, segundo y tercero", "Quién es el último", "Ordenar por tamaño o por pasos"],
  mapa: mapa("ORDENAR", "var(--pen)", [
    ["1º, 2º, 3º", "primero · segundo · tercero", "var(--sun)"],
    ["Último", "al final de la fila", "var(--red)"],
    ["Por tamaño", "pequeño → grande", "var(--leaf)"],
    ["Por pasos", "qué va antes", "var(--pen)"],
  ], 230),
  tarjetas: [
    ["Delante de la fila", "El primero"],
    ["Al final de la fila", "El último"],
    ["1º", "Primero"],
    ["2º", "Segundo"],
    ["3º", "Tercero"],
    ["Para vestirme, antes que los zapatos…", "El pantalón"],
  ],
  familias: [
    "Usad «primero, segundo, tercero» al contar lo que vais a hacer.",
    "Haced carreras cortas y juegos de turnos con el orden de llegada.",
    "Pedidle que ordene juguetes por tamaño o fotos por lo que pasó antes.",
    "En las colas, preguntad quién va delante y quién detrás.",
  ],
  profesores: PROF(DE, "Diálogo corporal con el entorno y exploración creativa: ordinales hasta el tercero, seriaciones por tamaño y secuencias temporales sencillas", ["Encargado del día que nombra el orden de la fila al salir.", "Seriaciones con material de tres tamaños.", "Secuencias de tres viñetas de rutinas (lavarse, vestirse) para ordenar."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
