// Infantil 5 años · Descubrimiento y exploración del entorno: mi pueblo o mi ciudad.
const { mapa } = require("./_util");
const { ic, vin, dibujos, mural, t, FUENTES, PROF, DE, vid, nota } = require("./_inf5a");

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "5-anos",
  titulo: "Mi pueblo o mi ciudad",
  minutos: 15,
  objetivos: ["Distinguir un pueblo de una ciudad", "Conocer los lugares importantes de donde vivo", "Saber mi dirección y cuidar mi barrio"],
  claves: ["pueblo", "ciudad", "barrio", "calle", "dirección", "ayuntamiento"],
  pregunta: { texto: "¿Cómo se llama el sitio donde vives? ¿Es un pueblo o una ciudad?", respuesta: "Cada uno tiene el suyo. Un <mark>pueblo</mark> es pequeño y una <mark>ciudad</mark> es grande, con muchas calles y edificios." },
  bloques: [
    {
      html: `<h3>Pueblo y ciudad</h3><p>Un <mark>pueblo</mark> es pequeño: casas bajas, pocas calles y el campo cerca.</p><p>Una <mark>ciudad</mark> es grande: edificios altos, muchas calles, muchos coches y mucha gente.</p>`,
      svg: vin("Un pueblo con casas bajas y árboles y una ciudad con edificios altos", `${ic("casa", 36, 120, 1.2)}${ic("casa", 80, 124, 1)}${ic("arbol", 112, 130, 1)}${ic("edificio", 168, 110, 1.6)}${ic("edificio", 214, 100, 2)}${t(70, 166, "pueblo", { size: 19, color: "var(--leaf)" })}${t(192, 166, "ciudad", { size: 19, color: "var(--pen)" })}<path d="M130 30 V150" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 5"/>`),
    },
    {
      html: `<h3>Mi calle y mi casa</h3><p>Vivo en una <mark>calle</mark> que tiene nombre. Mi casa tiene un <b>número</b>.</p><p>La calle y el número son mi <mark>dirección</mark>. Es importante saberla por si me pierdo.</p>`,
      svg: vin("Una casa con el número 7 y el cartel con el nombre de la calle", `<rect x="30" y="30" width="110" height="34" rx="6" fill="var(--pen)"/>${t(85, 54, "calle Sol", { size: 17, color: "#ffffff", max: 100 })}<path d="M85 64 V96" stroke="var(--muted)" stroke-width="4"/>${ic("casa", 190, 116, 2.4)}<circle cx="190" cy="76" r="12" fill="var(--card)" stroke="var(--ink)"/>${t(190, 82, "7", { size: 16 })}${t(85, 140, "mi dirección", { size: 17, color: "var(--red)" })}`),
    },
    {
      html: `<h3>Lugares que hay</h3><p>En mi pueblo o ciudad hay <mark>lugares</mark> para cosas distintas.</p><p>El <b>cole</b> para aprender. El <b>centro de salud</b> para curarnos. Las <b>tiendas</b> para comprar. El <b>parque</b> para jugar.</p>`,
      svg: dibujos("El cole, el centro de salud, la tienda y el parque", [["escuela", "cole", "var(--pen)"], ["hospital", "salud", "var(--red)"], ["tienda", "tienda", "var(--inf)"], ["parque", "parque", "var(--leaf)"]], { titulo: "Lugares" }),
    },
    {
      html: `<h3>El ayuntamiento</h3><p>En el <mark>ayuntamiento</mark> trabaja el alcalde o la alcaldesa con otras personas.</p><p>Cuidan del pueblo o la ciudad: limpian las calles, arreglan los parques y ponen la luz de las farolas.</p>`,
      svg: vin("El ayuntamiento con su bandera", `${ic("ayuntamiento", 130, 92, 3.4)}${t(130, 168, "ayuntamiento", { size: 20, color: "var(--inf)" })}`),
    },
    {
      html: `<h3>¿Para qué sirve? Cuidar mi barrio</h3><p>Mi barrio es de todos. Lo <mark>cuidamos</mark>: tiramos los papeles a la papelera y no pintamos las paredes.</p><p>Saludamos a los vecinos. ¡Así es más bonito vivir aquí!</p>`,
      svg: dibujos("Cuidar el barrio: papelera, saludar a los vecinos y cuidar el parque", [["basura", "papelera", "var(--muted)"], ["manos", "saludo", "var(--inf)"], ["flor", "cuido", "var(--leaf)"]], { titulo: "Cuido mi barrio" }),
    },
    {
      html: `<h3>Juego: el plano de mi barrio</h3><p>Dibuja en un papel grande tu <mark>casa</mark> y tu <mark>cole</mark>.</p><p>Une los dos con una línea: es el camino. Añade lo que ves al ir: el parque, la panadería, el semáforo…</p>`,
      svg: vin("Un plano sencillo con la casa, el cole y el camino entre ellos", `<rect x="10" y="10" width="240" height="160" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><path d="M50 130 Q90 130 110 90 Q130 50 200 50" stroke="var(--inf)" stroke-width="5" fill="none" stroke-dasharray="10 6" stroke-linecap="round"/>${ic("casa", 46, 140, 1.2)}${ic("escuela", 214, 52, 1.2)}${ic("parque", 140, 120, 0.9)}${ic("semaforo", 110, 70, 0.6)}${t(84, 150, "casa", { size: 15, color: "var(--red)" })}${t(214, 96, "cole", { size: 15, color: "var(--pen)" })}`),
    },
  ],
  figura: {
    titulo: "Los lugares de mi pueblo o mi ciudad",
    svg: mural("Mural: casa, cole, centro de salud, tienda, parque y ayuntamiento", [["casa", "mi casa", "calle y número", "var(--red)"], ["escuela", "cole", "aprendo", "var(--pen)"], ["hospital", "salud", "me curan", "var(--red)"], ["tienda", "tiendas", "compramos", "var(--inf)"], ["parque", "parque", "jugamos", "var(--leaf)"], ["ayuntamiento", "ayuntamiento", "cuida el pueblo", "var(--muted)"]]),
  },
  video: vid("dxVC5uHajeo", "CantaJuego - Ando por las calles de mi pueblo", "CantaJuego", 36932748, "CantaJuego calles de mi pueblo"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Aprendemos la dirección de casa.", pasos: ["Decimos el nombre de la calle.", "Decimos el número del portal.", "Decimos el pueblo o la ciudad."], resultado: "«Vivo en la calle Sol, número 7, en mi pueblo»." },
    { enunciado: "Me duele la garganta. ¿Adónde voy?", pasos: ["Pensamos los lugares: cole, tienda, centro de salud, parque.", "¿Dónde curan a las personas?", "En el centro de salud."], resultado: "al centro de salud, con un adulto." },
  ],
  errores: [
    "Pensar que todas las ciudades son iguales: cada una tiene sus calles y sus lugares.",
    "No saber la dirección de casa.",
    "Tirar papeles al suelo porque «ya lo limpia alguien».",
  ],
  ejercicios: [
    { q: "Di el nombre de tu calle y tu número.", sol: nota("repetidlo en los paseos hasta que lo sepa de memoria.") },
    { q: "Di el nombre de tu pueblo o ciudad.", sol: nota("si es pueblo o ciudad, comentad por qué.") },
    { q: "Dibuja el camino de casa al cole.", sol: nota("con lo que veis cada día: tiendas, semáforos, parques.") },
    { q: "Señala en un paseo el ayuntamiento, una tienda y el centro de salud.", sol: nota("explicad para qué sirve cada sitio.") },
    { q: "Saluda a un vecino o al panadero.", sol: nota("conocer a la gente del barrio da seguridad.") },
    { q: "Busca fotos antiguas de tu pueblo o ciudad.", sol: nota("comparad qué ha cambiado con las fotos de ahora.") },
  ],
  quiz: [
    { q: "Un sitio pequeño con casas bajas es un…", o: ["pueblo", "planeta", "océano"], a: 0, e: "Un pueblo." },
    { q: "Una ciudad tiene…", o: ["muchas calles", "una sola casa", "nada"], a: 0, e: "Muchas calles y edificios." },
    { q: "Para curarnos vamos al…", o: ["centro de salud", "parque", "cine"], a: 0, e: "Centro de salud." },
    { q: "La calle y el número de mi casa son mi…", o: ["dirección", "nombre", "edad"], a: 0, e: "Mi dirección." },
    { q: "Quien cuida el pueblo trabaja en el…", o: ["ayuntamiento", "zoo", "barco"], a: 0, e: "El ayuntamiento." },
    { q: "Los papeles se tiran…", o: ["a la papelera", "al suelo", "al río"], a: 0, e: "A la papelera." },
  ],
  examen: [
    { q: "Edificios altos, muchos coches y mucha gente: es una…", o: ["ciudad", "granja", "isla"], a: 0, e: "Una ciudad." },
    { q: "Para comprar pan vamos a…", o: ["la panadería", "el cole", "el ayuntamiento"], a: 0, e: "La panadería." },
    { q: "El barrio lo cuidamos…", o: ["todos", "nadie", "solo los mayores"], a: 0, e: "Todos." },
  ],
  feynman: ["Diferencia entre pueblo y ciudad", "Los lugares importantes", "Mi dirección"],
  mapa: mapa("MI PUEBLO O MI CIUDAD", "var(--pen)", [
    ["Pueblo y ciudad", "pequeño · grande", "var(--leaf)"],
    ["Mi dirección", "calle y número", "var(--red)"],
    ["Lugares", "cole · salud · tienda · parque", "var(--inf)"],
    ["Cuidarlo", "papelera · saludar", "var(--pen)"],
  ], 240),
  tarjetas: [
    ["Sitio pequeño, casas bajas", "Pueblo"],
    ["Sitio grande, edificios altos", "Ciudad"],
    ["Calle y número de mi casa", "Mi dirección"],
    ["Para curarnos…", "Centro de salud"],
    ["Quien cuida el pueblo…", "El ayuntamiento"],
    ["Los papeles van…", "A la papelera"],
  ],
  familias: [
    "Enseñadle la dirección de casa y un teléfono de la familia.",
    "Pasead por el barrio nombrando los lugares y para qué sirven.",
    "Visitad el ayuntamiento, la biblioteca o el mercado.",
    "Dad ejemplo cuidando el barrio y saludando a los vecinos.",
  ],
  profesores: PROF(DE, "Exploración del entorno social: el pueblo o la ciudad, servicios y lugares públicos, la dirección propia y el cuidado de los espacios comunes", ["Maqueta del barrio con cajas y rollos de papel.", "Salida para reconocer los lugares cercanos al colegio.", "Visita o carta al ayuntamiento con propuestas de los niños."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
