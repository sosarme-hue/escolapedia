// Infantil 5 años · Crecimiento en armonía: educación vial.
const { mapa } = require("./_util");
const { nino, ic, vin, dibujos, mural, t, FUENTES, PROF, CA, vid, nota } = require("./_inf5a");

// Calle vista de lado: acera, calzada y paso de cebra.
const calle = (inner = "") => `<rect x="0" y="120" width="260" height="60" fill="#5d6677"/><rect x="0" y="108" width="260" height="14" fill="var(--line)"/><g fill="#ffffff">${[0, 1, 2, 3, 4].map((i) => `<rect x="${100 + i * 14}" y="124" width="8" height="52"/>`).join("")}</g>${inner}`;

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "5-anos",
  titulo: "Educación vial",
  minutos: 15,
  objetivos: ["Conocer la acera, la calzada y el paso de cebra", "Saber qué dicen los colores del semáforo", "Ir seguro por la calle, en el coche y en bici"],
  claves: ["acera", "calzada", "paso de cebra", "semáforo", "cinturón", "casco"],
  pregunta: { texto: "El semáforo de peatones está en rojo. ¿Puedo cruzar?", respuesta: "No. En <mark>rojo</mark> me paro y espero. Cruzo cuando está en <mark>verde</mark>, de la mano de un adulto." },
  bloques: [
    {
      html: `<h3>La calle</h3><p>Por la <mark>acera</mark> andan las personas. Por la <mark>calzada</mark> van los coches, las motos y los autobuses.</p><p>Los niños vamos por la acera, por la parte de dentro, y <b>de la mano</b> de un adulto.</p>`,
      svg: vin("Una calle con acera para personas y calzada para coches", `${calle()}${ic("coche", 50, 150, 1.3)}${nino(200, 108, { c: "var(--pen)", s: 0.9 })}${ic("arbol", 40, 80, 1)}${t(200, 30, "acera", { size: 17, color: "var(--muted)" })}<path d="M200 36 V40" stroke="var(--muted)"/>${t(220, 168, "calzada", { size: 15, color: "#ffffff", max: 70 })}`),
    },
    {
      html: `<h3>El semáforo</h3><p>El <mark>semáforo</mark> nos dice cuándo cruzar.</p><p>En <b>rojo</b>: me paro. En <b>verde</b>: puedo cruzar, mirando antes. Si el verde parpadea, no empiezo a cruzar.</p>`,
      svg: vin("Semáforo de peatones: rojo me paro, verde cruzo", `${ic("semaforo", 66, 80, 2.4)}${ic("semaforoverde", 186, 80, 2.4)}${t(66, 156, "me paro", { size: 19, color: "var(--red)" })}${t(186, 156, "cruzo", { size: 19, color: "var(--leaf)" })}`),
    },
    {
      html: `<h3>El paso de cebra</h3><p>Cruzamos siempre por el <mark>paso de cebra</mark>: las rayas blancas en el suelo.</p><p>Antes, nos paramos en el bordillo y miramos: <b>izquierda, derecha e izquierda</b>. Cruzamos andando, sin correr.</p>`,
      svg: vin("Una niña de la mano de su madre mira a los lados antes de cruzar el paso de cebra", `${calle()}${nino(70, 108, { c: "var(--inf)", s: 1.15, nina: true })}${nino(96, 108, { c: "var(--leaf)", s: 0.8, nina: true })}${t(150, 40, "← mira →", { size: 22, color: "var(--pen)" })}`),
    },
    {
      html: `<h3>En el coche</h3><p>En el coche vamos <mark>sentados atrás</mark>, en nuestra sillita o en el alzador.</p><p>Siempre con el <b>cinturón</b> abrochado, aunque el viaje sea corto. Bajamos por el lado de la acera.</p>`,
      svg: dibujos("En el coche: sillita atrás y cinturón abrochado", [["coche", "atrás", "var(--red)"], ["cinturon", "cinturón", "var(--pen)"]], { titulo: "Siempre", nota: "aunque el viaje sea corto" }),
    },
    {
      html: `<h3>¿Para qué sirve? Llegar seguros</h3><p>Estas normas sirven para <mark>no tener accidentes</mark>.</p><p>En bici o patinete, ponte siempre el <b>casco</b>. Y juega en el parque, nunca en la calzada.</p>`,
      svg: dibujos("Casco en la bici y jugar en el parque, no en la calle", [["casco", "casco", "var(--red)"], ["parque", "parque", "var(--leaf)"], ["cebra", "paso", "var(--pen)"]], { titulo: "Seguros" }),
    },
    {
      html: `<h3>Juego: ¡semáforo!</h3><p>Un adulto hace de semáforo con dos cartulinas. <mark>Verde</mark>: andamos por la habitación. <mark>Rojo</mark>: ¡quietos como estatuas!</p><p>Quien se mueva en rojo, vuelve a empezar.</p>`,
      svg: vin("Niños quietos como estatuas ante un círculo rojo y andando ante uno verde", `<circle cx="60" cy="56" r="30" fill="var(--red)"/>${nino(60, 160, { c: "var(--pen)", pose: "brazos" })}<circle cx="190" cy="56" r="30" fill="var(--leaf)"/>${nino(190, 160, { c: "var(--inf)", pose: "corre", nina: true })}${t(60, 62, "¡quietos!", { size: 13, color: "#ffffff", max: 56 })}${t(190, 62, "¡andad!", { size: 14, color: "#ffffff", max: 56 })}`),
    },
  ],
  figura: {
    titulo: "Seguros por la calle",
    svg: mural("Mural: acera, semáforo, paso de cebra, cinturón y casco", [["semaforoverde", "semáforo", "rojo paro, verde cruzo", "var(--leaf)"], ["cebra", "paso de cebra", "miro a los lados", "var(--pen)"], ["cinturon", "cinturón", "siempre abrochado", "var(--inf)"], ["casco", "casco", "en bici y patinete", "var(--red)"]]),
  },
  video: vid("APQ6jTx7RxQ", "El semáforo para niños: cómo funciona el semáforo", "El Club de Motas", 233216, "semáforo para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Llegamos a un paso de cebra con semáforo.", pasos: ["Nos paramos en el bordillo, de la mano.", "Miramos el semáforo: está en rojo, esperamos.", "Se pone verde: miramos a los lados y cruzamos andando."], resultado: "cruzamos seguros." },
    { enunciado: "Subimos al coche para ir al cole.", pasos: ["Entramos por el lado de la acera.", "Nos sentamos atrás en la sillita.", "Abrochamos el cinturón y comprobamos que está bien."], resultado: "listos para el viaje." },
  ],
  errores: [
    "Cruzar corriendo o por donde no hay paso de cebra.",
    "Soltarse de la mano del adulto en la calle.",
    "No ponerse el cinturón en viajes cortos.",
  ],
  ejercicios: [
    { q: "En la calle, señala la acera, la calzada y el paso de cebra.", sol: nota("aprovechad el camino al cole para repasarlo.") },
    { q: "Dibuja un semáforo con sus colores.", sol: nota("comentad qué hace el peatón con cada color.") },
    { q: "Juega al semáforo: verde andar, rojo estatua.", sol: nota("también se puede jugar con coches de juguete.") },
    { q: "Practica mirar izquierda, derecha e izquierda antes de cruzar.", sol: nota("que lo diga en voz alta mientras mira.") },
    { q: "Abróchate el cinturón tú solo en el coche.", sol: nota("comprobad siempre después que está bien puesto.") },
    { q: "Busca señales de tráfico de camino al cole.", sol: nota("explicad las más sencillas: paso de peatones, stop, prohibido.") },
  ],
  quiz: [
    { q: "Las personas andan por la…", o: ["acera", "calzada", "carretera"], a: 0, e: "Por la acera." },
    { q: "Semáforo en rojo:", o: ["cruzo", "me paro", "corro"], a: 1, e: "Me paro." },
    { q: "Semáforo en verde:", o: ["miro y cruzo", "me siento", "me paro"], a: 0, e: "Miro y cruzo." },
    { q: "Cruzamos por el…", o: ["paso de cebra", "medio de la calle", "parque"], a: 0, e: "Paso de cebra." },
    { q: "En el coche me pongo…", o: ["el cinturón", "el gorro", "las gafas"], a: 0, e: "El cinturón." },
    { q: "En bici me pongo…", o: ["el casco", "la bufanda", "el pijama"], a: 0, e: "El casco." },
  ],
  examen: [
    { q: "Antes de cruzar miro…", o: ["a los lados", "al cielo", "al suelo"], a: 0, e: "Izquierda, derecha e izquierda." },
    { q: "En la calle voy…", o: ["de la mano de un adulto", "solo corriendo", "por la calzada"], a: 0, e: "De la mano." },
    { q: "Los niños en el coche van…", o: ["delante", "atrás en su sillita", "de pie"], a: 1, e: "Atrás en su sillita." },
  ],
  feynman: ["Acera y calzada", "Qué dice el semáforo", "Cómo voy seguro en coche y en bici"],
  mapa: mapa("EDUCACIÓN VIAL", "var(--inf)", [
    ["La calle", "acera · calzada", "var(--muted)"],
    ["Semáforo", "rojo paro · verde cruzo", "var(--leaf)"],
    ["Paso de cebra", "miro a los lados", "var(--pen)"],
    ["Seguros", "cinturón · casco", "var(--red)"],
  ], 220),
  tarjetas: [
    ["¿Por dónde andan las personas?", "Por la acera"],
    ["¿Por dónde van los coches?", "Por la calzada"],
    ["Semáforo en rojo", "Me paro"],
    ["Semáforo en verde", "Miro y cruzo"],
    ["En el coche…", "Cinturón y sillita atrás"],
    ["En bici…", "Casco"],
  ],
  familias: [
    "Nombrad en voz alta lo que hacéis al cruzar: paro, miro, cruzo.",
    "No crucéis en rojo aunque no venga nadie: os está mirando.",
    "Usad siempre la sillita y el cinturón, también en trayectos cortos.",
    "Poned casco en bici y patinete desde el primer día.",
  ],
  profesores: PROF(CA, "Interacción socioemocional en el entorno: seguridad vial como peatón y pasajero, normas básicas, el semáforo y el paso de peatones", ["Circuito vial en el patio con semáforo de cartón y paso de cebra de cinta.", "Paseo por el barrio para identificar señales y pasos de peatones.", "Visita de la policía local con charla adaptada."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
