// Infantil 4 años · Crecimiento en armonía: seguridad en casa y en la calle.
const { marco, dibujos, lista, ic, nino, t, tick, equis, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

const cebra = `<g>${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${40 + i * 30}" y="128" width="18" height="40" fill="#fff" stroke="var(--line)"/>`).join("")}</g>`;

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "4-anos",
  titulo: "Seguridad en casa y en la calle",
  minutos: 15,
  objetivos: ["Reconocer objetos peligrosos de casa", "Cruzar la calle de la mano de un adulto", "Saber pedir ayuda"],
  claves: ["peligro", "semáforo", "paso de cebra", "de la mano"],
  pregunta: {
    texto: "Vas por la calle y quieres cruzar al parque. ¿Qué haces?",
    respuesta: "Le doy <mark>la mano a un adulto</mark>, vamos al <mark>paso de cebra</mark> y esperamos a que el muñeco del semáforo esté <mark>verde</mark>. Miramos a los dos lados y cruzamos.",
  },
  bloques: [
    {
      html: `<h3>Peligros en casa</h3><p>En casa hay cosas que pueden hacer <mark>daño</mark>.</p><p>El <b>fuego</b> y el horno queman. Los <b>enchufes</b> dan calambre. Los <b>cuchillos</b> cortan. Las <b>medicinas</b> solo las da un adulto. ¡No se tocan!</p>`,
      svg: dibujos("Fuego, enchufe, cuchillo y medicinas: no se tocan", [["fuego", "fuego", "var(--red)"], ["enchufe", "enchufe", "var(--pen)"], ["cuchillo", "cuchillo", "var(--muted)"], ["medicina", "medicinas", "var(--red)"]], { titulo: "¡No se tocan!" }),
    },
    {
      html: `<h3>Ventanas y escaleras</h3><p>No me subo a las <mark>ventanas</mark> ni a los balcones.</p><p>En las escaleras, bajo despacio y me agarro a la barandilla. No corro con cosas en la boca ni con tijeras en la mano.</p>`,
      svg: marco("Un niño sube la escalera agarrado a la barandilla", `${[0, 1, 2, 3].map((i) => `<rect x="${30 + i * 50}" y="${140 - i * 20}" width="${200 - i * 50}" height="${20 + i * 20}" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>`).filter(Boolean).join("")}<path d="M30 110 L230 30" stroke="var(--inf)" stroke-width="5" stroke-linecap="round"/><path d="M40 106 V140 M130 70 V100 M220 34 V60" stroke="var(--inf)" stroke-width="3"/>${nino(105, 120, { s: 1.1, pose: "brazos", c: "var(--pen)" })}${tick(50, 40)}`),
    },
    {
      html: `<h3>En la calle, de la mano</h3><p>Por la calle voy por la <mark>acera</mark> y de la <mark>mano</mark> de un adulto.</p><p>Nunca me suelto para correr. Los coches van rápido y no siempre me ven, porque soy pequeño. Si veo un coche, me quedo quieto en la acera.</p>`,
      svg: marco("Una niña y un adulto de la mano por la acera, con un coche en la carretera", `<rect x="0" y="120" width="260" height="60" fill="var(--muted)" opacity=".35"/><rect x="0" y="112" width="260" height="10" fill="var(--line)"/>${nino(110, 110, { s: 1.5, pose: "brazos", c: "var(--red)" })}${nino(150, 110, { s: 1, pose: "brazos", c: "var(--leaf)", nina: true })}${ic("coche", 210, 150, 1.4)}`),
    },
    {
      html: `<h3>Cruzar la calle</h3><p>Cruzamos por el <mark>paso de cebra</mark>. Si hay semáforo, esperamos al <b>muñeco verde</b>.</p><p>Rojo: quieto. Verde: miro a un lado, miro al otro, y cruzo con el adulto. Así vamos siempre seguros.</p>`,
      svg: marco("Paso de cebra y semáforo: rojo quieto, verde cruzo", `<rect x="0" y="120" width="260" height="60" fill="var(--muted)" opacity=".35"/>${cebra}${ic("semaforo", 40, 64, 2)}${t(150, 54, "rojo: quieto", { color: "var(--red)", size: 18, max: 150 })}${t(150, 90, "verde: cruzo", { color: "var(--ok)", size: 18, max: 150 })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Conocer los peligros nos ayuda a <mark>no hacernos daño</mark>.</p><p>Si me pierdo, me quedo quieto y pido ayuda a un policía o a una dependienta. Es bueno saber el nombre de mamá o papá.</p>`,
      svg: lista("Si me pierdo: me quedo quieto, pido ayuda a un policía, digo el nombre de mi familia", [["Me quedo quieto", "var(--pen)"], ["Pido ayuda a un policía", "var(--water)"], ["Digo el nombre de mamá o papá", "var(--leaf)"]], { titulo: "Si me pierdo…", marca: "n" }),
    },
    {
      html: `<h3>Juego: ¿sí o no?</h3><p>El adulto dice algo y tú contestas <mark>sí</mark> o <mark>no</mark>.</p><p>¿Toco el enchufe? ¡No! ¿Cruzo de la mano? ¡Sí! ¿Juego con el fuego? ¡No! ¿Me abrocho en la silla del coche? ¡Sí! ¡Muy bien! Ya sabes cuidarte.</p>`,
      svg: marco("Sí a cruzar de la mano y al cinturón; no al enchufe ni al fuego", `${ic("mano", 50, 60, 1.3)}${tick(110, 60)}${ic("coche", 50, 130, 1.3)}${tick(110, 130)}${ic("enchufe", 170, 60, 1.1)}${equis(230, 60)}${ic("fuego", 170, 130, 1.2)}${equis(230, 130)}`),
    },
  ],
  figura: figura("Me cuido de los peligros", "Fuego y enchufe no se tocan; semáforo y casco me protegen", [["fuego", "no toco", "var(--red)"], ["enchufe", "no toco", "var(--pen)"], ["semaforo", "espero", "var(--ok)"], ["casco", "me protejo", "var(--red)"]]),
  video: vid("MoQ-0XoBRak", "Bebé gato cruza la calle. La seguridad para cruzar las calles", "BabyBus - Canciones Infantiles", 2477525, "seguridad en la calle para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Vamos al cole andando.", pasos: ["Doy la mano al adulto.", "Vamos por la acera, lejos del bordillo.", "En el semáforo esperamos al muñeco verde."], resultado: "llegamos al cole seguros." },
    { enunciado: "Subimos al coche.", pasos: ["Me siento en mi silla.", "Un adulto me abrocha el cinturón: «clic».", "No me lo quito hasta que paramos."], resultado: "en el coche, siempre abrochado." },
  ],
  errores: [
    "Soltarse de la mano para correr hacia el parque: los coches pueden no vernos.",
    "Pensar que el muñeco rojo es para los coches: rojo significa que yo espero.",
    "Tocar medicinas porque parecen caramelos: solo las da un adulto.",
  ],
  ejercicios: [
    { q: "Busca con un adulto los enchufes de tu cuarto.", sol: "Nota para la familia: explicad que no se tocan y usad protectores." },
    { q: "Juega al semáforo: rojo quieto, verde andar.", sol: "Con cartulinas roja y verde en el pasillo." },
    { q: "Di el nombre de tu mamá, tu papá o quien te cuida.", sol: "Practicad también el nombre del pueblo o la ciudad." },
    { q: "Dibuja un paso de cebra.", sol: "Rayas blancas sobre la carretera gris." },
    { q: "Al salir a la calle, da la mano sin que te lo pidan.", sol: "Felicitadle cuando lo haga." },
    { q: "Señala a quién pedir ayuda si te pierdes.", sol: "Un policía, una dependienta o una mamá con niños." },
  ],
  quiz: [
    { q: "El fuego…", o: ["es un juguete", "quema", "es frío"], a: 1, e: "El fuego quema: no se toca." },
    { q: "Por la calle voy…", o: ["corriendo solo", "por la carretera", "de la mano"], a: 2, e: "De la mano de un adulto." },
    { q: "Muñeco rojo en el semáforo:", o: ["espero", "cruzo", "salto"], a: 0, e: "Rojo es quieto." },
    { q: "¿Dónde cruzamos?", o: ["Entre los coches", "Por cualquier sitio", "Por el paso de cebra"], a: 2, e: "El paso de cebra es el sitio para cruzar." },
    { q: "Las medicinas…", o: ["las da un adulto", "son caramelos", "se cogen solas"], a: 0, e: "Solo un adulto da medicinas." },
    { q: "En el coche me pongo…", o: ["el pijama", "el cinturón", "nada"], a: 1, e: "Siempre abrochado en mi silla." },
  ],
  examen: [
    { q: "Si me pierdo, ¿qué hago?", o: ["Corro sin parar", "Me quedo quieto y pido ayuda", "Me escondo"], a: 1, e: "Quieto y pedir ayuda." },
    { q: "Muñeco verde:", o: ["miro y cruzo con el adulto", "me siento", "me doy la vuelta"], a: 0, e: "Verde: miro a los lados y cruzo." },
    { q: "El enchufe…", o: ["es para jugar", "se chupa", "no se toca"], a: 2, e: "Da calambre." },
  ],
  feynman: ["Cosas de casa que no se tocan", "Cómo cruzamos la calle", "Qué hago si me pierdo"],
  mapa: mapa("ME CUIDO", "var(--inf)", [
    ["En casa", "fuego y enchufes no", "var(--red)"],
    ["En la calle", "de la mano", "var(--pen)"],
    ["Cruzar", "paso de cebra, verde", "var(--leaf)"],
    ["Me pierdo", "quieto, pido ayuda", "var(--water)"],
  ], 220),
  tarjetas: [
    ["¿Se toca el enchufe?", "No"],
    ["¿Cómo voy por la calle?", "De la mano"],
    ["Semáforo rojo", "Quieto"],
    ["Semáforo verde", "Miro y cruzo"],
    ["¿Dónde cruzo?", "Por el paso de cebra"],
    ["Si me pierdo…", "Quieto y pido ayuda"],
  ],
  familias: [
    "Poned protectores en los enchufes y medicinas en alto, y explicad el porqué.",
    "En cada paso de cebra, que os diga él o ella qué color tiene el muñeco.",
    "Enseñadle el nombre completo de un adulto y, si podéis, un teléfono.",
    "Jugad al semáforo con cartulinas en casa o en el parque.",
  ],
  profesores: PROF("Crecimiento en armonía: identificación de situaciones de peligro, prevención de accidentes y primeras normas de educación vial", ["Circuito vial en el patio con paso de cebra pintado.", "Tarjetas de «sí se toca / no se toca».", "Visita de la policía local."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
