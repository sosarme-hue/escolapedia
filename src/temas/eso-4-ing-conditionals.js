// Inglés 4º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "4-eso",
  titulo: "Conditionals: zero, first, second and third",
  minutos: 40,
  objetivos: ["Formar los cuatro condicionales", "Distinguir situaciones reales, probables, imaginarias e imposibles", "Usar unless, as long as y I wish"],
  claves: ["if clause", "zero conditional", "first conditional", "second conditional", "third conditional", "unless", "I wish"],
  pregunta: {
    texto: "«If I win the lottery, I'll buy a house» y «If I won the lottery, I'd buy a house». ¿Quién cree más que va a ganar?",
    respuesta: "El primero. El <b>first conditional</b> (present + will) habla de algo <mark>posible y real</mark>: ha comprado un boleto. El <b>second conditional</b> (past + would) habla de algo <mark>imaginario o poco probable</mark>: está soñando despierto.",
  },
  bloques: [
    {
      html: `<h3>Zero conditional</h3><p><b>If + present simple, present simple</b>. Para <mark>verdades generales</mark> y hechos científicos: siempre que pasa A, pasa B. «If you heat ice, it melts». Aquí <i>if</i> equivale casi a <i>when</i>.</p>`,
      svg: L.frase("Zero conditional: If you heat ice, it melts", [
        ["If you heat ice,", "if + present", "var(--pen)"], ["it melts.", "present", "var(--leaf)"],
      ], "siempre es verdad"),
    },
    {
      html: `<h3>First conditional</h3><p><b>If + present simple, will + infinitivo</b>. Para situaciones <mark>reales y probables</mark> en el futuro: «If it rains tomorrow, we'll stay at home». Ojo: después de <i>if</i> nunca va <i>will</i>. También puede llevar modales: «If you finish early, you can go».</p>`,
      svg: L.frase("First conditional: If it rains, we will stay at home", [
        ["If it rains,", "if + present", "var(--pen)"], ["we'll stay home.", "will + inf.", "var(--red)"],
      ], "posible y real"),
    },
    {
      html: `<h3>Second conditional</h3><p><b>If + past simple, would + infinitivo</b>. Para situaciones <mark>imaginarias o poco probables</mark> en el presente o el futuro: «If I had wings, I would fly». Con <i>be</i> se puede usar <b>were</b> para todas las personas: «If I were you, I'd study more» (consejo).</p>`,
      svg: L.frase("Second conditional: If I had wings, I would fly", [
        ["If I had wings,", "if + past", "var(--pen)"], ["I would fly.", "would + inf.", "var(--inf)"],
      ], "imaginario"),
    },
    {
      html: `<h3>Third conditional</h3><p><b>If + past perfect, would have + participio</b>. Para situaciones <mark>imposibles</mark>: imaginamos un pasado distinto que ya no se puede cambiar. Sirve para lamentos y críticas: «If I had studied, I would have passed» (pero no estudié y suspendí).</p>`,
      svg: L.frase("Third conditional: If I had studied, I would have passed", [
        ["If I had studied,", "had + participle", "var(--pen)"], ["I would have passed.", "would have + part.", "var(--muted)"],
      ], "pasado imposible de cambiar"),
    },
    {
      html: `<h3>Unless, as long as y I wish</h3><p><b>Unless</b> = if… not: «You won't pass <i>unless</i> you study». <b>As long as / provided that</b> = siempre que. Para deseos usamos <mark>I wish + past</mark> (presente: «I wish I were taller») y <mark>I wish + past perfect</mark> (lamento del pasado: «I wish I hadn't said that»).</p>`,
      svg: L.filas("Unless, as long as e I wish", [
        ["unless", "= if not", "var(--red)"], ["as long as", "= siempre que", "var(--leaf)"],
        ["I wish + past", "deseo ahora", "var(--pen)"], ["I wish + had", "lamento pasado", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Los cuatro condicionales, de real a imposible",
    svg: L.columnas("Zero, first, second y third conditional con su estructura", [
      ["siempre verdad", "ZERO", ["if + present,", "present"], "var(--leaf)"],
      ["probable", "FIRST", ["if + present,", "will + inf."], "var(--pen)"],
      ["imaginario", "SECOND", ["if + past,", "would + inf."], "var(--inf)"],
      ["imposible (pasado)", "THIRD", ["if + had + part.,", "would have + part."], "var(--muted)"],
    ]),
  },
  video: { id: "zZfx5oM3BQU", titulo: "Todos los condicionales en inglés con ejemplos y ejercicios", canal: "Amigos Ingleses", vistas: 682417, megusta: 26500, busqueda: "condicionales en inglés zero first second third" },
  quiz: [
    { q: "«If you mix blue and yellow, you ___ green.»", o: ["get", "will get", "would get"], a: 0, e: "Verdad general: zero conditional." },
    { q: "«If it ___ sunny tomorrow, we'll go to the beach.»", o: ["will be", "is", "were"], a: 1, e: "Después de if, present simple (nunca will)." },
    { q: "«If I ___ a million euros, I'd travel the world.»", o: ["have", "had", "will have"], a: 1, e: "Situación imaginaria: second conditional (if + past)." },
    { q: "«If she had left earlier, she ___ the train.»", o: ["will catch", "would catch", "would have caught"], a: 2, e: "Pasado imposible: third conditional." },
    { q: "«You can't go out ___ you finish your homework.»", o: ["if", "unless", "as long"], a: 1, e: "Unless = if… not." },
  ],
  examen: [
    { q: "«If I ___ you, I'd apologise.»", o: ["am", "were", "will be"], a: 1, e: "Consejo con second conditional: If I were you…" },
    { q: "«I wish I ___ more free time.» (ahora)", o: ["have", "had", "will have"], a: 1, e: "Deseo sobre el presente: I wish + past." },
    { q: "¿Qué condicional habla de situaciones probables en el futuro?", o: ["Zero", "First", "Third"], a: 1, e: "First conditional: if + present, will." },
  ],
  feynman: ["La estructura de cada condicional", "La diferencia entre first y second conditional", "Por qué el third conditional habla de lo imposible", "Qué significa unless"],
  mapa: mapa("CONDITIONALS", "var(--eso)", [
    ["Zero", "facts: present + present", "var(--leaf)"],
    ["First", "real: present + will", "var(--pen)"],
    ["Second", "unreal: past + would", "var(--inf)"],
    ["Third", "past: had + would have", "var(--muted)"],
  ], 240),
  tarjetas: [
    ["Zero conditional", "If + present, present: verdades generales."],
    ["First conditional", "If + present, will + inf.: situaciones probables."],
    ["Second conditional", "If + past, would + inf.: situaciones imaginarias."],
    ["Third conditional", "If + past perfect, would have + participio: pasado imposible."],
    ["Unless", "Significa «if… not»: «Unless you hurry, you'll miss the bus»."],
  ],
  familias: ["Jugad a «What would you do if…?» durante la cena con situaciones divertidas.", "Pedidle una frase con third conditional sobre algo que cambiaría de la semana pasada.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: oraciones condicionales y expresión de hipótesis y deseos (RD 217/2022, Lengua Extranjera 4º; nivel B1 del MCER).",
    ideas: ["Cadena de condicionales: cada consecuencia es la condición del siguiente alumno.", "Encuesta «What would you do if…?» y presentación de resultados.", "Historias alternativas de personajes históricos con third conditional."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: conditionals", url: "https://learnenglishteens.britishcouncil.org/grammar" },
    { t: "Cambridge Dictionary: conditionals", url: "https://dictionary.cambridge.org/grammar/british-grammar/conditionals-and-wishes" },
  ],
  revisado: "2026-11-12",
};
