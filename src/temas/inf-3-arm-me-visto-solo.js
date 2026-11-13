// Infantil 3 años · Crecimiento en armonía: Me visto solo. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, t, PROF, FUENTES } = require("./_inf3a");
const { I, dibujos, lista, mural, vid, ic } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", S = "var(--sun)", W = "var(--water)";

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "3-anos",
  titulo: "Me visto solo",
  minutos: 10,
  objetivos: ["Nombrar las prendas de ropa de cada día", "Seguir un orden al vestirse: primero, después y al final", "Ponerse solo la camiseta, los zapatos de velcro y el abrigo"],
  claves: ["ropa", "camiseta", "pantalón", "calcetines", "zapatos", "abrigo"],
  pregunta: {
    texto: "¿Qué te pones primero: los calcetines o los zapatos?",
    respuesta: "¡Primero los <mark>calcetines</mark>! Los zapatos van al final, encima de los calcetines.",
  },
  bloques: [
    {
      html: `<h3>Mi ropa</h3><p>Cada mañana me visto. Me pongo la <mark>camiseta</mark>, el pantalón o la falda, los calcetines y los zapatos.</p><p>Si hace frío, también el abrigo y el gorro. ¡Ya estoy listo para salir!</p>`,
      svg: dibujos("Ropa de cada día: camiseta, pantalón, calcetín, zapato, abrigo y gorro", [["camiseta", "camiseta", A], ["pantalon", "pantalón", N], ["calcetin", "calcetín", R], ["zapato", "zapato", R], ["abrigo", "abrigo", W], ["gorro", "gorro", V]]),
    },
    {
      html: `<h3>Primero, después, al final</h3><p>Para vestirme hay un <mark>orden</mark>.</p><p>Primero, la ropa interior. Después, la camiseta y el pantalón. Luego, los calcetines. Y al final, los zapatos.</p><p>¡Los zapatos nunca van antes que los calcetines!</p>`,
      svg: lista("El orden para vestirse: camiseta y pantalón, calcetines y zapatos", [["Camiseta y pantalón", A], ["Calcetines", R], ["Zapatos", V]], { titulo: "Primero, después…", marca: "n" }),
    },
    {
      html: `<h3>La camiseta</h3><p>Para ponerte la <mark>camiseta</mark>, busca la etiqueta: va detrás.</p><p>Mete la cabeza por el agujero grande. Después mete un brazo y luego el otro.</p><p>¡Tira hacia abajo y listo!</p>`,
      svg: dibujos("Ponerse la camiseta: la cabeza, los brazos y listo", [["camiseta", "1. cabeza", A], ["mano", "2. brazos", N], ["feliz", "3. ¡listo!", V]], { titulo: "Me pongo la camiseta" }),
      video: vid("MLt9BL4j1B4", "Estoy aprendiendo a vestirme", "Little Baby Bum en Español", 453729490),
    },
    {
      html: `<h3>Los zapatos</h3><p>Me siento para ponerme los <mark>zapatos</mark>. Cada zapato va en su pie: si las puntas miran hacia fuera, ¡están bien!</p><p>Meto el pie, empujo el talón y cierro el velcro. ¡Ras!</p>`,
      svg: escena("Dos zapatos con las puntas hacia fuera, cada uno en su pie", `<g transform="translate(80 92) scale(-2.2 2.2)">${I.zapato}</g><g transform="translate(180 92) scale(2.2)">${I.zapato}</g>${t(130, 158, "cada uno en su pie", 19, V, 220)}`, "Mis zapatos"),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Vestirme solo me hace sentir <mark>mayor</mark>.</p><p>Además, la ropa me protege del frío, del sol y de la lluvia. En verano llevo ropa fresca y gorra; en invierno, abrigo y bufanda.</p>`,
      svg: dibujos("En verano ropa fresca; en invierno, abrigo", [["sol", "verano", S], ["camiseta", "fresca", A], ["nieve", "invierno", W], ["abrigo", "abrigo", R]], { titulo: "Ropa para cada día" }),
    },
    {
      html: `<h3>Jugamos: el truco del abrigo</h3><p>Pon el abrigo en el suelo, abierto. Ponte detrás de la capucha.</p><p>Mete los <mark>brazos</mark> en las mangas y… ¡arriba, por encima de la cabeza! ¡Ya lo llevas puesto!</p>`,
      svg: dibujos("El truco del abrigo: en el suelo, brazos dentro y arriba", [["abrigo", "en el suelo", W], ["mano", "brazos", N], ["feliz", "¡arriba!", V]], { titulo: "El truco del abrigo" }),
    },
  ],
  figura: {
    titulo: "Me visto solo",
    svg: mural("Me visto solo: camiseta primero, calcetines, zapatos al final y abrigo con truco", [["camiseta", "camiseta", "cabeza y brazos", A], ["calcetin", "calcetines", "antes que zapatos", R], ["zapato", "zapatos", "al final", V], ["abrigo", "abrigo", "el truco mágico", W]], "Me visto solo"),
  },
  video: { ...vid("KYwNrelmicc", "De esta forma nos vestimos", "Super Simple Español", 77708189), busqueda: "vestirse solo canción infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Nos vestimos para ir al cole.",
      pasos: ["Ponemos la ropa en la cama, en orden.", "Primero camiseta y pantalón; luego calcetines.", "Al final, zapatos y abrigo."],
      resultado: "¡listo para el cole!" },
    { enunciado: "Hace mucho sol. ¿Qué me pongo?",
      pasos: ["Miro por la ventana: hace calor.", "Elijo ropa fresca y una gorra."],
      resultado: "camiseta, pantalón corto y gorra." },
  ],
  errores: [
    "Hacerlo todo por prisa: dejad tiempo los fines de semana para que practique solo.",
    "Elegir ropa difícil: a esta edad ayudan las cinturas elásticas y el velcro.",
    "Corregir cada detalle: si la camiseta queda del revés, se celebra el esfuerzo y se arregla después.",
  ],
  ejercicios: [
    { q: "Pon tu ropa de mañana en la cama, en orden.", sol: "Para la familia: de arriba abajo, como se pone; así luego se viste solo." },
    { q: "Quítate los calcetines tú solo y ponlos en el cesto.", sol: "Para la familia: desvestirse es más fácil; es el primer paso." },
    { q: "Haz el truco del abrigo.", sol: "Para la familia: practicadlo varias veces antes de salir al parque." },
    { q: "Viste a tu muñeco: ¿qué le pones primero?", sol: "Para la familia: hablad del orden mientras juega." },
    { q: "Señala en el dibujo: ¿qué ropa es para el frío?", sol: "Para la familia: el abrigo y el gorro." },
    { q: "Ponte los zapatos de velcro y ciérralos. ¡Ras!", sol: "Para la familia: marcad con una pegatina partida en dos el pie de cada zapato." },
  ],
  quiz: [
    { q: "¿Qué va antes: calcetines o zapatos?", o: ["los calcetines", "los zapatos", "el gorro"], a: 0, e: "Primero los calcetines." },
    { q: "Si hace frío me pongo…", o: ["el abrigo", "el bañador", "nada"], a: 0, e: "El abrigo." },
    { q: "La camiseta se mete por…", o: ["la cabeza", "los pies", "las rodillas"], a: 0, e: "Por la cabeza." },
    { q: "¿Dónde van los zapatos?", o: ["en los pies", "en las manos", "en la cabeza"], a: 0, e: "En los pies." },
    { q: "El gorro va en…", o: ["la cabeza", "la barriga", "el pie"], a: 0, e: "En la cabeza." },
    { q: "La etiqueta de la camiseta va…", o: ["delante", "detrás", "en la manga"], a: 1, e: "Detrás." },
  ],
  examen: [
    { q: "Lo último que me pongo es…", o: ["los zapatos", "la camiseta", "el pantalón"], a: 0, e: "Los zapatos van al final." },
    { q: "En verano llevo ropa…", o: ["fresca", "de abrigo", "de lana"], a: 0, e: "Fresca." },
    { q: "Para ponerme los zapatos me…", o: ["siento", "subo a la silla", "tumbo"], a: 0, e: "Me siento." },
  ],
  feynman: ["La ropa de cada día", "El orden para vestirme", "El truco del abrigo"],
  mapa: mapa("ME VISTO SOLO", "var(--inf)", [
    ["Camiseta", "cabeza y brazos", A],
    ["Calcetines", "antes que zapatos", R],
    ["Zapatos", "al final, sentado", V],
    ["Abrigo", "el truco mágico", W],
  ], 220),
  tarjetas: [
    ["¿Qué va primero, calcetines o zapatos?", "Los calcetines"],
    ["¿Por dónde se mete la camiseta?", "Por la cabeza"],
    ["¿Dónde va la etiqueta?", "Detrás"],
    ["¿Qué me pongo si hace frío?", "Abrigo y gorro"],
    ["¿Qué me pongo si hace sol?", "Ropa fresca y gorra"],
    ["¿Cómo me pongo el abrigo?", "Con el truco: suelo, brazos y arriba"],
  ],
  familias: [
    "Dejad que elija entre dos prendas: da autonomía sin discusiones.",
    "Usad ropa fácil: cinturas elásticas, velcro y cuellos amplios.",
    "Preparad la ropa la noche antes y en orden.",
    "Celebrad cada logro: «¡Te has puesto los calcetines tú solo!».",
  ],
  profesores: PROF("El cuerpo y el control progresivo del mismo y hábitos de autonomía: vestirse y desvestirse con ayuda decreciente, prendas según el tiempo", [
    "Rincón de disfraces para practicar botones, cremalleras y velcro.",
    "Secuencia de pictogramas para colgar el abrigo y ponérselo con el truco.",
    "Vestir a un muñeco grande según el tiempo del día en la asamblea.",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
