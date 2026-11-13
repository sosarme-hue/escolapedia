// Infantil 5 años · Crecimiento en armonía: resolver un enfado hablando.
const { mapa } = require("./_util");
const { ic, vin, charla, lista, mural, t, FUENTES, PROF, CA, vid, nota } = require("./_inf5a");

// Semáforo de la calma: rojo para, amarillo pienso, verde hablo.
const semaforoCalma = (label) => vin(label, `<rect x="30" y="18" width="56" height="148" rx="14" fill="#2a2a2a"/>${[["var(--red)", "paro y respiro"], ["var(--sun)", "pienso"], ["var(--leaf)", "hablo"]].map(([c, s], i) => `<circle cx="58" cy="${48 + i * 44}" r="18" fill="${c}"/>${t(170, 54 + i * 44, s, { size: 20, color: c === "var(--sun)" ? "var(--inf)" : c, max: 150 })}`).join("")}`);

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "5-anos",
  titulo: "Resolver un enfado hablando",
  minutos: 15,
  objetivos: ["Notar cuándo estoy enfadado", "Calmarme antes de actuar", "Arreglar un problema hablando, sin pegar ni gritar"],
  claves: ["enfado", "calma", "respirar", "hablar", "perdón", "turnos"],
  pregunta: { texto: "Dos niños quieren el mismo columpio. ¿Cómo lo pueden arreglar sin pelearse?", respuesta: "Hablando: <mark>por turnos</mark>, primero uno y luego el otro, o contando hasta diez cada uno." },
  bloques: [
    {
      html: `<h3>Me enfado</h3><p>A veces nos <mark>enfadamos</mark>: si nos quitan algo, si no nos dejan jugar o si perdemos.</p><p>Enfadarse es normal. Lo importante es <b>qué hacemos</b> después.</p>`,
      svg: vin("Un niño enfadado como un volcán", `<path d="M60 160 L120 60 H140 L200 160z" fill="${"#a0703c"}"/><path d="M120 60 Q130 20 140 60" fill="var(--red)"/><path d="M118 40 q-10 -14 -2 -26 M142 40 q10 -14 2 -26" stroke="var(--inf)" stroke-width="5" fill="none" stroke-linecap="round"/>${t(130, 130, "¡grrr!", { size: 26, color: "var(--card)" })}`),
    },
    {
      html: `<h3>Lo noto en el cuerpo</h3><p>Cuando estoy enfadado, mi cara se pone <mark>roja</mark>, aprieto los puños y el corazón va muy rápido.</p><p>Son señales. Me avisan: «¡Cuidado, necesito calmarme!».</p>`,
      svg: vin("Señales del enfado: cara roja, puños apretados y corazón rápido", `<circle cx="60" cy="70" r="28" fill="var(--red)" opacity=".85"/><path d="M46 60 l8 4 M74 60 l-8 4 M50 84 h20" stroke="#2a2a2a" stroke-width="3" stroke-linecap="round"/>${ic("corazon", 190, 70, 1.5)}${t(60, 130, "cara roja", { size: 16, max: 110 })}${t(190, 130, "pum pum pum", { size: 16, color: "var(--red)", max: 110 })}${t(130, 166, "señales de enfado", { size: 15, color: "var(--muted)" })}`),
    },
    {
      html: `<h3>El semáforo de la calma</h3><p><mark>Rojo</mark>: paro y respiro hondo tres veces.</p><p><mark>Amarillo</mark>: pienso qué ha pasado y qué siento. <mark>Verde</mark>: hablo con calma y buscamos una solución.</p>`,
      svg: semaforoCalma("Semáforo de la calma: rojo paro y respiro, amarillo pienso, verde hablo"),
    },
    {
      html: `<h3>Hablar con palabras</h3><p>Digo lo que siento sin gritar: <mark>«Me he enfadado porque me has quitado el coche»</mark>.</p><p>Después escucho al otro. Él también tiene algo que decir.</p>`,
      svg: charla("Un niño dice que se ha enfadado porque le quitaron el coche y la niña responde que lo quería para jugar", [["nino", "Me enfadé: me quitaste el coche", "var(--red)"], ["nina", "Es que yo también quería", "var(--pen)"]]),
    },
    {
      html: `<h3>¿Para qué sirve? Buscar soluciones</h3><p>Hablando encontramos <mark>soluciones</mark>: jugar por turnos, jugar juntos o buscar otro juguete.</p><p>Si hemos hecho daño, pedimos <b>perdón</b>. Y luego, ¡a jugar otra vez!</p>`,
      svg: lista("Soluciones: por turnos, jugar juntos, otro juguete y pedir perdón", [["por turnos", "var(--pen)"], ["jugamos juntos", "var(--leaf)"], ["otro juguete", "var(--inf)"], ["pido perdón", "var(--red)"]], { titulo: "Soluciones" }),
    },
    {
      html: `<h3>Juego: soplar la vela</h3><p>Cuando te enfades, imagina que tienes una <mark>vela</mark> en el dedo.</p><p>Coge aire por la nariz, como si olieras una flor. Suéltalo despacio por la boca, como si soplaras la vela. Tres veces.</p>`,
      svg: vin("Oler la flor y soplar la vela para calmarse", `${ic("flor", 70, 84, 2)}${t(70, 150, "huelo", { size: 20, color: "var(--leaf)" })}<rect x="180" y="80" width="18" height="50" rx="3" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><path d="M189 62 q8 10 0 18 q-8 -8 0 -18z" fill="var(--sun)"/><path d="M150 70 q8 -4 16 0 M150 80 q8 -4 16 0" stroke="var(--water)" stroke-width="2.5" fill="none" stroke-linecap="round"/>${t(189, 150, "soplo", { size: 20, color: "var(--pen)" })}`),
    },
  ],
  figura: {
    titulo: "Del enfado a la solución",
    svg: mural("Mural: paro y respiro, pienso, hablo y buscamos una solución", [["semaforo", "paro", "respiro tres veces", "var(--red)"], ["bocadillo", "pienso", "¿qué ha pasado?", "var(--inf)"], ["oido", "hablo y escucho", "sin gritar", "var(--pen)"], ["manos", "solución", "turnos o juntos", "var(--leaf)"]]),
  },
  video: vid("n3903CjwJ5k", "El Enfadosaurio. Cuentos infantiles", "con c de cuentacuentos", 1119040, "cuento enfado niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Lucas y Ana quieren la misma pelota.", pasos: ["Rojo: los dos paran y respiran.", "Amarillo: piensan; los dos quieren jugar.", "Verde: hablan y deciden jugar juntos a pasarse la pelota."], resultado: "juegan juntos y nadie se enfada." },
    { enunciado: "Pablo empuja a Marta sin querer en la fila.", pasos: ["Marta se enfada y lo dice: «Me has empujado».", "Pablo la escucha y se da cuenta.", "Pablo dice: «Perdón, no quería»."], resultado: "piden perdón y siguen en la fila tranquilos." },
  ],
  errores: [
    "Pegar, empujar o morder cuando estamos enfadados.",
    "Gritar en lugar de hablar.",
    "Pensar que pedir perdón es perder: es ser valiente.",
  ],
  ejercicios: [
    { q: "Practica la respiración de oler la flor y soplar la vela.", sol: nota("practicadla en momentos tranquilos para que salga sola en los enfados.") },
    { q: "Dibuja tu cara cuando estás enfadado y cuando estás tranquilo.", sol: nota("hablad de qué le ayuda a pasar de una a otra.") },
    { q: "Haz un semáforo de cartulina: rojo, amarillo y verde.", sol: nota("colgadlo en la nevera y usadlo en los conflictos de casa.") },
    { q: "Juega con muñecos: uno le quita el juguete al otro. ¿Cómo lo arreglan?", sol: nota("dejad que proponga soluciones; no hay una sola buena.") },
    { q: "Di una frase: «Me enfado cuando…».", sol: nota("escuchad sin juzgar y contad también qué os enfada a vosotros.") },
    { q: "Practica pedir perdón y aceptar un perdón.", sol: nota("los adultos también podemos pedir perdón a los niños: es un buen ejemplo.") },
  ],
  quiz: [
    { q: "Cuando me enfado, primero…", o: ["pego", "paro y respiro", "grito"], a: 1, e: "Paro y respiro." },
    { q: "Los problemas se arreglan…", o: ["hablando", "empujando", "llorando siempre"], a: 0, e: "Hablando." },
    { q: "Si los dos queremos el columpio…", o: ["por turnos", "me lo quedo yo", "nos pegamos"], a: 0, e: "Por turnos." },
    { q: "Si he hecho daño, digo…", o: ["«¡Bah!»", "«Perdón»", "nada"], a: 1, e: "Perdón." },
    { q: "En el semáforo de la calma, verde es…", o: ["hablo", "paro", "me voy"], a: 0, e: "Verde: hablo." },
    { q: "¿Es normal enfadarse?", o: ["sí", "no", "nunca"], a: 0, e: "Sí, a todos nos pasa." },
  ],
  examen: [
    { q: "Cara roja y puños apretados son señales de…", o: ["enfado", "sueño", "hambre"], a: 0, e: "Enfado." },
    { q: "Para calmarme, soplo como si fuera…", o: ["una vela", "un globo", "un tambor"], a: 0, e: "Una vela." },
    { q: "Cuando el otro habla, yo…", o: ["le escucho", "grito", "me tapo las orejas"], a: 0, e: "Le escucho." },
  ],
  feynman: ["Cómo noto el enfado", "Qué hago para calmarme", "Cómo lo arreglo hablando"],
  mapa: mapa("RESOLVER UN ENFADO", "var(--inf)", [
    ["Rojo", "paro y respiro", "var(--red)"],
    ["Amarillo", "pienso qué pasó", "var(--inf)"],
    ["Verde", "hablo y escucho", "var(--leaf)"],
    ["Solución", "turnos · juntos · perdón", "var(--pen)"],
  ], 220),
  tarjetas: [
    ["Primero, cuando me enfado…", "Paro y respiro"],
    ["¿Pegar arregla algo?", "No"],
    ["Rojo, amarillo, verde", "Paro, pienso, hablo"],
    ["Una solución", "Jugar por turnos"],
    ["Si hago daño…", "Pido perdón"],
    ["Para calmarme…", "Huelo la flor y soplo la vela"],
  ],
  familias: [
    "Cuando se enfade, esperad a que se calme antes de hablar del problema.",
    "Poned nombre a lo que siente: «estás enfadado porque…».",
    "Proponed que busque él mismo soluciones en los conflictos con hermanos.",
    "Dad ejemplo resolviendo vuestros desacuerdos hablando y con calma.",
  ],
  profesores: PROF(CA, "Desarrollo y equilibrio afectivos y convivencia: estrategias de autorregulación emocional y resolución dialogada de conflictos", ["Rincón de la calma con un semáforo y botella de la calma.", "Mesa de la paz para que dos niños hablen por turnos con un objeto que da la palabra.", "Representar con marionetas conflictos habituales del patio."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
